(function portfolioPolishEnhancements() {
  const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const style = document.createElement('style');
  style.setAttribute('data-portfolio-polish', 'true');
  style.textContent = `
    .hero-featured-card {
      position: relative;
      overflow: hidden;
      display: grid;
      gap: 1.2rem;
      align-self: center;
      border: 1px solid var(--color-border);
      padding: clamp(1.25rem, 3vw, 1.8rem);
      background: linear-gradient(180deg, rgba(var(--color-surface-rgb), 0.96), rgba(255, 248, 239, 0.88));
      box-shadow: 14px 14px 0 rgba(var(--color-accent-rgb), 0.1);
      isolation: isolate;
    }

    .hero-featured-card::before {
      content: "";
      position: absolute;
      inset: 1rem;
      z-index: -1;
      border: 1px solid rgba(var(--color-accent-rgb), 0.13);
      pointer-events: none;
    }

    .hero-featured-card::after {
      content: "";
      position: absolute;
      top: -70px;
      right: -70px;
      width: 180px;
      height: 180px;
      z-index: -2;
      border: 1px solid rgba(var(--color-accent-rgb), 0.18);
      transform: rotate(16deg);
    }

    .hero-featured-thumb {
      position: relative;
      overflow: hidden;
      border: 1px solid var(--color-border);
      background: var(--color-bg-alt);
      aspect-ratio: 16 / 10;
    }

    .hero-featured-thumb img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      filter: grayscale(0.05) sepia(0.06) contrast(1.02);
      transition: transform 420ms ease, filter 420ms ease;
    }

    .hero-featured-card:hover .hero-featured-thumb img,
    .hero-featured-card:focus-within .hero-featured-thumb img {
      transform: scale(1.035);
      filter: grayscale(0) sepia(0.04) contrast(1.04);
    }

    .hero-featured-kicker,
    .case-meta-list span,
    .footer-brand-lockup span {
      color: var(--color-accent-dark);
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .hero-featured-card h2 {
      max-width: 12ch;
      margin: 0;
      color: var(--color-ink);
      font-family: var(--font-display);
      font-size: clamp(1.8rem, 3vw, 2.8rem);
      line-height: 0.94;
      letter-spacing: -0.055em;
      text-transform: uppercase;
    }

    .hero-featured-card p {
      margin: 0;
      color: var(--color-muted);
      font-size: 0.96rem;
      line-height: 1.65;
    }

    .hero-featured-meta {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      border: 1px solid var(--color-border);
      background: rgba(var(--color-surface-rgb), 0.62);
    }

    .hero-featured-meta span {
      padding: 0.82rem;
      color: var(--color-ink);
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .hero-featured-meta span + span {
      border-left: 1px solid var(--color-border);
    }

    .case-meta-list {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 0;
      margin: 1.15rem 0 0;
      border: 1px solid var(--color-border);
      background: rgba(var(--color-bg-soft-rgb), 0.74);
    }

    .case-meta-list li {
      display: grid;
      gap: 0.32rem;
      padding: 0.82rem;
      border: 0;
      background: transparent !important;
      list-style: none;
    }

    .case-meta-list li + li {
      border-left: 1px solid var(--color-border);
    }

    .case-meta-list strong {
      color: var(--color-ink);
      font-size: 0.78rem;
      line-height: 1.35;
    }

    .footer-brand-lockup {
      display: inline-flex;
      align-items: center;
      gap: 0.9rem;
      margin-bottom: 0.9rem;
      color: var(--color-ink);
      text-decoration: none;
    }

    .footer-brand-logo {
      width: 46px;
      height: 46px;
      display: grid;
      place-items: center;
      border: 1px solid var(--color-ink);
      padding: 0.34rem;
      background: var(--color-ink);
      box-shadow: 6px 6px 0 rgba(var(--color-accent-rgb), 0.14);
    }

    .footer-brand-logo img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: contain;
      filter: brightness(0) invert(1);
    }

    .footer-brand-lockup strong {
      display: block;
      margin-top: 0.18rem;
      font-family: var(--font-display);
      font-size: 1.05rem;
      line-height: 1;
      letter-spacing: -0.035em;
      text-transform: uppercase;
    }

    @media (max-width: 900px) {
      .hero-featured-card {
        margin-top: 0.5rem;
      }

      .case-meta-list {
        grid-template-columns: 1fr;
      }

      .case-meta-list li + li,
      .hero-featured-meta span + span {
        border-left: 0;
        border-top: 1px solid var(--color-border);
      }

      .hero-featured-meta {
        grid-template-columns: 1fr;
      }
    }
  `;
  document.head.appendChild(style);

  const getFeaturedStudy = () => {
    if (!Array.isArray(window.caseStudies) || !window.caseStudies.length) return null;
    return window.caseStudies.find((study) => study.slug === 'consilium-dynamics-website-redesign') || window.caseStudies.find((study) => study.featured) || window.caseStudies[0];
  };

  const escapeText = (value) => String(value || '').replace(/[&<>'"]/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#039;',
    '"': '&quot;'
  }[char]));

  const enhanceHero = () => {
    const heroPanel = document.querySelector('.hero-accent');
    const study = getFeaturedStudy();
    if (!heroPanel || !study || heroPanel.classList.contains('hero-featured-card')) return;

    heroPanel.className = 'hero-featured-card';
    heroPanel.innerHTML = `
      <a class="hero-featured-thumb" href="${escapeText(study.link)}" aria-label="View ${escapeText(study.title)} case study">
        <img src="${escapeText(study.image || 'assets/images/Nathaniel%20Logo.png')}" alt="${escapeText(study.title)} preview" loading="eager">
      </a>
      <div>
        <span class="hero-featured-kicker">Featured Case Study</span>
        <h2>${escapeText(study.title.replace(' Website Redesign', ''))}</h2>
      </div>
      <p>${escapeText(study.summary)}</p>
      <div class="hero-featured-meta" aria-label="Featured project details">
        <span>${escapeText(study.projectType || study.category)}</span>
        <span>${escapeText((study.tools || []).slice(0, 2).join(' / ') || 'WordPress / Elementor')}</span>
      </div>
      <a class="btn btn-dark" href="${escapeText(study.link)}">View Case Study</a>
    `;
  };

  const enhanceCaseCards = () => {
    document.querySelectorAll('.case-card').forEach((card) => {
      if (card.querySelector('.case-meta-list')) return;

      const title = card.querySelector('h2')?.textContent?.trim();
      const study = Array.isArray(window.caseStudies) ? window.caseStudies.find((item) => item.title === title) : null;
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
    document.querySelectorAll('.footer-intro').forEach((footerIntro) => {
      const currentBrand = footerIntro.querySelector('.footer-brand');
      if (!currentBrand || footerIntro.querySelector('.footer-brand-lockup')) return;

      currentBrand.outerHTML = `
        <a class="footer-brand-lockup" href="index.html#home" aria-label="Nathaniel Rodriguez home">
          <span class="footer-brand-logo"><img src="assets/images/Nathaniel%20Logo.png" alt="Nathaniel Rodriguez logo"></span>
          <span><span>Portfolio</span><strong>Nathaniel Rodriguez</strong></span>
        </a>
      `;
    });
  };

  const runEnhancements = () => {
    enhanceHero();
    enhanceCaseCards();
    enhanceFooterBranding();
  };

  runEnhancements();

  const caseGrid = document.querySelector('[data-case-study-grid]');
  if (caseGrid) {
    const observer = new MutationObserver(() => enhanceCaseCards());
    observer.observe(caseGrid, { childList: true, subtree: true });
  }

  if (hasFinePointer) {
    document.addEventListener('pointermove', () => enhanceCaseCards(), { once: true, passive: true });
  }
})();
