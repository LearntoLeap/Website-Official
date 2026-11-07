import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { Loader } from 'astro/loaders';
import sharp from 'sharp';

// Đọc bài "Đã xuất bản" từ Directus lúc dựng web. Mỗi bài tạo một mục vi/<slug> và, nếu có tiêu đề + nội dung
// tiếng Anh, một mục en/<slug>. Ảnh được tải về public/cms để web không phụ thuộc VPS khi đang chạy.
// CMS lỗi thì dừng dựng web: Vercel giữ nguyên bản đang chạy, không đăng một Blog trống.
const OUT_DIR = path.join(process.cwd(), 'public', 'cms');
const COVER = 'width=1600&quality=80&format=webp';
const INLINE = 'width=1400&quality=80&format=webp';

const FIELDS = ['slug', 'date', 'category', 'author', 'cover', 'title_vi', 'excerpt_vi', 'body_vi', 'seo_vi', 'title_en', 'excerpt_en', 'body_en', 'seo_en'];

/** Ô SEO của plugin @directus-labs/seo-plugin (lưu JSON). og_image là "<uuid>.<đuôi>". */
type Seo = { title?: string; meta_description?: string; og_image?: string; no_index?: boolean; no_follow?: boolean } | null;

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
      let img: Buffer;
      try {
        img = Buffer.from(await (await get(`/assets/${id}?${query}`)).arrayBuffer());
      } catch (e) {
        // Directus không thu nhỏ ảnh quá 6000px → tải bản gốc, tự thu nhỏ bằng sharp. HEIC iPhone thì sharp cũng không đọc được.
        const orig = Buffer.from(await (await get(`/assets/${id}`)).arrayBuffer());
        const width = Number(new URLSearchParams(query).get('width'));
        img = await sharp(orig, { limitInputPixels: false }).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 80 }).toBuffer();
        logger.warn(`Ảnh ${id}: ${(e as Error).message} → đã tự thu nhỏ từ bản gốc`);
      }
      await writeFile(path.join(OUT_DIR, `${id}.webp`), img);
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
    const { data: posts } = (await res.json()) as { data: Record<string, any>[] };

    store.clear();
    let failed = 0;
    for (const post of posts) {
      if (!post.cover) { logger.warn(`Bỏ qua bài "${post.slug}": chưa có ảnh bìa`); continue; }
      // Một bài lỗi (thường do ảnh Directus không thu nhỏ được: HEIC, >6000px, không phải ảnh) chỉ bỏ bài đó,
      // không làm hỏng cả lần dựng web. Gom mục của bài rồi mới ghi, để không ghi dở một ngôn ngữ.
      const entries: Parameters<typeof store.set>[0][] = [];
      try {
        const cover = await saveImage(post.cover, COVER);
        for (const lang of ['vi', 'en'] as const) {
          const title = post[`title_${lang}`];
          const raw = post[`body_${lang}`];
          if (!title || !raw) continue;
          const id = `${lang}/${post.slug}`;
          const body = await localize(raw);
          const seo: Seo = post[`seo_${lang}`];
          const robots = [seo?.no_index && 'noindex', seo?.no_follow && 'nofollow'].filter(Boolean).join(', ');
          const data = await parseData({
            id,
            data: {
              title, excerpt: post[`excerpt_${lang}`] ?? '', date: post.date, cover, category: post.category, author: post.author || undefined,
              seoTitle: seo?.title?.trim() || undefined,
              seoDescription: seo?.meta_description?.trim() || undefined,
              ogImage: seo?.og_image ? await saveImage(seo.og_image.slice(0, 36), COVER) : undefined,
              robots: robots || undefined,
            },
          });
          // Trình soạn thảo trực quan lưu HTML; bài cũ soạn bằng Markdown vẫn hiển thị được.
          const rendered = body.trimStart().startsWith('<') ? { html: body } : await renderMarkdown(body);
          entries.push({ id, data, body, rendered, digest: generateDigest({ data, body }) });
        }
      } catch (e) {
        failed++;
        logger.warn(`Bỏ qua bài "${post.slug}": ${(e as Error).message}`);
        continue;
      }
      for (const entry of entries) store.set(entry);
    }
    // Bài nào cũng lỗi thì nhiều khả năng CMS đang trục trặc: dừng dựng để Vercel giữ bản đang chạy.
    if (failed && !store.keys().length) throw new Error(`Directus: cả ${failed} bài đều lỗi, dừng dựng web`);
    logger.info(`Đã đọc ${store.keys().length} bài từ Directus${failed ? `, bỏ qua ${failed} bài lỗi` : ''}`);
  },
});
