---
version: alpha
name: "Spotify - Web Player: Music for everyone"
description: "Converted from UI Inspector extraction of https://open.spotify.com/"
colors:
  primary: "#FFFFFF"
  secondary: "#777777"
  tertiary: "#438080"
  neutral: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  color-black: "#000000"
  color-green: "#1ED760"
  color-dark-gray-2: "#1F1F1F"
  color-dark-gray-3: "#121212"
  color-white-2: "#F8F8F8"
  color-green-2: "#468254"
  color-blue: "#3860BE"
  color-dark-green: "#346E4A"
  color-dark-gray-6: "#292929"
  color-dark-gray-8: "#333333"
  color-dark-red: "#680808"
  color-orange: "#A86741"
  color-cyan-2: "#4F7F77"
  color-green-3: "#1DB954"
  color-dark-gray-9: "#535353"
  color-red: "#A9635C"
  color-dark-red-2: "#481008"
  color-pink-2: "#E10096"
  color-dark-red-3: "#A01010"
  color-green-4: "#617F52"
  color-dark-gray-10: "#404040"
  color-dark-red-4: "#900808"
  color-red-2: "#985058"
  color-cyan-4: "#637C7C"
  color-dark-yellow: "#857809"
  color-dark-blue: "#284050"
  color-dark-blue-2: "#284058"
  color-blue-4: "#4078B0"
  color-cyan-5: "#5F7D75"
  color-dark-red-5: "#582018"
  color-dark-red-6: "#682828"
  color-dark-cyan: "#0080AF"
  color-dark-gray-11: "#484048"
  color-dark-gray-12: "#383840"
  color-blue-5: "#6A7983"
  color-blue-6: "#3818A0"
  color-red-3: "#804038"
  color-cyan-6: "#3D8282"
  color-dark-red-7: "#501810"
  color-red-4: "#A85050"
  color-orange-2: "#A16B20"
  color-dark-red-8: "#481818"
  color-dark-purple: "#302048"
  color-purple: "#584870"
  color-dark-green-2: "#384030"
  color-orange-3: "#A3694F"
  color-red-5: "#A4646F"
  color-mid-gray-5: "#767676"
  color-green-5: "#697F37"
  color-blue-7: "#6F74A4"
  color-red-6: "#C0574A"
  color-purple-2: "#8E69A3"
  color-purple-3: "#703090"
  color-red-7: "#B82810"
  color-dark-blue-3: "#183860"
  color-dark-cyan-2: "#106850"
  color-dark-cyan-3: "#1B8857"
  color-dark-cyan-4: "#086050"
  color-dark-gray-13: "#282828"
  color-light-gray-5: "#EEEEEE"
  color-white-3: "#F9FFFA"
  color-white-4: "#F4F4F4"
  color-light-gray: "#B3B3B3"
  color-mid-gray: "#696969"
  color-dark-gray: "#555555"
  color-mid-gray-2: "#7C7C7C"
  color-dark-gray-4: "#656565"
  color-blue-2: "#0000EE"
  color-dark-gray-5: "#101010"
  color-mid-gray-4: "#808080"
  color-light-gray-4: "#C5C5C5"
  color-cyan-3: "#32AE88"
  color-light-gray-3: "#C1C1C1"
  color-light-gray-6: "#D8D8D8"
  color-mid-gray-7: "#707070"
  color-light-gray-7: "#BBBBBB"
  color-light-gray-2: "#C7C5C7"
  color-mid-gray-6: "#999999"
  color-dark-gray-7: "#2A2A2A"
  color-pink: "#AF2896"
  color-blue-3: "#509BF5"
  color-dark-blue-4: "#2E3644"
typography:
  display:
    fontFamily: Times
    fontSize: 24px
    fontWeight: 500
    lineHeight: 38px
    letterSpacing: 0.16px
  h1:
    fontFamily: Times
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: 0.16px
  h2:
    fontFamily: Times
    fontSize: 14.4px
    fontWeight: 500
    lineHeight: 20.8px
    letterSpacing: 0.16px
  h3:
    fontFamily: Times
    fontSize: 14px
    fontWeight: 500
    lineHeight: 19.488px
    letterSpacing: 0.16px
  body-lg:
    fontFamily: Times
    fontSize: 13.6px
    fontWeight: 500
    lineHeight: 17.6px
    letterSpacing: 0.16px
  body-md:
    fontFamily: Times
    fontSize: 13.3333px
    fontWeight: 500
    lineHeight: 16.9104px
    letterSpacing: 0.16px
  body-sm:
    fontFamily: Times
    fontSize: 13.008px
    fontWeight: 500
    lineHeight: 14.4px
    letterSpacing: 0.16px
  caption:
    fontFamily: Times
    fontSize: 12.992px
    fontWeight: 500
    lineHeight: 12px
    letterSpacing: 0.16px
  code:
    fontFamily: SpotifyMixUI
    fontSize: 13.008px
    fontWeight: 400
rounded:
  sm: 2px
  md: 2.5px
  lg: 3px
  xl: 4px
  2xl: 6px
  full: 8px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 153.727px
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

This design system was auto-extracted from https://open.spotify.com/ (85 colors · 27 type tokens · 22 spacing steps · 17 breakpoints · 11 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-18T08:20:20.460Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#FFFFFF):** Core surface and headline color.
- **secondary (#777777):** Muted text, borders, and metadata.
- **tertiary (#438080):** Primary accent for links, buttons, and focus states.
- **neutral (#FFFFFF):** Primary readable text on dark surfaces.
- **on-primary (#FFFFFF):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-black (#000000):** Supporting token from the extracted palette.
- **color-green (#1ED760):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#1F1F1F):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#121212):** Supporting token from the extracted palette.
- **color-white-2 (#F8F8F8):** Supporting token from the extracted palette.
- **color-green-2 (#468254):** Supporting token from the extracted palette.
- **color-blue (#3860BE):** Supporting token from the extracted palette.
- **color-dark-green (#346E4A):** Supporting token from the extracted palette.
- **color-dark-gray-6 (#292929):** Supporting token from the extracted palette.
- **color-dark-gray-8 (#333333):** Supporting token from the extracted palette.
- **color-dark-red (#680808):** Supporting token from the extracted palette.
- **color-orange (#A86741):** Supporting token from the extracted palette.
- **color-cyan-2 (#4F7F77):** Supporting token from the extracted palette.
- **color-green-3 (#1DB954):** Supporting token from the extracted palette.
- **color-dark-gray-9 (#535353):** Supporting token from the extracted palette.
- **color-red (#A9635C):** Supporting token from the extracted palette.
- **color-dark-red-2 (#481008):** Supporting token from the extracted palette.
- **color-pink-2 (#E10096):** Supporting token from the extracted palette.
- **color-dark-red-3 (#A01010):** Supporting token from the extracted palette.
- **color-green-4 (#617F52):** Supporting token from the extracted palette.
- **color-dark-gray-10 (#404040):** Supporting token from the extracted palette.
- **color-dark-red-4 (#900808):** Supporting token from the extracted palette.
- **color-red-2 (#985058):** Supporting token from the extracted palette.
- **color-cyan-4 (#637C7C):** Supporting token from the extracted palette.
- **color-dark-yellow (#857809):** Supporting token from the extracted palette.
- **color-dark-blue (#284050):** Supporting token from the extracted palette.
- **color-dark-blue-2 (#284058):** Supporting token from the extracted palette.
- **color-blue-4 (#4078B0):** Supporting token from the extracted palette.
- **color-cyan-5 (#5F7D75):** Supporting token from the extracted palette.
- **color-dark-red-5 (#582018):** Supporting token from the extracted palette.
- **color-dark-red-6 (#682828):** Supporting token from the extracted palette.
- **color-dark-cyan (#0080AF):** Supporting token from the extracted palette.
- **color-dark-gray-11 (#484048):** Supporting token from the extracted palette.
- **color-dark-gray-12 (#383840):** Supporting token from the extracted palette.
- **color-blue-5 (#6A7983):** Supporting token from the extracted palette.
- **color-blue-6 (#3818A0):** Supporting token from the extracted palette.
- **color-red-3 (#804038):** Supporting token from the extracted palette.
- **color-cyan-6 (#3D8282):** Supporting token from the extracted palette.
- **color-dark-red-7 (#501810):** Supporting token from the extracted palette.
- **color-red-4 (#A85050):** Supporting token from the extracted palette.
- **color-orange-2 (#A16B20):** Supporting token from the extracted palette.
- **color-dark-red-8 (#481818):** Supporting token from the extracted palette.
- **color-dark-purple (#302048):** Supporting token from the extracted palette.
- **color-purple (#584870):** Supporting token from the extracted palette.
- **color-dark-green-2 (#384030):** Supporting token from the extracted palette.
- **color-orange-3 (#A3694F):** Supporting token from the extracted palette.
- **color-red-5 (#A4646F):** Supporting token from the extracted palette.
- **color-mid-gray-5 (#767676):** Supporting token from the extracted palette.
- **color-green-5 (#697F37):** Supporting token from the extracted palette.
- **color-blue-7 (#6F74A4):** Supporting token from the extracted palette.
- **color-red-6 (#C0574A):** Supporting token from the extracted palette.
- **color-purple-2 (#8E69A3):** Supporting token from the extracted palette.
- **color-purple-3 (#703090):** Supporting token from the extracted palette.
- **color-red-7 (#B82810):** Supporting token from the extracted palette.
- **color-dark-blue-3 (#183860):** Supporting token from the extracted palette.
- **color-dark-cyan-2 (#106850):** Supporting token from the extracted palette.
- **color-dark-cyan-3 (#1B8857):** Supporting token from the extracted palette.
- **color-dark-cyan-4 (#086050):** Supporting token from the extracted palette.
- **color-dark-gray-13 (#282828):** Supporting token from the extracted palette.
- **color-light-gray-5 (#EEEEEE):** Supporting token from the extracted palette.
- **color-white-3 (#F9FFFA):** Supporting token from the extracted palette.
- **color-white-4 (#F4F4F4):** Supporting token from the extracted palette.
- **color-light-gray (#B3B3B3):** Supporting token from the extracted palette.
- **color-mid-gray (#696969):** Supporting token from the extracted palette.
- **color-dark-gray (#555555):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#7C7C7C):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#656565):** Supporting token from the extracted palette.
- **color-blue-2 (#0000EE):** Supporting token from the extracted palette.
- **color-dark-gray-5 (#101010):** Supporting token from the extracted palette.
- **color-mid-gray-4 (#808080):** Supporting token from the extracted palette.
- **color-light-gray-4 (#C5C5C5):** Supporting token from the extracted palette.
- **color-cyan-3 (#32AE88):** Supporting token from the extracted palette.
- **color-light-gray-3 (#C1C1C1):** Supporting token from the extracted palette.
- **color-light-gray-6 (#D8D8D8):** Supporting token from the extracted palette.
- **color-mid-gray-7 (#707070):** Supporting token from the extracted palette.
- **color-light-gray-7 (#BBBBBB):** Supporting token from the extracted palette.
- **color-light-gray-2 (#C7C5C7):** Supporting token from the extracted palette.
- **color-mid-gray-6 (#999999):** Supporting token from the extracted palette.
- **color-dark-gray-7 (#2A2A2A):** Supporting token from the extracted palette.
- **color-pink (#AF2896):** Supporting token from the extracted palette.
- **color-blue-3 (#509BF5):** Supporting token from the extracted palette.
- **color-dark-blue-4 (#2E3644):** Supporting token from the extracted palette.

## Typography

Primary typeface: **SpotifyMixUI, SpotifyMixUITitle, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Times, 24px, weight 500.
- **h1:** font Times, 16px, weight 500.
- **h2:** font Times, 14.4px, weight 500.
- **h3:** font Times, 14px, weight 500.
- **body-lg:** font Times, 13.6px, weight 500.
- **body-md:** font Times, 13.3333px, weight 500.
- **body-sm:** font Times, 13.008px, weight 500.
- **caption:** font Times, 12.992px, weight 500.
- **code:** font SpotifyMixUI, 13.008px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (24px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (153.727px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (400px):** Responsive layout threshold.
- **sm (425px):** Responsive layout threshold.
- **md (426px):** Responsive layout threshold.
- **lg (500px):** Responsive layout threshold.
- **xl (530px):** Responsive layout threshold.
- **2xl (550px):** Responsive layout threshold.
- **3xl (599.95px):** Responsive layout threshold.
- **bp-8 (600px):** Responsive layout threshold.
- **bp-9 (768px):** Responsive layout threshold.
- **bp-10 (769px):** Responsive layout threshold.
- **bp-11 (890px):** Responsive layout threshold.
- **bp-12 (896px):** Responsive layout threshold.
- **bp-13 (897px):** Responsive layout threshold.
- **bp-14 (992px):** Responsive layout threshold.
- **bp-15 (1023px):** Responsive layout threshold.
- **bp-16 (1024px):** Responsive layout threshold.
- **bp-17 (1280px):** Responsive layout threshold.
- **breakpoint-xs (400px):** Responsive layout threshold.
- **breakpoint-sm (425px):** Responsive layout threshold.
- **breakpoint-md (426px):** Responsive layout threshold.
- **breakpoint-lg (500px):** Responsive layout threshold.
- **breakpoint-xl (530px):** Responsive layout threshold.
- **breakpoint-2xl (550px):** Responsive layout threshold.
- **breakpoint-3xl (599.95px):** Responsive layout threshold.
- **breakpoint-bp-8 (600px):** Responsive layout threshold.
- **breakpoint-bp-9 (768px):** Responsive layout threshold.
- **breakpoint-bp-10 (769px):** Responsive layout threshold.
- **breakpoint-bp-11 (890px):** Responsive layout threshold.
- **breakpoint-bp-12 (896px):** Responsive layout threshold.
- **breakpoint-bp-13 (897px):** Responsive layout threshold.
- **breakpoint-bp-14 (992px):** Responsive layout threshold.
- **breakpoint-bp-15 (1023px):** Responsive layout threshold.
- **breakpoint-bp-16 (1024px):** Responsive layout threshold.
- **breakpoint-bp-17 (1280px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.5) 0px 8px 24px 0px`
- **md:** `rgba(0, 0, 0, 0.3) 0px 8px 8px 0px`
- **lg:** `rgb(18, 18, 18) 0px 1px 0px 0px, rgb(124, 124, 124) 0px 0px 0px 1px inset`
- **xl:** `rgba(0, 0, 0, 0.5) 0px 2px 4px 0px`
- **shadow-5:** `rgb(128, 128, 128) 0px 0px 5px 0px`
- **shadow-6:** `rgb(124, 124, 124) 0px 0px 0px 1px inset`
- **shadow-sm:** `rgba(0, 0, 0, 0.5) 0px 8px 24px 0px`
- **shadow-md:** `rgba(0, 0, 0, 0.3) 0px 8px 8px 0px`
- **shadow-lg:** `rgb(18, 18, 18) 0px 1px 0px 0px, rgb(124, 124, 124) 0px 0px 0px 1px inset`
- **shadow-xl:** `rgba(0, 0, 0, 0.5) 0px 2px 4px 0px`
- **shadow-shadow-5:** `rgb(128, 128, 128) 0px 0px 5px 0px`
- **shadow-shadow-6:** `rgb(124, 124, 124) 0px 0px 0px 1px inset`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (2px):** Border radius token.
- **md (2.5px):** Border radius token.
- **lg (3px):** Border radius token.
- **xl (4px):** Border radius token.
- **2xl (6px):** Border radius token.
- **full (8px):** Border radius token.

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
- Avoid pairing --color-light-gray on --color-white (2.1:1, Fail).
- Avoid pairing --color-light-gray on --color-green (1.09:1, Fail).
- Avoid pairing --color-mid-gray on --color-green (2.86:1, Fail).
