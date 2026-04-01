# Spacing Tokens Design

## Overview

Add a grid-based spacing token system to the design system. All spacing values derive from a single `--spacing-unit` (4px) base, with token names reflecting the grid multiplier. The scale is curated with intentionally increasing step sizes at larger values, capping at 192px.

## Motivation

Spacing tokens constrain layout choices to a consistent scale, preventing arbitrary values from fragmenting the visual rhythm. A multiplier-based system keeps the mental model simple (token name x 4px = value) while the curated scale ensures designers and developers choose from intentional steps rather than any arbitrary multiple.

## Design

### Base Unit

```css
--spacing-unit: 4px;
```

All tokens are defined as `calc(var(--spacing-unit) * N)`, so the entire scale adjusts by changing one variable.

### Token Scale

| Token | Multiplier | Value | Step |
|-------|-----------|-------|------|
| `--spacing-0` | 0x | 0px | -- |
| `--spacing-1` | 1x | 4px | +4 |
| `--spacing-2` | 2x | 8px | +4 |
| `--spacing-3` | 3x | 12px | +4 |
| `--spacing-4` | 4x | 16px | +4 |
| `--spacing-6` | 6x | 24px | +8 |
| `--spacing-8` | 8x | 32px | +8 |
| `--spacing-10` | 10x | 40px | +8 |
| `--spacing-12` | 12x | 48px | +8 |
| `--spacing-16` | 16x | 64px | +16 |
| `--spacing-20` | 20x | 80px | +16 |
| `--spacing-24` | 24x | 96px | +16 |
| `--spacing-32` | 32x | 128px | +32 |
| `--spacing-40` | 40x | 160px | +32 |
| `--spacing-48` | 48x | 192px | +32 |

### Step Progression

The step size increases as values grow, mirroring how human perception works -- small differences matter at small sizes, but at large sizes (e.g., 128px vs 132px) the difference is imperceptible.

- 0-16px: +4px steps (fine control for padding, gaps, icon spacing)
- 16-48px: +8px steps (component-level spacing)
- 48-96px: +16px steps (section-level spacing)
- 96-192px: +32px steps (page-level spacing)

### Upper Bound

The scale caps at 192px. Anything larger is layout territory and should be handled by layout primitives (grid, flex, container padding) rather than spacing tokens.

## Implementation

### File

`src/styles/tokens/spacing.css` -- CSS custom properties on `:root`, matching the existing color tokens pattern in `src/styles/tokens/colors.css`.

### Format

```css
:root {
  --spacing-unit: 4px;

  --spacing-0: 0px;
  --spacing-1: var(--spacing-unit);
  --spacing-2: calc(var(--spacing-unit) * 2);
  /* ... */
  --spacing-48: calc(var(--spacing-unit) * 48);
}
```

`--spacing-0` uses a literal `0px` (no calc needed). `--spacing-1` uses `var(--spacing-unit)` directly (no calc needed). All others use `calc()`.
