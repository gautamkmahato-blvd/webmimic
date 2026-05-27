# Official Ferrari website — Design System

**Source:** https://www.ferrari.com/en-IN  
**Generated:** 15/04/2026, 00:27:36  
**Extracted:** 30 colors · 44 type tokens · 57 spacing steps · 22 breakpoints · 10 motion tokens

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
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×3371 |
| `--color-dark-gray` | `#181818` | hsl(0, 0%, 9%) | ×1238 |
| `--color-white` | `#FFFFFF` | hsl(0, 0%, 100%) | ×809 |
| `--color-dark-gray-2` | `#666666` | hsl(0, 0%, 40%) | ×54 |
| `--color-light-gray` | `#DDDDDD` | hsl(0, 0%, 87%) | ×42 |
| `--color-dark-gray-3` | `#555555` | hsl(0, 0%, 33%) | ×30 |
| `--color-dark-gray-4` | `#333333` | hsl(0, 0%, 20%) | ×21 |
| `--color-dark-gray-5` | `#222222` | hsl(0, 0%, 13%) | ×9 |
| `--color-dark-blue` | `#27455C` | hsl(206, 40%, 26%) | ×6 |
| `--color-blue` | `#3860BE` | hsl(222, 54%, 48%) | ×4 |
| `--color-red-2` | `#EB2323` | hsl(0, 83%, 53%) | ×3 |
| `--color-mid-gray-3` | `#ABABAB` | hsl(0, 0%, 67%) | ×3 |
| `--color-green` | `#468254` | hsl(134, 30%, 39%) | ×2 |
| `--color-dark-gray-7` | `#303030` | hsl(0, 0%, 19%) | ×1 |
| `--color-white-2` | `#F9FFFA` | hsl(130, 100%, 99%) | ×1 |
| `--color-white-3` | `#F4F4F4` | hsl(0, 0%, 96%) | ×1 |
| `--color-blue-2` | `#146FF8` | hsl(216, 94%, 53%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-mid-gray` | `#999999` | hsl(0, 0%, 60%) | ×31 |
| `--color-mid-gray-2` | `#8F8F8F` | hsl(0, 0%, 56%) | ×21 |
| `--color-light-gray-3` | `#E4E4E4` | hsl(0, 0%, 89%) | ×18 |
| `--color-red` | `#FF0000` | hsl(0, 100%, 50%) | ×12 |
| `--color-dark-gray-6` | `#656565` | hsl(0, 0%, 40%) | ×5 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray-2` | `#CCCCCC` | hsl(0, 0%, 80%) | ×27 |
| `--color-mid-gray-4` | `#A0A0A0` | hsl(0, 0%, 63%) | ×3 |
| `--color-cyan` | `#32AE88` | hsl(162, 55%, 44%) | ×2 |
| `--color-light-gray-5` | `#D8D8D8` | hsl(0, 0%, 85%) | ×1 |
| `--color-light-gray-6` | `#D1D1D1` | hsl(0, 0%, 82%) | ×1 |
| `--color-light-gray-7` | `#BBBBBB` | hsl(0, 0%, 73%) | ×1 |

### Shadow Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray-4` | `#C7C5C7` | hsl(300, 2%, 78%) | ×2 |

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-blue-2` | `#2E3644` | hsl(218, 19%, 22%) | ×1 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `Times` |
| `--font-family-2` | `FerrariSans` |
| `--font-family-3` | `Body-Font` |
| `--font-family-4` | `Arial` |
| `--font-family-5` | `Helvetica` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `7px` |  |
| `--font-size-xs` | `9px` |  |
| `--font-size-sm` | `10px` |  |
| `--font-size-base` | `11px` |  |
| `--font-size-lg` | `12px` |  |
| `--font-size-xl` | `13px` |  |
| `--font-size-2xl` | `13.008px` |  |
| `--font-size-3xl` | `13.3333px` |  |
| `--font-size-4xl` | `13.6px` |  |
| `--font-size-5xl` | `14px` |  |
| `--font-size-6xl` | `14.08px` |  |
| `--font-size-14px` | `14.4px` |  |
| `--font-size-16px` | `16px` |  |
| `--font-size-18px` | `18px` |  |
| `--font-size-21px` | `21.3333px` |  |
| `--font-size-26px` | `26px` |  |

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
| `--line-height-tight` | `12px` |
| `--line-height-snug` | `13.5px` |
| `--line-height-normal` | `15.24px` |
| `--line-height-relaxed` | `15.6096px` |
| `--line-height-loose` | `17.6px` |
| `--line-height-lh-6` | `19.5px` |
| `--line-height-lh-7` | `20.8px` |
| `--line-height-lh-8` | `21.6px` |
| `--line-height-lh-9` | `24px` |
| `--line-height-lh-10` | `25px` |
| `--line-height-lh-11` | `32px` |
| `--line-height-lh-12` | `34px` |
| `--line-height-lh-13` | `39px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `0.08px` |
| `--letter-spacing-normal` | `0.13008px` |
| `--letter-spacing-wide` | `0.195px` |
| `--letter-spacing-wider` | `0.96px` |
| `--letter-spacing-widest` | `1px` |
| `--letter-spacing-ls-6` | `1.28px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `0.0703125px` | ×2 |
| `--space-2` | `1px` | ×2 |
| `--space-3` | `3.53906px` | ×1 |
| `--space-4` | `3.54688px` | ×1 |
| `--space-5` | `5px` | ×10 |
| `--space-6` | `6px` | ×2 |
| `--space-8` | `6.15625px` | ×2 |
| `--space-10` | `8.30469px` | ×1 |
| `--space-12` | `8.3125px` | ×1 |
| `--space-16` | `10px` | ×168 |
| `--space-20` | `11.3906px` | ×2 |
| `--space-24` | `22.3906px` | ×2 |
| `--space-32` | `33.7656px` | ×1 |
| `--space-40` | `42.6797px` | ×1 |
| `--space-48` | `50.6328px` | ×1 |
| `--space-64` | `15.7266px` | ×1 |
| `--space-80` | `15.7344px` | ×1 |
| `--space-96` | `16px` | ×58 |
| `--space-128` | `17.6484px` | ×2 |
| `--space-160` | `18.7969px` | ×2 |
| `--space-192` | `20px` | ×50 |
| `--space-256` | `20.7266px` | ×2 |
| `--space-23` | `20.7891px` | ×2 |
| `--space-25` | `24px` | ×12 |
| `--space-26` | `25px` | ×2 |
| `--space-27` | `30px` | ×2 |
| `--space-28` | `32px` | ×6 |
| `--space-29` | `32.7031px` | ×1 |
| `--space-30` | `32.7109px` | ×1 |
| `--space-31` | `33.5781px` | ×2 |
| `--space-33` | `33.7734px` | ×1 |
| `--space-34` | `34.5391px` | ×2 |
| `--space-35` | `37.0547px` | ×1 |
| `--space-36` | `37.0625px` | ×1 |
| `--space-37` | `40px` | ×1 |
| `--space-38` | `40.8594px` | ×2 |
| `--space-39` | `42.6719px` | ×1 |
| `--space-41` | `43.7031px` | ×2 |
| `--space-42` | `47.5234px` | ×1 |
| `--space-43` | `47.5312px` | ×1 |
| `--space-44` | `48px` | ×1 |
| `--space-45` | `50px` | ×4 |
| `--space-46` | `50.5547px` | ×1 |
| `--space-47` | `50.5625px` | ×1 |
| `--space-49` | `50.6406px` | ×1 |
| `--space-50` | `50.8828px` | ×2 |
| `--space-51` | `51px` | ×1 |
| `--space-52` | `51.0078px` | ×1 |
| `--space-53` | `53.5156px` | ×1 |
| `--space-54` | `53.5234px` | ×1 |
| `--space-55` | `55.6328px` | ×2 |
| `--space-56` | `58.3047px` | ×2 |
| `--space-57` | `62.1328px` | ×2 |
| `--space-58` | `63.7891px` | ×1 |
| `--space-59` | `63.7969px` | ×1 |
| `--space-60` | `64.0234px` | ×2 |
| `--space-61` | `226.5px` | ×2 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `1px` | ×200 |
| `--border-width-thin` | `2px` | ×16 |
| `--border-width-base` | `6px` | ×9 |
| `--border-width-thick` | `12px` | ×4 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `1px` | ×6 |
| `--radius-md` | `2px` | ×17 |
| `--radius-lg` | `2.5px` | ×1 |
| `--radius-xl` | `3px` | ×2 |
| `--radius-2xl` | `8px` | ×12 |
| `--radius-full` | `17px` | ×1 |
| `--radius-r7` | `20px` | ×2 |
| `--radius-r8` | `50%` | ×4 |
| `--radius-r9` | `50px` | ×1 |
| `--radius-r10` | `100%` | ×1 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgb(153, 153, 153) 1px 1px 1px 0px` | ×18 |
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
| `--duration-fast` | `0.15s` | ×1 |
| `--duration-normal` | `0.2s` | ×31 |
| `--duration-slow` | `0.25s` | ×6 |
| `--duration-slower` | `0.3s` | ×20 |
| `--duration-duration-6` | `0.4s` | ×2 |
| `--duration-duration-7` | `0.5s` | ×16 |

### Easing Functions

| Token | Value | Usage |
| --- | --- | --- |
| `--easing-ease-out` | `ease-out` | ×15 |
| `--easing-linear` | `linear` | ×8 |
| `--easing-ease-in` | `ease-in` | ×2 |

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `-1` |
| `--z-2` | `1` |
| `--z-3` | `3` |
| `--z-4` | `20` |
| `--z-5` | `100` |
| `--z-6` | `200` |
| `--z-7` | `700` |
| `--z-8` | `750` |
| `--z-9` | `1000` |
| `--z-10` | `6000` |
| `--z-11` | `9999` |
| `--z-12` | `10000` |
| `--z-13` | `10100` |
| `--z-14` | `10101` |
| `--z-15` | `10102` |
| `--z-16` | `10103` |
| `--z-17` | `99999999` |
| `--z-18` | `2147483645` |
| `--z-19` | `2147483646` |
| `--z-20` | `2147483647` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `320px` |
| `--breakpoint-sm` | `375px` |
| `--breakpoint-md` | `400px` |
| `--breakpoint-lg` | `425px` |
| `--breakpoint-xl` | `426px` |
| `--breakpoint-2xl` | `428px` |
| `--breakpoint-3xl` | `520px` |
| `--breakpoint-bp-8` | `530px` |
| `--breakpoint-bp-9` | `550px` |
| `--breakpoint-bp-10` | `600px` |
| `--breakpoint-bp-11` | `601px` |
| `--breakpoint-bp-12` | `640px` |
| `--breakpoint-bp-13` | `711px` |
| `--breakpoint-bp-14` | `768px` |
| `--breakpoint-bp-15` | `812px` |
| `--breakpoint-bp-16` | `823px` |
| `--breakpoint-bp-17` | `896px` |
| `--breakpoint-bp-18` | `961px` |
| `--breakpoint-bp-19` | `1200px` |
| `--breakpoint-bp-20` | `1281px` |
| `--breakpoint-bp-21` | `1601px` |
| `--breakpoint-bp-22` | `1920px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-70` | `0.7` | ×9 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-mid-gray` | `--color-black` | 7.37:1 | AAA |
| `--color-mid-gray` | `--color-dark-gray` | 6.23:1 | AA |
| `--color-mid-gray` | `--color-white` | 2.85:1 | Fail |
| `--color-mid-gray` | `--color-dark-gray-2` | 2.02:1 | Fail |
| `--color-mid-gray` | `--color-light-gray` | 2.1:1 | Fail |
| `--color-mid-gray-2` | `--color-black` | 6.49:1 | AA |
| `--color-mid-gray-2` | `--color-dark-gray` | 5.49:1 | AA |
| `--color-mid-gray-2` | `--color-white` | 3.23:1 | AA Large |
| `--color-mid-gray-2` | `--color-dark-gray-2` | 1.78:1 | Fail |
| `--color-mid-gray-2` | `--color-light-gray` | 2.38:1 | Fail |
| `--color-light-gray-3` | `--color-black` | 16.52:1 | AAA |
| `--color-light-gray-3` | `--color-dark-gray` | 13.97:1 | AAA |
| `--color-light-gray-3` | `--color-white` | 1.27:1 | Fail |
| `--color-light-gray-3` | `--color-dark-gray-2` | 4.52:1 | AA |
| `--color-light-gray-3` | `--color-light-gray` | 1.07:1 | Fail |
| `--color-red` | `--color-black` | 5.25:1 | AA |
| `--color-red` | `--color-dark-gray` | 4.44:1 | AA Large |
| `--color-red` | `--color-white` | 4:1 | AA Large |
| `--color-red` | `--color-dark-gray-2` | 1.44:1 | Fail |
| `--color-red` | `--color-light-gray` | 2.94:1 | Fail |
| `--color-dark-gray-6` | `--color-black` | 3.6:1 | AA Large |
| `--color-dark-gray-6` | `--color-dark-gray` | 3.05:1 | AA Large |
| `--color-dark-gray-6` | `--color-white` | 5.83:1 | AA |
| `--color-dark-gray-6` | `--color-dark-gray-2` | 1.02:1 | Fail |
| `--color-dark-gray-6` | `--color-light-gray` | 4.29:1 | AA Large |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--f-color-global-white` | `#fff` |
| `--f-color-global-black` | `#181818` |
| `--f-color-global-white-rgb` | `255,255,255` |
| `--f-color-global-black-rgb` | `24,24,24` |
| `--f-color-black-90` | `#303030` |
| `--f-color-black-90-rgb` | `48,48,48` |
| `--f-color-black-60` | `#666` |
| `--f-color-black-55` | `#969696` |
| `--f-color-black-50` | `#8f8f8f` |
| `--f-color-black-20` | `#d2d2d2` |
| `--f-color-black-10` | `#f7f7f7` |
| `--f-color-black-10-rgb` | `247,247,247` |
| `--f-color-background-0` | `var(--f-color-global-white)` |
| `--f-color-background-0-rgb` | `var(--f-color-global-white-rgb)` |
| `--f-color-background-10` | `#ebebeb` |
| `--f-color-accent-100` | `#da291c` |
| `--f-color-accent-100-rgb` | `218,41,28` |
| `--f-color-accent-90` | `#b01e0a` |
| `--f-color-accent-80` | `#9d2211` |
| `--f-color-ui-100` | `var(--f-color-global-black)` |
| `--f-color-ui-100-rgb` | `var(--f-color-global-black-rgb)` |
| `--f-color-ui-90` | `var(--f-color-black-90)` |
| `--f-color-ui-90-rgb` | `var(--f-color-black-90-rgb)` |
| `--f-color-ui-60` | `var(--f-color-black-60)` |
| `--f-color-ui-50` | `var(--f-color-black-50)` |
| `--f-color-ui-20` | `var(--f-color-black-20)` |
| `--f-color-ui-10` | `var(--f-color-black-10)` |
| `--f-color-ui-10-rgb` | `var(--f-color-black-10-rgb)` |
| `--f-color-ui-0` | `var(--f-color-global-white)` |
| `--f-color-yellow-hypersail` | `#fff200` |
| `--f-color-yellow-hypersail-rgb` | `255,242,0` |
| `--f-color-yellow` | `#f6e500` |
| `--f-color-yellow-rgb` | `246,229,0` |
| `--f-color-focus` | `var(--f-color-yellow)` |
| `--f-color-accessible-info` | `#4c98b9` |
| `--f-color-accessible-success` | `#03904a` |
| `--f-color-accessible-warning` | `#f13a2c` |
| `--f-color-gradient-red` | `linear-gradient(180deg,#a00c01,#da291c 64%)` |
| `--f-color-gradient-dark-grey` | `linear-gradient(180deg,#3c3c3c,#030303 64%)` |
| `--f-color-gradient-highlight-light` | `linear-gradient(0deg,#cdcbcb,#cdcbcb),radial-gradient(56.76% 37.59% at 50% 0%,rgba(48,48,48,.6) 0%,rgba(48,48,48,6e-5) 100%)` |
| `--f-color-gradient-highlight-dark` | `linear-gradient(0deg,hsla(0,6%,93%,.4),hsla(0,6%,93%,.4)),radial-gradient(56.76% 37.59% at 50% 0%,hsla(0,0%,100%,.8) 0%,rgba(255,255,255,8e-5) 100%)` |
| `--f-color-gradient-shadow-dark` | `linear-gradient(90deg,#121212,#161616)` |
| `--f-color-gradient-shadow-light` | `linear-gradient(180deg,hsla(0,0%,9%,0),hsla(0,0%,9%,.85))` |
| `--f-color-gradient-to-background` | `linear-gradient(0deg,rgba(var(--f-color-background-0-rgb),1) 68%,rgba(var(--f-color-background-0-rgb),0))` |
| `--f-color-overlay` | `rgba(0,0,0,.3)` |
| `--f-color-overlay-darker` | `hsla(0,0%,7%,.8)` |
| `--f-shadow-small` | `0px 4px 8px 0px rgba(0,0,0,.1)` |
| `--f-ferrari-font` | `"FerrariSans"` |
| `--f-space-xxxs` | `4px` |
| `--f-space-xxs` | `8px` |
| `--f-space-xs` | `16px` |
| `--f-space-s` | `24px` |
| `--f-space-m` | `32px` |
| `--f-space-l` | `48px` |
| `--f-space-xl` | `64px` |
| `--f-space-xxl` | `96px` |
| `--f-space-super` | `128px` |
| `--f-radius-full` | `9999px` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — Official Ferrari website
 * Source: https://www.ferrari.com/en-IN
 * Generated: 15/04/2026, 00:27:36
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-black: #000000; /* hsl(0, 0%, 0%) · background */
  --color-dark-gray: #181818; /* hsl(0, 0%, 9%) · background */
  --color-white: #FFFFFF; /* hsl(0, 0%, 100%) · background */
  --color-dark-gray-2: #666666; /* hsl(0, 0%, 40%) · background */
  --color-light-gray: #DDDDDD; /* hsl(0, 0%, 87%) · background */
  --color-mid-gray: #999999; /* hsl(0, 0%, 60%) · text */
  --color-dark-gray-3: #555555; /* hsl(0, 0%, 33%) · background */
  --color-light-gray-2: #CCCCCC; /* hsl(0, 0%, 80%) · border */
  --color-dark-gray-4: #333333; /* hsl(0, 0%, 20%) · background */
  --color-mid-gray-2: #8F8F8F; /* hsl(0, 0%, 56%) · text */
  --color-light-gray-3: #E4E4E4; /* hsl(0, 0%, 89%) · text */
  --color-red: #FF0000; /* hsl(0, 100%, 50%) · text */
  --color-dark-gray-5: #222222; /* hsl(0, 0%, 13%) · background */
  --color-dark-blue: #27455C; /* hsl(206, 40%, 26%) · background */
  --color-dark-gray-6: #656565; /* hsl(0, 0%, 40%) · text */
  --color-blue: #3860BE; /* hsl(222, 54%, 48%) · background */
  --color-red-2: #EB2323; /* hsl(0, 83%, 53%) · background */
  --color-mid-gray-3: #ABABAB; /* hsl(0, 0%, 67%) · background */
  --color-mid-gray-4: #A0A0A0; /* hsl(0, 0%, 63%) · border */
  --color-cyan: #32AE88; /* hsl(162, 55%, 44%) · border */
  --color-green: #468254; /* hsl(134, 30%, 39%) · background */
  --color-light-gray-4: #C7C5C7; /* hsl(300, 2%, 78%) · shadow */
  --color-dark-gray-7: #303030; /* hsl(0, 0%, 19%) · background */
  --color-white-2: #F9FFFA; /* hsl(130, 100%, 99%) · background */
  --color-light-gray-5: #D8D8D8; /* hsl(0, 0%, 85%) · border */
  --color-light-gray-6: #D1D1D1; /* hsl(0, 0%, 82%) · border */
  --color-dark-blue-2: #2E3644; /* hsl(218, 19%, 22%) · fill */
  --color-light-gray-7: #BBBBBB; /* hsl(0, 0%, 73%) · border */
  --color-white-3: #F4F4F4; /* hsl(0, 0%, 96%) · background */
  --color-blue-2: #146FF8; /* hsl(216, 94%, 53%) · background */

  /* ── Core: Typography ── */
  --font-size-2xs: 7px;
  --font-size-xs: 9px;
  --font-size-sm: 10px;
  --font-size-base: 11px;
  --font-size-lg: 12px;
  --font-size-xl: 13px;
  --font-size-2xl: 13.008px;
  --font-size-3xl: 13.3333px;
  --font-size-4xl: 13.6px;
  --font-size-5xl: 14px;
  --font-size-6xl: 14.08px;
  --font-size-14px: 14.4px;
  --font-size-16px: 16px;
  --font-size-18px: 18px;
  --font-size-21px: 21.3333px;
  --font-size-26px: 26px;
  --font-family-base: Times;
  --font-family-2: FerrariSans;
  --font-family-3: Body-Font;
  --font-family-4: Arial;
  --font-family-5: Helvetica;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-tight: 12px;
  --line-height-snug: 13.5px;
  --line-height-normal: 15.24px;
  --line-height-relaxed: 15.6096px;
  --line-height-loose: 17.6px;
  --line-height-lh-6: 19.5px;
  --line-height-lh-7: 20.8px;
  --line-height-lh-8: 21.6px;
  --line-height-lh-9: 24px;
  --line-height-lh-10: 25px;
  --line-height-lh-11: 32px;
  --line-height-lh-12: 34px;
  --line-height-lh-13: 39px;
  --letter-spacing-tight: 0.08px;
  --letter-spacing-normal: 0.13008px;
  --letter-spacing-wide: 0.195px;
  --letter-spacing-wider: 0.96px;
  --letter-spacing-widest: 1px;
  --letter-spacing-ls-6: 1.28px;

  /* ── Layout: Spacing ── */
  --space-1: 0.0703125px;
  --space-2: 1px;
  --space-3: 3.53906px;
  --space-4: 3.54688px;
  --space-5: 5px;
  --space-6: 6px;
  --space-8: 6.15625px;
  --space-10: 8.30469px;
  --space-12: 8.3125px;
  --space-16: 10px;
  --space-20: 11.3906px;
  --space-24: 22.3906px;
  --space-32: 33.7656px;
  --space-40: 42.6797px;
  --space-48: 50.6328px;
  --space-64: 15.7266px;
  --space-80: 15.7344px;
  --space-96: 16px;
  --space-128: 17.6484px;
  --space-160: 18.7969px;
  --space-192: 20px;
  --space-256: 20.7266px;
  --space-23: 20.7891px;
  --space-25: 24px;
  --space-26: 25px;
  --space-27: 30px;
  --space-28: 32px;
  --space-29: 32.7031px;
  --space-30: 32.7109px;
  --space-31: 33.5781px;
  --space-33: 33.7734px;
  --space-34: 34.5391px;
  --space-35: 37.0547px;
  --space-36: 37.0625px;
  --space-37: 40px;
  --space-38: 40.8594px;
  --space-39: 42.6719px;
  --space-41: 43.7031px;
  --space-42: 47.5234px;
  --space-43: 47.5312px;
  --space-44: 48px;
  --space-45: 50px;
  --space-46: 50.5547px;
  --space-47: 50.5625px;
  --space-49: 50.6406px;
  --space-50: 50.8828px;
  --space-51: 51px;
  --space-52: 51.0078px;
  --space-53: 53.5156px;
  --space-54: 53.5234px;
  --space-55: 55.6328px;
  --space-56: 58.3047px;
  --space-57: 62.1328px;
  --space-58: 63.7891px;
  --space-59: 63.7969px;
  --space-60: 64.0234px;
  --space-61: 226.5px;

  /* ── Borders ── */
  --border-width-hairline: 1px;
  --border-width-thin: 2px;
  --border-width-base: 6px;
  --border-width-thick: 12px;
  --radius-sm: 1px;
  --radius-md: 2px;
  --radius-lg: 2.5px;
  --radius-xl: 3px;
  --radius-2xl: 8px;
  --radius-full: 17px;
  --radius-r7: 20px;
  --radius-r8: 50%;
  --radius-r9: 50px;
  --radius-r10: 100%;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgb(153, 153, 153) 1px 1px 1px 0px;
  --shadow-md: rgba(0, 0, 0, 0.2) 0px 0px 18px 0px;
  --shadow-lg: rgb(153, 153, 153) 0px 2px 10px -3px;
  --shadow-xl: rgb(199, 197, 199) -3px -3px 5px -2px;
  --shadow-shadow-5: rgb(199, 197, 199) 0px 0px 12px 2px;

  /* ── Motion ── */
  --duration-instant: 0.1s;
  --duration-fast: 0.15s;
  --duration-normal: 0.2s;
  --duration-slow: 0.25s;
  --duration-slower: 0.3s;
  --duration-duration-6: 0.4s;
  --duration-duration-7: 0.5s;
  --easing-ease-out: ease-out;
  --easing-linear: linear;
  --easing-ease-in: ease-in;

  /* ── Layout: Z-Index ── */
  --z-1: -1;
  --z-2: 1;
  --z-3: 3;
  --z-4: 20;
  --z-5: 100;
  --z-6: 200;
  --z-7: 700;
  --z-8: 750;
  --z-9: 1000;
  --z-10: 6000;
  --z-11: 9999;
  --z-12: 10000;
  --z-13: 10100;
  --z-14: 10101;
  --z-15: 10102;
  --z-16: 10103;
  --z-17: 99999999;
  --z-18: 2147483645;
  --z-19: 2147483646;
  --z-20: 2147483647;

  /* ── Breakpoints ── */
  --breakpoint-xs: 320px;
  --breakpoint-sm: 375px;
  --breakpoint-md: 400px;
  --breakpoint-lg: 425px;
  --breakpoint-xl: 426px;
  --breakpoint-2xl: 428px;
  --breakpoint-3xl: 520px;
  --breakpoint-bp-8: 530px;
  --breakpoint-bp-9: 550px;
  --breakpoint-bp-10: 600px;
  --breakpoint-bp-11: 601px;
  --breakpoint-bp-12: 640px;
  --breakpoint-bp-13: 711px;
  --breakpoint-bp-14: 768px;
  --breakpoint-bp-15: 812px;
  --breakpoint-bp-16: 823px;
  --breakpoint-bp-17: 896px;
  --breakpoint-bp-18: 961px;
  --breakpoint-bp-19: 1200px;
  --breakpoint-bp-20: 1281px;
  --breakpoint-bp-21: 1601px;
  --breakpoint-bp-22: 1920px;

  /* ── Opacity ── */
  --opacity-70: 0.7;
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://www.ferrari.com/en-IN",
    "title": "Official Ferrari website",
    "generatedAt": "2026-04-14T18:57:36.124Z"
  },
  "core": {
    "color": {
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "background · ×3371"
      },
      "dark-gray": {
        "$value": "#181818",
        "$type": "color",
        "$description": "background · ×1238"
      },
      "white": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×809"
      },
      "dark-gray-2": {
        "$value": "#666666",
        "$type": "color",
        "$description": "background · ×54"
      },
      "light-gray": {
        "$value": "#DDDDDD",
        "$type": "color",
        "$description": "background · ×42"
      },
      "mid-gray": {
        "$value": "#999999",
        "$type": "color",
        "$description": "text · ×31"
      },
      "dark-gray-3": {
        "$value": "#555555",
        "$type": "color",
        "$description": "background · ×30"
      },
      "light-gray-2": {
        "$value": "#CCCCCC",
        "$type": "color",
        "$description": "border · ×27"
      },
      "dark-gray-4": {
        "$value": "#333333",
        "$type": "color",
        "$description": "background · ×21"
      },
      "mid-gray-2": {
        "$value": "#8F8F8F",
        "$type": "color",
        "$description": "text · ×21"
      },
      "light-gray-3": {
        "$value": "#E4E4E4",
        "$type": "color",
        "$description": "text · ×18"
      },
      "red": {
        "$value": "#FF0000",
        "$type": "color",
        "$description": "text · ×12"
      },
      "dark-gray-5": {
        "$value": "#222222",
        "$type": "color",
        "$description": "background · ×9"
      },
      "dark-blue": {
        "$value": "#27455C",
        "$type": "color",
        "$description": "background · ×6"
      },
      "dark-gray-6": {
        "$value": "#656565",
        "$type": "color",
        "$description": "text · ×5"
      },
      "blue": {
        "$value": "#3860BE",
        "$type": "color",
        "$description": "background · ×4"
      },
      "red-2": {
        "$value": "#EB2323",
        "$type": "color",
        "$description": "background · ×3"
      },
      "mid-gray-3": {
        "$value": "#ABABAB",
        "$type": "color",
        "$description": "background · ×3"
      },
      "mid-gray-4": {
        "$value": "#A0A0A0",
        "$type": "color",
        "$description": "border · ×3"
      },
      "cyan": {
        "$value": "#32AE88",
        "$type": "color",
        "$description": "border · ×2"
      },
      "green": {
        "$value": "#468254",
        "$type": "color",
        "$description": "background · ×2"
      },
      "light-gray-4": {
        "$value": "#C7C5C7",
        "$type": "color",
        "$description": "shadow · ×2"
      },
      "dark-gray-7": {
        "$value": "#303030",
        "$type": "color",
        "$description": "background · ×1"
      },
      "white-2": {
        "$value": "#F9FFFA",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-gray-5": {
        "$value": "#D8D8D8",
        "$type": "color",
        "$description": "border · ×1"
      },
      "light-gray-6": {
        "$value": "#D1D1D1",
        "$type": "color",
        "$description": "border · ×1"
      },
      "dark-blue-2": {
        "$value": "#2E3644",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-7": {
        "$value": "#BBBBBB",
        "$type": "color",
        "$description": "border · ×1"
      },
      "white-3": {
        "$value": "#F4F4F4",
        "$type": "color",
        "$description": "background · ×1"
      },
      "blue-2": {
        "$value": "#146FF8",
        "$type": "color",
        "$description": "background · ×1"
      }
    },
    "fontSize": {
      "font-size-2xs": {
        "$value": "7px",
        "$type": "dimension"
      },
      "font-size-xs": {
        "$value": "9px",
        "$type": "dimension"
      },
      "font-size-sm": {
        "$value": "10px",
        "$type": "dimension"
      },
      "font-size-base": {
        "$value": "11px",
        "$type": "dimension"
      },
      "font-size-lg": {
        "$value": "12px",
        "$type": "dimension"
      },
      "font-size-xl": {
        "$value": "13px",
        "$type": "dimension"
      },
      "font-size-2xl": {
        "$value": "13.008px",
        "$type": "dimension"
      },
      "font-size-3xl": {
        "$value": "13.3333px",
        "$type": "dimension"
      },
      "font-size-4xl": {
        "$value": "13.6px",
        "$type": "dimension"
      },
      "font-size-5xl": {
        "$value": "14px",
        "$type": "dimension"
      },
      "font-size-6xl": {
        "$value": "14.08px",
        "$type": "dimension"
      },
      "font-size-14px": {
        "$value": "14.4px",
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
      "font-size-21px": {
        "$value": "21.3333px",
        "$type": "dimension"
      },
      "font-size-26px": {
        "$value": "26px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "Times",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "FerrariSans",
        "$type": "fontFamily"
      },
      "font-family-3": {
        "$value": "Body-Font",
        "$type": "fontFamily"
      },
      "font-family-4": {
        "$value": "Arial",
        "$type": "fontFamily"
      },
      "font-family-5": {
        "$value": "Helvetica",
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
        "$value": "12px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "13.5px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "15.24px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "15.6096px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "17.6px",
        "$type": "dimension"
      },
      "line-height-lh-6": {
        "$value": "19.5px",
        "$type": "dimension"
      },
      "line-height-lh-7": {
        "$value": "20.8px",
        "$type": "dimension"
      },
      "line-height-lh-8": {
        "$value": "21.6px",
        "$type": "dimension"
      },
      "line-height-lh-9": {
        "$value": "24px",
        "$type": "dimension"
      },
      "line-height-lh-10": {
        "$value": "25px",
        "$type": "dimension"
      },
      "line-height-lh-11": {
        "$value": "32px",
        "$type": "dimension"
      },
      "line-height-lh-12": {
        "$value": "34px",
        "$type": "dimension"
      },
      "line-height-lh-13": {
        "$value": "39px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "0.08px",
        "$type": "dimension"
      },
      "letter-spacing-normal": {
        "$value": "0.13008px",
        "$type": "dimension"
      },
      "letter-spacing-wide": {
        "$value": "0.195px",
        "$type": "dimension"
      },
      "letter-spacing-wider": {
        "$value": "0.96px",
        "$type": "dimension"
      },
      "letter-spacing-widest": {
        "$value": "1px",
        "$type": "dimension"
      },
      "letter-spacing-ls-6": {
        "$value": "1.28px",
        "$type": "dimension"
      }
    }
  },
  "layout": {
    "spacing": {
      "space-1": {
        "$value": "0.0703125px",
        "$type": "dimension"
      },
      "space-2": {
        "$value": "1px",
        "$type": "dimension"
      },
      "space-3": {
        "$value": "3.53906px",
        "$type": "dimension"
      },
      "space-4": {
        "$value": "3.54688px",
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
        "$value": "6.15625px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "8.30469px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "8.3125px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "10px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "11.3906px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "22.3906px",
        "$type": "dimension"
      },
      "space-32": {
        "$value": "33.7656px",
        "$type": "dimension"
      },
      "space-40": {
        "$value": "42.6797px",
        "$type": "dimension"
      },
      "space-48": {
        "$value": "50.6328px",
        "$type": "dimension"
      },
      "space-64": {
        "$value": "15.7266px",
        "$type": "dimension"
      },
      "space-80": {
        "$value": "15.7344px",
        "$type": "dimension"
      },
      "space-96": {
        "$value": "16px",
        "$type": "dimension"
      },
      "space-128": {
        "$value": "17.6484px",
        "$type": "dimension"
      },
      "space-160": {
        "$value": "18.7969px",
        "$type": "dimension"
      },
      "space-192": {
        "$value": "20px",
        "$type": "dimension"
      },
      "space-256": {
        "$value": "20.7266px",
        "$type": "dimension"
      },
      "space-23": {
        "$value": "20.7891px",
        "$type": "dimension"
      },
      "space-25": {
        "$value": "24px",
        "$type": "dimension"
      },
      "space-26": {
        "$value": "25px",
        "$type": "dimension"
      },
      "space-27": {
        "$value": "30px",
        "$type": "dimension"
      },
      "space-28": {
        "$value": "32px",
        "$type": "dimension"
      },
      "space-29": {
        "$value": "32.7031px",
        "$type": "dimension"
      },
      "space-30": {
        "$value": "32.7109px",
        "$type": "dimension"
      },
      "space-31": {
        "$value": "33.5781px",
        "$type": "dimension"
      },
      "space-33": {
        "$value": "33.7734px",
        "$type": "dimension"
      },
      "space-34": {
        "$value": "34.5391px",
        "$type": "dimension"
      },
      "space-35": {
        "$value": "37.0547px",
        "$type": "dimension"
      },
      "space-36": {
        "$value": "37.0625px",
        "$type": "dimension"
      },
      "space-37": {
        "$value": "40px",
        "$type": "dimension"
      },
      "space-38": {
        "$value": "40.8594px",
        "$type": "dimension"
      },
      "space-39": {
        "$value": "42.6719px",
        "$type": "dimension"
      },
      "space-41": {
        "$value": "43.7031px",
        "$type": "dimension"
      },
      "space-42": {
        "$value": "47.5234px",
        "$type": "dimension"
      },
      "space-43": {
        "$value": "47.5312px",
        "$type": "dimension"
      },
      "space-44": {
        "$value": "48px",
        "$type": "dimension"
      },
      "space-45": {
        "$value": "50px",
        "$type": "dimension"
      },
      "space-46": {
        "$value": "50.5547px",
        "$type": "dimension"
      },
      "space-47": {
        "$value": "50.5625px",
        "$type": "dimension"
      },
      "space-49": {
        "$value": "50.6406px",
        "$type": "dimension"
      },
      "space-50": {
        "$value": "50.8828px",
        "$type": "dimension"
      },
      "space-51": {
        "$value": "51px",
        "$type": "dimension"
      },
      "space-52": {
        "$value": "51.0078px",
        "$type": "dimension"
      },
      "space-53": {
        "$value": "53.5156px",
        "$type": "dimension"
      },
      "space-54": {
        "$value": "53.5234px",
        "$type": "dimension"
      },
      "space-55": {
        "$value": "55.6328px",
        "$type": "dimension"
      },
      "space-56": {
        "$value": "58.3047px",
        "$type": "dimension"
      },
      "space-57": {
        "$value": "62.1328px",
        "$type": "dimension"
      },
      "space-58": {
        "$value": "63.7891px",
        "$type": "dimension"
      },
      "space-59": {
        "$value": "63.7969px",
        "$type": "dimension"
      },
      "space-60": {
        "$value": "64.0234px",
        "$type": "dimension"
      },
      "space-61": {
        "$value": "226.5px",
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
        "$value": "3",
        "$type": "number"
      },
      "z-4": {
        "$value": "20",
        "$type": "number"
      },
      "z-5": {
        "$value": "100",
        "$type": "number"
      },
      "z-6": {
        "$value": "200",
        "$type": "number"
      },
      "z-7": {
        "$value": "700",
        "$type": "number"
      },
      "z-8": {
        "$value": "750",
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
        "$value": "9999",
        "$type": "number"
      },
      "z-12": {
        "$value": "10000",
        "$type": "number"
      },
      "z-13": {
        "$value": "10100",
        "$type": "number"
      },
      "z-14": {
        "$value": "10101",
        "$type": "number"
      },
      "z-15": {
        "$value": "10102",
        "$type": "number"
      },
      "z-16": {
        "$value": "10103",
        "$type": "number"
      },
      "z-17": {
        "$value": "99999999",
        "$type": "number"
      },
      "z-18": {
        "$value": "2147483645",
        "$type": "number"
      },
      "z-19": {
        "$value": "2147483646",
        "$type": "number"
      },
      "z-20": {
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
        "$value": "375px",
        "$type": "dimension"
      },
      "breakpoint-md": {
        "$value": "400px",
        "$type": "dimension"
      },
      "breakpoint-lg": {
        "$value": "425px",
        "$type": "dimension"
      },
      "breakpoint-xl": {
        "$value": "426px",
        "$type": "dimension"
      },
      "breakpoint-2xl": {
        "$value": "428px",
        "$type": "dimension"
      },
      "breakpoint-3xl": {
        "$value": "520px",
        "$type": "dimension"
      },
      "breakpoint-bp-8": {
        "$value": "530px",
        "$type": "dimension"
      },
      "breakpoint-bp-9": {
        "$value": "550px",
        "$type": "dimension"
      },
      "breakpoint-bp-10": {
        "$value": "600px",
        "$type": "dimension"
      },
      "breakpoint-bp-11": {
        "$value": "601px",
        "$type": "dimension"
      },
      "breakpoint-bp-12": {
        "$value": "640px",
        "$type": "dimension"
      },
      "breakpoint-bp-13": {
        "$value": "711px",
        "$type": "dimension"
      },
      "breakpoint-bp-14": {
        "$value": "768px",
        "$type": "dimension"
      },
      "breakpoint-bp-15": {
        "$value": "812px",
        "$type": "dimension"
      },
      "breakpoint-bp-16": {
        "$value": "823px",
        "$type": "dimension"
      },
      "breakpoint-bp-17": {
        "$value": "896px",
        "$type": "dimension"
      },
      "breakpoint-bp-18": {
        "$value": "961px",
        "$type": "dimension"
      },
      "breakpoint-bp-19": {
        "$value": "1200px",
        "$type": "dimension"
      },
      "breakpoint-bp-20": {
        "$value": "1281px",
        "$type": "dimension"
      },
      "breakpoint-bp-21": {
        "$value": "1601px",
        "$type": "dimension"
      },
      "breakpoint-bp-22": {
        "$value": "1920px",
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
        "$value": "2.5px",
        "$type": "dimension"
      },
      "radius-xl": {
        "$value": "3px",
        "$type": "dimension"
      },
      "radius-2xl": {
        "$value": "8px",
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
        "$value": "50%",
        "$type": "dimension"
      },
      "radius-r9": {
        "$value": "50px",
        "$type": "dimension"
      },
      "radius-r10": {
        "$value": "100%",
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
      },
      "border-width-base": {
        "$value": "6px",
        "$type": "dimension"
      },
      "border-width-thick": {
        "$value": "12px",
        "$type": "dimension"
      }
    },
    "shadow": {
      "shadow-sm": {
        "$value": "rgb(153, 153, 153) 1px 1px 1px 0px",
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
      "easing-ease-out": {
        "$value": "ease-out",
        "$type": "cubicBezier"
      },
      "easing-linear": {
        "$value": "linear",
        "$type": "cubicBezier"
      },
      "easing-ease-in": {
        "$value": "ease-in",
        "$type": "cubicBezier"
      }
    }
  },
  "opacity": {
    "opacity-70": {
      "$value": 0.7,
      "$type": "number"
    }
  }
}
```
