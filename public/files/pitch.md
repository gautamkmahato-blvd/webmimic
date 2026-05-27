# Presentation software for fast-moving teams | Pitch — Design System

**Source:** https://pitch.com/  
**Generated:** 19/04/2026, 00:11:34  
**Extracted:** 29 colors · 46 type tokens · 36 spacing steps · 6 breakpoints · 13 motion tokens

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
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×348 |
| `--color-white` | `#FFFFFF` | hsl(0, 0%, 100%) | ×321 |
| `--color-yellow` | `#FFD02C` | hsl(47, 100%, 59%) | ×110 |
| `--color-purple` | `#8D49F7` | hsl(263, 92%, 63%) | ×97 |
| `--color-mid-gray` | `#808080` | hsl(0, 0%, 50%) | ×8 |
| `--color-orange` | `#FFA000` | hsl(38, 100%, 50%) | ×4 |
| `--color-blue-4` | `rgba(107, 83, 255, 0.05)` | hsl(247, 100%, 65%) | ×4 |
| `--color-light-cyan` | `#81D4FA` | hsl(199, 92%, 74%) | ×2 |
| `--color-yellow-2` | `#FFD600` | hsl(50, 100%, 50%) | ×2 |
| `--color-light-gray-3` | `#F0EFF4` | hsl(252, 19%, 95%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-gray` | `#2B2A35` | hsl(245, 12%, 19%) | ×1492 |
| `--color-blue` | `#6B53FF` | hsl(248, 100%, 66%) | ×316 |
| `--color-dark-gray-2` | `#1E1D28` | hsl(245, 16%, 14%) | ×85 |
| `--color-blue-2` | `#545465` | hsl(240, 9%, 36%) | ×14 |
| `--color-blue-3` | `#6F7387` | hsl(230, 10%, 48%) | ×8 |
| `--color-dark-blue` | `#3F4250` | hsl(229, 12%, 28%) | ×6 |
| `--color-dark-blue-2` | `#371789` | hsl(257, 71%, 31%) | ×2 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray` | `#DDDFE5` | hsl(225, 13%, 88%) | ×9 |
| `--color-light-gray-2` | `#D7D8E0` | hsl(233, 13%, 86%) | ×3 |

### Shadow Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-blue-7` | `rgba(103, 110, 144, 0.2)` | hsl(232, 16%, 49%) | ×2 |
| `--color-dark-gray-3` | `rgba(43, 42, 53, 0.25)` | hsl(240, 8%, 19%) | ×2 |
| `--color-dark-gray-4` | `rgba(43, 42, 53, 0.5)` | hsl(250, 13%, 19%) | ×2 |

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-blue-5` | `#586EE0` | hsl(230, 69%, 61%) | ×4 |
| `--color-orange-2` | `#FF9E2C` | hsl(32, 100%, 59%) | ×3 |
| `--color-blue-6` | `#5318EB` | hsl(257, 84%, 51%) | ×2 |
| `--color-light-purple` | `#AB6EF9` | hsl(266, 92%, 70%) | ×2 |
| `--color-purple-2` | `#8A4CF9` | hsl(262, 94%, 64%) | ×1 |
| `--color-dark-blue-3` | `rgba(53, 27, 97, 0.04)` | hsl(260, 59%, 25%) | ×1 |
| `--color-white-2` | `#F6F6F9` | hsl(240, 20%, 97%) | ×1 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `Eina01` |
| `--font-family-2` | `Mark Pro` |
| `--font-family-3` | `system-ui` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `12px` |  |
| `--font-size-xs` | `13px` |  |
| `--font-size-sm` | `14px` |  |
| `--font-size-base` | `15px` |  |
| `--font-size-lg` | `16px` |  |
| `--font-size-xl` | `18px` |  |
| `--font-size-2xl` | `21px` |  |
| `--font-size-3xl` | `22px` |  |
| `--font-size-4xl` | `24px` |  |
| `--font-size-5xl` | `27px` |  |
| `--font-size-6xl` | `28px` |  |
| `--font-size-36px` | `36px` |  |
| `--font-size-60px` | `60px` |  |
| `--font-size-80px` | `80px` |  |

### Font Weights

| Token | Weight |
| --- | --- |
| `--font-weight-regular` | `400` |
| `--font-weight-semibold` | `600` |
| `--font-weight-bold` | `700` |
| `--font-weight-extrabold` | `800` |

### Line Heights

| Token | Value |
| --- | --- |
| `--line-height-tight` | `13px` |
| `--line-height-snug` | `15.6px` |
| `--line-height-normal` | `17.6px` |
| `--line-height-relaxed` | `22.4px` |
| `--line-height-loose` | `23.4px` |
| `--line-height-lh-6` | `24px` |
| `--line-height-lh-7` | `27px` |
| `--line-height-lh-8` | `28.8px` |
| `--line-height-lh-9` | `30px` |
| `--line-height-lh-10` | `30.8px` |
| `--line-height-lh-11` | `32px` |
| `--line-height-lh-12` | `36px` |
| `--line-height-lh-13` | `37.8px` |
| `--line-height-lh-14` | `44px` |
| `--line-height-lh-15` | `50.4px` |
| `--line-height-lh-16` | `60px` |
| `--line-height-lh-17` | `80px` |
| `--line-height-lh-18` | `104px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `-1.6px` |
| `--letter-spacing-normal` | `-1.2px` |
| `--letter-spacing-wide` | `-0.72px` |
| `--letter-spacing-wider` | `-0.54px` |
| `--letter-spacing-widest` | `-0.28px` |
| `--letter-spacing-ls-6` | `1.3px` |
| `--letter-spacing-ls-7` | `1.4px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `1px` | ×11 |
| `--space-2` | `2px` | ×112 |
| `--space-3` | `3px` | ×1 |
| `--space-4` | `3.2px` | ×6 |
| `--space-5` | `4px` | ×16 |
| `--space-6` | `4.8px` | ×6 |
| `--space-8` | `6px` | ×34 |
| `--space-10` | `8px` | ×6 |
| `--space-12` | `10px` | ×7 |
| `--space-16` | `10.476px` | ×3 |
| `--space-20` | `12px` | ×113 |
| `--space-24` | `45px` | ×1 |
| `--space-32` | `90px` | ×5 |
| `--space-40` | `18px` | ×20 |
| `--space-48` | `20px` | ×81 |
| `--space-64` | `24px` | ×33 |
| `--space-80` | `25px` | ×7 |
| `--space-96` | `28px` | ×2 |
| `--space-128` | `30px` | ×9 |
| `--space-160` | `32px` | ×39 |
| `--space-192` | `35px` | ×1 |
| `--space-256` | `40px` | ×53 |
| `--space-23` | `42.348px` | ×5 |
| `--space-25` | `48px` | ×14 |
| `--space-26` | `56px` | ×1 |
| `--space-27` | `60px` | ×10 |
| `--space-28` | `62.5625px` | ×2 |
| `--space-29` | `70px` | ×1 |
| `--space-30` | `80px` | ×3 |
| `--space-31` | `84.702px` | ×1 |
| `--space-33` | `103.94px` | ×26 |
| `--space-34` | `120px` | ×20 |
| `--space-35` | `128.562px` | ×2 |
| `--space-36` | `142.562px` | ×6 |
| `--space-37` | `147.281px` | ×8 |
| `--space-38` | `231.281px` | ×6 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `1px` | ×69 |
| `--border-width-thin` | `2px` | ×12 |
| `--border-width-base` | `9px` | ×16 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `3px` | ×24 |
| `--radius-md` | `3px 3px 0px 0px` | ×1 |
| `--radius-lg` | `6px` | ×26 |
| `--radius-xl` | `8px` | ×13 |
| `--radius-2xl` | `8px 8px 0px 0px` | ×1 |
| `--radius-full` | `10px` | ×5 |
| `--radius-r7` | `12px` | ×3 |
| `--radius-r8` | `14px` | ×6 |
| `--radius-r9` | `16px` | ×1 |
| `--radius-r10` | `20px` | ×10 |
| `--radius-r11` | `26px` | ×5 |
| `--radius-r12` | `50%` | ×14 |
| `--radius-r13` | `56px` | ×1 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgba(0, 0, 0, 0.15) 0px 3px 10px 0px` | ×24 |
| `--shadow-md` | `rgba(103, 110, 144, 0.2) 0px 8px 26px 0px` | ×2 |
| `--shadow-lg` | `rgba(43, 42, 53, 0.25) 0px 6px 27px 0px` | ×2 |
| `--shadow-xl` | `rgba(43, 42, 53, 0.5) 0px 6px 27px 0px` | ×2 |
| `--shadow-shadow-5` | `rgba(0, 0, 0, 0.15) 0px 0px 0px 0px` | ×1 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.1s` | ×16 |
| `--duration-fast` | `0.12s` | ×52 |
| `--duration-normal` | `0.15s` | ×13 |
| `--duration-slow` | `0.2s` | ×55 |
| `--duration-slower` | `0.225s` | ×1 |
| `--duration-duration-6` | `0.3s` | ×80 |
| `--duration-duration-7` | `0.4s` | ×120 |
| `--duration-duration-8` | `0.5s` | ×6 |
| `--duration-duration-9` | `0.8s` | ×24 |
| `--duration-duration-10` | `1.4s` | ×2 |

### Easing Functions

| Token | Value | Usage |
| --- | --- | --- |
| `--easing-ease-in-out` | `ease-in-out` | ×146 |
| `--easing-ease-out` | `ease-out` | ×13 |
| `--easing-ease-in` | `ease-in` | ×1 |

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `-1` |
| `--z-2` | `1` |
| `--z-3` | `2` |
| `--z-4` | `2147483001` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `1082px` |
| `--breakpoint-sm` | `1123px` |
| `--breakpoint-md` | `1399px` |
| `--breakpoint-lg` | `1667px` |
| `--breakpoint-xl` | `1670px` |
| `--breakpoint-2xl` | `1820px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-50` | `0.5` | ×1 |
| `--opacity-70` | `0.7` | ×5 |
| `--opacity-80` | `0.8` | ×2 |
| `--opacity-85` | `0.85` | ×5 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-dark-gray` | `--color-black` | 1.49:1 | Fail |
| `--color-dark-gray` | `--color-white` | 14.14:1 | AAA |
| `--color-dark-gray` | `--color-yellow` | 9.63:1 | AAA |
| `--color-dark-gray` | `--color-purple` | 2.98:1 | Fail |
| `--color-dark-gray` | `--color-mid-gray` | 3.58:1 | AA Large |
| `--color-blue` | `--color-black` | 4.31:1 | AA Large |
| `--color-blue` | `--color-white` | 4.88:1 | AA |
| `--color-blue` | `--color-yellow` | 3.32:1 | AA Large |
| `--color-blue` | `--color-purple` | 1.03:1 | Fail |
| `--color-blue` | `--color-mid-gray` | 1.23:1 | Fail |
| `--color-dark-gray-2` | `--color-black` | 1.26:1 | Fail |
| `--color-dark-gray-2` | `--color-white` | 16.65:1 | AAA |
| `--color-dark-gray-2` | `--color-yellow` | 11.34:1 | AAA |
| `--color-dark-gray-2` | `--color-purple` | 3.51:1 | AA Large |
| `--color-dark-gray-2` | `--color-mid-gray` | 4.21:1 | AA Large |
| `--color-blue-2` | `--color-black` | 2.83:1 | Fail |
| `--color-blue-2` | `--color-white` | 7.41:1 | AAA |
| `--color-blue-2` | `--color-yellow` | 5.05:1 | AA |
| `--color-blue-2` | `--color-purple` | 1.56:1 | Fail |
| `--color-blue-2` | `--color-mid-gray` | 1.88:1 | Fail |
| `--color-blue-3` | `--color-black` | 4.48:1 | AA Large |
| `--color-blue-3` | `--color-white` | 4.69:1 | AA |
| `--color-blue-3` | `--color-yellow` | 3.2:1 | AA Large |
| `--color-blue-3` | `--color-purple` | 1.01:1 | Fail |
| `--color-blue-3` | `--color-mid-gray` | 1.19:1 | Fail |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--announcement-bar-height` | `calc(0px)` |
| `--navigation-bar-height` | `3.75rem` |
| `--navigation-height` | `calc(var(--announcement-bar-height, 0px) + var(--navigation-bar-height))` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — Presentation software for fast-moving teams | Pitch
 * Source: https://pitch.com/
 * Generated: 19/04/2026, 00:11:34
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-dark-gray: #2B2A35; /* hsl(245, 12%, 19%) · text */
  --color-black: #000000; /* hsl(0, 0%, 0%) · background */
  --color-white: #FFFFFF; /* hsl(0, 0%, 100%) · background */
  --color-blue: #6B53FF; /* hsl(248, 100%, 66%) · text */
  --color-yellow: #FFD02C; /* hsl(47, 100%, 59%) · background */
  --color-purple: #8D49F7; /* hsl(263, 92%, 63%) · background */
  --color-dark-gray-2: #1E1D28; /* hsl(245, 16%, 14%) · text */
  --color-blue-2: #545465; /* hsl(240, 9%, 36%) · text */
  --color-light-gray: #DDDFE5; /* hsl(225, 13%, 88%) · border */
  --color-mid-gray: #808080; /* hsl(0, 0%, 50%) · background */
  --color-blue-3: #6F7387; /* hsl(230, 10%, 48%) · text */
  --color-dark-blue: #3F4250; /* hsl(229, 12%, 28%) · text */
  --color-orange: #FFA000; /* hsl(38, 100%, 50%) · background */
  --color-blue-4: rgba(107, 83, 255, 0.05); /* hsl(247, 100%, 65%) · background */
  --color-blue-5: #586EE0; /* hsl(230, 69%, 61%) · fill */
  --color-light-gray-2: #D7D8E0; /* hsl(233, 13%, 86%) · border */
  --color-orange-2: #FF9E2C; /* hsl(32, 100%, 59%) · gradient */
  --color-blue-6: #5318EB; /* hsl(257, 84%, 51%) · gradient */
  --color-light-purple: #AB6EF9; /* hsl(266, 92%, 70%) · gradient */
  --color-blue-7: rgba(103, 110, 144, 0.2); /* hsl(232, 16%, 49%) · shadow */
  --color-light-cyan: #81D4FA; /* hsl(199, 92%, 74%) · background */
  --color-yellow-2: #FFD600; /* hsl(50, 100%, 50%) · background */
  --color-dark-gray-3: rgba(43, 42, 53, 0.25); /* hsl(240, 8%, 19%) · shadow */
  --color-dark-gray-4: rgba(43, 42, 53, 0.5); /* hsl(250, 13%, 19%) · shadow */
  --color-dark-blue-2: #371789; /* hsl(257, 71%, 31%) · text */
  --color-light-gray-3: #F0EFF4; /* hsl(252, 19%, 95%) · background */
  --color-purple-2: #8A4CF9; /* hsl(262, 94%, 64%) · gradient */
  --color-dark-blue-3: rgba(53, 27, 97, 0.04); /* hsl(260, 59%, 25%) · gradient */
  --color-white-2: #F6F6F9; /* hsl(240, 20%, 97%) · gradient */

  /* ── Core: Typography ── */
  --font-size-2xs: 12px;
  --font-size-xs: 13px;
  --font-size-sm: 14px;
  --font-size-base: 15px;
  --font-size-lg: 16px;
  --font-size-xl: 18px;
  --font-size-2xl: 21px;
  --font-size-3xl: 22px;
  --font-size-4xl: 24px;
  --font-size-5xl: 27px;
  --font-size-6xl: 28px;
  --font-size-36px: 36px;
  --font-size-60px: 60px;
  --font-size-80px: 80px;
  --font-family-base: Eina01;
  --font-family-2: Mark Pro;
  --font-family-3: system-ui;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --line-height-tight: 13px;
  --line-height-snug: 15.6px;
  --line-height-normal: 17.6px;
  --line-height-relaxed: 22.4px;
  --line-height-loose: 23.4px;
  --line-height-lh-6: 24px;
  --line-height-lh-7: 27px;
  --line-height-lh-8: 28.8px;
  --line-height-lh-9: 30px;
  --line-height-lh-10: 30.8px;
  --line-height-lh-11: 32px;
  --line-height-lh-12: 36px;
  --line-height-lh-13: 37.8px;
  --line-height-lh-14: 44px;
  --line-height-lh-15: 50.4px;
  --line-height-lh-16: 60px;
  --line-height-lh-17: 80px;
  --line-height-lh-18: 104px;
  --letter-spacing-tight: -1.6px;
  --letter-spacing-normal: -1.2px;
  --letter-spacing-wide: -0.72px;
  --letter-spacing-wider: -0.54px;
  --letter-spacing-widest: -0.28px;
  --letter-spacing-ls-6: 1.3px;
  --letter-spacing-ls-7: 1.4px;

  /* ── Layout: Spacing ── */
  --space-1: 1px;
  --space-2: 2px;
  --space-3: 3px;
  --space-4: 3.2px;
  --space-5: 4px;
  --space-6: 4.8px;
  --space-8: 6px;
  --space-10: 8px;
  --space-12: 10px;
  --space-16: 10.476px;
  --space-20: 12px;
  --space-24: 45px;
  --space-32: 90px;
  --space-40: 18px;
  --space-48: 20px;
  --space-64: 24px;
  --space-80: 25px;
  --space-96: 28px;
  --space-128: 30px;
  --space-160: 32px;
  --space-192: 35px;
  --space-256: 40px;
  --space-23: 42.348px;
  --space-25: 48px;
  --space-26: 56px;
  --space-27: 60px;
  --space-28: 62.5625px;
  --space-29: 70px;
  --space-30: 80px;
  --space-31: 84.702px;
  --space-33: 103.94px;
  --space-34: 120px;
  --space-35: 128.562px;
  --space-36: 142.562px;
  --space-37: 147.281px;
  --space-38: 231.281px;

  /* ── Borders ── */
  --border-width-hairline: 1px;
  --border-width-thin: 2px;
  --border-width-base: 9px;
  --radius-sm: 3px;
  --radius-md: 3px 3px 0px 0px;
  --radius-lg: 6px;
  --radius-xl: 8px;
  --radius-2xl: 8px 8px 0px 0px;
  --radius-full: 10px;
  --radius-r7: 12px;
  --radius-r8: 14px;
  --radius-r9: 16px;
  --radius-r10: 20px;
  --radius-r11: 26px;
  --radius-r12: 50%;
  --radius-r13: 56px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgba(0, 0, 0, 0.15) 0px 3px 10px 0px;
  --shadow-md: rgba(103, 110, 144, 0.2) 0px 8px 26px 0px;
  --shadow-lg: rgba(43, 42, 53, 0.25) 0px 6px 27px 0px;
  --shadow-xl: rgba(43, 42, 53, 0.5) 0px 6px 27px 0px;
  --shadow-shadow-5: rgba(0, 0, 0, 0.15) 0px 0px 0px 0px;

  /* ── Motion ── */
  --duration-instant: 0.1s;
  --duration-fast: 0.12s;
  --duration-normal: 0.15s;
  --duration-slow: 0.2s;
  --duration-slower: 0.225s;
  --duration-duration-6: 0.3s;
  --duration-duration-7: 0.4s;
  --duration-duration-8: 0.5s;
  --duration-duration-9: 0.8s;
  --duration-duration-10: 1.4s;
  --easing-ease-in-out: ease-in-out;
  --easing-ease-out: ease-out;
  --easing-ease-in: ease-in;

  /* ── Layout: Z-Index ── */
  --z-1: -1;
  --z-2: 1;
  --z-3: 2;
  --z-4: 2147483001;

  /* ── Breakpoints ── */
  --breakpoint-xs: 1082px;
  --breakpoint-sm: 1123px;
  --breakpoint-md: 1399px;
  --breakpoint-lg: 1667px;
  --breakpoint-xl: 1670px;
  --breakpoint-2xl: 1820px;

  /* ── Opacity ── */
  --opacity-50: 0.5;
  --opacity-70: 0.7;
  --opacity-80: 0.8;
  --opacity-85: 0.85;
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://pitch.com/",
    "title": "Presentation software for fast-moving teams | Pitch",
    "generatedAt": "2026-04-18T18:41:34.049Z"
  },
  "core": {
    "color": {
      "dark-gray": {
        "$value": "#2B2A35",
        "$type": "color",
        "$description": "text · ×1492"
      },
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "background · ×348"
      },
      "white": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×321"
      },
      "blue": {
        "$value": "#6B53FF",
        "$type": "color",
        "$description": "text · ×316"
      },
      "yellow": {
        "$value": "#FFD02C",
        "$type": "color",
        "$description": "background · ×110"
      },
      "purple": {
        "$value": "#8D49F7",
        "$type": "color",
        "$description": "background · ×97"
      },
      "dark-gray-2": {
        "$value": "#1E1D28",
        "$type": "color",
        "$description": "text · ×85"
      },
      "blue-2": {
        "$value": "#545465",
        "$type": "color",
        "$description": "text · ×14"
      },
      "light-gray": {
        "$value": "#DDDFE5",
        "$type": "color",
        "$description": "border · ×9"
      },
      "mid-gray": {
        "$value": "#808080",
        "$type": "color",
        "$description": "background · ×8"
      },
      "blue-3": {
        "$value": "#6F7387",
        "$type": "color",
        "$description": "text · ×8"
      },
      "dark-blue": {
        "$value": "#3F4250",
        "$type": "color",
        "$description": "text · ×6"
      },
      "orange": {
        "$value": "#FFA000",
        "$type": "color",
        "$description": "background · ×4"
      },
      "blue-4": {
        "$value": "rgba(107, 83, 255, 0.05)",
        "$type": "color",
        "$description": "background · ×4"
      },
      "blue-5": {
        "$value": "#586EE0",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "light-gray-2": {
        "$value": "#D7D8E0",
        "$type": "color",
        "$description": "border · ×3"
      },
      "orange-2": {
        "$value": "#FF9E2C",
        "$type": "color",
        "$description": "gradient · ×3"
      },
      "blue-6": {
        "$value": "#5318EB",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "light-purple": {
        "$value": "#AB6EF9",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "blue-7": {
        "$value": "rgba(103, 110, 144, 0.2)",
        "$type": "color",
        "$description": "shadow · ×2"
      },
      "light-cyan": {
        "$value": "#81D4FA",
        "$type": "color",
        "$description": "background · ×2"
      },
      "yellow-2": {
        "$value": "#FFD600",
        "$type": "color",
        "$description": "background · ×2"
      },
      "dark-gray-3": {
        "$value": "rgba(43, 42, 53, 0.25)",
        "$type": "color",
        "$description": "shadow · ×2"
      },
      "dark-gray-4": {
        "$value": "rgba(43, 42, 53, 0.5)",
        "$type": "color",
        "$description": "shadow · ×2"
      },
      "dark-blue-2": {
        "$value": "#371789",
        "$type": "color",
        "$description": "text · ×2"
      },
      "light-gray-3": {
        "$value": "#F0EFF4",
        "$type": "color",
        "$description": "background · ×1"
      },
      "purple-2": {
        "$value": "#8A4CF9",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-blue-3": {
        "$value": "rgba(53, 27, 97, 0.04)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "white-2": {
        "$value": "#F6F6F9",
        "$type": "color",
        "$description": "gradient · ×1"
      }
    },
    "fontSize": {
      "font-size-2xs": {
        "$value": "12px",
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
        "$value": "16px",
        "$type": "dimension"
      },
      "font-size-xl": {
        "$value": "18px",
        "$type": "dimension"
      },
      "font-size-2xl": {
        "$value": "21px",
        "$type": "dimension"
      },
      "font-size-3xl": {
        "$value": "22px",
        "$type": "dimension"
      },
      "font-size-4xl": {
        "$value": "24px",
        "$type": "dimension"
      },
      "font-size-5xl": {
        "$value": "27px",
        "$type": "dimension"
      },
      "font-size-6xl": {
        "$value": "28px",
        "$type": "dimension"
      },
      "font-size-36px": {
        "$value": "36px",
        "$type": "dimension"
      },
      "font-size-60px": {
        "$value": "60px",
        "$type": "dimension"
      },
      "font-size-80px": {
        "$value": "80px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "Eina01",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "Mark Pro",
        "$type": "fontFamily"
      },
      "font-family-3": {
        "$value": "system-ui",
        "$type": "fontFamily"
      }
    },
    "fontWeight": {
      "font-weight-regular": {
        "$value": "400",
        "$type": "fontWeight"
      },
      "font-weight-semibold": {
        "$value": "600",
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
        "$value": "13px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "15.6px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "17.6px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "22.4px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "23.4px",
        "$type": "dimension"
      },
      "line-height-lh-6": {
        "$value": "24px",
        "$type": "dimension"
      },
      "line-height-lh-7": {
        "$value": "27px",
        "$type": "dimension"
      },
      "line-height-lh-8": {
        "$value": "28.8px",
        "$type": "dimension"
      },
      "line-height-lh-9": {
        "$value": "30px",
        "$type": "dimension"
      },
      "line-height-lh-10": {
        "$value": "30.8px",
        "$type": "dimension"
      },
      "line-height-lh-11": {
        "$value": "32px",
        "$type": "dimension"
      },
      "line-height-lh-12": {
        "$value": "36px",
        "$type": "dimension"
      },
      "line-height-lh-13": {
        "$value": "37.8px",
        "$type": "dimension"
      },
      "line-height-lh-14": {
        "$value": "44px",
        "$type": "dimension"
      },
      "line-height-lh-15": {
        "$value": "50.4px",
        "$type": "dimension"
      },
      "line-height-lh-16": {
        "$value": "60px",
        "$type": "dimension"
      },
      "line-height-lh-17": {
        "$value": "80px",
        "$type": "dimension"
      },
      "line-height-lh-18": {
        "$value": "104px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "-1.6px",
        "$type": "dimension"
      },
      "letter-spacing-normal": {
        "$value": "-1.2px",
        "$type": "dimension"
      },
      "letter-spacing-wide": {
        "$value": "-0.72px",
        "$type": "dimension"
      },
      "letter-spacing-wider": {
        "$value": "-0.54px",
        "$type": "dimension"
      },
      "letter-spacing-widest": {
        "$value": "-0.28px",
        "$type": "dimension"
      },
      "letter-spacing-ls-6": {
        "$value": "1.3px",
        "$type": "dimension"
      },
      "letter-spacing-ls-7": {
        "$value": "1.4px",
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
        "$value": "3.2px",
        "$type": "dimension"
      },
      "space-5": {
        "$value": "4px",
        "$type": "dimension"
      },
      "space-6": {
        "$value": "4.8px",
        "$type": "dimension"
      },
      "space-8": {
        "$value": "6px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "8px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "10px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "10.476px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "12px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "45px",
        "$type": "dimension"
      },
      "space-32": {
        "$value": "90px",
        "$type": "dimension"
      },
      "space-40": {
        "$value": "18px",
        "$type": "dimension"
      },
      "space-48": {
        "$value": "20px",
        "$type": "dimension"
      },
      "space-64": {
        "$value": "24px",
        "$type": "dimension"
      },
      "space-80": {
        "$value": "25px",
        "$type": "dimension"
      },
      "space-96": {
        "$value": "28px",
        "$type": "dimension"
      },
      "space-128": {
        "$value": "30px",
        "$type": "dimension"
      },
      "space-160": {
        "$value": "32px",
        "$type": "dimension"
      },
      "space-192": {
        "$value": "35px",
        "$type": "dimension"
      },
      "space-256": {
        "$value": "40px",
        "$type": "dimension"
      },
      "space-23": {
        "$value": "42.348px",
        "$type": "dimension"
      },
      "space-25": {
        "$value": "48px",
        "$type": "dimension"
      },
      "space-26": {
        "$value": "56px",
        "$type": "dimension"
      },
      "space-27": {
        "$value": "60px",
        "$type": "dimension"
      },
      "space-28": {
        "$value": "62.5625px",
        "$type": "dimension"
      },
      "space-29": {
        "$value": "70px",
        "$type": "dimension"
      },
      "space-30": {
        "$value": "80px",
        "$type": "dimension"
      },
      "space-31": {
        "$value": "84.702px",
        "$type": "dimension"
      },
      "space-33": {
        "$value": "103.94px",
        "$type": "dimension"
      },
      "space-34": {
        "$value": "120px",
        "$type": "dimension"
      },
      "space-35": {
        "$value": "128.562px",
        "$type": "dimension"
      },
      "space-36": {
        "$value": "142.562px",
        "$type": "dimension"
      },
      "space-37": {
        "$value": "147.281px",
        "$type": "dimension"
      },
      "space-38": {
        "$value": "231.281px",
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
        "$value": "2147483001",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "1082px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "1123px",
        "$type": "dimension"
      },
      "breakpoint-md": {
        "$value": "1399px",
        "$type": "dimension"
      },
      "breakpoint-lg": {
        "$value": "1667px",
        "$type": "dimension"
      },
      "breakpoint-xl": {
        "$value": "1670px",
        "$type": "dimension"
      },
      "breakpoint-2xl": {
        "$value": "1820px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
        "$value": "3px",
        "$type": "dimension"
      },
      "radius-md": {
        "$value": "3px 3px 0px 0px",
        "$type": "dimension"
      },
      "radius-lg": {
        "$value": "6px",
        "$type": "dimension"
      },
      "radius-xl": {
        "$value": "8px",
        "$type": "dimension"
      },
      "radius-2xl": {
        "$value": "8px 8px 0px 0px",
        "$type": "dimension"
      },
      "radius-full": {
        "$value": "10px",
        "$type": "dimension"
      },
      "radius-r7": {
        "$value": "12px",
        "$type": "dimension"
      },
      "radius-r8": {
        "$value": "14px",
        "$type": "dimension"
      },
      "radius-r9": {
        "$value": "16px",
        "$type": "dimension"
      },
      "radius-r10": {
        "$value": "20px",
        "$type": "dimension"
      },
      "radius-r11": {
        "$value": "26px",
        "$type": "dimension"
      },
      "radius-r12": {
        "$value": "50%",
        "$type": "dimension"
      },
      "radius-r13": {
        "$value": "56px",
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
      },
      "border-width-base": {
        "$value": "9px",
        "$type": "dimension"
      }
    },
    "shadow": {
      "shadow-sm": {
        "$value": "rgba(0, 0, 0, 0.15) 0px 3px 10px 0px",
        "$type": "shadow"
      },
      "shadow-md": {
        "$value": "rgba(103, 110, 144, 0.2) 0px 8px 26px 0px",
        "$type": "shadow"
      },
      "shadow-lg": {
        "$value": "rgba(43, 42, 53, 0.25) 0px 6px 27px 0px",
        "$type": "shadow"
      },
      "shadow-xl": {
        "$value": "rgba(43, 42, 53, 0.5) 0px 6px 27px 0px",
        "$type": "shadow"
      },
      "shadow-shadow-5": {
        "$value": "rgba(0, 0, 0, 0.15) 0px 0px 0px 0px",
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
        "$value": "0.12s",
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
        "$value": "0.225s",
        "$type": "duration"
      },
      "duration-duration-6": {
        "$value": "0.3s",
        "$type": "duration"
      },
      "duration-duration-7": {
        "$value": "0.4s",
        "$type": "duration"
      },
      "duration-duration-8": {
        "$value": "0.5s",
        "$type": "duration"
      },
      "duration-duration-9": {
        "$value": "0.8s",
        "$type": "duration"
      },
      "duration-duration-10": {
        "$value": "1.4s",
        "$type": "duration"
      }
    },
    "easing": {
      "easing-ease-in-out": {
        "$value": "ease-in-out",
        "$type": "cubicBezier"
      },
      "easing-ease-out": {
        "$value": "ease-out",
        "$type": "cubicBezier"
      },
      "easing-ease-in": {
        "$value": "ease-in",
        "$type": "cubicBezier"
      }
    }
  },
  "opacity": {
    "opacity-50": {
      "$value": 0.5,
      "$type": "number"
    },
    "opacity-70": {
      "$value": 0.7,
      "$type": "number"
    },
    "opacity-80": {
      "$value": 0.8,
      "$type": "number"
    },
    "opacity-85": {
      "$value": 0.85,
      "$type": "number"
    }
  }
}
```
