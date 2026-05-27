---
version: alpha
name: Titan
description: "Converted from UI Inspector extraction of https://www.titan.com/"
colors:
  primary: "#111111"
  secondary: "#8A8A87"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  color-black: "#000000"
  color-light-gray-2: "#F3EFEB"
  color-dark-gray-3: "rgba(17, 17, 17, 0.5)"
  color-light-gray-5: "#D8D3CC"
  color-dark-gray-2: "#615E5B"
  color-light-gray: "#E9EAEB"
  color-light-gray-3: "rgba(216, 211, 204, 0.1) rgb(17, 17, 17) rgb(17, 17, 17)"
  color-orange: "#FF9900"
  color-light-gray-4: "#D9D9D9"
typography:
  display:
    fontFamily: sans-serif
    fontSize: 47.2083px
    fontWeight: 500
    lineHeight: 51.9292px
    letterSpacing: -0.944167px
  h1:
    fontFamily: sans-serif
    fontSize: 37.7667px
    fontWeight: 500
    lineHeight: 41.5433px
    letterSpacing: -0.944167px
  h2:
    fontFamily: sans-serif
    fontSize: 31.4722px
    fontWeight: 500
    lineHeight: 34.6194px
    letterSpacing: -0.944167px
  h3:
    fontFamily: sans-serif
    fontSize: 25.1778px
    fontWeight: 500
    lineHeight: 32.7311px
    letterSpacing: -0.944167px
  body-lg:
    fontFamily: sans-serif
    fontSize: 22.0306px
    fontWeight: 500
    lineHeight: 27.6956px
    letterSpacing: -0.944167px
  body-md:
    fontFamily: sans-serif
    fontSize: 20.7717px
    fontWeight: 500
    lineHeight: 24.2336px
    letterSpacing: -0.944167px
  body-sm:
    fontFamily: sans-serif
    fontSize: 20px
    fontWeight: 500
    lineHeight: 23.4px
    letterSpacing: -0.944167px
  caption:
    fontFamily: sans-serif
    fontSize: 18px
    fontWeight: 500
    lineHeight: 20.8px
    letterSpacing: -0.944167px
  code:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: 400
rounded:
  sm: "0px 0px 4px"
  md: 7.86806px
  lg: 15.7361px
  xl: 23.6042px
  2xl: 25.1778px
  full: "50%"
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 31.4722px
  2xl: 340.367px
components:
  surface:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  text-muted:
    textColor: "{colors.secondary}"
    typography: body-sm
---

## Overview

This design system was auto-extracted from https://www.titan.com/ (12 colors · 50 type tokens · 43 spacing steps · 12 breakpoints · 5 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-05-05T16:00:47.205Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#111111):** Core surface and headline color.
- **secondary (#8A8A87):** Muted text, borders, and metadata.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-light-gray-2 (#F3EFEB):** Supporting token from the extracted palette.
- **color-dark-gray-3 (rgba(17, 17, 17, 0.5)):** Supporting token from the extracted palette.
- **color-light-gray-5 (#D8D3CC):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#615E5B):** Supporting token from the extracted palette.
- **color-light-gray (#E9EAEB):** Supporting token from the extracted palette.
- **color-light-gray-3 (rgba(216, 211, 204, 0.1) rgb(17, 17, 17) rgb(17, 17, 17)):** Supporting token from the extracted palette.
- **color-orange (#FF9900):** Supporting token from the extracted palette.
- **color-light-gray-4 (#D9D9D9):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Geist, Geist Mono, Family, sans-serif**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font sans-serif, 47.2083px, weight 500.
- **h1:** font sans-serif, 37.7667px, weight 500.
- **h2:** font sans-serif, 31.4722px, weight 500.
- **h3:** font sans-serif, 25.1778px, weight 500.
- **body-lg:** font sans-serif, 22.0306px, weight 500.
- **body-md:** font sans-serif, 20.7717px, weight 500.
- **body-sm:** font sans-serif, 20px, weight 500.
- **caption:** font sans-serif, 18px, weight 500.
- **code:** font Geist, 12px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (31.4722px):** Layout rhythm and component padding.
- **2xl (340.367px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (375px):** Responsive layout threshold.
- **sm (479px):** Responsive layout threshold.
- **md (767px):** Responsive layout threshold.
- **lg (768px):** Responsive layout threshold.
- **xl (800px):** Responsive layout threshold.
- **2xl (991px):** Responsive layout threshold.
- **3xl (992px):** Responsive layout threshold.
- **bp-8 (1080px):** Responsive layout threshold.
- **bp-9 (1100px):** Responsive layout threshold.
- **bp-10 (1180px):** Responsive layout threshold.
- **bp-11 (1200px):** Responsive layout threshold.
- **bp-12 (1300px):** Responsive layout threshold.
- **breakpoint-xs (375px):** Responsive layout threshold.
- **breakpoint-sm (479px):** Responsive layout threshold.
- **breakpoint-md (767px):** Responsive layout threshold.
- **breakpoint-lg (768px):** Responsive layout threshold.
- **breakpoint-xl (800px):** Responsive layout threshold.
- **breakpoint-2xl (991px):** Responsive layout threshold.
- **breakpoint-3xl (992px):** Responsive layout threshold.
- **breakpoint-bp-8 (1080px):** Responsive layout threshold.
- **breakpoint-bp-9 (1100px):** Responsive layout threshold.
- **breakpoint-bp-10 (1180px):** Responsive layout threshold.
- **breakpoint-bp-11 (1200px):** Responsive layout threshold.
- **breakpoint-bp-12 (1300px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.05) 0px 0px 0px 1px inset`
- **shadow-sm:** `rgba(0, 0, 0, 0.05) 0px 0px 0px 1px inset`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 0px 4px):** Border radius token.
- **md (7.86806px):** Border radius token.
- **lg (15.7361px):** Border radius token.
- **xl (23.6042px):** Border radius token.
- **2xl (25.1778px):** Border radius token.
- **full (50%):** Border radius token.

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
- Avoid pairing --color-dark-gray-2 on --color-dark-gray (2.93:1, Fail).
- Avoid pairing --color-dark-gray-2 on --color-dark-gray-3 (2.91:1, Fail).
