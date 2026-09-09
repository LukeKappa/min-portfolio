+++
title = "MyLMS Downloader"
description = "A Chrome extension for Eduvos MyLMS that automates downloading and organizing course materials into structured folders."
template = "project.html"
weight = 2
aliases = ["pdfdownloadmylms.html", "mylms.html"]

[extra]
kind = "project"
tech = "JavaScript / Chrome Extension"
links = [
    { label = "GitHub", url = "https://github.com/LukeKappa/pdfdownloadmylms" },
    { label = "Video Guide", url = "https://youtu.be/HpzUhBMyyl4" }
]
+++

## Problem
Navigating Eduvos MyLMS to locate and download course materials is repetitive and slow. Files are scattered across weekly modules, requiring tedious clicking through nested pages. Multi-chapter books lack single-document export options, and mandatory weekly feedback surveys gate access to future module sections, disrupting student workflows.

## Solution
MyLMS Downloader is a Manifest v3 Chrome extension that injects lightweight controls directly into the course interface. It enables single-click and background bulk downloads of lecture slides, documents, archives, and books. All files are automatically saved and organized into a clean folder hierarchy on disk (`Downloads/MyLMS/[Course]/[Section]/`).

## Features

### Inline Activity Badges
- Direct Action Badges &mdash; Injected next to every downloadable resource on course pages for immediate, single-click downloads.
- Multi-Format Support &mdash; Handles PDF slides, Word documents, PowerPoint presentations, Excel sheets, and ZIP archives.
- Clean File Naming &mdash; Derives clean, structured filenames from the page DOM without redirect pages.

### Bulk Downloads
- Active Section Download &mdash; Downloads all resources inside the currently opened module tile with one click.
- Entire Course Download &mdash; Queues every resource across the entire course page and processes them sequentially in the background.
- Service Worker Queue &mdash; Staggers downloads to prevent overwhelming browser download managers.

### Book-to-PDF Export
- Headless PDF Printing &mdash; Exports multi-chapter Moodle books as a single, paginated PDF via `chrome.debugger` headless printing.
- Clean Formatting &mdash; Automatically inserts page breaks at chapter boundaries.

### Automated Feedback Completion
- Bypass Gating Surveys &mdash; Automatically fills weekly gating questionnaires with neutral placeholders and submits forms to unlock subsequent week modules instantly.
- Zero External Requests &mdash; All logic runs entirely in the browser; no telemetry, no tracking, and no external servers.
