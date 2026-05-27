# Reddit - The heart of the internet — Design System

**Source:** https://www.reddit.com/  
**Generated:** 17/04/2026, 13:20:35  
**Extracted:** 53 colors · 21 type tokens · 14 spacing steps · 14 breakpoints · 4 motion tokens

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
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×862 |
| `--color-white` | `#FFFFFF` | hsl(0, 0%, 100%) | ×117 |
| `--color-light-gray-2` | `#E5EBEE` | hsl(200, 21%, 92%) | ×4 |
| `--color-light-green` | `#95DAB6` | hsl(149, 48%, 72%) | ×3 |
| `--color-blue-2` | `#5D81A2` | hsl(209, 27%, 50%) | ×3 |
| `--color-pink` | `#FF1AA7` | hsl(323, 100%, 55%) | ×3 |
| `--color-cyan-3` | `#32CDC8` | hsl(178, 61%, 50%) | ×3 |
| `--color-light-gray-3` | `#BBBDBF` | hsl(210, 3%, 74%) | ×3 |
| `--color-red` | `#D42B42` | hsl(352, 66%, 50%) | ×3 |
| `--color-cyan-4` | `#0DD3BB` | hsl(173, 88%, 44%) | ×3 |
| `--color-dark-green` | `#638029` | hsl(80, 51%, 33%) | ×3 |
| `--color-cyan-5` | `#1A7FAA` | hsl(198, 73%, 38%) | ×3 |
| `--color-green` | `#349E48` | hsl(131, 50%, 41%) | ×3 |
| `--color-purple` | `#9116E9` | hsl(275, 83%, 50%) | ×3 |
| `--color-dark-blue-2` | `#0A449B` | hsl(216, 88%, 32%) | ×1 |
| `--color-orange-3` | `#D93900` | hsl(16, 100%, 43%) | ×1 |
| `--color-cyan-6` | `#98AFB9` | hsl(198, 19%, 66%) | ×1 |
| `--color-purple-2` | `#9406F9` | hsl(275, 95%, 50%) | ×1 |
| `--color-orange-4` | `#958578` | hsl(27, 12%, 53%) | ×1 |
| `--color-white-2` | `#F7F7F7` | hsl(0, 0%, 97%) | ×1 |
| `--color-mid-gray-2` | `#7C8183` | hsl(197, 3%, 50%) | ×1 |
| `--color-light-blue-3` | `#C2DBFF` | hsl(215, 100%, 88%) | ×1 |
| `--color-dark-gray-4` | `#0C0E10` | hsl(210, 14%, 5%) | ×1 |
| `--color-light-gray-4` | `#BFC2C7` | hsl(218, 7%, 76%) | ×1 |
| `--color-blue-7` | `#096CF6` | hsl(215, 93%, 50%) | ×1 |
| `--color-white-3` | `#F6F8F9` | hsl(200, 20%, 97%) | ×1 |
| `--color-white-4` | `#F8F8F8` | hsl(0, 0%, 97%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-cyan` | `#333D42` | hsl(200, 13%, 23%) | ×3263 |
| `--color-dark-gray` | `#21272A` | hsl(200, 12%, 15%) | ×952 |
| `--color-dark-gray-2` | `#181C1F` | hsl(206, 13%, 11%) | ×501 |
| `--color-light-gray` | `#EEF1F3` | hsl(204, 17%, 94%) | ×290 |
| `--color-cyan` | `#5C6C74` | hsl(200, 12%, 41%) | ×280 |
| `--color-blue` | `#115BCA` | hsl(216, 84%, 43%) | ×162 |
| `--color-cyan-2` | `#576F76` | hsl(194, 15%, 40%) | ×126 |
| `--color-mid-gray` | `#808080` | hsl(0, 0%, 50%) | ×40 |
| `--color-orange` | `#FF4500` | hsl(16, 100%, 50%) | ×24 |
| `--color-light-blue` | `#D4EAFF` | hsl(209, 100%, 92%) | ×6 |
| `--color-dark-gray-3` | `#222222` | hsl(0, 0%, 13%) | ×6 |
| `--color-yellow` | `#DDD622` | hsl(58, 73%, 50%) | ×2 |
| `--color-blue-3` | `#2972A3` | hsl(204, 60%, 40%) | ×2 |
| `--color-red-2` | `#FC0335` | hsl(348, 98%, 50%) | ×2 |
| `--color-light-orange-2` | `#EADDC8` | hsl(37, 45%, 85%) | ×2 |
| `--color-blue-4` | `#0077FF` | hsl(212, 100%, 50%) | ×2 |
| `--color-pink-2` | `#FF1493` | hsl(328, 100%, 54%) | ×2 |
| `--color-blue-5` | `#0079D3` | hsl(206, 100%, 41%) | ×2 |
| `--color-dark-blue` | `#49545F` | hsl(210, 13%, 33%) | ×2 |
| `--color-blue-6` | `#0051FF` | hsl(221, 100%, 50%) | ×2 |
| `--color-dark-gray-5` | `#131313` | hsl(0, 0%, 7%) | ×1 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray-5` | `#C1C1C1` | hsl(0, 0%, 76%) | ×1 |

### Shadow Colors

_None detected._

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-red` | `#842123` | hsl(359, 60%, 32%) | ×2 |
| `--color-orange-2` | `#FF6101` | hsl(23, 100%, 50%) | ×2 |
| `--color-light-orange` | `#FFC49C` | hsl(24, 100%, 81%) | ×2 |
| `--color-light-blue-2` | `#BBCFDA` | hsl(201, 30%, 79%) | ×1 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `-apple-system` |
| `--font-family-2` | `Times` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `12px` |  |
| `--font-size-xs` | `14px` |  |
| `--font-size-sm` | `16px` |  |
| `--font-size-base` | `18px` |  |
| `--font-size-lg` | `21px` |  |

### Font Weights

| Token | Weight |
| --- | --- |
| `--font-weight-regular` | `400` |
| `--font-weight-semibold` | `600` |
| `--font-weight-bold` | `700` |
| `--font-weight-extrabold` | `800` |

### Line Heights

| Token | Value |
| --- | --- |
| `--line-height-tight` | `16px` |
| `--line-height-snug` | `20px` |
| `--line-height-normal` | `21px` |
| `--line-height-relaxed` | `22px` |
| `--line-height-loose` | `24px` |
| `--line-height-lh-6` | `30px` |
| `--line-height-lh-7` | `31.5px` |
| `--line-height-lh-8` | `38px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `-0.028px` |
| `--letter-spacing-normal` | `-0.012px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `4px` | ×353 |
| `--space-2` | `6px` | ×58 |
| `--space-3` | `7px` | ×2 |
| `--space-4` | `8px` | ×193 |
| `--space-5` | `9px` | ×68 |
| `--space-6` | `11px` | ×6 |
| `--space-8` | `12px` | ×8 |
| `--space-10` | `14px` | ×1 |
| `--space-12` | `16px` | ×143 |
| `--space-16` | `24px` | ×5 |
| `--space-20` | `56px` | ×1 |
| `--space-24` | `378.969px` | ×1 |
| `--space-32` | `380.094px` | ×1 |
| `--space-40` | `407.25px` | ×2 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `1px` | ×325 |
| `--border-width-thin` | `2px` | ×8 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `2px` | ×1 |
| `--radius-md` | `4px` | ×19 |
| `--radius-lg` | `8px` | ×10 |
| `--radius-xl` | `16px` | ×79 |
| `--radius-2xl` | `20px` | ×1 |
| `--radius-full` | `999px` | ×42 |
| `--radius-r7` | `9999px` | ×120 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgba(255, 255, 255, 0.2) 0px 0px 6px 0px inset` | ×4 |
| `--shadow-md` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 1px 2px 0px` | ×2 |
| `--shadow-lg` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px` | ×1 |
| `--shadow-xl` | `rgb(128, 128, 128) 0px 0px 5px 0px` | ×1 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.2s` | ×3 |
| `--duration-fast` | `0.25s` | ×1 |
| `--duration-normal` | `0.3s` | ×1 |

### Easing Functions

| Token | Value | Usage |
| --- | --- | --- |
| `--easing-ease-out` | `ease-out` | ×3 |

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `1` |
| `--z-2` | `2` |
| `--z-3` | `3` |
| `--z-4` | `4` |
| `--z-5` | `10` |
| `--z-6` | `50` |
| `--z-7` | `101` |
| `--z-8` | `1001` |
| `--z-9` | `9000` |
| `--z-10` | `9999` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `260px` |
| `--breakpoint-sm` | `325px` |
| `--breakpoint-md` | `500px` |
| `--breakpoint-lg` | `599px` |
| `--breakpoint-xl` | `607px` |
| `--breakpoint-2xl` | `608px` |
| `--breakpoint-3xl` | `767px` |
| `--breakpoint-bp-8` | `768px` |
| `--breakpoint-bp-9` | `960px` |
| `--breakpoint-bp-10` | `1024px` |
| `--breakpoint-bp-11` | `1200px` |
| `--breakpoint-bp-12` | `1416px` |
| `--breakpoint-bp-13` | `1472px` |
| `--breakpoint-bp-14` | `1920px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-25` | `0.25` | ×5 |
| `--opacity-30` | `0.3` | ×26 |
| `--opacity-60` | `0.6` | ×3 |
| `--opacity-75` | `0.75` | ×5 |
| `--opacity-90` | `0.9` | ×5 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-dark-cyan` | `--color-black` | 1.89:1 | Fail |
| `--color-dark-cyan` | `--color-white` | 11.13:1 | AAA |
| `--color-dark-cyan` | `--color-light-gray-2` | 9.25:1 | AAA |
| `--color-dark-cyan` | `--color-light-green` | 6.88:1 | AA |
| `--color-dark-cyan` | `--color-blue-2` | 2.72:1 | Fail |
| `--color-dark-gray` | `--color-black` | 1.39:1 | Fail |
| `--color-dark-gray` | `--color-white` | 15.13:1 | AAA |
| `--color-dark-gray` | `--color-light-gray-2` | 12.57:1 | AAA |
| `--color-dark-gray` | `--color-light-green` | 9.35:1 | AAA |
| `--color-dark-gray` | `--color-blue-2` | 3.69:1 | AA Large |
| `--color-dark-gray-2` | `--color-black` | 1.22:1 | Fail |
| `--color-dark-gray-2` | `--color-white` | 17.15:1 | AAA |
| `--color-dark-gray-2` | `--color-light-gray-2` | 14.25:1 | AAA |
| `--color-dark-gray-2` | `--color-light-green` | 10.6:1 | AAA |
| `--color-dark-gray-2` | `--color-blue-2` | 4.19:1 | AA Large |
| `--color-light-gray` | `--color-black` | 18.51:1 | AAA |
| `--color-light-gray` | `--color-white` | 1.13:1 | Fail |
| `--color-light-gray` | `--color-light-gray-2` | 1.06:1 | Fail |
| `--color-light-gray` | `--color-light-green` | 1.43:1 | Fail |
| `--color-light-gray` | `--color-blue-2` | 3.61:1 | AA Large |
| `--color-cyan` | `--color-black` | 3.85:1 | AA Large |
| `--color-cyan` | `--color-white` | 5.45:1 | AA |
| `--color-cyan` | `--color-light-gray-2` | 4.53:1 | AA |
| `--color-cyan` | `--color-light-green` | 3.37:1 | AA Large |
| `--color-cyan` | `--color-blue-2` | 1.33:1 | Fail |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--rem360` | `22.5rem` |
| `--rem320` | `20rem` |
| `--rem192` | `12rem` |
| `--rem144` | `9rem` |
| `--rem128` | `8rem` |
| `--rem96` | `6rem` |
| `--rem90` | `5.625rem` |
| `--rem88` | `5.5rem` |
| `--rem64` | `4rem` |
| `--rem56` | `3.5rem` |
| `--rem48` | `3rem` |
| `--rem40` | `2.5rem` |
| `--rem36` | `2.25rem` |
| `--rem32` | `2rem` |
| `--rem28` | `1.75rem` |
| `--rem26` | `1.625rem` |
| `--rem24` | `1.5rem` |
| `--rem22` | `1.375rem` |
| `--rem20` | `1.25rem` |
| `--rem18` | `1.125rem` |
| `--rem16` | `1rem` |
| `--rem15` | `0.9375rem` |
| `--rem14` | `0.875rem` |
| `--rem12` | `0.75rem` |
| `--rem10` | `0.625rem` |
| `--rem8` | `0.5rem` |
| `--rem6` | `0.375rem` |
| `--rem4` | `0.25rem` |
| `--rem2` | `0.125rem` |
| `--rem1` | `0.0625rem` |
| `--spacer-4xs` | `0.125rem` |
| `--spacer-2xs` | `0.25rem` |
| `--spacer-xs` | `0.5rem` |
| `--spacer-sm` | `0.75rem` |
| `--spacer-md` | `1rem` |
| `--spacer-lg` | `1.5rem` |
| `--spacer-xl` | `2rem` |
| `--spacer-2xl` | `3rem` |
| `--spacer-a-px` | `0px` |
| `--spacer-button-lg-px` | `var(--spacer-lg)` |
| `--spacer-button-md-px` | `var(--spacer-lg)` |
| `--spacer-button-sm-px` | `var(--spacer-md)` |
| `--spacer-input-padding-left` | `0px` |
| `--spacer-input-padding-top` | `0px` |
| `--spacer-label-default` | `0px` |
| `--spacer-switch-input-active-pl` | `0px` |
| `--size-2xs` | `0.25rem` |
| `--size-xs` | `0.5rem` |
| `--size-sm` | `0.75rem` |
| `--size-md` | `1rem` |
| `--size-lg` | `1.5rem` |
| `--size-xl` | `2rem` |
| `--size-2xl` | `3rem` |
| `--size-3xl` | `4rem` |
| `--size-4xl` | `6rem` |
| `--size-5xl` | `8rem` |
| `--size-button-lg-h` | `3.375rem` |
| `--size-button-md-h` | `2.75rem` |
| `--size-button-sm-h` | `2.125rem` |
| `--size-button-xs-h` | `1.375rem` |
| `--size-switch-input-h` | `1.25rem` |
| `--size-switch-input-w` | `2rem` |
| `--line-sm` | `0.0625rem` |
| `--line-md` | `0.125rem` |
| `--line-lg` | `0.25rem` |
| `--line-a-focus` | `0px` |
| `--line-a-outline-moz` | `0.0625rem` |
| `--line-a-outline-wb` | `0.3125rem` |
| `--line-button-lg-border` | `0.0625rem` |
| `--line-button-md-border` | `0.0625rem` |
| `--line-button-sm-border` | `0.0625rem` |
| `--line-button-xs-border` | `0.0625rem` |
| `--line-button-border-activated` | `0.0625rem` |
| `--line-input-border` | `var(--line-sm)` |
| `--radius-1` | `0.25rem` |
| `--radius-2` | `0.5rem` |
| `--radius-4` | `1rem` |
| `--radius-5` | `1.25rem` |
| `--radius-6` | `1.5rem` |
| `--radius-8` | `2rem` |
| `--radius-sm` | `0.25rem` |
| `--radius-lg` | `2rem` |
| `--radius-full` | `624.9375rem` |
| `--radius-accordion-size` | `var(--radius-sm)` |
| `--font-10-15-bold` | `700 0.625rem/0.9375rem var(--font-sans)` |
| `--font-button-lg` | `700 1.125rem/1.375rem var(--font-sans)` |
| `--font-button-lg-kerning` | `calc(var(--rpl-disable-letter-spacing, 1) * -0.001em)` |
| `--font-button-md` | `700 1rem/1.25rem var(--font-sans)` |
| `--font-button-md-kerning` | `calc(var(--rpl-disable-letter-spacing, 1) * -0.001em)` |
| `--font-button-sm` | `700 0.875rem/1.125rem var(--font-sans)` |
| `--font-button-sm-kerning` | `calc(var(--rpl-disable-letter-spacing, 1) * -0.001em)` |
| `--font-button-xs` | `700 0.75rem/0.875rem var(--font-sans)` |
| `--font-button-xs-kerning` | `calc(var(--rpl-disable-letter-spacing, 1) * -0.001em)` |
| `--font-label-default` | `var(--font-10-15-bold)` |
| `--misc-accordion-border` | `1px solid var(--color-tone-5)` |
| `--misc-accordion-open-list-style-type` | `disclosure-open` |
| `--misc-accordion-closed-list-style-type` | `disclosure-closed` |
| `--misc-divider-margin` | `0.5rem auto` |
| `--misc-label-text-transform` | `uppercase` |
| `--misc-label-letter-spacing` | `0.5px` |
| `--color-primary-visited` | `#660099` |
| `--color-primary-background` | `#24a0ed` |
| `--color-primary-background-hover` | `#006cbf` |
| `--color-danger-content` | `#ea0027` |
| `--color-success-content` | `#46d160` |
| `--color-global-black` | `#000000` |
| `--color-global-white` | `#ffffff` |
| `--color-global-orangered` | `#D93900` |
| `--color-global-alienblue` | `#0079d3` |
| `--color-global-darkblue` | `#1d2535` |
| `--color-tone-1` | `#1a1a1b` |
| `--color-tone-2` | `#6a6d6f` |
| `--color-tone-3` | `#878a8c` |
| `--color-tone-4` | `#d3d6da` |
| `--color-tone-5` | `#edeff1` |
| `--color-tone-6` | `#f6f7f8` |
| `--color-tone-7` | `#ffffff` |
| `--color-action-primary` | `var(--color-primary-background)` |
| `--color-action-secondary` | `var(--color-primary-background-hover)` |
| `--color-action-upvote` | `var(--color-global-orangered)` |
| `--color-action-downvote` | `#7193ff` |
| `--color-alert-positive` | `var(--color-success-content)` |
| `--color-alert-negative` | `var(--color-danger-content)` |
| `--color-alert-caution` | `#ffb000` |
| `--color-identity-admin` | `var(--color-global-orangered)` |
| `--color-identity-moderator` | `#46d160` |
| `--color-identity-self` | `#0dd3bb` |
| `--color-identity-coins` | `#ddbd37` |
| `--color-category-live` | `var(--color-global-orangered)` |
| `--color-category-nsfw` | `#ff3881` |
| `--color-category-spoiler` | `var(--color-tone-1)` |
| `--color-ui-canvas` | `var(--color-tone-5)` |
| `--color-ui-modalbackground` | `var(--color-tone-7)` |
| `--color-opacity-highlight` | `linear-gradient(#006cbf1a, var(--color-tone-6))` |
| `--color-opacity-08` | `#1a1a1b14` |
| `--color-opacity-50` | `#00000080` |
| `--color-scrim` | `#1a1a1b4d` |
| `--color-a-default` | `var(--color-primary-background-hover)` |
| `--color-a-hover` | `var(--color-primary-background-hover)` |
| `--color-a-visited` | `var(--color-primary-background-hover)` |
| `--color-button-overlay-focus` | `#ffffff1a` |
| `--color-button-overlay-active` | `#00000014` |
| `--color-button-primary-background-hover` | `var(--color-primary-background)` |
| `--color-button-primary-background-disabled` | `var(--color-tone-6)` |
| `--color-button-primary-border-hover` | `transparent` |
| `--color-button-primary-border-active` | `transparent` |
| `--color-button-primary-border-activated` | `transparent` |
| `--color-button-primary-border-disabled` | `transparent` |
| `--color-button-primary-text-disabled` | `var(--color-tone-2)` |
| `--color-button-secondary-background` | `transparent` |
| `--color-button-secondary-background-focus` | `transparent` |
| `--color-button-secondary-background-hover` | `transparent` |
| `--color-button-secondary-background-disabled` | `var(--color-tone-6)` |
| `--color-button-secondary-background-activated` | `transparent` |
| `--color-button-secondary-border` | `var(--color-primary-background-hover)` |
| `--color-button-secondary-border-hover` | `var(--color-primary-background-hover)` |
| `--color-button-secondary-border-active` | `var(--color-primary-background-hover)` |
| `--color-button-secondary-border-activated` | `var(--color-primary-background-hover)` |
| `--color-button-secondary-border-disabled` | `var(--color-tone-2)` |
| `--color-button-secondary-text` | `var(--color-primary-background-hover)` |
| `--color-button-secondary-text-disabled` | `var(--color-tone-2)` |
| `--color-button-secondary-text-activated` | `var(--color-button-secondary-text)` |
| `--color-button-tertiary-background` | `var(--color-tone-6)` |
| `--color-button-tertiary-background-focus` | `var(--color-tone-6)` |
| `--color-button-tertiary-background-hover` | `var(--color-tone-6)` |
| `--color-button-tertiary-background-disabled` | `var(--color-tone-6)` |
| `--color-button-tertiary-background-activated` | `var(--color-tone-6)` |
| `--color-button-tertiary-border-hover` | `transparent` |
| `--color-button-tertiary-border-active` | `transparent` |
| `--color-button-tertiary-text` | `var(--color-primary-background-hover)` |
| `--color-button-tertiary-text-disabled` | `var(--color-tone-2)` |
| `--color-button-tertiary-text-activated` | `var(--color-primary-background-hover)` |
| `--color-button-plain-background-hover` | `transparent` |
| `--color-button-plain-background-disabled` | `var(--color-tone-7)` |
| `--color-button-plain-background-activated` | `transparent` |
| `--color-button-plain-border-hover` | `transparent` |
| `--color-button-plain-border-active` | `transparent` |
| `--color-button-plain-text` | `var(--color-primary-background-hover)` |
| `--color-button-plain-text-disabled` | `var(--color-tone-2)` |
| `--color-button-plain-text-activated` | `var(--color-primary-background-hover)` |
| `--color-divider-default` | `var(--color-tone-5)` |
| `--color-input-default` | `var(--color-tone-6)` |
| `--color-input-hover` | `var(--color-primary-background-hover)` |
| `--color-input-border` | `var(--color-tone-5)` |
| `--color-input-text` | `var(--color-tone-1)` |
| `--color-input-helper-text` | `var(--color-tone-1)` |
| `--color-label-default` | `var(--color-tone-1)` |
| `--color-switch-input-background-default` | `var(--color-tone-3)` |
| `--color-switch-input-background-checked` | `var(--color-global-alienblue)` |
| `--color-switch-input-background-disabled` | `var(--color-tone-6)` |
| `--color-switch-input-background-checked-disabled` | `var(--color-tone-5)` |
| `--color-switch-input-background-hover` | `var(--color-tone-3)` |
| `--color-switch-input-background-checked-hover` | `var(--color-global-alienblue)` |
| `--elevation-xs` | `0 0.0625rem 0.125rem 0 #00000040` |
| `--elevation-sm` | `0 0.0625rem 0.25rem 0 #00000026,0 0.25rem 0.25rem 0 #00000026` |
| `--elevation-md` | `0 0.25rem 0.5rem 0 #0000001a,0 0.375rem 0.75rem 0 #00000040` |
| `--elevation-lg` | `0 0.75rem 0.75rem 0 #00000026,0 1rem 2rem 0 #00000040` |
| `--elevation-focus-ring` | `0 0 0 0.25rem var(--color-global-alienblue)` |
| `--font-sans` | `-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol',sans-serif` |
| `--font-mono` | `Noto Mono,Menlo,Monaco,Consolas,monospace` |
| `--font-title-h0` | `normal 500 1.625rem/2rem var(--font-sans)` |
| `--font-title-h1` | `normal 500 1.375rem/1.625rem var(--font-sans)` |
| `--font-title-h2` | `normal 500 1.25rem/1.5rem var(--font-sans)` |
| `--font-title-h3` | `normal 500 1.125rem/1.375rem var(--font-sans)` |
| `--font-title-h4` | `normal 500 1rem/1.25rem var(--font-sans)` |
| `--font-title-h5` | `normal 500 0.875rem/1.125rem var(--font-sans)` |
| `--font-title-h6` | `normal 500 0.75rem/1rem var(--font-sans)` |
| `--font-body` | `0.875rem` |
| `--font-small` | `0.75rem` |
| `--font-code` | `0.875rem` |
| `--font-subheading` | `0.75rem` |
| `--font-label` | `0.625rem` |
| `--font-button-b1` | `normal bold 1.125rem/1.375rem var(--font-sans)` |
| `--font-button-b2` | `normal bold 1rem/1.25rem var(--font-sans)` |
| `--font-button-b3` | `normal bold 0.875rem/1.125rem var(--font-sans)` |
| `--font-button-b4` | `normal bold 0.75rem/0.875rem var(--font-sans)` |
| `--color-gradient-orangeyellow` | `linear-gradient(89.94deg, #ec0623 0%, #ff8717 100%)` |
| `--color-gradient-bluepink` | `linear-gradient(89.94deg, #51b9ff 0%, #7785ff 52.6%, #b279ff 73.96%, #ff81ed 100%)` |
| `--boxshadow-modal` | `0px 2px 15px rgba(26, 26, 27, 0.3)` |
| `--boxshadow-navigation` | `0px 4px 14px rgba(0, 0, 0, 0.1)` |
| `--boxshadow-tooltip` | `0 1px 4px rgba(0, 0, 0, 0.15),0 4px 4px rgba(0, 0, 0, 0.15)` |
| `--color-dialog-background` | `#00000080` |
| `--button-color-background-default` | `var(--color-button-secondary-background)` |
| `--button-color-background-focus` | `var(--color-button-secondary-background-focus)` |
| `--button-color-background-hover` | `var(--color-button-secondary-background-hover)` |
| `--button-color-background-active` | `linear-gradient(var(--color-button-secondary-background-hover), var(--color-button-secondary-background-hover))` |
| `--button-color-background-disabled` | `var(--color-button-secondary-background-disabled)` |
| `--button-color-background-activated` | `var(--color-button-secondary-background-activated)` |
| `--button-color-text-default` | `var(--color-button-secondary-text)` |
| `--button-color-text-disabled` | `var(--color-button-secondary-text-disabled)` |
| `--button-color-text-activated` | `var(--color-button-secondary-text-activated)` |
| `--button-border-color-default` | `var(--color-button-secondary-border)` |
| `--shreddit-content-background` | `var(--color-neutral-background)` |
| `--preferred-text-scale` | `env(preferred-text-scale)` |
| `--shreddit-color-mods-reported-background` | `#251e02` |
| `--shreddit-color-mods-reported-background-hover` | `#382d03` |
| `--shreddit-color-mods-reported-onBackground` | `#dbaf00` |
| `--shreddit-color-wordmark` | `var(--color-global-white)` |
| `--shreddit-color-mods-filtered-background` | `#1F0B04` |
| `--shreddit-color-mods-filtered-background-hover` | `#650405` |
| `--shreddit-color-mods-filtered-onBackground` | `#FF4F40` |
| `--shreddit-color-streak-progress` | `#623a00` |
| `--shreddit-color-streak-not-reached-background` | `#131f23` |
| `--shreddit-color-streak-not-reached-text` | `#82959b` |
| `--styled-scrollbar-background` | `var(--color-neutral-background)` |
| `--dx-text-color-light` | `inherit` |
| `--dx-text-color-dark` | `inherit` |
| `--dx-bg-color-light` | `initial` |
| `--dx-bg-color-dark` | `initial` |
| `--dx-border-color-light` | `initial` |
| `--dx-border-color-dark` | `initial` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — Reddit - The heart of the internet
 * Source: https://www.reddit.com/
 * Generated: 17/04/2026, 13:20:35
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-dark-cyan: #333D42; /* hsl(200, 13%, 23%) · text */
  --color-dark-gray: #21272A; /* hsl(200, 12%, 15%) · text */
  --color-black: #000000; /* hsl(0, 0%, 0%) · background */
  --color-dark-gray-2: #181C1F; /* hsl(206, 13%, 11%) · text */
  --color-light-gray: #EEF1F3; /* hsl(204, 17%, 94%) · text */
  --color-cyan: #5C6C74; /* hsl(200, 12%, 41%) · text */
  --color-blue: #115BCA; /* hsl(216, 84%, 43%) · text */
  --color-cyan-2: #576F76; /* hsl(194, 15%, 40%) · text */
  --color-white: #FFFFFF; /* hsl(0, 0%, 100%) · background */
  --color-mid-gray: #808080; /* hsl(0, 0%, 50%) · text */
  --color-orange: #FF4500; /* hsl(16, 100%, 50%) · text */
  --color-light-blue: #D4EAFF; /* hsl(209, 100%, 92%) · text */
  --color-dark-gray-3: #222222; /* hsl(0, 0%, 13%) · text */
  --color-light-gray-2: #E5EBEE; /* hsl(200, 21%, 92%) · background */
  --color-light-green: #95DAB6; /* hsl(149, 48%, 72%) · background */
  --color-blue-2: #5D81A2; /* hsl(209, 27%, 50%) · background */
  --color-pink: #FF1AA7; /* hsl(323, 100%, 55%) · background */
  --color-cyan-3: #32CDC8; /* hsl(178, 61%, 50%) · background */
  --color-light-gray-3: #BBBDBF; /* hsl(210, 3%, 74%) · background */
  --color-red: #D42B42; /* hsl(352, 66%, 50%) · background */
  --color-cyan-4: #0DD3BB; /* hsl(173, 88%, 44%) · background */
  --color-dark-green: #638029; /* hsl(80, 51%, 33%) · background */
  --color-cyan-5: #1A7FAA; /* hsl(198, 73%, 38%) · background */
  --color-green: #349E48; /* hsl(131, 50%, 41%) · background */
  --color-purple: #9116E9; /* hsl(275, 83%, 50%) · background */
  --color-dark-red: #842123; /* hsl(359, 60%, 32%) · fill */
  --color-orange-2: #FF6101; /* hsl(23, 100%, 50%) · fill */
  --color-light-orange: #FFC49C; /* hsl(24, 100%, 81%) · fill */
  --color-yellow: #DDD622; /* hsl(58, 73%, 50%) · text */
  --color-blue-3: #2972A3; /* hsl(204, 60%, 40%) · text */
  --color-red-2: #FC0335; /* hsl(348, 98%, 50%) · text */
  --color-light-orange-2: #EADDC8; /* hsl(37, 45%, 85%) · text */
  --color-blue-4: #0077FF; /* hsl(212, 100%, 50%) · text */
  --color-pink-2: #FF1493; /* hsl(328, 100%, 54%) · text */
  --color-blue-5: #0079D3; /* hsl(206, 100%, 41%) · text */
  --color-dark-blue: #49545F; /* hsl(210, 13%, 33%) · text */
  --color-blue-6: #0051FF; /* hsl(221, 100%, 50%) · text */
  --color-dark-blue-2: #0A449B; /* hsl(216, 88%, 32%) · background */
  --color-light-blue-2: #BBCFDA; /* hsl(201, 30%, 79%) · fill */
  --color-orange-3: #D93900; /* hsl(16, 100%, 43%) · background */
  --color-cyan-6: #98AFB9; /* hsl(198, 19%, 66%) · background */
  --color-purple-2: #9406F9; /* hsl(275, 95%, 50%) · background */
  --color-orange-4: #958578; /* hsl(27, 12%, 53%) · background */
  --color-white-2: #F7F7F7; /* hsl(0, 0%, 97%) · background */
  --color-mid-gray-2: #7C8183; /* hsl(197, 3%, 50%) · background */
  --color-light-blue-3: #C2DBFF; /* hsl(215, 100%, 88%) · background */
  --color-dark-gray-4: #0C0E10; /* hsl(210, 14%, 5%) · background */
  --color-light-gray-4: #BFC2C7; /* hsl(218, 7%, 76%) · background */
  --color-blue-7: #096CF6; /* hsl(215, 93%, 50%) · background */
  --color-white-3: #F6F8F9; /* hsl(200, 20%, 97%) · background */
  --color-dark-gray-5: #131313; /* hsl(0, 0%, 7%) · text */
  --color-white-4: #F8F8F8; /* hsl(0, 0%, 97%) · background */
  --color-light-gray-5: #C1C1C1; /* hsl(0, 0%, 76%) · border */

  /* ── Core: Typography ── */
  --font-size-2xs: 12px;
  --font-size-xs: 14px;
  --font-size-sm: 16px;
  --font-size-base: 18px;
  --font-size-lg: 21px;
  --font-family-base: -apple-system;
  --font-family-2: Times;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --line-height-tight: 16px;
  --line-height-snug: 20px;
  --line-height-normal: 21px;
  --line-height-relaxed: 22px;
  --line-height-loose: 24px;
  --line-height-lh-6: 30px;
  --line-height-lh-7: 31.5px;
  --line-height-lh-8: 38px;
  --letter-spacing-tight: -0.028px;
  --letter-spacing-normal: -0.012px;

  /* ── Layout: Spacing ── */
  --space-1: 4px;
  --space-2: 6px;
  --space-3: 7px;
  --space-4: 8px;
  --space-5: 9px;
  --space-6: 11px;
  --space-8: 12px;
  --space-10: 14px;
  --space-12: 16px;
  --space-16: 24px;
  --space-20: 56px;
  --space-24: 378.969px;
  --space-32: 380.094px;
  --space-40: 407.25px;

  /* ── Borders ── */
  --border-width-hairline: 1px;
  --border-width-thin: 2px;
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 16px;
  --radius-2xl: 20px;
  --radius-full: 999px;
  --radius-r7: 9999px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgba(255, 255, 255, 0.2) 0px 0px 6px 0px inset;
  --shadow-md: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 1px 2px 0px;
  --shadow-lg: rgba(0, 0, 0, 0) 0px 0px 0px 0px;
  --shadow-xl: rgb(128, 128, 128) 0px 0px 5px 0px;

  /* ── Motion ── */
  --duration-instant: 0.2s;
  --duration-fast: 0.25s;
  --duration-normal: 0.3s;
  --easing-ease-out: ease-out;

  /* ── Layout: Z-Index ── */
  --z-1: 1;
  --z-2: 2;
  --z-3: 3;
  --z-4: 4;
  --z-5: 10;
  --z-6: 50;
  --z-7: 101;
  --z-8: 1001;
  --z-9: 9000;
  --z-10: 9999;

  /* ── Breakpoints ── */
  --breakpoint-xs: 260px;
  --breakpoint-sm: 325px;
  --breakpoint-md: 500px;
  --breakpoint-lg: 599px;
  --breakpoint-xl: 607px;
  --breakpoint-2xl: 608px;
  --breakpoint-3xl: 767px;
  --breakpoint-bp-8: 768px;
  --breakpoint-bp-9: 960px;
  --breakpoint-bp-10: 1024px;
  --breakpoint-bp-11: 1200px;
  --breakpoint-bp-12: 1416px;
  --breakpoint-bp-13: 1472px;
  --breakpoint-bp-14: 1920px;

  /* ── Opacity ── */
  --opacity-25: 0.25;
  --opacity-30: 0.3;
  --opacity-60: 0.6;
  --opacity-75: 0.75;
  --opacity-90: 0.9;
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://www.reddit.com/",
    "title": "Reddit - The heart of the internet",
    "generatedAt": "2026-04-17T07:50:35.990Z"
  },
  "core": {
    "color": {
      "dark-cyan": {
        "$value": "#333D42",
        "$type": "color",
        "$description": "text · ×3263"
      },
      "dark-gray": {
        "$value": "#21272A",
        "$type": "color",
        "$description": "text · ×952"
      },
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "background · ×862"
      },
      "dark-gray-2": {
        "$value": "#181C1F",
        "$type": "color",
        "$description": "text · ×501"
      },
      "light-gray": {
        "$value": "#EEF1F3",
        "$type": "color",
        "$description": "text · ×290"
      },
      "cyan": {
        "$value": "#5C6C74",
        "$type": "color",
        "$description": "text · ×280"
      },
      "blue": {
        "$value": "#115BCA",
        "$type": "color",
        "$description": "text · ×162"
      },
      "cyan-2": {
        "$value": "#576F76",
        "$type": "color",
        "$description": "text · ×126"
      },
      "white": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×117"
      },
      "mid-gray": {
        "$value": "#808080",
        "$type": "color",
        "$description": "text · ×40"
      },
      "orange": {
        "$value": "#FF4500",
        "$type": "color",
        "$description": "text · ×24"
      },
      "light-blue": {
        "$value": "#D4EAFF",
        "$type": "color",
        "$description": "text · ×6"
      },
      "dark-gray-3": {
        "$value": "#222222",
        "$type": "color",
        "$description": "text · ×6"
      },
      "light-gray-2": {
        "$value": "#E5EBEE",
        "$type": "color",
        "$description": "background · ×4"
      },
      "light-green": {
        "$value": "#95DAB6",
        "$type": "color",
        "$description": "background · ×3"
      },
      "blue-2": {
        "$value": "#5D81A2",
        "$type": "color",
        "$description": "background · ×3"
      },
      "pink": {
        "$value": "#FF1AA7",
        "$type": "color",
        "$description": "background · ×3"
      },
      "cyan-3": {
        "$value": "#32CDC8",
        "$type": "color",
        "$description": "background · ×3"
      },
      "light-gray-3": {
        "$value": "#BBBDBF",
        "$type": "color",
        "$description": "background · ×3"
      },
      "red": {
        "$value": "#D42B42",
        "$type": "color",
        "$description": "background · ×3"
      },
      "cyan-4": {
        "$value": "#0DD3BB",
        "$type": "color",
        "$description": "background · ×3"
      },
      "dark-green": {
        "$value": "#638029",
        "$type": "color",
        "$description": "background · ×3"
      },
      "cyan-5": {
        "$value": "#1A7FAA",
        "$type": "color",
        "$description": "background · ×3"
      },
      "green": {
        "$value": "#349E48",
        "$type": "color",
        "$description": "background · ×3"
      },
      "purple": {
        "$value": "#9116E9",
        "$type": "color",
        "$description": "background · ×3"
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
      "light-orange": {
        "$value": "#FFC49C",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "yellow": {
        "$value": "#DDD622",
        "$type": "color",
        "$description": "text · ×2"
      },
      "blue-3": {
        "$value": "#2972A3",
        "$type": "color",
        "$description": "text · ×2"
      },
      "red-2": {
        "$value": "#FC0335",
        "$type": "color",
        "$description": "text · ×2"
      },
      "light-orange-2": {
        "$value": "#EADDC8",
        "$type": "color",
        "$description": "text · ×2"
      },
      "blue-4": {
        "$value": "#0077FF",
        "$type": "color",
        "$description": "text · ×2"
      },
      "pink-2": {
        "$value": "#FF1493",
        "$type": "color",
        "$description": "text · ×2"
      },
      "blue-5": {
        "$value": "#0079D3",
        "$type": "color",
        "$description": "text · ×2"
      },
      "dark-blue": {
        "$value": "#49545F",
        "$type": "color",
        "$description": "text · ×2"
      },
      "blue-6": {
        "$value": "#0051FF",
        "$type": "color",
        "$description": "text · ×2"
      },
      "dark-blue-2": {
        "$value": "#0A449B",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-blue-2": {
        "$value": "#BBCFDA",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-3": {
        "$value": "#D93900",
        "$type": "color",
        "$description": "background · ×1"
      },
      "cyan-6": {
        "$value": "#98AFB9",
        "$type": "color",
        "$description": "background · ×1"
      },
      "purple-2": {
        "$value": "#9406F9",
        "$type": "color",
        "$description": "background · ×1"
      },
      "orange-4": {
        "$value": "#958578",
        "$type": "color",
        "$description": "background · ×1"
      },
      "white-2": {
        "$value": "#F7F7F7",
        "$type": "color",
        "$description": "background · ×1"
      },
      "mid-gray-2": {
        "$value": "#7C8183",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-blue-3": {
        "$value": "#C2DBFF",
        "$type": "color",
        "$description": "background · ×1"
      },
      "dark-gray-4": {
        "$value": "#0C0E10",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-gray-4": {
        "$value": "#BFC2C7",
        "$type": "color",
        "$description": "background · ×1"
      },
      "blue-7": {
        "$value": "#096CF6",
        "$type": "color",
        "$description": "background · ×1"
      },
      "white-3": {
        "$value": "#F6F8F9",
        "$type": "color",
        "$description": "background · ×1"
      },
      "dark-gray-5": {
        "$value": "#131313",
        "$type": "color",
        "$description": "text · ×1"
      },
      "white-4": {
        "$value": "#F8F8F8",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-gray-5": {
        "$value": "#C1C1C1",
        "$type": "color",
        "$description": "border · ×1"
      }
    },
    "fontSize": {
      "font-size-2xs": {
        "$value": "12px",
        "$type": "dimension"
      },
      "font-size-xs": {
        "$value": "14px",
        "$type": "dimension"
      },
      "font-size-sm": {
        "$value": "16px",
        "$type": "dimension"
      },
      "font-size-base": {
        "$value": "18px",
        "$type": "dimension"
      },
      "font-size-lg": {
        "$value": "21px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "-apple-system",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "Times",
        "$type": "fontFamily"
      }
    },
    "fontWeight": {
      "font-weight-regular": {
        "$value": "400",
        "$type": "fontWeight"
      },
      "font-weight-semibold": {
        "$value": "600",
        "$type": "fontWeight"
      },
      "font-weight-bold": {
        "$value": "700",
        "$type": "fontWeight"
      },
      "font-weight-extrabold": {
        "$value": "800",
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
        "$value": "21px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "22px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "24px",
        "$type": "dimension"
      },
      "line-height-lh-6": {
        "$value": "30px",
        "$type": "dimension"
      },
      "line-height-lh-7": {
        "$value": "31.5px",
        "$type": "dimension"
      },
      "line-height-lh-8": {
        "$value": "38px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "-0.028px",
        "$type": "dimension"
      },
      "letter-spacing-normal": {
        "$value": "-0.012px",
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
        "$value": "6px",
        "$type": "dimension"
      },
      "space-3": {
        "$value": "7px",
        "$type": "dimension"
      },
      "space-4": {
        "$value": "8px",
        "$type": "dimension"
      },
      "space-5": {
        "$value": "9px",
        "$type": "dimension"
      },
      "space-6": {
        "$value": "11px",
        "$type": "dimension"
      },
      "space-8": {
        "$value": "12px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "14px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "16px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "24px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "56px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "378.969px",
        "$type": "dimension"
      },
      "space-32": {
        "$value": "380.094px",
        "$type": "dimension"
      },
      "space-40": {
        "$value": "407.25px",
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
        "$value": "4",
        "$type": "number"
      },
      "z-5": {
        "$value": "10",
        "$type": "number"
      },
      "z-6": {
        "$value": "50",
        "$type": "number"
      },
      "z-7": {
        "$value": "101",
        "$type": "number"
      },
      "z-8": {
        "$value": "1001",
        "$type": "number"
      },
      "z-9": {
        "$value": "9000",
        "$type": "number"
      },
      "z-10": {
        "$value": "9999",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "260px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "325px",
        "$type": "dimension"
      },
      "breakpoint-md": {
        "$value": "500px",
        "$type": "dimension"
      },
      "breakpoint-lg": {
        "$value": "599px",
        "$type": "dimension"
      },
      "breakpoint-xl": {
        "$value": "607px",
        "$type": "dimension"
      },
      "breakpoint-2xl": {
        "$value": "608px",
        "$type": "dimension"
      },
      "breakpoint-3xl": {
        "$value": "767px",
        "$type": "dimension"
      },
      "breakpoint-bp-8": {
        "$value": "768px",
        "$type": "dimension"
      },
      "breakpoint-bp-9": {
        "$value": "960px",
        "$type": "dimension"
      },
      "breakpoint-bp-10": {
        "$value": "1024px",
        "$type": "dimension"
      },
      "breakpoint-bp-11": {
        "$value": "1200px",
        "$type": "dimension"
      },
      "breakpoint-bp-12": {
        "$value": "1416px",
        "$type": "dimension"
      },
      "breakpoint-bp-13": {
        "$value": "1472px",
        "$type": "dimension"
      },
      "breakpoint-bp-14": {
        "$value": "1920px",
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
        "$value": "4px",
        "$type": "dimension"
      },
      "radius-lg": {
        "$value": "8px",
        "$type": "dimension"
      },
      "radius-xl": {
        "$value": "16px",
        "$type": "dimension"
      },
      "radius-2xl": {
        "$value": "20px",
        "$type": "dimension"
      },
      "radius-full": {
        "$value": "999px",
        "$type": "dimension"
      },
      "radius-r7": {
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
    "shadow": {
      "shadow-sm": {
        "$value": "rgba(255, 255, 255, 0.2) 0px 0px 6px 0px inset",
        "$type": "shadow"
      },
      "shadow-md": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 1px 2px 0px",
        "$type": "shadow"
      },
      "shadow-lg": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px",
        "$type": "shadow"
      },
      "shadow-xl": {
        "$value": "rgb(128, 128, 128) 0px 0px 5px 0px",
        "$type": "shadow"
      }
    }
  },
  "motion": {
    "duration": {
      "duration-instant": {
        "$value": "0.2s",
        "$type": "duration"
      },
      "duration-fast": {
        "$value": "0.25s",
        "$type": "duration"
      },
      "duration-normal": {
        "$value": "0.3s",
        "$type": "duration"
      }
    },
    "easing": {
      "easing-ease-out": {
        "$value": "ease-out",
        "$type": "cubicBezier"
      }
    }
  },
  "opacity": {
    "opacity-25": {
      "$value": 0.25,
      "$type": "number"
    },
    "opacity-30": {
      "$value": 0.3,
      "$type": "number"
    },
    "opacity-60": {
      "$value": 0.6,
      "$type": "number"
    },
    "opacity-75": {
      "$value": 0.75,
      "$type": "number"
    },
    "opacity-90": {
      "$value": 0.9,
      "$type": "number"
    }
  }
}
```
