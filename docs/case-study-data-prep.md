# Case Study Data Preparation

This branch prepares a future centralized case study data file without changing the live site.

## New Files

```txt
assets/data/case-studies.js
assets/data/case-study-adapter.js
```

## Important Safety Notes

These files are **not loaded** by the current HTML pages yet.

The live site still uses the existing working files:

```txt
script.js
assets/js/case-studies.js
assets/js/consilium-case-study.js
assets/js/genieum-case-study-data.js
assets/js/human-prosperity-lab-case-study.js
```

No old file has been removed.
No script order has been changed.
No layout or styling has been changed.
No asset paths have been renamed.

## Why This Exists

The current case study data is spread across several files. This preparation file gives us a clean copy of the current case study data so a future migration can happen safely and gradually.

## Data Included

The prepared data file includes:

- Consilium Dynamics Website Redesign
- Genieum Custom Elementor Website
- Human Prosperity Lab Website Build

## Intentional Structure Choice

The data file uses:

```js
window.NRPortfolioCaseStudies = [...]
```

instead of:

```js
window.caseStudies = [...]
```

This avoids interfering with the current working site, which already uses `window.caseStudies`.

## Compatibility Adapter

The adapter file exposes:

```js
window.NRPortfolioCaseStudyAdapter
```

Available helper methods:

```js
getPreparedStudies()
toLegacyStudy(study)
toLegacyStudies()
mergeIntoLegacyCaseStudies()
```

Important:

- The adapter does not run unless the file is loaded.
- The adapter does not mutate `window.caseStudies` automatically.
- `mergeIntoLegacyCaseStudies()` must be called manually in a future migration branch.

## Future Migration Plan

### Step 1: Compare Data

Compare `window.NRPortfolioCaseStudies` against the existing data in:

- `script.js`
- `assets/js/consilium-case-study.js`
- `assets/js/genieum-case-study-data.js`
- `assets/js/human-prosperity-lab-case-study.js`

Make sure no project details, links, screenshots, PDFs, or statuses are missing.

### Step 2: Load as Read-Only

In a future branch, load `assets/data/case-studies.js` and `assets/data/case-study-adapter.js`, but do not render from them yet.

### Step 3: Use the Compatibility Adapter

Call the adapter manually in a controlled future branch:

```js
window.NRPortfolioCaseStudyAdapter.mergeIntoLegacyCaseStudies();
```

Only do this after confirming the existing old data files are still loaded as fallback.

### Step 4: Replace One Data Source at a Time

Start with the simplest project data file first. Do not delete multiple files at once.

Recommended order:

1. Human Prosperity Lab data
2. Genieum data
3. Consilium data
4. Consilium duplicate inside `script.js`

### Step 5: Keep Dedicated Pages Until SEO Strategy Is Decided

Do not remove:

```txt
case-study-consilium-dynamics.html
case-study-genieum.html
```

Dedicated pages are currently better for static SEO than dynamic query URLs.

## QA Checklist Before Future Migration

- Homepage project grid still renders correctly.
- Case study archive renders correctly.
- Archive filters still work.
- `case-study.html?project=consilium-dynamics-website-redesign` works.
- `case-study.html?project=genieum-custom-elementor-website` works.
- `case-study.html?project=human-prosperity-lab-website-build` works.
- `case-study-consilium-dynamics.html` still works.
- `case-study-genieum.html` still works.
- All screenshot links still open.
- PDF links still open.
- No console errors.
- No visual changes compared to current live site.
