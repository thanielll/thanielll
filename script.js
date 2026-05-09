const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('#primary-navigation');
const caseStudies = Array.isArray(window.caseStudies) ? window.caseStudies : [];

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

  const featuredProjects = caseStudies.filter((study) => study.featured).slice(0, 4);

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

renderFeaturedProjects();
renderArchiveProjects();
setupCaseStudyFilters();
renderSingleCaseStudy();
