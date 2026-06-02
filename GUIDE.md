# دليل تحرير ونشر موقع مبادرة الدروازة
## Aldirwaza Website — Editor & Deployment Guide

---

## هيكل الملفات / File Structure

```
aldirwaza-v2/
├── index.html              ← Main page (all pages in one file)
├── css/
│   └── styles.css          ← All visual styles & brand colors
├── js/
│   ├── nav.js              ← Page navigation & routing
│   ├── render.js           ← Builds content from data file
│   └── forms.js            ← Booking & contact form logic
├── data/
│   └── content.js          ← ★ EDIT THIS to update all content ★
├── fonts/
│   ├── bahij-badiya-bold.ttf
│   ├── bahij-badiya-light.ttf
│   ├── dema-shekari.ttf
│   └── shekari.ttf
└── images/                 ← Put all your images here
    └── (your images go here)
```

---

## 1. أين تذهب بيانات الحجز؟ / Where Does Booking Data Go?

Booking and contact forms submit to **Formspree** — a secure third-party service.

**Setup steps (one-time, 5 minutes):**

1. Go to https://formspree.io and create a free account
2. Click "New Form" → name it "Aldirwaza Bookings"
3. Copy the form ID (looks like `xpwzqabc`)
4. Open `js/forms.js` and replace:
   ```js
   const FORMSPREE_BOOKING_ID = 'YOUR_FORMSPREE_ID';
   const FORMSPREE_CONTACT_ID = 'YOUR_FORMSPREE_ID';
   ```
   with:
   ```js
   const FORMSPREE_BOOKING_ID = 'xpwzqabc';   // your actual ID
   const FORMSPREE_CONTACT_ID = 'xpwzqabc';
   ```
5. Save and re-upload `js/forms.js`

**Accessing submissions:**
- Log into formspree.io → your form dashboard
- View all bookings as a table
- Download as CSV / Excel at any time
- Set up email notifications for every new booking
- Free plan: 50 submissions/month. Paid: $8/month for unlimited.

---

## 2. كيفية تحديث المحتوى / How to Update Content

**The golden rule: you only ever need to edit `data/content.js`**
Everything else updates automatically.

### إضافة/تعديل تجربة أو جولة / Add or Edit an Experience

Open `data/content.js`. Find the `EXPERIENCES` array. Each item looks like:

```js
{
  id: "pottery",                          // unique ID, no spaces
  type: "experience",                     // "tour" or "experience"
  status: "active",                       // "active" or "coming-soon"
  title: "صنع الفخار",
  location: "مصنع الغراش للفخار",
  description: "وصف التجربة هنا...",
  image: "images/pottery.jpg",            // ← path to your image
  tag: "تجربة يدوية",
  price: "١٥٠ ريال",                     // leave "" to hide price
  duration: "ساعتان",                    // leave "" to show tag instead
},
```

**To add a new experience**, copy one block, paste it after the last one (before the `];`), and change the values.

**To remove an experience**, delete its entire `{ ... },` block.

**To mark as coming soon**, change `status: "active"` to `status: "coming-soon"`.
It will automatically show a "قريباً" badge and a different button.

**The booking dropdown updates automatically** — whatever is `"active"` in EXPERIENCES appears in the booking form. No other changes needed.

---

### إضافة صور / How to Add Images

1. Copy your image file into the `/images/` folder
   - Recommended formats: `.jpg` or `.webp`
   - Recommended size: max 1200px wide, under 400KB per image
   - Name without spaces: use hyphens e.g. `qatif-fort-tour.jpg`

2. In `data/content.js`, find the item and set its `image` field:
   ```js
   image: "images/qatif-fort-tour.jpg",
   ```

3. Save the file. The image appears automatically.

If no image is set (`image: ""`), a styled placeholder shows instead.

---

### تغيير صور الصفحة الرئيسية / Change Hero Gallery Images

Find `HERO_GALLERY` in `data/content.js`:

```js
const HERO_GALLERY = [
  "images/home-1.jpg",
  "images/home-2.jpg",
  "images/home-3.jpg",
  "images/home-4.jpg",
];
```

Add, remove, or reorder the paths. The gallery shows them in order left to right.

---

### تعديل المعالم السياحية / Edit Landmarks

Find `LANDMARKS` in `data/content.js`. Same structure as experiences:

```js
{
  id: "qatif-fort",
  title: "قلعة القطيف",
  location: "القطيف، المنطقة الشرقية",
  description: "النص الوصفي هنا...",
  image: "images/qatif-fort.jpg",
},
```

Odd-numbered items (1st, 3rd, 5th...) have image on the right.
Even-numbered items (2nd, 4th...) have image on the left. This alternates automatically.

---

### تعديل الفريق / Edit Team Members

Find `TEAM_EXECUTIVES` and `TEAM_MEMBERS` in `data/content.js`:

```js
{
  name: "اسم العضو",
  role: "المنصب",
  bio: "نبذة مختصرة عن العضو.",
  image: "images/team-member.jpg",
},
```

To **add a new member**: copy a block and add it to the array.
To **remove a member**: delete their `{ ... },` block.
To **move between Executives and Members**: cut the block and paste it in the other array.

---

### تعديل آخر الأعمال / Edit Recent Works

Find `WORKS` in `data/content.js`:

```js
{
  title: "عنوان العمل",
  date: "٢٠٢٥",
  description: "وصف مختصر للعمل أو الفعالية.",
  image: "images/work-photo.jpg",
},
```

Add new items at the **top** of the array to show them first.

---

### تعديل النصوص الثابتة / Edit Fixed Text

Some text is written directly in `index.html` rather than `data/content.js`:

| Text | Location in index.html |
|------|------------------------|
| Mission text (المهمة) | Search for `page-about`, find `<p>` under `المهمة` |
| Vision text (الرؤية) | Same section, under `الرؤية` |
| Payment instruction | Search for `تعليمات الدفع` |
| Hero tagline | Search for `hero-tagline` |

Open `index.html` in any text editor, use Find (Ctrl+F / Cmd+F) to locate the text, and edit it directly.

---

## 3. ربط الدومين / Connecting aldirwaza.org

Since you already own `aldirwaza.org`, here is the exact process for the most popular free hosting options:

### Option A — Netlify (Recommended, Free)

1. Go to https://netlify.com → sign up free
2. Drag and drop your entire `aldirwaza-v2` folder onto the Netlify dashboard
3. Your site goes live at a random URL like `random-name.netlify.app`
4. In Netlify: **Site settings → Domain management → Add custom domain**
5. Type `aldirwaza.org` → click Verify
6. Netlify shows you two nameservers (like `dns1.p01.nsone.net`)
7. Log into your domain registrar (wherever you bought `aldirwaza.org`)
8. Replace the current nameservers with Netlify's two nameservers
9. Wait 10–30 minutes → your site is live at aldirwaza.org with free HTTPS

### Option B — GitHub Pages (Free)

1. Create a free account at https://github.com
2. Create a new repository named `aldirwaza-website`
3. Upload all files in `aldirwaza-v2/` to the repository
4. Go to Settings → Pages → Source: main branch → Save
5. Site goes live at `yourusername.github.io/aldirwaza-website`
6. In Settings → Pages → Custom domain: type `aldirwaza.org`
7. At your domain registrar, add a CNAME DNS record:
   - Name: `www`  → Value: `yourusername.github.io`
   - For the root domain, add 4 A records pointing to GitHub's IPs:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

### How to update the live site after edits

**Netlify:** Drag and drop the updated folder again — Netlify detects changes and redeploys in ~30 seconds.

**GitHub Pages:** Upload the changed files to the repository. GitHub redeploys automatically within 1–2 minutes.

---

## 4. الأمان / Security

This site is a **static website** — one of the most secure types of sites possible:

| Risk | Status |
|------|--------|
| Database hacking | Not applicable — no database |
| Server code exploits | Not applicable — no server code |
| WordPress plugin vulnerabilities | Not applicable — no WordPress |
| Form spam/abuse | Protected by Formspree's built-in spam filters |
| File upload abuse | Formspree validates and stores files securely |
| HTTPS (encrypted connection) | Free, automatic via Netlify or GitHub Pages |
| XSS (script injection) | Low risk; no user-generated content rendered as HTML |

**Additional security steps to take:**

1. Set a strong password on your Formspree account and enable 2FA
2. Set a strong password on your Netlify/GitHub account and enable 2FA
3. Keep your domain registrar account secured with 2FA
4. Add these headers in Netlify: create a file `netlify.toml` in the root:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), camera=(), microphone=()"
    Content-Security-Policy = "default-src 'self'; img-src 'self' https://aldirwaza.org https://i0.wp.com https://fonts.gstatic.com data:; font-src 'self'; script-src 'self'; style-src 'self'; connect-src 'self' https://formspree.io; frame-src https://calendar.google.com"
```

---

## 5. الملفات المنفصلة — الفائدة / Separated Files — Why It Helps

| File | What you change it for |
|------|------------------------|
| `data/content.js` | Adding/editing experiences, team, landmarks, works, images — **the only file you normally touch** |
| `css/styles.css` | Changing colors, fonts, spacing, layout |
| `js/forms.js` | Updating Formspree IDs, changing form behavior |
| `js/render.js` | Changing how cards/team/landmarks are displayed |
| `js/nav.js` | Changing page routing behavior |
| `index.html` | Changing fixed text (mission, vision), adding new pages |

**Compared to a single file:** you can update content without worrying about breaking the styles. You can update the design without touching the content. Each person on the team can edit their own file safely.

---

## 6. بوابة الدفع المستقبلية / Future Payment Gateway

The code is already structured to support a payment gateway. When you're ready:

**Recommended Saudi-compatible options:**
- **Moyasar** (moyasar.com) — supports Mada, Visa, Mastercard, Apple Pay. Arabic support built-in.
- **Tap Payments** (tap.company) — widely used in the Gulf, supports all major cards
- **HyperPay** — enterprise option used by larger Saudi businesses

**Integration steps (when ready):**
1. In `index.html`, find the comment: `<!-- When ready: replace this div's content... -->`
2. Remove the `style="display:none;"` from `payment-gateway-section`
3. Paste your payment provider's hosted fields widget inside that div
4. In `js/forms.js`, before calling Formspree, call the payment provider's tokenization API
5. Add the payment token to the form data submitted to Formspree

**Security rule:** NEVER create plain `<input>` fields for card numbers. Always use your payment provider's hosted fields — card data goes directly from the visitor's browser to the payment network without touching your files.

---

## 7. كيف أضيف صفحة جديدة / How to Add a New Page

1. **In `index.html`**, add a new page div. Copy an existing one as a template:
   ```html
   <div class="page" id="page-PAGENAME">
     <div class="page-header">
       <h1>عنوان الصفحة</h1>
       <p>وصف مختصر</p>
     </div>
     <div class="breadcrumb">
       <button onclick="showPage('home')">الرئيسية</button>
       <span>›</span><span>اسم الصفحة</span>
     </div>
     <section class="section" style="background:var(--surface);">
       <div class="section-wide">
         <!-- محتوى الصفحة هنا -->
       </div>
     </section>
   </div>
   ```

2. **Add a nav button** in both the desktop nav and mobile nav:
   ```html
   <li><button onclick="showPage('PAGENAME')" id="nav-PAGENAME">اسم الصفحة</button></li>
   ```

3. **In `js/nav.js`**, add `'PAGENAME'` to the `NAV_PAGES` array:
   ```js
   const NAV_PAGES = ['home', 'about', 'tours', 'landmarks', 'booking', 'works', 'contact', 'PAGENAME'];
   ```

---

## 8. كيف أضيف كارد جديد / How to Duplicate a Card

### Experience card (new tour/experience):
Just add a new object to `EXPERIENCES` in `data/content.js`. The card renders automatically.

### Work card (recent work):
Add a new object to `WORKS` in `data/content.js`. New items at the top appear first.

### Team card:
Add a new object to `TEAM_EXECUTIVES` or `TEAM_MEMBERS` in `data/content.js`.

### Landmark:
Add a new object to `LANDMARKS` in `data/content.js`.

---

## 9. الألوان / Brand Colors Reference

These are set as CSS variables in `css/styles.css` and used throughout the site:

| Variable | Hex | Use |
|----------|-----|-----|
| `--brown` | `#9D7757` | Primary buttons, accents, dividers |
| `--brown-light` | `#CDB591` | Highlights, hover states |
| `--stone` | `#D6CCB6` | Borders, secondary elements |
| `--cream` | `#EBE6DB` | Section backgrounds, cards |
| `--olive` | `#656B37` | Secondary buttons, section backgrounds |
| `--blue` | `#306892` | Coming-soon badges, links |
| `--dark-olive` | `#474927` | Nav, dark sections, footer |

To change any color site-wide, update its variable value in `css/styles.css` — it changes everywhere at once.

---

## 10. الخطوط / Fonts

| Font | File | Use |
|------|------|-----|
| Bahij Badiya Bold | `bahij-badiya-bold.ttf` | All titles, headings, nav logo |
| Bahij Badiya Light | `bahij-badiya-light.ttf` | Taglines, light display text |
| Dema Shekari | `dema-shekari.ttf` | All body text, buttons, labels |

Referenced in CSS as:
- `font-family: var(--font-title)` → Bahij Badiya
- `font-family: var(--font-body)` → Dema Shekari

---

*آخر تحديث: ٢٠٢٥ — مبادرة الدروازة*
