# Cron Calendar — Design System

**Source:** https://www.cron.com/  
**Generated:** 19/04/2026, 00:14:03  
**Extracted:** 8 colors · 16 type tokens · 9 spacing steps · 3 breakpoints · 1 motion tokens

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
| `--color-dark-gray` | `#161412` | hsl(30, 10%, 8%) | ×2 |
| `--color-orange-2` | `#FF4700` | hsl(17, 100%, 50%) | ×1 |
| `--color-black-2` | `#0F0D0A` | hsl(36, 20%, 5%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray` | `#CCCCCC` | hsl(0, 0%, 80%) | ×58 |
| `--color-white` | `#FFFFFF` | hsl(0, 0%, 100%) | ×31 |
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×23 |

### Border Colors

_None detected._

### Shadow Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-orange` | `rgba(255, 71, 0, 0.2)` | hsl(16, 100%, 50%) | ×2 |
| `--color-orange-3` | `rgba(255, 71, 0, 0.5)` | hsl(17, 100%, 50%) | ×1 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `Helvetica Neue` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `13px` |  |
| `--font-size-xs` | `15px` |  |
| `--font-size-sm` | `16px` |  |
| `--font-size-base` | `22px` |  |
| `--font-size-lg` | `140px` |  |

### Font Weights

| Token | Weight |
| --- | --- |
| `--font-weight-regular` | `400` |
| `--font-weight-medium` | `500` |
| `--font-weight-bold` | `700` |

### Line Heights

| Token | Value |
| --- | --- |
| `--line-height-tight` | `15px` |
| `--line-height-snug` | `19.5px` |
| `--line-height-normal` | `22px` |
| `--line-height-relaxed` | `37.4px` |
| `--line-height-loose` | `126px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `-3px` |
| `--letter-spacing-normal` | `0.15px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `1px` | ×1 |
| `--space-2` | `12px` | ×2 |
| `--space-3` | `16px` | ×3 |
| `--space-4` | `20px` | ×2 |
| `--space-5` | `24px` | ×5 |
| `--space-6` | `40px` | ×7 |
| `--space-8` | `80px` | ×2 |
| `--space-10` | `140px` | ×6 |
| `--space-12` | `431.906px` | ×2 |

---

## Borders

### Border Widths

_No border widths detected._

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `4px` | ×1 |
| `--radius-md` | `9999px` | ×1 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgba(255, 71, 0, 0.2) 0px 0px 100px 0px` | ×1 |
| `--shadow-md` | `rgba(255, 71, 0, 0.5) 0px 0px 0px 0.5px inset, rgba(255, 72, 0, 0.2) 0px 0px 28px 0px` | ×1 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.175s` | ×3 |

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
| `--breakpoint-xs` | `500px` |
| `--breakpoint-sm` | `768px` |
| `--breakpoint-md` | `1000px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-30` | `0.3` | ×1 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-light-gray` | `--color-dark-gray` | 11.44:1 | AAA |
| `--color-light-gray` | `--color-orange-2` | 2.13:1 | Fail |
| `--color-light-gray` | `--color-black-2` | 12.08:1 | AAA |
| `--color-white` | `--color-dark-gray` | 18.37:1 | AAA |
| `--color-white` | `--color-orange-2` | 3.41:1 | AA Large |
| `--color-white` | `--color-black-2` | 19.4:1 | AAA |
| `--color-black` | `--color-dark-gray` | 1.14:1 | Fail |
| `--color-black` | `--color-orange-2` | 6.15:1 | AA |
| `--color-black` | `--color-black-2` | 1.08:1 | Fail |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — Cron Calendar
 * Source: https://www.cron.com/
 * Generated: 19/04/2026, 00:14:03
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-light-gray: #CCCCCC; /* hsl(0, 0%, 80%) · text */
  --color-white: #FFFFFF; /* hsl(0, 0%, 100%) · text */
  --color-black: #000000; /* hsl(0, 0%, 0%) · text */
  --color-dark-gray: #161412; /* hsl(30, 10%, 8%) · background */
  --color-orange: rgba(255, 71, 0, 0.2); /* hsl(16, 100%, 50%) · shadow */
  --color-orange-2: #FF4700; /* hsl(17, 100%, 50%) · background */
  --color-orange-3: rgba(255, 71, 0, 0.5); /* hsl(17, 100%, 50%) · shadow */
  --color-black-2: #0F0D0A; /* hsl(36, 20%, 5%) · background */

  /* ── Core: Typography ── */
  --font-size-2xs: 13px;
  --font-size-xs: 15px;
  --font-size-sm: 16px;
  --font-size-base: 22px;
  --font-size-lg: 140px;
  --font-family-base: Helvetica Neue;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --line-height-tight: 15px;
  --line-height-snug: 19.5px;
  --line-height-normal: 22px;
  --line-height-relaxed: 37.4px;
  --line-height-loose: 126px;
  --letter-spacing-tight: -3px;
  --letter-spacing-normal: 0.15px;

  /* ── Layout: Spacing ── */
  --space-1: 1px;
  --space-2: 12px;
  --space-3: 16px;
  --space-4: 20px;
  --space-5: 24px;
  --space-6: 40px;
  --space-8: 80px;
  --space-10: 140px;
  --space-12: 431.906px;

  /* ── Borders ── */
  --radius-sm: 4px;
  --radius-md: 9999px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgba(255, 71, 0, 0.2) 0px 0px 100px 0px;
  --shadow-md: rgba(255, 71, 0, 0.5) 0px 0px 0px 0.5px inset, rgba(255, 72, 0, 0.2) 0px 0px 28px 0px;

  /* ── Motion ── */
  --duration-instant: 0.175s;

  /* ── Layout: Z-Index ── */

  /* ── Breakpoints ── */
  --breakpoint-xs: 500px;
  --breakpoint-sm: 768px;
  --breakpoint-md: 1000px;

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
    "source": "https://www.cron.com/",
    "title": "Cron Calendar",
    "generatedAt": "2026-04-18T18:44:03.473Z"
  },
  "core": {
    "color": {
      "light-gray": {
        "$value": "#CCCCCC",
        "$type": "color",
        "$description": "text · ×58"
      },
      "white": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "text · ×31"
      },
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "text · ×23"
      },
      "dark-gray": {
        "$value": "#161412",
        "$type": "color",
        "$description": "background · ×2"
      },
      "orange": {
        "$value": "rgba(255, 71, 0, 0.2)",
        "$type": "color",
        "$description": "shadow · ×2"
      },
      "orange-2": {
        "$value": "#FF4700",
        "$type": "color",
        "$description": "background · ×1"
      },
      "orange-3": {
        "$value": "rgba(255, 71, 0, 0.5)",
        "$type": "color",
        "$description": "shadow · ×1"
      },
      "black-2": {
        "$value": "#0F0D0A",
        "$type": "color",
        "$description": "background · ×1"
      }
    },
    "fontSize": {
      "font-size-2xs": {
        "$value": "13px",
        "$type": "dimension"
      },
      "font-size-xs": {
        "$value": "15px",
        "$type": "dimension"
      },
      "font-size-sm": {
        "$value": "16px",
        "$type": "dimension"
      },
      "font-size-base": {
        "$value": "22px",
        "$type": "dimension"
      },
      "font-size-lg": {
        "$value": "140px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "Helvetica Neue",
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
      "font-weight-bold": {
        "$value": "700",
        "$type": "fontWeight"
      }
    },
    "lineHeight": {
      "line-height-tight": {
        "$value": "15px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "19.5px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "22px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "37.4px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "126px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "-3px",
        "$type": "dimension"
      },
      "letter-spacing-normal": {
        "$value": "0.15px",
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
        "$value": "12px",
        "$type": "dimension"
      },
      "space-3": {
        "$value": "16px",
        "$type": "dimension"
      },
      "space-4": {
        "$value": "20px",
        "$type": "dimension"
      },
      "space-5": {
        "$value": "24px",
        "$type": "dimension"
      },
      "space-6": {
        "$value": "40px",
        "$type": "dimension"
      },
      "space-8": {
        "$value": "80px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "140px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "431.906px",
        "$type": "dimension"
      }
    },
    "zIndex": {},
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "500px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "768px",
        "$type": "dimension"
      },
      "breakpoint-md": {
        "$value": "1000px",
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
        "$value": "9999px",
        "$type": "dimension"
      }
    },
    "borderWidth": {},
    "shadow": {
      "shadow-sm": {
        "$value": "rgba(255, 71, 0, 0.2) 0px 0px 100px 0px",
        "$type": "shadow"
      },
      "shadow-md": {
        "$value": "rgba(255, 71, 0, 0.5) 0px 0px 0px 0.5px inset, rgba(255, 72, 0, 0.2) 0px 0px 28px 0px",
        "$type": "shadow"
      }
    }
  },
  "motion": {
    "duration": {
      "duration-instant": {
        "$value": "0.175s",
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
