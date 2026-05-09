(function improveProcessSection() {
  const section = document.querySelector('#process');
  if (!section || section.dataset.processImproved === 'true') return;

  section.dataset.processImproved = 'true';

  const style = document.createElement('style');
  style.setAttribute('data-process-section-style', 'true');
  style.textContent = `
    #process {
      overflow: hidden;
      background: var(--color-bg-soft) !important;
    }

    #process .section-heading {
      max-width: none;
      display: grid;
      grid-template-columns: minmax(0, 0.72fr) minmax(280px, 0.42fr);
      gap: clamp(1.5rem, 4vw, 4rem);
      align-items: end;
      margin-bottom: clamp(1.45rem, 3vw, 2.35rem);
    }

    #process .section-heading .eyebrow {
      margin-bottom: 0.62rem !important;
    }

    #process .section-heading h2 {
      max-width: 14ch !important;
      font-size: clamp(3rem, 4.45rem, 4.45rem) !important;
      line-height: 0.94 !important;
      letter-spacing: -0.055em !important;
    }

    #process .section-heading::before {
      content: "A straightforward build flow that keeps every project organized from first brief to final launch.";
      grid-column: 2;
      grid-row: 1 / span 2;
      align-self: end;
      max-width: 32rem;
      color: var(--color-muted);
      font-size: 1rem;
      line-height: 1.75;
      text-transform: none;
      letter-spacing: 0;
      font-family: var(--font-body);
      font-weight: 500;
    }

    #process .process-list {
      position: relative;
      display: grid;
      grid-template-columns: minmax(0, 0.62fr) minmax(320px, 0.38fr);
      gap: clamp(1.5rem, 4vw, 4rem);
      align-items: center;
      border: 1px solid var(--color-border);
      padding: clamp(1rem, 2.6vw, 2rem);
      background: rgba(var(--color-surface-rgb), 0.62);
      box-shadow: 10px 10px 0 rgba(var(--color-accent-rgb), 0.08);
    }

    #process .process-list::before {
      content: "";
      position: absolute;
      inset: 1rem;
      border: 1px solid rgba(var(--color-accent-rgb), 0.1);
      pointer-events: none;
    }

    #process .process-copy-panel {
      position: relative;
      z-index: 1;
      max-width: 680px;
      padding: clamp(1rem, 2vw, 1.5rem);
      opacity: 1;
      transform: translateY(0);
      transition: opacity 520ms ease, transform 520ms cubic-bezier(.16, 1, .3, 1);
    }

    #process .process-copy-panel.is-changing {
      opacity: 0.45;
      transform: translateY(6px);
    }

    #process .process-copy-panel .eyebrow {
      margin-bottom: 0.68rem !important;
    }

    #process .process-copy-panel h3 {
      max-width: 13ch;
      margin: 0;
      font-size: clamp(2.2rem, 4vw, 4rem);
      line-height: 0.92;
      letter-spacing: -0.065em;
    }

    #process .process-copy-panel p {
      max-width: 34rem;
      margin-top: 1.1rem;
      color: var(--color-muted);
      font-size: 1rem;
      line-height: 1.75;
    }

    #process .process-mini-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1.25rem;
      padding: 0;
      list-style: none;
    }

    #process .process-mini-tags li {
      border: 1px solid var(--color-border);
      padding: 0.48rem 0.62rem;
      background: rgba(var(--color-bg-soft-rgb), 0.7);
      color: var(--color-accent-dark);
      font-size: 0.68rem;
      font-weight: 900;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    #process .process-rotator {
      position: relative;
      z-index: 1;
      min-height: 360px;
      display: grid;
      place-items: center stretch;
      overflow: hidden;
      border-left: 1px solid var(--color-border);
      padding: 2.2rem 0 2.2rem clamp(1.25rem, 3vw, 2.25rem);
    }

    #process .process-rotator::before,
    #process .process-rotator::after {
      content: "";
      position: absolute;
      left: clamp(1.25rem, 3vw, 2.25rem);
      right: 0;
      z-index: 2;
      height: 34%;
      pointer-events: none;
    }

    #process .process-rotator::before {
      top: 0;
      background: linear-gradient(180deg, rgba(var(--color-surface-rgb), 0.92), transparent);
    }

    #process .process-rotator::after {
      bottom: 0;
      background: linear-gradient(0deg, rgba(var(--color-surface-rgb), 0.92), transparent);
    }

    #process .process-track {
      display: grid;
      gap: 1rem;
      transform: translate3d(0, var(--process-shift, 0), 0);
      transition: transform 960ms cubic-bezier(.16, 1, .3, 1);
      will-change: transform;
    }

    #process .process-slide {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr);
      gap: 1rem;
      align-items: center;
      min-height: 86px;
      opacity: 0.24;
      transform: scale(0.965);
      transform-origin: left center;
      transition: opacity 760ms ease, transform 760ms cubic-bezier(.16, 1, .3, 1);
      will-change: opacity, transform;
    }

    #process .process-slide.is-active {
      opacity: 1;
      transform: scale(1);
    }

    #process .process-number {
      color: transparent;
      font-family: var(--font-display);
      font-size: clamp(2.8rem, 5vw, 4.8rem);
      font-weight: 900;
      line-height: 0.8;
      letter-spacing: -0.08em;
      -webkit-text-stroke: 1px rgba(var(--color-accent-rgb), 0.72);
      transition: color 760ms ease, -webkit-text-stroke-color 760ms ease;
    }

    #process .process-slide.is-active .process-number {
      color: var(--color-ink);
      -webkit-text-stroke: 0;
    }

    #process .process-slide h4 {
      margin: 0;
      color: var(--color-ink);
      font-family: var(--font-display);
      font-size: clamp(1.15rem, 1.7vw, 1.55rem);
      font-weight: 900;
      line-height: 0.98;
      letter-spacing: -0.045em;
      text-transform: uppercase;
    }

    #process .process-slide p {
      display: none;
    }

    #process .process-controls {
      position: absolute;
      right: 0;
      top: 50%;
      z-index: 3;
      display: grid;
      gap: 0.45rem;
      transform: translateY(-50%);
    }

    #process .process-dot {
      width: 8px;
      height: 8px;
      border: 1px solid rgba(var(--color-accent-rgb), 0.5);
      background: transparent;
      transition: background 360ms ease, transform 360ms ease, border-color 360ms ease;
    }

    #process .process-dot.is-active {
      background: var(--color-accent);
      border-color: var(--color-accent);
      transform: scale(1.25);
    }

    @media (max-width: 900px) {
      #process .section-heading,
      #process .process-list {
        grid-template-columns: 1fr;
      }

      #process .section-heading h2 {
        max-width: 12.5ch !important;
      }

      #process .section-heading::before {
        grid-column: auto;
        grid-row: auto;
      }

      #process .process-rotator {
        min-height: 310px;
        border-left: 0;
        border-top: 1px solid var(--color-border);
        padding: 1.5rem 0 0;
      }

      #process .process-rotator::before,
      #process .process-rotator::after {
        left: 0;
      }
    }
  `;
  document.head.appendChild(style);

  const steps = [...section.querySelectorAll('.process-step')].map((step, index) => ({
    number: step.querySelector('span')?.textContent?.trim() || String(index + 1).padStart(2, '0'),
    title: step.querySelector('h3')?.textContent?.trim() || '',
    text: step.querySelector('p')?.textContent?.trim() || ''
  }));

  if (!steps.length) return;

  const processList = section.querySelector('.process-list');
  if (!processList) return;

  processList.innerHTML = `
    <div class="process-copy-panel">
      <p class="eyebrow">Active Step</p>
      <h3 data-process-active-title>${steps[0].title}</h3>
      <p data-process-active-text>${steps[0].text}</p>
      <ul class="process-mini-tags" aria-label="Process highlights">
        <li>Clear Scope</li>
        <li>Responsive Build</li>
        <li>Launch Ready</li>
      </ul>
    </div>
    <div class="process-rotator" aria-label="Project process steps">
      <div class="process-track" data-process-track>
        ${steps.map((step, index) => `
          <article class="process-slide${index === 0 ? ' is-active' : ''}" data-process-index="${index}">
            <span class="process-number">${step.number}</span>
            <div>
              <h4>${step.title}</h4>
              <p>${step.text}</p>
            </div>
          </article>
        `).join('')}
      </div>
      <div class="process-controls" aria-label="Process slide indicators">
        ${steps.map((_, index) => `<button class="process-dot${index === 0 ? ' is-active' : ''}" type="button" aria-label="Show process step ${index + 1}" data-process-dot="${index}"></button>`).join('')}
      </div>
    </div>
  `;

  const copyPanel = section.querySelector('.process-copy-panel');
  const titleTarget = section.querySelector('[data-process-active-title]');
  const textTarget = section.querySelector('[data-process-active-text]');
  const slides = [...section.querySelectorAll('.process-slide')];
  const dots = [...section.querySelectorAll('.process-dot')];
  const track = section.querySelector('[data-process-track]');
  let activeIndex = 0;
  let intervalId;
  let copyTimer;

  const calculateShift = (index) => {
    if (!track || !slides[index]) return;

    const rotator = section.querySelector('.process-rotator');
    const activeSlide = slides[index];
    const rotatorHeight = rotator?.clientHeight || 360;
    const activeCenter = activeSlide.offsetTop + activeSlide.offsetHeight / 2;
    const targetCenter = rotatorHeight / 2;

    track.style.setProperty('--process-shift', `${targetCenter - activeCenter}px`);
  };

  const updateActiveStep = (index) => {
    activeIndex = (index + steps.length) % steps.length;
    const activeStep = steps[activeIndex];

    if (copyPanel) {
      window.clearTimeout(copyTimer);
      copyPanel.classList.add('is-changing');
      copyTimer = window.setTimeout(() => {
        if (titleTarget) titleTarget.textContent = activeStep.title;
        if (textTarget) textTarget.textContent = activeStep.text;
        copyPanel.classList.remove('is-changing');
      }, 180);
    } else {
      if (titleTarget) titleTarget.textContent = activeStep.title;
      if (textTarget) textTarget.textContent = activeStep.text;
    }

    slides.forEach((slide, slideIndex) => slide.classList.toggle('is-active', slideIndex === activeIndex));
    dots.forEach((dot, dotIndex) => dot.classList.toggle('is-active', dotIndex === activeIndex));
    calculateShift(activeIndex);
  };

  const startRotation = () => {
    if (intervalId || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    intervalId = window.setInterval(() => updateActiveStep(activeIndex + 1), 5600);
  };

  const stopRotation = () => {
    if (!intervalId) return;
    window.clearInterval(intervalId);
    intervalId = null;
  };

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      stopRotation();
      updateActiveStep(Number(dot.dataset.processDot || 0));
      startRotation();
    });
  });

  processList.addEventListener('mouseenter', stopRotation);
  processList.addEventListener('mouseleave', startRotation);
  window.addEventListener('resize', () => calculateShift(activeIndex));

  updateActiveStep(0);
  startRotation();
})();
