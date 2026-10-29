import { withBase } from '../i18n/routes';

/**
 * Thông tin chung của công ty và đường dẫn ảnh.
 * Sửa ở đây là toàn bộ website (cả VI lẫn EN) cập nhật theo.
 * Để trống ('') thì mục đó tự ẩn khỏi website.
 */
export const SITE = {
  url: 'https://www.learntoleap.edu.vn',
  name: 'Learn to Leap',
  legalName: 'Công ty Cổ phần Công nghệ Giáo dục Learn to Leap',
  legalNameEn: 'Learn to Leap Education Technology JSC',
  taxId: '0110407398',
  phone: '0777308883',
  phoneDisplay: '0777 308 883',
  email: 'contact@learntoleap.vn',
  website: 'www.learntoleap.edu.vn',
  address: 'Tầng 6, tòa nhà IPH, 241 Xuân Thủy, Cầu Giấy, Hà Nội',
  addressEn: '6th Floor, IPH Building, 241 Xuan Thuy, Cau Giay, Hanoi, Vietnam',
  mapQuery: 'IPH 241 Xuân Thủy, Cầu Giấy, Hà Nội',
  social: {
    zalo: 'https://zalo.me/0777308883',
    facebook: '',
    youtube: '',
    tiktok: '',
    linkedin: '',
  },
  /** File PDF Hồ sơ năng lực trong thư mục public/ (vd '/files/ho-so-nang-luc.pdf'). Để trống thì nút sẽ gửi email yêu cầu. */
  profilePdf: '',
};

/**
 * Ảnh giao diện. Đặt file vào public/images/ rồi ghi đường dẫn vào đây.
 * Vị trí nào chưa có ảnh sẽ hiện khung đồ hoạ thay thế.
 */
export const IMAGES: Record<string, string> = {
  hero: '/images/hero.webp',
  about: '/images/about.webp',
  robog: '/images/robog-mien-bac-2026.jpg',
  'sol-ihub': '/images/sol-ihub.webp',
  'sol-lab': '/images/sol-lab.webp',
  'sol-k12': '/images/sol-k12.webp',
  'sol-ngayhoi': '/images/sol-ngayhoi.webp',
  'sol-cuocthi': '/images/sol-cuocthi.webp',
  'sol-tour': '/images/sol-tour.webp',
  'sol-huanluyen': '/images/sol-huanluyen.jpg',
  'sol-traihe': '/images/sol-traihe.webp',
  'sol-doitac': '/images/sol-doitac.webp',
  'lab-photo': '/images/lab-photo.webp',
  'proj-stem57': '/images/proj-stem57.webp',
  'proj-intl': '',
  'proj-bacninh': '/images/proj-bacninh.webp',
  'hoi-thao': '/images/gallery/su-kien-07.webp',
  /** Ảnh tĩnh của hero trang chủ (khung hình từ TVC LtL 2026), dùng khi chưa có / không phát phim nền. */
  'hero-poster': '/images/hero-poster.webp',
};

export const img = (key: string) => (IMAGES[key] ? withBase(IMAGES[key]) : '');

/** Ảnh robot / thiết bị đã tách nền nền trong suốt, đặt ở public/images/robots/<tên>.webp. */
export const bot = (name: string) => withBase(`/images/robots/${name}.webp`);

/**
 * Logo đối tác (dải logo chạy ngang ở trang chủ và trang Hợp tác).
 * Đặt file PNG nền trong suốt vào public/images/partners/ rồi thêm một dòng vào đây.
 */
/** Đối tác trên dải logo. group: 'biz' = doanh nghiệp, công nghệ, tổ chức; 'public' = viện, trường đại học, cao đẳng, phổ thông. */
export type PartnerGroup = 'biz' | 'public';
export const PARTNERS: { name: string; logo: string; group: PartnerGroup }[] = [
  { name: 'IPPTech – UBTECH', logo: '/images/partners/ipptech.png', group: 'biz' },
  { name: 'UBTECH Robotics', logo: '/images/partners/ubtech.png', group: 'biz' },
  { name: "Stick 'Em (Singapore)", logo: '/images/partners/stickem.png', group: 'biz' },
  { name: 'World Energy Council Vietnam', logo: '/images/partners/wec.png', group: 'biz' },
  { name: 'VEX Robotics', logo: '/images/partners/vex.png', group: 'biz' },
  { name: 'Weeemake', logo: '/images/partners/weeemake.png', group: 'biz' },
  { name: 'MAXHUB', logo: '/images/partners/maxhub.png', group: 'biz' },
  { name: 'EBD – NXB Giáo dục Việt Nam', logo: '/images/partners/ebd.png', group: 'biz' },
  { name: 'OhStem', logo: '/images/partners/ohstem.png', group: 'biz' },
  { name: 'Edulive', logo: '/images/partners/edulive.png', group: 'biz' },
  { name: '3D Thinking', logo: '/images/partners/3dthinking.png', group: 'biz' },
  { name: 'ETEK – Total Automation Solutions', logo: '/images/partners/etek.png', group: 'biz' },
  { name: 'Hanoi High Tech (HHT)', logo: '/images/partners/hht.png', group: 'biz' },
  { name: 'IED Hà Phương', logo: '/images/partners/ied-haphuong.png', group: 'biz' },
  { name: 'ADC', logo: '/images/partners/adc.png', group: 'biz' },
  { name: 'Đối tác giáo dục', logo: '/images/partners/doi-tac-mu.png', group: 'biz' },
  { name: 'Bách Khoa Aptech', logo: '/images/partners/aptech.png', group: 'biz' },
  { name: 'Nexta', logo: '/images/partners/nexta.png', group: 'biz' },
  { name: 'Phúc Nam Thành', logo: '/images/partners/pnt.png', group: 'biz' },
  { name: 'VDSmart', logo: '/images/partners/vdsmart.png', group: 'biz' },
  { name: 'Steam Park', logo: '/images/partners/steampark.png', group: 'biz' },
  { name: 'Viện Nghiên cứu Thiết kế Trường học – Bộ GD&ĐT', logo: '/images/partners/vien-nctk.png', group: 'public' },
  { name: 'Trường Đại học Sư phạm Hà Nội', logo: '/images/partners/hnue.png', group: 'public' },
  { name: 'Trường Đại học Vinh', logo: '/images/partners/dh-vinh.png', group: 'public' },
  { name: 'Trường Cao đẳng Việt Nam – Hàn Quốc Hà Nội', logo: '/images/partners/cd-viet-han.png', group: 'public' },
  { name: 'Trường THCS Chu Văn An – Long Biên', logo: '/images/partners/thcs-chu-van-an.png', group: 'public' },
];
