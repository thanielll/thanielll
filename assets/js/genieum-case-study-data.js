(function addGenieumCaseStudyData() {
  window.caseStudies = Array.isArray(window.caseStudies) ? window.caseStudies : [];

  const genieumStudy = {
    title: 'Genieum Custom Elementor Website',
    slug: 'genieum-custom-elementor-website',
    category: 'Figma to WordPress / Elementor Pro',
    summary: 'A custom WordPress website developed from Figma designs using Elementor Pro, with custom CSS refinements for a cleaner, responsive, modern layout.',
    tags: ['WordPress', 'Elementor Pro', 'Figma', 'CSS'],
    filters: ['WordPress', 'Elementor', 'Figma to WordPress'],
    services: ['Figma to WordPress', 'Elementor Pro Development', 'Custom CSS Styling', 'Responsive Website Build'],
    tools: ['WordPress', 'Elementor Pro', 'Figma', 'CSS'],
    image: 'assets/case-studies/genieum/Project%20Thumbnail.jpg',
    fallbackImage: 'assets/case-studies/genieum/genieum-thumbnail.svg',
    mockup: 'preview-genieum',
    featured: false,
    link: 'case-study-genieum.html',
    liveLink: 'https://genieum.com/',
    clientIndustry: 'Trade Credit / SaaS Platform',
    projectType: 'Custom Elementor Website / Figma to WordPress',
    referenceLink: 'Live Genieum website',
    status: 'Converted a Figma design into a clean, responsive WordPress website using Elementor Pro and custom CSS for more precise styling control.',
    challenge: [
      'Genieum needed its Figma website design converted into a responsive WordPress site while keeping the visual direction clean, modern, and aligned with the approved design.',
      'The build required more control than standard Elementor settings alone could provide, especially for layout details, spacing, and unique styling refinements.'
    ],
    solution: [
      'I developed the website in WordPress using Elementor Pro, carefully translating the Figma layout into editable sections while keeping the design visually consistent across screen sizes.',
      'I also added custom CSS where needed to improve styling precision, responsive behavior, and layout control beyond the default builder options.'
    ],
    outcome: [
      'The result is a clean, modern, responsive WordPress website that reflects the original Figma design while remaining manageable through Elementor Pro.',
      'The custom CSS enhancements helped improve polish, consistency, and flexibility across the final build.'
    ],
    screenshots: [
      { label: 'Project Thumbnail', src: 'assets/case-studies/genieum/Project%20Thumbnail.jpg', fallback: 'assets/case-studies/genieum/genieum-thumbnail.svg' },
      { label: 'Home Page Preview', src: 'assets/case-studies/genieum/Home%20Page.jpg' },
      { label: 'Hero Section Preview', src: 'assets/case-studies/genieum/Hero%20Section.jpg' },
      { label: 'Dashboard Section Preview', src: 'assets/case-studies/genieum/Dashboard%20Section.jpg' },
      { label: 'Mobile Responsive Preview', src: 'assets/case-studies/genieum/Mobile%20Responsive.jpg' }
    ]
  };

  if (!window.caseStudies.some((study) => study.slug === genieumStudy.slug)) {
    window.caseStudies.push(genieumStudy);
  }
})();
