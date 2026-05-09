---
version: alpha
name: Artlist
description: |
  Artlist is an all-in-one creative platform for video creators, offering royalty-free music,
  sound effects, stock footage, video templates, and AI-powered tools. The visual identity
  is built on a bold dark canvas — near-black #171717 — punctuated by a vivid electric
  yellow (#FFDA2A) that functions as the sole accent across CTAs, highlights, and active
  states. Typography is dual-font: Publico Banner (a premium serif) handles display
  headlines with high contrast and negative tracking, while Artlist Sans (a proprietary
  grotesque) covers all UI text. The system uses Material UI components styled with
  Tailwind CSS tokens, producing a cinematic, creator-focused dark-canvas product.

colors:
  primary: "#FFDA2A"
  primary-active: "#E6C426"
  primary-contrast: "#171717"
  ink: "#FFFFFF"
  body: "#E6E6E6"
  muted: "#B2B2B2"
  subtle: "#666666"
  canvas: "#171717"
  canvas-deep: "#0D0D0D"
  surface: "#1F1F1F"
  surface-mid: "#2B2B2B"
  surface-elevated: "#333333"
  on-dark: "#FFFFFF"
  hairline: "#4D4D4D"
  hairline-subtle: "#585454"
  semantic-success: "#81C784"
  semantic-success-vivid: "#54F893"
  semantic-error: "#CA514E"
  accent-gold: "#F6BF53"
  accent-gold-light: "#FFEEB0"

typography:
  display-xl:
    fontFamily: "publicoBanner, Georgia, serif"
    fontSize: 104px
    fontWeight: 300
    lineHeight: 0.88
    letterSpacing: -3.2px
  display-lg:
    fontFamily: "publicoBanner, Georgia, serif"
    fontSize: 72px
    fontWeight: 300
    lineHeight: 1.0
    letterSpacing: -2.16px
  display-md:
    fontFamily: "publicoBanner, Georgia, serif"
    fontSize: 56px
    fontWeight: 300
    lineHeight: 1.0
    letterSpacing: -1.68px
  title-lg:
    fontFamily: "artlistSans, sans-serif"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.28px
  title-md:
    fontFamily: "artlistSans, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.16px
  body-lg:
    fontFamily: "artlistSans, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "artlistSans, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "artlistSans, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  caption:
    fontFamily: "artlistSans, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
  button:
    fontFamily: "artlistSans, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.75
    letterSpacing: 0
  nav-link:
    fontFamily: "artlistSans, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.25
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
  none: 0
  sm: 6px
  md: 8px
  lg: 16px
  xl: 20px
  xxl: 24px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-contrast}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 32px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.primary-contrast}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 32px"
    border: "none"

  button-primary-disabled:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 32px"
    border: "none"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 32px"
    border: "1px solid {colors.hairline-subtle}"

  button-secondary-focused:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "14px 32px"
    border: "1px solid {colors.primary}"

  card-base:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
    boxShadow: "inset 0px 1.1px 1.1px 0px rgba(255,255,255,0.25), 0px 8px 32px 0px rgba(0,0,0,0.15)"

  card-pricing:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "36px 32px"
    border: "1px solid {colors.hairline}"

  card-pricing-featured:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "36px 32px"
    border: "1px solid {colors.primary}"

  text-input:
    backgroundColor: "{colors.surface-mid}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.hairline}"

  text-input-focused:
    backgroundColor: "{colors.surface-mid}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.primary}"

  text-input-disabled:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.hairline}"

  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    border: "none"

  badge:
    backgroundColor: "{colors.surface-mid}"
    textColor: "{colors.body}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
    typography: "{typography.caption}"

  badge-success:
    backgroundColor: "{colors.semantic-success-vivid}"
    textColor: "{colors.primary-contrast}"
    rounded: "{rounded.pill}"
    padding: "4px 6px"
    typography: "{typography.caption}"

---

# Artlist Design System

## Overview

Artlist is built for creative professionals who live inside video editing timelines. The product design philosophy is unapologetically cinematic: a near-black canvas creates an immersive content-first environment where the media itself takes center stage, and a single electric yellow accent (`#FFDA2A`) cuts through the darkness to guide every action. Nothing competes with the creative work.

The type system pairs the intellectual authority of Publico Banner serif — used exclusively for large-scale display headlines — with Artlist Sans, a proprietary grotesque that handles all UI chrome. Together they achieve a dual personality: editorial gravity in hero sections, clean efficiency everywhere else. Spacing is generous, layouts breathe, and the system resists ornamentation. This is a platform for people who know what they want.

Key visual characteristics:

- Near-black dark canvas (`#171717`) is the universal page background — light mode does not exist for the main product
- Single-color accent system: electric yellow `#FFDA2A` is the only true accent color; all CTAs use it
- Dual-font hierarchy: Publico Banner serif (light weight 300, negative tracking) for display; Artlist Sans grotesque for UI
- Full-pill buttons (`border-radius: 9999px`) — all interactive buttons are fully rounded
- No drop shadows on the primary CTA; glass-radial gradient overlay adds depth to the yellow pill button
- Material UI component library styled with Tailwind CSS tokens
- Negative letter-spacing on all display text: starts at -1.68px for 56px and scales to -3.2px for 104px
- Success state uses a vivid green `#54F893` — appears on pricing plan check marks

---

## Colors

### Brand & Accent

| Token | Hex | Use |
| --- | --- | --- |
| `primary` | `#FFDA2A` | CTA buttons, active states, highlight indicators, tab indicators |
| `primary-active` | `#E6C426` | Hover/active state on primary CTA |
| `primary-contrast` | `#171717` | Text on yellow primary button background |

### Surface Hierarchy

| Token | Hex | Use |
| --- | --- | --- |
| `canvas-deep` | `#0D0D0D` | Deepest backgrounds, hero overlays, banner underlays |
| `canvas` | `#171717` | Universal page background, dark nav drawer |
| `surface` | `#1F1F1F` | Elevated cards, dropdown panels, modals |
| `surface-mid` | `#2B2B2B` | Input backgrounds, secondary card surfaces |
| `surface-elevated` | `#333333` | Tooltips, deeply nested elevated elements |

### Text Hierarchy

| Token | Hex | Use |
| --- | --- | --- |
| `ink` / `on-dark` | `#FFFFFF` | Primary headings, high-emphasis text on dark canvas |
| `body` | `#E6E6E6` | Body copy, paragraph text |
| `muted` | `#B2B2B2` | Secondary labels, inactive nav links, metadata |
| `subtle` | `#666666` | Disabled text, placeholder text |
| `hairline` | `#4D4D4D` | Card borders, separator lines (Tailwind `border-medium-low-emphasis`) |
| `hairline-subtle` | `#585454` | Legacy subtle borders, older component overrides |

### Semantic Colors

| Token | Hex | Use |
| --- | --- | --- |
| `semantic-success` | `#81C784` | Success states in UI (MUI green, Tailwind `text-success`) |
| `semantic-success-vivid` | `#54F893` | Pricing feature checkmarks, positive indicator badges |
| `semantic-error` | `#CA514E` | Error states, destructive actions |
| `accent-gold` | `#F6BF53` | Max plan gradient end, reactivation banner |
| `accent-gold-light` | `#FFEEB0` | Max plan gradient start, premium plan highlights |

---

## Typography

### Font Families

**publicoBanner** — Premium serif by Commercial Type. Self-hosted as Next.js woff2 font, exposed via `--font-publico-banner` CSS variable. Available weights: 300, 400, 500, 700, 800, 900. Used exclusively for large display headlines (h1, h2). Light weight (300) creates editorial luxury. Fallback: `Georgia, serif`.

**artlistSans** — Proprietary grotesque commissioned for the brand. Self-hosted as Next.js woff2 font, exposed via `--font-artlist-sans` CSS variable. Available weights: 100, 300, 400, 500, 600, 700, 900. Used for all UI chrome: body, buttons, nav, labels, captions. Fallback: `sans-serif`.

### Type Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Use |
| --- | --- | --- | --- | --- | --- | --- |
| `display-xl` | publicoBanner | 104px | 300 | 0.88 | -3.2px | Hero headline desktop |
| `display-lg` | publicoBanner | 72px | 300 | 1.0 | -2.16px | Section hero headlines |
| `display-md` | publicoBanner | 56px | 300 | 1.0 | -1.68px | Secondary display, large section titles |
| `title-lg` | artlistSans | 28px | 500 | 1.25 | -0.28px | Card headings, modal titles |
| `title-md` | artlistSans | 24px | 500 | 1.25 | -0.16px | Feature section headings, h3 |
| `body-lg` | artlistSans | 18px | 400 | 1.5 | 0 | Lead paragraphs, pricing descriptions |
| `body-md` | artlistSans | 16px | 400 | 1.5 | 0 | Standard body copy |
| `body-sm` | artlistSans | 14px | 400 | 1.25 | 0 | Secondary body, form labels |
| `button` | artlistSans | 14px | 500 | 1.75 | 0 | All button text |
| `nav-link` | artlistSans | 14px | 500 | 1.25 | 0 | Navigation links |
| `caption` | artlistSans | 12px | 400 | 1.0 | 0 | Badges, timestamps, metadata |

### Typography Principles

- publicoBanner is always light weight (300) for display. Never bold display headings.
- Negative letter-spacing is mandatory for all publicoBanner usage — scale from -1.68px at 56px to -3.2px at 104px.
- artlistSans weights used in UI: 300 (light), 400 (normal), 500 (medium), 600 (semibold). Avoid 700 (bold) in UI text.
- Body text on dark canvas uses `#E6E6E6` (not pure white) for reduced eye strain.
- The platform uses fluid type scaling with `clamp()` functions — e.g., `clamp(3.5rem, 3.5rem + (100vw - 1024px) * 0.0535, 6.5rem)` for hero h1 between 1024px and 1920px.
- When self-hosting is not available, use `Georgia` for display headings and `Inter` or `DM Sans` as the closest artlistSans substitute.

---

## Layout

### Spacing System

Base unit: **8px** (some 4px micro-spacing for compact UI elements).

| Token | Value | Use |
| --- | --- | --- |
| `xxs` | 4px | Icon gaps, micro offsets |
| `xs` | 8px | Tight internal padding |
| `sm` | 12px | Compact button padding, form field internal |
| `md` | 16px | Default padding, nav item spacing |
| `lg` | 24px | Card internal padding, section sub-spacing |
| `xl` | 32px | Card padding, content group separation |
| `xxl` | 48px | Large content blocks, section gaps |
| `section` | 80px | Full section vertical padding |

### Grid & Container

- Default container: full-width with Tailwind responsive max-widths
- `sm`: 640px, `md`: 768px, `lg`: 1024px, `xl`: 1280px
- Content typically has horizontal padding of 24px (mobile) to 48px (desktop)
- Pricing cards use a 3-column grid at desktop, 1-column on mobile

### Whitespace Philosophy

Artlist uses generous whitespace to let media content breathe. Hero sections can be full-screen height with the text floating over video backgrounds. Section separators use consistent 80px vertical padding. Content blocks do not crowd each other — each feature module gets breathing room.

---

## Elevation and Depth

### Levels

| Level | Treatment | Example Use |
| --- | --- | --- |
| -1 | `canvas-deep` (#0D0D0D) flat | Deepest hero overlays, banner backgrounds |
| 0 | `canvas` (#171717) flat | Page background, nav drawer |
| 1 | `surface` (#1F1F1F) + subtle inset shadow | Pricing cards, feature cards |
| 2 | `surface-mid` (#2B2B2B) + inset light | Input fields, dropdown items |
| 3 | MUI modal overlay (rgba(0,0,0,0.8)) | Modal backdrop |
| 4 | `surface-elevated` (#333333) + blur | Tooltip panels, popovers |

### Shadow Philosophy

Shadows serve two purposes on Artlist:

1. **Inset highlights** — white inset shadows (`inset 0px 1.1px 1.1px 0px rgba(255,255,255,0.25)`) simulate a lit-from-above surface on cards, giving depth without outside drop shadows
2. **Ambient glow** — pricing cards have `0px 8px 32px 0px rgba(0,0,0,0.15)` and hover states reveal `0 0 24px 0 rgba(255,255,255,0.12)` — a white glow that makes the card appear to lift

The primary CTA button uses a glass-radial gradient with `#FFDA2A` — no solid flat color. Backdrop filter blur (`blur(2px)`) adds frosted-glass depth to the pill button.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
| --- | --- | --- |
| `none` | 0 | Flat elements (rare) |
| `sm` | 6px | Small UI chips, MUI base elements |
| `md` | 8px | Standard card corners (minor), tab panels |
| `lg` | 16px | Large card sections |
| `xl` | 20px | Pricing cards |
| `xxl` | 24px | Section containers, hero modals |
| `pill` | 9999px | All buttons — this is the dominant shape |

Artlist's most distinctive shape is the **full-pill button**. Every interactive CTA (primary, secondary, outlined) uses `border-radius: 9999px`. This creates a friendly, modern, approachable feel despite the dark cinematic palette.

### Photography and Imagery

- Content thumbnails are displayed at consistent aspect ratios (16:9 for video, 1:1 for music)
- Hero backgrounds use full-bleed video or high-quality photography with color overlay gradients
- Overlay gradients are directional: `linear-gradient(90deg, #0D0D0D 20%, transparent 53%)` to fade image at edges for text legibility
- AI tool imagery uses cinematic, high-saturation color palettes as proof of quality

---

## Components

### Buttons

**Primary CTA (Yellow Pill):**

- Background: `#FFDA2A` with glass-radial gradient overlay
- Text: `#171717` (primary-contrast), 14px, weight 500
- Border radius: 9999px (full pill)
- Padding: 14px 32px (large), 10px 24px (medium)
- Hover: `#E6C426` background, brightness filter

**Outlined Secondary:**

- Background: transparent with frosted-glass backdrop filter
- Text: `#FFFFFF` or `#E6E6E6`
- Border: `1px solid rgba(255,218,42,0.5)` (yellow-tinted outline)
- Border radius: 9999px

**Ghost / Minimal:**

- Background: transparent
- Text: `#FFDA2A`
- No border
- Border radius: 9999px

**Disabled:**

- Background: `#333333` (surface-elevated)
- Text: `#FFFFFF` (on-dark)
- Cursor: not-allowed

### Cards

**Standard Feature Card:**

- Background: `#1F1F1F`
- Border: `1px solid #585454`
- Border radius: 20px
- Padding: 24px–32px
- Inset box-shadow: `inset 0px 1.1px 1.1px 0px rgba(255,255,255,0.25)`
- Hover: white ambient glow `0 0 24px 0 rgba(255,255,255,0.12)` + translate-y

**Pricing Card:**

- Background: `#171717` (same as canvas)
- Border: `1px solid #585454`
- Border radius: 20px
- Padding: 36px 32px

**Featured Pricing Card (Max Plan):**

- Highlight stripe background: `linear-gradient(252deg, #FFEEB0 23%, #F6BF53 82%)` — pale gold to amber
- Card body: `#1F1F1F` surface with `1px solid #FFDA2A` border
- The gradient highlight appears as a top banner strip, not the full card face

### Inputs and Forms

- Background: `#2B2B2B` (surface-mid)
- Border: `1px solid #333333`
- Border radius: 6px
- Focus border: `1px solid #FFDA2A`
- Text: `#FFFFFF`
- Placeholder: `#666666`

Toggle/Switch:

- Track off: `#C1C1C1` with `#C7C7C7` border
- Track on: `#FFFFFF`
- Thumb: `#171717` (dark on light track)

### Navigation

- Sticky top nav; `background-color: #171717` with `z-index: 1211`
- Artlist wordmark (SVG) in yellow
- Nav links: `#B2B2B2` default, `#FFFFFF` on hover
- CTA in nav: primary-yellow pill button ("Start Free Now")
- Mobile: hamburger menu with dark drawer from left

### Badges and Tags

- Default: `#2B2B2B` background, `#E6E6E6` text, `border-radius: 9999px`
- Success (vivid): `#54F893` background, `#171717` text, `border-radius: 200px` — used for pricing checkmarks
- Success (semantic): `#81C784` — MUI success green, used in form/state feedback
- Error: `#CA514E` background, `#FFFFFF` text

---

## Do's and Don'ts

**Do:**

- Use `#FFDA2A` exclusively as the single accent color — do not introduce secondary accent colors
- Apply Publico Banner (weight 300) for all display headlines with significant negative letter-spacing
- Use full-pill (`border-radius: 9999px`) for every interactive button
- Maintain `#171717` as the universal dark canvas — never deviate to medium-gray backgrounds for page surfaces
- Use generous whitespace (minimum 80px) between major content sections
- Let video thumbnails and media cards breathe — avoid dense grid packing
- Apply white inset shadows on cards to simulate dimensionality on dark surfaces

**Don't:**

- Don't use Publico Banner at weights other than 300 for display text
- Don't use rectangular or mildly rounded buttons — the brand identity is full-pill only
- Don't place yellow `#FFDA2A` text directly on white backgrounds — it fails contrast
- Don't introduce any light-mode or white-canvas page sections in the main product
- Don't use more than one accent color in a single view — yellow is the only CTA accent
- Don't apply drop shadows without first trying the white inset highlight approach
- Don't reduce letter-spacing to 0 on Publico Banner display text — negative tracking is part of the visual identity
- Don't use font weights above 500 for Artlist Sans in UI text — the brand voice is medium-weight, never heavy

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
| --- | --- | --- |
| mobile | < 640px | Single column, stacked buttons, full-width cards |
| sm | 640px+ | 2-column grids begin, nav shows horizontal links |
| md | 768px | Navigation desktop variant, expanded header |
| lg | 1024px | Full desktop layout, 3-column pricing grid |
| xl | 1280px | Max content widths applied |
| 2xl | 1536px+ | Fluid type scaling continues, wider content areas |

### Touch Targets

- Minimum interactive element height: 40px
- Primary CTA buttons: minimum 48px height on mobile
- Nav links: 40px touch target minimum

### Collapsing Strategy

- Navigation: hamburger menu below md, full horizontal nav at md+
- Pricing cards: single column on mobile, side-scroll on sm, 3-column grid at lg+
- Feature grids: 1-column (mobile) → 2-column (md) → 3-4 column (lg+)
- Hero text: fluid clamp scaling from 56px (mobile) to 104px (4K)

### Image Behavior

- Hero images: `object-fit: cover`, full-viewport height
- Thumbnails: fixed aspect-ratio (16:9 video, 1:1 music, 16:9 footage)
- Gradient overlays applied directionally to preserve text contrast over image backgrounds
- `image-rendering: auto` with imgix CDN optimization (`?auto=format`)

---

## Agent Prompt Guide

### Quick Color Reference

- Primary accent (yellow): `#FFDA2A`
- Primary hover (dark yellow): `#E6C426`
- Primary contrast (text on yellow): `#171717`
- Canvas deep (darkest bg): `#0D0D0D`
- Canvas (page background): `#171717`
- Surface (elevated card): `#1F1F1F`
- Surface mid (inputs): `#2B2B2B`
- Surface elevated (tooltips): `#333333`
- Ink (white text): `#FFFFFF`
- Body (light gray text): `#E6E6E6`
- Muted (secondary text): `#B2B2B2`
- Subtle (disabled/placeholder): `#666666`
- Hairline (card borders): `#4D4D4D`
- Success vivid (pricing checks): `#54F893`
- Success semantic (MUI): `#81C784`
- Error: `#CA514E`
- Max plan gold: `#F6BF53` → `#FFEEB0` (gradient)

### Example Component Prompts

**Hero Section:**
"Create a hero section on `#171717` dark canvas. Full-width, full-screen height. Headline: publicoBanner, weight 300, 72–104px fluid, `#FFFFFF`, letter-spacing -2.5px, line-height 0.88. Subheadline: artlistSans, 18px, weight 400, `#E6E6E6`. Primary CTA button: `#FFDA2A` background, `#171717` text, 14px weight 500, full-pill border-radius 9999px, padding 14px 32px. Optional: full-bleed video background with dark gradient overlay `linear-gradient(90deg, #0D0D0D 20%, transparent 53%)`."

**Pricing Card:**
"Create a pricing card on `#171717` background, border `1px solid #4D4D4D`, border-radius 20px, padding 36px 32px. Plan name in artlistSans 14px weight 500 `#B2B2B2` uppercase. Price in artlistSans 40px weight 600 `#FFFFFF`. Feature list with `#54F893` check mark icons and `#E6E6E6` text 14px. CTA button: full-width, `#FFDA2A`, `#171717` text, full-pill, padding 14px. For the Max plan featured card, add a top highlight stripe with `linear-gradient(252deg, #FFEEB0 23%, #F6BF53 82%)`."

**Button Set:**
"Primary button: `#FFDA2A` background, `#171717` text, border-radius 9999px, padding 14px 32px, artlistSans 14px weight 500, no border. Secondary button: transparent background, `1px solid rgba(255,218,42,0.5)` border, `#FFFFFF` text, same radius and padding. Ghost button: transparent, no border, `#FFDA2A` text."

**Navigation Bar:**
"Create a sticky navbar on `#171717` background, no border. Left: Artlist wordmark in yellow. Center: nav links in Artlist Sans 14px weight 500 `#B2B2B2`, hover `#FFFFFF`. Right: primary-yellow pill button 'Start Free Now' with `#171717` text."

**Feature Card:**
"Create a feature card on `#1F1F1F` background, border `1px solid #585454`, border-radius 20px, padding 28px. Box-shadow: `inset 0px 1.1px 1.1px 0px rgba(255,255,255,0.25)`. Title in Artlist Sans 20px weight 500 `#FFFFFF`. Body in Artlist Sans 14px weight 400 `#B2B2B2`. Hover: white ambient glow `box-shadow: 0 0 24px 0 rgba(255,255,255,0.12)`."

### Iteration Guide

1. Set the page background to `#171717` — never a lighter gray for Artlist UI
2. Load Publico Banner (weight 300) from CDN or self-hosted woff2 for all display headings; use Georgia as fallback
3. Load Artlist Sans (or a geometric grotesque like Inter as a close substitute) for all UI text
4. Apply significant negative letter-spacing to all Publico Banner display text
5. Use `border-radius: 9999px` on every button — this is a hard brand rule
6. Use `#FFDA2A` as the ONLY accent color — resist adding secondary accent colors
7. White inset shadows (`inset 0px 1.1px rgba(255,255,255,0.25)`) add dimensionality on dark cards
8. On pricing or feature grids, use `#54F893` for check marks / success indicators
9. Hero CTAs use the full-pill yellow button; secondary actions use outlined yellow or ghost
10. Scale type fluidly between breakpoints using `clamp()` for display sizes
