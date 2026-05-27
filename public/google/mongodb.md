---
version: alpha
name: "MongoDB: The World’s Leading Modern Data Platform"
description: "Converted from UI Inspector extraction of https://www.mongodb.com/"
colors:
  primary: "#000000"
  secondary: "#808080"
  tertiary: "#00E97A"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-blue: "#006CFA"
  color-dark-cyan: "#001E2B"
  color-green: "#00ED64"
  color-dark-blue: "#21313C"
  color-dark-cyan-2: "#00684A"
  color-dark-cyan-3: "#3D4F58"
  color-light-gray-2: "#E7EEEC"
  color-white-2: "#F5F7FA"
  color-dark-blue-2: "#061621"
  color-green-2: "#B1FF05"
  color-light-gray: "#B8C4C2"
  color-blue-2: "#0000EE"
  color-blue-3: "#009FFD"
  color-dark-cyan-4: "#014E3D"
  color-light-green: "#E9FF99"
  color-mid-gray-2: "#767676"
  color-cyan-2: "#00D4EB"
  color-blue-4: "#0066FF"
  color-blue-5: "#5D6C74"
  color-dark-cyan-5: "#16774E"
  color-green-3: "#12C86A"
  color-green-4: "#0AE85D"
  color-green-5: "#17B659"
  color-cyan-3: "#53E9F6"
typography:
  display:
    fontFamily: Times
    fontSize: 64px
    fontWeight: 500
    lineHeight: 72px
    letterSpacing: 0.5px
  h1:
    fontFamily: Times
    fontSize: 56px
    fontWeight: 500
    lineHeight: 64px
    letterSpacing: 0.5px
  h2:
    fontFamily: Times
    fontSize: 40px
    fontWeight: 500
    lineHeight: 56px
    letterSpacing: 0.5px
  h3:
    fontFamily: Times
    fontSize: 36px
    fontWeight: 500
    lineHeight: 48px
    letterSpacing: 0.5px
  body-lg:
    fontFamily: Times
    fontSize: 32px
    fontWeight: 500
    lineHeight: 40px
    letterSpacing: 0.5px
  body-md:
    fontFamily: Times
    fontSize: 28px
    fontWeight: 500
    lineHeight: 37px
    letterSpacing: 0.5px
  body-sm:
    fontFamily: Times
    fontSize: 24px
    fontWeight: 500
    lineHeight: 36px
    letterSpacing: 0.5px
  caption:
    fontFamily: Times
    fontSize: 20px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: 0.5px
  code:
    fontFamily: "Source Code Pro"
    fontSize: 12px
    fontWeight: 400
rounded:
  sm: "0px 0px 96px 96px"
  md: "0px 8px 8px 0px"
  lg: "0px 0px 100px 100px"
  xl: "0px 0px 16px 16px"
  2xl: "0px 72px 0px 0px"
  full: "0px 0px 72px"
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 398.5px
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

This design system was auto-extracted from https://www.mongodb.com/ (28 colors · 48 type tokens · 30 spacing steps · 34 breakpoints · 10 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-15T18:29:14.811Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#808080):** Muted text, borders, and metadata.
- **tertiary (#00E97A):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-blue (#006CFA):** Supporting token from the extracted palette.
- **color-dark-cyan (#001E2B):** Supporting token from the extracted palette.
- **color-green (#00ED64):** Supporting token from the extracted palette.
- **color-dark-blue (#21313C):** Supporting token from the extracted palette.
- **color-dark-cyan-2 (#00684A):** Supporting token from the extracted palette.
- **color-dark-cyan-3 (#3D4F58):** Supporting token from the extracted palette.
- **color-light-gray-2 (#E7EEEC):** Supporting token from the extracted palette.
- **color-white-2 (#F5F7FA):** Supporting token from the extracted palette.
- **color-dark-blue-2 (#061621):** Supporting token from the extracted palette.
- **color-green-2 (#B1FF05):** Supporting token from the extracted palette.
- **color-light-gray (#B8C4C2):** Supporting token from the extracted palette.
- **color-blue-2 (#0000EE):** Supporting token from the extracted palette.
- **color-blue-3 (#009FFD):** Supporting token from the extracted palette.
- **color-dark-cyan-4 (#014E3D):** Supporting token from the extracted palette.
- **color-light-green (#E9FF99):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#767676):** Supporting token from the extracted palette.
- **color-cyan-2 (#00D4EB):** Supporting token from the extracted palette.
- **color-blue-4 (#0066FF):** Supporting token from the extracted palette.
- **color-blue-5 (#5D6C74):** Supporting token from the extracted palette.
- **color-dark-cyan-5 (#16774E):** Supporting token from the extracted palette.
- **color-green-3 (#12C86A):** Supporting token from the extracted palette.
- **color-green-4 (#0AE85D):** Supporting token from the extracted palette.
- **color-green-5 (#17B659):** Supporting token from the extracted palette.
- **color-cyan-3 (#53E9F6):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Source Code Pro, Euclid Circular A, Arial, Akzidenz-Grotesk Std, MongoDB Value Serif, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Times, 64px, weight 500.
- **h1:** font Times, 56px, weight 500.
- **h2:** font Times, 40px, weight 500.
- **h3:** font Times, 36px, weight 500.
- **body-lg:** font Times, 32px, weight 500.
- **body-md:** font Times, 28px, weight 500.
- **body-sm:** font Times, 24px, weight 500.
- **caption:** font Times, 20px, weight 500.
- **code:** font Source Code Pro, 12px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (398.5px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (1px):** Responsive layout threshold.
- **sm (460px):** Responsive layout threshold.
- **md (500px):** Responsive layout threshold.
- **lg (767px):** Responsive layout threshold.
- **xl (768px):** Responsive layout threshold.
- **2xl (820px):** Responsive layout threshold.
- **3xl (844px):** Responsive layout threshold.
- **bp-8 (896px):** Responsive layout threshold.
- **bp-9 (1000px):** Responsive layout threshold.
- **bp-10 (1023px):** Responsive layout threshold.
- **bp-11 (1024px):** Responsive layout threshold.
- **bp-12 (1025px):** Responsive layout threshold.
- **bp-13 (1065px):** Responsive layout threshold.
- **bp-14 (1079px):** Responsive layout threshold.
- **bp-15 (1080px):** Responsive layout threshold.
- **bp-16 (1180px):** Responsive layout threshold.
- **bp-17 (1200px):** Responsive layout threshold.
- **bp-18 (1280px):** Responsive layout threshold.
- **bp-19 (1281px):** Responsive layout threshold.
- **bp-20 (1300px):** Responsive layout threshold.
- **bp-21 (1350px):** Responsive layout threshold.
- **bp-22 (1366px):** Responsive layout threshold.
- **bp-23 (1400px):** Responsive layout threshold.
- **bp-24 (1410px):** Responsive layout threshold.
- **bp-25 (1416px):** Responsive layout threshold.
- **bp-26 (1440px):** Responsive layout threshold.
- **bp-27 (1450px):** Responsive layout threshold.
- **bp-28 (1500px):** Responsive layout threshold.
- **bp-29 (1511px):** Responsive layout threshold.
- **bp-30 (1600px):** Responsive layout threshold.
- **bp-31 (1680px):** Responsive layout threshold.
- **bp-32 (1800px):** Responsive layout threshold.
- **bp-33 (2300px):** Responsive layout threshold.
- **bp-34 (2500px):** Responsive layout threshold.
- **breakpoint-xs (1px):** Responsive layout threshold.
- **breakpoint-sm (460px):** Responsive layout threshold.
- **breakpoint-md (500px):** Responsive layout threshold.
- **breakpoint-lg (767px):** Responsive layout threshold.
- **breakpoint-xl (768px):** Responsive layout threshold.
- **breakpoint-2xl (820px):** Responsive layout threshold.
- **breakpoint-3xl (844px):** Responsive layout threshold.
- **breakpoint-bp-8 (896px):** Responsive layout threshold.
- **breakpoint-bp-9 (1000px):** Responsive layout threshold.
- **breakpoint-bp-10 (1023px):** Responsive layout threshold.
- **breakpoint-bp-11 (1024px):** Responsive layout threshold.
- **breakpoint-bp-12 (1025px):** Responsive layout threshold.
- **breakpoint-bp-13 (1065px):** Responsive layout threshold.
- **breakpoint-bp-14 (1079px):** Responsive layout threshold.
- **breakpoint-bp-15 (1080px):** Responsive layout threshold.
- **breakpoint-bp-16 (1180px):** Responsive layout threshold.
- **breakpoint-bp-17 (1200px):** Responsive layout threshold.
- **breakpoint-bp-18 (1280px):** Responsive layout threshold.
- **breakpoint-bp-19 (1281px):** Responsive layout threshold.
- **breakpoint-bp-20 (1300px):** Responsive layout threshold.
- **breakpoint-bp-21 (1350px):** Responsive layout threshold.
- **breakpoint-bp-22 (1366px):** Responsive layout threshold.
- **breakpoint-bp-23 (1400px):** Responsive layout threshold.
- **breakpoint-bp-24 (1410px):** Responsive layout threshold.
- **breakpoint-bp-25 (1416px):** Responsive layout threshold.
- **breakpoint-bp-26 (1440px):** Responsive layout threshold.
- **breakpoint-bp-27 (1450px):** Responsive layout threshold.
- **breakpoint-bp-28 (1500px):** Responsive layout threshold.
- **breakpoint-bp-29 (1511px):** Responsive layout threshold.
- **breakpoint-bp-30 (1600px):** Responsive layout threshold.
- **breakpoint-bp-31 (1680px):** Responsive layout threshold.
- **breakpoint-bp-32 (1800px):** Responsive layout threshold.
- **breakpoint-bp-33 (2300px):** Responsive layout threshold.
- **breakpoint-bp-34 (2500px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.15) 0px 3px 9px 0px`
- **md:** `rgba(0, 0, 0, 0.15) 0px 3px 20px 0px`
- **lg:** `rgba(0, 0, 0, 0.15) 0px 3px 9px 0px`
- **xl:** `rgba(0, 0, 0, 0.13) 0px 7px 12px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.15) 0px 3px 9px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0.15) 0px 3px 20px 0px`
- **shadow-lg:** `rgba(0, 0, 0, 0.15) 0px 3px 9px 0px`
- **shadow-xl:** `rgba(0, 0, 0, 0.13) 0px 7px 12px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 0px 96px 96px):** Border radius token.
- **md (0px 8px 8px 0px):** Border radius token.
- **lg (0px 0px 100px 100px):** Border radius token.
- **xl (0px 0px 16px 16px):** Border radius token.
- **2xl (0px 72px 0px 0px):** Border radius token.
- **full (0px 0px 72px):** Border radius token.

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
- Avoid pairing --color-light-gray on --color-white (1.79:1, Fail).
- Avoid pairing --color-light-gray on --color-blue (2.59:1, Fail).
- Avoid pairing --color-light-gray on --color-green (1.14:1, Fail).
