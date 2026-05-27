---
version: alpha
name: "Acctual: Free Small Business Invoicing Software"
description: "Converted from UI Inspector extraction of https://www.acctual.com/"
colors:
  primary: "#000000"
  secondary: "#8D8D8D"
  tertiary: "#1AB4D7"
  neutral: "#8D8D8D"
  on-primary: "#8D8D8D"
  on-tertiary: "#FFFFFF"
  color-dark-gray-2: "#666666"
  color-dark-gray-3: "#0F0F0F"
  color-white-2: "#FAFAFA"
  color-dark-gray-4: "#0D111B"
  color-blue-4: "rgba(0, 152, 242, 0.16)"
  color-white-3: "#F7FAFC"
  color-pink-2: "rgba(242, 0, 201, 0.16)"
  color-blue-5: "rgba(108, 85, 252, 0.16)"
  color-green-2: "#2CA01C"
  color-blue: "#0000EE"
  color-dark-gray: "#1E1E1E"
  color-blue-2: "#0098F2"
  color-mid-gray-2: "#999999"
  color-mid-gray-3: "#8B8B8B"
  color-pink: "#F200CA"
  color-blue-3: "#6C56FC"
  color-dark-green: "#5D9C06"
  color-dark-gray-5: "#242628"
  color-dark-gray-6: "rgba(27, 28, 29, 0.48)"
  color-dark-blue: "rgba(30, 45, 82, 0.06)"
  color-dark-blue-2: "rgba(30, 45, 82, 0.2)"
  color-green: "#00F23D"
  color-red: "#FF6363"
  color-green-3: "#529F36"
typography:
  display:
    fontFamily: Times
    fontSize: 64px
    fontWeight: 500
    lineHeight: 72px
    letterSpacing: -1.2px
  h1:
    fontFamily: Times
    fontSize: 40px
    fontWeight: 500
    lineHeight: 48px
    letterSpacing: -1.2px
  h2:
    fontFamily: Times
    fontSize: 32px
    fontWeight: 500
    lineHeight: 40px
    letterSpacing: -1.2px
  h3:
    fontFamily: Times
    fontSize: 24px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: -1.2px
  body-lg:
    fontFamily: Times
    fontSize: 22px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: -1.2px
  body-md:
    fontFamily: Times
    fontSize: 20px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: -1.2px
  body-sm:
    fontFamily: Times
    fontSize: 16px
    fontWeight: 500
    lineHeight: 21.33px
    letterSpacing: -1.2px
  caption:
    fontFamily: Times
    fontSize: 14.22px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: -1.2px
  code:
    fontFamily: sans-serif
    fontSize: 14px
    fontWeight: 400
rounded:
  sm: "0px 10px 10px 0px"
  md: "10px 0px 0px 10px"
  lg: 10px
  xl: 12px
  2xl: 16px
  full: 20px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 256px
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

This design system was auto-extracted from https://www.acctual.com/ (28 colors · 41 type tokens · 27 spacing steps · 5 breakpoints).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-05-05T16:01:10.780Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#8D8D8D):** Muted text, borders, and metadata.
- **tertiary (#1AB4D7):** Primary accent for links, buttons, and focus states.
- **neutral (#8D8D8D):** Primary readable text on dark surfaces.
- **on-primary (#8D8D8D):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-dark-gray-2 (#666666):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#0F0F0F):** Supporting token from the extracted palette.
- **color-white-2 (#FAFAFA):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#0D111B):** Supporting token from the extracted palette.
- **color-blue-4 (rgba(0, 152, 242, 0.16)):** Supporting token from the extracted palette.
- **color-white-3 (#F7FAFC):** Supporting token from the extracted palette.
- **color-pink-2 (rgba(242, 0, 201, 0.16)):** Supporting token from the extracted palette.
- **color-blue-5 (rgba(108, 85, 252, 0.16)):** Supporting token from the extracted palette.
- **color-green-2 (#2CA01C):** Supporting token from the extracted palette.
- **color-blue (#0000EE):** Supporting token from the extracted palette.
- **color-dark-gray (#1E1E1E):** Supporting token from the extracted palette.
- **color-blue-2 (#0098F2):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#999999):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#8B8B8B):** Supporting token from the extracted palette.
- **color-pink (#F200CA):** Supporting token from the extracted palette.
- **color-blue-3 (#6C56FC):** Supporting token from the extracted palette.
- **color-dark-green (#5D9C06):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#242628):** Supporting token from the extracted palette.
- **color-dark-gray-6 (rgba(27, 28, 29, 0.48)):** Supporting token from the extracted palette.
- **color-dark-blue (rgba(30, 45, 82, 0.06)):** Supporting token from the extracted palette.
- **color-dark-blue-2 (rgba(30, 45, 82, 0.2)):** Supporting token from the extracted palette.
- **color-green (#00F23D):** Supporting token from the extracted palette.
- **color-red (#FF6363):** Supporting token from the extracted palette.
- **color-green-3 (#529F36):** Supporting token from the extracted palette.

## Typography

Primary typeface: **sans-serif, Open Runde, Caveat, SF Pro Text, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Times, 64px, weight 500.
- **h1:** font Times, 40px, weight 500.
- **h2:** font Times, 32px, weight 500.
- **h3:** font Times, 24px, weight 500.
- **body-lg:** font Times, 22px, weight 500.
- **body-md:** font Times, 20px, weight 500.
- **body-sm:** font Times, 16px, weight 500.
- **caption:** font Times, 14.22px, weight 500.
- **code:** font sans-serif, 14px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (256px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (799px):** Responsive layout threshold.
- **sm (799.98px):** Responsive layout threshold.
- **md (800px):** Responsive layout threshold.
- **lg (1099px):** Responsive layout threshold.
- **xl (1099.98px):** Responsive layout threshold.
- **breakpoint-xs (799px):** Responsive layout threshold.
- **breakpoint-sm (799.98px):** Responsive layout threshold.
- **breakpoint-md (800px):** Responsive layout threshold.
- **breakpoint-lg (1099px):** Responsive layout threshold.
- **breakpoint-xl (1099.98px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.06) 0px 2.5px 2.5px 0px`
- **md:** `rgba(10, 13, 20, 0.03) 0px 1px 2px 0px`
- **lg:** `rgb(36, 38, 40) 0px 0px 0px 1px, rgba(27, 28, 29, 0.48) 0px 1px 2px 0px`
- **xl:** `rgba(0, 0, 0, 0.05) 0px 1.77778px 8px 0px, rgba(0, 0, 0, 0.04) 0px 0.888889px 2.66667px 0px`
- **shadow-5:** `rgba(0, 0, 0, 0.06) 0px 2px 3px -1px`
- **shadow-6:** `rgba(30, 45, 82, 0.06) 0px 0px 0.34px 0.34px, rgba(30, 45, 82, 0.2) 0.34px 0.34px 0.34px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0.06) 0px 2.5px 2.5px 0px`
- **shadow-md:** `rgba(10, 13, 20, 0.03) 0px 1px 2px 0px`
- **shadow-lg:** `rgb(36, 38, 40) 0px 0px 0px 1px, rgba(27, 28, 29, 0.48) 0px 1px 2px 0px`
- **shadow-xl:** `rgba(0, 0, 0, 0.05) 0px 1.77778px 8px 0px, rgba(0, 0, 0, 0.04) 0px 0.888889px 2.66667px 0px`
- **shadow-shadow-5:** `rgba(0, 0, 0, 0.06) 0px 2px 3px -1px`
- **shadow-shadow-6:** `rgba(30, 45, 82, 0.06) 0px 0px 0.34px 0.34px, rgba(30, 45, 82, 0.2) 0.34px 0.34px 0.34px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 10px 10px 0px):** Border radius token.
- **md (10px 0px 0px 10px):** Border radius token.
- **lg (10px):** Border radius token.
- **xl (12px):** Border radius token.
- **2xl (16px):** Border radius token.
- **full (20px):** Border radius token.

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
- Avoid pairing --color-mid-gray on --color-dark-gray-2 (1.73:1, Fail).
- Avoid pairing --color-blue on --color-black (2.23:1, Fail).
- Avoid pairing --color-blue on --color-dark-gray-2 (1.64:1, Fail).
