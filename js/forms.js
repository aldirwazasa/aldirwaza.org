/**
 * ═══════════════════════════════════════════════════════
 *  ALDIRWAZA — FORMS
 *  All submissions go to Netlify Forms.
 *  View them in your Netlify dashboard under "Forms".
 *  Set up email notifications in:
 *  Site settings → Forms → Form notifications
 * ═══════════════════════════════════════════════════════
 */

/* ── Instead of Formspree IDs ──────────────────── */
async function submitToNetlify(formName, fd) {
  const res = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(fd).toString()
  });
  if (!res.ok) throw new Error('Netlify submission failed');
}

/* ── Booking form ───────────────────────────────────── */
function toggleAllergyField(show) {
  document.getElementById('bf-allergy-detail').style.display = show ? 'block' : 'none';
}

async function submitBooking() {
  const name     = document.getElementById('bf-name').value.trim();
  const email    = document.getElementById('bf-email').value.trim();
  const phone    = document.getElementById('bf-phone').value.trim();
  const activity = document.getElementById('bf-activity').value;
  const date     = document.getElementById('bf-date').value;
  const time     = document.getElementById('bf-time').value;

  if (!name || !email || !phone || !activity || !date || !time) {
    showFormError('booking', 'يرجى تعبئة جميع الحقول الإلزامية');
    return;
  }
  if (!isValidEmail(email)) {
    showFormError('booking', 'يرجى إدخال بريد إلكتروني صحيح');
    return;
  }

  const submitBtn = document.getElementById('booking-submit-btn');
  submitBtn.disabled = true;
  submitBtn.textContent = 'جاري الإرسال...';

  // Build form data (supports file upload via Formspree)
  const fd = new FormData();
  fd.append('name',     name);
  fd.append('email',    email);
  fd.append('phone',    phone);
  fd.append('activity', activity);
  fd.append('date',     date);
  fd.append('time',     time);
  fd.append('notes',    document.getElementById('bf-notes').value);

  const allergy = document.querySelector('input[name="allergy"]:checked');
  if (allergy) {
    fd.append('allergy', allergy.value === 'yes'
      ? document.getElementById('bf-allergy-text').value
      : 'لا');
  }

  const sources = [...document.querySelectorAll('.bf-source:checked')].map(c => c.value);
  fd.append('source', sources.join(', ') || 'غير محدد');

  const receipt = document.getElementById('bf-receipt').files[0];
  if (receipt) fd.append('receipt', receipt);

  try {
    fd.append('form-name', 'booking');
    const res = await fetch('/', { method: 'POST', body: fd });
    if (!res.ok) throw new Error('server error');
  } catch (err) {
    submitBtn.disabled = false;
    submitBtn.textContent = 'أرسل الحجز';
    showFormError('booking', 'حدث خطأ، يرجى المحاولة مرة أخرى أو التواصل عبر واتساب.');
    return;
  }

  // Show success
  document.getElementById('booking-form-container').style.display = 'none';
  document.getElementById('booking-success').style.display = 'block';
}

function resetBooking() {
  document.getElementById('booking-form-container').style.display = 'block';
  document.getElementById('booking-success').style.display = 'none';
  const ids = ['bf-name','bf-email','bf-phone','bf-date','bf-notes','bf-allergy-text'];
  ids.forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  const actEl  = document.getElementById('bf-activity');
  const timeEl = document.getElementById('bf-time');
  if (actEl)  actEl.selectedIndex  = 0;
  if (timeEl) timeEl.selectedIndex = 0;
  const submitBtn = document.getElementById('booking-submit-btn');
  if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'أرسل الحجز'; }
  clearFormError('booking');
}

/* ── Contact form ───────────────────────────────────── */
async function submitContact() {
  const name  = document.getElementById('cf-name').value.trim();
  const email = document.getElementById('cf-email').value.trim();
  const msg   = document.getElementById('cf-msg').value.trim();

  if (!name || !email || !msg) {
    showFormError('contact', 'يرجى تعبئة جميع الحقول الإلزامية');
    return;
  }
  if (!isValidEmail(email)) {
    showFormError('contact', 'يرجى إدخال بريد إلكتروني صحيح');
    return;
  }

  const btn = document.getElementById('contact-submit-btn');
  btn.disabled = true;
  btn.textContent = 'جاري الإرسال...';

  try {
    const fd = new FormData();
    fd.append('form-name', 'contact');
    fd.append('name', name);
    fd.append('email', email);
    fd.append('message', msg);
    await submitToNetlify('contact', fd);
  } catch {
    btn.disabled = false;
    btn.textContent = 'إرسال الرسالة';
    showFormError('contact', 'حدث خطأ، يرجى المحاولة مرة أخرى.');
    return;
  }

  document.getElementById('contact-form-content').style.display = 'none';
  document.getElementById('contact-success').style.display = 'block';
}

function resetContact() {
  document.getElementById('contact-form-content').style.display = 'block';
  document.getElementById('contact-success').style.display = 'none';
  ['cf-name','cf-email','cf-msg'].forEach(id => { const el = document.getElementById(id); if(el) el.value=''; });
  const btn = document.getElementById('contact-submit-btn');
  if (btn) { btn.disabled = false; btn.textContent = 'إرسال الرسالة'; }
  clearFormError('contact');
}

/* ── Join form ──────────────────────────────────────── */
async function submitJoin() {
  const firstName = document.getElementById('jf-firstname').value.trim();
  const lastName  = document.getElementById('jf-lastname').value.trim();
  const age       = document.getElementById('jf-age').value.trim();
  const phone     = document.getElementById('jf-phone').value.trim();
  const team      = document.getElementById('jf-team').value;
  const why       = document.getElementById('jf-why').value.trim();

  if (!firstName || !lastName || !age || !phone || !team || !why) {
    showFormError('join', 'يرجى تعبئة جميع الحقول الإلزامية');
    return;
  }
  const words = why.split(/\s+/).length;
  if (words > 100) {
    showFormError('join', 'يرجى الالتزام بـ ١٠٠ كلمة كحد أقصى');
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
    await submitToNetlify('join', fd);
  } catch {
    btn.disabled = false;
    btn.querySelector('.ar').textContent = 'إرسال الطلب';
    btn.querySelector('.en').textContent = 'Submit Application';
    showFormError('join', 'حدث خطأ، يرجى المحاولة مرة أخرى.');
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
  clearFormError('join');
}

/* ── Newsletter ─────────────────────────────────────── */
const MAILCHIMP_URL = 'https://aldirwaza.us9.list-manage.com/subscribe/post?u=7d5697319d569f0ce57f52fdc&id=1ca226be48'; // paste your URL from Step 2

async function handleNewsletter(e) {
  e.preventDefault();
  const inp = e.target.querySelector('input[type="email"]');
  const btn = e.target.querySelector('button');
  const email = inp ? inp.value.trim() : '';

  if (!email || !isValidEmail(email)) {
    inp.style.borderColor = '#b03030';
    return;
  }
  inp.style.borderColor = '';

  const isAr = currentLang === 'ar';
  btn.disabled = true;
  btn.textContent = isAr ? 'جاري الاشتراك...' : 'Subscribing...';

  try {
    // Mailchimp requires JSONP for cross-origin requests from the browser
    // Replace /post? with /post-json? and add &c=? for JSONP
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
    // Show friendly error — common case is already subscribed
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

/* ── Helpers ─────────────────────────────────────────── */
function isValidEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

function showFormError(form, msg) {
  const el = document.getElementById(form + '-error');
  if (el) { el.textContent = msg; el.style.display = 'block'; }
}
function clearFormError(form) {
  const el = document.getElementById(form + '-error');
  if (el) { el.textContent = ''; el.style.display = 'none'; }
}
