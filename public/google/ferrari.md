---
version: alpha
name: "Official Ferrari website"
description: "Converted from UI Inspector extraction of https://www.ferrari.com/en-IN"
colors:
  primary: "#000000"
  secondary: "#ABABAB"
  tertiary: "#32AE88"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-dark-gray: "#181818"
  color-dark-gray-2: "#666666"
  color-light-gray: "#DDDDDD"
  color-dark-gray-3: "#555555"
  color-dark-gray-4: "#333333"
  color-dark-gray-5: "#222222"
  color-dark-blue: "#27455C"
  color-blue: "#3860BE"
  color-red-2: "#EB2323"
  color-green: "#468254"
  color-dark-gray-7: "#303030"
  color-white-2: "#F9FFFA"
  color-white-3: "#F4F4F4"
  color-blue-2: "#146FF8"
  color-mid-gray: "#999999"
  color-mid-gray-2: "#8F8F8F"
  color-light-gray-3: "#E4E4E4"
  color-red: "#FF0000"
  color-dark-gray-6: "#656565"
  color-light-gray-2: "#CCCCCC"
  color-mid-gray-4: "#A0A0A0"
  color-light-gray-5: "#D8D8D8"
  color-light-gray-6: "#D1D1D1"
  color-light-gray-7: "#BBBBBB"
  color-light-gray-4: "#C7C5C7"
  color-dark-blue-2: "#2E3644"
typography:
  display:
    fontFamily: Times
    fontSize: 26px
    fontWeight: 500
    lineHeight: 39px
    letterSpacing: 0.13008px
  h1:
    fontFamily: Times
    fontSize: 21.3333px
    fontWeight: 500
    lineHeight: 34px
    letterSpacing: 0.13008px
  h2:
    fontFamily: Times
    fontSize: 18px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: 0.13008px
  h3:
    fontFamily: Times
    fontSize: 16px
    fontWeight: 500
    lineHeight: 25px
    letterSpacing: 0.13008px
  body-lg:
    fontFamily: Times
    fontSize: 14.4px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: 0.13008px
  body-md:
    fontFamily: Times
    fontSize: 14.08px
    fontWeight: 500
    lineHeight: 21.6px
    letterSpacing: 0.13008px
  body-sm:
    fontFamily: Times
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20.8px
    letterSpacing: 0.13008px
  caption:
    fontFamily: Times
    fontSize: 13.6px
    fontWeight: 500
    lineHeight: 19.5px
    letterSpacing: 0.13008px
  code:
    fontFamily: FerrariSans
    fontSize: 10px
    fontWeight: 400
rounded:
  sm: 1px
  md: 2px
  lg: 2.5px
  xl: 3px
  2xl: 8px
  full: 17px
spacing:
  xs: 3.54688px
  sm: 8.30469px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 226.5px
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

This design system was auto-extracted from https://www.ferrari.com/en-IN (30 colors · 44 type tokens · 57 spacing steps · 22 breakpoints · 10 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-14T18:57:36.124Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#ABABAB):** Muted text, borders, and metadata.
- **tertiary (#32AE88):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-dark-gray (#181818):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#666666):** Supporting token from the extracted palette.
- **color-light-gray (#DDDDDD):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#555555):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#333333):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#222222):** Supporting token from the extracted palette.
- **color-dark-blue (#27455C):** Supporting token from the extracted palette.
- **color-blue (#3860BE):** Supporting token from the extracted palette.
- **color-red-2 (#EB2323):** Supporting token from the extracted palette.
- **color-green (#468254):** Supporting token from the extracted palette.
- **color-dark-gray-7 (#303030):** Supporting token from the extracted palette.
- **color-white-2 (#F9FFFA):** Supporting token from the extracted palette.
- **color-white-3 (#F4F4F4):** Supporting token from the extracted palette.
- **color-blue-2 (#146FF8):** Supporting token from the extracted palette.
- **color-mid-gray (#999999):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#8F8F8F):** Supporting token from the extracted palette.
- **color-light-gray-3 (#E4E4E4):** Supporting token from the extracted palette.
- **color-red (#FF0000):** Supporting token from the extracted palette.
- **color-dark-gray-6 (#656565):** Supporting token from the extracted palette.
- **color-light-gray-2 (#CCCCCC):** Supporting token from the extracted palette.
- **color-mid-gray-4 (#A0A0A0):** Supporting token from the extracted palette.
- **color-light-gray-5 (#D8D8D8):** Supporting token from the extracted palette.
- **color-light-gray-6 (#D1D1D1):** Supporting token from the extracted palette.
- **color-light-gray-7 (#BBBBBB):** Supporting token from the extracted palette.
- **color-light-gray-4 (#C7C5C7):** Supporting token from the extracted palette.
- **color-dark-blue-2 (#2E3644):** Supporting token from the extracted palette.

## Typography

Primary typeface: **FerrariSans, Body-Font, Arial, Helvetica, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Times, 26px, weight 500.
- **h1:** font Times, 21.3333px, weight 500.
- **h2:** font Times, 18px, weight 500.
- **h3:** font Times, 16px, weight 500.
- **body-lg:** font Times, 14.4px, weight 500.
- **body-md:** font Times, 14.08px, weight 500.
- **body-sm:** font Times, 14px, weight 500.
- **caption:** font Times, 13.6px, weight 500.
- **code:** font FerrariSans, 10px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (3.54688px):** Layout rhythm and component padding.
- **sm (8.30469px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (226.5px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (320px):** Responsive layout threshold.
- **sm (375px):** Responsive layout threshold.
- **md (400px):** Responsive layout threshold.
- **lg (425px):** Responsive layout threshold.
- **xl (426px):** Responsive layout threshold.
- **2xl (428px):** Responsive layout threshold.
- **3xl (520px):** Responsive layout threshold.
- **bp-8 (530px):** Responsive layout threshold.
- **bp-9 (550px):** Responsive layout threshold.
- **bp-10 (600px):** Responsive layout threshold.
- **bp-11 (601px):** Responsive layout threshold.
- **bp-12 (640px):** Responsive layout threshold.
- **bp-13 (711px):** Responsive layout threshold.
- **bp-14 (768px):** Responsive layout threshold.
- **bp-15 (812px):** Responsive layout threshold.
- **bp-16 (823px):** Responsive layout threshold.
- **bp-17 (896px):** Responsive layout threshold.
- **bp-18 (961px):** Responsive layout threshold.
- **bp-19 (1200px):** Responsive layout threshold.
- **bp-20 (1281px):** Responsive layout threshold.
- **bp-21 (1601px):** Responsive layout threshold.
- **bp-22 (1920px):** Responsive layout threshold.
- **breakpoint-xs (320px):** Responsive layout threshold.
- **breakpoint-sm (375px):** Responsive layout threshold.
- **breakpoint-md (400px):** Responsive layout threshold.
- **breakpoint-lg (425px):** Responsive layout threshold.
- **breakpoint-xl (426px):** Responsive layout threshold.
- **breakpoint-2xl (428px):** Responsive layout threshold.
- **breakpoint-3xl (520px):** Responsive layout threshold.
- **breakpoint-bp-8 (530px):** Responsive layout threshold.
- **breakpoint-bp-9 (550px):** Responsive layout threshold.
- **breakpoint-bp-10 (600px):** Responsive layout threshold.
- **breakpoint-bp-11 (601px):** Responsive layout threshold.
- **breakpoint-bp-12 (640px):** Responsive layout threshold.
- **breakpoint-bp-13 (711px):** Responsive layout threshold.
- **breakpoint-bp-14 (768px):** Responsive layout threshold.
- **breakpoint-bp-15 (812px):** Responsive layout threshold.
- **breakpoint-bp-16 (823px):** Responsive layout threshold.
- **breakpoint-bp-17 (896px):** Responsive layout threshold.
- **breakpoint-bp-18 (961px):** Responsive layout threshold.
- **breakpoint-bp-19 (1200px):** Responsive layout threshold.
- **breakpoint-bp-20 (1281px):** Responsive layout threshold.
- **breakpoint-bp-21 (1601px):** Responsive layout threshold.
- **breakpoint-bp-22 (1920px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgb(153, 153, 153) 1px 1px 1px 0px`
- **md:** `rgba(0, 0, 0, 0.2) 0px 0px 18px 0px`
- **lg:** `rgb(153, 153, 153) 0px 2px 10px -3px`
- **xl:** `rgb(199, 197, 199) -3px -3px 5px -2px`
- **shadow-5:** `rgb(199, 197, 199) 0px 0px 12px 2px`
- **shadow-sm:** `rgb(153, 153, 153) 1px 1px 1px 0px`
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
- **2xl (8px):** Border radius token.
- **full (17px):** Border radius token.

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
- Avoid pairing --color-mid-gray on --color-white (2.85:1, Fail).
- Avoid pairing --color-mid-gray on --color-dark-gray-2 (2.02:1, Fail).
- Avoid pairing --color-mid-gray on --color-light-gray (2.1:1, Fail).
