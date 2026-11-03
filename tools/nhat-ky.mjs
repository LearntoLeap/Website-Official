// Nhật ký thay đổi website: mỗi thay đổi kèm một file nhat-ky/YYYY-MM-DD-ten-ngan.md ghi người sửa và chi tiết.
//   node tools/nhat-ky.mjs kiem-tra [--base origin/main] [--head HEAD] [--actor <tài khoản GitHub>]
//   node tools/nhat-ky.mjs tong-hop          (in bảng tổng hợp mọi lần thay đổi, mới nhất trước)
import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync, appendFileSync } from 'node:fs';

const DIR = 'nhat-ky';
const FIXED = new Set([`${DIR}/README.md`, `${DIR}/_mau.md`]);
const NAME = /^nhat-ky\/(\d{4}-\d{2}-\d{2})-[a-z0-9-]+\.md$/;
const FIELDS = ['ngay', 'nguoi_sua', 'don_vi', 'github', 'loai', 'trang'];
const LOAI = ['Nội dung', 'Hình ảnh', 'Sản phẩm', 'Giao diện', 'Chức năng', 'Sửa lỗi', 'Khác'];

const git = (...a) => execFileSync('git', a, { encoding: 'utf8' }).trim();
const arg = (k, d) => { const i = process.argv.indexOf(`--${k}`); return i > 0 ? process.argv[i + 1] : d; };

/** Đọc phần đầu `key: value` giữa hai dòng `---` và phần nội dung bên dưới. */
function parse(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(text);
  if (!m) return null;
  const meta = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = /^([a-z_]+):\s*(.*)$/.exec(line);
    if (kv) meta[kv[1]] = kv[2].trim();
  }
  return { meta, body: m[2] };
}

/** Lấy nội dung của một mục `## Tên` trong phần thân. */
const section = (body, title) => {
  const m = new RegExp(`^##\\s*${title}[^\\n]*\\n([\\s\\S]*?)(?=^##\\s|$(?![\\s\\S]))`, 'mi').exec(body);
  return m ? m[1].replace(/<!--[\s\S]*?-->/g, '').trim() : '';
};

function checkEntry(file, text, actor) {
  const errs = [];
  const p = parse(text);
  if (!p) return [`${file}: thiếu phần đầu giữa hai dòng ---`];
  const { meta, body } = p;
  for (const k of FIELDS) if (!meta[k]) errs.push(`${file}: chưa điền "${k}"`);
  const day = NAME.exec(file)?.[1];
  if (meta.ngay && meta.ngay !== day) errs.push(`${file}: "ngay" (${meta.ngay}) phải trùng ngày ở tên file (${day})`);
  if (meta.loai && !LOAI.includes(meta.loai)) errs.push(`${file}: "loai" phải là một trong: ${LOAI.join(', ')}`);
  if (actor && meta.github && meta.github.replace(/^@/, '').toLowerCase() !== actor.toLowerCase())
    errs.push(`${file}: "github" là ${meta.github} nhưng người tạo yêu cầu là @${actor}; mỗi người tự ghi nhật ký của mình`);
  const what = section(body, 'Thay đổi');
  if (what.length < 20) errs.push(`${file}: mục "## Thay đổi" cần ghi rõ đã sửa gì (ít nhất một dòng cụ thể)`);
  if (!section(body, 'Lý do')) errs.push(`${file}: mục "## Lý do" đang trống`);
  return errs;
}

function kiemTra() {
  let base = arg('base', 'origin/main');
  const head = arg('head', 'HEAD');
  const actor = arg('actor', '');
  if (/^0+$/.test(base)) base = `${head}~1`; // nhánh mới tạo
  const range = git('merge-base', base, head);
  const rows = git('diff', '--name-status', '--no-renames', range, head).split('\n').filter(Boolean)
    .map((l) => { const [s, f] = l.split('\t'); return { s, f }; });
  const errs = [];
  const added = [];
  for (const { s, f } of rows) {
    if (!f.startsWith(`${DIR}/`) || FIXED.has(f)) continue;
    if (s !== 'A') { errs.push(`${f}: nhật ký đã ghi không được sửa hay xoá (thêm file mới nếu cần đính chính)`); continue; }
    if (!NAME.test(f)) { errs.push(`${f}: tên file phải theo dạng nhat-ky/YYYY-MM-DD-ten-ngan.md (chữ thường, không dấu)`); continue; }
    added.push(f);
  }
  const others = rows.filter((r) => !r.f.startsWith(`${DIR}/`));
  if (others.length && !added.length) errs.push(`Có ${others.length} file thay đổi nhưng chưa có file nhật ký mới trong ${DIR}/ (chép ${DIR}/_mau.md)`);
  for (const f of added) errs.push(...checkEntry(f, git('show', `${head}:${f}`), actor));

  const report = [
    `### Nhật ký thay đổi`,
    added.length ? added.map((f) => `- \`${f}\``).join('\n') : '- (chưa có)',
    `\n**${others.length} file website thay đổi**`,
    ...others.map((r) => `- ${r.s} \`${r.f}\``),
    errs.length ? `\n### Cần sửa\n${errs.map((e) => `- ${e}`).join('\n')}` : '\nHợp lệ.',
  ].join('\n');
  if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, report + '\n');
  console.log(report);
  process.exit(errs.length ? 1 : 0);
}

function tongHop() {
  const files = readdirSync(DIR).filter((f) => NAME.test(`${DIR}/${f}`)).sort().reverse();
  console.log('| Ngày | Người sửa | Đơn vị | GitHub | Loại | Trang | Thay đổi |\n|---|---|---|---|---|---|---|');
  for (const f of files) {
    const p = parse(readFileSync(`${DIR}/${f}`, 'utf8'));
    if (!p) continue;
    const m = p.meta;
    const first = section(p.body, 'Thay đổi').split('\n')[0].replace(/^[-*]\s*/, '').replace(/\|/g, '/');
    console.log(`| ${m.ngay} | ${m.nguoi_sua} | ${m.don_vi} | @${m.github.replace(/^@/, '')} | ${m.loai} | ${m.trang} | ${first} |`);
  }
}

const cmd = process.argv[2];
if (cmd === 'kiem-tra') kiemTra();
else if (cmd === 'tong-hop') tongHop();
else { console.error('Dùng: node tools/nhat-ky.mjs kiem-tra | tong-hop'); process.exit(2); }
