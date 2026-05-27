---
version: alpha
name: "Craft — Docs and Notes Editor"
description: "Converted from UI Inspector extraction of https://www.craft.do/"
colors:
  primary: "#000000"
  secondary: "#B1B1B1"
  tertiary: "#36C5F0"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-black-2: "#030302"
  color-black-5: "#020202"
  color-light-green: "#9BD8A9"
  color-white-2: "#F5F5F7"
  color-light-yellow: "#FDE99B"
  color-light-blue: "#DBEDFE"
  color-light-orange: "#FFEDD4"
  color-light-blue-2: "#B8CAF5"
  color-white-3: "#FFF3E7"
  color-black-8: "#050500"
  color-light-cyan: "#9ED4EF"
  color-light-orange-2: "#FFDBC5"
  color-dark-gray-4: "#1A1A1A"
  color-blue-3: "#54A3FF"
  color-white-5: "#FCF9F7"
  color-white-6: "#F7F7F7"
  color-light-gray-4: "#E4E4E7"
  color-white-7: "#F4F4F5"
  color-orange-3: "#FF4500"
  color-light-gray-5: "#EFEFEF"
  color-light-gray-6: "#F0F0F0"
  color-black-3: "rgba(3, 3, 2, 0.75)"
  color-dark-gray: "#1F2225"
  color-black-4: "rgba(3, 3, 2, 0.5)"
  color-dark-gray-2: "rgba(31, 34, 37, 0.6)"
  color-blue: "#0087FF"
  color-yellow: "#DFB720"
  color-yellow-2: "#987E1B"
  color-orange: "#FF8904"
  color-black-6: "rgba(3, 3, 2, 0.35)"
  color-black-7: "rgba(3, 3, 2, 0.25)"
  color-dark-gray-3: "rgba(31, 34, 37, 0.5)"
  color-dark-gray-5: "rgba(17, 17, 17, 0.3)"
  color-light-gray: "#E1E1E1"
  color-white-4: "#FCFFFF"
  color-light-gray-2: "#D9D9D9"
  color-blue-2: "#0C3CC0"
  color-dark-red: "#842123"
  color-orange-2: "#FF6101"
  color-light-orange-3: "#FFC49C"
  color-light-cyan-2: "#D1EEF9"
  color-light-orange-4: "#FCDFBD"
  color-light-blue-3: "#A7D4FF"
  color-light-green-2: "#C1EEAD"
  color-light-blue-4: "#BBCFDA"
  color-red: "#E01E5A"
  color-cyan-2: "#2EB67D"
  color-orange-4: "#ECB22E"
  color-dark-gray-6: "#1C1C1D"
  color-dark-gray-7: "#363634"
  color-red-2: "#FF0000"
  color-light-gray-3: "#D2D2D2"
  color-light-gray-7: "#F2F2F2"
typography:
  display:
    fontFamily: UntitledSansFont
    fontSize: 62px
    fontWeight: 500
    lineHeight: 61.6px
    letterSpacing: -1.68px
  h1:
    fontFamily: UntitledSansFont
    fontSize: 56px
    fontWeight: 500
    lineHeight: 55px
    letterSpacing: -1.68px
  h2:
    fontFamily: UntitledSansFont
    fontSize: 50px
    fontWeight: 500
    lineHeight: 51.24px
    letterSpacing: -1.68px
  h3:
    fontFamily: UntitledSansFont
    fontSize: 42px
    fontWeight: 500
    lineHeight: 48px
    letterSpacing: -1.68px
  body-lg:
    fontFamily: UntitledSansFont
    fontSize: 36px
    fontWeight: 500
    lineHeight: 43.92px
    letterSpacing: -1.68px
  body-md:
    fontFamily: UntitledSansFont
    fontSize: 32px
    fontWeight: 500
    lineHeight: 40px
    letterSpacing: -1.68px
  body-sm:
    fontFamily: UntitledSansFont
    fontSize: 28px
    fontWeight: 500
    lineHeight: 33.6px
    letterSpacing: -1.68px
  caption:
    fontFamily: UntitledSansFont
    fontSize: 24px
    fontWeight: 500
    lineHeight: 28.8px
    letterSpacing: -1.68px
  code:
    fontFamily: UntitledSerifFont
    fontSize: 12px
    fontWeight: 400
rounded:
  sm: 4px
  md: 8px
  lg: 10px
  xl: 12px
  2xl: "12px 12px 0px 0px"
  full: 14px
spacing:
  xs: 4px
  sm: 8px
  md: 14px
  lg: 24px
  xl: 32px
  2xl: 395.836px
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

This design system was auto-extracted from https://www.craft.do/ (57 colors · 64 type tokens · 32 spacing steps · 5 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-18T18:43:30.393Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#B1B1B1):** Muted text, borders, and metadata.
- **tertiary (#36C5F0):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-black-2 (#030302):** Supporting token from the extracted palette.
- **color-black-5 (#020202):** Supporting token from the extracted palette.
- **color-light-green (#9BD8A9):** Supporting token from the extracted palette.
- **color-white-2 (#F5F5F7):** Supporting token from the extracted palette.
- **color-light-yellow (#FDE99B):** Supporting token from the extracted palette.
- **color-light-blue (#DBEDFE):** Supporting token from the extracted palette.
- **color-light-orange (#FFEDD4):** Supporting token from the extracted palette.
- **color-light-blue-2 (#B8CAF5):** Supporting token from the extracted palette.
- **color-white-3 (#FFF3E7):** Supporting token from the extracted palette.
- **color-black-8 (#050500):** Supporting token from the extracted palette.
- **color-light-cyan (#9ED4EF):** Supporting token from the extracted palette.
- **color-light-orange-2 (#FFDBC5):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#1A1A1A):** Supporting token from the extracted palette.
- **color-blue-3 (#54A3FF):** Supporting token from the extracted palette.
- **color-white-5 (#FCF9F7):** Supporting token from the extracted palette.
- **color-white-6 (#F7F7F7):** Supporting token from the extracted palette.
- **color-light-gray-4 (#E4E4E7):** Supporting token from the extracted palette.
- **color-white-7 (#F4F4F5):** Supporting token from the extracted palette.
- **color-orange-3 (#FF4500):** Supporting token from the extracted palette.
- **color-light-gray-5 (#EFEFEF):** Supporting token from the extracted palette.
- **color-light-gray-6 (#F0F0F0):** Supporting token from the extracted palette.
- **color-black-3 (rgba(3, 3, 2, 0.75)):** Supporting token from the extracted palette.
- **color-dark-gray (#1F2225):** Supporting token from the extracted palette.
- **color-black-4 (rgba(3, 3, 2, 0.5)):** Supporting token from the extracted palette.
- **color-dark-gray-2 (rgba(31, 34, 37, 0.6)):** Supporting token from the extracted palette.
- **color-blue (#0087FF):** Supporting token from the extracted palette.
- **color-yellow (#DFB720):** Supporting token from the extracted palette.
- **color-yellow-2 (#987E1B):** Supporting token from the extracted palette.
- **color-orange (#FF8904):** Supporting token from the extracted palette.
- **color-black-6 (rgba(3, 3, 2, 0.35)):** Supporting token from the extracted palette.
- **color-black-7 (rgba(3, 3, 2, 0.25)):** Supporting token from the extracted palette.
- **color-dark-gray-3 (rgba(31, 34, 37, 0.5)):** Supporting token from the extracted palette.
- **color-dark-gray-5 (rgba(17, 17, 17, 0.3)):** Supporting token from the extracted palette.
- **color-light-gray (#E1E1E1):** Supporting token from the extracted palette.
- **color-white-4 (#FCFFFF):** Supporting token from the extracted palette.
- **color-light-gray-2 (#D9D9D9):** Supporting token from the extracted palette.
- **color-blue-2 (#0C3CC0):** Supporting token from the extracted palette.
- **color-dark-red (#842123):** Supporting token from the extracted palette.
- **color-orange-2 (#FF6101):** Supporting token from the extracted palette.
- **color-light-orange-3 (#FFC49C):** Supporting token from the extracted palette.
- **color-light-cyan-2 (#D1EEF9):** Supporting token from the extracted palette.
- **color-light-orange-4 (#FCDFBD):** Supporting token from the extracted palette.
- **color-light-blue-3 (#A7D4FF):** Supporting token from the extracted palette.
- **color-light-green-2 (#C1EEAD):** Supporting token from the extracted palette.
- **color-light-blue-4 (#BBCFDA):** Supporting token from the extracted palette.
- **color-red (#E01E5A):** Supporting token from the extracted palette.
- **color-cyan-2 (#2EB67D):** Supporting token from the extracted palette.
- **color-orange-4 (#ECB22E):** Supporting token from the extracted palette.
- **color-dark-gray-6 (#1C1C1D):** Supporting token from the extracted palette.
- **color-dark-gray-7 (#363634):** Supporting token from the extracted palette.
- **color-red-2 (#FF0000):** Supporting token from the extracted palette.
- **color-light-gray-3 (#D2D2D2):** Supporting token from the extracted palette.
- **color-light-gray-7 (#F2F2F2):** Supporting token from the extracted palette.

## Typography

Primary typeface: **UntitledSerifFont, apple-system, Family, UntitledSansFont**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font UntitledSansFont, 62px, weight 500.
- **h1:** font UntitledSansFont, 56px, weight 500.
- **h2:** font UntitledSansFont, 50px, weight 500.
- **h3:** font UntitledSansFont, 42px, weight 500.
- **body-lg:** font UntitledSansFont, 36px, weight 500.
- **body-md:** font UntitledSansFont, 32px, weight 500.
- **body-sm:** font UntitledSansFont, 28px, weight 500.
- **caption:** font UntitledSansFont, 24px, weight 500.
- **code:** font UntitledSerifFont, 12px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (14px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (395.836px):** Layout rhythm and component padding.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.01) 0px 50px 40px 0px, rgba(0, 0, 0, 0.02) 0px 50px 40px 0px, rgba(0, 0, 0, 0.05) 0px 20px 40px 0px, rgba(0, 0, 0, 0.08) 0px 3px 10px 0px`
- **md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px`
- **lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 12px 12px 2px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px`
- **xl:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 12px 0px`
- **shadow-5:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`
- **shadow-6:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 4px 16px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0.01) 0px 50px 40px 0px, rgba(0, 0, 0, 0.02) 0px 50px 40px 0px, rgba(0, 0, 0, 0.05) 0px 20px 40px 0px, rgba(0, 0, 0, 0.08) 0px 3px 10px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px`
- **shadow-lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 12px 12px 2px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px`
- **shadow-xl:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 12px 0px`
- **shadow-shadow-5:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`
- **shadow-shadow-6:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 4px 16px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (4px):** Border radius token.
- **md (8px):** Border radius token.
- **lg (10px):** Border radius token.
- **xl (12px):** Border radius token.
- **2xl (12px 12px 0px 0px):** Border radius token.
- **full (14px):** Border radius token.

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
- Avoid pairing --color-black-3 on --color-black (1.02:1, Fail).
- Avoid pairing --color-black-3 on --color-black-2 (1:1, Fail).
- Avoid pairing --color-black-3 on --color-black-5 (1.01:1, Fail).
