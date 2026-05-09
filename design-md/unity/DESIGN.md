---
version: alpha
name: Unity
description: |
  Unity's design system is a cinematic, dark-canvas developer platform identity that serves game creators worldwide. Built entirely for dark mode, the stark black base canvas and layered near-black surfaces create dimensional depth through surface elevation rather than traditional shadows. The custom Nohemi display font dominates hero sections at massive scale with tight negative tracking, while Inter handles all UI text — a strict dual-font hierarchy that separates brand gravitas from functional clarity. Deep cobalt blue pill-shaped buttons are the sole primary action motif, producing an aesthetic that fuses gaming culture with enterprise developer tooling: technical, immersive, and cinematic.

colors:
  primary: "#3358D4"
  primary-active: "#3A5BC7"
  canvas: "#000000"
  surface: "#1F1F1F"
  surface-dark: "#141414"
  surface-mid: "#262626"
  surface-input: "#1C1C21"
  ink: "#FFFFFF"
  muted: "#BFBFBF"
  hairline: "#333333"
  semantic-success: "#32AE88"
  on-dark: "#FFFFFF"

typography:
  display-xl:
    fontFamily: '"nohemi", "Inter", sans-serif'
    fontSize: 120px
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: -1.2px
  display-lg:
    fontFamily: '"nohemi", "Inter", sans-serif'
    fontSize: 96px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -0.96px
  title-lg:
    fontFamily: '"Inter", "Inter Fallback", ui-sans-serif, sans-serif'
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.48px
  title-md:
    fontFamily: '"Inter", "Inter Fallback", ui-sans-serif, sans-serif'
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.32px
  body-lg:
    fontFamily: '"Inter", "Inter Fallback", ui-sans-serif, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  body-md:
    fontFamily: '"Inter", "Inter Fallback", ui-sans-serif, sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  body-sm:
    fontFamily: '"Inter", "Inter Fallback", ui-sans-serif, sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  button:
    fontFamily: '"Inter", "Inter Fallback", ui-sans-serif, sans-serif'
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: -0.16px
  button-cta:
    fontFamily: '"Inter", "Inter Fallback", ui-sans-serif, sans-serif'
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 3.6px
  nav-link:
    fontFamily: '"Inter", "Inter Fallback", ui-sans-serif, sans-serif'
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0px

spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px

rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "10px 24px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "10px 24px"
    border: "none"

  button-secondary:
    backgroundColor: "{colors.surface-mid}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "10px 24px"
    border: "none"

  button-cta:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.ink}"
    typography: "{typography.button-cta}"
    rounded: "{rounded.pill}"
    padding: "10px 12px"
    border: "none"

  card-base:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.surface-mid}"

  text-input:
    backgroundColor: "{colors.surface-input}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "6px 35px 6px 15px"
    border: "none"

  text-input-focused:
    border: "1px solid {colors.primary}"

  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: "none"
---

# Unity Design System

## Overview

Unity powers the creation of two-thirds of the world's real-time 3D content, and its design language reflects that cinematic ambition. The entire experience is dark mode only — from the pure black homepage canvas to the layered near-black surfaces of the pricing and product pages. This creates an environment that feels native to game engines, creative tools, and developer workflows rather than traditional enterprise SaaS.

The visual language is intentionally minimal: one display font (Nohemi, used exclusively at hero scale), one UI font (Inter for everything else), one primary color (cobalt blue #3358D4), and one shape language (pill-shaped buttons and inputs). By constraining the design vocabulary to these few bold choices, Unity achieves a brand that feels distinct from competitors like Epic/Unreal without requiring complexity.

Key visual characteristics:
- **Dark-mode-only palette** — no light theme; five surface levels create depth through elevation, not shadows
- **Nohemi at massive scale** — 120px display type with -1.2px tracking and 0.95 line-height for cinematic impact
- **Inter for all UI** — universal UI font: nav links, body copy, buttons, form labels, captions
- **Cobalt blue (#3358D4) as the sole primary** — used exclusively for primary CTAs; no secondary accent colors
- **Pill-shaped interactivity** — every button and input uses 9999px radius, creating a consistent touch-friendly language
- **Surface elevation over shadows** — five tiers from #000000 to #262626 replace traditional box-shadow hierarchy
- **Generous vertical rhythm** — 80px section padding; whitespace communicates premium quality
- **Dual CTA register** — standard buttons (lowercase, -0.16px tracking) vs. uppercase CTAs (+3.6px tracking)

Unity differentiates from Microsoft/Unreal by being darker, more cinematic, and typographically bolder — closer to a gaming company's identity than an enterprise software vendor.

## Colors

### Brand & Primary
- **Primary** `#3358D4` — cobalt blue used exclusively on primary CTAs ("Get started", "Buy now")
- **Primary Active** `#3A5BC7` — hover/press state; also used for uppercase marketing CTAs

### Surface Hierarchy
Unity uses surface layering as its depth system. All five surfaces are dark:
- **Canvas** `#000000` — pure black; homepage hero and default page background
- **Surface Dark** `#141414` — deepest elevated surface; section backgrounds on product pages
- **Surface Input** `#1C1C21` — input field backgrounds; slightly blue-tinted for distinction
- **Surface** `#1F1F1F` — standard card and panel background; pricing page base
- **Surface Mid** `#262626` — highest elevation; secondary buttons, code blocks, hover states

### Text
- **Ink** `#FFFFFF` — all headings and primary text; maximum contrast on dark canvas
- **Muted** `#BFBFBF` — body copy, secondary labels, pricing table values; 75% white

### Semantic
- **Success** `#32AE88` — plan confirmation, positive status indicators in pricing tables

## Typography

### Font Families
- **Nohemi** — licensed display typeface from Pangram Pangram Foundry, loaded via Unity's CDN. Use Inter as a development substitute. Not available on Google Fonts.
- **Inter / Inter Fallback** — primary UI font; loaded via Google Fonts or self-hosted. Unity uses the `"Inter Fallback"` metric-matched fallback to prevent layout shift on load.

### Type Hierarchy

| Role | Family | Size | Weight | Line Height | Letter Spacing | Use |
|------|--------|------|--------|-------------|----------------|-----|
| display-xl | Nohemi | 120px | 500 | 0.95 | -1.2px | Homepage hero headline |
| display-lg | Nohemi | 96px | 500 | 1.0 | -0.96px | Sub-page hero, pricing title |
| title-lg | Inter | 48px | 500 | 1.1 | -0.48px | Section headings |
| title-md | Inter | 32px | 500 | 1.2 | -0.32px | Feature headings |
| body-lg | Inter | 16px | 400 | 1.6 | 0px | Lead paragraph text |
| body-md | Inter | 14px | 400 | 1.6 | 0px | Standard body copy |
| body-sm | Inter | 12px | 400 | 1.5 | 0px | Captions, footnotes, table text |
| button | Inter | 12px | 600 | 1.0 | -0.16px | Standard button labels |
| button-cta | Inter | 12px | 700 | 1.0 | +3.6px | Uppercase marketing CTAs |
| nav-link | Inter | 14px | 500 | 1.0 | 0px | Navigation labels |

### Typography Principles
- **Nohemi is display-only** — never use it below 48px, for body text, UI labels, or button text
- **Display sizes use tight negative tracking** — scale tracking proportionally with font size
- **Nohemi weight is always 500** — Unity does not use bold or light Nohemi weights
- **Inter is the universal fallback** — any text that is not a hero headline uses Inter
- **Uppercase tracking is +3.6px** — the only positive letter-spacing in the system is on uppercase CTA labels

## Layout

### Spacing System
Base unit: 8px.

| Token | Value | Use |
|-------|-------|-----|
| xs | 8px | Icon gaps, inline spacing |
| sm | 12px | Button padding (vertical), tight list items |
| md | 16px | Default padding, form field spacing |
| lg | 24px | Card internal padding, stacked elements |
| xl | 32px | Component margins, between-card gaps |
| xxl | 48px | Section header to content gap |
| section | 80px | Between major page sections |

### Grid & Container
- **Max container**: ~1200px centered with 24px edge gutters on desktop
- **Cards**: 3-column grid on desktop, 2-column on tablet, 1-column on mobile
- **Pricing**: horizontal comparison table on desktop; vertical per-plan stack on mobile

### Whitespace Philosophy
Section padding is 80px top and bottom, never less. The black canvas between sections is never "filled" — negative space is a design element that reinforces the cinematic, premium positioning.

## Elevation & Depth

Unity's elevation system is entirely surface-based. No traditional box shadows exist.

| Level | Surface | Value | Example Use |
|-------|---------|-------|-------------|
| 0 — Base | canvas | `#000000` | Page background, hero sections |
| 1 — Deep | surface-dark | `#141414` | Product/feature page backgrounds |
| 2 — Input | surface-input | `#1C1C21` | Form inputs, search fields |
| 3 — Card | surface | `#1F1F1F` | Pricing cards, content panels |
| 4 — Raised | surface-mid | `#262626` | Secondary buttons, hover states, code blocks |

**Depth Philosophy:** Instead of shadows, Unity uses successively lighter surfaces as you move up the z-axis. The contrast between `#000000` and `#1F1F1F` is subtle but creates perceivable depth. No glow effects, no drop shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| xs | 4px | Small chips, tooltips |
| sm | 8px | Small cards, inline code |
| md | 12px | Medium panels |
| lg | 16px | Cards, large panels, modals |
| pill | 9999px | All buttons and form inputs |

**Shape Philosophy:** The pill is Unity's signature shape. Every interactive element — buttons, search inputs, plan selectors — uses 9999px radius without exception. Cards and panels use 16px radius. Sharp corners (0px) are never used.

### Photography & Imagery
- **Aspect ratios**: 16:9 for hero video loops; 4:3 for product screenshots; 1:1 for creator portraits
- **Treatment**: dark-tinted overlays on images to maintain canvas continuity; images rarely appear on white backgrounds
- **Borders**: images are borderless, integrated into dark surfaces

## Components

### Buttons

**Primary** — `#3358D4` cobalt blue, pill shape, padding `10px 24px`, Inter 12px weight 600 -0.16px tracking. Hover: `#3A5BC7`.

**Secondary** — `#262626` dark gray background, white text, same pill shape and typography. Used for "Download Unity" and non-primary actions.

**CTA (Uppercase)** — `#3A5BC7` background, Inter 12px weight 700, +3.6px tracking, all-caps label, padding `10px 12px`. Used sparingly in marketing callout positions.

### Cards

**Standard Card** — `#1F1F1F` background, 16px radius, 24px padding, `1px solid #262626` border. Heading in title-md, body copy in body-md, optional CTA button.

**Pricing Card** — same base as standard card with internal sections for price display, feature checklist, and full-width CTA button. Featured plan receives `1px solid {colors.primary}` border.

### Inputs & Forms

**Text Input** — `#1C1C21` background (slightly blue-tinted dark), pill shape (50px effective radius), asymmetric padding `6px 35px 6px 15px` (accommodates trailing icon). No border at rest; `1px solid #3358D4` on focus.

### Navigation

**Top Nav** — pure black (`#000000`) background, white nav links at 14px Inter weight 500. No bottom border. Logo left, links center, CTA buttons right. May transition between transparent and solid on scroll.

## Do's and Don'ts

**Do:**
- Use Nohemi exclusively for display headings at 96px+ with tight negative tracking
- Apply pill shape (9999px) to every button and input without exception
- Layer dark surfaces using the 5-tier system to create depth — no box shadows
- Maintain 80px section spacing minimum between major content blocks
- Use cobalt blue (#3358D4) only for primary CTAs, not as a decorative accent
- Keep the canvas pure black (#000000) for homepage and hero sections
- Use Inter for all non-display text: nav, body, buttons, captions
- Scale letter-spacing proportionally with Nohemi size (larger = more negative)

**Don't:**
- Use Nohemi below 48px or for body copy, labels, or UI text
- Use light or white backgrounds — this is a dark-mode-only design system
- Add drop shadows or box-shadows — surface elevation handles all depth
- Introduce secondary accent colors alongside the cobalt blue primary
- Use border-radius below 9999px on buttons or inputs
- Add positive letter-spacing to any text that is not an uppercase CTA
- Mix more than two typefaces — the system is Nohemi + Inter exclusively
- Use multiple Nohemi weights — always weight 500

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 768px | Single column, nav collapses to hamburger, Nohemi scales to ~48px |
| Tablet | 768–1024px | 2-column grid, condensed nav, Nohemi ~72px |
| Desktop | 1024px+ | Full 3-column grid, horizontal nav, Nohemi 96–120px |

### Touch Targets
- Buttons: minimum 44px height; pill shape ensures adequate tap width at any label length
- Nav links: minimum 44px tap area with surrounding padding
- Inputs: minimum 44px height; pill inputs meet this at standard padding

### Collapsing Strategy
- **Navigation**: hamburger menu on mobile; full horizontal nav on desktop
- **Cards**: 3-column → 2-column → single-column as width decreases
- **Pricing table**: horizontal comparison on desktop collapses to vertical per-plan cards on mobile
- **Hero type**: Nohemi scales from 120px (desktop) → 72px (tablet) → 48px (mobile) with consistent tight tracking maintained

### Image Behavior
- Hero video loops pause or convert to static image on mobile to save bandwidth
- Product screenshots preserve aspect ratio using `object-fit: cover`
- Images remain borderless, full-width within their dark surface containers

## Agent Prompt Guide

### Quick Color Reference
- Primary (CTA blue): #3358D4
- Primary hover/active: #3A5BC7
- Canvas (black): #000000
- Surface (cards): #1F1F1F
- Surface raised (buttons): #262626
- Ink (white text): #FFFFFF
- Muted text: #BFBFBF
- Success green: #32AE88

### Example Component Prompts

**Hero Section:**
"Create a hero on a pure black (#000000) background. Headline in Nohemi 120px, weight 500, line-height 0.95, letter-spacing -1.2px, color #FFFFFF. Subheadline in Inter 16px weight 400 color #BFBFBF. Two pill-shaped buttons: primary with #3358D4 background, secondary with #262626 background. Both use Inter 12px weight 600 letter-spacing -0.16px padding 10px 24px, white text, no border."

**Pricing Card:**
"Create a pricing card on #1F1F1F background. Rounded 16px. Border 1px solid #262626. Plan title in Inter 32px weight 500 color #FFFFFF. Price in Nohemi 48px weight 500. Feature list in Inter 14px weight 400 color #BFBFBF with checkmarks. Full-width cobalt blue (#3358D4) pill button at bottom."

**Button Set:**
"Primary button: #3358D4 background, border-radius 9999px, padding 10px 24px, Inter 12px weight 600 letter-spacing -0.16px white text no border. Secondary button: #262626 background, same radius and padding, same typography. Hover states: primary → #3A5BC7, secondary → slightly lighter than #262626."

**Input Field:**
"Create a search input on black canvas. Input: #1C1C21 background, border-radius 9999px, padding 6px 35px 6px 15px, Inter 14px weight 400 white text no border. On focus: 1px solid #3358D4 border. Placeholder text #BFBFBF."

### Iteration Guide
1. Start with #000000 as the page background — never light gray or white
2. Load Nohemi from Unity's CDN; use Inter as a substitute during development
3. Load Inter via Google Fonts: `family=Inter:wght@400;500;600;700&display=swap`
4. Apply negative letter-spacing to all Nohemi text — scale proportionally with font size
5. Use `border-radius: 9999px` on every button and input, no exceptions
6. Build depth through surface layers: canvas → surface-dark → surface → surface-mid
7. Reserve cobalt blue (#3358D4) exclusively for primary action buttons
