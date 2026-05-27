---
version: alpha
name: "Nike. Just Do It. Nike IN"
description: "Converted from UI Inspector extraction of https://www.nike.in/?utm_source=Google&utm_medium=Search&utm_campaign=Core_11-02-26_Acquisition_Google_Search_Text_Low_Keyword_PanIndia_Web&gad_source=1&gad_campaignid=23550254850&gbraid=0AAAABCZeWhgzdeNR531pi6W-JcC8cgt9a&gclid=CjwKCAjwtIfPBhAzEiwAv9RTJmzekcDQTjhRNEWmy7CdoLb06nf92bbVBo81NTqSwZiNo4Rwejn1KBoCCmcQAvD_BwE"
colors:
  primary: "#111111"
  secondary: "#707072"
  tertiary: "#2B333F"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-black: "#000000"
  color-white-2: "#F5F5F5"
  color-blue: "rgba(115, 133, 159, 0.5)"
  color-blue-3: "rgba(115, 133, 159, 0.75)"
  color-mid-gray-3: "#888888"
  color-mid-gray-2: "#767676"
  color-blue-2: "#73859F"
typography:
  display:
    fontFamily: Times
    fontSize: 72px
    fontWeight: 500
    lineHeight: 64.8px
    letterSpacing: -0.5px
  h1:
    fontFamily: Times
    fontSize: 32px
    fontWeight: 500
    lineHeight: 45.7143px
    letterSpacing: -0.5px
  h2:
    fontFamily: Times
    fontSize: 30px
    fontWeight: 500
    lineHeight: 45px
    letterSpacing: -0.5px
  h3:
    fontFamily: Times
    fontSize: 24px
    fontWeight: 500
    lineHeight: 30px
    letterSpacing: -0.5px
  body-lg:
    fontFamily: Times
    fontSize: 20px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: -0.5px
  body-md:
    fontFamily: Times
    fontSize: 16px
    fontWeight: 500
    lineHeight: 22.8571px
    letterSpacing: -0.5px
  body-sm:
    fontFamily: Times
    fontSize: 15px
    fontWeight: 500
    lineHeight: 21px
    letterSpacing: -0.5px
  caption:
    fontFamily: Times
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: -0.5px
  code:
    fontFamily: "Helvetica Now Text"
    fontSize: 14px
    fontWeight: 400
rounded:
  sm: 2px
  md: 3px
  lg: 9px
  xl: 24px
  2xl: "100%"
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 24px
  2xl: 84px
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

This design system was auto-extracted from https://www.nike.in/?utm_source=Google&utm_medium=Search&utm_campaign=Core_11-02-26_Acquisition_Google_Search_Text_Low_Keyword_PanIndia_Web&gad_source=1&gad_campaignid=23550254850&gbraid=0AAAABCZeWhgzdeNR531pi6W-JcC8cgt9a&gclid=CjwKCAjwtIfPBhAzEiwAv9RTJmzekcDQTjhRNEWmy7CdoLb06nf92bbVBo81NTqSwZiNo4Rwejn1KBoCCmcQAvD_BwE (11 colors · 34 type tokens · 19 spacing steps · 5 breakpoints · 8 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-17T07:38:50.870Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#111111):** Core surface and headline color.
- **secondary (#707072):** Muted text, borders, and metadata.
- **tertiary (#2B333F):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-white-2 (#F5F5F5):** Supporting token from the extracted palette.
- **color-blue (rgba(115, 133, 159, 0.5)):** Supporting token from the extracted palette.
- **color-blue-3 (rgba(115, 133, 159, 0.75)):** Supporting token from the extracted palette.
- **color-mid-gray-3 (#888888):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#767676):** Supporting token from the extracted palette.
- **color-blue-2 (#73859F):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Helvetica Now Text, Helvetica Now Text Medium, Arial, VideoJS, Nike Futura ND, Helvetica Now Display, Inter, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Times, 72px, weight 500.
- **h1:** font Times, 32px, weight 500.
- **h2:** font Times, 30px, weight 500.
- **h3:** font Times, 24px, weight 500.
- **body-lg:** font Times, 20px, weight 500.
- **body-md:** font Times, 16px, weight 500.
- **body-sm:** font Times, 15px, weight 500.
- **caption:** font Times, 14px, weight 500.
- **code:** font Helvetica Now Text, 14px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (24px):** Layout rhythm and component padding.
- **2xl (84px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (340px):** Responsive layout threshold.
- **sm (768px):** Responsive layout threshold.
- **md (960px):** Responsive layout threshold.
- **lg (1300px):** Responsive layout threshold.
- **xl (1600px):** Responsive layout threshold.
- **breakpoint-xs (340px):** Responsive layout threshold.
- **breakpoint-sm (768px):** Responsive layout threshold.
- **breakpoint-md (960px):** Responsive layout threshold.
- **breakpoint-lg (1300px):** Responsive layout threshold.
- **breakpoint-xl (1600px):** Responsive layout threshold.

## Elevation & Depth

Elevation is minimal in the extracted system — surfaces rely on contrast and borders rather than heavy shadows.

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (2px):** Border radius token.
- **md (3px):** Border radius token.
- **lg (9px):** Border radius token.
- **xl (24px):** Border radius token.
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
- Avoid pairing --color-mid-gray on --color-dark-blue (2.58:1, Fail).
