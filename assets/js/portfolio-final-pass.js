(function portfolioFinalPass() {
  if (document.querySelector('[data-portfolio-final-pass]')) return;

  const style = document.createElement('style');
  style.setAttribute('data-portfolio-final-pass', 'true');
  style.textContent = `
    .proof-strip {
      border-top: 1px solid var(--color-border);
      border-bottom: 1px solid var(--color-border);
      background: rgba(var(--color-surface-rgb), 0.56);
    }

    .proof-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 0;
    }

    .proof-item {
      min-height: 132px;
      display: grid;
      align-content: space-between;
      gap: 1rem;
      border-right: 1px solid var(--color-border);
      padding: clamp(1rem, 2vw, 1.35rem);
    }

    .proof-item:first-child {
      border-left: 1px solid var(--color-border);
    }

    .proof-item span {
      color: var(--color-accent-dark);
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .proof-item strong {
      color: var(--color-ink);
      font-family: var(--font-display);
      font-size: clamp(1.25rem, 1.8vw, 1.75rem);
      line-height: 0.98;
      letter-spacing: -0.045em;
      text-transform: uppercase;
    }

    .hero-availability {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 1.1rem;
      color: var(--color-accent-dark);
      font-size: 0.76rem;
      font-weight: 900;
      letter-spacing: 0.055em;
      text-transform: uppercase;
    }

    .hero-availability::before {
      content: "";
      width: 8px;
      height: 8px;
      background: var(--color-accent);
      box-shadow: 0 0 0 5px rgba(var(--color-accent-rgb), 0.1);
    }

    .service-card .service-meta {
      display: block;
      margin-bottom: 0.55rem;
      color: var(--color-accent-dark);
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .service-card p {
      line-height: 1.62;
    }

    .about-copy .human-note {
      margin-top: 1.1rem;
      border-left: 2px solid rgba(var(--color-accent-rgb), 0.5);
      padding-left: 1rem;
      color: var(--color-ink);
      font-weight: 700;
    }

    .page-load-ready body {
      animation: pageSoftIn 420ms ease both;
    }

    @keyframes pageSoftIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 900px) {
      .proof-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .proof-item:nth-child(2) {
        border-right: 1px solid var(--color-border);
      }
    }

    @media (max-width: 620px) {
      .hero h1,
      .page-hero h1,
      .case-hero h1 {
        font-size: clamp(3rem, 16vw, 4.5rem) !important;
      }

      .section {
        padding-block: clamp(4rem, 14vw, 5.5rem) !important;
      }

      .proof-grid {
        grid-template-columns: 1fr;
      }

      .proof-item,
      .proof-item:first-child {
        border-left: 1px solid var(--color-border);
        border-right: 1px solid var(--color-border);
        border-bottom: 1px solid var(--color-border);
      }
    }
  `;
  document.head.appendChild(style);

  document.documentElement.classList.add('page-load-ready');

  const refineHero = () => {
    const heroText = document.querySelector('.hero-text');
    const heroActions = document.querySelector('.hero-actions');

    if (heroText) {
      heroText.textContent = 'I build clean, responsive WordPress websites for businesses and agencies using Elementor Pro, Figma, and SEO-friendly page structure.';
    }

    if (heroActions && !document.querySelector('.hero-availability')) {
      heroActions.insertAdjacentHTML('afterend', '<p class="hero-availability">Available for selected WordPress / Elementor projects</p>');
    }
  };

  const addProofStrip = () => {
    const valueStrip = document.querySelector('.value-strip');
    if (!valueStrip || document.querySelector('.proof-strip')) return;

    valueStrip.insertAdjacentHTML('beforebegin', `
      <section class="proof-strip" aria-label="Portfolio proof points">
        <div class="container proof-grid">
          <article class="proof-item"><span>Upwork Feedback</span><strong>5.0 Client Review</strong></article>
          <article class="proof-item"><span>Recent Project</span><strong>Premium Redesign Build</strong></article>
          <article class="proof-item"><span>Workflow</span><strong>Figma to Elementor</strong></article>
          <article class="proof-item"><span>Support</span><strong>Agency Collaboration</strong></article>
        </div>
      </section>
    `);
  };

  const refineAbout = () => {
    const aboutCopy = document.querySelector('.about-copy');
    const credentials = document.querySelector('.credential-row');
    if (!aboutCopy || !credentials || aboutCopy.querySelector('.human-note')) return;

    credentials.insertAdjacentHTML('beforebegin', '<p class="human-note">I like building websites that feel polished on the front end and easy to manage behind the scenes.</p>');
  };

  const refineServices = () => {
    const services = [
      {
        meta: 'Figma / Elementor',
        title: 'Figma to Elementor Builds',
        text: 'Convert approved mockups into clean, responsive WordPress pages with editable Elementor Pro sections.'
      },
      {
        meta: 'Redesign Support',
        title: 'WordPress Website Redesigns',
        text: 'Refresh outdated websites with stronger hierarchy, cleaner layouts, better spacing, and clearer conversion paths.'
      },
      {
        meta: 'Service Pages',
        title: 'Landing Pages for Service Businesses',
        text: 'Create focused pages for enquiries, campaigns, offers, and local service-based businesses.'
      },
      {
        meta: 'SEO / Polish',
        title: 'Elementor Fixes & Responsive Polish',
        text: 'Improve existing Elementor pages with mobile refinements, cleaner structure, and SEO-friendly page formatting.'
      }
    ];

    document.querySelectorAll('.service-card').forEach((card, index) => {
      const service = services[index];
      if (!service) return;

      const heading = card.querySelector('h3');
      const text = card.querySelector('p');
      const number = card.querySelector('span');

      if (heading) heading.textContent = service.title;
      if (text) text.textContent = service.text;
      if (number && !card.querySelector('.service-meta')) {
        number.insertAdjacentHTML('afterend', `<strong class="service-meta">${service.meta}</strong>`);
      }
    });
  };

  const updateConsiliumLinks = () => {
    const oldLink = 'case-study-dental-practice-website.html?project=consilium-dynamics-website-redesign';
    document.querySelectorAll(`a[href="${oldLink}"]`).forEach((link) => {
      link.setAttribute('href', 'case-study-consilium-dynamics.html');
    });
  };

  refineHero();
  addProofStrip();
  refineAbout();
  refineServices();
  updateConsiliumLinks();

  const featuredGrid = document.querySelector('[data-featured-projects], [data-case-study-grid]');
  if (featuredGrid) {
    const observer = new MutationObserver(updateConsiliumLinks);
    observer.observe(featuredGrid, { childList: true, subtree: true });
  }
})();
