# Learn to Leap — Website chính thức

Website song ngữ (Tiếng Việt / English), có giao diện sáng – tối, dựng bằng [Astro](https://astro.build) và chạy trên Vercel.

- Tiếng Việt nằm ở gốc: `/`, `/ve-chung-toi`, `/giai-phap`, `/nang-luc`, `/hop-tac`, `/tin-tuc`, `/lien-he`
- English nằm dưới `/en`: `/en`, `/en/about`, `/en/solutions`, `/en/impact`, `/en/partnership`, `/en/news`, `/en/contact`
- Link kiểu cũ (`learntoleap.edu.vn/#ve-chung-toi`…) tự chuyển sang trang mới.

## Ai sửa, sửa gì: nhật ký thay đổi

Nhiều đơn vị cùng sửa website. Sau mỗi lần đẩy lên GitHub, GitHub Actions (`.github/workflows/nhat-ky.yml`) tự ghi người đẩy, thời gian, từng commit kèm mô tả và từng file thay đổi vào nhánh [`nhat-ky`](https://github.com/LearntoLeap/Website-Official/tree/nhat-ky), mỗi tháng một file. Chỉ ghi lại, không duyệt hay chặn. Quy tắc cho nhà phân phối: [CONTRIBUTING.md](CONTRIBUTING.md).

## Đo lường (lượt truy cập, hành trình, SEO)

Mã đo nằm ở `ANALYTICS` trong `src/data/site.ts`; để trống là không đo. Có mã thì website hiện banner xin đồng ý cookie (Nghị định 13/2023), và **chỉ khi khách bấm Đồng ý** mới tải Google Analytics 4 và Microsoft Clarity. Bản xem thử (github.io, localhost, Vercel preview) vẫn hiện banner nhưng không gửi số liệu. Khách đổi ý bằng nút "Cài đặt cookie" ở chân trang.

| Công cụ | Lấy mã ở đâu | Ghi vào |
|---|---|---|
| Google Analytics 4 | analytics.google.com → Tạo tài khoản → Tạo thuộc tính → Luồng dữ liệu **Web** với `https://www.learntoleap.edu.vn` → mã trong **Hướng dẫn cài đặt → Cài đặt thủ công** (dòng `gtag('config', 'G-…')`; có thể khác Mã đo lường) | `ANALYTICS.ga4` |
| Microsoft Clarity | clarity.microsoft.com → New project → mã ở Settings → Overview, **Project ID** (khoảng 10 ký tự) | `ANALYTICS.clarity` |
| Google Search Console | search.google.com/search-console → thuộc tính **Miền** `learntoleap.edu.vn` → thêm bản ghi TXT ở nơi quản lý tên miền → gửi sitemap `https://www.learntoleap.edu.vn/sitemap-index.xml` | Không cần sửa code |

Website tự gửi sự kiện `contact_click` khi khách bấm Hotline, email hoặc Zalo (tham số `method`: phone / email / zalo; `placement`: header / footer / page). Trong GA4, vào Quản trị → Sự kiện, bật **Đánh dấu là sự kiện chính** cho `contact_click` để tính là chuyển đổi. Lượt tải file, bấm link ra ngoài, cuộn trang, xem video YouTube: bật "Đo lường nâng cao" của luồng dữ liệu là GA4 tự đếm.

Link đăng Facebook, Zalo, email nên gắn mã UTM, ví dụ `https://www.learntoleap.edu.vn/giai-phap?utm_source=facebook&utm_medium=social&utm_campaign=stem-day-2026`, để GA4 biết bài nào kéo khách về.

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

### Ảnh robot / thiết bị (nền trong suốt)

Ảnh đã tách nền nằm ở `public/images/robots/<tên>.webp`, dùng ở:
- Hero trang chủ (5 dòng sản phẩm): `STAGE` trong `src/views/Home.astro`, chữ ở `home.hero.lines` (không ghi tên hãng).
- Mục Hệ sinh thái giải pháp: `SHOTS` trong `src/components/Ecosystem.astro`, chữ ở `home.eco`.
- Robot ở hero trang con: thuộc tính `bots` của `PageHero`; Cruzr ở dải liên hệ cuối trang: `src/components/CtaBand.astro`.
- Alpha Mini đồng hành: `src/components/Buddy.astro`; tư thế theo mục đặt bằng `data-buddy` trên từng mục.

Link thẳng tới một dòng ở hero: `/#line-3`.

### Ảnh

- Ưu tiên ảnh ngang, rộng 1600–2000px, dạng `.jpg` hoặc `.webp`, dưới 400KB.
- Vị trí nào chưa có ảnh sẽ hiện khung đồ hoạ thay thế, không để trống.

## Bản xem thử trên GitHub Pages

https://learntoleap.github.io/Website-Official/ — đăng từ nhánh `gh-pages` (bản dựng sẵn). Cập nhật: `BASE_PATH=/Website-Official npm run build` rồi đẩy thư mục `dist` lên nhánh `gh-pages`. Bản này chạy dưới đường dẫn con nên đường dẫn nội bộ trong code phải qua `withBase()` / `href()` (`src/i18n/routes.ts`), không viết cứng `/images/...` trong HTML.

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
