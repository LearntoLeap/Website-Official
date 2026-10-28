import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// BASE_PATH: chỉ đặt khi xem thử trên GitHub Pages (vd /Website-Official). Bản chính thức trên Vercel để trống.
const base = process.env.BASE_PATH || '/';
const sub = base !== '/';

export default defineConfig({
  site: 'https://www.learntoleap.edu.vn',
  base,
  // GitHub Pages phục vụ thư mục /en/ tốt hơn file en.html, nên bản xem thử dựng dạng thư mục.
  trailingSlash: sub ? 'ignore' : 'never',
  build: { format: sub ? 'directory' : 'file' },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'vi', locales: { vi: 'vi-VN', en: 'en-US' } },
    }),
  ],
});
