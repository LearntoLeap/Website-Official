/**
 * Giữ từ ghép, thuật ngữ, số hiệu văn bản không bị ngắt xuống dòng: thay dấu cách bên trong bằng
 * dấu cách không ngắt (U+00A0). Áp lên toàn bộ chuỗi từ điển nên mọi tiêu đề, thẻ, đoạn văn đều được.
 * Thêm từ mới vào danh sách khi thấy tiêu đề bị ngắt giữa một từ ghép.
 */
const VI = `
học tập|nhảy vọt|kỷ nguyên|vươn mình|khởi xướng|thành công|năng lực|học sinh|đạt được|giáo dục|giáo viên|
nhà trường|trường học|lớp học|phòng học|thông minh|trí tuệ nhân tạo|nhân tạo|công nghệ|khoa học|kĩ thuật|
kỹ thuật|kỹ năng|chế tạo|lập trình|đo lường|thực nghiệm|khám phá|thiết bị|thiết kế|cấu phần|giải pháp|
hợp tác|quốc tế|chuyên gia|Việt Nam|Hà Nội|Hà Tĩnh|Nghệ An|Thái Nguyên|Bắc Ninh|Cần Thơ|phổ cập|mọi miền|
tổ quốc|công dân toàn cầu|công dân|toàn cầu|hệ sinh thái|toàn diện|đồng bộ|chiến lược|linh hoạt|cố vấn|đối tác|
mạng lưới|đề án|xã hội hoá|phê duyệt|căn cứ|pháp lý|thực hiện|triển khai|minh bạch|quy định|quy trình|vai trò|
kiến tạo|mục tiêu|dự án|tiêu biểu|nổi bật|tự hào|vinh danh|khoảnh khắc|sự kiện|trải nghiệm|hiện đại|tương lai|
thế hệ|liên thông|Mầm non|Tiểu học|chương trình|học liệu|đào tạo|tập huấn|nội thất|không gian|danh mục|đầu tư|
Thông tư 86|Thông tư|Nghị quyết|Quyết định|chuyển đổi số|chuyển đổi|Internet vạn vật|cảm biến|kết nối|vật tư|
tiêu hao|dụng cụ|chủ đề|hướng nghiệp|trại hè|ngày hội|sân chơi|cuộc thi|đội tuyển|Hồ sơ năng lực|hồ sơ|tư vấn|
liên hệ|hành trình|giá trị|cốt lõi|quyết định|sáng tạo|đổi mới|tinh gọn|hiệu quả|phù hợp|địa phương|nhà nước|
ngân sách|doanh nghiệp|phụ huynh|cơ quan|quản lý|Uỷ ban nhân dân|thực tế ảo|thực tế|mô hình|robot hình người|
hình người|thi đấu|lắp ghép|lắp đặt|máy in 3D|câu chuyện|tin tưởng|lãnh đạo|tiên phong|đấu trường|bản lĩnh|
chính sách|chủ trương|tham gia|tổ chức|vận hành|báo cáo|đánh giá|khảo sát|đề xuất|phương án|ký kết|hỗ trợ|
chuyển giao|xây dựng|cung cấp|đồng hành|phát triển|hệ thống|nền tảng|học máy|thị giác máy tính|màn hình|
tương tác|thư viện số|thư viện|bộ môn|cấp học|diện tích|vươn ra|ngay tại|mới nhất|thế kỷ 21|tư duy|thực tiễn|thuận tiện|thí nghiệm|ứng dụng|Đống Đa|case study|chi tiết|định hướng|quốc gia|Trung tâm|Hội thảo|Hội đồng|nội dung|Lộ trình|dẫn lối|Sức mạnh|Công ty Cổ phần|vươn tầm|thế giới|khởi nghiệp|Miền Bắc|Miền Nam|Pháp Luật|Viet Startup Interchange|phổ thông|bước đệm|các cấp|Đổi mới sáng tạo|STEM – AI K12|toàn quốc|khớp nối|chung kết|đằng sau|trên sóng|
Learn to Leap|Phòng STEM – AI Lab|Phòng STEM – AI|STEM – AI Lab|STEM – AI|lĩnh vực|Phòng STEM|AI Center|Innovation Hub|
TT 86|TT 02|TT 14|TT 32|NQ 57|NQ 71|QĐ 2422|TP. Hà Nội|TP. Cần Thơ|Sở GD&ĐT|Bộ GD&ĐT|Lớp 1–12|GDPT 2018
`;
const EN = `
Learn to Leap|STEM – AI|Circular 86|Resolution 57|Resolution 71|Decision 2422|STEM – AI Lab|AI Center|Innovation Hub|
artificial intelligence|Internet of Things|Viet Nam|Ha Noi|Ha Tinh|Nghe An|Thai Nguyen|Bac Ninh|Can Tho|
global citizens|smart classroom|education authority|Department of Education|3D printers?
`;

const list = (s: string) => s.split('|').map((w) => w.trim()).filter(Boolean).sort((a, b) => b.length - a.length);
const esc = (w: string) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\\\?/g, '?').replace(/ /g, '[ \\u00a0]');
const build = (s: string) => new RegExp(`(?<![\\p{L}\\p{N}])(?:${list(s).map(esc).join('|')})(?![\\p{L}\\p{N}])`, 'giu');
// Một bộ cho cả hai ngôn ngữ: thuật ngữ VI và EN không trùng nhau, chuỗi nào cũng dùng được.
const RE = build(VI + '|' + EN);
const NBSP = String.fromCharCode(160);

// Họ tên người sau danh xưng (ThS., PGS.TS, Ông, Bà…) không tách dòng.
const NAME = /(?<=(?:G?S\.TS|PGS\.TS|ThS\.|TS\.|Ông|Bà) )\p{Lu}\p{Ll}*(?: \p{Lu}\p{Ll}*){1,3}/gu;
// Tên tiếng Anh không dấu (3–4 chữ viết hoa liền nhau, đứng cuối hoặc trước dấu phẩy): Ngo Thuong Huy, MSc.
const NAME_EN = /\b[A-Z][a-z]+(?: [A-Z][a-z]+){2,3}(?=,|$)/g;
// Loại văn bản đi liền số hiệu: Thông tư 86, NQ 57, Circular 32/2018…
const DOC = /(Thông tư|Nghị quyết|Quyết định|Circular|Resolution|Decision|TT|NQ|QĐ) (?=\d)/g;

/** Một chuỗi: giữ thuật ngữ liền nhau; dấu gạch – —, dấu · và & luôn đi cùng chữ đứng trước (không mở đầu dòng). */
export const keep = (s: string) =>
  s.replace(NAME, (m) => m.replace(/ /g, NBSP)).replace(NAME_EN, (m) => m.replace(/ /g, NBSP)).replace(DOC, '$1' + NBSP).replace(RE, (m) => m.replace(/ /g, NBSP)).replace(/ (–|—|·|&amp;|&)(?= )/g, NBSP + '$1');

/** Áp keep() cho mọi chuỗi trong từ điển (giữ nguyên cấu trúc, khoá). */
export const keepAll = <T>(v: T): T =>
  (typeof v === 'string' ? keep(v)
    : Array.isArray(v) ? v.map((x) => keepAll(x))
    : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, keepAll(x)]))
    : v) as T;
