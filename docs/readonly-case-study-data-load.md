# Read-Only Case Study Data Load

This branch loads the prepared case study data files without changing current rendering behavior.

## Files Loaded

The existing `assets/js/page-loader.js` now appends these scripts to the document head:

```txt
assets/data/case-studies.js
assets/data/case-study-adapter.js
```

## Why It Uses `page-loader.js`

Every main portfolio page already loads `assets/js/page-loader.js` in the document head. Loading the prepared data from there avoids editing multiple HTML files and keeps the change small.

## Safety Behavior

The prepared data file uses:

```js
window.NRPortfolioCaseStudies
```

The current live rendering still uses:

```js
window.caseStudies
```

The adapter exposes:

```js
window.NRPortfolioCaseStudyAdapter
```

But this branch does **not** call:

```js
window.NRPortfolioCaseStudyAdapter.mergeIntoLegacyCaseStudies();
```

So the current project grid, case study archive, filters, and case study template should continue using the existing working data files.

## What This Branch Does Not Do

- Does not change HTML.
- Does not change CSS.
- Does not change case study rendering.
- Does not change script order for existing live scripts.
- Does not remove duplicate data.
- Does not rename assets.
- Does not call the adapter merge function.

## Manual Console Checks

After loading a Vercel preview, these should be true in the browser console:

```js
Array.isArray(window.NRPortfolioCaseStudies)
```

Expected:

```txt
true
```

```js
window.NRPortfolioCaseStudies.length
```

Expected:

```txt
3
```

```js
typeof window.NRPortfolioCaseStudyAdapter
```

Expected:

```txt
"object"
```

```js
typeof window.NRPortfolioCaseStudyAdapter.mergeIntoLegacyCaseStudies
```

Expected:

```txt
"function"
```

## Visual QA Checklist

There should be no visual change compared to `main`.

Check:

- Homepage hero and featured card
- Homepage project grid
- Case study archive grid
- Archive filters
- Consilium dedicated case study page
- Genieum dedicated case study page
- Dynamic case-study template pages
- Mobile navigation
- Browser console errors

## Future Step

If this branch passes QA, the next controlled migration step is to call the adapter on one page only, preferably the archive page or a test page, while keeping all old data files loaded as fallback.
