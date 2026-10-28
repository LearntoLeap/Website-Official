import vi from './vi';
import en from './en';
import type { Lang } from './routes';

export const DICTS = { vi, en };
export const useT = (lang: Lang) => DICTS[lang];

/** [[chữ]] → chữ tô gradient. Chuỗi trong từ điển là HTML tin cậy (do mình viết). */
export const rich = (s: string) => s.replace(/\[\[(.+?)\]\]/g, '<span class="gt">$1</span>');

/** Bỏ thẻ HTML và dấu [[ ]] — dùng cho alt, title, meta. */
export const plain = (s: string) => s.replace(/\[\[|\]\]/g, '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

export const numFmt = (lang: Lang) => (lang === 'vi' ? 'vi-VN' : 'en-US');
