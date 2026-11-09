import vi from './vi';
import en from './en';
import type { Lang } from './routes';
import { keepAll } from './keep';
export { keep } from './keep';

// Từ điển đã xử lý giữ thuật ngữ liền dòng (xem keep.ts).
export const DICTS = { vi: keepAll(vi), en: keepAll(en) };
export const useT = (lang: Lang) => DICTS[lang];

/** [[chữ]] → chữ tô gradient. Chuỗi trong từ điển là HTML tin cậy (do mình viết).
 *  Cụm dài kiểu "STEM – AI – Robotics" chỉ giữ liền ở tiêu đề lớn (.kw), màn hẹp được phép xuống dòng sau dấu gạch. */
export const rich = (s: string) => s
  .replace(/\[\[(.+?)\]\]/g, '<span class="gt">$1</span>')
  .replace(/(?:[^\s<>"]+\xa0)*STEM(?:[ \xa0]–[ \xa0](?:AI|Robotics))+(?:\xa0[^\s<]+)*/g, '<span class="kw">$&</span>');

/** Bỏ thẻ HTML và dấu [[ ]] — dùng cho alt, title, meta. */
export const plain = (s: string) => s.replace(/\[\[|\]\]/g, '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

export const numFmt = (lang: Lang) => (lang === 'vi' ? 'vi-VN' : 'en-US');
