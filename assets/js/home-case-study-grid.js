(function renderAllHomepageCaseStudies() {
  const grid = document.querySelector('[data-featured-projects]');
  const studies = Array.isArray(window.caseStudies) ? window.caseStudies : [];
  if (!grid || !studies.length) return;

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

    const fallback = study.fallbackImage && study.fallbackImage !== image
      ? ` onerror="this.onerror=null;this.src='${escapeHTML(study.fallbackImage)}';"`
      : '';

    return `<div class="project-preview has-image" role="img" aria-label="${escapeHTML(study.title)} screenshot"><img src="${escapeHTML(image)}" alt="${escapeHTML(study.title)} screenshot" loading="lazy"${fallback}></div>`;
  };

  grid.innerHTML = studies.map((study) => `
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
})();
