---
version: alpha
name: Composio
description: "Converted from UI Inspector extraction of https://composio.dev/"
colors:
  primary: "#FFFFFF"
  secondary: "#999999"
  tertiary: "#00D492"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-black-2: "#000000"
  color-dark-gray-3: "#0F0F0F"
  color-white-2: "#F6F6F6"
  color-dark-gray-4: "#141414"
  color-dark-gray-5: "#1A1A1A"
  color-green: "#05DF72"
  color-dark-gray-6: "#333333"
  color-blue: "#0089FF"
  color-dark-gray-7: "#1E1E1E"
  color-blue-2: "rgba(0, 137, 255, 0.08)"
  color-dark-gray-8: "#2A2A2A"
  color-blue-5: "#2D7DFF"
  color-dark-gray-9: "#111111"
  color-orange-2: "#C4956A"
  color-light-gray-6: "#E8E8E8"
  color-red: "#FF5F57"
  color-orange-3: "#FEBC2E"
  color-green-2: "#28C840"
  color-cyan-4: "rgba(0, 255, 255, 0.12)"
  color-black: "#0A0A0A"
  color-dark-gray: "#444444"
  color-light-gray-4: "#BBBBBB"
  color-light-gray-5: "#ECECEC"
  color-orange: "#FC9800"
  color-cyan-2: "#3FFFDD"
  color-blue-3: "#5B9CF4"
  color-blue-4: "#50A2FF"
  color-dark-blue: "#172736"
  color-blue-6: "#0007CD"
  color-light-green: "#A5D6A7"
  color-orange-4: "#D87756"
  color-blue-7: "#8B5CF6"
  color-orange-5: "#F0A46C"
  color-light-gray: "#E5E5E5"
  color-dark-gray-2: "#2C2C2C"
  color-light-gray-2: "#E0E0E0"
  color-light-gray-3: "#DDDDDD"
  color-mid-gray-2: "#818181"
  color-blue-9: "#0096FF"
  color-dark-blue-2: "#312E81"
  color-dark-purple: "#4C1D95"
  color-dark-red: "#831843"
  color-dark-red-2: "#9A3412"
  color-blue-8: "#6366F1"
  color-purple: "#A855F7"
  color-red-2: "#EC4899"
  color-orange-6: "#F97316"
  color-cyan-3: "rgba(63, 255, 221, 0.3)"
typography:
  display:
    fontFamily: abcDiatype
    fontSize: 64px
    fontWeight: 500
    lineHeight: 60px
    letterSpacing: -0.32px
  h1:
    fontFamily: abcDiatype
    fontSize: 48px
    fontWeight: 500
    lineHeight: 55.68px
    letterSpacing: -0.32px
  h2:
    fontFamily: abcDiatype
    fontSize: 40px
    fontWeight: 500
    lineHeight: 48px
    letterSpacing: -0.32px
  h3:
    fontFamily: abcDiatype
    fontSize: 28px
    fontWeight: 500
    lineHeight: 43.2px
    letterSpacing: -0.32px
  body-lg:
    fontFamily: abcDiatype
    fontSize: 24px
    fontWeight: 500
    lineHeight: 40px
    letterSpacing: -0.32px
  body-md:
    fontFamily: abcDiatype
    fontSize: 20px
    fontWeight: 500
    lineHeight: 33.6px
    letterSpacing: -0.32px
  body-sm:
    fontFamily: abcDiatype
    fontSize: 18px
    fontWeight: 500
    lineHeight: 28.8px
    letterSpacing: -0.32px
  caption:
    fontFamily: abcDiatype
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: -0.32px
  code:
    fontFamily: "JetBrains Mono"
    fontSize: 8px
    fontWeight: 400
rounded:
  sm: "0px 2px 2px 0px"
  md: 2px
  lg: "2px 0px 0px 2px"
  xl: 4px
  2xl: 24px
  full: 28px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 180px
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

This design system was auto-extracted from https://composio.dev/ (51 colors · 59 type tokens · 28 spacing steps · 4 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-14T18:55:13.333Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#FFFFFF):** Core surface and headline color.
- **secondary (#999999):** Muted text, borders, and metadata.
- **tertiary (#00D492):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-black-2 (#000000):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#0F0F0F):** Supporting token from the extracted palette.
- **color-white-2 (#F6F6F6):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#141414):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#1A1A1A):** Supporting token from the extracted palette.
- **color-green (#05DF72):** Supporting token from the extracted palette.
- **color-dark-gray-6 (#333333):** Supporting token from the extracted palette.
- **color-blue (#0089FF):** Supporting token from the extracted palette.
- **color-dark-gray-7 (#1E1E1E):** Supporting token from the extracted palette.
- **color-blue-2 (rgba(0, 137, 255, 0.08)):** Supporting token from the extracted palette.
- **color-dark-gray-8 (#2A2A2A):** Supporting token from the extracted palette.
- **color-blue-5 (#2D7DFF):** Supporting token from the extracted palette.
- **color-dark-gray-9 (#111111):** Supporting token from the extracted palette.
- **color-orange-2 (#C4956A):** Supporting token from the extracted palette.
- **color-light-gray-6 (#E8E8E8):** Supporting token from the extracted palette.
- **color-red (#FF5F57):** Supporting token from the extracted palette.
- **color-orange-3 (#FEBC2E):** Supporting token from the extracted palette.
- **color-green-2 (#28C840):** Supporting token from the extracted palette.
- **color-cyan-4 (rgba(0, 255, 255, 0.12)):** Supporting token from the extracted palette.
- **color-black (#0A0A0A):** Supporting token from the extracted palette.
- **color-dark-gray (#444444):** Supporting token from the extracted palette.
- **color-light-gray-4 (#BBBBBB):** Supporting token from the extracted palette.
- **color-light-gray-5 (#ECECEC):** Supporting token from the extracted palette.
- **color-orange (#FC9800):** Supporting token from the extracted palette.
- **color-cyan-2 (#3FFFDD):** Supporting token from the extracted palette.
- **color-blue-3 (#5B9CF4):** Supporting token from the extracted palette.
- **color-blue-4 (#50A2FF):** Supporting token from the extracted palette.
- **color-dark-blue (#172736):** Supporting token from the extracted palette.
- **color-blue-6 (#0007CD):** Supporting token from the extracted palette.
- **color-light-green (#A5D6A7):** Supporting token from the extracted palette.
- **color-orange-4 (#D87756):** Supporting token from the extracted palette.
- **color-blue-7 (#8B5CF6):** Supporting token from the extracted palette.
- **color-orange-5 (#F0A46C):** Supporting token from the extracted palette.
- **color-light-gray (#E5E5E5):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#2C2C2C):** Supporting token from the extracted palette.
- **color-light-gray-2 (#E0E0E0):** Supporting token from the extracted palette.
- **color-light-gray-3 (#DDDDDD):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#818181):** Supporting token from the extracted palette.
- **color-blue-9 (#0096FF):** Supporting token from the extracted palette.
- **color-dark-blue-2 (#312E81):** Supporting token from the extracted palette.
- **color-dark-purple (#4C1D95):** Supporting token from the extracted palette.
- **color-dark-red (#831843):** Supporting token from the extracted palette.
- **color-dark-red-2 (#9A3412):** Supporting token from the extracted palette.
- **color-blue-8 (#6366F1):** Supporting token from the extracted palette.
- **color-purple (#A855F7):** Supporting token from the extracted palette.
- **color-red-2 (#EC4899):** Supporting token from the extracted palette.
- **color-orange-6 (#F97316):** Supporting token from the extracted palette.
- **color-cyan-3 (rgba(63, 255, 221, 0.3)):** Supporting token from the extracted palette.

## Typography

Primary typeface: **JetBrains Mono, monospace, Menlo, Family, abcDiatype**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font abcDiatype, 64px, weight 500.
- **h1:** font abcDiatype, 48px, weight 500.
- **h2:** font abcDiatype, 40px, weight 500.
- **h3:** font abcDiatype, 28px, weight 500.
- **body-lg:** font abcDiatype, 24px, weight 500.
- **body-md:** font abcDiatype, 20px, weight 500.
- **body-sm:** font abcDiatype, 18px, weight 500.
- **caption:** font abcDiatype, 16px, weight 500.
- **code:** font JetBrains Mono, 8px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (180px):** Layout rhythm and component padding.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.15) 4px 4px 0px 0px`
- **md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.5) 0px 8px 32px 0px`
- **lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px`
- **xl:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.5) 0px 0px 40px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.15) 4px 4px 0px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.5) 0px 8px 32px 0px`
- **shadow-lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px`
- **shadow-xl:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.5) 0px 0px 40px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 2px 2px 0px):** Border radius token.
- **md (2px):** Border radius token.
- **lg (2px 0px 0px 2px):** Border radius token.
- **xl (4px):** Border radius token.
- **2xl (24px):** Border radius token.
- **full (28px):** Border radius token.

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
- Avoid pairing --color-black on --color-black-2 (1.06:1, Fail).
- Avoid pairing --color-black on --color-dark-gray-3 (1.03:1, Fail).
- Avoid pairing --color-black on --color-dark-gray-4 (1.07:1, Fail).
