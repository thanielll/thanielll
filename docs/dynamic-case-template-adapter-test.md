# Dynamic Case Study Template Adapter Test

This branch tests the prepared case study data adapter on the dynamic shared case study template.

## Updated Page

```txt
case-study.html
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

## Why This Is Controlled

This change is not on `main`.
It is stacked on previous adapter test branches.
All old fallback data scripts are still loaded.
No files are removed.
No CSS or layout is changed.
No assets are renamed.
The existing `script.js` still renders/populates the dynamic case study template.

## Expected Result

These URLs should still work in the Vercel preview for this branch:

```txt
/case-study.html?project=consilium-dynamics-website-redesign
/case-study.html?project=genieum-custom-elementor-website
/case-study.html?project=human-prosperity-lab-website-build
```

Expected:

- Correct project content loads.
- Hero/title/category/summary update properly.
- Tags render.
- Overview details render.
- Challenge/solution/outcome sections render.
- Screenshot/PDF sections still work where available.
- No duplicate project data in `window.caseStudies`.

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
/case-study.html?project=consilium-dynamics-website-redesign
/case-study.html?project=genieum-custom-elementor-website
/case-study.html?project=human-prosperity-lab-website-build
/case-study-consilium-dynamics.html
/case-study-genieum.html
```

## Future Step

If this passes, the next safe step is to test the adapter loading/merge pattern on the homepage carefully, because the homepage has extra project rendering behavior through `home-case-study-grid.js`.
