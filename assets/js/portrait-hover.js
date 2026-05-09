(function addPortraitHoverInteraction() {
  if (document.querySelector('[data-portrait-hover-style]')) return;

  const portrait = document.querySelector('.about-portrait');
  if (!portrait) return;

  const style = document.createElement('style');
  style.setAttribute('data-portrait-hover-style', 'true');
  style.textContent = `
    .about-portrait-frame {
      cursor: crosshair;
    }

    .about-portrait-frame::before {
      transition: opacity 260ms ease, transform 420ms cubic-bezier(.16, 1, .3, 1), border-color 260ms ease;
    }

    .about-portrait-frame::after {
      transition: opacity 320ms ease, background 320ms ease, mix-blend-mode 320ms ease;
    }

    .about-portrait-frame img {
      transition: filter 520ms cubic-bezier(.16, 1, .3, 1), transform 520ms cubic-bezier(.16, 1, .3, 1);
      transform-origin: var(--portrait-x, 50%) var(--portrait-y, 50%);
    }

    .about-portrait-frame .portrait-suit-reveal {
      position: absolute;
      inset: 0;
      z-index: 2;
      pointer-events: none;
      opacity: 0;
      clip-path: polygon(0 41%, 100% 41%, 100% 100%, 0 100%);
      background:
        radial-gradient(circle at 50% 45%, rgba(255, 245, 238, 0.16) 0 2px, transparent 3px),
        radial-gradient(ellipse at 50% 42%, rgba(224, 47, 39, 0.88) 0 18%, transparent 19%),
        linear-gradient(115deg, transparent 0 42%, rgba(255, 250, 245, 0.24) 42.5% 43%, transparent 43.5% 100%),
        linear-gradient(65deg, transparent 0 45%, rgba(255, 250, 245, 0.18) 45.5% 46%, transparent 46.5% 100%),
        repeating-radial-gradient(ellipse at 50% 48%, transparent 0 26px, rgba(255, 250, 245, 0.2) 27px 28px, transparent 29px 54px),
        repeating-linear-gradient(90deg, rgba(255, 250, 245, 0.18) 0 1px, transparent 1px 22px),
        linear-gradient(90deg, rgba(25, 54, 113, 0.92) 0 24%, rgba(196, 28, 32, 0.9) 25% 74%, rgba(25, 54, 113, 0.92) 75% 100%);
      background-size: auto, auto, auto, auto, auto, auto, auto;
      mix-blend-mode: overlay;
      -webkit-mask-image: radial-gradient(circle 78px at var(--portrait-x, 50%) var(--portrait-y, 50%), #000 0 58%, rgba(0,0,0,.72) 64%, transparent 72%);
      mask-image: radial-gradient(circle 78px at var(--portrait-x, 50%) var(--portrait-y, 50%), #000 0 58%, rgba(0,0,0,.72) 64%, transparent 72%);
      transition: opacity 260ms ease;
    }

    .about-portrait-frame .portrait-suit-reveal::before {
      content: "";
      position: absolute;
      inset: 0;
      background:
        linear-gradient(100deg, transparent 0 46%, rgba(18, 18, 18, 0.22) 46% 54%, transparent 54% 100%),
        radial-gradient(ellipse at 50% 35%, rgba(255, 255, 255, 0.12), transparent 36%),
        linear-gradient(90deg, rgba(0, 0, 0, 0.26), transparent 19% 81%, rgba(0, 0, 0, 0.26));
      mix-blend-mode: multiply;
    }

    .about-portrait-frame .portrait-scanline {
      position: absolute;
      inset: 0;
      z-index: 3;
      pointer-events: none;
      opacity: 0;
      background:
        linear-gradient(180deg, transparent 0 46%, rgba(var(--color-accent-rgb), 0.28) 48%, rgba(var(--color-accent-rgb), 0.1) 50%, transparent 54%),
        repeating-linear-gradient(180deg, rgba(255, 253, 247, 0.06) 0 1px, transparent 1px 5px);
      transform: translateY(-100%);
      transition: opacity 260ms ease;
      mix-blend-mode: multiply;
    }

    .about-portrait-frame .portrait-focus-dot {
      position: absolute;
      left: var(--portrait-x, 50%);
      top: var(--portrait-y, 50%);
      z-index: 4;
      width: 70px;
      height: 70px;
      border: 1px solid rgba(var(--color-accent-rgb), 0.72);
      border-radius: 50%;
      opacity: 0;
      pointer-events: none;
      transform: translate(-50%, -50%) scale(0.72);
      transition: opacity 220ms ease, transform 420ms cubic-bezier(.16, 1, .3, 1);
      box-shadow: 0 0 0 1px rgba(255, 253, 247, 0.28) inset;
    }

    .about-portrait-frame .portrait-focus-dot::before,
    .about-portrait-frame .portrait-focus-dot::after {
      content: "";
      position: absolute;
      background: rgba(var(--color-accent-rgb), 0.72);
    }

    .about-portrait-frame .portrait-focus-dot::before {
      left: 50%;
      top: -8px;
      bottom: -8px;
      width: 1px;
      transform: translateX(-50%);
    }

    .about-portrait-frame .portrait-focus-dot::after {
      top: 50%;
      left: -8px;
      right: -8px;
      height: 1px;
      transform: translateY(-50%);
    }

    .about-portrait-frame:hover img,
    .about-portrait-frame:focus-within img {
      filter: grayscale(0.64) sepia(0.2) contrast(1.12) saturate(0.88);
      transform: scale(1.045);
    }

    .about-portrait-frame:hover::before,
    .about-portrait-frame:focus-within::before {
      border-color: rgba(var(--color-accent-rgb), 0.62);
      opacity: 0.95;
      transform: scale(0.985);
    }

    .about-portrait-frame:hover::after,
    .about-portrait-frame:focus-within::after {
      opacity: 0.82;
      background:
        radial-gradient(circle at var(--portrait-x, 50%) var(--portrait-y, 50%), transparent 0 13%, rgba(var(--color-accent-rgb), 0.13) 14%, transparent 35%),
        linear-gradient(180deg, transparent 48%, rgba(20, 20, 20, 0.24));
      mix-blend-mode: multiply;
    }

    .about-portrait-frame:hover .portrait-suit-reveal,
    .about-portrait-frame:focus-within .portrait-suit-reveal {
      opacity: 0.82;
    }

    .about-portrait-frame:hover .portrait-scanline,
    .about-portrait-frame:focus-within .portrait-scanline {
      opacity: 1;
      animation: portraitScan 1.45s cubic-bezier(.16, 1, .3, 1) both;
    }

    .about-portrait-frame:hover .portrait-focus-dot,
    .about-portrait-frame:focus-within .portrait-focus-dot {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    @keyframes portraitScan {
      from { transform: translateY(-100%); }
      to { transform: translateY(100%); }
    }

    @media (prefers-reduced-motion: reduce) {
      .about-portrait-frame:hover .portrait-scanline,
      .about-portrait-frame:focus-within .portrait-scanline {
        animation: none;
      }
    }
  `;
  document.head.appendChild(style);

  const frame = portrait.querySelector('.about-portrait-frame');
  if (!frame) return;

  if (!frame.querySelector('.portrait-scanline')) {
    frame.insertAdjacentHTML('beforeend', '<span class="portrait-suit-reveal" aria-hidden="true"></span><span class="portrait-scanline" aria-hidden="true"></span><span class="portrait-focus-dot" aria-hidden="true"></span>');
  } else if (!frame.querySelector('.portrait-suit-reveal')) {
    frame.insertAdjacentHTML('afterbegin', '<span class="portrait-suit-reveal" aria-hidden="true"></span>');
  }

  frame.addEventListener('pointermove', (event) => {
    const rect = frame.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    frame.style.setProperty('--portrait-x', `${Math.max(0, Math.min(100, x))}%`);
    frame.style.setProperty('--portrait-y', `${Math.max(0, Math.min(100, y))}%`);
  }, { passive: true });

  frame.addEventListener('pointerleave', () => {
    frame.style.setProperty('--portrait-x', '50%');
    frame.style.setProperty('--portrait-y', '50%');
  });
})();
