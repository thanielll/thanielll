# Archive Adapter Test Page

This branch adds an isolated test page for the case study archive adapter flow.

## New Page

```txt
case-studies-adapter-test.html
```

## Purpose

This page tests whether the prepared centralized data can be merged into the current legacy `window.caseStudies` array and still render through the existing archive grid/filter system.

## Why This Is Safe

The real archive page is not changed:

```txt
case-studies.html
```

The test page is:

- Not linked from the live navigation.
- Marked `noindex, nofollow`.
- Isolated from the real case study archive.
- Uses the current archive markup and filter structure.

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
<script src="assets/js/site-template.js?v=20260510"></script>
<script src="script.js?v=20260510"></script>
```

This means:

1. The existing theme/data initializer still runs.
2. The prepared data is loaded.
3. The adapter merges prepared data into `window.caseStudies`.
4. Existing fallback project scripts still run after the merge.
5. Existing scripts should avoid duplicates because they check project slugs before pushing.
6. The current archive renderer in `script.js` still renders the grid.

## Expected Result

On `/case-studies-adapter-test.html`:

- The archive grid should render project cards.
- Filters should work.
- There should not be duplicate Consilium, Genieum, or Human Prosperity Lab cards.
- The real `/case-studies.html` page should remain unchanged.

## Manual QA

Check:

- `/case-studies-adapter-test.html`
- `/case-studies.html`
- `/`
- `/case-study-consilium-dynamics.html`
- `/case-study-genieum.html`

Browser console checks on the adapter test page:

```js
window.caseStudies.map((study) => study.slug)
```

Expected slugs should be unique.

```js
new Set(window.caseStudies.map((study) => study.slug)).size === window.caseStudies.length
```

Expected:

```txt
true
```

## Future Step

If this isolated archive adapter test passes, the next step is to test the same loading/merge pattern on the real `case-studies.html` page in a separate branch, while keeping old data scripts loaded as fallback.
