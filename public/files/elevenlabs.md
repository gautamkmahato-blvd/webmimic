# Free AI Voice Generator & Voice Agents Platform | ElevenLabs — Design System

**Source:** https://elevenlabs.io/  
**Generated:** 15/04/2026, 00:26:36  
**Extracted:** 50 colors · 41 type tokens · 56 spacing steps · 2 breakpoints · 7 motion tokens

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
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×10583 |
| `--color-white` | `#FFFFFF` | hsl(0, 0%, 100%) | ×212 |
| `--color-white-2` | `#F5F3F1` | hsl(30, 17%, 95%) | ×40 |
| `--color-white-3` | `#FDFCFC` | hsl(0, 20%, 99%) | ×36 |
| `--color-light-gray-2` | `#EBE8E4` | hsl(34, 15%, 91%) | ×12 |
| `--color-orange` | `#FF4704` | hsl(16, 100%, 51%) | ×3 |
| `--color-blue-3` | `#0447FF` | hsl(224, 100%, 51%) | ×3 |
| `--color-white-4` | `#FAF8F8` | hsl(0, 17%, 98%) | ×2 |
| `--color-light-gray-4` | `rgba(245, 242, 239, 0.8)` | hsl(30, 23%, 95%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-gray` | `#3D3D3D` | hsl(0, 0%, 24%) | ×3741 |
| `--color-mid-gray` | `#777169` | hsl(34, 6%, 44%) | ×118 |
| `--color-dark-gray-2` | `#57534E` | hsl(33, 5%, 32%) | ×31 |
| `--color-mid-gray-2` | `#A59F97` | hsl(34, 7%, 62%) | ×28 |
| `--color-red` | `#F41A2F` | hsl(354, 91%, 53%) | ×9 |
| `--color-blue` | `#0A59D2` | hsl(216, 91%, 43%) | ×9 |
| `--color-dark-blue` | `#052F70` | hsl(216, 91%, 23%) | ×8 |
| `--color-mid-gray-3` | `#949494` | hsl(0, 0%, 58%) | ×4 |
| `--color-dark-gray-3` | `#44403B` | hsl(33, 7%, 25%) | ×1 |
| `--color-black-2` | `#0C0A09` | hsl(20, 14%, 4%) | ×1 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray` | `#E5E5E5` | hsl(0, 0%, 90%) | ×2371 |

### Shadow Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-orange` | `rgba(78, 50, 23, 0.04)` | hsl(29, 50%, 20%) | ×1 |

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray-3` | `#E0DFDD` | hsl(40, 5%, 87%) | ×4 |
| `--color-blue-2` | `#635BFF` | hsl(243, 100%, 68%) | ×3 |
| `--color-green` | `#76B900` | hsl(82, 100%, 36%) | ×2 |
| `--color-cyan` | `#00CCBC` | hsl(175, 100%, 40%) | ×2 |
| `--color-white-5` | `#FFF9F5` | hsl(24, 100%, 98%) | ×1 |
| `--color-white-6` | `#F5F8FF` | hsl(222, 100%, 98%) | ×1 |
| `--color-blue-4` | `#3D75D8` | hsl(218, 67%, 54%) | ×1 |
| `--color-blue-5` | `#2A68D2` | hsl(218, 67%, 49%) | ×1 |
| `--color-blue-6` | `#75BEE5` | hsl(201, 68%, 68%) | ×1 |
| `--color-cyan-2` | `#52D0E9` | hsl(190, 77%, 62%) | ×1 |
| `--color-blue-7` | `#2159BA` | hsl(218, 70%, 43%) | ×1 |
| `--color-blue-8` | `#3A74DA` | hsl(218, 68%, 54%) | ×1 |
| `--color-cyan-3` | `#6CD7EC` | hsl(190, 77%, 67%) | ×1 |
| `--color-blue-9` | `#5AB9F1` | hsl(202, 84%, 65%) | ×1 |
| `--color-blue-10` | `#33A1E5` | hsl(203, 77%, 55%) | ×1 |
| `--color-blue-11` | `#1F5FCF` | hsl(218, 74%, 47%) | ×1 |
| `--color-blue-12` | `#2C54CA` | hsl(225, 64%, 48%) | ×1 |
| `--color-cyan-4` | `#3A9ECF` | hsl(200, 61%, 52%) | ×1 |
| `--color-blue-13` | `#3167C5` | hsl(218, 60%, 48%) | ×1 |
| `--color-light-cyan` | `#ADE8F3` | hsl(189, 74%, 82%) | ×1 |
| `--color-light-cyan-2` | `#D8F1F5` | hsl(188, 59%, 90%) | ×1 |
| `--color-light-cyan-3` | `#A5DBE6` | hsl(190, 57%, 77%) | ×1 |
| `--color-cyan-5` | `#2B9DD6` | hsl(200, 68%, 50%) | ×1 |
| `--color-light-cyan-4` | `#AEE0E9` | hsl(189, 57%, 80%) | ×1 |
| `--color-cyan-6` | `#20BAD0` | hsl(188, 73%, 47%) | ×1 |
| `--color-blue-14` | `#1E53B0` | hsl(218, 71%, 40%) | ×1 |
| `--color-blue-15` | `#2F40D2` | hsl(234, 64%, 50%) | ×1 |
| `--color-dark-blue-2` | `#1C366A` | hsl(220, 58%, 26%) | ×1 |
| `--color-cyan-7` | `#16E1FF` | hsl(188, 100%, 54%) | ×1 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `Inter` |
| `--font-family-2` | `Waldenburg` |
| `--font-family-3` | `WaldenburgHF` |
| `--font-family-4` | `ui-monospace` |
| `--font-family-5` | `Geist Mono` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `10px` |  |
| `--font-size-xs` | `12px` |  |
| `--font-size-sm` | `13px` |  |
| `--font-size-base` | `14px` |  |
| `--font-size-lg` | `15px` |  |
| `--font-size-xl` | `16px` |  |
| `--font-size-2xl` | `18px` |  |
| `--font-size-3xl` | `20px` |  |
| `--font-size-4xl` | `32px` |  |
| `--font-size-5xl` | `36px` |  |
| `--font-size-6xl` | `48px` |  |

### Font Weights

| Token | Weight |
| --- | --- |
| `--font-weight-light` | `300` |
| `--font-weight-regular` | `400` |
| `--font-weight-medium` | `500` |
| `--font-weight-bold` | `700` |

### Line Heights

| Token | Value |
| --- | --- |
| `--line-height-tight` | `12px` |
| `--line-height-snug` | `15px` |
| `--line-height-normal` | `16px` |
| `--line-height-relaxed` | `18px` |
| `--line-height-loose` | `19.6px` |
| `--line-height-lh-6` | `21px` |
| `--line-height-lh-7` | `22px` |
| `--line-height-lh-8` | `24px` |
| `--line-height-lh-9` | `26px` |
| `--line-height-lh-10` | `27px` |
| `--line-height-lh-11` | `28.8px` |
| `--line-height-lh-12` | `36px` |
| `--line-height-lh-13` | `42px` |
| `--line-height-lh-14` | `52px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `-0.96px` |
| `--letter-spacing-normal` | `0.14px` |
| `--letter-spacing-wide` | `0.15px` |
| `--letter-spacing-wider` | `0.16px` |
| `--letter-spacing-widest` | `0.18px` |
| `--letter-spacing-ls-6` | `0.28px` |
| `--letter-spacing-ls-7` | `0.32px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `0.5px` | ×2 |
| `--space-2` | `1px` | ×1 |
| `--space-3` | `1.5px` | ×2 |
| `--space-4` | `2px` | ×3 |
| `--space-5` | `3px` | ×6 |
| `--space-6` | `3.5px` | ×4 |
| `--space-8` | `4px` | ×51 |
| `--space-10` | `5.25px` | ×1 |
| `--space-12` | `6px` | ×200 |
| `--space-16` | `8px` | ×106 |
| `--space-20` | `8.5px` | ×1 |
| `--space-24` | `24px` | ×45 |
| `--space-32` | `40px` | ×83 |
| `--space-40` | `78.75px` | ×2 |
| `--space-48` | `150.969px` | ×1 |
| `--space-64` | `14px` | ×15 |
| `--space-80` | `15.6406px` | ×2 |
| `--space-96` | `16px` | ×130 |
| `--space-128` | `17px` | ×8 |
| `--space-160` | `18px` | ×26 |
| `--space-192` | `19px` | ×6 |
| `--space-256` | `20px` | ×46 |
| `--space-23` | `22px` | ×2 |
| `--space-25` | `26.5px` | ×1 |
| `--space-26` | `27px` | ×1 |
| `--space-27` | `28px` | ×47 |
| `--space-28` | `32px` | ×51 |
| `--space-29` | `35px` | ×2 |
| `--space-30` | `35.5px` | ×4 |
| `--space-31` | `36px` | ×2 |
| `--space-33` | `44px` | ×2 |
| `--space-34` | `48px` | ×56 |
| `--space-35` | `56px` | ×3 |
| `--space-36` | `64px` | ×13 |
| `--space-37` | `66px` | ×2 |
| `--space-38` | `72px` | ×2 |
| `--space-39` | `73px` | ×3 |
| `--space-41` | `85.4922px` | ×1 |
| `--space-42` | `95.5px` | ×2 |
| `--space-43` | `96px` | ×3 |
| `--space-44` | `120px` | ×3 |
| `--space-45` | `128px` | ×1 |
| `--space-46` | `133.453px` | ×1 |
| `--space-47` | `141.5px` | ×2 |
| `--space-49` | `156.609px` | ×1 |
| `--space-50` | `160px` | ×8 |
| `--space-51` | `168.797px` | ×1 |
| `--space-52` | `168.805px` | ×1 |
| `--space-53` | `191.648px` | ×1 |
| `--space-54` | `191.656px` | ×1 |
| `--space-55` | `257.594px` | ×2 |
| `--space-56` | `288px` | ×2 |
| `--space-57` | `342px` | ×2 |
| `--space-58` | `357.258px` | ×2 |
| `--space-59` | `423px` | ×2 |
| `--space-60` | `468px` | ×2 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `1px` | ×3861 |
| `--border-width-thin` | `2px` | ×1 |
| `--border-width-base` | `4px` | ×24 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `0px 0px 24px 24px` | ×1 |
| `--radius-md` | `0px 0px 0px 20px` | ×1 |
| `--radius-lg` | `2px` | ×12 |
| `--radius-xl` | `4px` | ×100 |
| `--radius-2xl` | `7px` | ×939 |
| `--radius-full` | `7.2px 21.6px 21.6px` | ×1 |
| `--radius-r7` | `8px 8px 0px 0px` | ×2 |
| `--radius-r8` | `8px 0px 0px 8px` | ×1 |
| `--radius-r9` | `8px` | ×4 |
| `--radius-r10` | `10px` | ×7 |
| `--radius-r11` | `11.5px` | ×1 |
| `--radius-r12` | `12px` | ×2 |
| `--radius-r13` | `16px` | ×10 |
| `--radius-r14` | `18px` | ×6 |
| `--radius-r15` | `20px` | ×67 |
| `--radius-r16` | `24px` | ×10 |
| `--radius-r17` | `30px` | ×1 |
| `--radius-r18` | `50%` | ×1 |
| `--radius-r19` | `50px` | ×4 |
| `--radius-r20` | `100px` | ×4 |
| `--radius-r21` | `9999px` | ×206 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px` | ×30 |
| `--shadow-md` | `rgb(255, 255, 255) 0px 0px 0px 0px inset, rgba(0, 0, 0, 0.075) 0px 0px 0px 0.5px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px` | ×25 |
| `--shadow-lg` | `rgb(255, 255, 255) 0px 0px 0px 0px inset, rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px` | ×18 |
| `--shadow-xl` | `rgba(0, 0, 0, 0) 0px 0px 1px 0px, rgba(0, 0, 0, 0) 0px 4px 4px 0px` | ×9 |
| `--shadow-shadow-5` | `rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 4px 4px 0px` | ×4 |
| `--shadow-shadow-6` | `rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px` | ×4 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.1s` | ×20 |
| `--duration-fast` | `0.15s` | ×550 |
| `--duration-normal` | `0.2s` | ×216 |
| `--duration-slow` | `0.3s` | ×540 |
| `--duration-slower` | `0.36s` | ×122 |
| `--duration-duration-6` | `0.5s` | ×2 |

### Easing Functions

| Token | Value | Usage |
| --- | --- | --- |
| `--easing-linear` | `linear` | ×4 |

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `-10` |
| `--z-2` | `1` |
| `--z-3` | `2` |
| `--z-4` | `3` |
| `--z-5` | `10` |
| `--z-6` | `20` |
| `--z-7` | `30` |
| `--z-8` | `50` |
| `--z-9` | `9998` |
| `--z-10` | `99999` |
| `--z-11` | `2147483645` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `480px` |
| `--breakpoint-sm` | `1024px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-10` | `0.1` | ×1 |
| `--opacity-40` | `0.4` | ×2 |
| `--opacity-50` | `0.5` | ×20 |
| `--opacity-60` | `0.6` | ×1 |
| `--opacity-80` | `0.8` | ×2 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-dark-gray` | `--color-black` | 1.93:1 | Fail |
| `--color-dark-gray` | `--color-white` | 10.86:1 | AAA |
| `--color-dark-gray` | `--color-white-2` | 9.81:1 | AAA |
| `--color-dark-gray` | `--color-white-3` | 10.61:1 | AAA |
| `--color-dark-gray` | `--color-light-gray-2` | 8.89:1 | AAA |
| `--color-mid-gray` | `--color-black` | 4.35:1 | AA Large |
| `--color-mid-gray` | `--color-white` | 4.83:1 | AA |
| `--color-mid-gray` | `--color-white-2` | 4.36:1 | AA Large |
| `--color-mid-gray` | `--color-white-3` | 4.71:1 | AA |
| `--color-mid-gray` | `--color-light-gray-2` | 3.95:1 | AA Large |
| `--color-dark-gray-2` | `--color-black` | 2.75:1 | Fail |
| `--color-dark-gray-2` | `--color-white` | 7.63:1 | AAA |
| `--color-dark-gray-2` | `--color-white-2` | 6.89:1 | AA |
| `--color-dark-gray-2` | `--color-white-3` | 7.45:1 | AAA |
| `--color-dark-gray-2` | `--color-light-gray-2` | 6.25:1 | AA |
| `--color-mid-gray-2` | `--color-black` | 8.01:1 | AAA |
| `--color-mid-gray-2` | `--color-white` | 2.62:1 | Fail |
| `--color-mid-gray-2` | `--color-white-2` | 2.37:1 | Fail |
| `--color-mid-gray-2` | `--color-white-3` | 2.56:1 | Fail |
| `--color-mid-gray-2` | `--color-light-gray-2` | 2.15:1 | Fail |
| `--color-red` | `--color-black` | 5.04:1 | AA |
| `--color-red` | `--color-white` | 4.17:1 | AA Large |
| `--color-red` | `--color-white-2` | 3.77:1 | AA Large |
| `--color-red` | `--color-white-3` | 4.07:1 | AA Large |
| `--color-red` | `--color-light-gray-2` | 3.41:1 | AA Large |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--breakpoint` | `"sm"` |
| `--container-width` | `min(100%,81.5rem)` |
| `--inner-gutter` | `8px` |
| `--outer-gutter` | `20px` |
| `--grid-columns` | `12` |
| `--env` | `"dev"` |
| `--grid-column-bg` | `rgba(127,255,255,0.25)` |
| `--spacing-outer-gutter` | `1.25rem` |
| `--spacing-inner-gutter` | `0.5rem` |
| `--spacing-container-gutter` | `1.25rem` |
| `--spacing-outer-content` | `3.75rem` |
| `--spacing-content-wide` | `7.5rem` |
| `--spacing-content-xwide` | `10rem` |
| `--waldenburg` | `var(--font-waldenburg)` |
| `--waldenburgFH` | `var(--font-waldenburg-fh)` |
| `--jetbrainsMono` | `var(--font-jetbrains-mono)` |
| `--inter` | `var(--font-inter)` |
| `--f-display-01-font-family` | `var(--font-waldenburg-fh)` |
| `--f-display-01-font-weight` | `700` |
| `--f-display-01-font-size` | `3rem` |
| `--f-display-01-line-height` | `100%` |
| `--f-display-02-font-family` | `var(--font-waldenburg-fh)` |
| `--f-display-02-font-weight` | `700` |
| `--f-display-02-font-size` | `2.5rem` |
| `--f-display-02-line-height` | `100%` |
| `--f-heading-01-font-family` | `var(--font-waldenburg)` |
| `--f-heading-01-font-weight` | `300` |
| `--f-heading-01-font-size` | `2.25rem` |
| `--f-heading-01-line-height` | `105%` |
| `--f-heading-01-letter-spacing` | `-0.03em` |
| `--f-heading-02-font-family` | `var(--font-waldenburg)` |
| `--f-heading-02-font-weight` | `300` |
| `--f-heading-02-font-size` | `2rem` |
| `--f-heading-02-line-height` | `110%` |
| `--f-heading-02-letter-spacing` | `-0.03em` |
| `--f-heading-03-font-family` | `var(--font-waldenburg)` |
| `--f-heading-03-font-weight` | `300` |
| `--f-heading-03-font-size` | `1.75rem` |
| `--f-heading-03-line-height` | `120%` |
| `--f-heading-03-letter-spacing` | `-0.02em` |
| `--f-heading-04-font-family` | `var(--font-waldenburg)` |
| `--f-heading-04-font-weight` | `400` |
| `--f-heading-04-font-size` | `1.25rem` |
| `--f-heading-04-line-height` | `130%` |
| `--f-heading-04-letter-spacing` | `-0.01em` |
| `--f-heading-05-font-family` | `var(--font-waldenburg)` |
| `--f-heading-05-font-weight` | `400` |
| `--f-heading-05-font-size` | `1.125rem` |
| `--f-heading-05-line-height` | `135%` |
| `--f-heading-05-letter-spacing` | `0em` |
| `--f-paragraph-01-font-family` | `var(--font-inter)` |
| `--f-paragraph-01-font-weight` | `400` |
| `--f-paragraph-01-font-size` | `1.125rem` |
| `--f-paragraph-01-line-height` | `140%` |
| `--f-paragraph-01-letter-spacing` | `0em` |
| `--f-paragraph-02-font-family` | `var(--font-inter)` |
| `--f-paragraph-02-font-weight` | `400` |
| `--f-paragraph-02-font-size` | `1rem` |
| `--f-paragraph-02-line-height` | `140%` |
| `--f-paragraph-02-letter-spacing` | `0em` |
| `--f-paragraph-03-font-family` | `var(--font-inter)` |
| `--f-paragraph-03-font-weight` | `400` |
| `--f-paragraph-03-font-size` | `0.875rem` |
| `--f-paragraph-03-line-height` | `140%` |
| `--f-paragraph-03-letter-spacing` | `0em` |
| `--f-paragraph-04-font-family` | `var(--font-inter)` |
| `--f-paragraph-04-font-weight` | `400` |
| `--f-paragraph-04-font-size` | `0.75rem` |
| `--f-paragraph-04-line-height` | `140%` |
| `--f-paragraph-04-letter-spacing` | `0em` |
| `--f-subhead-01-font-family` | `var(--font-waldenburg)` |
| `--f-subhead-01-font-weight` | `700` |
| `--f-subhead-01-font-size` | `1.125rem` |
| `--f-subhead-01-line-height` | `140%` |
| `--f-subhead-01-letter-spacing` | `0.01em` |
| `--f-subhead-02-font-family` | `var(--font-waldenburg)` |
| `--f-subhead-02-font-weight` | `700` |
| `--f-subhead-02-font-size` | `1rem` |
| `--f-subhead-02-line-height` | `140%` |
| `--f-subhead-02-letter-spacing` | `0.01em` |
| `--f-subhead-03-font-family` | `var(--font-waldenburg)` |
| `--f-subhead-03-font-weight` | `700` |
| `--f-subhead-03-font-size` | `1rem` |
| `--f-subhead-03-line-height` | `140%` |
| `--f-subhead-03-letter-spacing` | `0.01em` |
| `--f-subhead-04-font-family` | `var(--font-waldenburg)` |
| `--f-subhead-04-font-weight` | `400` |
| `--f-subhead-04-font-size` | `1rem` |
| `--f-subhead-04-line-height` | `140%` |
| `--f-subhead-05-font-family` | `var(--font-waldenburg)` |
| `--f-subhead-05-font-weight` | `400` |
| `--f-subhead-05-font-size` | `0.875rem` |
| `--f-subhead-05-line-height` | `120%` |
| `--f-description-01-font-family` | `var(--font-waldenburg)` |
| `--f-description-01-font-weight` | `400` |
| `--f-description-01-font-size` | `1.125rem` |
| `--f-description-01-line-height` | `130%` |
| `--f-description-01-letter-spacing` | `-0.02em` |
| `--f-description-02-font-family` | `var(--font-inter)` |
| `--f-description-02-font-weight` | `400` |
| `--f-description-02-font-size` | `1rem` |
| `--f-description-02-line-height` | `140%` |
| `--f-description-02-letter-spacing` | `0.01em` |
| `--f-description-03-font-family` | `var(--font-inter)` |
| `--f-description-03-font-weight` | `400` |
| `--f-description-03-font-size` | `1rem` |
| `--f-description-03-line-height` | `140%` |
| `--f-description-03-letter-spacing` | `0.01em` |
| `--f-description-04-font-family` | `var(--font-inter)` |
| `--f-description-04-font-weight` | `400` |
| `--f-description-04-font-size` | `0.875rem` |
| `--f-description-04-line-height` | `140%` |
| `--f-description-04-letter-spacing` | `0.01em` |
| `--f-description-05-font-family` | `var(--font-inter)` |
| `--f-description-05-font-weight` | `400` |
| `--f-description-05-font-size` | `0.875rem` |
| `--f-description-05-line-height` | `140%` |
| `--f-description-05-letter-spacing` | `0.01em` |
| `--f-body-01-font-family` | `var(--font-inter)` |
| `--f-body-01-font-weight` | `400` |
| `--f-body-01-font-size` | `1.0625rem` |
| `--f-body-01-line-height` | `140%` |
| `--f-ui-01-font-family` | `var(--font-waldenburg-fh)` |
| `--f-ui-01-font-weight` | `700` |
| `--f-ui-01-font-size` | `1rem` |
| `--f-ui-01-line-height` | `110%` |
| `--f-ui-01-letter-spacing` | `0.03em` |
| `--f-ui-01-text-transform` | `uppercase` |
| `--f-ui-02-font-family` | `var(--font-inter)` |
| `--f-ui-02-font-weight` | `400` |
| `--f-ui-02-font-size` | `0.875rem` |
| `--f-ui-02-line-height` | `140%` |
| `--f-ui-02-letter-spacing` | `0.02em` |
| `--f-ui-03-font-family` | `var(--font-waldenburg-fh)` |
| `--f-ui-03-font-weight` | `700` |
| `--f-ui-03-font-size` | `0.875rem` |
| `--f-ui-03-line-height` | `110%` |
| `--f-ui-03-letter-spacing` | `0.05em` |
| `--f-ui-03-text-transform` | `uppercase` |
| `--f-ui-04-font-family` | `var(--font-waldenburg-fh)` |
| `--f-ui-04-font-weight` | `700` |
| `--f-ui-04-font-size` | `0.75rem` |
| `--f-ui-04-line-height` | `110%` |
| `--f-ui-04-letter-spacing` | `0.05em` |
| `--f-ui-04-text-transform` | `uppercase` |
| `--f-ui-05-font-family` | `var(--font-inter)` |
| `--f-ui-05-font-weight` | `400` |
| `--f-ui-05-font-size` | `0.75rem` |
| `--f-ui-05-line-height` | `140%` |
| `--f-ui-05-letter-spacing` | `0.02em` |
| `--f-ui-06-font-family` | `var(--font-waldenburg-fh)` |
| `--f-ui-06-font-weight` | `700` |
| `--f-ui-06-font-size` | `0.875rem` |
| `--f-ui-06-line-height` | `110%` |
| `--f-ui-06-letter-spacing` | `0.05em` |
| `--f-ui-07-font-family` | `var(--font-inter)` |
| `--f-ui-07-font-weight` | `400` |
| `--f-ui-07-font-size` | `0.625rem` |
| `--f-ui-07-line-height` | `140%` |
| `--f-ui-07-letter-spacing` | `0.02em` |
| `--f-ui-08-font-family` | `var(--font-inter)` |
| `--f-ui-08-font-weight` | `400` |
| `--f-ui-08-font-size` | `0.75rem` |
| `--f-ui-08-line-height` | `140%` |
| `--f-description-blog-font-family` | `var(--font-inter)` |
| `--f-description-blog-font-weight` | `400` |
| `--f-description-blog-font-size` | `1.0625rem` |
| `--f-description-blog-line-height` | `30px` |
| `--f-description-blog-letter-spacing` | `0.01em` |
| `--f-body-blog-font-family` | `var(--font-inter)` |
| `--f-body-blog-font-weight` | `400` |
| `--f-body-blog-font-size` | `1.0625rem` |
| `--f-body-blog-line-height` | `30px` |
| `---shadcn-background` | `0 0% 100%` |
| `--shadcn-foreground` | `0 0% 3.9%` |
| `--shadcn-card` | `0 0% 100%` |
| `--shadcn-card-foreground` | `0 0% 3.9%` |
| `--shadcn-popover` | `0 0% 100%` |
| `--shadcn-popover-foreground` | `0 0% 3.9%` |
| `--shadcn-primary` | `0 0% 9%` |
| `--shadcn-primary-foreground` | `0 0% 98%` |
| `--shadcn-secondary` | `0 0% 96.1%` |
| `--shadcn-secondary-foreground` | `0 0% 9%` |
| `--shadcn-muted` | `0 0% 96.1%` |
| `--shadcn-muted-foreground` | `0 0% 45.1%` |
| `--shadcn-accent` | `0 0% 96.1%` |
| `--shadcn-accent-foreground` | `0 0% 9%` |
| `--shadcn-destructive` | `0 84.2% 60.2%` |
| `--shadcn-destructive-foreground` | `0 0% 98%` |
| `--shadcn-border` | `0 0% 89.8%` |
| `--shadcn-input` | `0 0% 89.8%` |
| `--shadcn-ring` | `0 0% 3.9%` |
| `--shadcn-radius` | `0.5rem` |
| `--page-background-color` | `var(--eggshell)` |
| `--container-width-absolute` | `min(100vw,81.5rem)` |
| `--contextual-nav-height` | `4rem` |
| `--black` | `#000` |
| `--blue-50` | `#F2F5FC` |
| `--blue-100` | `#E1E8F9` |
| `--blue-200` | `#C8D5F4` |
| `--blue-300` | `#A1BAEC` |
| `--blue-400` | `#7294E3` |
| `--blue-500` | `#5D79DF` |
| `--blue-600` | `#4056CE` |
| `--blue-700` | `#3C48B9` |
| `--blue-800` | `#384094` |
| `--blue-900` | `#353B73` |
| `--blue-950` | `#252846` |
| `--current` | `currentColor` |
| `--cyan-50` | `#EEFBFD` |
| `--cyan-100` | `#D3F4FA` |
| `--cyan-200` | `#ADEAF4` |
| `--cyan-300` | `#74D9EC` |
| `--cyan-400` | `#4EC7E0` |
| `--cyan-500` | `#19A2C1` |
| `--cyan-600` | `#1783A3` |
| `--cyan-700` | `#1A6984` |
| `--cyan-800` | `#1E566C` |
| `--cyan-900` | `#1D495C` |
| `--cyan-950` | `#0D2F3F` |
| `--green-50` | `#ECFDF4` |
| `--green-100` | `#D1FAE3` |
| `--green-200` | `#A7F3CC` |
| `--green-300` | `#6EE7B1` |
| `--green-400` | `#2DD28D` |
| `--green-500` | `#10B978` |
| `--green-600` | `#059661` |
| `--green-700` | `#047851` |
| `--green-800` | `#065F41` |
| `--green-900` | `#064E37` |
| `--green-950` | `#022C20` |
| `--eggshell` | `#FDFCFC` |
| `--inherit` | `inherit` |
| `--magenta-50` | `#FCF2FB` |
| `--magenta-100` | `#FBE4FB` |
| `--magenta-200` | `#F8D3F5` |
| `--magenta-300` | `#F0B2EA` |
| `--magenta-400` | `#E273D5` |
| `--magenta-500` | `#D65CC8` |
| `--magenta-600` | `#B83DA5` |
| `--magenta-700` | `#973086` |
| `--magenta-800` | `#7A296B` |
| `--magenta-900` | `#642656` |
| `--magenta-950` | `#3F0D35` |
| `--neutral-50` | `#F2F2F2` |
| `--neutral-100` | `#E5E5E5` |
| `--neutral-200` | `#DCDCDC` |
| `--neutral-300` | `#BDBDBD` |
| `--neutral-400` | `#949494` |
| `--neutral-500` | `#767676` |
| `--neutral-600` | `#6E6E6E` |
| `--neutral-700` | `#525252` |
| `--neutral-800` | `#464646` |
| `--neutral-900` | `#3D3D3D` |
| `--neutral-950` | `#1C1C1C` |
| `--orange-50` | `#FFF7ED` |
| `--orange-100` | `#FEECD6` |
| `--orange-200` | `#FCD5AC` |
| `--orange-300` | `#F9B778` |
| `--orange-400` | `#F58633` |
| `--orange-500` | `#F36F1C` |
| `--orange-600` | `#E45512` |
| `--orange-700` | `#BD3F11` |
| `--orange-800` | `#963316` |
| `--orange-900` | `#792C15` |
| `--orange-950` | `#492104` |
| `--purple-50` | `#FBF6FE` |
| `--purple-100` | `#F6EBFC` |
| `--purple-200` | `#EEDBF9` |
| `--purple-300` | `#E1BEF4` |
| `--purple-400` | `#CF94EC` |
| `--purple-500` | `#C47DE5` |
| `--purple-600` | `#A94BD2` |
| `--purple-700` | `#9139B7` |
| `--purple-800` | `#7A3396` |
| `--purple-900` | `#632A79` |
| `--purple-950` | `#32123E` |
| `--red-50` | `#FEF3F2` |
| `--red-100` | `#FDE4E3` |
| `--red-200` | `#FDCDCB` |
| `--red-300` | `#FAABA7` |
| `--red-400` | `#F57A74` |
| `--red-500` | `#EB524B` |
| `--red-600` | `#D7332B` |
| `--red-700` | `#B52720` |
| `--red-800` | `#96231E` |
| `--red-900` | `#7D231F` |
| `--red-950` | `#440D0B` |
| `--teal-50` | `#EAFDF9` |
| `--teal-100` | `#CEF8EF` |
| `--teal-200` | `#9EF0DE` |
| `--teal-300` | `#66E1CC` |
| `--teal-400` | `#37C8B5` |
| `--teal-500` | `#1FAD9D` |
| `--teal-600` | `#168D81` |
| `--teal-700` | `#166F67` |
| `--teal-800` | `#165A55` |
| `--teal-900` | `#174A46` |
| `--teal-950` | `#072C2B` |
| `--transparent` | `transparent` |
| `--overlay-darker-plus` | `rgba(0,0,0,0.4)` |
| `--white-50` | `#FFF` |
| `--white-200` | `#F5F3F1` |
| `--yellow-50` | `#FCFCEA` |
| `--yellow-100` | `#FAF9C7` |
| `--yellow-200` | `#F6F092` |
| `--yellow-300` | `#EFDE44` |
| `--yellow-400` | `#EACE25` |
| `--yellow-500` | `#DAB718` |
| `--yellow-600` | `#BC8F12` |
| `--yellow-700` | `#966812` |
| `--yellow-800` | `#7D5316` |
| `--yellow-900` | `#6A4419` |
| `--yellow-950` | `#3E240A` |
| `--tw-font-size-2xs` | `0.8125rem` |
| `--tw-line-height-2xs` | `1.125rem` |
| `--tw-line-height-2xs-loose` | `1.3125rem` |
| `--tw-trim-top-2xs` | `0.25rem` |
| `--tw-trim-bottom-2xs` | `0.28125rem` |
| `--tw-trim-top-2xs-loose` | `0.34375rem` |
| `--tw-trim-bottom-2xs-loose` | `0.375rem` |
| `--tw-font-size-xs` | `0.875rem` |
| `--tw-line-height-xs` | `1.3125rem` |
| `--tw-line-height-xs-tight` | `1.125rem` |
| `--tw-line-height-xs-loose` | `1.5rem` |
| `--tw-trim-top-xs` | `0.34375rem` |
| `--tw-trim-bottom-xs` | `0.34375rem` |
| `--tw-trim-top-xs-tight` | `0.25rem` |
| `--tw-trim-bottom-xs-tight` | `0.25rem` |
| `--tw-trim-top-xs-loose` | `0.4375rem` |
| `--tw-trim-bottom-xs-loose` | `0.4375rem` |
| `--tw-font-size-sm` | `0.9375rem` |
| `--tw-line-height-sm` | `1.375rem` |
| `--tw-line-height-sm-loose` | `1.5625rem` |
| `--tw-trim-top-sm` | `0.34375rem` |
| `--tw-trim-bottom-sm` | `0.34375rem` |
| `--tw-trim-top-sm-loose` | `0.4375rem` |
| `--tw-trim-bottom-sm-loose` | `0.4375rem` |
| `--tw-font-size-base` | `1rem` |
| `--tw-line-height-base` | `1.5rem` |
| `--tw-line-height-base-tight` | `1.25rem` |
| `--tw-line-height-base-loose` | `1.75rem` |
| `--tw-trim-top-base` | `0.375rem` |
| `--tw-trim-bottom-base` | `0.40625rem` |
| `--tw-trim-top-base-tight` | `0.25rem` |
| `--tw-trim-bottom-base-tight` | `0.28125rem` |
| `--tw-trim-top-base-loose` | `0.5rem` |
| `--tw-trim-bottom-base-loose` | `0.53125rem` |
| `--tw-font-size-lg` | `1rem` |
| `--tw-line-height-lg` | `1.5rem` |
| `--tw-line-height-lg-loose` | `1.75rem` |
| `--tw-trim-top-lg` | `0.375rem` |
| `--tw-trim-bottom-lg` | `0.40625rem` |
| `--tw-trim-top-lg-loose` | `0.53125rem` |
| `--tw-trim-bottom-lg-loose` | `0.5625rem` |
| `--tw-font-size-xl` | `1rem` |
| `--tw-line-height-xl` | `1.5rem` |
| `--tw-line-height-xl-loose` | `1.75rem` |
| `--tw-trim-top-xl` | `0.375rem` |
| `--tw-trim-bottom-xl` | `0.40625rem` |
| `--tw-trim-top-xl-loose` | `0.5rem` |
| `--tw-trim-bottom-xl-loose` | `0.53125rem` |
| `--tw-font-size-2xl` | `1.125rem` |
| `--tw-line-height-2xl` | `1.625rem` |
| `--tw-line-height-2xl-loose` | `1.875rem` |
| `--tw-trim-top-2xl` | `0.40625rem` |
| `--tw-trim-bottom-2xl` | `0.40625rem` |
| `--tw-trim-top-2xl-loose` | `0.53125rem` |
| `--tw-trim-bottom-2xl-loose` | `0.53125rem` |
| `--tw-font-size-3xl` | `1.375rem` |
| `--tw-line-height-3xl` | `1.75rem` |
| `--tw-line-height-3xl-loose` | `2rem` |
| `--tw-trim-top-3xl` | `0.375rem` |
| `--tw-trim-bottom-3xl` | `0.375rem` |
| `--tw-trim-top-3xl-loose` | `0.5rem` |
| `--tw-trim-bottom-3xl-loose` | `0.5rem` |
| `--tw-font-size-4xl` | `1.625rem` |
| `--tw-line-height-4xl` | `2rem` |
| `--tw-trim-top-4xl` | `0.40625rem` |
| `--tw-trim-bottom-4xl` | `0.4375rem` |
| `--tw-font-size-5xl` | `1.875rem` |
| `--tw-line-height-5xl` | `2.25rem` |
| `--tw-trim-top-5xl` | `0.4375rem` |
| `--tw-trim-bottom-5xl` | `0.46875rem` |
| `--tw-font-size-6xl` | `2.25rem` |
| `--tw-line-height-6xl` | `2.625rem` |
| `--tw-trim-top-6xl` | `0.46875rem` |
| `--tw-trim-bottom-6xl` | `0.53125rem` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — Free AI Voice Generator & Voice Agents Platform | ElevenLabs
 * Source: https://elevenlabs.io/
 * Generated: 15/04/2026, 00:26:36
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-black: #000000; /* hsl(0, 0%, 0%) · background */
  --color-dark-gray: #3D3D3D; /* hsl(0, 0%, 24%) · text */
  --color-light-gray: #E5E5E5; /* hsl(0, 0%, 90%) · border */
  --color-white: #FFFFFF; /* hsl(0, 0%, 100%) · background */
  --color-mid-gray: #777169; /* hsl(34, 6%, 44%) · text */
  --color-white-2: #F5F3F1; /* hsl(30, 17%, 95%) · background */
  --color-white-3: #FDFCFC; /* hsl(0, 20%, 99%) · background */
  --color-dark-gray-2: #57534E; /* hsl(33, 5%, 32%) · text */
  --color-mid-gray-2: #A59F97; /* hsl(34, 7%, 62%) · text */
  --color-light-gray-2: #EBE8E4; /* hsl(34, 15%, 91%) · background */
  --color-red: #F41A2F; /* hsl(354, 91%, 53%) · text */
  --color-blue: #0A59D2; /* hsl(216, 91%, 43%) · text */
  --color-dark-blue: #052F70; /* hsl(216, 91%, 23%) · text */
  --color-mid-gray-3: #949494; /* hsl(0, 0%, 58%) · text */
  --color-light-gray-3: #E0DFDD; /* hsl(40, 5%, 87%) · fill */
  --color-blue-2: #635BFF; /* hsl(243, 100%, 68%) · fill */
  --color-orange: #FF4704; /* hsl(16, 100%, 51%) · background */
  --color-blue-3: #0447FF; /* hsl(224, 100%, 51%) · background */
  --color-green: #76B900; /* hsl(82, 100%, 36%) · fill */
  --color-cyan: #00CCBC; /* hsl(175, 100%, 40%) · fill */
  --color-white-4: #FAF8F8; /* hsl(0, 17%, 98%) · background */
  --color-dark-gray-3: #44403B; /* hsl(33, 7%, 25%) · text */
  --color-black-2: #0C0A09; /* hsl(20, 14%, 4%) · text */
  --color-white-5: #FFF9F5; /* hsl(24, 100%, 98%) · fill */
  --color-white-6: #F5F8FF; /* hsl(222, 100%, 98%) · fill */
  --color-light-gray-4: rgba(245, 242, 239, 0.8); /* hsl(30, 23%, 95%) · background */
  --color-dark-orange: rgba(78, 50, 23, 0.04); /* hsl(29, 50%, 20%) · shadow */
  --color-blue-4: #3D75D8; /* hsl(218, 67%, 54%) · gradient */
  --color-blue-5: #2A68D2; /* hsl(218, 67%, 49%) · gradient */
  --color-blue-6: #75BEE5; /* hsl(201, 68%, 68%) · gradient */
  --color-cyan-2: #52D0E9; /* hsl(190, 77%, 62%) · gradient */
  --color-blue-7: #2159BA; /* hsl(218, 70%, 43%) · gradient */
  --color-blue-8: #3A74DA; /* hsl(218, 68%, 54%) · gradient */
  --color-cyan-3: #6CD7EC; /* hsl(190, 77%, 67%) · gradient */
  --color-blue-9: #5AB9F1; /* hsl(202, 84%, 65%) · gradient */
  --color-blue-10: #33A1E5; /* hsl(203, 77%, 55%) · gradient */
  --color-blue-11: #1F5FCF; /* hsl(218, 74%, 47%) · gradient */
  --color-blue-12: #2C54CA; /* hsl(225, 64%, 48%) · gradient */
  --color-cyan-4: #3A9ECF; /* hsl(200, 61%, 52%) · gradient */
  --color-blue-13: #3167C5; /* hsl(218, 60%, 48%) · gradient */
  --color-light-cyan: #ADE8F3; /* hsl(189, 74%, 82%) · gradient */
  --color-light-cyan-2: #D8F1F5; /* hsl(188, 59%, 90%) · gradient */
  --color-light-cyan-3: #A5DBE6; /* hsl(190, 57%, 77%) · gradient */
  --color-cyan-5: #2B9DD6; /* hsl(200, 68%, 50%) · gradient */
  --color-light-cyan-4: #AEE0E9; /* hsl(189, 57%, 80%) · gradient */
  --color-cyan-6: #20BAD0; /* hsl(188, 73%, 47%) · gradient */
  --color-blue-14: #1E53B0; /* hsl(218, 71%, 40%) · gradient */
  --color-blue-15: #2F40D2; /* hsl(234, 64%, 50%) · gradient */
  --color-dark-blue-2: #1C366A; /* hsl(220, 58%, 26%) · fill */
  --color-cyan-7: #16E1FF; /* hsl(188, 100%, 54%) · fill */

  /* ── Core: Typography ── */
  --font-size-2xs: 10px;
  --font-size-xs: 12px;
  --font-size-sm: 13px;
  --font-size-base: 14px;
  --font-size-lg: 15px;
  --font-size-xl: 16px;
  --font-size-2xl: 18px;
  --font-size-3xl: 20px;
  --font-size-4xl: 32px;
  --font-size-5xl: 36px;
  --font-size-6xl: 48px;
  --font-family-base: Inter;
  --font-family-2: Waldenburg;
  --font-family-3: WaldenburgHF;
  --font-family-4: ui-monospace;
  --font-family-5: Geist Mono;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --line-height-tight: 12px;
  --line-height-snug: 15px;
  --line-height-normal: 16px;
  --line-height-relaxed: 18px;
  --line-height-loose: 19.6px;
  --line-height-lh-6: 21px;
  --line-height-lh-7: 22px;
  --line-height-lh-8: 24px;
  --line-height-lh-9: 26px;
  --line-height-lh-10: 27px;
  --line-height-lh-11: 28.8px;
  --line-height-lh-12: 36px;
  --line-height-lh-13: 42px;
  --line-height-lh-14: 52px;
  --letter-spacing-tight: -0.96px;
  --letter-spacing-normal: 0.14px;
  --letter-spacing-wide: 0.15px;
  --letter-spacing-wider: 0.16px;
  --letter-spacing-widest: 0.18px;
  --letter-spacing-ls-6: 0.28px;
  --letter-spacing-ls-7: 0.32px;

  /* ── Layout: Spacing ── */
  --space-1: 0.5px;
  --space-2: 1px;
  --space-3: 1.5px;
  --space-4: 2px;
  --space-5: 3px;
  --space-6: 3.5px;
  --space-8: 4px;
  --space-10: 5.25px;
  --space-12: 6px;
  --space-16: 8px;
  --space-20: 8.5px;
  --space-24: 24px;
  --space-32: 40px;
  --space-40: 78.75px;
  --space-48: 150.969px;
  --space-64: 14px;
  --space-80: 15.6406px;
  --space-96: 16px;
  --space-128: 17px;
  --space-160: 18px;
  --space-192: 19px;
  --space-256: 20px;
  --space-23: 22px;
  --space-25: 26.5px;
  --space-26: 27px;
  --space-27: 28px;
  --space-28: 32px;
  --space-29: 35px;
  --space-30: 35.5px;
  --space-31: 36px;
  --space-33: 44px;
  --space-34: 48px;
  --space-35: 56px;
  --space-36: 64px;
  --space-37: 66px;
  --space-38: 72px;
  --space-39: 73px;
  --space-41: 85.4922px;
  --space-42: 95.5px;
  --space-43: 96px;
  --space-44: 120px;
  --space-45: 128px;
  --space-46: 133.453px;
  --space-47: 141.5px;
  --space-49: 156.609px;
  --space-50: 160px;
  --space-51: 168.797px;
  --space-52: 168.805px;
  --space-53: 191.648px;
  --space-54: 191.656px;
  --space-55: 257.594px;
  --space-56: 288px;
  --space-57: 342px;
  --space-58: 357.258px;
  --space-59: 423px;
  --space-60: 468px;

  /* ── Borders ── */
  --border-width-hairline: 1px;
  --border-width-thin: 2px;
  --border-width-base: 4px;
  --radius-sm: 0px 0px 24px 24px;
  --radius-md: 0px 0px 0px 20px;
  --radius-lg: 2px;
  --radius-xl: 4px;
  --radius-2xl: 7px;
  --radius-full: 7.2px 21.6px 21.6px;
  --radius-r7: 8px 8px 0px 0px;
  --radius-r8: 8px 0px 0px 8px;
  --radius-r9: 8px;
  --radius-r10: 10px;
  --radius-r11: 11.5px;
  --radius-r12: 12px;
  --radius-r13: 16px;
  --radius-r14: 18px;
  --radius-r15: 20px;
  --radius-r16: 24px;
  --radius-r17: 30px;
  --radius-r18: 50%;
  --radius-r19: 50px;
  --radius-r20: 100px;
  --radius-r21: 9999px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px;
  --shadow-md: rgb(255, 255, 255) 0px 0px 0px 0px inset, rgba(0, 0, 0, 0.075) 0px 0px 0px 0.5px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
  --shadow-lg: rgb(255, 255, 255) 0px 0px 0px 0px inset, rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
  --shadow-xl: rgba(0, 0, 0, 0) 0px 0px 1px 0px, rgba(0, 0, 0, 0) 0px 4px 4px 0px;
  --shadow-shadow-5: rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 4px 4px 0px;
  --shadow-shadow-6: rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px;

  /* ── Motion ── */
  --duration-instant: 0.1s;
  --duration-fast: 0.15s;
  --duration-normal: 0.2s;
  --duration-slow: 0.3s;
  --duration-slower: 0.36s;
  --duration-duration-6: 0.5s;
  --easing-linear: linear;

  /* ── Layout: Z-Index ── */
  --z-1: -10;
  --z-2: 1;
  --z-3: 2;
  --z-4: 3;
  --z-5: 10;
  --z-6: 20;
  --z-7: 30;
  --z-8: 50;
  --z-9: 9998;
  --z-10: 99999;
  --z-11: 2147483645;

  /* ── Breakpoints ── */
  --breakpoint-xs: 480px;
  --breakpoint-sm: 1024px;

  /* ── Opacity ── */
  --opacity-10: 0.1;
  --opacity-40: 0.4;
  --opacity-50: 0.5;
  --opacity-60: 0.6;
  --opacity-80: 0.8;
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://elevenlabs.io/",
    "title": "Free AI Voice Generator & Voice Agents Platform | ElevenLabs",
    "generatedAt": "2026-04-14T18:56:36.972Z"
  },
  "core": {
    "color": {
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "background · ×10583"
      },
      "dark-gray": {
        "$value": "#3D3D3D",
        "$type": "color",
        "$description": "text · ×3741"
      },
      "light-gray": {
        "$value": "#E5E5E5",
        "$type": "color",
        "$description": "border · ×2371"
      },
      "white": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×212"
      },
      "mid-gray": {
        "$value": "#777169",
        "$type": "color",
        "$description": "text · ×118"
      },
      "white-2": {
        "$value": "#F5F3F1",
        "$type": "color",
        "$description": "background · ×40"
      },
      "white-3": {
        "$value": "#FDFCFC",
        "$type": "color",
        "$description": "background · ×36"
      },
      "dark-gray-2": {
        "$value": "#57534E",
        "$type": "color",
        "$description": "text · ×31"
      },
      "mid-gray-2": {
        "$value": "#A59F97",
        "$type": "color",
        "$description": "text · ×28"
      },
      "light-gray-2": {
        "$value": "#EBE8E4",
        "$type": "color",
        "$description": "background · ×12"
      },
      "red": {
        "$value": "#F41A2F",
        "$type": "color",
        "$description": "text · ×9"
      },
      "blue": {
        "$value": "#0A59D2",
        "$type": "color",
        "$description": "text · ×9"
      },
      "dark-blue": {
        "$value": "#052F70",
        "$type": "color",
        "$description": "text · ×8"
      },
      "mid-gray-3": {
        "$value": "#949494",
        "$type": "color",
        "$description": "text · ×4"
      },
      "light-gray-3": {
        "$value": "#E0DFDD",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "blue-2": {
        "$value": "#635BFF",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "orange": {
        "$value": "#FF4704",
        "$type": "color",
        "$description": "background · ×3"
      },
      "blue-3": {
        "$value": "#0447FF",
        "$type": "color",
        "$description": "background · ×3"
      },
      "green": {
        "$value": "#76B900",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "cyan": {
        "$value": "#00CCBC",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "white-4": {
        "$value": "#FAF8F8",
        "$type": "color",
        "$description": "background · ×2"
      },
      "dark-gray-3": {
        "$value": "#44403B",
        "$type": "color",
        "$description": "text · ×1"
      },
      "black-2": {
        "$value": "#0C0A09",
        "$type": "color",
        "$description": "text · ×1"
      },
      "white-5": {
        "$value": "#FFF9F5",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "white-6": {
        "$value": "#F5F8FF",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-4": {
        "$value": "rgba(245, 242, 239, 0.8)",
        "$type": "color",
        "$description": "background · ×1"
      },
      "dark-orange": {
        "$value": "rgba(78, 50, 23, 0.04)",
        "$type": "color",
        "$description": "shadow · ×1"
      },
      "blue-4": {
        "$value": "#3D75D8",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "blue-5": {
        "$value": "#2A68D2",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "blue-6": {
        "$value": "#75BEE5",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "cyan-2": {
        "$value": "#52D0E9",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "blue-7": {
        "$value": "#2159BA",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "blue-8": {
        "$value": "#3A74DA",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "cyan-3": {
        "$value": "#6CD7EC",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "blue-9": {
        "$value": "#5AB9F1",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "blue-10": {
        "$value": "#33A1E5",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "blue-11": {
        "$value": "#1F5FCF",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "blue-12": {
        "$value": "#2C54CA",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "cyan-4": {
        "$value": "#3A9ECF",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "blue-13": {
        "$value": "#3167C5",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-cyan": {
        "$value": "#ADE8F3",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-cyan-2": {
        "$value": "#D8F1F5",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-cyan-3": {
        "$value": "#A5DBE6",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "cyan-5": {
        "$value": "#2B9DD6",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-cyan-4": {
        "$value": "#AEE0E9",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "cyan-6": {
        "$value": "#20BAD0",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "blue-14": {
        "$value": "#1E53B0",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "blue-15": {
        "$value": "#2F40D2",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-blue-2": {
        "$value": "#1C366A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "cyan-7": {
        "$value": "#16E1FF",
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
        "$value": "12px",
        "$type": "dimension"
      },
      "font-size-sm": {
        "$value": "13px",
        "$type": "dimension"
      },
      "font-size-base": {
        "$value": "14px",
        "$type": "dimension"
      },
      "font-size-lg": {
        "$value": "15px",
        "$type": "dimension"
      },
      "font-size-xl": {
        "$value": "16px",
        "$type": "dimension"
      },
      "font-size-2xl": {
        "$value": "18px",
        "$type": "dimension"
      },
      "font-size-3xl": {
        "$value": "20px",
        "$type": "dimension"
      },
      "font-size-4xl": {
        "$value": "32px",
        "$type": "dimension"
      },
      "font-size-5xl": {
        "$value": "36px",
        "$type": "dimension"
      },
      "font-size-6xl": {
        "$value": "48px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "Inter",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "Waldenburg",
        "$type": "fontFamily"
      },
      "font-family-3": {
        "$value": "WaldenburgHF",
        "$type": "fontFamily"
      },
      "font-family-4": {
        "$value": "ui-monospace",
        "$type": "fontFamily"
      },
      "font-family-5": {
        "$value": "Geist Mono",
        "$type": "fontFamily"
      }
    },
    "fontWeight": {
      "font-weight-light": {
        "$value": "300",
        "$type": "fontWeight"
      },
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
        "$value": "12px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "15px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "16px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "18px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "19.6px",
        "$type": "dimension"
      },
      "line-height-lh-6": {
        "$value": "21px",
        "$type": "dimension"
      },
      "line-height-lh-7": {
        "$value": "22px",
        "$type": "dimension"
      },
      "line-height-lh-8": {
        "$value": "24px",
        "$type": "dimension"
      },
      "line-height-lh-9": {
        "$value": "26px",
        "$type": "dimension"
      },
      "line-height-lh-10": {
        "$value": "27px",
        "$type": "dimension"
      },
      "line-height-lh-11": {
        "$value": "28.8px",
        "$type": "dimension"
      },
      "line-height-lh-12": {
        "$value": "36px",
        "$type": "dimension"
      },
      "line-height-lh-13": {
        "$value": "42px",
        "$type": "dimension"
      },
      "line-height-lh-14": {
        "$value": "52px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "-0.96px",
        "$type": "dimension"
      },
      "letter-spacing-normal": {
        "$value": "0.14px",
        "$type": "dimension"
      },
      "letter-spacing-wide": {
        "$value": "0.15px",
        "$type": "dimension"
      },
      "letter-spacing-wider": {
        "$value": "0.16px",
        "$type": "dimension"
      },
      "letter-spacing-widest": {
        "$value": "0.18px",
        "$type": "dimension"
      },
      "letter-spacing-ls-6": {
        "$value": "0.28px",
        "$type": "dimension"
      },
      "letter-spacing-ls-7": {
        "$value": "0.32px",
        "$type": "dimension"
      }
    }
  },
  "layout": {
    "spacing": {
      "space-1": {
        "$value": "0.5px",
        "$type": "dimension"
      },
      "space-2": {
        "$value": "1px",
        "$type": "dimension"
      },
      "space-3": {
        "$value": "1.5px",
        "$type": "dimension"
      },
      "space-4": {
        "$value": "2px",
        "$type": "dimension"
      },
      "space-5": {
        "$value": "3px",
        "$type": "dimension"
      },
      "space-6": {
        "$value": "3.5px",
        "$type": "dimension"
      },
      "space-8": {
        "$value": "4px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "5.25px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "6px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "8px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "8.5px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "24px",
        "$type": "dimension"
      },
      "space-32": {
        "$value": "40px",
        "$type": "dimension"
      },
      "space-40": {
        "$value": "78.75px",
        "$type": "dimension"
      },
      "space-48": {
        "$value": "150.969px",
        "$type": "dimension"
      },
      "space-64": {
        "$value": "14px",
        "$type": "dimension"
      },
      "space-80": {
        "$value": "15.6406px",
        "$type": "dimension"
      },
      "space-96": {
        "$value": "16px",
        "$type": "dimension"
      },
      "space-128": {
        "$value": "17px",
        "$type": "dimension"
      },
      "space-160": {
        "$value": "18px",
        "$type": "dimension"
      },
      "space-192": {
        "$value": "19px",
        "$type": "dimension"
      },
      "space-256": {
        "$value": "20px",
        "$type": "dimension"
      },
      "space-23": {
        "$value": "22px",
        "$type": "dimension"
      },
      "space-25": {
        "$value": "26.5px",
        "$type": "dimension"
      },
      "space-26": {
        "$value": "27px",
        "$type": "dimension"
      },
      "space-27": {
        "$value": "28px",
        "$type": "dimension"
      },
      "space-28": {
        "$value": "32px",
        "$type": "dimension"
      },
      "space-29": {
        "$value": "35px",
        "$type": "dimension"
      },
      "space-30": {
        "$value": "35.5px",
        "$type": "dimension"
      },
      "space-31": {
        "$value": "36px",
        "$type": "dimension"
      },
      "space-33": {
        "$value": "44px",
        "$type": "dimension"
      },
      "space-34": {
        "$value": "48px",
        "$type": "dimension"
      },
      "space-35": {
        "$value": "56px",
        "$type": "dimension"
      },
      "space-36": {
        "$value": "64px",
        "$type": "dimension"
      },
      "space-37": {
        "$value": "66px",
        "$type": "dimension"
      },
      "space-38": {
        "$value": "72px",
        "$type": "dimension"
      },
      "space-39": {
        "$value": "73px",
        "$type": "dimension"
      },
      "space-41": {
        "$value": "85.4922px",
        "$type": "dimension"
      },
      "space-42": {
        "$value": "95.5px",
        "$type": "dimension"
      },
      "space-43": {
        "$value": "96px",
        "$type": "dimension"
      },
      "space-44": {
        "$value": "120px",
        "$type": "dimension"
      },
      "space-45": {
        "$value": "128px",
        "$type": "dimension"
      },
      "space-46": {
        "$value": "133.453px",
        "$type": "dimension"
      },
      "space-47": {
        "$value": "141.5px",
        "$type": "dimension"
      },
      "space-49": {
        "$value": "156.609px",
        "$type": "dimension"
      },
      "space-50": {
        "$value": "160px",
        "$type": "dimension"
      },
      "space-51": {
        "$value": "168.797px",
        "$type": "dimension"
      },
      "space-52": {
        "$value": "168.805px",
        "$type": "dimension"
      },
      "space-53": {
        "$value": "191.648px",
        "$type": "dimension"
      },
      "space-54": {
        "$value": "191.656px",
        "$type": "dimension"
      },
      "space-55": {
        "$value": "257.594px",
        "$type": "dimension"
      },
      "space-56": {
        "$value": "288px",
        "$type": "dimension"
      },
      "space-57": {
        "$value": "342px",
        "$type": "dimension"
      },
      "space-58": {
        "$value": "357.258px",
        "$type": "dimension"
      },
      "space-59": {
        "$value": "423px",
        "$type": "dimension"
      },
      "space-60": {
        "$value": "468px",
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
        "$value": "2",
        "$type": "number"
      },
      "z-4": {
        "$value": "3",
        "$type": "number"
      },
      "z-5": {
        "$value": "10",
        "$type": "number"
      },
      "z-6": {
        "$value": "20",
        "$type": "number"
      },
      "z-7": {
        "$value": "30",
        "$type": "number"
      },
      "z-8": {
        "$value": "50",
        "$type": "number"
      },
      "z-9": {
        "$value": "9998",
        "$type": "number"
      },
      "z-10": {
        "$value": "99999",
        "$type": "number"
      },
      "z-11": {
        "$value": "2147483645",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "480px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "1024px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
        "$value": "0px 0px 24px 24px",
        "$type": "dimension"
      },
      "radius-md": {
        "$value": "0px 0px 0px 20px",
        "$type": "dimension"
      },
      "radius-lg": {
        "$value": "2px",
        "$type": "dimension"
      },
      "radius-xl": {
        "$value": "4px",
        "$type": "dimension"
      },
      "radius-2xl": {
        "$value": "7px",
        "$type": "dimension"
      },
      "radius-full": {
        "$value": "7.2px 21.6px 21.6px",
        "$type": "dimension"
      },
      "radius-r7": {
        "$value": "8px 8px 0px 0px",
        "$type": "dimension"
      },
      "radius-r8": {
        "$value": "8px 0px 0px 8px",
        "$type": "dimension"
      },
      "radius-r9": {
        "$value": "8px",
        "$type": "dimension"
      },
      "radius-r10": {
        "$value": "10px",
        "$type": "dimension"
      },
      "radius-r11": {
        "$value": "11.5px",
        "$type": "dimension"
      },
      "radius-r12": {
        "$value": "12px",
        "$type": "dimension"
      },
      "radius-r13": {
        "$value": "16px",
        "$type": "dimension"
      },
      "radius-r14": {
        "$value": "18px",
        "$type": "dimension"
      },
      "radius-r15": {
        "$value": "20px",
        "$type": "dimension"
      },
      "radius-r16": {
        "$value": "24px",
        "$type": "dimension"
      },
      "radius-r17": {
        "$value": "30px",
        "$type": "dimension"
      },
      "radius-r18": {
        "$value": "50%",
        "$type": "dimension"
      },
      "radius-r19": {
        "$value": "50px",
        "$type": "dimension"
      },
      "radius-r20": {
        "$value": "100px",
        "$type": "dimension"
      },
      "radius-r21": {
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
      },
      "border-width-base": {
        "$value": "4px",
        "$type": "dimension"
      }
    },
    "shadow": {
      "shadow-sm": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px",
        "$type": "shadow"
      },
      "shadow-md": {
        "$value": "rgb(255, 255, 255) 0px 0px 0px 0px inset, rgba(0, 0, 0, 0.075) 0px 0px 0px 0.5px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
        "$type": "shadow"
      },
      "shadow-lg": {
        "$value": "rgb(255, 255, 255) 0px 0px 0px 0px inset, rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
        "$type": "shadow"
      },
      "shadow-xl": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 1px 0px, rgba(0, 0, 0, 0) 0px 4px 4px 0px",
        "$type": "shadow"
      },
      "shadow-shadow-5": {
        "$value": "rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 4px 4px 0px",
        "$type": "shadow"
      },
      "shadow-shadow-6": {
        "$value": "rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px",
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
        "$value": "0.36s",
        "$type": "duration"
      },
      "duration-duration-6": {
        "$value": "0.5s",
        "$type": "duration"
      }
    },
    "easing": {
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
    "opacity-80": {
      "$value": 0.8,
      "$type": "number"
    }
  }
}
```
