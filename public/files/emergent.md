# Design System — Design System

**Source:** https://app.emergent.sh
**Generated:** 15/04/2026, 23:35:35  
**Extracted:** 33 colors · 41 type tokens · 27 spacing steps · 9 breakpoints · 3 motion tokens

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
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×803 |
| `--color-dark-gray` | `#666666` | hsl(0, 0%, 40%) | ×64 |
| `--color-white` | `#FFFFFF` | hsl(0, 0%, 100%) | ×53 |
| `--color-dark-gray-4` | `#525252` | hsl(0, 0%, 32%) | ×7 |
| `--color-light-gray-2` | `#EBEBEB` | hsl(0, 0%, 92%) | ×5 |
| `--color-light-green` | `#E5FFED` | hsl(138, 100%, 95%) | ×1 |
| `--color-dark-gray-7` | `#252528` | hsl(240, 4%, 15%) | ×1 |
| `--color-orange` | `#E57845` | hsl(19, 75%, 58%) | ×1 |
| `--color-white-2` | `#F5F4F2` | hsl(40, 13%, 95%) | ×1 |
| `--color-light-gray-3` | `#F0F0EF` | hsl(60, 3%, 94%) | ×1 |
| `--color-green-3` | `rgba(0, 204, 11, 0.1)` | hsl(123, 100%, 40%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-gray-2` | `#0E0E0E` | hsl(0, 0%, 5%) | ×27 |
| `--color-dark-gray-3` | `#262629` | hsl(240, 4%, 15%) | ×14 |
| `--color-dark-blue` | `#4B5563` | hsl(215, 14%, 34%) | ×9 |
| `--color-dark-green` | `#00661F` | hsl(138, 100%, 20%) | ×8 |
| `--color-dark-gray-5` | `#0E0E0F` | hsl(240, 3%, 6%) | ×5 |
| `--color-dark-green-2` | `#00330F` | hsl(138, 100%, 10%) | ×4 |
| `--color-mid-gray-2` | `#808080` | hsl(0, 0%, 50%) | ×2 |
| `--color-black-2` | `#050505` | hsl(0, 0%, 2%) | ×2 |
| `--color-green-2` | `#338037` | hsl(123, 43%, 35%) | ×1 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray` | `#E5E3E1` | hsl(30, 7%, 89%) | ×640 |
| `--color-light-gray-4` | `#E3E3E2` | hsl(60, 2%, 89%) | ×1 |
| `--color-blue-3` | `#6B7280` | hsl(220, 9%, 46%) | ×1 |

### Shadow Colors

_None detected._

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-mid-gray` | `#8A8A8A` | hsl(0, 0%, 54%) | ×10 |
| `--color-dark-gray-6` | `#1A1A1A` | hsl(0, 0%, 10%) | ×2 |
| `--color-blue` | `#4E9BEE` | hsl(211, 82%, 62%) | ×1 |
| `--color-cyan` | `#57D5FE` | hsl(195, 99%, 67%) | ×1 |
| `--color-blue-2` | `#3489FE` | hsl(215, 99%, 60%) | ×1 |
| `--color-black-3` | `#0A0A0A` | hsl(0, 0%, 4%) | ×1 |
| `--color-red` | `#FF5F57` | hsl(3, 100%, 67%) | ×1 |
| `--color-orange-2` | `#FFBD2E` | hsl(41, 100%, 59%) | ×1 |
| `--color-green` | `#28C840` | hsl(129, 67%, 47%) | ×1 |
| `--color-dark-gray-8` | `#2A2A2A` | hsl(0, 0%, 16%) | ×1 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `ui-sans-serif` |
| `--font-family-2` | `-apple-system` |
| `--font-family-3` | `Brockmann` |
| `--font-family-4` | `Inter` |
| `--font-family-5` | `brockmann` |
| `--font-family-6` | `Ndot` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `12px` |  |
| `--font-size-xs` | `14px` |  |
| `--font-size-sm` | `15px` |  |
| `--font-size-base` | `16px` |  |
| `--font-size-lg` | `18px` |  |
| `--font-size-xl` | `22px` |  |
| `--font-size-2xl` | `24px` |  |
| `--font-size-3xl` | `32px` |  |
| `--font-size-4xl` | `36px` |  |
| `--font-size-5xl` | `72px` |  |

### Font Weights

| Token | Weight |
| --- | --- |
| `--font-weight-regular` | `400` |
| `--font-weight-medium` | `500` |
| `--font-weight-semibold` | `600` |
| `--font-weight-bold` | `700` |

### Line Heights

| Token | Value |
| --- | --- |
| `--line-height-tight` | `20px` |
| `--line-height-snug` | `21px` |
| `--line-height-normal` | `24px` |
| `--line-height-relaxed` | `32px` |
| `--line-height-loose` | `33px` |
| `--line-height-lh-6` | `36px` |
| `--line-height-lh-7` | `40px` |
| `--line-height-lh-8` | `72px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `-3px` |
| `--letter-spacing-normal` | `-1.8px` |
| `--letter-spacing-wide` | `-1.2px` |
| `--letter-spacing-wider` | `-1px` |
| `--letter-spacing-widest` | `-1%` |
| `--letter-spacing-ls-6` | `-0.9px` |
| `--letter-spacing-ls-7` | `-0.72px` |
| `--letter-spacing-ls-8` | `-0.44px` |
| `--letter-spacing-ls-9` | `-0.32px` |
| `--letter-spacing-ls-10` | `-0.15px` |
| `--letter-spacing-ls-11` | `0.4px` |
| `--letter-spacing-ls-12` | `1.2px` |
| `--letter-spacing-ls-13` | `1.4px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `2px` | ×18 |
| `--space-2` | `4px` | ×18 |
| `--space-3` | `6px` | ×4 |
| `--space-4` | `8px` | ×93 |
| `--space-5` | `10px` | ×2 |
| `--space-6` | `12px` | ×124 |
| `--space-8` | `16px` | ×41 |
| `--space-10` | `20px` | ×13 |
| `--space-12` | `24px` | ×49 |
| `--space-16` | `28px` | ×2 |
| `--space-20` | `32px` | ×7 |
| `--space-24` | `150px` | ×6 |
| `--space-32` | `40px` | ×11 |
| `--space-40` | `47.75px` | ×2 |
| `--space-48` | `48px` | ×4 |
| `--space-64` | `50px` | ×2 |
| `--space-80` | `64px` | ×2 |
| `--space-96` | `68.4297px` | ×2 |
| `--space-128` | `80px` | ×6 |
| `--space-160` | `85.7812px` | ×1 |
| `--space-192` | `102.5px` | ×2 |
| `--space-256` | `120px` | ×1 |
| `--space-23` | `146.07px` | ×1 |
| `--space-25` | `200px` | ×1 |
| `--space-26` | `218.031px` | ×2 |
| `--space-27` | `279px` | ×2 |
| `--space-28` | `428.25px` | ×2 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `1px` | ×16 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `0px 0px 6px 6px` | ×1 |
| `--radius-md` | `4px` | ×16 |
| `--radius-lg` | `5px` | ×1 |
| `--radius-xl` | `6px` | ×1 |
| `--radius-2xl` | `8px` | ×1 |
| `--radius-full` | `12px` | ×3 |
| `--radius-r7` | `16px` | ×1 |
| `--radius-r8` | `20px` | ×6 |
| `--radius-r9` | `28px` | ×1 |
| `--radius-r10` | `50px` | ×1 |
| `--radius-r11` | `9999px` | ×26 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` | ×4 |
| `--shadow-md` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px` | ×2 |
| `--shadow-lg` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px` | ×1 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.15s` | ×68 |
| `--duration-fast` | `0.2s` | ×125 |
| `--duration-normal` | `0.3s` | ×35 |

### Easing Functions

_No easing functions detected._

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `-10` |
| `--z-2` | `10` |
| `--z-3` | `100` |
| `--z-4` | `1000` |
| `--z-5` | `1002` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `379px` |
| `--breakpoint-sm` | `600px` |
| `--breakpoint-md` | `640px` |
| `--breakpoint-lg` | `767px` |
| `--breakpoint-xl` | `768px` |
| `--breakpoint-2xl` | `1024px` |
| `--breakpoint-3xl` | `1280px` |
| `--breakpoint-bp-8` | `1536px` |
| `--breakpoint-bp-9` | `1920px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-50` | `0.5` | ×6 |
| `--opacity-60` | `0.6` | ×2 |
| `--opacity-80` | `0.8` | ×3 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-dark-gray-2` | `--color-black` | 1.09:1 | Fail |
| `--color-dark-gray-2` | `--color-dark-gray` | 3.36:1 | AA Large |
| `--color-dark-gray-2` | `--color-white` | 19.3:1 | AAA |
| `--color-dark-gray-2` | `--color-dark-gray-4` | 2.47:1 | Fail |
| `--color-dark-gray-2` | `--color-light-gray-2` | 16.19:1 | AAA |
| `--color-dark-gray-3` | `--color-black` | 1.39:1 | Fail |
| `--color-dark-gray-3` | `--color-dark-gray` | 2.63:1 | Fail |
| `--color-dark-gray-3` | `--color-white` | 15.09:1 | AAA |
| `--color-dark-gray-3` | `--color-dark-gray-4` | 1.93:1 | Fail |
| `--color-dark-gray-3` | `--color-light-gray-2` | 12.66:1 | AAA |
| `--color-dark-blue` | `--color-black` | 2.78:1 | Fail |
| `--color-dark-blue` | `--color-dark-gray` | 1.32:1 | Fail |
| `--color-dark-blue` | `--color-white` | 7.56:1 | AAA |
| `--color-dark-blue` | `--color-dark-gray-4` | 1.03:1 | Fail |
| `--color-dark-blue` | `--color-light-gray-2` | 6.34:1 | AA |
| `--color-dark-green` | `--color-black` | 2.92:1 | Fail |
| `--color-dark-green` | `--color-dark-gray` | 1.25:1 | Fail |
| `--color-dark-green` | `--color-white` | 7.19:1 | AAA |
| `--color-dark-green` | `--color-dark-gray-4` | 1.09:1 | Fail |
| `--color-dark-green` | `--color-light-gray-2` | 6.03:1 | AA |
| `--color-dark-gray-5` | `--color-black` | 1.09:1 | Fail |
| `--color-dark-gray-5` | `--color-dark-gray` | 3.36:1 | AA Large |
| `--color-dark-gray-5` | `--color-white` | 19.29:1 | AAA |
| `--color-dark-gray-5` | `--color-dark-gray-4` | 2.47:1 | Fail |
| `--color-dark-gray-5` | `--color-light-gray-2` | 16.18:1 | AAA |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--background` | `0 0% 100%` |
| `--foreground` | `0 0% 0%` |
| `--card` | `0 0% 100%` |
| `--card-foreground` | `0 0% 0%` |
| `--popover` | `0 0% 100%` |
| `--popover-foreground` | `0 0% 0%` |
| `--primary` | `0 0% 100%` |
| `--primary-foreground` | `0 0% 5.5%` |
| `--secondary` | `36 9% 96%` |
| `--secondary-foreground` | `0 0% 0%` |
| `--muted` | `0 0% 92%` |
| `--muted-hover` | `0 0% 85%` |
| `--muted-foreground` | `0 0% 40%` |
| `--accent-cyan` | `180 100% 75%` |
| `--accent-green` | `132 100% 75%` |
| `--accent-blue` | `220 100% 54%` |
| `--destructive` | `0 84% 60%` |
| `--destructive-foreground` | `0 0% 100%` |
| `--border` | `30 7% 89%` |
| `--input` | `240 5% 19%` |
| `--ring` | `240 5% 19%` |
| `--google-button` | `240 4% 15%` |
| `--google-button-foreground` | `0 0% 100%` |
| `--auth-gradient` | `linear-gradient(90deg, #4E9BEE 0%, #57D5FE 58.5%, #3489FE 100%)` |
| `--faq-active-gradient` | `0 0% 0%` |
| `--video-gradient` | `linear-gradient(90deg, #000000 0%, #4E9BEE 100%)` |
| `--email-login-gradient` | `none` |
| `--radius` | `1.25rem` |
| `--auth-muted` | `0 0% 40%` |
| `--auth-muted-soft` | `0 0% 40%/0.6` |
| `--auth-placeholder` | `0 0% 40%` |
| `--auth-placeholder-focus` | `0 0% 0%` |
| `--auth-surface` | `0 0% 92%` |
| `--auth-surface-list` | `0 0% 100%` |
| `--auth-item-selected` | `0 0% 90%` |
| `--auth-item-hover` | `0 0% 90%/0.5` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — 
 * Source: https://app.emergent.sh/landing/?utm_source=google&utm_medium=search&utm_campaign=23761608622&utm_adgroup=194967236386&utm_term=lovable&matchtype=e&device=c&network=g&gad_source=1&gad_campaignid=23761608622&gbraid=0AAAABA86LmDFYTMmv3x1brpt5IsTpTsua&gclid=CjwKCAjw7vzOBhBxEiwAc7WNr5DrWbWJzukBJtAKx5Aqf2XR5Ql57o1W7aK1iPPZ86PA19HLlZOfmhoCLnIQAvD_BwE
 * Generated: 15/04/2026, 23:35:35
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-black: #000000; /* hsl(0, 0%, 0%) · background */
  --color-light-gray: #E5E3E1; /* hsl(30, 7%, 89%) · border */
  --color-dark-gray: #666666; /* hsl(0, 0%, 40%) · background */
  --color-white: #FFFFFF; /* hsl(0, 0%, 100%) · background */
  --color-dark-gray-2: #0E0E0E; /* hsl(0, 0%, 5%) · text */
  --color-dark-gray-3: #262629; /* hsl(240, 4%, 15%) · text */
  --color-mid-gray: #8A8A8A; /* hsl(0, 0%, 54%) · fill */
  --color-dark-blue: #4B5563; /* hsl(215, 14%, 34%) · text */
  --color-dark-green: #00661F; /* hsl(138, 100%, 20%) · text */
  --color-dark-gray-4: #525252; /* hsl(0, 0%, 32%) · background */
  --color-light-gray-2: #EBEBEB; /* hsl(0, 0%, 92%) · background */
  --color-dark-gray-5: #0E0E0F; /* hsl(240, 3%, 6%) · text */
  --color-dark-green-2: #00330F; /* hsl(138, 100%, 10%) · text */
  --color-mid-gray-2: #808080; /* hsl(0, 0%, 50%) · text */
  --color-black-2: #050505; /* hsl(0, 0%, 2%) · text */
  --color-dark-gray-6: #1A1A1A; /* hsl(0, 0%, 10%) · fill */
  --color-light-green: #E5FFED; /* hsl(138, 100%, 95%) · background */
  --color-blue: #4E9BEE; /* hsl(211, 82%, 62%) · gradient */
  --color-cyan: #57D5FE; /* hsl(195, 99%, 67%) · gradient */
  --color-blue-2: #3489FE; /* hsl(215, 99%, 60%) · gradient */
  --color-dark-gray-7: #252528; /* hsl(240, 4%, 15%) · background */
  --color-orange: #E57845; /* hsl(19, 75%, 58%) · background */
  --color-black-3: #0A0A0A; /* hsl(0, 0%, 4%) · fill */
  --color-red: #FF5F57; /* hsl(3, 100%, 67%) · fill */
  --color-orange-2: #FFBD2E; /* hsl(41, 100%, 59%) · fill */
  --color-green: #28C840; /* hsl(129, 67%, 47%) · fill */
  --color-dark-gray-8: #2A2A2A; /* hsl(0, 0%, 16%) · fill */
  --color-white-2: #F5F4F2; /* hsl(40, 13%, 95%) · background */
  --color-light-gray-3: #F0F0EF; /* hsl(60, 3%, 94%) · background */
  --color-light-gray-4: #E3E3E2; /* hsl(60, 2%, 89%) · border */
  --color-green-2: #338037; /* hsl(123, 43%, 35%) · text */
  --color-green-3: rgba(0, 204, 11, 0.1); /* hsl(123, 100%, 40%) · background */
  --color-blue-3: #6B7280; /* hsl(220, 9%, 46%) · border */

  /* ── Core: Typography ── */
  --font-size-2xs: 12px;
  --font-size-xs: 14px;
  --font-size-sm: 15px;
  --font-size-base: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 22px;
  --font-size-2xl: 24px;
  --font-size-3xl: 32px;
  --font-size-4xl: 36px;
  --font-size-5xl: 72px;
  --font-family-base: ui-sans-serif;
  --font-family-2: -apple-system;
  --font-family-3: Brockmann;
  --font-family-4: Inter;
  --font-family-5: brockmann;
  --font-family-6: Ndot;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-tight: 20px;
  --line-height-snug: 21px;
  --line-height-normal: 24px;
  --line-height-relaxed: 32px;
  --line-height-loose: 33px;
  --line-height-lh-6: 36px;
  --line-height-lh-7: 40px;
  --line-height-lh-8: 72px;
  --letter-spacing-tight: -3px;
  --letter-spacing-normal: -1.8px;
  --letter-spacing-wide: -1.2px;
  --letter-spacing-wider: -1px;
  --letter-spacing-widest: -1%;
  --letter-spacing-ls-6: -0.9px;
  --letter-spacing-ls-7: -0.72px;
  --letter-spacing-ls-8: -0.44px;
  --letter-spacing-ls-9: -0.32px;
  --letter-spacing-ls-10: -0.15px;
  --letter-spacing-ls-11: 0.4px;
  --letter-spacing-ls-12: 1.2px;
  --letter-spacing-ls-13: 1.4px;

  /* ── Layout: Spacing ── */
  --space-1: 2px;
  --space-2: 4px;
  --space-3: 6px;
  --space-4: 8px;
  --space-5: 10px;
  --space-6: 12px;
  --space-8: 16px;
  --space-10: 20px;
  --space-12: 24px;
  --space-16: 28px;
  --space-20: 32px;
  --space-24: 150px;
  --space-32: 40px;
  --space-40: 47.75px;
  --space-48: 48px;
  --space-64: 50px;
  --space-80: 64px;
  --space-96: 68.4297px;
  --space-128: 80px;
  --space-160: 85.7812px;
  --space-192: 102.5px;
  --space-256: 120px;
  --space-23: 146.07px;
  --space-25: 200px;
  --space-26: 218.031px;
  --space-27: 279px;
  --space-28: 428.25px;

  /* ── Borders ── */
  --border-width-hairline: 1px;
  --radius-sm: 0px 0px 6px 6px;
  --radius-md: 4px;
  --radius-lg: 5px;
  --radius-xl: 6px;
  --radius-2xl: 8px;
  --radius-full: 12px;
  --radius-r7: 16px;
  --radius-r8: 20px;
  --radius-r9: 28px;
  --radius-r10: 50px;
  --radius-r11: 9999px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  --shadow-md: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
  --shadow-lg: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;

  /* ── Motion ── */
  --duration-instant: 0.15s;
  --duration-fast: 0.2s;
  --duration-normal: 0.3s;

  /* ── Layout: Z-Index ── */
  --z-1: -10;
  --z-2: 10;
  --z-3: 100;
  --z-4: 1000;
  --z-5: 1002;

  /* ── Breakpoints ── */
  --breakpoint-xs: 379px;
  --breakpoint-sm: 600px;
  --breakpoint-md: 640px;
  --breakpoint-lg: 767px;
  --breakpoint-xl: 768px;
  --breakpoint-2xl: 1024px;
  --breakpoint-3xl: 1280px;
  --breakpoint-bp-8: 1536px;
  --breakpoint-bp-9: 1920px;

  /* ── Opacity ── */
  --opacity-50: 0.5;
  --opacity-60: 0.6;
  --opacity-80: 0.8;
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://app.emergent.sh/landing/?utm_source=google&utm_medium=search&utm_campaign=23761608622&utm_adgroup=194967236386&utm_term=lovable&matchtype=e&device=c&network=g&gad_source=1&gad_campaignid=23761608622&gbraid=0AAAABA86LmDFYTMmv3x1brpt5IsTpTsua&gclid=CjwKCAjw7vzOBhBxEiwAc7WNr5DrWbWJzukBJtAKx5Aqf2XR5Ql57o1W7aK1iPPZ86PA19HLlZOfmhoCLnIQAvD_BwE",
    "title": "",
    "generatedAt": "2026-04-15T18:05:35.671Z"
  },
  "core": {
    "color": {
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "background · ×803"
      },
      "light-gray": {
        "$value": "#E5E3E1",
        "$type": "color",
        "$description": "border · ×640"
      },
      "dark-gray": {
        "$value": "#666666",
        "$type": "color",
        "$description": "background · ×64"
      },
      "white": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×53"
      },
      "dark-gray-2": {
        "$value": "#0E0E0E",
        "$type": "color",
        "$description": "text · ×27"
      },
      "dark-gray-3": {
        "$value": "#262629",
        "$type": "color",
        "$description": "text · ×14"
      },
      "mid-gray": {
        "$value": "#8A8A8A",
        "$type": "color",
        "$description": "fill · ×10"
      },
      "dark-blue": {
        "$value": "#4B5563",
        "$type": "color",
        "$description": "text · ×9"
      },
      "dark-green": {
        "$value": "#00661F",
        "$type": "color",
        "$description": "text · ×8"
      },
      "dark-gray-4": {
        "$value": "#525252",
        "$type": "color",
        "$description": "background · ×7"
      },
      "light-gray-2": {
        "$value": "#EBEBEB",
        "$type": "color",
        "$description": "background · ×5"
      },
      "dark-gray-5": {
        "$value": "#0E0E0F",
        "$type": "color",
        "$description": "text · ×5"
      },
      "dark-green-2": {
        "$value": "#00330F",
        "$type": "color",
        "$description": "text · ×4"
      },
      "mid-gray-2": {
        "$value": "#808080",
        "$type": "color",
        "$description": "text · ×2"
      },
      "black-2": {
        "$value": "#050505",
        "$type": "color",
        "$description": "text · ×2"
      },
      "dark-gray-6": {
        "$value": "#1A1A1A",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "light-green": {
        "$value": "#E5FFED",
        "$type": "color",
        "$description": "background · ×1"
      },
      "blue": {
        "$value": "#4E9BEE",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "cyan": {
        "$value": "#57D5FE",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "blue-2": {
        "$value": "#3489FE",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-gray-7": {
        "$value": "#252528",
        "$type": "color",
        "$description": "background · ×1"
      },
      "orange": {
        "$value": "#E57845",
        "$type": "color",
        "$description": "background · ×1"
      },
      "black-3": {
        "$value": "#0A0A0A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red": {
        "$value": "#FF5F57",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-2": {
        "$value": "#FFBD2E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green": {
        "$value": "#28C840",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-gray-8": {
        "$value": "#2A2A2A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "white-2": {
        "$value": "#F5F4F2",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-gray-3": {
        "$value": "#F0F0EF",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-gray-4": {
        "$value": "#E3E3E2",
        "$type": "color",
        "$description": "border · ×1"
      },
      "green-2": {
        "$value": "#338037",
        "$type": "color",
        "$description": "text · ×1"
      },
      "green-3": {
        "$value": "rgba(0, 204, 11, 0.1)",
        "$type": "color",
        "$description": "background · ×1"
      },
      "blue-3": {
        "$value": "#6B7280",
        "$type": "color",
        "$description": "border · ×1"
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
        "$value": "15px",
        "$type": "dimension"
      },
      "font-size-base": {
        "$value": "16px",
        "$type": "dimension"
      },
      "font-size-lg": {
        "$value": "18px",
        "$type": "dimension"
      },
      "font-size-xl": {
        "$value": "22px",
        "$type": "dimension"
      },
      "font-size-2xl": {
        "$value": "24px",
        "$type": "dimension"
      },
      "font-size-3xl": {
        "$value": "32px",
        "$type": "dimension"
      },
      "font-size-4xl": {
        "$value": "36px",
        "$type": "dimension"
      },
      "font-size-5xl": {
        "$value": "72px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "ui-sans-serif",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "-apple-system",
        "$type": "fontFamily"
      },
      "font-family-3": {
        "$value": "Brockmann",
        "$type": "fontFamily"
      },
      "font-family-4": {
        "$value": "Inter",
        "$type": "fontFamily"
      },
      "font-family-5": {
        "$value": "brockmann",
        "$type": "fontFamily"
      },
      "font-family-6": {
        "$value": "Ndot",
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
      "font-weight-semibold": {
        "$value": "600",
        "$type": "fontWeight"
      },
      "font-weight-bold": {
        "$value": "700",
        "$type": "fontWeight"
      }
    },
    "lineHeight": {
      "line-height-tight": {
        "$value": "20px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "21px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "24px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "32px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "33px",
        "$type": "dimension"
      },
      "line-height-lh-6": {
        "$value": "36px",
        "$type": "dimension"
      },
      "line-height-lh-7": {
        "$value": "40px",
        "$type": "dimension"
      },
      "line-height-lh-8": {
        "$value": "72px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "-3px",
        "$type": "dimension"
      },
      "letter-spacing-normal": {
        "$value": "-1.8px",
        "$type": "dimension"
      },
      "letter-spacing-wide": {
        "$value": "-1.2px",
        "$type": "dimension"
      },
      "letter-spacing-wider": {
        "$value": "-1px",
        "$type": "dimension"
      },
      "letter-spacing-widest": {
        "$value": "-1%",
        "$type": "dimension"
      },
      "letter-spacing-ls-6": {
        "$value": "-0.9px",
        "$type": "dimension"
      },
      "letter-spacing-ls-7": {
        "$value": "-0.72px",
        "$type": "dimension"
      },
      "letter-spacing-ls-8": {
        "$value": "-0.44px",
        "$type": "dimension"
      },
      "letter-spacing-ls-9": {
        "$value": "-0.32px",
        "$type": "dimension"
      },
      "letter-spacing-ls-10": {
        "$value": "-0.15px",
        "$type": "dimension"
      },
      "letter-spacing-ls-11": {
        "$value": "0.4px",
        "$type": "dimension"
      },
      "letter-spacing-ls-12": {
        "$value": "1.2px",
        "$type": "dimension"
      },
      "letter-spacing-ls-13": {
        "$value": "1.4px",
        "$type": "dimension"
      }
    }
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
        "$value": "6px",
        "$type": "dimension"
      },
      "space-4": {
        "$value": "8px",
        "$type": "dimension"
      },
      "space-5": {
        "$value": "10px",
        "$type": "dimension"
      },
      "space-6": {
        "$value": "12px",
        "$type": "dimension"
      },
      "space-8": {
        "$value": "16px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "20px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "24px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "28px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "32px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "150px",
        "$type": "dimension"
      },
      "space-32": {
        "$value": "40px",
        "$type": "dimension"
      },
      "space-40": {
        "$value": "47.75px",
        "$type": "dimension"
      },
      "space-48": {
        "$value": "48px",
        "$type": "dimension"
      },
      "space-64": {
        "$value": "50px",
        "$type": "dimension"
      },
      "space-80": {
        "$value": "64px",
        "$type": "dimension"
      },
      "space-96": {
        "$value": "68.4297px",
        "$type": "dimension"
      },
      "space-128": {
        "$value": "80px",
        "$type": "dimension"
      },
      "space-160": {
        "$value": "85.7812px",
        "$type": "dimension"
      },
      "space-192": {
        "$value": "102.5px",
        "$type": "dimension"
      },
      "space-256": {
        "$value": "120px",
        "$type": "dimension"
      },
      "space-23": {
        "$value": "146.07px",
        "$type": "dimension"
      },
      "space-25": {
        "$value": "200px",
        "$type": "dimension"
      },
      "space-26": {
        "$value": "218.031px",
        "$type": "dimension"
      },
      "space-27": {
        "$value": "279px",
        "$type": "dimension"
      },
      "space-28": {
        "$value": "428.25px",
        "$type": "dimension"
      }
    },
    "zIndex": {
      "z-1": {
        "$value": "-10",
        "$type": "number"
      },
      "z-2": {
        "$value": "10",
        "$type": "number"
      },
      "z-3": {
        "$value": "100",
        "$type": "number"
      },
      "z-4": {
        "$value": "1000",
        "$type": "number"
      },
      "z-5": {
        "$value": "1002",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "379px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "600px",
        "$type": "dimension"
      },
      "breakpoint-md": {
        "$value": "640px",
        "$type": "dimension"
      },
      "breakpoint-lg": {
        "$value": "767px",
        "$type": "dimension"
      },
      "breakpoint-xl": {
        "$value": "768px",
        "$type": "dimension"
      },
      "breakpoint-2xl": {
        "$value": "1024px",
        "$type": "dimension"
      },
      "breakpoint-3xl": {
        "$value": "1280px",
        "$type": "dimension"
      },
      "breakpoint-bp-8": {
        "$value": "1536px",
        "$type": "dimension"
      },
      "breakpoint-bp-9": {
        "$value": "1920px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
        "$value": "0px 0px 6px 6px",
        "$type": "dimension"
      },
      "radius-md": {
        "$value": "4px",
        "$type": "dimension"
      },
      "radius-lg": {
        "$value": "5px",
        "$type": "dimension"
      },
      "radius-xl": {
        "$value": "6px",
        "$type": "dimension"
      },
      "radius-2xl": {
        "$value": "8px",
        "$type": "dimension"
      },
      "radius-full": {
        "$value": "12px",
        "$type": "dimension"
      },
      "radius-r7": {
        "$value": "16px",
        "$type": "dimension"
      },
      "radius-r8": {
        "$value": "20px",
        "$type": "dimension"
      },
      "radius-r9": {
        "$value": "28px",
        "$type": "dimension"
      },
      "radius-r10": {
        "$value": "50px",
        "$type": "dimension"
      },
      "radius-r11": {
        "$value": "9999px",
        "$type": "dimension"
      }
    },
    "borderWidth": {
      "border-width-hairline": {
        "$value": "1px",
        "$type": "dimension"
      }
    },
    "shadow": {
      "shadow-sm": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
        "$type": "shadow"
      },
      "shadow-md": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
        "$type": "shadow"
      },
      "shadow-lg": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
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
        "$value": "0.2s",
        "$type": "duration"
      },
      "duration-normal": {
        "$value": "0.3s",
        "$type": "duration"
      }
    },
    "easing": {}
  },
  "opacity": {
    "opacity-50": {
      "$value": 0.5,
      "$type": "number"
    },
    "opacity-60": {
      "$value": 0.6,
      "$type": "number"
    },
    "opacity-80": {
      "$value": 0.8,
      "$type": "number"
    }
  }
}
```
