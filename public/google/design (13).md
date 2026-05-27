---
version: alpha
name: "Augen Pro"
description: "Converted from UI Inspector extraction of https://augen.pro/"
colors:
  primary: "#0F1012"
  secondary: "rgba(120, 120, 120, 0.1)"
  tertiary: "#0071E3"
  neutral: "#F2F2F4"
  on-primary: "#F2F2F4"
  on-tertiary: "#FFFFFF"
  color-light-gray: "#EFEFEF"
  color-white-3: "#FDFDFD"
  color-dark-gray-4: "rgba(12, 13, 15, 0.05)"
  color-dark-gray-5: "rgba(29, 30, 32, 0.5)"
  color-black: "#000000"
  color-dark-gray-2: "#5E5E5E"
  color-black-2: "#020201"
  color-dark-gray-3: "rgba(15, 16, 18, 0.2)"
typography:
  display:
    fontFamily: "PP Neue Montreal"
    fontSize: 110.153px
    fontWeight: 400
    lineHeight: 132.183px
    letterSpacing: -0.5px
  h1:
    fontFamily: "PP Neue Montreal"
    fontSize: 35px
    fontWeight: 400
    lineHeight: 42px
    letterSpacing: -0.5px
  h2:
    fontFamily: "PP Neue Montreal"
    fontSize: 25px
    fontWeight: 400
    lineHeight: 30px
    letterSpacing: -0.5px
  h3:
    fontFamily: "PP Neue Montreal"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 21.6px
    letterSpacing: -0.5px
  body-lg:
    fontFamily: "PP Neue Montreal"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 19.2px
    letterSpacing: -0.5px
  body-md:
    fontFamily: "PP Neue Montreal"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 16.8px
    letterSpacing: -0.5px
  body-sm:
    fontFamily: "PP Neue Montreal"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 14.4px
    letterSpacing: -0.5px
  caption:
    fontFamily: "PP Neue Montreal"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 12px
    letterSpacing: -0.5px
rounded:
  sm: 1.5px
  md: 1.8px
  lg: 10px
  xl: 26px
  2xl: "50%"
  full: 54px
spacing:
  xs: 4px
  sm: 6px
  md: 19.6701px
  lg: 20px
  xl: 31.4722px
  2xl: 362.164px
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

This design system was auto-extracted from https://augen.pro/ (13 colors · 27 type tokens · 48 spacing steps · 4 breakpoints · 4 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-05-06T11:50:56.862Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#0F1012):** Core surface and headline color.
- **secondary (rgba(120, 120, 120, 0.1)):** Muted text, borders, and metadata.
- **tertiary (#0071E3):** Primary accent for links, buttons, and focus states.
- **neutral (#F2F2F4):** Primary readable text on dark surfaces.
- **on-primary (#F2F2F4):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-light-gray (#EFEFEF):** Supporting token from the extracted palette.
- **color-white-3 (#FDFDFD):** Supporting token from the extracted palette.
- **color-dark-gray-4 (rgba(12, 13, 15, 0.05)):** Supporting token from the extracted palette.
- **color-dark-gray-5 (rgba(29, 30, 32, 0.5)):** Supporting token from the extracted palette.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#5E5E5E):** Supporting token from the extracted palette.
- **color-black-2 (#020201):** Supporting token from the extracted palette.
- **color-dark-gray-3 (rgba(15, 16, 18, 0.2)):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Family, PP Neue Montreal**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font PP Neue Montreal, 110.153px, weight 400.
- **h1:** font PP Neue Montreal, 35px, weight 400.
- **h2:** font PP Neue Montreal, 25px, weight 400.
- **h3:** font PP Neue Montreal, 18px, weight 400.
- **body-lg:** font PP Neue Montreal, 16px, weight 400.
- **body-md:** font PP Neue Montreal, 14px, weight 400.
- **body-sm:** font PP Neue Montreal, 12px, weight 400.
- **caption:** font PP Neue Montreal, 10px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (6px):** Layout rhythm and component padding.
- **md (19.6701px):** Layout rhythm and component padding.
- **lg (20px):** Layout rhythm and component padding.
- **xl (31.4722px):** Layout rhythm and component padding.
- **2xl (362.164px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (833px):** Responsive layout threshold.
- **sm (834px):** Responsive layout threshold.
- **md (1024px):** Responsive layout threshold.
- **lg (1440px):** Responsive layout threshold.
- **breakpoint-xs (833px):** Responsive layout threshold.
- **breakpoint-sm (834px):** Responsive layout threshold.
- **breakpoint-md (1024px):** Responsive layout threshold.
- **breakpoint-lg (1440px):** Responsive layout threshold.

## Elevation & Depth

Elevation is minimal in the extracted system — surfaces rely on contrast and borders rather than heavy shadows.

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (1.5px):** Border radius token.
- **md (1.8px):** Border radius token.
- **lg (10px):** Border radius token.
- **xl (26px):** Border radius token.
- **2xl (50%):** Border radius token.
- **full (54px):** Border radius token.

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
- Avoid pairing --color-black on --color-dark-gray (1.1:1, Fail).
- Avoid pairing --color-dark-gray-2 on --color-dark-gray (2.94:1, Fail).
- Avoid pairing --color-dark-gray-2 on --color-blue (1.38:1, Fail).
