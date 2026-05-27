# Raycast - Your shortcut to everything — Design System

**Source:** https://www.raycast.com/  
**Generated:** 17/04/2026, 13:19:45  
**Extracted:** 123 colors · 49 type tokens · 47 spacing steps · 30 breakpoints · 17 motion tokens

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
| `--color-white` | `#FFFFFF` | hsl(0, 0%, 100%) | ×5522 |
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×1988 |
| `--color-black-2` | `#07080A` | hsl(220, 18%, 3%) | ×175 |
| `--color-light-gray` | `#E6E6E6` | hsl(0, 0%, 90%) | ×145 |
| `--color-dark-gray-3` | `#434345` | hsl(240, 1%, 27%) | ×125 |
| `--color-dark-gray-4` | `#1B1C1E` | hsl(220, 5%, 11%) | ×57 |
| `--color-black-3` | `#08090C` | hsl(225, 20%, 4%) | ×10 |
| `--color-red` | `#FF6363` | hsl(0, 100%, 69%) | ×8 |
| `--color-blue-3` | `#56C2FF` | hsl(202, 100%, 67%) | ×7 |
| `--color-dark-gray-9` | `#111214` | hsl(220, 8%, 7%) | ×6 |
| `--color-dark-red` | `#452324` | hsl(358, 33%, 20%) | ×5 |
| `--color-dark-gray-13` | `#222222` | hsl(0, 0%, 13%) | ×3 |
| `--color-light-blue` | `rgba(158, 190, 215, 0.1)` | hsl(211, 43%, 73%) | ×3 |
| `--color-dark-gray-19` | `#130D0E` | hsl(350, 19%, 6%) | ×1 |
| `--color-cyan` | `#59D499` | hsl(151, 59%, 59%) | ×1 |
| `--color-orange` | `#FFC531` | hsl(43, 100%, 60%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-mid-gray` | `#6A6B6C` | hsl(210, 1%, 42%) | ×388 |
| `--color-mid-gray-2` | `#9C9C9D` | hsl(240, 1%, 61%) | ×284 |
| `--color-dark-gray-5` | `#2F3031` | hsl(210, 2%, 19%) | ×56 |
| `--color-light-red` | `#FFCDCD` | hsl(0, 100%, 90%) | ×9 |
| `--color-light-blue-4` | `#8CD6FF` | hsl(201, 100%, 77%) | ×2 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-mid-gray-3` | `rgba(142, 140, 144, 0.2)` | hsl(240, 2%, 56%) | ×5 |
| `--color-red-5` | `rgba(255, 99, 99, 0.25)` | hsl(0, 100%, 70%) | ×1 |

### Shadow Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-orange` | `rgba(215, 201, 175, 0.05)` | hsl(29, 33%, 77%) | ×36 |
| `--color-dark-blue-3` | `rgba(7, 13, 79, 0.1)` | hsl(240, 77%, 17%) | ×5 |
| `--color-dark-pink` | `rgba(85, 0, 98, 0.1)` | hsl(294, 100%, 19%) | ×4 |
| `--color-dark-blue-5` | `rgba(3, 15, 129, 0.09)` | hsl(235, 100%, 26%) | ×4 |
| `--color-red-2` | `rgba(255, 67, 7, 0.1)` | hsl(14, 100%, 52%) | ×4 |
| `--color-red-3` | `rgba(245, 48, 107, 0.1)` | hsl(342, 91%, 58%) | ×2 |
| `--color-dark-blue-9` | `rgba(7, 13, 79, 0.05)` | hsl(225, 100%, 15%) | ×2 |
| `--color-green` | `rgba(46, 212, 105, 0.05)` | hsl(140, 69%, 50%) | ×2 |
| `--color-dark-purple-2` | `rgba(51, 3, 129, 0.09)` | hsl(265, 100%, 26%) | ×2 |
| `--color-dark-blue-11` | `rgba(7, 40, 79, 0.1)` | hsl(214, 77%, 17%) | ×2 |
| `--color-light-blue-3` | `rgba(154, 170, 255, 0.05)` | hsl(228, 100%, 81%) | ×2 |
| `--color-light-red-3` | `rgba(255, 118, 118, 0.25)` | hsl(0, 100%, 74%) | ×2 |
| `--color-dark-cyan-3` | `rgba(3, 122, 129, 0.09)` | hsl(185, 100%, 26%) | ×1 |
| `--color-dark-blue-19` | `rgba(3, 30, 129, 0.09)` | hsl(225, 100%, 26%) | ×1 |
| `--color-dark-pink-4` | `rgba(79, 7, 59, 0.1)` | hsl(317, 77%, 17%) | ×1 |
| `--color-dark-blue-22` | `rgba(3, 23, 129, 0.09)` | hsl(230, 100%, 26%) | ×1 |
| `--color-red-7` | `rgba(215, 42, 42, 0.05)` | hsl(0, 69%, 50%) | ×1 |
| `--color-red-8` | `rgba(215, 42, 42, 0.07)` | hsl(0, 67%, 50%) | ×1 |

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-gray` | `#121212` | hsl(0, 0%, 7%) | ×157 |
| `--color-dark-gray-2` | `#0D0D0D` | hsl(0, 0%, 5%) | ×157 |
| `--color-light-gray-2` | `#D8D8D8` | hsl(0, 0%, 85%) | ×51 |
| `--color-dark-blue` | `#02193B` | hsl(216, 93%, 12%) | ×33 |
| `--color-dark-gray-6` | `#0F1013` | hsl(225, 12%, 7%) | ×25 |
| `--color-blue` | `#143CA3` | hsl(223, 78%, 36%) | ×21 |
| `--color-blue-2` | `#63A1FF` | hsl(216, 100%, 69%) | ×20 |
| `--color-dark-gray-8` | `#0C0D0F` | hsl(220, 11%, 5%) | ×10 |
| `--color-dark-blue-2` | `#060D18` | hsl(217, 60%, 6%) | ×8 |
| `--color-blue-4` | `#138AF2` | hsl(208, 90%, 51%) | ×6 |
| `--color-dark-blue-4` | `rgba(4, 63, 150, 0.7)` | hsl(216, 95%, 30%) | ×5 |
| `--color-dark-gray-11` | `rgba(17, 18, 20, 0.75)` | hsl(240, 8%, 7%) | ×4 |
| `--color-dark-gray-12` | `rgba(12, 13, 15, 0.9)` | hsl(225, 14%, 5%) | ×4 |
| `--color-dark-blue-7` | `rgba(6, 18, 37, 0.25)` | hsl(214, 64%, 9%) | ×3 |
| `--color-dark-gray-14` | `#525252` | hsl(0, 0%, 32%) | ×3 |
| `--color-dark-gray-15` | `#0E0F11` | hsl(220, 10%, 6%) | ×3 |
| `--color-blue-5` | `#2E6FCF` | hsl(216, 64%, 50%) | ×3 |
| `--color-dark-gray-16` | `#181A1E` | hsl(220, 11%, 11%) | ×3 |
| `--color-light-red-2` | `rgba(255, 150, 150, 0.11)` | hsl(0, 100%, 79%) | ×2 |
| `--color-light-blue-2` | `rgba(222, 226, 255, 0.08)` | hsl(219, 100%, 93%) | ×2 |
| `--color-purple` | `rgba(82, 48, 145, 0.7)` | hsl(262, 50%, 38%) | ×2 |
| `--color-dark-purple` | `rgba(26, 11, 51, 0.14)` | hsl(263, 56%, 13%) | ×2 |
| `--color-blue-6` | `rgba(84, 95, 102, 0.7)` | hsl(205, 10%, 37%) | ×2 |
| `--color-dark-blue-10` | `rgba(0, 36, 69, 0.13)` | hsl(207, 100%, 14%) | ×2 |
| `--color-mid-gray-4` | `#7B7B7B` | hsl(0, 0%, 48%) | ×2 |
| `--color-dark-gray-17` | `#1C1E24` | hsl(225, 13%, 13%) | ×2 |
| `--color-blue-9` | `#3782F3` | hsl(216, 89%, 58%) | ×2 |
| `--color-dark-blue-12` | `#01204D` | hsl(216, 97%, 15%) | ×2 |
| `--color-dark-gray-18` | `#161616` | hsl(0, 0%, 9%) | ×2 |
| `--color-blue-10` | `#0294FE` | hsl(205, 99%, 50%) | ×2 |
| `--color-red-4` | `#FF2136` | hsl(354, 100%, 56%) | ×2 |
| `--color-light-red-4` | `#ECA5A7` | hsl(358, 65%, 79%) | ×1 |
| `--color-dark-gray-20` | `#151515` | hsl(0, 0%, 8%) | ×1 |
| `--color-red-6` | `#D72A2A` | hsl(0, 68%, 50%) | ×1 |
| `--color-mid-gray-5` | `#787878` | hsl(0, 0%, 47%) | ×1 |
| `--color-dark-gray-21` | `#282828` | hsl(0, 0%, 16%) | ×1 |
| `--color-dark-gray-22` | `#5A5A5A` | hsl(0, 0%, 35%) | ×1 |
| `--color-dark-gray-23` | `#1A1A1A` | hsl(0, 0%, 10%) | ×1 |
| `--color-dark-blue-13` | `rgba(32, 35, 91, 0.7)` | hsl(235, 49%, 24%) | ×1 |
| `--color-dark-blue-14` | `rgba(7, 9, 33, 0.7)` | hsl(235, 65%, 8%) | ×1 |
| `--color-blue-11` | `rgba(43, 94, 180, 0.7)` | hsl(218, 61%, 44%) | ×1 |
| `--color-dark-blue-15` | `rgba(13, 16, 35, 0.42)` | hsl(228, 50%, 9%) | ×1 |
| `--color-dark-green` | `#0D6E30` | hsl(142, 79%, 24%) | ×1 |
| `--color-dark-green-2` | `#083518` | hsl(141, 74%, 12%) | ×1 |
| `--color-blue-12` | `rgba(39, 61, 180, 0.7)` | hsl(230, 65%, 43%) | ×1 |
| `--color-dark-blue-16` | `rgba(15, 9, 38, 0.4)` | hsl(251, 57%, 9%) | ×1 |
| `--color-dark-cyan` | `rgba(2, 96, 101, 0.57)` | hsl(182, 96%, 20%) | ×1 |
| `--color-dark-cyan-2` | `rgba(5, 136, 178, 0.06)` | hsl(192, 100%, 33%) | ×1 |
| `--color-dark-blue-17` | `rgba(2, 61, 114, 0.7)` | hsl(208, 98%, 23%) | ×1 |
| `--color-dark-blue-18` | `rgba(5, 11, 28, 0.42)` | hsl(223, 71%, 7%) | ×1 |
| `--color-dark-pink-2` | `rgba(74, 21, 75, 0.7)` | hsl(298, 57%, 19%) | ×1 |
| `--color-dark-pink-3` | `rgba(29, 5, 29, 0.42)` | hsl(300, 71%, 7%) | ×1 |
| `--color-dark-blue-20` | `rgba(5, 9, 29, 0.42)` | hsl(228, 71%, 7%) | ×1 |
| `--color-dark-purple-3` | `rgba(16, 0, 43, 0.16)` | hsl(266, 100%, 9%) | ×1 |
| `--color-dark-blue-21` | `rgba(3, 91, 155, 0.7)` | hsl(205, 96%, 31%) | ×1 |
| `--color-light-red-5` | `#FFA2A2` | hsl(0, 100%, 82%) | ×1 |
| `--color-light-red-6` | `#FFA1A1` | hsl(0, 100%, 82%) | ×1 |
| `--color-blue-13` | `rgba(86, 194, 255, 0.16)` | hsl(202, 100%, 67%) | ×1 |
| `--color-blue-14` | `rgba(86, 194, 255, 0.06)` | hsl(204, 100%, 67%) | ×1 |
| `--color-red-9` | `#E01E5A` | hsl(341, 76%, 50%) | ×1 |
| `--color-cyan-2` | `#36C5F0` | hsl(194, 86%, 58%) | ×1 |
| `--color-cyan-3` | `#2EB67D` | hsl(155, 60%, 45%) | ×1 |
| `--color-orange-2` | `#ECB22E` | hsl(42, 83%, 55%) | ×1 |
| `--color-red-10` | `#FF0000` | hsl(0, 100%, 50%) | ×1 |
| `--color-black-4` | `#07090B` | hsl(210, 22%, 4%) | ×1 |
| `--color-blue-15` | `#3D5DCB` | hsl(226, 58%, 52%) | ×1 |
| `--color-dark-gray-24` | `#494949` | hsl(0, 0%, 29%) | ×1 |
| `--color-blue-16` | `#2065CD` | hsl(216, 73%, 46%) | ×1 |
| `--color-blue-17` | `#114FAB` | hsl(216, 82%, 37%) | ×1 |
| `--color-dark-blue-23` | `#02337B` | hsl(216, 97%, 25%) | ×1 |
| `--color-dark-blue-24` | `#052A61` | hsl(216, 90%, 20%) | ×1 |
| `--color-dark-blue-25` | `#2E4260` | hsl(216, 35%, 28%) | ×1 |
| `--color-dark-blue-26` | `#182C4A` | hsl(216, 51%, 19%) | ×1 |
| `--color-dark-blue-27` | `#032049` | hsl(215, 92%, 15%) | ×1 |
| `--color-black-5` | `rgba(7, 8, 10, 0.8)` | hsl(240, 11%, 4%) | ×1 |
| `--color-purple-2` | `#9B4DFF` | hsl(266, 100%, 65%) | ×1 |

### Other Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-gray-7` | `#545454` | hsl(0, 0%, 33%) | ×22 |
| `--color-dark-gray-10` | `#424242` | hsl(0, 0%, 26%) | ×5 |
| `--color-dark-blue-6` | `#0C2C76` | hsl(222, 82%, 25%) | ×4 |
| `--color-dark-blue-8` | `#414D6B` | hsl(223, 24%, 34%) | ×3 |
| `--color-blue-7` | `#1456A3` | hsl(212, 78%, 36%) | ×2 |
| `--color-blue-8` | `#3C6AC5` | hsl(220, 54%, 50%) | ×2 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `Inter` |
| `--font-family-2` | `GeistMono` |
| `--font-family-3` | `SF Pro Text` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `10px` |  |
| `--font-size-xs` | `11px` |  |
| `--font-size-sm` | `12px` |  |
| `--font-size-base` | `13px` |  |
| `--font-size-lg` | `14px` |  |
| `--font-size-xl` | `16px` |  |
| `--font-size-2xl` | `18px` |  |
| `--font-size-3xl` | `20px` |  |
| `--font-size-4xl` | `22px` |  |
| `--font-size-5xl` | `23.75px` |  |
| `--font-size-6xl` | `24px` |  |
| `--font-size-32px` | `32px` |  |
| `--font-size-56px` | `56px` |  |
| `--font-size-64px` | `64px` |  |

### Font Weights

| Token | Weight |
| --- | --- |
| `--font-weight-light` | `300` |
| `--font-weight-regular` | `400` |
| `--font-weight-medium` | `500` |
| `--font-weight-semibold` | `600` |
| `--font-weight-bold` | `700` |

### Line Heights

| Token | Value |
| --- | --- |
| `--line-height-tight` | `10px` |
| `--line-height-snug` | `13px` |
| `--line-height-normal` | `13.8px` |
| `--line-height-relaxed` | `14.95px` |
| `--line-height-loose` | `16px` |
| `--line-height-lh-6` | `18px` |
| `--line-height-lh-7` | `19.2px` |
| `--line-height-lh-8` | `19.6px` |
| `--line-height-lh-9` | `20.7px` |
| `--line-height-lh-10` | `22.4px` |
| `--line-height-lh-11` | `24px` |
| `--line-height-lh-12` | `25.3px` |
| `--line-height-lh-13` | `25.6px` |
| `--line-height-lh-14` | `27.3125px` |
| `--line-height-lh-15` | `27.6px` |
| `--line-height-lh-16` | `32px` |
| `--line-height-lh-17` | `36.8px` |
| `--line-height-lh-18` | `38.4px` |
| `--line-height-lh-19` | `65.52px` |
| `--line-height-lh-20` | `70.4px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `-0.05px` |
| `--letter-spacing-normal` | `0.1px` |
| `--letter-spacing-wide` | `0.2px` |
| `--letter-spacing-wider` | `0.3px` |
| `--letter-spacing-widest` | `0.4px` |
| `--letter-spacing-ls-6` | `0.5px` |
| `--letter-spacing-ls-7` | `0.8px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `1px` | ×13 |
| `--space-2` | `2px` | ×28 |
| `--space-3` | `2.5px` | ×24 |
| `--space-4` | `3px` | ×22 |
| `--space-5` | `4px` | ×73 |
| `--space-6` | `6px` | ×21 |
| `--space-8` | `8px` | ×696 |
| `--space-10` | `10px` | ×243 |
| `--space-12` | `10.5px` | ×2 |
| `--space-16` | `12px` | ×195 |
| `--space-20` | `13px` | ×3 |
| `--space-24` | `34px` | ×2 |
| `--space-32` | `72px` | ×1 |
| `--space-40` | `148px` | ×2 |
| `--space-48` | `349.242px` | ×2 |
| `--space-64` | `17px` | ×1 |
| `--space-80` | `19px` | ×1 |
| `--space-96` | `20px` | ×65 |
| `--space-128` | `22px` | ×2 |
| `--space-160` | `24px` | ×332 |
| `--space-192` | `25px` | ×6 |
| `--space-256` | `29px` | ×4 |
| `--space-23` | `32px` | ×38 |
| `--space-25` | `40px` | ×31 |
| `--space-26` | `45px` | ×1 |
| `--space-27` | `47.5px` | ×2 |
| `--space-28` | `48px` | ×15 |
| `--space-29` | `50px` | ×21 |
| `--space-30` | `56px` | ×8 |
| `--space-31` | `64px` | ×5 |
| `--space-33` | `80px` | ×7 |
| `--space-34` | `85px` | ×3 |
| `--space-35` | `96px` | ×7 |
| `--space-36` | `102px` | ×1 |
| `--space-37` | `120px` | ×2 |
| `--space-38` | `128px` | ×1 |
| `--space-39` | `137px` | ×1 |
| `--space-41` | `156.5px` | ×2 |
| `--space-42` | `191.5px` | ×2 |
| `--space-43` | `200px` | ×1 |
| `--space-44` | `212px` | ×1 |
| `--space-45` | `224px` | ×16 |
| `--space-46` | `251.5px` | ×2 |
| `--space-47` | `342.5px` | ×2 |
| `--space-49` | `370px` | ×1 |
| `--space-50` | `400px` | ×1 |
| `--space-51` | `442.5px` | ×2 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `0.5px` | ×6 |
| `--border-width-thin` | `1px` | ×369 |
| `--border-width-base` | `2px` | ×16 |
| `--border-width-thick` | `4px` | ×4 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `0px 0px 12px 12px` | ×2 |
| `--radius-md` | `2px` | ×6 |
| `--radius-lg` | `2.5px` | ×5 |
| `--radius-xl` | `3px` | ×4 |
| `--radius-2xl` | `4px` | ×17 |
| `--radius-full` | `5px` | ×6 |
| `--radius-r7` | `6px` | ×75 |
| `--radius-r8` | `8px` | ×111 |
| `--radius-r9` | `9px` | ×12 |
| `--radius-r10` | `11px` | ×159 |
| `--radius-r11` | `12px` | ×54 |
| `--radius-r12` | `16px` | ×29 |
| `--radius-r13` | `20px` | ×35 |
| `--radius-r14` | `22px` | ×1 |
| `--radius-r15` | `31px` | ×1 |
| `--radius-r16` | `36px` | ×1 |
| `--radius-r17` | `43px` | ×1 |
| `--radius-r18` | `86px` | ×2 |
| `--radius-r19` | `100%` | ×101 |
| `--radius-r20` | `1000px` | ×1 |
| `--radius-r21` | `99999px` | ×24 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgba(0, 0, 0, 0.4) 0px 1.5px 0.5px 2.5px, rgb(0, 0, 0) 0px 0px 0.5px 1px, rgba(0, 0, 0, 0.25) 0px 2px 1px 1px inset, rgba(255, 255, 255, 0.2) 0px 1px 1px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px inset` | ×157 |
| `--shadow-md` | `rgb(27, 28, 30) 0px 0px 0px 1px, rgb(7, 8, 10) 0px 0px 0px 1px inset` | ×54 |
| `--shadow-lg` | `rgba(215, 201, 175, 0.05) 0px 0px 20px 5px, rgba(215, 201, 175, 0.05) 0px 0px 16px -7px` | ×18 |
| `--shadow-xl` | `rgba(0, 0, 0, 0.28) 0px 1.189px 2.377px 0px` | ×17 |
| `--shadow-shadow-5` | `rgba(255, 255, 255, 0.05) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.25) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px -1px 0px 0px inset` | ×17 |
| `--shadow-shadow-6` | `rgba(0, 0, 0, 0.5) 0px 0px 0px 2px, rgba(255, 255, 255, 0.19) 0px 0px 14px 0px, rgba(0, 0, 0, 0.2) 0px -1px 0.4px 0px inset, rgb(255, 255, 255) 0px 1px 0.4px 0px inset` | ×8 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.1s` | ×12 |
| `--duration-fast` | `0.125s` | ×4 |
| `--duration-normal` | `0.15s` | ×6 |
| `--duration-slow` | `0.2s` | ×580 |
| `--duration-slower` | `0.225s` | ×2 |
| `--duration-duration-6` | `0.25s` | ×3 |
| `--duration-duration-7` | `0.3s` | ×229 |
| `--duration-duration-8` | `0.4s` | ×500 |
| `--duration-duration-9` | `0.5s` | ×13 |
| `--duration-duration-10` | `0.65s` | ×1 |
| `--duration-duration-11` | `0.85s` | ×1 |
| `--duration-duration-12` | `0.9s` | ×1 |
| `--duration-duration-13` | `1s` | ×2 |
| `--duration-duration-14` | `1.2s` | ×1 |
| `--duration-duration-15` | `1.5s` | ×18 |
| `--duration-duration-16` | `2s` | ×4 |

### Easing Functions

| Token | Value | Usage |
| --- | --- | --- |
| `--easing-ease-in-out` | `ease-in-out` | ×99 |

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `-1` |
| `--z-2` | `1` |
| `--z-3` | `2` |
| `--z-4` | `3` |
| `--z-5` | `200` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `375px` |
| `--breakpoint-sm` | `400px` |
| `--breakpoint-md` | `408px` |
| `--breakpoint-lg` | `420px` |
| `--breakpoint-xl` | `480px` |
| `--breakpoint-2xl` | `520px` |
| `--breakpoint-3xl` | `530px` |
| `--breakpoint-bp-8` | `540px` |
| `--breakpoint-bp-9` | `548px` |
| `--breakpoint-bp-10` | `563px` |
| `--breakpoint-bp-11` | `600px` |
| `--breakpoint-bp-12` | `619px` |
| `--breakpoint-bp-13` | `640px` |
| `--breakpoint-bp-14` | `720px` |
| `--breakpoint-bp-15` | `767px` |
| `--breakpoint-bp-16` | `768px` |
| `--breakpoint-bp-17` | `784px` |
| `--breakpoint-bp-18` | `800px` |
| `--breakpoint-bp-19` | `840px` |
| `--breakpoint-bp-20` | `880px` |
| `--breakpoint-bp-21` | `900px` |
| `--breakpoint-bp-22` | `920px` |
| `--breakpoint-bp-23` | `980px` |
| `--breakpoint-bp-24` | `1000px` |
| `--breakpoint-bp-25` | `1024px` |
| `--breakpoint-bp-26` | `1050px` |
| `--breakpoint-bp-27` | `1064px` |
| `--breakpoint-bp-28` | `1080px` |
| `--breakpoint-bp-29` | `1200px` |
| `--breakpoint-bp-30` | `1204px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-10` | `0.1` | ×1 |
| `--opacity-11` | `0.11` | ×6 |
| `--opacity-12` | `0.12` | ×4 |
| `--opacity-13` | `0.13` | ×2 |
| `--opacity-15` | `0.15` | ×4 |
| `--opacity-16` | `0.16` | ×3 |
| `--opacity-17` | `0.17` | ×1 |
| `--opacity-19` | `0.19` | ×6 |
| `--opacity-20` | `0.2` | ×82 |
| `--opacity-21` | `0.21` | ×2 |
| `--opacity-22` | `0.22` | ×5 |
| `--opacity-23` | `0.23` | ×5 |
| `--opacity-24` | `0.24` | ×2 |
| `--opacity-25` | `0.25` | ×2 |
| `--opacity-26` | `0.26` | ×3 |
| `--opacity-27` | `0.27` | ×3 |
| `--opacity-28` | `0.28` | ×2 |
| `--opacity-29` | `0.29` | ×5 |
| `--opacity-30` | `0.3` | ×5 |
| `--opacity-31` | `0.31` | ×5 |
| `--opacity-32` | `0.32` | ×3 |
| `--opacity-33` | `0.33` | ×2 |
| `--opacity-34` | `0.34` | ×6 |
| `--opacity-35` | `0.35` | ×4 |
| `--opacity-36` | `0.36` | ×3 |
| `--opacity-39` | `0.39` | ×4 |
| `--opacity-40` | `0.4` | ×1 |
| `--opacity-45` | `0.45` | ×1 |
| `--opacity-50` | `0.5` | ×29 |
| `--opacity-60` | `0.6` | ×1 |
| `--opacity-75` | `0.75` | ×2 |
| `--opacity-80` | `0.8` | ×20 |
| `--opacity-90` | `0.9` | ×1 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-mid-gray` | `--color-white` | 5.34:1 | AA |
| `--color-mid-gray` | `--color-black` | 3.93:1 | AA Large |
| `--color-mid-gray` | `--color-black-2` | 3.75:1 | AA Large |
| `--color-mid-gray` | `--color-light-gray` | 4.28:1 | AA Large |
| `--color-mid-gray` | `--color-dark-gray-3` | 1.85:1 | Fail |
| `--color-mid-gray-2` | `--color-white` | 2.74:1 | Fail |
| `--color-mid-gray-2` | `--color-black` | 7.66:1 | AAA |
| `--color-mid-gray-2` | `--color-black-2` | 7.3:1 | AAA |
| `--color-mid-gray-2` | `--color-light-gray` | 2.2:1 | Fail |
| `--color-mid-gray-2` | `--color-dark-gray-3` | 3.6:1 | AA Large |
| `--color-dark-gray-5` | `--color-white` | 13.22:1 | AAA |
| `--color-dark-gray-5` | `--color-black` | 1.59:1 | Fail |
| `--color-dark-gray-5` | `--color-black-2` | 1.52:1 | Fail |
| `--color-dark-gray-5` | `--color-light-gray` | 10.6:1 | AAA |
| `--color-dark-gray-5` | `--color-dark-gray-3` | 1.34:1 | Fail |
| `--color-light-red` | `--color-white` | 1.41:1 | Fail |
| `--color-light-red` | `--color-black` | 14.87:1 | AAA |
| `--color-light-red` | `--color-black-2` | 14.18:1 | AAA |
| `--color-light-red` | `--color-light-gray` | 1.13:1 | Fail |
| `--color-light-red` | `--color-dark-gray-3` | 6.99:1 | AA |
| `--color-light-blue-4` | `--color-white` | 1.59:1 | Fail |
| `--color-light-blue-4` | `--color-black` | 13.18:1 | AAA |
| `--color-light-blue-4` | `--color-black-2` | 12.57:1 | AAA |
| `--color-light-blue-4` | `--color-light-gray` | 1.28:1 | Fail |
| `--color-light-blue-4` | `--color-dark-gray-3` | 6.19:1 | AA |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--rounding-none` | `0px` |
| `--rounding-xs` | `4px` |
| `--rounding-sm` | `6px` |
| `--rounding-normal` | `8px` |
| `--rounding-md` | `12px` |
| `--rounding-lg` | `16px` |
| `--rounding-xl` | `20px` |
| `--rounding-xxl` | `24px` |
| `--rounding-full` | `100%` |
| `--spacing-none` | `0px` |
| `--spacing-0-5` | `4px` |
| `--spacing-1` | `8px` |
| `--spacing-1-5` | `12px` |
| `--spacing-2` | `16px` |
| `--spacing-2-5` | `20px` |
| `--spacing-3` | `24px` |
| `--spacing-4` | `32px` |
| `--spacing-5` | `40px` |
| `--spacing-6` | `48px` |
| `--spacing-7` | `56px` |
| `--spacing-8` | `64px` |
| `--spacing-9` | `80px` |
| `--spacing-10` | `96px` |
| `--spacing-11` | `112px` |
| `--spacing-12` | `168px` |
| `--spacing-13` | `224px` |
| `--Base-White` | `#ffffff` |
| `--grey-50` | `#e6e6e6` |
| `--grey-100` | `#cdcece` |
| `--grey-200` | `#9c9c9d` |
| `--grey-300` | `#6a6b6c` |
| `--grey-400` | `#434345` |
| `--grey-500` | `#2f3031` |
| `--grey-600` | `#1b1c1e` |
| `--grey-700` | `#111214` |
| `--grey-800` | `#0c0d0f` |
| `--grey-900` | `#07080a` |
| `--Base-Black` | `#000000` |
| `--main-font` | `var(--font-inter),sans-serif` |
| `--monospace-font` | `var(--font-jetbrains-mono),Menlo,Monaco,Courier,monospace` |
| `--container-xs-width` | `746px` |
| `--container-sm-width` | `1064px` |
| `--container-width` | `1204px` |
| `--container-lg-width` | `1280px` |
| `--grid-gap` | `32px` |
| `--navbar-width` | `var(--container-width)` |
| `--background` | `var(--grey-900)` |
| `--reverse-background` | `#ffffff` |
| `--font-color-rgb` | `255,255,255` |
| `--reverse-font-color-rgb` | `0,0,0` |
| `--lines-color-rgb` | `255,255,255` |
| `--radius-md` | `6px` |
| `--blue-dark` | `#56c2ff` |
| `--red-dark` | `rgba(255,99,99,1)` |
| `--color-bg` | `var(--grey-900)` |
| `--color-bg-100` | `rgb(16,17,17)` |
| `--color-bg-200` | `rgb(24,25,26)` |
| `--color-bg-300` | `rgb(49,49,51)` |
| `--color-bg-400` | `rgb(73,75,77)` |
| `--color-fg` | `hsl(240,11%,96%)` |
| `--color-fg-200` | `rgb(194,199,202)` |
| `--color-fg-300` | `#78787c` |
| `--color-fg-400` | `rgb(94,99,102)` |
| `--color-yellow` | `hsl(43,100%,60%)` |
| `--color-yellow-transparent` | `hsla(43,100%,60%,0.15)` |
| `--color-red` | `hsl(0,100%,69%)` |
| `--color-red-transparent` | `hsla(0,100%,69%,0.15)` |
| `--color-blue` | `hsl(202,100%,67%)` |
| `--color-blue-transparent` | `hsla(202,100%,67%,0.15)` |
| `--color-green` | `hsl(151,59%,59%)` |
| `--color-green-transparent` | `hsla(151,59%,59%,0.15)` |
| `--color-border` | `hsl(195,5%,15%)` |
| `--color-button-bg` | `hsla(0,0%,100%,0.815)` |
| `--color-button-bg-hover` | `hsl(0,0%,100%)` |
| `--color-button-fg` | `rgb(24,25,26)` |
| `--navbar-height` | `58px` |
| `--navbar-container-padding-top` | `var(--spacing-2)` |
| `--navbar-total-spacing` | `calc(var(--navbar-height) + (2 * var(--navbar-container-padding-top)))` |
| `--removed-body-scroll-bar-size` | `0px` |
| `--spring-1` | `linear(0.000000 0%,0.005927 1%,0.022466 2%,0.047872 3%,0.080554 4%,0.119068 5%,0.162116 6%,0.208536 7.000000000000001%,0.2573 8%,0.3075 9%,0.358346 10%,0.409157 11%,0.45935 12%,0.508438 13%,0.556014 14.000000000000002%,0.601751 15%,0.645389 16%,0.686733 17%,0.72564 18%,0.762019 19%,0.795818 20%,0.827026 21%,0.855662 22%,0.881772 23%,0.905423 24%,0.926704 25%,0.945714 26%,0.962568 27%,0.977386 28.000000000000004%,0.990295 28.999999999999996%,1.001426 30%,1.010911 31%,1.018881 32%,1.025465 33%,1.030792 34%,1.034982 35%,1.038155 36%,1.040423 37%,1.041892 38%,1.042662 39%,1.042827 40%,1.042473 41%,1.04168 42%,1.040522 43%,1.039065 44%,1.037371 45%,1.035493 46%,1.03348 47%,1.031376 48%,1.029217 49%,1.027037 50%,1.024864 51%,1.022722 52%,1.020631 53%,1.018608 54%,1.016667 55.00000000000001%,1.014817 56.00000000000001%,1.013067 56.99999999999999%,1.011422 57.99999999999999%,1.009887 59%,1.008462 60%,1.007148 61%,1.005944 62%,1.004847 63%,1.003855 64%,1.002964 65%,1.002169 66%,1.001466 67%,1.000848 68%,1.000311 69%,0.999849 70%,0.999457 71%,0.999128 72%,0.998858 73%,0.99864 74%,0.99847 75%,0.998342 76%,0.998253 77%,0.998196 78%,0.998169 79%,0.998167 80%,0.998186 81%,0.998224 82%,0.998276 83%,0.998341 84%,0.998415 85%,0.998497 86%,0.998584 87%,0.998675 88%,0.998768 89%,0.998861 90%,0.998954 91%,0.999045 92%,0.999134 93%,0.99922 94%,0.999303 95%,0.999381 96%,0.999455 97%,0.999525 98%,0.999589 99%,0.99965 100%)` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — Raycast - Your shortcut to everything
 * Source: https://www.raycast.com/
 * Generated: 17/04/2026, 13:19:45
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-white: #FFFFFF; /* hsl(0, 0%, 100%) · background */
  --color-black: #000000; /* hsl(0, 0%, 0%) · background */
  --color-mid-gray: #6A6B6C; /* hsl(210, 1%, 42%) · text */
  --color-mid-gray-2: #9C9C9D; /* hsl(240, 1%, 61%) · text */
  --color-black-2: #07080A; /* hsl(220, 18%, 3%) · background */
  --color-dark-gray: #121212; /* hsl(0, 0%, 7%) · gradient */
  --color-dark-gray-2: #0D0D0D; /* hsl(0, 0%, 5%) · gradient */
  --color-light-gray: #E6E6E6; /* hsl(0, 0%, 90%) · background */
  --color-dark-gray-3: #434345; /* hsl(240, 1%, 27%) · background */
  --color-dark-gray-4: #1B1C1E; /* hsl(220, 5%, 11%) · background */
  --color-dark-gray-5: #2F3031; /* hsl(210, 2%, 19%) · text */
  --color-light-gray-2: #D8D8D8; /* hsl(0, 0%, 85%) · fill */
  --color-light-orange: rgba(215, 201, 175, 0.05); /* hsl(29, 33%, 77%) · shadow */
  --color-dark-blue: #02193B; /* hsl(216, 93%, 12%) · fill */
  --color-dark-gray-6: #0F1013; /* hsl(225, 12%, 7%) · fill */
  --color-dark-gray-7: #545454; /* hsl(0, 0%, 33%) · other */
  --color-blue: #143CA3; /* hsl(223, 78%, 36%) · fill */
  --color-blue-2: #63A1FF; /* hsl(216, 100%, 69%) · fill */
  --color-dark-gray-8: #0C0D0F; /* hsl(220, 11%, 5%) · gradient */
  --color-black-3: #08090C; /* hsl(225, 20%, 4%) · background */
  --color-light-red: #FFCDCD; /* hsl(0, 100%, 90%) · text */
  --color-red: #FF6363; /* hsl(0, 100%, 69%) · background */
  --color-dark-blue-2: #060D18; /* hsl(217, 60%, 6%) · fill */
  --color-blue-3: #56C2FF; /* hsl(202, 100%, 67%) · background */
  --color-blue-4: #138AF2; /* hsl(208, 90%, 51%) · gradient */
  --color-dark-gray-9: #111214; /* hsl(220, 8%, 7%) · background */
  --color-dark-red: #452324; /* hsl(358, 33%, 20%) · background */
  --color-mid-gray-3: rgba(142, 140, 144, 0.2); /* hsl(240, 2%, 56%) · border */
  --color-dark-blue-3: rgba(7, 13, 79, 0.1); /* hsl(240, 77%, 17%) · shadow */
  --color-dark-blue-4: rgba(4, 63, 150, 0.7); /* hsl(216, 95%, 30%) · gradient */
  --color-dark-gray-10: #424242; /* hsl(0, 0%, 26%) · other */
  --color-dark-gray-11: rgba(17, 18, 20, 0.75); /* hsl(240, 8%, 7%) · gradient */
  --color-dark-gray-12: rgba(12, 13, 15, 0.9); /* hsl(225, 14%, 5%) · gradient */
  --color-dark-pink: rgba(85, 0, 98, 0.1); /* hsl(294, 100%, 19%) · shadow */
  --color-dark-blue-5: rgba(3, 15, 129, 0.09); /* hsl(235, 100%, 26%) · shadow */
  --color-dark-blue-6: #0C2C76; /* hsl(222, 82%, 25%) · other */
  --color-red-2: rgba(255, 67, 7, 0.1); /* hsl(14, 100%, 52%) · shadow */
  --color-dark-gray-13: #222222; /* hsl(0, 0%, 13%) · background */
  --color-light-blue: rgba(158, 190, 215, 0.1); /* hsl(211, 43%, 73%) · background */
  --color-dark-blue-7: rgba(6, 18, 37, 0.25); /* hsl(214, 64%, 9%) · gradient */
  --color-dark-gray-14: #525252; /* hsl(0, 0%, 32%) · fill */
  --color-dark-gray-15: #0E0F11; /* hsl(220, 10%, 6%) · fill */
  --color-blue-5: #2E6FCF; /* hsl(216, 64%, 50%) · fill */
  --color-dark-gray-16: #181A1E; /* hsl(220, 11%, 11%) · fill */
  --color-dark-blue-8: #414D6B; /* hsl(223, 24%, 34%) · other */
  --color-red-3: rgba(245, 48, 107, 0.1); /* hsl(342, 91%, 58%) · shadow */
  --color-light-red-2: rgba(255, 150, 150, 0.11); /* hsl(0, 100%, 79%) · gradient */
  --color-light-blue-2: rgba(222, 226, 255, 0.08); /* hsl(219, 100%, 93%) · gradient */
  --color-dark-blue-9: rgba(7, 13, 79, 0.05); /* hsl(225, 100%, 15%) · shadow */
  --color-green: rgba(46, 212, 105, 0.05); /* hsl(140, 69%, 50%) · shadow */
  --color-purple: rgba(82, 48, 145, 0.7); /* hsl(262, 50%, 38%) · gradient */
  --color-dark-purple: rgba(26, 11, 51, 0.14); /* hsl(263, 56%, 13%) · gradient */
  --color-dark-purple-2: rgba(51, 3, 129, 0.09); /* hsl(265, 100%, 26%) · shadow */
  --color-blue-6: rgba(84, 95, 102, 0.7); /* hsl(205, 10%, 37%) · gradient */
  --color-dark-blue-10: rgba(0, 36, 69, 0.13); /* hsl(207, 100%, 14%) · gradient */
  --color-dark-blue-11: rgba(7, 40, 79, 0.1); /* hsl(214, 77%, 17%) · shadow */
  --color-light-blue-3: rgba(154, 170, 255, 0.05); /* hsl(228, 100%, 81%) · shadow */
  --color-mid-gray-4: #7B7B7B; /* hsl(0, 0%, 48%) · fill */
  --color-light-blue-4: #8CD6FF; /* hsl(201, 100%, 77%) · text */
  --color-blue-7: #1456A3; /* hsl(212, 78%, 36%) · other */
  --color-blue-8: #3C6AC5; /* hsl(220, 54%, 50%) · other */
  --color-dark-gray-17: #1C1E24; /* hsl(225, 13%, 13%) · fill */
  --color-blue-9: #3782F3; /* hsl(216, 89%, 58%) · fill */
  --color-dark-blue-12: #01204D; /* hsl(216, 97%, 15%) · fill */
  --color-dark-gray-18: #161616; /* hsl(0, 0%, 9%) · gradient */
  --color-light-red-3: rgba(255, 118, 118, 0.25); /* hsl(0, 100%, 74%) · shadow */
  --color-blue-10: #0294FE; /* hsl(205, 99%, 50%) · gradient */
  --color-red-4: #FF2136; /* hsl(354, 100%, 56%) · gradient */
  --color-light-red-4: #ECA5A7; /* hsl(358, 65%, 79%) · gradient */
  --color-dark-gray-19: #130D0E; /* hsl(350, 19%, 6%) · background */
  --color-cyan: #59D499; /* hsl(151, 59%, 59%) · background */
  --color-orange: #FFC531; /* hsl(43, 100%, 60%) · background */
  --color-dark-gray-20: #151515; /* hsl(0, 0%, 8%) · fill */
  --color-red-5: rgba(255, 99, 99, 0.25); /* hsl(0, 100%, 70%) · border */
  --color-red-6: #D72A2A; /* hsl(0, 68%, 50%) · gradient */
  --color-mid-gray-5: #787878; /* hsl(0, 0%, 47%) · gradient */
  --color-dark-gray-21: #282828; /* hsl(0, 0%, 16%) · gradient */
  --color-dark-gray-22: #5A5A5A; /* hsl(0, 0%, 35%) · gradient */
  --color-dark-gray-23: #1A1A1A; /* hsl(0, 0%, 10%) · gradient */
  --color-dark-blue-13: rgba(32, 35, 91, 0.7); /* hsl(235, 49%, 24%) · gradient */
  --color-dark-blue-14: rgba(7, 9, 33, 0.7); /* hsl(235, 65%, 8%) · gradient */
  --color-blue-11: rgba(43, 94, 180, 0.7); /* hsl(218, 61%, 44%) · gradient */
  --color-dark-blue-15: rgba(13, 16, 35, 0.42); /* hsl(228, 50%, 9%) · gradient */
  --color-dark-green: #0D6E30; /* hsl(142, 79%, 24%) · gradient */
  --color-dark-green-2: #083518; /* hsl(141, 74%, 12%) · gradient */
  --color-blue-12: rgba(39, 61, 180, 0.7); /* hsl(230, 65%, 43%) · gradient */
  --color-dark-blue-16: rgba(15, 9, 38, 0.4); /* hsl(251, 57%, 9%) · gradient */
  --color-dark-cyan: rgba(2, 96, 101, 0.57); /* hsl(182, 96%, 20%) · gradient */
  --color-dark-cyan-2: rgba(5, 136, 178, 0.06); /* hsl(192, 100%, 33%) · gradient */
  --color-dark-cyan-3: rgba(3, 122, 129, 0.09); /* hsl(185, 100%, 26%) · shadow */
  --color-dark-blue-17: rgba(2, 61, 114, 0.7); /* hsl(208, 98%, 23%) · gradient */
  --color-dark-blue-18: rgba(5, 11, 28, 0.42); /* hsl(223, 71%, 7%) · gradient */
  --color-dark-blue-19: rgba(3, 30, 129, 0.09); /* hsl(225, 100%, 26%) · shadow */
  --color-dark-pink-2: rgba(74, 21, 75, 0.7); /* hsl(298, 57%, 19%) · gradient */
  --color-dark-pink-3: rgba(29, 5, 29, 0.42); /* hsl(300, 71%, 7%) · gradient */
  --color-dark-pink-4: rgba(79, 7, 59, 0.1); /* hsl(317, 77%, 17%) · shadow */
  --color-dark-blue-20: rgba(5, 9, 29, 0.42); /* hsl(228, 71%, 7%) · gradient */
  --color-dark-purple-3: rgba(16, 0, 43, 0.16); /* hsl(266, 100%, 9%) · gradient */
  --color-dark-blue-21: rgba(3, 91, 155, 0.7); /* hsl(205, 96%, 31%) · gradient */
  --color-dark-blue-22: rgba(3, 23, 129, 0.09); /* hsl(230, 100%, 26%) · shadow */
  --color-light-red-5: #FFA2A2; /* hsl(0, 100%, 82%) · fill */
  --color-light-red-6: #FFA1A1; /* hsl(0, 100%, 82%) · fill */
  --color-blue-13: rgba(86, 194, 255, 0.16); /* hsl(202, 100%, 67%) · gradient */
  --color-blue-14: rgba(86, 194, 255, 0.06); /* hsl(204, 100%, 67%) · gradient */
  --color-red-7: rgba(215, 42, 42, 0.05); /* hsl(0, 69%, 50%) · shadow */
  --color-red-8: rgba(215, 42, 42, 0.07); /* hsl(0, 67%, 50%) · shadow */
  --color-red-9: #E01E5A; /* hsl(341, 76%, 50%) · fill */
  --color-cyan-2: #36C5F0; /* hsl(194, 86%, 58%) · fill */
  --color-cyan-3: #2EB67D; /* hsl(155, 60%, 45%) · fill */
  --color-orange-2: #ECB22E; /* hsl(42, 83%, 55%) · fill */
  --color-red-10: #FF0000; /* hsl(0, 100%, 50%) · fill */
  --color-black-4: #07090B; /* hsl(210, 22%, 4%) · fill */
  --color-blue-15: #3D5DCB; /* hsl(226, 58%, 52%) · fill */
  --color-dark-gray-24: #494949; /* hsl(0, 0%, 29%) · fill */
  --color-blue-16: #2065CD; /* hsl(216, 73%, 46%) · fill */
  --color-blue-17: #114FAB; /* hsl(216, 82%, 37%) · fill */
  --color-dark-blue-23: #02337B; /* hsl(216, 97%, 25%) · fill */
  --color-dark-blue-24: #052A61; /* hsl(216, 90%, 20%) · fill */
  --color-dark-blue-25: #2E4260; /* hsl(216, 35%, 28%) · fill */
  --color-dark-blue-26: #182C4A; /* hsl(216, 51%, 19%) · fill */
  --color-dark-blue-27: #032049; /* hsl(215, 92%, 15%) · fill */
  --color-black-5: rgba(7, 8, 10, 0.8); /* hsl(240, 11%, 4%) · gradient */
  --color-purple-2: #9B4DFF; /* hsl(266, 100%, 65%) · gradient */

  /* ── Core: Typography ── */
  --font-size-2xs: 10px;
  --font-size-xs: 11px;
  --font-size-sm: 12px;
  --font-size-base: 13px;
  --font-size-lg: 14px;
  --font-size-xl: 16px;
  --font-size-2xl: 18px;
  --font-size-3xl: 20px;
  --font-size-4xl: 22px;
  --font-size-5xl: 23.75px;
  --font-size-6xl: 24px;
  --font-size-32px: 32px;
  --font-size-56px: 56px;
  --font-size-64px: 64px;
  --font-family-base: Inter;
  --font-family-2: GeistMono;
  --font-family-3: SF Pro Text;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-tight: 10px;
  --line-height-snug: 13px;
  --line-height-normal: 13.8px;
  --line-height-relaxed: 14.95px;
  --line-height-loose: 16px;
  --line-height-lh-6: 18px;
  --line-height-lh-7: 19.2px;
  --line-height-lh-8: 19.6px;
  --line-height-lh-9: 20.7px;
  --line-height-lh-10: 22.4px;
  --line-height-lh-11: 24px;
  --line-height-lh-12: 25.3px;
  --line-height-lh-13: 25.6px;
  --line-height-lh-14: 27.3125px;
  --line-height-lh-15: 27.6px;
  --line-height-lh-16: 32px;
  --line-height-lh-17: 36.8px;
  --line-height-lh-18: 38.4px;
  --line-height-lh-19: 65.52px;
  --line-height-lh-20: 70.4px;
  --letter-spacing-tight: -0.05px;
  --letter-spacing-normal: 0.1px;
  --letter-spacing-wide: 0.2px;
  --letter-spacing-wider: 0.3px;
  --letter-spacing-widest: 0.4px;
  --letter-spacing-ls-6: 0.5px;
  --letter-spacing-ls-7: 0.8px;

  /* ── Layout: Spacing ── */
  --space-1: 1px;
  --space-2: 2px;
  --space-3: 2.5px;
  --space-4: 3px;
  --space-5: 4px;
  --space-6: 6px;
  --space-8: 8px;
  --space-10: 10px;
  --space-12: 10.5px;
  --space-16: 12px;
  --space-20: 13px;
  --space-24: 34px;
  --space-32: 72px;
  --space-40: 148px;
  --space-48: 349.242px;
  --space-64: 17px;
  --space-80: 19px;
  --space-96: 20px;
  --space-128: 22px;
  --space-160: 24px;
  --space-192: 25px;
  --space-256: 29px;
  --space-23: 32px;
  --space-25: 40px;
  --space-26: 45px;
  --space-27: 47.5px;
  --space-28: 48px;
  --space-29: 50px;
  --space-30: 56px;
  --space-31: 64px;
  --space-33: 80px;
  --space-34: 85px;
  --space-35: 96px;
  --space-36: 102px;
  --space-37: 120px;
  --space-38: 128px;
  --space-39: 137px;
  --space-41: 156.5px;
  --space-42: 191.5px;
  --space-43: 200px;
  --space-44: 212px;
  --space-45: 224px;
  --space-46: 251.5px;
  --space-47: 342.5px;
  --space-49: 370px;
  --space-50: 400px;
  --space-51: 442.5px;

  /* ── Borders ── */
  --border-width-hairline: 0.5px;
  --border-width-thin: 1px;
  --border-width-base: 2px;
  --border-width-thick: 4px;
  --radius-sm: 0px 0px 12px 12px;
  --radius-md: 2px;
  --radius-lg: 2.5px;
  --radius-xl: 3px;
  --radius-2xl: 4px;
  --radius-full: 5px;
  --radius-r7: 6px;
  --radius-r8: 8px;
  --radius-r9: 9px;
  --radius-r10: 11px;
  --radius-r11: 12px;
  --radius-r12: 16px;
  --radius-r13: 20px;
  --radius-r14: 22px;
  --radius-r15: 31px;
  --radius-r16: 36px;
  --radius-r17: 43px;
  --radius-r18: 86px;
  --radius-r19: 100%;
  --radius-r20: 1000px;
  --radius-r21: 99999px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgba(0, 0, 0, 0.4) 0px 1.5px 0.5px 2.5px, rgb(0, 0, 0) 0px 0px 0.5px 1px, rgba(0, 0, 0, 0.25) 0px 2px 1px 1px inset, rgba(255, 255, 255, 0.2) 0px 1px 1px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px inset;
  --shadow-md: rgb(27, 28, 30) 0px 0px 0px 1px, rgb(7, 8, 10) 0px 0px 0px 1px inset;
  --shadow-lg: rgba(215, 201, 175, 0.05) 0px 0px 20px 5px, rgba(215, 201, 175, 0.05) 0px 0px 16px -7px;
  --shadow-xl: rgba(0, 0, 0, 0.28) 0px 1.189px 2.377px 0px;
  --shadow-shadow-5: rgba(255, 255, 255, 0.05) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.25) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px -1px 0px 0px inset;
  --shadow-shadow-6: rgba(0, 0, 0, 0.5) 0px 0px 0px 2px, rgba(255, 255, 255, 0.19) 0px 0px 14px 0px, rgba(0, 0, 0, 0.2) 0px -1px 0.4px 0px inset, rgb(255, 255, 255) 0px 1px 0.4px 0px inset;

  /* ── Motion ── */
  --duration-instant: 0.1s;
  --duration-fast: 0.125s;
  --duration-normal: 0.15s;
  --duration-slow: 0.2s;
  --duration-slower: 0.225s;
  --duration-duration-6: 0.25s;
  --duration-duration-7: 0.3s;
  --duration-duration-8: 0.4s;
  --duration-duration-9: 0.5s;
  --duration-duration-10: 0.65s;
  --duration-duration-11: 0.85s;
  --duration-duration-12: 0.9s;
  --duration-duration-13: 1s;
  --duration-duration-14: 1.2s;
  --duration-duration-15: 1.5s;
  --duration-duration-16: 2s;
  --easing-ease-in-out: ease-in-out;

  /* ── Layout: Z-Index ── */
  --z-1: -1;
  --z-2: 1;
  --z-3: 2;
  --z-4: 3;
  --z-5: 200;

  /* ── Breakpoints ── */
  --breakpoint-xs: 375px;
  --breakpoint-sm: 400px;
  --breakpoint-md: 408px;
  --breakpoint-lg: 420px;
  --breakpoint-xl: 480px;
  --breakpoint-2xl: 520px;
  --breakpoint-3xl: 530px;
  --breakpoint-bp-8: 540px;
  --breakpoint-bp-9: 548px;
  --breakpoint-bp-10: 563px;
  --breakpoint-bp-11: 600px;
  --breakpoint-bp-12: 619px;
  --breakpoint-bp-13: 640px;
  --breakpoint-bp-14: 720px;
  --breakpoint-bp-15: 767px;
  --breakpoint-bp-16: 768px;
  --breakpoint-bp-17: 784px;
  --breakpoint-bp-18: 800px;
  --breakpoint-bp-19: 840px;
  --breakpoint-bp-20: 880px;
  --breakpoint-bp-21: 900px;
  --breakpoint-bp-22: 920px;
  --breakpoint-bp-23: 980px;
  --breakpoint-bp-24: 1000px;
  --breakpoint-bp-25: 1024px;
  --breakpoint-bp-26: 1050px;
  --breakpoint-bp-27: 1064px;
  --breakpoint-bp-28: 1080px;
  --breakpoint-bp-29: 1200px;
  --breakpoint-bp-30: 1204px;

  /* ── Opacity ── */
  --opacity-10: 0.1;
  --opacity-11: 0.11;
  --opacity-12: 0.12;
  --opacity-13: 0.13;
  --opacity-15: 0.15;
  --opacity-16: 0.16;
  --opacity-17: 0.17;
  --opacity-19: 0.19;
  --opacity-20: 0.2;
  --opacity-21: 0.21;
  --opacity-22: 0.22;
  --opacity-23: 0.23;
  --opacity-24: 0.24;
  --opacity-25: 0.25;
  --opacity-26: 0.26;
  --opacity-27: 0.27;
  --opacity-28: 0.28;
  --opacity-29: 0.29;
  --opacity-30: 0.3;
  --opacity-31: 0.31;
  --opacity-32: 0.32;
  --opacity-33: 0.33;
  --opacity-34: 0.34;
  --opacity-35: 0.35;
  --opacity-36: 0.36;
  --opacity-39: 0.39;
  --opacity-40: 0.4;
  --opacity-45: 0.45;
  --opacity-50: 0.5;
  --opacity-60: 0.6;
  --opacity-75: 0.75;
  --opacity-80: 0.8;
  --opacity-90: 0.9;
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://www.raycast.com/",
    "title": "Raycast - Your shortcut to everything",
    "generatedAt": "2026-04-17T07:49:45.758Z"
  },
  "core": {
    "color": {
      "white": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×5522"
      },
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "background · ×1988"
      },
      "mid-gray": {
        "$value": "#6A6B6C",
        "$type": "color",
        "$description": "text · ×388"
      },
      "mid-gray-2": {
        "$value": "#9C9C9D",
        "$type": "color",
        "$description": "text · ×284"
      },
      "black-2": {
        "$value": "#07080A",
        "$type": "color",
        "$description": "background · ×175"
      },
      "dark-gray": {
        "$value": "#121212",
        "$type": "color",
        "$description": "gradient · ×157"
      },
      "dark-gray-2": {
        "$value": "#0D0D0D",
        "$type": "color",
        "$description": "gradient · ×157"
      },
      "light-gray": {
        "$value": "#E6E6E6",
        "$type": "color",
        "$description": "background · ×145"
      },
      "dark-gray-3": {
        "$value": "#434345",
        "$type": "color",
        "$description": "background · ×125"
      },
      "dark-gray-4": {
        "$value": "#1B1C1E",
        "$type": "color",
        "$description": "background · ×57"
      },
      "dark-gray-5": {
        "$value": "#2F3031",
        "$type": "color",
        "$description": "text · ×56"
      },
      "light-gray-2": {
        "$value": "#D8D8D8",
        "$type": "color",
        "$description": "fill · ×51"
      },
      "light-orange": {
        "$value": "rgba(215, 201, 175, 0.05)",
        "$type": "color",
        "$description": "shadow · ×36"
      },
      "dark-blue": {
        "$value": "#02193B",
        "$type": "color",
        "$description": "fill · ×33"
      },
      "dark-gray-6": {
        "$value": "#0F1013",
        "$type": "color",
        "$description": "fill · ×25"
      },
      "dark-gray-7": {
        "$value": "#545454",
        "$type": "color",
        "$description": "other · ×22"
      },
      "blue": {
        "$value": "#143CA3",
        "$type": "color",
        "$description": "fill · ×21"
      },
      "blue-2": {
        "$value": "#63A1FF",
        "$type": "color",
        "$description": "fill · ×20"
      },
      "dark-gray-8": {
        "$value": "#0C0D0F",
        "$type": "color",
        "$description": "gradient · ×10"
      },
      "black-3": {
        "$value": "#08090C",
        "$type": "color",
        "$description": "background · ×10"
      },
      "light-red": {
        "$value": "#FFCDCD",
        "$type": "color",
        "$description": "text · ×9"
      },
      "red": {
        "$value": "#FF6363",
        "$type": "color",
        "$description": "background · ×8"
      },
      "dark-blue-2": {
        "$value": "#060D18",
        "$type": "color",
        "$description": "fill · ×8"
      },
      "blue-3": {
        "$value": "#56C2FF",
        "$type": "color",
        "$description": "background · ×7"
      },
      "blue-4": {
        "$value": "#138AF2",
        "$type": "color",
        "$description": "gradient · ×6"
      },
      "dark-gray-9": {
        "$value": "#111214",
        "$type": "color",
        "$description": "background · ×6"
      },
      "dark-red": {
        "$value": "#452324",
        "$type": "color",
        "$description": "background · ×5"
      },
      "mid-gray-3": {
        "$value": "rgba(142, 140, 144, 0.2)",
        "$type": "color",
        "$description": "border · ×5"
      },
      "dark-blue-3": {
        "$value": "rgba(7, 13, 79, 0.1)",
        "$type": "color",
        "$description": "shadow · ×5"
      },
      "dark-blue-4": {
        "$value": "rgba(4, 63, 150, 0.7)",
        "$type": "color",
        "$description": "gradient · ×5"
      },
      "dark-gray-10": {
        "$value": "#424242",
        "$type": "color",
        "$description": "other · ×5"
      },
      "dark-gray-11": {
        "$value": "rgba(17, 18, 20, 0.75)",
        "$type": "color",
        "$description": "gradient · ×4"
      },
      "dark-gray-12": {
        "$value": "rgba(12, 13, 15, 0.9)",
        "$type": "color",
        "$description": "gradient · ×4"
      },
      "dark-pink": {
        "$value": "rgba(85, 0, 98, 0.1)",
        "$type": "color",
        "$description": "shadow · ×4"
      },
      "dark-blue-5": {
        "$value": "rgba(3, 15, 129, 0.09)",
        "$type": "color",
        "$description": "shadow · ×4"
      },
      "dark-blue-6": {
        "$value": "#0C2C76",
        "$type": "color",
        "$description": "other · ×4"
      },
      "red-2": {
        "$value": "rgba(255, 67, 7, 0.1)",
        "$type": "color",
        "$description": "shadow · ×4"
      },
      "dark-gray-13": {
        "$value": "#222222",
        "$type": "color",
        "$description": "background · ×3"
      },
      "light-blue": {
        "$value": "rgba(158, 190, 215, 0.1)",
        "$type": "color",
        "$description": "background · ×3"
      },
      "dark-blue-7": {
        "$value": "rgba(6, 18, 37, 0.25)",
        "$type": "color",
        "$description": "gradient · ×3"
      },
      "dark-gray-14": {
        "$value": "#525252",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-gray-15": {
        "$value": "#0E0F11",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "blue-5": {
        "$value": "#2E6FCF",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-gray-16": {
        "$value": "#181A1E",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-blue-8": {
        "$value": "#414D6B",
        "$type": "color",
        "$description": "other · ×3"
      },
      "red-3": {
        "$value": "rgba(245, 48, 107, 0.1)",
        "$type": "color",
        "$description": "shadow · ×2"
      },
      "light-red-2": {
        "$value": "rgba(255, 150, 150, 0.11)",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "light-blue-2": {
        "$value": "rgba(222, 226, 255, 0.08)",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "dark-blue-9": {
        "$value": "rgba(7, 13, 79, 0.05)",
        "$type": "color",
        "$description": "shadow · ×2"
      },
      "green": {
        "$value": "rgba(46, 212, 105, 0.05)",
        "$type": "color",
        "$description": "shadow · ×2"
      },
      "purple": {
        "$value": "rgba(82, 48, 145, 0.7)",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "dark-purple": {
        "$value": "rgba(26, 11, 51, 0.14)",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "dark-purple-2": {
        "$value": "rgba(51, 3, 129, 0.09)",
        "$type": "color",
        "$description": "shadow · ×2"
      },
      "blue-6": {
        "$value": "rgba(84, 95, 102, 0.7)",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "dark-blue-10": {
        "$value": "rgba(0, 36, 69, 0.13)",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "dark-blue-11": {
        "$value": "rgba(7, 40, 79, 0.1)",
        "$type": "color",
        "$description": "shadow · ×2"
      },
      "light-blue-3": {
        "$value": "rgba(154, 170, 255, 0.05)",
        "$type": "color",
        "$description": "shadow · ×2"
      },
      "mid-gray-4": {
        "$value": "#7B7B7B",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "light-blue-4": {
        "$value": "#8CD6FF",
        "$type": "color",
        "$description": "text · ×2"
      },
      "blue-7": {
        "$value": "#1456A3",
        "$type": "color",
        "$description": "other · ×2"
      },
      "blue-8": {
        "$value": "#3C6AC5",
        "$type": "color",
        "$description": "other · ×2"
      },
      "dark-gray-17": {
        "$value": "#1C1E24",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "blue-9": {
        "$value": "#3782F3",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-blue-12": {
        "$value": "#01204D",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-gray-18": {
        "$value": "#161616",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "light-red-3": {
        "$value": "rgba(255, 118, 118, 0.25)",
        "$type": "color",
        "$description": "shadow · ×2"
      },
      "blue-10": {
        "$value": "#0294FE",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "red-4": {
        "$value": "#FF2136",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "light-red-4": {
        "$value": "#ECA5A7",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-gray-19": {
        "$value": "#130D0E",
        "$type": "color",
        "$description": "background · ×1"
      },
      "cyan": {
        "$value": "#59D499",
        "$type": "color",
        "$description": "background · ×1"
      },
      "orange": {
        "$value": "#FFC531",
        "$type": "color",
        "$description": "background · ×1"
      },
      "dark-gray-20": {
        "$value": "#151515",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-5": {
        "$value": "rgba(255, 99, 99, 0.25)",
        "$type": "color",
        "$description": "border · ×1"
      },
      "red-6": {
        "$value": "#D72A2A",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "mid-gray-5": {
        "$value": "#787878",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-gray-21": {
        "$value": "#282828",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-gray-22": {
        "$value": "#5A5A5A",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-gray-23": {
        "$value": "#1A1A1A",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-blue-13": {
        "$value": "rgba(32, 35, 91, 0.7)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-blue-14": {
        "$value": "rgba(7, 9, 33, 0.7)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "blue-11": {
        "$value": "rgba(43, 94, 180, 0.7)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-blue-15": {
        "$value": "rgba(13, 16, 35, 0.42)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-green": {
        "$value": "#0D6E30",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-green-2": {
        "$value": "#083518",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "blue-12": {
        "$value": "rgba(39, 61, 180, 0.7)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-blue-16": {
        "$value": "rgba(15, 9, 38, 0.4)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-cyan": {
        "$value": "rgba(2, 96, 101, 0.57)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-cyan-2": {
        "$value": "rgba(5, 136, 178, 0.06)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-cyan-3": {
        "$value": "rgba(3, 122, 129, 0.09)",
        "$type": "color",
        "$description": "shadow · ×1"
      },
      "dark-blue-17": {
        "$value": "rgba(2, 61, 114, 0.7)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-blue-18": {
        "$value": "rgba(5, 11, 28, 0.42)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-blue-19": {
        "$value": "rgba(3, 30, 129, 0.09)",
        "$type": "color",
        "$description": "shadow · ×1"
      },
      "dark-pink-2": {
        "$value": "rgba(74, 21, 75, 0.7)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-pink-3": {
        "$value": "rgba(29, 5, 29, 0.42)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-pink-4": {
        "$value": "rgba(79, 7, 59, 0.1)",
        "$type": "color",
        "$description": "shadow · ×1"
      },
      "dark-blue-20": {
        "$value": "rgba(5, 9, 29, 0.42)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-purple-3": {
        "$value": "rgba(16, 0, 43, 0.16)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-blue-21": {
        "$value": "rgba(3, 91, 155, 0.7)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-blue-22": {
        "$value": "rgba(3, 23, 129, 0.09)",
        "$type": "color",
        "$description": "shadow · ×1"
      },
      "light-red-5": {
        "$value": "#FFA2A2",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-red-6": {
        "$value": "#FFA1A1",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "blue-13": {
        "$value": "rgba(86, 194, 255, 0.16)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "blue-14": {
        "$value": "rgba(86, 194, 255, 0.06)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "red-7": {
        "$value": "rgba(215, 42, 42, 0.05)",
        "$type": "color",
        "$description": "shadow · ×1"
      },
      "red-8": {
        "$value": "rgba(215, 42, 42, 0.07)",
        "$type": "color",
        "$description": "shadow · ×1"
      },
      "red-9": {
        "$value": "#E01E5A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "cyan-2": {
        "$value": "#36C5F0",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "cyan-3": {
        "$value": "#2EB67D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-2": {
        "$value": "#ECB22E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-10": {
        "$value": "#FF0000",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-4": {
        "$value": "#07090B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "blue-15": {
        "$value": "#3D5DCB",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-gray-24": {
        "$value": "#494949",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "blue-16": {
        "$value": "#2065CD",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "blue-17": {
        "$value": "#114FAB",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-blue-23": {
        "$value": "#02337B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-blue-24": {
        "$value": "#052A61",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-blue-25": {
        "$value": "#2E4260",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-blue-26": {
        "$value": "#182C4A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-blue-27": {
        "$value": "#032049",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-5": {
        "$value": "rgba(7, 8, 10, 0.8)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "purple-2": {
        "$value": "#9B4DFF",
        "$type": "color",
        "$description": "gradient · ×1"
      }
    },
    "fontSize": {
      "font-size-2xs": {
        "$value": "10px",
        "$type": "dimension"
      },
      "font-size-xs": {
        "$value": "11px",
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
        "$value": "22px",
        "$type": "dimension"
      },
      "font-size-5xl": {
        "$value": "23.75px",
        "$type": "dimension"
      },
      "font-size-6xl": {
        "$value": "24px",
        "$type": "dimension"
      },
      "font-size-32px": {
        "$value": "32px",
        "$type": "dimension"
      },
      "font-size-56px": {
        "$value": "56px",
        "$type": "dimension"
      },
      "font-size-64px": {
        "$value": "64px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "Inter",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "GeistMono",
        "$type": "fontFamily"
      },
      "font-family-3": {
        "$value": "SF Pro Text",
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
        "$value": "10px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "13px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "13.8px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "14.95px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "16px",
        "$type": "dimension"
      },
      "line-height-lh-6": {
        "$value": "18px",
        "$type": "dimension"
      },
      "line-height-lh-7": {
        "$value": "19.2px",
        "$type": "dimension"
      },
      "line-height-lh-8": {
        "$value": "19.6px",
        "$type": "dimension"
      },
      "line-height-lh-9": {
        "$value": "20.7px",
        "$type": "dimension"
      },
      "line-height-lh-10": {
        "$value": "22.4px",
        "$type": "dimension"
      },
      "line-height-lh-11": {
        "$value": "24px",
        "$type": "dimension"
      },
      "line-height-lh-12": {
        "$value": "25.3px",
        "$type": "dimension"
      },
      "line-height-lh-13": {
        "$value": "25.6px",
        "$type": "dimension"
      },
      "line-height-lh-14": {
        "$value": "27.3125px",
        "$type": "dimension"
      },
      "line-height-lh-15": {
        "$value": "27.6px",
        "$type": "dimension"
      },
      "line-height-lh-16": {
        "$value": "32px",
        "$type": "dimension"
      },
      "line-height-lh-17": {
        "$value": "36.8px",
        "$type": "dimension"
      },
      "line-height-lh-18": {
        "$value": "38.4px",
        "$type": "dimension"
      },
      "line-height-lh-19": {
        "$value": "65.52px",
        "$type": "dimension"
      },
      "line-height-lh-20": {
        "$value": "70.4px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "-0.05px",
        "$type": "dimension"
      },
      "letter-spacing-normal": {
        "$value": "0.1px",
        "$type": "dimension"
      },
      "letter-spacing-wide": {
        "$value": "0.2px",
        "$type": "dimension"
      },
      "letter-spacing-wider": {
        "$value": "0.3px",
        "$type": "dimension"
      },
      "letter-spacing-widest": {
        "$value": "0.4px",
        "$type": "dimension"
      },
      "letter-spacing-ls-6": {
        "$value": "0.5px",
        "$type": "dimension"
      },
      "letter-spacing-ls-7": {
        "$value": "0.8px",
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
        "$value": "2.5px",
        "$type": "dimension"
      },
      "space-4": {
        "$value": "3px",
        "$type": "dimension"
      },
      "space-5": {
        "$value": "4px",
        "$type": "dimension"
      },
      "space-6": {
        "$value": "6px",
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
        "$value": "10.5px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "12px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "13px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "34px",
        "$type": "dimension"
      },
      "space-32": {
        "$value": "72px",
        "$type": "dimension"
      },
      "space-40": {
        "$value": "148px",
        "$type": "dimension"
      },
      "space-48": {
        "$value": "349.242px",
        "$type": "dimension"
      },
      "space-64": {
        "$value": "17px",
        "$type": "dimension"
      },
      "space-80": {
        "$value": "19px",
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
        "$value": "24px",
        "$type": "dimension"
      },
      "space-192": {
        "$value": "25px",
        "$type": "dimension"
      },
      "space-256": {
        "$value": "29px",
        "$type": "dimension"
      },
      "space-23": {
        "$value": "32px",
        "$type": "dimension"
      },
      "space-25": {
        "$value": "40px",
        "$type": "dimension"
      },
      "space-26": {
        "$value": "45px",
        "$type": "dimension"
      },
      "space-27": {
        "$value": "47.5px",
        "$type": "dimension"
      },
      "space-28": {
        "$value": "48px",
        "$type": "dimension"
      },
      "space-29": {
        "$value": "50px",
        "$type": "dimension"
      },
      "space-30": {
        "$value": "56px",
        "$type": "dimension"
      },
      "space-31": {
        "$value": "64px",
        "$type": "dimension"
      },
      "space-33": {
        "$value": "80px",
        "$type": "dimension"
      },
      "space-34": {
        "$value": "85px",
        "$type": "dimension"
      },
      "space-35": {
        "$value": "96px",
        "$type": "dimension"
      },
      "space-36": {
        "$value": "102px",
        "$type": "dimension"
      },
      "space-37": {
        "$value": "120px",
        "$type": "dimension"
      },
      "space-38": {
        "$value": "128px",
        "$type": "dimension"
      },
      "space-39": {
        "$value": "137px",
        "$type": "dimension"
      },
      "space-41": {
        "$value": "156.5px",
        "$type": "dimension"
      },
      "space-42": {
        "$value": "191.5px",
        "$type": "dimension"
      },
      "space-43": {
        "$value": "200px",
        "$type": "dimension"
      },
      "space-44": {
        "$value": "212px",
        "$type": "dimension"
      },
      "space-45": {
        "$value": "224px",
        "$type": "dimension"
      },
      "space-46": {
        "$value": "251.5px",
        "$type": "dimension"
      },
      "space-47": {
        "$value": "342.5px",
        "$type": "dimension"
      },
      "space-49": {
        "$value": "370px",
        "$type": "dimension"
      },
      "space-50": {
        "$value": "400px",
        "$type": "dimension"
      },
      "space-51": {
        "$value": "442.5px",
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
        "$value": "2",
        "$type": "number"
      },
      "z-4": {
        "$value": "3",
        "$type": "number"
      },
      "z-5": {
        "$value": "200",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "375px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "400px",
        "$type": "dimension"
      },
      "breakpoint-md": {
        "$value": "408px",
        "$type": "dimension"
      },
      "breakpoint-lg": {
        "$value": "420px",
        "$type": "dimension"
      },
      "breakpoint-xl": {
        "$value": "480px",
        "$type": "dimension"
      },
      "breakpoint-2xl": {
        "$value": "520px",
        "$type": "dimension"
      },
      "breakpoint-3xl": {
        "$value": "530px",
        "$type": "dimension"
      },
      "breakpoint-bp-8": {
        "$value": "540px",
        "$type": "dimension"
      },
      "breakpoint-bp-9": {
        "$value": "548px",
        "$type": "dimension"
      },
      "breakpoint-bp-10": {
        "$value": "563px",
        "$type": "dimension"
      },
      "breakpoint-bp-11": {
        "$value": "600px",
        "$type": "dimension"
      },
      "breakpoint-bp-12": {
        "$value": "619px",
        "$type": "dimension"
      },
      "breakpoint-bp-13": {
        "$value": "640px",
        "$type": "dimension"
      },
      "breakpoint-bp-14": {
        "$value": "720px",
        "$type": "dimension"
      },
      "breakpoint-bp-15": {
        "$value": "767px",
        "$type": "dimension"
      },
      "breakpoint-bp-16": {
        "$value": "768px",
        "$type": "dimension"
      },
      "breakpoint-bp-17": {
        "$value": "784px",
        "$type": "dimension"
      },
      "breakpoint-bp-18": {
        "$value": "800px",
        "$type": "dimension"
      },
      "breakpoint-bp-19": {
        "$value": "840px",
        "$type": "dimension"
      },
      "breakpoint-bp-20": {
        "$value": "880px",
        "$type": "dimension"
      },
      "breakpoint-bp-21": {
        "$value": "900px",
        "$type": "dimension"
      },
      "breakpoint-bp-22": {
        "$value": "920px",
        "$type": "dimension"
      },
      "breakpoint-bp-23": {
        "$value": "980px",
        "$type": "dimension"
      },
      "breakpoint-bp-24": {
        "$value": "1000px",
        "$type": "dimension"
      },
      "breakpoint-bp-25": {
        "$value": "1024px",
        "$type": "dimension"
      },
      "breakpoint-bp-26": {
        "$value": "1050px",
        "$type": "dimension"
      },
      "breakpoint-bp-27": {
        "$value": "1064px",
        "$type": "dimension"
      },
      "breakpoint-bp-28": {
        "$value": "1080px",
        "$type": "dimension"
      },
      "breakpoint-bp-29": {
        "$value": "1200px",
        "$type": "dimension"
      },
      "breakpoint-bp-30": {
        "$value": "1204px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
        "$value": "0px 0px 12px 12px",
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
        "$value": "4px",
        "$type": "dimension"
      },
      "radius-full": {
        "$value": "5px",
        "$type": "dimension"
      },
      "radius-r7": {
        "$value": "6px",
        "$type": "dimension"
      },
      "radius-r8": {
        "$value": "8px",
        "$type": "dimension"
      },
      "radius-r9": {
        "$value": "9px",
        "$type": "dimension"
      },
      "radius-r10": {
        "$value": "11px",
        "$type": "dimension"
      },
      "radius-r11": {
        "$value": "12px",
        "$type": "dimension"
      },
      "radius-r12": {
        "$value": "16px",
        "$type": "dimension"
      },
      "radius-r13": {
        "$value": "20px",
        "$type": "dimension"
      },
      "radius-r14": {
        "$value": "22px",
        "$type": "dimension"
      },
      "radius-r15": {
        "$value": "31px",
        "$type": "dimension"
      },
      "radius-r16": {
        "$value": "36px",
        "$type": "dimension"
      },
      "radius-r17": {
        "$value": "43px",
        "$type": "dimension"
      },
      "radius-r18": {
        "$value": "86px",
        "$type": "dimension"
      },
      "radius-r19": {
        "$value": "100%",
        "$type": "dimension"
      },
      "radius-r20": {
        "$value": "1000px",
        "$type": "dimension"
      },
      "radius-r21": {
        "$value": "99999px",
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
      },
      "border-width-thick": {
        "$value": "4px",
        "$type": "dimension"
      }
    },
    "shadow": {
      "shadow-sm": {
        "$value": "rgba(0, 0, 0, 0.4) 0px 1.5px 0.5px 2.5px, rgb(0, 0, 0) 0px 0px 0.5px 1px, rgba(0, 0, 0, 0.25) 0px 2px 1px 1px inset, rgba(255, 255, 255, 0.2) 0px 1px 1px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px inset",
        "$type": "shadow"
      },
      "shadow-md": {
        "$value": "rgb(27, 28, 30) 0px 0px 0px 1px, rgb(7, 8, 10) 0px 0px 0px 1px inset",
        "$type": "shadow"
      },
      "shadow-lg": {
        "$value": "rgba(215, 201, 175, 0.05) 0px 0px 20px 5px, rgba(215, 201, 175, 0.05) 0px 0px 16px -7px",
        "$type": "shadow"
      },
      "shadow-xl": {
        "$value": "rgba(0, 0, 0, 0.28) 0px 1.189px 2.377px 0px",
        "$type": "shadow"
      },
      "shadow-shadow-5": {
        "$value": "rgba(255, 255, 255, 0.05) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.25) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px -1px 0px 0px inset",
        "$type": "shadow"
      },
      "shadow-shadow-6": {
        "$value": "rgba(0, 0, 0, 0.5) 0px 0px 0px 2px, rgba(255, 255, 255, 0.19) 0px 0px 14px 0px, rgba(0, 0, 0, 0.2) 0px -1px 0.4px 0px inset, rgb(255, 255, 255) 0px 1px 0.4px 0px inset",
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
        "$value": "0.125s",
        "$type": "duration"
      },
      "duration-normal": {
        "$value": "0.15s",
        "$type": "duration"
      },
      "duration-slow": {
        "$value": "0.2s",
        "$type": "duration"
      },
      "duration-slower": {
        "$value": "0.225s",
        "$type": "duration"
      },
      "duration-duration-6": {
        "$value": "0.25s",
        "$type": "duration"
      },
      "duration-duration-7": {
        "$value": "0.3s",
        "$type": "duration"
      },
      "duration-duration-8": {
        "$value": "0.4s",
        "$type": "duration"
      },
      "duration-duration-9": {
        "$value": "0.5s",
        "$type": "duration"
      },
      "duration-duration-10": {
        "$value": "0.65s",
        "$type": "duration"
      },
      "duration-duration-11": {
        "$value": "0.85s",
        "$type": "duration"
      },
      "duration-duration-12": {
        "$value": "0.9s",
        "$type": "duration"
      },
      "duration-duration-13": {
        "$value": "1s",
        "$type": "duration"
      },
      "duration-duration-14": {
        "$value": "1.2s",
        "$type": "duration"
      },
      "duration-duration-15": {
        "$value": "1.5s",
        "$type": "duration"
      },
      "duration-duration-16": {
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
    "opacity-10": {
      "$value": 0.1,
      "$type": "number"
    },
    "opacity-11": {
      "$value": 0.11,
      "$type": "number"
    },
    "opacity-12": {
      "$value": 0.12,
      "$type": "number"
    },
    "opacity-13": {
      "$value": 0.13,
      "$type": "number"
    },
    "opacity-15": {
      "$value": 0.15,
      "$type": "number"
    },
    "opacity-16": {
      "$value": 0.16,
      "$type": "number"
    },
    "opacity-17": {
      "$value": 0.17,
      "$type": "number"
    },
    "opacity-19": {
      "$value": 0.19,
      "$type": "number"
    },
    "opacity-20": {
      "$value": 0.2,
      "$type": "number"
    },
    "opacity-21": {
      "$value": 0.21,
      "$type": "number"
    },
    "opacity-22": {
      "$value": 0.22,
      "$type": "number"
    },
    "opacity-23": {
      "$value": 0.23,
      "$type": "number"
    },
    "opacity-24": {
      "$value": 0.24,
      "$type": "number"
    },
    "opacity-25": {
      "$value": 0.25,
      "$type": "number"
    },
    "opacity-26": {
      "$value": 0.26,
      "$type": "number"
    },
    "opacity-27": {
      "$value": 0.27,
      "$type": "number"
    },
    "opacity-28": {
      "$value": 0.28,
      "$type": "number"
    },
    "opacity-29": {
      "$value": 0.29,
      "$type": "number"
    },
    "opacity-30": {
      "$value": 0.3,
      "$type": "number"
    },
    "opacity-31": {
      "$value": 0.31,
      "$type": "number"
    },
    "opacity-32": {
      "$value": 0.32,
      "$type": "number"
    },
    "opacity-33": {
      "$value": 0.33,
      "$type": "number"
    },
    "opacity-34": {
      "$value": 0.34,
      "$type": "number"
    },
    "opacity-35": {
      "$value": 0.35,
      "$type": "number"
    },
    "opacity-36": {
      "$value": 0.36,
      "$type": "number"
    },
    "opacity-39": {
      "$value": 0.39,
      "$type": "number"
    },
    "opacity-40": {
      "$value": 0.4,
      "$type": "number"
    },
    "opacity-45": {
      "$value": 0.45,
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
    "opacity-75": {
      "$value": 0.75,
      "$type": "number"
    },
    "opacity-80": {
      "$value": 0.8,
      "$type": "number"
    },
    "opacity-90": {
      "$value": 0.9,
      "$type": "number"
    }
  }
}
```
