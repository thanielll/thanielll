/**
 * animations.js — Remotion-Inspired Scroll Animations
 *
 * Implements spring-eased entrance animations using Remotion's timing
 * principles translated to CSS + IntersectionObserver:
 *
 *  Remotion spring()  →  cubic-bezier(0.16, 1, 0.3, 1)
 *  Remotion interpolate([0,fps], [0,1])  →  CSS @keyframes + animation-delay
 *  Sequence from={n}  →  staggered animation-delay per element index
 *
 * No external dependencies. Respects prefers-reduced-motion.
 */
(function initAnimations() {
  /* ── Motion preference check ──────────────────────────────── */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || !('IntersectionObserver' in window)) return;

  /* ── Spring easing — matches Remotion spring(stiffness:100,damping:10) ── */
  const SPRING = 'cubic-bezier(0.16, 1, 0.3, 1)';

  /* ── Inject keyframes once ────────────────────────────────── */
  if (!document.querySelector('[data-animations-keyframes]')) {
    const kf = document.createElement('style');
    kf.setAttribute('data-animations-keyframes', 'true');
    kf.textContent = `
      @keyframes nr-fade-up {
        from { opacity: 0; transform: translateY(28px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      @keyframes nr-fade-in {
        from { opacity: 0; }
        to   { opacity: 1; }
      }

      @keyframes nr-scale-up {
        from { opacity: 0; transform: scale(0.94) translateY(16px); }
        to   { opacity: 1; transform: scale(1) translateY(0); }
      }

      @keyframes nr-slide-right {
        from { opacity: 0; transform: translateX(-24px); }
        to   { opacity: 1; transform: translateX(0); }
      }

      /* Base state before reveal */
      .nr-reveal {
        opacity: 0;
      }

      /* Triggered state */
      .nr-reveal.is-visible {
        animation-fill-mode: both;
        animation-timing-function: ${SPRING};
        animation-duration: 600ms;
      }

      .nr-reveal.is-visible[data-anim="fade-up"]    { animation-name: nr-fade-up; }
      .nr-reveal.is-visible[data-anim="fade-in"]    { animation-name: nr-fade-in; }
      .nr-reveal.is-visible[data-anim="scale-up"]   { animation-name: nr-scale-up; }
      .nr-reveal.is-visible[data-anim="slide-right"]{ animation-name: nr-slide-right; }

      @media (prefers-reduced-motion: reduce) {
        .nr-reveal { opacity: 1 !important; animation: none !important; }
      }
    `;
    document.head.appendChild(kf);
  }

  /* ── Tag elements for animation ──────────────────────────── */
  const targets = [
    /* Section headers */
    { selector: '.section-heading, .case-section-heading, .archive-intro',
      anim: 'fade-up', stagger: 0 },
    /* Hero copy lines */
    { selector: '.hero-copy .eyebrow, .hero h1, .hero-text, .hero-actions, .hero-availability, .trust-row',
      anim: 'fade-up', stagger: 60 },
    /* Value strip items */
    { selector: '.value-item',
      anim: 'scale-up', stagger: 70 },
    /* Service + project + case cards */
    { selector: '.service-card, .project-card, .case-card',
      anim: 'scale-up', stagger: 80 },
    /* About section */
    { selector: '.about-copy, .about-portrait',
      anim: 'fade-up', stagger: 80 },
    /* Process steps */
    { selector: '.process-step',
      anim: 'slide-right', stagger: 90 },
    /* Best-for grid items */
    { selector: '.best-for-grid article',
      anim: 'scale-up', stagger: 60 },
    /* Testimonial */
    { selector: '.testimonial-intro, .testimonial-card',
      anim: 'fade-up', stagger: 80 },
    /* CTA + channel cards */
    { selector: '.cta-copy, .project-inquiry-copy, .project-inquiry-card',
      anim: 'fade-up', stagger: 80 },
    { selector: '.channel-card',
      anim: 'scale-up', stagger: 60 },
    /* Case study details */
    { selector: '.case-hero-copy, .case-hero-visual, .overview-grid article, .highlight-grid article',
      anim: 'fade-up', stagger: 70 },
    /* Footer */
    { selector: '.footer-intro, .site-footer h2',
      anim: 'fade-in', stagger: 40 },
  ];

  /* Group siblings for accurate stagger within each parent */
  const staggerMap = new Map();

  targets.forEach(({ selector, anim, stagger }) => {
    document.querySelectorAll(selector).forEach((el) => {
      if (el.classList.contains('nr-reveal')) return;

      el.classList.add('nr-reveal');
      el.setAttribute('data-anim', anim);

      if (stagger > 0) {
        const parent = el.parentElement || document.body;
        const key = `${parent.tagName}${parent.className}__${anim}`;
        const idx = (staggerMap.get(key) ?? -1) + 1;
        staggerMap.set(key, idx);
        /* Cap stagger at 5 siblings to prevent long waits */
        const delay = Math.min(idx, 5) * stagger;
        el.style.animationDelay = `${delay}ms`;
      }
    });
  });

  /* ── Intersection Observer ─────────────────────────────── */
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    },
    {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.1,
    }
  );

  document.querySelectorAll('.nr-reveal').forEach((el) => {
    /* Make sure already-visible elements (above fold) animate immediately */
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      el.style.animationDelay = '0ms';
      el.classList.add('is-visible');
    } else {
      observer.observe(el);
    }
  });

  /* ── Re-run on dynamic content (JS-rendered grids) ──────── */
  const dynamicGrids = document.querySelectorAll('[data-featured-projects], [data-case-study-grid]');
  dynamicGrids.forEach((grid) => {
    new MutationObserver(() => {
      grid.querySelectorAll('.project-card, .case-card').forEach((card) => {
        if (card.classList.contains('nr-reveal')) return;
        card.classList.add('nr-reveal', 'is-visible');
        card.setAttribute('data-anim', 'scale-up');
      });
    }).observe(grid, { childList: true });
  });
})();
