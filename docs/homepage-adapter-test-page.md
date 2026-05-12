# Homepage Adapter Test Page

This branch adds an isolated homepage project-grid test page.

## New Page

```txt
homepage-adapter-test.html
```

## Purpose

The homepage has extra project-grid behavior through:

```txt
assets/js/home-case-study-grid.js
```

Because of that, the adapter should be tested on an isolated page before changing the real homepage.

## Why This Is Safe

The real homepage is not changed:

```txt
index.html
```

The test page is:

- Not linked from live navigation.
- Marked `noindex, nofollow`.
- Isolated from the real homepage.
- Uses the same `data-featured-projects` target as the homepage.
- Loads the current project scripts and homepage grid renderer.

## Script Flow

The page loads:

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
<script src="script.js?v=20260510"></script>
<script src="assets/js/home-case-study-grid.js?v=20260510"></script>
```

This tests whether the adapter-populated data still works with both:

- the featured project renderer in `script.js`
- the final homepage grid renderer in `home-case-study-grid.js`

## Expected Result

On `/homepage-adapter-test.html`:

- Project cards render.
- No duplicate cards appear.
- Styling still matches the current portfolio cards.
- The real `/index.html` homepage remains unchanged.

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

## Future Step

If this isolated homepage test passes, the next safe step is to test the adapter on the real homepage in a stacked branch, while keeping all old data scripts loaded as fallback.
