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
  const bookTxt = e.status==='coming-soon' ? t('ابق على اطلاع','Notify Me') : t('احجز الآن','Book Now');
  const btnCls  = e.status==='coming-soon' ? 'btn btn-outline btn-sm' : 'btn btn-primary btn-sm';
  return `<div class="card"><div class="card-img">${imgOrPh(e.image,title)}<span class="card-badge ${bc}">${bl}</span></div><div class="card-body"><div class="card-location">${loc}</div><h3 class="card-title">${title}</h3><p class="card-desc">${desc}</p><div class="card-meta"><span class="card-tag">${tag}</span>${e.price?`<span style="font-size:.82rem;color:var(--olive)">${e.price}</span>`:''}<button class="${btnCls}" onclick="showPage('booking')">${bookTxt}</button></div></div></div>`;
}

function teamCard(m) {
  const name = t(m.name, m.nameEn || m.name);
  const role = t(m.role, m.roleEn || m.role);
  const bio  = t(m.bio,  m.bioEn  || m.bio);
  const flipHint = t('اضغط لرؤية السيرة','Click to flip');
  return `<div class="team-card" onclick="this.classList.toggle('flipped')" title="${flipHint}">
    <div class="team-card-inner">
      <div class="team-card-front">
        <div class="team-photo">${imgOrPh(m.image,name)}</div>
        <div class="team-info" style="padding:.9rem 1.1rem 1.1rem">
          <div class="team-name">${name}</div>
          <div class="team-role">${role}</div>
          <div style="font-size:.7rem;color:var(--stone);margin-top:.5rem;opacity:.7">⟳ ${flipHint}</div>
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

  // Booking dropdown
  const sel = document.getElementById('bf-activity');
  if(sel) {
    const placeholder = t('اختر النشاط', 'Select an activity');
    sel.innerHTML = `<option value="">${placeholder}</option>` +
      EXPERIENCES.filter(e=>e.status==='active').map(e=>{
        const prefix = e.type==='tour' ? t('جولة: ','Tour: ') : t('تجربة: ','Experience: ');
        const name   = t(e.title, e.titleEn||e.title);
        return `<option value="${e.title}">${prefix}${name}</option>`;
      }).join('');
  }
}

// ── NAV ──────────────────────────────────────────────
const PAGES = ['home','about','tours','landmarks','booking','works','contact'];

function showPage(id) {
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

// ── FORMS ─────────────────────────────────────────────
const FORMSPREE_BOOKING = 'YOUR_FORMSPREE_ID';
const FORMSPREE_CONTACT = 'YOUR_FORMSPREE_ID';
const FORMSPREE_BASE = 'https://formspree.io/f/';

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
  fd.append('name',name);fd.append('email',email);fd.append('phone',phone);
  fd.append('activity',activity);fd.append('date',date);fd.append('time',time);
  fd.append('notes',document.getElementById('bf-notes').value);
  fd.append('language', currentLang);
  const allergy=document.querySelector('input[name="allergy"]:checked');
  if(allergy) fd.append('allergy',allergy.value==='yes'?document.getElementById('bf-allergy-text').value:'No');
  const sources=[...document.querySelectorAll('.bf-source:checked')].map(c=>c.value);
  fd.append('source',sources.join(', ')||'N/A');
  const receipt=document.getElementById('bf-receipt').files[0];
  if(receipt) fd.append('receipt',receipt);
  if(FORMSPREE_BOOKING!=='YOUR_FORMSPREE_ID') {
    try{
      const res=await fetch(FORMSPREE_BASE+FORMSPREE_BOOKING,{method:'POST',body:fd,headers:{'Accept':'application/json'}});
      if(!res.ok) throw new Error();
    }catch{
      btn.disabled=false;
      btn.querySelector('.ar').textContent='أرسل الحجز';
      btn.querySelector('.en').textContent='Submit Booking';
      errEl.textContent=t('حدث خطأ، يرجى المحاولة مرة أخرى.','An error occurred, please try again.');
      errEl.style.display='block';return;
    }
  }
  document.getElementById('booking-form-container').style.display='none';
  document.getElementById('booking-success').style.display='block';
}

function resetBooking() {
  document.getElementById('booking-form-container').style.display='block';
  document.getElementById('booking-success').style.display='none';
  ['bf-name','bf-email','bf-phone','bf-date','bf-notes','bf-allergy-text'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  ['bf-activity','bf-time'].forEach(id=>{const el=document.getElementById(id);if(el)el.selectedIndex=0;});
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
  if(FORMSPREE_CONTACT!=='YOUR_FORMSPREE_ID') {
    try{
      const res=await fetch(FORMSPREE_BASE+FORMSPREE_CONTACT,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({name,email,message:msg,language:currentLang})});
      if(!res.ok) throw new Error();
    }catch{
      btn.disabled=false;
      btn.querySelector('.ar').textContent='إرسال الرسالة';
      btn.querySelector('.en').textContent='Send Message';
      errEl.textContent=t('حدث خطأ، يرجى المحاولة مرة أخرى.','An error occurred, please try again.');
      errEl.style.display='block';return;
    }
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

function handleNewsletter(e) {
  e.preventDefault();
  const forms=e.target.parentElement.querySelectorAll('form');
  forms.forEach(f=>{
    const btn=f.querySelector('button');
    const inp=f.querySelector('input');
    if(btn){btn.textContent=currentLang==='ar'?'تم الاشتراك':'Subscribed!';btn.disabled=true;}
    if(inp){inp.value='';}
    setTimeout(()=>{if(btn){btn.textContent=currentLang==='ar'?'اشتراك':'Subscribe';btn.disabled=false;}},3500);
  });
  const btn=e.target.querySelector('button');
  const inp=e.target.querySelector('input');
  if(btn){btn.textContent=currentLang==='ar'?'تم الاشتراك':'Subscribed!';btn.disabled=true;}
  if(inp){inp.value='';}
  setTimeout(()=>{if(btn){btn.textContent=currentLang==='ar'?'اشتراك':'Subscribe';btn.disabled=false;}},3500);
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
  // Support multi-paragraph: split on newline
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
  const today=new Date().toISOString().split('T')[0];
  const d=document.getElementById('bf-date');
  if(d) d.min=today;
});
