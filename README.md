# Minimalist Portfolio

A minimal, performance-focused personal portfolio and technical blog built with [Zola](https://www.getzola.org/) and the [Duckquill](https://codeberg.org/daudix/duckquill) theme, hosted on Cloudflare Pages.

## Features

- **Duckquill Theme**: Modern, responsive design system with light/dark/system theme switching, accent color tinting, and accessible typography.
- **Interactive Components**: Search index powered by Fuse.js, floating Table of Contents, code block copy buttons, and RSS/Atom feeds.
- **Markdown-First Content**: Write new projects and technical posts in standard Markdown with TOML frontmatter and tag taxonomies.
- **Instant Global Delivery**: Deploys as plain static files to Cloudflare Pages edge cache.

## Project Structure

min-portfolio/
├── config.toml           # Site configuration, author info, navigation, socials
├── themes/duckquill/     # Duckquill Zola theme submodule
├── static/               # Static assets
│   ├── custom.css        # Skills marquee and portfolio layout enhancements
│   └── images/
├── templates/            # Tera template customizations
│   ├── index.html        # Home page portfolio template
│   ├── project.html      # Project detail template
│   └── partials/         # Partial overrides (footer)
└── content/              # Content written in Markdown
    ├── _index.md         # Home page intro
    ├── projects/         # Featured projects
    │   ├── _index.md
    │   ├── wsl.md
    │   ├── mylms-downloader.md
    │   └── portfolio.md
    └── blog/             # Technical blog articles
        ├── _index.md
        ├── alpine-linux-phone.md
        └── self-hosting-phone.md

## Local Development

Clone with submodules:

```bash
git clone --recursive https://github.com/LukeKappa/min-portfolio.git
# or if already cloned:
git submodule update --init --recursive
```

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
