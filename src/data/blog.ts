import { getCollection, type CollectionEntry } from 'astro:content';
import { withBase, type Lang } from '../i18n/routes';

export type Post = CollectionEntry<'blog'>;
export type Category = Post['data']['category'];

/** 'vi/ngay-hoi-x' → 'ngay-hoi-x' */
export const slugOf = (p: Post) => p.id.split('/').slice(1).join('/');
export const langOf = (p: Post) => p.id.split('/')[0] as Lang;

/** Bài đã đăng của một ngôn ngữ, mới nhất lên đầu. */
export const getPosts = async (lang: Lang) =>
  (await getCollection('blog', (p) => langOf(p) === lang && !p.data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

export const postPath = (lang: Lang, slug: string) => (lang === 'vi' ? `/blog/${slug}` : `/en/blog/${slug}`);
export const postHref = (p: Post) => withBase(postPath(langOf(p), slugOf(p)));

/** Phút đọc ước tính (~220 từ/phút). */
export const readMinutes = (p: Post) => Math.max(1, Math.round((p.body ?? '').split(/\s+/).filter(Boolean).length / 220));

export const fmtDate = (d: Date, lang: Lang) =>
  d.toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'en-GB', { day: '2-digit', month: lang === 'vi' ? '2-digit' : 'short', year: 'numeric' });
