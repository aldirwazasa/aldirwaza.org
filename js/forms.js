/**
 * ═══════════════════════════════════════════════════════
 *  ALDIRWAZA — FORMS
 *
 *  BOOKING DATA STORAGE — HOW IT WORKS:
 *  All form submissions are sent to Formspree.io, a secure
 *  third-party service. You:
 *    1. Create a free account at https://formspree.io
 *    2. Create a new form there → copy the form ID
 *    3. Paste it below as FORMSPREE_BOOKING_ID
 *    4. View all submissions at formspree.io/dashboard
 *       — downloadable as CSV, email notifications, etc.
 *
 *  PAYMENT GATEWAY (future):
 *  When you're ready to integrate payments, replace the
 *  "payment-gateway-placeholder" div in booking.html with
 *  the payment provider's widget (e.g. HyperPay, Moyasar).
 *  The form structure is already prepared for this.
 *  All form fields use `name` attributes compatible with
 *  standard payment gateway pre-auth flows.
 *
 *  SECURITY:
 *  - Forms use HTTPS-only submission (Formspree enforces this)
 *  - File upload (receipt) is handled via Formspree's file API
 *  - No sensitive data is stored in the browser
 *  - When you add a payment gateway, use their hosted fields
 *    so card data never touches your server
 * ═══════════════════════════════════════════════════════
 */

/* ── CONFIGURE YOUR FORM IDs HERE ──────────────────── */
const FORMSPREE_BOOKING_ID = 'YOUR_FORMSPREE_ID';   // ← replace
const FORMSPREE_CONTACT_ID = 'YOUR_FORMSPREE_ID';   // ← replace (can be same form)

const FORMSPREE_BASE = 'https://formspree.io/f/';

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

  // If Formspree ID is set, send; otherwise simulate
  if (FORMSPREE_BOOKING_ID !== 'YOUR_FORMSPREE_ID') {
    try {
      const res = await fetch(FORMSPREE_BASE + FORMSPREE_BOOKING_ID, {
        method: 'POST',
        body: fd,
        headers: { 'Accept': 'application/json' }
      });
      if (!res.ok) throw new Error('server error');
    } catch (err) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'أرسل الحجز';
      showFormError('booking', 'حدث خطأ، يرجى المحاولة مرة أخرى أو التواصل عبر واتساب.');
      return;
    }
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

  if (FORMSPREE_CONTACT_ID !== 'YOUR_FORMSPREE_ID') {
    try {
      const res = await fetch(FORMSPREE_BASE + FORMSPREE_CONTACT_ID, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name, email, message: msg })
      });
      if (!res.ok) throw new Error('server error');
    } catch {
      btn.disabled = false;
      btn.textContent = 'إرسال الرسالة';
      showFormError('contact', 'حدث خطأ، يرجى المحاولة مرة أخرى.');
      return;
    }
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

/* ── Newsletter ─────────────────────────────────────── */
function handleNewsletter(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  const inp = e.target.querySelector('input');
  btn.textContent = 'تم الاشتراك';
  btn.disabled = true;
  inp.value = '';
  setTimeout(() => { btn.textContent = 'اشتراك'; btn.disabled = false; }, 3500);
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
