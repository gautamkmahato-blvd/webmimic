---
version: alpha
name: Family
description: "Converted from UI Inspector extraction of https://family.co/"
colors:
  primary: "#000000"
  secondary: "#848281"
  tertiary: "#00C978"
  neutral: "#474645"
  on-primary: "#474645"
  on-tertiary: "#FFFFFF"
  color-red: "#FF3E00"
  color-green: "#00CA48"
  color-blue-2: "#0090FF"
  color-orange-2: "#FFBB26"
  color-white-2: "#FBFAF9"
  color-light-gray-2: "#F2F0ED"
  color-red-2: "#FF0000"
  color-pink: "#FF58AE"
  color-orange-6: "#F97316"
  color-purple: "#9F4FFF"
  color-red-3: "#FF2B3A"
  color-white-3: "#F6F4EF"
  color-dark-gray-14: "#171717"
  color-dark-blue: "#2B2F43"
  color-dark-gray-2: "#343433"
  color-dark-gray-3: "#4A443F"
  color-orange: "#D48F00"
  color-dark-gray-4: "#121212"
  color-blue: "#0086FC"
  color-mid-gray-2: "rgba(112, 112, 112, 0.4)"
  color-dark-gray-5: "rgba(34, 34, 34, 0.4)"
  color-blue-3: "#747485"
  color-dark-gray-6: "#262626"
  color-mid-gray-3: "#808080"
  color-dark-gray-7: "rgba(71, 70, 69, 0.7)"
  color-light-gray: "#E4E4E4"
  color-dark-gray-8: "#282624"
  color-blue-6: "#1A88F8"
  color-light-orange: "#FFCD6C"
  color-blue-4: "#64C6FF"
  color-light-orange-2: "#F4EBDF"
  color-mid-gray-4: "#999999"
  color-blue-5: "#4DAFFF"
  color-light-orange-3: "#E5D5C3"
  color-dark-gray-9: "#222222"
  color-cyan-2: "#00B2FF"
  color-dark-gray-10: "#313131"
  color-dark-gray-11: "#2E2E2E"
  color-orange-3: "#FEBE44"
  color-green-2: "#34C759"
  color-light-gray-3: "#F6F4EE"
  color-mid-gray-5: "#ADADAD"
  color-orange-5: "#FFB112"
  color-dark-gray-12: "#111111"
  color-blue-7: "#2775CA"
  color-light-blue: "#C1CAD2"
  color-dark-gray-13: "#25292E"
  color-blue-8: "#747484"
  color-light-orange-4: "#FFE5B6"
  color-mid-gray-6: "#959697"
  color-white-4: "#F3F4F7"
  color-red-4: "#F94C16"
  color-white-5: "#F0F6FE"
  color-white-6: "#F7F8F9"
  color-blue-9: "#5FABEB"
  color-light-blue-2: "#A2D5FF"
  color-dark-gray-15: "#585858"
  color-white-7: "#FEFEFD"
  color-cyan-3: "#0EA5E9"
  color-yellow: "#EAB308"
  color-blue-10: "#6366F1"
  color-dark-cyan: "#006351"
  color-green-3: "#32B06B"
  color-orange-4: "#FFA100"
  color-light-gray-4: "#E6E6E6"
typography:
  display:
    fontFamily: Times
    fontSize: 68px
    fontWeight: 500
    lineHeight: 74.8px
    letterSpacing: -1.35px
  h1:
    fontFamily: Times
    fontSize: 44px
    fontWeight: 500
    lineHeight: 48px
    letterSpacing: -1.35px
  h2:
    fontFamily: Times
    fontSize: 23px
    fontWeight: 500
    lineHeight: 27px
    letterSpacing: -1.35px
  h3:
    fontFamily: Times
    fontSize: 20px
    fontWeight: 500
    lineHeight: 26px
    letterSpacing: -1.35px
  body-lg:
    fontFamily: Times
    fontSize: 19px
    fontWeight: 500
    lineHeight: 25px
    letterSpacing: -1.35px
  body-md:
    fontFamily: Times
    fontSize: 17px
    fontWeight: 500
    lineHeight: 22px
    letterSpacing: -1.35px
  body-sm:
    fontFamily: Times
    fontSize: 16px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: -1.35px
  caption:
    fontFamily: Times
    fontSize: 15px
    fontWeight: 500
    lineHeight: 19px
    letterSpacing: -1.35px
  code:
    fontFamily: Inter
    fontSize: 13.3333px
    fontWeight: 400
rounded:
  sm: 2px
  md: 4px
  lg: 6px
  xl: "7.5%"
  2xl: 8px
  full: 9.6px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 496px
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

This design system was auto-extracted from https://family.co/ (70 colors · 43 type tokens · 64 spacing steps · 8 breakpoints · 9 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-05-05T15:51:30.641Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#848281):** Muted text, borders, and metadata.
- **tertiary (#00C978):** Primary accent for links, buttons, and focus states.
- **neutral (#474645):** Primary readable text on dark surfaces.
- **on-primary (#474645):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-red (#FF3E00):** Supporting token from the extracted palette.
- **color-green (#00CA48):** Supporting token from the extracted palette.
- **color-blue-2 (#0090FF):** Supporting token from the extracted palette.
- **color-orange-2 (#FFBB26):** Supporting token from the extracted palette.
- **color-white-2 (#FBFAF9):** Supporting token from the extracted palette.
- **color-light-gray-2 (#F2F0ED):** Supporting token from the extracted palette.
- **color-red-2 (#FF0000):** Supporting token from the extracted palette.
- **color-pink (#FF58AE):** Supporting token from the extracted palette.
- **color-orange-6 (#F97316):** Supporting token from the extracted palette.
- **color-purple (#9F4FFF):** Supporting token from the extracted palette.
- **color-red-3 (#FF2B3A):** Supporting token from the extracted palette.
- **color-white-3 (#F6F4EF):** Supporting token from the extracted palette.
- **color-dark-gray-14 (#171717):** Supporting token from the extracted palette.
- **color-dark-blue (#2B2F43):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#343433):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#4A443F):** Supporting token from the extracted palette.
- **color-orange (#D48F00):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#121212):** Supporting token from the extracted palette.
- **color-blue (#0086FC):** Supporting token from the extracted palette.
- **color-mid-gray-2 (rgba(112, 112, 112, 0.4)):** Supporting token from the extracted palette.
- **color-dark-gray-5 (rgba(34, 34, 34, 0.4)):** Supporting token from the extracted palette.
- **color-blue-3 (#747485):** Supporting token from the extracted palette.
- **color-dark-gray-6 (#262626):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#808080):** Supporting token from the extracted palette.
- **color-dark-gray-7 (rgba(71, 70, 69, 0.7)):** Supporting token from the extracted palette.
- **color-light-gray (#E4E4E4):** Supporting token from the extracted palette.
- **color-dark-gray-8 (#282624):** Supporting token from the extracted palette.
- **color-blue-6 (#1A88F8):** Supporting token from the extracted palette.
- **color-light-orange (#FFCD6C):** Supporting token from the extracted palette.
- **color-blue-4 (#64C6FF):** Supporting token from the extracted palette.
- **color-light-orange-2 (#F4EBDF):** Supporting token from the extracted palette.
- **color-mid-gray-4 (#999999):** Supporting token from the extracted palette.
- **color-blue-5 (#4DAFFF):** Supporting token from the extracted palette.
- **color-light-orange-3 (#E5D5C3):** Supporting token from the extracted palette.
- **color-dark-gray-9 (#222222):** Supporting token from the extracted palette.
- **color-cyan-2 (#00B2FF):** Supporting token from the extracted palette.
- **color-dark-gray-10 (#313131):** Supporting token from the extracted palette.
- **color-dark-gray-11 (#2E2E2E):** Supporting token from the extracted palette.
- **color-orange-3 (#FEBE44):** Supporting token from the extracted palette.
- **color-green-2 (#34C759):** Supporting token from the extracted palette.
- **color-light-gray-3 (#F6F4EE):** Supporting token from the extracted palette.
- **color-mid-gray-5 (#ADADAD):** Supporting token from the extracted palette.
- **color-orange-5 (#FFB112):** Supporting token from the extracted palette.
- **color-dark-gray-12 (#111111):** Supporting token from the extracted palette.
- **color-blue-7 (#2775CA):** Supporting token from the extracted palette.
- **color-light-blue (#C1CAD2):** Supporting token from the extracted palette.
- **color-dark-gray-13 (#25292E):** Supporting token from the extracted palette.
- **color-blue-8 (#747484):** Supporting token from the extracted palette.
- **color-light-orange-4 (#FFE5B6):** Supporting token from the extracted palette.
- **color-mid-gray-6 (#959697):** Supporting token from the extracted palette.
- **color-white-4 (#F3F4F7):** Supporting token from the extracted palette.
- **color-red-4 (#F94C16):** Supporting token from the extracted palette.
- **color-white-5 (#F0F6FE):** Supporting token from the extracted palette.
- **color-white-6 (#F7F8F9):** Supporting token from the extracted palette.
- **color-blue-9 (#5FABEB):** Supporting token from the extracted palette.
- **color-light-blue-2 (#A2D5FF):** Supporting token from the extracted palette.
- **color-dark-gray-15 (#585858):** Supporting token from the extracted palette.
- **color-white-7 (#FEFEFD):** Supporting token from the extracted palette.
- **color-cyan-3 (#0EA5E9):** Supporting token from the extracted palette.
- **color-yellow (#EAB308):** Supporting token from the extracted palette.
- **color-blue-10 (#6366F1):** Supporting token from the extracted palette.
- **color-dark-cyan (#006351):** Supporting token from the extracted palette.
- **color-green-3 (#32B06B):** Supporting token from the extracted palette.
- **color-orange-4 (#FFA100):** Supporting token from the extracted palette.
- **color-light-gray-4 (#E6E6E6):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Inter, Family, LFE Sans, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Times, 68px, weight 500.
- **h1:** font Times, 44px, weight 500.
- **h2:** font Times, 23px, weight 500.
- **h3:** font Times, 20px, weight 500.
- **body-lg:** font Times, 19px, weight 500.
- **body-md:** font Times, 17px, weight 500.
- **body-sm:** font Times, 16px, weight 500.
- **caption:** font Times, 15px, weight 500.
- **code:** font Inter, 13.3333px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (496px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (390px):** Responsive layout threshold.
- **sm (410px):** Responsive layout threshold.
- **md (420px):** Responsive layout threshold.
- **lg (580px):** Responsive layout threshold.
- **xl (720px):** Responsive layout threshold.
- **2xl (768px):** Responsive layout threshold.
- **3xl (880px):** Responsive layout threshold.
- **bp-8 (920px):** Responsive layout threshold.
- **breakpoint-xs (390px):** Responsive layout threshold.
- **breakpoint-sm (410px):** Responsive layout threshold.
- **breakpoint-md (420px):** Responsive layout threshold.
- **breakpoint-lg (580px):** Responsive layout threshold.
- **breakpoint-xl (720px):** Responsive layout threshold.
- **breakpoint-2xl (768px):** Responsive layout threshold.
- **breakpoint-3xl (880px):** Responsive layout threshold.
- **breakpoint-bp-8 (920px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `color(display-p3 0.94902 0.941176 0.929412) 0px 0px 0px 1px inset`
- **md:** `color(display-p3 0.94902 0.941176 0.929412) 0px 0px 0px 0px inset`
- **lg:** `rgba(0, 0, 0, 0.1) 0px 3px 16px 0px`
- **xl:** `rgba(0, 0, 0, 0.04) 0px 0px 0px 1px`
- **shadow-5:** `rgba(0, 0, 0, 0.8) 0px 0px 6px 0px, rgba(0, 0, 0, 0.8) 0px 0px 6px 0px inset`
- **shadow-6:** `rgba(0, 0, 0, 0.15) 0px 0px 24px 0px`
- **shadow-sm:** `color(display-p3 0.94902 0.941176 0.929412) 0px 0px 0px 1px inset`
- **shadow-md:** `color(display-p3 0.94902 0.941176 0.929412) 0px 0px 0px 0px inset`
- **shadow-lg:** `rgba(0, 0, 0, 0.1) 0px 3px 16px 0px`
- **shadow-xl:** `rgba(0, 0, 0, 0.04) 0px 0px 0px 1px`
- **shadow-shadow-5:** `rgba(0, 0, 0, 0.8) 0px 0px 6px 0px, rgba(0, 0, 0, 0.8) 0px 0px 6px 0px inset`
- **shadow-shadow-6:** `rgba(0, 0, 0, 0.15) 0px 0px 24px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (2px):** Border radius token.
- **md (4px):** Border radius token.
- **lg (6px):** Border radius token.
- **xl (7.5%):** Border radius token.
- **2xl (8px):** Border radius token.
- **full (9.6px):** Border radius token.

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
- Avoid pairing --color-dark-gray on --color-black (2.23:1, Fail).
- Avoid pairing --color-dark-gray on --color-red (2.66:1, Fail).
- Avoid pairing --color-dark-gray on --color-blue-2 (2.88:1, Fail).
