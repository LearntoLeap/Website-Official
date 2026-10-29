import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog Learn to Leap: mỗi bài là 1 file Markdown trong src/content/blog/<vi|en>/<slug>.md.
// Bài tiếng Anh dùng cùng slug với bài tiếng Việt để nút đổi ngôn ngữ trỏ đúng bài.
const blog = defineCollection({
  loader: glob({ pattern: '{vi,en}/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    /** Ảnh bìa trong public/, vd /images/gallery/su-kien-01.webp */
    cover: z.string(),
    category: z.enum(['su-kien', 'cuoc-thi', 'giai-phap', 'chia-se']),
    author: z.string().default('Learn to Leap'),
    /** true = bài mẫu để duyệt bố cục (chữ lorem ipsum), hiện nhãn "Bài mẫu". */
    sample: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
