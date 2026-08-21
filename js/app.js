// ── LANGUAGE ──────────────────────────────────────────
let currentLang = 'ar';

function setLang(lang) {
  currentLang = lang;
  const html = document.getElementById('html-root');
  html.lang = lang;
  html.dir  = lang === 'ar' ? 'rtl' : 'ltr';

  // Toggle nav toggle buttons
  document.getElementById('btn-ar').classList.toggle('lang-active', lang==='ar');
  document.getElementById('btn-en').classList.toggle('lang-active', lang==='en');
  const mAr = document.getElementById('mbtn-ar');
  const mEn = document.getElementById('mbtn-en');
  if(mAr){mAr.classList.toggle('lang-active', lang==='ar'); mEn.classList.toggle('lang-active', lang==='en');}

  // Re-render dynamic content with new language
  renderAll();
  localStorage.setItem('aldirwaza-lang', lang);
}

// ── RENDER ────────────────────────────────────────────
function t(ar, en) { return currentLang === 'ar' ? ar : en; }

function imgPh(label) {
  return `<div class="img-ph"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>${label}</span></div>`;
}
function imgOrPh(src, alt) {
  return (src && src.trim()) ? `<img src="${src}" alt="${alt}" loading="lazy"/>` : imgPh(alt);
}

function expCard(e) {
  const isAr = currentLang === 'ar';
  const bc = e.status==='coming-soon'?'badge-soon':e.type==='tour'?'badge-tour':'badge-exp';
  const bl = e.status==='coming-soon' ? t('قريباً','Coming Soon') : e.type==='tour' ? t('جولة','Tour') : t('تجربة','Experience');
  const title = t(e.title, e.titleEn || e.title);
  const loc   = t(e.location, e.locationEn || e.location);
  const desc  = t(e.description, e.descEn || e.description);
  const tag   = t(e.tag, e.tagEn || e.tag);
  let bookTxt, btnCls, btnAction;
  const instaUrl = 'https://www.instagram.com/aldirwaza_sa/';
  if (e.status === 'coming-soon') {
    bookTxt   = t('ابق على اطلاع', 'Stay Updated');
    btnCls    = 'btn btn-outline btn-sm';
    btnAction = `onclick="window.open('${instaUrl}','_blank')"`;
  } else if (!e.available || !e.dates || e.dates.length === 0) {
    bookTxt   = t('ابق على اطلاع', 'Stay Updated');
    btnCls    = 'btn btn-outline btn-sm';
    btnAction = `onclick="window.open('${instaUrl}','_blank')"`;
  } else {
    bookTxt   = t('احجز الآن', 'Book Now');
    btnCls    = 'btn btn-primary btn-sm';
    btnAction = `onclick="showPage('booking','${e.id}')"`;
  }
  return `<div class="card"><div class="card-img">${imgOrPh(e.image,title)}<span class="card-badge ${bc}">${bl}</span></div><div class="card-body"><div class="card-location">${loc}</div><h3 class="card-title">${title}</h3><p class="card-desc">${desc}</p><div class="card-meta"><span class="card-tag">${tag}</span>${e.price?`<span style="font-size:.82rem;color:var(--olive)">${e.price}</span>`:''}<button class="${btnCls}" ${btnAction}>${bookTxt}</button></div>${(!e.available || !e.dates || e.dates.length === 0) && e.status !== 'coming-soon' ? `<div style="font-size:.72rem;color:var(--ink-soft);margin-top:.35rem;opacity:.7">${t('لا توجد مواعيد متاحة حالياً','No dates currently available')}</div>` : ''}</div></div>`;
}

function teamCard(m) {
  const name = t(m.name, m.nameEn || m.name);
  const role = t(m.role, m.roleEn || m.role);
  const bio  = t(m.bio,  m.bioEn  || m.bio);
  return `<div class="team-card" onclick="this.classList.toggle('flipped')">
    <div class="team-card-inner">
      <div class="team-card-front">
        <div class="team-photo">${imgOrPh(m.image,name)}</div>
        <div class="team-info" style="padding:.9rem 1.1rem 1.1rem">
          <div class="team-name">${name}</div>
          <div class="team-role">${role}</div>
        </div>
      </div>
      <div class="team-card-back">
        <div class="team-name">${name}</div>
        <div class="team-role">${role}</div>
        <p class="team-bio">${bio}</p>
      </div>
    </div>
    <div class="team-card-spacer"></div>
  </div>`;
}

function workCard(w, idx) {
  const title = t(w.title, w.titleEn || w.title);
  const desc  = t(w.description, w.descEn || w.description);
  const readTxt = t('اقرأ المزيد ←','Read More →');
  return `<div class="work-card" style="cursor:pointer" onclick="openArticle(${idx})">
    <div class="work-img">${imgOrPh(w.image,title)}</div>
    <div class="work-body">
      <div class="work-date">${w.date}</div>
      <h3 class="work-title">${title}</h3>
      <p class="work-desc">${desc}</p>
      <div style="margin-top:.9rem;font-size:.8rem;color:var(--brown);font-weight:700">${readTxt}</div>
    </div>
  </div>`;
}

function lmCard(lm, i) {
  const flip = i%2!==0 ? 'flip' : '';
  const title = t(lm.title, lm.titleEn || lm.title);
  const desc  = t(lm.description, lm.descEn || lm.description);
  const loc   = t(lm.location, lm.locationEn || lm.location);
  return `<div class="landmark-item ${flip} reveal"><div class="landmark-img">${imgOrPh(lm.image,title)}</div><div class="landmark-text"><h3>${title}</h3><p>${desc}</p><span class="landmark-loc"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${loc}</span></div></div>`;
}

function setEl(id, html) { const el=document.getElementById(id); if(el) el.innerHTML=html; }

function scrollGallery(direction) {
  const strip = document.getElementById('hero-gallery');
  if (!strip) return;
  const item = strip.querySelector('.gallery-item');
  if (!item) return;
  const itemWidth = item.getBoundingClientRect().width + 3;
  const isRtl = document.getElementById('html-root').dir === 'rtl';
  const delta = isRtl ? -direction : direction;
  strip.scrollBy({ left: delta * itemWidth, behavior: 'smooth' });
}
function renderAll() {
  // Gallery
  const gal = document.getElementById('hero-gallery');
  if(gal) gal.innerHTML = HERO_GALLERY.map(src=>`<div class="gallery-item" onclick="showPage('tours')"><img src="${src}" alt="Qatif"/></div>`).join('');

  const active4 = EXPERIENCES.filter(e=>e.status==='active').slice(0,4);
  setEl('home-featured',  active4.map(expCard).join(''));
  setEl('tours-list',     EXPERIENCES.filter(e=>e.type==='tour').map(expCard).join(''));
  setEl('experiences-list', EXPERIENCES.filter(e=>e.type==='experience').map(expCard).join(''));
  setEl('landmarks-list', LANDMARKS.map(lmCard).join(''));
  setEl('team-executives', TEAM_EXECUTIVES.map(teamCard).join(''));
  setEl('team-members',    TEAM_MEMBERS.map(teamCard).join(''));
  setEl('works-list',      WORKS.map((w,i)=>workCard(w,i)).join(''));

  // Booking dropdown — rebuild options only, listener is registered once in DOMContentLoaded
  const sel = document.getElementById('bf-activity');
  if (sel) {
    const placeholder = t('اختر النشاط', 'Select an activity');
    sel.innerHTML = `<option value="">${placeholder}</option>` +
      EXPERIENCES.filter(e => e.status === 'active').map(e => {
        const prefix = e.type === 'tour' ? t('جولة: ', 'Tour: ') : t('تجربة: ', 'Experience: ');
        const name   = t(e.title, e.titleEn || e.title);
        const avail  = e.available && e.dates && e.dates.length > 0;
        const label  = avail ? '' : ' — ' + t('غير متاح حالياً', 'Not available');
        return `<option value="${e.title}" ${avail ? '' : 'disabled style="color:#aaa"'}>${prefix}${name}${label}</option>`;
      }).join('');
  }
}

function prefillBooking(activityId) {
  const exp = EXPERIENCES.find(e => e.id === activityId);
  if (!exp || !exp.available || !exp.dates || exp.dates.length === 0) return;
  currentActivityId = activityId;

  const sel = document.getElementById('bf-activity');
  if (sel) sel.value = exp.title;

  const dateEl = document.getElementById('bf-date');
  if (dateEl) {
    const placeholder = t('اختر التاريخ', 'Choose a date');
    dateEl.innerHTML = `<option value="">${placeholder}</option>` +
      exp.dates.map(d =>
        `<option value="${d.date}">${d.date}${d.spotsLeft !== undefined ? ' — ' + d.spotsLeft + t(' مقعد متاح', ' spots left') : ''}</option>`
      ).join('');
    dateEl.disabled = false;
  }

  // Reset time slots until a date is picked
  const timeEl = document.getElementById('bf-time');
  if (timeEl) {
    timeEl.innerHTML = `<option value="">${t('اختر التاريخ أولاً', 'Choose a date first')}</option>`;
  }

  // Show price from first date as default
  const priceNote = document.getElementById('bf-price-note');
  if (priceNote && exp.dates[0].price) {
    priceNote.textContent = t('السعر: ', 'Price: ') + exp.dates[0].price;
    priceNote.style.display = 'block';
  }
  // Show note from first date as default
  const dateNote = document.getElementById('bf-date-note');
  if (dateNote) {
    const note = t(exp.dates[0].note, exp.dates[0].noteEn || exp.dates[0].note);
    if (note) {
      dateNote.textContent = note;
      dateNote.style.display = 'block';
    } else {
      dateNote.style.display = 'none';
    }
  }
  // Show/hide allergy and age fields
  const allergyGroup = document.querySelector('.allergy-group');
  if (allergyGroup) allergyGroup.style.display = exp.requiresAllergy ? 'block' : 'none';
  const ageGroup = document.querySelector('.age-group');
  if (ageGroup) {
    ageGroup.style.display = exp.requiresAge ? 'block' : 'none';
    const ageInput = document.getElementById('bf-age');
    if (ageInput) {
      ageInput.min = exp.minAge || 1;
      ageInput.max = exp.maxAge || 120;
      if (exp.minAge || exp.maxAge) {
        ageInput.placeholder = exp.minAge && exp.maxAge
          ? `${exp.minAge} – ${exp.maxAge}`
          : exp.minAge ? `${t('من','from')} ${exp.minAge}`
                       : `${t('حتى','up to')} ${exp.maxAge}`;
      }
    }
  }
}

function updateSlotsForDate(activityId) {
  const exp = EXPERIENCES.find(e => e.id === activityId);
  if (!exp) return;

  const dateEl = document.getElementById('bf-date');
  const selectedDate = dateEl ? dateEl.value : '';
  const dateObj = exp.dates.find(d => d.date === selectedDate);

  const timeEl = document.getElementById('bf-time');
  if (!timeEl) return;

  if (!dateObj) {
    timeEl.innerHTML = `<option value="">${t('اختر التاريخ أولاً', 'Choose a date first')}</option>`;
    return;
  }

  const placeholder = t('اختر الوقت', 'Choose a time');
  timeEl.innerHTML = `<option value="">${placeholder}</option>` +
    dateObj.slots.map(s => `<option value="${s}">${s}</option>`).join('');

  // Update price note for selected date
  const priceNote = document.getElementById('bf-price-note');
  if (priceNote && dateObj.price) {
    priceNote.textContent = t('السعر: ', 'Price: ') + dateObj.price;
    priceNote.style.display = 'block';
  }

  // Spots left banner
  const banner = document.getElementById('bf-spots-banner');
  if (banner && dateObj.spotsLeft !== undefined) {
    const spots = dateObj.spotsLeft;
    banner.style.display = 'block';
    if (spots === 0) {
      banner.textContent = t('هذا الموعد ممتلئ', 'This date is fully booked');
      banner.style.background = '#fdf2f2';
      banner.style.color = '#8b1a1a';
    } else if (spots <= 3) {
      banner.textContent = t(`تبقّى ${spots} مقاعد فقط!`, `Only ${spots} spots left!`);
      banner.style.background = '#fff8e6';
      banner.style.color = '#7a5000';
    } else {
      banner.textContent = t(`${spots} مقعد متاح`, `${spots} spots available`);
      banner.style.background = '#f0f7f0';
      banner.style.color = '#2d5a2d';
    }

    const max = Math.min(spots, dateObj.maxGroupSize || spots);
    const gsEl = document.getElementById('bf-groupsize');
    const gsGroup = document.getElementById('bf-groupsize-group');
    if (gsEl && gsGroup) {
      if (spots === 0) {
        gsGroup.style.display = 'none';
      } else {
        gsGroup.style.display = 'block';
        const gsPlaceholder = t('اختر عدد الأشخاص', 'Select number of people');
        gsEl.innerHTML = `<option value="">${gsPlaceholder}</option>` +
          Array.from({length: max}, (_,i) => i+1)
            .map(n => `<option value="${n}">${n} ${t('شخص', n === 1 ? 'person' : 'people')}</option>`)
            .join('');
      }
    }
  } else if (banner) {
    banner.style.display = 'none';
  }

  // Date-specific note
  const dateNote = document.getElementById('bf-date-note');
  if (dateNote) {
    const note = t(dateObj.note, dateObj.noteEn || dateObj.note);
    if (note) {
      dateNote.textContent = note;
      dateNote.style.display = 'block';
    } else {
      dateNote.style.display = 'none';
    }
  }
}

// ── NAV ──────────────────────────────────────────────
const PAGES = ['home','about','tours','landmarks','booking','works','contact','join'];
let currentActivityId = null;

function showPage(id, activityId) {
  PAGES.forEach(p => {
    const pg=document.getElementById('page-'+p);
    const btn=document.getElementById('nav-'+p);
    if(pg) pg.classList.remove('active');
    if(btn) btn.classList.remove('active');
  });
  const pg=document.getElementById('page-'+id);
  const btn=document.getElementById('nav-'+id);
  if(pg) pg.classList.add('active');
  if(btn) btn.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  renderAll();
  if (id === 'booking' && activityId) {
    prefillBooking(activityId);
  }
  initReveal();
}

function toggleMobileNav(){ document.getElementById('mobile-nav').classList.toggle('open'); }
function closeMobileNav(){ document.getElementById('mobile-nav').classList.remove('open'); }

function initReveal() {
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);} });
  },{threshold:0.1});
  document.querySelectorAll('.page.active .reveal:not(.visible)').forEach(el=>obs.observe(el));
}

// ── FORMS (Netlify Forms — no Formspree) ─────────────
async function submitToNetlify(formName, fd) {
  const res = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(fd).toString()
  });
  if (!res.ok) throw new Error('Netlify submission failed');
}

function toggleAllergyField(show) { document.getElementById('bf-allergy-detail').style.display=show?'block':'none'; }

async function submitBooking() {
  const name=document.getElementById('bf-name').value.trim();
  const email=document.getElementById('bf-email').value.trim();
  const phone=document.getElementById('bf-phone').value.trim();
  const activity=document.getElementById('bf-activity').value;
  const date=document.getElementById('bf-date').value;
  const time=document.getElementById('bf-time').value;
  const errEl=document.getElementById('booking-error');
  errEl.style.display='none';
  const errMsg = t('يرجى تعبئة جميع الحقول الإلزامية','Please fill in all required fields');
  const emailErr = t('يرجى إدخال بريد إلكتروني صحيح','Please enter a valid email address');
  if(!name||!email||!phone||!activity||!date||!time){errEl.textContent=errMsg;errEl.style.display='block';return;}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){errEl.textContent=emailErr;errEl.style.display='block';return;}
  const btn=document.getElementById('booking-submit-btn');
  btn.disabled=true;
  btn.querySelector('.ar').textContent='جاري الإرسال...';
  btn.querySelector('.en').textContent='Submitting...';

  const fd=new FormData();
  fd.append('form-name','booking');
  fd.append('name',name);fd.append('email',email);fd.append('phone',phone);
  fd.append('activity',activity);fd.append('date',date);fd.append('time',time);
  fd.append('notes',document.getElementById('bf-notes').value);
  fd.append('language', currentLang);

  const ageEl = document.getElementById('bf-age');
  if (ageEl && ageEl.value) fd.append('age', ageEl.value);

  const allergy=document.querySelector('input[name="allergy"]:checked');
  if(allergy) fd.append('allergy',allergy.value==='yes'?document.getElementById('bf-allergy-text').value:'No');

  const sources=[...document.querySelectorAll('.bf-source:checked')].map(c=>c.value);
  fd.append('source',sources.join(', ')||'N/A');

  const gsEl = document.getElementById('bf-groupsize');
  if (gsEl && gsEl.value) fd.append('groupsize', gsEl.value);

  const receipt=document.getElementById('bf-receipt').files[0];
  if(receipt) fd.append('receipt',receipt);

  try {
    const res = await fetch('/', { method: 'POST', body: fd });
    if (!res.ok) throw new Error('server error');
  } catch (err) {
    btn.disabled=false;
    btn.querySelector('.ar').textContent='أرسل الحجز';
    btn.querySelector('.en').textContent='Submit Booking';
    errEl.textContent=t('حدث خطأ، يرجى المحاولة مرة أخرى.','An error occurred, please try again.');
    errEl.style.display='block';return;
  }

  document.getElementById('booking-form-container').style.display='none';
  document.getElementById('booking-success').style.display='block';
}

function resetBooking() {
  document.getElementById('booking-form-container').style.display='block';
  document.getElementById('booking-success').style.display='none';

  const ids = ['bf-name','bf-email','bf-phone','bf-notes','bf-allergy-text','bf-age'];
  ids.forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});

  const actEl = document.getElementById('bf-activity');
  if (actEl) actEl.selectedIndex = 0;

  const timeEl = document.getElementById('bf-time');
  if (timeEl) timeEl.innerHTML =
    `<option value="" class="ar">اختر الوقت</option><option value="" class="en">Choose a time</option>`;

  const dateEl = document.getElementById('bf-date');
  if (dateEl) {
    dateEl.innerHTML = `<option value="">${t('اختر النشاط أولاً', 'Choose an activity first')}</option>`;
    dateEl.disabled = true;
  }
  currentActivityId = null;

  const noRadio = document.querySelector('input[name="allergy"][value="no"]');
  if (noRadio) noRadio.checked = true;
  const allergyDetail = document.getElementById('bf-allergy-detail');
  if (allergyDetail) allergyDetail.style.display = 'none';

  document.querySelectorAll('.bf-source').forEach(cb => cb.checked = false);

  const receiptEl = document.getElementById('bf-receipt');
  if (receiptEl) receiptEl.value = '';

  const gsGroup = document.getElementById('bf-groupsize-group');
  if (gsGroup) gsGroup.style.display = 'none';

  const banner = document.getElementById('bf-unavailable-banner');
  if (banner) banner.style.display = 'none';
  const spotsBanner = document.getElementById('bf-spots-banner');
  if (spotsBanner) spotsBanner.style.display = 'none';
  const priceNote = document.getElementById('bf-price-note');
  if (priceNote) priceNote.style.display = 'none';
  const dateNote = document.getElementById('bf-date-note');
  if (dateNote) dateNote.style.display = 'none';

  const ageGroup = document.querySelector('.age-group');
  if (ageGroup) ageGroup.style.display = 'none';
  const allergyGroup = document.querySelector('.allergy-group');
  if (allergyGroup) allergyGroup.style.display = 'none';

  const btn=document.getElementById('booking-submit-btn');
  if(btn){btn.disabled=false;btn.querySelector('.ar').textContent='أرسل الحجز';btn.querySelector('.en').textContent='Submit Booking';}
  document.getElementById('booking-error').style.display='none';
}

async function submitContact() {
  const name=document.getElementById('cf-name').value.trim();
  const email=document.getElementById('cf-email').value.trim();
  const msg=document.getElementById('cf-msg').value.trim();
  const errEl=document.getElementById('contact-error');
  errEl.style.display='none';
  if(!name||!email||!msg){errEl.textContent=t('يرجى تعبئة جميع الحقول الإلزامية','Please fill in all required fields');errEl.style.display='block';return;}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){errEl.textContent=t('يرجى إدخال بريد إلكتروني صحيح','Please enter a valid email address');errEl.style.display='block';return;}
  const btn=document.getElementById('contact-submit-btn');
  btn.disabled=true;
  btn.querySelector('.ar').textContent='جاري الإرسال...';
  btn.querySelector('.en').textContent='Sending...';

  try {
    const fd = new FormData();
    fd.append('form-name', 'contact');
    fd.append('name', name);
    fd.append('email', email);
    fd.append('message', msg);
    fd.append('language', currentLang);
    await submitToNetlify('contact', fd);
  } catch {
    btn.disabled=false;
    btn.querySelector('.ar').textContent='إرسال الرسالة';
    btn.querySelector('.en').textContent='Send Message';
    errEl.textContent=t('حدث خطأ، يرجى المحاولة مرة أخرى.','An error occurred, please try again.');
    errEl.style.display='block';return;
  }

  document.getElementById('contact-form-content').style.display='none';
  document.getElementById('contact-success').style.display='block';
}

function resetContact() {
  document.getElementById('contact-form-content').style.display='block';
  document.getElementById('contact-success').style.display='none';
  ['cf-name','cf-email','cf-msg'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  const btn=document.getElementById('contact-submit-btn');
  if(btn){btn.disabled=false;btn.querySelector('.ar').textContent='إرسال الرسالة';btn.querySelector('.en').textContent='Send Message';}
  document.getElementById('contact-error').style.display='none';
}

function countWords(el) {
  const words = el.value.trim() === '' ? 0 : el.value.trim().split(/\s+/).length;
  const counter = document.getElementById('jf-wordcount');
  if (counter) {
    counter.textContent = words + ' / 100';
    counter.style.color = words > 100 ? '#b03030' : 'var(--stone)';
  }
  if (words > 100) {
    const trimmed = el.value.trim().split(/\s+/).slice(0, 100).join(' ');
    el.value = trimmed;
    counter.textContent = '100 / 100';
  }
}

async function submitJoin() {
  const firstName = document.getElementById('jf-firstname').value.trim();
  const lastName  = document.getElementById('jf-lastname').value.trim();
  const age       = document.getElementById('jf-age').value.trim();
  const phone     = document.getElementById('jf-phone').value.trim();
  const team      = document.getElementById('jf-team').value;
  const why       = document.getElementById('jf-why').value.trim();
  const errEl     = document.getElementById('join-error');
  errEl.style.display = 'none';

  if (!firstName || !lastName || !age || !phone || !team || !why) {
    errEl.textContent = t('يرجى تعبئة جميع الحقول الإلزامية', 'Please fill in all required fields');
    errEl.style.display = 'block';
    return;
  }
  const words = why.split(/\s+/).length;
  if (words > 100) {
    errEl.textContent = t('يرجى الالتزام بـ ١٠٠ كلمة كحد أقصى', 'Please keep your answer to 100 words maximum');
    errEl.style.display = 'block';
    return;
  }

  const btn = document.getElementById('join-submit-btn');
  btn.disabled = true;
  btn.querySelector('.ar').textContent = 'جاري الإرسال...';
  btn.querySelector('.en').textContent = 'Submitting...';

  try {
    const fd = new FormData();
    fd.append('form-name', 'join');
    fd.append('firstName', firstName);
    fd.append('lastName', lastName);
    fd.append('age', age);
    fd.append('phone', phone);
    fd.append('team', team);
    fd.append('why', why);
    fd.append('language', currentLang);
    await submitToNetlify('join', fd);
  } catch {
    btn.disabled = false;
    btn.querySelector('.ar').textContent = 'إرسال الطلب';
    btn.querySelector('.en').textContent = 'Submit Application';
    errEl.textContent = t('حدث خطأ، يرجى المحاولة مرة أخرى.', 'An error occurred, please try again.');
    errEl.style.display = 'block';
    return;
  }

  document.getElementById('join-form-container').style.display = 'none';
  document.getElementById('join-success').style.display = 'block';
}

function resetJoin() {
  document.getElementById('join-form-container').style.display = 'block';
  document.getElementById('join-success').style.display = 'none';
  ['jf-firstname','jf-lastname','jf-age','jf-phone','jf-why'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  const sel = document.getElementById('jf-team');
  if (sel) sel.selectedIndex = 0;
  const counter = document.getElementById('jf-wordcount');
  if (counter) { counter.textContent = '0 / 100'; counter.style.color = 'var(--stone)'; }
  const btn = document.getElementById('join-submit-btn');
  if (btn) {
    btn.disabled = false;
    btn.querySelector('.ar').textContent = 'إرسال الطلب';
    btn.querySelector('.en').textContent = 'Submit Application';
  }
  document.getElementById('join-error').style.display = 'none';
}

/* ── Newsletter ─────────────────────────────────────── */
const MAILCHIMP_URL = 'https://aldirwaza.us9.list-manage.com/subscribe/post?u=7d5697319d569f0ce57f52fdc&id=1ca226be48';

async function handleNewsletter(e) {
  e.preventDefault();
  const inp = e.target.querySelector('input[type="email"]');
  const btn = e.target.querySelector('button');
  const email = inp ? inp.value.trim() : '';
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    if (inp) inp.style.borderColor = '#b03030';
    return;
  }
  if (inp) inp.style.borderColor = '';
  const isAr = currentLang === 'ar';
  btn.disabled = true;
  btn.textContent = isAr ? 'جاري الاشتراك...' : 'Subscribing...';
  try {
    const url = MAILCHIMP_URL.replace('/post?', '/post-json?') + '&EMAIL=' + encodeURIComponent(email) + '&c=mailchimpCallback';
    await new Promise((resolve, reject) => {
      const script = document.createElement('script');
      window.mailchimpCallback = (data) => {
        document.body.removeChild(script);
        delete window.mailchimpCallback;
        if (data.result === 'success') resolve();
        else reject(data.msg);
      };
      script.src = url;
      script.onerror = reject;
      document.body.appendChild(script);
    });
    inp.value = '';
    btn.textContent = isAr ? 'تم الاشتراك ✓' : 'Subscribed ✓';
    setTimeout(() => {
      btn.textContent = isAr ? 'اشتراك' : 'Subscribe';
      btn.disabled = false;
    }, 3500);
  } catch (err) {
    btn.disabled = false;
    btn.textContent = isAr ? 'اشتراك' : 'Subscribe';
    const msg = typeof err === 'string' && err.includes('already subscribed')
      ? (isAr ? 'هذا البريد مشترك مسبقاً' : 'Already subscribed')
      : (isAr ? 'حدث خطأ، حاول مرة أخرى' : 'Something went wrong, try again');
    inp.placeholder = msg;
    inp.style.borderColor = '#b03030';
    setTimeout(() => {
      inp.placeholder = isAr ? 'بريدك الإلكتروني' : 'Your email address';
      inp.style.borderColor = '';
    }, 3500);
  }
}

// ── ARTICLE MODAL ─────────────────────────────────────
function openArticle(idx) {
  const w = WORKS[idx];
  const title = t(w.title, w.titleEn || w.title);
  const desc  = t(w.description, w.descEn || w.description);
  const body  = t(w.article || w.description, w.articleEn || w.descEn || w.description);
  const img   = document.getElementById('modal-img');
  const hero  = document.getElementById('modal-hero');
  if(w.image && w.image.trim()) {
    img.src = w.image; img.alt = title;
    hero.style.display = 'block';
  } else {
    hero.style.display = 'none';
  }
  document.getElementById('modal-date').textContent  = w.date || '';
  document.getElementById('modal-title').textContent = title;
  const paragraphs = body.split(/\n+/).filter(p=>p.trim());
  document.getElementById('modal-body').innerHTML = paragraphs.map(p=>`<p>${p}</p>`).join('');
  const overlay = document.getElementById('article-modal');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeArticleBtn() {
  document.getElementById('article-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeArticle(e) {
  if(e.target === document.getElementById('article-modal')) closeArticleBtn();
}

document.addEventListener('keydown', e => {
  if(e.key === 'Escape') closeArticleBtn();
});

// ── INIT ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('aldirwaza-lang') || 'ar';
  setLang(saved);
  showPage('home');
  const sel = document.getElementById('bf-activity');
  if (sel) {
    sel.addEventListener('change', () => {
      const exp = EXPERIENCES.find(e => e.title === sel.value);
      const banner = document.getElementById('bf-unavailable-banner');
      if (!banner) return;
      if (exp && (!exp.available || !exp.dates || exp.dates.length === 0)) {
        banner.textContent = t(
          'هذا النشاط غير متاح للحجز حالياً. تواصل معنا للمزيد.',
          'This activity is not currently available for booking. Contact us for more info.'
        );
        banner.style.display = 'block';
      } else {
        banner.style.display = 'none';
      }
    });
  }

});
