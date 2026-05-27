---
version: alpha
name: "Webflow: Create a custom website"
description: "Converted from UI Inspector extraction of https://webflow.com/"
colors:
  primary: "#080808"
  secondary: "#808080"
  tertiary: "#146EF5"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-dark-gray: "#5A5A5A"
  color-light-gray: "#D8D8D8"
  color-light-gray-2: "#F0F0F0"
  color-blue-3: "#146CEB"
  color-blue-4: "rgba(20, 110, 245, 0.1)"
  color-dark-gray-2: "#464646"
  color-dark-gray-3: "#171717"
  color-light-gray-3: "#EFEFEF"
  color-dark-gray-4: "#292929"
  color-dark-gray-5: "#222222"
  color-dark-gray-7: "#111111"
  color-black-2: "#000000"
  color-light-blue: "#6CA7FF"
  color-orange: "#FFA666"
  color-blue-2: "#1366E2"
  color-green: "#60ED76"
  color-dark-gray-6: "#363636"
  color-light-blue-2: "#CAB1FF"
typography:
  display:
    fontFamily: sans-serif
    fontSize: 70.1321px
    fontWeight: 500
    lineHeight: 72.9374px
    letterSpacing: -0.274843px
  h1:
    fontFamily: sans-serif
    fontSize: 49.4214px
    fontWeight: 500
    lineHeight: 51.3983px
    letterSpacing: -0.274843px
  h2:
    fontFamily: sans-serif
    fontSize: 39.5371px
    fontWeight: 500
    lineHeight: 43.9749px
    letterSpacing: -0.274843px
  h3:
    fontFamily: sans-serif
    fontSize: 36.7107px
    fontWeight: 500
    lineHeight: 41.73px
    letterSpacing: -0.274843px
  body-lg:
    fontFamily: sans-serif
    fontSize: 29.8071px
    fontWeight: 500
    lineHeight: 41.1186px
    letterSpacing: -0.274843px
  body-md:
    fontFamily: sans-serif
    fontSize: 29.2589px
    fontWeight: 500
    lineHeight: 38.0366px
    letterSpacing: -0.274843px
  body-sm:
    fontFamily: sans-serif
    fontSize: 27.4843px
    fontWeight: 500
    lineHeight: 35.1107px
    letterSpacing: -0.274843px
  caption:
    fontFamily: sans-serif
    fontSize: 22.9036px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: -0.274843px
  code:
    fontFamily: "WF Visual Sans Variable"
    fontSize: 12.8px
    fontWeight: 400
rounded:
  sm: "0px 2px 2px 0px"
  md: "0px 0px 4px 4px"
  lg: "0px 4px 0px 0px"
  xl: "0px 0px 4px"
  2xl: "0px 0px 8px 8px"
  full: "2px 2px 0px 0px"
spacing:
  xs: 4px
  sm: 7.17768px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 380px
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

This design system was auto-extracted from https://webflow.com/ (22 colors · 55 type tokens · 35 spacing steps · 5 breakpoints · 4 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-18T08:46:47.149Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#080808):** Core surface and headline color.
- **secondary (#808080):** Muted text, borders, and metadata.
- **tertiary (#146EF5):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-dark-gray (#5A5A5A):** Supporting token from the extracted palette.
- **color-light-gray (#D8D8D8):** Supporting token from the extracted palette.
- **color-light-gray-2 (#F0F0F0):** Supporting token from the extracted palette.
- **color-blue-3 (#146CEB):** Supporting token from the extracted palette.
- **color-blue-4 (rgba(20, 110, 245, 0.1)):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#464646):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#171717):** Supporting token from the extracted palette.
- **color-light-gray-3 (#EFEFEF):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#292929):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#222222):** Supporting token from the extracted palette.
- **color-dark-gray-7 (#111111):** Supporting token from the extracted palette.
- **color-black-2 (#000000):** Supporting token from the extracted palette.
- **color-light-blue (#6CA7FF):** Supporting token from the extracted palette.
- **color-orange (#FFA666):** Supporting token from the extracted palette.
- **color-blue-2 (#1366E2):** Supporting token from the extracted palette.
- **color-green (#60ED76):** Supporting token from the extracted palette.
- **color-dark-gray-6 (#363636):** Supporting token from the extracted palette.
- **color-light-blue-2 (#CAB1FF):** Supporting token from the extracted palette.

## Typography

Primary typeface: **WF Visual Sans Variable, WFVisualSans-Mono, Family, sans-serif**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font sans-serif, 70.1321px, weight 500.
- **h1:** font sans-serif, 49.4214px, weight 500.
- **h2:** font sans-serif, 39.5371px, weight 500.
- **h3:** font sans-serif, 36.7107px, weight 500.
- **body-lg:** font sans-serif, 29.8071px, weight 500.
- **body-md:** font sans-serif, 29.2589px, weight 500.
- **body-sm:** font sans-serif, 27.4843px, weight 500.
- **caption:** font sans-serif, 22.9036px, weight 500.
- **code:** font WF Visual Sans Variable, 12.8px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (7.17768px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (380px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (479px):** Responsive layout threshold.
- **sm (767px):** Responsive layout threshold.
- **md (768px):** Responsive layout threshold.
- **lg (991px):** Responsive layout threshold.
- **xl (992px):** Responsive layout threshold.
- **breakpoint-xs (479px):** Responsive layout threshold.
- **breakpoint-sm (767px):** Responsive layout threshold.
- **breakpoint-md (768px):** Responsive layout threshold.
- **breakpoint-lg (991px):** Responsive layout threshold.
- **breakpoint-xl (992px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0) 0px 84px 24px 0px, rgba(0, 0, 0, 0.01) 0px 54px 22px 0px, rgba(0, 0, 0, 0.04) 0px 30px 18px 0px, rgba(0, 0, 0, 0.08) 0px 13px 13px 0px, rgba(0, 0, 0, 0.09) 0px 3px 7px 0px`
- **md:** `rgba(0, 0, 0, 0) 0px 105px 30px 0px, rgba(0, 0, 0, 0.02) 0px 67px 27px 0px, rgba(0, 0, 0, 0.06) 0px 38px 23px 0px, rgba(0, 0, 0, 0.1) 0px 17px 17px 0px, rgba(0, 0, 0, 0.12) 0px 4px 9px 0px`
- **lg:** `rgba(0, 0, 0, 0.01) 0px 148px 42px 0px, rgba(0, 0, 0, 0.04) 0px 95px 38px 0px, rgba(0, 0, 0, 0.15) 0px 53px 32px 0px, rgba(0, 0, 0, 0.26) 0px 24px 24px 0px, rgba(0, 0, 0, 0.29) 0px 6px 13px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 84px 24px 0px, rgba(0, 0, 0, 0.01) 0px 54px 22px 0px, rgba(0, 0, 0, 0.04) 0px 30px 18px 0px, rgba(0, 0, 0, 0.08) 0px 13px 13px 0px, rgba(0, 0, 0, 0.09) 0px 3px 7px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0) 0px 105px 30px 0px, rgba(0, 0, 0, 0.02) 0px 67px 27px 0px, rgba(0, 0, 0, 0.06) 0px 38px 23px 0px, rgba(0, 0, 0, 0.1) 0px 17px 17px 0px, rgba(0, 0, 0, 0.12) 0px 4px 9px 0px`
- **shadow-lg:** `rgba(0, 0, 0, 0.01) 0px 148px 42px 0px, rgba(0, 0, 0, 0.04) 0px 95px 38px 0px, rgba(0, 0, 0, 0.15) 0px 53px 32px 0px, rgba(0, 0, 0, 0.26) 0px 24px 24px 0px, rgba(0, 0, 0, 0.29) 0px 6px 13px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 2px 2px 0px):** Border radius token.
- **md (0px 0px 4px 4px):** Border radius token.
- **lg (0px 4px 0px 0px):** Border radius token.
- **xl (0px 0px 4px):** Border radius token.
- **2xl (0px 0px 8px 8px):** Border radius token.
- **full (2px 2px 0px 0px):** Border radius token.

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
- Avoid pairing --color-black-2 on --color-black (1.05:1, Fail).
- Avoid pairing --color-light-blue on --color-white (2.44:1, Fail).
- Avoid pairing --color-light-blue on --color-dark-gray (2.83:1, Fail).
