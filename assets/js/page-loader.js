(function setupPageLoader() {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  root.classList.add('site-is-loading');

  const style = document.createElement('style');
  style.setAttribute('data-page-loader-style', 'true');
  style.textContent = `
    html.site-is-loading,
    html.site-is-loading body {
      overflow: hidden !important;
    }

    html.site-is-loading::before,
    html.site-is-loading::after,
    html.site-has-loaded::before,
    html.site-has-loaded::after {
      pointer-events: none;
    }

    html.site-is-loading::before {
      content: "";
      position: fixed;
      inset: 0;
      z-index: 2147483640;
      display: block;
      background:
        radial-gradient(circle at 16% 22%, rgba(196, 106, 45, 0.055) 0 1px, transparent 1.5px),
        linear-gradient(90deg, rgba(196, 106, 45, 0.04) 1px, transparent 1px),
        linear-gradient(rgba(196, 106, 45, 0.04) 1px, transparent 1px),
        #fff8f0;
      background-size: 22px 22px, 86px 86px, 86px 86px, auto;
      opacity: 1;
      visibility: visible;
      transition: opacity 520ms ease, visibility 520ms ease;
    }

    html.site-is-loading::after {
      content: "NR / LOADING PORTFOLIO";
      position: fixed;
      left: 50%;
      top: 50%;
      z-index: 2147483641;
      width: min(420px, calc(100vw - 48px));
      border: 1px solid rgba(196, 106, 45, 0.24);
      padding: 1.1rem 1.15rem;
      color: #8f3f17;
      background: rgba(255, 255, 255, 0.88);
      box-shadow: 10px 10px 0 rgba(196, 106, 45, 0.1);
      font-family: "Archivo", "Inter", system-ui, sans-serif;
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.085em;
      line-height: 1.2;
      text-align: center;
      text-transform: uppercase;
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, -50%);
      transition: opacity 420ms ease, transform 520ms cubic-bezier(.16, 1, .3, 1), visibility 520ms ease;
    }

    html.site-is-loading body > * {
      visibility: hidden !important;
    }

    html.site-is-loading body > .skip-link {
      visibility: visible !important;
    }

    html.site-has-loaded::before,
    html.site-has-loaded::after {
      opacity: 0;
      visibility: hidden;
    }

    html.site-has-loaded::after {
      transform: translate(-50%, calc(-50% - 10px));
    }

    @media (prefers-reduced-motion: reduce) {
      html.site-is-loading::before,
      html.site-is-loading::after,
      html.site-has-loaded::before,
      html.site-has-loaded::after {
        transition: none !important;
      }
    }
  `;

  document.head.appendChild(style);

  const finishLoading = () => {
    const minimumDelay = reduceMotion ? 80 : 620;
    window.setTimeout(() => {
      root.classList.remove('site-is-loading');
      root.classList.add('site-has-loaded');
      document.body?.classList.add('site-ready');

      window.setTimeout(() => {
        root.classList.remove('site-has-loaded');
      }, reduceMotion ? 100 : 700);
    }, minimumDelay);
  };

  if (document.readyState === 'complete') {
    finishLoading();
  } else {
    window.addEventListener('load', finishLoading, { once: true });
  }
})();
