# Claude — Design System

**Source:** https://claude.ai/new  
**Generated:** 12/04/2026, 23:10:44  
**Extracted:** 16 colors · 18 type tokens · 15 spacing steps · 12 breakpoints · 7 motion tokens

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
| `--color-dark-gray-3` | `#373734` | hsl(60, 3%, 21%) | ×157 |
| `--color-white` | `#F8F8F6` | hsl(60, 12%, 97%) | ×9 |
| `--color-blue` | `#2977D6` | hsl(213, 68%, 50%) | ×2 |
| `--color-mid-gray-2` | `rgba(123, 121, 116, 0.15)` | hsl(60, 3%, 46%) | ×1 |
| `--color-light-gray-2` | `#EFEEEB` | hsl(45, 11%, 93%) | ×1 |
| `--color-mid-gray-3` | `rgba(123, 121, 116, 0.3)` | hsl(60, 3%, 47%) | ×1 |
| `--color-white-4` | `#FFFFFF` | hsl(0, 0%, 100%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-gray-2` | `#121212` | hsl(0, 0%, 7%) | ×201 |
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×117 |
| `--color-mid-gray` | `#7B7974` | hsl(43, 3%, 47%) | ×34 |
| `--color-red` | `#D97757` | hsl(15, 63%, 60%) | ×5 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-gray` | `#1F1F1E` | hsl(60, 2%, 12%) | ×336 |
| `--color-dark-gray-4` | `rgba(31, 31, 30, 0.15)` | hsl(60, 11%, 12%) | ×7 |

### Shadow Colors

_None detected._

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-white-2` | `#F4F4F1` | hsl(60, 12%, 95%) | ×2 |
| `--color-light-gray` | `rgba(244, 244, 241, 0.05)` | hsl(0, 0%, 92%) | ×1 |
| `--color-white-3` | `rgba(244, 244, 241, 0.3)` | hsl(60, 13%, 95%) | ×1 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `Anthropic Sans` |
| `--font-family-2` | `Anthropic Serif` |
| `--font-family-3` | `system-ui` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `12px` |  |
| `--font-size-xs` | `14px` |  |
| `--font-size-sm` | `16px` |  |
| `--font-size-base` | `40px` |  |

### Font Weights

| Token | Weight |
| --- | --- |
| `--font-weight-w330` | `330` |
| `--font-weight-regular` | `400` |
| `--font-weight-w430` | `430` |
| `--font-weight-medium` | `500` |
| `--font-weight-semibold` | `600` |

### Line Heights

| Token | Value |
| --- | --- |
| `--line-height-tight` | `14px` |
| `--line-height-snug` | `16px` |
| `--line-height-normal` | `19.6px` |
| `--line-height-relaxed` | `22.4px` |
| `--line-height-loose` | `24px` |
| `--line-height-lh-6` | `60px` |

### Letter Spacing

_None detected._

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `1px` | ×9 |
| `--space-2` | `2px` | ×3 |
| `--space-3` | `4px` | ×18 |
| `--space-4` | `5px` | ×1 |
| `--space-5` | `6px` | ×55 |
| `--space-6` | `8px` | ×47 |
| `--space-8` | `10px` | ×12 |
| `--space-10` | `12px` | ×49 |
| `--space-12` | `14px` | ×7 |
| `--space-16` | `16px` | ×35 |
| `--space-20` | `24px` | ×2 |
| `--space-24` | `28px` | ×3 |
| `--space-32` | `32px` | ×5 |
| `--space-40` | `172.2px` | ×1 |
| `--space-48` | `174.102px` | ×4 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `0.5px` | ×27 |
| `--border-width-thin` | `1px` | ×4 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `6px` | ×22 |
| `--radius-md` | `8px` | ×9 |
| `--radius-lg` | `20px` | ×1 |
| `--radius-xl` | `9999px` | ×7 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.035) 0px 4px 20px 0px, rgba(31, 31, 30, 0.15) 0px 0px 0px 0.5px` | ×1 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.035s` | ×3 |
| `--duration-fast` | `0.075s` | ×143 |
| `--duration-normal` | `0.15s` | ×149 |
| `--duration-slow` | `0.2s` | ×17 |
| `--duration-slower` | `0.3s` | ×111 |
| `--duration-duration-6` | `0.5s` | ×1 |

### Easing Functions

| Token | Value | Usage |
| --- | --- | --- |
| `--easing-ease-out` | `ease-out` | ×1 |

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `-10` |
| `--z-2` | `-1` |
| `--z-3` | `1` |
| `--z-4` | `10` |
| `--z-5` | `20` |
| `--z-6` | `30` |
| `--z-7` | `60` |
| `--z-8` | `2147483001` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `350px` |
| `--breakpoint-sm` | `500px` |
| `--breakpoint-md` | `640px` |
| `--breakpoint-lg` | `768px` |
| `--breakpoint-xl` | `840px` |
| `--breakpoint-2xl` | `1000px` |
| `--breakpoint-3xl` | `1024px` |
| `--breakpoint-bp-8` | `1200px` |
| `--breakpoint-bp-9` | `1280px` |
| `--breakpoint-bp-10` | `1400px` |
| `--breakpoint-bp-11` | `1536px` |
| `--breakpoint-bp-12` | `1562px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-47` | `0.47` | ×1 |
| `--opacity-75` | `0.75` | ×2 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-dark-gray-2` | `--color-dark-gray-3` | 1.57:1 | Fail |
| `--color-dark-gray-2` | `--color-white` | 17.62:1 | AAA |
| `--color-dark-gray-2` | `--color-blue` | 4.2:1 | AA Large |
| `--color-dark-gray-2` | `--color-mid-gray-2` | 4.27:1 | AA Large |
| `--color-dark-gray-2` | `--color-light-gray-2` | 16.15:1 | AAA |
| `--color-black` | `--color-dark-gray-3` | 1.76:1 | Fail |
| `--color-black` | `--color-white` | 19.75:1 | AAA |
| `--color-black` | `--color-blue` | 4.7:1 | AA |
| `--color-black` | `--color-mid-gray-2` | 4.79:1 | AA |
| `--color-black` | `--color-light-gray-2` | 18.1:1 | AAA |
| `--color-mid-gray` | `--color-dark-gray-3` | 2.75:1 | Fail |
| `--color-mid-gray` | `--color-white` | 4.09:1 | AA Large |
| `--color-mid-gray` | `--color-blue` | 1.03:1 | Fail |
| `--color-mid-gray` | `--color-mid-gray-2` | 1.01:1 | Fail |
| `--color-mid-gray` | `--color-light-gray-2` | 3.75:1 | AA Large |
| `--color-red` | `--color-dark-gray-3` | 3.83:1 | AA Large |
| `--color-red` | `--color-white` | 2.94:1 | Fail |
| `--color-red` | `--color-blue` | 1.43:1 | Fail |
| `--color-red` | `--color-mid-gray-2` | 1.4:1 | Fail |
| `--color-red` | `--color-light-gray-2` | 2.69:1 | Fail |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--font-anthropic-sans` | `"Anthropic Sans", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` |
| `--font-anthropic-serif` | `"Anthropic Serif", Georgia, "Arial Hebrew", "Noto Sans Hebrew", "Times New Roman", Times, "Hiragino Sans", "Yu Gothic", Meiryo, "Noto Sans CJK JP", "PingFang TC", "Microsoft JhengHei", "Noto Sans CJK TC", "PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", "Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans CJK KR", serif` |
| `--font-anthropic-mono` | `"Anthropic Mono", ui-monospace, monospace` |
| `--font-open-dyslexic` | `"OpenDyslexic", "Comic Sans MS", ui-serif, serif` |
| `--always-white` | `0 0% 100%` |
| `--always-black` | `0 0% 0%` |
| `--font-mono` | `var(--font-anthropic-mono)` |
| `--font-ui` | `var(--font-anthropic-sans)` |
| `--font-ui-serif` | `var(--font-anthropic-serif)` |
| `--font-claude-response` | `var(--font-anthropic-serif)` |
| `--font-user-message` | `var(--font-ui)` |
| `--font-sans-serif` | `var(--font-ui)` |
| `--font-serif` | `var(--font-ui-serif)` |
| `--font-system` | `system-ui, sans-serif` |
| `--font-dyslexia` | `var(--font-open-dyslexic), "Comic Sans MS", ui-serif, Georgia, serif` |
| `--dropdown-max-height` | `480px` |
| `--_brand-clay` | `14.8 63.1% 59.6%` |
| `--_brand-clay-emphasized` | `15.1 54.2% 51.2%` |
| `--_gray-0` | `0 0% 100%` |
| `--_gray-10` | `60 14% 99%` |
| `--_gray-20` | `60 14% 97%` |
| `--_gray-30` | `60 10% 96%` |
| `--_gray-40` | `60 11% 95%` |
| `--_gray-50` | `45 12% 93%` |
| `--_gray-60` | `48 12% 92%` |
| `--_gray-70` | `50 12% 91%` |
| `--_gray-80` | `50 11% 89%` |
| `--_gray-90` | `51 11% 88%` |
| `--_gray-100` | `53 12% 87%` |
| `--_gray-150` | `55 11% 80%` |
| `--_gray-200` | `55 9% 74%` |
| `--_gray-250` | `55 7% 68%` |
| `--_gray-300` | `55 6% 63%` |
| `--_gray-350` | `48 5% 57%` |
| `--_gray-400` | `45 3% 52%` |
| `--_gray-450` | `43 3% 47%` |
| `--_gray-500` | `40 3% 42%` |
| `--_gray-550` | `48 3% 36%` |
| `--_gray-600` | `45 3% 31%` |
| `--_gray-650` | `40 2% 26%` |
| `--_gray-700` | `60 3% 21%` |
| `--_gray-750` | `60 2% 17%` |
| `--_gray-800` | `60 2% 12%` |
| `--_gray-810` | `60 2% 12%` |
| `--_gray-820` | `60 2% 11%` |
| `--_gray-830` | `60 2% 10%` |
| `--_gray-840` | `60 2% 9%` |
| `--_gray-850` | `0 0% 8%` |
| `--_gray-860` | `0 0% 7%` |
| `--_gray-870` | `0 0% 7%` |
| `--_gray-880` | `0 0% 6%` |
| `--_gray-890` | `0 0% 5%` |
| `--_gray-900` | `0 0% 4%` |
| `--_red-0` | `0 0% 100%` |
| `--_red-10` | `0 100% 99%` |
| `--_red-20` | `0 78% 98%` |
| `--_red-30` | `0 85% 97%` |
| `--_red-40` | `0 78% 96%` |
| `--_red-50` | `0 67% 95%` |
| `--_red-60` | `0 66% 94%` |
| `--_red-70` | `0 70% 94%` |
| `--_red-80` | `0 73% 93%` |
| `--_red-90` | `0 76% 92%` |
| `--_red-100` | `0 78% 91%` |
| `--_red-150` | `0 77% 86%` |
| `--_red-200` | `0 77% 81%` |
| `--_red-250` | `0 75% 76%` |
| `--_red-300` | `0 74% 71%` |
| `--_red-350` | `0 72% 65%` |
| `--_red-400` | `0 73% 59%` |
| `--_red-450` | `0 61% 52%` |
| `--_red-500` | `0 55% 47%` |
| `--_red-550` | `0 57% 41%` |
| `--_red-600` | `0 58% 35%` |
| `--_red-650` | `0 60% 30%` |
| `--_red-700` | `0 60% 25%` |
| `--_red-750` | `0 64% 19%` |
| `--_red-800` | `0 62% 15%` |
| `--_red-810` | `0 62% 14%` |
| `--_red-820` | `0 63% 13%` |
| `--_red-830` | `0 63% 12%` |
| `--_red-840` | `0 64% 11%` |
| `--_red-850` | `0 60% 10%` |
| `--_red-860` | `2 56% 9%` |
| `--_red-870` | `3 49% 8%` |
| `--_red-880` | `5 35% 7%` |
| `--_red-890` | `10 21% 5%` |
| `--_red-900` | `0 0% 4%` |
| `--_orange-0` | `0 0% 100%` |
| `--_orange-10` | `15 67% 99%` |
| `--_orange-20` | `15 67% 98%` |
| `--_orange-30` | `20 67% 96%` |
| `--_orange-40` | `17 58% 95%` |
| `--_orange-50` | `17 60% 94%` |
| `--_orange-60` | `19 61% 93%` |
| `--_orange-70` | `18 62% 92%` |
| `--_orange-80` | `19 67% 91%` |
| `--_orange-90` | `17 70% 89%` |
| `--_orange-100` | `18 73% 88%` |
| `--_orange-150` | `18 73% 83%` |
| `--_orange-200` | `16 81% 77%` |
| `--_orange-250` | `16 80% 71%` |
| `--_orange-300` | `17 79% 64%` |
| `--_orange-350` | `17 82% 56%` |
| `--_orange-400` | `17 70% 50%` |
| `--_orange-450` | `17 69% 45%` |
| `--_orange-500` | `17 72% 40%` |
| `--_orange-550` | `17 72% 35%` |
| `--_orange-600` | `17 77% 30%` |
| `--_orange-650` | `17 77% 25%` |
| `--_orange-700` | `18 79% 20%` |
| `--_orange-750` | `17 81% 16%` |
| `--_orange-800` | `16 77% 12%` |
| `--_orange-810` | `16 76% 12%` |
| `--_orange-820` | `16 78% 11%` |
| `--_orange-830` | `15 76% 10%` |
| `--_orange-840` | `15 74% 9%` |
| `--_orange-850` | `14 67% 8%` |
| `--_orange-860` | `16 59% 8%` |
| `--_orange-870` | `18 49% 7%` |
| `--_orange-880` | `16 35% 6%` |
| `--_orange-890` | `12 19% 5%` |
| `--_orange-900` | `0 0% 4%` |
| `--_yellow-0` | `0 0% 100%` |
| `--_yellow-10` | `40 75% 98%` |
| `--_yellow-20` | `38 65% 97%` |
| `--_yellow-30` | `39 68% 95%` |
| `--_yellow-40` | `40 64% 94%` |
| `--_yellow-50` | `39 72% 92%` |
| `--_yellow-60` | `40 81% 89%` |
| `--_yellow-70` | `40 85% 87%` |
| `--_yellow-80` | `39 87% 85%` |
| `--_yellow-90` | `39 86% 83%` |
| `--_yellow-100` | `40 88% 81%` |
| `--_yellow-150` | `40 92% 69%` |
| `--_yellow-200` | `41 96% 54%` |
| `--_yellow-250` | `41 100% 46%` |
| `--_yellow-300` | `40 100% 43%` |
| `--_yellow-350` | `40 100% 39%` |
| `--_yellow-400` | `39 100% 36%` |
| `--_yellow-450` | `38 100% 33%` |
| `--_yellow-500` | `38 100% 29%` |
| `--_yellow-550` | `37 100% 26%` |
| `--_yellow-600` | `36 100% 23%` |
| `--_yellow-650` | `35 100% 19%` |
| `--_yellow-700` | `34 100% 16%` |
| `--_yellow-750` | `33 100% 13%` |
| `--_yellow-800` | `32 100% 10%` |
| `--_yellow-810` | `31 100% 9%` |
| `--_yellow-820` | `32 100% 8%` |
| `--_yellow-830` | `32 100% 8%` |
| `--_yellow-840` | `33 89% 7%` |
| `--_yellow-850` | `31 77% 7%` |
| `--_yellow-860` | `31 64% 6%` |
| `--_yellow-870` | `34 53% 6%` |
| `--_yellow-880` | `30 36% 5%` |
| `--_yellow-890` | `36 20% 5%` |
| `--_yellow-900` | `0 0% 4%` |
| `--_green-0` | `0 0% 100%` |
| `--_green-10` | `84 56% 98%` |
| `--_green-20` | `87 58% 96%` |
| `--_green-30` | `86 50% 95%` |
| `--_green-40` | `83 50% 93%` |
| `--_green-50` | `85 48% 91%` |
| `--_green-60` | `84 50% 89%` |
| `--_green-70` | `83 52% 87%` |
| `--_green-80` | `83 53% 85%` |
| `--_green-90` | `83 55% 83%` |
| `--_green-100` | `83 55% 81%` |
| `--_green-150` | `83 55% 71%` |
| `--_green-200` | `83 54% 61%` |
| `--_green-250` | `81 54% 51%` |
| `--_green-300` | `79 94% 37%` |
| `--_green-350` | `79 100% 33%` |
| `--_green-400` | `81 100% 30%` |
| `--_green-450` | `82 100% 27%` |
| `--_green-500` | `84 100% 24%` |
| `--_green-550` | `86 100% 21%` |
| `--_green-600` | `87 100% 18%` |
| `--_green-650` | `89 100% 16%` |
| `--_green-700` | `91 100% 13%` |
| `--_green-750` | `92 100% 10%` |
| `--_green-800` | `95 100% 8%` |
| `--_green-810` | `97 100% 7%` |
| `--_green-820` | `99 100% 7%` |
| `--_green-830` | `98 100% 6%` |
| `--_green-840` | `95 100% 6%` |
| `--_green-850` | `95 86% 5%` |
| `--_green-860` | `95 70% 5%` |
| `--_green-870` | `97 48% 5%` |
| `--_green-880` | `98 31% 5%` |
| `--_green-890` | `90 17% 5%` |
| `--_green-900` | `0 0% 4%` |
| `--_aqua-0` | `0 0% 100%` |
| `--_aqua-10` | `150 50% 98%` |
| `--_aqua-20` | `158 50% 97%` |
| `--_aqua-30` | `155 50% 95%` |
| `--_aqua-40` | `156 48% 94%` |
| `--_aqua-50` | `157 45% 92%` |
| `--_aqua-60` | `158 46% 91%` |
| `--_aqua-70` | `158 47% 89%` |
| `--_aqua-80` | `156 51% 87%` |
| `--_aqua-90` | `158 51% 85%` |
| `--_aqua-100` | `158 52% 84%` |
| `--_aqua-150` | `158 52% 75%` |
| `--_aqua-200` | `157 54% 66%` |
| `--_aqua-250` | `157 52% 57%` |
| `--_aqua-300` | `157 52% 49%` |
| `--_aqua-350` | `159 73% 40%` |
| `--_aqua-400` | `159 73% 36%` |
| `--_aqua-450` | `160 76% 32%` |
| `--_aqua-500` | `162 79% 28%` |
| `--_aqua-550` | `163 77% 24%` |
| `--_aqua-600` | `165 88% 20%` |
| `--_aqua-650` | `166 80% 17%` |
| `--_aqua-700` | `168 91% 14%` |
| `--_aqua-750` | `169 93% 11%` |
| `--_aqua-800` | `169 90% 8%` |
| `--_aqua-810` | `169 89% 7%` |
| `--_aqua-820` | `169 89% 7%` |
| `--_aqua-830` | `170 88% 6%` |
| `--_aqua-840` | `170 81% 6%` |
| `--_aqua-850` | `169 68% 6%` |
| `--_aqua-860` | `165 53% 6%` |
| `--_aqua-870` | `165 43% 5%` |
| `--_aqua-880` | `163 26% 5%` |
| `--_aqua-890` | `160 12% 5%` |
| `--_aqua-900` | `0 0% 4%` |
| `--_blue-0` | `0 0% 100%` |
| `--_blue-10` | `216 100% 99%` |
| `--_blue-20` | `213 82% 98%` |
| `--_blue-30` | `210 88% 97%` |
| `--_blue-40` | `208 74% 95%` |
| `--_blue-50` | `210 71% 95%` |
| `--_blue-60` | `210 71% 93%` |
| `--_blue-70` | `211 74% 92%` |
| `--_blue-80` | `211 78% 91%` |
| `--_blue-90` | `211 80% 90%` |
| `--_blue-100` | `213 85% 89%` |
| `--_blue-150` | `213 78% 84%` |
| `--_blue-200` | `213 80% 79%` |
| `--_blue-250` | `213 77% 73%` |
| `--_blue-300` | `213 77% 68%` |
| `--_blue-350` | `212 75% 62%` |
| `--_blue-400` | `213 77% 56%` |
| `--_blue-450` | `213 68% 50%` |
| `--_blue-500` | `213 68% 45%` |
| `--_blue-550` | `213 72% 39%` |
| `--_blue-600` | `214 72% 34%` |
| `--_blue-650` | `213 78% 28%` |
| `--_blue-700` | `214 78% 24%` |
| `--_blue-750` | `213 87% 18%` |
| `--_blue-800` | `212 91% 14%` |
| `--_blue-810` | `212 91% 13%` |
| `--_blue-820` | `212 93% 12%` |
| `--_blue-830` | `212 93% 11%` |
| `--_blue-840` | `212 92% 10%` |
| `--_blue-850` | `212 87% 9%` |
| `--_blue-860` | `213 77% 8%` |
| `--_blue-870` | `213 63% 7%` |
| `--_blue-880` | `212 45% 6%` |
| `--_blue-890` | `214 26% 5%` |
| `--_blue-900` | `0 0% 4%` |
| `--_violet-0` | `0 0% 100%` |
| `--_violet-10` | `255 100% 99%` |
| `--_violet-20` | `240 100% 99%` |
| `--_violet-30` | `245 100% 98%` |
| `--_violet-40` | `244 100% 97%` |
| `--_violet-50` | `247 100% 96%` |
| `--_violet-60` | `243 91% 96%` |
| `--_violet-70` | `245 92% 95%` |
| `--_violet-80` | `247 87% 94%` |
| `--_violet-90` | `246 88% 93%` |
| `--_violet-100` | `247 89% 93%` |
| `--_violet-150` | `246 86% 89%` |
| `--_violet-200` | `246 75% 84%` |
| `--_violet-250` | `247 74% 80%` |
| `--_violet-300` | `247 68% 75%` |
| `--_violet-350` | `247 69% 72%` |
| `--_violet-400` | `248 67% 67%` |
| `--_violet-450` | `248 67% 63%` |
| `--_violet-500` | `248 62% 58%` |
| `--_violet-550` | `248 48% 51%` |
| `--_violet-600` | `249 48% 44%` |
| `--_violet-650` | `248 49% 37%` |
| `--_violet-700` | `248 51% 31%` |
| `--_violet-750` | `248 52% 25%` |
| `--_violet-800` | `248 54% 19%` |
| `--_violet-810` | `248 53% 17%` |
| `--_violet-820` | `248 54% 16%` |
| `--_violet-830` | `247 53% 15%` |
| `--_violet-840` | `248 54% 14%` |
| `--_violet-850` | `247 54% 13%` |
| `--_violet-860` | `246 51% 11%` |
| `--_violet-870` | `243 43% 10%` |
| `--_violet-880` | `244 35% 8%` |
| `--_violet-890` | `240 23% 6%` |
| `--_violet-900` | `0 0% 4%` |
| `--_magenta-0` | `0 0% 100%` |
| `--_magenta-10` | `340 60% 99%` |
| `--_magenta-20` | `338 80% 98%` |
| `--_magenta-30` | `338 73% 97%` |
| `--_magenta-40` | `340 60% 96%` |
| `--_magenta-50` | `340 60% 95%` |
| `--_magenta-60` | `338 61% 94%` |
| `--_magenta-70` | `337 66% 93%` |
| `--_magenta-80` | `338 69% 92%` |
| `--_magenta-90` | `338 73% 91%` |
| `--_magenta-100` | `337 76% 90%` |
| `--_magenta-150` | `338 68% 85%` |
| `--_magenta-200` | `338 76% 81%` |
| `--_magenta-250` | `338 71% 75%` |
| `--_magenta-300` | `337 70% 70%` |
| `--_magenta-350` | `338 71% 64%` |
| `--_magenta-400` | `338 61% 58%` |
| `--_magenta-450` | `339 49% 52%` |
| `--_magenta-500` | `338 48% 46%` |
| `--_magenta-550` | `339 49% 40%` |
| `--_magenta-600` | `338 52% 35%` |
| `--_magenta-650` | `338 53% 29%` |
| `--_magenta-700` | `338 54% 24%` |
| `--_magenta-750` | `338 58% 19%` |
| `--_magenta-800` | `337 58% 14%` |
| `--_magenta-810` | `338 61% 13%` |
| `--_magenta-820` | `338 61% 12%` |
| `--_magenta-830` | `338 62% 11%` |
| `--_magenta-840` | `338 62% 10%` |
| `--_magenta-850` | `339 59% 10%` |
| `--_magenta-860` | `340 55% 9%` |
| `--_magenta-870` | `339 44% 8%` |
| `--_magenta-880` | `340 35% 7%` |
| `--_magenta-890` | `340 21% 5%` |
| `--_magenta-900` | `0 0% 4%` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — Claude
 * Source: https://claude.ai/new
 * Generated: 12/04/2026, 23:10:44
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-dark-gray: #1F1F1E; /* hsl(60, 2%, 12%) · border */
  --color-dark-gray-2: #121212; /* hsl(0, 0%, 7%) · text */
  --color-dark-gray-3: #373734; /* hsl(60, 3%, 21%) · background */
  --color-black: #000000; /* hsl(0, 0%, 0%) · text */
  --color-mid-gray: #7B7974; /* hsl(43, 3%, 47%) · text */
  --color-white: #F8F8F6; /* hsl(60, 12%, 97%) · background */
  --color-dark-gray-4: rgba(31, 31, 30, 0.15); /* hsl(60, 11%, 12%) · border */
  --color-red: #D97757; /* hsl(15, 63%, 60%) · text */
  --color-white-2: #F4F4F1; /* hsl(60, 12%, 95%) · gradient */
  --color-blue: #2977D6; /* hsl(213, 68%, 50%) · background */
  --color-light-gray: rgba(244, 244, 241, 0.05); /* hsl(0, 0%, 92%) · gradient */
  --color-white-3: rgba(244, 244, 241, 0.3); /* hsl(60, 13%, 95%) · gradient */
  --color-mid-gray-2: rgba(123, 121, 116, 0.15); /* hsl(60, 3%, 46%) · background */
  --color-light-gray-2: #EFEEEB; /* hsl(45, 11%, 93%) · background */
  --color-mid-gray-3: rgba(123, 121, 116, 0.3); /* hsl(60, 3%, 47%) · background */
  --color-white-4: #FFFFFF; /* hsl(0, 0%, 100%) · background */

  /* ── Core: Typography ── */
  --font-size-2xs: 12px;
  --font-size-xs: 14px;
  --font-size-sm: 16px;
  --font-size-base: 40px;
  --font-family-base: Anthropic Sans;
  --font-family-2: Anthropic Serif;
  --font-family-3: system-ui;
  --font-weight-w330: 330;
  --font-weight-regular: 400;
  --font-weight-w430: 430;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --line-height-tight: 14px;
  --line-height-snug: 16px;
  --line-height-normal: 19.6px;
  --line-height-relaxed: 22.4px;
  --line-height-loose: 24px;
  --line-height-lh-6: 60px;

  /* ── Layout: Spacing ── */
  --space-1: 1px;
  --space-2: 2px;
  --space-3: 4px;
  --space-4: 5px;
  --space-5: 6px;
  --space-6: 8px;
  --space-8: 10px;
  --space-10: 12px;
  --space-12: 14px;
  --space-16: 16px;
  --space-20: 24px;
  --space-24: 28px;
  --space-32: 32px;
  --space-40: 172.2px;
  --space-48: 174.102px;

  /* ── Borders ── */
  --border-width-hairline: 0.5px;
  --border-width-thin: 1px;
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 20px;
  --radius-xl: 9999px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.035) 0px 4px 20px 0px, rgba(31, 31, 30, 0.15) 0px 0px 0px 0.5px;

  /* ── Motion ── */
  --duration-instant: 0.035s;
  --duration-fast: 0.075s;
  --duration-normal: 0.15s;
  --duration-slow: 0.2s;
  --duration-slower: 0.3s;
  --duration-duration-6: 0.5s;
  --easing-ease-out: ease-out;

  /* ── Layout: Z-Index ── */
  --z-1: -10;
  --z-2: -1;
  --z-3: 1;
  --z-4: 10;
  --z-5: 20;
  --z-6: 30;
  --z-7: 60;
  --z-8: 2147483001;

  /* ── Breakpoints ── */
  --breakpoint-xs: 350px;
  --breakpoint-sm: 500px;
  --breakpoint-md: 640px;
  --breakpoint-lg: 768px;
  --breakpoint-xl: 840px;
  --breakpoint-2xl: 1000px;
  --breakpoint-3xl: 1024px;
  --breakpoint-bp-8: 1200px;
  --breakpoint-bp-9: 1280px;
  --breakpoint-bp-10: 1400px;
  --breakpoint-bp-11: 1536px;
  --breakpoint-bp-12: 1562px;

  /* ── Opacity ── */
  --opacity-47: 0.47;
  --opacity-75: 0.75;
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://claude.ai/new",
    "title": "Claude",
    "generatedAt": "2026-04-12T17:40:44.808Z"
  },
  "core": {
    "color": {
      "dark-gray": {
        "$value": "#1F1F1E",
        "$type": "color",
        "$description": "border · ×336"
      },
      "dark-gray-2": {
        "$value": "#121212",
        "$type": "color",
        "$description": "text · ×201"
      },
      "dark-gray-3": {
        "$value": "#373734",
        "$type": "color",
        "$description": "background · ×157"
      },
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "text · ×117"
      },
      "mid-gray": {
        "$value": "#7B7974",
        "$type": "color",
        "$description": "text · ×34"
      },
      "white": {
        "$value": "#F8F8F6",
        "$type": "color",
        "$description": "background · ×9"
      },
      "dark-gray-4": {
        "$value": "rgba(31, 31, 30, 0.15)",
        "$type": "color",
        "$description": "border · ×7"
      },
      "red": {
        "$value": "#D97757",
        "$type": "color",
        "$description": "text · ×5"
      },
      "white-2": {
        "$value": "#F4F4F1",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "blue": {
        "$value": "#2977D6",
        "$type": "color",
        "$description": "background · ×2"
      },
      "light-gray": {
        "$value": "rgba(244, 244, 241, 0.05)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "white-3": {
        "$value": "rgba(244, 244, 241, 0.3)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "mid-gray-2": {
        "$value": "rgba(123, 121, 116, 0.15)",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-gray-2": {
        "$value": "#EFEEEB",
        "$type": "color",
        "$description": "background · ×1"
      },
      "mid-gray-3": {
        "$value": "rgba(123, 121, 116, 0.3)",
        "$type": "color",
        "$description": "background · ×1"
      },
      "white-4": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×1"
      }
    },
    "fontSize": {
      "font-size-2xs": {
        "$value": "12px",
        "$type": "dimension"
      },
      "font-size-xs": {
        "$value": "14px",
        "$type": "dimension"
      },
      "font-size-sm": {
        "$value": "16px",
        "$type": "dimension"
      },
      "font-size-base": {
        "$value": "40px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "Anthropic Sans",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "Anthropic Serif",
        "$type": "fontFamily"
      },
      "font-family-3": {
        "$value": "system-ui",
        "$type": "fontFamily"
      }
    },
    "fontWeight": {
      "font-weight-w330": {
        "$value": "330",
        "$type": "fontWeight"
      },
      "font-weight-regular": {
        "$value": "400",
        "$type": "fontWeight"
      },
      "font-weight-w430": {
        "$value": "430",
        "$type": "fontWeight"
      },
      "font-weight-medium": {
        "$value": "500",
        "$type": "fontWeight"
      },
      "font-weight-semibold": {
        "$value": "600",
        "$type": "fontWeight"
      }
    },
    "lineHeight": {
      "line-height-tight": {
        "$value": "14px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "16px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "19.6px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "22.4px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "24px",
        "$type": "dimension"
      },
      "line-height-lh-6": {
        "$value": "60px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {}
  },
  "layout": {
    "spacing": {
      "space-1": {
        "$value": "1px",
        "$type": "dimension"
      },
      "space-2": {
        "$value": "2px",
        "$type": "dimension"
      },
      "space-3": {
        "$value": "4px",
        "$type": "dimension"
      },
      "space-4": {
        "$value": "5px",
        "$type": "dimension"
      },
      "space-5": {
        "$value": "6px",
        "$type": "dimension"
      },
      "space-6": {
        "$value": "8px",
        "$type": "dimension"
      },
      "space-8": {
        "$value": "10px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "12px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "14px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "16px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "24px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "28px",
        "$type": "dimension"
      },
      "space-32": {
        "$value": "32px",
        "$type": "dimension"
      },
      "space-40": {
        "$value": "172.2px",
        "$type": "dimension"
      },
      "space-48": {
        "$value": "174.102px",
        "$type": "dimension"
      }
    },
    "zIndex": {
      "z-1": {
        "$value": "-10",
        "$type": "number"
      },
      "z-2": {
        "$value": "-1",
        "$type": "number"
      },
      "z-3": {
        "$value": "1",
        "$type": "number"
      },
      "z-4": {
        "$value": "10",
        "$type": "number"
      },
      "z-5": {
        "$value": "20",
        "$type": "number"
      },
      "z-6": {
        "$value": "30",
        "$type": "number"
      },
      "z-7": {
        "$value": "60",
        "$type": "number"
      },
      "z-8": {
        "$value": "2147483001",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "350px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "500px",
        "$type": "dimension"
      },
      "breakpoint-md": {
        "$value": "640px",
        "$type": "dimension"
      },
      "breakpoint-lg": {
        "$value": "768px",
        "$type": "dimension"
      },
      "breakpoint-xl": {
        "$value": "840px",
        "$type": "dimension"
      },
      "breakpoint-2xl": {
        "$value": "1000px",
        "$type": "dimension"
      },
      "breakpoint-3xl": {
        "$value": "1024px",
        "$type": "dimension"
      },
      "breakpoint-bp-8": {
        "$value": "1200px",
        "$type": "dimension"
      },
      "breakpoint-bp-9": {
        "$value": "1280px",
        "$type": "dimension"
      },
      "breakpoint-bp-10": {
        "$value": "1400px",
        "$type": "dimension"
      },
      "breakpoint-bp-11": {
        "$value": "1536px",
        "$type": "dimension"
      },
      "breakpoint-bp-12": {
        "$value": "1562px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
        "$value": "6px",
        "$type": "dimension"
      },
      "radius-md": {
        "$value": "8px",
        "$type": "dimension"
      },
      "radius-lg": {
        "$value": "20px",
        "$type": "dimension"
      },
      "radius-xl": {
        "$value": "9999px",
        "$type": "dimension"
      }
    },
    "borderWidth": {
      "border-width-hairline": {
        "$value": "0.5px",
        "$type": "dimension"
      },
      "border-width-thin": {
        "$value": "1px",
        "$type": "dimension"
      }
    },
    "shadow": {
      "shadow-sm": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.035) 0px 4px 20px 0px, rgba(31, 31, 30, 0.15) 0px 0px 0px 0.5px",
        "$type": "shadow"
      }
    }
  },
  "motion": {
    "duration": {
      "duration-instant": {
        "$value": "0.035s",
        "$type": "duration"
      },
      "duration-fast": {
        "$value": "0.075s",
        "$type": "duration"
      },
      "duration-normal": {
        "$value": "0.15s",
        "$type": "duration"
      },
      "duration-slow": {
        "$value": "0.2s",
        "$type": "duration"
      },
      "duration-slower": {
        "$value": "0.3s",
        "$type": "duration"
      },
      "duration-duration-6": {
        "$value": "0.5s",
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
    "opacity-47": {
      "$value": 0.47,
      "$type": "number"
    },
    "opacity-75": {
      "$value": 0.75,
      "$type": "number"
    }
  }
}
```
