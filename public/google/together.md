---
version: alpha
name: "Together AI"
description: "Converted from UI Inspector extraction of https://www.together.ai/"
colors:
  primary: "#000000"
  tertiary: "#70E9F0"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-dark-blue: "#010120"
  color-light-blue: "#BDBBFF"
  color-light-blue-2: "#C1DFF9"
  color-white-2: "#F3F6FA"
  color-light-cyan: "#C8F6F9"
  color-dark-blue-3: "#191935"
  color-light-blue-3: "#DFDDFE"
  color-light-gray: "#EFEFEF"
  color-light-pink: "#FDE3F6"
  color-light-orange: "#FFDCCD"
  color-light-blue-5: "#9BCDF5"
  color-dark-blue-2: "rgba(1, 1, 32, 0.1)"
  color-orange: "#FC4C02"
  color-pink: "#EF2CC1"
  color-light-purple: "#CAAEF5"
  color-white-3: "#F6FAFD"
  color-light-blue-4: "#E5F3FF"
typography:
  display:
    fontFamily: sans-serif
    fontSize: 50.3556px
    fontWeight: 500
    lineHeight: 55.3911px
    letterSpacing: -0.629444px
  h1:
    fontFamily: sans-serif
    fontSize: 31.4722px
    fontWeight: 500
    lineHeight: 50.3556px
    letterSpacing: -0.629444px
  h2:
    fontFamily: sans-serif
    fontSize: 22.0306px
    fontWeight: 500
    lineHeight: 37.7667px
    letterSpacing: -0.629444px
  h3:
    fontFamily: sans-serif
    fontSize: 17.3097px
    fontWeight: 500
    lineHeight: 25.3351px
    letterSpacing: -0.629444px
  body-lg:
    fontFamily: sans-serif
    fontSize: 14.1625px
    fontWeight: 500
    lineHeight: 19.9062px
    letterSpacing: -0.629444px
  body-md:
    fontFamily: sans-serif
    fontSize: 12.5889px
    fontWeight: 500
    lineHeight: 18.4112px
    letterSpacing: -0.629444px
  body-sm:
    fontFamily: sans-serif
    fontSize: 11.0153px
    fontWeight: 500
    lineHeight: 16.3656px
    letterSpacing: -0.629444px
  caption:
    fontFamily: sans-serif
    fontSize: 10.2285px
    fontWeight: 500
    lineHeight: 15.4214px
    letterSpacing: -0.629444px
  code:
    fontFamily: "The Future"
    fontSize: 10.2285px
    fontWeight: 400
rounded:
  sm: 3.14722px
  md: 6.29444px
  lg: 12.5889px
spacing:
  xs: 4.72083px
  sm: 7.86806px
  md: 16px
  lg: 25.1778px
  xl: 31.4722px
  2xl: 226.6px
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
---

## Overview

This design system was auto-extracted from https://www.together.ai/ (20 colors · 38 type tokens · 26 spacing steps · 5 breakpoints · 8 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-18T08:24:33.997Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **tertiary (#70E9F0):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-dark-blue (#010120):** Supporting token from the extracted palette.
- **color-light-blue (#BDBBFF):** Supporting token from the extracted palette.
- **color-light-blue-2 (#C1DFF9):** Supporting token from the extracted palette.
- **color-white-2 (#F3F6FA):** Supporting token from the extracted palette.
- **color-light-cyan (#C8F6F9):** Supporting token from the extracted palette.
- **color-dark-blue-3 (#191935):** Supporting token from the extracted palette.
- **color-light-blue-3 (#DFDDFE):** Supporting token from the extracted palette.
- **color-light-gray (#EFEFEF):** Supporting token from the extracted palette.
- **color-light-pink (#FDE3F6):** Supporting token from the extracted palette.
- **color-light-orange (#FFDCCD):** Supporting token from the extracted palette.
- **color-light-blue-5 (#9BCDF5):** Supporting token from the extracted palette.
- **color-dark-blue-2 (rgba(1, 1, 32, 0.1)):** Supporting token from the extracted palette.
- **color-orange (#FC4C02):** Supporting token from the extracted palette.
- **color-pink (#EF2CC1):** Supporting token from the extracted palette.
- **color-light-purple (#CAAEF5):** Supporting token from the extracted palette.
- **color-white-3 (#F6FAFD):** Supporting token from the extracted palette.
- **color-light-blue-4 (#E5F3FF):** Supporting token from the extracted palette.

## Typography

Primary typeface: **The Future, PP Neue Montreal Mono, Family, sans-serif**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font sans-serif, 50.3556px, weight 500.
- **h1:** font sans-serif, 31.4722px, weight 500.
- **h2:** font sans-serif, 22.0306px, weight 500.
- **h3:** font sans-serif, 17.3097px, weight 500.
- **body-lg:** font sans-serif, 14.1625px, weight 500.
- **body-md:** font sans-serif, 12.5889px, weight 500.
- **body-sm:** font sans-serif, 11.0153px, weight 500.
- **caption:** font sans-serif, 10.2285px, weight 500.
- **code:** font The Future, 10.2285px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4.72083px):** Layout rhythm and component padding.
- **sm (7.86806px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (25.1778px):** Layout rhythm and component padding.
- **xl (31.4722px):** Layout rhythm and component padding.
- **2xl (226.6px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (479px):** Responsive layout threshold.
- **sm (767px):** Responsive layout threshold.
- **md (768px):** Responsive layout threshold.
- **lg (991px):** Responsive layout threshold.
- **xl (992px):** Responsive layout threshold.
- **breakpoint-xs (479px):** Responsive layout threshold.
- **breakpoint-sm (767px):** Responsive layout threshold.
- **breakpoint-md (768px):** Responsive layout threshold.
- **breakpoint-lg (991px):** Responsive layout threshold.
- **breakpoint-xl (992px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(1, 1, 32, 0.1) 0px 4px 10px 0px`
- **md:** `rgba(1, 1, 32, 0.1) -10px 0px 75px 0px`
- **shadow-sm:** `rgba(1, 1, 32, 0.1) 0px 4px 10px 0px`
- **shadow-md:** `rgba(1, 1, 32, 0.1) -10px 0px 75px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (3.14722px):** Border radius token.
- **md (6.29444px):** Border radius token.
- **lg (12.5889px):** Border radius token.

## Components

Component tokens map semantic colors and shapes to reusable UI patterns.

- **button-primary:** backgroundColor {colors.tertiary}, textColor {colors.on-tertiary}, rounded {rounded.md}, padding 12px.
- **button-primary-hover:** backgroundColor {colors.tertiary}.
- **surface:** backgroundColor {colors.primary}, textColor {colors.on-primary}.

## Do's and Don'ts

- **Do** use the accent color sparingly for primary actions and active states.
- **Do** maintain high contrast between text and background tokens.
- **Don't** introduce new colors outside the extracted palette without updating the YAML tokens.
- **Don't** mix arbitrary spacing values — use the spacing scale.
