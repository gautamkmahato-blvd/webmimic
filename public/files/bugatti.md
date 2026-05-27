# Official Bugatti Store — Design System

**Source:** https://bugatti.store/  
**Generated:** 14/04/2026, 13:28:59  
**Extracted:** 42 colors · 68 type tokens · 34 spacing steps · 15 breakpoints · 10 motion tokens

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
| `--color-white` | `#FFFFFF` | hsl(0, 0%, 100%) | ×5230 |
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×2099 |
| `--color-light-gray` | `#E1E1E1` | hsl(0, 0%, 88%) | ×594 |
| `--color-blue` | `#004BFA` | hsl(222, 100%, 49%) | ×539 |
| `--color-dark-gray` | `#171717` | hsl(0, 0%, 9%) | ×153 |
| `--color-red` | `#E11D48` | hsl(347, 77%, 50%) | ×43 |
| `--color-dark-gray-5` | `#1F1F1F` | hsl(0, 0%, 12%) | ×1 |
| `--color-dark-gray-7` | `rgba(23, 23, 23, 0.4)` | hsl(0, 0%, 9%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-red-2` | `#BE123C` | hsl(345, 83%, 41%) | ×10 |
| `--color-white-2` | `#FAFAFA` | hsl(0, 0%, 98%) | ×4 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-gray-6` | `rgba(23, 23, 23, 0.1)` | hsl(0, 0%, 8%) | ×1 |

### Shadow Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-cyan` | `rgba(168, 232, 226, 0.1)` | hsl(172, 63%, 79%) | ×32 |

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray-2` | `rgba(225, 225, 225, 0.1)` | hsl(0, 0%, 89%) | ×5 |
| `--color-blue-2` | `#006FCF` | hsl(208, 100%, 41%) | ×5 |
| `--color-dark-gray-2` | `#1D1C1C` | hsl(0, 2%, 11%) | ×4 |
| `--color-dark-gray-3` | `#231F20` | hsl(345, 6%, 13%) | ×3 |
| `--color-blue-3` | `#3086C8` | hsl(206, 61%, 49%) | ×2 |
| `--color-dark-gray-4` | `#232323` | hsl(0, 0%, 14%) | ×2 |
| `--color-red-3` | `#EB001B` | hsl(353, 100%, 46%) | ×2 |
| `--color-dark-blue` | `#1E3764` | hsl(219, 54%, 25%) | ×1 |
| `--color-orange` | `#F48120` | hsl(27, 91%, 54%) | ×1 |
| `--color-dark-gray-8` | `#5F6368` | hsl(213, 5%, 39%) | ×1 |
| `--color-blue-4` | `#4285F4` | hsl(217, 89%, 61%) | ×1 |
| `--color-green` | `#34A853` | hsl(136, 53%, 43%) | ×1 |
| `--color-orange-2` | `#FBBC04` | hsl(45, 97%, 50%) | ×1 |
| `--color-red-4` | `#EA4335` | hsl(5, 81%, 56%) | ×1 |
| `--color-light-yellow` | `#FFF48D` | hsl(54, 100%, 78%) | ×1 |
| `--color-pink` | `#CC0066` | hsl(330, 100%, 40%) | ×1 |
| `--color-light-red` | `#FFA8CD` | hsl(334, 100%, 83%) | ×1 |
| `--color-dark-blue-2` | `#0B051D` | hsl(255, 71%, 7%) | ×1 |
| `--color-cyan` | `#00A2E5` | hsl(198, 100%, 45%) | ×1 |
| `--color-blue-5` | `#7375CF` | hsl(239, 49%, 63%) | ×1 |
| `--color-orange-3` | `#F79E1B` | hsl(36, 93%, 54%) | ×1 |
| `--color-orange-4` | `#FF5F00` | hsl(22, 100%, 50%) | ×1 |
| `--color-dark-blue-3` | `#003087` | hsl(219, 100%, 26%) | ×1 |
| `--color-dark-blue-4` | `#012169` | hsl(222, 98%, 21%) | ×1 |
| `--color-blue-6` | `#5A31F4` | hsl(253, 90%, 57%) | ×1 |
| `--color-dark-blue-5` | `#005B9A` | hsl(205, 100%, 30%) | ×1 |
| `--color-red-5` | `#E9292D` | hsl(359, 81%, 54%) | ×1 |
| `--color-blue-7` | `#0E73B9` | hsl(205, 86%, 39%) | ×1 |
| `--color-dark-cyan` | `#059DA4` | hsl(183, 94%, 33%) | ×1 |
| `--color-dark-blue-6` | `#142688` | hsl(231, 74%, 31%) | ×1 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `Times` |
| `--font-family-2` | `BugattiRegular` |
| `--font-family-3` | `BugattiBold` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `10px` |  |
| `--font-size-xs` | `11.8257px` |  |
| `--font-size-sm` | `12px` |  |
| `--font-size-base` | `12.8229px` |  |
| `--font-size-lg` | `13px` |  |
| `--font-size-xl` | `13.3333px` |  |
| `--font-size-2xl` | `14px` |  |
| `--font-size-3xl` | `14.7821px` |  |
| `--font-size-4xl` | `15.5641px` |  |
| `--font-size-5xl` | `16px` |  |
| `--font-size-6xl` | `17.5653px` |  |
| `--font-size-18px` | `18px` |  |
| `--font-size-19px` | `19.1294px` |  |
| `--font-size-20px` | `20px` |  |
| `--font-size-21px` | `21.3354px` |  |
| `--font-size-24px` | `24px` |  |
| `--font-size-26px` | `25.5408px` |  |
| `--font-size-28px` | `28.1658px` |  |
| `--font-size-29px` | `28.6196px` |  |
| `--font-size-30px` | `30px` |  |
| `--font-size-32px` | `32px` |  |
| `--font-size-38px` | `38.1594px` |  |
| `--font-size-54px` | `53.5909px` |  |
| `--font-size-75px` | `75px` |  |

### Font Weights

| Token | Weight |
| --- | --- |
| `--font-weight-regular` | `400` |
| `--font-weight-medium` | `500` |
| `--font-weight-bold` | `700` |
| `--font-weight-black` | `900` |

### Line Heights

| Token | Value |
| --- | --- |
| `--line-height-tight` | `10px` |
| `--line-height-snug` | `11.8257px` |
| `--line-height-normal` | `12.8229px` |
| `--line-height-relaxed` | `14px` |
| `--line-height-loose` | `14.7821px` |
| `--line-height-lh-6` | `16px` |
| `--line-height-lh-7` | `17.5px` |
| `--line-height-lh-8` | `19.1294px` |
| `--line-height-lh-9` | `19.5px` |
| `--line-height-lh-10` | `20.5903px` |
| `--line-height-lh-11` | `21.9566px` |
| `--line-height-lh-12` | `22.5px` |
| `--line-height-lh-13` | `24px` |
| `--line-height-lh-14` | `25px` |
| `--line-height-lh-15` | `25.5408px` |
| `--line-height-lh-16` | `26.6692px` |
| `--line-height-lh-17` | `28.1658px` |
| `--line-height-lh-18` | `28.6196px` |
| `--line-height-lh-19` | `30px` |
| `--line-height-lh-20` | `32px` |
| `--line-height-lh-21` | `38.1594px` |
| `--line-height-lh-22` | `53.5909px` |
| `--line-height-lh-23` | `75px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `-3px` |
| `--letter-spacing-normal` | `-2.14364px` |
| `--letter-spacing-wide` | `-1.14478px` |
| `--letter-spacing-wider` | `-1.06677px` |
| `--letter-spacing-widest` | `-0.96px` |
| `--letter-spacing-ls-6` | `-0.9px` |
| `--letter-spacing-ls-7` | `-0.858587px` |
| `--letter-spacing-ls-8` | `-0.75px` |
| `--letter-spacing-ls-9` | `-0.704145px` |
| `--letter-spacing-ls-10` | `-0.6px` |
| `--letter-spacing-ls-11` | `-0.573883px` |
| `--letter-spacing-ls-12` | `-0.514756px` |
| `--letter-spacing-ls-13` | `-0.4px` |
| `--letter-spacing-ls-14` | `1px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `1.90797px` | ×2 |
| `--space-2` | `2px` | ×15 |
| `--space-3` | `2.67954px` | ×16 |
| `--space-4` | `3.05276px` | ×2 |
| `--space-5` | `4px` | ×3 |
| `--space-6` | `4.28727px` | ×16 |
| `--space-8` | `5px` | ×1 |
| `--space-10` | `6px` | ×66 |
| `--space-12` | `6.5px` | ×2 |
| `--space-16` | `8px` | ×285 |
| `--space-20` | `9.53986px` | ×3 |
| `--space-24` | `30px` | ×4 |
| `--space-32` | `60px` | ×7 |
| `--space-40` | `14px` | ×8 |
| `--space-48` | `16px` | ×64 |
| `--space-64` | `16.995px` | ×6 |
| `--space-80` | `18px` | ×14 |
| `--space-96` | `20px` | ×53 |
| `--space-128` | `22px` | ×26 |
| `--space-160` | `23.8496px` | ×61 |
| `--space-192` | `24px` | ×18 |
| `--space-256` | `26px` | ×20 |
| `--space-23` | `28px` | ×111 |
| `--space-25` | `32px` | ×68 |
| `--space-26` | `35px` | ×8 |
| `--space-27` | `36px` | ×26 |
| `--space-28` | `40px` | ×12 |
| `--space-29` | `48px` | ×11 |
| `--space-30` | `52px` | ×4 |
| `--space-31` | `56px` | ×1 |
| `--space-33` | `70px` | ×24 |
| `--space-34` | `72px` | ×5 |
| `--space-35` | `95.4099px` | ×3 |
| `--space-36` | `100px` | ×3 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `1px` | ×28 |
| `--border-width-thin` | `2px` | ×4 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `0px 0px 16px 16px` | ×6 |
| `--radius-md` | `0px 34px 34px 0px` | ×1 |
| `--radius-lg` | `0px 0px 17.8787px 17.8787px` | ×2 |
| `--radius-xl` | `0px 0px 8px 8px` | ×1 |
| `--radius-2xl` | `6px` | ×7 |
| `--radius-full` | `8px 8px 0px 0px` | ×1 |
| `--radius-r7` | `10px` | ×4 |
| `--radius-r8` | `11.9305px` | ×80 |
| `--radius-r9` | `11.9305px 11.9305px 0px 0px` | ×37 |
| `--radius-r10` | `11.9305px 11.9305px 17.8787px 17.8787px` | ×2 |
| `--radius-r11` | `12px` | ×1 |
| `--radius-r12` | `17.8787px 17.8787px 0px 0px` | ×5 |
| `--radius-r13` | `17.8787px` | ×1 |
| `--radius-r14` | `24px 24px 0px 0px` | ×1 |
| `--radius-r15` | `34px 0px 0px 34px` | ×2 |
| `--radius-r16` | `34px 0px 0px` | ×3 |
| `--radius-r17` | `50%` | ×134 |
| `--radius-r18` | `60px` | ×112 |
| `--radius-r19` | `1.67772e+07px` | ×168 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgba(168, 232, 226, 0) 0px 0px 0px 0px` | ×122 |
| `--shadow-md` | `rgba(168, 232, 226, 0.1) 0px 0px 0px 0px` | ×32 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.1s` | ×294 |
| `--duration-fast` | `0.2s` | ×165 |
| `--duration-normal` | `0.25s` | ×10 |
| `--duration-slow` | `0.3s` | ×152 |
| `--duration-slower` | `0.5s` | ×1033 |
| `--duration-duration-6` | `0.6s` | ×111 |
| `--duration-duration-7` | `0.7s` | ×13 |
| `--duration-duration-8` | `0.8s` | ×113 |
| `--duration-duration-9` | `1s` | ×159 |
| `--duration-duration-10` | `2s` | ×5 |

### Easing Functions

_No easing functions detected._

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `-100` |
| `--z-2` | `-1` |
| `--z-3` | `1` |
| `--z-4` | `2` |
| `--z-5` | `3` |
| `--z-6` | `10` |
| `--z-7` | `20` |
| `--z-8` | `25` |
| `--z-9` | `30` |
| `--z-10` | `35` |
| `--z-11` | `40` |
| `--z-12` | `50` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `400px` |
| `--breakpoint-sm` | `639px` |
| `--breakpoint-md` | `640px` |
| `--breakpoint-lg` | `750px` |
| `--breakpoint-xl` | `767px` |
| `--breakpoint-2xl` | `768px` |
| `--breakpoint-3xl` | `1023px` |
| `--breakpoint-bp-8` | `1024px` |
| `--breakpoint-bp-9` | `1200px` |
| `--breakpoint-bp-10` | `1279px` |
| `--breakpoint-bp-11` | `1280px` |
| `--breakpoint-bp-12` | `1400px` |
| `--breakpoint-bp-13` | `1536px` |
| `--breakpoint-bp-14` | `1920px` |
| `--breakpoint-bp-15` | `2200px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-7` | `0.07` | ×11 |
| `--opacity-20` | `0.2` | ×1 |
| `--opacity-30` | `0.3` | ×7 |
| `--opacity-35` | `0.35` | ×1 |
| `--opacity-40` | `0.4` | ×6 |
| `--opacity-60` | `0.6` | ×5 |
| `--opacity-65` | `0.65` | ×2 |
| `--opacity-80` | `0.8` | ×1 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-red-2` | `--color-white` | 6.29:1 | AA |
| `--color-red-2` | `--color-black` | 3.34:1 | AA Large |
| `--color-red-2` | `--color-light-gray` | 4.81:1 | AA |
| `--color-red-2` | `--color-blue` | 1.01:1 | Fail |
| `--color-red-2` | `--color-dark-gray` | 2.85:1 | Fail |
| `--color-white-2` | `--color-white` | 1.04:1 | Fail |
| `--color-white-2` | `--color-black` | 20.12:1 | AAA |
| `--color-white-2` | `--color-light-gray` | 1.25:1 | Fail |
| `--color-white-2` | `--color-blue` | 5.94:1 | AA |
| `--color-white-2` | `--color-dark-gray` | 17.18:1 | AAA |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--color-base-text` | `255 255 255` |
| `--color-base-highlight` | `0 75 250` |
| `--color-base-background` | `0 0 0` |
| `--color-base-button` | `255 255 255` |
| `--color-base-button-gradient` | `#ffffff` |
| `--color-base-button-text` | `0 0 0` |
| `--color-keyboard-focus` | `0 75 250` |
| `--color-shadow` | `168 232 226` |
| `--color-price` | `0 75 250` |
| `--color-sale-price` | `225 29 72` |
| `--color-sale-tag` | `225 29 72` |
| `--color-sale-tag-text` | `0 0 0` |
| `--color-rating` | `0 75 250` |
| `--color-placeholder` | `225 225 225` |
| `--color-success-text` | `77 124 15` |
| `--color-success-background` | `247 254 231` |
| `--color-error-text` | `190 18 60` |
| `--color-error-background` | `255 241 242` |
| `--color-info-text` | `0 75 250` |
| `--color-info-background` | `225 225 225` |
| `--color-drawer-text` | `255 255 255` |
| `--color-drawer-background` | `0 0 0` |
| `--color-drawer-button-background` | `225 225 225` |
| `--color-drawer-button-gradient` | `#e1e1e1` |
| `--color-drawer-button-text` | `0 0 0` |
| `--color-drawer-overlay` | `225 225 225` |
| `--card-radius` | `var(--rounded-card)` |
| `--card-border-width` | `0.0rem` |
| `--card-border-opacity` | `0.0` |
| `--card-shadow-opacity` | `0.1` |
| `--card-shadow-horizontal-offset` | `0.0rem` |
| `--card-shadow-vertical-offset` | `0.0rem` |
| `--buttons-radius` | `var(--rounded-button)` |
| `--buttons-border-width` | `2px` |
| `--buttons-border-opacity` | `1.0` |
| `--buttons-shadow-opacity` | `0.0` |
| `--buttons-shadow-horizontal-offset` | `0px` |
| `--buttons-shadow-vertical-offset` | `0px` |
| `--inputs-radius` | `var(--rounded-input)` |
| `--inputs-border-width` | `0px` |
| `--inputs-border-opacity` | `0.65` |
| `--sp-0d5` | `0.125rem` |
| `--sp-1` | `0.25rem` |
| `--sp-1d5` | `0.375rem` |
| `--sp-2` | `0.5rem` |
| `--sp-2d5` | `0.625rem` |
| `--sp-3` | `0.75rem` |
| `--sp-3d5` | `0.875rem` |
| `--sp-4` | `1rem` |
| `--sp-4d5` | `1.125rem` |
| `--sp-5` | `1.25rem` |
| `--sp-5d5` | `1.375rem` |
| `--sp-6` | `1.5rem` |
| `--sp-6d5` | `1.625rem` |
| `--sp-7` | `1.75rem` |
| `--sp-7d5` | `1.875rem` |
| `--sp-8` | `2rem` |
| `--sp-8d5` | `2.125rem` |
| `--sp-9` | `2.25rem` |
| `--sp-9d5` | `2.375rem` |
| `--sp-10` | `2.5rem` |
| `--sp-10d5` | `2.625rem` |
| `--sp-11` | `2.75rem` |
| `--sp-12` | `3rem` |
| `--sp-13` | `3.25rem` |
| `--sp-14` | `3.5rem` |
| `--sp-15` | `3.875rem` |
| `--sp-16` | `4rem` |
| `--sp-18` | `4.5rem` |
| `--sp-20` | `5rem` |
| `--sp-23` | `5.625rem` |
| `--sp-24` | `6rem` |
| `--sp-28` | `7rem` |
| `--sp-32` | `8rem` |
| `--sp-36` | `9rem` |
| `--sp-40` | `10rem` |
| `--sp-44` | `11rem` |
| `--sp-48` | `12rem` |
| `--sp-52` | `13rem` |
| `--sp-56` | `14rem` |
| `--sp-60` | `15rem` |
| `--sp-64` | `16rem` |
| `--sp-68` | `17rem` |
| `--sp-72` | `18rem` |
| `--sp-80` | `20rem` |
| `--sp-96` | `24rem` |
| `--sp-100` | `32rem` |
| `--font-heading-family` | `"BugattiBold", Inter, sans-serif` |
| `--font-heading-style` | `normal` |
| `--font-heading-weight` | `700` |
| `--font-heading-line-height` | `1` |
| `--font-heading-letter-spacing` | `-0.03em` |
| `--font-body-family` | `"BugattiRegular", Inter, sans-serif` |
| `--font-body-style` | `normal` |
| `--font-body-weight` | `400` |
| `--font-body-line-height` | `1.2` |
| `--font-body-letter-spacing` | `0.0em` |
| `--font-navigation-family` | `var(--font-body-family)` |
| `--font-navigation-size` | `clamp(0.875rem, 0.748rem + 0.3174vw, 1.125rem)` |
| `--font-navigation-weight` | `500` |
| `--font-button-family` | `var(--font-body-family)` |
| `--font-button-size` | `clamp(0.875rem, 0.8115rem + 0.1587vw, 1.0rem)` |
| `--font-button-weight` | `500` |
| `--font-product-family` | `var(--font-body-family)` |
| `--font-product-size` | `clamp(1.0rem, 0.873rem + 0.3175vw, 1.25rem)` |
| `--font-product-weight` | `500` |
| `--text-3xs` | `0.625rem` |
| `--text-2xs` | `0.6875rem` |
| `--text-xs` | `0.75rem` |
| `--text-2sm` | `0.8125rem` |
| `--text-sm` | `0.875rem` |
| `--text-base` | `1.0rem` |
| `--text-lg` | `1.125rem` |
| `--text-xl` | `1.25rem` |
| `--text-2xl` | `1.5rem` |
| `--text-3xl` | `1.875rem` |
| `--text-4xl` | `2.25rem` |
| `--text-5xl` | `3.0rem` |
| `--text-6xl` | `3.75rem` |
| `--text-7xl` | `4.5rem` |
| `--text-8xl` | `6.0rem` |
| `--page-width` | `1900px` |
| `--gap-padding` | `clamp(var(--sp-5), 2.526vw, var(--sp-12))` |
| `--grid-gap` | `clamp(40px, 20vw, 60px)` |
| `--page-padding` | `var(--sp-5)` |
| `--page-container` | `min(calc(100vw - var(--scrollbar-width, 0px) - var(--page-padding) * 2), var(--page-width))` |
| `--rounded-button` | `3.75rem` |
| `--rounded-input` | `0.375rem` |
| `--rounded-card` | `clamp(var(--sp-2d5), 1.053vw, var(--sp-5))` |
| `--rounded-block` | `clamp(var(--sp-2d5), 1.053vw, var(--sp-5))` |
| `--icon-weight` | `1.5px` |
| `--color-background` | `var(--color-base-background)` |
| `--color-background-2` | `var(--color-base-background)` |
| `--color-foreground` | `var(--color-base-text)` |
| `--color-border` | `var(--color-foreground)/ .1` |
| `--color-border-dark` | `var(--color-foreground)/ .4` |
| `--color-border-light` | `var(--color-foreground)/ .06` |
| `--color-highlight` | `var(--color-base-highlight)` |
| `--color-button-background` | `var(--color-base-button)` |
| `--color-button-gradient` | `var(--color-base-button-gradient)` |
| `--color-button-border` | `var(--color-base-button)` |
| `--color-button-text` | `var(--color-base-button-text)` |
| `--font-normal` | `400` |
| `--font-medium` | `500` |
| `--font-bold` | `700` |
| `--animation-nav` | `.5s cubic-bezier(.6, 0, .4, 1)` |
| `--animation-primary` | `.5s cubic-bezier(.3, 1, .3, 1)` |
| `--animation-smooth` | `.7s cubic-bezier(.7, 0, .3, 1)` |
| `--animation-fast` | `.3s cubic-bezier(.7, 0, .3, 1)` |
| `--animation-short` | `.2s cubic-bezier(.7, 0, .3, 1)` |
| `--fluid-2xl-to-4xl` | `clamp(var(--text-2xl), .6307rem + 1.3636vw, var(--text-4xl))` |
| `--fluid-xl-to-3xl` | `clamp(var(--text-xl), .4966rem + 1.1818vw, var(--text-3xl))` |
| `--fluid-lg-to-2xl` | `clamp(var(--text-lg), .9722rem + .4444vw, var(--text-2xl))` |
| `--fluid-base-to-xl` | `clamp(var(--text-base), .873rem + .3175vw, var(--text-xl))` |
| `--fluid-base-to-2xl` | `clamp(var(--text-base), .746rem + .6349vw, var(--text-2xl))` |
| `--fluid-sm-to-lg` | `clamp(var(--text-sm), .748rem + .3174vw, var(--text-lg))` |
| `--fluid-sm-to-base` | `clamp(var(--text-sm), .8115rem + .1587vw, var(--text-base))` |
| `--fluid-xs-to-sm` | `clamp(var(--text-xs), .7297rem + .1013vw, var(--text-sm))` |
| `--border-radius` | `clamp(var(--sp-4), 1.578vw, var(--sp-7d5))` |
| `--border-radius-medium` | `calc(clamp(1em, 1.7vw, 1.7em)*1.2)` |
| `--border-radius-small` | `calc(clamp(1em, 1.7vw, 1.7em)/2)` |
| `--rounded-full` | `calc(infinity * 1px)` |
| `--input-height` | `var(--sp-13)` |
| `--input-padding-inline` | `var(--sp-6d5)` |
| `--transform-logical` | `1` |
| `--transform-origin-start` | `left` |
| `--transform-origin-end` | `right` |
| `--text-h0` | `var(--sp-16)` |
| `--text-h1` | `var(--sp-9)` |
| `--text-h2` | `var(--sp-6)` |
| `--text-h3` | `var(--sp-5)` |
| `--text-h4` | `var(--sp-4d5)` |
| `--text-h5` | `var(--sp-4)` |
| `--text-h6` | `var(--sp-4d5)` |
| `--title-sm` | `clamp(var(--text-2xl), 2.526vw, var(--text-5xl))` |
| `--title-md` | `clamp(var(--sp-8), 3.368vw, var(--sp-16))` |
| `--title-lg` | `clamp(var(--sp-10), 3.368vw, var(--sp-16))` |
| `--title-xl` | `clamp(var(--sp-12), 7.813vw, var(--sp-20))` |
| `--color-red-200` | `254 202 202` |
| `--color-red-300` | `252 165 165` |
| `--tw-border-spacing-x` | `0` |
| `--tw-border-spacing-y` | `0` |
| `--tw-translate-x` | `0` |
| `--tw-translate-y` | `0` |
| `--tw-rotate` | `0` |
| `--tw-skew-x` | `0` |
| `--tw-skew-y` | `0` |
| `--tw-scale-x` | `1` |
| `--tw-scale-y` | `1` |
| `--tw-ring-inset` | `inset` |
| `--tw-ring-offset-width` | `0px` |
| `--tw-ring-offset-color` | `#fff` |
| `--tw-ring-color` | `rgba(59, 130, 246, .5)` |
| `--tw-ring-offset-shadow` | `0 0 #0000` |
| `--tw-ring-shadow` | `0 0 #0000` |
| `--tw-shadow` | `0 0 #0000` |
| `--tw-shadow-colored` | `0 0 #0000` |
| `--screen-height` | `100vh` |
| `--topbar-height` | `var(--sp-12)` |
| `--header-height` | `0px` |
| `--sticky-header-height` | `0px` |
| `--mobile-dock-height` | `0px` |
| `--scrollbar-width` | `0px` |
| `--ratio-percent` | `56.25%` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — Official Bugatti Store
 * Source: https://bugatti.store/
 * Generated: 14/04/2026, 13:28:59
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-white: #FFFFFF; /* hsl(0, 0%, 100%) · background */
  --color-black: #000000; /* hsl(0, 0%, 0%) · background */
  --color-light-gray: #E1E1E1; /* hsl(0, 0%, 88%) · background */
  --color-blue: #004BFA; /* hsl(222, 100%, 49%) · background */
  --color-dark-gray: #171717; /* hsl(0, 0%, 9%) · background */
  --color-red: #E11D48; /* hsl(347, 77%, 50%) · background */
  --color-light-cyan: rgba(168, 232, 226, 0.1); /* hsl(172, 63%, 79%) · shadow */
  --color-red-2: #BE123C; /* hsl(345, 83%, 41%) · text */
  --color-light-gray-2: rgba(225, 225, 225, 0.1); /* hsl(0, 0%, 89%) · gradient */
  --color-blue-2: #006FCF; /* hsl(208, 100%, 41%) · fill */
  --color-white-2: #FAFAFA; /* hsl(0, 0%, 98%) · text */
  --color-dark-gray-2: #1D1C1C; /* hsl(0, 2%, 11%) · fill */
  --color-dark-gray-3: #231F20; /* hsl(345, 6%, 13%) · fill */
  --color-blue-3: #3086C8; /* hsl(206, 61%, 49%) · fill */
  --color-dark-gray-4: #232323; /* hsl(0, 0%, 14%) · fill */
  --color-red-3: #EB001B; /* hsl(353, 100%, 46%) · fill */
  --color-dark-gray-5: #1F1F1F; /* hsl(0, 0%, 12%) · background */
  --color-dark-gray-6: rgba(23, 23, 23, 0.1); /* hsl(0, 0%, 8%) · border */
  --color-dark-gray-7: rgba(23, 23, 23, 0.4); /* hsl(0, 0%, 9%) · background */
  --color-dark-blue: #1E3764; /* hsl(219, 54%, 25%) · fill */
  --color-orange: #F48120; /* hsl(27, 91%, 54%) · fill */
  --color-dark-gray-8: #5F6368; /* hsl(213, 5%, 39%) · fill */
  --color-blue-4: #4285F4; /* hsl(217, 89%, 61%) · fill */
  --color-green: #34A853; /* hsl(136, 53%, 43%) · fill */
  --color-orange-2: #FBBC04; /* hsl(45, 97%, 50%) · fill */
  --color-red-4: #EA4335; /* hsl(5, 81%, 56%) · fill */
  --color-light-yellow: #FFF48D; /* hsl(54, 100%, 78%) · fill */
  --color-pink: #CC0066; /* hsl(330, 100%, 40%) · fill */
  --color-light-red: #FFA8CD; /* hsl(334, 100%, 83%) · fill */
  --color-dark-blue-2: #0B051D; /* hsl(255, 71%, 7%) · fill */
  --color-cyan: #00A2E5; /* hsl(198, 100%, 45%) · fill */
  --color-blue-5: #7375CF; /* hsl(239, 49%, 63%) · fill */
  --color-orange-3: #F79E1B; /* hsl(36, 93%, 54%) · fill */
  --color-orange-4: #FF5F00; /* hsl(22, 100%, 50%) · fill */
  --color-dark-blue-3: #003087; /* hsl(219, 100%, 26%) · fill */
  --color-dark-blue-4: #012169; /* hsl(222, 98%, 21%) · fill */
  --color-blue-6: #5A31F4; /* hsl(253, 90%, 57%) · fill */
  --color-dark-blue-5: #005B9A; /* hsl(205, 100%, 30%) · fill */
  --color-red-5: #E9292D; /* hsl(359, 81%, 54%) · fill */
  --color-blue-7: #0E73B9; /* hsl(205, 86%, 39%) · fill */
  --color-dark-cyan: #059DA4; /* hsl(183, 94%, 33%) · fill */
  --color-dark-blue-6: #142688; /* hsl(231, 74%, 31%) · fill */

  /* ── Core: Typography ── */
  --font-size-2xs: 10px;
  --font-size-xs: 11.8257px;
  --font-size-sm: 12px;
  --font-size-base: 12.8229px;
  --font-size-lg: 13px;
  --font-size-xl: 13.3333px;
  --font-size-2xl: 14px;
  --font-size-3xl: 14.7821px;
  --font-size-4xl: 15.5641px;
  --font-size-5xl: 16px;
  --font-size-6xl: 17.5653px;
  --font-size-18px: 18px;
  --font-size-19px: 19.1294px;
  --font-size-20px: 20px;
  --font-size-21px: 21.3354px;
  --font-size-24px: 24px;
  --font-size-26px: 25.5408px;
  --font-size-28px: 28.1658px;
  --font-size-29px: 28.6196px;
  --font-size-30px: 30px;
  --font-size-32px: 32px;
  --font-size-38px: 38.1594px;
  --font-size-54px: 53.5909px;
  --font-size-75px: 75px;
  --font-family-base: Times;
  --font-family-2: BugattiRegular;
  --font-family-3: BugattiBold;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --font-weight-black: 900;
  --line-height-tight: 10px;
  --line-height-snug: 11.8257px;
  --line-height-normal: 12.8229px;
  --line-height-relaxed: 14px;
  --line-height-loose: 14.7821px;
  --line-height-lh-6: 16px;
  --line-height-lh-7: 17.5px;
  --line-height-lh-8: 19.1294px;
  --line-height-lh-9: 19.5px;
  --line-height-lh-10: 20.5903px;
  --line-height-lh-11: 21.9566px;
  --line-height-lh-12: 22.5px;
  --line-height-lh-13: 24px;
  --line-height-lh-14: 25px;
  --line-height-lh-15: 25.5408px;
  --line-height-lh-16: 26.6692px;
  --line-height-lh-17: 28.1658px;
  --line-height-lh-18: 28.6196px;
  --line-height-lh-19: 30px;
  --line-height-lh-20: 32px;
  --line-height-lh-21: 38.1594px;
  --line-height-lh-22: 53.5909px;
  --line-height-lh-23: 75px;
  --letter-spacing-tight: -3px;
  --letter-spacing-normal: -2.14364px;
  --letter-spacing-wide: -1.14478px;
  --letter-spacing-wider: -1.06677px;
  --letter-spacing-widest: -0.96px;
  --letter-spacing-ls-6: -0.9px;
  --letter-spacing-ls-7: -0.858587px;
  --letter-spacing-ls-8: -0.75px;
  --letter-spacing-ls-9: -0.704145px;
  --letter-spacing-ls-10: -0.6px;
  --letter-spacing-ls-11: -0.573883px;
  --letter-spacing-ls-12: -0.514756px;
  --letter-spacing-ls-13: -0.4px;
  --letter-spacing-ls-14: 1px;

  /* ── Layout: Spacing ── */
  --space-1: 1.90797px;
  --space-2: 2px;
  --space-3: 2.67954px;
  --space-4: 3.05276px;
  --space-5: 4px;
  --space-6: 4.28727px;
  --space-8: 5px;
  --space-10: 6px;
  --space-12: 6.5px;
  --space-16: 8px;
  --space-20: 9.53986px;
  --space-24: 30px;
  --space-32: 60px;
  --space-40: 14px;
  --space-48: 16px;
  --space-64: 16.995px;
  --space-80: 18px;
  --space-96: 20px;
  --space-128: 22px;
  --space-160: 23.8496px;
  --space-192: 24px;
  --space-256: 26px;
  --space-23: 28px;
  --space-25: 32px;
  --space-26: 35px;
  --space-27: 36px;
  --space-28: 40px;
  --space-29: 48px;
  --space-30: 52px;
  --space-31: 56px;
  --space-33: 70px;
  --space-34: 72px;
  --space-35: 95.4099px;
  --space-36: 100px;

  /* ── Borders ── */
  --border-width-hairline: 1px;
  --border-width-thin: 2px;
  --radius-sm: 0px 0px 16px 16px;
  --radius-md: 0px 34px 34px 0px;
  --radius-lg: 0px 0px 17.8787px 17.8787px;
  --radius-xl: 0px 0px 8px 8px;
  --radius-2xl: 6px;
  --radius-full: 8px 8px 0px 0px;
  --radius-r7: 10px;
  --radius-r8: 11.9305px;
  --radius-r9: 11.9305px 11.9305px 0px 0px;
  --radius-r10: 11.9305px 11.9305px 17.8787px 17.8787px;
  --radius-r11: 12px;
  --radius-r12: 17.8787px 17.8787px 0px 0px;
  --radius-r13: 17.8787px;
  --radius-r14: 24px 24px 0px 0px;
  --radius-r15: 34px 0px 0px 34px;
  --radius-r16: 34px 0px 0px;
  --radius-r17: 50%;
  --radius-r18: 60px;
  --radius-r19: 1.67772e+07px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgba(168, 232, 226, 0) 0px 0px 0px 0px;
  --shadow-md: rgba(168, 232, 226, 0.1) 0px 0px 0px 0px;

  /* ── Motion ── */
  --duration-instant: 0.1s;
  --duration-fast: 0.2s;
  --duration-normal: 0.25s;
  --duration-slow: 0.3s;
  --duration-slower: 0.5s;
  --duration-duration-6: 0.6s;
  --duration-duration-7: 0.7s;
  --duration-duration-8: 0.8s;
  --duration-duration-9: 1s;
  --duration-duration-10: 2s;

  /* ── Layout: Z-Index ── */
  --z-1: -100;
  --z-2: -1;
  --z-3: 1;
  --z-4: 2;
  --z-5: 3;
  --z-6: 10;
  --z-7: 20;
  --z-8: 25;
  --z-9: 30;
  --z-10: 35;
  --z-11: 40;
  --z-12: 50;

  /* ── Breakpoints ── */
  --breakpoint-xs: 400px;
  --breakpoint-sm: 639px;
  --breakpoint-md: 640px;
  --breakpoint-lg: 750px;
  --breakpoint-xl: 767px;
  --breakpoint-2xl: 768px;
  --breakpoint-3xl: 1023px;
  --breakpoint-bp-8: 1024px;
  --breakpoint-bp-9: 1200px;
  --breakpoint-bp-10: 1279px;
  --breakpoint-bp-11: 1280px;
  --breakpoint-bp-12: 1400px;
  --breakpoint-bp-13: 1536px;
  --breakpoint-bp-14: 1920px;
  --breakpoint-bp-15: 2200px;

  /* ── Opacity ── */
  --opacity-7: 0.07;
  --opacity-20: 0.2;
  --opacity-30: 0.3;
  --opacity-35: 0.35;
  --opacity-40: 0.4;
  --opacity-60: 0.6;
  --opacity-65: 0.65;
  --opacity-80: 0.8;
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://bugatti.store/",
    "title": "Official Bugatti Store",
    "generatedAt": "2026-04-14T07:58:59.995Z"
  },
  "core": {
    "color": {
      "white": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×5230"
      },
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "background · ×2099"
      },
      "light-gray": {
        "$value": "#E1E1E1",
        "$type": "color",
        "$description": "background · ×594"
      },
      "blue": {
        "$value": "#004BFA",
        "$type": "color",
        "$description": "background · ×539"
      },
      "dark-gray": {
        "$value": "#171717",
        "$type": "color",
        "$description": "background · ×153"
      },
      "red": {
        "$value": "#E11D48",
        "$type": "color",
        "$description": "background · ×43"
      },
      "light-cyan": {
        "$value": "rgba(168, 232, 226, 0.1)",
        "$type": "color",
        "$description": "shadow · ×32"
      },
      "red-2": {
        "$value": "#BE123C",
        "$type": "color",
        "$description": "text · ×10"
      },
      "light-gray-2": {
        "$value": "rgba(225, 225, 225, 0.1)",
        "$type": "color",
        "$description": "gradient · ×5"
      },
      "blue-2": {
        "$value": "#006FCF",
        "$type": "color",
        "$description": "fill · ×5"
      },
      "white-2": {
        "$value": "#FAFAFA",
        "$type": "color",
        "$description": "text · ×4"
      },
      "dark-gray-2": {
        "$value": "#1D1C1C",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "dark-gray-3": {
        "$value": "#231F20",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "blue-3": {
        "$value": "#3086C8",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-gray-4": {
        "$value": "#232323",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "red-3": {
        "$value": "#EB001B",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-gray-5": {
        "$value": "#1F1F1F",
        "$type": "color",
        "$description": "background · ×1"
      },
      "dark-gray-6": {
        "$value": "rgba(23, 23, 23, 0.1)",
        "$type": "color",
        "$description": "border · ×1"
      },
      "dark-gray-7": {
        "$value": "rgba(23, 23, 23, 0.4)",
        "$type": "color",
        "$description": "background · ×1"
      },
      "dark-blue": {
        "$value": "#1E3764",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange": {
        "$value": "#F48120",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-gray-8": {
        "$value": "#5F6368",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "blue-4": {
        "$value": "#4285F4",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green": {
        "$value": "#34A853",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-2": {
        "$value": "#FBBC04",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-4": {
        "$value": "#EA4335",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow": {
        "$value": "#FFF48D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "pink": {
        "$value": "#CC0066",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-red": {
        "$value": "#FFA8CD",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-blue-2": {
        "$value": "#0B051D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "cyan": {
        "$value": "#00A2E5",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "blue-5": {
        "$value": "#7375CF",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-3": {
        "$value": "#F79E1B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-4": {
        "$value": "#FF5F00",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-blue-3": {
        "$value": "#003087",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-blue-4": {
        "$value": "#012169",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "blue-6": {
        "$value": "#5A31F4",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-blue-5": {
        "$value": "#005B9A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-5": {
        "$value": "#E9292D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "blue-7": {
        "$value": "#0E73B9",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-cyan": {
        "$value": "#059DA4",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-blue-6": {
        "$value": "#142688",
        "$type": "color",
        "$description": "fill · ×1"
      }
    },
    "fontSize": {
      "font-size-2xs": {
        "$value": "10px",
        "$type": "dimension"
      },
      "font-size-xs": {
        "$value": "11.8257px",
        "$type": "dimension"
      },
      "font-size-sm": {
        "$value": "12px",
        "$type": "dimension"
      },
      "font-size-base": {
        "$value": "12.8229px",
        "$type": "dimension"
      },
      "font-size-lg": {
        "$value": "13px",
        "$type": "dimension"
      },
      "font-size-xl": {
        "$value": "13.3333px",
        "$type": "dimension"
      },
      "font-size-2xl": {
        "$value": "14px",
        "$type": "dimension"
      },
      "font-size-3xl": {
        "$value": "14.7821px",
        "$type": "dimension"
      },
      "font-size-4xl": {
        "$value": "15.5641px",
        "$type": "dimension"
      },
      "font-size-5xl": {
        "$value": "16px",
        "$type": "dimension"
      },
      "font-size-6xl": {
        "$value": "17.5653px",
        "$type": "dimension"
      },
      "font-size-18px": {
        "$value": "18px",
        "$type": "dimension"
      },
      "font-size-19px": {
        "$value": "19.1294px",
        "$type": "dimension"
      },
      "font-size-20px": {
        "$value": "20px",
        "$type": "dimension"
      },
      "font-size-21px": {
        "$value": "21.3354px",
        "$type": "dimension"
      },
      "font-size-24px": {
        "$value": "24px",
        "$type": "dimension"
      },
      "font-size-26px": {
        "$value": "25.5408px",
        "$type": "dimension"
      },
      "font-size-28px": {
        "$value": "28.1658px",
        "$type": "dimension"
      },
      "font-size-29px": {
        "$value": "28.6196px",
        "$type": "dimension"
      },
      "font-size-30px": {
        "$value": "30px",
        "$type": "dimension"
      },
      "font-size-32px": {
        "$value": "32px",
        "$type": "dimension"
      },
      "font-size-38px": {
        "$value": "38.1594px",
        "$type": "dimension"
      },
      "font-size-54px": {
        "$value": "53.5909px",
        "$type": "dimension"
      },
      "font-size-75px": {
        "$value": "75px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "Times",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "BugattiRegular",
        "$type": "fontFamily"
      },
      "font-family-3": {
        "$value": "BugattiBold",
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
      },
      "font-weight-black": {
        "$value": "900",
        "$type": "fontWeight"
      }
    },
    "lineHeight": {
      "line-height-tight": {
        "$value": "10px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "11.8257px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "12.8229px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "14px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "14.7821px",
        "$type": "dimension"
      },
      "line-height-lh-6": {
        "$value": "16px",
        "$type": "dimension"
      },
      "line-height-lh-7": {
        "$value": "17.5px",
        "$type": "dimension"
      },
      "line-height-lh-8": {
        "$value": "19.1294px",
        "$type": "dimension"
      },
      "line-height-lh-9": {
        "$value": "19.5px",
        "$type": "dimension"
      },
      "line-height-lh-10": {
        "$value": "20.5903px",
        "$type": "dimension"
      },
      "line-height-lh-11": {
        "$value": "21.9566px",
        "$type": "dimension"
      },
      "line-height-lh-12": {
        "$value": "22.5px",
        "$type": "dimension"
      },
      "line-height-lh-13": {
        "$value": "24px",
        "$type": "dimension"
      },
      "line-height-lh-14": {
        "$value": "25px",
        "$type": "dimension"
      },
      "line-height-lh-15": {
        "$value": "25.5408px",
        "$type": "dimension"
      },
      "line-height-lh-16": {
        "$value": "26.6692px",
        "$type": "dimension"
      },
      "line-height-lh-17": {
        "$value": "28.1658px",
        "$type": "dimension"
      },
      "line-height-lh-18": {
        "$value": "28.6196px",
        "$type": "dimension"
      },
      "line-height-lh-19": {
        "$value": "30px",
        "$type": "dimension"
      },
      "line-height-lh-20": {
        "$value": "32px",
        "$type": "dimension"
      },
      "line-height-lh-21": {
        "$value": "38.1594px",
        "$type": "dimension"
      },
      "line-height-lh-22": {
        "$value": "53.5909px",
        "$type": "dimension"
      },
      "line-height-lh-23": {
        "$value": "75px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "-3px",
        "$type": "dimension"
      },
      "letter-spacing-normal": {
        "$value": "-2.14364px",
        "$type": "dimension"
      },
      "letter-spacing-wide": {
        "$value": "-1.14478px",
        "$type": "dimension"
      },
      "letter-spacing-wider": {
        "$value": "-1.06677px",
        "$type": "dimension"
      },
      "letter-spacing-widest": {
        "$value": "-0.96px",
        "$type": "dimension"
      },
      "letter-spacing-ls-6": {
        "$value": "-0.9px",
        "$type": "dimension"
      },
      "letter-spacing-ls-7": {
        "$value": "-0.858587px",
        "$type": "dimension"
      },
      "letter-spacing-ls-8": {
        "$value": "-0.75px",
        "$type": "dimension"
      },
      "letter-spacing-ls-9": {
        "$value": "-0.704145px",
        "$type": "dimension"
      },
      "letter-spacing-ls-10": {
        "$value": "-0.6px",
        "$type": "dimension"
      },
      "letter-spacing-ls-11": {
        "$value": "-0.573883px",
        "$type": "dimension"
      },
      "letter-spacing-ls-12": {
        "$value": "-0.514756px",
        "$type": "dimension"
      },
      "letter-spacing-ls-13": {
        "$value": "-0.4px",
        "$type": "dimension"
      },
      "letter-spacing-ls-14": {
        "$value": "1px",
        "$type": "dimension"
      }
    }
  },
  "layout": {
    "spacing": {
      "space-1": {
        "$value": "1.90797px",
        "$type": "dimension"
      },
      "space-2": {
        "$value": "2px",
        "$type": "dimension"
      },
      "space-3": {
        "$value": "2.67954px",
        "$type": "dimension"
      },
      "space-4": {
        "$value": "3.05276px",
        "$type": "dimension"
      },
      "space-5": {
        "$value": "4px",
        "$type": "dimension"
      },
      "space-6": {
        "$value": "4.28727px",
        "$type": "dimension"
      },
      "space-8": {
        "$value": "5px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "6px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "6.5px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "8px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "9.53986px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "30px",
        "$type": "dimension"
      },
      "space-32": {
        "$value": "60px",
        "$type": "dimension"
      },
      "space-40": {
        "$value": "14px",
        "$type": "dimension"
      },
      "space-48": {
        "$value": "16px",
        "$type": "dimension"
      },
      "space-64": {
        "$value": "16.995px",
        "$type": "dimension"
      },
      "space-80": {
        "$value": "18px",
        "$type": "dimension"
      },
      "space-96": {
        "$value": "20px",
        "$type": "dimension"
      },
      "space-128": {
        "$value": "22px",
        "$type": "dimension"
      },
      "space-160": {
        "$value": "23.8496px",
        "$type": "dimension"
      },
      "space-192": {
        "$value": "24px",
        "$type": "dimension"
      },
      "space-256": {
        "$value": "26px",
        "$type": "dimension"
      },
      "space-23": {
        "$value": "28px",
        "$type": "dimension"
      },
      "space-25": {
        "$value": "32px",
        "$type": "dimension"
      },
      "space-26": {
        "$value": "35px",
        "$type": "dimension"
      },
      "space-27": {
        "$value": "36px",
        "$type": "dimension"
      },
      "space-28": {
        "$value": "40px",
        "$type": "dimension"
      },
      "space-29": {
        "$value": "48px",
        "$type": "dimension"
      },
      "space-30": {
        "$value": "52px",
        "$type": "dimension"
      },
      "space-31": {
        "$value": "56px",
        "$type": "dimension"
      },
      "space-33": {
        "$value": "70px",
        "$type": "dimension"
      },
      "space-34": {
        "$value": "72px",
        "$type": "dimension"
      },
      "space-35": {
        "$value": "95.4099px",
        "$type": "dimension"
      },
      "space-36": {
        "$value": "100px",
        "$type": "dimension"
      }
    },
    "zIndex": {
      "z-1": {
        "$value": "-100",
        "$type": "number"
      },
      "z-2": {
        "$value": "-1",
        "$type": "number"
      },
      "z-3": {
        "$value": "1",
        "$type": "number"
      },
      "z-4": {
        "$value": "2",
        "$type": "number"
      },
      "z-5": {
        "$value": "3",
        "$type": "number"
      },
      "z-6": {
        "$value": "10",
        "$type": "number"
      },
      "z-7": {
        "$value": "20",
        "$type": "number"
      },
      "z-8": {
        "$value": "25",
        "$type": "number"
      },
      "z-9": {
        "$value": "30",
        "$type": "number"
      },
      "z-10": {
        "$value": "35",
        "$type": "number"
      },
      "z-11": {
        "$value": "40",
        "$type": "number"
      },
      "z-12": {
        "$value": "50",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "400px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "639px",
        "$type": "dimension"
      },
      "breakpoint-md": {
        "$value": "640px",
        "$type": "dimension"
      },
      "breakpoint-lg": {
        "$value": "750px",
        "$type": "dimension"
      },
      "breakpoint-xl": {
        "$value": "767px",
        "$type": "dimension"
      },
      "breakpoint-2xl": {
        "$value": "768px",
        "$type": "dimension"
      },
      "breakpoint-3xl": {
        "$value": "1023px",
        "$type": "dimension"
      },
      "breakpoint-bp-8": {
        "$value": "1024px",
        "$type": "dimension"
      },
      "breakpoint-bp-9": {
        "$value": "1200px",
        "$type": "dimension"
      },
      "breakpoint-bp-10": {
        "$value": "1279px",
        "$type": "dimension"
      },
      "breakpoint-bp-11": {
        "$value": "1280px",
        "$type": "dimension"
      },
      "breakpoint-bp-12": {
        "$value": "1400px",
        "$type": "dimension"
      },
      "breakpoint-bp-13": {
        "$value": "1536px",
        "$type": "dimension"
      },
      "breakpoint-bp-14": {
        "$value": "1920px",
        "$type": "dimension"
      },
      "breakpoint-bp-15": {
        "$value": "2200px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
        "$value": "0px 0px 16px 16px",
        "$type": "dimension"
      },
      "radius-md": {
        "$value": "0px 34px 34px 0px",
        "$type": "dimension"
      },
      "radius-lg": {
        "$value": "0px 0px 17.8787px 17.8787px",
        "$type": "dimension"
      },
      "radius-xl": {
        "$value": "0px 0px 8px 8px",
        "$type": "dimension"
      },
      "radius-2xl": {
        "$value": "6px",
        "$type": "dimension"
      },
      "radius-full": {
        "$value": "8px 8px 0px 0px",
        "$type": "dimension"
      },
      "radius-r7": {
        "$value": "10px",
        "$type": "dimension"
      },
      "radius-r8": {
        "$value": "11.9305px",
        "$type": "dimension"
      },
      "radius-r9": {
        "$value": "11.9305px 11.9305px 0px 0px",
        "$type": "dimension"
      },
      "radius-r10": {
        "$value": "11.9305px 11.9305px 17.8787px 17.8787px",
        "$type": "dimension"
      },
      "radius-r11": {
        "$value": "12px",
        "$type": "dimension"
      },
      "radius-r12": {
        "$value": "17.8787px 17.8787px 0px 0px",
        "$type": "dimension"
      },
      "radius-r13": {
        "$value": "17.8787px",
        "$type": "dimension"
      },
      "radius-r14": {
        "$value": "24px 24px 0px 0px",
        "$type": "dimension"
      },
      "radius-r15": {
        "$value": "34px 0px 0px 34px",
        "$type": "dimension"
      },
      "radius-r16": {
        "$value": "34px 0px 0px",
        "$type": "dimension"
      },
      "radius-r17": {
        "$value": "50%",
        "$type": "dimension"
      },
      "radius-r18": {
        "$value": "60px",
        "$type": "dimension"
      },
      "radius-r19": {
        "$value": "1.67772e+07px",
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
    "shadow": {
      "shadow-sm": {
        "$value": "rgba(168, 232, 226, 0) 0px 0px 0px 0px",
        "$type": "shadow"
      },
      "shadow-md": {
        "$value": "rgba(168, 232, 226, 0.1) 0px 0px 0px 0px",
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
        "$value": "0.25s",
        "$type": "duration"
      },
      "duration-slow": {
        "$value": "0.3s",
        "$type": "duration"
      },
      "duration-slower": {
        "$value": "0.5s",
        "$type": "duration"
      },
      "duration-duration-6": {
        "$value": "0.6s",
        "$type": "duration"
      },
      "duration-duration-7": {
        "$value": "0.7s",
        "$type": "duration"
      },
      "duration-duration-8": {
        "$value": "0.8s",
        "$type": "duration"
      },
      "duration-duration-9": {
        "$value": "1s",
        "$type": "duration"
      },
      "duration-duration-10": {
        "$value": "2s",
        "$type": "duration"
      }
    },
    "easing": {}
  },
  "opacity": {
    "opacity-7": {
      "$value": 0.07,
      "$type": "number"
    },
    "opacity-20": {
      "$value": 0.2,
      "$type": "number"
    },
    "opacity-30": {
      "$value": 0.3,
      "$type": "number"
    },
    "opacity-35": {
      "$value": 0.35,
      "$type": "number"
    },
    "opacity-40": {
      "$value": 0.4,
      "$type": "number"
    },
    "opacity-60": {
      "$value": 0.6,
      "$type": "number"
    },
    "opacity-65": {
      "$value": 0.65,
      "$type": "number"
    },
    "opacity-80": {
      "$value": 0.8,
      "$type": "number"
    }
  }
}
```
