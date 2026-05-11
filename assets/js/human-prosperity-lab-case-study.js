(function addHumanProsperityLabCaseStudy() {
  if (!Array.isArray(window.caseStudies)) return;

  if (!document.querySelector('[data-hpl-preview-style]')) {
    const style = document.createElement('style');
    style.setAttribute('data-hpl-preview-style', 'true');
    style.textContent = `
      .preview-hpl {
        overflow: hidden;
        align-content: stretch !important;
        background:
          linear-gradient(180deg, rgba(4, 77, 75, 0.96), rgba(4, 77, 75, 0.86)),
          radial-gradient(circle at 20% 22%, rgba(255, 253, 247, 0.22), transparent 34%) !important;
      }

      .preview-hpl::before {
        content: 'HUMAN\\A PROSPERITY\\A LAB';
        white-space: pre-line;
        position: absolute;
        left: 1.25rem;
        top: 1.15rem;
        z-index: 2;
        color: rgba(255, 253, 247, 0.92);
        font-family: Georgia, 'Times New Roman', serif;
        font-size: clamp(1.2rem, 2.2vw, 1.8rem);
        font-weight: 700;
        line-height: 0.92;
        letter-spacing: -0.045em;
      }

      .preview-hpl::after {
        content: 'WordPress / Elementor Build';
        position: absolute;
        left: 1.25rem;
        bottom: 1.15rem;
        z-index: 2;
        border: 1px solid rgba(255, 253, 247, 0.55) !important;
        padding: 0.48rem 0.62rem;
        color: rgba(255, 253, 247, 0.92);
        background: rgba(255, 253, 247, 0.08) !important;
        font-size: 0.62rem;
        font-weight: 900;
        letter-spacing: 0.07em;
        text-transform: uppercase;
      }

      .preview-hpl span:nth-child(1) {
        position: absolute;
        inset: 24% 0 auto 0;
        height: 42%;
        background: linear-gradient(135deg, rgba(255, 253, 247, 0.18), rgba(255, 253, 247, 0.04));
        transform: skewY(-8deg);
      }

      .preview-hpl span:nth-child(2) {
        position: absolute;
        right: 1.2rem;
        bottom: 1.2rem;
        width: 38%;
        height: 38%;
        border: 1px solid rgba(255, 253, 247, 0.38);
        border-radius: 999px !important;
        background: rgba(255, 253, 247, 0.08);
      }

      .preview-hpl span:nth-child(3) {
        position: absolute;
        left: 44%;
        top: 18%;
        width: 42%;
        height: 50%;
        border: 1px solid rgba(255, 253, 247, 0.24);
        transform: rotate(-12deg);
      }
    `;
    document.head.appendChild(style);
  }

  const exists = window.caseStudies.some((study) => study.slug === 'human-prosperity-lab-website-build');
  if (exists) return;

  window.caseStudies.push({
    title: 'Human Prosperity Lab Website Build',
    slug: 'human-prosperity-lab-website-build',
    category: 'Brand Website / WordPress Build',
    summary: 'A complete brand and website experience for Human Prosperity Lab, focused on clear brand presentation, responsive WordPress implementation, and a credible modern online presence.',
    tags: ['WordPress', 'Elementor', 'Brand Guidelines', 'Figma'],
    filters: ['WordPress', 'Elementor', 'Figma to WordPress', 'Landing Pages', 'SEO'],
    services: ['Brand Guidelines', 'Website Design', 'Elementor Development', 'Responsive WordPress Build'],
    tools: ['WordPress', 'Elementor', 'Figma', 'Brand Guidelines', 'Responsive Design'],
    mockup: 'preview-hpl',
    image: 'assets/case-studies/human-prosperity-lab/Project%20Thumbnail.jpg',
    imageFallback: true,
    featured: true,
    link: 'case-study-dental-practice-website.html?project=human-prosperity-lab-website-build',
    liveLink: 'https://humanprosperitylab.com/',
    clientIndustry: 'Leadership / Human-Centered Business',
    projectType: 'Brand Website / WordPress Build',
    referenceLink: 'Live Human Prosperity Lab website',
    assetFolder: 'assets/case-studies/human-prosperity-lab/',
    assetFileNames: [
      'Project Thumbnail.jpg',
      'Homepage Preview.jpg',
      'Mobile Preview.jpg',
      'Brand Guidelines.jpg',
      'About Section.jpg',
      'Contact Section.jpg',
      'Approved HPL Brand Guidelines.pdf'
    ],
    status: 'Built as a complete brand and website experience with brand guidelines, Figma layout direction, and responsive WordPress implementation using Elementor Pro.',
    challenge: [
      'Human Prosperity Lab needed a complete digital presence that could communicate its mission clearly while still feeling credible, modern, and aligned with its brand values.',
      'The website had to bring together brand direction, messaging, responsive layout, and a polished WordPress build without losing the calm, human-centered feel of the organization.'
    ],
    solution: [
      'I developed brand guidelines, designed the site layout, and created a responsive WordPress website using Elementor Pro with a clean structure and easy-to-manage sections.',
      'The build focused on clear hierarchy, thoughtful spacing, brand consistency, and a layout system that supports the organization’s messaging across desktop, tablet, and mobile.'
    ],
    outcome: [
      'The final website gives Human Prosperity Lab a credible and modern online presence that better supports its mission and makes the organization easier to understand at a glance.',
      'The WordPress setup provides a manageable foundation for future updates, additional content, and ongoing brand communication.'
    ],
    screenshots: [
      { label: 'Homepage Preview', src: 'assets/case-studies/human-prosperity-lab/Homepage%20Preview.jpg' },
      { label: 'Mobile Preview', src: 'assets/case-studies/human-prosperity-lab/Mobile%20Preview.jpg' },
      { label: 'Brand Guidelines', src: 'assets/case-studies/human-prosperity-lab/Brand%20Guidelines.jpg' },
      { label: 'About Section', src: 'assets/case-studies/human-prosperity-lab/About%20Section.jpg' },
      { label: 'Contact Section', src: 'assets/case-studies/human-prosperity-lab/Contact%20Section.jpg' }
    ],
    pdfs: [
      { label: 'Approved HPL Brand Guidelines PDF', src: 'assets/case-studies/human-prosperity-lab/Approved%20HPL%20Brand%20Guidelines.pdf' }
    ]
  });
})();
