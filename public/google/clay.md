---
version: alpha
name: Clay
description: "Converted from UI Inspector extraction of https://www.clay.com/"
colors:
  primary: "#000000"
  secondary: "#9F9B93"
  tertiary: "#3BD3FD"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-white-2: "#F9F8F6"
  color-light-gray: "#F3F2ED"
  color-white-3: "#F0F8FF"
  color-dark-cyan: "#03331D"
  color-blue-3: "#0667D9"
  color-white-4: "#FEFDFB"
  color-white-5: "#F7F8F9"
  color-dark-pink: "#8B045C"
  color-dark-cyan-2: "#005870"
  color-dark-cyan-3: "#078A52"
  color-blue-4: "#0382F7"
  color-yellow: "#CBD810"
  color-orange: "#FF7614"
  color-blue-6: "#429DFF"
  color-light-blue: "#C1B0FF"
  color-light-gray-4: "#BFC4CD"
  color-red: "#DD2C53"
  color-orange-2: "#C34E1B"
  color-dark-pink-2: "#45012E"
  color-dark-cyan-4: "#02693E"
  color-dark-blue: "#002F67"
  color-light-pink: "#F8B9E3"
  color-light-gray-5: "#F4F3F0"
  color-dark-gray: "#55534E"
  color-mid-gray-2: "#7B7974"
  color-blue: "#3859F9"
  color-dark-gray-2: "#222222"
  color-blue-2: "#525A69"
  color-dark-gray-4: "#333333"
  color-mid-gray-3: "#85817A"
  color-light-orange: "#DAD4C8"
  color-light-orange-2: "#EEE9DF"
  color-light-gray-2: "#E6E8EC"
  color-light-gray-3: "#D0D0D0"
  color-blue-5: "#717989"
  color-dark-gray-3: "#181818"
typography:
  display:
    fontFamily: sans-serif
    fontSize: 80px
    fontWeight: 500
    lineHeight: 80px
    letterSpacing: -2.4px
  h1:
    fontFamily: sans-serif
    fontSize: 60px
    fontWeight: 500
    lineHeight: 60px
    letterSpacing: -2.4px
  h2:
    fontFamily: sans-serif
    fontSize: 44px
    fontWeight: 500
    lineHeight: 48px
    letterSpacing: -2.4px
  h3:
    fontFamily: sans-serif
    fontSize: 32px
    fontWeight: 500
    lineHeight: 35.2px
    letterSpacing: -2.4px
  body-lg:
    fontFamily: sans-serif
    fontSize: 20px
    fontWeight: 500
    lineHeight: 30px
    letterSpacing: -2.4px
  body-md:
    fontFamily: sans-serif
    fontSize: 18px
    fontWeight: 500
    lineHeight: 28.8px
    letterSpacing: -2.4px
  body-sm:
    fontFamily: sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: -2.4px
  caption:
    fontFamily: sans-serif
    fontSize: 15px
    fontWeight: 500
    lineHeight: 25.6px
    letterSpacing: -2.4px
  code:
    fontFamily: Roobert
    fontSize: 11px
    fontWeight: 400
rounded:
  sm: 2.75px
  md: 4px
  lg: 8px
  xl: 11px
  2xl: 12px
  full: "14%"
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 320px
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

This design system was auto-extracted from https://www.clay.com/ (40 colors · 53 type tokens · 41 spacing steps · 5 breakpoints · 9 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-14T08:00:08.287Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#9F9B93):** Muted text, borders, and metadata.
- **tertiary (#3BD3FD):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-white-2 (#F9F8F6):** Supporting token from the extracted palette.
- **color-light-gray (#F3F2ED):** Supporting token from the extracted palette.
- **color-white-3 (#F0F8FF):** Supporting token from the extracted palette.
- **color-dark-cyan (#03331D):** Supporting token from the extracted palette.
- **color-blue-3 (#0667D9):** Supporting token from the extracted palette.
- **color-white-4 (#FEFDFB):** Supporting token from the extracted palette.
- **color-white-5 (#F7F8F9):** Supporting token from the extracted palette.
- **color-dark-pink (#8B045C):** Supporting token from the extracted palette.
- **color-dark-cyan-2 (#005870):** Supporting token from the extracted palette.
- **color-dark-cyan-3 (#078A52):** Supporting token from the extracted palette.
- **color-blue-4 (#0382F7):** Supporting token from the extracted palette.
- **color-yellow (#CBD810):** Supporting token from the extracted palette.
- **color-orange (#FF7614):** Supporting token from the extracted palette.
- **color-blue-6 (#429DFF):** Supporting token from the extracted palette.
- **color-light-blue (#C1B0FF):** Supporting token from the extracted palette.
- **color-light-gray-4 (#BFC4CD):** Supporting token from the extracted palette.
- **color-red (#DD2C53):** Supporting token from the extracted palette.
- **color-orange-2 (#C34E1B):** Supporting token from the extracted palette.
- **color-dark-pink-2 (#45012E):** Supporting token from the extracted palette.
- **color-dark-cyan-4 (#02693E):** Supporting token from the extracted palette.
- **color-dark-blue (#002F67):** Supporting token from the extracted palette.
- **color-light-pink (#F8B9E3):** Supporting token from the extracted palette.
- **color-light-gray-5 (#F4F3F0):** Supporting token from the extracted palette.
- **color-dark-gray (#55534E):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#7B7974):** Supporting token from the extracted palette.
- **color-blue (#3859F9):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#222222):** Supporting token from the extracted palette.
- **color-blue-2 (#525A69):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#333333):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#85817A):** Supporting token from the extracted palette.
- **color-light-orange (#DAD4C8):** Supporting token from the extracted palette.
- **color-light-orange-2 (#EEE9DF):** Supporting token from the extracted palette.
- **color-light-gray-2 (#E6E8EC):** Supporting token from the extracted palette.
- **color-light-gray-3 (#D0D0D0):** Supporting token from the extracted palette.
- **color-blue-5 (#717989):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#181818):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Roobert, Family, sans-serif**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font sans-serif, 80px, weight 500.
- **h1:** font sans-serif, 60px, weight 500.
- **h2:** font sans-serif, 44px, weight 500.
- **h3:** font sans-serif, 32px, weight 500.
- **body-lg:** font sans-serif, 20px, weight 500.
- **body-md:** font sans-serif, 18px, weight 500.
- **body-sm:** font sans-serif, 16px, weight 500.
- **caption:** font sans-serif, 15px, weight 500.
- **code:** font Roobert, 11px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (320px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (479px):** Responsive layout threshold.
- **sm (767px):** Responsive layout threshold.
- **md (768px):** Responsive layout threshold.
- **lg (991px):** Responsive layout threshold.
- **xl (992px):** Responsive layout threshold.
- **breakpoint-xs (479px):** Responsive layout threshold.
- **breakpoint-sm (767px):** Responsive layout threshold.
- **breakpoint-md (768px):** Responsive layout threshold.
- **breakpoint-lg (991px):** Responsive layout threshold.
- **breakpoint-xl (992px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.1) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px -1px 1px 0px inset, rgba(0, 0, 0, 0.05) 0px -0.5px 1px 0px`
- **md:** `rgba(0, 0, 0, 0.1) 0px 2px 6px 2px`
- **lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 100px inset`
- **shadow-sm:** `rgba(0, 0, 0, 0.1) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px -1px 1px 0px inset, rgba(0, 0, 0, 0.05) 0px -0.5px 1px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0.1) 0px 2px 6px 2px`
- **shadow-lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 100px inset`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (2.75px):** Border radius token.
- **md (4px):** Border radius token.
- **lg (8px):** Border radius token.
- **xl (11px):** Border radius token.
- **2xl (12px):** Border radius token.
- **full (14%):** Border radius token.

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
- Avoid pairing --color-mid-gray on --color-white (2.77:1, Fail).
- Avoid pairing --color-mid-gray on --color-white-2 (2.61:1, Fail).
- Avoid pairing --color-mid-gray on --color-light-gray (2.47:1, Fail).
