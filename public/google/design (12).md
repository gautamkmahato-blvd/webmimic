---
version: alpha
name: "HYER® - Personalised Aviation - Book or Share a Private Jet"
description: "Converted from UI Inspector extraction of https://www.flyhyer.com/"
colors:
  primary: "#000D10"
  secondary: "#8E8E95"
  tertiary: "#BC7155"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-dark-gray: "#151623"
  color-dark-gray-2: "#0F0F1C"
  color-black-2: "#000000"
  color-light-blue: "#D3E3F2"
typography:
  display:
    fontFamily: HelveticaNowDisplay
    fontSize: 147.157px
    fontWeight: 400
    lineHeight: 117.726px
    letterSpacing: -2.05799px
  h1:
    fontFamily: HelveticaNowDisplay
    fontSize: 102.899px
    fontWeight: 400
    lineHeight: 102.899px
    letterSpacing: -2.05799px
  h2:
    fontFamily: HelveticaNowDisplay
    fontSize: 49.79px
    fontWeight: 400
    lineHeight: 49.79px
    letterSpacing: -2.05799px
  h3:
    fontFamily: HelveticaNowDisplay
    fontSize: 47.2084px
    fontWeight: 400
    lineHeight: 42.9596px
    letterSpacing: -2.05799px
  body-lg:
    fontFamily: HelveticaNowDisplay
    fontSize: 40.9385px
    fontWeight: 400
    lineHeight: 40.9385px
    letterSpacing: -2.05799px
  body-md:
    fontFamily: HelveticaNowDisplay
    fontSize: 28.7676px
    fontWeight: 400
    lineHeight: 37.4347px
    letterSpacing: -2.05799px
  body-sm:
    fontFamily: HelveticaNowDisplay
    fontSize: 23.2354px
    fontWeight: 400
    lineHeight: 28.7676px
    letterSpacing: -2.05799px
  caption:
    fontFamily: HelveticaNowDisplay
    fontSize: 18px
    fontWeight: 400
    lineHeight: 23.2354px
    letterSpacing: -2.05799px
  code:
    fontFamily: -apple-system
    fontSize: 16.875px
    fontWeight: 400
rounded:
  sm: "0px 0px 35.4062px"
  md: 5px
  lg: "100%"
  xl: 1000px
spacing:
  xs: 4.16667px
  sm: 8.85156px
  md: 15.0477px
  lg: 24.1205px
  xl: 32.0869px
  2xl: 472.078px
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

This design system was auto-extracted from https://www.flyhyer.com/ (8 colors · 39 type tokens · 44 spacing steps · 1 breakpoints · 5 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-05-05T16:03:34.018Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000D10):** Core surface and headline color.
- **secondary (#8E8E95):** Muted text, borders, and metadata.
- **tertiary (#BC7155):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-dark-gray (#151623):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#0F0F1C):** Supporting token from the extracted palette.
- **color-black-2 (#000000):** Supporting token from the extracted palette.
- **color-light-blue (#D3E3F2):** Supporting token from the extracted palette.

## Typography

Primary typeface: **-apple-system, sans-serif, Family, HelveticaNowDisplay**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font HelveticaNowDisplay, 147.157px, weight 400.
- **h1:** font HelveticaNowDisplay, 102.899px, weight 400.
- **h2:** font HelveticaNowDisplay, 49.79px, weight 400.
- **h3:** font HelveticaNowDisplay, 47.2084px, weight 400.
- **body-lg:** font HelveticaNowDisplay, 40.9385px, weight 400.
- **body-md:** font HelveticaNowDisplay, 28.7676px, weight 400.
- **body-sm:** font HelveticaNowDisplay, 23.2354px, weight 400.
- **caption:** font HelveticaNowDisplay, 18px, weight 400.
- **code:** font -apple-system, 16.875px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4.16667px):** Layout rhythm and component padding.
- **sm (8.85156px):** Layout rhythm and component padding.
- **md (15.0477px):** Layout rhythm and component padding.
- **lg (24.1205px):** Layout rhythm and component padding.
- **xl (32.0869px):** Layout rhythm and component padding.
- **2xl (472.078px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (1024px):** Responsive layout threshold.
- **breakpoint-xs (1024px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.02) 0px 0px 20px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0.02) 0px 0px 20px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 0px 35.4062px):** Border radius token.
- **md (5px):** Border radius token.
- **lg (100%):** Border radius token.
- **xl (1000px):** Border radius token.

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
- Avoid pairing --color-black-2 on --color-black (1.07:1, Fail).
- Avoid pairing --color-black-2 on --color-dark-gray (1.17:1, Fail).
- Avoid pairing --color-black-2 on --color-dark-gray-2 (1.11:1, Fail).
