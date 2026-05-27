# Home \ Anthropic — Design System

**Source:** https://www.anthropic.com/  
**Generated:** 05/05/2026, 21:28:58  
**Extracted:** 17 colors · 34 type tokens · 30 spacing steps · 5 breakpoints · 16 motion tokens

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
| `--color-dark-gray` | `#141413` | hsl(60, 3%, 8%) | ×1192 |
| `--color-white` | `#FAF9F5` | hsl(48, 33%, 97%) | ×434 |
| `--color-mid-gray-2` | `#87867F` | hsl(53, 3%, 51%) | ×124 |
| `--color-light-gray` | `#F0EEE6` | hsl(48, 25%, 92%) | ×19 |
| `--color-light-orange` | `#E3DACC` | hsl(37, 29%, 85%) | ×3 |
| `--color-red` | `#D97757` | hsl(15, 63%, 60%) | ×3 |
| `--color-dark-gray-5` | `#3D3D3A` | hsl(60, 3%, 23%) | ×3 |
| `--color-orange` | `#C6613F` | hsl(15, 54%, 51%) | ×2 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×431 |
| `--color-mid-gray` | `#B0AEA5` | hsl(49, 7%, 67%) | ×372 |
| `--color-dark-gray-2` | `#141412` | hsl(60, 5%, 7%) | ×38 |
| `--color-white-2` | `#FFFFFF` | hsl(0, 0%, 100%) | ×14 |
| `--color-light-gray-2` | `#E8E6DC` | hsl(50, 21%, 89%) | ×4 |
| `--color-mid-gray-3` | `#A1A0A0` | hsl(0, 1%, 63%) | ×2 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-gray-3` | `rgba(20, 20, 19, 0.1) rgb(20, 20, 19) rgb(20, 20, 19)` | hsl(0, 0%, 8%) | ×17 |

### Shadow Colors

_None detected._

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-gray-4` | `#181818` | hsl(0, 0%, 9%) | ×9 |
| `--color-white-3` | `#F9F9F7` | hsl(60, 14%, 97%) | ×1 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `sans-serif` |
| `--font-family-2` | `Anthropic Serif` |
| `--font-family-3` | `Anthropic Sans` |
| `--font-family-4` | `Anthropic Mono` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `12px` |  |
| `--font-size-xs` | `14px` |  |
| `--font-size-sm` | `15px` |  |
| `--font-size-base` | `16px` |  |
| `--font-size-lg` | `18px` |  |
| `--font-size-xl` | `20px` |  |
| `--font-size-2xl` | `24px` |  |
| `--font-size-3xl` | `54.8506px` |  |
| `--font-size-4xl` | `80.751px` |  |

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
| `--line-height-tight` | `15px` |
| `--line-height-snug` | `16px` |
| `--line-height-normal` | `16.8px` |
| `--line-height-relaxed` | `18.2px` |
| `--line-height-loose` | `20px` |
| `--line-height-lh-6` | `21px` |
| `--line-height-lh-7` | `22.4px` |
| `--line-height-lh-8` | `25.2px` |
| `--line-height-lh-9` | `26px` |
| `--line-height-lh-10` | `28px` |
| `--line-height-lh-11` | `31.2px` |
| `--line-height-lh-12` | `33.6px` |
| `--line-height-lh-13` | `60.3357px` |
| `--line-height-lh-14` | `88.8261px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `-0.24px` |
| `--letter-spacing-normal` | `-0.08px` |
| `--letter-spacing-wide` | `-0.0375px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `0.203125px` | ×2 |
| `--space-2` | `2px` | ×48 |
| `--space-3` | `4px` | ×82 |
| `--space-4` | `5px` | ×1 |
| `--space-5` | `8px` | ×182 |
| `--space-6` | `12px` | ×34 |
| `--space-8` | `12.3984px` | ×2 |
| `--space-10` | `16px` | ×46 |
| `--space-12` | `21px` | ×2 |
| `--space-16` | `22.4px` | ×10 |
| `--space-20` | `24px` | ×15 |
| `--space-24` | `75.8906px` | ×2 |
| `--space-32` | `30.4751px` | ×68 |
| `--space-40` | `32px` | ×6 |
| `--space-48` | `43.4253px` | ×12 |
| `--space-64` | `52.8438px` | ×1 |
| `--space-80` | `52.8516px` | ×1 |
| `--space-96` | `55px` | ×2 |
| `--space-128` | `58.5547px` | ×1 |
| `--space-160` | `58.5625px` | ×1 |
| `--space-192` | `61.5px` | ×2 |
| `--space-256` | `61.7031px` | ×8 |
| `--space-23` | `67.8008px` | ×2 |
| `--space-25` | `78.4219px` | ×2 |
| `--space-26` | `80.751px` | ×2 |
| `--space-27` | `99.5547px` | ×2 |
| `--space-28` | `141.844px` | ×1 |
| `--space-29` | `149.156px` | ×1 |
| `--space-30` | `165.195px` | ×2 |
| `--space-31` | `214.484px` | ×1 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `1px` | ×87 |
| `--border-width-thin` | `2px` | ×4 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `0px 0px 8px 8px` | ×2 |
| `--radius-md` | `0px 8px 8px 0px` | ×2 |
| `--radius-lg` | `8px 0px 0px 8px` | ×8 |
| `--radius-xl` | `8px` | ×37 |
| `--radius-2xl` | `12px` | ×4 |
| `--radius-full` | `16px` | ×6 |
| `--radius-r7` | `24px` | ×9 |
| `--radius-r8` | `1600px` | ×3 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgba(0, 0, 0, 0.01) 0px 2px 2px 0px, rgba(0, 0, 0, 0.02) 0px 4px 4px 0px, rgba(0, 0, 0, 0.04) 0px 16px 24px 0px` | ×3 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.1s` | ×74 |
| `--duration-fast` | `0.111817s` | ×2 |
| `--duration-normal` | `0.114977s` | ×2 |
| `--duration-slow` | `0.145867s` | ×2 |
| `--duration-slower` | `0.148286s` | ×2 |
| `--duration-duration-6` | `0.2s` | ×295 |
| `--duration-duration-7` | `0.232643s` | ×2 |
| `--duration-duration-8` | `0.279883s` | ×2 |
| `--duration-duration-9` | `0.3s` | ×2 |
| `--duration-duration-10` | `0.310642s` | ×2 |
| `--duration-duration-11` | `0.328988s` | ×2 |
| `--duration-duration-12` | `0.395088s` | ×2 |
| `--duration-duration-13` | `0.4s` | ×11 |
| `--duration-duration-14` | `0.476454s` | ×2 |
| `--duration-duration-15` | `0.8s` | ×20 |

### Easing Functions

| Token | Value | Usage |
| --- | --- | --- |
| `--easing-ease-out` | `ease-out` | ×2 |

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `1` |
| `--z-2` | `2` |
| `--z-3` | `3` |
| `--z-4` | `101` |
| `--z-5` | `1000` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `479px` |
| `--breakpoint-sm` | `501px` |
| `--breakpoint-md` | `767px` |
| `--breakpoint-lg` | `768px` |
| `--breakpoint-xl` | `991px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-50` | `0.5` | ×1 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-black` | `--color-dark-gray` | 1.14:1 | Fail |
| `--color-black` | `--color-white` | 19.93:1 | AAA |
| `--color-black` | `--color-mid-gray-2` | 5.75:1 | AA |
| `--color-black` | `--color-light-gray` | 18.08:1 | AAA |
| `--color-black` | `--color-light-orange` | 15.17:1 | AAA |
| `--color-mid-gray` | `--color-dark-gray` | 8.29:1 | AAA |
| `--color-mid-gray` | `--color-white` | 2.11:1 | Fail |
| `--color-mid-gray` | `--color-mid-gray-2` | 1.64:1 | Fail |
| `--color-mid-gray` | `--color-light-gray` | 1.91:1 | Fail |
| `--color-mid-gray` | `--color-light-orange` | 1.61:1 | Fail |
| `--color-dark-gray-2` | `--color-dark-gray` | 1:1 | Fail |
| `--color-dark-gray-2` | `--color-white` | 17.51:1 | AAA |
| `--color-dark-gray-2` | `--color-mid-gray-2` | 5.05:1 | AA |
| `--color-dark-gray-2` | `--color-light-gray` | 15.88:1 | AAA |
| `--color-dark-gray-2` | `--color-light-orange` | 13.32:1 | AAA |
| `--color-white-2` | `--color-dark-gray` | 18.43:1 | AAA |
| `--color-white-2` | `--color-white` | 1.05:1 | Fail |
| `--color-white-2` | `--color-mid-gray-2` | 3.65:1 | AA Large |
| `--color-white-2` | `--color-light-gray` | 1.16:1 | Fail |
| `--color-white-2` | `--color-light-orange` | 1.38:1 | Fail |
| `--color-light-gray-2` | `--color-dark-gray` | 14.73:1 | AAA |
| `--color-light-gray-2` | `--color-white` | 1.19:1 | Fail |
| `--color-light-gray-2` | `--color-mid-gray-2` | 2.92:1 | Fail |
| `--color-light-gray-2` | `--color-light-gray` | 1.08:1 | Fail |
| `--color-light-gray-2` | `--color-light-orange` | 1.11:1 | Fail |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--_color-theme---background` | `var(--swatch--ivory-light)` |
| `--_text-style---font-family` | `var(--_typography---font--paragraph-text)` |
| `--_color-theme---text` | `var(--swatch--slate-dark)` |
| `--_text-style---font-size` | `var(--_typography---font-size--paragraph-m)` |
| `--_text-style---line-height` | `var(--_typography---line-height--1-4)` |
| `--_text-style---font-weight` | `var(--_typography---font--paragraph-regular)` |
| `--_text-style---letter-spacing` | `var(--_typography---letter-spacing--0em)` |
| `--border-width--main` | `.0625rem` |
| `--_color-theme---link--text-hover` | `var(--swatch--slate-light)` |
| `--_typography---font--paragraph-medium` | `500` |
| `--_typography---font--display-serif-family` | `"Anthropic Serif",Georgia,sans-serif` |
| `--_text-style---margin-bottom` | `var(--_spacing---space--4)` |
| `--_text-style---margin-top` | `var(--_spacing---space--4)` |
| `--_spacing---space--6` | `var(--size--2rem)` |
| `--size--1-5rem` | `1.5rem` |
| `--size--0-5rem` | `.5rem` |
| `--size--1rem` | `1rem` |
| `--size--2rem` | `clamp(1.75rem, 1.6734693877551021rem + 0.326530612244898vw, 2rem)` |
| `--_spacing---space--8` | `var(--size--3rem)` |
| `--radius--large` | `var(--size--1rem)` |
| `--radius--main` | `var(--size--0-5rem)` |
| `--container--main` | `calc(var(--site--max-width) - var(--site--margin) * 2)` |
| `--container--small` | `calc(var(--column-width--plus-gutter) * (var(--site--column-count) - 4) - var(--site--gutter))` |
| `--container--full` | `calc(100% - 4rem)` |
| `--radius--small` | `var(--size--0-25rem)` |
| `--_spacing---space--4` | `var(--size--1rem)` |
| `--site--gutter` | `var(--_spacing---space--6)` |
| `--_spacing---gap--gap-xl` | `var(--_spacing---space--9)` |
| `--size--0rem` | `0rem` |
| `--_spacing---space--5` | `var(--size--1-5rem)` |
| `--_spacing---space--1` | `var(--size--0-25rem)` |
| `--_spacing---space--2` | `var(--size--0-5rem)` |
| `--_spacing---space--3` | `var(--size--0-75rem)` |
| `--_spacing---space--7` | `var(--size--2-5rem)` |
| `--_typography---font--display-sans` | `"Anthropic Sans",Arial,sans-serif` |
| `--_typography---font--display-sans-medium` | `500` |
| `--_typography---font--display-sans-semibold` | `600` |
| `--_typography---font--display-serif-semibold` | `600` |
| `--radius--round` | `100vw` |
| `--size--7-5rem` | `clamp(4.25rem, 3.2551020408163267rem + 4.244897959183674vw, 7.5rem)` |
| `--_color-theme---border` | `var(--swatch--slate-faded-10)` |
| `--size--0-25rem` | `.25rem` |
| `--_spacing---space--9` | `var(--size--4rem)` |
| `--_typography---font--detail` | `"Anthropic Sans",Arial,sans-serif` |
| `--size--1-25rem` | `1.25rem` |
| `--_typography---font--display-sans-bold` | `700` |
| `--_color-theme---background-secondary` | `var(--swatch--ivory-medium)` |
| `--_spacing---gap--gap-xs` | `var(--_spacing---space--2)` |
| `--swatch--clay` | `#d97757` |
| `--_color-theme---text-agate` | `var(--swatch--cloud-medium)` |
| `--size--0-375rem` | `.375rem` |
| `--size--0-75rem` | `.75rem` |
| `--swatch--slate-dark` | `#141413` |
| `--swatch--white` | `white` |
| `--column-width--4` | `calc(var(--column-width--plus-gutter) * 4 - var(--site--gutter))` |
| `--column-width--8` | `calc(var(--column-width--plus-gutter) * 8 - var(--site--gutter))` |
| `--column-width--12` | `calc(var(--column-width--plus-gutter) * 12 - var(--site--gutter))` |
| `--swatch--transparent` | `transparent` |
| `--_button-style---border` | `var(--_color-theme---button-primary--border)` |
| `--_button-style---background` | `var(--_color-theme---button-primary--background)` |
| `--_button-style---text` | `var(--_color-theme---button-primary--text)` |
| `--_typography---letter-spacing--0-005em` | `-.005em` |
| `--_button-style---border-hover` | `var(--_color-theme---button-primary--border-hover)` |
| `--_button-style---background-hover` | `var(--_color-theme---button-primary--background-hover)` |
| `--_button-style---text-hover` | `var(--_color-theme---button-primary--text-hover)` |
| `--_typography---font--mono-medium` | `500` |
| `--_color-theme---background-secondary-hover` | `var(--swatch--ivory-dark)` |
| `--swatch--accent` | `#c6613f` |
| `--swatch--brand-text` | `var(--swatch--slate-dark)` |
| `--_typography---font-size--paragraph-m` | `var(--size--1-25rem)` |
| `--swatch--ivory-dark` | `#e8e6dc` |
| `--_color-theme---button-primary--text` | `var(--swatch--ivory-light)` |
| `--_typography---font-size--paragraph-s` | `var(--size--1-125rem)` |
| `--size--3rem` | `clamp(2.25rem, 2.020408163265306rem + 0.9795918367346939vw, 3rem)` |
| `--site--margin` | `clamp(2rem, 1.0816326530612246rem + 3.9183673469387754vw, 5rem)` |
| `--_spacing---space--11` | `var(--size--6rem)` |
| `--size--10rem` | `clamp(5.5rem, 4.122448979591836rem + 5.877551020408163vw, 10rem)` |
| `--swatch--slate-faded-10` | `#1414131a` |
| `--_typography---font-size--detail-m` | `var(--size--1rem)` |
| `--_typography---font--detail-regular` | `400` |
| `--size--0-125rem` | `.125rem` |
| `--_spacing---section-space--none` | `var(--size--0rem)` |
| `--_spacing---section-space--small` | `var(--size--4rem)` |
| `--_spacing---section-space--main` | `var(--size--10rem)` |
| `--_spacing---section-space--large` | `var(--size--14rem)` |
| `--_spacing---section-space--page-top` | `var(--size--12rem)` |
| `--_spacing---section-space--extra-small` | `var(--size--2rem)` |
| `--size--6rem` | `clamp(3.5rem, 2.7346938775510203rem + 3.2653061224489797vw, 6rem)` |
| `--swatch--ivory-medium` | `#f0eee6` |
| `--swatch--olive` | `#788c5d` |
| `--focus--offset-inner` | `-.125rem` |
| `--_spacing---gap--gap-m` | `var(--_spacing---space--5)` |
| `--_typography---font-size--paragraph-xs` | `var(--size--1rem)` |
| `--_spacing---gap--gap-s` | `var(--_spacing---space--4)` |
| `--_typography---font-size--display-s` | `var(--size--1-5rem)` |
| `--swatch--ivory-light` | `#faf9f5` |
| `--_spacing---space--10` | `var(--size--5rem)` |
| `--_typography---font--detail-medium` | `500` |
| `--_typography---font-size--detail-s` | `var(--size--0-875rem)` |
| `--_color-theme---button-primary--border` | `var(--swatch--slate-dark)` |
| `--swatch--slate-light` | `#5e5d59` |
| `--_typography---font--paragraph-text` | `"Anthropic Serif",Georgia,sans-serif` |
| `--_typography---font-size--detail-xs` | `var(--size--0-75rem)` |
| `--_typography---font-size--detail-xl` | `var(--size--1-25rem)` |
| `--_typography---font-size--detail-l` | `var(--size--1-125rem)` |
| `--_color-theme---card` | `var(--swatch--white)` |
| `--_color-theme---card-faded` | `var(--swatch--slate-faded-10)` |
| `--_color-theme---card-faded-hover` | `var(--swatch--slate-faded-20)` |
| `--_color-theme---link--text` | `var(--swatch--slate-dark)` |
| `--_spacing---gap--gap-l` | `var(--_spacing---space--8)` |
| `--swatch--oat` | `#e3dacc` |
| `--swatch--cactus` | `#bcd1ca` |
| `--swatch--sky` | `#6a9bcc` |
| `--swatch--heather` | `#cbcadb` |
| `--swatch--fig` | `#c46686` |
| `--swatch--coral` | `#ebcece` |
| `--_spacing---gap--gap-l<deleted\|variable-bb2d43fb-349e-c28e-e594-6daad1d2702c>` | `var(--_spacing---space--8)` |
| `--size--2-5rem` | `clamp(2rem, 1.846938775510204rem + 0.653061224489796vw, 2.5rem)` |
| `--column-width--3` | `calc(var(--column-width--plus-gutter) * 3 - var(--site--gutter))` |
| `--_spacing---gap--gap-s<deleted\|variable-9c57745c-53fa-fe77-7b3e-da81e97c1c35>` | `var(--_spacing---space--4)` |
| `--_color-theme---border-hover` | `var(--swatch--slate-faded-20)` |
| `--column-margin--1` | `calc(var(--column-width--plus-gutter) * 1)` |
| `--column-margin--0` | `0px` |
| `--size--4rem` | `clamp(2.5rem, 2.0408163265306123rem + 1.9591836734693877vw, 4rem)` |
| `--size--8rem` | `clamp(4.5rem, 3.4285714285714284rem + 4.571428571428571vw, 8rem)` |
| `--size--16rem` | `16rem` |
| `--size--0-875rem` | `.875rem` |
| `--swatch--slate-medium` | `#3d3d3a` |
| `--_typography---font--mono` | `"Anthropic Mono",Arial,sans-serif` |
| `--swatch--cloud-medium` | `#b0aea5` |
| `--swatch--cloud-light` | `#d1cfc5` |
| `--swatch--cloud-dark` | `#87867f` |
| `--swatch--manilla` | `#ebdbbc` |
| `--swatch--kraft` | `#d4a27f` |
| `--column-width--6` | `calc(var(--column-width--plus-gutter) * 6 - var(--site--gutter))` |
| `--column-width--10` | `calc(var(--column-width--plus-gutter) * 10 - var(--site--gutter))` |
| `--column-margin--12` | `calc(var(--column-width--plus-gutter) * 12)` |
| `--swatch--slate-faded-20` | `#14141333` |
| `--column-width--11` | `calc(var(--column-width--plus-gutter) * 11 - var(--site--gutter))` |
| `--_spacing---section-space--medium` | `var(--size--6rem)` |
| `--_typography---line-height--1` | `1` |
| `--_typography---font--display-serif-regular` | `400` |
| `--_text-style---text-transform` | `var(--_typography---text-transform--none)` |
| `--_text-style---trim-top` | `var(--_typography---font--paragraph-trim-top)` |
| `--_text-style---trim-bottom` | `var(--_typography---font--paragraph-trim-bottom)` |
| `--_alignment---flex` | `var(--align--flex-start)` |
| `--_alignment---text` | `var(--align--text-left)` |
| `--_color-theme---link--text-active` | `var(--swatch--slate-dark)` |
| `--site--width` | `89.5rem` |
| `--site--column-count` | `12` |
| `--focus--width` | `.125rem` |
| `--focus--offset-outer` | `.25rem` |
| `--swatch--ivory-faded-10` | `#faf9f51a` |
| `--swatch--ivory-faded-20` | `#faf9f533` |
| `--_color-theme---button-primary--background` | `var(--swatch--slate-dark)` |
| `--_color-theme---button-primary--background-hover` | `var(--swatch--slate-medium)` |
| `--_color-theme---button-primary--border-hover` | `var(--swatch--slate-medium)` |
| `--_color-theme---button-primary--text-hover` | `var(--swatch--ivory-light)` |
| `--_color-theme---button-secondary--background` | `var(--swatch--transparent)` |
| `--_color-theme---button-secondary--border` | `var(--swatch--slate-dark)` |
| `--_color-theme---button-secondary--text` | `var(--swatch--slate-dark)` |
| `--_color-theme---button-secondary--background-hover` | `var(--swatch--slate-dark)` |
| `--_color-theme---button-secondary--border-hover` | `var(--swatch--slate-dark)` |
| `--_color-theme---button-secondary--text-hover` | `var(--swatch--ivory-light)` |
| `--_color-theme---button-tertiary--background` | `var(--swatch--transparent)` |
| `--_color-theme---button-tertiary--border` | `var(--_color-theme---border)` |
| `--_color-theme---button-tertiary--text` | `var(--_color-theme---text)` |
| `--_color-theme---button-tertiary--background-hover` | `var(--swatch--transparent)` |
| `--_color-theme---button-tertiary--border-hover` | `var(--_color-theme---text)` |
| `--_color-theme---button-tertiary--text-hover` | `var(--_color-theme---text)` |
| `--_spacing---space--12` | `var(--size--10rem)` |
| `--size--1-125rem` | `1.125rem` |
| `--size--3-5rem` | `clamp(2.375rem, 2.0306122448979593rem + 1.4693877551020407vw, 3.5rem)` |
| `--size--4-5rem` | `clamp(2.75rem, 2.2142857142857144rem + 2.2857142857142856vw, 4.5rem)` |
| `--size--5rem` | `clamp(3rem, 2.3877551020408165rem + 2.612244897959184vw, 5rem)` |
| `--size--5-5rem` | `clamp(3.25rem, 2.561224489795918rem + 2.9387755102040813vw, 5.5rem)` |
| `--size--6-5rem` | `clamp(3.75rem, 2.9081632653061225rem + 3.5918367346938775vw, 6.5rem)` |
| `--size--7rem` | `clamp(4rem, 3.0816326530612246rem + 3.9183673469387754vw, 7rem)` |
| `--size--8-5rem` | `clamp(4.75rem, 3.6020408163265305rem + 4.8979591836734695vw, 8.5rem)` |
| `--size--9rem` | `clamp(5rem, 3.7755102040816326rem + 5.224489795918368vw, 9rem)` |
| `--size--9-5rem` | `clamp(5.25rem, 3.9489795918367347rem + 5.551020408163265vw, 9.5rem)` |
| `--size--11rem` | `clamp(5.75rem, 4.142857142857143rem + 6.857142857142858vw, 11rem)` |
| `--size--12rem` | `clamp(6rem, 4.163265306122449rem + 7.836734693877551vw, 12rem)` |
| `--size--13rem` | `clamp(6.5rem, 4.510204081632653rem + 8.489795918367347vw, 13rem)` |
| `--size--14rem` | `clamp(7rem, 4.857142857142857rem + 9.142857142857142vw, 14rem)` |
| `--size--15rem` | `clamp(7.5rem, 5.204081632653061rem + 9.795918367346939vw, 15rem)` |
| `--_typography---font--display-sans-trim-top` | `.34em` |
| `--_typography---font--display-sans-trim-bottom` | `.4em` |
| `--_typography---font--display-serif-trim-top` | `.48em` |
| `--_typography---font--display-serif-trim-bottom` | `.3em` |
| `--_typography---font--detail-trim-top` | `.34em` |
| `--_typography---font--detail-trim-bottom` | `.4em` |
| `--_typography---font--paragraph-trim-top` | `.44em` |
| `--_typography---font--paragraph-trim-bottom` | `.27em` |
| `--_typography---font--paragraph-regular` | `400` |
| `--_typography---font--mono-trim-top` | `.19em` |
| `--_typography---font--mono-trim-bottom` | `.33em` |
| `--_typography---font--mono-regular` | `400` |
| `--_typography---letter-spacing--0-02em` | `-.02em` |
| `--_typography---letter-spacing--0em` | `0em` |
| `--_typography---line-height--1-05` | `1.05` |
| `--_typography---line-height--1-1` | `1.1` |
| `--_typography---line-height--1-3` | `1.3` |
| `--_typography---line-height--1-4` | `1.4` |
| `--_typography---line-height--1-5` | `1.5` |
| `--_typography---font-size--display-xs` | `var(--size--1-25rem)` |
| `--_typography---font-size--display-m` | `var(--size--2rem)` |
| `--_typography---font-size--display-l` | `var(--size--3rem)` |
| `--_typography---font-size--display-xl` | `var(--size--4rem)` |
| `--_typography---font-size--display-xxl` | `var(--size--4-5rem)` |
| `--_typography---font-size--display-xxxl` | `var(--size--6rem)` |
| `--_typography---font-size--paragraph-l` | `var(--size--1-5rem)` |
| `--_typography---font-size--monospace` | `var(--size--1-125rem)` |
| `--column-width--1` | `calc((var(--container--main) - var(--site--gutter-total)) / var(--site--column-count))` |
| `--column-width--2` | `calc(var(--column-width--plus-gutter) * 2 - var(--site--gutter))` |
| `--column-width--5` | `calc(var(--column-width--plus-gutter) * 5 - var(--site--gutter))` |
| `--column-width--7` | `calc(var(--column-width--plus-gutter) * 7 - var(--site--gutter))` |
| `--column-width--9` | `calc(var(--column-width--plus-gutter) * 9 - var(--site--gutter))` |
| `--column-margin--2` | `calc(var(--column-width--plus-gutter) * 2)` |
| `--column-margin--3` | `calc(var(--column-width--plus-gutter) * 3)` |
| `--column-margin--4` | `calc(var(--column-width--plus-gutter) * 4)` |
| `--column-margin--5` | `calc(var(--column-width--plus-gutter) * 5)` |
| `--column-margin--6` | `calc(var(--column-width--plus-gutter) * 6)` |
| `--column-margin--7` | `calc(var(--column-width--plus-gutter) * 7)` |
| `--column-margin--8` | `calc(var(--column-width--plus-gutter) * 8)` |
| `--column-margin--9` | `calc(var(--column-width--plus-gutter) * 9)` |
| `--column-margin--10` | `calc(var(--column-width--plus-gutter) * 10)` |
| `--column-margin--11` | `calc(var(--column-width--plus-gutter) * 11)` |
| `--align--flex-start` | `flex-start` |
| `--align--flex-center` | `center` |
| `--align--flex-end` | `flex-end` |
| `--align--text-left` | `left` |
| `--align--text-center` | `center` |
| `--align--text-right` | `right` |
| `--_typography---text-transform--none` | `none` |
| `--_typography---text-transform--uppercase` | `uppercase` |
| `--_typography---text-transform--capitalize` | `0px` |
| `--_typography---text-transform--lowercase` | `lowercase` |
| `--site--max-width` | `min(var(--site--width), 100vw)` |
| `--site--gutter-total` | `calc(var(--site--gutter) * (var(--site--column-count) - 1))` |
| `--column-width--plus-gutter` | `calc(var(--column-width--1) + var(--site--gutter))` |
| `--breakout-start` | `[full-start] minmax(0, 1fr) [content-start]` |
| `--breakout-end` | `[content-end] minmax(0, 1fr) [full-end]` |
| `--grid-breakout-single` | `var(--breakout-start) minmax(0, var(--container--main)) var(--breakout-end)` |
| `--grid-breakout` | `var(--breakout-start) repeat(var(--site--column-count), minmax(0, var(--column-width--1))) var(--breakout-end)` |
| `--grid-main` | `repeat(var(--site--column-count), minmax(0, 1fr))` |
| `--grid-1` | `repeat(1, minmax(0, 1fr))` |
| `--grid-2` | `repeat(2, minmax(0, 1fr))` |
| `--grid-3` | `repeat(3, minmax(0, 1fr))` |
| `--grid-4` | `repeat(4, minmax(0, 1fr))` |
| `--grid-5` | `repeat(5, minmax(0, 1fr))` |
| `--grid-6` | `repeat(6, minmax(0, 1fr))` |
| `--grid-7` | `repeat(7, minmax(0, 1fr))` |
| `--grid-8` | `repeat(8, minmax(0, 1fr))` |
| `--grid-9` | `repeat(9, minmax(0, 1fr))` |
| `--grid-10` | `repeat(10, minmax(0, 1fr))` |
| `--grid-11` | `repeat(11, minmax(0, 1fr))` |
| `--grid-12` | `repeat(12, minmax(0, 1fr))` |
| `--_typography---text-transform--captialize` | `capitalize` |
| `---font-size--display-xs` | `clamp(1.125rem, 1.086734693877551rem + 0.163265306122449vw, 1.25rem)` |
| `---font-size--display-s` | `clamp(1.25rem, 1.1734693877551021rem + 0.326530612244898vw, 1.5rem)` |
| `---font-size--display-m` | `clamp(1.75rem, 1.6734693877551021rem + 0.326530612244898vw, 2rem)` |
| `---font-size--display-l` | `clamp(2rem, 1.6938775510204083rem + 1.306122448979592vw, 3rem)` |
| `---font-size--display-xl` | `clamp(2.5rem, 2.0408163265306123rem + 1.9591836734693877vw, 4rem)` |
| `---font-size--display-xxl` | `clamp(3rem, 2.3877551020408165rem + 2.612244897959184vw, 5rem)` |
| `---font-size--paragraph-s` | `clamp(1rem, 0.9617346938775511rem + 0.163265306122449vw, 1.125rem)` |
| `---font-size--paragraph-m` | `clamp(1.125rem, 1.086734693877551rem + 0.163265306122449vw, 1.25rem)` |
| `---font-size--paragraph-l` | `clamp(1.375rem, 1.336734693877551rem + 0.163265306122449vw, 1.5rem)` |
| `---font-size--detail-xs` | `clamp(1.375rem, 1.336734693877551rem + 0.163265306122449vw, 1.5rem)` |
| `---font-size--monospace` | `clamp(0.875rem, 0.5306122448979592rem + 1.4693877551020407vw, 2rem)` |
| `--nav--height` | `4.25rem` |
| `--nav--banner-height` | `2.75rem` |
| `--nav--height-total` | `var(--nav--height)` |
| `--nav--icon-thickness` | `var(--border-width--main)` |
| `--nav--hamburger-thickness` | `var(--nav--icon-thickness)` |
| `--nav--hamburger-gap` | `0.4rem` |
| `--nav--hamburger-rotate` | `45` |
| `--nav--menu-open-duration` | `400ms` |
| `--nav--menu-close-duration` | `400ms` |
| `--nav--dropdown-duration` | `200ms` |
| `--nav--dropdown-open-duration` | `200ms` |
| `--nav--dropdown-delay` | `0ms` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — Home \ Anthropic
 * Source: https://www.anthropic.com/
 * Generated: 05/05/2026, 21:28:58
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-dark-gray: #141413; /* hsl(60, 3%, 8%) · background */
  --color-white: #FAF9F5; /* hsl(48, 33%, 97%) · background */
  --color-black: #000000; /* hsl(0, 0%, 0%) · text */
  --color-mid-gray: #B0AEA5; /* hsl(49, 7%, 67%) · text */
  --color-mid-gray-2: #87867F; /* hsl(53, 3%, 51%) · background */
  --color-dark-gray-2: #141412; /* hsl(60, 5%, 7%) · text */
  --color-light-gray: #F0EEE6; /* hsl(48, 25%, 92%) · background */
  --color-dark-gray-3: rgba(20, 20, 19, 0.1) rgb(20, 20, 19) rgb(20, 20, 19); /* hsl(0, 0%, 8%) · border */
  --color-white-2: #FFFFFF; /* hsl(0, 0%, 100%) · text */
  --color-dark-gray-4: #181818; /* hsl(0, 0%, 9%) · fill */
  --color-light-gray-2: #E8E6DC; /* hsl(50, 21%, 89%) · text */
  --color-light-orange: #E3DACC; /* hsl(37, 29%, 85%) · background */
  --color-red: #D97757; /* hsl(15, 63%, 60%) · background */
  --color-dark-gray-5: #3D3D3A; /* hsl(60, 3%, 23%) · background */
  --color-orange: #C6613F; /* hsl(15, 54%, 51%) · background */
  --color-mid-gray-3: #A1A0A0; /* hsl(0, 1%, 63%) · text */
  --color-white-3: #F9F9F7; /* hsl(60, 14%, 97%) · fill */

  /* ── Core: Typography ── */
  --font-size-2xs: 12px;
  --font-size-xs: 14px;
  --font-size-sm: 15px;
  --font-size-base: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 20px;
  --font-size-2xl: 24px;
  --font-size-3xl: 54.8506px;
  --font-size-4xl: 80.751px;
  --font-family-base: sans-serif;
  --font-family-2: Anthropic Serif;
  --font-family-3: Anthropic Sans;
  --font-family-4: Anthropic Mono;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-tight: 15px;
  --line-height-snug: 16px;
  --line-height-normal: 16.8px;
  --line-height-relaxed: 18.2px;
  --line-height-loose: 20px;
  --line-height-lh-6: 21px;
  --line-height-lh-7: 22.4px;
  --line-height-lh-8: 25.2px;
  --line-height-lh-9: 26px;
  --line-height-lh-10: 28px;
  --line-height-lh-11: 31.2px;
  --line-height-lh-12: 33.6px;
  --line-height-lh-13: 60.3357px;
  --line-height-lh-14: 88.8261px;
  --letter-spacing-tight: -0.24px;
  --letter-spacing-normal: -0.08px;
  --letter-spacing-wide: -0.0375px;

  /* ── Layout: Spacing ── */
  --space-1: 0.203125px;
  --space-2: 2px;
  --space-3: 4px;
  --space-4: 5px;
  --space-5: 8px;
  --space-6: 12px;
  --space-8: 12.3984px;
  --space-10: 16px;
  --space-12: 21px;
  --space-16: 22.4px;
  --space-20: 24px;
  --space-24: 75.8906px;
  --space-32: 30.4751px;
  --space-40: 32px;
  --space-48: 43.4253px;
  --space-64: 52.8438px;
  --space-80: 52.8516px;
  --space-96: 55px;
  --space-128: 58.5547px;
  --space-160: 58.5625px;
  --space-192: 61.5px;
  --space-256: 61.7031px;
  --space-23: 67.8008px;
  --space-25: 78.4219px;
  --space-26: 80.751px;
  --space-27: 99.5547px;
  --space-28: 141.844px;
  --space-29: 149.156px;
  --space-30: 165.195px;
  --space-31: 214.484px;

  /* ── Borders ── */
  --border-width-hairline: 1px;
  --border-width-thin: 2px;
  --radius-sm: 0px 0px 8px 8px;
  --radius-md: 0px 8px 8px 0px;
  --radius-lg: 8px 0px 0px 8px;
  --radius-xl: 8px;
  --radius-2xl: 12px;
  --radius-full: 16px;
  --radius-r7: 24px;
  --radius-r8: 1600px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgba(0, 0, 0, 0.01) 0px 2px 2px 0px, rgba(0, 0, 0, 0.02) 0px 4px 4px 0px, rgba(0, 0, 0, 0.04) 0px 16px 24px 0px;

  /* ── Motion ── */
  --duration-instant: 0.1s;
  --duration-fast: 0.111817s;
  --duration-normal: 0.114977s;
  --duration-slow: 0.145867s;
  --duration-slower: 0.148286s;
  --duration-duration-6: 0.2s;
  --duration-duration-7: 0.232643s;
  --duration-duration-8: 0.279883s;
  --duration-duration-9: 0.3s;
  --duration-duration-10: 0.310642s;
  --duration-duration-11: 0.328988s;
  --duration-duration-12: 0.395088s;
  --duration-duration-13: 0.4s;
  --duration-duration-14: 0.476454s;
  --duration-duration-15: 0.8s;
  --easing-ease-out: ease-out;

  /* ── Layout: Z-Index ── */
  --z-1: 1;
  --z-2: 2;
  --z-3: 3;
  --z-4: 101;
  --z-5: 1000;

  /* ── Breakpoints ── */
  --breakpoint-xs: 479px;
  --breakpoint-sm: 501px;
  --breakpoint-md: 767px;
  --breakpoint-lg: 768px;
  --breakpoint-xl: 991px;

  /* ── Opacity ── */
  --opacity-50: 0.5;
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://www.anthropic.com/",
    "title": "Home \\ Anthropic",
    "generatedAt": "2026-05-05T15:58:58.301Z"
  },
  "core": {
    "color": {
      "dark-gray": {
        "$value": "#141413",
        "$type": "color",
        "$description": "background · ×1192"
      },
      "white": {
        "$value": "#FAF9F5",
        "$type": "color",
        "$description": "background · ×434"
      },
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "text · ×431"
      },
      "mid-gray": {
        "$value": "#B0AEA5",
        "$type": "color",
        "$description": "text · ×372"
      },
      "mid-gray-2": {
        "$value": "#87867F",
        "$type": "color",
        "$description": "background · ×124"
      },
      "dark-gray-2": {
        "$value": "#141412",
        "$type": "color",
        "$description": "text · ×38"
      },
      "light-gray": {
        "$value": "#F0EEE6",
        "$type": "color",
        "$description": "background · ×19"
      },
      "dark-gray-3": {
        "$value": "rgba(20, 20, 19, 0.1) rgb(20, 20, 19) rgb(20, 20, 19)",
        "$type": "color",
        "$description": "border · ×17"
      },
      "white-2": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "text · ×14"
      },
      "dark-gray-4": {
        "$value": "#181818",
        "$type": "color",
        "$description": "fill · ×9"
      },
      "light-gray-2": {
        "$value": "#E8E6DC",
        "$type": "color",
        "$description": "text · ×4"
      },
      "light-orange": {
        "$value": "#E3DACC",
        "$type": "color",
        "$description": "background · ×3"
      },
      "red": {
        "$value": "#D97757",
        "$type": "color",
        "$description": "background · ×3"
      },
      "dark-gray-5": {
        "$value": "#3D3D3A",
        "$type": "color",
        "$description": "background · ×3"
      },
      "orange": {
        "$value": "#C6613F",
        "$type": "color",
        "$description": "background · ×2"
      },
      "mid-gray-3": {
        "$value": "#A1A0A0",
        "$type": "color",
        "$description": "text · ×2"
      },
      "white-3": {
        "$value": "#F9F9F7",
        "$type": "color",
        "$description": "fill · ×1"
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
        "$value": "15px",
        "$type": "dimension"
      },
      "font-size-base": {
        "$value": "16px",
        "$type": "dimension"
      },
      "font-size-lg": {
        "$value": "18px",
        "$type": "dimension"
      },
      "font-size-xl": {
        "$value": "20px",
        "$type": "dimension"
      },
      "font-size-2xl": {
        "$value": "24px",
        "$type": "dimension"
      },
      "font-size-3xl": {
        "$value": "54.8506px",
        "$type": "dimension"
      },
      "font-size-4xl": {
        "$value": "80.751px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "sans-serif",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "Anthropic Serif",
        "$type": "fontFamily"
      },
      "font-family-3": {
        "$value": "Anthropic Sans",
        "$type": "fontFamily"
      },
      "font-family-4": {
        "$value": "Anthropic Mono",
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
        "$value": "15px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "16px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "16.8px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "18.2px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "20px",
        "$type": "dimension"
      },
      "line-height-lh-6": {
        "$value": "21px",
        "$type": "dimension"
      },
      "line-height-lh-7": {
        "$value": "22.4px",
        "$type": "dimension"
      },
      "line-height-lh-8": {
        "$value": "25.2px",
        "$type": "dimension"
      },
      "line-height-lh-9": {
        "$value": "26px",
        "$type": "dimension"
      },
      "line-height-lh-10": {
        "$value": "28px",
        "$type": "dimension"
      },
      "line-height-lh-11": {
        "$value": "31.2px",
        "$type": "dimension"
      },
      "line-height-lh-12": {
        "$value": "33.6px",
        "$type": "dimension"
      },
      "line-height-lh-13": {
        "$value": "60.3357px",
        "$type": "dimension"
      },
      "line-height-lh-14": {
        "$value": "88.8261px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "-0.24px",
        "$type": "dimension"
      },
      "letter-spacing-normal": {
        "$value": "-0.08px",
        "$type": "dimension"
      },
      "letter-spacing-wide": {
        "$value": "-0.0375px",
        "$type": "dimension"
      }
    }
  },
  "layout": {
    "spacing": {
      "space-1": {
        "$value": "0.203125px",
        "$type": "dimension"
      },
      "space-2": {
        "$value": "2px",
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
        "$value": "8px",
        "$type": "dimension"
      },
      "space-6": {
        "$value": "12px",
        "$type": "dimension"
      },
      "space-8": {
        "$value": "12.3984px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "16px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "21px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "22.4px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "24px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "75.8906px",
        "$type": "dimension"
      },
      "space-32": {
        "$value": "30.4751px",
        "$type": "dimension"
      },
      "space-40": {
        "$value": "32px",
        "$type": "dimension"
      },
      "space-48": {
        "$value": "43.4253px",
        "$type": "dimension"
      },
      "space-64": {
        "$value": "52.8438px",
        "$type": "dimension"
      },
      "space-80": {
        "$value": "52.8516px",
        "$type": "dimension"
      },
      "space-96": {
        "$value": "55px",
        "$type": "dimension"
      },
      "space-128": {
        "$value": "58.5547px",
        "$type": "dimension"
      },
      "space-160": {
        "$value": "58.5625px",
        "$type": "dimension"
      },
      "space-192": {
        "$value": "61.5px",
        "$type": "dimension"
      },
      "space-256": {
        "$value": "61.7031px",
        "$type": "dimension"
      },
      "space-23": {
        "$value": "67.8008px",
        "$type": "dimension"
      },
      "space-25": {
        "$value": "78.4219px",
        "$type": "dimension"
      },
      "space-26": {
        "$value": "80.751px",
        "$type": "dimension"
      },
      "space-27": {
        "$value": "99.5547px",
        "$type": "dimension"
      },
      "space-28": {
        "$value": "141.844px",
        "$type": "dimension"
      },
      "space-29": {
        "$value": "149.156px",
        "$type": "dimension"
      },
      "space-30": {
        "$value": "165.195px",
        "$type": "dimension"
      },
      "space-31": {
        "$value": "214.484px",
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
        "$value": "101",
        "$type": "number"
      },
      "z-5": {
        "$value": "1000",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "479px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "501px",
        "$type": "dimension"
      },
      "breakpoint-md": {
        "$value": "767px",
        "$type": "dimension"
      },
      "breakpoint-lg": {
        "$value": "768px",
        "$type": "dimension"
      },
      "breakpoint-xl": {
        "$value": "991px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
        "$value": "0px 0px 8px 8px",
        "$type": "dimension"
      },
      "radius-md": {
        "$value": "0px 8px 8px 0px",
        "$type": "dimension"
      },
      "radius-lg": {
        "$value": "8px 0px 0px 8px",
        "$type": "dimension"
      },
      "radius-xl": {
        "$value": "8px",
        "$type": "dimension"
      },
      "radius-2xl": {
        "$value": "12px",
        "$type": "dimension"
      },
      "radius-full": {
        "$value": "16px",
        "$type": "dimension"
      },
      "radius-r7": {
        "$value": "24px",
        "$type": "dimension"
      },
      "radius-r8": {
        "$value": "1600px",
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
        "$value": "rgba(0, 0, 0, 0.01) 0px 2px 2px 0px, rgba(0, 0, 0, 0.02) 0px 4px 4px 0px, rgba(0, 0, 0, 0.04) 0px 16px 24px 0px",
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
        "$value": "0.111817s",
        "$type": "duration"
      },
      "duration-normal": {
        "$value": "0.114977s",
        "$type": "duration"
      },
      "duration-slow": {
        "$value": "0.145867s",
        "$type": "duration"
      },
      "duration-slower": {
        "$value": "0.148286s",
        "$type": "duration"
      },
      "duration-duration-6": {
        "$value": "0.2s",
        "$type": "duration"
      },
      "duration-duration-7": {
        "$value": "0.232643s",
        "$type": "duration"
      },
      "duration-duration-8": {
        "$value": "0.279883s",
        "$type": "duration"
      },
      "duration-duration-9": {
        "$value": "0.3s",
        "$type": "duration"
      },
      "duration-duration-10": {
        "$value": "0.310642s",
        "$type": "duration"
      },
      "duration-duration-11": {
        "$value": "0.328988s",
        "$type": "duration"
      },
      "duration-duration-12": {
        "$value": "0.395088s",
        "$type": "duration"
      },
      "duration-duration-13": {
        "$value": "0.4s",
        "$type": "duration"
      },
      "duration-duration-14": {
        "$value": "0.476454s",
        "$type": "duration"
      },
      "duration-duration-15": {
        "$value": "0.8s",
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
    "opacity-50": {
      "$value": 0.5,
      "$type": "number"
    }
  }
}
```
