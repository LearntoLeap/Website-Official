// Tạo cấu trúc Blog trong Directus: bảng blog_posts, 3 vai trò (Biên tập, Tác giả, Website) và khóa chỉ-đọc cho website.
// Chạy một lần trên VPS (xem cms/README.md). Chạy lại không tạo trùng; khóa website chỉ in ra ở lần tạo đầu.
// Cần biến môi trường DIRECTUS_TOKEN là token của tài khoản quản trị.
import { randomBytes } from 'node:crypto';

const BASE = process.env.DIRECTUS_URL || 'http://127.0.0.1:8055';
const TOKEN = process.env.DIRECTUS_TOKEN;
if (!TOKEN) { console.error('Thiếu DIRECTUS_TOKEN'); process.exit(1); }

const api = async (method, path, body) => {
  const res = await fetch(BASE + path, {
    method,
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const text = await res.text();
  const json = text ? JSON.parse(text) : {};
  if (!res.ok) throw new Error(`${method} ${path}: ${res.status} ${text.slice(0, 400)}`);
  return json.data;
};
const findOne = async (path, field, value) => {
  const rows = await api('GET', `${path}?filter[${field}][_eq]=${encodeURIComponent(value)}&limit=1`);
  return rows[0];
};

const field = (name, type, meta = {}, schema = {}) => ({ field: name, type, meta, schema });
const divider = (name, title) => ({
  field: name, type: 'alias',
  meta: { interface: 'presentation-divider', special: ['alias', 'no-data'], options: { title }, width: 'full' },
});
const choices = (items) => ({ choices: items.map(([value, text]) => ({ value, text })) });

const POST_FIELDS = [
  field('id', 'integer', { hidden: true, readonly: true, interface: 'input' }, { is_primary_key: true, has_auto_increment: true }),
  field('status', 'string', {
    interface: 'select-dropdown', display: 'labels', width: 'half', required: true,
    note: 'Chỉ bài "Đã xuất bản" mới lên website',
    options: choices([['draft', 'Bản nháp'], ['review', 'Chờ duyệt'], ['published', 'Đã xuất bản']]),
    display_options: { choices: [
      { value: 'draft', text: 'Bản nháp', foreground: '#FFFFFF', background: '#6B7280' },
      { value: 'review', text: 'Chờ duyệt', foreground: '#FFFFFF', background: '#D97706' },
      { value: 'published', text: 'Đã xuất bản', foreground: '#FFFFFF', background: '#16A34A' },
    ] },
  }, { default_value: 'draft', is_nullable: false }),
  field('date', 'date', { interface: 'datetime', width: 'half', required: true, note: 'Ngày đăng hiển thị trên bài' }, { is_nullable: false }),
  field('slug', 'string', {
    interface: 'input', width: 'half', required: true,
    note: 'Đường dẫn bài: chữ thường không dấu, nối bằng gạch ngang, vd ngay-hoi-stem-ha-noi',
    options: { slug: true, trim: true },
    validation: { slug: { _regex: '^[a-z0-9]+(-[a-z0-9]+)*$' } },
    validation_message: 'Chỉ dùng chữ thường không dấu, số và dấu gạch ngang',
  }, { is_nullable: false, is_unique: true }),
  field('category', 'string', {
    interface: 'select-dropdown', display: 'labels', width: 'half', required: true,
    options: choices([['su-kien', 'Sự kiện'], ['cuoc-thi', 'Cuộc thi'], ['giai-phap', 'Giải pháp'], ['chia-se', 'Chia sẻ']]),
  }, { is_nullable: false }),
  field('author', 'string', { interface: 'input', width: 'half', note: 'Để trống sẽ hiện "Learn to Leap"' }),
  field('cover', 'uuid', { interface: 'file-image', display: 'image', special: ['file'], width: 'half', required: true, note: 'Ảnh ngang, rộng tối thiểu 1600px' }),
  divider('div_vi', 'Tiếng Việt'),
  field('title_vi', 'string', { interface: 'input', width: 'full', required: true, options: { trim: true } }, { is_nullable: false }),
  field('excerpt_vi', 'text', { interface: 'input-multiline', width: 'full', required: true, note: 'Tóm tắt 1–2 câu, hiện trên thẻ bài viết' }),
  field('body_vi', 'text', { interface: 'input-rich-text-md', width: 'full', required: true }),
  divider('div_en', 'English (không bắt buộc: để trống tiêu đề thì bài chỉ có bản tiếng Việt)'),
  field('title_en', 'string', { interface: 'input', width: 'full', options: { trim: true } }),
  field('excerpt_en', 'text', { interface: 'input-multiline', width: 'full' }),
  field('body_en', 'text', { interface: 'input-rich-text-md', width: 'full' }),
];

const ensureCollection = async () => {
  const all = await api('GET', '/collections');
  if (all.some((c) => c.collection === 'blog_posts')) return console.log('= Bảng blog_posts đã có');
  await api('POST', '/collections', {
    collection: 'blog_posts',
    schema: {},
    meta: {
      icon: 'article', note: 'Bài viết Blog Learn to Leap', display_template: '{{title_vi}}',
      archive_field: null, sort_field: null, translations: [
        { language: 'vi-VN', translation: 'Bài viết', singular: 'Bài viết', plural: 'Bài viết' },
      ],
    },
    fields: POST_FIELDS,
  });
  await api('POST', '/relations', {
    collection: 'blog_posts', field: 'cover', related_collection: 'directus_files',
    schema: { on_delete: 'SET NULL' }, meta: {},
  });
  console.log('+ Đã tạo bảng blog_posts');
};

const ensurePolicy = async (name, opts, perms) => {
  const found = await findOne('/policies', 'name', name);
  if (found) { console.log(`= Chính sách "${name}" đã có`); return found.id; }
  const policy = await api('POST', '/policies', { name, ...opts });
  try {
    for (const [collection, action, fields] of perms) {
      await api('POST', '/permissions', { policy: policy.id, collection, action, fields, permissions: {}, validation: {} });
    }
  } catch (e) {
    await api('DELETE', `/policies/${policy.id}`);
    if (!String(e.message).includes('RESOURCE_RESTRICTED')) throw e;
    console.log(`! Bỏ qua "${name}": cần license Directus (chưa có). Có license thì chạy lại script này.`);
    return null;
  }
  console.log(`+ Đã tạo chính sách "${name}"`);
  return policy.id;
};

const ensureRole = async (name, policy) => {
  const found = await findOne('/roles', 'name', name);
  if (found) { console.log(`= Vai trò "${name}" đã có`); return found.id; }
  const role = await api('POST', '/roles', { name, policies: [{ policy }] });
  console.log(`+ Đã tạo vai trò "${name}"`);
  return role.id;
};

const FILES = [
  ['directus_files', 'create', ['*']],
  ['directus_files', 'read', ['*']],
  ['directus_files', 'update', ['*']],
  ['directus_folders', 'read', ['*']],
];
// Tác giả sửa được mọi trường trừ status: bài luôn ở trạng thái mặc định "Bản nháp" cho đến khi Biên tập đổi.
// Directus 12 chỉ cho giới hạn theo trường khi có license, nên không có license thì vai trò này được bỏ qua.
const AUTHOR_FIELDS = POST_FIELDS.map((f) => f.field).filter((f) => !['id', 'status', 'div_vi', 'div_en'].includes(f));

const ensureRoles = async () => {
  const editor = await ensurePolicy('Blog: Biên tập', { app_access: true, admin_access: false, enforce_tfa: false }, [
    ['blog_posts', 'create', ['*']], ['blog_posts', 'read', ['*']], ['blog_posts', 'update', ['*']], ['blog_posts', 'delete', ['*']],
    ...FILES,
  ]);
  const author = await ensurePolicy('Blog: Tác giả', { app_access: true, admin_access: false, enforce_tfa: false }, [
    ['blog_posts', 'create', AUTHOR_FIELDS], ['blog_posts', 'read', ['*']], ['blog_posts', 'update', AUTHOR_FIELDS],
    ...FILES,
  ]);
  const website = await ensurePolicy('Blog: Website chỉ đọc', { app_access: false, admin_access: false, enforce_tfa: false }, [
    ['blog_posts', 'read', ['*']], ['directus_files', 'read', ['*']],
  ]);
  await ensureRole('Biên tập', editor);
  if (author) await ensureRole('Tác giả', author);
  return ensureRole('Website', website);
};

const ensureWebsiteUser = async (role) => {
  const email = 'website-build@learntoleap.edu.vn';
  if (await findOne('/users', 'email', email)) return console.log('= Tài khoản website đã có (khóa cũ giữ nguyên)');
  const token = randomBytes(32).toString('hex');
  await api('POST', '/users', { first_name: 'Website', last_name: 'Build', email, role, token });
  console.log(`+ Đã tạo tài khoản website. KHÓA CHỈ-ĐỌC (chỉ hiện một lần, dán vào Vercel):\n\n${token}\n`);
};

await ensureCollection();
await ensureWebsiteUser(await ensureRoles());
console.log('Xong.');
