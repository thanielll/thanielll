# Safe Cleanup Notes

This repository already has a working portfolio design. Cleanup should improve organization without changing the live visual direction or breaking existing pages.

## Current Working Structure

The current site relies on these working files:

- `index.html` for the homepage.
- `case-studies.html` for the case study archive.
- `case-study.html` as a shared/base case study template.
- Individual case study pages such as `case-study-consilium-dynamics.html` and `case-study-genieum.html`.
- `style.css` for the main layout and visual system.
- `assets/css/launch-fixes.css` for late-stage responsive and launch fixes.
- `script.js` for navigation, project rendering, single case study rendering, media rendering, and scroll reveal.
- Multiple supporting scripts in `assets/js/` that enhance specific sections and preserve the current design.

## What Went Wrong During the Previous Cleanup

A previous cleanup attempted to replace the working structure with a new centralized system. That caused visual regressions because it removed or bypassed supporting scripts and CSS that were part of the actual live design direction.

The safer approach is to clean up gradually instead of replacing the whole structure at once.

## Safe Cleanup Priorities

### Safe to Do Now

- Improve documentation.
- Add repository maintenance notes.
- Add `.editorconfig`, `.gitignore`, and `.prettierrc`.
- Add README guidance for future case studies.
- Add new folders only when they do not affect live references.
- Add helper docs for asset naming and case study workflow.

### Needs Careful Testing Before Merge

- Moving CSS out of JavaScript.
- Splitting `script.js` into smaller files.
- Centralizing case study data.
- Renaming asset folders or files.
- Replacing individual case study pages with one dynamic template.
- Changing script loading order.
- Removing any `assets/js/` file.

### Avoid Unless Fully Tested

- Deleting section enhancement scripts.
- Renaming `assets/case-studies/consilium dynamics/` while live HTML or JS still references it.
- Renaming `assets/images/Nathaniel Logo.png` or `assets/images/About Me.png` without updating every reference.
- Removing query strings from CSS/JS includes if cache behavior matters.

## Recommended Future Cleanup Plan

### Phase 1: Documentation and Repository Hygiene

No visual changes.

- Update README.
- Add docs.
- Add `.editorconfig`, `.gitignore`, `.prettierrc`.
- Add safe naming conventions for new assets.

### Phase 2: Asset Mapping

No renames yet.

Create a documented map of every image/PDF path currently used by:

- `index.html`
- `case-studies.html`
- `case-study.html`
- individual case study pages
- `script.js`
- supporting JS files
- `site.webmanifest`
- CSS files

Only after this mapping is complete should any asset be renamed.

### Phase 3: Case Study Data Cleanup

Do not delete old files first.

- Create a centralized data file.
- Make the homepage/archive read from the centralized file.
- Keep old individual case study pages working.
- Keep current scripts available until the new flow is verified.
- Test each project page manually.

### Phase 4: CSS/JS Refactor

One section at a time.

- Move only one injected CSS block into a CSS file at a time.
- Compare the live design before and after.
- Keep the same class names and selector behavior.
- Do not remove the old script until the CSS replacement is verified.

### Phase 5: Final Cleanup

Only after visual QA.

- Remove unused scripts.
- Remove deprecated paths.
- Rename assets if needed.
- Update sitemap and metadata.
- Merge to main only after desktop/mobile review.

## Manual QA Checklist

Before merging any cleanup branch:

- Homepage loads without console errors.
- Header and mobile menu work.
- Hero section looks the same as before.
- Featured case study card stays contained.
- About image loads.
- Testimonial section styling remains intact.
- Best For section styling remains intact.
- Project cards render correctly.
- Case studies archive renders correctly.
- Individual case study pages still work.
- Screenshots and PDFs still open.
- Desktop, tablet, and mobile views are checked.
- Vercel preview is checked before merging.

## Naming Convention for New Files

For new files only, use lowercase kebab-case:

```txt
project-thumbnail.jpg
homepage-after.jpg
homepage-before.jpg
mobile-preview.jpg
brand-guidelines.pdf
```

Do not rename existing working assets until all references are mapped and tested.
