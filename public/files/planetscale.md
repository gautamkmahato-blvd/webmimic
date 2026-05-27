# PlanetScale - the world’s fastest and most scalable cloud hosting for Vitess and Postgres — Design System

**Source:** https://planetscale.com/  
**Generated:** 19/04/2026, 00:16:20  
**Extracted:** 13 colors · 12 type tokens · 12 spacing steps · 5 breakpoints · 1 motion tokens

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
| `--color-white-2` | `#FAFAFA` | hsl(0, 0%, 98%) | ×6 |
| `--color-dark-gray-2` | `#111111` | hsl(0, 0%, 7%) | ×3 |
| `--color-yellow` | `#F2B600` | hsl(45, 100%, 47%) | ×1 |
| `--color-orange` | `#FF4400` | hsl(16, 100%, 50%) | ×1 |
| `--color-light-gray-2` | `#EBEBEB` | hsl(0, 0%, 92%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-gray` | `#414141` | hsl(0, 0%, 25%) | ×844 |
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×243 |
| `--color-blue` | `#006BD7` | hsl(210, 100%, 42%) | ×76 |
| `--color-light-gray` | `#C1C1C1` | hsl(0, 0%, 76%) | ×25 |
| `--color-mid-gray` | `#737373` | hsl(0, 0%, 45%) | ×16 |
| `--color-white` | `#FFFFFF` | hsl(0, 0%, 100%) | ×10 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-orange-2` | `#F35815` | hsl(18, 90%, 52%) | ×1 |

### Shadow Colors

_None detected._

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-red` | `#C11027` | hsl(352, 85%, 41%) | ×1 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `ui-sans-serif` |
| `--font-family-2` | `ui-monospace` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `12px` |  |
| `--font-size-xs` | `16px` |  |

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
| `--line-height-tight` | `16px` |
| `--line-height-snug` | `20px` |
| `--line-height-normal` | `24px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `-0.096px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `4px` | ×7 |
| `--space-2` | `8px` | ×34 |
| `--space-3` | `9.63281px` | ×18 |
| `--space-4` | `12px` | ×12 |
| `--space-5` | `16px` | ×23 |
| `--space-6` | `24px` | ×81 |
| `--space-8` | `32px` | ×1 |
| `--space-10` | `40px` | ×4 |
| `--space-12` | `48px` | ×4 |
| `--space-16` | `56px` | ×6 |
| `--space-20` | `80px` | ×1 |
| `--space-24` | `96px` | ×2 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `1px` | ×129 |
| `--border-width-thin` | `2px` | ×7 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `9999px` | ×2 |

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
| `--duration-instant` | `0.15s` | ×155 |

### Easing Functions

_No easing functions detected._

---

## Z-Index

| Token | Value |
| --- | --- |
| — | — |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `640px` |
| `--breakpoint-sm` | `768px` |
| `--breakpoint-md` | `1024px` |
| `--breakpoint-lg` | `1280px` |
| `--breakpoint-xl` | `1536px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-30` | `0.3` | ×2 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-dark-gray` | `--color-white-2` | 9.78:1 | AAA |
| `--color-dark-gray` | `--color-dark-gray-2` | 1.85:1 | Fail |
| `--color-dark-gray` | `--color-yellow` | 5.57:1 | AA |
| `--color-dark-gray` | `--color-orange` | 2.95:1 | Fail |
| `--color-dark-gray` | `--color-light-gray-2` | 8.56:1 | AAA |
| `--color-black` | `--color-white-2` | 20.12:1 | AAA |
| `--color-black` | `--color-dark-gray-2` | 1.11:1 | Fail |
| `--color-black` | `--color-yellow` | 11.47:1 | AAA |
| `--color-black` | `--color-orange` | 6.08:1 | AA |
| `--color-black` | `--color-light-gray-2` | 17.62:1 | AAA |
| `--color-blue` | `--color-white-2` | 4.93:1 | AA |
| `--color-blue` | `--color-dark-gray-2` | 3.67:1 | AA Large |
| `--color-blue` | `--color-yellow` | 2.81:1 | Fail |
| `--color-blue` | `--color-orange` | 1.49:1 | Fail |
| `--color-blue` | `--color-light-gray-2` | 4.31:1 | AA Large |
| `--color-light-gray` | `--color-white-2` | 1.72:1 | Fail |
| `--color-light-gray` | `--color-dark-gray-2` | 10.49:1 | AAA |
| `--color-light-gray` | `--color-yellow` | 1.02:1 | Fail |
| `--color-light-gray` | `--color-orange` | 1.92:1 | Fail |
| `--color-light-gray` | `--color-light-gray-2` | 1.51:1 | Fail |
| `--color-mid-gray` | `--color-white-2` | 4.54:1 | AA |
| `--color-mid-gray` | `--color-dark-gray-2` | 3.98:1 | AA Large |
| `--color-mid-gray` | `--color-yellow` | 2.59:1 | Fail |
| `--color-mid-gray` | `--color-orange` | 1.37:1 | Fail |
| `--color-mid-gray` | `--color-light-gray-2` | 3.98:1 | AA Large |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--white` | `rgba(255, 255, 255, 1)` |
| `--black` | `rgba(0, 0, 0, 1)` |
| `--gray-50` | `#fafafa` |
| `--gray-100` | `#ebebeb` |
| `--gray-200` | `#e1e1e1` |
| `--gray-300` | `#c1c1c1` |
| `--gray-400` | `#a1a1a1` |
| `--gray-500` | `#818181` |
| `--gray-550` | `#737373` |
| `--gray-600` | `#616161` |
| `--gray-700` | `#414141` |
| `--gray-800` | `#2b2b2b` |
| `--gray-850` | `#1a1a1a` |
| `--gray-900` | `#111111` |
| `--red-50` | `#fffafa` |
| `--red-100` | `#ffe5e9` |
| `--red-200` | `#fbbfc7` |
| `--red-300` | `#ff909f` |
| `--red-400` | `#ff7082` |
| `--red-500` | `#ff455d` |
| `--red-600` | `#d92038` |
| `--red-700` | `#c11027` |
| `--red-800` | `#8f0718` |
| `--red-900` | `#341418` |
| `--red-950` | `#200A0D` |
| `--orange-50` | `#fff8f3` |
| `--orange-100` | `#ffe8d8` |
| `--orange-200` | `#ffc59b` |
| `--orange-300` | `#fc9c66` |
| `--orange-400` | `#fd812d` |
| `--orange-500` | `#f35815` |
| `--orange-600` | `#b83a05` |
| `--orange-700` | `#962d00` |
| `--orange-800` | `#672002` |
| `--orange-900` | `#3c1403` |
| `--orange-950` | `#240B00` |
| `--yellow-50` | `#fffbe4` |
| `--yellow-100` | `#fff1a8` |
| `--yellow-200` | `#fed54a` |
| `--yellow-300` | `#f2b600` |
| `--yellow-400` | `#d19f03` |
| `--yellow-500` | `#a78103` |
| `--yellow-600` | `#7d5903` |
| `--yellow-700` | `#5c4716` |
| `--yellow-800` | `#41320c` |
| `--yellow-900` | `#281e03` |
| `--yellow-950` | `#171101` |
| `--green-50` | `#effff3` |
| `--green-100` | `#d7fbdf` |
| `--green-200` | `#a9ecb8` |
| `--green-300` | `#75db8c` |
| `--green-400` | `#40d763` |
| `--green-500` | `#27b648` |
| `--green-600` | `#13862e` |
| `--green-700` | `#19652a` |
| `--green-800` | `#10481d` |
| `--green-900` | `#0a2b13` |
| `--green-950` | `#041A0A` |
| `--blue-50` | `#f3fbff` |
| `--blue-100` | `#ddf2ff` |
| `--blue-200` | `#a9dffe` |
| `--blue-300` | `#73c7f9` |
| `--blue-400` | `#47b7f8` |
| `--blue-500` | `#1e9de7` |
| `--blue-600` | `#0b6ec5` |
| `--blue-700` | `#144eb6` |
| `--blue-800` | `#0e3682` |
| `--blue-900` | `#08204e` |
| `--blue-950` | `#04122E` |
| `--purple-50` | `#f9f8ff` |
| `--purple-100` | `#eeeaff` |
| `--purple-200` | `#d4c9fe` |
| `--purple-300` | `#b7a5fb` |
| `--purple-400` | `#a18bf5` |
| `--purple-500` | `#8467f3` |
| `--purple-600` | `#5e49af` |
| `--purple-700` | `#4b3990` |
| `--purple-800` | `#3e1f75` |
| `--purple-900` | `#27124a` |
| `--purple-950` | `#180636` |
| `--text-contrast` | `var(--black)` |
| `--text-primary` | `var(--gray-700)` |
| `--text-secondary` | `var(--gray-550)` |
| `--text-decoration` | `var(--gray-300)` |
| `--text-disabled` | `var(--gray-400)` |
| `--text-red` | `var(--red-600)` |
| `--text-orange` | `var(--orange-500)` |
| `--text-green` | `var(--green-600)` |
| `--text-blue` | `var(--blue-600)` |
| `--text-purple` | `var(--purple-600)` |
| `--text-postgres` | `#336791` |
| `--bg-primary` | `var(--gray-50)` |
| `--bg-secondary` | `var(--gray-100)` |
| `--bg-focus` | `235 235 235` |
| `--bg-inverted` | `var(--gray-900)` |
| `--bg-green` | `var(--green-600)` |
| `--bg-green-light` | `var(--green-50)` |
| `--bg-purple` | `var(--purple-400)` |
| `--bg-purple-secondary` | `var(--purple-300)` |
| `--bg-purple-tertiary` | `var(--purple-200)` |
| `--border-primary` | `var(--gray-700)` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — PlanetScale - the world’s fastest and most scalable cloud hosting for Vitess and Postgres
 * Source: https://planetscale.com/
 * Generated: 19/04/2026, 00:16:20
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-dark-gray: #414141; /* hsl(0, 0%, 25%) · text */
  --color-black: #000000; /* hsl(0, 0%, 0%) · text */
  --color-blue: #006BD7; /* hsl(210, 100%, 42%) · text */
  --color-light-gray: #C1C1C1; /* hsl(0, 0%, 76%) · text */
  --color-mid-gray: #737373; /* hsl(0, 0%, 45%) · text */
  --color-white: #FFFFFF; /* hsl(0, 0%, 100%) · text */
  --color-white-2: #FAFAFA; /* hsl(0, 0%, 98%) · background */
  --color-dark-gray-2: #111111; /* hsl(0, 0%, 7%) · background */
  --color-red: #C11027; /* hsl(352, 85%, 41%) · fill */
  --color-yellow: #F2B600; /* hsl(45, 100%, 47%) · background */
  --color-orange: #FF4400; /* hsl(16, 100%, 50%) · background */
  --color-orange-2: #F35815; /* hsl(18, 90%, 52%) · border */
  --color-light-gray-2: #EBEBEB; /* hsl(0, 0%, 92%) · background */

  /* ── Core: Typography ── */
  --font-size-2xs: 12px;
  --font-size-xs: 16px;
  --font-family-base: ui-sans-serif;
  --font-family-2: ui-monospace;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-tight: 16px;
  --line-height-snug: 20px;
  --line-height-normal: 24px;
  --letter-spacing-tight: -0.096px;

  /* ── Layout: Spacing ── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 9.63281px;
  --space-4: 12px;
  --space-5: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 56px;
  --space-20: 80px;
  --space-24: 96px;

  /* ── Borders ── */
  --border-width-hairline: 1px;
  --border-width-thin: 2px;
  --radius-sm: 9999px;

  /* ── Surfaces: Shadows ── */

  /* ── Motion ── */
  --duration-instant: 0.15s;

  /* ── Layout: Z-Index ── */

  /* ── Breakpoints ── */
  --breakpoint-xs: 640px;
  --breakpoint-sm: 768px;
  --breakpoint-md: 1024px;
  --breakpoint-lg: 1280px;
  --breakpoint-xl: 1536px;

  /* ── Opacity ── */
  --opacity-30: 0.3;
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://planetscale.com/",
    "title": "PlanetScale - the world’s fastest and most scalable cloud hosting for Vitess and Postgres",
    "generatedAt": "2026-04-18T18:46:20.913Z"
  },
  "core": {
    "color": {
      "dark-gray": {
        "$value": "#414141",
        "$type": "color",
        "$description": "text · ×844"
      },
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "text · ×243"
      },
      "blue": {
        "$value": "#006BD7",
        "$type": "color",
        "$description": "text · ×76"
      },
      "light-gray": {
        "$value": "#C1C1C1",
        "$type": "color",
        "$description": "text · ×25"
      },
      "mid-gray": {
        "$value": "#737373",
        "$type": "color",
        "$description": "text · ×16"
      },
      "white": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "text · ×10"
      },
      "white-2": {
        "$value": "#FAFAFA",
        "$type": "color",
        "$description": "background · ×6"
      },
      "dark-gray-2": {
        "$value": "#111111",
        "$type": "color",
        "$description": "background · ×3"
      },
      "red": {
        "$value": "#C11027",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow": {
        "$value": "#F2B600",
        "$type": "color",
        "$description": "background · ×1"
      },
      "orange": {
        "$value": "#FF4400",
        "$type": "color",
        "$description": "background · ×1"
      },
      "orange-2": {
        "$value": "#F35815",
        "$type": "color",
        "$description": "border · ×1"
      },
      "light-gray-2": {
        "$value": "#EBEBEB",
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
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "ui-sans-serif",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "ui-monospace",
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
        "$value": "16px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "20px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "24px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "-0.096px",
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
        "$value": "9.63281px",
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
        "$value": "32px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "40px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "48px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "56px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "80px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "96px",
        "$type": "dimension"
      }
    },
    "zIndex": {},
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
      },
      "breakpoint-xl": {
        "$value": "1536px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
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
      }
    },
    "shadow": {}
  },
  "motion": {
    "duration": {
      "duration-instant": {
        "$value": "0.15s",
        "$type": "duration"
      }
    },
    "easing": {}
  },
  "opacity": {
    "opacity-30": {
      "$value": 0.3,
      "$type": "number"
    }
  }
}
```
