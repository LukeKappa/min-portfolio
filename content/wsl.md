+++
title = "WSL Raycast Extension"
description = "A powerful Raycast extension to control and manage your Windows Subsystem for Linux distributions."
template = "project.html"
weight = 1
aliases = ["wsl.html"]

[extra]
kind = "project"
tech = "TypeScript / React"
links = [
    { label = "GitHub", url = "https://github.com/raycast/extensions/tree/main/extensions/wsl-manager" },
    { label = "Raycast Store", url = "https://www.raycast.com/luke_esterhuizen/wsl-manager" }
]
+++

## Problem
Switching between Windows and WSL often involves opening a terminal, checking running distributions, and manually typing commands. This context switching breaks flow, especially when simply checking system status or launching a specific shell.

## Solution
This extension integrates WSL directly into Raycast, allowing you to view running distributions, start/stop instances, and launch shells with a single keystroke. It bridges the gap between the Windows UI and the Linux subsystem.

## Features

### Distribution Management
- Instant Status &mdash; See which distributions are running at a glance.
- Power Control &mdash; Start, stop, or restart specific WSL instances.
- Default Handling &mdash; Quickly set or change your default distribution.

### Seamless Integration
- Native Feel &mdash; Designed to match Raycast's UI for a consistent experience.
- Quick Actions &mdash; Launch into your preferred terminal emulator instantly.

### Technical Stack
- TypeScript &amp; React &mdash; Built with Raycast's modern extension API.
- Node.js Runtime &mdash; Leverages Node child processes to interface with `wsl.exe`.
