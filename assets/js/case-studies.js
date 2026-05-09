window.caseStudies = [];

(function refreshWarmPortfolioStyling() {
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) themeMeta.setAttribute('content', '#F5F0E8');

  const style = document.createElement('style');
  style.setAttribute('data-warm-portfolio-refresh', 'true');
  style.textContent = `
    :root {
      --color-bg: #F5F0E8;
      --color-surface: #FFFDF7;
      --color-text: #141414;
      --color-muted: #6F6860;
      --color-border: #DCD2C4;
      --color-accent: #E94B35;
      --color-accent-soft: #F6D7CE;
      --color-accent-dark: #A92D22;
      --color-ink: #1D1B1B;
      --color-bg-soft: #FFF8EF;
      --color-bg-alt: #EFE4D6;
      --color-heading: var(--color-text);
      --color-muted-soft: #8B8076;
      --color-line: var(--color-border);
      --color-line-strong: #CBBDAF;
      --color-white: var(--color-surface);
      --color-black: var(--color-text);
      --color-charcoal: var(--color-ink);
      --color-on-dark: #FFF7EF;
      --color-on-dark-muted: #E9D9CD;
      --color-bg-rgb: 245, 240, 232;
      --color-bg-soft-rgb: 255, 248, 239;
      --color-surface-rgb: 255, 253, 247;
      --color-text-rgb: 20, 20, 20;
      --color-accent-rgb: 233, 75, 53;
      --color-accent-soft-rgb: 246, 215, 206;
      --color-accent-dark-rgb: 169, 45, 34;
      --shadow: 0 22px 58px rgba(69, 43, 31, 0.10);
    }

    html { background: var(--color-bg); }

    body {
      background:
        radial-gradient(circle at 14% 18%, rgba(var(--color-accent-rgb), 0.055) 0 1px, transparent 1.5px),
        radial-gradient(circle at 86% 12%, rgba(var(--color-accent-rgb), 0.035) 0 1px, transparent 1.5px),
        linear-gradient(90deg, rgba(169, 45, 34, 0.024) 1px, transparent 1px),
        linear-gradient(rgba(169, 45, 34, 0.024) 1px, transparent 1px),
        var(--color-bg) !important;
      background-size: 17px 17px, 23px 23px, 96px 96px, 96px 96px, auto !important;
    }

    body::before {
      content: '';
      position: fixed;
      inset: 0;
      z-index: 999;
      pointer-events: none;
      opacity: 0.16;
      background-image:
        radial-gradient(circle at 20% 30%, rgba(29, 27, 27, 0.42) 0 0.45px, transparent 0.7px),
        radial-gradient(circle at 78% 64%, rgba(169, 45, 34, 0.32) 0 0.38px, transparent 0.68px),
        radial-gradient(circle at 42% 82%, rgba(111, 104, 96, 0.28) 0 0.42px, transparent 0.72px);
      background-size: 13px 13px, 19px 19px, 29px 29px;
      mix-blend-mode: multiply;
    }

    .site-header { background: rgba(var(--color-bg-rgb), 0.9) !important; border-bottom-color: rgba(220, 210, 196, 0.9) !important; }
    .site-header.is-scrolled { background: rgba(var(--color-surface-rgb), 0.94) !important; box-shadow: 0 14px 42px rgba(69, 43, 31, 0.07) !important; }
    .brand-mark, .icon-block, .hero-stat-dark { background: var(--color-ink) !important; border-color: var(--color-ink) !important; }
    .nav-links a { position: relative; }
    .nav-links a::after { content: ''; position: absolute; left: 0; right: 0; bottom: -0.42rem; height: 1px; background: var(--color-accent); transform: scaleX(0); transform-origin: left; transition: transform 180ms ease; }
    .nav-links a:hover::after, .nav-links a:focus-visible::after, .nav-links a[aria-current='page']::after { transform: scaleX(1); }

    .btn, .filter-chip, .channel-card, .tools-grid li, .tools-row li, .case-tags li, .trust-row li, .overview-grid article, .highlight-grid article, .screenshot-panel, .service-card, .project-card, .case-card, .value-item, .process-step, .tools-panel, .best-for-grid article { border-color: var(--color-border) !important; }
    .btn-dark:hover, .btn-dark:focus-visible, .filter-chip.is-active, .filter-chip:hover, .filter-chip:focus-visible { background: var(--color-accent-dark) !important; border-color: var(--color-accent-dark) !important; color: var(--color-on-dark) !important; }
    .btn-light, .filter-chip, .trust-row li, .hero-accent p, .hero-accent li, .tools-grid li, .tools-row li, .case-tags li { background: rgba(var(--color-surface-rgb), 0.72) !important; }
    .btn-light:hover, .btn-light:focus-visible, .btn-white:hover, .btn-white:focus-visible { background: var(--color-accent-soft) !important; border-color: var(--color-accent) !important; color: var(--color-ink) !important; }
    .eyebrow { color: var(--color-accent-dark) !important; }
    .eyebrow::before { width: 26px; background: var(--color-accent) !important; box-shadow: 36px 0 0 -2px var(--color-accent); }
    .eyebrow-invert { color: var(--color-on-dark-muted) !important; }

    .hero, .page-hero, .case-hero {
      background:
        radial-gradient(circle at 74% 22%, rgba(var(--color-accent-rgb), 0.105) 0 1px, transparent 1.5px),
        linear-gradient(120deg, transparent 0 62%, rgba(var(--color-accent-rgb), 0.085) 62% 62.15%, transparent 62.15% 100%),
        linear-gradient(90deg, rgba(169, 45, 34, 0.034) 1px, transparent 1px),
        linear-gradient(rgba(169, 45, 34, 0.034) 1px, transparent 1px),
        linear-gradient(180deg, var(--color-bg-soft), var(--color-bg)) !important;
      background-size: 19px 19px, auto, 92px 92px, 92px 92px, auto !important;
    }

    .hero::before, .page-hero::before, .case-hero::before { border-color: rgba(var(--color-accent-rgb), 0.13) !important; }
    .hero::after, .page-hero::after, .case-hero::after { background: linear-gradient(90deg, rgba(var(--color-accent-rgb), 0.65), transparent 70%), repeating-linear-gradient(90deg, transparent 0 34px, rgba(var(--color-accent-rgb), 0.22) 34px 35px, transparent 35px 70px) !important; opacity: 0.2 !important; }
    .hero-accent, .tools-panel, .service-card, .project-card, .case-card, .overview-grid article, .highlight-grid article, .screenshot-panel, .process-step { background: linear-gradient(180deg, rgba(var(--color-surface-rgb), 0.96), rgba(255, 248, 239, 0.86)) !important; }
    .hero-accent::before, .hero-accent::after, main > section:not(.cta-section)::after, #services::before, #work::after { border-color: rgba(var(--color-accent-rgb), 0.14) !important; }
    #about::before, .best-for-section::before, #services::before, #work::before, .case-archive::before, .case-section::before { opacity: 0.68; }
    #about::after, #services::after, #work::after, .case-archive::after, .case-section::after { opacity: 1 !important; }
    .section, .best-for-section, .case-archive, .case-section { background: var(--color-bg) !important; }
    .section-ruled { background: linear-gradient(90deg, transparent 0 49.92%, rgba(var(--color-accent-rgb), 0.05) 49.92% 50.08%, transparent 50.08% 100%), radial-gradient(circle at 8% 18%, rgba(var(--color-accent-rgb), 0.055) 0 1px, transparent 1.5px), var(--color-bg-soft) !important; background-size: auto, 24px 24px, auto !important; }
    .value-strip, .site-footer { background: var(--color-surface) !important; }
    .cta-section { background: radial-gradient(circle at 18% 22%, rgba(var(--color-accent-rgb), 0.2) 0 1px, transparent 1.5px), linear-gradient(135deg, rgba(var(--color-accent-rgb), 0.16), transparent 28%), var(--color-ink) !important; background-size: 18px 18px, auto, auto !important; }
    .cta-section::before { content: ''; position: absolute; top: 26px; right: max(24px, calc((100% - var(--container)) / 2)); width: min(34vw, 420px); height: 220px; border-top: 1px solid rgba(255, 253, 247, 0.16); border-right: 1px solid rgba(255, 253, 247, 0.16); background: linear-gradient(135deg, transparent 0 48%, rgba(var(--color-accent-rgb), 0.35) 48% 48.25%, transparent 48.25% 100%); pointer-events: none; }
    .service-card:hover, .service-card:focus-within, .project-card:hover, .project-card:focus-within, .case-card:hover, .case-card:focus-within, .channel-card:hover, .channel-card:focus-visible, .process-step:hover, .highlight-grid article:hover { border-color: var(--color-accent) !important; box-shadow: var(--shadow) !important; }
    .service-card::before, .project-card::after, .case-card::after, .channel-card::before { color: var(--color-accent); border-color: rgba(var(--color-accent-rgb), 0.45) !important; background: var(--color-accent) !important; }
    .project-preview, .case-hero-visual, .screen-hero, .screenshot-panel { background: linear-gradient(90deg, rgba(var(--color-accent-rgb), 0.05) 1px, transparent 1px), linear-gradient(rgba(var(--color-accent-rgb), 0.05) 1px, transparent 1px), var(--color-bg-alt) !important; background-size: 46px 46px !important; }
    .project-preview::before, .project-preview::after, .case-screen, .screen-grid span, .screenshot-panel::before { border-color: rgba(var(--color-accent-rgb), 0.34) !important; }
    .project-preview img { filter: grayscale(0.88) sepia(0.12) contrast(1.02) saturate(0.9) !important; }
    .project-card:hover .project-preview::before, .project-card:focus-within .project-preview::before { transform: translate(4px, -4px); }
    .channel-card { background: rgba(var(--color-surface-rgb), 0.94) !important; color: var(--color-ink) !important; }
    .channel-icon, .channel-mark { background: var(--color-ink) !important; border-color: var(--color-ink) !important; color: var(--color-on-dark) !important; }
    .channel-card:hover .channel-icon, .channel-card:focus-visible .channel-icon, .channel-card:hover .channel-mark, .channel-card:focus-visible .channel-mark { background: var(--color-accent) !important; border-color: var(--color-accent) !important; color: var(--color-on-dark) !important; }
    .footer-contact a:hover, .footer-contact a:focus-visible, .footer-links a:hover, .footer-links a:focus-visible, .service-card a, .project-content a, .case-card-content a { color: var(--color-accent-dark) !important; }
    .case-tags li:hover, .tools-row li:hover, .tools-grid li:hover, .project-tags span:hover { border-color: var(--color-accent) !important; background: var(--color-accent-soft) !important; color: var(--color-ink) !important; }

    @media (max-width: 900px) {
      body::before { opacity: 0.11; }
      .hero::before, .page-hero::before, .case-hero::before, .cta-section::before, #services::before, #work::before, main > section:not(.cta-section)::after { display: none !important; }
      .nav-links a::after { display: none; }
    }
  `;
  document.head.appendChild(style);
})();
