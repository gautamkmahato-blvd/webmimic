# The Verge — Design System

**Source:** https://www.theverge.com/  
**Generated:** 18/04/2026, 13:53:33  
**Extracted:** 38 colors · 71 type tokens · 30 spacing steps · 25 breakpoints · 10 motion tokens

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
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×4625 |
| `--color-white` | `#FFFFFF` | hsl(0, 0%, 100%) | ×1242 |
| `--color-dark-gray` | `#131313` | hsl(0, 0%, 7%) | ×1221 |
| `--color-cyan` | `#3CFFD0` | hsl(166, 100%, 62%) | ×936 |
| `--color-blue` | `#5200FF` | hsl(259, 100%, 50%) | ×132 |
| `--color-dark-gray-2` | `#313131` | hsl(0, 0%, 19%) | ×66 |
| `--color-dark-gray-4` | `#2D2D2D` | hsl(0, 0%, 18%) | ×6 |
| `--color-green` | `#468254` | hsl(134, 30%, 39%) | ×5 |
| `--color-light-pink` | `rgba(255, 194, 231, 0.9)` | hsl(324, 100%, 88%) | ×4 |
| `--color-yellow` | `rgba(214, 243, 31, 0.9)` | hsl(68, 90%, 54%) | ×4 |
| `--color-blue-2` | `#3860BE` | hsl(222, 54%, 48%) | ×4 |
| `--color-white-2` | `#F7F5FE` | hsl(253, 82%, 98%) | ×4 |
| `--color-dark-gray-6` | `#222222` | hsl(0, 0%, 13%) | ×2 |
| `--color-red` | `rgba(255, 61, 0, 0.9)` | hsl(14, 100%, 50%) | ×2 |
| `--color-dark-gray-8` | `rgba(39, 39, 39, 0.95)` | hsl(0, 0%, 15%) | ×1 |
| `--color-white-3` | `#F9FFFA` | hsl(130, 100%, 99%) | ×1 |
| `--color-white-4` | `#F9F9FC` | hsl(240, 33%, 98%) | ×1 |
| `--color-white-5` | `#F4F4F4` | hsl(0, 0%, 96%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-mid-gray` | `#949494` | hsl(0, 0%, 58%) | ×1636 |
| `--color-cyan-2` | `#309875` | hsl(160, 52%, 39%) | ×146 |
| `--color-light-gray` | `#E9E9E9` | hsl(0, 0%, 91%) | ×28 |
| `--color-dark-gray-3` | `#555555` | hsl(0, 0%, 33%) | ×27 |
| `--color-mid-gray-2` | `#696969` | hsl(0, 0%, 41%) | ×20 |
| `--color-light-gray-2` | `#EFEFEF` | hsl(0, 0%, 94%) | ×6 |
| `--color-dark-gray-5` | `#656565` | hsl(0, 0%, 40%) | ×5 |
| `--color-light-gray-3` | `#BDBDBD` | hsl(0, 0%, 74%) | ×4 |
| `--color-light-gray-4` | `#C9C9C9` | hsl(0, 0%, 79%) | ×2 |
| `--color-dark-gray-7` | `#636363` | hsl(0, 0%, 39%) | ×2 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-cyan-3` | `#32AE88` | hsl(162, 55%, 44%) | ×2 |
| `--color-light-gray-6` | `#C1C1C1` | hsl(0, 0%, 76%) | ×1 |
| `--color-light-gray-7` | `#D8D8D8` | hsl(0, 0%, 85%) | ×1 |
| `--color-mid-gray-5` | `#707070` | hsl(0, 0%, 44%) | ×1 |
| `--color-light-gray-8` | `#BBBBBB` | hsl(0, 0%, 73%) | ×1 |
| `--color-light-gray-9` | `#E2E2E2` | hsl(0, 0%, 89%) | ×1 |

### Shadow Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray-5` | `#C7C5C7` | hsl(300, 2%, 78%) | ×2 |
| `--color-mid-gray-3` | `#808080` | hsl(0, 0%, 50%) | ×1 |
| `--color-mid-gray-4` | `#999999` | hsl(0, 0%, 60%) | ×1 |

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-blue` | `#2E3644` | hsl(218, 19%, 22%) | ×1 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `ui-sans-serif` |
| `--font-family-2` | `__polySansMono_0b836e` |
| `--font-family-3` | `__polySans_9afc27` |
| `--font-family-4` | `__manuka_62afb5` |
| `--font-family-5` | `__fkRomanStandard_cfceed` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `9px` |  |
| `--font-size-xs` | `10px` |  |
| `--font-size-sm` | `11px` |  |
| `--font-size-base` | `12px` |  |
| `--font-size-lg` | `13px` |  |
| `--font-size-xl` | `13.008px` |  |
| `--font-size-2xl` | `13.6px` |  |
| `--font-size-3xl` | `14px` |  |
| `--font-size-4xl` | `14.08px` |  |
| `--font-size-5xl` | `14.4px` |  |
| `--font-size-6xl` | `15px` |  |
| `--font-size-16px` | `16px` |  |
| `--font-size-18px` | `18px` |  |
| `--font-size-19px` | `19.2px` |  |
| `--font-size-20px` | `20px` |  |
| `--font-size-28px` | `28px` |  |
| `--font-size-32px` | `32px` |  |
| `--font-size-40px` | `40px` |  |
| `--font-size-65px` | `65px` |  |
| `--font-size-107px` | `107px` |  |

### Font Weights

| Token | Weight |
| --- | --- |
| `--font-weight-light` | `300` |
| `--font-weight-regular` | `400` |
| `--font-weight-medium` | `500` |
| `--font-weight-semibold` | `600` |
| `--font-weight-bold` | `700` |
| `--font-weight-black` | `900` |

### Line Heights

| Token | Value |
| --- | --- |
| `--line-height-tight` | `9.9px` |
| `--line-height-snug` | `11px` |
| `--line-height-normal` | `12px` |
| `--line-height-relaxed` | `13px` |
| `--line-height-loose` | `14px` |
| `--line-height-lh-6` | `15px` |
| `--line-height-lh-7` | `15.6px` |
| `--line-height-lh-8` | `16.5px` |
| `--line-height-lh-9` | `17.6px` |
| `--line-height-lh-10` | `19.2px` |
| `--line-height-lh-11` | `19.512px` |
| `--line-height-lh-12` | `20.8px` |
| `--line-height-lh-13` | `21.6px` |
| `--line-height-lh-14` | `22.8px` |
| `--line-height-lh-15` | `24px` |
| `--line-height-lh-16` | `24.96px` |
| `--line-height-lh-17` | `25.6px` |
| `--line-height-lh-18` | `27.2px` |
| `--line-height-lh-19` | `28px` |
| `--line-height-lh-20` | `32px` |
| `--line-height-lh-21` | `35.2px` |
| `--line-height-lh-22` | `52px` |
| `--line-height-lh-23` | `85.6px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `-0.16px` |
| `--letter-spacing-normal` | `0.13008px` |
| `--letter-spacing-wide` | `0.14px` |
| `--letter-spacing-wider` | `0.15px` |
| `--letter-spacing-widest` | `0.28px` |
| `--letter-spacing-ls-6` | `0.32px` |
| `--letter-spacing-ls-7` | `0.72px` |
| `--letter-spacing-ls-8` | `0.9px` |
| `--letter-spacing-ls-9` | `0.96px` |
| `--letter-spacing-ls-10` | `1.04064px` |
| `--letter-spacing-ls-11` | `1.07px` |
| `--letter-spacing-ls-12` | `1.1px` |
| `--letter-spacing-ls-13` | `1.2px` |
| `--letter-spacing-ls-14` | `1.28px` |
| `--letter-spacing-ls-15` | `1.5px` |
| `--letter-spacing-ls-16` | `1.8px` |
| `--letter-spacing-ls-17` | `1.9px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `2px` | ×2 |
| `--space-2` | `3px` | ×1 |
| `--space-3` | `4px` | ×156 |
| `--space-4` | `5px` | ×59 |
| `--space-5` | `6px` | ×74 |
| `--space-6` | `7px` | ×1 |
| `--space-8` | `8px` | ×64 |
| `--space-10` | `10px` | ×183 |
| `--space-12` | `12px` | ×74 |
| `--space-16` | `14px` | ×29 |
| `--space-20` | `16px` | ×41 |
| `--space-24` | `67px` | ×1 |
| `--space-32` | `266.5px` | ×6 |
| `--space-40` | `21px` | ×1 |
| `--space-48` | `24px` | ×57 |
| `--space-64` | `25px` | ×2 |
| `--space-80` | `30px` | ×33 |
| `--space-96` | `35px` | ×23 |
| `--space-128` | `40px` | ×23 |
| `--space-160` | `48px` | ×1 |
| `--space-192` | `50px` | ×6 |
| `--space-256` | `60px` | ×1 |
| `--space-23` | `65px` | ×2 |
| `--space-25` | `70px` | ×1 |
| `--space-26` | `75px` | ×1 |
| `--space-27` | `80px` | ×6 |
| `--space-28` | `100px` | ×10 |
| `--space-29` | `150px` | ×1 |
| `--space-30` | `154.844px` | ×2 |
| `--space-31` | `160px` | ×2 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `1px` | ×590 |
| `--border-width-thin` | `8px` | ×2 |
| `--border-width-base` | `12px` | ×4 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `1px` | ×3 |
| `--radius-md` | `2px` | ×25 |
| `--radius-lg` | `3px` | ×43 |
| `--radius-xl` | `4px` | ×7 |
| `--radius-2xl` | `10px` | ×1 |
| `--radius-full` | `17px` | ×1 |
| `--radius-r7` | `20px` | ×19 |
| `--radius-r8` | `24px` | ×4 |
| `--radius-r9` | `30px` | ×18 |
| `--radius-r10` | `50%` | ×95 |
| `--radius-r11` | `50px` | ×1 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgba(0, 0, 0, 0) 0px -1px 0px 0px inset` | ×87 |
| `--shadow-md` | `rgb(60, 255, 208) 0px -1px 0px 0px inset` | ×79 |
| `--shadow-lg` | `rgb(0, 0, 0) 0px -1px 0px 0px inset` | ×9 |
| `--shadow-xl` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px inset` | ×3 |
| `--shadow-shadow-5` | `rgb(255, 255, 255) 0px -1px 0px 0px inset` | ×3 |
| `--shadow-shadow-6` | `rgba(0, 0, 0, 0.4) 0px 4px 10px 0px` | ×1 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.1s` | ×1 |
| `--duration-fast` | `0.15s` | ×4 |
| `--duration-normal` | `0.2s` | ×6 |
| `--duration-slow` | `0.25s` | ×4 |
| `--duration-slower` | `0.3s` | ×1 |
| `--duration-duration-6` | `0.4s` | ×2 |
| `--duration-duration-7` | `0.5s` | ×4 |

### Easing Functions

| Token | Value | Usage |
| --- | --- | --- |
| `--easing-ease-in` | `ease-in` | ×9 |
| `--easing-ease-out` | `ease-out` | ×4 |
| `--easing-linear` | `linear` | ×3 |

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `-1` |
| `--z-2` | `1` |
| `--z-3` | `2` |
| `--z-4` | `3` |
| `--z-5` | `9` |
| `--z-6` | `10` |
| `--z-7` | `50` |
| `--z-8` | `100` |
| `--z-9` | `900` |
| `--z-10` | `10900` |
| `--z-11` | `11000` |
| `--z-12` | `2147483645` |
| `--z-13` | `2147483646` |
| `--z-14` | `2147483647` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `320px` |
| `--breakpoint-sm` | `400px` |
| `--breakpoint-md` | `425px` |
| `--breakpoint-lg` | `426px` |
| `--breakpoint-xl` | `530px` |
| `--breakpoint-2xl` | `549px` |
| `--breakpoint-3xl` | `550px` |
| `--breakpoint-bp-8` | `600px` |
| `--breakpoint-bp-9` | `605px` |
| `--breakpoint-bp-10` | `620px` |
| `--breakpoint-bp-11` | `768px` |
| `--breakpoint-bp-12` | `769px` |
| `--breakpoint-bp-13` | `890px` |
| `--breakpoint-bp-14` | `896px` |
| `--breakpoint-bp-15` | `897px` |
| `--breakpoint-bp-16` | `900px` |
| `--breakpoint-bp-17` | `901px` |
| `--breakpoint-bp-18` | `1023px` |
| `--breakpoint-bp-19` | `1024px` |
| `--breakpoint-bp-20` | `1179px` |
| `--breakpoint-bp-21` | `1180px` |
| `--breakpoint-bp-22` | `1181px` |
| `--breakpoint-bp-23` | `1200px` |
| `--breakpoint-bp-24` | `1280px` |
| `--breakpoint-bp-25` | `1300px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-20` | `0.2` | ×1 |
| `--opacity-80` | `0.8` | ×85 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-mid-gray` | `--color-black` | 6.92:1 | AA |
| `--color-mid-gray` | `--color-white` | 3.03:1 | AA Large |
| `--color-mid-gray` | `--color-dark-gray` | 6.13:1 | AA |
| `--color-mid-gray` | `--color-cyan` | 2.37:1 | Fail |
| `--color-mid-gray` | `--color-blue` | 2.47:1 | Fail |
| `--color-cyan-2` | `--color-black` | 5.87:1 | AA |
| `--color-cyan-2` | `--color-white` | 3.58:1 | AA Large |
| `--color-cyan-2` | `--color-dark-gray` | 5.2:1 | AA |
| `--color-cyan-2` | `--color-cyan` | 2.79:1 | Fail |
| `--color-cyan-2` | `--color-blue` | 2.1:1 | Fail |
| `--color-light-gray` | `--color-black` | 17.3:1 | AAA |
| `--color-light-gray` | `--color-white` | 1.21:1 | Fail |
| `--color-light-gray` | `--color-dark-gray` | 15.3:1 | AAA |
| `--color-light-gray` | `--color-cyan` | 1.05:1 | Fail |
| `--color-light-gray` | `--color-blue` | 6.17:1 | AA |
| `--color-dark-gray-3` | `--color-black` | 2.82:1 | Fail |
| `--color-dark-gray-3` | `--color-white` | 7.46:1 | AAA |
| `--color-dark-gray-3` | `--color-dark-gray` | 2.49:1 | Fail |
| `--color-dark-gray-3` | `--color-cyan` | 5.82:1 | AA |
| `--color-dark-gray-3` | `--color-blue` | 1.01:1 | Fail |
| `--color-mid-gray-2` | `--color-black` | 3.83:1 | AA Large |
| `--color-mid-gray-2` | `--color-white` | 5.49:1 | AA |
| `--color-mid-gray-2` | `--color-dark-gray` | 3.38:1 | AA Large |
| `--color-mid-gray-2` | `--color-cyan` | 4.29:1 | AA Large |
| `--color-mid-gray-2` | `--color-blue` | 1.36:1 | Fail |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--font-fkroman` | `'__fkRomanStandard_cfceed', '__fkRomanStandard_Fallback_cfceed', Georgia, serif` |
| `--font-manuka` | `'__manuka_62afb5', '__manuka_Fallback_62afb5', Impact, Helvetica, sans-serif` |
| `--font-polysans` | `'__polySans_9afc27', '__polySans_Fallback_9afc27', Helvetica, Arial, sans-serif` |
| `--font-polysans-mono` | `'__polySansMono_0b836e', '__polySansMono_Fallback_0b836e', Courier New, Courier, monospace` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — The Verge
 * Source: https://www.theverge.com/
 * Generated: 18/04/2026, 13:53:33
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-black: #000000; /* hsl(0, 0%, 0%) · background */
  --color-mid-gray: #949494; /* hsl(0, 0%, 58%) · text */
  --color-white: #FFFFFF; /* hsl(0, 0%, 100%) · background */
  --color-dark-gray: #131313; /* hsl(0, 0%, 7%) · background */
  --color-cyan: #3CFFD0; /* hsl(166, 100%, 62%) · background */
  --color-cyan-2: #309875; /* hsl(160, 52%, 39%) · text */
  --color-blue: #5200FF; /* hsl(259, 100%, 50%) · background */
  --color-dark-gray-2: #313131; /* hsl(0, 0%, 19%) · background */
  --color-light-gray: #E9E9E9; /* hsl(0, 0%, 91%) · text */
  --color-dark-gray-3: #555555; /* hsl(0, 0%, 33%) · text */
  --color-mid-gray-2: #696969; /* hsl(0, 0%, 41%) · text */
  --color-dark-gray-4: #2D2D2D; /* hsl(0, 0%, 18%) · background */
  --color-light-gray-2: #EFEFEF; /* hsl(0, 0%, 94%) · text */
  --color-green: #468254; /* hsl(134, 30%, 39%) · background */
  --color-dark-gray-5: #656565; /* hsl(0, 0%, 40%) · text */
  --color-light-pink: rgba(255, 194, 231, 0.9); /* hsl(324, 100%, 88%) · background */
  --color-yellow: rgba(214, 243, 31, 0.9); /* hsl(68, 90%, 54%) · background */
  --color-light-gray-3: #BDBDBD; /* hsl(0, 0%, 74%) · text */
  --color-blue-2: #3860BE; /* hsl(222, 54%, 48%) · background */
  --color-white-2: #F7F5FE; /* hsl(253, 82%, 98%) · background */
  --color-dark-gray-6: #222222; /* hsl(0, 0%, 13%) · background */
  --color-light-gray-4: #C9C9C9; /* hsl(0, 0%, 79%) · text */
  --color-red: rgba(255, 61, 0, 0.9); /* hsl(14, 100%, 50%) · background */
  --color-dark-gray-7: #636363; /* hsl(0, 0%, 39%) · text */
  --color-cyan-3: #32AE88; /* hsl(162, 55%, 44%) · border */
  --color-light-gray-5: #C7C5C7; /* hsl(300, 2%, 78%) · shadow */
  --color-dark-gray-8: rgba(39, 39, 39, 0.95); /* hsl(0, 0%, 15%) · background */
  --color-mid-gray-3: #808080; /* hsl(0, 0%, 50%) · shadow */
  --color-light-gray-6: #C1C1C1; /* hsl(0, 0%, 76%) · border */
  --color-mid-gray-4: #999999; /* hsl(0, 0%, 60%) · shadow */
  --color-white-3: #F9FFFA; /* hsl(130, 100%, 99%) · background */
  --color-light-gray-7: #D8D8D8; /* hsl(0, 0%, 85%) · border */
  --color-mid-gray-5: #707070; /* hsl(0, 0%, 44%) · border */
  --color-dark-blue: #2E3644; /* hsl(218, 19%, 22%) · fill */
  --color-light-gray-8: #BBBBBB; /* hsl(0, 0%, 73%) · border */
  --color-white-4: #F9F9FC; /* hsl(240, 33%, 98%) · background */
  --color-light-gray-9: #E2E2E2; /* hsl(0, 0%, 89%) · border */
  --color-white-5: #F4F4F4; /* hsl(0, 0%, 96%) · background */

  /* ── Core: Typography ── */
  --font-size-2xs: 9px;
  --font-size-xs: 10px;
  --font-size-sm: 11px;
  --font-size-base: 12px;
  --font-size-lg: 13px;
  --font-size-xl: 13.008px;
  --font-size-2xl: 13.6px;
  --font-size-3xl: 14px;
  --font-size-4xl: 14.08px;
  --font-size-5xl: 14.4px;
  --font-size-6xl: 15px;
  --font-size-16px: 16px;
  --font-size-18px: 18px;
  --font-size-19px: 19.2px;
  --font-size-20px: 20px;
  --font-size-28px: 28px;
  --font-size-32px: 32px;
  --font-size-40px: 40px;
  --font-size-65px: 65px;
  --font-size-107px: 107px;
  --font-family-base: ui-sans-serif;
  --font-family-2: __polySansMono_0b836e;
  --font-family-3: __polySans_9afc27;
  --font-family-4: __manuka_62afb5;
  --font-family-5: __fkRomanStandard_cfceed;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-black: 900;
  --line-height-tight: 9.9px;
  --line-height-snug: 11px;
  --line-height-normal: 12px;
  --line-height-relaxed: 13px;
  --line-height-loose: 14px;
  --line-height-lh-6: 15px;
  --line-height-lh-7: 15.6px;
  --line-height-lh-8: 16.5px;
  --line-height-lh-9: 17.6px;
  --line-height-lh-10: 19.2px;
  --line-height-lh-11: 19.512px;
  --line-height-lh-12: 20.8px;
  --line-height-lh-13: 21.6px;
  --line-height-lh-14: 22.8px;
  --line-height-lh-15: 24px;
  --line-height-lh-16: 24.96px;
  --line-height-lh-17: 25.6px;
  --line-height-lh-18: 27.2px;
  --line-height-lh-19: 28px;
  --line-height-lh-20: 32px;
  --line-height-lh-21: 35.2px;
  --line-height-lh-22: 52px;
  --line-height-lh-23: 85.6px;
  --letter-spacing-tight: -0.16px;
  --letter-spacing-normal: 0.13008px;
  --letter-spacing-wide: 0.14px;
  --letter-spacing-wider: 0.15px;
  --letter-spacing-widest: 0.28px;
  --letter-spacing-ls-6: 0.32px;
  --letter-spacing-ls-7: 0.72px;
  --letter-spacing-ls-8: 0.9px;
  --letter-spacing-ls-9: 0.96px;
  --letter-spacing-ls-10: 1.04064px;
  --letter-spacing-ls-11: 1.07px;
  --letter-spacing-ls-12: 1.1px;
  --letter-spacing-ls-13: 1.2px;
  --letter-spacing-ls-14: 1.28px;
  --letter-spacing-ls-15: 1.5px;
  --letter-spacing-ls-16: 1.8px;
  --letter-spacing-ls-17: 1.9px;

  /* ── Layout: Spacing ── */
  --space-1: 2px;
  --space-2: 3px;
  --space-3: 4px;
  --space-4: 5px;
  --space-5: 6px;
  --space-6: 7px;
  --space-8: 8px;
  --space-10: 10px;
  --space-12: 12px;
  --space-16: 14px;
  --space-20: 16px;
  --space-24: 67px;
  --space-32: 266.5px;
  --space-40: 21px;
  --space-48: 24px;
  --space-64: 25px;
  --space-80: 30px;
  --space-96: 35px;
  --space-128: 40px;
  --space-160: 48px;
  --space-192: 50px;
  --space-256: 60px;
  --space-23: 65px;
  --space-25: 70px;
  --space-26: 75px;
  --space-27: 80px;
  --space-28: 100px;
  --space-29: 150px;
  --space-30: 154.844px;
  --space-31: 160px;

  /* ── Borders ── */
  --border-width-hairline: 1px;
  --border-width-thin: 8px;
  --border-width-base: 12px;
  --radius-sm: 1px;
  --radius-md: 2px;
  --radius-lg: 3px;
  --radius-xl: 4px;
  --radius-2xl: 10px;
  --radius-full: 17px;
  --radius-r7: 20px;
  --radius-r8: 24px;
  --radius-r9: 30px;
  --radius-r10: 50%;
  --radius-r11: 50px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgba(0, 0, 0, 0) 0px -1px 0px 0px inset;
  --shadow-md: rgb(60, 255, 208) 0px -1px 0px 0px inset;
  --shadow-lg: rgb(0, 0, 0) 0px -1px 0px 0px inset;
  --shadow-xl: rgba(0, 0, 0, 0) 0px 0px 0px 0px inset;
  --shadow-shadow-5: rgb(255, 255, 255) 0px -1px 0px 0px inset;
  --shadow-shadow-6: rgba(0, 0, 0, 0.4) 0px 4px 10px 0px;

  /* ── Motion ── */
  --duration-instant: 0.1s;
  --duration-fast: 0.15s;
  --duration-normal: 0.2s;
  --duration-slow: 0.25s;
  --duration-slower: 0.3s;
  --duration-duration-6: 0.4s;
  --duration-duration-7: 0.5s;
  --easing-ease-in: ease-in;
  --easing-ease-out: ease-out;
  --easing-linear: linear;

  /* ── Layout: Z-Index ── */
  --z-1: -1;
  --z-2: 1;
  --z-3: 2;
  --z-4: 3;
  --z-5: 9;
  --z-6: 10;
  --z-7: 50;
  --z-8: 100;
  --z-9: 900;
  --z-10: 10900;
  --z-11: 11000;
  --z-12: 2147483645;
  --z-13: 2147483646;
  --z-14: 2147483647;

  /* ── Breakpoints ── */
  --breakpoint-xs: 320px;
  --breakpoint-sm: 400px;
  --breakpoint-md: 425px;
  --breakpoint-lg: 426px;
  --breakpoint-xl: 530px;
  --breakpoint-2xl: 549px;
  --breakpoint-3xl: 550px;
  --breakpoint-bp-8: 600px;
  --breakpoint-bp-9: 605px;
  --breakpoint-bp-10: 620px;
  --breakpoint-bp-11: 768px;
  --breakpoint-bp-12: 769px;
  --breakpoint-bp-13: 890px;
  --breakpoint-bp-14: 896px;
  --breakpoint-bp-15: 897px;
  --breakpoint-bp-16: 900px;
  --breakpoint-bp-17: 901px;
  --breakpoint-bp-18: 1023px;
  --breakpoint-bp-19: 1024px;
  --breakpoint-bp-20: 1179px;
  --breakpoint-bp-21: 1180px;
  --breakpoint-bp-22: 1181px;
  --breakpoint-bp-23: 1200px;
  --breakpoint-bp-24: 1280px;
  --breakpoint-bp-25: 1300px;

  /* ── Opacity ── */
  --opacity-20: 0.2;
  --opacity-80: 0.8;
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://www.theverge.com/",
    "title": "The Verge",
    "generatedAt": "2026-04-18T08:23:33.494Z"
  },
  "core": {
    "color": {
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "background · ×4625"
      },
      "mid-gray": {
        "$value": "#949494",
        "$type": "color",
        "$description": "text · ×1636"
      },
      "white": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×1242"
      },
      "dark-gray": {
        "$value": "#131313",
        "$type": "color",
        "$description": "background · ×1221"
      },
      "cyan": {
        "$value": "#3CFFD0",
        "$type": "color",
        "$description": "background · ×936"
      },
      "cyan-2": {
        "$value": "#309875",
        "$type": "color",
        "$description": "text · ×146"
      },
      "blue": {
        "$value": "#5200FF",
        "$type": "color",
        "$description": "background · ×132"
      },
      "dark-gray-2": {
        "$value": "#313131",
        "$type": "color",
        "$description": "background · ×66"
      },
      "light-gray": {
        "$value": "#E9E9E9",
        "$type": "color",
        "$description": "text · ×28"
      },
      "dark-gray-3": {
        "$value": "#555555",
        "$type": "color",
        "$description": "text · ×27"
      },
      "mid-gray-2": {
        "$value": "#696969",
        "$type": "color",
        "$description": "text · ×20"
      },
      "dark-gray-4": {
        "$value": "#2D2D2D",
        "$type": "color",
        "$description": "background · ×6"
      },
      "light-gray-2": {
        "$value": "#EFEFEF",
        "$type": "color",
        "$description": "text · ×6"
      },
      "green": {
        "$value": "#468254",
        "$type": "color",
        "$description": "background · ×5"
      },
      "dark-gray-5": {
        "$value": "#656565",
        "$type": "color",
        "$description": "text · ×5"
      },
      "light-pink": {
        "$value": "rgba(255, 194, 231, 0.9)",
        "$type": "color",
        "$description": "background · ×4"
      },
      "yellow": {
        "$value": "rgba(214, 243, 31, 0.9)",
        "$type": "color",
        "$description": "background · ×4"
      },
      "light-gray-3": {
        "$value": "#BDBDBD",
        "$type": "color",
        "$description": "text · ×4"
      },
      "blue-2": {
        "$value": "#3860BE",
        "$type": "color",
        "$description": "background · ×4"
      },
      "white-2": {
        "$value": "#F7F5FE",
        "$type": "color",
        "$description": "background · ×4"
      },
      "dark-gray-6": {
        "$value": "#222222",
        "$type": "color",
        "$description": "background · ×2"
      },
      "light-gray-4": {
        "$value": "#C9C9C9",
        "$type": "color",
        "$description": "text · ×2"
      },
      "red": {
        "$value": "rgba(255, 61, 0, 0.9)",
        "$type": "color",
        "$description": "background · ×2"
      },
      "dark-gray-7": {
        "$value": "#636363",
        "$type": "color",
        "$description": "text · ×2"
      },
      "cyan-3": {
        "$value": "#32AE88",
        "$type": "color",
        "$description": "border · ×2"
      },
      "light-gray-5": {
        "$value": "#C7C5C7",
        "$type": "color",
        "$description": "shadow · ×2"
      },
      "dark-gray-8": {
        "$value": "rgba(39, 39, 39, 0.95)",
        "$type": "color",
        "$description": "background · ×1"
      },
      "mid-gray-3": {
        "$value": "#808080",
        "$type": "color",
        "$description": "shadow · ×1"
      },
      "light-gray-6": {
        "$value": "#C1C1C1",
        "$type": "color",
        "$description": "border · ×1"
      },
      "mid-gray-4": {
        "$value": "#999999",
        "$type": "color",
        "$description": "shadow · ×1"
      },
      "white-3": {
        "$value": "#F9FFFA",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-gray-7": {
        "$value": "#D8D8D8",
        "$type": "color",
        "$description": "border · ×1"
      },
      "mid-gray-5": {
        "$value": "#707070",
        "$type": "color",
        "$description": "border · ×1"
      },
      "dark-blue": {
        "$value": "#2E3644",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-8": {
        "$value": "#BBBBBB",
        "$type": "color",
        "$description": "border · ×1"
      },
      "white-4": {
        "$value": "#F9F9FC",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-gray-9": {
        "$value": "#E2E2E2",
        "$type": "color",
        "$description": "border · ×1"
      },
      "white-5": {
        "$value": "#F4F4F4",
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
        "$value": "13.008px",
        "$type": "dimension"
      },
      "font-size-2xl": {
        "$value": "13.6px",
        "$type": "dimension"
      },
      "font-size-3xl": {
        "$value": "14px",
        "$type": "dimension"
      },
      "font-size-4xl": {
        "$value": "14.08px",
        "$type": "dimension"
      },
      "font-size-5xl": {
        "$value": "14.4px",
        "$type": "dimension"
      },
      "font-size-6xl": {
        "$value": "15px",
        "$type": "dimension"
      },
      "font-size-16px": {
        "$value": "16px",
        "$type": "dimension"
      },
      "font-size-18px": {
        "$value": "18px",
        "$type": "dimension"
      },
      "font-size-19px": {
        "$value": "19.2px",
        "$type": "dimension"
      },
      "font-size-20px": {
        "$value": "20px",
        "$type": "dimension"
      },
      "font-size-28px": {
        "$value": "28px",
        "$type": "dimension"
      },
      "font-size-32px": {
        "$value": "32px",
        "$type": "dimension"
      },
      "font-size-40px": {
        "$value": "40px",
        "$type": "dimension"
      },
      "font-size-65px": {
        "$value": "65px",
        "$type": "dimension"
      },
      "font-size-107px": {
        "$value": "107px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "ui-sans-serif",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "__polySansMono_0b836e",
        "$type": "fontFamily"
      },
      "font-family-3": {
        "$value": "__polySans_9afc27",
        "$type": "fontFamily"
      },
      "font-family-4": {
        "$value": "__manuka_62afb5",
        "$type": "fontFamily"
      },
      "font-family-5": {
        "$value": "__fkRomanStandard_cfceed",
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
      },
      "font-weight-black": {
        "$value": "900",
        "$type": "fontWeight"
      }
    },
    "lineHeight": {
      "line-height-tight": {
        "$value": "9.9px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "11px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "12px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "13px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "14px",
        "$type": "dimension"
      },
      "line-height-lh-6": {
        "$value": "15px",
        "$type": "dimension"
      },
      "line-height-lh-7": {
        "$value": "15.6px",
        "$type": "dimension"
      },
      "line-height-lh-8": {
        "$value": "16.5px",
        "$type": "dimension"
      },
      "line-height-lh-9": {
        "$value": "17.6px",
        "$type": "dimension"
      },
      "line-height-lh-10": {
        "$value": "19.2px",
        "$type": "dimension"
      },
      "line-height-lh-11": {
        "$value": "19.512px",
        "$type": "dimension"
      },
      "line-height-lh-12": {
        "$value": "20.8px",
        "$type": "dimension"
      },
      "line-height-lh-13": {
        "$value": "21.6px",
        "$type": "dimension"
      },
      "line-height-lh-14": {
        "$value": "22.8px",
        "$type": "dimension"
      },
      "line-height-lh-15": {
        "$value": "24px",
        "$type": "dimension"
      },
      "line-height-lh-16": {
        "$value": "24.96px",
        "$type": "dimension"
      },
      "line-height-lh-17": {
        "$value": "25.6px",
        "$type": "dimension"
      },
      "line-height-lh-18": {
        "$value": "27.2px",
        "$type": "dimension"
      },
      "line-height-lh-19": {
        "$value": "28px",
        "$type": "dimension"
      },
      "line-height-lh-20": {
        "$value": "32px",
        "$type": "dimension"
      },
      "line-height-lh-21": {
        "$value": "35.2px",
        "$type": "dimension"
      },
      "line-height-lh-22": {
        "$value": "52px",
        "$type": "dimension"
      },
      "line-height-lh-23": {
        "$value": "85.6px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "-0.16px",
        "$type": "dimension"
      },
      "letter-spacing-normal": {
        "$value": "0.13008px",
        "$type": "dimension"
      },
      "letter-spacing-wide": {
        "$value": "0.14px",
        "$type": "dimension"
      },
      "letter-spacing-wider": {
        "$value": "0.15px",
        "$type": "dimension"
      },
      "letter-spacing-widest": {
        "$value": "0.28px",
        "$type": "dimension"
      },
      "letter-spacing-ls-6": {
        "$value": "0.32px",
        "$type": "dimension"
      },
      "letter-spacing-ls-7": {
        "$value": "0.72px",
        "$type": "dimension"
      },
      "letter-spacing-ls-8": {
        "$value": "0.9px",
        "$type": "dimension"
      },
      "letter-spacing-ls-9": {
        "$value": "0.96px",
        "$type": "dimension"
      },
      "letter-spacing-ls-10": {
        "$value": "1.04064px",
        "$type": "dimension"
      },
      "letter-spacing-ls-11": {
        "$value": "1.07px",
        "$type": "dimension"
      },
      "letter-spacing-ls-12": {
        "$value": "1.1px",
        "$type": "dimension"
      },
      "letter-spacing-ls-13": {
        "$value": "1.2px",
        "$type": "dimension"
      },
      "letter-spacing-ls-14": {
        "$value": "1.28px",
        "$type": "dimension"
      },
      "letter-spacing-ls-15": {
        "$value": "1.5px",
        "$type": "dimension"
      },
      "letter-spacing-ls-16": {
        "$value": "1.8px",
        "$type": "dimension"
      },
      "letter-spacing-ls-17": {
        "$value": "1.9px",
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
        "$value": "3px",
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
        "$value": "14px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "16px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "67px",
        "$type": "dimension"
      },
      "space-32": {
        "$value": "266.5px",
        "$type": "dimension"
      },
      "space-40": {
        "$value": "21px",
        "$type": "dimension"
      },
      "space-48": {
        "$value": "24px",
        "$type": "dimension"
      },
      "space-64": {
        "$value": "25px",
        "$type": "dimension"
      },
      "space-80": {
        "$value": "30px",
        "$type": "dimension"
      },
      "space-96": {
        "$value": "35px",
        "$type": "dimension"
      },
      "space-128": {
        "$value": "40px",
        "$type": "dimension"
      },
      "space-160": {
        "$value": "48px",
        "$type": "dimension"
      },
      "space-192": {
        "$value": "50px",
        "$type": "dimension"
      },
      "space-256": {
        "$value": "60px",
        "$type": "dimension"
      },
      "space-23": {
        "$value": "65px",
        "$type": "dimension"
      },
      "space-25": {
        "$value": "70px",
        "$type": "dimension"
      },
      "space-26": {
        "$value": "75px",
        "$type": "dimension"
      },
      "space-27": {
        "$value": "80px",
        "$type": "dimension"
      },
      "space-28": {
        "$value": "100px",
        "$type": "dimension"
      },
      "space-29": {
        "$value": "150px",
        "$type": "dimension"
      },
      "space-30": {
        "$value": "154.844px",
        "$type": "dimension"
      },
      "space-31": {
        "$value": "160px",
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
        "$value": "9",
        "$type": "number"
      },
      "z-6": {
        "$value": "10",
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
        "$value": "900",
        "$type": "number"
      },
      "z-10": {
        "$value": "10900",
        "$type": "number"
      },
      "z-11": {
        "$value": "11000",
        "$type": "number"
      },
      "z-12": {
        "$value": "2147483645",
        "$type": "number"
      },
      "z-13": {
        "$value": "2147483646",
        "$type": "number"
      },
      "z-14": {
        "$value": "2147483647",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "320px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "400px",
        "$type": "dimension"
      },
      "breakpoint-md": {
        "$value": "425px",
        "$type": "dimension"
      },
      "breakpoint-lg": {
        "$value": "426px",
        "$type": "dimension"
      },
      "breakpoint-xl": {
        "$value": "530px",
        "$type": "dimension"
      },
      "breakpoint-2xl": {
        "$value": "549px",
        "$type": "dimension"
      },
      "breakpoint-3xl": {
        "$value": "550px",
        "$type": "dimension"
      },
      "breakpoint-bp-8": {
        "$value": "600px",
        "$type": "dimension"
      },
      "breakpoint-bp-9": {
        "$value": "605px",
        "$type": "dimension"
      },
      "breakpoint-bp-10": {
        "$value": "620px",
        "$type": "dimension"
      },
      "breakpoint-bp-11": {
        "$value": "768px",
        "$type": "dimension"
      },
      "breakpoint-bp-12": {
        "$value": "769px",
        "$type": "dimension"
      },
      "breakpoint-bp-13": {
        "$value": "890px",
        "$type": "dimension"
      },
      "breakpoint-bp-14": {
        "$value": "896px",
        "$type": "dimension"
      },
      "breakpoint-bp-15": {
        "$value": "897px",
        "$type": "dimension"
      },
      "breakpoint-bp-16": {
        "$value": "900px",
        "$type": "dimension"
      },
      "breakpoint-bp-17": {
        "$value": "901px",
        "$type": "dimension"
      },
      "breakpoint-bp-18": {
        "$value": "1023px",
        "$type": "dimension"
      },
      "breakpoint-bp-19": {
        "$value": "1024px",
        "$type": "dimension"
      },
      "breakpoint-bp-20": {
        "$value": "1179px",
        "$type": "dimension"
      },
      "breakpoint-bp-21": {
        "$value": "1180px",
        "$type": "dimension"
      },
      "breakpoint-bp-22": {
        "$value": "1181px",
        "$type": "dimension"
      },
      "breakpoint-bp-23": {
        "$value": "1200px",
        "$type": "dimension"
      },
      "breakpoint-bp-24": {
        "$value": "1280px",
        "$type": "dimension"
      },
      "breakpoint-bp-25": {
        "$value": "1300px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
        "$value": "1px",
        "$type": "dimension"
      },
      "radius-md": {
        "$value": "2px",
        "$type": "dimension"
      },
      "radius-lg": {
        "$value": "3px",
        "$type": "dimension"
      },
      "radius-xl": {
        "$value": "4px",
        "$type": "dimension"
      },
      "radius-2xl": {
        "$value": "10px",
        "$type": "dimension"
      },
      "radius-full": {
        "$value": "17px",
        "$type": "dimension"
      },
      "radius-r7": {
        "$value": "20px",
        "$type": "dimension"
      },
      "radius-r8": {
        "$value": "24px",
        "$type": "dimension"
      },
      "radius-r9": {
        "$value": "30px",
        "$type": "dimension"
      },
      "radius-r10": {
        "$value": "50%",
        "$type": "dimension"
      },
      "radius-r11": {
        "$value": "50px",
        "$type": "dimension"
      }
    },
    "borderWidth": {
      "border-width-hairline": {
        "$value": "1px",
        "$type": "dimension"
      },
      "border-width-thin": {
        "$value": "8px",
        "$type": "dimension"
      },
      "border-width-base": {
        "$value": "12px",
        "$type": "dimension"
      }
    },
    "shadow": {
      "shadow-sm": {
        "$value": "rgba(0, 0, 0, 0) 0px -1px 0px 0px inset",
        "$type": "shadow"
      },
      "shadow-md": {
        "$value": "rgb(60, 255, 208) 0px -1px 0px 0px inset",
        "$type": "shadow"
      },
      "shadow-lg": {
        "$value": "rgb(0, 0, 0) 0px -1px 0px 0px inset",
        "$type": "shadow"
      },
      "shadow-xl": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px inset",
        "$type": "shadow"
      },
      "shadow-shadow-5": {
        "$value": "rgb(255, 255, 255) 0px -1px 0px 0px inset",
        "$type": "shadow"
      },
      "shadow-shadow-6": {
        "$value": "rgba(0, 0, 0, 0.4) 0px 4px 10px 0px",
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
        "$value": "0.4s",
        "$type": "duration"
      },
      "duration-duration-7": {
        "$value": "0.5s",
        "$type": "duration"
      }
    },
    "easing": {
      "easing-ease-in": {
        "$value": "ease-in",
        "$type": "cubicBezier"
      },
      "easing-ease-out": {
        "$value": "ease-out",
        "$type": "cubicBezier"
      },
      "easing-linear": {
        "$value": "linear",
        "$type": "cubicBezier"
      }
    }
  },
  "opacity": {
    "opacity-20": {
      "$value": 0.2,
      "$type": "number"
    },
    "opacity-80": {
      "$value": 0.8,
      "$type": "number"
    }
  }
}
```
