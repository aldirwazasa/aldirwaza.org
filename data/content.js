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
    titleEn:     "َQal'at AlQatif Tour",
    location:    "القطيف",
    locationEn:  "Qatif",
    description: "استكشف إحدى أبرز المعالم التاريخية في محافظة القطيف وتعرّف على قصصها مع أحد المرشدين المتميزين في البلد. تأخذك الجولة في رحلة عبر الإرث العمراني والثقافي مع التعرف على دور القلعة وأهاليها في التطورات التاريخية والاقتصادية في المنطقة.",
    descEn:      "Explore one of Qatif’s most significant historical landmarks alongside one of the region's distinguished local guides. This tour takes you on a journey through Qatif's architectural and cultural heritage while uncovering the castle's role and that of its residents in shaping the region's historical and economic development.",
    image: "images/qatif_tour.jpg",
    tag:    "جولة مرشدة",
    tagEn:  "Guided Tour",
    price: "",
    duration: "",
    dates: [
       {
          date: "6/27/2025",
          slots: ["9:30-10:30 AM"],
          spotsLeft: 10,
       },
    ], 
    available: False,
    note: "نقطة التجمع ستكون عند وادي السلام بجوار القلعة",
    requiresAge: False,
    requiresAllergy: False,
  },
  {
    id: "tarout-fort-tour",
    type: "tour",
    status: "active",
    title:       "جولة قلعة تاروت",
    titleEn:     "Qal'at Tarout Tour",
    location:    "جزيرة تاروت",
    locationEn:  "Tarout Island",
    description: "عِش تجربة فريدة في قلعة تاروت، إحدى أقدم القلاع في شرق الجزيرة العربية حيث امتد عمرها لقرون. تتضمن الجولة التعرف على تاريخ القلعة ودورها في تاريخ وحضارة منطقة الخط مع أحد المرشدين المتميزين في البلد.",
    descEn:      "Experience the remarkable Qal’at Tarout, one of the oldest surviving fortresses in Eastern Arabia, with a history spanning many centuries. Guided by one of the area's expert local guides, you'll discover the castle's rich past and its significance in the history and civilization of the historic region of AlKhatt.",
    image: "images/tarout_tour.JPG",
    tag:    "جولة مرشدة",
    tagEn:  "Guided Tour",
    price: "",
    duration: "",
    dates: [
       {
          date: "6/27/2025",
          slots: ["9:30-10:30 AM"],
          spotsLeft: 10,
       },
    ], 
    available: False,
    note: "نقطة التجمع ستكون عند مخبز رغيف تاروت",
    requiresAge: False,
    requiresAllergy: False,
  },
  {
    id: "pottery",
    type: "experience",
    status: "active",
    title:       "صنع الفخار",
    titleEn:     "Pottery Making",
    location:    "مصنع الغراش للفخار",
    locationEn:  "Al-Gharash Pottery Workshop",
    description: "اكتشف فن صناعة الفخار التقليدي من خلال تجربة عملية باستخدام أساليب توارثها الحرفيون عبر الأجيال. تجربة ممتعة تجمع بين الإبداع والتعرف على إحدى أعرق الحرف التراثية في المنطقة.",
    descEn:      "Discover the art of traditional pottery through a hands-on workshop using techniques that have been used by local artisans for generations. This engaging experience blends creativity with an appreciation of one of the region's oldest traditional crafts.",
    image: "images/pottery.JPG",
    tag:    "تجربة يدوية",
    tagEn:  "Hands-On",
    price: "",
    duration: "",
    dates: [
       {
          date: "6/27/2025",
          slots: ["9:30-10:30 AM"],
          spotsLeft: 10,
       },
    ], 
    available: False,
    note: "ملاحظة: المكان خارجي",
    requiresAge: False,
    requiresAllergy: False,
  },
  {
    id: "palm-weaving",
    type: "experience",
    status: "active",
    title:       "سف السعف",
    titleEn:     "Palm Leaf Weaving",
    location:    "شاي حصير",
    locationEn:  "Shay Haseer",
    description: "تعرّف على سف سعف النخيل، إحدى الصناعات التقليدية التي اشتهرت بها القطيف. ستتعلم أساسيات السف وتحويله إلى منتجات يدوية مع التعرف على قيمته الثقافية ودوره في الحياة اليومية قديمًا وكيفية تفعيله في حياتنا اليومية الآن.",
    descEn:      "Learn the traditional craft of weaving date palm leaves, one of Qatif's most celebrated handicrafts. You'll gain hands-on experience in basic weaving techniques, transform palm leaf into handcrafted items, and discover the craft's cultural significance, its role in everyday life in the past, and ways it can still be incorporated into modern living.",
    image: "images/palm_weaving.jpg",
    tag:    "تجربة يدوية",
    tagEn:  "Hands-On",
    price: "",
    duration: "",
    dates: [
       {
          date: "6/27/2025",
          slots: ["9:30-10:30 AM"],
          spotsLeft: 10,
       },
    ], 
    available: False,
    note: "ملاحظة: الفعالية غير مناسبة لمن دون العشر سنوات",
    requiresAge: True,
    requiresAllergy: False,
  },
  {
    id: "traditional-cooking",
    type: "experience",
    status: "active",
    title:       "طبخ الأكلات التقليدية",
    titleEn:     "Traditional Cooking",
    location:    "القطيف",
    locationEn:  "Qatif",
    description: "استمتع بإعداد أشهر الأطباق الشعبية في المنطقة بإشراف مختصين، وتعرّف على المكونات المحلية وطرق الطهي المتوارثة. تجربة ثرية تجمع بين النكهات الأصيلة والضيافة القطيفية وتنتهي بتذوق ما قمت بإعداده وتوزيع الأكل للمحتاجين.",
    descEn:      "Prepare some of Qatif's most beloved traditional dishes under the guidance of experienced instructors. Learn about local ingredients and time-honored cooking techniques while enjoying an immersive culinary experience that celebrates authentic flavors and Qatifi hospitality. The experience concludes with tasting the dishes you've prepared and distributing portions to those in need.",
    image: "images/tours_and_experiences/cooking.JPG",
    tag:    "تجربة يدوية",
    tagEn:  "Hands-On",
    price: "",
    duration: "",
    dates: [
       {
          date: "6/27/2025",
          slots: ["9:30-10:30 AM"],
          spotsLeft: 10,
       },
    ], 
    available: False,
    note: "الفعالية للنساء فقط",
    requiresAge: True,
    requiresAllergy: True,
  },
  {
    id: "fruit-picking",
    type: "experience",
    status: "coming-soon",
    title:       "قطف الثمار",
    titleEn:     "Fruit Harvesting",
    location:    "القطيف",
    locationEn:  "Qatif",
    description: "استمتع بأجواء المزارع المحلية وشارك في قطف الثمار الموسمية مباشرة من الأشجار. تجربة تجمع بين الطبيعة، والتعلم والاستمتاع بالمنتجات الطازجة.",
    descEn:      "Enjoy the atmosphere of local farms and take part in harvesting seasonal fruits. This hands-on experience combines nature, learning, and the pleasure of enjoying fresh local produce.",
    image: "images/logo.png",
    tag:    "تجربة يدوية",
    tagEn:  "Hands-On",
    price: "",
    duration: "",
    dates: [
       {
          date: "6/27/2025",
          slots: ["9:30-10:30 AM"],
          spotsLeft: 10,
       },
    ], 
    available: False,
    note: "ملاحظة: الفعالية خارجية",
    requiresAge: False,
    requiresAllergy: True,
  },
];

// ─────────────────────────────────────────────────────
//  LANDMARKS
// ─────────────────────────────────────────────────────
const LANDMARKS = [
  {
    id: "qatif-fort",
    title:       "قلعة القطيف",
    titleEn:     "Qal'at AlQatif",
    location:    "القطيف، المنطقة الشرقية",
    locationEn:  "Qatif, Eastern Province",
    description: "هي قلعة أثرية تقع على مرتفع من الأرض في قلب مدينة القطيف، شرق المملكة العربية السعودية. يرجع تاريخ بناء قلعة القطيف إلى القرن الثالث الميلادي على يد الساسانيين، واتخذها العثمانيون من بعدهم قاعدة عسكرية ونقطة دفاع في الخليج العربي بعد ترميمها في القرن السابع عشر الميلادي سنة 1630م/1039هـ، وأصبحت بعدها مستودعًا للبضائع وفي وقت لاحق مقرًا للسكن. كان بداخل القلعة أحد عشر مسجدًا إضافة إلى قصر البلاط الملكي وقصور الضيافة وحظائر المواشي، جميعها محاطة بسور منيع. تبقى من القلعة ثمانية عشر منزلًا يتم ترميمه من قبل الأهالي مع التعاون مع هيئة التراث للمحافظة على الإرث العمراني والتاريخي للمنطقة.",
    descEn:      "Qal’at AlQatif is a historic castle situated in the heart of Qatif City in the Eastern Province of Saudi Arabia. Originally built by the Sassanian Empire in the 3rd century CE, it was later restored by the Ottomans in 1630 CE (1039 AH) and transformed into a military stronghold and defensive outpost overlooking the Arabian Gulf. \n Over time, the castle evolved beyond its military function, serving as a warehouse for trade goods and later as a residential quarter. Within its fortified walls stood eleven mosques, the Royal Court Palace, guest residences, and livestock enclosures, all protected by a substantial defensive wall. Today, eighteen historic houses remain from this castle. These are being restored through a collaborative effort between local residents and the Saudi Heritage Commission to preserve the area's architectural and historical legacy.",
    image: "images/landmarks/qalaat_qatif.jpg",
  },
  {
    id: "tarout-fort",
    title:       "قلعة تاروت",
    titleEn:     "Qal'at Tarout",
    location:    "جزيرة تاروت، القطيف",
    locationEn:  "Tarout Island, Qatif",
    description: "هي قلعة أثرية تقع على قمة تل يتوسط جزيرة تاروت جنوب غرب بلدة الديرة، في شرق محافظة القطيف بالمملكة العربية السعودية. يرجع تاريخ تل تاروت الذي بُنيت عليه القلعة إلى خمسة آلاف عام قبل الميلاد، بينما يُعتقد أن القلعة يرجع تاريخ بنائها إلى عهد الدولة العيونية. وقد كانت القلعة إحدى النقاط الدفاعية البرتغالية في الخليج العربي إبّان احتلالهم القطيف، بعد ترميم البرتغاليين لها في القرن السادس عشر الميلادي بتاريخ 29 مارس 1544م الموافق 1 جمادى الأولى 951هـ. \n" +
       "رُمّمت القلعة على هيكل آلهة الفينيقيين عشتاروت أو عشتار، وقد اشتُق اسم جزيرة تاروت منها، كما تظهر صخور وأُسس المعبد القديم بوضوح تحت القلعة. مرت القلعة بالعديد من الحقب الزمنية وتعرضت لأحداث تاريخية مهمة، ومرت بفترة أوشكت فيها على السقوط، إلا أنها رُمّمت في العهد العثماني، وكان آخر ترميم لها في العهد السعودي الحديث من قبل وزارة السياحة عام 1984م. ",
    descEn:      "Qal’at Tarout is a historic castle located atop Tarout Hill in the center of Tarout Island, in Qatif, Eastern Saudi Arabia. Archaeological evidence indicates that Tarout Hill has been inhabited since around 5000 BCE, while the castle itself is believed to have been built during the Uyunid dynasty.\n Following restoration by the Portuguese in the 16th century, it became one of their key defensive positions in the Arabian Gulf during their occupation of Qatif.\n The castle was constructed over the remains of a temple dedicated to the Phoenician goddess Astarte (Ishtar), from whom Tarout Island is believed to derive its name. The foundations and rock formations of the ancient temple remain visible beneath the castle today. Throughout its long history, Tarout Castle has witnessed numerous significant historical events and survived periods of severe deterioration. It was restored during the Ottoman era, with its most recent major restoration carried out by the Saudi Ministry of Tourism in 1984.",
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
    nameEn:  "Fatima Alhawaj",
    role:    "مسؤولة الشؤون التقنية والمالية",
    roleEn:  "Head of Technical & Financial Affairs",
    bio:     "طالبة ماجستير هندسة مواد في جامعة الملك عبدالله. بدأت فاطمة مبادرة الدروازة لإيمانها بأن القطيف تستحق أكثر، وتشوف المبادرة كبداية لترسيخ القطيف كمدينة سياحية والحفاظ على تاريخها وثقافتها للأجيال الجاية.",
    bioEn:   "Fatimah is a materials engineering master’s student at KAUST. She co-founded the initiative sincerely believing that AlQatif deserves to be a tourist city, and sees Aldirwaza as the foundation stone to more and more projects preserving this city’s rich culture and history.",
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
    title:       "تجربة صنع الدوخلة مع الأستاذ منصور المدن",
    titleEn:     "Dokhala Making Experience with Mansoor Al Madan",
    date:        "2026",
    description: "سف وتزيين دوخلات في شهر الحج",
    descEn:      "Palm weaving Dokhalas",
    article:     "في نهار 6 ذو الحجة 1447 هـ (23 مايو 2026)، عشنا تجربة جميلة مع الأستاذ منصور المدن، ودخلنا عالم سف السعف وتعلّمنا وحدة من أقدم الحرف اللي اشتهرت فيها القطيف. \n" +
       "بين شغل اليدين وسوالف الأولين، أخذنا الأستاذ في رحلة إلى قصة الدوخلة، وشرح لنا كيف بدأت هالعادة مع سفر حجاج القطيف للحج، يوم كانت الرحلة تاخذ شهور، وكان الحجاج يتحملوا مو بس طول الطريق، حتى المرض والجوع في سبيل إتمام دينهم. كان الأطفال يتجمعوا على ساحل البحر، وكل واحد شايل دوخلته في إيده، يدعوا إن البحر يرجّع أهلهم بسلامتهم من الرحلة.\n" + 
       "وبدينا نسف الدوخلة من الصفر، سعفة ورا سعفة، لين صارت قدامنا جاهزة تحمل نباتات. وبعدها أطلق الأطفال خيالهم، وزينوها بالألوان والخرز، وزرعوا فيها بذور نباتات مختلفة، عشان تكتمل الدوخلة مثل ما توارثها أهل المنطقة جيل بعد جيل. كانت تجربة جمعت بين الحرفة، والحكاية، وإحياء واحد من أجمل الموروثات الشعبية في القطيف.",
    articleEn:   "On the afternoon of 6 Dhu al-Hijjah 1447 AH (May 23, 2026), we stepped into the world of traditional palm leaf weaving with instructor Mansoor Al Madan, learning one of Qatif's oldest and most cherished crafts. \n" +
       "As our hands weaved, Al Madan shared the story behind the Dokhala, guiding us through the process of weaving a Dokhala from scratch. He explained how this tradition emerged when pilgrims from Qatif and the neighboring coastal communities departed for Hajj, a journey that once took several months. In those days, pilgrims endured not only the long distance but also hunger, illness, and many hardships to fulfill their religion. During their absence, children would gather along the Qatif shoreline carrying their planted Dokhalas, praying that the sea would safely return their loved ones from the journey it had taken them on.\n" + 
     "Once the weaving was complete, the children decorated their dokhlas with colorful beads and paints before planting a variety of seeds inside them, continuing a beloved tradition that has been passed down through generations.The experience beautifully combined traditional craftsmanship, storytelling, and the preservation of one of Qatif's most treasured folk customs.",
    image: "images/articles/dokhala_making.PNG",
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
  "images/gallery/cooking_1.JPG",
  "images/gallery/tour_5.jpg",
  "images/gallery/pottery_2.jpg",
  "images/gallery/tour_6.jpg",
];
