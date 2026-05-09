const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('#primary-navigation');
const caseStudies = Array.isArray(window.caseStudies) ? window.caseStudies : [];

const applyBrandingPolish = () => {
  document.querySelectorAll('.brand-mark').forEach((mark) => {
    if (mark.querySelector('img')) return;

    mark.classList.add('brand-logo-wrap');
    mark.innerHTML = '<img src="assets/images/Nathaniel%20Logo.png" alt="Nathaniel Rodriguez logo" />';
  });

  const style = document.createElement('style');
  style.setAttribute('data-branding-polish', 'true');
  style.textContent = `
    .brand {
      gap: 0.9rem;
    }

    .brand-logo-wrap {
      position: relative;
      width: 48px;
      height: 48px;
      overflow: hidden;
      border-radius: 0 !important;
      padding: 0.34rem;
      background: var(--color-ink) !important;
      border: 1px solid var(--color-ink) !important;
      box-shadow: 7px 7px 0 rgba(var(--color-accent-rgb), 0.16);
      transition: transform var(--motion-fast) ease, box-shadow var(--motion-fast) ease, border-color var(--motion-fast) ease;
    }

    .brand-logo-wrap::before,
    .brand-logo-wrap::after {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      pointer-events: none;
      transition: transform var(--motion-fast) ease, opacity var(--motion-fast) ease;
    }

    .brand-logo-wrap::before {
      top: 4px;
      left: 4px;
      border-top: 1px solid rgba(255, 253, 247, 0.56);
      border-left: 1px solid rgba(255, 253, 247, 0.56);
    }

    .brand-logo-wrap::after {
      right: 4px;
      bottom: 4px;
      border-right: 1px solid rgba(var(--color-accent-rgb), 0.75);
      border-bottom: 1px solid rgba(var(--color-accent-rgb), 0.75);
    }

    .brand:hover .brand-logo-wrap,
    .brand:focus-visible .brand-logo-wrap {
      transform: translate(-2px, -2px);
      border-color: var(--color-accent) !important;
      box-shadow: 10px 10px 0 rgba(var(--color-accent-rgb), 0.2);
    }

    .brand-logo-wrap img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: contain;
      filter: brightness(0) invert(1);
    }

    .btn,
    .filter-chip,
    .channel-card,
    .trust-row li,
    .credential-row li,
    .tools-grid li,
    .tools-row li,
    .case-tags li,
    .service-card,
    .project-card,
    .case-card,
    .value-item,
    .process-step,
    .tools-panel,
    .overview-grid article,
    .highlight-grid article,
    .screenshot-panel,
    .best-for-grid article,
    .hero-stat,
    .hero-accent p,
    .hero-accent li,
    .nav-toggle,
    .skip-link,
    .channel-icon,
    .channel-mark {
      border-radius: 0 !important;
    }

    .btn {
      isolation: isolate;
      min-height: 52px;
      border-width: 1px;
      box-shadow: 5px 5px 0 rgba(var(--color-accent-rgb), 0.14);
      transform: translate(0, 0);
    }

    .btn::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      background: linear-gradient(120deg, transparent 0 48%, rgba(var(--color-accent-rgb), 0.22) 48% 52%, transparent 52% 100%);
      transform: translateX(-115%);
      transition: transform 260ms ease;
    }

    .btn:hover,
    .btn:focus-visible {
      transform: translate(-2px, -2px) !important;
      box-shadow: 8px 8px 0 rgba(var(--color-accent-rgb), 0.2);
    }

    .btn:hover::before,
    .btn:focus-visible::before {
      transform: translateX(115%);
    }

    .btn-dark {
      background: var(--color-ink) !important;
      border-color: var(--color-ink) !important;
    }

    .btn-light,
    .btn-white,
    .btn-outline-dark,
    .filter-chip {
      box-shadow: 4px 4px 0 rgba(var(--color-accent-rgb), 0.1);
    }

    .about-portrait {
      position: relative;
      align-self: center;
      max-width: 480px;
      margin: 0 0 0 auto;
      isolation: isolate;
    }

    .about-portrait::before {
      content: "";
      position: absolute;
      inset: -1.1rem -1.1rem 3.2rem 2.4rem;
      z-index: -2;
      border: 1px solid rgba(var(--color-accent-rgb), 0.18);
      background:
        linear-gradient(90deg, rgba(var(--color-accent-rgb), 0.05) 1px, transparent 1px),
        linear-gradient(rgba(var(--color-accent-rgb), 0.05) 1px, transparent 1px),
        rgba(var(--color-surface-rgb), 0.4);
      background-size: 34px 34px;
      transform: translate(18px, -18px);
    }

    .about-portrait::after {
      content: "";
      position: absolute;
      right: -1.45rem;
      bottom: 4.6rem;
      z-index: -1;
      width: 42%;
      height: 38%;
      border: 1px solid rgba(var(--color-accent-rgb), 0.18);
      transform: rotate(13deg);
    }

    .about-portrait-frame {
      position: relative;
      overflow: hidden;
      border: 1px solid var(--color-border);
      background: var(--color-surface);
      box-shadow: 14px 14px 0 rgba(var(--color-accent-rgb), 0.11);
      aspect-ratio: 4 / 4.65;
    }

    .about-portrait-frame::before {
      content: "";
      position: absolute;
      inset: 14px;
      z-index: 2;
      border: 1px solid rgba(255, 253, 247, 0.42);
      pointer-events: none;
    }

    .about-portrait-frame::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 1;
      background:
        linear-gradient(180deg, transparent 58%, rgba(20, 20, 20, 0.18)),
        radial-gradient(circle at 22% 18%, rgba(var(--color-accent-rgb), 0.2), transparent 32%);
      mix-blend-mode: multiply;
      pointer-events: none;
    }

    .about-portrait img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      filter: grayscale(0.1) sepia(0.08) contrast(1.03) saturate(0.95);
      transform: scale(1.01);
    }

    .about-portrait figcaption {
      position: relative;
      width: calc(100% - 3rem);
      margin: -2.6rem auto 0;
      border: 1px solid rgba(var(--color-accent-rgb), 0.36);
      padding: 0.82rem 0.95rem;
      background: rgba(var(--color-surface-rgb), 0.92);
      box-shadow: 8px 8px 0 rgba(var(--color-accent-rgb), 0.12);
      backdrop-filter: blur(12px);
    }

    .about-portrait figcaption span,
    .about-portrait figcaption strong {
      display: block;
      font-size: 0.75rem;
      font-weight: 900;
      line-height: 1.25;
      text-transform: uppercase;
    }

    .about-portrait figcaption span {
      color: var(--color-accent-dark);
    }

    .about-portrait figcaption strong {
      margin-top: 0.32rem;
      color: var(--color-ink);
    }

    @media (max-width: 980px) {
      .about-portrait {
        max-width: 420px;
        margin-inline: 0;
      }
    }

    @media (max-width: 640px) {
      .brand-name {
        max-width: 170px;
      }

      .brand-logo-wrap {
        width: 42px;
        height: 42px;
        box-shadow: 5px 5px 0 rgba(var(--color-accent-rgb), 0.14);
      }

      .about-portrait::before,
      .about-portrait::after {
        display: none;
      }

      .about-portrait-frame {
        box-shadow: 8px 8px 0 rgba(var(--color-accent-rgb), 0.1);
      }
    }
  `;
  document.head.appendChild(style);
};

const closeNavigation = () => {
  if (!navToggle || !navLinks) return;

  navLinks.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('nav-open');
};

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');

    navToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('nav-open', isOpen);
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNavigation);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNavigation();
    }
  });
}

const updateHeaderState = () => {
  if (!header) return;

  header.classList.toggle('is-scrolled', window.scrollY > 18);
};

updateHeaderState();
window.addEventListener('scroll', updateHeaderState, { passive: true });

const escapeHTML = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const renderTagList = (tags = []) =>
  tags.map((tag) => `<li>${escapeHTML(tag)}</li>`).join('');

const renderMockup = (study) => {
  if (study.image) {
    return `
      <div class="project-preview has-image" role="img" aria-label="${escapeHTML(study.title)} screenshot">
        <img src="${escapeHTML(study.image)}" alt="${escapeHTML(study.title)} screenshot" loading="lazy">
      </div>
    `;
  }

  return `
    <div class="project-preview ${escapeHTML(study.mockup || 'preview-healthcare')}" role="img" aria-label="${escapeHTML(study.title)} website preview">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;
};

const renderFeaturedProjects = () => {
  const featuredGrid = document.querySelector('[data-featured-projects]');
  if (!featuredGrid || !caseStudies.length) return;

  const featuredProjects = caseStudies.filter((study) => study.featured).slice(0, 3);

  featuredGrid.innerHTML = featuredProjects
    .map(
      (study) => `
        <article class="project-card">
          <a class="project-link" href="${escapeHTML(study.link)}">
            ${renderMockup(study)}
            <div class="project-content">
              <p>${escapeHTML(study.category)}</p>
              <h3>${escapeHTML(study.title)}</h3>
              <span class="project-summary">${escapeHTML(study.summary)}</span>
              <ul>${renderTagList(study.tags.slice(0, 3))}</ul>
              <span class="text-link">View Case Study <span aria-hidden="true">-></span></span>
            </div>
          </a>
        </article>
      `
    )
    .join('');
};

const cardMatchesFilter = (study, filter) => {
  if (filter === 'All') return true;

  const filterPool = [study.category, ...(study.filters || []), ...(study.tags || [])].join(' ').toLowerCase();
  return filterPool.includes(filter.toLowerCase());
};

const renderArchiveProjects = (filter = 'All') => {
  const archiveGrid = document.querySelector('[data-case-study-grid]');
  if (!archiveGrid || !caseStudies.length) return;

  const visibleStudies = caseStudies.filter((study) => cardMatchesFilter(study, filter));

  archiveGrid.innerHTML = visibleStudies
    .map(
      (study) => `
        <article class="case-card">
          <a class="case-card-link" href="${escapeHTML(study.link)}">
            ${renderMockup(study)}
            <div class="case-card-body">
              <p>${escapeHTML(study.category)}</p>
              <h2>${escapeHTML(study.title)}</h2>
              <span>${escapeHTML(study.summary)}</span>
              <ul>${renderTagList(study.tags.slice(0, 4))}</ul>
              <strong>View Case Study <span aria-hidden="true">-></span></strong>
            </div>
          </a>
        </article>
      `
    )
    .join('');
};

const setupCaseStudyFilters = () => {
  const filterButtons = document.querySelectorAll('[data-filter]');
  if (!filterButtons.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter || 'All';

      filterButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle('is-active', isActive);
        item.setAttribute('aria-pressed', String(isActive));
      });

      renderArchiveProjects(filter);
    });
  });
};

const renderSingleCaseStudy = () => {
  const caseTemplate = document.querySelector('[data-case-template]');
  if (!caseTemplate || !caseStudies.length) return;

  const params = new URLSearchParams(window.location.search);
  const requestedSlug = params.get('project') || 'dental-practice-website';
  const study = caseStudies.find((item) => item.slug === requestedSlug) || caseStudies[0];
  const services = study.services || [];
  const tools = study.tools || [];

  const textTargets = [
    ['[data-case-category]', study.category],
    ['[data-case-title]', study.title],
    ['[data-case-summary]', `${study.summary} ${study.status || 'Case study notes cover the intended page flow, build approach, and WordPress structure.'}`],
    ['[data-case-industry]', study.category],
    ['[data-case-services]', services.join(', ') || 'WordPress website design and Elementor Pro development'],
    ['[data-case-platform]', study.tags?.includes('WooCommerce') ? 'WordPress / WooCommerce' : 'WordPress'],
    ['[data-case-tools]', tools.join(', ') || 'WordPress, Elementor Pro, Figma'],
    ['[data-case-type]', study.category],
    ['[data-case-reference]', 'Portfolio case study'],
    ['[data-screen-title]', study.title],
    ['[data-screenshot-primary]', `${study.title} Preview`]
  ];

  textTargets.forEach(([selector, value]) => {
    const target = caseTemplate.querySelector(selector);
    if (target) target.textContent = value;
  });

  const tagTarget = caseTemplate.querySelector('[data-case-tags]');
  if (tagTarget) tagTarget.innerHTML = renderTagList(study.tags || []);

  const toolsTarget = caseTemplate.querySelector('[data-case-tools-list]');
  if (toolsTarget) toolsTarget.innerHTML = renderTagList(tools);

  document.title = `${study.title} Case Study | Nathaniel Rodriguez`;
};

const setupScrollReveal = () => {
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (motionQuery.matches || !('IntersectionObserver' in window)) return;

  const revealSelectors = [
    '.section-heading',
    '.value-item',
    '.about-copy',
    '.about-portrait',
    '.tools-panel',
    '.best-for-grid article',
    '.service-card',
    '.project-card',
    '.process-step',
    '.cta-copy',
    '.channel-card',
    '.archive-intro',
    '.case-card',
    '.case-hero-copy',
    '.case-hero-visual',
    '.case-section-heading',
    '.overview-grid article',
    '.highlight-grid article',
    '.case-copy',
    '.screenshot-panel',
    '.tools-row li'
  ];

  const revealItems = [...document.querySelectorAll(revealSelectors.join(','))];
  if (!revealItems.length) return;

  document.documentElement.classList.add('has-reveal');

  revealItems.forEach((item, index) => {
    item.classList.add('reveal');
    item.style.setProperty('--reveal-delay', `${Math.min((index % 3) * 20, 40)}ms`);
    item.addEventListener('focusin', () => item.classList.add('is-visible'));
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: '0px 0px 18% 0px',
      threshold: 0.12
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
};

applyBrandingPolish();
renderFeaturedProjects();
renderArchiveProjects();
setupCaseStudyFilters();
renderSingleCaseStudy();
setupScrollReveal();
