---
version: alpha
name: "Microsoft 365"
description: "Converted from UI Inspector extraction of https://www.office.com/"
colors:
  primary: "#000000"
  secondary: "#0000EE"
  neutral: "#262626"
  on-primary: "#262626"
  color-white: "#FFFFFF"
  color-light-gray-2: "#F2F2F2"
  color-light-gray-3: "#E6E6E6"
  color-white-3: "#F5F5F5"
  color-dark-gray-2: "#616161"
  color-dark-blue: "#121D2F"
  color-dark-blue-2: "#17253D"
  color-dark-gray-3: "#605E5C"
  color-dark-gray-4: "#333333"
  color-dark-gray-5: "#323130"
  color-light-gray: "#EDEBE9"
  color-light-gray-4: "#E1E1E1"
  color-blue-2: "rgba(70, 79, 235, 0.05)"
  color-blue-3: "rgba(123, 104, 238, 0.05)"
  color-blue-4: "#0066FF"
  color-white-2: "#F7F5F4"
typography:
  display:
    fontFamily: Times
    fontSize: 48px
    fontWeight: 500
    lineHeight: 58px
    letterSpacing: "-3%"
  h1:
    fontFamily: Times
    fontSize: 40px
    fontWeight: 500
    lineHeight: 48px
    letterSpacing: "-3%"
  h2:
    fontFamily: Times
    fontSize: 32px
    fontWeight: 500
    lineHeight: 40px
    letterSpacing: "-3%"
  h3:
    fontFamily: Times
    fontSize: 24px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: "-3%"
  body-lg:
    fontFamily: Times
    fontSize: 20px
    fontWeight: 500
    lineHeight: 26px
    letterSpacing: "-3%"
  body-md:
    fontFamily: Times
    fontSize: 18px
    fontWeight: 500
    lineHeight: 25px
    letterSpacing: "-3%"
  body-sm:
    fontFamily: Times
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: "-3%"
  caption:
    fontFamily: Times
    fontSize: 15px
    fontWeight: 500
    lineHeight: 22px
    letterSpacing: "-3%"
  code:
    fontFamily: SegoeUI
    fontSize: 13.3333px
    fontWeight: 400
rounded:
  sm: 3px
  md: 4px
  lg: 8px
  xl: 24px
  2xl: "50%"
spacing:
  xs: 4px
  sm: 8px
  md: 15px
  lg: 24px
  xl: 32px
  2xl: 232px
components:
  surface:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  text-muted:
    textColor: "{colors.secondary}"
    typography: body-sm
---

## Overview

This design system was auto-extracted from https://www.office.com/ (19 colors · 37 type tokens · 26 spacing steps · 27 breakpoints · 3 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-13T17:21:16.203Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#0000EE):** Muted text, borders, and metadata.
- **neutral (#262626):** Primary readable text on dark surfaces.
- **on-primary (#262626):** Text and icons placed on primary surfaces.
- **color-white (#FFFFFF):** Supporting token from the extracted palette.
- **color-light-gray-2 (#F2F2F2):** Supporting token from the extracted palette.
- **color-light-gray-3 (#E6E6E6):** Supporting token from the extracted palette.
- **color-white-3 (#F5F5F5):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#616161):** Supporting token from the extracted palette.
- **color-dark-blue (#121D2F):** Supporting token from the extracted palette.
- **color-dark-blue-2 (#17253D):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#605E5C):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#333333):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#323130):** Supporting token from the extracted palette.
- **color-light-gray (#EDEBE9):** Supporting token from the extracted palette.
- **color-light-gray-4 (#E1E1E1):** Supporting token from the extracted palette.
- **color-blue-2 (rgba(70, 79, 235, 0.05)):** Supporting token from the extracted palette.
- **color-blue-3 (rgba(123, 104, 238, 0.05)):** Supporting token from the extracted palette.
- **color-blue-4 (#0066FF):** Supporting token from the extracted palette.
- **color-white-2 (#F7F5F4):** Supporting token from the extracted palette.

## Typography

Primary typeface: **SegoeUI, Segoe UI, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Times, 48px, weight 500.
- **h1:** font Times, 40px, weight 500.
- **h2:** font Times, 32px, weight 500.
- **h3:** font Times, 24px, weight 500.
- **body-lg:** font Times, 20px, weight 500.
- **body-md:** font Times, 18px, weight 500.
- **body-sm:** font Times, 16px, weight 500.
- **caption:** font Times, 15px, weight 500.
- **code:** font SegoeUI, 13.3333px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (15px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (232px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (320px):** Responsive layout threshold.
- **sm (480px):** Responsive layout threshold.
- **md (500px):** Responsive layout threshold.
- **lg (536px):** Responsive layout threshold.
- **xl (539px):** Responsive layout threshold.
- **2xl (540px):** Responsive layout threshold.
- **3xl (639px):** Responsive layout threshold.
- **bp-8 (640px):** Responsive layout threshold.
- **bp-9 (767px):** Responsive layout threshold.
- **bp-10 (768px):** Responsive layout threshold.
- **bp-11 (860px):** Responsive layout threshold.
- **bp-12 (899px):** Responsive layout threshold.
- **bp-13 (1023px):** Responsive layout threshold.
- **bp-14 (1024px):** Responsive layout threshold.
- **bp-15 (1025px):** Responsive layout threshold.
- **bp-16 (1083px):** Responsive layout threshold.
- **bp-17 (1084px):** Responsive layout threshold.
- **bp-18 (1200px):** Responsive layout threshold.
- **bp-19 (1201px):** Responsive layout threshold.
- **bp-20 (1300px):** Responsive layout threshold.
- **bp-21 (1301px):** Responsive layout threshold.
- **bp-22 (1399px):** Responsive layout threshold.
- **bp-23 (1600px):** Responsive layout threshold.
- **bp-24 (1778px):** Responsive layout threshold.
- **bp-25 (1793px):** Responsive layout threshold.
- **bp-26 (1800px):** Responsive layout threshold.
- **bp-27 (1920px):** Responsive layout threshold.
- **breakpoint-xs (320px):** Responsive layout threshold.
- **breakpoint-sm (480px):** Responsive layout threshold.
- **breakpoint-md (500px):** Responsive layout threshold.
- **breakpoint-lg (536px):** Responsive layout threshold.
- **breakpoint-xl (539px):** Responsive layout threshold.
- **breakpoint-2xl (540px):** Responsive layout threshold.
- **breakpoint-3xl (639px):** Responsive layout threshold.
- **breakpoint-bp-8 (640px):** Responsive layout threshold.
- **breakpoint-bp-9 (767px):** Responsive layout threshold.
- **breakpoint-bp-10 (768px):** Responsive layout threshold.
- **breakpoint-bp-11 (860px):** Responsive layout threshold.
- **breakpoint-bp-12 (899px):** Responsive layout threshold.
- **breakpoint-bp-13 (1023px):** Responsive layout threshold.
- **breakpoint-bp-14 (1024px):** Responsive layout threshold.
- **breakpoint-bp-15 (1025px):** Responsive layout threshold.
- **breakpoint-bp-16 (1083px):** Responsive layout threshold.
- **breakpoint-bp-17 (1084px):** Responsive layout threshold.
- **breakpoint-bp-18 (1200px):** Responsive layout threshold.
- **breakpoint-bp-19 (1201px):** Responsive layout threshold.
- **breakpoint-bp-20 (1300px):** Responsive layout threshold.
- **breakpoint-bp-21 (1301px):** Responsive layout threshold.
- **breakpoint-bp-22 (1399px):** Responsive layout threshold.
- **breakpoint-bp-23 (1600px):** Responsive layout threshold.
- **breakpoint-bp-24 (1778px):** Responsive layout threshold.
- **breakpoint-bp-25 (1793px):** Responsive layout threshold.
- **breakpoint-bp-26 (1800px):** Responsive layout threshold.
- **breakpoint-bp-27 (1920px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.08) 0px 4px 16px 0px`
- **md:** `rgba(0, 0, 0, 0.1) 0px 0px 8px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0.08) 0px 4px 16px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0.1) 0px 0px 8px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (3px):** Border radius token.
- **md (4px):** Border radius token.
- **lg (8px):** Border radius token.
- **xl (24px):** Border radius token.
- **2xl (50%):** Border radius token.

## Components

Component tokens map semantic colors and shapes to reusable UI patterns.

- **surface:** backgroundColor {colors.primary}, textColor {colors.on-primary}.
- **text-muted:** textColor {colors.secondary}, typography body-sm.

## Do's and Don'ts

- **Do** use the accent color sparingly for primary actions and active states.
- **Do** maintain high contrast between text and background tokens.
- **Don't** introduce new colors outside the extracted palette without updating the YAML tokens.
- **Don't** mix arbitrary spacing values — use the spacing scale.

**Accessibility notes from extraction:**
- Avoid pairing --color-dark-gray on --color-black (1.39:1, Fail).
- Avoid pairing --color-blue on --color-black (2.23:1, Fail).
- Avoid pairing --color-dark-blue on --color-black (1.24:1, Fail).
