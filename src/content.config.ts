import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { directusLoader } from './data/directus-loader';

// Blog Learn to Leap: có CMS_URL + CMS_TOKEN (đặt trên Vercel) thì đọc bài từ Directus;
// không có thì dùng bài mẫu trong src/content/blog/<vi|en>/<slug>.md để chạy thử ở máy.
// Bài tiếng Anh dùng cùng slug với bài tiếng Việt để nút đổi ngôn ngữ trỏ đúng bài.
const { CMS_URL, CMS_TOKEN } = process.env;
const blog = defineCollection({
  loader: CMS_URL && CMS_TOKEN ? directusLoader(CMS_URL.replace(/\/$/, ''), CMS_TOKEN) : glob({ pattern: '{vi,en}/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    /** Ảnh bìa trong public/, vd /images/gallery/su-kien-01.webp hoặc /cms/<id>.webp */
    cover: z.string(),
    category: z.enum(['su-kien', 'cuoc-thi', 'giai-phap', 'chia-se']),
    author: z.string().default('Learn to Leap'),
    /** true = bài mẫu để duyệt bố cục (chữ lorem ipsum), hiện nhãn "Bài mẫu". */
    sample: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
