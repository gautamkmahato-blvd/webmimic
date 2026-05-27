---
version: alpha
name: "Free AI Voice Generator & Voice Agents Platform"
description: "Converted from UI Inspector extraction of https://elevenlabs.io/"
colors:
  primary: "#000000"
  secondary: "#777169"
  tertiary: "#00CCBC"
  neutral: "#3D3D3D"
  on-primary: "#3D3D3D"
  on-tertiary: "#FFFFFF"
  color-white-2: "#F5F3F1"
  color-white-3: "#FDFCFC"
  color-light-gray-2: "#EBE8E4"
  color-orange: "#FF4704"
  color-blue-3: "#0447FF"
  color-white-4: "#FAF8F8"
  color-light-gray-4: "rgba(245, 242, 239, 0.8)"
  color-dark-gray-2: "#57534E"
  color-mid-gray-2: "#A59F97"
  color-red: "#F41A2F"
  color-blue: "#0A59D2"
  color-dark-blue: "#052F70"
  color-mid-gray-3: "#949494"
  color-dark-gray-3: "#44403B"
  color-black-2: "#0C0A09"
  color-light-gray: "#E5E5E5"
  color-dark-orange: "rgba(78, 50, 23, 0.04)"
  color-light-gray-3: "#E0DFDD"
  color-blue-2: "#635BFF"
  color-green: "#76B900"
  color-white-5: "#FFF9F5"
  color-white-6: "#F5F8FF"
  color-blue-4: "#3D75D8"
  color-blue-5: "#2A68D2"
  color-blue-6: "#75BEE5"
  color-cyan-2: "#52D0E9"
  color-blue-7: "#2159BA"
  color-blue-8: "#3A74DA"
  color-cyan-3: "#6CD7EC"
  color-blue-9: "#5AB9F1"
  color-blue-10: "#33A1E5"
  color-blue-11: "#1F5FCF"
  color-blue-12: "#2C54CA"
  color-cyan-4: "#3A9ECF"
  color-blue-13: "#3167C5"
  color-light-cyan: "#ADE8F3"
  color-light-cyan-2: "#D8F1F5"
  color-light-cyan-3: "#A5DBE6"
  color-cyan-5: "#2B9DD6"
  color-light-cyan-4: "#AEE0E9"
  color-cyan-6: "#20BAD0"
  color-blue-14: "#1E53B0"
  color-blue-15: "#2F40D2"
  color-dark-blue-2: "#1C366A"
  color-cyan-7: "#16E1FF"
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: 500
    lineHeight: 52px
    letterSpacing: 0.14px
  h1:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: 500
    lineHeight: 42px
    letterSpacing: 0.14px
  h2:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: 500
    lineHeight: 36px
    letterSpacing: 0.14px
  h3:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: 500
    lineHeight: 28.8px
    letterSpacing: 0.14px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 500
    lineHeight: 27px
    letterSpacing: 0.14px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 500
    lineHeight: 26px
    letterSpacing: 0.14px
  body-sm:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: 0.14px
  caption:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 22px
    letterSpacing: 0.14px
  code:
    fontFamily: Waldenburg
    fontSize: 13px
    fontWeight: 400
rounded:
  sm: "0px 0px 24px 24px"
  md: "0px 0px 0px 20px"
  lg: 2px
  xl: 4px
  2xl: 7px
  full: "7.2px 21.6px 21.6px"
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 468px
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

This design system was auto-extracted from https://elevenlabs.io/ (50 colors · 41 type tokens · 56 spacing steps · 2 breakpoints · 7 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-14T18:56:36.972Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#777169):** Muted text, borders, and metadata.
- **tertiary (#00CCBC):** Primary accent for links, buttons, and focus states.
- **neutral (#3D3D3D):** Primary readable text on dark surfaces.
- **on-primary (#3D3D3D):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-white-2 (#F5F3F1):** Supporting token from the extracted palette.
- **color-white-3 (#FDFCFC):** Supporting token from the extracted palette.
- **color-light-gray-2 (#EBE8E4):** Supporting token from the extracted palette.
- **color-orange (#FF4704):** Supporting token from the extracted palette.
- **color-blue-3 (#0447FF):** Supporting token from the extracted palette.
- **color-white-4 (#FAF8F8):** Supporting token from the extracted palette.
- **color-light-gray-4 (rgba(245, 242, 239, 0.8)):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#57534E):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#A59F97):** Supporting token from the extracted palette.
- **color-red (#F41A2F):** Supporting token from the extracted palette.
- **color-blue (#0A59D2):** Supporting token from the extracted palette.
- **color-dark-blue (#052F70):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#949494):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#44403B):** Supporting token from the extracted palette.
- **color-black-2 (#0C0A09):** Supporting token from the extracted palette.
- **color-light-gray (#E5E5E5):** Supporting token from the extracted palette.
- **color-dark-orange (rgba(78, 50, 23, 0.04)):** Supporting token from the extracted palette.
- **color-light-gray-3 (#E0DFDD):** Supporting token from the extracted palette.
- **color-blue-2 (#635BFF):** Supporting token from the extracted palette.
- **color-green (#76B900):** Supporting token from the extracted palette.
- **color-white-5 (#FFF9F5):** Supporting token from the extracted palette.
- **color-white-6 (#F5F8FF):** Supporting token from the extracted palette.
- **color-blue-4 (#3D75D8):** Supporting token from the extracted palette.
- **color-blue-5 (#2A68D2):** Supporting token from the extracted palette.
- **color-blue-6 (#75BEE5):** Supporting token from the extracted palette.
- **color-cyan-2 (#52D0E9):** Supporting token from the extracted palette.
- **color-blue-7 (#2159BA):** Supporting token from the extracted palette.
- **color-blue-8 (#3A74DA):** Supporting token from the extracted palette.
- **color-cyan-3 (#6CD7EC):** Supporting token from the extracted palette.
- **color-blue-9 (#5AB9F1):** Supporting token from the extracted palette.
- **color-blue-10 (#33A1E5):** Supporting token from the extracted palette.
- **color-blue-11 (#1F5FCF):** Supporting token from the extracted palette.
- **color-blue-12 (#2C54CA):** Supporting token from the extracted palette.
- **color-cyan-4 (#3A9ECF):** Supporting token from the extracted palette.
- **color-blue-13 (#3167C5):** Supporting token from the extracted palette.
- **color-light-cyan (#ADE8F3):** Supporting token from the extracted palette.
- **color-light-cyan-2 (#D8F1F5):** Supporting token from the extracted palette.
- **color-light-cyan-3 (#A5DBE6):** Supporting token from the extracted palette.
- **color-cyan-5 (#2B9DD6):** Supporting token from the extracted palette.
- **color-light-cyan-4 (#AEE0E9):** Supporting token from the extracted palette.
- **color-cyan-6 (#20BAD0):** Supporting token from the extracted palette.
- **color-blue-14 (#1E53B0):** Supporting token from the extracted palette.
- **color-blue-15 (#2F40D2):** Supporting token from the extracted palette.
- **color-dark-blue-2 (#1C366A):** Supporting token from the extracted palette.
- **color-cyan-7 (#16E1FF):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Waldenburg, WaldenburgHF, ui-monospace, Geist Mono, Family, Inter**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Inter, 48px, weight 500.
- **h1:** font Inter, 36px, weight 500.
- **h2:** font Inter, 32px, weight 500.
- **h3:** font Inter, 20px, weight 500.
- **body-lg:** font Inter, 18px, weight 500.
- **body-md:** font Inter, 16px, weight 500.
- **body-sm:** font Inter, 15px, weight 500.
- **caption:** font Inter, 14px, weight 500.
- **code:** font Waldenburg, 13px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (468px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (480px):** Responsive layout threshold.
- **sm (1024px):** Responsive layout threshold.
- **breakpoint-xs (480px):** Responsive layout threshold.
- **breakpoint-sm (1024px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px`
- **md:** `rgb(255, 255, 255) 0px 0px 0px 0px inset, rgba(0, 0, 0, 0.075) 0px 0px 0px 0.5px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
- **lg:** `rgb(255, 255, 255) 0px 0px 0px 0px inset, rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
- **xl:** `rgba(0, 0, 0, 0) 0px 0px 1px 0px, rgba(0, 0, 0, 0) 0px 4px 4px 0px`
- **shadow-5:** `rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 4px 4px 0px`
- **shadow-6:** `rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px`
- **shadow-md:** `rgb(255, 255, 255) 0px 0px 0px 0px inset, rgba(0, 0, 0, 0.075) 0px 0px 0px 0.5px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
- **shadow-lg:** `rgb(255, 255, 255) 0px 0px 0px 0px inset, rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
- **shadow-xl:** `rgba(0, 0, 0, 0) 0px 0px 1px 0px, rgba(0, 0, 0, 0) 0px 4px 4px 0px`
- **shadow-shadow-5:** `rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 4px 4px 0px`
- **shadow-shadow-6:** `rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 0px 24px 24px):** Border radius token.
- **md (0px 0px 0px 20px):** Border radius token.
- **lg (2px):** Border radius token.
- **xl (4px):** Border radius token.
- **2xl (7px):** Border radius token.
- **full (7.2px 21.6px 21.6px):** Border radius token.

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
- Avoid pairing --color-dark-gray on --color-black (1.93:1, Fail).
- Avoid pairing --color-dark-gray-2 on --color-black (2.75:1, Fail).
- Avoid pairing --color-mid-gray-2 on --color-white (2.62:1, Fail).
