# Coinbase - Buy & Sell Bitcoin, Ethereum, and more with trust — Design System

**Source:** https://www.coinbase.com/en-in  
**Generated:** 15/04/2026, 00:24:44  
**Extracted:** 28 colors · 38 type tokens · 12 spacing steps · 16 breakpoints · 5 motion tokens

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
9. [Accessibility — Contrast Ratios](#accessibility--contrast-ratios)
10. [CSS Custom Properties (from :root)](#css-custom-properties-from-root)
11. [Design Tokens (CSS Variables)](#design-tokens-css-variables)
12. [Machine-Readable Tokens — DTCG JSON](#machine-readable-tokens--dtcg-json)

---

## Color Palette

### Background Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-white` | `#FFFFFF` | hsl(0, 0%, 100%) | ×1612 |
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×1170 |
| `--color-black-2` | `#0A0B0D` | hsl(220, 13%, 5%) | ×175 |
| `--color-blue-4` | `#0052FF` | hsl(221, 100%, 50%) | ×29 |
| `--color-light-gray` | `#EEF0F3` | hsl(216, 17%, 94%) | ×18 |
| `--color-white-2` | `#F7F8F9` | hsl(210, 14%, 97%) | ×4 |
| `--color-dark-gray-4` | `#282B31` | hsl(220, 10%, 17%) | ×2 |
| `--color-blue-6` | `#3860BE` | hsl(222, 54%, 48%) | ×2 |
| `--color-blue-7` | `rgba(91, 97, 110, 0.2)` | hsl(225, 10%, 39%) | ×1 |
| `--color-white-3` | `#F9FFFA` | hsl(130, 100%, 99%) | ×1 |
| `--color-white-4` | `#F4F4F4` | hsl(0, 0%, 96%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-cyan` | `#27AD75` | hsl(155, 63%, 42%) | ×528 |
| `--color-blue` | `#5B616E` | hsl(221, 9%, 39%) | ×312 |
| `--color-red` | `#F0616D` | hsl(355, 83%, 66%) | ×132 |
| `--color-blue-2` | `#578BFA` | hsl(221, 94%, 66%) | ×108 |
| `--color-blue-3` | `#0667D0` | hsl(211, 94%, 42%) | ×68 |
| `--color-dark-gray` | `#1D1D1D` | hsl(0, 0%, 11%) | ×56 |
| `--color-dark-gray-2` | `#555555` | hsl(0, 0%, 33%) | ×23 |
| `--color-dark-gray-3` | `#656565` | hsl(0, 0%, 40%) | ×5 |
| `--color-blue-5` | `#8A919E` | hsl(219, 9%, 58%) | ×2 |
| `--color-mid-gray` | `#808080` | hsl(0, 0%, 50%) | ×2 |
| `--color-mid-gray-2` | `#696969` | hsl(0, 0%, 41%) | ×2 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-cyan-2` | `#32AE88` | hsl(162, 55%, 44%) | ×1 |
| `--color-light-gray-3` | `#D1D1D1` | hsl(0, 0%, 82%) | ×1 |
| `--color-light-gray-4` | `#BBBBBB` | hsl(0, 0%, 73%) | ×1 |

### Shadow Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray-2` | `#C7C5C7` | hsl(300, 2%, 78%) | ×2 |
| `--color-mid-gray-3` | `#999999` | hsl(0, 0%, 60%) | ×1 |

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-blue` | `#2E3644` | hsl(218, 19%, 22%) | ×1 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `CoinbaseSans` |
| `--font-family-2` | `CoinbaseIcons` |
| `--font-family-3` | `CoinbaseDisplay` |
| `--font-family-4` | `CoinbaseText` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `12px` |  |
| `--font-size-xs` | `12.992px` |  |
| `--font-size-sm` | `13.6px` |  |
| `--font-size-base` | `14px` |  |
| `--font-size-lg` | `14.4px` |  |
| `--font-size-xl` | `16px` |  |
| `--font-size-2xl` | `18px` |  |
| `--font-size-3xl` | `20px` |  |
| `--font-size-4xl` | `24px` |  |
| `--font-size-5xl` | `32px` |  |
| `--font-size-6xl` | `40px` |  |
| `--font-size-52px` | `52px` |  |
| `--font-size-64px` | `64px` |  |

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
| `--line-height-tight` | `14.4px` |
| `--line-height-snug` | `16px` |
| `--line-height-normal` | `16.8px` |
| `--line-height-relaxed` | `17.6px` |
| `--line-height-loose` | `19.2px` |
| `--line-height-lh-6` | `20px` |
| `--line-height-lh-7` | `20.8px` |
| `--line-height-lh-8` | `24px` |
| `--line-height-lh-9` | `28px` |
| `--line-height-lh-10` | `36px` |
| `--line-height-lh-11` | `44px` |
| `--line-height-lh-12` | `52px` |
| `--line-height-lh-13` | `64px` |
| `--line-height-lh-14` | `73.6px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `0.14px` |
| `--letter-spacing-normal` | `0.144px` |
| `--letter-spacing-wide` | `0.16px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `4px` | ×19 |
| `--space-2` | `8px` | ×106 |
| `--space-3` | `10px` | ×2 |
| `--space-4` | `12px` | ×171 |
| `--space-5` | `16px` | ×143 |
| `--space-6` | `24px` | ×102 |
| `--space-8` | `28px` | ×1 |
| `--space-10` | `30px` | ×4 |
| `--space-12` | `32px` | ×31 |
| `--space-16` | `40px` | ×2 |
| `--space-20` | `64px` | ×8 |
| `--space-24` | `80px` | ×12 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `1px` | ×156 |
| `--border-width-thin` | `12px` | ×4 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `2px` | ×3 |
| `--radius-md` | `3px` | ×2 |
| `--radius-lg` | `4px` | ×3 |
| `--radius-xl` | `16px` | ×1 |
| `--radius-2xl` | `17px` | ×1 |
| `--radius-full` | `20px` | ×3 |
| `--radius-r7` | `24px` | ×6 |
| `--radius-r8` | `32px` | ×1 |
| `--radius-r9` | `40px` | ×6 |
| `--radius-r10` | `45px` | ×3 |
| `--radius-r11` | `48px` | ×7 |
| `--radius-r12` | `50%` | ×1 |
| `--radius-r13` | `50px` | ×1 |
| `--radius-r14` | `56px` | ×15 |
| `--radius-r15` | `100000px` | ×4 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgb(255, 255, 255) 0px -1px 0px 1px` | ×1 |
| `--shadow-md` | `rgba(0, 0, 0, 0.2) 0px 0px 18px 0px` | ×1 |
| `--shadow-lg` | `rgb(153, 153, 153) 0px 2px 10px -3px` | ×1 |
| `--shadow-xl` | `rgb(199, 197, 199) -3px -3px 5px -2px` | ×1 |
| `--shadow-shadow-5` | `rgb(199, 197, 199) 0px 0px 12px 2px` | ×1 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.1s` | ×1 |
| `--duration-fast` | `0.2s` | ×8 |
| `--duration-normal` | `0.3s` | ×145 |

### Easing Functions

| Token | Value | Usage |
| --- | --- | --- |
| `--easing-ease-in-out` | `ease-in-out` | ×149 |
| `--easing-ease-in` | `ease-in` | ×3 |

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `1` |
| `--z-2` | `2` |
| `--z-3` | `3` |
| `--z-4` | `4` |
| `--z-5` | `5` |
| `--z-6` | `6` |
| `--z-7` | `7` |
| `--z-8` | `100001` |
| `--z-9` | `2147483645` |
| `--z-10` | `2147483646` |
| `--z-11` | `2147483647` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `400px` |
| `--breakpoint-sm` | `425px` |
| `--breakpoint-md` | `426px` |
| `--breakpoint-lg` | `500px` |
| `--breakpoint-xl` | `530px` |
| `--breakpoint-2xl` | `550px` |
| `--breakpoint-3xl` | `576px` |
| `--breakpoint-bp-8` | `600px` |
| `--breakpoint-bp-9` | `640px` |
| `--breakpoint-bp-10` | `767px` |
| `--breakpoint-bp-11` | `768px` |
| `--breakpoint-bp-12` | `896px` |
| `--breakpoint-bp-13` | `1279px` |
| `--breakpoint-bp-14` | `1280px` |
| `--breakpoint-bp-15` | `1439px` |
| `--breakpoint-bp-16` | `1600px` |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-cyan` | `--color-white` | 2.87:1 | Fail |
| `--color-cyan` | `--color-black` | 7.32:1 | AAA |
| `--color-cyan` | `--color-black-2` | 6.86:1 | AA |
| `--color-cyan` | `--color-blue-4` | 2.01:1 | Fail |
| `--color-cyan` | `--color-light-gray` | 2.51:1 | Fail |
| `--color-blue` | `--color-white` | 6.21:1 | AA |
| `--color-blue` | `--color-black` | 3.38:1 | AA Large |
| `--color-blue` | `--color-black-2` | 3.17:1 | AA Large |
| `--color-blue` | `--color-blue-4` | 1.08:1 | Fail |
| `--color-blue` | `--color-light-gray` | 5.44:1 | AA |
| `--color-red` | `--color-white` | 3.16:1 | AA Large |
| `--color-red` | `--color-black` | 6.64:1 | AA |
| `--color-red` | `--color-black-2` | 6.22:1 | AA |
| `--color-red` | `--color-blue-4` | 1.82:1 | Fail |
| `--color-red` | `--color-light-gray` | 2.77:1 | Fail |
| `--color-blue-2` | `--color-white` | 3.24:1 | AA Large |
| `--color-blue-2` | `--color-black` | 6.48:1 | AA |
| `--color-blue-2` | `--color-black-2` | 6.07:1 | AA |
| `--color-blue-2` | `--color-blue-4` | 1.77:1 | Fail |
| `--color-blue-2` | `--color-light-gray` | 2.84:1 | Fail |
| `--color-blue-3` | `--color-white` | 5.44:1 | AA |
| `--color-blue-3` | `--color-black` | 3.86:1 | AA Large |
| `--color-blue-3` | `--color-black-2` | 3.62:1 | AA Large |
| `--color-blue-3` | `--color-blue-4` | 1.06:1 | Fail |
| `--color-blue-3` | `--color-light-gray` | 4.77:1 | AA |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--cds-font-fallback` | `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"` |
| `--cds-font-display` | `CoinbaseDisplay, var(--cds-font-fallback)` |
| `--cds-font-sans` | `CoinbaseSans, var(--cds-font-fallback)` |
| `--cds-font-text` | `CoinbaseText, var(--cds-font-fallback)` |
| `--cds-font-mono` | `CoinbaseMono, var(--cds-font-fallback)` |
| `--cds-font-condensed` | `CoinbaseCondensed, var(--cds-font-fallback)` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — Coinbase - Buy & Sell Bitcoin, Ethereum, and more with trust
 * Source: https://www.coinbase.com/en-in
 * Generated: 15/04/2026, 00:24:44
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-white: #FFFFFF; /* hsl(0, 0%, 100%) · background */
  --color-black: #000000; /* hsl(0, 0%, 0%) · background */
  --color-cyan: #27AD75; /* hsl(155, 63%, 42%) · text */
  --color-blue: #5B616E; /* hsl(221, 9%, 39%) · text */
  --color-black-2: #0A0B0D; /* hsl(220, 13%, 5%) · background */
  --color-red: #F0616D; /* hsl(355, 83%, 66%) · text */
  --color-blue-2: #578BFA; /* hsl(221, 94%, 66%) · text */
  --color-blue-3: #0667D0; /* hsl(211, 94%, 42%) · text */
  --color-dark-gray: #1D1D1D; /* hsl(0, 0%, 11%) · text */
  --color-blue-4: #0052FF; /* hsl(221, 100%, 50%) · background */
  --color-dark-gray-2: #555555; /* hsl(0, 0%, 33%) · text */
  --color-light-gray: #EEF0F3; /* hsl(216, 17%, 94%) · background */
  --color-dark-gray-3: #656565; /* hsl(0, 0%, 40%) · text */
  --color-white-2: #F7F8F9; /* hsl(210, 14%, 97%) · background */
  --color-dark-gray-4: #282B31; /* hsl(220, 10%, 17%) · background */
  --color-blue-5: #8A919E; /* hsl(219, 9%, 58%) · text */
  --color-mid-gray: #808080; /* hsl(0, 0%, 50%) · text */
  --color-mid-gray-2: #696969; /* hsl(0, 0%, 41%) · text */
  --color-blue-6: #3860BE; /* hsl(222, 54%, 48%) · background */
  --color-light-gray-2: #C7C5C7; /* hsl(300, 2%, 78%) · shadow */
  --color-blue-7: rgba(91, 97, 110, 0.2); /* hsl(225, 10%, 39%) · background */
  --color-mid-gray-3: #999999; /* hsl(0, 0%, 60%) · shadow */
  --color-white-3: #F9FFFA; /* hsl(130, 100%, 99%) · background */
  --color-cyan-2: #32AE88; /* hsl(162, 55%, 44%) · border */
  --color-light-gray-3: #D1D1D1; /* hsl(0, 0%, 82%) · border */
  --color-dark-blue: #2E3644; /* hsl(218, 19%, 22%) · fill */
  --color-light-gray-4: #BBBBBB; /* hsl(0, 0%, 73%) · border */
  --color-white-4: #F4F4F4; /* hsl(0, 0%, 96%) · background */

  /* ── Core: Typography ── */
  --font-size-2xs: 12px;
  --font-size-xs: 12.992px;
  --font-size-sm: 13.6px;
  --font-size-base: 14px;
  --font-size-lg: 14.4px;
  --font-size-xl: 16px;
  --font-size-2xl: 18px;
  --font-size-3xl: 20px;
  --font-size-4xl: 24px;
  --font-size-5xl: 32px;
  --font-size-6xl: 40px;
  --font-size-52px: 52px;
  --font-size-64px: 64px;
  --font-family-base: CoinbaseSans;
  --font-family-2: CoinbaseIcons;
  --font-family-3: CoinbaseDisplay;
  --font-family-4: CoinbaseText;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-tight: 14.4px;
  --line-height-snug: 16px;
  --line-height-normal: 16.8px;
  --line-height-relaxed: 17.6px;
  --line-height-loose: 19.2px;
  --line-height-lh-6: 20px;
  --line-height-lh-7: 20.8px;
  --line-height-lh-8: 24px;
  --line-height-lh-9: 28px;
  --line-height-lh-10: 36px;
  --line-height-lh-11: 44px;
  --line-height-lh-12: 52px;
  --line-height-lh-13: 64px;
  --line-height-lh-14: 73.6px;
  --letter-spacing-tight: 0.14px;
  --letter-spacing-normal: 0.144px;
  --letter-spacing-wide: 0.16px;

  /* ── Layout: Spacing ── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 10px;
  --space-4: 12px;
  --space-5: 16px;
  --space-6: 24px;
  --space-8: 28px;
  --space-10: 30px;
  --space-12: 32px;
  --space-16: 40px;
  --space-20: 64px;
  --space-24: 80px;

  /* ── Borders ── */
  --border-width-hairline: 1px;
  --border-width-thin: 12px;
  --radius-sm: 2px;
  --radius-md: 3px;
  --radius-lg: 4px;
  --radius-xl: 16px;
  --radius-2xl: 17px;
  --radius-full: 20px;
  --radius-r7: 24px;
  --radius-r8: 32px;
  --radius-r9: 40px;
  --radius-r10: 45px;
  --radius-r11: 48px;
  --radius-r12: 50%;
  --radius-r13: 50px;
  --radius-r14: 56px;
  --radius-r15: 100000px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgb(255, 255, 255) 0px -1px 0px 1px;
  --shadow-md: rgba(0, 0, 0, 0.2) 0px 0px 18px 0px;
  --shadow-lg: rgb(153, 153, 153) 0px 2px 10px -3px;
  --shadow-xl: rgb(199, 197, 199) -3px -3px 5px -2px;
  --shadow-shadow-5: rgb(199, 197, 199) 0px 0px 12px 2px;

  /* ── Motion ── */
  --duration-instant: 0.1s;
  --duration-fast: 0.2s;
  --duration-normal: 0.3s;
  --easing-ease-in-out: ease-in-out;
  --easing-ease-in: ease-in;

  /* ── Layout: Z-Index ── */
  --z-1: 1;
  --z-2: 2;
  --z-3: 3;
  --z-4: 4;
  --z-5: 5;
  --z-6: 6;
  --z-7: 7;
  --z-8: 100001;
  --z-9: 2147483645;
  --z-10: 2147483646;
  --z-11: 2147483647;

  /* ── Breakpoints ── */
  --breakpoint-xs: 400px;
  --breakpoint-sm: 425px;
  --breakpoint-md: 426px;
  --breakpoint-lg: 500px;
  --breakpoint-xl: 530px;
  --breakpoint-2xl: 550px;
  --breakpoint-3xl: 576px;
  --breakpoint-bp-8: 600px;
  --breakpoint-bp-9: 640px;
  --breakpoint-bp-10: 767px;
  --breakpoint-bp-11: 768px;
  --breakpoint-bp-12: 896px;
  --breakpoint-bp-13: 1279px;
  --breakpoint-bp-14: 1280px;
  --breakpoint-bp-15: 1439px;
  --breakpoint-bp-16: 1600px;

  /* ── Opacity ── */
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://www.coinbase.com/en-in",
    "title": "Coinbase - Buy & Sell Bitcoin, Ethereum, and more with trust",
    "generatedAt": "2026-04-14T18:54:44.329Z"
  },
  "core": {
    "color": {
      "white": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×1612"
      },
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "background · ×1170"
      },
      "cyan": {
        "$value": "#27AD75",
        "$type": "color",
        "$description": "text · ×528"
      },
      "blue": {
        "$value": "#5B616E",
        "$type": "color",
        "$description": "text · ×312"
      },
      "black-2": {
        "$value": "#0A0B0D",
        "$type": "color",
        "$description": "background · ×175"
      },
      "red": {
        "$value": "#F0616D",
        "$type": "color",
        "$description": "text · ×132"
      },
      "blue-2": {
        "$value": "#578BFA",
        "$type": "color",
        "$description": "text · ×108"
      },
      "blue-3": {
        "$value": "#0667D0",
        "$type": "color",
        "$description": "text · ×68"
      },
      "dark-gray": {
        "$value": "#1D1D1D",
        "$type": "color",
        "$description": "text · ×56"
      },
      "blue-4": {
        "$value": "#0052FF",
        "$type": "color",
        "$description": "background · ×29"
      },
      "dark-gray-2": {
        "$value": "#555555",
        "$type": "color",
        "$description": "text · ×23"
      },
      "light-gray": {
        "$value": "#EEF0F3",
        "$type": "color",
        "$description": "background · ×18"
      },
      "dark-gray-3": {
        "$value": "#656565",
        "$type": "color",
        "$description": "text · ×5"
      },
      "white-2": {
        "$value": "#F7F8F9",
        "$type": "color",
        "$description": "background · ×4"
      },
      "dark-gray-4": {
        "$value": "#282B31",
        "$type": "color",
        "$description": "background · ×2"
      },
      "blue-5": {
        "$value": "#8A919E",
        "$type": "color",
        "$description": "text · ×2"
      },
      "mid-gray": {
        "$value": "#808080",
        "$type": "color",
        "$description": "text · ×2"
      },
      "mid-gray-2": {
        "$value": "#696969",
        "$type": "color",
        "$description": "text · ×2"
      },
      "blue-6": {
        "$value": "#3860BE",
        "$type": "color",
        "$description": "background · ×2"
      },
      "light-gray-2": {
        "$value": "#C7C5C7",
        "$type": "color",
        "$description": "shadow · ×2"
      },
      "blue-7": {
        "$value": "rgba(91, 97, 110, 0.2)",
        "$type": "color",
        "$description": "background · ×1"
      },
      "mid-gray-3": {
        "$value": "#999999",
        "$type": "color",
        "$description": "shadow · ×1"
      },
      "white-3": {
        "$value": "#F9FFFA",
        "$type": "color",
        "$description": "background · ×1"
      },
      "cyan-2": {
        "$value": "#32AE88",
        "$type": "color",
        "$description": "border · ×1"
      },
      "light-gray-3": {
        "$value": "#D1D1D1",
        "$type": "color",
        "$description": "border · ×1"
      },
      "dark-blue": {
        "$value": "#2E3644",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-4": {
        "$value": "#BBBBBB",
        "$type": "color",
        "$description": "border · ×1"
      },
      "white-4": {
        "$value": "#F4F4F4",
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
        "$value": "12.992px",
        "$type": "dimension"
      },
      "font-size-sm": {
        "$value": "13.6px",
        "$type": "dimension"
      },
      "font-size-base": {
        "$value": "14px",
        "$type": "dimension"
      },
      "font-size-lg": {
        "$value": "14.4px",
        "$type": "dimension"
      },
      "font-size-xl": {
        "$value": "16px",
        "$type": "dimension"
      },
      "font-size-2xl": {
        "$value": "18px",
        "$type": "dimension"
      },
      "font-size-3xl": {
        "$value": "20px",
        "$type": "dimension"
      },
      "font-size-4xl": {
        "$value": "24px",
        "$type": "dimension"
      },
      "font-size-5xl": {
        "$value": "32px",
        "$type": "dimension"
      },
      "font-size-6xl": {
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
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "CoinbaseSans",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "CoinbaseIcons",
        "$type": "fontFamily"
      },
      "font-family-3": {
        "$value": "CoinbaseDisplay",
        "$type": "fontFamily"
      },
      "font-family-4": {
        "$value": "CoinbaseText",
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
        "$value": "14.4px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "16px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "16.8px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "17.6px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "19.2px",
        "$type": "dimension"
      },
      "line-height-lh-6": {
        "$value": "20px",
        "$type": "dimension"
      },
      "line-height-lh-7": {
        "$value": "20.8px",
        "$type": "dimension"
      },
      "line-height-lh-8": {
        "$value": "24px",
        "$type": "dimension"
      },
      "line-height-lh-9": {
        "$value": "28px",
        "$type": "dimension"
      },
      "line-height-lh-10": {
        "$value": "36px",
        "$type": "dimension"
      },
      "line-height-lh-11": {
        "$value": "44px",
        "$type": "dimension"
      },
      "line-height-lh-12": {
        "$value": "52px",
        "$type": "dimension"
      },
      "line-height-lh-13": {
        "$value": "64px",
        "$type": "dimension"
      },
      "line-height-lh-14": {
        "$value": "73.6px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "0.14px",
        "$type": "dimension"
      },
      "letter-spacing-normal": {
        "$value": "0.144px",
        "$type": "dimension"
      },
      "letter-spacing-wide": {
        "$value": "0.16px",
        "$type": "dimension"
      }
    }
  },
  "layout": {
    "spacing": {
      "space-1": {
        "$value": "4px",
        "$type": "dimension"
      },
      "space-2": {
        "$value": "8px",
        "$type": "dimension"
      },
      "space-3": {
        "$value": "10px",
        "$type": "dimension"
      },
      "space-4": {
        "$value": "12px",
        "$type": "dimension"
      },
      "space-5": {
        "$value": "16px",
        "$type": "dimension"
      },
      "space-6": {
        "$value": "24px",
        "$type": "dimension"
      },
      "space-8": {
        "$value": "28px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "30px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "32px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "40px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "64px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "80px",
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
        "$value": "4",
        "$type": "number"
      },
      "z-5": {
        "$value": "5",
        "$type": "number"
      },
      "z-6": {
        "$value": "6",
        "$type": "number"
      },
      "z-7": {
        "$value": "7",
        "$type": "number"
      },
      "z-8": {
        "$value": "100001",
        "$type": "number"
      },
      "z-9": {
        "$value": "2147483645",
        "$type": "number"
      },
      "z-10": {
        "$value": "2147483646",
        "$type": "number"
      },
      "z-11": {
        "$value": "2147483647",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "400px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "425px",
        "$type": "dimension"
      },
      "breakpoint-md": {
        "$value": "426px",
        "$type": "dimension"
      },
      "breakpoint-lg": {
        "$value": "500px",
        "$type": "dimension"
      },
      "breakpoint-xl": {
        "$value": "530px",
        "$type": "dimension"
      },
      "breakpoint-2xl": {
        "$value": "550px",
        "$type": "dimension"
      },
      "breakpoint-3xl": {
        "$value": "576px",
        "$type": "dimension"
      },
      "breakpoint-bp-8": {
        "$value": "600px",
        "$type": "dimension"
      },
      "breakpoint-bp-9": {
        "$value": "640px",
        "$type": "dimension"
      },
      "breakpoint-bp-10": {
        "$value": "767px",
        "$type": "dimension"
      },
      "breakpoint-bp-11": {
        "$value": "768px",
        "$type": "dimension"
      },
      "breakpoint-bp-12": {
        "$value": "896px",
        "$type": "dimension"
      },
      "breakpoint-bp-13": {
        "$value": "1279px",
        "$type": "dimension"
      },
      "breakpoint-bp-14": {
        "$value": "1280px",
        "$type": "dimension"
      },
      "breakpoint-bp-15": {
        "$value": "1439px",
        "$type": "dimension"
      },
      "breakpoint-bp-16": {
        "$value": "1600px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
        "$value": "2px",
        "$type": "dimension"
      },
      "radius-md": {
        "$value": "3px",
        "$type": "dimension"
      },
      "radius-lg": {
        "$value": "4px",
        "$type": "dimension"
      },
      "radius-xl": {
        "$value": "16px",
        "$type": "dimension"
      },
      "radius-2xl": {
        "$value": "17px",
        "$type": "dimension"
      },
      "radius-full": {
        "$value": "20px",
        "$type": "dimension"
      },
      "radius-r7": {
        "$value": "24px",
        "$type": "dimension"
      },
      "radius-r8": {
        "$value": "32px",
        "$type": "dimension"
      },
      "radius-r9": {
        "$value": "40px",
        "$type": "dimension"
      },
      "radius-r10": {
        "$value": "45px",
        "$type": "dimension"
      },
      "radius-r11": {
        "$value": "48px",
        "$type": "dimension"
      },
      "radius-r12": {
        "$value": "50%",
        "$type": "dimension"
      },
      "radius-r13": {
        "$value": "50px",
        "$type": "dimension"
      },
      "radius-r14": {
        "$value": "56px",
        "$type": "dimension"
      },
      "radius-r15": {
        "$value": "100000px",
        "$type": "dimension"
      }
    },
    "borderWidth": {
      "border-width-hairline": {
        "$value": "1px",
        "$type": "dimension"
      },
      "border-width-thin": {
        "$value": "12px",
        "$type": "dimension"
      }
    },
    "shadow": {
      "shadow-sm": {
        "$value": "rgb(255, 255, 255) 0px -1px 0px 1px",
        "$type": "shadow"
      },
      "shadow-md": {
        "$value": "rgba(0, 0, 0, 0.2) 0px 0px 18px 0px",
        "$type": "shadow"
      },
      "shadow-lg": {
        "$value": "rgb(153, 153, 153) 0px 2px 10px -3px",
        "$type": "shadow"
      },
      "shadow-xl": {
        "$value": "rgb(199, 197, 199) -3px -3px 5px -2px",
        "$type": "shadow"
      },
      "shadow-shadow-5": {
        "$value": "rgb(199, 197, 199) 0px 0px 12px 2px",
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
        "$value": "0.2s",
        "$type": "duration"
      },
      "duration-normal": {
        "$value": "0.3s",
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
      }
    }
  },
  "opacity": {}
}
```
