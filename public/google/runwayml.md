---
version: alpha
name: Runway
description: "Converted from UI Inspector extraction of https://runwayml.com/"
colors:
  primary: "#000000"
  secondary: "#999999"
  tertiary: "#2B22FA"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-black-2: "#0C0C0C"
  color-black-3: "rgba(9, 9, 11, 0.7)"
  color-dark-gray-5: "#262626"
  color-dark-gray-6: "#303030"
  color-white-2: "#F7F7F7"
  color-dark-gray: "#404040"
  color-dark-gray-2: "#1A1A1A"
  color-blue: "#6B7280"
  color-dark-gray-4: "#2A2A2A"
  color-blue-2: "#666E7A"
  color-light-gray: "#E5E7EB"
  color-dark-gray-3: "#27272A"
typography:
  display:
    fontFamily: Times
    fontSize: 48px
    fontWeight: 500
    lineHeight: 48px
    letterSpacing: -1px
  h1:
    fontFamily: Times
    fontSize: 40px
    fontWeight: 500
    lineHeight: 44px
    letterSpacing: -1px
  h2:
    fontFamily: Times
    fontSize: 36px
    fontWeight: 500
    lineHeight: 40px
    letterSpacing: -1px
  h3:
    fontFamily: Times
    fontSize: 24px
    fontWeight: 500
    lineHeight: 36px
    letterSpacing: -1px
  body-lg:
    fontFamily: Times
    fontSize: 20px
    fontWeight: 500
    lineHeight: 25px
    letterSpacing: -1px
  body-md:
    fontFamily: Times
    fontSize: 18px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: -1px
  body-sm:
    fontFamily: Times
    fontSize: 16px
    fontWeight: 500
    lineHeight: 20.8px
    letterSpacing: -1px
  caption:
    fontFamily: Times
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: -1px
  code:
    fontFamily: abcNormal
    fontSize: 13px
    fontWeight: 400
rounded:
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  2xl: 16px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 22.7031px
  xl: 32px
  2xl: 240px
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

This design system was auto-extracted from https://runwayml.com/ (16 colors · 37 type tokens · 35 spacing steps · 7 breakpoints · 6 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-17T07:55:43.516Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#999999):** Muted text, borders, and metadata.
- **tertiary (#2B22FA):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-black-2 (#0C0C0C):** Supporting token from the extracted palette.
- **color-black-3 (rgba(9, 9, 11, 0.7)):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#262626):** Supporting token from the extracted palette.
- **color-dark-gray-6 (#303030):** Supporting token from the extracted palette.
- **color-white-2 (#F7F7F7):** Supporting token from the extracted palette.
- **color-dark-gray (#404040):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#1A1A1A):** Supporting token from the extracted palette.
- **color-blue (#6B7280):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#2A2A2A):** Supporting token from the extracted palette.
- **color-blue-2 (#666E7A):** Supporting token from the extracted palette.
- **color-light-gray (#E5E7EB):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#27272A):** Supporting token from the extracted palette.

## Typography

Primary typeface: **abcNormal, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Times, 48px, weight 500.
- **h1:** font Times, 40px, weight 500.
- **h2:** font Times, 36px, weight 500.
- **h3:** font Times, 24px, weight 500.
- **body-lg:** font Times, 20px, weight 500.
- **body-md:** font Times, 18px, weight 500.
- **body-sm:** font Times, 16px, weight 500.
- **caption:** font Times, 14px, weight 500.
- **code:** font abcNormal, 13px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (22.7031px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (240px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (640px):** Responsive layout threshold.
- **sm (768px):** Responsive layout threshold.
- **md (1024px):** Responsive layout threshold.
- **lg (1200px):** Responsive layout threshold.
- **xl (1280px):** Responsive layout threshold.
- **2xl (1536px):** Responsive layout threshold.
- **3xl (1600px):** Responsive layout threshold.
- **breakpoint-xs (640px):** Responsive layout threshold.
- **breakpoint-sm (768px):** Responsive layout threshold.
- **breakpoint-md (1024px):** Responsive layout threshold.
- **breakpoint-lg (1200px):** Responsive layout threshold.
- **breakpoint-xl (1280px):** Responsive layout threshold.
- **breakpoint-2xl (1536px):** Responsive layout threshold.
- **breakpoint-3xl (1600px):** Responsive layout threshold.

## Elevation & Depth

Elevation is minimal in the extracted system — surfaces rely on contrast and borders rather than heavy shadows.

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (4px):** Border radius token.
- **md (6px):** Border radius token.
- **lg (8px):** Border radius token.
- **xl (12px):** Border radius token.
- **2xl (16px):** Border radius token.

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
- Avoid pairing --color-dark-gray on --color-black (2.03:1, Fail).
- Avoid pairing --color-dark-gray on --color-black-2 (1.89:1, Fail).
- Avoid pairing --color-dark-gray on --color-black-3 (1.92:1, Fail).
