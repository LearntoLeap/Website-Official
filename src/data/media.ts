import raw from './media.json';
import type { Lang } from '../i18n/routes';

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
export const videos = items.filter((it) => it.type === 'video' && ytId(it.url));
export const photos = items.filter((it) => it.type === 'anh' && it.image);
