---
version: alpha
name: "Arc from The Browser Company"
description: "Converted from UI Inspector extraction of https://arc.net/"
colors:
  primary: "#000000"
  secondary: "#696969"
  tertiary: "#3139FB"
  neutral: "#FFFCEC"
  on-primary: "#FFFCEC"
  on-tertiary: "#FFFFFF"
  color-blue-2: "#2702C2"
  color-light-yellow: "#FFFADD"
  color-white-3: "#FFFCEA"
  color-dark-blue: "#210784"
  color-dark-blue-2: "#26069C"
  color-dark-blue-3: "#2404AA"
  color-light-red: "#FF9999"
  color-red: "#FF5060"
  color-blue-3: "#0034FE"
typography:
  display:
    fontFamily: Times
    fontSize: 45.51px
    fontWeight: 500
    lineHeight: 42.25px
    letterSpacing: -1.6px
  h1:
    fontFamily: Times
    fontSize: 40px
    fontWeight: 500
    lineHeight: 39px
    letterSpacing: -1.6px
  h2:
    fontFamily: Times
    fontSize: 36px
    fontWeight: 500
    lineHeight: 36px
    letterSpacing: -1.6px
  h3:
    fontFamily: Times
    fontSize: 32px
    fontWeight: 500
    lineHeight: 30.8px
    letterSpacing: -1.6px
  body-lg:
    fontFamily: Times
    fontSize: 28px
    fontWeight: 500
    lineHeight: 30px
    letterSpacing: -1.6px
  body-md:
    fontFamily: Times
    fontSize: 24px
    fontWeight: 500
    lineHeight: 28.8px
    letterSpacing: -1.6px
  body-sm:
    fontFamily: Times
    fontSize: 20px
    fontWeight: 500
    lineHeight: 25.5px
    letterSpacing: -1.6px
  caption:
    fontFamily: Times
    fontSize: 17px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: -1.6px
  code:
    fontFamily: Marlin
    fontSize: 16px
    fontWeight: 400
rounded:
  sm: 4px
  md: 8px
  lg: 10px
  xl: 22px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 459.391px
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

This design system was auto-extracted from https://arc.net/ (14 colors · 40 type tokens · 25 spacing steps · 5 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-18T18:42:37.964Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#696969):** Muted text, borders, and metadata.
- **tertiary (#3139FB):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFCEC):** Primary readable text on dark surfaces.
- **on-primary (#FFFCEC):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-blue-2 (#2702C2):** Supporting token from the extracted palette.
- **color-light-yellow (#FFFADD):** Supporting token from the extracted palette.
- **color-white-3 (#FFFCEA):** Supporting token from the extracted palette.
- **color-dark-blue (#210784):** Supporting token from the extracted palette.
- **color-dark-blue-2 (#26069C):** Supporting token from the extracted palette.
- **color-dark-blue-3 (#2404AA):** Supporting token from the extracted palette.
- **color-light-red (#FF9999):** Supporting token from the extracted palette.
- **color-red (#FF5060):** Supporting token from the extracted palette.
- **color-blue-3 (#0034FE):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Marlin, Marlin Soft SQ, Exposure VAR, ABC Oracle, -apple-system, ABC Favorit Mono, InterVariable, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Times, 45.51px, weight 500.
- **h1:** font Times, 40px, weight 500.
- **h2:** font Times, 36px, weight 500.
- **h3:** font Times, 32px, weight 500.
- **body-lg:** font Times, 28px, weight 500.
- **body-md:** font Times, 24px, weight 500.
- **body-sm:** font Times, 20px, weight 500.
- **caption:** font Times, 17px, weight 500.
- **code:** font Marlin, 16px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (459.391px):** Layout rhythm and component padding.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.1) 0px 5px 5px 0px`
- **md:** `rgba(0, 0, 0, 0.25) 0px 2px 8px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0.1) 0px 5px 5px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0.25) 0px 2px 8px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (4px):** Border radius token.
- **md (8px):** Border radius token.
- **lg (10px):** Border radius token.
- **xl (22px):** Border radius token.

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
- Avoid pairing --color-light-yellow on --color-white (1.02:1, Fail).
- Avoid pairing --color-light-yellow on --color-white-2 (1.05:1, Fail).
- Avoid pairing --color-mid-gray on --color-blue (1.23:1, Fail).
