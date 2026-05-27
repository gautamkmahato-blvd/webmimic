---
version: alpha
name: "Application Performance Monitoring & Error Tracking Software"
description: "Converted from UI Inspector extraction of https://sentry.io/welcome/"
colors:
  primary: "#FFFFFF"
  secondary: "#000000"
  tertiary: "#150F23"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-dark-blue-3: "#1F1633"
  color-blue-3: "#6A5FC1"
  color-blue-4: "#7553FF"
  color-light-gray-3: "#EFEFEF"
  color-white-2: "#F9F8FF"
  color-dark-purple-3: "#2D2340"
  color-dark-purple-5: "#422082"
  color-purple: "#79628C"
  color-white-3: "#F6F6F8"
  color-light-gray-2: "#D4D4D4"
  color-blue: "#569CD6"
  color-light-yellow: "#DCDCAA"
  color-green: "#6A9955"
  color-red: "#F44747"
  color-orange: "#CE9178"
  color-blue-2: "#4E2A9A"
  color-light-green: "#B5CEA8"
  color-pink: "#FD44B0"
  color-green-2: "#C2EF4E"
  color-red-3: "#D16969"
  color-dark-gray: "#1A1A1A"
  color-dark-blue-4: "#1F2937"
  color-dark-blue-5: "#362D59"
  color-light-gray-5: "#CFCFDB"
  color-dark-blue-6: "#111827"
  color-dark-blue-7: "#374151"
  color-light-gray: "#E5E7EB"
  color-light-gray-4: "#ECECF1"
  color-dark-purple-4: "#433458"
  color-purple-2: "#584674"
  color-dark-blue-2: "rgba(22, 15, 36, 0.9)"
  color-dark-purple: "#452650"
  color-red-2: "#C83852"
  color-pink-2: "#B44092"
  color-light-red: "#FA7FAA"
  color-light-red-2: "#FF9691"
  color-light-orange: "#FFB287"
  color-orange-2: "#A48977"
  color-dark-purple-2: "#30145F"
  color-pink-3: "rgba(173, 108, 170, 0.15)"
typography:
  display:
    fontFamily: Rubik
    fontSize: 88px
    fontWeight: 500
    lineHeight: 105.6px
    letterSpacing: 0.2px
  h1:
    fontFamily: Rubik
    fontSize: 60px
    fontWeight: 500
    lineHeight: 66px
    letterSpacing: 0.2px
  h2:
    fontFamily: Rubik
    fontSize: 30px
    fontWeight: 500
    lineHeight: 36px
    letterSpacing: 0.2px
  h3:
    fontFamily: Rubik
    fontSize: 27px
    fontWeight: 500
    lineHeight: 33.75px
    letterSpacing: 0.2px
  body-lg:
    fontFamily: Rubik
    fontSize: 24px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: 0.2px
  body-md:
    fontFamily: Rubik
    fontSize: 20px
    fontWeight: 500
    lineHeight: 30px
    letterSpacing: 0.2px
  body-sm:
    fontFamily: Rubik
    fontSize: 16px
    fontWeight: 500
    lineHeight: 25px
    letterSpacing: 0.2px
  caption:
    fontFamily: Rubik
    fontSize: 15px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: 0.2px
  code:
    fontFamily: "Dammit Sans"
    fontSize: 14px
    fontWeight: 400
rounded:
  sm: "0px 12px 12px 0px"
  md: 6px
  lg: 8px
  xl: 10px
  2xl: 10.6px
  full: 12px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 160px
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

This design system was auto-extracted from https://sentry.io/welcome/ (43 colors · 36 type tokens · 23 spacing steps · 10 breakpoints · 8 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-18T08:18:01.152Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#FFFFFF):** Core surface and headline color.
- **secondary (#000000):** Muted text, borders, and metadata.
- **tertiary (#150F23):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-dark-blue-3 (#1F1633):** Supporting token from the extracted palette.
- **color-blue-3 (#6A5FC1):** Supporting token from the extracted palette.
- **color-blue-4 (#7553FF):** Supporting token from the extracted palette.
- **color-light-gray-3 (#EFEFEF):** Supporting token from the extracted palette.
- **color-white-2 (#F9F8FF):** Supporting token from the extracted palette.
- **color-dark-purple-3 (#2D2340):** Supporting token from the extracted palette.
- **color-dark-purple-5 (#422082):** Supporting token from the extracted palette.
- **color-purple (#79628C):** Supporting token from the extracted palette.
- **color-white-3 (#F6F6F8):** Supporting token from the extracted palette.
- **color-light-gray-2 (#D4D4D4):** Supporting token from the extracted palette.
- **color-blue (#569CD6):** Supporting token from the extracted palette.
- **color-light-yellow (#DCDCAA):** Supporting token from the extracted palette.
- **color-green (#6A9955):** Supporting token from the extracted palette.
- **color-red (#F44747):** Supporting token from the extracted palette.
- **color-orange (#CE9178):** Supporting token from the extracted palette.
- **color-blue-2 (#4E2A9A):** Supporting token from the extracted palette.
- **color-light-green (#B5CEA8):** Supporting token from the extracted palette.
- **color-pink (#FD44B0):** Supporting token from the extracted palette.
- **color-green-2 (#C2EF4E):** Supporting token from the extracted palette.
- **color-red-3 (#D16969):** Supporting token from the extracted palette.
- **color-dark-gray (#1A1A1A):** Supporting token from the extracted palette.
- **color-dark-blue-4 (#1F2937):** Supporting token from the extracted palette.
- **color-dark-blue-5 (#362D59):** Supporting token from the extracted palette.
- **color-light-gray-5 (#CFCFDB):** Supporting token from the extracted palette.
- **color-dark-blue-6 (#111827):** Supporting token from the extracted palette.
- **color-dark-blue-7 (#374151):** Supporting token from the extracted palette.
- **color-light-gray (#E5E7EB):** Supporting token from the extracted palette.
- **color-light-gray-4 (#ECECF1):** Supporting token from the extracted palette.
- **color-dark-purple-4 (#433458):** Supporting token from the extracted palette.
- **color-purple-2 (#584674):** Supporting token from the extracted palette.
- **color-dark-blue-2 (rgba(22, 15, 36, 0.9)):** Supporting token from the extracted palette.
- **color-dark-purple (#452650):** Supporting token from the extracted palette.
- **color-red-2 (#C83852):** Supporting token from the extracted palette.
- **color-pink-2 (#B44092):** Supporting token from the extracted palette.
- **color-light-red (#FA7FAA):** Supporting token from the extracted palette.
- **color-light-red-2 (#FF9691):** Supporting token from the extracted palette.
- **color-light-orange (#FFB287):** Supporting token from the extracted palette.
- **color-orange-2 (#A48977):** Supporting token from the extracted palette.
- **color-dark-purple-2 (#30145F):** Supporting token from the extracted palette.
- **color-pink-3 (rgba(173, 108, 170, 0.15)):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Dammit Sans, IBM Plex Mono, Monaco, Family, Rubik**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Rubik, 88px, weight 500.
- **h1:** font Rubik, 60px, weight 500.
- **h2:** font Rubik, 30px, weight 500.
- **h3:** font Rubik, 27px, weight 500.
- **body-lg:** font Rubik, 24px, weight 500.
- **body-md:** font Rubik, 20px, weight 500.
- **body-sm:** font Rubik, 16px, weight 500.
- **caption:** font Rubik, 15px, weight 500.
- **code:** font Dammit Sans, 14px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (160px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (1px):** Responsive layout threshold.
- **sm (576px):** Responsive layout threshold.
- **md (640px):** Responsive layout threshold.
- **lg (767px):** Responsive layout threshold.
- **xl (768px):** Responsive layout threshold.
- **2xl (991px):** Responsive layout threshold.
- **3xl (992px):** Responsive layout threshold.
- **bp-8 (1151px):** Responsive layout threshold.
- **bp-9 (1152px):** Responsive layout threshold.
- **bp-10 (1440px):** Responsive layout threshold.
- **breakpoint-xs (1px):** Responsive layout threshold.
- **breakpoint-sm (576px):** Responsive layout threshold.
- **breakpoint-md (640px):** Responsive layout threshold.
- **breakpoint-lg (767px):** Responsive layout threshold.
- **breakpoint-xl (768px):** Responsive layout threshold.
- **breakpoint-2xl (991px):** Responsive layout threshold.
- **breakpoint-3xl (992px):** Responsive layout threshold.
- **breakpoint-bp-8 (1151px):** Responsive layout threshold.
- **breakpoint-bp-9 (1152px):** Responsive layout threshold.
- **breakpoint-bp-10 (1440px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(22, 15, 36, 0.9) 0px 4px 4px 9px`
- **md:** `rgba(0, 0, 0, 0.15) 0px 2px 10px 0px inset`
- **lg:** `rgba(0, 0, 0, 0.08) 0px 2px 8px 0px`
- **xl:** `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px inset`
- **shadow-5:** `rgba(0, 0, 0, 0.2) 0px 1px 3px 0px`
- **shadow-sm:** `rgba(22, 15, 36, 0.9) 0px 4px 4px 9px`
- **shadow-md:** `rgba(0, 0, 0, 0.15) 0px 2px 10px 0px inset`
- **shadow-lg:** `rgba(0, 0, 0, 0.08) 0px 2px 8px 0px`
- **shadow-xl:** `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px inset`
- **shadow-shadow-5:** `rgba(0, 0, 0, 0.2) 0px 1px 3px 0px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 12px 12px 0px):** Border radius token.
- **md (6px):** Border radius token.
- **lg (8px):** Border radius token.
- **xl (10px):** Border radius token.
- **2xl (10.6px):** Border radius token.
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
- Avoid pairing --color-light-gray-2 on --color-white (1.48:1, Fail).
- Avoid pairing --color-black on --color-dark-blue (1.12:1, Fail).
- Avoid pairing --color-black on --color-dark-blue-3 (1.22:1, Fail).
