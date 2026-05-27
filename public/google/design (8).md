---
version: alpha
name: "Home \ Anthropic"
description: "Converted from UI Inspector extraction of https://www.anthropic.com/"
colors:
  primary: "#141413"
  secondary: "#87867F"
  tertiary: "#E3DACC"
  neutral: "#FAF9F5"
  on-primary: "#FAF9F5"
  on-tertiary: "#FFFFFF"
  color-light-gray: "#F0EEE6"
  color-red: "#D97757"
  color-dark-gray-5: "#3D3D3A"
  color-orange: "#C6613F"
  color-black: "#000000"
  color-mid-gray: "#B0AEA5"
  color-dark-gray-2: "#141412"
  color-light-gray-2: "#E8E6DC"
  color-mid-gray-3: "#A1A0A0"
  color-dark-gray-3: "rgba(20, 20, 19, 0.1) rgb(20, 20, 19) rgb(20, 20, 19)"
  color-dark-gray-4: "#181818"
  color-white-3: "#F9F9F7"
typography:
  display:
    fontFamily: sans-serif
    fontSize: 80.751px
    fontWeight: 500
    lineHeight: 88.8261px
    letterSpacing: -0.08px
  h1:
    fontFamily: sans-serif
    fontSize: 54.8506px
    fontWeight: 500
    lineHeight: 60.3357px
    letterSpacing: -0.08px
  h2:
    fontFamily: sans-serif
    fontSize: 24px
    fontWeight: 500
    lineHeight: 33.6px
    letterSpacing: -0.08px
  h3:
    fontFamily: sans-serif
    fontSize: 20px
    fontWeight: 500
    lineHeight: 31.2px
    letterSpacing: -0.08px
  body-lg:
    fontFamily: sans-serif
    fontSize: 18px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: -0.08px
  body-md:
    fontFamily: sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 26px
    letterSpacing: -0.08px
  body-sm:
    fontFamily: sans-serif
    fontSize: 15px
    fontWeight: 500
    lineHeight: 25.2px
    letterSpacing: -0.08px
  caption:
    fontFamily: sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 22.4px
    letterSpacing: -0.08px
  code:
    fontFamily: "Anthropic Serif"
    fontSize: 15px
    fontWeight: 400
rounded:
  sm: "0px 0px 8px 8px"
  md: "0px 8px 8px 0px"
  lg: "8px 0px 0px 8px"
  xl: 8px
  2xl: 12px
  full: 16px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 214.484px
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

This design system was auto-extracted from https://www.anthropic.com/ (17 colors · 34 type tokens · 30 spacing steps · 5 breakpoints · 16 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-05-05T15:58:58.301Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#141413):** Core surface and headline color.
- **secondary (#87867F):** Muted text, borders, and metadata.
- **tertiary (#E3DACC):** Primary accent for links, buttons, and focus states.
- **neutral (#FAF9F5):** Primary readable text on dark surfaces.
- **on-primary (#FAF9F5):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-light-gray (#F0EEE6):** Supporting token from the extracted palette.
- **color-red (#D97757):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#3D3D3A):** Supporting token from the extracted palette.
- **color-orange (#C6613F):** Supporting token from the extracted palette.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-mid-gray (#B0AEA5):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#141412):** Supporting token from the extracted palette.
- **color-light-gray-2 (#E8E6DC):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#A1A0A0):** Supporting token from the extracted palette.
- **color-dark-gray-3 (rgba(20, 20, 19, 0.1) rgb(20, 20, 19) rgb(20, 20, 19)):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#181818):** Supporting token from the extracted palette.
- **color-white-3 (#F9F9F7):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Anthropic Serif, Anthropic Sans, Anthropic Mono, Family, sans-serif**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font sans-serif, 80.751px, weight 500.
- **h1:** font sans-serif, 54.8506px, weight 500.
- **h2:** font sans-serif, 24px, weight 500.
- **h3:** font sans-serif, 20px, weight 500.
- **body-lg:** font sans-serif, 18px, weight 500.
- **body-md:** font sans-serif, 16px, weight 500.
- **body-sm:** font sans-serif, 15px, weight 500.
- **caption:** font sans-serif, 14px, weight 500.
- **code:** font Anthropic Serif, 15px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (214.484px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (479px):** Responsive layout threshold.
- **sm (501px):** Responsive layout threshold.
- **md (767px):** Responsive layout threshold.
- **lg (768px):** Responsive layout threshold.
- **xl (991px):** Responsive layout threshold.
- **breakpoint-xs (479px):** Responsive layout threshold.
- **breakpoint-sm (501px):** Responsive layout threshold.
- **breakpoint-md (767px):** Responsive layout threshold.
- **breakpoint-lg (768px):** Responsive layout threshold.
- **breakpoint-xl (991px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.01) 0px 2px 2px 0px, rgba(0, 0, 0, 0.02) 0px 4px 4px 0px, rgba(0, 0, 0, 0.04) 0px 16px 24px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0.01) 0px 2px 2px 0px, rgba(0, 0, 0, 0.02) 0px 4px 4px 0px, rgba(0, 0, 0, 0.04) 0px 16px 24px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 0px 8px 8px):** Border radius token.
- **md (0px 8px 8px 0px):** Border radius token.
- **lg (8px 0px 0px 8px):** Border radius token.
- **xl (8px):** Border radius token.
- **2xl (12px):** Border radius token.
- **full (16px):** Border radius token.

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
- Avoid pairing --color-black on --color-dark-gray (1.14:1, Fail).
- Avoid pairing --color-mid-gray on --color-white (2.11:1, Fail).
- Avoid pairing --color-mid-gray on --color-mid-gray-2 (1.64:1, Fail).
