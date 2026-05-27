# SpaceX — Design System

**Source:** https://www.spacex.com/  
**Generated:** 18/04/2026, 13:49:39  
**Extracted:** 6 colors · 15 type tokens · 11 spacing steps · 9 breakpoints · 2 motion tokens

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
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×136 |
| `--color-light-gray-2` | `rgba(240, 240, 250, 0.1)` | hsl(240, 33%, 94%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-white` | `#F0F0FA` | hsl(240, 50%, 96%) | ×232 |
| `--color-blue` | `#0000EE` | hsl(240, 100%, 47%) | ×12 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-white-2` | `rgba(240, 240, 250, 0.35)` | hsl(240, 40%, 96%) | ×5 |

### Shadow Colors

_None detected._

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray` | `#D9D9D9` | hsl(0, 0%, 85%) | ×3 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `Times` |
| `--font-family-2` | `D-DIN` |
| `--font-family-3` | `D-DIN-Bold` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `12px` |  |
| `--font-size-xs` | `16px` |  |
| `--font-size-sm` | `48px` |  |
| `--font-size-base` | `80px` |  |

### Font Weights

| Token | Weight |
| --- | --- |
| `--font-weight-regular` | `400` |

### Line Heights

| Token | Value |
| --- | --- |
| `--line-height-tight` | `12px` |
| `--line-height-snug` | `24px` |
| `--line-height-normal` | `48px` |
| `--line-height-relaxed` | `60px` |
| `--line-height-loose` | `76px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `0.96px` |
| `--letter-spacing-normal` | `1.6px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `10px` | ×5 |
| `--space-2` | `12px` | ×2 |
| `--space-3` | `15px` | ×5 |
| `--space-4` | `16px` | ×1 |
| `--space-5` | `18px` | ×14 |
| `--space-6` | `20px` | ×10 |
| `--space-8` | `24px` | ×2 |
| `--space-10` | `30px` | ×6 |
| `--space-12` | `36px` | ×1 |
| `--space-16` | `40px` | ×1 |
| `--space-20` | `60px` | ×2 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `1px` | ×20 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `4px` | ×5 |
| `--radius-md` | `32px` | ×1 |

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
| `--duration-instant` | `0.3s` | ×1 |
| `--duration-fast` | `0.5s` | ×10 |

### Easing Functions

_No easing functions detected._

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `1` |
| `--z-2` | `2` |
| `--z-3` | `3` |
| `--z-4` | `99` |
| `--z-5` | `100` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `599.98px` |
| `--breakpoint-sm` | `600px` |
| `--breakpoint-md` | `959.98px` |
| `--breakpoint-lg` | `960px` |
| `--breakpoint-xl` | `961px` |
| `--breakpoint-2xl` | `1279px` |
| `--breakpoint-3xl` | `1279.98px` |
| `--breakpoint-bp-8` | `1350px` |
| `--breakpoint-bp-9` | `1500px` |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-white` | `--color-black` | 18.55:1 | AAA |
| `--color-white` | `--color-light-gray-2` | 1.05:1 | Fail |
| `--color-blue` | `--color-black` | 2.23:1 | Fail |
| `--color-blue` | `--color-light-gray-2` | 7.94:1 | AAA |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--white-100` | `rgba(240, 240, 250, 1)` |
| `--white-90` | `rgba(240, 240, 250, .9)` |
| `--white-80` | `rgba(240, 240, 250, .8)` |
| `--white-70` | `rgba(240, 240, 250, .7)` |
| `--white-60` | `rgba(240, 240, 250, .6)` |
| `--white-50` | `rgba(240, 240, 250, .5)` |
| `--white-35` | `rgba(240, 240, 250, .35)` |
| `--white-30` | `rgba(240, 240, 250, .3)` |
| `--white-25` | `rgba(255, 255, 255, .25)` |
| `--white-15` | `rgba(240, 240, 250, .15)` |
| `--white-10` | `rgba(240, 240, 250, .1)` |
| `--black-50` | `rgba(0, 0, 0, .5)` |
| `--black-80` | `rgba(0, 0, 0, .8)` |
| `--gray-80` | `rgba(37, 38, 40, .8)` |
| `--gray-60` | `rgba(37, 38, 40, .6)` |
| `--gray-40` | `rgba(37, 38, 40, .4)` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — SpaceX
 * Source: https://www.spacex.com/
 * Generated: 18/04/2026, 13:49:39
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-white: #F0F0FA; /* hsl(240, 50%, 96%) · text */
  --color-black: #000000; /* hsl(0, 0%, 0%) · background */
  --color-blue: #0000EE; /* hsl(240, 100%, 47%) · text */
  --color-white-2: rgba(240, 240, 250, 0.35); /* hsl(240, 40%, 96%) · border */
  --color-light-gray: #D9D9D9; /* hsl(0, 0%, 85%) · fill */
  --color-light-gray-2: rgba(240, 240, 250, 0.1); /* hsl(240, 33%, 94%) · background */

  /* ── Core: Typography ── */
  --font-size-2xs: 12px;
  --font-size-xs: 16px;
  --font-size-sm: 48px;
  --font-size-base: 80px;
  --font-family-base: Times;
  --font-family-2: D-DIN;
  --font-family-3: D-DIN-Bold;
  --font-weight-regular: 400;
  --line-height-tight: 12px;
  --line-height-snug: 24px;
  --line-height-normal: 48px;
  --line-height-relaxed: 60px;
  --line-height-loose: 76px;
  --letter-spacing-tight: 0.96px;
  --letter-spacing-normal: 1.6px;

  /* ── Layout: Spacing ── */
  --space-1: 10px;
  --space-2: 12px;
  --space-3: 15px;
  --space-4: 16px;
  --space-5: 18px;
  --space-6: 20px;
  --space-8: 24px;
  --space-10: 30px;
  --space-12: 36px;
  --space-16: 40px;
  --space-20: 60px;

  /* ── Borders ── */
  --border-width-hairline: 1px;
  --radius-sm: 4px;
  --radius-md: 32px;

  /* ── Surfaces: Shadows ── */

  /* ── Motion ── */
  --duration-instant: 0.3s;
  --duration-fast: 0.5s;

  /* ── Layout: Z-Index ── */
  --z-1: 1;
  --z-2: 2;
  --z-3: 3;
  --z-4: 99;
  --z-5: 100;

  /* ── Breakpoints ── */
  --breakpoint-xs: 599.98px;
  --breakpoint-sm: 600px;
  --breakpoint-md: 959.98px;
  --breakpoint-lg: 960px;
  --breakpoint-xl: 961px;
  --breakpoint-2xl: 1279px;
  --breakpoint-3xl: 1279.98px;
  --breakpoint-bp-8: 1350px;
  --breakpoint-bp-9: 1500px;

  /* ── Opacity ── */
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://www.spacex.com/",
    "title": "SpaceX",
    "generatedAt": "2026-04-18T08:19:39.836Z"
  },
  "core": {
    "color": {
      "white": {
        "$value": "#F0F0FA",
        "$type": "color",
        "$description": "text · ×232"
      },
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "background · ×136"
      },
      "blue": {
        "$value": "#0000EE",
        "$type": "color",
        "$description": "text · ×12"
      },
      "white-2": {
        "$value": "rgba(240, 240, 250, 0.35)",
        "$type": "color",
        "$description": "border · ×5"
      },
      "light-gray": {
        "$value": "#D9D9D9",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "light-gray-2": {
        "$value": "rgba(240, 240, 250, 0.1)",
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
        "$value": "16px",
        "$type": "dimension"
      },
      "font-size-sm": {
        "$value": "48px",
        "$type": "dimension"
      },
      "font-size-base": {
        "$value": "80px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "Times",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "D-DIN",
        "$type": "fontFamily"
      },
      "font-family-3": {
        "$value": "D-DIN-Bold",
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
        "$value": "12px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "24px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "48px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "60px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "76px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "0.96px",
        "$type": "dimension"
      },
      "letter-spacing-normal": {
        "$value": "1.6px",
        "$type": "dimension"
      }
    }
  },
  "layout": {
    "spacing": {
      "space-1": {
        "$value": "10px",
        "$type": "dimension"
      },
      "space-2": {
        "$value": "12px",
        "$type": "dimension"
      },
      "space-3": {
        "$value": "15px",
        "$type": "dimension"
      },
      "space-4": {
        "$value": "16px",
        "$type": "dimension"
      },
      "space-5": {
        "$value": "18px",
        "$type": "dimension"
      },
      "space-6": {
        "$value": "20px",
        "$type": "dimension"
      },
      "space-8": {
        "$value": "24px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "30px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "36px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "40px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "60px",
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
        "$value": "99",
        "$type": "number"
      },
      "z-5": {
        "$value": "100",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "599.98px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "600px",
        "$type": "dimension"
      },
      "breakpoint-md": {
        "$value": "959.98px",
        "$type": "dimension"
      },
      "breakpoint-lg": {
        "$value": "960px",
        "$type": "dimension"
      },
      "breakpoint-xl": {
        "$value": "961px",
        "$type": "dimension"
      },
      "breakpoint-2xl": {
        "$value": "1279px",
        "$type": "dimension"
      },
      "breakpoint-3xl": {
        "$value": "1279.98px",
        "$type": "dimension"
      },
      "breakpoint-bp-8": {
        "$value": "1350px",
        "$type": "dimension"
      },
      "breakpoint-bp-9": {
        "$value": "1500px",
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
        "$value": "32px",
        "$type": "dimension"
      }
    },
    "borderWidth": {
      "border-width-hairline": {
        "$value": "1px",
        "$type": "dimension"
      }
    },
    "shadow": {}
  },
  "motion": {
    "duration": {
      "duration-instant": {
        "$value": "0.3s",
        "$type": "duration"
      },
      "duration-fast": {
        "$value": "0.5s",
        "$type": "duration"
      }
    },
    "easing": {}
  },
  "opacity": {}
}
```
