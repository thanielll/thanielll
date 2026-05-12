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

    .portfolio-loader {
      position: fixed;
      inset: 0;
      z-index: 2147483640;
      display: grid;
      place-items: center;
      overflow: hidden;
      color: #101010;
      background:
        radial-gradient(circle at 18% 20%, rgba(196, 106, 45, 0.08) 0 1px, transparent 1.5px),
        linear-gradient(90deg, rgba(196, 106, 45, 0.045) 1px, transparent 1px),
        linear-gradient(rgba(196, 106, 45, 0.045) 1px, transparent 1px),
        #fff8f0;
      background-size: 24px 24px, 86px 86px, 86px 86px, auto;
      opacity: 1;
      visibility: visible;
      transition: opacity 620ms ease, visibility 620ms ease;
    }

    .portfolio-loader::before,
    .portfolio-loader::after {
      content: "";
      position: absolute;
      pointer-events: none;
    }

    .portfolio-loader::before {
      width: min(62vw, 760px);
      height: min(62vw, 760px);
      border: 1px solid rgba(196, 106, 45, 0.12);
      transform: rotate(12deg);
      animation: loaderFrameDrift 5.4s cubic-bezier(.16, 1, .3, 1) infinite alternate;
    }

    .portfolio-loader::after {
      top: 14%;
      left: 50%;
      width: min(72vw, 920px);
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(196, 106, 45, 0.46), transparent);
      transform: translateX(-50%);
      animation: loaderScanLine 2.2s cubic-bezier(.16, 1, .3, 1) infinite;
    }

    .portfolio-loader__inner {
      position: relative;
      z-index: 2;
      width: min(520px, calc(100vw - 48px));
      display: grid;
      gap: 1.1rem;
      padding: 1.25rem;
      border: 1px solid rgba(196, 106, 45, 0.28);
      background: rgba(255, 255, 255, 0.72);
      box-shadow: 12px 12px 0 rgba(196, 106, 45, 0.11);
      backdrop-filter: blur(14px);
      transform: translateY(0);
      transition: opacity 460ms ease, transform 620ms cubic-bezier(.16, 1, .3, 1);
    }

    .portfolio-loader__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    .portfolio-loader__mark {
      width: 48px;
      height: 48px;
      display: grid;
      place-items: center;
      color: #fff7ed;
      background: #101010;
      font-family: "Archivo", "Inter", system-ui, sans-serif;
      font-size: 0.88rem;
      font-weight: 900;
      letter-spacing: -0.08em;
      box-shadow: 6px 6px 0 rgba(196, 106, 45, 0.16);
      animation: loaderMarkPulse 1.8s ease-in-out infinite;
    }

    .portfolio-loader__label {
      color: #8f3f17;
      font-family: "Archivo", "Inter", system-ui, sans-serif;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.095em;
      text-align: right;
      text-transform: uppercase;
    }

    .portfolio-loader__title {
      margin: 0;
      max-width: 10ch;
      color: #101010;
      font-family: "Archivo", "Inter", system-ui, sans-serif;
      font-size: clamp(2.25rem, 7vw, 4.1rem);
      font-weight: 900;
      line-height: 0.9;
      letter-spacing: -0.07em;
      text-transform: uppercase;
    }

    .portfolio-loader__progress {
      position: relative;
      overflow: hidden;
      height: 9px;
      border: 1px solid rgba(196, 106, 45, 0.32);
      background: rgba(255, 248, 240, 0.88);
    }

    .portfolio-loader__progress::before {
      content: "";
      position: absolute;
      inset: 0 auto 0 0;
      width: 42%;
      background: #c46a2d;
      animation: loaderProgress 1.45s cubic-bezier(.16, 1, .3, 1) infinite;
    }

    .portfolio-loader__status {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      color: #6a6258;
      font-size: 0.76rem;
      font-weight: 800;
      letter-spacing: 0.045em;
      text-transform: uppercase;
    }

    .portfolio-loader__dots {
      display: inline-flex;
      gap: 0.32rem;
    }

    .portfolio-loader__dots span {
      width: 6px;
      height: 6px;
      border: 1px solid rgba(196, 106, 45, 0.62);
      animation: loaderDot 1.2s ease-in-out infinite;
    }

    .portfolio-loader__dots span:nth-child(2) { animation-delay: 140ms; }
    .portfolio-loader__dots span:nth-child(3) { animation-delay: 280ms; }

    html.site-has-loaded .portfolio-loader {
      opacity: 0;
      visibility: hidden;
    }

    html.site-has-loaded .portfolio-loader__inner {
      opacity: 0;
      transform: translateY(-10px);
    }

    @keyframes loaderProgress {
      0% { transform: translateX(-105%); }
      52% { transform: translateX(48%); }
      100% { transform: translateX(245%); }
    }

    @keyframes loaderDot {
      0%, 100% { background: transparent; transform: translateY(0); }
      45% { background: #c46a2d; transform: translateY(-3px); }
    }

    @keyframes loaderMarkPulse {
      0%, 100% { transform: translate(0, 0); box-shadow: 6px 6px 0 rgba(196, 106, 45, 0.16); }
      50% { transform: translate(-2px, -2px); box-shadow: 10px 10px 0 rgba(196, 106, 45, 0.12); }
    }

    @keyframes loaderFrameDrift {
      from { transform: rotate(10deg) scale(0.96); }
      to { transform: rotate(18deg) scale(1.02); }
    }

    @keyframes loaderScanLine {
      0% { top: 12%; opacity: 0; }
      18%, 72% { opacity: 1; }
      100% { top: 86%; opacity: 0; }
    }

    @media (prefers-reduced-motion: reduce) {
      .portfolio-loader,
      .portfolio-loader__inner,
      .portfolio-loader::before,
      .portfolio-loader::after,
      .portfolio-loader__mark,
      .portfolio-loader__progress::before,
      .portfolio-loader__dots span {
        animation: none !important;
        transition: none !important;
      }

      .portfolio-loader__progress::before {
        width: 100%;
      }
    }
  `;

  document.head.appendChild(style);

  const loader = document.createElement('div');
  loader.className = 'portfolio-loader';
  loader.setAttribute('role', 'status');
  loader.setAttribute('aria-live', 'polite');
  loader.innerHTML = `
    <div class="portfolio-loader__inner">
      <div class="portfolio-loader__top">
        <span class="portfolio-loader__mark">NR</span>
        <span class="portfolio-loader__label">Preparing Interface</span>
      </div>
      <h2 class="portfolio-loader__title">Loading Portfolio</h2>
      <div class="portfolio-loader__progress" aria-hidden="true"></div>
      <div class="portfolio-loader__status">
        <span>Settling layout</span>
        <span class="portfolio-loader__dots" aria-hidden="true"><span></span><span></span><span></span></span>
      </div>
    </div>
  `;

  const appendLoader = () => {
    if (!document.body) return;
    if (!document.querySelector('.portfolio-loader')) document.body.appendChild(loader);
  };

  if (document.body) appendLoader();
  else document.addEventListener('DOMContentLoaded', appendLoader, { once: true });

  const finishLoading = () => {
    const minimumDelay = reduceMotion ? 80 : 780;
    window.setTimeout(() => {
      root.classList.remove('site-is-loading');
      root.classList.add('site-has-loaded');
      document.body?.classList.add('site-ready');

      window.setTimeout(() => {
        root.classList.remove('site-has-loaded');
        document.querySelector('.portfolio-loader')?.remove();
      }, reduceMotion ? 120 : 760);
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
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }

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
