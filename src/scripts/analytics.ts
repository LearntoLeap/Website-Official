/* Đo lường GA4 + Microsoft Clarity, chỉ chạy khi khách đã bấm Đồng ý trên banner cookie. */
type Fn = (...args: unknown[]) => void;
declare global {
  interface Window { dataLayer?: unknown[]; gtag?: Fn; clarity?: Fn & { q?: unknown[] } }
}

const KEY = 'ltl-consent';
const read = () => { try { return localStorage.getItem(KEY); } catch { return null; } };
const save = (v: string) => { try { localStorage.setItem(KEY, v); } catch { /* chế độ ẩn danh: hỏi lại lần sau */ } };
const addScript = (src: string) => {
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  document.head.append(s);
};

/** Xoá cookie GA4 (_ga…) và Clarity (_cl…) khi khách rút lại đồng ý. */
function clearCookies(host: string) {
  for (const c of document.cookie.split(';')) {
    const name = c.split('=')[0].trim();
    if (!/^(_ga|_gid|_cl)/.test(name)) continue;
    for (const domain of ['', `;domain=.${host}`, `;domain=${location.hostname}`])
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/${domain}`;
  }
}

/** Bấm Hotline / email / Zalo → sự kiện "contact_click" trên GA4 (đánh dấu là Sự kiện chính để tính chuyển đổi). */
function trackContacts() {
  document.addEventListener('click', (e) => {
    const a = (e.target as Element).closest<HTMLAnchorElement>('a[href]');
    if (!a || !window.gtag) return;
    const h = a.getAttribute('href') || '';
    const method = h.startsWith('tel:') ? 'phone' : h.startsWith('mailto:') ? 'email' : /zalo\.me/.test(h) ? 'zalo' : '';
    if (!method) return;
    const placement = a.closest('header') ? 'header' : a.closest('footer') ? 'footer' : 'page';
    window.gtag('event', 'contact_click', { method, placement });
  }, true);
}

export function initAnalytics() {
  const box = document.querySelector<HTMLElement>('[data-consent]');
  if (!box) return;
  const { ga4 = '', clarity = '', host = '' } = box.dataset;
  // Bản xem thử (github.io, localhost, Vercel preview) vẫn hiện banner nhưng không gửi số liệu.
  const live = location.hostname === host || location.hostname.endsWith(`.${host}`);
  let started = false;

  const start = () => {
    if (started || !live) return;
    started = true;
    if (ga4) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer!.push(arguments); }; // gtag cần đúng đối tượng arguments
      window.gtag('js', new Date());
      window.gtag('config', ga4);
      addScript(`https://www.googletagmanager.com/gtag/js?id=${ga4}`);
    }
    if (clarity) {
      const q: Fn & { q?: unknown[] } = (...args) => { (q.q = q.q || []).push(args); };
      window.clarity = window.clarity || q;
      addScript(`https://www.clarity.ms/tag/${clarity}`);
    }
    trackContacts();
  };

  const choose = (v: string) => {
    save(v);
    box.hidden = true;
    if (v === 'yes') return start();
    if (!started) return clearCookies(host);
    // Rút lại đồng ý sau khi đã đo: dừng đo, xoá cookie, tải lại trang để gỡ hẳn mã đo.
    window.clarity?.('consent', false);
    clearCookies(host);
    location.reload();
  };

  box.querySelectorAll<HTMLButtonElement>('[data-consent-choice]').forEach((b) =>
    b.addEventListener('click', () => choose(b.dataset.consentChoice!)));
  document.querySelectorAll('[data-consent-open]').forEach((b) =>
    b.addEventListener('click', () => { box.hidden = false; box.querySelector('button')?.focus(); }));

  const v = read();
  if (v === 'yes') start();
  else if (v !== 'no') box.hidden = false;
}
