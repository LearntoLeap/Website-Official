import type { Dict } from './vi';

/** English content. Must mirror the structure of vi.ts. */
const en: Dict = {
  langName: 'English',
  langShort: 'EN',
  locale: 'en-US',
  common: {
    pauseMotion: 'Pause logo strip',
    playMotion: 'Play logo strip',
    srSolutions: 'Our nine solutions',
    srAudiences: 'Who we work with',
    nav: {
      home: 'Home',
      about: 'About us',
      solutions: 'Solutions',
      impact: 'Impact',
      partnership: 'Partner with us',
      news: 'News',
      contact: 'Contact',
    },
    ctaPartner: 'Partner with LtL',
    call: 'Call',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    skip: 'Skip to main content',
    switchLang: 'Tiếng Việt',
    switchLangLabel: 'Chuyển sang tiếng Việt',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    photoSoon: 'Photo',
    close: 'Close',
  },
  footer: {
    about: 'Bringing STEM and AI to every school — learning to leap in Vietnam’s new era. We advise on and deliver STEM and Artificial Intelligence education solutions for Vietnamese K-12 schools.',
    solutions: 'Solutions',
    company: 'Company',
    contact: 'Contact',
    solLinks: ['STEM – AI Lab', 'K12 Curriculum', 'Festivals & Competitions', 'Team Coaching', 'Innovation Hub'],
    profile: 'Request our company profile',
    rights: 'Learn to Leap Education Technology JSC · Tax ID',
    aligned: 'Aligned with:',
  },
  meta: {
    home: {
      title: 'Learn to Leap — STEM & AI Education Consulting and Solutions',
      description: 'Learn to Leap (LtL) advises on and delivers STEM and Artificial Intelligence education solutions for Vietnamese K-12 schools — international standards, localised to Vietnam’s 2018 General Education Curriculum and Ministry of Education frameworks.',
    },
    about: {
      title: 'About us — Learn to Leap',
      description: 'The vision, mission, story and core values of Learn to Leap — on a mission to bring STEM and AI education to every student in Vietnam.',
    },
    solutions: {
      title: 'STEM – AI Solutions — Learn to Leap',
      description: 'Nine integrated solutions: STEM – AI Labs, a K-12 curriculum pathway, Innovation Hubs, festivals, competitions, team coaching, summer camps and career discovery tours.',
    },
    impact: {
      title: 'Impact — Learn to Leap',
      description: '20+ provinces and cities, 50+ partners, 50+ STEM – AI – Robotics festivals. Flagship projects and awards from Learn to Leap.',
    },
    partnership: {
      title: 'Partner with us — Learn to Leap',
      description: 'Flexible partnership models for provincial education departments, schools and companies. A five-step process, a network of 50+ partners, aligned with Resolutions 57 and 71 and Ministry of Education frameworks.',
    },
    news: {
      title: 'News & Media — Learn to Leap',
      description: 'Activities, events and press and TV coverage of Learn to Leap.',
    },
    contact: {
      title: 'Contact — Learn to Leap',
      description: 'Contact Learn to Leap: hotline +84 777 308 883, email contact@learntoleap.vn, 241 Xuan Thuy, Cau Giay, Hanoi.',
    },
    notFound: { title: 'Page not found — Learn to Leap', description: 'The page you are looking for does not exist.' },
  },

  solutions: [
    { id: 'sol-ihub', num: '01', icon: 'hub', title: 'Innovation Hub', desc: 'A nationwide network of future-ready learning centres: blended learning, online courses, active learning, workshops and weekend maker studios.', tag: 'ILH ecosystem' },
    { id: 'sol-lab', num: '02', icon: 'lab', title: 'STEM – AI Lab', desc: 'A modern classroom model with AI robotics equipment, flexible space and an LMS platform — international standard, installed right at your school.', tag: 'Flagship solution' },
    { id: 'sol-k12', num: '03', icon: 'book', title: 'STEM – AI K12 Curriculum', desc: 'A continuous pathway from kindergarten to upper secondary in Robotics, Coding & AI, aligned with the national Digital Competency Framework (Circular 02/2025).', tag: 'Kindergarten → Grade 12' },
    { id: 'sol-ngayhoi', num: '04', icon: 'megaphone', title: 'Experience festivals', desc: 'More than 50 festivals held across 200+ themes, welcoming up to 1,200+ students per event — lively, modern and inspiring.', tag: '50+ festivals' },
    { id: 'sol-cuocthi', num: '05', icon: 'trophy', title: 'Competitions', desc: 'Academic competitions at school, provincial, national and international level — run with provincial education departments, the Institute of School Design, WEC and the Youth Union.', tag: 'Up to international level' },
    { id: 'sol-tour', num: '06', icon: 'pin', title: 'Career discovery tours', desc: 'Taking students to industrial parks (Deep C, Bac Ninh…) to connect education with the job market and explore careers across many sectors.', tag: 'School – Career – Industry' },
    { id: 'sol-huanluyen', num: '07', icon: 'terminal', title: 'Competition team coaching', desc: 'In-depth training for teams entering leading competitions: VEX Robotics, UBTECH, WRO, FLL, GreenMech, OhStem…', tag: 'Going international' },
    { id: 'sol-traihe', num: '08', icon: 'camp', title: 'National technology summer camps', desc: 'STEM – AI camps for students aged 7–16: Robotics, Coding, VR and life skills — day camp, residential and international formats.', tag: 'Creative summers' },
    { id: 'sol-doitac', num: '09', icon: 'users', title: 'Strategic partner network', desc: 'An ecosystem of 50+ academic and technology partners in Vietnam and abroad who co-develop, transfer and sponsor our programmes.', tag: '50+ partners' },
  ],
  awards: [
    { icon: 'star', label: '2023 Award', title: 'SEI Awards 2023', short: '"Educational Impact of the Year" — chosen from 200+ projects.', desc: '"Educational Impact of the Year" — a smart education initiative selected from more than 200 projects.' },
    { icon: 'shieldCheck', label: 'National project', title: 'STEM Innovation 57', short: 'Labs presented by the General Secretary of the Party.', desc: 'Labs presented at Cau Giay Secondary School and Kim Lien High School by the General Secretary of the Communist Party of Vietnam.' },
    { icon: 'trend', label: 'Bac Ninh Province', title: 'Top 12 projects in Bac Ninh', short: 'Selected by the province for development support.', desc: 'One of 12 outstanding projects selected by Bac Ninh Province for development support.' },
    { icon: 'globe', label: 'Hanoi · International', title: 'Top 20 Hanoi innovative startups', short: 'Viet Startup Interchange in Shenzhen.', desc: 'Represented Hanoi at Viet Startup Interchange Season 3 in Shenzhen, China.' },
  ],
  portrait: {
    title: 'Core competencies that shape [[global citizens]]',
    lead: 'Every student in a Learn to Leap programme develops holistically against a 21st-century learning outcomes framework.',
    items: [
      { icon: 'monitor', title: 'Mastery of foundational technology' },
      { icon: 'code', title: 'Computational thinking & computer science' },
      { icon: 'globe', title: 'Becoming global citizens' },
      { icon: 'cube', title: '21st-century core skills (4Cs)' },
      { icon: 'book', title: 'Lifelong self-directed learning' },
      { icon: 'checkSquare', title: 'Project-based & applied thinking' },
      { icon: 'trend', title: 'Staying ahead of future trends' },
      { icon: 'leader', title: 'Tomorrow’s leaders' },
    ],
  },

  home: {
    hero: {
      eyebrow: 'Education consulting & solutions · STEM — Robotics — AI',
      title: 'Technology education for [[Vietnam’s era of rising]]',
      sub: 'Learn to Leap advises on and delivers end-to-end solutions that bring STEM and Artificial Intelligence (AI) education to every school.',
      cta1: 'Explore solutions',
      cta2: 'Our impact',
      callouts: [
        { t: 'Walker · Humanoid AI', d: 'Next-generation humanoid robot' },
        { t: 'Cruzr', d: 'Interactive AI service robot' },
        { t: 'Yanshee · High school', d: 'Python & AI programming' },
        { t: 'UGOT · Middle school', d: 'Modular, transforming robot' },
      ],
      hud: 'AI VISION · TRACKING',
      log: ['LTL STEM-AI LAB · ONLINE', 'MODULES: 4 GROUPS · 10 MODULES', 'K12: PRESCHOOL → HIGH SCHOOL', 'STATUS: ACTIVE · MODE: LEARNING'],
    },
    stats: [
      { n: 20, suf: '+', label: 'Provinces & cities<br>served' },
      { n: 50, suf: '+', label: 'Strategic<br>partners' },
      { n: 200, suf: '+', label: 'Hands-on themes<br>& models' },
      { n: 50, suf: '+', label: 'STEM – AI –<br>Robotics festivals' },
      { n: 1200, suf: '+', label: 'Students at<br>each festival' },
    ],
    intro: {
      eyebrow: 'About Learn to Leap',
      title: 'On a mission to [[bring STEM and Artificial Intelligence (AI) to every student]]',
      body: [
        'Learn to Leap (LtL) works alongside schools and local authorities through the whole journey: <strong>advising</strong> on the right model, <strong>transferring</strong> localised international-standard programmes, and directly <strong>operating</strong> them in every classroom, for every student.',
        'We believe technology education should not be a privilege for the few — every Vietnamese student deserves hands-on access to technology and the chance to build the skills of a global citizen.',
      ],
      cta: 'Learn more about us',
    },
    strengths: {
      eyebrow: 'Why Learn to Leap',
      title: 'Three core strengths that [[set us apart]]',
      tagPrefix: 'Core strength',
      items: [
        {
          icon: 'network', title: 'A leading partner network',
          desc: 'Official partner of major organisations in Vietnam and abroad — bringing international-standard programmes, equipment and competitions to Vietnamese schools.',
          list: ['UBTECH (via IPPG / IPP Tech)', "Stick'Em · Global Robotics Game (Singapore)", 'ROBOGRAM (Korea), VEX Robotics, OhStem…'], ordered: false,
        },
        {
          icon: 'bookCheck', title: 'Localised to Ministry of Education standards',
          desc: 'We don’t simply import foreign programmes — we localise them to fit the Ministry’s frameworks, advised by leading universities and the Institute of School Design Research:',
          list: ['2018 General Education Curriculum (Circular 32/2018)', 'Digital Competency Framework — Circular 02/2025 (6 domains, 26 competencies)', 'AI Competency Framework for K-12 students — Decision 3439 (pilot)'], ordered: false,
        },
        {
          icon: 'pulse', title: 'End-to-end delivery, down to every student',
          desc: 'Unlike providers who hand over equipment and leave, Learn to Leap stays with you all the way:',
          list: ['Curriculum design for each school level', 'Our own teaching staff on site', 'Teacher training (TOT)', 'Support for every STEM – AI initiative', "Competitions up to international level (ROBOG, Stick'Em)"], ordered: true,
        },
      ],
    },
    solPreview: {
      eyebrow: 'End-to-end solutions',
      title: 'One ecosystem — [[nine integrated solutions]]',
      lead: 'From smart classrooms and a continuous curriculum to international competitions — turnkey solutions tailored to each school and each locality.',
      cta: 'See all solutions',
      items: [
        { img: 'sol-ihub', num: '01', icon: 'hub', title: 'Innovation Hub', desc: 'A network of future-ready learning centres combining online and hands-on learning.' },
        { img: 'sol-lab', num: '02', icon: 'lab', title: 'STEM – AI Lab', desc: 'A modern, hands-on technology classroom — international standard, installed at your school.' },
        { img: 'sol-k12', num: '03', icon: 'book', title: 'STEM – AI K12 Curriculum', desc: 'A continuous kindergarten-to-Grade-12 pathway aligned with the Digital Competency Framework.' },
        { img: 'sol-ngayhoi', num: '04 – 05', icon: 'trophy', title: 'Festivals & Competitions', desc: '50+ festivals and competitions from school to international level, with up to 1,200+ students per event.' },
        { img: 'sol-tour', num: '06', icon: 'pin', title: 'Career discovery tours', desc: 'Connecting students with companies and the job market across many sectors.' },
        { img: 'sol-huanluyen', num: '07 – 08', icon: 'terminal', title: 'Team coaching & Summer camps', desc: 'Coaching teams for VEX, WRO, FLL… and national technology summer camps.' },
      ],
    },
    partnersStrip: 'Working alongside leading partners in Vietnam and abroad',
    videos: { eyebrow: 'Video', title: 'See Learn to Leap [[in action]]', lead: 'Click to watch right here — no need to leave the site.', shortsTitle: 'Shorts', cta: 'See all videos' },
    awardsTeaser: { eyebrow: 'Recognition', title: 'Trusted and [[recognised]]', cta: 'See our impact' },
    latest: { eyebrow: 'In the press', title: 'Latest [[news]]', cta: 'See all news' },
    cta: {
      eyebrow: 'Work with Learn to Leap',
      title: 'Ready to bring STEM – AI to every corner of Vietnam',
      lead: 'Book a meeting with the Learn to Leap team for a consultation and our full company profile.',
    },
  },

  about: {
    hero: { title: 'Learning to [[leap]] in a new era of growth' },
    vmEyebrow: 'Vision & Mission',
    vm: [
      { icon: 'vision', title: 'Vision', desc: 'To lead Southeast Asia in transferring modern, international-standard digital education solutions that fit Vietnam’s realities.' },
      { icon: 'bolt', title: 'Mission', desc: 'To make STEM – AI education universal, close the digital divide and nurture a generation of global citizens who shape their own future.' },
    ],
    storyEyebrow: 'Our story',
    story: [
      'Founded in 2023, Learn to Leap (LtL) grew from a deep conviction: in the digital age, as Artificial Intelligence (AI) reshapes the world, <strong>technology education must never be a privilege for the few</strong>. We want every Vietnamese student — from big cities to disadvantaged regions — to have access to technology, so that no one is left behind.',
      'To make that vision real, LtL set out to become a <strong>full-service STEM & AI education consultancy and solutions provider</strong> for K-12 schools. Every programme we deliver is carefully refined to align with the 2018 General Education Curriculum and the most advanced digital competency frameworks.',
      'LtL chooses to be a close companion — from strategic advice and model transfer to hands-on delivery, standing beside schools as they unlock each student’s potential. We are also proud to be a <strong>strategic partner</strong> in connecting and delivering key national projects in STEM, AI and digital transformation in education.',
    ],
    photoAlt: 'ROBOG Northern Vietnam 2026 competition — Learn to Leap',
    photoCaption: 'ROBOG Northern Vietnam 2026 — the first AI robotics competition in the northern region.',
    quote: '"When schools, parents, authorities, partners and Learn to Leap work together, we build a sustainable education ecosystem — one where every student is inspired to be confident, creative and capable with technology."',
    quoteName: 'Le Van Tri',
    quoteRole: 'Founder & CEO, Learn to Leap',
    values: {
      eyebrow: 'Core values',
      title: 'Four values that guide [[every decision]]',
      items: [
        { icon: 'idea', title: 'Technology for people', desc: 'Using technology to develop students’ thinking, creativity and life skills in a digital world.' },
        { icon: 'user', title: 'Students at the centre', desc: 'Personalised programmes that develop intellect, skills and emotional growth together.' },
        { icon: 'globe', title: 'Social impact', desc: 'Making STEM – AI education universal, closing the digital divide and nurturing global citizens.' },
        { icon: 'trend', title: 'Pioneering innovation', desc: 'Constantly adopting international standards and renewing our methods, equipment and classroom models.' },
      ],
    },
    philosophy: {
      eyebrow: 'Our philosophy',
      title: 'We measure success by [[what students can actually do]]',
      lead: 'Learn to Leap’s philosophy is <em>learning by doing, and making real things</em>. Every programme targets concrete outcomes — logical thinking, problem-solving, collaboration and confidence with technology.',
    },
    cta: {
      title: 'Let’s write the next chapter of STEM – AI in your community',
      lead: 'Get our full company profile and discuss a partnership model that fits your organisation.',
      primary: 'Talk to us',
      secondary: 'View solutions',
    },
  },

  solutionsPage: {
    hero: {
      title: 'One ecosystem — [[nine integrated solutions]]',
      lead: 'From smart classrooms and a continuous curriculum to international competitions — Learn to Leap delivers turnkey solutions that adapt to the conditions and priorities of each school and locality.',
      cta: 'Get a tailored recommendation',
    },
    lab: {
      eyebrow: 'Flagship solution',
      title: 'STEM – AI Lab',
      lead: 'A modern classroom model developed and deployed in Vietnam by Learn to Leap and <strong>IPP Tech (IPPG)</strong> with <strong>UBTECH</strong> — a world-leading humanoid robot brand — built on an institute-level research project of the Institute of School Design Research under the Ministry of Education and Training.',
      chips: ['UBTECH', 'IPPG', 'Institute of School Design Research – MOET'],
      feats: [
        { icon: 'robot', title: 'Learning technology', desc: 'AI robots, sensors, VR/AR devices & hands-on models.' },
        { icon: 'screen', title: 'Smart classroom equipment', desc: 'Interactive displays, tablets & projection devices.' },
        { icon: 'interior', title: 'Learning space design', desc: 'Open, flexible layouts for group and project work.' },
        { icon: 'database', title: 'LMS platform', desc: 'Student management, personalisation & real-time assessment.' },
      ],
      photoLabel: 'Lab photo',
      opTitle: 'How it runs at school',
      opStats: [
        { v: '35–70', u: 'lessons', k: 'per school year' },
        { v: '08', u: 'groups', k: 'per class' },
        { v: '4–6', u: 'students', k: 'per practice group' },
        { v: '30K', u: 'VND/lesson', k: 'indicative fee' },
      ],
    },
    ladder: {
      eyebrow: 'STEM – AI K12 Curriculum',
      title: 'A continuous pathway [[from kindergarten to Grade 12]]',
      lead: 'Robotics, coding and AI content designed for each age group, learned through projects and real-world technology, aligned with the Digital Competency Framework under Circular 02/2025/TT-BGDĐT.',
      steps: [
        { icon: 'kinder', age: 'Kindergarten · ages 4–6', title: 'Sparking curiosity', desc: 'Meeting robots, visual coding and AI through games and hands-on activities.', pill: 'Learning through play' },
        { icon: 'robotLegs', age: 'Primary · ages 6–10', title: 'Primary AI Robotics', desc: 'Exploring robots, drag-and-drop coding, sensors and AI in projects close to everyday life.', pill: 'AI Fantasy Zoo · 36 themes' },
        { icon: 'code', age: 'Lower secondary · ages 11–15', title: 'Lower Secondary AI Robotics', desc: 'Building algorithmic thinking, sensor robotics, basic AI programming & real-world problem solving.', pill: 'Algorithmic thinking' },
        { icon: 'spark', age: 'Upper secondary · ages 16–18', title: 'Upper Secondary AI Robotics', desc: 'Advanced AI, IoT, data & creative programming, connected to career pathways.', pill: 'Yansee Robot · 32 themes' },
      ],
      noteLabel: 'Extensions:',
      notePills: ['AI framework Grades 3–12 · APTECH · 70 lessons/year', "Stick 'Em STEAM kits (Primary)", 'UGOT · Yansee · UBTECH standard equipment'],
    },
    ihub: {
      eyebrow: 'Future learning centres',
      title: 'Innovation Hub — a learning ecosystem [[for a new generation]]',
      lead: 'Learn to Leap’s network of future-ready learning centres, combining blended learning, online courses, active learning, hands-on workshops, weekend maker studios and offline showcases.',
      cards: [
        { icon: 'screen', title: 'Teaching equipment', desc: 'Touch displays, tablets, robots & LEGO, 3D printers and laser cutters.' },
        { icon: 'book', title: 'Platforms & programmes', desc: 'An integrated LMS and specialised software for STEM – AI, English and career guidance.' },
      ],
    },
    arena: {
      eyebrow: 'Competitions & international pathways',
      title: 'Real learning, real making, [[real competitions, real journeys]]',
      lead: 'A system of events and competitions that helps students turn knowledge into products and confidence — from the classroom to the international stage.',
      cards: [
        { icon: 'megaphone', title: 'Experience festivals', desc: '50+ festivals, 200+ themes, up to 1,200+ students per event — lively, modern and inspiring.' },
        { icon: 'trophy', title: 'Competitions', desc: 'School → province → national → international; run with provincial education departments, the press, the Institute of School Design, WEC and the Youth Union.' },
        { icon: 'terminal', title: 'Competition team coaching', desc: "Coaching teams for VEX Robotics, UBTECH, WRO, FLL, GreenMech, OhStem… <strong>Our edge: a direct pathway to international events — ROBOG and the Global Robotics Game (Stick'Em).</strong>" },
        { icon: 'camp', title: 'National technology summer camps', desc: 'Students aged 7–16 (day / residential / international): Robotics, Coding, VR, life skills and creative projects.' },
        { icon: 'pin', title: 'Career discovery tours', desc: 'Visits to industrial parks (Deep C, Bac Ninh…), connecting education with the job market and exploring careers across sectors.' },
      ],
      promo: { title: 'Want an event at your school?', desc: 'Learn to Leap designs and runs STEM – AI – Robotics festivals and competitions at every level, end to end.', cta: 'Plan an event' },
    },
    cta: {
      title: 'Find the right solution for your school',
      lead: 'The Learn to Leap team will survey your site, advise and propose a turnkey plan — from the Lab to the curriculum and competitions.',
      primary: 'Book a site survey',
      secondary: 'Partnership options',
    },
  },

  impact: {
    hero: {
      title: 'STEM – AI capabilities delivered in [[20+ provinces and cities]]',
      lead: 'Learn to Leap doesn’t just design solutions — we deliver them, with a complete ecosystem spanning teacher training, events and smart Labs.',
    },
    stats: [
      { n: 20, suf: '+', label: 'Localities<br>reached' },
      { n: 50, suf: '+', label: 'Strategic<br>partners' },
      { n: 200, suf: '+', label: 'Themes &<br>models' },
      { n: 50, suf: '+', label: 'Festivals<br>held' },
      { n: 15, suf: '+', label: 'Campuses<br>in Hanoi' },
      { n: 1200, suf: '+', label: 'Students per<br>festival' },
    ],
    map: {
      eyebrow: 'Where we work',
      title: 'From North to South',
      provinces: ['Hanoi', 'Ho Chi Minh City', 'Bac Ninh', 'Nghe An', 'Thai Nguyen', 'Hai Phong', 'Thanh Hoa', 'Ha Tinh', 'Binh Phuoc'],
      more: '& many more',
    },
    projects: {
      eyebrow: 'Flagship projects',
      title: 'Milestones we are [[proud of]]',
      items: [
        { img: 'proj-stem57', flagIcon: 'shield', flag: 'National project', title: 'STEM Innovation 57', desc: 'Labs presented at Cau Giay Secondary School (Hanoi) and Kim Lien High School (Nghe An) by the General Secretary of the Communist Party of Vietnam — pioneering technology in teaching and practical digital skills.', loc: 'Hanoi · Nghe An' },
        { img: 'proj-intl', flagIcon: 'globe', flag: 'International schools', title: 'Hanoi international school network', desc: 'Robotics clubs, technology summer camps, team coaching & city-level STEM festivals at BVIS Hanoi, Tay Ha Noi, Victory Experimental and Hoang Long Tokyo schools.', loc: 'Hanoi · 15+ campuses' },
        { img: 'proj-bacninh', flagIcon: 'trend', flag: 'Innovation', title: 'Our work in Bac Ninh', desc: 'STEM – AI experiences, a provincial innovation festival and coaching for a prize-winning creativity team — one of 12 projects selected by the province for development support.', loc: 'Bac Ninh Province' },
      ],
      more: 'And many more programmes: TECHTITANS Club – Vinhomes Smart City · "The Road to Net Zero" – Nguyen Du Primary School · WHSer STEAM Club.',
    },
    gallery: { eyebrow: 'Moments', title: 'Moments that shape [[global citizens]]' },
    awards: { eyebrow: 'Awards & recognition', title: 'Trusted and [[recognised]]' },
    cta: {
      title: 'See our real-world case studies in detail',
      lead: 'Get our full company profile with real-world implementation case studies.',
      primary: 'Request our profile',
      secondary: 'Partnership options',
    },
  },

  partnership: {
    hero: {
      title: 'Partner with Learn to Leap for [[a tailor-made solution]]',
      lead: 'We design flexible partnership models for each type of partner — education authorities, schools, companies and organisations — with delivery models that fit local conditions.',
    },
    audiences: [
      {
        icon: 'school', title: 'Education departments & leaders', who: 'Education authorities · Local government',
        desc: 'A delivery partner for province- or city-wide STEM – AI and digital transformation programmes, aligned with national policy.',
        list: ['Advice on programme proposals & STEM – AI rollout roadmaps', 'Training and upskilling key teachers across the system', '<strong>Flexible funding models: private-sector investment or state budget</strong>'],
        cta: 'Discuss a regional programme',
      },
      {
        icon: 'cap', title: 'Schools', who: 'School leadership · Subject departments',
        desc: 'A turnkey partner that helps schools roll out STEM – AI properly: from the Lab and curricular/extracurricular programmes to clubs and competitions.',
        list: ['STEM – AI Lab & international-standard equipment', 'A continuous K12 curriculum & our teaching staff on site', 'Teacher training (TOT) for long-term self-sufficiency'],
        cta: 'Advice for your school',
      },
      {
        icon: 'users', title: 'Partners & companies', who: 'Technology · Academia · Organisations',
        desc: 'Co-develop, transfer and sponsor programmes; join us in events, competitions and corporate social responsibility initiatives.',
        list: ['Technology & learning-material transfer', 'Co-hosting festivals, competitions & international events', 'Education-focused CSR programmes'],
        cta: 'Become a partner',
      },
    ],
    process: {
      eyebrow: 'How we deliver',
      title: 'Five steps, [[one complete journey]]',
      lead: 'A transparent process that gives schools and localities peace of mind from the first survey to stable operation.',
      steps: [
        { title: 'Survey', desc: 'Assess current conditions, needs & facilities.' },
        { title: 'Advise & design', desc: 'Propose the right solution, curriculum & funding model.' },
        { title: 'Install & transfer', desc: 'Deliver the Lab, equipment, learning materials & LMS.' },
        { title: 'Train teachers', desc: 'TOT training so school staff can own the programme.' },
        { title: 'Operate & support', desc: 'Co-teaching, running competitions & long-term support.' },
      ],
    },
    commitments: {
      eyebrow: 'Our commitments',
      title: 'Three promises to [[every partner]]',
      items: [
        { icon: 'shieldCheck', title: 'Quality', desc: 'International-standard programmes & equipment, localised to Ministry frameworks and measured by what students can actually do.' },
        { icon: 'support', title: 'Long-term support', desc: 'We stay after launch: updated learning materials, regular teacher development & ongoing technical support.' },
        { icon: 'pin', title: 'Local flexibility', desc: 'Adapted to the facilities, budget & priorities of each school and each locality.' },
      ],
    },
    partners: {
      eyebrow: 'Partner network',
      title: 'Standing on [[the shoulders of giants]]',
      lead: 'More than 50 academic, technology and institutional partners in Vietnam and abroad build this education ecosystem with Learn to Leap.',
      groups: [
        { label: 'Technology & learning-material transfer', items: ['UBTECH', 'IPPG', 'VEX Robotics', 'OhStem', 'Yansee · UGOT', 'Aptech Bach Khoa', 'ROBOGRAM (Korea)', 'Nexta', "Stick 'Em (Singapore)"] },
        { label: 'Academia, government & organisations', items: ['Institute of School Design Research – MOET', 'Provincial Departments of Education', 'WEC Vietnam', 'Ho Chi Minh Communist Youth Union'] },
      ],
    },
    policy: {
      eyebrow: 'Policy alignment',
      title: 'Aligned with [[national priorities]]',
      lead: 'Learn to Leap’s solutions are designed in line with the Party’s resolutions and the legal frameworks of the Ministry of Education and Training.',
      items: [
        { code: 'NQ 57-NQ/TW', title: 'Resolution 57-NQ/TW (22 Dec 2024)', desc: 'Breakthroughs in science, technology, innovation & national digital transformation.' },
        { code: 'NQ 71-NQ/TW', title: 'Resolution 71-NQ/TW (22 Aug 2025)', desc: 'Breakthroughs in education & training to meet the demands of a new era.' },
        { code: 'GDPT 2018', title: '2018 General Education Curriculum (Circular 32/2018)', desc: '5 qualities and 10 competencies — the foundation for every programme’s content.' },
        { code: 'TT 02/2025', title: 'Digital Competency Framework (Circular 02/2025/TT-BGDĐT)', desc: '6 domains and 26 digital competencies for learners — the basis for curriculum design & assessment.' },
        { code: 'QĐ 3439', title: 'AI Competency Framework for K-12 students (Decision 3439/QĐ-BGDĐT)', desc: 'The AI education content framework for K-12 students — currently being piloted.' },
        { code: 'TT 14/2025', title: 'Subject classrooms (Circular 14/2025/TT-BGDĐT)', desc: 'New regulations on subject classrooms — the basis for standardising STEM – AI Labs.' },
      ],
      note: '* Content relating to policy documents and high-level partnerships is carefully reviewed before official publication.',
    },
    cta: {
      title: 'Together, let’s raise a generation of global citizens and bring STEM – AI to every corner of Vietnam',
      lead: 'The Learn to Leap team is ready to listen to your needs and propose the best-fit plan for your organisation.',
      primary: 'Talk to us',
    },
  },

  news: {
    hero: {
      title: 'News & [[Media]]',
      lead: 'Our latest activities and events, and Learn to Leap in the press and on TV.',
    },
    press: { eyebrow: 'News & press', title: 'Featured [[news]]', moreTitle: 'More articles' },
    shorts: { eyebrow: 'Shorts', title: '[[60-second]] moments' },
    video: { eyebrow: 'Video', title: 'Featured [[videos]]', play: 'Play video' },
    photos: { eyebrow: 'Photos', title: 'Event [[moments]]' },
    empty: 'This section is being updated.',
    sourceFallback: 'News',
    readOriginal: 'Read the article (Vietnamese)',
    cta: {
      title: 'Media enquiries',
      lead: 'Contact us for press releases, brand assets and upcoming event information.',
      primary: 'Contact our press team',
    },
  },

  contact: {
    hero: {
      title: 'Start your journey [[with Learn to Leap]]',
      lead: 'Call, message us on Zalo or send an email — our team will get back to you with advice and our full company profile as soon as possible.',
    },
    quick: {
      eyebrow: 'Get in touch',
      title: 'Choose whatever works best for you',
      call: { title: 'Call our hotline', desc: 'Speak directly with our advisory team.' },
      zalo: { title: 'Message on Zalo', desc: 'Send questions or photos of your current classroom.' },
      email: { title: 'Send an email', desc: 'Best for official letters, proposals or quotation requests.' },
      profile: { title: 'Company profile', desc: 'Get our company profile and implementation case studies.' },
      emailSubject: 'Consultation request — Learn to Leap',
      profileSubject: 'Company profile request — Learn to Leap',
    },
    info: {
      eyebrow: 'Contact details',
      address: 'Head office',
      hotline: 'Hotline',
      email: 'Email',
      website: 'Website',
      taxId: 'Business registration no.',
    },
    map: { title: 'Find us', open: 'Open in Google Maps' },
  },

  notFound: {
    title: 'We couldn’t find [[this page]]',
    lead: 'The link may have changed. Head back to the home page or explore Learn to Leap’s solutions.',
    home: 'Back to home',
  },
};

export default en;
