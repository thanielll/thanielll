(function setupPointerEffect() {
  const canUsePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!canUsePointer || prefersReducedMotion || window.__nrPointerEffectLoaded) return;
  window.__nrPointerEffectLoaded = true;

  const style = document.createElement('style');
  style.setAttribute('data-pointer-effect', 'true');
  style.textContent = `
    .pointer-dot,
    .pointer-ring {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 2147483647;
      pointer-events: none;
      opacity: 0;
      transform: translate3d(-50%, -50%, 0);
      transition: opacity 160ms ease, width 180ms ease, height 180ms ease, border-color 180ms ease, background 180ms ease, box-shadow 180ms ease;
      will-change: transform;
      contain: layout paint style;
    }

    .pointer-dot {
      width: 6px;
      height: 6px;
      background: var(--color-accent, #e94b35);
      box-shadow: 0 0 0 1px rgba(255, 253, 247, 0.35);
    }

    .pointer-ring {
      width: 34px;
      height: 34px;
      border: 1px solid rgba(var(--color-accent-rgb, 233, 75, 53), 0.58);
      background: rgba(var(--color-accent-rgb, 233, 75, 53), 0.035);
      box-shadow: 0 0 0 1px rgba(255, 253, 247, 0.28) inset;
    }

    body.pointer-active .pointer-dot,
    body.pointer-active .pointer-ring {
      opacity: 1;
    }

    body.pointer-on-link .pointer-dot {
      width: 8px;
      height: 8px;
      background: var(--color-ink, #1d1b1b);
    }

    body.pointer-on-link .pointer-ring {
      width: 48px;
      height: 48px;
      border-color: rgba(var(--color-accent-rgb, 233, 75, 53), 0.8);
      background: rgba(var(--color-accent-rgb, 233, 75, 53), 0.07);
    }

    body.pointer-down .pointer-ring {
      width: 28px;
      height: 28px;
    }

    [data-pointer-reactive] {
      transform: translate3d(var(--pointer-x, 0), var(--pointer-y, 0), 0);
      transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
      will-change: transform;
    }
  `;
  document.head.appendChild(style);

  const dot = document.createElement('span');
  const ring = document.createElement('span');
  dot.className = 'pointer-dot';
  ring.className = 'pointer-ring';
  document.body.append(dot, ring);

  const interactiveSelector = 'a, button, .project-card, .case-card, .service-card, .channel-card, .case-media-card, .case-pdf-card, .filter-chip, .project-inquiry-card, .best-for-grid article, .testimonial-card';
  const reactiveSelector = '.project-card, .case-card, .service-card, .channel-card, .case-media-card, .case-pdf-card, .project-inquiry-card, .best-for-grid article, .testimonial-card';

  const setReactiveItems = () => {
    document.querySelectorAll(reactiveSelector).forEach((item) => {
      if (!item.hasAttribute('data-pointer-reactive')) {
        item.setAttribute('data-pointer-reactive', 'true');
      }

      if (!item.__nrPointerLeaveBound) {
        item.addEventListener('pointerleave', () => resetReactive(item));
        item.__nrPointerLeaveBound = true;
      }
    });
  };

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  const movePointer = () => {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

    requestAnimationFrame(movePointer);
  };

  function resetReactive(target) {
    target.style.setProperty('--pointer-x', '0px');
    target.style.setProperty('--pointer-y', '0px');
  }

  const handlePointerMove = (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    document.body.classList.add('pointer-active');

    const interactive = event.target.closest(interactiveSelector);
    document.body.classList.toggle('pointer-on-link', Boolean(interactive));

    const reactive = event.target.closest('[data-pointer-reactive]');
    if (!reactive) return;

    const rect = reactive.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const offsetX = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
    const offsetY = ((event.clientY - rect.top) / rect.height - 0.5) * 8;

    reactive.style.setProperty('--pointer-x', `${offsetX}px`);
    reactive.style.setProperty('--pointer-y', `${offsetY}px`);
  };

  window.addEventListener('pointermove', handlePointerMove, { passive: true, capture: true });
  document.addEventListener('pointermove', handlePointerMove, { passive: true, capture: true });

  document.addEventListener('pointerleave', () => {
    document.body.classList.remove('pointer-active', 'pointer-on-link', 'pointer-down');
  });

  document.addEventListener('pointerdown', () => document.body.classList.add('pointer-down'));
  document.addEventListener('pointerup', () => document.body.classList.remove('pointer-down'));

  setReactiveItems();
  const observer = new MutationObserver(setReactiveItems);
  observer.observe(document.body, { childList: true, subtree: true });

  requestAnimationFrame(movePointer);
})();
