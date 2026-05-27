---
version: alpha
name: Antimetal
description: "Converted from UI Inspector extraction of https://antimetal.com/"
colors:
  primary: "#FAFEFF"
  secondary: "#000000"
  tertiary: "#DDFFFF"
  neutral: "#1B2540"
  on-primary: "#1B2540"
  on-tertiary: "#FFFFFF"
  color-dark-blue-4: "rgba(12, 38, 77, 0.05)"
  color-light-cyan-3: "#E0F6FF"
  color-dark-blue-7: "rgba(4, 33, 80, 0.04)"
  color-white-3: "#E6FFFF"
  color-white-4: "#F8F9FC"
  color-blue-2: "#0060FF"
  color-dark-blue-12: "#001033"
  color-yellow-2: "#D0F100"
  color-light-gray: "#ECF7E9"
  color-orange: "#FF9B00"
  color-purple: "#9559FF"
  color-red-2: "#EB3441"
  color-orange-2: "#F4A43A"
  color-green-2: "#5ACC5A"
  color-dark-blue-20: "rgba(12, 38, 77, 0.08)"
  color-dark-green: "#048F42"
  color-dark-blue-2: "rgba(27, 37, 64, 0.64)"
  color-dark-blue-3: "rgba(27, 37, 64, 0.32)"
  color-light-cyan: "#E1F6FF"
  color-dark-blue-6: "rgba(27, 37, 64, 0.72)"
  color-light-cyan-4: "#DFF6FF"
  color-dark-blue-9: "#08122D"
  color-light-cyan-6: "#E1F5FF"
  color-green: "#4C8050"
  color-blue-6: "#0062FF"
  color-dark-blue-5: "rgba(0, 39, 80, 0.04)"
  color-dark-blue-8: "rgba(0, 39, 80, 0.08)"
  color-dark-blue-10: "rgba(4, 33, 80, 0.06)"
  color-dark-blue-13: "rgba(24, 37, 66, 0.32)"
  color-dark-blue-14: "rgba(24, 37, 66, 0.12)"
  color-dark-blue-15: "rgba(24, 37, 66, 0.44)"
  color-light-cyan-9: "rgba(219, 247, 255, 0.48)"
  color-light-cyan-10: "rgba(219, 247, 255, 0.24)"
  color-dark-blue-17: "rgba(0, 39, 80, 0.1)"
  color-blue: "#8D5CF7"
  color-yellow: "#DBEF01"
  color-black-2: "#090703"
  color-light-cyan-5: "rgba(219, 247, 255, 0.07)"
  color-dark-blue-11: "rgba(12, 38, 77, 0.06)"
  color-light-cyan-7: "rgba(219, 247, 255, 0.2)"
  color-light-cyan-8: "rgba(219, 247, 255, 0.32)"
  color-blue-3: "#005BF6"
  color-light-blue: "#B0C6E9"
  color-yellow-3: "#FECA00"
  color-red: "#FF1C11"
  color-pink: "#FF00EA"
  color-light-pink: "rgba(255, 162, 251, 0.8)"
  color-dark-blue-16: "#0C264D"
  color-dark-blue-18: "rgba(13, 23, 46, 0.2)"
  color-blue-4: "rgba(0, 128, 248, 0.32)"
  color-blue-5: "rgba(95, 189, 247, 0.32)"
  color-light-cyan-11: "rgba(211, 239, 252, 0.32)"
  color-dark-blue-19: "#3E4452"
typography:
  display:
    fontFamily: abcdFont
    fontSize: 48px
    fontWeight: 400
    lineHeight: 56px
    letterSpacing: -0.42px
  h1:
    fontFamily: abcdFont
    fontSize: 46px
    fontWeight: 400
    lineHeight: 48px
    letterSpacing: -0.42px
  h2:
    fontFamily: abcdFont
    fontSize: 40px
    fontWeight: 400
    lineHeight: 42px
    letterSpacing: -0.42px
  h3:
    fontFamily: abcdFont
    fontSize: 32px
    fontWeight: 400
    lineHeight: 40px
    letterSpacing: -0.42px
  body-lg:
    fontFamily: abcdFont
    fontSize: 28px
    fontWeight: 400
    lineHeight: 30px
    letterSpacing: -0.42px
  body-md:
    fontFamily: abcdFont
    fontSize: 24px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: -0.42px
  body-sm:
    fontFamily: abcdFont
    fontSize: 22px
    fontWeight: 400
    lineHeight: 26px
    letterSpacing: -0.42px
  caption:
    fontFamily: abcdFont
    fontSize: 20px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: -0.42px
  code:
    fontFamily: ivarTextFont
    fontSize: 15px
    fontWeight: 400
rounded:
  sm: "0px 0px 12px 12px"
  md: 2px
  lg: 4px
  xl: 6px
  2xl: 8px
  full: 14px
spacing:
  xs: 4px
  sm: 8px
  md: 14px
  lg: 24px
  xl: 32px
  2xl: 454px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.md}"
    padding: 12px
  button-primary-hover:
    backgroundColor: "{colors.tertiary}"
  surface:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  text-muted:
    textColor: "{colors.secondary}"
    typography: body-sm
---

## Overview

This design system was auto-extracted from https://antimetal.com/ (58 colors · 40 type tokens · 50 spacing steps · 1 breakpoints · 13 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-05-05T15:52:31.814Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#FAFEFF):** Core surface and headline color.
- **secondary (#000000):** Muted text, borders, and metadata.
- **tertiary (#DDFFFF):** Primary accent for links, buttons, and focus states.
- **neutral (#1B2540):** Primary readable text on dark surfaces.
- **on-primary (#1B2540):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-dark-blue-4 (rgba(12, 38, 77, 0.05)):** Supporting token from the extracted palette.
- **color-light-cyan-3 (#E0F6FF):** Supporting token from the extracted palette.
- **color-dark-blue-7 (rgba(4, 33, 80, 0.04)):** Supporting token from the extracted palette.
- **color-white-3 (#E6FFFF):** Supporting token from the extracted palette.
- **color-white-4 (#F8F9FC):** Supporting token from the extracted palette.
- **color-blue-2 (#0060FF):** Supporting token from the extracted palette.
- **color-dark-blue-12 (#001033):** Supporting token from the extracted palette.
- **color-yellow-2 (#D0F100):** Supporting token from the extracted palette.
- **color-light-gray (#ECF7E9):** Supporting token from the extracted palette.
- **color-orange (#FF9B00):** Supporting token from the extracted palette.
- **color-purple (#9559FF):** Supporting token from the extracted palette.
- **color-red-2 (#EB3441):** Supporting token from the extracted palette.
- **color-orange-2 (#F4A43A):** Supporting token from the extracted palette.
- **color-green-2 (#5ACC5A):** Supporting token from the extracted palette.
- **color-dark-blue-20 (rgba(12, 38, 77, 0.08)):** Supporting token from the extracted palette.
- **color-dark-green (#048F42):** Supporting token from the extracted palette.
- **color-dark-blue-2 (rgba(27, 37, 64, 0.64)):** Supporting token from the extracted palette.
- **color-dark-blue-3 (rgba(27, 37, 64, 0.32)):** Supporting token from the extracted palette.
- **color-light-cyan (#E1F6FF):** Supporting token from the extracted palette.
- **color-dark-blue-6 (rgba(27, 37, 64, 0.72)):** Supporting token from the extracted palette.
- **color-light-cyan-4 (#DFF6FF):** Supporting token from the extracted palette.
- **color-dark-blue-9 (#08122D):** Supporting token from the extracted palette.
- **color-light-cyan-6 (#E1F5FF):** Supporting token from the extracted palette.
- **color-green (#4C8050):** Supporting token from the extracted palette.
- **color-blue-6 (#0062FF):** Supporting token from the extracted palette.
- **color-dark-blue-5 (rgba(0, 39, 80, 0.04)):** Supporting token from the extracted palette.
- **color-dark-blue-8 (rgba(0, 39, 80, 0.08)):** Supporting token from the extracted palette.
- **color-dark-blue-10 (rgba(4, 33, 80, 0.06)):** Supporting token from the extracted palette.
- **color-dark-blue-13 (rgba(24, 37, 66, 0.32)):** Supporting token from the extracted palette.
- **color-dark-blue-14 (rgba(24, 37, 66, 0.12)):** Supporting token from the extracted palette.
- **color-dark-blue-15 (rgba(24, 37, 66, 0.44)):** Supporting token from the extracted palette.
- **color-light-cyan-9 (rgba(219, 247, 255, 0.48)):** Supporting token from the extracted palette.
- **color-light-cyan-10 (rgba(219, 247, 255, 0.24)):** Supporting token from the extracted palette.
- **color-dark-blue-17 (rgba(0, 39, 80, 0.1)):** Supporting token from the extracted palette.
- **color-blue (#8D5CF7):** Supporting token from the extracted palette.
- **color-yellow (#DBEF01):** Supporting token from the extracted palette.
- **color-black-2 (#090703):** Supporting token from the extracted palette.
- **color-light-cyan-5 (rgba(219, 247, 255, 0.07)):** Supporting token from the extracted palette.
- **color-dark-blue-11 (rgba(12, 38, 77, 0.06)):** Supporting token from the extracted palette.
- **color-light-cyan-7 (rgba(219, 247, 255, 0.2)):** Supporting token from the extracted palette.
- **color-light-cyan-8 (rgba(219, 247, 255, 0.32)):** Supporting token from the extracted palette.
- **color-blue-3 (#005BF6):** Supporting token from the extracted palette.
- **color-light-blue (#B0C6E9):** Supporting token from the extracted palette.
- **color-yellow-3 (#FECA00):** Supporting token from the extracted palette.
- **color-red (#FF1C11):** Supporting token from the extracted palette.
- **color-pink (#FF00EA):** Supporting token from the extracted palette.
- **color-light-pink (rgba(255, 162, 251, 0.8)):** Supporting token from the extracted palette.
- **color-dark-blue-16 (#0C264D):** Supporting token from the extracted palette.
- **color-dark-blue-18 (rgba(13, 23, 46, 0.2)):** Supporting token from the extracted palette.
- **color-blue-4 (rgba(0, 128, 248, 0.32)):** Supporting token from the extracted palette.
- **color-blue-5 (rgba(95, 189, 247, 0.32)):** Supporting token from the extracted palette.
- **color-light-cyan-11 (rgba(211, 239, 252, 0.32)):** Supporting token from the extracted palette.
- **color-dark-blue-19 (#3E4452):** Supporting token from the extracted palette.

## Typography

Primary typeface: **ivarTextFont, Times, Family, abcdFont**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font abcdFont, 48px, weight 400.
- **h1:** font abcdFont, 46px, weight 400.
- **h2:** font abcdFont, 40px, weight 400.
- **h3:** font abcdFont, 32px, weight 400.
- **body-lg:** font abcdFont, 28px, weight 400.
- **body-md:** font abcdFont, 24px, weight 400.
- **body-sm:** font abcdFont, 22px, weight 400.
- **caption:** font abcdFont, 20px, weight 400.
- **code:** font ivarTextFont, 15px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (14px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (454px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (992px):** Responsive layout threshold.
- **breakpoint-xs (992px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 39, 80, 0.08) 0px 6px 16px -3px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px`
- **md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 39, 80, 0.03) 0px 56px 72px -16px, rgba(0, 39, 80, 0.03) 0px 32px 32px -16px, rgba(0, 39, 80, 0.04) 0px 6px 12px -3px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px`
- **lg:** `rgba(255, 255, 255, 0.72) 0px 1px 1px 0px inset, rgba(4, 33, 80, 0.02) 0px 8px 16px 0px, rgba(4, 33, 80, 0.03) 0px 4px 12px 0px, rgba(4, 33, 80, 0.06) 0px 1px 2px 0px, rgba(4, 33, 80, 0.04) 0px 0px 0px 1px`
- **xl:** `rgba(24, 37, 66, 0.32) 0px 1px 3px 0px, rgba(24, 37, 66, 0.12) 0px 0.5px 0.5px 0px, rgba(24, 37, 66, 0.44) 0px 12px 24px -12px, rgba(219, 247, 255, 0.06) 0px 8px 16px 0px inset, rgba(219, 247, 255, 0.48) 0px 0.5px 0.5px 0px inset, rgba(219, 247, 255, 0.04) 0px -4px 8px 0px inset, rgba(219, 247, 255, 0.24) 0px -0.5px 0.5px 0px inset`
- **shadow-5:** `rgba(255, 255, 255, 0.08) 0px 0px 16px 8px inset, rgba(255, 255, 255, 0.08) 0px 0px 8px 4px inset, rgba(255, 255, 255, 0.08) 0px 0px 4px 2px inset, rgba(255, 255, 255, 0.12) 0px 0px 2px 1px inset`
- **shadow-6:** `color(srgb 0.878431 0.964706 1 / 0.24) 0px 0.5px 0.5px 0px inset, color(srgb 0.878431 0.964706 1 / 0.24) 0px -0.5px 0.5px 0px inset`
- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 39, 80, 0.08) 0px 6px 16px -3px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px`
- **shadow-md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 39, 80, 0.03) 0px 56px 72px -16px, rgba(0, 39, 80, 0.03) 0px 32px 32px -16px, rgba(0, 39, 80, 0.04) 0px 6px 12px -3px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px`
- **shadow-lg:** `rgba(255, 255, 255, 0.72) 0px 1px 1px 0px inset, rgba(4, 33, 80, 0.02) 0px 8px 16px 0px, rgba(4, 33, 80, 0.03) 0px 4px 12px 0px, rgba(4, 33, 80, 0.06) 0px 1px 2px 0px, rgba(4, 33, 80, 0.04) 0px 0px 0px 1px`
- **shadow-xl:** `rgba(24, 37, 66, 0.32) 0px 1px 3px 0px, rgba(24, 37, 66, 0.12) 0px 0.5px 0.5px 0px, rgba(24, 37, 66, 0.44) 0px 12px 24px -12px, rgba(219, 247, 255, 0.06) 0px 8px 16px 0px inset, rgba(219, 247, 255, 0.48) 0px 0.5px 0.5px 0px inset, rgba(219, 247, 255, 0.04) 0px -4px 8px 0px inset, rgba(219, 247, 255, 0.24) 0px -0.5px 0.5px 0px inset`
- **shadow-shadow-5:** `rgba(255, 255, 255, 0.08) 0px 0px 16px 8px inset, rgba(255, 255, 255, 0.08) 0px 0px 8px 4px inset, rgba(255, 255, 255, 0.08) 0px 0px 4px 2px inset, rgba(255, 255, 255, 0.12) 0px 0px 2px 1px inset`
- **shadow-shadow-6:** `color(srgb 0.878431 0.964706 1 / 0.24) 0px 0.5px 0.5px 0px inset, color(srgb 0.878431 0.964706 1 / 0.24) 0px -0.5px 0.5px 0px inset`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 0px 12px 12px):** Border radius token.
- **md (2px):** Border radius token.
- **lg (4px):** Border radius token.
- **xl (6px):** Border radius token.
- **2xl (8px):** Border radius token.
- **full (14px):** Border radius token.

## Components

Component tokens map semantic colors and shapes to reusable UI patterns.

- **button-primary:** backgroundColor {colors.tertiary}, textColor {colors.on-tertiary}, rounded {rounded.md}, padding 12px.
- **button-primary-hover:** backgroundColor {colors.tertiary}.
- **surface:** backgroundColor {colors.primary}, textColor {colors.on-primary}.
- **text-muted:** textColor {colors.secondary}, typography body-sm.

## Do's and Don'ts

- **Do** use the accent color sparingly for primary actions and active states.
- **Do** maintain high contrast between text and background tokens.
- **Don't** introduce new colors outside the extracted palette without updating the YAML tokens.
- **Don't** mix arbitrary spacing values — use the spacing scale.

**Accessibility notes from extraction:**
- Avoid pairing --color-dark-blue on --color-dark-blue-4 (1.03:1, Fail).
- Avoid pairing --color-black on --color-dark-blue-4 (1.43:1, Fail).
- Avoid pairing --color-dark-blue-2 on --color-dark-blue-4 (1.02:1, Fail).
