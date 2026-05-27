---
version: alpha
name: "Linear – The system for product development"
description: "Converted from UI Inspector extraction of https://linear.app/"
colors:
  primary: "#000000"
  secondary: "#62666D"
  tertiary: "#02B8CC"
  neutral: "#F7F8F8"
  on-primary: "#F7F8F8"
  on-tertiary: "#FFFFFF"
  color-black-2: "#08090A"
  color-dark-gray: "#23252A"
  color-green-2: "rgba(0, 255, 5, 0.1)"
  color-blue-2: "#5E6AD2"
  color-red: "#EB5757"
  color-red-2: "rgba(255, 0, 0, 0.1)"
  color-dark-gray-4: "#0F1011"
  color-light-gray-3: "#E6E6E6"
  color-green-4: "rgba(0, 255, 5, 0.07)"
  color-blue-3: "#6366F1"
  color-blue-4: "#8B5CF6"
  color-cyan-4: "#55CCFF"
  color-cyan-5: "#10B981"
  color-yellow-4: "#E4F222"
  color-dark-gray-10: "#28282C"
  color-blue-7: "rgba(94, 106, 210, 0.15)"
  color-black-7: "#090A0B"
  color-dark-gray-11: "#101112"
  color-dark-gray-12: "#121414"
  color-dark-gray-14: "#121314"
  color-dark-gray-15: "#161718"
  color-orange-3: "#F59E0B"
  color-cyan-6: "#06B6D4"
  color-dark-cyan: "#0F3338"
  color-dark-red: "#422222"
  color-dark-gray-17: "#3B3B3B"
  color-blue-9: "#1C85E8"
  color-light-blue: "#D0D6E0"
  color-mid-gray-2: "#8A8F98"
  color-light-gray: "#E2E4E7"
  color-light-pink: "#F79CE0"
  color-cyan: "#55CDFF"
  color-green: "#89D196"
  color-light-orange: "#FFC47C"
  color-light-blue-2: "#8FA4FF"
  color-green-3: "#27A644"
  color-light-gray-4: "#E2E4E6"
  color-light-blue-3: "#828FFF"
  color-dark-gray-3: "#3E3E44"
  color-dark-gray-7: "#383B3F"
  color-dark-gray-13: "#24282C"
  color-dark-gray-16: "#323334"
  color-black-3: "rgba(8, 9, 10, 0.5)"
  color-black-4: "rgba(8, 9, 10, 0.6)"
  color-blue-8: "rgba(94, 106, 210, 0.1)"
  color-black-8: "rgba(8, 9, 10, 0.1)"
  color-light-gray-2: "#E4E5E9"
  color-blue: "#4354B8"
  color-orange: "#E5591D"
  color-mid-gray-3: "#9C9DA1"
  color-dark-green: "#008D2C"
  color-yellow: "#F0BF00"
  color-cyan-3: "#00B8CC"
  color-dark-gray-6: "#191D20"
  color-orange-2: "#FF7236"
  color-yellow-2: "#F2C94C"
  color-yellow-3: "#D4A600"
  color-red-3: "#F34E52"
  color-dark-gray-8: "#585A5C"
  color-white-3: "#F5F8FA"
  color-light-gray-5: "#E1E8ED"
  color-dark-gray-9: "#292F33"
  color-blue-6: "#57B0FF"
  color-light-blue-4: "#B2D5FF"
  color-light-blue-5: "#DFD1FF"
  color-black-5: "#080808"
  color-black-6: "rgba(11, 11, 11, 0.8)"
  color-dark-gray-2: "#2E2E32"
  color-dark-gray-5: "#5B5C5A"
  color-blue-5: "#21B3FF"
  color-red-4: "#E3484E"
  color-red-5: "#993B3B"
typography:
  display:
    fontFamily: "Inter Variable"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 64px
    letterSpacing: -0.88px
  h1:
    fontFamily: "Inter Variable"
    fontSize: 40px
    fontWeight: 400
    lineHeight: 44px
    letterSpacing: -0.88px
  h2:
    fontFamily: "Inter Variable"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 40px
    letterSpacing: -0.88px
  h3:
    fontFamily: "Inter Variable"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 36px
    letterSpacing: -0.88px
  body-lg:
    fontFamily: "Inter Variable"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 31.92px
    letterSpacing: -0.88px
  body-md:
    fontFamily: "Inter Variable"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28.8px
    letterSpacing: -0.88px
  body-sm:
    fontFamily: "Inter Variable"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 26.6px
    letterSpacing: -0.88px
  caption:
    fontFamily: "Inter Variable"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: -0.88px
  code:
    fontFamily: "Berkeley Mono"
    fontSize: 12px
    fontWeight: 400
rounded:
  sm: "0px 4px 4px 0px"
  md: "0px 2px 2px 0px"
  lg: 2px
  xl: "2px 0px 0px 2px"
  2xl: 4px
  full: "4px 0px 0px 4px"
spacing:
  xs: 4px
  sm: 8px
  md: 17px
  lg: 24px
  xl: 32px
  2xl: 450px
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

This design system was auto-extracted from https://linear.app/ (77 colors · 47 type tokens · 70 spacing steps · 5 breakpoints · 6 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-15T18:04:33.127Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#62666D):** Muted text, borders, and metadata.
- **tertiary (#02B8CC):** Primary accent for links, buttons, and focus states.
- **neutral (#F7F8F8):** Primary readable text on dark surfaces.
- **on-primary (#F7F8F8):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-black-2 (#08090A):** Supporting token from the extracted palette.
- **color-dark-gray (#23252A):** Supporting token from the extracted palette.
- **color-green-2 (rgba(0, 255, 5, 0.1)):** Supporting token from the extracted palette.
- **color-blue-2 (#5E6AD2):** Supporting token from the extracted palette.
- **color-red (#EB5757):** Supporting token from the extracted palette.
- **color-red-2 (rgba(255, 0, 0, 0.1)):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#0F1011):** Supporting token from the extracted palette.
- **color-light-gray-3 (#E6E6E6):** Supporting token from the extracted palette.
- **color-green-4 (rgba(0, 255, 5, 0.07)):** Supporting token from the extracted palette.
- **color-blue-3 (#6366F1):** Supporting token from the extracted palette.
- **color-blue-4 (#8B5CF6):** Supporting token from the extracted palette.
- **color-cyan-4 (#55CCFF):** Supporting token from the extracted palette.
- **color-cyan-5 (#10B981):** Supporting token from the extracted palette.
- **color-yellow-4 (#E4F222):** Supporting token from the extracted palette.
- **color-dark-gray-10 (#28282C):** Supporting token from the extracted palette.
- **color-blue-7 (rgba(94, 106, 210, 0.15)):** Supporting token from the extracted palette.
- **color-black-7 (#090A0B):** Supporting token from the extracted palette.
- **color-dark-gray-11 (#101112):** Supporting token from the extracted palette.
- **color-dark-gray-12 (#121414):** Supporting token from the extracted palette.
- **color-dark-gray-14 (#121314):** Supporting token from the extracted palette.
- **color-dark-gray-15 (#161718):** Supporting token from the extracted palette.
- **color-orange-3 (#F59E0B):** Supporting token from the extracted palette.
- **color-cyan-6 (#06B6D4):** Supporting token from the extracted palette.
- **color-dark-cyan (#0F3338):** Supporting token from the extracted palette.
- **color-dark-red (#422222):** Supporting token from the extracted palette.
- **color-dark-gray-17 (#3B3B3B):** Supporting token from the extracted palette.
- **color-blue-9 (#1C85E8):** Supporting token from the extracted palette.
- **color-light-blue (#D0D6E0):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#8A8F98):** Supporting token from the extracted palette.
- **color-light-gray (#E2E4E7):** Supporting token from the extracted palette.
- **color-light-pink (#F79CE0):** Supporting token from the extracted palette.
- **color-cyan (#55CDFF):** Supporting token from the extracted palette.
- **color-green (#89D196):** Supporting token from the extracted palette.
- **color-light-orange (#FFC47C):** Supporting token from the extracted palette.
- **color-light-blue-2 (#8FA4FF):** Supporting token from the extracted palette.
- **color-green-3 (#27A644):** Supporting token from the extracted palette.
- **color-light-gray-4 (#E2E4E6):** Supporting token from the extracted palette.
- **color-light-blue-3 (#828FFF):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#3E3E44):** Supporting token from the extracted palette.
- **color-dark-gray-7 (#383B3F):** Supporting token from the extracted palette.
- **color-dark-gray-13 (#24282C):** Supporting token from the extracted palette.
- **color-dark-gray-16 (#323334):** Supporting token from the extracted palette.
- **color-black-3 (rgba(8, 9, 10, 0.5)):** Supporting token from the extracted palette.
- **color-black-4 (rgba(8, 9, 10, 0.6)):** Supporting token from the extracted palette.
- **color-blue-8 (rgba(94, 106, 210, 0.1)):** Supporting token from the extracted palette.
- **color-black-8 (rgba(8, 9, 10, 0.1)):** Supporting token from the extracted palette.
- **color-light-gray-2 (#E4E5E9):** Supporting token from the extracted palette.
- **color-blue (#4354B8):** Supporting token from the extracted palette.
- **color-orange (#E5591D):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#9C9DA1):** Supporting token from the extracted palette.
- **color-dark-green (#008D2C):** Supporting token from the extracted palette.
- **color-yellow (#F0BF00):** Supporting token from the extracted palette.
- **color-cyan-3 (#00B8CC):** Supporting token from the extracted palette.
- **color-dark-gray-6 (#191D20):** Supporting token from the extracted palette.
- **color-orange-2 (#FF7236):** Supporting token from the extracted palette.
- **color-yellow-2 (#F2C94C):** Supporting token from the extracted palette.
- **color-yellow-3 (#D4A600):** Supporting token from the extracted palette.
- **color-red-3 (#F34E52):** Supporting token from the extracted palette.
- **color-dark-gray-8 (#585A5C):** Supporting token from the extracted palette.
- **color-white-3 (#F5F8FA):** Supporting token from the extracted palette.
- **color-light-gray-5 (#E1E8ED):** Supporting token from the extracted palette.
- **color-dark-gray-9 (#292F33):** Supporting token from the extracted palette.
- **color-blue-6 (#57B0FF):** Supporting token from the extracted palette.
- **color-light-blue-4 (#B2D5FF):** Supporting token from the extracted palette.
- **color-light-blue-5 (#DFD1FF):** Supporting token from the extracted palette.
- **color-black-5 (#080808):** Supporting token from the extracted palette.
- **color-black-6 (rgba(11, 11, 11, 0.8)):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#2E2E32):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#5B5C5A):** Supporting token from the extracted palette.
- **color-blue-5 (#21B3FF):** Supporting token from the extracted palette.
- **color-red-4 (#E3484E):** Supporting token from the extracted palette.
- **color-red-5 (#993B3B):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Berkeley Mono, Family, Inter Variable**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Inter Variable, 64px, weight 400.
- **h1:** font Inter Variable, 40px, weight 400.
- **h2:** font Inter Variable, 32px, weight 400.
- **h3:** font Inter Variable, 24px, weight 400.
- **body-lg:** font Inter Variable, 20px, weight 400.
- **body-md:** font Inter Variable, 18px, weight 400.
- **body-sm:** font Inter Variable, 17px, weight 400.
- **caption:** font Inter Variable, 16px, weight 400.
- **code:** font Berkeley Mono, 12px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (17px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (450px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (600px):** Responsive layout threshold.
- **sm (640px):** Responsive layout threshold.
- **md (768px):** Responsive layout threshold.
- **lg (1024px):** Responsive layout threshold.
- **xl (1280px):** Responsive layout threshold.
- **breakpoint-xs (600px):** Responsive layout threshold.
- **breakpoint-sm (640px):** Responsive layout threshold.
- **breakpoint-md (768px):** Responsive layout threshold.
- **breakpoint-lg (1024px):** Responsive layout threshold.
- **breakpoint-xl (1280px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.03) 0px 1.2px 0px 0px`
- **md:** `rgba(0, 0, 0, 0.4) 0px 2px 4px 0px`
- **lg:** `rgba(0, 0, 0, 0.2) 0px 0px 12px 0px inset`
- **xl:** `rgb(35, 37, 42) 0px 0px 0px 1px inset`
- **shadow-5:** `rgba(0, 0, 0, 0) 0px 8px 2px 0px, rgba(0, 0, 0, 0.01) 0px 5px 2px 0px, rgba(0, 0, 0, 0.04) 0px 3px 2px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 1px 0px`
- **shadow-6:** `rgba(0, 0, 0, 0.2) 0px 0px 0px 1px`
- **shadow-sm:** `rgba(0, 0, 0, 0.03) 0px 1.2px 0px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0.4) 0px 2px 4px 0px`
- **shadow-lg:** `rgba(0, 0, 0, 0.2) 0px 0px 12px 0px inset`
- **shadow-xl:** `rgb(35, 37, 42) 0px 0px 0px 1px inset`
- **shadow-shadow-5:** `rgba(0, 0, 0, 0) 0px 8px 2px 0px, rgba(0, 0, 0, 0.01) 0px 5px 2px 0px, rgba(0, 0, 0, 0.04) 0px 3px 2px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 1px 0px`
- **shadow-shadow-6:** `rgba(0, 0, 0, 0.2) 0px 0px 0px 1px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 4px 4px 0px):** Border radius token.
- **md (0px 2px 2px 0px):** Border radius token.
- **lg (2px):** Border radius token.
- **xl (2px 0px 0px 2px):** Border radius token.
- **2xl (4px):** Border radius token.
- **full (4px 0px 0px 4px):** Border radius token.

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
- Avoid pairing --color-white on --color-white-2 (1.06:1, Fail).
- Avoid pairing --color-white on --color-green-2 (1.29:1, Fail).
- Avoid pairing --color-mid-gray on --color-dark-gray (2.66:1, Fail).
