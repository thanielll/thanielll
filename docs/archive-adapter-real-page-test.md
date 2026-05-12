# Real Archive Adapter Test

This branch tests the prepared case study data adapter on the real archive page in an isolated stacked branch.

## Updated Page

```txt
case-studies.html
```

## What Changed

The page now loads the prepared centralized data and adapter before the old project fallback scripts:

```html
<script src="assets/js/case-studies.js?v=20260510"></script>
<script src="assets/data/case-studies.js"></script>
<script src="assets/data/case-study-adapter.js"></script>
<script>
  window.NRPortfolioCaseStudyAdapter.mergeIntoLegacyCaseStudies();
</script>
<script src="assets/js/genieum-case-study-data.js?v=20260510"></script>
<script src="assets/js/consilium-case-study.js?v=20260510"></script>
<script src="assets/js/human-prosperity-lab-case-study.js?v=20260510"></script>
<script src="assets/js/site-template.js?v=20260510"></script>
<script src="script.js?v=20260510"></script>
```

## Why This Is Still Controlled

This change is not on `main`.
It is stacked on the previous adapter test branches.
All old fallback data scripts are still loaded.
No files are removed.
No CSS or layout is changed.
No assets are renamed.

## Expected Result

On `/case-studies.html` in the Vercel preview for this branch:

- Archive cards render.
- Filters work.
- Project links work.
- No duplicate project cards appear.
- The grid should still use the existing `script.js` rendering logic.

## Console Checks

Run:

```js
window.caseStudies.map((study) => study.slug)
```

Then:

```js
new Set(window.caseStudies.map((study) => study.slug)).size === window.caseStudies.length
```

Expected:

```txt
true
```

## Pages to Check

```txt
/
/case-studies.html
/case-studies-adapter-test.html
/case-study-data-test.html
/case-study-consilium-dynamics.html
/case-study-genieum.html
/case-study.html?project=consilium-dynamics-website-redesign
/case-study.html?project=genieum-custom-elementor-website
/case-study.html?project=human-prosperity-lab-website-build
```

## Future Step

If this passes, the next safe step is to apply the same adapter loading/merge pattern to the dynamic `case-study.html` template only, while keeping all old scripts loaded as fallback.
