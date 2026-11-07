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
      scheme: 'Đề án',
      xhh: 'Xã hội hoá',
      projects: 'Dự án tiêu biểu',
      store: 'Store',
      impact: 'Năng lực & Dấu ấn',
      partnership: 'Hợp tác',
      news: 'Blog',
      contact: 'Liên hệ',
    },
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
    about: 'Phổ cập STEM AI — Học tập để nhảy vọt trong kỷ nguyên vươn mình. Đơn vị tư vấn & cung cấp giải pháp giáo dục STEM và Trí tuệ nhân tạo cho trường phổ thông Việt Nam.',
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
    profile: 'Nhận Hồ sơ năng lực',
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
    { id: 'sol-ihub', hash: '#innovation-hub', num: '08', icon: 'hub', title: 'Innovation Hub', desc: 'Chuỗi trung tâm học tập tương lai trên toàn quốc: Blended Learning, khóa học trực tuyến, Active Learning, workshop và xưởng sáng chế cuối tuần.', tag: 'Hệ sinh thái ILH' },
  ],
  awards: [
    { img: 'aw-sei', icon: 'star', label: 'Giải thưởng 2023', title: 'SEI Awards 2023', short: '"Ảnh hưởng giáo dục của năm" — vượt 200+ dự án.', desc: '"Ảnh hưởng giáo dục của năm" — Sáng kiến giáo dục thông minh, vượt qua hơn 200 dự án.' },
    { img: 'proj-stem57', icon: 'shieldCheck', label: 'Dự án quốc gia', title: 'STEM Innovation 57', short: 'Phòng Lab trao tặng bởi đồng chí Tổng Bí thư.', desc: 'Phòng Lab trao tặng tại THCS Cầu Giấy & THPT Kim Liên bởi đồng chí Tổng Bí thư.' },
    { img: 'proj-bacninh', icon: 'trend', label: 'Tỉnh Bắc Ninh', title: 'Top 12 dự án Bắc Ninh', short: 'Được tỉnh lựa chọn hỗ trợ phát triển.', desc: '1 trong 12 dự án xuất sắc được tỉnh Bắc Ninh lựa chọn hỗ trợ phát triển.' },
    { img: 'aw-top20', icon: 'globe', label: 'Hà Nội · Quốc tế', title: 'Top 20 DN ĐMST Hà Nội', short: 'Viet Startup Interchange tại Thâm Quyến.', desc: 'Đại diện Hà Nội tham gia Viet Startup Interchange mùa 3 tại Thâm Quyến.' },
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
      { n: 100, suf: '+', label: 'Ngày hội STEM –<br>AI – Robotics' },
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
      lead: 'Learn to Leap cung cấp giải pháp đồng bộ: từ kiến tạo không gian, chuẩn hóa chương trình đến tổ chức các sân chơi trải nghiệm thực tế trong nước & quốc tế.',
      cta: 'Xem chi tiết giải pháp',
      items: [
        { title: 'STEM Lab', img: 'sol-lab', hash: '#lab', list: ['Phòng STEM – AI Robotics theo TT 86', 'Thiết bị, nội thất & nền tảng LMS', 'Chương trình và đào tạo giáo viên đi kèm'] },
        { title: 'Lớp học thông minh', img: 'sol-phtm', hash: '#phtm', list: ['Màn hình tương tác, thiết bị học tập số', 'Phần mềm quản lý lớp học', 'Trường học thông minh'] },
        { title: 'Sân chơi', img: 'sol-sanchoi', hash: '#san-choi', list: ['Ngày hội trải nghiệm STEM – AI', 'Cuộc thi quốc gia & quốc tế', 'Trại hè · Tour hướng nghiệp'] },
        { title: 'Humanoid AI Lab', img: 'sol-ailab', hash: '#ai-lab', list: ['Robot hình người AI', 'Thị giác máy tính & dự án AI', 'AI Center cho học sinh, giáo viên'] },
      ],
    },
    /** Mục 5 — Dải tối: 5 dòng thiết bị Robotic AI, chỉ ghi đặc trưng dòng, không ghi tên hãng.
     *  tab: nhãn nút chọn; giant: 2 dòng chữ lớn phía sau. */
    robotic: {
      eyebrow: 'Hệ sinh thái Robotic AI',
      title: 'Trải nghiệm công nghệ hiện đại [[ngay tại lớp học]]',
      lead: 'Đối tác chính thức của các hãng robot giáo dục hàng đầu, Learn to Leap mang tinh hoa công nghệ thế giới vào lớp học với 5 dòng thiết bị tối tân – từ robot hình người AI đến hệ thống IoT.',
      cta: 'Xem phòng STEM AI Robotics',
      pickLabel: 'Chọn dòng sản phẩm',
      lines: [
        { tab: 'Robot hình người', kind: 'Humanoid · AI hiện thân', name: 'Robot hình người AI', desc: 'Robot hình người cỡ lớn — trình diễn, nghiên cứu và truyền cảm hứng về trí tuệ nhân tạo hiện thân.', tags: ['Humanoid', 'AI hiện thân', 'Trình diễn'], giant: ['HUMANOID', 'AI·ROBOT'] },
        { tab: 'Robot lập trình', kind: 'Lập trình · Kỹ thuật', name: 'Robot lập trình AI', desc: 'Robot hình người cỡ nhỏ để học lập trình Python & AI, cùng bộ lắp ghép kỹ thuật cơ khí – điện tử.', tags: ['Python', 'Thị giác máy', 'Kỹ thuật'], giant: ['CODE·AI', 'ENGINEER'] },
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
      cta: 'Nhận Hồ sơ năng lực',
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
      title: 'Cùng phổ cập [[STEM – Robotics – AI]] đến mọi miền tổ quốc',
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
      'Để hiện thực hóa tầm nhìn đó, LtL tiên phong trở thành <strong>đơn vị tư vấn và cung cấp giải pháp giáo dục STEM & AI toàn diện</strong> cho các trường phổ thông. Mọi chương trình của chúng tôi đều được tinh chỉnh khắt khe, bám sát Chương trình GDPT 2018 và các khung năng lực số tiên tiến nhất.',
      'LtL chọn cách trở thành người bạn đồng hành sâu sát, từ tư vấn chiến lược, chuyển giao mô hình, cho đến trực tiếp triển khai và sát cánh cùng nhà trường trên hành trình đánh thức tiềm năng của từng học sinh. Hơn thế nữa, LtL tự hào là <strong>đối tác chiến lược</strong> trong việc kết nối và thực thi các dự án trọng điểm quốc gia về STEM, AI và chuyển đổi số trong giáo dục.',
    ],
    photoAlt: 'Cuộc thi ROBOG Miền Bắc 2026 — Learn to Leap',
    photoCaption: 'Cuộc thi ROBOG Miền Bắc 2026 — sân chơi Robot AI đầu tiên tại khu vực miền Bắc.',
    quote: '"Sự đồng hành giữa Nhà trường, Phụ huynh, các cơ quan ban ngành, đối tác và Learn to Leap sẽ tạo nên một hệ sinh thái giáo dục bền vững — nơi mỗi học sinh được truyền cảm hứng để tự tin, sáng tạo và bản lĩnh công nghệ."',
    quoteName: 'Lê Văn Trí',
    quoteRole: 'Nhà sáng lập & Tổng Giám đốc, Learn to Leap',
    /** Nhà sáng lập. photo: đường dẫn trong public/ (để trống thì hiện chữ viết tắt). Nội dung tạm — chờ CEO duyệt. */
    founder: {
      eyebrow: 'Nhà sáng lập',
      title: 'Người khởi xướng [[hành trình Learn to Leap]]',
      name: 'Lê Văn Trí',
      role: 'Nhà sáng lập & Tổng Giám đốc',
      photo: '',
      bio: [
        'Sáng lập Learn to Leap năm 2023 với niềm tin giáo dục công nghệ không thể là đặc quyền của riêng ai.',
        'Dẫn dắt đội ngũ đưa mô hình STEM – AI – Robotics tới hơn 20 tỉnh, thành phố, cùng các Sở GD&ĐT, nhà trường và đối tác quốc tế.',
      ],
    },
    /** Nhân vật & cố vấn chiến lược. Nội dung tạm — chờ CEO gửi tên, chức danh, ảnh. name trống thì hiện chữ "Đang cập nhật". */
    advisors: {
      eyebrow: 'Nhân vật & cố vấn chiến lược',
      title: 'Những người [[đồng hành dẫn đường]]',
      lead: 'Learn to Leap được dẫn dắt bởi đội ngũ lãnh đạo và các cố vấn giàu kinh nghiệm trong giáo dục, công nghệ và quản trị.',
      pending: 'Đang cập nhật',
      items: [
        { name: '', role: 'Cố vấn chiến lược — Giáo dục', desc: 'Thông tin cố vấn đang được cập nhật.' },
        { name: '', role: 'Cố vấn chiến lược — Công nghệ & AI', desc: 'Thông tin cố vấn đang được cập nhật.' },
        { name: '', role: 'Cố vấn chiến lược — Hợp tác quốc tế', desc: 'Thông tin cố vấn đang được cập nhật.' },
        { name: '', role: 'Cố vấn chiến lược — Quản trị', desc: 'Thông tin cố vấn đang được cập nhật.' },
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
      title: 'Cùng viết tiếp câu chuyện phổ cập STEM – Robotics – AI đến mọi miền tổ quốc',
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
        { v: '30K', u: 'đ/tiết', k: 'học phí dự kiến' },
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
      title: 'Hành trình phổ cập [[STEM – Robotics – AI]] đến mọi miền tổ quốc',
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
      primary: 'Nhận Hồ sơ năng lực',
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
        { code: 'QĐ 2422', title: 'Quyết định 2422/QĐ-BGDĐT', desc: 'Khung nội dung giáo dục trí tuệ nhân tạo cho học sinh phổ thông — thay cho bản thí điểm QĐ 3439.' },
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
      title: 'Các nhóm [[sản phẩm]] STEM – AI – Robotics',
      lead: 'Năm nhóm thiết bị Learn to Leap phân phối và chuyển giao cho nhà trường — từ robot hình người AI đến học liệu STEM – IoT, đi kèm chương trình và đào tạo giáo viên.',
      cta: 'Xem danh mục trên Store',
    },
    levelLabel: 'Cấp học',
    usesLabel: 'Ứng dụng',
    storeCta: 'Xem trong Store',
    /** bots: ảnh tách nền trong public/images/robots (ảnh đầu to nhất). store: neo nhóm trên trang Store. */
    groups: [
      { id: 'humanoid', bots: ['tienkung', 'cruzr'], kind: 'Humanoid · AI hiện thân', name: 'Robot hình người AI', level: 'THCS · THPT · AI Center', desc: 'Robot hình người cỡ lớn — trình diễn, nghiên cứu và truyền cảm hứng về trí tuệ nhân tạo hiện thân.', uses: ['Trình diễn tại ngày hội, sự kiện', 'Nghiên cứu AI hiện thân', 'Hạt nhân của Humanoid AI Lab'], store: '#nhom-6' },
      { id: 'lap-trinh', bots: ['yanshee', 'ukit-se'], kind: 'Lập trình · Kỹ thuật', name: 'Robot lập trình AI', level: 'THCS · THPT', desc: 'Robot hình người cỡ nhỏ để học lập trình Python & AI, cùng bộ lắp ghép kỹ thuật cơ khí – điện tử.', uses: ['Lập trình Python, nhận diện giọng nói, khuôn mặt', 'Thị giác máy tính', 'Chương trình AI THCS, THPT'], store: '#nhom-5' },
      { id: 'lap-ghep', bots: ['ugot-up', 'ugot-dog'], kind: 'Robotics · Biến hình', name: 'Robot lắp ghép AI', level: 'Tiểu học · THCS', desc: 'Một bộ robot biến hình nhiều dạng — xe, chó robot, cánh tay — lắp ghép sáng tạo, lập trình khối.', uses: ['Lập trình khối, lắp ghép sáng tạo', 'Thi đấu robot', 'CLB Robotics'], store: '#nhom-5' },
      { id: 'steam', bots: ['stickem-robot', 'weeemake-kit'], kind: 'STEAM · Maker', name: 'STEAM & Maker', level: 'Tiểu học · THCS', desc: 'Học liệu lắp ghép và bộ robot – IoT cho các dự án STEAM thực hành, từ ý tưởng đến sản phẩm.', uses: ['Dự án STEAM theo chủ đề', 'Thiết kế kĩ thuật và chế tạo', "Sân chơi Stick 'Em Dojo"], store: '#nhom-4' },
      { id: 'stem-iot', bots: ['kt-smarthouse', 'kt-datalogger'], kind: 'STEM Khoa học · IoT', name: 'STEM Khoa học & IoT', level: 'Tiểu học · THCS · THPT', desc: 'Học liệu Hoạt động giáo dục STEM, mô hình IoT, nhà thông minh và năng lượng tái tạo.', uses: ['Thí nghiệm đo lường bằng cảm biến', 'Mô hình nhà thông minh, IoT', 'Năng lượng tái tạo'], store: '#nhom-3' },
    ],
  },

  /* ---------- Đề án (ngân sách nhà nước) ---------- */
  scheme: {
    hero: {
      title: 'Đề án [[Chuyển đổi số]] & Giáo dục STEM – AI',
      lead: 'Learn to Leap đồng hành cùng Sở, Phòng GD&ĐT và nhà trường xây dựng đề án từ ngân sách nhà nước — bám sát Nghị quyết 57-NQ/TW, 71-NQ/TW và Thông tư 86/2026/TT-BGDĐT, khả thi khi triển khai.',
      cta: 'Trao đổi về đề án',
    },
    types: {
      eyebrow: 'Loại đề án',
      title: 'Các đề án [[Learn to Leap tư vấn]]',
      items: [
        { icon: 'network', title: 'Đề án Chuyển đổi số giáo dục', desc: 'Lộ trình chuyển đổi số toàn ngành: hạ tầng, học liệu số, năng lực số của giáo viên và học sinh.' },
        { icon: 'school', title: 'Đề án Giáo dục thông minh', desc: 'Trường học thông minh, phòng học thông minh, thư viện số — triển khai theo từng giai đoạn.' },
        { icon: 'robot', title: 'Đề án Giáo dục STEM – AI toàn tỉnh', desc: 'Phổ cập giáo dục STEM – AI quy mô tỉnh/thành, có chỉ tiêu, lộ trình và mô hình đánh giá.' },
        { icon: 'lab', title: 'Đề án STEM cấp trường từ ngân sách', desc: 'Phòng STEM theo danh mục khung của TT 86/2026, kèm chương trình và đào tạo giáo viên.' },
      ],
    },
    deliver: {
      eyebrow: 'Learn to Leap cung cấp',
      title: 'Hồ sơ đề án [[đầy đủ, đúng quy định]]',
      items: [
        'Khảo sát hiện trạng và báo cáo đánh giá',
        'Thuyết minh đề án, mục tiêu và chỉ tiêu bám NQ 57, NQ 71',
        'Danh mục thiết bị đối chiếu TT 86/2026, tránh trùng danh mục thiết bị dạy học tối thiểu',
        'Dự toán kinh phí theo từng giai đoạn',
        'Kế hoạch đào tạo, bồi dưỡng giáo viên',
        'Phương án vận hành, đánh giá hiệu quả sau đầu tư',
      ],
    },
    steps: {
      eyebrow: 'Quy trình',
      title: 'Từ ý tưởng đến [[đề án được phê duyệt]]',
      items: [
        { title: 'Khảo sát', desc: 'Đánh giá hiện trạng cơ sở vật chất, đội ngũ và nhu cầu của địa phương.' },
        { title: 'Xây dựng đề án', desc: 'Mục tiêu, chỉ tiêu, lộ trình và mô hình triển khai phù hợp ngân sách.' },
        { title: 'Thẩm định danh mục', desc: 'Rà soát từng hạng mục với TT 86/2026 và các quy định liên quan.' },
        { title: 'Triển khai & đào tạo', desc: 'Lắp đặt, chuyển giao chương trình, tập huấn giáo viên.' },
        { title: 'Đánh giá', desc: 'Theo dõi chỉ tiêu, báo cáo hiệu quả và điều chỉnh giai đoạn sau.' },
      ],
    },
    basis: { eyebrow: 'Căn cứ', title: 'Bám sát [[chủ trương & chính sách]]' },
    cta: { title: 'Cần xây dựng đề án cho địa phương, nhà trường?', lead: 'Đội ngũ Learn to Leap khảo sát, tư vấn và cùng đơn vị hoàn thiện hồ sơ đề án.', primary: 'Liên hệ tư vấn đề án', secondary: 'Xem mô hình xã hội hoá' },
  },

  /* ---------- Xã hội hoá (doanh nghiệp đầu tư) ---------- */
  xhh: {
    hero: {
      title: 'Đề án [[xã hội hoá]] giáo dục STEM – AI',
      lead: 'Khi ngân sách chưa sẵn sàng, nhà trường vẫn có phòng STEM – AI: doanh nghiệp đầu tư thiết bị, Learn to Leap chuyển giao chương trình và cùng nhà trường vận hành.',
      cta: 'Trao đổi mô hình xã hội hoá',
    },
    roles: {
      eyebrow: 'Mô hình',
      title: 'Ba bên cùng [[kiến tạo]]',
      items: [
        { icon: 'users', title: 'Doanh nghiệp đầu tư', desc: 'Đầu tư thiết bị, không gian phòng STEM – AI theo phương án được nhà trường và cơ quan quản lý chấp thuận.' },
        { icon: 'school', title: 'Nhà trường', desc: 'Bố trí phòng học, thời khoá biểu; giám sát chất lượng và an toàn của hoạt động giáo dục.' },
        { icon: 'cap', title: 'Learn to Leap', desc: 'Chuyển giao chương trình, giáo viên đứng lớp hoặc đào tạo giáo viên nhà trường, tổ chức sân chơi.' },
      ],
    },
    benefits: {
      eyebrow: 'Lợi ích',
      title: 'Lợi ích [[cho từng bên]]',
      items: [
        { who: 'Nhà trường', list: ['Có phòng STEM – AI chuẩn mà không chờ ngân sách', 'Đội ngũ giáo viên được đào tạo bài bản', 'Nâng chất lượng giáo dục, thương hiệu nhà trường'] },
        { who: 'Phụ huynh & học sinh', list: ['Học STEM – AI ngay tại trường, chi phí hợp lý', 'Tham gia ngày hội, cuộc thi các cấp', 'Phát triển năng lực số, tư duy công nghệ'] },
        { who: 'Doanh nghiệp', list: ['Đồng hành trách nhiệm xã hội vì giáo dục', 'Mô hình vận hành minh bạch, có báo cáo', 'Kết nối hệ sinh thái giáo dục địa phương'] },
      ],
    },
    opTitle: 'Mô hình vận hành tham khảo',
    steps: {
      eyebrow: 'Quy trình',
      title: 'Triển khai [[minh bạch, đúng quy định]]',
      items: [
        { title: 'Khảo sát', desc: 'Đánh giá điều kiện phòng học, nhu cầu học sinh.' },
        { title: 'Đề xuất phương án', desc: 'Phương án đầu tư, chương trình, mức đóng góp dự kiến.' },
        { title: 'Phê duyệt & ký kết', desc: 'Nhà trường, cơ quan quản lý xem xét theo quy định hiện hành.' },
        { title: 'Đầu tư & lắp đặt', desc: 'Doanh nghiệp đầu tư, Learn to Leap lắp đặt, chuyển giao.' },
        { title: 'Vận hành & báo cáo', desc: 'Giảng dạy, sân chơi và báo cáo định kỳ cho nhà trường.' },
      ],
    },
    note: '* Mức đóng góp, thời hạn và hình thức hợp tác cụ thể được thống nhất với từng nhà trường, theo quy định của địa phương.',
    cta: { title: 'Muốn có phòng STEM – AI theo mô hình xã hội hoá?', lead: 'Learn to Leap khảo sát và đề xuất phương án phù hợp với nhà trường.', primary: 'Đặt lịch khảo sát', secondary: 'Xem đề án ngân sách' },
  },

  /* ---------- Dự án tiêu biểu ---------- */
  projectsPage: {
    hero: {
      title: 'Dự án [[tiêu biểu]]',
      lead: 'Một số dự án Learn to Leap đã triển khai cùng các cơ quan quản lý giáo dục, nhà trường và đối tác trên khắp cả nước.',
    },
    /** img: khoá ảnh trong data/site IMAGES. Trang chủ hiện các mục 2–4 (mục 1 STEM 57 đã ở phần Dấu ấn). */
    items: [
      { img: 'proj-stem57', flagIcon: 'shield', flag: 'Dự án quốc gia', title: 'STEM Innovation 57', desc: 'Phòng Lab được trao tặng tại THCS Cầu Giấy (Hà Nội) và THPT Kim Liên (Nghệ An) bởi đồng chí Tổng Bí thư — tiên phong ứng dụng công nghệ trong dạy học.', loc: 'Hà Nội · Nghệ An' },
      { img: 'robog-mb', flagIcon: 'trophy', flag: 'Cuộc thi', title: 'Cuộc thi ROBOG Miền Bắc 2026', desc: 'Sân chơi Robot AI đầu tiên tại khu vực miền Bắc, quy tụ đội thi từ nhiều tỉnh, thành phố.', loc: 'Miền Bắc · 2026' },
      { img: 'ky-ket-nghe-an', flagIcon: 'network', flag: 'Hợp tác ba nhà', title: 'Hệ sinh thái đổi mới sáng tạo Nghệ An', desc: 'Ký kết hợp tác "Nhà nước – Nhà trường – Doanh nghiệp" phát triển hệ sinh thái đổi mới sáng tạo tỉnh Nghệ An.', loc: 'Nghệ An · 06/2026' },
      { img: 'thai-nguyen', flagIcon: 'megaphone', flag: 'Sân chơi cấp tỉnh', title: 'STEM – AI – Robotics Thái Nguyên', desc: 'Hội thảo đổi mới sáng tạo cùng Sở GD&ĐT Thái Nguyên và sân chơi STEM – AI – Robotics cấp tỉnh.', loc: 'Thái Nguyên · 2025–2026' },
      { img: 'khoi-dong-vinh-hung', flagIcon: 'lab', flag: 'Phòng Lab', title: 'Phòng thí nghiệm khoa học ứng dụng AI', desc: 'Lễ khởi động phòng thí nghiệm khoa học ứng dụng AI tại Trường Tiểu học và THCS Vĩnh Hưng.', loc: 'Vĩnh Hưng, Hà Nội' },
      { img: 'dong-da', flagIcon: 'screen', flag: 'Chuyển đổi số', title: 'Ngày hội Chuyển đổi số phường Đống Đa', desc: 'Đồng hành Ngày hội Chuyển đổi số phường Đống Đa năm 2026 nhân Ngày Chuyển đổi số quốc gia 10/10.', loc: 'Đống Đa, Hà Nội · 10/2026' },
      { img: 'proj-bacninh', flagIcon: 'trend', flag: 'Đổi mới sáng tạo', title: 'Dấu ấn tại Bắc Ninh', desc: 'Trải nghiệm STEM – AI, ngày hội đổi mới sáng tạo cấp tỉnh — 1 trong 12 dự án được tỉnh lựa chọn hỗ trợ phát triển.', loc: 'Tỉnh Bắc Ninh' },
      { img: 'proj-intl', flagIcon: 'globe', flag: 'Trường quốc tế', title: 'Mạng lưới trường quốc tế Hà Nội', desc: 'CLB Robotics, trại hè công nghệ, huấn luyện đội tuyển & ngày hội STEM tại BVIS Hà Nội, Tây Hà Nội, Thực nghiệm Victory, Hoàng Long Tokyo.', loc: 'Hà Nội · 15+ cơ sở' },
      { img: 'grg-2025', flagIcon: 'star', flag: 'Quốc tế', title: 'Global Robotics Games 2025', desc: "Học sinh Việt Nam đạt Gold Award tại Global Robotics Games 2025 cùng bộ học liệu Stick 'Em.", loc: 'Quốc tế · 2025' },
    ],
    cta: { title: 'Triển khai dự án tiếp theo cùng Learn to Leap', lead: 'Nhận Hồ sơ năng lực đầy đủ cùng các case study triển khai thực tế.', primary: 'Liên hệ hợp tác' },
  },

  /* ---------- Store (bản demo, sắp theo TT 86/2026) ---------- */
  store: {
    hero: {
      title: 'Store — danh mục giải pháp [[theo Thông tư 86]]',
      lead: 'Danh mục giải pháp, thiết bị giáo dục STEM sắp theo các nhóm của Thông tư 86/2026/TT-BGDĐT. Mỗi hạng mục lớn gồm các giải pháp nhỏ để nhà trường chọn theo nhu cầu.',
    },
    demo: 'Bản demo — danh mục minh hoạ, chưa phải danh mục chào giá chính thức.',
    navLabel: 'Hạng mục',
    quote: 'Nhận báo giá',
    quoteSubject: 'Yêu cầu báo giá',
    /** img: ảnh tách nền trong public/images/robots (để trống thì hiện icon). lv: cấp học. */
    groups: [
      { code: 'I', id: 'nhom-1', title: 'Không gian & nội thất STEM', desc: 'Nội thất, không gian linh hoạt cho hoạt động nhóm và dự án.', items: [
        { img: '', icon: 'interior', name: 'Bàn ghế STEM linh hoạt', desc: 'Bàn nhóm ghép linh hoạt, ghế điều chỉnh theo lứa tuổi.', lv: ['TH', 'THCS', 'THPT'] },
        { img: '', icon: 'cube', name: 'Tủ lưu trữ & kệ trưng bày', desc: 'Lưu trữ học liệu theo nhóm, trưng bày sản phẩm của học sinh.', lv: ['TH', 'THCS', 'THPT'] },
        { img: '', icon: 'lab', name: 'Thiết kế, thi công phòng STEM', desc: 'Thiết kế 3D, thi công trọn gói theo diện tích thực tế.', lv: ['TH', 'THCS', 'THPT'] },
      ] },
      { code: 'II', id: 'nhom-2', title: 'Nền tảng & thiết bị số dùng chung', desc: 'Thiết bị trình chiếu, nền tảng học tập số dùng chung trong phòng.', items: [
        { img: 'kt-screen', icon: 'screen', name: 'Màn hình tương tác', desc: 'Màn cảm ứng cỡ lớn cho giảng dạy và trình bày dự án.', lv: ['TH', 'THCS', 'THPT'] },
        { img: '', icon: 'database', name: 'Nền tảng học tập LMS', desc: 'Quản lý lớp, học liệu số, đánh giá theo thời gian thực.', lv: ['TH', 'THCS', 'THPT'] },
        { img: 'vr-quest', icon: 'monitor', name: 'Kính thực tế ảo VR', desc: 'Trải nghiệm khoa học, lịch sử, địa lí bằng thực tế ảo.', lv: ['TH', 'THCS', 'THPT'] },
      ] },
      { code: 'III', id: 'nhom-3', title: 'Khám phá, đo lường & thực nghiệm khoa học', desc: 'Nhóm 1 của danh mục khung TT 86: đo lường, cảm biến, thí nghiệm.', items: [
        { img: 'kt-datalogger', icon: 'pulse', name: 'Bộ thu nhận dữ liệu & cảm biến', desc: 'Đo nhiệt độ, ánh sáng, lực, điện… và vẽ đồ thị trực tiếp.', lv: ['THCS', 'THPT'] },
        { img: 'kt-ph', icon: 'lab', name: 'Cảm biến hoá học, pH', desc: 'Thực hành đo độ pH, nồng độ trong thí nghiệm hoá – sinh.', lv: ['THCS', 'THPT'] },
        { img: 'kt-wind', icon: 'bolt', name: 'Bộ khám phá năng lượng tái tạo', desc: 'Mô hình điện gió, điện mặt trời; chuyển hoá năng lượng.', lv: ['TH', 'THCS'] },
        { img: 'ebd-stem5', icon: 'book', name: 'Học liệu STEM theo chủ đề', desc: 'Bộ học liệu thực hành theo bài học STEM của chương trình.', lv: ['TH'] },
      ] },
      { code: 'IV', id: 'nhom-4', title: 'Thiết kế kĩ thuật & chế tạo', desc: 'Nhóm 2 của danh mục khung TT 86: gia công, chế tạo, lắp ghép.', items: [
        { img: 'kt-3dprinter', icon: 'cube', name: 'Máy in 3D giáo dục', desc: 'Thiết kế và in chi tiết, sản phẩm ba chiều an toàn cho học sinh.', lv: ['THCS', 'THPT'] },
        { img: 'stickem-kit', icon: 'spark', name: "Bộ kit Stick 'Em", desc: 'Dựng mô hình từ đũa và khớp nối, gắn mạch lập trình được.', lv: ['TH'] },
        { img: 'weeemake-kit', icon: 'cube', name: 'Bộ lắp ghép cơ khí – STEAM', desc: 'Chi tiết cơ cấu, truyền động cho mô hình kỹ thuật.', lv: ['TH', 'THCS'] },
        { img: 'ebd-stem8', icon: 'book', name: 'Học liệu STEM lắp ráp', desc: 'Bộ lắp ráp mô hình theo chủ đề STEM cấp THCS.', lv: ['THCS'] },
      ] },
      { code: 'V', id: 'nhom-5', title: 'Lập trình & robot giáo dục', desc: 'Nhóm 3 của danh mục khung TT 86: robot giáo dục, lập trình.', items: [
        { img: 'ugot-up', icon: 'robot', name: 'Robot lắp ghép AI biến hình', desc: 'Một bộ robot biến hình xe, chó robot, cánh tay; lập trình khối.', lv: ['TH', 'THCS'] },
        { img: 'yanshee', icon: 'robot', name: 'Robot hình người lập trình', desc: 'Lập trình Python, nhận diện giọng nói, khuôn mặt, cử chỉ.', lv: ['THCS', 'THPT'] },
        { img: 'ukit-se', icon: 'robotLegs', name: 'Bộ robot giáo dục', desc: 'Lắp ghép và lập trình robot cơ bản cho câu lạc bộ, tiết học.', lv: ['TH', 'THCS'] },
        { img: 'weeemake-bot', icon: 'robot', name: 'Robot STEAM', desc: 'Robot xe lập trình được, cảm biến dò đường, tránh vật cản.', lv: ['TH', 'THCS'] },
      ] },
      { code: 'VI', id: 'nhom-6', title: 'Công nghệ số, trí tuệ nhân tạo & IoT', desc: 'Nhóm 4 của danh mục khung TT 86: AI, IoT, thị giác máy tính.', items: [
        { img: 'tienkung', icon: 'robot', name: 'Robot hình người AI cỡ lớn', desc: 'Trình diễn và nghiên cứu AI hiện thân cho AI Lab, AI Center.', lv: ['THCS', 'THPT'] },
        { img: 'kt-smarthouse', icon: 'network', name: 'Mô hình nhà thông minh IoT', desc: 'Thu thập, truyền và hiển thị dữ liệu cảm biến từ xa.', lv: ['THCS', 'THPT'] },
        { img: 'kt-wifi', icon: 'network', name: 'Bộ học tập IoT theo chủ đề', desc: 'Kết nối Wi-Fi, điều khiển thiết bị qua ứng dụng.', lv: ['THCS', 'THPT'] },
        { img: 'cruzr', icon: 'robot', name: 'Robot dịch vụ AI', desc: 'Robot tiếp đón, hướng dẫn; minh hoạ ứng dụng AI trong đời sống.', lv: ['THCS', 'THPT'] },
      ] },
      { code: 'VII', id: 'nhom-7', title: 'Chương trình, học liệu & đào tạo', desc: 'Đi kèm thiết bị: chương trình, kế hoạch bài dạy và tập huấn giáo viên.', items: [
        { img: '', icon: 'book', name: 'Chương trình STEM – AI K12', desc: 'Khung chương trình liên thông Mầm non → THPT.', lv: ['TH', 'THCS', 'THPT'] },
        { img: '', icon: 'bookCheck', name: 'Kế hoạch bài dạy mẫu', desc: 'Kế hoạch bài dạy theo chủ đề, bám chương trình GDPT 2018.', lv: ['TH', 'THCS', 'THPT'] },
        { img: '', icon: 'cap', name: 'Tập huấn giáo viên (TOT)', desc: 'Đào tạo giáo viên làm chủ thiết bị và chương trình.', lv: ['TH', 'THCS', 'THPT'] },
      ] },
    ],
    cta: { title: 'Cần danh mục cho phòng STEM của trường?', lead: 'Learn to Leap tư vấn cấu hình danh mục theo TT 86/2026 và ngân sách của nhà trường.', primary: 'Nhận tư vấn danh mục' },
  },

  /* ---------- Blog ---------- */
  news: {
    hero: {
      title: 'Hành trình phổ cập [[STEM – Robotics – AI]] tới mọi miền tổ quốc',
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
      profile: { title: 'Hồ sơ năng lực', desc: 'Nhận bộ Hồ sơ năng lực và case study triển khai.' },
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
