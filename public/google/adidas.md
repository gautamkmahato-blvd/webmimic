---
version: alpha
name: "adidas India Official Website"
description: "Converted from UI Inspector extraction of https://www.adidas.co.in/"
colors:
  primary: "#000000"
  secondary: "#767677"
  tertiary: "#408267"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-light-gray: "#ECEFF1"
  color-light-gray-3: "#E9ECEF"
  color-white-2: "#F9F7F6"
  color-red: "#E32B2B"
  color-mid-gray-2: "#808080"
  color-light-gray-2: "#D3D7DA"
  color-mid-gray-3: "#929396"
  color-dark-gray: "#363333"
  color-cyan: "#69C9D0"
  color-blue: "#3175DE"
  color-orange: "#F9B900"
  color-dark-green: "#00AC37"
  color-red-2: "#EA2C35"
  color-blue-2: "#0286CD"
  color-blue-3: "#1877F2"
  color-blue-4: "#4285F4"
  color-green: "#34A853"
  color-orange-2: "#FBBC05"
  color-red-3: "#EA4335"
  color-red-4: "#EE1D52"
  color-blue-5: "#1DA1F2"
  color-blue-6: "#4680C2"
  color-dark-purple: "#400090"
typography:
  display:
    fontFamily: Times
    fontSize: 38px
    fontWeight: 400
    lineHeight: 40px
    letterSpacing: 3px
  h1:
    fontFamily: Times
    fontSize: 30px
    fontWeight: 400
    lineHeight: 32px
    letterSpacing: 3px
  h2:
    fontFamily: Times
    fontSize: 24px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 3px
  h3:
    fontFamily: Times
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 3px
  body-lg:
    fontFamily: Times
    fontSize: 14px
    fontWeight: 400
    lineHeight: 22px
    letterSpacing: 3px
  body-md:
    fontFamily: Times
    fontSize: 12px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 3px
  body-sm:
    fontFamily: Times
    fontSize: 10px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 3px
  code:
    fontFamily: AdihausDIN
    fontSize: 14px
    fontWeight: 400
rounded:
  sm: 5px
  md: "50%"
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 64px
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

This design system was auto-extracted from https://www.adidas.co.in/ (27 colors · 21 type tokens · 18 spacing steps · 26 breakpoints · 5 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-17T07:39:53.406Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#767677):** Muted text, borders, and metadata.
- **tertiary (#408267):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-light-gray (#ECEFF1):** Supporting token from the extracted palette.
- **color-light-gray-3 (#E9ECEF):** Supporting token from the extracted palette.
- **color-white-2 (#F9F7F6):** Supporting token from the extracted palette.
- **color-red (#E32B2B):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#808080):** Supporting token from the extracted palette.
- **color-light-gray-2 (#D3D7DA):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#929396):** Supporting token from the extracted palette.
- **color-dark-gray (#363333):** Supporting token from the extracted palette.
- **color-cyan (#69C9D0):** Supporting token from the extracted palette.
- **color-blue (#3175DE):** Supporting token from the extracted palette.
- **color-orange (#F9B900):** Supporting token from the extracted palette.
- **color-dark-green (#00AC37):** Supporting token from the extracted palette.
- **color-red-2 (#EA2C35):** Supporting token from the extracted palette.
- **color-blue-2 (#0286CD):** Supporting token from the extracted palette.
- **color-blue-3 (#1877F2):** Supporting token from the extracted palette.
- **color-blue-4 (#4285F4):** Supporting token from the extracted palette.
- **color-green (#34A853):** Supporting token from the extracted palette.
- **color-orange-2 (#FBBC05):** Supporting token from the extracted palette.
- **color-red-3 (#EA4335):** Supporting token from the extracted palette.
- **color-red-4 (#EE1D52):** Supporting token from the extracted palette.
- **color-blue-5 (#1DA1F2):** Supporting token from the extracted palette.
- **color-blue-6 (#4680C2):** Supporting token from the extracted palette.
- **color-dark-purple (#400090):** Supporting token from the extracted palette.

## Typography

Primary typeface: **AdihausDIN, adidasFG, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Times, 38px, weight 400.
- **h1:** font Times, 30px, weight 400.
- **h2:** font Times, 24px, weight 400.
- **h3:** font Times, 16px, weight 400.
- **body-lg:** font Times, 14px, weight 400.
- **body-md:** font Times, 12px, weight 400.
- **body-sm:** font Times, 10px, weight 400.
- **code:** font AdihausDIN, 14px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (64px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (280px):** Responsive layout threshold.
- **sm (320px):** Responsive layout threshold.
- **md (375px):** Responsive layout threshold.
- **lg (389px):** Responsive layout threshold.
- **xl (390px):** Responsive layout threshold.
- **2xl (479px):** Responsive layout threshold.
- **3xl (480px):** Responsive layout threshold.
- **bp-8 (575px):** Responsive layout threshold.
- **bp-9 (599px):** Responsive layout threshold.
- **bp-10 (600px):** Responsive layout threshold.
- **bp-11 (767px):** Responsive layout threshold.
- **bp-12 (768px):** Responsive layout threshold.
- **bp-13 (780px):** Responsive layout threshold.
- **bp-14 (786px):** Responsive layout threshold.
- **bp-15 (959px):** Responsive layout threshold.
- **bp-16 (960px):** Responsive layout threshold.
- **bp-17 (991px):** Responsive layout threshold.
- **bp-18 (1024px):** Responsive layout threshold.
- **bp-19 (1200px):** Responsive layout threshold.
- **bp-20 (1279px):** Responsive layout threshold.
- **bp-21 (1280px):** Responsive layout threshold.
- **bp-22 (1366px):** Responsive layout threshold.
- **bp-23 (1440px):** Responsive layout threshold.
- **bp-24 (1599px):** Responsive layout threshold.
- **bp-25 (1600px):** Responsive layout threshold.
- **bp-26 (1920px):** Responsive layout threshold.
- **breakpoint-xs (280px):** Responsive layout threshold.
- **breakpoint-sm (320px):** Responsive layout threshold.
- **breakpoint-md (375px):** Responsive layout threshold.
- **breakpoint-lg (389px):** Responsive layout threshold.
- **breakpoint-xl (390px):** Responsive layout threshold.
- **breakpoint-2xl (479px):** Responsive layout threshold.
- **breakpoint-3xl (480px):** Responsive layout threshold.
- **breakpoint-bp-8 (575px):** Responsive layout threshold.
- **breakpoint-bp-9 (599px):** Responsive layout threshold.
- **breakpoint-bp-10 (600px):** Responsive layout threshold.
- **breakpoint-bp-11 (767px):** Responsive layout threshold.
- **breakpoint-bp-12 (768px):** Responsive layout threshold.
- **breakpoint-bp-13 (780px):** Responsive layout threshold.
- **breakpoint-bp-14 (786px):** Responsive layout threshold.
- **breakpoint-bp-15 (959px):** Responsive layout threshold.
- **breakpoint-bp-16 (960px):** Responsive layout threshold.
- **breakpoint-bp-17 (991px):** Responsive layout threshold.
- **breakpoint-bp-18 (1024px):** Responsive layout threshold.
- **breakpoint-bp-19 (1200px):** Responsive layout threshold.
- **breakpoint-bp-20 (1279px):** Responsive layout threshold.
- **breakpoint-bp-21 (1280px):** Responsive layout threshold.
- **breakpoint-bp-22 (1366px):** Responsive layout threshold.
- **breakpoint-bp-23 (1440px):** Responsive layout threshold.
- **breakpoint-bp-24 (1599px):** Responsive layout threshold.
- **breakpoint-bp-25 (1600px):** Responsive layout threshold.
- **breakpoint-bp-26 (1920px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgb(128, 128, 128) 0px 0px 10px 0px`
- **shadow-sm:** `rgb(128, 128, 128) 0px 0px 10px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (5px):** Border radius token.
- **md (50%):** Border radius token.

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
- Avoid pairing --color-mid-gray on --color-cyan-2 (1:1, Fail).
- Avoid pairing --color-red on --color-cyan-2 (1.01:1, Fail).
- Avoid pairing --color-mid-gray-2 on --color-cyan-2 (1.15:1, Fail).
