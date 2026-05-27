---
version: alpha
name: "PlanetScale - the world’s fastest and most scalable cloud hosting for Vitess and Postgres"
description: "Converted from UI Inspector extraction of https://planetscale.com/"
colors:
  primary: "#FAFAFA"
  secondary: "#737373"
  tertiary: "#F2B600"
  neutral: "#414141"
  on-primary: "#414141"
  on-tertiary: "#FFFFFF"
  color-dark-gray-2: "#111111"
  color-orange: "#FF4400"
  color-light-gray-2: "#EBEBEB"
  color-black: "#000000"
  color-blue: "#006BD7"
  color-light-gray: "#C1C1C1"
  color-orange-2: "#F35815"
  color-red: "#C11027"
typography:
  h1:
    fontFamily: ui-sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: -0.096px
  h2:
    fontFamily: ui-sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: -0.096px
  code:
    fontFamily: ui-monospace
    fontSize: 16px
    fontWeight: 400
rounded:
  sm: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 96px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: 8px
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

This design system was auto-extracted from https://planetscale.com/ (13 colors · 12 type tokens · 12 spacing steps · 5 breakpoints · 1 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-18T18:46:20.913Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#FAFAFA):** Core surface and headline color.
- **secondary (#737373):** Muted text, borders, and metadata.
- **tertiary (#F2B600):** Primary accent for links, buttons, and focus states.
- **neutral (#414141):** Primary readable text on dark surfaces.
- **on-primary (#414141):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-dark-gray-2 (#111111):** Supporting token from the extracted palette.
- **color-orange (#FF4400):** Supporting token from the extracted palette.
- **color-light-gray-2 (#EBEBEB):** Supporting token from the extracted palette.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-blue (#006BD7):** Supporting token from the extracted palette.
- **color-light-gray (#C1C1C1):** Supporting token from the extracted palette.
- **color-orange-2 (#F35815):** Supporting token from the extracted palette.
- **color-red (#C11027):** Supporting token from the extracted palette.

## Typography

Primary typeface: **ui-monospace, Family, ui-sans-serif**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **h1:** font ui-sans-serif, 16px, weight 500.
- **h2:** font ui-sans-serif, 12px, weight 500.
- **code:** font ui-monospace, 16px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (96px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (640px):** Responsive layout threshold.
- **sm (768px):** Responsive layout threshold.
- **md (1024px):** Responsive layout threshold.
- **lg (1280px):** Responsive layout threshold.
- **xl (1536px):** Responsive layout threshold.
- **breakpoint-xs (640px):** Responsive layout threshold.
- **breakpoint-sm (768px):** Responsive layout threshold.
- **breakpoint-md (1024px):** Responsive layout threshold.
- **breakpoint-lg (1280px):** Responsive layout threshold.
- **breakpoint-xl (1536px):** Responsive layout threshold.

## Elevation & Depth

Elevation is minimal in the extracted system — surfaces rely on contrast and borders rather than heavy shadows.

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (9999px):** Border radius token.

## Components

Component tokens map semantic colors and shapes to reusable UI patterns.

- **button-primary:** backgroundColor {colors.tertiary}, textColor {colors.on-tertiary}, rounded 8px, padding 12px.
- **button-primary-hover:** backgroundColor {colors.tertiary}.
- **surface:** backgroundColor {colors.primary}, textColor {colors.on-primary}.
- **text-muted:** textColor {colors.secondary}, typography body-sm.

## Do's and Don'ts

- **Do** use the accent color sparingly for primary actions and active states.
- **Do** maintain high contrast between text and background tokens.
- **Don't** introduce new colors outside the extracted palette without updating the YAML tokens.
- **Don't** mix arbitrary spacing values — use the spacing scale.

**Accessibility notes from extraction:**
- Avoid pairing --color-dark-gray on --color-dark-gray-2 (1.85:1, Fail).
- Avoid pairing --color-dark-gray on --color-orange (2.95:1, Fail).
- Avoid pairing --color-black on --color-dark-gray-2 (1.11:1, Fail).
