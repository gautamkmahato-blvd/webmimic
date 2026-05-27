---
version: alpha
name: "Y Combinator"
description: "Converted from UI Inspector extraction of https://www.ycombinator.com/"
colors:
  primary: "#000000"
  secondary: "#8A8575"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  color-light-gray: "#F5F5EE"
  color-dark-gray: "#16140F"
  color-light-gray-2: "#E5E7EB"
typography:
  display:
    fontFamily: Outfit
    fontSize: 72.65px
    fontWeight: 500
    lineHeight: 79.915px
    letterSpacing: -0.4px
  h1:
    fontFamily: Outfit
    fontSize: 60px
    fontWeight: 500
    lineHeight: 66px
    letterSpacing: -0.4px
  h2:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: 500
    lineHeight: 60px
    letterSpacing: -0.4px
  h3:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: 500
    lineHeight: 57.6px
    letterSpacing: -0.4px
  body-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: 500
    lineHeight: 42px
    letterSpacing: -0.4px
  body-md:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: 500
    lineHeight: 38.4px
    letterSpacing: -0.4px
  body-sm:
    fontFamily: Outfit
    fontSize: 22px
    fontWeight: 500
    lineHeight: 32.64px
    letterSpacing: -0.4px
  caption:
    fontFamily: Outfit
    fontSize: 20px
    fontWeight: 500
    lineHeight: 28.6px
    letterSpacing: -0.4px
  code:
    fontFamily: "Source Serif 4"
    fontSize: 14px
    fontWeight: 400
rounded:
  sm: "0px 0px 12px 12px"
  md: 4px
  lg: 6px
  xl: 8px
  2xl: 12px
  full: "1.67772e+07px"
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 346.789px
components:
  surface:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  text-muted:
    textColor: "{colors.secondary}"
    typography: body-sm
---

## Overview

This design system was auto-extracted from https://www.ycombinator.com/ (6 colors · 54 type tokens · 25 spacing steps · 16 breakpoints · 9 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-15T18:10:12.711Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#8A8575):** Muted text, borders, and metadata.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **color-light-gray (#F5F5EE):** Supporting token from the extracted palette.
- **color-dark-gray (#16140F):** Supporting token from the extracted palette.
- **color-light-gray-2 (#E5E7EB):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Source Serif 4, Family, Outfit**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Outfit, 72.65px, weight 500.
- **h1:** font Outfit, 60px, weight 500.
- **h2:** font Outfit, 48px, weight 500.
- **h3:** font Outfit, 40px, weight 500.
- **body-lg:** font Outfit, 32px, weight 500.
- **body-md:** font Outfit, 28px, weight 500.
- **body-sm:** font Outfit, 22px, weight 500.
- **caption:** font Outfit, 20px, weight 500.
- **code:** font Source Serif 4, 14px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (346.789px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (350px):** Responsive layout threshold.
- **sm (400px):** Responsive layout threshold.
- **md (450px):** Responsive layout threshold.
- **lg (500px):** Responsive layout threshold.
- **xl (550px):** Responsive layout threshold.
- **2xl (639.9px):** Responsive layout threshold.
- **3xl (640px):** Responsive layout threshold.
- **bp-8 (650px):** Responsive layout threshold.
- **bp-9 (700px):** Responsive layout threshold.
- **bp-10 (768px):** Responsive layout threshold.
- **bp-11 (850px):** Responsive layout threshold.
- **bp-12 (900px):** Responsive layout threshold.
- **bp-13 (950px):** Responsive layout threshold.
- **bp-14 (1000px):** Responsive layout threshold.
- **bp-15 (1100px):** Responsive layout threshold.
- **bp-16 (1200px):** Responsive layout threshold.
- **breakpoint-xs (350px):** Responsive layout threshold.
- **breakpoint-sm (400px):** Responsive layout threshold.
- **breakpoint-md (450px):** Responsive layout threshold.
- **breakpoint-lg (500px):** Responsive layout threshold.
- **breakpoint-xl (550px):** Responsive layout threshold.
- **breakpoint-2xl (639.9px):** Responsive layout threshold.
- **breakpoint-3xl (640px):** Responsive layout threshold.
- **breakpoint-bp-8 (650px):** Responsive layout threshold.
- **breakpoint-bp-9 (700px):** Responsive layout threshold.
- **breakpoint-bp-10 (768px):** Responsive layout threshold.
- **breakpoint-bp-11 (850px):** Responsive layout threshold.
- **breakpoint-bp-12 (900px):** Responsive layout threshold.
- **breakpoint-bp-13 (950px):** Responsive layout threshold.
- **breakpoint-bp-14 (1000px):** Responsive layout threshold.
- **breakpoint-bp-15 (1100px):** Responsive layout threshold.
- **breakpoint-bp-16 (1200px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.15) 0px 8px 32px 0px`
- **md:** `rgba(0, 0, 0, 0.08) 0px 4px 20px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.15) 0px 8px 32px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0.08) 0px 4px 20px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 0px 12px 12px):** Border radius token.
- **md (4px):** Border radius token.
- **lg (6px):** Border radius token.
- **xl (8px):** Border radius token.
- **2xl (12px):** Border radius token.
- **full (1.67772e+07px):** Border radius token.

## Components

Component tokens map semantic colors and shapes to reusable UI patterns.

- **surface:** backgroundColor {colors.primary}, textColor {colors.on-primary}.
- **text-muted:** textColor {colors.secondary}, typography body-sm.

## Do's and Don'ts

- **Do** use the accent color sparingly for primary actions and active states.
- **Do** maintain high contrast between text and background tokens.
- **Don't** introduce new colors outside the extracted palette without updating the YAML tokens.
- **Don't** mix arbitrary spacing values — use the spacing scale.

**Accessibility notes from extraction:**
- Avoid pairing --color-dark-gray on --color-black (1.14:1, Fail).
