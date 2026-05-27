# General Intelligence Company — Design System

**Source:** https://www.generalintelligencecompany.com/  
**Generated:** 05/05/2026, 21:20:25  
**Extracted:** 858 colors · 33 type tokens · 30 spacing steps · 1 breakpoints · 9 motion tokens

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
| `--color-white` | `#FFFFFF` | hsl(0, 0%, 100%) | ×212 |
| `--color-white-2` | `#F9FAF7` | hsl(80, 23%, 97%) | ×25 |
| `--color-dark-gray-4` | `#646464` | hsl(0, 0%, 39%) | ×24 |
| `--color-light-gray` | `#B4B8B4` | hsl(120, 3%, 71%) | ×22 |
| `--color-white-4` | `#FEFFFC` | hsl(80, 100%, 99%) | ×12 |
| `--color-light-gray-2` | `#CFD3CF` | hsl(120, 4%, 82%) | ×12 |
| `--color-blue-2` | `rgba(156, 180, 192, 0.14)` | hsl(204, 21%, 68%) | ×4 |
| `--color-dark-gray-8` | `#1F1F29` | hsl(240, 14%, 14%) | ×1 |
| `--color-dark-cyan` | `#334444` | hsl(180, 14%, 23%) | ×1 |
| `--color-cyan` | `#576A6A` | hsl(180, 10%, 38%) | ×1 |
| `--color-cyan-2` | `#728383` | hsl(180, 7%, 48%) | ×1 |
| `--color-mid-gray` | `#A5AFAF` | hsl(180, 6%, 67%) | ×1 |
| `--color-light-gray-5` | `rgba(222, 226, 222, 0.16)` | hsl(0, 0%, 88%) | ×1 |
| `--color-cyan-3` | `#0081C0` | hsl(200, 100%, 38%) | ×1 |
| `--color-light-cyan` | `rgba(207, 235, 231, 0.5)` | hsl(171, 41%, 87%) | ×1 |
| `--color-light-cyan-2` | `rgba(160, 215, 209, 0.5)` | hsl(174, 41%, 73%) | ×1 |
| `--color-light-cyan-3` | `#A0D7D1` | hsl(173, 41%, 74%) | ×1 |

### Text Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-gray` | `#171717` | hsl(0, 0%, 9%) | ×2755 |
| `--color-black` | `#000000` | hsl(0, 0%, 0%) | ×1582 |
| `--color-dark-gray-2` | `#444141` | hsl(0, 2%, 26%) | ×135 |
| `--color-dark-gray-3` | `#2C2C2C` | hsl(0, 0%, 17%) | ×106 |
| `--color-white-3` | `#F3F5F2` | hsl(100, 13%, 95%) | ×21 |
| `--color-blue` | `#9DB0BD` | hsl(204, 20%, 68%) | ×8 |
| `--color-dark-blue-2` | `#101828` | hsl(220, 43%, 11%) | ×6 |
| `--color-dark-blue-3` | `#364153` | hsl(217, 21%, 27%) | ×4 |
| `--color-dark-gray-7` | `#2D2D2D` | hsl(0, 0%, 18%) | ×2 |

### Border Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-gray-3` | `#DEE2DE` | hsl(120, 6%, 88%) | ×5 |
| `--color-light-gray-4` | `#CFD1D3` | hsl(210, 4%, 82%) | ×4 |
| `--color-dark-gray-9` | `#282834` | hsl(240, 13%, 18%) | ×1 |
| `--color-cyan-4` | `#41A1CF` | hsl(199, 60%, 53%) | ×1 |
| `--color-light-gray-7` | `#E5E5E5` | hsl(0, 0%, 90%) | ×1 |

### Shadow Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-blue-3` | `rgba(80, 115, 138, 0.24)` | hsl(201, 27%, 43%) | ×4 |

### Fill & Gradient Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-dark-blue` | `#1F2937` | hsl(215, 28%, 17%) | ×33 |
| `--color-green` | `#91B737` | hsl(78, 54%, 47%) | ×7 |
| `--color-yellow` | `#FDEA65` | hsl(52, 97%, 69%) | ×6 |
| `--color-yellow-2` | `#FDDE56` | hsl(49, 98%, 66%) | ×6 |
| `--color-yellow-3` | `#FDEA64` | hsl(53, 97%, 69%) | ×5 |
| `--color-dark-green` | `#667E1A` | hsl(74, 66%, 30%) | ×5 |
| `--color-yellow-4` | `#FEDE56` | hsl(49, 99%, 67%) | ×4 |
| `--color-yellow-5` | `#FCEA63` | hsl(53, 96%, 69%) | ×4 |
| `--color-yellow-6` | `#FDE961` | hsl(52, 98%, 69%) | ×4 |
| `--color-light-yellow` | `#FBF887` | hsl(58, 94%, 76%) | ×4 |
| `--color-yellow-7` | `#FDEC67` | hsl(53, 97%, 70%) | ×4 |
| `--color-green-2` | `#90B636` | hsl(78, 54%, 46%) | ×4 |
| `--color-green-3` | `#7BA12B` | hsl(79, 58%, 40%) | ×4 |
| `--color-dark-green-2` | `#6E8C24` | hsl(77, 59%, 35%) | ×4 |
| `--color-yellow-8` | `#FDEC65` | hsl(53, 97%, 69%) | ×3 |
| `--color-light-yellow-2` | `#FBF986` | hsl(59, 94%, 75%) | ×3 |
| `--color-yellow-9` | `#FDDD56` | hsl(49, 98%, 66%) | ×3 |
| `--color-red` | `#B54931` | hsl(11, 57%, 45%) | ×3 |
| `--color-orange` | `#F9C53D` | hsl(43, 94%, 61%) | ×3 |
| `--color-dark-yellow` | `#3E4A00` | hsl(70, 100%, 15%) | ×3 |
| `--color-green-4` | `#90B535` | hsl(77, 55%, 46%) | ×3 |
| `--color-green-5` | `#90B635` | hsl(78, 55%, 46%) | ×3 |
| `--color-green-6` | `#BBD545` | hsl(71, 63%, 55%) | ×3 |
| `--color-green-7` | `#BBD544` | hsl(71, 63%, 55%) | ×3 |
| `--color-green-8` | `#92B837` | hsl(78, 54%, 47%) | ×3 |
| `--color-yellow-10` | `#D0E265` | hsl(69, 68%, 64%) | ×3 |
| `--color-green-9` | `#8DB433` | hsl(78, 56%, 45%) | ×3 |
| `--color-dark-green-3` | `#3E4B03` | hsl(71, 92%, 15%) | ×3 |
| `--color-dark-green-4` | `#394700` | hsl(72, 100%, 14%) | ×3 |
| `--color-dark-yellow-2` | `#656F07` | hsl(66, 88%, 23%) | ×3 |
| `--color-dark-green-5` | `#384900` | hsl(74, 100%, 14%) | ×3 |
| `--color-dark-gray-5` | `rgba(68, 65, 65, 0.12)` | hsl(0, 0%, 26%) | ×3 |
| `--color-dark-gray-6` | `rgba(68, 65, 65, 0.07)` | hsl(0, 0%, 28%) | ×3 |
| `--color-yellow-11` | `#FCD34A` | hsl(46, 97%, 64%) | ×2 |
| `--color-yellow-12` | `#FDE75E` | hsl(52, 98%, 68%) | ×2 |
| `--color-yellow-13` | `#FCE863` | hsl(52, 96%, 69%) | ×2 |
| `--color-yellow-14` | `#FDEA62` | hsl(53, 97%, 69%) | ×2 |
| `--color-yellow-15` | `#FDDC54` | hsl(48, 98%, 66%) | ×2 |
| `--color-orange-2` | `#FCA962` | hsl(28, 96%, 69%) | ×2 |
| `--color-orange-3` | `#FBAF60` | hsl(31, 95%, 68%) | ×2 |
| `--color-light-yellow-3` | `#FFFF80` | hsl(60, 100%, 75%) | ×2 |
| `--color-light-yellow-4` | `#FDEF6C` | hsl(54, 97%, 71%) | ×2 |
| `--color-orange-4` | `#FCCF4C` | hsl(45, 97%, 64%) | ×2 |
| `--color-yellow-16` | `#FCEA65` | hsl(53, 96%, 69%) | ×2 |
| `--color-yellow-17` | `#FDE65F` | hsl(51, 98%, 68%) | ×2 |
| `--color-orange-5` | `#FFBF40` | hsl(40, 100%, 63%) | ×2 |
| `--color-yellow-18` | `#FCD14D` | hsl(45, 97%, 65%) | ×2 |
| `--color-yellow-19` | `#FCDD57` | hsl(49, 96%, 66%) | ×2 |
| `--color-yellow-20` | `#FCE961` | hsl(53, 96%, 68%) | ×2 |
| `--color-orange-6` | `#F9C63F` | hsl(44, 94%, 61%) | ×2 |
| `--color-yellow-21` | `#FCD853` | hsl(47, 97%, 66%) | ×2 |
| `--color-orange-7` | `#F9C33C` | hsl(43, 94%, 61%) | ×2 |
| `--color-light-yellow-5` | `#FCF374` | hsl(56, 96%, 72%) | ×2 |
| `--color-orange-8` | `#E7A82D` | hsl(40, 79%, 54%) | ×2 |
| `--color-yellow-22` | `#FDEB63` | hsl(53, 97%, 69%) | ×2 |
| `--color-yellow-23` | `#FCD64F` | hsl(47, 97%, 65%) | ×2 |
| `--color-yellow-24` | `#FEE25F` | hsl(49, 99%, 68%) | ×2 |
| `--color-red-2` | `#B94B34` | hsl(10, 56%, 46%) | ×2 |
| `--color-light-yellow-6` | `#FCF986` | hsl(58, 95%, 76%) | ×2 |
| `--color-yellow-25` | `#FAE15B` | hsl(51, 94%, 67%) | ×2 |
| `--color-green-10` | `#8FB536` | hsl(78, 54%, 46%) | ×2 |
| `--color-dark-yellow-3` | `#3E4902` | hsl(69, 95%, 15%) | ×2 |
| `--color-green-11` | `#86AB31` | hsl(78, 55%, 43%) | ×2 |
| `--color-green-12` | `#92B738` | hsl(77, 53%, 47%) | ×2 |
| `--color-orange-9` | `#E3B336` | hsl(43, 76%, 55%) | ×2 |
| `--color-dark-yellow-4` | `#808000` | hsl(60, 100%, 25%) | ×2 |
| `--color-dark-yellow-5` | `#686E14` | hsl(64, 69%, 25%) | ×2 |
| `--color-dark-green-6` | `#465403` | hsl(70, 93%, 17%) | ×2 |
| `--color-yellow-26` | `#CEE264` | hsl(70, 68%, 64%) | ×2 |
| `--color-yellow-27` | `#CDE164` | hsl(70, 68%, 64%) | ×2 |
| `--color-green-13` | `#8DB335` | hsl(78, 54%, 45%) | ×2 |
| `--color-green-14` | `#91B738` | hsl(78, 53%, 47%) | ×2 |
| `--color-green-15` | `#8CB135` | hsl(78, 54%, 45%) | ×2 |
| `--color-dark-green-7` | `#425002` | hsl(71, 95%, 16%) | ×2 |
| `--color-green-16` | `#8FB435` | hsl(77, 55%, 46%) | ×2 |
| `--color-green-17` | `#91B637` | hsl(77, 54%, 46%) | ×2 |
| `--color-green-18` | `#91B736` | hsl(78, 54%, 46%) | ×2 |
| `--color-green-19` | `#90B536` | hsl(77, 54%, 46%) | ×2 |
| `--color-green-20` | `#92B836` | hsl(78, 55%, 47%) | ×2 |
| `--color-green-21` | `#BBD542` | hsl(71, 64%, 55%) | ×2 |
| `--color-green-22` | `#92B737` | hsl(77, 54%, 47%) | ×2 |
| `--color-dark-green-8` | `#647D18` | hsl(75, 68%, 29%) | ×2 |
| `--color-green-23` | `#92B736` | hsl(77, 54%, 46%) | ×2 |
| `--color-green-24` | `#90B735` | hsl(78, 55%, 46%) | ×2 |
| `--color-green-25` | `#91B536` | hsl(77, 54%, 46%) | ×2 |
| `--color-green-26` | `#93AC45` | hsl(75, 43%, 47%) | ×2 |
| `--color-dark-green-9` | `#3E4E02` | hsl(73, 95%, 16%) | ×2 |
| `--color-green-27` | `#88AD32` | hsl(78, 55%, 44%) | ×2 |
| `--color-green-28` | `#8AAE33` | hsl(78, 55%, 44%) | ×2 |
| `--color-green-29` | `#8BB132` | hsl(78, 56%, 45%) | ×2 |
| `--color-yellow-28` | `#AAAA55` | hsl(60, 33%, 50%) | ×2 |
| `--color-green-30` | `#8EB435` | hsl(78, 55%, 46%) | ×2 |
| `--color-dark-yellow-6` | `#4E5906` | hsl(68, 87%, 19%) | ×2 |
| `--color-dark-green-10` | `#3E4D02` | hsl(72, 95%, 15%) | ×2 |
| `--color-dark-green-11` | `#3F4F03` | hsl(73, 93%, 16%) | ×2 |
| `--color-green-31` | `#8BAF34` | hsl(78, 54%, 45%) | ×2 |
| `--color-dark-yellow-7` | `#8B9914` | hsl(66, 77%, 34%) | ×2 |
| `--color-light-yellow-7` | `#FBF475` | hsl(57, 94%, 72%) | ×1 |
| `--color-yellow-29` | `#FCD43A` | hsl(48, 97%, 61%) | ×1 |
| `--color-yellow-30` | `#FDEC62` | hsl(53, 97%, 69%) | ×1 |
| `--color-light-yellow-8` | `#FDEA6D` | hsl(52, 97%, 71%) | ×1 |
| `--color-light-yellow-9` | `#FDF16F` | hsl(55, 97%, 71%) | ×1 |
| `--color-light-yellow-10` | `#FBE974` | hsl(52, 94%, 72%) | ×1 |
| `--color-yellow-31` | `#FCE15A` | hsl(50, 96%, 67%) | ×1 |
| `--color-light-yellow-11` | `#FCF475` | hsl(56, 96%, 72%) | ×1 |
| `--color-yellow-32` | `#FCE866` | hsl(52, 96%, 69%) | ×1 |
| `--color-yellow-33` | `#FCCF44` | hsl(45, 97%, 63%) | ×1 |
| `--color-yellow-34` | `#FCEB63` | hsl(53, 96%, 69%) | ×1 |
| `--color-yellow-35` | `#FDE766` | hsl(51, 97%, 70%) | ×1 |
| `--color-yellow-36` | `#FCE75F` | hsl(52, 96%, 68%) | ×1 |
| `--color-yellow-37` | `#FFFF66` | hsl(60, 100%, 70%) | ×1 |
| `--color-yellow-38` | `#FDDE55` | hsl(49, 98%, 66%) | ×1 |
| `--color-yellow-39` | `#FCD048` | hsl(45, 97%, 64%) | ×1 |
| `--color-light-yellow-12` | `#FDF472` | hsl(56, 97%, 72%) | ×1 |
| `--color-yellow-40` | `#FDE65C` | hsl(51, 98%, 68%) | ×1 |
| `--color-light-yellow-13` | `#FCF373` | hsl(56, 96%, 72%) | ×1 |
| `--color-light-yellow-14` | `#FCF577` | hsl(57, 96%, 73%) | ×1 |
| `--color-light-yellow-15` | `#FBFD7A` | hsl(61, 97%, 74%) | ×1 |
| `--color-yellow-41` | `#FDEC60` | hsl(54, 98%, 68%) | ×1 |
| `--color-yellow-42` | `#FCDF5B` | hsl(49, 96%, 67%) | ×1 |
| `--color-orange-10` | `#FCC45D` | hsl(39, 96%, 68%) | ×1 |
| `--color-light-yellow-16` | `#FDEE6B` | hsl(54, 97%, 71%) | ×1 |
| `--color-yellow-43` | `#FAE960` | hsl(53, 94%, 68%) | ×1 |
| `--color-yellow-44` | `#F8D54C` | hsl(48, 92%, 64%) | ×1 |
| `--color-yellow-45` | `#FDDF58` | hsl(49, 98%, 67%) | ×1 |
| `--color-light-yellow-17` | `#FBF68E` | hsl(57, 93%, 77%) | ×1 |
| `--color-yellow-46` | `#F7DF51` | hsl(51, 91%, 64%) | ×1 |
| `--color-light-yellow-18` | `#FAF373` | hsl(57, 93%, 72%) | ×1 |
| `--color-light-yellow-19` | `#FCF478` | hsl(56, 96%, 73%) | ×1 |
| `--color-yellow-47` | `#FBE159` | hsl(50, 95%, 67%) | ×1 |
| `--color-orange-11` | `#FBA065` | hsl(24, 95%, 69%) | ×1 |
| `--color-yellow-48` | `#FADB53` | hsl(49, 94%, 65%) | ×1 |
| `--color-yellow-49` | `#FBE65E` | hsl(52, 95%, 68%) | ×1 |
| `--color-orange-12` | `#FCA864` | hsl(27, 96%, 69%) | ×1 |
| `--color-yellow-50` | `#FCE862` | hsl(52, 96%, 69%) | ×1 |
| `--color-light-yellow-20` | `#FBF983` | hsl(59, 94%, 75%) | ×1 |
| `--color-light-yellow-21` | `#FCE278` | hsl(48, 96%, 73%) | ×1 |
| `--color-yellow-51` | `#FFFF00` | hsl(60, 100%, 50%) | ×1 |
| `--color-light-yellow-22` | `#F7F294` | hsl(57, 86%, 77%) | ×1 |
| `--color-light-yellow-23` | `#F8F58B` | hsl(58, 89%, 76%) | ×1 |
| `--color-yellow-52` | `#FCEA62` | hsl(53, 96%, 69%) | ×1 |
| `--color-yellow-53` | `#F9D852` | hsl(48, 93%, 65%) | ×1 |
| `--color-light-yellow-24` | `#FBFB8D` | hsl(60, 93%, 77%) | ×1 |
| `--color-yellow-54` | `#FDDC55` | hsl(48, 98%, 66%) | ×1 |
| `--color-yellow-55` | `#FDEA63` | hsl(53, 97%, 69%) | ×1 |
| `--color-light-yellow-25` | `#FBF375` | hsl(56, 94%, 72%) | ×1 |
| `--color-yellow-56` | `#FDD951` | hsl(47, 98%, 65%) | ×1 |
| `--color-yellow-57` | `#FDE761` | hsl(52, 98%, 69%) | ×1 |
| `--color-orange-13` | `#FAA165` | hsl(24, 94%, 69%) | ×1 |
| `--color-yellow-58` | `#FEDD53` | hsl(48, 99%, 66%) | ×1 |
| `--color-orange-14` | `#FCA964` | hsl(27, 96%, 69%) | ×1 |
| `--color-yellow-59` | `#F1D462` | hsl(48, 84%, 66%) | ×1 |
| `--color-yellow-60` | `#FEEB64` | hsl(53, 99%, 69%) | ×1 |
| `--color-light-yellow-26` | `#FCF477` | hsl(56, 96%, 73%) | ×1 |
| `--color-orange-15` | `#FCCB43` | hsl(44, 97%, 63%) | ×1 |
| `--color-yellow-61` | `#FDD64E` | hsl(47, 98%, 65%) | ×1 |
| `--color-orange-16` | `#FA9155` | hsl(22, 94%, 66%) | ×1 |
| `--color-yellow-62` | `#FDDB56` | hsl(48, 98%, 66%) | ×1 |
| `--color-yellow-63` | `#FDE05C` | hsl(49, 98%, 68%) | ×1 |
| `--color-light-yellow-27` | `#FCF171` | hsl(55, 96%, 72%) | ×1 |
| `--color-yellow-64` | `#FDD952` | hsl(47, 98%, 66%) | ×1 |
| `--color-yellow-65` | `#FDE760` | hsl(52, 98%, 68%) | ×1 |
| `--color-orange-17` | `#FAA164` | hsl(24, 94%, 69%) | ×1 |
| `--color-orange-18` | `#FCA963` | hsl(27, 96%, 69%) | ×1 |
| `--color-yellow-66` | `#FDDE54` | hsl(49, 98%, 66%) | ×1 |
| `--color-yellow-67` | `#FFE966` | hsl(51, 100%, 70%) | ×1 |
| `--color-yellow-68` | `#FDDF57` | hsl(49, 98%, 67%) | ×1 |
| `--color-yellow-69` | `#FDE661` | hsl(51, 98%, 69%) | ×1 |
| `--color-light-yellow-28` | `#FCF16F` | hsl(55, 96%, 71%) | ×1 |
| `--color-orange-19` | `#FBCA43` | hsl(44, 96%, 62%) | ×1 |
| `--color-yellow-70` | `#FCD54E` | hsl(47, 97%, 65%) | ×1 |
| `--color-light-yellow-29` | `#FBFA88` | hsl(59, 93%, 76%) | ×1 |
| `--color-orange-20` | `#F99054` | hsl(22, 93%, 65%) | ×1 |
| `--color-yellow-71` | `#FCEB64` | hsl(53, 96%, 69%) | ×1 |
| `--color-yellow-72` | `#FCD952` | hsl(48, 97%, 65%) | ×1 |
| `--color-light-yellow-30` | `#FCF06E` | hsl(55, 96%, 71%) | ×1 |
| `--color-light-orange` | `#FEDB7B` | hsl(44, 98%, 74%) | ×1 |
| `--color-orange-21` | `#FCA65E` | hsl(27, 96%, 68%) | ×1 |
| `--color-yellow-73` | `#FEDA5A` | hsl(47, 99%, 67%) | ×1 |
| `--color-yellow-74` | `#FDE75F` | hsl(52, 98%, 68%) | ×1 |
| `--color-light-yellow-31` | `#FDEE6A` | hsl(54, 97%, 70%) | ×1 |
| `--color-orange-22` | `#FCCA45` | hsl(44, 97%, 63%) | ×1 |
| `--color-yellow-75` | `#FDD44E` | hsl(46, 98%, 65%) | ×1 |
| `--color-light-yellow-32` | `#FCF989` | hsl(58, 95%, 76%) | ×1 |
| `--color-light-yellow-33` | `#FCFCDF` | hsl(60, 83%, 93%) | ×1 |
| `--color-orange-23` | `#FA9053` | hsl(22, 94%, 65%) | ×1 |
| `--color-light-yellow-34` | `#FDF474` | hsl(56, 97%, 72%) | ×1 |
| `--color-yellow-76` | `#FEDD56` | hsl(48, 99%, 67%) | ×1 |
| `--color-yellow-77` | `#FDDB55` | hsl(48, 98%, 66%) | ×1 |
| `--color-light-yellow-35` | `#FDDD7C` | hsl(45, 97%, 74%) | ×1 |
| `--color-light-yellow-36` | `#FCF679` | hsl(57, 96%, 73%) | ×1 |
| `--color-orange-24` | `#FDCB61` | hsl(41, 98%, 69%) | ×1 |
| `--color-yellow-78` | `#FDDD58` | hsl(48, 98%, 67%) | ×1 |
| `--color-yellow-79` | `#FDD34B` | hsl(46, 98%, 64%) | ×1 |
| `--color-light-yellow-37` | `#FEF77D` | hsl(57, 98%, 74%) | ×1 |
| `--color-orange-25` | `#FBBC5F` | hsl(36, 95%, 68%) | ×1 |
| `--color-light-yellow-38` | `#FCF882` | hsl(58, 95%, 75%) | ×1 |
| `--color-light-yellow-39` | `#FCDF77` | hsl(47, 96%, 73%) | ×1 |
| `--color-yellow-80` | `#FEEE65` | hsl(54, 99%, 70%) | ×1 |
| `--color-orange-26` | `#FB8B4C` | hsl(22, 96%, 64%) | ×1 |
| `--color-light-orange-2` | `#FFD577` | hsl(41, 100%, 73%) | ×1 |
| `--color-orange-27` | `#F3A439` | hsl(35, 89%, 59%) | ×1 |
| `--color-orange-28` | `#FA8D50` | hsl(22, 94%, 65%) | ×1 |
| `--color-yellow-81` | `#FBE055` | hsl(50, 95%, 66%) | ×1 |
| `--color-yellow-82` | `#FEE25C` | hsl(50, 99%, 68%) | ×1 |
| `--color-yellow-83` | `#FDDB57` | hsl(48, 98%, 67%) | ×1 |
| `--color-light-orange-3` | `#FEDD7C` | hsl(45, 98%, 74%) | ×1 |
| `--color-light-yellow-40` | `#FCF67A` | hsl(57, 96%, 73%) | ×1 |
| `--color-light-yellow-41` | `#FDF67A` | hsl(57, 97%, 74%) | ×1 |
| `--color-orange-29` | `#FEA163` | hsl(24, 99%, 69%) | ×1 |
| `--color-light-yellow-42` | `#FBF878` | hsl(59, 94%, 73%) | ×1 |
| `--color-orange-30` | `#FDA862` | hsl(27, 97%, 69%) | ×1 |
| `--color-yellow-84` | `#FDDD57` | hsl(48, 98%, 67%) | ×1 |
| `--color-yellow-85` | `#FCD44B` | hsl(46, 97%, 64%) | ×1 |
| `--color-orange-31` | `#FDCB67` | hsl(40, 97%, 70%) | ×1 |
| `--color-yellow-86` | `#FBE860` | hsl(53, 95%, 68%) | ×1 |
| `--color-orange-32` | `#FA8D4F` | hsl(22, 94%, 65%) | ×1 |
| `--color-light-orange-4` | `#FDD977` | hsl(44, 97%, 73%) | ×1 |
| `--color-light-yellow-43` | `#FCF271` | hsl(56, 96%, 72%) | ×1 |
| `--color-yellow-87` | `#FEE65D` | hsl(51, 99%, 68%) | ×1 |
| `--color-yellow-88` | `#F7CB42` | hsl(45, 92%, 61%) | ×1 |
| `--color-yellow-89` | `#FBD85B` | hsl(47, 95%, 67%) | ×1 |
| `--color-yellow-90` | `#F9D04B` | hsl(46, 94%, 64%) | ×1 |
| `--color-light-yellow-44` | `#F8DD77` | hsl(47, 90%, 72%) | ×1 |
| `--color-light-yellow-45` | `#FCF880` | hsl(58, 95%, 75%) | ×1 |
| `--color-yellow-91` | `#FDD54A` | hsl(47, 98%, 64%) | ×1 |
| `--color-yellow-92` | `#FDEA60` | hsl(53, 98%, 68%) | ×1 |
| `--color-yellow-93` | `#FCD84E` | hsl(48, 97%, 65%) | ×1 |
| `--color-yellow-94` | `#F3CA49` | hsl(46, 88%, 62%) | ×1 |
| `--color-light-yellow-46` | `#FBF990` | hsl(59, 93%, 77%) | ×1 |
| `--color-light-orange-5` | `#F5D77E` | hsl(45, 86%, 73%) | ×1 |
| `--color-orange-33` | `#CC7B21` | hsl(32, 72%, 46%) | ×1 |
| `--color-orange-34` | `#EE9F38` | hsl(34, 84%, 58%) | ×1 |
| `--color-yellow-95` | `#FCDA54` | hsl(48, 97%, 66%) | ×1 |
| `--color-yellow-96` | `#F9CF4F` | hsl(45, 93%, 64%) | ×1 |
| `--color-yellow-97` | `#FCEC68` | hsl(54, 96%, 70%) | ×1 |
| `--color-yellow-98` | `#FDED66` | hsl(54, 97%, 70%) | ×1 |
| `--color-orange-35` | `#BF7A27` | hsl(33, 66%, 45%) | ×1 |
| `--color-yellow-99` | `#FBD359` | hsl(45, 95%, 67%) | ×1 |
| `--color-orange-36` | `#BA8B20` | hsl(42, 71%, 43%) | ×1 |
| `--color-orange-37` | `#F5C43F` | hsl(44, 90%, 60%) | ×1 |
| `--color-light-yellow-47` | `#FEF079` | hsl(54, 99%, 74%) | ×1 |
| `--color-orange-38` | `#FACB58` | hsl(43, 94%, 66%) | ×1 |
| `--color-yellow-100` | `#FCD350` | hsl(46, 97%, 65%) | ×1 |
| `--color-orange-39` | `#EEA147` | hsl(32, 83%, 61%) | ×1 |
| `--color-yellow-101` | `#F2CD44` | hsl(47, 87%, 61%) | ×1 |
| `--color-yellow-102` | `#F8DD5B` | hsl(50, 92%, 66%) | ×1 |
| `--color-yellow-103` | `#F9DD5C` | hsl(49, 93%, 67%) | ×1 |
| `--color-orange-40` | `#F8C749` | hsl(43, 93%, 63%) | ×1 |
| `--color-light-orange-6` | `#FED96A` | hsl(45, 99%, 71%) | ×1 |
| `--color-yellow-104` | `#FBEB6A` | hsl(53, 95%, 70%) | ×1 |
| `--color-orange-41` | `#F8945C` | hsl(22, 92%, 67%) | ×1 |
| `--color-light-yellow-48` | `#FCEE6C` | hsl(54, 96%, 71%) | ×1 |
| `--color-yellow-105` | `#FDE058` | hsl(49, 98%, 67%) | ×1 |
| `--color-yellow-106` | `#FEDF56` | hsl(49, 99%, 67%) | ×1 |
| `--color-yellow-107` | `#FBE964` | hsl(53, 95%, 69%) | ×1 |
| `--color-light-yellow-49` | `#FBF679` | hsl(58, 94%, 73%) | ×1 |
| `--color-orange-42` | `#FBCB45` | hsl(44, 96%, 63%) | ×1 |
| `--color-orange-43` | `#F7C13A` | hsl(43, 92%, 60%) | ×1 |
| `--color-light-yellow-50` | `#FBF988` | hsl(59, 93%, 76%) | ×1 |
| `--color-orange-44` | `#B87519` | hsl(35, 76%, 41%) | ×1 |
| `--color-orange-45` | `#E0A32B` | hsl(40, 74%, 52%) | ×1 |
| `--color-orange-46` | `#E0A32D` | hsl(40, 74%, 53%) | ×1 |
| `--color-orange-47` | `#D47425` | hsl(27, 70%, 49%) | ×1 |
| `--color-orange-48` | `#F9BD33` | hsl(42, 94%, 59%) | ×1 |
| `--color-orange-49` | `#BA7A19` | hsl(36, 76%, 41%) | ×1 |
| `--color-light-yellow-51` | `#FCFA88` | hsl(59, 95%, 76%) | ×1 |
| `--color-orange-50` | `#FA9454` | hsl(23, 94%, 65%) | ×1 |
| `--color-orange-51` | `#F8965A` | hsl(23, 92%, 66%) | ×1 |
| `--color-orange-52` | `#F8C640` | hsl(44, 93%, 61%) | ×1 |
| `--color-yellow-108` | `#FDD954` | hsl(47, 98%, 66%) | ×1 |
| `--color-yellow-109` | `#FDDA52` | hsl(48, 98%, 66%) | ×1 |
| `--color-orange-53` | `#FDD160` | hsl(43, 98%, 68%) | ×1 |
| `--color-light-yellow-52` | `#FBEC84` | hsl(52, 94%, 75%) | ×1 |
| `--color-red-3` | `#C45638` | hsl(13, 56%, 49%) | ×1 |
| `--color-orange-54` | `#FAAA58` | hsl(30, 94%, 66%) | ×1 |
| `--color-yellow-110` | `#FDEB67` | hsl(53, 97%, 70%) | ×1 |
| `--color-yellow-111` | `#FCEC65` | hsl(54, 96%, 69%) | ×1 |
| `--color-yellow-112` | `#FDEF66` | hsl(54, 97%, 70%) | ×1 |
| `--color-orange-55` | `#FAA361` | hsl(26, 94%, 68%) | ×1 |
| `--color-light-yellow-53` | `#FCF476` | hsl(56, 96%, 73%) | ×1 |
| `--color-orange-56` | `#FCD04C` | hsl(45, 97%, 64%) | ×1 |
| `--color-yellow-113` | `#FEE961` | hsl(52, 99%, 69%) | ×1 |
| `--color-yellow-114` | `#FDD348` | hsl(46, 98%, 64%) | ×1 |
| `--color-orange-57` | `#BA7A1A` | hsl(36, 75%, 42%) | ×1 |
| `--color-light-orange-7` | `#FDDC8E` | hsl(42, 97%, 77%) | ×1 |
| `--color-orange-58` | `#F9C33B` | hsl(43, 94%, 60%) | ×1 |
| `--color-orange-59` | `#FAC43D` | hsl(43, 95%, 61%) | ×1 |
| `--color-orange-60` | `#FCCE5A` | hsl(43, 96%, 67%) | ×1 |
| `--color-orange-61` | `#EDA335` | hsl(36, 84%, 57%) | ×1 |
| `--color-yellow-115` | `#FCD94F` | hsl(48, 97%, 65%) | ×1 |
| `--color-red-4` | `#C05434` | hsl(14, 57%, 48%) | ×1 |
| `--color-yellow-116` | `#F9E158` | hsl(51, 93%, 66%) | ×1 |
| `--color-orange-62` | `#FAC63E` | hsl(43, 95%, 61%) | ×1 |
| `--color-yellow-117` | `#FCE965` | hsl(52, 96%, 69%) | ×1 |
| `--color-orange-63` | `#FAA565` | hsl(26, 94%, 69%) | ×1 |
| `--color-yellow-118` | `#F4E05F` | hsl(52, 87%, 66%) | ×1 |
| `--color-light-yellow-54` | `#FEF77F` | hsl(57, 98%, 75%) | ×1 |
| `--color-light-yellow-55` | `#FBF982` | hsl(59, 94%, 75%) | ×1 |
| `--color-red-5` | `#BC4F36` | hsl(11, 55%, 47%) | ×1 |
| `--color-red-6` | `#BC5036` | hsl(12, 55%, 47%) | ×1 |
| `--color-orange-64` | `#FDB962` | hsl(34, 97%, 69%) | ×1 |
| `--color-light-yellow-56` | `#FEED69` | hsl(53, 99%, 70%) | ×1 |
| `--color-red-7` | `#B64B34` | hsl(11, 56%, 46%) | ×1 |
| `--color-orange-65` | `#F9A363` | hsl(26, 93%, 68%) | ×1 |
| `--color-light-orange-8` | `#FDDB79` | hsl(45, 97%, 73%) | ×1 |
| `--color-light-yellow-57` | `#FDFD76` | hsl(60, 97%, 73%) | ×1 |
| `--color-yellow-119` | `#FDEB5F` | hsl(53, 98%, 68%) | ×1 |
| `--color-orange-66` | `#F8C33B` | hsl(43, 93%, 60%) | ×1 |
| `--color-orange-67` | `#B47419` | hsl(35, 76%, 40%) | ×1 |
| `--color-orange-68` | `#FAC733` | hsl(45, 95%, 59%) | ×1 |
| `--color-orange-69` | `#F2B438` | hsl(40, 88%, 58%) | ×1 |
| `--color-orange-70` | `#F2B537` | hsl(40, 88%, 58%) | ×1 |
| `--color-light-yellow-58` | `#FDDD74` | hsl(46, 97%, 72%) | ×1 |
| `--color-orange-71` | `#F4B737` | hsl(41, 90%, 59%) | ×1 |
| `--color-light-yellow-59` | `#FDF881` | hsl(58, 97%, 75%) | ×1 |
| `--color-light-yellow-60` | `#F6EF7C` | hsl(57, 87%, 73%) | ×1 |
| `--color-yellow-120` | `#FDD751` | hsl(47, 98%, 65%) | ×1 |
| `--color-light-orange-9` | `#FAA574` | hsl(22, 93%, 72%) | ×1 |
| `--color-light-yellow-61` | `#FBFA8D` | hsl(59, 93%, 77%) | ×1 |
| `--color-yellow-121` | `#FDEF67` | hsl(54, 97%, 70%) | ×1 |
| `--color-yellow-122` | `#FCE057` | hsl(50, 96%, 66%) | ×1 |
| `--color-light-yellow-62` | `#FCF474` | hsl(56, 96%, 72%) | ×1 |
| `--color-yellow-123` | `#FCD24A` | hsl(46, 97%, 64%) | ×1 |
| `--color-yellow-124` | `#FFE056` | hsl(49, 100%, 67%) | ×1 |
| `--color-light-yellow-63` | `#FBF783` | hsl(58, 94%, 75%) | ×1 |
| `--color-light-yellow-64` | `#FBF984` | hsl(59, 94%, 75%) | ×1 |
| `--color-light-orange-10` | `#FDD87A` | hsl(43, 97%, 74%) | ×1 |
| `--color-red-8` | `#B84B33` | hsl(11, 57%, 46%) | ×1 |
| `--color-red-9` | `#BA4E34` | hsl(12, 56%, 47%) | ×1 |
| `--color-orange-72` | `#D88F27` | hsl(35, 69%, 50%) | ×1 |
| `--color-orange-73` | `#FAA263` | hsl(25, 94%, 68%) | ×1 |
| `--color-orange-74` | `#CD9023` | hsl(38, 71%, 47%) | ×1 |
| `--color-yellow-125` | `#FDEB62` | hsl(53, 97%, 69%) | ×1 |
| `--color-yellow-126` | `#FDEE64` | hsl(54, 97%, 69%) | ×1 |
| `--color-orange-75` | `#D27722` | hsl(29, 72%, 48%) | ×1 |
| `--color-orange-76` | `#E2A52A` | hsl(40, 76%, 53%) | ×1 |
| `--color-orange-77` | `#E2A52B` | hsl(40, 76%, 53%) | ×1 |
| `--color-orange-78` | `#D37823` | hsl(29, 72%, 48%) | ×1 |
| `--color-orange-79` | `#F3B635` | hsl(41, 89%, 58%) | ×1 |
| `--color-orange-80` | `#C2831C` | hsl(37, 75%, 44%) | ×1 |
| `--color-yellow-127` | `#FCD248` | hsl(46, 97%, 64%) | ×1 |
| `--color-yellow-128` | `#FBE760` | hsl(52, 95%, 68%) | ×1 |
| `--color-yellow-129` | `#FDD752` | hsl(47, 98%, 66%) | ×1 |
| `--color-orange-81` | `#F78E4E` | hsl(23, 91%, 64%) | ×1 |
| `--color-orange-82` | `#E8AA30` | hsl(40, 80%, 55%) | ×1 |
| `--color-orange-83` | `#FAC53C` | hsl(43, 95%, 61%) | ×1 |
| `--color-orange-84` | `#FAC53D` | hsl(43, 95%, 61%) | ×1 |
| `--color-orange-85` | `#FAC63D` | hsl(43, 95%, 61%) | ×1 |
| `--color-yellow-130` | `#FDE25B` | hsl(50, 98%, 67%) | ×1 |
| `--color-orange-86` | `#FAAB56` | hsl(31, 94%, 66%) | ×1 |
| `--color-yellow-131` | `#FDD34D` | hsl(46, 98%, 65%) | ×1 |
| `--color-yellow-132` | `#FCE962` | hsl(53, 96%, 69%) | ×1 |
| `--color-light-yellow-65` | `#FCF883` | hsl(58, 95%, 75%) | ×1 |
| `--color-light-yellow-66` | `#FCF984` | hsl(58, 95%, 75%) | ×1 |
| `--color-yellow-133` | `#FCD54C` | hsl(47, 97%, 64%) | ×1 |
| `--color-orange-87` | `#FAC33D` | hsl(43, 95%, 61%) | ×1 |
| `--color-orange-88` | `#C5841F` | hsl(37, 73%, 45%) | ×1 |
| `--color-orange-89` | `#C6851D` | hsl(37, 74%, 45%) | ×1 |
| `--color-red-10` | `#AF482F` | hsl(12, 58%, 44%) | ×1 |
| `--color-orange-90` | `#F78E50` | hsl(22, 91%, 64%) | ×1 |
| `--color-yellow-134` | `#FED756` | hsl(46, 99%, 67%) | ×1 |
| `--color-yellow-135` | `#FDEC66` | hsl(53, 97%, 70%) | ×1 |
| `--color-yellow-136` | `#FDD34E` | hsl(46, 98%, 65%) | ×1 |
| `--color-yellow-137` | `#FDEB65` | hsl(53, 97%, 69%) | ×1 |
| `--color-orange-91` | `#B47516` | hsl(36, 78%, 40%) | ×1 |
| `--color-yellow-138` | `#FCCF46` | hsl(45, 97%, 63%) | ×1 |
| `--color-yellow-139` | `#FDEB66` | hsl(53, 97%, 70%) | ×1 |
| `--color-orange-92` | `#F5BD39` | hsl(42, 90%, 59%) | ×1 |
| `--color-yellow-140` | `#FDEB68` | hsl(53, 97%, 70%) | ×1 |
| `--color-yellow-141` | `#FDEC68` | hsl(53, 97%, 70%) | ×1 |
| `--color-yellow-142` | `#FBD248` | hsl(46, 96%, 63%) | ×1 |
| `--color-orange-93` | `#F3A258` | hsl(29, 87%, 65%) | ×1 |
| `--color-red-11` | `#B2472E` | hsl(11, 59%, 44%) | ×1 |
| `--color-orange-94` | `#C98C1F` | hsl(38, 73%, 45%) | ×1 |
| `--color-yellow-143` | `#FDE45A` | hsl(51, 98%, 67%) | ×1 |
| `--color-light-yellow-67` | `#FDF16E` | hsl(55, 97%, 71%) | ×1 |
| `--color-light-yellow-68` | `#FCF170` | hsl(55, 96%, 71%) | ×1 |
| `--color-light-yellow-69` | `#FCF98C` | hsl(58, 95%, 77%) | ×1 |
| `--color-light-yellow-70` | `#FCEB73` | hsl(53, 96%, 72%) | ×1 |
| `--color-yellow-144` | `#FDE360` | hsl(50, 98%, 68%) | ×1 |
| `--color-light-yellow-71` | `#F8F487` | hsl(58, 89%, 75%) | ×1 |
| `--color-light-yellow-72` | `#FBF68F` | hsl(57, 93%, 77%) | ×1 |
| `--color-yellow-145` | `#F5D252` | hsl(47, 89%, 64%) | ×1 |
| `--color-yellow-146` | `#F3D151` | hsl(47, 87%, 64%) | ×1 |
| `--color-orange-95` | `#EFBE40` | hsl(43, 85%, 59%) | ×1 |
| `--color-orange-96` | `#DCA02D` | hsl(39, 71%, 52%) | ×1 |
| `--color-orange-97` | `#B85E2A` | hsl(22, 63%, 44%) | ×1 |
| `--color-orange-98` | `#E28550` | hsl(22, 72%, 60%) | ×1 |
| `--color-yellow-147` | `#FADB59` | hsl(48, 94%, 66%) | ×1 |
| `--color-orange-99` | `#F9B24F` | hsl(35, 93%, 64%) | ×1 |
| `--color-yellow-148` | `#FDE25F` | hsl(50, 98%, 68%) | ×1 |
| `--color-orange-100` | `#E7B33D` | hsl(42, 78%, 57%) | ×1 |
| `--color-yellow-149` | `#F7D64D` | hsl(48, 91%, 64%) | ×1 |
| `--color-light-yellow-73` | `#FBE375` | hsl(49, 94%, 72%) | ×1 |
| `--color-orange-101` | `#FDD767` | hsl(45, 97%, 70%) | ×1 |
| `--color-yellow-150` | `#FCEB67` | hsl(53, 96%, 70%) | ×1 |
| `--color-light-yellow-74` | `#FBD96E` | hsl(46, 95%, 71%) | ×1 |
| `--color-orange-102` | `#FCC161` | hsl(37, 96%, 68%) | ×1 |
| `--color-orange-103` | `#E58955` | hsl(22, 73%, 62%) | ×1 |
| `--color-orange-104` | `#BB6128` | hsl(23, 65%, 45%) | ×1 |
| `--color-orange-105` | `#CD8C29` | hsl(36, 67%, 48%) | ×1 |
| `--color-yellow-151` | `#F7D04B` | hsl(46, 91%, 63%) | ×1 |
| `--color-yellow-152` | `#F8D754` | hsl(48, 92%, 65%) | ×1 |
| `--color-yellow-153` | `#F8D853` | hsl(48, 92%, 65%) | ×1 |
| `--color-yellow-154` | `#F7D853` | hsl(49, 91%, 65%) | ×1 |
| `--color-light-yellow-75` | `#FDDA6B` | hsl(46, 97%, 71%) | ×1 |
| `--color-light-yellow-76` | `#FFE26A` | hsl(48, 100%, 71%) | ×1 |
| `--color-orange-106` | `#FCD162` | hsl(43, 96%, 69%) | ×1 |
| `--color-light-yellow-77` | `#FCE374` | hsl(49, 96%, 72%) | ×1 |
| `--color-orange-107` | `#FCD265` | hsl(43, 96%, 69%) | ×1 |
| `--color-orange-108` | `#FF8000` | hsl(30, 100%, 50%) | ×1 |
| `--color-red-12` | `#B94C36` | hsl(10, 55%, 47%) | ×1 |
| `--color-orange-109` | `#FC9B57` | hsl(25, 96%, 66%) | ×1 |
| `--color-light-yellow-78` | `#FBF985` | hsl(59, 94%, 75%) | ×1 |
| `--color-orange-110` | `#F89B5B` | hsl(24, 92%, 66%) | ×1 |
| `--color-red-13` | `#BD5136` | hsl(12, 56%, 48%) | ×1 |
| `--color-orange-111` | `#F0B12F` | hsl(40, 87%, 56%) | ×1 |
| `--color-orange-112` | `#F78A4E` | hsl(21, 91%, 64%) | ×1 |
| `--color-orange-113` | `#F88A4F` | hsl(21, 92%, 64%) | ×1 |
| `--color-red-14` | `#B34930` | hsl(11, 58%, 45%) | ×1 |
| `--color-yellow-155` | `#FCD657` | hsl(46, 96%, 66%) | ×1 |
| `--color-orange-114` | `#FCC761` | hsl(39, 96%, 68%) | ×1 |
| `--color-orange-115` | `#FCC65F` | hsl(39, 96%, 68%) | ×1 |
| `--color-red-15` | `#BD4B37` | hsl(9, 55%, 48%) | ×1 |
| `--color-orange-116` | `#B57517` | hsl(36, 77%, 40%) | ×1 |
| `--color-orange-117` | `#CA8E20` | hsl(39, 73%, 46%) | ×1 |
| `--color-orange-118` | `#CB8E21` | hsl(38, 72%, 46%) | ×1 |
| `--color-orange-119` | `#F6BD40` | hsl(41, 91%, 61%) | ×1 |
| `--color-yellow-156` | `#FBD24A` | hsl(46, 96%, 64%) | ×1 |
| `--color-orange-120` | `#FBC13D` | hsl(42, 96%, 61%) | ×1 |
| `--color-orange-121` | `#FDCD63` | hsl(41, 97%, 69%) | ×1 |
| `--color-orange-122` | `#FDCE62` | hsl(42, 97%, 69%) | ×1 |
| `--color-orange-123` | `#F98B50` | hsl(21, 93%, 65%) | ×1 |
| `--color-orange-124` | `#F88D4F` | hsl(22, 92%, 64%) | ×1 |
| `--color-red-16` | `#BC4D37` | hsl(10, 55%, 48%) | ×1 |
| `--color-red-17` | `#BC4C37` | hsl(9, 55%, 48%) | ×1 |
| `--color-red-18` | `#BC4C38` | hsl(9, 54%, 48%) | ×1 |
| `--color-orange-125` | `#FF9966` | hsl(20, 100%, 70%) | ×1 |
| `--color-light-orange-11` | `#FCA884` | hsl(18, 95%, 75%) | ×1 |
| `--color-light-orange-12` | `#FAA682` | hsl(18, 92%, 75%) | ×1 |
| `--color-orange-126` | `#F1B439` | hsl(40, 87%, 58%) | ×1 |
| `--color-orange-127` | `#F2B538` | hsl(40, 88%, 58%) | ×1 |
| `--color-orange-128` | `#F2B536` | hsl(41, 88%, 58%) | ×1 |
| `--color-red-19` | `#B64B33` | hsl(11, 56%, 46%) | ×1 |
| `--color-orange-129` | `#FCAE5E` | hsl(30, 96%, 68%) | ×1 |
| `--color-yellow-157` | `#FCD656` | hsl(46, 97%, 66%) | ×1 |
| `--color-yellow-158` | `#FDD454` | hsl(45, 98%, 66%) | ×1 |
| `--color-orange-130` | `#FBC05D` | hsl(38, 95%, 67%) | ×1 |
| `--color-yellow-159` | `#FDE259` | hsl(50, 98%, 67%) | ×1 |
| `--color-yellow-160` | `#FCED68` | hsl(54, 96%, 70%) | ×1 |
| `--color-orange-131` | `#B6761A` | hsl(35, 75%, 41%) | ×1 |
| `--color-orange-132` | `#B7781A` | hsl(36, 75%, 41%) | ×1 |
| `--color-orange-133` | `#F98D51` | hsl(21, 93%, 65%) | ×1 |
| `--color-orange-134` | `#F98F51` | hsl(22, 93%, 65%) | ×1 |
| `--color-orange-135` | `#FAA267` | hsl(24, 94%, 69%) | ×1 |
| `--color-light-yellow-79` | `#F8F880` | hsl(60, 90%, 74%) | ×1 |
| `--color-orange-136` | `#F7B633` | hsl(40, 92%, 58%) | ×1 |
| `--color-orange-137` | `#FAC740` | hsl(44, 95%, 62%) | ×1 |
| `--color-orange-138` | `#F88C50` | hsl(21, 92%, 64%) | ×1 |
| `--color-orange-139` | `#F68F59` | hsl(21, 90%, 66%) | ×1 |
| `--color-red-20` | `#B44A32` | hsl(11, 57%, 45%) | ×1 |
| `--color-red-21` | `#B54A31` | hsl(11, 57%, 45%) | ×1 |
| `--color-orange-140` | `#FDCF5B` | hsl(43, 98%, 67%) | ×1 |
| `--color-light-orange-13` | `#FBA06F` | hsl(21, 95%, 71%) | ×1 |
| `--color-light-orange-14` | `#F8A173` | hsl(21, 90%, 71%) | ×1 |
| `--color-orange-141` | `#C0841C` | hsl(38, 75%, 43%) | ×1 |
| `--color-orange-142` | `#BF841B` | hsl(38, 75%, 43%) | ×1 |
| `--color-red-22` | `#B34931` | hsl(11, 57%, 45%) | ×1 |
| `--color-orange-143` | `#F88C4F` | hsl(22, 92%, 64%) | ×1 |
| `--color-orange-144` | `#FBAC5C` | hsl(30, 95%, 67%) | ×1 |
| `--color-orange-145` | `#FAAC5C` | hsl(30, 94%, 67%) | ×1 |
| `--color-orange-146` | `#F2B638` | hsl(41, 88%, 58%) | ×1 |
| `--color-orange-147` | `#C2681E` | hsl(27, 73%, 44%) | ×1 |
| `--color-orange-148` | `#FAC642` | hsl(43, 95%, 62%) | ×1 |
| `--color-orange-149` | `#FACA42` | hsl(44, 95%, 62%) | ×1 |
| `--color-orange-150` | `#B77719` | hsl(36, 76%, 41%) | ×1 |
| `--color-orange-151` | `#FDC33C` | hsl(42, 98%, 61%) | ×1 |
| `--color-yellow-161` | `#FCEB65` | hsl(53, 96%, 69%) | ×1 |
| `--color-light-yellow-80` | `#FBF987` | hsl(59, 94%, 76%) | ×1 |
| `--color-orange-152` | `#DEA62F` | hsl(41, 73%, 53%) | ×1 |
| `--color-orange-153` | `#FFCF59` | hsl(43, 100%, 67%) | ×1 |
| `--color-orange-154` | `#F9A25F` | hsl(26, 93%, 67%) | ×1 |
| `--color-orange-155` | `#F9A25E` | hsl(26, 93%, 67%) | ×1 |
| `--color-yellow-162` | `#FCD552` | hsl(46, 97%, 65%) | ×1 |
| `--color-yellow-163` | `#FCD550` | hsl(46, 97%, 65%) | ×1 |
| `--color-yellow-164` | `#F7D669` | hsl(46, 90%, 69%) | ×1 |
| `--color-light-orange-15` | `#FAA673` | hsl(23, 93%, 72%) | ×1 |
| `--color-light-orange-16` | `#FBA672` | hsl(23, 94%, 72%) | ×1 |
| `--color-red-23` | `#B74A35` | hsl(10, 55%, 46%) | ×1 |
| `--color-orange-156` | `#F1B637` | hsl(41, 87%, 58%) | ×1 |
| `--color-yellow-165` | `#FCD44C` | hsl(46, 97%, 64%) | ×1 |
| `--color-yellow-166` | `#FBD44C` | hsl(47, 96%, 64%) | ×1 |
| `--color-orange-157` | `#D89528` | hsl(37, 69%, 50%) | ×1 |
| `--color-orange-158` | `#F9C640` | hsl(43, 94%, 61%) | ×1 |
| `--color-yellow-167` | `#FDE25A` | hsl(50, 98%, 67%) | ×1 |
| `--color-yellow-168` | `#FEEF67` | hsl(54, 99%, 70%) | ×1 |
| `--color-yellow-169` | `#FAEA65` | hsl(54, 94%, 69%) | ×1 |
| `--color-yellow-170` | `#FDDE57` | hsl(49, 98%, 67%) | ×1 |
| `--color-yellow-171` | `#FBCE46` | hsl(45, 96%, 63%) | ×1 |
| `--color-light-yellow-81` | `#FDF77A` | hsl(57, 97%, 74%) | ×1 |
| `--color-orange-159` | `#A84B1C` | hsl(20, 71%, 38%) | ×1 |
| `--color-orange-160` | `#FAB269` | hsl(30, 94%, 70%) | ×1 |
| `--color-orange-161` | `#F89B4F` | hsl(27, 92%, 64%) | ×1 |
| `--color-light-orange-17` | `#F9A97A` | hsl(22, 91%, 73%) | ×1 |
| `--color-light-orange-18` | `#FCDA77` | hsl(45, 96%, 73%) | ×1 |
| `--color-yellow-172` | `#FCEA64` | hsl(53, 96%, 69%) | ×1 |
| `--color-yellow-173` | `#FEE05F` | hsl(49, 99%, 68%) | ×1 |
| `--color-yellow-174` | `#FFEA63` | hsl(52, 100%, 69%) | ×1 |
| `--color-yellow-175` | `#FDEB64` | hsl(53, 97%, 69%) | ×1 |
| `--color-light-yellow-82` | `#FBF884` | hsl(58, 94%, 75%) | ×1 |
| `--color-light-yellow-83` | `#F9FA82` | hsl(60, 92%, 75%) | ×1 |
| `--color-dark-green-12` | `#3A4F00` | hsl(76, 100%, 15%) | ×1 |
| `--color-light-yellow-84` | `#FDE17B` | hsl(47, 97%, 74%) | ×1 |
| `--color-light-yellow-85` | `#FDF77C` | hsl(57, 97%, 74%) | ×1 |
| `--color-yellow-176` | `#FEDE55` | hsl(49, 99%, 66%) | ×1 |
| `--color-orange-162` | `#F99D68` | hsl(22, 92%, 69%) | ×1 |
| `--color-yellow-177` | `#FBD751` | hsl(47, 96%, 65%) | ×1 |
| `--color-yellow-178` | `#FCD854` | hsl(47, 97%, 66%) | ×1 |
| `--color-yellow-179` | `#FEEA66` | hsl(52, 99%, 70%) | ×1 |
| `--color-light-yellow-86` | `#FEDE79` | hsl(46, 99%, 74%) | ×1 |
| `--color-yellow-180` | `#F9E05B` | hsl(51, 93%, 67%) | ×1 |
| `--color-red-24` | `#B4492F` | hsl(12, 59%, 45%) | ×1 |
| `--color-orange-163` | `#FCCC4A` | hsl(44, 97%, 64%) | ×1 |
| `--color-orange-164` | `#FDCC48` | hsl(44, 98%, 64%) | ×1 |
| `--color-orange-165` | `#FCCD47` | hsl(44, 97%, 63%) | ×1 |
| `--color-light-yellow-87` | `#FEEC81` | hsl(51, 98%, 75%) | ×1 |
| `--color-light-orange-19` | `#F69D74` | hsl(19, 88%, 71%) | ×1 |
| `--color-yellow-181` | `#F7F45A` | hsl(59, 91%, 66%) | ×1 |
| `--color-dark-green-13` | `#627E19` | hsl(77, 67%, 30%) | ×1 |
| `--color-dark-green-14` | `#6D891E` | hsl(76, 64%, 33%) | ×1 |
| `--color-light-yellow-88` | `#FFE484` | hsl(47, 100%, 76%) | ×1 |
| `--color-light-yellow-89` | `#F7E57B` | hsl(51, 89%, 73%) | ×1 |
| `--color-yellow-182` | `#FCDF5C` | hsl(49, 96%, 67%) | ×1 |
| `--color-orange-166` | `#F99862` | hsl(21, 93%, 68%) | ×1 |
| `--color-yellow-183` | `#FFDB4E` | hsl(48, 100%, 65%) | ×1 |
| `--color-dark-green-15` | `#424F02` | hsl(70, 95%, 16%) | ×1 |
| `--color-orange-167` | `#EE8661` | hsl(16, 81%, 66%) | ×1 |
| `--color-orange-168` | `#F7B45C` | hsl(34, 91%, 66%) | ×1 |
| `--color-light-yellow-90` | `#FDDE7E` | hsl(45, 97%, 74%) | ×1 |
| `--color-light-yellow-91` | `#FDDF80` | hsl(46, 97%, 75%) | ×1 |
| `--color-light-yellow-92` | `#FCF682` | hsl(57, 95%, 75%) | ×1 |
| `--color-orange-169` | `#F6C94A` | hsl(44, 91%, 63%) | ×1 |
| `--color-red-25` | `#A83E2C` | hsl(9, 58%, 42%) | ×1 |
| `--color-red-26` | `#B6472E` | hsl(11, 60%, 45%) | ×1 |
| `--color-orange-170` | `#F6BA40` | hsl(40, 91%, 61%) | ×1 |
| `--color-orange-171` | `#EDB43F` | hsl(40, 83%, 59%) | ×1 |
| `--color-dark-yellow-8` | `#5A670B` | hsl(68, 81%, 22%) | ×1 |
| `--color-green-32` | `#8FB533` | hsl(78, 56%, 45%) | ×1 |
| `--color-dark-green-16` | `#3F4D03` | hsl(71, 93%, 16%) | ×1 |
| `--color-dark-green-17` | `#3F4C00` | hsl(70, 100%, 15%) | ×1 |
| `--color-orange-172` | `#FDCA62` | hsl(40, 97%, 69%) | ×1 |
| `--color-dark-green-18` | `#3D4B02` | hsl(72, 95%, 15%) | ×1 |
| `--color-dark-green-19` | `#394900` | hsl(73, 100%, 14%) | ×1 |
| `--color-dark-green-20` | `#3A4B00` | hsl(74, 100%, 15%) | ×1 |
| `--color-dark-green-21` | `#3A4A02` | hsl(73, 95%, 15%) | ×1 |
| `--color-green-33` | `#8EAF38` | hsl(77, 52%, 45%) | ×1 |
| `--color-light-red` | `#F19781` | hsl(12, 80%, 73%) | ×1 |
| `--color-dark-yellow-9` | `#525B0E` | hsl(67, 73%, 21%) | ×1 |
| `--color-green-34` | `#B3CD3D` | hsl(71, 59%, 52%) | ×1 |
| `--color-dark-yellow-10` | `#3F4A03` | hsl(69, 92%, 15%) | ×1 |
| `--color-dark-yellow-11` | `#3F4A00` | hsl(69, 100%, 15%) | ×1 |
| `--color-dark-green-22` | `#5A6D0B` | hsl(72, 82%, 24%) | ×1 |
| `--color-dark-green-23` | `#5A6D0D` | hsl(72, 79%, 24%) | ×1 |
| `--color-yellow-184` | `#CEE266` | hsl(70, 68%, 64%) | ×1 |
| `--color-green-35` | `#87AC30` | hsl(78, 56%, 43%) | ×1 |
| `--color-dark-green-24` | `#69831E` | hsl(75, 63%, 32%) | ×1 |
| `--color-yellow-185` | `#CDE159` | hsl(69, 69%, 62%) | ×1 |
| `--color-yellow-186` | `#CDE452` | hsl(69, 73%, 61%) | ×1 |
| `--color-dark-yellow-12` | `#3F4B02` | hsl(70, 95%, 15%) | ×1 |
| `--color-dark-green-25` | `#5C6F0B` | hsl(71, 82%, 24%) | ×1 |
| `--color-green-36` | `#B7D049` | hsl(71, 59%, 55%) | ×1 |
| `--color-green-37` | `#7B9B2B` | hsl(77, 57%, 39%) | ×1 |
| `--color-green-38` | `#8DB334` | hsl(78, 55%, 45%) | ×1 |
| `--color-green-39` | `#87AB32` | hsl(78, 55%, 43%) | ×1 |
| `--color-dark-yellow-13` | `#404C02` | hsl(70, 95%, 15%) | ×1 |
| `--color-dark-yellow-14` | `#3E4A02` | hsl(70, 95%, 15%) | ×1 |
| `--color-dark-green-26` | `#3E4B00` | hsl(70, 100%, 15%) | ×1 |
| `--color-dark-yellow-15` | `#515E0D` | hsl(70, 76%, 21%) | ×1 |
| `--color-green-40` | `#7A9A2B` | hsl(77, 56%, 39%) | ×1 |
| `--color-green-41` | `#BBCD71` | hsl(72, 48%, 62%) | ×1 |
| `--color-green-42` | `#88AC32` | hsl(78, 55%, 44%) | ×1 |
| `--color-dark-yellow-16` | `#677706` | hsl(68, 90%, 25%) | ×1 |
| `--color-orange-173` | `#E6B942` | hsl(44, 77%, 58%) | ×1 |
| `--color-dark-yellow-17` | `#3D4901` | hsl(70, 97%, 15%) | ×1 |
| `--color-dark-yellow-18` | `#5B630D` | hsl(66, 77%, 22%) | ×1 |
| `--color-dark-green-27` | `#5F7519` | hsl(74, 65%, 28%) | ×1 |
| `--color-green-43` | `#89AF32` | hsl(78, 56%, 44%) | ×1 |
| `--color-green-44` | `#98BA39` | hsl(76, 53%, 48%) | ×1 |
| `--color-dark-yellow-19` | `#667805` | hsl(69, 92%, 25%) | ×1 |
| `--color-yellow-187` | `#DAB53E` | hsl(46, 68%, 55%) | ×1 |
| `--color-dark-green-28` | `#3D4A01` | hsl(71, 97%, 15%) | ×1 |
| `--color-dark-yellow-20` | `#5A630D` | hsl(66, 77%, 22%) | ×1 |
| `--color-dark-green-29` | `#556611` | hsl(72, 71%, 23%) | ×1 |
| `--color-dark-yellow-21` | `#667706` | hsl(69, 90%, 25%) | ×1 |
| `--color-dark-green-30` | `#4C5B05` | hsl(70, 90%, 19%) | ×1 |
| `--color-dark-yellow-22` | `#4E5A05` | hsl(68, 89%, 19%) | ×1 |
| `--color-dark-yellow-23` | `#59620C` | hsl(66, 78%, 22%) | ×1 |
| `--color-dark-yellow-24` | `#4D5905` | hsl(69, 89%, 18%) | ×1 |
| `--color-dark-yellow-25` | `#696E15` | hsl(63, 68%, 26%) | ×1 |
| `--color-dark-yellow-26` | `#4D5906` | hsl(69, 87%, 19%) | ×1 |
| `--color-dark-yellow-27` | `#837919` | hsl(54, 68%, 31%) | ×1 |
| `--color-dark-yellow-28` | `#676D13` | hsl(64, 70%, 25%) | ×1 |
| `--color-dark-yellow-29` | `#686C14` | hsl(63, 69%, 25%) | ×1 |
| `--color-dark-green-31` | `#455303` | hsl(71, 93%, 17%) | ×1 |
| `--color-orange-174` | `#E3B436` | hsl(44, 76%, 55%) | ×1 |
| `--color-green-45` | `#90B434` | hsl(77, 55%, 45%) | ×1 |
| `--color-dark-green-32` | `#455302` | hsl(70, 95%, 17%) | ×1 |
| `--color-light-green-2` | `#CDDF8C` | hsl(73, 56%, 71%) | ×1 |
| `--color-green-46` | `#94B937` | hsl(77, 54%, 47%) | ×1 |
| `--color-dark-green-33` | `#708E23` | hsl(77, 60%, 35%) | ×1 |
| `--color-yellow-188` | `#D6E96F` | hsl(69, 73%, 67%) | ×1 |
| `--color-yellow-189` | `#CBE05E` | hsl(70, 68%, 62%) | ×1 |
| `--color-green-47` | `#8FB535` | hsl(78, 55%, 46%) | ×1 |
| `--color-dark-green-34` | `#445202` | hsl(71, 95%, 16%) | ×1 |
| `--color-orange-175` | `#E3B335` | hsl(43, 76%, 55%) | ×1 |
| `--color-green-48` | `#8DB036` | hsl(77, 53%, 45%) | ×1 |
| `--color-green-49` | `#99B84B` | hsl(77, 43%, 51%) | ×1 |
| `--color-green-50` | `#8DB238` | hsl(78, 52%, 46%) | ×1 |
| `--color-green-51` | `#93A939` | hsl(72, 50%, 44%) | ×1 |
| `--color-green-52` | `#749C35` | hsl(83, 49%, 41%) | ×1 |
| `--color-green-53` | `#93AA3D` | hsl(73, 47%, 45%) | ×1 |
| `--color-green-54` | `#7BA22E` | hsl(80, 56%, 41%) | ×1 |
| `--color-green-55` | `#C5D77C` | hsl(72, 53%, 66%) | ×1 |
| `--color-green-56` | `#B0CB3A` | hsl(71, 58%, 51%) | ×1 |
| `--color-green-57` | `#92B639` | hsl(77, 52%, 47%) | ×1 |
| `--color-dark-green-35` | `#435202` | hsl(71, 95%, 16%) | ×1 |
| `--color-orange-176` | `#E3B334` | hsl(44, 76%, 55%) | ×1 |
| `--color-yellow-190` | `#D1E262` | hsl(68, 69%, 64%) | ×1 |
| `--color-green-58` | `#82A732` | hsl(79, 54%, 43%) | ×1 |
| `--color-dark-green-36` | `#657F1D` | hsl(76, 63%, 31%) | ×1 |
| `--color-dark-green-37` | `#647F1D` | hsl(77, 63%, 31%) | ×1 |
| `--color-dark-green-38` | `#647F1E` | hsl(77, 62%, 31%) | ×1 |
| `--color-dark-green-39` | `#65811F` | hsl(77, 61%, 31%) | ×1 |
| `--color-dark-green-40` | `#65811E` | hsl(77, 62%, 31%) | ×1 |
| `--color-dark-green-41` | `#67821E` | hsl(76, 62%, 31%) | ×1 |
| `--color-dark-green-42` | `#67831F` | hsl(77, 62%, 32%) | ×1 |
| `--color-green-59` | `#90B637` | hsl(78, 54%, 46%) | ×1 |
| `--color-green-60` | `#83A830` | hsl(79, 56%, 42%) | ×1 |
| `--color-green-61` | `#739932` | hsl(82, 51%, 40%) | ×1 |
| `--color-green-62` | `#9BB54F` | hsl(75, 41%, 51%) | ×1 |
| `--color-green-63` | `#94AA3C` | hsl(72, 48%, 45%) | ×1 |
| `--color-green-64` | `#7AA02E` | hsl(80, 55%, 40%) | ×1 |
| `--color-green-65` | `#B8C86B` | hsl(70, 46%, 60%) | ×1 |
| `--color-green-66` | `#AECA3A` | hsl(72, 58%, 51%) | ×1 |
| `--color-green-67` | `#C3DF6C` | hsl(75, 64%, 65%) | ×1 |
| `--color-dark-green-43` | `#435101` | hsl(70, 98%, 16%) | ×1 |
| `--color-dark-yellow-30` | `#8C8A0C` | hsl(59, 84%, 30%) | ×1 |
| `--color-green-68` | `#93B837` | hsl(77, 54%, 47%) | ×1 |
| `--color-green-69` | `#7CA02F` | hsl(79, 55%, 41%) | ×1 |
| `--color-dark-green-44` | `#647F1A` | hsl(76, 66%, 30%) | ×1 |
| `--color-dark-green-45` | `#647F1B` | hsl(76, 65%, 30%) | ×1 |
| `--color-green-70` | `#92B438` | hsl(76, 53%, 46%) | ×1 |
| `--color-green-71` | `#94B740` | hsl(78, 48%, 48%) | ×1 |
| `--color-green-72` | `#92AA37` | hsl(73, 51%, 44%) | ×1 |
| `--color-green-73` | `#719832` | hsl(83, 50%, 40%) | ×1 |
| `--color-green-74` | `#7BA02D` | hsl(79, 56%, 40%) | ×1 |
| `--color-green-75` | `#7CA22D` | hsl(79, 57%, 41%) | ×1 |
| `--color-green-76` | `#93B73A` | hsl(77, 52%, 47%) | ×1 |
| `--color-dark-yellow-31` | `#8C8A0D` | hsl(59, 83%, 30%) | ×1 |
| `--color-dark-green-46` | `#647D19` | hsl(75, 67%, 29%) | ×1 |
| `--color-green-77` | `#90B534` | hsl(77, 55%, 46%) | ×1 |
| `--color-green-78` | `#BAD643` | hsl(71, 64%, 55%) | ×1 |
| `--color-yellow-191` | `#CBE060` | hsl(70, 67%, 63%) | ×1 |
| `--color-green-79` | `#BBD543` | hsl(71, 63%, 55%) | ×1 |
| `--color-yellow-192` | `#CEE164` | hsl(69, 68%, 64%) | ×1 |
| `--color-green-80` | `#90B634` | hsl(78, 56%, 46%) | ×1 |
| `--color-dark-green-47` | `#647C18` | hsl(74, 68%, 29%) | ×1 |
| `--color-dark-green-48` | `#56690A` | hsl(72, 83%, 23%) | ×1 |
| `--color-green-81` | `#ACC73D` | hsl(72, 55%, 51%) | ×1 |
| `--color-green-82` | `#ACC83D` | hsl(72, 56%, 51%) | ×1 |
| `--color-green-83` | `#99B936` | hsl(75, 55%, 47%) | ×1 |
| `--color-dark-green-49` | `#52630C` | hsl(72, 78%, 22%) | ×1 |
| `--color-green-84` | `#93B836` | hsl(77, 55%, 47%) | ×1 |
| `--color-dark-green-50` | `#415001` | hsl(71, 98%, 16%) | ×1 |
| `--color-dark-yellow-32` | `#8B890E` | hsl(59, 82%, 30%) | ×1 |
| `--color-dark-green-51` | `#637D17` | hsl(75, 69%, 29%) | ×1 |
| `--color-green-85` | `#769930` | hsl(80, 52%, 39%) | ×1 |
| `--color-green-86` | `#BAD543` | hsl(71, 63%, 55%) | ×1 |
| `--color-green-87` | `#BBD644` | hsl(71, 64%, 55%) | ×1 |
| `--color-yellow-193` | `#CEE262` | hsl(69, 69%, 64%) | ×1 |
| `--color-yellow-194` | `#CEE261` | hsl(69, 69%, 63%) | ×1 |
| `--color-yellow-195` | `#BFBF80` | hsl(60, 33%, 63%) | ×1 |
| `--color-green-88` | `#8CB436` | hsl(79, 54%, 46%) | ×1 |
| `--color-yellow-196` | `#C8DB54` | hsl(68, 65%, 59%) | ×1 |
| `--color-green-89` | `#95B448` | hsl(77, 43%, 49%) | ×1 |
| `--color-green-90` | `#94B448` | hsl(78, 43%, 49%) | ×1 |
| `--color-green-91` | `#7A9F2D` | hsl(79, 56%, 40%) | ×1 |
| `--color-light-green-3` | `#D8EA8F` | hsl(72, 68%, 74%) | ×1 |
| `--color-green-92` | `#88AD46` | hsl(82, 42%, 48%) | ×1 |
| `--color-green-93` | `#B5C666` | hsl(71, 46%, 59%) | ×1 |
| `--color-green-94` | `#719425` | hsl(79, 60%, 36%) | ×1 |
| `--color-dark-green-52` | `#3E5202` | hsl(75, 95%, 16%) | ×1 |
| `--color-yellow-197` | `#BCCB62` | hsl(69, 50%, 59%) | ×1 |
| `--color-green-95` | `#93AF32` | hsl(73, 56%, 44%) | ×1 |
| `--color-dark-yellow-33` | `#525C0A` | hsl(67, 80%, 20%) | ×1 |
| `--color-orange-177` | `#F2BE42` | hsl(42, 87%, 60%) | ×1 |
| `--color-green-96` | `#92B834` | hsl(77, 56%, 46%) | ×1 |
| `--color-green-97` | `#8DB237` | hsl(78, 53%, 46%) | ×1 |
| `--color-green-98` | `#B0CB3F` | hsl(72, 57%, 52%) | ×1 |
| `--color-green-99` | `#B0CC3D` | hsl(72, 58%, 52%) | ×1 |
| `--color-green-100` | `#C8DC75` | hsl(72, 60%, 66%) | ×1 |
| `--color-green-101` | `#84A732` | hsl(78, 54%, 43%) | ×1 |
| `--color-green-102` | `#C4D87C` | hsl(73, 54%, 67%) | ×1 |
| `--color-green-103` | `#91B538` | hsl(77, 53%, 46%) | ×1 |
| `--color-dark-green-53` | `#607412` | hsl(72, 73%, 26%) | ×1 |
| `--color-yellow-198` | `#C9DC54` | hsl(68, 66%, 60%) | ×1 |
| `--color-yellow-199` | `#C8DB51` | hsl(68, 66%, 59%) | ×1 |
| `--color-yellow-200` | `#C8DC52` | hsl(69, 66%, 59%) | ×1 |
| `--color-green-104` | `#BBD842` | hsl(72, 66%, 55%) | ×1 |
| `--color-green-105` | `#779C2B` | hsl(80, 57%, 39%) | ×1 |
| `--color-green-106` | `#759A28` | hsl(79, 59%, 38%) | ×1 |
| `--color-yellow-201` | `#BAC56D` | hsl(68, 43%, 60%) | ×1 |
| `--color-green-107` | `#729325` | hsl(78, 60%, 36%) | ×1 |
| `--color-green-108` | `#729424` | hsl(78, 61%, 36%) | ×1 |
| `--color-dark-green-54` | `#404F02` | hsl(72, 95%, 16%) | ×1 |
| `--color-dark-yellow-34` | `#515B0A` | hsl(67, 80%, 20%) | ×1 |
| `--color-orange-178` | `#F6C146` | hsl(42, 91%, 62%) | ×1 |
| `--color-dark-green-55` | `#657D18` | hsl(74, 68%, 29%) | ×1 |
| `--color-green-109` | `#93B735` | hsl(77, 55%, 46%) | ×1 |
| `--color-yellow-202` | `#CBDD5A` | hsl(68, 66%, 61%) | ×1 |
| `--color-light-green-4` | `#D6E88E` | hsl(72, 66%, 73%) | ×1 |
| `--color-green-110` | `#8DB434` | hsl(78, 55%, 45%) | ×1 |
| `--color-green-111` | `#8DB534` | hsl(79, 55%, 46%) | ×1 |
| `--color-green-112` | `#8FB734` | hsl(78, 56%, 46%) | ×1 |
| `--color-green-113` | `#8FB636` | hsl(78, 54%, 46%) | ×1 |
| `--color-green-114` | `#91B837` | hsl(78, 54%, 47%) | ×1 |
| `--color-green-115` | `#94BA39` | hsl(78, 53%, 48%) | ×1 |
| `--color-green-116` | `#BFD74A` | hsl(70, 64%, 57%) | ×1 |
| `--color-green-117` | `#AAC641` | hsl(73, 54%, 52%) | ×1 |
| `--color-green-118` | `#6C9231` | hsl(84, 50%, 38%) | ×1 |
| `--color-dark-green-56` | `#637F19` | hsl(76, 67%, 30%) | ×1 |
| `--color-dark-yellow-35` | `#505B09` | hsl(68, 82%, 20%) | ×1 |
| `--color-dark-yellow-36` | `#717C0A` | hsl(66, 85%, 26%) | ×1 |
| `--color-green-119` | `#749C36` | hsl(84, 49%, 41%) | ×1 |
| `--color-green-120` | `#90B537` | hsl(78, 53%, 46%) | ×1 |
| `--color-yellow-203` | `#D0E565` | hsl(70, 71%, 65%) | ×1 |
| `--color-green-121` | `#85AB30` | hsl(79, 56%, 43%) | ×1 |
| `--color-green-122` | `#739324` | hsl(77, 61%, 36%) | ×1 |
| `--color-green-123` | `#9EB648` | hsl(73, 43%, 50%) | ×1 |
| `--color-green-124` | `#7C9F2B` | hsl(78, 57%, 40%) | ×1 |
| `--color-dark-yellow-37` | `#4D590A` | hsl(69, 80%, 19%) | ×1 |
| `--color-dark-green-57` | `#657E19` | hsl(75, 67%, 30%) | ×1 |
| `--color-dark-yellow-38` | `#4F5A07` | hsl(68, 86%, 19%) | ×1 |
| `--color-yellow-204` | `#EFBF23` | hsl(46, 86%, 54%) | ×1 |
| `--color-dark-green-58` | `#708418` | hsl(71, 69%, 31%) | ×1 |
| `--color-green-125` | `#8FB338` | hsl(78, 52%, 46%) | ×1 |
| `--color-dark-green-59` | `#65872A` | hsl(82, 53%, 35%) | ×1 |
| `--color-green-126` | `#94B93B` | hsl(78, 52%, 48%) | ×1 |
| `--color-yellow-205` | `#BDD445` | hsl(70, 62%, 55%) | ×1 |
| `--color-green-127` | `#BAD541` | hsl(71, 64%, 55%) | ×1 |
| `--color-green-128` | `#709125` | hsl(78, 59%, 36%) | ×1 |
| `--color-green-129` | `#6F9226` | hsl(79, 59%, 36%) | ×1 |
| `--color-dark-yellow-39` | `#4E5A07` | hsl(69, 86%, 19%) | ×1 |
| `--color-dark-yellow-40` | `#797F0D` | hsl(63, 81%, 27%) | ×1 |
| `--color-dark-green-60` | `#6F8C19` | hsl(75, 70%, 32%) | ×1 |
| `--color-dark-yellow-41` | `#545E0E` | hsl(68, 74%, 21%) | ×1 |
| `--color-green-130` | `#90B638` | hsl(78, 53%, 47%) | ×1 |
| `--color-green-131` | `#B5CD3F` | hsl(70, 59%, 53%) | ×1 |
| `--color-green-132` | `#B8D142` | hsl(70, 61%, 54%) | ×1 |
| `--color-yellow-206` | `#B7B635` | hsl(60, 55%, 46%) | ×1 |
| `--color-green-133` | `#A2C139` | hsl(74, 54%, 49%) | ×1 |
| `--color-dark-yellow-42` | `#434F01` | hsl(69, 98%, 16%) | ×1 |
| `--color-dark-yellow-43` | `#434F02` | hsl(69, 95%, 16%) | ×1 |
| `--color-dark-yellow-44` | `#434F04` | hsl(70, 90%, 16%) | ×1 |
| `--color-dark-green-61` | `#667F1A` | hsl(75, 66%, 30%) | ×1 |
| `--color-dark-yellow-45` | `#7B7E0A` | hsl(62, 85%, 27%) | ×1 |
| `--color-green-134` | `#88AB34` | hsl(78, 53%, 44%) | ×1 |
| `--color-green-135` | `#7EA232` | hsl(79, 53%, 42%) | ×1 |
| `--color-green-136` | `#7B9F2B` | hsl(79, 57%, 40%) | ×1 |
| `--color-dark-green-62` | `#3E4E06` | hsl(73, 86%, 16%) | ×1 |
| `--color-green-137` | `#9EB750` | hsl(75, 42%, 52%) | ×1 |
| `--color-green-138` | `#A4C346` | hsl(75, 51%, 52%) | ×1 |
| `--color-dark-green-63` | `#6F8C25` | hsl(77, 58%, 35%) | ×1 |
| `--color-dark-green-64` | `#6D8E20` | hsl(78, 63%, 34%) | ×1 |
| `--color-dark-green-65` | `#658019` | hsl(76, 67%, 30%) | ×1 |
| `--color-dark-green-66` | `#677F1B` | hsl(74, 65%, 30%) | ×1 |
| `--color-orange-179` | `#D8AD35` | hsl(44, 68%, 53%) | ×1 |
| `--color-green-139` | `#92B638` | hsl(77, 53%, 47%) | ×1 |
| `--color-green-140` | `#C4D97B` | hsl(73, 55%, 67%) | ×1 |
| `--color-green-141` | `#77982C` | hsl(78, 55%, 38%) | ×1 |
| `--color-green-142` | `#A6BF3B` | hsl(71, 53%, 49%) | ×1 |
| `--color-green-143` | `#6C8F25` | hsl(80, 59%, 35%) | ×1 |
| `--color-dark-green-67` | `#3D4D02` | hsl(73, 95%, 15%) | ×1 |
| `--color-dark-green-68` | `#3F4E02` | hsl(72, 95%, 16%) | ×1 |
| `--color-green-144` | `#AFCA3E` | hsl(72, 57%, 52%) | ×1 |
| `--color-dark-green-69` | `#6E8C23` | hsl(77, 60%, 34%) | ×1 |
| `--color-dark-green-70` | `#6E8D1F` | hsl(77, 64%, 34%) | ×1 |
| `--color-dark-green-71` | `#68831A` | hsl(75, 67%, 31%) | ×1 |
| `--color-dark-yellow-46` | `#4E5A06` | hsl(69, 88%, 19%) | ×1 |
| `--color-orange-180` | `#D7AC34` | hsl(44, 67%, 52%) | ×1 |
| `--color-green-145` | `#8EB636` | hsl(79, 54%, 46%) | ×1 |
| `--color-green-146` | `#C2DB4E` | hsl(71, 66%, 58%) | ×1 |
| `--color-green-147` | `#8DB135` | hsl(77, 54%, 45%) | ×1 |
| `--color-green-148` | `#8AB034` | hsl(78, 54%, 45%) | ×1 |
| `--color-dark-green-72` | `#415104` | hsl(72, 91%, 17%) | ×1 |
| `--color-dark-green-73` | `#3F5103` | hsl(74, 93%, 16%) | ×1 |
| `--color-dark-green-74` | `#3C4B00` | hsl(72, 100%, 15%) | ×1 |
| `--color-dark-green-75` | `#3D4E01` | hsl(73, 97%, 15%) | ×1 |
| `--color-dark-green-76` | `#3E4D03` | hsl(72, 93%, 16%) | ×1 |
| `--color-dark-green-77` | `#3F4E04` | hsl(72, 90%, 16%) | ×1 |
| `--color-dark-yellow-47` | `#4F5B0C` | hsl(69, 77%, 20%) | ×1 |
| `--color-green-149` | `#8BB035` | hsl(78, 54%, 45%) | ×1 |
| `--color-green-150` | `#809C28` | hsl(74, 59%, 38%) | ×1 |
| `--color-dark-green-78` | `#465705` | hsl(72, 89%, 18%) | ×1 |
| `--color-dark-yellow-48` | `#505B06` | hsl(68, 88%, 19%) | ×1 |
| `--color-orange-181` | `#BA8717` | hsl(41, 78%, 41%) | ×1 |
| `--color-yellow-207` | `#C8DC53` | hsl(69, 66%, 59%) | ×1 |
| `--color-yellow-208` | `#C7DC53` | hsl(69, 66%, 59%) | ×1 |
| `--color-green-151` | `#89AE33` | hsl(78, 55%, 44%) | ×1 |
| `--color-dark-yellow-49` | `#535B0E` | hsl(66, 73%, 21%) | ×1 |
| `--color-dark-yellow-50` | `#515B0D` | hsl(68, 75%, 20%) | ×1 |
| `--color-dark-yellow-51` | `#525C0D` | hsl(68, 75%, 21%) | ×1 |
| `--color-dark-green-79` | `#475505` | hsl(70, 89%, 18%) | ×1 |
| `--color-dark-yellow-52` | `#515C06` | hsl(68, 88%, 19%) | ×1 |
| `--color-orange-182` | `#B88516` | hsl(41, 79%, 40%) | ×1 |
| `--color-green-152` | `#8CB036` | hsl(78, 53%, 45%) | ×1 |
| `--color-dark-yellow-53` | `#565F0F` | hsl(67, 73%, 22%) | ×1 |
| `--color-dark-yellow-54` | `#525D05` | hsl(68, 90%, 19%) | ×1 |
| `--color-orange-183` | `#B98616` | hsl(41, 79%, 41%) | ×1 |
| `--color-dark-yellow-55` | `#646F05` | hsl(66, 91%, 23%) | ×1 |
| `--color-orange-184` | `#E0A71C` | hsl(43, 78%, 49%) | ×1 |
| `--color-orange-185` | `#E0A71D` | hsl(42, 77%, 50%) | ×1 |
| `--color-dark-gray-10` | `#21212B` | hsl(240, 13%, 15%) | ×1 |

### Other Colors

| Token | Value | HSL | Usage |
| --- | --- | --- | --- |
| `--color-light-green` | `#ADBEAF` | hsl(127, 12%, 71%) | ×19 |
| `--color-light-gray-6` | `#CCCCCC` | hsl(0, 0%, 80%) | ×1 |

---

## Typography

### Font Families

| Token | Family |
| --- | --- |
| `--font-family-base` | `ui-sans-serif` |
| `--font-family-2` | `af` |
| `--font-family-3` | `ppmondwest` |

### Type Scale

| Token | Size | Role |
| --- | --- | --- |
| `--font-size-2xs` | `13px` |  |
| `--font-size-xs` | `14px` |  |
| `--font-size-sm` | `15px` |  |
| `--font-size-base` | `16px` |  |
| `--font-size-lg` | `18px` |  |
| `--font-size-xl` | `28px` |  |
| `--font-size-2xl` | `40px` |  |
| `--font-size-3xl` | `48px` |  |
| `--font-size-4xl` | `54px` |  |

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
| `--line-height-snug` | `16.9px` |
| `--line-height-normal` | `18.2px` |
| `--line-height-relaxed` | `19.5px` |
| `--line-height-loose` | `21px` |
| `--line-height-lh-6` | `23.4px` |
| `--line-height-lh-7` | `24px` |
| `--line-height-lh-8` | `30.8px` |
| `--line-height-lh-9` | `44px` |
| `--line-height-lh-10` | `48px` |
| `--line-height-lh-11` | `59.4px` |

### Letter Spacing

| Token | Value |
| --- | --- |
| `--letter-spacing-tight` | `-1.08px` |
| `--letter-spacing-normal` | `-0.96px` |
| `--letter-spacing-wide` | `-0.56px` |
| `--letter-spacing-wider` | `-0.18px` |
| `--letter-spacing-widest` | `-0.15px` |
| `--letter-spacing-ls-6` | `-0.13px` |

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `--space-1` | `1.5px` | ×6 |
| `--space-2` | `2px` | ×2 |
| `--space-3` | `2.5px` | ×6 |
| `--space-4` | `3.95px` | ×6 |
| `--space-5` | `4px` | ×10 |
| `--space-6` | `4.937px` | ×4 |
| `--space-8` | `6px` | ×8 |
| `--space-10` | `7px` | ×2 |
| `--space-12` | `8px` | ×78 |
| `--space-16` | `10px` | ×1 |
| `--space-20` | `11.85px` | ×4 |
| `--space-24` | `120px` | ×1 |
| `--space-32` | `16px` | ×34 |
| `--space-40` | `18px` | ×2 |
| `--space-48` | `20px` | ×10 |
| `--space-64` | `24px` | ×34 |
| `--space-80` | `32px` | ×22 |
| `--space-96` | `40px` | ×4 |
| `--space-128` | `48px` | ×1 |
| `--space-160` | `50.3906px` | ×2 |
| `--space-192` | `64px` | ×8 |
| `--space-256` | `80px` | ×4 |
| `--space-23` | `100px` | ×2 |
| `--space-25` | `128px` | ×1 |
| `--space-26` | `140px` | ×1 |
| `--space-27` | `160px` | ×4 |
| `--space-28` | `229.523px` | ×1 |
| `--space-29` | `229.531px` | ×1 |
| `--space-30` | `246.5px` | ×2 |
| `--space-31` | `400px` | ×1 |

---

## Borders

### Border Widths

| Token | Value | Usage |
| --- | --- | --- |
| `--border-width-hairline` | `1px` | ×80 |

### Border Radii

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | `0px 0px 0px 500%` | ×1 |
| `--radius-md` | `4px` | ×13 |
| `--radius-lg` | `8px` | ×10 |
| `--radius-xl` | `12px` | ×5 |
| `--radius-2xl` | `16px` | ×5 |
| `--radius-full` | `24px` | ×2 |
| `--radius-r7` | `27px` | ×4 |
| `--radius-r8` | `50.496px` | ×6 |
| `--radius-r9` | `1.67772e+07px` | ×3 |

---

## Elevation — Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `rgba(0, 0, 0, 0.04) 0px 1.01px 1.01px 0px` | ×6 |
| `--shadow-md` | `rgb(222, 226, 222) 0px 0px 0px 1px` | ×4 |
| `--shadow-lg` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(80, 115, 138, 0.24) 0px 2px 4px 0px` | ×4 |
| `--shadow-xl` | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.15) 0px 2px 6px 0px` | ×3 |
| `--shadow-shadow-5` | `rgba(0, 0, 0, 0.08) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 4px 5px 0px` | ×2 |
| `--shadow-shadow-6` | `rgba(0, 0, 0, 0.06) 0px 2px 2px 0px, rgba(0, 0, 0, 0) 0px 6px 6px 0px, rgba(0, 0, 0, 0.04) 0px 0px 0px 5px` | ×1 |

---

## Motion

### Durations

| Token | Value | Usage |
| --- | --- | --- |
| `--duration-instant` | `0.15s` | ×2 |
| `--duration-fast` | `0.16s` | ×1 |
| `--duration-normal` | `0.2s` | ×127 |
| `--duration-slow` | `0.22s` | ×2 |
| `--duration-slower` | `0.25s` | ×13 |
| `--duration-duration-6` | `0.3s` | ×11 |
| `--duration-duration-7` | `0.5s` | ×24 |
| `--duration-duration-8` | `0.6s` | ×12 |
| `--duration-duration-9` | `1s` | ×4 |

### Easing Functions

_No easing functions detected._

---

## Z-Index

| Token | Value |
| --- | --- |
| `--z-1` | `-1` |
| `--z-2` | `10` |
| `--z-3` | `20` |
| `--z-4` | `50` |
| `--z-5` | `100` |
| `--z-6` | `103` |
| `--z-7` | `112` |
| `--z-8` | `9999` |

---

## Breakpoints

| Token | Value |
| --- | --- |
| `--breakpoint-xs` | `1920px` |

---

## Opacity

| Token | Value | Usage |
| --- | --- | --- |
| `--opacity-20` | `0.2` | ×2 |
| `--opacity-70` | `0.7` | ×1 |

---

## Accessibility — Contrast Ratios

Computed between the most-used text and background color pairs.
WCAG 2.1 thresholds: **AA** ≥ 4.5:1 (normal text), **AA Large** ≥ 3:1 (large/bold text), **AAA** ≥ 7:1.

| Text Token | Background Token | Ratio | WCAG Rating |
| --- | --- | --- | --- |
| `--color-dark-gray` | `--color-white` | 17.93:1 | AAA |
| `--color-dark-gray` | `--color-white-2` | 17.11:1 | AAA |
| `--color-dark-gray` | `--color-dark-gray-4` | 3.03:1 | AA Large |
| `--color-dark-gray` | `--color-light-gray` | 8.93:1 | AAA |
| `--color-dark-gray` | `--color-white-4` | 17.86:1 | AAA |
| `--color-black` | `--color-white` | 21:1 | AAA |
| `--color-black` | `--color-white-2` | 20.05:1 | AAA |
| `--color-black` | `--color-dark-gray-4` | 3.55:1 | AA Large |
| `--color-black` | `--color-light-gray` | 10.46:1 | AAA |
| `--color-black` | `--color-white-4` | 20.92:1 | AAA |
| `--color-dark-gray-2` | `--color-white` | 10.1:1 | AAA |
| `--color-dark-gray-2` | `--color-white-2` | 9.65:1 | AAA |
| `--color-dark-gray-2` | `--color-dark-gray-4` | 1.71:1 | Fail |
| `--color-dark-gray-2` | `--color-light-gray` | 5.03:1 | AA |
| `--color-dark-gray-2` | `--color-white-4` | 10.07:1 | AAA |
| `--color-dark-gray-3` | `--color-white` | 13.97:1 | AAA |
| `--color-dark-gray-3` | `--color-white-2` | 13.33:1 | AAA |
| `--color-dark-gray-3` | `--color-dark-gray-4` | 2.36:1 | Fail |
| `--color-dark-gray-3` | `--color-light-gray` | 6.95:1 | AA |
| `--color-dark-gray-3` | `--color-white-4` | 13.91:1 | AAA |
| `--color-white-3` | `--color-white` | 1.1:1 | Fail |
| `--color-white-3` | `--color-white-2` | 1.05:1 | Fail |
| `--color-white-3` | `--color-dark-gray-4` | 5.4:1 | AA |
| `--color-white-3` | `--color-light-gray` | 1.83:1 | Fail |
| `--color-white-3` | `--color-white-4` | 1.09:1 | Fail |

---

## CSS Custom Properties (from :root)

These are the custom properties already defined in the page's stylesheet(s). They represent the site's own token layer.

| Property | Value |
| --- | --- |
| `--background` | `#fff` |
| `--foreground` | `#171717` |
| `--neutral-900` | `#2c2c2c` |
| `--neutral-800` | `#444141` |
| `--neutral-700` | `#646464` |
| `--neutral-600` | `#b4b8b4` |
| `--neutral-300` | `#eef1ed` |
| `--neutral-100` | `#f9faf7` |
| `--scrollbar-width` | `calc(100vw - 100%)` |

---

## Design Tokens (CSS Variables)

Paste this `:root` block into your project to use all extracted tokens as CSS custom properties.

```css
/* ============================================
 * Design Tokens — General Intelligence Company
 * Source: https://www.generalintelligencecompany.com/
 * Generated: 05/05/2026, 21:20:25
 * ============================================ */

:root {
  /* ── Core: Colors ── */
  --color-dark-gray: #171717; /* hsl(0, 0%, 9%) · text */
  --color-black: #000000; /* hsl(0, 0%, 0%) · text */
  --color-white: #FFFFFF; /* hsl(0, 0%, 100%) · background */
  --color-dark-gray-2: #444141; /* hsl(0, 2%, 26%) · text */
  --color-dark-gray-3: #2C2C2C; /* hsl(0, 0%, 17%) · text */
  --color-dark-blue: #1F2937; /* hsl(215, 28%, 17%) · fill */
  --color-white-2: #F9FAF7; /* hsl(80, 23%, 97%) · background */
  --color-dark-gray-4: #646464; /* hsl(0, 0%, 39%) · background */
  --color-light-gray: #B4B8B4; /* hsl(120, 3%, 71%) · background */
  --color-white-3: #F3F5F2; /* hsl(100, 13%, 95%) · text */
  --color-light-green: #ADBEAF; /* hsl(127, 12%, 71%) · other */
  --color-white-4: #FEFFFC; /* hsl(80, 100%, 99%) · background */
  --color-light-gray-2: #CFD3CF; /* hsl(120, 4%, 82%) · background */
  --color-blue: #9DB0BD; /* hsl(204, 20%, 68%) · text */
  --color-green: #91B737; /* hsl(78, 54%, 47%) · fill */
  --color-dark-blue-2: #101828; /* hsl(220, 43%, 11%) · text */
  --color-yellow: #FDEA65; /* hsl(52, 97%, 69%) · fill */
  --color-yellow-2: #FDDE56; /* hsl(49, 98%, 66%) · fill */
  --color-light-gray-3: #DEE2DE; /* hsl(120, 6%, 88%) · border */
  --color-yellow-3: #FDEA64; /* hsl(53, 97%, 69%) · fill */
  --color-dark-green: #667E1A; /* hsl(74, 66%, 30%) · fill */
  --color-yellow-4: #FEDE56; /* hsl(49, 99%, 67%) · fill */
  --color-yellow-5: #FCEA63; /* hsl(53, 96%, 69%) · fill */
  --color-yellow-6: #FDE961; /* hsl(52, 98%, 69%) · fill */
  --color-light-yellow: #FBF887; /* hsl(58, 94%, 76%) · fill */
  --color-yellow-7: #FDEC67; /* hsl(53, 97%, 70%) · fill */
  --color-green-2: #90B636; /* hsl(78, 54%, 46%) · fill */
  --color-green-3: #7BA12B; /* hsl(79, 58%, 40%) · fill */
  --color-dark-green-2: #6E8C24; /* hsl(77, 59%, 35%) · fill */
  --color-dark-blue-3: #364153; /* hsl(217, 21%, 27%) · text */
  --color-blue-2: rgba(156, 180, 192, 0.14); /* hsl(204, 21%, 68%) · background */
  --color-light-gray-4: #CFD1D3; /* hsl(210, 4%, 82%) · border */
  --color-blue-3: rgba(80, 115, 138, 0.24); /* hsl(201, 27%, 43%) · shadow */
  --color-yellow-8: #FDEC65; /* hsl(53, 97%, 69%) · fill */
  --color-light-yellow-2: #FBF986; /* hsl(59, 94%, 75%) · fill */
  --color-yellow-9: #FDDD56; /* hsl(49, 98%, 66%) · fill */
  --color-red: #B54931; /* hsl(11, 57%, 45%) · fill */
  --color-orange: #F9C53D; /* hsl(43, 94%, 61%) · fill */
  --color-dark-yellow: #3E4A00; /* hsl(70, 100%, 15%) · fill */
  --color-green-4: #90B535; /* hsl(77, 55%, 46%) · fill */
  --color-green-5: #90B635; /* hsl(78, 55%, 46%) · fill */
  --color-green-6: #BBD545; /* hsl(71, 63%, 55%) · fill */
  --color-green-7: #BBD544; /* hsl(71, 63%, 55%) · fill */
  --color-green-8: #92B837; /* hsl(78, 54%, 47%) · fill */
  --color-yellow-10: #D0E265; /* hsl(69, 68%, 64%) · fill */
  --color-green-9: #8DB433; /* hsl(78, 56%, 45%) · fill */
  --color-dark-green-3: #3E4B03; /* hsl(71, 92%, 15%) · fill */
  --color-dark-green-4: #394700; /* hsl(72, 100%, 14%) · fill */
  --color-dark-yellow-2: #656F07; /* hsl(66, 88%, 23%) · fill */
  --color-dark-green-5: #384900; /* hsl(74, 100%, 14%) · fill */
  --color-dark-gray-5: rgba(68, 65, 65, 0.12); /* hsl(0, 0%, 26%) · gradient */
  --color-dark-gray-6: rgba(68, 65, 65, 0.07); /* hsl(0, 0%, 28%) · gradient */
  --color-yellow-11: #FCD34A; /* hsl(46, 97%, 64%) · fill */
  --color-yellow-12: #FDE75E; /* hsl(52, 98%, 68%) · fill */
  --color-yellow-13: #FCE863; /* hsl(52, 96%, 69%) · fill */
  --color-yellow-14: #FDEA62; /* hsl(53, 97%, 69%) · fill */
  --color-yellow-15: #FDDC54; /* hsl(48, 98%, 66%) · fill */
  --color-orange-2: #FCA962; /* hsl(28, 96%, 69%) · fill */
  --color-orange-3: #FBAF60; /* hsl(31, 95%, 68%) · fill */
  --color-light-yellow-3: #FFFF80; /* hsl(60, 100%, 75%) · fill */
  --color-light-yellow-4: #FDEF6C; /* hsl(54, 97%, 71%) · fill */
  --color-orange-4: #FCCF4C; /* hsl(45, 97%, 64%) · fill */
  --color-yellow-16: #FCEA65; /* hsl(53, 96%, 69%) · fill */
  --color-yellow-17: #FDE65F; /* hsl(51, 98%, 68%) · fill */
  --color-orange-5: #FFBF40; /* hsl(40, 100%, 63%) · fill */
  --color-yellow-18: #FCD14D; /* hsl(45, 97%, 65%) · fill */
  --color-yellow-19: #FCDD57; /* hsl(49, 96%, 66%) · fill */
  --color-yellow-20: #FCE961; /* hsl(53, 96%, 68%) · fill */
  --color-orange-6: #F9C63F; /* hsl(44, 94%, 61%) · fill */
  --color-yellow-21: #FCD853; /* hsl(47, 97%, 66%) · fill */
  --color-orange-7: #F9C33C; /* hsl(43, 94%, 61%) · fill */
  --color-light-yellow-5: #FCF374; /* hsl(56, 96%, 72%) · fill */
  --color-orange-8: #E7A82D; /* hsl(40, 79%, 54%) · fill */
  --color-yellow-22: #FDEB63; /* hsl(53, 97%, 69%) · fill */
  --color-yellow-23: #FCD64F; /* hsl(47, 97%, 65%) · fill */
  --color-yellow-24: #FEE25F; /* hsl(49, 99%, 68%) · fill */
  --color-red-2: #B94B34; /* hsl(10, 56%, 46%) · fill */
  --color-light-yellow-6: #FCF986; /* hsl(58, 95%, 76%) · fill */
  --color-yellow-25: #FAE15B; /* hsl(51, 94%, 67%) · fill */
  --color-green-10: #8FB536; /* hsl(78, 54%, 46%) · fill */
  --color-dark-yellow-3: #3E4902; /* hsl(69, 95%, 15%) · fill */
  --color-green-11: #86AB31; /* hsl(78, 55%, 43%) · fill */
  --color-green-12: #92B738; /* hsl(77, 53%, 47%) · fill */
  --color-orange-9: #E3B336; /* hsl(43, 76%, 55%) · fill */
  --color-dark-yellow-4: #808000; /* hsl(60, 100%, 25%) · fill */
  --color-dark-yellow-5: #686E14; /* hsl(64, 69%, 25%) · fill */
  --color-dark-green-6: #465403; /* hsl(70, 93%, 17%) · fill */
  --color-yellow-26: #CEE264; /* hsl(70, 68%, 64%) · fill */
  --color-yellow-27: #CDE164; /* hsl(70, 68%, 64%) · fill */
  --color-green-13: #8DB335; /* hsl(78, 54%, 45%) · fill */
  --color-green-14: #91B738; /* hsl(78, 53%, 47%) · fill */
  --color-green-15: #8CB135; /* hsl(78, 54%, 45%) · fill */
  --color-dark-green-7: #425002; /* hsl(71, 95%, 16%) · fill */
  --color-green-16: #8FB435; /* hsl(77, 55%, 46%) · fill */
  --color-green-17: #91B637; /* hsl(77, 54%, 46%) · fill */
  --color-green-18: #91B736; /* hsl(78, 54%, 46%) · fill */
  --color-green-19: #90B536; /* hsl(77, 54%, 46%) · fill */
  --color-green-20: #92B836; /* hsl(78, 55%, 47%) · fill */
  --color-green-21: #BBD542; /* hsl(71, 64%, 55%) · fill */
  --color-green-22: #92B737; /* hsl(77, 54%, 47%) · fill */
  --color-dark-green-8: #647D18; /* hsl(75, 68%, 29%) · fill */
  --color-green-23: #92B736; /* hsl(77, 54%, 46%) · fill */
  --color-green-24: #90B735; /* hsl(78, 55%, 46%) · fill */
  --color-green-25: #91B536; /* hsl(77, 54%, 46%) · fill */
  --color-green-26: #93AC45; /* hsl(75, 43%, 47%) · fill */
  --color-dark-green-9: #3E4E02; /* hsl(73, 95%, 16%) · fill */
  --color-green-27: #88AD32; /* hsl(78, 55%, 44%) · fill */
  --color-green-28: #8AAE33; /* hsl(78, 55%, 44%) · fill */
  --color-green-29: #8BB132; /* hsl(78, 56%, 45%) · fill */
  --color-yellow-28: #AAAA55; /* hsl(60, 33%, 50%) · fill */
  --color-green-30: #8EB435; /* hsl(78, 55%, 46%) · fill */
  --color-dark-yellow-6: #4E5906; /* hsl(68, 87%, 19%) · fill */
  --color-dark-green-10: #3E4D02; /* hsl(72, 95%, 15%) · fill */
  --color-dark-green-11: #3F4F03; /* hsl(73, 93%, 16%) · fill */
  --color-green-31: #8BAF34; /* hsl(78, 54%, 45%) · fill */
  --color-dark-yellow-7: #8B9914; /* hsl(66, 77%, 34%) · fill */
  --color-dark-gray-7: #2D2D2D; /* hsl(0, 0%, 18%) · text */
  --color-dark-gray-8: #1F1F29; /* hsl(240, 14%, 14%) · background */
  --color-dark-gray-9: #282834; /* hsl(240, 13%, 18%) · border */
  --color-dark-cyan: #334444; /* hsl(180, 14%, 23%) · background */
  --color-cyan: #576A6A; /* hsl(180, 10%, 38%) · background */
  --color-cyan-2: #728383; /* hsl(180, 7%, 48%) · background */
  --color-mid-gray: #A5AFAF; /* hsl(180, 6%, 67%) · background */
  --color-light-yellow-7: #FBF475; /* hsl(57, 94%, 72%) · fill */
  --color-yellow-29: #FCD43A; /* hsl(48, 97%, 61%) · fill */
  --color-yellow-30: #FDEC62; /* hsl(53, 97%, 69%) · fill */
  --color-light-yellow-8: #FDEA6D; /* hsl(52, 97%, 71%) · fill */
  --color-light-yellow-9: #FDF16F; /* hsl(55, 97%, 71%) · fill */
  --color-light-yellow-10: #FBE974; /* hsl(52, 94%, 72%) · fill */
  --color-yellow-31: #FCE15A; /* hsl(50, 96%, 67%) · fill */
  --color-light-yellow-11: #FCF475; /* hsl(56, 96%, 72%) · fill */
  --color-yellow-32: #FCE866; /* hsl(52, 96%, 69%) · fill */
  --color-yellow-33: #FCCF44; /* hsl(45, 97%, 63%) · fill */
  --color-yellow-34: #FCEB63; /* hsl(53, 96%, 69%) · fill */
  --color-yellow-35: #FDE766; /* hsl(51, 97%, 70%) · fill */
  --color-yellow-36: #FCE75F; /* hsl(52, 96%, 68%) · fill */
  --color-yellow-37: #FFFF66; /* hsl(60, 100%, 70%) · fill */
  --color-yellow-38: #FDDE55; /* hsl(49, 98%, 66%) · fill */
  --color-yellow-39: #FCD048; /* hsl(45, 97%, 64%) · fill */
  --color-light-yellow-12: #FDF472; /* hsl(56, 97%, 72%) · fill */
  --color-yellow-40: #FDE65C; /* hsl(51, 98%, 68%) · fill */
  --color-light-yellow-13: #FCF373; /* hsl(56, 96%, 72%) · fill */
  --color-light-yellow-14: #FCF577; /* hsl(57, 96%, 73%) · fill */
  --color-light-yellow-15: #FBFD7A; /* hsl(61, 97%, 74%) · fill */
  --color-yellow-41: #FDEC60; /* hsl(54, 98%, 68%) · fill */
  --color-yellow-42: #FCDF5B; /* hsl(49, 96%, 67%) · fill */
  --color-orange-10: #FCC45D; /* hsl(39, 96%, 68%) · fill */
  --color-light-yellow-16: #FDEE6B; /* hsl(54, 97%, 71%) · fill */
  --color-yellow-43: #FAE960; /* hsl(53, 94%, 68%) · fill */
  --color-yellow-44: #F8D54C; /* hsl(48, 92%, 64%) · fill */
  --color-yellow-45: #FDDF58; /* hsl(49, 98%, 67%) · fill */
  --color-light-yellow-17: #FBF68E; /* hsl(57, 93%, 77%) · fill */
  --color-yellow-46: #F7DF51; /* hsl(51, 91%, 64%) · fill */
  --color-light-yellow-18: #FAF373; /* hsl(57, 93%, 72%) · fill */
  --color-light-yellow-19: #FCF478; /* hsl(56, 96%, 73%) · fill */
  --color-yellow-47: #FBE159; /* hsl(50, 95%, 67%) · fill */
  --color-orange-11: #FBA065; /* hsl(24, 95%, 69%) · fill */
  --color-yellow-48: #FADB53; /* hsl(49, 94%, 65%) · fill */
  --color-yellow-49: #FBE65E; /* hsl(52, 95%, 68%) · fill */
  --color-orange-12: #FCA864; /* hsl(27, 96%, 69%) · fill */
  --color-yellow-50: #FCE862; /* hsl(52, 96%, 69%) · fill */
  --color-light-yellow-20: #FBF983; /* hsl(59, 94%, 75%) · fill */
  --color-light-yellow-21: #FCE278; /* hsl(48, 96%, 73%) · fill */
  --color-yellow-51: #FFFF00; /* hsl(60, 100%, 50%) · fill */
  --color-light-yellow-22: #F7F294; /* hsl(57, 86%, 77%) · fill */
  --color-light-yellow-23: #F8F58B; /* hsl(58, 89%, 76%) · fill */
  --color-yellow-52: #FCEA62; /* hsl(53, 96%, 69%) · fill */
  --color-yellow-53: #F9D852; /* hsl(48, 93%, 65%) · fill */
  --color-light-yellow-24: #FBFB8D; /* hsl(60, 93%, 77%) · fill */
  --color-yellow-54: #FDDC55; /* hsl(48, 98%, 66%) · fill */
  --color-yellow-55: #FDEA63; /* hsl(53, 97%, 69%) · fill */
  --color-light-yellow-25: #FBF375; /* hsl(56, 94%, 72%) · fill */
  --color-yellow-56: #FDD951; /* hsl(47, 98%, 65%) · fill */
  --color-yellow-57: #FDE761; /* hsl(52, 98%, 69%) · fill */
  --color-orange-13: #FAA165; /* hsl(24, 94%, 69%) · fill */
  --color-yellow-58: #FEDD53; /* hsl(48, 99%, 66%) · fill */
  --color-orange-14: #FCA964; /* hsl(27, 96%, 69%) · fill */
  --color-yellow-59: #F1D462; /* hsl(48, 84%, 66%) · fill */
  --color-yellow-60: #FEEB64; /* hsl(53, 99%, 69%) · fill */
  --color-light-yellow-26: #FCF477; /* hsl(56, 96%, 73%) · fill */
  --color-orange-15: #FCCB43; /* hsl(44, 97%, 63%) · fill */
  --color-yellow-61: #FDD64E; /* hsl(47, 98%, 65%) · fill */
  --color-orange-16: #FA9155; /* hsl(22, 94%, 66%) · fill */
  --color-yellow-62: #FDDB56; /* hsl(48, 98%, 66%) · fill */
  --color-yellow-63: #FDE05C; /* hsl(49, 98%, 68%) · fill */
  --color-light-yellow-27: #FCF171; /* hsl(55, 96%, 72%) · fill */
  --color-yellow-64: #FDD952; /* hsl(47, 98%, 66%) · fill */
  --color-yellow-65: #FDE760; /* hsl(52, 98%, 68%) · fill */
  --color-orange-17: #FAA164; /* hsl(24, 94%, 69%) · fill */
  --color-orange-18: #FCA963; /* hsl(27, 96%, 69%) · fill */
  --color-yellow-66: #FDDE54; /* hsl(49, 98%, 66%) · fill */
  --color-yellow-67: #FFE966; /* hsl(51, 100%, 70%) · fill */
  --color-yellow-68: #FDDF57; /* hsl(49, 98%, 67%) · fill */
  --color-yellow-69: #FDE661; /* hsl(51, 98%, 69%) · fill */
  --color-light-yellow-28: #FCF16F; /* hsl(55, 96%, 71%) · fill */
  --color-orange-19: #FBCA43; /* hsl(44, 96%, 62%) · fill */
  --color-yellow-70: #FCD54E; /* hsl(47, 97%, 65%) · fill */
  --color-light-yellow-29: #FBFA88; /* hsl(59, 93%, 76%) · fill */
  --color-orange-20: #F99054; /* hsl(22, 93%, 65%) · fill */
  --color-yellow-71: #FCEB64; /* hsl(53, 96%, 69%) · fill */
  --color-yellow-72: #FCD952; /* hsl(48, 97%, 65%) · fill */
  --color-light-yellow-30: #FCF06E; /* hsl(55, 96%, 71%) · fill */
  --color-light-orange: #FEDB7B; /* hsl(44, 98%, 74%) · fill */
  --color-orange-21: #FCA65E; /* hsl(27, 96%, 68%) · fill */
  --color-yellow-73: #FEDA5A; /* hsl(47, 99%, 67%) · fill */
  --color-yellow-74: #FDE75F; /* hsl(52, 98%, 68%) · fill */
  --color-light-yellow-31: #FDEE6A; /* hsl(54, 97%, 70%) · fill */
  --color-orange-22: #FCCA45; /* hsl(44, 97%, 63%) · fill */
  --color-yellow-75: #FDD44E; /* hsl(46, 98%, 65%) · fill */
  --color-light-yellow-32: #FCF989; /* hsl(58, 95%, 76%) · fill */
  --color-light-yellow-33: #FCFCDF; /* hsl(60, 83%, 93%) · fill */
  --color-orange-23: #FA9053; /* hsl(22, 94%, 65%) · fill */
  --color-light-yellow-34: #FDF474; /* hsl(56, 97%, 72%) · fill */
  --color-yellow-76: #FEDD56; /* hsl(48, 99%, 67%) · fill */
  --color-yellow-77: #FDDB55; /* hsl(48, 98%, 66%) · fill */
  --color-light-yellow-35: #FDDD7C; /* hsl(45, 97%, 74%) · fill */
  --color-light-yellow-36: #FCF679; /* hsl(57, 96%, 73%) · fill */
  --color-orange-24: #FDCB61; /* hsl(41, 98%, 69%) · fill */
  --color-yellow-78: #FDDD58; /* hsl(48, 98%, 67%) · fill */
  --color-yellow-79: #FDD34B; /* hsl(46, 98%, 64%) · fill */
  --color-light-yellow-37: #FEF77D; /* hsl(57, 98%, 74%) · fill */
  --color-orange-25: #FBBC5F; /* hsl(36, 95%, 68%) · fill */
  --color-light-yellow-38: #FCF882; /* hsl(58, 95%, 75%) · fill */
  --color-light-yellow-39: #FCDF77; /* hsl(47, 96%, 73%) · fill */
  --color-yellow-80: #FEEE65; /* hsl(54, 99%, 70%) · fill */
  --color-orange-26: #FB8B4C; /* hsl(22, 96%, 64%) · fill */
  --color-light-orange-2: #FFD577; /* hsl(41, 100%, 73%) · fill */
  --color-orange-27: #F3A439; /* hsl(35, 89%, 59%) · fill */
  --color-orange-28: #FA8D50; /* hsl(22, 94%, 65%) · fill */
  --color-yellow-81: #FBE055; /* hsl(50, 95%, 66%) · fill */
  --color-yellow-82: #FEE25C; /* hsl(50, 99%, 68%) · fill */
  --color-yellow-83: #FDDB57; /* hsl(48, 98%, 67%) · fill */
  --color-light-orange-3: #FEDD7C; /* hsl(45, 98%, 74%) · fill */
  --color-light-yellow-40: #FCF67A; /* hsl(57, 96%, 73%) · fill */
  --color-light-yellow-41: #FDF67A; /* hsl(57, 97%, 74%) · fill */
  --color-orange-29: #FEA163; /* hsl(24, 99%, 69%) · fill */
  --color-light-yellow-42: #FBF878; /* hsl(59, 94%, 73%) · fill */
  --color-orange-30: #FDA862; /* hsl(27, 97%, 69%) · fill */
  --color-yellow-84: #FDDD57; /* hsl(48, 98%, 67%) · fill */
  --color-yellow-85: #FCD44B; /* hsl(46, 97%, 64%) · fill */
  --color-orange-31: #FDCB67; /* hsl(40, 97%, 70%) · fill */
  --color-yellow-86: #FBE860; /* hsl(53, 95%, 68%) · fill */
  --color-orange-32: #FA8D4F; /* hsl(22, 94%, 65%) · fill */
  --color-light-orange-4: #FDD977; /* hsl(44, 97%, 73%) · fill */
  --color-light-yellow-43: #FCF271; /* hsl(56, 96%, 72%) · fill */
  --color-yellow-87: #FEE65D; /* hsl(51, 99%, 68%) · fill */
  --color-yellow-88: #F7CB42; /* hsl(45, 92%, 61%) · fill */
  --color-yellow-89: #FBD85B; /* hsl(47, 95%, 67%) · fill */
  --color-yellow-90: #F9D04B; /* hsl(46, 94%, 64%) · fill */
  --color-light-yellow-44: #F8DD77; /* hsl(47, 90%, 72%) · fill */
  --color-light-yellow-45: #FCF880; /* hsl(58, 95%, 75%) · fill */
  --color-yellow-91: #FDD54A; /* hsl(47, 98%, 64%) · fill */
  --color-yellow-92: #FDEA60; /* hsl(53, 98%, 68%) · fill */
  --color-yellow-93: #FCD84E; /* hsl(48, 97%, 65%) · fill */
  --color-yellow-94: #F3CA49; /* hsl(46, 88%, 62%) · fill */
  --color-light-yellow-46: #FBF990; /* hsl(59, 93%, 77%) · fill */
  --color-light-orange-5: #F5D77E; /* hsl(45, 86%, 73%) · fill */
  --color-orange-33: #CC7B21; /* hsl(32, 72%, 46%) · fill */
  --color-orange-34: #EE9F38; /* hsl(34, 84%, 58%) · fill */
  --color-yellow-95: #FCDA54; /* hsl(48, 97%, 66%) · fill */
  --color-yellow-96: #F9CF4F; /* hsl(45, 93%, 64%) · fill */
  --color-yellow-97: #FCEC68; /* hsl(54, 96%, 70%) · fill */
  --color-yellow-98: #FDED66; /* hsl(54, 97%, 70%) · fill */
  --color-orange-35: #BF7A27; /* hsl(33, 66%, 45%) · fill */
  --color-yellow-99: #FBD359; /* hsl(45, 95%, 67%) · fill */
  --color-orange-36: #BA8B20; /* hsl(42, 71%, 43%) · fill */
  --color-orange-37: #F5C43F; /* hsl(44, 90%, 60%) · fill */
  --color-light-yellow-47: #FEF079; /* hsl(54, 99%, 74%) · fill */
  --color-orange-38: #FACB58; /* hsl(43, 94%, 66%) · fill */
  --color-yellow-100: #FCD350; /* hsl(46, 97%, 65%) · fill */
  --color-orange-39: #EEA147; /* hsl(32, 83%, 61%) · fill */
  --color-yellow-101: #F2CD44; /* hsl(47, 87%, 61%) · fill */
  --color-yellow-102: #F8DD5B; /* hsl(50, 92%, 66%) · fill */
  --color-yellow-103: #F9DD5C; /* hsl(49, 93%, 67%) · fill */
  --color-orange-40: #F8C749; /* hsl(43, 93%, 63%) · fill */
  --color-light-orange-6: #FED96A; /* hsl(45, 99%, 71%) · fill */
  --color-yellow-104: #FBEB6A; /* hsl(53, 95%, 70%) · fill */
  --color-orange-41: #F8945C; /* hsl(22, 92%, 67%) · fill */
  --color-light-yellow-48: #FCEE6C; /* hsl(54, 96%, 71%) · fill */
  --color-yellow-105: #FDE058; /* hsl(49, 98%, 67%) · fill */
  --color-yellow-106: #FEDF56; /* hsl(49, 99%, 67%) · fill */
  --color-yellow-107: #FBE964; /* hsl(53, 95%, 69%) · fill */
  --color-light-yellow-49: #FBF679; /* hsl(58, 94%, 73%) · fill */
  --color-orange-42: #FBCB45; /* hsl(44, 96%, 63%) · fill */
  --color-orange-43: #F7C13A; /* hsl(43, 92%, 60%) · fill */
  --color-light-yellow-50: #FBF988; /* hsl(59, 93%, 76%) · fill */
  --color-orange-44: #B87519; /* hsl(35, 76%, 41%) · fill */
  --color-orange-45: #E0A32B; /* hsl(40, 74%, 52%) · fill */
  --color-orange-46: #E0A32D; /* hsl(40, 74%, 53%) · fill */
  --color-orange-47: #D47425; /* hsl(27, 70%, 49%) · fill */
  --color-orange-48: #F9BD33; /* hsl(42, 94%, 59%) · fill */
  --color-orange-49: #BA7A19; /* hsl(36, 76%, 41%) · fill */
  --color-light-yellow-51: #FCFA88; /* hsl(59, 95%, 76%) · fill */
  --color-orange-50: #FA9454; /* hsl(23, 94%, 65%) · fill */
  --color-orange-51: #F8965A; /* hsl(23, 92%, 66%) · fill */
  --color-orange-52: #F8C640; /* hsl(44, 93%, 61%) · fill */
  --color-yellow-108: #FDD954; /* hsl(47, 98%, 66%) · fill */
  --color-yellow-109: #FDDA52; /* hsl(48, 98%, 66%) · fill */
  --color-orange-53: #FDD160; /* hsl(43, 98%, 68%) · fill */
  --color-light-yellow-52: #FBEC84; /* hsl(52, 94%, 75%) · fill */
  --color-red-3: #C45638; /* hsl(13, 56%, 49%) · fill */
  --color-orange-54: #FAAA58; /* hsl(30, 94%, 66%) · fill */
  --color-yellow-110: #FDEB67; /* hsl(53, 97%, 70%) · fill */
  --color-yellow-111: #FCEC65; /* hsl(54, 96%, 69%) · fill */
  --color-yellow-112: #FDEF66; /* hsl(54, 97%, 70%) · fill */
  --color-orange-55: #FAA361; /* hsl(26, 94%, 68%) · fill */
  --color-light-yellow-53: #FCF476; /* hsl(56, 96%, 73%) · fill */
  --color-orange-56: #FCD04C; /* hsl(45, 97%, 64%) · fill */
  --color-yellow-113: #FEE961; /* hsl(52, 99%, 69%) · fill */
  --color-yellow-114: #FDD348; /* hsl(46, 98%, 64%) · fill */
  --color-orange-57: #BA7A1A; /* hsl(36, 75%, 42%) · fill */
  --color-light-orange-7: #FDDC8E; /* hsl(42, 97%, 77%) · fill */
  --color-orange-58: #F9C33B; /* hsl(43, 94%, 60%) · fill */
  --color-orange-59: #FAC43D; /* hsl(43, 95%, 61%) · fill */
  --color-orange-60: #FCCE5A; /* hsl(43, 96%, 67%) · fill */
  --color-orange-61: #EDA335; /* hsl(36, 84%, 57%) · fill */
  --color-yellow-115: #FCD94F; /* hsl(48, 97%, 65%) · fill */
  --color-red-4: #C05434; /* hsl(14, 57%, 48%) · fill */
  --color-yellow-116: #F9E158; /* hsl(51, 93%, 66%) · fill */
  --color-orange-62: #FAC63E; /* hsl(43, 95%, 61%) · fill */
  --color-yellow-117: #FCE965; /* hsl(52, 96%, 69%) · fill */
  --color-orange-63: #FAA565; /* hsl(26, 94%, 69%) · fill */
  --color-yellow-118: #F4E05F; /* hsl(52, 87%, 66%) · fill */
  --color-light-yellow-54: #FEF77F; /* hsl(57, 98%, 75%) · fill */
  --color-light-yellow-55: #FBF982; /* hsl(59, 94%, 75%) · fill */
  --color-red-5: #BC4F36; /* hsl(11, 55%, 47%) · fill */
  --color-red-6: #BC5036; /* hsl(12, 55%, 47%) · fill */
  --color-orange-64: #FDB962; /* hsl(34, 97%, 69%) · fill */
  --color-light-yellow-56: #FEED69; /* hsl(53, 99%, 70%) · fill */
  --color-red-7: #B64B34; /* hsl(11, 56%, 46%) · fill */
  --color-orange-65: #F9A363; /* hsl(26, 93%, 68%) · fill */
  --color-light-orange-8: #FDDB79; /* hsl(45, 97%, 73%) · fill */
  --color-light-yellow-57: #FDFD76; /* hsl(60, 97%, 73%) · fill */
  --color-yellow-119: #FDEB5F; /* hsl(53, 98%, 68%) · fill */
  --color-orange-66: #F8C33B; /* hsl(43, 93%, 60%) · fill */
  --color-orange-67: #B47419; /* hsl(35, 76%, 40%) · fill */
  --color-orange-68: #FAC733; /* hsl(45, 95%, 59%) · fill */
  --color-orange-69: #F2B438; /* hsl(40, 88%, 58%) · fill */
  --color-orange-70: #F2B537; /* hsl(40, 88%, 58%) · fill */
  --color-light-yellow-58: #FDDD74; /* hsl(46, 97%, 72%) · fill */
  --color-orange-71: #F4B737; /* hsl(41, 90%, 59%) · fill */
  --color-light-yellow-59: #FDF881; /* hsl(58, 97%, 75%) · fill */
  --color-light-yellow-60: #F6EF7C; /* hsl(57, 87%, 73%) · fill */
  --color-yellow-120: #FDD751; /* hsl(47, 98%, 65%) · fill */
  --color-light-orange-9: #FAA574; /* hsl(22, 93%, 72%) · fill */
  --color-light-yellow-61: #FBFA8D; /* hsl(59, 93%, 77%) · fill */
  --color-yellow-121: #FDEF67; /* hsl(54, 97%, 70%) · fill */
  --color-yellow-122: #FCE057; /* hsl(50, 96%, 66%) · fill */
  --color-light-yellow-62: #FCF474; /* hsl(56, 96%, 72%) · fill */
  --color-yellow-123: #FCD24A; /* hsl(46, 97%, 64%) · fill */
  --color-yellow-124: #FFE056; /* hsl(49, 100%, 67%) · fill */
  --color-light-yellow-63: #FBF783; /* hsl(58, 94%, 75%) · fill */
  --color-light-yellow-64: #FBF984; /* hsl(59, 94%, 75%) · fill */
  --color-light-orange-10: #FDD87A; /* hsl(43, 97%, 74%) · fill */
  --color-red-8: #B84B33; /* hsl(11, 57%, 46%) · fill */
  --color-red-9: #BA4E34; /* hsl(12, 56%, 47%) · fill */
  --color-orange-72: #D88F27; /* hsl(35, 69%, 50%) · fill */
  --color-orange-73: #FAA263; /* hsl(25, 94%, 68%) · fill */
  --color-orange-74: #CD9023; /* hsl(38, 71%, 47%) · fill */
  --color-yellow-125: #FDEB62; /* hsl(53, 97%, 69%) · fill */
  --color-yellow-126: #FDEE64; /* hsl(54, 97%, 69%) · fill */
  --color-orange-75: #D27722; /* hsl(29, 72%, 48%) · fill */
  --color-orange-76: #E2A52A; /* hsl(40, 76%, 53%) · fill */
  --color-orange-77: #E2A52B; /* hsl(40, 76%, 53%) · fill */
  --color-orange-78: #D37823; /* hsl(29, 72%, 48%) · fill */
  --color-orange-79: #F3B635; /* hsl(41, 89%, 58%) · fill */
  --color-orange-80: #C2831C; /* hsl(37, 75%, 44%) · fill */
  --color-yellow-127: #FCD248; /* hsl(46, 97%, 64%) · fill */
  --color-yellow-128: #FBE760; /* hsl(52, 95%, 68%) · fill */
  --color-yellow-129: #FDD752; /* hsl(47, 98%, 66%) · fill */
  --color-orange-81: #F78E4E; /* hsl(23, 91%, 64%) · fill */
  --color-orange-82: #E8AA30; /* hsl(40, 80%, 55%) · fill */
  --color-orange-83: #FAC53C; /* hsl(43, 95%, 61%) · fill */
  --color-orange-84: #FAC53D; /* hsl(43, 95%, 61%) · fill */
  --color-orange-85: #FAC63D; /* hsl(43, 95%, 61%) · fill */
  --color-yellow-130: #FDE25B; /* hsl(50, 98%, 67%) · fill */
  --color-orange-86: #FAAB56; /* hsl(31, 94%, 66%) · fill */
  --color-yellow-131: #FDD34D; /* hsl(46, 98%, 65%) · fill */
  --color-yellow-132: #FCE962; /* hsl(53, 96%, 69%) · fill */
  --color-light-yellow-65: #FCF883; /* hsl(58, 95%, 75%) · fill */
  --color-light-yellow-66: #FCF984; /* hsl(58, 95%, 75%) · fill */
  --color-yellow-133: #FCD54C; /* hsl(47, 97%, 64%) · fill */
  --color-orange-87: #FAC33D; /* hsl(43, 95%, 61%) · fill */
  --color-orange-88: #C5841F; /* hsl(37, 73%, 45%) · fill */
  --color-orange-89: #C6851D; /* hsl(37, 74%, 45%) · fill */
  --color-red-10: #AF482F; /* hsl(12, 58%, 44%) · fill */
  --color-orange-90: #F78E50; /* hsl(22, 91%, 64%) · fill */
  --color-yellow-134: #FED756; /* hsl(46, 99%, 67%) · fill */
  --color-yellow-135: #FDEC66; /* hsl(53, 97%, 70%) · fill */
  --color-yellow-136: #FDD34E; /* hsl(46, 98%, 65%) · fill */
  --color-yellow-137: #FDEB65; /* hsl(53, 97%, 69%) · fill */
  --color-orange-91: #B47516; /* hsl(36, 78%, 40%) · fill */
  --color-yellow-138: #FCCF46; /* hsl(45, 97%, 63%) · fill */
  --color-yellow-139: #FDEB66; /* hsl(53, 97%, 70%) · fill */
  --color-orange-92: #F5BD39; /* hsl(42, 90%, 59%) · fill */
  --color-yellow-140: #FDEB68; /* hsl(53, 97%, 70%) · fill */
  --color-yellow-141: #FDEC68; /* hsl(53, 97%, 70%) · fill */
  --color-yellow-142: #FBD248; /* hsl(46, 96%, 63%) · fill */
  --color-orange-93: #F3A258; /* hsl(29, 87%, 65%) · fill */
  --color-red-11: #B2472E; /* hsl(11, 59%, 44%) · fill */
  --color-orange-94: #C98C1F; /* hsl(38, 73%, 45%) · fill */
  --color-yellow-143: #FDE45A; /* hsl(51, 98%, 67%) · fill */
  --color-light-yellow-67: #FDF16E; /* hsl(55, 97%, 71%) · fill */
  --color-light-yellow-68: #FCF170; /* hsl(55, 96%, 71%) · fill */
  --color-light-yellow-69: #FCF98C; /* hsl(58, 95%, 77%) · fill */
  --color-light-yellow-70: #FCEB73; /* hsl(53, 96%, 72%) · fill */
  --color-yellow-144: #FDE360; /* hsl(50, 98%, 68%) · fill */
  --color-light-yellow-71: #F8F487; /* hsl(58, 89%, 75%) · fill */
  --color-light-yellow-72: #FBF68F; /* hsl(57, 93%, 77%) · fill */
  --color-yellow-145: #F5D252; /* hsl(47, 89%, 64%) · fill */
  --color-yellow-146: #F3D151; /* hsl(47, 87%, 64%) · fill */
  --color-orange-95: #EFBE40; /* hsl(43, 85%, 59%) · fill */
  --color-orange-96: #DCA02D; /* hsl(39, 71%, 52%) · fill */
  --color-orange-97: #B85E2A; /* hsl(22, 63%, 44%) · fill */
  --color-orange-98: #E28550; /* hsl(22, 72%, 60%) · fill */
  --color-yellow-147: #FADB59; /* hsl(48, 94%, 66%) · fill */
  --color-orange-99: #F9B24F; /* hsl(35, 93%, 64%) · fill */
  --color-yellow-148: #FDE25F; /* hsl(50, 98%, 68%) · fill */
  --color-orange-100: #E7B33D; /* hsl(42, 78%, 57%) · fill */
  --color-yellow-149: #F7D64D; /* hsl(48, 91%, 64%) · fill */
  --color-light-yellow-73: #FBE375; /* hsl(49, 94%, 72%) · fill */
  --color-orange-101: #FDD767; /* hsl(45, 97%, 70%) · fill */
  --color-yellow-150: #FCEB67; /* hsl(53, 96%, 70%) · fill */
  --color-light-yellow-74: #FBD96E; /* hsl(46, 95%, 71%) · fill */
  --color-orange-102: #FCC161; /* hsl(37, 96%, 68%) · fill */
  --color-orange-103: #E58955; /* hsl(22, 73%, 62%) · fill */
  --color-orange-104: #BB6128; /* hsl(23, 65%, 45%) · fill */
  --color-orange-105: #CD8C29; /* hsl(36, 67%, 48%) · fill */
  --color-yellow-151: #F7D04B; /* hsl(46, 91%, 63%) · fill */
  --color-yellow-152: #F8D754; /* hsl(48, 92%, 65%) · fill */
  --color-yellow-153: #F8D853; /* hsl(48, 92%, 65%) · fill */
  --color-yellow-154: #F7D853; /* hsl(49, 91%, 65%) · fill */
  --color-light-yellow-75: #FDDA6B; /* hsl(46, 97%, 71%) · fill */
  --color-light-yellow-76: #FFE26A; /* hsl(48, 100%, 71%) · fill */
  --color-orange-106: #FCD162; /* hsl(43, 96%, 69%) · fill */
  --color-light-yellow-77: #FCE374; /* hsl(49, 96%, 72%) · fill */
  --color-orange-107: #FCD265; /* hsl(43, 96%, 69%) · fill */
  --color-orange-108: #FF8000; /* hsl(30, 100%, 50%) · fill */
  --color-red-12: #B94C36; /* hsl(10, 55%, 47%) · fill */
  --color-orange-109: #FC9B57; /* hsl(25, 96%, 66%) · fill */
  --color-light-yellow-78: #FBF985; /* hsl(59, 94%, 75%) · fill */
  --color-orange-110: #F89B5B; /* hsl(24, 92%, 66%) · fill */
  --color-red-13: #BD5136; /* hsl(12, 56%, 48%) · fill */
  --color-orange-111: #F0B12F; /* hsl(40, 87%, 56%) · fill */
  --color-orange-112: #F78A4E; /* hsl(21, 91%, 64%) · fill */
  --color-orange-113: #F88A4F; /* hsl(21, 92%, 64%) · fill */
  --color-red-14: #B34930; /* hsl(11, 58%, 45%) · fill */
  --color-yellow-155: #FCD657; /* hsl(46, 96%, 66%) · fill */
  --color-orange-114: #FCC761; /* hsl(39, 96%, 68%) · fill */
  --color-orange-115: #FCC65F; /* hsl(39, 96%, 68%) · fill */
  --color-red-15: #BD4B37; /* hsl(9, 55%, 48%) · fill */
  --color-orange-116: #B57517; /* hsl(36, 77%, 40%) · fill */
  --color-orange-117: #CA8E20; /* hsl(39, 73%, 46%) · fill */
  --color-orange-118: #CB8E21; /* hsl(38, 72%, 46%) · fill */
  --color-orange-119: #F6BD40; /* hsl(41, 91%, 61%) · fill */
  --color-yellow-156: #FBD24A; /* hsl(46, 96%, 64%) · fill */
  --color-orange-120: #FBC13D; /* hsl(42, 96%, 61%) · fill */
  --color-orange-121: #FDCD63; /* hsl(41, 97%, 69%) · fill */
  --color-orange-122: #FDCE62; /* hsl(42, 97%, 69%) · fill */
  --color-orange-123: #F98B50; /* hsl(21, 93%, 65%) · fill */
  --color-orange-124: #F88D4F; /* hsl(22, 92%, 64%) · fill */
  --color-red-16: #BC4D37; /* hsl(10, 55%, 48%) · fill */
  --color-red-17: #BC4C37; /* hsl(9, 55%, 48%) · fill */
  --color-red-18: #BC4C38; /* hsl(9, 54%, 48%) · fill */
  --color-orange-125: #FF9966; /* hsl(20, 100%, 70%) · fill */
  --color-light-orange-11: #FCA884; /* hsl(18, 95%, 75%) · fill */
  --color-light-orange-12: #FAA682; /* hsl(18, 92%, 75%) · fill */
  --color-orange-126: #F1B439; /* hsl(40, 87%, 58%) · fill */
  --color-orange-127: #F2B538; /* hsl(40, 88%, 58%) · fill */
  --color-orange-128: #F2B536; /* hsl(41, 88%, 58%) · fill */
  --color-red-19: #B64B33; /* hsl(11, 56%, 46%) · fill */
  --color-orange-129: #FCAE5E; /* hsl(30, 96%, 68%) · fill */
  --color-yellow-157: #FCD656; /* hsl(46, 97%, 66%) · fill */
  --color-yellow-158: #FDD454; /* hsl(45, 98%, 66%) · fill */
  --color-orange-130: #FBC05D; /* hsl(38, 95%, 67%) · fill */
  --color-yellow-159: #FDE259; /* hsl(50, 98%, 67%) · fill */
  --color-yellow-160: #FCED68; /* hsl(54, 96%, 70%) · fill */
  --color-orange-131: #B6761A; /* hsl(35, 75%, 41%) · fill */
  --color-orange-132: #B7781A; /* hsl(36, 75%, 41%) · fill */
  --color-orange-133: #F98D51; /* hsl(21, 93%, 65%) · fill */
  --color-orange-134: #F98F51; /* hsl(22, 93%, 65%) · fill */
  --color-orange-135: #FAA267; /* hsl(24, 94%, 69%) · fill */
  --color-light-yellow-79: #F8F880; /* hsl(60, 90%, 74%) · fill */
  --color-orange-136: #F7B633; /* hsl(40, 92%, 58%) · fill */
  --color-orange-137: #FAC740; /* hsl(44, 95%, 62%) · fill */
  --color-orange-138: #F88C50; /* hsl(21, 92%, 64%) · fill */
  --color-orange-139: #F68F59; /* hsl(21, 90%, 66%) · fill */
  --color-red-20: #B44A32; /* hsl(11, 57%, 45%) · fill */
  --color-red-21: #B54A31; /* hsl(11, 57%, 45%) · fill */
  --color-orange-140: #FDCF5B; /* hsl(43, 98%, 67%) · fill */
  --color-light-orange-13: #FBA06F; /* hsl(21, 95%, 71%) · fill */
  --color-light-orange-14: #F8A173; /* hsl(21, 90%, 71%) · fill */
  --color-orange-141: #C0841C; /* hsl(38, 75%, 43%) · fill */
  --color-orange-142: #BF841B; /* hsl(38, 75%, 43%) · fill */
  --color-red-22: #B34931; /* hsl(11, 57%, 45%) · fill */
  --color-orange-143: #F88C4F; /* hsl(22, 92%, 64%) · fill */
  --color-orange-144: #FBAC5C; /* hsl(30, 95%, 67%) · fill */
  --color-orange-145: #FAAC5C; /* hsl(30, 94%, 67%) · fill */
  --color-orange-146: #F2B638; /* hsl(41, 88%, 58%) · fill */
  --color-orange-147: #C2681E; /* hsl(27, 73%, 44%) · fill */
  --color-orange-148: #FAC642; /* hsl(43, 95%, 62%) · fill */
  --color-orange-149: #FACA42; /* hsl(44, 95%, 62%) · fill */
  --color-orange-150: #B77719; /* hsl(36, 76%, 41%) · fill */
  --color-orange-151: #FDC33C; /* hsl(42, 98%, 61%) · fill */
  --color-yellow-161: #FCEB65; /* hsl(53, 96%, 69%) · fill */
  --color-light-yellow-80: #FBF987; /* hsl(59, 94%, 76%) · fill */
  --color-orange-152: #DEA62F; /* hsl(41, 73%, 53%) · fill */
  --color-orange-153: #FFCF59; /* hsl(43, 100%, 67%) · fill */
  --color-orange-154: #F9A25F; /* hsl(26, 93%, 67%) · fill */
  --color-orange-155: #F9A25E; /* hsl(26, 93%, 67%) · fill */
  --color-yellow-162: #FCD552; /* hsl(46, 97%, 65%) · fill */
  --color-yellow-163: #FCD550; /* hsl(46, 97%, 65%) · fill */
  --color-yellow-164: #F7D669; /* hsl(46, 90%, 69%) · fill */
  --color-light-orange-15: #FAA673; /* hsl(23, 93%, 72%) · fill */
  --color-light-orange-16: #FBA672; /* hsl(23, 94%, 72%) · fill */
  --color-red-23: #B74A35; /* hsl(10, 55%, 46%) · fill */
  --color-orange-156: #F1B637; /* hsl(41, 87%, 58%) · fill */
  --color-yellow-165: #FCD44C; /* hsl(46, 97%, 64%) · fill */
  --color-yellow-166: #FBD44C; /* hsl(47, 96%, 64%) · fill */
  --color-orange-157: #D89528; /* hsl(37, 69%, 50%) · fill */
  --color-orange-158: #F9C640; /* hsl(43, 94%, 61%) · fill */
  --color-yellow-167: #FDE25A; /* hsl(50, 98%, 67%) · fill */
  --color-yellow-168: #FEEF67; /* hsl(54, 99%, 70%) · fill */
  --color-yellow-169: #FAEA65; /* hsl(54, 94%, 69%) · fill */
  --color-yellow-170: #FDDE57; /* hsl(49, 98%, 67%) · fill */
  --color-yellow-171: #FBCE46; /* hsl(45, 96%, 63%) · fill */
  --color-light-yellow-81: #FDF77A; /* hsl(57, 97%, 74%) · fill */
  --color-orange-159: #A84B1C; /* hsl(20, 71%, 38%) · fill */
  --color-orange-160: #FAB269; /* hsl(30, 94%, 70%) · fill */
  --color-orange-161: #F89B4F; /* hsl(27, 92%, 64%) · fill */
  --color-light-orange-17: #F9A97A; /* hsl(22, 91%, 73%) · fill */
  --color-light-orange-18: #FCDA77; /* hsl(45, 96%, 73%) · fill */
  --color-yellow-172: #FCEA64; /* hsl(53, 96%, 69%) · fill */
  --color-yellow-173: #FEE05F; /* hsl(49, 99%, 68%) · fill */
  --color-yellow-174: #FFEA63; /* hsl(52, 100%, 69%) · fill */
  --color-yellow-175: #FDEB64; /* hsl(53, 97%, 69%) · fill */
  --color-light-yellow-82: #FBF884; /* hsl(58, 94%, 75%) · fill */
  --color-light-yellow-83: #F9FA82; /* hsl(60, 92%, 75%) · fill */
  --color-dark-green-12: #3A4F00; /* hsl(76, 100%, 15%) · fill */
  --color-light-yellow-84: #FDE17B; /* hsl(47, 97%, 74%) · fill */
  --color-light-yellow-85: #FDF77C; /* hsl(57, 97%, 74%) · fill */
  --color-yellow-176: #FEDE55; /* hsl(49, 99%, 66%) · fill */
  --color-orange-162: #F99D68; /* hsl(22, 92%, 69%) · fill */
  --color-yellow-177: #FBD751; /* hsl(47, 96%, 65%) · fill */
  --color-yellow-178: #FCD854; /* hsl(47, 97%, 66%) · fill */
  --color-yellow-179: #FEEA66; /* hsl(52, 99%, 70%) · fill */
  --color-light-yellow-86: #FEDE79; /* hsl(46, 99%, 74%) · fill */
  --color-yellow-180: #F9E05B; /* hsl(51, 93%, 67%) · fill */
  --color-red-24: #B4492F; /* hsl(12, 59%, 45%) · fill */
  --color-orange-163: #FCCC4A; /* hsl(44, 97%, 64%) · fill */
  --color-orange-164: #FDCC48; /* hsl(44, 98%, 64%) · fill */
  --color-orange-165: #FCCD47; /* hsl(44, 97%, 63%) · fill */
  --color-light-yellow-87: #FEEC81; /* hsl(51, 98%, 75%) · fill */
  --color-light-orange-19: #F69D74; /* hsl(19, 88%, 71%) · fill */
  --color-yellow-181: #F7F45A; /* hsl(59, 91%, 66%) · fill */
  --color-dark-green-13: #627E19; /* hsl(77, 67%, 30%) · fill */
  --color-dark-green-14: #6D891E; /* hsl(76, 64%, 33%) · fill */
  --color-light-yellow-88: #FFE484; /* hsl(47, 100%, 76%) · fill */
  --color-light-yellow-89: #F7E57B; /* hsl(51, 89%, 73%) · fill */
  --color-yellow-182: #FCDF5C; /* hsl(49, 96%, 67%) · fill */
  --color-orange-166: #F99862; /* hsl(21, 93%, 68%) · fill */
  --color-yellow-183: #FFDB4E; /* hsl(48, 100%, 65%) · fill */
  --color-dark-green-15: #424F02; /* hsl(70, 95%, 16%) · fill */
  --color-orange-167: #EE8661; /* hsl(16, 81%, 66%) · fill */
  --color-orange-168: #F7B45C; /* hsl(34, 91%, 66%) · fill */
  --color-light-yellow-90: #FDDE7E; /* hsl(45, 97%, 74%) · fill */
  --color-light-yellow-91: #FDDF80; /* hsl(46, 97%, 75%) · fill */
  --color-light-yellow-92: #FCF682; /* hsl(57, 95%, 75%) · fill */
  --color-orange-169: #F6C94A; /* hsl(44, 91%, 63%) · fill */
  --color-red-25: #A83E2C; /* hsl(9, 58%, 42%) · fill */
  --color-red-26: #B6472E; /* hsl(11, 60%, 45%) · fill */
  --color-orange-170: #F6BA40; /* hsl(40, 91%, 61%) · fill */
  --color-orange-171: #EDB43F; /* hsl(40, 83%, 59%) · fill */
  --color-dark-yellow-8: #5A670B; /* hsl(68, 81%, 22%) · fill */
  --color-green-32: #8FB533; /* hsl(78, 56%, 45%) · fill */
  --color-dark-green-16: #3F4D03; /* hsl(71, 93%, 16%) · fill */
  --color-dark-green-17: #3F4C00; /* hsl(70, 100%, 15%) · fill */
  --color-orange-172: #FDCA62; /* hsl(40, 97%, 69%) · fill */
  --color-dark-green-18: #3D4B02; /* hsl(72, 95%, 15%) · fill */
  --color-dark-green-19: #394900; /* hsl(73, 100%, 14%) · fill */
  --color-dark-green-20: #3A4B00; /* hsl(74, 100%, 15%) · fill */
  --color-dark-green-21: #3A4A02; /* hsl(73, 95%, 15%) · fill */
  --color-green-33: #8EAF38; /* hsl(77, 52%, 45%) · fill */
  --color-light-red: #F19781; /* hsl(12, 80%, 73%) · fill */
  --color-dark-yellow-9: #525B0E; /* hsl(67, 73%, 21%) · fill */
  --color-green-34: #B3CD3D; /* hsl(71, 59%, 52%) · fill */
  --color-dark-yellow-10: #3F4A03; /* hsl(69, 92%, 15%) · fill */
  --color-dark-yellow-11: #3F4A00; /* hsl(69, 100%, 15%) · fill */
  --color-dark-green-22: #5A6D0B; /* hsl(72, 82%, 24%) · fill */
  --color-dark-green-23: #5A6D0D; /* hsl(72, 79%, 24%) · fill */
  --color-yellow-184: #CEE266; /* hsl(70, 68%, 64%) · fill */
  --color-green-35: #87AC30; /* hsl(78, 56%, 43%) · fill */
  --color-dark-green-24: #69831E; /* hsl(75, 63%, 32%) · fill */
  --color-yellow-185: #CDE159; /* hsl(69, 69%, 62%) · fill */
  --color-yellow-186: #CDE452; /* hsl(69, 73%, 61%) · fill */
  --color-dark-yellow-12: #3F4B02; /* hsl(70, 95%, 15%) · fill */
  --color-dark-green-25: #5C6F0B; /* hsl(71, 82%, 24%) · fill */
  --color-green-36: #B7D049; /* hsl(71, 59%, 55%) · fill */
  --color-green-37: #7B9B2B; /* hsl(77, 57%, 39%) · fill */
  --color-green-38: #8DB334; /* hsl(78, 55%, 45%) · fill */
  --color-green-39: #87AB32; /* hsl(78, 55%, 43%) · fill */
  --color-dark-yellow-13: #404C02; /* hsl(70, 95%, 15%) · fill */
  --color-dark-yellow-14: #3E4A02; /* hsl(70, 95%, 15%) · fill */
  --color-dark-green-26: #3E4B00; /* hsl(70, 100%, 15%) · fill */
  --color-dark-yellow-15: #515E0D; /* hsl(70, 76%, 21%) · fill */
  --color-green-40: #7A9A2B; /* hsl(77, 56%, 39%) · fill */
  --color-green-41: #BBCD71; /* hsl(72, 48%, 62%) · fill */
  --color-green-42: #88AC32; /* hsl(78, 55%, 44%) · fill */
  --color-dark-yellow-16: #677706; /* hsl(68, 90%, 25%) · fill */
  --color-orange-173: #E6B942; /* hsl(44, 77%, 58%) · fill */
  --color-dark-yellow-17: #3D4901; /* hsl(70, 97%, 15%) · fill */
  --color-dark-yellow-18: #5B630D; /* hsl(66, 77%, 22%) · fill */
  --color-dark-green-27: #5F7519; /* hsl(74, 65%, 28%) · fill */
  --color-green-43: #89AF32; /* hsl(78, 56%, 44%) · fill */
  --color-green-44: #98BA39; /* hsl(76, 53%, 48%) · fill */
  --color-dark-yellow-19: #667805; /* hsl(69, 92%, 25%) · fill */
  --color-yellow-187: #DAB53E; /* hsl(46, 68%, 55%) · fill */
  --color-dark-green-28: #3D4A01; /* hsl(71, 97%, 15%) · fill */
  --color-dark-yellow-20: #5A630D; /* hsl(66, 77%, 22%) · fill */
  --color-dark-green-29: #556611; /* hsl(72, 71%, 23%) · fill */
  --color-dark-yellow-21: #667706; /* hsl(69, 90%, 25%) · fill */
  --color-dark-green-30: #4C5B05; /* hsl(70, 90%, 19%) · fill */
  --color-dark-yellow-22: #4E5A05; /* hsl(68, 89%, 19%) · fill */
  --color-dark-yellow-23: #59620C; /* hsl(66, 78%, 22%) · fill */
  --color-dark-yellow-24: #4D5905; /* hsl(69, 89%, 18%) · fill */
  --color-dark-yellow-25: #696E15; /* hsl(63, 68%, 26%) · fill */
  --color-dark-yellow-26: #4D5906; /* hsl(69, 87%, 19%) · fill */
  --color-dark-yellow-27: #837919; /* hsl(54, 68%, 31%) · fill */
  --color-dark-yellow-28: #676D13; /* hsl(64, 70%, 25%) · fill */
  --color-dark-yellow-29: #686C14; /* hsl(63, 69%, 25%) · fill */
  --color-dark-green-31: #455303; /* hsl(71, 93%, 17%) · fill */
  --color-orange-174: #E3B436; /* hsl(44, 76%, 55%) · fill */
  --color-green-45: #90B434; /* hsl(77, 55%, 45%) · fill */
  --color-dark-green-32: #455302; /* hsl(70, 95%, 17%) · fill */
  --color-light-green-2: #CDDF8C; /* hsl(73, 56%, 71%) · fill */
  --color-green-46: #94B937; /* hsl(77, 54%, 47%) · fill */
  --color-dark-green-33: #708E23; /* hsl(77, 60%, 35%) · fill */
  --color-yellow-188: #D6E96F; /* hsl(69, 73%, 67%) · fill */
  --color-yellow-189: #CBE05E; /* hsl(70, 68%, 62%) · fill */
  --color-green-47: #8FB535; /* hsl(78, 55%, 46%) · fill */
  --color-dark-green-34: #445202; /* hsl(71, 95%, 16%) · fill */
  --color-orange-175: #E3B335; /* hsl(43, 76%, 55%) · fill */
  --color-green-48: #8DB036; /* hsl(77, 53%, 45%) · fill */
  --color-green-49: #99B84B; /* hsl(77, 43%, 51%) · fill */
  --color-green-50: #8DB238; /* hsl(78, 52%, 46%) · fill */
  --color-green-51: #93A939; /* hsl(72, 50%, 44%) · fill */
  --color-green-52: #749C35; /* hsl(83, 49%, 41%) · fill */
  --color-green-53: #93AA3D; /* hsl(73, 47%, 45%) · fill */
  --color-green-54: #7BA22E; /* hsl(80, 56%, 41%) · fill */
  --color-green-55: #C5D77C; /* hsl(72, 53%, 66%) · fill */
  --color-green-56: #B0CB3A; /* hsl(71, 58%, 51%) · fill */
  --color-green-57: #92B639; /* hsl(77, 52%, 47%) · fill */
  --color-dark-green-35: #435202; /* hsl(71, 95%, 16%) · fill */
  --color-orange-176: #E3B334; /* hsl(44, 76%, 55%) · fill */
  --color-yellow-190: #D1E262; /* hsl(68, 69%, 64%) · fill */
  --color-green-58: #82A732; /* hsl(79, 54%, 43%) · fill */
  --color-dark-green-36: #657F1D; /* hsl(76, 63%, 31%) · fill */
  --color-dark-green-37: #647F1D; /* hsl(77, 63%, 31%) · fill */
  --color-dark-green-38: #647F1E; /* hsl(77, 62%, 31%) · fill */
  --color-dark-green-39: #65811F; /* hsl(77, 61%, 31%) · fill */
  --color-dark-green-40: #65811E; /* hsl(77, 62%, 31%) · fill */
  --color-dark-green-41: #67821E; /* hsl(76, 62%, 31%) · fill */
  --color-dark-green-42: #67831F; /* hsl(77, 62%, 32%) · fill */
  --color-green-59: #90B637; /* hsl(78, 54%, 46%) · fill */
  --color-green-60: #83A830; /* hsl(79, 56%, 42%) · fill */
  --color-green-61: #739932; /* hsl(82, 51%, 40%) · fill */
  --color-green-62: #9BB54F; /* hsl(75, 41%, 51%) · fill */
  --color-green-63: #94AA3C; /* hsl(72, 48%, 45%) · fill */
  --color-green-64: #7AA02E; /* hsl(80, 55%, 40%) · fill */
  --color-green-65: #B8C86B; /* hsl(70, 46%, 60%) · fill */
  --color-green-66: #AECA3A; /* hsl(72, 58%, 51%) · fill */
  --color-green-67: #C3DF6C; /* hsl(75, 64%, 65%) · fill */
  --color-dark-green-43: #435101; /* hsl(70, 98%, 16%) · fill */
  --color-dark-yellow-30: #8C8A0C; /* hsl(59, 84%, 30%) · fill */
  --color-green-68: #93B837; /* hsl(77, 54%, 47%) · fill */
  --color-green-69: #7CA02F; /* hsl(79, 55%, 41%) · fill */
  --color-dark-green-44: #647F1A; /* hsl(76, 66%, 30%) · fill */
  --color-dark-green-45: #647F1B; /* hsl(76, 65%, 30%) · fill */
  --color-green-70: #92B438; /* hsl(76, 53%, 46%) · fill */
  --color-green-71: #94B740; /* hsl(78, 48%, 48%) · fill */
  --color-green-72: #92AA37; /* hsl(73, 51%, 44%) · fill */
  --color-green-73: #719832; /* hsl(83, 50%, 40%) · fill */
  --color-green-74: #7BA02D; /* hsl(79, 56%, 40%) · fill */
  --color-green-75: #7CA22D; /* hsl(79, 57%, 41%) · fill */
  --color-green-76: #93B73A; /* hsl(77, 52%, 47%) · fill */
  --color-dark-yellow-31: #8C8A0D; /* hsl(59, 83%, 30%) · fill */
  --color-dark-green-46: #647D19; /* hsl(75, 67%, 29%) · fill */
  --color-green-77: #90B534; /* hsl(77, 55%, 46%) · fill */
  --color-green-78: #BAD643; /* hsl(71, 64%, 55%) · fill */
  --color-yellow-191: #CBE060; /* hsl(70, 67%, 63%) · fill */
  --color-green-79: #BBD543; /* hsl(71, 63%, 55%) · fill */
  --color-yellow-192: #CEE164; /* hsl(69, 68%, 64%) · fill */
  --color-green-80: #90B634; /* hsl(78, 56%, 46%) · fill */
  --color-dark-green-47: #647C18; /* hsl(74, 68%, 29%) · fill */
  --color-dark-green-48: #56690A; /* hsl(72, 83%, 23%) · fill */
  --color-green-81: #ACC73D; /* hsl(72, 55%, 51%) · fill */
  --color-green-82: #ACC83D; /* hsl(72, 56%, 51%) · fill */
  --color-green-83: #99B936; /* hsl(75, 55%, 47%) · fill */
  --color-dark-green-49: #52630C; /* hsl(72, 78%, 22%) · fill */
  --color-green-84: #93B836; /* hsl(77, 55%, 47%) · fill */
  --color-dark-green-50: #415001; /* hsl(71, 98%, 16%) · fill */
  --color-dark-yellow-32: #8B890E; /* hsl(59, 82%, 30%) · fill */
  --color-dark-green-51: #637D17; /* hsl(75, 69%, 29%) · fill */
  --color-green-85: #769930; /* hsl(80, 52%, 39%) · fill */
  --color-green-86: #BAD543; /* hsl(71, 63%, 55%) · fill */
  --color-green-87: #BBD644; /* hsl(71, 64%, 55%) · fill */
  --color-yellow-193: #CEE262; /* hsl(69, 69%, 64%) · fill */
  --color-yellow-194: #CEE261; /* hsl(69, 69%, 63%) · fill */
  --color-yellow-195: #BFBF80; /* hsl(60, 33%, 63%) · fill */
  --color-green-88: #8CB436; /* hsl(79, 54%, 46%) · fill */
  --color-yellow-196: #C8DB54; /* hsl(68, 65%, 59%) · fill */
  --color-green-89: #95B448; /* hsl(77, 43%, 49%) · fill */
  --color-green-90: #94B448; /* hsl(78, 43%, 49%) · fill */
  --color-green-91: #7A9F2D; /* hsl(79, 56%, 40%) · fill */
  --color-light-green-3: #D8EA8F; /* hsl(72, 68%, 74%) · fill */
  --color-green-92: #88AD46; /* hsl(82, 42%, 48%) · fill */
  --color-green-93: #B5C666; /* hsl(71, 46%, 59%) · fill */
  --color-green-94: #719425; /* hsl(79, 60%, 36%) · fill */
  --color-dark-green-52: #3E5202; /* hsl(75, 95%, 16%) · fill */
  --color-yellow-197: #BCCB62; /* hsl(69, 50%, 59%) · fill */
  --color-green-95: #93AF32; /* hsl(73, 56%, 44%) · fill */
  --color-dark-yellow-33: #525C0A; /* hsl(67, 80%, 20%) · fill */
  --color-orange-177: #F2BE42; /* hsl(42, 87%, 60%) · fill */
  --color-green-96: #92B834; /* hsl(77, 56%, 46%) · fill */
  --color-green-97: #8DB237; /* hsl(78, 53%, 46%) · fill */
  --color-green-98: #B0CB3F; /* hsl(72, 57%, 52%) · fill */
  --color-green-99: #B0CC3D; /* hsl(72, 58%, 52%) · fill */
  --color-green-100: #C8DC75; /* hsl(72, 60%, 66%) · fill */
  --color-green-101: #84A732; /* hsl(78, 54%, 43%) · fill */
  --color-green-102: #C4D87C; /* hsl(73, 54%, 67%) · fill */
  --color-green-103: #91B538; /* hsl(77, 53%, 46%) · fill */
  --color-dark-green-53: #607412; /* hsl(72, 73%, 26%) · fill */
  --color-yellow-198: #C9DC54; /* hsl(68, 66%, 60%) · fill */
  --color-yellow-199: #C8DB51; /* hsl(68, 66%, 59%) · fill */
  --color-yellow-200: #C8DC52; /* hsl(69, 66%, 59%) · fill */
  --color-green-104: #BBD842; /* hsl(72, 66%, 55%) · fill */
  --color-green-105: #779C2B; /* hsl(80, 57%, 39%) · fill */
  --color-green-106: #759A28; /* hsl(79, 59%, 38%) · fill */
  --color-yellow-201: #BAC56D; /* hsl(68, 43%, 60%) · fill */
  --color-green-107: #729325; /* hsl(78, 60%, 36%) · fill */
  --color-green-108: #729424; /* hsl(78, 61%, 36%) · fill */
  --color-dark-green-54: #404F02; /* hsl(72, 95%, 16%) · fill */
  --color-dark-yellow-34: #515B0A; /* hsl(67, 80%, 20%) · fill */
  --color-orange-178: #F6C146; /* hsl(42, 91%, 62%) · fill */
  --color-dark-green-55: #657D18; /* hsl(74, 68%, 29%) · fill */
  --color-green-109: #93B735; /* hsl(77, 55%, 46%) · fill */
  --color-yellow-202: #CBDD5A; /* hsl(68, 66%, 61%) · fill */
  --color-light-green-4: #D6E88E; /* hsl(72, 66%, 73%) · fill */
  --color-green-110: #8DB434; /* hsl(78, 55%, 45%) · fill */
  --color-green-111: #8DB534; /* hsl(79, 55%, 46%) · fill */
  --color-green-112: #8FB734; /* hsl(78, 56%, 46%) · fill */
  --color-green-113: #8FB636; /* hsl(78, 54%, 46%) · fill */
  --color-green-114: #91B837; /* hsl(78, 54%, 47%) · fill */
  --color-green-115: #94BA39; /* hsl(78, 53%, 48%) · fill */
  --color-green-116: #BFD74A; /* hsl(70, 64%, 57%) · fill */
  --color-green-117: #AAC641; /* hsl(73, 54%, 52%) · fill */
  --color-green-118: #6C9231; /* hsl(84, 50%, 38%) · fill */
  --color-dark-green-56: #637F19; /* hsl(76, 67%, 30%) · fill */
  --color-dark-yellow-35: #505B09; /* hsl(68, 82%, 20%) · fill */
  --color-dark-yellow-36: #717C0A; /* hsl(66, 85%, 26%) · fill */
  --color-green-119: #749C36; /* hsl(84, 49%, 41%) · fill */
  --color-green-120: #90B537; /* hsl(78, 53%, 46%) · fill */
  --color-yellow-203: #D0E565; /* hsl(70, 71%, 65%) · fill */
  --color-green-121: #85AB30; /* hsl(79, 56%, 43%) · fill */
  --color-green-122: #739324; /* hsl(77, 61%, 36%) · fill */
  --color-green-123: #9EB648; /* hsl(73, 43%, 50%) · fill */
  --color-green-124: #7C9F2B; /* hsl(78, 57%, 40%) · fill */
  --color-dark-yellow-37: #4D590A; /* hsl(69, 80%, 19%) · fill */
  --color-dark-green-57: #657E19; /* hsl(75, 67%, 30%) · fill */
  --color-dark-yellow-38: #4F5A07; /* hsl(68, 86%, 19%) · fill */
  --color-yellow-204: #EFBF23; /* hsl(46, 86%, 54%) · fill */
  --color-dark-green-58: #708418; /* hsl(71, 69%, 31%) · fill */
  --color-green-125: #8FB338; /* hsl(78, 52%, 46%) · fill */
  --color-dark-green-59: #65872A; /* hsl(82, 53%, 35%) · fill */
  --color-green-126: #94B93B; /* hsl(78, 52%, 48%) · fill */
  --color-yellow-205: #BDD445; /* hsl(70, 62%, 55%) · fill */
  --color-green-127: #BAD541; /* hsl(71, 64%, 55%) · fill */
  --color-green-128: #709125; /* hsl(78, 59%, 36%) · fill */
  --color-green-129: #6F9226; /* hsl(79, 59%, 36%) · fill */
  --color-dark-yellow-39: #4E5A07; /* hsl(69, 86%, 19%) · fill */
  --color-dark-yellow-40: #797F0D; /* hsl(63, 81%, 27%) · fill */
  --color-dark-green-60: #6F8C19; /* hsl(75, 70%, 32%) · fill */
  --color-dark-yellow-41: #545E0E; /* hsl(68, 74%, 21%) · fill */
  --color-green-130: #90B638; /* hsl(78, 53%, 47%) · fill */
  --color-green-131: #B5CD3F; /* hsl(70, 59%, 53%) · fill */
  --color-green-132: #B8D142; /* hsl(70, 61%, 54%) · fill */
  --color-yellow-206: #B7B635; /* hsl(60, 55%, 46%) · fill */
  --color-green-133: #A2C139; /* hsl(74, 54%, 49%) · fill */
  --color-dark-yellow-42: #434F01; /* hsl(69, 98%, 16%) · fill */
  --color-dark-yellow-43: #434F02; /* hsl(69, 95%, 16%) · fill */
  --color-dark-yellow-44: #434F04; /* hsl(70, 90%, 16%) · fill */
  --color-dark-green-61: #667F1A; /* hsl(75, 66%, 30%) · fill */
  --color-dark-yellow-45: #7B7E0A; /* hsl(62, 85%, 27%) · fill */
  --color-green-134: #88AB34; /* hsl(78, 53%, 44%) · fill */
  --color-green-135: #7EA232; /* hsl(79, 53%, 42%) · fill */
  --color-green-136: #7B9F2B; /* hsl(79, 57%, 40%) · fill */
  --color-dark-green-62: #3E4E06; /* hsl(73, 86%, 16%) · fill */
  --color-green-137: #9EB750; /* hsl(75, 42%, 52%) · fill */
  --color-green-138: #A4C346; /* hsl(75, 51%, 52%) · fill */
  --color-dark-green-63: #6F8C25; /* hsl(77, 58%, 35%) · fill */
  --color-dark-green-64: #6D8E20; /* hsl(78, 63%, 34%) · fill */
  --color-dark-green-65: #658019; /* hsl(76, 67%, 30%) · fill */
  --color-dark-green-66: #677F1B; /* hsl(74, 65%, 30%) · fill */
  --color-orange-179: #D8AD35; /* hsl(44, 68%, 53%) · fill */
  --color-green-139: #92B638; /* hsl(77, 53%, 47%) · fill */
  --color-green-140: #C4D97B; /* hsl(73, 55%, 67%) · fill */
  --color-green-141: #77982C; /* hsl(78, 55%, 38%) · fill */
  --color-green-142: #A6BF3B; /* hsl(71, 53%, 49%) · fill */
  --color-green-143: #6C8F25; /* hsl(80, 59%, 35%) · fill */
  --color-dark-green-67: #3D4D02; /* hsl(73, 95%, 15%) · fill */
  --color-dark-green-68: #3F4E02; /* hsl(72, 95%, 16%) · fill */
  --color-green-144: #AFCA3E; /* hsl(72, 57%, 52%) · fill */
  --color-dark-green-69: #6E8C23; /* hsl(77, 60%, 34%) · fill */
  --color-dark-green-70: #6E8D1F; /* hsl(77, 64%, 34%) · fill */
  --color-dark-green-71: #68831A; /* hsl(75, 67%, 31%) · fill */
  --color-dark-yellow-46: #4E5A06; /* hsl(69, 88%, 19%) · fill */
  --color-orange-180: #D7AC34; /* hsl(44, 67%, 52%) · fill */
  --color-green-145: #8EB636; /* hsl(79, 54%, 46%) · fill */
  --color-green-146: #C2DB4E; /* hsl(71, 66%, 58%) · fill */
  --color-green-147: #8DB135; /* hsl(77, 54%, 45%) · fill */
  --color-green-148: #8AB034; /* hsl(78, 54%, 45%) · fill */
  --color-dark-green-72: #415104; /* hsl(72, 91%, 17%) · fill */
  --color-dark-green-73: #3F5103; /* hsl(74, 93%, 16%) · fill */
  --color-dark-green-74: #3C4B00; /* hsl(72, 100%, 15%) · fill */
  --color-dark-green-75: #3D4E01; /* hsl(73, 97%, 15%) · fill */
  --color-dark-green-76: #3E4D03; /* hsl(72, 93%, 16%) · fill */
  --color-dark-green-77: #3F4E04; /* hsl(72, 90%, 16%) · fill */
  --color-dark-yellow-47: #4F5B0C; /* hsl(69, 77%, 20%) · fill */
  --color-green-149: #8BB035; /* hsl(78, 54%, 45%) · fill */
  --color-green-150: #809C28; /* hsl(74, 59%, 38%) · fill */
  --color-dark-green-78: #465705; /* hsl(72, 89%, 18%) · fill */
  --color-dark-yellow-48: #505B06; /* hsl(68, 88%, 19%) · fill */
  --color-orange-181: #BA8717; /* hsl(41, 78%, 41%) · fill */
  --color-yellow-207: #C8DC53; /* hsl(69, 66%, 59%) · fill */
  --color-yellow-208: #C7DC53; /* hsl(69, 66%, 59%) · fill */
  --color-green-151: #89AE33; /* hsl(78, 55%, 44%) · fill */
  --color-dark-yellow-49: #535B0E; /* hsl(66, 73%, 21%) · fill */
  --color-dark-yellow-50: #515B0D; /* hsl(68, 75%, 20%) · fill */
  --color-dark-yellow-51: #525C0D; /* hsl(68, 75%, 21%) · fill */
  --color-dark-green-79: #475505; /* hsl(70, 89%, 18%) · fill */
  --color-dark-yellow-52: #515C06; /* hsl(68, 88%, 19%) · fill */
  --color-orange-182: #B88516; /* hsl(41, 79%, 40%) · fill */
  --color-green-152: #8CB036; /* hsl(78, 53%, 45%) · fill */
  --color-dark-yellow-53: #565F0F; /* hsl(67, 73%, 22%) · fill */
  --color-dark-yellow-54: #525D05; /* hsl(68, 90%, 19%) · fill */
  --color-orange-183: #B98616; /* hsl(41, 79%, 41%) · fill */
  --color-dark-yellow-55: #646F05; /* hsl(66, 91%, 23%) · fill */
  --color-orange-184: #E0A71C; /* hsl(43, 78%, 49%) · fill */
  --color-orange-185: #E0A71D; /* hsl(42, 77%, 50%) · fill */
  --color-light-gray-5: rgba(222, 226, 222, 0.16); /* hsl(0, 0%, 88%) · background */
  --color-light-gray-6: #CCCCCC; /* hsl(0, 0%, 80%) · other */
  --color-dark-gray-10: #21212B; /* hsl(240, 13%, 15%) · fill */
  --color-cyan-3: #0081C0; /* hsl(200, 100%, 38%) · background */
  --color-cyan-4: #41A1CF; /* hsl(199, 60%, 53%) · border */
  --color-light-gray-7: #E5E5E5; /* hsl(0, 0%, 90%) · border */
  --color-light-cyan: rgba(207, 235, 231, 0.5); /* hsl(171, 41%, 87%) · background */
  --color-light-cyan-2: rgba(160, 215, 209, 0.5); /* hsl(174, 41%, 73%) · background */
  --color-light-cyan-3: #A0D7D1; /* hsl(173, 41%, 74%) · background */

  /* ── Core: Typography ── */
  --font-size-2xs: 13px;
  --font-size-xs: 14px;
  --font-size-sm: 15px;
  --font-size-base: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 28px;
  --font-size-2xl: 40px;
  --font-size-3xl: 48px;
  --font-size-4xl: 54px;
  --font-family-base: ui-sans-serif;
  --font-family-2: af;
  --font-family-3: ppmondwest;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-tight: 15px;
  --line-height-snug: 16.9px;
  --line-height-normal: 18.2px;
  --line-height-relaxed: 19.5px;
  --line-height-loose: 21px;
  --line-height-lh-6: 23.4px;
  --line-height-lh-7: 24px;
  --line-height-lh-8: 30.8px;
  --line-height-lh-9: 44px;
  --line-height-lh-10: 48px;
  --line-height-lh-11: 59.4px;
  --letter-spacing-tight: -1.08px;
  --letter-spacing-normal: -0.96px;
  --letter-spacing-wide: -0.56px;
  --letter-spacing-wider: -0.18px;
  --letter-spacing-widest: -0.15px;
  --letter-spacing-ls-6: -0.13px;

  /* ── Layout: Spacing ── */
  --space-1: 1.5px;
  --space-2: 2px;
  --space-3: 2.5px;
  --space-4: 3.95px;
  --space-5: 4px;
  --space-6: 4.937px;
  --space-8: 6px;
  --space-10: 7px;
  --space-12: 8px;
  --space-16: 10px;
  --space-20: 11.85px;
  --space-24: 120px;
  --space-32: 16px;
  --space-40: 18px;
  --space-48: 20px;
  --space-64: 24px;
  --space-80: 32px;
  --space-96: 40px;
  --space-128: 48px;
  --space-160: 50.3906px;
  --space-192: 64px;
  --space-256: 80px;
  --space-23: 100px;
  --space-25: 128px;
  --space-26: 140px;
  --space-27: 160px;
  --space-28: 229.523px;
  --space-29: 229.531px;
  --space-30: 246.5px;
  --space-31: 400px;

  /* ── Borders ── */
  --border-width-hairline: 1px;
  --radius-sm: 0px 0px 0px 500%;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-full: 24px;
  --radius-r7: 27px;
  --radius-r8: 50.496px;
  --radius-r9: 1.67772e+07px;

  /* ── Surfaces: Shadows ── */
  --shadow-sm: rgba(0, 0, 0, 0.04) 0px 1.01px 1.01px 0px;
  --shadow-md: rgb(222, 226, 222) 0px 0px 0px 1px;
  --shadow-lg: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(80, 115, 138, 0.24) 0px 2px 4px 0px;
  --shadow-xl: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.15) 0px 2px 6px 0px;
  --shadow-shadow-5: rgba(0, 0, 0, 0.08) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 4px 5px 0px;
  --shadow-shadow-6: rgba(0, 0, 0, 0.06) 0px 2px 2px 0px, rgba(0, 0, 0, 0) 0px 6px 6px 0px, rgba(0, 0, 0, 0.04) 0px 0px 0px 5px;

  /* ── Motion ── */
  --duration-instant: 0.15s;
  --duration-fast: 0.16s;
  --duration-normal: 0.2s;
  --duration-slow: 0.22s;
  --duration-slower: 0.25s;
  --duration-duration-6: 0.3s;
  --duration-duration-7: 0.5s;
  --duration-duration-8: 0.6s;
  --duration-duration-9: 1s;

  /* ── Layout: Z-Index ── */
  --z-1: -1;
  --z-2: 10;
  --z-3: 20;
  --z-4: 50;
  --z-5: 100;
  --z-6: 103;
  --z-7: 112;
  --z-8: 9999;

  /* ── Breakpoints ── */
  --breakpoint-xs: 1920px;

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
    "source": "https://www.generalintelligencecompany.com/",
    "title": "General Intelligence Company",
    "generatedAt": "2026-05-05T15:50:25.776Z"
  },
  "core": {
    "color": {
      "dark-gray": {
        "$value": "#171717",
        "$type": "color",
        "$description": "text · ×2755"
      },
      "black": {
        "$value": "#000000",
        "$type": "color",
        "$description": "text · ×1582"
      },
      "white": {
        "$value": "#FFFFFF",
        "$type": "color",
        "$description": "background · ×212"
      },
      "dark-gray-2": {
        "$value": "#444141",
        "$type": "color",
        "$description": "text · ×135"
      },
      "dark-gray-3": {
        "$value": "#2C2C2C",
        "$type": "color",
        "$description": "text · ×106"
      },
      "dark-blue": {
        "$value": "#1F2937",
        "$type": "color",
        "$description": "fill · ×33"
      },
      "white-2": {
        "$value": "#F9FAF7",
        "$type": "color",
        "$description": "background · ×25"
      },
      "dark-gray-4": {
        "$value": "#646464",
        "$type": "color",
        "$description": "background · ×24"
      },
      "light-gray": {
        "$value": "#B4B8B4",
        "$type": "color",
        "$description": "background · ×22"
      },
      "white-3": {
        "$value": "#F3F5F2",
        "$type": "color",
        "$description": "text · ×21"
      },
      "light-green": {
        "$value": "#ADBEAF",
        "$type": "color",
        "$description": "other · ×19"
      },
      "white-4": {
        "$value": "#FEFFFC",
        "$type": "color",
        "$description": "background · ×12"
      },
      "light-gray-2": {
        "$value": "#CFD3CF",
        "$type": "color",
        "$description": "background · ×12"
      },
      "blue": {
        "$value": "#9DB0BD",
        "$type": "color",
        "$description": "text · ×8"
      },
      "green": {
        "$value": "#91B737",
        "$type": "color",
        "$description": "fill · ×7"
      },
      "dark-blue-2": {
        "$value": "#101828",
        "$type": "color",
        "$description": "text · ×6"
      },
      "yellow": {
        "$value": "#FDEA65",
        "$type": "color",
        "$description": "fill · ×6"
      },
      "yellow-2": {
        "$value": "#FDDE56",
        "$type": "color",
        "$description": "fill · ×6"
      },
      "light-gray-3": {
        "$value": "#DEE2DE",
        "$type": "color",
        "$description": "border · ×5"
      },
      "yellow-3": {
        "$value": "#FDEA64",
        "$type": "color",
        "$description": "fill · ×5"
      },
      "dark-green": {
        "$value": "#667E1A",
        "$type": "color",
        "$description": "fill · ×5"
      },
      "yellow-4": {
        "$value": "#FEDE56",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "yellow-5": {
        "$value": "#FCEA63",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "yellow-6": {
        "$value": "#FDE961",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "light-yellow": {
        "$value": "#FBF887",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "yellow-7": {
        "$value": "#FDEC67",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "green-2": {
        "$value": "#90B636",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "green-3": {
        "$value": "#7BA12B",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "dark-green-2": {
        "$value": "#6E8C24",
        "$type": "color",
        "$description": "fill · ×4"
      },
      "dark-blue-3": {
        "$value": "#364153",
        "$type": "color",
        "$description": "text · ×4"
      },
      "blue-2": {
        "$value": "rgba(156, 180, 192, 0.14)",
        "$type": "color",
        "$description": "background · ×4"
      },
      "light-gray-4": {
        "$value": "#CFD1D3",
        "$type": "color",
        "$description": "border · ×4"
      },
      "blue-3": {
        "$value": "rgba(80, 115, 138, 0.24)",
        "$type": "color",
        "$description": "shadow · ×4"
      },
      "yellow-8": {
        "$value": "#FDEC65",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "light-yellow-2": {
        "$value": "#FBF986",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "yellow-9": {
        "$value": "#FDDD56",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "red": {
        "$value": "#B54931",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "orange": {
        "$value": "#F9C53D",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-yellow": {
        "$value": "#3E4A00",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "green-4": {
        "$value": "#90B535",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "green-5": {
        "$value": "#90B635",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "green-6": {
        "$value": "#BBD545",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "green-7": {
        "$value": "#BBD544",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "green-8": {
        "$value": "#92B837",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "yellow-10": {
        "$value": "#D0E265",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "green-9": {
        "$value": "#8DB433",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-green-3": {
        "$value": "#3E4B03",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-green-4": {
        "$value": "#394700",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-yellow-2": {
        "$value": "#656F07",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-green-5": {
        "$value": "#384900",
        "$type": "color",
        "$description": "fill · ×3"
      },
      "dark-gray-5": {
        "$value": "rgba(68, 65, 65, 0.12)",
        "$type": "color",
        "$description": "gradient · ×3"
      },
      "dark-gray-6": {
        "$value": "rgba(68, 65, 65, 0.07)",
        "$type": "color",
        "$description": "gradient · ×3"
      },
      "yellow-11": {
        "$value": "#FCD34A",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "yellow-12": {
        "$value": "#FDE75E",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "yellow-13": {
        "$value": "#FCE863",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "yellow-14": {
        "$value": "#FDEA62",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "yellow-15": {
        "$value": "#FDDC54",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "orange-2": {
        "$value": "#FCA962",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "orange-3": {
        "$value": "#FBAF60",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "light-yellow-3": {
        "$value": "#FFFF80",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "light-yellow-4": {
        "$value": "#FDEF6C",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "orange-4": {
        "$value": "#FCCF4C",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "yellow-16": {
        "$value": "#FCEA65",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "yellow-17": {
        "$value": "#FDE65F",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "orange-5": {
        "$value": "#FFBF40",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "yellow-18": {
        "$value": "#FCD14D",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "yellow-19": {
        "$value": "#FCDD57",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "yellow-20": {
        "$value": "#FCE961",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "orange-6": {
        "$value": "#F9C63F",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "yellow-21": {
        "$value": "#FCD853",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "orange-7": {
        "$value": "#F9C33C",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "light-yellow-5": {
        "$value": "#FCF374",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "orange-8": {
        "$value": "#E7A82D",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "yellow-22": {
        "$value": "#FDEB63",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "yellow-23": {
        "$value": "#FCD64F",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "yellow-24": {
        "$value": "#FEE25F",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "red-2": {
        "$value": "#B94B34",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "light-yellow-6": {
        "$value": "#FCF986",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "yellow-25": {
        "$value": "#FAE15B",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "green-10": {
        "$value": "#8FB536",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-3": {
        "$value": "#3E4902",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "green-11": {
        "$value": "#86AB31",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "green-12": {
        "$value": "#92B738",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "orange-9": {
        "$value": "#E3B336",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-4": {
        "$value": "#808000",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-5": {
        "$value": "#686E14",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-green-6": {
        "$value": "#465403",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "yellow-26": {
        "$value": "#CEE264",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "yellow-27": {
        "$value": "#CDE164",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "green-13": {
        "$value": "#8DB335",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "green-14": {
        "$value": "#91B738",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "green-15": {
        "$value": "#8CB135",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-green-7": {
        "$value": "#425002",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "green-16": {
        "$value": "#8FB435",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "green-17": {
        "$value": "#91B637",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "green-18": {
        "$value": "#91B736",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "green-19": {
        "$value": "#90B536",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "green-20": {
        "$value": "#92B836",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "green-21": {
        "$value": "#BBD542",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "green-22": {
        "$value": "#92B737",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-green-8": {
        "$value": "#647D18",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "green-23": {
        "$value": "#92B736",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "green-24": {
        "$value": "#90B735",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "green-25": {
        "$value": "#91B536",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "green-26": {
        "$value": "#93AC45",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-green-9": {
        "$value": "#3E4E02",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "green-27": {
        "$value": "#88AD32",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "green-28": {
        "$value": "#8AAE33",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "green-29": {
        "$value": "#8BB132",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "yellow-28": {
        "$value": "#AAAA55",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "green-30": {
        "$value": "#8EB435",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-6": {
        "$value": "#4E5906",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-green-10": {
        "$value": "#3E4D02",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-green-11": {
        "$value": "#3F4F03",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "green-31": {
        "$value": "#8BAF34",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-yellow-7": {
        "$value": "#8B9914",
        "$type": "color",
        "$description": "fill · ×2"
      },
      "dark-gray-7": {
        "$value": "#2D2D2D",
        "$type": "color",
        "$description": "text · ×2"
      },
      "dark-gray-8": {
        "$value": "#1F1F29",
        "$type": "color",
        "$description": "background · ×1"
      },
      "dark-gray-9": {
        "$value": "#282834",
        "$type": "color",
        "$description": "border · ×1"
      },
      "dark-cyan": {
        "$value": "#334444",
        "$type": "color",
        "$description": "background · ×1"
      },
      "cyan": {
        "$value": "#576A6A",
        "$type": "color",
        "$description": "background · ×1"
      },
      "cyan-2": {
        "$value": "#728383",
        "$type": "color",
        "$description": "background · ×1"
      },
      "mid-gray": {
        "$value": "#A5AFAF",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-yellow-7": {
        "$value": "#FBF475",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-29": {
        "$value": "#FCD43A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-30": {
        "$value": "#FDEC62",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-8": {
        "$value": "#FDEA6D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-9": {
        "$value": "#FDF16F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-10": {
        "$value": "#FBE974",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-31": {
        "$value": "#FCE15A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-11": {
        "$value": "#FCF475",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-32": {
        "$value": "#FCE866",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-33": {
        "$value": "#FCCF44",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-34": {
        "$value": "#FCEB63",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-35": {
        "$value": "#FDE766",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-36": {
        "$value": "#FCE75F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-37": {
        "$value": "#FFFF66",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-38": {
        "$value": "#FDDE55",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-39": {
        "$value": "#FCD048",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-12": {
        "$value": "#FDF472",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-40": {
        "$value": "#FDE65C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-13": {
        "$value": "#FCF373",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-14": {
        "$value": "#FCF577",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-15": {
        "$value": "#FBFD7A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-41": {
        "$value": "#FDEC60",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-42": {
        "$value": "#FCDF5B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-10": {
        "$value": "#FCC45D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-16": {
        "$value": "#FDEE6B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-43": {
        "$value": "#FAE960",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-44": {
        "$value": "#F8D54C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-45": {
        "$value": "#FDDF58",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-17": {
        "$value": "#FBF68E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-46": {
        "$value": "#F7DF51",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-18": {
        "$value": "#FAF373",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-19": {
        "$value": "#FCF478",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-47": {
        "$value": "#FBE159",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-11": {
        "$value": "#FBA065",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-48": {
        "$value": "#FADB53",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-49": {
        "$value": "#FBE65E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-12": {
        "$value": "#FCA864",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-50": {
        "$value": "#FCE862",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-20": {
        "$value": "#FBF983",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-21": {
        "$value": "#FCE278",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-51": {
        "$value": "#FFFF00",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-22": {
        "$value": "#F7F294",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-23": {
        "$value": "#F8F58B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-52": {
        "$value": "#FCEA62",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-53": {
        "$value": "#F9D852",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-24": {
        "$value": "#FBFB8D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-54": {
        "$value": "#FDDC55",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-55": {
        "$value": "#FDEA63",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-25": {
        "$value": "#FBF375",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-56": {
        "$value": "#FDD951",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-57": {
        "$value": "#FDE761",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-13": {
        "$value": "#FAA165",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-58": {
        "$value": "#FEDD53",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-14": {
        "$value": "#FCA964",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-59": {
        "$value": "#F1D462",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-60": {
        "$value": "#FEEB64",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-26": {
        "$value": "#FCF477",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-15": {
        "$value": "#FCCB43",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-61": {
        "$value": "#FDD64E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-16": {
        "$value": "#FA9155",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-62": {
        "$value": "#FDDB56",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-63": {
        "$value": "#FDE05C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-27": {
        "$value": "#FCF171",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-64": {
        "$value": "#FDD952",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-65": {
        "$value": "#FDE760",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-17": {
        "$value": "#FAA164",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-18": {
        "$value": "#FCA963",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-66": {
        "$value": "#FDDE54",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-67": {
        "$value": "#FFE966",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-68": {
        "$value": "#FDDF57",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-69": {
        "$value": "#FDE661",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-28": {
        "$value": "#FCF16F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-19": {
        "$value": "#FBCA43",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-70": {
        "$value": "#FCD54E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-29": {
        "$value": "#FBFA88",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-20": {
        "$value": "#F99054",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-71": {
        "$value": "#FCEB64",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-72": {
        "$value": "#FCD952",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-30": {
        "$value": "#FCF06E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-orange": {
        "$value": "#FEDB7B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-21": {
        "$value": "#FCA65E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-73": {
        "$value": "#FEDA5A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-74": {
        "$value": "#FDE75F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-31": {
        "$value": "#FDEE6A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-22": {
        "$value": "#FCCA45",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-75": {
        "$value": "#FDD44E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-32": {
        "$value": "#FCF989",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-33": {
        "$value": "#FCFCDF",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-23": {
        "$value": "#FA9053",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-34": {
        "$value": "#FDF474",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-76": {
        "$value": "#FEDD56",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-77": {
        "$value": "#FDDB55",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-35": {
        "$value": "#FDDD7C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-36": {
        "$value": "#FCF679",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-24": {
        "$value": "#FDCB61",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-78": {
        "$value": "#FDDD58",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-79": {
        "$value": "#FDD34B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-37": {
        "$value": "#FEF77D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-25": {
        "$value": "#FBBC5F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-38": {
        "$value": "#FCF882",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-39": {
        "$value": "#FCDF77",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-80": {
        "$value": "#FEEE65",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-26": {
        "$value": "#FB8B4C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-orange-2": {
        "$value": "#FFD577",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-27": {
        "$value": "#F3A439",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-28": {
        "$value": "#FA8D50",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-81": {
        "$value": "#FBE055",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-82": {
        "$value": "#FEE25C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-83": {
        "$value": "#FDDB57",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-orange-3": {
        "$value": "#FEDD7C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-40": {
        "$value": "#FCF67A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-41": {
        "$value": "#FDF67A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-29": {
        "$value": "#FEA163",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-42": {
        "$value": "#FBF878",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-30": {
        "$value": "#FDA862",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-84": {
        "$value": "#FDDD57",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-85": {
        "$value": "#FCD44B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-31": {
        "$value": "#FDCB67",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-86": {
        "$value": "#FBE860",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-32": {
        "$value": "#FA8D4F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-orange-4": {
        "$value": "#FDD977",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-43": {
        "$value": "#FCF271",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-87": {
        "$value": "#FEE65D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-88": {
        "$value": "#F7CB42",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-89": {
        "$value": "#FBD85B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-90": {
        "$value": "#F9D04B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-44": {
        "$value": "#F8DD77",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-45": {
        "$value": "#FCF880",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-91": {
        "$value": "#FDD54A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-92": {
        "$value": "#FDEA60",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-93": {
        "$value": "#FCD84E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-94": {
        "$value": "#F3CA49",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-46": {
        "$value": "#FBF990",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-orange-5": {
        "$value": "#F5D77E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-33": {
        "$value": "#CC7B21",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-34": {
        "$value": "#EE9F38",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-95": {
        "$value": "#FCDA54",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-96": {
        "$value": "#F9CF4F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-97": {
        "$value": "#FCEC68",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-98": {
        "$value": "#FDED66",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-35": {
        "$value": "#BF7A27",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-99": {
        "$value": "#FBD359",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-36": {
        "$value": "#BA8B20",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-37": {
        "$value": "#F5C43F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-47": {
        "$value": "#FEF079",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-38": {
        "$value": "#FACB58",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-100": {
        "$value": "#FCD350",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-39": {
        "$value": "#EEA147",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-101": {
        "$value": "#F2CD44",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-102": {
        "$value": "#F8DD5B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-103": {
        "$value": "#F9DD5C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-40": {
        "$value": "#F8C749",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-orange-6": {
        "$value": "#FED96A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-104": {
        "$value": "#FBEB6A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-41": {
        "$value": "#F8945C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-48": {
        "$value": "#FCEE6C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-105": {
        "$value": "#FDE058",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-106": {
        "$value": "#FEDF56",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-107": {
        "$value": "#FBE964",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-49": {
        "$value": "#FBF679",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-42": {
        "$value": "#FBCB45",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-43": {
        "$value": "#F7C13A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-50": {
        "$value": "#FBF988",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-44": {
        "$value": "#B87519",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-45": {
        "$value": "#E0A32B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-46": {
        "$value": "#E0A32D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-47": {
        "$value": "#D47425",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-48": {
        "$value": "#F9BD33",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-49": {
        "$value": "#BA7A19",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-51": {
        "$value": "#FCFA88",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-50": {
        "$value": "#FA9454",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-51": {
        "$value": "#F8965A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-52": {
        "$value": "#F8C640",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-108": {
        "$value": "#FDD954",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-109": {
        "$value": "#FDDA52",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-53": {
        "$value": "#FDD160",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-52": {
        "$value": "#FBEC84",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-3": {
        "$value": "#C45638",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-54": {
        "$value": "#FAAA58",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-110": {
        "$value": "#FDEB67",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-111": {
        "$value": "#FCEC65",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-112": {
        "$value": "#FDEF66",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-55": {
        "$value": "#FAA361",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-53": {
        "$value": "#FCF476",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-56": {
        "$value": "#FCD04C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-113": {
        "$value": "#FEE961",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-114": {
        "$value": "#FDD348",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-57": {
        "$value": "#BA7A1A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-orange-7": {
        "$value": "#FDDC8E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-58": {
        "$value": "#F9C33B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-59": {
        "$value": "#FAC43D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-60": {
        "$value": "#FCCE5A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-61": {
        "$value": "#EDA335",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-115": {
        "$value": "#FCD94F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-4": {
        "$value": "#C05434",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-116": {
        "$value": "#F9E158",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-62": {
        "$value": "#FAC63E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-117": {
        "$value": "#FCE965",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-63": {
        "$value": "#FAA565",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-118": {
        "$value": "#F4E05F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-54": {
        "$value": "#FEF77F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-55": {
        "$value": "#FBF982",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-5": {
        "$value": "#BC4F36",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-6": {
        "$value": "#BC5036",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-64": {
        "$value": "#FDB962",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-56": {
        "$value": "#FEED69",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-7": {
        "$value": "#B64B34",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-65": {
        "$value": "#F9A363",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-orange-8": {
        "$value": "#FDDB79",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-57": {
        "$value": "#FDFD76",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-119": {
        "$value": "#FDEB5F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-66": {
        "$value": "#F8C33B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-67": {
        "$value": "#B47419",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-68": {
        "$value": "#FAC733",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-69": {
        "$value": "#F2B438",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-70": {
        "$value": "#F2B537",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-58": {
        "$value": "#FDDD74",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-71": {
        "$value": "#F4B737",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-59": {
        "$value": "#FDF881",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-60": {
        "$value": "#F6EF7C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-120": {
        "$value": "#FDD751",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-orange-9": {
        "$value": "#FAA574",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-61": {
        "$value": "#FBFA8D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-121": {
        "$value": "#FDEF67",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-122": {
        "$value": "#FCE057",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-62": {
        "$value": "#FCF474",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-123": {
        "$value": "#FCD24A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-124": {
        "$value": "#FFE056",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-63": {
        "$value": "#FBF783",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-64": {
        "$value": "#FBF984",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-orange-10": {
        "$value": "#FDD87A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-8": {
        "$value": "#B84B33",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-9": {
        "$value": "#BA4E34",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-72": {
        "$value": "#D88F27",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-73": {
        "$value": "#FAA263",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-74": {
        "$value": "#CD9023",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-125": {
        "$value": "#FDEB62",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-126": {
        "$value": "#FDEE64",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-75": {
        "$value": "#D27722",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-76": {
        "$value": "#E2A52A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-77": {
        "$value": "#E2A52B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-78": {
        "$value": "#D37823",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-79": {
        "$value": "#F3B635",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-80": {
        "$value": "#C2831C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-127": {
        "$value": "#FCD248",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-128": {
        "$value": "#FBE760",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-129": {
        "$value": "#FDD752",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-81": {
        "$value": "#F78E4E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-82": {
        "$value": "#E8AA30",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-83": {
        "$value": "#FAC53C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-84": {
        "$value": "#FAC53D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-85": {
        "$value": "#FAC63D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-130": {
        "$value": "#FDE25B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-86": {
        "$value": "#FAAB56",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-131": {
        "$value": "#FDD34D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-132": {
        "$value": "#FCE962",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-65": {
        "$value": "#FCF883",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-66": {
        "$value": "#FCF984",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-133": {
        "$value": "#FCD54C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-87": {
        "$value": "#FAC33D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-88": {
        "$value": "#C5841F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-89": {
        "$value": "#C6851D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-10": {
        "$value": "#AF482F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-90": {
        "$value": "#F78E50",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-134": {
        "$value": "#FED756",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-135": {
        "$value": "#FDEC66",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-136": {
        "$value": "#FDD34E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-137": {
        "$value": "#FDEB65",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-91": {
        "$value": "#B47516",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-138": {
        "$value": "#FCCF46",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-139": {
        "$value": "#FDEB66",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-92": {
        "$value": "#F5BD39",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-140": {
        "$value": "#FDEB68",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-141": {
        "$value": "#FDEC68",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-142": {
        "$value": "#FBD248",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-93": {
        "$value": "#F3A258",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-11": {
        "$value": "#B2472E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-94": {
        "$value": "#C98C1F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-143": {
        "$value": "#FDE45A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-67": {
        "$value": "#FDF16E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-68": {
        "$value": "#FCF170",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-69": {
        "$value": "#FCF98C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-70": {
        "$value": "#FCEB73",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-144": {
        "$value": "#FDE360",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-71": {
        "$value": "#F8F487",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-72": {
        "$value": "#FBF68F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-145": {
        "$value": "#F5D252",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-146": {
        "$value": "#F3D151",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-95": {
        "$value": "#EFBE40",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-96": {
        "$value": "#DCA02D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-97": {
        "$value": "#B85E2A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-98": {
        "$value": "#E28550",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-147": {
        "$value": "#FADB59",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-99": {
        "$value": "#F9B24F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-148": {
        "$value": "#FDE25F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-100": {
        "$value": "#E7B33D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-149": {
        "$value": "#F7D64D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-73": {
        "$value": "#FBE375",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-101": {
        "$value": "#FDD767",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-150": {
        "$value": "#FCEB67",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-74": {
        "$value": "#FBD96E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-102": {
        "$value": "#FCC161",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-103": {
        "$value": "#E58955",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-104": {
        "$value": "#BB6128",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-105": {
        "$value": "#CD8C29",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-151": {
        "$value": "#F7D04B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-152": {
        "$value": "#F8D754",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-153": {
        "$value": "#F8D853",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-154": {
        "$value": "#F7D853",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-75": {
        "$value": "#FDDA6B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-76": {
        "$value": "#FFE26A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-106": {
        "$value": "#FCD162",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-77": {
        "$value": "#FCE374",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-107": {
        "$value": "#FCD265",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-108": {
        "$value": "#FF8000",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-12": {
        "$value": "#B94C36",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-109": {
        "$value": "#FC9B57",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-78": {
        "$value": "#FBF985",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-110": {
        "$value": "#F89B5B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-13": {
        "$value": "#BD5136",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-111": {
        "$value": "#F0B12F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-112": {
        "$value": "#F78A4E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-113": {
        "$value": "#F88A4F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-14": {
        "$value": "#B34930",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-155": {
        "$value": "#FCD657",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-114": {
        "$value": "#FCC761",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-115": {
        "$value": "#FCC65F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-15": {
        "$value": "#BD4B37",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-116": {
        "$value": "#B57517",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-117": {
        "$value": "#CA8E20",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-118": {
        "$value": "#CB8E21",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-119": {
        "$value": "#F6BD40",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-156": {
        "$value": "#FBD24A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-120": {
        "$value": "#FBC13D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-121": {
        "$value": "#FDCD63",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-122": {
        "$value": "#FDCE62",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-123": {
        "$value": "#F98B50",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-124": {
        "$value": "#F88D4F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-16": {
        "$value": "#BC4D37",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-17": {
        "$value": "#BC4C37",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-18": {
        "$value": "#BC4C38",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-125": {
        "$value": "#FF9966",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-orange-11": {
        "$value": "#FCA884",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-orange-12": {
        "$value": "#FAA682",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-126": {
        "$value": "#F1B439",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-127": {
        "$value": "#F2B538",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-128": {
        "$value": "#F2B536",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-19": {
        "$value": "#B64B33",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-129": {
        "$value": "#FCAE5E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-157": {
        "$value": "#FCD656",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-158": {
        "$value": "#FDD454",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-130": {
        "$value": "#FBC05D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-159": {
        "$value": "#FDE259",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-160": {
        "$value": "#FCED68",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-131": {
        "$value": "#B6761A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-132": {
        "$value": "#B7781A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-133": {
        "$value": "#F98D51",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-134": {
        "$value": "#F98F51",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-135": {
        "$value": "#FAA267",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-79": {
        "$value": "#F8F880",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-136": {
        "$value": "#F7B633",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-137": {
        "$value": "#FAC740",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-138": {
        "$value": "#F88C50",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-139": {
        "$value": "#F68F59",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-20": {
        "$value": "#B44A32",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-21": {
        "$value": "#B54A31",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-140": {
        "$value": "#FDCF5B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-orange-13": {
        "$value": "#FBA06F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-orange-14": {
        "$value": "#F8A173",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-141": {
        "$value": "#C0841C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-142": {
        "$value": "#BF841B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-22": {
        "$value": "#B34931",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-143": {
        "$value": "#F88C4F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-144": {
        "$value": "#FBAC5C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-145": {
        "$value": "#FAAC5C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-146": {
        "$value": "#F2B638",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-147": {
        "$value": "#C2681E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-148": {
        "$value": "#FAC642",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-149": {
        "$value": "#FACA42",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-150": {
        "$value": "#B77719",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-151": {
        "$value": "#FDC33C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-161": {
        "$value": "#FCEB65",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-80": {
        "$value": "#FBF987",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-152": {
        "$value": "#DEA62F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-153": {
        "$value": "#FFCF59",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-154": {
        "$value": "#F9A25F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-155": {
        "$value": "#F9A25E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-162": {
        "$value": "#FCD552",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-163": {
        "$value": "#FCD550",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-164": {
        "$value": "#F7D669",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-orange-15": {
        "$value": "#FAA673",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-orange-16": {
        "$value": "#FBA672",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-23": {
        "$value": "#B74A35",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-156": {
        "$value": "#F1B637",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-165": {
        "$value": "#FCD44C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-166": {
        "$value": "#FBD44C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-157": {
        "$value": "#D89528",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-158": {
        "$value": "#F9C640",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-167": {
        "$value": "#FDE25A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-168": {
        "$value": "#FEEF67",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-169": {
        "$value": "#FAEA65",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-170": {
        "$value": "#FDDE57",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-171": {
        "$value": "#FBCE46",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-81": {
        "$value": "#FDF77A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-159": {
        "$value": "#A84B1C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-160": {
        "$value": "#FAB269",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-161": {
        "$value": "#F89B4F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-orange-17": {
        "$value": "#F9A97A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-orange-18": {
        "$value": "#FCDA77",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-172": {
        "$value": "#FCEA64",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-173": {
        "$value": "#FEE05F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-174": {
        "$value": "#FFEA63",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-175": {
        "$value": "#FDEB64",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-82": {
        "$value": "#FBF884",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-83": {
        "$value": "#F9FA82",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-12": {
        "$value": "#3A4F00",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-84": {
        "$value": "#FDE17B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-85": {
        "$value": "#FDF77C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-176": {
        "$value": "#FEDE55",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-162": {
        "$value": "#F99D68",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-177": {
        "$value": "#FBD751",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-178": {
        "$value": "#FCD854",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-179": {
        "$value": "#FEEA66",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-86": {
        "$value": "#FEDE79",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-180": {
        "$value": "#F9E05B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-24": {
        "$value": "#B4492F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-163": {
        "$value": "#FCCC4A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-164": {
        "$value": "#FDCC48",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-165": {
        "$value": "#FCCD47",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-87": {
        "$value": "#FEEC81",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-orange-19": {
        "$value": "#F69D74",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-181": {
        "$value": "#F7F45A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-13": {
        "$value": "#627E19",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-14": {
        "$value": "#6D891E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-88": {
        "$value": "#FFE484",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-89": {
        "$value": "#F7E57B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-182": {
        "$value": "#FCDF5C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-166": {
        "$value": "#F99862",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-183": {
        "$value": "#FFDB4E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-15": {
        "$value": "#424F02",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-167": {
        "$value": "#EE8661",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-168": {
        "$value": "#F7B45C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-90": {
        "$value": "#FDDE7E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-91": {
        "$value": "#FDDF80",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-yellow-92": {
        "$value": "#FCF682",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-169": {
        "$value": "#F6C94A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-25": {
        "$value": "#A83E2C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "red-26": {
        "$value": "#B6472E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-170": {
        "$value": "#F6BA40",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-171": {
        "$value": "#EDB43F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-8": {
        "$value": "#5A670B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-32": {
        "$value": "#8FB533",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-16": {
        "$value": "#3F4D03",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-17": {
        "$value": "#3F4C00",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-172": {
        "$value": "#FDCA62",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-18": {
        "$value": "#3D4B02",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-19": {
        "$value": "#394900",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-20": {
        "$value": "#3A4B00",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-21": {
        "$value": "#3A4A02",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-33": {
        "$value": "#8EAF38",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-red": {
        "$value": "#F19781",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-9": {
        "$value": "#525B0E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-34": {
        "$value": "#B3CD3D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-10": {
        "$value": "#3F4A03",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-11": {
        "$value": "#3F4A00",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-22": {
        "$value": "#5A6D0B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-23": {
        "$value": "#5A6D0D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-184": {
        "$value": "#CEE266",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-35": {
        "$value": "#87AC30",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-24": {
        "$value": "#69831E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-185": {
        "$value": "#CDE159",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-186": {
        "$value": "#CDE452",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-12": {
        "$value": "#3F4B02",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-25": {
        "$value": "#5C6F0B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-36": {
        "$value": "#B7D049",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-37": {
        "$value": "#7B9B2B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-38": {
        "$value": "#8DB334",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-39": {
        "$value": "#87AB32",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-13": {
        "$value": "#404C02",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-14": {
        "$value": "#3E4A02",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-26": {
        "$value": "#3E4B00",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-15": {
        "$value": "#515E0D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-40": {
        "$value": "#7A9A2B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-41": {
        "$value": "#BBCD71",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-42": {
        "$value": "#88AC32",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-16": {
        "$value": "#677706",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-173": {
        "$value": "#E6B942",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-17": {
        "$value": "#3D4901",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-18": {
        "$value": "#5B630D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-27": {
        "$value": "#5F7519",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-43": {
        "$value": "#89AF32",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-44": {
        "$value": "#98BA39",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-19": {
        "$value": "#667805",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-187": {
        "$value": "#DAB53E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-28": {
        "$value": "#3D4A01",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-20": {
        "$value": "#5A630D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-29": {
        "$value": "#556611",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-21": {
        "$value": "#667706",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-30": {
        "$value": "#4C5B05",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-22": {
        "$value": "#4E5A05",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-23": {
        "$value": "#59620C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-24": {
        "$value": "#4D5905",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-25": {
        "$value": "#696E15",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-26": {
        "$value": "#4D5906",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-27": {
        "$value": "#837919",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-28": {
        "$value": "#676D13",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-29": {
        "$value": "#686C14",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-31": {
        "$value": "#455303",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-174": {
        "$value": "#E3B436",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-45": {
        "$value": "#90B434",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-32": {
        "$value": "#455302",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-green-2": {
        "$value": "#CDDF8C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-46": {
        "$value": "#94B937",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-33": {
        "$value": "#708E23",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-188": {
        "$value": "#D6E96F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-189": {
        "$value": "#CBE05E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-47": {
        "$value": "#8FB535",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-34": {
        "$value": "#445202",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-175": {
        "$value": "#E3B335",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-48": {
        "$value": "#8DB036",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-49": {
        "$value": "#99B84B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-50": {
        "$value": "#8DB238",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-51": {
        "$value": "#93A939",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-52": {
        "$value": "#749C35",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-53": {
        "$value": "#93AA3D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-54": {
        "$value": "#7BA22E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-55": {
        "$value": "#C5D77C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-56": {
        "$value": "#B0CB3A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-57": {
        "$value": "#92B639",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-35": {
        "$value": "#435202",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-176": {
        "$value": "#E3B334",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-190": {
        "$value": "#D1E262",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-58": {
        "$value": "#82A732",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-36": {
        "$value": "#657F1D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-37": {
        "$value": "#647F1D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-38": {
        "$value": "#647F1E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-39": {
        "$value": "#65811F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-40": {
        "$value": "#65811E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-41": {
        "$value": "#67821E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-42": {
        "$value": "#67831F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-59": {
        "$value": "#90B637",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-60": {
        "$value": "#83A830",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-61": {
        "$value": "#739932",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-62": {
        "$value": "#9BB54F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-63": {
        "$value": "#94AA3C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-64": {
        "$value": "#7AA02E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-65": {
        "$value": "#B8C86B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-66": {
        "$value": "#AECA3A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-67": {
        "$value": "#C3DF6C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-43": {
        "$value": "#435101",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-30": {
        "$value": "#8C8A0C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-68": {
        "$value": "#93B837",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-69": {
        "$value": "#7CA02F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-44": {
        "$value": "#647F1A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-45": {
        "$value": "#647F1B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-70": {
        "$value": "#92B438",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-71": {
        "$value": "#94B740",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-72": {
        "$value": "#92AA37",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-73": {
        "$value": "#719832",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-74": {
        "$value": "#7BA02D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-75": {
        "$value": "#7CA22D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-76": {
        "$value": "#93B73A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-31": {
        "$value": "#8C8A0D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-46": {
        "$value": "#647D19",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-77": {
        "$value": "#90B534",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-78": {
        "$value": "#BAD643",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-191": {
        "$value": "#CBE060",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-79": {
        "$value": "#BBD543",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-192": {
        "$value": "#CEE164",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-80": {
        "$value": "#90B634",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-47": {
        "$value": "#647C18",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-48": {
        "$value": "#56690A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-81": {
        "$value": "#ACC73D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-82": {
        "$value": "#ACC83D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-83": {
        "$value": "#99B936",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-49": {
        "$value": "#52630C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-84": {
        "$value": "#93B836",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-50": {
        "$value": "#415001",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-32": {
        "$value": "#8B890E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-51": {
        "$value": "#637D17",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-85": {
        "$value": "#769930",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-86": {
        "$value": "#BAD543",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-87": {
        "$value": "#BBD644",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-193": {
        "$value": "#CEE262",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-194": {
        "$value": "#CEE261",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-195": {
        "$value": "#BFBF80",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-88": {
        "$value": "#8CB436",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-196": {
        "$value": "#C8DB54",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-89": {
        "$value": "#95B448",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-90": {
        "$value": "#94B448",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-91": {
        "$value": "#7A9F2D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-green-3": {
        "$value": "#D8EA8F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-92": {
        "$value": "#88AD46",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-93": {
        "$value": "#B5C666",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-94": {
        "$value": "#719425",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-52": {
        "$value": "#3E5202",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-197": {
        "$value": "#BCCB62",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-95": {
        "$value": "#93AF32",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-33": {
        "$value": "#525C0A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-177": {
        "$value": "#F2BE42",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-96": {
        "$value": "#92B834",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-97": {
        "$value": "#8DB237",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-98": {
        "$value": "#B0CB3F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-99": {
        "$value": "#B0CC3D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-100": {
        "$value": "#C8DC75",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-101": {
        "$value": "#84A732",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-102": {
        "$value": "#C4D87C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-103": {
        "$value": "#91B538",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-53": {
        "$value": "#607412",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-198": {
        "$value": "#C9DC54",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-199": {
        "$value": "#C8DB51",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-200": {
        "$value": "#C8DC52",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-104": {
        "$value": "#BBD842",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-105": {
        "$value": "#779C2B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-106": {
        "$value": "#759A28",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-201": {
        "$value": "#BAC56D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-107": {
        "$value": "#729325",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-108": {
        "$value": "#729424",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-54": {
        "$value": "#404F02",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-34": {
        "$value": "#515B0A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-178": {
        "$value": "#F6C146",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-55": {
        "$value": "#657D18",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-109": {
        "$value": "#93B735",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-202": {
        "$value": "#CBDD5A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-green-4": {
        "$value": "#D6E88E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-110": {
        "$value": "#8DB434",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-111": {
        "$value": "#8DB534",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-112": {
        "$value": "#8FB734",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-113": {
        "$value": "#8FB636",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-114": {
        "$value": "#91B837",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-115": {
        "$value": "#94BA39",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-116": {
        "$value": "#BFD74A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-117": {
        "$value": "#AAC641",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-118": {
        "$value": "#6C9231",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-56": {
        "$value": "#637F19",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-35": {
        "$value": "#505B09",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-36": {
        "$value": "#717C0A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-119": {
        "$value": "#749C36",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-120": {
        "$value": "#90B537",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-203": {
        "$value": "#D0E565",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-121": {
        "$value": "#85AB30",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-122": {
        "$value": "#739324",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-123": {
        "$value": "#9EB648",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-124": {
        "$value": "#7C9F2B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-37": {
        "$value": "#4D590A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-57": {
        "$value": "#657E19",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-38": {
        "$value": "#4F5A07",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-204": {
        "$value": "#EFBF23",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-58": {
        "$value": "#708418",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-125": {
        "$value": "#8FB338",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-59": {
        "$value": "#65872A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-126": {
        "$value": "#94B93B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-205": {
        "$value": "#BDD445",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-127": {
        "$value": "#BAD541",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-128": {
        "$value": "#709125",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-129": {
        "$value": "#6F9226",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-39": {
        "$value": "#4E5A07",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-40": {
        "$value": "#797F0D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-60": {
        "$value": "#6F8C19",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-41": {
        "$value": "#545E0E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-130": {
        "$value": "#90B638",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-131": {
        "$value": "#B5CD3F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-132": {
        "$value": "#B8D142",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-206": {
        "$value": "#B7B635",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-133": {
        "$value": "#A2C139",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-42": {
        "$value": "#434F01",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-43": {
        "$value": "#434F02",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-44": {
        "$value": "#434F04",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-61": {
        "$value": "#667F1A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-45": {
        "$value": "#7B7E0A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-134": {
        "$value": "#88AB34",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-135": {
        "$value": "#7EA232",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-136": {
        "$value": "#7B9F2B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-62": {
        "$value": "#3E4E06",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-137": {
        "$value": "#9EB750",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-138": {
        "$value": "#A4C346",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-63": {
        "$value": "#6F8C25",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-64": {
        "$value": "#6D8E20",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-65": {
        "$value": "#658019",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-66": {
        "$value": "#677F1B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-179": {
        "$value": "#D8AD35",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-139": {
        "$value": "#92B638",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-140": {
        "$value": "#C4D97B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-141": {
        "$value": "#77982C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-142": {
        "$value": "#A6BF3B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-143": {
        "$value": "#6C8F25",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-67": {
        "$value": "#3D4D02",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-68": {
        "$value": "#3F4E02",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-144": {
        "$value": "#AFCA3E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-69": {
        "$value": "#6E8C23",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-70": {
        "$value": "#6E8D1F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-71": {
        "$value": "#68831A",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-46": {
        "$value": "#4E5A06",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-180": {
        "$value": "#D7AC34",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-145": {
        "$value": "#8EB636",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-146": {
        "$value": "#C2DB4E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-147": {
        "$value": "#8DB135",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-148": {
        "$value": "#8AB034",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-72": {
        "$value": "#415104",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-73": {
        "$value": "#3F5103",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-74": {
        "$value": "#3C4B00",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-75": {
        "$value": "#3D4E01",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-76": {
        "$value": "#3E4D03",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-77": {
        "$value": "#3F4E04",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-47": {
        "$value": "#4F5B0C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-149": {
        "$value": "#8BB035",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-150": {
        "$value": "#809C28",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-78": {
        "$value": "#465705",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-48": {
        "$value": "#505B06",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-181": {
        "$value": "#BA8717",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-207": {
        "$value": "#C8DC53",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "yellow-208": {
        "$value": "#C7DC53",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-151": {
        "$value": "#89AE33",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-49": {
        "$value": "#535B0E",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-50": {
        "$value": "#515B0D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-51": {
        "$value": "#525C0D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-green-79": {
        "$value": "#475505",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-52": {
        "$value": "#515C06",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-182": {
        "$value": "#B88516",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "green-152": {
        "$value": "#8CB036",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-53": {
        "$value": "#565F0F",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-54": {
        "$value": "#525D05",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-183": {
        "$value": "#B98616",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "dark-yellow-55": {
        "$value": "#646F05",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-184": {
        "$value": "#E0A71C",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "orange-185": {
        "$value": "#E0A71D",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "light-gray-5": {
        "$value": "rgba(222, 226, 222, 0.16)",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-gray-6": {
        "$value": "#CCCCCC",
        "$type": "color",
        "$description": "other · ×1"
      },
      "dark-gray-10": {
        "$value": "#21212B",
        "$type": "color",
        "$description": "fill · ×1"
      },
      "cyan-3": {
        "$value": "#0081C0",
        "$type": "color",
        "$description": "background · ×1"
      },
      "cyan-4": {
        "$value": "#41A1CF",
        "$type": "color",
        "$description": "border · ×1"
      },
      "light-gray-7": {
        "$value": "#E5E5E5",
        "$type": "color",
        "$description": "border · ×1"
      },
      "light-cyan": {
        "$value": "rgba(207, 235, 231, 0.5)",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-cyan-2": {
        "$value": "rgba(160, 215, 209, 0.5)",
        "$type": "color",
        "$description": "background · ×1"
      },
      "light-cyan-3": {
        "$value": "#A0D7D1",
        "$type": "color",
        "$description": "background · ×1"
      }
    },
    "fontSize": {
      "font-size-2xs": {
        "$value": "13px",
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
        "$value": "28px",
        "$type": "dimension"
      },
      "font-size-2xl": {
        "$value": "40px",
        "$type": "dimension"
      },
      "font-size-3xl": {
        "$value": "48px",
        "$type": "dimension"
      },
      "font-size-4xl": {
        "$value": "54px",
        "$type": "dimension"
      }
    },
    "fontFamily": {
      "font-family-base": {
        "$value": "ui-sans-serif",
        "$type": "fontFamily"
      },
      "font-family-2": {
        "$value": "af",
        "$type": "fontFamily"
      },
      "font-family-3": {
        "$value": "ppmondwest",
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
        "$value": "16.9px",
        "$type": "dimension"
      },
      "line-height-normal": {
        "$value": "18.2px",
        "$type": "dimension"
      },
      "line-height-relaxed": {
        "$value": "19.5px",
        "$type": "dimension"
      },
      "line-height-loose": {
        "$value": "21px",
        "$type": "dimension"
      },
      "line-height-lh-6": {
        "$value": "23.4px",
        "$type": "dimension"
      },
      "line-height-lh-7": {
        "$value": "24px",
        "$type": "dimension"
      },
      "line-height-lh-8": {
        "$value": "30.8px",
        "$type": "dimension"
      },
      "line-height-lh-9": {
        "$value": "44px",
        "$type": "dimension"
      },
      "line-height-lh-10": {
        "$value": "48px",
        "$type": "dimension"
      },
      "line-height-lh-11": {
        "$value": "59.4px",
        "$type": "dimension"
      }
    },
    "letterSpacing": {
      "letter-spacing-tight": {
        "$value": "-1.08px",
        "$type": "dimension"
      },
      "letter-spacing-normal": {
        "$value": "-0.96px",
        "$type": "dimension"
      },
      "letter-spacing-wide": {
        "$value": "-0.56px",
        "$type": "dimension"
      },
      "letter-spacing-wider": {
        "$value": "-0.18px",
        "$type": "dimension"
      },
      "letter-spacing-widest": {
        "$value": "-0.15px",
        "$type": "dimension"
      },
      "letter-spacing-ls-6": {
        "$value": "-0.13px",
        "$type": "dimension"
      }
    }
  },
  "layout": {
    "spacing": {
      "space-1": {
        "$value": "1.5px",
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
        "$value": "3.95px",
        "$type": "dimension"
      },
      "space-5": {
        "$value": "4px",
        "$type": "dimension"
      },
      "space-6": {
        "$value": "4.937px",
        "$type": "dimension"
      },
      "space-8": {
        "$value": "6px",
        "$type": "dimension"
      },
      "space-10": {
        "$value": "7px",
        "$type": "dimension"
      },
      "space-12": {
        "$value": "8px",
        "$type": "dimension"
      },
      "space-16": {
        "$value": "10px",
        "$type": "dimension"
      },
      "space-20": {
        "$value": "11.85px",
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
        "$value": "18px",
        "$type": "dimension"
      },
      "space-48": {
        "$value": "20px",
        "$type": "dimension"
      },
      "space-64": {
        "$value": "24px",
        "$type": "dimension"
      },
      "space-80": {
        "$value": "32px",
        "$type": "dimension"
      },
      "space-96": {
        "$value": "40px",
        "$type": "dimension"
      },
      "space-128": {
        "$value": "48px",
        "$type": "dimension"
      },
      "space-160": {
        "$value": "50.3906px",
        "$type": "dimension"
      },
      "space-192": {
        "$value": "64px",
        "$type": "dimension"
      },
      "space-256": {
        "$value": "80px",
        "$type": "dimension"
      },
      "space-23": {
        "$value": "100px",
        "$type": "dimension"
      },
      "space-25": {
        "$value": "128px",
        "$type": "dimension"
      },
      "space-26": {
        "$value": "140px",
        "$type": "dimension"
      },
      "space-27": {
        "$value": "160px",
        "$type": "dimension"
      },
      "space-28": {
        "$value": "229.523px",
        "$type": "dimension"
      },
      "space-29": {
        "$value": "229.531px",
        "$type": "dimension"
      },
      "space-30": {
        "$value": "246.5px",
        "$type": "dimension"
      },
      "space-31": {
        "$value": "400px",
        "$type": "dimension"
      }
    },
    "zIndex": {
      "z-1": {
        "$value": "-1",
        "$type": "number"
      },
      "z-2": {
        "$value": "10",
        "$type": "number"
      },
      "z-3": {
        "$value": "20",
        "$type": "number"
      },
      "z-4": {
        "$value": "50",
        "$type": "number"
      },
      "z-5": {
        "$value": "100",
        "$type": "number"
      },
      "z-6": {
        "$value": "103",
        "$type": "number"
      },
      "z-7": {
        "$value": "112",
        "$type": "number"
      },
      "z-8": {
        "$value": "9999",
        "$type": "number"
      }
    },
    "breakpoint": {
      "breakpoint-xs": {
        "$value": "1920px",
        "$type": "dimension"
      }
    }
  },
  "surfaces": {
    "borderRadius": {
      "radius-sm": {
        "$value": "0px 0px 0px 500%",
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
        "$value": "12px",
        "$type": "dimension"
      },
      "radius-2xl": {
        "$value": "16px",
        "$type": "dimension"
      },
      "radius-full": {
        "$value": "24px",
        "$type": "dimension"
      },
      "radius-r7": {
        "$value": "27px",
        "$type": "dimension"
      },
      "radius-r8": {
        "$value": "50.496px",
        "$type": "dimension"
      },
      "radius-r9": {
        "$value": "1.67772e+07px",
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
        "$value": "rgba(0, 0, 0, 0.04) 0px 1.01px 1.01px 0px",
        "$type": "shadow"
      },
      "shadow-md": {
        "$value": "rgb(222, 226, 222) 0px 0px 0px 1px",
        "$type": "shadow"
      },
      "shadow-lg": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(80, 115, 138, 0.24) 0px 2px 4px 0px",
        "$type": "shadow"
      },
      "shadow-xl": {
        "$value": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.15) 0px 2px 6px 0px",
        "$type": "shadow"
      },
      "shadow-shadow-5": {
        "$value": "rgba(0, 0, 0, 0.08) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 4px 5px 0px",
        "$type": "shadow"
      },
      "shadow-shadow-6": {
        "$value": "rgba(0, 0, 0, 0.06) 0px 2px 2px 0px, rgba(0, 0, 0, 0) 0px 6px 6px 0px, rgba(0, 0, 0, 0.04) 0px 0px 0px 5px",
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
        "$value": "0.16s",
        "$type": "duration"
      },
      "duration-normal": {
        "$value": "0.2s",
        "$type": "duration"
      },
      "duration-slow": {
        "$value": "0.22s",
        "$type": "duration"
      },
      "duration-slower": {
        "$value": "0.25s",
        "$type": "duration"
      },
      "duration-duration-6": {
        "$value": "0.3s",
        "$type": "duration"
      },
      "duration-duration-7": {
        "$value": "0.5s",
        "$type": "duration"
      },
      "duration-duration-8": {
        "$value": "0.6s",
        "$type": "duration"
      },
      "duration-duration-9": {
        "$value": "1s",
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
    "opacity-70": {
      "$value": 0.7,
      "$type": "number"
    }
  }
}
```
