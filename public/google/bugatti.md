---
version: alpha
name: "Official Bugatti Store"
description: "Converted from UI Inspector extraction of https://bugatti.store/"
colors:
  primary: "#FFFFFF"
  secondary: "#FAFAFA"
  tertiary: "#00A2E5"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-black: "#000000"
  color-light-gray: "#E1E1E1"
  color-blue: "#004BFA"
  color-dark-gray: "#171717"
  color-red: "#E11D48"
  color-dark-gray-5: "#1F1F1F"
  color-dark-gray-7: "rgba(23, 23, 23, 0.4)"
  color-red-2: "#BE123C"
  color-dark-gray-6: "rgba(23, 23, 23, 0.1)"
  color-light-cyan: "rgba(168, 232, 226, 0.1)"
  color-light-gray-2: "rgba(225, 225, 225, 0.1)"
  color-blue-2: "#006FCF"
  color-dark-gray-2: "#1D1C1C"
  color-dark-gray-3: "#231F20"
  color-blue-3: "#3086C8"
  color-dark-gray-4: "#232323"
  color-red-3: "#EB001B"
  color-dark-blue: "#1E3764"
  color-orange: "#F48120"
  color-dark-gray-8: "#5F6368"
  color-blue-4: "#4285F4"
  color-green: "#34A853"
  color-orange-2: "#FBBC04"
  color-red-4: "#EA4335"
  color-light-yellow: "#FFF48D"
  color-pink: "#CC0066"
  color-light-red: "#FFA8CD"
  color-dark-blue-2: "#0B051D"
  color-blue-5: "#7375CF"
  color-orange-3: "#F79E1B"
  color-orange-4: "#FF5F00"
  color-dark-blue-3: "#003087"
  color-dark-blue-4: "#012169"
  color-blue-6: "#5A31F4"
  color-dark-blue-5: "#005B9A"
  color-red-5: "#E9292D"
  color-blue-7: "#0E73B9"
  color-dark-cyan: "#059DA4"
  color-dark-blue-6: "#142688"
typography:
  display:
    fontFamily: Times
    fontSize: 75px
    fontWeight: 500
    lineHeight: 75px
    letterSpacing: -2.14364px
  h1:
    fontFamily: Times
    fontSize: 53.5909px
    fontWeight: 500
    lineHeight: 53.5909px
    letterSpacing: -2.14364px
  h2:
    fontFamily: Times
    fontSize: 38.1594px
    fontWeight: 500
    lineHeight: 38.1594px
    letterSpacing: -2.14364px
  h3:
    fontFamily: Times
    fontSize: 32px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: -2.14364px
  body-lg:
    fontFamily: Times
    fontSize: 30px
    fontWeight: 500
    lineHeight: 30px
    letterSpacing: -2.14364px
  body-md:
    fontFamily: Times
    fontSize: 28.6196px
    fontWeight: 500
    lineHeight: 28.6196px
    letterSpacing: -2.14364px
  body-sm:
    fontFamily: Times
    fontSize: 28.1658px
    fontWeight: 500
    lineHeight: 28.1658px
    letterSpacing: -2.14364px
  caption:
    fontFamily: Times
    fontSize: 25.5408px
    fontWeight: 500
    lineHeight: 26.6692px
    letterSpacing: -2.14364px
  code:
    fontFamily: BugattiRegular
    fontSize: 12px
    fontWeight: 400
rounded:
  sm: "0px 0px 16px 16px"
  md: "0px 34px 34px 0px"
  lg: "0px 0px 17.8787px 17.8787px"
  xl: "0px 0px 8px 8px"
  2xl: 6px
  full: "8px 8px 0px 0px"
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 100px
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

This design system was auto-extracted from https://bugatti.store/ (42 colors · 68 type tokens · 34 spacing steps · 15 breakpoints · 10 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-14T07:58:59.995Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#FFFFFF):** Core surface and headline color.
- **secondary (#FAFAFA):** Muted text, borders, and metadata.
- **tertiary (#00A2E5):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-light-gray (#E1E1E1):** Supporting token from the extracted palette.
- **color-blue (#004BFA):** Supporting token from the extracted palette.
- **color-dark-gray (#171717):** Supporting token from the extracted palette.
- **color-red (#E11D48):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#1F1F1F):** Supporting token from the extracted palette.
- **color-dark-gray-7 (rgba(23, 23, 23, 0.4)):** Supporting token from the extracted palette.
- **color-red-2 (#BE123C):** Supporting token from the extracted palette.
- **color-dark-gray-6 (rgba(23, 23, 23, 0.1)):** Supporting token from the extracted palette.
- **color-light-cyan (rgba(168, 232, 226, 0.1)):** Supporting token from the extracted palette.
- **color-light-gray-2 (rgba(225, 225, 225, 0.1)):** Supporting token from the extracted palette.
- **color-blue-2 (#006FCF):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#1D1C1C):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#231F20):** Supporting token from the extracted palette.
- **color-blue-3 (#3086C8):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#232323):** Supporting token from the extracted palette.
- **color-red-3 (#EB001B):** Supporting token from the extracted palette.
- **color-dark-blue (#1E3764):** Supporting token from the extracted palette.
- **color-orange (#F48120):** Supporting token from the extracted palette.
- **color-dark-gray-8 (#5F6368):** Supporting token from the extracted palette.
- **color-blue-4 (#4285F4):** Supporting token from the extracted palette.
- **color-green (#34A853):** Supporting token from the extracted palette.
- **color-orange-2 (#FBBC04):** Supporting token from the extracted palette.
- **color-red-4 (#EA4335):** Supporting token from the extracted palette.
- **color-light-yellow (#FFF48D):** Supporting token from the extracted palette.
- **color-pink (#CC0066):** Supporting token from the extracted palette.
- **color-light-red (#FFA8CD):** Supporting token from the extracted palette.
- **color-dark-blue-2 (#0B051D):** Supporting token from the extracted palette.
- **color-blue-5 (#7375CF):** Supporting token from the extracted palette.
- **color-orange-3 (#F79E1B):** Supporting token from the extracted palette.
- **color-orange-4 (#FF5F00):** Supporting token from the extracted palette.
- **color-dark-blue-3 (#003087):** Supporting token from the extracted palette.
- **color-dark-blue-4 (#012169):** Supporting token from the extracted palette.
- **color-blue-6 (#5A31F4):** Supporting token from the extracted palette.
- **color-dark-blue-5 (#005B9A):** Supporting token from the extracted palette.
- **color-red-5 (#E9292D):** Supporting token from the extracted palette.
- **color-blue-7 (#0E73B9):** Supporting token from the extracted palette.
- **color-dark-cyan (#059DA4):** Supporting token from the extracted palette.
- **color-dark-blue-6 (#142688):** Supporting token from the extracted palette.

## Typography

Primary typeface: **BugattiRegular, BugattiBold, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Times, 75px, weight 500.
- **h1:** font Times, 53.5909px, weight 500.
- **h2:** font Times, 38.1594px, weight 500.
- **h3:** font Times, 32px, weight 500.
- **body-lg:** font Times, 30px, weight 500.
- **body-md:** font Times, 28.6196px, weight 500.
- **body-sm:** font Times, 28.1658px, weight 500.
- **caption:** font Times, 25.5408px, weight 500.
- **code:** font BugattiRegular, 12px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (100px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (400px):** Responsive layout threshold.
- **sm (639px):** Responsive layout threshold.
- **md (640px):** Responsive layout threshold.
- **lg (750px):** Responsive layout threshold.
- **xl (767px):** Responsive layout threshold.
- **2xl (768px):** Responsive layout threshold.
- **3xl (1023px):** Responsive layout threshold.
- **bp-8 (1024px):** Responsive layout threshold.
- **bp-9 (1200px):** Responsive layout threshold.
- **bp-10 (1279px):** Responsive layout threshold.
- **bp-11 (1280px):** Responsive layout threshold.
- **bp-12 (1400px):** Responsive layout threshold.
- **bp-13 (1536px):** Responsive layout threshold.
- **bp-14 (1920px):** Responsive layout threshold.
- **bp-15 (2200px):** Responsive layout threshold.
- **breakpoint-xs (400px):** Responsive layout threshold.
- **breakpoint-sm (639px):** Responsive layout threshold.
- **breakpoint-md (640px):** Responsive layout threshold.
- **breakpoint-lg (750px):** Responsive layout threshold.
- **breakpoint-xl (767px):** Responsive layout threshold.
- **breakpoint-2xl (768px):** Responsive layout threshold.
- **breakpoint-3xl (1023px):** Responsive layout threshold.
- **breakpoint-bp-8 (1024px):** Responsive layout threshold.
- **breakpoint-bp-9 (1200px):** Responsive layout threshold.
- **breakpoint-bp-10 (1279px):** Responsive layout threshold.
- **breakpoint-bp-11 (1280px):** Responsive layout threshold.
- **breakpoint-bp-12 (1400px):** Responsive layout threshold.
- **breakpoint-bp-13 (1536px):** Responsive layout threshold.
- **breakpoint-bp-14 (1920px):** Responsive layout threshold.
- **breakpoint-bp-15 (2200px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(168, 232, 226, 0) 0px 0px 0px 0px`
- **md:** `rgba(168, 232, 226, 0.1) 0px 0px 0px 0px`
- **shadow-sm:** `rgba(168, 232, 226, 0) 0px 0px 0px 0px`
- **shadow-md:** `rgba(168, 232, 226, 0.1) 0px 0px 0px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 0px 16px 16px):** Border radius token.
- **md (0px 34px 34px 0px):** Border radius token.
- **lg (0px 0px 17.8787px 17.8787px):** Border radius token.
- **xl (0px 0px 8px 8px):** Border radius token.
- **2xl (6px):** Border radius token.
- **full (8px 8px 0px 0px):** Border radius token.

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
- Avoid pairing --color-red-2 on --color-blue (1.01:1, Fail).
- Avoid pairing --color-red-2 on --color-dark-gray (2.85:1, Fail).
- Avoid pairing --color-white-2 on --color-white (1.04:1, Fail).
