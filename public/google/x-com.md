---
version: alpha
name: "(2) Notifications / X"
description: "Converted from UI Inspector extraction of https://x.com/notifications"
colors:
  primary: "#0F1419"
  secondary: "#0F141A"
  tertiary: "#1D9BF0"
  neutral: "#000000"
  on-primary: "#000000"
  on-tertiary: "#FFFFFF"
  color-blue-6: "rgba(29, 155, 240, 0.1)"
  color-blue: "#536471"
  color-blue-3: "#829AAB"
  color-light-cyan: "#CFD9DE"
  color-light-gray: "#E4EAEC"
  color-light-gray-2: "#EFF3F4"
  color-blue-7: "#9FB5C3"
  color-blue-8: "#9EB4C2"
  color-blue-4: "rgba(101, 119, 134, 0.2)"
  color-blue-5: "rgba(101, 119, 134, 0.15)"
  color-red: "#F4212E"
  color-orange: "#D18800"
typography:
  h1:
    fontFamily: ui-sans-serif
    fontSize: 20px
    fontWeight: 500
    lineHeight: 24px
  h2:
    fontFamily: ui-sans-serif
    fontSize: 15px
    fontWeight: 500
    lineHeight: 22.5px
  h3:
    fontFamily: ui-sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  body-md:
    fontFamily: ui-sans-serif
    fontSize: 13px
    fontWeight: 500
    lineHeight: 16px
  body-sm:
    fontFamily: ui-sans-serif
    fontSize: 11px
    fontWeight: 500
    lineHeight: 12px
  code:
    fontFamily: TwitterChirp
    fontSize: 14px
    fontWeight: 400
rounded:
  sm: "0px 0px 16px 16px"
  md: 4px
  lg: 15px
  xl: 16px
  2xl: "16px 16px 0px 0px"
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 20px
  xl: 32px
  2xl: 266.5px
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

This design system was auto-extracted from https://x.com/notifications (17 colors · 17 type tokens · 11 spacing steps · 13 breakpoints · 6 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-18T08:50:36.072Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#0F1419):** Core surface and headline color.
- **secondary (#0F141A):** Muted text, borders, and metadata.
- **tertiary (#1D9BF0):** Primary accent for links, buttons, and focus states.
- **neutral (#000000):** Primary readable text on dark surfaces.
- **on-primary (#000000):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-blue-6 (rgba(29, 155, 240, 0.1)):** Supporting token from the extracted palette.
- **color-blue (#536471):** Supporting token from the extracted palette.
- **color-blue-3 (#829AAB):** Supporting token from the extracted palette.
- **color-light-cyan (#CFD9DE):** Supporting token from the extracted palette.
- **color-light-gray (#E4EAEC):** Supporting token from the extracted palette.
- **color-light-gray-2 (#EFF3F4):** Supporting token from the extracted palette.
- **color-blue-7 (#9FB5C3):** Supporting token from the extracted palette.
- **color-blue-8 (#9EB4C2):** Supporting token from the extracted palette.
- **color-blue-4 (rgba(101, 119, 134, 0.2)):** Supporting token from the extracted palette.
- **color-blue-5 (rgba(101, 119, 134, 0.15)):** Supporting token from the extracted palette.
- **color-red (#F4212E):** Supporting token from the extracted palette.
- **color-orange (#D18800):** Supporting token from the extracted palette.

## Typography

Primary typeface: **TwitterChirp, -apple-system, Family, ui-sans-serif**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **h1:** font ui-sans-serif, 20px, weight 500.
- **h2:** font ui-sans-serif, 15px, weight 500.
- **h3:** font ui-sans-serif, 14px, weight 500.
- **body-md:** font ui-sans-serif, 13px, weight 500.
- **body-sm:** font ui-sans-serif, 11px, weight 500.
- **code:** font TwitterChirp, 14px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (20px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (266.5px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (370px):** Responsive layout threshold.
- **sm (388px):** Responsive layout threshold.
- **md (407px):** Responsive layout threshold.
- **lg (600px):** Responsive layout threshold.
- **xl (640px):** Responsive layout threshold.
- **2xl (767px):** Responsive layout threshold.
- **3xl (768px):** Responsive layout threshold.
- **bp-8 (987px):** Responsive layout threshold.
- **bp-9 (988px):** Responsive layout threshold.
- **bp-10 (1024px):** Responsive layout threshold.
- **bp-11 (1077px):** Responsive layout threshold.
- **bp-12 (1280px):** Responsive layout threshold.
- **bp-13 (1536px):** Responsive layout threshold.
- **breakpoint-xs (370px):** Responsive layout threshold.
- **breakpoint-sm (388px):** Responsive layout threshold.
- **breakpoint-md (407px):** Responsive layout threshold.
- **breakpoint-lg (600px):** Responsive layout threshold.
- **breakpoint-xl (640px):** Responsive layout threshold.
- **breakpoint-2xl (767px):** Responsive layout threshold.
- **breakpoint-3xl (768px):** Responsive layout threshold.
- **breakpoint-bp-8 (987px):** Responsive layout threshold.
- **breakpoint-bp-9 (988px):** Responsive layout threshold.
- **breakpoint-bp-10 (1024px):** Responsive layout threshold.
- **breakpoint-bp-11 (1077px):** Responsive layout threshold.
- **breakpoint-bp-12 (1280px):** Responsive layout threshold.
- **breakpoint-bp-13 (1536px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.03) 0px 0px 2px 0px inset`
- **md:** `rgba(101, 119, 134, 0.2) 0px 0px 15px 0px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px`
- **lg:** `rgba(101, 119, 134, 0.2) 0px 0px 8px 0px, rgba(101, 119, 134, 0.25) 0px 1px 3px 1px`
- **shadow-sm:** `rgba(0, 0, 0, 0.03) 0px 0px 2px 0px inset`
- **shadow-md:** `rgba(101, 119, 134, 0.2) 0px 0px 15px 0px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px`
- **shadow-lg:** `rgba(101, 119, 134, 0.2) 0px 0px 8px 0px, rgba(101, 119, 134, 0.25) 0px 1px 3px 1px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 0px 16px 16px):** Border radius token.
- **md (4px):** Border radius token.
- **lg (15px):** Border radius token.
- **xl (16px):** Border radius token.
- **2xl (16px 16px 0px 0px):** Border radius token.
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
- Avoid pairing --color-black on --color-dark-gray-2 (1.13:1, Fail).
- Avoid pairing --color-dark-gray on --color-dark-gray-2 (1:1, Fail).
- Avoid pairing --color-blue on --color-blue-2 (2.04:1, Fail).
