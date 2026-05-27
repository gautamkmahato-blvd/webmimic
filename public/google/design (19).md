---
version: alpha
name: "Steep: AI analytics for faster insights and zero chaos"
description: "Converted from UI Inspector extraction of https://steep.app/"
colors:
  primary: "#000000"
  secondary: "#A3A6AF"
  tertiary: "#5D2A1A"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-dark-gray: "#17191C"
  color-dark-gray-3: "#181A1C"
  color-dark-blue-2: "rgba(4, 23, 43, 0.05)"
  color-white-2: "#F7F7F8"
  color-light-blue: "#D3E3FC"
  color-dark-gray-5: "#121212"
  color-white-3: "#F3F3F5"
  color-light-orange: "#FBE1D1"
  color-white-4: "#FAFAFB"
  color-dark-gray-2: "#4C4C4C"
  color-dark-blue: "#194168"
  color-blue: "#777B86"
  color-dark-gray-4: "#171A1C"
  color-blue-2: "rgba(47, 111, 229, 0.11)"
  color-dark-blue-3: "rgba(10, 23, 43, 0.1)"
typography:
  display:
    fontFamily: Sohne
    fontSize: 90px
    fontWeight: 500
    lineHeight: 99px
    letterSpacing: -1.75px
  h1:
    fontFamily: Sohne
    fontSize: 70px
    fontWeight: 500
    lineHeight: 77px
    letterSpacing: -1.75px
  h2:
    fontFamily: Sohne
    fontSize: 64px
    fontWeight: 500
    lineHeight: 70.4px
    letterSpacing: -1.75px
  h3:
    fontFamily: Sohne
    fontSize: 60px
    fontWeight: 500
    lineHeight: 66px
    letterSpacing: -1.75px
  body-lg:
    fontFamily: Sohne
    fontSize: 50px
    fontWeight: 500
    lineHeight: 55px
    letterSpacing: -1.75px
  body-md:
    fontFamily: Sohne
    fontSize: 44px
    fontWeight: 500
    lineHeight: 48.4px
    letterSpacing: -1.75px
  body-sm:
    fontFamily: Sohne
    fontSize: 24px
    fontWeight: 500
    lineHeight: 36px
    letterSpacing: -1.75px
  caption:
    fontFamily: Sohne
    fontSize: 22px
    fontWeight: 500
    lineHeight: 33px
    letterSpacing: -1.75px
  code:
    fontFamily: Signifier
    fontSize: 16px
    fontWeight: 400
rounded:
  sm: 0.01px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 24px
  full: "1.67772e+07px"
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 20px
  xl: 32px
  2xl: 229.094px
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

This design system was auto-extracted from https://steep.app/ (19 colors · 47 type tokens · 25 spacing steps · 1 breakpoints · 6 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-05-06T12:49:09.021Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#A3A6AF):** Muted text, borders, and metadata.
- **tertiary (#5D2A1A):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-dark-gray (#17191C):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#181A1C):** Supporting token from the extracted palette.
- **color-dark-blue-2 (rgba(4, 23, 43, 0.05)):** Supporting token from the extracted palette.
- **color-white-2 (#F7F7F8):** Supporting token from the extracted palette.
- **color-light-blue (#D3E3FC):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#121212):** Supporting token from the extracted palette.
- **color-white-3 (#F3F3F5):** Supporting token from the extracted palette.
- **color-light-orange (#FBE1D1):** Supporting token from the extracted palette.
- **color-white-4 (#FAFAFB):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#4C4C4C):** Supporting token from the extracted palette.
- **color-dark-blue (#194168):** Supporting token from the extracted palette.
- **color-blue (#777B86):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#171A1C):** Supporting token from the extracted palette.
- **color-blue-2 (rgba(47, 111, 229, 0.11)):** Supporting token from the extracted palette.
- **color-dark-blue-3 (rgba(10, 23, 43, 0.1)):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Signifier, Family, Sohne**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Sohne, 90px, weight 500.
- **h1:** font Sohne, 70px, weight 500.
- **h2:** font Sohne, 64px, weight 500.
- **h3:** font Sohne, 60px, weight 500.
- **body-lg:** font Sohne, 50px, weight 500.
- **body-md:** font Sohne, 44px, weight 500.
- **body-sm:** font Sohne, 24px, weight 500.
- **caption:** font Sohne, 22px, weight 500.
- **code:** font Signifier, 16px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (20px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (229.094px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (480px):** Responsive layout threshold.
- **breakpoint-xs (480px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px`
- **md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(4, 23, 43, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px`
- **lg:** `oklab(0.999994 0.0000455678 0.0000200868 / 0.3) 0px 1px 1px 0px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0 0 0 / 0.12) 0px 20px 25px -5px, oklab(0 0 0 / 0.12) 0px 8px 10px -6px`
- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px`
- **shadow-md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(4, 23, 43, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px`
- **shadow-lg:** `oklab(0.999994 0.0000455678 0.0000200868 / 0.3) 0px 1px 1px 0px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0 0 0 / 0.12) 0px 20px 25px -5px, oklab(0 0 0 / 0.12) 0px 8px 10px -6px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0.01px):** Border radius token.
- **md (12px):** Border radius token.
- **lg (16px):** Border radius token.
- **xl (20px):** Border radius token.
- **2xl (24px):** Border radius token.
- **full (1.67772e+07px):** Border radius token.

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
- Avoid pairing --color-dark-gray-2 on --color-black (2.45:1, Fail).
- Avoid pairing --color-dark-gray-2 on --color-dark-gray (2.05:1, Fail).
- Avoid pairing --color-dark-gray-2 on --color-dark-gray-3 (2.03:1, Fail).
