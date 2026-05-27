# PostHog – We make dev tools for product engineers — Design System

**Source:** https://posthog.com/  
**Generated:** 17/04/2026, 13:16:25  
**Extracted:** 409 colors · 38 type tokens · 24 spacing steps · 13 breakpoints · 2 motion tokens

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
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×15328 |
| `--color-white` | `#FFFFFF` | hsl(0, 0%, 100%) | ×47 |
| `--color-orange-2` | `#F54E00` | hsl(19, 100%, 48%) | ×28 |
| `--color-light-orange` | `#E1D7C2` | hsl(41, 34%, 82%) | ×17 |
| `--color-light-gray-2` | `#EEEFE9` | hsl(70, 16%, 93%) | ×16 |
| `--color-blue` | `#2F80FA` | hsl(216, 95%, 58%) | ×13 |
| `--color-light-gray-3` | `#B6B7AF` | hsl(67, 5%, 70%) | ×12 |
| `--color-light-gray-4` | `#D0D1C9` | hsl(67, 8%, 80%) | ×8 |
| `--color-orange-4` | `#EB9D2A` | hsl(36, 83%, 54%) | ×7 |
| `--color-light-gray-5` | `#E5E7E0` | hsl(77, 13%, 89%) | ×5 |
| `--color-orange-5` | `#CD8407` | hsl(38, 93%, 42%) | ×4 |
| `--color-cyan-4` | `#29DBBB` | hsl(169, 71%, 51%) | ×2 |
| `--color-green` | `#6AA84F` | hsl(102, 36%, 48%) | ×2 |
| `--color-light-gray-8` | `rgba(229, 231, 224, 0.75)` | hsl(69, 13%, 89%) | ×1 |
| `--color-light-orange-3` | `#D4C9B8` | hsl(36, 25%, 78%) | ×1 |
| `--color-light-gray-9` | `rgba(229, 231, 224, 0.5)` | hsl(75, 14%, 89%) | ×1 |
| `--color-white-2` | `#FDFDF8` | hsl(60, 56%, 98%) | ×1 |
| `--color-light-gray-10` | `rgba(210, 211, 204, 0.5)` | hsl(75, 8%, 81%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-gray` | `#4D4F46` | hsl(73, 6%, 29%) | ×1577 |
| `--color-dark-blue` | `#374151` | hsl(217, 19%, 27%) | ×653 |
| `--color-dark-gray-2` | `#23251D` | hsl(75, 12%, 13%) | ×242 |
| `--color-dark-blue-2` | `#111827` | hsl(221, 39%, 11%) | ×168 |
| `--color-mid-gray` | `#9EA096` | hsl(72, 5%, 61%) | ×82 |
| `--color-dark-gray-3` | `#65675E` | hsl(73, 5%, 39%) | ×74 |
| `--color-orange` | `#F7A501` | hsl(40, 99%, 49%) | ×36 |
| `--color-cyan` | `#30ABC6` | hsl(191, 61%, 48%) | ×36 |
| `--color-purple` | `#B62AD9` | hsl(288, 70%, 51%) | ×27 |
| `--color-dark-gray-4` | `#1A1A1A` | hsl(0, 0%, 10%) | ×27 |
| `--color-dark-cyan` | `#107A4D` | hsl(155, 77%, 27%) | ×15 |
| `--color-mid-gray-2` | `#73756B` | hsl(72, 4%, 44%) | ×12 |
| `--color-cyan-2` | `#2EA2D3` | hsl(198, 65%, 50%) | ×6 |
| `--color-dark-gray-5` | `#141414` | hsl(0, 0%, 8%) | ×6 |
| `--color-black-35` | `#020202` | hsl(0, 0%, 1%) | ×3 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray` | `#BFC1B7` | hsl(72, 7%, 74%) | ×37 |
| `--color-orange-3` | `#B17816` | hsl(38, 78%, 39%) | ×14 |
| `--color-light-gray-6` | `#D2D3CC` | hsl(69, 7%, 81%) | ×4 |

### Shadow Colors

_None detected._

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-yellow` | `#6D7428` | hsl(66, 49%, 31%) | ×53 |
| `--color-black-2` | `#090803` | hsl(50, 50%, 2%) | ×42 |
| `--color-black-3` | `#070602` | hsl(48, 56%, 2%) | ×36 |
| `--color-dark-yellow-2` | `#6D7328` | hsl(65, 48%, 30%) | ×35 |
| `--color-black-4` | `#070702` | hsl(60, 56%, 2%) | ×34 |
| `--color-dark-yellow-3` | `#707428` | hsl(63, 49%, 31%) | ×31 |
| `--color-dark-yellow-4` | `#6E7528` | hsl(65, 49%, 31%) | ×29 |
| `--color-black-5` | `#080803` | hsl(60, 45%, 2%) | ×27 |
| `--color-black-6` | `#070703` | hsl(60, 40%, 2%) | ×25 |
| `--color-black-7` | `#080703` | hsl(48, 45%, 2%) | ×25 |
| `--color-black-8` | `#0B0A04` | hsl(51, 47%, 3%) | ×23 |
| `--color-black-9` | `#0A0903` | hsl(51, 54%, 3%) | ×23 |
| `--color-black-10` | `#090703` | hsl(40, 50%, 2%) | ×23 |
| `--color-black-11` | `#0A0803` | hsl(43, 54%, 3%) | ×22 |
| `--color-dark-yellow-5` | `#6E7428` | hsl(65, 49%, 31%) | ×19 |
| `--color-black-12` | `#0B0B04` | hsl(60, 47%, 3%) | ×17 |
| `--color-black-13` | `#0A0A04` | hsl(60, 43%, 3%) | ×17 |
| `--color-yellow` | `#949935` | hsl(63, 49%, 40%) | ×16 |
| `--color-black-14` | `#090903` | hsl(60, 50%, 2%) | ×15 |
| `--color-dark-yellow-6` | `#6F7528` | hsl(65, 49%, 31%) | ×14 |
| `--color-black-15` | `#0D0B04` | hsl(47, 53%, 3%) | ×14 |
| `--color-black-16` | `#080702` | hsl(50, 60%, 2%) | ×12 |
| `--color-dark-yellow-7` | `#6B7127` | hsl(65, 49%, 30%) | ×12 |
| `--color-dark-yellow-8` | `#6E7127` | hsl(62, 49%, 30%) | ×11 |
| `--color-dark-yellow-9` | `#6F7629` | hsl(65, 48%, 31%) | ×11 |
| `--color-dark-yellow-10` | `#6D7528` | hsl(66, 49%, 31%) | ×11 |
| `--color-dark-yellow-11` | `#6F7328` | hsl(63, 48%, 30%) | ×10 |
| `--color-dark-yellow-12` | `#53600E` | hsl(70, 75%, 22%) | ×10 |
| `--color-dark-yellow-13` | `#3E470A` | hsl(69, 75%, 16%) | ×10 |
| `--color-dark-yellow-14` | `#6C7328` | hsl(66, 48%, 30%) | ×10 |
| `--color-black-17` | `#090A04` | hsl(70, 43%, 3%) | ×9 |
| `--color-black-18` | `#0A0904` | hsl(50, 43%, 3%) | ×9 |
| `--color-dark-yellow-15` | `#6C7127` | hsl(64, 49%, 30%) | ×9 |
| `--color-black-19` | `#0B0904` | hsl(43, 47%, 3%) | ×8 |
| `--color-black-20` | `#0B0903` | hsl(45, 57%, 3%) | ×8 |
| `--color-black-21` | `#0D0A04` | hsl(40, 53%, 3%) | ×8 |
| `--color-dark-yellow-16` | `#6D6F27` | hsl(62, 48%, 29%) | ×7 |
| `--color-black-22` | `#070803` | hsl(72, 45%, 2%) | ×7 |
| `--color-dark-yellow-17` | `#6D7127` | hsl(63, 49%, 30%) | ×7 |
| `--color-dark-yellow-18` | `#6E7629` | hsl(66, 48%, 31%) | ×7 |
| `--color-blue-2` | `#1D4AFF` | hsl(228, 100%, 56%) | ×6 |
| `--color-blue-3` | `#0500FF` | hsl(241, 100%, 50%) | ×6 |
| `--color-yellow-2` | `#939735` | hsl(62, 48%, 40%) | ×6 |
| `--color-dark-yellow-19` | `#6E7027` | hsl(62, 48%, 30%) | ×6 |
| `--color-black-23` | `#060602` | hsl(60, 50%, 2%) | ×6 |
| `--color-dark-yellow-20` | `#6D7027` | hsl(62, 48%, 30%) | ×6 |
| `--color-dark-yellow-21` | `#40480A` | hsl(68, 76%, 16%) | ×6 |
| `--color-dark-yellow-22` | `#707629` | hsl(65, 48%, 31%) | ×6 |
| `--color-cyan-3` | `#20C178` | hsl(153, 72%, 44%) | ×5 |
| `--color-black-24` | `#0E0E05` | hsl(60, 47%, 4%) | ×5 |
| `--color-dark-yellow-23` | `#3E480A` | hsl(70, 76%, 16%) | ×5 |
| `--color-dark-green` | `#52600E` | hsl(70, 75%, 22%) | ×5 |
| `--color-dark-yellow-24` | `#6E7729` | hsl(67, 49%, 31%) | ×5 |
| `--color-dark-yellow-25` | `#6C7428` | hsl(66, 49%, 31%) | ×5 |
| `--color-black-25` | `#0E0D04` | hsl(54, 56%, 4%) | ×5 |
| `--color-dark-yellow-26` | `#6B7328` | hsl(66, 48%, 30%) | ×5 |
| `--color-dark-yellow-27` | `#646D25` | hsl(68, 49%, 29%) | ×5 |
| `--color-black-26` | `#0B0B06` | hsl(60, 29%, 3%) | ×4 |
| `--color-black-27` | `#0D0D04` | hsl(60, 53%, 3%) | ×4 |
| `--color-black-28` | `#0D0E05` | hsl(67, 47%, 4%) | ×4 |
| `--color-dark-yellow-28` | `#6B6D25` | hsl(62, 49%, 29%) | ×4 |
| `--color-yellow-3` | `#A9AC60` | hsl(62, 31%, 53%) | ×4 |
| `--color-dark-yellow-29` | `#6D702B` | hsl(63, 45%, 30%) | ×4 |
| `--color-dark-yellow-30` | `#767930` | hsl(62, 43%, 33%) | ×4 |
| `--color-black-29` | `#0D0D07` | hsl(60, 30%, 4%) | ×4 |
| `--color-black-30` | `#060702` | hsl(72, 56%, 2%) | ×4 |
| `--color-black-31` | `#0A0B04` | hsl(69, 47%, 3%) | ×4 |
| `--color-dark-yellow-31` | `#6D6E25` | hsl(61, 50%, 29%) | ×4 |
| `--color-dark-yellow-32` | `#6A7027` | hsl(65, 48%, 30%) | ×4 |
| `--color-dark-yellow-33` | `#6D7629` | hsl(67, 48%, 31%) | ×4 |
| `--color-dark-yellow-34` | `#6C7528` | hsl(67, 49%, 31%) | ×4 |
| `--color-black-32` | `#0F0E05` | hsl(54, 50%, 4%) | ×4 |
| `--color-black-33` | `#0E0B04` | hsl(42, 56%, 4%) | ×4 |
| `--color-dark-yellow-35` | `#707729` | hsl(65, 49%, 31%) | ×4 |
| `--color-black-34` | `#121106` | hsl(55, 50%, 5%) | ×4 |
| `--color-light-gray-7` | `#D4D5D5` | hsl(180, 1%, 83%) | ×4 |
| `--color-black-36` | `#070704` | hsl(60, 27%, 2%) | ×3 |
| `--color-black-37` | `#090905` | hsl(60, 29%, 3%) | ×3 |
| `--color-black-38` | `#090904` | hsl(60, 38%, 3%) | ×3 |
| `--color-black-39` | `#0F0F05` | hsl(60, 50%, 4%) | ×3 |
| `--color-dark-yellow-36` | `#737629` | hsl(62, 48%, 31%) | ×3 |
| `--color-dark-yellow-37` | `#6C6E25` | hsl(62, 50%, 29%) | ×3 |
| `--color-dark-yellow-38` | `#686B24` | hsl(63, 50%, 28%) | ×3 |
| `--color-dark-yellow-39` | `#71752A` | hsl(63, 47%, 31%) | ×3 |
| `--color-dark-yellow-40` | `#7A7D35` | hsl(62, 40%, 35%) | ×3 |
| `--color-black-40` | `#0A0A05` | hsl(60, 33%, 3%) | ×3 |
| `--color-black-41` | `#0B0D04` | hsl(73, 53%, 3%) | ×3 |
| `--color-black-42` | `#0F0F07` | hsl(60, 36%, 4%) | ×3 |
| `--color-dark-yellow-41` | `#40470A` | hsl(67, 75%, 16%) | ×3 |
| `--color-dark-green-2` | `#515F0E` | hsl(70, 74%, 21%) | ×3 |
| `--color-dark-yellow-42` | `#3D4609` | hsl(69, 77%, 15%) | ×3 |
| `--color-dark-yellow-43` | `#3C4609` | hsl(70, 77%, 15%) | ×3 |
| `--color-black-43` | `#0D0D05` | hsl(60, 44%, 4%) | ×3 |
| `--color-black-44` | `#060502` | hsl(45, 50%, 2%) | ×3 |
| `--color-dark-yellow-44` | `#6F7428` | hsl(64, 49%, 31%) | ×3 |
| `--color-dark-yellow-45` | `#737528` | hsl(62, 49%, 31%) | ×3 |
| `--color-dark-yellow-46` | `#6A7328` | hsl(67, 48%, 30%) | ×3 |
| `--color-dark-yellow-47` | `#6D732A` | hsl(65, 46%, 31%) | ×3 |
| `--color-black-45` | `#0A0804` | hsl(40, 43%, 3%) | ×3 |
| `--color-dark-yellow-48` | `#6F752C` | hsl(65, 45%, 32%) | ×3 |
| `--color-orange-6` | `#F9BD2B` | hsl(43, 94%, 57%) | ×2 |
| `--color-blue-4` | `#0143CB` | hsl(220, 99%, 40%) | ×2 |
| `--color-orange-7` | `#FF5A00` | hsl(21, 100%, 50%) | ×2 |
| `--color-dark-green-3` | `#128414` | hsl(121, 76%, 29%) | ×2 |
| `--color-cyan-5` | `#00E1FF` | hsl(187, 100%, 50%) | ×2 |
| `--color-blue-5` | `#3970FD` | hsl(223, 98%, 61%) | ×2 |
| `--color-yellow-4` | `#F9C624` | hsl(46, 95%, 56%) | ×2 |
| `--color-orange-8` | `#F99309` | hsl(35, 95%, 51%) | ×2 |
| `--color-orange-9` | `#E24E01` | hsl(21, 99%, 45%) | ×2 |
| `--color-black-46` | `#010100` | hsl(60, 100%, 0%) | ×2 |
| `--color-yellow-5` | `#ADB064` | hsl(62, 32%, 54%) | ×2 |
| `--color-black-47` | `#0E0E07` | hsl(60, 33%, 4%) | ×2 |
| `--color-dark-yellow-49` | `#676923` | hsl(62, 50%, 27%) | ×2 |
| `--color-dark-yellow-50` | `#626622` | hsl(64, 50%, 27%) | ×2 |
| `--color-yellow-6` | `#999C53` | hsl(62, 31%, 47%) | ×2 |
| `--color-dark-yellow-51` | `#70742D` | hsl(63, 44%, 32%) | ×2 |
| `--color-dark-yellow-52` | `#71752D` | hsl(63, 44%, 32%) | ×2 |
| `--color-black-48` | `#090A05` | hsl(72, 33%, 3%) | ×2 |
| `--color-black-49` | `#080905` | hsl(75, 29%, 3%) | ×2 |
| `--color-black-50` | `#0F1005` | hsl(65, 52%, 4%) | ×2 |
| `--color-black-51` | `#0D0D06` | hsl(60, 37%, 4%) | ×2 |
| `--color-black-52` | `#050602` | hsl(75, 50%, 2%) | ×2 |
| `--color-black-53` | `#101007` | hsl(60, 39%, 5%) | ×2 |
| `--color-black-54` | `#101005` | hsl(60, 52%, 4%) | ×2 |
| `--color-dark-yellow-53` | `#71752C` | hsl(63, 45%, 32%) | ×2 |
| `--color-dark-yellow-54` | `#70742A` | hsl(63, 47%, 31%) | ×2 |
| `--color-dark-green-4` | `#52600F` | hsl(70, 73%, 22%) | ×2 |
| `--color-dark-green-5` | `#51600E` | hsl(71, 75%, 22%) | ×2 |
| `--color-dark-yellow-55` | `#3D470A` | hsl(70, 75%, 16%) | ×2 |
| `--color-dark-yellow-56` | `#3D460A` | hsl(69, 75%, 16%) | ×2 |
| `--color-dark-yellow-57` | `#6C6F27` | hsl(63, 48%, 29%) | ×2 |
| `--color-dark-yellow-58` | `#6D6D25` | hsl(60, 49%, 29%) | ×2 |
| `--color-yellow-7` | `#8F9333` | hsl(62, 48%, 39%) | ×2 |
| `--color-dark-yellow-59` | `#3E460A` | hsl(68, 75%, 16%) | ×2 |
| `--color-green-2` | `#778446` | hsl(73, 31%, 40%) | ×2 |
| `--color-green-3` | `#738043` | hsl(73, 31%, 38%) | ×2 |
| `--color-dark-yellow-60` | `#676D25` | hsl(65, 49%, 29%) | ×2 |
| `--color-black-55` | `#060401` | hsl(36, 71%, 1%) | ×2 |
| `--color-black-56` | `#070502` | hsl(36, 56%, 2%) | ×2 |
| `--color-black-57` | `#0B0803` | hsl(38, 57%, 3%) | ×2 |
| `--color-dark-yellow-61` | `#6C7027` | hsl(63, 48%, 30%) | ×2 |
| `--color-dark-yellow-62` | `#6C7327` | hsl(66, 49%, 30%) | ×2 |
| `--color-black-58` | `#0A0703` | hsl(34, 54%, 3%) | ×2 |
| `--color-dark-yellow-63` | `#6A7127` | hsl(66, 49%, 30%) | ×2 |
| `--color-dark-yellow-64` | `#666D25` | hsl(66, 49%, 29%) | ×2 |
| `--color-dark-yellow-65` | `#6D7529` | hsl(66, 48%, 31%) | ×2 |
| `--color-dark-yellow-66` | `#697328` | hsl(68, 48%, 30%) | ×2 |
| `--color-black-59` | `#050401` | hsl(45, 67%, 1%) | ×2 |
| `--color-yellow-8` | `#AEB166` | hsl(62, 32%, 55%) | ×2 |
| `--color-dark-yellow-67` | `#707328` | hsl(62, 48%, 30%) | ×2 |
| `--color-yellow-9` | `#A8AB60` | hsl(62, 31%, 52%) | ×2 |
| `--color-dark-yellow-68` | `#777B31` | hsl(63, 43%, 34%) | ×2 |
| `--color-dark-yellow-69` | `#706E27` | hsl(58, 48%, 30%) | ×2 |
| `--color-dark-yellow-70` | `#6B7028` | hsl(64, 47%, 30%) | ×2 |
| `--color-dark-yellow-71` | `#6E7328` | hsl(64, 48%, 30%) | ×2 |
| `--color-black-60` | `#0F0D06` | hsl(47, 43%, 4%) | ×2 |
| `--color-light-orange-2` | `#FFF1D5` | hsl(40, 100%, 92%) | ×1 |
| `--color-light-blue` | `#DAE0EB` | hsl(219, 30%, 89%) | ×1 |
| `--color-blue-6` | `#2B6FF4` | hsl(220, 90%, 56%) | ×1 |
| `--color-red` | `#D23401` | hsl(15, 99%, 41%) | ×1 |
| `--color-orange-10` | `#FF651F` | hsl(19, 100%, 56%) | ×1 |
| `--color-orange-11` | `#FBA000` | hsl(38, 100%, 49%) | ×1 |
| `--color-white-3` | `#FFFEFE` | hsl(0, 100%, 100%) | ×1 |
| `--color-blue-7` | `#4B73FF` | hsl(227, 100%, 65%) | ×1 |
| `--color-pink` | `#FF66F4` | hsl(304, 100%, 70%) | ×1 |
| `--color-red-2` | `#FF0105` | hsl(359, 100%, 50%) | ×1 |
| `--color-orange-12` | `#FE7B02` | hsl(29, 99%, 50%) | ×1 |
| `--color-cyan-6` | `#40BA9B` | hsl(165, 49%, 49%) | ×1 |
| `--color-light-purple` | `#AB81E9` | hsl(264, 70%, 71%) | ×1 |
| `--color-cyan-7` | `#00BA97` | hsl(169, 100%, 36%) | ×1 |
| `--color-blue-8` | `#0079FF` | hsl(212, 100%, 50%) | ×1 |
| `--color-dark-gray-6` | `#1F1F1F` | hsl(0, 0%, 12%) | ×1 |
| `--color-cyan-8` | `#3ECF8E` | hsl(153, 60%, 53%) | ×1 |
| `--color-yellow-10` | `#F7D046` | hsl(47, 92%, 62%) | ×1 |
| `--color-orange-13` | `#F2A73B` | hsl(35, 88%, 59%) | ×1 |
| `--color-orange-14` | `#EE792F` | hsl(23, 85%, 56%) | ×1 |
| `--color-red-3` | `#EB5829` | hsl(15, 83%, 54%) | ×1 |
| `--color-red-4` | `#EA3326` | hsl(4, 82%, 53%) | ×1 |
| `--color-orange-15` | `#F3B01C` | hsl(41, 90%, 53%) | ×1 |
| `--color-pink-2` | `#8D2676` | hsl(313, 58%, 35%) | ×1 |
| `--color-red-5` | `#EE342F` | hsl(2, 85%, 56%) | ×1 |
| `--color-blue-9` | `#1F40EC` | hsl(230, 84%, 52%) | ×1 |
| `--color-red-6` | `#FF6363` | hsl(0, 100%, 69%) | ×1 |
| `--color-orange-16` | `#F1A82C` | hsl(38, 88%, 56%) | ×1 |
| `--color-yellow-11` | `#ADB066` | hsl(62, 32%, 55%) | ×1 |
| `--color-dark-yellow-72` | `#6C6D25` | hsl(61, 49%, 29%) | ×1 |
| `--color-black-61` | `#070804` | hsl(75, 33%, 2%) | ×1 |
| `--color-black-62` | `#080903` | hsl(70, 50%, 2%) | ×1 |
| `--color-black-63` | `#080904` | hsl(72, 38%, 3%) | ×1 |
| `--color-dark-yellow-73` | `#6E7128` | hsl(62, 48%, 30%) | ×1 |
| `--color-yellow-12` | `#959753` | hsl(62, 29%, 46%) | ×1 |
| `--color-dark-yellow-74` | `#787A30` | hsl(62, 44%, 33%) | ×1 |
| `--color-yellow-13` | `#A1A45C` | hsl(63, 28%, 50%) | ×1 |
| `--color-yellow-14` | `#969A52` | hsl(63, 31%, 46%) | ×1 |
| `--color-black-64` | `#050502` | hsl(60, 43%, 1%) | ×1 |
| `--color-black-65` | `#0B0D05` | hsl(75, 44%, 4%) | ×1 |
| `--color-dark-yellow-75` | `#747729` | hsl(62, 49%, 31%) | ×1 |
| `--color-dark-yellow-76` | `#6F7329` | hsl(63, 47%, 31%) | ×1 |
| `--color-dark-yellow-77` | `#717528` | hsl(63, 49%, 31%) | ×1 |
| `--color-dark-yellow-78` | `#70742B` | hsl(63, 46%, 31%) | ×1 |
| `--color-black-66` | `#0E0E06` | hsl(60, 40%, 4%) | ×1 |
| `--color-dark-yellow-79` | `#70732C` | hsl(63, 45%, 31%) | ×1 |
| `--color-dark-yellow-80` | `#6D7029` | hsl(63, 46%, 30%) | ×1 |
| `--color-yellow-15` | `#919434` | hsl(62, 48%, 39%) | ×1 |
| `--color-black-67` | `#0D0E07` | hsl(69, 33%, 4%) | ×1 |
| `--color-black-68` | `#080805` | hsl(60, 23%, 3%) | ×1 |
| `--color-dark-gray-7` | `#111208` | hsl(66, 38%, 5%) | ×1 |
| `--color-dark-yellow-81` | `#71752B` | hsl(63, 46%, 31%) | ×1 |
| `--color-dark-yellow-82` | `#75782D` | hsl(62, 45%, 32%) | ×1 |
| `--color-dark-yellow-83` | `#74772C` | hsl(62, 46%, 32%) | ×1 |
| `--color-yellow-16` | `#888D4F` | hsl(65, 28%, 43%) | ×1 |
| `--color-light-orange-4` | `#F7B984` | hsl(28, 88%, 74%) | ×1 |
| `--color-orange-17` | `#BA8B63` | hsl(28, 39%, 56%) | ×1 |
| `--color-light-orange-5` | `#F9C9A1` | hsl(27, 88%, 80%) | ×1 |
| `--color-orange-18` | `#B98B63` | hsl(28, 38%, 56%) | ×1 |
| `--color-orange-19` | `#B98A62` | hsl(28, 38%, 55%) | ×1 |
| `--color-light-orange-6` | `#F4B782` | hsl(28, 84%, 73%) | ×1 |
| `--color-light-orange-7` | `#F3C69F` | hsl(28, 78%, 79%) | ×1 |
| `--color-dark-green-6` | `#53610E` | hsl(70, 75%, 22%) | ×1 |
| `--color-dark-yellow-84` | `#515E0D` | hsl(70, 76%, 21%) | ×1 |
| `--color-dark-green-7` | `#4F5E0D` | hsl(71, 76%, 21%) | ×1 |
| `--color-dark-yellow-85` | `#53600F` | hsl(70, 73%, 22%) | ×1 |
| `--color-dark-yellow-86` | `#6F7529` | hsl(65, 48%, 31%) | ×1 |
| `--color-dark-green-8` | `#505F0E` | hsl(71, 74%, 21%) | ×1 |
| `--color-dark-green-9` | `#3C470A` | hsl(71, 75%, 16%) | ×1 |
| `--color-green-4` | `#768244` | hsl(72, 31%, 39%) | ×1 |
| `--color-green-5` | `#778445` | hsl(72, 31%, 39%) | ×1 |
| `--color-green-6` | `#768245` | hsl(72, 31%, 39%) | ×1 |
| `--color-dark-green-10` | `#3C480A` | hsl(72, 76%, 16%) | ×1 |
| `--color-dark-green-11` | `#505E0E` | hsl(71, 74%, 21%) | ×1 |
| `--color-dark-yellow-87` | `#6D7429` | hsl(66, 48%, 31%) | ×1 |
| `--color-green-7` | `#798546` | hsl(71, 31%, 40%) | ×1 |
| `--color-green-8` | `#748244` | hsl(74, 31%, 39%) | ×1 |
| `--color-green-9` | `#758042` | hsl(71, 32%, 38%) | ×1 |
| `--color-green-10` | `#748243` | hsl(73, 32%, 39%) | ×1 |
| `--color-dark-green-12` | `#505E0D` | hsl(70, 76%, 21%) | ×1 |
| `--color-dark-yellow-88` | `#6E6F25` | hsl(61, 50%, 29%) | ×1 |
| `--color-dark-yellow-89` | `#6B6F27` | hsl(63, 48%, 29%) | ×1 |
| `--color-green-11` | `#6F7B3E` | hsl(72, 33%, 36%) | ×1 |
| `--color-dark-green-13` | `#3E4A0A` | hsl(71, 76%, 16%) | ×1 |
| `--color-green-12` | `#6E7B40` | hsl(73, 32%, 37%) | ×1 |
| `--color-green-13` | `#778345` | hsl(72, 31%, 39%) | ×1 |
| `--color-dark-yellow-90` | `#687127` | hsl(67, 49%, 30%) | ×1 |
| `--color-dark-green-14` | `#4E5E0D` | hsl(72, 76%, 21%) | ×1 |
| `--color-dark-yellow-91` | `#6C7629` | hsl(68, 48%, 31%) | ×1 |
| `--color-green-14` | `#758143` | hsl(72, 32%, 38%) | ×1 |
| `--color-green-15` | `#6D7C41` | hsl(75, 31%, 37%) | ×1 |
| `--color-dark-green-15` | `#46530B` | hsl(71, 77%, 18%) | ×1 |
| `--color-dark-yellow-92` | `#626D25` | hsl(69, 49%, 29%) | ×1 |
| `--color-dark-green-16` | `#48570D` | hsl(72, 74%, 20%) | ×1 |
| `--color-dark-yellow-93` | `#696F27` | hsl(65, 48%, 29%) | ×1 |
| `--color-dark-yellow-94` | `#666F27` | hsl(68, 48%, 29%) | ×1 |
| `--color-dark-yellow-95` | `#746F27` | hsl(56, 50%, 30%) | ×1 |
| `--color-orange-20` | `#89503A` | hsl(17, 41%, 38%) | ×1 |
| `--color-green-16` | `#718143` | hsl(75, 32%, 38%) | ×1 |
| `--color-dark-green-17` | `#303A08` | hsl(72, 76%, 13%) | ×1 |
| `--color-dark-green-18` | `#4E5C0D` | hsl(71, 75%, 21%) | ×1 |
| `--color-yellow-17` | `#7D892F` | hsl(68, 49%, 36%) | ×1 |
| `--color-yellow-18` | `#999E5F` | hsl(65, 25%, 50%) | ×1 |
| `--color-dark-yellow-96` | `#4F5B0D` | hsl(69, 75%, 20%) | ×1 |
| `--color-dark-green-19` | `#394509` | hsl(72, 77%, 15%) | ×1 |
| `--color-dark-yellow-97` | `#2F3707` | hsl(70, 77%, 12%) | ×1 |
| `--color-dark-yellow-98` | `#626221` | hsl(60, 50%, 26%) | ×1 |
| `--color-dark-green-20` | `#48521C` | hsl(71, 49%, 22%) | ×1 |
| `--color-dark-yellow-99` | `#53561E` | hsl(63, 48%, 23%) | ×1 |
| `--color-light-gray-11` | `#DAD7D4` | hsl(30, 7%, 84%) | ×1 |
| `--color-dark-yellow-100` | `#3A3B14` | hsl(62, 49%, 15%) | ×1 |
| `--color-dark-yellow-101` | `#717A2A` | hsl(67, 49%, 32%) | ×1 |
| `--color-dark-green-21` | `#4A5D0D` | hsl(74, 75%, 21%) | ×1 |
| `--color-dark-yellow-102` | `#586121` | hsl(68, 49%, 25%) | ×1 |
| `--color-orange-21` | `#885A40` | hsl(22, 36%, 39%) | ×1 |
| `--color-black-69` | `#040301` | hsl(40, 60%, 1%) | ×1 |
| `--color-black-70` | `#100E05` | hsl(49, 52%, 4%) | ×1 |
| `--color-dark-yellow-103` | `#707829` | hsl(66, 49%, 32%) | ×1 |
| `--color-dark-yellow-104` | `#6D7628` | hsl(67, 49%, 31%) | ×1 |
| `--color-dark-yellow-105` | `#717127` | hsl(60, 49%, 30%) | ×1 |
| `--color-black-71` | `#0F0D05` | hsl(48, 50%, 4%) | ×1 |
| `--color-dark-yellow-106` | `#6F7127` | hsl(62, 49%, 30%) | ×1 |
| `--color-black-72` | `#080602` | hsl(40, 60%, 2%) | ×1 |
| `--color-dark-yellow-107` | `#747629` | hsl(62, 48%, 31%) | ×1 |
| `--color-dark-yellow-108` | `#6F7729` | hsl(66, 49%, 31%) | ×1 |
| `--color-dark-yellow-109` | `#6D7729` | hsl(68, 49%, 31%) | ×1 |
| `--color-dark-yellow-110` | `#6F6C24` | hsl(58, 51%, 29%) | ×1 |
| `--color-dark-yellow-111` | `#716F27` | hsl(58, 49%, 30%) | ×1 |
| `--color-yellow-19` | `#888D30` | hsl(63, 49%, 37%) | ×1 |
| `--color-orange-22` | `#B68B63` | hsl(29, 36%, 55%) | ×1 |
| `--color-orange-23` | `#B58D63` | hsl(31, 36%, 55%) | ×1 |
| `--color-yellow-20` | `#8A8A2F` | hsl(60, 49%, 36%) | ×1 |
| `--color-yellow-21` | `#88862E` | hsl(59, 49%, 36%) | ×1 |
| `--color-yellow-22` | `#8D9334` | hsl(64, 48%, 39%) | ×1 |
| `--color-black-73` | `#110A07` | hsl(18, 42%, 5%) | ×1 |
| `--color-orange-24` | `#B88B63` | hsl(28, 37%, 55%) | ×1 |
| `--color-dark-gray-8` | `#150E09` | hsl(25, 40%, 6%) | ×1 |
| `--color-orange-25` | `#B88F66` | hsl(30, 37%, 56%) | ×1 |
| `--color-black-74` | `#050302` | hsl(20, 43%, 1%) | ×1 |
| `--color-black-75` | `#060403` | hsl(20, 33%, 2%) | ×1 |
| `--color-yellow-23` | `#ABAD61` | hsl(62, 32%, 53%) | ×1 |
| `--color-yellow-24` | `#AAAC61` | hsl(62, 31%, 53%) | ×1 |
| `--color-yellow-25` | `#9EA25A` | hsl(63, 29%, 49%) | ×1 |
| `--color-yellow-26` | `#A6AB60` | hsl(64, 31%, 52%) | ×1 |
| `--color-dark-yellow-112` | `#6F762C` | hsl(66, 46%, 32%) | ×1 |
| `--color-dark-yellow-113` | `#6F752D` | hsl(65, 44%, 32%) | ×1 |
| `--color-dark-yellow-114` | `#46451F` | hsl(58, 39%, 20%) | ×1 |
| `--color-dark-yellow-115` | `#6F772D` | hsl(66, 45%, 32%) | ×1 |
| `--color-dark-yellow-116` | `#6E6F29` | hsl(61, 46%, 30%) | ×1 |
| `--color-dark-yellow-117` | `#75762D` | hsl(61, 45%, 32%) | ×1 |
| `--color-black-76` | `#0B0A06` | hsl(48, 29%, 3%) | ×1 |
| `--color-black-77` | `#0D0904` | hsl(33, 53%, 3%) | ×1 |
| `--color-black-78` | `#0E0A04` | hsl(36, 56%, 4%) | ×1 |
| `--color-black-79` | `#110F06` | hsl(49, 48%, 5%) | ×1 |
| `--color-black-80` | `#0D0A05` | hsl(38, 44%, 4%) | ×1 |
| `--color-black-81` | `#0B0804` | hsl(34, 47%, 3%) | ×1 |
| `--color-dark-yellow-118` | `#6D752C` | hsl(67, 45%, 32%) | ×1 |
| `--color-dark-yellow-119` | `#6D752B` | hsl(66, 46%, 31%) | ×1 |
| `--color-black-82` | `#0F0B04` | hsl(38, 58%, 4%) | ×1 |
| `--color-black-83` | `#121207` | hsl(60, 44%, 5%) | ×1 |
| `--color-dark-yellow-120` | `#6D762D` | hsl(67, 45%, 32%) | ×1 |
| `--color-dark-yellow-121` | `#6A7329` | hsl(67, 47%, 31%) | ×1 |
| `--color-dark-yellow-122` | `#6C742B` | hsl(67, 46%, 31%) | ×1 |
| `--color-dark-yellow-123` | `#6A7428` | hsl(68, 49%, 31%) | ×1 |
| `--color-yellow-27` | `#959353` | hsl(58, 28%, 45%) | ×1 |
| `--color-yellow-28` | `#979B4E` | hsl(63, 33%, 46%) | ×1 |
| `--color-yellow-29` | `#A2AB5F` | hsl(67, 31%, 52%) | ×1 |
| `--color-black-84` | `#0E0D06` | hsl(53, 40%, 4%) | ×1 |
| `--color-black-85` | `#0D0905` | hsl(30, 44%, 4%) | ×1 |
| `--color-black-86` | `#070603` | hsl(45, 40%, 2%) | ×1 |
| `--color-dark-gray-9` | `#131307` | hsl(60, 46%, 5%) | ×1 |
| `--color-black-87` | `#0F0E07` | hsl(53, 36%, 4%) | ×1 |
| `--color-black-88` | `#0B0A05` | hsl(50, 38%, 3%) | ×1 |
| `--color-dark-yellow-124` | `#6E762D` | hsl(67, 45%, 32%) | ×1 |
| `--color-yellow-30` | `#ACAF64` | hsl(62, 32%, 54%) | ×1 |
| `--color-yellow-31` | `#ACAF63` | hsl(62, 32%, 54%) | ×1 |
| `--color-yellow-32` | `#A7AA60` | hsl(62, 30%, 52%) | ×1 |
| `--color-yellow-33` | `#A0A35B` | hsl(62, 28%, 50%) | ×1 |
| `--color-black-89` | `#0E0F05` | hsl(66, 50%, 4%) | ×1 |
| `--color-black-90` | `#0A0B05` | hsl(70, 38%, 3%) | ×1 |
| `--color-black-91` | `#0E0F06` | hsl(67, 43%, 4%) | ×1 |
| `--color-black-92` | `#030301` | hsl(60, 50%, 1%) | ×1 |
| `--color-black-93` | `#040502` | hsl(80, 43%, 1%) | ×1 |
| `--color-dark-yellow-125` | `#73762B` | hsl(62, 47%, 32%) | ×1 |
| `--color-dark-yellow-126` | `#73752D` | hsl(62, 44%, 32%) | ×1 |
| `--color-dark-yellow-127` | `#6F732A` | hsl(63, 46%, 31%) | ×1 |
| `--color-orange-26` | `#E8783D` | hsl(21, 79%, 57%) | ×1 |
| `--color-orange-27` | `#F7A73A` | hsl(35, 92%, 60%) | ×1 |
| `--color-yellow-34` | `#F9D767` | hsl(46, 92%, 69%) | ×1 |
| `--color-light-gray-12` | `#DDDFDF` | hsl(180, 3%, 87%) | ×1 |
| `--color-light-gray-13` | `#D9DBDB` | hsl(180, 3%, 85%) | ×1 |
| `--color-light-gray-14` | `#E2E8E8` | hsl(180, 12%, 90%) | ×1 |
| `--color-light-gray-15` | `#D3D1D1` | hsl(0, 2%, 82%) | ×1 |
| `--color-light-gray-16` | `#D3D6D6` | hsl(180, 4%, 83%) | ×1 |
| `--color-light-gray-17` | `#D5D9D9` | hsl(180, 5%, 84%) | ×1 |
| `--color-light-gray-18` | `#D0D5D5` | hsl(180, 6%, 83%) | ×1 |
| `--color-light-gray-19` | `#DCE3E3` | hsl(180, 11%, 88%) | ×1 |
| `--color-light-gray-20` | `#BDC0C0` | hsl(180, 2%, 75%) | ×1 |
| `--color-light-gray-21` | `#D3DBDB` | hsl(180, 10%, 84%) | ×1 |
| `--color-light-gray-22` | `#C6C8C8` | hsl(180, 2%, 78%) | ×1 |
| `--color-light-gray-23` | `#D2DCDC` | hsl(180, 13%, 84%) | ×1 |
| `--color-light-gray-24` | `#C6C7C7` | hsl(180, 1%, 78%) | ×1 |
| `--color-light-gray-25` | `#C5C9C9` | hsl(180, 4%, 78%) | ×1 |
| `--color-light-gray-26` | `#B8C3C3` | hsl(180, 8%, 74%) | ×1 |
| `--color-light-gray-27` | `#D2D4D4` | hsl(180, 2%, 83%) | ×1 |
| `--color-light-gray-28` | `#D1D5D5` | hsl(180, 5%, 83%) | ×1 |
| `--color-light-gray-29` | `#DBE4E4` | hsl(180, 14%, 88%) | ×1 |
| `--color-mid-gray-3` | `#A0A0A0` | hsl(0, 0%, 63%) | ×1 |
| `--color-light-cyan` | `#CEDEDE` | hsl(180, 20%, 84%) | ×1 |
| `--color-light-gray-30` | `#D3DADA` | hsl(180, 9%, 84%) | ×1 |
| `--color-light-gray-31` | `#DED7D7` | hsl(0, 10%, 86%) | ×1 |
| `--color-black-94` | `#030201` | hsl(30, 50%, 1%) | ×1 |
| `--color-black-95` | `#090702` | hsl(43, 64%, 2%) | ×1 |
| `--color-light-gray-32` | `#E7EBEB` | hsl(180, 9%, 91%) | ×1 |
| `--color-light-cyan-2` | `#DFEEEE` | hsl(180, 31%, 90%) | ×1 |
| `--color-dark-yellow-128` | `#6A6722` | hsl(58, 51%, 27%) | ×1 |
| `--color-dark-yellow-129` | `#706C24` | hsl(57, 51%, 29%) | ×1 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `IBM Plex Sans Variable` |
| `--font-family-2` | `ui-monospace` |
| `--font-family-3` | `Source Code Pro` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `12px` |  |
| `--font-size-xs` | `13px` |  |
| `--font-size-sm` | `14px` |  |
| `--font-size-base` | `15px` |  |
| `--font-size-lg` | `16px` |  |
| `--font-size-xl` | `18px` |  |
| `--font-size-2xl` | `19.2857px` |  |
| `--font-size-3xl` | `20px` |  |
| `--font-size-4xl` | `21.4286px` |  |
| `--font-size-5xl` | `24px` |  |
| `--font-size-6xl` | `36px` |  |

### Font Weights

| Token | Weight |
| --- | --- |
| `--font-weight-regular` | `400` |
| `--font-weight-medium` | `500` |
| `--font-weight-semibold` | `600` |
| `--font-weight-bold` | `700` |
| `--font-weight-extrabold` | `800` |

### Line Heights

| Token | Value |
| --- | --- |
| `--line-height-tight` | `13px` |
| `--line-height-snug` | `15px` |
| `--line-height-normal` | `16px` |
| `--line-height-relaxed` | `17.875px` |
| `--line-height-loose` | `18.75px` |
| `--line-height-lh-6` | `19.5px` |
| `--line-height-lh-7` | `21px` |
| `--line-height-lh-8` | `22.2857px` |
| `--line-height-lh-9` | `22.5px` |
| `--line-height-lh-10` | `24px` |
| `--line-height-lh-11` | `25.7143px` |
| `--line-height-lh-12` | `27px` |
| `--line-height-lh-13` | `28px` |
| `--line-height-lh-14` | `30px` |
| `--line-height-lh-15` | `32px` |
| `--line-height-lh-16` | `54px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `-0.6px` |
| `--letter-spacing-normal` | `-0.535714px` |
| `--letter-spacing-wide` | `-0.482143px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `1px` | ×15 |
| `--space-2` | `2px` | ×133 |
| `--space-3` | `4px` | ×192 |
| `--space-4` | `4.28571px` | ×28 |
| `--space-5` | `5px` | ×20 |
| `--space-6` | `6px` | ×148 |
| `--space-8` | `6.42857px` | ×15 |
| `--space-10` | `8px` | ×206 |
| `--space-12` | `8.57143px` | ×3 |
| `--space-16` | `10px` | ×24 |
| `--space-20` | `12px` | ×26 |
| `--space-24` | `120px` | ×1 |
| `--space-32` | `16px` | ×44 |
| `--space-40` | `17.1429px` | ×45 |
| `--space-48` | `20px` | ×4 |
| `--space-64` | `22px` | ×1 |
| `--space-80` | `23.5714px` | ×3 |
| `--space-96` | `24px` | ×7 |
| `--space-128` | `32px` | ×15 |
| `--space-160` | `34.2857px` | ×7 |
| `--space-192` | `48px` | ×1 |
| `--space-256` | `64px` | ×4 |
| `--space-23` | `84.5px` | ×1 |
| `--space-25` | `217.602px` | ×1 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `1px` | ×224 |
| `--border-width-thin` | `1.5px` | ×59 |
| `--border-width-base` | `2px` | ×32 |
| `--border-width-thick` | `4px` | ×9 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `0px 0px 6px 6px` | ×1 |
| `--radius-md` | `0px 0px 4px` | ×1 |
| `--radius-lg` | `0px 0px 0px 4px` | ×2 |
| `--radius-xl` | `2px` | ×16 |
| `--radius-2xl` | `4px` | ×49 |
| `--radius-full` | `5px` | ×2 |
| `--radius-r7` | `6px` | ×13 |
| `--radius-r8` | `6px 6px 0px 0px` | ×4 |
| `--radius-r9` | `8px` | ×2 |
| `--radius-r10` | `9999px` | ×11 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px` | ×4 |
| `--shadow-md` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.4) 0px 0px 6px 2px` | ×1 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.15s` | ×207 |
| `--duration-fast` | `0.3s` | ×1 |

### Easing Functions

_No easing functions detected._

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `-10` |
| `--z-2` | `1` |
| `--z-3` | `10` |
| `--z-4` | `50` |
| `--z-5` | `999999` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `1px` |
| `--breakpoint-sm` | `425px` |
| `--breakpoint-md` | `482px` |
| `--breakpoint-lg` | `640px` |
| `--breakpoint-xl` | `767px` |
| `--breakpoint-2xl` | `768px` |
| `--breakpoint-3xl` | `800px` |
| `--breakpoint-bp-8` | `900px` |
| `--breakpoint-bp-9` | `1024px` |
| `--breakpoint-bp-10` | `1076px` |
| `--breakpoint-bp-11` | `1160px` |
| `--breakpoint-bp-12` | `1280px` |
| `--breakpoint-bp-13` | `1536px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-15` | `0.15` | ×1 |
| `--opacity-20` | `0.2` | ×9 |
| `--opacity-35` | `0.35` | ×4 |
| `--opacity-50` | `0.5` | ×8 |
| `--opacity-60` | `0.6` | ×2 |
| `--opacity-65` | `0.65` | ×4 |
| `--opacity-75` | `0.75` | ×2 |
| `--opacity-80` | `0.8` | ×4 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-dark-gray` | `--color-black` | 2.52:1 | Fail |
| `--color-dark-gray` | `--color-white` | 8.33:1 | AAA |
| `--color-dark-gray` | `--color-orange-2` | 2.37:1 | Fail |
| `--color-dark-gray` | `--color-light-orange` | 5.83:1 | AA |
| `--color-dark-gray` | `--color-light-gray-2` | 7.2:1 | AAA |
| `--color-dark-blue` | `--color-black` | 2.04:1 | Fail |
| `--color-dark-blue` | `--color-white` | 10.31:1 | AAA |
| `--color-dark-blue` | `--color-orange-2` | 2.93:1 | Fail |
| `--color-dark-blue` | `--color-light-orange` | 7.22:1 | AAA |
| `--color-dark-blue` | `--color-light-gray-2` | 8.91:1 | AAA |
| `--color-dark-gray-2` | `--color-black` | 1.35:1 | Fail |
| `--color-dark-gray-2` | `--color-white` | 15.51:1 | AAA |
| `--color-dark-gray-2` | `--color-orange-2` | 4.41:1 | AA Large |
| `--color-dark-gray-2` | `--color-light-orange` | 10.86:1 | AAA |
| `--color-dark-gray-2` | `--color-light-gray-2` | 13.41:1 | AAA |
| `--color-dark-blue-2` | `--color-black` | 1.18:1 | Fail |
| `--color-dark-blue-2` | `--color-white` | 17.74:1 | AAA |
| `--color-dark-blue-2` | `--color-orange-2` | 5.05:1 | AA |
| `--color-dark-blue-2` | `--color-light-orange` | 12.42:1 | AAA |
| `--color-dark-blue-2` | `--color-light-gray-2` | 15.34:1 | AAA |
| `--color-mid-gray` | `--color-black` | 7.92:1 | AAA |
| `--color-mid-gray` | `--color-white` | 2.65:1 | Fail |
| `--color-mid-gray` | `--color-orange-2` | 1.33:1 | Fail |
| `--color-mid-gray` | `--color-light-orange` | 1.86:1 | Fail |
| `--color-mid-gray` | `--color-light-gray-2` | 2.29:1 | Fail |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--viewport-padding` | `25px` |
| `--squeak-primary-color` | `255,255,255` |
| `--squeak-default-avatar-fill` | `0,0,0` |
| `--squeak-button-color` | `245,78,0` |
| `--swiper-pagination-color` | `#f7a501` |
| `--swiper-pagination-bullet-inactive-color` | `#fff` |
| `--swiper-theme-color` | `#007aff` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — PostHog – We make dev tools for product engineers
 * Source: https://posthog.com/
 * Generated: 17/04/2026, 13:16:25
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-black: #000000; /* hsl(0, 0%, 0%) · background */
  --color-dark-gray: #4D4F46; /* hsl(73, 6%, 29%) · text */
  --color-dark-blue: #374151; /* hsl(217, 19%, 27%) · text */
  --color-dark-gray-2: #23251D; /* hsl(75, 12%, 13%) · text */
  --color-dark-blue-2: #111827; /* hsl(221, 39%, 11%) · text */
  --color-mid-gray: #9EA096; /* hsl(72, 5%, 61%) · text */
  --color-dark-gray-3: #65675E; /* hsl(73, 5%, 39%) · text */
  --color-dark-yellow: #6D7428; /* hsl(66, 49%, 31%) · fill */
  --color-white: #FFFFFF; /* hsl(0, 0%, 100%) · background */
  --color-black-2: #090803; /* hsl(50, 50%, 2%) · fill */
  --color-light-gray: #BFC1B7; /* hsl(72, 7%, 74%) · border */
  --color-orange: #F7A501; /* hsl(40, 99%, 49%) · text */
  --color-cyan: #30ABC6; /* hsl(191, 61%, 48%) · text */
  --color-black-3: #070602; /* hsl(48, 56%, 2%) · fill */
  --color-dark-yellow-2: #6D7328; /* hsl(65, 48%, 30%) · fill */
  --color-black-4: #070702; /* hsl(60, 56%, 2%) · fill */
  --color-dark-yellow-3: #707428; /* hsl(63, 49%, 31%) · fill */
  --color-dark-yellow-4: #6E7528; /* hsl(65, 49%, 31%) · fill */
  --color-orange-2: #F54E00; /* hsl(19, 100%, 48%) · background */
  --color-purple: #B62AD9; /* hsl(288, 70%, 51%) · text */
  --color-dark-gray-4: #1A1A1A; /* hsl(0, 0%, 10%) · text */
  --color-black-5: #080803; /* hsl(60, 45%, 2%) · fill */
  --color-black-6: #070703; /* hsl(60, 40%, 2%) · fill */
  --color-black-7: #080703; /* hsl(48, 45%, 2%) · fill */
  --color-black-8: #0B0A04; /* hsl(51, 47%, 3%) · fill */
  --color-black-9: #0A0903; /* hsl(51, 54%, 3%) · fill */
  --color-black-10: #090703; /* hsl(40, 50%, 2%) · fill */
  --color-black-11: #0A0803; /* hsl(43, 54%, 3%) · fill */
  --color-dark-yellow-5: #6E7428; /* hsl(65, 49%, 31%) · fill */
  --color-light-orange: #E1D7C2; /* hsl(41, 34%, 82%) · background */
  --color-black-12: #0B0B04; /* hsl(60, 47%, 3%) · fill */
  --color-black-13: #0A0A04; /* hsl(60, 43%, 3%) · fill */
  --color-light-gray-2: #EEEFE9; /* hsl(70, 16%, 93%) · background */
  --color-yellow: #949935; /* hsl(63, 49%, 40%) · fill */
  --color-dark-cyan: #107A4D; /* hsl(155, 77%, 27%) · text */
  --color-black-14: #090903; /* hsl(60, 50%, 2%) · fill */
  --color-orange-3: #B17816; /* hsl(38, 78%, 39%) · border */
  --color-dark-yellow-6: #6F7528; /* hsl(65, 49%, 31%) · fill */
  --color-black-15: #0D0B04; /* hsl(47, 53%, 3%) · fill */
  --color-blue: #2F80FA; /* hsl(216, 95%, 58%) · background */
  --color-mid-gray-2: #73756B; /* hsl(72, 4%, 44%) · text */
  --color-light-gray-3: #B6B7AF; /* hsl(67, 5%, 70%) · background */
  --color-black-16: #080702; /* hsl(50, 60%, 2%) · fill */
  --color-dark-yellow-7: #6B7127; /* hsl(65, 49%, 30%) · fill */
  --color-dark-yellow-8: #6E7127; /* hsl(62, 49%, 30%) · fill */
  --color-dark-yellow-9: #6F7629; /* hsl(65, 48%, 31%) · fill */
  --color-dark-yellow-10: #6D7528; /* hsl(66, 49%, 31%) · fill */
  --color-dark-yellow-11: #6F7328; /* hsl(63, 48%, 30%) · fill */
  --color-dark-yellow-12: #53600E; /* hsl(70, 75%, 22%) · fill */
  --color-dark-yellow-13: #3E470A; /* hsl(69, 75%, 16%) · fill */
  --color-dark-yellow-14: #6C7328; /* hsl(66, 48%, 30%) · fill */
  --color-black-17: #090A04; /* hsl(70, 43%, 3%) · fill */
  --color-black-18: #0A0904; /* hsl(50, 43%, 3%) · fill */
  --color-dark-yellow-15: #6C7127; /* hsl(64, 49%, 30%) · fill */
  --color-light-gray-4: #D0D1C9; /* hsl(67, 8%, 80%) · background */
  --color-black-19: #0B0904; /* hsl(43, 47%, 3%) · fill */
  --color-black-20: #0B0903; /* hsl(45, 57%, 3%) · fill */
  --color-black-21: #0D0A04; /* hsl(40, 53%, 3%) · fill */
  --color-orange-4: #EB9D2A; /* hsl(36, 83%, 54%) · background */
  --color-dark-yellow-16: #6D6F27; /* hsl(62, 48%, 29%) · fill */
  --color-black-22: #070803; /* hsl(72, 45%, 2%) · fill */
  --color-dark-yellow-17: #6D7127; /* hsl(63, 49%, 30%) · fill */
  --color-dark-yellow-18: #6E7629; /* hsl(66, 48%, 31%) · fill */
  --color-blue-2: #1D4AFF; /* hsl(228, 100%, 56%) · fill */
  --color-cyan-2: #2EA2D3; /* hsl(198, 65%, 50%) · text */
  --color-blue-3: #0500FF; /* hsl(241, 100%, 50%) · fill */
  --color-dark-gray-5: #141414; /* hsl(0, 0%, 8%) · text */
  --color-yellow-2: #939735; /* hsl(62, 48%, 40%) · fill */
  --color-dark-yellow-19: #6E7027; /* hsl(62, 48%, 30%) · fill */
  --color-black-23: #060602; /* hsl(60, 50%, 2%) · fill */
  --color-dark-yellow-20: #6D7027; /* hsl(62, 48%, 30%) · fill */
  --color-dark-yellow-21: #40480A; /* hsl(68, 76%, 16%) · fill */
  --color-dark-yellow-22: #707629; /* hsl(65, 48%, 31%) · fill */
  --color-light-gray-5: #E5E7E0; /* hsl(77, 13%, 89%) · background */
  --color-cyan-3: #20C178; /* hsl(153, 72%, 44%) · fill */
  --color-black-24: #0E0E05; /* hsl(60, 47%, 4%) · fill */
  --color-dark-yellow-23: #3E480A; /* hsl(70, 76%, 16%) · fill */
  --color-dark-green: #52600E; /* hsl(70, 75%, 22%) · fill */
  --color-dark-yellow-24: #6E7729; /* hsl(67, 49%, 31%) · fill */
  --color-dark-yellow-25: #6C7428; /* hsl(66, 49%, 31%) · fill */
  --color-black-25: #0E0D04; /* hsl(54, 56%, 4%) · fill */
  --color-dark-yellow-26: #6B7328; /* hsl(66, 48%, 30%) · fill */
  --color-dark-yellow-27: #646D25; /* hsl(68, 49%, 29%) · fill */
  --color-orange-5: #CD8407; /* hsl(38, 93%, 42%) · background */
  --color-light-gray-6: #D2D3CC; /* hsl(69, 7%, 81%) · border */
  --color-black-26: #0B0B06; /* hsl(60, 29%, 3%) · fill */
  --color-black-27: #0D0D04; /* hsl(60, 53%, 3%) · fill */
  --color-black-28: #0D0E05; /* hsl(67, 47%, 4%) · fill */
  --color-dark-yellow-28: #6B6D25; /* hsl(62, 49%, 29%) · fill */
  --color-yellow-3: #A9AC60; /* hsl(62, 31%, 53%) · fill */
  --color-dark-yellow-29: #6D702B; /* hsl(63, 45%, 30%) · fill */
  --color-dark-yellow-30: #767930; /* hsl(62, 43%, 33%) · fill */
  --color-black-29: #0D0D07; /* hsl(60, 30%, 4%) · fill */
  --color-black-30: #060702; /* hsl(72, 56%, 2%) · fill */
  --color-black-31: #0A0B04; /* hsl(69, 47%, 3%) · fill */
  --color-dark-yellow-31: #6D6E25; /* hsl(61, 50%, 29%) · fill */
  --color-dark-yellow-32: #6A7027; /* hsl(65, 48%, 30%) · fill */
  --color-dark-yellow-33: #6D7629; /* hsl(67, 48%, 31%) · fill */
  --color-dark-yellow-34: #6C7528; /* hsl(67, 49%, 31%) · fill */
  --color-black-32: #0F0E05; /* hsl(54, 50%, 4%) · fill */
  --color-black-33: #0E0B04; /* hsl(42, 56%, 4%) · fill */
  --color-dark-yellow-35: #707729; /* hsl(65, 49%, 31%) · fill */
  --color-black-34: #121106; /* hsl(55, 50%, 5%) · fill */
  --color-light-gray-7: #D4D5D5; /* hsl(180, 1%, 83%) · fill */
  --color-black-35: #020202; /* hsl(0, 0%, 1%) · text */
  --color-black-36: #070704; /* hsl(60, 27%, 2%) · fill */
  --color-black-37: #090905; /* hsl(60, 29%, 3%) · fill */
  --color-black-38: #090904; /* hsl(60, 38%, 3%) · fill */
  --color-black-39: #0F0F05; /* hsl(60, 50%, 4%) · fill */
  --color-dark-yellow-36: #737629; /* hsl(62, 48%, 31%) · fill */
  --color-dark-yellow-37: #6C6E25; /* hsl(62, 50%, 29%) · fill */
  --color-dark-yellow-38: #686B24; /* hsl(63, 50%, 28%) · fill */
  --color-dark-yellow-39: #71752A; /* hsl(63, 47%, 31%) · fill */
  --color-dark-yellow-40: #7A7D35; /* hsl(62, 40%, 35%) · fill */
  --color-black-40: #0A0A05; /* hsl(60, 33%, 3%) · fill */
  --color-black-41: #0B0D04; /* hsl(73, 53%, 3%) · fill */
  --color-black-42: #0F0F07; /* hsl(60, 36%, 4%) · fill */
  --color-dark-yellow-41: #40470A; /* hsl(67, 75%, 16%) · fill */
  --color-dark-green-2: #515F0E; /* hsl(70, 74%, 21%) · fill */
  --color-dark-yellow-42: #3D4609; /* hsl(69, 77%, 15%) · fill */
  --color-dark-yellow-43: #3C4609; /* hsl(70, 77%, 15%) · fill */
  --color-black-43: #0D0D05; /* hsl(60, 44%, 4%) · fill */
  --color-black-44: #060502; /* hsl(45, 50%, 2%) · fill */
  --color-dark-yellow-44: #6F7428; /* hsl(64, 49%, 31%) · fill */
  --color-dark-yellow-45: #737528; /* hsl(62, 49%, 31%) · fill */
  --color-dark-yellow-46: #6A7328; /* hsl(67, 48%, 30%) · fill */
  --color-dark-yellow-47: #6D732A; /* hsl(65, 46%, 31%) · fill */
  --color-black-45: #0A0804; /* hsl(40, 43%, 3%) · fill */
  --color-dark-yellow-48: #6F752C; /* hsl(65, 45%, 32%) · fill */
  --color-orange-6: #F9BD2B; /* hsl(43, 94%, 57%) · fill */
  --color-blue-4: #0143CB; /* hsl(220, 99%, 40%) · gradient */
  --color-cyan-4: #29DBBB; /* hsl(169, 71%, 51%) · background */
  --color-orange-7: #FF5A00; /* hsl(21, 100%, 50%) · fill */
  --color-dark-green-3: #128414; /* hsl(121, 76%, 29%) · fill */
  --color-cyan-5: #00E1FF; /* hsl(187, 100%, 50%) · fill */
  --color-blue-5: #3970FD; /* hsl(223, 98%, 61%) · fill */
  --color-green: #6AA84F; /* hsl(102, 36%, 48%) · background */
  --color-yellow-4: #F9C624; /* hsl(46, 95%, 56%) · fill */
  --color-orange-8: #F99309; /* hsl(35, 95%, 51%) · fill */
  --color-orange-9: #E24E01; /* hsl(21, 99%, 45%) · fill */
  --color-black-46: #010100; /* hsl(60, 100%, 0%) · fill */
  --color-yellow-5: #ADB064; /* hsl(62, 32%, 54%) · fill */
  --color-black-47: #0E0E07; /* hsl(60, 33%, 4%) · fill */
  --color-dark-yellow-49: #676923; /* hsl(62, 50%, 27%) · fill */
  --color-dark-yellow-50: #626622; /* hsl(64, 50%, 27%) · fill */
  --color-yellow-6: #999C53; /* hsl(62, 31%, 47%) · fill */
  --color-dark-yellow-51: #70742D; /* hsl(63, 44%, 32%) · fill */
  --color-dark-yellow-52: #71752D; /* hsl(63, 44%, 32%) · fill */
  --color-black-48: #090A05; /* hsl(72, 33%, 3%) · fill */
  --color-black-49: #080905; /* hsl(75, 29%, 3%) · fill */
  --color-black-50: #0F1005; /* hsl(65, 52%, 4%) · fill */
  --color-black-51: #0D0D06; /* hsl(60, 37%, 4%) · fill */
  --color-black-52: #050602; /* hsl(75, 50%, 2%) · fill */
  --color-black-53: #101007; /* hsl(60, 39%, 5%) · fill */
  --color-black-54: #101005; /* hsl(60, 52%, 4%) · fill */
  --color-dark-yellow-53: #71752C; /* hsl(63, 45%, 32%) · fill */
  --color-dark-yellow-54: #70742A; /* hsl(63, 47%, 31%) · fill */
  --color-dark-green-4: #52600F; /* hsl(70, 73%, 22%) · fill */
  --color-dark-green-5: #51600E; /* hsl(71, 75%, 22%) · fill */
  --color-dark-yellow-55: #3D470A; /* hsl(70, 75%, 16%) · fill */
  --color-dark-yellow-56: #3D460A; /* hsl(69, 75%, 16%) · fill */
  --color-dark-yellow-57: #6C6F27; /* hsl(63, 48%, 29%) · fill */
  --color-dark-yellow-58: #6D6D25; /* hsl(60, 49%, 29%) · fill */
  --color-yellow-7: #8F9333; /* hsl(62, 48%, 39%) · fill */
  --color-dark-yellow-59: #3E460A; /* hsl(68, 75%, 16%) · fill */
  --color-green-2: #778446; /* hsl(73, 31%, 40%) · fill */
  --color-green-3: #738043; /* hsl(73, 31%, 38%) · fill */
  --color-dark-yellow-60: #676D25; /* hsl(65, 49%, 29%) · fill */
  --color-black-55: #060401; /* hsl(36, 71%, 1%) · fill */
  --color-black-56: #070502; /* hsl(36, 56%, 2%) · fill */
  --color-black-57: #0B0803; /* hsl(38, 57%, 3%) · fill */
  --color-dark-yellow-61: #6C7027; /* hsl(63, 48%, 30%) · fill */
  --color-dark-yellow-62: #6C7327; /* hsl(66, 49%, 30%) · fill */
  --color-black-58: #0A0703; /* hsl(34, 54%, 3%) · fill */
  --color-dark-yellow-63: #6A7127; /* hsl(66, 49%, 30%) · fill */
  --color-dark-yellow-64: #666D25; /* hsl(66, 49%, 29%) · fill */
  --color-dark-yellow-65: #6D7529; /* hsl(66, 48%, 31%) · fill */
  --color-dark-yellow-66: #697328; /* hsl(68, 48%, 30%) · fill */
  --color-black-59: #050401; /* hsl(45, 67%, 1%) · fill */
  --color-yellow-8: #AEB166; /* hsl(62, 32%, 55%) · fill */
  --color-dark-yellow-67: #707328; /* hsl(62, 48%, 30%) · fill */
  --color-yellow-9: #A8AB60; /* hsl(62, 31%, 52%) · fill */
  --color-dark-yellow-68: #777B31; /* hsl(63, 43%, 34%) · fill */
  --color-dark-yellow-69: #706E27; /* hsl(58, 48%, 30%) · fill */
  --color-dark-yellow-70: #6B7028; /* hsl(64, 47%, 30%) · fill */
  --color-dark-yellow-71: #6E7328; /* hsl(64, 48%, 30%) · fill */
  --color-black-60: #0F0D06; /* hsl(47, 43%, 4%) · fill */
  --color-light-gray-8: rgba(229, 231, 224, 0.75); /* hsl(69, 13%, 89%) · background */
  --color-light-orange-2: #FFF1D5; /* hsl(40, 100%, 92%) · gradient */
  --color-light-blue: #DAE0EB; /* hsl(219, 30%, 89%) · gradient */
  --color-light-orange-3: #D4C9B8; /* hsl(36, 25%, 78%) · background */
  --color-light-gray-9: rgba(229, 231, 224, 0.5); /* hsl(75, 14%, 89%) · background */
  --color-white-2: #FDFDF8; /* hsl(60, 56%, 98%) · background */
  --color-blue-6: #2B6FF4; /* hsl(220, 90%, 56%) · gradient */
  --color-red: #D23401; /* hsl(15, 99%, 41%) · gradient */
  --color-orange-10: #FF651F; /* hsl(19, 100%, 56%) · gradient */
  --color-orange-11: #FBA000; /* hsl(38, 100%, 49%) · gradient */
  --color-light-gray-10: rgba(210, 211, 204, 0.5); /* hsl(75, 8%, 81%) · background */
  --color-white-3: #FFFEFE; /* hsl(0, 100%, 100%) · fill */
  --color-blue-7: #4B73FF; /* hsl(227, 100%, 65%) · fill */
  --color-pink: #FF66F4; /* hsl(304, 100%, 70%) · fill */
  --color-red-2: #FF0105; /* hsl(359, 100%, 50%) · fill */
  --color-orange-12: #FE7B02; /* hsl(29, 99%, 50%) · fill */
  --color-cyan-6: #40BA9B; /* hsl(165, 49%, 49%) · fill */
  --color-light-purple: #AB81E9; /* hsl(264, 70%, 71%) · fill */
  --color-cyan-7: #00BA97; /* hsl(169, 100%, 36%) · fill */
  --color-blue-8: #0079FF; /* hsl(212, 100%, 50%) · fill */
  --color-dark-gray-6: #1F1F1F; /* hsl(0, 0%, 12%) · fill */
  --color-cyan-8: #3ECF8E; /* hsl(153, 60%, 53%) · fill */
  --color-yellow-10: #F7D046; /* hsl(47, 92%, 62%) · fill */
  --color-orange-13: #F2A73B; /* hsl(35, 88%, 59%) · fill */
  --color-orange-14: #EE792F; /* hsl(23, 85%, 56%) · fill */
  --color-red-3: #EB5829; /* hsl(15, 83%, 54%) · fill */
  --color-red-4: #EA3326; /* hsl(4, 82%, 53%) · fill */
  --color-orange-15: #F3B01C; /* hsl(41, 90%, 53%) · fill */
  --color-pink-2: #8D2676; /* hsl(313, 58%, 35%) · fill */
  --color-red-5: #EE342F; /* hsl(2, 85%, 56%) · fill */
  --color-blue-9: #1F40EC; /* hsl(230, 84%, 52%) · fill */
  --color-red-6: #FF6363; /* hsl(0, 100%, 69%) · fill */
  --color-orange-16: #F1A82C; /* hsl(38, 88%, 56%) · fill */
  --color-yellow-11: #ADB066; /* hsl(62, 32%, 55%) · fill */
  --color-dark-yellow-72: #6C6D25; /* hsl(61, 49%, 29%) · fill */
  --color-black-61: #070804; /* hsl(75, 33%, 2%) · fill */
  --color-black-62: #080903; /* hsl(70, 50%, 2%) · fill */
  --color-black-63: #080904; /* hsl(72, 38%, 3%) · fill */
  --color-dark-yellow-73: #6E7128; /* hsl(62, 48%, 30%) · fill */
  --color-yellow-12: #959753; /* hsl(62, 29%, 46%) · fill */
  --color-dark-yellow-74: #787A30; /* hsl(62, 44%, 33%) · fill */
  --color-yellow-13: #A1A45C; /* hsl(63, 28%, 50%) · fill */
  --color-yellow-14: #969A52; /* hsl(63, 31%, 46%) · fill */
  --color-black-64: #050502; /* hsl(60, 43%, 1%) · fill */
  --color-black-65: #0B0D05; /* hsl(75, 44%, 4%) · fill */
  --color-dark-yellow-75: #747729; /* hsl(62, 49%, 31%) · fill */
  --color-dark-yellow-76: #6F7329; /* hsl(63, 47%, 31%) · fill */
  --color-dark-yellow-77: #717528; /* hsl(63, 49%, 31%) · fill */
  --color-dark-yellow-78: #70742B; /* hsl(63, 46%, 31%) · fill */
  --color-black-66: #0E0E06; /* hsl(60, 40%, 4%) · fill */
  --color-dark-yellow-79: #70732C; /* hsl(63, 45%, 31%) · fill */
  --color-dark-yellow-80: #6D7029; /* hsl(63, 46%, 30%) · fill */
  --color-yellow-15: #919434; /* hsl(62, 48%, 39%) · fill */
  --color-black-67: #0D0E07; /* hsl(69, 33%, 4%) · fill */
  --color-black-68: #080805; /* hsl(60, 23%, 3%) · fill */
  --color-dark-gray-7: #111208; /* hsl(66, 38%, 5%) · fill */
  --color-dark-yellow-81: #71752B; /* hsl(63, 46%, 31%) · fill */
  --color-dark-yellow-82: #75782D; /* hsl(62, 45%, 32%) · fill */
  --color-dark-yellow-83: #74772C; /* hsl(62, 46%, 32%) · fill */
  --color-yellow-16: #888D4F; /* hsl(65, 28%, 43%) · fill */
  --color-light-orange-4: #F7B984; /* hsl(28, 88%, 74%) · fill */
  --color-orange-17: #BA8B63; /* hsl(28, 39%, 56%) · fill */
  --color-light-orange-5: #F9C9A1; /* hsl(27, 88%, 80%) · fill */
  --color-orange-18: #B98B63; /* hsl(28, 38%, 56%) · fill */
  --color-orange-19: #B98A62; /* hsl(28, 38%, 55%) · fill */
  --color-light-orange-6: #F4B782; /* hsl(28, 84%, 73%) · fill */
  --color-light-orange-7: #F3C69F; /* hsl(28, 78%, 79%) · fill */
  --color-dark-green-6: #53610E; /* hsl(70, 75%, 22%) · fill */
  --color-dark-yellow-84: #515E0D; /* hsl(70, 76%, 21%) · fill */
  --color-dark-green-7: #4F5E0D; /* hsl(71, 76%, 21%) · fill */
  --color-dark-yellow-85: #53600F; /* hsl(70, 73%, 22%) · fill */
  --color-dark-yellow-86: #6F7529; /* hsl(65, 48%, 31%) · fill */
  --color-dark-green-8: #505F0E; /* hsl(71, 74%, 21%) · fill */
  --color-dark-green-9: #3C470A; /* hsl(71, 75%, 16%) · fill */
  --color-green-4: #768244; /* hsl(72, 31%, 39%) · fill */
  --color-green-5: #778445; /* hsl(72, 31%, 39%) · fill */
  --color-green-6: #768245; /* hsl(72, 31%, 39%) · fill */
  --color-dark-green-10: #3C480A; /* hsl(72, 76%, 16%) · fill */
  --color-dark-green-11: #505E0E; /* hsl(71, 74%, 21%) · fill */
  --color-dark-yellow-87: #6D7429; /* hsl(66, 48%, 31%) · fill */
  --color-green-7: #798546; /* hsl(71, 31%, 40%) · fill */
  --color-green-8: #748244; /* hsl(74, 31%, 39%) · fill */
  --color-green-9: #758042; /* hsl(71, 32%, 38%) · fill */
  --color-green-10: #748243; /* hsl(73, 32%, 39%) · fill */
  --color-dark-green-12: #505E0D; /* hsl(70, 76%, 21%) · fill */
  --color-dark-yellow-88: #6E6F25; /* hsl(61, 50%, 29%) · fill */
  --color-dark-yellow-89: #6B6F27; /* hsl(63, 48%, 29%) · fill */
  --color-green-11: #6F7B3E; /* hsl(72, 33%, 36%) · fill */
  --color-dark-green-13: #3E4A0A; /* hsl(71, 76%, 16%) · fill */
  --color-green-12: #6E7B40; /* hsl(73, 32%, 37%) · fill */
  --color-green-13: #778345; /* hsl(72, 31%, 39%) · fill */
  --color-dark-yellow-90: #687127; /* hsl(67, 49%, 30%) · fill */
  --color-dark-green-14: #4E5E0D; /* hsl(72, 76%, 21%) · fill */
  --color-dark-yellow-91: #6C7629; /* hsl(68, 48%, 31%) · fill */
  --color-green-14: #758143; /* hsl(72, 32%, 38%) · fill */
  --color-green-15: #6D7C41; /* hsl(75, 31%, 37%) · fill */
  --color-dark-green-15: #46530B; /* hsl(71, 77%, 18%) · fill */
  --color-dark-yellow-92: #626D25; /* hsl(69, 49%, 29%) · fill */
  --color-dark-green-16: #48570D; /* hsl(72, 74%, 20%) · fill */
  --color-dark-yellow-93: #696F27; /* hsl(65, 48%, 29%) · fill */
  --color-dark-yellow-94: #666F27; /* hsl(68, 48%, 29%) · fill */
  --color-dark-yellow-95: #746F27; /* hsl(56, 50%, 30%) · fill */
  --color-orange-20: #89503A; /* hsl(17, 41%, 38%) · fill */
  --color-green-16: #718143; /* hsl(75, 32%, 38%) · fill */
  --color-dark-green-17: #303A08; /* hsl(72, 76%, 13%) · fill */
  --color-dark-green-18: #4E5C0D; /* hsl(71, 75%, 21%) · fill */
  --color-yellow-17: #7D892F; /* hsl(68, 49%, 36%) · fill */
  --color-yellow-18: #999E5F; /* hsl(65, 25%, 50%) · fill */
  --color-dark-yellow-96: #4F5B0D; /* hsl(69, 75%, 20%) · fill */
  --color-dark-green-19: #394509; /* hsl(72, 77%, 15%) · fill */
  --color-dark-yellow-97: #2F3707; /* hsl(70, 77%, 12%) · fill */
  --color-dark-yellow-98: #626221; /* hsl(60, 50%, 26%) · fill */
  --color-dark-green-20: #48521C; /* hsl(71, 49%, 22%) · fill */
  --color-dark-yellow-99: #53561E; /* hsl(63, 48%, 23%) · fill */
  --color-light-gray-11: #DAD7D4; /* hsl(30, 7%, 84%) · fill */
  --color-dark-yellow-100: #3A3B14; /* hsl(62, 49%, 15%) · fill */
  --color-dark-yellow-101: #717A2A; /* hsl(67, 49%, 32%) · fill */
  --color-dark-green-21: #4A5D0D; /* hsl(74, 75%, 21%) · fill */
  --color-dark-yellow-102: #586121; /* hsl(68, 49%, 25%) · fill */
  --color-orange-21: #885A40; /* hsl(22, 36%, 39%) · fill */
  --color-black-69: #040301; /* hsl(40, 60%, 1%) · fill */
  --color-black-70: #100E05; /* hsl(49, 52%, 4%) · fill */
  --color-dark-yellow-103: #707829; /* hsl(66, 49%, 32%) · fill */
  --color-dark-yellow-104: #6D7628; /* hsl(67, 49%, 31%) · fill */
  --color-dark-yellow-105: #717127; /* hsl(60, 49%, 30%) · fill */
  --color-black-71: #0F0D05; /* hsl(48, 50%, 4%) · fill */
  --color-dark-yellow-106: #6F7127; /* hsl(62, 49%, 30%) · fill */
  --color-black-72: #080602; /* hsl(40, 60%, 2%) · fill */
  --color-dark-yellow-107: #747629; /* hsl(62, 48%, 31%) · fill */
  --color-dark-yellow-108: #6F7729; /* hsl(66, 49%, 31%) · fill */
  --color-dark-yellow-109: #6D7729; /* hsl(68, 49%, 31%) · fill */
  --color-dark-yellow-110: #6F6C24; /* hsl(58, 51%, 29%) · fill */
  --color-dark-yellow-111: #716F27; /* hsl(58, 49%, 30%) · fill */
  --color-yellow-19: #888D30; /* hsl(63, 49%, 37%) · fill */
  --color-orange-22: #B68B63; /* hsl(29, 36%, 55%) · fill */
  --color-orange-23: #B58D63; /* hsl(31, 36%, 55%) · fill */
  --color-yellow-20: #8A8A2F; /* hsl(60, 49%, 36%) · fill */
  --color-yellow-21: #88862E; /* hsl(59, 49%, 36%) · fill */
  --color-yellow-22: #8D9334; /* hsl(64, 48%, 39%) · fill */
  --color-black-73: #110A07; /* hsl(18, 42%, 5%) · fill */
  --color-orange-24: #B88B63; /* hsl(28, 37%, 55%) · fill */
  --color-dark-gray-8: #150E09; /* hsl(25, 40%, 6%) · fill */
  --color-orange-25: #B88F66; /* hsl(30, 37%, 56%) · fill */
  --color-black-74: #050302; /* hsl(20, 43%, 1%) · fill */
  --color-black-75: #060403; /* hsl(20, 33%, 2%) · fill */
  --color-yellow-23: #ABAD61; /* hsl(62, 32%, 53%) · fill */
  --color-yellow-24: #AAAC61; /* hsl(62, 31%, 53%) · fill */
  --color-yellow-25: #9EA25A; /* hsl(63, 29%, 49%) · fill */
  --color-yellow-26: #A6AB60; /* hsl(64, 31%, 52%) · fill */
  --color-dark-yellow-112: #6F762C; /* hsl(66, 46%, 32%) · fill */
  --color-dark-yellow-113: #6F752D; /* hsl(65, 44%, 32%) · fill */
  --color-dark-yellow-114: #46451F; /* hsl(58, 39%, 20%) · fill */
  --color-dark-yellow-115: #6F772D; /* hsl(66, 45%, 32%) · fill */
  --color-dark-yellow-116: #6E6F29; /* hsl(61, 46%, 30%) · fill */
  --color-dark-yellow-117: #75762D; /* hsl(61, 45%, 32%) · fill */
  --color-black-76: #0B0A06; /* hsl(48, 29%, 3%) · fill */
  --color-black-77: #0D0904; /* hsl(33, 53%, 3%) · fill */
  --color-black-78: #0E0A04; /* hsl(36, 56%, 4%) · fill */
  --color-black-79: #110F06; /* hsl(49, 48%, 5%) · fill */
  --color-black-80: #0D0A05; /* hsl(38, 44%, 4%) · fill */
  --color-black-81: #0B0804; /* hsl(34, 47%, 3%) · fill */
  --color-dark-yellow-118: #6D752C; /* hsl(67, 45%, 32%) · fill */
  --color-dark-yellow-119: #6D752B; /* hsl(66, 46%, 31%) · fill */
  --color-black-82: #0F0B04; /* hsl(38, 58%, 4%) · fill */
  --color-black-83: #121207; /* hsl(60, 44%, 5%) · fill */
  --color-dark-yellow-120: #6D762D; /* hsl(67, 45%, 32%) · fill */
  --color-dark-yellow-121: #6A7329; /* hsl(67, 47%, 31%) · fill */
  --color-dark-yellow-122: #6C742B; /* hsl(67, 46%, 31%) · fill */
  --color-dark-yellow-123: #6A7428; /* hsl(68, 49%, 31%) · fill */
  --color-yellow-27: #959353; /* hsl(58, 28%, 45%) · fill */
  --color-yellow-28: #979B4E; /* hsl(63, 33%, 46%) · fill */
  --color-yellow-29: #A2AB5F; /* hsl(67, 31%, 52%) · fill */
  --color-black-84: #0E0D06; /* hsl(53, 40%, 4%) · fill */
  --color-black-85: #0D0905; /* hsl(30, 44%, 4%) · fill */
  --color-black-86: #070603; /* hsl(45, 40%, 2%) · fill */
  --color-dark-gray-9: #131307; /* hsl(60, 46%, 5%) · fill */
  --color-black-87: #0F0E07; /* hsl(53, 36%, 4%) · fill */
  --color-black-88: #0B0A05; /* hsl(50, 38%, 3%) · fill */
  --color-dark-yellow-124: #6E762D; /* hsl(67, 45%, 32%) · fill */
  --color-yellow-30: #ACAF64; /* hsl(62, 32%, 54%) · fill */
  --color-yellow-31: #ACAF63; /* hsl(62, 32%, 54%) · fill */
  --color-yellow-32: #A7AA60; /* hsl(62, 30%, 52%) · fill */
  --color-yellow-33: #A0A35B; /* hsl(62, 28%, 50%) · fill */
  --color-black-89: #0E0F05; /* hsl(66, 50%, 4%) · fill */
  --color-black-90: #0A0B05; /* hsl(70, 38%, 3%) · fill */
  --color-black-91: #0E0F06; /* hsl(67, 43%, 4%) · fill */
  --color-black-92: #030301; /* hsl(60, 50%, 1%) · fill */
  --color-black-93: #040502; /* hsl(80, 43%, 1%) · fill */
  --color-dark-yellow-125: #73762B; /* hsl(62, 47%, 32%) · fill */
  --color-dark-yellow-126: #73752D; /* hsl(62, 44%, 32%) · fill */
  --color-dark-yellow-127: #6F732A; /* hsl(63, 46%, 31%) · fill */
  --color-orange-26: #E8783D; /* hsl(21, 79%, 57%) · fill */
  --color-orange-27: #F7A73A; /* hsl(35, 92%, 60%) · fill */
  --color-yellow-34: #F9D767; /* hsl(46, 92%, 69%) · fill */
  --color-light-gray-12: #DDDFDF; /* hsl(180, 3%, 87%) · fill */
  --color-light-gray-13: #D9DBDB; /* hsl(180, 3%, 85%) · fill */
  --color-light-gray-14: #E2E8E8; /* hsl(180, 12%, 90%) · fill */
  --color-light-gray-15: #D3D1D1; /* hsl(0, 2%, 82%) · fill */
  --color-light-gray-16: #D3D6D6; /* hsl(180, 4%, 83%) · fill */
  --color-light-gray-17: #D5D9D9; /* hsl(180, 5%, 84%) · fill */
  --color-light-gray-18: #D0D5D5; /* hsl(180, 6%, 83%) · fill */
  --color-light-gray-19: #DCE3E3; /* hsl(180, 11%, 88%) · fill */
  --color-light-gray-20: #BDC0C0; /* hsl(180, 2%, 75%) · fill */
  --color-light-gray-21: #D3DBDB; /* hsl(180, 10%, 84%) · fill */
  --color-light-gray-22: #C6C8C8; /* hsl(180, 2%, 78%) · fill */
  --color-light-gray-23: #D2DCDC; /* hsl(180, 13%, 84%) · fill */
  --color-light-gray-24: #C6C7C7; /* hsl(180, 1%, 78%) · fill */
  --color-light-gray-25: #C5C9C9; /* hsl(180, 4%, 78%) · fill */
  --color-light-gray-26: #B8C3C3; /* hsl(180, 8%, 74%) · fill */
  --color-light-gray-27: #D2D4D4; /* hsl(180, 2%, 83%) · fill */
  --color-light-gray-28: #D1D5D5; /* hsl(180, 5%, 83%) · fill */
  --color-light-gray-29: #DBE4E4; /* hsl(180, 14%, 88%) · fill */
  --color-mid-gray-3: #A0A0A0; /* hsl(0, 0%, 63%) · fill */
  --color-light-cyan: #CEDEDE; /* hsl(180, 20%, 84%) · fill */
  --color-light-gray-30: #D3DADA; /* hsl(180, 9%, 84%) · fill */
  --color-light-gray-31: #DED7D7; /* hsl(0, 10%, 86%) · fill */
  --color-black-94: #030201; /* hsl(30, 50%, 1%) · fill */
  --color-black-95: #090702; /* hsl(43, 64%, 2%) · fill */
  --color-light-gray-32: #E7EBEB; /* hsl(180, 9%, 91%) · fill */
  --color-light-cyan-2: #DFEEEE; /* hsl(180, 31%, 90%) · fill */
  --color-dark-yellow-128: #6A6722; /* hsl(58, 51%, 27%) · fill */
  --color-dark-yellow-129: #706C24; /* hsl(57, 51%, 29%) · fill */

  /* ── Core: Typography ── */
  --font-size-2xs: 12px;
  --font-size-xs: 13px;
  --font-size-sm: 14px;
  --font-size-base: 15px;
  --font-size-lg: 16px;
  --font-size-xl: 18px;
  --font-size-2xl: 19.2857px;
  --font-size-3xl: 20px;
  --font-size-4xl: 21.4286px;
  --font-size-5xl: 24px;
  --font-size-6xl: 36px;
  --font-family-base: IBM Plex Sans Variable;
  --font-family-2: ui-monospace;
  --font-family-3: Source Code Pro;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --line-height-tight: 13px;
  --line-height-snug: 15px;
  --line-height-normal: 16px;
  --line-height-relaxed: 17.875px;
  --line-height-loose: 18.75px;
  --line-height-lh-6: 19.5px;
  --line-height-lh-7: 21px;
  --line-height-lh-8: 22.2857px;
  --line-height-lh-9: 22.5px;
  --line-height-lh-10: 24px;
  --line-height-lh-11: 25.7143px;
  --line-height-lh-12: 27px;
  --line-height-lh-13: 28px;
  --line-height-lh-14: 30px;
  --line-height-lh-15: 32px;
  --line-height-lh-16: 54px;
  --letter-spacing-tight: -0.6px;
  --letter-spacing-normal: -0.535714px;
  --letter-spacing-wide: -0.482143px;

  /* ── Layout: Spacing ── */
  --space-1: 1px;
  --space-2: 2px;
  --space-3: 4px;
  --space-4: 4.28571px;
  --space-5: 5px;
  --space-6: 6px;
  --space-8: 6.42857px;
  --space-10: 8px;
  --space-12: 8.57143px;
  --space-16: 10px;
  --space-20: 12px;
  --space-24: 120px;
  --space-32: 16px;
  --space-40: 17.1429px;
  --space-48: 20px;
  --space-64: 22px;
  --space-80: 23.5714px;
  --space-96: 24px;
  --space-128: 32px;
  --space-160: 34.2857px;
  --space-192: 48px;
  --space-256: 64px;
  --space-23: 84.5px;
  --space-25: 217.602px;

  /* ── Borders ── */
  --border-width-hairline: 1px;
  --border-width-thin: 1.5px;
  --border-width-base: 2px;
  --border-width-thick: 4px;
  --radius-sm: 0px 0px 6px 6px;
  --radius-md: 0px 0px 4px;
  --radius-lg: 0px 0px 0px 4px;
  --radius-xl: 2px;
  --radius-2xl: 4px;
  --radius-full: 5px;
  --radius-r7: 6px;
  --radius-r8: 6px 6px 0px 0px;
  --radius-r9: 8px;
  --radius-r10: 9999px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  --shadow-md: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.4) 0px 0px 6px 2px;

  /* ── Motion ── */
  --duration-instant: 0.15s;
  --duration-fast: 0.3s;

  /* ── Layout: Z-Index ── */
  --z-1: -10;
  --z-2: 1;
  --z-3: 10;
  --z-4: 50;
  --z-5: 999999;

  /* ── Breakpoints ── */
  --breakpoint-xs: 1px;
  --breakpoint-sm: 425px;
  --breakpoint-md: 482px;
  --breakpoint-lg: 640px;
  --breakpoint-xl: 767px;
  --breakpoint-2xl: 768px;
  --breakpoint-3xl: 800px;
  --breakpoint-bp-8: 900px;
  --breakpoint-bp-9: 1024px;
  --breakpoint-bp-10: 1076px;
  --breakpoint-bp-11: 1160px;
  --breakpoint-bp-12: 1280px;
  --breakpoint-bp-13: 1536px;

  /* ── Opacity ── */
  --opacity-15: 0.15;
  --opacity-20: 0.2;
  --opacity-35: 0.35;
  --opacity-50: 0.5;
  --opacity-60: 0.6;
  --opacity-65: 0.65;
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
    "source": "https://posthog.com/",
    "title": "PostHog – We make dev tools for product engineers",
    "generatedAt": "2026-04-17T07:46:25.115Z"
  },
  "core": {
    "color": {
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "background · ×15328"
      },
      "dark-gray": {
        "$value": "#4D4F46",
        "$type": "color",
        "$description": "text · ×1577"
      },
      "dark-blue": {
        "$value": "#374151",
        "$type": "color",
        "$description": "text · ×653"
      },
      "dark-gray-2": {
        "$value": "#23251D",
        "$type": "color",
        "$description": "text · ×242"
      },
      "dark-blue-2": {
        "$value": "#111827",
        "$type": "color",
        "$description": "text · ×168"
      },
      "mid-gray": {
        "$value": "#9EA096",
        "$type": "color",
        "$description": "text · ×82"
      },
      "dark-gray-3": {
        "$value": "#65675E",
        "$type": "color",
        "$description": "text · ×74"
      },
      "dark-yellow": {
        "$value": "#6D7428",
        "$type": "color",
        "$description": "fill · ×53"
      },
      "white": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×47"
      },
      "black-2": {
        "$value": "#090803",
        "$type": "color",
        "$description": "fill · ×42"
      },
      "light-gray": {
        "$value": "#BFC1B7",
        "$type": "color",
        "$description": "border · ×37"
      },
      "orange": {
        "$value": "#F7A501",
        "$type": "color",
        "$description": "text · ×36"
      },
      "cyan": {
        "$value": "#30ABC6",
        "$type": "color",
        "$description": "text · ×36"
      },
      "black-3": {
        "$value": "#070602",
        "$type": "color",
        "$description": "fill · ×36"
      },
      "dark-yellow-2": {
        "$value": "#6D7328",
        "$type": "color",
        "$description": "fill · ×35"
      },
      "black-4": {
        "$value": "#070702",
        "$type": "color",
        "$description": "fill · ×34"
      },
      "dark-yellow-3": {
        "$value": "#707428",
        "$type": "color",
        "$description": "fill · ×31"
      },
      "dark-yellow-4": {
        "$value": "#6E7528",
        "$type": "color",
        "$description": "fill · ×29"
      },
      "orange-2": {
        "$value": "#F54E00",
        "$type": "color",
        "$description": "background · ×28"
      },
      "purple": {
        "$value": "#B62AD9",
        "$type": "color",
        "$description": "text · ×27"
      },
      "dark-gray-4": {
        "$value": "#1A1A1A",
        "$type": "color",
        "$description": "text · ×27"
      },
      "black-5": {
        "$value": "#080803",
        "$type": "color",
        "$description": "fill · ×27"
      },
      "black-6": {
        "$value": "#070703",
        "$type": "color",
        "$description": "fill · ×25"
      },
      "black-7": {
        "$value": "#080703",
        "$type": "color",
        "$description": "fill · ×25"
      },
      "black-8": {
        "$value": "#0B0A04",
        "$type": "color",
        "$description": "fill · ×23"
      },
      "black-9": {
        "$value": "#0A0903",
        "$type": "color",
        "$description": "fill · ×23"
      },
      "black-10": {
        "$value": "#090703",
        "$type": "color",
        "$description": "fill · ×23"
      },
      "black-11": {
        "$value": "#0A0803",
        "$type": "color",
        "$description": "fill · ×22"
      },
      "dark-yellow-5": {
        "$value": "#6E7428",
        "$type": "color",
        "$description": "fill · ×19"
      },
      "light-orange": {
        "$value": "#E1D7C2",
        "$type": "color",
        "$description": "background · ×17"
      },
      "black-12": {
        "$value": "#0B0B04",
        "$type": "color",
        "$description": "fill · ×17"
      },
      "black-13": {
        "$value": "#0A0A04",
        "$type": "color",
        "$description": "fill · ×17"
      },
      "light-gray-2": {
        "$value": "#EEEFE9",
        "$type": "color",
        "$description": "background · ×16"
      },
      "yellow": {
        "$value": "#949935",
        "$type": "color",
        "$description": "fill · ×16"
      },
      "dark-cyan": {
        "$value": "#107A4D",
        "$type": "color",
        "$description": "text · ×15"
      },
      "black-14": {
        "$value": "#090903",
        "$type": "color",
        "$description": "fill · ×15"
      },
      "orange-3": {
        "$value": "#B17816",
        "$type": "color",
        "$description": "border · ×14"
      },
      "dark-yellow-6": {
        "$value": "#6F7528",
        "$type": "color",
        "$description": "fill · ×14"
      },
      "black-15": {
        "$value": "#0D0B04",
        "$type": "color",
        "$description": "fill · ×14"
      },
      "blue": {
        "$value": "#2F80FA",
        "$type": "color",
        "$description": "background · ×13"
      },
      "mid-gray-2": {
        "$value": "#73756B",
        "$type": "color",
        "$description": "text · ×12"
      },
      "light-gray-3": {
        "$value": "#B6B7AF",
        "$type": "color",
        "$description": "background · ×12"
      },
      "black-16": {
        "$value": "#080702",
        "$type": "color",
        "$description": "fill · ×12"
      },
      "dark-yellow-7": {
        "$value": "#6B7127",
        "$type": "color",
        "$description": "fill · ×12"
      },
      "dark-yellow-8": {
        "$value": "#6E7127",
        "$type": "color",
        "$description": "fill · ×11"
      },
      "dark-yellow-9": {
        "$value": "#6F7629",
        "$type": "color",
        "$description": "fill · ×11"
      },
      "dark-yellow-10": {
        "$value": "#6D7528",
        "$type": "color",
        "$description": "fill · ×11"
      },
      "dark-yellow-11": {
        "$value": "#6F7328",
        "$type": "color",
        "$description": "fill · ×10"
      },
      "dark-yellow-12": {
        "$value": "#53600E",
        "$type": "color",
        "$description": "fill · ×10"
      },
      "dark-yellow-13": {
        "$value": "#3E470A",
        "$type": "color",
        "$description": "fill · ×10"
      },
      "dark-yellow-14": {
        "$value": "#6C7328",
        "$type": "color",
        "$description": "fill · ×10"
      },
      "black-17": {
        "$value": "#090A04",
        "$type": "color",
        "$description": "fill · ×9"
      },
      "black-18": {
        "$value": "#0A0904",
        "$type": "color",
        "$description": "fill · ×9"
      },
      "dark-yellow-15": {
        "$value": "#6C7127",
        "$type": "color",
        "$description": "fill · ×9"
      },
      "light-gray-4": {
        "$value": "#D0D1C9",
        "$type": "color",
        "$description": "background · ×8"
      },
      "black-19": {
        "$value": "#0B0904",
        "$type": "color",
        "$description": "fill · ×8"
      },
      "black-20": {
        "$value": "#0B0903",
        "$type": "color",
        "$description": "fill · ×8"
      },
      "black-21": {
        "$value": "#0D0A04",
        "$type": "color",
        "$description": "fill · ×8"
      },
      "orange-4": {
        "$value": "#EB9D2A",
        "$type": "color",
        "$description": "background · ×7"
      },
      "dark-yellow-16": {
        "$value": "#6D6F27",
        "$type": "color",
        "$description": "fill · ×7"
      },
      "black-22": {
        "$value": "#070803",
        "$type": "color",
        "$description": "fill · ×7"
      },
      "dark-yellow-17": {
        "$value": "#6D7127",
        "$type": "color",
        "$description": "fill · ×7"
      },
      "dark-yellow-18": {
        "$value": "#6E7629",
        "$type": "color",
        "$description": "fill · ×7"
      },
      "blue-2": {
        "$value": "#1D4AFF",
        "$type": "color",
        "$description": "fill · ×6"
      },
      "cyan-2": {
        "$value": "#2EA2D3",
        "$type": "color",
        "$description": "text · ×6"
      },
      "blue-3": {
        "$value": "#0500FF",
        "$type": "color",
        "$description": "fill · ×6"
      },
      "dark-gray-5": {
        "$value": "#141414",
        "$type": "color",
        "$description": "text · ×6"
      },
      "yellow-2": {
        "$value": "#939735",
        "$type": "color",
        "$description": "fill · ×6"
      },
      "dark-yellow-19": {
        "$value": "#6E7027",
        "$type": "color",
        "$description": "fill · ×6"
      },
      "black-23": {
        "$value": "#060602",
        "$type": "color",
        "$description": "fill · ×6"
      },
      "dark-yellow-20": {
        "$value": "#6D7027",
        "$type": "color",
        "$description": "fill · ×6"
      },
      "dark-yellow-21": {
        "$value": "#40480A",
        "$type": "color",
        "$description": "fill · ×6"
      },
      "dark-yellow-22": {
        "$value": "#707629",
        "$type": "color",
        "$description": "fill · ×6"
      },
      "light-gray-5": {
        "$value": "#E5E7E0",
        "$type": "color",
        "$description": "background · ×5"
      },
      "cyan-3": {
        "$value": "#20C178",
        "$type": "color",
        "$description": "fill · ×5"
      },
      "black-24": {
        "$value": "#0E0E05",
        "$type": "color",
        "$description": "fill · ×5"
      },
      "dark-yellow-23": {
        "$value": "#3E480A",
        "$type": "color",
        "$description": "fill · ×5"
      },
      "dark-green": {
        "$value": "#52600E",
        "$type": "color",
        "$description": "fill · ×5"
      },
      "dark-yellow-24": {
        "$value": "#6E7729",
        "$type": "color",
        "$description": "fill · ×5"
      },
      "dark-yellow-25": {
        "$value": "#6C7428",
        "$type": "color",
        "$description": "fill · ×5"
      },
      "black-25": {
        "$value": "#0E0D04",
        "$type": "color",
        "$description": "fill · ×5"
      },
      "dark-yellow-26": {
        "$value": "#6B7328",
        "$type": "color",
        "$description": "fill · ×5"
      },
      "dark-yellow-27": {
        "$value": "#646D25",
        "$type": "color",
        "$description": "fill · ×5"
      },
      "orange-5": {
        "$value": "#CD8407",
        "$type": "color",
        "$description": "background · ×4"
      },
      "light-gray-6": {
        "$value": "#D2D3CC",
        "$type": "color",
        "$description": "border · ×4"
      },
      "black-26": {
        "$value": "#0B0B06",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "black-27": {
        "$value": "#0D0D04",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "black-28": {
        "$value": "#0D0E05",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "dark-yellow-28": {
        "$value": "#6B6D25",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "yellow-3": {
        "$value": "#A9AC60",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "dark-yellow-29": {
        "$value": "#6D702B",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "dark-yellow-30": {
        "$value": "#767930",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "black-29": {
        "$value": "#0D0D07",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "black-30": {
        "$value": "#060702",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "black-31": {
        "$value": "#0A0B04",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "dark-yellow-31": {
        "$value": "#6D6E25",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "dark-yellow-32": {
        "$value": "#6A7027",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "dark-yellow-33": {
        "$value": "#6D7629",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "dark-yellow-34": {
        "$value": "#6C7528",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "black-32": {
        "$value": "#0F0E05",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "black-33": {
        "$value": "#0E0B04",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "dark-yellow-35": {
        "$value": "#707729",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "black-34": {
        "$value": "#121106",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "light-gray-7": {
        "$value": "#D4D5D5",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "black-35": {
        "$value": "#020202",
        "$type": "color",
        "$description": "text · ×3"
      },
      "black-36": {
        "$value": "#070704",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "black-37": {
        "$value": "#090905",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "black-38": {
        "$value": "#090904",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "black-39": {
        "$value": "#0F0F05",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-yellow-36": {
        "$value": "#737629",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-yellow-37": {
        "$value": "#6C6E25",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-yellow-38": {
        "$value": "#686B24",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-yellow-39": {
        "$value": "#71752A",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-yellow-40": {
        "$value": "#7A7D35",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "black-40": {
        "$value": "#0A0A05",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "black-41": {
        "$value": "#0B0D04",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "black-42": {
        "$value": "#0F0F07",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-yellow-41": {
        "$value": "#40470A",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-green-2": {
        "$value": "#515F0E",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-yellow-42": {
        "$value": "#3D4609",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-yellow-43": {
        "$value": "#3C4609",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "black-43": {
        "$value": "#0D0D05",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "black-44": {
        "$value": "#060502",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-yellow-44": {
        "$value": "#6F7428",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-yellow-45": {
        "$value": "#737528",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-yellow-46": {
        "$value": "#6A7328",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-yellow-47": {
        "$value": "#6D732A",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "black-45": {
        "$value": "#0A0804",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-yellow-48": {
        "$value": "#6F752C",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "orange-6": {
        "$value": "#F9BD2B",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "blue-4": {
        "$value": "#0143CB",
        "$type": "color",
        "$description": "gradient · ×2"
      },
      "cyan-4": {
        "$value": "#29DBBB",
        "$type": "color",
        "$description": "background · ×2"
      },
      "orange-7": {
        "$value": "#FF5A00",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-green-3": {
        "$value": "#128414",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "cyan-5": {
        "$value": "#00E1FF",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "blue-5": {
        "$value": "#3970FD",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "green": {
        "$value": "#6AA84F",
        "$type": "color",
        "$description": "background · ×2"
      },
      "yellow-4": {
        "$value": "#F9C624",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "orange-8": {
        "$value": "#F99309",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "orange-9": {
        "$value": "#E24E01",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "black-46": {
        "$value": "#010100",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "yellow-5": {
        "$value": "#ADB064",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "black-47": {
        "$value": "#0E0E07",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-49": {
        "$value": "#676923",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-50": {
        "$value": "#626622",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "yellow-6": {
        "$value": "#999C53",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-51": {
        "$value": "#70742D",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-52": {
        "$value": "#71752D",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "black-48": {
        "$value": "#090A05",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "black-49": {
        "$value": "#080905",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "black-50": {
        "$value": "#0F1005",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "black-51": {
        "$value": "#0D0D06",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "black-52": {
        "$value": "#050602",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "black-53": {
        "$value": "#101007",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "black-54": {
        "$value": "#101005",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-53": {
        "$value": "#71752C",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-54": {
        "$value": "#70742A",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-green-4": {
        "$value": "#52600F",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-green-5": {
        "$value": "#51600E",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-55": {
        "$value": "#3D470A",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-56": {
        "$value": "#3D460A",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-57": {
        "$value": "#6C6F27",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-58": {
        "$value": "#6D6D25",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "yellow-7": {
        "$value": "#8F9333",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-59": {
        "$value": "#3E460A",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "green-2": {
        "$value": "#778446",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "green-3": {
        "$value": "#738043",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-60": {
        "$value": "#676D25",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "black-55": {
        "$value": "#060401",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "black-56": {
        "$value": "#070502",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "black-57": {
        "$value": "#0B0803",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-61": {
        "$value": "#6C7027",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-62": {
        "$value": "#6C7327",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "black-58": {
        "$value": "#0A0703",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-63": {
        "$value": "#6A7127",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-64": {
        "$value": "#666D25",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-65": {
        "$value": "#6D7529",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-66": {
        "$value": "#697328",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "black-59": {
        "$value": "#050401",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "yellow-8": {
        "$value": "#AEB166",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-67": {
        "$value": "#707328",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "yellow-9": {
        "$value": "#A8AB60",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-68": {
        "$value": "#777B31",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-69": {
        "$value": "#706E27",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-70": {
        "$value": "#6B7028",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-71": {
        "$value": "#6E7328",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "black-60": {
        "$value": "#0F0D06",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "light-gray-8": {
        "$value": "rgba(229, 231, 224, 0.75)",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-orange-2": {
        "$value": "#FFF1D5",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-blue": {
        "$value": "#DAE0EB",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-orange-3": {
        "$value": "#D4C9B8",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-gray-9": {
        "$value": "rgba(229, 231, 224, 0.5)",
        "$type": "color",
        "$description": "background · ×1"
      },
      "white-2": {
        "$value": "#FDFDF8",
        "$type": "color",
        "$description": "background · ×1"
      },
      "blue-6": {
        "$value": "#2B6FF4",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "red": {
        "$value": "#D23401",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "orange-10": {
        "$value": "#FF651F",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "orange-11": {
        "$value": "#FBA000",
        "$type": "color",
        "$description": "gradient · ×1"
      },
      "light-gray-10": {
        "$value": "rgba(210, 211, 204, 0.5)",
        "$type": "color",
        "$description": "background · ×1"
      },
      "white-3": {
        "$value": "#FFFEFE",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "blue-7": {
        "$value": "#4B73FF",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "pink": {
        "$value": "#FF66F4",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-2": {
        "$value": "#FF0105",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-12": {
        "$value": "#FE7B02",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "cyan-6": {
        "$value": "#40BA9B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-purple": {
        "$value": "#AB81E9",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "cyan-7": {
        "$value": "#00BA97",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "blue-8": {
        "$value": "#0079FF",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-gray-6": {
        "$value": "#1F1F1F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "cyan-8": {
        "$value": "#3ECF8E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-10": {
        "$value": "#F7D046",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-13": {
        "$value": "#F2A73B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-14": {
        "$value": "#EE792F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-3": {
        "$value": "#EB5829",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-4": {
        "$value": "#EA3326",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-15": {
        "$value": "#F3B01C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "pink-2": {
        "$value": "#8D2676",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-5": {
        "$value": "#EE342F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "blue-9": {
        "$value": "#1F40EC",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-6": {
        "$value": "#FF6363",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-16": {
        "$value": "#F1A82C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-11": {
        "$value": "#ADB066",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-72": {
        "$value": "#6C6D25",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-61": {
        "$value": "#070804",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-62": {
        "$value": "#080903",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-63": {
        "$value": "#080904",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-73": {
        "$value": "#6E7128",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-12": {
        "$value": "#959753",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-74": {
        "$value": "#787A30",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-13": {
        "$value": "#A1A45C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-14": {
        "$value": "#969A52",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-64": {
        "$value": "#050502",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-65": {
        "$value": "#0B0D05",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-75": {
        "$value": "#747729",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-76": {
        "$value": "#6F7329",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-77": {
        "$value": "#717528",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-78": {
        "$value": "#70742B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-66": {
        "$value": "#0E0E06",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-79": {
        "$value": "#70732C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-80": {
        "$value": "#6D7029",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-15": {
        "$value": "#919434",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-67": {
        "$value": "#0D0E07",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-68": {
        "$value": "#080805",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-gray-7": {
        "$value": "#111208",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-81": {
        "$value": "#71752B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-82": {
        "$value": "#75782D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-83": {
        "$value": "#74772C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-16": {
        "$value": "#888D4F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-orange-4": {
        "$value": "#F7B984",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-17": {
        "$value": "#BA8B63",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-orange-5": {
        "$value": "#F9C9A1",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-18": {
        "$value": "#B98B63",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-19": {
        "$value": "#B98A62",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-orange-6": {
        "$value": "#F4B782",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-orange-7": {
        "$value": "#F3C69F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-6": {
        "$value": "#53610E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-84": {
        "$value": "#515E0D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-7": {
        "$value": "#4F5E0D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-85": {
        "$value": "#53600F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-86": {
        "$value": "#6F7529",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-8": {
        "$value": "#505F0E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-9": {
        "$value": "#3C470A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-4": {
        "$value": "#768244",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-5": {
        "$value": "#778445",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-6": {
        "$value": "#768245",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-10": {
        "$value": "#3C480A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-11": {
        "$value": "#505E0E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-87": {
        "$value": "#6D7429",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-7": {
        "$value": "#798546",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-8": {
        "$value": "#748244",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-9": {
        "$value": "#758042",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-10": {
        "$value": "#748243",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-12": {
        "$value": "#505E0D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-88": {
        "$value": "#6E6F25",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-89": {
        "$value": "#6B6F27",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-11": {
        "$value": "#6F7B3E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-13": {
        "$value": "#3E4A0A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-12": {
        "$value": "#6E7B40",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-13": {
        "$value": "#778345",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-90": {
        "$value": "#687127",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-14": {
        "$value": "#4E5E0D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-91": {
        "$value": "#6C7629",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-14": {
        "$value": "#758143",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-15": {
        "$value": "#6D7C41",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-15": {
        "$value": "#46530B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-92": {
        "$value": "#626D25",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-16": {
        "$value": "#48570D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-93": {
        "$value": "#696F27",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-94": {
        "$value": "#666F27",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-95": {
        "$value": "#746F27",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-20": {
        "$value": "#89503A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-16": {
        "$value": "#718143",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-17": {
        "$value": "#303A08",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-18": {
        "$value": "#4E5C0D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-17": {
        "$value": "#7D892F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-18": {
        "$value": "#999E5F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-96": {
        "$value": "#4F5B0D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-19": {
        "$value": "#394509",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-97": {
        "$value": "#2F3707",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-98": {
        "$value": "#626221",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-20": {
        "$value": "#48521C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-99": {
        "$value": "#53561E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-11": {
        "$value": "#DAD7D4",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-100": {
        "$value": "#3A3B14",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-101": {
        "$value": "#717A2A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-21": {
        "$value": "#4A5D0D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-102": {
        "$value": "#586121",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-21": {
        "$value": "#885A40",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-69": {
        "$value": "#040301",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-70": {
        "$value": "#100E05",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-103": {
        "$value": "#707829",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-104": {
        "$value": "#6D7628",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-105": {
        "$value": "#717127",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-71": {
        "$value": "#0F0D05",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-106": {
        "$value": "#6F7127",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-72": {
        "$value": "#080602",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-107": {
        "$value": "#747629",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-108": {
        "$value": "#6F7729",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-109": {
        "$value": "#6D7729",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-110": {
        "$value": "#6F6C24",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-111": {
        "$value": "#716F27",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-19": {
        "$value": "#888D30",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-22": {
        "$value": "#B68B63",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-23": {
        "$value": "#B58D63",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-20": {
        "$value": "#8A8A2F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-21": {
        "$value": "#88862E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-22": {
        "$value": "#8D9334",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-73": {
        "$value": "#110A07",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-24": {
        "$value": "#B88B63",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-gray-8": {
        "$value": "#150E09",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-25": {
        "$value": "#B88F66",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-74": {
        "$value": "#050302",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-75": {
        "$value": "#060403",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-23": {
        "$value": "#ABAD61",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-24": {
        "$value": "#AAAC61",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-25": {
        "$value": "#9EA25A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-26": {
        "$value": "#A6AB60",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-112": {
        "$value": "#6F762C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-113": {
        "$value": "#6F752D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-114": {
        "$value": "#46451F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-115": {
        "$value": "#6F772D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-116": {
        "$value": "#6E6F29",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-117": {
        "$value": "#75762D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-76": {
        "$value": "#0B0A06",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-77": {
        "$value": "#0D0904",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-78": {
        "$value": "#0E0A04",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-79": {
        "$value": "#110F06",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-80": {
        "$value": "#0D0A05",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-81": {
        "$value": "#0B0804",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-118": {
        "$value": "#6D752C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-119": {
        "$value": "#6D752B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-82": {
        "$value": "#0F0B04",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-83": {
        "$value": "#121207",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-120": {
        "$value": "#6D762D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-121": {
        "$value": "#6A7329",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-122": {
        "$value": "#6C742B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-123": {
        "$value": "#6A7428",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-27": {
        "$value": "#959353",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-28": {
        "$value": "#979B4E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-29": {
        "$value": "#A2AB5F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-84": {
        "$value": "#0E0D06",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-85": {
        "$value": "#0D0905",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-86": {
        "$value": "#070603",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-gray-9": {
        "$value": "#131307",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-87": {
        "$value": "#0F0E07",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-88": {
        "$value": "#0B0A05",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-124": {
        "$value": "#6E762D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-30": {
        "$value": "#ACAF64",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-31": {
        "$value": "#ACAF63",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-32": {
        "$value": "#A7AA60",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-33": {
        "$value": "#A0A35B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-89": {
        "$value": "#0E0F05",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-90": {
        "$value": "#0A0B05",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-91": {
        "$value": "#0E0F06",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-92": {
        "$value": "#030301",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-93": {
        "$value": "#040502",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-125": {
        "$value": "#73762B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-126": {
        "$value": "#73752D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-127": {
        "$value": "#6F732A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-26": {
        "$value": "#E8783D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-27": {
        "$value": "#F7A73A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-34": {
        "$value": "#F9D767",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-12": {
        "$value": "#DDDFDF",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-13": {
        "$value": "#D9DBDB",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-14": {
        "$value": "#E2E8E8",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-15": {
        "$value": "#D3D1D1",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-16": {
        "$value": "#D3D6D6",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-17": {
        "$value": "#D5D9D9",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-18": {
        "$value": "#D0D5D5",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-19": {
        "$value": "#DCE3E3",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-20": {
        "$value": "#BDC0C0",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-21": {
        "$value": "#D3DBDB",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-22": {
        "$value": "#C6C8C8",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-23": {
        "$value": "#D2DCDC",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-24": {
        "$value": "#C6C7C7",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-25": {
        "$value": "#C5C9C9",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-26": {
        "$value": "#B8C3C3",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-27": {
        "$value": "#D2D4D4",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-28": {
        "$value": "#D1D5D5",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-29": {
        "$value": "#DBE4E4",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "mid-gray-3": {
        "$value": "#A0A0A0",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-cyan": {
        "$value": "#CEDEDE",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-30": {
        "$value": "#D3DADA",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-31": {
        "$value": "#DED7D7",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-94": {
        "$value": "#030201",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "black-95": {
        "$value": "#090702",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-32": {
        "$value": "#E7EBEB",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-cyan-2": {
        "$value": "#DFEEEE",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-128": {
        "$value": "#6A6722",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-129": {
        "$value": "#706C24",
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
        "$value": "13px",
        "$type": "dimension"
      },
      "font-size-sm": {
        "$value": "14px",
        "$type": "dimension"
      },
      "font-size-base": {
        "$value": "15px",
        "$type": "dimension"
      },
      "font-size-lg": {
        "$value": "16px",
        "$type": "dimension"
      },
      "font-size-xl": {
        "$value": "18px",
        "$type": "dimension"
      },
      "font-size-2xl": {
        "$value": "19.2857px",
        "$type": "dimension"
      },
      "font-size-3xl": {
        "$value": "20px",
        "$type": "dimension"
      },
      "font-size-4xl": {
        "$value": "21.4286px",
        "$type": "dimension"
      },
      "font-size-5xl": {
        "$value": "24px",
        "$type": "dimension"
      },
      "font-size-6xl": {
        "$value": "36px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "IBM Plex Sans Variable",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "ui-monospace",
        "$type": "fontFamily"
      },
      "font-family-3": {
        "$value": "Source Code Pro",
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
      },
      "font-weight-extrabold": {
        "$value": "800",
        "$type": "fontWeight"
      }
    },
    "lineHeight": {
      "line-height-tight": {
        "$value": "13px",
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
        "$value": "17.875px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "18.75px",
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
        "$value": "22.2857px",
        "$type": "dimension"
      },
      "line-height-lh-9": {
        "$value": "22.5px",
        "$type": "dimension"
      },
      "line-height-lh-10": {
        "$value": "24px",
        "$type": "dimension"
      },
      "line-height-lh-11": {
        "$value": "25.7143px",
        "$type": "dimension"
      },
      "line-height-lh-12": {
        "$value": "27px",
        "$type": "dimension"
      },
      "line-height-lh-13": {
        "$value": "28px",
        "$type": "dimension"
      },
      "line-height-lh-14": {
        "$value": "30px",
        "$type": "dimension"
      },
      "line-height-lh-15": {
        "$value": "32px",
        "$type": "dimension"
      },
      "line-height-lh-16": {
        "$value": "54px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "-0.6px",
        "$type": "dimension"
      },
      "letter-spacing-normal": {
        "$value": "-0.535714px",
        "$type": "dimension"
      },
      "letter-spacing-wide": {
        "$value": "-0.482143px",
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
        "$value": "4px",
        "$type": "dimension"
      },
      "space-4": {
        "$value": "4.28571px",
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
        "$value": "6.42857px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "8px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "8.57143px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "10px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "12px",
        "$type": "dimension"
      },
      "space-24": {
        "$value": "120px",
        "$type": "dimension"
      },
      "space-32": {
        "$value": "16px",
        "$type": "dimension"
      },
      "space-40": {
        "$value": "17.1429px",
        "$type": "dimension"
      },
      "space-48": {
        "$value": "20px",
        "$type": "dimension"
      },
      "space-64": {
        "$value": "22px",
        "$type": "dimension"
      },
      "space-80": {
        "$value": "23.5714px",
        "$type": "dimension"
      },
      "space-96": {
        "$value": "24px",
        "$type": "dimension"
      },
      "space-128": {
        "$value": "32px",
        "$type": "dimension"
      },
      "space-160": {
        "$value": "34.2857px",
        "$type": "dimension"
      },
      "space-192": {
        "$value": "48px",
        "$type": "dimension"
      },
      "space-256": {
        "$value": "64px",
        "$type": "dimension"
      },
      "space-23": {
        "$value": "84.5px",
        "$type": "dimension"
      },
      "space-25": {
        "$value": "217.602px",
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
        "$value": "50",
        "$type": "number"
      },
      "z-5": {
        "$value": "999999",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "1px",
        "$type": "dimension"
      },
      "breakpoint-sm": {
        "$value": "425px",
        "$type": "dimension"
      },
      "breakpoint-md": {
        "$value": "482px",
        "$type": "dimension"
      },
      "breakpoint-lg": {
        "$value": "640px",
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
        "$value": "800px",
        "$type": "dimension"
      },
      "breakpoint-bp-8": {
        "$value": "900px",
        "$type": "dimension"
      },
      "breakpoint-bp-9": {
        "$value": "1024px",
        "$type": "dimension"
      },
      "breakpoint-bp-10": {
        "$value": "1076px",
        "$type": "dimension"
      },
      "breakpoint-bp-11": {
        "$value": "1160px",
        "$type": "dimension"
      },
      "breakpoint-bp-12": {
        "$value": "1280px",
        "$type": "dimension"
      },
      "breakpoint-bp-13": {
        "$value": "1536px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
        "$value": "0px 0px 6px 6px",
        "$type": "dimension"
      },
      "radius-md": {
        "$value": "0px 0px 4px",
        "$type": "dimension"
      },
      "radius-lg": {
        "$value": "0px 0px 0px 4px",
        "$type": "dimension"
      },
      "radius-xl": {
        "$value": "2px",
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
        "$value": "6px 6px 0px 0px",
        "$type": "dimension"
      },
      "radius-r9": {
        "$value": "8px",
        "$type": "dimension"
      },
      "radius-r10": {
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
      },
      "border-width-thick": {
        "$value": "4px",
        "$type": "dimension"
      }
    },
    "shadow": {
      "shadow-sm": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
        "$type": "shadow"
      },
      "shadow-md": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.4) 0px 0px 6px 2px",
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
        "$value": "0.3s",
        "$type": "duration"
      }
    },
    "easing": {}
  },
  "opacity": {
    "opacity-15": {
      "$value": 0.15,
      "$type": "number"
    },
    "opacity-20": {
      "$value": 0.2,
      "$type": "number"
    },
    "opacity-35": {
      "$value": 0.35,
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
    "opacity-65": {
      "$value": 0.65,
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
