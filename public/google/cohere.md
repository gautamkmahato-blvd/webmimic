---
version: alpha
name: "Enterprise AI: Private, Secure, Customizable"
description: "Converted from UI Inspector extraction of https://cohere.com/"
colors:
  primary: "#000000"
  secondary: "#A4A4A4"
  tertiary: "#00A1DF"
  neutral: "#212121"
  on-primary: "#212121"
  on-tertiary: "#FFFFFF"
  color-dark-gray-2: "#17171C"
  color-light-gray-2: "#F2F2F2"
  color-red: "#FF7759"
  color-blue-2: "#4C6EE6"
  color-light-purple: "#D18EE2"
  color-light-pink: "#F0DFF3"
  color-light-gray-4: "#F0EEE9"
  color-dark-gray-9: "#2E2E2E"
  color-purple: "#9B60AA"
  color-white-2: "#FAFAFA"
  color-blue: "#75758A"
  color-dark-gray-8: "#616161"
  color-mid-gray-3: "#93939F"
  color-light-gray-5: "#BDBDBD"
  color-light-gray: "#E5E7EB"
  color-light-gray-3: "#D9D9DD"
  color-mid-gray-5: "rgba(172, 171, 171, 0.3)"
  color-dark-gray-3: "#212129"
  color-dark-gray-4: "#17171B"
  color-blue-3: "#7670C5"
  color-mid-gray: "#93939E"
  color-dark-gray-6: "rgba(33, 33, 33, 0.4)"
  color-dark-gray-7: "rgba(33, 33, 33, 0.2)"
  color-mid-gray-4: "#808080"
  color-dark-green: "#00AA28"
  color-dark-blue: "#152455"
  color-mid-gray-6: "#8E8E90"
  color-blue-4: "#0066D9"
  color-dark-green-2: "#00AB46"
  color-red-2: "#E94234"
  color-dark-green-3: "#00822D"
  color-blue-5: "#2583FB"
  color-orange: "#FFB900"
  color-dark-gray-5: "#2E2E37"
typography:
  display:
    fontFamily: InterRegular
    fontSize: 72px
    fontWeight: 500
    lineHeight: 72px
    letterSpacing: -1.2px
  h1:
    fontFamily: InterRegular
    fontSize: 60px
    fontWeight: 500
    lineHeight: 60px
    letterSpacing: -1.2px
  h2:
    fontFamily: InterRegular
    fontSize: 48px
    fontWeight: 500
    lineHeight: 57.6px
    letterSpacing: -1.2px
  h3:
    fontFamily: InterRegular
    fontSize: 32px
    fontWeight: 500
    lineHeight: 38.4px
    letterSpacing: -1.2px
  body-lg:
    fontFamily: InterRegular
    fontSize: 24px
    fontWeight: 500
    lineHeight: 31.2px
    letterSpacing: -1.2px
  body-md:
    fontFamily: InterRegular
    fontSize: 18px
    fontWeight: 500
    lineHeight: 25.2px
    letterSpacing: -1.2px
  body-sm:
    fontFamily: InterRegular
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: -1.2px
  caption:
    fontFamily: InterRegular
    fontSize: 14px
    fontWeight: 500
    lineHeight: 22.4px
    letterSpacing: -1.2px
  code:
    fontFamily: "Unica77 Cohere Web"
    fontSize: 12px
    fontWeight: 400
rounded:
  sm: "0px 2px 2px 0px"
  md: "0px 0px 22px 22px"
  lg: 2px
  xl: "2px 0px 0px 2px"
  2xl: 4px
  full: 6px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 176px
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

This design system was auto-extracted from https://cohere.com/ (39 colors · 36 type tokens · 23 spacing steps · 26 breakpoints · 7 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-14T18:54:23.051Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#A4A4A4):** Muted text, borders, and metadata.
- **tertiary (#00A1DF):** Primary accent for links, buttons, and focus states.
- **neutral (#212121):** Primary readable text on dark surfaces.
- **on-primary (#212121):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-dark-gray-2 (#17171C):** Supporting token from the extracted palette.
- **color-light-gray-2 (#F2F2F2):** Supporting token from the extracted palette.
- **color-red (#FF7759):** Supporting token from the extracted palette.
- **color-blue-2 (#4C6EE6):** Supporting token from the extracted palette.
- **color-light-purple (#D18EE2):** Supporting token from the extracted palette.
- **color-light-pink (#F0DFF3):** Supporting token from the extracted palette.
- **color-light-gray-4 (#F0EEE9):** Supporting token from the extracted palette.
- **color-dark-gray-9 (#2E2E2E):** Supporting token from the extracted palette.
- **color-purple (#9B60AA):** Supporting token from the extracted palette.
- **color-white-2 (#FAFAFA):** Supporting token from the extracted palette.
- **color-blue (#75758A):** Supporting token from the extracted palette.
- **color-dark-gray-8 (#616161):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#93939F):** Supporting token from the extracted palette.
- **color-light-gray-5 (#BDBDBD):** Supporting token from the extracted palette.
- **color-light-gray (#E5E7EB):** Supporting token from the extracted palette.
- **color-light-gray-3 (#D9D9DD):** Supporting token from the extracted palette.
- **color-mid-gray-5 (rgba(172, 171, 171, 0.3)):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#212129):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#17171B):** Supporting token from the extracted palette.
- **color-blue-3 (#7670C5):** Supporting token from the extracted palette.
- **color-mid-gray (#93939E):** Supporting token from the extracted palette.
- **color-dark-gray-6 (rgba(33, 33, 33, 0.4)):** Supporting token from the extracted palette.
- **color-dark-gray-7 (rgba(33, 33, 33, 0.2)):** Supporting token from the extracted palette.
- **color-mid-gray-4 (#808080):** Supporting token from the extracted palette.
- **color-dark-green (#00AA28):** Supporting token from the extracted palette.
- **color-dark-blue (#152455):** Supporting token from the extracted palette.
- **color-mid-gray-6 (#8E8E90):** Supporting token from the extracted palette.
- **color-blue-4 (#0066D9):** Supporting token from the extracted palette.
- **color-dark-green-2 (#00AB46):** Supporting token from the extracted palette.
- **color-red-2 (#E94234):** Supporting token from the extracted palette.
- **color-dark-green-3 (#00822D):** Supporting token from the extracted palette.
- **color-blue-5 (#2583FB):** Supporting token from the extracted palette.
- **color-orange (#FFB900):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#2E2E37):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Unica77 Cohere Web, CohereMono, CohereText, Family, InterRegular**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font InterRegular, 72px, weight 500.
- **h1:** font InterRegular, 60px, weight 500.
- **h2:** font InterRegular, 48px, weight 500.
- **h3:** font InterRegular, 32px, weight 500.
- **body-lg:** font InterRegular, 24px, weight 500.
- **body-md:** font InterRegular, 18px, weight 500.
- **body-sm:** font InterRegular, 16px, weight 500.
- **caption:** font InterRegular, 14px, weight 500.
- **code:** font Unica77 Cohere Web, 12px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (176px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (336px):** Responsive layout threshold.
- **sm (352px):** Responsive layout threshold.
- **md (410px):** Responsive layout threshold.
- **lg (425px):** Responsive layout threshold.
- **xl (440px):** Responsive layout threshold.
- **2xl (460px):** Responsive layout threshold.
- **3xl (480px):** Responsive layout threshold.
- **bp-8 (510px):** Responsive layout threshold.
- **bp-9 (540px):** Responsive layout threshold.
- **bp-10 (550px):** Responsive layout threshold.
- **bp-11 (576px):** Responsive layout threshold.
- **bp-12 (640px):** Responsive layout threshold.
- **bp-13 (660px):** Responsive layout threshold.
- **bp-14 (767px):** Responsive layout threshold.
- **bp-15 (768px):** Responsive layout threshold.
- **bp-16 (845px):** Responsive layout threshold.
- **bp-17 (918px):** Responsive layout threshold.
- **bp-18 (919px):** Responsive layout threshold.
- **bp-19 (1023px):** Responsive layout threshold.
- **bp-20 (1024px):** Responsive layout threshold.
- **bp-21 (1279px):** Responsive layout threshold.
- **bp-22 (1280px):** Responsive layout threshold.
- **bp-23 (1440px):** Responsive layout threshold.
- **bp-24 (1536px):** Responsive layout threshold.
- **bp-25 (1600px):** Responsive layout threshold.
- **bp-26 (2560px):** Responsive layout threshold.
- **breakpoint-xs (336px):** Responsive layout threshold.
- **breakpoint-sm (352px):** Responsive layout threshold.
- **breakpoint-md (410px):** Responsive layout threshold.
- **breakpoint-lg (425px):** Responsive layout threshold.
- **breakpoint-xl (440px):** Responsive layout threshold.
- **breakpoint-2xl (460px):** Responsive layout threshold.
- **breakpoint-3xl (480px):** Responsive layout threshold.
- **breakpoint-bp-8 (510px):** Responsive layout threshold.
- **breakpoint-bp-9 (540px):** Responsive layout threshold.
- **breakpoint-bp-10 (550px):** Responsive layout threshold.
- **breakpoint-bp-11 (576px):** Responsive layout threshold.
- **breakpoint-bp-12 (640px):** Responsive layout threshold.
- **breakpoint-bp-13 (660px):** Responsive layout threshold.
- **breakpoint-bp-14 (767px):** Responsive layout threshold.
- **breakpoint-bp-15 (768px):** Responsive layout threshold.
- **breakpoint-bp-16 (845px):** Responsive layout threshold.
- **breakpoint-bp-17 (918px):** Responsive layout threshold.
- **breakpoint-bp-18 (919px):** Responsive layout threshold.
- **breakpoint-bp-19 (1023px):** Responsive layout threshold.
- **breakpoint-bp-20 (1024px):** Responsive layout threshold.
- **breakpoint-bp-21 (1279px):** Responsive layout threshold.
- **breakpoint-bp-22 (1280px):** Responsive layout threshold.
- **breakpoint-bp-23 (1440px):** Responsive layout threshold.
- **breakpoint-bp-24 (1536px):** Responsive layout threshold.
- **breakpoint-bp-25 (1600px):** Responsive layout threshold.
- **breakpoint-bp-26 (2560px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(172, 171, 171, 0.3) 0px -1px 10px 0px`
- **md:** `rgba(0, 0, 0, 0.3) 0px 32px 68px 0px`
- **lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 2px 2px 0px`
- **shadow-sm:** `rgba(172, 171, 171, 0.3) 0px -1px 10px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0.3) 0px 32px 68px 0px`
- **shadow-lg:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 2px 2px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 2px 2px 0px):** Border radius token.
- **md (0px 0px 22px 22px):** Border radius token.
- **lg (2px):** Border radius token.
- **xl (2px 0px 0px 2px):** Border radius token.
- **2xl (4px):** Border radius token.
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
- Avoid pairing --color-dark-gray on --color-black (1.3:1, Fail).
- Avoid pairing --color-dark-gray on --color-dark-gray-2 (1.11:1, Fail).
- Avoid pairing --color-white-2 on --color-white (1.04:1, Fail).
