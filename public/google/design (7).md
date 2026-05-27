---
version: alpha
name: "AuthKit by WorkOS"
description: "Converted from UI Inspector extraction of https://www.authkit.com/"
colors:
  primary: "#D1E4FA"
  secondary: "#000000"
  tertiary: "#269684"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-light-blue-5: "rgba(186, 215, 247, 0.12)"
  color-light-blue-7: "rgba(186, 214, 247, 0.06)"
  color-light-blue-12: "#BACFF7"
  color-light-blue-17: "rgba(199, 211, 234, 0.06)"
  color-black-2: "#05060F"
  color-light-blue-19: "#B3BBFF"
  color-light-blue-21: "rgba(186, 207, 247, 0.04)"
  color-black-4: "rgba(5, 6, 15, 0.6)"
  color-light-blue-31: "rgba(187, 215, 247, 0.24)"
  color-light-blue-33: "#B3B3FF"
  color-black-5: "rgba(5, 6, 15, 0.3)"
  color-black-7: "rgba(6, 6, 14, 0.4)"
  color-blue-3: "#663AF3"
  color-red: "#E46D4C"
  color-blue-5: "#027DEA"
  color-light-blue-37: "#BBD7F7"
  color-light-blue: "#C7D3EA"
  color-light-blue-3: "#D8ECF8"
  color-light-blue-4: "rgba(199, 211, 234, 0.64)"
  color-light-blue-8: "#BBD0F7"
  color-light-blue-9: "rgba(186, 214, 247, 0.32)"
  color-light-blue-10: "rgba(200, 212, 234, 0.78)"
  color-light-blue-11: "#BAD6F7"
  color-light-blue-14: "rgba(186, 214, 247, 0.8)"
  color-light-blue-34: "#B6D9FC"
  color-light-blue-13: "rgba(186, 207, 247, 0.32)"
  color-light-blue-15: "rgba(199, 211, 234, 0.12)"
  color-light-blue-16: "rgba(186, 214, 247, 0.08)"
  color-light-pink: "rgba(238, 186, 247, 0.24)"
  color-light-blue-22: "rgba(216, 236, 248, 0.2)"
  color-light-cyan-2: "rgba(168, 216, 245, 0.06)"
  color-light-blue-25: "rgba(199, 211, 234, 0.05)"
  color-light-blue-26: "rgba(186, 207, 247, 0.72)"
  color-light-pink-3: "rgba(237, 152, 239, 0.32)"
  color-light-blue-28: "rgba(186, 207, 247, 0.12)"
  color-black-3: "rgba(6, 6, 14, 0.7)"
  color-light-red-3: "rgba(255, 154, 140, 0.32)"
  color-black-6: "rgba(5, 6, 15, 0.5)"
  color-light-pink-5: "rgba(238, 186, 247, 0.32)"
  color-light-blue-35: "rgba(199, 211, 234, 0.08)"
  color-light-blue-36: "rgba(186, 214, 247, 0.24)"
  color-black-8: "rgba(2, 3, 17, 0.24)"
  color-light-blue-38: "rgba(186, 188, 247, 0.32)"
  color-light-green: "rgba(200, 253, 215, 0.32)"
  color-light-blue-6: "#98C0EF"
  color-light-blue-18: "rgba(186, 207, 247, 0.08)"
  color-light-cyan: "#98DAEF"
  color-light-blue-20: "#D7CAFD"
  color-light-blue-23: "#BEDEFC"
  color-light-blue-24: "#8EBBFF"
  color-blue: "rgba(124, 145, 182, 0.3)"
  color-light-blue-27: "rgba(186, 214, 247, 0.48)"
  color-light-pink-2: "rgba(237, 152, 239, 0.2)"
  color-light-orange: "rgba(253, 233, 202, 0.2)"
  color-light-blue-29: "#B9D7F3"
  color-light-red: "#FE90BE"
  color-light-red-2: "#FF9595"
  color-light-blue-30: "rgba(154, 194, 239, 0.5)"
  color-blue-2: "rgba(124, 145, 182, 0.5)"
  color-light-blue-32: "#BAD7F7"
  color-light-pink-4: "#ED98EF"
  color-light-orange-2: "#FDE9CA"
  color-blue-4: "rgba(75, 113, 250, 0.12)"
  color-blue-6: "rgba(75, 113, 250, 0.04)"
typography:
  display:
    fontFamily: Times
    fontSize: 48px
    fontWeight: 500
    lineHeight: 56px
    letterSpacing: 1.5px
  h1:
    fontFamily: Times
    fontSize: 44px
    fontWeight: 500
    lineHeight: 51px
    letterSpacing: 1.5px
  h2:
    fontFamily: Times
    fontSize: 28px
    fontWeight: 500
    lineHeight: 36px
    letterSpacing: 1.5px
  h3:
    fontFamily: Times
    fontSize: 24px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: 1.5px
  body-lg:
    fontFamily: Times
    fontSize: 18px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: 1.5px
  body-md:
    fontFamily: Times
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: 1.5px
  body-sm:
    fontFamily: Times
    fontSize: 15px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 1.5px
  caption:
    fontFamily: Times
    fontSize: 14px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 1.5px
  code:
    fontFamily: "Untitled Sans"
    fontSize: 15px
    fontWeight: 400
rounded:
  sm: 1.5px
  md: 2px
  lg: 3px
  xl: 4px
  2xl: 6px
  full: 8px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 17px
  xl: 32px
  2xl: 500px
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

This design system was auto-extracted from https://www.authkit.com/ (68 colors · 27 type tokens · 44 spacing steps · 6 breakpoints · 20 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-05-05T15:57:52.628Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#D1E4FA):** Core surface and headline color.
- **secondary (#000000):** Muted text, borders, and metadata.
- **tertiary (#269684):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-light-blue-5 (rgba(186, 215, 247, 0.12)):** Supporting token from the extracted palette.
- **color-light-blue-7 (rgba(186, 214, 247, 0.06)):** Supporting token from the extracted palette.
- **color-light-blue-12 (#BACFF7):** Supporting token from the extracted palette.
- **color-light-blue-17 (rgba(199, 211, 234, 0.06)):** Supporting token from the extracted palette.
- **color-black-2 (#05060F):** Supporting token from the extracted palette.
- **color-light-blue-19 (#B3BBFF):** Supporting token from the extracted palette.
- **color-light-blue-21 (rgba(186, 207, 247, 0.04)):** Supporting token from the extracted palette.
- **color-black-4 (rgba(5, 6, 15, 0.6)):** Supporting token from the extracted palette.
- **color-light-blue-31 (rgba(187, 215, 247, 0.24)):** Supporting token from the extracted palette.
- **color-light-blue-33 (#B3B3FF):** Supporting token from the extracted palette.
- **color-black-5 (rgba(5, 6, 15, 0.3)):** Supporting token from the extracted palette.
- **color-black-7 (rgba(6, 6, 14, 0.4)):** Supporting token from the extracted palette.
- **color-blue-3 (#663AF3):** Supporting token from the extracted palette.
- **color-red (#E46D4C):** Supporting token from the extracted palette.
- **color-blue-5 (#027DEA):** Supporting token from the extracted palette.
- **color-light-blue-37 (#BBD7F7):** Supporting token from the extracted palette.
- **color-light-blue (#C7D3EA):** Supporting token from the extracted palette.
- **color-light-blue-3 (#D8ECF8):** Supporting token from the extracted palette.
- **color-light-blue-4 (rgba(199, 211, 234, 0.64)):** Supporting token from the extracted palette.
- **color-light-blue-8 (#BBD0F7):** Supporting token from the extracted palette.
- **color-light-blue-9 (rgba(186, 214, 247, 0.32)):** Supporting token from the extracted palette.
- **color-light-blue-10 (rgba(200, 212, 234, 0.78)):** Supporting token from the extracted palette.
- **color-light-blue-11 (#BAD6F7):** Supporting token from the extracted palette.
- **color-light-blue-14 (rgba(186, 214, 247, 0.8)):** Supporting token from the extracted palette.
- **color-light-blue-34 (#B6D9FC):** Supporting token from the extracted palette.
- **color-light-blue-13 (rgba(186, 207, 247, 0.32)):** Supporting token from the extracted palette.
- **color-light-blue-15 (rgba(199, 211, 234, 0.12)):** Supporting token from the extracted palette.
- **color-light-blue-16 (rgba(186, 214, 247, 0.08)):** Supporting token from the extracted palette.
- **color-light-pink (rgba(238, 186, 247, 0.24)):** Supporting token from the extracted palette.
- **color-light-blue-22 (rgba(216, 236, 248, 0.2)):** Supporting token from the extracted palette.
- **color-light-cyan-2 (rgba(168, 216, 245, 0.06)):** Supporting token from the extracted palette.
- **color-light-blue-25 (rgba(199, 211, 234, 0.05)):** Supporting token from the extracted palette.
- **color-light-blue-26 (rgba(186, 207, 247, 0.72)):** Supporting token from the extracted palette.
- **color-light-pink-3 (rgba(237, 152, 239, 0.32)):** Supporting token from the extracted palette.
- **color-light-blue-28 (rgba(186, 207, 247, 0.12)):** Supporting token from the extracted palette.
- **color-black-3 (rgba(6, 6, 14, 0.7)):** Supporting token from the extracted palette.
- **color-light-red-3 (rgba(255, 154, 140, 0.32)):** Supporting token from the extracted palette.
- **color-black-6 (rgba(5, 6, 15, 0.5)):** Supporting token from the extracted palette.
- **color-light-pink-5 (rgba(238, 186, 247, 0.32)):** Supporting token from the extracted palette.
- **color-light-blue-35 (rgba(199, 211, 234, 0.08)):** Supporting token from the extracted palette.
- **color-light-blue-36 (rgba(186, 214, 247, 0.24)):** Supporting token from the extracted palette.
- **color-black-8 (rgba(2, 3, 17, 0.24)):** Supporting token from the extracted palette.
- **color-light-blue-38 (rgba(186, 188, 247, 0.32)):** Supporting token from the extracted palette.
- **color-light-green (rgba(200, 253, 215, 0.32)):** Supporting token from the extracted palette.
- **color-light-blue-6 (#98C0EF):** Supporting token from the extracted palette.
- **color-light-blue-18 (rgba(186, 207, 247, 0.08)):** Supporting token from the extracted palette.
- **color-light-cyan (#98DAEF):** Supporting token from the extracted palette.
- **color-light-blue-20 (#D7CAFD):** Supporting token from the extracted palette.
- **color-light-blue-23 (#BEDEFC):** Supporting token from the extracted palette.
- **color-light-blue-24 (#8EBBFF):** Supporting token from the extracted palette.
- **color-blue (rgba(124, 145, 182, 0.3)):** Supporting token from the extracted palette.
- **color-light-blue-27 (rgba(186, 214, 247, 0.48)):** Supporting token from the extracted palette.
- **color-light-pink-2 (rgba(237, 152, 239, 0.2)):** Supporting token from the extracted palette.
- **color-light-orange (rgba(253, 233, 202, 0.2)):** Supporting token from the extracted palette.
- **color-light-blue-29 (#B9D7F3):** Supporting token from the extracted palette.
- **color-light-red (#FE90BE):** Supporting token from the extracted palette.
- **color-light-red-2 (#FF9595):** Supporting token from the extracted palette.
- **color-light-blue-30 (rgba(154, 194, 239, 0.5)):** Supporting token from the extracted palette.
- **color-blue-2 (rgba(124, 145, 182, 0.5)):** Supporting token from the extracted palette.
- **color-light-blue-32 (#BAD7F7):** Supporting token from the extracted palette.
- **color-light-pink-4 (#ED98EF):** Supporting token from the extracted palette.
- **color-light-orange-2 (#FDE9CA):** Supporting token from the extracted palette.
- **color-blue-4 (rgba(75, 113, 250, 0.12)):** Supporting token from the extracted palette.
- **color-blue-6 (rgba(75, 113, 250, 0.04)):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Untitled Sans, aeonikPro, dotDigital, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Times, 48px, weight 500.
- **h1:** font Times, 44px, weight 500.
- **h2:** font Times, 28px, weight 500.
- **h3:** font Times, 24px, weight 500.
- **body-lg:** font Times, 18px, weight 500.
- **body-md:** font Times, 16px, weight 500.
- **body-sm:** font Times, 15px, weight 500.
- **caption:** font Times, 14px, weight 500.
- **code:** font Untitled Sans, 15px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (17px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (500px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (440px):** Responsive layout threshold.
- **sm (640px):** Responsive layout threshold.
- **md (940px):** Responsive layout threshold.
- **lg (996px):** Responsive layout threshold.
- **xl (1199px):** Responsive layout threshold.
- **2xl (1200px):** Responsive layout threshold.
- **breakpoint-xs (440px):** Responsive layout threshold.
- **breakpoint-sm (640px):** Responsive layout threshold.
- **breakpoint-md (940px):** Responsive layout threshold.
- **breakpoint-lg (996px):** Responsive layout threshold.
- **breakpoint-xl (1199px):** Responsive layout threshold.
- **breakpoint-2xl (1200px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(186, 207, 247, 0.32) 0px 0px 6px 0px`
- **md:** `rgba(238, 186, 247, 0.24) 0px 0px 12px 0px`
- **lg:** `rgba(186, 215, 247, 0.12) 0px 0px 0px 1px inset`
- **xl:** `rgba(199, 211, 234, 0) 0px -6px 12px 0px inset, rgba(199, 211, 234, 0) 0px 1px 1px 0px inset`
- **shadow-5:** `rgba(186, 207, 247, 0.72) 0px 0px 12px 0px, rgba(186, 214, 247, 0.06) 0px 1px 0.5px 0px inset`
- **shadow-6:** `rgba(237, 152, 239, 0.32) 0px 0px 12px 0px`
- **shadow-sm:** `rgba(186, 207, 247, 0.32) 0px 0px 6px 0px`
- **shadow-md:** `rgba(238, 186, 247, 0.24) 0px 0px 12px 0px`
- **shadow-lg:** `rgba(186, 215, 247, 0.12) 0px 0px 0px 1px inset`
- **shadow-xl:** `rgba(199, 211, 234, 0) 0px -6px 12px 0px inset, rgba(199, 211, 234, 0) 0px 1px 1px 0px inset`
- **shadow-shadow-5:** `rgba(186, 207, 247, 0.72) 0px 0px 12px 0px, rgba(186, 214, 247, 0.06) 0px 1px 0.5px 0px inset`
- **shadow-shadow-6:** `rgba(237, 152, 239, 0.32) 0px 0px 12px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (1.5px):** Border radius token.
- **md (2px):** Border radius token.
- **lg (3px):** Border radius token.
- **xl (4px):** Border radius token.
- **2xl (6px):** Border radius token.
- **full (8px):** Border radius token.

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
- Avoid pairing --color-white on --color-light-blue-2 (1.3:1, Fail).
- Avoid pairing --color-white on --color-light-blue-5 (1.49:1, Fail).
- Avoid pairing --color-white on --color-light-blue-7 (1.41:1, Fail).
