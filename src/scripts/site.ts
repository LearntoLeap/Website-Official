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

/* ----- Hero: sân khấu sản phẩm ----- */
// Rê chuột: cả hero nhận --tx/--ty (-1…1) để chữ nền, sân khấu và từng ảnh trôi theo độ sâu.
const tilt = document.querySelector<HTMLElement>('[data-tilt]');
if (tilt && !reduce && matchMedia('(pointer: fine)').matches) {
  const hero = tilt.closest<HTMLElement>('.hero') ?? tilt;
  let raf = 0;
  hero.addEventListener('pointermove', (e) => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      const r = tilt.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (r.width / 2)));
      const y = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (r.height / 2)));
      hero.style.setProperty('--tx', x.toFixed(3));
      hero.style.setProperty('--ty', y.toFixed(3));
    });
  });
  hero.addEventListener('pointerleave', () => { hero.style.setProperty('--tx', '0'); hero.style.setProperty('--ty', '0'); });
}
const stage = document.querySelector<HTMLElement>('[data-stage]');
if (stage) {
  const tabs = [...stage.querySelectorAll<HTMLButtonElement>('[data-pick]')];
  const parts = (sel: string) => [...stage.querySelectorAll<HTMLElement>(sel)];
  const slides = parts('.stg-slide'), giants = parts('.stg-giant .g'), specs = parts('.spec');
  let cur = 0;
  const show = (i: number, focus = false) => {
    cur = (i + tabs.length) % tabs.length;
    tabs.forEach((t, k) => {
      const on = k === cur;
      t.classList.toggle('on', on);
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
    });
    slides.forEach((el, k) => el.classList.toggle('on', k === cur));
    giants.forEach((el, k) => el.classList.toggle('on', k === cur));
    specs.forEach((el, k) => { el.hidden = k !== cur; });
    if (focus) tabs[cur].focus();
  };
  tabs.forEach((t, k) => {
    t.addEventListener('click', () => show(k));
    t.addEventListener('keydown', (e) => {
      const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (step) { e.preventDefault(); show(cur + step, true); }
    });
  });
  // Link thẳng tới một nhóm: …/#line-3
  const m = /^#line-(\d+)$/.exec(location.hash);
  if (m && +m[1] >= 1 && +m[1] <= tabs.length) show(+m[1] - 1);
  // Tự chuyển: vạch tiến trình dưới tab đang chọn chạy hết thì sang nhóm sau.
  // Rê chuột / focus vào hero hoặc bấm nút dừng thì vạch dừng lại (WCAG 2.2.2).
  if (!reduce) {
    stage.classList.add('auto');
    stage.addEventListener('animationend', (e) => {
      if ((e.target as Element).classList.contains('prog')) show(cur + 1);
    });
    const toggle = stage.querySelector<HTMLButtonElement>('[data-stage-toggle]');
    toggle?.addEventListener('click', () => {
      const paused = stage.classList.toggle('paused');
      toggle.setAttribute('aria-pressed', String(paused));
      toggle.setAttribute('aria-label', (paused ? toggle.dataset.play : toggle.dataset.pause) || '');
    });
  }
}

/* ----- Nút dừng / chạy dải logo ----- */
document.querySelectorAll<HTMLButtonElement>('[data-ls-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const paused = btn.closest('.logo-strip')!.classList.toggle('paused');
    btn.setAttribute('aria-pressed', String(paused));
    btn.setAttribute('aria-label', (paused ? btn.dataset.play : btn.dataset.pause) || '');
  });
});

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

/* ----- Hệ sinh thái giải pháp: tab dọc, rê chuột cũng đổi mảng ----- */
document.querySelectorAll<HTMLElement>('[data-eco]').forEach((box) => {
  const tabs = [...box.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
  const panes = [...box.querySelectorAll<HTMLElement>('[role="tabpanel"]')];
  let cur = 0;
  const show = (i: number, focus = false) => {
    i = (i + tabs.length) % tabs.length;
    if (i !== cur) {
      cur = i;
      tabs.forEach((t, k) => { t.classList.toggle('on', k === i); t.setAttribute('aria-selected', String(k === i)); t.tabIndex = k === i ? 0 : -1; });
      panes.forEach((p, k) => { p.hidden = k !== i; });
    }
    if (focus) tabs[i].focus();
  };
  // Ảnh của các mảng đang ẩn: tải trước khi mục sắp vào màn hình để đổi tab không bị trống.
  const pre = new IntersectionObserver((en) => {
    if (!en[0].isIntersecting) return;
    box.querySelectorAll<HTMLImageElement>('img[loading="lazy"]').forEach((im) => { im.loading = 'eager'; });
    pre.disconnect();
  }, { rootMargin: '600px 0px' });
  pre.observe(box);
  let hoverT = 0;
  tabs.forEach((t, k) => {
    t.addEventListener('click', () => show(k));
    t.addEventListener('mouseenter', () => { clearTimeout(hoverT); hoverT = window.setTimeout(() => show(k), 140); });
    t.addEventListener('mouseleave', () => clearTimeout(hoverT));
    t.addEventListener('keydown', (e) => {
      const step = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0;
      if (step) { e.preventDefault(); show(cur + step, true); }
    });
  });
});

/* ----- Robot ló ở mép các mục: trôi nhẹ theo cuộn trang ----- */
const peeks = [...document.querySelectorAll<HTMLElement>('[data-peek]')];
if (peeks.length && !reduce) {
  const visible = new Set<HTMLElement>();
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) visible.add(en.target as HTMLElement); else visible.delete(en.target as HTMLElement);
  }));
  peeks.forEach((p) => io.observe(p));
  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = innerHeight;
    visible.forEach((p) => {
      const r = p.getBoundingClientRect();
      const k = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / vh));
      p.style.setProperty('--sy', k.toFixed(3));
    });
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
}

/* ----- Alpha Mini đồng hành ----- */
const buddy = document.querySelector<HTMLButtonElement>('[data-buddy-bot]');
if (buddy) {
  const say = JSON.parse(buddy.dataset.say || '{}') as Record<string, string>;
  const bubble = buddy.querySelector<HTMLElement>('.buddy-say')!;
  const poses = [...buddy.querySelectorAll<HTMLImageElement>('img[data-pose]')];
  let pose = 'walk';
  let lastTalk = 0;
  let talkTimer = 0;
  const setPose = (p: string) => {
    if (p === pose || !poses.some((im) => im.dataset.pose === p)) return;
    pose = p;
    poses.forEach((im) => im.classList.toggle('on', im.dataset.pose === p));
    // Nói một câu ngắn khi đổi tư thế, không quá dày.
    const now = Date.now();
    if (say[p] && now - lastTalk > 3500) {
      lastTalk = now;
      bubble.textContent = say[p];
      buddy.classList.add('talk');
      clearTimeout(talkTimer);
      talkTimer = window.setTimeout(() => buddy.classList.remove('talk'), 2600);
    }
  };
  // Chỉ hiện sau khi cuộn qua hero.
  const onScroll = () => buddy.classList.toggle('show', scrollY > innerHeight * 0.55);
  onScroll();
  addEventListener('scroll', onScroll, { passive: true });
  // Mục nào nằm giữa màn hình thì lấy tư thế của mục đó.
  const zones = document.querySelectorAll<HTMLElement>('[data-buddy]');
  const zio = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) setPose((en.target as HTMLElement).dataset.buddy || 'walk');
  }), { rootMargin: '-45% 0px -45% 0px' });
  zones.forEach((z) => zio.observe(z));
  buddy.addEventListener('mouseenter', () => {
    bubble.textContent = say.front || '';
    buddy.classList.add('talk');
    clearTimeout(talkTimer);
  });
  buddy.addEventListener('mouseleave', () => buddy.classList.remove('talk'));
  buddy.addEventListener('click', () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }));
}

/* ----- Hiệu ứng khi rê chuột: đốm sáng trên thẻ, nút hút nhẹ theo con trỏ ----- */
if (matchMedia('(pointer: fine)').matches) {
  document.addEventListener('pointermove', (e) => {
    const card = (e.target as Element).closest<HTMLElement>('.card,.rs,.pcard,.news-card');
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  }, { passive: true });
  if (!reduce) {
    document.querySelectorAll<HTMLElement>('.btn').forEach((b) => {
      b.addEventListener('pointermove', (e) => {
        const r = b.getBoundingClientRect();
        b.style.setProperty('--bx', `${((e.clientX - r.left) / r.width - 0.5) * 8}px`);
        b.style.setProperty('--by', `${((e.clientY - r.top) / r.height - 0.5) * 6}px`);
      });
      b.addEventListener('pointerleave', () => { b.style.removeProperty('--bx'); b.style.removeProperty('--by'); });
    });
  }
}

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
