---
version: alpha
name: "Bloomberg Asia"
description: "Converted from UI Inspector extraction of https://www.bloomberg.com/asia"
colors:
  primary: "#000000"
  secondary: "#767676"
  tertiary: "#04ACCC"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-light-gray-3: "#CCCCCC"
  color-dark-gray: "#1C1C1C"
  color-dark-gray-2: "#3C3C3C"
  color-light-gray-4: "#EFEFEF"
  color-dark-gray-3: "#545454"
  color-mid-gray-2: "#999999"
  color-dark-blue: "#2B333F"
  color-blue: "#0064FA"
  color-dark-gray-4: "#141414"
  color-white-2: "#F8F8F8"
  color-blue-2: "rgba(115, 133, 159, 0.5)"
  color-white-3: "#F2F7FF"
  color-dark-gray-5: "rgba(28, 28, 28, 0.8)"
  color-light-gray-2: "#B3B3B3"
  color-light-gray-5: "#F3F4EF"
  color-red: "#E51503"
  color-yellow: "#FFCD1E"
  color-orange: "#FFA028"
  color-red-2: "#F34F4E"
  color-light-gray: "#E5E7EB"
typography:
  display:
    fontFamily: BWHaasGroteskWeb
    fontSize: 28px
    fontWeight: 500
    lineHeight: 30px
    letterSpacing: 0.1408px
  h1:
    fontFamily: BWHaasGroteskWeb
    fontSize: 24px
    fontWeight: 500
    lineHeight: 29.4px
    letterSpacing: 0.1408px
  h2:
    fontFamily: BWHaasGroteskWeb
    fontSize: 20px
    fontWeight: 500
    lineHeight: 25.2px
    letterSpacing: 0.1408px
  h3:
    fontFamily: BWHaasGroteskWeb
    fontSize: 18px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: 0.1408px
  body-lg:
    fontFamily: BWHaasGroteskWeb
    fontSize: 16px
    fontWeight: 500
    lineHeight: 22.5px
    letterSpacing: 0.1408px
  body-md:
    fontFamily: BWHaasGroteskWeb
    fontSize: 15px
    fontWeight: 500
    lineHeight: 21.6px
    letterSpacing: 0.1408px
  body-sm:
    fontFamily: BWHaasGroteskWeb
    fontSize: 14px
    fontWeight: 500
    lineHeight: 21px
    letterSpacing: 0.1408px
  caption:
    fontFamily: BWHaasGroteskWeb
    fontSize: 12px
    fontWeight: 500
    lineHeight: 19.6px
    letterSpacing: 0.1408px
  code:
    fontFamily: AvenirNextPForBBG
    fontSize: 14px
    fontWeight: 400
rounded:
  sm: "0px 8px 8px 0px"
  md: 2px
  lg: 4px
  xl: 4.2px
  2xl: 5px
  full: 6px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 370.5px
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

This design system was auto-extracted from https://www.bloomberg.com/asia (24 colors · 42 type tokens · 33 spacing steps · 20 breakpoints · 11 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-18T08:26:07.802Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#767676):** Muted text, borders, and metadata.
- **tertiary (#04ACCC):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-light-gray-3 (#CCCCCC):** Supporting token from the extracted palette.
- **color-dark-gray (#1C1C1C):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#3C3C3C):** Supporting token from the extracted palette.
- **color-light-gray-4 (#EFEFEF):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#545454):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#999999):** Supporting token from the extracted palette.
- **color-dark-blue (#2B333F):** Supporting token from the extracted palette.
- **color-blue (#0064FA):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#141414):** Supporting token from the extracted palette.
- **color-white-2 (#F8F8F8):** Supporting token from the extracted palette.
- **color-blue-2 (rgba(115, 133, 159, 0.5)):** Supporting token from the extracted palette.
- **color-white-3 (#F2F7FF):** Supporting token from the extracted palette.
- **color-dark-gray-5 (rgba(28, 28, 28, 0.8)):** Supporting token from the extracted palette.
- **color-light-gray-2 (#B3B3B3):** Supporting token from the extracted palette.
- **color-light-gray-5 (#F3F4EF):** Supporting token from the extracted palette.
- **color-red (#E51503):** Supporting token from the extracted palette.
- **color-yellow (#FFCD1E):** Supporting token from the extracted palette.
- **color-orange (#FFA028):** Supporting token from the extracted palette.
- **color-red-2 (#F34F4E):** Supporting token from the extracted palette.
- **color-light-gray (#E5E7EB):** Supporting token from the extracted palette.

## Typography

Primary typeface: **AvenirNextPForBBG, PublicoText, VideoJS, Arial, BWHaasHead, PublicoHead, Family, BWHaasGroteskWeb**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font BWHaasGroteskWeb, 28px, weight 500.
- **h1:** font BWHaasGroteskWeb, 24px, weight 500.
- **h2:** font BWHaasGroteskWeb, 20px, weight 500.
- **h3:** font BWHaasGroteskWeb, 18px, weight 500.
- **body-lg:** font BWHaasGroteskWeb, 16px, weight 500.
- **body-md:** font BWHaasGroteskWeb, 15px, weight 500.
- **body-sm:** font BWHaasGroteskWeb, 14px, weight 500.
- **caption:** font BWHaasGroteskWeb, 12px, weight 500.
- **code:** font AvenirNextPForBBG, 14px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (370.5px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (470px):** Responsive layout threshold.
- **sm (480px):** Responsive layout threshold.
- **md (600px):** Responsive layout threshold.
- **lg (620px):** Responsive layout threshold.
- **xl (675px):** Responsive layout threshold.
- **2xl (759px):** Responsive layout threshold.
- **3xl (760px):** Responsive layout threshold.
- **bp-8 (767px):** Responsive layout threshold.
- **bp-9 (768px):** Responsive layout threshold.
- **bp-10 (900px):** Responsive layout threshold.
- **bp-11 (911px):** Responsive layout threshold.
- **bp-12 (1019px):** Responsive layout threshold.
- **bp-13 (1020px):** Responsive layout threshold.
- **bp-14 (1122px):** Responsive layout threshold.
- **bp-15 (1123px):** Responsive layout threshold.
- **bp-16 (1279px):** Responsive layout threshold.
- **bp-17 (1280px):** Responsive layout threshold.
- **bp-18 (1300px):** Responsive layout threshold.
- **bp-19 (1334px):** Responsive layout threshold.
- **bp-20 (1335px):** Responsive layout threshold.
- **breakpoint-xs (470px):** Responsive layout threshold.
- **breakpoint-sm (480px):** Responsive layout threshold.
- **breakpoint-md (600px):** Responsive layout threshold.
- **breakpoint-lg (620px):** Responsive layout threshold.
- **breakpoint-xl (675px):** Responsive layout threshold.
- **breakpoint-2xl (759px):** Responsive layout threshold.
- **breakpoint-3xl (760px):** Responsive layout threshold.
- **breakpoint-bp-8 (767px):** Responsive layout threshold.
- **breakpoint-bp-9 (768px):** Responsive layout threshold.
- **breakpoint-bp-10 (900px):** Responsive layout threshold.
- **breakpoint-bp-11 (911px):** Responsive layout threshold.
- **breakpoint-bp-12 (1019px):** Responsive layout threshold.
- **breakpoint-bp-13 (1020px):** Responsive layout threshold.
- **breakpoint-bp-14 (1122px):** Responsive layout threshold.
- **breakpoint-bp-15 (1123px):** Responsive layout threshold.
- **breakpoint-bp-16 (1279px):** Responsive layout threshold.
- **breakpoint-bp-17 (1280px):** Responsive layout threshold.
- **breakpoint-bp-18 (1300px):** Responsive layout threshold.
- **breakpoint-bp-19 (1334px):** Responsive layout threshold.
- **breakpoint-bp-20 (1335px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`
- **md:** `rgb(0, 0, 0) 0px 0px 8px 0px`
- **lg:** `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`
- **shadow-md:** `rgb(0, 0, 0) 0px 0px 8px 0px`
- **shadow-lg:** `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 8px 8px 0px):** Border radius token.
- **md (2px):** Border radius token.
- **lg (4px):** Border radius token.
- **xl (4.2px):** Border radius token.
- **2xl (5px):** Border radius token.
- **full (6px):** Border radius token.

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
- Avoid pairing --color-light-gray-2 on --color-white (2.1:1, Fail).
- Avoid pairing --color-light-gray-2 on --color-light-gray-3 (1.31:1, Fail).
- Avoid pairing --color-light-gray-5 on --color-white (1.11:1, Fail).
