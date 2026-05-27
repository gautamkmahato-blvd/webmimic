---
version: alpha
name: "Gleap - AI-powered Customer Support OS"
description: "Converted from UI Inspector extraction of https://www.gleap.io/"
colors:
  primary: "#000000"
  secondary: "#7B7B7B"
  tertiary: "#13D9FE"
  neutral: "#333333"
  on-primary: "#333333"
  on-tertiary: "#FFFFFF"
  color-light-purple: "#F1CCFF"
  color-light-gray: "#D6D6D6"
  color-light-cyan: "#91E0FF"
  color-light-gray-2: "#DDDDDD"
  color-white-2: "#F5F2F0"
  color-light-gray-4: "#F4F2F0"
  color-red: "#FF0000"
  color-light-gray-3: "#BCBCBC"
  color-dark-blue: "rgba(16, 24, 40, 0.05)"
  color-light-purple-2: "rgba(236, 188, 255, 0.4)"
  color-light-pink: "#FBBAFF"
typography:
  display:
    fontFamily: sans-serif
    fontSize: 62px
    fontWeight: 500
    lineHeight: 80.6px
    letterSpacing: -0.325px
  h1:
    fontFamily: sans-serif
    fontSize: 48px
    fontWeight: 500
    lineHeight: 60px
    letterSpacing: -0.325px
  h2:
    fontFamily: sans-serif
    fontSize: 32px
    fontWeight: 500
    lineHeight: 57.6px
    letterSpacing: -0.325px
  h3:
    fontFamily: sans-serif
    fontSize: 24px
    fontWeight: 500
    lineHeight: 38.4px
    letterSpacing: -0.325px
  body-lg:
    fontFamily: sans-serif
    fontSize: 20px
    fontWeight: 500
    lineHeight: 31.2px
    letterSpacing: -0.325px
  body-md:
    fontFamily: sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: -0.325px
  body-sm:
    fontFamily: sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 26px
    letterSpacing: -0.325px
  caption:
    fontFamily: sans-serif
    fontSize: 13px
    fontWeight: 500
    lineHeight: 23px
    letterSpacing: -0.325px
  code:
    fontFamily: Arial
    fontSize: 16px
    fontWeight: 400
rounded:
  sm: 9px
  md: 10px
  lg: 12px
  xl: 13px
  2xl: 16px
  full: 20px
spacing:
  xs: 5px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 300px
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

This design system was auto-extracted from https://www.gleap.io/ (16 colors · 31 type tokens · 30 spacing steps · 5 breakpoints · 4 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-05-06T12:34:41.056Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#7B7B7B):** Muted text, borders, and metadata.
- **tertiary (#13D9FE):** Primary accent for links, buttons, and focus states.
- **neutral (#333333):** Primary readable text on dark surfaces.
- **on-primary (#333333):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-light-purple (#F1CCFF):** Supporting token from the extracted palette.
- **color-light-gray (#D6D6D6):** Supporting token from the extracted palette.
- **color-light-cyan (#91E0FF):** Supporting token from the extracted palette.
- **color-light-gray-2 (#DDDDDD):** Supporting token from the extracted palette.
- **color-white-2 (#F5F2F0):** Supporting token from the extracted palette.
- **color-light-gray-4 (#F4F2F0):** Supporting token from the extracted palette.
- **color-red (#FF0000):** Supporting token from the extracted palette.
- **color-light-gray-3 (#BCBCBC):** Supporting token from the extracted palette.
- **color-dark-blue (rgba(16, 24, 40, 0.05)):** Supporting token from the extracted palette.
- **color-light-purple-2 (rgba(236, 188, 255, 0.4)):** Supporting token from the extracted palette.
- **color-light-pink (#FBBAFF):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Arial, Switzer, PP Editorial New, Family, sans-serif**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font sans-serif, 62px, weight 500.
- **h1:** font sans-serif, 48px, weight 500.
- **h2:** font sans-serif, 32px, weight 500.
- **h3:** font sans-serif, 24px, weight 500.
- **body-lg:** font sans-serif, 20px, weight 500.
- **body-md:** font sans-serif, 16px, weight 500.
- **body-sm:** font sans-serif, 14px, weight 500.
- **caption:** font sans-serif, 13px, weight 500.
- **code:** font Arial, 16px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (5px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (300px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (450px):** Responsive layout threshold.
- **sm (479px):** Responsive layout threshold.
- **md (767px):** Responsive layout threshold.
- **lg (768px):** Responsive layout threshold.
- **xl (991px):** Responsive layout threshold.
- **breakpoint-xs (450px):** Responsive layout threshold.
- **breakpoint-sm (479px):** Responsive layout threshold.
- **breakpoint-md (767px):** Responsive layout threshold.
- **breakpoint-lg (768px):** Responsive layout threshold.
- **breakpoint-xl (991px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.04) 0px 8px 16px 0px`
- **md:** `rgba(16, 24, 40, 0.05) 0px 1px 2px 0px`
- **lg:** `rgba(0, 0, 0, 0.08) 0px 12px 16px -4px, rgba(16, 24, 40, 0.03) 0px 4px 6px -2px`
- **xl:** `rgba(236, 188, 255, 0.4) 2px 1px 16px 0px`
- **shadow-5:** `rgba(0, 0, 0, 0.15) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 0px 20px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0.04) 0px 8px 16px 0px`
- **shadow-md:** `rgba(16, 24, 40, 0.05) 0px 1px 2px 0px`
- **shadow-lg:** `rgba(0, 0, 0, 0.08) 0px 12px 16px -4px, rgba(16, 24, 40, 0.03) 0px 4px 6px -2px`
- **shadow-xl:** `rgba(236, 188, 255, 0.4) 2px 1px 16px 0px`
- **shadow-shadow-5:** `rgba(0, 0, 0, 0.15) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 0px 20px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (9px):** Border radius token.
- **md (10px):** Border radius token.
- **lg (12px):** Border radius token.
- **xl (13px):** Border radius token.
- **2xl (16px):** Border radius token.
- **full (20px):** Border radius token.

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
- Avoid pairing --color-dark-gray on --color-black (1.66:1, Fail).
- Avoid pairing --color-mid-gray on --color-light-purple (2.99:1, Fail).
- Avoid pairing --color-mid-gray on --color-light-gray (2.91:1, Fail).
