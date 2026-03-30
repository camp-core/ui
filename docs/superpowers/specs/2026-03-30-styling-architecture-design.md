# Styling Architecture Design

## Overview

This document defines the styling architecture for the camp-dev/ui component library. The approach uses **CSS Modules** for component-scoped styles and **CSS custom properties** for a shared color token system, with no additional build dependencies beyond what Vite provides natively.

## Goals

- Ship a color palette (20+ color families) consumers can use directly
- Support light and dark color modes
- Scope component styles to avoid conflicts with consumer apps
- Let consumers customize the library via semantic token overrides
- Zero extra runtime or build dependencies

## Token Architecture

### Color Palette Tokens

Each color family defines a scale from `50` (lightest) to `950` (darkest), matching the Tailwind convention. All palette tokens are defined as CSS custom properties on `:root`.

```css
:root {
  --red-50: #fef2f2;
  --red-100: #fee2e2;
  /* ... */
  --red-950: #450a0a;
}
```

Each color family lives in its own file for maintainability.

### Dark Mode

Dark mode is activated by setting `data-color-mode="dark"` on any ancestor element (typically `<html>`). Dark mode adjusts palette values so that the same token names produce appropriate colors for dark backgrounds.

```css
[data-color-mode="dark"] {
  --red-50: #450a0a;
  --red-100: #7f1d1d;
  /* flipped/adjusted scale */
}
```

### Semantic Tokens

Components consume semantic tokens rather than raw palette values. Semantic tokens reference palette tokens and adapt to dark mode.

```css
:root {
  --color-primary: var(--blue-600);
  --color-primary-hover: var(--blue-700);
  --color-surface: var(--gray-50);
  --color-text: var(--gray-900);
  --color-border: var(--gray-200);
  --color-on-primary: #ffffff;
}

[data-color-mode="dark"] {
  --color-primary: var(--blue-400);
  --color-surface: var(--gray-900);
  --color-text: var(--gray-50);
  --color-border: var(--gray-700);
}
```

Consumers override semantic tokens to rebrand the library:

```css
:root {
  --color-primary: var(--indigo-600);
}
```

### Spacing and Sizing Tokens

Spacing, sizing, and radius tokens are **deferred** — the architecture supports adding `tokens/spacing.css`, `tokens/radius.css`, etc. following the same custom property pattern. These will be defined in a follow-up design. Component examples in this spec that reference tokens like `--radius-md` assume these will exist once that design is complete.

### File Organization

```
src/styles/
  tokens/
    colors/
      red.css
      blue.css
      indigo.css
      ... (one file per color family)
    semantic.css       -- component defaults + dark mode overrides
  global.css           -- imports all token files, base resets
```

## Component Styling

### CSS Modules

Each component gets a co-located `.module.css` file. Vite processes these natively — class names are hashed at build time to prevent collisions.

```
src/
  Button/
    Button.tsx
    Button.module.css
    Button.stories.tsx
    index.ts
```

### Style Conventions

- Components reference **semantic tokens only**, never raw palette values
- Native CSS nesting (`&:hover`, `&.variant`) is used instead of a preprocessor
- Variants and sizes are expressed as separate classes composed in the component
- Every component accepts a `className` prop for consumer overrides

### Example

**Button.module.css:**

```css
.button {
  font-family: inherit;
  font-weight: 500;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  background: var(--color-primary);
  color: var(--color-on-primary);

  &:hover {
    background: var(--color-primary-hover);
  }
}

.secondary {
  background: var(--color-surface);
  color: var(--color-text);
}

.sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}
.md {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}
.lg {
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
}
```

**Button.tsx:**

```tsx
import styles from "./Button.module.css";

export function Button({ variant = "primary", size = "md", className, ...props }) {
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  return <button className={classes} {...props} />;
}
```

## Consumer Integration

### Importing Styles

Consumers import the global stylesheet once at the app root:

```tsx
import "@camp-dev/ui/styles";
```

This provides all palette tokens, semantic tokens, and base resets.

### Using Components

```tsx
import { Button } from "@camp-dev/ui";

<Button variant="secondary" size="lg">
  Save
</Button>;
```

Component CSS Modules are bundled into the JS by Vite's library mode — no separate import needed.

### Using Palette Tokens Directly

Consumers can reference palette tokens in their own styles:

```css
.my-banner {
  background: var(--red-100);
  color: var(--red-900);
}
```

### Dark Mode

```html
<html data-color-mode="dark"></html>
```

All tokens and components respond automatically.

### Package Exports

```json
{
  "exports": {
    ".": "./dist/index.mjs",
    "./styles": "./dist/styles/global.css"
  }
}
```

## Build & Tooling

### No Extra Dependencies

Vite natively supports CSS Modules, CSS custom properties, and CSS nesting. No preprocessor or CSS-in-JS library is needed.

### Build Output

```
dist/
  index.mjs              -- components with bundled module CSS
  index.d.ts             -- type declarations
  styles/
    global.css           -- palette + semantic tokens + resets
```

### Development Workflow

- `vp dev` / `vp run storybook` — preview components with styles
- `vp check` — lint, format, typecheck
- `vp build` — produce dist output

### Storybook

A decorator in `.storybook/preview.ts` will:

- Import the global stylesheet
- Provide a toolbar toggle for light/dark mode
