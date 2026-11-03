---
ngay: 2026-11-03
nguoi_sua: Lê Văn Trí
don_vi: Learn to Leap
github: LearntoLeap
loai: Chức năng
trang: Không ảnh hưởng giao diện
---

## Thay đổi

- Thêm `.github/workflows/nhat-ky.yml`: GitHub tự kiểm tra file nhật ký ở mỗi Pull Request và mỗi lần đẩy lên `main`/`release`.
- Đặt bước "Kiểm tra nhật ký" thành điều kiện bắt buộc trước khi gộp vào `main` và `release`.

## Lý do

Hoàn tất cơ chế ghi người sửa và chi tiết thay đổi; bước tự kiểm tra cần quyền workflow nên đẩy sau.
