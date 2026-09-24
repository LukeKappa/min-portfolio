+++
title = "Minimalist Portfolio"
description = "A minimal, performance-focused personal portfolio and blog built with Zola SSG and vanilla CSS."
template = "project.html"
weight = 3
aliases = ["portfolio.html", "portfolio", "portfolio/"]

[taxonomies]
tags = ["Zola", "Rust", "Duckquill", "Sass"]

[extra]
kind = "project"
tech = [
    { name = "Zola", url = "https://www.getzola.org/" },
    { name = "Duckquill", url = "https://codeberg.org/daudix/duckquill" }
]
links = [
    { label = "GitHub", url = "https://github.com/LukeKappa/min-portfolio" }
]
+++

## Problem
Many personal portfolios rely on bloated JavaScript frameworks for simple static content, resulting in heavy asset bundles, hydration latency, and unnecessary maintenance overhead. A portfolio and blog should be immediate, lightweight, and accessible, prioritizing content over complex client-side runtimes.

## Solution
This project uses the [Zola](https://www.getzola.org/) static site generator paired with the [Duckquill](https://codeberg.org/daudix/duckquill) theme to deliver an instant, lightweight reading experience. Articles are authored in pure Markdown, while table of contents generation, reading time calculations, and sitemaps are precomputed at build time. The site deploys continuously to Cloudflare Pages edge cache.

## Features

### Static Site Generation
- Markdown-First Authoring &mdash; Write projects and technical articles in clean Markdown with TOML frontmatter.
- Tera Templating &mdash; Reusable layout templates eliminate duplicated HTML boilerplate across pages.
- Zero Client-Side JavaScript Runtime &mdash; Table of Contents, reading times, word counts, and metadata are rendered at build time with minimal footprint.

### Design System &amp; Accessibility
- Duckquill Theme Architecture &mdash; SCSS design system featuring automatic light/dark mode, accent tinting, and accessible contrast ratios.
- Smooth Skills Carousel &mdash; Infinite skills marquee with hover pause and `@media (prefers-reduced-motion)` support.
- Keyboard Navigation &mdash; Clear `:focus-visible` focus rings and WCAG AA-compliant contrast ratios across all elements.

### Performance &amp; Infrastructure
- Instant Global Delivery &mdash; Compiled into static HTML/CSS and deployed to Cloudflare Pages CDN edge cache.
- Backward-Compatible URLs &mdash; Automated alias redirects preserve existing links and bookmarks.
- Sub-20ms Builds &mdash; Built with Rust-powered Zola for near-instant local development and CI/CD pipelines.
