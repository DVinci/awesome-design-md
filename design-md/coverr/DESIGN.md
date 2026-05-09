---
version: alpha
name: Coverr
description: |
  Coverr is a dark-canvas video platform offering free stock footage and AI-powered video creation tools.
  Its visual identity is built around a near-black obsidian canvas punctuated by a signature neon yellow-green
  primary accent (#D7FF00), rendered in the geometric Outfit typeface. The design is unapologetically dark,
  cinematic, and editorial — favouring high contrast, pill-shaped CTAs, and minimal layering depth.

colors:
  primary: "#D7FF00"
  primary-active: "#BFDF00"
  canvas: "#0B0B0B"
  surface: "#171719"
  surface-raised: "#313133"
  surface-overlay: "#29292B"
  footer-bg: "#0E0E0F"
  ink: "#FAFAFFEB"
  body: "#FAFAFFAD"
  muted: "#FAFAFF5C"
  on-dark: "#FAFAFF"
  hairline: "#FAFAFF14"
  surface-subtle: "#FAFAFF0A"
  accent-indigo: "#7A84FF"
  accent-coral: "#F05F79"
  accent-cyan: "#02AAB0"
  accent-purple: "#FF47DA"
  semantic-error: "#F05F79"

typography:
  display-xl:
    fontFamily: "Outfit, sans-serif"
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.25px

  display-md:
    fontFamily: "Outfit, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.167
    letterSpacing: 0.25px

  title-lg:
    fontFamily: "Outfit, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0.25px

  title-md:
    fontFamily: "Outfit, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.25px

  title-sm:
    fontFamily: "Outfit, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.333
    letterSpacing: 0.25px

  body-lg:
    fontFamily: "Outfit, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.5px

  body-md:
    fontFamily: "Outfit, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.5px

  body-sm:
    fontFamily: "Outfit, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.571
    letterSpacing: 0.5px

  button:
    fontFamily: "Outfit, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.571
    letterSpacing: 0px

  nav-link:
    fontFamily: "Outfit, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px

  caption:
    fontFamily: "Outfit, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.5px

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
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 24px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "7px 16px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "7px 16px"

  button-primary-disabled:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "7px 16px"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "7px 16px"
    border: "1px solid {colors.hairline}"

  button-secondary-active:
    backgroundColor: "{colors.surface-subtle}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "7px 16px"
    border: "1px solid {colors.hairline}"

  card-base:
    backgroundColor: "{colors.surface-subtle}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"

  card-featured:
    backgroundColor: "{colors.surface-subtle}"
    rounded: "{rounded.lg}"
    padding: "38px 32px 32px"
    border: "1px solid {colors.primary}"

  pricing-card:
    backgroundColor: "{colors.surface-subtle}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.hairline}"

  pricing-card-featured:
    backgroundColor: "{colors.surface-subtle}"
    rounded: "{rounded.lg}"
    padding: "38px 32px 32px"
    border: "1px solid {colors.primary}"

  text-input:
    backgroundColor: "transparent"
    textColor: "{colors.body}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
    border: "1px solid {colors.hairline}"

  text-input-focused:
    border: "1px solid {colors.primary}"

  text-input-disabled:
    textColor: "{colors.muted}"
    border: "1px solid {colors.hairline}"

  badge:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
    border: "1px solid {colors.hairline}"

  badge-primary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
    border: "1px solid {colors.primary}"

  badge-alert:
    backgroundColor: "transparent"
    textColor: "{colors.accent-coral}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
    border: "1px solid {colors.accent-coral}"

  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    height: "82px"
    border: "none"
---

# Coverr Design System

## Overview

Coverr's visual identity is built for a cinematic web experience — a near-total-black obsidian canvas,
a signature neon yellow-green CTA, and the clean geometric curves of the Outfit typeface. Every design
decision reinforces the brand's proposition: free high-quality stock video augmented by cutting-edge AI
tools, presented with the authority and drama of a professional production studio.

The palette is a study in disciplined restraint. Only two hues break the monochrome scheme — the neon
lime primary (#D7FF00) and a supportive indigo accent (#7A84FF) used for Discord integrations and
gradient entry-points. Cards and surfaces are constructed purely from transparency layers over the
canvas, creating depth without introducing foreign background colors. Gradient palettes (blue, pink,
cyan, purple) appear exclusively as decorative UI elements for AI feature differentiation, never as
interactive affordances.

**Key visual characteristics:**
- Near-total-black obsidian canvas (#0B0B0B) with near-black surface hierarchy (no true white surfaces)
- Signature neon yellow-green CTA (#D7FF00) — high-contrast against dark canvas, used exclusively for primary actions
- Single geometric typeface: Outfit — from weight 400 body to 700 display, no secondary face
- All interactive elements (buttons, badges, cards) use pill (9999px) or low-radius (8–12px) geometry
- Semi-transparent text layers (92%, 68%, 36%) over dark canvas rather than discrete color tokens
- Surface depth expressed through transparency stacking: `#FAFAFF0A`, `#FAFAFF08`, `#313133`
- Rich CSS custom property system: spacing, rounding, and gradient definitions all tokenized
- Named gradient palette (blue, pink, cyan, purple) for AI feature differentiation and decorative use

---

## Colors

### Brand & Accent

| Token | Hex | Use |
| --- | --- | --- |
| `primary` | `#D7FF00` | Primary CTA button background, featured card border, active accent |
| `primary-active` | `#BFDF00` | Primary button hover/active state |
| `accent-indigo` | `#7A84FF` | Discord link accent, gradient-blue range |
| `accent-coral` | `#F05F79` | Gradient-pink range, error badge border, promo badge |
| `accent-cyan` | `#02AAB0` | Gradient-cyan start, AI feature callout |
| `accent-purple` | `#FF47DA` | Gradient-purple start, AI feature callout |

### Surface

| Token | Hex | Use |
| --- | --- | --- |
| `canvas` | `#0B0B0B` | Page background, primary darkest layer |
| `surface` | `#171719` | Navbar background on scroll, elevated panel |
| `surface-raised` | `#313133` | Raised cards, video thumbnail frames |
| `surface-overlay` | `#29292B` | Modal overlays, dropdown menus |
| `footer-bg` | `#0E0E0F` | Footer background (slightly darker than canvas) |
| `surface-subtle` | `#FAFAFF0A` | Card background (4% opacity white on dark) |
| `hairline` | `#FAFAFF14` | Borders, dividers (8% opacity white on dark) |

### Text

| Token | Hex | Use |
| --- | --- | --- |
| `ink` | `#FAFAFFEB` | Primary headings and labels (92% opacity) |
| `body` | `#FAFAFFAD` | Body copy, descriptions (68% opacity) |
| `muted` | `#FAFAFF5C` | Placeholder text, disabled labels (36% opacity) |
| `on-dark` | `#FAFAFF` | Full-opacity white, text on primary buttons |

### Semantic

| Token | Hex | Use |
| --- | --- | --- |
| `semantic-error` | `#F05F79` | Error messages, destructive actions (matches accent-coral) |

### Named Gradients (decorative — use for AI feature UI only)

| Name | Values |
| --- | --- |
| Blue | `#36D1DC` → `#5B86E5` (79deg) |
| Pink | `#C84E89` → `#F15F79` (89deg) |
| Cyan | `#02AAB0` → `#00CDAC` (89deg) |
| Purple | `#FF47DA` → `#5A5AE0` (87deg) |

---

## Typography

### Font Family

**Outfit** — geometric sans-serif, available via Google Fonts.

```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
```

Single typeface across the entire product — no secondary face. Weight variation alone (400/500/600/700) carries the full typographic hierarchy.

### Hierarchy Table

| Role | Size | Weight | Line Height | Letter Spacing | Use |
| --- | --- | --- | --- | --- | --- |
| `display-xl` | 64px | 700 | 1.25 | 0.25px | Hero/about page H1 |
| `display-md` | 48px | 600 | 1.167 | 0.25px | Section H1 headings |
| `title-lg` | 32px | 600 | 1.25 | 0.25px | Section H2 headings |
| `title-md` | 24px | 500 | 1.25 | 0.25px | Pricing tier H2 |
| `title-sm` | 18px | 500 | 1.333 | 0.25px | Feature labels H3/H4 |
| `body-lg` | 18px | 400 | 1.5 | 0.5px | Lead paragraphs |
| `body-md` | 16px | 400 | 1.5 | 0.5px | Default body copy |
| `body-sm` | 14px | 400 | 1.571 | 0.5px | Captions, metadata |
| `button` | 14px | 600 | 1.571 | 0 | All button text |
| `nav-link` | 16px | 400 | 1.4 | 0 | Navigation links |
| `caption` | 12px | 400 | 1.5 | 0.5px | Micro labels, badges |

### Principles

- Single typeface, weight-driven hierarchy — do not introduce a second font family
- Body text uses +0.5px letter-spacing for readability against dark backgrounds
- Display and title sizes use +0.25px tracking — subtle opening for geometric letterforms
- Button text is always 600 weight (semi-bold) at 14px — never all-caps, never uppercase
- Headings do not use negative tracking despite dark canvas context

---

## Layout

### Spacing System

Base unit: 4px. All spacing values are 4px multiples.

| Token | Value | Typical Use |
| --- | --- | --- |
| `xxs` | 4px | Icon padding, micro gaps |
| `xs` | 8px | Inline element spacing |
| `sm` | 12px | Component internal padding (compact) |
| `md` | 16px | Standard padding, container gutters |
| `lg` | 24px | Card padding, section gaps |
| `xl` | 32px | Generous card padding |
| `xxl` | 48px | Inter-section gaps |
| `section` | 80px | Hero and major section vertical rhythm |

### Grid & Container

- Max container width: 1680px (`--container-max-width`)
- Container horizontal padding: 16px (`--container-padding`)
- Navbar heights: collapsed 82px, extended 134px
- Footer padding: 40px on all sides
- Video grid: masonry or fixed-ratio grid, typically 4–6 columns at desktop

### Whitespace Philosophy

Coverr uses generous vertical rhythm between major content sections (80px baseline) while keeping
component internals compact (8–16px). Dark canvas pages require breathing room to avoid oppressive
density — but the grid of video thumbnails is intentionally dense to maximize content surface area.

---

## Elevation & Depth

### Levels Table

| Level | Treatment | Example Use |
| --- | --- | --- |
| 0 — Ground | `#0B0B0B` solid | Page background |
| 1 — Subtle | `#FAFAFF0A` (4% overlay) | Card base, pricing plan cells |
| 2 — Raised | `#313133` solid or `#FAFAFF08` border | Video thumbnail cards |
| 3 — Overlay | `#29292B` solid | Dropdown menus, modals |
| 4 — Nav | `#171719` solid | Scrolled navbar, sticky header |
| 5 — Featured | `#0E0E0F` footer | Footer background |

### Shadow Philosophy

Coverr uses **no box shadows**. Depth is communicated entirely through:
1. Background color stepping (from #0B0B0B to lighter card surfaces)
2. Semi-transparent border layering (`1px solid rgba(250,250,255,0.08)`)
3. Featured card distinction via `1px solid #D7FF00` (primary accent border)

The featured/popular pricing card stands out via the neon-lime border — no shadow, no elevation lift.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
| --- | --- | --- |
| `none` | 0px | Full-bleed image tiles |
| `xs` | 2px | Micro accent elements |
| `sm` | 4px | Input field corners |
| `md` | 8px | Cards, pricing cells, standard components |
| `lg` | 12px | Featured cards, modal containers |
| `xl` | 16px | Large panels |
| `xxl` | 24px | Drawer headers |
| `pill` | 9999px | All buttons, badges, toggle switches |

All CTA buttons use `pill` (9999px) radius — no exceptions. Card components use `md` (8px) or `lg` (12px).

### Photography & Imagery

- Video thumbnails display at fixed aspect ratios (16:9 primary, occasional 9:16 for vertical)
- Dark overlay gradients fade thumbnails to solid black at bottom for text legibility
- No border treatment on video thumbnails — card background creates separation
- Hero sections display looping video backgrounds or high-contrast still frames

---

## Components

### Buttons

**Primary button** — neon lime on obsidian, pill radius
- Background: `#D7FF00` | Text: `#0B0B0B` (inverted dark text on bright bg)
- Radius: 9999px | Padding: 7px 16px | Font: 14px 600 Outfit

**Primary-active** — dimmed lime on hover
- Background: `#BFDF00` | Same radius and padding

**Secondary/Ghost button** — transparent, white text, light hairline border
- Background: transparent | Text: `#FAFAFF` | Border: `1px solid #FAFAFF14`
- Radius: 9999px | Padding: 7px 16px

### Cards

**Standard card** — transparent overlay on dark canvas
- Background: `#FAFAFF0A` | Border: `1px solid #FAFAFF14` | Radius: 8px | Padding: 24px

**Featured/Popular card** (pricing) — neon-lime border distinction
- Background: `#FAFAFF0A` | Border: `1px solid #D7FF00` | Radius: 12px | Padding: 38px 32px 32px
- "MOST POPULAR" label in uppercase at top

### Inputs & Forms

**Search / Text input**
- Background: transparent | Text: `rgba(250,250,255,0.68)` | Radius: 4px
- No visible border by default; border appears on focus: `1px solid #D7FF00`
- Placeholder uses muted opacity (36%)

### Navigation

- Collapsed height: 82px | Extended height: 134px
- Background: transparent (over hero) → `#171719` (on scroll)
- Nav links: 16px/400 weight in `rgba(250,250,255,0.92)` — no underline by default
- Active/hover state: text transitions to `#FAFAFF` full opacity
- "Upgrade now" primary CTA pill always present in top-right

### Badges & Tags

**Default badge** — ghost style with hairline border
- Border: `1px solid #FAFAFF14` | Radius: 9999px | Padding: 4px 10px

**Primary badge** — neon lime accent border
- Border: `1px solid #D7FF00` | Text: `#D7FF00` | Radius: 9999px

**Alert/Promo badge** — coral border for urgency
- Border: `1px solid #F05F79` | Text: `rgba(250,250,255,0.92)` | Radius: 9999px

---

## Do's and Don'ts

**Do:**
- Use `#D7FF00` exclusively for primary interactive actions — treat it as a precious accent
- Keep all primary headings at opacity 92% (`rgba(250,250,255,0.92)`) over the dark canvas
- Apply pill radius (9999px) to all buttons and badge chips — no square or low-radius CTAs
- Use transparency stacking for surface depth (4% → 8% white overlays) instead of grey backgrounds
- Maintain the `0.25px` letter-spacing on all heading sizes — subtle and brand-consistent
- Use the named gradient palette (blue, pink, cyan, purple) only for AI feature differentiation UI
- Keep nav link text at 400 weight — reserve 600 weight for CTAs and emphasis labels

**Don't:**
- Don't place `#D7FF00` text on a white or light background — it has near-zero contrast on light surfaces
- Don't use box shadows — depth is communicated purely through color stepping and borders
- Don't introduce a second typeface — Outfit handles the entire hierarchy solo
- Don't use uppercase text on buttons — sentence case only for CTA text
- Don't use border-radius smaller than 8px on card containers
- Don't apply gradients to interactive CTAs — gradients are decorative only
- Don't create light-mode surfaces — the entire design system is dark-canvas only
- Don't use more than 3 opacity levels for text in a single view (92%, 68%, 36% is the complete set)

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
| --- | --- | --- |
| Mobile | < 768px | Single-column layout, hamburger nav, stacked pricing cards |
| Tablet | 768–1024px | 2-column video grid, condensed nav |
| Desktop | 1024px+ | Full multi-column video grid, expanded nav with dropdowns |
| Wide | 1440px+ | Max container 1680px, increased section padding |

### Touch Targets

- Minimum button height: 36px (7px + 22px line-height + 7px padding)
- Minimum touch target size for icons: 44px × 44px
- Nav items on mobile: minimum 48px height

### Collapsing Strategy

- Navigation collapses to hamburger icon at mobile; slides in from left as full-screen drawer
- Pricing card grid shifts from 3-column (desktop) to 1-column (mobile), maintaining featured card's neon border
- Video grid reduces from 4–6 columns to 2 (tablet) to 1 (mobile) with maintained 16:9 aspect
- Hero text scales from 64px display-xl (about) to 48px display-md (homepage) — no sub-48px heading on mobile heroes

### Image Behavior

- Video thumbnails maintain 16:9 aspect ratio at all breakpoints
- Thumbnail dark gradient overlay maintained on all viewport sizes for text legibility
- Hero background video fills viewport at all sizes (object-fit: cover)

---

## Agent Prompt Guide

### Quick Color Reference

- Primary (CTA): `#D7FF00`
- Primary Active: `#BFDF00`
- Canvas (background): `#0B0B0B`
- Surface (nav scrolled): `#171719`
- Surface Raised (cards): `#313133`
- Footer bg: `#0E0E0F`
- Ink (headings): `rgba(250, 250, 255, 0.92)` = `#FAFAFFEB`
- Body (paragraphs): `rgba(250, 250, 255, 0.68)` = `#FAFAFFAD`
- Muted (captions): `rgba(250, 250, 255, 0.36)` = `#FAFAFF5C`
- On-dark (button text on primary): `#FAFAFF`
- Hairline (borders): `rgba(250, 250, 255, 0.08)` = `#FAFAFF14`
- Accent Indigo: `#7A84FF`
- Accent Coral/Error: `#F05F79`

### Example Component Prompts

**Hero Section:**
"Create a hero on `#0B0B0B` background. Headline 48px, weight 600, Outfit, 0.25px tracking, `rgba(250,250,255,0.92)`. Subheadline 16px, weight 400, 0.5px tracking, `rgba(250,250,255,0.68)`. Primary CTA: `#D7FF00` background, `#0B0B0B` text, 9999px radius, 7px 16px padding, 14px 600 Outfit."

**Pricing Card:**
"Create a pricing card on `rgba(250,250,255,0.04)` background over `#0B0B0B` canvas. Border: `1px solid rgba(250,250,255,0.08)`. Radius: 8px. Padding: 12px 16px. Plan name: 24px 500 `rgba(250,250,255,0.92)`. Price: 48px 700 `rgba(250,250,255,0.92)`. CTA button: `#D7FF00` fill, `#0B0B0B` text, 9999px pill."

**Featured Pricing Card:**
"Featured card same as base card but: radius 12px, padding 38px 32px 32px, border `1px solid #D7FF00`. Add 'MOST POPULAR' label in uppercase, `#D7FF00`, caption size at top."

**Video Thumbnail Card:**
"Create a video card on `#313133` background. Radius 8px. Image at 16:9 aspect. Dark gradient overlay (transparent → `rgba(14,14,15,0.7)`) from center to bottom. Title 16px 600 `#FAFAFF` over gradient."

**Button Set:**
"Primary button: `#D7FF00` background, `#0B0B0B` text, 9999px radius, 7px 16px padding, Outfit 14px 600, no border. Secondary button: transparent, `1px solid rgba(250,250,255,0.08)` border, same radius and padding, `#FAFAFF` text."

**Navigation Bar:**
"Nav bar on `#0B0B0B` (or `#171719` on scroll). Height 82px. Logo left. Nav links center: Outfit 16px 400, `rgba(250,250,255,0.92)`. Right: 'Upgrade now' primary pill button `#D7FF00` / `#0B0B0B`, 7px 16px."

### Iteration Guide

1. Start with `#0B0B0B` as page background — not pure `#000000`, not `#111111`
2. Load Outfit from Google Fonts: weights 400, 500, 600, 700
3. Use transparency for text — `rgba(250,250,255,0.92)` not `#FFFFFF` for headings
4. Reserve `#D7FF00` only for primary CTA actions — never as text color or decorative fill
5. Apply 9999px radius to all buttons — never square or low-radius buttons
6. Build surface depth with 4%/8% white overlay layers, not grey solids
7. Keep letter-spacing at 0.25px for headings, 0.5px for body — no negative tracking
8. Never introduce white backgrounds or light surfaces — this is a dark-only design system
