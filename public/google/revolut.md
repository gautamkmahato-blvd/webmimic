---
version: alpha
name: "Banking & Beyond"
description: "Converted from UI Inspector extraction of https://www.revolut.com/"
colors:
  primary: "#191C1F"
  secondary: "#717173"
  tertiary: "#8D969E"
  neutral: "#F4F4F4"
  on-primary: "#F4F4F4"
  on-tertiary: "#FFFFFF"
  color-black: "#000000"
  color-white-3: "#F7F7F7"
  color-white-4: "rgba(244, 244, 244, 0.1)"
  color-blue-2: "#505A63"
  color-light-gray: "#C9C9CD"
  color-blue-3: "#4C8ACC"
  color-blue-4: "#3991D8"
typography:
  display:
    fontFamily: Inter
    fontSize: 84.1812px
    fontWeight: 500
    lineHeight: 84.1812px
    letterSpacing: -0.6px
  h1:
    fontFamily: Inter
    fontSize: 50.0906px
    fontWeight: 500
    lineHeight: 50.0906px
    letterSpacing: -0.6px
  h2:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: 500
    lineHeight: 48px
    letterSpacing: -0.6px
  h3:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: 500
    lineHeight: 38px
    letterSpacing: -0.6px
  body-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: -0.6px
  body-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: -0.6px
  body-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 500
    lineHeight: 22px
    letterSpacing: -0.6px
  caption:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 18px
    letterSpacing: -0.6px
  code:
    fontFamily: "Aeonik Pro"
    fontSize: 16px
    fontWeight: 400
rounded:
  sm: 12px
  md: 20px
  lg: "21.525px 21.525px 0px 0px"
  xl: 21.525px
  2xl: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 500px
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

This design system was auto-extracted from https://www.revolut.com/ (12 colors · 31 type tokens · 27 spacing steps · 8 breakpoints · 7 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-17T07:56:33.921Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#191C1F):** Core surface and headline color.
- **secondary (#717173):** Muted text, borders, and metadata.
- **tertiary (#8D969E):** Primary accent for links, buttons, and focus states.
- **neutral (#F4F4F4):** Primary readable text on dark surfaces.
- **on-primary (#F4F4F4):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-white-3 (#F7F7F7):** Supporting token from the extracted palette.
- **color-white-4 (rgba(244, 244, 244, 0.1)):** Supporting token from the extracted palette.
- **color-blue-2 (#505A63):** Supporting token from the extracted palette.
- **color-light-gray (#C9C9CD):** Supporting token from the extracted palette.
- **color-blue-3 (#4C8ACC):** Supporting token from the extracted palette.
- **color-blue-4 (#3991D8):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Aeonik Pro, Family, Inter**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Inter, 84.1812px, weight 500.
- **h1:** font Inter, 50.0906px, weight 500.
- **h2:** font Inter, 40px, weight 500.
- **h3:** font Inter, 32px, weight 500.
- **body-lg:** font Inter, 24px, weight 500.
- **body-md:** font Inter, 18px, weight 500.
- **body-sm:** font Inter, 16px, weight 500.
- **caption:** font Inter, 14px, weight 500.
- **code:** font Aeonik Pro, 16px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (500px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (320px):** Responsive layout threshold.
- **sm (400px):** Responsive layout threshold.
- **md (719px):** Responsive layout threshold.
- **lg (720px):** Responsive layout threshold.
- **xl (1023px):** Responsive layout threshold.
- **2xl (1024px):** Responsive layout threshold.
- **3xl (1280px):** Responsive layout threshold.
- **bp-8 (1920px):** Responsive layout threshold.
- **breakpoint-xs (320px):** Responsive layout threshold.
- **breakpoint-sm (400px):** Responsive layout threshold.
- **breakpoint-md (719px):** Responsive layout threshold.
- **breakpoint-lg (720px):** Responsive layout threshold.
- **breakpoint-xl (1023px):** Responsive layout threshold.
- **breakpoint-2xl (1024px):** Responsive layout threshold.
- **breakpoint-3xl (1280px):** Responsive layout threshold.
- **breakpoint-bp-8 (1920px):** Responsive layout threshold.

## Elevation & Depth

Elevation is minimal in the extracted system — surfaces rely on contrast and borders rather than heavy shadows.

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (12px):** Border radius token.
- **md (20px):** Border radius token.
- **lg (21.525px 21.525px 0px 0px):** Border radius token.
- **xl (21.525px):** Border radius token.
- **2xl (9999px):** Border radius token.

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
- Avoid pairing --color-blue-2 on --color-dark-gray (2.43:1, Fail).
- Avoid pairing --color-blue-2 on --color-blue (2.34:1, Fail).
- Avoid pairing --color-blue-2 on --color-black (2.98:1, Fail).
