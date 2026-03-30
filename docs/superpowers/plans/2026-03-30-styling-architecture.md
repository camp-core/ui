# Styling Architecture Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a CSS custom properties token system and CSS Modules component styling for the camp-dev/ui component library.

**Architecture:** Global color palette tokens (CSS custom properties on `:root`) with dark mode via `[data-color-mode="dark"]` selector. Semantic tokens reference palette tokens. Components use CSS Modules (`.module.css`) that consume semantic tokens. Consumers import a single global stylesheet for tokens and use components normally.

**Tech Stack:** CSS custom properties, CSS Modules, CSS nesting, Vite (native support — no extra dependencies)

---

### Task 1: Create the Gray Color Palette

The gray palette is the foundation — semantic tokens for text, surfaces, and borders all reference it.

**Files:**
- Create: `src/styles/tokens/colors/gray.css`

- [ ] **Step 1: Create the gray color palette file**

Create `src/styles/tokens/colors/gray.css`:

```css
:root {
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;
  --gray-950: #030712;
}

[data-color-mode="dark"] {
  --gray-50: #030712;
  --gray-100: #111827;
  --gray-200: #1f2937;
  --gray-300: #374151;
  --gray-400: #4b5563;
  --gray-500: #6b7280;
  --gray-600: #9ca3af;
  --gray-700: #d1d5db;
  --gray-800: #e5e7eb;
  --gray-900: #f3f4f6;
  --gray-950: #f9fafb;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/styles/tokens/colors/gray.css
git commit -m "feat: add gray color palette tokens"
```

---

### Task 2: Create the Blue Color Palette

Blue is the default primary color for semantic tokens.

**Files:**
- Create: `src/styles/tokens/colors/blue.css`

- [ ] **Step 1: Create the blue color palette file**

Create `src/styles/tokens/colors/blue.css`:

```css
:root {
  --blue-50: #eff6ff;
  --blue-100: #dbeafe;
  --blue-200: #bfdbfe;
  --blue-300: #93c5fd;
  --blue-400: #60a5fa;
  --blue-500: #3b82f6;
  --blue-600: #2563eb;
  --blue-700: #1d4ed8;
  --blue-800: #1e40af;
  --blue-900: #1e3a8a;
  --blue-950: #172554;
}

[data-color-mode="dark"] {
  --blue-50: #172554;
  --blue-100: #1e3a8a;
  --blue-200: #1e40af;
  --blue-300: #1d4ed8;
  --blue-400: #2563eb;
  --blue-500: #3b82f6;
  --blue-600: #60a5fa;
  --blue-700: #93c5fd;
  --blue-800: #bfdbfe;
  --blue-900: #dbeafe;
  --blue-950: #eff6ff;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/styles/tokens/colors/blue.css
git commit -m "feat: add blue color palette tokens"
```

---

### Task 3: Create Remaining Color Palettes

Create the remaining color families. Each follows the identical pattern: 11 shades on `:root`, flipped scale on `[data-color-mode="dark"]`.

**Files:**
- Create: `src/styles/tokens/colors/red.css`
- Create: `src/styles/tokens/colors/orange.css`
- Create: `src/styles/tokens/colors/amber.css`
- Create: `src/styles/tokens/colors/yellow.css`
- Create: `src/styles/tokens/colors/lime.css`
- Create: `src/styles/tokens/colors/green.css`
- Create: `src/styles/tokens/colors/emerald.css`
- Create: `src/styles/tokens/colors/teal.css`
- Create: `src/styles/tokens/colors/cyan.css`
- Create: `src/styles/tokens/colors/sky.css`
- Create: `src/styles/tokens/colors/indigo.css`
- Create: `src/styles/tokens/colors/violet.css`
- Create: `src/styles/tokens/colors/purple.css`
- Create: `src/styles/tokens/colors/fuchsia.css`
- Create: `src/styles/tokens/colors/pink.css`
- Create: `src/styles/tokens/colors/rose.css`
- Create: `src/styles/tokens/colors/slate.css`
- Create: `src/styles/tokens/colors/zinc.css`
- Create: `src/styles/tokens/colors/neutral.css`
- Create: `src/styles/tokens/colors/stone.css`

- [ ] **Step 1: Create `src/styles/tokens/colors/red.css`**

```css
:root {
  --red-50: #fef2f2;
  --red-100: #fee2e2;
  --red-200: #fecaca;
  --red-300: #fca5a5;
  --red-400: #f87171;
  --red-500: #ef4444;
  --red-600: #dc2626;
  --red-700: #b91c1c;
  --red-800: #991b1b;
  --red-900: #7f1d1d;
  --red-950: #450a0a;
}

[data-color-mode="dark"] {
  --red-50: #450a0a;
  --red-100: #7f1d1d;
  --red-200: #991b1b;
  --red-300: #b91c1c;
  --red-400: #dc2626;
  --red-500: #ef4444;
  --red-600: #f87171;
  --red-700: #fca5a5;
  --red-800: #fecaca;
  --red-900: #fee2e2;
  --red-950: #fef2f2;
}
```

- [ ] **Step 2: Create `src/styles/tokens/colors/orange.css`**

```css
:root {
  --orange-50: #fff7ed;
  --orange-100: #ffedd5;
  --orange-200: #fed7aa;
  --orange-300: #fdba74;
  --orange-400: #fb923c;
  --orange-500: #f97316;
  --orange-600: #ea580c;
  --orange-700: #c2410c;
  --orange-800: #9a3412;
  --orange-900: #7c2d12;
  --orange-950: #431407;
}

[data-color-mode="dark"] {
  --orange-50: #431407;
  --orange-100: #7c2d12;
  --orange-200: #9a3412;
  --orange-300: #c2410c;
  --orange-400: #ea580c;
  --orange-500: #f97316;
  --orange-600: #fb923c;
  --orange-700: #fdba74;
  --orange-800: #fed7aa;
  --orange-900: #ffedd5;
  --orange-950: #fff7ed;
}
```

- [ ] **Step 3: Create `src/styles/tokens/colors/amber.css`**

```css
:root {
  --amber-50: #fffbeb;
  --amber-100: #fef3c7;
  --amber-200: #fde68a;
  --amber-300: #fcd34d;
  --amber-400: #fbbf24;
  --amber-500: #f59e0b;
  --amber-600: #d97706;
  --amber-700: #b45309;
  --amber-800: #92400e;
  --amber-900: #78350f;
  --amber-950: #451a03;
}

[data-color-mode="dark"] {
  --amber-50: #451a03;
  --amber-100: #78350f;
  --amber-200: #92400e;
  --amber-300: #b45309;
  --amber-400: #d97706;
  --amber-500: #f59e0b;
  --amber-600: #fbbf24;
  --amber-700: #fcd34d;
  --amber-800: #fde68a;
  --amber-900: #fef3c7;
  --amber-950: #fffbeb;
}
```

- [ ] **Step 4: Create `src/styles/tokens/colors/yellow.css`**

```css
:root {
  --yellow-50: #fefce8;
  --yellow-100: #fef9c3;
  --yellow-200: #fef08a;
  --yellow-300: #fde047;
  --yellow-400: #facc15;
  --yellow-500: #eab308;
  --yellow-600: #ca8a04;
  --yellow-700: #a16207;
  --yellow-800: #854d0e;
  --yellow-900: #713f12;
  --yellow-950: #422006;
}

[data-color-mode="dark"] {
  --yellow-50: #422006;
  --yellow-100: #713f12;
  --yellow-200: #854d0e;
  --yellow-300: #a16207;
  --yellow-400: #ca8a04;
  --yellow-500: #eab308;
  --yellow-600: #facc15;
  --yellow-700: #fde047;
  --yellow-800: #fef08a;
  --yellow-900: #fef9c3;
  --yellow-950: #fefce8;
}
```

- [ ] **Step 5: Create `src/styles/tokens/colors/lime.css`**

```css
:root {
  --lime-50: #f7fee7;
  --lime-100: #ecfccb;
  --lime-200: #d9f99d;
  --lime-300: #bef264;
  --lime-400: #a3e635;
  --lime-500: #84cc16;
  --lime-600: #65a30d;
  --lime-700: #4d7c0f;
  --lime-800: #3f6212;
  --lime-900: #365314;
  --lime-950: #1a2e05;
}

[data-color-mode="dark"] {
  --lime-50: #1a2e05;
  --lime-100: #365314;
  --lime-200: #3f6212;
  --lime-300: #4d7c0f;
  --lime-400: #65a30d;
  --lime-500: #84cc16;
  --lime-600: #a3e635;
  --lime-700: #bef264;
  --lime-800: #d9f99d;
  --lime-900: #ecfccb;
  --lime-950: #f7fee7;
}
```

- [ ] **Step 6: Create `src/styles/tokens/colors/green.css`**

```css
:root {
  --green-50: #f0fdf4;
  --green-100: #dcfce7;
  --green-200: #bbf7d0;
  --green-300: #86efac;
  --green-400: #4ade80;
  --green-500: #22c55e;
  --green-600: #16a34a;
  --green-700: #15803d;
  --green-800: #166534;
  --green-900: #14532d;
  --green-950: #052e16;
}

[data-color-mode="dark"] {
  --green-50: #052e16;
  --green-100: #14532d;
  --green-200: #166534;
  --green-300: #15803d;
  --green-400: #16a34a;
  --green-500: #22c55e;
  --green-600: #4ade80;
  --green-700: #86efac;
  --green-800: #bbf7d0;
  --green-900: #dcfce7;
  --green-950: #f0fdf4;
}
```

- [ ] **Step 7: Create `src/styles/tokens/colors/emerald.css`**

```css
:root {
  --emerald-50: #ecfdf5;
  --emerald-100: #d1fae5;
  --emerald-200: #a7f3d0;
  --emerald-300: #6ee7b7;
  --emerald-400: #34d399;
  --emerald-500: #10b981;
  --emerald-600: #059669;
  --emerald-700: #047857;
  --emerald-800: #065f46;
  --emerald-900: #064e3b;
  --emerald-950: #022c22;
}

[data-color-mode="dark"] {
  --emerald-50: #022c22;
  --emerald-100: #064e3b;
  --emerald-200: #065f46;
  --emerald-300: #047857;
  --emerald-400: #059669;
  --emerald-500: #10b981;
  --emerald-600: #34d399;
  --emerald-700: #6ee7b7;
  --emerald-800: #a7f3d0;
  --emerald-900: #d1fae5;
  --emerald-950: #ecfdf5;
}
```

- [ ] **Step 8: Create `src/styles/tokens/colors/teal.css`**

```css
:root {
  --teal-50: #f0fdfa;
  --teal-100: #ccfbf1;
  --teal-200: #99f6e4;
  --teal-300: #5eead4;
  --teal-400: #2dd4bf;
  --teal-500: #14b8a6;
  --teal-600: #0d9488;
  --teal-700: #0f766e;
  --teal-800: #115e59;
  --teal-900: #134e4a;
  --teal-950: #042f2e;
}

[data-color-mode="dark"] {
  --teal-50: #042f2e;
  --teal-100: #134e4a;
  --teal-200: #115e59;
  --teal-300: #0f766e;
  --teal-400: #0d9488;
  --teal-500: #14b8a6;
  --teal-600: #2dd4bf;
  --teal-700: #5eead4;
  --teal-800: #99f6e4;
  --teal-900: #ccfbf1;
  --teal-950: #f0fdfa;
}
```

- [ ] **Step 9: Create `src/styles/tokens/colors/cyan.css`**

```css
:root {
  --cyan-50: #ecfeff;
  --cyan-100: #cffafe;
  --cyan-200: #a5f3fc;
  --cyan-300: #67e8f9;
  --cyan-400: #22d3ee;
  --cyan-500: #06b6d4;
  --cyan-600: #0891b2;
  --cyan-700: #0e7490;
  --cyan-800: #155e75;
  --cyan-900: #164e63;
  --cyan-950: #083344;
}

[data-color-mode="dark"] {
  --cyan-50: #083344;
  --cyan-100: #164e63;
  --cyan-200: #155e75;
  --cyan-300: #0e7490;
  --cyan-400: #0891b2;
  --cyan-500: #06b6d4;
  --cyan-600: #22d3ee;
  --cyan-700: #67e8f9;
  --cyan-800: #a5f3fc;
  --cyan-900: #cffafe;
  --cyan-950: #ecfeff;
}
```

- [ ] **Step 10: Create `src/styles/tokens/colors/sky.css`**

```css
:root {
  --sky-50: #f0f9ff;
  --sky-100: #e0f2fe;
  --sky-200: #bae6fd;
  --sky-300: #7dd3fc;
  --sky-400: #38bdf8;
  --sky-500: #0ea5e9;
  --sky-600: #0284c7;
  --sky-700: #0369a1;
  --sky-800: #075985;
  --sky-900: #0c4a6e;
  --sky-950: #082f49;
}

[data-color-mode="dark"] {
  --sky-50: #082f49;
  --sky-100: #0c4a6e;
  --sky-200: #075985;
  --sky-300: #0369a1;
  --sky-400: #0284c7;
  --sky-500: #0ea5e9;
  --sky-600: #38bdf8;
  --sky-700: #7dd3fc;
  --sky-800: #bae6fd;
  --sky-900: #e0f2fe;
  --sky-950: #f0f9ff;
}
```

- [ ] **Step 11: Create `src/styles/tokens/colors/indigo.css`**

```css
:root {
  --indigo-50: #eef2ff;
  --indigo-100: #e0e7ff;
  --indigo-200: #c7d2fe;
  --indigo-300: #a5b4fc;
  --indigo-400: #818cf8;
  --indigo-500: #6366f1;
  --indigo-600: #4f46e5;
  --indigo-700: #4338ca;
  --indigo-800: #3730a3;
  --indigo-900: #312e81;
  --indigo-950: #1e1b4b;
}

[data-color-mode="dark"] {
  --indigo-50: #1e1b4b;
  --indigo-100: #312e81;
  --indigo-200: #3730a3;
  --indigo-300: #4338ca;
  --indigo-400: #4f46e5;
  --indigo-500: #6366f1;
  --indigo-600: #818cf8;
  --indigo-700: #a5b4fc;
  --indigo-800: #c7d2fe;
  --indigo-900: #e0e7ff;
  --indigo-950: #eef2ff;
}
```

- [ ] **Step 12: Create `src/styles/tokens/colors/violet.css`**

```css
:root {
  --violet-50: #f5f3ff;
  --violet-100: #ede9fe;
  --violet-200: #ddd6fe;
  --violet-300: #c4b5fd;
  --violet-400: #a78bfa;
  --violet-500: #8b5cf6;
  --violet-600: #7c3aed;
  --violet-700: #6d28d9;
  --violet-800: #5b21b6;
  --violet-900: #4c1d95;
  --violet-950: #2e1065;
}

[data-color-mode="dark"] {
  --violet-50: #2e1065;
  --violet-100: #4c1d95;
  --violet-200: #5b21b6;
  --violet-300: #6d28d9;
  --violet-400: #7c3aed;
  --violet-500: #8b5cf6;
  --violet-600: #a78bfa;
  --violet-700: #c4b5fd;
  --violet-800: #ddd6fe;
  --violet-900: #ede9fe;
  --violet-950: #f5f3ff;
}
```

- [ ] **Step 13: Create `src/styles/tokens/colors/purple.css`**

```css
:root {
  --purple-50: #faf5ff;
  --purple-100: #f3e8ff;
  --purple-200: #e9d5ff;
  --purple-300: #d8b4fe;
  --purple-400: #c084fc;
  --purple-500: #a855f7;
  --purple-600: #9333ea;
  --purple-700: #7e22ce;
  --purple-800: #6b21a8;
  --purple-900: #581c87;
  --purple-950: #3b0764;
}

[data-color-mode="dark"] {
  --purple-50: #3b0764;
  --purple-100: #581c87;
  --purple-200: #6b21a8;
  --purple-300: #7e22ce;
  --purple-400: #9333ea;
  --purple-500: #a855f7;
  --purple-600: #c084fc;
  --purple-700: #d8b4fe;
  --purple-800: #e9d5ff;
  --purple-900: #f3e8ff;
  --purple-950: #faf5ff;
}
```

- [ ] **Step 14: Create `src/styles/tokens/colors/fuchsia.css`**

```css
:root {
  --fuchsia-50: #fdf4ff;
  --fuchsia-100: #fae8ff;
  --fuchsia-200: #f5d0fe;
  --fuchsia-300: #f0abfc;
  --fuchsia-400: #e879f9;
  --fuchsia-500: #d946ef;
  --fuchsia-600: #c026d3;
  --fuchsia-700: #a21caf;
  --fuchsia-800: #86198f;
  --fuchsia-900: #701a75;
  --fuchsia-950: #4a044e;
}

[data-color-mode="dark"] {
  --fuchsia-50: #4a044e;
  --fuchsia-100: #701a75;
  --fuchsia-200: #86198f;
  --fuchsia-300: #a21caf;
  --fuchsia-400: #c026d3;
  --fuchsia-500: #d946ef;
  --fuchsia-600: #e879f9;
  --fuchsia-700: #f0abfc;
  --fuchsia-800: #f5d0fe;
  --fuchsia-900: #fae8ff;
  --fuchsia-950: #fdf4ff;
}
```

- [ ] **Step 15: Create `src/styles/tokens/colors/pink.css`**

```css
:root {
  --pink-50: #fdf2f8;
  --pink-100: #fce7f3;
  --pink-200: #fbcfe8;
  --pink-300: #f9a8d4;
  --pink-400: #f472b6;
  --pink-500: #ec4899;
  --pink-600: #db2777;
  --pink-700: #be185d;
  --pink-800: #9d174d;
  --pink-900: #831843;
  --pink-950: #500724;
}

[data-color-mode="dark"] {
  --pink-50: #500724;
  --pink-100: #831843;
  --pink-200: #9d174d;
  --pink-300: #be185d;
  --pink-400: #db2777;
  --pink-500: #ec4899;
  --pink-600: #f472b6;
  --pink-700: #f9a8d4;
  --pink-800: #fbcfe8;
  --pink-900: #fce7f3;
  --pink-950: #fdf2f8;
}
```

- [ ] **Step 16: Create `src/styles/tokens/colors/rose.css`**

```css
:root {
  --rose-50: #fff1f2;
  --rose-100: #ffe4e6;
  --rose-200: #fecdd3;
  --rose-300: #fda4af;
  --rose-400: #fb7185;
  --rose-500: #f43f5e;
  --rose-600: #e11d48;
  --rose-700: #be123c;
  --rose-800: #9f1239;
  --rose-900: #881337;
  --rose-950: #4c0519;
}

[data-color-mode="dark"] {
  --rose-50: #4c0519;
  --rose-100: #881337;
  --rose-200: #9f1239;
  --rose-300: #be123c;
  --rose-400: #e11d48;
  --rose-500: #f43f5e;
  --rose-600: #fb7185;
  --rose-700: #fda4af;
  --rose-800: #fecdd3;
  --rose-900: #ffe4e6;
  --rose-950: #fff1f2;
}
```

- [ ] **Step 17: Create `src/styles/tokens/colors/slate.css`**

```css
:root {
  --slate-50: #f8fafc;
  --slate-100: #f1f5f9;
  --slate-200: #e2e8f0;
  --slate-300: #cbd5e1;
  --slate-400: #94a3b8;
  --slate-500: #64748b;
  --slate-600: #475569;
  --slate-700: #334155;
  --slate-800: #1e293b;
  --slate-900: #0f172a;
  --slate-950: #020617;
}

[data-color-mode="dark"] {
  --slate-50: #020617;
  --slate-100: #0f172a;
  --slate-200: #1e293b;
  --slate-300: #334155;
  --slate-400: #475569;
  --slate-500: #64748b;
  --slate-600: #94a3b8;
  --slate-700: #cbd5e1;
  --slate-800: #e2e8f0;
  --slate-900: #f1f5f9;
  --slate-950: #f8fafc;
}
```

- [ ] **Step 18: Create `src/styles/tokens/colors/zinc.css`**

```css
:root {
  --zinc-50: #fafafa;
  --zinc-100: #f4f4f5;
  --zinc-200: #e4e4e7;
  --zinc-300: #d4d4d8;
  --zinc-400: #a1a1aa;
  --zinc-500: #71717a;
  --zinc-600: #52525b;
  --zinc-700: #3f3f46;
  --zinc-800: #27272a;
  --zinc-900: #18181b;
  --zinc-950: #09090b;
}

[data-color-mode="dark"] {
  --zinc-50: #09090b;
  --zinc-100: #18181b;
  --zinc-200: #27272a;
  --zinc-300: #3f3f46;
  --zinc-400: #52525b;
  --zinc-500: #71717a;
  --zinc-600: #a1a1aa;
  --zinc-700: #d4d4d8;
  --zinc-800: #e4e4e7;
  --zinc-900: #f4f4f5;
  --zinc-950: #fafafa;
}
```

- [ ] **Step 19: Create `src/styles/tokens/colors/neutral.css`**

```css
:root {
  --neutral-50: #fafafa;
  --neutral-100: #f5f5f5;
  --neutral-200: #e5e5e5;
  --neutral-300: #d4d4d4;
  --neutral-400: #a3a3a3;
  --neutral-500: #737373;
  --neutral-600: #525252;
  --neutral-700: #404040;
  --neutral-800: #262626;
  --neutral-900: #171717;
  --neutral-950: #0a0a0a;
}

[data-color-mode="dark"] {
  --neutral-50: #0a0a0a;
  --neutral-100: #171717;
  --neutral-200: #262626;
  --neutral-300: #404040;
  --neutral-400: #525252;
  --neutral-500: #737373;
  --neutral-600: #a3a3a3;
  --neutral-700: #d4d4d4;
  --neutral-800: #e5e5e5;
  --neutral-900: #f5f5f5;
  --neutral-950: #fafafa;
}
```

- [ ] **Step 20: Create `src/styles/tokens/colors/stone.css`**

```css
:root {
  --stone-50: #fafaf9;
  --stone-100: #f5f5f4;
  --stone-200: #e7e5e4;
  --stone-300: #d6d3d1;
  --stone-400: #a8a29e;
  --stone-500: #78716c;
  --stone-600: #57534e;
  --stone-700: #44403c;
  --stone-800: #292524;
  --stone-900: #1c1917;
  --stone-950: #0c0a09;
}

[data-color-mode="dark"] {
  --stone-50: #0c0a09;
  --stone-100: #1c1917;
  --stone-200: #292524;
  --stone-300: #44403c;
  --stone-400: #57534e;
  --stone-500: #78716c;
  --stone-600: #a8a29e;
  --stone-700: #d6d3d1;
  --stone-800: #e7e5e4;
  --stone-900: #f5f5f4;
  --stone-950: #fafaf9;
}
```

- [ ] **Step 21: Commit all remaining color palettes**

```bash
git add src/styles/tokens/colors/
git commit -m "feat: add all color palette tokens (red through stone)"
```

---

### Task 4: Create Semantic Tokens

Semantic tokens provide meaningful names that components consume. They reference palette tokens and adapt to dark mode.

**Files:**
- Create: `src/styles/tokens/semantic.css`

- [ ] **Step 1: Create the semantic tokens file**

Create `src/styles/tokens/semantic.css`:

```css
:root {
  /* Primary */
  --color-primary: var(--blue-600);
  --color-primary-hover: var(--blue-700);
  --color-on-primary: #ffffff;

  /* Surface & background */
  --color-surface: var(--gray-50);
  --color-surface-raised: #ffffff;

  /* Text */
  --color-text: var(--gray-900);
  --color-text-muted: var(--gray-500);

  /* Border */
  --color-border: var(--gray-200);

  /* Feedback */
  --color-success: var(--green-600);
  --color-warning: var(--amber-500);
  --color-error: var(--red-600);
}

[data-color-mode="dark"] {
  /* Primary */
  --color-primary: var(--blue-400);
  --color-primary-hover: var(--blue-300);
  --color-on-primary: #000000;

  /* Surface & background */
  --color-surface: var(--gray-900);
  --color-surface-raised: var(--gray-800);

  /* Text */
  --color-text: var(--gray-50);
  --color-text-muted: var(--gray-400);

  /* Border */
  --color-border: var(--gray-700);

  /* Feedback */
  --color-success: var(--green-400);
  --color-warning: var(--amber-400);
  --color-error: var(--red-400);
}
```

- [ ] **Step 2: Commit**

```bash
git add src/styles/tokens/semantic.css
git commit -m "feat: add semantic color tokens with dark mode"
```

---

### Task 5: Create the Global Stylesheet

This is the single entry point consumers import. It aggregates all token files.

**Files:**
- Create: `src/styles/global.css`

- [ ] **Step 1: Create the global stylesheet**

Create `src/styles/global.css`:

```css
/* Color palette tokens */
@import "./tokens/colors/gray.css";
@import "./tokens/colors/red.css";
@import "./tokens/colors/orange.css";
@import "./tokens/colors/amber.css";
@import "./tokens/colors/yellow.css";
@import "./tokens/colors/lime.css";
@import "./tokens/colors/green.css";
@import "./tokens/colors/emerald.css";
@import "./tokens/colors/teal.css";
@import "./tokens/colors/cyan.css";
@import "./tokens/colors/sky.css";
@import "./tokens/colors/blue.css";
@import "./tokens/colors/indigo.css";
@import "./tokens/colors/violet.css";
@import "./tokens/colors/purple.css";
@import "./tokens/colors/fuchsia.css";
@import "./tokens/colors/pink.css";
@import "./tokens/colors/rose.css";
@import "./tokens/colors/slate.css";
@import "./tokens/colors/zinc.css";
@import "./tokens/colors/neutral.css";
@import "./tokens/colors/stone.css";

/* Semantic tokens */
@import "./tokens/semantic.css";
```

- [ ] **Step 2: Commit**

```bash
git add src/styles/global.css
git commit -m "feat: add global stylesheet entry point"
```

---

### Task 6: Restructure Button Component with CSS Modules

Move Button into its own directory and replace data-attribute styling with CSS Modules.

**Files:**
- Create: `src/Button/Button.tsx`
- Create: `src/Button/Button.module.css`
- Create: `src/Button/Button.stories.tsx`
- Create: `src/Button/index.ts`
- Modify: `src/index.ts`
- Delete: `src/Button.tsx`
- Delete: `src/Button.stories.tsx`

- [ ] **Step 1: Create `src/Button/Button.module.css`**

```css
.button {
  font-family: inherit;
  font-weight: 500;
  border: 1px solid var(--color-border);
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s, border-color 0.15s;

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

/* Variants */
.primary {
  background: var(--color-primary);
  color: var(--color-on-primary);
  border-color: var(--color-primary);

  &:hover:not(:disabled) {
    background: var(--color-primary-hover);
    border-color: var(--color-primary-hover);
  }
}

.secondary {
  background: var(--color-surface-raised);
  color: var(--color-text);
  border-color: var(--color-border);

  &:hover:not(:disabled) {
    background: var(--color-surface);
  }
}

/* Sizes */
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

- [ ] **Step 2: Create `src/Button/Button.tsx`**

```tsx
import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
```

- [ ] **Step 3: Create `src/Button/index.ts`**

```ts
export { Button } from "./Button.tsx";
export type { ButtonProps } from "./Button.tsx";
```

- [ ] **Step 4: Create `src/Button/Button.stories.tsx`**

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button.tsx";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "lg",
  },
};
```

- [ ] **Step 5: Update `src/index.ts` to export from the new location**

Replace the contents of `src/index.ts` with:

```ts
export function fn() {
  return "Hello, tsdown!";
}

export { Button } from "./Button/index.ts";
export type { ButtonProps } from "./Button/index.ts";
```

- [ ] **Step 6: Delete the old Button files**

```bash
rm src/Button.tsx src/Button.stories.tsx
```

- [ ] **Step 7: Verify the build passes**

Run: `vp check`
Expected: No errors

- [ ] **Step 8: Commit**

```bash
git add src/Button/ src/index.ts
git add -u
git commit -m "refactor: move Button to directory structure with CSS Modules"
```

---

### Task 7: Add CSS Module Type Declarations

TypeScript needs to know how to handle `.module.css` imports.

**Files:**
- Create: `src/css-modules.d.ts`

- [ ] **Step 1: Create the type declaration file**

Create `src/css-modules.d.ts`:

```ts
declare module "*.module.css" {
  const classes: Record<string, string>;
  export default classes;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/css-modules.d.ts
git commit -m "feat: add CSS Module type declarations"
```

---

### Task 8: Update Package Exports

Add the `./styles` export so consumers can import the global stylesheet.

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Update the exports field in `package.json`**

Change the `"exports"` field from:

```json
"exports": {
  ".": "./dist/index.mjs",
  "./package.json": "./package.json"
}
```

To:

```json
"exports": {
  ".": "./dist/index.mjs",
  "./styles": "./dist/styles/global.css",
  "./package.json": "./package.json"
}
```

- [ ] **Step 2: Verify the build produces the expected output**

Run: `vp run build`

Check that `dist/styles/global.css` exists:

```bash
ls dist/styles/global.css
```

If the file is not there, the `vp pack` build may not copy CSS assets automatically. In that case, the global stylesheet needs to be added as an explicit entry or copy step in `vite.config.ts`. Investigate and adjust accordingly.

- [ ] **Step 3: Commit**

```bash
git add package.json
git commit -m "feat: add ./styles export for global stylesheet"
```

---

### Task 9: Configure Storybook with Global Styles and Dark Mode Toggle

Import the global stylesheet into Storybook and add a toolbar button for switching between light and dark mode.

**Files:**
- Modify: `.storybook/preview.ts`

- [ ] **Step 1: Update `.storybook/preview.ts`**

Replace the contents of `.storybook/preview.ts` with:

```ts
import type { Preview } from "@storybook/react";
import "../src/styles/global.css";

const preview: Preview = {
  globalTypes: {
    colorMode: {
      description: "Color mode for components",
      toolbar: {
        title: "Color Mode",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    colorMode: "light",
  },
  decorators: [
    (Story, context) => {
      const colorMode = context.globals.colorMode;
      document.documentElement.setAttribute(
        "data-color-mode",
        colorMode,
      );
      return Story();
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
```

- [ ] **Step 2: Verify Storybook starts and the toggle works**

Run: `vp run storybook`

Expected:
- Storybook loads at `http://localhost:6006`
- Button stories render with styled buttons (blue primary, bordered secondary)
- Toolbar shows a sun/moon toggle that switches between light and dark mode
- Colors update when toggling dark mode

- [ ] **Step 3: Commit**

```bash
git add .storybook/preview.ts
git commit -m "feat: add global styles and dark mode toggle to Storybook"
```

---

### Task 10: Verify End-to-End

Final verification that everything works together.

**Files:** None (verification only)

- [ ] **Step 1: Run the full check suite**

```bash
vp check
```

Expected: All lint, format, and type checks pass.

- [ ] **Step 2: Run tests**

```bash
vp test
```

Expected: All tests pass (the existing `fn` test should still work).

- [ ] **Step 3: Run the build**

```bash
vp run build
```

Expected: Build completes without errors. `dist/` contains `index.mjs` and the global CSS.

- [ ] **Step 4: Verify Storybook**

```bash
vp run storybook
```

Expected: Button renders with proper styles in both light and dark modes.
