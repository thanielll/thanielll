# SEO Metadata Audit

This audit covers low-risk metadata and support-file improvements only. It does not change layout, styling, JavaScript behavior, case study rendering, or asset paths.

## Current SEO Foundation

The site already has a good base:

- Homepage has title, meta description, canonical URL, Open Graph tags, Twitter card tags, theme color, manifest, and structured data.
- Case study archive has title, meta description, canonical URL, Open Graph tags, Twitter card, and theme color.
- Dedicated case study pages have unique titles, descriptions, canonical URLs, Open Graph tags, and CreativeWork schema.
- `robots.txt` allows crawling and points to the sitemap.
- `sitemap.xml` lists the homepage, case study archive, and dedicated case study pages.

## Safe Changes Made in This Branch

### `site.webmanifest`

Changed:

```json
"start_url": "/thanielll/"
```

To:

```json
"start_url": "/",
"scope": "/"
```

Reason:

The live site is deployed at `https://rnthaniel.vercel.app/`, not under `/thanielll/`. Setting `start_url` and `scope` to `/` is safer for the current Vercel deployment.

## Metadata Items Recommended Next

These are safe, but should be applied in a separate small PR or manually reviewed before merge:

### Homepage

Already good. Optional additions:

- Add `twitter:image:alt`.
- Confirm the OG image is the preferred social sharing preview.

### Case Studies Archive

Recommended additions:

- `og:site_name`
- `twitter:title`
- `twitter:description`
- `twitter:image`
- `twitter:image:alt`
- `og:image:alt`

### Consilium Case Study Page

Recommended additions:

- `og:site_name`
- `og:image:alt`
- `twitter:title`
- `twitter:description`
- `twitter:image`
- `twitter:image:alt`

### Genieum Case Study Page

Recommended additions:

- `og:site_name`
- `og:image:alt`
- `twitter:title`
- `twitter:description`
- `twitter:image`
- `twitter:image:alt`

### Shared Case Study Template

Recommended additions:

- `link rel="canonical"`
- `og:url`
- `og:site_name`
- `twitter:title`
- `twitter:description`
- `twitter:image` if a stable fallback image is preferred

Note: Since `case-study.html` can be dynamic based on the `?project=` query parameter, static crawlers may not see project-specific client-side metadata. Dedicated case study pages remain better for SEO unless the site moves to prerendered/static project pages.

## Sitemap Notes

Current sitemap contains:

```txt
https://rnthaniel.vercel.app/
https://rnthaniel.vercel.app/case-studies.html
https://rnthaniel.vercel.app/case-study-consilium-dynamics.html
https://rnthaniel.vercel.app/case-study-genieum.html
```

This is safe because the dedicated pages are currently stronger for static SEO than the dynamic `case-study.html?project=...` URLs.

Do not replace the dedicated page URLs with query-parameter URLs unless the dynamic pages are fully tested and intentionally chosen as canonical.

## SEO Cleanup Rules

- Do not rename image paths during metadata updates.
- Do not remove dedicated case study pages yet.
- Do not change canonical URLs until page strategy is finalized.
- Keep SEO changes in small PRs so visual regressions are easy to isolate.
- After each SEO PR, check the browser console and page source for invalid or duplicate tags.

## Manual QA Checklist

Before merging SEO metadata changes:

- Homepage source still contains title, description, canonical, OG tags, and schema.
- Archive page source still has a unique title and description.
- Consilium and Genieum case study pages still have unique titles and descriptions.
- Manifest loads successfully.
- Favicon still works.
- `robots.txt` still points to the correct sitemap.
- `sitemap.xml` still loads.
- No visual layout changes are present.
