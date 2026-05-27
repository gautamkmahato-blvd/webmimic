---
version: alpha
name: "About Meta"
description: "Converted from UI Inspector extraction of https://www.meta.com/en-gb/about/?srsltid=AfmBOooXOpmENdSinKKHCdK571HVEl4iPifxJcr6s5GC15Tej_ZUR_9O"
colors:
  primary: "#000000"
  secondary: "#5D6C7B"
  tertiary: "#0457CB"
  neutral: "#1C1E21"
  on-primary: "#1C1E21"
  on-tertiary: "#FFFFFF"
  color-blue-4: "#0064E0"
  color-dark-blue-2: "rgba(10, 19, 23, 0.12)"
  color-white-2: "#F8F9FB"
  color-dark-gray-2: "#0A1317"
  color-dark-blue: "#1C2B33"
  color-blue-2: "#385898"
  color-light-gray: "#DADDE1"
  color-dark-blue-3: "#465A69"
  color-blue-5: "#768591"
  color-white-3: "rgba(248, 249, 251, 0.2)"
  color-light-gray-2: "#CBD2D9"
typography:
  display:
    fontFamily: Times
    fontSize: 48px
    fontWeight: 500
    lineHeight: 57.6px
    letterSpacing: -0.36px
  h1:
    fontFamily: Times
    fontSize: 36px
    fontWeight: 500
    lineHeight: 52.8px
    letterSpacing: -0.36px
  h2:
    fontFamily: Times
    fontSize: 18px
    fontWeight: 500
    lineHeight: 43.2px
    letterSpacing: -0.36px
  h3:
    fontFamily: Times
    fontSize: 16px
    fontWeight: 500
    lineHeight: 39.6px
    letterSpacing: -0.36px
  body-lg:
    fontFamily: Times
    fontSize: 14px
    fontWeight: 500
    lineHeight: 27px
    letterSpacing: -0.36px
  body-md:
    fontFamily: Times
    fontSize: 12px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: -0.36px
  code:
    fontFamily: Helvetica
    fontSize: 16px
    fontWeight: 400
rounded:
  sm: 24px
  md: 32px
  lg: "50%"
  xl: 100px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 20px
  xl: 32px
  2xl: 470.5px
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

This design system was auto-extracted from https://www.meta.com/en-gb/about/?srsltid=AfmBOooXOpmENdSinKKHCdK571HVEl4iPifxJcr6s5GC15Tej_ZUR_9O (16 colors · 32 type tokens · 34 spacing steps · 218 breakpoints · 6 motion tokens).

The UI favors a dark, developer-focused aesthetic with high-contrast typography and a single accent color for interactive elements.

Original extraction date: 2026-04-15T18:07:08.299Z.

## Colors

The palette combines neutral surfaces, readable text colors, and an accent used for primary actions.

- **primary (#000000):** Core surface and headline color.
- **secondary (#5D6C7B):** Muted text, borders, and metadata.
- **tertiary (#0457CB):** Primary accent for links, buttons, and focus states.
- **neutral (#1C1E21):** Primary readable text on dark surfaces.
- **on-primary (#1C1E21):** Text and icons placed on primary surfaces.
- **on-tertiary (#FFFFFF):** Text and icons placed on accent surfaces.
- **color-blue-4 (#0064E0):** Supporting token from the extracted palette.
- **color-dark-blue-2 (rgba(10, 19, 23, 0.12)):** Supporting token from the extracted palette.
- **color-white-2 (#F8F9FB):** Supporting token from the extracted palette.
- **color-dark-gray-2 (#0A1317):** Supporting token from the extracted palette.
- **color-dark-blue (#1C2B33):** Supporting token from the extracted palette.
- **color-blue-2 (#385898):** Supporting token from the extracted palette.
- **color-light-gray (#DADDE1):** Supporting token from the extracted palette.
- **color-dark-blue-3 (#465A69):** Supporting token from the extracted palette.
- **color-blue-5 (#768591):** Supporting token from the extracted palette.
- **color-white-3 (rgba(248, 249, 251, 0.2)):** Supporting token from the extracted palette.
- **color-light-gray-2 (#CBD2D9):** Supporting token from the extracted palette.

## Typography

Primary typeface: **Helvetica, Optimistic VF, Optimistic Display Medium, Optimistic Text Bold, Optimistic Text Normal, Family, Times**. Scale tokens map extracted font sizes to semantic roles for headings and body copy.

- **display:** font Times, 48px, weight 500.
- **h1:** font Times, 36px, weight 500.
- **h2:** font Times, 18px, weight 500.
- **h3:** font Times, 16px, weight 500.
- **body-lg:** font Times, 14px, weight 500.
- **body-md:** font Times, 12px, weight 500.
- **code:** font Helvetica, 16px, weight 400.

## Layout

Spacing follows a modular scale derived from extracted layout tokens.

- **xs (4px):** Layout rhythm and component padding.
- **sm (8px):** Layout rhythm and component padding.
- **md (16px):** Layout rhythm and component padding.
- **lg (20px):** Layout rhythm and component padding.
- **xl (32px):** Layout rhythm and component padding.
- **2xl (470.5px):** Layout rhythm and component padding.

**Breakpoints**
- **xs (70px):** Responsive layout threshold.
- **sm (240px):** Responsive layout threshold.
- **md (256px):** Responsive layout threshold.
- **lg (280px):** Responsive layout threshold.
- **xl (299px):** Responsive layout threshold.
- **2xl (320px):** Responsive layout threshold.
- **3xl (340px):** Responsive layout threshold.
- **bp-8 (359px):** Responsive layout threshold.
- **bp-9 (360px):** Responsive layout threshold.
- **bp-10 (375px):** Responsive layout threshold.
- **bp-11 (389px):** Responsive layout threshold.
- **bp-12 (390px):** Responsive layout threshold.
- **bp-13 (400px):** Responsive layout threshold.
- **bp-14 (404px):** Responsive layout threshold.
- **bp-15 (420px):** Responsive layout threshold.
- **bp-16 (422px):** Responsive layout threshold.
- **bp-17 (428px):** Responsive layout threshold.
- **bp-18 (435px):** Responsive layout threshold.
- **bp-19 (450px):** Responsive layout threshold.
- **bp-20 (459px):** Responsive layout threshold.
- **bp-21 (460px):** Responsive layout threshold.
- **bp-22 (480px):** Responsive layout threshold.
- **bp-23 (481px):** Responsive layout threshold.
- **bp-24 (482px):** Responsive layout threshold.
- **bp-25 (486px):** Responsive layout threshold.
- **bp-26 (488px):** Responsive layout threshold.
- **bp-27 (499px):** Responsive layout threshold.
- **bp-28 (500px):** Responsive layout threshold.
- **bp-29 (501px):** Responsive layout threshold.
- **bp-30 (520px):** Responsive layout threshold.
- **bp-31 (530px):** Responsive layout threshold.
- **bp-32 (531px):** Responsive layout threshold.
- **bp-33 (539px):** Responsive layout threshold.
- **bp-34 (540px):** Responsive layout threshold.
- **bp-35 (550px):** Responsive layout threshold.
- **bp-36 (559px):** Responsive layout threshold.
- **bp-37 (560px):** Responsive layout threshold.
- **bp-38 (561px):** Responsive layout threshold.
- **bp-39 (562px):** Responsive layout threshold.
- **bp-40 (564px):** Responsive layout threshold.
- **bp-41 (575px):** Responsive layout threshold.
- **bp-42 (583px):** Responsive layout threshold.
- **bp-43 (584px):** Responsive layout threshold.
- **bp-44 (599px):** Responsive layout threshold.
- **bp-45 (600px):** Responsive layout threshold.
- **bp-46 (639px):** Responsive layout threshold.
- **bp-47 (648px):** Responsive layout threshold.
- **bp-48 (650px):** Responsive layout threshold.
- **bp-49 (655px):** Responsive layout threshold.
- **bp-50 (656px):** Responsive layout threshold.
- **bp-51 (660px):** Responsive layout threshold.
- **bp-52 (665px):** Responsive layout threshold.
- **bp-53 (670px):** Responsive layout threshold.
- **bp-54 (679px):** Responsive layout threshold.
- **bp-55 (680px):** Responsive layout threshold.
- **bp-56 (699px):** Responsive layout threshold.
- **bp-57 (700px):** Responsive layout threshold.
- **bp-58 (701px):** Responsive layout threshold.
- **bp-59 (703px):** Responsive layout threshold.
- **bp-60 (704px):** Responsive layout threshold.
- **bp-61 (719px):** Responsive layout threshold.
- **bp-62 (720px):** Responsive layout threshold.
- **bp-63 (735px):** Responsive layout threshold.
- **bp-64 (736px):** Responsive layout threshold.
- **bp-65 (744px):** Responsive layout threshold.
- **bp-66 (760px):** Responsive layout threshold.
- **bp-67 (767px):** Responsive layout threshold.
- **bp-68 (768px):** Responsive layout threshold.
- **bp-69 (769px):** Responsive layout threshold.
- **bp-70 (780px):** Responsive layout threshold.
- **bp-71 (784px):** Responsive layout threshold.
- **bp-72 (789px):** Responsive layout threshold.
- **bp-73 (790px):** Responsive layout threshold.
- **bp-74 (792px):** Responsive layout threshold.
- **bp-75 (799px):** Responsive layout threshold.
- **bp-76 (800px):** Responsive layout threshold.
- **bp-77 (802px):** Responsive layout threshold.
- **bp-78 (819px):** Responsive layout threshold.
- **bp-79 (820px):** Responsive layout threshold.
- **bp-80 (836px):** Responsive layout threshold.
- **bp-81 (837px):** Responsive layout threshold.
- **bp-82 (838px):** Responsive layout threshold.
- **bp-83 (860px):** Responsive layout threshold.
- **bp-84 (868px):** Responsive layout threshold.
- **bp-85 (875px):** Responsive layout threshold.
- **bp-86 (876px):** Responsive layout threshold.
- **bp-87 (877px):** Responsive layout threshold.
- **bp-88 (878px):** Responsive layout threshold.
- **bp-89 (880px):** Responsive layout threshold.
- **bp-90 (899px):** Responsive layout threshold.
- **bp-91 (900px):** Responsive layout threshold.
- **bp-92 (905px):** Responsive layout threshold.
- **bp-93 (915px):** Responsive layout threshold.
- **bp-94 (916px):** Responsive layout threshold.
- **bp-95 (917px):** Responsive layout threshold.
- **bp-96 (939px):** Responsive layout threshold.
- **bp-97 (940px):** Responsive layout threshold.
- **bp-98 (950px):** Responsive layout threshold.
- **bp-99 (955px):** Responsive layout threshold.
- **bp-100 (959px):** Responsive layout threshold.
- **bp-101 (960px):** Responsive layout threshold.
- **bp-102 (970px):** Responsive layout threshold.
- **bp-103 (990px):** Responsive layout threshold.
- **bp-104 (996px):** Responsive layout threshold.
- **bp-105 (999px):** Responsive layout threshold.
- **bp-106 (1000px):** Responsive layout threshold.
- **bp-107 (1009px):** Responsive layout threshold.
- **bp-108 (1023px):** Responsive layout threshold.
- **bp-109 (1024px):** Responsive layout threshold.
- **bp-110 (1025px):** Responsive layout threshold.
- **bp-111 (1035px):** Responsive layout threshold.
- **bp-112 (1036px):** Responsive layout threshold.
- **bp-113 (1050px):** Responsive layout threshold.
- **bp-114 (1058px):** Responsive layout threshold.
- **bp-115 (1071px):** Responsive layout threshold.
- **bp-116 (1072px):** Responsive layout threshold.
- **bp-117 (1079px):** Responsive layout threshold.
- **bp-118 (1080px):** Responsive layout threshold.
- **bp-119 (1099px):** Responsive layout threshold.
- **bp-120 (1100px):** Responsive layout threshold.
- **bp-121 (1103px):** Responsive layout threshold.
- **bp-122 (1104px):** Responsive layout threshold.
- **bp-123 (1105px):** Responsive layout threshold.
- **bp-124 (1150px):** Responsive layout threshold.
- **bp-125 (1159px):** Responsive layout threshold.
- **bp-126 (1160px):** Responsive layout threshold.
- **bp-127 (1190px):** Responsive layout threshold.
- **bp-128 (1193px):** Responsive layout threshold.
- **bp-129 (1194px):** Responsive layout threshold.
- **bp-130 (1199px):** Responsive layout threshold.
- **bp-131 (1200px):** Responsive layout threshold.
- **bp-132 (1201px):** Responsive layout threshold.
- **bp-133 (1219px):** Responsive layout threshold.
- **bp-134 (1230px):** Responsive layout threshold.
- **bp-135 (1235px):** Responsive layout threshold.
- **bp-136 (1237px):** Responsive layout threshold.
- **bp-137 (1238px):** Responsive layout threshold.
- **bp-138 (1249px):** Responsive layout threshold.
- **bp-139 (1259px):** Responsive layout threshold.
- **bp-140 (1260px):** Responsive layout threshold.
- **bp-141 (1267px):** Responsive layout threshold.
- **bp-142 (1274px):** Responsive layout threshold.
- **bp-143 (1279px):** Responsive layout threshold.
- **bp-144 (1280px):** Responsive layout threshold.
- **bp-145 (1290px):** Responsive layout threshold.
- **bp-146 (1291px):** Responsive layout threshold.
- **bp-147 (1300px):** Responsive layout threshold.
- **bp-148 (1319px):** Responsive layout threshold.
- **bp-149 (1320px):** Responsive layout threshold.
- **bp-150 (1337px):** Responsive layout threshold.
- **bp-151 (1339px):** Responsive layout threshold.
- **bp-152 (1350px):** Responsive layout threshold.
- **bp-153 (1351px):** Responsive layout threshold.
- **bp-154 (1352px):** Responsive layout threshold.
- **bp-155 (1359px):** Responsive layout threshold.
- **bp-156 (1360px):** Responsive layout threshold.
- **bp-157 (1364px):** Responsive layout threshold.
- **bp-158 (1365px):** Responsive layout threshold.
- **bp-159 (1366px):** Responsive layout threshold.
- **bp-160 (1367px):** Responsive layout threshold.
- **bp-161 (1371px):** Responsive layout threshold.
- **bp-162 (1372px):** Responsive layout threshold.
- **bp-163 (1379px):** Responsive layout threshold.
- **bp-164 (1380px):** Responsive layout threshold.
- **bp-165 (1382px):** Responsive layout threshold.
- **bp-166 (1395px):** Responsive layout threshold.
- **bp-167 (1396px):** Responsive layout threshold.
- **bp-168 (1400px):** Responsive layout threshold.
- **bp-169 (1439px):** Responsive layout threshold.
- **bp-170 (1440px):** Responsive layout threshold.
- **bp-171 (1456px):** Responsive layout threshold.
- **bp-172 (1460px):** Responsive layout threshold.
- **bp-173 (1504px):** Responsive layout threshold.
- **bp-174 (1509px):** Responsive layout threshold.
- **bp-175 (1510px):** Responsive layout threshold.
- **bp-176 (1535px):** Responsive layout threshold.
- **bp-177 (1553px):** Responsive layout threshold.
- **bp-178 (1554px):** Responsive layout threshold.
- **bp-179 (1599px):** Responsive layout threshold.
- **bp-180 (1600px):** Responsive layout threshold.
- **bp-181 (1627px):** Responsive layout threshold.
- **bp-182 (1628px):** Responsive layout threshold.
- **bp-183 (1661px):** Responsive layout threshold.
- **bp-184 (1667px):** Responsive layout threshold.
- **bp-185 (1668px):** Responsive layout threshold.
- **bp-186 (1679px):** Responsive layout threshold.
- **bp-187 (1680px):** Responsive layout threshold.
- **bp-188 (1711px):** Responsive layout threshold.
- **bp-189 (1712px):** Responsive layout threshold.
- **bp-190 (1728px):** Responsive layout threshold.
- **bp-191 (1800px):** Responsive layout threshold.
- **bp-192 (1825px):** Responsive layout threshold.
- **bp-193 (1826px):** Responsive layout threshold.
- **bp-194 (1869px):** Responsive layout threshold.
- **bp-195 (1870px):** Responsive layout threshold.
- **bp-196 (1919px):** Responsive layout threshold.
- **bp-197 (1920px):** Responsive layout threshold.
- **bp-198 (1921px):** Responsive layout threshold.
- **bp-199 (1928px):** Responsive layout threshold.
- **bp-200 (1935px):** Responsive layout threshold.
- **bp-201 (1936px):** Responsive layout threshold.
- **bp-202 (1983px):** Responsive layout threshold.
- **bp-203 (1984px):** Responsive layout threshold.
- **bp-204 (1987px):** Responsive layout threshold.
- **bp-205 (1988px):** Responsive layout threshold.
- **bp-206 (2027px):** Responsive layout threshold.
- **bp-207 (2028px):** Responsive layout threshold.
- **bp-208 (2048px):** Responsive layout threshold.
- **bp-209 (2142px):** Responsive layout threshold.
- **bp-210 (2243px):** Responsive layout threshold.
- **bp-211 (2244px):** Responsive layout threshold.
- **bp-212 (2295px):** Responsive layout threshold.
- **bp-213 (2296px):** Responsive layout threshold.
- **bp-214 (2300px):** Responsive layout threshold.
- **bp-215 (2552px):** Responsive layout threshold.
- **bp-216 (2604px):** Responsive layout threshold.
- **bp-217 (2605px):** Responsive layout threshold.
- **bp-218 (9999px):** Responsive layout threshold.
- **breakpoint-xs (70px):** Responsive layout threshold.
- **breakpoint-sm (240px):** Responsive layout threshold.
- **breakpoint-md (256px):** Responsive layout threshold.
- **breakpoint-lg (280px):** Responsive layout threshold.
- **breakpoint-xl (299px):** Responsive layout threshold.
- **breakpoint-2xl (320px):** Responsive layout threshold.
- **breakpoint-3xl (340px):** Responsive layout threshold.
- **breakpoint-bp-8 (359px):** Responsive layout threshold.
- **breakpoint-bp-9 (360px):** Responsive layout threshold.
- **breakpoint-bp-10 (375px):** Responsive layout threshold.
- **breakpoint-bp-11 (389px):** Responsive layout threshold.
- **breakpoint-bp-12 (390px):** Responsive layout threshold.
- **breakpoint-bp-13 (400px):** Responsive layout threshold.
- **breakpoint-bp-14 (404px):** Responsive layout threshold.
- **breakpoint-bp-15 (420px):** Responsive layout threshold.
- **breakpoint-bp-16 (422px):** Responsive layout threshold.
- **breakpoint-bp-17 (428px):** Responsive layout threshold.
- **breakpoint-bp-18 (435px):** Responsive layout threshold.
- **breakpoint-bp-19 (450px):** Responsive layout threshold.
- **breakpoint-bp-20 (459px):** Responsive layout threshold.
- **breakpoint-bp-21 (460px):** Responsive layout threshold.
- **breakpoint-bp-22 (480px):** Responsive layout threshold.
- **breakpoint-bp-23 (481px):** Responsive layout threshold.
- **breakpoint-bp-24 (482px):** Responsive layout threshold.
- **breakpoint-bp-25 (486px):** Responsive layout threshold.
- **breakpoint-bp-26 (488px):** Responsive layout threshold.
- **breakpoint-bp-27 (499px):** Responsive layout threshold.
- **breakpoint-bp-28 (500px):** Responsive layout threshold.
- **breakpoint-bp-29 (501px):** Responsive layout threshold.
- **breakpoint-bp-30 (520px):** Responsive layout threshold.
- **breakpoint-bp-31 (530px):** Responsive layout threshold.
- **breakpoint-bp-32 (531px):** Responsive layout threshold.
- **breakpoint-bp-33 (539px):** Responsive layout threshold.
- **breakpoint-bp-34 (540px):** Responsive layout threshold.
- **breakpoint-bp-35 (550px):** Responsive layout threshold.
- **breakpoint-bp-36 (559px):** Responsive layout threshold.
- **breakpoint-bp-37 (560px):** Responsive layout threshold.
- **breakpoint-bp-38 (561px):** Responsive layout threshold.
- **breakpoint-bp-39 (562px):** Responsive layout threshold.
- **breakpoint-bp-40 (564px):** Responsive layout threshold.
- **breakpoint-bp-41 (575px):** Responsive layout threshold.
- **breakpoint-bp-42 (583px):** Responsive layout threshold.
- **breakpoint-bp-43 (584px):** Responsive layout threshold.
- **breakpoint-bp-44 (599px):** Responsive layout threshold.
- **breakpoint-bp-45 (600px):** Responsive layout threshold.
- **breakpoint-bp-46 (639px):** Responsive layout threshold.
- **breakpoint-bp-47 (648px):** Responsive layout threshold.
- **breakpoint-bp-48 (650px):** Responsive layout threshold.
- **breakpoint-bp-49 (655px):** Responsive layout threshold.
- **breakpoint-bp-50 (656px):** Responsive layout threshold.
- **breakpoint-bp-51 (660px):** Responsive layout threshold.
- **breakpoint-bp-52 (665px):** Responsive layout threshold.
- **breakpoint-bp-53 (670px):** Responsive layout threshold.
- **breakpoint-bp-54 (679px):** Responsive layout threshold.
- **breakpoint-bp-55 (680px):** Responsive layout threshold.
- **breakpoint-bp-56 (699px):** Responsive layout threshold.
- **breakpoint-bp-57 (700px):** Responsive layout threshold.
- **breakpoint-bp-58 (701px):** Responsive layout threshold.
- **breakpoint-bp-59 (703px):** Responsive layout threshold.
- **breakpoint-bp-60 (704px):** Responsive layout threshold.
- **breakpoint-bp-61 (719px):** Responsive layout threshold.
- **breakpoint-bp-62 (720px):** Responsive layout threshold.
- **breakpoint-bp-63 (735px):** Responsive layout threshold.
- **breakpoint-bp-64 (736px):** Responsive layout threshold.
- **breakpoint-bp-65 (744px):** Responsive layout threshold.
- **breakpoint-bp-66 (760px):** Responsive layout threshold.
- **breakpoint-bp-67 (767px):** Responsive layout threshold.
- **breakpoint-bp-68 (768px):** Responsive layout threshold.
- **breakpoint-bp-69 (769px):** Responsive layout threshold.
- **breakpoint-bp-70 (780px):** Responsive layout threshold.
- **breakpoint-bp-71 (784px):** Responsive layout threshold.
- **breakpoint-bp-72 (789px):** Responsive layout threshold.
- **breakpoint-bp-73 (790px):** Responsive layout threshold.
- **breakpoint-bp-74 (792px):** Responsive layout threshold.
- **breakpoint-bp-75 (799px):** Responsive layout threshold.
- **breakpoint-bp-76 (800px):** Responsive layout threshold.
- **breakpoint-bp-77 (802px):** Responsive layout threshold.
- **breakpoint-bp-78 (819px):** Responsive layout threshold.
- **breakpoint-bp-79 (820px):** Responsive layout threshold.
- **breakpoint-bp-80 (836px):** Responsive layout threshold.
- **breakpoint-bp-81 (837px):** Responsive layout threshold.
- **breakpoint-bp-82 (838px):** Responsive layout threshold.
- **breakpoint-bp-83 (860px):** Responsive layout threshold.
- **breakpoint-bp-84 (868px):** Responsive layout threshold.
- **breakpoint-bp-85 (875px):** Responsive layout threshold.
- **breakpoint-bp-86 (876px):** Responsive layout threshold.
- **breakpoint-bp-87 (877px):** Responsive layout threshold.
- **breakpoint-bp-88 (878px):** Responsive layout threshold.
- **breakpoint-bp-89 (880px):** Responsive layout threshold.
- **breakpoint-bp-90 (899px):** Responsive layout threshold.
- **breakpoint-bp-91 (900px):** Responsive layout threshold.
- **breakpoint-bp-92 (905px):** Responsive layout threshold.
- **breakpoint-bp-93 (915px):** Responsive layout threshold.
- **breakpoint-bp-94 (916px):** Responsive layout threshold.
- **breakpoint-bp-95 (917px):** Responsive layout threshold.
- **breakpoint-bp-96 (939px):** Responsive layout threshold.
- **breakpoint-bp-97 (940px):** Responsive layout threshold.
- **breakpoint-bp-98 (950px):** Responsive layout threshold.
- **breakpoint-bp-99 (955px):** Responsive layout threshold.
- **breakpoint-bp-100 (959px):** Responsive layout threshold.
- **breakpoint-bp-101 (960px):** Responsive layout threshold.
- **breakpoint-bp-102 (970px):** Responsive layout threshold.
- **breakpoint-bp-103 (990px):** Responsive layout threshold.
- **breakpoint-bp-104 (996px):** Responsive layout threshold.
- **breakpoint-bp-105 (999px):** Responsive layout threshold.
- **breakpoint-bp-106 (1000px):** Responsive layout threshold.
- **breakpoint-bp-107 (1009px):** Responsive layout threshold.
- **breakpoint-bp-108 (1023px):** Responsive layout threshold.
- **breakpoint-bp-109 (1024px):** Responsive layout threshold.
- **breakpoint-bp-110 (1025px):** Responsive layout threshold.
- **breakpoint-bp-111 (1035px):** Responsive layout threshold.
- **breakpoint-bp-112 (1036px):** Responsive layout threshold.
- **breakpoint-bp-113 (1050px):** Responsive layout threshold.
- **breakpoint-bp-114 (1058px):** Responsive layout threshold.
- **breakpoint-bp-115 (1071px):** Responsive layout threshold.
- **breakpoint-bp-116 (1072px):** Responsive layout threshold.
- **breakpoint-bp-117 (1079px):** Responsive layout threshold.
- **breakpoint-bp-118 (1080px):** Responsive layout threshold.
- **breakpoint-bp-119 (1099px):** Responsive layout threshold.
- **breakpoint-bp-120 (1100px):** Responsive layout threshold.
- **breakpoint-bp-121 (1103px):** Responsive layout threshold.
- **breakpoint-bp-122 (1104px):** Responsive layout threshold.
- **breakpoint-bp-123 (1105px):** Responsive layout threshold.
- **breakpoint-bp-124 (1150px):** Responsive layout threshold.
- **breakpoint-bp-125 (1159px):** Responsive layout threshold.
- **breakpoint-bp-126 (1160px):** Responsive layout threshold.
- **breakpoint-bp-127 (1190px):** Responsive layout threshold.
- **breakpoint-bp-128 (1193px):** Responsive layout threshold.
- **breakpoint-bp-129 (1194px):** Responsive layout threshold.
- **breakpoint-bp-130 (1199px):** Responsive layout threshold.
- **breakpoint-bp-131 (1200px):** Responsive layout threshold.
- **breakpoint-bp-132 (1201px):** Responsive layout threshold.
- **breakpoint-bp-133 (1219px):** Responsive layout threshold.
- **breakpoint-bp-134 (1230px):** Responsive layout threshold.
- **breakpoint-bp-135 (1235px):** Responsive layout threshold.
- **breakpoint-bp-136 (1237px):** Responsive layout threshold.
- **breakpoint-bp-137 (1238px):** Responsive layout threshold.
- **breakpoint-bp-138 (1249px):** Responsive layout threshold.
- **breakpoint-bp-139 (1259px):** Responsive layout threshold.
- **breakpoint-bp-140 (1260px):** Responsive layout threshold.
- **breakpoint-bp-141 (1267px):** Responsive layout threshold.
- **breakpoint-bp-142 (1274px):** Responsive layout threshold.
- **breakpoint-bp-143 (1279px):** Responsive layout threshold.
- **breakpoint-bp-144 (1280px):** Responsive layout threshold.
- **breakpoint-bp-145 (1290px):** Responsive layout threshold.
- **breakpoint-bp-146 (1291px):** Responsive layout threshold.
- **breakpoint-bp-147 (1300px):** Responsive layout threshold.
- **breakpoint-bp-148 (1319px):** Responsive layout threshold.
- **breakpoint-bp-149 (1320px):** Responsive layout threshold.
- **breakpoint-bp-150 (1337px):** Responsive layout threshold.
- **breakpoint-bp-151 (1339px):** Responsive layout threshold.
- **breakpoint-bp-152 (1350px):** Responsive layout threshold.
- **breakpoint-bp-153 (1351px):** Responsive layout threshold.
- **breakpoint-bp-154 (1352px):** Responsive layout threshold.
- **breakpoint-bp-155 (1359px):** Responsive layout threshold.
- **breakpoint-bp-156 (1360px):** Responsive layout threshold.
- **breakpoint-bp-157 (1364px):** Responsive layout threshold.
- **breakpoint-bp-158 (1365px):** Responsive layout threshold.
- **breakpoint-bp-159 (1366px):** Responsive layout threshold.
- **breakpoint-bp-160 (1367px):** Responsive layout threshold.
- **breakpoint-bp-161 (1371px):** Responsive layout threshold.
- **breakpoint-bp-162 (1372px):** Responsive layout threshold.
- **breakpoint-bp-163 (1379px):** Responsive layout threshold.
- **breakpoint-bp-164 (1380px):** Responsive layout threshold.
- **breakpoint-bp-165 (1382px):** Responsive layout threshold.
- **breakpoint-bp-166 (1395px):** Responsive layout threshold.
- **breakpoint-bp-167 (1396px):** Responsive layout threshold.
- **breakpoint-bp-168 (1400px):** Responsive layout threshold.
- **breakpoint-bp-169 (1439px):** Responsive layout threshold.
- **breakpoint-bp-170 (1440px):** Responsive layout threshold.
- **breakpoint-bp-171 (1456px):** Responsive layout threshold.
- **breakpoint-bp-172 (1460px):** Responsive layout threshold.
- **breakpoint-bp-173 (1504px):** Responsive layout threshold.
- **breakpoint-bp-174 (1509px):** Responsive layout threshold.
- **breakpoint-bp-175 (1510px):** Responsive layout threshold.
- **breakpoint-bp-176 (1535px):** Responsive layout threshold.
- **breakpoint-bp-177 (1553px):** Responsive layout threshold.
- **breakpoint-bp-178 (1554px):** Responsive layout threshold.
- **breakpoint-bp-179 (1599px):** Responsive layout threshold.
- **breakpoint-bp-180 (1600px):** Responsive layout threshold.
- **breakpoint-bp-181 (1627px):** Responsive layout threshold.
- **breakpoint-bp-182 (1628px):** Responsive layout threshold.
- **breakpoint-bp-183 (1661px):** Responsive layout threshold.
- **breakpoint-bp-184 (1667px):** Responsive layout threshold.
- **breakpoint-bp-185 (1668px):** Responsive layout threshold.
- **breakpoint-bp-186 (1679px):** Responsive layout threshold.
- **breakpoint-bp-187 (1680px):** Responsive layout threshold.
- **breakpoint-bp-188 (1711px):** Responsive layout threshold.
- **breakpoint-bp-189 (1712px):** Responsive layout threshold.
- **breakpoint-bp-190 (1728px):** Responsive layout threshold.
- **breakpoint-bp-191 (1800px):** Responsive layout threshold.
- **breakpoint-bp-192 (1825px):** Responsive layout threshold.
- **breakpoint-bp-193 (1826px):** Responsive layout threshold.
- **breakpoint-bp-194 (1869px):** Responsive layout threshold.
- **breakpoint-bp-195 (1870px):** Responsive layout threshold.
- **breakpoint-bp-196 (1919px):** Responsive layout threshold.
- **breakpoint-bp-197 (1920px):** Responsive layout threshold.
- **breakpoint-bp-198 (1921px):** Responsive layout threshold.
- **breakpoint-bp-199 (1928px):** Responsive layout threshold.
- **breakpoint-bp-200 (1935px):** Responsive layout threshold.
- **breakpoint-bp-201 (1936px):** Responsive layout threshold.
- **breakpoint-bp-202 (1983px):** Responsive layout threshold.
- **breakpoint-bp-203 (1984px):** Responsive layout threshold.
- **breakpoint-bp-204 (1987px):** Responsive layout threshold.
- **breakpoint-bp-205 (1988px):** Responsive layout threshold.
- **breakpoint-bp-206 (2027px):** Responsive layout threshold.
- **breakpoint-bp-207 (2028px):** Responsive layout threshold.
- **breakpoint-bp-208 (2048px):** Responsive layout threshold.
- **breakpoint-bp-209 (2142px):** Responsive layout threshold.
- **breakpoint-bp-210 (2243px):** Responsive layout threshold.
- **breakpoint-bp-211 (2244px):** Responsive layout threshold.
- **breakpoint-bp-212 (2295px):** Responsive layout threshold.
- **breakpoint-bp-213 (2296px):** Responsive layout threshold.
- **breakpoint-bp-214 (2300px):** Responsive layout threshold.
- **breakpoint-bp-215 (2552px):** Responsive layout threshold.
- **breakpoint-bp-216 (2604px):** Responsive layout threshold.
- **breakpoint-bp-217 (2605px):** Responsive layout threshold.
- **breakpoint-bp-218 (9999px):** Responsive layout threshold.

## Elevation & Depth

Elevation is minimal in the extracted system — surfaces rely on contrast and borders rather than heavy shadows.

## Shapes

Corner radii create a consistent component silhouette across buttons, inputs, and cards.

- **sm (24px):** Border radius token.
- **md (32px):** Border radius token.
- **lg (50%):** Border radius token.
- **xl (100px):** Border radius token.

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
- Avoid pairing --color-dark-gray on --color-black (1.26:1, Fail).
- Avoid pairing --color-dark-gray on --color-blue-3 (2.57:1, Fail).
- Avoid pairing --color-dark-gray on --color-dark-blue-2 (1.14:1, Fail).
