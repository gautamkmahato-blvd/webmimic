---
version: alpha
name: IBM
description: "Converted from UI Inspector extraction of https://www.ibm.com/in-en"
colors:
  primary: "#161616"
  secondary: "#8D8D8D"
  tertiary: "#0F62FE"
  neutral: "#0062FE"
  on-primary: "#0062FE"
  on-tertiary: "#FFFFFF"
  color-black: "#000000"
  color-white: "#F4F4F4"
  color-dark-gray-3: "#171717"
  color-dark-gray-4: "#393939"
  color-light-cyan: "#9EF0F0"
  color-dark-gray-2: "#525252"
  color-dark-cyan: "#004144"
  color-dark-gray-5: "#2A2A2A"
  color-dark-gray-6: "#0F1115"
  color-light-gray: "#C6C6C6"
  color-blue-3: "#4589FF"
  color-mid-gray-2: "#808080"
  color-blue-5: "rgba(15, 98, 254, 0.1)"
  color-blue-4: "#0043CE"
  color-dark-cyan-2: "#009D9A"
  color-red: "#EE5396"
  color-light-blue: "rgba(166, 200, 255, 0.64)"
  color-light-blue-2: "#78A9FF"
typography:
  display:
    fontFamily: Times
    fontSize: 55.8048px
    fontWeight: 400
    lineHeight: 66.4077px
    letterSpacing: 0.32px
  h1:
    fontFamily: Times
    fontSize: 48px
    fontWeight: 400
    lineHeight: 56px
    letterSpacing: 0.32px
  h2:
    fontFamily: Times
    fontSize: 43.8048px
    fontWeight: 400
    lineHeight: 52.1277px
    letterSpacing: 0.32px
  h3:
    fontFamily: Times
    fontSize: 42px
    fontWeight: 400
    lineHeight: 50px
    letterSpacing: 0.32px
  body-lg:
    fontFamily: Times
    fontSize: 32px
    fontWeight: 400
    lineHeight: 40px
    letterSpacing: 0.32px
  body-md:
    fontFamily: Times
    fontSize: 31.2782px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0.32px
  body-sm:
    fontFamily: Times
    fontSize: 20px
    fontWeight: 400
    lineHeight: 27px
    letterSpacing: 0.32px
  caption:
    fontFamily: Times
    fontSize: 19.2px
    fontWeight: 400
    lineHeight: 25px
    letterSpacing: 0.32px
  code:
    fontFamily: "IBM Plex Sans"
    fontSize: 14px
    fontWeight: 400
rounded:
  sm: "0px 8px 0px 0px"
  md: "0px 0px 8px 8px"
  lg: 2px
  xl: 4px
  2xl: 5px
  full: 8px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 430.5px
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

This design system was auto-extracted from https://www.ibm.com/in-en (23 colors · 35 type tokens · 23 spacing steps · 33 breakpoints · 8 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-15T18:01:28.434Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#161616):** Core surface and headline color.
- **secondary (#8D8D8D):** Muted text, borders, and metadata.
- **tertiary (#0F62FE):** Primary accent for links, buttons, and focus states.
- **neutral (#0062FE):** Primary readable text on dark surfaces.
- **on-primary (#0062FE):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-white (#F4F4F4):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#171717):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#393939):** Supporting token from the extracted palette.
- **color-light-cyan (#9EF0F0):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#525252):** Supporting token from the extracted palette.
- **color-dark-cyan (#004144):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#2A2A2A):** Supporting token from the extracted palette.
- **color-dark-gray-6 (#0F1115):** Supporting token from the extracted palette.
- **color-light-gray (#C6C6C6):** Supporting token from the extracted palette.
- **color-blue-3 (#4589FF):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#808080):** Supporting token from the extracted palette.
- **color-blue-5 (rgba(15, 98, 254, 0.1)):** Supporting token from the extracted palette.
- **color-blue-4 (#0043CE):** Supporting token from the extracted palette.
- **color-dark-cyan-2 (#009D9A):** Supporting token from the extracted palette.
- **color-red (#EE5396):** Supporting token from the extracted palette.
- **color-light-blue (rgba(166, 200, 255, 0.64)):** Supporting token from the extracted palette.
- **color-light-blue-2 (#78A9FF):** Supporting token from the extracted palette.

## Typography

Primary typeface: **IBM Plex Sans, IBM Plex Mono, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Times, 55.8048px, weight 400.
- **h1:** font Times, 48px, weight 400.
- **h2:** font Times, 43.8048px, weight 400.
- **h3:** font Times, 42px, weight 400.
- **body-lg:** font Times, 32px, weight 400.
- **body-md:** font Times, 31.2782px, weight 400.
- **body-sm:** font Times, 20px, weight 400.
- **caption:** font Times, 19.2px, weight 400.
- **code:** font IBM Plex Sans, 14px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (430.5px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (1px):** Responsive layout threshold.
- **sm (320px):** Responsive layout threshold.
- **md (410px):** Responsive layout threshold.
- **lg (480px):** Responsive layout threshold.
- **xl (550px):** Responsive layout threshold.
- **2xl (551px):** Responsive layout threshold.
- **3xl (575px):** Responsive layout threshold.
- **bp-8 (600px):** Responsive layout threshold.
- **bp-9 (640px):** Responsive layout threshold.
- **bp-10 (650px):** Responsive layout threshold.
- **bp-11 (671px):** Responsive layout threshold.
- **bp-12 (671.68px):** Responsive layout threshold.
- **bp-13 (672px):** Responsive layout threshold.
- **bp-14 (700px):** Responsive layout threshold.
- **bp-15 (760px):** Responsive layout threshold.
- **bp-16 (767px):** Responsive layout threshold.
- **bp-17 (768px):** Responsive layout threshold.
- **bp-18 (799px):** Responsive layout threshold.
- **bp-19 (800px):** Responsive layout threshold.
- **bp-20 (991px):** Responsive layout threshold.
- **bp-21 (1023px):** Responsive layout threshold.
- **bp-22 (1024px):** Responsive layout threshold.
- **bp-23 (1055.68px):** Responsive layout threshold.
- **bp-24 (1056px):** Responsive layout threshold.
- **bp-25 (1099px):** Responsive layout threshold.
- **bp-26 (1100px):** Responsive layout threshold.
- **bp-27 (1190px):** Responsive layout threshold.
- **bp-28 (1200px):** Responsive layout threshold.
- **bp-29 (1311px):** Responsive layout threshold.
- **bp-30 (1312px):** Responsive layout threshold.
- **bp-31 (1583px):** Responsive layout threshold.
- **bp-32 (1584px):** Responsive layout threshold.
- **bp-33 (1585px):** Responsive layout threshold.
- **breakpoint-xs (1px):** Responsive layout threshold.
- **breakpoint-sm (320px):** Responsive layout threshold.
- **breakpoint-md (410px):** Responsive layout threshold.
- **breakpoint-lg (480px):** Responsive layout threshold.
- **breakpoint-xl (550px):** Responsive layout threshold.
- **breakpoint-2xl (551px):** Responsive layout threshold.
- **breakpoint-3xl (575px):** Responsive layout threshold.
- **breakpoint-bp-8 (600px):** Responsive layout threshold.
- **breakpoint-bp-9 (640px):** Responsive layout threshold.
- **breakpoint-bp-10 (650px):** Responsive layout threshold.
- **breakpoint-bp-11 (671px):** Responsive layout threshold.
- **breakpoint-bp-12 (671.68px):** Responsive layout threshold.
- **breakpoint-bp-13 (672px):** Responsive layout threshold.
- **breakpoint-bp-14 (700px):** Responsive layout threshold.
- **breakpoint-bp-15 (760px):** Responsive layout threshold.
- **breakpoint-bp-16 (767px):** Responsive layout threshold.
- **breakpoint-bp-17 (768px):** Responsive layout threshold.
- **breakpoint-bp-18 (799px):** Responsive layout threshold.
- **breakpoint-bp-19 (800px):** Responsive layout threshold.
- **breakpoint-bp-20 (991px):** Responsive layout threshold.
- **breakpoint-bp-21 (1023px):** Responsive layout threshold.
- **breakpoint-bp-22 (1024px):** Responsive layout threshold.
- **breakpoint-bp-23 (1055.68px):** Responsive layout threshold.
- **breakpoint-bp-24 (1056px):** Responsive layout threshold.
- **breakpoint-bp-25 (1099px):** Responsive layout threshold.
- **breakpoint-bp-26 (1100px):** Responsive layout threshold.
- **breakpoint-bp-27 (1190px):** Responsive layout threshold.
- **breakpoint-bp-28 (1200px):** Responsive layout threshold.
- **breakpoint-bp-29 (1311px):** Responsive layout threshold.
- **breakpoint-bp-30 (1312px):** Responsive layout threshold.
- **breakpoint-bp-31 (1583px):** Responsive layout threshold.
- **breakpoint-bp-32 (1584px):** Responsive layout threshold.
- **breakpoint-bp-33 (1585px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgb(255, 255, 255) 0px 0px 0px 1133px`
- **md:** `rgba(0, 0, 0, 0.3) 0px 2px 6px 0px`
- **lg:** `rgba(0, 0, 0, 0.2) 0px 2px 6px 0px`
- **xl:** `rgb(128, 128, 128) 0px 0px 10px 0px`
- **shadow-5:** `rgb(42, 42, 42) 1px 5px 5px 3px`
- **shadow-6:** `rgba(69, 137, 255, 0.1) 0px -80px 70px -65px inset, rgba(15, 98, 254, 0.1) 0px 4px 10px 2px`
- **shadow-sm:** `rgb(255, 255, 255) 0px 0px 0px 1133px`
- **shadow-md:** `rgba(0, 0, 0, 0.3) 0px 2px 6px 0px`
- **shadow-lg:** `rgba(0, 0, 0, 0.2) 0px 2px 6px 0px`
- **shadow-xl:** `rgb(128, 128, 128) 0px 0px 10px 0px`
- **shadow-shadow-5:** `rgb(42, 42, 42) 1px 5px 5px 3px`
- **shadow-shadow-6:** `rgba(69, 137, 255, 0.1) 0px -80px 70px -65px inset, rgba(15, 98, 254, 0.1) 0px 4px 10px 2px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 8px 0px 0px):** Border radius token.
- **md (0px 0px 8px 8px):** Border radius token.
- **lg (2px):** Border radius token.
- **xl (4px):** Border radius token.
- **2xl (5px):** Border radius token.
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
- Avoid pairing --color-blue on --color-blue-2 (1:1, Fail).
- Avoid pairing --color-dark-gray-2 on --color-dark-gray (2.32:1, Fail).
- Avoid pairing --color-dark-gray-2 on --color-black (2.69:1, Fail).
