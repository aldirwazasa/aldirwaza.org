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
    image: "images/qatif_tour.jpg",
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
    image: "images/tarout_tour.JPG",
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
    image: "images/pottery.JPG",
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
    image: "images/palm_weaving.jpg",
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
    image: "images/tours_and_experiences/cooking.JPG",
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
    image: "images/logo.png",
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
    image: "images/landmarks/qalaat_qatif.jpg",
  },
  {
    id: "tarout-fort",
    title:       "قلعة تاروت",
    titleEn:     "Tarout Fort",
    location:    "جزيرة تاروت، القطيف",
    locationEn:  "Tarout Island, Qatif",
    description: "تُعدّ قلعة تاروت من أقدم القلاع في شبه الجزيرة العربية، تقع على جزيرة تاروت التي تعتبر من أقدم المستوطنات البشرية في المنطقة.",
    descEn:      "Tarout Fort is among the oldest fortresses on the Arabian Peninsula, located on Tarout Island — one of the oldest human settlements in the region.",
    image: "images/landmarks/qalaat_tarout.JPG",
  },
];

// ─────────────────────────────────────────────────────
//  TEAM — EXECUTIVES
//  Cards flip on click: front = photo + name + role
//                       back  = bio
// ─────────────────────────────────────────────────────
const TEAM_EXECUTIVES = [
  {
    name:    "دانة العلقم",
    nameEn:  "Dana Al-Alqam",
    role:    "رئيسة المبادرة ومسؤولة جودة الحياة",
    roleEn:  "President and Quality of Life Lead",
    bio:     "ئيسة مبادرة الدروازة و مسؤولة جودة الحياة فيها. أدرس إدارة الضيافة الدولية في جامعة EHL في سويسرا. أؤمن بأن فكرة بسيطة جدًا ممكن تغير مدينة كاملة إذا كانت نابعة من أهلها و مصممة عشانهم. لهذا أهتم بالتفاصيل اللي تخلي حياة الناس أفضل، زي ظل شجرة، ممشى نظيف، و مساحة عامة تعود بالنفع على المجتمع. بدأت الدروازة بدافع شخصي و إيمان عميق إن القطيف تملك تراث غني و هوية تستحق إنها تُصان و تُقدَّم بأسلوب حديث. الدروازة بالنسبة ليّ هي بوابة نربط فيها تراثنا بمستقبلنا، وننطلق من هويتنا للعالم.",
    bioEn:   "I am studying International Hospitality Management at EHL Hospitality Business School in Switzerland. I believe that even a very simple idea can transform an entire city when it comes from its people and is designed for them. This belief drives my attention to the details that improve people’s daily lives; whether it is the shade of a tree, a clean walkway, or a public space that benefits the community. Aldirwaza began from a personal motivation and a deep conviction that Qatif possesses a rich heritage and identity that deserve to be preserved and presented in a modern way. To me, Aldirwaza is a gateway that connects our heritage with our future, allowing us to share our identity with the world.",
    image: "images/team/dana_alalqam.jpg",
  },
  {
    name:    "جمانة الحواج",
    nameEn:  "Jumana Alhawaj",
    role:    "مسؤولة التجارب",
    roleEn:  "Experiences Lead",
    bio:     "مسؤولة التجارب في الدروازة؛ من القطيف و أكثر شي احبه فيها هو الإحساس المجتمعي اللي تقدمه خصوصًا بالمناسبات الاجتماعية والدينية زي الناصفة والعيد والمواليد عامةً:) ولأن أولاد البلد للبلد، واثقة جدً ان القطيف ماراح تطلع إلا بأهلها وإن شاء الله الدروازة تكون وحدة من واجد مبادرات غيرها! بعيدًا عن الدروازة، تخرجت بتخصص الهندسة الكيميائية من جامعة پردو في أمريكا، وحاليًا أشتغل كمهندسة نفط وغاز في أرامكو.",
    bioEn:   "I am from Qatif, and what I love most about it is the strong sense of community, especially during social and religious occasions such as Al-Nasfa, Eid celebrations, and community gatherings for newborns. Since a community’s future lies in the hands of its people, I firmly believe that Qatif’s progress will come through its residents, and I hope Al-Darwaza will be one of many initiatives that contribute to that future. Beyond Al-Darwaza, I graduated from Purdue University with a degree in Chemical Engineering and currently work as an Oil and Gas Engineer at Aramco.",
    image: "images/team/jumanah_alhawaj.JPG",
  },
  {
    name:    "زينة الفخر",
    nameEn:  "Zeina Al-Fakhr",
    role:    "مسؤولة التسويق",
    roleEn:  "Head of Marketing",
    bio:     "تخرجت من جامعة تكساس في أوستن بتخصص هندسة البترول وتعمل في أرامكو. هاوية للتصوير وتوثيق جمال القطيف.",
    bioEn:   "Petroleum Engineering graduate from the University of Texas at Austin, working at Aramco. A passionate photographer dedicated to documenting Qatif's beauty.",
    image: "images/team/zaina_alfakher.jpg",
  },
  {
    name:    "فاطمة الحواج",
    nameEn:  "Fatima Alاawaj",
    role:    "مسؤولة الشؤون التقنية والمالية",
    roleEn:  "Head of Technical & Financial Affairs",
    bio:     "طالبة ماجستير هندسة مواد في جامعة الملك عبدالله. بدأت فاطمة مبادرة الدروازة لإيمانها بأن القطيف تستحق أكثر، وتشوف المبادرة كبداية لترسيخ القطيف كمدينة سياحية والحفاظ على تاريخها وثقافتها للأجيال الجاية.",
    bioEn:   "Materials Science & Engineering graduate from the University of Illinois, currently pursuing her Master's at KAUST.",
    image: "images/team/fatimah_alhawaj.JPG",
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
    image: "images/team/fatimah_alfakher.jpeg",
  },
  {
    name:    "آلاء الخميس",
    nameEn:  "Alaa Al-Khamis",
    role:    "فريق التصوير والتسويق",
    roleEn:  "Photography & Marketing",
    bio:     "خريجة جامعة كاليفورنيا في بيركلي بالهندسة الكيميائية. تعمل في مجال الحفر وصيانة الآبار في أرامكو.",
    bioEn:   "Chemical Engineering graduate from UC Berkeley, working in Drilling & Well Services at Aramco.",
    image: "images/team/alaa_alkhamis.jpeg",
  },
  {
    name:    "ناصر السنان",
    nameEn:  "Nasser Al-Sinan",
    role:    "مسؤول المقابلات",
    roleEn:  "Interviews Lead",
    bio:     "خريج جامعة بردو بالهندسة الميكانيكية. يعمل في أرامكو ونشر رواية 'مرحباً بكم إلى الحياة' في ٢٠٢٥.",
    bioEn:   "Mechanical Engineering graduate from Purdue University, working at Aramco. Published his novel 'Welcome to Life' in 2025.",
    image: "images/team/nasser_alsinan.jpeg",
  },
  {
    name:    "فاطمة العوامي",
    nameEn:  "Fatima Al-Awami",
    role:    "طالبة عمارة",
    roleEn:  "Architecture Student",
    bio:     "طالبة في السنة الرابعة بجامعة الأمير محمد بن فهد. تحب تراث القطيف وعاداتها الحية.",
    bioEn:   "Fourth-year Architecture student at Prince Mohammad Bin Fahd University. She loves Qatif's heritage and living traditions.",
    image: "images/logo.png",
  },
  {
    name:    "يمنى أبو ديب",
    nameEn:  "Yomna Abu Deeb",
    role:    "مسؤولة متابعة المشاريع",
    roleEn:  "Projects Coordinator",
    bio:     "طالبة في السنة الرابعة بجامعة الإمام عبد الرحمن بن فيصل، تدرس علوم الحاسب.",
    bioEn:   "Fourth-year Computer Science student at Imam Abdulrahman Bin Faisal University.",
    image: "images/logo.png",
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
    image: "images/articles/qatif_tour.jpg",
  },
   /*
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
  },*/
];

// ─────────────────────────────────────────────────────
//  HERO GALLERY IMAGES (home page strip)
// ─────────────────────────────────────────────────────
const HERO_GALLERY = [
  "images/gallery/tour_1.jpg",
  "images/gallery/palm_1.jpg",
  "images/gallery/tour_2.jpg",
  "images/gallery/dokhala_1.jpg",
  "images/gallery/tour_3.jpg",
  "images/gallery/pottery_1.jpg",
  "images/gallery/tour_4.jpg",
  "images/gallery/cooking_1.jpg",
  "images/gallery/tour_5.jpg",
  "images/gallery/pottery_2.jpg",
  "images/gallery/tour_6.jpg",
];
