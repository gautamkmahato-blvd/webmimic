---
version: alpha
name: Cal.com
description: "Converted from UI Inspector extraction of https://cal.com/"
colors:
  primary: "#000000"
  secondary: "#898989"
  tertiary: "#374151"
  neutral: "#0000EE"
  on-primary: "#0000EE"
  on-tertiary: "#FFFFFF"
  color-light-gray: "#E0E0E0"
  color-dark-gray: "#242424"
  color-dark-gray-4: "rgba(20, 20, 20, 0.15)"
  color-white-2: "#F4F4F4"
  color-light-gray-2: "#D3D3D3"
  color-light-gray-3: "#E1E2E3"
  color-dark-gray-8: "#101010"
  color-light-gray-4: "#E5E7EB"
  color-white-3: "#F5F5F5"
  color-white-4: "#F3F4F6"
  color-light-purple: "#E9DDFD"
  color-dark-blue-5: "#262543"
  color-light-red: "#F8D7D8"
  color-light-blue: "#D6ECFE"
  color-dark-gray-10: "rgba(20, 20, 20, 0.07)"
  color-dark-gray-2: "#292929"
  color-dark-gray-3: "#111111"
  color-blue-2: "#6B7280"
  color-blue-3: "#9CA3AF"
  color-purple: "#7826B1"
  color-purple-2: "#AA61F1"
  color-blue-4: "#0099FF"
  color-red: "#882C2F"
  color-red-2: "#D85B5F"
  color-dark-blue-4: "#0261A2"
  color-blue-6: "#0C9BEB"
  color-mid-gray-2: "#767676"
  color-dark-blue: "rgba(34, 42, 53, 0.05)"
  color-dark-gray-5: "rgba(19, 19, 22, 0.7)"
  color-dark-gray-6: "rgba(34, 42, 53, 0.08)"
  color-dark-gray-7: "rgba(36, 36, 36, 0.05)"
  color-dark-blue-3: "rgba(34, 42, 53, 0.1)"
  color-dark-gray-9: "#343434"
  color-blue-5: "#4285F4"
  color-white-5: "#F7F7F8"
  color-light-gray-5: "#EAEAEB"
  color-white-6: "#FCFCFC"
  color-red-3: "#EA4335"
  color-orange: "#FBBC04"
  color-green: "#34A853"
  color-red-4: "#FF492C"
  color-dark-green: "#00AC47"
  color-blue-7: "#6349EA"
  color-light-purple-2: "#C292FF"
  color-light-pink: "rgba(234, 188, 238, 0.8)"
  color-orange-2: "#FFC107"
  color-red-5: "#FF3D00"
  color-green-2: "#4CAF50"
  color-dark-green-2: "#188038"
  color-blue-8: "#1967D2"
  color-mid-gray-3: "#858585"
  color-orange-3: "#FBBC05"
  color-dark-green-3: "#00832D"
  color-blue-9: "#0066DA"
  color-red-6: "#E94235"
  color-blue-10: "#2684FC"
  color-orange-4: "#FFBA00"
typography:
  display:
    fontFamily: Times
    fontSize: 56px
    fontWeight: 500
    lineHeight: 61.6px
    letterSpacing: 0.2px
  h1:
    fontFamily: Times
    fontSize: 40px
    fontWeight: 500
    lineHeight: 44px
    letterSpacing: 0.2px
  h2:
    fontFamily: Times
    fontSize: 20px
    fontWeight: 500
    lineHeight: 30px
    letterSpacing: 0.2px
  h3:
    fontFamily: Times
    fontSize: 18px
    fontWeight: 500
    lineHeight: 26px
    letterSpacing: 0.2px
  body-lg:
    fontFamily: Times
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: 0.2px
  body-md:
    fontFamily: Times
    fontSize: 14px
    fontWeight: 500
    lineHeight: 23.4px
    letterSpacing: 0.2px
  body-sm:
    fontFamily: Times
    fontSize: 12px
    fontWeight: 500
    lineHeight: 21px
    letterSpacing: 0.2px
  caption:
    fontFamily: Times
    fontSize: 10px
    fontWeight: 500
    lineHeight: 19.6px
    letterSpacing: 0.2px
  code:
    fontFamily: sans-serif
    fontSize: 10px
    fontWeight: 400
rounded:
  sm: 2px
  md: 4px
  lg: 6px
  xl: 6.94px
  2xl: 7px
  full: 8px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 96px
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

This design system was auto-extracted from https://cal.com/ (62 colors · 41 type tokens · 18 spacing steps · 8 breakpoints).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-14T18:23:53.385Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#898989):** Muted text, borders, and metadata.
- **tertiary (#374151):** Primary accent for links, buttons, and focus states.
- **neutral (#0000EE):** Primary readable text on dark surfaces.
- **on-primary (#0000EE):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-light-gray (#E0E0E0):** Supporting token from the extracted palette.
- **color-dark-gray (#242424):** Supporting token from the extracted palette.
- **color-dark-gray-4 (rgba(20, 20, 20, 0.15)):** Supporting token from the extracted palette.
- **color-white-2 (#F4F4F4):** Supporting token from the extracted palette.
- **color-light-gray-2 (#D3D3D3):** Supporting token from the extracted palette.
- **color-light-gray-3 (#E1E2E3):** Supporting token from the extracted palette.
- **color-dark-gray-8 (#101010):** Supporting token from the extracted palette.
- **color-light-gray-4 (#E5E7EB):** Supporting token from the extracted palette.
- **color-white-3 (#F5F5F5):** Supporting token from the extracted palette.
- **color-white-4 (#F3F4F6):** Supporting token from the extracted palette.
- **color-light-purple (#E9DDFD):** Supporting token from the extracted palette.
- **color-dark-blue-5 (#262543):** Supporting token from the extracted palette.
- **color-light-red (#F8D7D8):** Supporting token from the extracted palette.
- **color-light-blue (#D6ECFE):** Supporting token from the extracted palette.
- **color-dark-gray-10 (rgba(20, 20, 20, 0.07)):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#292929):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#111111):** Supporting token from the extracted palette.
- **color-blue-2 (#6B7280):** Supporting token from the extracted palette.
- **color-blue-3 (#9CA3AF):** Supporting token from the extracted palette.
- **color-purple (#7826B1):** Supporting token from the extracted palette.
- **color-purple-2 (#AA61F1):** Supporting token from the extracted palette.
- **color-blue-4 (#0099FF):** Supporting token from the extracted palette.
- **color-red (#882C2F):** Supporting token from the extracted palette.
- **color-red-2 (#D85B5F):** Supporting token from the extracted palette.
- **color-dark-blue-4 (#0261A2):** Supporting token from the extracted palette.
- **color-blue-6 (#0C9BEB):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#767676):** Supporting token from the extracted palette.
- **color-dark-blue (rgba(34, 42, 53, 0.05)):** Supporting token from the extracted palette.
- **color-dark-gray-5 (rgba(19, 19, 22, 0.7)):** Supporting token from the extracted palette.
- **color-dark-gray-6 (rgba(34, 42, 53, 0.08)):** Supporting token from the extracted palette.
- **color-dark-gray-7 (rgba(36, 36, 36, 0.05)):** Supporting token from the extracted palette.
- **color-dark-blue-3 (rgba(34, 42, 53, 0.1)):** Supporting token from the extracted palette.
- **color-dark-gray-9 (#343434):** Supporting token from the extracted palette.
- **color-blue-5 (#4285F4):** Supporting token from the extracted palette.
- **color-white-5 (#F7F7F8):** Supporting token from the extracted palette.
- **color-light-gray-5 (#EAEAEB):** Supporting token from the extracted palette.
- **color-white-6 (#FCFCFC):** Supporting token from the extracted palette.
- **color-red-3 (#EA4335):** Supporting token from the extracted palette.
- **color-orange (#FBBC04):** Supporting token from the extracted palette.
- **color-green (#34A853):** Supporting token from the extracted palette.
- **color-red-4 (#FF492C):** Supporting token from the extracted palette.
- **color-dark-green (#00AC47):** Supporting token from the extracted palette.
- **color-blue-7 (#6349EA):** Supporting token from the extracted palette.
- **color-light-purple-2 (#C292FF):** Supporting token from the extracted palette.
- **color-light-pink (rgba(234, 188, 238, 0.8)):** Supporting token from the extracted palette.
- **color-orange-2 (#FFC107):** Supporting token from the extracted palette.
- **color-red-5 (#FF3D00):** Supporting token from the extracted palette.
- **color-green-2 (#4CAF50):** Supporting token from the extracted palette.
- **color-dark-green-2 (#188038):** Supporting token from the extracted palette.
- **color-blue-8 (#1967D2):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#858585):** Supporting token from the extracted palette.
- **color-orange-3 (#FBBC05):** Supporting token from the extracted palette.
- **color-dark-green-3 (#00832D):** Supporting token from the extracted palette.
- **color-blue-9 (#0066DA):** Supporting token from the extracted palette.
- **color-red-6 (#E94235):** Supporting token from the extracted palette.
- **color-blue-10 (#2684FC):** Supporting token from the extracted palette.
- **color-orange-4 (#FFBA00):** Supporting token from the extracted palette.

## Typography

Primary typeface: **sans-serif, Cal Sans UI Variable Light, Inter, Matter Regular, Cal Sans, Roboto Mono, Matter SemiBold, Matter Medium, CUSTOMV2;Cal Sans UI Regular, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Times, 56px, weight 500.
- **h1:** font Times, 40px, weight 500.
- **h2:** font Times, 20px, weight 500.
- **h3:** font Times, 18px, weight 500.
- **body-lg:** font Times, 16px, weight 500.
- **body-md:** font Times, 14px, weight 500.
- **body-sm:** font Times, 12px, weight 500.
- **caption:** font Times, 10px, weight 500.
- **code:** font sans-serif, 10px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (96px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (640px):** Responsive layout threshold.
- **sm (768px):** Responsive layout threshold.
- **md (809px):** Responsive layout threshold.
- **lg (809.98px):** Responsive layout threshold.
- **xl (810px):** Responsive layout threshold.
- **2xl (1024px):** Responsive layout threshold.
- **3xl (1199px):** Responsive layout threshold.
- **bp-8 (1199.98px):** Responsive layout threshold.
- **breakpoint-xs (640px):** Responsive layout threshold.
- **breakpoint-sm (768px):** Responsive layout threshold.
- **breakpoint-md (809px):** Responsive layout threshold.
- **breakpoint-lg (809.98px):** Responsive layout threshold.
- **breakpoint-xl (810px):** Responsive layout threshold.
- **breakpoint-2xl (1024px):** Responsive layout threshold.
- **breakpoint-3xl (1199px):** Responsive layout threshold.
- **breakpoint-bp-8 (1199.98px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.16) 0px 1px 1.9px 0px inset`
- **md:** `rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.08) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px`
- **lg:** `rgba(36, 36, 36, 0.7) 0px 1px 5px -4px, rgba(36, 36, 36, 0.05) 0px 4px 8px 0px`
- **xl:** `rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.1) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px`
- **shadow-5:** `rgba(255, 255, 255, 0.15) 0px 2px 0px 0px inset`
- **shadow-6:** `rgba(34, 42, 53, 0.05) 0px 4px 8px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0.16) 0px 1px 1.9px 0px inset`
- **shadow-md:** `rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.08) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px`
- **shadow-lg:** `rgba(36, 36, 36, 0.7) 0px 1px 5px -4px, rgba(36, 36, 36, 0.05) 0px 4px 8px 0px`
- **shadow-xl:** `rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.1) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px`
- **shadow-shadow-5:** `rgba(255, 255, 255, 0.15) 0px 2px 0px 0px inset`
- **shadow-shadow-6:** `rgba(34, 42, 53, 0.05) 0px 4px 8px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (2px):** Border radius token.
- **md (4px):** Border radius token.
- **lg (6px):** Border radius token.
- **xl (6.94px):** Border radius token.
- **2xl (7px):** Border radius token.
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
- Avoid pairing --color-blue on --color-black (2.23:1, Fail).
- Avoid pairing --color-blue on --color-mid-gray (2.69:1, Fail).
- Avoid pairing --color-blue on --color-dark-gray (1.65:1, Fail).
