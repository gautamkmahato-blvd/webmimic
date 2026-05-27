---
version: alpha
name: "AI App Builder"
description: "Converted from UI Inspector extraction of https://lovable.dev/"
colors:
  primary: "#1C1C1C"
  secondary: "#707070"
  neutral: "#FCFBF8"
  on-primary: "#FCFBF8"
  color-black: "#000000"
  color-white-2: "#FFFFFF"
  color-light-gray-2: "#F7F4ED"
  color-dark-gray-2: "#5F5F5D"
  color-white-3: "#FAFAFA"
  color-dark-gray-3: "#2E2E2D"
  color-black-2: "#030303"
  color-light-gray: "#ECEAE4"
  color-pink: "#FF66F4"
  color-orange: "#FE7B02"
  color-light-blue: "#82BCFF"
  color-blue: "#2483FF"
  color-red: "#FF3029"
  color-blue-2: "#4B73FF"
  color-red-2: "#FF0105"
typography:
  display:
    fontFamily: "Camera Plain Variable"
    fontSize: 60px
    fontWeight: 400
    lineHeight: 66px
    letterSpacing: -1.2px
  h1:
    fontFamily: "Camera Plain Variable"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 60px
    letterSpacing: -1.2px
  h2:
    fontFamily: "Camera Plain Variable"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 52.8px
    letterSpacing: -1.2px
  h3:
    fontFamily: "Camera Plain Variable"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 48px
    letterSpacing: -1.2px
  body-lg:
    fontFamily: "Camera Plain Variable"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 39.6px
    letterSpacing: -1.2px
  body-md:
    fontFamily: "Camera Plain Variable"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 30px
    letterSpacing: -1.2px
  body-sm:
    fontFamily: "Camera Plain Variable"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 24.75px
    letterSpacing: -1.2px
  caption:
    fontFamily: "Camera Plain Variable"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: -1.2px
rounded:
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  2xl: 24px
  full: 28px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 24px
  2xl: 363.781px
components:
  surface:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  text-muted:
    textColor: "{colors.secondary}"
    typography: body-sm
---

## Overview

This design system was auto-extracted from https://lovable.dev/ (18 colors · 25 type tokens · 25 spacing steps · 7 breakpoints · 6 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-15T18:05:13.858Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#1C1C1C):** Core surface and headline color.
- **secondary (#707070):** Muted text, borders, and metadata.
- **neutral (#FCFBF8):** Primary readable text on dark surfaces.
- **on-primary (#FCFBF8):** Text and icons placed on primary surfaces.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-white-2 (#FFFFFF):** Supporting token from the extracted palette.
- **color-light-gray-2 (#F7F4ED):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#5F5F5D):** Supporting token from the extracted palette.
- **color-white-3 (#FAFAFA):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#2E2E2D):** Supporting token from the extracted palette.
- **color-black-2 (#030303):** Supporting token from the extracted palette.
- **color-light-gray (#ECEAE4):** Supporting token from the extracted palette.
- **color-pink (#FF66F4):** Supporting token from the extracted palette.
- **color-orange (#FE7B02):** Supporting token from the extracted palette.
- **color-light-blue (#82BCFF):** Supporting token from the extracted palette.
- **color-blue (#2483FF):** Supporting token from the extracted palette.
- **color-red (#FF3029):** Supporting token from the extracted palette.
- **color-blue-2 (#4B73FF):** Supporting token from the extracted palette.
- **color-red-2 (#FF0105):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Family, Camera Plain Variable**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Camera Plain Variable, 60px, weight 400.
- **h1:** font Camera Plain Variable, 48px, weight 400.
- **h2:** font Camera Plain Variable, 36px, weight 400.
- **h3:** font Camera Plain Variable, 20px, weight 400.
- **body-lg:** font Camera Plain Variable, 18px, weight 400.
- **body-md:** font Camera Plain Variable, 16px, weight 400.
- **body-sm:** font Camera Plain Variable, 15px, weight 400.
- **caption:** font Camera Plain Variable, 14px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (24px):** Layout rhythm and component padding.
- **2xl (363.781px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (600px):** Responsive layout threshold.
- **sm (640px):** Responsive layout threshold.
- **md (700px):** Responsive layout threshold.
- **lg (768px):** Responsive layout threshold.
- **xl (1024px):** Responsive layout threshold.
- **2xl (1280px):** Responsive layout threshold.
- **3xl (1536px):** Responsive layout threshold.
- **breakpoint-xs (600px):** Responsive layout threshold.
- **breakpoint-sm (640px):** Responsive layout threshold.
- **breakpoint-md (700px):** Responsive layout threshold.
- **breakpoint-lg (768px):** Responsive layout threshold.
- **breakpoint-xl (1024px):** Responsive layout threshold.
- **breakpoint-2xl (1280px):** Responsive layout threshold.
- **breakpoint-3xl (1536px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.08) 0px 0.5px 0px 0px inset, rgba(0, 0, 0, 0.16) 0px -0.5px 0px 0px inset, rgb(0, 0, 0) 0px 0px 0px 0.5px inset, rgba(255, 255, 255, 0.24) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.16) 0px -1px 0px 0px inset, rgba(0, 0, 0, 0.12) 0px 2px 2px -1px, rgba(0, 0, 0, 0.12) 0px 4px 4px -2px`
- **md:** `rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px`
- **lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0.08) 0px 0.5px 0px 0px inset, rgba(0, 0, 0, 0.16) 0px -0.5px 0px 0px inset, rgb(0, 0, 0) 0px 0px 0px 0.5px inset, rgba(255, 255, 255, 0.24) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.16) 0px -1px 0px 0px inset, rgba(0, 0, 0, 0.12) 0px 2px 2px -1px, rgba(0, 0, 0, 0.12) 0px 4px 4px -2px`
- **shadow-md:** `rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px`
- **shadow-lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (6px):** Border radius token.
- **md (8px):** Border radius token.
- **lg (12px):** Border radius token.
- **xl (16px):** Border radius token.
- **2xl (24px):** Border radius token.
- **full (28px):** Border radius token.

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
- Avoid pairing --color-dark-gray-2 on --color-dark-gray (2.66:1, Fail).
- Avoid pairing --color-white-3 on --color-white (1.01:1, Fail).
- Avoid pairing --color-white-3 on --color-white-2 (1.04:1, Fail).
