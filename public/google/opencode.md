---
version: alpha
name: OpenCode
description: "Converted from UI Inspector extraction of https://opencode.ai/"
colors:
  primary: "#201D1D"
  secondary: "#9A9898"
  neutral: "#646262"
  on-primary: "#646262"
  color-white: "#FDFCFC"
  color-white-2: "#FFFFFF"
  color-white-3: "#F8F7F7"
  color-black: "#000000"
  color-dark-gray-3: "#1D1D1F"
  color-mid-gray-3: "#8D8B8B"
  color-light-gray-4: "#D0CFCE"
  color-dark-gray-4: "#424245"
  color-black-2: "rgba(15, 0, 0, 0.12) rgba(15, 0, 0, 0.12) rgb(100, 98, 98)"
  color-mid-gray: "#8E8B8B"
  color-light-gray: "#CFCECD"
  color-light-gray-2: "#BCBBBB"
  color-light-gray-3: "#DAD9D9"
  color-dark-green: "#03B000"
typography:
  h1:
    fontFamily: Times
    fontSize: 38px
    fontWeight: 500
    lineHeight: 57px
  h2:
    fontFamily: Times
    fontSize: 16px
    fontWeight: 500
    lineHeight: 32px
  h3:
    fontFamily: Times
    fontSize: 14px
    fontWeight: 500
    lineHeight: 28px
  code:
    fontFamily: "Berkeley Mono"
    fontSize: 38px
    fontWeight: 400
rounded:
  sm: "0px 0px 6px 6px"
  md: 4px
  lg: "6px 6px 0px 0px"
  xl: 6px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 96px
components:
  surface:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  text-muted:
    textColor: "{colors.secondary}"
    typography: body-sm
---

## Overview

This design system was auto-extracted from https://opencode.ai/ (17 colors · 14 type tokens · 16 spacing steps · 2 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-17T07:42:58.860Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#201D1D):** Core surface and headline color.
- **secondary (#9A9898):** Muted text, borders, and metadata.
- **neutral (#646262):** Primary readable text on dark surfaces.
- **on-primary (#646262):** Text and icons placed on primary surfaces.
- **color-white (#FDFCFC):** Supporting token from the extracted palette.
- **color-white-2 (#FFFFFF):** Supporting token from the extracted palette.
- **color-white-3 (#F8F7F7):** Supporting token from the extracted palette.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#1D1D1F):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#8D8B8B):** Supporting token from the extracted palette.
- **color-light-gray-4 (#D0CFCE):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#424245):** Supporting token from the extracted palette.
- **color-black-2 (rgba(15, 0, 0, 0.12) rgba(15, 0, 0, 0.12) rgb(100, 98, 98)):** Supporting token from the extracted palette.
- **color-mid-gray (#8E8B8B):** Supporting token from the extracted palette.
- **color-light-gray (#CFCECD):** Supporting token from the extracted palette.
- **color-light-gray-2 (#BCBBBB):** Supporting token from the extracted palette.
- **color-light-gray-3 (#DAD9D9):** Supporting token from the extracted palette.
- **color-dark-green (#03B000):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Berkeley Mono, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **h1:** font Times, 38px, weight 500.
- **h2:** font Times, 16px, weight 500.
- **h3:** font Times, 14px, weight 500.
- **code:** font Berkeley Mono, 38px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (96px):** Layout rhythm and component padding.

## Elevation & Depth

Elevation is minimal in the extracted system — surfaces rely on contrast and borders rather than heavy shadows.

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 0px 6px 6px):** Border radius token.
- **md (4px):** Border radius token.
- **lg (6px 6px 0px 0px):** Border radius token.
- **xl (6px):** Border radius token.

## Components

Component tokens map semantic colors and shapes to reusable UI patterns.

- **surface:** backgroundColor {colors.primary}, textColor {colors.on-primary}.
- **text-muted:** textColor {colors.secondary}, typography body-sm.

## Do's and Don'ts

- **Do** use the accent color sparingly for primary actions and active states.
- **Do** maintain high contrast between text and background tokens.
- **Don't** introduce new colors outside the extracted palette without updating the YAML tokens.
- **Don't** mix arbitrary spacing values — use the spacing scale.

**Accessibility notes from extraction:**
- Avoid pairing --color-dark-gray on --color-dark-gray-2 (2.76:1, Fail).
- Avoid pairing --color-black on --color-dark-gray-2 (1.25:1, Fail).
- Avoid pairing --color-mid-gray-2 on --color-white (2.8:1, Fail).
