---
version: alpha
name: "Warp: The Agentic Development Environment"
description: "Converted from UI Inspector extraction of https://www.warp.dev/"
colors:
  primary: "#FFFFFF"
  secondary: "#868584"
  tertiary: "#2ECC71"
  neutral: "#000000"
  on-primary: "#000000"
  on-tertiary: "#FFFFFF"
  color-white-3: "#FAF9F6"
  color-dark-gray: "#121212"
  color-dark-gray-2: "#2F2F2F"
  color-light-gray: "#EBEBEB"
  color-dark-gray-3: "#40403F"
  color-dark-gray-5: "#1A1A1A"
  color-dark-gray-8: "#333333"
  color-dark-gray-10: "#353534"
  color-white-5: "#F9FAF5"
  color-dark-gray-14: "rgba(54, 54, 50, 0.1)"
  color-white-6: "#F9F8F6"
  color-dark-gray-15: "#1E1E1D"
  color-blue: "#0000EE"
  color-white-2: "rgba(250, 249, 246, 0.9)"
  color-mid-gray-2: "#AFAEAC"
  color-light-gray-2: "#E3E2E0"
  color-light-gray-3: "#E0DFDC"
  color-dark-gray-7: "#2A2B25"
  color-light-purple: "#CBB0F7"
  color-white-4: "rgba(250, 249, 246, 0.5)"
  color-mid-gray-3: "#666469"
  color-dark-gray-4: "rgba(18, 18, 18, 0.86)"
  color-dark-gray-6: "rgba(18, 18, 18, 0.918)"
  color-dark-gray-9: "rgba(18, 18, 18, 0.19)"
  color-dark-gray-11: "rgba(18, 18, 18, 0.14)"
  color-dark-gray-12: "rgba(18, 18, 18, 0.1)"
  color-black-2: "rgba(18, 18, 18, 0.082)"
  color-dark-gray-13: "rgba(18, 18, 18, 0.067)"
typography:
  display:
    fontFamily: Times
    fontSize: 56px
    fontWeight: 500
    lineHeight: 54px
    letterSpacing: -0.8px
  h1:
    fontFamily: Times
    fontSize: 42px
    fontWeight: 500
    lineHeight: 48.3px
    letterSpacing: -0.8px
  h2:
    fontFamily: Times
    fontSize: 32px
    fontWeight: 500
    lineHeight: 38px
    letterSpacing: -0.8px
  h3:
    fontFamily: Times
    fontSize: 24px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: -0.8px
  body-lg:
    fontFamily: Times
    fontSize: 20px
    fontWeight: 500
    lineHeight: 25px
    letterSpacing: -0.8px
  body-md:
    fontFamily: Times
    fontSize: 18px
    fontWeight: 500
    lineHeight: 22px
    letterSpacing: -0.8px
  body-sm:
    fontFamily: Times
    fontSize: 16px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: -0.8px
  caption:
    fontFamily: Times
    fontSize: 14px
    fontWeight: 500
    lineHeight: 19.2px
    letterSpacing: -0.8px
  code:
    fontFamily: sans-serif
    fontSize: 13px
    fontWeight: 400
rounded:
  sm: 4px
  md: 5px
  lg: 6px
  xl: 7px
  2xl: 8px
  full: 10px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 160px
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

This design system was auto-extracted from https://www.warp.dev/ (32 colors · 47 type tokens · 34 spacing steps · 6 breakpoints · 4 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-18T08:46:02.397Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#FFFFFF):** Core surface and headline color.
- **secondary (#868584):** Muted text, borders, and metadata.
- **tertiary (#2ECC71):** Primary accent for links, buttons, and focus states.
- **neutral (#000000):** Primary readable text on dark surfaces.
- **on-primary (#000000):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-white-3 (#FAF9F6):** Supporting token from the extracted palette.
- **color-dark-gray (#121212):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#2F2F2F):** Supporting token from the extracted palette.
- **color-light-gray (#EBEBEB):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#40403F):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#1A1A1A):** Supporting token from the extracted palette.
- **color-dark-gray-8 (#333333):** Supporting token from the extracted palette.
- **color-dark-gray-10 (#353534):** Supporting token from the extracted palette.
- **color-white-5 (#F9FAF5):** Supporting token from the extracted palette.
- **color-dark-gray-14 (rgba(54, 54, 50, 0.1)):** Supporting token from the extracted palette.
- **color-white-6 (#F9F8F6):** Supporting token from the extracted palette.
- **color-dark-gray-15 (#1E1E1D):** Supporting token from the extracted palette.
- **color-blue (#0000EE):** Supporting token from the extracted palette.
- **color-white-2 (rgba(250, 249, 246, 0.9)):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#AFAEAC):** Supporting token from the extracted palette.
- **color-light-gray-2 (#E3E2E0):** Supporting token from the extracted palette.
- **color-light-gray-3 (#E0DFDC):** Supporting token from the extracted palette.
- **color-dark-gray-7 (#2A2B25):** Supporting token from the extracted palette.
- **color-light-purple (#CBB0F7):** Supporting token from the extracted palette.
- **color-white-4 (rgba(250, 249, 246, 0.5)):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#666469):** Supporting token from the extracted palette.
- **color-dark-gray-4 (rgba(18, 18, 18, 0.86)):** Supporting token from the extracted palette.
- **color-dark-gray-6 (rgba(18, 18, 18, 0.918)):** Supporting token from the extracted palette.
- **color-dark-gray-9 (rgba(18, 18, 18, 0.19)):** Supporting token from the extracted palette.
- **color-dark-gray-11 (rgba(18, 18, 18, 0.14)):** Supporting token from the extracted palette.
- **color-dark-gray-12 (rgba(18, 18, 18, 0.1)):** Supporting token from the extracted palette.
- **color-black-2 (rgba(18, 18, 18, 0.082)):** Supporting token from the extracted palette.
- **color-dark-gray-13 (rgba(18, 18, 18, 0.067)):** Supporting token from the extracted palette.

## Typography

Primary typeface: **sans-serif, Matter Regular, Matter Medium, Inter, Geist Mono, Matter Mono Regular, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Times, 56px, weight 500.
- **h1:** font Times, 42px, weight 500.
- **h2:** font Times, 32px, weight 500.
- **h3:** font Times, 24px, weight 500.
- **body-lg:** font Times, 20px, weight 500.
- **body-md:** font Times, 18px, weight 500.
- **body-sm:** font Times, 16px, weight 500.
- **caption:** font Times, 14px, weight 500.
- **code:** font sans-serif, 13px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (160px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (809px):** Responsive layout threshold.
- **sm (809.98px):** Responsive layout threshold.
- **md (810px):** Responsive layout threshold.
- **lg (1199px):** Responsive layout threshold.
- **xl (1199.98px):** Responsive layout threshold.
- **2xl (1500px):** Responsive layout threshold.
- **breakpoint-xs (809px):** Responsive layout threshold.
- **breakpoint-sm (809.98px):** Responsive layout threshold.
- **breakpoint-md (810px):** Responsive layout threshold.
- **breakpoint-lg (1199px):** Responsive layout threshold.
- **breakpoint-xl (1199.98px):** Responsive layout threshold.
- **breakpoint-2xl (1500px):** Responsive layout threshold.

## Elevation & Depth

Elevation is minimal in the extracted system — surfaces rely on contrast and borders rather than heavy shadows.

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (4px):** Border radius token.
- **md (5px):** Border radius token.
- **lg (6px):** Border radius token.
- **xl (7px):** Border radius token.
- **2xl (8px):** Border radius token.
- **full (10px):** Border radius token.

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
- Avoid pairing --color-black on --color-dark-gray (1.12:1, Fail).
- Avoid pairing --color-black on --color-dark-gray-2 (1.57:1, Fail).
- Avoid pairing --color-blue on --color-dark-gray (1.99:1, Fail).
