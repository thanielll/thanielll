(function improveBestForSection() {
  const section = document.querySelector('.best-for-section');
  if (!section || section.dataset.bestForImproved === 'true') return;

  section.dataset.bestForImproved = 'true';

  const style = document.createElement('style');
  style.setAttribute('data-best-for-section-style', 'true');
  style.textContent = `
    .best-for-section {
      overflow: hidden;
    }

    .best-for-section .section-heading.heading-split {
      display: grid;
      grid-template-columns: minmax(0, 0.72fr) minmax(320px, 0.42fr);
      gap: clamp(1.5rem, 4vw, 4rem);
      align-items: end;
      margin-bottom: clamp(1.6rem, 4vw, 3rem);
    }

    .best-for-section .section-heading h2 {
      max-width: 9.5ch;
      font-size: clamp(3rem, 6.2vw, 6.2rem);
      line-height: 0.9;
      letter-spacing: -0.075em;
    }

    .best-for-section .section-heading > p {
      max-width: 30rem;
      color: var(--color-muted);
      font-size: 1rem;
      line-height: 1.72;
    }

    .best-for-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      border: 1px solid var(--color-border);
      background: rgba(var(--color-surface-rgb), 0.42);
    }

    .best-for-grid article {
      min-height: 230px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.4rem;
      border: 0 !important;
      border-right: 1px solid var(--color-border) !important;
      padding: clamp(1rem, 2vw, 1.35rem);
      background: rgba(var(--color-surface-rgb), 0.55) !important;
      box-shadow: none !important;
      transition: transform 180ms ease, background 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
    }

    .best-for-grid article:last-child {
      border-right: 0 !important;
    }

    .best-for-grid article:hover,
    .best-for-grid article:focus-within {
      z-index: 1;
      background: rgba(var(--color-surface-rgb), 0.92) !important;
      box-shadow: 8px 8px 0 rgba(var(--color-accent-rgb), 0.1) !important;
      transform: translate(-2px, -2px);
    }

    .best-for-grid span {
      color: var(--color-muted);
      font-size: 0.82rem;
      font-weight: 900;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .best-for-grid h3 {
      max-width: 11rem;
      margin: 0;
      color: var(--color-ink);
      font-size: clamp(1.04rem, 1.45vw, 1.32rem);
      line-height: 0.98;
      letter-spacing: -0.045em;
      text-transform: uppercase;
    }

    .best-for-grid p {
      margin: 0.75rem 0 0;
      color: var(--color-muted);
      font-size: 0.88rem;
      line-height: 1.55;
      text-transform: none;
      letter-spacing: 0;
      font-weight: 500;
    }

    @media (max-width: 1050px) {
      .best-for-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .best-for-grid article:nth-child(2) {
        border-right: 0 !important;
      }

      .best-for-grid article:nth-child(-n + 2) {
        border-bottom: 1px solid var(--color-border) !important;
      }
    }

    @media (max-width: 820px) {
      .best-for-section .section-heading.heading-split {
        grid-template-columns: 1fr;
        align-items: start;
      }

      .best-for-section .section-heading h2 {
        max-width: 10.5ch;
      }
    }

    @media (max-width: 620px) {
      .best-for-grid {
        grid-template-columns: 1fr;
      }

      .best-for-grid article,
      .best-for-grid article:nth-child(2) {
        min-height: auto;
        border-right: 0 !important;
        border-bottom: 1px solid var(--color-border) !important;
      }

      .best-for-grid article:last-child {
        border-bottom: 0 !important;
      }
    }
  `;
  document.head.appendChild(style);

  const heading = section.querySelector('#best-for-title');
  const introText = section.querySelector('.section-heading > p');
  const cards = section.querySelectorAll('.best-for-grid article');

  if (heading) heading.textContent = 'Built for the Teams I Help Most';
  if (introText) {
    introText.textContent = 'I support agencies, local businesses, and service-based brands that need clean WordPress design, Elementor development, and reliable website execution.';
  }

  const cardContent = [
    {
      title: 'Agencies',
      text: 'Elementor support, page builds, redesign assistance, and overflow production work.'
    },
    {
      title: 'Local Service Businesses',
      text: 'Clean, conversion-focused websites for businesses that need a stronger online presence.'
    },
    {
      title: 'Dental & Healthcare Websites',
      text: 'Structured service pages with trust-focused layouts and SEO-friendly content flow.'
    },
    {
      title: 'Landing Pages & Redesigns',
      text: 'Focused pages built around clear messaging, responsive structure, and better enquiries.'
    }
  ];

  cards.forEach((card, index) => {
    const content = cardContent[index];
    if (!content) return;

    card.setAttribute('data-pointer-reactive', 'true');
    card.innerHTML = `
      <span>${String(index + 1).padStart(2, '0')}</span>
      <div>
        <h3>${content.title}</h3>
        <p>${content.text}</p>
      </div>
    `;
  });
})();
