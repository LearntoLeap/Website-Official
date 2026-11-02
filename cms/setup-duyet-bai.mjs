// Tách quyền đăng và duyệt bài: thêm vai trò QTV, bỏ quyền xóa của Biên tập, thêm Flow chặn Biên tập tự xuất bản.
// Gói Core của Directus 12 không cho giới hạn theo trường, nên quy tắc trạng thái nằm trong Flow chứ không nằm trong quyền.
// Chạy sau setup-blog.mjs (xem cms/README.md). Chạy lại không tạo trùng. Cần DIRECTUS_TOKEN của tài khoản quản trị.
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

const QTV_PERMISSIONS = [
  ['blog_posts', 'create'], ['blog_posts', 'read'], ['blog_posts', 'update'], ['blog_posts', 'delete'],
  ['directus_files', 'create'], ['directus_files', 'read'], ['directus_files', 'update'], ['directus_folders', 'read'],
];

const ensureQtvRole = async () => {
  let policy = await findOne('/policies', 'name', 'Blog: QTV duyệt bài');
  if (policy) console.log('= Chính sách QTV đã có');
  else {
    policy = await api('POST', '/policies', { name: 'Blog: QTV duyệt bài', app_access: true, admin_access: false, enforce_tfa: false });
    for (const [collection, action] of QTV_PERMISSIONS) {
      await api('POST', '/permissions', { policy: policy.id, collection, action, fields: ['*'], permissions: {}, validation: {} });
    }
    console.log('+ Đã tạo chính sách QTV');
  }
  const role = await findOne('/roles', 'name', 'QTV duyệt bài');
  if (role) { console.log('= Vai trò QTV đã có'); return role.id; }
  const created = await api('POST', '/roles', { name: 'QTV duyệt bài', policies: [{ policy: policy.id }] });
  console.log('+ Đã tạo vai trò QTV duyệt bài');
  return created.id;
};

const dropEditorDelete = async () => {
  const policy = await findOne('/policies', 'name', 'Blog: Biên tập');
  if (!policy) throw new Error('Chưa có chính sách "Blog: Biên tập": chạy setup-blog.mjs trước');
  const rows = await api('GET', `/permissions?filter[policy][_eq]=${policy.id}&filter[collection][_eq]=blog_posts&filter[action][_eq]=delete&fields=id`);
  for (const row of rows) await api('DELETE', `/permissions/${row.id}`);
  console.log(rows.length ? '+ Đã bỏ quyền xóa bài của Biên tập' : '= Biên tập đã không có quyền xóa bài');
};

const guardScript = (qtv) => `module.exports = async function (data) {
  const who = data.$accountability;
  if (!who || !who.user || who.admin || who.role === '${qtv}') return { loi: null };
  if ((data.$trigger.payload || {}).status === 'published') return { loi: 'Chỉ QTV được xuất bản. Hãy đặt trạng thái Chờ duyệt rồi lưu.' };
  if ((data.bai_hien_tai || []).length) return { loi: 'Bài đã xuất bản, chỉ QTV được sửa. Nhờ QTV chuyển bài về Bản nháp trước.' };
  return { loi: null };
};`;

const ensureGuard = async (name, scope, query, qtv) => {
  const old = await findOne('/flows', 'name', name);
  if (old) await api('DELETE', `/flows/${old.id}`);
  const flow = await api('POST', '/flows', {
    name, icon: 'gavel', status: 'active', trigger: 'event', accountability: 'all',
    options: { type: 'filter', scope, collections: ['blog_posts'] },
  });
  const op = (key, label, type, position_x, options, links = {}) => api('POST', '/operations', {
    flow: flow.id, key, name: label, type, position_x, position_y: 1, options, ...links,
  });
  const stop = await op('tu_choi', 'Từ chối', 'throw-error', 73, { code: 'KHONG_DU_QUYEN', status: '403', message: '{{kiem_tra.loi}}' });
  const verdict = await op('xet', 'Có được lưu không', 'condition', 55, { filter: { kiem_tra: { loi: { _null: true } } } }, { reject: stop.id });
  const check = await op('kiem_tra', 'Kiểm tra quyền', 'exec', 37, { code: guardScript(qtv) }, { resolve: verdict.id });
  const first = query
    ? await op('bai_hien_tai', 'Bài đang xuất bản', 'item-read', 19, { collection: 'blog_posts', permissions: '$full', query }, { resolve: check.id })
    : check;
  await api('PATCH', `/flows/${flow.id}`, { operation: first.id });
  console.log(`${old ? '~ Đã làm mới' : '+ Đã tạo'} Flow "${name}"`);
};

console.log('Directus', (await api('GET', '/server/info')).version);
const qtv = await ensureQtvRole();
await dropEditorDelete();
await ensureGuard('Chặn Biên tập tạo bài xuất bản', ['items.create'], null, qtv);
await ensureGuard('Chặn Biên tập xuất bản hoặc sửa bài đã lên web', ['items.update'], {
  filter: { _and: [{ id: { _in: '{{$trigger.keys}}' } }, { status: { _eq: 'published' } }] },
  fields: ['id'],
}, qtv);
console.log('Xong.');
