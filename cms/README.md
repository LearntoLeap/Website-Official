# CMS Blog (Directus)

Directus chạy trên VPS tại `/www/directus`, tên miền `cms.learntoleap.edu.vn`. Website đọc bài lúc dựng.

`setup-blog.mjs` tạo bảng `blog_posts`, vai trò Biên tập / Tác giả / Website và khóa chỉ-đọc cho website. Đặt file vào `/www/directus`, rồi chạy (dán token quản trị khi được hỏi):

```bash
cd /www/directus && read -s -p "Token: " T; echo; docker compose exec -T -e DIRECTUS_TOKEN="$T" directus node --input-type=module < setup-blog.mjs; unset T
```

Chạy lại không tạo trùng. Directus 12 không có license thì bỏ qua vai trò Tác giả (giới hạn theo trường cần license); có license thì chạy lại để tạo.
