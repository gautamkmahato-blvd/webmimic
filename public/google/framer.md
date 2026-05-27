---
version: alpha
name: "Framer: Create a professional website, free. No code website builder loved by designers."
description: "Converted from UI Inspector extraction of https://www.framer.com/?utm_source=google&utm_medium=adwords&utm_campaign=22283959363_172357934141&utm_content=746821181202_framer_e_c_g&gad_source=1&gad_campaignid=22283959363&gbraid=0AAAAAC3AKQX_ZQa-FeQ1lFzIqcegP3PHb&gclid=Cj0KCQjwy_fOBhC6ARIsAHKFB7-px50VU8UMM5D7-mjytfA7HbDxGBilYHkEKmr4AXMwxqff1uDsGewaAkJlEALw_wcB"
colors:
  primary: "#000000"
  secondary: "#222222"
  tertiary: "#0099FF"
  neutral: "#0000EE"
  on-primary: "#0000EE"
  on-tertiary: "#FFFFFF"
  color-light-gray: "#EEEEEE"
  color-blue-3: "#0055FF"
typography:
  display:
    fontFamily: Times
    fontSize: 84px
    fontWeight: 500
    lineHeight: 71.4px
    letterSpacing: -3.1px
  h1:
    fontFamily: Times
    fontSize: 62px
    fontWeight: 500
    lineHeight: 62px
    letterSpacing: -3.1px
  h2:
    fontFamily: Times
    fontSize: 48px
    fontWeight: 500
    lineHeight: 52.8px
    letterSpacing: -3.1px
  h3:
    fontFamily: Times
    fontSize: 24px
    fontWeight: 500
    lineHeight: 30px
    letterSpacing: -3.1px
  body-lg:
    fontFamily: Times
    fontSize: 20px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: -3.1px
  body-md:
    fontFamily: Times
    fontSize: 18px
    fontWeight: 500
    lineHeight: 23.4px
    letterSpacing: -3.1px
  body-sm:
    fontFamily: Times
    fontSize: 16px
    fontWeight: 500
    lineHeight: 21.6px
    letterSpacing: -3.1px
  caption:
    fontFamily: Times
    fontSize: 15px
    fontWeight: 500
    lineHeight: 19.5px
    letterSpacing: -3.1px
  code:
    fontFamily: sans-serif
    fontSize: 12px
    fontWeight: 400
rounded:
  sm: 4px
  md: 8px
  lg: 10px
  xl: 12px
  2xl: 14px
  full: 15px
spacing:
  xs: 4px
  sm: 8px
  md: 15px
  lg: 20px
  xl: 30px
  2xl: 100px
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

This design system was auto-extracted from https://www.framer.com/?utm_source=google&utm_medium=adwords&utm_campaign=22283959363_172357934141&utm_content=746821181202_framer_e_c_g&gad_source=1&gad_campaignid=22283959363&gbraid=0AAAAAC3AKQX_ZQa-FeQ1lFzIqcegP3PHb&gclid=Cj0KCQjwy_fOBhC6ARIsAHKFB7-px50VU8UMM5D7-mjytfA7HbDxGBilYHkEKmr4AXMwxqff1uDsGewaAkJlEALw_wcB (7 colors · 52 type tokens · 23 spacing steps · 5 breakpoints · 2 motion tokenxs).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-14T18:58:14.227Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#222222):** Muted text, borders, and metadata.
- **tertiary (#0099FF):** Primary accent for links, buttons, and focus states.
- **neutral (#0000EE):** Primary readable text on dark surfaces.
- **on-primary (#0000EE):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-light-gray (#EEEEEE):** Supporting token from the extracted palette.
- **color-blue-3 (#0055FF):** Supporting token from the extracted palette.

## Typography

Primary typeface: **sans-serif, Inter Variable, Inter, GT Walsheim Framer Medium, GT Walsheim Medium, Inter Framer Regular, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Times, 84px, weight 500.
- **h1:** font Times, 62px, weight 500.
- **h2:** font Times, 48px, weight 500.
- **h3:** font Times, 24px, weight 500.
- **body-lg:** font Times, 20px, weight 500.
- **body-md:** font Times, 18px, weight 500.
- **body-sm:** font Times, 16px, weight 500.
- **caption:** font Times, 15px, weight 500.
- **code:** font sans-serif, 12px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (15px):** Layout rhythm and component padding.
- **lg (20px):** Layout rhythm and component padding.
- **xl (30px):** Layout rhythm and component padding.
- **2xl (100px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (809px):** Responsive layout threshold.
- **sm (809.98px):** Responsive layout threshold.
- **md (810px):** Responsive layout threshold.
- **lg (1199px):** Responsive layout threshold.
- **xl (1199.98px):** Responsive layout threshold.
- **breakpoint-xs (809px):** Responsive layout threshold.
- **breakpoint-sm (809.98px):** Responsive layout threshold.
- **breakpoint-md (810px):** Responsive layout threshold.
- **breakpoint-lg (1199px):** Responsive layout threshold.
- **breakpoint-xl (1199.98px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.5) 0px 20px 30px 0px`
- **md:** `rgba(0, 0, 0, 0.1) 0px 10px 20px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px inset`
- **shadow-sm:** `rgba(0, 0, 0, 0.5) 0px 20px 30px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0.1) 0px 10px 20px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px inset`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (4px):** Border radius token.
- **md (8px):** Border radius token.
- **lg (10px):** Border radius token.
- **xl (12px):** Border radius token.
- **2xl (14px):** Border radius token.
- **full (15px):** Border radius token.

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
- Avoid pairing --color-blue on --color-black (2.23:1, Fail).
- Avoid pairing --color-dark-gray on --color-black (1.32:1, Fail).
