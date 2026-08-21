/**
 * ═══════════════════════════════════════════════════════
 *  ALDIRWAZA — FORMS
 *  All submissions go to Netlify Forms.
 *  View them in your Netlify dashboard under "Forms".
 *  Set up email notifications in:
 *  Site settings → Forms → Form notifications
 *
 *  NOTE: submitBooking, submitContact, submitJoin,
 *  resetBooking, resetContact, resetJoin live in app.js
 *  since they need bilingual support via t() and currentLang.
 *  This file contains only shared helpers.
 * ═══════════════════════════════════════════════════════
 */

/* ── Netlify submission helper ──────────────────────── */
async function submitToNetlify(formName, fd) {
  const res = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(fd).toString()
  });
  if (!res.ok) throw new Error('Netlify submission failed');
}

/* ── Booking helpers ────────────────────────────────── */
function toggleAllergyField(show) {
  const el = document.getElementById('bf-allergy-detail');
  if (el) el.style.display = show ? 'block' : 'none';
}

function countWords(el) {
  const words = el.value.trim() === '' ? 0 : el.value.trim().split(/\s+/).length;
  const counter = document.getElementById('jf-wordcount');
  if (counter) {
    counter.textContent = words + ' / 100';
    counter.style.color = words > 100 ? '#b03030' : 'var(--stone)';
  }
  if (words > 100) {
    el.value = el.value.trim().split(/\s+/).slice(0, 100).join(' ');
    if (counter) counter.textContent = '100 / 100';
  }
}

/* ── Newsletter ─────────────────────────────────────── */
const MAILCHIMP_URL = 'https://aldirwaza.us9.list-manage.com/subscribe/post?u=7d5697319d569f0ce57f52fdc&id=1ca226be48';

async function handleNewsletter(e) {
  e.preventDefault();
  const inp   = e.target.querySelector('input[type="email"]');
  const btn   = e.target.querySelector('button');
  const email = inp ? inp.value.trim() : '';

  if (!email || !isValidEmail(email)) {
    if (inp) inp.style.borderColor = '#b03030';
    return;
  }
  if (inp) inp.style.borderColor = '';

  const isAr = typeof currentLang !== 'undefined' ? currentLang === 'ar' : true;
  btn.disabled = true;
  btn.textContent = isAr ? 'جاري الاشتراك...' : 'Subscribing...';

  try {
    const url = MAILCHIMP_URL.replace('/post?', '/post-json?') +
      '&EMAIL=' + encodeURIComponent(email) + '&c=mailchimpCallback';

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
    if (inp) {
      inp.placeholder = msg;
      inp.style.borderColor = '#b03030';
      setTimeout(() => {
        inp.placeholder = isAr ? 'بريدك الإلكتروني' : 'Your email address';
        inp.style.borderColor = '';
      }, 3500);
    }
  }
}

/* ── Shared helpers ─────────────────────────────────── */
function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function showFormError(form, msg) {
  const el = document.getElementById(form + '-error');
  if (el) { el.textContent = msg; el.style.display = 'block'; }
}

function clearFormError(form) {
  const el = document.getElementById(form + '-error');
  if (el) { el.textContent = ''; el.style.display = 'none'; }
}
