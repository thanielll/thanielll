(function improveBestForSection() {
  const section = document.querySelector('.best-for-section');
  if (!section || section.dataset.bestForImproved === 'true') return;

  section.dataset.bestForImproved = 'true';

  const style = document.createElement('style');
  style.setAttribute('data-best-for-section-style', 'true');
  style.textContent = `
    .best-for-section {
      overflow: hidden;
      background: var(--color-bg) !important;
    }

    .best-for-section .section-heading.heading-split {
      display: grid;
      grid-template-columns: minmax(0, 0.75fr) minmax(280px, 0.45fr);
      gap: clamp(1.4rem, 4vw, 4rem);
      align-items: end;
      margin-bottom: clamp(1.4rem, 3vw, 2.2rem);
    }

    .best-for-section .section-heading h2 {
      max-width: 13ch;
      font-size: clamp(2.25rem, 4.2vw, 4.4rem);
      line-height: 0.98;
      letter-spacing: -0.06em;
    }

    .best-for-section .section-heading > p {
      max-width: 31rem;
      color: var(--color-muted);
      font-size: 1rem;
      line-height: 1.75;
    }

    .best-for-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
      border: 0;
      background: transparent;
    }

    .best-for-grid article {
      position: relative;
      min-height: 156px;
      display: grid;
      grid-template-columns: auto minmax(0, 1fr);
      gap: 1rem;
      align-items: start;
      border: 1px solid var(--color-border) !important;
      padding: clamp(1rem, 2vw, 1.35rem);
      background: rgba(var(--color-surface-rgb), 0.58) !important;
      box-shadow: none !important;
      transition: transform 180ms ease, background 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
    }

    .best-for-grid article::after {
      content: "";
      position: absolute;
      right: 1rem;
      bottom: 1rem;
      width: 28px;
      height: 28px;
      border-right: 1px solid rgba(var(--color-accent-rgb), 0.18);
      border-bottom: 1px solid rgba(var(--color-accent-rgb), 0.18);
      pointer-events: none;
    }

    .best-for-grid article:hover,
    .best-for-grid article:focus-within {
      z-index: 1;
      border-color: rgba(var(--color-accent-rgb), 0.45) !important;
      background: rgba(var(--color-surface-rgb), 0.94) !important;
      box-shadow: 7px 7px 0 rgba(var(--color-accent-rgb), 0.09) !important;
      transform: translate(-2px, -2px);
    }

    .best-for-grid .best-for-number {
      width: 42px;
      height: 42px;
      display: grid;
      place-items: center;
      border: 1px solid rgba(var(--color-accent-rgb), 0.28);
      color: var(--color-accent-dark);
      font-size: 0.76rem;
      font-weight: 900;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      background: rgba(var(--color-bg-soft-rgb), 0.75);
    }

    .best-for-grid h3 {
      max-width: none;
      margin: 0;
      color: var(--color-ink);
      font-size: clamp(1.04rem, 1.35vw, 1.28rem);
      line-height: 1.03;
      letter-spacing: -0.04em;
      text-transform: uppercase;
    }

    .best-for-grid p {
      max-width: 32rem;
      margin: 0.6rem 0 0;
      color: var(--color-muted);
      font-size: 0.9rem;
      line-height: 1.58;
      text-transform: none;
      letter-spacing: 0;
      font-weight: 500;
    }

    .best-for-summary {
      display: flex;
      flex-wrap: wrap;
      gap: 0.55rem;
      margin: 1.35rem 0 0;
      padding: 0;
      list-style: none;
    }

    .best-for-summary li {
      border: 1px solid var(--color-border);
      padding: 0.5rem 0.65rem;
      background: rgba(var(--color-surface-rgb), 0.65);
      color: var(--color-accent-dark);
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.035em;
      text-transform: uppercase;
    }

    @media (max-width: 900px) {
      .best-for-section .section-heading.heading-split {
        grid-template-columns: 1fr;
        align-items: start;
      }

      .best-for-section .section-heading h2 {
        max-width: 12ch;
      }
    }

    @media (max-width: 720px) {
      .best-for-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 520px) {
      .best-for-grid article {
        grid-template-columns: 1fr;
      }
    }
  `;
  document.head.appendChild(style);

  const heading = section.querySelector('#best-for-title');
  const introText = section.querySelector('.section-heading > p');
  const cards = section.querySelectorAll('.best-for-grid article');

  if (heading) heading.textContent = 'Who I Work Best With';
  if (introText) {
    introText.textContent = 'Practical WordPress and Elementor support for teams that need clean execution, clear communication, and pages that are easy to manage after launch.';

    if (!introText.parentElement.querySelector('.best-for-summary')) {
      introText.insertAdjacentHTML('afterend', `
        <ul class="best-for-summary" aria-label="Support highlights">
          <li>Elementor Builds</li>
          <li>Responsive Layouts</li>
          <li>SEO-Friendly Structure</li>
        </ul>
      `);
    }
  }

  const cardContent = [
    {
      title: 'Agencies',
      text: 'Overflow Elementor support, page builds, redesign assistance, and reliable production work when your team needs extra hands.'
    },
    {
      title: 'Local Service Businesses',
      text: 'Clean, conversion-focused websites for businesses that need a stronger online presence and clearer enquiry paths.'
    },
    {
      title: 'Dental & Healthcare Websites',
      text: 'Structured service pages with trust-focused layouts, patient-friendly content flow, and SEO-conscious page organization.'
    },
    {
      title: 'Landing Pages & Redesigns',
      text: 'Focused pages built around clear messaging, responsive structure, stronger visual hierarchy, and better enquiries.'
    }
  ];

  cards.forEach((card, index) => {
    const content = cardContent[index];
    if (!content) return;

    card.setAttribute('data-pointer-reactive', 'true');
    card.innerHTML = `
      <span class="best-for-number">${String(index + 1).padStart(2, '0')}</span>
      <div>
        <h3>${content.title}</h3>
        <p>${content.text}</p>
      </div>
    `;
  });
})();
