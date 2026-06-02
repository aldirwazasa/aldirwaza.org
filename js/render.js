/**
 * ═══════════════════════════════════════════════════════
 *  ALDIRWAZA — RENDERER
 *  Reads data/content.js and builds all page content.
 *  You never need to edit this file to update content.
 * ═══════════════════════════════════════════════════════
 */

/* ── Shared SVG icon for missing image ─────────────── */
function imgPh(label) {
  return `<div class="img-ph">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
      <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </svg>
    <span>${label}</span>
  </div>`;
}

function imgOrPh(src, alt) {
  if (!src || src.trim() === '') return imgPh(alt);
  return `<img src="${src}" alt="${alt}" loading="lazy" />`;
}

/* ── Hero gallery ──────────────────────────────────── */
function renderHeroGallery() {
  const el = document.getElementById('hero-gallery');
  if (!el || !HERO_GALLERY) return;
  el.innerHTML = HERO_GALLERY.map(src => `
    <div class="gallery-item" onclick="showPage('tours')">
      <img src="${src}" alt="القطيف" />
    </div>`).join('');
}

/* ── Experience cards ──────────────────────────────── */
function experienceCard(exp) {
  const badgeClass = exp.status === 'coming-soon' ? 'badge-soon'
                   : exp.type === 'tour'           ? 'badge-tour'
                   :                                  'badge-experience';
  const badgeLabel = exp.status === 'coming-soon' ? 'قريباً'
                   : exp.type === 'tour'           ? 'جولة'
                   :                                  'تجربة';
  const btn = exp.status === 'coming-soon'
    ? `<button class="btn btn-outline btn-sm" onclick="showPage('booking')">ابق على اطلاع</button>`
    : `<button class="btn btn-primary btn-sm" onclick="showPage('booking')">احجز الآن</button>`;

  const priceHtml = exp.price ? `<span class="card-price">${exp.price}</span>` : '';
  const durHtml   = exp.duration ? `<span class="card-tag">${exp.duration}</span>` : `<span class="card-tag">${exp.tag}</span>`;

  return `<div class="card">
    <div class="card-img">
      ${imgOrPh(exp.image, exp.title)}
      <span class="card-badge ${badgeClass}">${badgeLabel}</span>
    </div>
    <div class="card-body">
      <div class="card-location">${exp.location}</div>
      <h3 class="card-title">${exp.title}</h3>
      <p class="card-desc">${exp.description}</p>
      <div class="card-meta">
        ${durHtml}
        <div style="display:flex;align-items:center;gap:.5rem;">${priceHtml}${btn}</div>
      </div>
    </div>
  </div>`;
}

function renderExperiencesFull() {
  const tours = EXPERIENCES.filter(e => e.type === 'tour');
  const exps  = EXPERIENCES.filter(e => e.type === 'experience');

  const tEl = document.getElementById('tours-list');
  const eEl = document.getElementById('experiences-list');
  if (tEl) tEl.innerHTML = tours.map(experienceCard).join('');
  if (eEl) eEl.innerHTML = exps.map(experienceCard).join('');
}

function renderHomeFeatured() {
  const el = document.getElementById('home-featured');
  if (!el) return;
  // Show first 4 active
  const featured = EXPERIENCES.filter(e => e.status === 'active').slice(0, 4);
  el.innerHTML = featured.map(experienceCard).join('');
}

/* ── Booking activity dropdown ─────────────────────── */
function renderBookingDropdown() {
  const sel = document.getElementById('bf-activity');
  if (!sel) return;
  const active = EXPERIENCES.filter(e => e.status === 'active');
  sel.innerHTML = `<option value="">اختر النشاط</option>` +
    active.map(e => `<option value="${e.title}">${e.type === 'tour' ? 'جولة: ' : 'تجربة: '}${e.title}</option>`).join('');
}

/* ── Landmarks ─────────────────────────────────────── */
function renderLandmarks() {
  const el = document.getElementById('landmarks-list');
  if (!el) return;
  el.innerHTML = LANDMARKS.map((lm, i) => `
    <div class="landmark-item reveal ${i % 2 !== 0 ? 'flip' : ''}">
      <div class="landmark-img">${imgOrPh(lm.image, lm.title)}</div>
      <div class="landmark-text">
        <h3>${lm.title}</h3>
        <p>${lm.description}</p>
        <span class="landmark-loc">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          ${lm.location}
        </span>
      </div>
    </div>`).join('');
}

/* ── Team ───────────────────────────────────────────── */
function teamCard(m) {
  return `<div class="team-card">
    <div class="team-photo">${imgOrPh(m.image, m.name)}</div>
    <div class="team-info">
      <div class="team-name">${m.name}</div>
      <div class="team-role">${m.role}</div>
      <p class="team-bio">${m.bio}</p>
    </div>
  </div>`;
}
function renderTeam() {
  const ex = document.getElementById('team-executives');
  const mb = document.getElementById('team-members');
  if (ex) ex.innerHTML = TEAM_EXECUTIVES.map(teamCard).join('');
  if (mb) mb.innerHTML = TEAM_MEMBERS.map(teamCard).join('');
}

/* ── Works ──────────────────────────────────────────── */
function renderWorks() {
  const el = document.getElementById('works-list');
  if (!el) return;
  el.innerHTML = WORKS.map(w => `
    <div class="work-card reveal">
      <div class="work-img">${imgOrPh(w.image, w.title)}</div>
      <div class="work-body">
        <div class="work-date">${w.date}</div>
        <h3 class="work-title">${w.title}</h3>
        <p class="work-desc">${w.description}</p>
      </div>
    </div>`).join('');
}

/* ── Master init ────────────────────────────────────── */
function renderAll() {
  renderHeroGallery();
  renderHomeFeatured();
  renderExperiencesFull();
  renderBookingDropdown();
  renderLandmarks();
  renderTeam();
  renderWorks();
}
