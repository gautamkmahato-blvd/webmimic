---
version: alpha
name: Supabase
description: "Converted from UI Inspector extraction of https://supabase.com/"
colors:
  primary: "#2E2E2E"
  secondary: "#898989"
  tertiary: "#3ECF8E"
  neutral: "#FAFAFA"
  on-primary: "#FAFAFA"
  on-tertiary: "#FFFFFF"
  color-black: "#000000"
  color-dark-gray-3: "#171717"
  color-dark-gray-4: "#121212"
  color-dark-gray-6: "#242424"
  color-dark-cyan: "#006239"
  color-dark-gray-8: "#1F1F1F"
  color-dark-gray-9: "#0F0F0F"
  color-dark-cyan-2: "#002918"
  color-light-gray: "#B4B4B4"
  color-dark-gray-2: "#4D4D4D"
  color-cyan-3: "#00C573"
  color-dark-gray-5: "#393939"
  color-dark-gray-7: "#363636"
  color-cyan-2: "rgba(62, 207, 142, 0.3)"
  color-dark-gray-10: "#292929"
  color-dark-gray-11: "#212121"
typography:
  display:
    fontFamily: Circular
    fontSize: 72px
    fontWeight: 500
    lineHeight: 72px
    letterSpacing: 1.2px
  h1:
    fontFamily: Circular
    fontSize: 36px
    fontWeight: 500
    lineHeight: 45px
    letterSpacing: 1.2px
  h2:
    fontFamily: Circular
    fontSize: 24px
    fontWeight: 500
    lineHeight: 43.2px
    letterSpacing: 1.2px
  h3:
    fontFamily: Circular
    fontSize: 18px
    fontWeight: 500
    lineHeight: 40px
    letterSpacing: 1.2px
  body-lg:
    fontFamily: Circular
    fontSize: 16px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: 1.2px
  body-md:
    fontFamily: Circular
    fontSize: 14px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: 1.2px
  body-sm:
    fontFamily: Circular
    fontSize: 12px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: 1.2px
  code:
    fontFamily: "Source Code Pro"
    fontSize: 16px
    fontWeight: 400
rounded:
  sm: 6px
  md: 8px
  lg: 11px
  xl: 12px
  2xl: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 230.5px
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

This design system was auto-extracted from https://supabase.com/ (21 colors · 24 type tokens · 22 spacing steps · 1 breakpoints · 7 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-12T05:23:23.829Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#2E2E2E):** Core surface and headline color.
- **secondary (#898989):** Muted text, borders, and metadata.
- **tertiary (#3ECF8E):** Primary accent for links, buttons, and focus states.
- **neutral (#FAFAFA):** Primary readable text on dark surfaces.
- **on-primary (#FAFAFA):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#171717):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#121212):** Supporting token from the extracted palette.
- **color-dark-gray-6 (#242424):** Supporting token from the extracted palette.
- **color-dark-cyan (#006239):** Supporting token from the extracted palette.
- **color-dark-gray-8 (#1F1F1F):** Supporting token from the extracted palette.
- **color-dark-gray-9 (#0F0F0F):** Supporting token from the extracted palette.
- **color-dark-cyan-2 (#002918):** Supporting token from the extracted palette.
- **color-light-gray (#B4B4B4):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#4D4D4D):** Supporting token from the extracted palette.
- **color-cyan-3 (#00C573):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#393939):** Supporting token from the extracted palette.
- **color-dark-gray-7 (#363636):** Supporting token from the extracted palette.
- **color-cyan-2 (rgba(62, 207, 142, 0.3)):** Supporting token from the extracted palette.
- **color-dark-gray-10 (#292929):** Supporting token from the extracted palette.
- **color-dark-gray-11 (#212121):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Source Code Pro, Family, Circular**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Circular, 72px, weight 500.
- **h1:** font Circular, 36px, weight 500.
- **h2:** font Circular, 24px, weight 500.
- **h3:** font Circular, 18px, weight 500.
- **body-lg:** font Circular, 16px, weight 500.
- **body-md:** font Circular, 14px, weight 500.
- **body-sm:** font Circular, 12px, weight 500.
- **code:** font Source Code Pro, 16px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (230.5px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (600px):** Responsive layout threshold.
- **breakpoint-xs (600px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
- **md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px`
- **lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px`
- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px`
- **shadow-lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (6px):** Border radius token.
- **md (8px):** Border radius token.
- **lg (11px):** Border radius token.
- **xl (12px):** Border radius token.
- **2xl (16px):** Border radius token.
- **full (9999px):** Border radius token.

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
- Avoid pairing --color-light-gray on --color-mid-gray (1.69:1, Fail).
- Avoid pairing --color-dark-gray-2 on --color-dark-gray (1.61:1, Fail).
- Avoid pairing --color-dark-gray-2 on --color-black (2.48:1, Fail).
