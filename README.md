<!--
File: README.md
Document Title: Spooky — Static Portfolio Theme
Author: Alysha Pursley
Date: June 2026
-->

<div align="center">

# Spooky — Static Portfolio Theme 👻🕸️

[![GitHub Stars](https://img.shields.io/github/stars/apursley2012/spooky?style=social)](https://github.com/apursley2012/spooky) [![GitHub Forks](https://img.shields.io/github/forks/apursley2012/spooky?style=social)](https://github.com/apursley2012/spooky) [![HTML](https://img.shields.io/badge/Primary_Language-HTML-orange?style=for-the-badge&logo=html5)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/Styling-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/) [![JavaScript](https://img.shields.io/badge/Logic-JavaScript%20%28React%29-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://react.dev/) [![Framer Motion](https://img.shields.io/badge/Animations-Framer_Motion-purple?style=for-the-badge&logo=framer)](https://www.framer.com/motion/) [![React Router](https://img.shields.io/badge/Routing-React_Router-CA4245?style=for-the-badge&logo=reactrouter)](https://reactrouter.com/)

**An open-source, Halloween-themed portfolio template designed for developers seeking a distinctive personal website. Spooky wraps your projects, skills, and experience in an atmospheric, dark aesthetic, complete with eerie decorative details, animated cursors, playful mascots, and subtle jump scares 🕷️. This responsive, static site template is built with React and Framer Motion, styled with Tailwind CSS, and optimized for easy deployment to GitHub Pages.**

[![Spooky Theme Preview](./images/screenshots/spooky-preview-placeholder.svg)](./images/screenshots/spooky-preview-placeholder.svg)

[Open the live demo](https://apursley2012.github.io/spooky/) · [Browse the full theme collection](https://github.com/apursley2012/github-pages-themes) · [Report an issue or request an addition](https://github.com/apursley2012/spooky/issues/new/choose)

</div>

---

## Table of Contents 📖

*   [Project Overview](#project-overview)
    *   [Purpose](#purpose)
    *   [Intended Users](#intended-users)
    *   [Design Style and Inspiration](#design-style-and-inspiration)
    *   [Main Color Palette](#main-color-palette)
    *   [Preview Screenshots](#preview-screenshots)
*   [Key Features](#key-features)
*   [Tech Stack](#tech-stack)
*   [Live Demo](#live-demo)
*   [Installation](#installation)
    *   [Local Development](#local-development)
    *   [GitHub Pages Deployment](#github-pages-deployment)
*   [Usage](#usage)
*   [Project Structure](#project-structure)
    *   [Pages Included](#pages-included)
    *   [Component Architecture](#component-architecture)
    *   [File and Folder Structure](#file-and-folder-structure)
    *   [Static Project Notes](#static-project-notes)
*   [Customization Guide](#customization-guide)
*   [Accessibility and Browser Compatibility](#accessibility-and-browser-compatibility)
*   [Repository Relationship](#repository-relationship)
*   [Possible Future Enhancements](#possible-future-enhancements)
*   [Contributing](#contributing)
    *   [Reporting Theme Issues](#reporting-theme-issues)
    *   [Requesting Additions](#requesting-additions)
*   [License](#license)
*   [Important Links](#important-links)
*   [Copyright](#copyright)

## Project Overview 🎃

Spooky is a standalone static portfolio theme crafted for developers who desire a personal site with genuine character. Moving beyond conventional white-space grid, this **Spooky** theme provides a fully immersive Halloween atmosphere. Visitors are greeted by a flickering candle cursor, a friendly ghost mascot sliding in from the side, animated cobweb corners, and even a surprise spider descent. It's an open-source template by Alysha Pursley, designed for easy customization and zero-configuration deployment, making it perfect for showcasing your projects and skills with a unique, memorable flair.

## Theme Overview

Spooky is a standalone static portfolio theme built for developers who want their personal site to have genuine personality. Instead of another minimal  wraps your projects, skills, work history, writing, and contact form inside a fully atmospheric Halloween aesthetic — complete with a flickering candle cursor, a ghost mascot that slides in from the side, animated cobweb corners, and a spider that drops down the screen when your visitor least expects it. It is an open-source template maintained by Alysha Pursley, deployable to GitHub Pages with zero configuration, and designed to be customized by replacing placeholder text rather than rewriting layout code.

### Purpose

**Spooky** is a distinctive static portfolio theme designed to highlight projects, skills, experience, writing, and professional identity through a defined visual direction.

This theme can be opened locally, hosted with GitHub Pages, or adapted into a standalone personal website. The included files are ready to publish directly from a GitHub repository.

## Key Features ✨

Based on a deep dive into the codebase, the following key features bring the "Spooky" theme to life:

*   **Atmospheric Dark Design**: A visually striking dark theme pervades the entire site, enhanced by a custom color palette (`--color-charcoal`, `--color-pumpkin`, `--color-ghost`, `--color-bat`, `--color-candy`) and custom fonts (`Creepster`, `Special Elite`, `Inter`).
*   **Animated Candle Cursor**: Replaces the default cursor with a dynamically flickering candle effect that reacts to mouse movement and hover states. (Implemented in `components/CandleCursor.js`).
*   **Interactive Ghost Mascot**: A charming ghost mascot that periodically slides in and out of view from the side, adding a playful touch. (Implemented in `components/GhostMascot.js`).
*   **Dynamic Cobweb Corners**: Animated SVG cobwebs adorn the screen corners, responding to user interaction with subtle scale and rotation effects. (Implemented in `components/CobwebCorner.js`).
*   **Flickering Ambient Lights**: Background flickering lights create an eerie yet inviting ambiance throughout the site. (Implemented in `components/FlickeringLights.js`).
*   **Optional Jump Scares**: For an extra spooky edge, a "jump scare" spider can drop down, a feature managed via a toggleable context. (Implemented in `components/JumpScareSpider.js` and `assets/JumpScareContext.js`).
*   **Jump Scare Toggle**: A fixed button allows users to enable or disable jump scares, providing control over the spooky experience. (Implemented in `components/JumpScareToggle.js`).
*   **Animated Swinging Lanterns**: Used in the "Work" history section, these elements animate with a gentle swing, revealing career details on interaction. (Implemented in `components/SwingingLantern.js`).
*   **Client-Side Routing**: Utilizes `react-router-dom` for seamless navigation between different portfolio sections (`/about`, `/projects`, `/skills`, `/work`, `/case-studies`, `/blog`, `/testimonials`, `/contact`) without page reloads.
*   **Rich Animations with Framer Motion**: All interactive elements and page transitions are powered by `framer-motion`, providing smooth, performant, and engaging animations.
*   **Responsive Layout**: The design adapts gracefully to various screen sizes, ensuring a consistent experience across devices.

## Tech Stack 🛠️

This project harnesses a modern frontend tech stack to deliver its unique aesthetic and interactive experience:

*   **Frontend Framework**: React.js (via `create-react-app` or Vite-like setup)
*   **Animation Library**: Framer Motion
*   **Routing**: React Router DOM
*   **Styling**: Tailwind CSS (configured directly in `assets/main.css`)
*   **Language**: JavaScript, HTML, CSS
*   **Icons**: Lucide Icons (Dynamically created via `assets/createLucideIcon.js`)
*   **Build Tool**: Vite (inferred from `vite.svg` in `placeholders.html` and module imports)

## Live Demo 🚀

Experience the live version of the Spooky portfolio template:

[![Spooky Theme Preview](./images/screenshots/spooky-preview-placeholder.svg)](./images/screenshots/spooky-preview-placeholder.svg)

[Open the live demo](https://apursley2012.github.io/spooky/)

## Installation 📦

This project is designed for static hosting. The simplest way to get it running is to serve the files directly. 

### Local Development 💻

To run the project locally, you will need Node.js and a package manager like npm or yarn.

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/apursley2012/spooky.git
    cd spooky
    ```

2.  **Install dependencies:**

    Although a `package.json` was not provided in the analysis, React projects typically require dependencies. Assuming a standard setup with Vite for bundling:

    ```bash
    npm install # or yarn install
    ```

3.  **Start the development server:**

    ```bash
    npm run dev # or yarn dev
    ```

    This will typically open the application in your browser at `http://localhost:5173` (or a similar address).

### GitHub Pages Deployment 🌐

The template is ready for direct deployment to GitHub Pages.

1.  **Fork the repository:** Fork the `apursley2012/spooky` repository to your GitHub account.
2.  **Customize the content:** Modify the HTML files (`about.html`, `projects.html`, `skills.html`, etc. – though their content is dynamically rendered by React, you might adjust metadata or global settings) and the React components (primarily by updating text placeholders and media in `assets/main.js` and associated component files) to reflect your personal information, projects, and details.
3.  **Push your changes:** Commit and push your changes to the `main` branch of your forked repository.
4.  **Configure GitHub Pages:**

    *   Go to your repository's `Settings` tab.
    *   Navigate to the `Pages` section.
    *   Under "Build and deployment," select `Deploy from a branch`.
    *   Choose `main` as your branch and `/ (root)` as your folder.
    *   Click `Save`.

    Your site will be deployed shortly at `https://YOUR_USERNAME.github.io/spooky/`.

## Usage 👻

Once installed, the Spooky portfolio template serves as an interactive showcase for a developer's work, skills, and persona.

*   **Navigation**: Navigate through the different sections (About, Projects, Skills, Work, Case Studies, Blog, Testimonials, Contact) using the themed navigation menu (`components/Navigation.js`).
*   **Interactive Elements**: Engage with the various spooky elements:
    *   Move your mouse to interact with the **Candle Cursor**.
    *   Keep an eye out for the **Ghost Mascot** making random appearances.
    *   Hover over the screen corners to see the **Cobwebs** animate.
    *   On the "Skills" page, hover over the **tools** to see their descriptions.
    *   On the "Work" page, click the **lanterns** to reveal detailed job experiences.
*   **Jump Scares**: By default, jump scares are enabled. Interact with the site, and after a few clicks, the **Jump Scare Spider** might make a surprise appearance. You can toggle this feature off using the fixed **Jump Scare Toggle** button (ghost/eye-off icon) at the bottom right of the screen.
*   **Contact Form**: The "Contact" page features an interactive form where visitors can "slide a note under the door."

Customize the content within the JavaScript components to personalize your portfolio. For example, edit the arrays for `b` (projects), `V` (skills), and `Y` (work history) in `assets/main.js` to reflect your own information.

## Project Structure 🏠

The repository is organized for clarity and maintainability:

```text
spooky/
├── README.md
├── index.html
├── about.html
├── articles.html
├── casestudies.html
├── contact.html
├── home.html
├── placeholders.html
├── projects.html
├── skills.html
├── testimonials.html
├── work.html
├── writing.html
├── assets/
│   ├── JumpScareContext.js
│   ├── createLucideIcon.js
│   ├── index.js
│   ├── main.css
│   ├── main.js
│   └── proxy.js
├── components/
│   ├── CandleCursor.js
│   ├── CobwebCorner.js
│   ├── FlickeringLights.js
│   ├── GhostMascot.js
│   ├── JumpScareSpider.js
│   ├── JumpScareToggle.js
│   ├── Layout.js
│   ├── Navigation.js
│   └── SwingingLantern.js
└── images/
    └── screenshots/
        └── spooky-preview-placeholder.svg
```

*   `index.html` (and other `.html` files): Entry point for the SPA, mounts the React application.
*   `assets/`: Contains core JavaScript logic, styling, and utility scripts.
    *   `main.js`: Main application entry, handles routing and component rendering.
    *   `main.css`: Tailwind CSS configuration and custom styles.
    *   `proxy.js`, `index.js`, `createLucideIcon.js`, `JumpScareContext.js`: Bundled libraries and utility scripts.
*   `components/`: Reusable React components that build the themed UI and interactive elements.
*   `images/screenshots/`: Contains project preview images.

## Customization 🎨

Customizing the Spooky theme involves modifying the content and, optionally, the styling:

1.  **Content Updates**: The core content (personal information, project details, skills, experience, writing, testimonials, contact info) is primarily driven by data within the JavaScript files, especially `assets/main.js` and individual component files. Replace placeholder text and data structures with your own.
2.  **Image Replacement**: Update the screenshots in `images/screenshots/` to reflect your personalized theme.
3.  **Styling**: Tailwind CSS is used for styling. You can modify `assets/main.css` or extend Tailwind's configuration (if a `tailwind.config.js` were present, which is not in this analysis). The CSS variables defined in `main.css` (`--color-charcoal`, `--color-pumpkin`, etc.) provide a centralized way to adjust the color scheme.

## Contributing 🤝

Contributions are welcome! If you have suggestions for improvements, new features, or bug fixes, please:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'feat: Add new awesome feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

Please ensure your code adheres to the existing style and quality.

## License 📄

This project is currently **Unlicensed**. You are free to use, modify, and distribute it, but please be aware there is no formal license agreement governing its use.

## Important Links 🔗

*   **Live Demo**: [https://apursley2012.github.io/spooky/](https://apursley2012.github.io/spooky/)
*   **Repository**: [https://github.com/apursley2012/spooky](https://github.com/apursley2012/spooky)
*   **Report an Issue / Request Addition**: [https://github.com/apursley2012/spooky/issues/new/choose](https://github.com/apursley2012/spooky/issues/new/choose)
*   **Author Profile**: [Alysha Pursley (apursley2012)](https://github.com/apursley2012)

## Possible Future Enhancements ✨

*   Refresh repository screenshots after personalizing the theme.
*   Add a visible reduced-motion option when the interface includes animation.
*   Add a themed `404.html` page for better user experience.
*   Implement additional accessibility refinements after testing personalized content.

---

Made with 💖 by Alysha Pursley.

Feel free to fork, star, and contribute to this spooky project! If you encounter any issues or have suggestions, please open an issue on the GitHub repository. Thank you! 


---




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
  <a href="./images/screenshots/spooky-preview-placeholder.svg"><img src="./images/screenshots/spooky-preview-placeholder.svg" width="48%" style="max-width: 48%; height: auto;" alt="Spooky preview image 1"></a>
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
