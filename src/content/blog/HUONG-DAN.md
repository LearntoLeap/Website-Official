# Viết bài Blog Learn to Leap

Mỗi bài là một file Markdown:

- Tiếng Việt: `src/content/blog/vi/<duong-dan-bai>.md`
- Tiếng Anh (nếu có bản dịch): `src/content/blog/en/<duong-dan-bai>.md`, dùng **cùng tên file** với bản tiếng Việt để nút EN/VI chuyển đúng bài.

Đầu file:

```md
---
title: "Tiêu đề bài"
excerpt: "Một-hai câu tóm tắt, hiện trên thẻ bài và khi chia sẻ Facebook"
date: 2026-11-05
cover: /images/blog/ten-anh.webp   # ảnh đặt trong public/images/blog/
category: su-kien                  # su-kien | cuoc-thi | giai-phap | chia-se
author: Learn to Leap              # không bắt buộc
draft: false                       # true = chưa đăng
---

Nội dung bài viết Markdown: ## tiêu đề mục, danh sách -, > trích dẫn…
```

Các bài mẫu hiện có (`sample: true`, chữ lorem ipsum) chỉ để duyệt bố cục — xoá đi khi có bài thật.
