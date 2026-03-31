# ADR 001: Pure CSS Over Sass

**Status:** Accepted
**Date:** 2026-03-30

## Context

While building the design token system, we evaluated whether to adopt Sass as a preprocessor. After researching several component libraries that use `.scss` files, we found that many rely on almost zero Sass features — their token systems are built entirely on CSS custom properties and `[data-*]` attribute selectors, with Sass only used for `@use` imports and breakpoint mixins.

## Decision

Stay with pure CSS. Do not add Sass as a dependency.

## Rationale

- **Runtime theming** is built on CSS custom properties and data-attribute selectors. Sass variables are compile-time and can't participate in runtime theme switching.
- **Native CSS now covers most Sass use cases** — nesting, `@layer`, `@scope`, `@container`, and `color-mix()` are all available.
- **Zero build dependency** — the current setup uses plain CSS processed natively by Vite. Adding Sass means adding `dart-sass` and verifying compatibility with vite-plus.
- **Industry trend validates this approach** — production component libraries are building entire token systems without Sass logic, despite using `.scss` files.

## Alternatives for Remaining Gaps

| Need | Sass approach | Preferred alternative |
|---|---|---|
| File organization | `@use` partials | CSS `@layer` + Vite bundling (already in use) |
| Breakpoint helpers | `@include` mixins | `@custom-media` via PostCSS, or shared `@media` snippets |
| Token generation | `@each` loops | Node script to generate `.css` token files |
| Color manipulation | `darken()` / `lighten()` | Native `color-mix()` |

## Consequences

- All token and component styles must be plain CSS (`.css` / `.module.css`).
- If breakpoint helpers become painful to maintain, a lightweight PostCSS plugin (`@custom-media`) is the preferred next step — not Sass.
