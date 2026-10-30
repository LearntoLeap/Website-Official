import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { Loader } from 'astro/loaders';

// Đọc bài "Đã xuất bản" từ Directus lúc dựng web. Mỗi bài tạo một mục vi/<slug> và, nếu có tiêu đề + nội dung
// tiếng Anh, một mục en/<slug>. Ảnh được tải về public/cms để web không phụ thuộc VPS khi đang chạy.
// CMS lỗi thì dừng dựng web: Vercel giữ nguyên bản đang chạy, không đăng một Blog trống.
const OUT_DIR = path.join(process.cwd(), 'public', 'cms');
const COVER = 'width=1600&quality=80&format=webp';
const INLINE = 'width=1400&quality=80&format=webp';

const FIELDS = ['slug', 'date', 'category', 'author', 'cover', 'title_vi', 'excerpt_vi', 'body_vi', 'title_en', 'excerpt_en', 'body_en'];

export const directusLoader = (url: string, token: string): Loader => ({
  name: 'directus',
  load: async ({ store, parseData, generateDigest, renderMarkdown, logger }) => {
    const get = async (p: string) => {
      const res = await fetch(url + p, { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error(`Directus ${p}: ${res.status} ${res.statusText}`);
      return res;
    };

    // Tải một ảnh (mỗi ảnh một lần), trả về đường dẫn trên web.
    const saved = new Map<string, string>();
    const saveImage = async (id: string, query: string) => {
      const cached = saved.get(id);
      if (cached) return cached;
      const res = await get(`/assets/${id}?${query}`);
      await writeFile(path.join(OUT_DIR, `${id}.webp`), Buffer.from(await res.arrayBuffer()));
      const web = `/cms/${id}.webp`;
      saved.set(id, web);
      return web;
    };

    // Ảnh chèn trong bài trỏ về /assets của CMS (cần đăng nhập) → đổi sang ảnh đã tải về.
    const host = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const assetRe = new RegExp(`(?:${host})?/assets/([0-9a-f-]{36})(?:\\.[a-z0-9]+)?(?:\\?[^\\s)"']*)?`, 'gi');
    const localize = async (body: string) => {
      const ids = new Set([...body.matchAll(assetRe)].map((m) => m[1]));
      for (const id of ids) await saveImage(id, INLINE);
      const base = (process.env.BASE_PATH || '').replace(/\/$/, '');
      return body.replace(assetRe, (_, id) => `${base}${saved.get(id)}`);
    };

    await mkdir(OUT_DIR, { recursive: true });
    const res = await get(`/items/blog_posts?limit=-1&filter[status][_eq]=published&fields=${FIELDS.join(',')}`);
    const { data: posts } = (await res.json()) as { data: Record<string, string | null>[] };

    store.clear();
    for (const post of posts) {
      if (!post.cover) { logger.warn(`Bỏ qua bài "${post.slug}": chưa có ảnh bìa`); continue; }
      const cover = await saveImage(post.cover, COVER);
      for (const lang of ['vi', 'en'] as const) {
        const title = post[`title_${lang}`];
        const raw = post[`body_${lang}`];
        if (!title || !raw) continue;
        const id = `${lang}/${post.slug}`;
        const body = await localize(raw);
        const data = await parseData({
          id,
          data: { title, excerpt: post[`excerpt_${lang}`] ?? '', date: post.date, cover, category: post.category, author: post.author || undefined },
        });
        store.set({ id, data, body, rendered: await renderMarkdown(body), digest: generateDigest({ data, body }) });
      }
    }
    logger.info(`Đã đọc ${store.keys().length} bài từ Directus`);
  },
});
