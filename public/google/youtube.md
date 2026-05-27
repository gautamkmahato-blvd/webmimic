---
version: alpha
name: "(5038) YouTube"
description: "Converted from UI Inspector extraction of https://www.youtube.com/"
colors:
  primary: "#000000"
  secondary: "#909090"
  tertiary: "#FF0033"
  neutral: "#606060"
  on-primary: "#606060"
  on-tertiary: "#FFFFFF"
  color-dark-gray: "#0F0F0F"
  color-light-gray: "#EEEEEE"
  color-dark-gray-3: "#616161"
  color-light-gray-2: "#E3E3E3"
  color-orange: "rgba(201, 105, 69, 0.13)"
  color-red-2: "#E1002D"
  color-light-gray-3: "#EFEFEF"
  color-red-3: "rgba(201, 80, 69, 0.13)"
  color-orange-2: "rgba(204, 161, 66, 0.13)"
  color-orange-3: "rgba(225, 123, 45, 0.13)"
  color-orange-4: "rgba(222, 145, 48, 0.13)"
  color-red-4: "rgba(225, 59, 45, 0.13)"
  color-red-5: "rgba(225, 51, 45, 0.13)"
  color-red-6: "rgba(225, 84, 45, 0.13)"
  color-red-8: "rgba(225, 81, 45, 0.13)"
  color-orange-5: "rgba(201, 129, 70, 0.13)"
  color-yellow: "rgba(201, 201, 69, 0.13)"
  color-orange-6: "rgba(201, 116, 69, 0.13)"
  color-yellow-2: "rgba(201, 193, 69, 0.13)"
  color-blue-3: "rgba(69, 143, 201, 0.13)"
  color-blue-4: "rgba(52, 67, 218, 0.13)"
  color-dark-gray-5: "rgba(28, 28, 28, 0.9)"
  color-white-2: "#F8F8F8"
  color-light-gray-8: "#F2E9E7"
  color-blue-5: "#3EA6FF"
  color-dark-gray-6: "#666666"
  color-dark-gray-7: "rgba(40, 40, 40, 0.6)"
  color-red-9: "#CC0000"
  color-blue: "#0000EE"
  color-dark-green: "#107516"
  color-blue-2: "#065FD4"
  color-light-gray-4: "#DDDDDD"
  color-light-gray-5: "#B8B8B8"
  color-mid-gray-2: "#999999"
  color-light-gray-7: "#D3D3D3"
  color-mid-gray: "#AAAAAA"
  color-red-7: "#FF2791"
  color-dark-gray-4: "#212121"
  color-mid-gray-4: "#717171"
  color-light-gray-6: "#EAEAEA"
typography:
  display:
    fontFamily: Roboto
    fontSize: 20px
    fontWeight: 500
    lineHeight: 56px
    letterSpacing: 0.5px
  h1:
    fontFamily: Roboto
    fontSize: 18px
    fontWeight: 500
    lineHeight: 47px
    letterSpacing: 0.5px
  h2:
    fontFamily: Roboto
    fontSize: 17.05px
    fontWeight: 500
    lineHeight: 40px
    letterSpacing: 0.5px
  h3:
    fontFamily: Roboto
    fontSize: 16px
    fontWeight: 500
    lineHeight: 36px
    letterSpacing: 0.5px
  body-lg:
    fontFamily: Roboto
    fontSize: 15px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: 0.5px
  body-md:
    fontFamily: Roboto
    fontSize: 14px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: 0.5px
  body-sm:
    fontFamily: Roboto
    fontSize: 13.97px
    fontWeight: 500
    lineHeight: 26px
    letterSpacing: 0.5px
  caption:
    fontFamily: Roboto
    fontSize: 13.3333px
    fontWeight: 500
    lineHeight: 25.4254px
    letterSpacing: 0.5px
  code:
    fontFamily: Arial
    fontSize: 11px
    fontWeight: 400
rounded:
  sm: "0px 40px 40px 0px"
  md: "0px 0px 12px 12px"
  lg: "0px 28px 28px 0px"
  xl: 2px
  2xl: 3px
  full: 4px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 18px
  xl: 32px
  2xl: 284.695px
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

This design system was auto-extracted from https://www.youtube.com/ (45 colors · 40 type tokens · 26 spacing steps · 109 breakpoints · 11 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-13T17:23:29.110Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#909090):** Muted text, borders, and metadata.
- **tertiary (#FF0033):** Primary accent for links, buttons, and focus states.
- **neutral (#606060):** Primary readable text on dark surfaces.
- **on-primary (#606060):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-dark-gray (#0F0F0F):** Supporting token from the extracted palette.
- **color-light-gray (#EEEEEE):** Supporting token from the extracted palette.
- **color-dark-gray-3 (#616161):** Supporting token from the extracted palette.
- **color-light-gray-2 (#E3E3E3):** Supporting token from the extracted palette.
- **color-orange (rgba(201, 105, 69, 0.13)):** Supporting token from the extracted palette.
- **color-red-2 (#E1002D):** Supporting token from the extracted palette.
- **color-light-gray-3 (#EFEFEF):** Supporting token from the extracted palette.
- **color-red-3 (rgba(201, 80, 69, 0.13)):** Supporting token from the extracted palette.
- **color-orange-2 (rgba(204, 161, 66, 0.13)):** Supporting token from the extracted palette.
- **color-orange-3 (rgba(225, 123, 45, 0.13)):** Supporting token from the extracted palette.
- **color-orange-4 (rgba(222, 145, 48, 0.13)):** Supporting token from the extracted palette.
- **color-red-4 (rgba(225, 59, 45, 0.13)):** Supporting token from the extracted palette.
- **color-red-5 (rgba(225, 51, 45, 0.13)):** Supporting token from the extracted palette.
- **color-red-6 (rgba(225, 84, 45, 0.13)):** Supporting token from the extracted palette.
- **color-red-8 (rgba(225, 81, 45, 0.13)):** Supporting token from the extracted palette.
- **color-orange-5 (rgba(201, 129, 70, 0.13)):** Supporting token from the extracted palette.
- **color-yellow (rgba(201, 201, 69, 0.13)):** Supporting token from the extracted palette.
- **color-orange-6 (rgba(201, 116, 69, 0.13)):** Supporting token from the extracted palette.
- **color-yellow-2 (rgba(201, 193, 69, 0.13)):** Supporting token from the extracted palette.
- **color-blue-3 (rgba(69, 143, 201, 0.13)):** Supporting token from the extracted palette.
- **color-blue-4 (rgba(52, 67, 218, 0.13)):** Supporting token from the extracted palette.
- **color-dark-gray-5 (rgba(28, 28, 28, 0.9)):** Supporting token from the extracted palette.
- **color-white-2 (#F8F8F8):** Supporting token from the extracted palette.
- **color-light-gray-8 (#F2E9E7):** Supporting token from the extracted palette.
- **color-blue-5 (#3EA6FF):** Supporting token from the extracted palette.
- **color-dark-gray-6 (#666666):** Supporting token from the extracted palette.
- **color-dark-gray-7 (rgba(40, 40, 40, 0.6)):** Supporting token from the extracted palette.
- **color-red-9 (#CC0000):** Supporting token from the extracted palette.
- **color-blue (#0000EE):** Supporting token from the extracted palette.
- **color-dark-green (#107516):** Supporting token from the extracted palette.
- **color-blue-2 (#065FD4):** Supporting token from the extracted palette.
- **color-light-gray-4 (#DDDDDD):** Supporting token from the extracted palette.
- **color-light-gray-5 (#B8B8B8):** Supporting token from the extracted palette.
- **color-mid-gray-2 (#999999):** Supporting token from the extracted palette.
- **color-light-gray-7 (#D3D3D3):** Supporting token from the extracted palette.
- **color-mid-gray (#AAAAAA):** Supporting token from the extracted palette.
- **color-red-7 (#FF2791):** Supporting token from the extracted palette.
- **color-dark-gray-4 (#212121):** Supporting token from the extracted palette.
- **color-mid-gray-4 (#717171):** Supporting token from the extracted palette.
- **color-light-gray-6 (#EAEAEA):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Arial, YouTube Noto, Family, Roboto**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Roboto, 20px, weight 500.
- **h1:** font Roboto, 18px, weight 500.
- **h2:** font Roboto, 17.05px, weight 500.
- **h3:** font Roboto, 16px, weight 500.
- **body-lg:** font Roboto, 15px, weight 500.
- **body-md:** font Roboto, 14px, weight 500.
- **body-sm:** font Roboto, 13.97px, weight 500.
- **caption:** font Roboto, 13.3333px, weight 500.
- **code:** font Arial, 11px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (18px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (284.695px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (250px):** Responsive layout threshold.
- **sm (299px):** Responsive layout threshold.
- **md (299.9px):** Responsive layout threshold.
- **lg (300px):** Responsive layout threshold.
- **xl (325px):** Responsive layout threshold.
- **2xl (330px):** Responsive layout threshold.
- **3xl (331px):** Responsive layout threshold.
- **bp-8 (340px):** Responsive layout threshold.
- **bp-9 (346px):** Responsive layout threshold.
- **bp-10 (392px):** Responsive layout threshold.
- **bp-11 (400px):** Responsive layout threshold.
- **bp-12 (411px):** Responsive layout threshold.
- **bp-13 (416px):** Responsive layout threshold.
- **bp-14 (424px):** Responsive layout threshold.
- **bp-15 (427px):** Responsive layout threshold.
- **bp-16 (428px):** Responsive layout threshold.
- **bp-17 (440px):** Responsive layout threshold.
- **bp-18 (455px):** Responsive layout threshold.
- **bp-19 (500px):** Responsive layout threshold.
- **bp-20 (512px):** Responsive layout threshold.
- **bp-21 (527px):** Responsive layout threshold.
- **bp-22 (527.9px):** Responsive layout threshold.
- **bp-23 (528px):** Responsive layout threshold.
- **bp-24 (529px):** Responsive layout threshold.
- **bp-25 (549px):** Responsive layout threshold.
- **bp-26 (550px):** Responsive layout threshold.
- **bp-27 (552px):** Responsive layout threshold.
- **bp-28 (568px):** Responsive layout threshold.
- **bp-29 (570px):** Responsive layout threshold.
- **bp-30 (600px):** Responsive layout threshold.
- **bp-31 (605px):** Responsive layout threshold.
- **bp-32 (615px):** Responsive layout threshold.
- **bp-33 (620px):** Responsive layout threshold.
- **bp-34 (627px):** Responsive layout threshold.
- **bp-35 (630px):** Responsive layout threshold.
- **bp-36 (638px):** Responsive layout threshold.
- **bp-37 (640px):** Responsive layout threshold.
- **bp-38 (642px):** Responsive layout threshold.
- **bp-39 (650px):** Responsive layout threshold.
- **bp-40 (656px):** Responsive layout threshold.
- **bp-41 (662px):** Responsive layout threshold.
- **bp-42 (671px):** Responsive layout threshold.
- **bp-43 (680px):** Responsive layout threshold.
- **bp-44 (685px):** Responsive layout threshold.
- **bp-45 (691px):** Responsive layout threshold.
- **bp-46 (700px):** Responsive layout threshold.
- **bp-47 (701px):** Responsive layout threshold.
- **bp-48 (712px):** Responsive layout threshold.
- **bp-49 (720px):** Responsive layout threshold.
- **bp-50 (723px):** Responsive layout threshold.
- **bp-51 (729px):** Responsive layout threshold.
- **bp-52 (750px):** Responsive layout threshold.
- **bp-53 (768px):** Responsive layout threshold.
- **bp-54 (791px):** Responsive layout threshold.
- **bp-55 (792px):** Responsive layout threshold.
- **bp-56 (800px):** Responsive layout threshold.
- **bp-57 (808px):** Responsive layout threshold.
- **bp-58 (839px):** Responsive layout threshold.
- **bp-59 (839.9px):** Responsive layout threshold.
- **bp-60 (840px):** Responsive layout threshold.
- **bp-61 (841px):** Responsive layout threshold.
- **bp-62 (852px):** Responsive layout threshold.
- **bp-63 (856px):** Responsive layout threshold.
- **bp-64 (871px):** Responsive layout threshold.
- **bp-65 (875px):** Responsive layout threshold.
- **bp-66 (876px):** Responsive layout threshold.
- **bp-67 (880px):** Responsive layout threshold.
- **bp-68 (882px):** Responsive layout threshold.
- **bp-69 (930px):** Responsive layout threshold.
- **bp-70 (931px):** Responsive layout threshold.
- **bp-71 (936px):** Responsive layout threshold.
- **bp-72 (971px):** Responsive layout threshold.
- **bp-73 (980px):** Responsive layout threshold.
- **bp-74 (984px):** Responsive layout threshold.
- **bp-75 (999px):** Responsive layout threshold.
- **bp-76 (1000px):** Responsive layout threshold.
- **bp-77 (1001px):** Responsive layout threshold.
- **bp-78 (1015px):** Responsive layout threshold.
- **bp-79 (1023px):** Responsive layout threshold.
- **bp-80 (1023.9px):** Responsive layout threshold.
- **bp-81 (1024px):** Responsive layout threshold.
- **bp-82 (1050px):** Responsive layout threshold.
- **bp-83 (1066px):** Responsive layout threshold.
- **bp-84 (1070px):** Responsive layout threshold.
- **bp-85 (1080px):** Responsive layout threshold.
- **bp-86 (1081px):** Responsive layout threshold.
- **bp-87 (1090px):** Responsive layout threshold.
- **bp-88 (1128px):** Responsive layout threshold.
- **bp-89 (1143px):** Responsive layout threshold.
- **bp-90 (1156px):** Responsive layout threshold.
- **bp-91 (1157px):** Responsive layout threshold.
- **bp-92 (1185px):** Responsive layout threshold.
- **bp-93 (1200px):** Responsive layout threshold.
- **bp-94 (1280px):** Responsive layout threshold.
- **bp-95 (1294px):** Responsive layout threshold.
- **bp-96 (1304px):** Responsive layout threshold.
- **bp-97 (1311px):** Responsive layout threshold.
- **bp-98 (1312px):** Responsive layout threshold.
- **bp-99 (1328px):** Responsive layout threshold.
- **bp-100 (1353px):** Responsive layout threshold.
- **bp-101 (1439px):** Responsive layout threshold.
- **bp-102 (1480px):** Responsive layout threshold.
- **bp-103 (1544px):** Responsive layout threshold.
- **bp-104 (1560px):** Responsive layout threshold.
- **bp-105 (1600px):** Responsive layout threshold.
- **bp-106 (1708px):** Responsive layout threshold.
- **bp-107 (1720px):** Responsive layout threshold.
- **bp-108 (2200px):** Responsive layout threshold.
- **bp-109 (2244px):** Responsive layout threshold.
- **breakpoint-xs (250px):** Responsive layout threshold.
- **breakpoint-sm (299px):** Responsive layout threshold.
- **breakpoint-md (299.9px):** Responsive layout threshold.
- **breakpoint-lg (300px):** Responsive layout threshold.
- **breakpoint-xl (325px):** Responsive layout threshold.
- **breakpoint-2xl (330px):** Responsive layout threshold.
- **breakpoint-3xl (331px):** Responsive layout threshold.
- **breakpoint-bp-8 (340px):** Responsive layout threshold.
- **breakpoint-bp-9 (346px):** Responsive layout threshold.
- **breakpoint-bp-10 (392px):** Responsive layout threshold.
- **breakpoint-bp-11 (400px):** Responsive layout threshold.
- **breakpoint-bp-12 (411px):** Responsive layout threshold.
- **breakpoint-bp-13 (416px):** Responsive layout threshold.
- **breakpoint-bp-14 (424px):** Responsive layout threshold.
- **breakpoint-bp-15 (427px):** Responsive layout threshold.
- **breakpoint-bp-16 (428px):** Responsive layout threshold.
- **breakpoint-bp-17 (440px):** Responsive layout threshold.
- **breakpoint-bp-18 (455px):** Responsive layout threshold.
- **breakpoint-bp-19 (500px):** Responsive layout threshold.
- **breakpoint-bp-20 (512px):** Responsive layout threshold.
- **breakpoint-bp-21 (527px):** Responsive layout threshold.
- **breakpoint-bp-22 (527.9px):** Responsive layout threshold.
- **breakpoint-bp-23 (528px):** Responsive layout threshold.
- **breakpoint-bp-24 (529px):** Responsive layout threshold.
- **breakpoint-bp-25 (549px):** Responsive layout threshold.
- **breakpoint-bp-26 (550px):** Responsive layout threshold.
- **breakpoint-bp-27 (552px):** Responsive layout threshold.
- **breakpoint-bp-28 (568px):** Responsive layout threshold.
- **breakpoint-bp-29 (570px):** Responsive layout threshold.
- **breakpoint-bp-30 (600px):** Responsive layout threshold.
- **breakpoint-bp-31 (605px):** Responsive layout threshold.
- **breakpoint-bp-32 (615px):** Responsive layout threshold.
- **breakpoint-bp-33 (620px):** Responsive layout threshold.
- **breakpoint-bp-34 (627px):** Responsive layout threshold.
- **breakpoint-bp-35 (630px):** Responsive layout threshold.
- **breakpoint-bp-36 (638px):** Responsive layout threshold.
- **breakpoint-bp-37 (640px):** Responsive layout threshold.
- **breakpoint-bp-38 (642px):** Responsive layout threshold.
- **breakpoint-bp-39 (650px):** Responsive layout threshold.
- **breakpoint-bp-40 (656px):** Responsive layout threshold.
- **breakpoint-bp-41 (662px):** Responsive layout threshold.
- **breakpoint-bp-42 (671px):** Responsive layout threshold.
- **breakpoint-bp-43 (680px):** Responsive layout threshold.
- **breakpoint-bp-44 (685px):** Responsive layout threshold.
- **breakpoint-bp-45 (691px):** Responsive layout threshold.
- **breakpoint-bp-46 (700px):** Responsive layout threshold.
- **breakpoint-bp-47 (701px):** Responsive layout threshold.
- **breakpoint-bp-48 (712px):** Responsive layout threshold.
- **breakpoint-bp-49 (720px):** Responsive layout threshold.
- **breakpoint-bp-50 (723px):** Responsive layout threshold.
- **breakpoint-bp-51 (729px):** Responsive layout threshold.
- **breakpoint-bp-52 (750px):** Responsive layout threshold.
- **breakpoint-bp-53 (768px):** Responsive layout threshold.
- **breakpoint-bp-54 (791px):** Responsive layout threshold.
- **breakpoint-bp-55 (792px):** Responsive layout threshold.
- **breakpoint-bp-56 (800px):** Responsive layout threshold.
- **breakpoint-bp-57 (808px):** Responsive layout threshold.
- **breakpoint-bp-58 (839px):** Responsive layout threshold.
- **breakpoint-bp-59 (839.9px):** Responsive layout threshold.
- **breakpoint-bp-60 (840px):** Responsive layout threshold.
- **breakpoint-bp-61 (841px):** Responsive layout threshold.
- **breakpoint-bp-62 (852px):** Responsive layout threshold.
- **breakpoint-bp-63 (856px):** Responsive layout threshold.
- **breakpoint-bp-64 (871px):** Responsive layout threshold.
- **breakpoint-bp-65 (875px):** Responsive layout threshold.
- **breakpoint-bp-66 (876px):** Responsive layout threshold.
- **breakpoint-bp-67 (880px):** Responsive layout threshold.
- **breakpoint-bp-68 (882px):** Responsive layout threshold.
- **breakpoint-bp-69 (930px):** Responsive layout threshold.
- **breakpoint-bp-70 (931px):** Responsive layout threshold.
- **breakpoint-bp-71 (936px):** Responsive layout threshold.
- **breakpoint-bp-72 (971px):** Responsive layout threshold.
- **breakpoint-bp-73 (980px):** Responsive layout threshold.
- **breakpoint-bp-74 (984px):** Responsive layout threshold.
- **breakpoint-bp-75 (999px):** Responsive layout threshold.
- **breakpoint-bp-76 (1000px):** Responsive layout threshold.
- **breakpoint-bp-77 (1001px):** Responsive layout threshold.
- **breakpoint-bp-78 (1015px):** Responsive layout threshold.
- **breakpoint-bp-79 (1023px):** Responsive layout threshold.
- **breakpoint-bp-80 (1023.9px):** Responsive layout threshold.
- **breakpoint-bp-81 (1024px):** Responsive layout threshold.
- **breakpoint-bp-82 (1050px):** Responsive layout threshold.
- **breakpoint-bp-83 (1066px):** Responsive layout threshold.
- **breakpoint-bp-84 (1070px):** Responsive layout threshold.
- **breakpoint-bp-85 (1080px):** Responsive layout threshold.
- **breakpoint-bp-86 (1081px):** Responsive layout threshold.
- **breakpoint-bp-87 (1090px):** Responsive layout threshold.
- **breakpoint-bp-88 (1128px):** Responsive layout threshold.
- **breakpoint-bp-89 (1143px):** Responsive layout threshold.
- **breakpoint-bp-90 (1156px):** Responsive layout threshold.
- **breakpoint-bp-91 (1157px):** Responsive layout threshold.
- **breakpoint-bp-92 (1185px):** Responsive layout threshold.
- **breakpoint-bp-93 (1200px):** Responsive layout threshold.
- **breakpoint-bp-94 (1280px):** Responsive layout threshold.
- **breakpoint-bp-95 (1294px):** Responsive layout threshold.
- **breakpoint-bp-96 (1304px):** Responsive layout threshold.
- **breakpoint-bp-97 (1311px):** Responsive layout threshold.
- **breakpoint-bp-98 (1312px):** Responsive layout threshold.
- **breakpoint-bp-99 (1328px):** Responsive layout threshold.
- **breakpoint-bp-100 (1353px):** Responsive layout threshold.
- **breakpoint-bp-101 (1439px):** Responsive layout threshold.
- **breakpoint-bp-102 (1480px):** Responsive layout threshold.
- **breakpoint-bp-103 (1544px):** Responsive layout threshold.
- **breakpoint-bp-104 (1560px):** Responsive layout threshold.
- **breakpoint-bp-105 (1600px):** Responsive layout threshold.
- **breakpoint-bp-106 (1708px):** Responsive layout threshold.
- **breakpoint-bp-107 (1720px):** Responsive layout threshold.
- **breakpoint-bp-108 (2200px):** Responsive layout threshold.
- **breakpoint-bp-109 (2244px):** Responsive layout threshold.

## Elevation & Depth

Shadow tokens define depth for overlays, cards, and elevated panels.

- **sm:** `rgba(0, 0, 0, 0.16) 0px 2px 5px 0px, rgba(0, 0, 0, 0.2) 0px 3px 6px 0px`
- **md:** `rgb(238, 238, 238) 0px 1px 2px 0px inset`
- **lg:** `rgba(0, 0, 0, 0.2) 0px 2px 4px 0px`
- **xl:** `rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px`
- **shadow-sm:** `rgba(0, 0, 0, 0.16) 0px 2px 5px 0px, rgba(0, 0, 0, 0.2) 0px 3px 6px 0px`
- **shadow-md:** `rgb(238, 238, 238) 0px 1px 2px 0px inset`
- **shadow-lg:** `rgba(0, 0, 0, 0.2) 0px 2px 4px 0px`
- **shadow-xl:** `rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px`

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (0px 40px 40px 0px):** Border radius token.
- **md (0px 0px 12px 12px):** Border radius token.
- **lg (0px 28px 28px 0px):** Border radius token.
- **xl (2px):** Border radius token.
- **2xl (3px):** Border radius token.
- **full (4px):** Border radius token.

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
- Avoid pairing --color-dark-gray-2 on --color-dark-gray-3 (1.02:1, Fail).
- Avoid pairing --color-blue on --color-black (2.23:1, Fail).
- Avoid pairing --color-blue on --color-dark-gray (2.04:1, Fail).
