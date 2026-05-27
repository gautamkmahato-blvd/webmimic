---
version: alpha
name: "Neon Serverless Postgres — Ship faster"
description: "Converted from UI Inspector extraction of https://neon.com/"
colors:
  primary: "#FFFFFF"
  secondary: "#94979E"
  tertiary: "#34D59A"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-dark-green: "#2C6D4C"
  color-black: "#000000"
  color-dark-gray-3: "#303236"
  color-mid-gray-3: "#AFB1B6"
  color-cyan-2: "#00E599"
  color-dark-gray-4: "#18191B"
  color-light-gray-3: "#E4F1EB"
  color-light-cyan: "#CAE6D9"
  color-dark-gray-8: "#111215"
  color-dark-gray-9: "#151617"
  color-black-3: "#0A0A0B"
  color-mid-gray-2: "#797D86"
  color-light-gray: "#C9CBCF"
  color-dark-gray: "#242628"
  color-dark-gray-2: "#61646B"
  color-light-gray-2: "#E4E5E7"
  color-red: "#FF3621"
  color-dark-cyan: "#285D49"
  color-dark-gray-5: "#1A1A1A"
  color-light-orange: "#F7B983"
  color-light-blue: "#94B5F7"
  color-dark-gray-6: "#131415"
  color-dark-gray-7: "#494B50"
  color-white-2: "#F9FAFA"
  color-white-3: "#F5FFFF"
  color-cyan-3: "#37C38F"
  color-black-2: "#0C0D0D"
  color-cyan-4: "rgba(57, 165, 125, 0.6)"
typography:
  display:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: 500
    lineHeight: 72px
    letterSpacing: -2.56px
  h1:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: 500
    lineHeight: 64px
    letterSpacing: -2.56px
  h2:
    fontFamily: Inter
    fontSize: 52px
    fontWeight: 500
    lineHeight: 58.5px
    letterSpacing: -2.56px
  h3:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: 500
    lineHeight: 45px
    letterSpacing: -2.56px
  body-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: 500
    lineHeight: 40.5px
    letterSpacing: -2.56px
  body-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 500
    lineHeight: 33px
    letterSpacing: -2.56px
  body-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: 500
    lineHeight: 30px
    letterSpacing: -2.56px
  caption:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 500
    lineHeight: 27.5px
    letterSpacing: -2.56px
  code:
    fontFamily: GeistMono
    fontSize: 11px
    fontWeight: 400
rounded:
  sm: 4px
  md: "100%"
  lg: "1.67772e+07px"
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 25px
  xl: 32px
  2xl: 271.055px
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

This design system was auto-extracted from https://neon.com/ (31 colors · 68 type tokens · 40 spacing steps · 6 breakpoints · 3 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-18T18:50:10.470Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#FFFFFF):** Core surface and headline color.
- **secondary (#94979E):** Muted text, borders, and metadata.
- **tertiary (#34D59A):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-dark-green (#2C6D4C):** Supporting token from the extracted palette.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#303236):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#AFB1B6):** Supporting token from the extracted palette.
- **color-cyan-2 (#00E599):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#18191B):** Supporting token from the extracted palette.
- **color-light-gray-3 (#E4F1EB):** Supporting token from the extracted palette.
- **color-light-cyan (#CAE6D9):** Supporting token from the extracted palette.
- **color-dark-gray-8 (#111215):** Supporting token from the extracted palette.
- **color-dark-gray-9 (#151617):** Supporting token from the extracted palette.
- **color-black-3 (#0A0A0B):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#797D86):** Supporting token from the extracted palette.
- **color-light-gray (#C9CBCF):** Supporting token from the extracted palette.
- **color-dark-gray (#242628):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#61646B):** Supporting token from the extracted palette.
- **color-light-gray-2 (#E4E5E7):** Supporting token from the extracted palette.
- **color-red (#FF3621):** Supporting token from the extracted palette.
- **color-dark-cyan (#285D49):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#1A1A1A):** Supporting token from the extracted palette.
- **color-light-orange (#F7B983):** Supporting token from the extracted palette.
- **color-light-blue (#94B5F7):** Supporting token from the extracted palette.
- **color-dark-gray-6 (#131415):** Supporting token from the extracted palette.
- **color-dark-gray-7 (#494B50):** Supporting token from the extracted palette.
- **color-white-2 (#F9FAFA):** Supporting token from the extracted palette.
- **color-white-3 (#F5FFFF):** Supporting token from the extracted palette.
- **color-cyan-3 (#37C38F):** Supporting token from the extracted palette.
- **color-black-2 (#0C0D0D):** Supporting token from the extracted palette.
- **color-cyan-4 (rgba(57, 165, 125, 0.6)):** Supporting token from the extracted palette.

## Typography

Primary typeface: **GeistMono, Family, Inter**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Inter, 72px, weight 500.
- **h1:** font Inter, 64px, weight 500.
- **h2:** font Inter, 52px, weight 500.
- **h3:** font Inter, 40px, weight 500.
- **body-lg:** font Inter, 36px, weight 500.
- **body-md:** font Inter, 24px, weight 500.
- **body-sm:** font Inter, 20px, weight 500.
- **caption:** font Inter, 18px, weight 500.
- **code:** font GeistMono, 11px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (25px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (271.055px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (413px):** Responsive layout threshold.
- **sm (767px):** Responsive layout threshold.
- **md (1023px):** Responsive layout threshold.
- **lg (1279px):** Responsive layout threshold.
- **xl (1599px):** Responsive layout threshold.
- **2xl (1919px):** Responsive layout threshold.
- **breakpoint-xs (413px):** Responsive layout threshold.
- **breakpoint-sm (767px):** Responsive layout threshold.
- **breakpoint-md (1023px):** Responsive layout threshold.
- **breakpoint-lg (1279px):** Responsive layout threshold.
- **breakpoint-xl (1599px):** Responsive layout threshold.
- **breakpoint-2xl (1919px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.4) 0px 8px 20px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.4) 0px 8px 20px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (4px):** Border radius token.
- **md (100%):** Border radius token.
- **lg (1.67772e+07px):** Border radius token.

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
- Avoid pairing --color-mid-gray-2 on --color-dark-green (1.5:1, Fail).
- Avoid pairing --color-mid-gray-2 on --color-mid-gray (1.41:1, Fail).
- Avoid pairing --color-mid-gray-2 on --color-cyan (2.19:1, Fail).
