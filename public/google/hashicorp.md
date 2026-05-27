---
version: alpha
name: HashiCorp
description: "Converted from UI Inspector extraction of https://www.hashicorp.com/en"
colors:
  primary: "#000000"
  secondary: "#808080"
  tertiary: "#2B89FF"
  neutral: "#3B3D45"
  on-primary: "#3B3D45"
  on-tertiary: "#FFFFFF"
  color-blue-5: "#1060FF"
  color-dark-gray-3: "#0D0E12"
  color-white-2: "#FAFAFA"
  color-dark-gray-5: "#15181E"
  color-dark-blue: "#2B303C"
  color-blue-11: "#7948FF"
  color-orange: "#FF6423"
  color-dark-purple: "#42225B"
  color-light-gray: "#D5D7DB"
  color-blue: "#2264D6"
  color-light-gray-2: "#EFEFF1"
  color-light-gray-3: "#B2B6BD"
  color-dark-gray-2: "#0C0C0E"
  color-blue-2: "#656A76"
  color-dark-gray-6: "#333333"
  color-light-gray-4: "rgba(178, 182, 189, 0.1)"
  color-dark-gray-4: "rgba(59, 61, 69, 0.4)"
  color-blue-6: "#616875"
  color-blue-7: "rgba(101, 106, 118, 0.1)"
  color-blue-8: "#0C56E9"
  color-blue-9: "#389AFF"
  color-purple-2: "#B457FF"
  color-light-gray-6: "rgba(178, 182, 189, 0.4)"
  color-blue-3: "rgba(101, 106, 118, 0.05)"
  color-blue-10: "#5990FF"
  color-light-gray-7: "rgba(178, 182, 189, 0.25)"
  color-blue-12: "rgba(97, 104, 117, 0.15)"
  color-blue-13: "rgba(97, 104, 117, 0.2)"
  color-dark-blue-2: "rgba(1, 1, 63, 0.1)"
  color-light-gray-5: "rgba(239, 239, 241, 0.27)"
  color-purple: "#7B42BC"
  color-light-blue: "#6C81FF"
  color-light-purple: "#C08DFF"
  color-light-blue-2: "#A8B5FF"
  color-light-purple-2: "#CFA9FC"
  color-light-red: "#FF8791"
  color-light-orange: "#F9B571"
  color-light-red-2: "#FDAFB5"
  color-light-orange-2: "#FFD1A2"
typography:
  display:
    fontFamily: Times
    fontSize: 82px
    fontWeight: 500
    lineHeight: 95.9974px
    letterSpacing: 0.175px
  h1:
    fontFamily: Times
    fontSize: 52px
    fontWeight: 500
    lineHeight: 61.9996px
    letterSpacing: 0.175px
  h2:
    fontFamily: Times
    fontSize: 42px
    fontWeight: 500
    lineHeight: 49.9968px
    letterSpacing: 0.175px
  h3:
    fontFamily: Times
    fontSize: 34px
    fontWeight: 500
    lineHeight: 39.9976px
    letterSpacing: 0.175px
  body-lg:
    fontFamily: Times
    fontSize: 26px
    fontWeight: 500
    lineHeight: 30.9998px
    letterSpacing: 0.175px
  body-md:
    fontFamily: Times
    fontSize: 20px
    fontWeight: 500
    lineHeight: 30px
    letterSpacing: 0.175px
  body-sm:
    fontFamily: Times
    fontSize: 19px
    fontWeight: 500
    lineHeight: 27px
    letterSpacing: 0.175px
  caption:
    fontFamily: Times
    fontSize: 17px
    fontWeight: 500
    lineHeight: 26px
    letterSpacing: 0.175px
  code:
    fontFamily: system-ui
    fontSize: 14px
    fontWeight: 400
rounded:
  sm: 2px
  md: 3px
  lg: 4px
  xl: 5px
  2xl: 6px
  full: 8px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 128px
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

This design system was auto-extracted from https://www.hashicorp.com/en (44 colors · 39 type tokens · 21 spacing steps · 30 breakpoints · 7 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-15T18:00:37.385Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#808080):** Muted text, borders, and metadata.
- **tertiary (#2B89FF):** Primary accent for links, buttons, and focus states.
- **neutral (#3B3D45):** Primary readable text on dark surfaces.
- **on-primary (#3B3D45):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-blue-5 (#1060FF):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#0D0E12):** Supporting token from the extracted palette.
- **color-white-2 (#FAFAFA):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#15181E):** Supporting token from the extracted palette.
- **color-dark-blue (#2B303C):** Supporting token from the extracted palette.
- **color-blue-11 (#7948FF):** Supporting token from the extracted palette.
- **color-orange (#FF6423):** Supporting token from the extracted palette.
- **color-dark-purple (#42225B):** Supporting token from the extracted palette.
- **color-light-gray (#D5D7DB):** Supporting token from the extracted palette.
- **color-blue (#2264D6):** Supporting token from the extracted palette.
- **color-light-gray-2 (#EFEFF1):** Supporting token from the extracted palette.
- **color-light-gray-3 (#B2B6BD):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#0C0C0E):** Supporting token from the extracted palette.
- **color-blue-2 (#656A76):** Supporting token from the extracted palette.
- **color-dark-gray-6 (#333333):** Supporting token from the extracted palette.
- **color-light-gray-4 (rgba(178, 182, 189, 0.1)):** Supporting token from the extracted palette.
- **color-dark-gray-4 (rgba(59, 61, 69, 0.4)):** Supporting token from the extracted palette.
- **color-blue-6 (#616875):** Supporting token from the extracted palette.
- **color-blue-7 (rgba(101, 106, 118, 0.1)):** Supporting token from the extracted palette.
- **color-blue-8 (#0C56E9):** Supporting token from the extracted palette.
- **color-blue-9 (#389AFF):** Supporting token from the extracted palette.
- **color-purple-2 (#B457FF):** Supporting token from the extracted palette.
- **color-light-gray-6 (rgba(178, 182, 189, 0.4)):** Supporting token from the extracted palette.
- **color-blue-3 (rgba(101, 106, 118, 0.05)):** Supporting token from the extracted palette.
- **color-blue-10 (#5990FF):** Supporting token from the extracted palette.
- **color-light-gray-7 (rgba(178, 182, 189, 0.25)):** Supporting token from the extracted palette.
- **color-blue-12 (rgba(97, 104, 117, 0.15)):** Supporting token from the extracted palette.
- **color-blue-13 (rgba(97, 104, 117, 0.2)):** Supporting token from the extracted palette.
- **color-dark-blue-2 (rgba(1, 1, 63, 0.1)):** Supporting token from the extracted palette.
- **color-light-gray-5 (rgba(239, 239, 241, 0.27)):** Supporting token from the extracted palette.
- **color-purple (#7B42BC):** Supporting token from the extracted palette.
- **color-light-blue (#6C81FF):** Supporting token from the extracted palette.
- **color-light-purple (#C08DFF):** Supporting token from the extracted palette.
- **color-light-blue-2 (#A8B5FF):** Supporting token from the extracted palette.
- **color-light-purple-2 (#CFA9FC):** Supporting token from the extracted palette.
- **color-light-red (#FF8791):** Supporting token from the extracted palette.
- **color-light-orange (#F9B571):** Supporting token from the extracted palette.
- **color-light-red-2 (#FDAFB5):** Supporting token from the extracted palette.
- **color-light-orange-2 (#FFD1A2):** Supporting token from the extracted palette.

## Typography

Primary typeface: **system-ui, __hashicorpSans_96f0ca, Arial, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Times, 82px, weight 500.
- **h1:** font Times, 52px, weight 500.
- **h2:** font Times, 42px, weight 500.
- **h3:** font Times, 34px, weight 500.
- **body-lg:** font Times, 26px, weight 500.
- **body-md:** font Times, 20px, weight 500.
- **body-sm:** font Times, 19px, weight 500.
- **caption:** font Times, 17px, weight 500.
- **code:** font system-ui, 14px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (128px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (326px):** Responsive layout threshold.
- **sm (340px):** Responsive layout threshold.
- **md (375px):** Responsive layout threshold.
- **lg (460px):** Responsive layout threshold.
- **xl (480px):** Responsive layout threshold.
- **2xl (500px):** Responsive layout threshold.
- **3xl (551px):** Responsive layout threshold.
- **bp-8 (560px):** Responsive layout threshold.
- **bp-9 (600px):** Responsive layout threshold.
- **bp-10 (650px):** Responsive layout threshold.
- **bp-11 (700px):** Responsive layout threshold.
- **bp-12 (744px):** Responsive layout threshold.
- **bp-13 (750px):** Responsive layout threshold.
- **bp-14 (767px):** Responsive layout threshold.
- **bp-15 (768px):** Responsive layout threshold.
- **bp-16 (800px):** Responsive layout threshold.
- **bp-17 (850px):** Responsive layout threshold.
- **bp-18 (860px):** Responsive layout threshold.
- **bp-19 (900px):** Responsive layout threshold.
- **bp-20 (924px):** Responsive layout threshold.
- **bp-21 (925px):** Responsive layout threshold.
- **bp-22 (975px):** Responsive layout threshold.
- **bp-23 (991px):** Responsive layout threshold.
- **bp-24 (992px):** Responsive layout threshold.
- **bp-25 (1024px):** Responsive layout threshold.
- **bp-26 (1119px):** Responsive layout threshold.
- **bp-27 (1120px):** Responsive layout threshold.
- **bp-28 (1150px):** Responsive layout threshold.
- **bp-29 (1556px):** Responsive layout threshold.
- **bp-30 (1600px):** Responsive layout threshold.
- **breakpoint-xs (326px):** Responsive layout threshold.
- **breakpoint-sm (340px):** Responsive layout threshold.
- **breakpoint-md (375px):** Responsive layout threshold.
- **breakpoint-lg (460px):** Responsive layout threshold.
- **breakpoint-xl (480px):** Responsive layout threshold.
- **breakpoint-2xl (500px):** Responsive layout threshold.
- **breakpoint-3xl (551px):** Responsive layout threshold.
- **breakpoint-bp-8 (560px):** Responsive layout threshold.
- **breakpoint-bp-9 (600px):** Responsive layout threshold.
- **breakpoint-bp-10 (650px):** Responsive layout threshold.
- **breakpoint-bp-11 (700px):** Responsive layout threshold.
- **breakpoint-bp-12 (744px):** Responsive layout threshold.
- **breakpoint-bp-13 (750px):** Responsive layout threshold.
- **breakpoint-bp-14 (767px):** Responsive layout threshold.
- **breakpoint-bp-15 (768px):** Responsive layout threshold.
- **breakpoint-bp-16 (800px):** Responsive layout threshold.
- **breakpoint-bp-17 (850px):** Responsive layout threshold.
- **breakpoint-bp-18 (860px):** Responsive layout threshold.
- **breakpoint-bp-19 (900px):** Responsive layout threshold.
- **breakpoint-bp-20 (924px):** Responsive layout threshold.
- **breakpoint-bp-21 (925px):** Responsive layout threshold.
- **breakpoint-bp-22 (975px):** Responsive layout threshold.
- **breakpoint-bp-23 (991px):** Responsive layout threshold.
- **breakpoint-bp-24 (992px):** Responsive layout threshold.
- **breakpoint-bp-25 (1024px):** Responsive layout threshold.
- **breakpoint-bp-26 (1119px):** Responsive layout threshold.
- **breakpoint-bp-27 (1120px):** Responsive layout threshold.
- **breakpoint-bp-28 (1150px):** Responsive layout threshold.
- **breakpoint-bp-29 (1556px):** Responsive layout threshold.
- **breakpoint-bp-30 (1600px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(97, 104, 117, 0.05) 0px 1px 1px 0px, rgba(97, 104, 117, 0.05) 0px 2px 2px 0px`
- **md:** `rgba(101, 106, 118, 0.05) 0px 1px 1px 0px, rgba(101, 106, 118, 0.05) 0px 2px 2px 0px`
- **lg:** `rgba(97, 104, 117, 0.1) 0px 1px 2px 1px inset`
- **xl:** `rgb(89, 144, 255) 0px 0px 0px 3px, rgba(101, 106, 118, 0.05) 0px 1px 1px 0px, rgba(101, 106, 118, 0.05) 0px 2px 2px 0px`
- **shadow-5:** `rgba(178, 182, 189, 0.25) 0px 0px 0px 1px, rgba(97, 104, 117, 0.15) 0px 2px 3px 0px, rgba(97, 104, 117, 0.2) 0px 16px 16px -10px`
- **shadow-6:** `rgba(1, 1, 63, 0.1) 0px 2px 19px -4px`
- **shadow-sm:** `rgba(97, 104, 117, 0.05) 0px 1px 1px 0px, rgba(97, 104, 117, 0.05) 0px 2px 2px 0px`
- **shadow-md:** `rgba(101, 106, 118, 0.05) 0px 1px 1px 0px, rgba(101, 106, 118, 0.05) 0px 2px 2px 0px`
- **shadow-lg:** `rgba(97, 104, 117, 0.1) 0px 1px 2px 1px inset`
- **shadow-xl:** `rgb(89, 144, 255) 0px 0px 0px 3px, rgba(101, 106, 118, 0.05) 0px 1px 1px 0px, rgba(101, 106, 118, 0.05) 0px 2px 2px 0px`
- **shadow-shadow-5:** `rgba(178, 182, 189, 0.25) 0px 0px 0px 1px, rgba(97, 104, 117, 0.15) 0px 2px 3px 0px, rgba(97, 104, 117, 0.2) 0px 16px 16px -10px`
- **shadow-shadow-6:** `rgba(1, 1, 63, 0.1) 0px 2px 19px -4px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (2px):** Border radius token.
- **md (3px):** Border radius token.
- **lg (4px):** Border radius token.
- **xl (5px):** Border radius token.
- **2xl (6px):** Border radius token.
- **full (8px):** Border radius token.

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
- Avoid pairing --color-dark-gray on --color-black (1.94:1, Fail).
- Avoid pairing --color-dark-gray on --color-blue-5 (2.13:1, Fail).
- Avoid pairing --color-dark-gray on --color-dark-gray-3 (1.78:1, Fail).
