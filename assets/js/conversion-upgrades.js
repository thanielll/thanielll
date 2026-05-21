/* conversion-upgrades.js — Cleaned 2026
   Removed: "START" ghost watermark, font-weight:900 overrides,
   flat 10px offset box-shadows, hardcoded warm-orange colors.
   Kept: project inquiry section, mobile sticky CTA, card cleanup. */
(function addConversionUpgrades() {
  if (document.querySelector('[data-conversion-upgrades-style]')) return;

  const style = document.createElement('style');
  style.setAttribute('data-conversion-upgrades-style', 'true');
  style.textContent = `
    .project-inquiry-section {
      position: relative;
      overflow: hidden;
      border-top: 1px solid var(--color-border);
      background: var(--color-bg-soft);
    }

    .project-inquiry-grid {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(300px, 0.44fr);
      gap: clamp(2rem, 5vw, 5rem);
      align-items: center;
    }

    .project-inquiry-copy h2 {
      max-width: 18ch !important;
      font-size: clamp(1.875rem, 3.5vw, 2.75rem);
      line-height: 1.1;
      letter-spacing: -0.03em;
    }

    .project-inquiry-copy > p {
      max-width: 52rem;
      margin-top: 1rem;
      color: var(--color-muted);
      font-size: 0.9625rem;
      line-height: 1.75;
    }

    .project-type-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1.375rem;
      padding: 0;
      list-style: none;
    }

    .project-type-grid li {
      border: 1px solid var(--color-border);
      border-radius: 999px;
      padding: 0.4rem 0.875rem;
      background: var(--color-surface);
      color: var(--color-muted);
      font-size: 0.8rem;
      font-weight: 500;
      letter-spacing: 0;
      text-transform: none;
    }

    .project-inquiry-card {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: clamp(1.375rem, 2.5vw, 1.75rem);
      background: var(--color-surface);
      box-shadow: 0 4px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04);
    }

    .project-inquiry-card h3 {
      margin: 0;
      font-size: clamp(1.25rem, 2vw, 1.5rem) !important;
      font-weight: 700;
      line-height: 1.25 !important;
      letter-spacing: -0.02em !important;
      text-transform: none !important;
      max-width: none;
    }

    .project-inquiry-card p {
      color: var(--color-muted);
      font-size: 0.9rem !important;
      line-height: 1.72 !important;
      margin-top: 0.75rem;
    }

    .project-inquiry-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-top: 1.375rem;
    }

    .mobile-sticky-cta {
      position: fixed;
      left: 16px;
      right: 16px;
      bottom: 16px;
      z-index: 60;
      display: none;
      grid-template-columns: 1fr auto;
      gap: 0.75rem;
      align-items: center;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 0.875rem 1rem;
      background: rgba(255,255,255,0.96);
      box-shadow: 0 8px 32px rgba(0,0,0,0.12);
      backdrop-filter: blur(16px);
      transform: translateY(120%);
      transition: transform 280ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    .mobile-sticky-cta.is-visible {
      transform: translateY(0);
    }

    .mobile-sticky-cta span {
      display: block;
      color: var(--color-muted);
      font-size: 0.72rem;
      font-weight: 500;
      text-transform: none;
    }

    .mobile-sticky-cta strong {
      display: block;
      color: var(--color-text);
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 1.2;
    }

    .mobile-sticky-cta .btn {
      min-height: 44px;
      padding-inline: 1rem;
      white-space: nowrap;
      font-size: 0.8rem;
      border-radius: 999px;
    }

    @media (max-width: 900px) {
      .project-inquiry-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 720px) {
      body {
        padding-bottom: 82px;
      }

      .mobile-sticky-cta {
        display: grid;
      }
    }
  `;
  document.head.appendChild(style);

  const addProjectInquiry = () => {
    const contactSection = document.querySelector('#contact');
    if (!contactSection || document.querySelector('[data-project-inquiry-section]')) return;

    contactSection.insertAdjacentHTML('beforebegin', `
      <section class="section project-inquiry-section" aria-labelledby="project-inquiry-title" data-project-inquiry-section>
        <div class="container project-inquiry-grid">
          <div class="project-inquiry-copy">
            <p class="eyebrow">Project Inquiry</p>
            <h2 id="project-inquiry-title">Start With the Right Website Support</h2>
            <p>Not every project needs the same kind of help. Choose the type of support you need and send me a quick message so we can map out the best next step.</p>
            <ul class="project-type-grid" aria-label="Common project types">
              <li>Website Design</li>
              <li>Figma to WordPress</li>
              <li>Elementor Fixes</li>
              <li>Landing Page</li>
              <li>Website Redesign</li>
            </ul>
          </div>
          <aside class="project-inquiry-card">
            <p class="eyebrow">Available</p>
            <h3>Selected WordPress / Elementor Projects</h3>
            <p>Send a short brief, link, or mockup. I can help with clean layout execution, responsive improvements, Elementor builds, and SEO-friendly page structure.</p>
            <div class="project-inquiry-actions">
              <a class="btn btn-primary" href="mailto:freelancer.rnathaniel@gmail.com?subject=Website%20Project%20Inquiry">Start a Project</a>
              <a class="btn btn-secondary" href="https://wa.me/639752445048" target="_blank" rel="noopener">WhatsApp</a>
            </div>
          </aside>
        </div>
      </section>
    `);
  };

  const cleanCaseCards = () => {
    document.querySelectorAll('.case-card, .project-card').forEach((card) => {
      card.querySelectorAll('.case-preview-badge, .before-after-strip').forEach((el) => el.remove());
    });
  };

  const addMobileStickyCta = () => {
    if (document.querySelector('.mobile-sticky-cta')) return;
    document.body.insertAdjacentHTML('beforeend', `
      <aside class="mobile-sticky-cta" aria-label="Quick project inquiry">
        <div>
          <span>Available for selected projects</span>
          <strong>Need WordPress help?</strong>
        </div>
        <a class="btn btn-primary" href="mailto:freelancer.rnathaniel@gmail.com?subject=Website%20Project%20Inquiry">Start</a>
      </aside>
    `);

    const sticky = document.querySelector('.mobile-sticky-cta');
    const footer = document.querySelector('.site-footer');
    const updateSticky = () => {
      if (!sticky) return;
      const pastHero = window.scrollY > 520;
      const nearFooter = footer ? footer.getBoundingClientRect().top < window.innerHeight : false;
      sticky.classList.toggle('is-visible', pastHero && !nearFooter);
    };
    updateSticky();
    window.addEventListener('scroll', updateSticky, { passive: true });
  };

  addProjectInquiry();
  cleanCaseCards();
  addMobileStickyCta();

  const projectGrid = document.querySelector('[data-featured-projects], [data-case-study-grid]');
  if (projectGrid) {
    new MutationObserver(() => cleanCaseCards()).observe(projectGrid, { childList: true, subtree: true });
  }
})();
