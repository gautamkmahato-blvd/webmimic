---
version: alpha
name: "Pinterest - India"
description: "Converted from UI Inspector extraction of https://in.pinterest.com/"
colors:
  primary: "#000000"
  secondary: "#91918C"
  tertiary: "#2AA788"
  neutral: "#211922"
  on-primary: "#211922"
  on-tertiary: "#FFFFFF"
  color-red: "#E60023"
  color-red-2: "#FA5F2E"
  color-light-gray: "#E0E0D9"
  color-light-gray-2: "#E5E5E0"
  color-pink: "#C856C8"
  color-light-yellow: "#FFFD92"
  color-light-gray-3: "rgba(224, 224, 217, 0.26)"
  color-dark-gray-3: "rgba(36, 36, 33, 0.5)"
  color-dark-red: "#9C0343"
  color-dark-gray-2: "#62625B"
  color-blue: "#2B48D4"
  color-blue-2: "#9270D7"
  color-blue-3: "#526AE0"
  color-light-gray-4: "#C1C1C1"
  color-mid-gray-2: "#808080"
  color-white-2: "#F6F6F3"
typography:
  display:
    fontFamily: -apple-system
    fontSize: 70px
    fontWeight: 500
    lineHeight: 50px
    letterSpacing: -1.2px
  h1:
    fontFamily: -apple-system
    fontSize: 50px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: -1.2px
  h2:
    fontFamily: -apple-system
    fontSize: 38px
    fontWeight: 500
    lineHeight: 22.4px
    letterSpacing: -1.2px
  h3:
    fontFamily: -apple-system
    fontSize: 28px
    fontWeight: 500
    lineHeight: 19.6px
    letterSpacing: -1.2px
  body-lg:
    fontFamily: -apple-system
    fontSize: 20px
    fontWeight: 500
    lineHeight: 18px
    letterSpacing: -1.2px
  body-md:
    fontFamily: -apple-system
    fontSize: 16px
    fontWeight: 500
    lineHeight: 50px
    letterSpacing: -1.2px
  body-sm:
    fontFamily: -apple-system
    fontSize: 14px
    fontWeight: 500
    lineHeight: 50px
    letterSpacing: -1.2px
  caption:
    fontFamily: -apple-system
    fontSize: 12px
    fontWeight: 500
    lineHeight: 50px
    letterSpacing: -1.2px
  code:
    fontFamily: "Pin Sans"
    fontSize: 16px
    fontWeight: 400
rounded:
  sm: "0px 0px 32px 32px"
  md: 2px
  lg: 8px
  xl: 12px
  2xl: 16px
  full: 20px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 343.523px
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

This design system was auto-extracted from https://in.pinterest.com/ (21 colors · 21 type tokens · 23 spacing steps · 7 breakpoints · 6 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-17T07:44:39.941Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#91918C):** Muted text, borders, and metadata.
- **tertiary (#2AA788):** Primary accent for links, buttons, and focus states.
- **neutral (#211922):** Primary readable text on dark surfaces.
- **on-primary (#211922):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-red (#E60023):** Supporting token from the extracted palette.
- **color-red-2 (#FA5F2E):** Supporting token from the extracted palette.
- **color-light-gray (#E0E0D9):** Supporting token from the extracted palette.
- **color-light-gray-2 (#E5E5E0):** Supporting token from the extracted palette.
- **color-pink (#C856C8):** Supporting token from the extracted palette.
- **color-light-yellow (#FFFD92):** Supporting token from the extracted palette.
- **color-light-gray-3 (rgba(224, 224, 217, 0.26)):** Supporting token from the extracted palette.
- **color-dark-gray-3 (rgba(36, 36, 33, 0.5)):** Supporting token from the extracted palette.
- **color-dark-red (#9C0343):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#62625B):** Supporting token from the extracted palette.
- **color-blue (#2B48D4):** Supporting token from the extracted palette.
- **color-blue-2 (#9270D7):** Supporting token from the extracted palette.
- **color-blue-3 (#526AE0):** Supporting token from the extracted palette.
- **color-light-gray-4 (#C1C1C1):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#808080):** Supporting token from the extracted palette.
- **color-white-2 (#F6F6F3):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Pin Sans, Family, -apple-system**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font -apple-system, 70px, weight 500.
- **h1:** font -apple-system, 50px, weight 500.
- **h2:** font -apple-system, 38px, weight 500.
- **h3:** font -apple-system, 28px, weight 500.
- **body-lg:** font -apple-system, 20px, weight 500.
- **body-md:** font -apple-system, 16px, weight 500.
- **body-sm:** font -apple-system, 14px, weight 500.
- **caption:** font -apple-system, 12px, weight 500.
- **code:** font Pin Sans, 16px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (343.523px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (576px):** Responsive layout threshold.
- **sm (768px):** Responsive layout threshold.
- **md (890px):** Responsive layout threshold.
- **lg (1312px):** Responsive layout threshold.
- **xl (1440px):** Responsive layout threshold.
- **2xl (1680px):** Responsive layout threshold.
- **3xl (2048px):** Responsive layout threshold.
- **breakpoint-xs (576px):** Responsive layout threshold.
- **breakpoint-sm (768px):** Responsive layout threshold.
- **breakpoint-md (890px):** Responsive layout threshold.
- **breakpoint-lg (1312px):** Responsive layout threshold.
- **breakpoint-xl (1440px):** Responsive layout threshold.
- **breakpoint-2xl (1680px):** Responsive layout threshold.
- **breakpoint-3xl (2048px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.2) 0px 0.5px 3px 0px`
- **md:** `rgba(0, 0, 0, 0.45) 0px 2px 10px 0px`
- **lg:** `rgb(128, 128, 128) 0px 0px 5px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0.2) 0px 0.5px 3px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0.45) 0px 2px 10px 0px`
- **shadow-lg:** `rgb(128, 128, 128) 0px 0px 5px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 0px 32px 32px):** Border radius token.
- **md (2px):** Border radius token.
- **lg (8px):** Border radius token.
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
- Avoid pairing --color-dark-gray on --color-black (1.23:1, Fail).
- Avoid pairing --color-dark-gray-2 on --color-red (1.28:1, Fail).
- Avoid pairing --color-dark-gray-2 on --color-red-2 (1.97:1, Fail).
