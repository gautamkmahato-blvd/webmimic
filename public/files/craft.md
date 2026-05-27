# Craft — Docs and Notes Editor — Design System

**Source:** https://www.craft.do/  
**Generated:** 19/04/2026, 00:13:30  
**Extracted:** 57 colors · 64 type tokens · 32 spacing steps · 5 motion tokens

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
8. [Opacity](#opacity)
9. [Accessibility — Contrast Ratios](#accessibility--contrast-ratios)
10. [CSS Custom Properties (from :root)](#css-custom-properties-from-root)
11. [Design Tokens (CSS Variables)](#design-tokens-css-variables)
12. [Machine-Readable Tokens — DTCG JSON](#machine-readable-tokens--dtcg-json)

---

## Color Palette

### Background Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×3646 |
| `--color-black-2` | `#030302` | hsl(60, 20%, 1%) | ×2056 |
| `--color-white` | `#FFFFFF` | hsl(0, 0%, 100%) | ×375 |
| `--color-black-5` | `#020202` | hsl(0, 0%, 1%) | ×16 |
| `--color-light-green` | `#9BD8A9` | hsl(134, 44%, 73%) | ×13 |
| `--color-white-2` | `#F5F5F7` | hsl(240, 11%, 96%) | ×6 |
| `--color-light-yellow` | `#FDE99B` | hsl(48, 96%, 80%) | ×6 |
| `--color-light-blue` | `#DBEDFE` | hsl(209, 95%, 93%) | ×6 |
| `--color-light-orange` | `#FFEDD4` | hsl(35, 100%, 92%) | ×6 |
| `--color-light-blue-2` | `#B8CAF5` | hsl(222, 75%, 84%) | ×5 |
| `--color-white-3` | `#FFF3E7` | hsl(30, 100%, 95%) | ×4 |
| `--color-black-8` | `#050500` | hsl(60, 100%, 1%) | ×4 |
| `--color-light-cyan` | `#9ED4EF` | hsl(200, 72%, 78%) | ×3 |
| `--color-light-orange-2` | `#FFDBC5` | hsl(23, 100%, 89%) | ×2 |
| `--color-dark-gray-4` | `#1A1A1A` | hsl(0, 0%, 10%) | ×2 |
| `--color-blue-3` | `#54A3FF` | hsl(212, 100%, 66%) | ×2 |
| `--color-white-5` | `#FCF9F7` | hsl(24, 45%, 98%) | ×1 |
| `--color-white-6` | `#F7F7F7` | hsl(0, 0%, 97%) | ×1 |
| `--color-light-gray-4` | `#E4E4E7` | hsl(240, 6%, 90%) | ×1 |
| `--color-white-7` | `#F4F4F5` | hsl(240, 5%, 96%) | ×1 |
| `--color-orange-3` | `#FF4500` | hsl(16, 100%, 50%) | ×1 |
| `--color-light-gray-5` | `#EFEFEF` | hsl(0, 0%, 94%) | ×1 |
| `--color-light-gray-6` | `#F0F0F0` | hsl(0, 0%, 94%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-black-3` | `rgba(3, 3, 2, 0.75)` | hsl(60, 50%, 1%) | ×94 |
| `--color-dark-gray` | `#1F2225` | hsl(210, 9%, 13%) | ×34 |
| `--color-black-4` | `rgba(3, 3, 2, 0.5)` | hsl(60, 33%, 1%) | ×22 |
| `--color-dark-gray-2` | `rgba(31, 34, 37, 0.6)` | hsl(228, 7%, 14%) | ×20 |
| `--color-blue` | `#0087FF` | hsl(208, 100%, 50%) | ×14 |
| `--color-yellow` | `#DFB720` | hsl(47, 75%, 50%) | ×6 |
| `--color-yellow-2` | `#987E1B` | hsl(48, 70%, 35%) | ×6 |
| `--color-orange` | `#FF8904` | hsl(32, 100%, 51%) | ×6 |
| `--color-black-6` | `rgba(3, 3, 2, 0.35)` | hsl(0, 0%, 1%) | ×6 |
| `--color-black-7` | `rgba(3, 3, 2, 0.25)` | hsl(0, 0%, 2%) | ×5 |
| `--color-dark-gray-3` | `rgba(31, 34, 37, 0.5)` | hsl(220, 9%, 14%) | ×4 |
| `--color-dark-gray-5` | `rgba(17, 17, 17, 0.3)` | hsl(0, 0%, 7%) | ×2 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray` | `#E1E1E1` | hsl(0, 0%, 88%) | ×27 |
| `--color-white-4` | `#FCFFFF` | hsl(180, 100%, 99%) | ×4 |

### Shadow Colors

_None detected._

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray-2` | `#D9D9D9` | hsl(0, 0%, 85%) | ×16 |
| `--color-mid-gray` | `#B1B1B1` | hsl(0, 0%, 69%) | ×8 |
| `--color-blue-2` | `#0C3CC0` | hsl(224, 88%, 40%) | ×7 |
| `--color-dark-red` | `#842123` | hsl(359, 60%, 32%) | ×2 |
| `--color-orange-2` | `#FF6101` | hsl(23, 100%, 50%) | ×2 |
| `--color-light-orange-3` | `#FFC49C` | hsl(24, 100%, 81%) | ×2 |
| `--color-light-cyan-2` | `#D1EEF9` | hsl(196, 77%, 90%) | ×1 |
| `--color-light-orange-4` | `#FCDFBD` | hsl(32, 91%, 86%) | ×1 |
| `--color-light-blue-3` | `#A7D4FF` | hsl(209, 100%, 83%) | ×1 |
| `--color-light-green-2` | `#C1EEAD` | hsl(102, 66%, 81%) | ×1 |
| `--color-light-blue-4` | `#BBCFDA` | hsl(201, 30%, 79%) | ×1 |
| `--color-red` | `#E01E5A` | hsl(341, 76%, 50%) | ×1 |
| `--color-cyan` | `#36C5F0` | hsl(194, 86%, 58%) | ×1 |
| `--color-cyan-2` | `#2EB67D` | hsl(155, 60%, 45%) | ×1 |
| `--color-orange-4` | `#ECB22E` | hsl(42, 83%, 55%) | ×1 |
| `--color-dark-gray-6` | `#1C1C1D` | hsl(240, 2%, 11%) | ×1 |
| `--color-dark-gray-7` | `#363634` | hsl(60, 2%, 21%) | ×1 |
| `--color-red-2` | `#FF0000` | hsl(0, 100%, 50%) | ×1 |

### Other Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray-3` | `#D2D2D2` | hsl(0, 0%, 82%) | ×2 |
| `--color-light-gray-7` | `#F2F2F2` | hsl(0, 0%, 95%) | ×1 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `UntitledSansFont` |
| `--font-family-2` | `UntitledSerifFont` |
| `--font-family-3` | `apple-system` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `9.5px` |  |
| `--font-size-xs` | `10px` |  |
| `--font-size-sm` | `12px` |  |
| `--font-size-base` | `13px` |  |
| `--font-size-lg` | `14px` |  |
| `--font-size-xl` | `15px` |  |
| `--font-size-2xl` | `16px` |  |
| `--font-size-3xl` | `17px` |  |
| `--font-size-4xl` | `18px` |  |
| `--font-size-5xl` | `20px` |  |
| `--font-size-6xl` | `24px` |  |
| `--font-size-28px` | `28px` |  |
| `--font-size-32px` | `32px` |  |
| `--font-size-36px` | `36px` |  |
| `--font-size-42px` | `42px` |  |
| `--font-size-50px` | `50px` |  |
| `--font-size-56px` | `56px` |  |
| `--font-size-62px` | `62px` |  |

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
| `--line-height-tight` | `12.5px` |
| `--line-height-snug` | `14.25px` |
| `--line-height-normal` | `16px` |
| `--line-height-relaxed` | `16.8px` |
| `--line-height-loose` | `18px` |
| `--line-height-lh-6` | `19.5px` |
| `--line-height-lh-7` | `21px` |
| `--line-height-lh-8` | `22.4px` |
| `--line-height-lh-9` | `22.5px` |
| `--line-height-lh-10` | `23.8px` |
| `--line-height-lh-11` | `28px` |
| `--line-height-lh-12` | `28.8px` |
| `--line-height-lh-13` | `33.6px` |
| `--line-height-lh-14` | `40px` |
| `--line-height-lh-15` | `43.92px` |
| `--line-height-lh-16` | `48px` |
| `--line-height-lh-17` | `51.24px` |
| `--line-height-lh-18` | `55px` |
| `--line-height-lh-19` | `61.6px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `-2.48px` |
| `--letter-spacing-normal` | `-1.68px` |
| `--letter-spacing-wide` | `-1.65%` |
| `--letter-spacing-wider` | `-1.44px` |
| `--letter-spacing-widest` | `-1.28px` |
| `--letter-spacing-ls-6` | `-1.26px` |
| `--letter-spacing-ls-7` | `-1.08px` |
| `--letter-spacing-ls-8` | `-0.84px` |
| `--letter-spacing-ls-9` | `-0.75px` |
| `--letter-spacing-ls-10` | `-0.72px` |
| `--letter-spacing-ls-11` | `-0.6px` |
| `--letter-spacing-ls-12` | `-0.48px` |
| `--letter-spacing-ls-13` | `-0.4px` |
| `--letter-spacing-ls-14` | `-0.34px` |
| `--letter-spacing-ls-15` | `-0.32px` |
| `--letter-spacing-ls-16` | `-0.28px` |
| `--letter-spacing-ls-17` | `-0.24px` |
| `--letter-spacing-ls-18` | `0.126px` |
| `--letter-spacing-ls-19` | `0.14px` |
| `--letter-spacing-ls-20` | `0.16px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `2px` | ×20 |
| `--space-2` | `3px` | ×38 |
| `--space-3` | `4px` | ×167 |
| `--space-4` | `5px` | ×34 |
| `--space-5` | `6px` | ×23 |
| `--space-6` | `6.5px` | ×2 |
| `--space-8` | `8px` | ×247 |
| `--space-10` | `10px` | ×90 |
| `--space-12` | `12px` | ×55 |
| `--space-16` | `13px` | ×4 |
| `--space-20` | `14px` | ×2 |
| `--space-24` | `106.5px` | ×2 |
| `--space-32` | `310px` | ×1 |
| `--space-40` | `19.5px` | ×2 |
| `--space-48` | `20px` | ×41 |
| `--space-64` | `21px` | ×30 |
| `--space-80` | `24px` | ×134 |
| `--space-96` | `32px` | ×60 |
| `--space-128` | `40px` | ×49 |
| `--space-160` | `48px` | ×20 |
| `--space-192` | `60px` | ×67 |
| `--space-256` | `80px` | ×6 |
| `--space-23` | `96px` | ×1 |
| `--space-25` | `120px` | ×7 |
| `--space-26` | `138.711px` | ×2 |
| `--space-27` | `180px` | ×2 |
| `--space-28` | `188px` | ×3 |
| `--space-29` | `213.5px` | ×2 |
| `--space-30` | `281.547px` | ×2 |
| `--space-31` | `306.992px` | ×2 |
| `--space-33` | `328.992px` | ×2 |
| `--space-34` | `395.836px` | ×2 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `0.5px` | ×16 |
| `--border-width-thin` | `1px` | ×101 |
| `--border-width-base` | `2px` | ×80 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `4px` | ×44 |
| `--radius-md` | `8px` | ×31 |
| `--radius-lg` | `10px` | ×12 |
| `--radius-xl` | `12px` | ×18 |
| `--radius-2xl` | `12px 12px 0px 0px` | ×3 |
| `--radius-full` | `14px` | ×94 |
| `--radius-r7` | `16px` | ×11 |
| `--radius-r8` | `18px` | ×2 |
| `--radius-r9` | `20px` | ×3 |
| `--radius-r10` | `24px` | ×190 |
| `--radius-r11` | `26px` | ×1 |
| `--radius-r12` | `32px` | ×17 |
| `--radius-r13` | `1.67772e+07px` | ×39 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgba(0, 0, 0, 0.01) 0px 50px 40px 0px, rgba(0, 0, 0, 0.02) 0px 50px 40px 0px, rgba(0, 0, 0, 0.05) 0px 20px 40px 0px, rgba(0, 0, 0, 0.08) 0px 3px 10px 0px` | ×76 |
| `--shadow-md` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px` | ×40 |
| `--shadow-lg` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 12px 12px 2px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px` | ×8 |
| `--shadow-xl` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 12px 0px` | ×6 |
| `--shadow-shadow-5` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px` | ×4 |
| `--shadow-shadow-6` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 4px 16px 0px` | ×4 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.1s` | ×2 |
| `--duration-fast` | `0.15s` | ×86 |
| `--duration-normal` | `0.2s` | ×980 |
| `--duration-slow` | `0.3s` | ×80 |
| `--duration-slower` | `0.5s` | ×14 |

### Easing Functions

_No easing functions detected._

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `-10` |
| `--z-2` | `1` |
| `--z-3` | `10` |
| `--z-4` | `20` |
| `--z-5` | `22` |
| `--z-6` | `40` |
| `--z-7` | `50` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-20` | `0.2` | ×41 |
| `--opacity-30` | `0.3` | ×2 |
| `--opacity-40` | `0.4` | ×1 |
| `--opacity-50` | `0.5` | ×14 |
| `--opacity-60` | `0.6` | ×4 |
| `--opacity-70` | `0.7` | ×1 |
| `--opacity-75` | `0.75` | ×7 |
| `--opacity-80` | `0.8` | ×36 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-black-3` | `--color-black` | 1.02:1 | Fail |
| `--color-black-3` | `--color-black-2` | 1:1 | Fail |
| `--color-black-3` | `--color-white` | 20.64:1 | AAA |
| `--color-black-3` | `--color-black-5` | 1.01:1 | Fail |
| `--color-black-3` | `--color-light-green` | 12.57:1 | AAA |
| `--color-dark-gray` | `--color-black` | 1.31:1 | Fail |
| `--color-dark-gray` | `--color-black-2` | 1.29:1 | Fail |
| `--color-dark-gray` | `--color-white` | 15.98:1 | AAA |
| `--color-dark-gray` | `--color-black-5` | 1.3:1 | Fail |
| `--color-dark-gray` | `--color-light-green` | 9.73:1 | AAA |
| `--color-black-4` | `--color-black` | 1.02:1 | Fail |
| `--color-black-4` | `--color-black-2` | 1.01:1 | Fail |
| `--color-black-4` | `--color-white` | 20.52:1 | AAA |
| `--color-black-4` | `--color-black-5` | 1.01:1 | Fail |
| `--color-black-4` | `--color-light-green` | 12.5:1 | AAA |
| `--color-dark-gray-2` | `--color-black` | 1.31:1 | Fail |
| `--color-dark-gray-2` | `--color-black-2` | 1.28:1 | Fail |
| `--color-dark-gray-2` | `--color-white` | 16.08:1 | AAA |
| `--color-dark-gray-2` | `--color-black-5` | 1.29:1 | Fail |
| `--color-dark-gray-2` | `--color-light-green` | 9.79:1 | AAA |
| `--color-blue` | `--color-black` | 5.91:1 | AA |
| `--color-blue` | `--color-black-2` | 5.81:1 | AA |
| `--color-blue` | `--color-white` | 3.55:1 | AA Large |
| `--color-blue` | `--color-black-5` | 5.84:1 | AA |
| `--color-blue` | `--color-light-green` | 2.16:1 | Fail |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--font-sans` | `var(--font-untitled-sans),"apple-system",var(--font-inter),"BlinkMacSystemFont","Helvetica Neue","Helvetica","Arial","sans-serif"` |
| `--font-serif` | `var(--font-untitled-serif),"apple-system-ui-serif","ui-serif","Georgia","serif"` |
| `--radius` | `.625rem` |
| `--card` | `var(--color-white)` |
| `--card-foreground` | `var(--color-black)` |
| `--popover` | `var(--color-white)` |
| `--popover-foreground` | `var(--color-black)` |
| `--primary` | `var(--color-black)` |
| `--primary-foreground` | `var(--color-black)` |
| `--secondary` | `var(--color-white)` |
| `--secondary-foreground` | `var(--color-black)` |
| `--muted` | `var(--color-black-50)` |
| `--muted-foreground` | `var(--color-black-500)` |
| `--accent` | `var(--color-blue-4)` |
| `--accent-foreground` | `var(--color-black)` |
| `--destructive` | `var(--color-red-4)` |
| `--border` | `var(--color-black-100)` |
| `--input` | `var(--color-white)` |
| `--ring` | `var(--color-black-200)` |
| `--default-font-feature-settings` | `"liga" 1` |
| `--default-font-variation-settings` | `normal` |
| `--chart-1` | `oklch(64.6% .222 41.116)` |
| `--chart-2` | `oklch(60% .118 184.704)` |
| `--chart-3` | `oklch(39.8% .07 227.392)` |
| `--chart-4` | `oklch(82.8% .189 84.429)` |
| `--chart-5` | `oklch(76.9% .188 70.08)` |
| `--sidebar` | `oklch(98.5% 0 0)` |
| `--sidebar-foreground` | `oklch(14.5% 0 0)` |
| `--sidebar-primary` | `oklch(20.5% 0 0)` |
| `--sidebar-primary-foreground` | `oklch(98.5% 0 0)` |
| `--sidebar-accent` | `oklch(97% 0 0)` |
| `--sidebar-accent-foreground` | `oklch(20.5% 0 0)` |
| `--sidebar-border` | `oklch(92.2% 0 0)` |
| `--sidebar-ring` | `oklch(70.8% 0 0)` |
| `--background` | `var(--color-beige)` |
| `--foreground` | `var(--color-black)` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — Craft — Docs and Notes Editor
 * Source: https://www.craft.do/
 * Generated: 19/04/2026, 00:13:30
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-black: #000000; /* hsl(0, 0%, 0%) · background */
  --color-black-2: #030302; /* hsl(60, 20%, 1%) · background */
  --color-white: #FFFFFF; /* hsl(0, 0%, 100%) · background */
  --color-black-3: rgba(3, 3, 2, 0.75); /* hsl(60, 50%, 1%) · text */
  --color-dark-gray: #1F2225; /* hsl(210, 9%, 13%) · text */
  --color-light-gray: #E1E1E1; /* hsl(0, 0%, 88%) · border */
  --color-black-4: rgba(3, 3, 2, 0.5); /* hsl(60, 33%, 1%) · text */
  --color-dark-gray-2: rgba(31, 34, 37, 0.6); /* hsl(228, 7%, 14%) · text */
  --color-black-5: #020202; /* hsl(0, 0%, 1%) · background */
  --color-light-gray-2: #D9D9D9; /* hsl(0, 0%, 85%) · fill */
  --color-blue: #0087FF; /* hsl(208, 100%, 50%) · text */
  --color-light-green: #9BD8A9; /* hsl(134, 44%, 73%) · background */
  --color-mid-gray: #B1B1B1; /* hsl(0, 0%, 69%) · fill */
  --color-blue-2: #0C3CC0; /* hsl(224, 88%, 40%) · fill */
  --color-white-2: #F5F5F7; /* hsl(240, 11%, 96%) · background */
  --color-light-yellow: #FDE99B; /* hsl(48, 96%, 80%) · background */
  --color-light-blue: #DBEDFE; /* hsl(209, 95%, 93%) · background */
  --color-yellow: #DFB720; /* hsl(47, 75%, 50%) · text */
  --color-yellow-2: #987E1B; /* hsl(48, 70%, 35%) · text */
  --color-orange: #FF8904; /* hsl(32, 100%, 51%) · text */
  --color-light-orange: #FFEDD4; /* hsl(35, 100%, 92%) · background */
  --color-black-6: rgba(3, 3, 2, 0.35); /* hsl(0, 0%, 1%) · text */
  --color-black-7: rgba(3, 3, 2, 0.25); /* hsl(0, 0%, 2%) · text */
  --color-light-blue-2: #B8CAF5; /* hsl(222, 75%, 84%) · background */
  --color-white-3: #FFF3E7; /* hsl(30, 100%, 95%) · background */
  --color-black-8: #050500; /* hsl(60, 100%, 1%) · background */
  --color-dark-gray-3: rgba(31, 34, 37, 0.5); /* hsl(220, 9%, 14%) · text */
  --color-white-4: #FCFFFF; /* hsl(180, 100%, 99%) · border */
  --color-light-cyan: #9ED4EF; /* hsl(200, 72%, 78%) · background */
  --color-light-orange-2: #FFDBC5; /* hsl(23, 100%, 89%) · background */
  --color-dark-gray-4: #1A1A1A; /* hsl(0, 0%, 10%) · background */
  --color-dark-gray-5: rgba(17, 17, 17, 0.3); /* hsl(0, 0%, 7%) · text */
  --color-blue-3: #54A3FF; /* hsl(212, 100%, 66%) · background */
  --color-light-gray-3: #D2D2D2; /* hsl(0, 0%, 82%) · other */
  --color-dark-red: #842123; /* hsl(359, 60%, 32%) · fill */
  --color-orange-2: #FF6101; /* hsl(23, 100%, 50%) · fill */
  --color-light-orange-3: #FFC49C; /* hsl(24, 100%, 81%) · fill */
  --color-white-5: #FCF9F7; /* hsl(24, 45%, 98%) · background */
  --color-light-cyan-2: #D1EEF9; /* hsl(196, 77%, 90%) · gradient */
  --color-white-6: #F7F7F7; /* hsl(0, 0%, 97%) · background */
  --color-light-gray-4: #E4E4E7; /* hsl(240, 6%, 90%) · background */
  --color-light-orange-4: #FCDFBD; /* hsl(32, 91%, 86%) · fill */
  --color-light-blue-3: #A7D4FF; /* hsl(209, 100%, 83%) · fill */
  --color-light-green-2: #C1EEAD; /* hsl(102, 66%, 81%) · fill */
  --color-white-7: #F4F4F5; /* hsl(240, 5%, 96%) · background */
  --color-orange-3: #FF4500; /* hsl(16, 100%, 50%) · background */
  --color-light-blue-4: #BBCFDA; /* hsl(201, 30%, 79%) · fill */
  --color-light-gray-5: #EFEFEF; /* hsl(0, 0%, 94%) · background */
  --color-light-gray-6: #F0F0F0; /* hsl(0, 0%, 94%) · background */
  --color-red: #E01E5A; /* hsl(341, 76%, 50%) · fill */
  --color-cyan: #36C5F0; /* hsl(194, 86%, 58%) · fill */
  --color-cyan-2: #2EB67D; /* hsl(155, 60%, 45%) · fill */
  --color-orange-4: #ECB22E; /* hsl(42, 83%, 55%) · fill */
  --color-dark-gray-6: #1C1C1D; /* hsl(240, 2%, 11%) · gradient */
  --color-dark-gray-7: #363634; /* hsl(60, 2%, 21%) · gradient */
  --color-light-gray-7: #F2F2F2; /* hsl(0, 0%, 95%) · other */
  --color-red-2: #FF0000; /* hsl(0, 100%, 50%) · fill */

  /* ── Core: Typography ── */
  --font-size-2xs: 9.5px;
  --font-size-xs: 10px;
  --font-size-sm: 12px;
  --font-size-base: 13px;
  --font-size-lg: 14px;
  --font-size-xl: 15px;
  --font-size-2xl: 16px;
  --font-size-3xl: 17px;
  --font-size-4xl: 18px;
  --font-size-5xl: 20px;
  --font-size-6xl: 24px;
  --font-size-28px: 28px;
  --font-size-32px: 32px;
  --font-size-36px: 36px;
  --font-size-42px: 42px;
  --font-size-50px: 50px;
  --font-size-56px: 56px;
  --font-size-62px: 62px;
  --font-family-base: UntitledSansFont;
  --font-family-2: UntitledSerifFont;
  --font-family-3: apple-system;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-tight: 12.5px;
  --line-height-snug: 14.25px;
  --line-height-normal: 16px;
  --line-height-relaxed: 16.8px;
  --line-height-loose: 18px;
  --line-height-lh-6: 19.5px;
  --line-height-lh-7: 21px;
  --line-height-lh-8: 22.4px;
  --line-height-lh-9: 22.5px;
  --line-height-lh-10: 23.8px;
  --line-height-lh-11: 28px;
  --line-height-lh-12: 28.8px;
  --line-height-lh-13: 33.6px;
  --line-height-lh-14: 40px;
  --line-height-lh-15: 43.92px;
  --line-height-lh-16: 48px;
  --line-height-lh-17: 51.24px;
  --line-height-lh-18: 55px;
  --line-height-lh-19: 61.6px;
  --letter-spacing-tight: -2.48px;
  --letter-spacing-normal: -1.68px;
  --letter-spacing-wide: -1.65%;
  --letter-spacing-wider: -1.44px;
  --letter-spacing-widest: -1.28px;
  --letter-spacing-ls-6: -1.26px;
  --letter-spacing-ls-7: -1.08px;
  --letter-spacing-ls-8: -0.84px;
  --letter-spacing-ls-9: -0.75px;
  --letter-spacing-ls-10: -0.72px;
  --letter-spacing-ls-11: -0.6px;
  --letter-spacing-ls-12: -0.48px;
  --letter-spacing-ls-13: -0.4px;
  --letter-spacing-ls-14: -0.34px;
  --letter-spacing-ls-15: -0.32px;
  --letter-spacing-ls-16: -0.28px;
  --letter-spacing-ls-17: -0.24px;
  --letter-spacing-ls-18: 0.126px;
  --letter-spacing-ls-19: 0.14px;
  --letter-spacing-ls-20: 0.16px;

  /* ── Layout: Spacing ── */
  --space-1: 2px;
  --space-2: 3px;
  --space-3: 4px;
  --space-4: 5px;
  --space-5: 6px;
  --space-6: 6.5px;
  --space-8: 8px;
  --space-10: 10px;
  --space-12: 12px;
  --space-16: 13px;
  --space-20: 14px;
  --space-24: 106.5px;
  --space-32: 310px;
  --space-40: 19.5px;
  --space-48: 20px;
  --space-64: 21px;
  --space-80: 24px;
  --space-96: 32px;
  --space-128: 40px;
  --space-160: 48px;
  --space-192: 60px;
  --space-256: 80px;
  --space-23: 96px;
  --space-25: 120px;
  --space-26: 138.711px;
  --space-27: 180px;
  --space-28: 188px;
  --space-29: 213.5px;
  --space-30: 281.547px;
  --space-31: 306.992px;
  --space-33: 328.992px;
  --space-34: 395.836px;

  /* ── Borders ── */
  --border-width-hairline: 0.5px;
  --border-width-thin: 1px;
  --border-width-base: 2px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 10px;
  --radius-xl: 12px;
  --radius-2xl: 12px 12px 0px 0px;
  --radius-full: 14px;
  --radius-r7: 16px;
  --radius-r8: 18px;
  --radius-r9: 20px;
  --radius-r10: 24px;
  --radius-r11: 26px;
  --radius-r12: 32px;
  --radius-r13: 1.67772e+07px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgba(0, 0, 0, 0.01) 0px 50px 40px 0px, rgba(0, 0, 0, 0.02) 0px 50px 40px 0px, rgba(0, 0, 0, 0.05) 0px 20px 40px 0px, rgba(0, 0, 0, 0.08) 0px 3px 10px 0px;
  --shadow-md: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px;
  --shadow-lg: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 12px 12px 2px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  --shadow-xl: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 12px 0px;
  --shadow-shadow-5: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
  --shadow-shadow-6: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 4px 16px 0px;

  /* ── Motion ── */
  --duration-instant: 0.1s;
  --duration-fast: 0.15s;
  --duration-normal: 0.2s;
  --duration-slow: 0.3s;
  --duration-slower: 0.5s;

  /* ── Layout: Z-Index ── */
  --z-1: -10;
  --z-2: 1;
  --z-3: 10;
  --z-4: 20;
  --z-5: 22;
  --z-6: 40;
  --z-7: 50;

  /* ── Breakpoints ── */

  /* ── Opacity ── */
  --opacity-20: 0.2;
  --opacity-30: 0.3;
  --opacity-40: 0.4;
  --opacity-50: 0.5;
  --opacity-60: 0.6;
  --opacity-70: 0.7;
  --opacity-75: 0.75;
  --opacity-80: 0.8;
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://www.craft.do/",
    "title": "Craft — Docs and Notes Editor",
    "generatedAt": "2026-04-18T18:43:30.393Z"
  },
  "core": {
    "color": {
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "background · ×3646"
      },
      "black-2": {
        "$value": "#030302",
        "$type": "color",
        "$description": "background · ×2056"
      },
      "white": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×375"
      },
      "black-3": {
        "$value": "rgba(3, 3, 2, 0.75)",
        "$type": "color",
        "$description": "text · ×94"
      },
      "dark-gray": {
        "$value": "#1F2225",
        "$type": "color",
        "$description": "text · ×34"
      },
      "light-gray": {
        "$value": "#E1E1E1",
        "$type": "color",
        "$description": "border · ×27"
      },
      "black-4": {
        "$value": "rgba(3, 3, 2, 0.5)",
        "$type": "color",
        "$description": "text · ×22"
      },
      "dark-gray-2": {
        "$value": "rgba(31, 34, 37, 0.6)",
        "$type": "color",
        "$description": "text · ×20"
      },
      "black-5": {
        "$value": "#020202",
        "$type": "color",
        "$description": "background · ×16"
      },
      "light-gray-2": {
        "$value": "#D9D9D9",
        "$type": "color",
        "$description": "fill · ×16"
      },
      "blue": {
        "$value": "#0087FF",
        "$type": "color",
        "$description": "text · ×14"
      },
      "light-green": {
        "$value": "#9BD8A9",
        "$type": "color",
        "$description": "background · ×13"
      },
      "mid-gray": {
        "$value": "#B1B1B1",
        "$type": "color",
        "$description": "fill · ×8"
      },
      "blue-2": {
        "$value": "#0C3CC0",
        "$type": "color",
        "$description": "fill · ×7"
      },
      "white-2": {
        "$value": "#F5F5F7",
        "$type": "color",
        "$description": "background · ×6"
      },
      "light-yellow": {
        "$value": "#FDE99B",
        "$type": "color",
        "$description": "background · ×6"
      },
      "light-blue": {
        "$value": "#DBEDFE",
        "$type": "color",
        "$description": "background · ×6"
      },
      "yellow": {
        "$value": "#DFB720",
        "$type": "color",
        "$description": "text · ×6"
      },
      "yellow-2": {
        "$value": "#987E1B",
        "$type": "color",
        "$description": "text · ×6"
      },
      "orange": {
        "$value": "#FF8904",
        "$type": "color",
        "$description": "text · ×6"
      },
      "light-orange": {
        "$value": "#FFEDD4",
        "$type": "color",
        "$description": "background · ×6"
      },
      "black-6": {
        "$value": "rgba(3, 3, 2, 0.35)",
        "$type": "color",
        "$description": "text · ×6"
      },
      "black-7": {
        "$value": "rgba(3, 3, 2, 0.25)",
        "$type": "color",
        "$description": "text · ×5"
      },
      "light-blue-2": {
        "$value": "#B8CAF5",
        "$type": "color",
        "$description": "background · ×5"
      },
      "white-3": {
        "$value": "#FFF3E7",
        "$type": "color",
        "$description": "background · ×4"
      },
      "black-8": {
        "$value": "#050500",
        "$type": "color",
        "$description": "background · ×4"
      },
      "dark-gray-3": {
        "$value": "rgba(31, 34, 37, 0.5)",
        "$type": "color",
        "$description": "text · ×4"
      },
      "white-4": {
        "$value": "#FCFFFF",
        "$type": "color",
        "$description": "border · ×4"
      },
      "light-cyan": {
        "$value": "#9ED4EF",
        "$type": "color",
        "$description": "background · ×3"
      },
      "light-orange-2": {
        "$value": "#FFDBC5",
        "$type": "color",
        "$description": "background · ×2"
      },
      "dark-gray-4": {
        "$value": "#1A1A1A",
        "$type": "color",
        "$description": "background · ×2"
      },
      "dark-gray-5": {
        "$value": "rgba(17, 17, 17, 0.3)",
        "$type": "color",
        "$description": "text · ×2"
      },
      "blue-3": {
        "$value": "#54A3FF",
        "$type": "color",
        "$description": "background · ×2"
      },
      "light-gray-3": {
        "$value": "#D2D2D2",
        "$type": "color",
        "$description": "other · ×2"
      },
      "dark-red": {
        "$value": "#842123",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "orange-2": {
        "$value": "#FF6101",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "light-orange-3": {
        "$value": "#FFC49C",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "white-5": {
        "$value": "#FCF9F7",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-cyan-2": {
        "$value": "#D1EEF9",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "white-6": {
        "$value": "#F7F7F7",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-gray-4": {
        "$value": "#E4E4E7",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-orange-4": {
        "$value": "#FCDFBD",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-blue-3": {
        "$value": "#A7D4FF",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-green-2": {
        "$value": "#C1EEAD",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "white-7": {
        "$value": "#F4F4F5",
        "$type": "color",
        "$description": "background · ×1"
      },
      "orange-3": {
        "$value": "#FF4500",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-blue-4": {
        "$value": "#BBCFDA",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-5": {
        "$value": "#EFEFEF",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-gray-6": {
        "$value": "#F0F0F0",
        "$type": "color",
        "$description": "background · ×1"
      },
      "red": {
        "$value": "#E01E5A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "cyan": {
        "$value": "#36C5F0",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "cyan-2": {
        "$value": "#2EB67D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-4": {
        "$value": "#ECB22E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-gray-6": {
        "$value": "#1C1C1D",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-gray-7": {
        "$value": "#363634",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-gray-7": {
        "$value": "#F2F2F2",
        "$type": "color",
        "$description": "other · ×1"
      },
      "red-2": {
        "$value": "#FF0000",
        "$type": "color",
        "$description": "fill · ×1"
      }
    },
    "fontSize": {
      "font-size-2xs": {
        "$value": "9.5px",
        "$type": "dimension"
      },
      "font-size-xs": {
        "$value": "10px",
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
        "$value": "15px",
        "$type": "dimension"
      },
      "font-size-2xl": {
        "$value": "16px",
        "$type": "dimension"
      },
      "font-size-3xl": {
        "$value": "17px",
        "$type": "dimension"
      },
      "font-size-4xl": {
        "$value": "18px",
        "$type": "dimension"
      },
      "font-size-5xl": {
        "$value": "20px",
        "$type": "dimension"
      },
      "font-size-6xl": {
        "$value": "24px",
        "$type": "dimension"
      },
      "font-size-28px": {
        "$value": "28px",
        "$type": "dimension"
      },
      "font-size-32px": {
        "$value": "32px",
        "$type": "dimension"
      },
      "font-size-36px": {
        "$value": "36px",
        "$type": "dimension"
      },
      "font-size-42px": {
        "$value": "42px",
        "$type": "dimension"
      },
      "font-size-50px": {
        "$value": "50px",
        "$type": "dimension"
      },
      "font-size-56px": {
        "$value": "56px",
        "$type": "dimension"
      },
      "font-size-62px": {
        "$value": "62px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "UntitledSansFont",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "UntitledSerifFont",
        "$type": "fontFamily"
      },
      "font-family-3": {
        "$value": "apple-system",
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
        "$value": "12.5px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "14.25px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "16px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "16.8px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "18px",
        "$type": "dimension"
      },
      "line-height-lh-6": {
        "$value": "19.5px",
        "$type": "dimension"
      },
      "line-height-lh-7": {
        "$value": "21px",
        "$type": "dimension"
      },
      "line-height-lh-8": {
        "$value": "22.4px",
        "$type": "dimension"
      },
      "line-height-lh-9": {
        "$value": "22.5px",
        "$type": "dimension"
      },
      "line-height-lh-10": {
        "$value": "23.8px",
        "$type": "dimension"
      },
      "line-height-lh-11": {
        "$value": "28px",
        "$type": "dimension"
      },
      "line-height-lh-12": {
        "$value": "28.8px",
        "$type": "dimension"
      },
      "line-height-lh-13": {
        "$value": "33.6px",
        "$type": "dimension"
      },
      "line-height-lh-14": {
        "$value": "40px",
        "$type": "dimension"
      },
      "line-height-lh-15": {
        "$value": "43.92px",
        "$type": "dimension"
      },
      "line-height-lh-16": {
        "$value": "48px",
        "$type": "dimension"
      },
      "line-height-lh-17": {
        "$value": "51.24px",
        "$type": "dimension"
      },
      "line-height-lh-18": {
        "$value": "55px",
        "$type": "dimension"
      },
      "line-height-lh-19": {
        "$value": "61.6px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "-2.48px",
        "$type": "dimension"
      },
      "letter-spacing-normal": {
        "$value": "-1.68px",
        "$type": "dimension"
      },
      "letter-spacing-wide": {
        "$value": "-1.65%",
        "$type": "dimension"
      },
      "letter-spacing-wider": {
        "$value": "-1.44px",
        "$type": "dimension"
      },
      "letter-spacing-widest": {
        "$value": "-1.28px",
        "$type": "dimension"
      },
      "letter-spacing-ls-6": {
        "$value": "-1.26px",
        "$type": "dimension"
      },
      "letter-spacing-ls-7": {
        "$value": "-1.08px",
        "$type": "dimension"
      },
      "letter-spacing-ls-8": {
        "$value": "-0.84px",
        "$type": "dimension"
      },
      "letter-spacing-ls-9": {
        "$value": "-0.75px",
        "$type": "dimension"
      },
      "letter-spacing-ls-10": {
        "$value": "-0.72px",
        "$type": "dimension"
      },
      "letter-spacing-ls-11": {
        "$value": "-0.6px",
        "$type": "dimension"
      },
      "letter-spacing-ls-12": {
        "$value": "-0.48px",
        "$type": "dimension"
      },
      "letter-spacing-ls-13": {
        "$value": "-0.4px",
        "$type": "dimension"
      },
      "letter-spacing-ls-14": {
        "$value": "-0.34px",
        "$type": "dimension"
      },
      "letter-spacing-ls-15": {
        "$value": "-0.32px",
        "$type": "dimension"
      },
      "letter-spacing-ls-16": {
        "$value": "-0.28px",
        "$type": "dimension"
      },
      "letter-spacing-ls-17": {
        "$value": "-0.24px",
        "$type": "dimension"
      },
      "letter-spacing-ls-18": {
        "$value": "0.126px",
        "$type": "dimension"
      },
      "letter-spacing-ls-19": {
        "$value": "0.14px",
        "$type": "dimension"
      },
      "letter-spacing-ls-20": {
        "$value": "0.16px",
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
        "$value": "3px",
        "$type": "dimension"
      },
      "space-3": {
        "$value": "4px",
        "$type": "dimension"
      },
      "space-4": {
        "$value": "5px",
        "$type": "dimension"
      },
      "space-5": {
        "$value": "6px",
        "$type": "dimension"
      },
      "space-6": {
        "$value": "6.5px",
        "$type": "dimension"
      },
      "space-8": {
        "$value": "8px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "10px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "12px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "13px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "14px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "106.5px",
        "$type": "dimension"
      },
      "space-32": {
        "$value": "310px",
        "$type": "dimension"
      },
      "space-40": {
        "$value": "19.5px",
        "$type": "dimension"
      },
      "space-48": {
        "$value": "20px",
        "$type": "dimension"
      },
      "space-64": {
        "$value": "21px",
        "$type": "dimension"
      },
      "space-80": {
        "$value": "24px",
        "$type": "dimension"
      },
      "space-96": {
        "$value": "32px",
        "$type": "dimension"
      },
      "space-128": {
        "$value": "40px",
        "$type": "dimension"
      },
      "space-160": {
        "$value": "48px",
        "$type": "dimension"
      },
      "space-192": {
        "$value": "60px",
        "$type": "dimension"
      },
      "space-256": {
        "$value": "80px",
        "$type": "dimension"
      },
      "space-23": {
        "$value": "96px",
        "$type": "dimension"
      },
      "space-25": {
        "$value": "120px",
        "$type": "dimension"
      },
      "space-26": {
        "$value": "138.711px",
        "$type": "dimension"
      },
      "space-27": {
        "$value": "180px",
        "$type": "dimension"
      },
      "space-28": {
        "$value": "188px",
        "$type": "dimension"
      },
      "space-29": {
        "$value": "213.5px",
        "$type": "dimension"
      },
      "space-30": {
        "$value": "281.547px",
        "$type": "dimension"
      },
      "space-31": {
        "$value": "306.992px",
        "$type": "dimension"
      },
      "space-33": {
        "$value": "328.992px",
        "$type": "dimension"
      },
      "space-34": {
        "$value": "395.836px",
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
        "$value": "22",
        "$type": "number"
      },
      "z-6": {
        "$value": "40",
        "$type": "number"
      },
      "z-7": {
        "$value": "50",
        "$type": "number"
      }
    },
    "breakpoint": {}
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
        "$value": "4px",
        "$type": "dimension"
      },
      "radius-md": {
        "$value": "8px",
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
        "$value": "12px 12px 0px 0px",
        "$type": "dimension"
      },
      "radius-full": {
        "$value": "14px",
        "$type": "dimension"
      },
      "radius-r7": {
        "$value": "16px",
        "$type": "dimension"
      },
      "radius-r8": {
        "$value": "18px",
        "$type": "dimension"
      },
      "radius-r9": {
        "$value": "20px",
        "$type": "dimension"
      },
      "radius-r10": {
        "$value": "24px",
        "$type": "dimension"
      },
      "radius-r11": {
        "$value": "26px",
        "$type": "dimension"
      },
      "radius-r12": {
        "$value": "32px",
        "$type": "dimension"
      },
      "radius-r13": {
        "$value": "1.67772e+07px",
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
      },
      "border-width-base": {
        "$value": "2px",
        "$type": "dimension"
      }
    },
    "shadow": {
      "shadow-sm": {
        "$value": "rgba(0, 0, 0, 0.01) 0px 50px 40px 0px, rgba(0, 0, 0, 0.02) 0px 50px 40px 0px, rgba(0, 0, 0, 0.05) 0px 20px 40px 0px, rgba(0, 0, 0, 0.08) 0px 3px 10px 0px",
        "$type": "shadow"
      },
      "shadow-md": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px",
        "$type": "shadow"
      },
      "shadow-lg": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 12px 12px 2px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        "$type": "shadow"
      },
      "shadow-xl": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 12px 0px",
        "$type": "shadow"
      },
      "shadow-shadow-5": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px",
        "$type": "shadow"
      },
      "shadow-shadow-6": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 4px 16px 0px",
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
        "$value": "0.3s",
        "$type": "duration"
      },
      "duration-slower": {
        "$value": "0.5s",
        "$type": "duration"
      }
    },
    "easing": {}
  },
  "opacity": {
    "opacity-20": {
      "$value": 0.2,
      "$type": "number"
    },
    "opacity-30": {
      "$value": 0.3,
      "$type": "number"
    },
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
    "opacity-75": {
      "$value": 0.75,
      "$type": "number"
    },
    "opacity-80": {
      "$value": 0.8,
      "$type": "number"
    }
  }
}
```
