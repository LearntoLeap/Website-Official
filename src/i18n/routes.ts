export type Lang = 'vi' | 'en';
export const LANGS: Lang[] = ['vi', 'en'];

export type PageKey = 'home' | 'about' | 'solutions' | 'impact' | 'partnership' | 'news' | 'contact';

/** Đường dẫn từng trang theo ngôn ngữ. Tiếng Việt là mặc định, nằm ở gốc. */
export const ROUTES: Record<PageKey, Record<Lang, string>> = {
  home:        { vi: '/',            en: '/en' },
  about:       { vi: '/ve-chung-toi', en: '/en/about' },
  solutions:   { vi: '/giai-phap',   en: '/en/solutions' },
  impact:      { vi: '/nang-luc',    en: '/en/impact' },
  partnership: { vi: '/hop-tac',     en: '/en/partnership' },
  news:        { vi: '/tin-tuc',     en: '/en/news' },
  contact:     { vi: '/lien-he',     en: '/en/contact' },
};

/** Hash của trang cũ (bản một file trên WordPress) → trang mới, để link cũ vẫn chạy. */
export const LEGACY_HASHES: Record<string, PageKey> = {
  'trang-chu': 'home',
  've-chung-toi': 'about',
  'giai-phap': 'solutions',
  'nang-luc': 'impact',
  'hop-tac': 'partnership',
  'tin-tuc': 'news',
  'lien-he': 'contact',
};

export const href = (page: PageKey, lang: Lang) => ROUTES[page][lang];
