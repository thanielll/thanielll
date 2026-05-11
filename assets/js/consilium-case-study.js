(function addConsiliumDynamicsCaseStudy() {
  if (!Array.isArray(window.caseStudies)) return;

  const exists = window.caseStudies.some((study) => study.slug === 'consilium-dynamics-website-redesign');
  if (!exists) {
    window.caseStudies.unshift({
      title: 'Consilium Dynamics Website Redesign',
      slug: 'consilium-dynamics-website-redesign',
      category: 'Website Redesign / Figma to WordPress',
      summary: 'A premium website redesign for Consilium Dynamics, a strategic advisory firm, focused on stronger hierarchy, refined visual direction, responsive WordPress implementation, and clearer conversion paths.',
      tags: ['Figma', 'WordPress', 'Elementor Pro', 'Website Redesign'],
      filters: ['WordPress', 'Elementor', 'Figma to WordPress', 'Landing Pages', 'SEO'],
      services: ['Website Redesign', 'Figma Design Mockup', 'Elementor Pro Development', 'Responsive WordPress Build', 'SEO-Ready Setup'],
      tools: ['Figma', 'WordPress', 'Elementor Pro', 'CSS', 'Responsive Design'],
      image: 'assets/case-studies/consilium%20dynamics/Project%20Thumbnail.jpg',
      mockup: 'preview-consilium',
      featured: true,
      link: 'case-study.html?project=consilium-dynamics-website-redesign',
      liveLink: 'https://www.consiliumdynamics.com/',
      clientIndustry: 'Strategic Advisory / Business Consulting',
      projectType: 'Website Redesign / Figma to WordPress',
      referenceLink: 'Live Consilium Dynamics website',
      status: 'Designed in Figma and implemented in WordPress using Elementor Pro with a responsive, SEO-ready, conversion-focused structure.',
      challenge: [
        'Consilium Dynamics needed a more premium and authoritative online presence that better matched its strategic advisory positioning. The existing website had to communicate clarity, confidence, and executive-level trust while still guiding visitors toward meaningful enquiry actions.',
        'The redesign needed to improve visual hierarchy, spacing, brand consistency, and page flow without making the website feel overdesigned or difficult to manage in WordPress.'
      ],
      solution: [
        'I created the redesign direction in Figma, focusing on a darker premium visual style, refined typography, stronger content hierarchy, and clear section spacing. The final build was developed in WordPress using Elementor Pro for editable, responsive sections.',
        'The implementation focused on pixel-accurate layouts, clean structure, mobile responsiveness, SEO-ready page organization, and conversion-focused calls to action that support consultation and enquiry goals.'
      ],
      outcome: [
        'The finished redesign gives Consilium Dynamics a stronger digital presence with a more premium, strategic, and trustworthy feel. Visitors can now understand the firm’s value faster and move through the site with clearer direction.',
        'The WordPress build is structured for easier updates, better responsive performance, and a cleaner foundation for future content, resources, and internal page expansion.'
      ],
      screenshots: [
        { label: 'Project Thumbnail', src: 'assets/case-studies/consilium%20dynamics/Project%20Thumbnail.jpg' },
        { label: 'After Homepage View', src: 'assets/case-studies/consilium%20dynamics/After%20CD.jpg' },
        { label: 'Before Homepage View', src: 'assets/case-studies/consilium%20dynamics/Before%20CD.jpg' },
        { label: 'Home Page Layout', src: 'assets/case-studies/consilium%20dynamics/CD%20Home.jpg' },
        { label: 'About Page Layout', src: 'assets/case-studies/consilium%20dynamics/CD%20About.jpg' },
        { label: 'Book Page Layout', src: 'assets/case-studies/consilium%20dynamics/CD%20Book.jpg' },
        { label: 'Internal Pages Overview', src: 'assets/case-studies/consilium%20dynamics/Internal%20Pages.jpg' }
      ],
      pdfs: [
        { label: 'Old Website Design PDF', src: 'assets/case-studies/consilium%20dynamics/Old%20Website%20Design%20CD.pdf' },
        { label: 'New Website Design PDF', src: 'assets/case-studies/consilium%20dynamics/New%20Website%20Design%20CD.pdf' }
      ]
    });
  }
})();

(function loadSharedTemplateAndInteractions() {
  const scripts = ['assets/js/site-template.js'];

  scripts.forEach((src) => {
    if (document.querySelector(`script[src="${src}"]`)) return;

    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    document.body.appendChild(script);
  });
})();
