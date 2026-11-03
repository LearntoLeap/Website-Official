# Hướng dẫn sửa website cho nhà phân phối

Website chính thức của Learn to Leap có nhiều đơn vị cùng sửa. GitHub **tự ghi nhật ký** mọi lần đẩy thay đổi: ai đẩy, lúc nào, từng commit kèm mô tả và từng file thay đổi. Không có bước duyệt; nhật ký chỉ để tra cứu.

Xem nhật ký: nhánh [`nhat-ky`](https://github.com/LearntoLeap/Website-Official/tree/nhat-ky) (mỗi tháng một file).

## Quy tắc

1. **Mỗi người một tài khoản GitHub riêng**, không dùng chung. Nhật ký ghi theo tài khoản đã đăng nhập khi đẩy. Gửi tên tài khoản cho Learn to Leap để được mời vào repo.
2. **Viết mô tả commit rõ ràng**, vì nhật ký chép nguyên văn:
   - dòng đầu: sửa gì (vd: `Cập nhật ảnh và mô tả robot UGOT ở trang Giải pháp`);
   - các dòng sau (nếu cần): chi tiết từng chỗ và lý do, ghi kèm tên đơn vị.
3. Sửa chữ thì sửa cả bản Tiếng Việt (`src/i18n/vi.ts`) và English (`src/i18n/en.ts`). Bảng "sửa ở file nào" nằm trong [README.md](README.md).
4. Không đưa thông số sản phẩm chưa xác minh, ảnh có watermark hay logo chưa được phép sử dụng.
5. Không đẩy đè lịch sử (`git push --force`) và không xoá nhánh `main`, `release`; GitHub chặn hai việc này để nhật ký không bị mất.
