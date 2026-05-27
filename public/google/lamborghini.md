---
version: alpha
name: "Automobili Lamborghini - Official Website"
description: "Converted from UI Inspector extraction of https://www.lamborghini.com/en-en"
colors:
  primary: "#000000"
  secondary: "#969696"
  tertiary: "#29ABE2"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-dark-gray: "#202020"
  color-dark-gray-3: "#181818"
  color-mid-gray-2: "#7D7D7D"
  color-dark-blue: "#27455C"
  color-dark-yellow: "#917300"
  color-white-3: "#F8F8F8"
  color-yellow: "#FFC000"
  color-light-gray: "#F2F1F1"
  color-dark-gray-9: "#525252"
  color-dark-gray-10: "#424242"
  color-dark-gray-11: "#666666"
  color-light-gray-4: "#E6E6E6"
  color-white-4: "#F9FFFA"
  color-blue: "#3860BE"
  color-white-5: "#F4F4F4"
  color-white-2: "#F5F5F5"
  color-dark-gray-2: "#313131"
  color-dark-gray-4: "#555555"
  color-dark-gray-6: "#494949"
  color-dark-gray-7: "#2F2F2F"
  color-dark-gray-8: "#656565"
  color-orange: "#FFCE3E"
  color-mid-gray-3: "#696969"
  color-light-gray-2: "#DDDDDD"
  color-cyan-2: "#32AE88"
  color-light-gray-5: "#C1C1C1"
  color-light-gray-6: "#D8D8D8"
  color-light-gray-7: "#D1D1D1"
  color-light-gray-8: "#BBBBBB"
  color-light-gray-3: "#C7C5C7"
  color-mid-gray-4: "#808080"
  color-mid-gray-5: "#999999"
  color-dark-blue-2: "#2E3644"
  color-dark-gray-5: "#333333"
typography:
  display:
    fontFamily: sans-serif
    fontSize: 120px
    fontWeight: 500
    lineHeight: 110px
    letterSpacing: -0.36px
  h1:
    fontFamily: sans-serif
    fontSize: 80px
    fontWeight: 500
    lineHeight: 90px
    letterSpacing: -0.36px
  h2:
    fontFamily: sans-serif
    fontSize: 54px
    fontWeight: 500
    lineHeight: 70px
    letterSpacing: -0.36px
  h3:
    fontFamily: sans-serif
    fontSize: 40px
    fontWeight: 500
    lineHeight: 64px
    letterSpacing: -0.36px
  body-lg:
    fontFamily: sans-serif
    fontSize: 27px
    fontWeight: 500
    lineHeight: 46px
    letterSpacing: -0.36px
  body-md:
    fontFamily: sans-serif
    fontSize: 18px
    fontWeight: 500
    lineHeight: 40px
    letterSpacing: -0.36px
  body-sm:
    fontFamily: sans-serif
    fontSize: 17px
    fontWeight: 500
    lineHeight: 37px
    letterSpacing: -0.36px
  caption:
    fontFamily: sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: -0.36px
  code:
    fontFamily: LamboType
    fontSize: 10px
    fontWeight: 400
rounded:
  sm: 1px
  md: 2px
  lg: 2.5px
  xl: 3px
  2xl: 17px
  full: 20px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 439.5px
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

This design system was auto-extracted from https://www.lamborghini.com/en-en (38 colors · 57 type tokens · 20 spacing steps · 25 breakpoints · 13 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-15T18:03:24.270Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#969696):** Muted text, borders, and metadata.
- **tertiary (#29ABE2):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-dark-gray (#202020):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#181818):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#7D7D7D):** Supporting token from the extracted palette.
- **color-dark-blue (#27455C):** Supporting token from the extracted palette.
- **color-dark-yellow (#917300):** Supporting token from the extracted palette.
- **color-white-3 (#F8F8F8):** Supporting token from the extracted palette.
- **color-yellow (#FFC000):** Supporting token from the extracted palette.
- **color-light-gray (#F2F1F1):** Supporting token from the extracted palette.
- **color-dark-gray-9 (#525252):** Supporting token from the extracted palette.
- **color-dark-gray-10 (#424242):** Supporting token from the extracted palette.
- **color-dark-gray-11 (#666666):** Supporting token from the extracted palette.
- **color-light-gray-4 (#E6E6E6):** Supporting token from the extracted palette.
- **color-white-4 (#F9FFFA):** Supporting token from the extracted palette.
- **color-blue (#3860BE):** Supporting token from the extracted palette.
- **color-white-5 (#F4F4F4):** Supporting token from the extracted palette.
- **color-white-2 (#F5F5F5):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#313131):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#555555):** Supporting token from the extracted palette.
- **color-dark-gray-6 (#494949):** Supporting token from the extracted palette.
- **color-dark-gray-7 (#2F2F2F):** Supporting token from the extracted palette.
- **color-dark-gray-8 (#656565):** Supporting token from the extracted palette.
- **color-orange (#FFCE3E):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#696969):** Supporting token from the extracted palette.
- **color-light-gray-2 (#DDDDDD):** Supporting token from the extracted palette.
- **color-cyan-2 (#32AE88):** Supporting token from the extracted palette.
- **color-light-gray-5 (#C1C1C1):** Supporting token from the extracted palette.
- **color-light-gray-6 (#D8D8D8):** Supporting token from the extracted palette.
- **color-light-gray-7 (#D1D1D1):** Supporting token from the extracted palette.
- **color-light-gray-8 (#BBBBBB):** Supporting token from the extracted palette.
- **color-light-gray-3 (#C7C5C7):** Supporting token from the extracted palette.
- **color-mid-gray-4 (#808080):** Supporting token from the extracted palette.
- **color-mid-gray-5 (#999999):** Supporting token from the extracted palette.
- **color-dark-blue-2 (#2E3644):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#333333):** Supporting token from the extracted palette.

## Typography

Primary typeface: **LamboType, Open Sans, Family, sans-serif**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font sans-serif, 120px, weight 500.
- **h1:** font sans-serif, 80px, weight 500.
- **h2:** font sans-serif, 54px, weight 500.
- **h3:** font sans-serif, 40px, weight 500.
- **body-lg:** font sans-serif, 27px, weight 500.
- **body-md:** font sans-serif, 18px, weight 500.
- **body-sm:** font sans-serif, 17px, weight 500.
- **caption:** font sans-serif, 16px, weight 500.
- **code:** font LamboType, 10px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (439.5px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (400px):** Responsive layout threshold.
- **sm (425px):** Responsive layout threshold.
- **md (426px):** Responsive layout threshold.
- **lg (450px):** Responsive layout threshold.
- **xl (476px):** Responsive layout threshold.
- **2xl (530px):** Responsive layout threshold.
- **3xl (550px):** Responsive layout threshold.
- **bp-8 (575.98px):** Responsive layout threshold.
- **bp-9 (576px):** Responsive layout threshold.
- **bp-10 (600px):** Responsive layout threshold.
- **bp-11 (767px):** Responsive layout threshold.
- **bp-12 (767.98px):** Responsive layout threshold.
- **bp-13 (768px):** Responsive layout threshold.
- **bp-14 (769px):** Responsive layout threshold.
- **bp-15 (890px):** Responsive layout threshold.
- **bp-16 (896px):** Responsive layout threshold.
- **bp-17 (897px):** Responsive layout threshold.
- **bp-18 (991.98px):** Responsive layout threshold.
- **bp-19 (992px):** Responsive layout threshold.
- **bp-20 (1023px):** Responsive layout threshold.
- **bp-21 (1024px):** Responsive layout threshold.
- **bp-22 (1199.98px):** Responsive layout threshold.
- **bp-23 (1200px):** Responsive layout threshold.
- **bp-24 (1280px):** Responsive layout threshold.
- **bp-25 (1440px):** Responsive layout threshold.
- **breakpoint-xs (400px):** Responsive layout threshold.
- **breakpoint-sm (425px):** Responsive layout threshold.
- **breakpoint-md (426px):** Responsive layout threshold.
- **breakpoint-lg (450px):** Responsive layout threshold.
- **breakpoint-xl (476px):** Responsive layout threshold.
- **breakpoint-2xl (530px):** Responsive layout threshold.
- **breakpoint-3xl (550px):** Responsive layout threshold.
- **breakpoint-bp-8 (575.98px):** Responsive layout threshold.
- **breakpoint-bp-9 (576px):** Responsive layout threshold.
- **breakpoint-bp-10 (600px):** Responsive layout threshold.
- **breakpoint-bp-11 (767px):** Responsive layout threshold.
- **breakpoint-bp-12 (767.98px):** Responsive layout threshold.
- **breakpoint-bp-13 (768px):** Responsive layout threshold.
- **breakpoint-bp-14 (769px):** Responsive layout threshold.
- **breakpoint-bp-15 (890px):** Responsive layout threshold.
- **breakpoint-bp-16 (896px):** Responsive layout threshold.
- **breakpoint-bp-17 (897px):** Responsive layout threshold.
- **breakpoint-bp-18 (991.98px):** Responsive layout threshold.
- **breakpoint-bp-19 (992px):** Responsive layout threshold.
- **breakpoint-bp-20 (1023px):** Responsive layout threshold.
- **breakpoint-bp-21 (1024px):** Responsive layout threshold.
- **breakpoint-bp-22 (1199.98px):** Responsive layout threshold.
- **breakpoint-bp-23 (1200px):** Responsive layout threshold.
- **breakpoint-bp-24 (1280px):** Responsive layout threshold.
- **breakpoint-bp-25 (1440px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgb(128, 128, 128) 0px 0px 5px 0px`
- **md:** `rgba(0, 0, 0, 0.2) 0px 0px 18px 0px`
- **lg:** `rgb(153, 153, 153) 0px 2px 10px -3px`
- **xl:** `rgb(199, 197, 199) -3px -3px 5px -2px`
- **shadow-5:** `rgb(199, 197, 199) 0px 0px 12px 2px`
- **shadow-sm:** `rgb(128, 128, 128) 0px 0px 5px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0.2) 0px 0px 18px 0px`
- **shadow-lg:** `rgb(153, 153, 153) 0px 2px 10px -3px`
- **shadow-xl:** `rgb(199, 197, 199) -3px -3px 5px -2px`
- **shadow-shadow-5:** `rgb(199, 197, 199) 0px 0px 12px 2px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (1px):** Border radius token.
- **md (2px):** Border radius token.
- **lg (2.5px):** Border radius token.
- **xl (3px):** Border radius token.
- **2xl (17px):** Border radius token.
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
- Avoid pairing --color-white-2 on --color-white (1.09:1, Fail).
- Avoid pairing --color-white-2 on --color-mid-gray (2.71:1, Fail).
- Avoid pairing --color-dark-gray-2 on --color-black (1.61:1, Fail).
