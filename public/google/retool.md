---
version: alpha
name: Retool
description: "Converted from UI Inspector extraction of https://retool.com/"
colors:
  primary: "#E9EBDF"
  secondary: "#8B867F"
  tertiary: "rgba(233, 235, 223, 0.12)"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-black: "#000000"
  color-dark-gray: "#282522"
  color-dark-gray-2: "#433E38"
  color-dark-gray-3: "#151515"
  color-dark-gray-4: "#242424"
  color-white-2: "rgba(247, 248, 244, 0.6)"
  color-light-yellow: "rgba(233, 235, 223, 0.063)"
  color-dark-cyan: "#0E352C"
  color-dark-gray-6: "#0E0E0E"
  color-light-gray-2: "#CBCCC4"
  color-light-gray-3: "rgba(233, 235, 223, 0.4)"
  color-light-gray-6: "#B6B8AF"
  color-light-gray-4: "rgba(233, 235, 223, 0.2)"
  color-dark-gray-5: "rgba(21, 21, 21, 0.12)"
  color-light-gray-5: "#DED9D3"
  color-light-blue: "#B0CCEA"
  color-red: "#E8765E"
  color-blue: "#518DD2"
  color-light-blue-2: "#D8E6F3"
typography:
  display:
    fontFamily: ui-sans-serif
    fontSize: 54.0962px
    fontWeight: 400
    lineHeight: 56.801px
    letterSpacing: -0.420962px
  h1:
    fontFamily: ui-sans-serif
    fontSize: 42.0962px
    fontWeight: 400
    lineHeight: 44.201px
    letterSpacing: -0.420962px
  h2:
    fontFamily: ui-sans-serif
    fontSize: 30.0962px
    fontWeight: 400
    lineHeight: 31.601px
    letterSpacing: -0.420962px
  h3:
    fontFamily: ui-sans-serif
    fontSize: 26.0962px
    fontWeight: 400
    lineHeight: 27px
    letterSpacing: -0.420962px
  body-lg:
    fontFamily: ui-sans-serif
    fontSize: 21.0481px
    fontWeight: 400
    lineHeight: 25.2577px
    letterSpacing: -0.420962px
  body-md:
    fontFamily: ui-sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: -0.420962px
  body-sm:
    fontFamily: ui-sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 21px
    letterSpacing: -0.420962px
  caption:
    fontFamily: ui-sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 16.8px
    letterSpacing: -0.420962px
  code:
    fontFamily: pxGroteskFont
    fontSize: 12.524px
    fontWeight: 400
rounded:
  sm: 4px
  md: 6px
  lg: 8px
  xl: 200px
  2xl: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 430.5px
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

This design system was auto-extracted from https://retool.com/ (23 colors · 43 type tokens · 29 spacing steps · 16 breakpoints · 5 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-18T18:45:00.336Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#E9EBDF):** Core surface and headline color.
- **secondary (#8B867F):** Muted text, borders, and metadata.
- **tertiary (rgba(233, 235, 223, 0.12)):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-dark-gray (#282522):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#433E38):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#151515):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#242424):** Supporting token from the extracted palette.
- **color-white-2 (rgba(247, 248, 244, 0.6)):** Supporting token from the extracted palette.
- **color-light-yellow (rgba(233, 235, 223, 0.063)):** Supporting token from the extracted palette.
- **color-dark-cyan (#0E352C):** Supporting token from the extracted palette.
- **color-dark-gray-6 (#0E0E0E):** Supporting token from the extracted palette.
- **color-light-gray-2 (#CBCCC4):** Supporting token from the extracted palette.
- **color-light-gray-3 (rgba(233, 235, 223, 0.4)):** Supporting token from the extracted palette.
- **color-light-gray-6 (#B6B8AF):** Supporting token from the extracted palette.
- **color-light-gray-4 (rgba(233, 235, 223, 0.2)):** Supporting token from the extracted palette.
- **color-dark-gray-5 (rgba(21, 21, 21, 0.12)):** Supporting token from the extracted palette.
- **color-light-gray-5 (#DED9D3):** Supporting token from the extracted palette.
- **color-light-blue (#B0CCEA):** Supporting token from the extracted palette.
- **color-red (#E8765E):** Supporting token from the extracted palette.
- **color-blue (#518DD2):** Supporting token from the extracted palette.
- **color-light-blue-2 (#D8E6F3):** Supporting token from the extracted palette.

## Typography

Primary typeface: **pxGroteskFont, ui-monospace, saansFont, Family, ui-sans-serif**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font ui-sans-serif, 54.0962px, weight 400.
- **h1:** font ui-sans-serif, 42.0962px, weight 400.
- **h2:** font ui-sans-serif, 30.0962px, weight 400.
- **h3:** font ui-sans-serif, 26.0962px, weight 400.
- **body-lg:** font ui-sans-serif, 21.0481px, weight 400.
- **body-md:** font ui-sans-serif, 18px, weight 400.
- **body-sm:** font ui-sans-serif, 16px, weight 400.
- **caption:** font ui-sans-serif, 14px, weight 400.
- **code:** font pxGroteskFont, 12.524px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (430.5px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (400px):** Responsive layout threshold.
- **sm (543px):** Responsive layout threshold.
- **md (544px):** Responsive layout threshold.
- **lg (640px):** Responsive layout threshold.
- **xl (767px):** Responsive layout threshold.
- **2xl (768px):** Responsive layout threshold.
- **3xl (900px):** Responsive layout threshold.
- **bp-8 (992px):** Responsive layout threshold.
- **bp-9 (1011px):** Responsive layout threshold.
- **bp-10 (1024px):** Responsive layout threshold.
- **bp-11 (1120px):** Responsive layout threshold.
- **bp-12 (1200px):** Responsive layout threshold.
- **bp-13 (1279px):** Responsive layout threshold.
- **bp-14 (1280px):** Responsive layout threshold.
- **bp-15 (1440px):** Responsive layout threshold.
- **bp-16 (1920px):** Responsive layout threshold.
- **breakpoint-xs (400px):** Responsive layout threshold.
- **breakpoint-sm (543px):** Responsive layout threshold.
- **breakpoint-md (544px):** Responsive layout threshold.
- **breakpoint-lg (640px):** Responsive layout threshold.
- **breakpoint-xl (767px):** Responsive layout threshold.
- **breakpoint-2xl (768px):** Responsive layout threshold.
- **breakpoint-3xl (900px):** Responsive layout threshold.
- **breakpoint-bp-8 (992px):** Responsive layout threshold.
- **breakpoint-bp-9 (1011px):** Responsive layout threshold.
- **breakpoint-bp-10 (1024px):** Responsive layout threshold.
- **breakpoint-bp-11 (1120px):** Responsive layout threshold.
- **breakpoint-bp-12 (1200px):** Responsive layout threshold.
- **breakpoint-bp-13 (1279px):** Responsive layout threshold.
- **breakpoint-bp-14 (1280px):** Responsive layout threshold.
- **breakpoint-bp-15 (1440px):** Responsive layout threshold.
- **breakpoint-bp-16 (1920px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(233, 235, 223, 0.2) 0px 0px 0px 1px inset`
- **md:** `rgba(0, 0, 0, 0.12) 0px 1px 2px 0px, rgb(0, 0, 0) 0px 0px 0px 0.5px`
- **shadow-sm:** `rgba(233, 235, 223, 0.2) 0px 0px 0px 1px inset`
- **shadow-md:** `rgba(0, 0, 0, 0.12) 0px 1px 2px 0px, rgb(0, 0, 0) 0px 0px 0px 0.5px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (4px):** Border radius token.
- **md (6px):** Border radius token.
- **lg (8px):** Border radius token.
- **xl (200px):** Border radius token.
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
- Avoid pairing --color-white on --color-light-gray (1.21:1, Fail).
- Avoid pairing --color-light-gray-2 on --color-light-gray (1.34:1, Fail).
- Avoid pairing --color-light-gray-3 on --color-light-gray (1:1, Fail).
