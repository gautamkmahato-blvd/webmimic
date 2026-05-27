---
version: alpha
name: "Discover and configure all BMW models."
description: "Converted from UI Inspector extraction of https://www.bmw.in/en/all-models.html"
colors:
  primary: "#262626"
  secondary: "#8E8E8E"
  tertiary: "#1C69D4"
  neutral: "#666666"
  on-primary: "#666666"
  on-tertiary: "#FFFFFF"
  color-black: "#000000"
  color-dark-gray-3: "#4D4D4D"
  color-light-gray: "#E6E6E6"
  color-light-gray-2: "#EFEFEF"
  color-light-gray-3: "#BBBBBB"
  color-white-2: "#F6F6F6"
  color-dark-blue: "#0066B1"
  color-blue-2: "#0000EE"
typography:
  display:
    fontFamily: bmwTypeNextWeb
    fontSize: 29px
    fontWeight: 500
    lineHeight: 42px
  h1:
    fontFamily: bmwTypeNextWeb
    fontSize: 25px
    fontWeight: 500
    lineHeight: 36px
  h2:
    fontFamily: bmwTypeNextWeb
    fontSize: 24px
    fontWeight: 500
    lineHeight: 32px
  h3:
    fontFamily: bmwTypeNextWeb
    fontSize: 20px
    fontWeight: 500
    lineHeight: 30px
  body-lg:
    fontFamily: bmwTypeNextWeb
    fontSize: 18px
    fontWeight: 500
    lineHeight: 28px
  body-md:
    fontFamily: bmwTypeNextWeb
    fontSize: 17px
    fontWeight: 500
    lineHeight: 26px
  body-sm:
    fontFamily: bmwTypeNextWeb
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  caption:
    fontFamily: bmwTypeNextWeb
    fontSize: 14px
    fontWeight: 500
    lineHeight: 22px
rounded:
  sm: 3px
  md: "8px 8px 0px"
  lg: "10px 10px 0px"
  xl: "50%"
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 227.625px
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

This design system was auto-extracted from https://www.bmw.in/en/all-models.html (13 colors · 24 type tokens · 13 spacing steps · 12 breakpoints · 10 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-14T07:57:22.875Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#262626):** Core surface and headline color.
- **secondary (#8E8E8E):** Muted text, borders, and metadata.
- **tertiary (#1C69D4):** Primary accent for links, buttons, and focus states.
- **neutral (#666666):** Primary readable text on dark surfaces.
- **on-primary (#666666):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#4D4D4D):** Supporting token from the extracted palette.
- **color-light-gray (#E6E6E6):** Supporting token from the extracted palette.
- **color-light-gray-2 (#EFEFEF):** Supporting token from the extracted palette.
- **color-light-gray-3 (#BBBBBB):** Supporting token from the extracted palette.
- **color-white-2 (#F6F6F6):** Supporting token from the extracted palette.
- **color-dark-blue (#0066B1):** Supporting token from the extracted palette.
- **color-blue-2 (#0000EE):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Family, bmwTypeNextWeb**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font bmwTypeNextWeb, 29px, weight 500.
- **h1:** font bmwTypeNextWeb, 25px, weight 500.
- **h2:** font bmwTypeNextWeb, 24px, weight 500.
- **h3:** font bmwTypeNextWeb, 20px, weight 500.
- **body-lg:** font bmwTypeNextWeb, 18px, weight 500.
- **body-md:** font bmwTypeNextWeb, 17px, weight 500.
- **body-sm:** font bmwTypeNextWeb, 16px, weight 500.
- **caption:** font bmwTypeNextWeb, 14px, weight 500.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (227.625px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (480px):** Responsive layout threshold.
- **sm (550px):** Responsive layout threshold.
- **md (599px):** Responsive layout threshold.
- **lg (767px):** Responsive layout threshold.
- **xl (768px):** Responsive layout threshold.
- **2xl (992px):** Responsive layout threshold.
- **3xl (1023px):** Responsive layout threshold.
- **bp-8 (1024px):** Responsive layout threshold.
- **bp-9 (1279px):** Responsive layout threshold.
- **bp-10 (1280px):** Responsive layout threshold.
- **bp-11 (1919px):** Responsive layout threshold.
- **bp-12 (1920px):** Responsive layout threshold.
- **breakpoint-xs (480px):** Responsive layout threshold.
- **breakpoint-sm (550px):** Responsive layout threshold.
- **breakpoint-md (599px):** Responsive layout threshold.
- **breakpoint-lg (767px):** Responsive layout threshold.
- **breakpoint-xl (768px):** Responsive layout threshold.
- **breakpoint-2xl (992px):** Responsive layout threshold.
- **breakpoint-3xl (1023px):** Responsive layout threshold.
- **breakpoint-bp-8 (1024px):** Responsive layout threshold.
- **breakpoint-bp-9 (1279px):** Responsive layout threshold.
- **breakpoint-bp-10 (1280px):** Responsive layout threshold.
- **breakpoint-bp-11 (1919px):** Responsive layout threshold.
- **breakpoint-bp-12 (1920px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgb(38, 38, 38) 0px 0px 0px 1px inset`
- **md:** `rgb(142, 142, 142) 0px 0px 0px 1px inset`
- **lg:** `rgba(0, 0, 0, 0.16) 0px 5px 40px 0px`
- **xl:** `rgba(0, 0, 0, 0.16) 0px 6px 20px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px`
- **shadow-5:** `rgba(0, 0, 0, 0.5) 0px -1px 8px 0px`
- **shadow-sm:** `rgb(38, 38, 38) 0px 0px 0px 1px inset`
- **shadow-md:** `rgb(142, 142, 142) 0px 0px 0px 1px inset`
- **shadow-lg:** `rgba(0, 0, 0, 0.16) 0px 5px 40px 0px`
- **shadow-xl:** `rgba(0, 0, 0, 0.16) 0px 6px 20px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px`
- **shadow-shadow-5:** `rgba(0, 0, 0, 0.5) 0px -1px 8px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (3px):** Border radius token.
- **md (8px 8px 0px):** Border radius token.
- **lg (10px 10px 0px):** Border radius token.
- **xl (50%):** Border radius token.

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
- Avoid pairing --color-dark-gray-2 on --color-dark-gray (2.64:1, Fail).
- Avoid pairing --color-dark-gray-2 on --color-dark-gray-3 (1.47:1, Fail).
- Avoid pairing --color-dark-gray-2 on --color-blue (1.1:1, Fail).
