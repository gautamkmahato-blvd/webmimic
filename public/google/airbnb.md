---
version: alpha
name: Airbnb
description: "Converted from UI Inspector extraction of https://www.airbnb.co.in/"
colors:
  primary: "#222222"
  secondary: "#B0B0B0"
  tertiary: "#E00B41"
  neutral: "#6A6A6A"
  on-primary: "#6A6A6A"
  on-tertiary: "#FFFFFF"
  color-black: "#000000"
  color-light-gray-2: "#DDDDDD"
  color-light-gray-3: "#F2F2F2"
  color-white-2: "#F7F7F7"
  color-light-gray-4: "#EBEBEB"
  color-light-gray: "#C1C1C1"
  color-red: "#FF385C"
  color-dark-blue: "rgba(60, 77, 107, 0.25)"
  color-dark-blue-4: "#001C40"
  color-light-blue: "#D7EBFF"
  color-light-yellow: "#FFF8DF"
  color-light-yellow-2: "rgba(255, 254, 224, 0.2)"
  color-blue: "#3E567C"
  color-dark-blue-2: "#3A5475"
  color-dark-blue-3: "#2D3C5B"
  color-blue-2: "#809DC0"
  color-light-blue-2: "rgba(191, 205, 213, 0.9)"
  color-white-3: "#F8F8F8"
typography:
  display:
    fontFamily: Times
    fontSize: 28px
    fontWeight: 500
    lineHeight: 40.04px
    letterSpacing: -0.18px
  h1:
    fontFamily: Times
    fontSize: 22px
    fontWeight: 500
    lineHeight: 30.03px
    letterSpacing: -0.18px
  h2:
    fontFamily: Times
    fontSize: 21px
    fontWeight: 500
    lineHeight: 26px
    letterSpacing: -0.18px
  h3:
    fontFamily: Times
    fontSize: 20px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: -0.18px
  body-lg:
    fontFamily: Times
    fontSize: 16px
    fontWeight: 500
    lineHeight: 20.02px
    letterSpacing: -0.18px
  body-md:
    fontFamily: Times
    fontSize: 14px
    fontWeight: 500
    lineHeight: 18px
    letterSpacing: -0.18px
  body-sm:
    fontFamily: Times
    fontSize: 13px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: -0.18px
  caption:
    fontFamily: Times
    fontSize: 12px
    fontWeight: 500
    lineHeight: 13px
    letterSpacing: -0.18px
  code:
    fontFamily: "Airbnb Cereal VF"
    fontSize: 12px
    fontWeight: 400
rounded:
  sm: "0px 1.5px 1.5px 0px"
  md: "1.5px 0px 0px 1.5px"
  lg: 4px
  xl: 8px
  2xl: 9px
  full: "10px 10px 10px 2px"
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 130.904px
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

This design system was auto-extracted from https://www.airbnb.co.in/ (23 colors · 29 type tokens · 27 spacing steps · 61 breakpoints · 8 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-13T17:19:49.968Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#222222):** Core surface and headline color.
- **secondary (#B0B0B0):** Muted text, borders, and metadata.
- **tertiary (#E00B41):** Primary accent for links, buttons, and focus states.
- **neutral (#6A6A6A):** Primary readable text on dark surfaces.
- **on-primary (#6A6A6A):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-light-gray-2 (#DDDDDD):** Supporting token from the extracted palette.
- **color-light-gray-3 (#F2F2F2):** Supporting token from the extracted palette.
- **color-white-2 (#F7F7F7):** Supporting token from the extracted palette.
- **color-light-gray-4 (#EBEBEB):** Supporting token from the extracted palette.
- **color-light-gray (#C1C1C1):** Supporting token from the extracted palette.
- **color-red (#FF385C):** Supporting token from the extracted palette.
- **color-dark-blue (rgba(60, 77, 107, 0.25)):** Supporting token from the extracted palette.
- **color-dark-blue-4 (#001C40):** Supporting token from the extracted palette.
- **color-light-blue (#D7EBFF):** Supporting token from the extracted palette.
- **color-light-yellow (#FFF8DF):** Supporting token from the extracted palette.
- **color-light-yellow-2 (rgba(255, 254, 224, 0.2)):** Supporting token from the extracted palette.
- **color-blue (#3E567C):** Supporting token from the extracted palette.
- **color-dark-blue-2 (#3A5475):** Supporting token from the extracted palette.
- **color-dark-blue-3 (#2D3C5B):** Supporting token from the extracted palette.
- **color-blue-2 (#809DC0):** Supporting token from the extracted palette.
- **color-light-blue-2 (rgba(191, 205, 213, 0.9)):** Supporting token from the extracted palette.
- **color-white-3 (#F8F8F8):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Airbnb Cereal VF, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Times, 28px, weight 500.
- **h1:** font Times, 22px, weight 500.
- **h2:** font Times, 21px, weight 500.
- **h3:** font Times, 20px, weight 500.
- **body-lg:** font Times, 16px, weight 500.
- **body-md:** font Times, 14px, weight 500.
- **body-sm:** font Times, 13px, weight 500.
- **caption:** font Times, 12px, weight 500.
- **code:** font Airbnb Cereal VF, 12px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (130.904px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (200px):** Responsive layout threshold.
- **sm (220px):** Responsive layout threshold.
- **md (299px):** Responsive layout threshold.
- **lg (300px):** Responsive layout threshold.
- **xl (320px):** Responsive layout threshold.
- **2xl (330px):** Responsive layout threshold.
- **3xl (344px):** Responsive layout threshold.
- **bp-8 (375px):** Responsive layout threshold.
- **bp-9 (376px):** Responsive layout threshold.
- **bp-10 (395px):** Responsive layout threshold.
- **bp-11 (400px):** Responsive layout threshold.
- **bp-12 (403px):** Responsive layout threshold.
- **bp-13 (412px):** Responsive layout threshold.
- **bp-14 (420px):** Responsive layout threshold.
- **bp-15 (429px):** Responsive layout threshold.
- **bp-16 (431px):** Responsive layout threshold.
- **bp-17 (440px):** Responsive layout threshold.
- **bp-18 (450px):** Responsive layout threshold.
- **bp-19 (474px):** Responsive layout threshold.
- **bp-20 (475px):** Responsive layout threshold.
- **bp-21 (479.99px):** Responsive layout threshold.
- **bp-22 (480px):** Responsive layout threshold.
- **bp-23 (481px):** Responsive layout threshold.
- **bp-24 (499px):** Responsive layout threshold.
- **bp-25 (500px):** Responsive layout threshold.
- **bp-26 (550px):** Responsive layout threshold.
- **bp-27 (551px):** Responsive layout threshold.
- **bp-28 (568px):** Responsive layout threshold.
- **bp-29 (600px):** Responsive layout threshold.
- **bp-30 (650px):** Responsive layout threshold.
- **bp-31 (660px):** Responsive layout threshold.
- **bp-32 (667px):** Responsive layout threshold.
- **bp-33 (680px):** Responsive layout threshold.
- **bp-34 (700px):** Responsive layout threshold.
- **bp-35 (743px):** Responsive layout threshold.
- **bp-36 (744px):** Responsive layout threshold.
- **bp-37 (768px):** Responsive layout threshold.
- **bp-38 (800px):** Responsive layout threshold.
- **bp-39 (880px):** Responsive layout threshold.
- **bp-40 (895px):** Responsive layout threshold.
- **bp-41 (916px):** Responsive layout threshold.
- **bp-42 (949px):** Responsive layout threshold.
- **bp-43 (950px):** Responsive layout threshold.
- **bp-44 (1024px):** Responsive layout threshold.
- **bp-45 (1028px):** Responsive layout threshold.
- **bp-46 (1127px):** Responsive layout threshold.
- **bp-47 (1127.99px):** Responsive layout threshold.
- **bp-48 (1128px):** Responsive layout threshold.
- **bp-49 (1194px):** Responsive layout threshold.
- **bp-50 (1238px):** Responsive layout threshold.
- **bp-51 (1240px):** Responsive layout threshold.
- **bp-52 (1280px):** Responsive layout threshold.
- **bp-53 (1348px):** Responsive layout threshold.
- **bp-54 (1440px):** Responsive layout threshold.
- **bp-55 (1600px):** Responsive layout threshold.
- **bp-56 (1735px):** Responsive layout threshold.
- **bp-57 (1760px):** Responsive layout threshold.
- **bp-58 (1880px):** Responsive layout threshold.
- **bp-59 (1920px):** Responsive layout threshold.
- **bp-60 (2120px):** Responsive layout threshold.
- **bp-61 (2560px):** Responsive layout threshold.
- **breakpoint-xs (200px):** Responsive layout threshold.
- **breakpoint-sm (220px):** Responsive layout threshold.
- **breakpoint-md (299px):** Responsive layout threshold.
- **breakpoint-lg (300px):** Responsive layout threshold.
- **breakpoint-xl (320px):** Responsive layout threshold.
- **breakpoint-2xl (330px):** Responsive layout threshold.
- **breakpoint-3xl (344px):** Responsive layout threshold.
- **breakpoint-bp-8 (375px):** Responsive layout threshold.
- **breakpoint-bp-9 (376px):** Responsive layout threshold.
- **breakpoint-bp-10 (395px):** Responsive layout threshold.
- **breakpoint-bp-11 (400px):** Responsive layout threshold.
- **breakpoint-bp-12 (403px):** Responsive layout threshold.
- **breakpoint-bp-13 (412px):** Responsive layout threshold.
- **breakpoint-bp-14 (420px):** Responsive layout threshold.
- **breakpoint-bp-15 (429px):** Responsive layout threshold.
- **breakpoint-bp-16 (431px):** Responsive layout threshold.
- **breakpoint-bp-17 (440px):** Responsive layout threshold.
- **breakpoint-bp-18 (450px):** Responsive layout threshold.
- **breakpoint-bp-19 (474px):** Responsive layout threshold.
- **breakpoint-bp-20 (475px):** Responsive layout threshold.
- **breakpoint-bp-21 (479.99px):** Responsive layout threshold.
- **breakpoint-bp-22 (480px):** Responsive layout threshold.
- **breakpoint-bp-23 (481px):** Responsive layout threshold.
- **breakpoint-bp-24 (499px):** Responsive layout threshold.
- **breakpoint-bp-25 (500px):** Responsive layout threshold.
- **breakpoint-bp-26 (550px):** Responsive layout threshold.
- **breakpoint-bp-27 (551px):** Responsive layout threshold.
- **breakpoint-bp-28 (568px):** Responsive layout threshold.
- **breakpoint-bp-29 (600px):** Responsive layout threshold.
- **breakpoint-bp-30 (650px):** Responsive layout threshold.
- **breakpoint-bp-31 (660px):** Responsive layout threshold.
- **breakpoint-bp-32 (667px):** Responsive layout threshold.
- **breakpoint-bp-33 (680px):** Responsive layout threshold.
- **breakpoint-bp-34 (700px):** Responsive layout threshold.
- **breakpoint-bp-35 (743px):** Responsive layout threshold.
- **breakpoint-bp-36 (744px):** Responsive layout threshold.
- **breakpoint-bp-37 (768px):** Responsive layout threshold.
- **breakpoint-bp-38 (800px):** Responsive layout threshold.
- **breakpoint-bp-39 (880px):** Responsive layout threshold.
- **breakpoint-bp-40 (895px):** Responsive layout threshold.
- **breakpoint-bp-41 (916px):** Responsive layout threshold.
- **breakpoint-bp-42 (949px):** Responsive layout threshold.
- **breakpoint-bp-43 (950px):** Responsive layout threshold.
- **breakpoint-bp-44 (1024px):** Responsive layout threshold.
- **breakpoint-bp-45 (1028px):** Responsive layout threshold.
- **breakpoint-bp-46 (1127px):** Responsive layout threshold.
- **breakpoint-bp-47 (1127.99px):** Responsive layout threshold.
- **breakpoint-bp-48 (1128px):** Responsive layout threshold.
- **breakpoint-bp-49 (1194px):** Responsive layout threshold.
- **breakpoint-bp-50 (1238px):** Responsive layout threshold.
- **breakpoint-bp-51 (1240px):** Responsive layout threshold.
- **breakpoint-bp-52 (1280px):** Responsive layout threshold.
- **breakpoint-bp-53 (1348px):** Responsive layout threshold.
- **breakpoint-bp-54 (1440px):** Responsive layout threshold.
- **breakpoint-bp-55 (1600px):** Responsive layout threshold.
- **breakpoint-bp-56 (1735px):** Responsive layout threshold.
- **breakpoint-bp-57 (1760px):** Responsive layout threshold.
- **breakpoint-bp-58 (1880px):** Responsive layout threshold.
- **breakpoint-bp-59 (1920px):** Responsive layout threshold.
- **breakpoint-bp-60 (2120px):** Responsive layout threshold.
- **breakpoint-bp-61 (2560px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.02) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 2px 6px 0px, rgba(0, 0, 0, 0.1) 0px 4px 8px 0px`
- **md:** `rgba(0, 0, 0, 0.02) 0px 0px 0px 1px, rgba(0, 0, 0, 0.16) 0px 2px 4px 0px`
- **lg:** `rgba(60, 77, 107, 0.25) 0px 0.953955px 1.90791px 0px, rgba(60, 77, 107, 0.25) 0px 3.81582px 5.72373px 0px, rgb(0, 28, 64) 0px 0px 2px 0.5px inset, rgb(215, 235, 255) 0px -1px 3px 0px inset`
- **xl:** `rgba(0, 0, 0, 0.02) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 8px 24px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0.02) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 2px 6px 0px, rgba(0, 0, 0, 0.1) 0px 4px 8px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0.02) 0px 0px 0px 1px, rgba(0, 0, 0, 0.16) 0px 2px 4px 0px`
- **shadow-lg:** `rgba(60, 77, 107, 0.25) 0px 0.953955px 1.90791px 0px, rgba(60, 77, 107, 0.25) 0px 3.81582px 5.72373px 0px, rgb(0, 28, 64) 0px 0px 2px 0.5px inset, rgb(215, 235, 255) 0px -1px 3px 0px inset`
- **shadow-xl:** `rgba(0, 0, 0, 0.02) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 8px 24px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 1.5px 1.5px 0px):** Border radius token.
- **md (1.5px 0px 0px 1.5px):** Border radius token.
- **lg (4px):** Border radius token.
- **xl (8px):** Border radius token.
- **2xl (9px):** Border radius token.
- **full (10px 10px 10px 2px):** Border radius token.

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
- Avoid pairing --color-mid-gray on --color-dark-gray (2.94:1, Fail).
- Avoid pairing --color-light-gray on --color-white (1.8:1, Fail).
- Avoid pairing --color-light-gray on --color-light-gray-2 (1.33:1, Fail).
