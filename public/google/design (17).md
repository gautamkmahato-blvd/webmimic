---
version: alpha
name: Workable
description: "Converted from UI Inspector extraction of https://www.workable.com/"
colors:
  primary: "#0F161E"
  secondary: "#333942"
  tertiary: "#00F5DC"
  neutral: "#0000EE"
  on-primary: "#0000EE"
  on-tertiary: "#FFFFFF"
  color-black: "#000000"
  color-dark-cyan: "#004038"
  color-dark-cyan-3: "#012620"
  color-white-2: "#F6FEFB"
  color-white-3: "#FFF5EE"
  color-light-orange: "#FDE8CE"
  color-white-4: "#FFFBF2"
  color-yellow: "#FFDB24"
  color-light-blue: "#9C99FF"
  color-cyan-3: "#2ED5FF"
  color-light-orange-2: "#FFDCBF"
  color-dark-purple: "#220A3B"
  color-light-orange-3: "#FEF1E1"
  color-light-cyan: "#BEE9F4"
  color-white-5: "#F6F8FC"
  color-cyan: "#7EDCAF"
  color-dark-cyan-2: "#00544C"
  color-dark-blue-3: "#33475B"
  color-green: "#D5FF4D"
  color-light-purple: "#B773FF"
typography:
  display:
    fontFamily: Times
    fontSize: 72px
    fontWeight: 400
    lineHeight: 88px
  h1:
    fontFamily: Times
    fontSize: 56px
    fontWeight: 400
    lineHeight: 64px
  h2:
    fontFamily: Times
    fontSize: 32px
    fontWeight: 400
    lineHeight: 36px
  h3:
    fontFamily: Times
    fontSize: 24px
    fontWeight: 400
    lineHeight: 28px
  body-lg:
    fontFamily: Times
    fontSize: 20px
    fontWeight: 400
    lineHeight: 24px
  body-md:
    fontFamily: Times
    fontSize: 18px
    fontWeight: 400
    lineHeight: 22px
  body-sm:
    fontFamily: Times
    fontSize: 16px
    fontWeight: 400
    lineHeight: 21px
  caption:
    fontFamily: Times
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  code:
    fontFamily: proxima-nova
    fontSize: 16px
    fontWeight: 400
rounded:
  sm: 8px
  md: 16px
  lg: 25px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 183.5px
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

This design system was auto-extracted from https://www.workable.com/ (25 colors · 24 type tokens · 20 spacing steps · 14 breakpoints · 9 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-05-06T12:48:02.187Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#0F161E):** Core surface and headline color.
- **secondary (#333942):** Muted text, borders, and metadata.
- **tertiary (#00F5DC):** Primary accent for links, buttons, and focus states.
- **neutral (#0000EE):** Primary readable text on dark surfaces.
- **on-primary (#0000EE):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-dark-cyan (#004038):** Supporting token from the extracted palette.
- **color-dark-cyan-3 (#012620):** Supporting token from the extracted palette.
- **color-white-2 (#F6FEFB):** Supporting token from the extracted palette.
- **color-white-3 (#FFF5EE):** Supporting token from the extracted palette.
- **color-light-orange (#FDE8CE):** Supporting token from the extracted palette.
- **color-white-4 (#FFFBF2):** Supporting token from the extracted palette.
- **color-yellow (#FFDB24):** Supporting token from the extracted palette.
- **color-light-blue (#9C99FF):** Supporting token from the extracted palette.
- **color-cyan-3 (#2ED5FF):** Supporting token from the extracted palette.
- **color-light-orange-2 (#FFDCBF):** Supporting token from the extracted palette.
- **color-dark-purple (#220A3B):** Supporting token from the extracted palette.
- **color-light-orange-3 (#FEF1E1):** Supporting token from the extracted palette.
- **color-light-cyan (#BEE9F4):** Supporting token from the extracted palette.
- **color-white-5 (#F6F8FC):** Supporting token from the extracted palette.
- **color-cyan (#7EDCAF):** Supporting token from the extracted palette.
- **color-dark-cyan-2 (#00544C):** Supporting token from the extracted palette.
- **color-dark-blue-3 (#33475B):** Supporting token from the extracted palette.
- **color-green (#D5FF4D):** Supporting token from the extracted palette.
- **color-light-purple (#B773FF):** Supporting token from the extracted palette.

## Typography

Primary typeface: **proxima-nova, source-serif-pro, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Times, 72px, weight 400.
- **h1:** font Times, 56px, weight 400.
- **h2:** font Times, 32px, weight 400.
- **h3:** font Times, 24px, weight 400.
- **body-lg:** font Times, 20px, weight 400.
- **body-md:** font Times, 18px, weight 400.
- **body-sm:** font Times, 16px, weight 400.
- **caption:** font Times, 14px, weight 400.
- **code:** font proxima-nova, 16px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (183.5px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (480px):** Responsive layout threshold.
- **sm (575px):** Responsive layout threshold.
- **md (576px):** Responsive layout threshold.
- **lg (767px):** Responsive layout threshold.
- **xl (768px):** Responsive layout threshold.
- **2xl (800px):** Responsive layout threshold.
- **3xl (900px):** Responsive layout threshold.
- **bp-8 (960px):** Responsive layout threshold.
- **bp-9 (991px):** Responsive layout threshold.
- **bp-10 (992px):** Responsive layout threshold.
- **bp-11 (993px):** Responsive layout threshold.
- **bp-12 (1199px):** Responsive layout threshold.
- **bp-13 (1200px):** Responsive layout threshold.
- **bp-14 (1600px):** Responsive layout threshold.
- **breakpoint-xs (480px):** Responsive layout threshold.
- **breakpoint-sm (575px):** Responsive layout threshold.
- **breakpoint-md (576px):** Responsive layout threshold.
- **breakpoint-lg (767px):** Responsive layout threshold.
- **breakpoint-xl (768px):** Responsive layout threshold.
- **breakpoint-2xl (800px):** Responsive layout threshold.
- **breakpoint-3xl (900px):** Responsive layout threshold.
- **breakpoint-bp-8 (960px):** Responsive layout threshold.
- **breakpoint-bp-9 (991px):** Responsive layout threshold.
- **breakpoint-bp-10 (992px):** Responsive layout threshold.
- **breakpoint-bp-11 (993px):** Responsive layout threshold.
- **breakpoint-bp-12 (1199px):** Responsive layout threshold.
- **breakpoint-bp-13 (1200px):** Responsive layout threshold.
- **breakpoint-bp-14 (1600px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.1) 0px 16px 43px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0.1) 0px 16px 43px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (8px):** Border radius token.
- **md (16px):** Border radius token.
- **lg (25px):** Border radius token.

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
- Avoid pairing --color-blue on --color-dark-blue (1.94:1, Fail).
- Avoid pairing --color-blue on --color-black (2.23:1, Fail).
- Avoid pairing --color-blue on --color-dark-cyan (1.25:1, Fail).
