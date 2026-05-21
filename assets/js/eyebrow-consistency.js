/* eyebrow-consistency.js — Refined 2026
   Removed font-weight:900 !important and text-transform:uppercase
   overrides that were breaking the clean professional design. */
(function fixEyebrowConsistency() {
  if (document.querySelector('[data-eyebrow-consistency-style]')) return;

  const style = document.createElement('style');
  style.setAttribute('data-eyebrow-consistency-style', 'true');
  style.textContent = `
    .eyebrow,
    .eyebrow-invert {
      display: inline-flex !important;
      align-items: center !important;
      gap: 0.5rem !important;
      margin: 0 0 clamp(0.875rem, 1.5vw, 1.125rem) !important;
      font-size: 0.7rem !important;
      font-weight: 600 !important;
      letter-spacing: 0.09em !important;
      text-transform: uppercase !important;
      white-space: nowrap !important;
      color: var(--color-accent) !important;
    }

    .eyebrow::before,
    .eyebrow-invert::before {
      content: "" !important;
      display: inline-block !important;
      flex: 0 0 auto !important;
      width: 18px !important;
      height: 2px !important;
      background: currentColor !important;
      border-radius: 2px !important;
    }

    .eyebrow-invert {
      color: rgba(255, 255, 255, 0.7) !important;
    }

    .hero-availability {
      font-size: 0.8rem !important;
      font-weight: 500 !important;
      letter-spacing: 0 !important;
      text-transform: none !important;
    }

    .testimonial-project {
      font-size: 0.72rem !important;
      font-weight: 700 !important;
      letter-spacing: 0.07em !important;
      text-transform: uppercase !important;
    }

    .section-heading h2,
    .about-copy h2,
    .testimonial-intro h2,
    .project-inquiry-copy h2,
    .case-section-heading h2,
    .cta-copy h2,
    .case-hero-copy h1,
    .hero-copy h1 {
      margin-top: 0 !important;
    }

    @media (max-width: 768px) {
      .eyebrow,
      .eyebrow-invert {
        font-size: 0.68rem !important;
        letter-spacing: 0.08em !important;
        gap: 0.45rem !important;
        margin-bottom: 0.875rem !important;
      }

      .eyebrow::before,
      .eyebrow-invert::before {
        width: 14px !important;
      }
    }
  `;
  document.head.appendChild(style);
})();
