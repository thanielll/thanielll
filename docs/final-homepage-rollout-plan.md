# Final Homepage Rollout Plan

The archive page and dynamic case study template have adapter test branches. The remaining real-page rollout target is the homepage.

## Goal

Apply the prepared case study adapter to the homepage project grid while keeping old data files loaded as fallback.

## Recommended Final Homepage Change

The safest implementation is to update:

```txt
assets/js/home-case-study-grid.js
```

At the top of the IIFE, before reading `window.caseStudies`, add:

```js
if (
  window.NRPortfolioCaseStudyAdapter &&
  typeof window.NRPortfolioCaseStudyAdapter.mergeIntoLegacyCaseStudies === 'function'
) {
  window.NRPortfolioCaseStudyAdapter.mergeIntoLegacyCaseStudies();
}
```

This allows the prepared centralized data to merge into the legacy project array before the homepage grid renders.

## Why This Is Safer Than Editing `index.html`

The homepage file is large and sensitive. Updating the small grid renderer limits the change to the project grid behavior only.

The real homepage currently loads:

```html
<script src="assets/js/case-studies.js?v=20260510"></script>
<script src="assets/js/genieum-case-study-data.js?v=20260510"></script>
<script src="assets/js/consilium-case-study.js?v=20260510"></script>
<script src="assets/js/human-prosperity-lab-case-study.js?v=20260510"></script>
<script src="script.js?v=20260510"></script>
<script src="assets/js/home-case-study-grid.js?v=20260510"></script>
```

The data and adapter are already loaded read-only through the prepared data loading step. The final homepage grid renderer only needs to call the adapter before rendering.

## Keep Fallbacks During First Rollout

Do not remove these yet:

```txt
assets/js/genieum-case-study-data.js
assets/js/consilium-case-study.js
assets/js/human-prosperity-lab-case-study.js
```

They should remain until homepage, archive, and dynamic case study template are confirmed stable.

## QA Checklist

After applying the homepage grid renderer change, check:

```txt
/
/homepage-adapter-test.html
/case-studies.html
/case-study.html?project=consilium-dynamics-website-redesign
/case-study.html?project=genieum-custom-elementor-website
/case-study.html?project=human-prosperity-lab-website-build
/case-study-consilium-dynamics.html
/case-study-genieum.html
```

Console check:

```js
new Set(window.caseStudies.map((study) => study.slug)).size === window.caseStudies.length
```

Expected:

```txt
true
```

## Final Cleanup After QA

Only after the adapter rollout is visually confirmed stable:

1. Remove duplicate data from `script.js`.
2. Remove one old project data file at a time.
3. Keep dedicated case study pages for SEO unless intentionally replacing them.
4. Move injected CSS into real CSS files one section at a time.
5. Rename assets only after every reference is mapped.
