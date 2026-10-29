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
    srSolutions: 'Chín giải pháp của Learn to Leap',
    srAudiences: 'Đối tượng hợp tác',
    nav: {
      home: 'Trang chủ',
      about: 'Về chúng tôi',
      solutions: 'Giải pháp',
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
    solLinks: ['Phòng STEM – AI Lab', 'Chương trình K12', 'Ngày hội & Cuộc thi', 'Huấn luyện đội tuyển', 'Innovation Hub'],
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
      description: 'Chín giải pháp đồng bộ: Phòng STEM – AI Lab, chương trình K12 liên thông, Innovation Hub, ngày hội, cuộc thi, huấn luyện đội tuyển, trại hè và tour hướng nghiệp.',
    },
    impact: {
      title: 'Năng lực & Dấu ấn — Learn to Leap',
      description: 'Hơn 20 tỉnh thành, 50+ đối tác, 50+ ngày hội STEM – AI – Robotics. Các dự án tiêu biểu và giải thưởng của Learn to Leap.',
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
    notFound: { title: 'Không tìm thấy trang — Learn to Leap', description: 'Trang bạn tìm không tồn tại.' },
  },

  /* ---------- Dùng chung nhiều trang ---------- */
  solutions: [
    { id: 'sol-ihub', num: '01', icon: 'hub', title: 'Innovation Hub', desc: 'Chuỗi trung tâm học tập tương lai trên toàn quốc: Blended Learning, khóa học trực tuyến, Active Learning, workshop và xưởng sáng chế cuối tuần.', tag: 'Hệ sinh thái ILH' },
    { id: 'sol-lab', num: '02', icon: 'lab', title: 'Phòng STEM – AI Lab', desc: 'Mô hình phòng học hiện đại tích hợp thiết bị robot AI, không gian linh hoạt và nền tảng LMS — chuẩn quốc tế, triển khai ngay tại trường.', tag: 'Giải pháp chủ lực' },
    { id: 'sol-k12', num: '03', icon: 'book', title: 'Chương trình STEM – AI K12', desc: 'Khung chương trình liên thông Mầm non → THPT về Robotics, Lập trình & AI, bám sát Khung năng lực số (TT 02/2025).', tag: 'Mầm non → THPT' },
    { id: 'sol-ngayhoi', num: '04', icon: 'megaphone', title: 'Ngày hội trải nghiệm', desc: 'Hơn 50 ngày hội đã tổ chức với 200+ chủ đề, đón tới 1.200+ học sinh mỗi sự kiện — sôi nổi, hiện đại, giàu cảm hứng.', tag: '50+ ngày hội' },
    { id: 'sol-cuocthi', num: '05', icon: 'trophy', title: 'Tổ chức cuộc thi', desc: 'Sân chơi học thuật cấp trường, tỉnh/thành, quốc gia & quốc tế — phối hợp Sở GD&ĐT, Viện Thiết kế Trường học, WEC và Đoàn Thanh niên.', tag: 'Tới cấp quốc tế' },
    { id: 'sol-tour', num: '06', icon: 'pin', title: 'Tour trải nghiệm hướng nghiệp', desc: 'Đưa học sinh đến các khu công nghiệp (Deep C, Bắc Ninh…), kết nối giáo dục với thị trường lao động và định hướng nghề nghiệp đa ngành.', tag: 'Học – Nghề – Doanh nghiệp' },
    { id: 'sol-huanluyen', num: '07', icon: 'terminal', title: 'Huấn luyện đội tuyển', desc: 'Đào tạo chuyên sâu cho đội tuyển dự các đấu trường hàng đầu: VEX Robotics, UBTECH, WRO, FLL, GreenMech, OhStem…', tag: 'Vươn ra quốc tế' },
    { id: 'sol-traihe', num: '08', icon: 'camp', title: 'Trại hè công nghệ toàn quốc', desc: 'Sân chơi STEM – AI cho học sinh 7–16 tuổi: Robotics, Coding, VR, kỹ năng sống — hình thức bán trú, nội trú và quốc tế.', tag: 'Hè sáng tạo' },
    { id: 'sol-doitac', num: '09', icon: 'users', title: 'Mạng lưới đối tác chiến lược', desc: 'Hệ sinh thái 50+ đối tác chuyên môn & công nghệ trong và ngoài nước cùng phát triển, chuyển giao và bảo trợ chương trình.', tag: '50+ đối tác' },
  ],
  awards: [
    { icon: 'star', label: 'Giải thưởng 2023', title: 'SEI Awards 2023', short: '"Ảnh hưởng giáo dục của năm" — vượt 200+ dự án.', desc: '"Ảnh hưởng giáo dục của năm" — Sáng kiến giáo dục thông minh, vượt qua hơn 200 dự án.' },
    { icon: 'shieldCheck', label: 'Dự án quốc gia', title: 'STEM Innovation 57', short: 'Phòng Lab trao tặng bởi đồng chí Tổng Bí thư.', desc: 'Phòng Lab trao tặng tại THCS Cầu Giấy & THPT Kim Liên bởi đồng chí Tổng Bí thư.' },
    { icon: 'trend', label: 'Tỉnh Bắc Ninh', title: 'Top 12 dự án Bắc Ninh', short: 'Được tỉnh lựa chọn hỗ trợ phát triển.', desc: '1 trong 12 dự án xuất sắc được tỉnh Bắc Ninh lựa chọn hỗ trợ phát triển.' },
    { icon: 'globe', label: 'Hà Nội · Quốc tế', title: 'Top 20 DN ĐMST Hà Nội', short: 'Viet Startup Interchange tại Thâm Quyến.', desc: 'Đại diện Hà Nội tham gia Viet Startup Interchange mùa 3 tại Thâm Quyến.' },
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
      sub: 'Tư vấn – chuyển giao – vận hành trọn gói: phòng học, chương trình, giáo viên và sân chơi quốc tế.',
      cta1: 'Đặt lịch tư vấn',
      /** Cụm chữ gradient trong tiêu đề đổi luân phiên (cụm đầu = cụm trong tiêu đề). */
      rotate: ['STEM – AI – Robotics', 'Robot AI', 'Lập trình & AI', 'Phòng Lab AI', 'Sân chơi quốc tế'],
      cta2: 'Xem phim',
      pauseVideo: 'Tạm dừng phim nền',
      playVideo: 'Phát phim nền',
      closeFilm: 'Đóng phim',
    },
    /** Mục 2 — Bằng chứng nhanh. */
    stats: [
      { n: 20, suf: '+', label: 'Tỉnh, thành phố<br>đã triển khai' },
      { n: 50, suf: '+', label: 'Đối tác<br>chiến lược' },
      { n: 200, suf: '+', label: 'Chủ đề & mô hình<br>trải nghiệm' },
      { n: 50, suf: '+', label: 'Ngày hội STEM –<br>AI – Robotics' },
      { n: 1200, suf: '+', label: 'Học sinh tham gia<br>mỗi ngày hội' },
    ],
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
      title: 'Bạn đang tìm giải pháp [[cho ai?]]',
      items: [
        { who: 'Sở / Phòng GD&ĐT', title: 'Đề án STEM – AI toàn tỉnh, bám sát Nghị quyết 57', img: 'proj-bacninh', page: 'partnership', hash: '' },
        { who: 'Nhà trường', title: 'Phòng Lab, chương trình và giáo viên — trọn gói', img: 'sol-lab', page: 'solutions', hash: '#lab' },
        { who: 'Đối tác & Doanh nghiệp', title: 'Cùng phát triển, chuyển giao và tổ chức sân chơi', img: 'hoi-thao', page: 'partnership', hash: '' },
        { who: 'Phụ huynh & Học sinh', title: 'Ngày hội, cuộc thi và trại hè công nghệ', img: 'sol-ngayhoi', page: 'solutions', hash: '#san-choi' },
      ],
    },
    /** Mục 4 — Ba trụ giải pháp. */
    pillars: {
      eyebrow: 'Giải pháp',
      title: 'Một đối tác — [[trọn hành trình]]',
      lead: 'Từ không gian học tập, chương trình và con người đến sân chơi — Learn to Leap đồng hành cùng nhà trường ở mọi chặng.',
      cta: 'Xem chi tiết giải pháp',
      items: [
        { title: 'Không gian học tập', img: 'sol-lab', hash: '#lab', list: ['Phòng STEM AI Robotics', 'Phòng học thông minh', 'Trường học thông minh'] },
        { title: 'Chương trình & con người', img: 'lab-photo', hash: '#k12', list: ['Chương trình STEM – AI K12 liên thông', 'Giáo viên Learn to Leap đứng lớp tại trường', 'Đào tạo giáo viên (TOT)'] },
        { title: 'Sân chơi & trải nghiệm', img: 'sol-cuocthi', hash: '#san-choi', list: ['Ngày hội trải nghiệm STEM – AI', 'Cuộc thi quốc gia & quốc tế', 'Huấn luyện đội tuyển · Trại hè · Tour hướng nghiệp'] },
      ],
    },
    /** Mục 5 — Dải tối: 5 dòng thiết bị Robotic AI, chỉ ghi đặc trưng dòng, không ghi tên hãng.
     *  tab: nhãn nút chọn; giant: 2 dòng chữ lớn phía sau. */
    robotic: {
      eyebrow: 'Hệ sinh thái Robotic AI',
      title: 'Thiết bị chuẩn quốc tế, [[từ robot hình người đến IoT]]',
      lead: 'Đối tác chính thức của các hãng robot giáo dục hàng đầu — Learn to Leap đưa 5 dòng thiết bị về tận lớp học, kèm chương trình và giáo viên.',
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
      title: 'Năm bước, [[một hành trình khép kín]]',
      lead: 'Minh bạch từ ngày khảo sát đến khi vận hành ổn định — bám sát chủ trương và khung chuẩn của Bộ GD&ĐT.',
      basisLabel: 'Căn cứ & khung chuẩn',
      basis: ['Chương trình GDPT 2018', 'Khung năng lực số — TT 02/2025', 'Khung năng lực AI — QĐ 3439', 'Nghị quyết 57-NQ/TW', 'Nghị quyết 71-NQ/TW'],
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
    /** Mục 8 — Khoảnh khắc: video, ảnh, báo chí. */
    moments: {
      eyebrow: 'Khoảnh khắc Learn to Leap',
      title: 'Không khí thật [[từ những lớp học]]',
      lead: 'Bấm để xem ngay trên trang — không cần rời khỏi website.',
      shortsTitle: 'Video ngắn',
      photos: [
        { src: '/images/gallery/su-kien-05.webp', alt: 'Học sinh điều khiển robot thi đấu trên sa bàn' },
        { src: '/images/sol-k12.webp', alt: 'Tiết học STEM – AI với máy tính bảng' },
        { src: '/images/gallery/su-kien-08.webp', alt: 'Giáo viên trải nghiệm robot dịch vụ tại hội thảo' },
        { src: '/images/sol-ngayhoi.webp', alt: 'Học sinh tại ngày hội STEM – AI – Robotics' },
        { src: '/images/gallery/su-kien-11.webp', alt: 'Học sinh lập trình robot trên sa bàn cùng giáo viên' },
        { src: '/images/gallery/su-kien-10.webp', alt: 'Học sinh reo hò cổ vũ tại ngày hội' },
        { src: '/images/gallery/su-kien-12.webp', alt: 'Học sinh lắp ráp xe robot' },
        { src: '/images/gallery/su-kien-09.webp', alt: 'Thầy cô trải nghiệm kính thực tế ảo' },
      ],
      blogTitle: 'Bài mới trên Blog',
      cta: 'Xem Blog & video',
    },
    /** Mục 9 — Hành động. */
    cta: {
      eyebrow: 'Đồng hành cùng Learn to Leap',
      title: 'Cùng đưa [[STEM – AI]] đến trường của bạn',
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
      title: 'Cùng viết tiếp câu chuyện STEM – AI tại địa phương của bạn',
      lead: 'Nhận Hồ sơ năng lực đầy đủ và trao đổi phương án hợp tác phù hợp với đơn vị của bạn.',
      primary: 'Liên hệ hợp tác',
      secondary: 'Xem giải pháp',
    },
  },

  /* ---------- Giải pháp ---------- */
  solutionsPage: {
    hero: {
      title: 'Một hệ sinh thái — [[chín giải pháp đồng bộ]]',
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
    ihub: {
      eyebrow: 'Trung tâm học tập tương lai',
      title: 'Innovation Hub — hệ sinh thái [[học tập của thế hệ mới]]',
      lead: 'Chuỗi trung tâm học tập tương lai của Learn to Leap, kết hợp Blended Learning, khoá học trực tuyến, Active Learning, workshop trải nghiệm, xưởng sáng chế cuối tuần và showcase offline.',
      cards: [
        { icon: 'screen', title: 'Thiết bị dạy học', desc: 'Màn cảm ứng, máy tính bảng, robot & lego, máy in 3D, máy cắt laser.' },
        { icon: 'book', title: 'Nền tảng & chương trình', desc: 'LMS tích hợp và phần mềm chuyên biệt cho STEM – AI, tiếng Anh, hướng nghiệp.' },
      ],
    },
    arena: {
      eyebrow: 'Sân chơi & đường đua quốc tế',
      title: 'Học thật, làm thật, [[thi thật, đi thật]]',
      lead: 'Hệ thống sân chơi giúp học sinh biến kiến thức thành sản phẩm và bản lĩnh, từ lớp học đến đấu trường quốc tế.',
      cards: [
        { icon: 'megaphone', title: 'Ngày hội trải nghiệm', desc: '50+ ngày hội, 200+ chủ đề, tới 1.200+ học sinh mỗi sự kiện — sôi nổi, hiện đại, giàu cảm hứng.' },
        { icon: 'trophy', title: 'Tổ chức cuộc thi', desc: 'Cấp trường → tỉnh/thành → quốc gia → quốc tế; phối hợp Sở GD&ĐT, báo chí, Viện Thiết kế Trường học, WEC, Đoàn Thanh niên.' },
        { icon: 'terminal', title: 'Huấn luyện đội tuyển', desc: "Đào tạo đội tuyển dự VEX Robotics, UBTECH, WRO, FLL, GreenMech, OhStem… <strong>Ưu thế: đường ống thi đấu quốc tế ROBOG, Global Robotics Game (Stick'Em).</strong>" },
        { icon: 'camp', title: 'Trại hè công nghệ toàn quốc', desc: 'Học sinh 7–16 tuổi (bán trú / nội trú / quốc tế): Robotics, Coding, VR, kỹ năng sống và dự án sáng tạo.' },
        { icon: 'pin', title: 'Tour trải nghiệm hướng nghiệp', desc: 'Đến các khu công nghiệp (Deep C, Bắc Ninh…), kết nối giáo dục với thị trường lao động, định hướng nghề nghiệp đa ngành.' },
      ],
      promo: { title: 'Tổ chức sân chơi cho trường của bạn?', desc: 'Learn to Leap thiết kế và vận hành trọn gói ngày hội, cuộc thi STEM – AI – Robotics các cấp.', cta: 'Liên hệ tổ chức' },
    },
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
      title: 'Đã phổ cập năng lực STEM – AI đến [[hơn 20 tỉnh, thành phố]]',
      lead: 'Learn to Leap không chỉ phát triển giải pháp, mà trực tiếp triển khai thành công với hệ sinh thái toàn diện — từ đào tạo giáo viên, tổ chức sự kiện đến xây dựng Lab thông minh.',
    },
    stats: [
      { n: 20, suf: '+', label: 'Địa phương<br>phủ sóng' },
      { n: 50, suf: '+', label: 'Đối tác<br>chiến lược' },
      { n: 200, suf: '+', label: 'Chủ đề &<br>mô hình' },
      { n: 50, suf: '+', label: 'Ngày hội<br>đã tổ chức' },
      { n: 15, suf: '+', label: 'Cơ sở<br>tại Hà Nội' },
      { n: 1200, suf: '+', label: 'HS mỗi<br>ngày hội' },
    ],
    map: {
      eyebrow: 'Bản đồ triển khai',
      title: 'Từ Bắc vào Nam',
      provinces: ['Hà Nội', 'TP. Hồ Chí Minh', 'Bắc Ninh', 'Nghệ An', 'Thái Nguyên', 'Hải Phòng', 'Thanh Hóa', 'Hà Tĩnh', 'Bình Phước'],
      more: '& nhiều địa phương khác',
    },
    projects: {
      eyebrow: 'Dự án tiêu biểu',
      title: 'Những dấu ấn chúng tôi [[tự hào]]',
      items: [
        { img: 'proj-stem57', flagIcon: 'shield', flag: 'Dự án quốc gia', title: 'STEM Innovation 57', desc: 'Phòng Lab được trao tặng tại THCS Cầu Giấy (Hà Nội) và THPT Kim Liên (Nghệ An) bởi đồng chí Tổng Bí thư — tiên phong ứng dụng công nghệ trong dạy học và phát triển năng lực số thực tiễn.', loc: 'Hà Nội · Nghệ An' },
        { img: 'proj-intl', flagIcon: 'globe', flag: 'Trường quốc tế', title: 'Mạng lưới trường quốc tế Hà Nội', desc: 'CLB Robotics, trại hè công nghệ, huấn luyện đội tuyển & ngày hội STEM cấp thành phố tại BVIS Hà Nội, Tây Hà Nội, Thực nghiệm Victory, Hoàng Long Tokyo.', loc: 'Hà Nội · 15+ cơ sở' },
        { img: 'proj-bacninh', flagIcon: 'trend', flag: 'Đổi mới sáng tạo', title: 'Dấu ấn tại Bắc Ninh', desc: 'Trải nghiệm STEM – AI, ngày hội đổi mới sáng tạo cấp tỉnh, huấn luyện đội thi đạt giải Sáng tạo — 1 trong 12 dự án được tỉnh lựa chọn hỗ trợ phát triển.', loc: 'Tỉnh Bắc Ninh' },
      ],
      more: 'Cùng nhiều chương trình khác: CLB TECHTITANS – Vinhomes Smart City · "Con đường tới Net Zero" – Tiểu học Nguyễn Du · CLB STEAM WHSer.',
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
      title: 'Đồng hành cùng Learn to Leap, [[giải pháp "may đo" phù hợp]]',
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
      title: 'Năm bước, [[một hành trình khép kín]]',
      lead: 'Một quy trình minh bạch giúp nhà trường và địa phương an tâm từ ngày đầu khảo sát đến khi vận hành ổn định.',
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
      title: 'Ba lời hứa với [[mỗi đối tác]]',
      items: [
        { icon: 'shieldCheck', title: 'Chất lượng', desc: 'Chương trình & thiết bị chuẩn quốc tế, bản địa hoá theo khung của Bộ GD&ĐT, đo lường bằng năng lực thực tế của học sinh.' },
        { icon: 'support', title: 'Hỗ trợ dài hạn', desc: 'Đồng hành sau triển khai: cập nhật học liệu, bồi dưỡng giáo viên định kỳ & hỗ trợ kỹ thuật liên tục.' },
        { icon: 'pin', title: 'Linh hoạt địa phương', desc: 'Tùy biến theo điều kiện cơ sở vật chất, ngân sách & định hướng riêng của từng nhà trường, từng địa phương.' },
      ],
    },
    partners: {
      eyebrow: 'Mạng lưới đối tác',
      title: 'Đứng trên vai [[những người khổng lồ]]',
      lead: 'Hơn 50 đối tác chuyên môn, công nghệ, học thuật và tổ chức trong & ngoài nước cùng Learn to Leap kiến tạo hệ sinh thái giáo dục.',
      groups: [
        { label: 'Chuyển giao công nghệ & học liệu', items: ['UBTECH', 'IPPG', 'VEX Robotics', 'OhStem', 'Yansee · UGOT', 'Aptech Bách Khoa', 'ROBOGRAM (Hàn Quốc)', 'Nexta', "Stick 'Em (Singapore)"] },
        { label: 'Học thuật, nhà nước & tổ chức', items: ['Viện NCTK Trường học – Bộ GD&ĐT', 'Sở GD&ĐT các tỉnh/thành', 'WEC Việt Nam', 'Đoàn Thanh niên'] },
      ],
    },
    policy: {
      eyebrow: 'Bám sát chủ trương & chính sách',
      title: 'Đồng hành cùng [[định hướng quốc gia]]',
      lead: 'Giải pháp của Learn to Leap được thiết kế bám sát các nghị quyết của Đảng và khung pháp lý của Bộ Giáo dục và Đào tạo.',
      items: [
        { code: 'NQ 57-NQ/TW', title: 'Nghị quyết 57-NQ/TW (22/12/2024)', desc: 'Đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo & chuyển đổi số quốc gia.' },
        { code: 'NQ 71-NQ/TW', title: 'Nghị quyết 71-NQ/TW (22/8/2025)', desc: 'Đột phá phát triển giáo dục & đào tạo, đáp ứng yêu cầu kỷ nguyên mới.' },
        { code: 'GDPT 2018', title: 'Chương trình GDPT 2018 (TT 32/2018)', desc: '5 phẩm chất, 10 năng lực — nền tảng định hướng nội dung mọi chương trình.' },
        { code: 'TT 02/2025', title: 'Khung Năng lực số (TT 02/2025/TT-BGDĐT)', desc: '6 miền, 26 năng lực số cho người học — cơ sở thiết kế chương trình & đánh giá.' },
        { code: 'QĐ 3439', title: 'Khung Năng lực AI cho HS phổ thông (QĐ 3439/QĐ-BGDĐT)', desc: 'Khung nội dung giáo dục AI cho học sinh phổ thông — đang triển khai thí điểm.' },
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

  /* ---------- Blog ---------- */
  news: {
    hero: {
      title: 'Blog [[Learn to Leap]]',
      lead: 'Câu chuyện từ lớp học, ngày hội, cuộc thi và góc nhìn chuyên môn về giáo dục STEM – AI – Robotics — do chính đội ngũ Learn to Leap viết.',
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
