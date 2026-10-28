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
  hero: '',
  about: '',
  robog: '/images/robog-mien-bac-2026.jpg',
  'sol-ihub': '',
  'sol-lab': '',
  'sol-k12': '',
  'sol-ngayhoi': '',
  'sol-cuocthi': '',
  'sol-tour': '',
  'sol-huanluyen': '/images/sol-huanluyen.jpg',
  'sol-traihe': '',
  'sol-doitac': '',
  'lab-photo': '',
  'proj-stem57': '',
  'proj-intl': '',
  'proj-bacninh': '',
};

export const img = (key: string) => IMAGES[key] || '';
