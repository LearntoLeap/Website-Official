# Hướng dẫn sửa website cho nhà phân phối

Website chính thức của Learn to Leap có nhiều đơn vị cùng sửa. Để biết **ai đã sửa gì**, mọi thay đổi đều đi qua quy trình dưới đây.

## 1. Chuẩn bị

- Mỗi người dùng **tài khoản GitHub riêng**, không dùng chung. Gửi tên tài khoản cho Learn to Leap để được mời vào repo.
- Đọc phần "Cập nhật nội dung" trong [README.md](README.md) để biết sửa ở file nào.

## 2. Sửa và gửi yêu cầu

1. Tạo nhánh mới từ `main` (không sửa thẳng trên `main`; GitHub sẽ chặn).
2. Sửa nội dung.
3. Thêm **một file nhật ký mới**: chép [`nhat-ky/_mau.md`](nhat-ky/_mau.md) thành `nhat-ky/YYYY-MM-DD-ten-ngan.md` và điền đủ:
   - họ tên, đơn vị, tài khoản GitHub của bạn;
   - loại thay đổi và các trang bị ảnh hưởng;
   - **Thay đổi**: ghi cụ thể từng chỗ (chữ cũ → chữ mới, ảnh nào, mục nào);
   - **Lý do**.
4. Tạo Pull Request vào `main` và điền mẫu có sẵn.

## 3. Kiểm tra và duyệt

- GitHub tự kiểm tra file nhật ký (mục **Nhật ký thay đổi**). Báo lỗi thì đọc phần "Cần sửa" trong kết quả kiểm tra, sửa rồi đẩy lại.
- Learn to Leap xem và duyệt. Chỉ khi được duyệt, thay đổi mới được gộp vào `main` để lên website.

## Quy tắc

- Nhật ký đã ghi **không được sửa hay xoá**. Cần đính chính thì thêm file nhật ký mới.
- Không đưa thông số sản phẩm chưa xác minh, ảnh có watermark hay logo chưa được phép sử dụng.
- Sửa chữ thì sửa cả bản Tiếng Việt (`src/i18n/vi.ts`) và English (`src/i18n/en.ts`).
