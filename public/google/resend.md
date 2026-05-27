---
version: alpha
name: "Resend · Email for developers"
description: "Converted from UI Inspector extraction of https://resend.com/"
colors:
  primary: "#000000"
  secondary: "#A0A0A0"
  tertiary: "#00FF9E"
  neutral: "#F0F0F0"
  on-primary: "#F0F0F0"
  on-tertiary: "#FFFFFF"
  color-light-blue: "#D9EFFF"
  color-light-blue-2: "#DDEAFF"
  color-light-cyan-2: "#DBF6FF"
  color-blue-2: "#6A7282"
  color-dark-gray-8: "#0B0E14"
  color-blue-3: "#8453FF"
  color-blue-4: "#0076FF"
  color-orange-2: "#FF9000"
  color-red: "#FF0039"
  color-light-red-2: "#FF6A6C"
  color-yellow-2: "#FFDD00"
  color-cyan-5: "#3BFFA7"
  color-blue-6: "#00A3FF"
  color-green: "#05DF72"
  color-white: "#F8F8F8"
  color-white-3: "#F0F7FE"
  color-mid-gray-2: "#A1A4A5"
  color-mid-gray-3: "#ABABAB"
  color-dark-gray: "#464A4D"
  color-mid-gray-4: "#6C6C6C"
  color-white-4: "#FCFDFF"
  color-white-5: "#E8F2FF"
  color-mid-gray-5: "#70757E"
  color-light-red: "#FF8A88"
  color-blue: "#3EA2FF"
  color-cyan: "#3DD68C"
  color-cyan-2: "#39FFA5"
  color-light-gray-2: "#EBECED"
  color-light-blue-3: "#BBA5FF"
  color-light-blue-4: "#6ABAFF"
  color-yellow: "#FFC916"
  color-dark-gray-7: "#262A2D"
  color-light-blue-5: "#DBF1FF"
  color-dark-gray-2: "#141517"
  color-dark-gray-3: "#191B1E"
  color-dark-gray-4: "rgba(24, 25, 28, 0.88)"
  color-light-cyan: "rgba(215, 239, 248, 0.28)"
  color-dark-gray-5: "rgba(80, 80, 80, 0.15)"
  color-mid-gray-6: "rgba(143, 143, 143, 0.67)"
  color-dark-gray-6: "#1B1B1B"
  color-black-2: "#030303"
  color-light-gray-3: "rgba(240, 240, 228, 0.1)"
  color-light-gray-4: "rgba(200, 200, 200, 0.1)"
  color-light-gray-5: "#DDDDDD"
  color-mid-gray-7: "#777777"
  color-mid-gray-8: "#999999"
  color-light-gray-6: "#BBBBBB"
  color-light-gray-7: "rgba(232, 232, 232, 0.2)"
  color-cyan-3: "rgba(2, 252, 239, 0.44)"
  color-orange: "rgba(255, 181, 43, 0.44)"
  color-purple: "rgba(160, 43, 254, 0.44)"
  color-dark-gray-9: "#101010"
  color-light-blue-6: "#9B7CFF"
  color-blue-5: "rgba(0, 163, 255, 0.13)"
  color-light-gray-8: "rgba(200, 200, 200, 0.15)"
typography:
  display:
    fontFamily: inter
    fontSize: 96px
    fontWeight: 500
    lineHeight: 96px
    letterSpacing: -0.96px
  h1:
    fontFamily: inter
    fontSize: 76.8px
    fontWeight: 500
    lineHeight: 76.8px
    letterSpacing: -0.96px
  h2:
    fontFamily: inter
    fontSize: 56px
    fontWeight: 500
    lineHeight: 67.2px
    letterSpacing: -0.96px
  h3:
    fontFamily: inter
    fontSize: 24px
    fontWeight: 500
    lineHeight: 36px
    letterSpacing: -0.96px
  body-lg:
    fontFamily: inter
    fontSize: 20px
    fontWeight: 500
    lineHeight: 33.6px
    letterSpacing: -0.96px
  body-md:
    fontFamily: inter
    fontSize: 18px
    fontWeight: 500
    lineHeight: 27px
    letterSpacing: -0.96px
  body-sm:
    fontFamily: inter
    fontSize: 16px
    fontWeight: 500
    lineHeight: 26px
    letterSpacing: -0.96px
  caption:
    fontFamily: inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: -0.96px
  code:
    fontFamily: domaine
    fontSize: 16px
    fontWeight: 400
rounded:
  sm: "0px 8px 8px 0px"
  md: 4px
  lg: 6px
  xl: 8px
  2xl: "8px 0px 0px 8px"
  full: 10px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 30px
  xl: 32px
  2xl: 488.148px
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

This design system was auto-extracted from https://resend.com/ (60 colors · 36 type tokens · 30 spacing steps · 1 breakpoints · 9 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-17T07:54:07.758Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#A0A0A0):** Muted text, borders, and metadata.
- **tertiary (#00FF9E):** Primary accent for links, buttons, and focus states.
- **neutral (#F0F0F0):** Primary readable text on dark surfaces.
- **on-primary (#F0F0F0):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-light-blue (#D9EFFF):** Supporting token from the extracted palette.
- **color-light-blue-2 (#DDEAFF):** Supporting token from the extracted palette.
- **color-light-cyan-2 (#DBF6FF):** Supporting token from the extracted palette.
- **color-blue-2 (#6A7282):** Supporting token from the extracted palette.
- **color-dark-gray-8 (#0B0E14):** Supporting token from the extracted palette.
- **color-blue-3 (#8453FF):** Supporting token from the extracted palette.
- **color-blue-4 (#0076FF):** Supporting token from the extracted palette.
- **color-orange-2 (#FF9000):** Supporting token from the extracted palette.
- **color-red (#FF0039):** Supporting token from the extracted palette.
- **color-light-red-2 (#FF6A6C):** Supporting token from the extracted palette.
- **color-yellow-2 (#FFDD00):** Supporting token from the extracted palette.
- **color-cyan-5 (#3BFFA7):** Supporting token from the extracted palette.
- **color-blue-6 (#00A3FF):** Supporting token from the extracted palette.
- **color-green (#05DF72):** Supporting token from the extracted palette.
- **color-white (#F8F8F8):** Supporting token from the extracted palette.
- **color-white-3 (#F0F7FE):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#A1A4A5):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#ABABAB):** Supporting token from the extracted palette.
- **color-dark-gray (#464A4D):** Supporting token from the extracted palette.
- **color-mid-gray-4 (#6C6C6C):** Supporting token from the extracted palette.
- **color-white-4 (#FCFDFF):** Supporting token from the extracted palette.
- **color-white-5 (#E8F2FF):** Supporting token from the extracted palette.
- **color-mid-gray-5 (#70757E):** Supporting token from the extracted palette.
- **color-light-red (#FF8A88):** Supporting token from the extracted palette.
- **color-blue (#3EA2FF):** Supporting token from the extracted palette.
- **color-cyan (#3DD68C):** Supporting token from the extracted palette.
- **color-cyan-2 (#39FFA5):** Supporting token from the extracted palette.
- **color-light-gray-2 (#EBECED):** Supporting token from the extracted palette.
- **color-light-blue-3 (#BBA5FF):** Supporting token from the extracted palette.
- **color-light-blue-4 (#6ABAFF):** Supporting token from the extracted palette.
- **color-yellow (#FFC916):** Supporting token from the extracted palette.
- **color-dark-gray-7 (#262A2D):** Supporting token from the extracted palette.
- **color-light-blue-5 (#DBF1FF):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#141517):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#191B1E):** Supporting token from the extracted palette.
- **color-dark-gray-4 (rgba(24, 25, 28, 0.88)):** Supporting token from the extracted palette.
- **color-light-cyan (rgba(215, 239, 248, 0.28)):** Supporting token from the extracted palette.
- **color-dark-gray-5 (rgba(80, 80, 80, 0.15)):** Supporting token from the extracted palette.
- **color-mid-gray-6 (rgba(143, 143, 143, 0.67)):** Supporting token from the extracted palette.
- **color-dark-gray-6 (#1B1B1B):** Supporting token from the extracted palette.
- **color-black-2 (#030303):** Supporting token from the extracted palette.
- **color-light-gray-3 (rgba(240, 240, 228, 0.1)):** Supporting token from the extracted palette.
- **color-light-gray-4 (rgba(200, 200, 200, 0.1)):** Supporting token from the extracted palette.
- **color-light-gray-5 (#DDDDDD):** Supporting token from the extracted palette.
- **color-mid-gray-7 (#777777):** Supporting token from the extracted palette.
- **color-mid-gray-8 (#999999):** Supporting token from the extracted palette.
- **color-light-gray-6 (#BBBBBB):** Supporting token from the extracted palette.
- **color-light-gray-7 (rgba(232, 232, 232, 0.2)):** Supporting token from the extracted palette.
- **color-cyan-3 (rgba(2, 252, 239, 0.44)):** Supporting token from the extracted palette.
- **color-orange (rgba(255, 181, 43, 0.44)):** Supporting token from the extracted palette.
- **color-purple (rgba(160, 43, 254, 0.44)):** Supporting token from the extracted palette.
- **color-dark-gray-9 (#101010):** Supporting token from the extracted palette.
- **color-light-blue-6 (#9B7CFF):** Supporting token from the extracted palette.
- **color-blue-5 (rgba(0, 163, 255, 0.13)):** Supporting token from the extracted palette.
- **color-light-gray-8 (rgba(200, 200, 200, 0.15)):** Supporting token from the extracted palette.

## Typography

Primary typeface: **domaine, aBCFavorit, commitMono, Helvetica, Family, inter**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font inter, 96px, weight 500.
- **h1:** font inter, 76.8px, weight 500.
- **h2:** font inter, 56px, weight 500.
- **h3:** font inter, 24px, weight 500.
- **body-lg:** font inter, 20px, weight 500.
- **body-md:** font inter, 18px, weight 500.
- **body-sm:** font inter, 16px, weight 500.
- **caption:** font inter, 14px, weight 500.
- **code:** font domaine, 16px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (30px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (488.148px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (480px):** Responsive layout threshold.
- **breakpoint-xs (480px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgb(0, 0, 0) 0px 0px 0px 8px`
- **md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`
- **lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(255, 255, 255) 0px 1px 1px 0px inset`
- **shadow-sm:** `rgb(0, 0, 0) 0px 0px 0px 8px`
- **shadow-md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`
- **shadow-lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(255, 255, 255) 0px 1px 1px 0px inset`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 8px 8px 0px):** Border radius token.
- **md (4px):** Border radius token.
- **lg (6px):** Border radius token.
- **xl (8px):** Border radius token.
- **2xl (8px 0px 0px 8px):** Border radius token.
- **full (10px):** Border radius token.

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
- Avoid pairing --color-light-gray on --color-white-2 (1.14:1, Fail).
- Avoid pairing --color-light-gray on --color-light-blue (1.04:1, Fail).
- Avoid pairing --color-light-gray on --color-light-blue-2 (1.07:1, Fail).
