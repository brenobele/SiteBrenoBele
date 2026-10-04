# Project Instructions

## Overview

This repository is a small portfolio site served as plain static files (HTML, CSS, JS) — no server, no build step.
Use simple, low-overhead solutions that fit the current architecture instead of introducing unnecessary frameworks or tooling.

## Stack

- Site root: [public](public) — this folder is what gets deployed
- Pages: [public/index.html](public/index.html) and [public/404.html](public/404.html) (served by the host for unknown routes)
- Static assets: CSS, JS, and images in [public](public)
- Styling: Bulma via CDN plus custom CSS in [public/css/landing.css](public/css/landing.css)
- Client behavior: vanilla JavaScript in [public/js/landing.js](public/js/landing.js)

## Commands

- Run locally: `npx serve public` (or any static file server pointed at `public/`)

## Working Preferences

- Preserve the current stack: prefer static HTML, Bulma, vanilla JS, and static assets unless the user explicitly asks for a stack change.
- Keep the app easy to deploy and easy to understand.
- Favor small, direct edits over abstraction-heavy refactors.
- Reuse the existing visual language: dark theme, glassmorphism, gradient accents, and the current typography choices.
- Keep content and copy in Brazilian Portuguese unless the user requests another language.
- Preserve responsive behavior for desktop and mobile whenever changing layout or styles.
- Treat accessibility and broken navigation as real issues.

## File Guidance

- Add or change page markup in [public/index.html](public/index.html); new pages are new `.html` files in `public/`.
- Keep custom styles in [public/css/landing.css](public/css/landing.css).
- Keep small client interactions in [public/js/landing.js](public/js/landing.js).
- Prefer serving assets from `public/` rather than introducing build tooling.

## Skill Routing

- Use `frontend-developer` for UI changes, layout work, accessibility, responsiveness, styling, and interactive behavior.
- Use `backend-developer` for route handling, server behavior, request validation, and future API or data changes.
- Use `fullstack-developer` for features that change both views and server routes together.
- Use `code-reviewer` when asked to review diffs, changes, or implementation quality.
- Use `deploy-devops` for deployment, hosting, environment setup, Docker, CI/CD, or release workflow changes.

## Validation Expectations

- For UI changes, verify the home page and navigation behavior manually.
- If a task touches layout or styling, check both desktop and mobile behavior.
- If you cannot fully validate something, state the gap clearly in the final response.

## Notes

- This repo currently has no real automated test suite; do not claim test coverage that does not exist.
- `git status` may fail until the repo is marked as a safe directory in Git for the current Windows user context.
