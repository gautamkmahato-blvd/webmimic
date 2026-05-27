---
version: alpha
name: "Contractbook: Contract Management Software"
description: "Converted from UI Inspector extraction of https://contractbook.com/"
colors:
  primary: "#141414"
  secondary: "#999999"
  tertiary: "#1009F6"
  neutral: "#999999"
  on-primary: "#999999"
  on-tertiary: "#FFFFFF"
  color-dark-gray-2: "#1A1A1A"
  color-black: "#000000"
  color-light-gray: "#D6D6D6"
  color-white: "#F4F4F4"
  color-light-gray-2: "#F0F0EC"
  color-light-gray-3: "#DBDBDB"
  color-blue-3: "#1032CF"
  color-orange: "#FFBA09"
  color-light-cyan: "#ADD3E5"
  color-white-3: "#F7F7F3"
  color-light-pink: "#E3C7DE"
  color-dark-green: "#304801"
  color-white-4: "#F9F9F6"
  color-light-gray-8: "#DDDDDD"
  color-light-red: "#FFDEDE"
  color-dark-gray-4: "rgba(26, 26, 26, 0.4)"
  color-light-gray-4: "#D4D4D0"
  color-blue: "#2A4EEF"
  color-dark-gray-3: "#222222"
  color-mid-gray-3: "#6D6868"
  color-light-gray-5: "#B3B3B3"
  color-light-gray-6: "#CCCCCC"
  color-light-gray-7: "#C1C1C1"
  color-mid-gray-2: "#888888"
typography:
  display:
    fontFamily: sans-serif
    fontSize: 48px
    fontWeight: 400
    lineHeight: 60px
    letterSpacing: 0.25px
  h1:
    fontFamily: sans-serif
    fontSize: 32px
    fontWeight: 400
    lineHeight: 41.6px
    letterSpacing: 0.25px
  h2:
    fontFamily: sans-serif
    fontSize: 31.5px
    fontWeight: 400
    lineHeight: 40.95px
    letterSpacing: 0.25px
  h3:
    fontFamily: sans-serif
    fontSize: 28px
    fontWeight: 400
    lineHeight: 36.4px
    letterSpacing: 0.25px
  body-lg:
    fontFamily: sans-serif
    fontSize: 24.5px
    fontWeight: 400
    lineHeight: 31.85px
    letterSpacing: 0.25px
  body-md:
    fontFamily: sans-serif
    fontSize: 15.75px
    fontWeight: 400
    lineHeight: 23.625px
    letterSpacing: 0.25px
  body-sm:
    fontFamily: sans-serif
    fontSize: 15px
    fontWeight: 400
    lineHeight: 22.5px
    letterSpacing: 0.25px
  caption:
    fontFamily: sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 22.05px
    letterSpacing: 0.25px
  code:
    fontFamily: Abcwhyte
    fontSize: 12.25px
    fontWeight: 400
rounded:
  sm: "0px 24px 24px 0px"
  md: "0px 0px 40px 40px"
  lg: 3.75px
  xl: 4.375px
  2xl: 7.5px
  full: 8px
spacing:
  xs: 3.20312px
  sm: 8px
  md: 15.75px
  lg: 24px
  xl: 35px
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

This design system was auto-extracted from https://contractbook.com/ (28 colors · 36 type tokens · 47 spacing steps · 12 breakpoints · 9 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-05-06T12:47:36.149Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#141414):** Core surface and headline color.
- **secondary (#999999):** Muted text, borders, and metadata.
- **tertiary (#1009F6):** Primary accent for links, buttons, and focus states.
- **neutral (#999999):** Primary readable text on dark surfaces.
- **on-primary (#999999):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-dark-gray-2 (#1A1A1A):** Supporting token from the extracted palette.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-light-gray (#D6D6D6):** Supporting token from the extracted palette.
- **color-white (#F4F4F4):** Supporting token from the extracted palette.
- **color-light-gray-2 (#F0F0EC):** Supporting token from the extracted palette.
- **color-light-gray-3 (#DBDBDB):** Supporting token from the extracted palette.
- **color-blue-3 (#1032CF):** Supporting token from the extracted palette.
- **color-orange (#FFBA09):** Supporting token from the extracted palette.
- **color-light-cyan (#ADD3E5):** Supporting token from the extracted palette.
- **color-white-3 (#F7F7F3):** Supporting token from the extracted palette.
- **color-light-pink (#E3C7DE):** Supporting token from the extracted palette.
- **color-dark-green (#304801):** Supporting token from the extracted palette.
- **color-white-4 (#F9F9F6):** Supporting token from the extracted palette.
- **color-light-gray-8 (#DDDDDD):** Supporting token from the extracted palette.
- **color-light-red (#FFDEDE):** Supporting token from the extracted palette.
- **color-dark-gray-4 (rgba(26, 26, 26, 0.4)):** Supporting token from the extracted palette.
- **color-light-gray-4 (#D4D4D0):** Supporting token from the extracted palette.
- **color-blue (#2A4EEF):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#222222):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#6D6868):** Supporting token from the extracted palette.
- **color-light-gray-5 (#B3B3B3):** Supporting token from the extracted palette.
- **color-light-gray-6 (#CCCCCC):** Supporting token from the extracted palette.
- **color-light-gray-7 (#C1C1C1):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#888888):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Abcwhyte, Family, sans-serif**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font sans-serif, 48px, weight 400.
- **h1:** font sans-serif, 32px, weight 400.
- **h2:** font sans-serif, 31.5px, weight 400.
- **h3:** font sans-serif, 28px, weight 400.
- **body-lg:** font sans-serif, 24.5px, weight 400.
- **body-md:** font sans-serif, 15.75px, weight 400.
- **body-sm:** font sans-serif, 15px, weight 400.
- **caption:** font sans-serif, 14px, weight 400.
- **code:** font Abcwhyte, 12.25px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (3.20312px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (15.75px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (35px):** Layout rhythm and component padding.
- **2xl (500px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (479px):** Responsive layout threshold.
- **sm (600px):** Responsive layout threshold.
- **md (601px):** Responsive layout threshold.
- **lg (767px):** Responsive layout threshold.
- **xl (768px):** Responsive layout threshold.
- **2xl (991px):** Responsive layout threshold.
- **3xl (992px):** Responsive layout threshold.
- **bp-8 (1200px):** Responsive layout threshold.
- **bp-9 (1280px):** Responsive layout threshold.
- **bp-10 (1440px):** Responsive layout threshold.
- **bp-11 (1510px):** Responsive layout threshold.
- **bp-12 (1920px):** Responsive layout threshold.
- **breakpoint-xs (479px):** Responsive layout threshold.
- **breakpoint-sm (600px):** Responsive layout threshold.
- **breakpoint-md (601px):** Responsive layout threshold.
- **breakpoint-lg (767px):** Responsive layout threshold.
- **breakpoint-xl (768px):** Responsive layout threshold.
- **breakpoint-2xl (991px):** Responsive layout threshold.
- **breakpoint-3xl (992px):** Responsive layout threshold.
- **breakpoint-bp-8 (1200px):** Responsive layout threshold.
- **breakpoint-bp-9 (1280px):** Responsive layout threshold.
- **breakpoint-bp-10 (1440px):** Responsive layout threshold.
- **breakpoint-bp-11 (1510px):** Responsive layout threshold.
- **breakpoint-bp-12 (1920px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgb(136, 136, 136) 0px 0px 1px 0px`
- **md:** `rgba(0, 0, 0, 0.3) 0px 32px 68px 0px`
- **lg:** `rgba(0, 0, 0, 0.2) 1px 1px 4px 0px`
- **xl:** `rgba(0, 0, 0, 0.2) 2px 2px 3px 0px`
- **shadow-5:** `rgba(0, 0, 0, 0.15) 0px 4px 16px 0px`
- **shadow-sm:** `rgb(136, 136, 136) 0px 0px 1px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0.3) 0px 32px 68px 0px`
- **shadow-lg:** `rgba(0, 0, 0, 0.2) 1px 1px 4px 0px`
- **shadow-xl:** `rgba(0, 0, 0, 0.2) 2px 2px 3px 0px`
- **shadow-shadow-5:** `rgba(0, 0, 0, 0.15) 0px 4px 16px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 24px 24px 0px):** Border radius token.
- **md (0px 0px 40px 40px):** Border radius token.
- **lg (3.75px):** Border radius token.
- **xl (4.375px):** Border radius token.
- **2xl (7.5px):** Border radius token.
- **full (8px):** Border radius token.

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
- Avoid pairing --color-mid-gray on --color-light-gray (1.96:1, Fail).
- Avoid pairing --color-mid-gray on --color-white (2.59:1, Fail).
- Avoid pairing --color-light-gray-4 on --color-light-gray (1.02:1, Fail).
