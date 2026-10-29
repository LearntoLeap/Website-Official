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
// Mỗi mục (trừ hero) hiện dần khi cuộn tới, cùng nhịp với các .reveal bên trong.
document.querySelectorAll('main section').forEach((el) => el.classList.add('sec-fade'));
const reveals = document.querySelectorAll('.reveal, .sec-fade');
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

/* ----- Hero trang chủ: phim nền ----- */
// Phim nền lặp, không tiếng; có nút dừng / phát (WCAG 2.2.2). Máy bật giảm chuyển động thì dừng ở khung đầu.
const heroVideo = document.querySelector<HTMLVideoElement>('[data-hero-video]');
if (heroVideo) {
  const btn = document.querySelector<HTMLButtonElement>('[data-hero-toggle]');
  const setPaused = (paused: boolean) => {
    if (paused) heroVideo.pause(); else heroVideo.play().catch(() => {});
    btn?.classList.toggle('paused', paused);
    btn?.setAttribute('aria-pressed', String(paused));
    btn?.setAttribute('aria-label', (paused ? btn.dataset.play : btn.dataset.pause) || '');
  };
  if (reduce) setPaused(true);
  btn?.addEventListener('click', () => setPaused(!heroVideo.paused));
}

/* ----- Hero trang chủ: hộp phát TVC (nút "Xem phim") ----- */
// Mở thì dừng phim nền và phát TVC có tiếng; đóng (nút ×, Esc, bấm ra ngoài) thì dừng TVC, phát lại phim nền.
const tvc = document.querySelector<HTMLDialogElement>('[data-tvc]');
if (tvc) {
  const film = tvc.querySelector('video')!;
  let resumeHero = false;
  document.querySelector('[data-tvc-open]')?.addEventListener('click', () => {
    resumeHero = !!heroVideo && !heroVideo.paused;
    heroVideo?.pause();
    tvc.showModal();
    film.currentTime = 0;
    film.play().catch(() => {});
  });
  // Dừng phim ngay trong hàm đóng — không trông vào sự kiện 'close' (có trình duyệt không phát).
  const shut = () => {
    film.pause();
    if (tvc.open) tvc.close();
    if (resumeHero) heroVideo?.play().catch(() => {});
    resumeHero = false;
  };
  tvc.querySelector('[data-tvc-close]')?.addEventListener('click', shut);
  tvc.addEventListener('click', (e) => { if (e.target === tvc) shut(); });
  tvc.addEventListener('cancel', (e) => { e.preventDefault(); shut(); });
  tvc.addEventListener('close', shut);
}

/* ----- Hệ sinh thái Robotic AI: sân khấu 5 dòng thiết bị ----- */
const stage = document.querySelector<HTMLElement>('[data-stage]');
if (stage) {
  const tabs = [...stage.querySelectorAll<HTMLButtonElement>('[data-pick]')];
  const parts = (sel: string) => [...stage.querySelectorAll<HTMLElement>(sel)];
  const slides = parts('.stg-slide'), giants = parts('.stg-giant .g'), specs = parts('.spec');
  let cur = 0;
  const outTimers: number[] = [];
  const show = (i: number, focus = false) => {
    i = (i + tabs.length) % tabs.length;
    if (i === cur) { if (focus) tabs[i].focus(); return; }
    const prev = cur;
    cur = i;
    tabs.forEach((t, k) => {
      const on = k === i;
      t.classList.toggle('on', on);
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
    });
    // Cảnh cũ lướt ra (.out) trong lúc cảnh mới hiện vào (.on).
    [slides, giants].forEach((list) => {
      list.forEach((el, k) => el.classList.toggle('on', k === i));
      const old = list[prev];
      old.classList.add('out');
      clearTimeout(outTimers[prev]);
      outTimers[prev] = window.setTimeout(() => old.classList.remove('out'), 900);
      list[i].classList.remove('out');
    });
    specs.forEach((el, k) => { el.hidden = k !== i; });
    if (focus) tabs[i].focus();
  };
  tabs.forEach((t, k) => {
    t.addEventListener('click', () => show(k));
    t.addEventListener('keydown', (e) => {
      const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (step) { e.preventDefault(); show(cur + step, true); }
    });
  });
  // Link thẳng tới một dòng: …/#line-3
  const m = /^#line-(\d+)$/.exec(location.hash);
  if (m && +m[1] >= 1 && +m[1] <= tabs.length) show(+m[1] - 1);
  // Tự chuyển: vạch tiến trình dưới tab đang chọn chạy hết thì sang dòng sau; chỉ chạy khi mục đang trong màn hình.
  // Có nút dừng / chạy (WCAG 2.2.2); máy bật giảm chuyển động thì không tự chuyển.
  // Ảnh các dòng đang ẩn được tải trước khi mục sắp vào màn hình để đổi dòng không bị trống.
  if ('IntersectionObserver' in window) {
    const pre = new IntersectionObserver((en) => {
      if (!en[0].isIntersecting) return;
      stage.querySelectorAll<HTMLImageElement>('img[loading="lazy"]').forEach((im) => { im.loading = 'eager'; });
      pre.disconnect();
    }, { rootMargin: '600px 0px' });
    pre.observe(stage);
    new IntersectionObserver((en) => stage.classList.toggle('off', !en[0].isIntersecting)).observe(stage);
  }
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

/* ----- Hiệu ứng tự chạy ----- */
// Chỉ chạy khi mục đang trong khung nhìn, tab đang mở và máy không bật giảm chuyển động.
const whenVisible = (el: Element, cb: (on: boolean) => void) => {
  if (!('IntersectionObserver' in window)) return cb(true);
  new IntersectionObserver(([e]) => cb(e.isIntersecting), { threshold: 0.25 }).observe(el);
};

// Hero: cụm chữ gradient đổi luân phiên; giữ chiều cao của cụm dài nhất để tiêu đề không nhảy.
const rot = document.querySelector<HTMLElement>('[data-rotate]');
if (rot && !reduce) {
  const words: string[] = JSON.parse(rot.dataset.rotate || '[]');
  const gt = rot.querySelector<HTMLElement>('.gt')!;
  const fit = () => {
    const keep = gt.textContent;
    rot.style.minHeight = '';
    rot.style.minHeight = Math.max(...words.map((w) => { gt.textContent = w; return rot.offsetHeight; })) + 'px';
    gt.textContent = keep;
  };
  fit();
  addEventListener('resize', fit);
  document.fonts?.ready.then(fit);
  let i = 0;
  setInterval(() => {
    if (document.hidden) return;
    rot.classList.add('out');
    setTimeout(() => {
      i = (i + 1) % words.length;
      gt.textContent = words[i];
      rot.classList.remove('out');
      rot.classList.add('in');
      void rot.offsetWidth;
      rot.classList.remove('in');
    }, 450);
  }, 2800);
}

// Thẻ tự chuyển điểm sáng: rê chuột / focus vào khối thì dừng và sáng đúng thẻ đang trỏ.
document.querySelectorAll<HTMLElement>('[data-cycle]').forEach((box) => {
  const items = [...box.querySelectorAll<HTMLElement>('[data-cycle-item]')];
  if (reduce || items.length < 2) return;
  const ms = parseInt(box.dataset.cycle || '3600', 10);
  box.style.setProperty('--cyc', ms + 'ms');
  let i = -1, timer = 0, seen = false, hold = false;
  const show = (n: number) => {
    items.forEach((it, k) => it.classList.toggle('on', k === n));
    i = n;
  };
  const stop = () => { clearInterval(timer); timer = 0; };
  const start = () => {
    stop();
    if (!seen || hold) return;
    show((i + 1) % items.length);
    timer = window.setInterval(() => { if (!document.hidden) show((i + 1) % items.length); }, ms);
  };
  whenVisible(box, (on) => { seen = on; if (on) start(); else { stop(); show(-1); } });
  box.addEventListener('pointerenter', () => { hold = true; stop(); box.classList.add('hold'); show(-1); });
  box.addEventListener('pointerleave', () => { hold = false; box.classList.remove('hold'); start(); });
  box.addEventListener('focusin', () => { hold = true; stop(); show(-1); });
  box.addEventListener('focusout', () => { hold = false; start(); });
});

// Dải ảnh tự trượt từng ảnh; hết dải thì quay về đầu. Người xem tự vuốt / rê chuột thì tạm dừng.
document.querySelectorAll<HTMLElement>('[data-autorail]').forEach((rail) => {
  const track = rail.querySelector<HTMLElement>('[data-autorail-track]');
  if (!track || reduce) return;
  const ms = parseInt(rail.dataset.autorail || '3200', 10);
  let seen = false, hold = false;
  const step = () => {
    if (!seen || hold || document.hidden) return;
    const card = track.firstElementChild as HTMLElement | null;
    if (!card) return;
    const w = card.offsetWidth + parseFloat(getComputedStyle(track).columnGap || '0');
    const end = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    track.scrollTo({ left: end ? 0 : track.scrollLeft + w });
  };
  whenVisible(rail, (on) => { seen = on; });
  setInterval(step, ms);
  rail.addEventListener('pointerenter', () => { hold = true; });
  rail.addEventListener('pointerleave', () => { hold = false; });
  track.addEventListener('touchstart', () => { hold = true; }, { passive: true });
  track.addEventListener('touchend', () => { setTimeout(() => { hold = false; }, ms * 2); }, { passive: true });
});

/* ----- Blog: lọc theo chủ đề, sao chép liên kết ----- */
const filter = document.querySelector<HTMLElement>('[data-blog-filter]');
if (filter) {
  const cards = [...document.querySelectorAll<HTMLElement>('[data-blog-grid] [data-cat]')];
  const empty = document.querySelector<HTMLElement>('[data-blog-empty]');
  filter.addEventListener('click', (e) => {
    const btn = (e.target as Element).closest<HTMLButtonElement>('button[data-cat]');
    if (!btn) return;
    const cat = btn.dataset.cat;
    filter.querySelectorAll('button').forEach((b) => { b.classList.toggle('on', b === btn); b.setAttribute('aria-pressed', String(b === btn)); });
    let shown = 0;
    cards.forEach((c) => { const on = !cat || c.dataset.cat === cat; c.hidden = !on; if (on) { shown++; c.classList.add('in'); } });
    if (empty) empty.hidden = shown > 0;
  });
}
document.querySelectorAll<HTMLButtonElement>('[data-copy-link]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copyLink!);
      const label = btn.textContent;
      btn.textContent = btn.dataset.done || label;
      setTimeout(() => { btn.textContent = label; }, 1800);
    } catch { /* trình duyệt chặn clipboard: bỏ qua */ }
  });
});
