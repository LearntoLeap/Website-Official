/**
 * Nội dung tiếng Việt của toàn bộ website.
 * Quy ước: [[chữ]] = chữ tô màu gradient; được dùng <strong>, <em>, <br> trong chuỗi.
 * File en.ts phải có cùng cấu trúc (TypeScript sẽ báo lỗi nếu thiếu mục).
 */
const vi = {
  langName: 'Tiếng Việt',
  langShort: 'VI',
  locale: 'vi-VN',
  common: {
    buddy: {
      label: 'Alpha Mini — lên đầu trang',
      say: { handsup: 'Xin chào! Mình là Alpha Mini', jump: 'Nhiều robot hay quá!', walk: 'Cùng khám phá nhé', front: 'Bấm mình để lên đầu trang', bow: 'Cảm ơn bạn đã ghé thăm!' },
    },
    pauseMotion: 'Tạm dừng dải logo',
    playMotion: 'Chạy dải logo',
    prevLogo: 'Logo trước',
    nextLogo: 'Logo sau',
    srSolutions: 'Tám giải pháp của Learn to Leap',
    srAudiences: 'Đối tượng hợp tác',
    nav: {
      home: 'Trang chủ',
      about: 'Về chúng tôi',
      solutions: 'Giải pháp',
      products: 'Sản phẩm',
      scheme: 'Đề án theo NSNN',
      xhh: 'Đề án XHH',
      stickem: "Stick 'Em Lab XHH",
      projects: 'Dự án tiêu biểu',
      store: 'Store',
      impact: 'Năng lực & Dấu ấn',
      partnership: 'Hợp tác',
      news: 'Blog',
      contact: 'Liên hệ',
    },
    /** Menu thả xuống ở thanh điều hướng. */
    showMore: 'Xem thêm',
    menu: { scheme: 'Đề án', allProducts: 'Xem tất cả sản phẩm', open: 'Mở menu con' },
    ctaPartner: 'Hợp tác cùng LtL',
    call: 'Gọi',
    menuOpen: 'Mở menu',
    menuClose: 'Đóng menu',
    skip: 'Bỏ qua, tới nội dung chính',
    consent: {
      label: 'Cookie',
      text: 'Chúng tôi sử dụng cookie để cải thiện trải nghiệm của bạn trên website.',
      accept: 'Chấp nhận',
      decline: 'Từ chối',
      settings: 'Cài đặt cookie',
    },
    switchLang: 'English',
    switchLangLabel: 'Switch to English',
    themeToLight: 'Chuyển sang giao diện sáng',
    themeToDark: 'Chuyển sang giao diện tối',
    photoSoon: 'Ảnh thực tế',
    close: 'Đóng',
  },
  footer: {
    about: 'Phổ cập STEM – AI — Học tập để nhảy vọt trong kỷ nguyên vươn mình. Đơn vị tư vấn & cung cấp giải pháp giáo dục STEM và Trí tuệ nhân tạo cho trường phổ thông Việt Nam.',
    solutions: 'Giải pháp',
    company: 'Công ty',
    contact: 'Liên hệ',
    solLinks: [
      { label: 'Phòng STEM – AI Lab', hash: '#lab' },
      { label: 'Phòng học thông minh', hash: '#phtm' },
      { label: 'AI Lab · AI Center', hash: '#ai-lab' },
      { label: 'Chương trình STEM', hash: '#k12' },
      { label: 'Ngày hội & Sân chơi', hash: '#san-choi' },
      { label: 'Innovation Hub', hash: '#innovation-hub' },
    ],
    profile: 'Tải Hồ sơ năng lực (PDF)',
    rights: 'Công ty Cổ phần Công nghệ Giáo dục Learn to Leap · MST',
    aligned: 'Đồng hành:',
  },
  meta: {
    home: {
      title: 'Learn to Leap — Tư vấn & Giải pháp Giáo dục STEM · AI',
      description: 'Learn to Leap (LtL) — đơn vị tư vấn và cung cấp giải pháp giáo dục STEM và Trí tuệ nhân tạo cho trường phổ thông Việt Nam. Chuẩn quốc tế, bản địa hoá theo GDPT 2018 và khung của Bộ GD&ĐT.',
    },
    about: {
      title: 'Về chúng tôi — Learn to Leap',
      description: 'Tầm nhìn, sứ mệnh, câu chuyện và giá trị cốt lõi của Learn to Leap — đơn vị phổ cập giáo dục STEM và AI cho học sinh Việt Nam.',
    },
    solutions: {
      title: 'Giải pháp STEM – AI — Learn to Leap',
      description: 'Tám giải pháp đồng bộ: Phòng STEM – AI Lab, Phòng học thông minh, AI Lab, chương trình STEM K12, ngày hội & sân chơi, tour hè, huấn luyện đội tuyển và Innovation Hub.',
    },
    impact: {
      title: 'Năng lực & Dấu ấn — Learn to Leap',
      description: 'Hơn 20 tỉnh thành, 50+ đối tác, 100+ ngày hội STEM – AI – Robotics với 30.000+ học sinh tham gia. Các dự án tiêu biểu và giải thưởng của Learn to Leap.',
    },
    partnership: {
      title: 'Hợp tác — Learn to Leap',
      description: 'Phương án hợp tác linh hoạt cho Sở/Phòng GD&ĐT, nhà trường và doanh nghiệp. Quy trình 5 bước, mạng lưới 50+ đối tác, bám sát NQ 57, NQ 71 và khung của Bộ GD&ĐT.',
    },
    news: {
      title: 'Blog — Learn to Leap',
      description: 'Câu chuyện từ lớp học, ngày hội, cuộc thi và góc nhìn chuyên môn về giáo dục STEM – AI – Robotics do đội ngũ Learn to Leap viết.',
    },
    contact: {
      title: 'Liên hệ — Learn to Leap',
      description: 'Liên hệ Learn to Leap: hotline 0777 308 883, email contact@learntoleap.vn, trụ sở 241 Xuân Thủy, Cầu Giấy, Hà Nội.',
    },
    products: {
      title: 'Sản phẩm — Learn to Leap',
      description: 'Các nhóm sản phẩm STEM – AI – Robotics của Learn to Leap: robot hình người, robot lập trình, robot lắp ghép AI, học liệu STEAM và STEM – IoT cho trường phổ thông.',
    },
    scheme: {
      title: 'Đề án Chuyển đổi số & Giáo dục STEM – AI — Learn to Leap',
      description: 'Learn to Leap tư vấn xây dựng đề án Chuyển đổi số, Giáo dục thông minh, Giáo dục STEM – AI toàn tỉnh và đề án STEM từ ngân sách nhà nước, bám sát NQ 57, NQ 71 và TT 86/2026.',
    },
    xhh: {
      title: 'Đề án xã hội hoá giáo dục STEM – AI — Learn to Leap',
      description: 'Mô hình xã hội hoá: doanh nghiệp đầu tư phòng STEM – AI, Learn to Leap chuyển giao và vận hành chương trình cùng nhà trường.',
    },
    stickem: {
      title: "Phòng STEM – AI Stick 'Em Lab theo mô hình xã hội hoá — Learn to Leap",
      description: "Learn to Leap đầu tư thiết bị, học liệu, robot Stick 'Em và tập huấn giáo viên để trường Tiểu học, THCS triển khai STEM – AI ngoài giờ chính khoá theo TT 85/2026 và TT 86/2026.",
    },
    projects: {
      title: 'Dự án tiêu biểu — Learn to Leap',
      description: 'Các dự án tiêu biểu Learn to Leap đã triển khai: STEM Innovation 57, ROBOG Miền Bắc 2026, hợp tác Nghệ An, Thái Nguyên, Bắc Ninh, Hà Nội…',
    },
    store: {
      title: 'Store — Danh mục giải pháp theo Thông tư 86 — Learn to Leap',
      description: 'Danh mục giải pháp, thiết bị giáo dục STEM của Learn to Leap sắp theo các nhóm của Thông tư 86/2026/TT-BGDĐT.',
    },
    notFound: { title: 'Không tìm thấy trang — Learn to Leap', description: 'Trang bạn tìm không tồn tại.' },
  },

  /* ---------- Dùng chung nhiều trang ---------- */
  solutions: [
    // Thứ tự CEO chốt 07/11/2026: STEM Lab → PHTM → AI Lab → Chương trình → Ngày hội/Sân chơi → Tour hè → Huấn luyện → Innovation Hub.
    // hash: neo section tương ứng trên trang Giải pháp.
    { id: 'sol-lab', hash: '#lab', num: '01', icon: 'lab', title: 'Phòng STEM – AI Lab', desc: 'Mô hình phòng học hiện đại tích hợp thiết bị robot AI, không gian linh hoạt và nền tảng LMS — chuẩn quốc tế, trang bị theo Thông tư 86/2026.', tag: 'Giải pháp chủ lực' },
    { id: 'sol-phtm', hash: '#phtm', num: '02', icon: 'screen', title: 'Phòng học thông minh', desc: 'Màn hình tương tác, thiết bị học tập số và phần mềm quản lý lớp học — biến mỗi phòng học thành không gian dạy học số.', tag: 'Lớp học số' },
    { id: 'sol-ailab', hash: '#ai-lab', num: '03', icon: 'robot', title: 'AI Lab · AI Center', desc: 'Không gian trải nghiệm trí tuệ nhân tạo với robot hình người, thị giác máy tính và các dự án AI thực tế cho học sinh, giáo viên.', tag: 'Humanoid AI' },
    { id: 'sol-k12', hash: '#k12', num: '04', icon: 'book', title: 'Chương trình STEM – AI K12', desc: 'Khung chương trình liên thông Mầm non → THPT về Robotics, Lập trình & AI, bám sát Khung năng lực số (TT 02/2025).', tag: 'Mầm non → THPT' },
    { id: 'sol-ngayhoi', hash: '#san-choi', num: '05', icon: 'megaphone', title: 'Ngày hội & Sân chơi', desc: 'Hơn 100 ngày hội đã tổ chức với 30.000+ học sinh tham gia, cùng các cuộc thi cấp trường, tỉnh, quốc gia và quốc tế.', tag: '100+ ngày hội' },
    { id: 'sol-traihe', hash: '#tour-he', num: '06', icon: 'camp', title: 'Tour hè & Trại hè công nghệ', desc: 'Trại hè STEM – AI cho học sinh 7–16 tuổi và tour trải nghiệm hướng nghiệp tại các khu công nghiệp, doanh nghiệp công nghệ.', tag: 'Hè sáng tạo' },
    { id: 'sol-huanluyen', hash: '#huan-luyen', num: '07', icon: 'terminal', title: 'Huấn luyện đội tuyển', desc: 'Đào tạo chuyên sâu cho đội tuyển dự các đấu trường hàng đầu: VEX Robotics, UBTECH, WRO, FLL, GreenMech, OhStem…', tag: 'Vươn ra quốc tế' },
    { id: 'sol-ihub', hash: '#innovation-hub', num: '08', icon: 'hub', title: 'Innovation Hub', desc: 'Chuỗi trung tâm học tập tương lai trên toàn quốc: Blended Learning, khoá học trực tuyến, Active Learning, workshop và xưởng sáng chế cuối tuần.', tag: 'Hệ sinh thái ILH' },
  ],
  awards: [
    { img: 'aw-sei', icon: 'star', label: 'Giải thưởng 2023 · 2025', title: 'SEI Awards 2023 & 2025', short: '"Ảnh hưởng giáo dục của năm" — vượt 200+ dự án.', desc: 'Vượt qua hơn 200 dự án, Learn to Leap được chọn là "Sáng kiến giáo dục thông minh" SEI Awards 2023 và 2025, hạng mục "Ảnh hưởng giáo dục của năm".' },
    { img: 'proj-stem57', icon: 'shieldCheck', label: 'Dự án quốc gia', title: 'STEM Innovation 57', short: 'Phòng Lab trao tặng bởi đồng chí Tổng Bí thư.', desc: 'Phòng Lab trao tặng tại THCS Cầu Giấy & THPT Kim Liên bởi đồng chí Tổng Bí thư.' },
    { img: 'proj-bacninh', icon: 'trend', label: 'Tỉnh Bắc Ninh', title: 'Top 12 dự án Bắc Ninh', short: 'Được tỉnh lựa chọn hỗ trợ phát triển.', desc: '1 trong 12 dự án xuất sắc được tỉnh Bắc Ninh lựa chọn hỗ trợ phát triển.' },
    { img: 'aw-top20', icon: 'globe', label: 'Hà Nội · Đổi mới sáng tạo', title: 'Viet Startup Interchange 2024 & 2026', short: 'Doanh nghiệp ĐMST nổi bật của Hà Nội học tập, trao đổi quốc tế.', desc: 'Một trong những doanh nghiệp nổi bật về đổi mới sáng tạo của TP. Hà Nội được tham gia học tập và trao đổi trong chương trình Viet Startup Interchange (2024, 2026).' },
  ],
  portrait: {
    title: 'Năng lực cốt lõi kiến tạo nên [[công dân toàn cầu]]',
    lead: 'Mỗi học sinh đi qua chương trình của Learn to Leap được phát triển toàn diện theo khung năng lực đầu ra chuẩn thế kỷ 21.',
    items: [
      { icon: 'monitor', title: 'Làm chủ công nghệ nền tảng' },
      { icon: 'code', title: 'Tư duy lập trình & KHMT' },
      { icon: 'globe', title: 'Trở thành công dân toàn cầu' },
      { icon: 'cube', title: 'Kỹ năng cốt lõi thế kỷ 21 (4Cs)' },
      { icon: 'book', title: 'Năng lực tự học suốt đời' },
      { icon: 'checkSquare', title: 'Tư duy dự án & ứng dụng' },
      { icon: 'trend', title: 'Đón đầu xu thế phát triển' },
      { icon: 'leader', title: 'Những nhà lãnh đạo tương lai' },
    ],
  },

  /* ---------- Trang chủ ---------- */
  home: {
    /** Mục 1 — Hero: phim nền (public/video/hero-loop.mp4 nếu có, chưa có thì ảnh tĩnh). */
    hero: {
      eyebrow: 'Hệ sinh thái giáo dục STEM – AI – Robotics',
      title: '[[STEM – AI – Robotics]] cho mọi trường học',
      sub: 'Learn to Leap đồng hành cùng các Sở Giáo dục và Đào tạo, nhà trường và các đối tác trong việc thiết kế, triển khai và vận hành các mô hình giáo dục STEM – AI – Robotics trọn vẹn theo Thông tư 86/2026/TT-BGDĐT: từ không gian học tập, chương trình đào tạo, phát triển đội ngũ giáo viên đến các hoạt động trải nghiệm và thi đấu trong nước, quốc tế.',
      cta1: 'Đặt lịch tư vấn',
      /** Cụm chữ gradient trong tiêu đề đổi luân phiên (cụm đầu = cụm trong tiêu đề). */
      rotate: ['STEM – AI – Robotics', 'Robot AI', 'Lập trình & AI', 'Phòng Lab AI', 'Sân chơi quốc tế'],
      cta2: 'VTV1 nói gì về LtL?',
      pauseVideo: 'Tạm dừng phim nền',
      playVideo: 'Phát phim nền',
      closeFilm: 'Đóng phim',
    },
    /** Mục 2 — Bằng chứng nhanh. */
    stats: [
      { n: 20, suf: '+', label: 'Tỉnh, thành phố<br>đã triển khai' },
      { n: 50, suf: '+', label: 'Đối tác<br>chiến lược' },
      { n: 200, suf: '+', label: 'Chủ đề & mô hình<br>trải nghiệm' },
      { n: 100, suf: '+', label: 'Ngày hội<br>STEM – AI – Robotics' },
      { n: 30000, suf: '+', label: 'Học sinh<br>tham gia' },
    ],
    /** Mục logo đối tác (đã chuyển xuống gần cuối trang). */
    partnersHead: { eyebrow: 'Mạng lưới đối tác', title: 'Đồng hành cùng [[đối tác trong và ngoài nước]]' },
    partnersStrip: 'Đồng hành cùng các đối tác hàng đầu trong và ngoài nước',
    publicStrip: 'Cùng các viện, trường đại học, cao đẳng và phổ thông',
    /** Câu robot ló ở mép các mục nói khi rê chuột / bấm vào. */
    peeks: {
      doors: 'Bạn là ai? Chọn đúng ô, mình dẫn đường nhé!',
      pillars: 'Brừm! Đủ cả phòng học, chương trình và sân chơi.',
      process: '5 bước thôi — rõ ràng từ khảo sát tới vận hành!',
      impact: 'Biến hình… thành giải thưởng!',
      moments: 'Gâu! Bấm xem video ngay trên trang nhé.',
    },
    /** Mục 3 — Lối vào theo người xem. page: khoá trang trong i18n/routes; hash: neo trong trang đó. */
    doors: {
      eyebrow: 'Giải pháp cho từng đối tác',
      title: 'Giải pháp xây dựng từ [[hợp tác quốc tế]], kết hợp cùng các chuyên gia giáo dục Việt Nam',
      items: [
        { who: 'Sở / Phòng GD&ĐT', title: 'Đề án Chuyển đổi số, Giáo dục thông minh, Giáo dục STEM – AI toàn tỉnh, bám sát NQ 57 & NQ 71', img: 'ky-ket-nghe-an', page: 'scheme', hash: '' },
        { who: 'Nhà trường', title: 'Đề án STEM từ ngân sách nhà nước và Đề án xã hội hoá (doanh nghiệp đầu tư)', img: 'khoi-dong-vinh-hung', page: 'xhh', hash: '' },
        { who: 'Đối tác', title: 'Chuyển giao và vận hành giải pháp', img: 'hoi-thao', page: 'partnership', hash: '' },
        { who: 'Giáo viên, Phụ huynh & Học sinh', title: 'Hệ sinh thái ngày hội, sân chơi, đào tạo', img: 'sol-ngayhoi', page: 'solutions', hash: '#san-choi' },
      ],
    },
    /** Mục 4 — Ba trụ giải pháp. */
    pillars: {
      eyebrow: 'Giải pháp',
      title: 'Hệ sinh thái giáo dục [[toàn diện]]',
      lead: 'Learn to Leap cung cấp giải pháp đồng bộ: từ kiến tạo không gian, chuẩn hoá chương trình đến tổ chức các sân chơi trải nghiệm thực tế trong nước & quốc tế.',
      cta: 'Xem chi tiết giải pháp',
      items: [
        { title: 'STEM Lab', img: 'sol-lab', hash: '#lab', list: ['Phòng STEM – AI Robotics theo TT 86', 'Thiết bị, nội thất & nền tảng LMS', 'Chương trình và đào tạo giáo viên đi kèm'] },
        { title: 'Lớp học thông minh', img: 'sol-phtm', hash: '#phtm', list: ['Màn hình tương tác, thiết bị học tập số', 'Phần mềm quản lý lớp học', 'Trường học thông minh'] },
        { title: 'Sân chơi', img: 'sol-sanchoi', hash: '#san-choi', list: ['Ngày hội trải nghiệm STEM – AI', 'Cuộc thi quốc gia & quốc tế', 'Trại hè · Tour hướng nghiệp'] },
        { title: 'Humanoid AI Lab', img: 'sol-ailab', hash: '#ai-lab', list: ['Robot hình người AI', 'Thị giác máy tính & dự án AI', 'AI Center cho học sinh, giáo viên'] },
      ],
    },
    /** Mục 5 — Dải tối: 5 dòng thiết bị Robotics – AI, chỉ ghi đặc trưng dòng, không ghi tên hãng.
     *  tab: nhãn nút chọn; giant: 2 dòng chữ lớn phía sau. */
    robotic: {
      eyebrow: 'Hệ sinh thái Robotics – AI',
      title: 'Trải nghiệm công nghệ hiện đại [[ngay tại lớp học]]',
      lead: 'Đối tác chính thức của các hãng robot giáo dục hàng đầu, Learn to Leap mang tinh hoa công nghệ thế giới vào lớp học với 5 dòng thiết bị tối tân – từ robot hình người AI đến hệ thống IoT.',
      cta: 'Xem Phòng STEM – AI Lab',
      pickLabel: 'Chọn dòng sản phẩm',
      lines: [
        { tab: 'Robot hình người', kind: 'Humanoid · AI hiện thân', name: 'Robot hình người AI', desc: 'Robot hình người cỡ lớn — trình diễn, nghiên cứu và truyền cảm hứng về trí tuệ nhân tạo hiện thân.', tags: ['Humanoid', 'AI hiện thân', 'Trình diễn'], giant: ['HUMANOID', 'AI·ROBOT'] },
        { tab: 'Robot lập trình', kind: 'Lập trình · Kĩ thuật', name: 'Robot lập trình AI', desc: 'Robot hình người cỡ nhỏ để học lập trình Python & AI, cùng bộ lắp ghép kỹ thuật cơ khí – điện tử.', tags: ['Python', 'Thị giác máy', 'Kỹ thuật'], giant: ['CODE·AI', 'ENGINEER'] },
        { tab: 'Lắp ghép AI', kind: 'Robotics · Biến hình', name: 'Robot lắp ghép AI', desc: 'Một bộ robot biến hình nhiều dạng — xe, chó robot, cánh tay — lắp ghép sáng tạo, lập trình khối.', tags: ['Biến hình', 'Lập trình khối', 'Thi đấu'], giant: ['MODULAR', 'ROBOTICS'] },
        { tab: 'STEAM', kind: 'STEAM · Maker', name: 'STEAM & Maker', desc: 'Học liệu lắp ghép và bộ robot – IoT cho các dự án STEAM thực hành, từ ý tưởng đến sản phẩm.', tags: ['Lắp ghép', 'IoT', 'Dự án'], giant: ['STEAM', 'MAKER'] },
        { tab: 'STEM · IoT', kind: 'STEM Khoa học · IoT', name: 'STEM Khoa học & IoT', desc: 'Học liệu Hoạt động giáo dục STEM, mô hình IoT, nhà thông minh và năng lượng tái tạo.', tags: ['Học liệu', 'Cảm biến', 'Nhà thông minh'], giant: ['STEM', 'IOT·LAB'] },
      ],
    },
    /** Mục 6 — Quy trình (các bước lấy từ partnership.process.steps). */
    process: {
      eyebrow: 'Quy trình triển khai',
      title: 'Lộ trình triển khai [[toàn diện, tinh gọn & hiệu quả]]',
      lead: 'Quy trình 5 bước minh bạch, đồng bộ và tuân thủ chặt chẽ khung chuẩn của Bộ GD&ĐT.',
      basisLabel: 'Lộ trình căn cứ',
      /** Xếp theo trình tự thời gian, hiển thị nối mũi tên. */
      basis: ['Chương trình GDPT 2018', 'Nghị quyết 57-NQ/TW · 71-NQ/TW', 'Thông tư 86/2026/TT-BGDĐT', 'Quyết định 2422/QĐ-BGDĐT', 'Khung năng lực số'],
      cta: 'Tải Hồ sơ năng lực',
      cta2: 'Phương án hợp tác',
    },
    /** Mục 7 — Dấu ấn (thẻ lấy từ awards; awards[1] là dự án nổi bật). */
    impact: {
      eyebrow: 'Năng lực & dấu ấn',
      title: 'Được tin tưởng, được [[vinh danh]]',
      featureLabel: 'Dự án tiêu biểu',
      cta: 'Xem năng lực & dấu ấn',
    },
    /** Mục Dự án tiêu biểu (thẻ lấy 3 dự án đầu của projectsPage.items, bỏ STEM Innovation 57 đã ở mục Dấu ấn). */
    projects: {
      eyebrow: 'Dự án tiêu biểu',
      title: 'Những dự án [[đã triển khai]]',
      cta: 'Xem tất cả dự án',
    },
    /** Mục 8 — Khoảnh khắc: video, ảnh, báo chí. */
    moments: {
      eyebrow: 'Khoảnh khắc Learn to Leap',
      title: 'Trải nghiệm thực tế [[từ lớp học tương lai]]',
      lead: 'Xem ngay video để khám phá cách Learn to Leap kiến tạo không gian học tập sôi động và khơi gợi niềm đam mê công nghệ của học sinh.',
      shortsTitle: 'Video ngắn',
      photos: [
        { src: '/images/gallery/su-kien-05.webp', alt: 'Học sinh điều khiển robot thi đấu trên sa bàn' },
        { src: '/images/gallery/su-kien-13.webp', alt: 'Learn to Leap tại Sàn giao dịch Khoa học và Công nghệ TP. Hà Nội' },
        { src: '/images/gallery/su-kien-17.webp', alt: 'Robot trình diễn cùng học sinh tại Ngày hội Khoa học và Công nghệ phường Vĩnh Hưng' },
        { src: '/images/sol-ngayhoi.webp', alt: 'Học sinh tại ngày hội STEM – AI – Robotics' },
        { src: '/images/gallery/su-kien-11.webp', alt: 'Học sinh lập trình robot trên sa bàn cùng giáo viên' },
        { src: '/images/gallery/su-kien-26.webp', alt: 'Học sinh trải nghiệm thực tế ảo tại Ngày hội Khoa học công nghệ và AI xã Lâm Thao' },
        { src: '/images/gallery/su-kien-32.webp', alt: "Giáo viên Trường Tiểu học Bắc Hồng thực hành bộ kit Stick 'Em" },
        { src: '/images/gallery/su-kien-27.webp', alt: 'Học sinh tìm hiểu robot hình người tại Ngày hội xã Lâm Thao' },
      ],
      blogTitle: 'Bài mới trên Blog',
      cta: 'Xem Blog & video',
    },
    /** Mục 9 — Hành động. */
    cta: {
      eyebrow: 'Đồng hành cùng Learn to Leap',
      title: 'Cùng phổ cập [[STEM – AI – Robotics]] đến mọi miền tổ quốc',
      lead: 'Đặt lịch làm việc để đội ngũ Learn to Leap khảo sát, tư vấn và gửi Hồ sơ năng lực đầy đủ.',
      book: 'Đặt lịch tư vấn',
    },
  },

  /* ---------- Về chúng tôi ---------- */
  about: {
    hero: { title: 'Học tập để [[nhảy vọt]] trong kỷ nguyên vươn mình' },
    vmEyebrow: 'Tầm nhìn & Sứ mệnh',
    vm: [
      { icon: 'vision', title: 'Tầm nhìn', desc: 'Dẫn đầu Đông Nam Á về chuyển giao giải pháp giáo dục số hiện đại, chuẩn quốc tế, phù hợp thực tiễn Việt Nam.' },
      { icon: 'bolt', title: 'Sứ mệnh', desc: 'Phổ cập STEM – AI, thu hẹp khoảng cách số và nuôi dưỡng thế hệ công dân toàn cầu, làm chủ tương lai.' },
    ],
    storyEyebrow: 'Câu chuyện của chúng tôi',
    story: [
      'Ra đời năm 2023, Learn to Leap (LtL) khởi nguồn từ một niềm tin mãnh liệt: Trong kỷ nguyên số, khi Trí tuệ nhân tạo (AI) đang tái định hình thế giới, <strong>giáo dục công nghệ tuyệt đối không thể là đặc quyền của riêng ai</strong>. Chúng tôi khao khát mang cơ hội tiếp cận công nghệ đến mọi học sinh Việt Nam — từ những thành phố lớn đến các vùng miền còn khó khăn — để không một ai bị bỏ lại phía sau.',
      'Để hiện thực hoá tầm nhìn đó, LtL tiên phong trở thành <strong>đơn vị tư vấn và cung cấp giải pháp giáo dục STEM & AI toàn diện</strong> cho các trường phổ thông. Mọi chương trình của chúng tôi đều được tinh chỉnh khắt khe, bám sát Chương trình GDPT 2018 và các khung năng lực số tiên tiến nhất.',
      'LtL chọn cách trở thành người bạn đồng hành sâu sát, từ tư vấn chiến lược, chuyển giao mô hình, cho đến trực tiếp triển khai và sát cánh cùng nhà trường trên hành trình đánh thức tiềm năng của từng học sinh. Hơn thế nữa, LtL tự hào là <strong>đối tác chiến lược</strong> trong việc kết nối và thực thi các dự án trọng điểm quốc gia về STEM, AI và chuyển đổi số trong giáo dục.',
    ],
    photoAlt: 'Cuộc thi ROBOG Miền Bắc 2026 — Learn to Leap',
    photoCaption: 'Cuộc thi ROBOG Miền Bắc 2026 — sân chơi Robot AI đầu tiên tại khu vực miền Bắc.',
    quote: '"Sự đồng hành giữa Nhà trường, Phụ huynh, các cơ quan ban ngành, đối tác và Learn to Leap sẽ tạo nên một hệ sinh thái giáo dục bền vững — nơi mỗi học sinh được truyền cảm hứng để tự tin, sáng tạo và bản lĩnh công nghệ."',
    quoteName: 'Lê Văn Trí',
    quoteRole: 'Nhà sáng lập & Tổng Giám đốc, Learn to Leap',
    /** Đội ngũ sáng lập (HSNL trang 7). Người đầu tiên hiện lớn nhất. photo: ảnh trong public/images/team. */
    founders: {
      eyebrow: 'Đội ngũ sáng lập',
      title: 'Những người [[khởi xướng Learn to Leap]]',
      lead: 'Ban lãnh đạo Learn to Leap là những chuyên gia trong lĩnh vực giáo dục, công nghệ và quản trị chiến lược, với nhiều năm kinh nghiệm điều hành các tổ chức giáo dục trong nước và quốc tế.',
      items: [
        { name: 'Lê Văn Trí', role: 'Nhà sáng lập & Tổng Giám đốc (CEO)', photo: '/images/team/le-van-tri.webp', bio: ['12 năm kinh nghiệm trong lĩnh vực Giáo dục, STEM', 'Đồng sáng lập TEKY, ZIM Academy, Dino Đi học…'] },
        { name: 'ThS. Ngô Thượng Huy', role: 'Đồng sáng lập · Giám đốc Vận hành (COO)', photo: '/images/team/ngo-thuong-huy.webp', bio: ['25 năm công tác, trong đó 10 năm tại cơ quan quản lý nhà nước', 'Tham gia tổ tư vấn cho nhiều dự án quốc gia'] },
        { name: 'ThS. Phạm Quốc Hùng', role: 'Đồng sáng lập · Giám đốc Đầu tư (CIO)', photo: '/images/team/pham-quoc-hung.webp', bio: ['12 năm kinh nghiệm đầu tư, vận hành dự án Công nghệ, Giáo dục', 'Founder Aruna Holding, Indochina E&C…'] },
        { name: 'Ông Ngô Thượng Kỷ', role: 'Đồng sáng lập · Giám đốc Phát triển kinh doanh (BDM)', photo: '/images/team/ngo-thuong-ky.webp', bio: ['15 năm kinh nghiệm trong lĩnh vực Sách và thiết bị trường học', 'TGĐ Sách và Thiết bị trường học Thái Nguyên'] },
        { name: 'Bà Bùi Thị Hải Yến', role: 'Đồng sáng lập · Giám đốc Tài chính (CFO)', photo: '/images/team/bui-thi-hai-yen.webp', bio: ['20 năm kinh nghiệm trong lĩnh vực Giải pháp thiết bị Giáo dục', 'Chủ tịch HĐQT Phúc Nam Thành, AILIFE…'] },
        { name: 'Bà Trần Thị Vân Anh', role: 'Đồng sáng lập · Giám đốc Dự án (PD)', photo: '/images/team/tran-thi-van-anh.webp', bio: ['05 năm kinh nghiệm trong lĩnh vực giáo dục trải nghiệm', 'TGĐ Trung tâm trải nghiệm Sáng tạo STEAM PARK'] },
      ],
    },
    /** Hội đồng cố vấn / chuyên gia (HSNL trang 8, nội dung theo Sheet CEO). */
    advisors: {
      eyebrow: 'Cố vấn & chuyên gia',
      title: 'Hội đồng [[cố vấn chiến lược]]',
      lead: 'Hội đồng Cố vấn Learn to Leap gồm các chuyên gia giáo dục, kỹ sư công nghệ, nhà nghiên cứu chính sách đến từ các tổ chức quốc tế và trường đại học hàng đầu.',
      items: [
        { name: 'PGS.TS Tưởng Duy Hải', role: 'Cố vấn giáo dục cấp cao', photo: '/images/team/tuong-duy-hai.webp', bio: ['Cố vấn cấp cao về giáo dục STEM và Trí tuệ nhân tạo (AI)', 'Vai trò lãnh đạo, cố vấn tại các dự án quốc gia về giáo dục số'] },
        { name: 'PGS.TS Nguyễn Chấn Hùng', role: 'Chuyên gia Giáo dục thông minh', photo: '/images/team/nguyen-chan-hung.webp', bio: ['Chủ tịch Cộng đồng Giáo dục Thông minh Việt Nam (VISEDU)'] },
        { name: 'TS. Vũ Gia Luyện', role: 'Chuyên gia cấp cao về Khoa học Công nghệ', photo: '/images/team/vu-gia-luyen.webp', bio: ['Chủ tịch HĐQT ITS', 'Doanh nhân trẻ Khởi nghiệp xuất sắc'] },
        { name: 'Ông Nguyễn Sỹ Nam', role: 'Chuyên gia giáo dục STEM, chuyển đổi số giáo dục', photo: '/images/team/nguyen-sy-nam.webp', bio: ['Giám đốc Trung tâm Chuyển đổi số — Viện Nghiên cứu Thiết kế Trường học, Bộ GD&ĐT'] },
        { name: 'Bà Anh Nguyễn', role: 'Chuyên gia Giáo dục / Truyền thông', photo: '/images/team/anh-nguyen.webp', bio: ['Hơn 20 năm tư vấn chiến lược về giáo dục và truyền thông', 'Tổ chức nhiều cuộc thi quy mô quốc gia và quốc tế'] },
        { name: 'Bà Nguyễn Tố Uyên', role: 'Chuyên gia Marcom / EdTech', photo: '/images/team/nguyen-to-uyen.webp', bio: ['15 năm kinh nghiệm trong lĩnh vực Marcom', '8 năm nghiên cứu giáo dục sớm, EdTech', 'Thành viên đề án Trường học thông minh Hà Nội'] },
      ],
    },
    values: {
      eyebrow: 'Giá trị cốt lõi',
      title: 'Bốn giá trị dẫn lối [[mọi quyết định]]',
      items: [
        { icon: 'idea', title: 'Công nghệ vì con người', desc: 'Ứng dụng công nghệ để phát triển tư duy, sáng tạo và kỹ năng sống cho học sinh trong thế giới số.' },
        { icon: 'user', title: 'Học sinh là trung tâm', desc: 'Thiết kế chương trình cá nhân hoá, phát triển toàn diện trí tuệ, kỹ năng và cảm xúc.' },
        { icon: 'globe', title: 'Tác động xã hội', desc: 'Phổ cập giáo dục STEM – AI, thu hẹp khoảng cách số, nuôi dưỡng công dân toàn cầu.' },
        { icon: 'trend', title: 'Tiên phong đổi mới', desc: 'Liên tục cập nhật chuẩn quốc tế, đổi mới phương pháp, thiết bị và mô hình lớp học.' },
      ],
    },
    philosophy: {
      eyebrow: 'Triết lý giáo dục',
      title: 'Chúng tôi đo thành công bằng [[năng lực học sinh đạt được]]',
      lead: 'Triết lý của Learn to Leap là <em>học qua làm, làm ra sản phẩm thật</em>. Mọi chương trình đều hướng đến đầu ra cụ thể — tư duy logic, kỹ năng giải quyết vấn đề, năng lực hợp tác và bản lĩnh công nghệ.',
    },
    cta: {
      title: 'Cùng viết tiếp câu chuyện phổ cập STEM – AI – Robotics đến mọi miền tổ quốc',
      lead: 'Nhận Hồ sơ năng lực đầy đủ và trao đổi phương án hợp tác phù hợp với đơn vị của bạn.',
      primary: 'Liên hệ hợp tác',
      secondary: 'Xem giải pháp',
    },
  },

  /* ---------- Giải pháp ---------- */
  solutionsPage: {
    hero: {
      title: 'Một hệ sinh thái — [[tám giải pháp đồng bộ]]',
      lead: 'Từ phòng học thông minh, chương trình liên thông đến sân chơi quốc tế — Learn to Leap cung cấp giải pháp trọn gói, linh hoạt theo điều kiện và định hướng của từng nhà trường, từng địa phương.',
      cta: 'Nhận tư vấn giải pháp phù hợp',
    },
    lab: {
      eyebrow: 'Giải pháp chủ lực',
      title: 'Phòng STEM – AI Lab',
      lead: 'Mô hình phòng học hiện đại do Learn to Leap cùng <strong>IPP Tech (IPPG)</strong> phối hợp với <strong>UBTECH</strong> — thương hiệu robot hình người hàng đầu thế giới — phát triển và triển khai tại Việt Nam, trên nền tảng đề tài khoa học cấp Viện của Viện Nghiên cứu Thiết kế Trường học, Bộ GD&ĐT.',
      chips: ['UBTECH', 'IPPG', 'Viện NCTK Trường học – Bộ GD&ĐT'],
      feats: [
        { icon: 'robot', title: 'Thiết bị công nghệ học tập', desc: 'Robot AI, cảm biến, thiết bị VR/AR & mô hình thực hành.' },
        { icon: 'screen', title: 'Thiết bị hỗ trợ thông minh', desc: 'Bảng cảm ứng, máy tính bảng & thiết bị trình chiếu.' },
        { icon: 'interior', title: 'Không gian nội thất', desc: 'Thiết kế mở, linh hoạt cho hoạt động nhóm & dự án.' },
        { icon: 'database', title: 'Hệ thống học tập LMS', desc: 'Quản lý học sinh, cá nhân hoá & đánh giá thời gian thực.' },
      ],
      photoLabel: 'Ảnh thực tế phòng Lab',
      opTitle: 'Mô hình vận hành tại trường',
      opStats: [
        { v: '35–70', u: 'tiết', k: 'mỗi năm học' },
        { v: '08', u: 'nhóm', k: 'mỗi lớp học' },
        { v: '4–6', u: 'HS', k: 'mỗi nhóm thực hành' },
        { v: 'Thoả thuận', u: '', k: 'mức học phí' },
      ],
    },
    ladder: {
      eyebrow: 'Chương trình STEM – AI K12',
      title: 'Lộ trình liên thông [[từ Mầm non đến THPT]]',
      lead: 'Nội dung Robotics – Lập trình – AI thiết kế phù hợp từng độ tuổi, học qua dự án và công nghệ thực tiễn, bám sát Khung năng lực số theo Thông tư 02/2025/TT-BGDĐT.',
      steps: [
        { icon: 'kinder', age: 'Mầm non · 4–6 tuổi', title: 'Khơi nguồn khám phá', desc: 'Làm quen robot, lập trình hình ảnh và AI qua trò chơi, hoạt động trải nghiệm trực quan.', pill: 'Học qua chơi' },
        { icon: 'robotLegs', age: 'Tiểu học · 6–10 tuổi', title: 'Robotics AI Tiểu học', desc: 'Khám phá robot, lập trình kéo–thả, cảm biến và ứng dụng AI vào dự án gần gũi đời sống.', pill: 'AI Fantasy Zoo · 36 chủ đề' },
        { icon: 'code', age: 'THCS · 11–15 tuổi', title: 'Robotics AI THCS', desc: 'Phát triển tư duy thuật toán, robot cảm biến, lập trình AI cơ bản & giải quyết vấn đề thực tiễn.', pill: 'Tư duy thuật toán' },
        { icon: 'spark', age: 'THPT · 16–18 tuổi', title: 'Robotics AI THPT', desc: 'Ứng dụng nâng cao AI, IoT, dữ liệu số & lập trình sáng tạo, kết nối định hướng nghề nghiệp.', pill: 'Yansee Robot · 32 chủ đề' },
      ],
      noteLabel: 'Mở rộng:',
      notePills: ['Khung AI lớp 3–12 · APTECH · 70 tiết/năm', "Bộ kit Stick 'Em STEAM (Tiểu học)", 'Thiết bị chuẩn UGOT · Yansee · UBTECH'],
    },
    stickem: {
      eyebrow: 'Bộ kit STEAM Tiểu học · Singapore',
      title: "Stick 'Em — sáng tạo [[từ những chiếc đũa]]",
      lead: "Stick 'Em là bộ học liệu STEAM đến từ Singapore. Học sinh dùng đũa và khớp nối nhiều màu để dựng mô hình, rồi gắn bo mạch, cảm biến, động cơ để mô hình chuyển động và lập trình được. Learn to Leap là đối tác đưa Stick 'Em vào trường học Việt Nam.",
      feats: [
        { icon: 'spark', title: 'Dựng mô hình bằng đũa và khớp nối', desc: 'Khớp nối nhiều góc (60°–360°), bánh xe, trục và dây chun để dựng khung, cầu, cần cẩu, xe… từ những chiếc đũa quen thuộc.' },
        { icon: 'robot', title: 'Bộ điện tử lập trình được', desc: 'Bo mạch ESP32 có Bluetooth, Wi-Fi, ma trận LED; kết nối cảm biến siêu âm, ánh sáng, nhiệt độ – độ ẩm, con quay, camera và động cơ servo.' },
        { icon: 'trophy', title: "Sân chơi Stick 'Em Dojo", desc: 'Học sinh thi đấu bằng mô hình tự chế, hướng tới đấu trường quốc tế Global Robotics Game.' },
        { icon: 'book', title: 'Tập huấn cho giáo viên', desc: "Learn to Leap tập huấn giáo viên đưa Stick 'Em vào tiết học STEM, như tại Trường Tiểu học Bắc Hồng (11/2026)." },
      ],
      photos: [
        { src: '/images/stickem/pinball.webp', alt: "Mô hình máy bắn bi dựng bằng Stick 'Em" },
        { src: '/images/stickem/kid.webp', alt: 'Học sinh với mô hình tự dựng' },
        { src: '/images/stickem/kids-car.webp', alt: "Xe điện tử Stick 'Em" },
        { src: '/images/gallery/su-kien-32.webp', alt: 'Tập huấn giáo viên tại Trường Tiểu học Bắc Hồng' },
      ],
    },
    /** Các section dạng chung (ảnh + thẻ), xếp theo thứ tự CEO chốt. img: khoá ảnh trong data/site IMAGES. */
    blocks: {
      phtm: {
        id: 'phtm', img: 'sol-phtm',
        eyebrow: 'Lớp học số',
        title: 'Phòng học [[thông minh]]',
        lead: 'Giải pháp biến phòng học truyền thống thành không gian dạy học số: giáo viên giảng bài trên màn hình tương tác, học sinh học bằng thiết bị số, nhà trường quản lý lớp học tập trung — làm nền móng cho mô hình trường học thông minh.',
        cards: [
          { icon: 'screen', title: 'Màn hình tương tác', desc: 'Màn hình cảm ứng cỡ lớn thay bảng đen, trình chiếu, viết vẽ và chia sẻ nội dung từ thiết bị của học sinh.' },
          { icon: 'monitor', title: 'Thiết bị học tập số', desc: 'Máy tính bảng, camera tài liệu, âm thanh lớp học — phục vụ dạy học trực tiếp và trực tuyến.' },
          { icon: 'database', title: 'Phần mềm quản lý lớp học', desc: 'Giao bài, kiểm tra, đánh giá và theo dõi tiến độ học tập theo thời gian thực.' },
          { icon: 'school', title: 'Trường học thông minh', desc: 'Kết nối các phòng học thông minh, phòng STEM, thư viện số thành một hệ sinh thái chung của nhà trường.' },
        ],
      },
      ailab: {
        id: 'ai-lab', img: 'sol-ailab',
        eyebrow: 'Humanoid AI Lab',
        title: 'AI Lab · [[AI Center]]',
        lead: 'Không gian trải nghiệm trí tuệ nhân tạo dành cho học sinh và giáo viên: từ robot hình người cỡ lớn đến robot lập trình, thị giác máy tính và các dự án AI giải quyết vấn đề thực tế.',
        cards: [
          { icon: 'robot', title: 'Robot hình người AI', desc: 'Robot hình người cỡ lớn để trình diễn, nghiên cứu và truyền cảm hứng về AI hiện thân.' },
          { icon: 'code', title: 'Robot lập trình Python & AI', desc: 'Robot hình người cỡ nhỏ cho học sinh lập trình nhận diện giọng nói, khuôn mặt, cử chỉ.' },
          { icon: 'camera', title: 'Thị giác máy tính', desc: 'Bộ học tập huấn luyện mô hình nhận dạng, đưa AI vào sản phẩm STEM của học sinh.' },
          { icon: 'hub', title: 'AI Center cấp địa phương', desc: 'Trung tâm AI dùng chung cho cụm trường, phục vụ đào tạo giáo viên và sân chơi AI.' },
        ],
      },
      sanChoi: {
        id: 'san-choi', img: 'sol-sanchoi',
        eyebrow: 'Ngày hội & Sân chơi',
        title: 'Học thật, làm thật, [[thi thật, đi thật]]',
        lead: 'Hơn 100 ngày hội với 30.000+ học sinh tham gia, cùng hệ thống cuộc thi giúp học sinh biến kiến thức thành sản phẩm và bản lĩnh — từ lớp học đến đấu trường quốc tế.',
        cards: [
          { icon: 'megaphone', title: 'Ngày hội trải nghiệm', desc: '100+ ngày hội, 200+ chủ đề — sôi nổi, hiện đại, giàu cảm hứng cho học sinh mọi cấp.' },
          { icon: 'trophy', title: 'Tổ chức cuộc thi', desc: 'Cấp trường → tỉnh/thành → quốc gia → quốc tế; phối hợp Sở GD&ĐT, báo chí, Viện Thiết kế Trường học, WEC, Đoàn Thanh niên.' },
        ],
      },
      tourHe: {
        id: 'tour-he', img: 'sol-traihe',
        eyebrow: 'Tour hè',
        title: 'Trại hè công nghệ & [[tour hướng nghiệp]]',
        lead: 'Mùa hè sáng tạo cho học sinh 7–16 tuổi và những chuyến đi đưa học sinh đến gần thị trường lao động.',
        cards: [
          { icon: 'camp', title: 'Trại hè công nghệ toàn quốc', desc: 'Bán trú, nội trú, quốc tế: Robotics, Coding, VR, kỹ năng sống và dự án sáng tạo.' },
          { icon: 'pin', title: 'Tour trải nghiệm hướng nghiệp', desc: 'Đến các khu công nghiệp (Deep C, Bắc Ninh…), kết nối giáo dục với doanh nghiệp, định hướng nghề nghiệp đa ngành.' },
        ],
      },
      huanLuyen: {
        id: 'huan-luyen', img: 'sol-huanluyen',
        eyebrow: 'Huấn luyện',
        title: 'Huấn luyện đội tuyển [[vươn ra quốc tế]]',
        lead: 'Đào tạo chuyên sâu cho đội tuyển các trường dự những đấu trường robot và công nghệ hàng đầu.',
        cards: [
          { icon: 'terminal', title: 'Đấu trường hàng đầu', desc: 'VEX Robotics, UBTECH, WRO, FLL, GreenMech, OhStem…' },
          { icon: 'trophy', title: 'Đường ống thi đấu quốc tế', desc: "ROBOG và Global Robotics Games (Stick'Em) — học sinh Việt Nam từng đạt Gold Award 2025." },
        ],
      },
      ihub: {
        id: 'innovation-hub', img: 'sol-ihub',
        eyebrow: 'Trung tâm học tập tương lai',
        title: 'Innovation Hub — hệ sinh thái [[học tập của thế hệ mới]]',
        lead: 'Chuỗi trung tâm học tập tương lai của Learn to Leap, kết hợp Blended Learning, khoá học trực tuyến, Active Learning, workshop trải nghiệm, xưởng sáng chế cuối tuần và showcase offline.',
        cards: [
          { icon: 'screen', title: 'Thiết bị dạy học', desc: 'Màn cảm ứng, máy tính bảng, robot & lego, máy in 3D, máy cắt laser.' },
          { icon: 'book', title: 'Nền tảng & chương trình', desc: 'LMS tích hợp và phần mềm chuyên biệt cho STEM – AI, tiếng Anh, hướng nghiệp.' },
        ],
      },
    },
    promo: { title: 'Tổ chức sân chơi cho trường của bạn?', desc: 'Learn to Leap thiết kế và vận hành trọn gói ngày hội, cuộc thi STEM – AI – Robotics các cấp.', cta: 'Liên hệ tổ chức' },
    cta: {
      title: 'Chọn giải pháp phù hợp với nhà trường của bạn',
      lead: 'Đội ngũ Learn to Leap sẽ khảo sát, tư vấn và đề xuất phương án trọn gói — từ phòng Lab đến chương trình và sân chơi.',
      primary: 'Đặt lịch khảo sát',
      secondary: 'Phương án hợp tác',
    },
  },

  /* ---------- Năng lực & Dấu ấn ---------- */
  impact: {
    hero: {
      title: 'Hành trình phổ cập [[STEM – AI – Robotics]] đến mọi miền tổ quốc',
      lead: 'Learn to Leap không chỉ phát triển giải pháp, mà trực tiếp triển khai thành công với hệ sinh thái toàn diện — từ đào tạo giáo viên, tổ chức sự kiện đến xây dựng Lab thông minh.',
    },
    stats: [
      { n: 20, suf: '+', label: 'Địa phương<br>phủ sóng' },
      { n: 50, suf: '+', label: 'Đối tác<br>chiến lược' },
      { n: 200, suf: '+', label: 'Chủ đề &<br>mô hình' },
      { n: 100, suf: '+', label: 'Ngày hội<br>đã tổ chức' },
      { n: 15, suf: '+', label: 'Cơ sở<br>tại Hà Nội' },
      { n: 30000, suf: '+', label: 'Học sinh<br>tham gia' },
    ],
    map: {
      eyebrow: 'Bản đồ triển khai',
      title: 'Từ Bắc vào Nam',
      provinces: ['Hà Nội', 'TP. Hồ Chí Minh', 'Bắc Ninh', 'Nghệ An', 'Thái Nguyên', 'Hải Phòng', 'Thanh Hóa', 'Hà Tĩnh', 'Đồng Nai', 'Cần Thơ', 'Đồng Tháp', 'Quảng Ninh', 'Sơn La', 'Lạng Sơn', 'Ninh Bình'],
      more: '& nhiều địa phương khác',
    },
    projects: {
      eyebrow: 'Dự án tiêu biểu',
      title: 'Những dấu ấn [[tự hào]]',
      items: [
        { img: 'proj-stem57', flagIcon: 'shield', flag: 'Dự án quốc gia', title: 'STEM Innovation 57', desc: 'Phòng Lab được trao tặng tại THCS Cầu Giấy (Hà Nội) và THPT Kim Liên (Nghệ An) bởi đồng chí Tổng Bí thư — tiên phong ứng dụng công nghệ trong dạy học và phát triển năng lực số thực tiễn.', loc: 'Hà Nội · Nghệ An' },
        { img: 'proj-intl', flagIcon: 'globe', flag: 'Trường quốc tế', title: 'Mạng lưới trường quốc tế Hà Nội', desc: 'CLB Robotics, trại hè công nghệ, huấn luyện đội tuyển & ngày hội STEM cấp thành phố tại BVIS Hà Nội, Tây Hà Nội, Thực nghiệm Victory, Hoàng Long Tokyo.', loc: 'Hà Nội · 15+ cơ sở' },
        { img: 'proj-bacninh', flagIcon: 'trend', flag: 'Đổi mới sáng tạo', title: 'Dấu ấn tại Bắc Ninh', desc: 'Trải nghiệm STEM – AI, ngày hội đổi mới sáng tạo cấp tỉnh, huấn luyện đội thi đạt giải Sáng tạo — 1 trong 12 dự án được tỉnh lựa chọn hỗ trợ phát triển.', loc: 'Tỉnh Bắc Ninh' },
      ],
    },
    gallery: { eyebrow: 'Khoảnh khắc', title: 'Những khoảnh khắc [[kiến tạo nên công dân toàn cầu]]' },
    awards: { eyebrow: 'Giải thưởng & ghi nhận', title: 'Được tin tưởng, được [[vinh danh]]' },
    cta: {
      title: 'Xem chi tiết các case study triển khai thực tế',
      lead: 'Nhận Hồ sơ năng lực đầy đủ cùng các case study triển khai thực tế.',
      primary: 'Tải Hồ sơ năng lực',
      secondary: 'Phương án hợp tác',
    },
  },

  /* ---------- Hợp tác ---------- */
  partnership: {
    hero: {
      title: 'Hợp tác chiến lược – [[Giải pháp linh hoạt]]',
      lead: 'Chúng tôi thiết kế phương án hợp tác linh hoạt cho từng nhóm đối tác — từ cơ quan quản lý giáo dục, nhà trường đến doanh nghiệp và tổ chức — với mô hình triển khai phù hợp điều kiện địa phương.',
    },
    audiences: [
      {
        icon: 'school', title: 'Sở / Phòng GD&ĐT & lãnh đạo', who: 'Cơ quan quản lý · Lãnh đạo địa phương',
        desc: 'Đối tác triển khai các đề án, chương trình STEM – AI và chuyển đổi số giáo dục trên quy mô toàn tỉnh/thành, bám sát chủ trương quốc gia.',
        list: ['Tư vấn xây dựng đề án & lộ trình phổ cập STEM – AI', 'Đào tạo, bồi dưỡng giáo viên cốt cán toàn ngành', '<strong>Linh hoạt mô hình nguồn vốn: xã hội hoá hoặc ngân sách nhà nước</strong>'],
        cta: 'Trao đổi cấp địa phương',
      },
      {
        icon: 'cap', title: 'Nhà trường', who: 'Ban Giám hiệu · Tổ chuyên môn',
        desc: 'Đối tác trọn gói giúp nhà trường triển khai STEM – AI bài bản: từ phòng Lab, chương trình chính khoá/ngoại khoá đến CLB và sân chơi.',
        list: ['Phòng STEM – AI Lab & thiết bị chuẩn quốc tế', 'Chương trình liên thông K12 & đội ngũ giảng dạy tại trường', 'Đào tạo giáo viên (TOT) để nhà trường tự chủ lâu dài'],
        cta: 'Tư vấn cho nhà trường',
      },
      {
        icon: 'users', title: 'Đối tác & Doanh nghiệp', who: 'Công nghệ · Học thuật · Tổ chức',
        desc: 'Cùng phát triển, chuyển giao và bảo trợ chương trình; đồng hành trong các sự kiện, cuộc thi và hoạt động trách nhiệm xã hội.',
        list: ['Hợp tác chuyển giao công nghệ & học liệu', 'Đồng tổ chức ngày hội, cuộc thi & đấu trường quốc tế', 'Đồng hành các chương trình CSR vì giáo dục'],
        cta: 'Trở thành đối tác',
      },
    ],
    process: {
      eyebrow: 'Quy trình triển khai',
      title: 'Lộ trình triển khai [[toàn diện, tinh gọn & hiệu quả]]',
      lead: 'Quy trình 5 bước minh bạch, đồng bộ và tuân thủ chặt chẽ khung chuẩn của Bộ GD&ĐT.',
      steps: [
        { title: 'Khảo sát', desc: 'Đánh giá hiện trạng, nhu cầu & điều kiện cơ sở vật chất.' },
        { title: 'Tư vấn & thiết kế', desc: 'Đề xuất phương án giải pháp, chương trình & mô hình vốn phù hợp.' },
        { title: 'Lắp đặt & chuyển giao', desc: 'Triển khai phòng Lab, thiết bị, học liệu & nền tảng LMS.' },
        { title: 'Đào tạo giáo viên', desc: 'Tập huấn (TOT) để đội ngũ nhà trường làm chủ chương trình.' },
        { title: 'Vận hành & hỗ trợ', desc: 'Đồng hành giảng dạy, tổ chức sân chơi & hỗ trợ dài hạn.' },
      ],
    },
    commitments: {
      eyebrow: 'Cam kết của chúng tôi',
      title: 'Giá trị cốt lõi [[trong mọi hợp tác]]',
      items: [
        { icon: 'shieldCheck', title: 'Chất lượng', desc: 'Chương trình & thiết bị chuẩn quốc tế, bản địa hoá theo khung của Bộ GD&ĐT, đo lường bằng năng lực thực tế của học sinh.' },
        { icon: 'support', title: 'Hỗ trợ dài hạn', desc: 'Đồng hành sau triển khai: cập nhật học liệu, bồi dưỡng giáo viên định kỳ & hỗ trợ kỹ thuật liên tục.' },
        { icon: 'pin', title: 'Linh hoạt địa phương', desc: 'Tùy biến theo điều kiện cơ sở vật chất, ngân sách & định hướng riêng của từng nhà trường, từng địa phương.' },
      ],
    },
    partners: {
      eyebrow: 'Mạng lưới đối tác',
      title: 'Sức mạnh từ [[mạng lưới đối tác toàn cầu]]',
      lead: 'Cộng hưởng giá trị cùng hơn 50 đối tác chuyên môn, công nghệ, học thuật và tổ chức uy tín trong & ngoài nước, Learn to Leap không ngừng kiến tạo một hệ sinh thái giáo dục toàn diện.',
    },
    policy: {
      eyebrow: 'Bám sát chủ trương & chính sách',
      title: 'Đồng hành cùng [[định hướng quốc gia]]',
      lead: 'Giải pháp của Learn to Leap được thiết kế bám sát các nghị quyết của Đảng và khung pháp lý của Bộ Giáo dục và Đào tạo.',
      items: [
        { code: 'NQ 57-NQ/TW', title: 'Nghị quyết 57-NQ/TW (22/12/2024)', desc: 'Đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo & chuyển đổi số quốc gia.' },
        { code: 'NQ 71-NQ/TW', title: 'Nghị quyết 71-NQ/TW (22/8/2025)', desc: 'Đột phá phát triển giáo dục & đào tạo, đáp ứng yêu cầu kỷ nguyên mới.' },
        { code: 'GDPT 2018', title: 'Chương trình GDPT 2018 (TT 32/2018)', desc: '5 phẩm chất, 10 năng lực — nền tảng định hướng nội dung mọi chương trình.' },
        { code: 'TT 86/2026', title: 'Tổ chức giáo dục STEM (TT 86/2026/TT-BGDĐT)', desc: 'Quy định tổ chức giáo dục STEM trong trường phổ thông, kèm danh mục khung thiết bị giáo dục STEM cấp Tiểu học, THCS, THPT.' },
        { code: 'QĐ 2422', title: 'Khung nội dung giáo dục AI (QĐ 2422/QĐ-BGDĐT, 18/8/2026)', desc: 'Phê duyệt Khung nội dung giáo dục trí tuệ nhân tạo (AI) cho học sinh phổ thông.' },
        { code: 'TT 02/2025', title: 'Khung Năng lực số (TT 02/2025/TT-BGDĐT)', desc: '6 miền, 26 năng lực số cho người học — cơ sở thiết kế chương trình & đánh giá.' },
        { code: 'TT 14/2025', title: 'Phòng học bộ môn (TT 14/2025/TT-BGDĐT)', desc: 'Quy định mới về phòng học bộ môn — cơ sở chuẩn hoá phòng STEM – AI Lab.' },
      ],
      note: '* Các nội dung liên quan đến văn bản chính sách và hợp tác cấp cao được rà soát kỹ lưỡng trước khi công bố chính thức.',
    },
    cta: {
      title: 'Cùng nhau kiến tạo thế hệ công dân toàn cầu, phổ cập STEM – AI tới mọi miền tổ quốc',
      lead: 'Đội ngũ Learn to Leap sẵn sàng lắng nghe nhu cầu và đề xuất phương án phù hợp nhất với đơn vị của bạn.',
      primary: 'Liên hệ hợp tác',
    },
  },

  /* ---------- Sản phẩm (tên mục chưa chốt) ---------- */
  products: {
    hero: {
      title: 'Thiết bị, cấu phần [[theo Thông tư 86]]',
      lead: 'Thiết bị cho Phòng STEM – AI Lab sắp theo bốn nhóm của Thông tư 86/2026/TT-BGDĐT, cùng các cấu phần giáo dục thông minh — từ các hãng trong và ngoài nước mà Learn to Leap phân phối, chuyển giao.',
      cta: 'Nhận tư vấn & báo giá',
    },
    navLabel: 'Nhóm thiết bị',
    navTitle: 'Thiết bị, cấu phần theo TT 86 · Phòng STEM – AI Lab',
    more: 'Và nhiều giải pháp sản phẩm Giáo dục thông minh khác',
    moreCta: 'Liên hệ tư vấn',
    /** Nhóm theo TT 86/2026. parts[].id là khoá sản phẩm minh hoạ trong src/data/catalog.ts. */
    groups: [
      { id: 'nhom-1', no: '1', short: 'Khám phá, đo lường & thực nghiệm', title: 'Nhóm thiết bị khám phá, đo lường và thực nghiệm khoa học', desc: 'Thiết bị thí nghiệm, đo lường và thu nhận số liệu cho các chủ đề Khoa học tự nhiên từ Tiểu học đến THPT.', parts: ['khtn-chude', 'khtn-cambien', 'g1-thinghiem'] },
      { id: 'nhom-2', no: '2', short: 'Thiết kế kĩ thuật & chế tạo', title: 'Nhóm thiết bị thiết kế kĩ thuật và chế tạo', desc: 'Mô hình kĩ thuật, bộ lắp ghép, dụng cụ chế tạo và máy in 3D để học sinh đi từ ý tưởng đến sản phẩm thật.', parts: ['g2-mohinh', 'g2-chetao'] },
      { id: 'nhom-3', no: '3', short: 'Lập trình & robot giáo dục', title: 'Nhóm thiết bị lập trình và robot giáo dục', desc: 'Robot lắp ghép, robot lập trình và robot hình người AI — từ lập trình khối ở Tiểu học đến Python, AI ở THPT.', parts: ['g3-ubtech', 'g3-stickem', 'g3-khac'] },
      { id: 'nhom-4', no: '4', short: 'Công nghệ số, AI & IoT', title: 'Nhóm thiết bị công nghệ số, trí tuệ nhân tạo và Internet vạn vật (IoT)', desc: 'Bộ trải nghiệm AI, kit IoT theo chủ đề và thiết bị thực tế ảo cho hoạt động công nghệ số.', parts: ['g4-ai', 'g4-iot'] },
      { id: 'nhom-5', no: '5', short: 'Các cấu phần khác', title: 'Các cấu phần khác', desc: 'Lớp học thông minh, thư viện số, màn hình tương tác và nền tảng AI — kết nối Phòng STEM – AI Lab với toàn trường.', parts: ['g5-vdsmart', 'g5-maxhub'] },
    ],
  },

  /* ---------- Đề án (ngân sách nhà nước) ---------- */
  scheme: {
    hero: {
      title: 'Đề án [[Chuyển đổi số]] & Giáo dục STEM – AI',
      lead: 'Learn to Leap đồng hành cùng Sở, Phòng GD&ĐT và nhà trường xây dựng đề án từ ngân sách nhà nước — bám sát Nghị quyết 57-NQ/TW, 71-NQ/TW và Thông tư 86/2026/TT-BGDĐT, khả thi khi triển khai.',
      cta: 'Trao đổi về đề án',
    },
    basis: { eyebrow: 'Căn cứ pháp lý', title: 'Căn cứ pháp lý [[thực hiện đề án]]' },
    steps: {
      eyebrow: 'Quy trình thực hiện',
      title: 'Từ khảo sát đến [[đề án được phê duyệt]]',
      items: [
        { title: 'Khảo sát', desc: 'Đánh giá hiện trạng cơ sở vật chất, đội ngũ và nhu cầu; lập báo cáo hiện trạng.' },
        { title: 'Xây dựng đề án', desc: 'Thuyết minh mục tiêu, chỉ tiêu bám NQ 57, NQ 71; lộ trình và dự toán theo từng giai đoạn.' },
        { title: 'Thẩm định danh mục', desc: 'Đối chiếu từng hạng mục với TT 86/2026, tránh trùng danh mục thiết bị dạy học tối thiểu.' },
        { title: 'Triển khai & đào tạo', desc: 'Lắp đặt, chuyển giao chương trình, bồi dưỡng giáo viên theo kế hoạch.' },
        { title: 'Vận hành & đánh giá', desc: 'Theo dõi chỉ tiêu, đánh giá hiệu quả sau đầu tư và điều chỉnh giai đoạn sau.' },
      ],
    },
    roles: {
      eyebrow: 'Vai trò các bên',
      title: 'Mỗi bên một vai trò, [[cùng một mục tiêu]]',
      items: [
        { icon: 'shield', title: 'Uỷ ban nhân dân các cấp', desc: 'Ban hành chủ trương, phê duyệt đề án và bố trí nguồn ngân sách nhà nước.' },
        { icon: 'leader', title: 'Cơ quan quản lý giáo dục', desc: 'Chủ trì xây dựng, thẩm định chuyên môn; chỉ đạo và kiểm tra việc triển khai tại các trường.' },
        { icon: 'school', title: 'Nhà trường', desc: 'Đề xuất nhu cầu, bố trí không gian và giáo viên; tổ chức dạy học, vận hành sau đầu tư.' },
        { icon: 'users', title: 'Learn to Leap', desc: 'Khảo sát, tư vấn, xây dựng hồ sơ đề án; cung cấp thiết bị, chương trình, đào tạo giáo viên và đồng hành vận hành.' },
      ],
    },
    projects: { eyebrow: 'Dự án', title: 'Các dự án [[đã thực hiện]]', all: 'Xem tất cả dự án' },
    cta: { title: 'Cần xây dựng đề án cho địa phương, nhà trường?', lead: 'Đội ngũ Learn to Leap khảo sát, tư vấn và cùng đơn vị hoàn thiện hồ sơ đề án.', primary: 'Liên hệ tư vấn đề án', secondary: 'Xem mô hình xã hội hoá' },
  },

  /* ---------- Xã hội hoá (doanh nghiệp đầu tư) ---------- */
  xhh: {
    hero: {
      title: 'Đề án [[xã hội hoá]] giáo dục STEM – AI',
      lead: 'Khi ngân sách chưa sẵn sàng, nhà trường vẫn có phòng STEM – AI: doanh nghiệp đầu tư thiết bị, Learn to Leap chuyển giao chương trình và cùng nhà trường vận hành.',
      cta: 'Trao đổi mô hình xã hội hoá',
    },
    basis: { eyebrow: 'Căn cứ pháp lý', title: 'Căn cứ pháp lý [[thực hiện xã hội hoá]]' },
    steps: {
      eyebrow: 'Quy trình thực hiện',
      title: 'Triển khai [[minh bạch, đúng quy định]]',
      items: [
        { title: 'Khảo sát', desc: 'Đánh giá điều kiện phòng học, nhu cầu học sinh.' },
        { title: 'Đề xuất phương án', desc: 'Phương án đầu tư, chương trình, mức đóng góp dự kiến.' },
        { title: 'Phê duyệt & ký kết', desc: 'Nhà trường, cơ quan quản lý xem xét theo quy định hiện hành.' },
        { title: 'Đầu tư & lắp đặt', desc: 'Doanh nghiệp đầu tư, Learn to Leap lắp đặt, chuyển giao.' },
        { title: 'Vận hành & báo cáo', desc: 'Giảng dạy, sân chơi và báo cáo định kỳ cho nhà trường.' },
      ],
    },
    roles: {
      eyebrow: 'Vai trò các bên',
      title: 'Mỗi bên một vai trò, [[cùng kiến tạo]]',
      items: [
        { icon: 'users', title: 'Doanh nghiệp đầu tư', desc: 'Đầu tư thiết bị, không gian phòng STEM – AI theo phương án được nhà trường và cơ quan quản lý chấp thuận.', list: ['Đồng hành trách nhiệm xã hội vì giáo dục', 'Mô hình vận hành minh bạch, có báo cáo', 'Kết nối hệ sinh thái giáo dục địa phương'] },
        { icon: 'school', title: 'Nhà trường', desc: 'Bố trí phòng học, thời khoá biểu; giám sát chất lượng và an toàn của hoạt động giáo dục.', list: ['Có phòng STEM – AI chuẩn mà không chờ ngân sách', 'Đội ngũ giáo viên được đào tạo bài bản', 'Nâng chất lượng giáo dục, thương hiệu nhà trường'] },
        { icon: 'user', title: 'Phụ huynh & học sinh', desc: 'Tự nguyện đăng ký tham gia; đóng góp chi phí theo mức đã thống nhất với nhà trường.', list: ['Học STEM – AI ngay tại trường, chi phí hợp lý', 'Tham gia ngày hội, cuộc thi các cấp', 'Phát triển năng lực số, tư duy công nghệ'] },
        { icon: 'cap', title: 'Learn to Leap', desc: 'Chuyển giao chương trình, giáo viên đứng lớp hoặc đào tạo giáo viên nhà trường, tổ chức sân chơi.', list: ['Chương trình bám CT GDPT 2018 và TT 86/2026', 'Lắp đặt, bảo trì thiết bị trong thời gian hợp tác', 'Báo cáo định kỳ cho nhà trường'] },
      ],
    },
    invest: {
      eyebrow: 'Danh mục đầu tư',
      title: 'Danh mục đầu tư [[cho Phòng STEM – AI]]',
      lead: 'Doanh nghiệp đầu tư trọn gói theo các nhóm thiết bị của Thông tư 86/2026 và các hạng mục đi kèm; cấu hình điều chỉnh theo cấp học, diện tích phòng và số học sinh.',
      items: [
        { link: 'nhom-1', title: 'Thiết bị khám phá, đo lường và thực nghiệm khoa học', desc: 'Bộ KIT STEM Khoa học tự nhiên theo chủ đề, cảm biến và thiết bị thu nhận số liệu.' },
        { link: 'nhom-2', title: 'Thiết bị thiết kế kĩ thuật và chế tạo', desc: 'Mô hình kĩ thuật, bộ lắp ghép, dụng cụ chế tạo và máy in 3D.' },
        { link: 'nhom-3', title: 'Thiết bị lập trình và robot giáo dục', desc: 'Robot lắp ghép, robot lập trình và robot hình người AI.' },
        { link: 'nhom-4', title: 'Thiết bị công nghệ số, AI và IoT', desc: 'Bộ trải nghiệm AI, kit IoT theo chủ đề và thiết bị thực tế ảo.' },
        { link: '', title: 'Không gian & nội thất STEM', desc: 'Thiết kế, thi công phòng; bàn ghế học nhóm, tủ trưng bày sản phẩm học sinh.' },
        { link: '', title: 'Chương trình, học liệu & đào tạo', desc: 'Chương trình STEM – AI, học liệu số, tập huấn giáo viên và hỗ trợ vận hành.' },
      ],
      more: 'Xem chi tiết thiết bị',
    },
    stickem: { title: "Phòng [[Stick 'Em Lab]] cho Tiểu học & THCS", desc: "Learn to Leap đầu tư trọn gói robot Stick 'Em, học liệu và tập huấn giáo viên; chương trình từ lớp 2 đến lớp 7.", cta: 'Xem chi tiết đề án' },
    opTitle: 'Mô hình vận hành tham khảo',
    projects: { eyebrow: 'Dự án', title: 'Các dự án [[đã thực hiện]]', all: 'Xem tất cả dự án' },
    note: '* Mức đóng góp, thời hạn và hình thức hợp tác cụ thể được thống nhất với từng nhà trường, theo quy định của địa phương.',
    cta: { title: 'Muốn có phòng STEM – AI theo mô hình xã hội hoá?', lead: 'Learn to Leap khảo sát và đề xuất phương án phù hợp với nhà trường.', primary: 'Đặt lịch khảo sát', secondary: 'Xem đề án ngân sách' },
  },

  /* ---------- Đề án XHH: Phòng STEM – AI Stick 'Em Lab cho TH & THCS (nguồn: Sale kit LtL x Stick 'Em TH&THCS 2026) ---------- */
  stickemLab: {
    hero: {
      title: "Phòng STEM – AI [[Stick 'Em Lab]] theo mô hình xã hội hoá",
      lead: "Learn to Leap đầu tư chương trình, thiết bị, học liệu và bộ robot Stick 'Em, tập huấn để giáo viên nhà trường trực tiếp đứng lớp. Nhà trường có không gian học STEM – AI cho học sinh Tiểu học và THCS mà không dùng ngân sách mua sắm thiết bị.",
      cta: 'Đặt lịch khảo sát',
      cta2: 'Xem chương trình học',
    },
    intro: {
      eyebrow: "Giới thiệu Stick 'Em",
      title: 'Robotics [[từ những chiếc đũa]] và vật liệu xanh',
      lead: "Stick 'Em là giải pháp giáo dục STEAM – AI do Singapore phát triển. Từ đũa tre, khớp nối in 3D, động cơ servo và bo mạch điện tử, học sinh tự tay lắp mô hình, robot rồi điều khiển qua ứng dụng Bluetooth. Học liệu gần gũi, chi phí hợp lý nên nhà trường có thể tổ chức hoạt động STEM – AI cho mọi học sinh.",
      lead2: 'Trên cùng một bộ học liệu, bài học trải rộng từ tư duy thiết kế, Toán, Khoa học, robotics – lập trình, trí tuệ nhân tạo đến ngôn ngữ, nghệ thuật – nhân văn, giáo dục cảm xúc – xã hội và tư duy tương lai.',
      award: "Được IMDA, Viện Giáo dục Quốc gia Singapore (NIE), Temasek Foundation, Google và UNDP hỗ trợ, ghi nhận. Vô địch Hult Prize 2025 (Nobel Khởi nghiệp), trị giá 1 triệu USD.",
      stats: [
        { n: 400, suf: '+', label: 'Trường học đã triển khai' },
        { n: 22, suf: '', label: 'Quốc gia trên toàn thế giới' },
        { n: 1, suf: ' triệu USD', label: 'Giải Hult Prize 2025' },
      ],
      photos: [
        { src: '/images/stickem/lab/lop-hoc.webp', alt: "Lớp học STEM – AI với bộ Stick 'Em" },
        { src: '/images/stickem/lab/hult.webp', alt: "Đội Stick 'Em nhận giải Hult Prize 2025" },
      ],
    },
    levels: {
      eyebrow: "Stick 'Em Robotics Kit",
      title: 'Một nền tảng [[cho hai cấp học]]',
      lead: 'Cả hai phiên bản dùng chung mạch điều khiển ESP32, 3 động cơ servo và pin sạc dự phòng; phát triển theo nhu cầu và năng lực học sinh ở từng cấp học.',
      rows: { control: 'Điều khiển', sensors: 'Cảm biến', apps: 'Mô hình', level: 'Định hướng', use: 'Phù hợp với' },
      items: [
        { tag: 'Tiểu học', title: 'Khám phá cơ bản', desc: 'Làm quen cơ cấu chuyển động, đòn bẩy, bánh răng, xe đơn giản và mô hình STEM trực quan; khơi gợi hứng thú và tư duy thiết kế.', parts: ['chopstick-set', 'piece-120t', 'board-v2', 'servo', 'power-bank'], control: 'ESP32 + 3 servo', sensors: 'Không bổ sung', apps: 'Xe đơn giản, tay gắp, cơ cấu nâng', level: 'Cơ bản – trực quan', use: 'CLB STEM, hoạt động trải nghiệm' },
        { tag: 'THCS', title: 'Phát triển kỹ năng STEM', desc: 'Từ lắp ghép sáng tạo đến lập trình robot và dự án liên môn Toán – KHTN – Tin học – Công nghệ; mở rộng với lập trình nâng cao và ứng dụng thực tiễn.', parts: ['board-v2', 'servo', 'sensor-ultrasonic', 'sensor-light', 'sensor-lcd', 'sensor-gyroscope'], control: 'ESP32 + 3 servo', sensors: 'Ánh sáng, chuyển động (MPU6050), siêu âm, nhiệt độ – độ ẩm; màn hình 0,96 inch', apps: 'Robot tự hành, đo đạc, mô hình thông minh', level: 'Nâng cao – thực tiễn', use: 'STEM Day, thi đấu Robotics, dự án liên môn' },
      ],
    },
    model: {
      eyebrow: 'Mô hình xã hội hoá',
      title: 'Đúng quy định, [[không dùng ngân sách]] mua sắm',
      lead: "Learn to Leap đầu tư trọn gói và chuyển giao để giáo viên nhà trường đứng lớp. Học sinh tiếp cận phương pháp học hiện đại, chuẩn quốc tế ngay tại trường.",
      items: [
        { code: 'TT 85/2026', title: 'Hoạt động theo nhu cầu người học', desc: 'Tổ chức ngoài giờ chính khoá và hoạt động GDTC; học sinh tham gia trên cơ sở tự nguyện của người học và phụ huynh.' },
        { code: 'Minh bạch', title: 'Kinh phí thu công khai', desc: 'Thu theo danh mục, công khai, không vượt mức thu do UBND tỉnh/thành phố quyết định.' },
        { code: 'TT 86/2026', title: 'Không bắt buộc phòng STEM riêng', desc: "Bộ Stick 'Em gọn nhẹ, dùng ngay trong phòng học sẵn có của nhà trường." },
        { code: 'Đội ngũ', title: 'Nâng cao năng lực giáo viên', desc: 'Giáo viên nhà trường được bồi dưỡng bài bản để chủ động tổ chức dạy học STEM – AI lâu dài.' },
      ],
    },
    roles: {
      eyebrow: 'Vai trò & trách nhiệm',
      title: 'Nhà trường và Learn to Leap [[cùng triển khai]]',
      items: [
        { icon: 'school', title: 'Nhà trường', img: '/images/stickem/lab/lop-rong.webp', list: ['Bố trí 1–3 phòng học trống sau giờ chính khoá để triển khai chương trình', 'Phối hợp truyền thông, trải nghiệm, nhận đơn đăng ký và sắp xếp thời khoá biểu các lớp tham gia', "Cử giáo viên nhận chuyển giao chương trình STEM – AI Stick 'Em và đứng lớp ngoài giờ chính khoá"] },
        { icon: 'cap', title: 'Learn to Leap', img: '/images/stickem/lab/tap-huan.webp', list: ["Đầu tư chương trình, thiết bị, học cụ, học liệu và các bộ robot Stick 'Em", 'Phối hợp cùng nhà trường truyền thông, tổ chức trải nghiệm và tuyển sinh', "Đào tạo, tập huấn và cấp chứng nhận STEM – AI Stick 'Em quốc tế cho giáo viên; đồng hành chuyên môn xuyên suốt"] },
      ],
    },
    program: {
      eyebrow: 'Chương trình học',
      title: 'Chương trình [[theo từng khối lớp]]',
      lead: 'Bốn chương trình nối tiếp từ lớp 2 đến lớp 7, đi từ lắp mô hình và thẻ lệnh giấy đến lập trình khối, cảm biến và huấn luyện mô hình thị giác máy tính.',
      labels: { hw: 'Phần cứng', tools: 'Công cụ học', know: 'Kiến thức', skill: 'Kỹ năng', lessons: 'Xem danh sách bài học' },
      items: [
        {
          grade: 'Lớp 2–3 · Tiểu học', title: 'Vườn thú biến hoá', img: '/images/stickem/lab/hoc-sinh-mo-hinh.webp',
          hw: 'Lớp 2: Connector Kit, đèn LED pin và vật liệu thủ công. Lớp 3: Robotics Kit, servo và bộ cảm biến.',
          tools: "Lớp 2: thẻ lệnh giấy. Lớp 3: Stick 'Em WebApp để điều khiển và lập trình khối.",
          know: 'Cấu tạo, tập tính, cách di chuyển của động vật; trục quay, bản lề, tay quay và cách cảm biến thu dữ liệu.',
          skill: 'Lắp mô hình chuyển động, sắp xếp thẻ lệnh theo trình tự; lập trình khối với lệnh lặp và rẽ nhánh; thử nghiệm, trình bày sản phẩm.',
          parts: [
            { name: 'Lớp 2 · Thế giới động vật', lessons: ['Vườn thú biến hoá', 'Cái miệng rộng của ai', 'Mắt mèo', 'Người bạn đặc biệt: Cú mèo', 'Bạn voi biết nói (2 phần)', 'Chú chó thích vẫy đuôi', 'Cánh chim', 'Chúng ta khác nhau'] },
            { name: 'Lớp 3 · Robotics và cảm biến', lessons: ['Em và robot, AI', 'Chiếc cổ dài của hươu cao cổ', 'Râu của ốc sên (2 phần)', 'Loài cá diệu kỳ', 'Chú rắn tinh anh', 'Bá chủ địa cầu: Khủng long (2 phần)', 'Nhà của những người bạn', 'AI và em: an toàn khi dùng thiết bị thông minh'] },
          ],
        },
        {
          grade: 'Lớp 4–5 · Tiểu học', title: 'AI trong đời sống thông minh', img: '/images/stickem/kids-car.webp',
          hw: 'Robotics Kit gồm bo mạch, 3 servo, pin sạc và bánh xe; bộ cảm biến, LED và loa/còi dùng theo từng bài.',
          tools: "Stick 'Em WebApp: lập trình khối và điều khiển từ xa (RC).",
          know: 'Phân biệt thiết bị tự động và AI; cách cảm biến và động cơ phối hợp trong thiết bị gia đình, xe tự hành và robot phân loại.',
          skill: 'Lắp ráp, lập trình, thử nghiệm thiết bị dùng cảm biến; dùng rẽ nhánh, lặp có điều kiện; thu thập dữ liệu và trình bày dự án.',
          parts: [
            { name: 'Lớp 4 · Hệ thống thông minh', lessons: ['Thế nào là "đời sống thông minh"?', 'Đèn để bàn thông minh', 'Quạt điện thông minh', 'Thùng rác thông minh', 'Góc học tập thông minh', 'Vườn hoa thông minh của tôi', 'Giá phơi quần áo thông minh', 'Dự án Ngôi nhà thông minh', 'AI quanh em: dùng AI an toàn, có trách nhiệm'] },
            { name: 'Lớp 5 · Đời sống và giao thông', lessons: ['Máy phát nhạc', 'Chuông báo thông minh', 'Xe quét dọn thông minh', 'Trợ lý cảnh sát giao thông', 'Thi đấu xe cứu hộ tự hành đỗ xe chính xác', 'Bộ cảm biến', 'Cửa điện', 'Cánh tay robot phân loại', 'Cuộc sống AI – Công nghệ AI'] },
          ],
        },
        {
          grade: 'Lớp 6 · THCS', title: 'Người bảo vệ thành phố 1', img: '/images/stickem/lab/truong-4.webp',
          hw: "Robotics Kit Stick 'Em: bo mạch, servo, bánh xe; cảm biến khoảng cách và cảm biến ánh sáng.",
          tools: "Stick 'Em WebApp: lập trình khối tuần tự, điều kiện, lặp, biến; trải nghiệm mô hình thị giác máy tính.",
          know: 'Làm quen AI và robot qua vai trò người bảo vệ thành phố; cách cảm biến và thị giác máy tính giúp robot cứu hộ, tuần tra.',
          skill: 'Lắp xe cứu hộ, cánh tay cơ khí, xe linh hoạt; lập trình robot cứu hộ, tuần tra; hợp tác, thuyết trình, cải tiến.',
          parts: [
            { name: 'Tuần 1–17 · Làm quen và cứu hộ', lessons: ['Giới thiệu chủ đề', 'Cứu hộ khẩn cấp trong đống đổ nát', 'Vượt chướng ngại vật', 'Tìm người bằng âm thanh', 'Cứu hộ'] },
            { name: 'Tuần 18–35 · Di chuyển và quan sát', lessons: ['Di chuyển linh hoạt', 'Đôi mắt quan sát', 'Tuần tra tự động', 'Theo dõi và truy vết', 'Ôn tập – kiểm tra kỳ II'] },
          ],
        },
        {
          grade: 'Lớp 7 · THCS', title: 'Người bảo vệ thành phố 2', img: '/images/stickem/lab/truong-5.webp',
          hw: "Robotics Kit Stick 'Em: bo mạch, servo, bánh xe, tay gắp; cảm biến dò đường và sa bàn thực hành.",
          tools: "Stick 'Em WebApp: biến, hàm tự định nghĩa, hàm có tham số, toán tử logic; huấn luyện mô hình thị giác máy tính.",
          know: 'Tự huấn luyện AI nhận diện màu sắc, hình ảnh, ký hiệu, biển báo, tư thế người; nhận thức về thiên vị dữ liệu và trách nhiệm khi dùng AI.',
          skill: 'Điều khiển robot bám đường đơn, đường đôi; phân loại hàng hoá bằng tay gắp; thực hiện kịch bản cứu hộ cộng đồng trên sa bàn.',
          parts: [
            { name: 'Tuần 1–17 · Nhận diện và định vị', lessons: ['Giới thiệu', 'Tìm người trong đám đông', 'Định vị màu sắc', 'Xác định hình ảnh', 'Di chuyển mượt mà'] },
            { name: 'Tuần 18–35 · Ứng dụng và cứu hộ', lessons: ['Phân loại hàng hoá', 'Lái xe an toàn', 'Định vị chính xác', 'Cứu hộ cộng đồng', 'Ôn tập – kiểm tra cuối kỳ'] },
          ],
        },
      ],
    },
    kit: {
      eyebrow: 'Danh mục đầu tư',
      title: "Danh mục [[Phòng Stick 'Em Lab]]",
      lead: 'Learn to Leap đầu tư trọn gói, giá trị từ 200 triệu đồng mỗi phòng.',
      cols: { name: 'Hạng mục', qty: 'Số lượng' },
      items: [
        { icon: 'piece-120t', name: 'Bộ Connector Kit (SERK01-CK)', desc: 'Bộ đũa lắp ghép, khớp nối 60–180 mm thẳng và chữ T, khớp chữ thập, trục, bánh xe, kẹp giấy carton, dây thun, kìm 4 inch', qty: '12 bộ' },
        { icon: 'board-v2', name: 'Bộ Electronics Kit (SERK01-EK)', desc: 'Mạch điều khiển ESP32, 3 động cơ servo MG90R, pin sạc dự phòng 5000 mAh kèm giá đỡ, cáp USB-A sang USB-C', qty: '12 bộ' },
        { icon: 'sensor-ultrasonic', name: 'Bộ cảm biến (SERK01-SK)', desc: 'Màn hình 0,96 inch, cảm biến ánh sáng BH1750, con quay hồi chuyển MPU6050, siêu âm HC-SR04, nhiệt độ – độ ẩm AHT10', qty: '12 bộ' },
        { icon: 'sticky-blue-tablet-chat', name: 'Máy tính bảng học tập STEM – AI', desc: 'Điều khiển và lập trình robot theo nhóm', qty: '06 bộ' },
        { icon: 'robot-car-top-view', name: 'Sa bàn thi đấu', desc: 'Kèm phụ kiện thi đấu theo chuẩn quốc tế', qty: '01 bộ' },
        { icon: 'chappie-yellow-code-card', name: "Phần mềm lập trình Stick 'Em", desc: 'Kèm kho thư viện chủ đề STEM', qty: '01 hệ thống' },
        { icon: 'sticky-pink-clipboard-chat', name: 'Trang trí STEM – AI Lab', desc: 'Nhận diện không gian phòng học', qty: '01 gói' },
      ],
      photo: { src: '/images/stickem/lab/lab-decor.webp', alt: "Phối cảnh Phòng Stick 'Em Lab" },
      opTitle: 'Mô hình vận hành',
      opStats: [
        { v: '02', u: 'tiết/tuần', k: '70 tiết mỗi năm học' },
        { v: '04–06', u: 'nhóm', k: 'mỗi lớp' },
        { v: '06–08', u: 'HS', k: 'mỗi nhóm' },
        { v: '150–200', u: 'HS', k: 'mỗi phòng · 01–03 phòng/điểm trường' },
        { v: '07', u: 'module', k: 'tập huấn GV: 02 ngày + 01 buổi duyệt giảng' },
        { v: 'Theo quy định', u: '', k: 'học phí, theo mức của UBND tỉnh/thành phố' },
      ],
    },
    care: {
      eyebrow: 'Đồng hành miễn phí',
      title: 'Đồng hành [[bền vững]] cùng nhà trường',
      lead: 'Ngoài đầu tư chương trình, thiết bị và học liệu, Learn to Leap tổ chức miễn phí ba hoạt động trọng tâm tại các trường hợp tác.',
      items: [
        { icon: 'book', img: '/images/stickem/lab/tap-huan.webp', tag: '01 đợt mỗi học kỳ', title: 'Tập huấn, đào tạo giáo viên', desc: 'Bồi dưỡng để mỗi thầy cô tự tin đứng lớp và duy trì chương trình lâu dài.', list: ['Chuyên môn STEM – AI, robotics, lập trình', 'Dùng công cụ AI để soạn bài, thiết kế học liệu', 'Chuyển đổi số trong dạy học và quản lý lớp', 'Tích hợp STEM vào môn chính khoá theo TT 86/2026'] },
        { icon: 'spark', img: '/images/stickem/lab/ngay-hoi.webp', tag: 'Hằng năm', title: 'Ngày hội Trải nghiệm KHCN & AI', desc: 'Toàn bộ học sinh tự tay điều khiển robot, khám phá AI, IoT, thực tế ảo, lập trình game, in 3D, robot hình người.', list: ['Đúng hình thức hoạt động trải nghiệm STEM theo TT 86/2026', 'Gắn kết học sinh, phụ huynh và nhà trường', 'Xây dựng hình ảnh trường học đổi mới, hội nhập'] },
        { icon: 'trophy', img: '/images/stickem/lab/doi-tuyen.webp', tag: 'Tháng 5–8', title: 'Huấn luyện đội tuyển thi', desc: 'Lộ trình "học – trải nghiệm – thi đấu": học sinh trường đối tác được huấn luyện miễn phí và ưu tiên tham dự.', list: ["Sân chơi Stick 'Em Quốc gia, tháng 5–6 hằng năm", 'GRG Global tại Singapore, tháng 7–8 hằng năm'] },
      ],
    },
    contests: {
      eyebrow: 'Sân chơi',
      title: "Cuộc thi Stick 'Em [[quốc gia & quốc tế]]",
      items: [
        { src: '/images/stickem/lab/grg-2024.webp', alt: 'Global Robotics Games 2024' },
        { src: '/images/stickem/lab/grg-vn-2025.webp', alt: "GRG Vietnam 2025 – Stick 'Em Robotics Challenge" },
        { src: '/images/stickem/lab/rbw-2025.webp', alt: 'Robotics for a Better World 2025' },
        { src: '/images/stickem/lab/grg-thai-2025.webp', alt: 'GRG Thailand National Round 2025' },
      ],
    },
    gallery: {
      eyebrow: 'Hình ảnh thực tế',
      title: 'Học sinh và giáo viên [[trong giờ STEM – AI]]',
      lead: 'Lớp học, tập huấn và ngày hội Learn to Leap đã tổ chức tại các trường. Bấm vào ảnh để xem lớn.',
      items: [
        { src: '/images/stickem/thuc-te/anh-01.webp', alt: 'Học sinh trình bày mô hình tự lắp' },
        { src: '/images/stickem/thuc-te/anh-04.webp', alt: 'Học sinh thử nghiệm mô hình trên sàn lớp' },
        { src: '/images/stickem/thuc-te/anh-03.webp', alt: 'Lớp học STEM – AI theo nhóm' },
        { src: '/images/stickem/thuc-te/anh-06.webp', alt: 'Tập huấn giáo viên' },
        { src: '/images/stickem/thuc-te/anh-08.webp', alt: 'Học sinh điều khiển robot bằng máy tính bảng' },
        { src: '/images/stickem/thuc-te/anh-02.webp', alt: 'Học sinh theo dõi phần thi trên sa bàn' },
        { src: '/images/stickem/thuc-te/anh-09.webp', alt: 'Trải nghiệm thực tế ảo tại ngày hội' },
        { src: '/images/stickem/thuc-te/anh-05.webp', alt: 'Giờ thực hành trong phòng học' },
        { src: '/images/stickem/thuc-te/anh-07.webp', alt: 'Học sinh quanh sa bàn thi đấu' },
        { src: '/images/stickem/thuc-te/anh-10.webp', alt: 'Ngày hội STEM – AI – Robotics' },
        { src: '/images/stickem/thuc-te/anh-12.webp', alt: 'Đội tuyển thi đấu Robotics' },
        { src: '/images/stickem/thuc-te/anh-11.webp', alt: 'Đội ngũ Learn to Leap cùng học sinh' },
      ],
    },
    basis: {
      eyebrow: 'Căn cứ pháp lý',
      title: 'Căn cứ [[pháp lý triển khai]]',
      lead: 'Từ chủ trương của Đảng đến quy định của địa phương, mô hình bám đủ bốn tầng văn bản.',
      tiers: [
        { label: 'Chủ trương của Đảng', items: [
          { code: 'NQ 57-NQ/TW', title: 'Khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia' },
          { code: 'NQ 71-NQ/TW', title: 'Đột phá phát triển giáo dục và đào tạo; đẩy mạnh STEM, AI trong nhà trường' },
        ] },
        { label: 'Chương trình & khung năng lực', items: [
          { code: 'GDPT 2018', title: 'Chương trình GDPT (TT 32/2018): nền tảng Khoa học, Toán, Tin học, Công nghệ' },
          { code: 'TT 02/2025', title: 'Khung năng lực số cho người học, có miền năng lực AI' },
          { code: 'QĐ 2422', title: 'Khung nội dung giáo dục AI; CV 5588: 12 tiết/lớp/năm từ 2026–2027' },
        ] },
        { label: 'Văn bản mới 2026', items: [
          { code: 'TT 85/2026', title: 'Giáo dục theo nhu cầu người học: lập trình, robot, STEM nâng cao; tự nguyện, ngoài giờ. Hiệu lực 15/11/2026' },
          { code: 'TT 86/2026', title: 'Tổ chức giáo dục STEM theo 3 mức thiết bị; khuyến khích hợp tác với doanh nghiệp. Hiệu lực 30/9/2026' },
        ] },
        { label: 'Quy định địa phương', items: [
          { code: 'UBND tỉnh/TP', title: 'Quy định mức thu dịch vụ giáo dục theo nhu cầu người học' },
        ] },
      ],
      docsTitle: 'Cơ sở pháp lý của [[Learn to Leap]]',
      docsLead: 'Ba văn bản cho phép Learn to Leap triển khai chương trình STEM – AI tại Việt Nam. Bấm vào văn bản để xem bản chụp.',
      docs: [
        { img: '/images/stickem/phap-ly/chung-nhan-tham-dinh.webp', kind: 'Giấy chứng nhận', no: 'Số 2512/CN-NCTK · 25/12/2025', issuer: 'Viện Nghiên cứu Thiết kế Trường học – Bộ GD&ĐT', title: 'Chứng nhận kết quả thẩm định Chương trình Giáo dục STEM Trí tuệ nhân tạo', desc: 'Hệ sinh thái Giáo dục STEM AI và Học liệu số của Learn to Leap phù hợp với Chương trình GDPT 2018 và được sử dụng trong các cơ sở giáo dục phổ thông.' },
        { img: '/images/stickem/phap-ly/qd-trung-tam-boi-duong.webp', kind: 'Quyết định', no: 'Số 1483/QĐ-SGDĐT · 24/02/2026', issuer: 'Sở GD&ĐT Hà Nội', title: 'Giấy phép Trung tâm bồi dưỡng kiến thức STEM AI Robotics', desc: 'Cho phép thành lập Trung tâm bồi dưỡng kỹ năng Learn To Leap.' },
        { img: '/images/stickem/phap-ly/cv-trien-khai-stem-ai.webp', kind: 'Công văn', no: 'Số 5942/SGDĐT-GDTH · 21/10/2026', issuer: 'Sở GD&ĐT Hà Nội', title: 'Giấy phép triển khai Chương trình STEM AI', desc: 'Learn to Leap triển khai thí điểm hoạt động giáo dục theo nhu cầu trong giáo dục Tiểu học tại Hà Nội, năm học 2026–2027 và 2027–2028.' },
      ],
      view: 'Xem văn bản',
    },
    schools: {
      eyebrow: 'Đã triển khai',
      title: 'Các trường học [[đã triển khai]]',
      lead: 'Chương trình STEM – AI – Robotics của Learn to Leap đang chạy ở nhiều trường Tiểu học và THCS.',
      stats: [
        { n: 30, suf: '+', label: 'Trường Tiểu học & THCS' },
        { n: 50, suf: '+', label: 'Trường có phòng STEM AI Lab' },
        { n: 30000, suf: '+', label: 'Học sinh được phổ cập' },
      ],
      items: [
        ['truong-01', 'TH Bắc Hồng'], ['truong-02', 'THCS Vĩnh Hưng'], ['truong-03', 'Trường Lương Ngọc Quyến'], ['truong-04', 'THCS Nam Từ Liêm'], ['truong-05', 'THCS Nguyễn Văn Tiệp'],
        ['truong-06', 'THCS Chu Văn An'], ['truong-07', 'THCS Yên Sở'], ['truong-08', 'TH Phố Cò'], ['truong-09', 'TH&THCS Tây Hà Nội'], ['truong-10', 'THCS Nguyễn Văn Huyên'],
        ['truong-11', 'THCS Tân Mai'], ['truong-12', 'THCS Xuân Đỉnh'], ['truong-13', 'THCS Tàm Xá'], ['truong-14', 'TH&THCS 915 Gia Sàng'], ['truong-15', 'THCS Thanh Trì'],
        ['truong-16', 'THCS Trần Phú'], ['truong-17', 'THCS Chùa Hang II'], ['truong-18', 'THCS Quang Trung'], ['truong-19', 'TH Đội Cấn I'], ['truong-20', 'TH Nguyễn Thị Minh Khai'],
        ['truong-21', 'TH Nguyễn Viết Xuân'], ['truong-22', 'THCS Nguyễn Du'], ['truong-23', 'THCS Hoàng Văn Thụ'], ['truong-24', 'THCS Phúc Xuân'], ['truong-25', 'THCS Độc Lập'],
        ['truong-26', 'THCS Quyết Thắng'], ['truong-27', 'TH Trưng Vương'], ['truong-28', 'TH Sơn Cẩm I'], ['truong-29', 'TH Phúc Trìu'], ['truong-30', 'THCS Chiến Thắng'],
      ],
    },
    cta: { title: "Đưa Phòng [[Stick 'Em Lab]] về trường của bạn", lead: 'Learn to Leap khảo sát phòng học, đề xuất chương trình và kế hoạch triển khai phù hợp với nhà trường.', primary: 'Đặt lịch khảo sát', secondary: 'Xem mô hình xã hội hoá' },
  },

  /* ---------- Dự án tiêu biểu ---------- */
  projectsPage: {
    hero: {
      title: 'Dự án [[tiêu biểu]]',
      lead: 'Một số dự án Learn to Leap đã triển khai cùng các cơ quan quản lý giáo dục, nhà trường và đối tác trên khắp cả nước.',
    },
    /** img: khoá ảnh trong data/site IMAGES. Trang chủ hiện các mục 2–4 (mục 1 STEM 57 đã ở phần Dấu ấn). */
    items: [
      { img: 'proj-stem57', flagIcon: 'shield', flag: 'Dự án quốc gia', title: 'STEM Innovation 57', desc: 'Đồng hành cùng dự án STEM Innovation 57 của Tập đoàn PVN — phòng Lab được Tổng Bí thư Tô Lâm trao tặng tại Trường THPT Kim Liên (Nam Đàn, Nghệ An), tiên phong ứng dụng công nghệ trong dạy học và phát triển năng lực số thực tiễn.', loc: 'Nghệ An · 2025' },
      { img: 'robog-mb-2026', flagIcon: 'trophy', flag: 'Cuộc thi khu vực', title: 'Chung kết ROBOG Miền Bắc 2026', desc: 'Vòng chung kết Robotics & AI đầu tiên tại miền Bắc, do Learn to Leap chủ trì cùng Sở KH&CN Hà Nội: 49 đội thi, hơn 240 học sinh từ 17 trường thuộc 4 tỉnh, thành. Các đội xuất sắc dự ROBOG Asia Cup 2026 tại Hong Kong.', loc: 'Hà Nội · 24/05/2026' },
      { img: 'thai-nguyen-2026', flagIcon: 'megaphone', flag: 'Sân chơi cấp tỉnh', title: 'Sân chơi STEM · AI · Robotics Thái Nguyên 2026', desc: '500 học sinh Tiểu học từ 100 trường, hơn 600 học sinh và huấn luyện viên, tổng giải thưởng 133 triệu đồng. Viện NCTK Trường học – Bộ GD&ĐT phối hợp Sở GD&ĐT Thái Nguyên tổ chức; hơn 10 kênh báo chí đưa tin.', loc: 'Thái Nguyên · 2026' },
      { img: 'ky-ket-nghe-an', flagIcon: 'network', flag: 'Mô hình 3 nhà', title: 'Hệ sinh thái đổi mới sáng tạo Nghệ An', desc: 'Ký kết thỏa thuận hợp tác ba bên cùng Trường Đại học Vinh và đơn vị quản lý nhà nước, theo mô hình liên kết "Nhà nước – Nhà trường – Doanh nghiệp", đưa STEM – AI đến gần hơn với học sinh, giáo viên và cộng đồng.', loc: 'Nghệ An · 06/2026' },
      { img: 'san-kh-cn-ha-noi', flagIcon: 'lab', flag: 'Dấu mốc', title: 'Sàn giao dịch KH&CN TP. Hà Nội', desc: 'Learn to Leap chính thức tham gia Sàn giao dịch Khoa học và Công nghệ TP. Hà Nội với giải pháp "STEM – AI Lab tích hợp Phòng học thông minh".', loc: 'Hà Nội' },
      { img: 'can-tho', flagIcon: 'hub', flag: 'Đổi mới sáng tạo', title: 'Trung tâm Đổi mới sáng tạo TP. Cần Thơ', desc: 'Đồng hành cùng TP. Cần Thơ phát triển mô hình Trung tâm Đổi mới sáng tạo, hướng tới trung tâm giáo dục STEM của Đồng bằng sông Cửu Long theo tinh thần Nghị quyết 57-NQ/TW.', loc: 'Cần Thơ' },
      { img: 'hoi-thao-thai-nguyen', flagIcon: 'users', flag: 'Hội thảo', title: 'Hội thảo "Đổi mới sáng tạo cùng STEM · AI · Robotics"', desc: 'Cùng Sở GD&ĐT Thái Nguyên quy tụ nhà quản lý giáo dục, hiệu trưởng, giáo viên cốt cán và chuyên gia, thảo luận triển khai chuyển đổi số, giáo dục STEM theo Nghị quyết 57-NQ/TW và 71-NQ/TW.', loc: 'Thái Nguyên · 09/2025' },
      { img: 'ha-tinh', flagIcon: 'school', flag: 'Làm việc cấp tỉnh', title: 'Làm việc với UBND tỉnh Hà Tĩnh', desc: 'Cùng Trường Cao đẳng Công nghệ cao Hà Nội làm việc với UBND tỉnh Hà Tĩnh và các Sở, ngành về hợp tác chuyển đổi số và giáo dục STEM – AI – Robotics.', loc: 'Hà Tĩnh · 18/05/2026' },
      { img: 'grg-vn-2025', flagIcon: 'star', flag: 'Cuộc thi quốc gia', title: 'Chung kết GRG Vietnam 2025', desc: "Sân chơi Robotics cấp quốc gia, các đội thi dùng robot Stick 'Em đến từ Singapore — bước chạy đà cho Global Robotics Games tổ chức thường niên tại châu Á.", loc: 'Việt Nam · 2025' },
      { img: 'khoi-dong-vinh-hung', flagIcon: 'lab', flag: 'Phòng Lab', title: 'Phòng thí nghiệm khoa học ứng dụng AI', desc: 'Lễ khởi động phòng thí nghiệm khoa học ứng dụng AI tại Trường Tiểu học và THCS Vĩnh Hưng; ngày hội trải nghiệm STEM – AI – Robotics tại THCS Vĩnh Hưng và THCS Thanh Trì.', loc: 'Vĩnh Hưng, Hà Nội' },
      { img: 'dong-da', flagIcon: 'screen', flag: 'Chuyển đổi số', title: 'Ngày hội Chuyển đổi số phường Đống Đa', desc: 'Đồng hành Ngày hội Chuyển đổi số phường Đống Đa năm 2026 nhân Ngày Chuyển đổi số quốc gia 10/10.', loc: 'Đống Đa, Hà Nội · 10/2026' },
      { img: 'proj-bacninh', flagIcon: 'trend', flag: 'Đổi mới sáng tạo', title: 'Dấu ấn tại Bắc Ninh', desc: 'Trải nghiệm STEM – AI, ngày hội đổi mới sáng tạo cấp tỉnh — 1 trong 12 dự án được tỉnh lựa chọn hỗ trợ phát triển.', loc: 'Tỉnh Bắc Ninh' },
      { img: 'proj-intl', flagIcon: 'globe', flag: 'Trường quốc tế', title: 'Mạng lưới trường quốc tế Hà Nội', desc: 'CLB Robotics, trại hè công nghệ, huấn luyện đội tuyển & ngày hội STEM tại BVIS Hà Nội, Tây Hà Nội, Thực nghiệm Victory, Hoàng Long Tokyo.', loc: 'Hà Nội · 15+ cơ sở' },
    ],
    cta: { title: 'Triển khai dự án tiếp theo cùng Learn to Leap', lead: 'Nhận Hồ sơ năng lực đầy đủ cùng các case study triển khai thực tế.', primary: 'Liên hệ hợp tác' },
  },

  /* ---------- Store (bản demo, sắp theo TT 86/2026) ---------- */
  store: {
    hero: {
      eyebrow: 'Theo Nghị quyết 57-NQ/TW & 71-NQ/TW',
      title: 'Giải pháp STEM – AI – Robotics [[cho trường học Việt Nam]]',
      lead: 'Learn to Leap cung cấp kit học cụ, phòng STEM trọn gói, học liệu số và đào tạo giáo viên — đồng hành cùng các trường phổ thông trong hành trình chuyển đổi số giáo dục.',
      primary: 'Xem sản phẩm',
      secondary: 'Liên hệ đặt sản phẩm',
    },
    search: 'Tìm sản phẩm, kit, học liệu…',
    featured: 'Sản phẩm nổi bật',
    cats: 'Danh mục theo TT 86',
    all: 'Tất cả sản phẩm',
    count: 'sản phẩm',
    help: { title: 'Cần tư vấn?', desc: 'Liên hệ trực tiếp để được tư vấn giải pháp phù hợp với trường của bạn.', cta: 'Liên hệ ngay' },
    loading: 'Đang tải sản phẩm…',
    empty: 'Không tìm thấy sản phẩm phù hợp.',
    error: 'Chưa tải được dữ liệu sản phẩm. Vui lòng thử lại sau.',
    view: 'Xem chi tiết',
    source: 'Xem toàn bộ trên stem.learntoleap.vn',
    prev: 'Trang trước',
    next: 'Trang sau',
    cta: { title: 'Cần danh mục cho phòng STEM của trường?', lead: 'Learn to Leap tư vấn cấu hình danh mục theo TT 86/2026 và ngân sách của nhà trường.', primary: 'Nhận tư vấn danh mục' },
  },

  /* ---------- Blog ---------- */
  news: {
    hero: {
      title: 'Hành trình phổ cập [[STEM – AI – Robotics]] tới mọi miền tổ quốc',
      lead: 'Theo chân Learn to Leap trên chặng đường phổ cập công nghệ giáo dục. Lắng nghe những câu chuyện chân thực từ lớp học, nhịp đập sôi động tại các cuộc thi và những góc nhìn chuyên môn sâu sắc do chính đội ngũ của chúng tôi chắp bút.',
    },
    blog: {
      eyebrow: 'Bài viết',
      title: 'Mới nhất [[từ Learn to Leap]]',
      featured: 'Bài nổi bật',
      all: 'Tất cả',
      filterLabel: 'Lọc theo chủ đề',
      read: 'Đọc bài',
      minutes: 'phút đọc',
      sample: 'Bài mẫu',
      sampleNote: 'Các bài đang hiển thị là bài mẫu (lorem ipsum) để duyệt bố cục — bài thật sẽ do đội ngũ Learn to Leap cập nhật.',
      empty: 'Chưa có bài viết nào trong chủ đề này.',
      more: 'Xem thêm bài viết',
      cats: { 'su-kien': 'Sự kiện', 'cuoc-thi': 'Cuộc thi', 'giai-phap': 'Giải pháp', 'chia-se': 'Chia sẻ chuyên môn' },
    },
    post: {
      back: 'Về Blog',
      related: 'Đọc [[tiếp]]',
      share: 'Chia sẻ',
      copy: 'Sao chép liên kết',
      copied: 'Đã sao chép',
    },
    shorts: { eyebrow: 'Video ngắn', title: 'Khoảnh khắc [[60 giây]]' },
    video: { eyebrow: 'Video', title: 'Video [[nổi bật]]', play: 'Xem video' },
    photos: { eyebrow: 'Hình ảnh', title: 'Khoảnh khắc [[sự kiện]]' },
    cta: {
      title: 'Có câu chuyện muốn kể [[cùng Learn to Leap]]?',
      lead: 'Nhà trường, thầy cô và đối tác có thể gửi bài, ảnh hoạt động hoặc đề xuất chủ đề — chúng tôi sẽ biên tập và đăng lên Blog.',
      primary: 'Liên hệ đội ngũ',
    },
  },

  /* ---------- Liên hệ ---------- */
  contact: {
    hero: {
      title: 'Bắt đầu hành trình [[cùng Learn to Leap]]',
      lead: 'Gọi, nhắn Zalo hoặc gửi email — đội ngũ của chúng tôi sẽ liên hệ tư vấn và gửi Hồ sơ năng lực đầy đủ trong thời gian sớm nhất.',
    },
    quick: {
      eyebrow: 'Liên hệ nhanh',
      title: 'Chọn cách thuận tiện nhất với bạn',
      call: { title: 'Gọi hotline', desc: 'Trao đổi trực tiếp với đội ngũ tư vấn.' },
      zalo: { title: 'Nhắn Zalo', desc: 'Gửi câu hỏi, hình ảnh hiện trạng phòng học.' },
      email: { title: 'Gửi email', desc: 'Phù hợp khi gửi công văn, đề án, yêu cầu báo giá.' },
      profile: { title: 'Tải Hồ sơ năng lực', desc: 'Hồ sơ năng lực Learn to Leap 2026 (PDF, 60 trang).' },
      emailSubject: 'Yêu cầu tư vấn — Learn to Leap',
      profileSubject: 'Yêu cầu Hồ sơ năng lực Learn to Leap',
    },
    info: {
      eyebrow: 'Thông tin liên hệ',
      address: 'Trụ sở',
      hotline: 'Hotline',
      email: 'Email',
      website: 'Website',
      taxId: 'Mã số doanh nghiệp',
    },
    map: { title: 'Bản đồ đường đi', open: 'Mở trên Google Maps' },
  },

  notFound: {
    title: 'Không tìm thấy [[trang này]]',
    lead: 'Đường dẫn có thể đã thay đổi. Mời bạn quay về trang chủ hoặc xem các giải pháp của Learn to Leap.',
    home: 'Về trang chủ',
  },
};

export default vi;
export type Dict = typeof vi;
