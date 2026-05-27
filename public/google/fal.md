---
version: alpha
name: "Generative AI APIs"
description: "Converted from UI Inspector extraction of https://fal.ai/"
colors:
  primary: "#000000"
  secondary: "#787882"
  tertiary: "#14CBF3"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-light-cyan: "#99EDFF"
  color-light-purple: "#AB77FF"
  color-white-2: "#FAFAFA"
  color-light-green-2: "#F1FFD2"
  color-dark-gray-3: "#252527"
  color-white-3: "#F3F4F6"
  color-green: "#ADFF00"
  color-white-4: "#F4F4F5"
  color-blue: "#4A17B0"
  color-light-gray-2: "#EBEBEB"
  color-light-cyan-2: "#99ECFF"
  color-light-pink: "#FFDDFA"
  color-light-purple-2: "#D0B7F9"
  color-dark-gray-7: "#121216"
  color-purple: "#5718C0"
  color-white-5: "#EFEEFC"
  color-light-cyan-3: "rgba(153, 236, 255, 0.5)"
  color-white-6: "#F3E8FF"
  color-light-red-2: "#FFC4D8"
  color-dark-gray-9: "rgba(27, 27, 29, 0.05)"
  color-dark-gray-10: "rgba(27, 27, 29, 0.1)"
  color-dark-gray: "#1B1B1D"
  color-dark-gray-2: "#1D1D20"
  color-dark-blue: "#111827"
  color-dark-blue-2: "#4B5563"
  color-dark-gray-4: "#494950"
  color-dark-gray-6: "#18181B"
  color-blue-5: "#6120EE"
  color-mid-gray-2: "#A6A6B0"
  color-mid-gray-3: "#71717A"
  color-light-gray: "#E5E7EB"
  color-dark-gray-5: "rgba(27, 27, 29, 0.13)"
  color-dark-gray-8: "rgba(27, 27, 29, 0.06)"
  color-light-green: "#D5F393"
  color-light-red: "#FB8DB2"
  color-dark-green: "#004012"
  color-blue-2: "#0A4DCE"
  color-dark-blue-3: "#003279"
  color-blue-3: "#115EF3"
  color-blue-4: "#3FB5FE"
  color-cyan-2: "#5BFFEC"
  color-red: "#EC0648"
  color-red-2: "#EC0649"
  color-light-gray-3: "#F0F0F0"
  color-yellow: "#FFFF00"
typography:
  display:
    fontFamily: publicSansRounded
    fontSize: 120px
    fontWeight: 500
    lineHeight: 100px
    letterSpacing: "-4%"
  h1:
    fontFamily: publicSansRounded
    fontSize: 80px
    fontWeight: 500
    lineHeight: 70px
    letterSpacing: "-4%"
  h2:
    fontFamily: publicSansRounded
    fontSize: 67.98px
    fontWeight: 500
    lineHeight: 61.182px
    letterSpacing: "-4%"
  h3:
    fontFamily: publicSansRounded
    fontSize: 60px
    fontWeight: 500
    lineHeight: 60px
    letterSpacing: "-4%"
  body-lg:
    fontFamily: publicSansRounded
    fontSize: 48px
    fontWeight: 500
    lineHeight: 48px
    letterSpacing: "-4%"
  body-md:
    fontFamily: publicSansRounded
    fontSize: 40px
    fontWeight: 500
    lineHeight: 40px
    letterSpacing: "-4%"
  body-sm:
    fontFamily: publicSansRounded
    fontSize: 36px
    fontWeight: 500
    lineHeight: 36px
    letterSpacing: "-4%"
  caption:
    fontFamily: publicSansRounded
    fontSize: 30px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: "-4%"
  code:
    fontFamily: focal
    fontSize: 14px
    fontWeight: 400
rounded:
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 223px
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

This design system was auto-extracted from https://fal.ai/ (49 colors · 45 type tokens · 18 spacing steps · 6 breakpoints · 2 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-17T07:53:22.620Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#787882):** Muted text, borders, and metadata.
- **tertiary (#14CBF3):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-light-cyan (#99EDFF):** Supporting token from the extracted palette.
- **color-light-purple (#AB77FF):** Supporting token from the extracted palette.
- **color-white-2 (#FAFAFA):** Supporting token from the extracted palette.
- **color-light-green-2 (#F1FFD2):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#252527):** Supporting token from the extracted palette.
- **color-white-3 (#F3F4F6):** Supporting token from the extracted palette.
- **color-green (#ADFF00):** Supporting token from the extracted palette.
- **color-white-4 (#F4F4F5):** Supporting token from the extracted palette.
- **color-blue (#4A17B0):** Supporting token from the extracted palette.
- **color-light-gray-2 (#EBEBEB):** Supporting token from the extracted palette.
- **color-light-cyan-2 (#99ECFF):** Supporting token from the extracted palette.
- **color-light-pink (#FFDDFA):** Supporting token from the extracted palette.
- **color-light-purple-2 (#D0B7F9):** Supporting token from the extracted palette.
- **color-dark-gray-7 (#121216):** Supporting token from the extracted palette.
- **color-purple (#5718C0):** Supporting token from the extracted palette.
- **color-white-5 (#EFEEFC):** Supporting token from the extracted palette.
- **color-light-cyan-3 (rgba(153, 236, 255, 0.5)):** Supporting token from the extracted palette.
- **color-white-6 (#F3E8FF):** Supporting token from the extracted palette.
- **color-light-red-2 (#FFC4D8):** Supporting token from the extracted palette.
- **color-dark-gray-9 (rgba(27, 27, 29, 0.05)):** Supporting token from the extracted palette.
- **color-dark-gray-10 (rgba(27, 27, 29, 0.1)):** Supporting token from the extracted palette.
- **color-dark-gray (#1B1B1D):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#1D1D20):** Supporting token from the extracted palette.
- **color-dark-blue (#111827):** Supporting token from the extracted palette.
- **color-dark-blue-2 (#4B5563):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#494950):** Supporting token from the extracted palette.
- **color-dark-gray-6 (#18181B):** Supporting token from the extracted palette.
- **color-blue-5 (#6120EE):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#A6A6B0):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#71717A):** Supporting token from the extracted palette.
- **color-light-gray (#E5E7EB):** Supporting token from the extracted palette.
- **color-dark-gray-5 (rgba(27, 27, 29, 0.13)):** Supporting token from the extracted palette.
- **color-dark-gray-8 (rgba(27, 27, 29, 0.06)):** Supporting token from the extracted palette.
- **color-light-green (#D5F393):** Supporting token from the extracted palette.
- **color-light-red (#FB8DB2):** Supporting token from the extracted palette.
- **color-dark-green (#004012):** Supporting token from the extracted palette.
- **color-blue-2 (#0A4DCE):** Supporting token from the extracted palette.
- **color-dark-blue-3 (#003279):** Supporting token from the extracted palette.
- **color-blue-3 (#115EF3):** Supporting token from the extracted palette.
- **color-blue-4 (#3FB5FE):** Supporting token from the extracted palette.
- **color-cyan-2 (#5BFFEC):** Supporting token from the extracted palette.
- **color-red (#EC0648):** Supporting token from the extracted palette.
- **color-red-2 (#EC0649):** Supporting token from the extracted palette.
- **color-light-gray-3 (#F0F0F0):** Supporting token from the extracted palette.
- **color-yellow (#FFFF00):** Supporting token from the extracted palette.

## Typography

Primary typeface: **focal, Family, publicSansRounded**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font publicSansRounded, 120px, weight 500.
- **h1:** font publicSansRounded, 80px, weight 500.
- **h2:** font publicSansRounded, 67.98px, weight 500.
- **h3:** font publicSansRounded, 60px, weight 500.
- **body-lg:** font publicSansRounded, 48px, weight 500.
- **body-md:** font publicSansRounded, 40px, weight 500.
- **body-sm:** font publicSansRounded, 36px, weight 500.
- **caption:** font publicSansRounded, 30px, weight 500.
- **code:** font focal, 14px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (223px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (640px):** Responsive layout threshold.
- **sm (768px):** Responsive layout threshold.
- **md (1024px):** Responsive layout threshold.
- **lg (1280px):** Responsive layout threshold.
- **xl (1440px):** Responsive layout threshold.
- **2xl (1920px):** Responsive layout threshold.
- **breakpoint-xs (640px):** Responsive layout threshold.
- **breakpoint-sm (768px):** Responsive layout threshold.
- **breakpoint-md (1024px):** Responsive layout threshold.
- **breakpoint-lg (1280px):** Responsive layout threshold.
- **breakpoint-xl (1440px):** Responsive layout threshold.
- **breakpoint-2xl (1920px):** Responsive layout threshold.

## Elevation & Depth

Elevation is minimal in the extracted system — surfaces rely on contrast and borders rather than heavy shadows.

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (4px):** Border radius token.
- **md (6px):** Border radius token.
- **lg (8px):** Border radius token.
- **xl (12px):** Border radius token.

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
- Avoid pairing --color-dark-gray on --color-black (1.22:1, Fail).
- Avoid pairing --color-dark-gray-2 on --color-black (1.25:1, Fail).
- Avoid pairing --color-dark-blue on --color-black (1.18:1, Fail).
