# Airtable: Build Enterprise-ready AI Workflows, Apps & Agents - Airtable — Design System

**Source:** https://www.airtable.com/  
**Generated:** 13/04/2026, 22:43:54  
**Extracted:** 66 colors · 42 type tokens · 22 spacing steps · 23 breakpoints · 7 motion tokens

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
| `--color-dark-gray` | `#181D26` | hsl(219, 23%, 12%) | ×1199 |
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×937 |
| `--color-white` | `#FFFFFF` | hsl(0, 0%, 100%) | ×107 |
| `--color-orange` | `#FCB42A` | hsl(39, 97%, 58%) | ×24 |
| `--color-blue` | `#254FAD` | hsl(221, 65%, 41%) | ×20 |
| `--color-dark-green` | `#0A2E0E` | hsl(127, 64%, 11%) | ×20 |
| `--color-dark-orange` | `#AA2D00` | hsl(16, 100%, 33%) | ×17 |
| `--color-light-pink` | `#FA91E0` | hsl(315, 91%, 77%) | ×17 |
| `--color-white-2` | `#F8FAFC` | hsl(210, 40%, 98%) | ×14 |
| `--color-dark-blue-2` | `rgba(1, 20, 53, 0.12)` | hsl(220, 100%, 10%) | ×9 |
| `--color-dark-green-2` | `#214224` | hsl(125, 33%, 19%) | ×9 |
| `--color-light-cyan` | `#C7E5F2` | hsl(198, 62%, 86%) | ×4 |
| `--color-light-orange` | `#FCAB79` | hsl(23, 96%, 73%) | ×3 |
| `--color-dark-red` | `#912E1F` | hsl(8, 65%, 35%) | ×2 |
| `--color-white-3` | `#F0F6FF` | hsl(216, 100%, 97%) | ×1 |
| `--color-light-green` | `#B6E995` | hsl(96, 66%, 75%) | ×1 |
| `--color-dark-blue-4` | `#002D98` | hsl(222, 100%, 30%) | ×1 |
| `--color-light-orange-2` | `#FAF5E8` | hsl(43, 64%, 95%) | ×1 |
| `--color-light-gray-3` | `#CCCCCC` | hsl(0, 0%, 80%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-gray-2` | `#333333` | hsl(0, 0%, 20%) | ×1009 |
| `--color-dark-gray-3` | `#444444` | hsl(0, 0%, 27%) | ×336 |
| `--color-dark-gray-4` | `#333840` | hsl(217, 11%, 23%) | ×233 |
| `--color-dark-blue` | `#040E20` | hsl(219, 78%, 7%) | ×155 |
| `--color-dark-gray-5` | `#41454D` | hsl(220, 8%, 28%) | ×82 |
| `--color-mid-gray` | `#9297A0` | hsl(219, 7%, 60%) | ×30 |
| `--color-dark-gray-6` | `rgba(7, 12, 20, 0.82)` | hsl(217, 48%, 5%) | ×14 |
| `--color-blue-2` | `#1B61C9` | hsl(216, 76%, 45%) | ×12 |
| `--color-cyan` | `#0DBDB4` | hsl(177, 87%, 40%) | ×11 |
| `--color-dark-cyan` | `#0076A8` | hsl(198, 100%, 33%) | ×2 |
| `--color-dark-cyan-2` | `#097A76` | hsl(178, 86%, 26%) | ×2 |
| `--color-dark-orange-2` | `#423719` | hsl(44, 45%, 18%) | ×2 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray` | `#E0E2E6` | hsl(220, 11%, 89%) | ×9 |

### Shadow Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-blue-4` | `rgba(45, 127, 249, 0.28)` | hsl(216, 93%, 58%) | ×5 |
| `--color-dark-blue-3` | `rgba(15, 48, 106, 0.05)` | hsl(225, 66%, 23%) | ×4 |

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-purple` | `#9B67F0` | hsl(263, 82%, 67%) | ×12 |
| `--color-red` | `#FC4777` | hsl(344, 97%, 63%) | ×10 |
| `--color-blue-3` | `#458FFF` | hsl(216, 100%, 64%) | ×9 |
| `--color-orange-2` | `#F5620C` | hsl(22, 92%, 50%) | ×7 |
| `--color-pink` | `#E848C0` | hsl(315, 78%, 60%) | ×6 |
| `--color-cyan-2` | `#0AB2FA` | hsl(198, 96%, 51%) | ×6 |
| `--color-light-blue` | `#C0C6D1` | hsl(219, 16%, 79%) | ×5 |
| `--color-mid-gray-2` | `#949494` | hsl(0, 0%, 58%) | ×3 |
| `--color-cyan-3` | `#39CAFF` | hsl(196, 100%, 61%) | ×2 |
| `--color-purple-2` | `#7C37EF` | hsl(263, 85%, 58%) | ×2 |
| `--color-green` | `#39BF45` | hsl(125, 54%, 49%) | ×2 |
| `--color-mid-gray-3` | `#A6A6A6` | hsl(0, 0%, 65%) | ×2 |
| `--color-pink-2` | `#DD04A8` | hsl(315, 96%, 44%) | ×1 |
| `--color-light-pink-2` | `#F797EF` | hsl(305, 86%, 78%) | ×1 |
| `--color-dark-cyan-3` | `#0D7F78` | hsl(176, 81%, 27%) | ×1 |
| `--color-cyan-4` | `#36C5F0` | hsl(194, 86%, 58%) | ×1 |
| `--color-cyan-5` | `#2EB67D` | hsl(155, 60%, 45%) | ×1 |
| `--color-orange-3` | `#ECB22E` | hsl(42, 83%, 55%) | ×1 |
| `--color-red-2` | `#E01E5A` | hsl(341, 76%, 50%) | ×1 |
| `--color-blue-5` | `#4185F3` | hsl(217, 88%, 60%) | ×1 |
| `--color-blue-6` | `#1767D1` | hsl(214, 80%, 45%) | ×1 |
| `--color-red-3` | `#E94235` | hsl(4, 80%, 56%) | ×1 |
| `--color-green-2` | `#30A753` | hsl(138, 55%, 42%) | ×1 |
| `--color-yellow` | `#F9BC00` | hsl(45, 100%, 49%) | ×1 |
| `--color-dark-green-3` | `#0F8038` | hsl(142, 79%, 28%) | ×1 |
| `--color-cyan-6` | `#00A1E0` | hsl(197, 100%, 44%) | ×1 |
| `--color-blue-7` | `#2684FF` | hsl(214, 100%, 57%) | ×1 |
| `--color-dark-cyan-4` | `#03363D` | hsl(187, 91%, 13%) | ×1 |
| `--color-white-4` | `#EBF7FC` | hsl(198, 74%, 95%) | ×1 |
| `--color-cyan-7` | `#01DDD5` | hsl(178, 99%, 44%) | ×1 |
| `--color-light-gray-2` | `#EBF7F7` | hsl(180, 43%, 95%) | ×1 |
| `--color-light-cyan-2` | `#C7EBE9` | hsl(177, 47%, 85%) | ×1 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `Times` |
| `--font-family-2` | `Haas Groot Disp` |
| `--font-family-3` | `Haas` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `14px` |  |
| `--font-size-xs` | `16px` |  |
| `--font-size-sm` | `18px` |  |
| `--font-size-base` | `20px` |  |
| `--font-size-lg` | `24px` |  |
| `--font-size-xl` | `32px` |  |
| `--font-size-2xl` | `40px` |  |
| `--font-size-3xl` | `48px` |  |

### Font Weights

| Token | Weight |
| --- | --- |
| `--font-weight-regular` | `400` |
| `--font-weight-medium` | `500` |
| `--font-weight-semibold` | `600` |
| `--font-weight-black` | `900` |

### Line Heights

| Token | Value |
| --- | --- |
| `--line-height-tight` | `17.5px` |
| `--line-height-snug` | `18.9px` |
| `--line-height-normal` | `20px` |
| `--line-height-relaxed` | `20.8px` |
| `--line-height-loose` | `21.6px` |
| `--line-height-lh-6` | `24px` |
| `--line-height-lh-7` | `25px` |
| `--line-height-lh-8` | `26px` |
| `--line-height-lh-9` | `27px` |
| `--line-height-lh-10` | `30px` |
| `--line-height-lh-11` | `32.4px` |
| `--line-height-lh-12` | `36.8px` |
| `--line-height-lh-13` | `40px` |
| `--line-height-lh-14` | `41.6px` |
| `--line-height-lh-15` | `48px` |
| `--line-height-lh-16` | `52px` |
| `--line-height-lh-17` | `55.2px` |
| `--line-height-lh-18` | `72px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `0.08px` |
| `--letter-spacing-normal` | `0.1px` |
| `--letter-spacing-wide` | `0.12px` |
| `--letter-spacing-wider` | `0.14px` |
| `--letter-spacing-widest` | `0.16px` |
| `--letter-spacing-ls-6` | `0.18px` |
| `--letter-spacing-ls-7` | `0.2px` |
| `--letter-spacing-ls-8` | `0.28px` |
| `--letter-spacing-ls-9` | `0.7px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `1px` | ×2 |
| `--space-2` | `2px` | ×24 |
| `--space-3` | `3px` | ×4 |
| `--space-4` | `4px` | ×57 |
| `--space-5` | `6px` | ×14 |
| `--space-6` | `7px` | ×4 |
| `--space-8` | `8px` | ×21 |
| `--space-10` | `12px` | ×449 |
| `--space-12` | `16px` | ×222 |
| `--space-16` | `20px` | ×21 |
| `--space-20` | `22px` | ×6 |
| `--space-24` | `24px` | ×121 |
| `--space-32` | `32px` | ×79 |
| `--space-40` | `40px` | ×36 |
| `--space-48` | `48px` | ×250 |
| `--space-64` | `64px` | ×12 |
| `--space-80` | `72px` | ×4 |
| `--space-96` | `96px` | ×1 |
| `--space-128` | `120.984px` | ×13 |
| `--space-160` | `335px` | ×1 |
| `--space-192` | `337.492px` | ×2 |
| `--space-256` | `338.703px` | ×1 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `1px` | ×92 |
| `--border-width-thin` | `2px` | ×320 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `2px` | ×4 |
| `--radius-md` | `6px` | ×3 |
| `--radius-lg` | `10px` | ×3 |
| `--radius-xl` | `12px` | ×13 |
| `--radius-2xl` | `16px` | ×5 |
| `--radius-full` | `20px` | ×1 |
| `--radius-r7` | `24px` | ×5 |
| `--radius-r8` | `32px` | ×8 |
| `--radius-r9` | `50%` | ×6 |
| `--radius-r10` | `999px` | ×3 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgba(0, 0, 0, 0.32) 0px 0px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 2px 0px, rgba(45, 127, 249, 0.28) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 0.5px inset` | ×5 |
| `--shadow-md` | `rgba(15, 48, 106, 0.05) 0px 0px 20px 0px` | ×4 |
| `--shadow-lg` | `rgba(0, 0, 0, 0.32) 0px 0px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 2px 0px, rgba(0, 0, 0, 0.08) 0px 1px 3px 0px, rgba(1, 20, 53, 0.12) 0px 0px 0px 1px inset` | ×1 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.15s` | ×129 |
| `--duration-fast` | `0.2s` | ×13 |
| `--duration-normal` | `0.25s` | ×29 |
| `--duration-slow` | `0.3s` | ×4 |
| `--duration-slower` | `0.6s` | ×16 |

### Easing Functions

| Token | Value | Usage |
| --- | --- | --- |
| `--easing-ease-in` | `ease-in` | ×153 |
| `--easing-linear` | `linear` | ×9 |

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `-15` |
| `--z-2` | `-10` |
| `--z-3` | `-1` |
| `--z-4` | `1` |
| `--z-5` | `2` |
| `--z-6` | `3` |
| `--z-7` | `4` |
| `--z-8` | `10` |
| `--z-9` | `9999` |
| `--z-10` | `2147483642` |
| `--z-11` | `2147483646` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `400px` |
| `--breakpoint-sm` | `426px` |
| `--breakpoint-md` | `530px` |
| `--breakpoint-lg` | `550px` |
| `--breakpoint-xl` | `600px` |
| `--breakpoint-2xl` | `642px` |
| `--breakpoint-3xl` | `720px` |
| `--breakpoint-bp-8` | `749px` |
| `--breakpoint-bp-9` | `768px` |
| `--breakpoint-bp-10` | `832px` |
| `--breakpoint-bp-11` | `834px` |
| `--breakpoint-bp-12` | `896px` |
| `--breakpoint-bp-13` | `904px` |
| `--breakpoint-bp-14` | `1024px` |
| `--breakpoint-bp-15` | `1080px` |
| `--breakpoint-bp-16` | `1100px` |
| `--breakpoint-bp-17` | `1184px` |
| `--breakpoint-bp-18` | `1344px` |
| `--breakpoint-bp-19` | `1350px` |
| `--breakpoint-bp-20` | `1408px` |
| `--breakpoint-bp-21` | `1440px` |
| `--breakpoint-bp-22` | `1600px` |
| `--breakpoint-bp-23` | `1664px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-10` | `0.1` | ×4 |
| `--opacity-12` | `0.12` | ×1 |
| `--opacity-20` | `0.2` | ×1 |
| `--opacity-25` | `0.25` | ×14 |
| `--opacity-50` | `0.5` | ×6 |
| `--opacity-70` | `0.7` | ×5 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-dark-gray-2` | `--color-dark-gray` | 1.34:1 | Fail |
| `--color-dark-gray-2` | `--color-black` | 1.66:1 | Fail |
| `--color-dark-gray-2` | `--color-white` | 12.63:1 | AAA |
| `--color-dark-gray-2` | `--color-orange` | 7.04:1 | AAA |
| `--color-dark-gray-2` | `--color-blue` | 1.68:1 | Fail |
| `--color-dark-gray-3` | `--color-dark-gray` | 1.74:1 | Fail |
| `--color-dark-gray-3` | `--color-black` | 2.16:1 | Fail |
| `--color-dark-gray-3` | `--color-white` | 9.74:1 | AAA |
| `--color-dark-gray-3` | `--color-orange` | 5.43:1 | AA |
| `--color-dark-gray-3` | `--color-blue` | 1.3:1 | Fail |
| `--color-dark-gray-4` | `--color-dark-gray` | 1.43:1 | Fail |
| `--color-dark-gray-4` | `--color-black` | 1.78:1 | Fail |
| `--color-dark-gray-4` | `--color-white` | 11.79:1 | AAA |
| `--color-dark-gray-4` | `--color-orange` | 6.57:1 | AA |
| `--color-dark-gray-4` | `--color-blue` | 1.57:1 | Fail |
| `--color-dark-blue` | `--color-dark-gray` | 1.14:1 | Fail |
| `--color-dark-blue` | `--color-black` | 1.09:1 | Fail |
| `--color-dark-blue` | `--color-white` | 19.29:1 | AAA |
| `--color-dark-blue` | `--color-orange` | 10.75:1 | AAA |
| `--color-dark-blue` | `--color-blue` | 2.57:1 | Fail |
| `--color-dark-gray-5` | `--color-dark-gray` | 1.76:1 | Fail |
| `--color-dark-gray-5` | `--color-black` | 2.18:1 | Fail |
| `--color-dark-gray-5` | `--color-white` | 9.62:1 | AAA |
| `--color-dark-gray-5` | `--color-orange` | 5.36:1 | AA |
| `--color-dark-gray-5` | `--color-blue` | 1.28:1 | Fail |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--mainNavWidth` | `702px` |
| `--mainNavHeight` | `79px` |
| `--theme_background` | `#fff` |
| `--theme_background-weak` | `#fff` |
| `--theme_background-medium` | `#f8fafc` |
| `--theme_background-strong` | `#e0e2e6` |
| `--theme_success-text` | `#006400` |
| `--theme_info-text` | `#254fad` |
| `--theme_text` | `#333840` |
| `--theme_text-weak` | `#040e20b0` |
| `--theme_text-strong` | `#181d26` |
| `--theme_upsell-text` | `#181d26` |
| `--theme_upsell-text-weak` | `#41454d` |
| `--theme_upsell-text-strong` | `#333840` |
| `--theme_info-border` | `#458fff` |
| `--theme_success-border` | `#39bf45` |
| `--theme_upsell-border` | `#9297a0` |
| `--theme_border` | `#040e20b0` |
| `--theme_border-weak` | `#0114351f` |
| `--theme_button-theme` | `light` |
| `--theme_anchor-theme` | `light` |
| `--theme_spotlight-background` | `radial-gradient(100% 107.48% at 0% 50%,#fcab7966 0%,#fc9ab44d 17.27%,#fa91e040 38.25%,#c6a9f533 50.79%,#95befc1f 68.23%,#79cef20d 85.42%,#76d6d100 100%),linear-gradient(0deg,#fff,#fff)` |
| `--theme_spotlight-background-weak` | `radial-gradient(50% 28.4% at 50% 0%,#fcab7966 0%,#fc9ab44d 17.27%,#fa91e040 38.25%,#c6a9f533 50.79%,#95befc1f 68.23%,#79cef20d 85.42%,#76d6d100 100%),linear-gradient(0deg,#fff,#fff)` |
| `--theme_spotlight-background-medium` | `radial-gradient(49.66% 53.37% at 50.34% 50%,#76d6d100 0%,#79cef21a 18.75%,#95befc33 36.46%,#c6a9f540 55.21%,#fa91e040 73.44%,#fc9ab44d 88.02%,#fcab7966 100%),linear-gradient(0deg,#fff,#fff)` |
| `--theme_spotlight-background-strong` | `linear-gradient(91.6deg,#f5620c -3.95%,#fc4777 14.34%,#e848c0 28.2%,#9b67f0 52.43%,#458fff 68.27%,#0ab2fa 86.46%,#0dbdb4 101.9%)` |
| `--theme_spotlight-text-strong` | `#fff` |
| `--theme_background-z20` | `#fff` |
| `--theme_button-background-primary` | `#1b61c9` |
| `--theme_button-background-primary-hover` | `linear-gradient(0deg,#00000040,#00000040),#254fad` |
| `--theme_button-background-primary-active` | `#1a3866` |
| `--theme_button-background-primary-focus` | `#254fad` |
| `--theme_button-background-primary-loading` | `#1a3866` |
| `--theme_button-background-primary-disabled` | `#e0e2e6` |
| `--theme_button-text-primary` | `#fff` |
| `--theme_button-text-primary-hover` | `#fff` |
| `--theme_button-text-primary-active` | `#fff` |
| `--theme_button-text-primary-focus` | `#fff` |
| `--theme_button-text-primary-loading` | `#fff` |
| `--theme_button-text-primary-disabled` | `#41454d` |
| `--theme_button-shadow-primary` | `0px 0px 1px #00000052,0px 0px 2px #00000014,0px 1px 3px #2d7ff947,inset 0px 0px 0px .5px #0000000f` |
| `--theme_button-shadow-primary-hover` | `0px 0px 1px #00000052,0px 0px 3px #0000001c,0px 1px 4px #2d7ff97a,inset 0px 0px 0px .5px #0000001f` |
| `--theme_button-shadow-primary-active` | `0px 0px 1px #00000052,0px 0px 3px #0000001c,0px 1px 4px #2d7ff97a,inset 0px 0px 0px .5px #0000001f` |
| `--theme_button-shadow-primary-focus` | `0px 0px 0px 2px #0768f880,0px 0px 1px #00000052,0px 0px 2px #00000014,0px 1px 3px #2d7ff947,inset 0px 0px 0px .5px #0000000f,inset 0 0 0 1px #fff` |
| `--theme_button-shadow-primary-loading` | `0px 0px 1px #00000052,0px 0px 3px #0000001c,0px 1px 4px #2d7ff97a,inset 0px 0px 0px .5px #0000001f` |
| `--theme_button-shadow-primary-disabled` | `inset 0 0 0 1px #9297a0` |
| `--theme_button-filter-primary` | `none` |
| `--theme_button-filter-primary-hover` | `none` |
| `--theme_button-filter-primary-active` | `none` |
| `--theme_button-filter-primary-focus` | `none` |
| `--theme_button-filter-primary-loading` | `none` |
| `--theme_button-filter-primary-disabled` | `none` |
| `--theme_button-background-secondary` | `#ffffff3d` |
| `--theme_button-background-secondary-hover` | `#0d52ac14` |
| `--theme_button-background-secondary-active` | `#ffffffa6` |
| `--theme_button-background-secondary-focus` | `#ffffffa6` |
| `--theme_button-background-secondary-loading` | `#ffffffa6` |
| `--theme_button-background-secondary-disabled` | `#e0e2e6` |
| `--theme_button-text-secondary` | `#181d26` |
| `--theme_button-text-secondary-hover` | `#254fad` |
| `--theme_button-text-secondary-active` | `#070c14d1` |
| `--theme_button-text-secondary-focus` | `#040e20b0` |
| `--theme_button-text-secondary-loading` | `#040e20b0` |
| `--theme_button-text-secondary-disabled` | `#040e20b0` |
| `--theme_button-shadow-secondary` | `0px 0px 1px #00000052,0px 0px 2px #00000014,0px 1px 3px #00000014,inset 0 0 0 1px #0114351f` |
| `--theme_button-shadow-secondary-hover` | `0px 0px 1px #00000052,0px 0px 2px #00000014,0px 1px 3px #00000014,inset 0 0 0 1px #458fff` |
| `--theme_button-shadow-secondary-active` | `0px 0px 1px #00000052,0px 0px 3px #0000001c,0px 1px 4px #0000001f,inset 0 0 0 1px #000e263b` |
| `--theme_button-shadow-secondary-focus` | `0px 0px 0px 2px #0768f880,0px 0px 1px #00000052,0px 0px 3px #0000001c,0px 1px 4px #0000001f,inset 0 0 0 1px #020d206e` |
| `--theme_button-shadow-secondary-loading` | `0px 0px 1px #00000052,0px 0px 2px #00000014,0px 1px 3px #00000014,inset 0 0 0 1px #0114351f` |
| `--theme_button-shadow-secondary-disabled` | `inset 0 0 0 1px #9297a0` |
| `--theme_button-filter-secondary` | `blur(6px)` |
| `--theme_button-filter-secondary-hover` | `blur(6px)` |
| `--theme_button-filter-secondary-active` | `none` |
| `--theme_button-filter-secondary-focus` | `none` |
| `--theme_button-filter-secondary-loading` | `none` |
| `--theme_button-filter-secondary-disabled` | `none` |
| `--theme_button-background-spotlight` | `linear-gradient(81deg,#ff00a8 0%,#7c37ef 100%),#1b61c9` |
| `--theme_button-background-spotlight-hover` | `linear-gradient(80deg,#ff00a8 0%,#7c37ef 52.45%),#1b61c9` |
| `--theme_button-background-spotlight-active` | `linear-gradient(81deg,#ff00a8 0%,#7c37ef 100%),#1b61c9` |
| `--theme_button-background-spotlight-focus` | `linear-gradient(81deg,#ff00a8 0%,#7c37ef 100%),#1b61c9` |
| `--theme_button-background-spotlight-loading` | `linear-gradient(81deg,#ff00a8 0%,#7c37ef 100%),#1b61c9` |
| `--theme_button-background-spotlight-disabled` | `#1b61c9` |
| `--theme_button-text-spotlight` | `#f9fcfff7` |
| `--theme_button-text-spotlight-hover` | `#fff` |
| `--theme_button-text-spotlight-active` | `#fff` |
| `--theme_button-text-spotlight-focus` | `#fff` |
| `--theme_button-text-spotlight-loading` | `#fff` |
| `--theme_button-text-spotlight-disabled` | `#fff` |
| `--theme_button-shadow-spotlight` | `0px 0px 1px 0px #00000052,0px 0px 2px 0px #00000014,0px 1px 3px 0px #2d7ff947` |
| `--theme_button-shadow-spotlight-hover` | `0px 0px 1px 0px #00000052,0px 0px 2px 0px #00000014,0px 1px 3px 0px #2d7ff947` |
| `--theme_button-shadow-spotlight-active` | `0px 0px 1px 0px #00000052,0px 0px 2px 0px #00000014,0px 1px 3px 0px #2d7ff947` |
| `--theme_button-shadow-spotlight-focus` | `0px 0px 1px 0px #00000052,0px 0px 2px 0px #00000014,0px 1px 3px 0px #2d7ff947` |
| `--theme_button-shadow-spotlight-loading` | `0px 0px 1px 0px #00000052,0px 0px 2px 0px #00000014,0px 1px 3px 0px #2d7ff947` |
| `--theme_button-shadow-spotlight-disabled` | `0px 0px 0px .5px #0000000f inset,0px 0px 1px 0px #00000052,0px 0px 2px 0px #00000014,0px 1px 3px 0px #2d7ff947` |
| `--theme_button-filter-spotlight` | `blur(6px)` |
| `--theme_button-filter-spotlight-hover` | `blur(6px)` |
| `--theme_button-filter-spotlight-active` | `none` |
| `--theme_button-filter-spotlight-focus` | `none` |
| `--theme_button-filter-spotlight-loading` | `none` |
| `--theme_button-filter-spotlight-disabled` | `none` |
| `--theme_anchor-link-primary` | `#1b61c9` |
| `--theme_anchor-link-primary-hover` | `#1b61c9cc` |
| `--theme_anchor-link-primary-focus` | `#1b61c9` |
| `--theme_anchor-link-primary-active` | `#1a3866` |
| `--theme_anchor-link-primary-disabled` | `#000e263b` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — Airtable: Build Enterprise-ready AI Workflows, Apps & Agents - Airtable
 * Source: https://www.airtable.com/
 * Generated: 13/04/2026, 22:43:54
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-dark-gray: #181D26; /* hsl(219, 23%, 12%) · background */
  --color-dark-gray-2: #333333; /* hsl(0, 0%, 20%) · text */
  --color-black: #000000; /* hsl(0, 0%, 0%) · background */
  --color-dark-gray-3: #444444; /* hsl(0, 0%, 27%) · text */
  --color-dark-gray-4: #333840; /* hsl(217, 11%, 23%) · text */
  --color-dark-blue: #040E20; /* hsl(219, 78%, 7%) · text */
  --color-white: #FFFFFF; /* hsl(0, 0%, 100%) · background */
  --color-dark-gray-5: #41454D; /* hsl(220, 8%, 28%) · text */
  --color-mid-gray: #9297A0; /* hsl(219, 7%, 60%) · text */
  --color-orange: #FCB42A; /* hsl(39, 97%, 58%) · background */
  --color-blue: #254FAD; /* hsl(221, 65%, 41%) · background */
  --color-dark-green: #0A2E0E; /* hsl(127, 64%, 11%) · background */
  --color-dark-orange: #AA2D00; /* hsl(16, 100%, 33%) · background */
  --color-light-pink: #FA91E0; /* hsl(315, 91%, 77%) · background */
  --color-dark-gray-6: rgba(7, 12, 20, 0.82); /* hsl(217, 48%, 5%) · text */
  --color-white-2: #F8FAFC; /* hsl(210, 40%, 98%) · background */
  --color-blue-2: #1B61C9; /* hsl(216, 76%, 45%) · text */
  --color-purple: #9B67F0; /* hsl(263, 82%, 67%) · fill */
  --color-cyan: #0DBDB4; /* hsl(177, 87%, 40%) · text */
  --color-red: #FC4777; /* hsl(344, 97%, 63%) · fill */
  --color-blue-3: #458FFF; /* hsl(216, 100%, 64%) · fill */
  --color-light-gray: #E0E2E6; /* hsl(220, 11%, 89%) · border */
  --color-dark-blue-2: rgba(1, 20, 53, 0.12); /* hsl(220, 100%, 10%) · background */
  --color-dark-green-2: #214224; /* hsl(125, 33%, 19%) · background */
  --color-orange-2: #F5620C; /* hsl(22, 92%, 50%) · fill */
  --color-pink: #E848C0; /* hsl(315, 78%, 60%) · fill */
  --color-cyan-2: #0AB2FA; /* hsl(198, 96%, 51%) · fill */
  --color-blue-4: rgba(45, 127, 249, 0.28); /* hsl(216, 93%, 58%) · shadow */
  --color-light-blue: #C0C6D1; /* hsl(219, 16%, 79%) · fill */
  --color-dark-blue-3: rgba(15, 48, 106, 0.05); /* hsl(225, 66%, 23%) · shadow */
  --color-light-cyan: #C7E5F2; /* hsl(198, 62%, 86%) · background */
  --color-mid-gray-2: #949494; /* hsl(0, 0%, 58%) · fill */
  --color-light-orange: #FCAB79; /* hsl(23, 96%, 73%) · background */
  --color-cyan-3: #39CAFF; /* hsl(196, 100%, 61%) · fill */
  --color-purple-2: #7C37EF; /* hsl(263, 85%, 58%) · fill */
  --color-dark-cyan: #0076A8; /* hsl(198, 100%, 33%) · text */
  --color-green: #39BF45; /* hsl(125, 54%, 49%) · fill */
  --color-dark-cyan-2: #097A76; /* hsl(178, 86%, 26%) · text */
  --color-dark-red: #912E1F; /* hsl(8, 65%, 35%) · background */
  --color-dark-orange-2: #423719; /* hsl(44, 45%, 18%) · text */
  --color-mid-gray-3: #A6A6A6; /* hsl(0, 0%, 65%) · fill */
  --color-white-3: #F0F6FF; /* hsl(216, 100%, 97%) · background */
  --color-pink-2: #DD04A8; /* hsl(315, 96%, 44%) · fill */
  --color-light-pink-2: #F797EF; /* hsl(305, 86%, 78%) · fill */
  --color-dark-cyan-3: #0D7F78; /* hsl(176, 81%, 27%) · fill */
  --color-cyan-4: #36C5F0; /* hsl(194, 86%, 58%) · fill */
  --color-cyan-5: #2EB67D; /* hsl(155, 60%, 45%) · fill */
  --color-orange-3: #ECB22E; /* hsl(42, 83%, 55%) · fill */
  --color-red-2: #E01E5A; /* hsl(341, 76%, 50%) · fill */
  --color-blue-5: #4185F3; /* hsl(217, 88%, 60%) · fill */
  --color-blue-6: #1767D1; /* hsl(214, 80%, 45%) · fill */
  --color-red-3: #E94235; /* hsl(4, 80%, 56%) · fill */
  --color-green-2: #30A753; /* hsl(138, 55%, 42%) · fill */
  --color-yellow: #F9BC00; /* hsl(45, 100%, 49%) · fill */
  --color-dark-green-3: #0F8038; /* hsl(142, 79%, 28%) · fill */
  --color-cyan-6: #00A1E0; /* hsl(197, 100%, 44%) · fill */
  --color-blue-7: #2684FF; /* hsl(214, 100%, 57%) · fill */
  --color-dark-cyan-4: #03363D; /* hsl(187, 91%, 13%) · fill */
  --color-white-4: #EBF7FC; /* hsl(198, 74%, 95%) · gradient */
  --color-cyan-7: #01DDD5; /* hsl(178, 99%, 44%) · fill */
  --color-light-gray-2: #EBF7F7; /* hsl(180, 43%, 95%) · gradient */
  --color-light-cyan-2: #C7EBE9; /* hsl(177, 47%, 85%) · gradient */
  --color-light-green: #B6E995; /* hsl(96, 66%, 75%) · background */
  --color-dark-blue-4: #002D98; /* hsl(222, 100%, 30%) · background */
  --color-light-orange-2: #FAF5E8; /* hsl(43, 64%, 95%) · background */
  --color-light-gray-3: #CCCCCC; /* hsl(0, 0%, 80%) · background */

  /* ── Core: Typography ── */
  --font-size-2xs: 14px;
  --font-size-xs: 16px;
  --font-size-sm: 18px;
  --font-size-base: 20px;
  --font-size-lg: 24px;
  --font-size-xl: 32px;
  --font-size-2xl: 40px;
  --font-size-3xl: 48px;
  --font-family-base: Times;
  --font-family-2: Haas Groot Disp;
  --font-family-3: Haas;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-black: 900;
  --line-height-tight: 17.5px;
  --line-height-snug: 18.9px;
  --line-height-normal: 20px;
  --line-height-relaxed: 20.8px;
  --line-height-loose: 21.6px;
  --line-height-lh-6: 24px;
  --line-height-lh-7: 25px;
  --line-height-lh-8: 26px;
  --line-height-lh-9: 27px;
  --line-height-lh-10: 30px;
  --line-height-lh-11: 32.4px;
  --line-height-lh-12: 36.8px;
  --line-height-lh-13: 40px;
  --line-height-lh-14: 41.6px;
  --line-height-lh-15: 48px;
  --line-height-lh-16: 52px;
  --line-height-lh-17: 55.2px;
  --line-height-lh-18: 72px;
  --letter-spacing-tight: 0.08px;
  --letter-spacing-normal: 0.1px;
  --letter-spacing-wide: 0.12px;
  --letter-spacing-wider: 0.14px;
  --letter-spacing-widest: 0.16px;
  --letter-spacing-ls-6: 0.18px;
  --letter-spacing-ls-7: 0.2px;
  --letter-spacing-ls-8: 0.28px;
  --letter-spacing-ls-9: 0.7px;

  /* ── Layout: Spacing ── */
  --space-1: 1px;
  --space-2: 2px;
  --space-3: 3px;
  --space-4: 4px;
  --space-5: 6px;
  --space-6: 7px;
  --space-8: 8px;
  --space-10: 12px;
  --space-12: 16px;
  --space-16: 20px;
  --space-20: 22px;
  --space-24: 24px;
  --space-32: 32px;
  --space-40: 40px;
  --space-48: 48px;
  --space-64: 64px;
  --space-80: 72px;
  --space-96: 96px;
  --space-128: 120.984px;
  --space-160: 335px;
  --space-192: 337.492px;
  --space-256: 338.703px;

  /* ── Borders ── */
  --border-width-hairline: 1px;
  --border-width-thin: 2px;
  --radius-sm: 2px;
  --radius-md: 6px;
  --radius-lg: 10px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-full: 20px;
  --radius-r7: 24px;
  --radius-r8: 32px;
  --radius-r9: 50%;
  --radius-r10: 999px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgba(0, 0, 0, 0.32) 0px 0px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 2px 0px, rgba(45, 127, 249, 0.28) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 0.5px inset;
  --shadow-md: rgba(15, 48, 106, 0.05) 0px 0px 20px 0px;
  --shadow-lg: rgba(0, 0, 0, 0.32) 0px 0px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 2px 0px, rgba(0, 0, 0, 0.08) 0px 1px 3px 0px, rgba(1, 20, 53, 0.12) 0px 0px 0px 1px inset;

  /* ── Motion ── */
  --duration-instant: 0.15s;
  --duration-fast: 0.2s;
  --duration-normal: 0.25s;
  --duration-slow: 0.3s;
  --duration-slower: 0.6s;
  --easing-ease-in: ease-in;
  --easing-linear: linear;

  /* ── Layout: Z-Index ── */
  --z-1: -15;
  --z-2: -10;
  --z-3: -1;
  --z-4: 1;
  --z-5: 2;
  --z-6: 3;
  --z-7: 4;
  --z-8: 10;
  --z-9: 9999;
  --z-10: 2147483642;
  --z-11: 2147483646;

  /* ── Breakpoints ── */
  --breakpoint-xs: 400px;
  --breakpoint-sm: 426px;
  --breakpoint-md: 530px;
  --breakpoint-lg: 550px;
  --breakpoint-xl: 600px;
  --breakpoint-2xl: 642px;
  --breakpoint-3xl: 720px;
  --breakpoint-bp-8: 749px;
  --breakpoint-bp-9: 768px;
  --breakpoint-bp-10: 832px;
  --breakpoint-bp-11: 834px;
  --breakpoint-bp-12: 896px;
  --breakpoint-bp-13: 904px;
  --breakpoint-bp-14: 1024px;
  --breakpoint-bp-15: 1080px;
  --breakpoint-bp-16: 1100px;
  --breakpoint-bp-17: 1184px;
  --breakpoint-bp-18: 1344px;
  --breakpoint-bp-19: 1350px;
  --breakpoint-bp-20: 1408px;
  --breakpoint-bp-21: 1440px;
  --breakpoint-bp-22: 1600px;
  --breakpoint-bp-23: 1664px;

  /* ── Opacity ── */
  --opacity-10: 0.1;
  --opacity-12: 0.12;
  --opacity-20: 0.2;
  --opacity-25: 0.25;
  --opacity-50: 0.5;
  --opacity-70: 0.7;
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://www.airtable.com/",
    "title": "Airtable: Build Enterprise-ready AI Workflows, Apps & Agents - Airtable",
    "generatedAt": "2026-04-13T17:13:54.273Z"
  },
  "core": {
    "color": {
      "dark-gray": {
        "$value": "#181D26",
        "$type": "color",
        "$description": "background · ×1199"
      },
      "dark-gray-2": {
        "$value": "#333333",
        "$type": "color",
        "$description": "text · ×1009"
      },
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "background · ×937"
      },
      "dark-gray-3": {
        "$value": "#444444",
        "$type": "color",
        "$description": "text · ×336"
      },
      "dark-gray-4": {
        "$value": "#333840",
        "$type": "color",
        "$description": "text · ×233"
      },
      "dark-blue": {
        "$value": "#040E20",
        "$type": "color",
        "$description": "text · ×155"
      },
      "white": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×107"
      },
      "dark-gray-5": {
        "$value": "#41454D",
        "$type": "color",
        "$description": "text · ×82"
      },
      "mid-gray": {
        "$value": "#9297A0",
        "$type": "color",
        "$description": "text · ×30"
      },
      "orange": {
        "$value": "#FCB42A",
        "$type": "color",
        "$description": "background · ×24"
      },
      "blue": {
        "$value": "#254FAD",
        "$type": "color",
        "$description": "background · ×20"
      },
      "dark-green": {
        "$value": "#0A2E0E",
        "$type": "color",
        "$description": "background · ×20"
      },
      "dark-orange": {
        "$value": "#AA2D00",
        "$type": "color",
        "$description": "background · ×17"
      },
      "light-pink": {
        "$value": "#FA91E0",
        "$type": "color",
        "$description": "background · ×17"
      },
      "dark-gray-6": {
        "$value": "rgba(7, 12, 20, 0.82)",
        "$type": "color",
        "$description": "text · ×14"
      },
      "white-2": {
        "$value": "#F8FAFC",
        "$type": "color",
        "$description": "background · ×14"
      },
      "blue-2": {
        "$value": "#1B61C9",
        "$type": "color",
        "$description": "text · ×12"
      },
      "purple": {
        "$value": "#9B67F0",
        "$type": "color",
        "$description": "fill · ×12"
      },
      "cyan": {
        "$value": "#0DBDB4",
        "$type": "color",
        "$description": "text · ×11"
      },
      "red": {
        "$value": "#FC4777",
        "$type": "color",
        "$description": "fill · ×10"
      },
      "blue-3": {
        "$value": "#458FFF",
        "$type": "color",
        "$description": "fill · ×9"
      },
      "light-gray": {
        "$value": "#E0E2E6",
        "$type": "color",
        "$description": "border · ×9"
      },
      "dark-blue-2": {
        "$value": "rgba(1, 20, 53, 0.12)",
        "$type": "color",
        "$description": "background · ×9"
      },
      "dark-green-2": {
        "$value": "#214224",
        "$type": "color",
        "$description": "background · ×9"
      },
      "orange-2": {
        "$value": "#F5620C",
        "$type": "color",
        "$description": "fill · ×7"
      },
      "pink": {
        "$value": "#E848C0",
        "$type": "color",
        "$description": "fill · ×6"
      },
      "cyan-2": {
        "$value": "#0AB2FA",
        "$type": "color",
        "$description": "fill · ×6"
      },
      "blue-4": {
        "$value": "rgba(45, 127, 249, 0.28)",
        "$type": "color",
        "$description": "shadow · ×5"
      },
      "light-blue": {
        "$value": "#C0C6D1",
        "$type": "color",
        "$description": "fill · ×5"
      },
      "dark-blue-3": {
        "$value": "rgba(15, 48, 106, 0.05)",
        "$type": "color",
        "$description": "shadow · ×4"
      },
      "light-cyan": {
        "$value": "#C7E5F2",
        "$type": "color",
        "$description": "background · ×4"
      },
      "mid-gray-2": {
        "$value": "#949494",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "light-orange": {
        "$value": "#FCAB79",
        "$type": "color",
        "$description": "background · ×3"
      },
      "cyan-3": {
        "$value": "#39CAFF",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "purple-2": {
        "$value": "#7C37EF",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-cyan": {
        "$value": "#0076A8",
        "$type": "color",
        "$description": "text · ×2"
      },
      "green": {
        "$value": "#39BF45",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-cyan-2": {
        "$value": "#097A76",
        "$type": "color",
        "$description": "text · ×2"
      },
      "dark-red": {
        "$value": "#912E1F",
        "$type": "color",
        "$description": "background · ×2"
      },
      "dark-orange-2": {
        "$value": "#423719",
        "$type": "color",
        "$description": "text · ×2"
      },
      "mid-gray-3": {
        "$value": "#A6A6A6",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "white-3": {
        "$value": "#F0F6FF",
        "$type": "color",
        "$description": "background · ×1"
      },
      "pink-2": {
        "$value": "#DD04A8",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-pink-2": {
        "$value": "#F797EF",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-cyan-3": {
        "$value": "#0D7F78",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "cyan-4": {
        "$value": "#36C5F0",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "cyan-5": {
        "$value": "#2EB67D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-3": {
        "$value": "#ECB22E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-2": {
        "$value": "#E01E5A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "blue-5": {
        "$value": "#4185F3",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "blue-6": {
        "$value": "#1767D1",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-3": {
        "$value": "#E94235",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-2": {
        "$value": "#30A753",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow": {
        "$value": "#F9BC00",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-3": {
        "$value": "#0F8038",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "cyan-6": {
        "$value": "#00A1E0",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "blue-7": {
        "$value": "#2684FF",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-cyan-4": {
        "$value": "#03363D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "white-4": {
        "$value": "#EBF7FC",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "cyan-7": {
        "$value": "#01DDD5",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-2": {
        "$value": "#EBF7F7",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-cyan-2": {
        "$value": "#C7EBE9",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-green": {
        "$value": "#B6E995",
        "$type": "color",
        "$description": "background · ×1"
      },
      "dark-blue-4": {
        "$value": "#002D98",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-orange-2": {
        "$value": "#FAF5E8",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-gray-3": {
        "$value": "#CCCCCC",
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
        "$value": "18px",
        "$type": "dimension"
      },
      "font-size-base": {
        "$value": "20px",
        "$type": "dimension"
      },
      "font-size-lg": {
        "$value": "24px",
        "$type": "dimension"
      },
      "font-size-xl": {
        "$value": "32px",
        "$type": "dimension"
      },
      "font-size-2xl": {
        "$value": "40px",
        "$type": "dimension"
      },
      "font-size-3xl": {
        "$value": "48px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "Times",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "Haas Groot Disp",
        "$type": "fontFamily"
      },
      "font-family-3": {
        "$value": "Haas",
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
      "font-weight-black": {
        "$value": "900",
        "$type": "fontWeight"
      }
    },
    "lineHeight": {
      "line-height-tight": {
        "$value": "17.5px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "18.9px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "20px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "20.8px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "21.6px",
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
        "$value": "26px",
        "$type": "dimension"
      },
      "line-height-lh-9": {
        "$value": "27px",
        "$type": "dimension"
      },
      "line-height-lh-10": {
        "$value": "30px",
        "$type": "dimension"
      },
      "line-height-lh-11": {
        "$value": "32.4px",
        "$type": "dimension"
      },
      "line-height-lh-12": {
        "$value": "36.8px",
        "$type": "dimension"
      },
      "line-height-lh-13": {
        "$value": "40px",
        "$type": "dimension"
      },
      "line-height-lh-14": {
        "$value": "41.6px",
        "$type": "dimension"
      },
      "line-height-lh-15": {
        "$value": "48px",
        "$type": "dimension"
      },
      "line-height-lh-16": {
        "$value": "52px",
        "$type": "dimension"
      },
      "line-height-lh-17": {
        "$value": "55.2px",
        "$type": "dimension"
      },
      "line-height-lh-18": {
        "$value": "72px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "0.08px",
        "$type": "dimension"
      },
      "letter-spacing-normal": {
        "$value": "0.1px",
        "$type": "dimension"
      },
      "letter-spacing-wide": {
        "$value": "0.12px",
        "$type": "dimension"
      },
      "letter-spacing-wider": {
        "$value": "0.14px",
        "$type": "dimension"
      },
      "letter-spacing-widest": {
        "$value": "0.16px",
        "$type": "dimension"
      },
      "letter-spacing-ls-6": {
        "$value": "0.18px",
        "$type": "dimension"
      },
      "letter-spacing-ls-7": {
        "$value": "0.2px",
        "$type": "dimension"
      },
      "letter-spacing-ls-8": {
        "$value": "0.28px",
        "$type": "dimension"
      },
      "letter-spacing-ls-9": {
        "$value": "0.7px",
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
        "$value": "3px",
        "$type": "dimension"
      },
      "space-4": {
        "$value": "4px",
        "$type": "dimension"
      },
      "space-5": {
        "$value": "6px",
        "$type": "dimension"
      },
      "space-6": {
        "$value": "7px",
        "$type": "dimension"
      },
      "space-8": {
        "$value": "8px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "12px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "16px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "20px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "22px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "24px",
        "$type": "dimension"
      },
      "space-32": {
        "$value": "32px",
        "$type": "dimension"
      },
      "space-40": {
        "$value": "40px",
        "$type": "dimension"
      },
      "space-48": {
        "$value": "48px",
        "$type": "dimension"
      },
      "space-64": {
        "$value": "64px",
        "$type": "dimension"
      },
      "space-80": {
        "$value": "72px",
        "$type": "dimension"
      },
      "space-96": {
        "$value": "96px",
        "$type": "dimension"
      },
      "space-128": {
        "$value": "120.984px",
        "$type": "dimension"
      },
      "space-160": {
        "$value": "335px",
        "$type": "dimension"
      },
      "space-192": {
        "$value": "337.492px",
        "$type": "dimension"
      },
      "space-256": {
        "$value": "338.703px",
        "$type": "dimension"
      }
    },
    "zIndex": {
      "z-1": {
        "$value": "-15",
        "$type": "number"
      },
      "z-2": {
        "$value": "-10",
        "$type": "number"
      },
      "z-3": {
        "$value": "-1",
        "$type": "number"
      },
      "z-4": {
        "$value": "1",
        "$type": "number"
      },
      "z-5": {
        "$value": "2",
        "$type": "number"
      },
      "z-6": {
        "$value": "3",
        "$type": "number"
      },
      "z-7": {
        "$value": "4",
        "$type": "number"
      },
      "z-8": {
        "$value": "10",
        "$type": "number"
      },
      "z-9": {
        "$value": "9999",
        "$type": "number"
      },
      "z-10": {
        "$value": "2147483642",
        "$type": "number"
      },
      "z-11": {
        "$value": "2147483646",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "400px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "426px",
        "$type": "dimension"
      },
      "breakpoint-md": {
        "$value": "530px",
        "$type": "dimension"
      },
      "breakpoint-lg": {
        "$value": "550px",
        "$type": "dimension"
      },
      "breakpoint-xl": {
        "$value": "600px",
        "$type": "dimension"
      },
      "breakpoint-2xl": {
        "$value": "642px",
        "$type": "dimension"
      },
      "breakpoint-3xl": {
        "$value": "720px",
        "$type": "dimension"
      },
      "breakpoint-bp-8": {
        "$value": "749px",
        "$type": "dimension"
      },
      "breakpoint-bp-9": {
        "$value": "768px",
        "$type": "dimension"
      },
      "breakpoint-bp-10": {
        "$value": "832px",
        "$type": "dimension"
      },
      "breakpoint-bp-11": {
        "$value": "834px",
        "$type": "dimension"
      },
      "breakpoint-bp-12": {
        "$value": "896px",
        "$type": "dimension"
      },
      "breakpoint-bp-13": {
        "$value": "904px",
        "$type": "dimension"
      },
      "breakpoint-bp-14": {
        "$value": "1024px",
        "$type": "dimension"
      },
      "breakpoint-bp-15": {
        "$value": "1080px",
        "$type": "dimension"
      },
      "breakpoint-bp-16": {
        "$value": "1100px",
        "$type": "dimension"
      },
      "breakpoint-bp-17": {
        "$value": "1184px",
        "$type": "dimension"
      },
      "breakpoint-bp-18": {
        "$value": "1344px",
        "$type": "dimension"
      },
      "breakpoint-bp-19": {
        "$value": "1350px",
        "$type": "dimension"
      },
      "breakpoint-bp-20": {
        "$value": "1408px",
        "$type": "dimension"
      },
      "breakpoint-bp-21": {
        "$value": "1440px",
        "$type": "dimension"
      },
      "breakpoint-bp-22": {
        "$value": "1600px",
        "$type": "dimension"
      },
      "breakpoint-bp-23": {
        "$value": "1664px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
        "$value": "2px",
        "$type": "dimension"
      },
      "radius-md": {
        "$value": "6px",
        "$type": "dimension"
      },
      "radius-lg": {
        "$value": "10px",
        "$type": "dimension"
      },
      "radius-xl": {
        "$value": "12px",
        "$type": "dimension"
      },
      "radius-2xl": {
        "$value": "16px",
        "$type": "dimension"
      },
      "radius-full": {
        "$value": "20px",
        "$type": "dimension"
      },
      "radius-r7": {
        "$value": "24px",
        "$type": "dimension"
      },
      "radius-r8": {
        "$value": "32px",
        "$type": "dimension"
      },
      "radius-r9": {
        "$value": "50%",
        "$type": "dimension"
      },
      "radius-r10": {
        "$value": "999px",
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
        "$value": "rgba(0, 0, 0, 0.32) 0px 0px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 2px 0px, rgba(45, 127, 249, 0.28) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 0.5px inset",
        "$type": "shadow"
      },
      "shadow-md": {
        "$value": "rgba(15, 48, 106, 0.05) 0px 0px 20px 0px",
        "$type": "shadow"
      },
      "shadow-lg": {
        "$value": "rgba(0, 0, 0, 0.32) 0px 0px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 2px 0px, rgba(0, 0, 0, 0.08) 0px 1px 3px 0px, rgba(1, 20, 53, 0.12) 0px 0px 0px 1px inset",
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
        "$value": "0.6s",
        "$type": "duration"
      }
    },
    "easing": {
      "easing-ease-in": {
        "$value": "ease-in",
        "$type": "cubicBezier"
      },
      "easing-linear": {
        "$value": "linear",
        "$type": "cubicBezier"
      }
    }
  },
  "opacity": {
    "opacity-10": {
      "$value": 0.1,
      "$type": "number"
    },
    "opacity-12": {
      "$value": 0.12,
      "$type": "number"
    },
    "opacity-20": {
      "$value": 0.2,
      "$type": "number"
    },
    "opacity-25": {
      "$value": 0.25,
      "$type": "number"
    },
    "opacity-50": {
      "$value": 0.5,
      "$type": "number"
    },
    "opacity-70": {
      "$value": 0.7,
      "$type": "number"
    }
  }
}
```
