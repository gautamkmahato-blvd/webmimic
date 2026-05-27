# Neon Serverless Postgres — Ship faster — Design System

**Source:** https://neon.com/  
**Generated:** 19/04/2026, 00:20:10  
**Extracted:** 31 colors · 68 type tokens · 40 spacing steps · 6 breakpoints · 3 motion tokens

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
| `--color-white` | `#FFFFFF` | hsl(0, 0%, 100%) | ×9089 |
| `--color-dark-green` | `#2C6D4C` | hsl(150, 42%, 30%) | ×1800 |
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×905 |
| `--color-mid-gray` | `#94979E` | hsl(222, 5%, 60%) | ×204 |
| `--color-cyan` | `#34D59A` | hsl(158, 66%, 52%) | ×46 |
| `--color-dark-gray-3` | `#303236` | hsl(220, 6%, 20%) | ×41 |
| `--color-mid-gray-3` | `#AFB1B6` | hsl(223, 5%, 70%) | ×36 |
| `--color-cyan-2` | `#00E599` | hsl(160, 100%, 45%) | ×17 |
| `--color-dark-gray-4` | `#18191B` | hsl(220, 6%, 10%) | ×9 |
| `--color-light-gray-3` | `#E4F1EB` | hsl(152, 32%, 92%) | ×4 |
| `--color-light-cyan` | `#CAE6D9` | hsl(152, 36%, 85%) | ×1 |
| `--color-dark-gray-8` | `#111215` | hsl(225, 11%, 7%) | ×1 |
| `--color-dark-gray-9` | `#151617` | hsl(210, 5%, 9%) | ×1 |
| `--color-black-3` | `#0A0A0B` | hsl(240, 5%, 4%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-mid-gray-2` | `#797D86` | hsl(222, 5%, 50%) | ×118 |
| `--color-light-gray` | `#C9CBCF` | hsl(220, 6%, 80%) | ×80 |
| `--color-dark-gray` | `#242628` | hsl(210, 5%, 15%) | ×76 |
| `--color-dark-gray-2` | `#61646B` | hsl(222, 5%, 40%) | ×43 |
| `--color-light-gray-2` | `#E4E5E7` | hsl(220, 6%, 90%) | ×22 |
| `--color-red` | `#FF3621` | hsl(6, 100%, 56%) | ×15 |
| `--color-dark-cyan` | `#285D49` | hsl(157, 40%, 26%) | ×12 |
| `--color-dark-gray-5` | `#1A1A1A` | hsl(0, 0%, 10%) | ×6 |
| `--color-light-orange` | `#F7B983` | hsl(28, 88%, 74%) | ×6 |
| `--color-light-blue` | `#94B5F7` | hsl(220, 86%, 77%) | ×6 |
| `--color-dark-gray-6` | `#131415` | hsl(210, 5%, 8%) | ×4 |
| `--color-dark-gray-7` | `#494B50` | hsl(223, 5%, 30%) | ×2 |
| `--color-white-2` | `#F9FAFA` | hsl(180, 9%, 98%) | ×2 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-white-3` | `#F5FFFF` | hsl(180, 100%, 98%) | ×1 |

### Shadow Colors

_None detected._

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-cyan-3` | `#37C38F` | hsl(158, 56%, 49%) | ×2 |
| `--color-black-2` | `#0C0D0D` | hsl(180, 4%, 5%) | ×2 |
| `--color-cyan-4` | `rgba(57, 165, 125, 0.6)` | hsl(158, 49%, 44%) | ×1 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `Inter` |
| `--font-family-2` | `GeistMono` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `9px` |  |
| `--font-size-xs` | `10px` |  |
| `--font-size-sm` | `11px` |  |
| `--font-size-base` | `12px` |  |
| `--font-size-lg` | `13px` |  |
| `--font-size-xl` | `14px` |  |
| `--font-size-2xl` | `15px` |  |
| `--font-size-3xl` | `16px` |  |
| `--font-size-4xl` | `18px` |  |
| `--font-size-5xl` | `20px` |  |
| `--font-size-6xl` | `24px` |  |
| `--font-size-36px` | `36px` |  |
| `--font-size-40px` | `40px` |  |
| `--font-size-52px` | `52px` |  |
| `--font-size-64px` | `64px` |  |
| `--font-size-72px` | `72px` |  |

### Font Weights

| Token | Weight |
| --- | --- |
| `--font-weight-regular` | `400` |
| `--font-weight-medium` | `500` |
| `--font-weight-semibold` | `600` |

### Line Heights

| Token | Value |
| --- | --- |
| `--line-height-tight` | `9px` |
| `--line-height-snug` | `10px` |
| `--line-height-normal` | `11px` |
| `--line-height-relaxed` | `12px` |
| `--line-height-loose` | `13px` |
| `--line-height-lh-6` | `13.5px` |
| `--line-height-lh-7` | `15px` |
| `--line-height-lh-8` | `16px` |
| `--line-height-lh-9` | `16.875px` |
| `--line-height-lh-10` | `18px` |
| `--line-height-lh-11` | `18.75px` |
| `--line-height-lh-12` | `20.625px` |
| `--line-height-lh-13` | `22px` |
| `--line-height-lh-14` | `22.5px` |
| `--line-height-lh-15` | `24px` |
| `--line-height-lh-16` | `24.75px` |
| `--line-height-lh-17` | `27px` |
| `--line-height-lh-18` | `27.5px` |
| `--line-height-lh-19` | `30px` |
| `--line-height-lh-20` | `33px` |
| `--line-height-lh-21` | `40.5px` |
| `--line-height-lh-22` | `45px` |
| `--line-height-lh-23` | `58.5px` |
| `--line-height-lh-24` | `64px` |
| `--line-height-lh-25` | `72px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `-2.88px` |
| `--letter-spacing-normal` | `-2.56px` |
| `--letter-spacing-wide` | `-2.08px` |
| `--letter-spacing-wider` | `-1.6px` |
| `--letter-spacing-widest` | `-1.44px` |
| `--letter-spacing-ls-6` | `-0.96px` |
| `--letter-spacing-ls-7` | `-0.6px` |
| `--letter-spacing-ls-8` | `-0.5px` |
| `--letter-spacing-ls-9` | `-0.48px` |
| `--letter-spacing-ls-10` | `-0.4px` |
| `--letter-spacing-ls-11` | `-0.375px` |
| `--letter-spacing-ls-12` | `-0.36px` |
| `--letter-spacing-ls-13` | `-0.32px` |
| `--letter-spacing-ls-14` | `-0.3px` |
| `--letter-spacing-ls-15` | `-0.28px` |
| `--letter-spacing-ls-16` | `-0.26px` |
| `--letter-spacing-ls-17` | `-0.24px` |
| `--letter-spacing-ls-18` | `-0.22px` |
| `--letter-spacing-ls-19` | `-0.18px` |
| `--letter-spacing-ls-20` | `-0.15px` |
| `--letter-spacing-ls-21` | `-0.13px` |
| `--letter-spacing-ls-22` | `-0.1px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `1px` | ×105 |
| `--space-2` | `2px` | ×91 |
| `--space-3` | `4px` | ×66 |
| `--space-4` | `6px` | ×37 |
| `--space-5` | `7px` | ×8 |
| `--space-6` | `8px` | ×173 |
| `--space-8` | `10px` | ×36 |
| `--space-10` | `12px` | ×67 |
| `--space-12` | `14px` | ×24 |
| `--space-16` | `15px` | ×2 |
| `--space-20` | `16px` | ×27 |
| `--space-24` | `54.5px` | ×4 |
| `--space-32` | `128px` | ×5 |
| `--space-40` | `184px` | ×1 |
| `--space-48` | `25px` | ×8 |
| `--space-64` | `26px` | ×4 |
| `--space-80` | `28px` | ×26 |
| `--space-96` | `30px` | ×5 |
| `--space-128` | `32px` | ×22 |
| `--space-160` | `36px` | ×4 |
| `--space-192` | `40px` | ×8 |
| `--space-256` | `44px` | ×2 |
| `--space-23` | `48px` | ×13 |
| `--space-25` | `56px` | ×5 |
| `--space-26` | `64px` | ×49 |
| `--space-27` | `80px` | ×4 |
| `--space-28` | `98px` | ×1 |
| `--space-29` | `104px` | ×1 |
| `--space-30` | `108px` | ×3 |
| `--space-31` | `120px` | ×1 |
| `--space-33` | `135px` | ×1 |
| `--space-34` | `136px` | ×6 |
| `--space-35` | `137px` | ×1 |
| `--space-36` | `143px` | ×3 |
| `--space-37` | `160px` | ×3 |
| `--space-38` | `174px` | ×1 |
| `--space-39` | `176px` | ×3 |
| `--space-41` | `216px` | ×1 |
| `--space-42` | `246.5px` | ×2 |
| `--space-43` | `271.055px` | ×1 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `1px` | ×60 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `4px` | ×62 |
| `--radius-md` | `100%` | ×1 |
| `--radius-lg` | `1.67772e+07px` | ×10 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.4) 0px 8px 20px 0px` | ×1 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.15s` | ×26 |
| `--duration-fast` | `0.2s` | ×830 |
| `--duration-normal` | `0.3s` | ×6 |

### Easing Functions

_No easing functions detected._

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `-10` |
| `--z-2` | `1` |
| `--z-3` | `10` |
| `--z-4` | `20` |
| `--z-5` | `30` |
| `--z-6` | `40` |
| `--z-7` | `50` |
| `--z-8` | `2147483647` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `413px` |
| `--breakpoint-sm` | `767px` |
| `--breakpoint-md` | `1023px` |
| `--breakpoint-lg` | `1279px` |
| `--breakpoint-xl` | `1599px` |
| `--breakpoint-2xl` | `1919px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-10` | `0.1` | ×1 |
| `--opacity-30` | `0.3` | ×1 |
| `--opacity-60` | `0.6` | ×4 |
| `--opacity-80` | `0.8` | ×1 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-mid-gray-2` | `--color-white` | 4.13:1 | AA Large |
| `--color-mid-gray-2` | `--color-dark-green` | 1.5:1 | Fail |
| `--color-mid-gray-2` | `--color-black` | 5.09:1 | AA |
| `--color-mid-gray-2` | `--color-mid-gray` | 1.41:1 | Fail |
| `--color-mid-gray-2` | `--color-cyan` | 2.19:1 | Fail |
| `--color-light-gray` | `--color-white` | 1.62:1 | Fail |
| `--color-light-gray` | `--color-dark-green` | 3.8:1 | AA Large |
| `--color-light-gray` | `--color-black` | 12.93:1 | AAA |
| `--color-light-gray` | `--color-mid-gray` | 1.8:1 | Fail |
| `--color-light-gray` | `--color-cyan` | 1.16:1 | Fail |
| `--color-dark-gray` | `--color-white` | 15.19:1 | AAA |
| `--color-dark-gray` | `--color-dark-green` | 2.46:1 | Fail |
| `--color-dark-gray` | `--color-black` | 1.38:1 | Fail |
| `--color-dark-gray` | `--color-mid-gray` | 5.19:1 | AA |
| `--color-dark-gray` | `--color-cyan` | 8.05:1 | AAA |
| `--color-dark-gray-2` | `--color-white` | 5.93:1 | AA |
| `--color-dark-gray-2` | `--color-dark-green` | 1.04:1 | Fail |
| `--color-dark-gray-2` | `--color-black` | 3.54:1 | AA Large |
| `--color-dark-gray-2` | `--color-mid-gray` | 2.03:1 | Fail |
| `--color-dark-gray-2` | `--color-cyan` | 3.14:1 | AA Large |
| `--color-light-gray-2` | `--color-white` | 1.26:1 | Fail |
| `--color-light-gray-2` | `--color-dark-green` | 4.9:1 | AA |
| `--color-light-gray-2` | `--color-black` | 16.66:1 | AAA |
| `--color-light-gray-2` | `--color-mid-gray` | 2.32:1 | Fail |
| `--color-light-gray-2` | `--color-cyan` | 1.5:1 | Fail |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — Neon Serverless Postgres — Ship faster
 * Source: https://neon.com/
 * Generated: 19/04/2026, 00:20:10
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-white: #FFFFFF; /* hsl(0, 0%, 100%) · background */
  --color-dark-green: #2C6D4C; /* hsl(150, 42%, 30%) · background */
  --color-black: #000000; /* hsl(0, 0%, 0%) · background */
  --color-mid-gray: #94979E; /* hsl(222, 5%, 60%) · background */
  --color-mid-gray-2: #797D86; /* hsl(222, 5%, 50%) · text */
  --color-light-gray: #C9CBCF; /* hsl(220, 6%, 80%) · text */
  --color-dark-gray: #242628; /* hsl(210, 5%, 15%) · text */
  --color-cyan: #34D59A; /* hsl(158, 66%, 52%) · background */
  --color-dark-gray-2: #61646B; /* hsl(222, 5%, 40%) · text */
  --color-dark-gray-3: #303236; /* hsl(220, 6%, 20%) · background */
  --color-mid-gray-3: #AFB1B6; /* hsl(223, 5%, 70%) · background */
  --color-light-gray-2: #E4E5E7; /* hsl(220, 6%, 90%) · text */
  --color-cyan-2: #00E599; /* hsl(160, 100%, 45%) · background */
  --color-red: #FF3621; /* hsl(6, 100%, 56%) · text */
  --color-dark-cyan: #285D49; /* hsl(157, 40%, 26%) · text */
  --color-dark-gray-4: #18191B; /* hsl(220, 6%, 10%) · background */
  --color-dark-gray-5: #1A1A1A; /* hsl(0, 0%, 10%) · text */
  --color-light-orange: #F7B983; /* hsl(28, 88%, 74%) · text */
  --color-light-blue: #94B5F7; /* hsl(220, 86%, 77%) · text */
  --color-dark-gray-6: #131415; /* hsl(210, 5%, 8%) · text */
  --color-light-gray-3: #E4F1EB; /* hsl(152, 32%, 92%) · background */
  --color-cyan-3: #37C38F; /* hsl(158, 56%, 49%) · fill */
  --color-black-2: #0C0D0D; /* hsl(180, 4%, 5%) · fill */
  --color-dark-gray-7: #494B50; /* hsl(223, 5%, 30%) · text */
  --color-white-2: #F9FAFA; /* hsl(180, 9%, 98%) · text */
  --color-light-cyan: #CAE6D9; /* hsl(152, 36%, 85%) · background */
  --color-dark-gray-8: #111215; /* hsl(225, 11%, 7%) · background */
  --color-white-3: #F5FFFF; /* hsl(180, 100%, 98%) · border */
  --color-cyan-4: rgba(57, 165, 125, 0.6); /* hsl(158, 49%, 44%) · gradient */
  --color-dark-gray-9: #151617; /* hsl(210, 5%, 9%) · background */
  --color-black-3: #0A0A0B; /* hsl(240, 5%, 4%) · background */

  /* ── Core: Typography ── */
  --font-size-2xs: 9px;
  --font-size-xs: 10px;
  --font-size-sm: 11px;
  --font-size-base: 12px;
  --font-size-lg: 13px;
  --font-size-xl: 14px;
  --font-size-2xl: 15px;
  --font-size-3xl: 16px;
  --font-size-4xl: 18px;
  --font-size-5xl: 20px;
  --font-size-6xl: 24px;
  --font-size-36px: 36px;
  --font-size-40px: 40px;
  --font-size-52px: 52px;
  --font-size-64px: 64px;
  --font-size-72px: 72px;
  --font-family-base: Inter;
  --font-family-2: GeistMono;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --line-height-tight: 9px;
  --line-height-snug: 10px;
  --line-height-normal: 11px;
  --line-height-relaxed: 12px;
  --line-height-loose: 13px;
  --line-height-lh-6: 13.5px;
  --line-height-lh-7: 15px;
  --line-height-lh-8: 16px;
  --line-height-lh-9: 16.875px;
  --line-height-lh-10: 18px;
  --line-height-lh-11: 18.75px;
  --line-height-lh-12: 20.625px;
  --line-height-lh-13: 22px;
  --line-height-lh-14: 22.5px;
  --line-height-lh-15: 24px;
  --line-height-lh-16: 24.75px;
  --line-height-lh-17: 27px;
  --line-height-lh-18: 27.5px;
  --line-height-lh-19: 30px;
  --line-height-lh-20: 33px;
  --line-height-lh-21: 40.5px;
  --line-height-lh-22: 45px;
  --line-height-lh-23: 58.5px;
  --line-height-lh-24: 64px;
  --line-height-lh-25: 72px;
  --letter-spacing-tight: -2.88px;
  --letter-spacing-normal: -2.56px;
  --letter-spacing-wide: -2.08px;
  --letter-spacing-wider: -1.6px;
  --letter-spacing-widest: -1.44px;
  --letter-spacing-ls-6: -0.96px;
  --letter-spacing-ls-7: -0.6px;
  --letter-spacing-ls-8: -0.5px;
  --letter-spacing-ls-9: -0.48px;
  --letter-spacing-ls-10: -0.4px;
  --letter-spacing-ls-11: -0.375px;
  --letter-spacing-ls-12: -0.36px;
  --letter-spacing-ls-13: -0.32px;
  --letter-spacing-ls-14: -0.3px;
  --letter-spacing-ls-15: -0.28px;
  --letter-spacing-ls-16: -0.26px;
  --letter-spacing-ls-17: -0.24px;
  --letter-spacing-ls-18: -0.22px;
  --letter-spacing-ls-19: -0.18px;
  --letter-spacing-ls-20: -0.15px;
  --letter-spacing-ls-21: -0.13px;
  --letter-spacing-ls-22: -0.1px;

  /* ── Layout: Spacing ── */
  --space-1: 1px;
  --space-2: 2px;
  --space-3: 4px;
  --space-4: 6px;
  --space-5: 7px;
  --space-6: 8px;
  --space-8: 10px;
  --space-10: 12px;
  --space-12: 14px;
  --space-16: 15px;
  --space-20: 16px;
  --space-24: 54.5px;
  --space-32: 128px;
  --space-40: 184px;
  --space-48: 25px;
  --space-64: 26px;
  --space-80: 28px;
  --space-96: 30px;
  --space-128: 32px;
  --space-160: 36px;
  --space-192: 40px;
  --space-256: 44px;
  --space-23: 48px;
  --space-25: 56px;
  --space-26: 64px;
  --space-27: 80px;
  --space-28: 98px;
  --space-29: 104px;
  --space-30: 108px;
  --space-31: 120px;
  --space-33: 135px;
  --space-34: 136px;
  --space-35: 137px;
  --space-36: 143px;
  --space-37: 160px;
  --space-38: 174px;
  --space-39: 176px;
  --space-41: 216px;
  --space-42: 246.5px;
  --space-43: 271.055px;

  /* ── Borders ── */
  --border-width-hairline: 1px;
  --radius-sm: 4px;
  --radius-md: 100%;
  --radius-lg: 1.67772e+07px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.4) 0px 8px 20px 0px;

  /* ── Motion ── */
  --duration-instant: 0.15s;
  --duration-fast: 0.2s;
  --duration-normal: 0.3s;

  /* ── Layout: Z-Index ── */
  --z-1: -10;
  --z-2: 1;
  --z-3: 10;
  --z-4: 20;
  --z-5: 30;
  --z-6: 40;
  --z-7: 50;
  --z-8: 2147483647;

  /* ── Breakpoints ── */
  --breakpoint-xs: 413px;
  --breakpoint-sm: 767px;
  --breakpoint-md: 1023px;
  --breakpoint-lg: 1279px;
  --breakpoint-xl: 1599px;
  --breakpoint-2xl: 1919px;

  /* ── Opacity ── */
  --opacity-10: 0.1;
  --opacity-30: 0.3;
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
    "source": "https://neon.com/",
    "title": "Neon Serverless Postgres — Ship faster",
    "generatedAt": "2026-04-18T18:50:10.470Z"
  },
  "core": {
    "color": {
      "white": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×9089"
      },
      "dark-green": {
        "$value": "#2C6D4C",
        "$type": "color",
        "$description": "background · ×1800"
      },
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "background · ×905"
      },
      "mid-gray": {
        "$value": "#94979E",
        "$type": "color",
        "$description": "background · ×204"
      },
      "mid-gray-2": {
        "$value": "#797D86",
        "$type": "color",
        "$description": "text · ×118"
      },
      "light-gray": {
        "$value": "#C9CBCF",
        "$type": "color",
        "$description": "text · ×80"
      },
      "dark-gray": {
        "$value": "#242628",
        "$type": "color",
        "$description": "text · ×76"
      },
      "cyan": {
        "$value": "#34D59A",
        "$type": "color",
        "$description": "background · ×46"
      },
      "dark-gray-2": {
        "$value": "#61646B",
        "$type": "color",
        "$description": "text · ×43"
      },
      "dark-gray-3": {
        "$value": "#303236",
        "$type": "color",
        "$description": "background · ×41"
      },
      "mid-gray-3": {
        "$value": "#AFB1B6",
        "$type": "color",
        "$description": "background · ×36"
      },
      "light-gray-2": {
        "$value": "#E4E5E7",
        "$type": "color",
        "$description": "text · ×22"
      },
      "cyan-2": {
        "$value": "#00E599",
        "$type": "color",
        "$description": "background · ×17"
      },
      "red": {
        "$value": "#FF3621",
        "$type": "color",
        "$description": "text · ×15"
      },
      "dark-cyan": {
        "$value": "#285D49",
        "$type": "color",
        "$description": "text · ×12"
      },
      "dark-gray-4": {
        "$value": "#18191B",
        "$type": "color",
        "$description": "background · ×9"
      },
      "dark-gray-5": {
        "$value": "#1A1A1A",
        "$type": "color",
        "$description": "text · ×6"
      },
      "light-orange": {
        "$value": "#F7B983",
        "$type": "color",
        "$description": "text · ×6"
      },
      "light-blue": {
        "$value": "#94B5F7",
        "$type": "color",
        "$description": "text · ×6"
      },
      "dark-gray-6": {
        "$value": "#131415",
        "$type": "color",
        "$description": "text · ×4"
      },
      "light-gray-3": {
        "$value": "#E4F1EB",
        "$type": "color",
        "$description": "background · ×4"
      },
      "cyan-3": {
        "$value": "#37C38F",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "black-2": {
        "$value": "#0C0D0D",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-gray-7": {
        "$value": "#494B50",
        "$type": "color",
        "$description": "text · ×2"
      },
      "white-2": {
        "$value": "#F9FAFA",
        "$type": "color",
        "$description": "text · ×2"
      },
      "light-cyan": {
        "$value": "#CAE6D9",
        "$type": "color",
        "$description": "background · ×1"
      },
      "dark-gray-8": {
        "$value": "#111215",
        "$type": "color",
        "$description": "background · ×1"
      },
      "white-3": {
        "$value": "#F5FFFF",
        "$type": "color",
        "$description": "border · ×1"
      },
      "cyan-4": {
        "$value": "rgba(57, 165, 125, 0.6)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-gray-9": {
        "$value": "#151617",
        "$type": "color",
        "$description": "background · ×1"
      },
      "black-3": {
        "$value": "#0A0A0B",
        "$type": "color",
        "$description": "background · ×1"
      }
    },
    "fontSize": {
      "font-size-2xs": {
        "$value": "9px",
        "$type": "dimension"
      },
      "font-size-xs": {
        "$value": "10px",
        "$type": "dimension"
      },
      "font-size-sm": {
        "$value": "11px",
        "$type": "dimension"
      },
      "font-size-base": {
        "$value": "12px",
        "$type": "dimension"
      },
      "font-size-lg": {
        "$value": "13px",
        "$type": "dimension"
      },
      "font-size-xl": {
        "$value": "14px",
        "$type": "dimension"
      },
      "font-size-2xl": {
        "$value": "15px",
        "$type": "dimension"
      },
      "font-size-3xl": {
        "$value": "16px",
        "$type": "dimension"
      },
      "font-size-4xl": {
        "$value": "18px",
        "$type": "dimension"
      },
      "font-size-5xl": {
        "$value": "20px",
        "$type": "dimension"
      },
      "font-size-6xl": {
        "$value": "24px",
        "$type": "dimension"
      },
      "font-size-36px": {
        "$value": "36px",
        "$type": "dimension"
      },
      "font-size-40px": {
        "$value": "40px",
        "$type": "dimension"
      },
      "font-size-52px": {
        "$value": "52px",
        "$type": "dimension"
      },
      "font-size-64px": {
        "$value": "64px",
        "$type": "dimension"
      },
      "font-size-72px": {
        "$value": "72px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "Inter",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "GeistMono",
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
      }
    },
    "lineHeight": {
      "line-height-tight": {
        "$value": "9px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "10px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "11px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "12px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "13px",
        "$type": "dimension"
      },
      "line-height-lh-6": {
        "$value": "13.5px",
        "$type": "dimension"
      },
      "line-height-lh-7": {
        "$value": "15px",
        "$type": "dimension"
      },
      "line-height-lh-8": {
        "$value": "16px",
        "$type": "dimension"
      },
      "line-height-lh-9": {
        "$value": "16.875px",
        "$type": "dimension"
      },
      "line-height-lh-10": {
        "$value": "18px",
        "$type": "dimension"
      },
      "line-height-lh-11": {
        "$value": "18.75px",
        "$type": "dimension"
      },
      "line-height-lh-12": {
        "$value": "20.625px",
        "$type": "dimension"
      },
      "line-height-lh-13": {
        "$value": "22px",
        "$type": "dimension"
      },
      "line-height-lh-14": {
        "$value": "22.5px",
        "$type": "dimension"
      },
      "line-height-lh-15": {
        "$value": "24px",
        "$type": "dimension"
      },
      "line-height-lh-16": {
        "$value": "24.75px",
        "$type": "dimension"
      },
      "line-height-lh-17": {
        "$value": "27px",
        "$type": "dimension"
      },
      "line-height-lh-18": {
        "$value": "27.5px",
        "$type": "dimension"
      },
      "line-height-lh-19": {
        "$value": "30px",
        "$type": "dimension"
      },
      "line-height-lh-20": {
        "$value": "33px",
        "$type": "dimension"
      },
      "line-height-lh-21": {
        "$value": "40.5px",
        "$type": "dimension"
      },
      "line-height-lh-22": {
        "$value": "45px",
        "$type": "dimension"
      },
      "line-height-lh-23": {
        "$value": "58.5px",
        "$type": "dimension"
      },
      "line-height-lh-24": {
        "$value": "64px",
        "$type": "dimension"
      },
      "line-height-lh-25": {
        "$value": "72px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "-2.88px",
        "$type": "dimension"
      },
      "letter-spacing-normal": {
        "$value": "-2.56px",
        "$type": "dimension"
      },
      "letter-spacing-wide": {
        "$value": "-2.08px",
        "$type": "dimension"
      },
      "letter-spacing-wider": {
        "$value": "-1.6px",
        "$type": "dimension"
      },
      "letter-spacing-widest": {
        "$value": "-1.44px",
        "$type": "dimension"
      },
      "letter-spacing-ls-6": {
        "$value": "-0.96px",
        "$type": "dimension"
      },
      "letter-spacing-ls-7": {
        "$value": "-0.6px",
        "$type": "dimension"
      },
      "letter-spacing-ls-8": {
        "$value": "-0.5px",
        "$type": "dimension"
      },
      "letter-spacing-ls-9": {
        "$value": "-0.48px",
        "$type": "dimension"
      },
      "letter-spacing-ls-10": {
        "$value": "-0.4px",
        "$type": "dimension"
      },
      "letter-spacing-ls-11": {
        "$value": "-0.375px",
        "$type": "dimension"
      },
      "letter-spacing-ls-12": {
        "$value": "-0.36px",
        "$type": "dimension"
      },
      "letter-spacing-ls-13": {
        "$value": "-0.32px",
        "$type": "dimension"
      },
      "letter-spacing-ls-14": {
        "$value": "-0.3px",
        "$type": "dimension"
      },
      "letter-spacing-ls-15": {
        "$value": "-0.28px",
        "$type": "dimension"
      },
      "letter-spacing-ls-16": {
        "$value": "-0.26px",
        "$type": "dimension"
      },
      "letter-spacing-ls-17": {
        "$value": "-0.24px",
        "$type": "dimension"
      },
      "letter-spacing-ls-18": {
        "$value": "-0.22px",
        "$type": "dimension"
      },
      "letter-spacing-ls-19": {
        "$value": "-0.18px",
        "$type": "dimension"
      },
      "letter-spacing-ls-20": {
        "$value": "-0.15px",
        "$type": "dimension"
      },
      "letter-spacing-ls-21": {
        "$value": "-0.13px",
        "$type": "dimension"
      },
      "letter-spacing-ls-22": {
        "$value": "-0.1px",
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
        "$value": "4px",
        "$type": "dimension"
      },
      "space-4": {
        "$value": "6px",
        "$type": "dimension"
      },
      "space-5": {
        "$value": "7px",
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
        "$value": "15px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "16px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "54.5px",
        "$type": "dimension"
      },
      "space-32": {
        "$value": "128px",
        "$type": "dimension"
      },
      "space-40": {
        "$value": "184px",
        "$type": "dimension"
      },
      "space-48": {
        "$value": "25px",
        "$type": "dimension"
      },
      "space-64": {
        "$value": "26px",
        "$type": "dimension"
      },
      "space-80": {
        "$value": "28px",
        "$type": "dimension"
      },
      "space-96": {
        "$value": "30px",
        "$type": "dimension"
      },
      "space-128": {
        "$value": "32px",
        "$type": "dimension"
      },
      "space-160": {
        "$value": "36px",
        "$type": "dimension"
      },
      "space-192": {
        "$value": "40px",
        "$type": "dimension"
      },
      "space-256": {
        "$value": "44px",
        "$type": "dimension"
      },
      "space-23": {
        "$value": "48px",
        "$type": "dimension"
      },
      "space-25": {
        "$value": "56px",
        "$type": "dimension"
      },
      "space-26": {
        "$value": "64px",
        "$type": "dimension"
      },
      "space-27": {
        "$value": "80px",
        "$type": "dimension"
      },
      "space-28": {
        "$value": "98px",
        "$type": "dimension"
      },
      "space-29": {
        "$value": "104px",
        "$type": "dimension"
      },
      "space-30": {
        "$value": "108px",
        "$type": "dimension"
      },
      "space-31": {
        "$value": "120px",
        "$type": "dimension"
      },
      "space-33": {
        "$value": "135px",
        "$type": "dimension"
      },
      "space-34": {
        "$value": "136px",
        "$type": "dimension"
      },
      "space-35": {
        "$value": "137px",
        "$type": "dimension"
      },
      "space-36": {
        "$value": "143px",
        "$type": "dimension"
      },
      "space-37": {
        "$value": "160px",
        "$type": "dimension"
      },
      "space-38": {
        "$value": "174px",
        "$type": "dimension"
      },
      "space-39": {
        "$value": "176px",
        "$type": "dimension"
      },
      "space-41": {
        "$value": "216px",
        "$type": "dimension"
      },
      "space-42": {
        "$value": "246.5px",
        "$type": "dimension"
      },
      "space-43": {
        "$value": "271.055px",
        "$type": "dimension"
      }
    },
    "zIndex": {
      "z-1": {
        "$value": "-10",
        "$type": "number"
      },
      "z-2": {
        "$value": "1",
        "$type": "number"
      },
      "z-3": {
        "$value": "10",
        "$type": "number"
      },
      "z-4": {
        "$value": "20",
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
        "$value": "2147483647",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "413px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "767px",
        "$type": "dimension"
      },
      "breakpoint-md": {
        "$value": "1023px",
        "$type": "dimension"
      },
      "breakpoint-lg": {
        "$value": "1279px",
        "$type": "dimension"
      },
      "breakpoint-xl": {
        "$value": "1599px",
        "$type": "dimension"
      },
      "breakpoint-2xl": {
        "$value": "1919px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
        "$value": "4px",
        "$type": "dimension"
      },
      "radius-md": {
        "$value": "100%",
        "$type": "dimension"
      },
      "radius-lg": {
        "$value": "1.67772e+07px",
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
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.4) 0px 8px 20px 0px",
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
    "opacity-10": {
      "$value": 0.1,
      "$type": "number"
    },
    "opacity-30": {
      "$value": 0.3,
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
