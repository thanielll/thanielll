# Asset Map

This file documents important live asset paths. Use this before renaming, moving, or deleting files.

## Brand / Profile Assets Currently Referenced

These are currently referenced by the working live site and should not be renamed without updating every reference:

```txt
assets/images/Nathaniel%20Logo.png
assets/images/About%20Me.png
assets/images/favicon.svg
```

## Consilium Dynamics Assets Currently Referenced

These paths are used by the existing design, metadata, case study cards, and case study pages:

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

## Existing HTML Pages

```txt
index.html
case-studies.html
case-study.html
case-study-consilium-dynamics.html
case-study-genieum.html
case-study-dental-practice-website.html
```

## Current Script Loading Pattern

The homepage currently depends on this order:

```html
<script src="assets/js/case-studies.js?v=20260510"></script>
<script src="assets/js/genieum-case-study-data.js?v=20260510"></script>
<script src="assets/js/consilium-case-study.js?v=20260510"></script>
<script src="assets/js/human-prosperity-lab-case-study.js?v=20260510"></script>
<script src="script.js?v=20260510"></script>
<script src="assets/js/home-case-study-grid.js?v=20260510"></script>
```

Do not remove or reorder these until the rendering has been checked on the homepage, archive page, and individual case study pages.

## Safe Asset Naming for New Files

For new files, use lowercase kebab-case:

```txt
project-thumbnail.jpg
homepage-after.jpg
homepage-before.jpg
mobile-preview.jpg
internal-pages.jpg
old-website-design.pdf
new-website-design.pdf
```

Existing files can be renamed later, but only after a full reference map and visual QA.
