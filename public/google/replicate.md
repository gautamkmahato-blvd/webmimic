---
version: alpha
name: "Replicate - Run AI with an API"
description: "Converted from UI Inspector extraction of https://replicate.com/"
colors:
  primary: "#202020"
  secondary: "#838383"
  tertiary: "#2B9A66"
  neutral: "#FCFCFC"
  on-primary: "#FCFCFC"
  on-tertiary: "#FFFFFF"
  color-black: "#000000"
  color-red: "#EA2804"
  color-light-gray-2: "#EFEFEF"
  color-white-3: "#F9F9F9"
  color-white-4: "#FFFCFC"
  color-light-gray-5: "#E8E8E8"
  color-white-5: "#FEFCE9"
  color-dark-gray-2: "#646464"
  color-dark-gray-3: "#24292E"
  color-light-gray: "#BBBBBB"
  color-dark-blue: "#032F62"
  color-red-2: "#D73A49"
  color-light-gray-3: "#D8D9D9"
  color-blue: "#005CC5"
  color-purple: "#6F42C1"
  color-red-3: "#DD4425"
  color-orange: "#E36209"
  color-dark-yellow: "#735C0F"
  color-dark-orange: "#A06E00"
  color-blue-2: "#6A737D"
  color-light-gray-4: "#E0E0E0"
  color-light-pink: "#FF6BFC"
  color-light-yellow: "#F6F47F"
  color-red-4: "rgba(234, 40, 4, 0.5)"
  color-cyan: "#00C8D2"
  color-blue-3: "#3C8CFF"
  color-cyan-2: "#78E6DC"
  color-blue-4: "#325AB4"
  color-pink: "#E54FE2"
  color-light-red: "#F97E82"
typography:
  display:
    fontFamily: basier-square
    fontSize: 96px
    fontWeight: 400
    lineHeight: 96px
    letterSpacing: -0.35px
  h1:
    fontFamily: basier-square
    fontSize: 72px
    fontWeight: 400
    lineHeight: 72px
    letterSpacing: -0.35px
  h2:
    fontFamily: basier-square
    fontSize: 48px
    fontWeight: 400
    lineHeight: 48px
    letterSpacing: -0.35px
  h3:
    fontFamily: basier-square
    fontSize: 30px
    fontWeight: 400
    lineHeight: 36px
    letterSpacing: -0.35px
  body-lg:
    fontFamily: basier-square
    fontSize: 24px
    fontWeight: 400
    lineHeight: 32px
    letterSpacing: -0.35px
  body-md:
    fontFamily: basier-square
    fontSize: 22.66px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: -0.35px
  body-sm:
    fontFamily: basier-square
    fontSize: 20px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: -0.35px
  caption:
    fontFamily: basier-square
    fontSize: 18px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: -0.35px
  code:
    fontFamily: jetbrains-mono
    fontSize: 12px
    fontWeight: 400
rounded:
  sm: 2px
  md: "4px 4px 0px 0px"
  lg: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 355.242px
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

This design system was auto-extracted from https://replicate.com/ (35 colors · 32 type tokens · 22 spacing steps · 6 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-17T07:52:22.597Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#202020):** Core surface and headline color.
- **secondary (#838383):** Muted text, borders, and metadata.
- **tertiary (#2B9A66):** Primary accent for links, buttons, and focus states.
- **neutral (#FCFCFC):** Primary readable text on dark surfaces.
- **on-primary (#FCFCFC):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-red (#EA2804):** Supporting token from the extracted palette.
- **color-light-gray-2 (#EFEFEF):** Supporting token from the extracted palette.
- **color-white-3 (#F9F9F9):** Supporting token from the extracted palette.
- **color-white-4 (#FFFCFC):** Supporting token from the extracted palette.
- **color-light-gray-5 (#E8E8E8):** Supporting token from the extracted palette.
- **color-white-5 (#FEFCE9):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#646464):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#24292E):** Supporting token from the extracted palette.
- **color-light-gray (#BBBBBB):** Supporting token from the extracted palette.
- **color-dark-blue (#032F62):** Supporting token from the extracted palette.
- **color-red-2 (#D73A49):** Supporting token from the extracted palette.
- **color-light-gray-3 (#D8D9D9):** Supporting token from the extracted palette.
- **color-blue (#005CC5):** Supporting token from the extracted palette.
- **color-purple (#6F42C1):** Supporting token from the extracted palette.
- **color-red-3 (#DD4425):** Supporting token from the extracted palette.
- **color-orange (#E36209):** Supporting token from the extracted palette.
- **color-dark-yellow (#735C0F):** Supporting token from the extracted palette.
- **color-dark-orange (#A06E00):** Supporting token from the extracted palette.
- **color-blue-2 (#6A737D):** Supporting token from the extracted palette.
- **color-light-gray-4 (#E0E0E0):** Supporting token from the extracted palette.
- **color-light-pink (#FF6BFC):** Supporting token from the extracted palette.
- **color-light-yellow (#F6F47F):** Supporting token from the extracted palette.
- **color-red-4 (rgba(234, 40, 4, 0.5)):** Supporting token from the extracted palette.
- **color-cyan (#00C8D2):** Supporting token from the extracted palette.
- **color-blue-3 (#3C8CFF):** Supporting token from the extracted palette.
- **color-cyan-2 (#78E6DC):** Supporting token from the extracted palette.
- **color-blue-4 (#325AB4):** Supporting token from the extracted palette.
- **color-pink (#E54FE2):** Supporting token from the extracted palette.
- **color-light-red (#F97E82):** Supporting token from the extracted palette.

## Typography

Primary typeface: **jetbrains-mono, rb-freigeist-neue, Family, basier-square**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font basier-square, 96px, weight 400.
- **h1:** font basier-square, 72px, weight 400.
- **h2:** font basier-square, 48px, weight 400.
- **h3:** font basier-square, 30px, weight 400.
- **body-lg:** font basier-square, 24px, weight 400.
- **body-md:** font basier-square, 22.66px, weight 400.
- **body-sm:** font basier-square, 20px, weight 400.
- **caption:** font basier-square, 18px, weight 400.
- **code:** font jetbrains-mono, 12px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (355.242px):** Layout rhythm and component padding.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, color(display-p3 0.876 0.785 0.46) 0px 1px 2px 0px`
- **md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px`
- **lg:** `rgb(255, 255, 255) 0px 0px 0px 0px, color(display-p3 0.796 0.907 0.826) 0px 0px 0px 2px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, color(display-p3 0.876 0.785 0.46) 0px 1px 2px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px`
- **shadow-lg:** `rgb(255, 255, 255) 0px 0px 0px 0px, color(display-p3 0.796 0.907 0.826) 0px 0px 0px 2px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (2px):** Border radius token.
- **md (4px 4px 0px 0px):** Border radius token.
- **lg (9999px):** Border radius token.

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
- Avoid pairing --color-dark-gray-2 on --color-dark-gray (2.75:1, Fail).
- Avoid pairing --color-dark-gray-2 on --color-red (1.35:1, Fail).
- Avoid pairing --color-dark-gray-3 on --color-dark-gray (1.11:1, Fail).
