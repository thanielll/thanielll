(function addConversionUpgrades() {
  if (document.querySelector('[data-conversion-upgrades-style]')) return;

  const style = document.createElement('style');
  style.setAttribute('data-conversion-upgrades-style', 'true');
  style.textContent = `
    .project-inquiry-section {
      position: relative;
      overflow: hidden;
      border-top: 1px solid var(--color-border);
      background:
        radial-gradient(circle at 12% 18%, rgba(var(--color-accent-rgb), 0.055) 0 1px, transparent 1.5px),
        linear-gradient(90deg, rgba(var(--color-accent-rgb), 0.03) 1px, transparent 1px),
        linear-gradient(rgba(var(--color-accent-rgb), 0.03) 1px, transparent 1px),
        var(--color-bg-soft);
      background-size: 22px 22px, 92px 92px, 92px 92px, auto;
    }

    .project-inquiry-section::before {
      content: "START";
      position: absolute;
      top: 42px;
      right: max(22px, calc((100% - var(--container)) / 2));
      z-index: 0;
      color: transparent;
      font-family: var(--font-display);
      font-size: clamp(4.5rem, 12vw, 10rem);
      font-weight: 900;
      line-height: 0.8;
      letter-spacing: -0.075em;
      -webkit-text-stroke: 1px rgba(var(--color-accent-rgb), 0.09);
      text-transform: uppercase;
      pointer-events: none;
    }

    .project-inquiry-grid {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(320px, 0.44fr);
      gap: clamp(1.5rem, 4vw, 4rem);
      align-items: center;
    }

    .project-inquiry-copy h2 {
      max-width: 16ch !important;
      font-size: clamp(3rem, 4.45rem, 4.45rem);
      line-height: 0.94;
      letter-spacing: -0.055em;
    }

    .project-inquiry-copy > p {
      max-width: 56rem;
      margin-top: 1.15rem;
      color: var(--color-muted);
      font-size: 1rem;
      line-height: 1.75;
    }

    .project-type-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 0.55rem;
      margin-top: 1.35rem;
      padding: 0;
      list-style: none;
    }

    .project-type-grid li {
      border: 1px solid var(--color-border);
      padding: 0.55rem 0.7rem;
      background: rgba(var(--color-surface-rgb), 0.7);
      color: var(--color-accent-dark);
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.035em;
      text-transform: uppercase;
    }

    .project-inquiry-card {
      position: relative;
      display: grid;
      gap: 1rem;
      border: 1px solid var(--color-border);
      padding: clamp(1.15rem, 2.4vw, 1.65rem);
      background: rgba(var(--color-surface-rgb), 0.88);
      box-shadow: 10px 10px 0 rgba(var(--color-accent-rgb), 0.08);
    }

    .project-inquiry-card::after {
      content: "";
      position: absolute;
      right: 1rem;
      top: 1rem;
      width: 34px;
      height: 34px;
      border-top: 1px solid rgba(var(--color-accent-rgb), 0.24);
      border-right: 1px solid rgba(var(--color-accent-rgb), 0.24);
      pointer-events: none;
    }

    .project-inquiry-card h3 {
      margin: 0;
      max-width: 11ch;
      font-size: clamp(1.55rem, 2.4vw, 2.3rem);
      line-height: 0.95;
      letter-spacing: -0.055em;
    }

    .project-inquiry-card p {
      color: var(--color-muted);
      line-height: 1.7;
    }

    .project-inquiry-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-top: 0.25rem;
    }

    .case-card.is-consilium-highlight .project-preview,
    .project-card.is-consilium-highlight .project-preview {
      min-height: 310px;
    }

    .mobile-sticky-cta {
      position: fixed;
      left: 12px;
      right: 12px;
      bottom: 12px;
      z-index: 60;
      display: none;
      grid-template-columns: 1fr auto;
      gap: 0.75rem;
      align-items: center;
      border: 1px solid rgba(var(--color-accent-rgb), 0.35);
      padding: 0.72rem;
      background: rgba(var(--color-surface-rgb), 0.94);
      box-shadow: 0 18px 42px rgba(69, 43, 31, 0.16);
      backdrop-filter: blur(16px);
      transform: translateY(120%);
      transition: transform 260ms ease;
    }

    .mobile-sticky-cta.is-visible {
      transform: translateY(0);
    }

    .mobile-sticky-cta span {
      display: block;
      color: var(--color-muted);
      font-size: 0.68rem;
      font-weight: 900;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .mobile-sticky-cta strong {
      display: block;
      color: var(--color-ink);
      font-size: 0.88rem;
      font-weight: 900;
      line-height: 1.2;
    }

    .mobile-sticky-cta .btn {
      min-height: 42px;
      padding-inline: 0.85rem;
      white-space: nowrap;
      font-size: 0.76rem;
    }

    @media (max-width: 900px) {
      .project-inquiry-grid {
        grid-template-columns: 1fr;
      }

      .project-inquiry-copy h2 {
        max-width: 13ch !important;
      }
    }

    @media (max-width: 720px) {
      body {
        padding-bottom: 74px;
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

          <aside class="project-inquiry-card" data-pointer-reactive>
            <p class="eyebrow">Available</p>
            <h3>Selected WordPress / Elementor Projects</h3>
            <p>Send a short brief, link, or mockup. I can help with clean layout execution, responsive improvements, Elementor builds, and SEO-friendly page structure.</p>
            <div class="project-inquiry-actions">
              <a class="btn btn-dark" href="mailto:freelancer.rnathaniel@gmail.com?subject=Website%20Project%20Inquiry">Start a Project</a>
              <a class="btn btn-light" href="https://wa.me/639752445048" target="_blank" rel="noopener">WhatsApp</a>
            </div>
          </aside>
        </div>
      </section>
    `);
  };

  const cleanCaseCards = () => {
    const cards = document.querySelectorAll('.case-card, .project-card');

    cards.forEach((card) => {
      const title = card.querySelector('h2, h3')?.textContent?.trim() || '';
      const isConsilium = title.includes('Consilium Dynamics');

      card.querySelectorAll('.case-preview-badge, .before-after-strip').forEach((item) => item.remove());

      if (isConsilium) {
        card.classList.add('is-consilium-highlight');
      }
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
        <a class="btn btn-dark" href="mailto:freelancer.rnathaniel@gmail.com?subject=Website%20Project%20Inquiry">Start</a>
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
    window.addEventListener('resize', updateSticky);
  };

  addProjectInquiry();
  cleanCaseCards();
  addMobileStickyCta();

  const projectGrid = document.querySelector('[data-featured-projects], [data-case-study-grid]');
  if (projectGrid) {
    const observer = new MutationObserver(() => cleanCaseCards());
    observer.observe(projectGrid, { childList: true, subtree: true });
  }
})();
