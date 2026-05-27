---
version: alpha
name: FedEx
description: "Converted from UI Inspector extraction of https://www.fedex.com/en-in/home.html"
colors:
  primary: "#FFFFFF"
  secondary: "#808080"
  tertiary: "#007AB7"
  neutral: "#333333"
  on-primary: "#333333"
  on-tertiary: "#FFFFFF"
  color-dark-purple: "#4D148C"
  color-white-2: "#FAFAFA"
  color-orange: "#FF6200"
  color-light-gray: "#F2F2F2"
  color-black: "#000000"
  color-red: "#DE002E"
  color-mid-gray-2: "#777777"
  color-dark-gray-3: "#646464"
  color-dark-gray-2: "rgba(89, 89, 91, 0.5)"
  color-mid-gray-3: "#8E8E8E"
typography:
  display:
    fontFamily: Times
    fontSize: 44px
    fontWeight: 500
    lineHeight: 66px
    letterSpacing: -0.4px
  h1:
    fontFamily: Times
    fontSize: 40px
    fontWeight: 500
    lineHeight: 52px
    letterSpacing: -0.4px
  h2:
    fontFamily: Times
    fontSize: 32px
    fontWeight: 500
    lineHeight: 41.6px
    letterSpacing: -0.4px
  h3:
    fontFamily: Times
    fontSize: 30px
    fontWeight: 500
    lineHeight: 39px
    letterSpacing: -0.4px
  body-lg:
    fontFamily: Times
    fontSize: 24px
    fontWeight: 500
    lineHeight: 34.5px
    letterSpacing: -0.4px
  body-md:
    fontFamily: Times
    fontSize: 22px
    fontWeight: 500
    lineHeight: 31.2px
    letterSpacing: -0.4px
  body-sm:
    fontFamily: Times
    fontSize: 20px
    fontWeight: 500
    lineHeight: 30px
    letterSpacing: -0.4px
  caption:
    fontFamily: Times
    fontSize: 19px
    fontWeight: 500
    lineHeight: 28.6px
    letterSpacing: -0.4px
  code:
    fontFamily: FedExSans
    fontSize: 14px
    fontWeight: 400
rounded:
  sm: 40px
  md: "40px 0px 0px 40px"
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 81.5px
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

This design system was auto-extracted from https://www.fedex.com/en-in/home.html (14 colors · 41 type tokens · 28 spacing steps · 26 breakpoints · 7 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-13T17:22:44.210Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#FFFFFF):** Core surface and headline color.
- **secondary (#808080):** Muted text, borders, and metadata.
- **tertiary (#007AB7):** Primary accent for links, buttons, and focus states.
- **neutral (#333333):** Primary readable text on dark surfaces.
- **on-primary (#333333):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-dark-purple (#4D148C):** Supporting token from the extracted palette.
- **color-white-2 (#FAFAFA):** Supporting token from the extracted palette.
- **color-orange (#FF6200):** Supporting token from the extracted palette.
- **color-light-gray (#F2F2F2):** Supporting token from the extracted palette.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-red (#DE002E):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#777777):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#646464):** Supporting token from the extracted palette.
- **color-dark-gray-2 (rgba(89, 89, 91, 0.5)):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#8E8E8E):** Supporting token from the extracted palette.

## Typography

Primary typeface: **FedExSans, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Times, 44px, weight 500.
- **h1:** font Times, 40px, weight 500.
- **h2:** font Times, 32px, weight 500.
- **h3:** font Times, 30px, weight 500.
- **body-lg:** font Times, 24px, weight 500.
- **body-md:** font Times, 22px, weight 500.
- **body-sm:** font Times, 20px, weight 500.
- **caption:** font Times, 19px, weight 500.
- **code:** font FedExSans, 14px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (81.5px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (320px):** Responsive layout threshold.
- **sm (350px):** Responsive layout threshold.
- **md (425px):** Responsive layout threshold.
- **lg (426px):** Responsive layout threshold.
- **xl (480px):** Responsive layout threshold.
- **2xl (499px):** Responsive layout threshold.
- **3xl (500px):** Responsive layout threshold.
- **bp-8 (600px):** Responsive layout threshold.
- **bp-9 (663px):** Responsive layout threshold.
- **bp-10 (664px):** Responsive layout threshold.
- **bp-11 (767px):** Responsive layout threshold.
- **bp-12 (768px):** Responsive layout threshold.
- **bp-13 (769px):** Responsive layout threshold.
- **bp-14 (800px):** Responsive layout threshold.
- **bp-15 (989px):** Responsive layout threshold.
- **bp-16 (991px):** Responsive layout threshold.
- **bp-17 (992px):** Responsive layout threshold.
- **bp-18 (993px):** Responsive layout threshold.
- **bp-19 (1000px):** Responsive layout threshold.
- **bp-20 (1023px):** Responsive layout threshold.
- **bp-21 (1024px):** Responsive layout threshold.
- **bp-22 (1100px):** Responsive layout threshold.
- **bp-23 (1199px):** Responsive layout threshold.
- **bp-24 (1200px):** Responsive layout threshold.
- **bp-25 (1300px):** Responsive layout threshold.
- **bp-26 (1439px):** Responsive layout threshold.
- **breakpoint-xs (320px):** Responsive layout threshold.
- **breakpoint-sm (350px):** Responsive layout threshold.
- **breakpoint-md (425px):** Responsive layout threshold.
- **breakpoint-lg (426px):** Responsive layout threshold.
- **breakpoint-xl (480px):** Responsive layout threshold.
- **breakpoint-2xl (499px):** Responsive layout threshold.
- **breakpoint-3xl (500px):** Responsive layout threshold.
- **breakpoint-bp-8 (600px):** Responsive layout threshold.
- **breakpoint-bp-9 (663px):** Responsive layout threshold.
- **breakpoint-bp-10 (664px):** Responsive layout threshold.
- **breakpoint-bp-11 (767px):** Responsive layout threshold.
- **breakpoint-bp-12 (768px):** Responsive layout threshold.
- **breakpoint-bp-13 (769px):** Responsive layout threshold.
- **breakpoint-bp-14 (800px):** Responsive layout threshold.
- **breakpoint-bp-15 (989px):** Responsive layout threshold.
- **breakpoint-bp-16 (991px):** Responsive layout threshold.
- **breakpoint-bp-17 (992px):** Responsive layout threshold.
- **breakpoint-bp-18 (993px):** Responsive layout threshold.
- **breakpoint-bp-19 (1000px):** Responsive layout threshold.
- **breakpoint-bp-20 (1023px):** Responsive layout threshold.
- **breakpoint-bp-21 (1024px):** Responsive layout threshold.
- **breakpoint-bp-22 (1100px):** Responsive layout threshold.
- **breakpoint-bp-23 (1199px):** Responsive layout threshold.
- **breakpoint-bp-24 (1200px):** Responsive layout threshold.
- **breakpoint-bp-25 (1300px):** Responsive layout threshold.
- **breakpoint-bp-26 (1439px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.5) 0px 5px 15px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0.5) 0px 5px 15px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (40px):** Border radius token.
- **md (40px 0px 0px 40px):** Border radius token.

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
- Avoid pairing --color-dark-gray on --color-dark-purple (1.08:1, Fail).
- Avoid pairing --color-black on --color-dark-purple (1.79:1, Fail).
- Avoid pairing --color-cyan on --color-dark-purple (2.49:1, Fail).
