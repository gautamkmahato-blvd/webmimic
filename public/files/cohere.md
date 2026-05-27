# Enterprise AI: Private, Secure, Customizable | Cohere — Design System

**Source:** https://cohere.com/  
**Generated:** 15/04/2026, 00:24:23  
**Extracted:** 39 colors · 36 type tokens · 23 spacing steps · 26 breakpoints · 7 motion tokens

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
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×4298 |
| `--color-white` | `#FFFFFF` | hsl(0, 0%, 100%) | ×688 |
| `--color-dark-gray-2` | `#17171C` | hsl(240, 10%, 10%) | ×104 |
| `--color-light-gray-2` | `#F2F2F2` | hsl(0, 0%, 95%) | ×76 |
| `--color-red` | `#FF7759` | hsl(11, 100%, 67%) | ×26 |
| `--color-blue-2` | `#4C6EE6` | hsl(227, 75%, 60%) | ×15 |
| `--color-light-purple` | `#D18EE2` | hsl(288, 59%, 72%) | ×12 |
| `--color-light-pink` | `#F0DFF3` | hsl(291, 45%, 91%) | ×6 |
| `--color-light-gray-4` | `#F0EEE9` | hsl(43, 19%, 93%) | ×6 |
| `--color-dark-gray-9` | `#2E2E2E` | hsl(0, 0%, 18%) | ×2 |
| `--color-purple` | `#9B60AA` | hsl(288, 30%, 52%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-gray` | `#212121` | hsl(0, 0%, 13%) | ×2986 |
| `--color-white-2` | `#FAFAFA` | hsl(0, 0%, 98%) | ×234 |
| `--color-blue` | `#75758A` | hsl(240, 8%, 50%) | ×40 |
| `--color-dark-gray-8` | `#616161` | hsl(0, 0%, 38%) | ×6 |
| `--color-mid-gray-2` | `#A4A4A4` | hsl(0, 0%, 64%) | ×5 |
| `--color-mid-gray-3` | `#93939F` | hsl(240, 6%, 60%) | ×5 |
| `--color-light-gray-5` | `#BDBDBD` | hsl(0, 0%, 74%) | ×2 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray` | `#E5E7EB` | hsl(220, 13%, 91%) | ×4322 |
| `--color-light-gray-3` | `#D9D9DD` | hsl(240, 6%, 86%) | ×9 |

### Shadow Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-mid-gray-5` | `rgba(172, 171, 171, 0.3)` | hsl(0, 0%, 67%) | ×1 |

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-gray-3` | `#212129` | hsl(240, 11%, 15%) | ×104 |
| `--color-dark-gray-4` | `#17171B` | hsl(240, 8%, 10%) | ×64 |
| `--color-blue-3` | `#7670C5` | hsl(244, 42%, 61%) | ×11 |
| `--color-mid-gray` | `#93939E` | hsl(240, 5%, 60%) | ×10 |
| `--color-dark-gray-6` | `rgba(33, 33, 33, 0.4)` | hsl(0, 0%, 13%) | ×7 |
| `--color-dark-gray-7` | `rgba(33, 33, 33, 0.2)` | hsl(0, 0%, 14%) | ×7 |
| `--color-mid-gray-4` | `#808080` | hsl(0, 0%, 50%) | ×4 |
| `--color-dark-green` | `#00AA28` | hsl(134, 100%, 33%) | ×3 |
| `--color-dark-blue` | `#152455` | hsl(226, 60%, 21%) | ×2 |
| `--color-mid-gray-6` | `#8E8E90` | hsl(240, 1%, 56%) | ×1 |
| `--color-blue-4` | `#0066D9` | hsl(212, 100%, 43%) | ×1 |
| `--color-dark-green-2` | `#00AB46` | hsl(145, 100%, 34%) | ×1 |
| `--color-red-2` | `#E94234` | hsl(5, 80%, 56%) | ×1 |
| `--color-dark-green-3` | `#00822D` | hsl(141, 100%, 25%) | ×1 |
| `--color-blue-5` | `#2583FB` | hsl(214, 96%, 56%) | ×1 |
| `--color-orange` | `#FFB900` | hsl(44, 100%, 50%) | ×1 |
| `--color-cyan` | `#00A1DF` | hsl(197, 100%, 44%) | ×1 |

### Other Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-gray-5` | `#2E2E37` | hsl(240, 9%, 20%) | ×22 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `InterRegular` |
| `--font-family-2` | `Unica77 Cohere Web` |
| `--font-family-3` | `CohereMono` |
| `--font-family-4` | `CohereText` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `0px` |  |
| `--font-size-xs` | `8px` |  |
| `--font-size-sm` | `12px` |  |
| `--font-size-base` | `14px` |  |
| `--font-size-lg` | `16px` |  |
| `--font-size-xl` | `18px` |  |
| `--font-size-2xl` | `24px` |  |
| `--font-size-3xl` | `32px` |  |
| `--font-size-4xl` | `48px` |  |
| `--font-size-5xl` | `60px` |  |
| `--font-size-6xl` | `72px` |  |

### Font Weights

| Token | Weight |
| --- | --- |
| `--font-weight-regular` | `400` |
| `--font-weight-medium` | `500` |
| `--font-weight-bold` | `700` |

### Line Heights

| Token | Value |
| --- | --- |
| `--line-height-tight` | `11.2px` |
| `--line-height-snug` | `16.8px` |
| `--line-height-normal` | `19.6px` |
| `--line-height-relaxed` | `21px` |
| `--line-height-loose` | `22.4px` |
| `--line-height-lh-6` | `24px` |
| `--line-height-lh-7` | `25.2px` |
| `--line-height-lh-8` | `31.2px` |
| `--line-height-lh-9` | `38.4px` |
| `--line-height-lh-10` | `57.6px` |
| `--line-height-lh-11` | `60px` |
| `--line-height-lh-12` | `72px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `-1.44px` |
| `--letter-spacing-normal` | `-1.2px` |
| `--letter-spacing-wide` | `-0.48px` |
| `--letter-spacing-wider` | `-0.32px` |
| `--letter-spacing-widest` | `0.16px` |
| `--letter-spacing-ls-6` | `0.28px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `2px` | ×7 |
| `--space-2` | `4px` | ×42 |
| `--space-3` | `6px` | ×7 |
| `--space-4` | `8px` | ×68 |
| `--space-5` | `10px` | ×19 |
| `--space-6` | `12px` | ×59 |
| `--space-8` | `16px` | ×132 |
| `--space-10` | `20px` | ×22 |
| `--space-12` | `22px` | ×4 |
| `--space-16` | `24px` | ×75 |
| `--space-20` | `28px` | ×4 |
| `--space-24` | `32px` | ×35 |
| `--space-32` | `36px` | ×12 |
| `--space-40` | `40px` | ×164 |
| `--space-48` | `56px` | ×2 |
| `--space-64` | `60px` | ×2 |
| `--space-80` | `64px` | ×1 |
| `--space-96` | `80px` | ×15 |
| `--space-128` | `96px` | ×1 |
| `--space-160` | `128px` | ×2 |
| `--space-192` | `144px` | ×4 |
| `--space-256` | `160px` | ×3 |
| `--space-23` | `176px` | ×3 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `1px` | ×55 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `0px 2px 2px 0px` | ×2 |
| `--radius-md` | `0px 0px 22px 22px` | ×7 |
| `--radius-lg` | `2px` | ×2 |
| `--radius-xl` | `2px 0px 0px 2px` | ×2 |
| `--radius-2xl` | `4px` | ×97 |
| `--radius-full` | `6px` | ×2 |
| `--radius-r7` | `8px` | ×14 |
| `--radius-r8` | `12px` | ×3 |
| `--radius-r9` | `16px` | ×6 |
| `--radius-r10` | `20px` | ×4 |
| `--radius-r11` | `22px` | ×31 |
| `--radius-r12` | `22px 22px 0px 0px` | ×3 |
| `--radius-r13` | `32px` | ×1 |
| `--radius-r14` | `9999px` | ×37 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgba(172, 171, 171, 0.3) 0px -1px 10px 0px` | ×1 |
| `--shadow-md` | `rgba(0, 0, 0, 0.3) 0px 32px 68px 0px` | ×1 |
| `--shadow-lg` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 2px 2px 0px` | ×1 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.15s` | ×93 |
| `--duration-fast` | `0.2s` | ×2 |
| `--duration-normal` | `0.3s` | ×236 |
| `--duration-slow` | `0.5s` | ×293 |
| `--duration-slower` | `0.7s` | ×20 |
| `--duration-duration-6` | `0.8s` | ×4 |

### Easing Functions

| Token | Value | Usage |
| --- | --- | --- |
| `--easing-ease-in-out` | `ease-in-out` | ×3 |

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `-10` |
| `--z-2` | `1` |
| `--z-3` | `10` |
| `--z-4` | `20` |
| `--z-5` | `99` |
| `--z-6` | `100` |
| `--z-7` | `101` |
| `--z-8` | `102` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `336px` |
| `--breakpoint-sm` | `352px` |
| `--breakpoint-md` | `410px` |
| `--breakpoint-lg` | `425px` |
| `--breakpoint-xl` | `440px` |
| `--breakpoint-2xl` | `460px` |
| `--breakpoint-3xl` | `480px` |
| `--breakpoint-bp-8` | `510px` |
| `--breakpoint-bp-9` | `540px` |
| `--breakpoint-bp-10` | `550px` |
| `--breakpoint-bp-11` | `576px` |
| `--breakpoint-bp-12` | `640px` |
| `--breakpoint-bp-13` | `660px` |
| `--breakpoint-bp-14` | `767px` |
| `--breakpoint-bp-15` | `768px` |
| `--breakpoint-bp-16` | `845px` |
| `--breakpoint-bp-17` | `918px` |
| `--breakpoint-bp-18` | `919px` |
| `--breakpoint-bp-19` | `1023px` |
| `--breakpoint-bp-20` | `1024px` |
| `--breakpoint-bp-21` | `1279px` |
| `--breakpoint-bp-22` | `1280px` |
| `--breakpoint-bp-23` | `1440px` |
| `--breakpoint-bp-24` | `1536px` |
| `--breakpoint-bp-25` | `1600px` |
| `--breakpoint-bp-26` | `2560px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-1` | `0.01` | ×1 |
| `--opacity-2` | `0.02` | ×1 |
| `--opacity-20` | `0.2` | ×4 |
| `--opacity-40` | `0.4` | ×1 |
| `--opacity-50` | `0.5` | ×2 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-dark-gray` | `--color-black` | 1.3:1 | Fail |
| `--color-dark-gray` | `--color-white` | 16.1:1 | AAA |
| `--color-dark-gray` | `--color-dark-gray-2` | 1.11:1 | Fail |
| `--color-dark-gray` | `--color-light-gray-2` | 14.38:1 | AAA |
| `--color-dark-gray` | `--color-red` | 6.16:1 | AA |
| `--color-white-2` | `--color-black` | 20.12:1 | AAA |
| `--color-white-2` | `--color-white` | 1.04:1 | Fail |
| `--color-white-2` | `--color-dark-gray-2` | 17.11:1 | AAA |
| `--color-white-2` | `--color-light-gray-2` | 1.07:1 | Fail |
| `--color-white-2` | `--color-red` | 2.5:1 | Fail |
| `--color-blue` | `--color-black` | 4.67:1 | AA |
| `--color-blue` | `--color-white` | 4.5:1 | AA |
| `--color-blue` | `--color-dark-gray-2` | 3.97:1 | AA Large |
| `--color-blue` | `--color-light-gray-2` | 4.02:1 | AA Large |
| `--color-blue` | `--color-red` | 1.72:1 | Fail |
| `--color-dark-gray-8` | `--color-black` | 3.39:1 | AA Large |
| `--color-dark-gray-8` | `--color-white` | 6.19:1 | AA |
| `--color-dark-gray-8` | `--color-dark-gray-2` | 2.88:1 | Fail |
| `--color-dark-gray-8` | `--color-light-gray-2` | 5.53:1 | AA |
| `--color-dark-gray-8` | `--color-red` | 2.37:1 | Fail |
| `--color-mid-gray-2` | `--color-black` | 8.42:1 | AAA |
| `--color-mid-gray-2` | `--color-white` | 2.49:1 | Fail |
| `--color-mid-gray-2` | `--color-dark-gray-2` | 7.17:1 | AAA |
| `--color-mid-gray-2` | `--color-light-gray-2` | 2.23:1 | Fail |
| `--color-mid-gray-2` | `--color-red` | 1.05:1 | Fail |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--cellHeight` | `calc(100% + 2px)` |
| `--cellWidth` | `calc(100% + 2px)` |
| `--volcanic` | `#212121` |
| `--marble` | `#fafafa` |
| `--green` | `#39594d` |
| `--coral` | `#ff7759` |
| `--coral-light` | `rgb(255 173 155)` |
| `--z-index` | `99` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — Enterprise AI: Private, Secure, Customizable | Cohere
 * Source: https://cohere.com/
 * Generated: 15/04/2026, 00:24:23
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-light-gray: #E5E7EB; /* hsl(220, 13%, 91%) · border */
  --color-black: #000000; /* hsl(0, 0%, 0%) · background */
  --color-dark-gray: #212121; /* hsl(0, 0%, 13%) · text */
  --color-white: #FFFFFF; /* hsl(0, 0%, 100%) · background */
  --color-white-2: #FAFAFA; /* hsl(0, 0%, 98%) · text */
  --color-dark-gray-2: #17171C; /* hsl(240, 10%, 10%) · background */
  --color-dark-gray-3: #212129; /* hsl(240, 11%, 15%) · fill */
  --color-light-gray-2: #F2F2F2; /* hsl(0, 0%, 95%) · background */
  --color-dark-gray-4: #17171B; /* hsl(240, 8%, 10%) · fill */
  --color-blue: #75758A; /* hsl(240, 8%, 50%) · text */
  --color-red: #FF7759; /* hsl(11, 100%, 67%) · background */
  --color-dark-gray-5: #2E2E37; /* hsl(240, 9%, 20%) · other */
  --color-blue-2: #4C6EE6; /* hsl(227, 75%, 60%) · background */
  --color-light-purple: #D18EE2; /* hsl(288, 59%, 72%) · background */
  --color-blue-3: #7670C5; /* hsl(244, 42%, 61%) · gradient */
  --color-mid-gray: #93939E; /* hsl(240, 5%, 60%) · fill */
  --color-light-gray-3: #D9D9DD; /* hsl(240, 6%, 86%) · border */
  --color-dark-gray-6: rgba(33, 33, 33, 0.4); /* hsl(0, 0%, 13%) · gradient */
  --color-dark-gray-7: rgba(33, 33, 33, 0.2); /* hsl(0, 0%, 14%) · gradient */
  --color-light-pink: #F0DFF3; /* hsl(291, 45%, 91%) · background */
  --color-dark-gray-8: #616161; /* hsl(0, 0%, 38%) · text */
  --color-light-gray-4: #F0EEE9; /* hsl(43, 19%, 93%) · background */
  --color-mid-gray-2: #A4A4A4; /* hsl(0, 0%, 64%) · text */
  --color-mid-gray-3: #93939F; /* hsl(240, 6%, 60%) · text */
  --color-mid-gray-4: #808080; /* hsl(0, 0%, 50%) · fill */
  --color-dark-green: #00AA28; /* hsl(134, 100%, 33%) · fill */
  --color-dark-blue: #152455; /* hsl(226, 60%, 21%) · gradient */
  --color-dark-gray-9: #2E2E2E; /* hsl(0, 0%, 18%) · background */
  --color-light-gray-5: #BDBDBD; /* hsl(0, 0%, 74%) · text */
  --color-mid-gray-5: rgba(172, 171, 171, 0.3); /* hsl(0, 0%, 67%) · shadow */
  --color-mid-gray-6: #8E8E90; /* hsl(240, 1%, 56%) · fill */
  --color-blue-4: #0066D9; /* hsl(212, 100%, 43%) · fill */
  --color-dark-green-2: #00AB46; /* hsl(145, 100%, 34%) · fill */
  --color-red-2: #E94234; /* hsl(5, 80%, 56%) · fill */
  --color-dark-green-3: #00822D; /* hsl(141, 100%, 25%) · fill */
  --color-blue-5: #2583FB; /* hsl(214, 96%, 56%) · fill */
  --color-orange: #FFB900; /* hsl(44, 100%, 50%) · fill */
  --color-cyan: #00A1DF; /* hsl(197, 100%, 44%) · fill */
  --color-purple: #9B60AA; /* hsl(288, 30%, 52%) · background */

  /* ── Core: Typography ── */
  --font-size-2xs: 0px;
  --font-size-xs: 8px;
  --font-size-sm: 12px;
  --font-size-base: 14px;
  --font-size-lg: 16px;
  --font-size-xl: 18px;
  --font-size-2xl: 24px;
  --font-size-3xl: 32px;
  --font-size-4xl: 48px;
  --font-size-5xl: 60px;
  --font-size-6xl: 72px;
  --font-family-base: InterRegular;
  --font-family-2: Unica77 Cohere Web;
  --font-family-3: CohereMono;
  --font-family-4: CohereText;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --line-height-tight: 11.2px;
  --line-height-snug: 16.8px;
  --line-height-normal: 19.6px;
  --line-height-relaxed: 21px;
  --line-height-loose: 22.4px;
  --line-height-lh-6: 24px;
  --line-height-lh-7: 25.2px;
  --line-height-lh-8: 31.2px;
  --line-height-lh-9: 38.4px;
  --line-height-lh-10: 57.6px;
  --line-height-lh-11: 60px;
  --line-height-lh-12: 72px;
  --letter-spacing-tight: -1.44px;
  --letter-spacing-normal: -1.2px;
  --letter-spacing-wide: -0.48px;
  --letter-spacing-wider: -0.32px;
  --letter-spacing-widest: 0.16px;
  --letter-spacing-ls-6: 0.28px;

  /* ── Layout: Spacing ── */
  --space-1: 2px;
  --space-2: 4px;
  --space-3: 6px;
  --space-4: 8px;
  --space-5: 10px;
  --space-6: 12px;
  --space-8: 16px;
  --space-10: 20px;
  --space-12: 22px;
  --space-16: 24px;
  --space-20: 28px;
  --space-24: 32px;
  --space-32: 36px;
  --space-40: 40px;
  --space-48: 56px;
  --space-64: 60px;
  --space-80: 64px;
  --space-96: 80px;
  --space-128: 96px;
  --space-160: 128px;
  --space-192: 144px;
  --space-256: 160px;
  --space-23: 176px;

  /* ── Borders ── */
  --border-width-hairline: 1px;
  --radius-sm: 0px 2px 2px 0px;
  --radius-md: 0px 0px 22px 22px;
  --radius-lg: 2px;
  --radius-xl: 2px 0px 0px 2px;
  --radius-2xl: 4px;
  --radius-full: 6px;
  --radius-r7: 8px;
  --radius-r8: 12px;
  --radius-r9: 16px;
  --radius-r10: 20px;
  --radius-r11: 22px;
  --radius-r12: 22px 22px 0px 0px;
  --radius-r13: 32px;
  --radius-r14: 9999px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgba(172, 171, 171, 0.3) 0px -1px 10px 0px;
  --shadow-md: rgba(0, 0, 0, 0.3) 0px 32px 68px 0px;
  --shadow-lg: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 2px 2px 0px;

  /* ── Motion ── */
  --duration-instant: 0.15s;
  --duration-fast: 0.2s;
  --duration-normal: 0.3s;
  --duration-slow: 0.5s;
  --duration-slower: 0.7s;
  --duration-duration-6: 0.8s;
  --easing-ease-in-out: ease-in-out;

  /* ── Layout: Z-Index ── */
  --z-1: -10;
  --z-2: 1;
  --z-3: 10;
  --z-4: 20;
  --z-5: 99;
  --z-6: 100;
  --z-7: 101;
  --z-8: 102;

  /* ── Breakpoints ── */
  --breakpoint-xs: 336px;
  --breakpoint-sm: 352px;
  --breakpoint-md: 410px;
  --breakpoint-lg: 425px;
  --breakpoint-xl: 440px;
  --breakpoint-2xl: 460px;
  --breakpoint-3xl: 480px;
  --breakpoint-bp-8: 510px;
  --breakpoint-bp-9: 540px;
  --breakpoint-bp-10: 550px;
  --breakpoint-bp-11: 576px;
  --breakpoint-bp-12: 640px;
  --breakpoint-bp-13: 660px;
  --breakpoint-bp-14: 767px;
  --breakpoint-bp-15: 768px;
  --breakpoint-bp-16: 845px;
  --breakpoint-bp-17: 918px;
  --breakpoint-bp-18: 919px;
  --breakpoint-bp-19: 1023px;
  --breakpoint-bp-20: 1024px;
  --breakpoint-bp-21: 1279px;
  --breakpoint-bp-22: 1280px;
  --breakpoint-bp-23: 1440px;
  --breakpoint-bp-24: 1536px;
  --breakpoint-bp-25: 1600px;
  --breakpoint-bp-26: 2560px;

  /* ── Opacity ── */
  --opacity-1: 0.01;
  --opacity-2: 0.02;
  --opacity-20: 0.2;
  --opacity-40: 0.4;
  --opacity-50: 0.5;
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://cohere.com/",
    "title": "Enterprise AI: Private, Secure, Customizable | Cohere",
    "generatedAt": "2026-04-14T18:54:23.051Z"
  },
  "core": {
    "color": {
      "light-gray": {
        "$value": "#E5E7EB",
        "$type": "color",
        "$description": "border · ×4322"
      },
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "background · ×4298"
      },
      "dark-gray": {
        "$value": "#212121",
        "$type": "color",
        "$description": "text · ×2986"
      },
      "white": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×688"
      },
      "white-2": {
        "$value": "#FAFAFA",
        "$type": "color",
        "$description": "text · ×234"
      },
      "dark-gray-2": {
        "$value": "#17171C",
        "$type": "color",
        "$description": "background · ×104"
      },
      "dark-gray-3": {
        "$value": "#212129",
        "$type": "color",
        "$description": "fill · ×104"
      },
      "light-gray-2": {
        "$value": "#F2F2F2",
        "$type": "color",
        "$description": "background · ×76"
      },
      "dark-gray-4": {
        "$value": "#17171B",
        "$type": "color",
        "$description": "fill · ×64"
      },
      "blue": {
        "$value": "#75758A",
        "$type": "color",
        "$description": "text · ×40"
      },
      "red": {
        "$value": "#FF7759",
        "$type": "color",
        "$description": "background · ×26"
      },
      "dark-gray-5": {
        "$value": "#2E2E37",
        "$type": "color",
        "$description": "other · ×22"
      },
      "blue-2": {
        "$value": "#4C6EE6",
        "$type": "color",
        "$description": "background · ×15"
      },
      "light-purple": {
        "$value": "#D18EE2",
        "$type": "color",
        "$description": "background · ×12"
      },
      "blue-3": {
        "$value": "#7670C5",
        "$type": "color",
        "$description": "gradient · ×11"
      },
      "mid-gray": {
        "$value": "#93939E",
        "$type": "color",
        "$description": "fill · ×10"
      },
      "light-gray-3": {
        "$value": "#D9D9DD",
        "$type": "color",
        "$description": "border · ×9"
      },
      "dark-gray-6": {
        "$value": "rgba(33, 33, 33, 0.4)",
        "$type": "color",
        "$description": "gradient · ×7"
      },
      "dark-gray-7": {
        "$value": "rgba(33, 33, 33, 0.2)",
        "$type": "color",
        "$description": "gradient · ×7"
      },
      "light-pink": {
        "$value": "#F0DFF3",
        "$type": "color",
        "$description": "background · ×6"
      },
      "dark-gray-8": {
        "$value": "#616161",
        "$type": "color",
        "$description": "text · ×6"
      },
      "light-gray-4": {
        "$value": "#F0EEE9",
        "$type": "color",
        "$description": "background · ×6"
      },
      "mid-gray-2": {
        "$value": "#A4A4A4",
        "$type": "color",
        "$description": "text · ×5"
      },
      "mid-gray-3": {
        "$value": "#93939F",
        "$type": "color",
        "$description": "text · ×5"
      },
      "mid-gray-4": {
        "$value": "#808080",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "dark-green": {
        "$value": "#00AA28",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-blue": {
        "$value": "#152455",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "dark-gray-9": {
        "$value": "#2E2E2E",
        "$type": "color",
        "$description": "background · ×2"
      },
      "light-gray-5": {
        "$value": "#BDBDBD",
        "$type": "color",
        "$description": "text · ×2"
      },
      "mid-gray-5": {
        "$value": "rgba(172, 171, 171, 0.3)",
        "$type": "color",
        "$description": "shadow · ×1"
      },
      "mid-gray-6": {
        "$value": "#8E8E90",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "blue-4": {
        "$value": "#0066D9",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-2": {
        "$value": "#00AB46",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-2": {
        "$value": "#E94234",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-3": {
        "$value": "#00822D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "blue-5": {
        "$value": "#2583FB",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange": {
        "$value": "#FFB900",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "cyan": {
        "$value": "#00A1DF",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "purple": {
        "$value": "#9B60AA",
        "$type": "color",
        "$description": "background · ×1"
      }
    },
    "fontSize": {
      "font-size-2xs": {
        "$value": "0px",
        "$type": "dimension"
      },
      "font-size-xs": {
        "$value": "8px",
        "$type": "dimension"
      },
      "font-size-sm": {
        "$value": "12px",
        "$type": "dimension"
      },
      "font-size-base": {
        "$value": "14px",
        "$type": "dimension"
      },
      "font-size-lg": {
        "$value": "16px",
        "$type": "dimension"
      },
      "font-size-xl": {
        "$value": "18px",
        "$type": "dimension"
      },
      "font-size-2xl": {
        "$value": "24px",
        "$type": "dimension"
      },
      "font-size-3xl": {
        "$value": "32px",
        "$type": "dimension"
      },
      "font-size-4xl": {
        "$value": "48px",
        "$type": "dimension"
      },
      "font-size-5xl": {
        "$value": "60px",
        "$type": "dimension"
      },
      "font-size-6xl": {
        "$value": "72px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "InterRegular",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "Unica77 Cohere Web",
        "$type": "fontFamily"
      },
      "font-family-3": {
        "$value": "CohereMono",
        "$type": "fontFamily"
      },
      "font-family-4": {
        "$value": "CohereText",
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
        "$value": "11.2px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "16.8px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "19.6px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "21px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "22.4px",
        "$type": "dimension"
      },
      "line-height-lh-6": {
        "$value": "24px",
        "$type": "dimension"
      },
      "line-height-lh-7": {
        "$value": "25.2px",
        "$type": "dimension"
      },
      "line-height-lh-8": {
        "$value": "31.2px",
        "$type": "dimension"
      },
      "line-height-lh-9": {
        "$value": "38.4px",
        "$type": "dimension"
      },
      "line-height-lh-10": {
        "$value": "57.6px",
        "$type": "dimension"
      },
      "line-height-lh-11": {
        "$value": "60px",
        "$type": "dimension"
      },
      "line-height-lh-12": {
        "$value": "72px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "-1.44px",
        "$type": "dimension"
      },
      "letter-spacing-normal": {
        "$value": "-1.2px",
        "$type": "dimension"
      },
      "letter-spacing-wide": {
        "$value": "-0.48px",
        "$type": "dimension"
      },
      "letter-spacing-wider": {
        "$value": "-0.32px",
        "$type": "dimension"
      },
      "letter-spacing-widest": {
        "$value": "0.16px",
        "$type": "dimension"
      },
      "letter-spacing-ls-6": {
        "$value": "0.28px",
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
        "$value": "6px",
        "$type": "dimension"
      },
      "space-4": {
        "$value": "8px",
        "$type": "dimension"
      },
      "space-5": {
        "$value": "10px",
        "$type": "dimension"
      },
      "space-6": {
        "$value": "12px",
        "$type": "dimension"
      },
      "space-8": {
        "$value": "16px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "20px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "22px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "24px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "28px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "32px",
        "$type": "dimension"
      },
      "space-32": {
        "$value": "36px",
        "$type": "dimension"
      },
      "space-40": {
        "$value": "40px",
        "$type": "dimension"
      },
      "space-48": {
        "$value": "56px",
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
        "$value": "96px",
        "$type": "dimension"
      },
      "space-160": {
        "$value": "128px",
        "$type": "dimension"
      },
      "space-192": {
        "$value": "144px",
        "$type": "dimension"
      },
      "space-256": {
        "$value": "160px",
        "$type": "dimension"
      },
      "space-23": {
        "$value": "176px",
        "$type": "dimension"
      }
    },
    "zIndex": {
      "z-1": {
        "$value": "-10",
        "$type": "number"
      },
      "z-2": {
        "$value": "1",
        "$type": "number"
      },
      "z-3": {
        "$value": "10",
        "$type": "number"
      },
      "z-4": {
        "$value": "20",
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
        "$value": "101",
        "$type": "number"
      },
      "z-8": {
        "$value": "102",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "336px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "352px",
        "$type": "dimension"
      },
      "breakpoint-md": {
        "$value": "410px",
        "$type": "dimension"
      },
      "breakpoint-lg": {
        "$value": "425px",
        "$type": "dimension"
      },
      "breakpoint-xl": {
        "$value": "440px",
        "$type": "dimension"
      },
      "breakpoint-2xl": {
        "$value": "460px",
        "$type": "dimension"
      },
      "breakpoint-3xl": {
        "$value": "480px",
        "$type": "dimension"
      },
      "breakpoint-bp-8": {
        "$value": "510px",
        "$type": "dimension"
      },
      "breakpoint-bp-9": {
        "$value": "540px",
        "$type": "dimension"
      },
      "breakpoint-bp-10": {
        "$value": "550px",
        "$type": "dimension"
      },
      "breakpoint-bp-11": {
        "$value": "576px",
        "$type": "dimension"
      },
      "breakpoint-bp-12": {
        "$value": "640px",
        "$type": "dimension"
      },
      "breakpoint-bp-13": {
        "$value": "660px",
        "$type": "dimension"
      },
      "breakpoint-bp-14": {
        "$value": "767px",
        "$type": "dimension"
      },
      "breakpoint-bp-15": {
        "$value": "768px",
        "$type": "dimension"
      },
      "breakpoint-bp-16": {
        "$value": "845px",
        "$type": "dimension"
      },
      "breakpoint-bp-17": {
        "$value": "918px",
        "$type": "dimension"
      },
      "breakpoint-bp-18": {
        "$value": "919px",
        "$type": "dimension"
      },
      "breakpoint-bp-19": {
        "$value": "1023px",
        "$type": "dimension"
      },
      "breakpoint-bp-20": {
        "$value": "1024px",
        "$type": "dimension"
      },
      "breakpoint-bp-21": {
        "$value": "1279px",
        "$type": "dimension"
      },
      "breakpoint-bp-22": {
        "$value": "1280px",
        "$type": "dimension"
      },
      "breakpoint-bp-23": {
        "$value": "1440px",
        "$type": "dimension"
      },
      "breakpoint-bp-24": {
        "$value": "1536px",
        "$type": "dimension"
      },
      "breakpoint-bp-25": {
        "$value": "1600px",
        "$type": "dimension"
      },
      "breakpoint-bp-26": {
        "$value": "2560px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
        "$value": "0px 2px 2px 0px",
        "$type": "dimension"
      },
      "radius-md": {
        "$value": "0px 0px 22px 22px",
        "$type": "dimension"
      },
      "radius-lg": {
        "$value": "2px",
        "$type": "dimension"
      },
      "radius-xl": {
        "$value": "2px 0px 0px 2px",
        "$type": "dimension"
      },
      "radius-2xl": {
        "$value": "4px",
        "$type": "dimension"
      },
      "radius-full": {
        "$value": "6px",
        "$type": "dimension"
      },
      "radius-r7": {
        "$value": "8px",
        "$type": "dimension"
      },
      "radius-r8": {
        "$value": "12px",
        "$type": "dimension"
      },
      "radius-r9": {
        "$value": "16px",
        "$type": "dimension"
      },
      "radius-r10": {
        "$value": "20px",
        "$type": "dimension"
      },
      "radius-r11": {
        "$value": "22px",
        "$type": "dimension"
      },
      "radius-r12": {
        "$value": "22px 22px 0px 0px",
        "$type": "dimension"
      },
      "radius-r13": {
        "$value": "32px",
        "$type": "dimension"
      },
      "radius-r14": {
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
        "$value": "rgba(172, 171, 171, 0.3) 0px -1px 10px 0px",
        "$type": "shadow"
      },
      "shadow-md": {
        "$value": "rgba(0, 0, 0, 0.3) 0px 32px 68px 0px",
        "$type": "shadow"
      },
      "shadow-lg": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 2px 2px 0px",
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
      },
      "duration-slower": {
        "$value": "0.7s",
        "$type": "duration"
      },
      "duration-duration-6": {
        "$value": "0.8s",
        "$type": "duration"
      }
    },
    "easing": {
      "easing-ease-in-out": {
        "$value": "ease-in-out",
        "$type": "cubicBezier"
      }
    }
  },
  "opacity": {
    "opacity-1": {
      "$value": 0.01,
      "$type": "number"
    },
    "opacity-2": {
      "$value": 0.02,
      "$type": "number"
    },
    "opacity-20": {
      "$value": 0.2,
      "$type": "number"
    },
    "opacity-40": {
      "$value": 0.4,
      "$type": "number"
    },
    "opacity-50": {
      "$value": 0.5,
      "$type": "number"
    }
  }
}
```
