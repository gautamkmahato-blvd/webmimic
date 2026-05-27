---
version: alpha
name: "World Leader in Artificial Intelligence Computing"
description: "Converted from UI Inspector extraction of https://www.nvidia.com/en-in/"
colors:
  primary: "#000000"
  secondary: "#999999"
  tertiary: "#32AE88"
  neutral: "#666666"
  on-primary: "#666666"
  on-tertiary: "#FFFFFF"
  color-light-gray: "#EEEEEE"
  color-dark-gray-3: "#1A1A1A"
  color-green: "#76B900"
  color-light-gray-2: "#CCCCCC"
  color-dark-blue: "#27455C"
  color-white-2: "#F7F7F7"
  color-dark-green: "#134D00"
  color-dark-green-2: "#6AA700"
  color-light-gray-4: "#EFEFEF"
  color-white-3: "#F9FFFA"
  color-white-4: "#F4F4F4"
  color-dark-gray-2: "#222222"
  color-dark-gray-4: "#111111"
  color-dark-gray-5: "#555555"
  color-light-green: "#E2FF8C"
  color-dark-gray-7: "#656565"
  color-dark-gray-8: "#333333"
  color-mid-gray-2: "#696969"
  color-blue: "#3860BE"
  color-dark-gray-6: "#5E5E5E"
  color-mid-gray-3: "#A7A7A7"
  color-light-gray-5: "#D8D8D8"
  color-mid-gray-4: "#707070"
  color-light-gray-3: "#C7C5C7"
  color-green-2: "#74B71B"
  color-dark-blue-2: "#2E3644"
typography:
  display:
    fontFamily: sans-serif
    fontSize: 36px
    fontWeight: 500
    lineHeight: 45px
    letterSpacing: 0.16px
  h1:
    fontFamily: sans-serif
    fontSize: 28px
    fontWeight: 500
    lineHeight: 37px
    letterSpacing: 0.16px
  h2:
    fontFamily: sans-serif
    fontSize: 24px
    fontWeight: 500
    lineHeight: 35px
    letterSpacing: 0.16px
  h3:
    fontFamily: sans-serif
    fontSize: 20px
    fontWeight: 500
    lineHeight: 30px
    letterSpacing: 0.16px
  body-lg:
    fontFamily: sans-serif
    fontSize: 18px
    fontWeight: 500
    lineHeight: 26px
    letterSpacing: 0.16px
  body-md:
    fontFamily: sans-serif
    fontSize: 17px
    fontWeight: 500
    lineHeight: 24.99px
    letterSpacing: 0.16px
  body-sm:
    fontFamily: sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: 0.16px
  caption:
    fontFamily: sans-serif
    fontSize: 15px
    fontWeight: 500
    lineHeight: 22.5px
    letterSpacing: 0.16px
  code:
    fontFamily: NVIDIA-NALA
    fontSize: 11.25px
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
  lg: 25px
  xl: 32px
  2xl: 326.203px
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

This design system was auto-extracted from https://www.nvidia.com/en-in/ (31 colors · 44 type tokens · 37 spacing steps · 25 breakpoints · 12 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-17T07:41:37.174Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#999999):** Muted text, borders, and metadata.
- **tertiary (#32AE88):** Primary accent for links, buttons, and focus states.
- **neutral (#666666):** Primary readable text on dark surfaces.
- **on-primary (#666666):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-light-gray (#EEEEEE):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#1A1A1A):** Supporting token from the extracted palette.
- **color-green (#76B900):** Supporting token from the extracted palette.
- **color-light-gray-2 (#CCCCCC):** Supporting token from the extracted palette.
- **color-dark-blue (#27455C):** Supporting token from the extracted palette.
- **color-white-2 (#F7F7F7):** Supporting token from the extracted palette.
- **color-dark-green (#134D00):** Supporting token from the extracted palette.
- **color-dark-green-2 (#6AA700):** Supporting token from the extracted palette.
- **color-light-gray-4 (#EFEFEF):** Supporting token from the extracted palette.
- **color-white-3 (#F9FFFA):** Supporting token from the extracted palette.
- **color-white-4 (#F4F4F4):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#222222):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#111111):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#555555):** Supporting token from the extracted palette.
- **color-light-green (#E2FF8C):** Supporting token from the extracted palette.
- **color-dark-gray-7 (#656565):** Supporting token from the extracted palette.
- **color-dark-gray-8 (#333333):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#696969):** Supporting token from the extracted palette.
- **color-blue (#3860BE):** Supporting token from the extracted palette.
- **color-dark-gray-6 (#5E5E5E):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#A7A7A7):** Supporting token from the extracted palette.
- **color-light-gray-5 (#D8D8D8):** Supporting token from the extracted palette.
- **color-mid-gray-4 (#707070):** Supporting token from the extracted palette.
- **color-light-gray-3 (#C7C5C7):** Supporting token from the extracted palette.
- **color-green-2 (#74B71B):** Supporting token from the extracted palette.
- **color-dark-blue-2 (#2E3644):** Supporting token from the extracted palette.

## Typography

Primary typeface: **NVIDIA-NALA, Font Awesome 6 Pro, Family, sans-serif**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font sans-serif, 36px, weight 500.
- **h1:** font sans-serif, 28px, weight 500.
- **h2:** font sans-serif, 24px, weight 500.
- **h3:** font sans-serif, 20px, weight 500.
- **body-lg:** font sans-serif, 18px, weight 500.
- **body-md:** font sans-serif, 17px, weight 500.
- **body-sm:** font sans-serif, 16px, weight 500.
- **caption:** font sans-serif, 15px, weight 500.
- **code:** font NVIDIA-NALA, 11.25px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (25px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (326.203px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (320px):** Responsive layout threshold.
- **sm (374px):** Responsive layout threshold.
- **md (375px):** Responsive layout threshold.
- **lg (399px):** Responsive layout threshold.
- **xl (400px):** Responsive layout threshold.
- **2xl (425px):** Responsive layout threshold.
- **3xl (426px):** Responsive layout threshold.
- **bp-8 (480px):** Responsive layout threshold.
- **bp-9 (500px):** Responsive layout threshold.
- **bp-10 (530px):** Responsive layout threshold.
- **bp-11 (550px):** Responsive layout threshold.
- **bp-12 (600px):** Responsive layout threshold.
- **bp-13 (630px):** Responsive layout threshold.
- **bp-14 (639px):** Responsive layout threshold.
- **bp-15 (640px):** Responsive layout threshold.
- **bp-16 (768px):** Responsive layout threshold.
- **bp-17 (896px):** Responsive layout threshold.
- **bp-18 (954px):** Responsive layout threshold.
- **bp-19 (1023px):** Responsive layout threshold.
- **bp-20 (1024px):** Responsive layout threshold.
- **bp-21 (1025px):** Responsive layout threshold.
- **bp-22 (1290px):** Responsive layout threshold.
- **bp-23 (1349px):** Responsive layout threshold.
- **bp-24 (1350px):** Responsive layout threshold.
- **bp-25 (3000px):** Responsive layout threshold.
- **breakpoint-xs (320px):** Responsive layout threshold.
- **breakpoint-sm (374px):** Responsive layout threshold.
- **breakpoint-md (375px):** Responsive layout threshold.
- **breakpoint-lg (399px):** Responsive layout threshold.
- **breakpoint-xl (400px):** Responsive layout threshold.
- **breakpoint-2xl (425px):** Responsive layout threshold.
- **breakpoint-3xl (426px):** Responsive layout threshold.
- **breakpoint-bp-8 (480px):** Responsive layout threshold.
- **breakpoint-bp-9 (500px):** Responsive layout threshold.
- **breakpoint-bp-10 (530px):** Responsive layout threshold.
- **breakpoint-bp-11 (550px):** Responsive layout threshold.
- **breakpoint-bp-12 (600px):** Responsive layout threshold.
- **breakpoint-bp-13 (630px):** Responsive layout threshold.
- **breakpoint-bp-14 (639px):** Responsive layout threshold.
- **breakpoint-bp-15 (640px):** Responsive layout threshold.
- **breakpoint-bp-16 (768px):** Responsive layout threshold.
- **breakpoint-bp-17 (896px):** Responsive layout threshold.
- **breakpoint-bp-18 (954px):** Responsive layout threshold.
- **breakpoint-bp-19 (1023px):** Responsive layout threshold.
- **breakpoint-bp-20 (1024px):** Responsive layout threshold.
- **breakpoint-bp-21 (1025px):** Responsive layout threshold.
- **breakpoint-bp-22 (1290px):** Responsive layout threshold.
- **breakpoint-bp-23 (1349px):** Responsive layout threshold.
- **breakpoint-bp-24 (1350px):** Responsive layout threshold.
- **breakpoint-bp-25 (3000px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.3) 0px 0px 5px 0px`
- **md:** `rgba(0, 0, 0, 0.19) 0px 2px 6px 0px`
- **lg:** `rgba(0, 0, 0, 0.2) 3px 0px 15px 0px`
- **xl:** `rgba(0, 0, 0, 0.24) 0px 3px 4.7px 0.3px, rgba(0, 0, 0, 0.16) 0px 1px 5.88px 0.12px`
- **shadow-5:** `rgb(153, 153, 153) 0px 2px 10px -3px`
- **shadow-6:** `rgb(199, 197, 199) -3px -3px 5px -2px`
- **shadow-sm:** `rgba(0, 0, 0, 0.3) 0px 0px 5px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0.19) 0px 2px 6px 0px`
- **shadow-lg:** `rgba(0, 0, 0, 0.2) 3px 0px 15px 0px`
- **shadow-xl:** `rgba(0, 0, 0, 0.24) 0px 3px 4.7px 0.3px, rgba(0, 0, 0, 0.16) 0px 1px 5.88px 0.12px`
- **shadow-shadow-5:** `rgb(153, 153, 153) 0px 2px 10px -3px`
- **shadow-shadow-6:** `rgb(199, 197, 199) -3px -3px 5px -2px`

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
- Avoid pairing --color-dark-gray on --color-green (2.38:1, Fail).
- Avoid pairing --color-dark-gray-2 on --color-black (1.32:1, Fail).
- Avoid pairing --color-dark-gray-2 on --color-dark-gray-3 (1.09:1, Fail).
