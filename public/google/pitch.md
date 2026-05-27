---
version: alpha
name: "Presentation software for fast-moving teams"
description: "Converted from UI Inspector extraction of https://pitch.com/"
colors:
  primary: "#000000"
  secondary: "#808080"
  tertiary: "#FFD02C"
  neutral: "#2B2A35"
  on-primary: "#2B2A35"
  on-tertiary: "#FFFFFF"
  color-purple: "#8D49F7"
  color-orange: "#FFA000"
  color-blue-4: "rgba(107, 83, 255, 0.05)"
  color-light-cyan: "#81D4FA"
  color-yellow-2: "#FFD600"
  color-light-gray-3: "#F0EFF4"
  color-blue: "#6B53FF"
  color-dark-gray-2: "#1E1D28"
  color-blue-2: "#545465"
  color-blue-3: "#6F7387"
  color-dark-blue: "#3F4250"
  color-dark-blue-2: "#371789"
  color-light-gray: "#DDDFE5"
  color-light-gray-2: "#D7D8E0"
  color-blue-7: "rgba(103, 110, 144, 0.2)"
  color-dark-gray-3: "rgba(43, 42, 53, 0.25)"
  color-dark-gray-4: "rgba(43, 42, 53, 0.5)"
  color-blue-5: "#586EE0"
  color-orange-2: "#FF9E2C"
  color-blue-6: "#5318EB"
  color-light-purple: "#AB6EF9"
  color-purple-2: "#8A4CF9"
  color-dark-blue-3: "rgba(53, 27, 97, 0.04)"
  color-white-2: "#F6F6F9"
typography:
  display:
    fontFamily: Eina01
    fontSize: 80px
    fontWeight: 400
    lineHeight: 104px
    letterSpacing: -1.2px
  h1:
    fontFamily: Eina01
    fontSize: 60px
    fontWeight: 400
    lineHeight: 80px
    letterSpacing: -1.2px
  h2:
    fontFamily: Eina01
    fontSize: 36px
    fontWeight: 400
    lineHeight: 60px
    letterSpacing: -1.2px
  h3:
    fontFamily: Eina01
    fontSize: 28px
    fontWeight: 400
    lineHeight: 50.4px
    letterSpacing: -1.2px
  body-lg:
    fontFamily: Eina01
    fontSize: 27px
    fontWeight: 400
    lineHeight: 44px
    letterSpacing: -1.2px
  body-md:
    fontFamily: Eina01
    fontSize: 24px
    fontWeight: 400
    lineHeight: 37.8px
    letterSpacing: -1.2px
  body-sm:
    fontFamily: Eina01
    fontSize: 22px
    fontWeight: 400
    lineHeight: 36px
    letterSpacing: -1.2px
  caption:
    fontFamily: Eina01
    fontSize: 21px
    fontWeight: 400
    lineHeight: 32px
    letterSpacing: -1.2px
  code:
    fontFamily: "Mark Pro"
    fontSize: 14px
    fontWeight: 400
rounded:
  sm: 3px
  md: "3px 3px 0px 0px"
  lg: 6px
  xl: 8px
  2xl: "8px 8px 0px 0px"
  full: 10px
spacing:
  xs: 4px
  sm: 8px
  md: 18px
  lg: 24px
  xl: 32px
  2xl: 231.281px
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

This design system was auto-extracted from https://pitch.com/ (29 colors · 46 type tokens · 36 spacing steps · 6 breakpoints · 13 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-18T18:41:34.049Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#808080):** Muted text, borders, and metadata.
- **tertiary (#FFD02C):** Primary accent for links, buttons, and focus states.
- **neutral (#2B2A35):** Primary readable text on dark surfaces.
- **on-primary (#2B2A35):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-purple (#8D49F7):** Supporting token from the extracted palette.
- **color-orange (#FFA000):** Supporting token from the extracted palette.
- **color-blue-4 (rgba(107, 83, 255, 0.05)):** Supporting token from the extracted palette.
- **color-light-cyan (#81D4FA):** Supporting token from the extracted palette.
- **color-yellow-2 (#FFD600):** Supporting token from the extracted palette.
- **color-light-gray-3 (#F0EFF4):** Supporting token from the extracted palette.
- **color-blue (#6B53FF):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#1E1D28):** Supporting token from the extracted palette.
- **color-blue-2 (#545465):** Supporting token from the extracted palette.
- **color-blue-3 (#6F7387):** Supporting token from the extracted palette.
- **color-dark-blue (#3F4250):** Supporting token from the extracted palette.
- **color-dark-blue-2 (#371789):** Supporting token from the extracted palette.
- **color-light-gray (#DDDFE5):** Supporting token from the extracted palette.
- **color-light-gray-2 (#D7D8E0):** Supporting token from the extracted palette.
- **color-blue-7 (rgba(103, 110, 144, 0.2)):** Supporting token from the extracted palette.
- **color-dark-gray-3 (rgba(43, 42, 53, 0.25)):** Supporting token from the extracted palette.
- **color-dark-gray-4 (rgba(43, 42, 53, 0.5)):** Supporting token from the extracted palette.
- **color-blue-5 (#586EE0):** Supporting token from the extracted palette.
- **color-orange-2 (#FF9E2C):** Supporting token from the extracted palette.
- **color-blue-6 (#5318EB):** Supporting token from the extracted palette.
- **color-light-purple (#AB6EF9):** Supporting token from the extracted palette.
- **color-purple-2 (#8A4CF9):** Supporting token from the extracted palette.
- **color-dark-blue-3 (rgba(53, 27, 97, 0.04)):** Supporting token from the extracted palette.
- **color-white-2 (#F6F6F9):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Mark Pro, system-ui, Family, Eina01**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Eina01, 80px, weight 400.
- **h1:** font Eina01, 60px, weight 400.
- **h2:** font Eina01, 36px, weight 400.
- **h3:** font Eina01, 28px, weight 400.
- **body-lg:** font Eina01, 27px, weight 400.
- **body-md:** font Eina01, 24px, weight 400.
- **body-sm:** font Eina01, 22px, weight 400.
- **caption:** font Eina01, 21px, weight 400.
- **code:** font Mark Pro, 14px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (18px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (231.281px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (1082px):** Responsive layout threshold.
- **sm (1123px):** Responsive layout threshold.
- **md (1399px):** Responsive layout threshold.
- **lg (1667px):** Responsive layout threshold.
- **xl (1670px):** Responsive layout threshold.
- **2xl (1820px):** Responsive layout threshold.
- **breakpoint-xs (1082px):** Responsive layout threshold.
- **breakpoint-sm (1123px):** Responsive layout threshold.
- **breakpoint-md (1399px):** Responsive layout threshold.
- **breakpoint-lg (1667px):** Responsive layout threshold.
- **breakpoint-xl (1670px):** Responsive layout threshold.
- **breakpoint-2xl (1820px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.15) 0px 3px 10px 0px`
- **md:** `rgba(103, 110, 144, 0.2) 0px 8px 26px 0px`
- **lg:** `rgba(43, 42, 53, 0.25) 0px 6px 27px 0px`
- **xl:** `rgba(43, 42, 53, 0.5) 0px 6px 27px 0px`
- **shadow-5:** `rgba(0, 0, 0, 0.15) 0px 0px 0px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0.15) 0px 3px 10px 0px`
- **shadow-md:** `rgba(103, 110, 144, 0.2) 0px 8px 26px 0px`
- **shadow-lg:** `rgba(43, 42, 53, 0.25) 0px 6px 27px 0px`
- **shadow-xl:** `rgba(43, 42, 53, 0.5) 0px 6px 27px 0px`
- **shadow-shadow-5:** `rgba(0, 0, 0, 0.15) 0px 0px 0px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (3px):** Border radius token.
- **md (3px 3px 0px 0px):** Border radius token.
- **lg (6px):** Border radius token.
- **xl (8px):** Border radius token.
- **2xl (8px 8px 0px 0px):** Border radius token.
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
- Avoid pairing --color-dark-gray on --color-black (1.49:1, Fail).
- Avoid pairing --color-dark-gray on --color-purple (2.98:1, Fail).
- Avoid pairing --color-blue on --color-purple (1.03:1, Fail).
