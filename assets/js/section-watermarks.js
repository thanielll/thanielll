(function addSectionWatermarks() {
  if (document.querySelector('[data-section-watermarks-style]')) return;

  const style = document.createElement('style');
  style.setAttribute('data-section-watermarks-style', 'true');
  style.textContent = `
    #about,
    #services,
    #process,
    .testimonial-section,
    .best-for-section,
    .case-archive,
    .case-section {
      overflow: hidden;
    }

    #about::before,
    #services::before,
    #process::before,
    .testimonial-section::after,
    .best-for-section::before,
    .case-archive::before,
    .case-section::before {
      position: absolute;
      top: 42px;
      right: max(22px, calc((100% - var(--container)) / 2));
      z-index: 0;
      color: transparent;
      font-family: var(--font-display);
      font-size: clamp(4.5rem, 12vw, 10rem);
      font-weight: 900;
      line-height: 0.8;
      letter-spacing: -0.075em;
      -webkit-text-stroke: 1px rgba(var(--color-accent-rgb), 0.09);
      text-transform: uppercase;
      pointer-events: none;
      opacity: 1;
    }

    #about::before {
      content: "ABOUT";
    }

    #services::before {
      content: "SERVICES";
    }

    #process::before {
      content: "PROCESS";
    }

    .testimonial-section::after {
      content: "REVIEW";
    }

    .best-for-section::before {
      content: "FIT";
    }

    .case-archive::before {
      content: "CASES";
    }

    .case-section::before {
      content: "DETAIL";
    }

    .cta-section::before {
      content: "";
    }

    .testimonial-section .testimonial-intro h2 {
      max-width: 10.5ch;
      font-size: clamp(3rem, 4.45rem, 4.45rem) !important;
      line-height: 0.94 !important;
      letter-spacing: -0.055em !important;
    }

    .best-for-section .section-heading h2 {
      max-width: 10.5ch;
      font-size: clamp(3rem, 4.45rem, 4.45rem) !important;
      line-height: 0.94 !important;
      letter-spacing: -0.055em !important;
    }

    .testimonial-section .testimonial-grid,
    .best-for-section .container,
    #about .container,
    #services .container,
    #process .container,
    .case-archive .container,
    .case-section .container {
      position: relative;
      z-index: 1;
    }

    @media (max-width: 900px) {
      #about::before,
      #services::before,
      #process::before,
      .testimonial-section::after,
      .best-for-section::before,
      .case-archive::before,
      .case-section::before {
        top: 24px;
        right: 18px;
        font-size: clamp(3.5rem, 18vw, 7rem);
        opacity: 0.72;
      }
    }
  `;
  document.head.appendChild(style);
})();
