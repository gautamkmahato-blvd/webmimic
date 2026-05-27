---
version: alpha
name: "AI Innovation Workspace"
description: "Converted from UI Inspector extraction of https://miro.com/"
colors:
  primary: "#000000"
  secondary: "#696969"
  tertiary: "#32AE88"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-dark-gray: "#1C1C1E"
  color-light-gray: "#C7CAD5"
  color-dark-blue: "#27455C"
  color-light-yellow: "#FFF09A"
  color-light-green: "#C3F4D6"
  color-light-cyan: "#E1FBF9"
  color-white-2: "#FFFAE7"
  color-light-green-2: "#E3F7EA"
  color-light-orange: "#FFE6CD"
  color-light-blue-2: "#E5E2FF"
  color-green: "#6CC04A"
  color-light-gray-3: "#F0F0F0"
  color-light-pink: "#FDE0F0"
  color-yellow-2: "#FDE050"
  color-light-blue-4: "#CDD8FF"
  color-blue-4: "#3859FF"
  color-white-3: "#FAFAFC"
  color-light-gray-5: "#E5E7EB"
  color-light-blue-6: "#D1CDFF"
  color-light-red: "#FFB4B4"
  color-light-cyan-2: "#A8F7F0"
  color-dark-blue-5: "rgba(51, 57, 76, 0.7)"
  color-white-4: "#F9FFFA"
  color-blue-10: "#3860BE"
  color-blue: "#0000EE"
  color-dark-gray-2: "#555555"
  color-blue-2: "#555A6A"
  color-dark-gray-3: "#222428"
  color-dark-gray-4: "#656565"
  color-dark-orange: "#6C4E05"
  color-blue-3: "#656B81"
  color-dark-blue-4: "#000099"
  color-dark-red: "#600000"
  color-dark-gray-7: "#111111"
  color-dark-orange-2: "#876208"
  color-dark-cyan: "#004E6F"
  color-dark-cyan-2: "#0E4343"
  color-green-2: "#0AAE3A"
  color-dark-cyan-3: "#187574"
  color-yellow-3: "#D7B029"
  color-dark-green: "#067429"
  color-orange: "#DB8641"
  color-blue-5: "#655BE6"
  color-mid-gray-2: "#808080"
  color-dark-blue-2: "#4A5565"
  color-dark-blue-3: "rgba(5, 0, 56, 0.1) rgb(0, 0, 0) rgb(0, 0, 0)"
  color-light-blue: "#7A90FE"
  color-pink: "#FB64B6"
  color-light-gray-6: "#E9EAEF"
  color-light-gray-8: "#D1D1D1"
  color-light-gray-9: "#BBBBBB"
  color-light-gray-4: "#C7C5C7"
  color-light-gray-7: "#E0E2E8"
  color-mid-gray-3: "#999999"
  color-light-gray-2: "#E5E5E5"
  color-light-green-3: "#C5E8C8"
  color-light-blue-3: "#C6C5E8"
  color-red: "#DB4F4F"
  color-dark-gray-5: "#212121"
  color-dark-gray-6: "rgba(18, 18, 18, 0.25)"
  color-yellow: "#FFDD33"
  color-light-blue-5: "rgba(122, 144, 254, 0.4)"
  color-blue-6: "#5974FF"
  color-blue-7: "#395AFF"
  color-blue-8: "#322BFE"
  color-blue-9: "#6E3CFE"
  color-purple: "#A34CFF"
  color-purple-2: "#D05DFF"
  color-light-pink-2: "#F66EFF"
  color-cyan-2: "#0E9DCD"
  color-dark-blue-6: "#2E3644"
  color-light-yellow-2: "#FFE86D"
typography:
  display:
    fontFamily: Times
    fontSize: 48px
    fontWeight: 500
    lineHeight: 57.6px
    letterSpacing: -1.2px
  h1:
    fontFamily: Times
    fontSize: 40px
    fontWeight: 500
    lineHeight: 55.2px
    letterSpacing: -1.2px
  h2:
    fontFamily: Times
    fontSize: 24px
    fontWeight: 500
    lineHeight: 46px
    letterSpacing: -1.2px
  h3:
    fontFamily: Times
    fontSize: 22px
    fontWeight: 500
    lineHeight: 29.7px
    letterSpacing: -1.2px
  body-lg:
    fontFamily: Times
    fontSize: 18px
    fontWeight: 500
    lineHeight: 27.6px
    letterSpacing: -1.2px
  body-md:
    fontFamily: Times
    fontSize: 17.23px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: -1.2px
  body-sm:
    fontFamily: Times
    fontSize: 16px
    fontWeight: 500
    lineHeight: 22.8571px
    letterSpacing: -1.2px
  caption:
    fontFamily: Times
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20.8px
    letterSpacing: -1.2px
  code:
    fontFamily: sans-serif
    fontSize: 12.992px
    fontWeight: 400
rounded:
  sm: "0px 8px 8px 0px"
  md: "0px 0px 20px 20px"
  lg: 1px
  xl: 2px
  2xl: 2.5px
  full: 3px
spacing:
  xs: 4px
  sm: 8px
  md: 14px
  lg: 24px
  xl: 32px
  2xl: 330.562px
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

This design system was auto-extracted from https://miro.com/ (76 colors · 50 type tokens · 25 spacing steps · 29 breakpoints · 9 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-15T18:11:06.370Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#696969):** Muted text, borders, and metadata.
- **tertiary (#32AE88):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-dark-gray (#1C1C1E):** Supporting token from the extracted palette.
- **color-light-gray (#C7CAD5):** Supporting token from the extracted palette.
- **color-dark-blue (#27455C):** Supporting token from the extracted palette.
- **color-light-yellow (#FFF09A):** Supporting token from the extracted palette.
- **color-light-green (#C3F4D6):** Supporting token from the extracted palette.
- **color-light-cyan (#E1FBF9):** Supporting token from the extracted palette.
- **color-white-2 (#FFFAE7):** Supporting token from the extracted palette.
- **color-light-green-2 (#E3F7EA):** Supporting token from the extracted palette.
- **color-light-orange (#FFE6CD):** Supporting token from the extracted palette.
- **color-light-blue-2 (#E5E2FF):** Supporting token from the extracted palette.
- **color-green (#6CC04A):** Supporting token from the extracted palette.
- **color-light-gray-3 (#F0F0F0):** Supporting token from the extracted palette.
- **color-light-pink (#FDE0F0):** Supporting token from the extracted palette.
- **color-yellow-2 (#FDE050):** Supporting token from the extracted palette.
- **color-light-blue-4 (#CDD8FF):** Supporting token from the extracted palette.
- **color-blue-4 (#3859FF):** Supporting token from the extracted palette.
- **color-white-3 (#FAFAFC):** Supporting token from the extracted palette.
- **color-light-gray-5 (#E5E7EB):** Supporting token from the extracted palette.
- **color-light-blue-6 (#D1CDFF):** Supporting token from the extracted palette.
- **color-light-red (#FFB4B4):** Supporting token from the extracted palette.
- **color-light-cyan-2 (#A8F7F0):** Supporting token from the extracted palette.
- **color-dark-blue-5 (rgba(51, 57, 76, 0.7)):** Supporting token from the extracted palette.
- **color-white-4 (#F9FFFA):** Supporting token from the extracted palette.
- **color-blue-10 (#3860BE):** Supporting token from the extracted palette.
- **color-blue (#0000EE):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#555555):** Supporting token from the extracted palette.
- **color-blue-2 (#555A6A):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#222428):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#656565):** Supporting token from the extracted palette.
- **color-dark-orange (#6C4E05):** Supporting token from the extracted palette.
- **color-blue-3 (#656B81):** Supporting token from the extracted palette.
- **color-dark-blue-4 (#000099):** Supporting token from the extracted palette.
- **color-dark-red (#600000):** Supporting token from the extracted palette.
- **color-dark-gray-7 (#111111):** Supporting token from the extracted palette.
- **color-dark-orange-2 (#876208):** Supporting token from the extracted palette.
- **color-dark-cyan (#004E6F):** Supporting token from the extracted palette.
- **color-dark-cyan-2 (#0E4343):** Supporting token from the extracted palette.
- **color-green-2 (#0AAE3A):** Supporting token from the extracted palette.
- **color-dark-cyan-3 (#187574):** Supporting token from the extracted palette.
- **color-yellow-3 (#D7B029):** Supporting token from the extracted palette.
- **color-dark-green (#067429):** Supporting token from the extracted palette.
- **color-orange (#DB8641):** Supporting token from the extracted palette.
- **color-blue-5 (#655BE6):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#808080):** Supporting token from the extracted palette.
- **color-dark-blue-2 (#4A5565):** Supporting token from the extracted palette.
- **color-dark-blue-3 (rgba(5, 0, 56, 0.1) rgb(0, 0, 0) rgb(0, 0, 0)):** Supporting token from the extracted palette.
- **color-light-blue (#7A90FE):** Supporting token from the extracted palette.
- **color-pink (#FB64B6):** Supporting token from the extracted palette.
- **color-light-gray-6 (#E9EAEF):** Supporting token from the extracted palette.
- **color-light-gray-8 (#D1D1D1):** Supporting token from the extracted palette.
- **color-light-gray-9 (#BBBBBB):** Supporting token from the extracted palette.
- **color-light-gray-4 (#C7C5C7):** Supporting token from the extracted palette.
- **color-light-gray-7 (#E0E2E8):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#999999):** Supporting token from the extracted palette.
- **color-light-gray-2 (#E5E5E5):** Supporting token from the extracted palette.
- **color-light-green-3 (#C5E8C8):** Supporting token from the extracted palette.
- **color-light-blue-3 (#C6C5E8):** Supporting token from the extracted palette.
- **color-red (#DB4F4F):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#212121):** Supporting token from the extracted palette.
- **color-dark-gray-6 (rgba(18, 18, 18, 0.25)):** Supporting token from the extracted palette.
- **color-yellow (#FFDD33):** Supporting token from the extracted palette.
- **color-light-blue-5 (rgba(122, 144, 254, 0.4)):** Supporting token from the extracted palette.
- **color-blue-6 (#5974FF):** Supporting token from the extracted palette.
- **color-blue-7 (#395AFF):** Supporting token from the extracted palette.
- **color-blue-8 (#322BFE):** Supporting token from the extracted palette.
- **color-blue-9 (#6E3CFE):** Supporting token from the extracted palette.
- **color-purple (#A34CFF):** Supporting token from the extracted palette.
- **color-purple-2 (#D05DFF):** Supporting token from the extracted palette.
- **color-light-pink-2 (#F66EFF):** Supporting token from the extracted palette.
- **color-cyan-2 (#0E9DCD):** Supporting token from the extracted palette.
- **color-dark-blue-6 (#2E3644):** Supporting token from the extracted palette.
- **color-light-yellow-2 (#FFE86D):** Supporting token from the extracted palette.

## Typography

Primary typeface: **sans-serif, Noto Sans, Roobert PRO, Roobert PRO Medium, Open Sans, Roobert PRO SemiBold, Nanum Pen Script, Roobert PRO SemiBold Italic, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Times, 48px, weight 500.
- **h1:** font Times, 40px, weight 500.
- **h2:** font Times, 24px, weight 500.
- **h3:** font Times, 22px, weight 500.
- **body-lg:** font Times, 18px, weight 500.
- **body-md:** font Times, 17.23px, weight 500.
- **body-sm:** font Times, 16px, weight 500.
- **caption:** font Times, 14px, weight 500.
- **code:** font sans-serif, 12.992px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (14px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (330.562px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (400px):** Responsive layout threshold.
- **sm (425px):** Responsive layout threshold.
- **md (426px):** Responsive layout threshold.
- **lg (460px):** Responsive layout threshold.
- **xl (476px):** Responsive layout threshold.
- **2xl (530px):** Responsive layout threshold.
- **3xl (550px):** Responsive layout threshold.
- **bp-8 (576px):** Responsive layout threshold.
- **bp-9 (600px):** Responsive layout threshold.
- **bp-10 (767px):** Responsive layout threshold.
- **bp-11 (768px):** Responsive layout threshold.
- **bp-12 (769px):** Responsive layout threshold.
- **bp-13 (809px):** Responsive layout threshold.
- **bp-14 (809.98px):** Responsive layout threshold.
- **bp-15 (810px):** Responsive layout threshold.
- **bp-16 (890px):** Responsive layout threshold.
- **bp-17 (896px):** Responsive layout threshold.
- **bp-18 (897px):** Responsive layout threshold.
- **bp-19 (1023px):** Responsive layout threshold.
- **bp-20 (1024px):** Responsive layout threshold.
- **bp-21 (1199px):** Responsive layout threshold.
- **bp-22 (1199.98px):** Responsive layout threshold.
- **bp-23 (1200px):** Responsive layout threshold.
- **bp-24 (1280px):** Responsive layout threshold.
- **bp-25 (1365px):** Responsive layout threshold.
- **bp-26 (1365.98px):** Responsive layout threshold.
- **bp-27 (1366px):** Responsive layout threshold.
- **bp-28 (1700px):** Responsive layout threshold.
- **bp-29 (1920px):** Responsive layout threshold.
- **breakpoint-xs (400px):** Responsive layout threshold.
- **breakpoint-sm (425px):** Responsive layout threshold.
- **breakpoint-md (426px):** Responsive layout threshold.
- **breakpoint-lg (460px):** Responsive layout threshold.
- **breakpoint-xl (476px):** Responsive layout threshold.
- **breakpoint-2xl (530px):** Responsive layout threshold.
- **breakpoint-3xl (550px):** Responsive layout threshold.
- **breakpoint-bp-8 (576px):** Responsive layout threshold.
- **breakpoint-bp-9 (600px):** Responsive layout threshold.
- **breakpoint-bp-10 (767px):** Responsive layout threshold.
- **breakpoint-bp-11 (768px):** Responsive layout threshold.
- **breakpoint-bp-12 (769px):** Responsive layout threshold.
- **breakpoint-bp-13 (809px):** Responsive layout threshold.
- **breakpoint-bp-14 (809.98px):** Responsive layout threshold.
- **breakpoint-bp-15 (810px):** Responsive layout threshold.
- **breakpoint-bp-16 (890px):** Responsive layout threshold.
- **breakpoint-bp-17 (896px):** Responsive layout threshold.
- **breakpoint-bp-18 (897px):** Responsive layout threshold.
- **breakpoint-bp-19 (1023px):** Responsive layout threshold.
- **breakpoint-bp-20 (1024px):** Responsive layout threshold.
- **breakpoint-bp-21 (1199px):** Responsive layout threshold.
- **breakpoint-bp-22 (1199.98px):** Responsive layout threshold.
- **breakpoint-bp-23 (1200px):** Responsive layout threshold.
- **breakpoint-bp-24 (1280px):** Responsive layout threshold.
- **breakpoint-bp-25 (1365px):** Responsive layout threshold.
- **breakpoint-bp-26 (1365.98px):** Responsive layout threshold.
- **breakpoint-bp-27 (1366px):** Responsive layout threshold.
- **breakpoint-bp-28 (1700px):** Responsive layout threshold.
- **breakpoint-bp-29 (1920px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.06) 0px 0.740973px 0.666876px -0.75px, rgba(0, 0, 0, 0.06) 0px 2.01787px 1.81608px -1.5px, rgba(0, 0, 0, 0.05) 0px 4.43051px 3.98745px -2.25px, rgba(0, 0, 0, 0.04) 0px 9.83471px 8.85124px -3px, rgba(0, 0, 0, 0.02) 0px 25px 22.5px -3.75px`
- **md:** `rgb(122, 144, 254) 0px 1px 1px 0px inset`
- **lg:** `rgba(0, 0, 0, 0.18) 0px 0.602187px 0.602187px -1.25px, rgba(0, 0, 0, 0.16) 0px 2.28853px 2.28853px -2.5px, rgba(0, 0, 0, 0.06) 0px 10px 10px -3.75px`
- **xl:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`
- **shadow-5:** `rgb(224, 226, 232) 0px 0px 0px 1px`
- **shadow-6:** `rgb(153, 153, 153) 0px 2px 10px -3px`
- **shadow-sm:** `rgba(0, 0, 0, 0.06) 0px 0.740973px 0.666876px -0.75px, rgba(0, 0, 0, 0.06) 0px 2.01787px 1.81608px -1.5px, rgba(0, 0, 0, 0.05) 0px 4.43051px 3.98745px -2.25px, rgba(0, 0, 0, 0.04) 0px 9.83471px 8.85124px -3px, rgba(0, 0, 0, 0.02) 0px 25px 22.5px -3.75px`
- **shadow-md:** `rgb(122, 144, 254) 0px 1px 1px 0px inset`
- **shadow-lg:** `rgba(0, 0, 0, 0.18) 0px 0.602187px 0.602187px -1.25px, rgba(0, 0, 0, 0.16) 0px 2.28853px 2.28853px -2.5px, rgba(0, 0, 0, 0.06) 0px 10px 10px -3.75px`
- **shadow-xl:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`
- **shadow-shadow-5:** `rgb(224, 226, 232) 0px 0px 0px 1px`
- **shadow-shadow-6:** `rgb(153, 153, 153) 0px 2px 10px -3px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 8px 8px 0px):** Border radius token.
- **md (0px 0px 20px 20px):** Border radius token.
- **lg (1px):** Border radius token.
- **xl (2px):** Border radius token.
- **2xl (2.5px):** Border radius token.
- **full (3px):** Border radius token.

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
- Avoid pairing --color-blue on --color-dark-gray (1.81:1, Fail).
- Avoid pairing --color-blue on --color-dark-blue (1.07:1, Fail).
