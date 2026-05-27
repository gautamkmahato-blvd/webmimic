---
version: alpha
name: "Coinbase - Buy & Sell Bitcoin, Ethereum, and more with trust"
description: "Converted from UI Inspector extraction of https://www.coinbase.com/en-in"
colors:
  primary: "#FFFFFF"
  secondary: "#808080"
  tertiary: "#27AD75"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-black: "#000000"
  color-black-2: "#0A0B0D"
  color-blue-4: "#0052FF"
  color-light-gray: "#EEF0F3"
  color-white-2: "#F7F8F9"
  color-dark-gray-4: "#282B31"
  color-blue-6: "#3860BE"
  color-blue-7: "rgba(91, 97, 110, 0.2)"
  color-white-3: "#F9FFFA"
  color-white-4: "#F4F4F4"
  color-blue: "#5B616E"
  color-red: "#F0616D"
  color-blue-2: "#578BFA"
  color-blue-3: "#0667D0"
  color-dark-gray: "#1D1D1D"
  color-dark-gray-2: "#555555"
  color-dark-gray-3: "#656565"
  color-blue-5: "#8A919E"
  color-mid-gray-2: "#696969"
  color-cyan-2: "#32AE88"
  color-light-gray-3: "#D1D1D1"
  color-light-gray-4: "#BBBBBB"
  color-light-gray-2: "#C7C5C7"
  color-mid-gray-3: "#999999"
  color-dark-blue: "#2E3644"
typography:
  display:
    fontFamily: CoinbaseSans
    fontSize: 64px
    fontWeight: 500
    lineHeight: 73.6px
    letterSpacing: 0.144px
  h1:
    fontFamily: CoinbaseSans
    fontSize: 52px
    fontWeight: 500
    lineHeight: 64px
    letterSpacing: 0.144px
  h2:
    fontFamily: CoinbaseSans
    fontSize: 40px
    fontWeight: 500
    lineHeight: 52px
    letterSpacing: 0.144px
  h3:
    fontFamily: CoinbaseSans
    fontSize: 32px
    fontWeight: 500
    lineHeight: 44px
    letterSpacing: 0.144px
  body-lg:
    fontFamily: CoinbaseSans
    fontSize: 24px
    fontWeight: 500
    lineHeight: 36px
    letterSpacing: 0.144px
  body-md:
    fontFamily: CoinbaseSans
    fontSize: 20px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: 0.144px
  body-sm:
    fontFamily: CoinbaseSans
    fontSize: 18px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: 0.144px
  caption:
    fontFamily: CoinbaseSans
    fontSize: 16px
    fontWeight: 500
    lineHeight: 20.8px
    letterSpacing: 0.144px
  code:
    fontFamily: CoinbaseIcons
    fontSize: 13.6px
    fontWeight: 400
rounded:
  sm: 2px
  md: 3px
  lg: 4px
  xl: 16px
  2xl: 17px
  full: 20px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 80px
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

This design system was auto-extracted from https://www.coinbase.com/en-in (28 colors · 38 type tokens · 12 spacing steps · 16 breakpoints · 5 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-14T18:54:44.329Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#FFFFFF):** Core surface and headline color.
- **secondary (#808080):** Muted text, borders, and metadata.
- **tertiary (#27AD75):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-black-2 (#0A0B0D):** Supporting token from the extracted palette.
- **color-blue-4 (#0052FF):** Supporting token from the extracted palette.
- **color-light-gray (#EEF0F3):** Supporting token from the extracted palette.
- **color-white-2 (#F7F8F9):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#282B31):** Supporting token from the extracted palette.
- **color-blue-6 (#3860BE):** Supporting token from the extracted palette.
- **color-blue-7 (rgba(91, 97, 110, 0.2)):** Supporting token from the extracted palette.
- **color-white-3 (#F9FFFA):** Supporting token from the extracted palette.
- **color-white-4 (#F4F4F4):** Supporting token from the extracted palette.
- **color-blue (#5B616E):** Supporting token from the extracted palette.
- **color-red (#F0616D):** Supporting token from the extracted palette.
- **color-blue-2 (#578BFA):** Supporting token from the extracted palette.
- **color-blue-3 (#0667D0):** Supporting token from the extracted palette.
- **color-dark-gray (#1D1D1D):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#555555):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#656565):** Supporting token from the extracted palette.
- **color-blue-5 (#8A919E):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#696969):** Supporting token from the extracted palette.
- **color-cyan-2 (#32AE88):** Supporting token from the extracted palette.
- **color-light-gray-3 (#D1D1D1):** Supporting token from the extracted palette.
- **color-light-gray-4 (#BBBBBB):** Supporting token from the extracted palette.
- **color-light-gray-2 (#C7C5C7):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#999999):** Supporting token from the extracted palette.
- **color-dark-blue (#2E3644):** Supporting token from the extracted palette.

## Typography

Primary typeface: **CoinbaseIcons, CoinbaseDisplay, CoinbaseText, Family, CoinbaseSans**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font CoinbaseSans, 64px, weight 500.
- **h1:** font CoinbaseSans, 52px, weight 500.
- **h2:** font CoinbaseSans, 40px, weight 500.
- **h3:** font CoinbaseSans, 32px, weight 500.
- **body-lg:** font CoinbaseSans, 24px, weight 500.
- **body-md:** font CoinbaseSans, 20px, weight 500.
- **body-sm:** font CoinbaseSans, 18px, weight 500.
- **caption:** font CoinbaseSans, 16px, weight 500.
- **code:** font CoinbaseIcons, 13.6px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (80px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (400px):** Responsive layout threshold.
- **sm (425px):** Responsive layout threshold.
- **md (426px):** Responsive layout threshold.
- **lg (500px):** Responsive layout threshold.
- **xl (530px):** Responsive layout threshold.
- **2xl (550px):** Responsive layout threshold.
- **3xl (576px):** Responsive layout threshold.
- **bp-8 (600px):** Responsive layout threshold.
- **bp-9 (640px):** Responsive layout threshold.
- **bp-10 (767px):** Responsive layout threshold.
- **bp-11 (768px):** Responsive layout threshold.
- **bp-12 (896px):** Responsive layout threshold.
- **bp-13 (1279px):** Responsive layout threshold.
- **bp-14 (1280px):** Responsive layout threshold.
- **bp-15 (1439px):** Responsive layout threshold.
- **bp-16 (1600px):** Responsive layout threshold.
- **breakpoint-xs (400px):** Responsive layout threshold.
- **breakpoint-sm (425px):** Responsive layout threshold.
- **breakpoint-md (426px):** Responsive layout threshold.
- **breakpoint-lg (500px):** Responsive layout threshold.
- **breakpoint-xl (530px):** Responsive layout threshold.
- **breakpoint-2xl (550px):** Responsive layout threshold.
- **breakpoint-3xl (576px):** Responsive layout threshold.
- **breakpoint-bp-8 (600px):** Responsive layout threshold.
- **breakpoint-bp-9 (640px):** Responsive layout threshold.
- **breakpoint-bp-10 (767px):** Responsive layout threshold.
- **breakpoint-bp-11 (768px):** Responsive layout threshold.
- **breakpoint-bp-12 (896px):** Responsive layout threshold.
- **breakpoint-bp-13 (1279px):** Responsive layout threshold.
- **breakpoint-bp-14 (1280px):** Responsive layout threshold.
- **breakpoint-bp-15 (1439px):** Responsive layout threshold.
- **breakpoint-bp-16 (1600px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgb(255, 255, 255) 0px -1px 0px 1px`
- **md:** `rgba(0, 0, 0, 0.2) 0px 0px 18px 0px`
- **lg:** `rgb(153, 153, 153) 0px 2px 10px -3px`
- **xl:** `rgb(199, 197, 199) -3px -3px 5px -2px`
- **shadow-5:** `rgb(199, 197, 199) 0px 0px 12px 2px`
- **shadow-sm:** `rgb(255, 255, 255) 0px -1px 0px 1px`
- **shadow-md:** `rgba(0, 0, 0, 0.2) 0px 0px 18px 0px`
- **shadow-lg:** `rgb(153, 153, 153) 0px 2px 10px -3px`
- **shadow-xl:** `rgb(199, 197, 199) -3px -3px 5px -2px`
- **shadow-shadow-5:** `rgb(199, 197, 199) 0px 0px 12px 2px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (2px):** Border radius token.
- **md (3px):** Border radius token.
- **lg (4px):** Border radius token.
- **xl (16px):** Border radius token.
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
- Avoid pairing --color-cyan on --color-white (2.87:1, Fail).
- Avoid pairing --color-cyan on --color-blue-4 (2.01:1, Fail).
- Avoid pairing --color-cyan on --color-light-gray (2.51:1, Fail).
