# Nhật ký thay đổi website

Mọi thay đổi trên website (kể cả của Learn to Leap) đều kèm **một file nhật ký mới** trong thư mục này, ghi rõ **ai sửa, thuộc đơn vị nào, sửa gì, ở trang nào và vì sao**.

- Mỗi lần sửa thêm một file `YYYY-MM-DD-ten-ngan.md`, chép từ [`_mau.md`](_mau.md).
- File nhật ký đã ghi **không được sửa hay xoá**. Cần đính chính thì thêm file mới.
- GitHub tự kiểm tra mỗi yêu cầu sửa (Pull Request): thiếu nhật ký, thiếu thông tin, hoặc tài khoản GitHub ghi trong nhật ký khác người tạo yêu cầu thì không được gộp vào web.
- Ngoài file nhật ký, GitHub còn lưu sẵn tài khoản người sửa, thời điểm và từng dòng thay đổi trong mỗi Pull Request và commit.

Xem bảng tổng hợp mọi lần thay đổi:

```bash
npm run nhat-ky
```

Thay đổi trước ngày 03/11/2026 (giai đoạn Learn to Leap dựng site) xem trong [lịch sử commit](https://github.com/LearntoLeap/Website-Official/commits/main).

Bài viết Blog đăng qua CMS (Directus) không đi qua GitHub. Directus tự ghi người sửa và từng bản sửa của mỗi bài (mục Activity và Revisions), với điều kiện mỗi người dùng tài khoản riêng.
