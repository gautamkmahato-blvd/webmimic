---
version: alpha
name: Feed
description: "Converted from UI Inspector extraction of https://www.linkedin.com/feed/"
colors:
  primary: "#000000"
  secondary: "rgba(140, 140, 140, 0.2)"
  tertiary: "#0A66C2"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-light-gray: "#F4F2EE"
  color-orange: "#BBB1A1"
  color-blue-2: "#56687A"
  color-green: "#5F9B41"
  color-blue-3: "#378FE9"
  color-red: "#E06847"
  color-mid-gray-2: "#808080"
  color-light-blue: "#9EB5CA"
  color-orange-2: "#E7A33E"
  color-orange-3: "#C37D16"
typography:
  display:
    fontFamily: -apple-system
    fontSize: 40px
    fontWeight: 400
    lineHeight: 48px
  h1:
    fontFamily: -apple-system
    fontSize: 32px
    fontWeight: 400
    lineHeight: 40px
  h2:
    fontFamily: -apple-system
    fontSize: 20px
    fontWeight: 400
    lineHeight: 28px
  h3:
    fontFamily: -apple-system
    fontSize: 16px
    fontWeight: 400
    lineHeight: 25px
  body-lg:
    fontFamily: -apple-system
    fontSize: 14px
    fontWeight: 400
    lineHeight: 24px
  body-md:
    fontFamily: -apple-system
    fontSize: 13.3333px
    fontWeight: 400
    lineHeight: 21px
  body-sm:
    fontFamily: -apple-system
    fontSize: 12px
    fontWeight: 400
    lineHeight: 20px
  caption:
    fontFamily: -apple-system
    fontSize: 10px
    fontWeight: 400
    lineHeight: 17.5px
rounded:
  sm: "0px 0px 8px 8px"
  md: 2px
  lg: 4px
  xl: "8px 0px 8px 8px"
  2xl: 8px
  full: "8px 8px 8px 0px"
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 30px
  2xl: 492.453px
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

This design system was auto-extracted from https://www.linkedin.com/feed/ (14 colors · 21 type tokens · 17 spacing steps · 15 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-15T18:07:34.623Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (rgba(140, 140, 140, 0.2)):** Muted text, borders, and metadata.
- **tertiary (#0A66C2):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-light-gray (#F4F2EE):** Supporting token from the extracted palette.
- **color-orange (#BBB1A1):** Supporting token from the extracted palette.
- **color-blue-2 (#56687A):** Supporting token from the extracted palette.
- **color-green (#5F9B41):** Supporting token from the extracted palette.
- **color-blue-3 (#378FE9):** Supporting token from the extracted palette.
- **color-red (#E06847):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#808080):** Supporting token from the extracted palette.
- **color-light-blue (#9EB5CA):** Supporting token from the extracted palette.
- **color-orange-2 (#E7A33E):** Supporting token from the extracted palette.
- **color-orange-3 (#C37D16):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Family, -apple-system**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font -apple-system, 40px, weight 400.
- **h1:** font -apple-system, 32px, weight 400.
- **h2:** font -apple-system, 20px, weight 400.
- **h3:** font -apple-system, 16px, weight 400.
- **body-lg:** font -apple-system, 14px, weight 400.
- **body-md:** font -apple-system, 13.3333px, weight 400.
- **body-sm:** font -apple-system, 12px, weight 400.
- **caption:** font -apple-system, 10px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (30px):** Layout rhythm and component padding.
- **2xl (492.453px):** Layout rhythm and component padding.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(140, 140, 140, 0.2) 0px 0px 0px 1px`
- **md:** `rgba(140, 140, 140, 0.2) 0px 0px 0px 1px, rgba(0, 0, 0, 0.3) 0px 4px 4px 0px`
- **lg:** `rgb(10, 102, 194) 0px 0px 0px 1px inset`
- **xl:** `rgba(0, 0, 0, 0.75) 0px 0px 0px 1px inset`
- **shadow-5:** `rgb(255, 255, 255) 0px 0px 0px 2px`
- **shadow-sm:** `rgba(140, 140, 140, 0.2) 0px 0px 0px 1px`
- **shadow-md:** `rgba(140, 140, 140, 0.2) 0px 0px 0px 1px, rgba(0, 0, 0, 0.3) 0px 4px 4px 0px`
- **shadow-lg:** `rgb(10, 102, 194) 0px 0px 0px 1px inset`
- **shadow-xl:** `rgba(0, 0, 0, 0.75) 0px 0px 0px 1px inset`
- **shadow-shadow-5:** `rgb(255, 255, 255) 0px 0px 0px 2px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 0px 8px 8px):** Border radius token.
- **md (2px):** Border radius token.
- **lg (4px):** Border radius token.
- **xl (8px 0px 8px 8px):** Border radius token.
- **2xl (8px):** Border radius token.
- **full (8px 8px 8px 0px):** Border radius token.

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
- Avoid pairing --color-blue-2 on --color-blue (1.01:1, Fail).
- Avoid pairing --color-blue-2 on --color-mid-gray (1.71:1, Fail).
- Avoid pairing --color-green on --color-blue (1.69:1, Fail).
