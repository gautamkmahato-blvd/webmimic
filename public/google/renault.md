---
version: alpha
name: "Renault India"
description: "Converted from UI Inspector extraction of https://www.renault.co.in/"
colors:
  primary: "#000000"
  secondary: "#A1A1A1"
  tertiary: "#32AE88"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-light-gray: "#F2F2F2"
  color-white-2: "#F4F4F4"
  color-dark-gray-4: "#3D3D3D"
  color-yellow: "#EFDF00"
  color-white-3: "#F9FFFA"
  color-blue-2: "#3860BE"
  color-blue-3: "#6699CC"
  color-blue: "#0000EE"
  color-dark-gray: "#656666"
  color-dark-gray-2: "#555555"
  color-dark-gray-3: "#565656"
  color-light-gray-3: "#D1D1D1"
  color-light-gray-4: "#BBBBBB"
  color-light-gray-2: "#C7C5C7"
  color-dark-blue: "rgba(50, 50, 93, 0.1)"
  color-dark-gray-5: "#656565"
  color-dark-blue-2: "#2E3644"
typography:
  display:
    fontFamily: Times
    fontSize: 40px
    fontWeight: 400
    lineHeight: 38px
    letterSpacing: 0.144px
  h1:
    fontFamily: Times
    fontSize: 32px
    fontWeight: 400
    lineHeight: 30.4px
    letterSpacing: 0.144px
  h2:
    fontFamily: Times
    fontSize: 24px
    fontWeight: 400
    lineHeight: 26.304px
    letterSpacing: 0.144px
  h3:
    fontFamily: Times
    fontSize: 21.92px
    fontWeight: 400
    lineHeight: 24.96px
    letterSpacing: 0.144px
  body-lg:
    fontFamily: Times
    fontSize: 19.2px
    fontWeight: 400
    lineHeight: 22.8px
    letterSpacing: 0.144px
  body-md:
    fontFamily: Times
    fontSize: 18px
    fontWeight: 400
    lineHeight: 22.4px
    letterSpacing: 0.144px
  body-sm:
    fontFamily: Times
    fontSize: 16px
    fontWeight: 400
    lineHeight: 20.8px
    letterSpacing: 0.144px
  caption:
    fontFamily: Times
    fontSize: 14.4px
    fontWeight: 400
    lineHeight: 19.512px
    letterSpacing: 0.144px
  code:
    fontFamily: NouvelR
    fontSize: 12px
    fontWeight: 400
rounded:
  sm: "0px 0px 2px 2px"
  md: 2px
  lg: 3px
  xl: 10px
  2xl: 17px
  full: 46px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 489.414px
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

This design system was auto-extracted from https://www.renault.co.in/ (21 colors · 39 type tokens · 22 spacing steps · 20 breakpoints · 12 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-17T07:51:02.407Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#A1A1A1):** Muted text, borders, and metadata.
- **tertiary (#32AE88):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-light-gray (#F2F2F2):** Supporting token from the extracted palette.
- **color-white-2 (#F4F4F4):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#3D3D3D):** Supporting token from the extracted palette.
- **color-yellow (#EFDF00):** Supporting token from the extracted palette.
- **color-white-3 (#F9FFFA):** Supporting token from the extracted palette.
- **color-blue-2 (#3860BE):** Supporting token from the extracted palette.
- **color-blue-3 (#6699CC):** Supporting token from the extracted palette.
- **color-blue (#0000EE):** Supporting token from the extracted palette.
- **color-dark-gray (#656666):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#555555):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#565656):** Supporting token from the extracted palette.
- **color-light-gray-3 (#D1D1D1):** Supporting token from the extracted palette.
- **color-light-gray-4 (#BBBBBB):** Supporting token from the extracted palette.
- **color-light-gray-2 (#C7C5C7):** Supporting token from the extracted palette.
- **color-dark-blue (rgba(50, 50, 93, 0.1)):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#656565):** Supporting token from the extracted palette.
- **color-dark-blue-2 (#2E3644):** Supporting token from the extracted palette.

## Typography

Primary typeface: **NouvelR, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Times, 40px, weight 400.
- **h1:** font Times, 32px, weight 400.
- **h2:** font Times, 24px, weight 400.
- **h3:** font Times, 21.92px, weight 400.
- **body-lg:** font Times, 19.2px, weight 400.
- **body-md:** font Times, 18px, weight 400.
- **body-sm:** font Times, 16px, weight 400.
- **caption:** font Times, 14.4px, weight 400.
- **code:** font NouvelR, 12px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (489.414px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (400px):** Responsive layout threshold.
- **sm (425px):** Responsive layout threshold.
- **md (426px):** Responsive layout threshold.
- **lg (530px):** Responsive layout threshold.
- **xl (550px):** Responsive layout threshold.
- **2xl (600px):** Responsive layout threshold.
- **3xl (610px):** Responsive layout threshold.
- **bp-8 (640px):** Responsive layout threshold.
- **bp-9 (669px):** Responsive layout threshold.
- **bp-10 (670px):** Responsive layout threshold.
- **bp-11 (767px):** Responsive layout threshold.
- **bp-12 (768px):** Responsive layout threshold.
- **bp-13 (769px):** Responsive layout threshold.
- **bp-14 (890px):** Responsive layout threshold.
- **bp-15 (896px):** Responsive layout threshold.
- **bp-16 (897px):** Responsive layout threshold.
- **bp-17 (1023px):** Responsive layout threshold.
- **bp-18 (1024px):** Responsive layout threshold.
- **bp-19 (1280px):** Responsive layout threshold.
- **bp-20 (1440px):** Responsive layout threshold.
- **breakpoint-xs (400px):** Responsive layout threshold.
- **breakpoint-sm (425px):** Responsive layout threshold.
- **breakpoint-md (426px):** Responsive layout threshold.
- **breakpoint-lg (530px):** Responsive layout threshold.
- **breakpoint-xl (550px):** Responsive layout threshold.
- **breakpoint-2xl (600px):** Responsive layout threshold.
- **breakpoint-3xl (610px):** Responsive layout threshold.
- **breakpoint-bp-8 (640px):** Responsive layout threshold.
- **breakpoint-bp-9 (669px):** Responsive layout threshold.
- **breakpoint-bp-10 (670px):** Responsive layout threshold.
- **breakpoint-bp-11 (767px):** Responsive layout threshold.
- **breakpoint-bp-12 (768px):** Responsive layout threshold.
- **breakpoint-bp-13 (769px):** Responsive layout threshold.
- **breakpoint-bp-14 (890px):** Responsive layout threshold.
- **breakpoint-bp-15 (896px):** Responsive layout threshold.
- **breakpoint-bp-16 (897px):** Responsive layout threshold.
- **breakpoint-bp-17 (1023px):** Responsive layout threshold.
- **breakpoint-bp-18 (1024px):** Responsive layout threshold.
- **breakpoint-bp-19 (1280px):** Responsive layout threshold.
- **breakpoint-bp-20 (1440px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.2) 0px 0px 18px 0px`
- **md:** `rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px`
- **lg:** `rgb(199, 197, 199) -3px -3px 5px -2px`
- **xl:** `rgb(199, 197, 199) 0px 0px 12px 2px`
- **shadow-5:** `rgba(0, 0, 0, 0.2) 5px 5px 8px 0px`
- **shadow-6:** `rgba(0, 0, 0, 0.2) 0px 4px 8px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0.2) 0px 0px 18px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px`
- **shadow-lg:** `rgb(199, 197, 199) -3px -3px 5px -2px`
- **shadow-xl:** `rgb(199, 197, 199) 0px 0px 12px 2px`
- **shadow-shadow-5:** `rgba(0, 0, 0, 0.2) 5px 5px 8px 0px`
- **shadow-shadow-6:** `rgba(0, 0, 0, 0.2) 0px 4px 8px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 0px 2px 2px):** Border radius token.
- **md (2px):** Border radius token.
- **lg (3px):** Border radius token.
- **xl (10px):** Border radius token.
- **2xl (17px):** Border radius token.
- **full (46px):** Border radius token.

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
- Avoid pairing --color-blue on --color-black (2.23:1, Fail).
- Avoid pairing --color-dark-gray on --color-mid-gray (2.23:1, Fail).
- Avoid pairing --color-dark-gray-2 on --color-black (2.82:1, Fail).
