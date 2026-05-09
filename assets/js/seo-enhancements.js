(function applySeoEnhancements() {
  const siteUrl = 'https://thanielll.github.io/thanielll/';
  const logoUrl = `${siteUrl}assets/images/Nathaniel%20Logo.png`;
  const defaultImage = `${siteUrl}assets/case-studies/consilium%20dynamics/Project%20Thumbnail.jpg`;
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const normalizedPath = currentPath === 'index.html' ? '' : currentPath;
  const canonicalUrl = `${siteUrl}${normalizedPath}`;

  const pageData = {
    '': {
      title: 'Nathaniel Rodriguez | WordPress Website Designer & Elementor Developer',
      description: 'Nathaniel Rodriguez designs and develops responsive WordPress websites using Elementor Pro, Figma-to-WordPress workflows, landing pages, redesigns, and SEO-friendly page structures for businesses and agencies.',
      image: defaultImage,
      type: 'website'
    },
    'case-studies.html': {
      title: 'WordPress & Elementor Case Studies | Nathaniel Rodriguez',
      description: 'Explore WordPress, Elementor Pro, Figma-to-WordPress, landing page, website redesign, and SEO-friendly website case studies by Nathaniel Rodriguez.',
      image: defaultImage,
      type: 'website'
    },
    'case-study-consilium-dynamics.html': {
      title: 'Consilium Dynamics Website Redesign Case Study | Nathaniel Rodriguez',
      description: 'A premium Figma-to-WordPress redesign case study for Consilium Dynamics, built with Elementor Pro, responsive structure, SEO-ready layout, and clearer conversion paths.',
      image: defaultImage,
      type: 'article'
    },
    'case-study-dental-practice-website.html': {
      title: 'Website Project Case Study | Nathaniel Rodriguez',
      description: 'A WordPress and Elementor website project case study by Nathaniel Rodriguez, covering design direction, responsive development, and SEO-friendly page structure.',
      image: defaultImage,
      type: 'article'
    }
  };

  const data = pageData[normalizedPath] || pageData[currentPath] || pageData[''];

  const setMeta = (selector, attrs) => {
    let tag = document.head.querySelector(selector);
    if (!tag) {
      tag = document.createElement('meta');
      Object.entries(attrs.create || {}).forEach(([key, value]) => tag.setAttribute(key, value));
      document.head.appendChild(tag);
    }
    Object.entries(attrs.set || {}).forEach(([key, value]) => tag.setAttribute(key, value));
  };

  const setLink = (rel, href) => {
    let tag = document.head.querySelector(`link[rel="${rel}"]`);
    if (!tag) {
      tag = document.createElement('link');
      tag.setAttribute('rel', rel);
      document.head.appendChild(tag);
    }
    tag.setAttribute('href', href);
  };

  document.title = data.title;
  setMeta('meta[name="description"]', { create: { name: 'description' }, set: { content: data.description } });
  setMeta('meta[name="robots"]', { create: { name: 'robots' }, set: { content: 'index, follow, max-image-preview:large' } });
  setMeta('meta[name="author"]', { create: { name: 'author' }, set: { content: 'Nathaniel Rodriguez' } });
  setMeta('meta[property="og:title"]', { create: { property: 'og:title' }, set: { content: data.title } });
  setMeta('meta[property="og:description"]', { create: { property: 'og:description' }, set: { content: data.description } });
  setMeta('meta[property="og:type"]', { create: { property: 'og:type' }, set: { content: data.type } });
  setMeta('meta[property="og:url"]', { create: { property: 'og:url' }, set: { content: canonicalUrl } });
  setMeta('meta[property="og:image"]', { create: { property: 'og:image' }, set: { content: data.image } });
  setMeta('meta[property="og:image:alt"]', { create: { property: 'og:image:alt' }, set: { content: 'Nathaniel Rodriguez WordPress and Elementor portfolio preview' } });
  setMeta('meta[name="twitter:card"]', { create: { name: 'twitter:card' }, set: { content: 'summary_large_image' } });
  setMeta('meta[name="twitter:title"]', { create: { name: 'twitter:title' }, set: { content: data.title } });
  setMeta('meta[name="twitter:description"]', { create: { name: 'twitter:description' }, set: { content: data.description } });
  setMeta('meta[name="twitter:image"]', { create: { name: 'twitter:image' }, set: { content: data.image } });
  setLink('canonical', canonicalUrl);
  setLink('manifest', `${siteUrl}site.webmanifest`);

  const removeExistingJsonLd = () => {
    document.head.querySelectorAll('script[data-seo-jsonld="true"]').forEach((script) => script.remove());
  };

  const addJsonLd = (schema) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-jsonld', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  };

  removeExistingJsonLd();

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}#person`,
    name: 'Nathaniel Rodriguez',
    url: siteUrl,
    image: `${siteUrl}assets/images/About%20Me.png`,
    jobTitle: 'WordPress Website Designer and Developer',
    description: 'WordPress Website Designer and Developer specializing in Elementor Pro, Figma-to-WordPress builds, responsive websites, landing pages, redesigns, and SEO-friendly page structures.',
    knowsAbout: ['WordPress', 'Elementor Pro', 'Figma to WordPress', 'Responsive Web Design', 'Landing Page Design', 'SEO-Friendly Website Structure'],
    sameAs: [
      'https://github.com/thanielll',
      'https://www.linkedin.com/in/rnaths',
      'https://www.upwork.com/freelancers/~01e812a28cc6f0769d'
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    url: siteUrl,
    name: 'Nathaniel Rodriguez Portfolio',
    description: pageData[''].description,
    publisher: { '@id': `${siteUrl}#person` }
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}#services`,
    name: 'Nathaniel Rodriguez WordPress Website Design and Development',
    url: siteUrl,
    image: logoUrl,
    provider: { '@id': `${siteUrl}#person` },
    areaServed: 'Worldwide',
    serviceType: ['WordPress Website Design', 'Elementor Pro Development', 'Figma to WordPress', 'Landing Page Design', 'Website Redesign'],
    description: 'Responsive WordPress website design and Elementor Pro development for businesses and agencies.'
  };

  addJsonLd(personSchema);
  addJsonLd(websiteSchema);
  addJsonLd(serviceSchema);

  if (normalizedPath === 'case-study-consilium-dynamics.html') {
    addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      '@id': `${canonicalUrl}#case-study`,
      name: 'Consilium Dynamics Website Redesign Case Study',
      url: canonicalUrl,
      image: defaultImage,
      author: { '@id': `${siteUrl}#person` },
      about: ['Website redesign', 'Figma to WordPress', 'Elementor Pro development', 'Responsive WordPress build'],
      description: data.description
    });
  }
})();
