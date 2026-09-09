+++
title = "Minimalist Portfolio"
description = "A minimal, performance-focused personal portfolio and blog built with Zola SSG and vanilla CSS."
template = "project.html"
weight = 3
aliases = ["portfolio.html"]

[extra]
kind = "project"
tech = "Zola / CSS"
links = [
    { label = "GitHub", url = "https://github.com/LukeKappa/min-portfolio" }
]
+++

## Problem
Many personal portfolios rely on bloated JavaScript frameworks for simple static content, resulting in heavy asset bundles, hydration latency, and unnecessary maintenance overhead. A portfolio and blog should be immediate, lightweight, and accessible, prioritizing content over complex client-side runtimes.

## Solution
This project uses the [Zola](https://www.getzola.org/) static site generator paired with a custom CSS design system to deliver an instant, zero-JS reading experience. Articles are authored in pure Markdown, while table of contents generation, reading time calculations, and sitemaps are precomputed at build time. The site deploys continuously to Cloudflare Pages edge cache.

## Features

### Static Site Generation
- Markdown-First Authoring &mdash; Write projects and technical articles in clean Markdown with TOML frontmatter.
- Tera Templating &mdash; Reusable layout templates eliminate duplicated HTML boilerplate across pages.
- Zero Client-Side JavaScript &mdash; Table of Contents, reading times, word counts, and metadata are rendered at build time with 0 KB client JS.

### Design System &amp; Accessibility
- Single Reusable Stylesheet &mdash; Driven by CSS custom properties with responsive typography and dark mode aesthetics.
- Seamless CSS Marquee &mdash; Smooth infinite skills carousel with hover pause and `@media (prefers-reduced-motion)` support.
- Keyboard Navigation &mdash; Clear `:focus-visible` focus rings and WCAG AA-compliant contrast ratios across all elements.

### Performance &amp; Infrastructure
- Instant Global Delivery &mdash; Compiled into static HTML/CSS and deployed to Cloudflare Pages CDN edge cache.
- Backward-Compatible URLs &mdash; Automated alias redirects preserve existing links and bookmarks.
- Sub-20ms Builds &mdash; Built with Rust-powered Zola for near-instant local development and CI/CD pipelines.
