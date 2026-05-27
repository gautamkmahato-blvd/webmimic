# Antimetal — Design System

**Source:** https://antimetal.com/  
**Generated:** 05/05/2026, 21:22:31  
**Extracted:** 58 colors · 40 type tokens · 50 spacing steps · 1 breakpoints · 13 motion tokens

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
| `--color-white` | `#FAFEFF` | hsl(192, 100%, 99%) | ×187 |
| `--color-white-2` | `#FFFFFF` | hsl(0, 0%, 100%) | ×72 |
| `--color-light-cyan-2` | `#DDFFFF` | hsl(180, 100%, 93%) | ×39 |
| `--color-dark-blue-4` | `rgba(12, 38, 77, 0.05)` | hsl(220, 59%, 19%) | ×33 |
| `--color-light-cyan-3` | `#E0F6FF` | hsl(197, 100%, 94%) | ×31 |
| `--color-dark-blue-7` | `rgba(4, 33, 80, 0.04)` | hsl(220, 100%, 15%) | ×12 |
| `--color-white-3` | `#E6FFFF` | hsl(180, 100%, 95%) | ×10 |
| `--color-white-4` | `#F8F9FC` | hsl(225, 40%, 98%) | ×7 |
| `--color-blue-2` | `#0060FF` | hsl(217, 100%, 50%) | ×5 |
| `--color-dark-blue-12` | `#001033` | hsl(221, 100%, 10%) | ×3 |
| `--color-yellow-2` | `#D0F100` | hsl(68, 100%, 47%) | ×3 |
| `--color-light-gray` | `#ECF7E9` | hsl(107, 47%, 94%) | ×3 |
| `--color-orange` | `#FF9B00` | hsl(36, 100%, 50%) | ×2 |
| `--color-purple` | `#9559FF` | hsl(262, 100%, 67%) | ×2 |
| `--color-red-2` | `#EB3441` | hsl(356, 82%, 56%) | ×2 |
| `--color-orange-2` | `#F4A43A` | hsl(34, 89%, 59%) | ×2 |
| `--color-green-2` | `#5ACC5A` | hsl(120, 53%, 58%) | ×2 |
| `--color-dark-blue-20` | `rgba(12, 38, 77, 0.08)` | hsl(217, 71%, 18%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-blue` | `#1B2540` | hsl(224, 41%, 18%) | ×1953 |
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×410 |
| `--color-dark-green` | `#048F42` | hsl(147, 95%, 29%) | ×79 |
| `--color-dark-blue-2` | `rgba(27, 37, 64, 0.64)` | hsl(222, 41%, 18%) | ×61 |
| `--color-dark-blue-3` | `rgba(27, 37, 64, 0.32)` | hsl(225, 40%, 18%) | ×52 |
| `--color-light-cyan` | `#E1F6FF` | hsl(198, 100%, 94%) | ×43 |
| `--color-dark-blue-6` | `rgba(27, 37, 64, 0.72)` | hsl(223, 42%, 18%) | ×16 |
| `--color-light-cyan-4` | `#DFF6FF` | hsl(197, 100%, 94%) | ×8 |
| `--color-dark-blue-9` | `#08122D` | hsl(224, 70%, 10%) | ×6 |
| `--color-light-cyan-6` | `#E1F5FF` | hsl(200, 100%, 94%) | ×6 |
| `--color-green` | `#4C8050` | hsl(125, 25%, 40%) | ×2 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-blue-6` | `#0062FF` | hsl(217, 100%, 50%) | ×1 |

### Shadow Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-blue-5` | `rgba(0, 39, 80, 0.04)` | hsl(200, 100%, 15%) | ×32 |
| `--color-dark-blue-8` | `rgba(0, 39, 80, 0.08)` | hsl(210, 100%, 15%) | ×10 |
| `--color-dark-blue-10` | `rgba(4, 33, 80, 0.06)` | hsl(216, 100%, 17%) | ×5 |
| `--color-dark-blue-13` | `rgba(24, 37, 66, 0.32)` | hsl(222, 44%, 18%) | ×3 |
| `--color-dark-blue-14` | `rgba(24, 37, 66, 0.12)` | hsl(228, 45%, 18%) | ×3 |
| `--color-dark-blue-15` | `rgba(24, 37, 66, 0.44)` | hsl(224, 45%, 18%) | ×3 |
| `--color-light-cyan-9` | `rgba(219, 247, 255, 0.48)` | hsl(193, 100%, 93%) | ×3 |
| `--color-light-cyan-10` | `rgba(219, 247, 255, 0.24)` | hsl(193, 100%, 93%) | ×3 |
| `--color-dark-blue-17` | `rgba(0, 39, 80, 0.1)` | hsl(210, 100%, 15%) | ×2 |

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-blue` | `#8D5CF7` | hsl(259, 91%, 66%) | ×10 |
| `--color-yellow` | `#DBEF01` | hsl(65, 99%, 47%) | ×10 |
| `--color-black-2` | `#090703` | hsl(40, 50%, 2%) | ×10 |
| `--color-light-cyan-5` | `rgba(219, 247, 255, 0.07)` | hsl(200, 100%, 92%) | ×6 |
| `--color-dark-blue-11` | `rgba(12, 38, 77, 0.06)` | hsl(225, 67%, 20%) | ×5 |
| `--color-light-cyan-7` | `rgba(219, 247, 255, 0.2)` | hsl(197, 100%, 93%) | ×3 |
| `--color-light-cyan-8` | `rgba(219, 247, 255, 0.32)` | hsl(195, 100%, 93%) | ×3 |
| `--color-blue-3` | `#005BF6` | hsl(218, 100%, 48%) | ×2 |
| `--color-light-blue` | `#B0C6E9` | hsl(217, 56%, 80%) | ×2 |
| `--color-yellow-3` | `#FECA00` | hsl(48, 100%, 50%) | ×2 |
| `--color-red` | `#FF1C11` | hsl(3, 100%, 53%) | ×2 |
| `--color-pink` | `#FF00EA` | hsl(305, 100%, 50%) | ×2 |
| `--color-light-pink` | `rgba(255, 162, 251, 0.8)` | hsl(303, 100%, 82%) | ×2 |
| `--color-dark-blue-16` | `#0C264D` | hsl(216, 73%, 17%) | ×2 |
| `--color-dark-blue-18` | `rgba(13, 23, 46, 0.2)` | hsl(220, 50%, 12%) | ×2 |
| `--color-blue-4` | `rgba(0, 128, 248, 0.32)` | hsl(209, 100%, 49%) | ×1 |
| `--color-blue-5` | `rgba(95, 189, 247, 0.32)` | hsl(202, 89%, 67%) | ×1 |
| `--color-light-cyan-11` | `rgba(211, 239, 252, 0.32)` | hsl(199, 87%, 91%) | ×1 |

### Other Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-blue-19` | `#3E4452` | hsl(222, 14%, 28%) | ×2 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `abcdFont` |
| `--font-family-2` | `ivarTextFont` |
| `--font-family-3` | `Times` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `13px` |  |
| `--font-size-xs` | `14px` |  |
| `--font-size-sm` | `15px` |  |
| `--font-size-base` | `16px` |  |
| `--font-size-lg` | `17px` |  |
| `--font-size-xl` | `18px` |  |
| `--font-size-2xl` | `20px` |  |
| `--font-size-3xl` | `22px` |  |
| `--font-size-4xl` | `24px` |  |
| `--font-size-5xl` | `28px` |  |
| `--font-size-6xl` | `32px` |  |
| `--font-size-40px` | `40px` |  |
| `--font-size-46px` | `46px` |  |
| `--font-size-48px` | `48px` |  |

### Font Weights

| Token | Weight |
| --- | --- |
| `--font-weight-regular` | `400` |
| `--font-weight-w450` | `450` |
| `--font-weight-w480` | `480` |

### Line Heights

| Token | Value |
| --- | --- |
| `--line-height-tight` | `16px` |
| `--line-height-snug` | `20px` |
| `--line-height-normal` | `22px` |
| `--line-height-relaxed` | `24px` |
| `--line-height-loose` | `26px` |
| `--line-height-lh-6` | `28px` |
| `--line-height-lh-7` | `30px` |
| `--line-height-lh-8` | `40px` |
| `--line-height-lh-9` | `42px` |
| `--line-height-lh-10` | `48px` |
| `--line-height-lh-11` | `56px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `-0.46px` |
| `--letter-spacing-normal` | `-0.42px` |
| `--letter-spacing-wide` | `-0.4px` |
| `--letter-spacing-wider` | `-0.32px` |
| `--letter-spacing-widest` | `-0.24px` |
| `--letter-spacing-ls-6` | `-0.22px` |
| `--letter-spacing-ls-7` | `-0.1px` |
| `--letter-spacing-ls-8` | `-0.09px` |
| `--letter-spacing-ls-9` | `-0.075px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `1px` | ×32 |
| `--space-2` | `2px` | ×57 |
| `--space-3` | `3px` | ×4 |
| `--space-4` | `4px` | ×99 |
| `--space-5` | `6px` | ×50 |
| `--space-6` | `7px` | ×2 |
| `--space-8` | `8px` | ×146 |
| `--space-10` | `10px` | ×32 |
| `--space-12` | `12px` | ×120 |
| `--space-16` | `13px` | ×6 |
| `--space-20` | `14px` | ×9 |
| `--space-24` | `38px` | ×2 |
| `--space-32` | `64px` | ×1 |
| `--space-40` | `124px` | ×1 |
| `--space-48` | `226.5px` | ×2 |
| `--space-64` | `24px` | ×26 |
| `--space-80` | `25px` | ×3 |
| `--space-96` | `27px` | ×2 |
| `--space-128` | `28px` | ×4 |
| `--space-160` | `30px` | ×1 |
| `--space-192` | `31px` | ×6 |
| `--space-256` | `32px` | ×3 |
| `--space-23` | `36.5px` | ×1 |
| `--space-25` | `40px` | ×1 |
| `--space-26` | `44px` | ×3 |
| `--space-27` | `45.5px` | ×1 |
| `--space-28` | `47.5px` | ×6 |
| `--space-29` | `50px` | ×2 |
| `--space-30` | `54px` | ×2 |
| `--space-31` | `56px` | ×4 |
| `--space-33` | `72px` | ×4 |
| `--space-34` | `76px` | ×1 |
| `--space-35` | `78.5px` | ×12 |
| `--space-36` | `80px` | ×1 |
| `--space-37` | `88px` | ×1 |
| `--space-38` | `96px` | ×3 |
| `--space-39` | `120px` | ×1 |
| `--space-41` | `129px` | ×1 |
| `--space-42` | `134px` | ×1 |
| `--space-43` | `144px` | ×1 |
| `--space-44` | `148px` | ×1 |
| `--space-45` | `172px` | ×1 |
| `--space-46` | `196px` | ×1 |
| `--space-47` | `214px` | ×2 |
| `--space-49` | `290px` | ×1 |
| `--space-50` | `316.5px` | ×2 |
| `--space-51` | `321px` | ×1 |
| `--space-52` | `369px` | ×1 |
| `--space-53` | `390.953px` | ×2 |
| `--space-54` | `454px` | ×1 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `1px` | ×54 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `0px 0px 12px 12px` | ×2 |
| `--radius-md` | `2px` | ×5 |
| `--radius-lg` | `4px` | ×1 |
| `--radius-xl` | `6px` | ×8 |
| `--radius-2xl` | `8px` | ×1 |
| `--radius-full` | `14px` | ×21 |
| `--radius-r7` | `16px` | ×15 |
| `--radius-r8` | `16px 16px 0px` | ×2 |
| `--radius-r9` | `20px` | ×4 |
| `--radius-r10` | `28px` | ×2 |
| `--radius-r11` | `60px` | ×22 |
| `--radius-r12` | `720px` | ×1 |
| `--radius-r13` | `1.67772e+07px` | ×196 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 39, 80, 0.08) 0px 6px 16px -3px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px` | ×10 |
| `--shadow-md` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 39, 80, 0.03) 0px 56px 72px -16px, rgba(0, 39, 80, 0.03) 0px 32px 32px -16px, rgba(0, 39, 80, 0.04) 0px 6px 12px -3px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px` | ×6 |
| `--shadow-lg` | `rgba(255, 255, 255, 0.72) 0px 1px 1px 0px inset, rgba(4, 33, 80, 0.02) 0px 8px 16px 0px, rgba(4, 33, 80, 0.03) 0px 4px 12px 0px, rgba(4, 33, 80, 0.06) 0px 1px 2px 0px, rgba(4, 33, 80, 0.04) 0px 0px 0px 1px` | ×5 |
| `--shadow-xl` | `rgba(24, 37, 66, 0.32) 0px 1px 3px 0px, rgba(24, 37, 66, 0.12) 0px 0.5px 0.5px 0px, rgba(24, 37, 66, 0.44) 0px 12px 24px -12px, rgba(219, 247, 255, 0.06) 0px 8px 16px 0px inset, rgba(219, 247, 255, 0.48) 0px 0.5px 0.5px 0px inset, rgba(219, 247, 255, 0.04) 0px -4px 8px 0px inset, rgba(219, 247, 255, 0.24) 0px -0.5px 0.5px 0px inset` | ×3 |
| `--shadow-shadow-5` | `rgba(255, 255, 255, 0.08) 0px 0px 16px 8px inset, rgba(255, 255, 255, 0.08) 0px 0px 8px 4px inset, rgba(255, 255, 255, 0.08) 0px 0px 4px 2px inset, rgba(255, 255, 255, 0.12) 0px 0px 2px 1px inset` | ×3 |
| `--shadow-shadow-6` | `color(srgb 0.878431 0.964706 1 / 0.24) 0px 0.5px 0.5px 0px inset, color(srgb 0.878431 0.964706 1 / 0.24) 0px -0.5px 0.5px 0px inset` | ×2 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.03s` | ×1 |
| `--duration-fast` | `0.06s` | ×1 |
| `--duration-normal` | `0.09s` | ×20 |
| `--duration-slow` | `0.1s` | ×12 |
| `--duration-slower` | `0.12s` | ×1 |
| `--duration-duration-6` | `0.15s` | ×24 |
| `--duration-duration-7` | `0.2s` | ×7 |
| `--duration-duration-8` | `0.25s` | ×2 |
| `--duration-duration-9` | `0.3s` | ×53 |
| `--duration-duration-10` | `0.6s` | ×49 |
| `--duration-duration-11` | `1s` | ×125 |

### Easing Functions

| Token | Value | Usage |
| --- | --- | --- |
| `--easing-linear` | `linear` | ×125 |
| `--easing-ease-out` | `ease-out` | ×5 |

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `-10` |
| `--z-2` | `-1` |
| `--z-3` | `1` |
| `--z-4` | `2` |
| `--z-5` | `10` |
| `--z-6` | `200` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `992px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-4` | `0.04` | ×4 |
| `--opacity-5` | `0.05` | ×1 |
| `--opacity-6` | `0.06` | ×5 |
| `--opacity-8` | `0.08` | ×1 |
| `--opacity-12` | `0.12` | ×3 |
| `--opacity-32` | `0.32` | ×5 |
| `--opacity-40` | `0.4` | ×1 |
| `--opacity-80` | `0.8` | ×2 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-dark-blue` | `--color-white` | 14.93:1 | AAA |
| `--color-dark-blue` | `--color-white-2` | 15.16:1 | AAA |
| `--color-dark-blue` | `--color-light-cyan-2` | 14.31:1 | AAA |
| `--color-dark-blue` | `--color-dark-blue-4` | 1.03:1 | Fail |
| `--color-dark-blue` | `--color-light-cyan-3` | 13.57:1 | AAA |
| `--color-black` | `--color-white` | 20.69:1 | AAA |
| `--color-black` | `--color-white-2` | 21:1 | AAA |
| `--color-black` | `--color-light-cyan-2` | 19.82:1 | AAA |
| `--color-black` | `--color-dark-blue-4` | 1.43:1 | Fail |
| `--color-black` | `--color-light-cyan-3` | 18.8:1 | AAA |
| `--color-dark-green` | `--color-white` | 4.13:1 | AA Large |
| `--color-dark-green` | `--color-white-2` | 4.19:1 | AA Large |
| `--color-dark-green` | `--color-light-cyan-2` | 3.95:1 | AA Large |
| `--color-dark-green` | `--color-dark-blue-4` | 3.51:1 | AA Large |
| `--color-dark-green` | `--color-light-cyan-3` | 3.75:1 | AA Large |
| `--color-dark-blue-2` | `--color-white` | 14.8:1 | AAA |
| `--color-dark-blue-2` | `--color-white-2` | 15.02:1 | AAA |
| `--color-dark-blue-2` | `--color-light-cyan-2` | 14.18:1 | AAA |
| `--color-dark-blue-2` | `--color-dark-blue-4` | 1.02:1 | Fail |
| `--color-dark-blue-2` | `--color-light-cyan-3` | 13.45:1 | AAA |
| `--color-dark-blue-3` | `--color-white` | 14.88:1 | AAA |
| `--color-dark-blue-3` | `--color-white-2` | 15.1:1 | AAA |
| `--color-dark-blue-3` | `--color-light-cyan-2` | 14.26:1 | AAA |
| `--color-dark-blue-3` | `--color-dark-blue-4` | 1.03:1 | Fail |
| `--color-dark-blue-3` | `--color-light-cyan-3` | 13.52:1 | AAA |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — Antimetal
 * Source: https://antimetal.com/
 * Generated: 05/05/2026, 21:22:31
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-dark-blue: #1B2540; /* hsl(224, 41%, 18%) · text */
  --color-black: #000000; /* hsl(0, 0%, 0%) · text */
  --color-white: #FAFEFF; /* hsl(192, 100%, 99%) · background */
  --color-dark-green: #048F42; /* hsl(147, 95%, 29%) · text */
  --color-white-2: #FFFFFF; /* hsl(0, 0%, 100%) · background */
  --color-dark-blue-2: rgba(27, 37, 64, 0.64); /* hsl(222, 41%, 18%) · text */
  --color-dark-blue-3: rgba(27, 37, 64, 0.32); /* hsl(225, 40%, 18%) · text */
  --color-light-cyan: #E1F6FF; /* hsl(198, 100%, 94%) · text */
  --color-light-cyan-2: #DDFFFF; /* hsl(180, 100%, 93%) · background */
  --color-dark-blue-4: rgba(12, 38, 77, 0.05); /* hsl(220, 59%, 19%) · background */
  --color-dark-blue-5: rgba(0, 39, 80, 0.04); /* hsl(200, 100%, 15%) · shadow */
  --color-light-cyan-3: #E0F6FF; /* hsl(197, 100%, 94%) · background */
  --color-dark-blue-6: rgba(27, 37, 64, 0.72); /* hsl(223, 42%, 18%) · text */
  --color-dark-blue-7: rgba(4, 33, 80, 0.04); /* hsl(220, 100%, 15%) · background */
  --color-white-3: #E6FFFF; /* hsl(180, 100%, 95%) · background */
  --color-dark-blue-8: rgba(0, 39, 80, 0.08); /* hsl(210, 100%, 15%) · shadow */
  --color-blue: #8D5CF7; /* hsl(259, 91%, 66%) · fill */
  --color-yellow: #DBEF01; /* hsl(65, 99%, 47%) · fill */
  --color-black-2: #090703; /* hsl(40, 50%, 2%) · fill */
  --color-light-cyan-4: #DFF6FF; /* hsl(197, 100%, 94%) · text */
  --color-white-4: #F8F9FC; /* hsl(225, 40%, 98%) · background */
  --color-dark-blue-9: #08122D; /* hsl(224, 70%, 10%) · text */
  --color-light-cyan-5: rgba(219, 247, 255, 0.07); /* hsl(200, 100%, 92%) · gradient */
  --color-light-cyan-6: #E1F5FF; /* hsl(200, 100%, 94%) · text */
  --color-blue-2: #0060FF; /* hsl(217, 100%, 50%) · background */
  --color-dark-blue-10: rgba(4, 33, 80, 0.06); /* hsl(216, 100%, 17%) · shadow */
  --color-dark-blue-11: rgba(12, 38, 77, 0.06); /* hsl(225, 67%, 20%) · fill */
  --color-dark-blue-12: #001033; /* hsl(221, 100%, 10%) · background */
  --color-light-cyan-7: rgba(219, 247, 255, 0.2); /* hsl(197, 100%, 93%) · gradient */
  --color-light-cyan-8: rgba(219, 247, 255, 0.32); /* hsl(195, 100%, 93%) · gradient */
  --color-dark-blue-13: rgba(24, 37, 66, 0.32); /* hsl(222, 44%, 18%) · shadow */
  --color-dark-blue-14: rgba(24, 37, 66, 0.12); /* hsl(228, 45%, 18%) · shadow */
  --color-dark-blue-15: rgba(24, 37, 66, 0.44); /* hsl(224, 45%, 18%) · shadow */
  --color-light-cyan-9: rgba(219, 247, 255, 0.48); /* hsl(193, 100%, 93%) · shadow */
  --color-light-cyan-10: rgba(219, 247, 255, 0.24); /* hsl(193, 100%, 93%) · shadow */
  --color-yellow-2: #D0F100; /* hsl(68, 100%, 47%) · background */
  --color-light-gray: #ECF7E9; /* hsl(107, 47%, 94%) · background */
  --color-orange: #FF9B00; /* hsl(36, 100%, 50%) · background */
  --color-purple: #9559FF; /* hsl(262, 100%, 67%) · background */
  --color-green: #4C8050; /* hsl(125, 25%, 40%) · text */
  --color-blue-3: #005BF6; /* hsl(218, 100%, 48%) · gradient */
  --color-light-blue: #B0C6E9; /* hsl(217, 56%, 80%) · gradient */
  --color-yellow-3: #FECA00; /* hsl(48, 100%, 50%) · gradient */
  --color-red: #FF1C11; /* hsl(3, 100%, 53%) · gradient */
  --color-pink: #FF00EA; /* hsl(305, 100%, 50%) · gradient */
  --color-light-pink: rgba(255, 162, 251, 0.8); /* hsl(303, 100%, 82%) · gradient */
  --color-red-2: #EB3441; /* hsl(356, 82%, 56%) · background */
  --color-orange-2: #F4A43A; /* hsl(34, 89%, 59%) · background */
  --color-green-2: #5ACC5A; /* hsl(120, 53%, 58%) · background */
  --color-dark-blue-16: #0C264D; /* hsl(216, 73%, 17%) · fill */
  --color-dark-blue-17: rgba(0, 39, 80, 0.1); /* hsl(210, 100%, 15%) · shadow */
  --color-dark-blue-18: rgba(13, 23, 46, 0.2); /* hsl(220, 50%, 12%) · gradient */
  --color-dark-blue-19: #3E4452; /* hsl(222, 14%, 28%) · other */
  --color-dark-blue-20: rgba(12, 38, 77, 0.08); /* hsl(217, 71%, 18%) · background */
  --color-blue-4: rgba(0, 128, 248, 0.32); /* hsl(209, 100%, 49%) · gradient */
  --color-blue-5: rgba(95, 189, 247, 0.32); /* hsl(202, 89%, 67%) · gradient */
  --color-light-cyan-11: rgba(211, 239, 252, 0.32); /* hsl(199, 87%, 91%) · gradient */
  --color-blue-6: #0062FF; /* hsl(217, 100%, 50%) · border */

  /* ── Core: Typography ── */
  --font-size-2xs: 13px;
  --font-size-xs: 14px;
  --font-size-sm: 15px;
  --font-size-base: 16px;
  --font-size-lg: 17px;
  --font-size-xl: 18px;
  --font-size-2xl: 20px;
  --font-size-3xl: 22px;
  --font-size-4xl: 24px;
  --font-size-5xl: 28px;
  --font-size-6xl: 32px;
  --font-size-40px: 40px;
  --font-size-46px: 46px;
  --font-size-48px: 48px;
  --font-family-base: abcdFont;
  --font-family-2: ivarTextFont;
  --font-family-3: Times;
  --font-weight-regular: 400;
  --font-weight-w450: 450;
  --font-weight-w480: 480;
  --line-height-tight: 16px;
  --line-height-snug: 20px;
  --line-height-normal: 22px;
  --line-height-relaxed: 24px;
  --line-height-loose: 26px;
  --line-height-lh-6: 28px;
  --line-height-lh-7: 30px;
  --line-height-lh-8: 40px;
  --line-height-lh-9: 42px;
  --line-height-lh-10: 48px;
  --line-height-lh-11: 56px;
  --letter-spacing-tight: -0.46px;
  --letter-spacing-normal: -0.42px;
  --letter-spacing-wide: -0.4px;
  --letter-spacing-wider: -0.32px;
  --letter-spacing-widest: -0.24px;
  --letter-spacing-ls-6: -0.22px;
  --letter-spacing-ls-7: -0.1px;
  --letter-spacing-ls-8: -0.09px;
  --letter-spacing-ls-9: -0.075px;

  /* ── Layout: Spacing ── */
  --space-1: 1px;
  --space-2: 2px;
  --space-3: 3px;
  --space-4: 4px;
  --space-5: 6px;
  --space-6: 7px;
  --space-8: 8px;
  --space-10: 10px;
  --space-12: 12px;
  --space-16: 13px;
  --space-20: 14px;
  --space-24: 38px;
  --space-32: 64px;
  --space-40: 124px;
  --space-48: 226.5px;
  --space-64: 24px;
  --space-80: 25px;
  --space-96: 27px;
  --space-128: 28px;
  --space-160: 30px;
  --space-192: 31px;
  --space-256: 32px;
  --space-23: 36.5px;
  --space-25: 40px;
  --space-26: 44px;
  --space-27: 45.5px;
  --space-28: 47.5px;
  --space-29: 50px;
  --space-30: 54px;
  --space-31: 56px;
  --space-33: 72px;
  --space-34: 76px;
  --space-35: 78.5px;
  --space-36: 80px;
  --space-37: 88px;
  --space-38: 96px;
  --space-39: 120px;
  --space-41: 129px;
  --space-42: 134px;
  --space-43: 144px;
  --space-44: 148px;
  --space-45: 172px;
  --space-46: 196px;
  --space-47: 214px;
  --space-49: 290px;
  --space-50: 316.5px;
  --space-51: 321px;
  --space-52: 369px;
  --space-53: 390.953px;
  --space-54: 454px;

  /* ── Borders ── */
  --border-width-hairline: 1px;
  --radius-sm: 0px 0px 12px 12px;
  --radius-md: 2px;
  --radius-lg: 4px;
  --radius-xl: 6px;
  --radius-2xl: 8px;
  --radius-full: 14px;
  --radius-r7: 16px;
  --radius-r8: 16px 16px 0px;
  --radius-r9: 20px;
  --radius-r10: 28px;
  --radius-r11: 60px;
  --radius-r12: 720px;
  --radius-r13: 1.67772e+07px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 39, 80, 0.08) 0px 6px 16px -3px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px;
  --shadow-md: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 39, 80, 0.03) 0px 56px 72px -16px, rgba(0, 39, 80, 0.03) 0px 32px 32px -16px, rgba(0, 39, 80, 0.04) 0px 6px 12px -3px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px;
  --shadow-lg: rgba(255, 255, 255, 0.72) 0px 1px 1px 0px inset, rgba(4, 33, 80, 0.02) 0px 8px 16px 0px, rgba(4, 33, 80, 0.03) 0px 4px 12px 0px, rgba(4, 33, 80, 0.06) 0px 1px 2px 0px, rgba(4, 33, 80, 0.04) 0px 0px 0px 1px;
  --shadow-xl: rgba(24, 37, 66, 0.32) 0px 1px 3px 0px, rgba(24, 37, 66, 0.12) 0px 0.5px 0.5px 0px, rgba(24, 37, 66, 0.44) 0px 12px 24px -12px, rgba(219, 247, 255, 0.06) 0px 8px 16px 0px inset, rgba(219, 247, 255, 0.48) 0px 0.5px 0.5px 0px inset, rgba(219, 247, 255, 0.04) 0px -4px 8px 0px inset, rgba(219, 247, 255, 0.24) 0px -0.5px 0.5px 0px inset;
  --shadow-shadow-5: rgba(255, 255, 255, 0.08) 0px 0px 16px 8px inset, rgba(255, 255, 255, 0.08) 0px 0px 8px 4px inset, rgba(255, 255, 255, 0.08) 0px 0px 4px 2px inset, rgba(255, 255, 255, 0.12) 0px 0px 2px 1px inset;
  --shadow-shadow-6: color(srgb 0.878431 0.964706 1 / 0.24) 0px 0.5px 0.5px 0px inset, color(srgb 0.878431 0.964706 1 / 0.24) 0px -0.5px 0.5px 0px inset;

  /* ── Motion ── */
  --duration-instant: 0.03s;
  --duration-fast: 0.06s;
  --duration-normal: 0.09s;
  --duration-slow: 0.1s;
  --duration-slower: 0.12s;
  --duration-duration-6: 0.15s;
  --duration-duration-7: 0.2s;
  --duration-duration-8: 0.25s;
  --duration-duration-9: 0.3s;
  --duration-duration-10: 0.6s;
  --duration-duration-11: 1s;
  --easing-linear: linear;
  --easing-ease-out: ease-out;

  /* ── Layout: Z-Index ── */
  --z-1: -10;
  --z-2: -1;
  --z-3: 1;
  --z-4: 2;
  --z-5: 10;
  --z-6: 200;

  /* ── Breakpoints ── */
  --breakpoint-xs: 992px;

  /* ── Opacity ── */
  --opacity-4: 0.04;
  --opacity-5: 0.05;
  --opacity-6: 0.06;
  --opacity-8: 0.08;
  --opacity-12: 0.12;
  --opacity-32: 0.32;
  --opacity-40: 0.4;
  --opacity-80: 0.8;
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://antimetal.com/",
    "title": "Antimetal",
    "generatedAt": "2026-05-05T15:52:31.814Z"
  },
  "core": {
    "color": {
      "dark-blue": {
        "$value": "#1B2540",
        "$type": "color",
        "$description": "text · ×1953"
      },
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "text · ×410"
      },
      "white": {
        "$value": "#FAFEFF",
        "$type": "color",
        "$description": "background · ×187"
      },
      "dark-green": {
        "$value": "#048F42",
        "$type": "color",
        "$description": "text · ×79"
      },
      "white-2": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×72"
      },
      "dark-blue-2": {
        "$value": "rgba(27, 37, 64, 0.64)",
        "$type": "color",
        "$description": "text · ×61"
      },
      "dark-blue-3": {
        "$value": "rgba(27, 37, 64, 0.32)",
        "$type": "color",
        "$description": "text · ×52"
      },
      "light-cyan": {
        "$value": "#E1F6FF",
        "$type": "color",
        "$description": "text · ×43"
      },
      "light-cyan-2": {
        "$value": "#DDFFFF",
        "$type": "color",
        "$description": "background · ×39"
      },
      "dark-blue-4": {
        "$value": "rgba(12, 38, 77, 0.05)",
        "$type": "color",
        "$description": "background · ×33"
      },
      "dark-blue-5": {
        "$value": "rgba(0, 39, 80, 0.04)",
        "$type": "color",
        "$description": "shadow · ×32"
      },
      "light-cyan-3": {
        "$value": "#E0F6FF",
        "$type": "color",
        "$description": "background · ×31"
      },
      "dark-blue-6": {
        "$value": "rgba(27, 37, 64, 0.72)",
        "$type": "color",
        "$description": "text · ×16"
      },
      "dark-blue-7": {
        "$value": "rgba(4, 33, 80, 0.04)",
        "$type": "color",
        "$description": "background · ×12"
      },
      "white-3": {
        "$value": "#E6FFFF",
        "$type": "color",
        "$description": "background · ×10"
      },
      "dark-blue-8": {
        "$value": "rgba(0, 39, 80, 0.08)",
        "$type": "color",
        "$description": "shadow · ×10"
      },
      "blue": {
        "$value": "#8D5CF7",
        "$type": "color",
        "$description": "fill · ×10"
      },
      "yellow": {
        "$value": "#DBEF01",
        "$type": "color",
        "$description": "fill · ×10"
      },
      "black-2": {
        "$value": "#090703",
        "$type": "color",
        "$description": "fill · ×10"
      },
      "light-cyan-4": {
        "$value": "#DFF6FF",
        "$type": "color",
        "$description": "text · ×8"
      },
      "white-4": {
        "$value": "#F8F9FC",
        "$type": "color",
        "$description": "background · ×7"
      },
      "dark-blue-9": {
        "$value": "#08122D",
        "$type": "color",
        "$description": "text · ×6"
      },
      "light-cyan-5": {
        "$value": "rgba(219, 247, 255, 0.07)",
        "$type": "color",
        "$description": "gradient · ×6"
      },
      "light-cyan-6": {
        "$value": "#E1F5FF",
        "$type": "color",
        "$description": "text · ×6"
      },
      "blue-2": {
        "$value": "#0060FF",
        "$type": "color",
        "$description": "background · ×5"
      },
      "dark-blue-10": {
        "$value": "rgba(4, 33, 80, 0.06)",
        "$type": "color",
        "$description": "shadow · ×5"
      },
      "dark-blue-11": {
        "$value": "rgba(12, 38, 77, 0.06)",
        "$type": "color",
        "$description": "fill · ×5"
      },
      "dark-blue-12": {
        "$value": "#001033",
        "$type": "color",
        "$description": "background · ×3"
      },
      "light-cyan-7": {
        "$value": "rgba(219, 247, 255, 0.2)",
        "$type": "color",
        "$description": "gradient · ×3"
      },
      "light-cyan-8": {
        "$value": "rgba(219, 247, 255, 0.32)",
        "$type": "color",
        "$description": "gradient · ×3"
      },
      "dark-blue-13": {
        "$value": "rgba(24, 37, 66, 0.32)",
        "$type": "color",
        "$description": "shadow · ×3"
      },
      "dark-blue-14": {
        "$value": "rgba(24, 37, 66, 0.12)",
        "$type": "color",
        "$description": "shadow · ×3"
      },
      "dark-blue-15": {
        "$value": "rgba(24, 37, 66, 0.44)",
        "$type": "color",
        "$description": "shadow · ×3"
      },
      "light-cyan-9": {
        "$value": "rgba(219, 247, 255, 0.48)",
        "$type": "color",
        "$description": "shadow · ×3"
      },
      "light-cyan-10": {
        "$value": "rgba(219, 247, 255, 0.24)",
        "$type": "color",
        "$description": "shadow · ×3"
      },
      "yellow-2": {
        "$value": "#D0F100",
        "$type": "color",
        "$description": "background · ×3"
      },
      "light-gray": {
        "$value": "#ECF7E9",
        "$type": "color",
        "$description": "background · ×3"
      },
      "orange": {
        "$value": "#FF9B00",
        "$type": "color",
        "$description": "background · ×2"
      },
      "purple": {
        "$value": "#9559FF",
        "$type": "color",
        "$description": "background · ×2"
      },
      "green": {
        "$value": "#4C8050",
        "$type": "color",
        "$description": "text · ×2"
      },
      "blue-3": {
        "$value": "#005BF6",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "light-blue": {
        "$value": "#B0C6E9",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "yellow-3": {
        "$value": "#FECA00",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "red": {
        "$value": "#FF1C11",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "pink": {
        "$value": "#FF00EA",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "light-pink": {
        "$value": "rgba(255, 162, 251, 0.8)",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "red-2": {
        "$value": "#EB3441",
        "$type": "color",
        "$description": "background · ×2"
      },
      "orange-2": {
        "$value": "#F4A43A",
        "$type": "color",
        "$description": "background · ×2"
      },
      "green-2": {
        "$value": "#5ACC5A",
        "$type": "color",
        "$description": "background · ×2"
      },
      "dark-blue-16": {
        "$value": "#0C264D",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-blue-17": {
        "$value": "rgba(0, 39, 80, 0.1)",
        "$type": "color",
        "$description": "shadow · ×2"
      },
      "dark-blue-18": {
        "$value": "rgba(13, 23, 46, 0.2)",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "dark-blue-19": {
        "$value": "#3E4452",
        "$type": "color",
        "$description": "other · ×2"
      },
      "dark-blue-20": {
        "$value": "rgba(12, 38, 77, 0.08)",
        "$type": "color",
        "$description": "background · ×1"
      },
      "blue-4": {
        "$value": "rgba(0, 128, 248, 0.32)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "blue-5": {
        "$value": "rgba(95, 189, 247, 0.32)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-cyan-11": {
        "$value": "rgba(211, 239, 252, 0.32)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "blue-6": {
        "$value": "#0062FF",
        "$type": "color",
        "$description": "border · ×1"
      }
    },
    "fontSize": {
      "font-size-2xs": {
        "$value": "13px",
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
        "$value": "17px",
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
        "$value": "22px",
        "$type": "dimension"
      },
      "font-size-4xl": {
        "$value": "24px",
        "$type": "dimension"
      },
      "font-size-5xl": {
        "$value": "28px",
        "$type": "dimension"
      },
      "font-size-6xl": {
        "$value": "32px",
        "$type": "dimension"
      },
      "font-size-40px": {
        "$value": "40px",
        "$type": "dimension"
      },
      "font-size-46px": {
        "$value": "46px",
        "$type": "dimension"
      },
      "font-size-48px": {
        "$value": "48px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "abcdFont",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "ivarTextFont",
        "$type": "fontFamily"
      },
      "font-family-3": {
        "$value": "Times",
        "$type": "fontFamily"
      }
    },
    "fontWeight": {
      "font-weight-regular": {
        "$value": "400",
        "$type": "fontWeight"
      },
      "font-weight-w450": {
        "$value": "450",
        "$type": "fontWeight"
      },
      "font-weight-w480": {
        "$value": "480",
        "$type": "fontWeight"
      }
    },
    "lineHeight": {
      "line-height-tight": {
        "$value": "16px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "20px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "22px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "24px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "26px",
        "$type": "dimension"
      },
      "line-height-lh-6": {
        "$value": "28px",
        "$type": "dimension"
      },
      "line-height-lh-7": {
        "$value": "30px",
        "$type": "dimension"
      },
      "line-height-lh-8": {
        "$value": "40px",
        "$type": "dimension"
      },
      "line-height-lh-9": {
        "$value": "42px",
        "$type": "dimension"
      },
      "line-height-lh-10": {
        "$value": "48px",
        "$type": "dimension"
      },
      "line-height-lh-11": {
        "$value": "56px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "-0.46px",
        "$type": "dimension"
      },
      "letter-spacing-normal": {
        "$value": "-0.42px",
        "$type": "dimension"
      },
      "letter-spacing-wide": {
        "$value": "-0.4px",
        "$type": "dimension"
      },
      "letter-spacing-wider": {
        "$value": "-0.32px",
        "$type": "dimension"
      },
      "letter-spacing-widest": {
        "$value": "-0.24px",
        "$type": "dimension"
      },
      "letter-spacing-ls-6": {
        "$value": "-0.22px",
        "$type": "dimension"
      },
      "letter-spacing-ls-7": {
        "$value": "-0.1px",
        "$type": "dimension"
      },
      "letter-spacing-ls-8": {
        "$value": "-0.09px",
        "$type": "dimension"
      },
      "letter-spacing-ls-9": {
        "$value": "-0.075px",
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
        "$value": "4px",
        "$type": "dimension"
      },
      "space-5": {
        "$value": "6px",
        "$type": "dimension"
      },
      "space-6": {
        "$value": "7px",
        "$type": "dimension"
      },
      "space-8": {
        "$value": "8px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "10px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "12px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "13px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "14px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "38px",
        "$type": "dimension"
      },
      "space-32": {
        "$value": "64px",
        "$type": "dimension"
      },
      "space-40": {
        "$value": "124px",
        "$type": "dimension"
      },
      "space-48": {
        "$value": "226.5px",
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
        "$value": "27px",
        "$type": "dimension"
      },
      "space-128": {
        "$value": "28px",
        "$type": "dimension"
      },
      "space-160": {
        "$value": "30px",
        "$type": "dimension"
      },
      "space-192": {
        "$value": "31px",
        "$type": "dimension"
      },
      "space-256": {
        "$value": "32px",
        "$type": "dimension"
      },
      "space-23": {
        "$value": "36.5px",
        "$type": "dimension"
      },
      "space-25": {
        "$value": "40px",
        "$type": "dimension"
      },
      "space-26": {
        "$value": "44px",
        "$type": "dimension"
      },
      "space-27": {
        "$value": "45.5px",
        "$type": "dimension"
      },
      "space-28": {
        "$value": "47.5px",
        "$type": "dimension"
      },
      "space-29": {
        "$value": "50px",
        "$type": "dimension"
      },
      "space-30": {
        "$value": "54px",
        "$type": "dimension"
      },
      "space-31": {
        "$value": "56px",
        "$type": "dimension"
      },
      "space-33": {
        "$value": "72px",
        "$type": "dimension"
      },
      "space-34": {
        "$value": "76px",
        "$type": "dimension"
      },
      "space-35": {
        "$value": "78.5px",
        "$type": "dimension"
      },
      "space-36": {
        "$value": "80px",
        "$type": "dimension"
      },
      "space-37": {
        "$value": "88px",
        "$type": "dimension"
      },
      "space-38": {
        "$value": "96px",
        "$type": "dimension"
      },
      "space-39": {
        "$value": "120px",
        "$type": "dimension"
      },
      "space-41": {
        "$value": "129px",
        "$type": "dimension"
      },
      "space-42": {
        "$value": "134px",
        "$type": "dimension"
      },
      "space-43": {
        "$value": "144px",
        "$type": "dimension"
      },
      "space-44": {
        "$value": "148px",
        "$type": "dimension"
      },
      "space-45": {
        "$value": "172px",
        "$type": "dimension"
      },
      "space-46": {
        "$value": "196px",
        "$type": "dimension"
      },
      "space-47": {
        "$value": "214px",
        "$type": "dimension"
      },
      "space-49": {
        "$value": "290px",
        "$type": "dimension"
      },
      "space-50": {
        "$value": "316.5px",
        "$type": "dimension"
      },
      "space-51": {
        "$value": "321px",
        "$type": "dimension"
      },
      "space-52": {
        "$value": "369px",
        "$type": "dimension"
      },
      "space-53": {
        "$value": "390.953px",
        "$type": "dimension"
      },
      "space-54": {
        "$value": "454px",
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
        "$value": "2",
        "$type": "number"
      },
      "z-5": {
        "$value": "10",
        "$type": "number"
      },
      "z-6": {
        "$value": "200",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "992px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
        "$value": "0px 0px 12px 12px",
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
        "$value": "6px",
        "$type": "dimension"
      },
      "radius-2xl": {
        "$value": "8px",
        "$type": "dimension"
      },
      "radius-full": {
        "$value": "14px",
        "$type": "dimension"
      },
      "radius-r7": {
        "$value": "16px",
        "$type": "dimension"
      },
      "radius-r8": {
        "$value": "16px 16px 0px",
        "$type": "dimension"
      },
      "radius-r9": {
        "$value": "20px",
        "$type": "dimension"
      },
      "radius-r10": {
        "$value": "28px",
        "$type": "dimension"
      },
      "radius-r11": {
        "$value": "60px",
        "$type": "dimension"
      },
      "radius-r12": {
        "$value": "720px",
        "$type": "dimension"
      },
      "radius-r13": {
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
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 39, 80, 0.08) 0px 6px 16px -3px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px",
        "$type": "shadow"
      },
      "shadow-md": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 39, 80, 0.03) 0px 56px 72px -16px, rgba(0, 39, 80, 0.03) 0px 32px 32px -16px, rgba(0, 39, 80, 0.04) 0px 6px 12px -3px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px",
        "$type": "shadow"
      },
      "shadow-lg": {
        "$value": "rgba(255, 255, 255, 0.72) 0px 1px 1px 0px inset, rgba(4, 33, 80, 0.02) 0px 8px 16px 0px, rgba(4, 33, 80, 0.03) 0px 4px 12px 0px, rgba(4, 33, 80, 0.06) 0px 1px 2px 0px, rgba(4, 33, 80, 0.04) 0px 0px 0px 1px",
        "$type": "shadow"
      },
      "shadow-xl": {
        "$value": "rgba(24, 37, 66, 0.32) 0px 1px 3px 0px, rgba(24, 37, 66, 0.12) 0px 0.5px 0.5px 0px, rgba(24, 37, 66, 0.44) 0px 12px 24px -12px, rgba(219, 247, 255, 0.06) 0px 8px 16px 0px inset, rgba(219, 247, 255, 0.48) 0px 0.5px 0.5px 0px inset, rgba(219, 247, 255, 0.04) 0px -4px 8px 0px inset, rgba(219, 247, 255, 0.24) 0px -0.5px 0.5px 0px inset",
        "$type": "shadow"
      },
      "shadow-shadow-5": {
        "$value": "rgba(255, 255, 255, 0.08) 0px 0px 16px 8px inset, rgba(255, 255, 255, 0.08) 0px 0px 8px 4px inset, rgba(255, 255, 255, 0.08) 0px 0px 4px 2px inset, rgba(255, 255, 255, 0.12) 0px 0px 2px 1px inset",
        "$type": "shadow"
      },
      "shadow-shadow-6": {
        "$value": "color(srgb 0.878431 0.964706 1 / 0.24) 0px 0.5px 0.5px 0px inset, color(srgb 0.878431 0.964706 1 / 0.24) 0px -0.5px 0.5px 0px inset",
        "$type": "shadow"
      }
    }
  },
  "motion": {
    "duration": {
      "duration-instant": {
        "$value": "0.03s",
        "$type": "duration"
      },
      "duration-fast": {
        "$value": "0.06s",
        "$type": "duration"
      },
      "duration-normal": {
        "$value": "0.09s",
        "$type": "duration"
      },
      "duration-slow": {
        "$value": "0.1s",
        "$type": "duration"
      },
      "duration-slower": {
        "$value": "0.12s",
        "$type": "duration"
      },
      "duration-duration-6": {
        "$value": "0.15s",
        "$type": "duration"
      },
      "duration-duration-7": {
        "$value": "0.2s",
        "$type": "duration"
      },
      "duration-duration-8": {
        "$value": "0.25s",
        "$type": "duration"
      },
      "duration-duration-9": {
        "$value": "0.3s",
        "$type": "duration"
      },
      "duration-duration-10": {
        "$value": "0.6s",
        "$type": "duration"
      },
      "duration-duration-11": {
        "$value": "1s",
        "$type": "duration"
      }
    },
    "easing": {
      "easing-linear": {
        "$value": "linear",
        "$type": "cubicBezier"
      },
      "easing-ease-out": {
        "$value": "ease-out",
        "$type": "cubicBezier"
      }
    }
  },
  "opacity": {
    "opacity-4": {
      "$value": 0.04,
      "$type": "number"
    },
    "opacity-5": {
      "$value": 0.05,
      "$type": "number"
    },
    "opacity-6": {
      "$value": 0.06,
      "$type": "number"
    },
    "opacity-8": {
      "$value": 0.08,
      "$type": "number"
    },
    "opacity-12": {
      "$value": 0.12,
      "$type": "number"
    },
    "opacity-32": {
      "$value": 0.32,
      "$type": "number"
    },
    "opacity-40": {
      "$value": 0.4,
      "$type": "number"
    },
    "opacity-80": {
      "$value": 0.8,
      "$type": "number"
    }
  }
}
```
