# (2) Notifications / X — Design System

**Source:** https://x.com/  
**Generated:** 18/04/2026, 14:20:36  
**Extracted:** 17 colors · 17 type tokens · 11 spacing steps · 13 breakpoints · 6 motion tokens

> This document was auto-extracted by UI Inspector. It contains design tokens for colors,
> typography, spacing, borders, elevation, motion, breakpoints, and more — in both human-readable
> tables and machine-readable CSS/JSON formats compatible with Figma Tokens and Style Dictionary.

---

## Table of Contents

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing](#spacing)
4. [Borders](#borders)
5. [Elevation — Shadows](#elevation--shadows)
6. [Motion](#motion)
7. [Z-Index](#z-index)
8. [Breakpoints](#breakpoints)
9. [Opacity](#opacity)
10. [Accessibility — Contrast Ratios](#accessibility--contrast-ratios)
11. [CSS Custom Properties (from :root)](#css-custom-properties-from-root)
12. [Design Tokens (CSS Variables)](#design-tokens-css-variables)
13. [Machine-Readable Tokens — DTCG JSON](#machine-readable-tokens--dtcg-json)

---

## Color Palette

### Background Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-gray-2` | `#0F1419` | hsl(210, 25%, 8%) | ×186 |
| `--color-white` | `#FFFFFF` | hsl(0, 0%, 100%) | ×61 |
| `--color-blue-2` | `#1D9BF0` | hsl(204, 88%, 53%) | ×17 |
| `--color-blue-6` | `rgba(29, 155, 240, 0.1)` | hsl(203, 84%, 52%) | ×2 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×658 |
| `--color-dark-gray` | `#0F141A` | hsl(213, 27%, 8%) | ×403 |
| `--color-blue` | `#536471` | hsl(206, 15%, 38%) | ×87 |
| `--color-blue-3` | `#829AAB` | hsl(205, 20%, 59%) | ×16 |
| `--color-light-cyan` | `#CFD9DE` | hsl(200, 19%, 84%) | ×15 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray` | `#E4EAEC` | hsl(195, 17%, 91%) | ×222 |
| `--color-light-gray-2` | `#EFF3F4` | hsl(192, 19%, 95%) | ×4 |
| `--color-blue-7` | `#9FB5C3` | hsl(203, 23%, 69%) | ×1 |
| `--color-blue-8` | `#9EB4C2` | hsl(203, 23%, 69%) | ×1 |

### Shadow Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-blue-4` | `rgba(101, 119, 134, 0.2)` | hsl(206, 15%, 46%) | ×4 |
| `--color-blue-5` | `rgba(101, 119, 134, 0.15)` | hsl(204, 14%, 46%) | ×2 |

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-red` | `#F4212E` | hsl(356, 91%, 54%) | ×1 |
| `--color-orange` | `#D18800` | hsl(39, 100%, 41%) | ×1 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `ui-sans-serif` |
| `--font-family-2` | `TwitterChirp` |
| `--font-family-3` | `-apple-system` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `11px` |  |
| `--font-size-xs` | `13px` |  |
| `--font-size-sm` | `14px` |  |
| `--font-size-base` | `15px` |  |
| `--font-size-lg` | `20px` |  |

### Font Weights

| Token | Weight |
| --- | --- |
| `--font-weight-regular` | `400` |
| `--font-weight-medium` | `500` |
| `--font-weight-bold` | `700` |
| `--font-weight-extrabold` | `800` |

### Line Heights

| Token | Value |
| --- | --- |
| `--line-height-tight` | `12px` |
| `--line-height-snug` | `16px` |
| `--line-height-normal` | `20px` |
| `--line-height-relaxed` | `22.5px` |
| `--line-height-loose` | `24px` |

### Letter Spacing

_None detected._

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `2px` | ×28 |
| `--space-2` | `4px` | ×50 |
| `--space-3` | `8px` | ×13 |
| `--space-4` | `10px` | ×1 |
| `--space-5` | `12px` | ×95 |
| `--space-6` | `16px` | ×56 |
| `--space-8` | `20px` | ×6 |
| `--space-10` | `32px` | ×1 |
| `--space-12` | `40px` | ×12 |
| `--space-16` | `64px` | ×1 |
| `--space-20` | `266.5px` | ×2 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `1px` | ×65 |
| `--border-width-thin` | `2px` | ×1 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `0px 0px 16px 16px` | ×1 |
| `--radius-md` | `4px` | ×1 |
| `--radius-lg` | `15px` | ×1 |
| `--radius-xl` | `16px` | ×5 |
| `--radius-2xl` | `16px 16px 0px 0px` | ×1 |
| `--radius-full` | `9999px` | ×41 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgba(0, 0, 0, 0.03) 0px 0px 2px 0px inset` | ×4 |
| `--shadow-md` | `rgba(101, 119, 134, 0.2) 0px 0px 15px 0px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px` | ×2 |
| `--shadow-lg` | `rgba(101, 119, 134, 0.2) 0px 0px 8px 0px, rgba(101, 119, 134, 0.25) 0px 1px 3px 1px` | ×1 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.15s` | ×2 |
| `--duration-fast` | `0.17s` | ×1 |
| `--duration-normal` | `0.2s` | ×105 |
| `--duration-slow` | `0.3s` | ×1 |
| `--duration-slower` | `0.35s` | ×1 |

### Easing Functions

| Token | Value | Usage |
| --- | --- | --- |
| `--easing-ease-out` | `ease-out` | ×4 |

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `-1` |
| `--z-2` | `1` |
| `--z-3` | `2` |
| `--z-4` | `3` |
| `--z-5` | `4` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `370px` |
| `--breakpoint-sm` | `388px` |
| `--breakpoint-md` | `407px` |
| `--breakpoint-lg` | `600px` |
| `--breakpoint-xl` | `640px` |
| `--breakpoint-2xl` | `767px` |
| `--breakpoint-3xl` | `768px` |
| `--breakpoint-bp-8` | `987px` |
| `--breakpoint-bp-9` | `988px` |
| `--breakpoint-bp-10` | `1024px` |
| `--breakpoint-bp-11` | `1077px` |
| `--breakpoint-bp-12` | `1280px` |
| `--breakpoint-bp-13` | `1536px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-50` | `0.5` | ×2 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-black` | `--color-dark-gray-2` | 1.13:1 | Fail |
| `--color-black` | `--color-white` | 21:1 | AAA |
| `--color-black` | `--color-blue-2` | 7:1 | AAA |
| `--color-black` | `--color-blue-6` | 7.07:1 | AAA |
| `--color-dark-gray` | `--color-dark-gray-2` | 1:1 | Fail |
| `--color-dark-gray` | `--color-white` | 18.5:1 | AAA |
| `--color-dark-gray` | `--color-blue-2` | 6.16:1 | AA |
| `--color-dark-gray` | `--color-blue-6` | 6.23:1 | AA |
| `--color-blue` | `--color-dark-gray-2` | 3.02:1 | AA Large |
| `--color-blue` | `--color-white` | 6.12:1 | AA |
| `--color-blue` | `--color-blue-2` | 2.04:1 | Fail |
| `--color-blue` | `--color-blue-6` | 2.06:1 | Fail |
| `--color-blue-3` | `--color-dark-gray-2` | 6.31:1 | AA |
| `--color-blue-3` | `--color-white` | 2.93:1 | Fail |
| `--color-blue-3` | `--color-blue-2` | 1.02:1 | Fail |
| `--color-blue-3` | `--color-blue-6` | 1.01:1 | Fail |
| `--color-light-cyan` | `--color-dark-gray-2` | 12.9:1 | AAA |
| `--color-light-cyan` | `--color-white` | 1.44:1 | Fail |
| `--color-light-cyan` | `--color-blue-2` | 2.09:1 | Fail |
| `--color-light-cyan` | `--color-blue-6` | 2.07:1 | Fail |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--jbgo` | `1` |
| `--jbo` | `1` |
| `--bg-gradient-from` | `transparent` |
| `--bg-gradient-to` | `transparent` |
| `--color-background` | `0 0% 0%` |
| `--color-black` | `0 0% 0%` |
| `--color-brand` | `200 7% 91%` |
| `--color-mask` | `rgba(0, 0, 0, 0.4)` |
| `--color-nested-border` | `210 4% 46%` |
| `--color-text` | `200 7% 91%` |
| `--color-white` | `0 0% 100%` |
| `--color-badge` | `var(--color-blue-500)` |
| `--background` | `0 0% 0%` |
| `--foreground` | `200 7% 91%` |
| `--card` | `var(--color-gray-0)` |
| `--card-foreground` | `200 7% 91%` |
| `--popover` | `0 0% 0%` |
| `--popover-foreground` | `200 7% 91%` |
| `--primary` | `var(--color-blue-500)` |
| `--primary-foreground` | `240 5.9% 10%` |
| `--secondary` | `210 7% 18%` |
| `--secondary-foreground` | `200 7% 91%` |
| `--muted` | `210 7% 18%` |
| `--muted-foreground` | `240 5% 64.9%` |
| `--accent` | `var(--color-blue-200)` |
| `--accent-foreground` | `var(--color-blue-700)` |
| `--destructive` | `0 62.8% 30.6%` |
| `--destructive-foreground` | `200 7% 91%` |
| `--border` | `210 7% 18%` |
| `--input` | `210 7% 18%` |
| `--ring` | `var(--color-blue-500)` |
| `--chart-1` | `var(--color-blue-500)` |
| `--chart-2` | `var(--color-green-500)` |
| `--chart-3` | `var(--color-red-500)` |
| `--chart-4` | `var(--color-yellow-500)` |
| `--chart-5` | `var(--color-purple-500)` |
| `--radius` | `0.5rem` |
| `--color-blue-0` | `225 94% 12%` |
| `--color-blue-50` | `223 100% 15%` |
| `--color-blue-100` | `215 100% 26%` |
| `--color-blue-200` | `212 100% 38%` |
| `--color-blue-300` | `209 100% 42%` |
| `--color-blue-400` | `207 100% 46%` |
| `--color-blue-500` | `204 88% 53%` |
| `--color-blue-600` | `202 91% 61%` |
| `--color-blue-700` | `201 95% 70%` |
| `--color-blue-800` | `196 100% 80%` |
| `--color-blue-900` | `192 100% 87%` |
| `--color-blue-1000` | `194 100% 92%` |
| `--color-blue-1100` | `194 100% 96%` |
| `--color-gray-0` | `220 12% 10%` |
| `--color-gray-50` | `214 10% 14%` |
| `--color-gray-100` | `210 7% 18%` |
| `--color-gray-200` | `210 6% 21%` |
| `--color-gray-300` | `210 5% 25%` |
| `--color-gray-400` | `214 4% 31%` |
| `--color-gray-500` | `213 5% 37%` |
| `--color-gray-600` | `207 4% 41%` |
| `--color-gray-700` | `210 4% 46%` |
| `--color-gray-800` | `207 4% 59%` |
| `--color-gray-900` | `210 4% 73%` |
| `--color-gray-1000` | `204 6% 85%` |
| `--color-gray-1100` | `200 7% 91%` |
| `--color-green-0` | `162 100% 7%` |
| `--color-green-50` | `162 100% 7%` |
| `--color-green-100` | `157 100% 13%` |
| `--color-green-200` | `158 100% 19%` |
| `--color-green-300` | `158 100% 25%` |
| `--color-green-400` | `158 100% 31%` |
| `--color-green-500` | `160 100% 36%` |
| `--color-green-600` | `157 61% 49%` |
| `--color-green-700` | `154 59% 61%` |
| `--color-green-800` | `153 59% 73%` |
| `--color-green-900` | `153 63% 85%` |
| `--color-green-1000` | `153 67% 92%` |
| `--color-green-1100` | `160 100% 96%` |
| `--color-magenta-0` | `330 96% 11%` |
| `--color-magenta-50` | `330 100% 12%` |
| `--color-magenta-100` | `331 90% 21%` |
| `--color-magenta-200` | `332 86% 29%` |
| `--color-magenta-300` | `332 85% 37%` |
| `--color-magenta-400` | `332 84% 45%` |
| `--color-magenta-500` | `332 95% 54%` |
| `--color-magenta-600` | `332 95% 62%` |
| `--color-magenta-700` | `332 95% 71%` |
| `--color-magenta-800` | `332 96% 80%` |
| `--color-magenta-900` | `332 96% 89%` |
| `--color-magenta-1000` | `332 100% 93%` |
| `--color-magenta-1100` | `330 100% 97%` |
| `--color-orange-0` | `17 97% 12%` |
| `--color-orange-50` | `18 100% 14%` |
| `--color-orange-100` | `19 100% 21%` |
| `--color-orange-200` | `19 100% 27%` |
| `--color-orange-300` | `24 100% 35%` |
| `--color-orange-400` | `27 100% 42%` |
| `--color-orange-500` | `29 100% 50%` |
| `--color-orange-600` | `29 100% 60%` |
| `--color-orange-700` | `29 100% 69%` |
| `--color-orange-800` | `29 100% 79%` |
| `--color-orange-900` | `30 100% 88%` |
| `--color-orange-1000` | `30 100% 93%` |
| `--color-orange-1100` | `30 90% 96%` |
| `--color-plum-0` | `300 88% 9%` |
| `--color-plum-50` | `299 100% 10%` |
| `--color-plum-100` | `299 77% 18%` |
| `--color-plum-200` | `299 67% 26%` |
| `--color-plum-300` | `298 64% 35%` |
| `--color-plum-400` | `299 60% 43%` |
| `--color-plum-500` | `299 60% 51%` |
| `--color-plum-600` | `299 60% 60%` |
| `--color-plum-700` | `299 60% 69%` |
| `--color-plum-800` | `298 63% 79%` |
| `--color-plum-900` | `299 67% 88%` |
| `--color-plum-1000` | `300 72% 93%` |
| `--color-plum-1100` | `300 100% 97%` |
| `--color-purple-0` | `261 79% 11%` |
| `--color-purple-50` | `260 100% 15%` |
| `--color-purple-100` | `257 73% 25%` |
| `--color-purple-200` | `256 62% 35%` |
| `--color-purple-300` | `254 56% 46%` |
| `--color-purple-400` | `253 68% 56%` |
| `--color-purple-500` | `252 100% 67%` |
| `--color-purple-600` | `252 100% 73%` |
| `--color-purple-700` | `252 100% 80%` |
| `--color-purple-800` | `252 100% 86%` |
| `--color-purple-900` | `251 100% 92%` |
| `--color-purple-1000` | `250 100% 95%` |
| `--color-purple-1100` | `250 100% 98%` |
| `--color-red-0` | `356 97% 12%` |
| `--color-red-50` | `356 100% 13%` |
| `--color-red-100` | `355 87% 22%` |
| `--color-red-200` | `351 83% 30%` |
| `--color-red-300` | `353 79% 38%` |
| `--color-red-400` | `355 78% 46%` |
| `--color-red-500` | `356 91% 54%` |
| `--color-red-600` | `354 90% 63%` |
| `--color-red-700` | `355 90% 72%` |
| `--color-red-800` | `354 92% 80%` |
| `--color-red-900` | `354 93% 89%` |
| `--color-red-1000` | `351 94% 93%` |
| `--color-red-1100` | `356 100% 97%` |
| `--color-teal-0` | `185 89% 7%` |
| `--color-teal-50` | `185 100% 7%` |
| `--color-teal-100` | `184 100% 13%` |
| `--color-teal-200` | `183 100% 19%` |
| `--color-teal-300` | `182 100% 24%` |
| `--color-teal-400` | `182 100% 30%` |
| `--color-teal-500` | `182 100% 36%` |
| `--color-teal-600` | `182 100% 41%` |
| `--color-teal-700` | `183 70% 55%` |
| `--color-teal-800` | `182 71% 69%` |
| `--color-teal-900` | `183 75% 83%` |
| `--color-teal-1000` | `183 80% 90%` |
| `--color-teal-1100` | `183 100% 96%` |
| `--color-yellow-0` | `28 94% 12%` |
| `--color-yellow-50` | `29 100% 14%` |
| `--color-yellow-100` | `34 100% 22%` |
| `--color-yellow-200` | `36 100% 29%` |
| `--color-yellow-300` | `42 100% 36%` |
| `--color-yellow-400` | `47 100% 43%` |
| `--color-yellow-500` | `50 100% 50%` |
| `--color-yellow-600` | `50 100% 63%` |
| `--color-yellow-700` | `52 100% 71%` |
| `--color-yellow-800` | `54 100% 79%` |
| `--color-yellow-900` | `59 100% 88%` |
| `--color-yellow-1000` | `59 100% 92%` |
| `--color-yellow-1100` | `54 100% 96%` |
| `--color-mark` | `rgba(91, 112, 131, 0.4)` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — (2) Notifications / X
 * Source: https://x.com/notifications
 * Generated: 18/04/2026, 14:20:36
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-black: #000000; /* hsl(0, 0%, 0%) · text */
  --color-dark-gray: #0F141A; /* hsl(213, 27%, 8%) · text */
  --color-light-gray: #E4EAEC; /* hsl(195, 17%, 91%) · border */
  --color-dark-gray-2: #0F1419; /* hsl(210, 25%, 8%) · background */
  --color-blue: #536471; /* hsl(206, 15%, 38%) · text */
  --color-white: #FFFFFF; /* hsl(0, 0%, 100%) · background */
  --color-blue-2: #1D9BF0; /* hsl(204, 88%, 53%) · background */
  --color-blue-3: #829AAB; /* hsl(205, 20%, 59%) · text */
  --color-light-cyan: #CFD9DE; /* hsl(200, 19%, 84%) · text */
  --color-blue-4: rgba(101, 119, 134, 0.2); /* hsl(206, 15%, 46%) · shadow */
  --color-light-gray-2: #EFF3F4; /* hsl(192, 19%, 95%) · border */
  --color-blue-5: rgba(101, 119, 134, 0.15); /* hsl(204, 14%, 46%) · shadow */
  --color-blue-6: rgba(29, 155, 240, 0.1); /* hsl(203, 84%, 52%) · background */
  --color-blue-7: #9FB5C3; /* hsl(203, 23%, 69%) · border */
  --color-blue-8: #9EB4C2; /* hsl(203, 23%, 69%) · border */
  --color-red: #F4212E; /* hsl(356, 91%, 54%) · fill */
  --color-orange: #D18800; /* hsl(39, 100%, 41%) · fill */

  /* ── Core: Typography ── */
  --font-size-2xs: 11px;
  --font-size-xs: 13px;
  --font-size-sm: 14px;
  --font-size-base: 15px;
  --font-size-lg: 20px;
  --font-family-base: ui-sans-serif;
  --font-family-2: TwitterChirp;
  --font-family-3: -apple-system;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --line-height-tight: 12px;
  --line-height-snug: 16px;
  --line-height-normal: 20px;
  --line-height-relaxed: 22.5px;
  --line-height-loose: 24px;

  /* ── Layout: Spacing ── */
  --space-1: 2px;
  --space-2: 4px;
  --space-3: 8px;
  --space-4: 10px;
  --space-5: 12px;
  --space-6: 16px;
  --space-8: 20px;
  --space-10: 32px;
  --space-12: 40px;
  --space-16: 64px;
  --space-20: 266.5px;

  /* ── Borders ── */
  --border-width-hairline: 1px;
  --border-width-thin: 2px;
  --radius-sm: 0px 0px 16px 16px;
  --radius-md: 4px;
  --radius-lg: 15px;
  --radius-xl: 16px;
  --radius-2xl: 16px 16px 0px 0px;
  --radius-full: 9999px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgba(0, 0, 0, 0.03) 0px 0px 2px 0px inset;
  --shadow-md: rgba(101, 119, 134, 0.2) 0px 0px 15px 0px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px;
  --shadow-lg: rgba(101, 119, 134, 0.2) 0px 0px 8px 0px, rgba(101, 119, 134, 0.25) 0px 1px 3px 1px;

  /* ── Motion ── */
  --duration-instant: 0.15s;
  --duration-fast: 0.17s;
  --duration-normal: 0.2s;
  --duration-slow: 0.3s;
  --duration-slower: 0.35s;
  --easing-ease-out: ease-out;

  /* ── Layout: Z-Index ── */
  --z-1: -1;
  --z-2: 1;
  --z-3: 2;
  --z-4: 3;
  --z-5: 4;

  /* ── Breakpoints ── */
  --breakpoint-xs: 370px;
  --breakpoint-sm: 388px;
  --breakpoint-md: 407px;
  --breakpoint-lg: 600px;
  --breakpoint-xl: 640px;
  --breakpoint-2xl: 767px;
  --breakpoint-3xl: 768px;
  --breakpoint-bp-8: 987px;
  --breakpoint-bp-9: 988px;
  --breakpoint-bp-10: 1024px;
  --breakpoint-bp-11: 1077px;
  --breakpoint-bp-12: 1280px;
  --breakpoint-bp-13: 1536px;

  /* ── Opacity ── */
  --opacity-50: 0.5;
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://x.com/notifications",
    "title": "(2) Notifications / X",
    "generatedAt": "2026-04-18T08:50:36.072Z"
  },
  "core": {
    "color": {
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "text · ×658"
      },
      "dark-gray": {
        "$value": "#0F141A",
        "$type": "color",
        "$description": "text · ×403"
      },
      "light-gray": {
        "$value": "#E4EAEC",
        "$type": "color",
        "$description": "border · ×222"
      },
      "dark-gray-2": {
        "$value": "#0F1419",
        "$type": "color",
        "$description": "background · ×186"
      },
      "blue": {
        "$value": "#536471",
        "$type": "color",
        "$description": "text · ×87"
      },
      "white": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×61"
      },
      "blue-2": {
        "$value": "#1D9BF0",
        "$type": "color",
        "$description": "background · ×17"
      },
      "blue-3": {
        "$value": "#829AAB",
        "$type": "color",
        "$description": "text · ×16"
      },
      "light-cyan": {
        "$value": "#CFD9DE",
        "$type": "color",
        "$description": "text · ×15"
      },
      "blue-4": {
        "$value": "rgba(101, 119, 134, 0.2)",
        "$type": "color",
        "$description": "shadow · ×4"
      },
      "light-gray-2": {
        "$value": "#EFF3F4",
        "$type": "color",
        "$description": "border · ×4"
      },
      "blue-5": {
        "$value": "rgba(101, 119, 134, 0.15)",
        "$type": "color",
        "$description": "shadow · ×2"
      },
      "blue-6": {
        "$value": "rgba(29, 155, 240, 0.1)",
        "$type": "color",
        "$description": "background · ×2"
      },
      "blue-7": {
        "$value": "#9FB5C3",
        "$type": "color",
        "$description": "border · ×1"
      },
      "blue-8": {
        "$value": "#9EB4C2",
        "$type": "color",
        "$description": "border · ×1"
      },
      "red": {
        "$value": "#F4212E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange": {
        "$value": "#D18800",
        "$type": "color",
        "$description": "fill · ×1"
      }
    },
    "fontSize": {
      "font-size-2xs": {
        "$value": "11px",
        "$type": "dimension"
      },
      "font-size-xs": {
        "$value": "13px",
        "$type": "dimension"
      },
      "font-size-sm": {
        "$value": "14px",
        "$type": "dimension"
      },
      "font-size-base": {
        "$value": "15px",
        "$type": "dimension"
      },
      "font-size-lg": {
        "$value": "20px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "ui-sans-serif",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "TwitterChirp",
        "$type": "fontFamily"
      },
      "font-family-3": {
        "$value": "-apple-system",
        "$type": "fontFamily"
      }
    },
    "fontWeight": {
      "font-weight-regular": {
        "$value": "400",
        "$type": "fontWeight"
      },
      "font-weight-medium": {
        "$value": "500",
        "$type": "fontWeight"
      },
      "font-weight-bold": {
        "$value": "700",
        "$type": "fontWeight"
      },
      "font-weight-extrabold": {
        "$value": "800",
        "$type": "fontWeight"
      }
    },
    "lineHeight": {
      "line-height-tight": {
        "$value": "12px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "16px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "20px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "22.5px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "24px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {}
  },
  "layout": {
    "spacing": {
      "space-1": {
        "$value": "2px",
        "$type": "dimension"
      },
      "space-2": {
        "$value": "4px",
        "$type": "dimension"
      },
      "space-3": {
        "$value": "8px",
        "$type": "dimension"
      },
      "space-4": {
        "$value": "10px",
        "$type": "dimension"
      },
      "space-5": {
        "$value": "12px",
        "$type": "dimension"
      },
      "space-6": {
        "$value": "16px",
        "$type": "dimension"
      },
      "space-8": {
        "$value": "20px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "32px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "40px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "64px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "266.5px",
        "$type": "dimension"
      }
    },
    "zIndex": {
      "z-1": {
        "$value": "-1",
        "$type": "number"
      },
      "z-2": {
        "$value": "1",
        "$type": "number"
      },
      "z-3": {
        "$value": "2",
        "$type": "number"
      },
      "z-4": {
        "$value": "3",
        "$type": "number"
      },
      "z-5": {
        "$value": "4",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "370px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "388px",
        "$type": "dimension"
      },
      "breakpoint-md": {
        "$value": "407px",
        "$type": "dimension"
      },
      "breakpoint-lg": {
        "$value": "600px",
        "$type": "dimension"
      },
      "breakpoint-xl": {
        "$value": "640px",
        "$type": "dimension"
      },
      "breakpoint-2xl": {
        "$value": "767px",
        "$type": "dimension"
      },
      "breakpoint-3xl": {
        "$value": "768px",
        "$type": "dimension"
      },
      "breakpoint-bp-8": {
        "$value": "987px",
        "$type": "dimension"
      },
      "breakpoint-bp-9": {
        "$value": "988px",
        "$type": "dimension"
      },
      "breakpoint-bp-10": {
        "$value": "1024px",
        "$type": "dimension"
      },
      "breakpoint-bp-11": {
        "$value": "1077px",
        "$type": "dimension"
      },
      "breakpoint-bp-12": {
        "$value": "1280px",
        "$type": "dimension"
      },
      "breakpoint-bp-13": {
        "$value": "1536px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
        "$value": "0px 0px 16px 16px",
        "$type": "dimension"
      },
      "radius-md": {
        "$value": "4px",
        "$type": "dimension"
      },
      "radius-lg": {
        "$value": "15px",
        "$type": "dimension"
      },
      "radius-xl": {
        "$value": "16px",
        "$type": "dimension"
      },
      "radius-2xl": {
        "$value": "16px 16px 0px 0px",
        "$type": "dimension"
      },
      "radius-full": {
        "$value": "9999px",
        "$type": "dimension"
      }
    },
    "borderWidth": {
      "border-width-hairline": {
        "$value": "1px",
        "$type": "dimension"
      },
      "border-width-thin": {
        "$value": "2px",
        "$type": "dimension"
      }
    },
    "shadow": {
      "shadow-sm": {
        "$value": "rgba(0, 0, 0, 0.03) 0px 0px 2px 0px inset",
        "$type": "shadow"
      },
      "shadow-md": {
        "$value": "rgba(101, 119, 134, 0.2) 0px 0px 15px 0px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px",
        "$type": "shadow"
      },
      "shadow-lg": {
        "$value": "rgba(101, 119, 134, 0.2) 0px 0px 8px 0px, rgba(101, 119, 134, 0.25) 0px 1px 3px 1px",
        "$type": "shadow"
      }
    }
  },
  "motion": {
    "duration": {
      "duration-instant": {
        "$value": "0.15s",
        "$type": "duration"
      },
      "duration-fast": {
        "$value": "0.17s",
        "$type": "duration"
      },
      "duration-normal": {
        "$value": "0.2s",
        "$type": "duration"
      },
      "duration-slow": {
        "$value": "0.3s",
        "$type": "duration"
      },
      "duration-slower": {
        "$value": "0.35s",
        "$type": "duration"
      }
    },
    "easing": {
      "easing-ease-out": {
        "$value": "ease-out",
        "$type": "cubicBezier"
      }
    }
  },
  "opacity": {
    "opacity-50": {
      "$value": 0.5,
      "$type": "number"
    }
  }
}
```
