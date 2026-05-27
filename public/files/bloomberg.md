# Bloomberg Asia — Design System

**Source:** https://www.bloomberg.com/  
**Generated:** 18/04/2026, 13:56:07  
**Extracted:** 24 colors · 42 type tokens · 33 spacing steps · 20 breakpoints · 11 motion tokens

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
11. [Design Tokens (CSS Variables)](#design-tokens-css-variables)
12. [Machine-Readable Tokens — DTCG JSON](#machine-readable-tokens--dtcg-json)

---

## Color Palette

### Background Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×4298 |
| `--color-white` | `#FFFFFF` | hsl(0, 0%, 100%) | ×873 |
| `--color-light-gray-3` | `#CCCCCC` | hsl(0, 0%, 80%) | ×119 |
| `--color-dark-gray` | `#1C1C1C` | hsl(0, 0%, 11%) | ×103 |
| `--color-dark-gray-2` | `#3C3C3C` | hsl(0, 0%, 24%) | ×75 |
| `--color-light-gray-4` | `#EFEFEF` | hsl(0, 0%, 94%) | ×51 |
| `--color-dark-gray-3` | `#545454` | hsl(0, 0%, 33%) | ×31 |
| `--color-mid-gray` | `#767676` | hsl(0, 0%, 46%) | ×30 |
| `--color-mid-gray-2` | `#999999` | hsl(0, 0%, 60%) | ×18 |
| `--color-dark-blue` | `#2B333F` | hsl(216, 19%, 21%) | ×12 |
| `--color-blue` | `#0064FA` | hsl(216, 100%, 49%) | ×9 |
| `--color-dark-gray-4` | `#141414` | hsl(0, 0%, 8%) | ×6 |
| `--color-white-2` | `#F8F8F8` | hsl(0, 0%, 97%) | ×4 |
| `--color-blue-2` | `rgba(115, 133, 159, 0.5)` | hsl(216, 18%, 54%) | ×2 |
| `--color-white-3` | `#F2F7FF` | hsl(217, 100%, 97%) | ×1 |
| `--color-dark-gray-5` | `rgba(28, 28, 28, 0.8)` | hsl(0, 0%, 11%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray-2` | `#B3B3B3` | hsl(0, 0%, 70%) | ×303 |
| `--color-light-gray-5` | `#F3F4EF` | hsl(72, 19%, 95%) | ×23 |
| `--color-red` | `#E51503` | hsl(5, 97%, 45%) | ×13 |
| `--color-yellow` | `#FFCD1E` | hsl(47, 100%, 56%) | ×4 |
| `--color-orange` | `#FFA028` | hsl(33, 100%, 58%) | ×3 |
| `--color-red-2` | `#F34F4E` | hsl(0, 87%, 63%) | ×1 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray` | `#E5E7EB` | hsl(220, 13%, 91%) | ×3926 |

### Shadow Colors

_None detected._

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-cyan` | `#04ACCC` | hsl(190, 96%, 41%) | ×1 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `BWHaasGroteskWeb` |
| `--font-family-2` | `AvenirNextPForBBG` |
| `--font-family-3` | `PublicoText` |
| `--font-family-4` | `VideoJS` |
| `--font-family-5` | `Arial` |
| `--font-family-6` | `BWHaasHead` |
| `--font-family-7` | `PublicoHead` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `10px` |  |
| `--font-size-xs` | `12px` |  |
| `--font-size-sm` | `14px` |  |
| `--font-size-base` | `15px` |  |
| `--font-size-lg` | `16px` |  |
| `--font-size-xl` | `18px` |  |
| `--font-size-2xl` | `20px` |  |
| `--font-size-3xl` | `24px` |  |
| `--font-size-4xl` | `28px` |  |

### Font Weights

| Token | Weight |
| --- | --- |
| `--font-weight-light` | `300` |
| `--font-weight-regular` | `400` |
| `--font-weight-medium` | `500` |
| `--font-weight-semibold` | `600` |
| `--font-weight-bold` | `700` |

### Line Heights

| Token | Value |
| --- | --- |
| `--line-height-tight` | `12px` |
| `--line-height-snug` | `14px` |
| `--line-height-normal` | `14.7px` |
| `--line-height-relaxed` | `16px` |
| `--line-height-loose` | `16.8px` |
| `--line-height-lh-6` | `18px` |
| `--line-height-lh-7` | `18.9px` |
| `--line-height-lh-8` | `19.6px` |
| `--line-height-lh-9` | `21px` |
| `--line-height-lh-10` | `21.6px` |
| `--line-height-lh-11` | `22.5px` |
| `--line-height-lh-12` | `24px` |
| `--line-height-lh-13` | `25.2px` |
| `--line-height-lh-14` | `29.4px` |
| `--line-height-lh-15` | `30px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `0.14px` |
| `--letter-spacing-normal` | `0.1408px` |
| `--letter-spacing-wide` | `0.2px` |
| `--letter-spacing-wider` | `0.4192px` |
| `--letter-spacing-widest` | `0.48px` |
| `--letter-spacing-ls-6` | `1px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `1px` | ×7 |
| `--space-2` | `2px` | ×161 |
| `--space-3` | `3px` | ×27 |
| `--space-4` | `3.70312px` | ×4 |
| `--space-5` | `4px` | ×88 |
| `--space-6` | `5px` | ×48 |
| `--space-8` | `5.00781px` | ×4 |
| `--space-10` | `5.27344px` | ×4 |
| `--space-12` | `6px` | ×114 |
| `--space-16` | `7px` | ×13 |
| `--space-20` | `8px` | ×232 |
| `--space-24` | `24px` | ×12 |
| `--space-32` | `52px` | ×2 |
| `--space-40` | `11px` | ×78 |
| `--space-48` | `12px` | ×353 |
| `--space-64` | `15px` | ×38 |
| `--space-80` | `16px` | ×143 |
| `--space-96` | `17px` | ×2 |
| `--space-128` | `18px` | ×161 |
| `--space-160` | `19px` | ×86 |
| `--space-192` | `20px` | ×6 |
| `--space-256` | `22px` | ×4 |
| `--space-23` | `23px` | ×3 |
| `--space-25` | `27px` | ×1 |
| `--space-26` | `30px` | ×14 |
| `--space-27` | `32px` | ×70 |
| `--space-28` | `34px` | ×8 |
| `--space-29` | `35px` | ×72 |
| `--space-30` | `40px` | ×6 |
| `--space-31` | `44px` | ×14 |
| `--space-33` | `76.5px` | ×2 |
| `--space-34` | `198px` | ×1 |
| `--space-35` | `370.5px` | ×1 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `1px` | ×739 |
| `--border-width-thin` | `1.5px` | ×4 |
| `--border-width-base` | `8px` | ×16 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `0px 8px 8px 0px` | ×9 |
| `--radius-md` | `2px` | ×2 |
| `--radius-lg` | `4px` | ×54 |
| `--radius-xl` | `4.2px` | ×12 |
| `--radius-2xl` | `5px` | ×6 |
| `--radius-full` | `6px` | ×12 |
| `--radius-r7` | `7px` | ×1 |
| `--radius-r8` | `8px` | ×21 |
| `--radius-r9` | `12px` | ×82 |
| `--radius-r10` | `14px` | ×2 |
| `--radius-r11` | `28px` | ×8 |
| `--radius-r12` | `50%` | ×39 |
| `--radius-r13` | `120px` | ×8 |
| `--radius-r14` | `9999px` | ×14 |
| `--radius-r15` | `13986px` | ×3 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px` | ×2 |
| `--shadow-md` | `rgb(0, 0, 0) 0px 0px 8px 0px` | ×1 |
| `--shadow-lg` | `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` | ×1 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.1s` | ×78 |
| `--duration-fast` | `0.15s` | ×10 |
| `--duration-normal` | `0.2s` | ×4 |
| `--duration-slow` | `0.25s` | ×12 |
| `--duration-slower` | `0.3s` | ×57 |
| `--duration-duration-6` | `0.35s` | ×14 |
| `--duration-duration-7` | `0.5s` | ×1 |
| `--duration-duration-8` | `0.6s` | ×2 |
| `--duration-duration-9` | `1s` | ×26 |

### Easing Functions

| Token | Value | Usage |
| --- | --- | --- |
| `--easing-ease-out` | `ease-out` | ×88 |
| `--easing-ease-in-out` | `ease-in-out` | ×23 |

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `1` |
| `--z-2` | `2` |
| `--z-3` | `3` |
| `--z-4` | `10` |
| `--z-5` | `30` |
| `--z-6` | `40` |
| `--z-7` | `50` |
| `--z-8` | `100` |
| `--z-9` | `14678` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `470px` |
| `--breakpoint-sm` | `480px` |
| `--breakpoint-md` | `600px` |
| `--breakpoint-lg` | `620px` |
| `--breakpoint-xl` | `675px` |
| `--breakpoint-2xl` | `759px` |
| `--breakpoint-3xl` | `760px` |
| `--breakpoint-bp-8` | `767px` |
| `--breakpoint-bp-9` | `768px` |
| `--breakpoint-bp-10` | `900px` |
| `--breakpoint-bp-11` | `911px` |
| `--breakpoint-bp-12` | `1019px` |
| `--breakpoint-bp-13` | `1020px` |
| `--breakpoint-bp-14` | `1122px` |
| `--breakpoint-bp-15` | `1123px` |
| `--breakpoint-bp-16` | `1279px` |
| `--breakpoint-bp-17` | `1280px` |
| `--breakpoint-bp-18` | `1300px` |
| `--breakpoint-bp-19` | `1334px` |
| `--breakpoint-bp-20` | `1335px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-30` | `0.3` | ×36 |
| `--opacity-40` | `0.4` | ×2 |
| `--opacity-73` | `0.73` | ×1 |
| `--opacity-83` | `0.83` | ×1 |
| `--opacity-85` | `0.85` | ×4 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-light-gray-2` | `--color-black` | 10.02:1 | AAA |
| `--color-light-gray-2` | `--color-white` | 2.1:1 | Fail |
| `--color-light-gray-2` | `--color-light-gray-3` | 1.31:1 | Fail |
| `--color-light-gray-2` | `--color-dark-gray` | 8.13:1 | AAA |
| `--color-light-gray-2` | `--color-dark-gray-2` | 5.26:1 | AA |
| `--color-light-gray-5` | `--color-black` | 19:1 | AAA |
| `--color-light-gray-5` | `--color-white` | 1.11:1 | Fail |
| `--color-light-gray-5` | `--color-light-gray-3` | 1.45:1 | Fail |
| `--color-light-gray-5` | `--color-dark-gray` | 15.42:1 | AAA |
| `--color-light-gray-5` | `--color-dark-gray-2` | 9.98:1 | AAA |
| `--color-red` | `--color-black` | 4.44:1 | AA Large |
| `--color-red` | `--color-white` | 4.73:1 | AA |
| `--color-red` | `--color-light-gray-3` | 2.95:1 | Fail |
| `--color-red` | `--color-dark-gray` | 3.6:1 | AA Large |
| `--color-red` | `--color-dark-gray-2` | 2.33:1 | Fail |
| `--color-yellow` | `--color-black` | 14:1 | AAA |
| `--color-yellow` | `--color-white` | 1.5:1 | Fail |
| `--color-yellow` | `--color-light-gray-3` | 1.07:1 | Fail |
| `--color-yellow` | `--color-dark-gray` | 11.36:1 | AAA |
| `--color-yellow` | `--color-dark-gray-2` | 7.36:1 | AAA |
| `--color-orange` | `--color-black` | 10.31:1 | AAA |
| `--color-orange` | `--color-white` | 2.04:1 | Fail |
| `--color-orange` | `--color-light-gray-3` | 1.27:1 | Fail |
| `--color-orange` | `--color-dark-gray` | 8.37:1 | AAA |
| `--color-orange` | `--color-dark-gray-2` | 5.42:1 | AA |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — Bloomberg Asia
 * Source: https://www.bloomberg.com/asia
 * Generated: 18/04/2026, 13:56:07
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-black: #000000; /* hsl(0, 0%, 0%) · background */
  --color-light-gray: #E5E7EB; /* hsl(220, 13%, 91%) · border */
  --color-white: #FFFFFF; /* hsl(0, 0%, 100%) · background */
  --color-light-gray-2: #B3B3B3; /* hsl(0, 0%, 70%) · text */
  --color-light-gray-3: #CCCCCC; /* hsl(0, 0%, 80%) · background */
  --color-dark-gray: #1C1C1C; /* hsl(0, 0%, 11%) · background */
  --color-dark-gray-2: #3C3C3C; /* hsl(0, 0%, 24%) · background */
  --color-light-gray-4: #EFEFEF; /* hsl(0, 0%, 94%) · background */
  --color-dark-gray-3: #545454; /* hsl(0, 0%, 33%) · background */
  --color-mid-gray: #767676; /* hsl(0, 0%, 46%) · background */
  --color-light-gray-5: #F3F4EF; /* hsl(72, 19%, 95%) · text */
  --color-mid-gray-2: #999999; /* hsl(0, 0%, 60%) · background */
  --color-red: #E51503; /* hsl(5, 97%, 45%) · text */
  --color-dark-blue: #2B333F; /* hsl(216, 19%, 21%) · background */
  --color-blue: #0064FA; /* hsl(216, 100%, 49%) · background */
  --color-dark-gray-4: #141414; /* hsl(0, 0%, 8%) · background */
  --color-white-2: #F8F8F8; /* hsl(0, 0%, 97%) · background */
  --color-yellow: #FFCD1E; /* hsl(47, 100%, 56%) · text */
  --color-orange: #FFA028; /* hsl(33, 100%, 58%) · text */
  --color-blue-2: rgba(115, 133, 159, 0.5); /* hsl(216, 18%, 54%) · background */
  --color-red-2: #F34F4E; /* hsl(0, 87%, 63%) · text */
  --color-white-3: #F2F7FF; /* hsl(217, 100%, 97%) · background */
  --color-dark-gray-5: rgba(28, 28, 28, 0.8); /* hsl(0, 0%, 11%) · background */
  --color-cyan: #04ACCC; /* hsl(190, 96%, 41%) · fill */

  /* ── Core: Typography ── */
  --font-size-2xs: 10px;
  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-base: 15px;
  --font-size-lg: 16px;
  --font-size-xl: 18px;
  --font-size-2xl: 20px;
  --font-size-3xl: 24px;
  --font-size-4xl: 28px;
  --font-family-base: BWHaasGroteskWeb;
  --font-family-2: AvenirNextPForBBG;
  --font-family-3: PublicoText;
  --font-family-4: VideoJS;
  --font-family-5: Arial;
  --font-family-6: BWHaasHead;
  --font-family-7: PublicoHead;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-tight: 12px;
  --line-height-snug: 14px;
  --line-height-normal: 14.7px;
  --line-height-relaxed: 16px;
  --line-height-loose: 16.8px;
  --line-height-lh-6: 18px;
  --line-height-lh-7: 18.9px;
  --line-height-lh-8: 19.6px;
  --line-height-lh-9: 21px;
  --line-height-lh-10: 21.6px;
  --line-height-lh-11: 22.5px;
  --line-height-lh-12: 24px;
  --line-height-lh-13: 25.2px;
  --line-height-lh-14: 29.4px;
  --line-height-lh-15: 30px;
  --letter-spacing-tight: 0.14px;
  --letter-spacing-normal: 0.1408px;
  --letter-spacing-wide: 0.2px;
  --letter-spacing-wider: 0.4192px;
  --letter-spacing-widest: 0.48px;
  --letter-spacing-ls-6: 1px;

  /* ── Layout: Spacing ── */
  --space-1: 1px;
  --space-2: 2px;
  --space-3: 3px;
  --space-4: 3.70312px;
  --space-5: 4px;
  --space-6: 5px;
  --space-8: 5.00781px;
  --space-10: 5.27344px;
  --space-12: 6px;
  --space-16: 7px;
  --space-20: 8px;
  --space-24: 24px;
  --space-32: 52px;
  --space-40: 11px;
  --space-48: 12px;
  --space-64: 15px;
  --space-80: 16px;
  --space-96: 17px;
  --space-128: 18px;
  --space-160: 19px;
  --space-192: 20px;
  --space-256: 22px;
  --space-23: 23px;
  --space-25: 27px;
  --space-26: 30px;
  --space-27: 32px;
  --space-28: 34px;
  --space-29: 35px;
  --space-30: 40px;
  --space-31: 44px;
  --space-33: 76.5px;
  --space-34: 198px;
  --space-35: 370.5px;

  /* ── Borders ── */
  --border-width-hairline: 1px;
  --border-width-thin: 1.5px;
  --border-width-base: 8px;
  --radius-sm: 0px 8px 8px 0px;
  --radius-md: 2px;
  --radius-lg: 4px;
  --radius-xl: 4.2px;
  --radius-2xl: 5px;
  --radius-full: 6px;
  --radius-r7: 7px;
  --radius-r8: 8px;
  --radius-r9: 12px;
  --radius-r10: 14px;
  --radius-r11: 28px;
  --radius-r12: 50%;
  --radius-r13: 120px;
  --radius-r14: 9999px;
  --radius-r15: 13986px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
  --shadow-md: rgb(0, 0, 0) 0px 0px 8px 0px;
  --shadow-lg: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

  /* ── Motion ── */
  --duration-instant: 0.1s;
  --duration-fast: 0.15s;
  --duration-normal: 0.2s;
  --duration-slow: 0.25s;
  --duration-slower: 0.3s;
  --duration-duration-6: 0.35s;
  --duration-duration-7: 0.5s;
  --duration-duration-8: 0.6s;
  --duration-duration-9: 1s;
  --easing-ease-out: ease-out;
  --easing-ease-in-out: ease-in-out;

  /* ── Layout: Z-Index ── */
  --z-1: 1;
  --z-2: 2;
  --z-3: 3;
  --z-4: 10;
  --z-5: 30;
  --z-6: 40;
  --z-7: 50;
  --z-8: 100;
  --z-9: 14678;

  /* ── Breakpoints ── */
  --breakpoint-xs: 470px;
  --breakpoint-sm: 480px;
  --breakpoint-md: 600px;
  --breakpoint-lg: 620px;
  --breakpoint-xl: 675px;
  --breakpoint-2xl: 759px;
  --breakpoint-3xl: 760px;
  --breakpoint-bp-8: 767px;
  --breakpoint-bp-9: 768px;
  --breakpoint-bp-10: 900px;
  --breakpoint-bp-11: 911px;
  --breakpoint-bp-12: 1019px;
  --breakpoint-bp-13: 1020px;
  --breakpoint-bp-14: 1122px;
  --breakpoint-bp-15: 1123px;
  --breakpoint-bp-16: 1279px;
  --breakpoint-bp-17: 1280px;
  --breakpoint-bp-18: 1300px;
  --breakpoint-bp-19: 1334px;
  --breakpoint-bp-20: 1335px;

  /* ── Opacity ── */
  --opacity-30: 0.3;
  --opacity-40: 0.4;
  --opacity-73: 0.73;
  --opacity-83: 0.83;
  --opacity-85: 0.85;
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://www.bloomberg.com/asia",
    "title": "Bloomberg Asia",
    "generatedAt": "2026-04-18T08:26:07.802Z"
  },
  "core": {
    "color": {
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "background · ×4298"
      },
      "light-gray": {
        "$value": "#E5E7EB",
        "$type": "color",
        "$description": "border · ×3926"
      },
      "white": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×873"
      },
      "light-gray-2": {
        "$value": "#B3B3B3",
        "$type": "color",
        "$description": "text · ×303"
      },
      "light-gray-3": {
        "$value": "#CCCCCC",
        "$type": "color",
        "$description": "background · ×119"
      },
      "dark-gray": {
        "$value": "#1C1C1C",
        "$type": "color",
        "$description": "background · ×103"
      },
      "dark-gray-2": {
        "$value": "#3C3C3C",
        "$type": "color",
        "$description": "background · ×75"
      },
      "light-gray-4": {
        "$value": "#EFEFEF",
        "$type": "color",
        "$description": "background · ×51"
      },
      "dark-gray-3": {
        "$value": "#545454",
        "$type": "color",
        "$description": "background · ×31"
      },
      "mid-gray": {
        "$value": "#767676",
        "$type": "color",
        "$description": "background · ×30"
      },
      "light-gray-5": {
        "$value": "#F3F4EF",
        "$type": "color",
        "$description": "text · ×23"
      },
      "mid-gray-2": {
        "$value": "#999999",
        "$type": "color",
        "$description": "background · ×18"
      },
      "red": {
        "$value": "#E51503",
        "$type": "color",
        "$description": "text · ×13"
      },
      "dark-blue": {
        "$value": "#2B333F",
        "$type": "color",
        "$description": "background · ×12"
      },
      "blue": {
        "$value": "#0064FA",
        "$type": "color",
        "$description": "background · ×9"
      },
      "dark-gray-4": {
        "$value": "#141414",
        "$type": "color",
        "$description": "background · ×6"
      },
      "white-2": {
        "$value": "#F8F8F8",
        "$type": "color",
        "$description": "background · ×4"
      },
      "yellow": {
        "$value": "#FFCD1E",
        "$type": "color",
        "$description": "text · ×4"
      },
      "orange": {
        "$value": "#FFA028",
        "$type": "color",
        "$description": "text · ×3"
      },
      "blue-2": {
        "$value": "rgba(115, 133, 159, 0.5)",
        "$type": "color",
        "$description": "background · ×2"
      },
      "red-2": {
        "$value": "#F34F4E",
        "$type": "color",
        "$description": "text · ×1"
      },
      "white-3": {
        "$value": "#F2F7FF",
        "$type": "color",
        "$description": "background · ×1"
      },
      "dark-gray-5": {
        "$value": "rgba(28, 28, 28, 0.8)",
        "$type": "color",
        "$description": "background · ×1"
      },
      "cyan": {
        "$value": "#04ACCC",
        "$type": "color",
        "$description": "fill · ×1"
      }
    },
    "fontSize": {
      "font-size-2xs": {
        "$value": "10px",
        "$type": "dimension"
      },
      "font-size-xs": {
        "$value": "12px",
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
        "$value": "16px",
        "$type": "dimension"
      },
      "font-size-xl": {
        "$value": "18px",
        "$type": "dimension"
      },
      "font-size-2xl": {
        "$value": "20px",
        "$type": "dimension"
      },
      "font-size-3xl": {
        "$value": "24px",
        "$type": "dimension"
      },
      "font-size-4xl": {
        "$value": "28px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "BWHaasGroteskWeb",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "AvenirNextPForBBG",
        "$type": "fontFamily"
      },
      "font-family-3": {
        "$value": "PublicoText",
        "$type": "fontFamily"
      },
      "font-family-4": {
        "$value": "VideoJS",
        "$type": "fontFamily"
      },
      "font-family-5": {
        "$value": "Arial",
        "$type": "fontFamily"
      },
      "font-family-6": {
        "$value": "BWHaasHead",
        "$type": "fontFamily"
      },
      "font-family-7": {
        "$value": "PublicoHead",
        "$type": "fontFamily"
      }
    },
    "fontWeight": {
      "font-weight-light": {
        "$value": "300",
        "$type": "fontWeight"
      },
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
        "$value": "12px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "14px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "14.7px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "16px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "16.8px",
        "$type": "dimension"
      },
      "line-height-lh-6": {
        "$value": "18px",
        "$type": "dimension"
      },
      "line-height-lh-7": {
        "$value": "18.9px",
        "$type": "dimension"
      },
      "line-height-lh-8": {
        "$value": "19.6px",
        "$type": "dimension"
      },
      "line-height-lh-9": {
        "$value": "21px",
        "$type": "dimension"
      },
      "line-height-lh-10": {
        "$value": "21.6px",
        "$type": "dimension"
      },
      "line-height-lh-11": {
        "$value": "22.5px",
        "$type": "dimension"
      },
      "line-height-lh-12": {
        "$value": "24px",
        "$type": "dimension"
      },
      "line-height-lh-13": {
        "$value": "25.2px",
        "$type": "dimension"
      },
      "line-height-lh-14": {
        "$value": "29.4px",
        "$type": "dimension"
      },
      "line-height-lh-15": {
        "$value": "30px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "0.14px",
        "$type": "dimension"
      },
      "letter-spacing-normal": {
        "$value": "0.1408px",
        "$type": "dimension"
      },
      "letter-spacing-wide": {
        "$value": "0.2px",
        "$type": "dimension"
      },
      "letter-spacing-wider": {
        "$value": "0.4192px",
        "$type": "dimension"
      },
      "letter-spacing-widest": {
        "$value": "0.48px",
        "$type": "dimension"
      },
      "letter-spacing-ls-6": {
        "$value": "1px",
        "$type": "dimension"
      }
    }
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
        "$value": "3px",
        "$type": "dimension"
      },
      "space-4": {
        "$value": "3.70312px",
        "$type": "dimension"
      },
      "space-5": {
        "$value": "4px",
        "$type": "dimension"
      },
      "space-6": {
        "$value": "5px",
        "$type": "dimension"
      },
      "space-8": {
        "$value": "5.00781px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "5.27344px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "6px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "7px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "8px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "24px",
        "$type": "dimension"
      },
      "space-32": {
        "$value": "52px",
        "$type": "dimension"
      },
      "space-40": {
        "$value": "11px",
        "$type": "dimension"
      },
      "space-48": {
        "$value": "12px",
        "$type": "dimension"
      },
      "space-64": {
        "$value": "15px",
        "$type": "dimension"
      },
      "space-80": {
        "$value": "16px",
        "$type": "dimension"
      },
      "space-96": {
        "$value": "17px",
        "$type": "dimension"
      },
      "space-128": {
        "$value": "18px",
        "$type": "dimension"
      },
      "space-160": {
        "$value": "19px",
        "$type": "dimension"
      },
      "space-192": {
        "$value": "20px",
        "$type": "dimension"
      },
      "space-256": {
        "$value": "22px",
        "$type": "dimension"
      },
      "space-23": {
        "$value": "23px",
        "$type": "dimension"
      },
      "space-25": {
        "$value": "27px",
        "$type": "dimension"
      },
      "space-26": {
        "$value": "30px",
        "$type": "dimension"
      },
      "space-27": {
        "$value": "32px",
        "$type": "dimension"
      },
      "space-28": {
        "$value": "34px",
        "$type": "dimension"
      },
      "space-29": {
        "$value": "35px",
        "$type": "dimension"
      },
      "space-30": {
        "$value": "40px",
        "$type": "dimension"
      },
      "space-31": {
        "$value": "44px",
        "$type": "dimension"
      },
      "space-33": {
        "$value": "76.5px",
        "$type": "dimension"
      },
      "space-34": {
        "$value": "198px",
        "$type": "dimension"
      },
      "space-35": {
        "$value": "370.5px",
        "$type": "dimension"
      }
    },
    "zIndex": {
      "z-1": {
        "$value": "1",
        "$type": "number"
      },
      "z-2": {
        "$value": "2",
        "$type": "number"
      },
      "z-3": {
        "$value": "3",
        "$type": "number"
      },
      "z-4": {
        "$value": "10",
        "$type": "number"
      },
      "z-5": {
        "$value": "30",
        "$type": "number"
      },
      "z-6": {
        "$value": "40",
        "$type": "number"
      },
      "z-7": {
        "$value": "50",
        "$type": "number"
      },
      "z-8": {
        "$value": "100",
        "$type": "number"
      },
      "z-9": {
        "$value": "14678",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "470px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "480px",
        "$type": "dimension"
      },
      "breakpoint-md": {
        "$value": "600px",
        "$type": "dimension"
      },
      "breakpoint-lg": {
        "$value": "620px",
        "$type": "dimension"
      },
      "breakpoint-xl": {
        "$value": "675px",
        "$type": "dimension"
      },
      "breakpoint-2xl": {
        "$value": "759px",
        "$type": "dimension"
      },
      "breakpoint-3xl": {
        "$value": "760px",
        "$type": "dimension"
      },
      "breakpoint-bp-8": {
        "$value": "767px",
        "$type": "dimension"
      },
      "breakpoint-bp-9": {
        "$value": "768px",
        "$type": "dimension"
      },
      "breakpoint-bp-10": {
        "$value": "900px",
        "$type": "dimension"
      },
      "breakpoint-bp-11": {
        "$value": "911px",
        "$type": "dimension"
      },
      "breakpoint-bp-12": {
        "$value": "1019px",
        "$type": "dimension"
      },
      "breakpoint-bp-13": {
        "$value": "1020px",
        "$type": "dimension"
      },
      "breakpoint-bp-14": {
        "$value": "1122px",
        "$type": "dimension"
      },
      "breakpoint-bp-15": {
        "$value": "1123px",
        "$type": "dimension"
      },
      "breakpoint-bp-16": {
        "$value": "1279px",
        "$type": "dimension"
      },
      "breakpoint-bp-17": {
        "$value": "1280px",
        "$type": "dimension"
      },
      "breakpoint-bp-18": {
        "$value": "1300px",
        "$type": "dimension"
      },
      "breakpoint-bp-19": {
        "$value": "1334px",
        "$type": "dimension"
      },
      "breakpoint-bp-20": {
        "$value": "1335px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
        "$value": "0px 8px 8px 0px",
        "$type": "dimension"
      },
      "radius-md": {
        "$value": "2px",
        "$type": "dimension"
      },
      "radius-lg": {
        "$value": "4px",
        "$type": "dimension"
      },
      "radius-xl": {
        "$value": "4.2px",
        "$type": "dimension"
      },
      "radius-2xl": {
        "$value": "5px",
        "$type": "dimension"
      },
      "radius-full": {
        "$value": "6px",
        "$type": "dimension"
      },
      "radius-r7": {
        "$value": "7px",
        "$type": "dimension"
      },
      "radius-r8": {
        "$value": "8px",
        "$type": "dimension"
      },
      "radius-r9": {
        "$value": "12px",
        "$type": "dimension"
      },
      "radius-r10": {
        "$value": "14px",
        "$type": "dimension"
      },
      "radius-r11": {
        "$value": "28px",
        "$type": "dimension"
      },
      "radius-r12": {
        "$value": "50%",
        "$type": "dimension"
      },
      "radius-r13": {
        "$value": "120px",
        "$type": "dimension"
      },
      "radius-r14": {
        "$value": "9999px",
        "$type": "dimension"
      },
      "radius-r15": {
        "$value": "13986px",
        "$type": "dimension"
      }
    },
    "borderWidth": {
      "border-width-hairline": {
        "$value": "1px",
        "$type": "dimension"
      },
      "border-width-thin": {
        "$value": "1.5px",
        "$type": "dimension"
      },
      "border-width-base": {
        "$value": "8px",
        "$type": "dimension"
      }
    },
    "shadow": {
      "shadow-sm": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px",
        "$type": "shadow"
      },
      "shadow-md": {
        "$value": "rgb(0, 0, 0) 0px 0px 8px 0px",
        "$type": "shadow"
      },
      "shadow-lg": {
        "$value": "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
        "$type": "shadow"
      }
    }
  },
  "motion": {
    "duration": {
      "duration-instant": {
        "$value": "0.1s",
        "$type": "duration"
      },
      "duration-fast": {
        "$value": "0.15s",
        "$type": "duration"
      },
      "duration-normal": {
        "$value": "0.2s",
        "$type": "duration"
      },
      "duration-slow": {
        "$value": "0.25s",
        "$type": "duration"
      },
      "duration-slower": {
        "$value": "0.3s",
        "$type": "duration"
      },
      "duration-duration-6": {
        "$value": "0.35s",
        "$type": "duration"
      },
      "duration-duration-7": {
        "$value": "0.5s",
        "$type": "duration"
      },
      "duration-duration-8": {
        "$value": "0.6s",
        "$type": "duration"
      },
      "duration-duration-9": {
        "$value": "1s",
        "$type": "duration"
      }
    },
    "easing": {
      "easing-ease-out": {
        "$value": "ease-out",
        "$type": "cubicBezier"
      },
      "easing-ease-in-out": {
        "$value": "ease-in-out",
        "$type": "cubicBezier"
      }
    }
  },
  "opacity": {
    "opacity-30": {
      "$value": 0.3,
      "$type": "number"
    },
    "opacity-40": {
      "$value": 0.4,
      "$type": "number"
    },
    "opacity-73": {
      "$value": 0.73,
      "$type": "number"
    },
    "opacity-83": {
      "$value": 0.83,
      "$type": "number"
    },
    "opacity-85": {
      "$value": 0.85,
      "$type": "number"
    }
  }
}
```
