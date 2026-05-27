---
version: alpha
name: Aerospike
description: "Converted from UI Inspector extraction of https://aerospike.com/"
colors:
  primary: "#000000"
  secondary: "#6C6C6C"
  tertiary: "#0097D3"
  neutral: "#212121"
  on-primary: "#212121"
  on-tertiary: "#FFFFFF"
  color-white-2: "#EEF6FF"
  color-yellow: "#F8F413"
  color-white-5: "#FBFAF8"
  color-white-6: "#F4F4F4"
  color-light-gray-3: "#ECEFF4"
  color-black-2: "rgba(14, 14, 14, 0.09)"
  color-dark-blue-8: "#0D1B32"
  color-white-7: "rgba(251, 250, 248, 0.1)"
  color-dark-gray-4: "rgba(47, 47, 47, 0.07)"
  color-blue-3: "rgba(89, 97, 126, 0.3)"
  color-light-gray: "#B4B4B4"
  color-dark-gray-2: "#1A1A1A"
  color-white-3: "#F6F8FF"
  color-dark-blue: "#0C1424"
  color-light-cyan: "#89DDFF"
  color-dark-gray-3: "#5C5C5C"
  color-white-4: "#EEFFFF"
  color-blue: "#59617E"
  color-blue-2: "#5C6475"
  color-light-blue: "#82AAFF"
  color-light-green: "#C3E88D"
  color-dark-blue-2: "#051028"
  color-dark-blue-4: "#040B1D"
  color-light-gray-2: "#D5D5D5"
  color-orange: "#7F7567"
  color-light-blue-2: "#A9D5FF"
  color-light-blue-3: "rgba(217, 234, 255, 0.68)"
  color-dark-green: "#008000"
  color-light-gray-7: "#D8D8D8"
  color-dark-blue-5: "#464E6A"
  color-light-gray-4: "#E8E8E8"
  color-light-gray-5: "#EBEBEB"
  color-light-gray-6: "#C1C3C6"
  color-mid-gray-2: "#808080"
  color-light-gray-8: "#D4D8E0"
  color-white-8: "#F7F6F2"
  color-dark-blue-9: "rgba(39, 48, 74, 0.08)"
  color-black-3: "rgba(2, 10, 27, 0.24)"
  color-mid-gray-3: "rgba(172, 171, 171, 0.3)"
  color-dark-blue-3: "#152D54"
  color-dark-blue-6: "#12305C"
  color-dark-blue-7: "#050E1D"
  color-dark-blue-10: "#132C58"
  color-dark-blue-11: "#00548B"
  color-cyan-2: "#61BFE4"
typography:
  display:
    fontFamily: "Helvetica Now Pro Display"
    fontSize: 60px
    fontWeight: 500
    lineHeight: 63px
    letterSpacing: -0.4px
  h1:
    fontFamily: "Helvetica Now Pro Display"
    fontSize: 42px
    fontWeight: 500
    lineHeight: 46px
    letterSpacing: -0.4px
  h2:
    fontFamily: "Helvetica Now Pro Display"
    fontSize: 40px
    fontWeight: 500
    lineHeight: 44.1px
    letterSpacing: -0.4px
  h3:
    fontFamily: "Helvetica Now Pro Display"
    fontSize: 32px
    fontWeight: 500
    lineHeight: 39.9px
    letterSpacing: -0.4px
  body-lg:
    fontFamily: "Helvetica Now Pro Display"
    fontSize: 30px
    fontWeight: 500
    lineHeight: 38.4px
    letterSpacing: -0.4px
  body-md:
    fontFamily: "Helvetica Now Pro Display"
    fontSize: 26px
    fontWeight: 500
    lineHeight: 35.2px
    letterSpacing: -0.4px
  body-sm:
    fontFamily: "Helvetica Now Pro Display"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 30.6px
    letterSpacing: -0.4px
  caption:
    fontFamily: "Helvetica Now Pro Display"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 28.8px
    letterSpacing: -0.4px
  code:
    fontFamily: Arial
    fontSize: 13px
    fontWeight: 400
rounded:
  sm: "0px 0px 40px 40px"
  md: 6px
  lg: 6.4px
  xl: 8px
  2xl: 10px
  full: 12px
spacing:
  xs: 4px
  sm: 8px
  md: 14px
  lg: 24px
  xl: 32px
  2xl: 331.5px
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

This design system was auto-extracted from https://aerospike.com/ (50 colors · 54 type tokens · 35 spacing steps · 22 breakpoints · 15 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-15T18:29:45.551Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#6C6C6C):** Muted text, borders, and metadata.
- **tertiary (#0097D3):** Primary accent for links, buttons, and focus states.
- **neutral (#212121):** Primary readable text on dark surfaces.
- **on-primary (#212121):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-white-2 (#EEF6FF):** Supporting token from the extracted palette.
- **color-yellow (#F8F413):** Supporting token from the extracted palette.
- **color-white-5 (#FBFAF8):** Supporting token from the extracted palette.
- **color-white-6 (#F4F4F4):** Supporting token from the extracted palette.
- **color-light-gray-3 (#ECEFF4):** Supporting token from the extracted palette.
- **color-black-2 (rgba(14, 14, 14, 0.09)):** Supporting token from the extracted palette.
- **color-dark-blue-8 (#0D1B32):** Supporting token from the extracted palette.
- **color-white-7 (rgba(251, 250, 248, 0.1)):** Supporting token from the extracted palette.
- **color-dark-gray-4 (rgba(47, 47, 47, 0.07)):** Supporting token from the extracted palette.
- **color-blue-3 (rgba(89, 97, 126, 0.3)):** Supporting token from the extracted palette.
- **color-light-gray (#B4B4B4):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#1A1A1A):** Supporting token from the extracted palette.
- **color-white-3 (#F6F8FF):** Supporting token from the extracted palette.
- **color-dark-blue (#0C1424):** Supporting token from the extracted palette.
- **color-light-cyan (#89DDFF):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#5C5C5C):** Supporting token from the extracted palette.
- **color-white-4 (#EEFFFF):** Supporting token from the extracted palette.
- **color-blue (#59617E):** Supporting token from the extracted palette.
- **color-blue-2 (#5C6475):** Supporting token from the extracted palette.
- **color-light-blue (#82AAFF):** Supporting token from the extracted palette.
- **color-light-green (#C3E88D):** Supporting token from the extracted palette.
- **color-dark-blue-2 (#051028):** Supporting token from the extracted palette.
- **color-dark-blue-4 (#040B1D):** Supporting token from the extracted palette.
- **color-light-gray-2 (#D5D5D5):** Supporting token from the extracted palette.
- **color-orange (#7F7567):** Supporting token from the extracted palette.
- **color-light-blue-2 (#A9D5FF):** Supporting token from the extracted palette.
- **color-light-blue-3 (rgba(217, 234, 255, 0.68)):** Supporting token from the extracted palette.
- **color-dark-green (#008000):** Supporting token from the extracted palette.
- **color-light-gray-7 (#D8D8D8):** Supporting token from the extracted palette.
- **color-dark-blue-5 (#464E6A):** Supporting token from the extracted palette.
- **color-light-gray-4 (#E8E8E8):** Supporting token from the extracted palette.
- **color-light-gray-5 (#EBEBEB):** Supporting token from the extracted palette.
- **color-light-gray-6 (#C1C3C6):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#808080):** Supporting token from the extracted palette.
- **color-light-gray-8 (#D4D8E0):** Supporting token from the extracted palette.
- **color-white-8 (#F7F6F2):** Supporting token from the extracted palette.
- **color-dark-blue-9 (rgba(39, 48, 74, 0.08)):** Supporting token from the extracted palette.
- **color-black-3 (rgba(2, 10, 27, 0.24)):** Supporting token from the extracted palette.
- **color-mid-gray-3 (rgba(172, 171, 171, 0.3)):** Supporting token from the extracted palette.
- **color-dark-blue-3 (#152D54):** Supporting token from the extracted palette.
- **color-dark-blue-6 (#12305C):** Supporting token from the extracted palette.
- **color-dark-blue-7 (#050E1D):** Supporting token from the extracted palette.
- **color-dark-blue-10 (#132C58):** Supporting token from the extracted palette.
- **color-dark-blue-11 (#00548B):** Supporting token from the extracted palette.
- **color-cyan-2 (#61BFE4):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Arial, Tiempos Headline, Fira Code, Family, Helvetica Now Pro Display**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Helvetica Now Pro Display, 60px, weight 500.
- **h1:** font Helvetica Now Pro Display, 42px, weight 500.
- **h2:** font Helvetica Now Pro Display, 40px, weight 500.
- **h3:** font Helvetica Now Pro Display, 32px, weight 500.
- **body-lg:** font Helvetica Now Pro Display, 30px, weight 500.
- **body-md:** font Helvetica Now Pro Display, 26px, weight 500.
- **body-sm:** font Helvetica Now Pro Display, 24px, weight 500.
- **caption:** font Helvetica Now Pro Display, 20px, weight 500.
- **code:** font Arial, 13px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (14px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (331.5px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (352px):** Responsive layout threshold.
- **sm (375px):** Responsive layout threshold.
- **md (400px):** Responsive layout threshold.
- **lg (425px):** Responsive layout threshold.
- **xl (440px):** Responsive layout threshold.
- **2xl (480px):** Responsive layout threshold.
- **3xl (555px):** Responsive layout threshold.
- **bp-8 (576px):** Responsive layout threshold.
- **bp-9 (599px):** Responsive layout threshold.
- **bp-10 (612px):** Responsive layout threshold.
- **bp-11 (614px):** Responsive layout threshold.
- **bp-12 (615px):** Responsive layout threshold.
- **bp-13 (660px):** Responsive layout threshold.
- **bp-14 (768px):** Responsive layout threshold.
- **bp-15 (845px):** Responsive layout threshold.
- **bp-16 (996px):** Responsive layout threshold.
- **bp-17 (1023px):** Responsive layout threshold.
- **bp-18 (1024px):** Responsive layout threshold.
- **bp-19 (1240px):** Responsive layout threshold.
- **bp-20 (1280px):** Responsive layout threshold.
- **bp-21 (1366px):** Responsive layout threshold.
- **bp-22 (1439px):** Responsive layout threshold.
- **breakpoint-xs (352px):** Responsive layout threshold.
- **breakpoint-sm (375px):** Responsive layout threshold.
- **breakpoint-md (400px):** Responsive layout threshold.
- **breakpoint-lg (425px):** Responsive layout threshold.
- **breakpoint-xl (440px):** Responsive layout threshold.
- **breakpoint-2xl (480px):** Responsive layout threshold.
- **breakpoint-3xl (555px):** Responsive layout threshold.
- **breakpoint-bp-8 (576px):** Responsive layout threshold.
- **breakpoint-bp-9 (599px):** Responsive layout threshold.
- **breakpoint-bp-10 (612px):** Responsive layout threshold.
- **breakpoint-bp-11 (614px):** Responsive layout threshold.
- **breakpoint-bp-12 (615px):** Responsive layout threshold.
- **breakpoint-bp-13 (660px):** Responsive layout threshold.
- **breakpoint-bp-14 (768px):** Responsive layout threshold.
- **breakpoint-bp-15 (845px):** Responsive layout threshold.
- **breakpoint-bp-16 (996px):** Responsive layout threshold.
- **breakpoint-bp-17 (1023px):** Responsive layout threshold.
- **breakpoint-bp-18 (1024px):** Responsive layout threshold.
- **breakpoint-bp-19 (1240px):** Responsive layout threshold.
- **breakpoint-bp-20 (1280px):** Responsive layout threshold.
- **breakpoint-bp-21 (1366px):** Responsive layout threshold.
- **breakpoint-bp-22 (1439px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(39, 48, 74, 0.08) 0px 10px 14px 0px`
- **md:** `rgba(2, 10, 27, 0.24) 0px 1px 2px 0px, rgba(255, 255, 255, 0.35) 0px 1px 0px 0px inset`
- **lg:** `rgba(0, 0, 0, 0.55) 0px 32px 80px 0px`
- **xl:** `rgba(0, 0, 0, 0.12) 0px 8px 24px 0px`
- **shadow-5:** `rgba(0, 0, 0, 0.25) 0px 8px 24px 0px`
- **shadow-6:** `rgba(172, 171, 171, 0.3) 0px -1px 10px 0px`
- **shadow-sm:** `rgba(39, 48, 74, 0.08) 0px 10px 14px 0px`
- **shadow-md:** `rgba(2, 10, 27, 0.24) 0px 1px 2px 0px, rgba(255, 255, 255, 0.35) 0px 1px 0px 0px inset`
- **shadow-lg:** `rgba(0, 0, 0, 0.55) 0px 32px 80px 0px`
- **shadow-xl:** `rgba(0, 0, 0, 0.12) 0px 8px 24px 0px`
- **shadow-shadow-5:** `rgba(0, 0, 0, 0.25) 0px 8px 24px 0px`
- **shadow-shadow-6:** `rgba(172, 171, 171, 0.3) 0px -1px 10px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 0px 40px 40px):** Border radius token.
- **md (6px):** Border radius token.
- **lg (6.4px):** Border radius token.
- **xl (8px):** Border radius token.
- **2xl (10px):** Border radius token.
- **full (12px):** Border radius token.

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
- Avoid pairing --color-dark-gray on --color-black (1.3:1, Fail).
- Avoid pairing --color-light-gray on --color-white (2.07:1, Fail).
- Avoid pairing --color-light-gray on --color-white-2 (1.9:1, Fail).
