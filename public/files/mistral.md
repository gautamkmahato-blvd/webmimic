# Frontier AI LLMs, assistants, agents, services | Mistral AI — Design System

**Source:** https://mistral.ai/  
**Generated:** 15/04/2026, 23:41:44  
**Extracted:** 18 colors · 21 type tokens · 22 spacing steps · 4 breakpoints · 4 motion tokens

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
| `--color-white` | `#FFFAEB` | hsl(45, 100%, 96%) | ×953 |
| `--color-dark-gray` | `#1F1F1F` | hsl(0, 0%, 12%) | ×487 |
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×426 |
| `--color-white-2` | `#FFFFFF` | hsl(0, 0%, 100%) | ×376 |
| `--color-orange` | `#FA520F` | hsl(17, 96%, 52%) | ×206 |
| `--color-light-yellow` | `#FFF0C2` | hsl(45, 100%, 88%) | ×24 |
| `--color-yellow` | `#FFD900` | hsl(51, 100%, 50%) | ×1 |
| `--color-orange-5` | `#FFAE00` | hsl(41, 100%, 50%) | ×1 |
| `--color-orange-6` | `#FF8205` | hsl(30, 100%, 51%) | ×1 |
| `--color-red` | `#E00400` | hsl(1, 100%, 44%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-gray-2` | `#3C3C3C` | hsl(0, 0%, 24%) | ×3 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-yellow-2` | `#ECDAA2` | hsl(45, 66%, 78%) | ×3 |

### Shadow Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-yellow` | `rgba(127, 99, 21, 0.12)` | hsl(45, 66%, 29%) | ×14 |
| `--color-dark-orange` | `rgba(127, 99, 21, 0.1)` | hsl(43, 73%, 29%) | ×14 |
| `--color-dark-yellow-2` | `rgba(127, 99, 21, 0.06)` | hsl(50, 75%, 27%) | ×14 |

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-orange-2` | `#9F521A` | hsl(25, 72%, 36%) | ×1 |
| `--color-orange-3` | `#D3812F` | hsl(30, 65%, 51%) | ×1 |
| `--color-orange-4` | `#B35D20` | hsl(25, 70%, 41%) | ×1 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `Arial` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `14px` |  |
| `--font-size-xs` | `16px` |  |
| `--font-size-sm` | `24px` |  |
| `--font-size-base` | `30px` |  |
| `--font-size-lg` | `32px` |  |
| `--font-size-xl` | `48px` |  |
| `--font-size-2xl` | `56px` |  |
| `--font-size-3xl` | `82px` |  |

### Font Weights

| Token | Weight |
| --- | --- |
| `--font-weight-regular` | `400` |

### Line Heights

| Token | Value |
| --- | --- |
| `--line-height-tight` | `20px` |
| `--line-height-snug` | `21px` |
| `--line-height-normal` | `24px` |
| `--line-height-relaxed` | `32px` |
| `--line-height-loose` | `36px` |
| `--line-height-lh-6` | `36.8px` |
| `--line-height-lh-7` | `45.6px` |
| `--line-height-lh-8` | `48px` |
| `--line-height-lh-9` | `53.2px` |
| `--line-height-lh-10` | `82px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `-2.05px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `2px` | ×4 |
| `--space-2` | `4px` | ×16 |
| `--space-3` | `8px` | ×37 |
| `--space-4` | `10px` | ×27 |
| `--space-5` | `12px` | ×102 |
| `--space-6` | `16px` | ×87 |
| `--space-8` | `20px` | ×31 |
| `--space-10` | `24px` | ×34 |
| `--space-12` | `32px` | ×103 |
| `--space-16` | `36px` | ×3 |
| `--space-20` | `40px` | ×47 |
| `--space-24` | `48px` | ×10 |
| `--space-32` | `54.5px` | ×20 |
| `--space-40` | `56px` | ×2 |
| `--space-48` | `64px` | ×4 |
| `--space-64` | `72px` | ×45 |
| `--space-80` | `80px` | ×23 |
| `--space-96` | `98px` | ×1 |
| `--space-128` | `100px` | ×11 |
| `--space-160` | `150px` | ×1 |
| `--space-192` | `172.93px` | ×2 |
| `--space-256` | `318px` | ×2 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `1px` | ×29 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `1.67772e+07px` | ×3 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(127, 99, 21, 0.12) -8px 16px 39px 0px, rgba(127, 99, 21, 0.1) -33px 64px 72px 0px, rgba(127, 99, 21, 0.06) -73px 144px 97px 0px, rgba(127, 99, 21, 0.02) -130px 256px 115px 0px, rgba(127, 99, 21, 0) -203px 400px 126px 0px` | ×14 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.15s` | ×155 |
| `--duration-fast` | `0.2s` | ×32 |
| `--duration-normal` | `0.3s` | ×103 |
| `--duration-slow` | `0.5s` | ×7 |

### Easing Functions

_No easing functions detected._

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `-10` |
| `--z-2` | `10` |
| `--z-3` | `20` |
| `--z-4` | `999` |
| `--z-5` | `2147483647` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `640px` |
| `--breakpoint-sm` | `768px` |
| `--breakpoint-md` | `1024px` |
| `--breakpoint-lg` | `1280px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-40` | `0.4` | ×1 |
| `--opacity-50` | `0.5` | ×1 |
| `--opacity-70` | `0.7` | ×1 |
| `--opacity-80` | `0.8` | ×9 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-dark-gray-2` | `--color-white` | 10.57:1 | AAA |
| `--color-dark-gray-2` | `--color-dark-gray` | 1.49:1 | Fail |
| `--color-dark-gray-2` | `--color-black` | 1.9:1 | Fail |
| `--color-dark-gray-2` | `--color-white-2` | 11.03:1 | AAA |
| `--color-dark-gray-2` | `--color-orange` | 3.3:1 | AA Large |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--background` | `45 100% 96%` |
| `--foreground` | `0 0% 12%` |
| `--primary` | `17 96% 52%` |
| `--primary-foreground` | `45 100% 96%` |
| `--secondary` | `45 100% 88%` |
| `--secondary-foreground` | `0 0% 0%` |
| `--muted` | `45 100% 96%` |
| `--muted-foreground` | `0 0% 24%` |
| `--accent` | `17 96% 52%` |
| `--accent-foreground` | `45 100% 88%` |
| `--destructive` | `1 100% 44%` |
| `--destructive-foreground` | `0 0% 98%` |
| `--border` | `45 100% 96%` |
| `--ring` | `45 100% 96%` |
| `--radius` | `0rem` |
| `--input` | `240 5.9% 90%` |
| `--card` | `0 0% 100%` |
| `--card-foreground` | `240 10% 3.9%` |
| `--popover` | `0 0% 100%` |
| `--popover-foreground` | `240 10% 3.9%` |
| `--mistral-beige` | `45 100% 96%` |
| `--mistral-beige-deep` | `45 100% 88%` |
| `--mistral-beige-deeper` | `45.4 66.07% 78.04%` |
| `--mistral-beige-deep-tint` | `45 44% 50%` |
| `--mistral-deep-black` | `0 0% 0%` |
| `--mistral-black-matt` | `0 0% 12%` |
| `--mistral-black-matt-tint` | `0 0% 24%` |
| `--mistral-orange` | `17 96% 52%` |
| `--mistral-orange-bright` | `30 100% 51%` |
| `--mistral-red` | `1 100% 44%` |
| `--mistral-light-gray` | `1 100% 44%` |
| `--mistral-footer-band-1` | `45 100% 88%` |
| `--mistral-footer-band-2` | `51 100% 50%` |
| `--mistral-footer-band-3` | `41 100% 50%` |
| `--mistral-footer-band-4` | `30 100% 51%` |
| `--mistral-footer-band-5` | `17 96% 52%` |
| `--mistral-footer-band-6` | `1 100% 44%` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — Frontier AI LLMs, assistants, agents, services | Mistral AI
 * Source: https://mistral.ai/
 * Generated: 15/04/2026, 23:41:44
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-white: #FFFAEB; /* hsl(45, 100%, 96%) · background */
  --color-dark-gray: #1F1F1F; /* hsl(0, 0%, 12%) · background */
  --color-black: #000000; /* hsl(0, 0%, 0%) · background */
  --color-white-2: #FFFFFF; /* hsl(0, 0%, 100%) · background */
  --color-orange: #FA520F; /* hsl(17, 96%, 52%) · background */
  --color-light-yellow: #FFF0C2; /* hsl(45, 100%, 88%) · background */
  --color-dark-yellow: rgba(127, 99, 21, 0.12); /* hsl(45, 66%, 29%) · shadow */
  --color-dark-orange: rgba(127, 99, 21, 0.1); /* hsl(43, 73%, 29%) · shadow */
  --color-dark-yellow-2: rgba(127, 99, 21, 0.06); /* hsl(50, 75%, 27%) · shadow */
  --color-light-yellow-2: #ECDAA2; /* hsl(45, 66%, 78%) · border */
  --color-dark-gray-2: #3C3C3C; /* hsl(0, 0%, 24%) · text */
  --color-orange-2: #9F521A; /* hsl(25, 72%, 36%) · gradient */
  --color-orange-3: #D3812F; /* hsl(30, 65%, 51%) · gradient */
  --color-orange-4: #B35D20; /* hsl(25, 70%, 41%) · gradient */
  --color-yellow: #FFD900; /* hsl(51, 100%, 50%) · background */
  --color-orange-5: #FFAE00; /* hsl(41, 100%, 50%) · background */
  --color-orange-6: #FF8205; /* hsl(30, 100%, 51%) · background */
  --color-red: #E00400; /* hsl(1, 100%, 44%) · background */

  /* ── Core: Typography ── */
  --font-size-2xs: 14px;
  --font-size-xs: 16px;
  --font-size-sm: 24px;
  --font-size-base: 30px;
  --font-size-lg: 32px;
  --font-size-xl: 48px;
  --font-size-2xl: 56px;
  --font-size-3xl: 82px;
  --font-family-base: Arial;
  --font-weight-regular: 400;
  --line-height-tight: 20px;
  --line-height-snug: 21px;
  --line-height-normal: 24px;
  --line-height-relaxed: 32px;
  --line-height-loose: 36px;
  --line-height-lh-6: 36.8px;
  --line-height-lh-7: 45.6px;
  --line-height-lh-8: 48px;
  --line-height-lh-9: 53.2px;
  --line-height-lh-10: 82px;
  --letter-spacing-tight: -2.05px;

  /* ── Layout: Spacing ── */
  --space-1: 2px;
  --space-2: 4px;
  --space-3: 8px;
  --space-4: 10px;
  --space-5: 12px;
  --space-6: 16px;
  --space-8: 20px;
  --space-10: 24px;
  --space-12: 32px;
  --space-16: 36px;
  --space-20: 40px;
  --space-24: 48px;
  --space-32: 54.5px;
  --space-40: 56px;
  --space-48: 64px;
  --space-64: 72px;
  --space-80: 80px;
  --space-96: 98px;
  --space-128: 100px;
  --space-160: 150px;
  --space-192: 172.93px;
  --space-256: 318px;

  /* ── Borders ── */
  --border-width-hairline: 1px;
  --radius-sm: 1.67772e+07px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(127, 99, 21, 0.12) -8px 16px 39px 0px, rgba(127, 99, 21, 0.1) -33px 64px 72px 0px, rgba(127, 99, 21, 0.06) -73px 144px 97px 0px, rgba(127, 99, 21, 0.02) -130px 256px 115px 0px, rgba(127, 99, 21, 0) -203px 400px 126px 0px;

  /* ── Motion ── */
  --duration-instant: 0.15s;
  --duration-fast: 0.2s;
  --duration-normal: 0.3s;
  --duration-slow: 0.5s;

  /* ── Layout: Z-Index ── */
  --z-1: -10;
  --z-2: 10;
  --z-3: 20;
  --z-4: 999;
  --z-5: 2147483647;

  /* ── Breakpoints ── */
  --breakpoint-xs: 640px;
  --breakpoint-sm: 768px;
  --breakpoint-md: 1024px;
  --breakpoint-lg: 1280px;

  /* ── Opacity ── */
  --opacity-40: 0.4;
  --opacity-50: 0.5;
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
    "source": "https://mistral.ai/",
    "title": "Frontier AI LLMs, assistants, agents, services | Mistral AI",
    "generatedAt": "2026-04-15T18:11:44.795Z"
  },
  "core": {
    "color": {
      "white": {
        "$value": "#FFFAEB",
        "$type": "color",
        "$description": "background · ×953"
      },
      "dark-gray": {
        "$value": "#1F1F1F",
        "$type": "color",
        "$description": "background · ×487"
      },
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "background · ×426"
      },
      "white-2": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×376"
      },
      "orange": {
        "$value": "#FA520F",
        "$type": "color",
        "$description": "background · ×206"
      },
      "light-yellow": {
        "$value": "#FFF0C2",
        "$type": "color",
        "$description": "background · ×24"
      },
      "dark-yellow": {
        "$value": "rgba(127, 99, 21, 0.12)",
        "$type": "color",
        "$description": "shadow · ×14"
      },
      "dark-orange": {
        "$value": "rgba(127, 99, 21, 0.1)",
        "$type": "color",
        "$description": "shadow · ×14"
      },
      "dark-yellow-2": {
        "$value": "rgba(127, 99, 21, 0.06)",
        "$type": "color",
        "$description": "shadow · ×14"
      },
      "light-yellow-2": {
        "$value": "#ECDAA2",
        "$type": "color",
        "$description": "border · ×3"
      },
      "dark-gray-2": {
        "$value": "#3C3C3C",
        "$type": "color",
        "$description": "text · ×3"
      },
      "orange-2": {
        "$value": "#9F521A",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "orange-3": {
        "$value": "#D3812F",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "orange-4": {
        "$value": "#B35D20",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "yellow": {
        "$value": "#FFD900",
        "$type": "color",
        "$description": "background · ×1"
      },
      "orange-5": {
        "$value": "#FFAE00",
        "$type": "color",
        "$description": "background · ×1"
      },
      "orange-6": {
        "$value": "#FF8205",
        "$type": "color",
        "$description": "background · ×1"
      },
      "red": {
        "$value": "#E00400",
        "$type": "color",
        "$description": "background · ×1"
      }
    },
    "fontSize": {
      "font-size-2xs": {
        "$value": "14px",
        "$type": "dimension"
      },
      "font-size-xs": {
        "$value": "16px",
        "$type": "dimension"
      },
      "font-size-sm": {
        "$value": "24px",
        "$type": "dimension"
      },
      "font-size-base": {
        "$value": "30px",
        "$type": "dimension"
      },
      "font-size-lg": {
        "$value": "32px",
        "$type": "dimension"
      },
      "font-size-xl": {
        "$value": "48px",
        "$type": "dimension"
      },
      "font-size-2xl": {
        "$value": "56px",
        "$type": "dimension"
      },
      "font-size-3xl": {
        "$value": "82px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "Arial",
        "$type": "fontFamily"
      }
    },
    "fontWeight": {
      "font-weight-regular": {
        "$value": "400",
        "$type": "fontWeight"
      }
    },
    "lineHeight": {
      "line-height-tight": {
        "$value": "20px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "21px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "24px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "32px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "36px",
        "$type": "dimension"
      },
      "line-height-lh-6": {
        "$value": "36.8px",
        "$type": "dimension"
      },
      "line-height-lh-7": {
        "$value": "45.6px",
        "$type": "dimension"
      },
      "line-height-lh-8": {
        "$value": "48px",
        "$type": "dimension"
      },
      "line-height-lh-9": {
        "$value": "53.2px",
        "$type": "dimension"
      },
      "line-height-lh-10": {
        "$value": "82px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "-2.05px",
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
        "$value": "8px",
        "$type": "dimension"
      },
      "space-4": {
        "$value": "10px",
        "$type": "dimension"
      },
      "space-5": {
        "$value": "12px",
        "$type": "dimension"
      },
      "space-6": {
        "$value": "16px",
        "$type": "dimension"
      },
      "space-8": {
        "$value": "20px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "24px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "32px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "36px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "40px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "48px",
        "$type": "dimension"
      },
      "space-32": {
        "$value": "54.5px",
        "$type": "dimension"
      },
      "space-40": {
        "$value": "56px",
        "$type": "dimension"
      },
      "space-48": {
        "$value": "64px",
        "$type": "dimension"
      },
      "space-64": {
        "$value": "72px",
        "$type": "dimension"
      },
      "space-80": {
        "$value": "80px",
        "$type": "dimension"
      },
      "space-96": {
        "$value": "98px",
        "$type": "dimension"
      },
      "space-128": {
        "$value": "100px",
        "$type": "dimension"
      },
      "space-160": {
        "$value": "150px",
        "$type": "dimension"
      },
      "space-192": {
        "$value": "172.93px",
        "$type": "dimension"
      },
      "space-256": {
        "$value": "318px",
        "$type": "dimension"
      }
    },
    "zIndex": {
      "z-1": {
        "$value": "-10",
        "$type": "number"
      },
      "z-2": {
        "$value": "10",
        "$type": "number"
      },
      "z-3": {
        "$value": "20",
        "$type": "number"
      },
      "z-4": {
        "$value": "999",
        "$type": "number"
      },
      "z-5": {
        "$value": "2147483647",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "640px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "768px",
        "$type": "dimension"
      },
      "breakpoint-md": {
        "$value": "1024px",
        "$type": "dimension"
      },
      "breakpoint-lg": {
        "$value": "1280px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
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
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(127, 99, 21, 0.12) -8px 16px 39px 0px, rgba(127, 99, 21, 0.1) -33px 64px 72px 0px, rgba(127, 99, 21, 0.06) -73px 144px 97px 0px, rgba(127, 99, 21, 0.02) -130px 256px 115px 0px, rgba(127, 99, 21, 0) -203px 400px 126px 0px",
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
        "$value": "0.5s",
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
