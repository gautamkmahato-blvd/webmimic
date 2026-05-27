# IBM — Design System

**Source:** https://www.ibm.com/in-en  
**Generated:** 15/04/2026, 23:31:28  
**Extracted:** 23 colors · 35 type tokens · 23 spacing steps · 33 breakpoints · 8 motion tokens

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
| `--color-dark-gray` | `#161616` | hsl(0, 0%, 9%) | ×1436 |
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×510 |
| `--color-blue-2` | `#0F62FE` | hsl(219, 99%, 53%) | ×178 |
| `--color-white` | `#F4F4F4` | hsl(0, 0%, 96%) | ×93 |
| `--color-white-2` | `#FFFFFF` | hsl(0, 0%, 100%) | ×77 |
| `--color-dark-gray-3` | `#171717` | hsl(0, 0%, 9%) | ×49 |
| `--color-dark-gray-4` | `#393939` | hsl(0, 0%, 22%) | ×12 |
| `--color-light-cyan` | `#9EF0F0` | hsl(180, 73%, 78%) | ×3 |
| `--color-mid-gray` | `#8D8D8D` | hsl(0, 0%, 55%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-blue` | `#0062FE` | hsl(217, 100%, 50%) | ×190 |
| `--color-dark-gray-2` | `#525252` | hsl(0, 0%, 32%) | ×76 |
| `--color-dark-cyan` | `#004144` | hsl(183, 100%, 13%) | ×6 |
| `--color-dark-gray-5` | `#2A2A2A` | hsl(0, 0%, 16%) | ×3 |
| `--color-dark-gray-6` | `#0F1115` | hsl(220, 17%, 7%) | ×2 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray` | `#C6C6C6` | hsl(0, 0%, 78%) | ×8 |

### Shadow Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-blue-3` | `#4589FF` | hsl(218, 100%, 64%) | ×14 |
| `--color-mid-gray-2` | `#808080` | hsl(0, 0%, 50%) | ×1 |
| `--color-blue-5` | `rgba(15, 98, 254, 0.1)` | hsl(220, 100%, 54%) | ×1 |

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-blue-4` | `#0043CE` | hsl(220, 100%, 40%) | ×12 |
| `--color-dark-cyan-2` | `#009D9A` | hsl(179, 100%, 31%) | ×2 |
| `--color-red` | `#EE5396` | hsl(334, 82%, 63%) | ×1 |
| `--color-light-blue` | `rgba(166, 200, 255, 0.64)` | hsl(217, 100%, 83%) | ×1 |
| `--color-light-blue-2` | `#78A9FF` | hsl(218, 100%, 74%) | ×1 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `Times` |
| `--font-family-2` | `IBM Plex Sans` |
| `--font-family-3` | `IBM Plex Mono` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `12px` |  |
| `--font-size-xs` | `13.3333px` |  |
| `--font-size-sm` | `14px` |  |
| `--font-size-base` | `16px` |  |
| `--font-size-lg` | `18px` |  |
| `--font-size-xl` | `19.2px` |  |
| `--font-size-2xl` | `20px` |  |
| `--font-size-3xl` | `31.2782px` |  |
| `--font-size-4xl` | `32px` |  |
| `--font-size-5xl` | `42px` |  |
| `--font-size-6xl` | `43.8048px` |  |
| `--font-size-48px` | `48px` |  |
| `--font-size-56px` | `55.8048px` |  |

### Font Weights

| Token | Weight |
| --- | --- |
| `--font-weight-light` | `300` |
| `--font-weight-regular` | `400` |
| `--font-weight-semibold` | `600` |

### Line Heights

| Token | Value |
| --- | --- |
| `--line-height-tight` | `14px` |
| `--line-height-snug` | `16px` |
| `--line-height-normal` | `18px` |
| `--line-height-relaxed` | `20px` |
| `--line-height-loose` | `22px` |
| `--line-height-lh-6` | `24px` |
| `--line-height-lh-7` | `25px` |
| `--line-height-lh-8` | `27px` |
| `--line-height-lh-9` | `28px` |
| `--line-height-lh-10` | `40px` |
| `--line-height-lh-11` | `50px` |
| `--line-height-lh-12` | `52.1277px` |
| `--line-height-lh-13` | `56px` |
| `--line-height-lh-14` | `66.4077px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `0.16px` |
| `--letter-spacing-normal` | `0.32px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `1px` | ×11 |
| `--space-2` | `2px` | ×8 |
| `--space-3` | `4px` | ×25 |
| `--space-4` | `4.8px` | ×1 |
| `--space-5` | `6px` | ×8 |
| `--space-6` | `8px` | ×53 |
| `--space-8` | `10px` | ×4 |
| `--space-10` | `14px` | ×2 |
| `--space-12` | `15px` | ×1 |
| `--space-16` | `15.9922px` | ×1 |
| `--space-20` | `16px` | ×95 |
| `--space-24` | `430.5px` | ×2 |
| `--space-32` | `24px` | ×30 |
| `--space-40` | `32px` | ×55 |
| `--space-48` | `48px` | ×18 |
| `--space-64` | `52.0078px` | ×1 |
| `--space-80` | `63px` | ×1 |
| `--space-96` | `64px` | ×2 |
| `--space-128` | `90.6328px` | ×1 |
| `--space-160` | `169.95px` | ×2 |
| `--space-192` | `179.055px` | ×2 |
| `--space-256` | `266.5px` | ×2 |
| `--space-23` | `352.555px` | ×2 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `0.5px` | ×6 |
| `--border-width-thin` | `1px` | ×91 |
| `--border-width-base` | `6.5px` | ×3 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `0px 8px 0px 0px` | ×2 |
| `--radius-md` | `0px 0px 8px 8px` | ×2 |
| `--radius-lg` | `2px` | ×6 |
| `--radius-xl` | `4px` | ×1 |
| `--radius-2xl` | `5px` | ×1 |
| `--radius-full` | `8px` | ×5 |
| `--radius-r7` | `8px 8px 0px 0px` | ×4 |
| `--radius-r8` | `8px 0px 0px` | ×1 |
| `--radius-r9` | `16px` | ×3 |
| `--radius-r10` | `28px` | ×2 |
| `--radius-r11` | `50%` | ×1 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgb(255, 255, 255) 0px 0px 0px 1133px` | ×3 |
| `--shadow-md` | `rgba(0, 0, 0, 0.3) 0px 2px 6px 0px` | ×2 |
| `--shadow-lg` | `rgba(0, 0, 0, 0.2) 0px 2px 6px 0px` | ×1 |
| `--shadow-xl` | `rgb(128, 128, 128) 0px 0px 10px 0px` | ×1 |
| `--shadow-shadow-5` | `rgb(42, 42, 42) 1px 5px 5px 3px` | ×1 |
| `--shadow-shadow-6` | `rgba(69, 137, 255, 0.1) 0px -80px 70px -65px inset, rgba(15, 98, 254, 0.1) 0px 4px 10px 2px` | ×1 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.07s` | ×30 |
| `--duration-fast` | `0.11s` | ×6 |
| `--duration-normal` | `0.15s` | ×8 |
| `--duration-slow` | `0.24s` | ×10 |
| `--duration-slower` | `0.3s` | ×10 |

### Easing Functions

| Token | Value | Usage |
| --- | --- | --- |
| `--easing-ease-in` | `ease-in` | ×2 |
| `--easing-ease-in-out` | `ease-in-out` | ×1 |
| `--easing-linear` | `linear` | ×1 |

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `1` |
| `--z-2` | `2` |
| `--z-3` | `90` |
| `--z-4` | `95` |
| `--z-5` | `99` |
| `--z-6` | `100` |
| `--z-7` | `900` |
| `--z-8` | `999` |
| `--z-9` | `1000` |
| `--z-10` | `6000` |
| `--z-11` | `9000` |
| `--z-12` | `99999` |
| `--z-13` | `1000000` |
| `--z-14` | `9999999` |
| `--z-15` | `2147483647` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `1px` |
| `--breakpoint-sm` | `320px` |
| `--breakpoint-md` | `410px` |
| `--breakpoint-lg` | `480px` |
| `--breakpoint-xl` | `550px` |
| `--breakpoint-2xl` | `551px` |
| `--breakpoint-3xl` | `575px` |
| `--breakpoint-bp-8` | `600px` |
| `--breakpoint-bp-9` | `640px` |
| `--breakpoint-bp-10` | `650px` |
| `--breakpoint-bp-11` | `671px` |
| `--breakpoint-bp-12` | `671.68px` |
| `--breakpoint-bp-13` | `672px` |
| `--breakpoint-bp-14` | `700px` |
| `--breakpoint-bp-15` | `760px` |
| `--breakpoint-bp-16` | `767px` |
| `--breakpoint-bp-17` | `768px` |
| `--breakpoint-bp-18` | `799px` |
| `--breakpoint-bp-19` | `800px` |
| `--breakpoint-bp-20` | `991px` |
| `--breakpoint-bp-21` | `1023px` |
| `--breakpoint-bp-22` | `1024px` |
| `--breakpoint-bp-23` | `1055.68px` |
| `--breakpoint-bp-24` | `1056px` |
| `--breakpoint-bp-25` | `1099px` |
| `--breakpoint-bp-26` | `1100px` |
| `--breakpoint-bp-27` | `1190px` |
| `--breakpoint-bp-28` | `1200px` |
| `--breakpoint-bp-29` | `1311px` |
| `--breakpoint-bp-30` | `1312px` |
| `--breakpoint-bp-31` | `1583px` |
| `--breakpoint-bp-32` | `1584px` |
| `--breakpoint-bp-33` | `1585px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-30` | `0.3` | ×1 |
| `--opacity-95` | `0.95` | ×1 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-blue` | `--color-dark-gray` | 3.6:1 | AA Large |
| `--color-blue` | `--color-black` | 4.18:1 | AA Large |
| `--color-blue` | `--color-blue-2` | 1:1 | Fail |
| `--color-blue` | `--color-white` | 4.57:1 | AA |
| `--color-blue` | `--color-white-2` | 5.03:1 | AA |
| `--color-dark-gray-2` | `--color-dark-gray` | 2.32:1 | Fail |
| `--color-dark-gray-2` | `--color-black` | 2.69:1 | Fail |
| `--color-dark-gray-2` | `--color-blue-2` | 1.56:1 | Fail |
| `--color-dark-gray-2` | `--color-white` | 7.1:1 | AAA |
| `--color-dark-gray-2` | `--color-white-2` | 7.81:1 | AAA |
| `--color-dark-cyan` | `--color-dark-gray` | 1.59:1 | Fail |
| `--color-dark-cyan` | `--color-black` | 1.84:1 | Fail |
| `--color-dark-cyan` | `--color-blue-2` | 2.28:1 | Fail |
| `--color-dark-cyan` | `--color-white` | 10.38:1 | AAA |
| `--color-dark-cyan` | `--color-white-2` | 11.42:1 | AAA |
| `--color-dark-gray-5` | `--color-dark-gray` | 1.26:1 | Fail |
| `--color-dark-gray-5` | `--color-black` | 1.46:1 | Fail |
| `--color-dark-gray-5` | `--color-blue-2` | 2.87:1 | Fail |
| `--color-dark-gray-5` | `--color-white` | 13.05:1 | AAA |
| `--color-dark-gray-5` | `--color-white-2` | 14.35:1 | AAA |
| `--color-dark-gray-6` | `--color-dark-gray` | 1.04:1 | Fail |
| `--color-dark-gray-6` | `--color-black` | 1.11:1 | Fail |
| `--color-dark-gray-6` | `--color-blue-2` | 3.78:1 | AA Large |
| `--color-dark-gray-6` | `--color-white` | 17.18:1 | AAA |
| `--color-dark-gray-6` | `--color-white-2` | 18.9:1 | AAA |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--cds-grid-gutter` | `2rem` |
| `--cds-grid-columns` | `4` |
| `--cds-grid-margin` | `0` |
| `--cds-layout-size-height-xs` | `24px` |
| `--cds-layout-size-height-sm` | `32px` |
| `--cds-layout-size-height-md` | `40px` |
| `--cds-layout-size-height-lg` | `48px` |
| `--cds-layout-size-height-xl` | `64px` |
| `--cds-layout-size-height-2xl` | `80px` |
| `--cds-layout-size-height-min` | `0px` |
| `--cds-layout-size-height-max` | `999999999px` |
| `--cds-layout-density-padding-inline-condensed` | `8px` |
| `--cds-layout-density-padding-inline-normal` | `16px` |
| `--cds-layout-density-padding-inline-min` | `0px` |
| `--cds-layout-density-padding-inline-max` | `999999999px` |
| `--cds-layer` | `var(--cds-layer-01, #f4f4f4)` |
| `--cds-layer-active` | `var(--cds-layer-active-01, #c6c6c6)` |
| `--cds-layer-hover` | `var(--cds-layer-hover-01, #e8e8e8)` |
| `--cds-layer-selected` | `var(--cds-layer-selected-01, #e0e0e0)` |
| `--cds-layer-selected-hover` | `var(--cds-layer-selected-hover-01, #d1d1d1)` |
| `--cds-layer-accent` | `var(--cds-layer-accent-01, #e0e0e0)` |
| `--cds-layer-accent-hover` | `var(--cds-layer-accent-hover-01, #d1d1d1)` |
| `--cds-layer-accent-active` | `var(--cds-layer-accent-active-01, #a8a8a8)` |
| `--cds-field` | `var(--cds-field-01, #f4f4f4)` |
| `--cds-field-hover` | `var(--cds-field-hover-01, #e8e8e8)` |
| `--cds-border-subtle` | `var(--cds-border-subtle-00, #e0e0e0)` |
| `--cds-border-subtle-selected` | `var(--cds-border-subtle-selected-01, #c6c6c6)` |
| `--cds-border-strong` | `var(--cds-border-strong-01, #8d8d8d)` |
| `--cds-border-tile` | `var(--cds-border-tile-01, #c6c6c6)` |
| `--cds-custom-layout-size-height-xs` | `24px` |
| `--cds-custom-layout-size-height-sm` | `32px` |
| `--cds-custom-layout-size-height-md` | `40px` |
| `--cds-custom-layout-size-height-lg` | `48px` |
| `--cds-custom-layout-size-height-xl` | `64px` |
| `--cds-custom-layout-size-height-2xl` | `80px` |
| `--cds-custom-layout-size-height-min` | `0px` |
| `--cds-custom-layout-size-height-max` | `999999999px` |
| `--cds-custom-layout-density-padding-inline-condensed` | `8px` |
| `--cds-custom-layout-density-padding-inline-normal` | `16px` |
| `--cds-custom-layout-density-padding-inline-min` | `0px` |
| `--cds-custom-layout-density-padding-inline-max` | `999999999px` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — IBM
 * Source: https://www.ibm.com/in-en
 * Generated: 15/04/2026, 23:31:28
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-dark-gray: #161616; /* hsl(0, 0%, 9%) · background */
  --color-black: #000000; /* hsl(0, 0%, 0%) · background */
  --color-blue: #0062FE; /* hsl(217, 100%, 50%) · text */
  --color-blue-2: #0F62FE; /* hsl(219, 99%, 53%) · background */
  --color-white: #F4F4F4; /* hsl(0, 0%, 96%) · background */
  --color-white-2: #FFFFFF; /* hsl(0, 0%, 100%) · background */
  --color-dark-gray-2: #525252; /* hsl(0, 0%, 32%) · text */
  --color-dark-gray-3: #171717; /* hsl(0, 0%, 9%) · background */
  --color-blue-3: #4589FF; /* hsl(218, 100%, 64%) · shadow */
  --color-dark-gray-4: #393939; /* hsl(0, 0%, 22%) · background */
  --color-blue-4: #0043CE; /* hsl(220, 100%, 40%) · gradient */
  --color-light-gray: #C6C6C6; /* hsl(0, 0%, 78%) · border */
  --color-dark-cyan: #004144; /* hsl(183, 100%, 13%) · text */
  --color-light-cyan: #9EF0F0; /* hsl(180, 73%, 78%) · background */
  --color-dark-gray-5: #2A2A2A; /* hsl(0, 0%, 16%) · text */
  --color-dark-gray-6: #0F1115; /* hsl(220, 17%, 7%) · text */
  --color-dark-cyan-2: #009D9A; /* hsl(179, 100%, 31%) · gradient */
  --color-red: #EE5396; /* hsl(334, 82%, 63%) · gradient */
  --color-mid-gray: #8D8D8D; /* hsl(0, 0%, 55%) · background */
  --color-mid-gray-2: #808080; /* hsl(0, 0%, 50%) · shadow */
  --color-light-blue: rgba(166, 200, 255, 0.64); /* hsl(217, 100%, 83%) · gradient */
  --color-light-blue-2: #78A9FF; /* hsl(218, 100%, 74%) · gradient */
  --color-blue-5: rgba(15, 98, 254, 0.1); /* hsl(220, 100%, 54%) · shadow */

  /* ── Core: Typography ── */
  --font-size-2xs: 12px;
  --font-size-xs: 13.3333px;
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 19.2px;
  --font-size-2xl: 20px;
  --font-size-3xl: 31.2782px;
  --font-size-4xl: 32px;
  --font-size-5xl: 42px;
  --font-size-6xl: 43.8048px;
  --font-size-48px: 48px;
  --font-size-56px: 55.8048px;
  --font-family-base: Times;
  --font-family-2: IBM Plex Sans;
  --font-family-3: IBM Plex Mono;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --line-height-tight: 14px;
  --line-height-snug: 16px;
  --line-height-normal: 18px;
  --line-height-relaxed: 20px;
  --line-height-loose: 22px;
  --line-height-lh-6: 24px;
  --line-height-lh-7: 25px;
  --line-height-lh-8: 27px;
  --line-height-lh-9: 28px;
  --line-height-lh-10: 40px;
  --line-height-lh-11: 50px;
  --line-height-lh-12: 52.1277px;
  --line-height-lh-13: 56px;
  --line-height-lh-14: 66.4077px;
  --letter-spacing-tight: 0.16px;
  --letter-spacing-normal: 0.32px;

  /* ── Layout: Spacing ── */
  --space-1: 1px;
  --space-2: 2px;
  --space-3: 4px;
  --space-4: 4.8px;
  --space-5: 6px;
  --space-6: 8px;
  --space-8: 10px;
  --space-10: 14px;
  --space-12: 15px;
  --space-16: 15.9922px;
  --space-20: 16px;
  --space-24: 430.5px;
  --space-32: 24px;
  --space-40: 32px;
  --space-48: 48px;
  --space-64: 52.0078px;
  --space-80: 63px;
  --space-96: 64px;
  --space-128: 90.6328px;
  --space-160: 169.95px;
  --space-192: 179.055px;
  --space-256: 266.5px;
  --space-23: 352.555px;

  /* ── Borders ── */
  --border-width-hairline: 0.5px;
  --border-width-thin: 1px;
  --border-width-base: 6.5px;
  --radius-sm: 0px 8px 0px 0px;
  --radius-md: 0px 0px 8px 8px;
  --radius-lg: 2px;
  --radius-xl: 4px;
  --radius-2xl: 5px;
  --radius-full: 8px;
  --radius-r7: 8px 8px 0px 0px;
  --radius-r8: 8px 0px 0px;
  --radius-r9: 16px;
  --radius-r10: 28px;
  --radius-r11: 50%;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgb(255, 255, 255) 0px 0px 0px 1133px;
  --shadow-md: rgba(0, 0, 0, 0.3) 0px 2px 6px 0px;
  --shadow-lg: rgba(0, 0, 0, 0.2) 0px 2px 6px 0px;
  --shadow-xl: rgb(128, 128, 128) 0px 0px 10px 0px;
  --shadow-shadow-5: rgb(42, 42, 42) 1px 5px 5px 3px;
  --shadow-shadow-6: rgba(69, 137, 255, 0.1) 0px -80px 70px -65px inset, rgba(15, 98, 254, 0.1) 0px 4px 10px 2px;

  /* ── Motion ── */
  --duration-instant: 0.07s;
  --duration-fast: 0.11s;
  --duration-normal: 0.15s;
  --duration-slow: 0.24s;
  --duration-slower: 0.3s;
  --easing-ease-in: ease-in;
  --easing-ease-in-out: ease-in-out;
  --easing-linear: linear;

  /* ── Layout: Z-Index ── */
  --z-1: 1;
  --z-2: 2;
  --z-3: 90;
  --z-4: 95;
  --z-5: 99;
  --z-6: 100;
  --z-7: 900;
  --z-8: 999;
  --z-9: 1000;
  --z-10: 6000;
  --z-11: 9000;
  --z-12: 99999;
  --z-13: 1000000;
  --z-14: 9999999;
  --z-15: 2147483647;

  /* ── Breakpoints ── */
  --breakpoint-xs: 1px;
  --breakpoint-sm: 320px;
  --breakpoint-md: 410px;
  --breakpoint-lg: 480px;
  --breakpoint-xl: 550px;
  --breakpoint-2xl: 551px;
  --breakpoint-3xl: 575px;
  --breakpoint-bp-8: 600px;
  --breakpoint-bp-9: 640px;
  --breakpoint-bp-10: 650px;
  --breakpoint-bp-11: 671px;
  --breakpoint-bp-12: 671.68px;
  --breakpoint-bp-13: 672px;
  --breakpoint-bp-14: 700px;
  --breakpoint-bp-15: 760px;
  --breakpoint-bp-16: 767px;
  --breakpoint-bp-17: 768px;
  --breakpoint-bp-18: 799px;
  --breakpoint-bp-19: 800px;
  --breakpoint-bp-20: 991px;
  --breakpoint-bp-21: 1023px;
  --breakpoint-bp-22: 1024px;
  --breakpoint-bp-23: 1055.68px;
  --breakpoint-bp-24: 1056px;
  --breakpoint-bp-25: 1099px;
  --breakpoint-bp-26: 1100px;
  --breakpoint-bp-27: 1190px;
  --breakpoint-bp-28: 1200px;
  --breakpoint-bp-29: 1311px;
  --breakpoint-bp-30: 1312px;
  --breakpoint-bp-31: 1583px;
  --breakpoint-bp-32: 1584px;
  --breakpoint-bp-33: 1585px;

  /* ── Opacity ── */
  --opacity-30: 0.3;
  --opacity-95: 0.95;
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://www.ibm.com/in-en",
    "title": "IBM",
    "generatedAt": "2026-04-15T18:01:28.434Z"
  },
  "core": {
    "color": {
      "dark-gray": {
        "$value": "#161616",
        "$type": "color",
        "$description": "background · ×1436"
      },
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "background · ×510"
      },
      "blue": {
        "$value": "#0062FE",
        "$type": "color",
        "$description": "text · ×190"
      },
      "blue-2": {
        "$value": "#0F62FE",
        "$type": "color",
        "$description": "background · ×178"
      },
      "white": {
        "$value": "#F4F4F4",
        "$type": "color",
        "$description": "background · ×93"
      },
      "white-2": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×77"
      },
      "dark-gray-2": {
        "$value": "#525252",
        "$type": "color",
        "$description": "text · ×76"
      },
      "dark-gray-3": {
        "$value": "#171717",
        "$type": "color",
        "$description": "background · ×49"
      },
      "blue-3": {
        "$value": "#4589FF",
        "$type": "color",
        "$description": "shadow · ×14"
      },
      "dark-gray-4": {
        "$value": "#393939",
        "$type": "color",
        "$description": "background · ×12"
      },
      "blue-4": {
        "$value": "#0043CE",
        "$type": "color",
        "$description": "gradient · ×12"
      },
      "light-gray": {
        "$value": "#C6C6C6",
        "$type": "color",
        "$description": "border · ×8"
      },
      "dark-cyan": {
        "$value": "#004144",
        "$type": "color",
        "$description": "text · ×6"
      },
      "light-cyan": {
        "$value": "#9EF0F0",
        "$type": "color",
        "$description": "background · ×3"
      },
      "dark-gray-5": {
        "$value": "#2A2A2A",
        "$type": "color",
        "$description": "text · ×3"
      },
      "dark-gray-6": {
        "$value": "#0F1115",
        "$type": "color",
        "$description": "text · ×2"
      },
      "dark-cyan-2": {
        "$value": "#009D9A",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "red": {
        "$value": "#EE5396",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "mid-gray": {
        "$value": "#8D8D8D",
        "$type": "color",
        "$description": "background · ×1"
      },
      "mid-gray-2": {
        "$value": "#808080",
        "$type": "color",
        "$description": "shadow · ×1"
      },
      "light-blue": {
        "$value": "rgba(166, 200, 255, 0.64)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-blue-2": {
        "$value": "#78A9FF",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "blue-5": {
        "$value": "rgba(15, 98, 254, 0.1)",
        "$type": "color",
        "$description": "shadow · ×1"
      }
    },
    "fontSize": {
      "font-size-2xs": {
        "$value": "12px",
        "$type": "dimension"
      },
      "font-size-xs": {
        "$value": "13.3333px",
        "$type": "dimension"
      },
      "font-size-sm": {
        "$value": "14px",
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
        "$value": "19.2px",
        "$type": "dimension"
      },
      "font-size-2xl": {
        "$value": "20px",
        "$type": "dimension"
      },
      "font-size-3xl": {
        "$value": "31.2782px",
        "$type": "dimension"
      },
      "font-size-4xl": {
        "$value": "32px",
        "$type": "dimension"
      },
      "font-size-5xl": {
        "$value": "42px",
        "$type": "dimension"
      },
      "font-size-6xl": {
        "$value": "43.8048px",
        "$type": "dimension"
      },
      "font-size-48px": {
        "$value": "48px",
        "$type": "dimension"
      },
      "font-size-56px": {
        "$value": "55.8048px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "Times",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "IBM Plex Sans",
        "$type": "fontFamily"
      },
      "font-family-3": {
        "$value": "IBM Plex Mono",
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
        "$value": "18px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "20px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "22px",
        "$type": "dimension"
      },
      "line-height-lh-6": {
        "$value": "24px",
        "$type": "dimension"
      },
      "line-height-lh-7": {
        "$value": "25px",
        "$type": "dimension"
      },
      "line-height-lh-8": {
        "$value": "27px",
        "$type": "dimension"
      },
      "line-height-lh-9": {
        "$value": "28px",
        "$type": "dimension"
      },
      "line-height-lh-10": {
        "$value": "40px",
        "$type": "dimension"
      },
      "line-height-lh-11": {
        "$value": "50px",
        "$type": "dimension"
      },
      "line-height-lh-12": {
        "$value": "52.1277px",
        "$type": "dimension"
      },
      "line-height-lh-13": {
        "$value": "56px",
        "$type": "dimension"
      },
      "line-height-lh-14": {
        "$value": "66.4077px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "0.16px",
        "$type": "dimension"
      },
      "letter-spacing-normal": {
        "$value": "0.32px",
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
        "$value": "4.8px",
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
        "$value": "14px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "15px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "15.9922px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "16px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "430.5px",
        "$type": "dimension"
      },
      "space-32": {
        "$value": "24px",
        "$type": "dimension"
      },
      "space-40": {
        "$value": "32px",
        "$type": "dimension"
      },
      "space-48": {
        "$value": "48px",
        "$type": "dimension"
      },
      "space-64": {
        "$value": "52.0078px",
        "$type": "dimension"
      },
      "space-80": {
        "$value": "63px",
        "$type": "dimension"
      },
      "space-96": {
        "$value": "64px",
        "$type": "dimension"
      },
      "space-128": {
        "$value": "90.6328px",
        "$type": "dimension"
      },
      "space-160": {
        "$value": "169.95px",
        "$type": "dimension"
      },
      "space-192": {
        "$value": "179.055px",
        "$type": "dimension"
      },
      "space-256": {
        "$value": "266.5px",
        "$type": "dimension"
      },
      "space-23": {
        "$value": "352.555px",
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
        "$value": "90",
        "$type": "number"
      },
      "z-4": {
        "$value": "95",
        "$type": "number"
      },
      "z-5": {
        "$value": "99",
        "$type": "number"
      },
      "z-6": {
        "$value": "100",
        "$type": "number"
      },
      "z-7": {
        "$value": "900",
        "$type": "number"
      },
      "z-8": {
        "$value": "999",
        "$type": "number"
      },
      "z-9": {
        "$value": "1000",
        "$type": "number"
      },
      "z-10": {
        "$value": "6000",
        "$type": "number"
      },
      "z-11": {
        "$value": "9000",
        "$type": "number"
      },
      "z-12": {
        "$value": "99999",
        "$type": "number"
      },
      "z-13": {
        "$value": "1000000",
        "$type": "number"
      },
      "z-14": {
        "$value": "9999999",
        "$type": "number"
      },
      "z-15": {
        "$value": "2147483647",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "1px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "320px",
        "$type": "dimension"
      },
      "breakpoint-md": {
        "$value": "410px",
        "$type": "dimension"
      },
      "breakpoint-lg": {
        "$value": "480px",
        "$type": "dimension"
      },
      "breakpoint-xl": {
        "$value": "550px",
        "$type": "dimension"
      },
      "breakpoint-2xl": {
        "$value": "551px",
        "$type": "dimension"
      },
      "breakpoint-3xl": {
        "$value": "575px",
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
        "$value": "650px",
        "$type": "dimension"
      },
      "breakpoint-bp-11": {
        "$value": "671px",
        "$type": "dimension"
      },
      "breakpoint-bp-12": {
        "$value": "671.68px",
        "$type": "dimension"
      },
      "breakpoint-bp-13": {
        "$value": "672px",
        "$type": "dimension"
      },
      "breakpoint-bp-14": {
        "$value": "700px",
        "$type": "dimension"
      },
      "breakpoint-bp-15": {
        "$value": "760px",
        "$type": "dimension"
      },
      "breakpoint-bp-16": {
        "$value": "767px",
        "$type": "dimension"
      },
      "breakpoint-bp-17": {
        "$value": "768px",
        "$type": "dimension"
      },
      "breakpoint-bp-18": {
        "$value": "799px",
        "$type": "dimension"
      },
      "breakpoint-bp-19": {
        "$value": "800px",
        "$type": "dimension"
      },
      "breakpoint-bp-20": {
        "$value": "991px",
        "$type": "dimension"
      },
      "breakpoint-bp-21": {
        "$value": "1023px",
        "$type": "dimension"
      },
      "breakpoint-bp-22": {
        "$value": "1024px",
        "$type": "dimension"
      },
      "breakpoint-bp-23": {
        "$value": "1055.68px",
        "$type": "dimension"
      },
      "breakpoint-bp-24": {
        "$value": "1056px",
        "$type": "dimension"
      },
      "breakpoint-bp-25": {
        "$value": "1099px",
        "$type": "dimension"
      },
      "breakpoint-bp-26": {
        "$value": "1100px",
        "$type": "dimension"
      },
      "breakpoint-bp-27": {
        "$value": "1190px",
        "$type": "dimension"
      },
      "breakpoint-bp-28": {
        "$value": "1200px",
        "$type": "dimension"
      },
      "breakpoint-bp-29": {
        "$value": "1311px",
        "$type": "dimension"
      },
      "breakpoint-bp-30": {
        "$value": "1312px",
        "$type": "dimension"
      },
      "breakpoint-bp-31": {
        "$value": "1583px",
        "$type": "dimension"
      },
      "breakpoint-bp-32": {
        "$value": "1584px",
        "$type": "dimension"
      },
      "breakpoint-bp-33": {
        "$value": "1585px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
        "$value": "0px 8px 0px 0px",
        "$type": "dimension"
      },
      "radius-md": {
        "$value": "0px 0px 8px 8px",
        "$type": "dimension"
      },
      "radius-lg": {
        "$value": "2px",
        "$type": "dimension"
      },
      "radius-xl": {
        "$value": "4px",
        "$type": "dimension"
      },
      "radius-2xl": {
        "$value": "5px",
        "$type": "dimension"
      },
      "radius-full": {
        "$value": "8px",
        "$type": "dimension"
      },
      "radius-r7": {
        "$value": "8px 8px 0px 0px",
        "$type": "dimension"
      },
      "radius-r8": {
        "$value": "8px 0px 0px",
        "$type": "dimension"
      },
      "radius-r9": {
        "$value": "16px",
        "$type": "dimension"
      },
      "radius-r10": {
        "$value": "28px",
        "$type": "dimension"
      },
      "radius-r11": {
        "$value": "50%",
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
      },
      "border-width-base": {
        "$value": "6.5px",
        "$type": "dimension"
      }
    },
    "shadow": {
      "shadow-sm": {
        "$value": "rgb(255, 255, 255) 0px 0px 0px 1133px",
        "$type": "shadow"
      },
      "shadow-md": {
        "$value": "rgba(0, 0, 0, 0.3) 0px 2px 6px 0px",
        "$type": "shadow"
      },
      "shadow-lg": {
        "$value": "rgba(0, 0, 0, 0.2) 0px 2px 6px 0px",
        "$type": "shadow"
      },
      "shadow-xl": {
        "$value": "rgb(128, 128, 128) 0px 0px 10px 0px",
        "$type": "shadow"
      },
      "shadow-shadow-5": {
        "$value": "rgb(42, 42, 42) 1px 5px 5px 3px",
        "$type": "shadow"
      },
      "shadow-shadow-6": {
        "$value": "rgba(69, 137, 255, 0.1) 0px -80px 70px -65px inset, rgba(15, 98, 254, 0.1) 0px 4px 10px 2px",
        "$type": "shadow"
      }
    }
  },
  "motion": {
    "duration": {
      "duration-instant": {
        "$value": "0.07s",
        "$type": "duration"
      },
      "duration-fast": {
        "$value": "0.11s",
        "$type": "duration"
      },
      "duration-normal": {
        "$value": "0.15s",
        "$type": "duration"
      },
      "duration-slow": {
        "$value": "0.24s",
        "$type": "duration"
      },
      "duration-slower": {
        "$value": "0.3s",
        "$type": "duration"
      }
    },
    "easing": {
      "easing-ease-in": {
        "$value": "ease-in",
        "$type": "cubicBezier"
      },
      "easing-ease-in-out": {
        "$value": "ease-in-out",
        "$type": "cubicBezier"
      },
      "easing-linear": {
        "$value": "linear",
        "$type": "cubicBezier"
      }
    }
  },
  "opacity": {
    "opacity-30": {
      "$value": 0.3,
      "$type": "number"
    },
    "opacity-95": {
      "$value": 0.95,
      "$type": "number"
    }
  }
}
```
