---
version: alpha
name: "Design System"
description: "Converted from UI Inspector extraction of https://app.emergent.sh/landing/?utm_source=google&utm_medium=search&utm_campaign=23761608622&utm_adgroup=194967236386&utm_term=lovable&matchtype=e&device=c&network=g&gad_source=1&gad_campaignid=23761608622&gbraid=0AAAABA86LmDFYTMmv3x1brpt5IsTpTsua&gclid=CjwKCAjw7vzOBhBxEiwAc7WNr5DrWbWJzukBJtAKx5Aqf2XR5Ql57o1W7aK1iPPZ86PA19HLlZOfmhoCLnIQAvD_BwE"
colors:
  primary: "#000000"
  secondary: "#808080"
  tertiary: "#57D5FE"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-dark-gray: "#666666"
  color-dark-gray-4: "#525252"
  color-light-gray-2: "#EBEBEB"
  color-light-green: "#E5FFED"
  color-dark-gray-7: "#252528"
  color-orange: "#E57845"
  color-white-2: "#F5F4F2"
  color-light-gray-3: "#F0F0EF"
  color-green-3: "rgba(0, 204, 11, 0.1)"
  color-dark-gray-2: "#0E0E0E"
  color-dark-gray-3: "#262629"
  color-dark-blue: "#4B5563"
  color-dark-green: "#00661F"
  color-dark-gray-5: "#0E0E0F"
  color-dark-green-2: "#00330F"
  color-black-2: "#050505"
  color-green-2: "#338037"
  color-light-gray: "#E5E3E1"
  color-light-gray-4: "#E3E3E2"
  color-blue-3: "#6B7280"
  color-mid-gray: "#8A8A8A"
  color-dark-gray-6: "#1A1A1A"
  color-blue: "#4E9BEE"
  color-blue-2: "#3489FE"
  color-black-3: "#0A0A0A"
  color-red: "#FF5F57"
  color-orange-2: "#FFBD2E"
  color-green: "#28C840"
  color-dark-gray-8: "#2A2A2A"
typography:
  display:
    fontFamily: ui-sans-serif
    fontSize: 72px
    fontWeight: 500
    lineHeight: 72px
    letterSpacing: -1.8px
  h1:
    fontFamily: ui-sans-serif
    fontSize: 36px
    fontWeight: 500
    lineHeight: 40px
    letterSpacing: -1.8px
  h2:
    fontFamily: ui-sans-serif
    fontSize: 32px
    fontWeight: 500
    lineHeight: 36px
    letterSpacing: -1.8px
  h3:
    fontFamily: ui-sans-serif
    fontSize: 24px
    fontWeight: 500
    lineHeight: 33px
    letterSpacing: -1.8px
  body-lg:
    fontFamily: ui-sans-serif
    fontSize: 22px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: -1.8px
  body-md:
    fontFamily: ui-sans-serif
    fontSize: 18px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: -1.8px
  body-sm:
    fontFamily: ui-sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 21px
    letterSpacing: -1.8px
  caption:
    fontFamily: ui-sans-serif
    fontSize: 15px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: -1.8px
  code:
    fontFamily: -apple-system
    fontSize: 15px
    fontWeight: 400
rounded:
  sm: "0px 0px 6px 6px"
  md: 4px
  lg: 5px
  xl: 6px
  2xl: 8px
  full: 12px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 428.25px
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

This design system was auto-extracted from https://app.emergent.sh/landing/?utm_source=google&utm_medium=search&utm_campaign=23761608622&utm_adgroup=194967236386&utm_term=lovable&matchtype=e&device=c&network=g&gad_source=1&gad_campaignid=23761608622&gbraid=0AAAABA86LmDFYTMmv3x1brpt5IsTpTsua&gclid=CjwKCAjw7vzOBhBxEiwAc7WNr5DrWbWJzukBJtAKx5Aqf2XR5Ql57o1W7aK1iPPZ86PA19HLlZOfmhoCLnIQAvD_BwE (33 colors · 41 type tokens · 27 spacing steps · 9 breakpoints · 3 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-15T18:05:35.671Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#808080):** Muted text, borders, and metadata.
- **tertiary (#57D5FE):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-dark-gray (#666666):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#525252):** Supporting token from the extracted palette.
- **color-light-gray-2 (#EBEBEB):** Supporting token from the extracted palette.
- **color-light-green (#E5FFED):** Supporting token from the extracted palette.
- **color-dark-gray-7 (#252528):** Supporting token from the extracted palette.
- **color-orange (#E57845):** Supporting token from the extracted palette.
- **color-white-2 (#F5F4F2):** Supporting token from the extracted palette.
- **color-light-gray-3 (#F0F0EF):** Supporting token from the extracted palette.
- **color-green-3 (rgba(0, 204, 11, 0.1)):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#0E0E0E):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#262629):** Supporting token from the extracted palette.
- **color-dark-blue (#4B5563):** Supporting token from the extracted palette.
- **color-dark-green (#00661F):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#0E0E0F):** Supporting token from the extracted palette.
- **color-dark-green-2 (#00330F):** Supporting token from the extracted palette.
- **color-black-2 (#050505):** Supporting token from the extracted palette.
- **color-green-2 (#338037):** Supporting token from the extracted palette.
- **color-light-gray (#E5E3E1):** Supporting token from the extracted palette.
- **color-light-gray-4 (#E3E3E2):** Supporting token from the extracted palette.
- **color-blue-3 (#6B7280):** Supporting token from the extracted palette.
- **color-mid-gray (#8A8A8A):** Supporting token from the extracted palette.
- **color-dark-gray-6 (#1A1A1A):** Supporting token from the extracted palette.
- **color-blue (#4E9BEE):** Supporting token from the extracted palette.
- **color-blue-2 (#3489FE):** Supporting token from the extracted palette.
- **color-black-3 (#0A0A0A):** Supporting token from the extracted palette.
- **color-red (#FF5F57):** Supporting token from the extracted palette.
- **color-orange-2 (#FFBD2E):** Supporting token from the extracted palette.
- **color-green (#28C840):** Supporting token from the extracted palette.
- **color-dark-gray-8 (#2A2A2A):** Supporting token from the extracted palette.

## Typography

Primary typeface: **-apple-system, Brockmann, Inter, brockmann, Ndot, Family, ui-sans-serif**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font ui-sans-serif, 72px, weight 500.
- **h1:** font ui-sans-serif, 36px, weight 500.
- **h2:** font ui-sans-serif, 32px, weight 500.
- **h3:** font ui-sans-serif, 24px, weight 500.
- **body-lg:** font ui-sans-serif, 22px, weight 500.
- **body-md:** font ui-sans-serif, 18px, weight 500.
- **body-sm:** font ui-sans-serif, 16px, weight 500.
- **caption:** font ui-sans-serif, 15px, weight 500.
- **code:** font -apple-system, 15px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (428.25px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (379px):** Responsive layout threshold.
- **sm (600px):** Responsive layout threshold.
- **md (640px):** Responsive layout threshold.
- **lg (767px):** Responsive layout threshold.
- **xl (768px):** Responsive layout threshold.
- **2xl (1024px):** Responsive layout threshold.
- **3xl (1280px):** Responsive layout threshold.
- **bp-8 (1536px):** Responsive layout threshold.
- **bp-9 (1920px):** Responsive layout threshold.
- **breakpoint-xs (379px):** Responsive layout threshold.
- **breakpoint-sm (600px):** Responsive layout threshold.
- **breakpoint-md (640px):** Responsive layout threshold.
- **breakpoint-lg (767px):** Responsive layout threshold.
- **breakpoint-xl (768px):** Responsive layout threshold.
- **breakpoint-2xl (1024px):** Responsive layout threshold.
- **breakpoint-3xl (1280px):** Responsive layout threshold.
- **breakpoint-bp-8 (1536px):** Responsive layout threshold.
- **breakpoint-bp-9 (1920px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- **md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px`
- **lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px`
- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px`
- **shadow-lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 0px 6px 6px):** Border radius token.
- **md (4px):** Border radius token.
- **lg (5px):** Border radius token.
- **xl (6px):** Border radius token.
- **2xl (8px):** Border radius token.
- **full (12px):** Border radius token.

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
- Avoid pairing --color-dark-gray-2 on --color-black (1.09:1, Fail).
- Avoid pairing --color-dark-gray-2 on --color-dark-gray-4 (2.47:1, Fail).
- Avoid pairing --color-dark-gray-3 on --color-black (1.39:1, Fail).
