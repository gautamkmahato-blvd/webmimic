# MiniMax — Design System

**Source:** https://www.minimax.io/  
**Generated:** 15/04/2026, 23:38:22  
**Extracted:** 29 colors · 35 type tokens · 21 spacing steps · 2 breakpoints · 7 motion tokens

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
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×598 |
| `--color-dark-gray-2` | `#181E25` | hsl(212, 21%, 12%) | ×288 |
| `--color-white` | `#FFFFFF` | hsl(0, 0%, 100%) | ×277 |
| `--color-white-2` | `#F2F3F5` | hsl(220, 13%, 95%) | ×10 |
| `--color-dark-gray-5` | `#424242` | hsl(0, 0%, 26%) | ×8 |
| `--color-light-blue` | `#C7B0FE` | hsl(258, 98%, 84%) | ×3 |
| `--color-light-blue-2` | `#ACAAFF` | hsl(241, 100%, 83%) | ×3 |
| `--color-light-blue-3` | `#886CFF` | hsl(251, 100%, 71%) | ×3 |
| `--color-light-blue-4` | `#A782FF` | hsl(258, 100%, 75%) | ×3 |
| `--color-light-blue-5` | `#CAC9FF` | hsl(241, 100%, 89%) | ×3 |
| `--color-light-blue-6` | `#B8A8FF` | hsl(251, 100%, 83%) | ×2 |
| `--color-red` | `#D01316` | hsl(359, 83%, 45%) | ×2 |
| `--color-white-3` | `#F5F5F5` | hsl(0, 0%, 96%) | ×1 |
| `--color-light-orange` | `#FFD388` | hsl(38, 100%, 77%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-gray` | `#18181B` | hsl(240, 6%, 10%) | ×810 |
| `--color-dark-gray-3` | `#292929` | hsl(0, 0%, 16%) | ×115 |
| `--color-mid-gray` | `#8E8E93` | hsl(240, 2%, 57%) | ×63 |
| `--color-dark-gray-4` | `#171717` | hsl(0, 0%, 9%) | ×14 |
| `--color-dark-blue` | `#45515E` | hsl(211, 15%, 32%) | ×8 |
| `--color-blue` | `#86909C` | hsl(213, 10%, 57%) | ×8 |
| `--color-blue-2` | `#AAB1BA` | hsl(214, 10%, 70%) | ×7 |
| `--color-dark-gray-6` | `rgba(24, 30, 37, 0.4)` | hsl(215, 19%, 12%) | ×7 |
| `--color-dark-blue-4` | `#050038` | hsl(245, 100%, 11%) | ×2 |
| `--color-dark-gray-9` | `#5C5F63` | hsl(214, 4%, 37%) | ×1 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray` | `#E5E7EB` | hsl(220, 13%, 91%) | ×1529 |
| `--color-dark-gray-8` | `rgba(24, 30, 37, 0.384)` | hsl(203, 22%, 12%) | ×2 |

### Shadow Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-blue-2` | `rgba(44, 30, 116, 0.16)` | hsl(249, 58%, 29%) | ×8 |
| `--color-dark-gray-7` | `rgba(36, 36, 36, 0.08)` | hsl(0, 0%, 15%) | ×5 |
| `--color-dark-blue-3` | `rgba(44, 30, 116, 0.11)` | hsl(253, 63%, 28%) | ×4 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `DM Sans` |
| `--font-family-2` | `Outfit` |
| `--font-family-3` | `Poppins` |
| `--font-family-4` | `Roboto` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `10px` |  |
| `--font-size-xs` | `10.5px` |  |
| `--font-size-sm` | `12px` |  |
| `--font-size-base` | `13px` |  |
| `--font-size-lg` | `14px` |  |
| `--font-size-xl` | `16px` |  |
| `--font-size-2xl` | `18px` |  |
| `--font-size-3xl` | `20px` |  |
| `--font-size-4xl` | `24px` |  |
| `--font-size-5xl` | `28px` |  |
| `--font-size-6xl` | `31px` |  |
| `--font-size-32px` | `32px` |  |
| `--font-size-80px` | `80px` |  |

### Font Weights

| Token | Weight |
| --- | --- |
| `--font-weight-regular` | `400` |
| `--font-weight-medium` | `500` |
| `--font-weight-semibold` | `600` |

### Line Heights

| Token | Value |
| --- | --- |
| `--line-height-tight` | `15px` |
| `--line-height-snug` | `15.75px` |
| `--line-height-normal` | `18px` |
| `--line-height-relaxed` | `19.5px` |
| `--line-height-loose` | `21px` |
| `--line-height-lh-6` | `22px` |
| `--line-height-lh-7` | `24px` |
| `--line-height-lh-8` | `27px` |
| `--line-height-lh-9` | `28px` |
| `--line-height-lh-10` | `28.8px` |
| `--line-height-lh-11` | `30px` |
| `--line-height-lh-12` | `36px` |
| `--line-height-lh-13` | `46.5px` |
| `--line-height-lh-14` | `48px` |
| `--line-height-lh-15` | `88px` |

### Letter Spacing

_None detected._

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `1px` | ×39 |
| `--space-2` | `2px` | ×10 |
| `--space-3` | `4px` | ×31 |
| `--space-4` | `6px` | ×77 |
| `--space-5` | `8px` | ×434 |
| `--space-6` | `10px` | ×2 |
| `--space-8` | `12px` | ×38 |
| `--space-10` | `14px` | ×4 |
| `--space-12` | `16px` | ×116 |
| `--space-16` | `17px` | ×3 |
| `--space-20` | `18px` | ×1 |
| `--space-24` | `20px` | ×2 |
| `--space-32` | `24px` | ×196 |
| `--space-40` | `32px` | ×10 |
| `--space-48` | `40px` | ×5 |
| `--space-64` | `60px` | ×7 |
| `--space-80` | `64px` | ×1 |
| `--space-96` | `80px` | ×1 |
| `--space-128` | `111.93px` | ×1 |
| `--space-160` | `120px` | ×4 |
| `--space-192` | `179.5px` | ×16 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `1px` | ×53 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `0px 0px 24px 24px` | ×4 |
| `--radius-md` | `4px` | ×6 |
| `--radius-lg` | `5.4px` | ×37 |
| `--radius-xl` | `11px` | ×16 |
| `--radius-2xl` | `12px` | ×28 |
| `--radius-full` | `13px` | ×12 |
| `--radius-r7` | `16px` | ×17 |
| `--radius-r8` | `20px` | ×5 |
| `--radius-r9` | `22px` | ×6 |
| `--radius-r10` | `24px` | ×11 |
| `--radius-r11` | `30px` | ×6 |
| `--radius-r12` | `32px` | ×7 |
| `--radius-r13` | `55px` | ×4 |
| `--radius-r14` | `60px` | ×26 |
| `--radius-r15` | `65px` | ×2 |
| `--radius-r16` | `9999px` | ×74 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 4px 6px 0px` | ×16 |
| `--shadow-md` | `rgba(0, 0, 0, 0.08) 0px 0px 22.576px 0px` | ×6 |
| `--shadow-lg` | `rgba(44, 30, 116, 0.16) 0px 0px 15px 0px` | ×6 |
| `--shadow-xl` | `rgba(36, 36, 36, 0.08) 0px 12px 16px -4px` | ×4 |
| `--shadow-shadow-5` | `rgba(44, 30, 116, 0.11) 6.5px 2px 17.5px 0px` | ×4 |
| `--shadow-shadow-6` | `rgba(44, 30, 116, 0.16) 0px 0px 22.5px 0px` | ×2 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.15s` | ×300 |
| `--duration-fast` | `0.2s` | ×53 |
| `--duration-normal` | `0.25s` | ×3 |
| `--duration-slow` | `0.3s` | ×180 |
| `--duration-slower` | `0.4s` | ×2 |

### Easing Functions

| Token | Value | Usage |
| --- | --- | --- |
| `--easing-ease-out` | `ease-out` | ×17 |
| `--easing-ease-in-out` | `ease-in-out` | ×3 |

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `-8` |
| `--z-2` | `-6` |
| `--z-3` | `-3` |
| `--z-4` | `-1` |
| `--z-5` | `1` |
| `--z-6` | `3` |
| `--z-7` | `5` |
| `--z-8` | `6` |
| `--z-9` | `8` |
| `--z-10` | `10` |
| `--z-11` | `20` |
| `--z-12` | `30` |
| `--z-13` | `100` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `768px` |
| `--breakpoint-sm` | `1024px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-50` | `0.5` | ×2 |
| `--opacity-70` | `0.7` | ×28 |
| `--opacity-90` | `0.9` | ×24 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-dark-gray` | `--color-black` | 1.19:1 | Fail |
| `--color-dark-gray` | `--color-dark-gray-2` | 1.06:1 | Fail |
| `--color-dark-gray` | `--color-white` | 17.72:1 | AAA |
| `--color-dark-gray` | `--color-white-2` | 15.96:1 | AAA |
| `--color-dark-gray` | `--color-dark-gray-5` | 1.76:1 | Fail |
| `--color-dark-gray-3` | `--color-black` | 1.44:1 | Fail |
| `--color-dark-gray-3` | `--color-dark-gray-2` | 1.15:1 | Fail |
| `--color-dark-gray-3` | `--color-white` | 14.55:1 | AAA |
| `--color-dark-gray-3` | `--color-white-2` | 13.1:1 | AAA |
| `--color-dark-gray-3` | `--color-dark-gray-5` | 1.45:1 | Fail |
| `--color-mid-gray` | `--color-black` | 6.44:1 | AA |
| `--color-mid-gray` | `--color-dark-gray-2` | 5.15:1 | AA |
| `--color-mid-gray` | `--color-white` | 3.26:1 | AA Large |
| `--color-mid-gray` | `--color-white-2` | 2.94:1 | Fail |
| `--color-mid-gray` | `--color-dark-gray-5` | 3.08:1 | AA Large |
| `--color-dark-gray-4` | `--color-black` | 1.17:1 | Fail |
| `--color-dark-gray-4` | `--color-dark-gray-2` | 1.07:1 | Fail |
| `--color-dark-gray-4` | `--color-white` | 17.93:1 | AAA |
| `--color-dark-gray-4` | `--color-white-2` | 16.15:1 | AAA |
| `--color-dark-gray-4` | `--color-dark-gray-5` | 1.78:1 | Fail |
| `--color-dark-blue` | `--color-black` | 2.59:1 | Fail |
| `--color-dark-blue` | `--color-dark-gray-2` | 2.07:1 | Fail |
| `--color-dark-blue` | `--color-white` | 8.1:1 | AAA |
| `--color-dark-blue` | `--color-white-2` | 7.3:1 | AAA |
| `--color-dark-blue` | `--color-dark-gray-5` | 1.24:1 | Fail |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — MiniMax
 * Source: https://www.minimax.io/
 * Generated: 15/04/2026, 23:38:22
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-light-gray: #E5E7EB; /* hsl(220, 13%, 91%) · border */
  --color-dark-gray: #18181B; /* hsl(240, 6%, 10%) · text */
  --color-black: #000000; /* hsl(0, 0%, 0%) · background */
  --color-dark-gray-2: #181E25; /* hsl(212, 21%, 12%) · background */
  --color-white: #FFFFFF; /* hsl(0, 0%, 100%) · background */
  --color-dark-gray-3: #292929; /* hsl(0, 0%, 16%) · text */
  --color-mid-gray: #8E8E93; /* hsl(240, 2%, 57%) · text */
  --color-dark-gray-4: #171717; /* hsl(0, 0%, 9%) · text */
  --color-white-2: #F2F3F5; /* hsl(220, 13%, 95%) · background */
  --color-dark-blue: #45515E; /* hsl(211, 15%, 32%) · text */
  --color-dark-blue-2: rgba(44, 30, 116, 0.16); /* hsl(249, 58%, 29%) · shadow */
  --color-dark-gray-5: #424242; /* hsl(0, 0%, 26%) · background */
  --color-blue: #86909C; /* hsl(213, 10%, 57%) · text */
  --color-blue-2: #AAB1BA; /* hsl(214, 10%, 70%) · text */
  --color-dark-gray-6: rgba(24, 30, 37, 0.4); /* hsl(215, 19%, 12%) · text */
  --color-dark-gray-7: rgba(36, 36, 36, 0.08); /* hsl(0, 0%, 15%) · shadow */
  --color-dark-blue-3: rgba(44, 30, 116, 0.11); /* hsl(253, 63%, 28%) · shadow */
  --color-light-blue: #C7B0FE; /* hsl(258, 98%, 84%) · background */
  --color-light-blue-2: #ACAAFF; /* hsl(241, 100%, 83%) · background */
  --color-light-blue-3: #886CFF; /* hsl(251, 100%, 71%) · background */
  --color-light-blue-4: #A782FF; /* hsl(258, 100%, 75%) · background */
  --color-light-blue-5: #CAC9FF; /* hsl(241, 100%, 89%) · background */
  --color-light-blue-6: #B8A8FF; /* hsl(251, 100%, 83%) · background */
  --color-dark-gray-8: rgba(24, 30, 37, 0.384); /* hsl(203, 22%, 12%) · border */
  --color-red: #D01316; /* hsl(359, 83%, 45%) · background */
  --color-dark-blue-4: #050038; /* hsl(245, 100%, 11%) · text */
  --color-white-3: #F5F5F5; /* hsl(0, 0%, 96%) · background */
  --color-light-orange: #FFD388; /* hsl(38, 100%, 77%) · background */
  --color-dark-gray-9: #5C5F63; /* hsl(214, 4%, 37%) · text */

  /* ── Core: Typography ── */
  --font-size-2xs: 10px;
  --font-size-xs: 10.5px;
  --font-size-sm: 12px;
  --font-size-base: 13px;
  --font-size-lg: 14px;
  --font-size-xl: 16px;
  --font-size-2xl: 18px;
  --font-size-3xl: 20px;
  --font-size-4xl: 24px;
  --font-size-5xl: 28px;
  --font-size-6xl: 31px;
  --font-size-32px: 32px;
  --font-size-80px: 80px;
  --font-family-base: DM Sans;
  --font-family-2: Outfit;
  --font-family-3: Poppins;
  --font-family-4: Roboto;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --line-height-tight: 15px;
  --line-height-snug: 15.75px;
  --line-height-normal: 18px;
  --line-height-relaxed: 19.5px;
  --line-height-loose: 21px;
  --line-height-lh-6: 22px;
  --line-height-lh-7: 24px;
  --line-height-lh-8: 27px;
  --line-height-lh-9: 28px;
  --line-height-lh-10: 28.8px;
  --line-height-lh-11: 30px;
  --line-height-lh-12: 36px;
  --line-height-lh-13: 46.5px;
  --line-height-lh-14: 48px;
  --line-height-lh-15: 88px;

  /* ── Layout: Spacing ── */
  --space-1: 1px;
  --space-2: 2px;
  --space-3: 4px;
  --space-4: 6px;
  --space-5: 8px;
  --space-6: 10px;
  --space-8: 12px;
  --space-10: 14px;
  --space-12: 16px;
  --space-16: 17px;
  --space-20: 18px;
  --space-24: 20px;
  --space-32: 24px;
  --space-40: 32px;
  --space-48: 40px;
  --space-64: 60px;
  --space-80: 64px;
  --space-96: 80px;
  --space-128: 111.93px;
  --space-160: 120px;
  --space-192: 179.5px;

  /* ── Borders ── */
  --border-width-hairline: 1px;
  --radius-sm: 0px 0px 24px 24px;
  --radius-md: 4px;
  --radius-lg: 5.4px;
  --radius-xl: 11px;
  --radius-2xl: 12px;
  --radius-full: 13px;
  --radius-r7: 16px;
  --radius-r8: 20px;
  --radius-r9: 22px;
  --radius-r10: 24px;
  --radius-r11: 30px;
  --radius-r12: 32px;
  --radius-r13: 55px;
  --radius-r14: 60px;
  --radius-r15: 65px;
  --radius-r16: 9999px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 4px 6px 0px;
  --shadow-md: rgba(0, 0, 0, 0.08) 0px 0px 22.576px 0px;
  --shadow-lg: rgba(44, 30, 116, 0.16) 0px 0px 15px 0px;
  --shadow-xl: rgba(36, 36, 36, 0.08) 0px 12px 16px -4px;
  --shadow-shadow-5: rgba(44, 30, 116, 0.11) 6.5px 2px 17.5px 0px;
  --shadow-shadow-6: rgba(44, 30, 116, 0.16) 0px 0px 22.5px 0px;

  /* ── Motion ── */
  --duration-instant: 0.15s;
  --duration-fast: 0.2s;
  --duration-normal: 0.25s;
  --duration-slow: 0.3s;
  --duration-slower: 0.4s;
  --easing-ease-out: ease-out;
  --easing-ease-in-out: ease-in-out;

  /* ── Layout: Z-Index ── */
  --z-1: -8;
  --z-2: -6;
  --z-3: -3;
  --z-4: -1;
  --z-5: 1;
  --z-6: 3;
  --z-7: 5;
  --z-8: 6;
  --z-9: 8;
  --z-10: 10;
  --z-11: 20;
  --z-12: 30;
  --z-13: 100;

  /* ── Breakpoints ── */
  --breakpoint-xs: 768px;
  --breakpoint-sm: 1024px;

  /* ── Opacity ── */
  --opacity-50: 0.5;
  --opacity-70: 0.7;
  --opacity-90: 0.9;
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://www.minimax.io/",
    "title": "MiniMax",
    "generatedAt": "2026-04-15T18:08:22.381Z"
  },
  "core": {
    "color": {
      "light-gray": {
        "$value": "#E5E7EB",
        "$type": "color",
        "$description": "border · ×1529"
      },
      "dark-gray": {
        "$value": "#18181B",
        "$type": "color",
        "$description": "text · ×810"
      },
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "background · ×598"
      },
      "dark-gray-2": {
        "$value": "#181E25",
        "$type": "color",
        "$description": "background · ×288"
      },
      "white": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×277"
      },
      "dark-gray-3": {
        "$value": "#292929",
        "$type": "color",
        "$description": "text · ×115"
      },
      "mid-gray": {
        "$value": "#8E8E93",
        "$type": "color",
        "$description": "text · ×63"
      },
      "dark-gray-4": {
        "$value": "#171717",
        "$type": "color",
        "$description": "text · ×14"
      },
      "white-2": {
        "$value": "#F2F3F5",
        "$type": "color",
        "$description": "background · ×10"
      },
      "dark-blue": {
        "$value": "#45515E",
        "$type": "color",
        "$description": "text · ×8"
      },
      "dark-blue-2": {
        "$value": "rgba(44, 30, 116, 0.16)",
        "$type": "color",
        "$description": "shadow · ×8"
      },
      "dark-gray-5": {
        "$value": "#424242",
        "$type": "color",
        "$description": "background · ×8"
      },
      "blue": {
        "$value": "#86909C",
        "$type": "color",
        "$description": "text · ×8"
      },
      "blue-2": {
        "$value": "#AAB1BA",
        "$type": "color",
        "$description": "text · ×7"
      },
      "dark-gray-6": {
        "$value": "rgba(24, 30, 37, 0.4)",
        "$type": "color",
        "$description": "text · ×7"
      },
      "dark-gray-7": {
        "$value": "rgba(36, 36, 36, 0.08)",
        "$type": "color",
        "$description": "shadow · ×5"
      },
      "dark-blue-3": {
        "$value": "rgba(44, 30, 116, 0.11)",
        "$type": "color",
        "$description": "shadow · ×4"
      },
      "light-blue": {
        "$value": "#C7B0FE",
        "$type": "color",
        "$description": "background · ×3"
      },
      "light-blue-2": {
        "$value": "#ACAAFF",
        "$type": "color",
        "$description": "background · ×3"
      },
      "light-blue-3": {
        "$value": "#886CFF",
        "$type": "color",
        "$description": "background · ×3"
      },
      "light-blue-4": {
        "$value": "#A782FF",
        "$type": "color",
        "$description": "background · ×3"
      },
      "light-blue-5": {
        "$value": "#CAC9FF",
        "$type": "color",
        "$description": "background · ×3"
      },
      "light-blue-6": {
        "$value": "#B8A8FF",
        "$type": "color",
        "$description": "background · ×2"
      },
      "dark-gray-8": {
        "$value": "rgba(24, 30, 37, 0.384)",
        "$type": "color",
        "$description": "border · ×2"
      },
      "red": {
        "$value": "#D01316",
        "$type": "color",
        "$description": "background · ×2"
      },
      "dark-blue-4": {
        "$value": "#050038",
        "$type": "color",
        "$description": "text · ×2"
      },
      "white-3": {
        "$value": "#F5F5F5",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-orange": {
        "$value": "#FFD388",
        "$type": "color",
        "$description": "background · ×1"
      },
      "dark-gray-9": {
        "$value": "#5C5F63",
        "$type": "color",
        "$description": "text · ×1"
      }
    },
    "fontSize": {
      "font-size-2xs": {
        "$value": "10px",
        "$type": "dimension"
      },
      "font-size-xs": {
        "$value": "10.5px",
        "$type": "dimension"
      },
      "font-size-sm": {
        "$value": "12px",
        "$type": "dimension"
      },
      "font-size-base": {
        "$value": "13px",
        "$type": "dimension"
      },
      "font-size-lg": {
        "$value": "14px",
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
        "$value": "28px",
        "$type": "dimension"
      },
      "font-size-6xl": {
        "$value": "31px",
        "$type": "dimension"
      },
      "font-size-32px": {
        "$value": "32px",
        "$type": "dimension"
      },
      "font-size-80px": {
        "$value": "80px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "DM Sans",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "Outfit",
        "$type": "fontFamily"
      },
      "font-family-3": {
        "$value": "Poppins",
        "$type": "fontFamily"
      },
      "font-family-4": {
        "$value": "Roboto",
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
        "$value": "15px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "15.75px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "18px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "19.5px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "21px",
        "$type": "dimension"
      },
      "line-height-lh-6": {
        "$value": "22px",
        "$type": "dimension"
      },
      "line-height-lh-7": {
        "$value": "24px",
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
        "$value": "28.8px",
        "$type": "dimension"
      },
      "line-height-lh-11": {
        "$value": "30px",
        "$type": "dimension"
      },
      "line-height-lh-12": {
        "$value": "36px",
        "$type": "dimension"
      },
      "line-height-lh-13": {
        "$value": "46.5px",
        "$type": "dimension"
      },
      "line-height-lh-14": {
        "$value": "48px",
        "$type": "dimension"
      },
      "line-height-lh-15": {
        "$value": "88px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {}
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
        "$value": "8px",
        "$type": "dimension"
      },
      "space-6": {
        "$value": "10px",
        "$type": "dimension"
      },
      "space-8": {
        "$value": "12px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "14px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "16px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "17px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "18px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "20px",
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
        "$value": "40px",
        "$type": "dimension"
      },
      "space-64": {
        "$value": "60px",
        "$type": "dimension"
      },
      "space-80": {
        "$value": "64px",
        "$type": "dimension"
      },
      "space-96": {
        "$value": "80px",
        "$type": "dimension"
      },
      "space-128": {
        "$value": "111.93px",
        "$type": "dimension"
      },
      "space-160": {
        "$value": "120px",
        "$type": "dimension"
      },
      "space-192": {
        "$value": "179.5px",
        "$type": "dimension"
      }
    },
    "zIndex": {
      "z-1": {
        "$value": "-8",
        "$type": "number"
      },
      "z-2": {
        "$value": "-6",
        "$type": "number"
      },
      "z-3": {
        "$value": "-3",
        "$type": "number"
      },
      "z-4": {
        "$value": "-1",
        "$type": "number"
      },
      "z-5": {
        "$value": "1",
        "$type": "number"
      },
      "z-6": {
        "$value": "3",
        "$type": "number"
      },
      "z-7": {
        "$value": "5",
        "$type": "number"
      },
      "z-8": {
        "$value": "6",
        "$type": "number"
      },
      "z-9": {
        "$value": "8",
        "$type": "number"
      },
      "z-10": {
        "$value": "10",
        "$type": "number"
      },
      "z-11": {
        "$value": "20",
        "$type": "number"
      },
      "z-12": {
        "$value": "30",
        "$type": "number"
      },
      "z-13": {
        "$value": "100",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "768px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "1024px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
        "$value": "0px 0px 24px 24px",
        "$type": "dimension"
      },
      "radius-md": {
        "$value": "4px",
        "$type": "dimension"
      },
      "radius-lg": {
        "$value": "5.4px",
        "$type": "dimension"
      },
      "radius-xl": {
        "$value": "11px",
        "$type": "dimension"
      },
      "radius-2xl": {
        "$value": "12px",
        "$type": "dimension"
      },
      "radius-full": {
        "$value": "13px",
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
        "$value": "22px",
        "$type": "dimension"
      },
      "radius-r10": {
        "$value": "24px",
        "$type": "dimension"
      },
      "radius-r11": {
        "$value": "30px",
        "$type": "dimension"
      },
      "radius-r12": {
        "$value": "32px",
        "$type": "dimension"
      },
      "radius-r13": {
        "$value": "55px",
        "$type": "dimension"
      },
      "radius-r14": {
        "$value": "60px",
        "$type": "dimension"
      },
      "radius-r15": {
        "$value": "65px",
        "$type": "dimension"
      },
      "radius-r16": {
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
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 4px 6px 0px",
        "$type": "shadow"
      },
      "shadow-md": {
        "$value": "rgba(0, 0, 0, 0.08) 0px 0px 22.576px 0px",
        "$type": "shadow"
      },
      "shadow-lg": {
        "$value": "rgba(44, 30, 116, 0.16) 0px 0px 15px 0px",
        "$type": "shadow"
      },
      "shadow-xl": {
        "$value": "rgba(36, 36, 36, 0.08) 0px 12px 16px -4px",
        "$type": "shadow"
      },
      "shadow-shadow-5": {
        "$value": "rgba(44, 30, 116, 0.11) 6.5px 2px 17.5px 0px",
        "$type": "shadow"
      },
      "shadow-shadow-6": {
        "$value": "rgba(44, 30, 116, 0.16) 0px 0px 22.5px 0px",
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
        "$value": "0.25s",
        "$type": "duration"
      },
      "duration-slow": {
        "$value": "0.3s",
        "$type": "duration"
      },
      "duration-slower": {
        "$value": "0.4s",
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
    "opacity-50": {
      "$value": 0.5,
      "$type": "number"
    },
    "opacity-70": {
      "$value": 0.7,
      "$type": "number"
    },
    "opacity-90": {
      "$value": 0.9,
      "$type": "number"
    }
  }
}
```
