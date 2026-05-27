---
version: alpha
name: "Frontier AI LLMs, assistants, agents, services"
description: "Converted from UI Inspector extraction of https://mistral.ai/"
colors:
  primary: "#FFFAEB"
  tertiary: "#FA520F"
  neutral: "#FFFAEB"
  on-primary: "#FFFAEB"
  on-tertiary: "#FFFFFF"
  color-dark-gray: "#1F1F1F"
  color-black: "#000000"
  color-light-yellow: "#FFF0C2"
  color-yellow: "#FFD900"
  color-orange-5: "#FFAE00"
  color-orange-6: "#FF8205"
  color-red: "#E00400"
  color-dark-gray-2: "#3C3C3C"
  color-light-yellow-2: "#ECDAA2"
  color-dark-yellow: "rgba(127, 99, 21, 0.12)"
  color-dark-orange: "rgba(127, 99, 21, 0.1)"
  color-dark-yellow-2: "rgba(127, 99, 21, 0.06)"
  color-orange-2: "#9F521A"
  color-orange-3: "#D3812F"
  color-orange-4: "#B35D20"
typography:
  display:
    fontFamily: Arial
    fontSize: 82px
    fontWeight: 400
    lineHeight: 82px
    letterSpacing: -2.05px
  h1:
    fontFamily: Arial
    fontSize: 56px
    fontWeight: 400
    lineHeight: 53.2px
    letterSpacing: -2.05px
  h2:
    fontFamily: Arial
    fontSize: 48px
    fontWeight: 400
    lineHeight: 48px
    letterSpacing: -2.05px
  h3:
    fontFamily: Arial
    fontSize: 32px
    fontWeight: 400
    lineHeight: 45.6px
    letterSpacing: -2.05px
  body-lg:
    fontFamily: Arial
    fontSize: 30px
    fontWeight: 400
    lineHeight: 36.8px
    letterSpacing: -2.05px
  body-md:
    fontFamily: Arial
    fontSize: 24px
    fontWeight: 400
    lineHeight: 36px
    letterSpacing: -2.05px
  body-sm:
    fontFamily: Arial
    fontSize: 16px
    fontWeight: 400
    lineHeight: 32px
    letterSpacing: -2.05px
  caption:
    fontFamily: Arial
    fontSize: 14px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: -2.05px
rounded:
  sm: "1.67772e+07px"
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 318px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: 8px
    padding: 12px
  button-primary-hover:
    backgroundColor: "{colors.tertiary}"
  surface:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
---

## Overview

This design system was auto-extracted from https://mistral.ai/ (18 colors · 21 type tokens · 22 spacing steps · 4 breakpoints · 4 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-15T18:11:44.795Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#FFFAEB):** Core surface and headline color.
- **tertiary (#FA520F):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFAEB):** Primary readable text on dark surfaces.
- **on-primary (#FFFAEB):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-dark-gray (#1F1F1F):** Supporting token from the extracted palette.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-light-yellow (#FFF0C2):** Supporting token from the extracted palette.
- **color-yellow (#FFD900):** Supporting token from the extracted palette.
- **color-orange-5 (#FFAE00):** Supporting token from the extracted palette.
- **color-orange-6 (#FF8205):** Supporting token from the extracted palette.
- **color-red (#E00400):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#3C3C3C):** Supporting token from the extracted palette.
- **color-light-yellow-2 (#ECDAA2):** Supporting token from the extracted palette.
- **color-dark-yellow (rgba(127, 99, 21, 0.12)):** Supporting token from the extracted palette.
- **color-dark-orange (rgba(127, 99, 21, 0.1)):** Supporting token from the extracted palette.
- **color-dark-yellow-2 (rgba(127, 99, 21, 0.06)):** Supporting token from the extracted palette.
- **color-orange-2 (#9F521A):** Supporting token from the extracted palette.
- **color-orange-3 (#D3812F):** Supporting token from the extracted palette.
- **color-orange-4 (#B35D20):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Family, Arial**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Arial, 82px, weight 400.
- **h1:** font Arial, 56px, weight 400.
- **h2:** font Arial, 48px, weight 400.
- **h3:** font Arial, 32px, weight 400.
- **body-lg:** font Arial, 30px, weight 400.
- **body-md:** font Arial, 24px, weight 400.
- **body-sm:** font Arial, 16px, weight 400.
- **caption:** font Arial, 14px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (318px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (640px):** Responsive layout threshold.
- **sm (768px):** Responsive layout threshold.
- **md (1024px):** Responsive layout threshold.
- **lg (1280px):** Responsive layout threshold.
- **breakpoint-xs (640px):** Responsive layout threshold.
- **breakpoint-sm (768px):** Responsive layout threshold.
- **breakpoint-md (1024px):** Responsive layout threshold.
- **breakpoint-lg (1280px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(127, 99, 21, 0.12) -8px 16px 39px 0px, rgba(127, 99, 21, 0.1) -33px 64px 72px 0px, rgba(127, 99, 21, 0.06) -73px 144px 97px 0px, rgba(127, 99, 21, 0.02) -130px 256px 115px 0px, rgba(127, 99, 21, 0) -203px 400px 126px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(127, 99, 21, 0.12) -8px 16px 39px 0px, rgba(127, 99, 21, 0.1) -33px 64px 72px 0px, rgba(127, 99, 21, 0.06) -73px 144px 97px 0px, rgba(127, 99, 21, 0.02) -130px 256px 115px 0px, rgba(127, 99, 21, 0) -203px 400px 126px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (1.67772e+07px):** Border radius token.

## Components

Component tokens map semantic colors and shapes to reusable UI patterns.

- **button-primary:** backgroundColor {colors.tertiary}, textColor {colors.on-tertiary}, rounded 8px, padding 12px.
- **button-primary-hover:** backgroundColor {colors.tertiary}.
- **surface:** backgroundColor {colors.primary}, textColor {colors.on-primary}.

## Do's and Don'ts

- **Do** use the accent color sparingly for primary actions and active states.
- **Do** maintain high contrast between text and background tokens.
- **Don't** introduce new colors outside the extracted palette without updating the YAML tokens.
- **Don't** mix arbitrary spacing values — use the spacing scale.

**Accessibility notes from extraction:**
- Avoid pairing --color-dark-gray-2 on --color-dark-gray (1.49:1, Fail).
- Avoid pairing --color-dark-gray-2 on --color-black (1.9:1, Fail).
