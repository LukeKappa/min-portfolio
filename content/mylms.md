+++
title = "MyLMS Rewrite"
description = "A high-performance dashboard for Moodle LMS, rebuilt with a Rust API backend and Next.js frontend."
template = "project.html"
weight = 2
aliases = ["mylms.html"]

[extra]
kind = "project"
tech = "Rust / Next.js"
links = [
    { label = "GitHub", url = "https://github.com/LukeKappa/mylms-rewrite" }
]
+++

## Problem
Standard Moodle implementations often suffer from slow navigation, cluttered interfaces, and deeply nested resources. Accessing a single file can require clicking through multiple menu layers, often with significant loading times. Additionally, offline access is typically unreliable or non-existent.

## Solution
MyLMS Rewrite decouples the UI from the legacy backend. By reverse-engineering the LMS API, this project creates a read-only dashboard that caches heavily and loads instantly. It surfaces key content&mdash;files, assignments, and announcements&mdash;in a clean UI. An offline-first architecture ensures materials remain accessible without a network.

## Features

### API-First Architecture
- Direct API Access &mdash; Fetches Pages, Resources, Folders, URLs, and Lessons instantly.
- N+1 Optimization &mdash; Pre-fetches resource maps to eliminate redundant calls.
- High-Performance Backend &mdash; Rust-powered API server.

### Offline-First Design
- Client-Side Caching &mdash; Uses IndexedDB for local content storage.
- Multi-Layer Caching &mdash; Browser, Server, and Redis caching hierarchy.
- Instant Navigation &mdash; Previously visited pages load instantly.

### Clean Reading Experience
- Distraction-Free UI &mdash; Standardized typography.
- Dark Mode &mdash; Native dark mode support.
- LaTeX Support &mdash; Beautiful mathematical equation rendering.

## Architecture
![MyLMS Architecture](images/mylms_architecture.png)
