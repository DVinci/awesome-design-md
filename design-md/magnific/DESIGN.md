---
version: alpha
name: Magnific
description: |
  Magnific (formerly Freepik) is the AI creative platform for image, video, and audio generation.
  Its design language is dark-canvas cinematic with a signature magenta accent, dual-weight
  geometric sans-serif typography, and a tiered color system that maps directly to pricing tiers
  — magenta for brand, blue for Premium+, and purple for Pro. The UI is dense, tool-forward,
  and prioritizes content imagery over chrome.

colors:
  primary: "#FF58AE"
  primary-active: "#E0449A"
  ink: "#1A1A1A"
  ink-on-dark: "#F5F5F5"
  body: "#E3E3E3"
  muted: "#AAAAAA"
  muted-dark: "#737373"
  canvas: "#101010"
  canvas-light: "#FFFFFF"
  surface: "#1A1A1A"
  surface-light: "#F4F3EF"
  surface-card: "#FFFFFF"
  hairline: "#FFFFFF1A"
  hairline-light: "#E3E3E3"
  on-dark: "#F5F5F5"
  accent-blue: "#4F69F2"
  accent-purple: "#6F4BD3"
  accent-soft-blue: "#90ABFA"
  semantic-error: "#FF4444"
  semantic-success: "#22C55E"
  semantic-warning: "#F59E0B"

typography:
  display-xl:
    fontFamily: "Klarheit Grotesk, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 55px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.55px
  display-md:
    fontFamily: "Klarheit Grotesk, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.36px
  display-pricing:
    fontFamily: "Klarheit Grotesk, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 56px
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: -0.56px
  title-lg:
    fontFamily: "Klarheit Grotesk, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 28px
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: -0.28px
  title-md:
    fontFamily: "Klarheit Grotesk, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  body-lg:
    fontFamily: "Geist, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "Geist, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0
  body-sm:
    fontFamily: "Geist, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  button:
    fontFamily: "Geist, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: 0
  nav-link:
    fontFamily: "Geist, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  caption:
    fontFamily: "Geist, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.6
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
  xs: 4px
  sm: 6px
  md: 8px
  lg: 16px
  xl: 24px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "12px 24px"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink-on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "6px 16px"
    border: "1px solid {colors.hairline}"

  button-magenta:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "6px 16px"
    border: "none"

  button-premium-plus:
    backgroundColor: "{colors.accent-blue}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "0px 16px"
    border: "none"

  button-pro:
    backgroundColor: "{colors.accent-purple}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "0px 16px"
    border: "none"

  card-base:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
    border: "none"

  card-pricing:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline-light}"

  card-pricing-featured:
    backgroundColor: "{colors.accent-blue}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
    border: "none"

  text-input:
    backgroundColor: "#FFFFFF0D"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.md}"
    padding: "8px 36px"
    border: "1px solid {colors.hairline}"

  text-input-focused:
    border: "1px solid {colors.primary}"

  top-nav:
    backgroundColor: "transparent"
    textColor: "{colors.ink-on-dark}"
    border: "none"

  badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "0px 8px"
    border: "none"
---

# Magnific Design System

## Overview

Magnific is the AI creative platform built for professionals who need every major AI model — image, video, and audio — in one workflow. Its visual identity is uncompromisingly dark and cinematic: a near-black `#101010` canvas dominates every key surface, with a signature magenta `#FF58AE` used sparingly for brand moments and the announcement banner. Typography splits between Klarheit Grotesk (a sharp geometric display face with negative tracking) for headings and Geist (a neutral grotesque) for body and UI — establishing a clear hierarchy between editorial and functional text.

The design differentiates from generic AI tools through its tiered color system: where competitors rely on a single CTA color, Magnific maps pricing tiers directly to hues — dark `#1A1A1A` for base Premium, blue `#4F69F2` for Premium+, and purple `#6F4BD3` for Pro. This system makes plan selection intuitive without relying on labels alone. Whitespace is generous at the section level but compressed within components, creating an immersive, content-first experience.

**Key visual characteristics:**
- Near-black `#101010` dark canvas with warm undertones — not pure black
- Signature magenta `#FF58AE` used exclusively for brand accent and announcement links
- Dual font system: Klarheit Grotesk (display, bold, negative-tracked) + Geist (body, UI, neutral)
- Tiered palette: dark ink for base, blue for Premium+, purple for Pro
- Rounded-8px (`border-radius: 8px`) is the universal button radius
- Pricing cards use 24px radius with full-surface color fill — not just borders
- No decorative shadows; depth is created via surface color contrast
- Tailwind CSS utility classes throughout; no CSS custom properties defined at `:root`

---

## Colors

### Brand & Accent

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#FF58AE` | Magnific magenta — announcement links, brand badges, hover accents |
| `primary-active` | `#E0449A` | Hover/pressed state on magenta elements |
| `accent-blue` | `#4F69F2` | Premium+ tier — pricing card background and CTA button |
| `accent-purple` | `#6F4BD3` | Pro tier — pricing card background and CTA button |
| `accent-soft-blue` | `#90ABFA` | Soft decorative highlight, product imagery accent |

### Surface

| Token | Hex | Usage |
|-------|-----|-------|
| `canvas` | `#101010` | Primary dark page background — hero, footer, tool sections |
| `surface` | `#1A1A1A` | Elevated dark surface — nav dropdowns, dark cards |
| `surface-card` | `#FFFFFF` | Light mode cards — model selector cards, feature cards |
| `surface-light` | `#F4F3EF` | Warm off-white — light sections, pricing page canvas |
| `canvas-light` | `#FFFFFF` | White canvas for light-mode pricing page |

### Text

| Token | Hex | Usage |
|-------|-----|-------|
| `ink` | `#1A1A1A` | Primary heading text on light surfaces |
| `ink-on-dark` | `#F5F5F5` | Primary text on dark canvas |
| `on-dark` | `#F5F5F5` | Text/icons on colored or dark surfaces |
| `body` | `#E3E3E3` | Paragraph/body text on dark canvas |
| `muted` | `#AAAAAA` | Secondary text, captions, placeholder text |
| `muted-dark` | `#737373` | Tertiary text, disabled states |

### Borders & Overlays

| Token | Hex | Usage |
|-------|-----|-------|
| `hairline` | `#FFFFFF1A` | Border on dark surfaces — inputs, nav search bar |
| `hairline-light` | `#E3E3E3` | Border on light surfaces — pricing cards, table rows |

### Semantic

| Token | Hex | Usage |
|-------|-----|-------|
| `semantic-error` | `#FF4444` | Error states, destructive actions |
| `semantic-success` | `#22C55E` | Success confirmations |
| `semantic-warning` | `#F59E0B` | Warning notices |

---

## Typography

### Font Families

**Klarheit Grotesk** — Proprietary geometric sans-serif used for all display headings. Loaded via Next.js font system (aliased as `__klarheit_89dfb4`). Fallback: `"Helvetica Neue", Helvetica, Arial, sans-serif`. Characterized by tight negative tracking at large sizes and high stroke weight contrast.

**Geist** — Vercel's Geist sans-serif used for all body copy, UI labels, nav links, and button text. Loaded via Next.js font system (aliased as `__geist_0a28cc`). Fallback: `"Helvetica Neue", Helvetica, Arial, sans-serif`. Neutral, legible at small sizes, slightly condensed feel.

### Hierarchy Table

| Role | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|--------|-------------|----------------|-----|
| `display-xl` | 55px | 700 | 1.20 | -0.55px | Hero headline on dark |
| `display-pricing` | 56px | 800 | 1.15 | -0.56px | Pricing page H1 |
| `display-md` | 36px | 700 | 1.20 | -0.36px | Section headings |
| `title-lg` | 28px | 800 | 1.20 | -0.28px | Feature section headings |
| `title-md` | 24px | 700 | 1.50 | 0 | Card headings, tool names |
| `body-lg` | 18px | 400 | 1.50 | 0 | Hero subheadline, lead copy |
| `body-md` | 15px | 400 | 1.15 | 0 | Default paragraph, nav items |
| `button` | 14px | 500 | 1.60 | 0 | All button labels |
| `nav-link` | 16px | 400 | 1.60 | 0 | Navigation links |
| `caption` | 12px | 500 | 1.60 | 0 | Tags, plan badges, metadata |
| `body-sm` | 12px | 400 | 1.60 | 0 | Supporting copy, footnotes |

### Principles

- Display headings always use **Klarheit Grotesk** with negative letter-spacing; the ratio is roughly `-0.01em` of font size
- Body and UI text always uses **Geist** — never mix display font into body
- Font weights are binary: 400 (regular) for body/nav, 500 (medium) for buttons/labels, 700–800 (bold/extrabold) for headings
- On dark canvas, heading color is `#F5F5F5` (not pure white); on light canvas, heading color is `#1A1A1A`
- If Klarheit Grotesk is unavailable, use Inter or Geist Bold as a substitute (not Times New Roman)

---

## Layout

### Spacing System

Base unit: **8px**. All spacing values are multiples of 4px for fine-grained control.

| Token | Value | Use |
|-------|-------|-----|
| `xxs` | 4px | Icon gap, tight stacking |
| `xs` | 8px | Inline padding, tag padding |
| `sm` | 12px | Card inner gap |
| `md` | 16px | Standard button horizontal padding, column gap |
| `lg` | 24px | Card padding, button large padding |
| `xl` | 32px | Section sub-padding |
| `xxl` | 48px | Section top/bottom padding |
| `section` | 80px | Full section separation |

### Grid & Container

- Max container width: **1280px** (standard desktop)
- Navigation: full-bleed with centered content at `max-w-[1280px]`
- Pricing cards: 3-column grid at desktop, single column at mobile
- Model carousel: horizontal scroll with `overflow-x: auto`, cards `220×280px` fixed
- Hero: full-viewport-height, centered content with `text-align: center`

### Whitespace Philosophy

Sections are generously spaced at 80px vertical separation. Within sections, spacing is tighter — 24px between card elements, 16px for inline gaps. The hero relies on vertical breathing room above the fold, while feature sections use dense card grids immediately below. Footer is compact with reduced whitespace.

---

## Elevation & Depth

### Levels Table

| Level | Treatment | Example Use |
|-------|-----------|-------------|
| 0 — Flat | No shadow, `background: #101010` | Page background, hero section |
| 1 — Surface | Background `#1A1A1A`, no shadow | Elevated dark cards, dropdowns |
| 2 — Card | Background `#FFFFFF`, no shadow | Model selector cards, feature cards |
| 3 — Overlay | Background `rgba(0,0,0,0.2)` | Image overlay on hover |
| 4 — Featured | Full-color fill (`#4F69F2` or `#6F4BD3`) | Featured pricing cards |

### Shadow Philosophy

Magnific uses **zero box-shadows**. Depth is communicated entirely through background color contrast — dark canvas → slightly-lighter dark surface → full white card. This keeps the interface clean and image-forward. Hover states use opacity transitions on card overlays, not shadow elevation.

---

## Shapes

### Border Radius Scale Table

| Token | Value | Use |
|-------|-------|-----|
| `xs` | 4px | Small nav dropdown items, list items |
| `sm` | 6px | Toggle switches, small badges |
| `md` | 8px | All standard buttons, input fields, nav search bar |
| `lg` | 16px | Larger UI panels |
| `xl` | 24px | Pricing cards, feature section containers |
| `pill` | 9999px | Toggle switch track |

The dominant shape language is `8px` for all interactive elements. Pricing cards use `24px` for a softer, roomier feel that differentiates them from the utility UI.

### Photography & Imagery

- AI-generated images are shown in square or portrait crops at fixed card sizes (220×280px in carousels)
- Before/after comparisons use split-view with cursor divider, `border-radius: 0` on imagery
- Model thumbnails use sharp rectangular crops with zero border-radius
- Background for the entire hero and tool sections is pure dark, image overlays use `opacity: 0` → `opacity: 1` on hover

---

## Components

### Buttons

**Primary (Dark) — "Start creating", "Get Premium"**
- Background: `#1A1A1A` / Text: `#FFFFFF`
- Radius: `8px` / Padding: `12px 24px`
- Font: 14px, weight 500 (Geist)
- Border: none

**Primary (Dark) Small — "Sign up"**
- Background: `#F5F5F5` / Text: `#1A1A1A`
- Radius: `8px` / Padding: `0px 16px` (height 40px implied)
- Font: 14px, weight 500

**Magenta — Brand accent buttons**
- Background: `#FF58AE` / Text: `#101010`
- Radius: `8px` / Padding: `6px 16px`
- Font: 15px, weight 400

**Premium+ — Blue tier CTA**
- Background: `#4F69F2` / Text: `#FAFAFA`
- Radius: `8px` / Padding: `0px 16px`

**Pro — Purple tier CTA**
- Background: `#6F4BD3` / Text: `#FFFFFF`
- Radius: `8px` / Padding: `0px 16px`

**Ghost / Outline — Nav search**
- Background: `transparent` / Text: `#F5F5F5`
- Radius: `8px` / Padding: `6px 16px`
- Border: `1px solid rgba(255,255,255,0.2)`

### Cards

**Model Selector Card**
- Background: `#FFFFFF`
- Size: 220×280px (fixed)
- Radius: `0px` (square crop)
- On hover: overlay fades in at `rgba(0,0,0,0.3)`, label transitions to white

**Pricing Card — Base**
- Background: `#FFFFFF` (light page canvas)
- Radius: `24px`
- Border: none (uses whitespace separation)
- CTA: dark `#1A1A1A` button

**Pricing Card — Premium+ (Featured)**
- Background: `#4F69F2`
- Radius: `24px`
- Text: `#FAFAFA`
- CTA: filled `#4F69F2` button (same hue)

**Pricing Card — Pro**
- Background: `#6F4BD3`
- Radius: `24px`
- Text: `#FFFFFF`

### Inputs & Forms

**Search / Text Input**
- Background: `rgba(255,255,255,0.05)` on dark canvas
- Radius: `8px`
- Border: `1px solid rgba(255,255,255,0.15)`
- Text: `#FFFFFF` / Placeholder: `#AAAAAA`
- Padding: `8px 36px` (36px right/left for icon space)
- Font: 14px, weight 400

**Focus state:**
- Border: `1px solid #FF58AE`

### Navigation

- Full-width transparent nav over dark hero
- Logo left-aligned, links centered, utility buttons right
- Nav links: 16px / weight 400 / `#F5F5F5` on dark background
- Mobile: hamburger toggle, slide-in menu
- Sticky behavior: transparent at top, background transitions on scroll (not observed — likely via scroll listener)

### Badges

- Pricing tier badge: dark `#1A1A1A` background, white text, `8px` radius, `0px 16px` padding
- Plan indicator: small, `6px` radius, `0px 8px` padding

---

## Do's and Don'ts

**Do:**
- Use `#101010` as the default page background — avoid pure black `#000000`
- Apply negative letter-spacing to all Klarheit Grotesk headings (rule: `-0.01em` of font size)
- Map tier colors consistently: dark `#1A1A1A` = base, blue `#4F69F2` = Premium+, purple `#6F4BD3` = Pro
- Use `8px` border-radius on all buttons and inputs — this is the universal interactive element radius
- Keep all box-shadows at `none` — use background color contrast for depth instead
- Restrict magenta `#FF58AE` to brand-specific moments (announcements, "be Magnific" CTAs, hover accents)
- Load Klarheit Grotesk as the heading font; use Geist for all body and UI text
- Use `24px` radius only on large containers (pricing cards, feature panels) — not buttons

**Don't:**
- Don't use pure white `#FFFFFF` as a heading color on dark canvas — use `#F5F5F5`
- Don't use shadows or blur effects for elevation — Magnific's depth comes from color contrast only
- Don't apply Klarheit Grotesk to body copy or UI labels — Geist is mandatory for non-heading text
- Don't use a single CTA color across pricing tiers — the tier-mapped palette is core to the brand
- Don't use `border-radius` larger than `24px` — even cards cap at `xl`
- Don't mix magenta with blue or purple tier colors in the same component
- Don't use positive letter-spacing on headings — tracking is always 0 or negative
- Don't use `rgba()` tokens in the YAML blocks — convert to 8-digit hex before writing

---

## Responsive Behavior

### Breakpoints Table

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 768px | Single-column layout; hamburger nav; hero headline scales to ~36px; model carousel becomes touch-scroll |
| Tablet | 768–1024px | 2-column pricing grid; nav shows text links; hero headline ~44px |
| Desktop | 1024px+ | Full 3-column pricing; centered max-width `1280px`; horizontal model carousel visible |

### Touch Targets

- All interactive elements maintain minimum `44px` height
- Nav links have `min-h-[44px] min-w-[44px]` enforced via Tailwind
- Buttons: standard 40px height (small) or 48px height (large CTA)

### Collapsing Strategy

- **Navigation**: Links hidden on mobile, hamburger reveals slide-in full-screen menu
- **Pricing cards**: 3-col → 1-col stack on mobile; featured card stays visually prominent
- **Model carousel**: Desktop: fixed-width horizontal scroll; Mobile: continuous swipe carousel
- **Hero**: Full-viewport height on all breakpoints; text size scales down proportionally

### Image Behavior

- AI-generated images use `object-fit: cover` in fixed-size containers
- Card images expand with CSS hover transitions (`opacity`, `scale`)
- No aspect-ratio breakpoints — images are always contained within fixed card bounds

---

## Agent Prompt Guide

### Quick Color Reference

- Primary (Magenta): `#FF58AE`
- Canvas (dark background): `#101010`
- Surface (dark card): `#1A1A1A`
- Ink (dark headings): `#1A1A1A`
- Ink on dark: `#F5F5F5`
- Body text on dark: `#E3E3E3`
- Muted: `#AAAAAA`
- Hairline (dark borders): `#FFFFFF1A`
- Accent Blue (Premium+): `#4F69F2`
- Accent Purple (Pro): `#6F4BD3`
- Surface Card: `#FFFFFF`
- Surface Light: `#F4F3EF`

### Example Component Prompts

**Hero Section:**
"Create a hero on `#101010` background. Headline 55px, weight 700, Klarheit Grotesk (or Inter Bold as substitute), tracking -0.55px, color `#F5F5F5`. Subheadline 18px, weight 400, Geist, color `#E3E3E3`. CTA button: background `#1A1A1A`, 8px radius, 12px 24px padding, 14px weight 500 text in `#FFFFFF`. Secondary CTA: transparent, border `1px solid rgba(255,255,255,0.2)`, same radius and padding."

**Pricing Card (Featured — Premium+):**
"Create a pricing card on `#4F69F2` background. Rounded 24px. No border, no shadow. Plan name 14px weight 500 `#FAFAFA`. Price 48px weight 800 `#FFFFFF`. Body copy 15px `rgba(255,255,255,0.8)`. CTA button: background `#1A1A1A`, 8px radius, 14px weight 500 `#FFFFFF`."

**Button Set:**
"Primary button: background `#1A1A1A`, 8px radius, 12px 24px padding, 14px Geist weight 500 `#FFFFFF`, no border. Sign-up button: background `#F5F5F5`, same radius and padding, text `#1A1A1A`. Magenta accent button: background `#FF58AE`, 8px radius, 6px 16px padding, 15px weight 400 `#101010`."

**Dark Input Field:**
"Input on `#101010` canvas: background `rgba(255,255,255,0.05)`, border `1px solid rgba(255,255,255,0.15)`, 8px radius, padding `8px 36px`, 14px Geist text `#FFFFFF`, placeholder `#AAAAAA`. On focus: border changes to `1px solid #FF58AE`."

### Iteration Guide

1. Start with `#101010` as your page canvas — the near-black warm dark tone sets the whole mood
2. Use Klarheit Grotesk for all headings (Inter Bold is the closest web-safe substitute); load Geist for all body/UI
3. Apply negative letter-spacing to all display sizes: `-0.01em` of the font size is the rule
4. Map plan tiers to their colors: dark for base, `#4F69F2` for mid, `#6F4BD3` for top
5. Restrict `#FF58AE` magenta to brand accent moments — it should feel rare and electric
6. Never add box-shadows — depth comes from surface color contrast only
7. All buttons and inputs use exactly `8px` border-radius; pricing cards use `24px`
8. Check contrast: `#F5F5F5` on `#101010` (WCAG AA passes), `#101010` on `#F5F5F5` (passes)
