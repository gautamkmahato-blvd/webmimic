---
version: alpha
name: "xAI: Understand the Universe"
description: "Converted from UI Inspector extraction of https://x.ai/"
colors:
  primary: "#FFFFFF"
  secondary: "#7D8187"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  color-black-2: "#0A0A0A"
  color-black-3: "#0C0C0B"
  color-black-4: "rgba(10, 10, 10, 0.25)"
  color-dark-gray: "#1F2228"
  color-blue: "#6B7280"
  color-dark-gray-2: "rgba(31, 34, 40, 0.5)"
  color-black: "#000000"
  color-orange: "rgba(255, 99, 8, 0.1)"
  color-light-blue: "rgba(151, 196, 255, 0.1)"
  color-light-blue-2: "rgba(189, 201, 230, 0.1)"
typography:
  display:
    fontFamily: Times
    fontSize: 80px
    fontWeight: 400
    lineHeight: 80px
    letterSpacing: -1.2px
  h1:
    fontFamily: Times
    fontSize: 48px
    fontWeight: 400
    lineHeight: 48px
    letterSpacing: -1.2px
  h2:
    fontFamily: Times
    fontSize: 20px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: -1.2px
  h3:
    fontFamily: Times
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: -1.2px
  body-lg:
    fontFamily: Times
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: -1.2px
  body-md:
    fontFamily: Times
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: -1.2px
  code:
    fontFamily: universalSans
    fontSize: 16px
    fontWeight: 400
rounded:
  sm: 24px
  md: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 256px
components:
  surface:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  text-muted:
    textColor: "{colors.secondary}"
    typography: body-sm
---

## Overview

This design system was auto-extracted from https://x.ai/ (12 colors · 20 type tokens · 17 spacing steps · 7 breakpoints · 3 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-18T08:48:41.704Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#FFFFFF):** Core surface and headline color.
- **secondary (#7D8187):** Muted text, borders, and metadata.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **color-black-2 (#0A0A0A):** Supporting token from the extracted palette.
- **color-black-3 (#0C0C0B):** Supporting token from the extracted palette.
- **color-black-4 (rgba(10, 10, 10, 0.25)):** Supporting token from the extracted palette.
- **color-dark-gray (#1F2228):** Supporting token from the extracted palette.
- **color-blue (#6B7280):** Supporting token from the extracted palette.
- **color-dark-gray-2 (rgba(31, 34, 40, 0.5)):** Supporting token from the extracted palette.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-orange (rgba(255, 99, 8, 0.1)):** Supporting token from the extracted palette.
- **color-light-blue (rgba(151, 196, 255, 0.1)):** Supporting token from the extracted palette.
- **color-light-blue-2 (rgba(189, 201, 230, 0.1)):** Supporting token from the extracted palette.

## Typography

Primary typeface: **universalSans, GeistMono, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Times, 80px, weight 400.
- **h1:** font Times, 48px, weight 400.
- **h2:** font Times, 20px, weight 400.
- **h3:** font Times, 16px, weight 400.
- **body-lg:** font Times, 14px, weight 400.
- **body-md:** font Times, 12px, weight 400.
- **code:** font universalSans, 16px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (256px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (640px):** Responsive layout threshold.
- **sm (768px):** Responsive layout threshold.
- **md (1000px):** Responsive layout threshold.
- **lg (1024px):** Responsive layout threshold.
- **xl (1280px):** Responsive layout threshold.
- **2xl (1536px):** Responsive layout threshold.
- **3xl (2000px):** Responsive layout threshold.
- **breakpoint-xs (640px):** Responsive layout threshold.
- **breakpoint-sm (768px):** Responsive layout threshold.
- **breakpoint-md (1000px):** Responsive layout threshold.
- **breakpoint-lg (1024px):** Responsive layout threshold.
- **breakpoint-xl (1280px):** Responsive layout threshold.
- **breakpoint-2xl (1536px):** Responsive layout threshold.
- **breakpoint-3xl (2000px):** Responsive layout threshold.

## Elevation & Depth

Elevation is minimal in the extracted system — surfaces rely on contrast and borders rather than heavy shadows.

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (24px):** Border radius token.
- **md (9999px):** Border radius token.

## Components

Component tokens map semantic colors and shapes to reusable UI patterns.

- **surface:** backgroundColor {colors.primary}, textColor {colors.on-primary}.
- **text-muted:** textColor {colors.secondary}, typography body-sm.

## Do's and Don'ts

- **Do** use the accent color sparingly for primary actions and active states.
- **Do** maintain high contrast between text and background tokens.
- **Don't** introduce new colors outside the extracted palette without updating the YAML tokens.
- **Don't** mix arbitrary spacing values — use the spacing scale.
