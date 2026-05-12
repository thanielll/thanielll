# Case Study Adapter Merge Test

This branch updates the isolated test page so it can test the adapter merge function without touching the real homepage, archive, or case study pages.

## Updated Page

```txt
case-study-data-test.html
```

## What It Tests

The page creates a small local `window.caseStudies` test array with:

1. One placeholder legacy item.
2. One intentionally duplicated Consilium slug.

Then it calls:

```js
window.NRPortfolioCaseStudyAdapter.mergeIntoLegacyCaseStudies();
```

This verifies that the adapter:

- Keeps existing legacy items.
- Appends prepared studies.
- Does not add duplicate studies when the slug already exists.

## Why This Is Safe

This merge only happens inside `case-study-data-test.html`.

The real site pages are not changed:

- `index.html`
- `case-studies.html`
- `case-study.html`
- `case-study-consilium-dynamics.html`
- `case-study-genieum.html`

The test page is still:

- Not linked from live navigation.
- Marked `noindex, nofollow`.
- Isolated from real rendering.

## Expected Test Results

On `/case-study-data-test.html`, the status cards should show something close to:

```txt
Prepared Data: Loaded
Prepared Count: 3
Adapter: Loaded
Merged Legacy Output: 4 items
Before Merge: 2 items
After Merge: 4 items
Duplicate Slugs: None
Merge Status: Passed
```

Why 4 items?

- 1 placeholder legacy item
- 1 existing Consilium duplicate test item
- 1 added Genieum item
- 1 added Human Prosperity Lab item

The prepared Consilium item should not be added because the duplicate slug already exists.

## Manual QA

Open the Vercel preview page:

```txt
/case-study-data-test.html
```

Confirm:

- Merge Status says `Passed`.
- Duplicate Slugs says `None`.
- No console errors.
- Homepage remains unchanged.
- Archive remains unchanged.
- Dedicated case study pages remain unchanged.

## Future Step

If this passes, the next migration step is to test the adapter on a real page in a controlled way, preferably the case study archive only, while keeping all old files loaded as fallback.
