(function addHumanProsperityLabCaseStudy() {
  if (!Array.isArray(window.caseStudies)) return;

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
    featured: true,
    link: 'case-study-dental-practice-website.html?project=human-prosperity-lab-website-build',
    liveLink: 'https://humanprosperitylab.com/',
    clientIndustry: 'Leadership / Human-Centered Business',
    projectType: 'Brand Website / WordPress Build',
    referenceLink: 'Live Human Prosperity Lab website',
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
    ]
  });
})();
