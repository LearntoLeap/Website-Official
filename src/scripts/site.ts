// Tương tác chung: header khi cuộn, menu mobile, đổi giao diện sáng/tối,
// hiệu ứng xuất hiện khi cuộn, bộ đếm số liệu và lightbox video/ảnh.

const root = document.documentElement;
const hdr = document.getElementById('hdr');
const onScroll = () => hdr?.classList.toggle('scrolled', window.scrollY > 20);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

/* ----- Menu mobile ----- */
const burger = document.getElementById('burger');
const setMenu = (open: boolean) => {
  document.body.classList.toggle('menu-open', open);
  if (!burger) return;
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', (open ? burger.dataset.labelClose : burger.dataset.labelOpen) || '');
};
burger?.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
document.querySelectorAll('#mob a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

/* ----- Giao diện sáng / tối ----- */
const themeBtn = document.getElementById('themeBtn');
const syncThemeBtn = () => {
  if (!themeBtn) return;
  const dark = root.dataset.theme === 'dark';
  themeBtn.setAttribute('aria-label', (dark ? themeBtn.dataset.labelLight : themeBtn.dataset.labelDark) || '');
  themeBtn.setAttribute('title', themeBtn.getAttribute('aria-label') || '');
};
syncThemeBtn();
themeBtn?.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('ltl-theme', next); } catch {}
  syncThemeBtn();
});
// Theo hệ điều hành nếu người xem chưa tự chọn.
matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', (e) => {
  let saved: string | null = null;
  try { saved = localStorage.getItem('ltl-theme'); } catch {}
  if (saved) return;
  root.dataset.theme = e.matches ? 'dark' : 'light';
  syncThemeBtn();
});

/* ----- Hiệu ứng xuất hiện + bộ đếm ----- */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const runCounters = (band: Element) => {
  const locale = (band as HTMLElement).dataset.locale || 'vi-VN';
  band.querySelectorAll<HTMLElement>('.num[data-n]').forEach((el) => {
    if (el.dataset.done) return;
    el.dataset.done = '1';
    const target = parseInt(el.dataset.n || '0', 10);
    const suf = el.dataset.suf || '';
    if (reduce) return;
    const dur = 1500;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString(locale) + suf;
      if (p < 1) requestAnimationFrame(tick);
    };
    el.textContent = '0' + suf;
    requestAnimationFrame(tick);
  });
};
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !reduce) {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      if (en.target.hasAttribute('data-stats')) runCounters(en.target);
      io.unobserve(en.target);
    }),
    { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('in'));
}

/* ----- Video phát ngay trên trang ----- */
// Video không có ảnh maxres: YouTube trả ảnh xám 120px → đổi sang hqdefault.
document.querySelectorAll<HTMLImageElement>('img[data-fallback]').forEach((im) => {
  const swap = () => { if (im.naturalWidth <= 120 && im.src !== im.dataset.fallback) im.src = im.dataset.fallback!; };
  if (im.complete && im.naturalWidth) swap(); else im.addEventListener('load', swap, { once: true });
  im.addEventListener('error', () => { if (im.src !== im.dataset.fallback) im.src = im.dataset.fallback!; }, { once: true });
});
let playing: { box: HTMLElement; html: string } | null = null;
document.addEventListener('click', (e) => {
  const btn = (e.target as Element).closest<HTMLElement>('[data-inline-yt]');
  if (!btn) return;
  const box = btn.parentElement!;
  // Chỉ phát một video một lúc: video đang phát trở lại ảnh bìa.
  if (playing && playing.box !== box) playing.box.innerHTML = playing.html;
  playing = { box, html: box.innerHTML };
  const id = encodeURIComponent(btn.dataset.inlineYt!);
  const ifr = document.createElement('iframe');
  ifr.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0&modestbranding=1`;
  ifr.title = btn.dataset.title || 'Video';
  ifr.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture';
  ifr.allowFullscreen = true;
  // YouTube cần biết trang nhúng (Referer), thiếu sẽ báo lỗi 153.
  ifr.referrerPolicy = 'strict-origin-when-cross-origin';
  box.replaceChildren(ifr);
});

/* ----- Dải video ngắn: nút trước / sau ----- */
document.querySelectorAll<HTMLElement>('[data-rail]').forEach((rail) => {
  const track = rail.querySelector<HTMLElement>('[data-rail-track]')!;
  const step = () => (track.firstElementChild as HTMLElement | null)?.offsetWidth ?? 240;
  const sync = () => {
    rail.classList.toggle('at-start', track.scrollLeft < 8);
    rail.classList.toggle('at-end', track.scrollLeft + track.clientWidth > track.scrollWidth - 8);
  };
  rail.querySelector('[data-rail-prev]')?.addEventListener('click', () => track.scrollBy({ left: -step() * 2, behavior: 'smooth' }));
  rail.querySelector('[data-rail-next]')?.addEventListener('click', () => track.scrollBy({ left: step() * 2, behavior: 'smooth' }));
  track.addEventListener('scroll', sync, { passive: true });
  sync();
});

/* ----- Lightbox video / ảnh ----- */
const lb = document.getElementById('lb');
const lbInner = document.getElementById('lbInner');
if (lb && lbInner) {
  let lastFocus: HTMLElement | null = null;
  const close = () => {
    lb.classList.remove('open');
    lb.hidden = true;
    lbInner.innerHTML = '';
    document.body.style.overflow = '';
    lastFocus?.focus();
  };
  const open = (html: string) => {
    lastFocus = document.activeElement as HTMLElement;
    lbInner.innerHTML = html;
    lb.hidden = false;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('lbX')?.focus();
  };
  const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
  document.addEventListener('click', (e) => {
    const v = (e.target as Element).closest<HTMLElement>('[data-yt]');
    if (v) {
      e.preventDefault();
      const id = v.dataset.yt!;
      open(`<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0" title="${esc(v.dataset.title || 'Video')}" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowfullscreen></iframe>`);
      return;
    }
    const p = (e.target as Element).closest<HTMLElement>('[data-photo]');
    if (p) {
      e.preventDefault();
      open(`<img src="${esc(p.dataset.photo!)}" alt="${esc(p.dataset.title || '')}">`);
    }
  });
  lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
  document.getElementById('lbX')?.addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && lb.classList.contains('open')) close(); });
}
