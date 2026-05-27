---
version: alpha
name: "Reddit - The heart of the internet"
description: "Converted from UI Inspector extraction of https://www.reddit.com/"
colors:
  primary: "#000000"
  secondary: "#7C8183"
  tertiary: "#32CDC8"
  neutral: "#333D42"
  on-primary: "#333D42"
  on-tertiary: "#FFFFFF"
  color-light-gray-2: "#E5EBEE"
  color-light-green: "#95DAB6"
  color-blue-2: "#5D81A2"
  color-pink: "#FF1AA7"
  color-light-gray-3: "#BBBDBF"
  color-red: "#D42B42"
  color-cyan-4: "#0DD3BB"
  color-dark-green: "#638029"
  color-cyan-5: "#1A7FAA"
  color-green: "#349E48"
  color-purple: "#9116E9"
  color-dark-blue-2: "#0A449B"
  color-orange-3: "#D93900"
  color-cyan-6: "#98AFB9"
  color-purple-2: "#9406F9"
  color-orange-4: "#958578"
  color-white-2: "#F7F7F7"
  color-light-blue-3: "#C2DBFF"
  color-dark-gray-4: "#0C0E10"
  color-light-gray-4: "#BFC2C7"
  color-blue-7: "#096CF6"
  color-white-3: "#F6F8F9"
  color-white-4: "#F8F8F8"
  color-dark-gray: "#21272A"
  color-dark-gray-2: "#181C1F"
  color-light-gray: "#EEF1F3"
  color-cyan: "#5C6C74"
  color-blue: "#115BCA"
  color-cyan-2: "#576F76"
  color-mid-gray: "#808080"
  color-orange: "#FF4500"
  color-light-blue: "#D4EAFF"
  color-dark-gray-3: "#222222"
  color-yellow: "#DDD622"
  color-blue-3: "#2972A3"
  color-red-2: "#FC0335"
  color-light-orange-2: "#EADDC8"
  color-blue-4: "#0077FF"
  color-pink-2: "#FF1493"
  color-blue-5: "#0079D3"
  color-dark-blue: "#49545F"
  color-blue-6: "#0051FF"
  color-dark-gray-5: "#131313"
  color-light-gray-5: "#C1C1C1"
  color-dark-red: "#842123"
  color-orange-2: "#FF6101"
  color-light-orange: "#FFC49C"
  color-light-blue-2: "#BBCFDA"
typography:
  h1:
    fontFamily: -apple-system
    fontSize: 21px
    fontWeight: 400
    lineHeight: 38px
    letterSpacing: -0.012px
  h2:
    fontFamily: -apple-system
    fontSize: 18px
    fontWeight: 400
    lineHeight: 31.5px
    letterSpacing: -0.012px
  h3:
    fontFamily: -apple-system
    fontSize: 16px
    fontWeight: 400
    lineHeight: 30px
    letterSpacing: -0.012px
  body-md:
    fontFamily: -apple-system
    fontSize: 14px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: -0.012px
  body-sm:
    fontFamily: -apple-system
    fontSize: 12px
    fontWeight: 400
    lineHeight: 22px
    letterSpacing: -0.012px
  code:
    fontFamily: Times
    fontSize: 16px
    fontWeight: 400
rounded:
  sm: 2px
  md: 4px
  lg: 8px
  xl: 16px
  2xl: 20px
  full: 999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 24px
  2xl: 407.25px
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

This design system was auto-extracted from https://www.reddit.com/ (53 colors · 21 type tokens · 14 spacing steps · 14 breakpoints · 4 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-17T07:50:35.990Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#7C8183):** Muted text, borders, and metadata.
- **tertiary (#32CDC8):** Primary accent for links, buttons, and focus states.
- **neutral (#333D42):** Primary readable text on dark surfaces.
- **on-primary (#333D42):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-light-gray-2 (#E5EBEE):** Supporting token from the extracted palette.
- **color-light-green (#95DAB6):** Supporting token from the extracted palette.
- **color-blue-2 (#5D81A2):** Supporting token from the extracted palette.
- **color-pink (#FF1AA7):** Supporting token from the extracted palette.
- **color-light-gray-3 (#BBBDBF):** Supporting token from the extracted palette.
- **color-red (#D42B42):** Supporting token from the extracted palette.
- **color-cyan-4 (#0DD3BB):** Supporting token from the extracted palette.
- **color-dark-green (#638029):** Supporting token from the extracted palette.
- **color-cyan-5 (#1A7FAA):** Supporting token from the extracted palette.
- **color-green (#349E48):** Supporting token from the extracted palette.
- **color-purple (#9116E9):** Supporting token from the extracted palette.
- **color-dark-blue-2 (#0A449B):** Supporting token from the extracted palette.
- **color-orange-3 (#D93900):** Supporting token from the extracted palette.
- **color-cyan-6 (#98AFB9):** Supporting token from the extracted palette.
- **color-purple-2 (#9406F9):** Supporting token from the extracted palette.
- **color-orange-4 (#958578):** Supporting token from the extracted palette.
- **color-white-2 (#F7F7F7):** Supporting token from the extracted palette.
- **color-light-blue-3 (#C2DBFF):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#0C0E10):** Supporting token from the extracted palette.
- **color-light-gray-4 (#BFC2C7):** Supporting token from the extracted palette.
- **color-blue-7 (#096CF6):** Supporting token from the extracted palette.
- **color-white-3 (#F6F8F9):** Supporting token from the extracted palette.
- **color-white-4 (#F8F8F8):** Supporting token from the extracted palette.
- **color-dark-gray (#21272A):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#181C1F):** Supporting token from the extracted palette.
- **color-light-gray (#EEF1F3):** Supporting token from the extracted palette.
- **color-cyan (#5C6C74):** Supporting token from the extracted palette.
- **color-blue (#115BCA):** Supporting token from the extracted palette.
- **color-cyan-2 (#576F76):** Supporting token from the extracted palette.
- **color-mid-gray (#808080):** Supporting token from the extracted palette.
- **color-orange (#FF4500):** Supporting token from the extracted palette.
- **color-light-blue (#D4EAFF):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#222222):** Supporting token from the extracted palette.
- **color-yellow (#DDD622):** Supporting token from the extracted palette.
- **color-blue-3 (#2972A3):** Supporting token from the extracted palette.
- **color-red-2 (#FC0335):** Supporting token from the extracted palette.
- **color-light-orange-2 (#EADDC8):** Supporting token from the extracted palette.
- **color-blue-4 (#0077FF):** Supporting token from the extracted palette.
- **color-pink-2 (#FF1493):** Supporting token from the extracted palette.
- **color-blue-5 (#0079D3):** Supporting token from the extracted palette.
- **color-dark-blue (#49545F):** Supporting token from the extracted palette.
- **color-blue-6 (#0051FF):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#131313):** Supporting token from the extracted palette.
- **color-light-gray-5 (#C1C1C1):** Supporting token from the extracted palette.
- **color-dark-red (#842123):** Supporting token from the extracted palette.
- **color-orange-2 (#FF6101):** Supporting token from the extracted palette.
- **color-light-orange (#FFC49C):** Supporting token from the extracted palette.
- **color-light-blue-2 (#BBCFDA):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Times, Family, -apple-system**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **h1:** font -apple-system, 21px, weight 400.
- **h2:** font -apple-system, 18px, weight 400.
- **h3:** font -apple-system, 16px, weight 400.
- **body-md:** font -apple-system, 14px, weight 400.
- **body-sm:** font -apple-system, 12px, weight 400.
- **code:** font Times, 16px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (24px):** Layout rhythm and component padding.
- **2xl (407.25px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (260px):** Responsive layout threshold.
- **sm (325px):** Responsive layout threshold.
- **md (500px):** Responsive layout threshold.
- **lg (599px):** Responsive layout threshold.
- **xl (607px):** Responsive layout threshold.
- **2xl (608px):** Responsive layout threshold.
- **3xl (767px):** Responsive layout threshold.
- **bp-8 (768px):** Responsive layout threshold.
- **bp-9 (960px):** Responsive layout threshold.
- **bp-10 (1024px):** Responsive layout threshold.
- **bp-11 (1200px):** Responsive layout threshold.
- **bp-12 (1416px):** Responsive layout threshold.
- **bp-13 (1472px):** Responsive layout threshold.
- **bp-14 (1920px):** Responsive layout threshold.
- **breakpoint-xs (260px):** Responsive layout threshold.
- **breakpoint-sm (325px):** Responsive layout threshold.
- **breakpoint-md (500px):** Responsive layout threshold.
- **breakpoint-lg (599px):** Responsive layout threshold.
- **breakpoint-xl (607px):** Responsive layout threshold.
- **breakpoint-2xl (608px):** Responsive layout threshold.
- **breakpoint-3xl (767px):** Responsive layout threshold.
- **breakpoint-bp-8 (768px):** Responsive layout threshold.
- **breakpoint-bp-9 (960px):** Responsive layout threshold.
- **breakpoint-bp-10 (1024px):** Responsive layout threshold.
- **breakpoint-bp-11 (1200px):** Responsive layout threshold.
- **breakpoint-bp-12 (1416px):** Responsive layout threshold.
- **breakpoint-bp-13 (1472px):** Responsive layout threshold.
- **breakpoint-bp-14 (1920px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(255, 255, 255, 0.2) 0px 0px 6px 0px inset`
- **md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 1px 2px 0px`
- **lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px`
- **xl:** `rgb(128, 128, 128) 0px 0px 5px 0px`
- **shadow-sm:** `rgba(255, 255, 255, 0.2) 0px 0px 6px 0px inset`
- **shadow-md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 1px 2px 0px`
- **shadow-lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px`
- **shadow-xl:** `rgb(128, 128, 128) 0px 0px 5px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (2px):** Border radius token.
- **md (4px):** Border radius token.
- **lg (8px):** Border radius token.
- **xl (16px):** Border radius token.
- **2xl (20px):** Border radius token.
- **full (999px):** Border radius token.

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
- Avoid pairing --color-dark-cyan on --color-black (1.89:1, Fail).
- Avoid pairing --color-dark-cyan on --color-blue-2 (2.72:1, Fail).
- Avoid pairing --color-dark-gray on --color-black (1.39:1, Fail).
