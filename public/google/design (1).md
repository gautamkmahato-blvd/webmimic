---
version: alpha
name: "Hyperstudio – Branding & Websites"
description: "Converted from UI Inspector extraction of https://www.hyperstudio.org/"
colors:
  primary: "#000000"
  secondary: "#686868"
  tertiary: "#A5B7BC"
  neutral: "#333333"
  on-primary: "#333333"
  on-tertiary: "#FFFFFF"
  color-light-orange: "#E7C59A"
  color-dark-gray-4: "#101010"
  color-black-2: "#080808"
  color-red: "#E00908"
  color-dark-gray-5: "#202020"
  color-light-gray-8: "#CCCCCC"
  color-red-2: "#F74F39"
  color-green: "#ADFF02"
  color-light-gray-9: "#DCDCDC"
  color-white: "#F3F3F3"
  color-light-gray: "rgba(242, 242, 242, 0.6)"
  color-light-gray-2: "#DADADA"
  color-blue: "#0000EE"
  color-mid-gray-2: "#A3A3A3"
  color-mid-gray-3: "#888888"
  color-mid-gray-4: "#8E8E8E"
  color-mid-gray-5: "#A0A0A0"
  color-light-gray-5: "#C5C5C5"
  color-dark-gray-2: "#252525"
  color-dark-gray-3: "#1D1D1D"
  color-dark-cyan: "#00AC5C"
  color-light-gray-3: "#CFCFCF"
  color-light-gray-4: "#C0C0C0"
  color-light-gray-6: "#B5B5B5"
  color-light-gray-7: "#E4E4E4"
  color-dark-gray-6: "rgba(66, 66, 66, 0.19)"
  color-dark-gray-7: "rgba(50, 50, 50, 0.13)"
typography:
  display:
    fontFamily: Times
    fontSize: 63px
    fontWeight: 400
    lineHeight: 66px
    letterSpacing: -0.3px
  h1:
    fontFamily: Times
    fontSize: 44px
    fontWeight: 400
    lineHeight: 47px
    letterSpacing: -0.3px
  h2:
    fontFamily: Times
    fontSize: 34px
    fontWeight: 400
    lineHeight: 35px
    letterSpacing: -0.3px
  h3:
    fontFamily: Times
    fontSize: 23.3px
    fontWeight: 400
    lineHeight: 25px
    letterSpacing: -0.3px
  body-lg:
    fontFamily: Times
    fontSize: 21px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: -0.3px
  body-md:
    fontFamily: Times
    fontSize: 19px
    fontWeight: 400
    lineHeight: 23px
    letterSpacing: -0.3px
  body-sm:
    fontFamily: Times
    fontSize: 18px
    fontWeight: 400
    lineHeight: 22px
    letterSpacing: -0.3px
  caption:
    fontFamily: Times
    fontSize: 17.3px
    fontWeight: 400
    lineHeight: 21px
    letterSpacing: -0.3px
  code:
    fontFamily: Aeonik
    fontSize: 13.5px
    fontWeight: 400
rounded:
  sm: 4.5px
  md: 8px
  lg: 9px
  xl: 10px
  2xl: 20px
  full: 99px
spacing:
  xs: 3.3px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 33px
  2xl: 270px
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

This design system was auto-extracted from https://www.hyperstudio.org/ (32 colors · 37 type tokens · 44 spacing steps · 4 breakpoints · 3 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-05-05T15:47:51.796Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#686868):** Muted text, borders, and metadata.
- **tertiary (#A5B7BC):** Primary accent for links, buttons, and focus states.
- **neutral (#333333):** Primary readable text on dark surfaces.
- **on-primary (#333333):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-light-orange (#E7C59A):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#101010):** Supporting token from the extracted palette.
- **color-black-2 (#080808):** Supporting token from the extracted palette.
- **color-red (#E00908):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#202020):** Supporting token from the extracted palette.
- **color-light-gray-8 (#CCCCCC):** Supporting token from the extracted palette.
- **color-red-2 (#F74F39):** Supporting token from the extracted palette.
- **color-green (#ADFF02):** Supporting token from the extracted palette.
- **color-light-gray-9 (#DCDCDC):** Supporting token from the extracted palette.
- **color-white (#F3F3F3):** Supporting token from the extracted palette.
- **color-light-gray (rgba(242, 242, 242, 0.6)):** Supporting token from the extracted palette.
- **color-light-gray-2 (#DADADA):** Supporting token from the extracted palette.
- **color-blue (#0000EE):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#A3A3A3):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#888888):** Supporting token from the extracted palette.
- **color-mid-gray-4 (#8E8E8E):** Supporting token from the extracted palette.
- **color-mid-gray-5 (#A0A0A0):** Supporting token from the extracted palette.
- **color-light-gray-5 (#C5C5C5):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#252525):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#1D1D1D):** Supporting token from the extracted palette.
- **color-dark-cyan (#00AC5C):** Supporting token from the extracted palette.
- **color-light-gray-3 (#CFCFCF):** Supporting token from the extracted palette.
- **color-light-gray-4 (#C0C0C0):** Supporting token from the extracted palette.
- **color-light-gray-6 (#B5B5B5):** Supporting token from the extracted palette.
- **color-light-gray-7 (#E4E4E4):** Supporting token from the extracted palette.
- **color-dark-gray-6 (rgba(66, 66, 66, 0.19)):** Supporting token from the extracted palette.
- **color-dark-gray-7 (rgba(50, 50, 50, 0.13)):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Aeonik, Input, Geist, Fragment Mono, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Times, 63px, weight 400.
- **h1:** font Times, 44px, weight 400.
- **h2:** font Times, 34px, weight 400.
- **h3:** font Times, 23.3px, weight 400.
- **body-lg:** font Times, 21px, weight 400.
- **body-md:** font Times, 19px, weight 400.
- **body-sm:** font Times, 18px, weight 400.
- **caption:** font Times, 17.3px, weight 400.
- **code:** font Aeonik, 13.5px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (3.3px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (33px):** Layout rhythm and component padding.
- **2xl (270px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (479px):** Responsive layout threshold.
- **sm (480px):** Responsive layout threshold.
- **md (767px):** Responsive layout threshold.
- **lg (991px):** Responsive layout threshold.
- **breakpoint-xs (479px):** Responsive layout threshold.
- **breakpoint-sm (480px):** Responsive layout threshold.
- **breakpoint-md (767px):** Responsive layout threshold.
- **breakpoint-lg (991px):** Responsive layout threshold.

## Elevation & Depth

Elevation is minimal in the extracted system — surfaces rely on contrast and borders rather than heavy shadows.

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (4.5px):** Border radius token.
- **md (8px):** Border radius token.
- **lg (9px):** Border radius token.
- **xl (10px):** Border radius token.
- **2xl (20px):** Border radius token.
- **full (99px):** Border radius token.

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
- Avoid pairing --color-dark-gray on --color-black (1.66:1, Fail).
- Avoid pairing --color-dark-gray on --color-dark-gray-4 (1.51:1, Fail).
- Avoid pairing --color-dark-gray on --color-black-2 (1.59:1, Fail).
