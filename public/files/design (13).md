# Augen Pro — Design System

**Source:** https://augen.pro/  
**Generated:** 06/05/2026, 17:20:56  
**Extracted:** 13 colors · 27 type tokens · 48 spacing steps · 4 breakpoints · 4 motion tokens

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
| `--color-dark-gray` | `#0F1012` | hsl(220, 9%, 6%) | ×500 |
| `--color-white` | `#F2F2F4` | hsl(240, 8%, 95%) | ×422 |
| `--color-blue` | `#0071E3` | hsl(210, 100%, 45%) | ×202 |
| `--color-mid-gray` | `rgba(120, 120, 120, 0.1)` | hsl(0, 0%, 46%) | ×11 |
| `--color-white-2` | `#FFFFFF` | hsl(0, 0%, 100%) | ×11 |
| `--color-light-gray` | `#EFEFEF` | hsl(0, 0%, 94%) | ×2 |
| `--color-white-3` | `#FDFDFD` | hsl(0, 0%, 99%) | ×1 |
| `--color-dark-gray-4` | `rgba(12, 13, 15, 0.05)` | hsl(0, 0%, 8%) | ×1 |
| `--color-dark-gray-5` | `rgba(29, 30, 32, 0.5)` | hsl(240, 3%, 12%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×338 |
| `--color-dark-gray-2` | `#5E5E5E` | hsl(0, 0%, 37%) | ×20 |
| `--color-black-2` | `#020201` | hsl(60, 33%, 1%) | ×12 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-gray-3` | `rgba(15, 16, 18, 0.2)` | hsl(240, 14%, 7%) | ×2 |

### Shadow Colors

_None detected._

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `PP Neue Montreal` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `10px` |  |
| `--font-size-xs` | `12px` |  |
| `--font-size-sm` | `14px` |  |
| `--font-size-base` | `16px` |  |
| `--font-size-lg` | `18px` |  |
| `--font-size-xl` | `25px` |  |
| `--font-size-2xl` | `35px` |  |
| `--font-size-3xl` | `110.153px` |  |

### Font Weights

| Token | Weight |
| --- | --- |
| `--font-weight-light` | `300` |
| `--font-weight-w350` | `350` |

### Line Heights

| Token | Value |
| --- | --- |
| `--line-height-tight` | `12px` |
| `--line-height-snug` | `14.4px` |
| `--line-height-normal` | `16.8px` |
| `--line-height-relaxed` | `19.2px` |
| `--line-height-loose` | `21.6px` |
| `--line-height-lh-6` | `30px` |
| `--line-height-lh-7` | `42px` |
| `--line-height-lh-8` | `132.183px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `-0.7px` |
| `--letter-spacing-normal` | `-0.5px` |
| `--letter-spacing-wide` | `-0.36px` |
| `--letter-spacing-wider` | `-0.32px` |
| `--letter-spacing-widest` | `-0.28px` |
| `--letter-spacing-ls-6` | `-0.24px` |
| `--letter-spacing-ls-7` | `-0.2px` |
| `--letter-spacing-ls-8` | `0.881222px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `2.1px` | ×5 |
| `--space-2` | `3px` | ×1 |
| `--space-3` | `3.6px` | ×5 |
| `--space-4` | `4px` | ×2 |
| `--space-5` | `5px` | ×5 |
| `--space-6` | `6px` | ×2 |
| `--space-8` | `10px` | ×2 |
| `--space-10` | `11px` | ×10 |
| `--space-12` | `12px` | ×1 |
| `--space-16` | `19.6701px` | ×1 |
| `--space-20` | `20px` | ×15 |
| `--space-24` | `39.3403px` | ×1 |
| `--space-32` | `59.0104px` | ×1 |
| `--space-40` | `86.5486px` | ×1 |
| `--space-48` | `118.021px` | ×1 |
| `--space-64` | `28px` | ×4 |
| `--space-80` | `30px` | ×2 |
| `--space-96` | `31.4722px` | ×1 |
| `--space-128` | `34px` | ×2 |
| `--space-160` | `35px` | ×1 |
| `--space-192` | `36px` | ×2 |
| `--space-256` | `36.1931px` | ×4 |
| `--space-23` | `38px` | ×2 |
| `--space-25` | `42px` | ×9 |
| `--space-26` | `43px` | ×1 |
| `--space-27` | `50px` | ×1 |
| `--space-28` | `50.3556px` | ×1 |
| `--space-29` | `52px` | ×2 |
| `--space-30` | `54.3405px` | ×18 |
| `--space-31` | `55.0764px` | ×2 |
| `--space-33` | `60px` | ×3 |
| `--space-34` | `65px` | ×1 |
| `--space-35` | `66.8785px` | ×1 |
| `--space-36` | `72px` | ×1 |
| `--space-37` | `73.9597px` | ×2 |
| `--space-38` | `82px` | ×1 |
| `--space-39` | `85px` | ×1 |
| `--space-41` | `88.909px` | ×2 |
| `--space-42` | `92.0563px` | ×1 |
| `--space-43` | `94px` | ×1 |
| `--space-44` | `94.4167px` | ×1 |
| `--space-45` | `102.285px` | ×3 |
| `--space-46` | `110.153px` | ×1 |
| `--space-47` | `113.3px` | ×3 |
| `--space-49` | `133.757px` | ×1 |
| `--space-50` | `173.097px` | ×2 |
| `--space-51` | `362.156px` | ×1 |
| `--space-52` | `362.164px` | ×1 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `0.5px` | ×21 |
| `--border-width-thin` | `1px` | ×68 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `1.5px` | ×1 |
| `--radius-md` | `1.8px` | ×1 |
| `--radius-lg` | `10px` | ×11 |
| `--radius-xl` | `26px` | ×1 |
| `--radius-2xl` | `50%` | ×1 |
| `--radius-full` | `54px` | ×5 |
| `--radius-r7` | `63px` | ×11 |
| `--radius-r8` | `94px` | ×6 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| — | — | — |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.2s` | ×34 |
| `--duration-fast` | `0.3s` | ×22 |
| `--duration-normal` | `0.4s` | ×2 |
| `--duration-slow` | `0.6s` | ×1 |

### Easing Functions

_No easing functions detected._

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `-1` |
| `--z-2` | `1` |
| `--z-3` | `101` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `833px` |
| `--breakpoint-sm` | `834px` |
| `--breakpoint-md` | `1024px` |
| `--breakpoint-lg` | `1440px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-40` | `0.4` | ×2 |
| `--opacity-50` | `0.5` | ×30 |
| `--opacity-60` | `0.6` | ×2 |
| `--opacity-70` | `0.7` | ×2 |
| `--opacity-80` | `0.8` | ×1 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-black` | `--color-dark-gray` | 1.1:1 | Fail |
| `--color-black` | `--color-white` | 18.78:1 | AAA |
| `--color-black` | `--color-blue` | 4.47:1 | AA Large |
| `--color-black` | `--color-mid-gray` | 4.62:1 | AA |
| `--color-black` | `--color-white-2` | 21:1 | AAA |
| `--color-dark-gray-2` | `--color-dark-gray` | 2.94:1 | Fail |
| `--color-dark-gray-2` | `--color-white` | 5.8:1 | AA |
| `--color-dark-gray-2` | `--color-blue` | 1.38:1 | Fail |
| `--color-dark-gray-2` | `--color-mid-gray` | 1.43:1 | Fail |
| `--color-dark-gray-2` | `--color-white-2` | 6.48:1 | AA |
| `--color-black-2` | `--color-dark-gray` | 1.09:1 | Fail |
| `--color-black-2` | `--color-white` | 18.57:1 | AAA |
| `--color-black-2` | `--color-blue` | 4.42:1 | AA Large |
| `--color-black-2` | `--color-mid-gray` | 4.57:1 | AA |
| `--color-black-2` | `--color-white-2` | 20.76:1 | AAA |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--color-black` | `#000` |
| `--color-blue` | `#0071e3` |
| `--color-green` | `#00b982` |
| `--color-greyDark` | `#1d1e20` |
| `--color-greyLight` | `#efefef` |
| `--color-greyLighter` | `#f8f8f8` |
| `--color-offBlack` | `#0f1012` |
| `--color-offWhite` | `#f2f2f4` |
| `--color-orange` | `#ff5102` |
| `--color-yellow` | `#fca311` |
| `--color-white` | `#fff` |
| `--font-base` | `"PP Neue Montreal"` |
| `--header-height` | `7.9rem` |
| `--grid-columnCount` | `5` |
| `--grid-gutter` | `2.5641025641vw` |
| `--grid-outerGutter` | `5.1282051282vw` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — Augen Pro
 * Source: https://augen.pro/
 * Generated: 06/05/2026, 17:20:56
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-dark-gray: #0F1012; /* hsl(220, 9%, 6%) · background */
  --color-white: #F2F2F4; /* hsl(240, 8%, 95%) · background */
  --color-black: #000000; /* hsl(0, 0%, 0%) · text */
  --color-blue: #0071E3; /* hsl(210, 100%, 45%) · background */
  --color-dark-gray-2: #5E5E5E; /* hsl(0, 0%, 37%) · text */
  --color-black-2: #020201; /* hsl(60, 33%, 1%) · text */
  --color-mid-gray: rgba(120, 120, 120, 0.1); /* hsl(0, 0%, 46%) · background */
  --color-white-2: #FFFFFF; /* hsl(0, 0%, 100%) · background */
  --color-light-gray: #EFEFEF; /* hsl(0, 0%, 94%) · background */
  --color-dark-gray-3: rgba(15, 16, 18, 0.2); /* hsl(240, 14%, 7%) · border */
  --color-white-3: #FDFDFD; /* hsl(0, 0%, 99%) · background */
  --color-dark-gray-4: rgba(12, 13, 15, 0.05); /* hsl(0, 0%, 8%) · background */
  --color-dark-gray-5: rgba(29, 30, 32, 0.5); /* hsl(240, 3%, 12%) · background */

  /* ── Core: Typography ── */
  --font-size-2xs: 10px;
  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 25px;
  --font-size-2xl: 35px;
  --font-size-3xl: 110.153px;
  --font-family-base: PP Neue Montreal;
  --font-weight-light: 300;
  --font-weight-w350: 350;
  --line-height-tight: 12px;
  --line-height-snug: 14.4px;
  --line-height-normal: 16.8px;
  --line-height-relaxed: 19.2px;
  --line-height-loose: 21.6px;
  --line-height-lh-6: 30px;
  --line-height-lh-7: 42px;
  --line-height-lh-8: 132.183px;
  --letter-spacing-tight: -0.7px;
  --letter-spacing-normal: -0.5px;
  --letter-spacing-wide: -0.36px;
  --letter-spacing-wider: -0.32px;
  --letter-spacing-widest: -0.28px;
  --letter-spacing-ls-6: -0.24px;
  --letter-spacing-ls-7: -0.2px;
  --letter-spacing-ls-8: 0.881222px;

  /* ── Layout: Spacing ── */
  --space-1: 2.1px;
  --space-2: 3px;
  --space-3: 3.6px;
  --space-4: 4px;
  --space-5: 5px;
  --space-6: 6px;
  --space-8: 10px;
  --space-10: 11px;
  --space-12: 12px;
  --space-16: 19.6701px;
  --space-20: 20px;
  --space-24: 39.3403px;
  --space-32: 59.0104px;
  --space-40: 86.5486px;
  --space-48: 118.021px;
  --space-64: 28px;
  --space-80: 30px;
  --space-96: 31.4722px;
  --space-128: 34px;
  --space-160: 35px;
  --space-192: 36px;
  --space-256: 36.1931px;
  --space-23: 38px;
  --space-25: 42px;
  --space-26: 43px;
  --space-27: 50px;
  --space-28: 50.3556px;
  --space-29: 52px;
  --space-30: 54.3405px;
  --space-31: 55.0764px;
  --space-33: 60px;
  --space-34: 65px;
  --space-35: 66.8785px;
  --space-36: 72px;
  --space-37: 73.9597px;
  --space-38: 82px;
  --space-39: 85px;
  --space-41: 88.909px;
  --space-42: 92.0563px;
  --space-43: 94px;
  --space-44: 94.4167px;
  --space-45: 102.285px;
  --space-46: 110.153px;
  --space-47: 113.3px;
  --space-49: 133.757px;
  --space-50: 173.097px;
  --space-51: 362.156px;
  --space-52: 362.164px;

  /* ── Borders ── */
  --border-width-hairline: 0.5px;
  --border-width-thin: 1px;
  --radius-sm: 1.5px;
  --radius-md: 1.8px;
  --radius-lg: 10px;
  --radius-xl: 26px;
  --radius-2xl: 50%;
  --radius-full: 54px;
  --radius-r7: 63px;
  --radius-r8: 94px;

  /* ── Surfaces: Shadows ── */

  /* ── Motion ── */
  --duration-instant: 0.2s;
  --duration-fast: 0.3s;
  --duration-normal: 0.4s;
  --duration-slow: 0.6s;

  /* ── Layout: Z-Index ── */
  --z-1: -1;
  --z-2: 1;
  --z-3: 101;

  /* ── Breakpoints ── */
  --breakpoint-xs: 833px;
  --breakpoint-sm: 834px;
  --breakpoint-md: 1024px;
  --breakpoint-lg: 1440px;

  /* ── Opacity ── */
  --opacity-40: 0.4;
  --opacity-50: 0.5;
  --opacity-60: 0.6;
  --opacity-70: 0.7;
  --opacity-80: 0.8;
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://augen.pro/",
    "title": "Augen Pro",
    "generatedAt": "2026-05-06T11:50:56.862Z"
  },
  "core": {
    "color": {
      "dark-gray": {
        "$value": "#0F1012",
        "$type": "color",
        "$description": "background · ×500"
      },
      "white": {
        "$value": "#F2F2F4",
        "$type": "color",
        "$description": "background · ×422"
      },
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "text · ×338"
      },
      "blue": {
        "$value": "#0071E3",
        "$type": "color",
        "$description": "background · ×202"
      },
      "dark-gray-2": {
        "$value": "#5E5E5E",
        "$type": "color",
        "$description": "text · ×20"
      },
      "black-2": {
        "$value": "#020201",
        "$type": "color",
        "$description": "text · ×12"
      },
      "mid-gray": {
        "$value": "rgba(120, 120, 120, 0.1)",
        "$type": "color",
        "$description": "background · ×11"
      },
      "white-2": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×11"
      },
      "light-gray": {
        "$value": "#EFEFEF",
        "$type": "color",
        "$description": "background · ×2"
      },
      "dark-gray-3": {
        "$value": "rgba(15, 16, 18, 0.2)",
        "$type": "color",
        "$description": "border · ×2"
      },
      "white-3": {
        "$value": "#FDFDFD",
        "$type": "color",
        "$description": "background · ×1"
      },
      "dark-gray-4": {
        "$value": "rgba(12, 13, 15, 0.05)",
        "$type": "color",
        "$description": "background · ×1"
      },
      "dark-gray-5": {
        "$value": "rgba(29, 30, 32, 0.5)",
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
        "$value": "16px",
        "$type": "dimension"
      },
      "font-size-lg": {
        "$value": "18px",
        "$type": "dimension"
      },
      "font-size-xl": {
        "$value": "25px",
        "$type": "dimension"
      },
      "font-size-2xl": {
        "$value": "35px",
        "$type": "dimension"
      },
      "font-size-3xl": {
        "$value": "110.153px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "PP Neue Montreal",
        "$type": "fontFamily"
      }
    },
    "fontWeight": {
      "font-weight-light": {
        "$value": "300",
        "$type": "fontWeight"
      },
      "font-weight-w350": {
        "$value": "350",
        "$type": "fontWeight"
      }
    },
    "lineHeight": {
      "line-height-tight": {
        "$value": "12px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "14.4px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "16.8px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "19.2px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "21.6px",
        "$type": "dimension"
      },
      "line-height-lh-6": {
        "$value": "30px",
        "$type": "dimension"
      },
      "line-height-lh-7": {
        "$value": "42px",
        "$type": "dimension"
      },
      "line-height-lh-8": {
        "$value": "132.183px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "-0.7px",
        "$type": "dimension"
      },
      "letter-spacing-normal": {
        "$value": "-0.5px",
        "$type": "dimension"
      },
      "letter-spacing-wide": {
        "$value": "-0.36px",
        "$type": "dimension"
      },
      "letter-spacing-wider": {
        "$value": "-0.32px",
        "$type": "dimension"
      },
      "letter-spacing-widest": {
        "$value": "-0.28px",
        "$type": "dimension"
      },
      "letter-spacing-ls-6": {
        "$value": "-0.24px",
        "$type": "dimension"
      },
      "letter-spacing-ls-7": {
        "$value": "-0.2px",
        "$type": "dimension"
      },
      "letter-spacing-ls-8": {
        "$value": "0.881222px",
        "$type": "dimension"
      }
    }
  },
  "layout": {
    "spacing": {
      "space-1": {
        "$value": "2.1px",
        "$type": "dimension"
      },
      "space-2": {
        "$value": "3px",
        "$type": "dimension"
      },
      "space-3": {
        "$value": "3.6px",
        "$type": "dimension"
      },
      "space-4": {
        "$value": "4px",
        "$type": "dimension"
      },
      "space-5": {
        "$value": "5px",
        "$type": "dimension"
      },
      "space-6": {
        "$value": "6px",
        "$type": "dimension"
      },
      "space-8": {
        "$value": "10px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "11px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "12px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "19.6701px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "20px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "39.3403px",
        "$type": "dimension"
      },
      "space-32": {
        "$value": "59.0104px",
        "$type": "dimension"
      },
      "space-40": {
        "$value": "86.5486px",
        "$type": "dimension"
      },
      "space-48": {
        "$value": "118.021px",
        "$type": "dimension"
      },
      "space-64": {
        "$value": "28px",
        "$type": "dimension"
      },
      "space-80": {
        "$value": "30px",
        "$type": "dimension"
      },
      "space-96": {
        "$value": "31.4722px",
        "$type": "dimension"
      },
      "space-128": {
        "$value": "34px",
        "$type": "dimension"
      },
      "space-160": {
        "$value": "35px",
        "$type": "dimension"
      },
      "space-192": {
        "$value": "36px",
        "$type": "dimension"
      },
      "space-256": {
        "$value": "36.1931px",
        "$type": "dimension"
      },
      "space-23": {
        "$value": "38px",
        "$type": "dimension"
      },
      "space-25": {
        "$value": "42px",
        "$type": "dimension"
      },
      "space-26": {
        "$value": "43px",
        "$type": "dimension"
      },
      "space-27": {
        "$value": "50px",
        "$type": "dimension"
      },
      "space-28": {
        "$value": "50.3556px",
        "$type": "dimension"
      },
      "space-29": {
        "$value": "52px",
        "$type": "dimension"
      },
      "space-30": {
        "$value": "54.3405px",
        "$type": "dimension"
      },
      "space-31": {
        "$value": "55.0764px",
        "$type": "dimension"
      },
      "space-33": {
        "$value": "60px",
        "$type": "dimension"
      },
      "space-34": {
        "$value": "65px",
        "$type": "dimension"
      },
      "space-35": {
        "$value": "66.8785px",
        "$type": "dimension"
      },
      "space-36": {
        "$value": "72px",
        "$type": "dimension"
      },
      "space-37": {
        "$value": "73.9597px",
        "$type": "dimension"
      },
      "space-38": {
        "$value": "82px",
        "$type": "dimension"
      },
      "space-39": {
        "$value": "85px",
        "$type": "dimension"
      },
      "space-41": {
        "$value": "88.909px",
        "$type": "dimension"
      },
      "space-42": {
        "$value": "92.0563px",
        "$type": "dimension"
      },
      "space-43": {
        "$value": "94px",
        "$type": "dimension"
      },
      "space-44": {
        "$value": "94.4167px",
        "$type": "dimension"
      },
      "space-45": {
        "$value": "102.285px",
        "$type": "dimension"
      },
      "space-46": {
        "$value": "110.153px",
        "$type": "dimension"
      },
      "space-47": {
        "$value": "113.3px",
        "$type": "dimension"
      },
      "space-49": {
        "$value": "133.757px",
        "$type": "dimension"
      },
      "space-50": {
        "$value": "173.097px",
        "$type": "dimension"
      },
      "space-51": {
        "$value": "362.156px",
        "$type": "dimension"
      },
      "space-52": {
        "$value": "362.164px",
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
        "$value": "101",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "833px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "834px",
        "$type": "dimension"
      },
      "breakpoint-md": {
        "$value": "1024px",
        "$type": "dimension"
      },
      "breakpoint-lg": {
        "$value": "1440px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
        "$value": "1.5px",
        "$type": "dimension"
      },
      "radius-md": {
        "$value": "1.8px",
        "$type": "dimension"
      },
      "radius-lg": {
        "$value": "10px",
        "$type": "dimension"
      },
      "radius-xl": {
        "$value": "26px",
        "$type": "dimension"
      },
      "radius-2xl": {
        "$value": "50%",
        "$type": "dimension"
      },
      "radius-full": {
        "$value": "54px",
        "$type": "dimension"
      },
      "radius-r7": {
        "$value": "63px",
        "$type": "dimension"
      },
      "radius-r8": {
        "$value": "94px",
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
      }
    },
    "shadow": {}
  },
  "motion": {
    "duration": {
      "duration-instant": {
        "$value": "0.2s",
        "$type": "duration"
      },
      "duration-fast": {
        "$value": "0.3s",
        "$type": "duration"
      },
      "duration-normal": {
        "$value": "0.4s",
        "$type": "duration"
      },
      "duration-slow": {
        "$value": "0.6s",
        "$type": "duration"
      }
    },
    "easing": {}
  },
  "opacity": {
    "opacity-40": {
      "$value": 0.4,
      "$type": "number"
    },
    "opacity-50": {
      "$value": 0.5,
      "$type": "number"
    },
    "opacity-60": {
      "$value": 0.6,
      "$type": "number"
    },
    "opacity-70": {
      "$value": 0.7,
      "$type": "number"
    },
    "opacity-80": {
      "$value": 0.8,
      "$type": "number"
    }
  }
}
```
