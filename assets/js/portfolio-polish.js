/* portfolio-polish.js — Cleaned 2026
   Removed: hardcoded warm rgba(255,248,239), flat 14px offset shadows,
   font-weight:900, text-transform:uppercase overrides.
   Kept: hero featured card wiring, footer branding, case meta list. */
(function portfolioPolishEnhancements() {
  if (document.querySelector('[data-portfolio-polish]')) return;

  const style = document.createElement('style');
  style.setAttribute('data-portfolio-polish', 'true');
  style.textContent = `
    .hero-featured-card {
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-self: center;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      background: var(--color-surface);
      box-shadow: 0 4px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04);
      transition: box-shadow 240ms ease, transform 240ms ease;
    }

    .hero-featured-card:hover {
      box-shadow: 0 12px 32px rgba(0,0,0,0.09), 0 4px 8px rgba(0,0,0,0.04);
      transform: translateY(-2px);
    }

    .hero-featured-thumb {
      display: block;
      overflow: hidden;
      border-bottom: 1px solid var(--color-border);
      border-radius: 12px 12px 0 0;
      aspect-ratio: 16 / 10;
    }

    .hero-featured-thumb img {
      width: 100%; height: 100%;
      display: block;
      object-fit: cover;
      transition: transform 420ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    .hero-featured-card:hover .hero-featured-thumb img {
      transform: scale(1.04);
    }

    .hero-featured-card > div {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1.125rem 1.25rem 0;
    }

    .hero-featured-kicker {
      display: inline-block;
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--color-accent);
      background: var(--color-accent-soft);
      padding: 0.25rem 0.625rem;
      border-radius: 999px;
    }

    .hero-featured-card h2 {
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: -0.01em;
      text-transform: none;
      margin: 0;
      color: var(--color-text);
    }

    .hero-featured-card > p {
      margin: 0;
      color: var(--color-muted);
      font-size: 0.875rem;
      line-height: 1.65;
      padding: 0.625rem 1.25rem 0;
    }

    .hero-featured-meta {
      display: flex;
      gap: 0.375rem;
      flex-wrap: wrap;
      padding: 0.75rem 1.25rem 0;
    }

    .hero-featured-meta span {
      font-size: 0.7rem;
      font-weight: 600;
      color: var(--color-muted);
      background: var(--color-bg-soft);
      border: 1px solid var(--color-border);
      border-radius: 4px;
      padding: 0.2rem 0.5rem;
      text-transform: none;
      letter-spacing: 0;
    }

    .hero-featured-card > .btn {
      display: flex;
      margin: 1rem 1.25rem 1.25rem;
      width: calc(100% - 2.5rem);
      justify-content: center;
    }

    .case-meta-list {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 0;
      margin: 1rem 0 0;
      border: 1px solid var(--color-border);
      border-radius: 8px;
      overflow: hidden;
      background: var(--color-bg-soft);
    }

    .case-meta-list li {
      display: grid;
      gap: 0.25rem;
      padding: 0.75rem;
      list-style: none;
    }

    .case-meta-list li + li {
      border-left: 1px solid var(--color-border);
    }

    .case-meta-list span {
      color: var(--color-muted-soft);
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.07em;
      text-transform: uppercase;
    }

    .case-meta-list strong {
      color: var(--color-text);
      font-size: 0.8rem;
      font-weight: 600;
      line-height: 1.3;
    }

    .footer-brand-lockup {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.75rem;
      color: var(--color-text);
      text-decoration: none;
      transition: opacity 150ms ease;
    }

    .footer-brand-lockup:hover { opacity: 0.8; }

    .footer-brand-logo {
      width: 40px; height: 40px;
      display: grid;
      place-items: center;
      border-radius: 8px;
      padding: 0.3rem;
      background: var(--color-text);
    }

    .footer-brand-logo img {
      width: 100%; height: 100%;
      display: block;
      object-fit: contain;
      filter: brightness(0) invert(1);
    }

    .footer-brand-lockup strong {
      display: block;
      font-family: var(--font-display);
      font-size: 0.9375rem;
      font-weight: 800;
      line-height: 1;
      letter-spacing: -0.01em;
      text-transform: none;
    }

    .footer-brand-lockup span > span {
      display: block;
      font-size: 0.7rem;
      font-weight: 600;
      color: var(--color-muted);
      text-transform: uppercase;
      letter-spacing: 0.07em;
    }

    @media (max-width: 940px) {
      .hero-featured-card { display: none; }
    }

    @media (max-width: 900px) {
      .case-meta-list { grid-template-columns: 1fr; }
      .case-meta-list li + li { border-left: 0; border-top: 1px solid var(--color-border); }
    }
  `;
  document.head.appendChild(style);

  const getFeaturedStudy = () => {
    if (!Array.isArray(window.caseStudies) || !window.caseStudies.length) return null;
    return (
      window.caseStudies.find((s) => s.slug === 'consilium-dynamics-website-redesign') ||
      window.caseStudies.find((s) => s.featured) ||
      window.caseStudies[0]
    );
  };

  const escapeText = (v) => String(v || '').replace(/[&<>'"]/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[c]
  ));

  const enhanceHero = () => {
    const heroPanel = document.querySelector('.hero-accent');
    const study = getFeaturedStudy();
    if (!heroPanel || !study || heroPanel.classList.contains('hero-featured-card')) return;

    heroPanel.className = 'hero-featured-card';
    heroPanel.innerHTML = `
      <a class="hero-featured-thumb" href="${escapeText(study.link)}" aria-label="View ${escapeText(study.title)} case study">
        <img src="${escapeText(study.image || '')}" alt="${escapeText(study.title)} preview" loading="eager">
      </a>
      <div>
        <span class="hero-featured-kicker">Featured Case Study</span>
        <h2>${escapeText(study.title.replace(' Website Redesign', ''))}</h2>
      </div>
      <p>${escapeText(study.summary)}</p>
      <div class="hero-featured-meta">
        <span>${escapeText(study.projectType || study.category)}</span>
        <span>${escapeText((study.tools || []).slice(0, 2).join(' / ') || 'WordPress / Elementor')}</span>
      </div>
      <a class="btn btn-primary" href="${escapeText(study.link)}">View Case Study</a>
    `;
  };

  const enhanceCaseCards = () => {
    document.querySelectorAll('.case-card').forEach((card) => {
      if (card.querySelector('.case-meta-list')) return;
      const title = card.querySelector('h2')?.textContent?.trim();
      const study = Array.isArray(window.caseStudies)
        ? window.caseStudies.find((s) => s.title === title) : null;
      const body = card.querySelector('.case-card-body');
      const tags = body?.querySelector('ul');
      if (!body || !study || !tags) return;

      const meta = document.createElement('ul');
      meta.className = 'case-meta-list';
      meta.setAttribute('aria-label', 'Project quick details');
      meta.innerHTML = `
        <li><span>Role</span><strong>${escapeText(study.role || 'UI/UX + WordPress')}</strong></li>
        <li><span>Platform</span><strong>${escapeText(study.tags?.includes('WooCommerce') ? 'WooCommerce' : 'WordPress')}</strong></li>
        <li><span>Type</span><strong>${escapeText(study.projectType || study.category)}</strong></li>
      `;
      tags.insertAdjacentElement('afterend', meta);
    });
  };

  const enhanceFooterBranding = () => {
    document.querySelectorAll('.footer-intro').forEach((intro) => {
      const brand = intro.querySelector('.footer-brand');
      if (!brand || intro.querySelector('.footer-brand-lockup')) return;
      brand.outerHTML = `
        <a class="footer-brand-lockup" href="index.html#home" aria-label="Nathaniel Rodriguez home">
          <span class="footer-brand-logo"><img src="assets/images/Nathaniel%20Logo.png" alt="Nathaniel Rodriguez logo"></span>
          <span><span>Portfolio</span><strong>Nathaniel Rodriguez</strong></span>
        </a>
      `;
    });
  };

  const run = () => {
    enhanceHero();
    enhanceCaseCards();
    enhanceFooterBranding();
  };

  run();

  const grid = document.querySelector('[data-case-study-grid]');
  if (grid) new MutationObserver(enhanceCaseCards).observe(grid, { childList: true, subtree: true });
})();
