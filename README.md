# Learn to Leap — Website chính thức

Website song ngữ (Tiếng Việt / English), có giao diện sáng – tối, dựng bằng [Astro](https://astro.build) và chạy trên Vercel.

- Tiếng Việt nằm ở gốc: `/`, `/ve-chung-toi`, `/giai-phap`, `/nang-luc`, `/hop-tac`, `/tin-tuc`, `/lien-he`
- English nằm dưới `/en`: `/en`, `/en/about`, `/en/solutions`, `/en/impact`, `/en/partnership`, `/en/news`, `/en/contact`
- Link kiểu cũ (`learntoleap.edu.vn/#ve-chung-toi`…) tự chuyển sang trang mới.

## Chạy thử trên máy

```bash
npm install
npm run dev        # mở http://localhost:4321
npm run build      # tạo bản dựng vào dist/
npm run check      # kiểm tra lỗi (vd: bản EN thiếu mục so với bản VI)
```

## Cập nhật nội dung (thủ công)

| Muốn sửa | Sửa file |
|---|---|
| Chữ trên website (Tiếng Việt) | `src/i18n/vi.ts` |
| Chữ trên website (English) | `src/i18n/en.ts` — phải giữ cùng cấu trúc với `vi.ts` |
| Hotline, email, địa chỉ, Zalo, Facebook, YouTube, file Hồ sơ năng lực | `src/data/site.ts` (`SITE`) |
| Ảnh giao diện (hero, ảnh từng giải pháp, dự án…) | Chép ảnh vào `public/images/`, ghi đường dẫn vào `IMAGES` trong `src/data/site.ts` |
| Tin báo chí, video, ảnh sự kiện | `src/data/media.json` |

Trong `vi.ts`/`en.ts`: `[[chữ]]` là chữ tô màu gradient; được dùng `<strong>`, `<em>`, `<br>`.

### Thêm một bài báo / video vào `src/data/media.json`

Thêm vào **cuối** mảng `items` (mục ở cuối được coi là mới nhất và hiện lên đầu):

```json
{
  "type": "bao",
  "title": "Tiêu đề bài báo",
  "title_en": "English title (để trống thì bản EN dùng tiêu đề tiếng Việt)",
  "url": "https://bao.vn/duong-dan-bai-viet",
  "source": "Tên báo",
  "image": "",
  "date": "",
  "visible": true
}
```

- `type`: `bao` (bài báo), `video` (link YouTube) hoặc `anh` (ảnh sự kiện, ghi link ảnh vào `image`).
- `visible: false` để ẩn tạm một mục mà không cần xoá.
- Video: `url` là link YouTube; ảnh xem trước lấy tự động từ YouTube.
- Video ngắn dọc (YouTube Shorts): dán link dạng `https://youtube.com/shorts/…` là tự vào dải "Video ngắn" (hoặc thêm `"format": "short"`). Dải này chỉ hiện khi có ít nhất một video ngắn.
- `"featured": true`: video phát ngay trên trang chủ (chỉ đặt cho một video).

### Logo đối tác

Chép logo PNG nền trong suốt vào `public/images/partners/`, thêm một dòng vào `PARTNERS` trong `src/data/site.ts`.

### Ảnh

- Ưu tiên ảnh ngang, rộng 1600–2000px, dạng `.jpg` hoặc `.webp`, dưới 400KB.
- Vị trí nào chưa có ảnh sẽ hiện khung đồ hoạ thay thế, không để trống.

## Triển khai lên Vercel

1. Vercel → **Add New Project** → chọn repo này. Vercel tự nhận Astro (build `npm run build`, thư mục `dist`).
2. Mỗi lần đẩy code lên nhánh `main`, website tự cập nhật. Nhánh khác tạo bản xem trước (preview).
3. Gắn tên miền: Project → Settings → Domains → thêm `www.learntoleap.edu.vn` và `learntoleap.edu.vn`, rồi sửa DNS theo hướng dẫn của Vercel.

## Cấu trúc

```
src/
  i18n/        nội dung VI/EN + bảng đường dẫn
  data/        thông tin công ty, ảnh, tin tức/video
  components/  khối giao diện dùng chung
  views/       7 trang (mỗi trang dùng cho cả VI và EN)
  pages/       đường dẫn: mỗi file gọi view tương ứng với ngôn ngữ
  layouts/     khung HTML, SEO, giao diện sáng/tối
  scripts/     tương tác (menu, sáng/tối, hiệu ứng, lightbox)
  styles/      CSS chung (màu sắc đặt ở :root và [data-theme="dark"])
```
