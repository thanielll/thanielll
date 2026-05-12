# Case Study Adapter Test Page

This branch adds an isolated test page for the prepared case study data and adapter.

## New Page

```txt
case-study-data-test.html
```

## Purpose

The page checks whether the prepared centralized data and adapter can load and convert data into the current legacy format without touching the live homepage, archive, or case study templates.

## Safety Details

The page is:

- Not linked from the live site navigation.
- Marked with `noindex, nofollow`.
- Isolated from existing portfolio rendering.
- Not used by homepage, archive, or case study pages.

It loads only:

```txt
assets/data/case-studies.js
assets/data/case-study-adapter.js
```

It calls:

```js
window.NRPortfolioCaseStudyAdapter.toLegacyStudies()
```

It does **not** call:

```js
window.NRPortfolioCaseStudyAdapter.mergeIntoLegacyCaseStudies()
```

So it does not mutate the current live `window.caseStudies` data.

## Expected Test Results

On the test page, the status cards should show:

```txt
Prepared Data: Loaded
Prepared Count: 3
Adapter: Loaded
Legacy Output: 3 items
```

The page should render three cards:

- Consilium Dynamics Website Redesign
- Genieum Custom Elementor Website
- Human Prosperity Lab Website Build

## Manual QA

Open the page in the Vercel preview for this branch:

```txt
/case-study-data-test.html
```

Then confirm:

- The page loads.
- There are no console errors.
- It shows 3 prepared case studies.
- The live homepage still looks unchanged.
- The live case studies archive still works.
- Dedicated case study pages still work.

## Future Step

If this page works, the next safe migration step is to test the adapter in a controlled way on one real page, while keeping all existing scripts loaded as fallback.
