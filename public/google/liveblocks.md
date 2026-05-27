---
version: alpha
name: Liveblocks
description: "Converted from UI Inspector extraction of https://liveblocks.io/"
colors:
  primary: "#FFFFFF"
  secondary: "#808080"
  tertiary: "#6CEFCE"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-black: "#000000"
  color-blue: "#0090FF"
  color-dark-gray-5: "#100F0F"
  color-light-gray-4: "#ECECEC"
  color-white-4: "#F9FBFD"
  color-white-5: "#EBF6FF"
  color-light-purple-3: "#A569FF"
  color-white-6: "#FEFEFE"
  color-light-gray-5: "#EAEAEA"
  color-light-pink: "#CFB5C5"
  color-dark-gray-6: "#21222B"
  color-light-gray-6: "#E5E5E5"
  color-dark-gray-7: "#141716"
  color-white-7: "#F3F3F3"
  color-light-gray-7: "#EBECF0"
  color-light-orange: "#F6ECE2"
  color-mid-gray: "#918D8D"
  color-light-gray: "#EDECEE"
  color-mid-gray-2: "#A3A3A3"
  color-light-purple: "#BF7AF0"
  color-dark-gray: "#111111"
  color-light-blue: "#9F8DFC"
  color-light-gray-2: "#B7B4B4"
  color-dark-gray-2: "#424242"
  color-dark-gray-4: "#635F5F"
  color-mid-gray-3: "#727272"
  color-blue-2: "#34A7FF"
  color-cyan-2: "#70E1C8"
  color-cyan-3: "#00C1D6"
  color-red: "#F76E99"
  color-light-purple-2: "#A667FF"
  color-dark-gray-3: "#272626"
  color-black-2: "rgba(3, 4, 4, 0.36)"
  color-black-3: "rgba(3, 3, 4, 0.5)"
  color-white-2: "rgba(247, 247, 248, 0.12)"
  color-white-3: "#F7F7F8"
  color-light-gray-3: "rgba(247, 247, 248, 0.08)"
typography:
  display:
    fontFamily: suisse
    fontSize: 64px
    fontWeight: 500
    lineHeight: 70.4px
    letterSpacing: -1.04px
  h1:
    fontFamily: suisse
    fontSize: 52px
    fontWeight: 500
    lineHeight: 57.2px
    letterSpacing: -1.04px
  h2:
    fontFamily: suisse
    fontSize: 48px
    fontWeight: 500
    lineHeight: 50.4px
    letterSpacing: -1.04px
  h3:
    fontFamily: suisse
    fontSize: 36px
    fontWeight: 500
    lineHeight: 40px
    letterSpacing: -1.04px
  body-lg:
    fontFamily: suisse
    fontSize: 32px
    fontWeight: 500
    lineHeight: 38.4px
    letterSpacing: -1.04px
  body-md:
    fontFamily: suisse
    fontSize: 24px
    fontWeight: 500
    lineHeight: 33px
    letterSpacing: -1.04px
  body-sm:
    fontFamily: suisse
    fontSize: 20px
    fontWeight: 500
    lineHeight: 27.5px
    letterSpacing: -1.04px
  caption:
    fontFamily: suisse
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: -1.04px
  code:
    fontFamily: "JetBrains Mono"
    fontSize: 11.008px
    fontWeight: 400
rounded:
  sm: "0px 6px 6px 0px"
  md: 4px
  lg: 5.1px
  xl: 5.4px
  2xl: 6px
  full: "6px 0px 0px 6px"
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 280px
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

This design system was auto-extracted from https://liveblocks.io/ (40 colors · 46 type tokens · 35 spacing steps · 8 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-18T18:50:54.030Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#FFFFFF):** Core surface and headline color.
- **secondary (#808080):** Muted text, borders, and metadata.
- **tertiary (#6CEFCE):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-blue (#0090FF):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#100F0F):** Supporting token from the extracted palette.
- **color-light-gray-4 (#ECECEC):** Supporting token from the extracted palette.
- **color-white-4 (#F9FBFD):** Supporting token from the extracted palette.
- **color-white-5 (#EBF6FF):** Supporting token from the extracted palette.
- **color-light-purple-3 (#A569FF):** Supporting token from the extracted palette.
- **color-white-6 (#FEFEFE):** Supporting token from the extracted palette.
- **color-light-gray-5 (#EAEAEA):** Supporting token from the extracted palette.
- **color-light-pink (#CFB5C5):** Supporting token from the extracted palette.
- **color-dark-gray-6 (#21222B):** Supporting token from the extracted palette.
- **color-light-gray-6 (#E5E5E5):** Supporting token from the extracted palette.
- **color-dark-gray-7 (#141716):** Supporting token from the extracted palette.
- **color-white-7 (#F3F3F3):** Supporting token from the extracted palette.
- **color-light-gray-7 (#EBECF0):** Supporting token from the extracted palette.
- **color-light-orange (#F6ECE2):** Supporting token from the extracted palette.
- **color-mid-gray (#918D8D):** Supporting token from the extracted palette.
- **color-light-gray (#EDECEE):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#A3A3A3):** Supporting token from the extracted palette.
- **color-light-purple (#BF7AF0):** Supporting token from the extracted palette.
- **color-dark-gray (#111111):** Supporting token from the extracted palette.
- **color-light-blue (#9F8DFC):** Supporting token from the extracted palette.
- **color-light-gray-2 (#B7B4B4):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#424242):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#635F5F):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#727272):** Supporting token from the extracted palette.
- **color-blue-2 (#34A7FF):** Supporting token from the extracted palette.
- **color-cyan-2 (#70E1C8):** Supporting token from the extracted palette.
- **color-cyan-3 (#00C1D6):** Supporting token from the extracted palette.
- **color-red (#F76E99):** Supporting token from the extracted palette.
- **color-light-purple-2 (#A667FF):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#272626):** Supporting token from the extracted palette.
- **color-black-2 (rgba(3, 4, 4, 0.36)):** Supporting token from the extracted palette.
- **color-black-3 (rgba(3, 3, 4, 0.5)):** Supporting token from the extracted palette.
- **color-white-2 (rgba(247, 247, 248, 0.12)):** Supporting token from the extracted palette.
- **color-white-3 (#F7F7F8):** Supporting token from the extracted palette.
- **color-light-gray-3 (rgba(247, 247, 248, 0.08)):** Supporting token from the extracted palette.

## Typography

Primary typeface: **JetBrains Mono, Apple Color Emoji, Family, suisse**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font suisse, 64px, weight 500.
- **h1:** font suisse, 52px, weight 500.
- **h2:** font suisse, 48px, weight 500.
- **h3:** font suisse, 36px, weight 500.
- **body-lg:** font suisse, 32px, weight 500.
- **body-md:** font suisse, 24px, weight 500.
- **body-sm:** font suisse, 20px, weight 500.
- **caption:** font suisse, 16px, weight 500.
- **code:** font JetBrains Mono, 11.008px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (280px):** Layout rhythm and component padding.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
- **md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(39, 38, 38) 0px 0px 0px 1px`
- **lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(39, 38, 38) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
- **xl:** `color(srgb 0.925333 0.925333 0.925333) 0px 0px 0px 1px inset`
- **shadow-5:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(3, 4, 4, 0.36) 0px 8px 12px 0px, rgba(3, 3, 4, 0.5) 0px 0px 1px 0px`
- **shadow-6:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 2.767px 2.214px 0px, rgba(0, 0, 0, 0.07) 0px 6.65px 5.32px 0px, rgba(0, 0, 0, 0.09) 0px 12.522px 10.017px 0px, rgba(0, 0, 0, 0.1) 0px 22.336px 17.869px 0px, rgba(0, 0, 0, 0.12) 0px 41.778px 33.422px 0px, rgba(0, 0, 0, 0.17) 0px 100px 80px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(39, 38, 38) 0px 0px 0px 1px`
- **shadow-lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(39, 38, 38) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
- **shadow-xl:** `color(srgb 0.925333 0.925333 0.925333) 0px 0px 0px 1px inset`
- **shadow-shadow-5:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(3, 4, 4, 0.36) 0px 8px 12px 0px, rgba(3, 3, 4, 0.5) 0px 0px 1px 0px`
- **shadow-shadow-6:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 2.767px 2.214px 0px, rgba(0, 0, 0, 0.07) 0px 6.65px 5.32px 0px, rgba(0, 0, 0, 0.09) 0px 12.522px 10.017px 0px, rgba(0, 0, 0, 0.1) 0px 22.336px 17.869px 0px, rgba(0, 0, 0, 0.12) 0px 41.778px 33.422px 0px, rgba(0, 0, 0, 0.17) 0px 100px 80px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 6px 6px 0px):** Border radius token.
- **md (4px):** Border radius token.
- **lg (5.1px):** Border radius token.
- **xl (5.4px):** Border radius token.
- **2xl (6px):** Border radius token.
- **full (6px 0px 0px 6px):** Border radius token.

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
- Avoid pairing --color-mid-gray on --color-cyan (2.32:1, Fail).
- Avoid pairing --color-mid-gray on --color-blue (1.01:1, Fail).
- Avoid pairing --color-light-gray on --color-white (1.18:1, Fail).
