---
version: alpha
name: "Online Business Banking For Startups, Small Businesses & Scaling Companies"
description: "Converted from UI Inspector extraction of https://mercury.com/"
colors:
  primary: "#EDEDF3"
  secondary: "#70707D"
  tertiary: "rgba(175, 178, 206, 0.36)"
  neutral: "#000000"
  on-primary: "#000000"
  on-tertiary: "#FFFFFF"
  color-dark-gray: "#272735"
  color-light-blue-2: "rgba(156, 180, 232, 0.2)"
  color-light-blue-3: "rgba(175, 178, 206, 0.2)"
  color-dark-gray-2: "#1E1E2A"
  color-dark-gray-3: "#171721"
  color-black-2: "rgba(9, 9, 11, 0.7)"
  color-blue-2: "rgba(112, 115, 147, 0.1)"
  color-blue-3: "#5266EB"
  color-light-blue-4: "#CDDDFF"
  color-light-gray-2: "#C3C3CC"
  color-light-red: "#FC92B4"
  color-white-2: "#F4F5F9"
  color-blue: "rgba(112, 115, 147, 0.22)"
  color-dark-gray-4: "#27272A"
  color-dark-gray-5: "rgba(28, 28, 35, 0.04)"
  color-dark-gray-6: "rgba(28, 28, 35, 0.09)"
  color-blue-4: "rgba(86, 86, 118, 0.1)"
typography:
  display:
    fontFamily: ui-sans-serif
    fontSize: 54.1078px
    fontWeight: 500
    lineHeight: 59.5186px
    letterSpacing: 0.12px
  h1:
    fontFamily: ui-sans-serif
    fontSize: 41.1564px
    fontWeight: 500
    lineHeight: 45.2721px
    letterSpacing: 0.12px
  h2:
    fontFamily: ui-sans-serif
    fontSize: 36px
    fontWeight: 500
    lineHeight: 41.4px
    letterSpacing: 0.12px
  h3:
    fontFamily: ui-sans-serif
    fontSize: 32px
    fontWeight: 500
    lineHeight: 36.8px
    letterSpacing: 0.12px
  body-lg:
    fontFamily: ui-sans-serif
    fontSize: 28px
    fontWeight: 500
    lineHeight: 33.6px
    letterSpacing: 0.12px
  body-md:
    fontFamily: ui-sans-serif
    fontSize: 24px
    fontWeight: 500
    lineHeight: 28.8px
    letterSpacing: 0.12px
  body-sm:
    fontFamily: ui-sans-serif
    fontSize: 21.008px
    fontWeight: 500
    lineHeight: 28.3608px
    letterSpacing: 0.12px
  caption:
    fontFamily: ui-sans-serif
    fontSize: 18px
    fontWeight: 500
    lineHeight: 25.2096px
    letterSpacing: 0.12px
  code:
    fontFamily: arcadia
    fontSize: 16px
    fontWeight: 400
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  2xl: 32px
  full: "32px 0px 0px 32px"
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 128px
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

This design system was auto-extracted from https://mercury.com/ (22 colors · 43 type tokens · 23 spacing steps · 9 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-05-05T15:46:04.104Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#EDEDF3):** Core surface and headline color.
- **secondary (#70707D):** Muted text, borders, and metadata.
- **tertiary (rgba(175, 178, 206, 0.36)):** Primary accent for links, buttons, and focus states.
- **neutral (#000000):** Primary readable text on dark surfaces.
- **on-primary (#000000):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-dark-gray (#272735):** Supporting token from the extracted palette.
- **color-light-blue-2 (rgba(156, 180, 232, 0.2)):** Supporting token from the extracted palette.
- **color-light-blue-3 (rgba(175, 178, 206, 0.2)):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#1E1E2A):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#171721):** Supporting token from the extracted palette.
- **color-black-2 (rgba(9, 9, 11, 0.7)):** Supporting token from the extracted palette.
- **color-blue-2 (rgba(112, 115, 147, 0.1)):** Supporting token from the extracted palette.
- **color-blue-3 (#5266EB):** Supporting token from the extracted palette.
- **color-light-blue-4 (#CDDDFF):** Supporting token from the extracted palette.
- **color-light-gray-2 (#C3C3CC):** Supporting token from the extracted palette.
- **color-light-red (#FC92B4):** Supporting token from the extracted palette.
- **color-white-2 (#F4F5F9):** Supporting token from the extracted palette.
- **color-blue (rgba(112, 115, 147, 0.22)):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#27272A):** Supporting token from the extracted palette.
- **color-dark-gray-5 (rgba(28, 28, 35, 0.04)):** Supporting token from the extracted palette.
- **color-dark-gray-6 (rgba(28, 28, 35, 0.09)):** Supporting token from the extracted palette.
- **color-blue-4 (rgba(86, 86, 118, 0.1)):** Supporting token from the extracted palette.

## Typography

Primary typeface: **arcadia, arcadiaDisplay, Family, ui-sans-serif**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font ui-sans-serif, 54.1078px, weight 500.
- **h1:** font ui-sans-serif, 41.1564px, weight 500.
- **h2:** font ui-sans-serif, 36px, weight 500.
- **h3:** font ui-sans-serif, 32px, weight 500.
- **body-lg:** font ui-sans-serif, 28px, weight 500.
- **body-md:** font ui-sans-serif, 24px, weight 500.
- **body-sm:** font ui-sans-serif, 21.008px, weight 500.
- **caption:** font ui-sans-serif, 18px, weight 500.
- **code:** font arcadia, 16px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (128px):** Layout rhythm and component padding.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(28, 28, 35, 0.02) 0px 10px 16px 0px, rgba(28, 28, 35, 0.04) 0px 6px 10px 0px, rgba(28, 28, 35, 0.09) 0px 0px 3px 0px`
- **md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(86, 86, 118, 0.1) 0px 0px 6px 0px`
- **lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 3px 0px, rgba(0, 0, 0, 0.05) 0px 8px 12px 0px, rgba(0, 0, 0, 0.05) 0px 12px 20px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(28, 28, 35, 0.02) 0px 10px 16px 0px, rgba(28, 28, 35, 0.04) 0px 6px 10px 0px, rgba(28, 28, 35, 0.09) 0px 0px 3px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(86, 86, 118, 0.1) 0px 0px 6px 0px`
- **shadow-lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 3px 0px, rgba(0, 0, 0, 0.05) 0px 8px 12px 0px, rgba(0, 0, 0, 0.05) 0px 12px 20px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (4px):** Border radius token.
- **md (8px):** Border radius token.
- **lg (12px):** Border radius token.
- **xl (16px):** Border radius token.
- **2xl (32px):** Border radius token.
- **full (32px 0px 0px 32px):** Border radius token.

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
- Avoid pairing --color-black on --color-dark-gray (1.43:1, Fail).
- Avoid pairing --color-light-gray-2 on --color-light-gray (1.5:1, Fail).
- Avoid pairing --color-light-gray-2 on --color-light-blue (1.2:1, Fail).
