# VoltAgent - Open Source TypeScript AI Agent Framework — Design System

**Source:** https://voltagent.dev/  
**Generated:** 18/04/2026, 14:15:38  
**Extracted:** 148 colors · 43 type tokens · 18 spacing steps · 23 breakpoints · 6 motion tokens

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
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×2728 |
| `--color-cyan` | `#10B981` | hsl(160, 84%, 39%) | ×867 |
| `--color-dark-gray-3` | `#101010` | hsl(0, 0%, 6%) | ×133 |
| `--color-blue-3` | `#5865F2` | hsl(235, 86%, 65%) | ×124 |
| `--color-dark-gray-4` | `#1A1A1A` | hsl(0, 0%, 10%) | ×107 |
| `--color-blue-4` | `#0077B5` | hsl(201, 100%, 35%) | ×76 |
| `--color-cyan-2` | `#00D992` | hsl(160, 100%, 43%) | ×72 |
| `--color-red` | `#DC2626` | hsl(0, 72%, 51%) | ×20 |
| `--color-light-gray-8` | `rgba(184, 179, 176, 0.1)` | hsl(0, 6%, 71%) | ×16 |
| `--color-blue-10` | `rgba(88, 101, 242, 0.1)` | hsl(236, 89%, 65%) | ×8 |
| `--color-black-2` | `#050507` | hsl(240, 17%, 2%) | ×7 |
| `--color-black-3` | `#020202` | hsl(0, 0%, 1%) | ×6 |
| `--color-black-4` | `#010409` | hsl(218, 80%, 2%) | ×4 |
| `--color-dark-orange` | `rgba(120, 53, 15, 0.3)` | hsl(21, 75%, 27%) | ×3 |
| `--color-cyan-18` | `rgba(52, 211, 153, 0.1)` | hsl(159, 68%, 52%) | ×2 |
| `--color-dark-gray-9` | `#242526` | hsl(210, 3%, 15%) | ×1 |
| `--color-cyan-29` | `rgba(16, 185, 129, 0.1)` | hsl(159, 81%, 40%) | ×1 |
| `--color-blue-32` | `rgba(94, 96, 226, 0.11)` | hsl(236, 72%, 63%) | ×1 |
| `--color-blue-34` | `rgba(59, 130, 246, 0.1)` | hsl(218, 90%, 60%) | ×1 |
| `--color-cyan-30` | `rgba(20, 184, 166, 0.1)` | hsl(173, 81%, 40%) | ×1 |
| `--color-purple-3` | `rgba(168, 85, 247, 0.1)` | hsl(270, 89%, 65%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray` | `#F2F2F2` | hsl(0, 0%, 95%) | ×1612 |
| `--color-white` | `#FFFFFF` | hsl(0, 0%, 100%) | ×1341 |
| `--color-white-2` | `#F0F6FC` | hsl(210, 67%, 96%) | ×381 |
| `--color-light-gray-2` | `#B8B3B0` | hsl(22, 5%, 71%) | ×320 |
| `--color-light-gray-3` | `#DCDCDC` | hsl(0, 0%, 86%) | ×229 |
| `--color-light-gray-4` | `#E3E3E3` | hsl(0, 0%, 89%) | ×174 |
| `--color-blue` | `#3B82F6` | hsl(217, 91%, 60%) | ×144 |
| `--color-blue-2` | `#8B949E` | hsl(212, 9%, 58%) | ×128 |
| `--color-mid-gray` | `#8A8380` | hsl(18, 4%, 52%) | ×84 |
| `--color-light-red` | `#FF7B72` | hsl(4, 100%, 72%) | ×82 |
| `--color-light-gray-5` | `#EEEEEE` | hsl(0, 0%, 93%) | ×69 |
| `--color-blue-5` | `#6B7280` | hsl(220, 9%, 46%) | ×67 |
| `--color-blue-6` | `#9CA3AF` | hsl(218, 11%, 65%) | ×59 |
| `--color-light-blue` | `#A5D6FF` | hsl(207, 100%, 82%) | ×53 |
| `--color-light-gray-6` | `#BDBDBD` | hsl(0, 0%, 74%) | ×34 |
| `--color-cyan-3` | `#2FD6A1` | hsl(161, 67%, 51%) | ×29 |
| `--color-orange` | `#F59E0B` | hsl(38, 92%, 50%) | ×29 |
| `--color-light-gray-7` | `#D1D5DB` | hsl(216, 12%, 84%) | ×26 |
| `--color-light-purple` | `#D2A8FF` | hsl(269, 100%, 83%) | ×15 |
| `--color-light-blue-2` | `#93C5FD` | hsl(212, 96%, 78%) | ×15 |
| `--color-cyan-4` | `#5EEAD4` | hsl(171, 77%, 64%) | ×15 |
| `--color-light-blue-3` | `#A5B4FC` | hsl(230, 94%, 82%) | ×10 |
| `--color-light-purple-2` | `#D8B4FE` | hsl(269, 97%, 85%) | ×10 |
| `--color-light-red-2` | `#FB7185` | hsl(351, 95%, 71%) | ×10 |
| `--color-cyan-5` | `#6EE7B7` | hsl(156, 72%, 67%) | ×9 |
| `--color-blue-12` | `#60A5FA` | hsl(213, 94%, 68%) | ×6 |
| `--color-yellow` | `#FACC15` | hsl(48, 96%, 53%) | ×4 |
| `--color-green-2` | `#00D600` | hsl(120, 100%, 42%) | ×4 |
| `--color-light-red-3` | `#FDA4AF` | hsl(353, 96%, 82%) | ×4 |
| `--color-cyan-12` | `#34D399` | hsl(158, 64%, 52%) | ×3 |
| `--color-light-purple-3` | `#C084FC` | hsl(270, 95%, 75%) | ×2 |
| `--color-white-4` | `#F5F6F7` | hsl(210, 11%, 96%) | ×1 |
| `--color-white-6` | `#F5F5F5` | hsl(0, 0%, 96%) | ×1 |
| `--color-green-4` | `#4ADE80` | hsl(142, 69%, 58%) | ×1 |
| `--color-cyan-31` | `#2DD4BF` | hsl(172, 66%, 50%) | ×1 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-gray` | `#262626` | hsl(0, 0%, 15%) | ×4550 |
| `--color-dark-gray-2` | `#3D3A39` | hsl(15, 3%, 23%) | ×223 |
| `--color-dark-blue` | `rgba(55, 65, 81, 0.3)` | hsl(214, 17%, 26%) | ×28 |
| `--color-dark-blue-2` | `#4B5563` | hsl(215, 14%, 34%) | ×8 |
| `--color-blue-9` | `rgba(79, 93, 117, 0.4)` | hsl(221, 19%, 39%) | ×8 |
| `--color-dark-gray-6` | `#5C5855` | hsl(26, 4%, 35%) | ×7 |
| `--color-dark-blue-3` | `rgba(55, 65, 81, 0.5)` | hsl(217, 19%, 27%) | ×5 |
| `--color-cyan-14` | `rgba(52, 211, 153, 0.7)` | hsl(158, 64%, 52%) | ×3 |
| `--color-blue-18` | `rgba(96, 165, 250, 0.7)` | hsl(213, 93%, 67%) | ×3 |
| `--color-cyan-20` | `rgba(45, 212, 191, 0.7)` | hsl(172, 66%, 51%) | ×2 |
| `--color-light-red-4` | `rgba(251, 113, 133, 0.7)` | hsl(352, 95%, 71%) | ×2 |
| `--color-blue-30` | `#4F5D75` | hsl(218, 19%, 38%) | ×1 |
| `--color-light-blue-5` | `rgba(129, 140, 248, 0.7)` | hsl(235, 89%, 74%) | ×1 |

### Shadow Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-gray-5` | `rgba(92, 88, 85, 0.2)` | hsl(60, 3%, 34%) | ×13 |
| `--color-blue-16` | `rgba(148, 163, 184, 0.1)` | hsl(209, 22%, 65%) | ×3 |
| `--color-orange-6` | `rgba(245, 158, 11, 0.2)` | hsl(38, 92%, 50%) | ×3 |
| `--color-cyan-19` | `rgba(52, 211, 153, 0.3)` | hsl(157, 65%, 52%) | ×2 |
| `--color-cyan-21` | `rgba(45, 212, 191, 0.3)` | hsl(173, 66%, 51%) | ×2 |
| `--color-dark-gray-8` | `rgba(92, 88, 85, 0.3)` | hsl(26, 4%, 35%) | ×2 |
| `--color-cyan-24` | `rgba(0, 217, 146, 0.3)` | hsl(160, 100%, 43%) | ×1 |
| `--color-cyan-27` | `rgba(47, 214, 161, 0.4)` | hsl(160, 68%, 51%) | ×1 |
| `--color-cyan-28` | `rgba(47, 214, 161, 0.15)` | hsl(161, 68%, 51%) | ×1 |
| `--color-blue-33` | `rgba(96, 165, 250, 0.5)` | hsl(213, 93%, 68%) | ×1 |
| `--color-purple-2` | `rgba(168, 85, 247, 0.3)` | hsl(271, 92%, 65%) | ×1 |
| `--color-light-red-6` | `rgba(251, 113, 133, 0.5)` | hsl(352, 94%, 72%) | ×1 |
| `--color-blue-35` | `rgba(96, 165, 250, 0.3)` | hsl(212, 92%, 67%) | ×1 |

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-blue-7` | `#007EE5` | hsl(207, 100%, 45%) | ×18 |
| `--color-green` | `#36A852` | hsl(135, 51%, 44%) | ×9 |
| `--color-dark-green` | `#1C8140` | hsl(141, 64%, 31%) | ×9 |
| `--color-blue-8` | `#557EBF` | hsl(217, 45%, 54%) | ×9 |
| `--color-orange-2` | `#F9BC15` | hsl(44, 95%, 53%) | ×6 |
| `--color-red-2` | `#EA4535` | hsl(5, 81%, 56%) | ×6 |
| `--color-blue-13` | `#3968B2` | hsl(217, 51%, 46%) | ×6 |
| `--color-cyan-6` | `#00A1E0` | hsl(197, 100%, 44%) | ×6 |
| `--color-white-3` | `#FFFFFE` | hsl(60, 100%, 100%) | ×6 |
| `--color-blue-14` | `#51A9E3` | hsl(204, 72%, 60%) | ×6 |
| `--color-orange-3` | `#FCB400` | hsl(43, 100%, 49%) | ×4 |
| `--color-cyan-7` | `#18BFFF` | hsl(197, 100%, 55%) | ×4 |
| `--color-red-3` | `#F82B60` | hsl(344, 94%, 57%) | ×4 |
| `--color-red-4` | `#BA1E45` | hsl(345, 72%, 42%) | ×4 |
| `--color-cyan-8` | `#39C5EF` | hsl(194, 85%, 58%) | ×4 |
| `--color-cyan-9` | `#2FB77E` | hsl(155, 59%, 45%) | ×4 |
| `--color-orange-4` | `#EBB22D` | hsl(42, 83%, 55%) | ×4 |
| `--color-red-5` | `#E0225B` | hsl(342, 75%, 51%) | ×4 |
| `--color-red-6` | `#EF463D` | hsl(3, 85%, 59%) | ×4 |
| `--color-blue-15` | `#427CBF` | hsl(212, 49%, 50%) | ×4 |
| `--color-dark-cyan` | `#00AF59` | hsl(151, 100%, 34%) | ×4 |
| `--color-red-7` | `#DC2226` | hsl(359, 73%, 50%) | ×4 |
| `--color-orange-5` | `#FDB716` | hsl(42, 98%, 54%) | ×4 |
| `--color-cyan-11` | `#3ECF8E` | hsl(153, 60%, 53%) | ×4 |
| `--color-cyan-13` | `#00FFB2` | hsl(162, 100%, 50%) | ×3 |
| `--color-blue-17` | `#4F46E5` | hsl(243, 75%, 59%) | ×3 |
| `--color-green-3` | `#22C55E` | hsl(142, 71%, 45%) | ×3 |
| `--color-blue-19` | `#635BFF` | hsl(243, 100%, 68%) | ×3 |
| `--color-blue-20` | `#0364B8` | hsl(208, 97%, 37%) | ×3 |
| `--color-blue-21` | `#0078D4` | hsl(206, 100%, 42%) | ×3 |
| `--color-blue-22` | `#1490DF` | hsl(203, 84%, 48%) | ×3 |
| `--color-blue-23` | `#28A8EA` | hsl(200, 82%, 54%) | ×3 |
| `--color-blue-24` | `#5059C9` | hsl(236, 53%, 55%) | ×3 |
| `--color-light-blue-4` | `#7B83EB` | hsl(236, 74%, 70%) | ×3 |
| `--color-yellow-2` | `#FFE01B` | hsl(52, 100%, 55%) | ×3 |
| `--color-dark-gray-7` | `#1E1E1E` | hsl(0, 0%, 12%) | ×3 |
| `--color-dark-cyan-2` | `#03363D` | hsl(187, 91%, 13%) | ×3 |
| `--color-blue-25` | `#0079BF` | hsl(202, 100%, 37%) | ×3 |
| `--color-blue-26` | `#4B7BBE` | hsl(215, 47%, 52%) | ×3 |
| `--color-blue-27` | `#1F8DED` | hsl(208, 85%, 53%) | ×3 |
| `--color-red-8` | `#FF7A59` | hsl(12, 100%, 67%) | ×3 |
| `--color-cyan-15` | `#0ACF83` | hsl(157, 91%, 43%) | ×3 |
| `--color-purple` | `#A259FF` | hsl(266, 100%, 67%) | ×3 |
| `--color-red-9` | `#F24E1E` | hsl(14, 89%, 53%) | ×3 |
| `--color-red-10` | `#FF7262` | hsl(6, 100%, 69%) | ×3 |
| `--color-cyan-16` | `#1ABCFE` | hsl(197, 99%, 55%) | ×3 |
| `--color-orange-7` | `#FF8800` | hsl(32, 100%, 50%) | ×3 |
| `--color-blue-28` | `#7856FF` | hsl(252, 100%, 67%) | ×3 |
| `--color-dark-blue-4` | `#362D59` | hsl(252, 33%, 26%) | ×3 |
| `--color-cyan-17` | `#29B5E8` | hsl(196, 81%, 54%) | ×3 |
| `--color-dark-cyan-3` | `#39594D` | hsl(158, 22%, 29%) | ×2 |
| `--color-light-purple-4` | `#D18EE2` | hsl(288, 59%, 72%) | ×2 |
| `--color-red-11` | `#FF7759` | hsl(11, 100%, 67%) | ×2 |
| `--color-cyan-23` | `rgba(16, 185, 129, 0.15)` | hsl(159, 87%, 39%) | ×1 |
| `--color-dark-cyan-4` | `rgba(5, 150, 105, 0.15)` | hsl(163, 91%, 30%) | ×1 |
| `--color-white-5` | `rgba(255, 253, 251, 0.69)` | hsl(45, 100%, 99%) | ×1 |
| `--color-cyan-25` | `rgba(0, 217, 146, 0.12)` | hsl(161, 100%, 42%) | ×1 |
| `--color-cyan-26` | `rgba(0, 217, 146, 0.04)` | hsl(160, 100%, 45%) | ×1 |
| `--color-blue-31` | `#3178C6` | hsl(211, 60%, 48%) | ×1 |
| `--color-dark-cyan-5` | `#059669` | hsl(161, 94%, 30%) | ×1 |
| `--color-blue-36` | `#336791` | hsl(207, 48%, 38%) | ×1 |

### Other Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-blue-11` | `rgba(79, 93, 117, 0.25)` | hsl(220, 18%, 38%) | ×6 |
| `--color-cyan-10` | `rgba(0, 217, 146, 0.15)` | hsl(161, 100%, 42%) | ×4 |
| `--color-cyan-22` | `rgba(52, 211, 153, 0.4)` | hsl(158, 64%, 51%) | ×2 |
| `--color-blue-29` | `rgba(96, 165, 250, 0.4)` | hsl(213, 94%, 68%) | ×2 |
| `--color-light-red-5` | `rgba(251, 113, 133, 0.4)` | hsl(351, 93%, 71%) | ×2 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `Inter` |
| `--font-family-2` | `system-ui` |
| `--font-family-3` | `monospace` |
| `--font-family-4` | `Arial` |
| `--font-family-5` | `SFMono-Regular` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `11px` |  |
| `--font-size-xs` | `12px` |  |
| `--font-size-sm` | `13px` |  |
| `--font-size-base` | `13.3333px` |  |
| `--font-size-lg` | `14px` |  |
| `--font-size-xl` | `14.45px` |  |
| `--font-size-2xl` | `16px` |  |
| `--font-size-3xl` | `17px` |  |
| `--font-size-4xl` | `18px` |  |
| `--font-size-5xl` | `20px` |  |
| `--font-size-6xl` | `24px` |  |
| `--font-size-36px` | `36px` |  |
| `--font-size-60px` | `60px` |  |

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
| `--line-height-tight` | `15.95px` |
| `--line-height-snug` | `18.2px` |
| `--line-height-normal` | `20px` |
| `--line-height-relaxed` | `21.45px` |
| `--line-height-loose` | `23.1px` |
| `--line-height-lh-6` | `23.8425px` |
| `--line-height-lh-7` | `26.4px` |
| `--line-height-lh-8` | `28px` |
| `--line-height-lh-9` | `32px` |
| `--line-height-lh-10` | `39.6px` |
| `--line-height-lh-11` | `60px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `-0.9px` |
| `--letter-spacing-normal` | `-0.8px` |
| `--letter-spacing-wide` | `-0.7px` |
| `--letter-spacing-wider` | `-0.65px` |
| `--letter-spacing-widest` | `-0.6px` |
| `--letter-spacing-ls-6` | `-0.4px` |
| `--letter-spacing-ls-7` | `0.45px` |
| `--letter-spacing-ls-8` | `0.5px` |
| `--letter-spacing-ls-9` | `2.52px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `2px` | ×36 |
| `--space-2` | `4px` | ×203 |
| `--space-3` | `5px` | ×4 |
| `--space-4` | `6px` | ×40 |
| `--space-5` | `7px` | ×3 |
| `--space-6` | `8px` | ×824 |
| `--space-8` | `12px` | ×356 |
| `--space-10` | `16px` | ×524 |
| `--space-12` | `20px` | ×24 |
| `--space-16` | `24px` | ×254 |
| `--space-20` | `28px` | ×4 |
| `--space-24` | `32px` | ×63 |
| `--space-32` | `40px` | ×13 |
| `--space-40` | `48px` | ×52 |
| `--space-48` | `64px` | ×3 |
| `--space-64` | `80px` | ×8 |
| `--space-80` | `96px` | ×2 |
| `--space-96` | `144px` | ×9 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `1px` | ×828 |
| `--border-width-thin` | `1.5px` | ×401 |
| `--border-width-base` | `2px` | ×25 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `0px 4px 4px 0px` | ×1 |
| `--radius-md` | `2px` | ×1 |
| `--radius-lg` | `4px` | ×24 |
| `--radius-xl` | `6px` | ×148 |
| `--radius-2xl` | `6.4px` | ×8 |
| `--radius-full` | `8px` | ×254 |
| `--radius-r7` | `8px 8px 0px 0px` | ×1 |
| `--radius-r8` | `9999px` | ×109 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(92, 88, 85, 0.2) 0px 0px 15px 0px` | ×5 |
| `--shadow-md` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.7) 0px 20px 60px 0px, rgba(148, 163, 184, 0.1) 0px 0px 0px 1px inset` | ×3 |
| `--shadow-lg` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(245, 158, 11, 0.2) 0px 0px 15px 0px` | ×3 |
| `--shadow-xl` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(52, 211, 153, 0.3) 0px 0px 15px 0px` | ×2 |
| `--shadow-shadow-5` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(45, 212, 191, 0.3) 0px 0px 15px 0px` | ×2 |
| `--shadow-shadow-6` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(92, 88, 85, 0.3) 0px 0px 15px 0px` | ×2 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.15s` | ×313 |
| `--duration-fast` | `0.2s` | ×603 |
| `--duration-normal` | `0.3s` | ×219 |
| `--duration-slow` | `0.5s` | ×11 |
| `--duration-slower` | `0.7s` | ×114 |

### Easing Functions

| Token | Value | Usage |
| --- | --- | --- |
| `--easing-ease-in-out` | `ease-in-out` | ×2 |

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `-1` |
| `--z-2` | `1` |
| `--z-3` | `2` |
| `--z-4` | `3` |
| `--z-5` | `10` |
| `--z-6` | `20` |
| `--z-7` | `50` |
| `--z-8` | `201` |
| `--z-9` | `1000` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `360px` |
| `--breakpoint-sm` | `420px` |
| `--breakpoint-md` | `576px` |
| `--breakpoint-lg` | `640px` |
| `--breakpoint-xl` | `720px` |
| `--breakpoint-2xl` | `767px` |
| `--breakpoint-3xl` | `768px` |
| `--breakpoint-bp-8` | `960px` |
| `--breakpoint-bp-9` | `975px` |
| `--breakpoint-bp-10` | `996px` |
| `--breakpoint-bp-11` | `997px` |
| `--breakpoint-bp-12` | `1000px` |
| `--breakpoint-bp-13` | `1024px` |
| `--breakpoint-bp-14` | `1025px` |
| `--breakpoint-bp-15` | `1100px` |
| `--breakpoint-bp-16` | `1160px` |
| `--breakpoint-bp-17` | `1200px` |
| `--breakpoint-bp-18` | `1270px` |
| `--breakpoint-bp-19` | `1280px` |
| `--breakpoint-bp-20` | `1296px` |
| `--breakpoint-bp-21` | `1440px` |
| `--breakpoint-bp-22` | `1584px` |
| `--breakpoint-bp-23` | `1992px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-10` | `0.1` | ×6 |
| `--opacity-15` | `0.15` | ×1 |
| `--opacity-20` | `0.2` | ×18 |
| `--opacity-30` | `0.3` | ×1 |
| `--opacity-42` | `0.42` | ×1 |
| `--opacity-50` | `0.5` | ×1 |
| `--opacity-60` | `0.6` | ×6 |
| `--opacity-63` | `0.63` | ×1 |
| `--opacity-80` | `0.8` | ×8 |
| `--opacity-90` | `0.9` | ×1 |
| `--opacity-94` | `0.94` | ×3 |
| `--opacity-99` | `0.99` | ×2 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-light-gray` | `--color-black` | 18.76:1 | AAA |
| `--color-light-gray` | `--color-cyan` | 2.27:1 | Fail |
| `--color-light-gray` | `--color-dark-gray-3` | 17:1 | AAA |
| `--color-light-gray` | `--color-blue-3` | 4.11:1 | AA Large |
| `--color-light-gray` | `--color-dark-gray-4` | 15.55:1 | AAA |
| `--color-white` | `--color-black` | 21:1 | AAA |
| `--color-white` | `--color-cyan` | 2.54:1 | Fail |
| `--color-white` | `--color-dark-gray-3` | 19.03:1 | AAA |
| `--color-white` | `--color-blue-3` | 4.61:1 | AA |
| `--color-white` | `--color-dark-gray-4` | 17.4:1 | AAA |
| `--color-white-2` | `--color-black` | 19.29:1 | AAA |
| `--color-white-2` | `--color-cyan` | 2.33:1 | Fail |
| `--color-white-2` | `--color-dark-gray-3` | 17.48:1 | AAA |
| `--color-white-2` | `--color-blue-3` | 4.23:1 | AA Large |
| `--color-white-2` | `--color-dark-gray-4` | 15.99:1 | AAA |
| `--color-light-gray-2` | `--color-black` | 10.11:1 | AAA |
| `--color-light-gray-2` | `--color-cyan` | 1.22:1 | Fail |
| `--color-light-gray-2` | `--color-dark-gray-3` | 9.16:1 | AAA |
| `--color-light-gray-2` | `--color-blue-3` | 2.22:1 | Fail |
| `--color-light-gray-2` | `--color-dark-gray-4` | 8.38:1 | AAA |
| `--color-light-gray-3` | `--color-black` | 15.31:1 | AAA |
| `--color-light-gray-3` | `--color-cyan` | 1.85:1 | Fail |
| `--color-light-gray-3` | `--color-dark-gray-3` | 13.88:1 | AAA |
| `--color-light-gray-3` | `--color-blue-3` | 3.36:1 | AA Large |
| `--color-light-gray-3` | `--color-dark-gray-4` | 12.69:1 | AAA |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--ifm-button-color` | `var(--ifm-font-color-base-inverse)` |
| `--ifm-navbar-link-hover-color` | `var(--ifm-color-primary)` |
| `--ifm-color-emphasis-500` | `var(--ifm-color-gray-500)` |
| `--ifm-color-scheme` | `light` |
| `--ifm-dark-value` | `10%` |
| `--ifm-darker-value` | `15%` |
| `--ifm-darkest-value` | `30%` |
| `--ifm-light-value` | `15%` |
| `--ifm-lighter-value` | `30%` |
| `--ifm-lightest-value` | `50%` |
| `--ifm-contrast-background-value` | `90%` |
| `--ifm-contrast-foreground-value` | `70%` |
| `--ifm-contrast-background-dark-value` | `70%` |
| `--ifm-contrast-foreground-dark-value` | `90%` |
| `--ifm-color-primary` | `#10b981` |
| `--ifm-color-secondary` | `#ebedf0` |
| `--ifm-color-success` | `#00a400` |
| `--ifm-color-info` | `#54c7ec` |
| `--ifm-color-warning` | `#ffba00` |
| `--ifm-color-danger` | `#fa383e` |
| `--ifm-color-primary-dark` | `#306cce` |
| `--ifm-color-primary-darker` | `#2d66c3` |
| `--ifm-color-primary-darkest` | `#2554a0` |
| `--ifm-color-primary-light` | `#538ce9` |
| `--ifm-color-primary-lighter` | `#72a1ed` |
| `--ifm-color-primary-lightest` | `#9abcf2` |
| `--ifm-color-primary-contrast-background` | `#ebf2fc` |
| `--ifm-color-primary-contrast-foreground` | `#102445` |
| `--ifm-color-secondary-dark` | `#d4d5d8` |
| `--ifm-color-secondary-darker` | `#c8c9cc` |
| `--ifm-color-secondary-darkest` | `#a4a6a8` |
| `--ifm-color-secondary-light` | `#eef0f2` |
| `--ifm-color-secondary-lighter` | `#f1f2f5` |
| `--ifm-color-secondary-lightest` | `#f5f6f8` |
| `--ifm-color-secondary-contrast-background` | `#fdfdfe` |
| `--ifm-color-secondary-contrast-foreground` | `#474748` |
| `--ifm-color-success-dark` | `#009400` |
| `--ifm-color-success-darker` | `#008b00` |
| `--ifm-color-success-darkest` | `#007300` |
| `--ifm-color-success-light` | `#26b226` |
| `--ifm-color-success-lighter` | `#4dbf4d` |
| `--ifm-color-success-lightest` | `#80d280` |
| `--ifm-color-success-contrast-background` | `#e6f6e6` |
| `--ifm-color-success-contrast-foreground` | `#003100` |
| `--ifm-color-info-dark` | `#4cb3d4` |
| `--ifm-color-info-darker` | `#47a9c9` |
| `--ifm-color-info-darkest` | `#3b8ba5` |
| `--ifm-color-info-light` | `#6ecfef` |
| `--ifm-color-info-lighter` | `#87d8f2` |
| `--ifm-color-info-lightest` | `#aae3f6` |
| `--ifm-color-info-contrast-background` | `#eef9fd` |
| `--ifm-color-info-contrast-foreground` | `#193c47` |
| `--ifm-color-warning-dark` | `#e6a700` |
| `--ifm-color-warning-darker` | `#d99e00` |
| `--ifm-color-warning-darkest` | `#b38200` |
| `--ifm-color-warning-light` | `#ffc426` |
| `--ifm-color-warning-lighter` | `#ffcf4d` |
| `--ifm-color-warning-lightest` | `#ffdd80` |
| `--ifm-color-warning-contrast-background` | `#fff8e6` |
| `--ifm-color-warning-contrast-foreground` | `#4d3800` |
| `--ifm-color-danger-dark` | `#e13238` |
| `--ifm-color-danger-darker` | `#d53035` |
| `--ifm-color-danger-darkest` | `#af272b` |
| `--ifm-color-danger-light` | `#fb565b` |
| `--ifm-color-danger-lighter` | `#fb7478` |
| `--ifm-color-danger-lightest` | `#fd9c9f` |
| `--ifm-color-danger-contrast-background` | `#ffebec` |
| `--ifm-color-danger-contrast-foreground` | `#4b1113` |
| `--ifm-color-white` | `#fff` |
| `--ifm-color-black` | `#000` |
| `--ifm-color-gray-0` | `var(--ifm-color-white)` |
| `--ifm-color-gray-100` | `#f5f6f7` |
| `--ifm-color-gray-200` | `#ebedf0` |
| `--ifm-color-gray-300` | `#dadde1` |
| `--ifm-color-gray-400` | `#ccd0d5` |
| `--ifm-color-gray-500` | `#bec3c9` |
| `--ifm-color-gray-600` | `#8d949e` |
| `--ifm-color-gray-700` | `#606770` |
| `--ifm-color-gray-800` | `#444950` |
| `--ifm-color-gray-900` | `#1c1e21` |
| `--ifm-color-gray-1000` | `var(--ifm-color-black)` |
| `--ifm-color-emphasis-0` | `var(--ifm-color-gray-0)` |
| `--ifm-color-emphasis-100` | `var(--ifm-color-gray-100)` |
| `--ifm-color-emphasis-200` | `var(--ifm-color-gray-200)` |
| `--ifm-color-emphasis-300` | `var(--ifm-color-gray-300)` |
| `--ifm-color-emphasis-400` | `var(--ifm-color-gray-400)` |
| `--ifm-color-emphasis-600` | `var(--ifm-color-gray-600)` |
| `--ifm-color-emphasis-700` | `var(--ifm-color-gray-700)` |
| `--ifm-color-emphasis-800` | `var(--ifm-color-gray-800)` |
| `--ifm-color-emphasis-900` | `var(--ifm-color-gray-900)` |
| `--ifm-color-emphasis-1000` | `var(--ifm-color-gray-1000)` |
| `--ifm-color-content` | `var(--ifm-color-emphasis-900)` |
| `--ifm-color-content-inverse` | `var(--ifm-color-emphasis-0)` |
| `--ifm-color-content-secondary` | `#525860` |
| `--ifm-background-color` | `#fdfdfd` |
| `--ifm-background-surface-color` | `var(--ifm-color-content-inverse)` |
| `--ifm-global-border-width` | `1px` |
| `--ifm-global-radius` | `0.4rem` |
| `--ifm-hover-overlay` | `#0000000d` |
| `--ifm-font-color-base` | `var(--ifm-color-content)` |
| `--ifm-font-color-base-inverse` | `var(--ifm-color-content-inverse)` |
| `--ifm-font-color-secondary` | `var(--ifm-color-content-secondary)` |
| `--ifm-font-family-base` | `system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"` |
| `--ifm-font-family-monospace` | `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace` |
| `--ifm-font-size-base` | `100%` |
| `--ifm-font-weight-light` | `300` |
| `--ifm-font-weight-normal` | `400` |
| `--ifm-font-weight-semibold` | `500` |
| `--ifm-font-weight-bold` | `700` |
| `--ifm-font-weight-base` | `var(--ifm-font-weight-normal)` |
| `--ifm-line-height-base` | `1.65` |
| `--ifm-global-spacing` | `1rem` |
| `--ifm-spacing-vertical` | `var(--ifm-global-spacing)` |
| `--ifm-spacing-horizontal` | `var(--ifm-global-spacing)` |
| `--ifm-transition-fast` | `200ms` |
| `--ifm-transition-slow` | `400ms` |
| `--ifm-transition-timing-default` | `cubic-bezier(0.08,0.52,0.52,1)` |
| `--ifm-global-shadow-lw` | `0 1px 2px 0 #0000001a` |
| `--ifm-global-shadow-md` | `0 5px 40px #0003` |
| `--ifm-global-shadow-tl` | `0 12px 28px 0 #0003,0 2px 4px 0 #0000001a` |
| `--ifm-z-index-dropdown` | `100` |
| `--ifm-z-index-fixed` | `200` |
| `--ifm-z-index-overlay` | `400` |
| `--ifm-container-width` | `1140px` |
| `--ifm-container-width-xl` | `1320px` |
| `--ifm-code-background` | `#f6f7f8` |
| `--ifm-code-border-radius` | `var(--ifm-global-radius)` |
| `--ifm-code-font-size` | `90%` |
| `--ifm-code-padding-horizontal` | `0.1rem` |
| `--ifm-code-padding-vertical` | `0.1rem` |
| `--ifm-pre-background` | `var(--ifm-code-background)` |
| `--ifm-pre-border-radius` | `var(--ifm-code-border-radius)` |
| `--ifm-pre-color` | `inherit` |
| `--ifm-pre-line-height` | `1.45` |
| `--ifm-pre-padding` | `1rem` |
| `--ifm-heading-color` | `inherit` |
| `--ifm-heading-margin-top` | `0` |
| `--ifm-heading-margin-bottom` | `var(--ifm-spacing-vertical)` |
| `--ifm-heading-font-family` | `var(--ifm-font-family-base)` |
| `--ifm-heading-font-weight` | `var(--ifm-font-weight-bold)` |
| `--ifm-heading-line-height` | `1.25` |
| `--ifm-h1-font-size` | `2rem` |
| `--ifm-h2-font-size` | `1.5rem` |
| `--ifm-h3-font-size` | `1.25rem` |
| `--ifm-h4-font-size` | `1rem` |
| `--ifm-h5-font-size` | `0.875rem` |
| `--ifm-h6-font-size` | `0.85rem` |
| `--ifm-image-alignment-padding` | `1.25rem` |
| `--ifm-leading-desktop` | `1.25` |
| `--ifm-leading` | `calc(var(--ifm-leading-desktop)*1rem)` |
| `--ifm-list-left-padding` | `2rem` |
| `--ifm-list-margin` | `1rem` |
| `--ifm-list-item-margin` | `0.25rem` |
| `--ifm-list-paragraph-margin` | `1rem` |
| `--ifm-table-cell-padding` | `0.75rem` |
| `--ifm-table-background` | `#0000` |
| `--ifm-table-stripe-background` | `#00000008` |
| `--ifm-table-border-width` | `1px` |
| `--ifm-table-border-color` | `var(--ifm-color-emphasis-300)` |
| `--ifm-table-head-background` | `inherit` |
| `--ifm-table-head-color` | `inherit` |
| `--ifm-table-head-font-weight` | `var(--ifm-font-weight-bold)` |
| `--ifm-table-cell-color` | `inherit` |
| `--ifm-link-color` | `var(--ifm-color-primary)` |
| `--ifm-link-decoration` | `none` |
| `--ifm-link-hover-color` | `var(--ifm-link-color)` |
| `--ifm-link-hover-decoration` | `underline` |
| `--ifm-paragraph-margin-bottom` | `var(--ifm-leading)` |
| `--ifm-blockquote-font-size` | `var(--ifm-font-size-base)` |
| `--ifm-blockquote-border-left-width` | `2px` |
| `--ifm-blockquote-padding-horizontal` | `var(--ifm-spacing-horizontal)` |
| `--ifm-blockquote-padding-vertical` | `0` |
| `--ifm-blockquote-shadow` | `none` |
| `--ifm-blockquote-color` | `var(--ifm-color-emphasis-800)` |
| `--ifm-blockquote-border-color` | `var(--ifm-color-emphasis-300)` |
| `--ifm-hr-background-color` | `var(--ifm-color-emphasis-500)` |
| `--ifm-hr-height` | `1px` |
| `--ifm-hr-margin-vertical` | `1.5rem` |
| `--ifm-scrollbar-size` | `7px` |
| `--ifm-scrollbar-track-background-color` | `#f1f1f1` |
| `--ifm-scrollbar-thumb-background-color` | `silver` |
| `--ifm-scrollbar-thumb-hover-background-color` | `#a7a7a7` |
| `--ifm-alert-background-color` | `inherit` |
| `--ifm-alert-border-color` | `inherit` |
| `--ifm-alert-border-radius` | `var(--ifm-global-radius)` |
| `--ifm-alert-border-width` | `0px` |
| `--ifm-alert-border-left-width` | `5px` |
| `--ifm-alert-color` | `var(--ifm-font-color-base)` |
| `--ifm-alert-padding-horizontal` | `var(--ifm-spacing-horizontal)` |
| `--ifm-alert-padding-vertical` | `var(--ifm-spacing-vertical)` |
| `--ifm-alert-shadow` | `var(--ifm-global-shadow-lw)` |
| `--ifm-avatar-intro-margin` | `1rem` |
| `--ifm-avatar-intro-alignment` | `inherit` |
| `--ifm-avatar-photo-size` | `3rem` |
| `--ifm-badge-background-color` | `inherit` |
| `--ifm-badge-border-color` | `inherit` |
| `--ifm-badge-border-radius` | `var(--ifm-global-radius)` |
| `--ifm-badge-border-width` | `var(--ifm-global-border-width)` |
| `--ifm-badge-color` | `var(--ifm-color-white)` |
| `--ifm-badge-padding-horizontal` | `calc(var(--ifm-spacing-horizontal)*0.5)` |
| `--ifm-badge-padding-vertical` | `calc(var(--ifm-spacing-vertical)*0.25)` |
| `--ifm-breadcrumb-border-radius` | `1.5rem` |
| `--ifm-breadcrumb-spacing` | `0.5rem` |
| `--ifm-breadcrumb-color-active` | `var(--ifm-color-primary)` |
| `--ifm-breadcrumb-item-background-active` | `var(--ifm-hover-overlay)` |
| `--ifm-breadcrumb-padding-horizontal` | `0.8rem` |
| `--ifm-breadcrumb-padding-vertical` | `0.4rem` |
| `--ifm-breadcrumb-size-multiplier` | `1` |
| `--ifm-breadcrumb-separator` | `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 256 256"><g><g><polygon points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>')` |
| `--ifm-breadcrumb-separator-filter` | `none` |
| `--ifm-breadcrumb-separator-size` | `0.5rem` |
| `--ifm-breadcrumb-separator-size-multiplier` | `1.25` |
| `--ifm-button-background-color` | `inherit` |
| `--ifm-button-border-color` | `var(--ifm-button-background-color)` |
| `--ifm-button-border-width` | `var(--ifm-global-border-width)` |
| `--ifm-button-font-weight` | `var(--ifm-font-weight-bold)` |
| `--ifm-button-padding-horizontal` | `1.5rem` |
| `--ifm-button-padding-vertical` | `0.375rem` |
| `--ifm-button-size-multiplier` | `1` |
| `--ifm-button-transition-duration` | `var(--ifm-transition-fast)` |
| `--ifm-button-border-radius` | `calc(var(--ifm-global-radius)*var(--ifm-button-size-multiplier))` |
| `--ifm-button-group-spacing` | `2px` |
| `--ifm-card-background-color` | `var(--ifm-background-surface-color)` |
| `--ifm-card-border-radius` | `calc(var(--ifm-global-radius)*2)` |
| `--ifm-card-horizontal-spacing` | `var(--ifm-global-spacing)` |
| `--ifm-card-vertical-spacing` | `var(--ifm-global-spacing)` |
| `--ifm-toc-border-color` | `#e5e7eb` |
| `--ifm-toc-link-color` | `#374151` |
| `--ifm-toc-padding-vertical` | `0.5rem` |
| `--ifm-toc-padding-horizontal` | `0.5rem` |
| `--ifm-dropdown-background-color` | `var(--ifm-background-surface-color)` |
| `--ifm-dropdown-font-weight` | `var(--ifm-font-weight-semibold)` |
| `--ifm-dropdown-link-color` | `var(--ifm-font-color-base)` |
| `--ifm-dropdown-hover-background-color` | `var(--ifm-hover-overlay)` |
| `--ifm-footer-background-color` | `#fff` |
| `--ifm-footer-color` | `inherit` |
| `--ifm-footer-link-color` | `var(--ifm-color-emphasis-700)` |
| `--ifm-footer-link-hover-color` | `var(--ifm-color-primary)` |
| `--ifm-footer-link-horizontal-spacing` | `0.5rem` |
| `--ifm-footer-padding-horizontal` | `calc(var(--ifm-spacing-horizontal)*2)` |
| `--ifm-footer-padding-vertical` | `calc(var(--ifm-spacing-vertical)*2)` |
| `--ifm-footer-title-color` | `inherit` |
| `--ifm-footer-logo-max-width` | `min(30rem,90vw)` |
| `--ifm-hero-background-color` | `var(--ifm-background-surface-color)` |
| `--ifm-hero-text-color` | `var(--ifm-color-emphasis-800)` |
| `--ifm-menu-color` | `var(--ifm-color-emphasis-700)` |
| `--ifm-menu-color-active` | `var(--ifm-color-primary)` |
| `--ifm-menu-color-background-active` | `var(--ifm-hover-overlay)` |
| `--ifm-menu-color-background-hover` | `var(--ifm-hover-overlay)` |
| `--ifm-menu-link-padding-horizontal` | `0.75rem` |
| `--ifm-menu-link-padding-vertical` | `0.375rem` |
| `--ifm-menu-link-sublist-icon` | `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"><path fill="rgba(0,0,0,0.5)" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>')` |
| `--ifm-menu-link-sublist-icon-filter` | `none` |
| `--ifm-navbar-background-color` | `#fff` |
| `--ifm-navbar-height` | `3.75rem` |
| `--ifm-navbar-item-padding-horizontal` | `0.75rem` |
| `--ifm-navbar-item-padding-vertical` | `0.25rem` |
| `--ifm-navbar-link-color` | `var(--ifm-font-color-base)` |
| `--ifm-navbar-link-active-color` | `var(--ifm-link-color)` |
| `--ifm-navbar-padding-horizontal` | `var(--ifm-spacing-horizontal)` |
| `--ifm-navbar-padding-vertical` | `calc(var(--ifm-spacing-vertical)*0.5)` |
| `--ifm-navbar-shadow` | `var(--ifm-global-shadow-lw)` |
| `--ifm-navbar-search-input-background-color` | `var(--ifm-color-emphasis-200)` |
| `--ifm-navbar-search-input-color` | `var(--ifm-color-emphasis-800)` |
| `--ifm-navbar-search-input-placeholder-color` | `var(--ifm-color-emphasis-500)` |
| `--ifm-navbar-search-input-icon` | `url('data:image/svg+xml;utf8,<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="16px" width="16px"><path d="M6.02945,10.20327a4.17382,4.17382,0,1,1,4.17382-4.17382A4.15609,4.15609,0,0,1,6.02945,10.20327Zm9.69195,4.2199L10.8989,9.59979A5.88021,5.88021,0,0,0,12.058,6.02856,6.00467,6.00467,0,1,0,9.59979,10.8989l4.82338,4.82338a.89729.89729,0,0,0,1.29912,0,.89749.89749,0,0,0-.00087-1.29909Z" /></svg>')` |
| `--ifm-navbar-sidebar-width` | `100vw` |
| `--ifm-pagination-border-radius` | `var(--ifm-global-radius)` |
| `--ifm-pagination-color-active` | `var(--ifm-color-primary)` |
| `--ifm-pagination-font-size` | `1rem` |
| `--ifm-pagination-item-active-background` | `var(--ifm-hover-overlay)` |
| `--ifm-pagination-page-spacing` | `0.2em` |
| `--ifm-pagination-padding-horizontal` | `calc(var(--ifm-spacing-horizontal)*1)` |
| `--ifm-pagination-padding-vertical` | `calc(var(--ifm-spacing-vertical)*0.25)` |
| `--ifm-pagination-nav-border-radius` | `var(--ifm-global-radius)` |
| `--ifm-pagination-nav-color-hover` | `var(--ifm-color-primary)` |
| `--ifm-pills-color-active` | `var(--ifm-color-primary)` |
| `--ifm-pills-color-background-active` | `var(--ifm-hover-overlay)` |
| `--ifm-pills-spacing` | `0.125rem` |
| `--ifm-tabs-color` | `var(--ifm-font-color-secondary)` |
| `--ifm-tabs-color-active` | `#10b981` |
| `--ifm-tabs-color-active-border` | `#10b981` |
| `--ifm-tabs-padding-horizontal` | `1rem` |
| `--ifm-tabs-padding-vertical` | `1rem` |
| `--docusaurus-progress-bar-color` | `var(--ifm-color-primary)` |
| `--base` | `16px` |
| `--baseUnitless` | `16` |
| `--color-primary-emerald-filter` | `invert(61%) sepia(69%) saturate(398%) hue-rotate(101deg) brightness(96%) contrast(91%)` |
| `--color-primary-cyan-filter` | `invert(63%) sepia(30%) saturate(1282%) hue-rotate(187deg) brightness(100%) contrast(98%)` |
| `--color-primary-purple-filter` | `invert(52%) sepia(32%) saturate(1261%) hue-rotate(201deg) brightness(100%) contrast(97%)` |
| `--max-page-width` | `1440px` |
| `--color-black2` | `#0a0a0a` |
| `--color-accent` | `#10b981` |
| `--color-muted` | `#6b7280` |
| `--docusaurus-highlighted-code-line-bg` | `#484d5b` |
| `--ifm-font-primary` | `#000` |
| `--docs-content-horizontal-padding` | `3.6rem` |
| `--docs-content-horizontal-padding-mobile` | `1.5rem` |
| `--docs-content-max-width` | `1280px` |
| `--docs-reading-width` | `1000px` |
| `--background` | `0 0% 100%` |
| `--foreground` | `222.2 47.4% 11.2%` |
| `--sidebar-badge-accent-bg` | `#10b9811f` |
| `--sidebar-badge-accent-color` | `#047857` |
| `--muted` | `210 40% 96.1%` |
| `--muted-foreground` | `215.4 16.3% 46.9%` |
| `--popover` | `0 0% 100%` |
| `--popover-foreground` | `222.2 47.4% 11.2%` |
| `--border` | `214.3 31.8% 91.4%` |
| `--input` | `214.3 31.8% 91.4%` |
| `--card` | `0 0% 100%` |
| `--card-foreground` | `222.2 47.4% 11.2%` |
| `--primary` | `222.2 47.4% 11.2%` |
| `--primary-foreground` | `210 40% 98%` |
| `--secondary` | `210 40% 96.1%` |
| `--secondary-foreground` | `222.2 47.4% 11.2%` |
| `--accent` | `210 40% 96.1%` |
| `--accent-foreground` | `222.2 47.4% 11.2%` |
| `--destructive` | `0 100% 50%` |
| `--destructive-foreground` | `210 40% 98%` |
| `--ring` | `215 20.2% 65.1%` |
| `--radius` | `0.5rem` |
| `--docsearch-text-color` | `var(--ifm-font-color-base)` |
| `--docsearch-highlight-color` | `var(--docsearch-primary-color)` |
| `--color-black` | `#000` |
| `--color-yellow` | `#3b82f6` |
| `--color-blue` | `#60a5fa` |
| `--color-purple` | `#818cf8` |
| `--color-white` | `#fff` |
| `--color-red` | `#ef4444` |
| `--color-grey-dark` | `#1f2937` |
| `--typography-h1-d-font-size` | `56px` |
| `--typography-h1-d-text-decoration` | `none` |
| `--typography-h1-d-font-family` | `Inter` |
| `--typography-h1-d-font-weight` | `700` |
| `--typography-h1-d-font-style` | `normal` |
| `--typography-h1-d-font-stretch` | `normal` |
| `--typography-h1-d-letter-spacing` | `-1px` |
| `--typography-h1-d-line-height` | `58px` |
| `--typography-h1-d-paragraph-indent` | `0` |
| `--typography-h1-d-paragraph-spacing` | `0` |
| `--typography-h1-d-text-case` | `none` |
| `--typography-h2-d-font-size` | `24px` |
| `--typography-h2-d-text-decoration` | `none` |
| `--typography-h2-d-font-family` | `Inter` |
| `--typography-h2-d-font-weight` | `700` |
| `--typography-h2-d-font-style` | `normal` |
| `--typography-h2-d-font-stretch` | `normal` |
| `--typography-h2-d-letter-spacing` | `0` |
| `--typography-h2-d-line-height` | `28px` |
| `--typography-h2-d-paragraph-indent` | `0` |
| `--typography-h2-d-paragraph-spacing` | `0` |
| `--typography-h2-d-text-case` | `uppercase` |
| `--typography-body-1-d-font-size` | `16px` |
| `--typography-body-1-d-text-decoration` | `none` |
| `--typography-body-1-d-font-family` | `Inter` |
| `--typography-body-1-d-font-weight` | `400` |
| `--typography-body-1-d-font-style` | `normal` |
| `--typography-body-1-d-font-stretch` | `normal` |
| `--typography-body-1-d-letter-spacing` | `0` |
| `--typography-body-1-d-line-height` | `26px` |
| `--typography-body-1-d-paragraph-indent` | `0` |
| `--typography-body-1-d-paragraph-spacing` | `16px` |
| `--typography-body-1-d-text-case` | `none` |
| `--typography-body-2-d-font-size` | `14px` |
| `--typography-body-2-d-text-decoration` | `none` |
| `--typography-body-2-d-font-family` | `Inter` |
| `--typography-body-2-d-font-weight` | `400` |
| `--typography-body-2-d-font-style` | `normal` |
| `--typography-body-2-d-font-stretch` | `normal` |
| `--typography-body-2-d-letter-spacing` | `0` |
| `--typography-body-2-d-line-height` | `20px` |
| `--typography-body-2-d-paragraph-indent` | `0` |
| `--typography-body-2-d-paragraph-spacing` | `0` |
| `--typography-body-2-d-text-case` | `none` |
| `--typography-links-d-font-size` | `18px` |
| `--typography-links-d-text-decoration` | `none` |
| `--typography-links-d-font-family` | `Inter` |
| `--typography-links-d-font-weight` | `500` |
| `--typography-links-d-font-style` | `normal` |
| `--typography-links-d-font-stretch` | `normal` |
| `--typography-links-d-letter-spacing` | `0` |
| `--typography-links-d-line-height` | `24px` |
| `--typography-links-d-paragraph-indent` | `0` |
| `--typography-links-d-paragraph-spacing` | `0` |
| `--typography-links-d-text-case` | `none` |
| `--typography-input-field-label-d-font-size` | `12px` |
| `--typography-input-field-label-d-text-decoration` | `none` |
| `--typography-input-field-label-d-font-family` | `Inter` |
| `--typography-input-field-label-d-font-weight` | `400` |
| `--typography-input-field-label-d-font-style` | `normal` |
| `--typography-input-field-label-d-font-stretch` | `normal` |
| `--typography-input-field-label-d-letter-spacing` | `0` |
| `--typography-input-field-label-d-line-height` | `12px` |
| `--typography-input-field-label-d-paragraph-indent` | `0` |
| `--typography-input-field-label-d-paragraph-spacing` | `0` |
| `--typography-input-field-label-d-text-case` | `none` |
| `--typography-tags-d-font-size` | `12px` |
| `--typography-tags-d-text-decoration` | `none` |
| `--typography-tags-d-font-family` | `Inter` |
| `--typography-tags-d-font-weight` | `500` |
| `--typography-tags-d-font-style` | `normal` |
| `--typography-tags-d-font-stretch` | `normal` |
| `--typography-tags-d-letter-spacing` | `0` |
| `--typography-tags-d-line-height` | `12px` |
| `--typography-tags-d-paragraph-indent` | `0` |
| `--typography-tags-d-paragraph-spacing` | `0` |
| `--typography-tags-d-text-case` | `none` |
| `--typography-h1-m-font-size` | `32px` |
| `--typography-h1-m-text-decoration` | `none` |
| `--typography-h1-m-font-family` | `Inter` |
| `--typography-h1-m-font-weight` | `700` |
| `--typography-h1-m-font-style` | `normal` |
| `--typography-h1-m-font-stretch` | `normal` |
| `--typography-h1-m-letter-spacing` | `-1px` |
| `--typography-h1-m-line-height` | `38px` |
| `--typography-h1-m-paragraph-indent` | `0` |
| `--typography-h1-m-paragraph-spacing` | `0` |
| `--typography-h1-m-text-case` | `none` |
| `--typography-h2-m-font-size` | `24px` |
| `--typography-h2-m-text-decoration` | `none` |
| `--typography-h2-m-font-family` | `Inter` |
| `--typography-h2-m-font-weight` | `700` |
| `--typography-h2-m-font-style` | `normal` |
| `--typography-h2-m-font-stretch` | `normal` |
| `--typography-h2-m-letter-spacing` | `0` |
| `--typography-h2-m-line-height` | `28px` |
| `--typography-h2-m-paragraph-indent` | `0` |
| `--typography-h2-m-paragraph-spacing` | `0` |
| `--typography-h2-m-text-case` | `uppercase` |
| `--typography-body-1-m-font-size` | `16px` |
| `--typography-body-1-m-text-decoration` | `none` |
| `--typography-body-1-m-font-family` | `Inter` |
| `--typography-body-1-m-font-weight` | `400` |
| `--typography-body-1-m-font-style` | `normal` |
| `--typography-body-1-m-font-stretch` | `normal` |
| `--typography-body-1-m-letter-spacing` | `0` |
| `--typography-body-1-m-line-height` | `26px` |
| `--typography-body-1-m-paragraph-indent` | `0` |
| `--typography-body-1-m-paragraph-spacing` | `16px` |
| `--typography-body-1-m-text-case` | `none` |
| `--typography-body-2-m-font-size` | `12px` |
| `--typography-body-2-m-text-decoration` | `none` |
| `--typography-body-2-m-font-family` | `Inter` |
| `--typography-body-2-m-font-weight` | `400` |
| `--typography-body-2-m-font-style` | `normal` |
| `--typography-body-2-m-font-stretch` | `normal` |
| `--typography-body-2-m-letter-spacing` | `0` |
| `--typography-body-2-m-line-height` | `16px` |
| `--typography-body-2-m-paragraph-indent` | `0` |
| `--typography-body-2-m-paragraph-spacing` | `0` |
| `--typography-body-2-m-text-case` | `none` |
| `--typography-links-m-font-size` | `18px` |
| `--typography-links-m-text-decoration` | `none` |
| `--typography-links-m-font-family` | `Inter` |
| `--typography-links-m-font-weight` | `500` |
| `--typography-links-m-font-style` | `normal` |
| `--typography-links-m-font-stretch` | `normal` |
| `--typography-links-m-letter-spacing` | `0` |
| `--typography-links-m-line-height` | `18px` |
| `--typography-links-m-paragraph-indent` | `0` |
| `--typography-links-m-paragraph-spacing` | `0` |
| `--typography-links-m-text-case` | `none` |
| `--typography-input-field-label-m-font-size` | `12px` |
| `--typography-input-field-label-m-text-decoration` | `none` |
| `--typography-input-field-label-m-font-family` | `Inter` |
| `--typography-input-field-label-m-font-weight` | `400` |
| `--typography-input-field-label-m-font-style` | `normal` |
| `--typography-input-field-label-m-font-stretch` | `normal` |
| `--typography-input-field-label-m-letter-spacing` | `0` |
| `--typography-input-field-label-m-line-height` | `12px` |
| `--typography-input-field-label-m-paragraph-indent` | `0` |
| `--typography-input-field-label-m-paragraph-spacing` | `0` |
| `--typography-input-field-label-m-text-case` | `none` |
| `--typography-tags-m-font-size` | `12px` |
| `--typography-tags-m-text-decoration` | `none` |
| `--typography-tags-m-font-family` | `Inter` |
| `--typography-tags-m-font-weight` | `500` |
| `--typography-tags-m-font-style` | `normal` |
| `--typography-tags-m-font-stretch` | `normal` |
| `--typography-tags-m-letter-spacing` | `0` |
| `--typography-tags-m-line-height` | `12px` |
| `--typography-tags-m-paragraph-indent` | `0` |
| `--typography-tags-m-paragraph-spacing` | `0` |
| `--typography-tags-m-text-case` | `none` |
| `--typography-h3-m-font-size` | `18px` |
| `--typography-h3-m-text-decoration` | `none` |
| `--typography-h3-m-font-family` | `Inter` |
| `--typography-h3-m-font-weight` | `500` |
| `--typography-h3-m-font-style` | `normal` |
| `--typography-h3-m-font-stretch` | `normal` |
| `--typography-h3-m-letter-spacing` | `0` |
| `--typography-h3-m-line-height` | `24px` |
| `--typography-h3-m-paragraph-indent` | `0` |
| `--typography-h3-m-paragraph-spacing` | `0` |
| `--typography-h3-m-text-case` | `none` |
| `--typography-h3-d-font-size` | `18px` |
| `--typography-h3-d-text-decoration` | `none` |
| `--typography-h3-d-font-family` | `Inter` |
| `--typography-h3-d-font-weight` | `500` |
| `--typography-h3-d-font-style` | `normal` |
| `--typography-h3-d-font-stretch` | `normal` |
| `--typography-h3-d-letter-spacing` | `0` |
| `--typography-h3-d-line-height` | `24px` |
| `--typography-h3-d-paragraph-indent` | `0` |
| `--typography-h3-d-paragraph-spacing` | `0` |
| `--typography-h3-d-text-case` | `none` |
| `--typography-h4-d-font-size` | `18px` |
| `--typography-h4-d-text-decoration` | `none` |
| `--typography-h4-d-font-family` | `Inter` |
| `--typography-h4-d-font-weight` | `700` |
| `--typography-h4-d-font-style` | `normal` |
| `--typography-h4-d-font-stretch` | `normal` |
| `--typography-h4-d-letter-spacing` | `0` |
| `--typography-h4-d-line-height` | `26px` |
| `--typography-h4-d-paragraph-indent` | `0` |
| `--typography-h4-d-paragraph-spacing` | `0` |
| `--typography-h4-d-text-case` | `none` |
| `--typography-h4-m-font-size` | `18px` |
| `--typography-h4-m-text-decoration` | `none` |
| `--typography-h4-m-font-family` | `Inter` |
| `--typography-h4-m-font-weight` | `700` |
| `--typography-h4-m-font-style` | `normal` |
| `--typography-h4-m-font-stretch` | `normal` |
| `--typography-h4-m-letter-spacing` | `0` |
| `--typography-h4-m-line-height` | `26px` |
| `--typography-h4-m-paragraph-indent` | `0` |
| `--typography-h4-m-paragraph-spacing` | `0` |
| `--typography-h4-m-text-case` | `none` |
| `--typography-body-1-d-bold-font-size` | `18px` |
| `--typography-body-1-d-bold-text-decoration` | `none` |
| `--typography-body-1-d-bold-font-family` | `Inter` |
| `--typography-body-1-d-bold-font-weight` | `700` |
| `--typography-body-1-d-bold-font-style` | `normal` |
| `--typography-body-1-d-bold-font-stretch` | `normal` |
| `--typography-body-1-d-bold-letter-spacing` | `0` |
| `--typography-body-1-d-bold-line-height` | `26px` |
| `--typography-body-1-d-bold-paragraph-indent` | `0` |
| `--typography-body-1-d-bold-paragraph-spacing` | `16px` |
| `--typography-body-1-d-bold-text-case` | `none` |
| `--typography-body-1-m-bold-font-size` | `18px` |
| `--typography-body-1-m-bold-text-decoration` | `none` |
| `--typography-body-1-m-bold-font-family` | `Inter` |
| `--typography-body-1-m-bold-font-weight` | `700` |
| `--typography-body-1-m-bold-font-style` | `normal` |
| `--typography-body-1-m-bold-font-stretch` | `normal` |
| `--typography-body-1-m-bold-letter-spacing` | `0` |
| `--typography-body-1-m-bold-line-height` | `26px` |
| `--typography-body-1-m-bold-paragraph-indent` | `0` |
| `--typography-body-1-m-bold-paragraph-spacing` | `16px` |
| `--typography-body-1-m-bold-text-case` | `none` |
| `--typography-list-item-bullets-d-font-size` | `18px` |
| `--typography-list-item-bullets-d-text-decoration` | `none` |
| `--typography-list-item-bullets-d-font-family` | `Inter` |
| `--typography-list-item-bullets-d-font-weight` | `400` |
| `--typography-list-item-bullets-d-font-style` | `normal` |
| `--typography-list-item-bullets-d-font-stretch` | `normal` |
| `--typography-list-item-bullets-d-letter-spacing` | `0` |
| `--typography-list-item-bullets-d-line-height` | `26px` |
| `--typography-list-item-bullets-d-paragraph-indent` | `0` |
| `--typography-list-item-bullets-d-paragraph-spacing` | `16px` |
| `--typography-list-item-bullets-d-text-case` | `none` |
| `--typography-list-item-bullets-m-font-size` | `18px` |
| `--typography-list-item-bullets-m-text-decoration` | `none` |
| `--typography-list-item-bullets-m-font-family` | `Inter` |
| `--typography-list-item-bullets-m-font-weight` | `400` |
| `--typography-list-item-bullets-m-font-style` | `normal` |
| `--typography-list-item-bullets-m-font-stretch` | `normal` |
| `--typography-list-item-bullets-m-letter-spacing` | `0` |
| `--typography-list-item-bullets-m-line-height` | `24px` |
| `--typography-list-item-bullets-m-paragraph-indent` | `0` |
| `--typography-list-item-bullets-m-paragraph-spacing` | `16px` |
| `--typography-list-item-bullets-m-text-case` | `none` |
| `--typography-links-d-underline-font-size` | `18px` |
| `--typography-links-d-underline-text-decoration` | `underline` |
| `--typography-links-d-underline-font-family` | `Inter` |
| `--typography-links-d-underline-font-weight` | `500` |
| `--typography-links-d-underline-font-style` | `normal` |
| `--typography-links-d-underline-font-stretch` | `normal` |
| `--typography-links-d-underline-letter-spacing` | `0` |
| `--typography-links-d-underline-line-height` | `26px` |
| `--typography-links-d-underline-paragraph-indent` | `0` |
| `--typography-links-d-underline-paragraph-spacing` | `0` |
| `--typography-links-d-underline-text-case` | `none` |
| `--typography-links-m-underline-font-size` | `18px` |
| `--typography-links-m-underline-text-decoration` | `underline` |
| `--typography-links-m-underline-font-family` | `Inter` |
| `--typography-links-m-underline-font-weight` | `500` |
| `--typography-links-m-underline-font-style` | `normal` |
| `--typography-links-m-underline-font-stretch` | `normal` |
| `--typography-links-m-underline-letter-spacing` | `0` |
| `--typography-links-m-underline-line-height` | `26px` |
| `--typography-links-m-underline-paragraph-indent` | `0` |
| `--typography-links-m-underline-paragraph-spacing` | `0` |
| `--typography-links-m-underline-text-case` | `none` |
| `--typography-list-item-d-font-size` | `18px` |
| `--typography-list-item-d-text-decoration` | `none` |
| `--typography-list-item-d-font-family` | `Inter` |
| `--typography-list-item-d-font-weight` | `500` |
| `--typography-list-item-d-font-style` | `normal` |
| `--typography-list-item-d-font-stretch` | `normal` |
| `--typography-list-item-d-letter-spacing` | `0` |
| `--typography-list-item-d-line-height` | `26px` |
| `--typography-list-item-d-paragraph-indent` | `0` |
| `--typography-list-item-d-paragraph-spacing` | `16px` |
| `--typography-list-item-d-text-case` | `none` |
| `--typography-list-item-m-font-size` | `18px` |
| `--typography-list-item-m-text-decoration` | `none` |
| `--typography-list-item-m-font-family` | `Inter` |
| `--typography-list-item-m-font-weight` | `500` |
| `--typography-list-item-m-font-style` | `normal` |
| `--typography-list-item-m-font-stretch` | `normal` |
| `--typography-list-item-m-letter-spacing` | `0` |
| `--typography-list-item-m-line-height` | `26px` |
| `--typography-list-item-m-paragraph-indent` | `0` |
| `--typography-list-item-m-paragraph-spacing` | `16px` |
| `--typography-list-item-m-text-case` | `none` |
| `--typography-table-headers-d-font-size` | `18px` |
| `--typography-table-headers-d-text-decoration` | `none` |
| `--typography-table-headers-d-font-family` | `Inter` |
| `--typography-table-headers-d-font-weight` | `700` |
| `--typography-table-headers-d-font-style` | `normal` |
| `--typography-table-headers-d-font-stretch` | `normal` |
| `--typography-table-headers-d-letter-spacing` | `0` |
| `--typography-table-headers-d-line-height` | `28px` |
| `--typography-table-headers-d-paragraph-indent` | `0` |
| `--typography-table-headers-d-paragraph-spacing` | `0` |
| `--typography-table-headers-d-text-case` | `uppercase` |
| `--typography-table-headers-m-font-size` | `18px` |
| `--typography-table-headers-m-text-decoration` | `none` |
| `--typography-table-headers-m-font-family` | `Inter` |
| `--typography-table-headers-m-font-weight` | `700` |
| `--typography-table-headers-m-font-style` | `normal` |
| `--typography-table-headers-m-font-stretch` | `normal` |
| `--typography-table-headers-m-letter-spacing` | `0` |
| `--typography-table-headers-m-line-height` | `28px` |
| `--typography-table-headers-m-paragraph-indent` | `0` |
| `--typography-table-headers-m-paragraph-spacing` | `0` |
| `--typography-table-headers-m-text-case` | `uppercase` |
| `--typography-h2-d-medium-font-size` | `24px` |
| `--typography-h2-d-medium-text-decoration` | `none` |
| `--typography-h2-d-medium-font-family` | `Inter` |
| `--typography-h2-d-medium-font-weight` | `500` |
| `--typography-h2-d-medium-font-style` | `normal` |
| `--typography-h2-d-medium-font-stretch` | `normal` |
| `--typography-h2-d-medium-letter-spacing` | `0` |
| `--typography-h2-d-medium-line-height` | `32px` |
| `--typography-h2-d-medium-paragraph-indent` | `0` |
| `--typography-h2-d-medium-paragraph-spacing` | `0` |
| `--typography-h2-d-medium-text-case` | `none` |
| `--typography-h2-m-medium-font-size` | `24px` |
| `--typography-h2-m-medium-text-decoration` | `none` |
| `--typography-h2-m-medium-font-family` | `Inter` |
| `--typography-h2-m-medium-font-weight` | `500` |
| `--typography-h2-m-medium-font-style` | `normal` |
| `--typography-h2-m-medium-font-stretch` | `normal` |
| `--typography-h2-m-medium-letter-spacing` | `0` |
| `--typography-h2-m-medium-line-height` | `32px` |
| `--typography-h2-m-medium-paragraph-indent` | `0` |
| `--typography-h2-m-medium-paragraph-spacing` | `0` |
| `--typography-h2-m-medium-text-case` | `none` |
| `--typography-tags-d-underline-font-size` | `12px` |
| `--typography-tags-d-underline-text-decoration` | `underline` |
| `--typography-tags-d-underline-font-family` | `Inter` |
| `--typography-tags-d-underline-font-weight` | `500` |
| `--typography-tags-d-underline-font-style` | `normal` |
| `--typography-tags-d-underline-font-stretch` | `normal` |
| `--typography-tags-d-underline-letter-spacing` | `0` |
| `--typography-tags-d-underline-line-height` | `12px` |
| `--typography-tags-d-underline-paragraph-indent` | `0` |
| `--typography-tags-d-underline-paragraph-spacing` | `0` |
| `--typography-tags-d-underline-text-case` | `none` |
| `--typography-tags-m-underline-font-size` | `12px` |
| `--typography-tags-m-underline-text-decoration` | `underline` |
| `--typography-tags-m-underline-font-family` | `Inter` |
| `--typography-tags-m-underline-font-weight` | `500` |
| `--typography-tags-m-underline-font-style` | `normal` |
| `--typography-tags-m-underline-font-stretch` | `normal` |
| `--typography-tags-m-underline-letter-spacing` | `0` |
| `--typography-tags-m-underline-line-height` | `12px` |
| `--typography-tags-m-underline-paragraph-indent` | `0` |
| `--typography-tags-m-underline-paragraph-spacing` | `0` |
| `--typography-tags-m-underline-text-case` | `none` |
| `--typography-h3-d-underline-font-size` | `18px` |
| `--typography-h3-d-underline-text-decoration` | `underline` |
| `--typography-h3-d-underline-font-family` | `Inter` |
| `--typography-h3-d-underline-font-weight` | `500` |
| `--typography-h3-d-underline-font-style` | `normal` |
| `--typography-h3-d-underline-font-stretch` | `normal` |
| `--typography-h3-d-underline-letter-spacing` | `0` |
| `--typography-h3-d-underline-line-height` | `24px` |
| `--typography-h3-d-underline-paragraph-indent` | `0` |
| `--typography-h3-d-underline-paragraph-spacing` | `0` |
| `--typography-h3-d-underline-text-case` | `none` |
| `--typography-h3-m-underline-font-size` | `18px` |
| `--typography-h3-m-underline-text-decoration` | `underline` |
| `--typography-h3-m-underline-font-family` | `Inter` |
| `--typography-h3-m-underline-font-weight` | `500` |
| `--typography-h3-m-underline-font-style` | `normal` |
| `--typography-h3-m-underline-font-stretch` | `normal` |
| `--typography-h3-m-underline-letter-spacing` | `0` |
| `--typography-h3-m-underline-line-height` | `24px` |
| `--typography-h3-m-underline-paragraph-indent` | `0` |
| `--typography-h3-m-underline-paragraph-spacing` | `0` |
| `--typography-h3-m-underline-text-case` | `none` |
| `--typography-body-3-m-font-size` | `14px` |
| `--typography-body-3-m-text-decoration` | `none` |
| `--typography-body-3-m-font-family` | `Inter` |
| `--typography-body-3-m-font-weight` | `400` |
| `--typography-body-3-m-font-style` | `normal` |
| `--typography-body-3-m-font-stretch` | `normal` |
| `--typography-body-3-m-letter-spacing` | `0` |
| `--typography-body-3-m-line-height` | `20px` |
| `--typography-body-3-m-paragraph-indent` | `0` |
| `--typography-body-3-m-paragraph-spacing` | `0` |
| `--typography-body-3-m-text-case` | `none` |
| `--typography-h1-t-font-size` | `48px` |
| `--typography-h1-t-text-decoration` | `none` |
| `--typography-h1-t-font-family` | `Inter` |
| `--typography-h1-t-font-weight` | `700` |
| `--typography-h1-t-font-style` | `normal` |
| `--typography-h1-t-font-stretch` | `normal` |
| `--typography-h1-t-letter-spacing` | `-1px` |
| `--typography-h1-t-line-height` | `50px` |
| `--typography-h1-t-paragraph-indent` | `0` |
| `--typography-h1-t-paragraph-spacing` | `0` |
| `--typography-h1-t-text-case` | `none` |
| `--typography-breadcrumbs-d-underline-font-size` | `16px` |
| `--typography-breadcrumbs-d-underline-text-decoration` | `underline` |
| `--typography-breadcrumbs-d-underline-font-family` | `Inter` |
| `--typography-breadcrumbs-d-underline-font-weight` | `400` |
| `--typography-breadcrumbs-d-underline-font-style` | `normal` |
| `--typography-breadcrumbs-d-underline-font-stretch` | `normal` |
| `--typography-breadcrumbs-d-underline-letter-spacing` | `0` |
| `--typography-breadcrumbs-d-underline-line-height` | `20px` |
| `--typography-breadcrumbs-d-underline-paragraph-indent` | `0` |
| `--typography-breadcrumbs-d-underline-paragraph-spacing` | `0` |
| `--typography-breadcrumbs-d-underline-text-case` | `none` |
| `--typography-breadcrumbs-d-font-size` | `16px` |
| `--typography-breadcrumbs-d-text-decoration` | `none` |
| `--typography-breadcrumbs-d-font-family` | `Inter` |
| `--typography-breadcrumbs-d-font-weight` | `400` |
| `--typography-breadcrumbs-d-font-style` | `normal` |
| `--typography-breadcrumbs-d-font-stretch` | `normal` |
| `--typography-breadcrumbs-d-letter-spacing` | `0` |
| `--typography-breadcrumbs-d-line-height` | `20px` |
| `--typography-breadcrumbs-d-paragraph-indent` | `0` |
| `--typography-breadcrumbs-d-paragraph-spacing` | `0` |
| `--typography-breadcrumbs-d-text-case` | `none` |
| `--typography-body-2-links-d-font-size` | `14px` |
| `--typography-body-2-links-d-text-decoration` | `underline` |
| `--typography-body-2-links-d-font-family` | `Inter` |
| `--typography-body-2-links-d-font-weight` | `400` |
| `--typography-body-2-links-d-font-style` | `normal` |
| `--typography-body-2-links-d-font-stretch` | `normal` |
| `--typography-body-2-links-d-letter-spacing` | `0` |
| `--typography-body-2-links-d-line-height` | `20px` |
| `--typography-body-2-links-d-paragraph-indent` | `0` |
| `--typography-body-2-links-d-paragraph-spacing` | `0` |
| `--typography-body-2-links-d-text-case` | `none` |
| `--typography-body-2-links-m-font-size` | `12px` |
| `--typography-body-2-links-m-text-decoration` | `underline` |
| `--typography-body-2-links-m-font-family` | `Inter` |
| `--typography-body-2-links-m-font-weight` | `400` |
| `--typography-body-2-links-m-font-style` | `normal` |
| `--typography-body-2-links-m-font-stretch` | `normal` |
| `--typography-body-2-links-m-letter-spacing` | `0` |
| `--typography-body-2-links-m-line-height` | `16px` |
| `--typography-body-2-links-m-paragraph-indent` | `0` |
| `--typography-body-2-links-m-paragraph-spacing` | `0` |
| `--typography-body-2-links-m-text-case` | `none` |
| `--typography-list-item-numbers-d-font-size` | `18px` |
| `--typography-list-item-numbers-d-text-decoration` | `none` |
| `--typography-list-item-numbers-d-font-family` | `Inter` |
| `--typography-list-item-numbers-d-font-weight` | `400` |
| `--typography-list-item-numbers-d-font-style` | `normal` |
| `--typography-list-item-numbers-d-font-stretch` | `normal` |
| `--typography-list-item-numbers-d-letter-spacing` | `0` |
| `--typography-list-item-numbers-d-line-height` | `26px` |
| `--typography-list-item-numbers-d-paragraph-indent` | `0` |
| `--typography-list-item-numbers-d-paragraph-spacing` | `16px` |
| `--typography-list-item-numbers-d-text-case` | `none` |
| `--typography-body-1-d-italics-font-size` | `18px` |
| `--typography-body-1-d-italics-text-decoration` | `none` |
| `--typography-body-1-d-italics-font-family` | `Inter` |
| `--typography-body-1-d-italics-font-weight` | `400` |
| `--typography-body-1-d-italics-font-style` | `italic` |
| `--typography-body-1-d-italics-font-stretch` | `normal` |
| `--typography-body-1-d-italics-letter-spacing` | `0` |
| `--typography-body-1-d-italics-line-height` | `26px` |
| `--typography-body-1-d-italics-paragraph-indent` | `0` |
| `--typography-body-1-d-italics-paragraph-spacing` | `16px` |
| `--typography-body-1-d-italics-text-case` | `none` |
| `--typography-h5-d-font-size` | `18px` |
| `--typography-h5-d-text-decoration` | `none` |
| `--typography-h5-d-font-family` | `Inter` |
| `--typography-h5-d-font-weight` | `700` |
| `--typography-h5-d-font-style` | `normal` |
| `--typography-h5-d-font-stretch` | `normal` |
| `--typography-h5-d-letter-spacing` | `0` |
| `--typography-h5-d-line-height` | `24px` |
| `--typography-h5-d-paragraph-indent` | `0` |
| `--typography-h5-d-paragraph-spacing` | `0` |
| `--typography-h5-d-text-case` | `uppercase` |
| `--typography-h6-d-font-size` | `18px` |
| `--typography-h6-d-text-decoration` | `none` |
| `--typography-h6-d-font-family` | `Inter` |
| `--typography-h6-d-font-weight` | `500` |
| `--typography-h6-d-font-style` | `normal` |
| `--typography-h6-d-font-stretch` | `normal` |
| `--typography-h6-d-letter-spacing` | `0` |
| `--typography-h6-d-line-height` | `24px` |
| `--typography-h6-d-paragraph-indent` | `0` |
| `--typography-h6-d-paragraph-spacing` | `0` |
| `--typography-h6-d-text-case` | `uppercase` |
| `--typography-h5-m-font-size` | `18px` |
| `--typography-h5-m-text-decoration` | `none` |
| `--typography-h5-m-font-family` | `Inter` |
| `--typography-h5-m-font-weight` | `700` |
| `--typography-h5-m-font-style` | `normal` |
| `--typography-h5-m-font-stretch` | `normal` |
| `--typography-h5-m-letter-spacing` | `0` |
| `--typography-h5-m-line-height` | `24px` |
| `--typography-h5-m-paragraph-indent` | `0` |
| `--typography-h5-m-paragraph-spacing` | `0` |
| `--typography-h5-m-text-case` | `uppercase` |
| `--typography-h6-m-font-size` | `18px` |
| `--typography-h6-m-text-decoration` | `none` |
| `--typography-h6-m-font-family` | `Inter` |
| `--typography-h6-m-font-weight` | `500` |
| `--typography-h6-m-font-style` | `normal` |
| `--typography-h6-m-font-stretch` | `normal` |
| `--typography-h6-m-letter-spacing` | `0` |
| `--typography-h6-m-line-height` | `24px` |
| `--typography-h6-m-paragraph-indent` | `0` |
| `--typography-h6-m-paragraph-spacing` | `0` |
| `--typography-h6-m-text-case` | `uppercase` |
| `--typography-list-item-numbers-m-font-size` | `18px` |
| `--typography-list-item-numbers-m-text-decoration` | `none` |
| `--typography-list-item-numbers-m-font-family` | `Inter` |
| `--typography-list-item-numbers-m-font-weight` | `400` |
| `--typography-list-item-numbers-m-font-style` | `normal` |
| `--typography-list-item-numbers-m-font-stretch` | `normal` |
| `--typography-list-item-numbers-m-letter-spacing` | `0` |
| `--typography-list-item-numbers-m-line-height` | `26px` |
| `--typography-list-item-numbers-m-paragraph-indent` | `0` |
| `--typography-list-item-numbers-m-paragraph-spacing` | `16px` |
| `--typography-list-item-numbers-m-text-case` | `none` |
| `--typography-body-1-m-italics-font-size` | `18px` |
| `--typography-body-1-m-italics-text-decoration` | `none` |
| `--typography-body-1-m-italics-font-family` | `Inter` |
| `--typography-body-1-m-italics-font-weight` | `400` |
| `--typography-body-1-m-italics-font-style` | `italic` |
| `--typography-body-1-m-italics-font-stretch` | `normal` |
| `--typography-body-1-m-italics-letter-spacing` | `0` |
| `--typography-body-1-m-italics-line-height` | `26px` |
| `--typography-body-1-m-italics-paragraph-indent` | `0` |
| `--typography-body-1-m-italics-paragraph-spacing` | `16px` |
| `--typography-body-1-m-italics-text-case` | `none` |
| `--docusaurus-collapse-button-bg` | `#ffffff0d` |
| `--docusaurus-collapse-button-bg-hover` | `#ffffff1a` |
| `--doc-sidebar-width` | `300px` |
| `--doc-sidebar-hidden-width` | `30px` |
| `--docsearch-spacing` | `12px` |
| `--docsearch-icon-stroke-width` | `1.4` |
| `--docsearch-muted-color` | `#969faf` |
| `--docsearch-container-background` | `#656c85cc` |
| `--docsearch-logo-color` | `#5468ff` |
| `--docsearch-modal-width` | `560px` |
| `--docsearch-modal-height` | `600px` |
| `--docsearch-modal-background` | `#f5f6f7` |
| `--docsearch-modal-shadow` | `inset 1px 1px 0 0 #ffffff80,0 3px 8px 0 #555a64` |
| `--docsearch-searchbox-height` | `56px` |
| `--docsearch-searchbox-background` | `#ebedf0` |
| `--docsearch-searchbox-focus-background` | `#fff` |
| `--docsearch-searchbox-shadow` | `inset 0 0 0 2px var(--docsearch-primary-color)` |
| `--docsearch-hit-height` | `56px` |
| `--docsearch-hit-color` | `#444950` |
| `--docsearch-hit-active-color` | `#fff` |
| `--docsearch-hit-background` | `#fff` |
| `--docsearch-hit-shadow` | `0 1px 3px 0 #d4d9e1` |
| `--docsearch-key-gradient` | `linear-gradient(-225deg,#d5dbe4,#f8f8f8)` |
| `--docsearch-key-shadow` | `inset 0 -2px 0 0 #cdcde6,inset 0 0 1px 1px #fff,0 1px 2px 1px #1e235a66` |
| `--docsearch-key-pressed-shadow` | `inset 0 -2px 0 0 #cdcde6,inset 0 0 1px 1px #fff,0 1px 1px 0 #1e235a66` |
| `--docsearch-footer-height` | `44px` |
| `--docsearch-footer-background` | `#fff` |
| `--docsearch-footer-shadow` | `0 -1px 0 0 #e0e3e8,0 -3px 6px 0 #45629b1f` |
| `--docsearch-primary-color` | `var(--ifm-color-primary)` |
| `--docusaurus-announcement-bar-height` | `auto` |
| `--docusaurus-tag-list-border` | `var(--ifm-color-emphasis-300)` |
| `--landing-home-bg` | `#050507` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — VoltAgent - Open Source TypeScript AI Agent Framework
 * Source: https://voltagent.dev/
 * Generated: 18/04/2026, 14:15:38
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-dark-gray: #262626; /* hsl(0, 0%, 15%) · border */
  --color-black: #000000; /* hsl(0, 0%, 0%) · background */
  --color-light-gray: #F2F2F2; /* hsl(0, 0%, 95%) · text */
  --color-white: #FFFFFF; /* hsl(0, 0%, 100%) · text */
  --color-cyan: #10B981; /* hsl(160, 84%, 39%) · background */
  --color-white-2: #F0F6FC; /* hsl(210, 67%, 96%) · text */
  --color-light-gray-2: #B8B3B0; /* hsl(22, 5%, 71%) · text */
  --color-light-gray-3: #DCDCDC; /* hsl(0, 0%, 86%) · text */
  --color-dark-gray-2: #3D3A39; /* hsl(15, 3%, 23%) · border */
  --color-light-gray-4: #E3E3E3; /* hsl(0, 0%, 89%) · text */
  --color-blue: #3B82F6; /* hsl(217, 91%, 60%) · text */
  --color-dark-gray-3: #101010; /* hsl(0, 0%, 6%) · background */
  --color-blue-2: #8B949E; /* hsl(212, 9%, 58%) · text */
  --color-blue-3: #5865F2; /* hsl(235, 86%, 65%) · background */
  --color-dark-gray-4: #1A1A1A; /* hsl(0, 0%, 10%) · background */
  --color-mid-gray: #8A8380; /* hsl(18, 4%, 52%) · text */
  --color-light-red: #FF7B72; /* hsl(4, 100%, 72%) · text */
  --color-blue-4: #0077B5; /* hsl(201, 100%, 35%) · background */
  --color-cyan-2: #00D992; /* hsl(160, 100%, 43%) · background */
  --color-light-gray-5: #EEEEEE; /* hsl(0, 0%, 93%) · text */
  --color-blue-5: #6B7280; /* hsl(220, 9%, 46%) · text */
  --color-blue-6: #9CA3AF; /* hsl(218, 11%, 65%) · text */
  --color-light-blue: #A5D6FF; /* hsl(207, 100%, 82%) · text */
  --color-light-gray-6: #BDBDBD; /* hsl(0, 0%, 74%) · text */
  --color-cyan-3: #2FD6A1; /* hsl(161, 67%, 51%) · text */
  --color-orange: #F59E0B; /* hsl(38, 92%, 50%) · text */
  --color-dark-blue: rgba(55, 65, 81, 0.3); /* hsl(214, 17%, 26%) · border */
  --color-light-gray-7: #D1D5DB; /* hsl(216, 12%, 84%) · text */
  --color-red: #DC2626; /* hsl(0, 72%, 51%) · background */
  --color-blue-7: #007EE5; /* hsl(207, 100%, 45%) · fill */
  --color-light-gray-8: rgba(184, 179, 176, 0.1); /* hsl(0, 6%, 71%) · background */
  --color-light-purple: #D2A8FF; /* hsl(269, 100%, 83%) · text */
  --color-light-blue-2: #93C5FD; /* hsl(212, 96%, 78%) · text */
  --color-cyan-4: #5EEAD4; /* hsl(171, 77%, 64%) · text */
  --color-dark-gray-5: rgba(92, 88, 85, 0.2); /* hsl(60, 3%, 34%) · shadow */
  --color-light-blue-3: #A5B4FC; /* hsl(230, 94%, 82%) · text */
  --color-light-purple-2: #D8B4FE; /* hsl(269, 97%, 85%) · text */
  --color-light-red-2: #FB7185; /* hsl(351, 95%, 71%) · text */
  --color-cyan-5: #6EE7B7; /* hsl(156, 72%, 67%) · text */
  --color-green: #36A852; /* hsl(135, 51%, 44%) · fill */
  --color-dark-green: #1C8140; /* hsl(141, 64%, 31%) · fill */
  --color-blue-8: #557EBF; /* hsl(217, 45%, 54%) · fill */
  --color-dark-blue-2: #4B5563; /* hsl(215, 14%, 34%) · border */
  --color-blue-9: rgba(79, 93, 117, 0.4); /* hsl(221, 19%, 39%) · border */
  --color-blue-10: rgba(88, 101, 242, 0.1); /* hsl(236, 89%, 65%) · background */
  --color-black-2: #050507; /* hsl(240, 17%, 2%) · background */
  --color-dark-gray-6: #5C5855; /* hsl(26, 4%, 35%) · border */
  --color-black-3: #020202; /* hsl(0, 0%, 1%) · background */
  --color-blue-11: rgba(79, 93, 117, 0.25); /* hsl(220, 18%, 38%) · other */
  --color-blue-12: #60A5FA; /* hsl(213, 94%, 68%) · text */
  --color-orange-2: #F9BC15; /* hsl(44, 95%, 53%) · fill */
  --color-red-2: #EA4535; /* hsl(5, 81%, 56%) · fill */
  --color-blue-13: #3968B2; /* hsl(217, 51%, 46%) · fill */
  --color-cyan-6: #00A1E0; /* hsl(197, 100%, 44%) · fill */
  --color-white-3: #FFFFFE; /* hsl(60, 100%, 100%) · fill */
  --color-blue-14: #51A9E3; /* hsl(204, 72%, 60%) · fill */
  --color-dark-blue-3: rgba(55, 65, 81, 0.5); /* hsl(217, 19%, 27%) · border */
  --color-yellow: #FACC15; /* hsl(48, 96%, 53%) · text */
  --color-orange-3: #FCB400; /* hsl(43, 100%, 49%) · fill */
  --color-cyan-7: #18BFFF; /* hsl(197, 100%, 55%) · fill */
  --color-red-3: #F82B60; /* hsl(344, 94%, 57%) · fill */
  --color-red-4: #BA1E45; /* hsl(345, 72%, 42%) · fill */
  --color-cyan-8: #39C5EF; /* hsl(194, 85%, 58%) · fill */
  --color-cyan-9: #2FB77E; /* hsl(155, 59%, 45%) · fill */
  --color-orange-4: #EBB22D; /* hsl(42, 83%, 55%) · fill */
  --color-red-5: #E0225B; /* hsl(342, 75%, 51%) · fill */
  --color-red-6: #EF463D; /* hsl(3, 85%, 59%) · fill */
  --color-blue-15: #427CBF; /* hsl(212, 49%, 50%) · fill */
  --color-dark-cyan: #00AF59; /* hsl(151, 100%, 34%) · fill */
  --color-red-7: #DC2226; /* hsl(359, 73%, 50%) · fill */
  --color-orange-5: #FDB716; /* hsl(42, 98%, 54%) · fill */
  --color-cyan-10: rgba(0, 217, 146, 0.15); /* hsl(161, 100%, 42%) · other */
  --color-black-4: #010409; /* hsl(218, 80%, 2%) · background */
  --color-green-2: #00D600; /* hsl(120, 100%, 42%) · text */
  --color-light-red-3: #FDA4AF; /* hsl(353, 96%, 82%) · text */
  --color-cyan-11: #3ECF8E; /* hsl(153, 60%, 53%) · fill */
  --color-blue-16: rgba(148, 163, 184, 0.1); /* hsl(209, 22%, 65%) · shadow */
  --color-cyan-12: #34D399; /* hsl(158, 64%, 52%) · text */
  --color-cyan-13: #00FFB2; /* hsl(162, 100%, 50%) · fill */
  --color-blue-17: #4F46E5; /* hsl(243, 75%, 59%) · fill */
  --color-cyan-14: rgba(52, 211, 153, 0.7); /* hsl(158, 64%, 52%) · border */
  --color-blue-18: rgba(96, 165, 250, 0.7); /* hsl(213, 93%, 67%) · border */
  --color-orange-6: rgba(245, 158, 11, 0.2); /* hsl(38, 92%, 50%) · shadow */
  --color-dark-orange: rgba(120, 53, 15, 0.3); /* hsl(21, 75%, 27%) · background */
  --color-green-3: #22C55E; /* hsl(142, 71%, 45%) · fill */
  --color-blue-19: #635BFF; /* hsl(243, 100%, 68%) · fill */
  --color-blue-20: #0364B8; /* hsl(208, 97%, 37%) · fill */
  --color-blue-21: #0078D4; /* hsl(206, 100%, 42%) · fill */
  --color-blue-22: #1490DF; /* hsl(203, 84%, 48%) · fill */
  --color-blue-23: #28A8EA; /* hsl(200, 82%, 54%) · fill */
  --color-blue-24: #5059C9; /* hsl(236, 53%, 55%) · fill */
  --color-light-blue-4: #7B83EB; /* hsl(236, 74%, 70%) · fill */
  --color-yellow-2: #FFE01B; /* hsl(52, 100%, 55%) · fill */
  --color-dark-gray-7: #1E1E1E; /* hsl(0, 0%, 12%) · fill */
  --color-dark-cyan-2: #03363D; /* hsl(187, 91%, 13%) · fill */
  --color-blue-25: #0079BF; /* hsl(202, 100%, 37%) · fill */
  --color-blue-26: #4B7BBE; /* hsl(215, 47%, 52%) · fill */
  --color-blue-27: #1F8DED; /* hsl(208, 85%, 53%) · fill */
  --color-red-8: #FF7A59; /* hsl(12, 100%, 67%) · fill */
  --color-cyan-15: #0ACF83; /* hsl(157, 91%, 43%) · fill */
  --color-purple: #A259FF; /* hsl(266, 100%, 67%) · fill */
  --color-red-9: #F24E1E; /* hsl(14, 89%, 53%) · fill */
  --color-red-10: #FF7262; /* hsl(6, 100%, 69%) · fill */
  --color-cyan-16: #1ABCFE; /* hsl(197, 99%, 55%) · fill */
  --color-orange-7: #FF8800; /* hsl(32, 100%, 50%) · fill */
  --color-blue-28: #7856FF; /* hsl(252, 100%, 67%) · fill */
  --color-dark-blue-4: #362D59; /* hsl(252, 33%, 26%) · fill */
  --color-cyan-17: #29B5E8; /* hsl(196, 81%, 54%) · fill */
  --color-cyan-18: rgba(52, 211, 153, 0.1); /* hsl(159, 68%, 52%) · background */
  --color-cyan-19: rgba(52, 211, 153, 0.3); /* hsl(157, 65%, 52%) · shadow */
  --color-cyan-20: rgba(45, 212, 191, 0.7); /* hsl(172, 66%, 51%) · border */
  --color-cyan-21: rgba(45, 212, 191, 0.3); /* hsl(173, 66%, 51%) · shadow */
  --color-light-purple-3: #C084FC; /* hsl(270, 95%, 75%) · text */
  --color-dark-gray-8: rgba(92, 88, 85, 0.3); /* hsl(26, 4%, 35%) · shadow */
  --color-cyan-22: rgba(52, 211, 153, 0.4); /* hsl(158, 64%, 51%) · other */
  --color-blue-29: rgba(96, 165, 250, 0.4); /* hsl(213, 94%, 68%) · other */
  --color-light-red-4: rgba(251, 113, 133, 0.7); /* hsl(352, 95%, 71%) · border */
  --color-light-red-5: rgba(251, 113, 133, 0.4); /* hsl(351, 93%, 71%) · other */
  --color-dark-cyan-3: #39594D; /* hsl(158, 22%, 29%) · fill */
  --color-light-purple-4: #D18EE2; /* hsl(288, 59%, 72%) · fill */
  --color-red-11: #FF7759; /* hsl(11, 100%, 67%) · fill */
  --color-white-4: #F5F6F7; /* hsl(210, 11%, 96%) · text */
  --color-dark-gray-9: #242526; /* hsl(210, 3%, 15%) · background */
  --color-cyan-23: rgba(16, 185, 129, 0.15); /* hsl(159, 87%, 39%) · gradient */
  --color-dark-cyan-4: rgba(5, 150, 105, 0.15); /* hsl(163, 91%, 30%) · gradient */
  --color-white-5: rgba(255, 253, 251, 0.69); /* hsl(45, 100%, 99%) · fill */
  --color-white-6: #F5F5F5; /* hsl(0, 0%, 96%) · text */
  --color-cyan-24: rgba(0, 217, 146, 0.3); /* hsl(160, 100%, 43%) · shadow */
  --color-blue-30: #4F5D75; /* hsl(218, 19%, 38%) · border */
  --color-cyan-25: rgba(0, 217, 146, 0.12); /* hsl(161, 100%, 42%) · gradient */
  --color-cyan-26: rgba(0, 217, 146, 0.04); /* hsl(160, 100%, 45%) · gradient */
  --color-blue-31: #3178C6; /* hsl(211, 60%, 48%) · fill */
  --color-dark-cyan-5: #059669; /* hsl(161, 94%, 30%) · gradient */
  --color-cyan-27: rgba(47, 214, 161, 0.4); /* hsl(160, 68%, 51%) · shadow */
  --color-cyan-28: rgba(47, 214, 161, 0.15); /* hsl(161, 68%, 51%) · shadow */
  --color-cyan-29: rgba(16, 185, 129, 0.1); /* hsl(159, 81%, 40%) · background */
  --color-blue-32: rgba(94, 96, 226, 0.11); /* hsl(236, 72%, 63%) · background */
  --color-light-blue-5: rgba(129, 140, 248, 0.7); /* hsl(235, 89%, 74%) · border */
  --color-blue-33: rgba(96, 165, 250, 0.5); /* hsl(213, 93%, 68%) · shadow */
  --color-blue-34: rgba(59, 130, 246, 0.1); /* hsl(218, 90%, 60%) · background */
  --color-cyan-30: rgba(20, 184, 166, 0.1); /* hsl(173, 81%, 40%) · background */
  --color-purple-2: rgba(168, 85, 247, 0.3); /* hsl(271, 92%, 65%) · shadow */
  --color-purple-3: rgba(168, 85, 247, 0.1); /* hsl(270, 89%, 65%) · background */
  --color-green-4: #4ADE80; /* hsl(142, 69%, 58%) · text */
  --color-cyan-31: #2DD4BF; /* hsl(172, 66%, 50%) · text */
  --color-light-red-6: rgba(251, 113, 133, 0.5); /* hsl(352, 94%, 72%) · shadow */
  --color-blue-35: rgba(96, 165, 250, 0.3); /* hsl(212, 92%, 67%) · shadow */
  --color-blue-36: #336791; /* hsl(207, 48%, 38%) · fill */

  /* ── Core: Typography ── */
  --font-size-2xs: 11px;
  --font-size-xs: 12px;
  --font-size-sm: 13px;
  --font-size-base: 13.3333px;
  --font-size-lg: 14px;
  --font-size-xl: 14.45px;
  --font-size-2xl: 16px;
  --font-size-3xl: 17px;
  --font-size-4xl: 18px;
  --font-size-5xl: 20px;
  --font-size-6xl: 24px;
  --font-size-36px: 36px;
  --font-size-60px: 60px;
  --font-family-base: Inter;
  --font-family-2: system-ui;
  --font-family-3: monospace;
  --font-family-4: Arial;
  --font-family-5: SFMono-Regular;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-tight: 15.95px;
  --line-height-snug: 18.2px;
  --line-height-normal: 20px;
  --line-height-relaxed: 21.45px;
  --line-height-loose: 23.1px;
  --line-height-lh-6: 23.8425px;
  --line-height-lh-7: 26.4px;
  --line-height-lh-8: 28px;
  --line-height-lh-9: 32px;
  --line-height-lh-10: 39.6px;
  --line-height-lh-11: 60px;
  --letter-spacing-tight: -0.9px;
  --letter-spacing-normal: -0.8px;
  --letter-spacing-wide: -0.7px;
  --letter-spacing-wider: -0.65px;
  --letter-spacing-widest: -0.6px;
  --letter-spacing-ls-6: -0.4px;
  --letter-spacing-ls-7: 0.45px;
  --letter-spacing-ls-8: 0.5px;
  --letter-spacing-ls-9: 2.52px;

  /* ── Layout: Spacing ── */
  --space-1: 2px;
  --space-2: 4px;
  --space-3: 5px;
  --space-4: 6px;
  --space-5: 7px;
  --space-6: 8px;
  --space-8: 12px;
  --space-10: 16px;
  --space-12: 20px;
  --space-16: 24px;
  --space-20: 28px;
  --space-24: 32px;
  --space-32: 40px;
  --space-40: 48px;
  --space-48: 64px;
  --space-64: 80px;
  --space-80: 96px;
  --space-96: 144px;

  /* ── Borders ── */
  --border-width-hairline: 1px;
  --border-width-thin: 1.5px;
  --border-width-base: 2px;
  --radius-sm: 0px 4px 4px 0px;
  --radius-md: 2px;
  --radius-lg: 4px;
  --radius-xl: 6px;
  --radius-2xl: 6.4px;
  --radius-full: 8px;
  --radius-r7: 8px 8px 0px 0px;
  --radius-r8: 9999px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(92, 88, 85, 0.2) 0px 0px 15px 0px;
  --shadow-md: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.7) 0px 20px 60px 0px, rgba(148, 163, 184, 0.1) 0px 0px 0px 1px inset;
  --shadow-lg: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(245, 158, 11, 0.2) 0px 0px 15px 0px;
  --shadow-xl: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(52, 211, 153, 0.3) 0px 0px 15px 0px;
  --shadow-shadow-5: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(45, 212, 191, 0.3) 0px 0px 15px 0px;
  --shadow-shadow-6: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(92, 88, 85, 0.3) 0px 0px 15px 0px;

  /* ── Motion ── */
  --duration-instant: 0.15s;
  --duration-fast: 0.2s;
  --duration-normal: 0.3s;
  --duration-slow: 0.5s;
  --duration-slower: 0.7s;
  --easing-ease-in-out: ease-in-out;

  /* ── Layout: Z-Index ── */
  --z-1: -1;
  --z-2: 1;
  --z-3: 2;
  --z-4: 3;
  --z-5: 10;
  --z-6: 20;
  --z-7: 50;
  --z-8: 201;
  --z-9: 1000;

  /* ── Breakpoints ── */
  --breakpoint-xs: 360px;
  --breakpoint-sm: 420px;
  --breakpoint-md: 576px;
  --breakpoint-lg: 640px;
  --breakpoint-xl: 720px;
  --breakpoint-2xl: 767px;
  --breakpoint-3xl: 768px;
  --breakpoint-bp-8: 960px;
  --breakpoint-bp-9: 975px;
  --breakpoint-bp-10: 996px;
  --breakpoint-bp-11: 997px;
  --breakpoint-bp-12: 1000px;
  --breakpoint-bp-13: 1024px;
  --breakpoint-bp-14: 1025px;
  --breakpoint-bp-15: 1100px;
  --breakpoint-bp-16: 1160px;
  --breakpoint-bp-17: 1200px;
  --breakpoint-bp-18: 1270px;
  --breakpoint-bp-19: 1280px;
  --breakpoint-bp-20: 1296px;
  --breakpoint-bp-21: 1440px;
  --breakpoint-bp-22: 1584px;
  --breakpoint-bp-23: 1992px;

  /* ── Opacity ── */
  --opacity-10: 0.1;
  --opacity-15: 0.15;
  --opacity-20: 0.2;
  --opacity-30: 0.3;
  --opacity-42: 0.42;
  --opacity-50: 0.5;
  --opacity-60: 0.6;
  --opacity-63: 0.63;
  --opacity-80: 0.8;
  --opacity-90: 0.9;
  --opacity-94: 0.94;
  --opacity-99: 0.99;
}
```

---

## Machine-Readable Tokens — DTCG JSON

W3C Design Tokens Community Group format. Compatible with Figma Tokens, Style Dictionary, and similar pipelines.

```json
{
  "$metadata": {
    "source": "https://voltagent.dev/",
    "title": "VoltAgent - Open Source TypeScript AI Agent Framework",
    "generatedAt": "2026-04-18T08:45:38.264Z"
  },
  "core": {
    "color": {
      "dark-gray": {
        "$value": "#262626",
        "$type": "color",
        "$description": "border · ×4550"
      },
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "background · ×2728"
      },
      "light-gray": {
        "$value": "#F2F2F2",
        "$type": "color",
        "$description": "text · ×1612"
      },
      "white": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "text · ×1341"
      },
      "cyan": {
        "$value": "#10B981",
        "$type": "color",
        "$description": "background · ×867"
      },
      "white-2": {
        "$value": "#F0F6FC",
        "$type": "color",
        "$description": "text · ×381"
      },
      "light-gray-2": {
        "$value": "#B8B3B0",
        "$type": "color",
        "$description": "text · ×320"
      },
      "light-gray-3": {
        "$value": "#DCDCDC",
        "$type": "color",
        "$description": "text · ×229"
      },
      "dark-gray-2": {
        "$value": "#3D3A39",
        "$type": "color",
        "$description": "border · ×223"
      },
      "light-gray-4": {
        "$value": "#E3E3E3",
        "$type": "color",
        "$description": "text · ×174"
      },
      "blue": {
        "$value": "#3B82F6",
        "$type": "color",
        "$description": "text · ×144"
      },
      "dark-gray-3": {
        "$value": "#101010",
        "$type": "color",
        "$description": "background · ×133"
      },
      "blue-2": {
        "$value": "#8B949E",
        "$type": "color",
        "$description": "text · ×128"
      },
      "blue-3": {
        "$value": "#5865F2",
        "$type": "color",
        "$description": "background · ×124"
      },
      "dark-gray-4": {
        "$value": "#1A1A1A",
        "$type": "color",
        "$description": "background · ×107"
      },
      "mid-gray": {
        "$value": "#8A8380",
        "$type": "color",
        "$description": "text · ×84"
      },
      "light-red": {
        "$value": "#FF7B72",
        "$type": "color",
        "$description": "text · ×82"
      },
      "blue-4": {
        "$value": "#0077B5",
        "$type": "color",
        "$description": "background · ×76"
      },
      "cyan-2": {
        "$value": "#00D992",
        "$type": "color",
        "$description": "background · ×72"
      },
      "light-gray-5": {
        "$value": "#EEEEEE",
        "$type": "color",
        "$description": "text · ×69"
      },
      "blue-5": {
        "$value": "#6B7280",
        "$type": "color",
        "$description": "text · ×67"
      },
      "blue-6": {
        "$value": "#9CA3AF",
        "$type": "color",
        "$description": "text · ×59"
      },
      "light-blue": {
        "$value": "#A5D6FF",
        "$type": "color",
        "$description": "text · ×53"
      },
      "light-gray-6": {
        "$value": "#BDBDBD",
        "$type": "color",
        "$description": "text · ×34"
      },
      "cyan-3": {
        "$value": "#2FD6A1",
        "$type": "color",
        "$description": "text · ×29"
      },
      "orange": {
        "$value": "#F59E0B",
        "$type": "color",
        "$description": "text · ×29"
      },
      "dark-blue": {
        "$value": "rgba(55, 65, 81, 0.3)",
        "$type": "color",
        "$description": "border · ×28"
      },
      "light-gray-7": {
        "$value": "#D1D5DB",
        "$type": "color",
        "$description": "text · ×26"
      },
      "red": {
        "$value": "#DC2626",
        "$type": "color",
        "$description": "background · ×20"
      },
      "blue-7": {
        "$value": "#007EE5",
        "$type": "color",
        "$description": "fill · ×18"
      },
      "light-gray-8": {
        "$value": "rgba(184, 179, 176, 0.1)",
        "$type": "color",
        "$description": "background · ×16"
      },
      "light-purple": {
        "$value": "#D2A8FF",
        "$type": "color",
        "$description": "text · ×15"
      },
      "light-blue-2": {
        "$value": "#93C5FD",
        "$type": "color",
        "$description": "text · ×15"
      },
      "cyan-4": {
        "$value": "#5EEAD4",
        "$type": "color",
        "$description": "text · ×15"
      },
      "dark-gray-5": {
        "$value": "rgba(92, 88, 85, 0.2)",
        "$type": "color",
        "$description": "shadow · ×13"
      },
      "light-blue-3": {
        "$value": "#A5B4FC",
        "$type": "color",
        "$description": "text · ×10"
      },
      "light-purple-2": {
        "$value": "#D8B4FE",
        "$type": "color",
        "$description": "text · ×10"
      },
      "light-red-2": {
        "$value": "#FB7185",
        "$type": "color",
        "$description": "text · ×10"
      },
      "cyan-5": {
        "$value": "#6EE7B7",
        "$type": "color",
        "$description": "text · ×9"
      },
      "green": {
        "$value": "#36A852",
        "$type": "color",
        "$description": "fill · ×9"
      },
      "dark-green": {
        "$value": "#1C8140",
        "$type": "color",
        "$description": "fill · ×9"
      },
      "blue-8": {
        "$value": "#557EBF",
        "$type": "color",
        "$description": "fill · ×9"
      },
      "dark-blue-2": {
        "$value": "#4B5563",
        "$type": "color",
        "$description": "border · ×8"
      },
      "blue-9": {
        "$value": "rgba(79, 93, 117, 0.4)",
        "$type": "color",
        "$description": "border · ×8"
      },
      "blue-10": {
        "$value": "rgba(88, 101, 242, 0.1)",
        "$type": "color",
        "$description": "background · ×8"
      },
      "black-2": {
        "$value": "#050507",
        "$type": "color",
        "$description": "background · ×7"
      },
      "dark-gray-6": {
        "$value": "#5C5855",
        "$type": "color",
        "$description": "border · ×7"
      },
      "black-3": {
        "$value": "#020202",
        "$type": "color",
        "$description": "background · ×6"
      },
      "blue-11": {
        "$value": "rgba(79, 93, 117, 0.25)",
        "$type": "color",
        "$description": "other · ×6"
      },
      "blue-12": {
        "$value": "#60A5FA",
        "$type": "color",
        "$description": "text · ×6"
      },
      "orange-2": {
        "$value": "#F9BC15",
        "$type": "color",
        "$description": "fill · ×6"
      },
      "red-2": {
        "$value": "#EA4535",
        "$type": "color",
        "$description": "fill · ×6"
      },
      "blue-13": {
        "$value": "#3968B2",
        "$type": "color",
        "$description": "fill · ×6"
      },
      "cyan-6": {
        "$value": "#00A1E0",
        "$type": "color",
        "$description": "fill · ×6"
      },
      "white-3": {
        "$value": "#FFFFFE",
        "$type": "color",
        "$description": "fill · ×6"
      },
      "blue-14": {
        "$value": "#51A9E3",
        "$type": "color",
        "$description": "fill · ×6"
      },
      "dark-blue-3": {
        "$value": "rgba(55, 65, 81, 0.5)",
        "$type": "color",
        "$description": "border · ×5"
      },
      "yellow": {
        "$value": "#FACC15",
        "$type": "color",
        "$description": "text · ×4"
      },
      "orange-3": {
        "$value": "#FCB400",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "cyan-7": {
        "$value": "#18BFFF",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "red-3": {
        "$value": "#F82B60",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "red-4": {
        "$value": "#BA1E45",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "cyan-8": {
        "$value": "#39C5EF",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "cyan-9": {
        "$value": "#2FB77E",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "orange-4": {
        "$value": "#EBB22D",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "red-5": {
        "$value": "#E0225B",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "red-6": {
        "$value": "#EF463D",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "blue-15": {
        "$value": "#427CBF",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "dark-cyan": {
        "$value": "#00AF59",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "red-7": {
        "$value": "#DC2226",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "orange-5": {
        "$value": "#FDB716",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "cyan-10": {
        "$value": "rgba(0, 217, 146, 0.15)",
        "$type": "color",
        "$description": "other · ×4"
      },
      "black-4": {
        "$value": "#010409",
        "$type": "color",
        "$description": "background · ×4"
      },
      "green-2": {
        "$value": "#00D600",
        "$type": "color",
        "$description": "text · ×4"
      },
      "light-red-3": {
        "$value": "#FDA4AF",
        "$type": "color",
        "$description": "text · ×4"
      },
      "cyan-11": {
        "$value": "#3ECF8E",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "blue-16": {
        "$value": "rgba(148, 163, 184, 0.1)",
        "$type": "color",
        "$description": "shadow · ×3"
      },
      "cyan-12": {
        "$value": "#34D399",
        "$type": "color",
        "$description": "text · ×3"
      },
      "cyan-13": {
        "$value": "#00FFB2",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "blue-17": {
        "$value": "#4F46E5",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "cyan-14": {
        "$value": "rgba(52, 211, 153, 0.7)",
        "$type": "color",
        "$description": "border · ×3"
      },
      "blue-18": {
        "$value": "rgba(96, 165, 250, 0.7)",
        "$type": "color",
        "$description": "border · ×3"
      },
      "orange-6": {
        "$value": "rgba(245, 158, 11, 0.2)",
        "$type": "color",
        "$description": "shadow · ×3"
      },
      "dark-orange": {
        "$value": "rgba(120, 53, 15, 0.3)",
        "$type": "color",
        "$description": "background · ×3"
      },
      "green-3": {
        "$value": "#22C55E",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "blue-19": {
        "$value": "#635BFF",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "blue-20": {
        "$value": "#0364B8",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "blue-21": {
        "$value": "#0078D4",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "blue-22": {
        "$value": "#1490DF",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "blue-23": {
        "$value": "#28A8EA",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "blue-24": {
        "$value": "#5059C9",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "light-blue-4": {
        "$value": "#7B83EB",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "yellow-2": {
        "$value": "#FFE01B",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-gray-7": {
        "$value": "#1E1E1E",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-cyan-2": {
        "$value": "#03363D",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "blue-25": {
        "$value": "#0079BF",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "blue-26": {
        "$value": "#4B7BBE",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "blue-27": {
        "$value": "#1F8DED",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "red-8": {
        "$value": "#FF7A59",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "cyan-15": {
        "$value": "#0ACF83",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "purple": {
        "$value": "#A259FF",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "red-9": {
        "$value": "#F24E1E",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "red-10": {
        "$value": "#FF7262",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "cyan-16": {
        "$value": "#1ABCFE",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "orange-7": {
        "$value": "#FF8800",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "blue-28": {
        "$value": "#7856FF",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-blue-4": {
        "$value": "#362D59",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "cyan-17": {
        "$value": "#29B5E8",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "cyan-18": {
        "$value": "rgba(52, 211, 153, 0.1)",
        "$type": "color",
        "$description": "background · ×2"
      },
      "cyan-19": {
        "$value": "rgba(52, 211, 153, 0.3)",
        "$type": "color",
        "$description": "shadow · ×2"
      },
      "cyan-20": {
        "$value": "rgba(45, 212, 191, 0.7)",
        "$type": "color",
        "$description": "border · ×2"
      },
      "cyan-21": {
        "$value": "rgba(45, 212, 191, 0.3)",
        "$type": "color",
        "$description": "shadow · ×2"
      },
      "light-purple-3": {
        "$value": "#C084FC",
        "$type": "color",
        "$description": "text · ×2"
      },
      "dark-gray-8": {
        "$value": "rgba(92, 88, 85, 0.3)",
        "$type": "color",
        "$description": "shadow · ×2"
      },
      "cyan-22": {
        "$value": "rgba(52, 211, 153, 0.4)",
        "$type": "color",
        "$description": "other · ×2"
      },
      "blue-29": {
        "$value": "rgba(96, 165, 250, 0.4)",
        "$type": "color",
        "$description": "other · ×2"
      },
      "light-red-4": {
        "$value": "rgba(251, 113, 133, 0.7)",
        "$type": "color",
        "$description": "border · ×2"
      },
      "light-red-5": {
        "$value": "rgba(251, 113, 133, 0.4)",
        "$type": "color",
        "$description": "other · ×2"
      },
      "dark-cyan-3": {
        "$value": "#39594D",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "light-purple-4": {
        "$value": "#D18EE2",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "red-11": {
        "$value": "#FF7759",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "white-4": {
        "$value": "#F5F6F7",
        "$type": "color",
        "$description": "text · ×1"
      },
      "dark-gray-9": {
        "$value": "#242526",
        "$type": "color",
        "$description": "background · ×1"
      },
      "cyan-23": {
        "$value": "rgba(16, 185, 129, 0.15)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "dark-cyan-4": {
        "$value": "rgba(5, 150, 105, 0.15)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "white-5": {
        "$value": "rgba(255, 253, 251, 0.69)",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "white-6": {
        "$value": "#F5F5F5",
        "$type": "color",
        "$description": "text · ×1"
      },
      "cyan-24": {
        "$value": "rgba(0, 217, 146, 0.3)",
        "$type": "color",
        "$description": "shadow · ×1"
      },
      "blue-30": {
        "$value": "#4F5D75",
        "$type": "color",
        "$description": "border · ×1"
      },
      "cyan-25": {
        "$value": "rgba(0, 217, 146, 0.12)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "cyan-26": {
        "$value": "rgba(0, 217, 146, 0.04)",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "blue-31": {
        "$value": "#3178C6",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-cyan-5": {
        "$value": "#059669",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "cyan-27": {
        "$value": "rgba(47, 214, 161, 0.4)",
        "$type": "color",
        "$description": "shadow · ×1"
      },
      "cyan-28": {
        "$value": "rgba(47, 214, 161, 0.15)",
        "$type": "color",
        "$description": "shadow · ×1"
      },
      "cyan-29": {
        "$value": "rgba(16, 185, 129, 0.1)",
        "$type": "color",
        "$description": "background · ×1"
      },
      "blue-32": {
        "$value": "rgba(94, 96, 226, 0.11)",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-blue-5": {
        "$value": "rgba(129, 140, 248, 0.7)",
        "$type": "color",
        "$description": "border · ×1"
      },
      "blue-33": {
        "$value": "rgba(96, 165, 250, 0.5)",
        "$type": "color",
        "$description": "shadow · ×1"
      },
      "blue-34": {
        "$value": "rgba(59, 130, 246, 0.1)",
        "$type": "color",
        "$description": "background · ×1"
      },
      "cyan-30": {
        "$value": "rgba(20, 184, 166, 0.1)",
        "$type": "color",
        "$description": "background · ×1"
      },
      "purple-2": {
        "$value": "rgba(168, 85, 247, 0.3)",
        "$type": "color",
        "$description": "shadow · ×1"
      },
      "purple-3": {
        "$value": "rgba(168, 85, 247, 0.1)",
        "$type": "color",
        "$description": "background · ×1"
      },
      "green-4": {
        "$value": "#4ADE80",
        "$type": "color",
        "$description": "text · ×1"
      },
      "cyan-31": {
        "$value": "#2DD4BF",
        "$type": "color",
        "$description": "text · ×1"
      },
      "light-red-6": {
        "$value": "rgba(251, 113, 133, 0.5)",
        "$type": "color",
        "$description": "shadow · ×1"
      },
      "blue-35": {
        "$value": "rgba(96, 165, 250, 0.3)",
        "$type": "color",
        "$description": "shadow · ×1"
      },
      "blue-36": {
        "$value": "#336791",
        "$type": "color",
        "$description": "fill · ×1"
      }
    },
    "fontSize": {
      "font-size-2xs": {
        "$value": "11px",
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
        "$value": "13.3333px",
        "$type": "dimension"
      },
      "font-size-lg": {
        "$value": "14px",
        "$type": "dimension"
      },
      "font-size-xl": {
        "$value": "14.45px",
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
      "font-size-36px": {
        "$value": "36px",
        "$type": "dimension"
      },
      "font-size-60px": {
        "$value": "60px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "Inter",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "system-ui",
        "$type": "fontFamily"
      },
      "font-family-3": {
        "$value": "monospace",
        "$type": "fontFamily"
      },
      "font-family-4": {
        "$value": "Arial",
        "$type": "fontFamily"
      },
      "font-family-5": {
        "$value": "SFMono-Regular",
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
        "$value": "15.95px",
        "$type": "dimension"
      },
      "line-height-snug": {
        "$value": "18.2px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "20px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "21.45px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "23.1px",
        "$type": "dimension"
      },
      "line-height-lh-6": {
        "$value": "23.8425px",
        "$type": "dimension"
      },
      "line-height-lh-7": {
        "$value": "26.4px",
        "$type": "dimension"
      },
      "line-height-lh-8": {
        "$value": "28px",
        "$type": "dimension"
      },
      "line-height-lh-9": {
        "$value": "32px",
        "$type": "dimension"
      },
      "line-height-lh-10": {
        "$value": "39.6px",
        "$type": "dimension"
      },
      "line-height-lh-11": {
        "$value": "60px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "-0.9px",
        "$type": "dimension"
      },
      "letter-spacing-normal": {
        "$value": "-0.8px",
        "$type": "dimension"
      },
      "letter-spacing-wide": {
        "$value": "-0.7px",
        "$type": "dimension"
      },
      "letter-spacing-wider": {
        "$value": "-0.65px",
        "$type": "dimension"
      },
      "letter-spacing-widest": {
        "$value": "-0.6px",
        "$type": "dimension"
      },
      "letter-spacing-ls-6": {
        "$value": "-0.4px",
        "$type": "dimension"
      },
      "letter-spacing-ls-7": {
        "$value": "0.45px",
        "$type": "dimension"
      },
      "letter-spacing-ls-8": {
        "$value": "0.5px",
        "$type": "dimension"
      },
      "letter-spacing-ls-9": {
        "$value": "2.52px",
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
        "$value": "5px",
        "$type": "dimension"
      },
      "space-4": {
        "$value": "6px",
        "$type": "dimension"
      },
      "space-5": {
        "$value": "7px",
        "$type": "dimension"
      },
      "space-6": {
        "$value": "8px",
        "$type": "dimension"
      },
      "space-8": {
        "$value": "12px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "16px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "20px",
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
        "$value": "40px",
        "$type": "dimension"
      },
      "space-40": {
        "$value": "48px",
        "$type": "dimension"
      },
      "space-48": {
        "$value": "64px",
        "$type": "dimension"
      },
      "space-64": {
        "$value": "80px",
        "$type": "dimension"
      },
      "space-80": {
        "$value": "96px",
        "$type": "dimension"
      },
      "space-96": {
        "$value": "144px",
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
        "$value": "10",
        "$type": "number"
      },
      "z-6": {
        "$value": "20",
        "$type": "number"
      },
      "z-7": {
        "$value": "50",
        "$type": "number"
      },
      "z-8": {
        "$value": "201",
        "$type": "number"
      },
      "z-9": {
        "$value": "1000",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "360px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "420px",
        "$type": "dimension"
      },
      "breakpoint-md": {
        "$value": "576px",
        "$type": "dimension"
      },
      "breakpoint-lg": {
        "$value": "640px",
        "$type": "dimension"
      },
      "breakpoint-xl": {
        "$value": "720px",
        "$type": "dimension"
      },
      "breakpoint-2xl": {
        "$value": "767px",
        "$type": "dimension"
      },
      "breakpoint-3xl": {
        "$value": "768px",
        "$type": "dimension"
      },
      "breakpoint-bp-8": {
        "$value": "960px",
        "$type": "dimension"
      },
      "breakpoint-bp-9": {
        "$value": "975px",
        "$type": "dimension"
      },
      "breakpoint-bp-10": {
        "$value": "996px",
        "$type": "dimension"
      },
      "breakpoint-bp-11": {
        "$value": "997px",
        "$type": "dimension"
      },
      "breakpoint-bp-12": {
        "$value": "1000px",
        "$type": "dimension"
      },
      "breakpoint-bp-13": {
        "$value": "1024px",
        "$type": "dimension"
      },
      "breakpoint-bp-14": {
        "$value": "1025px",
        "$type": "dimension"
      },
      "breakpoint-bp-15": {
        "$value": "1100px",
        "$type": "dimension"
      },
      "breakpoint-bp-16": {
        "$value": "1160px",
        "$type": "dimension"
      },
      "breakpoint-bp-17": {
        "$value": "1200px",
        "$type": "dimension"
      },
      "breakpoint-bp-18": {
        "$value": "1270px",
        "$type": "dimension"
      },
      "breakpoint-bp-19": {
        "$value": "1280px",
        "$type": "dimension"
      },
      "breakpoint-bp-20": {
        "$value": "1296px",
        "$type": "dimension"
      },
      "breakpoint-bp-21": {
        "$value": "1440px",
        "$type": "dimension"
      },
      "breakpoint-bp-22": {
        "$value": "1584px",
        "$type": "dimension"
      },
      "breakpoint-bp-23": {
        "$value": "1992px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
        "$value": "0px 4px 4px 0px",
        "$type": "dimension"
      },
      "radius-md": {
        "$value": "2px",
        "$type": "dimension"
      },
      "radius-lg": {
        "$value": "4px",
        "$type": "dimension"
      },
      "radius-xl": {
        "$value": "6px",
        "$type": "dimension"
      },
      "radius-2xl": {
        "$value": "6.4px",
        "$type": "dimension"
      },
      "radius-full": {
        "$value": "8px",
        "$type": "dimension"
      },
      "radius-r7": {
        "$value": "8px 8px 0px 0px",
        "$type": "dimension"
      },
      "radius-r8": {
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
        "$value": "1.5px",
        "$type": "dimension"
      },
      "border-width-base": {
        "$value": "2px",
        "$type": "dimension"
      }
    },
    "shadow": {
      "shadow-sm": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(92, 88, 85, 0.2) 0px 0px 15px 0px",
        "$type": "shadow"
      },
      "shadow-md": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.7) 0px 20px 60px 0px, rgba(148, 163, 184, 0.1) 0px 0px 0px 1px inset",
        "$type": "shadow"
      },
      "shadow-lg": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(245, 158, 11, 0.2) 0px 0px 15px 0px",
        "$type": "shadow"
      },
      "shadow-xl": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(52, 211, 153, 0.3) 0px 0px 15px 0px",
        "$type": "shadow"
      },
      "shadow-shadow-5": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(45, 212, 191, 0.3) 0px 0px 15px 0px",
        "$type": "shadow"
      },
      "shadow-shadow-6": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(92, 88, 85, 0.3) 0px 0px 15px 0px",
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
    "opacity-15": {
      "$value": 0.15,
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
    "opacity-42": {
      "$value": 0.42,
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
    "opacity-63": {
      "$value": 0.63,
      "$type": "number"
    },
    "opacity-80": {
      "$value": 0.8,
      "$type": "number"
    },
    "opacity-90": {
      "$value": 0.9,
      "$type": "number"
    },
    "opacity-94": {
      "$value": 0.94,
      "$type": "number"
    },
    "opacity-99": {
      "$value": 0.99,
      "$type": "number"
    }
  }
}
```
