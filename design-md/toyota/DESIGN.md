---
version: alpha
name: Toyota
description: |
  Toyota's design system is built on precision, trust, and forward momentum — mirroring
  the brand's automotive ethos. A high-contrast palette anchored in Toyota Red (#E10A1D)
  against a clean white canvas communicates clarity and reliability. The proprietary
  tcom font family (tcomSans, tcomMed, tcomLight) delivers a refined, neutral typographic
  voice with tight negative tracking on headings and generous line heights for body text.
  Ghost pill buttons and minimal border treatments signal refinement without visual noise,
  while the flat zero-radius approach on containers keeps the interface lean and precise.

colors:
  primary: "#E10A1D"
  primary-active: "#CC0000"
  ink: "#000000"
  body: "#333333"
  muted: "#606060"
  muted-alt: "#767676"
  canvas: "#FFFFFF"
  surface: "#F6F6F6"
  surface-blue: "#F6FAFF"
  surface-dark: "#112037"
  hairline: "#D0D0D0"
  hairline-light: "#EAEAEA"
  on-dark: "#FFFFFF"
  accent-blue: "#145FFF"
  overlay-dark: "#000000CC"
  overlay-white: "#FFFFFF99"
  semantic-error: "#CC0000"
  semantic-success: "#008000"
  semantic-warning: "#B8860B"

typography:
  display-xl:
    fontFamily: "tcomSans, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.167
    letterSpacing: 0px
  display-md:
    fontFamily: "tcomMed, HelveticaNeueMedium, \"Helvetica Neue Medium\", Arial, sans-serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.167
    letterSpacing: -0.5px
  title-lg:
    fontFamily: "tcomLight, HelvNeueLight, \"Helvetica Neue Light\", Arial, sans-serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: -0.5px
  title-md:
    fontFamily: "tcomMed, HelveticaNeueMedium, \"Helvetica Neue Medium\", Arial, sans-serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: -0.5px
  body-lg:
    fontFamily: "tcomSans, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0px
  body-md:
    fontFamily: "tcomLight, HelvNeueLight, \"Helvetica Neue Light\", Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.571
    letterSpacing: 0px
  body-sm:
    fontFamily: "tcomSans, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  button:
    fontFamily: "tcomMed, HelveticaNeueMedium, \"Helvetica Neue Medium\", Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0px
  nav-link:
    fontFamily: "tcomSans, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0px
  caption:
    fontFamily: "tcomSans, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px

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
  sm: 4px
  md: 8px
  lg: 12px
  pill: 50px
  circle: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
    border: "none"

  button-primary-disabled:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
    border: "none"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "9px 24px"
    border: "1px solid {colors.on-dark}"

  button-secondary-dark:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "9px 24px"
    border: "1px solid {colors.ink}"

  button-ghost:
    backgroundColor: "{colors.overlay-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "3px 8px 6px"
    border: "1px solid {colors.surface}"

  card-base:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
    border: "none"

  card-vehicle:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline-light}"

  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.hairline}"

  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.primary}"

  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    border: "0 0 1px 0 {colors.hairline}"

  badge:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "3px 8px"

---

# Toyota Design System

## Overview

Toyota's digital design language channels the brand's core identity: precision engineering, lasting reliability, and human-centered mobility. The interface is clean to the point of austerity — a white canvas with structured typography and a single bold accent in Toyota Red (#E10A1D) that anchors CTAs and brand indicators without overwhelming the experience. Photography and product imagery carry the emotional weight, while the UI stands back with restrained elegance.

The typographic system uses Toyota's proprietary tcom font family across three weights — tcomSans (regular navigation/body), tcomMed (headings and buttons), and tcomLight (editorial copy) — delivering a distinctive voice that feels automotive and premium without resorting to heavy serifs. Ghost pill buttons with no fill are the dominant CTA pattern on dark hero backgrounds; solid red pills appear for account-level actions. Whitespace is generous and deliberate, and layout grids are wide-format to showcase vehicle imagery at full width.

Key visual characteristics:
- Toyota Red (#E10A1D) is the sole accent color — used for brand indicators, active toggles, and account CTAs
- Pill-radius buttons (50px) are universal across all interactive elements
- Flat zero-radius containers and cards keep the UI sharp and automotive
- Three-weight proprietary font family (tcomSans / tcomMed / tcomLight) handles all typographic roles
- Negative letter-spacing (−0.5px) on all display and title headings for tight, premium feel
- Ghost/transparent buttons on dark hero backgrounds — no filled secondary CTAs
- Full-bleed photography-first hero sections with text overlaid at the bottom-left
- Footer surface (#F6F6F6) creates gentle elevation from canvas without shadow

Toyota differentiates from luxury automotive competitors (Lexus, BMW) by embracing approachability — the design feels accessible and practical rather than aspirational and cold. Against mass-market competitors (Ford, GM), Toyota's digital presence is more restrained and refined.

---

## Colors

### Brand & Accent

| Token | Hex | Use |
| ----- | --- | --- |
| `primary` | `#E10A1D` | Toyota Red — brand indicator dots, active toggles, account CTAs |
| `primary-active` | `#CC0000` | Hover / pressed state on red elements |
| `accent-blue` | `#145FFF` | Link text, inline action color |

### Surface

| Token | Hex | Use |
| ----- | --- | --- |
| `canvas` | `#FFFFFF` | Default page background |
| `surface` | `#F6F6F6` | Footer, secondary panels, off-white card backgrounds |
| `surface-blue` | `#F6FAFF` | In-progress purchase panels, blue-tint surfaces |
| `surface-dark` | `#112037` | Dark navy feature sections, promotional banners |
| `overlay-dark` | `#000000CC` | Semi-opaque dark overlay on hero images (info chips) |
| `overlay-white` | `#FFFFFF99` | White scrim on dark backgrounds |

### Text

| Token | Hex | Use |
| ----- | --- | --- |
| `ink` | `#000000` | Primary headings, main body text on white |
| `body` | `#333333` | Default body copy |
| `muted` | `#606060` | Secondary text, captions |
| `muted-alt` | `#767676` | Tertiary labels, metadata |
| `on-dark` | `#FFFFFF` | Text on dark/hero backgrounds |

### Semantic

| Token | Hex | Use |
| ----- | --- | --- |
| `semantic-error` | `#CC0000` | Error states, validation messages |
| `semantic-success` | `#008000` | Confirmation, availability |
| `semantic-warning` | `#B8860B` | Warning notices |

---

## Typography

### Font Family

Toyota uses a proprietary web font family called **tcom**, delivered in three weights:

- **tcomSans** — Regular weight; navigation links, body paragraphs, labels. Fallback: `"Helvetica Neue", Helvetica, Arial, sans-serif`
- **tcomMed** — Medium weight; headings (h2–h4), button text, emphasized copy. Fallback: `HelveticaNeueMedium, "Helvetica Neue Medium", Arial, sans-serif`
- **tcomLight** — Light weight; editorial body copy, lead paragraphs. Fallback: `HelvNeueLight, "Helvetica Neue Light", Arial, sans-serif`

The USA sub-site uses an additional **ToyotaType** family (ToyotaType-Semibold, ToyotaType-Regular) for legacy sections.

The fonts are loaded via Toyota's CDN and are not available on Google Fonts. Use the fallback stacks for prototyping.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Use |
| ---- | ---- | ---- | ------ | ----------- | -------------- | --- |
| `display-xl` | tcomSans | 48px | 400 | 1.167 | 0px | Page titles, hero h1 |
| `display-md` | tcomMed | 48px | 400 | 1.167 | -0.5px | Section headings, feature titles |
| `title-lg` | tcomLight | 32px | 400 | 1.25 | -0.5px | Category headings, sub-section titles |
| `title-md` | tcomMed | 32px | 400 | 1.25 | -0.5px | Vehicle names, product headings |
| `body-lg` | tcomSans | 16px | 400 | 1.0 | 0px | Navigation, primary UI text |
| `body-md` | tcomLight | 14px | 400 | 1.571 | 0px | Descriptive body copy, marketing text |
| `body-sm` | tcomSans | 12px | 400 | 1.5 | 0px | Secondary info, metadata |
| `button` | tcomMed | 14px | 400 | 1.0 | 0px | All CTA button labels |
| `nav-link` | tcomSans | 16px | 400 | 1.0 | 0px | Top navigation links |
| `caption` | tcomSans | 10px | 400 | 1.5 | 0px | Image info chips, badge labels |

### Principles

- The tcom family uses `font-weight: 400` across all three variants — the visual weight distinction comes from distinct font faces (Light vs. Sans vs. Med), not CSS weight values
- Apply `letter-spacing: -0.5px` consistently on all display-md, title-lg, and title-md roles
- tcomLight is reserved for editorial/marketing copy; tcomSans handles all UI chrome
- For AI-generated UI without access to the tcom CDN, use `"Helvetica Neue", Helvetica, Arial, sans-serif` as a neutral substitute

---

## Layout

### Spacing System

Toyota uses an 8px base unit with a standard 8-step named scale:

| Token | Value | Use |
| ----- | ----- | --- |
| `xxs` | 4px | Micro gaps, badge padding components |
| `xs` | 8px | Small gaps, inline spacing |
| `sm` | 12px | Button padding vertical, tight stacking |
| `md` | 16px | Default spacing, card inner padding |
| `lg` | 24px | Section element spacing, card padding |
| `xl` | 32px | Large card padding, section margins |
| `xxl` | 48px | Between sections, feature spacing |
| `section` | 80px | Major section vertical padding |

### Grid and Container

- **Homepage hero**: Full-bleed (100vw), no container constraint
- **Content sections**: Max-width ~1280px, centered
- **Vehicle grid**: 3-column desktop, 2-column tablet, 1-column mobile
- **Nav bar**: Full-width, content max-width ~1280px

### Whitespace Philosophy

Toyota sections are airy and photography-first. Full-bleed hero images span the viewport with CTAs anchored to the lower-left. Content sections below the fold use generous 80px vertical padding to let vehicle photography breathe. Cards on white backgrounds use minimal borders over shadows, keeping the surface visual weight low.

---

## Elevation and Depth

Toyota's design is intentionally flat — depth is communicated through photography layering and surface color rather than shadows.

| Level | Treatment | Example Use |
| ----- | --------- | ----------- |
| 0 — Canvas | `#FFFFFF` flat | Page background |
| 1 — Surface | `#F6F6F6` flat | Footer, secondary panels |
| 2 — Overlay | `rgba(0,0,0,0.8)` semi-opaque | Info chip buttons on hero images |
| 3 — Hero | Full-bleed photography | Vehicle hero sections |
| 4 — Dark | `#112037` navy | Promotional feature sections |

**Shadow Philosophy:** Toyota avoids box-shadows on interactive elements. Cards use `1px solid #EAEAEA` borders for elevation. The only "depth" visual is the semi-opaque dark overlay used for info chips on hero photography, giving a glassmorphism-adjacent effect without blur.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
| ----- | ----- | --- |
| `none` | 0px | All container elements — cards, panels, inputs, sections |
| `sm` | 4px | Minor rounding on select elements |
| `md` | 8px | Subtle rounding, interior UI elements |
| `lg` | 12px | Not commonly used |
| `pill` | 50px | ALL buttons — the universal button shape |
| `circle` | 9999px | Dot indicators, toggle switches, avatar images |

**Shape principle:** Buttons are always pill (50px radius). Everything else is flat zero-radius. This sharp contrast between pill buttons and square containers is Toyota's most distinctive UI signature.

### Photography and Imagery

- Vehicle photography is always full-bleed or fills its container completely
- Aspect ratios: hero images use ~16:9 landscape; vehicle thumbnails use ~4:3
- Images have zero border-radius — no rounded image crops
- Dark gradient overlays (from bottom) allow white text legibility on hero photos
- Info chip buttons (`rgba(0,0,0,0.8)`) appear over images for color/feature exploration

---

## Components

### Buttons

Toyota uses pill-shaped buttons universally (border-radius: 50px). All buttons use tcomMed at 14px.

**Primary (Red fill):**
- Background: `#E10A1D`
- Text: `#FFFFFF`
- Padding: `12px 32px`
- Radius: `50px`
- Use: Account creation, sign-in, primary account CTAs

**Secondary (Ghost on dark):**
- Background: `transparent`
- Text: `#FFFFFF`
- Border: `1px solid #FFFFFF` (implied — rendered over dark heroes)
- Padding: `9px 24px`
- Radius: `50px`
- Use: "Build" and "Shop" CTAs on vehicle hero slides

**Ghost on light:**
- Background: `transparent`
- Text: `#000000`
- Border: `1px solid #000000`
- Padding: `9px 24px`
- Radius: `50px`
- Use: "Shop" CTAs on lighter backgrounds

**Info chip (image overlay):**
- Background: `rgba(0,0,0,0.8)` → `#000000CC`
- Text: `#FFFFFF`
- Border: `1px solid #F6F6F6`
- Padding: `3px 8px 6px`
- Radius: `28px`
- Font: tcomSans 10px

### Cards

Toyota vehicle cards are flat (zero radius), image-forward containers:
- Background: `#FFFFFF`
- No box shadow
- Border: `1px solid #EAEAEA` (when on white canvas)
- Padding: `24px`
- Vehicle name: tcomMed 16–24px, black
- Price/CTA area: below the fold of image

### Inputs and Forms

- Background: `#FFFFFF`
- Border: `1px solid #D0D0D0`
- Border-radius: `0px` (flat, no rounding)
- Focus: `1px solid #E10A1D`
- Font: tcomSans 16px
- Padding: `12px 16px`

### Navigation

- Top nav: white background (`#FFFFFF`), black text
- Font: tcomSans 16px
- Bottom border: `1px solid #D0D0D0`
- Items: "Vehicles", "Shop", "Support & Service", "Account"
- Mobile: collapsing hamburger menu

---

## Do's and Don'ts

**Do:**
- Use Toyota Red (#E10A1D) exclusively for primary CTAs and brand indicators — keep it singular and purposeful
- Use pill-shaped buttons (50px radius) for every interactive button element
- Apply negative letter-spacing (−0.5px) to all display-md and title-level headings
- Keep all containers and cards with zero border-radius — the pill/flat contrast is the brand's core shape language
- Use full-bleed photography for vehicle hero sections with no crop rounding
- Use tcomLight for editorial/marketing copy and tcomMed for headings and buttons
- Match button text to tcomMed at 14px with font-weight 400

**Don't:**
- Don't use red as a generic accent or decorative color — it must be reserved for primary CTAs and brand indicators
- Don't add box-shadows to cards or containers — use border lines instead
- Don't use filled secondary buttons; ghost/transparent buttons are the correct secondary pattern
- Don't use more than two button sizes on a single screen (standard 14px and mini 10px for info chips)
- Don't round container edges — the zero-radius rule is strict for all panels, cards, and sections
- Don't substitute a generic bold weight for tcomMed — the face distinction matters for brand fidelity
- Don't use more than 3 type sizes within a single content section

---

## Responsive Behavior

| Breakpoint | Width | Key Changes |
| ---------- | ----- | ----------- |
| Mobile | < 768px | Single-column layout; nav collapses to hamburger; hero CTAs stack vertically |
| Tablet | 768–1024px | 2-column vehicle grids; condensed nav; hero text repositions |
| Desktop | 1024px+ | Full 3-column grids; full horizontal nav; full-bleed heroes |

**Touch targets:** All buttons have minimum 44px height to meet accessibility guidelines. The pill shape naturally achieves this with 12px vertical padding on 14px text (= 38px) — ensure minimum 44px total height on mobile.

**Collapsing strategy:**
- Top nav items collapse to a hamburger icon at < 768px
- Vehicle grids go from 3-col → 2-col → 1-col
- Hero text font-size scales down: 48px display → 32px on mobile

**Image behavior:**
- Hero images are `object-fit: cover` at all sizes
- Vehicle thumbnails maintain 4:3 aspect ratio with `object-fit: cover`
- No image border-radius at any breakpoint

---

## Agent Prompt Guide

### Quick Color Reference

- Primary (Toyota Red): `#E10A1D`
- Primary active/hover: `#CC0000`
- Canvas (background): `#FFFFFF`
- Surface (footer/panels): `#F6F6F6`
- Surface dark (feature sections): `#112037`
- Ink (primary text): `#000000`
- Body text: `#333333`
- Muted: `#606060`
- Hairline borders: `#D0D0D0`
- Accent blue (links): `#145FFF`
- On dark (text on dark): `#FFFFFF`

### Example Component Prompts

**Hero Section:**
"Create a full-bleed vehicle hero section on a dark photographic background. Overlay text bottom-left: vehicle name in tcomMed (or 'Helvetica Neue Medium') 32px, white, letter-spacing -0.5px. Subhead in tcomLight 14px white. Two pill-button CTAs: first ghost with white border ('Build'), second ghost with white border ('Shop'). Both buttons: 50px radius, 9px 24px padding, tcomMed 14px white text."

**Vehicle Card:**
"Create a vehicle card on white (#FFFFFF) canvas with zero border-radius. Full-width vehicle image at top (4:3 aspect ratio). Below: vehicle name in tcomMed 16px black, trim level in tcomLight 14px #606060, price in tcomSans 16px black. Two pill CTAs at bottom: 'Build' (ghost, black border, 9px 24px) and 'Shop' (ghost, black border). No box-shadow; 1px solid #EAEAEA border around the card."

**Button Set:**
"Primary button: background #E10A1D, border-radius 50px, padding 12px 32px, tcomMed (or Helvetica Neue Medium) 14px white, no border. Secondary/ghost button: transparent background, 1px solid white border (on dark) or 1px solid black (on light), same radius and padding, matching text color."

**Navigation Bar:**
"White (#FFFFFF) horizontal nav bar with 1px solid #D0D0D0 bottom border. Logo left. Nav links center-right: tcomSans 16px black, 'Vehicles' / 'Shop' / 'Support & Service' / 'Account'. No hover underlines — use color change to #E10A1D for active state."

**Info Chip (image overlay):**
"Small pill button overlaid on vehicle photography: background rgba(0,0,0,0.8), 1px solid #F6F6F6 border, border-radius 28px, tcomSans 10px white, padding 3px 8px. Used for color/feature exploration on hero slides."

### Iteration Guide

1. Start with pure white (`#FFFFFF`) canvas — do not add any background tint
2. Use the tcom font stack — substitute `"Helvetica Neue", Helvetica, Arial, sans-serif` for tcomSans and `HelveticaNeueMedium, "Helvetica Neue Medium", Arial, sans-serif` for tcomMed
3. Apply `letter-spacing: -0.5px` to all headings 32px and above
4. All buttons must be pill-shaped (border-radius: 50px) — no exceptions
5. All containers, cards, panels, and inputs must have zero border-radius
6. Reserve Toyota Red (`#E10A1D`) only for primary CTAs and brand indicator dots
7. Prefer ghost/transparent buttons over filled buttons for secondary actions
8. Check contrast: white on Toyota Red passes WCAG AA; use black text on light surfaces
