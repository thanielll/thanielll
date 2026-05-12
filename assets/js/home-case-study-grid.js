(function renderHomepageFeaturedCaseStudies() {
  if (
    window.NRPortfolioCaseStudyAdapter &&
    typeof window.NRPortfolioCaseStudyAdapter.mergeIntoLegacyCaseStudies === 'function'
  ) {
    window.NRPortfolioCaseStudyAdapter.mergeIntoLegacyCaseStudies();
  }

  const grid = document.querySelector('[data-featured-projects]');
  const studies = Array.isArray(window.caseStudies) ? window.caseStudies : [];
  if (!grid || !studies.length) return;

  const uniqueStudies = studies.filter((study, index, source) =>
    study.slug && source.findIndex((currentStudy) => currentStudy.slug === study.slug) === index
  );
  const featuredStudies = uniqueStudies.filter((study) => study.featured);
  const fallbackStudies = uniqueStudies.filter((study) => !study.featured);
  const homepageStudies = [...featuredStudies, ...fallbackStudies].slice(0, 3);

  const escapeHTML = (value) => String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const renderTags = (tags = []) => tags.slice(0, 3).map((tag) => `<li>${escapeHTML(tag)}</li>`).join('');

  const renderImage = (study) => {
    const image = study.image || study.fallbackImage;
    if (!image) {
      return `<div class="project-preview ${escapeHTML(study.mockup || 'preview-healthcare')}" role="img" aria-label="${escapeHTML(study.title)} website preview"><span></span><span></span><span></span></div>`;
    }

    return `<div class="project-preview has-image" role="img" aria-label="${escapeHTML(study.title)} screenshot"><img src="${escapeHTML(image)}" alt="${escapeHTML(study.title)} screenshot" loading="lazy"></div>`;
  };

  grid.innerHTML = homepageStudies.map((study) => `
    <article class="project-card">
      <a class="project-link" href="${escapeHTML(study.link)}">
        ${renderImage(study)}
        <div class="project-content">
          <p>${escapeHTML(study.category)}</p>
          <h3>${escapeHTML(study.title)}</h3>
          <span class="project-summary">${escapeHTML(study.summary)}</span>
          <ul>${renderTags(study.tags)}</ul>
          <span class="text-link">View Case Study <span aria-hidden="true">-></span></span>
        </div>
      </a>
    </article>
  `).join('');

  const existingAction = grid.parentElement.querySelector('[data-featured-projects-action]');
  if (!existingAction) {
    grid.insertAdjacentHTML('afterend', `
      <div class="featured-projects-action" data-featured-projects-action>
        <a class="btn btn-dark" href="case-studies.html">View Case Studies</a>
      </div>
    `);
  }
})();
