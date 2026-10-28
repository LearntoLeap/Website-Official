import raw from './media.json';
import { withBase, type Lang } from '../i18n/routes';

export type MediaType = 'bao' | 'video' | 'anh';
export interface MediaItem {
  type: MediaType;
  title: string;
  title_en: string;
  url: string;
  source: string;
  image: string;
  date: string;
  visible: boolean;
  /** 'short' = video dọc 9:16 (YouTube Shorts). Link dạng youtube.com/shorts/… cũng tự nhận là short. */
  format?: 'short';
  /** true = video phát ngay trên trang chủ. */
  featured?: boolean;
}

const items = (raw.items as MediaItem[]).filter((it) => it.visible !== false);

export const ytId = (u: string) => {
  const m = String(u || '').match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([\w-]{11})/);
  return m ? m[1] : '';
};
export const ytThumb = (u: string) => {
  const id = ytId(u);
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : '';
};
export const titleOf = (it: MediaItem, lang: Lang) => (lang === 'en' && it.title_en ? it.title_en : it.title);

export const press = items.filter((it) => it.type === 'bao');
const allVideos = items.filter((it) => it.type === 'video' && ytId(it.url));
const isShort = (it: MediaItem) => it.format === 'short' || /\/shorts\//.test(it.url);
/** Video ngang (16:9). */
export const videos = allVideos.filter((it) => !isShort(it));
/** Video ngắn dọc (9:16), mới nhất lên đầu. */
export const shorts = allVideos.filter(isShort).reverse();
/** Video phát trên trang chủ: mục có featured, không có thì lấy video mới nhất. */
export const featuredVideo = videos.find((it) => it.featured) ?? videos[videos.length - 1];
export const photos = items.filter((it) => it.type === 'anh' && it.image).map((it) => ({ ...it, image: withBase(it.image) }));
