// Nhật ký thay đổi: mỗi lần có người đẩy (push) lên GitHub, ghi lại ai đẩy, lúc nào, từng commit và từng file thay đổi.
// Nhật ký nằm ở nhánh riêng `nhat-ky` (mỗi tháng một file), không đụng tới mã website.
//   node tools/nhat-ky.mjs ghi                 (GitHub Actions gọi sau mỗi lần đẩy)
//   node tools/nhat-ky.mjs khoi-tao <thư-mục>  (ghi lại toàn bộ lịch sử cũ của main vào thư mục, dùng một lần)
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const LOG_BRANCH = 'nhat-ky';
const EMPTY_TREE = '4b825dc642cb6eb9a060e54bf8d69288fbee4904';
const ZERO = /^0+$/;
const MAX_COMMITS = 100;
const MAX_FILES = 60;
const REPO = process.env.GITHUB_REPOSITORY || 'LearntoLeap/Website-Official';
const WEB = `${process.env.GITHUB_SERVER_URL || 'https://github.com'}/${REPO}`;

const git = (args, cwd) => execFileSync('git', args, { encoding: 'utf8', cwd, maxBuffer: 64 << 20 }).trim();
const tryGit = (args, cwd) => { try { return git(args, cwd); } catch { return null; } };

const vnTime = (d) => new Intl.DateTimeFormat('vi-VN', {
  timeZone: 'Asia/Ho_Chi_Minh', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false,
}).format(new Date(d));
const vnMonth = (d) => {
  const p = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Ho_Chi_Minh', year: 'numeric', month: '2-digit' }).formatToParts(new Date(d));
  return `${p.find((x) => x.type === 'year').value}-${p.find((x) => x.type === 'month').value}`;
};
const STATUS = { A: 'Thêm', M: 'Sửa', D: 'Xoá', T: 'Đổi kiểu' };

/** Các file một commit thay đổi (commit gộp thì so với cha thứ nhất). */
function files(sha) {
  const parents = git(['rev-list', '--parents', '-n', '1', sha]).split(' ').slice(1);
  const base = parents[0] || EMPTY_TREE;
  const num = new Map(git(['diff', '--no-renames', '--numstat', base, sha]).split('\n').filter(Boolean)
    .map((l) => { const [a, d, f] = l.split('\t'); return [f, a === '-' ? 'nhị phân' : `+${a} −${d}`]; }));
  return git(['diff', '--no-renames', '--name-status', base, sha]).split('\n').filter(Boolean)
    .map((l) => { const [s, f] = l.split('\t'); return `${STATUS[s[0]] || s} \`${f}\` (${num.get(f) ?? ''})`; });
}

/** Một commit: mã, tiêu đề, tác giả ghi trong commit, nội dung mô tả và danh sách file. */
function commitMd(sha) {
  const [short, name, email, date, subject] = git(['show', '-s', '--format=%h%x00%an%x00%ae%x00%aI%x00%s', sha]).split('\0');
  const body = git(['show', '-s', '--format=%b', sha]).split('\n')
    .filter((l) => !/^(Co-Authored-By|Signed-off-by):/i.test(l)).join('\n').trim();
  const list = files(sha);
  const out = [`- **[${short}](${WEB}/commit/${sha})** ${subject}`,
    `  - Tác giả ghi trong commit: ${name} <${email}> · ${vnTime(date)}`];
  if (body) out.push(...body.split('\n').map((l) => `  > ${l}`));
  out.push(...list.slice(0, MAX_FILES).map((f) => `  - ${f}`));
  if (list.length > MAX_FILES) out.push(`  - … và ${list.length - MAX_FILES} file khác`);
  return out.join('\n');
}

/** Chèn mục mới lên đầu file của tháng, cập nhật mục lục README của nhánh nhật ký. */
function insert(dir, month, md) {
  const file = join(dir, `${month}.md`);
  const [y, m] = month.split('-');
  const head = `# Nhật ký thay đổi tháng ${m}/${y}\n\nMới nhất ở trên. Giờ Việt Nam.\n`;
  const old = existsSync(file) ? readFileSync(file, 'utf8').slice(head.length).trim() : '';
  writeFileSync(file, `${head}\n${md}\n${old ? `\n---\n\n${old}\n` : ''}`);
  const months = readdirSync(dir).filter((f) => /^\d{4}-\d{2}\.md$/.test(f)).sort().reverse();
  writeFileSync(join(dir, 'README.md'), [
    '# Nhật ký thay đổi website',
    '',
    `GitHub tự ghi mỗi lần có người đẩy thay đổi lên [${REPO}](${WEB}): **ai đẩy** (tài khoản GitHub đã đăng nhập), lúc nào, lên nhánh nào, từng commit kèm mô tả và từng file thay đổi.`,
    '',
    '"Người đẩy" là tài khoản GitHub thật đã đăng nhập khi đẩy. "Tác giả ghi trong commit" do máy người sửa tự khai, dùng để tham khảo.',
    '',
    '## Theo tháng',
    '',
    ...months.map((f) => `- [${f.slice(5, 7)}/${f.slice(0, 4)}](${f})`),
    '',
  ].join('\n'));
}

/** Gọi trong GitHub Actions sau một lần đẩy. */
function ghi() {
  const ev = JSON.parse(readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'));
  // Sự kiện "delete" (xoá nhánh/tag) có cấu trúc khác "push".
  if (process.env.GITHUB_EVENT_NAME === 'delete') Object.assign(ev, { deleted: true, ref: ev.ref_type === 'tag' ? `tag ${ev.ref}` : ev.ref, before: '' });
  const branch = ev.ref.replace(/^refs\/heads\//, '');
  const pusher = process.env.GITHUB_ACTOR || ev.pusher?.name;
  const now = new Date();
  const lines = [`### ${vnTime(now)} · nhánh \`${branch}\` · người đẩy: [@${pusher}](https://github.com/${pusher})`, ''];

  let shas = [];
  if (ev.deleted) {
    lines.push(`**Xoá \`${branch}\`.**` + (ev.before ? ` Commit cuối: [${ev.before.slice(0, 7)}](${WEB}/commit/${ev.before})` : ''));
  } else {
    if (ev.created || ZERO.test(ev.before)) {
      const others = git(['for-each-ref', '--format=%(refname)', 'refs/remotes/origin']).split('\n')
        .filter((r) => r && r !== `refs/remotes/origin/${branch}` && r !== 'refs/remotes/origin/HEAD' && r !== `refs/remotes/origin/${LOG_BRANCH}`);
      shas = git(['rev-list', '--reverse', ev.after, '--not', ...others]).split('\n').filter(Boolean);
      lines.push(`**Tạo nhánh mới \`${branch}\`.**`, '');
    } else {
      shas = git(['rev-list', '--reverse', `${ev.before}..${ev.after}`]).split('\n').filter(Boolean);
      if (ev.forced) {
        const lost = tryGit(['rev-list', `${ev.after}..${ev.before}`]);
        lines.push(`**⚠ Đẩy đè lịch sử (force push).** Trước đó nhánh ở [${ev.before.slice(0, 7)}](${WEB}/commit/${ev.before})`
          + (lost ? `; ${lost.split('\n').length} commit cũ bị gỡ khỏi nhánh.` : '.'), '');
      }
      lines.push(`[Xem toàn bộ thay đổi của lần đẩy này](${WEB}/compare/${ev.before.slice(0, 12)}...${ev.after.slice(0, 12)})`, '');
    }
    lines.push(`${shas.length} commit:`, '');
    lines.push(...shas.slice(-MAX_COMMITS).map(commitMd));
    if (shas.length > MAX_COMMITS) lines.push(`- … và ${shas.length - MAX_COMMITS} commit cũ hơn`);
  }
  const md = lines.join('\n');
  const month = vnMonth(now);

  // Ghi vào nhánh nhật ký; nếu người khác vừa ghi trước thì lấy bản mới rồi thử lại.
  const dir = join(process.env.RUNNER_TEMP || '.', 'nhat-ky-log');
  git(['config', '--global', 'user.name', 'github-actions[bot]']);
  git(['config', '--global', 'user.email', '41898282+github-actions[bot]@users.noreply.github.com']);
  for (let attempt = 1; attempt <= 5; attempt++) {
    tryGit(['worktree', 'remove', '--force', dir]);
    git(['fetch', 'origin', `+refs/heads/${LOG_BRANCH}:refs/remotes/origin/${LOG_BRANCH}`]);
    git(['worktree', 'add', '--detach', dir, `origin/${LOG_BRANCH}`]);
    insert(dir, month, md);
    git(['add', '-A'], dir);
    git(['commit', '-q', '-m', `Nhật ký: @${pusher} đẩy lên ${branch} (${shas.length} commit)`], dir);
    if (tryGit(['push', 'origin', `HEAD:refs/heads/${LOG_BRANCH}`], dir) !== null) {
      console.log(md);
      if (process.env.GITHUB_STEP_SUMMARY) writeFileSync(process.env.GITHUB_STEP_SUMMARY, md + '\n', { flag: 'a' });
      return;
    }
    console.log(`Lần ${attempt}: nhánh nhật ký vừa có ghi mới, thử lại…`);
  }
  throw new Error('Không ghi được nhật ký sau 5 lần thử');
}

/** Ghi lại lịch sử của main trước khi bật nhật ký: mỗi commit một mục, không có thông tin người đẩy. */
function khoiTao(dir) {
  mkdirSync(dir, { recursive: true });
  const shas = git(['rev-list', '--reverse', 'origin/main']).split('\n').filter(Boolean);
  for (const sha of shas) {
    const date = git(['show', '-s', '--format=%cI', sha]);
    insert(dir, vnMonth(date), [
      `### ${vnTime(date)} · nhánh \`main\` · (trước khi bật nhật ký, không ghi người đẩy)`, '', commitMd(sha),
    ].join('\n'));
  }
  console.log(`Đã ghi ${shas.length} commit vào ${dir}`);
}

const [cmd, arg] = process.argv.slice(2);
if (cmd === 'ghi') ghi();
else if (cmd === 'khoi-tao' && arg) khoiTao(arg);
else { console.error('Dùng: node tools/nhat-ky.mjs ghi | khoi-tao <thư-mục>'); process.exit(2); }
