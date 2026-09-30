/* ============================================================
   i18n dictionaries — EN / RU / TJ
   ============================================================ */

export type Lang = "en" | "ru" | "tj";

export interface Dict {
  navAbout: string;
  navSkills: string;
  navProjects: string;
  navDesign: string;
  navFaq: string;
  navContact: string;
  eyebrow: string;
  heroText: string;
  viewProjects: string;
  viewDesign: string;
  contactMe: string;
  stat1Text: string;
  stat2Text: string;
  stat3Text: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  aboutP3: string;
  skillsTitle: string;
  skillsText: string;
  lvlConfident: string;
  lvlComfortable: string;
  lvlLearning: string;
  projectsTitle: string;
  projectsText: string;
  filterAll: string;
  experienceTitle: string;
  step1Title: string;
  step1Text: string;
  step2Title: string;
  step2Text: string;
  step3Title: string;
  step3Text: string;
  switchCmd: string;
  switchFrom: string;
  switchTo: string;
  designEyebrow: string;
  designTitle: string;
  designLead: string;
  dStat1: string;
  dStat2: string;
  dStat3Val: string;
  dStat3: string;
  designToolsTitle: string;
  designWorksTitle: string;
  designWorksLead: string;
  mentorBadge: string;
  mentorTitle: string;
  mentorText: string;
  faqTitle: string;
  faq1Q: string;
  faq1A: string;
  faq2Q: string;
  faq2A: string;
  faq3Q: string;
  faq3A: string;
  faq4Q: string;
  faq4A: string;
  ctaTitle: string;
  ctaText: string;
  formName: string;
  formEmail: string;
  formMessage: string;
  sendMessage: string;
  openGithub: string;
  footerLeft: string;
  footerRight: string;
  typed: string[];
  toastSuccess: string;
  errRequired: string;
  errEmail: string;
  errShort: string;
}

export const translations: Record<Lang, Dict> = {
  en: {
    navAbout: "about",
    navSkills: "skills",
    navProjects: "projects",
    navDesign: "design",
    navFaq: "faq",
    navContact: "contact",
    eyebrow: "fullstack developer · design mentor · open to work",
    heroText:
      "I'm <strong>Muslihiddin Melikzoda</strong> — a fullstack developer and design mentor from Dushanbe, Tajikistan. I build production web apps with Next.js, React, TypeScript &amp; C++ — and design the brand and UI behind them.",
    viewProjects: "view projects",
    viewDesign: "see design work",
    contactMe: "contact",
    stat1Text: "public repositories",
    stat2Text: "design tools mastered",
    stat3Text: "code & design combined",
    aboutTitle: "about me",
    aboutP1:
      "I'm a fullstack developer and a design mentor — I live in both worlds. I build complete products end to end, from database and backend to a polished frontend, and I design the brand identity and UI that wrap around them.",
    aboutP2:
      "My flagship is Tuyona.tj, a production wedding marketplace for Tajikistan built on Next.js, TypeScript, Prisma and PostgreSQL. On the engineering side I also work with C++ and modern React state management; on the design side I work daily in Photoshop, Illustrator, After Effects, Figma and Blender.",
    aboutP3:
      "Right now I work as a design mentor and frontend developer at Academy SoftClub in Dushanbe, teaching design while shipping real interfaces. I'm open to fullstack roles, design projects and collaborations.",
    skillsTitle: "skills & stack",
    skillsText:
      "The engineering side — the tools I use to build products, grouped by how confident I am with each.",
    lvlConfident: "confident",
    lvlComfortable: "comfortable",
    lvlLearning: "learning",
    projectsTitle: "featured projects",
    projectsText:
      "Selected engineering work from my GitHub. Filter by stack, click a card for details.",
    filterAll: "all",
    experienceTitle: "education & path",
    step1Title: "Design Mentor & Frontend — Academy SoftClub",
    step1Text:
      "Mentoring students in design and building real frontend interfaces at Academy SoftClub in Dushanbe — teaching and shipping at the same time.",
    step2Title: "Software Engineering — University",
    step2Text:
      "Software Engineering student at the International University of Tourism and Entrepreneurship of Tajikistan (Institute of Digital Technologies & AI), studying on a full scholarship.",
    step3Title: "Fullstack & design in production",
    step3Text:
      "Shipping production apps with Next.js, TypeScript, Prisma and C++ — like Tuyona.tj — while crafting brand identities in Photoshop, Illustrator and Figma.",
    switchCmd: "compile --mode=design",
    switchFrom: "// end of engineering",
    switchTo: "entering the design studio",
    designEyebrow: "the other half — visual & brand",
    designTitle: "I don't just build products.<br>I design how they feel.",
    designLead:
      "Trained as a designer before I wrote production code. Brand identity, UI/UX, print, motion and 3D — I speak the visual language fluently and use it to make products people remember.",
    dStat1: "years with design tools",
    dStat2: "creative tools in daily use",
    dStat3Val: "mentor",
    dStat3: "design @ Academy SoftClub",
    designToolsTitle: "tools I create with",
    designWorksTitle: "selected design work",
    designWorksLead:
      "Branding, print and visual identity. Want the full portfolio? Just message me.",
    mentorBadge: "now",
    mentorTitle: "Design Mentor at Academy SoftClub",
    mentorText:
      "I teach the next generation of designers — from fundamentals and composition to real client work in Photoshop, Illustrator and Figma — while also building the academy's frontend. Two disciplines, one craft: making things that work and look great.",
    faqTitle: "faq",
    faq1Q: "Do you do both development and design?",
    faq1A:
      "Yes — that's the whole point. I can take a project from brand identity and UI design all the way to a deployed Next.js/React app, so nothing gets lost between designer and developer.",
    faq2Q: "Are you available for work?",
    faq2A:
      "Yes — I'm open to fullstack & frontend roles, design projects, freelance and collaborations. Remote-friendly, and I reply fast on Telegram or WhatsApp.",
    faq3Q: "What can you design for me?",
    faq3A:
      "Logos and full brand identity, UI/UX in Figma, print (business cards, posters, brochures), motion graphics in After Effects and 3D visuals in Blender.",
    faq4Q: "Why is this site multilingual?",
    faq4A:
      "It serves English, Russian and Tajik audiences — switchable instantly with no reload — and shows the localization work I care about as a developer.",
    ctaTitle: "let's work together",
    ctaText:
      "Have a project, a design job or an opportunity? Reach out on any channel below — I reply fast.",
    formName: "name",
    formEmail: "email",
    formMessage: "message",
    sendMessage: "send message",
    openGithub: "open on GitHub",
    footerLeft: "© 2026 melikow.dev — code & design, built from scratch",
    footerRight: "Dushanbe, Tajikistan 🇹🇯",
    typed: ["build production web apps", "next.js · react · typescript · c++", "design + code, combined"],
    toastSuccess: "Message sent! I'll get back to you soon.",
    errRequired: "required",
    errEmail: "invalid email",
    errShort: "too short",
  },

  ru: {
    navAbout: "обо мне",
    navSkills: "навыки",
    navProjects: "проекты",
    navDesign: "дизайн",
    navFaq: "faq",
    navContact: "контакты",
    eyebrow: "fullstack-разработчик · дизайн-ментор · открыт к работе",
    heroText:
      "Я — <strong>Muslihiddin Melikzoda</strong>, fullstack-разработчик и дизайн-ментор из Душанбе, Таджикистан. Создаю продакшен веб-приложения на Next.js, React, TypeScript и C++ — и сам проектирую бренд и UI к ним.",
    viewProjects: "смотреть проекты",
    viewDesign: "смотреть дизайн",
    contactMe: "связаться",
    stat1Text: "публичных репозиториев",
    stat2Text: "дизайн-инструментов освоено",
    stat3Text: "код и дизайн вместе",
    aboutTitle: "обо мне",
    aboutP1:
      "Я fullstack-разработчик и дизайн-ментор — живу в двух мирах. Делаю продукты целиком: от базы данных и бэкенда до вылизанного фронтенда, и сам проектирую фирменный стиль и UI вокруг них.",
    aboutP2:
      "Мой флагман — Tuyona.tj, продакшен свадебный маркетплейс для Таджикистана на Next.js, TypeScript, Prisma и PostgreSQL. В инженерии также работаю с C++ и современным state-менеджментом React; в дизайне каждый день — Photoshop, Illustrator, After Effects, Figma и Blender.",
    aboutP3:
      "Сейчас работаю дизайн-ментором и фронтенд-разработчиком в Academy SoftClub в Душанбе — преподаю дизайн и параллельно делаю реальные интерфейсы. Открыт к fullstack-позициям, дизайн-проектам и сотрудничеству.",
    skillsTitle: "навыки и стек",
    skillsText:
      "Инженерная сторона — инструменты, которыми строю продукты, сгруппированы по уровню уверенности.",
    lvlConfident: "уверенно",
    lvlComfortable: "хорошо",
    lvlLearning: "учу",
    projectsTitle: "избранные проекты",
    projectsText:
      "Избранные инженерные работы с моего GitHub. Фильтруй по стеку, кликни по карточке для деталей.",
    filterAll: "все",
    experienceTitle: "образование и путь",
    step1Title: "Дизайн-ментор и фронтенд — Academy SoftClub",
    step1Text:
      "Менторю студентов по дизайну и делаю реальные фронтенд-интерфейсы в Academy SoftClub в Душанбе — преподаю и одновременно выпускаю продукт.",
    step2Title: "Программная инженерия — Университет",
    step2Text:
      "Студент по специальности «Программная инженерия» в Международном университете туризма и предпринимательства Таджикистана (Институт цифровых технологий и AI), учусь на бюджете.",
    step3Title: "Fullstack и дизайн в продакшене",
    step3Text:
      "Выпускаю продакшен-приложения на Next.js, TypeScript, Prisma и C++ — например Tuyona.tj — и создаю фирменный стиль в Photoshop, Illustrator и Figma.",
    switchCmd: "compile --mode=design",
    switchFrom: "// конец инженерии",
    switchTo: "вход в дизайн-студию",
    designEyebrow: "вторая половина — визуал и бренд",
    designTitle: "Я не просто делаю продукты.<br>Я проектирую, как они ощущаются.",
    designLead:
      "Я учился на дизайнера ещё до того, как начал писать продакшен-код. Фирменный стиль, UI/UX, печать, моушн и 3D — я свободно говорю на языке визуала и делаю продукты, которые запоминаются.",
    dStat1: "лет с дизайн-инструментами",
    dStat2: "креативных инструмента ежедневно",
    dStat3Val: "ментор",
    dStat3: "дизайн @ Academy SoftClub",
    designToolsTitle: "чем я создаю",
    designWorksTitle: "избранные дизайн-работы",
    designWorksLead:
      "Брендинг, печать и фирменный стиль. Нужно полное портфолио? Просто напиши мне.",
    mentorBadge: "сейчас",
    mentorTitle: "Дизайн-ментор в Academy SoftClub",
    mentorText:
      "Обучаю новое поколение дизайнеров — от основ и композиции до реальных клиентских задач в Photoshop, Illustrator и Figma — и параллельно делаю фронтенд академии. Две дисциплины, одно ремесло: делать вещи, которые работают и отлично выглядят.",
    faqTitle: "faq",
    faq1Q: "Ты занимаешься и разработкой, и дизайном?",
    faq1A:
      "Да — в этом вся суть. Могу провести проект от фирменного стиля и UI-дизайна до задеплоенного приложения на Next.js/React, чтобы ничего не терялось между дизайнером и разработчиком.",
    faq2Q: "Ты открыт к работе?",
    faq2A:
      "Да — открыт к fullstack- и frontend-позициям, дизайн-проектам, фрилансу и сотрудничеству. Удалёнка подходит, быстро отвечаю в Telegram или WhatsApp.",
    faq3Q: "Что ты можешь для меня оформить?",
    faq3A:
      "Логотипы и полный фирменный стиль, UI/UX в Figma, печать (визитки, постеры, брошюры), моушн-графику в After Effects и 3D-визуал в Blender.",
    faq4Q: "Зачем сайт многоязычный?",
    faq4A:
      "Он охватывает англо-, русско- и таджикоязычную аудиторию — переключение мгновенное, без перезагрузки — и показывает работу над локализацией, которая важна для меня как разработчика.",
    ctaTitle: "давай поработаем вместе",
    ctaText:
      "Есть проект, задача по дизайну или предложение? Напиши в любой канал ниже — отвечаю быстро.",
    formName: "имя",
    formEmail: "почта",
    formMessage: "сообщение",
    sendMessage: "отправить",
    openGithub: "открыть на GitHub",
    footerLeft: "© 2026 melikow.dev — код и дизайн, сделано с нуля",
    footerRight: "Душанбе, Таджикистан 🇹🇯",
    typed: ["создаю продакшен веб-приложения", "next.js · react · typescript · c++", "дизайн + код вместе"],
    toastSuccess: "Сообщение отправлено! Скоро отвечу.",
    errRequired: "обязательно",
    errEmail: "неверная почта",
    errShort: "слишком коротко",
  },

  tj: {
    navAbout: "дар бораам",
    navSkills: "маҳоратҳо",
    navProjects: "лоиҳаҳо",
    navDesign: "дизайн",
    navFaq: "faq",
    navContact: "тамос",
    eyebrow: "fullstack-барномасоз · ментори дизайн · омода ба кор",
    heroText:
      "Ман — <strong>Muslihiddin Melikzoda</strong>, fullstack-барномасоз ва ментори дизайн аз Душанбе, Тоҷикистон. Веб-аппликатсияҳои продакшен дар Next.js, React, TypeScript ва C++ месозам — ва бренду UI-и онҳоро худам тарроҳӣ мекунам.",
    viewProjects: "дидани лоиҳаҳо",
    viewDesign: "дидани дизайн",
    contactMe: "тамос",
    stat1Text: "репозиторийҳои оммавӣ",
    stat2Text: "асбоби дизайн азхудшуда",
    stat3Text: "код ва дизайн якҷоя",
    aboutTitle: "дар бораам",
    aboutP1:
      "Ман fullstack-барномасоз ва ментори дизайн ҳастам — дар ду ҷаҳон зиндагӣ мекунам. Маҳсулотро пурра месозам: аз базаи додаҳо ва бэкенд то фронтенди тозаву озода, ва бренду UI-и онҳоро худам тарроҳӣ мекунам.",
    aboutP2:
      "Лоиҳаи асосиам Tuyona.tj аст — маркетплейси тӯйи продакшен барои Тоҷикистон дар Next.js, TypeScript, Prisma ва PostgreSQL. Дар муҳандисӣ инчунин бо C++ ва state-менеҷменти муосири React кор мекунам; дар дизайн ҳар рӯз — Photoshop, Illustrator, After Effects, Figma ва Blender.",
    aboutP3:
      "Ҳоло дар Academy SoftClub-и Душанбе ҳамчун ментори дизайн ва барномасози фронтенд кор мекунам — дизайн меомӯзонам ва дар айни замон интерфейсҳои воқеӣ месозам. Барои fullstack, лоиҳаҳои дизайн ва ҳамкорӣ омода.",
    skillsTitle: "маҳоратҳо ва stack",
    skillsText:
      "Тарафи муҳандисӣ — асбобҳое, ки бо онҳо маҳсулот месозам, аз рӯи дараҷаи боварӣ гурӯҳбандӣ шудаанд.",
    lvlConfident: "боварӣ",
    lvlComfortable: "хуб",
    lvlLearning: "меомӯзам",
    projectsTitle: "лоиҳаҳои интихобшуда",
    projectsText:
      "Корҳои муҳандисии интихобшуда аз GitHub-и ман. Аз рӯи stack филтр кунед, барои тафсилот ба корт зер кунед.",
    filterAll: "ҳама",
    experienceTitle: "таҳсил ва роҳ",
    step1Title: "Ментори дизайн ва фронтенд — Academy SoftClub",
    step1Text:
      "Донишҷӯёнро дар дизайн ментор мекунам ва дар Academy SoftClub-и Душанбе интерфейсҳои воқеии фронтенд месозам — ҳам меомӯзонам, ҳам маҳсулот мебарорам.",
    step2Title: "Муҳандисии барнома — Донишгоҳ",
    step2Text:
      "Донишҷӯи ихтисоси «Муҳандисии барнома» дар Донишгоҳи байналмилалии сайёҳӣ ва соҳибкории Тоҷикистон (Институти технологияҳои рақамӣ ва AI), дар буҷет таҳсил мекунам.",
    step3Title: "Fullstack ва дизайн дар продакшен",
    step3Text:
      "Аппликатсияҳои продакшен дар Next.js, TypeScript, Prisma ва C++ мебарорам — мисли Tuyona.tj — ва бренд дар Photoshop, Illustrator ва Figma месозам.",
    switchCmd: "compile --mode=design",
    switchFrom: "// охири муҳандисӣ",
    switchTo: "вуруд ба студияи дизайн",
    designEyebrow: "нимаи дигар — визуал ва бренд",
    designTitle: "Ман танҳо маҳсулот намесозам.<br>Ман тарроҳӣ мекунам, ки чӣ гуна ҳис карда шаванд.",
    designLead:
      "Пеш аз он ки коди продакшен нависам, ба дизайнерӣ таҳсил кардам. Бренд, UI/UX, чоп, моушн ва 3D — ман забони визуалро озод медонам ва бо он маҳсулоти дар ёдмонда месозам.",
    dStat1: "сол бо асбобҳои дизайн",
    dStat2: "асбоби эҷодӣ ҳаррӯза",
    dStat3Val: "ментор",
    dStat3: "дизайн @ Academy SoftClub",
    designToolsTitle: "бо чӣ эҷод мекунам",
    designWorksTitle: "корҳои интихобшудаи дизайн",
    designWorksLead:
      "Брендинг, чоп ва фирменный стиль. Портфолиои пурра лозим аст? Танҳо ба ман нависед.",
    mentorBadge: "ҳоло",
    mentorTitle: "Ментори дизайн дар Academy SoftClub",
    mentorText:
      "Насли навбатии дизайнеронро меомӯзонам — аз асосҳо ва композитсия то корҳои воқеии муштарӣ дар Photoshop, Illustrator ва Figma — ва дар айни замон фронтенди академияро месозам. Ду фан, як ҳунар: сохтани чизҳое, ки кор мекунанд ва хуб менамоянд.",
    faqTitle: "faq",
    faq1Q: "Ту ҳам барномасозӣ ва ҳам дизайн мекунӣ?",
    faq1A:
      "Бале — маҳз ҳамин муҳим аст. Метавонам лоиҳаро аз бренд ва UI-дизайн то аппликатсияи задеплойшудаи Next.js/React барам, то дар байни дизайнер ва барномасоз ҳеҷ чиз гум нашавад.",
    faq2Q: "Оё барои кор омода ҳастӣ?",
    faq2A:
      "Бале — барои fullstack ва frontend, лоиҳаҳои дизайн, freelance ва ҳамкорӣ омода ҳастам. Remote мувофиқ, дар Telegram ё WhatsApp зуд ҷавоб медиҳам.",
    faq3Q: "Барои ман чӣ тарроҳӣ карда метавонӣ?",
    faq3A:
      "Логотип ва бренди пурра, UI/UX дар Figma, чоп (визитка, постер, брошюра), моушн-графика дар After Effects ва визуали 3D дар Blender.",
    faq4Q: "Чаро сайт бисёрзабона аст?",
    faq4A:
      "Он аудиторияи англисӣ, русӣ ва тоҷикиро фаро мегирад — гузариш фаврӣ, бе аз нав боргирӣ — ва кори localization-ро нишон медиҳад, ки барои ман ҳамчун барномасоз муҳим аст.",
    ctaTitle: "биё якҷоя кор кунем",
    ctaText:
      "Лоиҳа, кори дизайн ё пешниҳод доред? Ба ҳар канали зерин нависед — зуд ҷавоб медиҳам.",
    formName: "ном",
    formEmail: "почта",
    formMessage: "паём",
    sendMessage: "фиристодан",
    openGithub: "кушодан дар GitHub",
    footerLeft: "© 2026 melikow.dev — код ва дизайн, аз сифр сохта шуд",
    footerRight: "Душанбе, Тоҷикистон 🇹🇯",
    typed: ["веб-аппликатсияҳои продакшен месозам", "next.js · react · typescript · c++", "дизайн + код якҷоя"],
    toastSuccess: "Паём фиристода шуд! Ба зудӣ ҷавоб медиҳам.",
    errRequired: "ҳатмӣ",
    errEmail: "почтаи нодуруст",
    errShort: "хеле кӯтоҳ",
  },
};
