---
version: alpha
name: SpaceX
description: "Converted from UI Inspector extraction of https://www.spacex.com/"
colors:
  primary: "#000000"
  secondary: "#0000EE"
  neutral: "#F0F0FA"
  on-primary: "#F0F0FA"
  color-light-gray-2: "rgba(240, 240, 250, 0.1)"
  color-white-2: "rgba(240, 240, 250, 0.35)"
  color-light-gray: "#D9D9D9"
typography:
  h1:
    fontFamily: Times
    fontSize: 80px
    fontWeight: 400
    lineHeight: 76px
    letterSpacing: 1.6px
  h2:
    fontFamily: Times
    fontSize: 48px
    fontWeight: 400
    lineHeight: 60px
    letterSpacing: 1.6px
  h3:
    fontFamily: Times
    fontSize: 16px
    fontWeight: 400
    lineHeight: 48px
    letterSpacing: 1.6px
  body-md:
    fontFamily: Times
    fontSize: 12px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 1.6px
  code:
    fontFamily: D-DIN
    fontSize: 48px
    fontWeight: 400
rounded:
  sm: 4px
  md: 32px
spacing:
  xs: 10px
  sm: 10px
  md: 16px
  lg: 24px
  xl: 30px
  2xl: 60px
components:
  surface:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  text-muted:
    textColor: "{colors.secondary}"
    typography: body-sm
---

## Overview

This design system was auto-extracted from https://www.spacex.com/ (6 colors · 15 type tokens · 11 spacing steps · 9 breakpoints · 2 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-18T08:19:39.836Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#0000EE):** Muted text, borders, and metadata.
- **neutral (#F0F0FA):** Primary readable text on dark surfaces.
- **on-primary (#F0F0FA):** Text and icons placed on primary surfaces.
- **color-light-gray-2 (rgba(240, 240, 250, 0.1)):** Supporting token from the extracted palette.
- **color-white-2 (rgba(240, 240, 250, 0.35)):** Supporting token from the extracted palette.
- **color-light-gray (#D9D9D9):** Supporting token from the extracted palette.

## Typography

Primary typeface: **D-DIN, D-DIN-Bold, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **h1:** font Times, 80px, weight 400.
- **h2:** font Times, 48px, weight 400.
- **h3:** font Times, 16px, weight 400.
- **body-md:** font Times, 12px, weight 400.
- **code:** font D-DIN, 48px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (10px):** Layout rhythm and component padding.
- **sm (10px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (30px):** Layout rhythm and component padding.
- **2xl (60px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (599.98px):** Responsive layout threshold.
- **sm (600px):** Responsive layout threshold.
- **md (959.98px):** Responsive layout threshold.
- **lg (960px):** Responsive layout threshold.
- **xl (961px):** Responsive layout threshold.
- **2xl (1279px):** Responsive layout threshold.
- **3xl (1279.98px):** Responsive layout threshold.
- **bp-8 (1350px):** Responsive layout threshold.
- **bp-9 (1500px):** Responsive layout threshold.
- **breakpoint-xs (599.98px):** Responsive layout threshold.
- **breakpoint-sm (600px):** Responsive layout threshold.
- **breakpoint-md (959.98px):** Responsive layout threshold.
- **breakpoint-lg (960px):** Responsive layout threshold.
- **breakpoint-xl (961px):** Responsive layout threshold.
- **breakpoint-2xl (1279px):** Responsive layout threshold.
- **breakpoint-3xl (1279.98px):** Responsive layout threshold.
- **breakpoint-bp-8 (1350px):** Responsive layout threshold.
- **breakpoint-bp-9 (1500px):** Responsive layout threshold.

## Elevation & Depth

Elevation is minimal in the extracted system — surfaces rely on contrast and borders rather than heavy shadows.

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (4px):** Border radius token.
- **md (32px):** Border radius token.

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
- Avoid pairing --color-white on --color-light-gray-2 (1.05:1, Fail).
- Avoid pairing --color-blue on --color-black (2.23:1, Fail).
