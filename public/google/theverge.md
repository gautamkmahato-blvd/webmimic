---
version: alpha
name: "The Verge"
description: "Converted from UI Inspector extraction of https://www.theverge.com/"
colors:
  primary: "#000000"
  secondary: "#949494"
  tertiary: "#3CFFD0"
  neutral: "#949494"
  on-primary: "#949494"
  on-tertiary: "#FFFFFF"
  color-dark-gray: "#131313"
  color-blue: "#5200FF"
  color-dark-gray-2: "#313131"
  color-dark-gray-4: "#2D2D2D"
  color-green: "#468254"
  color-light-pink: "rgba(255, 194, 231, 0.9)"
  color-yellow: "rgba(214, 243, 31, 0.9)"
  color-blue-2: "#3860BE"
  color-white-2: "#F7F5FE"
  color-dark-gray-6: "#222222"
  color-red: "rgba(255, 61, 0, 0.9)"
  color-dark-gray-8: "rgba(39, 39, 39, 0.95)"
  color-white-3: "#F9FFFA"
  color-white-4: "#F9F9FC"
  color-white-5: "#F4F4F4"
  color-cyan-2: "#309875"
  color-light-gray: "#E9E9E9"
  color-dark-gray-3: "#555555"
  color-mid-gray-2: "#696969"
  color-light-gray-2: "#EFEFEF"
  color-dark-gray-5: "#656565"
  color-light-gray-3: "#BDBDBD"
  color-light-gray-4: "#C9C9C9"
  color-dark-gray-7: "#636363"
  color-cyan-3: "#32AE88"
  color-light-gray-6: "#C1C1C1"
  color-light-gray-7: "#D8D8D8"
  color-mid-gray-5: "#707070"
  color-light-gray-8: "#BBBBBB"
  color-light-gray-9: "#E2E2E2"
  color-light-gray-5: "#C7C5C7"
  color-mid-gray-3: "#808080"
  color-mid-gray-4: "#999999"
  color-dark-blue: "#2E3644"
typography:
  display:
    fontFamily: ui-sans-serif
    fontSize: 107px
    fontWeight: 500
    lineHeight: 85.6px
    letterSpacing: 0.13008px
  h1:
    fontFamily: ui-sans-serif
    fontSize: 65px
    fontWeight: 500
    lineHeight: 52px
    letterSpacing: 0.13008px
  h2:
    fontFamily: ui-sans-serif
    fontSize: 40px
    fontWeight: 500
    lineHeight: 35.2px
    letterSpacing: 0.13008px
  h3:
    fontFamily: ui-sans-serif
    fontSize: 32px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: 0.13008px
  body-lg:
    fontFamily: ui-sans-serif
    fontSize: 28px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: 0.13008px
  body-md:
    fontFamily: ui-sans-serif
    fontSize: 20px
    fontWeight: 500
    lineHeight: 27.2px
    letterSpacing: 0.13008px
  body-sm:
    fontFamily: ui-sans-serif
    fontSize: 19.2px
    fontWeight: 500
    lineHeight: 25.6px
    letterSpacing: 0.13008px
  caption:
    fontFamily: ui-sans-serif
    fontSize: 18px
    fontWeight: 500
    lineHeight: 24.96px
    letterSpacing: 0.13008px
  code:
    fontFamily: __polySansMono_0b836e
    fontSize: 11px
    fontWeight: 400
rounded:
  sm: 1px
  md: 2px
  lg: 3px
  xl: 4px
  2xl: 10px
  full: 17px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 30px
  2xl: 266.5px
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

This design system was auto-extracted from https://www.theverge.com/ (38 colors · 71 type tokens · 30 spacing steps · 25 breakpoints · 10 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-18T08:23:33.494Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#949494):** Muted text, borders, and metadata.
- **tertiary (#3CFFD0):** Primary accent for links, buttons, and focus states.
- **neutral (#949494):** Primary readable text on dark surfaces.
- **on-primary (#949494):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-dark-gray (#131313):** Supporting token from the extracted palette.
- **color-blue (#5200FF):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#313131):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#2D2D2D):** Supporting token from the extracted palette.
- **color-green (#468254):** Supporting token from the extracted palette.
- **color-light-pink (rgba(255, 194, 231, 0.9)):** Supporting token from the extracted palette.
- **color-yellow (rgba(214, 243, 31, 0.9)):** Supporting token from the extracted palette.
- **color-blue-2 (#3860BE):** Supporting token from the extracted palette.
- **color-white-2 (#F7F5FE):** Supporting token from the extracted palette.
- **color-dark-gray-6 (#222222):** Supporting token from the extracted palette.
- **color-red (rgba(255, 61, 0, 0.9)):** Supporting token from the extracted palette.
- **color-dark-gray-8 (rgba(39, 39, 39, 0.95)):** Supporting token from the extracted palette.
- **color-white-3 (#F9FFFA):** Supporting token from the extracted palette.
- **color-white-4 (#F9F9FC):** Supporting token from the extracted palette.
- **color-white-5 (#F4F4F4):** Supporting token from the extracted palette.
- **color-cyan-2 (#309875):** Supporting token from the extracted palette.
- **color-light-gray (#E9E9E9):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#555555):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#696969):** Supporting token from the extracted palette.
- **color-light-gray-2 (#EFEFEF):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#656565):** Supporting token from the extracted palette.
- **color-light-gray-3 (#BDBDBD):** Supporting token from the extracted palette.
- **color-light-gray-4 (#C9C9C9):** Supporting token from the extracted palette.
- **color-dark-gray-7 (#636363):** Supporting token from the extracted palette.
- **color-cyan-3 (#32AE88):** Supporting token from the extracted palette.
- **color-light-gray-6 (#C1C1C1):** Supporting token from the extracted palette.
- **color-light-gray-7 (#D8D8D8):** Supporting token from the extracted palette.
- **color-mid-gray-5 (#707070):** Supporting token from the extracted palette.
- **color-light-gray-8 (#BBBBBB):** Supporting token from the extracted palette.
- **color-light-gray-9 (#E2E2E2):** Supporting token from the extracted palette.
- **color-light-gray-5 (#C7C5C7):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#808080):** Supporting token from the extracted palette.
- **color-mid-gray-4 (#999999):** Supporting token from the extracted palette.
- **color-dark-blue (#2E3644):** Supporting token from the extracted palette.

## Typography

Primary typeface: **__polySansMono_0b836e, __polySans_9afc27, __manuka_62afb5, __fkRomanStandard_cfceed, Family, ui-sans-serif**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font ui-sans-serif, 107px, weight 500.
- **h1:** font ui-sans-serif, 65px, weight 500.
- **h2:** font ui-sans-serif, 40px, weight 500.
- **h3:** font ui-sans-serif, 32px, weight 500.
- **body-lg:** font ui-sans-serif, 28px, weight 500.
- **body-md:** font ui-sans-serif, 20px, weight 500.
- **body-sm:** font ui-sans-serif, 19.2px, weight 500.
- **caption:** font ui-sans-serif, 18px, weight 500.
- **code:** font __polySansMono_0b836e, 11px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (30px):** Layout rhythm and component padding.
- **2xl (266.5px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (320px):** Responsive layout threshold.
- **sm (400px):** Responsive layout threshold.
- **md (425px):** Responsive layout threshold.
- **lg (426px):** Responsive layout threshold.
- **xl (530px):** Responsive layout threshold.
- **2xl (549px):** Responsive layout threshold.
- **3xl (550px):** Responsive layout threshold.
- **bp-8 (600px):** Responsive layout threshold.
- **bp-9 (605px):** Responsive layout threshold.
- **bp-10 (620px):** Responsive layout threshold.
- **bp-11 (768px):** Responsive layout threshold.
- **bp-12 (769px):** Responsive layout threshold.
- **bp-13 (890px):** Responsive layout threshold.
- **bp-14 (896px):** Responsive layout threshold.
- **bp-15 (897px):** Responsive layout threshold.
- **bp-16 (900px):** Responsive layout threshold.
- **bp-17 (901px):** Responsive layout threshold.
- **bp-18 (1023px):** Responsive layout threshold.
- **bp-19 (1024px):** Responsive layout threshold.
- **bp-20 (1179px):** Responsive layout threshold.
- **bp-21 (1180px):** Responsive layout threshold.
- **bp-22 (1181px):** Responsive layout threshold.
- **bp-23 (1200px):** Responsive layout threshold.
- **bp-24 (1280px):** Responsive layout threshold.
- **bp-25 (1300px):** Responsive layout threshold.
- **breakpoint-xs (320px):** Responsive layout threshold.
- **breakpoint-sm (400px):** Responsive layout threshold.
- **breakpoint-md (425px):** Responsive layout threshold.
- **breakpoint-lg (426px):** Responsive layout threshold.
- **breakpoint-xl (530px):** Responsive layout threshold.
- **breakpoint-2xl (549px):** Responsive layout threshold.
- **breakpoint-3xl (550px):** Responsive layout threshold.
- **breakpoint-bp-8 (600px):** Responsive layout threshold.
- **breakpoint-bp-9 (605px):** Responsive layout threshold.
- **breakpoint-bp-10 (620px):** Responsive layout threshold.
- **breakpoint-bp-11 (768px):** Responsive layout threshold.
- **breakpoint-bp-12 (769px):** Responsive layout threshold.
- **breakpoint-bp-13 (890px):** Responsive layout threshold.
- **breakpoint-bp-14 (896px):** Responsive layout threshold.
- **breakpoint-bp-15 (897px):** Responsive layout threshold.
- **breakpoint-bp-16 (900px):** Responsive layout threshold.
- **breakpoint-bp-17 (901px):** Responsive layout threshold.
- **breakpoint-bp-18 (1023px):** Responsive layout threshold.
- **breakpoint-bp-19 (1024px):** Responsive layout threshold.
- **breakpoint-bp-20 (1179px):** Responsive layout threshold.
- **breakpoint-bp-21 (1180px):** Responsive layout threshold.
- **breakpoint-bp-22 (1181px):** Responsive layout threshold.
- **breakpoint-bp-23 (1200px):** Responsive layout threshold.
- **breakpoint-bp-24 (1280px):** Responsive layout threshold.
- **breakpoint-bp-25 (1300px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0) 0px -1px 0px 0px inset`
- **md:** `rgb(60, 255, 208) 0px -1px 0px 0px inset`
- **lg:** `rgb(0, 0, 0) 0px -1px 0px 0px inset`
- **xl:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px inset`
- **shadow-5:** `rgb(255, 255, 255) 0px -1px 0px 0px inset`
- **shadow-6:** `rgba(0, 0, 0, 0.4) 0px 4px 10px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0) 0px -1px 0px 0px inset`
- **shadow-md:** `rgb(60, 255, 208) 0px -1px 0px 0px inset`
- **shadow-lg:** `rgb(0, 0, 0) 0px -1px 0px 0px inset`
- **shadow-xl:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px inset`
- **shadow-shadow-5:** `rgb(255, 255, 255) 0px -1px 0px 0px inset`
- **shadow-shadow-6:** `rgba(0, 0, 0, 0.4) 0px 4px 10px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (1px):** Border radius token.
- **md (2px):** Border radius token.
- **lg (3px):** Border radius token.
- **xl (4px):** Border radius token.
- **2xl (10px):** Border radius token.
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
- Avoid pairing --color-mid-gray on --color-cyan (2.37:1, Fail).
- Avoid pairing --color-mid-gray on --color-blue (2.47:1, Fail).
- Avoid pairing --color-cyan-2 on --color-cyan (2.79:1, Fail).
