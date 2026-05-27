---
version: alpha
name: MiniMax
description: "Converted from UI Inspector extraction of https://www.minimax.io/"
colors:
  primary: "#000000"
  secondary: "#8E8E93"
  tertiary: "#C7B0FE"
  neutral: "#18181B"
  on-primary: "#18181B"
  on-tertiary: "#FFFFFF"
  color-dark-gray-2: "#181E25"
  color-white-2: "#F2F3F5"
  color-dark-gray-5: "#424242"
  color-light-blue-2: "#ACAAFF"
  color-light-blue-3: "#886CFF"
  color-light-blue-4: "#A782FF"
  color-light-blue-5: "#CAC9FF"
  color-light-blue-6: "#B8A8FF"
  color-red: "#D01316"
  color-white-3: "#F5F5F5"
  color-light-orange: "#FFD388"
  color-dark-gray-3: "#292929"
  color-dark-gray-4: "#171717"
  color-dark-blue: "#45515E"
  color-blue: "#86909C"
  color-blue-2: "#AAB1BA"
  color-dark-gray-6: "rgba(24, 30, 37, 0.4)"
  color-dark-blue-4: "#050038"
  color-dark-gray-9: "#5C5F63"
  color-light-gray: "#E5E7EB"
  color-dark-gray-8: "rgba(24, 30, 37, 0.384)"
  color-dark-blue-2: "rgba(44, 30, 116, 0.16)"
  color-dark-gray-7: "rgba(36, 36, 36, 0.08)"
  color-dark-blue-3: "rgba(44, 30, 116, 0.11)"
typography:
  display:
    fontFamily: "DM Sans"
    fontSize: 80px
    fontWeight: 500
    lineHeight: 88px
  h1:
    fontFamily: "DM Sans"
    fontSize: 32px
    fontWeight: 500
    lineHeight: 48px
  h2:
    fontFamily: "DM Sans"
    fontSize: 31px
    fontWeight: 500
    lineHeight: 46.5px
  h3:
    fontFamily: "DM Sans"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 36px
  body-lg:
    fontFamily: "DM Sans"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 30px
  body-md:
    fontFamily: "DM Sans"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 28.8px
  body-sm:
    fontFamily: "DM Sans"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 28px
  caption:
    fontFamily: "DM Sans"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 27px
  code:
    fontFamily: Outfit
    fontSize: 12px
    fontWeight: 400
rounded:
  sm: "0px 0px 24px 24px"
  md: 4px
  lg: 5.4px
  xl: 11px
  2xl: 12px
  full: 13px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 179.5px
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

This design system was auto-extracted from https://www.minimax.io/ (29 colors · 35 type tokens · 21 spacing steps · 2 breakpoints · 7 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-15T18:08:22.381Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#8E8E93):** Muted text, borders, and metadata.
- **tertiary (#C7B0FE):** Primary accent for links, buttons, and focus states.
- **neutral (#18181B):** Primary readable text on dark surfaces.
- **on-primary (#18181B):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-dark-gray-2 (#181E25):** Supporting token from the extracted palette.
- **color-white-2 (#F2F3F5):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#424242):** Supporting token from the extracted palette.
- **color-light-blue-2 (#ACAAFF):** Supporting token from the extracted palette.
- **color-light-blue-3 (#886CFF):** Supporting token from the extracted palette.
- **color-light-blue-4 (#A782FF):** Supporting token from the extracted palette.
- **color-light-blue-5 (#CAC9FF):** Supporting token from the extracted palette.
- **color-light-blue-6 (#B8A8FF):** Supporting token from the extracted palette.
- **color-red (#D01316):** Supporting token from the extracted palette.
- **color-white-3 (#F5F5F5):** Supporting token from the extracted palette.
- **color-light-orange (#FFD388):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#292929):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#171717):** Supporting token from the extracted palette.
- **color-dark-blue (#45515E):** Supporting token from the extracted palette.
- **color-blue (#86909C):** Supporting token from the extracted palette.
- **color-blue-2 (#AAB1BA):** Supporting token from the extracted palette.
- **color-dark-gray-6 (rgba(24, 30, 37, 0.4)):** Supporting token from the extracted palette.
- **color-dark-blue-4 (#050038):** Supporting token from the extracted palette.
- **color-dark-gray-9 (#5C5F63):** Supporting token from the extracted palette.
- **color-light-gray (#E5E7EB):** Supporting token from the extracted palette.
- **color-dark-gray-8 (rgba(24, 30, 37, 0.384)):** Supporting token from the extracted palette.
- **color-dark-blue-2 (rgba(44, 30, 116, 0.16)):** Supporting token from the extracted palette.
- **color-dark-gray-7 (rgba(36, 36, 36, 0.08)):** Supporting token from the extracted palette.
- **color-dark-blue-3 (rgba(44, 30, 116, 0.11)):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Outfit, Poppins, Roboto, Family, DM Sans**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font DM Sans, 80px, weight 500.
- **h1:** font DM Sans, 32px, weight 500.
- **h2:** font DM Sans, 31px, weight 500.
- **h3:** font DM Sans, 28px, weight 500.
- **body-lg:** font DM Sans, 24px, weight 500.
- **body-md:** font DM Sans, 20px, weight 500.
- **body-sm:** font DM Sans, 18px, weight 500.
- **caption:** font DM Sans, 16px, weight 500.
- **code:** font Outfit, 12px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (179.5px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (768px):** Responsive layout threshold.
- **sm (1024px):** Responsive layout threshold.
- **breakpoint-xs (768px):** Responsive layout threshold.
- **breakpoint-sm (1024px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 4px 6px 0px`
- **md:** `rgba(0, 0, 0, 0.08) 0px 0px 22.576px 0px`
- **lg:** `rgba(44, 30, 116, 0.16) 0px 0px 15px 0px`
- **xl:** `rgba(36, 36, 36, 0.08) 0px 12px 16px -4px`
- **shadow-5:** `rgba(44, 30, 116, 0.11) 6.5px 2px 17.5px 0px`
- **shadow-6:** `rgba(44, 30, 116, 0.16) 0px 0px 22.5px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 4px 6px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0.08) 0px 0px 22.576px 0px`
- **shadow-lg:** `rgba(44, 30, 116, 0.16) 0px 0px 15px 0px`
- **shadow-xl:** `rgba(36, 36, 36, 0.08) 0px 12px 16px -4px`
- **shadow-shadow-5:** `rgba(44, 30, 116, 0.11) 6.5px 2px 17.5px 0px`
- **shadow-shadow-6:** `rgba(44, 30, 116, 0.16) 0px 0px 22.5px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 0px 24px 24px):** Border radius token.
- **md (4px):** Border radius token.
- **lg (5.4px):** Border radius token.
- **xl (11px):** Border radius token.
- **2xl (12px):** Border radius token.
- **full (13px):** Border radius token.

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
- Avoid pairing --color-dark-gray on --color-black (1.19:1, Fail).
- Avoid pairing --color-dark-gray on --color-dark-gray-2 (1.06:1, Fail).
- Avoid pairing --color-dark-gray on --color-dark-gray-5 (1.76:1, Fail).
