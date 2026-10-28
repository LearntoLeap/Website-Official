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
};

export const img = (key: string) => (IMAGES[key] ? withBase(IMAGES[key]) : '');

/** Ảnh robot / thiết bị đã tách nền nền trong suốt, đặt ở public/images/robots/<tên>.webp. */
export const bot = (name: string) => withBase(`/images/robots/${name}.webp`);

/**
 * Logo đối tác (dải logo chạy ngang ở trang chủ và trang Hợp tác).
 * Đặt file PNG nền trong suốt vào public/images/partners/ rồi thêm một dòng vào đây.
 */
export const PARTNERS: { name: string; logo: string }[] = [
  { name: 'Viện Nghiên cứu Thiết kế Trường học – Bộ GD&ĐT', logo: '/images/partners/vien-nctk.png' },
  { name: 'IPPTech – UBTECH', logo: '/images/partners/ipptech.png' },
  { name: "Stick 'Em (Singapore)", logo: '/images/partners/stickem.png' },
  { name: 'World Energy Council Vietnam', logo: '/images/partners/wec.png' },
  { name: 'Trường Đại học Sư phạm Hà Nội', logo: '/images/partners/hnue.png' },
  { name: 'Trường Đại học Vinh', logo: '/images/partners/dh-vinh.png' },
  { name: 'VEX Robotics', logo: '/images/partners/vex.png' },
  { name: 'OhStem', logo: '/images/partners/ohstem.png' },
  { name: 'Bách Khoa Aptech', logo: '/images/partners/aptech.png' },
  { name: 'Nexta', logo: '/images/partners/nexta.png' },
  { name: 'Phúc Nam Thành', logo: '/images/partners/pnt.png' },
  { name: 'VDSmart', logo: '/images/partners/vdsmart.png' },
  { name: 'Steam Park', logo: '/images/partners/steampark.png' },
];
