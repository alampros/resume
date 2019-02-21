# My Resume
Source for my resume site at [alampros.com](https://alampros.com)

[![Netlify Status](https://api.netlify.com/api/v1/badges/a0ddaca7-8925-4554-bddc-593b9efb9678/deploy-status)](https://app.netlify.com/sites/alampros/deploys)

As all of my professional work products from the last decade have been under NDA (or otherwise not publicly visible), I took the opportunity to use this site to showcase some of what I'd like to do more of professionally.

The major goals of this site are:
- Good responsive experience
- Accessibility
- Maintainability

# Architectural Choices

## Multiple Media, Same Data

The HTML, PDF, and VCF files are all generated from the same data (jobs, skills, etc) in [`src/data`](./src/data). I opted not to use Gatsby's built-in GraphQL features because the data is completely static.

## Technologies
This site is built with:

** [Gatsby](https://www.gatsbyjs.org) ❤️**
Uses React, Webpack & Babel to compile modern, blazingly-fast, static websites.

** [TypeScript](https://www.typescriptlang.org/)**
Tooling, type safety, and a scapegoat for configuration rage.

** [Netlify](https://netlify.com/)**
Static hosting with integrated CI/CD, DNS, CDN, and many more impressive acronyms.

** [React-PDF](https://react-pdf.org/)**
Provides React components and primitives to render PDFs using [pdfkit](https://github.com/foliojs/pdfkit) and the [yoga flexbox layout system](https://yogalayout.com/). Used to render the PDF version of my resume.

** [Eslint](https://eslint.org)**
I can't live without eslint + [ale](https://github.com/w0rp/ale).

** [CSS Modules](https://github.com/css-modules/css-modules)**
Styling in React is an incredibly polarizing topic. I've used *many* of the solutions out there, but I keep coming back to CSS modules for the simple reason that it's only once-removed from native CSS, while still providing the means to co-locate and isolate your component styles.

