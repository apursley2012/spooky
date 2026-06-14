<!--
File: README.md
Document Title: spooky-github-pages-theme — Static Portfolio Theme
Author: Alysha Pursley
Date: June 2026
-->

<div align="center">

# spooky-github-pages-theme — Static Portfolio Theme

**A standalone static portfolio theme with a distinctive spooky-github-pages-theme visual direction.**

[![spooky-github-pages-theme Theme Preview](./images/screenshots/spooky-preview-placeholder.svg)](./images/screenshots/spooky-preview-placeholder.svg)

[Open the live demo](https://apursley2012.github.io/spooky/) · [Browse the full theme collection](https://github.com/apursley2012/github-pages-themes) · [Report an issue or request an addition](https://github.com/apursley2012/spooky/issues/new/choose)

</div>

---

## Table of Contents

- [Theme Overview](#theme-overview)
  - [Purpose](#purpose)
  - [Intended Users](#intended-users)
  - [Design Style and Inspiration](#design-style-and-inspiration)
  - [Main Color Palette](#main-color-palette)
  - [Preview Screenshots](#preview-screenshots)
- [Pages Included](#pages-included)
- [Component Architecture](#component-architecture)
- [File and Folder Structure](#file-and-folder-structure)
- [Static Project Notes](#static-project-notes)
- [Customization Guide](#customization-guide)
- [GitHub Pages Deployment](#github-pages-deployment)
- [Reporting Theme Issues or Requesting Additions](#reporting-theme-issues-or-requesting-additions)
- [Accessibility and Browser Compatibility](#accessibility-and-browser-compatibility)
- [Repository Relationship](#repository-relationship)
- [Possible Future Enhancements](#possible-future-enhancements)
- [Copyright](#copyright)

---

## Theme Overview

### Purpose

**spooky-github-pages-theme** is a distinctive static portfolio theme designed to highlight projects, skills, experience, writing, and professional identity through a defined visual direction.

This theme can be opened locally, hosted with GitHub Pages, or adapted into a standalone personal website. The included files are ready to publish directly from a GitHub repository.

### Intended Users

This theme is best suited to portfolio owners who want a site with a defined personality rather than a generic landing-page layout.

### Design Style and Inspiration

Category: **Portfolio Theme**

The visual direction should remain recognizable when the written content is customized. New content should fit into the existing structure while preserving the layout, spacing, contrast, and palette unless the person using the theme intentionally wants to create a new variation.

### Main Color Palette

| Color | Primary Use |
| --- | --- |
| `#FFF` | Used throughout the theme styling |
| `#0000` | Used throughout the theme styling |
| `#E5E7EB` | Used throughout the theme styling |
| `#9CA3AF` | Used throughout the theme styling |
| `#1A1A1D` | Used throughout the theme styling |
| `#FF7518` | Used throughout the theme styling |
| `#F5F5F5` | Used throughout the theme styling |
| `#4A1A5C` | Used throughout the theme styling |
| `#FCD34D` | Used throughout the theme styling |
| `#111` | Used throughout the theme styling |

### Preview Screenshots

Click any preview image to open the full-size file.

<p align="center">
  <a href="./images/screenshots/spooky-preview-placeholder.svg"><img src="./images/screenshots/spooky-preview-placeholder.svg" width="48%" style="max-width: 48%; height: auto;" alt="spooky-github-pages-theme preview image 1"></a>
</p>

#### Screenshot Gallery

[Open the screenshot folder](./images/screenshots/)

---

## Pages Included

| Page | Purpose |
| --- | --- |
| `about.html` | Biography and background page |
| `articles.html` | Writing archive and article index |
| `casestudies.html` | Detailed project and technical breakdowns |
| `contact.html` | Contact details and communication links |
| `home.html` | Alternate homepage entry retained by the theme |
| `index.html` | Main homepage and GitHub Pages entry file |
| `placeholders.html` | Theme placeholder and utility preview page |
| `projects.html` | Featured project portfolio |
| `skills.html` | Skills, technologies, and capabilities |
| `testimonials.html` | Testimonials and feedback |
| `work.html` | Professional experience and work history |
| `writing.html` | Articles, notes, and long-form writing |

`index.html` is the homepage and GitHub Pages entry file.

---

## Component Architecture

### Shared Theme Components

| Component | Purpose |
| --- | --- |
| `components/CandleCursor.js` | Controls themed cursor behavior |
| `components/CobwebCorner.js` | Supports the shared interface presentation |
| `components/FlickeringLights.js` | Supports the shared interface presentation |
| `components/GhostMascot.js` | Supports the shared interface presentation |
| `components/JumpScareSpider.js` | Supports the shared interface presentation |
| `components/JumpScareToggle.js` | Supports the shared interface presentation |
| `components/Layout.js` | Provides shared layout and page framing |
| `components/Navigation.js` | Provides shared navigation behavior |
| `components/SwingingLantern.js` | Supports the shared interface presentation |

### Shared Site Assets

| Asset | Purpose |
| --- | --- |
| `assets/JumpScareContext.js` | Shared site script |
| `assets/createLucideIcon.js` | Shared site script |
| `assets/index.js` | Shared site script |
| `assets/main.css` | Main stylesheet and visual presentation |
| `assets/main.js` | Main site script |
| `assets/proxy.js` | Shared supporting script |

### Theme-Specific Interactive Behavior

- `components/CandleCursor.js` controls themed cursor behavior.
- `components/CobwebCorner.js` supports the shared interface presentation.
- `components/FlickeringLights.js` supports the shared interface presentation.
- `components/GhostMascot.js` supports the shared interface presentation.
- `components/JumpScareSpider.js` supports the shared interface presentation.
- `components/JumpScareToggle.js` supports the shared interface presentation.
- `components/Layout.js` provides shared layout and page framing.
- `components/Navigation.js` provides shared navigation behavior.
- `components/SwingingLantern.js` supports the shared interface presentation.

---

## File and Folder Structure

```text
spooky/
├── README.md
├── index.html
├── assets/
├── components/
└── images/
    └── screenshots/
```

---

## Static Project Notes

This project is designed for direct static hosting. Internal asset paths should stay relative so the theme works correctly at its GitHub Pages project URL.

---

## Customization Guide

Update the included HTML files to replace personal information, biography copy, projects, skills, writing, testimonials, experience, and contact details. Replace screenshots in `images/screenshots/` after personalizing the theme.

---

## GitHub Pages Deployment

Upload the **contents** of the theme folder so `index.html` sits directly at the repository root. Keep `.nojekyll` beside `index.html` when it is included.

In repository **Settings → Pages**, choose:

```text
Branch: main
Folder: / (root)
```

The live GitHub Pages URL is:

```text
https://apursley2012.github.io/spooky/
```

---

## Reporting Theme Issues or Requesting Additions

Use the repository's issue forms:

[Report an issue or request an addition](https://github.com/apursley2012/spooky/issues/new/choose)

---

## Accessibility and Browser Compatibility

Before publishing a personalized version, test keyboard navigation, link focus states, mobile-width behavior, image alternative text, heading order, reduced-motion preferences, color contrast, and readability of decorative text.

---

## Repository Relationship

- Live GitHub Pages demo: `https://apursley2012.github.io/spooky/`
- Theme repository: `https://github.com/apursley2012/spooky`
- Main collection repository: `https://github.com/apursley2012/github-pages-themes`
- Main collection visual theme gallery: `https://apursley2012.github.io/github-pages-themes/`

---

## Possible Future Enhancements

- Add or refresh repository screenshots after personalizing the theme.
- Add a visible reduced-motion option when the interface includes animation.
- Add a themed `404.html` page.
- Add additional accessibility refinements after testing the personalized content.

---

## Copyright

Copyright © 2026 Alysha Pursley. All rights reserved.

This theme and its documentation are maintained by Alysha Pursley.
