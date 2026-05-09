---
version: alpha
name: Procreate
description: |
  Procreate is the award-winning digital illustration and animation app for iPad,
  made by Savage Interactive. The design system reflects a deep-black creative canvas
  philosophy — near-total darkness with a bold blue CTA, generous section breathing
  room, and a clean system-font type scale with precise negative tracking on display
  sizes. The identity signals professional creative tools with accessible pricing:
  pay once, no subscription.

colors:
  primary: "#0076FF"
  primary-active: "#186CCC"
  primary-hover: "#044BA1"
  ink: "#FFFFFF"
  body: "#A8A8A8"
  muted: "#787878"
  subheading: "#808080"
  canvas: "#0B0B0B"
  surface: "#141414"
  surface-raised: "#262626"
  surface-video: "#242424"
  hairline: "#232323"
  on-dark: "#FFFFFF"
  semantic-error: "#F22A2A"
  blue-100: "#D2E7FF"
  blue-200: "#A5CFFF"
  blue-300: "#78B7FF"
  blue-400: "#4B9FFF"
  blue-600: "#186CCC"
  blue-700: "#125199"
  neutral-200: "#EBEBEB"
  neutral-300: "#D4D4D4"
  neutral-400: "#A3A3A4"
  neutral-600: "#525252"
  neutral-700: "#404040"

typography:
  display-xl:
    fontFamily: "system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
    fontSize: 70px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.35px

  display-lg:
    fontFamily: "system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
    fontSize: 60px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.3px

  display-md:
    fontFamily: "system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.24px

  title-lg:
    fontFamily: "system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.12px

  title-md:
    fontFamily: "system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.1px

  body-lg:
    fontFamily: "system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.496px

  body-md:
    fontFamily: "system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.3968px

  body-sm:
    fontFamily: "system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px

  button:
    fontFamily: "system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.28px

  button-lg:
    fontFamily: "system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.32px

  nav-link:
    fontFamily: "system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: 0px

  eyebrow:
    fontFamily: "system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: 0.9px

  caption:
    fontFamily: "system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px

spacing:
  xxs: 8px
  xs: 12px
  sm: 20px
  md: 24px
  lg: 32px
  xl: 60px
  xxl: 80px
  section: 170px

rounded:
  sm: 8px
  md: 12px
  pill: 100px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
    border: "none"

  button-primary-lg:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
    border: "none"

  button-secondary:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
    border: "none"

  button-secondary-lg:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    border: "none"

  button-secondary-active:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
    border: "none"

  card-base:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"

  top-nav:
    backgroundColor: "transparent"
    textColor: "{colors.body}"
    typography: "{typography.nav-link}"
    border: "none"

  top-nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    fontWeight: "500"

  eyebrow-label:
    textColor: "{colors.subheading}"
    typography: "{typography.eyebrow}"
    textTransform: "uppercase"

  footer:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    padding: "60px 0px 0px"
    border: "none"
---

# Procreate Design System

## Overview

Procreate's visual identity is built around the concept of an infinite creative canvas — a near-total darkness that lets artwork and color breathe at full intensity. The primary canvas is a near-black `#0B0B0B`, just a whisper away from pure black, giving the impression of depth without the harshness of absolute zero. Against this void, white text and the brand's signature electric blue `#0076FF` create striking contrast that commands the eye toward calls-to-action.

Typography is unapologetically system-native — `system-ui` across all roles, used with surgical precision. Large display sizes (60–70px) carry tight negative letter-spacing (-0.3 to -0.35px) that mirrors Apple's own display conventions, while eyebrow labels reverse the pattern entirely with generous positive tracking (+0.9px) and all-caps treatment. Buttons are full-pill geometry with no border — a decisive, premium feel. The entire language communicates: this is a tool crafted by people who understand design.

**Key visual characteristics:**
- Near-black canvas (`#0B0B0B`) as the primary page background — not pure black
- Single accent color: electric blue (`#0076FF`) for primary CTAs only
- System font stack (`system-ui`) used with typographic precision at every scale
- Display text (60–70px) with negative letter-spacing (-0.3px) for a tightly-set editorial feel
- Eyebrow labels in all-caps with positive tracking (+0.9px), always in muted gray
- Full-pill buttons (`border-radius: 100px`) — primary in blue, secondary in dark gray
- Zero card chrome on product pages — sections breathe with massive vertical padding (60–170px)
- Footer background subtly elevated to `#141414` to close the page cleanly
- No box shadows anywhere — depth comes only from color stepping in the dark palette
- Responsive breakpoints at 600px (sm), 823px (md), 1080px (lg)

**Positioning:** Where competitors offer subscription models with feature-gated tiers, Procreate communicates "pay once, own forever" directly in the copy. The design reinforces this: no pricing tables, no tier cards, no badge hierarchy — just a clean buy button.

---

## Colors

### Brand & Accent

| Token | Hex | Use |
|-------|-----|-----|
| `primary` | `#0076FF` | Primary CTA buttons ("Buy now", "Apply"), active nav accent links |
| `primary-active` | `#186CCC` | Primary button hover/active state (CSS var `--blue-600`) |
| `primary-hover` | `#044BA1` | Deep hover state from computed page colors |
| `blue-100` | `#D2E7FF` | Lightest blue tint, available for highlights |
| `blue-200` | `#A5CFFF` | Light blue tint |
| `blue-300` | `#78B7FF` | Mid-light blue |
| `blue-400` | `#4B9FFF` | Mid blue |
| `blue-600` | `#186CCC` | Dark blue |
| `blue-700` | `#125199` | Deeper dark blue |

### Surface

| Token | Hex | Use |
|-------|-----|-----|
| `canvas` | `#0B0B0B` | Default page background (`--neutral-950`) |
| `surface` | `#141414` | Footer background, secondary surfaces (`--neutral-900`) |
| `surface-raised` | `#262626` | Tertiary/secondary buttons, slightly elevated panels (`--neutral-800`) |
| `surface-video` | `#242424` | Video element background (`--video-bg-color`) |

### Text

| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#FFFFFF` | Display headings, button text, hero headlines (`--neutral-100`) |
| `body` | `#A8A8A8` | Default body text, footer links, nav text |
| `muted` | `#787878` | Subheading/caption text (`--neutral-500`) |
| `subheading` | `#808080` | Eyebrow labels in nav dropdowns |
| `on-dark` | `#FFFFFF` | Text on dark surfaces |

### Semantic

| Token | Hex | Use |
|-------|-----|-----|
| `semantic-error` | `#F22A2A` | Error states, destructive actions (`--red-500`) |
| `hairline` | `#232323` | Divider lines, section borders (`--divider-color`) |

---

## Typography

### Font Family

Procreate uses the native `system-ui` font stack — there is no custom font loaded. This means the rendered typeface varies by OS: San Francisco on macOS/iOS, Segoe UI on Windows, Roboto on Android/Chrome. The typographic craft is entirely in the size, weight, and tracking choices.

**Stack:** `system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
**Import:** No web font import required — uses operating system default UI font.

### Hierarchy Table

| Role | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|--------|-------------|----------------|-----|
| `display-xl` | 70px | 600 | 1.1 | -0.35px | Hero section main headline |
| `display-lg` | 60px | 600 | 1.1 | -0.3px | Major feature section headings |
| `display-md` | 48px | 600 | 1.1 | -0.24px | Product section headings, pricing heading |
| `title-lg` | 24px | 600 | 1.3 | -0.12px | Feature item headings (e.g., "Page Assist") |
| `title-md` | 20px | 600 | 1.3 | -0.1px | Smaller section headings (company page) |
| `body-lg` | 20px | 400 | 1.5 | -0.496px | Lead paragraphs, hero subtext |
| `body-md` | 16px | 400 | 1.5 | -0.3968px | Default body copy |
| `body-sm` | 13px | 400 | 1.5 | 0px | Fine print, small captions |
| `button` | 14px | 600 | 1.4 | 0.28px | Standard button labels |
| `button-lg` | 16px | 600 | 1.4 | 0.32px | Large button labels |
| `nav-link` | 16px | 500 | 1.15 | 0px | Navigation links |
| `eyebrow` | 18px | 600 | 0.98 | 0.9px | Section eyebrow labels (uppercase) |
| `caption` | 13px | 400 | 1.5 | 0px | Captions, metadata |

### Principles

- **Negative tracking at display sizes:** All headings from 24px and above carry negative letter-spacing, tightening the letterforms for a premium, editorial feel.
- **Positive tracking on eyebrows:** Eyebrow labels (uppercase, small) use +0.9px tracking for maximum legibility at distance.
- **Weight strategy:** Only two weights in active use — 400 (regular) for body/nav, 600 (semibold) for all headings, buttons, and labels. There is no 700/bold weight in the design vocabulary.
- **System font advantage:** Since no web font loads, pages render instantly with zero layout shift — a deliberate performance choice for a creative-tools company.

---

## Layout

### Spacing System

Base unit: 8px. Named scale:

| Token | Value | Use |
|-------|-------|-----|
| `xxs` | 8px | Caption gaps, small internal spacing |
| `xs` | 12px | Tight inline spacing |
| `sm` | 20px | Button side padding, compact section gaps |
| `md` | 24px | Default container padding (`--dynamic-container-padding`) |
| `lg` | 32px | Copy block top margin, card padding |
| `xl` | 60px | Section padding (`--page-section-padding`), footer top padding |
| `xxl` | 80px | Large inter-section gaps |
| `section` | 170px | Hero and feature section vertical padding |

### Grid & Container

- **Container max-width:** 1366px (`--dynamic-container-max-width`)
- **Container padding:** 30px on desktop (`--container-padding`), 24px on smaller screens
- **Copy block max-width:** 800px (`--copy-block-max-width`) — keeps long prose readable
- **Media block max-width:** 830px (`--media-block-max-width`)
- **Quote block max-width:** 740px (`--quote-block-max-width`)
- **Nav height:** 85px (`--nav-height`)

### Whitespace Philosophy

Procreate sections breathe at an extraordinary scale. Hero sections carry 170px of vertical padding. Feature sections alternate between 60px and 170px depending on content weight. This extreme whitespace is intentional: the product showcases artwork at full resolution, and the surrounding void is the frame.

---

## Elevation & Depth

### Levels

| Level | Treatment | Example use |
|-------|-----------|-------------|
| 0 — Base | `#0B0B0B` | Page canvas |
| 1 — Surface | `#141414` | Footer background |
| 2 — Raised | `#262626` | Tertiary/secondary buttons |
| 3 — Video | `#242424` | Video embed backgrounds |

### Shadow Philosophy

Procreate uses **zero box shadows**. Depth is communicated entirely through background-color stepping in the dark palette. The steps are subtle — just 3–15 points of luminosity difference — which creates a sense of material depth without any softness or blur.

There are no glows, no drop shadows, and no diffused lighting effects on UI components. The darkness itself is the depth signal.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `sm` | 8px | Media block corners (`--media-block-border-radius`), image frames |
| `md` | 12px | Skip-link badge (accessibility), modal-adjacent elements |
| `pill` | 100px | All buttons — primary and secondary — use full pill geometry |

### Photography & Imagery

- Artwork screenshots are presented full-bleed at a 16:9 or taller aspect ratio
- Product UI screenshots use `border-radius: 8px` corner rounding
- Background media sections use absolute positioning for immersive edge-to-edge effect
- All imagery is dark-themed to maintain canvas harmony
- iPhone mockup width: 180px portrait / 500px landscape (CSS vars)

---

## Components

### Buttons

Procreate has three button variants observed in production:

**Primary (`btn-primary`):**
- Background: `#0076FF` (blue-500)
- Text: `#FFFFFF`, weight 600
- Radius: `100px` (full pill)
- Padding md: `10px 20px` | Padding lg: `12px 24px`
- No border, no shadow
- Hover/active: background shifts to `#186CCC` (blue-600)

**Secondary/Tertiary (`btn-tertiary`):**
- Background: `#262626` (neutral-800) — a dark gray surface, not transparent
- Text: `#FFFFFF`, weight 600
- Radius: `100px` (full pill)
- Padding md: `10px 20px` | Padding lg: `12px 24px`
- No border, no shadow

**Accessibility Skip Link:**
- Background: `#044BA1`
- Text: `#FFFFFF`, weight 700, uppercase, 0.598px tracking
- Radius: `12px`
- Border: `3px solid #0078FF`
- Padding: `14px`

Both standard button sizes use identical geometry — only the font size and padding change between md and lg variants.

### Cards

Product pages do not use traditional card components. Content is arranged in full-width sections with extreme vertical padding. The closest card equivalent is the `ipad-buy-now` purchase block, which has no background, no border, and no radius — it relies on surrounding whitespace alone.

### Navigation

- **Navbar:** Transparent background, 85px height, 28px top padding
- **Nav category labels:** 14px, weight 600, uppercase, `#808080`, positive tracking 0.7px
- **Nav links:** 16px, weight 500, `#FFFFFF`, normal tracking
- **App product links:** 16px, weight 400, `#0076FF` (blue), used as visual accent in dropdown
- **Mobile:** Collapses to hamburger at 600px (sm breakpoint)

### Eyebrow Labels

A signature Procreate pattern: all-caps section labels in muted gray above the main heading.

- Font size: 18px
- Weight: 600
- Tracking: +0.9px
- Color: `#808080` (muted) or `#FFFFFF` (on dark feature sections)
- Text transform: uppercase

Examples: "THE FINEST BRUSHES", "DRAW ANYWHERE, ANYTIME", "CREATIVE TOOLS MADE FOR YOU"

---

## Do's and Don'ts

**Do:**
- Use near-black `#0B0B0B` as the page canvas — never pure `#000000` or near-white backgrounds
- Apply negative letter-spacing to all headings 24px and above (`-0.12px` to `-0.35px`)
- Use full-pill buttons (`border-radius: 100px`) for all interactive CTAs
- Use uppercase with positive tracking (`+0.9px`) for eyebrow section labels
- Limit the primary blue `#0076FF` to CTA buttons and essential link accents only
- Use `system-ui` font stack — do not introduce a custom web font
- Maintain massive section vertical padding (60–170px) — the product is the hero, not the UI frame
- Use weight 600 (semibold) for all headings and button text — never bold/700

**Don't:**
- Don't use `#000000` pure black as a canvas — use `#0B0B0B`
- Don't add box shadows to buttons, cards, or sections — the dark palette provides all depth
- Don't use border-radius other than `8px` on images or `100px` on buttons
- Don't use more than two font weights (400 and 600) on a single screen
- Don't place blue on anything other than primary CTA buttons and link accents
- Don't use a secondary accent color — the system is strictly monochromatic with a single blue
- Don't add background to nav — it floats transparent over the canvas
- Don't use light backgrounds or white canvases — the dark canvas is non-negotiable for brand consistency

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile (default) | < 600px | Single column, stacked nav, compressed section padding |
| Small (`--sm-breakpoint`) | 600px | Nav transitions, adjusted copy block margins |
| Medium (`--md-breakpoint`) | 823px | Two-column grid available, full nav visible |
| Large (`--lg-breakpoint`) | 1080px | Full desktop layout, max container width active |

### Touch Targets

- All buttons have minimum 44px height (10px top + 10px bottom padding + 24px line height)
- Nav links are full-height of the 85px navbar
- Footer links inherit default touch target sizing

### Collapsing Strategy

- **Nav:** Hamburger collapse at < 600px; dropdown menus become slide-in panels on mobile
- **Section padding:** Reduces from 170px to ~60px at the sm breakpoint (`--media-block-margin-top--sm: 24px`)
- **Container padding:** Switches from 30px to 24px at the md breakpoint
- **Typography:** Display sizes (60–70px) scale down proportionally at smaller breakpoints

### Image Behavior

- Background media images are `object-fit: cover` at all sizes
- iPhone mockup switches from portrait (180px wide) to landscape (500px wide) at mobile breakpoints
- All artwork images maintain their aspect ratio without cropping

---

## Agent Prompt Guide

### Quick Color Reference

- Primary (CTA blue): `#0076FF`
- Primary active: `#186CCC`
- Canvas (background): `#0B0B0B`
- Surface (footer/elevated): `#141414`
- Surface raised (buttons): `#262626`
- Ink (headings/white text): `#FFFFFF`
- Body text: `#A8A8A8`
- Muted text: `#787878`
- Hairline (dividers): `#232323`
- Error: `#F22A2A`

### Example Component Prompts

**Hero Section:**
"Create a hero section on `#0B0B0B` background. Eyebrow label: 18px, weight 600, uppercase, tracking +0.9px, color `#808080`. Main headline: 70px, weight 600, line-height 1.1, letter-spacing -0.35px, color `#FFFFFF`. Subheadline: 20px, weight 400, line-height 1.5, letter-spacing -0.496px, color `#FFFFFF`. Two pill buttons: primary `#0076FF` background with `#FFFFFF` text (14px, weight 600, padding 10px 20px, radius 100px); secondary `#262626` background with `#FFFFFF` text same sizing."

**Feature Section:**
"Create a feature section on `#0B0B0B`. Top eyebrow: 18px, weight 600, uppercase, tracking +0.9px, `#808080`. Main heading below: 60px, weight 600, line-height 1.1, letter-spacing -0.3px, `#FFFFFF`. Body copy: 20px, weight 400, line-height 1.5, color `#A8A8A8`. Section vertical padding: 170px top and bottom. No box shadows, no borders."

**Navigation Bar:**
"Create a transparent navigation bar, height 85px. Logo at left. Right side: nav items in 16px, weight 500, `#FFFFFF`. Dropdown category labels in 14px, weight 600, uppercase, tracking 0.7px, `#808080`. App product links in 16px, weight 400, `#0076FF`. No background, no border, no shadow."

**Button Set:**
"Primary button: `#0076FF` background, `#FFFFFF` text (14px, weight 600, tracking +0.28px), border-radius 100px, padding 10px 20px, no border, no shadow. Hover state: `#186CCC` background. Secondary button: `#262626` background, `#FFFFFF` text, same geometry. Large variant: 16px text, tracking +0.32px, padding 12px 24px."

**Footer:**
"Footer on `#141414` background, 60px top padding. Text at 16px, weight 400, `#A8A8A8`. Section headings in 16px, weight 600, `#FFFFFF`. Horizontal divider lines in `#232323`."

### Iteration Guide

1. Start with `#0B0B0B` as your page background — not `#000000`
2. Use `system-ui` font stack — no import needed, renders the OS default UI font
3. Apply negative letter-spacing to all headings: -0.35px at 70px, -0.3px at 60px, -0.24px at 48px, scaling proportionally
4. Add uppercase eyebrow labels above major sections with +0.9px tracking in `#808080`
5. Use only weight 400 and 600 — semibold headings, regular body
6. All buttons are full pill (radius 100px) — primary blue or secondary dark gray, never outlined/ghost
7. Create depth through background-color stepping (`#0B0B0B` → `#141414` → `#262626`) not shadows
8. Reserve `#0076FF` exclusively for primary CTAs and nav product-link accents
