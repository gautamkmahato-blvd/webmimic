---
version: alpha
name: Prisma
description: "Converted from UI Inspector extraction of https://www.prisma.io/"
colors:
  primary: "#000000"
  secondary: "rgba(172, 171, 171, 0.3)"
  tertiary: "#14B8A6"
  neutral: "#1D242F"
  on-primary: "#1D242F"
  on-tertiary: "#FFFFFF"
  color-blue: "#6B7280"
  color-dark-cyan: "#0D9488"
  color-dark-blue-3: "#1F2937"
  color-white-2: "#F0FDFA"
  color-white-3: "#F4F4F4"
  color-blue-4: "#5A67D8"
  color-white-4: "#F3F4F6"
  color-white-5: "#F7FAFC"
  color-light-cyan: "#CCFBF1"
  color-dark-blue-2: "#111827"
  color-dark-gray: "#212121"
  color-blue-2: "#718096"
  color-dark-blue-4: "#4A5568"
  color-blue-3: "#9CA3AF"
  color-dark-blue-5: "#2D3748"
  color-blue-5: "#1863DC"
  color-cyan-2: "#16A394"
  color-light-gray: "#E2E8F0"
  color-light-gray-2: "#E5E7EB"
  color-light-gray-3: "#EBEBEB"
typography:
  display:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: 500
    lineHeight: 72px
    letterSpacing: 1.6px
  h1:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: 500
    lineHeight: 48px
    letterSpacing: 1.6px
  h2:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: 500
    lineHeight: 36px
    letterSpacing: 1.6px
  h3:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: 1.6px
  body-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: 1.6px
  body-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 500
    lineHeight: 25.02px
    letterSpacing: 1.6px
  body-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: 1.6px
  caption:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 22px
    letterSpacing: 1.6px
  code:
    fontFamily: "Mona Sans VF"
    fontSize: 14px
    fontWeight: 400
rounded:
  sm: 2px
  md: 6px
  lg: 8px
  xl: 9px
  2xl: 10px
  full: 12px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 349px
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

This design system was auto-extracted from https://www.prisma.io/ (25 colors · 32 type tokens · 19 spacing steps · 8 breakpoints · 4 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-18T18:48:58.407Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (rgba(172, 171, 171, 0.3)):** Muted text, borders, and metadata.
- **tertiary (#14B8A6):** Primary accent for links, buttons, and focus states.
- **neutral (#1D242F):** Primary readable text on dark surfaces.
- **on-primary (#1D242F):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-blue (#6B7280):** Supporting token from the extracted palette.
- **color-dark-cyan (#0D9488):** Supporting token from the extracted palette.
- **color-dark-blue-3 (#1F2937):** Supporting token from the extracted palette.
- **color-white-2 (#F0FDFA):** Supporting token from the extracted palette.
- **color-white-3 (#F4F4F4):** Supporting token from the extracted palette.
- **color-blue-4 (#5A67D8):** Supporting token from the extracted palette.
- **color-white-4 (#F3F4F6):** Supporting token from the extracted palette.
- **color-white-5 (#F7FAFC):** Supporting token from the extracted palette.
- **color-light-cyan (#CCFBF1):** Supporting token from the extracted palette.
- **color-dark-blue-2 (#111827):** Supporting token from the extracted palette.
- **color-dark-gray (#212121):** Supporting token from the extracted palette.
- **color-blue-2 (#718096):** Supporting token from the extracted palette.
- **color-dark-blue-4 (#4A5568):** Supporting token from the extracted palette.
- **color-blue-3 (#9CA3AF):** Supporting token from the extracted palette.
- **color-dark-blue-5 (#2D3748):** Supporting token from the extracted palette.
- **color-blue-5 (#1863DC):** Supporting token from the extracted palette.
- **color-cyan-2 (#16A394):** Supporting token from the extracted palette.
- **color-light-gray (#E2E8F0):** Supporting token from the extracted palette.
- **color-light-gray-2 (#E5E7EB):** Supporting token from the extracted palette.
- **color-light-gray-3 (#EBEBEB):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Mona Sans VF, Mona Sans Mono VF, Family, Inter**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Inter, 64px, weight 500.
- **h1:** font Inter, 40px, weight 500.
- **h2:** font Inter, 36px, weight 500.
- **h3:** font Inter, 30px, weight 500.
- **body-lg:** font Inter, 24px, weight 500.
- **body-md:** font Inter, 18px, weight 500.
- **body-sm:** font Inter, 16px, weight 500.
- **caption:** font Inter, 14px, weight 500.
- **code:** font Mona Sans VF, 14px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (349px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (352px):** Responsive layout threshold.
- **sm (425px):** Responsive layout threshold.
- **md (440px):** Responsive layout threshold.
- **lg (480px):** Responsive layout threshold.
- **xl (576px):** Responsive layout threshold.
- **2xl (660px):** Responsive layout threshold.
- **3xl (768px):** Responsive layout threshold.
- **bp-8 (845px):** Responsive layout threshold.
- **breakpoint-xs (352px):** Responsive layout threshold.
- **breakpoint-sm (425px):** Responsive layout threshold.
- **breakpoint-md (440px):** Responsive layout threshold.
- **breakpoint-lg (480px):** Responsive layout threshold.
- **breakpoint-xl (576px):** Responsive layout threshold.
- **breakpoint-2xl (660px):** Responsive layout threshold.
- **breakpoint-3xl (768px):** Responsive layout threshold.
- **breakpoint-bp-8 (845px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px`
- **md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 25px -5px`
- **lg:** `rgba(172, 171, 171, 0.3) 0px -1px 10px 0px`
- **xl:** `rgba(0, 0, 0, 0.3) 0px 32px 68px 0px`
- **shadow-5:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.04) 0px 8px 16px -4px, rgba(0, 0, 0, 0.04) 0px 2px 2px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 25px -5px`
- **shadow-lg:** `rgba(172, 171, 171, 0.3) 0px -1px 10px 0px`
- **shadow-xl:** `rgba(0, 0, 0, 0.3) 0px 32px 68px 0px`
- **shadow-shadow-5:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.04) 0px 8px 16px -4px, rgba(0, 0, 0, 0.04) 0px 2px 2px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (2px):** Border radius token.
- **md (6px):** Border radius token.
- **lg (8px):** Border radius token.
- **xl (9px):** Border radius token.
- **2xl (10px):** Border radius token.
- **full (12px):** Border radius token.

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
- Avoid pairing --color-dark-blue on --color-black (1.35:1, Fail).
- Avoid pairing --color-dark-blue-2 on --color-black (1.18:1, Fail).
- Avoid pairing --color-dark-gray on --color-black (1.3:1, Fail).
