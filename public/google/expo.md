---
version: alpha
name: Expo
description: "Converted from UI Inspector extraction of https://expo.dev/"
colors:
  primary: "#000000"
  secondary: "#80838D"
  tertiary: "#2B9A66"
  neutral: "#1C2024"
  on-primary: "#1C2024"
  on-tertiary: "#FFFFFF"
  color-white-2: "#F9F9FB"
  color-blue: "#0072DE"
  color-light-gray-4: "#F0F0F3"
  color-blue-3: "#0190FF"
  color-white-3: "#FCFCFD"
  color-dark-gray-2: "#60646C"
  color-light-gray-3: "#B0B4BA"
  color-yellow: "#B8AE63"
  color-dark-gray-4: "#171717"
  color-light-gray: "#D9D9E0"
  color-light-gray-2: "#E0E1E6"
  color-dark-gray-3: "#363A3F"
  color-light-gray-5: "#CDCED6"
  color-light-gray-6: "#E7E8EC"
  color-dark-cyan: "#00824D"
  color-blue-2: "#405D96"
  color-blue-4: "#0587F0"
  color-cyan: "#3DD68C"
typography:
  display:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: 500
    lineHeight: 70.4px
    letterSpacing: -2px
  h1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: 500
    lineHeight: 52.8px
    letterSpacing: -2px
  h2:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: -2px
  h3:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 500
    lineHeight: 25.2px
    letterSpacing: -2px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: -2px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 22.75px
    letterSpacing: -2px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 500
    lineHeight: 22.4px
    letterSpacing: -2px
  code:
    fontFamily: "JetBrains Mono"
    fontSize: 16px
    fontWeight: 400
rounded:
  sm: 8px
  md: 12px
  lg: 14px
  xl: 16px
  2xl: 20px
  full: 24px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 491.5px
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

This design system was auto-extracted from https://expo.dev/ (23 colors · 33 type tokens · 24 spacing steps · 1 breakpoints · 3 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-14T18:56:56.188Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#80838D):** Muted text, borders, and metadata.
- **tertiary (#2B9A66):** Primary accent for links, buttons, and focus states.
- **neutral (#1C2024):** Primary readable text on dark surfaces.
- **on-primary (#1C2024):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-white-2 (#F9F9FB):** Supporting token from the extracted palette.
- **color-blue (#0072DE):** Supporting token from the extracted palette.
- **color-light-gray-4 (#F0F0F3):** Supporting token from the extracted palette.
- **color-blue-3 (#0190FF):** Supporting token from the extracted palette.
- **color-white-3 (#FCFCFD):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#60646C):** Supporting token from the extracted palette.
- **color-light-gray-3 (#B0B4BA):** Supporting token from the extracted palette.
- **color-yellow (#B8AE63):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#171717):** Supporting token from the extracted palette.
- **color-light-gray (#D9D9E0):** Supporting token from the extracted palette.
- **color-light-gray-2 (#E0E1E6):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#363A3F):** Supporting token from the extracted palette.
- **color-light-gray-5 (#CDCED6):** Supporting token from the extracted palette.
- **color-light-gray-6 (#E7E8EC):** Supporting token from the extracted palette.
- **color-dark-cyan (#00824D):** Supporting token from the extracted palette.
- **color-blue-2 (#405D96):** Supporting token from the extracted palette.
- **color-blue-4 (#0587F0):** Supporting token from the extracted palette.
- **color-cyan (#3DD68C):** Supporting token from the extracted palette.

## Typography

Primary typeface: **JetBrains Mono, ui-monospace, system-ui, Family, Inter**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Inter, 64px, weight 500.
- **h1:** font Inter, 48px, weight 500.
- **h2:** font Inter, 20px, weight 500.
- **h3:** font Inter, 18px, weight 500.
- **body-lg:** font Inter, 16px, weight 500.
- **body-md:** font Inter, 14px, weight 500.
- **body-sm:** font Inter, 12px, weight 500.
- **code:** font JetBrains Mono, 16px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (491.5px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (640px):** Responsive layout threshold.
- **breakpoint-xs (640px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 20px 0px, rgba(0, 0, 0, 0.05) 0px 3px 6px 0px`
- **md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
- **lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.15) 0px 20px 40px 0px`
- **xl:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 3px 6px 0px, rgba(0, 0, 0, 0.07) 0px 2px 4px 0px`
- **shadow-5:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 5px 10px 0px, rgba(0, 0, 0, 0.12) 0px 15px 25px 0px`
- **shadow-6:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.3) 0px 0px 0px 1px inset`
- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 20px 0px, rgba(0, 0, 0, 0.05) 0px 3px 6px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
- **shadow-lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.15) 0px 20px 40px 0px`
- **shadow-xl:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 3px 6px 0px, rgba(0, 0, 0, 0.07) 0px 2px 4px 0px`
- **shadow-shadow-5:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 5px 10px 0px, rgba(0, 0, 0, 0.12) 0px 15px 25px 0px`
- **shadow-shadow-6:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.3) 0px 0px 0px 1px inset`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (8px):** Border radius token.
- **md (12px):** Border radius token.
- **lg (14px):** Border radius token.
- **xl (16px):** Border radius token.
- **2xl (20px):** Border radius token.
- **full (24px):** Border radius token.

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
- Avoid pairing --color-dark-gray on --color-black (1.28:1, Fail).
- Avoid pairing --color-dark-gray-2 on --color-blue (1.26:1, Fail).
- Avoid pairing --color-mid-gray on --color-blue (1.24:1, Fail).
