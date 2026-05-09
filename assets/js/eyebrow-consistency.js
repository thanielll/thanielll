(function fixEyebrowConsistency() {
  if (document.querySelector('[data-eyebrow-consistency-style]')) return;

  const style = document.createElement('style');
  style.setAttribute('data-eyebrow-consistency-style', 'true');
  style.textContent = `
    .eyebrow,
    .eyebrow-invert,
    .hero-featured-kicker,
    .testimonial-rating,
    .testimonial-project,
    .service-meta,
    .proof-item span,
    .project-type-grid li,
    .best-for-summary li,
    .testimonial-tags li,
    .hero-availability {
      font-size: 0.72rem !important;
      line-height: 1.2 !important;
      font-weight: 900 !important;
      letter-spacing: 0.065em !important;
      text-transform: uppercase !important;
    }

    .eyebrow,
    .eyebrow-invert {
      display: inline-flex !important;
      align-items: center !important;
      gap: 0.7rem !important;
      margin: 0 0 clamp(1rem, 1.8vw, 1.35rem) !important;
      color: var(--color-accent-dark) !important;
      white-space: nowrap !important;
    }

    .eyebrow::before,
    .eyebrow-invert::before {
      content: "" !important;
      display: inline-block !important;
      flex: 0 0 auto !important;
      width: 28px !important;
      height: 1px !important;
      background: var(--color-accent) !important;
      transform: translateY(0) !important;
    }

    .eyebrow-invert {
      color: var(--color-on-dark) !important;
    }

    .eyebrow-invert::before {
      background: rgba(255, 253, 247, 0.7) !important;
    }

    .section-heading,
    .case-section-heading,
    .archive-intro,
    .testimonial-intro,
    .project-inquiry-copy,
    .about-copy,
    .case-hero-copy,
    .cta-copy {
      --eyebrow-offset-fix: 0;
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

    #about .eyebrow,
    .testimonial-section .eyebrow,
    #process .eyebrow,
    #services .eyebrow,
    #work .eyebrow,
    .best-for-section .eyebrow,
    .project-inquiry-section .eyebrow {
      margin-bottom: clamp(1rem, 1.7vw, 1.25rem) !important;
    }

    #process .process-copy-panel .eyebrow {
      margin-bottom: 0.9rem !important;
    }

    .hero-featured-kicker,
    .case-meta-list span,
    .footer-brand-lockup span,
    .testimonial-rating,
    .testimonial-project {
      white-space: normal !important;
    }

    @media (max-width: 768px) {
      .eyebrow,
      .eyebrow-invert,
      .hero-featured-kicker,
      .testimonial-rating,
      .testimonial-project,
      .service-meta,
      .proof-item span,
      .project-type-grid li,
      .best-for-summary li,
      .testimonial-tags li,
      .hero-availability {
        font-size: 0.68rem !important;
        letter-spacing: 0.055em !important;
      }

      .eyebrow,
      .eyebrow-invert {
        gap: 0.62rem !important;
        margin-bottom: 0.95rem !important;
      }

      .eyebrow::before,
      .eyebrow-invert::before {
        width: 24px !important;
      }
    }

    @media (max-width: 420px) {
      .eyebrow,
      .eyebrow-invert {
        margin-bottom: 0.82rem !important;
      }
    }
  `;
  document.head.appendChild(style);
})();
