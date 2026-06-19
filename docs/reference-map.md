# Reference Map

This document maps the current working portfolio files before any deeper cleanup. Use it to avoid removing, renaming, or replacing files that are still part of the live design.

## Current Main Branch Baseline

Current safe baseline:

```txt
main @ c6e0af683e6d19d04638166884e0791e95dffbbb
```

The current working site uses a layered static setup. Many scripts are not just data files; several also inject styling, normalize shared layout, or load additional enhancement scripts.

## Core Pages

| File | Purpose | Notes |
|---|---|---|
| `index.html` | Homepage | Loads main stylesheet, launch fixes, project data scripts, `script.js`, and `home-case-study-grid.js`. Do not change script order without testing. |
| `case-studies.html` | Case study archive | Uses `[data-case-study-grid]` and filter buttons. Depends on `window.caseStudies` and `script.js` rendering logic. |
| `case-study.html` | Shared/base case study template | Uses `data-case-template` and is populated by `script.js` from `window.caseStudies`. |
| `case-study-consilium-dynamics.html` | Dedicated Consilium case study page | Contains hardcoded Consilium content, screenshots, PDFs, metadata, and also loads supporting scripts. |
| `case-study-genieum.html` | Dedicated Genieum case study page | Contains hardcoded Genieum content and supporting scripts. |
| `case-study-dental-practice-website.html` | Older/placeholder case study page | Needs manual verification before deleting or redirecting. |

## Core Stylesheets

| File | Purpose | Safe to edit? |
|---|---|---|
| `style.css` | Main visual layout and responsive system | Yes, carefully. Test every page. |
| `assets/css/launch-fixes.css` | Late-stage polish and responsive fixes | Yes, carefully. This likely patches important design issues. |

## Important Scripts Loaded Directly

### Homepage: `index.html`

Current script order:

```html
<script src="assets/js/case-studies.js?v=20260510"></script>
<script src="assets/js/genieum-case-study-data.js?v=20260510"></script>
<script src="assets/js/consilium-case-study.js?v=20260510"></script>
<script src="assets/js/human-prosperity-lab-case-study.js?v=20260510"></script>
<script src="script.js?v=20260510"></script>
<script src="assets/js/home-case-study-grid.js?v=20260510"></script>
```

Important notes:

- `assets/js/case-studies.js` initializes `window.caseStudies = []` and injects a large warm theme style block.
- The three project-specific data files push project objects into `window.caseStudies`.
- `script.js` handles nav, rendering, filters, case template population, media/PDF rendering, and scroll reveal.
- `home-case-study-grid.js` re-renders all homepage case studies and can override the featured-project rendering in `script.js`.

### Case Study Archive: `case-studies.html`

Current script order:

```html
<script src="assets/js/case-studies.js?v=20260510"></script>
<script src="assets/js/genieum-case-study-data.js?v=20260510"></script>
<script src="assets/js/consilium-case-study.js?v=20260510"></script>
<script src="assets/js/human-prosperity-lab-case-study.js?v=20260510"></script>
<script src="assets/js/site-template.js?v=20260510"></script>
<script src="script.js?v=20260510"></script>
```

Important notes:

- `site-template.js` loads shared enhancement scripts dynamically.
- `script.js` renders the archive grid and filter behavior.
- Removing any project data file can remove projects from the archive.

### Shared Case Study Template: `case-study.html`

Current script order:

```html
<script src="assets/js/case-studies.js?v=20260510"></script>
<script src="assets/js/genieum-case-study-data.js?v=20260510"></script>
<script src="assets/js/consilium-case-study.js?v=20260510"></script>
<script src="assets/js/human-prosperity-lab-case-study.js?v=20260510"></script>
<script src="assets/js/site-template.js?v=20260510"></script>
<script src="script.js?v=20260510"></script>
```

Important notes:

- The template reads the URL query parameter `?project=...`.
- `script.js` populates `[data-case-*]` fields.
- This page should not replace the dedicated case study pages until tested.

### Dedicated Consilium Page

Current script order:

```html
<script src="assets/js/case-studies.js?v=20260510"></script>
<script src="assets/js/consilium-case-study.js?v=20260510"></script>
<script src="assets/js/site-template.js?v=20260510"></script>
<script src="script.js?v=20260510"></script>
```

Important notes:

- This page already has hardcoded case study content.
- It also has `data-case-template`, so `script.js` may still populate or modify parts of the page.
- Be careful changing dynamic behavior here.

### Dedicated Genieum Page

Current script order:

```html
<script src="assets/js/case-studies.js?v=20260510"></script>
<script src="assets/js/genieum-case-study-data.js?v=20260510"></script>
<script src="assets/js/site-template.js?v=20260510"></script>
<script src="script.js?v=20260510"></script>
```

Important notes:

- This page has hardcoded Genieum content.
- Unlike Consilium, the body does not use `data-case-template` in the current file.

## Dynamically Loaded Scripts

`assets/js/site-template.js` dynamically loads these scripts:

```txt
assets/js/seo-enhancements.js
assets/js/pointer-effect.js
assets/js/portfolio-polish.js
assets/js/section-watermarks.js
assets/js/eyebrow-consistency.js
assets/js/contact-brand-icons.js
```

On non-case-template pages, it also loads:

```txt
assets/js/testimonial-section.js
assets/js/best-for-section.js
assets/js/process-section.js
assets/js/portrait-hover.js
assets/js/conversion-upgrades.js
assets/js/portfolio-final-pass.js
```

Important:

- These files are part of the current design system.
- Do not delete them until each file is manually checked and its effect is either migrated or confirmed unused.

## JavaScript File Roles

| File | Current role | Cleanup risk |
|---|---|---|
| `script.js` | Main navigation, rendering, filters, media/PDF output, scroll reveal, and injected branding styles | High |
| `assets/js/case-studies.js` | Initializes case studies and injects warm portfolio visual theme | High |
| `assets/js/consilium-case-study.js` | Adds Consilium case study data and loads `site-template.js` if missing | Medium/High |
| `assets/js/genieum-case-study-data.js` | Adds Genieum case study data | Medium |
| `assets/js/human-prosperity-lab-case-study.js` | Adds HPL data and injects HPL preview styles | Medium |
| `assets/js/home-case-study-grid.js` | Re-renders homepage project grid using all case studies | Medium |
| `assets/js/site-template.js` | Normalizes header/footer, favicons, and loads enhancement scripts | High |
| `assets/js/page-loader.js` | Loading state behavior | Medium |
| `assets/js/pointer-effect.js` | Cursor/pointer movement effects | Medium |
| `assets/js/portfolio-polish.js` | Design polish | High until inspected |
| `assets/js/portfolio-final-pass.js` | Final design polish | High until inspected |
| `assets/js/conversion-upgrades.js` | Conversion/UI enhancements | High until inspected |
| `assets/js/testimonial-section.js` | Testimonial section styling/behavior | Medium/High |
| `assets/js/best-for-section.js` | Best For section styling/behavior | Medium/High |
| `assets/js/process-section.js` | Process section styling/behavior | Medium/High |
| `assets/js/portrait-hover.js` | About portrait interaction | Medium |
| `assets/js/section-watermarks.js` | Section decorative watermarks | Medium |
| `assets/js/seo-enhancements.js` | SEO/meta/schema enhancements | Medium |
| `assets/js/contact-brand-icons.js` | Contact icon/brand polish | Medium |
| `assets/js/eyebrow-consistency.js` | Eyebrow label consistency/styling | Medium |

## Case Study Data Sources

Current project data is not centralized yet.

### Global initializer and warm theme

```txt
assets/js/case-studies.js
```

- Sets `window.caseStudies = []`.
- Injects the warm portfolio visual refresh styles.

### Consilium Dynamics

Defined in:

```txt
script.js
assets/js/consilium-case-study.js
case-study-consilium-dynamics.html
```

Important:

- `script.js` contains a full `consiliumStudy` object and unshifts it into `caseStudies` if missing.
- `consilium-case-study.js` also creates a Consilium object if it does not exist.
- The dedicated HTML page also has hardcoded Consilium content.

### Genieum

Defined in:

```txt
assets/js/genieum-case-study-data.js
case-study-genieum.html
```

### Human Prosperity Lab

Defined in:

```txt
assets/js/human-prosperity-lab-case-study.js
```

## Current Live Asset Paths

Do not rename these until every reference is updated and tested.

### Brand/Profile

```txt
assets/images/Nathaniel%20Logo.png
assets/images/About%20Me.png
assets/images/favicon.svg
```

### Consilium Dynamics

```txt
assets/case-studies/consilium%20dynamics/Project%20Thumbnail.jpg
assets/case-studies/consilium%20dynamics/After%20CD.jpg
assets/case-studies/consilium%20dynamics/Before%20CD.jpg
assets/case-studies/consilium%20dynamics/CD%20Home.jpg
assets/case-studies/consilium%20dynamics/CD%20About.jpg
assets/case-studies/consilium%20dynamics/CD%20Book.jpg
assets/case-studies/consilium%20dynamics/Internal%20Pages.jpg
assets/case-studies/consilium%20dynamics/Old%20Website%20Design%20CD.pdf
assets/case-studies/consilium%20dynamics/New%20Website%20Design%20CD.pdf
```

### Genieum

```txt
assets/case-studies/genieum/Project%20Thumbnail.jpg
assets/case-studies/genieum/genieum-thumbnail.svg
assets/case-studies/genieum/Home%20Page.jpg
assets/case-studies/genieum/Hero%20Section.jpg
assets/case-studies/genieum/Dashboard%20Section.jpg
assets/case-studies/genieum/Mobile%20Responsive.jpg
```

### Human Prosperity Lab Planned Assets

Referenced as expected asset names in data but may not all exist yet:

```txt
assets/case-studies/human-prosperity-lab/Project Thumbnail.jpg
assets/case-studies/human-prosperity-lab/Homepage Preview.jpg
assets/case-studies/human-prosperity-lab/Mobile Preview.jpg
assets/case-studies/human-prosperity-lab/Brand Guidelines.jpg
assets/case-studies/human-prosperity-lab/About Section.jpg
assets/case-studies/human-prosperity-lab/Contact Section.jpg
assets/case-studies/human-prosperity-lab/Approved HPL Brand Guidelines.pdf
```

## Current External Links

```txt
mailto:freelancer.rnathaniel@gmail.com
https://wa.me/639752445048
https://www.linkedin.com/in/rnaths
https://github.com/thanielll
https://www.upwork.com/freelancers/~01e812a28cc6f0769d
https://www.consiliumdynamics.com/
https://genieum.com/
https://humanprosperitylab.com/
```

## SEO Files

| File | Status | Notes |
|---|---|---|
| `robots.txt` | Keep | Points to live sitemap. |
| `sitemap.xml` | Keep, later update carefully | Currently lists homepage, archive, Consilium page, and Genieum page. |
| `site.webmanifest` | Keep, needs later review | `start_url` currently uses `/thanielll/`; confirm whether this is intentional for Vercel. |

## Safe Cleanup Opportunities

### Safe now

- Documentation updates.
- Add config files.
- Add more reference maps.
- Add comments to docs.
- Add future naming convention guidance.

### Safe after review

- Update sitemap to include `case-study.html?project=...` only if those pages are intended to be indexed.
- Add `og:site_name` to pages that are missing it.
- Add `twitter:image:alt` where missing.
- Improve README.

### Risky and should be separate PRs

- Moving injected CSS from `assets/js/case-studies.js` into CSS.
- Moving injected branding styles from `script.js` into CSS.
- Splitting `script.js`.
- Centralizing all case study data.
- Removing duplicate Consilium data.
- Removing dynamic script loading from `site-template.js`.
- Renaming asset files/folders.

## Recommended Next PRs

### PR A: Documentation and repository hygiene

Already started in the safe cleanup branch.

### PR B: SEO metadata polish only

Small, controlled changes:

- Add missing `og:site_name`.
- Add missing `twitter:image:alt`.
- Review `site.webmanifest` `start_url`.
- Do not touch layout or JS.

### PR C: Case study data centralization, no deletions

- Add a new `assets/data/case-studies.js` copied from existing data.
- Load it without removing old files.
- Confirm no visual changes.
- Then remove duplicates in later PRs.

### PR D: Move one injected CSS block only

Start with the smallest block:

```txt
assets/js/human-prosperity-lab-case-study.js
```

Move only `.preview-hpl` styles into CSS, keep the data script, and test.

## Merge Rule

No cleanup PR should be merged unless:

- Homepage looks the same.
- Case study archive works.
- Consilium page works.
- Genieum page works.
- Mobile nav works.
- Browser console has no new errors.
- All image/PDF links still work.
