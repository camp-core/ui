# Spacing Tokens Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a grid-based spacing token system to the design system with 15 curated values derived from a 4px base unit.

**Architecture:** CSS custom properties on `:root` in `src/styles/tokens/spacing.css`, using `calc()` with a `--spacing-unit` base variable. Follows the same pattern as the existing color tokens in `colors.css`.

**Tech Stack:** Pure CSS custom properties

---

### Task 1: Implement Spacing Tokens

**Files:**

- Modify: `src/styles/tokens/spacing.css` (currently empty)

- [ ] **Step 1: Write the spacing tokens**

Add all 15 spacing tokens to `src/styles/tokens/spacing.css`:

```css
:root {
  /* Base unit — all spacing tokens derive from this value */
  --spacing-unit: 4px;

  /* 0–16px: +4px steps (padding, gaps, icon spacing) */
  --spacing-0: 0px;
  --spacing-1: var(--spacing-unit);
  --spacing-2: calc(var(--spacing-unit) * 2);
  --spacing-3: calc(var(--spacing-unit) * 3);
  --spacing-4: calc(var(--spacing-unit) * 4);

  /* 16–48px: +8px steps (component-level spacing) */
  --spacing-6: calc(var(--spacing-unit) * 6);
  --spacing-8: calc(var(--spacing-unit) * 8);
  --spacing-10: calc(var(--spacing-unit) * 10);
  --spacing-12: calc(var(--spacing-unit) * 12);

  /* 48–96px: +16px steps (section-level spacing) */
  --spacing-16: calc(var(--spacing-unit) * 16);
  --spacing-20: calc(var(--spacing-unit) * 20);
  --spacing-24: calc(var(--spacing-unit) * 24);

  /* 96–192px: +32px steps (page-level spacing) */
  --spacing-32: calc(var(--spacing-unit) * 32);
  --spacing-40: calc(var(--spacing-unit) * 40);
  --spacing-48: calc(var(--spacing-unit) * 48);
}
```

- [ ] **Step 2: Run checks to validate CSS**

Run: `vp check`
Expected: PASS (no lint or format errors)

- [ ] **Step 3: Commit**

```bash
git add src/styles/tokens/spacing.css
git commit -m "feat: add spacing tokens"
```
