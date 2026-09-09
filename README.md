# Minimalist Portfolio

A minimal, performance-focused personal portfolio and technical blog built with [Zola](https://www.getzola.org/) and hosted on Cloudflare Pages.

## Features

- **Zero JavaScript Client Runtime**: Generates 100% static HTML and CSS. TOC, word count, reading time, and sitemaps are computed at build time.
- **Single Reusable Stylesheet**: Modern dark theme driven by CSS custom properties with responsive layout and accessible focus states.
- **Markdown-First Content**: Write new projects and technical posts in standard Markdown with YAML/TOML frontmatter.
- **Instant Global Delivery**: Deploys as plain static files to Cloudflare Pages edge cache.

## Project Structure

```text
min-portfolio/
├── config.toml           # Site configuration, author info, skills, education
├── static/               # Direct static assets (CSS, images)
│   ├── style.css
│   └── images/
├── templates/            # Tera templates
│   ├── base.html         # Document skeleton and <head>
│   ├── index.html        # Home page template
│   ├── project.html      # Project detail template
│   └── article.html      # Blog / article template with dynamic TOC
└── content/              # Content written in Markdown
    ├── _index.md
    ├── wsl.md
    ├── mylms-downloader.md
    ├── portfolio.md
    ├── self-hosting-phone.md
    └── alpine-linux-phone.md
```

## Local Development

Start the local live-reloading dev server:

```bash
zola serve
```

Open `http://127.0.0.1:1114` in your browser.

Build static files for production (outputs to `public/`):

```bash
zola build
```

## Cloudflare Pages Deployment

1. **Framework preset**: `Zola`
2. **Build command**: `zola build`
3. **Build output directory**: `public`
4. **Environment variables**:
   - `ZOLA_VERSION`: `0.23.4` (or your preferred release)
