# Contractbook: Contract Management Software — Design System

**Source:** https://contractbook.com/  
**Generated:** 06/05/2026, 18:17:36  
**Extracted:** 28 colors · 36 type tokens · 47 spacing steps · 12 breakpoints · 9 motion tokens

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
| `--color-dark-gray` | `#141414` | hsl(0, 0%, 8%) | ×4886 |
| `--color-dark-gray-2` | `#1A1A1A` | hsl(0, 0%, 10%) | ×3889 |
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×683 |
| `--color-light-gray` | `#D6D6D6` | hsl(0, 0%, 84%) | ×374 |
| `--color-white` | `#F4F4F4` | hsl(0, 0%, 96%) | ×297 |
| `--color-light-gray-2` | `#F0F0EC` | hsl(60, 12%, 93%) | ×269 |
| `--color-light-gray-3` | `#DBDBDB` | hsl(0, 0%, 86%) | ×246 |
| `--color-white-2` | `#FFFFFF` | hsl(0, 0%, 100%) | ×179 |
| `--color-blue-2` | `#1009F6` | hsl(242, 93%, 50%) | ×61 |
| `--color-blue-3` | `#1032CF` | hsl(229, 86%, 44%) | ×16 |
| `--color-orange` | `#FFBA09` | hsl(43, 100%, 52%) | ×14 |
| `--color-light-cyan` | `#ADD3E5` | hsl(199, 52%, 79%) | ×11 |
| `--color-white-3` | `#F7F7F3` | hsl(60, 20%, 96%) | ×7 |
| `--color-light-pink` | `#E3C7DE` | hsl(311, 33%, 84%) | ×5 |
| `--color-dark-green` | `#304801` | hsl(80, 97%, 14%) | ×2 |
| `--color-white-4` | `#F9F9F6` | hsl(60, 20%, 97%) | ×1 |
| `--color-light-gray-8` | `#DDDDDD` | hsl(0, 0%, 87%) | ×1 |
| `--color-light-red` | `#FFDEDE` | hsl(0, 100%, 94%) | ×1 |
| `--color-dark-gray-4` | `rgba(26, 26, 26, 0.4)` | hsl(0, 0%, 10%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-mid-gray` | `#999999` | hsl(0, 0%, 60%) | ×492 |
| `--color-light-gray-4` | `#D4D4D0` | hsl(60, 4%, 82%) | ×122 |
| `--color-blue` | `#2A4EEF` | hsl(229, 86%, 55%) | ×102 |
| `--color-dark-gray-3` | `#222222` | hsl(0, 0%, 13%) | ×24 |
| `--color-mid-gray-3` | `#6D6868` | hsl(0, 2%, 42%) | ×8 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray-5` | `#B3B3B3` | hsl(0, 0%, 70%) | ×8 |
| `--color-light-gray-6` | `#CCCCCC` | hsl(0, 0%, 80%) | ×2 |
| `--color-light-gray-7` | `#C1C1C1` | hsl(0, 0%, 76%) | ×1 |

### Shadow Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-mid-gray-2` | `#888888` | hsl(0, 0%, 53%) | ×247 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `sans-serif` |
| `--font-family-2` | `Abcwhyte` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `10.5px` |  |
| `--font-size-xs` | `12px` |  |
| `--font-size-sm` | `12.25px` |  |
| `--font-size-base` | `12.257px` |  |
| `--font-size-lg` | `14px` |  |
| `--font-size-xl` | `15px` |  |
| `--font-size-2xl` | `15.75px` |  |
| `--font-size-3xl` | `24.5px` |  |
| `--font-size-4xl` | `28px` |  |
| `--font-size-5xl` | `31.5px` |  |
| `--font-size-6xl` | `32px` |  |
| `--font-size-48px` | `48px` |  |

### Font Weights

| Token | Weight |
| --- | --- |
| `--font-weight-regular` | `400` |
| `--font-weight-semibold` | `600` |
| `--font-weight-bold` | `700` |

### Line Heights

| Token | Value |
| --- | --- |
| `--line-height-tight` | `12.25px` |
| `--line-height-snug` | `14px` |
| `--line-height-normal` | `14.7px` |
| `--line-height-relaxed` | `17.15px` |
| `--line-height-loose` | `17.5px` |
| `--line-height-lh-6` | `19.6px` |
| `--line-height-lh-7` | `21px` |
| `--line-height-lh-8` | `22.05px` |
| `--line-height-lh-9` | `22.5px` |
| `--line-height-lh-10` | `23.625px` |
| `--line-height-lh-11` | `31.85px` |
| `--line-height-lh-12` | `36.4px` |
| `--line-height-lh-13` | `40.95px` |
| `--line-height-lh-14` | `41.6px` |
| `--line-height-lh-15` | `60px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `0.1px` |
| `--letter-spacing-normal` | `0.25px` |
| `--letter-spacing-wide` | `0.3px` |
| `--letter-spacing-wider` | `0.5px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `1px` | ×4 |
| `--space-2` | `3.20312px` | ×2 |
| `--space-3` | `4.9px` | ×6 |
| `--space-4` | `5px` | ×8 |
| `--space-5` | `5.88px` | ×46 |
| `--space-6` | `6px` | ×3 |
| `--space-8` | `6.615px` | ×5 |
| `--space-10` | `7px` | ×40 |
| `--space-12` | `8px` | ×2 |
| `--space-16` | `8.20312px` | ×1 |
| `--space-20` | `9.1px` | ×16 |
| `--space-24` | `22.75px` | ×2 |
| `--space-32` | `42px` | ×9 |
| `--space-40` | `84px` | ×2 |
| `--space-48` | `354.75px` | ×6 |
| `--space-64` | `15px` | ×1 |
| `--space-80` | `15.75px` | ×10 |
| `--space-96` | `17.5px` | ×11 |
| `--space-128` | `17.8125px` | ×2 |
| `--space-160` | `19.25px` | ×2 |
| `--space-192` | `20px` | ×4 |
| `--space-256` | `21px` | ×21 |
| `--space-23` | `22px` | ×12 |
| `--space-25` | `24px` | ×22 |
| `--space-26` | `26.2031px` | ×2 |
| `--space-27` | `28px` | ×83 |
| `--space-28` | `35px` | ×9 |
| `--space-29` | `38.5px` | ×4 |
| `--space-30` | `39.8594px` | ×2 |
| `--space-31` | `40px` | ×2 |
| `--space-33` | `48px` | ×52 |
| `--space-34` | `52px` | ×1 |
| `--space-35` | `52.5px` | ×9 |
| `--space-36` | `56px` | ×16 |
| `--space-37` | `59.5px` | ×33 |
| `--space-38` | `61.9062px` | ×2 |
| `--space-39` | `63px` | ×3 |
| `--space-41` | `96px` | ×4 |
| `--space-42` | `105px` | ×2 |
| `--space-43` | `106px` | ×1 |
| `--space-44` | `128px` | ×1 |
| `--space-45` | `192px` | ×1 |
| `--space-46` | `277.883px` | ×1 |
| `--space-47` | `319.273px` | ×6 |
| `--space-49` | `379.375px` | ×2 |
| `--space-50` | `455.25px` | ×2 |
| `--space-51` | `500px` | ×2 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `1px` | ×1718 |
| `--border-width-thin` | `2px` | ×30 |
| `--border-width-base` | `3px` | ×2 |
| `--border-width-thick` | `4px` | ×1 |
| `--border-width-heavy` | `10px` | ×4 |
| `--border-width-bw-6` | `11px` | ×4 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `0px 24px 24px 0px` | ×2 |
| `--radius-md` | `0px 0px 40px 40px` | ×1 |
| `--radius-lg` | `3.75px` | ×4 |
| `--radius-xl` | `4.375px` | ×8 |
| `--radius-2xl` | `7.5px` | ×37 |
| `--radius-full` | `8px` | ×1 |
| `--radius-r7` | `10.5px` | ×12 |
| `--radius-r8` | `14px` | ×1 |
| `--radius-r9` | `15px` | ×296 |
| `--radius-r10` | `16px` | ×4 |
| `--radius-r11` | `20px` | ×3 |
| `--radius-r12` | `24px` | ×26 |
| `--radius-r13` | `32px` | ×10 |
| `--radius-r14` | `35px` | ×4 |
| `--radius-r15` | `40px` | ×15 |
| `--radius-r16` | `60px` | ×41 |
| `--radius-r17` | `61.25px` | ×4 |
| `--radius-r18` | `96px` | ×1 |
| `--radius-r19` | `99px` | ×1 |
| `--radius-r20` | `999px` | ×19 |
| `--radius-r21` | `9999px` | ×3 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgb(136, 136, 136) 0px 0px 1px 0px` | ×247 |
| `--shadow-md` | `rgba(0, 0, 0, 0.3) 0px 32px 68px 0px` | ×1 |
| `--shadow-lg` | `rgba(0, 0, 0, 0.2) 1px 1px 4px 0px` | ×1 |
| `--shadow-xl` | `rgba(0, 0, 0, 0.2) 2px 2px 3px 0px` | ×1 |
| `--shadow-shadow-5` | `rgba(0, 0, 0, 0.15) 0px 4px 16px 0px` | ×1 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.1s` | ×13 |
| `--duration-fast` | `0.15s` | ×1 |
| `--duration-normal` | `0.2s` | ×24 |
| `--duration-slow` | `0.3s` | ×11 |
| `--duration-slower` | `0.4s` | ×20 |
| `--duration-duration-6` | `0.5s` | ×11 |

### Easing Functions

| Token | Value | Usage |
| --- | --- | --- |
| `--easing-ease-in-out` | `ease-in-out` | ×6 |
| `--easing-ease-in` | `ease-in` | ×3 |
| `--easing-linear` | `linear` | ×2 |

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `-100` |
| `--z-2` | `1` |
| `--z-3` | `2` |
| `--z-4` | `3` |
| `--z-5` | `4` |
| `--z-6` | `10` |
| `--z-7` | `900` |
| `--z-8` | `1000` |
| `--z-9` | `9999` |
| `--z-10` | `99999` |
| `--z-11` | `999999999` |
| `--z-12` | `2000000000` |
| `--z-13` | `2147483630` |
| `--z-14` | `2147483631` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `479px` |
| `--breakpoint-sm` | `600px` |
| `--breakpoint-md` | `601px` |
| `--breakpoint-lg` | `767px` |
| `--breakpoint-xl` | `768px` |
| `--breakpoint-2xl` | `991px` |
| `--breakpoint-3xl` | `992px` |
| `--breakpoint-bp-8` | `1200px` |
| `--breakpoint-bp-9` | `1280px` |
| `--breakpoint-bp-10` | `1440px` |
| `--breakpoint-bp-11` | `1510px` |
| `--breakpoint-bp-12` | `1920px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-5` | `0.05` | ×1 |
| `--opacity-60` | `0.6` | ×1 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-mid-gray` | `--color-dark-gray` | 6.47:1 | AA |
| `--color-mid-gray` | `--color-dark-gray-2` | 6.11:1 | AA |
| `--color-mid-gray` | `--color-black` | 7.37:1 | AAA |
| `--color-mid-gray` | `--color-light-gray` | 1.96:1 | Fail |
| `--color-mid-gray` | `--color-white` | 2.59:1 | Fail |
| `--color-light-gray-4` | `--color-dark-gray` | 12.39:1 | AAA |
| `--color-light-gray-4` | `--color-dark-gray-2` | 11.71:1 | AAA |
| `--color-light-gray-4` | `--color-black` | 14.13:1 | AAA |
| `--color-light-gray-4` | `--color-light-gray` | 1.02:1 | Fail |
| `--color-light-gray-4` | `--color-white` | 1.35:1 | Fail |
| `--color-blue` | `--color-dark-gray` | 3.01:1 | AA Large |
| `--color-blue` | `--color-dark-gray-2` | 2.85:1 | Fail |
| `--color-blue` | `--color-black` | 3.43:1 | AA Large |
| `--color-blue` | `--color-light-gray` | 4.21:1 | AA Large |
| `--color-blue` | `--color-white` | 5.56:1 | AA |
| `--color-dark-gray-3` | `--color-dark-gray` | 1.16:1 | Fail |
| `--color-dark-gray-3` | `--color-dark-gray-2` | 1.09:1 | Fail |
| `--color-dark-gray-3` | `--color-black` | 1.32:1 | Fail |
| `--color-dark-gray-3` | `--color-light-gray` | 10.95:1 | AAA |
| `--color-dark-gray-3` | `--color-white` | 14.47:1 | AAA |
| `--color-mid-gray-3` | `--color-dark-gray` | 3.36:1 | AA Large |
| `--color-mid-gray-3` | `--color-dark-gray-2` | 3.17:1 | AA Large |
| `--color-mid-gray-3` | `--color-black` | 3.83:1 | AA Large |
| `--color-mid-gray-3` | `--color-light-gray` | 3.77:1 | AA Large |
| `--color-mid-gray-3` | `--color-white` | 4.98:1 | AA |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--beige` | `#f0f0ec` |
| `--washed-black` | `#1a1a1a` |
| `--radius-2` | `24px` |
| `--blue` | `#1009f6` |
| `--orange-red` | `#ff3b09` |
| `--white` | `white` |
| `--black` | `black` |
| `--concrete` | `#d4d4d0` |
| `--white-smoke-2` | `#eaeae6` |
| `--sky-blue` | `#add3e5` |
| `--dim-grey` | `#6d6868` |
| `--thistle` | `#e3c7de` |
| `--royal-blue` | `#505cf9` |
| `--gold` | `#ffba09` |
| `--white-smoke-light` | `#f9f9f6` |
| `--radius-3` | `40px` |
| `--radius-1` | `16px` |
| `--pearl` | `#f7f7f3` |
| `--background-color` | `transparent` |
| `--radius-0-5` | `8px` |
| `--dark-green` | `#304801` |
| `--light-blueish-gray` | `#f5f8ff` |
| `--radius-1-5` | `20px` |
| `--top-padding` | `120px` |
| `--bottom-padding` | `120px` |
| `--radius-2-5` | `2.5rem` |
| `--radius-0-75` | `.75rem` |
| `--dim-grey-2` | `#4d4d4d` |
| `--green` | `#00e9a7` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — Contractbook: Contract Management Software
 * Source: https://contractbook.com/
 * Generated: 06/05/2026, 18:17:36
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-dark-gray: #141414; /* hsl(0, 0%, 8%) · background */
  --color-dark-gray-2: #1A1A1A; /* hsl(0, 0%, 10%) · background */
  --color-black: #000000; /* hsl(0, 0%, 0%) · background */
  --color-mid-gray: #999999; /* hsl(0, 0%, 60%) · text */
  --color-light-gray: #D6D6D6; /* hsl(0, 0%, 84%) · background */
  --color-white: #F4F4F4; /* hsl(0, 0%, 96%) · background */
  --color-light-gray-2: #F0F0EC; /* hsl(60, 12%, 93%) · background */
  --color-mid-gray-2: #888888; /* hsl(0, 0%, 53%) · shadow */
  --color-light-gray-3: #DBDBDB; /* hsl(0, 0%, 86%) · background */
  --color-white-2: #FFFFFF; /* hsl(0, 0%, 100%) · background */
  --color-light-gray-4: #D4D4D0; /* hsl(60, 4%, 82%) · text */
  --color-blue: #2A4EEF; /* hsl(229, 86%, 55%) · text */
  --color-blue-2: #1009F6; /* hsl(242, 93%, 50%) · background */
  --color-dark-gray-3: #222222; /* hsl(0, 0%, 13%) · text */
  --color-blue-3: #1032CF; /* hsl(229, 86%, 44%) · background */
  --color-orange: #FFBA09; /* hsl(43, 100%, 52%) · background */
  --color-light-cyan: #ADD3E5; /* hsl(199, 52%, 79%) · background */
  --color-light-gray-5: #B3B3B3; /* hsl(0, 0%, 70%) · border */
  --color-mid-gray-3: #6D6868; /* hsl(0, 2%, 42%) · text */
  --color-white-3: #F7F7F3; /* hsl(60, 20%, 96%) · background */
  --color-light-pink: #E3C7DE; /* hsl(311, 33%, 84%) · background */
  --color-dark-green: #304801; /* hsl(80, 97%, 14%) · background */
  --color-light-gray-6: #CCCCCC; /* hsl(0, 0%, 80%) · border */
  --color-white-4: #F9F9F6; /* hsl(60, 20%, 97%) · background */
  --color-light-gray-7: #C1C1C1; /* hsl(0, 0%, 76%) · border */
  --color-light-gray-8: #DDDDDD; /* hsl(0, 0%, 87%) · background */
  --color-light-red: #FFDEDE; /* hsl(0, 100%, 94%) · background */
  --color-dark-gray-4: rgba(26, 26, 26, 0.4); /* hsl(0, 0%, 10%) · background */

  /* ── Core: Typography ── */
  --font-size-2xs: 10.5px;
  --font-size-xs: 12px;
  --font-size-sm: 12.25px;
  --font-size-base: 12.257px;
  --font-size-lg: 14px;
  --font-size-xl: 15px;
  --font-size-2xl: 15.75px;
  --font-size-3xl: 24.5px;
  --font-size-4xl: 28px;
  --font-size-5xl: 31.5px;
  --font-size-6xl: 32px;
  --font-size-48px: 48px;
  --font-family-base: sans-serif;
  --font-family-2: Abcwhyte;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-tight: 12.25px;
  --line-height-snug: 14px;
  --line-height-normal: 14.7px;
  --line-height-relaxed: 17.15px;
  --line-height-loose: 17.5px;
  --line-height-lh-6: 19.6px;
  --line-height-lh-7: 21px;
  --line-height-lh-8: 22.05px;
  --line-height-lh-9: 22.5px;
  --line-height-lh-10: 23.625px;
  --line-height-lh-11: 31.85px;
  --line-height-lh-12: 36.4px;
  --line-height-lh-13: 40.95px;
  --line-height-lh-14: 41.6px;
  --line-height-lh-15: 60px;
  --letter-spacing-tight: 0.1px;
  --letter-spacing-normal: 0.25px;
  --letter-spacing-wide: 0.3px;
  --letter-spacing-wider: 0.5px;

  /* ── Layout: Spacing ── */
  --space-1: 1px;
  --space-2: 3.20312px;
  --space-3: 4.9px;
  --space-4: 5px;
  --space-5: 5.88px;
  --space-6: 6px;
  --space-8: 6.615px;
  --space-10: 7px;
  --space-12: 8px;
  --space-16: 8.20312px;
  --space-20: 9.1px;
  --space-24: 22.75px;
  --space-32: 42px;
  --space-40: 84px;
  --space-48: 354.75px;
  --space-64: 15px;
  --space-80: 15.75px;
  --space-96: 17.5px;
  --space-128: 17.8125px;
  --space-160: 19.25px;
  --space-192: 20px;
  --space-256: 21px;
  --space-23: 22px;
  --space-25: 24px;
  --space-26: 26.2031px;
  --space-27: 28px;
  --space-28: 35px;
  --space-29: 38.5px;
  --space-30: 39.8594px;
  --space-31: 40px;
  --space-33: 48px;
  --space-34: 52px;
  --space-35: 52.5px;
  --space-36: 56px;
  --space-37: 59.5px;
  --space-38: 61.9062px;
  --space-39: 63px;
  --space-41: 96px;
  --space-42: 105px;
  --space-43: 106px;
  --space-44: 128px;
  --space-45: 192px;
  --space-46: 277.883px;
  --space-47: 319.273px;
  --space-49: 379.375px;
  --space-50: 455.25px;
  --space-51: 500px;

  /* ── Borders ── */
  --border-width-hairline: 1px;
  --border-width-thin: 2px;
  --border-width-base: 3px;
  --border-width-thick: 4px;
  --border-width-heavy: 10px;
  --border-width-bw-6: 11px;
  --radius-sm: 0px 24px 24px 0px;
  --radius-md: 0px 0px 40px 40px;
  --radius-lg: 3.75px;
  --radius-xl: 4.375px;
  --radius-2xl: 7.5px;
  --radius-full: 8px;
  --radius-r7: 10.5px;
  --radius-r8: 14px;
  --radius-r9: 15px;
  --radius-r10: 16px;
  --radius-r11: 20px;
  --radius-r12: 24px;
  --radius-r13: 32px;
  --radius-r14: 35px;
  --radius-r15: 40px;
  --radius-r16: 60px;
  --radius-r17: 61.25px;
  --radius-r18: 96px;
  --radius-r19: 99px;
  --radius-r20: 999px;
  --radius-r21: 9999px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgb(136, 136, 136) 0px 0px 1px 0px;
  --shadow-md: rgba(0, 0, 0, 0.3) 0px 32px 68px 0px;
  --shadow-lg: rgba(0, 0, 0, 0.2) 1px 1px 4px 0px;
  --shadow-xl: rgba(0, 0, 0, 0.2) 2px 2px 3px 0px;
  --shadow-shadow-5: rgba(0, 0, 0, 0.15) 0px 4px 16px 0px;

  /* ── Motion ── */
  --duration-instant: 0.1s;
  --duration-fast: 0.15s;
  --duration-normal: 0.2s;
  --duration-slow: 0.3s;
  --duration-slower: 0.4s;
  --duration-duration-6: 0.5s;
  --easing-ease-in-out: ease-in-out;
  --easing-ease-in: ease-in;
  --easing-linear: linear;

  /* ── Layout: Z-Index ── */
  --z-1: -100;
  --z-2: 1;
  --z-3: 2;
  --z-4: 3;
  --z-5: 4;
  --z-6: 10;
  --z-7: 900;
  --z-8: 1000;
  --z-9: 9999;
  --z-10: 99999;
  --z-11: 999999999;
  --z-12: 2000000000;
  --z-13: 2147483630;
  --z-14: 2147483631;

  /* ── Breakpoints ── */
  --breakpoint-xs: 479px;
  --breakpoint-sm: 600px;
  --breakpoint-md: 601px;
  --breakpoint-lg: 767px;
  --breakpoint-xl: 768px;
  --breakpoint-2xl: 991px;
  --breakpoint-3xl: 992px;
  --breakpoint-bp-8: 1200px;
  --breakpoint-bp-9: 1280px;
  --breakpoint-bp-10: 1440px;
  --breakpoint-bp-11: 1510px;
  --breakpoint-bp-12: 1920px;

  /* ── Opacity ── */
  --opacity-5: 0.05;
  --opacity-60: 0.6;
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://contractbook.com/",
    "title": "Contractbook: Contract Management Software",
    "generatedAt": "2026-05-06T12:47:36.149Z"
  },
  "core": {
    "color": {
      "dark-gray": {
        "$value": "#141414",
        "$type": "color",
        "$description": "background · ×4886"
      },
      "dark-gray-2": {
        "$value": "#1A1A1A",
        "$type": "color",
        "$description": "background · ×3889"
      },
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "background · ×683"
      },
      "mid-gray": {
        "$value": "#999999",
        "$type": "color",
        "$description": "text · ×492"
      },
      "light-gray": {
        "$value": "#D6D6D6",
        "$type": "color",
        "$description": "background · ×374"
      },
      "white": {
        "$value": "#F4F4F4",
        "$type": "color",
        "$description": "background · ×297"
      },
      "light-gray-2": {
        "$value": "#F0F0EC",
        "$type": "color",
        "$description": "background · ×269"
      },
      "mid-gray-2": {
        "$value": "#888888",
        "$type": "color",
        "$description": "shadow · ×247"
      },
      "light-gray-3": {
        "$value": "#DBDBDB",
        "$type": "color",
        "$description": "background · ×246"
      },
      "white-2": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×179"
      },
      "light-gray-4": {
        "$value": "#D4D4D0",
        "$type": "color",
        "$description": "text · ×122"
      },
      "blue": {
        "$value": "#2A4EEF",
        "$type": "color",
        "$description": "text · ×102"
      },
      "blue-2": {
        "$value": "#1009F6",
        "$type": "color",
        "$description": "background · ×61"
      },
      "dark-gray-3": {
        "$value": "#222222",
        "$type": "color",
        "$description": "text · ×24"
      },
      "blue-3": {
        "$value": "#1032CF",
        "$type": "color",
        "$description": "background · ×16"
      },
      "orange": {
        "$value": "#FFBA09",
        "$type": "color",
        "$description": "background · ×14"
      },
      "light-cyan": {
        "$value": "#ADD3E5",
        "$type": "color",
        "$description": "background · ×11"
      },
      "light-gray-5": {
        "$value": "#B3B3B3",
        "$type": "color",
        "$description": "border · ×8"
      },
      "mid-gray-3": {
        "$value": "#6D6868",
        "$type": "color",
        "$description": "text · ×8"
      },
      "white-3": {
        "$value": "#F7F7F3",
        "$type": "color",
        "$description": "background · ×7"
      },
      "light-pink": {
        "$value": "#E3C7DE",
        "$type": "color",
        "$description": "background · ×5"
      },
      "dark-green": {
        "$value": "#304801",
        "$type": "color",
        "$description": "background · ×2"
      },
      "light-gray-6": {
        "$value": "#CCCCCC",
        "$type": "color",
        "$description": "border · ×2"
      },
      "white-4": {
        "$value": "#F9F9F6",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-gray-7": {
        "$value": "#C1C1C1",
        "$type": "color",
        "$description": "border · ×1"
      },
      "light-gray-8": {
        "$value": "#DDDDDD",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-red": {
        "$value": "#FFDEDE",
        "$type": "color",
        "$description": "background · ×1"
      },
      "dark-gray-4": {
        "$value": "rgba(26, 26, 26, 0.4)",
        "$type": "color",
        "$description": "background · ×1"
      }
    },
    "fontSize": {
      "font-size-2xs": {
        "$value": "10.5px",
        "$type": "dimension"
      },
      "font-size-xs": {
        "$value": "12px",
        "$type": "dimension"
      },
      "font-size-sm": {
        "$value": "12.25px",
        "$type": "dimension"
      },
      "font-size-base": {
        "$value": "12.257px",
        "$type": "dimension"
      },
      "font-size-lg": {
        "$value": "14px",
        "$type": "dimension"
      },
      "font-size-xl": {
        "$value": "15px",
        "$type": "dimension"
      },
      "font-size-2xl": {
        "$value": "15.75px",
        "$type": "dimension"
      },
      "font-size-3xl": {
        "$value": "24.5px",
        "$type": "dimension"
      },
      "font-size-4xl": {
        "$value": "28px",
        "$type": "dimension"
      },
      "font-size-5xl": {
        "$value": "31.5px",
        "$type": "dimension"
      },
      "font-size-6xl": {
        "$value": "32px",
        "$type": "dimension"
      },
      "font-size-48px": {
        "$value": "48px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "sans-serif",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "Abcwhyte",
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
      }
    },
    "lineHeight": {
      "line-height-tight": {
        "$value": "12.25px",
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
        "$value": "17.15px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "17.5px",
        "$type": "dimension"
      },
      "line-height-lh-6": {
        "$value": "19.6px",
        "$type": "dimension"
      },
      "line-height-lh-7": {
        "$value": "21px",
        "$type": "dimension"
      },
      "line-height-lh-8": {
        "$value": "22.05px",
        "$type": "dimension"
      },
      "line-height-lh-9": {
        "$value": "22.5px",
        "$type": "dimension"
      },
      "line-height-lh-10": {
        "$value": "23.625px",
        "$type": "dimension"
      },
      "line-height-lh-11": {
        "$value": "31.85px",
        "$type": "dimension"
      },
      "line-height-lh-12": {
        "$value": "36.4px",
        "$type": "dimension"
      },
      "line-height-lh-13": {
        "$value": "40.95px",
        "$type": "dimension"
      },
      "line-height-lh-14": {
        "$value": "41.6px",
        "$type": "dimension"
      },
      "line-height-lh-15": {
        "$value": "60px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "0.1px",
        "$type": "dimension"
      },
      "letter-spacing-normal": {
        "$value": "0.25px",
        "$type": "dimension"
      },
      "letter-spacing-wide": {
        "$value": "0.3px",
        "$type": "dimension"
      },
      "letter-spacing-wider": {
        "$value": "0.5px",
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
        "$value": "3.20312px",
        "$type": "dimension"
      },
      "space-3": {
        "$value": "4.9px",
        "$type": "dimension"
      },
      "space-4": {
        "$value": "5px",
        "$type": "dimension"
      },
      "space-5": {
        "$value": "5.88px",
        "$type": "dimension"
      },
      "space-6": {
        "$value": "6px",
        "$type": "dimension"
      },
      "space-8": {
        "$value": "6.615px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "7px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "8px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "8.20312px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "9.1px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "22.75px",
        "$type": "dimension"
      },
      "space-32": {
        "$value": "42px",
        "$type": "dimension"
      },
      "space-40": {
        "$value": "84px",
        "$type": "dimension"
      },
      "space-48": {
        "$value": "354.75px",
        "$type": "dimension"
      },
      "space-64": {
        "$value": "15px",
        "$type": "dimension"
      },
      "space-80": {
        "$value": "15.75px",
        "$type": "dimension"
      },
      "space-96": {
        "$value": "17.5px",
        "$type": "dimension"
      },
      "space-128": {
        "$value": "17.8125px",
        "$type": "dimension"
      },
      "space-160": {
        "$value": "19.25px",
        "$type": "dimension"
      },
      "space-192": {
        "$value": "20px",
        "$type": "dimension"
      },
      "space-256": {
        "$value": "21px",
        "$type": "dimension"
      },
      "space-23": {
        "$value": "22px",
        "$type": "dimension"
      },
      "space-25": {
        "$value": "24px",
        "$type": "dimension"
      },
      "space-26": {
        "$value": "26.2031px",
        "$type": "dimension"
      },
      "space-27": {
        "$value": "28px",
        "$type": "dimension"
      },
      "space-28": {
        "$value": "35px",
        "$type": "dimension"
      },
      "space-29": {
        "$value": "38.5px",
        "$type": "dimension"
      },
      "space-30": {
        "$value": "39.8594px",
        "$type": "dimension"
      },
      "space-31": {
        "$value": "40px",
        "$type": "dimension"
      },
      "space-33": {
        "$value": "48px",
        "$type": "dimension"
      },
      "space-34": {
        "$value": "52px",
        "$type": "dimension"
      },
      "space-35": {
        "$value": "52.5px",
        "$type": "dimension"
      },
      "space-36": {
        "$value": "56px",
        "$type": "dimension"
      },
      "space-37": {
        "$value": "59.5px",
        "$type": "dimension"
      },
      "space-38": {
        "$value": "61.9062px",
        "$type": "dimension"
      },
      "space-39": {
        "$value": "63px",
        "$type": "dimension"
      },
      "space-41": {
        "$value": "96px",
        "$type": "dimension"
      },
      "space-42": {
        "$value": "105px",
        "$type": "dimension"
      },
      "space-43": {
        "$value": "106px",
        "$type": "dimension"
      },
      "space-44": {
        "$value": "128px",
        "$type": "dimension"
      },
      "space-45": {
        "$value": "192px",
        "$type": "dimension"
      },
      "space-46": {
        "$value": "277.883px",
        "$type": "dimension"
      },
      "space-47": {
        "$value": "319.273px",
        "$type": "dimension"
      },
      "space-49": {
        "$value": "379.375px",
        "$type": "dimension"
      },
      "space-50": {
        "$value": "455.25px",
        "$type": "dimension"
      },
      "space-51": {
        "$value": "500px",
        "$type": "dimension"
      }
    },
    "zIndex": {
      "z-1": {
        "$value": "-100",
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
      },
      "z-6": {
        "$value": "10",
        "$type": "number"
      },
      "z-7": {
        "$value": "900",
        "$type": "number"
      },
      "z-8": {
        "$value": "1000",
        "$type": "number"
      },
      "z-9": {
        "$value": "9999",
        "$type": "number"
      },
      "z-10": {
        "$value": "99999",
        "$type": "number"
      },
      "z-11": {
        "$value": "999999999",
        "$type": "number"
      },
      "z-12": {
        "$value": "2000000000",
        "$type": "number"
      },
      "z-13": {
        "$value": "2147483630",
        "$type": "number"
      },
      "z-14": {
        "$value": "2147483631",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "479px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "600px",
        "$type": "dimension"
      },
      "breakpoint-md": {
        "$value": "601px",
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
        "$value": "1200px",
        "$type": "dimension"
      },
      "breakpoint-bp-9": {
        "$value": "1280px",
        "$type": "dimension"
      },
      "breakpoint-bp-10": {
        "$value": "1440px",
        "$type": "dimension"
      },
      "breakpoint-bp-11": {
        "$value": "1510px",
        "$type": "dimension"
      },
      "breakpoint-bp-12": {
        "$value": "1920px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
        "$value": "0px 24px 24px 0px",
        "$type": "dimension"
      },
      "radius-md": {
        "$value": "0px 0px 40px 40px",
        "$type": "dimension"
      },
      "radius-lg": {
        "$value": "3.75px",
        "$type": "dimension"
      },
      "radius-xl": {
        "$value": "4.375px",
        "$type": "dimension"
      },
      "radius-2xl": {
        "$value": "7.5px",
        "$type": "dimension"
      },
      "radius-full": {
        "$value": "8px",
        "$type": "dimension"
      },
      "radius-r7": {
        "$value": "10.5px",
        "$type": "dimension"
      },
      "radius-r8": {
        "$value": "14px",
        "$type": "dimension"
      },
      "radius-r9": {
        "$value": "15px",
        "$type": "dimension"
      },
      "radius-r10": {
        "$value": "16px",
        "$type": "dimension"
      },
      "radius-r11": {
        "$value": "20px",
        "$type": "dimension"
      },
      "radius-r12": {
        "$value": "24px",
        "$type": "dimension"
      },
      "radius-r13": {
        "$value": "32px",
        "$type": "dimension"
      },
      "radius-r14": {
        "$value": "35px",
        "$type": "dimension"
      },
      "radius-r15": {
        "$value": "40px",
        "$type": "dimension"
      },
      "radius-r16": {
        "$value": "60px",
        "$type": "dimension"
      },
      "radius-r17": {
        "$value": "61.25px",
        "$type": "dimension"
      },
      "radius-r18": {
        "$value": "96px",
        "$type": "dimension"
      },
      "radius-r19": {
        "$value": "99px",
        "$type": "dimension"
      },
      "radius-r20": {
        "$value": "999px",
        "$type": "dimension"
      },
      "radius-r21": {
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
      },
      "border-width-base": {
        "$value": "3px",
        "$type": "dimension"
      },
      "border-width-thick": {
        "$value": "4px",
        "$type": "dimension"
      },
      "border-width-heavy": {
        "$value": "10px",
        "$type": "dimension"
      },
      "border-width-bw-6": {
        "$value": "11px",
        "$type": "dimension"
      }
    },
    "shadow": {
      "shadow-sm": {
        "$value": "rgb(136, 136, 136) 0px 0px 1px 0px",
        "$type": "shadow"
      },
      "shadow-md": {
        "$value": "rgba(0, 0, 0, 0.3) 0px 32px 68px 0px",
        "$type": "shadow"
      },
      "shadow-lg": {
        "$value": "rgba(0, 0, 0, 0.2) 1px 1px 4px 0px",
        "$type": "shadow"
      },
      "shadow-xl": {
        "$value": "rgba(0, 0, 0, 0.2) 2px 2px 3px 0px",
        "$type": "shadow"
      },
      "shadow-shadow-5": {
        "$value": "rgba(0, 0, 0, 0.15) 0px 4px 16px 0px",
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
        "$value": "0.3s",
        "$type": "duration"
      },
      "duration-slower": {
        "$value": "0.4s",
        "$type": "duration"
      },
      "duration-duration-6": {
        "$value": "0.5s",
        "$type": "duration"
      }
    },
    "easing": {
      "easing-ease-in-out": {
        "$value": "ease-in-out",
        "$type": "cubicBezier"
      },
      "easing-ease-in": {
        "$value": "ease-in",
        "$type": "cubicBezier"
      },
      "easing-linear": {
        "$value": "linear",
        "$type": "cubicBezier"
      }
    }
  },
  "opacity": {
    "opacity-5": {
      "$value": 0.05,
      "$type": "number"
    },
    "opacity-60": {
      "$value": 0.6,
      "$type": "number"
    }
  }
}
```
