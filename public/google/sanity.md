---
version: alpha
name: "The Content Operating System for the AI era"
description: "Converted from UI Inspector extraction of https://www.sanity.io/"
colors:
  primary: "#FFFFFF"
  secondary: "#797979"
  tertiary: "#37CD8F"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-black: "#0B0B0B"
  color-dark-gray: "#212121"
  color-dark-gray-2: "#353535"
  color-orange: "#FF4100"
  color-blue-2: "#0081FF"
  color-light-gray-2: "#EDEDED"
  color-green-3: "#19D600"
  color-orange-2: "#FF5500"
  color-blue-3: "#0052EF"
  color-yellow-2: "#FFF500"
  color-dark-blue-2: "rgba(18, 25, 35, 0.2)"
  color-pink-2: "#FF00FF"
  color-light-gray: "#B9B9B9"
  color-black-2: "#000000"
  color-pink: "#F500FF"
  color-green: "#45FF00"
  color-blue: "#027FFF"
  color-light-blue: "#AFBACA"
  color-green-2: "#00FF00"
  color-dark-gray-3: "#4A4A4A"
  color-yellow: "#FFFF00"
  color-dark-green: "#007800"
  color-blue-4: "#0053EF"
  color-light-gray-3: "#D6D6D6"
  color-light-gray-4: "#D7D7D7"
  color-dark-gray-5: "#373737"
  color-dark-gray-4: "#2A2A2A"
  color-dark-blue: "#29246A"
typography:
  display:
    fontFamily: waldenburgNormal
    fontSize: 112px
    fontWeight: 500
    lineHeight: 112px
    letterSpacing: -2.88px
  h1:
    fontFamily: waldenburgNormal
    fontSize: 72px
    fontWeight: 500
    lineHeight: 108px
    letterSpacing: -2.88px
  h2:
    fontFamily: waldenburgNormal
    fontSize: 60px
    fontWeight: 500
    lineHeight: 75.6px
    letterSpacing: -2.88px
  h3:
    fontFamily: waldenburgNormal
    fontSize: 48px
    fontWeight: 500
    lineHeight: 51.84px
    letterSpacing: -2.88px
  body-lg:
    fontFamily: waldenburgNormal
    fontSize: 38px
    fontWeight: 500
    lineHeight: 48px
    letterSpacing: -2.88px
  body-md:
    fontFamily: waldenburgNormal
    fontSize: 32px
    fontWeight: 500
    lineHeight: 41.8px
    letterSpacing: -2.88px
  body-sm:
    fontFamily: waldenburgNormal
    fontSize: 24px
    fontWeight: 500
    lineHeight: 39.68px
    letterSpacing: -2.88px
  caption:
    fontFamily: waldenburgNormal
    fontSize: 20px
    fontWeight: 500
    lineHeight: 38.4px
    letterSpacing: -2.88px
  code:
    fontFamily: Helvetica
    fontSize: 11px
    fontWeight: 400
rounded:
  sm: 3px
  md: 4px
  lg: 5px
  xl: 6px
  2xl: 8px
  full: 11px
spacing:
  xs: 4px
  sm: 8px
  md: 18px
  lg: 24px
  xl: 32px
  2xl: 300.32px
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

This design system was auto-extracted from https://www.sanity.io/ (31 colors · 57 type tokens · 34 spacing steps · 14 breakpoints · 10 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-18T08:16:59.467Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#FFFFFF):** Core surface and headline color.
- **secondary (#797979):** Muted text, borders, and metadata.
- **tertiary (#37CD8F):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-black (#0B0B0B):** Supporting token from the extracted palette.
- **color-dark-gray (#212121):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#353535):** Supporting token from the extracted palette.
- **color-orange (#FF4100):** Supporting token from the extracted palette.
- **color-blue-2 (#0081FF):** Supporting token from the extracted palette.
- **color-light-gray-2 (#EDEDED):** Supporting token from the extracted palette.
- **color-green-3 (#19D600):** Supporting token from the extracted palette.
- **color-orange-2 (#FF5500):** Supporting token from the extracted palette.
- **color-blue-3 (#0052EF):** Supporting token from the extracted palette.
- **color-yellow-2 (#FFF500):** Supporting token from the extracted palette.
- **color-dark-blue-2 (rgba(18, 25, 35, 0.2)):** Supporting token from the extracted palette.
- **color-pink-2 (#FF00FF):** Supporting token from the extracted palette.
- **color-light-gray (#B9B9B9):** Supporting token from the extracted palette.
- **color-black-2 (#000000):** Supporting token from the extracted palette.
- **color-pink (#F500FF):** Supporting token from the extracted palette.
- **color-green (#45FF00):** Supporting token from the extracted palette.
- **color-blue (#027FFF):** Supporting token from the extracted palette.
- **color-light-blue (#AFBACA):** Supporting token from the extracted palette.
- **color-green-2 (#00FF00):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#4A4A4A):** Supporting token from the extracted palette.
- **color-yellow (#FFFF00):** Supporting token from the extracted palette.
- **color-dark-green (#007800):** Supporting token from the extracted palette.
- **color-blue-4 (#0053EF):** Supporting token from the extracted palette.
- **color-light-gray-3 (#D6D6D6):** Supporting token from the extracted palette.
- **color-light-gray-4 (#D7D7D7):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#373737):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#2A2A2A):** Supporting token from the extracted palette.
- **color-dark-blue (#29246A):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Helvetica, ibmPlexMono, Family, waldenburgNormal**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font waldenburgNormal, 112px, weight 500.
- **h1:** font waldenburgNormal, 72px, weight 500.
- **h2:** font waldenburgNormal, 60px, weight 500.
- **h3:** font waldenburgNormal, 48px, weight 500.
- **body-lg:** font waldenburgNormal, 38px, weight 500.
- **body-md:** font waldenburgNormal, 32px, weight 500.
- **body-sm:** font waldenburgNormal, 24px, weight 500.
- **caption:** font waldenburgNormal, 20px, weight 500.
- **code:** font Helvetica, 11px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (18px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (300.32px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (376px):** Responsive layout threshold.
- **sm (479px):** Responsive layout threshold.
- **md (480px):** Responsive layout threshold.
- **lg (719px):** Responsive layout threshold.
- **xl (720px):** Responsive layout threshold.
- **2xl (767px):** Responsive layout threshold.
- **3xl (768px):** Responsive layout threshold.
- **bp-8 (800px):** Responsive layout threshold.
- **bp-9 (959px):** Responsive layout threshold.
- **bp-10 (960px):** Responsive layout threshold.
- **bp-11 (1100px):** Responsive layout threshold.
- **bp-12 (1200px):** Responsive layout threshold.
- **bp-13 (1440px):** Responsive layout threshold.
- **bp-14 (1640px):** Responsive layout threshold.
- **breakpoint-xs (376px):** Responsive layout threshold.
- **breakpoint-sm (479px):** Responsive layout threshold.
- **breakpoint-md (480px):** Responsive layout threshold.
- **breakpoint-lg (719px):** Responsive layout threshold.
- **breakpoint-xl (720px):** Responsive layout threshold.
- **breakpoint-2xl (767px):** Responsive layout threshold.
- **breakpoint-3xl (768px):** Responsive layout threshold.
- **breakpoint-bp-8 (800px):** Responsive layout threshold.
- **breakpoint-bp-9 (959px):** Responsive layout threshold.
- **breakpoint-bp-10 (960px):** Responsive layout threshold.
- **breakpoint-bp-11 (1100px):** Responsive layout threshold.
- **breakpoint-bp-12 (1200px):** Responsive layout threshold.
- **breakpoint-bp-13 (1440px):** Responsive layout threshold.
- **breakpoint-bp-14 (1640px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(0, 82, 239) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
- **md:** `rgb(255, 255, 255) 0px 0px 0px 1px inset`
- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(0, 82, 239) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
- **shadow-md:** `rgb(255, 255, 255) 0px 0px 0px 1px inset`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (3px):** Border radius token.
- **md (4px):** Border radius token.
- **lg (5px):** Border radius token.
- **xl (6px):** Border radius token.
- **2xl (8px):** Border radius token.
- **full (11px):** Border radius token.

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
- Avoid pairing --color-light-gray on --color-white (1.96:1, Fail).
- Avoid pairing --color-light-gray on --color-orange (1.78:1, Fail).
- Avoid pairing --color-black-2 on --color-black (1.07:1, Fail).
