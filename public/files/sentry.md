# Application Performance Monitoring & Error Tracking Software | Sentry — Design System

**Source:** https://sentry.io/welcome/  
**Generated:** 18/04/2026, 13:48:01  
**Extracted:** 43 colors · 36 type tokens · 23 spacing steps · 10 breakpoints · 8 motion tokens

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
| `--color-white` | `#FFFFFF` | hsl(0, 0%, 100%) | ×2652 |
| `--color-dark-blue` | `#150F23` | hsl(258, 40%, 10%) | ×164 |
| `--color-dark-blue-3` | `#1F1633` | hsl(259, 40%, 14%) | ×48 |
| `--color-blue-3` | `#6A5FC1` | hsl(247, 44%, 56%) | ×28 |
| `--color-blue-4` | `#7553FF` | hsl(252, 100%, 66%) | ×6 |
| `--color-light-gray-3` | `#EFEFEF` | hsl(0, 0%, 94%) | ×4 |
| `--color-white-2` | `#F9F8FF` | hsl(249, 100%, 99%) | ×3 |
| `--color-dark-purple-3` | `#2D2340` | hsl(261, 29%, 19%) | ×2 |
| `--color-dark-purple-5` | `#422082` | hsl(261, 60%, 32%) | ×2 |
| `--color-purple` | `#79628C` | hsl(273, 18%, 47%) | ×1 |
| `--color-white-3` | `#F6F6F8` | hsl(240, 12%, 97%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray-2` | `#D4D4D4` | hsl(0, 0%, 83%) | ×617 |
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×335 |
| `--color-blue` | `#569CD6` | hsl(207, 61%, 59%) | ×92 |
| `--color-light-yellow` | `#DCDCAA` | hsl(60, 42%, 76%) | ×80 |
| `--color-green` | `#6A9955` | hsl(101, 29%, 47%) | ×67 |
| `--color-red` | `#F44747` | hsl(0, 89%, 62%) | ×63 |
| `--color-orange` | `#CE9178` | hsl(17, 47%, 64%) | ×58 |
| `--color-blue-2` | `#4E2A9A` | hsl(259, 57%, 38%) | ×50 |
| `--color-light-green` | `#B5CEA8` | hsl(99, 28%, 73%) | ×28 |
| `--color-pink` | `#FD44B0` | hsl(325, 98%, 63%) | ×26 |
| `--color-green-2` | `#C2EF4E` | hsl(77, 83%, 62%) | ×25 |
| `--color-red-3` | `#D16969` | hsl(0, 53%, 62%) | ×13 |
| `--color-dark-gray` | `#1A1A1A` | hsl(0, 0%, 10%) | ×6 |
| `--color-dark-blue-4` | `#1F2937` | hsl(215, 28%, 17%) | ×6 |
| `--color-dark-blue-5` | `#362D59` | hsl(252, 33%, 26%) | ×2 |
| `--color-light-gray-5` | `#CFCFDB` | hsl(240, 14%, 84%) | ×2 |
| `--color-dark-blue-6` | `#111827` | hsl(221, 39%, 11%) | ×1 |
| `--color-dark-blue-7` | `#374151` | hsl(217, 19%, 27%) | ×1 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray` | `#E5E7EB` | hsl(220, 13%, 91%) | ×2998 |
| `--color-light-gray-4` | `#ECECF1` | hsl(240, 15%, 94%) | ×3 |
| `--color-dark-purple-4` | `#433458` | hsl(265, 26%, 27%) | ×2 |
| `--color-purple-2` | `#584674` | hsl(263, 25%, 36%) | ×1 |

### Shadow Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-blue-2` | `rgba(22, 15, 36, 0.9)` | hsl(259, 37%, 10%) | ×82 |

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-purple` | `#452650` | hsl(284, 36%, 23%) | ×30 |
| `--color-red-2` | `#C83852` | hsl(349, 57%, 50%) | ×20 |
| `--color-pink-2` | `#B44092` | hsl(318, 48%, 48%) | ×20 |
| `--color-light-red` | `#FA7FAA` | hsl(339, 92%, 74%) | ×6 |
| `--color-light-red-2` | `#FF9691` | hsl(3, 100%, 78%) | ×6 |
| `--color-light-orange` | `#FFB287` | hsl(21, 100%, 76%) | ×6 |
| `--color-orange-2` | `#A48977` | hsl(24, 20%, 55%) | ×4 |
| `--color-dark-purple-2` | `#30145F` | hsl(262, 65%, 23%) | ×3 |
| `--color-pink-3` | `rgba(173, 108, 170, 0.15)` | hsl(305, 29%, 55%) | ×1 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `Rubik` |
| `--font-family-2` | `Dammit Sans` |
| `--font-family-3` | `IBM Plex Mono` |
| `--font-family-4` | `Monaco` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `10px` |  |
| `--font-size-xs` | `12px` |  |
| `--font-size-sm` | `14px` |  |
| `--font-size-base` | `15px` |  |
| `--font-size-lg` | `16px` |  |
| `--font-size-xl` | `20px` |  |
| `--font-size-2xl` | `24px` |  |
| `--font-size-3xl` | `27px` |  |
| `--font-size-4xl` | `30px` |  |
| `--font-size-5xl` | `60px` |  |
| `--font-size-6xl` | `88px` |  |

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
| `--line-height-tight` | `14px` |
| `--line-height-snug` | `16px` |
| `--line-height-normal` | `17.5px` |
| `--line-height-relaxed` | `18.75px` |
| `--line-height-loose` | `20px` |
| `--line-height-lh-6` | `21px` |
| `--line-height-lh-7` | `24px` |
| `--line-height-lh-8` | `25px` |
| `--line-height-lh-9` | `30px` |
| `--line-height-lh-10` | `32px` |
| `--line-height-lh-11` | `33.75px` |
| `--line-height-lh-12` | `36px` |
| `--line-height-lh-13` | `66px` |
| `--line-height-lh-14` | `105.6px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `0%` |
| `--letter-spacing-normal` | `0.2px` |
| `--letter-spacing-wide` | `0.25px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `2px` | ×70 |
| `--space-2` | `4px` | ×86 |
| `--space-3` | `5px` | ×1 |
| `--space-4` | `6px` | ×29 |
| `--space-5` | `8px` | ×40 |
| `--space-6` | `12px` | ×20 |
| `--space-8` | `16px` | ×194 |
| `--space-10` | `20px` | ×21 |
| `--space-12` | `20.3px` | ×82 |
| `--space-16` | `24px` | ×52 |
| `--space-20` | `32px` | ×40 |
| `--space-24` | `160px` | ×1 |
| `--space-32` | `36px` | ×3 |
| `--space-40` | `40px` | ×10 |
| `--space-48` | `44px` | ×82 |
| `--space-64` | `45px` | ×1 |
| `--space-80` | `48px` | ×9 |
| `--space-96` | `56px` | ×3 |
| `--space-128` | `64px` | ×32 |
| `--space-160` | `70.5px` | ×22 |
| `--space-192` | `72px` | ×1 |
| `--space-256` | `73px` | ×1 |
| `--space-23` | `83px` | ×2 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `1px` | ×8 |
| `--border-width-thin` | `2px` | ×132 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `0px 12px 12px 0px` | ×1 |
| `--radius-md` | `6px` | ×1 |
| `--radius-lg` | `8px` | ×45 |
| `--radius-xl` | `10px` | ×41 |
| `--radius-2xl` | `10.6px` | ×8 |
| `--radius-full` | `12px` | ×34 |
| `--radius-r7` | `12px 0px 0px 12px` | ×1 |
| `--radius-r8` | `13px` | ×1 |
| `--radius-r9` | `16px` | ×3 |
| `--radius-r10` | `18px` | ×12 |
| `--radius-r11` | `50%` | ×1 |
| `--radius-r12` | `9999px` | ×3 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgba(22, 15, 36, 0.9) 0px 4px 4px 9px` | ×82 |
| `--shadow-md` | `rgba(0, 0, 0, 0.15) 0px 2px 10px 0px inset` | ×2 |
| `--shadow-lg` | `rgba(0, 0, 0, 0.08) 0px 2px 8px 0px` | ×1 |
| `--shadow-xl` | `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px inset` | ×1 |
| `--shadow-shadow-5` | `rgba(0, 0, 0, 0.2) 0px 1px 3px 0px` | ×1 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.15s` | ×2 |
| `--duration-fast` | `0.2s` | ×1009 |
| `--duration-normal` | `0.3s` | ×39 |
| `--duration-slow` | `0.4s` | ×6 |
| `--duration-slower` | `0.6s` | ×12 |
| `--duration-duration-6` | `0.8s` | ×40 |

### Easing Functions

| Token | Value | Usage |
| --- | --- | --- |
| `--easing-ease-out` | `ease-out` | ×56 |
| `--easing-ease-in-out` | `ease-in-out` | ×21 |

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `-1` |
| `--z-2` | `1` |
| `--z-3` | `2` |
| `--z-4` | `5` |
| `--z-5` | `10` |
| `--z-6` | `50` |
| `--z-7` | `1000` |
| `--z-8` | `9999` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `1px` |
| `--breakpoint-sm` | `576px` |
| `--breakpoint-md` | `640px` |
| `--breakpoint-lg` | `767px` |
| `--breakpoint-xl` | `768px` |
| `--breakpoint-2xl` | `991px` |
| `--breakpoint-3xl` | `992px` |
| `--breakpoint-bp-8` | `1151px` |
| `--breakpoint-bp-9` | `1152px` |
| `--breakpoint-bp-10` | `1440px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-25` | `0.25` | ×2 |
| `--opacity-40` | `0.4` | ×4 |
| `--opacity-50` | `0.5` | ×2 |
| `--opacity-70` | `0.7` | ×1 |
| `--opacity-75` | `0.75` | ×2 |
| `--opacity-90` | `0.9` | ×4 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-light-gray-2` | `--color-white` | 1.48:1 | Fail |
| `--color-light-gray-2` | `--color-dark-blue` | 12.6:1 | AAA |
| `--color-light-gray-2` | `--color-dark-blue-3` | 11.6:1 | AAA |
| `--color-light-gray-2` | `--color-blue-3` | 3.52:1 | AA Large |
| `--color-light-gray-2` | `--color-blue-4` | 3.19:1 | AA Large |
| `--color-black` | `--color-white` | 21:1 | AAA |
| `--color-black` | `--color-dark-blue` | 1.12:1 | Fail |
| `--color-black` | `--color-dark-blue-3` | 1.22:1 | Fail |
| `--color-black` | `--color-blue-3` | 4.02:1 | AA Large |
| `--color-black` | `--color-blue-4` | 4.44:1 | AA Large |
| `--color-blue` | `--color-white` | 2.95:1 | Fail |
| `--color-blue` | `--color-dark-blue` | 6.33:1 | AA |
| `--color-blue` | `--color-dark-blue-3` | 5.83:1 | AA |
| `--color-blue` | `--color-blue-3` | 1.77:1 | Fail |
| `--color-blue` | `--color-blue-4` | 1.6:1 | Fail |
| `--color-light-yellow` | `--color-white` | 1.41:1 | Fail |
| `--color-light-yellow` | `--color-dark-blue` | 13.22:1 | AAA |
| `--color-light-yellow` | `--color-dark-blue-3` | 12.17:1 | AAA |
| `--color-light-yellow` | `--color-blue-3` | 3.7:1 | AA Large |
| `--color-light-yellow` | `--color-blue-4` | 3.35:1 | AA Large |
| `--color-green` | `--color-white` | 3.33:1 | AA Large |
| `--color-green` | `--color-dark-blue` | 5.6:1 | AA |
| `--color-green` | `--color-dark-blue-3` | 5.16:1 | AA |
| `--color-green` | `--color-blue-3` | 1.57:1 | Fail |
| `--color-green` | `--color-blue-4` | 1.42:1 | Fail |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--breakpoint-xs` | `0px` |
| `--breakpoint-sm` | `576px` |
| `--breakpoint-md` | `768px` |
| `--breakpoint-lg` | `992px` |
| `--breakpoint-xl` | `1152px` |
| `--bg-primary` | `#ffffff` |
| `--bg-secondary` | `#f6f6f8` |
| `--text-primary` | `#362d59` |
| `--text-secondary` | `#9093c1` |
| `--border-color` | `#ececf1` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — Application Performance Monitoring & Error Tracking Software | Sentry
 * Source: https://sentry.io/welcome/
 * Generated: 18/04/2026, 13:48:01
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-light-gray: #E5E7EB; /* hsl(220, 13%, 91%) · border */
  --color-white: #FFFFFF; /* hsl(0, 0%, 100%) · background */
  --color-light-gray-2: #D4D4D4; /* hsl(0, 0%, 83%) · text */
  --color-black: #000000; /* hsl(0, 0%, 0%) · text */
  --color-dark-blue: #150F23; /* hsl(258, 40%, 10%) · background */
  --color-blue: #569CD6; /* hsl(207, 61%, 59%) · text */
  --color-dark-blue-2: rgba(22, 15, 36, 0.9); /* hsl(259, 37%, 10%) · shadow */
  --color-light-yellow: #DCDCAA; /* hsl(60, 42%, 76%) · text */
  --color-green: #6A9955; /* hsl(101, 29%, 47%) · text */
  --color-red: #F44747; /* hsl(0, 89%, 62%) · text */
  --color-orange: #CE9178; /* hsl(17, 47%, 64%) · text */
  --color-blue-2: #4E2A9A; /* hsl(259, 57%, 38%) · text */
  --color-dark-blue-3: #1F1633; /* hsl(259, 40%, 14%) · background */
  --color-dark-purple: #452650; /* hsl(284, 36%, 23%) · gradient */
  --color-blue-3: #6A5FC1; /* hsl(247, 44%, 56%) · background */
  --color-light-green: #B5CEA8; /* hsl(99, 28%, 73%) · text */
  --color-pink: #FD44B0; /* hsl(325, 98%, 63%) · text */
  --color-green-2: #C2EF4E; /* hsl(77, 83%, 62%) · text */
  --color-red-2: #C83852; /* hsl(349, 57%, 50%) · gradient */
  --color-pink-2: #B44092; /* hsl(318, 48%, 48%) · gradient */
  --color-red-3: #D16969; /* hsl(0, 53%, 62%) · text */
  --color-dark-gray: #1A1A1A; /* hsl(0, 0%, 10%) · text */
  --color-light-red: #FA7FAA; /* hsl(339, 92%, 74%) · gradient */
  --color-light-red-2: #FF9691; /* hsl(3, 100%, 78%) · gradient */
  --color-light-orange: #FFB287; /* hsl(21, 100%, 76%) · gradient */
  --color-dark-blue-4: #1F2937; /* hsl(215, 28%, 17%) · text */
  --color-blue-4: #7553FF; /* hsl(252, 100%, 66%) · background */
  --color-light-gray-3: #EFEFEF; /* hsl(0, 0%, 94%) · background */
  --color-orange-2: #A48977; /* hsl(24, 20%, 55%) · fill */
  --color-white-2: #F9F8FF; /* hsl(249, 100%, 99%) · background */
  --color-dark-purple-2: #30145F; /* hsl(262, 65%, 23%) · gradient */
  --color-light-gray-4: #ECECF1; /* hsl(240, 15%, 94%) · border */
  --color-dark-purple-3: #2D2340; /* hsl(261, 29%, 19%) · background */
  --color-dark-purple-4: #433458; /* hsl(265, 26%, 27%) · border */
  --color-dark-purple-5: #422082; /* hsl(261, 60%, 32%) · background */
  --color-dark-blue-5: #362D59; /* hsl(252, 33%, 26%) · text */
  --color-light-gray-5: #CFCFDB; /* hsl(240, 14%, 84%) · text */
  --color-dark-blue-6: #111827; /* hsl(221, 39%, 11%) · text */
  --color-dark-blue-7: #374151; /* hsl(217, 19%, 27%) · text */
  --color-purple: #79628C; /* hsl(273, 18%, 47%) · background */
  --color-purple-2: #584674; /* hsl(263, 25%, 36%) · border */
  --color-pink-3: rgba(173, 108, 170, 0.15); /* hsl(305, 29%, 55%) · gradient */
  --color-white-3: #F6F6F8; /* hsl(240, 12%, 97%) · background */

  /* ── Core: Typography ── */
  --font-size-2xs: 10px;
  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-base: 15px;
  --font-size-lg: 16px;
  --font-size-xl: 20px;
  --font-size-2xl: 24px;
  --font-size-3xl: 27px;
  --font-size-4xl: 30px;
  --font-size-5xl: 60px;
  --font-size-6xl: 88px;
  --font-family-base: Rubik;
  --font-family-2: Dammit Sans;
  --font-family-3: IBM Plex Mono;
  --font-family-4: Monaco;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-tight: 14px;
  --line-height-snug: 16px;
  --line-height-normal: 17.5px;
  --line-height-relaxed: 18.75px;
  --line-height-loose: 20px;
  --line-height-lh-6: 21px;
  --line-height-lh-7: 24px;
  --line-height-lh-8: 25px;
  --line-height-lh-9: 30px;
  --line-height-lh-10: 32px;
  --line-height-lh-11: 33.75px;
  --line-height-lh-12: 36px;
  --line-height-lh-13: 66px;
  --line-height-lh-14: 105.6px;
  --letter-spacing-tight: 0%;
  --letter-spacing-normal: 0.2px;
  --letter-spacing-wide: 0.25px;

  /* ── Layout: Spacing ── */
  --space-1: 2px;
  --space-2: 4px;
  --space-3: 5px;
  --space-4: 6px;
  --space-5: 8px;
  --space-6: 12px;
  --space-8: 16px;
  --space-10: 20px;
  --space-12: 20.3px;
  --space-16: 24px;
  --space-20: 32px;
  --space-24: 160px;
  --space-32: 36px;
  --space-40: 40px;
  --space-48: 44px;
  --space-64: 45px;
  --space-80: 48px;
  --space-96: 56px;
  --space-128: 64px;
  --space-160: 70.5px;
  --space-192: 72px;
  --space-256: 73px;
  --space-23: 83px;

  /* ── Borders ── */
  --border-width-hairline: 1px;
  --border-width-thin: 2px;
  --radius-sm: 0px 12px 12px 0px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 10px;
  --radius-2xl: 10.6px;
  --radius-full: 12px;
  --radius-r7: 12px 0px 0px 12px;
  --radius-r8: 13px;
  --radius-r9: 16px;
  --radius-r10: 18px;
  --radius-r11: 50%;
  --radius-r12: 9999px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgba(22, 15, 36, 0.9) 0px 4px 4px 9px;
  --shadow-md: rgba(0, 0, 0, 0.15) 0px 2px 10px 0px inset;
  --shadow-lg: rgba(0, 0, 0, 0.08) 0px 2px 8px 0px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px inset;
  --shadow-shadow-5: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px;

  /* ── Motion ── */
  --duration-instant: 0.15s;
  --duration-fast: 0.2s;
  --duration-normal: 0.3s;
  --duration-slow: 0.4s;
  --duration-slower: 0.6s;
  --duration-duration-6: 0.8s;
  --easing-ease-out: ease-out;
  --easing-ease-in-out: ease-in-out;

  /* ── Layout: Z-Index ── */
  --z-1: -1;
  --z-2: 1;
  --z-3: 2;
  --z-4: 5;
  --z-5: 10;
  --z-6: 50;
  --z-7: 1000;
  --z-8: 9999;

  /* ── Breakpoints ── */
  --breakpoint-xs: 1px;
  --breakpoint-sm: 576px;
  --breakpoint-md: 640px;
  --breakpoint-lg: 767px;
  --breakpoint-xl: 768px;
  --breakpoint-2xl: 991px;
  --breakpoint-3xl: 992px;
  --breakpoint-bp-8: 1151px;
  --breakpoint-bp-9: 1152px;
  --breakpoint-bp-10: 1440px;

  /* ── Opacity ── */
  --opacity-25: 0.25;
  --opacity-40: 0.4;
  --opacity-50: 0.5;
  --opacity-70: 0.7;
  --opacity-75: 0.75;
  --opacity-90: 0.9;
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://sentry.io/welcome/",
    "title": "Application Performance Monitoring & Error Tracking Software | Sentry",
    "generatedAt": "2026-04-18T08:18:01.152Z"
  },
  "core": {
    "color": {
      "light-gray": {
        "$value": "#E5E7EB",
        "$type": "color",
        "$description": "border · ×2998"
      },
      "white": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×2652"
      },
      "light-gray-2": {
        "$value": "#D4D4D4",
        "$type": "color",
        "$description": "text · ×617"
      },
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "text · ×335"
      },
      "dark-blue": {
        "$value": "#150F23",
        "$type": "color",
        "$description": "background · ×164"
      },
      "blue": {
        "$value": "#569CD6",
        "$type": "color",
        "$description": "text · ×92"
      },
      "dark-blue-2": {
        "$value": "rgba(22, 15, 36, 0.9)",
        "$type": "color",
        "$description": "shadow · ×82"
      },
      "light-yellow": {
        "$value": "#DCDCAA",
        "$type": "color",
        "$description": "text · ×80"
      },
      "green": {
        "$value": "#6A9955",
        "$type": "color",
        "$description": "text · ×67"
      },
      "red": {
        "$value": "#F44747",
        "$type": "color",
        "$description": "text · ×63"
      },
      "orange": {
        "$value": "#CE9178",
        "$type": "color",
        "$description": "text · ×58"
      },
      "blue-2": {
        "$value": "#4E2A9A",
        "$type": "color",
        "$description": "text · ×50"
      },
      "dark-blue-3": {
        "$value": "#1F1633",
        "$type": "color",
        "$description": "background · ×48"
      },
      "dark-purple": {
        "$value": "#452650",
        "$type": "color",
        "$description": "gradient · ×30"
      },
      "blue-3": {
        "$value": "#6A5FC1",
        "$type": "color",
        "$description": "background · ×28"
      },
      "light-green": {
        "$value": "#B5CEA8",
        "$type": "color",
        "$description": "text · ×28"
      },
      "pink": {
        "$value": "#FD44B0",
        "$type": "color",
        "$description": "text · ×26"
      },
      "green-2": {
        "$value": "#C2EF4E",
        "$type": "color",
        "$description": "text · ×25"
      },
      "red-2": {
        "$value": "#C83852",
        "$type": "color",
        "$description": "gradient · ×20"
      },
      "pink-2": {
        "$value": "#B44092",
        "$type": "color",
        "$description": "gradient · ×20"
      },
      "red-3": {
        "$value": "#D16969",
        "$type": "color",
        "$description": "text · ×13"
      },
      "dark-gray": {
        "$value": "#1A1A1A",
        "$type": "color",
        "$description": "text · ×6"
      },
      "light-red": {
        "$value": "#FA7FAA",
        "$type": "color",
        "$description": "gradient · ×6"
      },
      "light-red-2": {
        "$value": "#FF9691",
        "$type": "color",
        "$description": "gradient · ×6"
      },
      "light-orange": {
        "$value": "#FFB287",
        "$type": "color",
        "$description": "gradient · ×6"
      },
      "dark-blue-4": {
        "$value": "#1F2937",
        "$type": "color",
        "$description": "text · ×6"
      },
      "blue-4": {
        "$value": "#7553FF",
        "$type": "color",
        "$description": "background · ×6"
      },
      "light-gray-3": {
        "$value": "#EFEFEF",
        "$type": "color",
        "$description": "background · ×4"
      },
      "orange-2": {
        "$value": "#A48977",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "white-2": {
        "$value": "#F9F8FF",
        "$type": "color",
        "$description": "background · ×3"
      },
      "dark-purple-2": {
        "$value": "#30145F",
        "$type": "color",
        "$description": "gradient · ×3"
      },
      "light-gray-4": {
        "$value": "#ECECF1",
        "$type": "color",
        "$description": "border · ×3"
      },
      "dark-purple-3": {
        "$value": "#2D2340",
        "$type": "color",
        "$description": "background · ×2"
      },
      "dark-purple-4": {
        "$value": "#433458",
        "$type": "color",
        "$description": "border · ×2"
      },
      "dark-purple-5": {
        "$value": "#422082",
        "$type": "color",
        "$description": "background · ×2"
      },
      "dark-blue-5": {
        "$value": "#362D59",
        "$type": "color",
        "$description": "text · ×2"
      },
      "light-gray-5": {
        "$value": "#CFCFDB",
        "$type": "color",
        "$description": "text · ×2"
      },
      "dark-blue-6": {
        "$value": "#111827",
        "$type": "color",
        "$description": "text · ×1"
      },
      "dark-blue-7": {
        "$value": "#374151",
        "$type": "color",
        "$description": "text · ×1"
      },
      "purple": {
        "$value": "#79628C",
        "$type": "color",
        "$description": "background · ×1"
      },
      "purple-2": {
        "$value": "#584674",
        "$type": "color",
        "$description": "border · ×1"
      },
      "pink-3": {
        "$value": "rgba(173, 108, 170, 0.15)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "white-3": {
        "$value": "#F6F6F8",
        "$type": "color",
        "$description": "background · ×1"
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
        "$value": "20px",
        "$type": "dimension"
      },
      "font-size-2xl": {
        "$value": "24px",
        "$type": "dimension"
      },
      "font-size-3xl": {
        "$value": "27px",
        "$type": "dimension"
      },
      "font-size-4xl": {
        "$value": "30px",
        "$type": "dimension"
      },
      "font-size-5xl": {
        "$value": "60px",
        "$type": "dimension"
      },
      "font-size-6xl": {
        "$value": "88px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "Rubik",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "Dammit Sans",
        "$type": "fontFamily"
      },
      "font-family-3": {
        "$value": "IBM Plex Mono",
        "$type": "fontFamily"
      },
      "font-family-4": {
        "$value": "Monaco",
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
        "$value": "14px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "16px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "17.5px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "18.75px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "20px",
        "$type": "dimension"
      },
      "line-height-lh-6": {
        "$value": "21px",
        "$type": "dimension"
      },
      "line-height-lh-7": {
        "$value": "24px",
        "$type": "dimension"
      },
      "line-height-lh-8": {
        "$value": "25px",
        "$type": "dimension"
      },
      "line-height-lh-9": {
        "$value": "30px",
        "$type": "dimension"
      },
      "line-height-lh-10": {
        "$value": "32px",
        "$type": "dimension"
      },
      "line-height-lh-11": {
        "$value": "33.75px",
        "$type": "dimension"
      },
      "line-height-lh-12": {
        "$value": "36px",
        "$type": "dimension"
      },
      "line-height-lh-13": {
        "$value": "66px",
        "$type": "dimension"
      },
      "line-height-lh-14": {
        "$value": "105.6px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "0%",
        "$type": "dimension"
      },
      "letter-spacing-normal": {
        "$value": "0.2px",
        "$type": "dimension"
      },
      "letter-spacing-wide": {
        "$value": "0.25px",
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
        "$value": "5px",
        "$type": "dimension"
      },
      "space-4": {
        "$value": "6px",
        "$type": "dimension"
      },
      "space-5": {
        "$value": "8px",
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
        "$value": "20.3px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "24px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "32px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "160px",
        "$type": "dimension"
      },
      "space-32": {
        "$value": "36px",
        "$type": "dimension"
      },
      "space-40": {
        "$value": "40px",
        "$type": "dimension"
      },
      "space-48": {
        "$value": "44px",
        "$type": "dimension"
      },
      "space-64": {
        "$value": "45px",
        "$type": "dimension"
      },
      "space-80": {
        "$value": "48px",
        "$type": "dimension"
      },
      "space-96": {
        "$value": "56px",
        "$type": "dimension"
      },
      "space-128": {
        "$value": "64px",
        "$type": "dimension"
      },
      "space-160": {
        "$value": "70.5px",
        "$type": "dimension"
      },
      "space-192": {
        "$value": "72px",
        "$type": "dimension"
      },
      "space-256": {
        "$value": "73px",
        "$type": "dimension"
      },
      "space-23": {
        "$value": "83px",
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
        "$value": "5",
        "$type": "number"
      },
      "z-5": {
        "$value": "10",
        "$type": "number"
      },
      "z-6": {
        "$value": "50",
        "$type": "number"
      },
      "z-7": {
        "$value": "1000",
        "$type": "number"
      },
      "z-8": {
        "$value": "9999",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "1px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "576px",
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
        "$value": "991px",
        "$type": "dimension"
      },
      "breakpoint-3xl": {
        "$value": "992px",
        "$type": "dimension"
      },
      "breakpoint-bp-8": {
        "$value": "1151px",
        "$type": "dimension"
      },
      "breakpoint-bp-9": {
        "$value": "1152px",
        "$type": "dimension"
      },
      "breakpoint-bp-10": {
        "$value": "1440px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
        "$value": "0px 12px 12px 0px",
        "$type": "dimension"
      },
      "radius-md": {
        "$value": "6px",
        "$type": "dimension"
      },
      "radius-lg": {
        "$value": "8px",
        "$type": "dimension"
      },
      "radius-xl": {
        "$value": "10px",
        "$type": "dimension"
      },
      "radius-2xl": {
        "$value": "10.6px",
        "$type": "dimension"
      },
      "radius-full": {
        "$value": "12px",
        "$type": "dimension"
      },
      "radius-r7": {
        "$value": "12px 0px 0px 12px",
        "$type": "dimension"
      },
      "radius-r8": {
        "$value": "13px",
        "$type": "dimension"
      },
      "radius-r9": {
        "$value": "16px",
        "$type": "dimension"
      },
      "radius-r10": {
        "$value": "18px",
        "$type": "dimension"
      },
      "radius-r11": {
        "$value": "50%",
        "$type": "dimension"
      },
      "radius-r12": {
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
        "$value": "rgba(22, 15, 36, 0.9) 0px 4px 4px 9px",
        "$type": "shadow"
      },
      "shadow-md": {
        "$value": "rgba(0, 0, 0, 0.15) 0px 2px 10px 0px inset",
        "$type": "shadow"
      },
      "shadow-lg": {
        "$value": "rgba(0, 0, 0, 0.08) 0px 2px 8px 0px",
        "$type": "shadow"
      },
      "shadow-xl": {
        "$value": "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px inset",
        "$type": "shadow"
      },
      "shadow-shadow-5": {
        "$value": "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px",
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
      },
      "duration-slow": {
        "$value": "0.4s",
        "$type": "duration"
      },
      "duration-slower": {
        "$value": "0.6s",
        "$type": "duration"
      },
      "duration-duration-6": {
        "$value": "0.8s",
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
    "opacity-25": {
      "$value": 0.25,
      "$type": "number"
    },
    "opacity-40": {
      "$value": 0.4,
      "$type": "number"
    },
    "opacity-50": {
      "$value": 0.5,
      "$type": "number"
    },
    "opacity-70": {
      "$value": 0.7,
      "$type": "number"
    },
    "opacity-75": {
      "$value": 0.75,
      "$type": "number"
    },
    "opacity-90": {
      "$value": 0.9,
      "$type": "number"
    }
  }
}
```
