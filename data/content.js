/* =======================================================
   ALDIRWAZA — CONTENT DATA
   Edit this file to update all website content.
   Push to GitHub — the live site updates automatically.
   See comments on each field for guidance.
======================================================= */

// ── CONTENT DATA ──────────────────────────────────────
/**
 * ═══════════════════════════════════════════════════════
 *  ALDIRWAZA — CONTENT DATA FILE
 *  Edit this file to update ALL website content.
 *
 *  BILINGUAL FIELDS:
 *  Every item has Arabic fields (title, description, etc.)
 *  and optional English fields (titleEn, descEn, etc.).
 *  If no English field is provided, the Arabic text is shown.
 *
 *  ARTICLE BODY (آخر أعمالنا):
 *  Add an "article" field (Arabic) and "articleEn" field (English)
 *  with the full article text. Use 
 to separate paragraphs.
 *  If omitted, the description is shown instead.
 *
 *  HOW TO ADD AN IMAGE:
 *  1. Copy your image file into the /images/ folder
 *  2. Set  image: "images/your-file-name.jpg"
 *
 *  BOOKING DATA → formspree.io dashboard
 * ═══════════════════════════════════════════════════════
 */

// ─────────────────────────────────────────────────────
//  EXPERIENCES & TOURS
//  status: "active" | "coming-soon"
//  type:   "tour"   | "experience"
// ─────────────────────────────────────────────────────
const EXPERIENCES = [
  {
    id: "qatif-fort-tour",
    type: "tour",
    status: "active",
    title:       "جولة قلعة القطيف",
    titleEn:     "Qatif Fort Tour",
    location:    "القطيف",
    locationEn:  "Qatif",
    description: "جولة مرشدة في قلعة القطيف التاريخية، شاهدة على حضارات متعاقبة، مع مرشد سياحي متخصص يروي قصص المكان.",
    descEn:      "A guided tour of the historic Qatif Fort — a witness to successive civilisations — led by a specialist guide who brings the place's stories to life.",
    image: "",
    tag:    "جولة مرشدة",
    tagEn:  "Guided Tour",
    price: "",
    duration: "",
  },
  {
    id: "tarout-fort-tour",
    type: "tour",
    status: "active",
    title:       "جولة قلعة تاروت",
    titleEn:     "Tarout Fort Tour",
    location:    "جزيرة تاروت",
    locationEn:  "Tarout Island",
    description: "استكشاف قلعة تاروت الأثرية الشامخة، إحدى أقدم القلاع في شبه الجزيرة العربية.",
    descEn:      "Explore the ancient Tarout Fort — one of the oldest fortresses on the Arabian Peninsula.",
    image: "",
    tag:    "جولة مرشدة",
    tagEn:  "Guided Tour",
    price: "",
    duration: "",
  },
  {
    id: "pottery",
    type: "experience",
    status: "active",
    title:       "صنع الفخار",
    titleEn:     "Pottery Making",
    location:    "مصنع الغراش للفخار",
    locationEn:  "Al-Gharash Pottery Workshop",
    description: "تجربة تعليمية ممتعة في عالم الفخار التقليدي القطيفي على يد حرفيين محترفين.",
    descEn:      "A hands-on experience in the world of traditional Qatifi pottery, guided by expert craftsmen.",
    image: "",
    tag:    "تجربة يدوية",
    tagEn:  "Hands-On",
    price: "",
    duration: "",
  },
  {
    id: "palm-weaving",
    type: "experience",
    status: "active",
    title:       "صناعة السعف",
    titleEn:     "Palm Leaf Weaving",
    location:    "شاي حصير",
    locationEn:  "Shay Haseer",
    description: "اكتشف فن صناعة السعف التقليدي ونسج الحصائر والسلال بالطريقة القطيفية الأصيلة.",
    descEn:      "Discover the art of traditional palm leaf weaving — crafting mats and baskets the authentic Qatifi way.",
    image: "",
    tag:    "تجربة يدوية",
    tagEn:  "Hands-On",
    price: "",
    duration: "",
  },
  {
    id: "traditional-cooking",
    type: "experience",
    status: "coming-soon",
    title:       "طبخ الأكلات التقليدية",
    titleEn:     "Traditional Cooking",
    location:    "القطيف",
    locationEn:  "Qatif",
    description: "تعلّم أسرار المطبخ القطيفي التقليدي وطهي الأكلات الأصيلة المتوارثة. انتظرونا!",
    descEn:      "Learn the secrets of traditional Qatifi cuisine and cook heritage recipes passed down through generations. Coming soon!",
    image: "",
    tag:    "قريباً",
    tagEn:  "Coming Soon",
    price: "",
    duration: "",
  },
  {
    id: "fruit-picking",
    type: "experience",
    status: "coming-soon",
    title:       "قطف الثمار",
    titleEn:     "Fruit Picking",
    location:    "القطيف",
    locationEn:  "Qatif",
    description: "تجربة قطف الثمار في مزارع القطيف الخضراء واكتشاف طبيعة المنطقة الغنية. انتظرونا!",
    descEn:      "Pick fresh fruits in Qatif's lush farms and discover the region's rich natural landscape. Coming soon!",
    image: "",
    tag:    "قريباً",
    tagEn:  "Coming Soon",
    price: "",
    duration: "",
  },
];

// ─────────────────────────────────────────────────────
//  LANDMARKS
// ─────────────────────────────────────────────────────
const LANDMARKS = [
  {
    id: "qatif-fort",
    title:       "قلعة القطيف",
    titleEn:     "Qatif Fort",
    location:    "القطيف، المنطقة الشرقية",
    locationEn:  "Qatif, Eastern Province",
    description: "قلعة القطيف التاريخية إحدى أبرز المعالم الأثرية في المنطقة الشرقية، شيدت على مر العصور وشهدت حضارات متعاقبة. تقع في قلب مدينة القطيف وتطل على الخليج العربي.",
    descEn:      "Qatif Fort is one of the most prominent archaeological sites in the Eastern Province, built across successive eras and witness to many civilisations. It sits in the heart of Qatif overlooking the Arabian Gulf.",
    image: "",
  },
  {
    id: "tarout-fort",
    title:       "قلعة تاروت",
    titleEn:     "Tarout Fort",
    location:    "جزيرة تاروت، القطيف",
    locationEn:  "Tarout Island, Qatif",
    description: "تُعدّ قلعة تاروت من أقدم القلاع في شبه الجزيرة العربية، تقع على جزيرة تاروت التي تعتبر من أقدم المستوطنات البشرية في المنطقة.",
    descEn:      "Tarout Fort is among the oldest fortresses on the Arabian Peninsula, located on Tarout Island — one of the oldest human settlements in the region.",
    image: "",
  },
  {
    id: "al-barahah",
    title:       "البراحة",
    titleEn:     "Al-Barahah Square",
    location:    "القطيف، المنطقة الشرقية",
    locationEn:  "Qatif, Eastern Province",
    description: "البراحة قلب القطيف النابض، ساحة المجتمع التقليدية التي تشهد أجمل المناسبات والمهرجانات الشعبية كالبخنق والعيد وسائر المناسبات الاجتماعية والثقافية.",
    descEn:      "Al-Barahah is Qatif's beating heart — the traditional community square that hosts the city's most beloved festivals and cultural occasions throughout the year.",
    image: "",
  },
  {
    id: "white-sands",
    title:       "شاطئ الرملة البيضاء — تاروت",
    titleEn:     "White Sands Beach — Tarout",
    location:    "جزيرة تاروت، القطيف",
    locationEn:  "Tarout Island, Qatif",
    description: "شاطئ الرملة البيضاء من أجمل الشواطئ في المنطقة الشرقية، خاصة عند شروق الشمس في رمضان حيث يكسو النور الذهبي رمال الشاطئ وأمواج الخليج الهادئة.",
    descEn:      "White Sands Beach is one of the most beautiful shores in the Eastern Province — especially at sunrise during Ramadan, when golden light washes over the sands and the calm Gulf waters.",
    image: "",
  },
  {
    id: "gharash-pottery",
    title:       "مصنع الغراش للفخار",
    titleEn:     "Al-Gharash Pottery Workshop",
    location:    "القطيف، المنطقة الشرقية",
    locationEn:  "Qatif, Eastern Province",
    description: "مصنع الغراش للفخار تراث حيّ يمثّل واحداً من أعرق الصناعات اليدوية في القطيف. يحافظ على تقاليد صناعة الفخار الأصيلة ويقدمها للأجيال الجديدة.",
    descEn:      "Al-Gharash Pottery Workshop is a living heritage site representing one of Qatif's oldest crafts. It preserves authentic pottery-making traditions and passes them on to new generations.",
    image: "",
  },
];

// ─────────────────────────────────────────────────────
//  TEAM — EXECUTIVES
//  Cards flip on click: front = photo + name + role
//                       back  = bio
// ─────────────────────────────────────────────────────
const TEAM_EXECUTIVES = [
  {
    name:    "جمانة الحواج",
    nameEn:  "Jumana Al-Hawaj",
    role:    "مسؤولة التجارب",
    roleEn:  "Head of Experiences",
    bio:     "من القطيف. تخرجت بتخصص الهندسة الكيميائية من جامعة پردو في أمريكا، وتعمل حالياً كمهندسة نفط وغاز في أرامكو.",
    bioEn:   "From Qatif. She holds a Chemical Engineering degree from Purdue University, USA, and currently works as an Oil & Gas Engineer at Aramco.",
    image: "https://i0.wp.com/aldirwaza.org/wp-content/uploads/2025/10/%D8%AC%D9%85%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%AD%D9%88%D8%A7%D8%AC-1.jpg?resize=1024%2C1024&ssl=1",
  },
  {
    name:    "دانة العلقم",
    nameEn:  "Dana Al-Alqam",
    role:    "رئيسة المبادرة — مسؤولة جودة الحياة",
    roleEn:  "Initiative Lead — Quality of Life",
    bio:     "تدرس إدارة الضيافة الدولية في جامعة EHL في سويسرا. مؤمنة بأن فكرة بسيطة يمكن أن تغير مدينة كاملة إذا كانت نابعة من أهلها.",
    bioEn:   "Studying International Hospitality Management at EHL University in Switzerland. She believes a simple idea can transform an entire city when it comes from its own people.",
    image: "https://i0.wp.com/aldirwaza.org/wp-content/uploads/2025/10/0O3A0583-2-edited.jpg?resize=3167%2C3167&ssl=1",
  },
  {
    name:    "زينة الفخر",
    nameEn:  "Zeina Al-Fakhr",
    role:    "مسؤولة التسويق",
    roleEn:  "Head of Marketing",
    bio:     "تخرجت من جامعة تكساس في أوستن بتخصص هندسة البترول وتعمل في أرامكو. هاوية للتصوير وتوثيق جمال القطيف.",
    bioEn:   "Petroleum Engineering graduate from the University of Texas at Austin, working at Aramco. A passionate photographer dedicated to documenting Qatif's beauty.",
    image: "https://i0.wp.com/aldirwaza.org/wp-content/uploads/2025/10/%D8%B2%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D9%81%D8%AE%D8%B1.jpg?resize=1024%2C1024&ssl=1",
  },
  {
    name:    "فاطمة الحواج",
    nameEn:  "Fatima Al-Hawaj",
    role:    "مسؤولة الشؤون التقنية والمالية",
    roleEn:  "Head of Technical & Financial Affairs",
    bio:     "خريجة علوم وهندسة المواد من جامعة إلنوي، وتكمل حالياً الماجستير في جامعة الملك عبدالله للعلوم والتقنية.",
    bioEn:   "Materials Science & Engineering graduate from the University of Illinois, currently pursuing her Master's at KAUST.",
    image: "https://i0.wp.com/aldirwaza.org/wp-content/uploads/2025/10/%D9%81%D8%A7%D8%B7%D9%85%D8%A9-%D8%A7%D9%84%D8%AD%D9%88%D8%A7%D8%AC.jpg?resize=1024%2C1024&ssl=1",
  },
];

// ─────────────────────────────────────────────────────
//  TEAM — MEMBERS
// ─────────────────────────────────────────────────────
const TEAM_MEMBERS = [
  {
    name:    "فاطمة الفخر",
    nameEn:  "Fatima Al-Fakhr",
    role:    "مسؤولة التصميم الجرافيكي",
    roleEn:  "Graphic Design Lead",
    bio:     "طالبة تصميم جرافيكي في جامعة الأميرة نورة. تعشق الفن بكل أنواعه.",
    bioEn:   "Graphic Design student at Princess Nourah University. She has a deep passion for art in all its forms.",
    image: "https://i0.wp.com/aldirwaza.org/wp-content/uploads/2025/10/fatoom-1.jpg?resize=1024%2C1024&ssl=1",
  },
  {
    name:    "آلاء الخميس",
    nameEn:  "Alaa Al-Khamis",
    role:    "فريق التصوير والتسويق",
    roleEn:  "Photography & Marketing",
    bio:     "خريجة جامعة كاليفورنيا في بيركلي بالهندسة الكيميائية. تعمل في مجال الحفر وصيانة الآبار في أرامكو.",
    bioEn:   "Chemical Engineering graduate from UC Berkeley, working in Drilling & Well Services at Aramco.",
    image: "https://i0.wp.com/aldirwaza.org/wp-content/uploads/2026/01/%D8%A2%D9%84%D8%A7%D8%A1-1.jpeg?resize=889%2C889&ssl=1",
  },
  {
    name:    "ناصر السنان",
    nameEn:  "Nasser Al-Sinan",
    role:    "مسؤول المقابلات",
    roleEn:  "Interviews Lead",
    bio:     "خريج جامعة بردو بالهندسة الميكانيكية. يعمل في أرامكو ونشر رواية 'مرحباً بكم إلى الحياة' في ٢٠٢٥.",
    bioEn:   "Mechanical Engineering graduate from Purdue University, working at Aramco. Published his novel 'Welcome to Life' in 2025.",
    image: "https://i0.wp.com/aldirwaza.org/wp-content/uploads/2025/10/nasser.jpg?resize=629%2C669&ssl=1",
  },
  {
    name:    "فاطمة العوامي",
    nameEn:  "Fatima Al-Awami",
    role:    "طالبة عمارة",
    roleEn:  "Architecture Student",
    bio:     "طالبة في السنة الرابعة بجامعة الأمير محمد بن فهد. تحب تراث القطيف وعاداتها الحية.",
    bioEn:   "Fourth-year Architecture student at Prince Mohammad Bin Fahd University. She loves Qatif's heritage and living traditions.",
    image: "",
  },
  {
    name:    "يمنى أبو ديب",
    nameEn:  "Yomna Abu Deeb",
    role:    "مسؤولة متابعة المشاريع",
    roleEn:  "Projects Coordinator",
    bio:     "طالبة في السنة الرابعة بجامعة الإمام عبد الرحمن بن فيصل، تدرس علوم الحاسب.",
    bioEn:   "Fourth-year Computer Science student at Imam Abdulrahman Bin Faisal University.",
    image: "",
  },
];

// ─────────────────────────────────────────────────────
//  RECENT WORKS (آخر أعمالنا)
//  Each work card is clickable and opens a full article.
//
//  Fields:
//    title / titleEn      — card title
//    date                 — displayed date
//    description / descEn — short summary shown on the card
//    article / articleEn  — full article body. Use \n to separate paragraphs.
//                           If omitted, description is shown instead.
//    image                — card + modal hero image
//
//  Add new entries at the TOP to show them first.
// ─────────────────────────────────────────────────────
const WORKS = [
  {
    title:       "جولات قلعة القطيف",
    titleEn:     "Qatif Fort Tours",
    date:        "٢٠٢٥",
    description: "انطلاق جولاتنا المرشدة في قلعة القطيف التاريخية، واستقبال أول دفعة من الزوار المتحمسين.",
    descEn:      "The launch of our guided tours at the historic Qatif Fort, welcoming the first group of enthusiastic visitors.",
    article:     "في عام ٢٠٢٥ انطلقت مبادرة الدروازة بجولاتها المرشدة الأولى في قلعة القطيف التاريخية.\n\nاستقبلنا الزوار في رحلة خلال أروقة القلعة العريقة التي شهدت حضارات متعاقبة على مدى آلاف السنين. رافقهم مرشد سياحي متخصص يروي قصص المكان وحكايات أهله.\n\nكان الحضور متنوعاً بين أبناء المنطقة الراغبين في اكتشاف تراثهم من جديد، وزوار من مدن مختلفة جاؤوا فضولاً ومحبةً للتاريخ.",
    articleEn:   "In 2025, Aldirwaza launched its first guided tours at the historic Qatif Fort.\n\nWe welcomed visitors on a journey through the corridors of this ancient fortress — a site that has witnessed successive civilisations over thousands of years. A specialist guide accompanied each group, narrating the place's stories and the tales of its people.\n\nAttendees were a rich mix: residents of the region rediscovering their own heritage, and visitors from other cities drawn by curiosity and a love of history.",
    image: "https://aldirwaza.org/wp-content/uploads/2025/04/home-page-1-1024x640.jpg",
  },
  {
    title:       "تجربة صناعة الفخار",
    titleEn:     "Pottery Making Experience",
    date:        "٢٠٢٥",
    description: "إطلاق تجربة صنع الفخار في مصنع الغراش، وتمكين الزوار من التعرف على هذا الفن التقليدي.",
    descEn:      "Launching the pottery experience at Al-Gharash workshop, connecting visitors with this traditional craft.",
    article:     "أطلقت الدروازة تجربة صنع الفخار في مصنع الغراش العريق، أحد أعرق الصناعات اليدوية في القطيف.\n\nجلس الزوار على طاولات الطين وتعلّموا من حرفيين محترفين كيف تُشكَّل الأواني والقطع الفخارية بأيدٍ بشرية. كانت اللحظات الأولى مليئة بالضحك والاكتشاف.\n\nخرج كلّ زائر بقطعته الفخارية الخاصة التي صنعها بيده — هدية من القطيف إلى بيته.",
    articleEn:   "Aldirwaza launched its pottery-making experience at Al-Gharash, one of Qatif's oldest craft workshops.\n\nVisitors sat at clay tables and learned from expert craftsmen how to shape vessels and pottery pieces by hand. The first moments were full of laughter and discovery.\n\nEvery visitor left with their own handmade piece — a gift from Qatif to take home.",
    image: "https://aldirwaza.org/wp-content/uploads/2025/04/home-page-2-575x1024.jpg",
  },
  {
    title:       "صناعة السعف مع شاي حصير",
    titleEn:     "Palm Weaving with Shay Haseer",
    date:        "٢٠٢٥",
    description: "تعاون مميز مع شاي حصير لتقديم تجربة صناعة السعف التقليدية لزوار القطيف.",
    descEn:      "A special collaboration with Shay Haseer to bring the traditional palm weaving experience to Qatif's visitors.",
    article:     "تعاونت مبادرة الدروازة مع شاي حصير في تقديم تجربة صناعة السعف التقليدية.\n\nتعلّم الزوار نسج الحصائر والسلال من سعف النخل بالطريقة القطيفية الأصيلة، على يد أيدٍ ماهرة حافظت على هذا الموروث عبر الأجيال.\n\nكانت الجلسة دافئة ومضيئة، تعمّقت فيها الروابط بين الماضي والحاضر وبين أهل القطيف وضيوفها.",
    articleEn:   "Aldirwaza partnered with Shay Haseer to deliver a traditional palm leaf weaving experience.\n\nVisitors learned to weave mats and baskets from date palm fronds in the authentic Qatifi way, guided by skilled hands that have preserved this heritage across generations.\n\nThe session was warm and illuminating — deepening the bonds between past and present, and between Qatif's people and its guests.",
    image: "https://aldirwaza.org/wp-content/uploads/2025/04/home-page-4-576x1024.jpg",
  },
  {
    title:       "جولات قلعة تاروت",
    titleEn:     "Tarout Fort Tours",
    date:        "٢٠٢٥",
    description: "توسيع نطاق جولاتنا لتشمل قلعة تاروت الأثرية العريقة وتعريف الزوار بتاريخ جزيرة تاروت.",
    descEn:      "Expanding our tours to include ancient Tarout Fort and introducing visitors to the history of Tarout Island.",
    article:     "توسّعت مبادرة الدروازة لتشمل جزيرة تاروت، إحدى أعرق المستوطنات البشرية في شبه الجزيرة العربية.\n\nانطلقت الجولات نحو قلعة تاروت الشامخة، حيث رافق المرشدون الزوار في جولة عميقة بين أسوار القلعة وتاريخها الممتد عبر آلاف السنين.\n\nاكتشف الزوار أن جزيرة تاروت ليست مجرد موقع أثري، بل مجتمع حيّ يحمل في شوارعه وبيوته العتيقة ذاكرة لا تُنسى.",
    articleEn:   "Aldirwaza expanded its reach to Tarout Island — one of the oldest human settlements on the Arabian Peninsula.\n\nTours set out toward the towering Tarout Fort, where guides led visitors through a deep exploration of its walls and its history spanning thousands of years.\n\nVisitors discovered that Tarout Island is not merely an archaeological site, but a living community whose ancient streets and homes carry an unforgettable memory.",
    image: "https://aldirwaza.org/wp-content/uploads/2025/04/home-page-6-1024x578.jpg",
  },
];

// ─────────────────────────────────────────────────────
//  HERO GALLERY IMAGES (home page strip)
// ─────────────────────────────────────────────────────
const HERO_GALLERY = [
  "https://aldirwaza.org/wp-content/uploads/2025/04/home-page-2-575x1024.jpg",
  "https://aldirwaza.org/wp-content/uploads/2025/04/home-page-4-576x1024.jpg",
  "https://aldirwaza.org/wp-content/uploads/2025/04/home-page-1-1024x640.jpg",
  "https://aldirwaza.org/wp-content/uploads/2025/04/home-page-6-1024x578.jpg",
];
