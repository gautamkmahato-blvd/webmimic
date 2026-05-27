---
version: alpha
name: Claude
description: "Converted from UI Inspector extraction of https://claude.ai/new"
colors:
  primary: "#373734"
  secondary: "rgba(123, 121, 116, 0.15)"
  tertiary: "#2977D6"
  neutral: "#121212"
  on-primary: "#121212"
  on-tertiary: "#FFFFFF"
  color-white: "#F8F8F6"
  color-light-gray-2: "#EFEEEB"
  color-mid-gray-3: "rgba(123, 121, 116, 0.3)"
  color-black: "#000000"
  color-mid-gray: "#7B7974"
  color-red: "#D97757"
  color-dark-gray: "#1F1F1E"
  color-dark-gray-4: "rgba(31, 31, 30, 0.15)"
  color-white-2: "#F4F4F1"
  color-light-gray: "rgba(244, 244, 241, 0.05)"
  color-white-3: "rgba(244, 244, 241, 0.3)"
typography:
  h1:
    fontFamily: "Anthropic Sans"
    fontSize: 40px
    fontWeight: 500
    lineHeight: 60px
  h2:
    fontFamily: "Anthropic Sans"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  h3:
    fontFamily: "Anthropic Sans"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 22.4px
  body-md:
    fontFamily: "Anthropic Sans"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 19.6px
  code:
    fontFamily: "Anthropic Serif"
    fontSize: 16px
    fontWeight: 400
rounded:
  sm: 6px
  md: 8px
  lg: 20px
  xl: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 174.102px
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

This design system was auto-extracted from https://claude.ai/new (16 colors · 18 type tokens · 15 spacing steps · 12 breakpoints · 7 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-12T17:40:44.808Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#373734):** Core surface and headline color.
- **secondary (rgba(123, 121, 116, 0.15)):** Muted text, borders, and metadata.
- **tertiary (#2977D6):** Primary accent for links, buttons, and focus states.
- **neutral (#121212):** Primary readable text on dark surfaces.
- **on-primary (#121212):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-white (#F8F8F6):** Supporting token from the extracted palette.
- **color-light-gray-2 (#EFEEEB):** Supporting token from the extracted palette.
- **color-mid-gray-3 (rgba(123, 121, 116, 0.3)):** Supporting token from the extracted palette.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-mid-gray (#7B7974):** Supporting token from the extracted palette.
- **color-red (#D97757):** Supporting token from the extracted palette.
- **color-dark-gray (#1F1F1E):** Supporting token from the extracted palette.
- **color-dark-gray-4 (rgba(31, 31, 30, 0.15)):** Supporting token from the extracted palette.
- **color-white-2 (#F4F4F1):** Supporting token from the extracted palette.
- **color-light-gray (rgba(244, 244, 241, 0.05)):** Supporting token from the extracted palette.
- **color-white-3 (rgba(244, 244, 241, 0.3)):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Anthropic Serif, system-ui, Family, Anthropic Sans**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **h1:** font Anthropic Sans, 40px, weight 500.
- **h2:** font Anthropic Sans, 16px, weight 500.
- **h3:** font Anthropic Sans, 14px, weight 500.
- **body-md:** font Anthropic Sans, 12px, weight 500.
- **code:** font Anthropic Serif, 16px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (174.102px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (350px):** Responsive layout threshold.
- **sm (500px):** Responsive layout threshold.
- **md (640px):** Responsive layout threshold.
- **lg (768px):** Responsive layout threshold.
- **xl (840px):** Responsive layout threshold.
- **2xl (1000px):** Responsive layout threshold.
- **3xl (1024px):** Responsive layout threshold.
- **bp-8 (1200px):** Responsive layout threshold.
- **bp-9 (1280px):** Responsive layout threshold.
- **bp-10 (1400px):** Responsive layout threshold.
- **bp-11 (1536px):** Responsive layout threshold.
- **bp-12 (1562px):** Responsive layout threshold.
- **breakpoint-xs (350px):** Responsive layout threshold.
- **breakpoint-sm (500px):** Responsive layout threshold.
- **breakpoint-md (640px):** Responsive layout threshold.
- **breakpoint-lg (768px):** Responsive layout threshold.
- **breakpoint-xl (840px):** Responsive layout threshold.
- **breakpoint-2xl (1000px):** Responsive layout threshold.
- **breakpoint-3xl (1024px):** Responsive layout threshold.
- **breakpoint-bp-8 (1200px):** Responsive layout threshold.
- **breakpoint-bp-9 (1280px):** Responsive layout threshold.
- **breakpoint-bp-10 (1400px):** Responsive layout threshold.
- **breakpoint-bp-11 (1536px):** Responsive layout threshold.
- **breakpoint-bp-12 (1562px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.035) 0px 4px 20px 0px, rgba(31, 31, 30, 0.15) 0px 0px 0px 0.5px`
- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.035) 0px 4px 20px 0px, rgba(31, 31, 30, 0.15) 0px 0px 0px 0.5px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (6px):** Border radius token.
- **md (8px):** Border radius token.
- **lg (20px):** Border radius token.
- **xl (9999px):** Border radius token.

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
- Avoid pairing --color-dark-gray-2 on --color-dark-gray-3 (1.57:1, Fail).
- Avoid pairing --color-black on --color-dark-gray-3 (1.76:1, Fail).
- Avoid pairing --color-mid-gray on --color-dark-gray-3 (2.75:1, Fail).
