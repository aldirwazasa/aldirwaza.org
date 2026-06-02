/**
 * ═══════════════════════════════════════════════════════
 *  ALDIRWAZA — NAVIGATION & PAGE ROUTING
 * ═══════════════════════════════════════════════════════
 */

const NAV_PAGES = ['home', 'about', 'tours', 'landmarks', 'booking', 'works', 'contact'];

function showPage(id) {
  // Hide all pages
  NAV_PAGES.forEach(p => {
    const pg  = document.getElementById('page-' + p);
    const btn = document.getElementById('nav-' + p);
    if (pg)  pg.classList.remove('active');
    if (btn) btn.classList.remove('active');
  });

  // Show target
  const pg  = document.getElementById('page-' + id);
  const btn = document.getElementById('nav-' + id);
  if (pg)  pg.classList.add('active');
  if (btn) btn.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
  initReveal();           // re-run scroll-reveal on the new page
  renderAll();            // ensure dynamic content is rendered
}

/* ── Mobile nav ─────────────────────────────────────── */
function toggleMobileNav() {
  document.getElementById('mobile-nav').classList.toggle('open');
}
function closeMobileNav() {
  document.getElementById('mobile-nav').classList.remove('open');
}

/* ── Scroll-reveal observer ─────────────────────────── */
function initReveal() {
  const els = document.querySelectorAll('.page.active .reveal:not(.visible)');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

/* ── Init on load ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  showPage('home');

  // Set minimum date for booking calendar to today
  const today = new Date().toISOString().split('T')[0];
  const dateEl = document.getElementById('bf-date');
  if (dateEl) dateEl.min = today;
});
