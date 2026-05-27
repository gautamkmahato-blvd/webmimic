---
version: alpha
name: "Earn Money by Driving or Get a Ride Now"
description: "Converted from UI Inspector extraction of https://www.uber.com/in/en/"
colors:
  primary: "#000000"
  secondary: "#757575"
  tertiary: "#9DCDD6"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-white-2: "#F3F3F3"
  color-white-3: "#F6F6F6"
  color-light-gray-2: "#EEEEEE"
  color-light-gray-3: "#EFEFEF"
  color-blue: "#0000EE"
  color-dark-gray: "#5E5E5E"
  color-red: "#E11900"
  color-mid-gray-2: "#AFAFAF"
  color-dark-gray-2: "#333333"
  color-mid-gray-4: "#A6A6A6"
  color-dark-gray-3: "#4B4B4B"
  color-mid-gray-3: "#767676"
  color-light-gray: "#CBCBCB"
typography:
  display:
    fontFamily: sans-serif
    fontSize: 44px
    fontWeight: 500
    lineHeight: 112px
  h1:
    fontFamily: sans-serif
    fontSize: 36px
    fontWeight: 500
    lineHeight: 52px
  h2:
    fontFamily: sans-serif
    fontSize: 32px
    fontWeight: 500
    lineHeight: 44px
  h3:
    fontFamily: sans-serif
    fontSize: 28px
    fontWeight: 500
    lineHeight: 40px
  body-lg:
    fontFamily: sans-serif
    fontSize: 24px
    fontWeight: 500
    lineHeight: 36px
  body-md:
    fontFamily: sans-serif
    fontSize: 20px
    fontWeight: 500
    lineHeight: 32px
  body-sm:
    fontFamily: sans-serif
    fontSize: 18px
    fontWeight: 500
    lineHeight: 28px
  caption:
    fontFamily: sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  code:
    fontFamily: UberMoveText
    fontSize: 16px
    fontWeight: 400
rounded:
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  2xl: "50%"
  full: 999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 84px
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

This design system was auto-extracted from https://www.uber.com/in/en/ (17 colors · 26 type tokens · 21 spacing steps · 7 breakpoints · 6 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-18T08:27:14.787Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#757575):** Muted text, borders, and metadata.
- **tertiary (#9DCDD6):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-white-2 (#F3F3F3):** Supporting token from the extracted palette.
- **color-white-3 (#F6F6F6):** Supporting token from the extracted palette.
- **color-light-gray-2 (#EEEEEE):** Supporting token from the extracted palette.
- **color-light-gray-3 (#EFEFEF):** Supporting token from the extracted palette.
- **color-blue (#0000EE):** Supporting token from the extracted palette.
- **color-dark-gray (#5E5E5E):** Supporting token from the extracted palette.
- **color-red (#E11900):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#AFAFAF):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#333333):** Supporting token from the extracted palette.
- **color-mid-gray-4 (#A6A6A6):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#4B4B4B):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#767676):** Supporting token from the extracted palette.
- **color-light-gray (#CBCBCB):** Supporting token from the extracted palette.

## Typography

Primary typeface: **UberMoveText, UberMove, Family, sans-serif**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font sans-serif, 44px, weight 500.
- **h1:** font sans-serif, 36px, weight 500.
- **h2:** font sans-serif, 32px, weight 500.
- **h3:** font sans-serif, 28px, weight 500.
- **body-lg:** font sans-serif, 24px, weight 500.
- **body-md:** font sans-serif, 20px, weight 500.
- **body-sm:** font sans-serif, 18px, weight 500.
- **caption:** font sans-serif, 16px, weight 500.
- **code:** font UberMoveText, 16px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (84px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (320px):** Responsive layout threshold.
- **sm (600px):** Responsive layout threshold.
- **md (767px):** Responsive layout threshold.
- **lg (768px):** Responsive layout threshold.
- **xl (1119px):** Responsive layout threshold.
- **2xl (1120px):** Responsive layout threshold.
- **3xl (1136px):** Responsive layout threshold.
- **breakpoint-xs (320px):** Responsive layout threshold.
- **breakpoint-sm (600px):** Responsive layout threshold.
- **breakpoint-md (767px):** Responsive layout threshold.
- **breakpoint-lg (768px):** Responsive layout threshold.
- **breakpoint-xl (1119px):** Responsive layout threshold.
- **breakpoint-2xl (1120px):** Responsive layout threshold.
- **breakpoint-3xl (1136px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.16) 0px 4px 16px 0px`
- **md:** `rgba(0, 0, 0, 0.12) 0px 4px 16px 0px`
- **lg:** `rgba(0, 0, 0, 0.16) 0px 2px 8px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0.16) 0px 4px 16px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0.12) 0px 4px 16px 0px`
- **shadow-lg:** `rgba(0, 0, 0, 0.16) 0px 2px 8px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (6px):** Border radius token.
- **md (8px):** Border radius token.
- **lg (12px):** Border radius token.
- **xl (16px):** Border radius token.
- **2xl (50%):** Border radius token.
- **full (999px):** Border radius token.

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
- Avoid pairing --color-blue on --color-black (2.23:1, Fail).
- Avoid pairing --color-mid-gray-2 on --color-white (2.19:1, Fail).
- Avoid pairing --color-mid-gray-2 on --color-white-2 (1.98:1, Fail).
