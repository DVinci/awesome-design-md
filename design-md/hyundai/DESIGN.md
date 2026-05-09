---
version: alpha
name: Hyundai
description: |
  Hyundai Motor Company's global design system is defined by confident Korean automotive authority
  expressed through deep navy blue, flat zero-radius geometry, and proprietary HyundaiMedium
  typography. The visual language is cinematic and editorial — full-bleed hero photography,
  restrained white space, and a monochromatic palette anchored by the iconic Hyundai Blue
  (#002C5F). Sustainability and clean mobility are signaled through a cyan accent (#00A1C7)
  used selectively for electric and IONIQ sub-brand touchpoints.

colors:
  primary: "#002C5F"
  primary-active: "#002853"
  accent-cyan: "#00A1C7"
  ink: "#000000"
  body: "#555555"
  muted: "#999999"
  footer-text: "#A3A3A3"
  canvas: "#FFFFFF"
  surface: "#F8F8F8"
  surface-warm: "#F6F3F2"
  surface-dark: "#27455C"
  on-dark: "#FFFFFF"
  hairline: "#F4F4F4"
  hairline-medium: "#CCCCCC"
  semantic-success: "#1E8F4E"
  semantic-warning: "#F59E0B"
  semantic-error: "#D32F2F"

typography:
  display-xl:
    fontFamily: "HyundaiMedium, HyundaiKRMedium, Malgun Gothic, Arial, sans-serif"
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0
  display-md:
    fontFamily: "HyundaiMedium, HyundaiKRMedium, Malgun Gothic, Arial, sans-serif"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  title-lg:
    fontFamily: "HyundaiMedium, HyundaiKRMedium, Malgun Gothic, Arial, sans-serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
  title-md:
    fontFamily: "HyundaiMedium, HyundaiKRMedium, Malgun Gothic, Arial, sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
  title-sm:
    fontFamily: "HyundaiMedium, HyundaiKRMedium, Malgun Gothic, Arial, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  body-lg:
    fontFamily: "HyundaiRegular, HyundaiTextRegular, HyundaiKRRegular, Malgun Gothic, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0
  body-md:
    fontFamily: "HyundaiRegular, HyundaiTextRegular, HyundaiKRRegular, Malgun Gothic, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0
  body-sm:
    fontFamily: "HyundaiRegular, HyundaiTextRegular, HyundaiKRRegular, Malgun Gothic, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: "HyundaiRegular, HyundaiTextRegular, HyundaiKRRegular, Malgun Gothic, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: 0
  nav-link:
    fontFamily: "HyundaiRegular, HyundaiTextRegular, HyundaiKRRegular, Malgun Gothic, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0
  caption:
    fontFamily: "HyundaiRegular, HyundaiTextRegular, HyundaiKRRegular, Malgun Gothic, Arial, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px

rounded:
  none: 0px
  xs: 2px
  sm: 2px
  md: 2px
  lg: 4px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "14px 30px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "14px 30px"
    border: "none"

  button-primary-disabled:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "14px 30px"
    border: "none"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "14px 30px"
    border: "1px solid {colors.primary-active}"

  button-secondary-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "14px 30px"
    border: "1px solid {colors.primary}"

  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "14px 30px"
    border: "1px solid {colors.on-dark}"

  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"

  card-vehicle:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    border: "none"

  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.hairline-medium}"

  text-input-focused:
    border: "1px solid {colors.primary}"

  top-nav:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    border: "none"

  top-nav-scrolled:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    border: "0 0 1px 0 {colors.hairline}"

  badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "4px 8px"
    border: "none"

  badge-accent:
    backgroundColor: "{colors.accent-cyan}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "4px 8px"
    border: "none"
---

# Hyundai Design System

## Overview

Hyundai Motor Company's visual identity projects automotive authority and forward momentum through a deeply considered Korean aesthetic — premium, minimal, and technically precise. The global design system pairs deep navy blue heritage with flat, frameless geometry and crisp proprietary typography to evoke reliability and engineering confidence. Every surface reads as intentional: full-bleed photography, controlled typography hierarchy, and restrained whitespace let vehicles and brand stories take centre stage.

The system leans heavily on cinematic scale. Hero sections span full viewport height; section transitions are driven by image overlays rather than borders or shadows. The flat design philosophy (zero border-radius throughout) signals precision over warmth — this is automotive engineering expressed as interface design. Cyan accents applied specifically to IONIQ and electric vehicle content create a sub-brand separation that communicates clean mobility without abandoning the core navy identity.

**Key visual characteristics:**
- Deep navy blue `#002C5F` as the primary brand anchor — authoritative and consistent across all touchpoints
- Zero border-radius throughout — flat, frameless, technically precise geometry
- Proprietary HyundaiMedium and HyundaiRegular font families; weight hierarchy handled by separate font faces, not CSS weight values
- Full-bleed, editorial-quality vehicle and brand photography as the primary visual medium
- Cyan accent `#00A1C7` reserved exclusively for electric/IONIQ sub-brand differentiation
- Dark canvas overlays (`rgba(0,0,0,0.6)`) on hero imagery for text legibility without compromising photography
- Minimal shadow usage — depth achieved through image layering and surface tone contrast, not box-shadows
- Typography at cinematic scale: 40px display on interior pages, 33px+ for category navigation

**Market position:** Hyundai's digital identity sits between premium German automotive restraint and Korean technology-forward confidence — more editorial than Toyota, more accessible than BMW.

---

## Colors

### Brand & Accent

| Token | Hex | Use |
| --- | --- | --- |
| `primary` | `#002C5F` | Hyundai Blue — primary CTA buttons, brand headers, active states, logo field |
| `primary-active` | `#002853` | Hover/active darkening of primary; secondary button borders |
| `accent-cyan` | `#00A1C7` | IONIQ/EV sub-brand accent, sustainable mobility touchpoints |

### Surface

| Token | Hex | Use |
| --- | --- | --- |
| `canvas` | `#FFFFFF` | Default page background, card background |
| `surface` | `#F8F8F8` | Subtle page sections, alternate row backgrounds |
| `surface-warm` | `#F6F3F2` | Warm off-white lifestyle/heritage sections |
| `surface-dark` | `#27455C` | Dark navy card overlays, dark section backgrounds |

### Text

| Token | Hex | Use |
| --- | --- | --- |
| `ink` | `#000000` | Primary headings, body text on white |
| `body` | `#555555` | Secondary body copy, card descriptions |
| `muted` | `#999999` | Subdued links, category labels, placeholder text |
| `footer-text` | `#A3A3A3` | Footer links and copyright |
| `on-dark` | `#FFFFFF` | Text and icons on dark/navy surfaces and hero overlays |

### Semantic

| Token | Hex | Use |
| --- | --- | --- |
| `semantic-success` | `#1E8F4E` | Form validation success, availability |
| `semantic-warning` | `#F59E0B` | Caution indicators |
| `semantic-error` | `#D32F2F` | Form errors, critical alerts |

---

## Typography

### Font Family

Hyundai uses a proprietary type system with separate font files for weight variants rather than CSS `font-weight`. All fonts load via Hyundai's CDN as WOFF2 files.

| Face | CSS name | Use |
| --- | --- | --- |
| Hyundai Regular | `HyundaiRegular` | Body text, buttons, nav, captions |
| Hyundai Text Regular | `HyundaiTextRegular` | Extended body copy, long-form reading |
| Hyundai Medium | `HyundaiMedium` | All display headings (h1–h3) |
| Hyundai KR Regular | `HyundaiKRRegular` | Korean language body text |
| Hyundai KR Medium | `HyundaiKRMedium` | Korean language headings |

**Fallback stack:** `"Malgun Gothic", Dotum, AppleGothicNeoSD, "Apple SD 산돌고딕 Neo", Arial, sans-serif`

**Note:** These are proprietary fonts not available via Google Fonts or system libraries. For design prototyping, substitute `"Noto Sans KR"` or `"Roboto"` as functional equivalents.

### Hierarchy Table

| Role | Font | Size | Weight | Line Height | Letter Spacing | Use |
| --- | --- | --- | --- | --- | --- | --- |
| `display-xl` | HyundaiMedium | 40px | 400 | 1.2 | 0 | Hero section headings, vehicle names at large scale |
| `display-md` | HyundaiMedium | 36px | 400 | 1.5 | 0 | Section titles, content page h2 |
| `title-lg` | HyundaiMedium | 32px | 400 | 1.0 | 0 | Page h1 titles, chapter headings |
| `title-md` | HyundaiMedium | 24px | 400 | 1.0 | 0 | Secondary headings, card group labels |
| `title-sm` | HyundaiMedium | 20px | 400 | 1.4 | 0 | Card titles, featured article headings |
| `body-lg` | HyundaiRegular | 18px | 400 | 1.75 | 0 | Nav links, featured article lead text |
| `body-md` | HyundaiRegular | 16px | 400 | 1.75 | 0 | Default body copy, button labels |
| `body-sm` | HyundaiRegular | 14px | 400 | 1.5 | 0 | Small body, form labels |
| `button` | HyundaiRegular | 16px | 400 | 1.625 | 0 | All button and CTA labels |
| `nav-link` | HyundaiRegular | 18px | 400 | 1.75 | 0 | Primary navigation links |
| `caption` | HyundaiRegular | 13px | 400 | 1.5 | 0 | Category tags, image captions |

### Principles

- **Weight via font face:** Hyundai does not use `font-weight` numerically for variation — boldness is achieved by switching between HyundaiRegular and HyundaiMedium font files
- **Letter spacing:** Normal (0) across all sizes — Hyundai typography avoids tracking adjustments
- **Case:** Sentence case for all headings and body; vehicle model names like "IONIQ" and "ELANTRA" are uppercase as brand identifiers, not CSS `text-transform`
- **Substitute:** Use `"Noto Sans KR", sans-serif` for multilingual prototyping; weight 400 = Regular, weight 500 = Medium equivalent

---

## Layout

### Spacing System

Base unit: 8px

| Token | Value | Use |
| --- | --- | --- |
| `xxs` | 4px | Micro gaps, icon margins |
| `xs` | 8px | Tight element spacing |
| `sm` | 12px | Compact padding, label margins |
| `md` | 16px | Default element padding |
| `lg` | 24px | Card internal padding, section sub-gaps |
| `xl` | 32px | Card margins, feature gaps |
| `xxl` | 48px | Section top/bottom padding |
| `section` | 80px | Full section vertical rhythm |

### Grid & Container

| Context | Max Width | Columns | Gutter |
| --- | --- | --- | --- |
| Mobile | 100% | 4 | 16px |
| Tablet | 768px | 8 | 24px |
| Desktop | 1280px | 12 | 32px |
| Wide | 1440px | 12 | 40px |

### Whitespace Philosophy

Hyundai uses generous vertical breathing room between content sections (80px at desktop scale). Within sections, content is tightly structured around a clear typographic hierarchy. Hero sections consume 100vh by default, creating a cinematic gate before editorial content. Vehicle cards use compact, image-first layouts with minimal text metadata below the fold.

---

## Elevation & Depth

### Levels

| Level | Treatment | Example use |
| --- | --- | --- |
| 0 — Flat | No shadow, no border | Default surface, hero overlays |
| 1 — Tonal | Background color change (`#F8F8F8`) | Alternate section backgrounds |
| 2 — Overlay | `rgba(0,0,0,0.6)` image overlay | Hero text legibility on photography |
| 3 — Dark surface | `#27455C` solid dark card | Featured article dark cards |
| 4 — Modal | White surface + `rgba(0,0,0,0.5)` scrim | Cookie consent, overlay panels |

### Shadow Philosophy

Hyundai's design system deliberately avoids `box-shadow`. Depth is created exclusively through:
- **Photographic layering** — cinematic full-bleed backgrounds with text panels floating over imagery
- **Color surface stepping** — white → `#F8F8F8` → `#F6F3F2` → `#27455C` for depth without shadow
- **Opacity overlays** — `rgba(0,0,0,0.6)` on photography for text contrast

The absence of shadows reinforces the brand's flat, precise automotive engineering aesthetic.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
| --- | --- | --- |
| `none` | 0px | All buttons, cards, containers, inputs — default throughout |
| `xs` | 2px | Minimal rounding on cookie consent/modal UI elements only |
| `pill` | 9999px | Back-to-top button only (circular icon button) |

**Philosophy:** Zero border-radius is a defining Hyundai brand signal. Square corners convey technical precision and automotive-grade engineering. The only exception is the floating circular "Top" button (50% border-radius). Any deviation from flat corners would undermine the brand identity.

### Photography & Imagery

- **Aspect ratios:** 16:9 for hero; 3:2 and 4:3 for cards; square 1:1 for product thumbnails
- **Treatment:** Full-bleed, edge-to-edge with no visible crop frame or border
- **Overlay:** Dark scrim (`rgba(0,0,0,0.5–0.7)`) on hero imagery when text is placed over photography
- **Quality standard:** High-production automotive photography — no lifestyle stock imagery; vehicle imagery shot in dramatic lighting

---

## Components

### Buttons

**Primary Button** — Hyundai Blue fill, white text, flat edges:
- Background: `#002C5F`
- Text: `#FFFFFF`, HyundaiRegular, 16px
- Border-radius: 0px
- Padding: 14px 30px
- Border: none
- Hover: darken to `#002853`

**Secondary Button** — transparent fill, navy border:
- Background: transparent
- Text: `#000000`, HyundaiRegular, 16px
- Border: `1px solid #002853`
- Border-radius: 0px
- Padding: 14px 30px
- Hover: fill with `#002C5F`, text to `#FFFFFF`

**Ghost Button (on dark)** — transparent fill, white border, used on hero imagery:
- Background: transparent
- Text: `#FFFFFF`, HyundaiRegular, 16px
- Border: `1px solid #FFFFFF`
- Border-radius: 0px
- Padding: 14px 30px

**Download/Document CTA** — same as Primary, no icon convention defined.

### Cards

**Vehicle Card:**
- Background: `#F8F8F8`
- Radius: 0px
- Padding: 24px
- Image fills top of card edge-to-edge
- Title: HyundaiMedium, 15px, uppercase (`ELANTRA`, `IONIQ 5`)
- No border, no shadow

**Article/Journal Card:**
- Background: `#FFFFFF` or `#27455C` (dark variant)
- Radius: 0px
- Category tag: HyundaiRegular, 13px, muted gray
- Title: HyundaiMedium, 20px
- No border, no shadow

### Inputs & Forms

- Background: `#FFFFFF`
- Border: `1px solid #CCCCCC`
- Border-radius: 0px
- Padding: 12px 16px
- Focus: border changes to `1px solid #002C5F`
- Font: HyundaiRegular, 16px, color `#000000`

### Navigation

- **Top nav (transparent hero state):** transparent background, white text and logo, 18px HyundaiRegular
- **Top nav (scrolled/interior):** white background, black text, subtle hairline border at bottom
- **Mobile menu:** full-screen drawer, `#FFFFFF` background, vertically stacked links

### Badges & Tags

- Background: `#F8F8F8` or transparent
- Text: `#999999`, HyundaiRegular, 13px
- Radius: 0px
- Padding: 4px 8px
- IONIQ/EV badge variant: `#00A1C7` background, white text

---

## Do's and Don'ts

**Do:**
- Use `#002C5F` (Hyundai Blue) as the sole primary action color — it should dominate all CTA surfaces
- Keep all corners at 0px border-radius; never round buttons, cards, or containers
- Allow hero photography to span the full viewport width and height with no bounding frames
- Use HyundaiMedium exclusively for headings and vehicle names — never apply `font-weight: bold` to HyundaiRegular
- Apply dark overlays (`rgba(0,0,0,0.5–0.7)`) on hero imagery when placing text over photographs
- Uppercase vehicle model names as brand identifiers (IONIQ, ELANTRA, TUCSON)
- Reserve cyan `#00A1C7` only for electric vehicle and sustainability content — not general accent use
- Use generous vertical section spacing (80px+) to maintain the brand's editorial, cinematic pace

**Don't:**
- Don't use border-radius on any UI element except the circular back-to-top button
- Don't introduce gradients on buttons or surfaces — Hyundai uses flat solid color only
- Don't use `font-weight` for typographic hierarchy; switch between font face files (Regular vs Medium)
- Don't use decorative box-shadows anywhere — the brand deliberately avoids them
- Don't use the cyan accent `#00A1C7` for general CTA or decorative purposes outside EV context
- Don't use sans-serif body copy at sizes below 13px — readability for multilingual (Korean) content requires adequate scale
- Don't crop photography with border-radius or visible frames — images always bleed to container edges
- Don't apply multiple font weights on a single text element — single face per context

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
| --- | --- | --- |
| Mobile | < 768px | Single column, hamburger nav, stacked hero text, 16px base |
| Tablet | 768px–1024px | 2-column cards, condensed nav, 80vw container |
| Desktop | 1024px–1280px | Full 12-column grid, horizontal nav, full typography scale |
| Wide | 1280px+ | 1440px max container, increased section spacing |

### Touch Targets

- Minimum tap target: 44px × 44px
- Navigation links: full row height tappable
- Buttons: minimum height 48px on mobile

### Collapsing Strategy

- **Navigation:** Horizontal global nav collapses to hamburger icon at <1024px; drawer slides in from left with full-screen overlay
- **Vehicle grid:** 4-column → 2-column → 1-column with image-first card layout preserved at all sizes
- **Hero sections:** Scale from 100vh full-bleed at desktop to 60–80vh on mobile; text overlay stays legible

### Image Behavior

- All hero images: `object-fit: cover`, always fill container at 100% width
- Vehicle thumbnails: `aspect-ratio: 3/2`, fill container
- No image `max-width` constraints — photography always fills its container completely

---

## Agent Prompt Guide

### Quick Color Reference

- Primary (Hyundai Blue): `#002C5F`
- Primary Active: `#002853`
- Accent Cyan (EV/IONIQ): `#00A1C7`
- Canvas (background): `#FFFFFF`
- Ink (headings): `#000000`
- Body (body copy): `#555555`
- Muted: `#999999`
- Surface: `#F8F8F8`
- Surface Warm: `#F6F3F2`
- Surface Dark: `#27455C`
- On Dark (text on navy/hero): `#FFFFFF`
- Hairline (borders): `#F4F4F4`
- Footer text: `#A3A3A3`

### Example Component Prompts

**Hero Section:**
"Create a full-viewport hero on a full-bleed vehicle photograph. Apply a dark overlay `rgba(0,0,0,0.6)` over the image. Headline: 40px, HyundaiMedium (fallback: Noto Sans KR), white `#FFFFFF`, no letter-spacing. Subheadline: 18px, HyundaiRegular (fallback: Roboto), white `#FFFFFF`. Primary CTA button: `#002C5F` background, `#FFFFFF` text, 16px, 0px border-radius, 14px 30px padding, no border. Ghost CTA: transparent background, `1px solid #FFFFFF` border, same sizing."

**Vehicle Card:**
"Create a vehicle card on `#F8F8F8` background. 0px border-radius. No shadow. Full-width vehicle image at top, 3:2 aspect ratio, edge-to-edge, no border. Below image: model name in HyundaiMedium (fallback: Roboto Medium) 15px uppercase `#000000`, body description HyundaiRegular 14px `#555555`, padding 24px."

**Button Set:**
"Primary button: `#002C5F` background, `#FFFFFF` text, HyundaiRegular 16px, 0px border-radius, 14px 30px padding, no border. Hover state: `#002853` background. Secondary button: transparent background, `1px solid #002853` border, `#000000` text, same radius and padding."

**Navigation Bar:**
"Top navigation bar: transparent background (on hero), `#FFFFFF` logo and links, HyundaiRegular 18px. On scroll/interior pages: `#FFFFFF` background, `#000000` links, `1px solid #F4F4F4` bottom border. No border-radius. No shadow."

**Section Background:**
"Alternate section backgrounds using surface hierarchy: primary `#FFFFFF` → secondary `#F8F8F8` → warm accent `#F6F3F2`. Dark narrative sections: `#27455C` background with `#FFFFFF` text."

### Iteration Guide

1. Start with `#FFFFFF` canvas and `#000000` ink as your typographic base
2. Load HyundaiRegular and HyundaiMedium from Hyundai's CDN, or substitute Noto Sans KR for prototyping
3. Apply 0px border-radius to all UI components — flat corners are non-negotiable for brand fidelity
4. Use `#002C5F` exclusively for primary CTAs; do not reuse on decorative elements
5. Reserve `#00A1C7` cyan only for EV/IONIQ/sustainability content contexts
6. For dark hero sections, use `rgba(0,0,0,0.5–0.7)` overlay on photography — never solid dark backgrounds
7. Section vertical rhythm: 80px top/bottom at desktop, 48px on mobile
8. Check WCAG contrast: `#002C5F` on `#FFFFFF` passes AAA; `#999999` on `#FFFFFF` is muted/decorative only
