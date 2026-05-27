# Build Apps with AI in Minutes | Base44 — Design System

**Source:** https://base44.com/  
**Generated:** 06/05/2026, 18:16:29  
**Extracted:** 62 colors · 57 type tokens · 79 spacing steps · 8 breakpoints · 9 motion tokens

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
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×3943 |
| `--color-white` | `#FFFFFF` | hsl(0, 0%, 100%) | ×152 |
| `--color-dark-gray-2` | `#0F0F0F` | hsl(0, 0%, 6%) | ×24 |
| `--color-light-gray` | `#EDEAE4` | hsl(40, 20%, 91%) | ×8 |
| `--color-orange-2` | `#FF631F` | hsl(18, 100%, 56%) | ×7 |
| `--color-white-2` | `#FAF9F7` | hsl(40, 23%, 97%) | ×7 |
| `--color-light-green` | `#EBFFB1` | hsl(75, 100%, 85%) | ×5 |
| `--color-dark-gray-3` | `rgba(15, 15, 15, 0.07)` | hsl(0, 0%, 5%) | ×2 |
| `--color-white-4` | `#F2F3F5` | hsl(220, 13%, 95%) | ×1 |
| `--color-white-6` | `#FCFBFA` | hsl(30, 25%, 98%) | ×1 |
| `--color-light-gray-6` | `#F0EEEB` | hsl(36, 14%, 93%) | ×1 |
| `--color-light-gray-11` | `#D9D9D9` | hsl(0, 0%, 85%) | ×1 |
| `--color-light-gray-12` | `#DCE8E8` | hsl(180, 21%, 89%) | ×1 |
| `--color-white-7` | `#FFF9EB` | hsl(42, 100%, 96%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-gray` | `#232529` | hsl(220, 8%, 15%) | ×87 |
| `--color-orange` | `#FF983B` | hsl(28, 100%, 62%) | ×83 |
| `--color-blue` | `#0000EE` | hsl(240, 100%, 47%) | ×75 |
| `--color-mid-gray` | `#808080` | hsl(0, 0%, 50%) | ×24 |
| `--color-blue-2` | `#696F7B` | hsl(220, 8%, 45%) | ×18 |
| `--color-mid-gray-2` | `#71767E` | hsl(217, 5%, 47%) | ×4 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-blue-2` | `#324158` | hsl(216, 28%, 27%) | ×6 |
| `--color-light-gray-2` | `#E6E6E6` | hsl(0, 0%, 90%) | ×5 |
| `--color-light-gray-4` | `#E8E6E6` | hsl(0, 4%, 91%) | ×2 |
| `--color-green` | `#ADE900` | hsl(75, 100%, 46%) | ×1 |
| `--color-light-gray-7` | `#ECECEC` | hsl(0, 0%, 93%) | ×1 |
| `--color-orange-7` | `#D8723C` | hsl(21, 67%, 54%) | ×1 |
| `--color-mid-gray-3` | `rgba(179, 179, 179, 0.6) rgb(0, 0, 0) rgb(0, 0, 0)` | hsl(0, 0%, 70%) | ×1 |

### Shadow Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-cyan` | `rgba(124, 191, 213, 0.5)` | hsl(195, 51%, 66%) | ×2 |
| `--color-dark-cyan` | `rgba(34, 40, 42, 0.04)` | hsl(180, 32%, 15%) | ×1 |

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-blue` | `#000624` | hsl(230, 100%, 7%) | ×21 |
| `--color-orange-3` | `#FBB439` | hsl(38, 96%, 60%) | ×4 |
| `--color-light-pink` | `#F0C3EC` | hsl(305, 60%, 85%) | ×3 |
| `--color-light-gray-3` | `#F2F1ED` | hsl(48, 16%, 94%) | ×3 |
| `--color-white-3` | `rgba(250, 249, 247, 0.12)` | hsl(0, 0%, 97%) | ×2 |
| `--color-orange-4` | `#FFAE53` | hsl(32, 100%, 66%) | ×2 |
| `--color-light-gray-5` | `#D5DFE0` | hsl(185, 15%, 86%) | ×2 |
| `--color-light-green-2` | `#E5FF94` | hsl(75, 100%, 79%) | ×2 |
| `--color-orange-5` | `#FF5500` | hsl(20, 100%, 50%) | ×2 |
| `--color-white-5` | `rgba(250, 249, 247, 0.7)` | hsl(60, 20%, 97%) | ×1 |
| `--color-cyan-2` | `#5DB3CF` | hsl(195, 54%, 59%) | ×1 |
| `--color-light-cyan` | `rgba(145, 201, 220, 0.56)` | hsl(194, 51%, 71%) | ×1 |
| `--color-light-cyan-2` | `#8FC6D9` | hsl(195, 49%, 71%) | ×1 |
| `--color-cyan-3` | `#22C9FF` | hsl(195, 100%, 57%) | ×1 |
| `--color-blue-4` | `#9CA3AF` | hsl(218, 11%, 65%) | ×1 |
| `--color-light-orange` | `rgba(255, 240, 222, 0.3)` | hsl(29, 100%, 94%) | ×1 |
| `--color-orange-6` | `#FF7F47` | hsl(18, 100%, 64%) | ×1 |
| `--color-light-orange-2` | `#FFF0DE` | hsl(33, 100%, 94%) | ×1 |
| `--color-light-orange-3` | `#FFBE8D` | hsl(26, 100%, 78%) | ×1 |
| `--color-light-purple` | `#F0C5FF` | hsl(284, 100%, 89%) | ×1 |
| `--color-light-gray-8` | `#F0F0F0` | hsl(0, 0%, 94%) | ×1 |
| `--color-light-cyan-3` | `#CCE7E9` | hsl(184, 40%, 86%) | ×1 |
| `--color-light-yellow` | `#F9FBC9` | hsl(62, 86%, 89%) | ×1 |
| `--color-light-yellow-2` | `#FEE969` | hsl(52, 99%, 70%) | ×1 |
| `--color-light-gray-9` | `#DBDDDA` | hsl(100, 4%, 86%) | ×1 |
| `--color-light-gray-10` | `#F5F2EC` | hsl(40, 31%, 94%) | ×1 |
| `--color-light-pink-2` | `#EFD8ED` | hsl(305, 42%, 89%) | ×1 |
| `--color-light-pink-3` | `#F0C4E3` | hsl(318, 59%, 85%) | ×1 |
| `--color-light-orange-4` | `#FFC494` | hsl(27, 100%, 79%) | ×1 |
| `--color-light-green-3` | `#E6FBB1` | hsl(77, 90%, 84%) | ×1 |

### Other Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-blue-3` | `#5E97FF` | hsl(219, 100%, 68%) | ×16 |
| `--color-red` | `#ED1566` | hsl(338, 86%, 51%) | ×3 |
| `--color-dark-gray-4` | `#17181A` | hsl(220, 6%, 10%) | ×2 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `Times` |
| `--font-family-2` | `Arial` |
| `--font-family-3` | `Madefor-Text` |
| `--font-family-4` | `Madefor-Display` |
| `--font-family-5` | `Helvetica Neue` |
| `--font-family-6` | `wfont_343a2a_5b4cd32fc19d46e1b8c1b142abb27d39` |
| `--font-family-7` | `wix-madefor-text-v2` |
| `--font-family-8` | `wfont_343a2a_4e484da66ffc4465a05a1c9ea5caf495` |
| `--font-family-9` | `wfont_343a2a_7681af10b77f4b6b90774b33447234e8` |
| `--font-family-10` | `madefor-text` |
| `--font-family-11` | `madefor-text-mediumbold` |
| `--font-family-12` | `madefor-text-bold` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `10px` |  |
| `--font-size-xs` | `11.8021px` |  |
| `--font-size-sm` | `12px` |  |
| `--font-size-base` | `12.5889px` |  |
| `--font-size-lg` | `13px` |  |
| `--font-size-xl` | `13.3333px` |  |
| `--font-size-2xl` | `14px` |  |
| `--font-size-3xl` | `14.1625px` |  |
| `--font-size-4xl` | `15.7361px` |  |
| `--font-size-5xl` | `15.7364px` |  |
| `--font-size-6xl` | `16px` |  |
| `--font-size-17px` | `17.3097px` |  |
| `--font-size-18px` | `18px` |  |
| `--font-size-19px` | `18.8834px` |  |
| `--font-size-22px` | `22.0305px` |  |
| `--font-size-24px` | `24px` |  |
| `--font-size-27px` | `26.7514px` |  |
| `--font-size-33px` | `33.0459px` |  |
| `--font-size-40px` | `40.1271px` |  |
| `--font-size-44px` | `44.0611px` |  |
| `--font-size-50px` | `50.3554px` |  |

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
| `--line-height-tight` | `11.8021px` |
| `--line-height-snug` | `16.8px` |
| `--line-height-normal` | `17.6244px` |
| `--line-height-relaxed` | `18.5214px` |
| `--line-height-loose` | `19.6px` |
| `--line-height-lh-6` | `20.8px` |
| `--line-height-lh-7` | `22px` |
| `--line-height-lh-8` | `24px` |
| `--line-height-lh-9` | `25.2px` |
| `--line-height-lh-10` | `26.4367px` |
| `--line-height-lh-11` | `26.7514px` |
| `--line-height-lh-12` | `28.325px` |
| `--line-height-lh-13` | `28.6397px` |
| `--line-height-lh-14` | `33.0459px` |
| `--line-height-lh-15` | `36px` |
| `--line-height-lh-16` | `40.1271px` |
| `--line-height-lh-17` | `44.0611px` |
| `--line-height-lh-18` | `45.3199px` |
| `--line-height-lh-19` | `61.1348px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `1.6px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `0.0078125px` | ×7 |
| `--space-2` | `0.0155px` | ×1 |
| `--space-3` | `0.016px` | ×1 |
| `--space-4` | `0.210938px` | ×1 |
| `--space-5` | `0.389px` | ×1 |
| `--space-6` | `0.40625px` | ×13 |
| `--space-8` | `0.5px` | ×13 |
| `--space-10` | `0.590066px` | ×1 |
| `--space-12` | `1px` | ×4 |
| `--space-16` | `1.18025px` | ×1 |
| `--space-20` | `1.57362px` | ×2 |
| `--space-24` | `8px` | ×34 |
| `--space-32` | `13px` | ×2 |
| `--space-40` | `16.995px` | ×1 |
| `--space-48` | `25px` | ×1 |
| `--space-64` | `52px` | ×1 |
| `--space-80` | `103.103px` | ×2 |
| `--space-96` | `6px` | ×60 |
| `--space-128` | `6.29449px` | ×1 |
| `--space-160` | `7px` | ×38 |
| `--space-192` | `7.08125px` | ×1 |
| `--space-256` | `7.86789px` | ×2 |
| `--space-23` | `7.86801px` | ×11 |
| `--space-25` | `8.84873px` | ×3 |
| `--space-26` | `8.85156px` | ×2 |
| `--space-27` | `9px` | ×4 |
| `--space-28` | `10px` | ×49 |
| `--space-29` | `11.0153px` | ×2 |
| `--space-30` | `11.8021px` | ×2 |
| `--space-31` | `12px` | ×65 |
| `--space-33` | `14px` | ×2 |
| `--space-34` | `14.7526px` | ×2 |
| `--space-35` | `15px` | ×3 |
| `--space-36` | `15.3408px` | ×1 |
| `--space-37` | `15.6px` | ×5 |
| `--space-38` | `15.7361px` | ×2 |
| `--space-39` | `16px` | ×20 |
| `--space-41` | `17.3097px` | ×2 |
| `--space-42` | `19.6701px` | ×2 |
| `--space-43` | `20px` | ×9 |
| `--space-44` | `22.424px` | ×2 |
| `--space-45` | `22.66px` | ×13 |
| `--space-46` | `23.6041px` | ×5 |
| `--space-47` | `24px` | ×11 |
| `--space-49` | `29.5052px` | ×12 |
| `--space-50` | `30px` | ×5 |
| `--space-51` | `31.4722px` | ×21 |
| `--space-52` | `32px` | ×2 |
| `--space-53` | `33.99px` | ×13 |
| `--space-54` | `34px` | ×2 |
| `--space-55` | `35px` | ×26 |
| `--space-56` | `35.4062px` | ×14 |
| `--space-57` | `36px` | ×13 |
| `--space-58` | `38px` | ×1 |
| `--space-59` | `39.3403px` | ×1 |
| `--space-60` | `40px` | ×15 |
| `--space-61` | `42px` | ×4 |
| `--space-62` | `50px` | ×3 |
| `--space-63` | `51px` | ×3 |
| `--space-65` | `53px` | ×1 |
| `--space-66` | `55.0764px` | ×1 |
| `--space-67` | `60px` | ×1 |
| `--space-68` | `62.9445px` | ×6 |
| `--space-69` | `68px` | ×2 |
| `--space-70` | `70.8125px` | ×4 |
| `--space-71` | `74.778px` | ×13 |
| `--space-72` | `76px` | ×4 |
| `--space-73` | `78.6805px` | ×1 |
| `--space-74` | `86.5489px` | ×2 |
| `--space-75` | `90px` | ×4 |
| `--space-76` | `90.4826px` | ×1 |
| `--space-77` | `94.4166px` | ×1 |
| `--space-78` | `98.9844px` | ×1 |
| `--space-79` | `100px` | ×2 |
| `--space-81` | `106.219px` | ×1 |
| `--space-82` | `110.153px` | ×1 |
| `--space-83` | `114.087px` | ×1 |
| `--space-84` | `177.031px` | ×2 |
| `--space-85` | `200px` | ×1 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `1px` | ×73 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `0px 0px 10px 10px` | ×4 |
| `--radius-md` | `0px 0px 47.2084px 47.2084px` | ×1 |
| `--radius-lg` | `0.0204946px` | ×2 |
| `--radius-xl` | `3px` | ×1 |
| `--radius-2xl` | `5.901px` | ×8 |
| `--radius-full` | `7.86801px` | ×11 |
| `--radius-r7` | `10px` | ×3 |
| `--radius-r8` | `11.0153px` | ×2 |
| `--radius-r9` | `11.8021px` | ×1 |
| `--radius-r10` | `14px` | ×5 |
| `--radius-r11` | `16px` | ×1 |
| `--radius-r12` | `20.6537px` | ×1 |
| `--radius-r13` | `30px` | ×1 |
| `--radius-r14` | `30px 30px 0px 0px` | ×1 |
| `--radius-r15` | `47.2084px` | ×1 |
| `--radius-r16` | `70px` | ×1 |
| `--radius-r17` | `92.7843px` | ×2 |
| `--radius-r18` | `100px` | ×2 |
| `--radius-r19` | `300px` | ×7 |
| `--radius-r20` | `589.514px` | ×7 |
| `--radius-r21` | `999px` | ×14 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgba(19, 25, 70, 0) 1.5px 3.71px 9px 0px` | ×7 |
| `--shadow-md` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px` | ×6 |
| `--shadow-lg` | `rgba(124, 191, 213, 0.5) 0px 6px 18px 0px` | ×2 |
| `--shadow-xl` | `rgba(34, 40, 42, 0.04) 0px 3px 10px 0px` | ×1 |
| `--shadow-shadow-5` | `rgba(15, 15, 15, 0.07) 0px 5px 10px 0px` | ×1 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.1s` | ×1 |
| `--duration-fast` | `0.182s` | ×12 |
| `--duration-normal` | `0.2s` | ×192 |
| `--duration-slow` | `0.3s` | ×23 |
| `--duration-slower` | `0.4s` | ×25 |
| `--duration-duration-6` | `1s` | ×4 |
| `--duration-duration-7` | `1.5s` | ×2 |
| `--duration-duration-8` | `2s` | ×15 |

### Easing Functions

| Token | Value | Usage |
| --- | --- | --- |
| `--easing-ease-in-out` | `ease-in-out` | ×18 |

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `-2` |
| `--z-2` | `-1` |
| `--z-3` | `1` |
| `--z-4` | `50` |
| `--z-5` | `52` |
| `--z-6` | `53` |
| `--z-7` | `999` |
| `--z-8` | `9999` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `320px` |
| `--breakpoint-sm` | `750px` |
| `--breakpoint-md` | `767px` |
| `--breakpoint-lg` | `768px` |
| `--breakpoint-xl` | `1000px` |
| `--breakpoint-2xl` | `1001px` |
| `--breakpoint-3xl` | `1100px` |
| `--breakpoint-bp-8` | `1440px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-20` | `0.2` | ×1 |
| `--opacity-70` | `0.7` | ×8 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-dark-gray` | `--color-black` | 1.37:1 | Fail |
| `--color-dark-gray` | `--color-white` | 15.35:1 | AAA |
| `--color-dark-gray` | `--color-dark-gray-2` | 1.25:1 | Fail |
| `--color-dark-gray` | `--color-light-gray` | 12.78:1 | AAA |
| `--color-dark-gray` | `--color-orange-2` | 5.16:1 | AA |
| `--color-orange` | `--color-black` | 9.81:1 | AAA |
| `--color-orange` | `--color-white` | 2.14:1 | Fail |
| `--color-orange` | `--color-dark-gray-2` | 8.95:1 | AAA |
| `--color-orange` | `--color-light-gray` | 1.78:1 | Fail |
| `--color-orange` | `--color-orange-2` | 1.39:1 | Fail |
| `--color-blue` | `--color-black` | 2.23:1 | Fail |
| `--color-blue` | `--color-white` | 9.4:1 | AAA |
| `--color-blue` | `--color-dark-gray-2` | 2.04:1 | Fail |
| `--color-blue` | `--color-light-gray` | 7.83:1 | AAA |
| `--color-blue` | `--color-orange-2` | 3.16:1 | AA Large |
| `--color-mid-gray` | `--color-black` | 5.32:1 | AA |
| `--color-mid-gray` | `--color-white` | 3.95:1 | AA Large |
| `--color-mid-gray` | `--color-dark-gray-2` | 4.85:1 | AA |
| `--color-mid-gray` | `--color-light-gray` | 3.29:1 | AA Large |
| `--color-mid-gray` | `--color-orange-2` | 1.33:1 | Fail |
| `--color-blue-2` | `--color-black` | 4.16:1 | AA Large |
| `--color-blue-2` | `--color-white` | 5.05:1 | AA |
| `--color-blue-2` | `--color-dark-gray-2` | 3.8:1 | AA Large |
| `--color-blue-2` | `--color-light-gray` | 4.2:1 | AA Large |
| `--color-blue-2` | `--color-orange-2` | 1.7:1 | Fail |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--one-unit` | `1vw` |
| `--section-max-width` | `9999px` |
| `--spx-stopper-max` | `9999px` |
| `--spx-stopper-min` | `0px` |
| `--browser-zoom` | `1` |
| `--wst-button-color-fill-primary` | `rgb(var(--color_48))` |
| `--wst-button-color-border-primary` | `rgb(var(--color_49))` |
| `--wst-button-color-text-primary` | `rgb(var(--color_50))` |
| `--wst-button-color-fill-primary-hover` | `rgb(var(--color_51))` |
| `--wst-button-color-border-primary-hover` | `rgb(var(--color_52))` |
| `--wst-button-color-text-primary-hover` | `rgb(var(--color_53))` |
| `--wst-button-color-fill-primary-disabled` | `rgb(var(--color_54))` |
| `--wst-button-color-border-primary-disabled` | `rgb(var(--color_55))` |
| `--wst-button-color-text-primary-disabled` | `rgb(var(--color_56))` |
| `--wst-button-color-fill-secondary` | `rgb(var(--color_57))` |
| `--wst-button-color-border-secondary` | `rgb(var(--color_58))` |
| `--wst-button-color-text-secondary` | `rgb(var(--color_59))` |
| `--wst-button-color-fill-secondary-hover` | `rgb(var(--color_60))` |
| `--wst-button-color-border-secondary-hover` | `rgb(var(--color_61))` |
| `--wst-button-color-text-secondary-hover` | `rgb(var(--color_62))` |
| `--wst-button-color-fill-secondary-disabled` | `rgb(var(--color_63))` |
| `--wst-button-color-border-secondary-disabled` | `rgb(var(--color_64))` |
| `--wst-button-color-text-secondary-disabled` | `rgb(var(--color_65))` |
| `--wst-color-fill-base-1` | `rgb(var(--color_36))` |
| `--wst-color-fill-base-2` | `rgb(var(--color_37))` |
| `--wst-color-fill-base-shade-1` | `rgb(var(--color_38))` |
| `--wst-color-fill-base-shade-2` | `rgb(var(--color_39))` |
| `--wst-color-fill-base-shade-3` | `rgb(var(--color_40))` |
| `--wst-color-fill-accent-1` | `rgb(var(--color_41))` |
| `--wst-color-fill-accent-2` | `rgb(var(--color_42))` |
| `--wst-color-fill-accent-3` | `rgb(var(--color_43))` |
| `--wst-color-fill-accent-4` | `rgb(var(--color_44))` |
| `--wst-color-fill-background-primary` | `rgb(var(--color_11))` |
| `--wst-color-fill-background-secondary` | `rgb(var(--color_12))` |
| `--wst-color-text-primary` | `rgb(var(--color_15))` |
| `--wst-color-text-secondary` | `rgb(var(--color_14))` |
| `--wst-color-action` | `rgb(var(--color_18))` |
| `--wst-color-disabled` | `rgb(var(--color_39))` |
| `--wst-color-title` | `rgb(var(--color_45))` |
| `--wst-color-subtitle` | `rgb(var(--color_46))` |
| `--wst-color-line` | `rgb(var(--color_47))` |
| `--wst-font-style-h2` | `var(--font_2)` |
| `--wst-font-style-h3` | `var(--font_3)` |
| `--wst-font-style-h4` | `var(--font_4)` |
| `--wst-font-style-h5` | `var(--font_5)` |
| `--wst-font-style-h6` | `var(--font_6)` |
| `--wst-font-style-body-large` | `var(--font_7)` |
| `--wst-font-style-body-medium` | `var(--font_8)` |
| `--wst-font-style-body-small` | `var(--font_9)` |
| `--wst-font-style-body-x-small` | `var(--font_10)` |
| `--wst-color-custom-1` | `rgb(var(--color_13))` |
| `--wst-color-custom-2` | `rgb(var(--color_16))` |
| `--wst-color-custom-3` | `rgb(var(--color_17))` |
| `--wst-color-custom-4` | `rgb(var(--color_19))` |
| `--wst-color-custom-5` | `rgb(var(--color_20))` |
| `--wst-color-custom-6` | `rgb(var(--color_21))` |
| `--wst-color-custom-7` | `rgb(var(--color_22))` |
| `--wst-color-custom-8` | `rgb(var(--color_23))` |
| `--wst-color-custom-9` | `rgb(var(--color_24))` |
| `--wst-color-custom-10` | `rgb(var(--color_25))` |
| `--wst-color-custom-11` | `rgb(var(--color_26))` |
| `--wst-color-custom-12` | `rgb(var(--color_27))` |
| `--wst-color-custom-13` | `rgb(var(--color_28))` |
| `--wst-color-custom-14` | `rgb(var(--color_29))` |
| `--wst-color-custom-15` | `rgb(var(--color_30))` |
| `--wst-color-custom-16` | `rgb(var(--color_31))` |
| `--wst-color-custom-17` | `rgb(var(--color_32))` |
| `--wst-color-custom-18` | `rgb(var(--color_33))` |
| `--wst-color-custom-19` | `rgb(var(--color_34))` |
| `--wst-color-custom-20` | `rgb(var(--color_35))` |
| `--full-viewport` | `100 * var(--one-unit) * var(--browser-zoom)` |
| `--scaling-factor` | `clamp(var(--spx-stopper-min), var(--full-viewport), min(var(--spx-stopper-max), var(--section-max-width)))` |
| `--theme-spx-ratio` | `var(--scaling-factor) / 1920` |
| `--color_0` | `255,255,255` |
| `--color_1` | `255,255,255` |
| `--color_2` | `0,0,0` |
| `--color_3` | `237,28,36` |
| `--color_4` | `0,136,203` |
| `--color_5` | `255,203,5` |
| `--color_6` | `114,114,114` |
| `--color_7` | `176,176,176` |
| `--color_8` | `255,255,255` |
| `--color_9` | `114,114,114` |
| `--color_10` | `176,176,176` |
| `--color_11` | `255,255,255` |
| `--color_12` | `250,249,247` |
| `--color_13` | `35,37,41` |
| `--color_14` | `235,255,177` |
| `--color_15` | `0,0,0` |
| `--color_16` | `220,232,255` |
| `--color_17` | `149,185,255` |
| `--color_18` | `255,152,59` |
| `--color_19` | `9,75,204` |
| `--color_20` | `8,47,123` |
| `--color_21` | `243,248,240` |
| `--color_22` | `210,228,199` |
| `--color_23` | `146,176,121` |
| `--color_24` | `97,135,65` |
| `--color_25` | `57,100,29` |
| `--color_26` | `242,234,231` |
| `--color_27` | `229,206,192` |
| `--color_28` | `169,128,111` |
| `--color_29` | `139,97,79` |
| `--color_30` | `99,60,43` |
| `--color_31` | `255,233,223` |
| `--color_32` | `255,191,161` |
| `--color_33` | `250,133,79` |
| `--color_34` | `255,99,31` |
| `--color_35` | `201,64,1` |
| `--color_36` | `255,255,255` |
| `--color_37` | `0,0,0` |
| `--color_38` | `250,249,247` |
| `--color_39` | `35,37,41` |
| `--color_40` | `235,255,177` |
| `--color_41` | `255,152,59` |
| `--color_42` | `255,152,59` |
| `--color_43` | `255,152,59` |
| `--color_44` | `255,152,59` |
| `--color_45` | `0,0,0` |
| `--color_46` | `235,255,177` |
| `--color_47` | `0,0,0` |
| `--color_48` | `255,152,59` |
| `--color_49` | `255,152,59` |
| `--color_50` | `255,255,255` |
| `--color_51` | `255,152,59` |
| `--color_52` | `255,152,59` |
| `--color_53` | `255,255,255` |
| `--color_54` | `35,37,41` |
| `--color_55` | `35,37,41` |
| `--color_56` | `255,255,255` |
| `--color_57` | `255,255,255` |
| `--color_58` | `255,152,59` |
| `--color_59` | `255,152,59` |
| `--color_60` | `255,255,255` |
| `--color_61` | `255,152,59` |
| `--color_62` | `255,152,59` |
| `--color_63` | `255,255,255` |
| `--color_64` | `35,37,41` |
| `--color_65` | `35,37,41` |
| `--wix-ads-height` | `0px` |
| `--sticky-offset` | `0px` |
| `--wix-ads-top-height` | `0px` |
| `--site-width` | `980px` |
| `--above-all-z-index` | `100000` |
| `--portals-z-index` | `100001` |
| `--wix-opt-in-direction` | `ltr` |
| `--wix-opt-in-direction-multiplier` | `1` |
| `--font_0` | `normal normal normal calc(74 * var(--theme-spx-ratio))/1em wfont_343a2a_5b4cd32fc19d46e1b8c1b142abb27d39,wf_5b4cd32fc19d46e1b8c1b142a,orig_stk_miso_regular` |
| `--font_1` | `normal normal normal 16px/1.4em din-next-w01-light,sans-serif` |
| `--font_2` | `normal normal normal calc(68 * var(--theme-spx-ratio))/1.2em wfont_343a2a_5b4cd32fc19d46e1b8c1b142abb27d39,wf_5b4cd32fc19d46e1b8c1b142a,orig_stk_miso_regular` |
| `--font_3` | `normal normal normal calc(40 * var(--theme-spx-ratio))/1.1em wfont_343a2a_5b4cd32fc19d46e1b8c1b142abb27d39,wf_5b4cd32fc19d46e1b8c1b142a,orig_stk_miso_regular` |
| `--font_4` | `normal normal 400 calc(24 * var(--theme-spx-ratio))/1.3em wfont_343a2a_4e484da66ffc4465a05a1c9ea5caf495,wf_4e484da66ffc4465a05a1c9ea,orig_stk_miso_light` |
| `--font_5` | `normal normal normal calc(20 * var(--theme-spx-ratio))/1.3em wfont_343a2a_5b4cd32fc19d46e1b8c1b142abb27d39,wf_5b4cd32fc19d46e1b8c1b142a,orig_stk_miso_regular` |
| `--font_6` | `normal normal normal calc(16 * var(--theme-spx-ratio))/1.4em wfont_343a2a_5b4cd32fc19d46e1b8c1b142abb27d39,wf_5b4cd32fc19d46e1b8c1b142a,orig_stk_miso_regular` |
| `--font_7` | `normal normal normal calc(24 * var(--theme-spx-ratio))/1.4em wix-madefor-text-v2,sans-serif` |
| `--font_8` | `normal normal 400 calc(20 * var(--theme-spx-ratio))/1.4em wix-madefor-text-v2,sans-serif` |
| `--font_9` | `normal normal normal calc(16 * var(--theme-spx-ratio))/1.4em wix-madefor-text-v2,sans-serif` |
| `--font_10` | `normal normal normal 12px/1.4em din-next-w01-light,sans-serif` |
| `--minViewportSize` | `320` |
| `--maxViewportSize` | `1920` |
| `--customScaleViewportLimit` | `clamp(var(--minViewportSize) * 1px, var(--full-viewport), min(var(--section-max-width), var(--maxViewportSize) * 1px))` |
| `--base44-header-height` | `calc(8px + 44px)` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — Build Apps with AI in Minutes | Base44
 * Source: https://base44.com/
 * Generated: 06/05/2026, 18:16:29
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-black: #000000; /* hsl(0, 0%, 0%) · background */
  --color-white: #FFFFFF; /* hsl(0, 0%, 100%) · background */
  --color-dark-gray: #232529; /* hsl(220, 8%, 15%) · text */
  --color-orange: #FF983B; /* hsl(28, 100%, 62%) · text */
  --color-blue: #0000EE; /* hsl(240, 100%, 47%) · text */
  --color-mid-gray: #808080; /* hsl(0, 0%, 50%) · text */
  --color-dark-gray-2: #0F0F0F; /* hsl(0, 0%, 6%) · background */
  --color-dark-blue: #000624; /* hsl(230, 100%, 7%) · fill */
  --color-blue-2: #696F7B; /* hsl(220, 8%, 45%) · text */
  --color-blue-3: #5E97FF; /* hsl(219, 100%, 68%) · other */
  --color-light-gray: #EDEAE4; /* hsl(40, 20%, 91%) · background */
  --color-orange-2: #FF631F; /* hsl(18, 100%, 56%) · background */
  --color-white-2: #FAF9F7; /* hsl(40, 23%, 97%) · background */
  --color-dark-blue-2: #324158; /* hsl(216, 28%, 27%) · border */
  --color-light-gray-2: #E6E6E6; /* hsl(0, 0%, 90%) · border */
  --color-light-green: #EBFFB1; /* hsl(75, 100%, 85%) · background */
  --color-mid-gray-2: #71767E; /* hsl(217, 5%, 47%) · text */
  --color-orange-3: #FBB439; /* hsl(38, 96%, 60%) · gradient */
  --color-light-pink: #F0C3EC; /* hsl(305, 60%, 85%) · gradient */
  --color-light-gray-3: #F2F1ED; /* hsl(48, 16%, 94%) · gradient */
  --color-red: #ED1566; /* hsl(338, 86%, 51%) · other */
  --color-light-gray-4: #E8E6E6; /* hsl(0, 4%, 91%) · border */
  --color-dark-gray-3: rgba(15, 15, 15, 0.07); /* hsl(0, 0%, 5%) · background */
  --color-white-3: rgba(250, 249, 247, 0.12); /* hsl(0, 0%, 97%) · gradient */
  --color-cyan: rgba(124, 191, 213, 0.5); /* hsl(195, 51%, 66%) · shadow */
  --color-orange-4: #FFAE53; /* hsl(32, 100%, 66%) · gradient */
  --color-light-gray-5: #D5DFE0; /* hsl(185, 15%, 86%) · gradient */
  --color-light-green-2: #E5FF94; /* hsl(75, 100%, 79%) · gradient */
  --color-orange-5: #FF5500; /* hsl(20, 100%, 50%) · gradient */
  --color-dark-gray-4: #17181A; /* hsl(220, 6%, 10%) · other */
  --color-green: #ADE900; /* hsl(75, 100%, 46%) · border */
  --color-white-4: #F2F3F5; /* hsl(220, 13%, 95%) · background */
  --color-white-5: rgba(250, 249, 247, 0.7); /* hsl(60, 20%, 97%) · gradient */
  --color-cyan-2: #5DB3CF; /* hsl(195, 54%, 59%) · gradient */
  --color-light-cyan: rgba(145, 201, 220, 0.56); /* hsl(194, 51%, 71%) · gradient */
  --color-light-cyan-2: #8FC6D9; /* hsl(195, 49%, 71%) · gradient */
  --color-cyan-3: #22C9FF; /* hsl(195, 100%, 57%) · gradient */
  --color-white-6: #FCFBFA; /* hsl(30, 25%, 98%) · background */
  --color-dark-cyan: rgba(34, 40, 42, 0.04); /* hsl(180, 32%, 15%) · shadow */
  --color-light-gray-6: #F0EEEB; /* hsl(36, 14%, 93%) · background */
  --color-blue-4: #9CA3AF; /* hsl(218, 11%, 65%) · fill */
  --color-light-gray-7: #ECECEC; /* hsl(0, 0%, 93%) · border */
  --color-light-orange: rgba(255, 240, 222, 0.3); /* hsl(29, 100%, 94%) · gradient */
  --color-orange-6: #FF7F47; /* hsl(18, 100%, 64%) · gradient */
  --color-light-orange-2: #FFF0DE; /* hsl(33, 100%, 94%) · gradient */
  --color-light-orange-3: #FFBE8D; /* hsl(26, 100%, 78%) · gradient */
  --color-light-purple: #F0C5FF; /* hsl(284, 100%, 89%) · gradient */
  --color-light-gray-8: #F0F0F0; /* hsl(0, 0%, 94%) · gradient */
  --color-light-cyan-3: #CCE7E9; /* hsl(184, 40%, 86%) · gradient */
  --color-light-yellow: #F9FBC9; /* hsl(62, 86%, 89%) · gradient */
  --color-light-yellow-2: #FEE969; /* hsl(52, 99%, 70%) · gradient */
  --color-light-gray-9: #DBDDDA; /* hsl(100, 4%, 86%) · gradient */
  --color-light-gray-10: #F5F2EC; /* hsl(40, 31%, 94%) · gradient */
  --color-light-pink-2: #EFD8ED; /* hsl(305, 42%, 89%) · gradient */
  --color-light-gray-11: #D9D9D9; /* hsl(0, 0%, 85%) · background */
  --color-light-pink-3: #F0C4E3; /* hsl(318, 59%, 85%) · gradient */
  --color-light-gray-12: #DCE8E8; /* hsl(180, 21%, 89%) · background */
  --color-light-orange-4: #FFC494; /* hsl(27, 100%, 79%) · gradient */
  --color-white-7: #FFF9EB; /* hsl(42, 100%, 96%) · background */
  --color-orange-7: #D8723C; /* hsl(21, 67%, 54%) · border */
  --color-light-green-3: #E6FBB1; /* hsl(77, 90%, 84%) · fill */
  --color-mid-gray-3: rgba(179, 179, 179, 0.6) rgb(0, 0, 0) rgb(0, 0, 0); /* hsl(0, 0%, 70%) · border */

  /* ── Core: Typography ── */
  --font-size-2xs: 10px;
  --font-size-xs: 11.8021px;
  --font-size-sm: 12px;
  --font-size-base: 12.5889px;
  --font-size-lg: 13px;
  --font-size-xl: 13.3333px;
  --font-size-2xl: 14px;
  --font-size-3xl: 14.1625px;
  --font-size-4xl: 15.7361px;
  --font-size-5xl: 15.7364px;
  --font-size-6xl: 16px;
  --font-size-17px: 17.3097px;
  --font-size-18px: 18px;
  --font-size-19px: 18.8834px;
  --font-size-22px: 22.0305px;
  --font-size-24px: 24px;
  --font-size-27px: 26.7514px;
  --font-size-33px: 33.0459px;
  --font-size-40px: 40.1271px;
  --font-size-44px: 44.0611px;
  --font-size-50px: 50.3554px;
  --font-family-base: Times;
  --font-family-2: Arial;
  --font-family-3: Madefor-Text;
  --font-family-4: Madefor-Display;
  --font-family-5: Helvetica Neue;
  --font-family-6: wfont_343a2a_5b4cd32fc19d46e1b8c1b142abb27d39;
  --font-family-7: wix-madefor-text-v2;
  --font-family-8: wfont_343a2a_4e484da66ffc4465a05a1c9ea5caf495;
  --font-family-9: wfont_343a2a_7681af10b77f4b6b90774b33447234e8;
  --font-family-10: madefor-text;
  --font-family-11: madefor-text-mediumbold;
  --font-family-12: madefor-text-bold;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-tight: 11.8021px;
  --line-height-snug: 16.8px;
  --line-height-normal: 17.6244px;
  --line-height-relaxed: 18.5214px;
  --line-height-loose: 19.6px;
  --line-height-lh-6: 20.8px;
  --line-height-lh-7: 22px;
  --line-height-lh-8: 24px;
  --line-height-lh-9: 25.2px;
  --line-height-lh-10: 26.4367px;
  --line-height-lh-11: 26.7514px;
  --line-height-lh-12: 28.325px;
  --line-height-lh-13: 28.6397px;
  --line-height-lh-14: 33.0459px;
  --line-height-lh-15: 36px;
  --line-height-lh-16: 40.1271px;
  --line-height-lh-17: 44.0611px;
  --line-height-lh-18: 45.3199px;
  --line-height-lh-19: 61.1348px;
  --letter-spacing-tight: 1.6px;

  /* ── Layout: Spacing ── */
  --space-1: 0.0078125px;
  --space-2: 0.0155px;
  --space-3: 0.016px;
  --space-4: 0.210938px;
  --space-5: 0.389px;
  --space-6: 0.40625px;
  --space-8: 0.5px;
  --space-10: 0.590066px;
  --space-12: 1px;
  --space-16: 1.18025px;
  --space-20: 1.57362px;
  --space-24: 8px;
  --space-32: 13px;
  --space-40: 16.995px;
  --space-48: 25px;
  --space-64: 52px;
  --space-80: 103.103px;
  --space-96: 6px;
  --space-128: 6.29449px;
  --space-160: 7px;
  --space-192: 7.08125px;
  --space-256: 7.86789px;
  --space-23: 7.86801px;
  --space-25: 8.84873px;
  --space-26: 8.85156px;
  --space-27: 9px;
  --space-28: 10px;
  --space-29: 11.0153px;
  --space-30: 11.8021px;
  --space-31: 12px;
  --space-33: 14px;
  --space-34: 14.7526px;
  --space-35: 15px;
  --space-36: 15.3408px;
  --space-37: 15.6px;
  --space-38: 15.7361px;
  --space-39: 16px;
  --space-41: 17.3097px;
  --space-42: 19.6701px;
  --space-43: 20px;
  --space-44: 22.424px;
  --space-45: 22.66px;
  --space-46: 23.6041px;
  --space-47: 24px;
  --space-49: 29.5052px;
  --space-50: 30px;
  --space-51: 31.4722px;
  --space-52: 32px;
  --space-53: 33.99px;
  --space-54: 34px;
  --space-55: 35px;
  --space-56: 35.4062px;
  --space-57: 36px;
  --space-58: 38px;
  --space-59: 39.3403px;
  --space-60: 40px;
  --space-61: 42px;
  --space-62: 50px;
  --space-63: 51px;
  --space-65: 53px;
  --space-66: 55.0764px;
  --space-67: 60px;
  --space-68: 62.9445px;
  --space-69: 68px;
  --space-70: 70.8125px;
  --space-71: 74.778px;
  --space-72: 76px;
  --space-73: 78.6805px;
  --space-74: 86.5489px;
  --space-75: 90px;
  --space-76: 90.4826px;
  --space-77: 94.4166px;
  --space-78: 98.9844px;
  --space-79: 100px;
  --space-81: 106.219px;
  --space-82: 110.153px;
  --space-83: 114.087px;
  --space-84: 177.031px;
  --space-85: 200px;

  /* ── Borders ── */
  --border-width-hairline: 1px;
  --radius-sm: 0px 0px 10px 10px;
  --radius-md: 0px 0px 47.2084px 47.2084px;
  --radius-lg: 0.0204946px;
  --radius-xl: 3px;
  --radius-2xl: 5.901px;
  --radius-full: 7.86801px;
  --radius-r7: 10px;
  --radius-r8: 11.0153px;
  --radius-r9: 11.8021px;
  --radius-r10: 14px;
  --radius-r11: 16px;
  --radius-r12: 20.6537px;
  --radius-r13: 30px;
  --radius-r14: 30px 30px 0px 0px;
  --radius-r15: 47.2084px;
  --radius-r16: 70px;
  --radius-r17: 92.7843px;
  --radius-r18: 100px;
  --radius-r19: 300px;
  --radius-r20: 589.514px;
  --radius-r21: 999px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgba(19, 25, 70, 0) 1.5px 3.71px 9px 0px;
  --shadow-md: rgba(0, 0, 0, 0) 0px 0px 0px 0px;
  --shadow-lg: rgba(124, 191, 213, 0.5) 0px 6px 18px 0px;
  --shadow-xl: rgba(34, 40, 42, 0.04) 0px 3px 10px 0px;
  --shadow-shadow-5: rgba(15, 15, 15, 0.07) 0px 5px 10px 0px;

  /* ── Motion ── */
  --duration-instant: 0.1s;
  --duration-fast: 0.182s;
  --duration-normal: 0.2s;
  --duration-slow: 0.3s;
  --duration-slower: 0.4s;
  --duration-duration-6: 1s;
  --duration-duration-7: 1.5s;
  --duration-duration-8: 2s;
  --easing-ease-in-out: ease-in-out;

  /* ── Layout: Z-Index ── */
  --z-1: -2;
  --z-2: -1;
  --z-3: 1;
  --z-4: 50;
  --z-5: 52;
  --z-6: 53;
  --z-7: 999;
  --z-8: 9999;

  /* ── Breakpoints ── */
  --breakpoint-xs: 320px;
  --breakpoint-sm: 750px;
  --breakpoint-md: 767px;
  --breakpoint-lg: 768px;
  --breakpoint-xl: 1000px;
  --breakpoint-2xl: 1001px;
  --breakpoint-3xl: 1100px;
  --breakpoint-bp-8: 1440px;

  /* ── Opacity ── */
  --opacity-20: 0.2;
  --opacity-70: 0.7;
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://base44.com/",
    "title": "Build Apps with AI in Minutes | Base44",
    "generatedAt": "2026-05-06T12:46:29.559Z"
  },
  "core": {
    "color": {
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "background · ×3943"
      },
      "white": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×152"
      },
      "dark-gray": {
        "$value": "#232529",
        "$type": "color",
        "$description": "text · ×87"
      },
      "orange": {
        "$value": "#FF983B",
        "$type": "color",
        "$description": "text · ×83"
      },
      "blue": {
        "$value": "#0000EE",
        "$type": "color",
        "$description": "text · ×75"
      },
      "mid-gray": {
        "$value": "#808080",
        "$type": "color",
        "$description": "text · ×24"
      },
      "dark-gray-2": {
        "$value": "#0F0F0F",
        "$type": "color",
        "$description": "background · ×24"
      },
      "dark-blue": {
        "$value": "#000624",
        "$type": "color",
        "$description": "fill · ×21"
      },
      "blue-2": {
        "$value": "#696F7B",
        "$type": "color",
        "$description": "text · ×18"
      },
      "blue-3": {
        "$value": "#5E97FF",
        "$type": "color",
        "$description": "other · ×16"
      },
      "light-gray": {
        "$value": "#EDEAE4",
        "$type": "color",
        "$description": "background · ×8"
      },
      "orange-2": {
        "$value": "#FF631F",
        "$type": "color",
        "$description": "background · ×7"
      },
      "white-2": {
        "$value": "#FAF9F7",
        "$type": "color",
        "$description": "background · ×7"
      },
      "dark-blue-2": {
        "$value": "#324158",
        "$type": "color",
        "$description": "border · ×6"
      },
      "light-gray-2": {
        "$value": "#E6E6E6",
        "$type": "color",
        "$description": "border · ×5"
      },
      "light-green": {
        "$value": "#EBFFB1",
        "$type": "color",
        "$description": "background · ×5"
      },
      "mid-gray-2": {
        "$value": "#71767E",
        "$type": "color",
        "$description": "text · ×4"
      },
      "orange-3": {
        "$value": "#FBB439",
        "$type": "color",
        "$description": "gradient · ×4"
      },
      "light-pink": {
        "$value": "#F0C3EC",
        "$type": "color",
        "$description": "gradient · ×3"
      },
      "light-gray-3": {
        "$value": "#F2F1ED",
        "$type": "color",
        "$description": "gradient · ×3"
      },
      "red": {
        "$value": "#ED1566",
        "$type": "color",
        "$description": "other · ×3"
      },
      "light-gray-4": {
        "$value": "#E8E6E6",
        "$type": "color",
        "$description": "border · ×2"
      },
      "dark-gray-3": {
        "$value": "rgba(15, 15, 15, 0.07)",
        "$type": "color",
        "$description": "background · ×2"
      },
      "white-3": {
        "$value": "rgba(250, 249, 247, 0.12)",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "cyan": {
        "$value": "rgba(124, 191, 213, 0.5)",
        "$type": "color",
        "$description": "shadow · ×2"
      },
      "orange-4": {
        "$value": "#FFAE53",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "light-gray-5": {
        "$value": "#D5DFE0",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "light-green-2": {
        "$value": "#E5FF94",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "orange-5": {
        "$value": "#FF5500",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "dark-gray-4": {
        "$value": "#17181A",
        "$type": "color",
        "$description": "other · ×2"
      },
      "green": {
        "$value": "#ADE900",
        "$type": "color",
        "$description": "border · ×1"
      },
      "white-4": {
        "$value": "#F2F3F5",
        "$type": "color",
        "$description": "background · ×1"
      },
      "white-5": {
        "$value": "rgba(250, 249, 247, 0.7)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "cyan-2": {
        "$value": "#5DB3CF",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-cyan": {
        "$value": "rgba(145, 201, 220, 0.56)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-cyan-2": {
        "$value": "#8FC6D9",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "cyan-3": {
        "$value": "#22C9FF",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "white-6": {
        "$value": "#FCFBFA",
        "$type": "color",
        "$description": "background · ×1"
      },
      "dark-cyan": {
        "$value": "rgba(34, 40, 42, 0.04)",
        "$type": "color",
        "$description": "shadow · ×1"
      },
      "light-gray-6": {
        "$value": "#F0EEEB",
        "$type": "color",
        "$description": "background · ×1"
      },
      "blue-4": {
        "$value": "#9CA3AF",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-7": {
        "$value": "#ECECEC",
        "$type": "color",
        "$description": "border · ×1"
      },
      "light-orange": {
        "$value": "rgba(255, 240, 222, 0.3)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "orange-6": {
        "$value": "#FF7F47",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-orange-2": {
        "$value": "#FFF0DE",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-orange-3": {
        "$value": "#FFBE8D",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-purple": {
        "$value": "#F0C5FF",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-gray-8": {
        "$value": "#F0F0F0",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-cyan-3": {
        "$value": "#CCE7E9",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-yellow": {
        "$value": "#F9FBC9",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-yellow-2": {
        "$value": "#FEE969",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-gray-9": {
        "$value": "#DBDDDA",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-gray-10": {
        "$value": "#F5F2EC",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-pink-2": {
        "$value": "#EFD8ED",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-gray-11": {
        "$value": "#D9D9D9",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-pink-3": {
        "$value": "#F0C4E3",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-gray-12": {
        "$value": "#DCE8E8",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-orange-4": {
        "$value": "#FFC494",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "white-7": {
        "$value": "#FFF9EB",
        "$type": "color",
        "$description": "background · ×1"
      },
      "orange-7": {
        "$value": "#D8723C",
        "$type": "color",
        "$description": "border · ×1"
      },
      "light-green-3": {
        "$value": "#E6FBB1",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "mid-gray-3": {
        "$value": "rgba(179, 179, 179, 0.6) rgb(0, 0, 0) rgb(0, 0, 0)",
        "$type": "color",
        "$description": "border · ×1"
      }
    },
    "fontSize": {
      "font-size-2xs": {
        "$value": "10px",
        "$type": "dimension"
      },
      "font-size-xs": {
        "$value": "11.8021px",
        "$type": "dimension"
      },
      "font-size-sm": {
        "$value": "12px",
        "$type": "dimension"
      },
      "font-size-base": {
        "$value": "12.5889px",
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
        "$value": "14.1625px",
        "$type": "dimension"
      },
      "font-size-4xl": {
        "$value": "15.7361px",
        "$type": "dimension"
      },
      "font-size-5xl": {
        "$value": "15.7364px",
        "$type": "dimension"
      },
      "font-size-6xl": {
        "$value": "16px",
        "$type": "dimension"
      },
      "font-size-17px": {
        "$value": "17.3097px",
        "$type": "dimension"
      },
      "font-size-18px": {
        "$value": "18px",
        "$type": "dimension"
      },
      "font-size-19px": {
        "$value": "18.8834px",
        "$type": "dimension"
      },
      "font-size-22px": {
        "$value": "22.0305px",
        "$type": "dimension"
      },
      "font-size-24px": {
        "$value": "24px",
        "$type": "dimension"
      },
      "font-size-27px": {
        "$value": "26.7514px",
        "$type": "dimension"
      },
      "font-size-33px": {
        "$value": "33.0459px",
        "$type": "dimension"
      },
      "font-size-40px": {
        "$value": "40.1271px",
        "$type": "dimension"
      },
      "font-size-44px": {
        "$value": "44.0611px",
        "$type": "dimension"
      },
      "font-size-50px": {
        "$value": "50.3554px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "Times",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "Arial",
        "$type": "fontFamily"
      },
      "font-family-3": {
        "$value": "Madefor-Text",
        "$type": "fontFamily"
      },
      "font-family-4": {
        "$value": "Madefor-Display",
        "$type": "fontFamily"
      },
      "font-family-5": {
        "$value": "Helvetica Neue",
        "$type": "fontFamily"
      },
      "font-family-6": {
        "$value": "wfont_343a2a_5b4cd32fc19d46e1b8c1b142abb27d39",
        "$type": "fontFamily"
      },
      "font-family-7": {
        "$value": "wix-madefor-text-v2",
        "$type": "fontFamily"
      },
      "font-family-8": {
        "$value": "wfont_343a2a_4e484da66ffc4465a05a1c9ea5caf495",
        "$type": "fontFamily"
      },
      "font-family-9": {
        "$value": "wfont_343a2a_7681af10b77f4b6b90774b33447234e8",
        "$type": "fontFamily"
      },
      "font-family-10": {
        "$value": "madefor-text",
        "$type": "fontFamily"
      },
      "font-family-11": {
        "$value": "madefor-text-mediumbold",
        "$type": "fontFamily"
      },
      "font-family-12": {
        "$value": "madefor-text-bold",
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
        "$value": "11.8021px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "16.8px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "17.6244px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "18.5214px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "19.6px",
        "$type": "dimension"
      },
      "line-height-lh-6": {
        "$value": "20.8px",
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
        "$value": "25.2px",
        "$type": "dimension"
      },
      "line-height-lh-10": {
        "$value": "26.4367px",
        "$type": "dimension"
      },
      "line-height-lh-11": {
        "$value": "26.7514px",
        "$type": "dimension"
      },
      "line-height-lh-12": {
        "$value": "28.325px",
        "$type": "dimension"
      },
      "line-height-lh-13": {
        "$value": "28.6397px",
        "$type": "dimension"
      },
      "line-height-lh-14": {
        "$value": "33.0459px",
        "$type": "dimension"
      },
      "line-height-lh-15": {
        "$value": "36px",
        "$type": "dimension"
      },
      "line-height-lh-16": {
        "$value": "40.1271px",
        "$type": "dimension"
      },
      "line-height-lh-17": {
        "$value": "44.0611px",
        "$type": "dimension"
      },
      "line-height-lh-18": {
        "$value": "45.3199px",
        "$type": "dimension"
      },
      "line-height-lh-19": {
        "$value": "61.1348px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "1.6px",
        "$type": "dimension"
      }
    }
  },
  "layout": {
    "spacing": {
      "space-1": {
        "$value": "0.0078125px",
        "$type": "dimension"
      },
      "space-2": {
        "$value": "0.0155px",
        "$type": "dimension"
      },
      "space-3": {
        "$value": "0.016px",
        "$type": "dimension"
      },
      "space-4": {
        "$value": "0.210938px",
        "$type": "dimension"
      },
      "space-5": {
        "$value": "0.389px",
        "$type": "dimension"
      },
      "space-6": {
        "$value": "0.40625px",
        "$type": "dimension"
      },
      "space-8": {
        "$value": "0.5px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "0.590066px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "1px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "1.18025px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "1.57362px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "8px",
        "$type": "dimension"
      },
      "space-32": {
        "$value": "13px",
        "$type": "dimension"
      },
      "space-40": {
        "$value": "16.995px",
        "$type": "dimension"
      },
      "space-48": {
        "$value": "25px",
        "$type": "dimension"
      },
      "space-64": {
        "$value": "52px",
        "$type": "dimension"
      },
      "space-80": {
        "$value": "103.103px",
        "$type": "dimension"
      },
      "space-96": {
        "$value": "6px",
        "$type": "dimension"
      },
      "space-128": {
        "$value": "6.29449px",
        "$type": "dimension"
      },
      "space-160": {
        "$value": "7px",
        "$type": "dimension"
      },
      "space-192": {
        "$value": "7.08125px",
        "$type": "dimension"
      },
      "space-256": {
        "$value": "7.86789px",
        "$type": "dimension"
      },
      "space-23": {
        "$value": "7.86801px",
        "$type": "dimension"
      },
      "space-25": {
        "$value": "8.84873px",
        "$type": "dimension"
      },
      "space-26": {
        "$value": "8.85156px",
        "$type": "dimension"
      },
      "space-27": {
        "$value": "9px",
        "$type": "dimension"
      },
      "space-28": {
        "$value": "10px",
        "$type": "dimension"
      },
      "space-29": {
        "$value": "11.0153px",
        "$type": "dimension"
      },
      "space-30": {
        "$value": "11.8021px",
        "$type": "dimension"
      },
      "space-31": {
        "$value": "12px",
        "$type": "dimension"
      },
      "space-33": {
        "$value": "14px",
        "$type": "dimension"
      },
      "space-34": {
        "$value": "14.7526px",
        "$type": "dimension"
      },
      "space-35": {
        "$value": "15px",
        "$type": "dimension"
      },
      "space-36": {
        "$value": "15.3408px",
        "$type": "dimension"
      },
      "space-37": {
        "$value": "15.6px",
        "$type": "dimension"
      },
      "space-38": {
        "$value": "15.7361px",
        "$type": "dimension"
      },
      "space-39": {
        "$value": "16px",
        "$type": "dimension"
      },
      "space-41": {
        "$value": "17.3097px",
        "$type": "dimension"
      },
      "space-42": {
        "$value": "19.6701px",
        "$type": "dimension"
      },
      "space-43": {
        "$value": "20px",
        "$type": "dimension"
      },
      "space-44": {
        "$value": "22.424px",
        "$type": "dimension"
      },
      "space-45": {
        "$value": "22.66px",
        "$type": "dimension"
      },
      "space-46": {
        "$value": "23.6041px",
        "$type": "dimension"
      },
      "space-47": {
        "$value": "24px",
        "$type": "dimension"
      },
      "space-49": {
        "$value": "29.5052px",
        "$type": "dimension"
      },
      "space-50": {
        "$value": "30px",
        "$type": "dimension"
      },
      "space-51": {
        "$value": "31.4722px",
        "$type": "dimension"
      },
      "space-52": {
        "$value": "32px",
        "$type": "dimension"
      },
      "space-53": {
        "$value": "33.99px",
        "$type": "dimension"
      },
      "space-54": {
        "$value": "34px",
        "$type": "dimension"
      },
      "space-55": {
        "$value": "35px",
        "$type": "dimension"
      },
      "space-56": {
        "$value": "35.4062px",
        "$type": "dimension"
      },
      "space-57": {
        "$value": "36px",
        "$type": "dimension"
      },
      "space-58": {
        "$value": "38px",
        "$type": "dimension"
      },
      "space-59": {
        "$value": "39.3403px",
        "$type": "dimension"
      },
      "space-60": {
        "$value": "40px",
        "$type": "dimension"
      },
      "space-61": {
        "$value": "42px",
        "$type": "dimension"
      },
      "space-62": {
        "$value": "50px",
        "$type": "dimension"
      },
      "space-63": {
        "$value": "51px",
        "$type": "dimension"
      },
      "space-65": {
        "$value": "53px",
        "$type": "dimension"
      },
      "space-66": {
        "$value": "55.0764px",
        "$type": "dimension"
      },
      "space-67": {
        "$value": "60px",
        "$type": "dimension"
      },
      "space-68": {
        "$value": "62.9445px",
        "$type": "dimension"
      },
      "space-69": {
        "$value": "68px",
        "$type": "dimension"
      },
      "space-70": {
        "$value": "70.8125px",
        "$type": "dimension"
      },
      "space-71": {
        "$value": "74.778px",
        "$type": "dimension"
      },
      "space-72": {
        "$value": "76px",
        "$type": "dimension"
      },
      "space-73": {
        "$value": "78.6805px",
        "$type": "dimension"
      },
      "space-74": {
        "$value": "86.5489px",
        "$type": "dimension"
      },
      "space-75": {
        "$value": "90px",
        "$type": "dimension"
      },
      "space-76": {
        "$value": "90.4826px",
        "$type": "dimension"
      },
      "space-77": {
        "$value": "94.4166px",
        "$type": "dimension"
      },
      "space-78": {
        "$value": "98.9844px",
        "$type": "dimension"
      },
      "space-79": {
        "$value": "100px",
        "$type": "dimension"
      },
      "space-81": {
        "$value": "106.219px",
        "$type": "dimension"
      },
      "space-82": {
        "$value": "110.153px",
        "$type": "dimension"
      },
      "space-83": {
        "$value": "114.087px",
        "$type": "dimension"
      },
      "space-84": {
        "$value": "177.031px",
        "$type": "dimension"
      },
      "space-85": {
        "$value": "200px",
        "$type": "dimension"
      }
    },
    "zIndex": {
      "z-1": {
        "$value": "-2",
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
        "$value": "50",
        "$type": "number"
      },
      "z-5": {
        "$value": "52",
        "$type": "number"
      },
      "z-6": {
        "$value": "53",
        "$type": "number"
      },
      "z-7": {
        "$value": "999",
        "$type": "number"
      },
      "z-8": {
        "$value": "9999",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "320px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "750px",
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
        "$value": "1000px",
        "$type": "dimension"
      },
      "breakpoint-2xl": {
        "$value": "1001px",
        "$type": "dimension"
      },
      "breakpoint-3xl": {
        "$value": "1100px",
        "$type": "dimension"
      },
      "breakpoint-bp-8": {
        "$value": "1440px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
        "$value": "0px 0px 10px 10px",
        "$type": "dimension"
      },
      "radius-md": {
        "$value": "0px 0px 47.2084px 47.2084px",
        "$type": "dimension"
      },
      "radius-lg": {
        "$value": "0.0204946px",
        "$type": "dimension"
      },
      "radius-xl": {
        "$value": "3px",
        "$type": "dimension"
      },
      "radius-2xl": {
        "$value": "5.901px",
        "$type": "dimension"
      },
      "radius-full": {
        "$value": "7.86801px",
        "$type": "dimension"
      },
      "radius-r7": {
        "$value": "10px",
        "$type": "dimension"
      },
      "radius-r8": {
        "$value": "11.0153px",
        "$type": "dimension"
      },
      "radius-r9": {
        "$value": "11.8021px",
        "$type": "dimension"
      },
      "radius-r10": {
        "$value": "14px",
        "$type": "dimension"
      },
      "radius-r11": {
        "$value": "16px",
        "$type": "dimension"
      },
      "radius-r12": {
        "$value": "20.6537px",
        "$type": "dimension"
      },
      "radius-r13": {
        "$value": "30px",
        "$type": "dimension"
      },
      "radius-r14": {
        "$value": "30px 30px 0px 0px",
        "$type": "dimension"
      },
      "radius-r15": {
        "$value": "47.2084px",
        "$type": "dimension"
      },
      "radius-r16": {
        "$value": "70px",
        "$type": "dimension"
      },
      "radius-r17": {
        "$value": "92.7843px",
        "$type": "dimension"
      },
      "radius-r18": {
        "$value": "100px",
        "$type": "dimension"
      },
      "radius-r19": {
        "$value": "300px",
        "$type": "dimension"
      },
      "radius-r20": {
        "$value": "589.514px",
        "$type": "dimension"
      },
      "radius-r21": {
        "$value": "999px",
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
        "$value": "rgba(19, 25, 70, 0) 1.5px 3.71px 9px 0px",
        "$type": "shadow"
      },
      "shadow-md": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px",
        "$type": "shadow"
      },
      "shadow-lg": {
        "$value": "rgba(124, 191, 213, 0.5) 0px 6px 18px 0px",
        "$type": "shadow"
      },
      "shadow-xl": {
        "$value": "rgba(34, 40, 42, 0.04) 0px 3px 10px 0px",
        "$type": "shadow"
      },
      "shadow-shadow-5": {
        "$value": "rgba(15, 15, 15, 0.07) 0px 5px 10px 0px",
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
        "$value": "0.182s",
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
        "$value": "0.4s",
        "$type": "duration"
      },
      "duration-duration-6": {
        "$value": "1s",
        "$type": "duration"
      },
      "duration-duration-7": {
        "$value": "1.5s",
        "$type": "duration"
      },
      "duration-duration-8": {
        "$value": "2s",
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
    "opacity-20": {
      "$value": 0.2,
      "$type": "number"
    },
    "opacity-70": {
      "$value": 0.7,
      "$type": "number"
    }
  }
}
```
