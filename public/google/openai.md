---
version: alpha
name: OpenAI
description: "Converted from UI Inspector extraction of https://openai.com/"
colors:
  primary: "#000000"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  color-light-gray-2: "#F1F1F1"
  color-light-gray: "#E5E7EB"
typography:
  display:
    fontFamily: "OpenAI Sans"
    fontSize: 43.3878px
    fontWeight: 500
    lineHeight: 50.1454px
    letterSpacing: -0.214235px
  h1:
    fontFamily: "OpenAI Sans"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 34px
    letterSpacing: -0.214235px
  h2:
    fontFamily: "OpenAI Sans"
    fontSize: 21.4235px
    fontWeight: 500
    lineHeight: 27.999px
    letterSpacing: -0.214235px
  h3:
    fontFamily: "OpenAI Sans"
    fontSize: 17.4235px
    fontWeight: 500
    lineHeight: 26.6477px
    letterSpacing: -0.214235px
  body-lg:
    fontFamily: "OpenAI Sans"
    fontSize: 17px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: -0.214235px
  body-md:
    fontFamily: "OpenAI Sans"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 22.6761px
    letterSpacing: -0.214235px
  body-sm:
    fontFamily: "OpenAI Sans"
    fontSize: 14.5765px
    fontWeight: 500
    lineHeight: 22.1067px
    letterSpacing: -0.214235px
  caption:
    fontFamily: "OpenAI Sans"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 19.6px
    letterSpacing: -0.214235px
rounded:
  sm: 4px
  md: 6.08px
  lg: 24px
  xl: 40px
  2xl: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 392.805px
components:
  surface:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
---

## Overview

This design system was auto-extracted from https://openai.com/ (4 colors · 30 type tokens · 22 spacing steps · 5 breakpoints · 9 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-17T07:44:09.094Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **color-light-gray-2 (#F1F1F1):** Supporting token from the extracted palette.
- **color-light-gray (#E5E7EB):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Family, OpenAI Sans**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font OpenAI Sans, 43.3878px, weight 500.
- **h1:** font OpenAI Sans, 28px, weight 500.
- **h2:** font OpenAI Sans, 21.4235px, weight 500.
- **h3:** font OpenAI Sans, 17.4235px, weight 500.
- **body-lg:** font OpenAI Sans, 17px, weight 500.
- **body-md:** font OpenAI Sans, 16px, weight 500.
- **body-sm:** font OpenAI Sans, 14.5765px, weight 500.
- **caption:** font OpenAI Sans, 14px, weight 500.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (392.805px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (640px):** Responsive layout threshold.
- **sm (768px):** Responsive layout threshold.
- **md (1024px):** Responsive layout threshold.
- **lg (1280px):** Responsive layout threshold.
- **xl (1536px):** Responsive layout threshold.
- **breakpoint-xs (640px):** Responsive layout threshold.
- **breakpoint-sm (768px):** Responsive layout threshold.
- **breakpoint-md (1024px):** Responsive layout threshold.
- **breakpoint-lg (1280px):** Responsive layout threshold.
- **breakpoint-xl (1536px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.02) 0px 4px 6px 0px, rgba(0, 0, 0, 0.05) 0px 0px 2px 0px`
- **md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 2px 5px 0px, rgba(0, 0, 0, 0.01) 0px 4px 4px 0px`
- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.02) 0px 4px 6px 0px, rgba(0, 0, 0, 0.05) 0px 0px 2px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 2px 5px 0px, rgba(0, 0, 0, 0.01) 0px 4px 4px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (4px):** Border radius token.
- **md (6.08px):** Border radius token.
- **lg (24px):** Border radius token.
- **xl (40px):** Border radius token.
- **2xl (9999px):** Border radius token.

## Components

Component tokens map semantic colors and shapes to reusable UI patterns.

- **surface:** backgroundColor {colors.primary}, textColor {colors.on-primary}.

## Do's and Don'ts

- **Do** use the accent color sparingly for primary actions and active states.
- **Do** maintain high contrast between text and background tokens.
- **Don't** introduce new colors outside the extracted palette without updating the YAML tokens.
- **Don't** mix arbitrary spacing values — use the spacing scale.
