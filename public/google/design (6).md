---
version: alpha
name: Dia
description: "Converted from UI Inspector extraction of https://www.diabrowser.com/"
colors:
  primary: "#000000"
  tertiary: "#F2FCB3"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-light-gray: "rgba(235, 235, 235, 0.7)"
  color-yellow: "#FFDC5C"
  color-white-2: "#F8F8F8"
  color-light-gray-2: "#EFEFEF"
  color-blue: "#4285F4"
  color-light-pink: "#FFACE3"
  color-light-yellow-2: "rgba(255, 241, 172, 0.5)"
  color-light-blue: "#79C9FF"
  color-blue-2: "#4A60D1"
  color-blue-3: "#5092C7"
  color-blue-4: "#3C6AFF"
  color-dark-gray: "#565656"
  color-orange: "#FBBC05"
  color-blue-5: "#1967D2"
  color-dark-green: "#188038"
  color-green: "#34A853"
  color-red: "#EA4335"
  color-light-gray-3: "#C6C6C6"
  color-pink: "#C679C4"
  color-red-2: "#FA3D1D"
  color-orange-2: "#FFB005"
  color-light-blue-2: "#E1E1FE"
  color-blue-6: "#0358F7"
typography:
  display:
    fontFamily: "ABC Oracle"
    fontSize: 96px
    fontWeight: 400
    lineHeight: 100.8px
    letterSpacing: -2.88px
  h1:
    fontFamily: "ABC Oracle"
    fontSize: 72px
    fontWeight: 400
    lineHeight: 84px
    letterSpacing: -2.88px
  h2:
    fontFamily: "ABC Oracle"
    fontSize: 54px
    fontWeight: 400
    lineHeight: 60px
    letterSpacing: -2.88px
  h3:
    fontFamily: "ABC Oracle"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 56px
    letterSpacing: -2.88px
  body-lg:
    fontFamily: "ABC Oracle"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 35px
    letterSpacing: -2.88px
  body-md:
    fontFamily: "ABC Oracle"
    fontSize: 22px
    fontWeight: 400
    lineHeight: 33px
    letterSpacing: -2.88px
  body-sm:
    fontFamily: "ABC Oracle"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 30px
    letterSpacing: -2.88px
  caption:
    fontFamily: "ABC Oracle"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 27px
    letterSpacing: -2.88px
  code:
    fontFamily: "Exposure Variable"
    fontSize: 10.4px
    fontWeight: 400
rounded:
  sm: 4px
  md: 5px
  lg: 12px
  xl: "12px 12px 0px 0px"
  2xl: 14px
  full: 16px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 238.844px
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
---

## Overview

This design system was auto-extracted from https://www.diabrowser.com/ (26 colors · 58 type tokens · 32 spacing steps · 17 breakpoints · 4 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-05-05T15:53:35.794Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **tertiary (#F2FCB3):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-light-gray (rgba(235, 235, 235, 0.7)):** Supporting token from the extracted palette.
- **color-yellow (#FFDC5C):** Supporting token from the extracted palette.
- **color-white-2 (#F8F8F8):** Supporting token from the extracted palette.
- **color-light-gray-2 (#EFEFEF):** Supporting token from the extracted palette.
- **color-blue (#4285F4):** Supporting token from the extracted palette.
- **color-light-pink (#FFACE3):** Supporting token from the extracted palette.
- **color-light-yellow-2 (rgba(255, 241, 172, 0.5)):** Supporting token from the extracted palette.
- **color-light-blue (#79C9FF):** Supporting token from the extracted palette.
- **color-blue-2 (#4A60D1):** Supporting token from the extracted palette.
- **color-blue-3 (#5092C7):** Supporting token from the extracted palette.
- **color-blue-4 (#3C6AFF):** Supporting token from the extracted palette.
- **color-dark-gray (#565656):** Supporting token from the extracted palette.
- **color-orange (#FBBC05):** Supporting token from the extracted palette.
- **color-blue-5 (#1967D2):** Supporting token from the extracted palette.
- **color-dark-green (#188038):** Supporting token from the extracted palette.
- **color-green (#34A853):** Supporting token from the extracted palette.
- **color-red (#EA4335):** Supporting token from the extracted palette.
- **color-light-gray-3 (#C6C6C6):** Supporting token from the extracted palette.
- **color-pink (#C679C4):** Supporting token from the extracted palette.
- **color-red-2 (#FA3D1D):** Supporting token from the extracted palette.
- **color-orange-2 (#FFB005):** Supporting token from the extracted palette.
- **color-light-blue-2 (#E1E1FE):** Supporting token from the extracted palette.
- **color-blue-6 (#0358F7):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Exposure Variable, system-ui, Exposure VAR, ABC Favorit Mono, ABC Oracle Triple, Family, ABC Oracle**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font ABC Oracle, 96px, weight 400.
- **h1:** font ABC Oracle, 72px, weight 400.
- **h2:** font ABC Oracle, 54px, weight 400.
- **h3:** font ABC Oracle, 48px, weight 400.
- **body-lg:** font ABC Oracle, 24px, weight 400.
- **body-md:** font ABC Oracle, 22px, weight 400.
- **body-sm:** font ABC Oracle, 20px, weight 400.
- **caption:** font ABC Oracle, 18px, weight 400.
- **code:** font Exposure Variable, 10.4px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (238.844px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (400px):** Responsive layout threshold.
- **sm (600px):** Responsive layout threshold.
- **md (700px):** Responsive layout threshold.
- **lg (768px):** Responsive layout threshold.
- **xl (800px):** Responsive layout threshold.
- **2xl (900px):** Responsive layout threshold.
- **3xl (1000px):** Responsive layout threshold.
- **bp-8 (1100px):** Responsive layout threshold.
- **bp-9 (1200px):** Responsive layout threshold.
- **bp-10 (1300px):** Responsive layout threshold.
- **bp-11 (1400px):** Responsive layout threshold.
- **bp-12 (1500px):** Responsive layout threshold.
- **bp-13 (1600px):** Responsive layout threshold.
- **bp-14 (1700px):** Responsive layout threshold.
- **bp-15 (1800px):** Responsive layout threshold.
- **bp-16 (1900px):** Responsive layout threshold.
- **bp-17 (2000px):** Responsive layout threshold.
- **breakpoint-xs (400px):** Responsive layout threshold.
- **breakpoint-sm (600px):** Responsive layout threshold.
- **breakpoint-md (700px):** Responsive layout threshold.
- **breakpoint-lg (768px):** Responsive layout threshold.
- **breakpoint-xl (800px):** Responsive layout threshold.
- **breakpoint-2xl (900px):** Responsive layout threshold.
- **breakpoint-3xl (1000px):** Responsive layout threshold.
- **breakpoint-bp-8 (1100px):** Responsive layout threshold.
- **breakpoint-bp-9 (1200px):** Responsive layout threshold.
- **breakpoint-bp-10 (1300px):** Responsive layout threshold.
- **breakpoint-bp-11 (1400px):** Responsive layout threshold.
- **breakpoint-bp-12 (1500px):** Responsive layout threshold.
- **breakpoint-bp-13 (1600px):** Responsive layout threshold.
- **breakpoint-bp-14 (1700px):** Responsive layout threshold.
- **breakpoint-bp-15 (1800px):** Responsive layout threshold.
- **breakpoint-bp-16 (1900px):** Responsive layout threshold.
- **breakpoint-bp-17 (2000px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 2px 8px 0px, rgba(0, 0, 0, 0.04) 0px 0px 2px 0px`
- **md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 8px 22px 0px, rgba(255, 255, 255, 0.6) 0px 1px 0px 0px inset`
- **lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 6px 22px 0px, rgba(255, 255, 255, 0.6) 0px 1px 0px 0px inset`
- **xl:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 6px 20px 0px, rgba(255, 255, 255, 0.6) 0px 1px 0px 0px inset`
- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 2px 8px 0px, rgba(0, 0, 0, 0.04) 0px 0px 2px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 8px 22px 0px, rgba(255, 255, 255, 0.6) 0px 1px 0px 0px inset`
- **shadow-lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 6px 22px 0px, rgba(255, 255, 255, 0.6) 0px 1px 0px 0px inset`
- **shadow-xl:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 6px 20px 0px, rgba(255, 255, 255, 0.6) 0px 1px 0px 0px inset`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (4px):** Border radius token.
- **md (5px):** Border radius token.
- **lg (12px):** Border radius token.
- **xl (12px 12px 0px 0px):** Border radius token.
- **2xl (14px):** Border radius token.
- **full (16px):** Border radius token.

## Components

Component tokens map semantic colors and shapes to reusable UI patterns.

- **button-primary:** backgroundColor {colors.tertiary}, textColor {colors.on-tertiary}, rounded {rounded.md}, padding 12px.
- **button-primary-hover:** backgroundColor {colors.tertiary}.
- **surface:** backgroundColor {colors.primary}, textColor {colors.on-primary}.

## Do's and Don'ts

- **Do** use the accent color sparingly for primary actions and active states.
- **Do** maintain high contrast between text and background tokens.
- **Don't** introduce new colors outside the extracted palette without updating the YAML tokens.
- **Don't** mix arbitrary spacing values — use the spacing scale.
