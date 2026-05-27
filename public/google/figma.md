---
version: alpha
name: "Home – Figma"
description: "Converted from UI Inspector extraction of https://www.figma.com/files/team/1609475456435251541/recents-and-sharing?fuid=1609475454540289089"
colors:
  primary: "#000000"
  tertiary: "#0D99FF"
  neutral: "#F5F5F5"
  on-primary: "#F5F5F5"
  on-tertiary: "#FFFFFF"
  color-light-gray: "#E6E6E6"
  color-dark-gray: "#2C2C2C"
  color-dark-gray-2: "#1E1E1E"
  color-blue-3: "#007BE5"
  color-purple: "#9747FF"
  color-orange: "#FF5C16"
  color-pink: "#FF24BD"
  color-blue-4: "#4D49FC"
  color-black-2: "#000102"
  color-light-blue: "#E5F4FF"
  color-white-3: "#F2F9FF"
  color-light-gray-2: "#EEEEEE"
  color-light-gray-3: "#F2F2F2"
  color-white-4: "#F4F3FE"
  color-white-5: "#FAFAFA"
  color-blue: "#0000EE"
typography:
  h1:
    fontFamily: Times
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: -0.003px
  h2:
    fontFamily: Times
    fontSize: 13px
    fontWeight: 500
    lineHeight: 22px
    letterSpacing: -0.003px
  h3:
    fontFamily: Times
    fontSize: 11px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: -0.003px
  body-md:
    fontFamily: Times
    fontSize: 8px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: -0.003px
  code:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 400
rounded:
  sm: "0px 0px 13px 13px"
  md: 2px
  lg: 3px
  xl: 4px
  2xl: 4.5px
  full: 5px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 138.188px
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
---

## Overview

This design system was auto-extracted from https://www.figma.com/files/team/1609475456435251541/recents-and-sharing?fuid=1609475454540289089 (20 colors · 17 type tokens · 12 spacing steps · 6 breakpoints · 7 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-14T18:57:54.627Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **tertiary (#0D99FF):** Primary accent for links, buttons, and focus states.
- **neutral (#F5F5F5):** Primary readable text on dark surfaces.
- **on-primary (#F5F5F5):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-light-gray (#E6E6E6):** Supporting token from the extracted palette.
- **color-dark-gray (#2C2C2C):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#1E1E1E):** Supporting token from the extracted palette.
- **color-blue-3 (#007BE5):** Supporting token from the extracted palette.
- **color-purple (#9747FF):** Supporting token from the extracted palette.
- **color-orange (#FF5C16):** Supporting token from the extracted palette.
- **color-pink (#FF24BD):** Supporting token from the extracted palette.
- **color-blue-4 (#4D49FC):** Supporting token from the extracted palette.
- **color-black-2 (#000102):** Supporting token from the extracted palette.
- **color-light-blue (#E5F4FF):** Supporting token from the extracted palette.
- **color-white-3 (#F2F9FF):** Supporting token from the extracted palette.
- **color-light-gray-2 (#EEEEEE):** Supporting token from the extracted palette.
- **color-light-gray-3 (#F2F2F2):** Supporting token from the extracted palette.
- **color-white-4 (#F4F3FE):** Supporting token from the extracted palette.
- **color-white-5 (#FAFAFA):** Supporting token from the extracted palette.
- **color-blue (#0000EE):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Inter, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **h1:** font Times, 16px, weight 500.
- **h2:** font Times, 13px, weight 500.
- **h3:** font Times, 11px, weight 500.
- **body-md:** font Times, 8px, weight 500.
- **code:** font Inter, 13px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (138.188px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (645px):** Responsive layout threshold.
- **sm (832px):** Responsive layout threshold.
- **md (849px):** Responsive layout threshold.
- **lg (1000px):** Responsive layout threshold.
- **xl (1023px):** Responsive layout threshold.
- **2xl (1440px):** Responsive layout threshold.
- **breakpoint-xs (645px):** Responsive layout threshold.
- **breakpoint-sm (832px):** Responsive layout threshold.
- **breakpoint-md (849px):** Responsive layout threshold.
- **breakpoint-lg (1000px):** Responsive layout threshold.
- **breakpoint-xl (1023px):** Responsive layout threshold.
- **breakpoint-2xl (1440px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgb(230, 230, 230) 0px 0px 0px 1px inset`
- **md:** `rgba(0, 0, 0, 0.15) 0px 1px 3px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0.5px 0px`
- **lg:** `rgb(230, 230, 230) 0px 0px 0px 1px`
- **xl:** `rgba(0, 0, 0, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.12) 0px 10px 16px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0.5px 0px`
- **shadow-5:** `rgba(255, 255, 255, 0.4) 0px 0px 0px 1px inset`
- **shadow-6:** `rgba(0, 0, 0, 0.18) 0px 0px 0.5px 0px, rgba(0, 0, 0, 0.1) 0px 3px 8px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px`
- **shadow-sm:** `rgb(230, 230, 230) 0px 0px 0px 1px inset`
- **shadow-md:** `rgba(0, 0, 0, 0.15) 0px 1px 3px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0.5px 0px`
- **shadow-lg:** `rgb(230, 230, 230) 0px 0px 0px 1px`
- **shadow-xl:** `rgba(0, 0, 0, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.12) 0px 10px 16px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0.5px 0px`
- **shadow-shadow-5:** `rgba(255, 255, 255, 0.4) 0px 0px 0px 1px inset`
- **shadow-shadow-6:** `rgba(0, 0, 0, 0.18) 0px 0px 0.5px 0px, rgba(0, 0, 0, 0.1) 0px 3px 8px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 0px 13px 13px):** Border radius token.
- **md (2px):** Border radius token.
- **lg (3px):** Border radius token.
- **xl (4px):** Border radius token.
- **2xl (4.5px):** Border radius token.
- **full (5px):** Border radius token.

## Components

Component tokens map semantic colors and shapes to reusable UI patterns.

- **button-primary:** backgroundColor {colors.tertiary}, textColor {colors.on-tertiary}, rounded {rounded.md}, padding 12px.
- **button-primary-hover:** backgroundColor {colors.tertiary}.
- **surface:** backgroundColor {colors.primary}, textColor {colors.on-primary}.

## Do's and Don'ts

- **Do** use the accent color sparingly for primary actions and active states.
- **Do** maintain high contrast between text and background tokens.
- **Don't** introduce new colors outside the extracted palette without updating the YAML tokens.
- **Don't** mix arbitrary spacing values — use the spacing scale.

**Accessibility notes from extraction:**
- Avoid pairing --color-blue on --color-black (2.23:1, Fail).
