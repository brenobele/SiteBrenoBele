# Project Instructions

## Overview

This repository is a small portfolio site built with Node.js, Express, EJS, and static assets.
Use simple, low-overhead solutions that fit the current architecture instead of introducing unnecessary frameworks or tooling.

## Stack

- Server: Node.js with Express in [index.js](/f:/Dev/SiteBrenoBele/index.js)
- Views: EJS templates in [views](/f:/Dev/SiteBrenoBele/views)
- Static assets: CSS, JS, and images in [public](/f:/Dev/SiteBrenoBele/public)
- Styling: Bulma via CDN plus custom CSS in [public/css/landing.css](/f:/Dev/SiteBrenoBele/public/css/landing.css)
- Client behavior: vanilla JavaScript in [public/js/landing.js](/f:/Dev/SiteBrenoBele/public/js/landing.js)

## Commands

- Install dependencies: `npm install`
- Run locally: `npm start`
- Run with watch mode: `npm run dev`
- Health check route: `GET /health`

## Working Preferences

- Preserve the current stack: prefer Express, EJS, Bulma, vanilla JS, and static assets unless the user explicitly asks for a stack change.
- Keep the app easy to deploy and easy to understand.
- Favor small, direct edits over abstraction-heavy refactors.
- Reuse the existing visual language: dark theme, glassmorphism, gradient accents, and the current typography choices.
- Keep content and copy in Brazilian Portuguese unless the user requests another language.
- Preserve responsive behavior for desktop and mobile whenever changing layout or styles.
- Treat accessibility and broken navigation as real issues.

## File Guidance

- Add or change routes in [index.js](/f:/Dev/SiteBrenoBele/index.js).
- Add or change page markup in [views/index.ejs](/f:/Dev/SiteBrenoBele/views/index.ejs) unless new views are needed.
- Keep custom styles in [public/css/landing.css](/f:/Dev/SiteBrenoBele/public/css/landing.css).
- Keep small client interactions in [public/js/landing.js](/f:/Dev/SiteBrenoBele/public/js/landing.js).
- Prefer serving assets from `public/` rather than introducing build tooling.

## Skill Routing

- Use `frontend-developer` for UI changes, layout work, accessibility, responsiveness, styling, and interactive behavior.
- Use `backend-developer` for route handling, server behavior, request validation, and future API or data changes.
- Use `fullstack-developer` for features that change both views and server routes together.
- Use `code-reviewer` when asked to review diffs, changes, or implementation quality.
- Use `deploy-devops` for deployment, hosting, environment setup, Docker, CI/CD, or release workflow changes.

## Validation Expectations

- For server changes, run `npm start` or `npm run dev` when practical and verify the affected route.
- For UI changes, verify the home page and navigation behavior manually.
- If a task touches layout or styling, check both desktop and mobile behavior.
- If you cannot fully validate something, state the gap clearly in the final response.

## Notes

- This repo currently has no real automated test suite; do not claim test coverage that does not exist.
- `git status` may fail until the repo is marked as a safe directory in Git for the current Windows user context.
