/*
  Case study data compatibility adapter.

  Important:
  - This file is intentionally NOT loaded by the current live HTML pages yet.
  - It does not mutate window.caseStudies automatically.
  - It only exposes helper methods for a future migration.
*/

(function prepareCaseStudyAdapter() {
  const getPreparedStudies = () =>
    Array.isArray(window.NRPortfolioCaseStudies) ? window.NRPortfolioCaseStudies : [];

  const toLegacyStudy = (study) => ({
    title: study.title || '',
    slug: study.slug || '',
    category: study.category || '',
    summary: study.summary || '',
    tags: Array.isArray(study.tags) ? study.tags : [],
    filters: Array.isArray(study.filters) ? study.filters : [],
    services: Array.isArray(study.services) ? study.services : [],
    tools: Array.isArray(study.tools) ? study.tools : [],
    image: study.image || '',
    fallbackImage: study.fallbackImage || '',
    mockup: study.mockup || 'preview-healthcare',
    featured: Boolean(study.featured),
    link:
      study.links?.archiveCard ||
      study.links?.dynamicTemplate ||
      `case-study.html?project=${encodeURIComponent(study.slug || '')}`,
    liveLink: study.links?.live || '',
    clientIndustry: study.clientIndustry || '',
    projectType: study.projectType || study.category || '',
    referenceLink: study.links?.reference || '',
    assetFolder: study.assetFolder || '',
    assetFileNames: Array.isArray(study.assetFileNames) ? study.assetFileNames : [],
    status: study.status || '',
    challenge: Array.isArray(study.challenge) ? study.challenge : [],
    solution: Array.isArray(study.solution) ? study.solution : [],
    outcome: Array.isArray(study.outcome) ? study.outcome : [],
    screenshots: Array.isArray(study.screenshots) ? study.screenshots : [],
    pdfs: Array.isArray(study.pdfs) ? study.pdfs : []
  });

  const toLegacyStudies = () => getPreparedStudies().map(toLegacyStudy);

  const mergeIntoLegacyCaseStudies = () => {
    const preparedLegacyStudies = toLegacyStudies();
    window.caseStudies = Array.isArray(window.caseStudies) ? window.caseStudies : [];

    preparedLegacyStudies.forEach((study) => {
      if (!study.slug) return;
      const exists = window.caseStudies.some((currentStudy) => currentStudy.slug === study.slug);
      if (!exists) window.caseStudies.push(study);
    });

    return window.caseStudies;
  };

  window.NRPortfolioCaseStudyAdapter = {
    getPreparedStudies,
    toLegacyStudy,
    toLegacyStudies,
    mergeIntoLegacyCaseStudies
  };
})();
