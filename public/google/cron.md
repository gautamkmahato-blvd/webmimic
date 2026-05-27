---
version: alpha
name: "Cron Calendar"
description: "Converted from UI Inspector extraction of https://www.cron.com/"
colors:
  primary: "#161412"
  secondary: "#FFFFFF"
  tertiary: "#FF4700"
  neutral: "#CCCCCC"
  on-primary: "#CCCCCC"
  on-tertiary: "#FFFFFF"
  color-black-2: "#0F0D0A"
  color-black: "#000000"
  color-orange: "rgba(255, 71, 0, 0.2)"
  color-orange-3: "rgba(255, 71, 0, 0.5)"
typography:
  h1:
    fontFamily: "Helvetica Neue"
    fontSize: 140px
    fontWeight: 500
    lineHeight: 126px
    letterSpacing: 0.15px
  h2:
    fontFamily: "Helvetica Neue"
    fontSize: 22px
    fontWeight: 500
    lineHeight: 37.4px
    letterSpacing: 0.15px
  h3:
    fontFamily: "Helvetica Neue"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 22px
    letterSpacing: 0.15px
  body-md:
    fontFamily: "Helvetica Neue"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 19.5px
    letterSpacing: 0.15px
  body-sm:
    fontFamily: "Helvetica Neue"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 15px
    letterSpacing: 0.15px
rounded:
  sm: 4px
  md: 9999px
spacing:
  xs: 1px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 24px
  2xl: 431.906px
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

This design system was auto-extracted from https://www.cron.com/ (8 colors · 16 type tokens · 9 spacing steps · 3 breakpoints · 1 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-18T18:44:03.473Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#161412):** Core surface and headline color.
- **secondary (#FFFFFF):** Muted text, borders, and metadata.
- **tertiary (#FF4700):** Primary accent for links, buttons, and focus states.
- **neutral (#CCCCCC):** Primary readable text on dark surfaces.
- **on-primary (#CCCCCC):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-black-2 (#0F0D0A):** Supporting token from the extracted palette.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-orange (rgba(255, 71, 0, 0.2)):** Supporting token from the extracted palette.
- **color-orange-3 (rgba(255, 71, 0, 0.5)):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Family, Helvetica Neue**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **h1:** font Helvetica Neue, 140px, weight 500.
- **h2:** font Helvetica Neue, 22px, weight 500.
- **h3:** font Helvetica Neue, 16px, weight 500.
- **body-md:** font Helvetica Neue, 15px, weight 500.
- **body-sm:** font Helvetica Neue, 13px, weight 500.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (1px):** Layout rhythm and component padding.
- **sm (12px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (24px):** Layout rhythm and component padding.
- **2xl (431.906px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (500px):** Responsive layout threshold.
- **sm (768px):** Responsive layout threshold.
- **md (1000px):** Responsive layout threshold.
- **breakpoint-xs (500px):** Responsive layout threshold.
- **breakpoint-sm (768px):** Responsive layout threshold.
- **breakpoint-md (1000px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(255, 71, 0, 0.2) 0px 0px 100px 0px`
- **md:** `rgba(255, 71, 0, 0.5) 0px 0px 0px 0.5px inset, rgba(255, 72, 0, 0.2) 0px 0px 28px 0px`
- **shadow-sm:** `rgba(255, 71, 0, 0.2) 0px 0px 100px 0px`
- **shadow-md:** `rgba(255, 71, 0, 0.5) 0px 0px 0px 0.5px inset, rgba(255, 72, 0, 0.2) 0px 0px 28px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (4px):** Border radius token.
- **md (9999px):** Border radius token.

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
- Avoid pairing --color-light-gray on --color-orange-2 (2.13:1, Fail).
- Avoid pairing --color-black on --color-dark-gray (1.14:1, Fail).
- Avoid pairing --color-black on --color-black-2 (1.08:1, Fail).
