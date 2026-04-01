# Sizing Tokens Design

## Overview

Add a sizing token system for element dimensions and container widths. The system has three layers: a static scale of raw multipliers (like spacing), semantic t-shirt sizes for components, and named container/content widths. All values use `rem` units for accessibility scaling.

## Motivation

Spacing tokens control the gaps _between_ elements; sizing tokens control the dimensions _of_ elements. Buttons, inputs, avatars, icons, modals, and page containers all need consistent, constrained size choices. A shared static scale keeps the system predictable, while semantic aliases (t-shirt sizes, container names) make the tokens self-documenting at the point of use.

## Design

### Base Unit

```css
--sizing-unit: 0.25rem; /* 4px at default font size */
```

Independent from `--spacing-unit` even though the resolved value is the same. Sizing and spacing serve different purposes and may need to diverge.

### Static Scale

Raw multipliers of `--sizing-unit`, providing escape hatches when semantic tokens don't fit. Follows the same step-progression logic as spacing: finer steps at small values, coarser steps at large values.

| Token         | Multiplier | Value          | Step  |
| ------------- | ---------- | -------------- | ----- |
| `--sizing-0`  | 0x         | 0rem           | --    |
| `--sizing-1`  | 1x         | 0.25rem (4px)  | +4px  |
| `--sizing-2`  | 2x         | 0.5rem (8px)   | +4px  |
| `--sizing-3`  | 3x         | 0.75rem (12px) | +4px  |
| `--sizing-4`  | 4x         | 1rem (16px)    | +4px  |
| `--sizing-6`  | 6x         | 1.5rem (24px)  | +8px  |
| `--sizing-8`  | 8x         | 2rem (32px)    | +8px  |
| `--sizing-10` | 10x        | 2.5rem (40px)  | +8px  |
| `--sizing-12` | 12x        | 3rem (48px)    | +8px  |
| `--sizing-16` | 16x        | 4rem (64px)    | +16px |
| `--sizing-20` | 20x        | 5rem (80px)    | +16px |
| `--sizing-24` | 24x        | 6rem (96px)    | +16px |
| `--sizing-32` | 32x        | 8rem (128px)   | +32px |
| `--sizing-40` | 40x        | 10rem (160px)  | +32px |
| `--sizing-48` | 48x        | 12rem (192px)  | +32px |

### Component Sizes (T-Shirt Scale)

Semantic aliases for element dimensions -- buttons, inputs, avatars, icons. Each maps to a static scale value.

| Token        | Maps to       | Value          | Use case                      |
| ------------ | ------------- | -------------- | ----------------------------- |
| `--size-3xs` | `--sizing-3`  | 0.75rem (12px) | Small icons, badges           |
| `--size-2xs` | `--sizing-4`  | 1rem (16px)    | Default icons, indicators     |
| `--size-xs`  | `--sizing-6`  | 1.5rem (24px)  | Small buttons, small avatars  |
| `--size-sm`  | `--sizing-8`  | 2rem (32px)    | Default inputs, buttons       |
| `--size-md`  | `--sizing-10` | 2.5rem (40px)  | Larger inputs, touch targets  |
| `--size-lg`  | `--sizing-12` | 3rem (48px)    | Large buttons, toolbar height |
| `--size-xl`  | `--sizing-16` | 4rem (64px)    | Hero elements                 |
| `--size-2xl` | `--sizing-20` | 5rem (80px)    | Large avatars, feature icons  |
| `--size-3xl` | `--sizing-24` | 6rem (96px)    | Display elements              |

### Container Widths

Max-width constraints for layout containers, modals, and page wrappers.

| Token         | Value           | Use case             |
| ------------- | --------------- | -------------------- |
| `--width-3xs` | 16rem (256px)   | Narrow sidebar       |
| `--width-2xs` | 20rem (320px)   | Sidebar, small modal |
| `--width-xs`  | 28rem (448px)   | Small container      |
| `--width-sm`  | 36rem (576px)   | Narrow content       |
| `--width-md`  | 48rem (768px)   | Default content      |
| `--width-lg`  | 64rem (1024px)  | Wide content         |
| `--width-xl`  | 80rem (1280px)  | Full-width content   |
| `--width-2xl` | 90rem (1440px)  | Max page width       |
| `--width-3xl` | 100rem (1600px) | Ultra-wide           |

### Content Widths

Character-based widths for readable prose. These use `ch` units so line length adapts to the active font.

| Token                     | Value | Use case              |
| ------------------------- | ----- | --------------------- |
| `--content-width-narrow`  | 45ch  | Narrow reading column |
| `--content-width-default` | 65ch  | Optimal reading width |
| `--content-width-wide`    | 80ch  | Wide reading column   |

## Implementation

### File

`src/styles/tokens/sizing.css` -- CSS custom properties on `:root`, matching the existing tokens pattern.

### Format

```css
:root {
  /* Base unit */
  --sizing-unit: 0.25rem;

  /* Static scale */
  --sizing-0: 0rem;
  --sizing-1: var(--sizing-unit);
  --sizing-2: calc(var(--sizing-unit) * 2);
  /* ... */
  --sizing-48: calc(var(--sizing-unit) * 48);

  /* Component sizes (t-shirt scale) */
  --size-3xs: var(--sizing-3);
  --size-2xs: var(--sizing-4);
  /* ... */
  --size-3xl: var(--sizing-24);

  /* Container widths */
  --width-3xs: 16rem;
  --width-2xs: 20rem;
  /* ... */
  --width-3xl: 100rem;

  /* Content widths */
  --content-width-narrow: 45ch;
  --content-width-default: 65ch;
  --content-width-wide: 80ch;
}
```

### Notes

- Container widths use literal `rem` values rather than deriving from `--sizing-unit`. These are layout-level constants that shouldn't shift if the base sizing unit changes.
- Content widths use `ch` units intentionally -- they're tied to typography, not the sizing grid.
- Breakpoints are out of scope for this file and will live in a separate tokens file.
