---
version: alpha
name: "Electric Cars, Solar & Clean Energy"
description: "Converted from UI Inspector extraction of https://www.tesla.com/"
colors:
  primary: "#000000"
  secondary: "rgba(128, 128, 128, 0.65)"
  tertiary: "#3E6AE1"
  neutral: "#393C41"
  on-primary: "#393C41"
  on-tertiary: "#FFFFFF"
  color-dark-gray-2: "#171A20"
  color-white-2: "#F4F4F4"
  color-light-gray: "#EEEEEE"
  color-dark-gray-3: "#5C5E62"
  color-light-gray-2: "#D0D1D2"
  color-orange: "#FBB01B"
  color-red: "#ED4E3B"
  color-green: "#12BB00"
  color-dark-gray-4: "#161616"
  color-mid-gray: "#A2A3A5"
typography:
  display:
    fontFamily: "Universal Sans Text"
    fontSize: 40px
    fontWeight: 500
    lineHeight: 48px
  h1:
    fontFamily: "Universal Sans Text"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 36px
  h2:
    fontFamily: "Universal Sans Text"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 28px
  h3:
    fontFamily: "Universal Sans Text"
    fontSize: 17px
    fontWeight: 500
    lineHeight: 24px
  body-lg:
    fontFamily: "Universal Sans Text"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  body-md:
    fontFamily: "Universal Sans Text"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 18px
  body-sm:
    fontFamily: "Universal Sans Text"
    fontSize: 7px
    fontWeight: 500
    lineHeight: 16.8px
  code:
    fontFamily: "Universal Sans Display"
    fontSize: 14px
    fontWeight: 400
rounded:
  sm: 4px
  md: 8px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 253.156px
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

This design system was auto-extracted from https://www.tesla.com/ (15 colors · 19 type tokens · 17 spacing steps · 25 breakpoints · 8 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-18T08:22:46.011Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (rgba(128, 128, 128, 0.65)):** Muted text, borders, and metadata.
- **tertiary (#3E6AE1):** Primary accent for links, buttons, and focus states.
- **neutral (#393C41):** Primary readable text on dark surfaces.
- **on-primary (#393C41):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-dark-gray-2 (#171A20):** Supporting token from the extracted palette.
- **color-white-2 (#F4F4F4):** Supporting token from the extracted palette.
- **color-light-gray (#EEEEEE):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#5C5E62):** Supporting token from the extracted palette.
- **color-light-gray-2 (#D0D1D2):** Supporting token from the extracted palette.
- **color-orange (#FBB01B):** Supporting token from the extracted palette.
- **color-red (#ED4E3B):** Supporting token from the extracted palette.
- **color-green (#12BB00):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#161616):** Supporting token from the extracted palette.
- **color-mid-gray (#A2A3A5):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Universal Sans Display, Family, Universal Sans Text**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Universal Sans Text, 40px, weight 500.
- **h1:** font Universal Sans Text, 28px, weight 500.
- **h2:** font Universal Sans Text, 20px, weight 500.
- **h3:** font Universal Sans Text, 17px, weight 500.
- **body-lg:** font Universal Sans Text, 14px, weight 500.
- **body-md:** font Universal Sans Text, 12px, weight 500.
- **body-sm:** font Universal Sans Text, 7px, weight 500.
- **code:** font Universal Sans Display, 14px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (253.156px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (450px):** Responsive layout threshold.
- **sm (599px):** Responsive layout threshold.
- **md (600px):** Responsive layout threshold.
- **lg (639px):** Responsive layout threshold.
- **xl (640px):** Responsive layout threshold.
- **2xl (700px):** Responsive layout threshold.
- **3xl (768px):** Responsive layout threshold.
- **bp-8 (800px):** Responsive layout threshold.
- **bp-9 (839px):** Responsive layout threshold.
- **bp-10 (840px):** Responsive layout threshold.
- **bp-11 (899px):** Responsive layout threshold.
- **bp-12 (900px):** Responsive layout threshold.
- **bp-13 (975px):** Responsive layout threshold.
- **bp-14 (1024px):** Responsive layout threshold.
- **bp-15 (1199px):** Responsive layout threshold.
- **bp-16 (1200px):** Responsive layout threshold.
- **bp-17 (1240px):** Responsive layout threshold.
- **bp-18 (1299px):** Responsive layout threshold.
- **bp-19 (1399px):** Responsive layout threshold.
- **bp-20 (1440px):** Responsive layout threshold.
- **bp-21 (1600px):** Responsive layout threshold.
- **bp-22 (1799px):** Responsive layout threshold.
- **bp-23 (1800px):** Responsive layout threshold.
- **bp-24 (2040px):** Responsive layout threshold.
- **bp-25 (2559px):** Responsive layout threshold.
- **breakpoint-xs (450px):** Responsive layout threshold.
- **breakpoint-sm (599px):** Responsive layout threshold.
- **breakpoint-md (600px):** Responsive layout threshold.
- **breakpoint-lg (639px):** Responsive layout threshold.
- **breakpoint-xl (640px):** Responsive layout threshold.
- **breakpoint-2xl (700px):** Responsive layout threshold.
- **breakpoint-3xl (768px):** Responsive layout threshold.
- **breakpoint-bp-8 (800px):** Responsive layout threshold.
- **breakpoint-bp-9 (839px):** Responsive layout threshold.
- **breakpoint-bp-10 (840px):** Responsive layout threshold.
- **breakpoint-bp-11 (899px):** Responsive layout threshold.
- **breakpoint-bp-12 (900px):** Responsive layout threshold.
- **breakpoint-bp-13 (975px):** Responsive layout threshold.
- **breakpoint-bp-14 (1024px):** Responsive layout threshold.
- **breakpoint-bp-15 (1199px):** Responsive layout threshold.
- **breakpoint-bp-16 (1200px):** Responsive layout threshold.
- **breakpoint-bp-17 (1240px):** Responsive layout threshold.
- **breakpoint-bp-18 (1299px):** Responsive layout threshold.
- **breakpoint-bp-19 (1399px):** Responsive layout threshold.
- **breakpoint-bp-20 (1440px):** Responsive layout threshold.
- **breakpoint-bp-21 (1600px):** Responsive layout threshold.
- **breakpoint-bp-22 (1799px):** Responsive layout threshold.
- **breakpoint-bp-23 (1800px):** Responsive layout threshold.
- **breakpoint-bp-24 (2040px):** Responsive layout threshold.
- **breakpoint-bp-25 (2559px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 2px inset`
- **md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
- **lg:** `rgb(255, 255, 255) 0px 2px 0px -1px`
- **xl:** `rgb(57, 60, 65) 0px 2px 0px -1px`
- **shadow-5:** `rgba(0, 0, 0, 0.16) 0px 8px 16px 0px`
- **shadow-6:** `rgb(255, 255, 255) 0px -2px 0px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 2px inset`
- **shadow-md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
- **shadow-lg:** `rgb(255, 255, 255) 0px 2px 0px -1px`
- **shadow-xl:** `rgb(57, 60, 65) 0px 2px 0px -1px`
- **shadow-shadow-5:** `rgba(0, 0, 0, 0.16) 0px 8px 16px 0px`
- **shadow-shadow-6:** `rgb(255, 255, 255) 0px -2px 0px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (4px):** Border radius token.
- **md (8px):** Border radius token.

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
- Avoid pairing --color-dark-gray on --color-black (1.9:1, Fail).
- Avoid pairing --color-dark-gray on --color-dark-gray-2 (1.57:1, Fail).
- Avoid pairing --color-dark-gray on --color-blue (2.3:1, Fail).
