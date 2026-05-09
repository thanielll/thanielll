(function siteTemplateConsistency() {
  const logoPath = 'assets/images/Nathaniel%20Logo.png';
  const emailHref = 'mailto:freelancer.rnathaniel@gmail.com';
  const whatsappHref = 'https://wa.me/639752445048';
  const linkedInHref = 'https://www.linkedin.com/in/rnaths';
  const githubHref = 'https://github.com/thanielll';
  const upworkHref = 'https://www.upwork.com/freelancers/~01e812a28cc6f0769d';

  const ensureFavicons = () => {
    document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]').forEach((item) => item.remove());

    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = logoPath;
    favicon.type = 'image/png';

    const appleIcon = document.createElement('link');
    appleIcon.rel = 'apple-touch-icon';
    appleIcon.href = logoPath;

    document.head.append(favicon, appleIcon);
  };

  const normalizeHeader = () => {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const brand = header.querySelector('.brand');
    if (brand) {
      brand.setAttribute('href', brand.getAttribute('href')?.includes('index.html') ? 'index.html#home' : '#home');
      brand.setAttribute('aria-label', 'Nathaniel Rodriguez home');
      brand.innerHTML = `
        <span class="brand-mark brand-logo-wrap"><img src="${logoPath}" alt="Nathaniel Rodriguez logo" /></span>
        <span class="brand-name">Nathaniel Rodriguez</span>
      `;
    }

    const nav = header.querySelector('#primary-navigation');
    if (nav) {
      const fileName = location.pathname.split('/').pop();
      const isHome = location.pathname.endsWith('/') || fileName === 'index.html' || !fileName;
      const prefix = isHome ? '' : 'index.html';
      nav.innerHTML = `
        <a href="${prefix}#home">Home</a>
        <a href="${prefix}#services">Services</a>
        <a href="${prefix}#work">Work</a>
        <a href="case-studies.html">Case Studies</a>
        <a href="${prefix}#process">Process</a>
        <a href="${prefix}#about">About</a>
        <a href="${prefix}#contact">Contact</a>
        <a class="btn btn-dark nav-mobile-cta" href="${emailHref}">Let's Work Together</a>
      `;

      if (location.pathname.includes('case-stud')) {
        nav.querySelector('a[href="case-studies.html"]')?.setAttribute('aria-current', 'page');
      }
    }

    const cta = header.querySelector('.nav-cta');
    if (cta) {
      cta.setAttribute('href', emailHref);
      cta.textContent = "Let's Work Together";
    }
  };

  const normalizeFooter = () => {
    const footerIntro = document.querySelector('.footer-intro');
    if (!footerIntro) return;

    const brand = footerIntro.querySelector('.footer-brand, .footer-brand-lockup');
    if (brand) {
      brand.outerHTML = `
        <a class="footer-brand-lockup" href="index.html#home" aria-label="Nathaniel Rodriguez home">
          <span class="footer-brand-logo"><img src="${logoPath}" alt="Nathaniel Rodriguez logo"></span>
          <span><span>Portfolio</span><strong>Nathaniel Rodriguez</strong></span>
        </a>
      `;
    }

    const contact = footerIntro.querySelector('.footer-contact');
    if (contact) {
      contact.innerHTML = `
        <a href="${emailHref}"><span>Email</span> freelancer.rnathaniel@gmail.com</a>
        <a href="${whatsappHref}" target="_blank" rel="noopener"><span>WhatsApp</span> 09752445048</a>
      `;
    }

    const socialSection = [...document.querySelectorAll('.site-footer h2')].find((heading) => heading.textContent.trim().toLowerCase() === 'social')?.parentElement;
    const socialLinks = socialSection?.querySelector('.footer-links');
    if (socialLinks) {
      socialLinks.innerHTML = `
        <a href="${linkedInHref}" target="_blank" rel="noopener">LinkedIn</a>
        <a href="${githubHref}" target="_blank" rel="noopener">GitHub</a>
        <a href="${upworkHref}" target="_blank" rel="noopener">Upwork</a>
      `;
    }
  };

  const loadScriptOnce = (src) => {
    if (document.querySelector(`script[src="${src}"]`)) return;

    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    document.body.appendChild(script);
  };

  const isCaseTemplate = document.body.hasAttribute('data-case-template');

  ensureFavicons();
  normalizeHeader();
  normalizeFooter();
  loadScriptOnce('assets/js/pointer-effect.js');
  loadScriptOnce('assets/js/portfolio-polish.js');
  loadScriptOnce('assets/js/section-watermarks.js');

  if (!isCaseTemplate) {
    loadScriptOnce('assets/js/testimonial-section.js');
    loadScriptOnce('assets/js/best-for-section.js');
    loadScriptOnce('assets/js/process-section.js');
    loadScriptOnce('assets/js/portrait-hover.js');
    loadScriptOnce('assets/js/conversion-upgrades.js');
    loadScriptOnce('assets/js/portfolio-final-pass.js');
  }
})();
