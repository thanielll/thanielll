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

    html.site-is-loading body > * {
      visibility: hidden !important;
    }

    html.site-is-loading body > .skip-link,
    html.site-is-loading body > .portfolio-loader {
      visibility: visible !important;
    }

    /* ── Clean loader — forest green accent on warm white ── */
    .portfolio-loader {
      position: fixed;
      inset: 0;
      z-index: 2147483640;
      display: grid;
      place-items: center;
      background: #FFFFFF;
      opacity: 1;
      visibility: visible;
      transition: opacity 500ms cubic-bezier(0.16, 1, 0.3, 1),
                  visibility 500ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    .portfolio-loader__inner {
      position: relative;
      width: min(360px, calc(100vw - 48px));
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      padding: 2rem 1.5rem;
      opacity: 1;
      transform: translateY(0);
      transition: opacity 380ms cubic-bezier(0.16, 1, 0.3, 1),
                  transform 500ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    .portfolio-loader__mark {
      width: 52px;
      height: 52px;
      display: grid;
      place-items: center;
      border-radius: 12px;
      color: #fff;
      background: #16A34A;
      font-family: "Archivo", "Space Grotesk", system-ui, sans-serif;
      font-size: 1rem;
      font-weight: 800;
      letter-spacing: -0.04em;
      animation: loaderPulse 1.6s cubic-bezier(0.16, 1, 0.3, 1) infinite;
    }

    .portfolio-loader__label {
      color: #6B7280;
      font-family: "Space Grotesk", system-ui, sans-serif;
      font-size: 0.78rem;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      text-align: center;
    }

    .portfolio-loader__progress {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 3px;
      border-radius: 999px;
      background: #E5E5E3;
    }

    .portfolio-loader__progress::before {
      content: "";
      position: absolute;
      inset: 0 auto 0 0;
      width: 45%;
      background: #16A34A;
      border-radius: 999px;
      animation: loaderBar 1.2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
    }

    html.site-has-loaded .portfolio-loader {
      opacity: 0;
      visibility: hidden;
    }

    html.site-has-loaded .portfolio-loader__inner {
      opacity: 0;
      transform: translateY(-12px);
    }

    @keyframes loaderPulse {
      0%, 100% { transform: scale(1);    box-shadow: 0 0 0 0   rgba(22, 163, 74, 0.3); }
      50%       { transform: scale(1.04); box-shadow: 0 0 0 8px rgba(22, 163, 74, 0);   }
    }

    @keyframes loaderBar {
      0%   { transform: translateX(-110%); }
      50%  { transform: translateX(80%); }
      100% { transform: translateX(250%); }
    }

    @media (prefers-reduced-motion: reduce) {
      .portfolio-loader,
      .portfolio-loader__inner,
      .portfolio-loader__mark,
      .portfolio-loader__progress::before {
        animation: none !important;
        transition: none !important;
      }

      .portfolio-loader__progress::before {
        width: 100%;
        transform: none !important;
      }
    }
  `;

  document.head.appendChild(style);

  const loader = document.createElement('div');
  loader.className = 'portfolio-loader';
  loader.setAttribute('role', 'status');
  loader.setAttribute('aria-live', 'polite');
  loader.setAttribute('aria-label', 'Loading portfolio');
  loader.innerHTML = `
    <div class="portfolio-loader__inner">
      <span class="portfolio-loader__mark" aria-hidden="true">NR</span>
      <span class="portfolio-loader__label">Loading portfolio</span>
      <div class="portfolio-loader__progress" aria-hidden="true"></div>
    </div>
  `;

  const appendLoader = () => {
    if (!document.body) return;
    if (!document.querySelector('.portfolio-loader')) document.body.appendChild(loader);
  };

  if (document.body) appendLoader();
  else document.addEventListener('DOMContentLoaded', appendLoader, { once: true });

  const finishLoading = () => {
    const minimumDelay = reduceMotion ? 60 : 640;
    window.setTimeout(() => {
      root.classList.remove('site-is-loading');
      root.classList.add('site-has-loaded');
      document.body?.classList.add('site-ready');

      window.setTimeout(() => {
        root.classList.remove('site-has-loaded');
        document.querySelector('.portfolio-loader')?.remove();
      }, reduceMotion ? 80 : 600);
    }, minimumDelay);
  };

  if (document.readyState === 'complete') {
    finishLoading();
  } else {
    window.addEventListener('load', finishLoading, { once: true });
  }
})();

(function loadReadonlyCaseStudyData() {
  const scripts = ['assets/data/case-studies.js', 'assets/data/case-study-adapter.js'];

  const loadScript = (src) =>
    new Promise((resolve) => {
      if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
      const script = document.createElement('script');
      script.src = src;
      script.defer = true;
      script.setAttribute('data-readonly-case-study-data', 'true');
      script.onload = resolve;
      script.onerror = resolve;
      document.head.appendChild(script);
    });

  scripts.reduce((chain, src) => chain.then(() => loadScript(src)), Promise.resolve());
})();
