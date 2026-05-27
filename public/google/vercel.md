---
version: alpha
name: "New Project"
description: "Converted from UI Inspector extraction of https://vercel.com/new"
colors:
  primary: "#FFFFFF"
  secondary: "#8F8F8F"
  tertiary: "#00DFD8"
  neutral: "#171717"
  on-primary: "#171717"
  on-tertiary: "#FFFFFF"
  color-white-2: "#FAFAFA"
  color-dark-gray-5: "#24292E"
  color-blue-3: "#6B4FBB"
  color-blue-4: "#0052CC"
  color-black: "#000000"
  color-dark-gray-2: "#4D4D4D"
  color-orange: "#C15F3C"
  color-mid-gray-2: "#7D7D7D"
  color-blue-2: "#006BFF"
  color-dark-gray-4: "#444444"
  color-mid-gray-3: "#A8A8A8"
  color-light-gray: "#EBEBEB"
  color-light-gray-2: "#E6E6E6"
  color-dark-gray-3: "#1F1F1F"
  color-light-gray-3: "#EAEAEA"
  color-blue: "#007CF0"
  color-pink: "#FF0080"
  color-light-gray-4: "#DBDBDB"
typography:
  h1:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: 500
    lineHeight: 40px
    letterSpacing: -0.96px
  h2:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: -0.96px
  h3:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: -0.96px
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: -0.96px
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: 500
    lineHeight: 18px
    letterSpacing: -0.96px
  code:
    fontFamily: "Geist Mono"
    fontSize: 16px
    fontWeight: 400
rounded:
  sm: "0px 8px 8px 0px"
  md: 6px
  lg: "6px 0px 0px 6px"
  xl: 8px
  2xl: "100%"
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 127.891px
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

This design system was auto-extracted from https://vercel.com/new (22 colors · 19 type tokens · 20 spacing steps · 57 breakpoints · 3 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-18T08:44:51.734Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#FFFFFF):** Core surface and headline color.
- **secondary (#8F8F8F):** Muted text, borders, and metadata.
- **tertiary (#00DFD8):** Primary accent for links, buttons, and focus states.
- **neutral (#171717):** Primary readable text on dark surfaces.
- **on-primary (#171717):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-white-2 (#FAFAFA):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#24292E):** Supporting token from the extracted palette.
- **color-blue-3 (#6B4FBB):** Supporting token from the extracted palette.
- **color-blue-4 (#0052CC):** Supporting token from the extracted palette.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#4D4D4D):** Supporting token from the extracted palette.
- **color-orange (#C15F3C):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#7D7D7D):** Supporting token from the extracted palette.
- **color-blue-2 (#006BFF):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#444444):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#A8A8A8):** Supporting token from the extracted palette.
- **color-light-gray (#EBEBEB):** Supporting token from the extracted palette.
- **color-light-gray-2 (#E6E6E6):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#1F1F1F):** Supporting token from the extracted palette.
- **color-light-gray-3 (#EAEAEA):** Supporting token from the extracted palette.
- **color-blue (#007CF0):** Supporting token from the extracted palette.
- **color-pink (#FF0080):** Supporting token from the extracted palette.
- **color-light-gray-4 (#DBDBDB):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Geist Mono, Family, Geist**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **h1:** font Geist, 32px, weight 500.
- **h2:** font Geist, 24px, weight 500.
- **h3:** font Geist, 16px, weight 500.
- **body-md:** font Geist, 14px, weight 500.
- **body-sm:** font Geist, 13px, weight 500.
- **code:** font Geist Mono, 16px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (127.891px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (360px):** Responsive layout threshold.
- **sm (370px):** Responsive layout threshold.
- **md (380px):** Responsive layout threshold.
- **lg (400px):** Responsive layout threshold.
- **xl (401px):** Responsive layout threshold.
- **2xl (410px):** Responsive layout threshold.
- **3xl (420px):** Responsive layout threshold.
- **bp-8 (427px):** Responsive layout threshold.
- **bp-9 (428px):** Responsive layout threshold.
- **bp-10 (430px):** Responsive layout threshold.
- **bp-11 (440px):** Responsive layout threshold.
- **bp-12 (450px):** Responsive layout threshold.
- **bp-13 (456px):** Responsive layout threshold.
- **bp-14 (470px):** Responsive layout threshold.
- **bp-15 (480px):** Responsive layout threshold.
- **bp-16 (500px):** Responsive layout threshold.
- **bp-17 (513px):** Responsive layout threshold.
- **bp-18 (514px):** Responsive layout threshold.
- **bp-19 (540px):** Responsive layout threshold.
- **bp-20 (544px):** Responsive layout threshold.
- **bp-21 (600px):** Responsive layout threshold.
- **bp-22 (601px):** Responsive layout threshold.
- **bp-23 (640px):** Responsive layout threshold.
- **bp-24 (660px):** Responsive layout threshold.
- **bp-25 (670px):** Responsive layout threshold.
- **bp-26 (690px):** Responsive layout threshold.
- **bp-27 (700px):** Responsive layout threshold.
- **bp-28 (701px):** Responsive layout threshold.
- **bp-29 (710px):** Responsive layout threshold.
- **bp-30 (711px):** Responsive layout threshold.
- **bp-31 (736px):** Responsive layout threshold.
- **bp-32 (745px):** Responsive layout threshold.
- **bp-33 (750px):** Responsive layout threshold.
- **bp-34 (768px):** Responsive layout threshold.
- **bp-35 (769px):** Responsive layout threshold.
- **bp-36 (780px):** Responsive layout threshold.
- **bp-37 (800px):** Responsive layout threshold.
- **bp-38 (860px):** Responsive layout threshold.
- **bp-39 (960px):** Responsive layout threshold.
- **bp-40 (961px):** Responsive layout threshold.
- **bp-41 (992px):** Responsive layout threshold.
- **bp-42 (997px):** Responsive layout threshold.
- **bp-43 (1024px):** Responsive layout threshold.
- **bp-44 (1040px):** Responsive layout threshold.
- **bp-45 (1048px):** Responsive layout threshold.
- **bp-46 (1050px):** Responsive layout threshold.
- **bp-47 (1060px):** Responsive layout threshold.
- **bp-48 (1070px):** Responsive layout threshold.
- **bp-49 (1150px):** Responsive layout threshold.
- **bp-50 (1151px):** Responsive layout threshold.
- **bp-51 (1200px):** Responsive layout threshold.
- **bp-52 (1240px):** Responsive layout threshold.
- **bp-53 (1248px):** Responsive layout threshold.
- **bp-54 (1250px):** Responsive layout threshold.
- **bp-55 (1280px):** Responsive layout threshold.
- **bp-56 (1400px):** Responsive layout threshold.
- **bp-57 (1480px):** Responsive layout threshold.
- **breakpoint-xs (360px):** Responsive layout threshold.
- **breakpoint-sm (370px):** Responsive layout threshold.
- **breakpoint-md (380px):** Responsive layout threshold.
- **breakpoint-lg (400px):** Responsive layout threshold.
- **breakpoint-xl (401px):** Responsive layout threshold.
- **breakpoint-2xl (410px):** Responsive layout threshold.
- **breakpoint-3xl (420px):** Responsive layout threshold.
- **breakpoint-bp-8 (427px):** Responsive layout threshold.
- **breakpoint-bp-9 (428px):** Responsive layout threshold.
- **breakpoint-bp-10 (430px):** Responsive layout threshold.
- **breakpoint-bp-11 (440px):** Responsive layout threshold.
- **breakpoint-bp-12 (450px):** Responsive layout threshold.
- **breakpoint-bp-13 (456px):** Responsive layout threshold.
- **breakpoint-bp-14 (470px):** Responsive layout threshold.
- **breakpoint-bp-15 (480px):** Responsive layout threshold.
- **breakpoint-bp-16 (500px):** Responsive layout threshold.
- **breakpoint-bp-17 (513px):** Responsive layout threshold.
- **breakpoint-bp-18 (514px):** Responsive layout threshold.
- **breakpoint-bp-19 (540px):** Responsive layout threshold.
- **breakpoint-bp-20 (544px):** Responsive layout threshold.
- **breakpoint-bp-21 (600px):** Responsive layout threshold.
- **breakpoint-bp-22 (601px):** Responsive layout threshold.
- **breakpoint-bp-23 (640px):** Responsive layout threshold.
- **breakpoint-bp-24 (660px):** Responsive layout threshold.
- **breakpoint-bp-25 (670px):** Responsive layout threshold.
- **breakpoint-bp-26 (690px):** Responsive layout threshold.
- **breakpoint-bp-27 (700px):** Responsive layout threshold.
- **breakpoint-bp-28 (701px):** Responsive layout threshold.
- **breakpoint-bp-29 (710px):** Responsive layout threshold.
- **breakpoint-bp-30 (711px):** Responsive layout threshold.
- **breakpoint-bp-31 (736px):** Responsive layout threshold.
- **breakpoint-bp-32 (745px):** Responsive layout threshold.
- **breakpoint-bp-33 (750px):** Responsive layout threshold.
- **breakpoint-bp-34 (768px):** Responsive layout threshold.
- **breakpoint-bp-35 (769px):** Responsive layout threshold.
- **breakpoint-bp-36 (780px):** Responsive layout threshold.
- **breakpoint-bp-37 (800px):** Responsive layout threshold.
- **breakpoint-bp-38 (860px):** Responsive layout threshold.
- **breakpoint-bp-39 (960px):** Responsive layout threshold.
- **breakpoint-bp-40 (961px):** Responsive layout threshold.
- **breakpoint-bp-41 (992px):** Responsive layout threshold.
- **breakpoint-bp-42 (997px):** Responsive layout threshold.
- **breakpoint-bp-43 (1024px):** Responsive layout threshold.
- **breakpoint-bp-44 (1040px):** Responsive layout threshold.
- **breakpoint-bp-45 (1048px):** Responsive layout threshold.
- **breakpoint-bp-46 (1050px):** Responsive layout threshold.
- **breakpoint-bp-47 (1060px):** Responsive layout threshold.
- **breakpoint-bp-48 (1070px):** Responsive layout threshold.
- **breakpoint-bp-49 (1150px):** Responsive layout threshold.
- **breakpoint-bp-50 (1151px):** Responsive layout threshold.
- **breakpoint-bp-51 (1200px):** Responsive layout threshold.
- **breakpoint-bp-52 (1240px):** Responsive layout threshold.
- **breakpoint-bp-53 (1248px):** Responsive layout threshold.
- **breakpoint-bp-54 (1250px):** Responsive layout threshold.
- **breakpoint-bp-55 (1280px):** Responsive layout threshold.
- **breakpoint-bp-56 (1400px):** Responsive layout threshold.
- **breakpoint-bp-57 (1480px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.08) 0px 0px 0px 1px inset`
- **md:** `rgb(235, 235, 235) 0px 0px 0px 1px`
- **lg:** `rgba(0, 0, 0, 0.12) 0px 5px 10px 0px`
- **xl:** `rgb(255, 255, 255) 0px 0px 0px 2px, oklch(0.5761 0.2508 258.23) 0px 0px 0px 4px`
- **shadow-5:** `rgba(0, 0, 0, 0.08) 0px 0px 0px 1px`
- **shadow-6:** `rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 4px 8px 0px, rgb(250, 250, 250) 0px 0px 0px 1px, rgb(255, 255, 255) 0px 0px 0px 1px`
- **shadow-sm:** `rgba(0, 0, 0, 0.08) 0px 0px 0px 1px inset`
- **shadow-md:** `rgb(235, 235, 235) 0px 0px 0px 1px`
- **shadow-lg:** `rgba(0, 0, 0, 0.12) 0px 5px 10px 0px`
- **shadow-xl:** `rgb(255, 255, 255) 0px 0px 0px 2px, oklch(0.5761 0.2508 258.23) 0px 0px 0px 4px`
- **shadow-shadow-5:** `rgba(0, 0, 0, 0.08) 0px 0px 0px 1px`
- **shadow-shadow-6:** `rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 4px 8px 0px, rgb(250, 250, 250) 0px 0px 0px 1px, rgb(255, 255, 255) 0px 0px 0px 1px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 8px 8px 0px):** Border radius token.
- **md (6px):** Border radius token.
- **lg (6px 0px 0px 6px):** Border radius token.
- **xl (8px):** Border radius token.
- **2xl (100%):** Border radius token.
- **full (9999px):** Border radius token.

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
- Avoid pairing --color-dark-gray on --color-dark-gray-5 (1.22:1, Fail).
- Avoid pairing --color-dark-gray on --color-blue-3 (2.95:1, Fail).
- Avoid pairing --color-dark-gray on --color-blue-4 (2.63:1, Fail).
