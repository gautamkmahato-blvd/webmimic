---
version: alpha
name: "Cursor: The best way to code with AI"
description: "Converted from UI Inspector extraction of https://cursor.com/"
colors:
  primary: "#26251E"
  secondary: "#26261E"
  tertiary: "#C08532"
  neutral: "rgba(38, 37, 30, 0.55)"
  on-primary: "rgba(38, 37, 30, 0.55)"
  on-tertiary: "#FFFFFF"
  color-black: "#000000"
  color-light-gray: "#F2F1ED"
  color-white: "#F7F7F4"
  color-dark-gray-6: "#27271D"
  color-dark-gray-8: "#28231E"
  color-light-gray-2: "#E6E5E0"
  color-light-gray-3: "#EBEAE5"
  color-light-gray-5: "#E1E0DB"
  color-red-3: "#CC3355"
  color-dark-cyan-2: "#1A8C66"
  color-dark-gray-9: "#222222"
  color-dark-cyan-3: "#34785C"
  color-light-gray-6: "#EBE9E5"
  color-blue-3: "rgba(58, 106, 159, 0.08)"
  color-light-blue-2: "#E3EBF3"
  color-light-gray-7: "#D9D5CF"
  color-dark-orange: "#4A443B"
  color-orange-4: "rgba(192, 133, 50, 0.15)"
  color-light-gray-8: "#B6B9BE"
  color-dark-gray-10: "#3C3935"
  color-dark-gray-11: "#26261A"
  color-light-gray-9: "rgba(235, 234, 229, 0.35)"
  color-green: "rgba(34, 197, 94, 0.12)"
  color-dark-gray-4: "rgba(20, 20, 20, 0.92)"
  color-dark-gray-5: "#25251E"
  color-light-blue: "#9E94D5"
  color-dark-gray-7: "rgba(20, 20, 20, 0.68)"
  color-dark-cyan: "#1F8A65"
  color-orange-2: "#F54E00"
  color-red: "#B3003F"
  color-pink: "#AA52A2"
  color-red-2: "#CF2D56"
  color-orange-3: "#DB704B"
  color-blue: "#3A6A9F"
  color-blue-2: "#6049B3"
  color-blue-4: "rgba(58, 106, 159, 0.15)"
  color-light-gray-4: "#EDECEC"
typography:
  display:
    fontFamily: CursorGothic
    fontSize: 72px
    fontWeight: 500
    lineHeight: 79.2px
    letterSpacing: -0.72px
  h1:
    fontFamily: CursorGothic
    fontSize: 36px
    fontWeight: 500
    lineHeight: 43.2px
    letterSpacing: -0.72px
  h2:
    fontFamily: CursorGothic
    fontSize: 26px
    fontWeight: 500
    lineHeight: 32.5px
    letterSpacing: -0.72px
  h3:
    fontFamily: CursorGothic
    fontSize: 22px
    fontWeight: 500
    lineHeight: 31px
    letterSpacing: -0.72px
  body-lg:
    fontFamily: CursorGothic
    fontSize: 20px
    fontWeight: 500
    lineHeight: 28.6px
    letterSpacing: -0.72px
  body-md:
    fontFamily: CursorGothic
    fontSize: 19.2px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: -0.72px
  body-sm:
    fontFamily: CursorGothic
    fontSize: 17.28px
    fontWeight: 500
    lineHeight: 23.328px
    letterSpacing: -0.72px
  caption:
    fontFamily: CursorGothic
    fontSize: 16px
    fontWeight: 500
    lineHeight: 21.7px
    letterSpacing: -0.72px
  code:
    fontFamily: system-ui
    fontSize: 11px
    fontWeight: 400
rounded:
  sm: 1.5px
  md: 2px
  lg: 3px
  xl: 4px
  2xl: 8px
  full: 10px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 141.383px
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

This design system was auto-extracted from https://cursor.com/ (42 colors · 52 type tokens · 50 spacing steps · 4 breakpoints · 5 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-14T18:56:05.489Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#26251E):** Core surface and headline color.
- **secondary (#26261E):** Muted text, borders, and metadata.
- **tertiary (#C08532):** Primary accent for links, buttons, and focus states.
- **neutral (rgba(38, 37, 30, 0.55)):** Primary readable text on dark surfaces.
- **on-primary (rgba(38, 37, 30, 0.55)):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-light-gray (#F2F1ED):** Supporting token from the extracted palette.
- **color-white (#F7F7F4):** Supporting token from the extracted palette.
- **color-dark-gray-6 (#27271D):** Supporting token from the extracted palette.
- **color-dark-gray-8 (#28231E):** Supporting token from the extracted palette.
- **color-light-gray-2 (#E6E5E0):** Supporting token from the extracted palette.
- **color-light-gray-3 (#EBEAE5):** Supporting token from the extracted palette.
- **color-light-gray-5 (#E1E0DB):** Supporting token from the extracted palette.
- **color-red-3 (#CC3355):** Supporting token from the extracted palette.
- **color-dark-cyan-2 (#1A8C66):** Supporting token from the extracted palette.
- **color-dark-gray-9 (#222222):** Supporting token from the extracted palette.
- **color-dark-cyan-3 (#34785C):** Supporting token from the extracted palette.
- **color-light-gray-6 (#EBE9E5):** Supporting token from the extracted palette.
- **color-blue-3 (rgba(58, 106, 159, 0.08)):** Supporting token from the extracted palette.
- **color-light-blue-2 (#E3EBF3):** Supporting token from the extracted palette.
- **color-light-gray-7 (#D9D5CF):** Supporting token from the extracted palette.
- **color-dark-orange (#4A443B):** Supporting token from the extracted palette.
- **color-orange-4 (rgba(192, 133, 50, 0.15)):** Supporting token from the extracted palette.
- **color-light-gray-8 (#B6B9BE):** Supporting token from the extracted palette.
- **color-dark-gray-10 (#3C3935):** Supporting token from the extracted palette.
- **color-dark-gray-11 (#26261A):** Supporting token from the extracted palette.
- **color-light-gray-9 (rgba(235, 234, 229, 0.35)):** Supporting token from the extracted palette.
- **color-green (rgba(34, 197, 94, 0.12)):** Supporting token from the extracted palette.
- **color-dark-gray-4 (rgba(20, 20, 20, 0.92)):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#25251E):** Supporting token from the extracted palette.
- **color-light-blue (#9E94D5):** Supporting token from the extracted palette.
- **color-dark-gray-7 (rgba(20, 20, 20, 0.68)):** Supporting token from the extracted palette.
- **color-dark-cyan (#1F8A65):** Supporting token from the extracted palette.
- **color-orange-2 (#F54E00):** Supporting token from the extracted palette.
- **color-red (#B3003F):** Supporting token from the extracted palette.
- **color-pink (#AA52A2):** Supporting token from the extracted palette.
- **color-red-2 (#CF2D56):** Supporting token from the extracted palette.
- **color-orange-3 (#DB704B):** Supporting token from the extracted palette.
- **color-blue (#3A6A9F):** Supporting token from the extracted palette.
- **color-blue-2 (#6049B3):** Supporting token from the extracted palette.
- **color-blue-4 (rgba(58, 106, 159, 0.15)):** Supporting token from the extracted palette.
- **color-light-gray-4 (#EDECEC):** Supporting token from the extracted palette.

## Typography

Primary typeface: **system-ui, jjannon, -apple-system, CursorIcons16, Lato, berkeleyMono, Family, CursorGothic**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font CursorGothic, 72px, weight 500.
- **h1:** font CursorGothic, 36px, weight 500.
- **h2:** font CursorGothic, 26px, weight 500.
- **h3:** font CursorGothic, 22px, weight 500.
- **body-lg:** font CursorGothic, 20px, weight 500.
- **body-md:** font CursorGothic, 19.2px, weight 500.
- **body-sm:** font CursorGothic, 17.28px, weight 500.
- **caption:** font CursorGothic, 16px, weight 500.
- **code:** font system-ui, 11px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (141.383px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (600px):** Responsive layout threshold.
- **sm (768px):** Responsive layout threshold.
- **md (900px):** Responsive layout threshold.
- **lg (1279px):** Responsive layout threshold.
- **breakpoint-xs (600px):** Responsive layout threshold.
- **breakpoint-sm (768px):** Responsive layout threshold.
- **breakpoint-md (900px):** Responsive layout threshold.
- **breakpoint-lg (1279px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.14) 0px 28px 70px 0px, rgba(0, 0, 0, 0.1) 0px 14px 32px 0px, oklab(0.263084 -0.00230259 0.0124794 / 0.1) 0px 0px 0px 1px`
- **md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.02) 0px 0px 16px 0px, rgba(0, 0, 0, 0.008) 0px 0px 8px 0px`
- **lg:** `rgba(0, 0, 0, 0.3) 0px 22px 70px 4px, rgba(0, 0, 0, 0.15) 0px 0px 0px 0.5px`
- **xl:** `rgba(0, 0, 0, 0.25) 0px 25px 50px -12px, rgba(0, 0, 0, 0.15) 0px 12px 24px -8px, oklab(0.263084 -0.00230259 0.0124794 / 0.1) 0px 0px 0px 0.5px`
- **shadow-5:** `rgba(0, 0, 0, 0.35) 0px 8px 30px 0px, rgba(0, 0, 0, 0.15) 0px 0px 0px 0.5px`
- **shadow-6:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(38, 37, 30) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0.14) 0px 28px 70px 0px, rgba(0, 0, 0, 0.1) 0px 14px 32px 0px, oklab(0.263084 -0.00230259 0.0124794 / 0.1) 0px 0px 0px 1px`
- **shadow-md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.02) 0px 0px 16px 0px, rgba(0, 0, 0, 0.008) 0px 0px 8px 0px`
- **shadow-lg:** `rgba(0, 0, 0, 0.3) 0px 22px 70px 4px, rgba(0, 0, 0, 0.15) 0px 0px 0px 0.5px`
- **shadow-xl:** `rgba(0, 0, 0, 0.25) 0px 25px 50px -12px, rgba(0, 0, 0, 0.15) 0px 12px 24px -8px, oklab(0.263084 -0.00230259 0.0124794 / 0.1) 0px 0px 0px 0.5px`
- **shadow-shadow-5:** `rgba(0, 0, 0, 0.35) 0px 8px 30px 0px, rgba(0, 0, 0, 0.15) 0px 0px 0px 0.5px`
- **shadow-shadow-6:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(38, 37, 30) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (1.5px):** Border radius token.
- **md (2px):** Border radius token.
- **lg (3px):** Border radius token.
- **xl (4px):** Border radius token.
- **2xl (8px):** Border radius token.
- **full (10px):** Border radius token.

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
- Avoid pairing --color-dark-gray-2 on --color-dark-gray (1.01:1, Fail).
- Avoid pairing --color-dark-gray-2 on --color-black (1.35:1, Fail).
- Avoid pairing --color-dark-gray-2 on --color-dark-gray-6 (1.03:1, Fail).
