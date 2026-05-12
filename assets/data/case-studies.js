/*
  Central case study data preparation file.

  Important:
  - This file is intentionally NOT loaded by the current live HTML pages yet.
  - Existing working files remain the source of truth for the live site:
    - script.js
    - assets/js/case-studies.js
    - assets/js/consilium-case-study.js
    - assets/js/genieum-case-study-data.js
    - assets/js/human-prosperity-lab-case-study.js
  - This file prepares a cleaner future migration without changing current design or behavior.
*/

window.NRPortfolioCaseStudies = [
  {
    title: 'Consilium Dynamics Website Redesign',
    slug: 'consilium-dynamics-website-redesign',
    category: 'Website Redesign / Figma to WordPress',
    summary:
      'A premium website redesign for Consilium Dynamics, a strategic advisory firm, focused on stronger hierarchy, refined visual direction, responsive WordPress implementation, and clearer conversion paths.',
    tags: ['Figma', 'WordPress', 'Elementor Pro', 'Website Redesign'],
    filters: ['WordPress', 'Elementor', 'Figma to WordPress', 'Landing Pages', 'SEO'],
    services: [
      'Website Redesign',
      'Figma Design Mockup',
      'Elementor Pro Development',
      'Responsive WordPress Build',
      'SEO-Ready Setup'
    ],
    tools: ['Figma', 'WordPress', 'Elementor Pro', 'CSS', 'Responsive Design'],
    image: 'assets/case-studies/consilium%20dynamics/Project%20Thumbnail.jpg',
    fallbackImage: '',
    mockup: 'preview-consilium',
    featured: true,
    links: {
      archiveCard: 'case-study-consilium-dynamics.html',
      dynamicTemplate: 'case-study.html?project=consilium-dynamics-website-redesign',
      live: 'https://www.consiliumdynamics.com/',
      reference: 'Live Consilium Dynamics website'
    },
    clientIndustry: 'Strategic Advisory / Business Consulting',
    projectType: 'Website Redesign / Figma to WordPress',
    status:
      'Designed in Figma and implemented in WordPress using Elementor Pro with a responsive, SEO-ready, conversion-focused structure.',
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
      {
        label: 'Project Thumbnail',
        src: 'assets/case-studies/consilium%20dynamics/Project%20Thumbnail.jpg',
        alt: 'Consilium Dynamics project thumbnail'
      },
      {
        label: 'After Homepage View',
        src: 'assets/case-studies/consilium%20dynamics/After%20CD.jpg',
        alt: 'Consilium Dynamics after homepage view'
      },
      {
        label: 'Before Homepage View',
        src: 'assets/case-studies/consilium%20dynamics/Before%20CD.jpg',
        alt: 'Consilium Dynamics before homepage view'
      },
      {
        label: 'Home Page Layout',
        src: 'assets/case-studies/consilium%20dynamics/CD%20Home.jpg',
        alt: 'Consilium Dynamics home page layout'
      },
      {
        label: 'About Page Layout',
        src: 'assets/case-studies/consilium%20dynamics/CD%20About.jpg',
        alt: 'Consilium Dynamics about page layout'
      },
      {
        label: 'Book Page Layout',
        src: 'assets/case-studies/consilium%20dynamics/CD%20Book.jpg',
        alt: 'Consilium Dynamics book page layout'
      },
      {
        label: 'Internal Pages Overview',
        src: 'assets/case-studies/consilium%20dynamics/Internal%20Pages.jpg',
        alt: 'Consilium Dynamics internal pages overview'
      }
    ],
    pdfs: [
      {
        label: 'Old Website Design PDF',
        src: 'assets/case-studies/consilium%20dynamics/Old%20Website%20Design%20CD.pdf'
      },
      {
        label: 'New Website Design PDF',
        src: 'assets/case-studies/consilium%20dynamics/New%20Website%20Design%20CD.pdf'
      }
    ],
    seo: {
      title: 'Consilium Dynamics Website Redesign Case Study | Nathaniel Rodriguez',
      description:
        'Consilium Dynamics website redesign case study by Nathaniel Rodriguez, covering Figma design direction, WordPress Elementor Pro development, responsive implementation, and SEO-ready structure.',
      canonical: 'https://rnthaniel.vercel.app/case-study-consilium-dynamics.html',
      ogImage:
        'https://rnthaniel.vercel.app/assets/case-studies/consilium%20dynamics/Project%20Thumbnail.jpg'
    }
  },
  {
    title: 'Genieum Custom Elementor Website',
    slug: 'genieum-custom-elementor-website',
    category: 'Figma to WordPress / Elementor Pro',
    summary:
      'A custom WordPress website developed from Figma designs using Elementor Pro, with custom CSS refinements for a cleaner, responsive, modern layout.',
    tags: ['WordPress', 'Elementor Pro', 'Figma', 'CSS'],
    filters: ['WordPress', 'Elementor', 'Figma to WordPress'],
    services: [
      'Figma to WordPress',
      'Elementor Pro Development',
      'Custom CSS Styling',
      'Responsive Website Build'
    ],
    tools: ['WordPress', 'Elementor Pro', 'Figma', 'CSS'],
    image: 'assets/case-studies/genieum/Project%20Thumbnail.jpg',
    fallbackImage: 'assets/case-studies/genieum/genieum-thumbnail.svg',
    mockup: 'preview-genieum',
    featured: false,
    links: {
      archiveCard: 'case-study.html?project=genieum-custom-elementor-website',
      dedicatedPage: 'case-study-genieum.html',
      live: 'https://genieum.com/',
      reference: 'Live Genieum website'
    },
    clientIndustry: 'Trade Credit Platform',
    projectType: 'Custom Elementor Website / Figma to WordPress',
    status:
      'Converted a Figma design into a clean, responsive WordPress website using Elementor Pro and custom CSS for more precise styling control.',
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
      {
        label: 'Project Thumbnail',
        src: 'assets/case-studies/genieum/Project%20Thumbnail.jpg',
        fallback: 'assets/case-studies/genieum/genieum-thumbnail.svg',
        alt: 'Genieum project thumbnail'
      },
      {
        label: 'Home Page Preview',
        src: 'assets/case-studies/genieum/Home%20Page.jpg',
        alt: 'Genieum home page preview'
      },
      {
        label: 'Hero Section Preview',
        src: 'assets/case-studies/genieum/Hero%20Section.jpg',
        alt: 'Genieum hero section preview'
      },
      {
        label: 'Dashboard Section Preview',
        src: 'assets/case-studies/genieum/Dashboard%20Section.jpg',
        alt: 'Genieum dashboard section preview'
      },
      {
        label: 'Mobile Responsive Preview',
        src: 'assets/case-studies/genieum/Mobile%20Responsive.jpg',
        alt: 'Genieum mobile responsive preview'
      }
    ],
    pdfs: [],
    seo: {
      title: 'Genieum Custom Elementor Website Case Study | Nathaniel Rodriguez',
      description:
        'Genieum custom Elementor website case study by Nathaniel Rodriguez, covering Figma to WordPress development, Elementor Pro implementation, custom CSS styling, and responsive website build.',
      canonical: 'https://rnthaniel.vercel.app/case-study-genieum.html',
      ogImage: 'https://rnthaniel.vercel.app/assets/case-studies/genieum/genieum-thumbnail.svg'
    }
  },
  {
    title: 'Ivy Aesthetic Med Spa Web Design and Development',
    slug: 'ivy-aesthetic-med-spa-web-design-development',
    category: 'Medical Spa Website / WordPress Development',
    summary:
      'A premium medical spa website designed and developed to showcase aesthetic services, attract new clients, and support a clean, high-end booking-focused user experience.',
    tags: ['Web Design', 'Landing Page', 'Responsive Design', 'Elementor', 'Figma'],
    filters: ['WordPress', 'Elementor', 'Figma to WordPress', 'Landing Pages'],
    services: [
      'Web Design',
      'WordPress Development',
      'Elementor Pro Development',
      'Responsive Website Design',
      'Conversion-Focused Service Pages'
    ],
    tools: ['WordPress', 'Elementor Pro', 'Figma', 'Responsive Design'],
    image: '',
    fallbackImage: '',
    mockup: 'preview-healthcare',
    featured: false,
    publishedDate: '2026-01-29',
    links: {
      archiveCard: 'case-study.html?project=ivy-aesthetic-med-spa-web-design-development',
      live: 'https://ivyaestheticmedspa.com/',
      reference: 'Live Ivy Aesthetic Med Spa website'
    },
    clientIndustry: 'Medical Spa / Aesthetic Services',
    projectType: 'Web Design and WordPress Development',
    assetFolder: 'assets/case-studies/ivy-aesthetic-med-spa/',
    assetFileNames: [
      'project-thumbnail.jpg',
      'homepage-preview.jpg',
      'service-page-preview.jpg',
      'mobile-preview.jpg',
      'booking-section.jpg'
    ],
    status:
      'Designed and developed as a premium medical spa website using WordPress and Elementor Pro, with a clean high-end aesthetic, responsive layout, and conversion-focused service presentation.',
    challenge: [
      'Ivy Aesthetic Med Spa needed a polished online presence that could present its services clearly while feeling premium, calm, and aligned with the high-end aesthetic of the brand.',
      'The website needed to help visitors understand the available treatments, build trust quickly, and move toward booking or enquiry actions without feeling cluttered or overly sales-driven.'
    ],
    solution: [
      'I designed and developed the website using WordPress and Elementor Pro, focusing on clean visual hierarchy, elegant spacing, soft brand presentation, and service pages that are easy to scan.',
      'The build focused on responsive layouts, strong calls to action, clear service pathways, and a refined design style that supports both new client acquisition and a premium medical spa experience.'
    ],
    outcome: [
      'The finished website gives Ivy Aesthetic Med Spa a more professional and polished digital presence, helping visitors quickly understand the brand, services, and booking options.',
      'The WordPress and Elementor setup provides a manageable foundation for service updates, future landing pages, and ongoing improvements as the business grows.'
    ],
    screenshots: [],
    pdfs: [],
    seo: {
      title: 'Ivy Aesthetic Med Spa Web Design and Development Case Study | Nathaniel Rodriguez',
      description:
        'Ivy Aesthetic Med Spa web design and development case study by Nathaniel Rodriguez, covering WordPress Elementor development, responsive design, premium service pages, and conversion-focused website structure.',
      canonical:
        'https://rnthaniel.vercel.app/case-study.html?project=ivy-aesthetic-med-spa-web-design-development',
      ogImage: ''
    }
  },
  {
    title: 'Human Prosperity Lab Website Build',
    slug: 'human-prosperity-lab-website-build',
    category: 'Brand Website / WordPress Build',
    summary:
      'A complete brand and website experience for Human Prosperity Lab, focused on clear brand presentation, responsive WordPress implementation, and a credible modern online presence.',
    tags: ['WordPress', 'Elementor', 'Brand Guidelines', 'Figma'],
    filters: ['WordPress', 'Elementor', 'Figma to WordPress', 'Landing Pages', 'SEO'],
    services: [
      'Brand Guidelines',
      'Website Design',
      'Elementor Development',
      'Responsive WordPress Build'
    ],
    tools: ['WordPress', 'Elementor', 'Figma', 'Brand Guidelines', 'Responsive Design'],
    image: '',
    fallbackImage: '',
    mockup: 'preview-hpl',
    featured: true,
    links: {
      archiveCard: 'case-study.html?project=human-prosperity-lab-website-build',
      live: 'https://humanprosperitylab.com/',
      reference: 'Live Human Prosperity Lab website'
    },
    clientIndustry: 'Leadership / Human-Centered Business',
    projectType: 'Brand Website / WordPress Build',
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
    status:
      'Built as a complete brand and website experience with brand guidelines, Figma layout direction, and responsive WordPress implementation using Elementor Pro.',
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
    screenshots: [],
    pdfs: [],
    seo: {
      title: 'Human Prosperity Lab Website Build Case Study | Nathaniel Rodriguez',
      description:
        'Human Prosperity Lab website build case study by Nathaniel Rodriguez, covering brand guidelines, WordPress Elementor implementation, responsive structure, and a credible modern online presence.',
      canonical: 'https://rnthaniel.vercel.app/case-study.html?project=human-prosperity-lab-website-build',
      ogImage: ''
    }
  }
];
