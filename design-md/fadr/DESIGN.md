---
version: alpha
name: Fadr
description: |
  Fadr is an AI-powered music technology platform offering vocal removal, stem splitting, remix creation, MIDI extraction, and AI instrument generation. The visual identity is a dark, immersive canvas rooted in near-black charcoal, brought alive by a signature hot-pink (#FF0096) accent and a rainbow of feature-chip hues that map to specific audio tools. The aesthetic is purposefully understated — near-flat surfaces, minimal shadows, a geometric sans display font (Unbounded) paired with functional Poppins — projecting a studio-grade creative tool that feels equally at home in a DJ booth and a bedroom producer setup.

colors:
  primary: "#F0F0F0"
  primary-active: "#D4D4D4"
  accent: "#FF0096"
  canvas: "#141414"
  surface: "#232323"
  surface-mid: "#323232"
  surface-overlay: "#00000066"
  ink: "#FFFFFF"
  body: "#CCCCCC"
  muted: "#6E6E6E"
  on-dark: "#FFFFFF"
  hairline: "#363636"
  feature-vocal: "#DB547F"
  feature-stem: "#E5554E"
  feature-midi: "#40826D"
  feature-key: "#11728C"
  feature-tempo: "#130FFF"
  feature-chord: "#5E4DB5"
  feature-violet: "#6A25A4"

typography:
  display-xl:
    fontFamily: "Unbounded, 'Unbounded Fallback', sans-serif"
    fontSize: 70px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: 0

  display-md:
    fontFamily: "Unbounded, 'Unbounded Fallback', sans-serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: 0

  title-lg:
    fontFamily: "Unbounded, 'Unbounded Fallback', sans-serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0

  title-md:
    fontFamily: "Unbounded, 'Unbounded Fallback', sans-serif"
    fontSize: 19.2px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0

  body-lg:
    fontFamily: "Poppins, 'Poppins Fallback', sans-serif"
    fontSize: 20.8px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

  body-md:
    fontFamily: "Poppins, 'Poppins Fallback', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

  body-sm:
    fontFamily: "Poppins, 'Poppins Fallback', sans-serif"
    fontSize: 12.8px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0

  button:
    fontFamily: "Poppins, 'Poppins Fallback', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0

  nav-link:
    fontFamily: "Poppins, 'Poppins Fallback', sans-serif"
    fontSize: 20.8px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0

  caption:
    fontFamily: "Poppins, 'Poppins Fallback', sans-serif"
    fontSize: 12.8px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

rounded:
  xs: 0px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#000000"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "16px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "#000000"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "16px"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "16px 32px"
    border: "none"

  button-secondary-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "16px 32px"

  card-base:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xs}"
    padding: "16px 32px"
    border: "none"

  card-pack:
    backgroundColor: "{colors.surface-overlay}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
    border: "none"

  text-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
    padding: "{spacing.md} {spacing.xl}"
    border: "none"

  text-input-focused:
    border: "1px solid {colors.accent}"

  feature-chip:
    backgroundColor: "{colors.feature-vocal}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "8px"
    border: "none"

  top-nav:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    border: "none"

  badge:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: "2px 6px"
    border: "none"
---

# Fadr Design System

## Overview

Fadr is a music technology platform where AI meets creative audio production. The visual identity lives in a world of near-black charcoal (#141414 canvas) punctuated by a hot-pink brand accent (#FF0096) and an expressive rainbow of feature-chip hues — each color coded to a specific audio tool. The interface communicates professional depth without intimidation: a geometric display font (Unbounded) gives headings presence and originality, while Poppins delivers legibility across UI controls, navigation, and body copy.

The design philosophy is deliberately reductive — flat surfaces, zero drop shadows, minimal border decoration — channeling the aesthetic of audio software interfaces (DAWs) where the music itself is the visual noise floor. Spacing is generous inside cards and sections, but motion and density live in the product interactions, not the page chrome. The signature hot-pink accent appears sparingly: pricing highlights, toggle switches, and subtle "NEW" labels, making it feel precious rather than loud.

Key visual characteristics:

- **Dark-canvas-first**: #141414 base, #232323 elevated surfaces, creating a studio-monitor-in-a-dark-room atmosphere
- **Unbounded display font**: geometric, wide-tracking, weight 400 only — confident but not aggressive
- **Hot-pink accent (#FF0096)**: used exclusively for emphasis moments — pricing units, toggles, new-feature labels — never as a background fill
- **Rainbow feature chips**: 7 distinct hues map to audio tool categories, functioning as a visual legend across the product
- **Flat geometry**: zero drop shadows, 0px border-radius on cards, 6px radius only on small chips and CTA buttons
- **Light CTA on dark**: primary CTA button is #F0F0F0 with black text — a deliberate inversion of the dark canvas that creates high contrast without color noise
- **Poppins for everything else**: consistent weight-400 for body and nav, weight-700 only for pricing denomination labels
- **Spacing anchored to 16px**: nav, card, and button padding are all multiples of 16px

## Colors

### Brand & Accent

| Token | Hex | Use |
|-------|-----|-----|
| `primary` | #F0F0F0 | CTA button background on dark canvas |
| `primary-active` | #D4D4D4 | CTA button hover/pressed state |
| `accent` | #FF0096 | Hot pink — pricing units, toggles, badges, "NEW" labels |

### Feature Chip Palette

| Token | Hex | Tool |
|-------|-----|------|
| `feature-vocal` | #DB547F | Vocal Remover |
| `feature-stem` | #E5554E | Stem Splitter |
| `feature-midi` | #40826D | MIDI Extractor |
| `feature-key` | #11728C | Key Finder |
| `feature-tempo` | #130FFF | Tempo Finder |
| `feature-chord` | #5E4DB5 | Chord Progression Finder |
| `feature-violet` | #6A25A4 | Advanced Stems |

### Surface

| Token | Hex | Use |
|-------|-----|-----|
| `canvas` | #141414 | Page background (applied to html element) |
| `surface` | #232323 | Cards, feature panels, pricing plan backgrounds |
| `surface-mid` | #323232 | Secondary panels, input backgrounds |
| `surface-overlay` | #00000066 | Translucent overlays on music pack previews |
| `hairline` | #363636 | Subtle dividers, secondary surfaces |

### Text

| Token | Hex | Use |
|-------|-----|-----|
| `ink` | #FFFFFF | Primary headings, nav links, labels on dark |
| `on-dark` | #FFFFFF | Text on dark surface components |
| `body` | #CCCCCC | Body paragraphs, descriptions, secondary text |
| `muted` | #6E6E6E | Tooltip text, placeholder text, tertiary labels |

### Semantic

No explicit semantic error/success colors detected in the design system; the product uses contextual coloring via feature chips for status differentiation.

## Typography

### Font Families

| Family | Stack | Source | Role |
|--------|-------|--------|------|
| Unbounded | `Unbounded, 'Unbounded Fallback', sans-serif` | Google Fonts | Display, headings |
| Poppins | `Poppins, 'Poppins Fallback', sans-serif` | Google Fonts | Body, UI, navigation |

### Hierarchy Table

| Role | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|--------|-------------|----------------|-----|
| display-xl | 70px | 400 | 1.1 | 0 | Homepage hero H1 |
| display-md | 64px | 400 | 1.1 | 0 | Product page hero H1 (Siren) |
| title-lg | 48px | 400 | 1.2 | 0 | Product page H1 (Stems, Remix) |
| title-md | 19.2px | 400 | 1.3 | 0 | Section headings H2, H3 |
| body-lg | 20.8px | 400 | 1.5 | 0 | Navigation links |
| body-md | 16px | 400 | 1.5 | 0 | Default body copy, UI text |
| body-sm | 12.8px | 400 | 1.4 | 0 | Feature chip labels, captions |
| button | 16px | 400 | 1.0 | 0 | CTA button labels |
| nav-link | 20.8px | 400 | 1.0 | 0 | Top navigation links |
| caption | 12.8px | 700 | 1.2 | 0 | Pricing unit suffixes (/mo, /yr) |

### Principles

- **Single weight per font**: Unbounded exclusively at weight 400 for headings; Poppins at 400 for most UI; 700 only for pricing denomination suffixes
- **No letter-spacing adjustments**: Both fonts are used at natural tracking — no negative tracking on display sizes, unusual for dark/cinematic design systems
- **Geometric without fuss**: Unbounded's wide geometry provides visual authority at large sizes without needing weight variations
- **Substitute**: If Unbounded is unavailable, use `DM Sans` or `Outfit` at weight 400. For Poppins, substitute `Inter` or `Nunito`.

## Layout

### Spacing System

Base unit: 8px. All named scale values are multiples of 4px.

| Token | Value | Use |
|-------|-------|-----|
| `xxs` | 4px | Micro gaps, icon margins |
| `xs` | 8px | Chip inner padding, tight gaps |
| `sm` | 12px | Compact element spacing |
| `md` | 16px | Card padding, button padding, standard gaps |
| `lg` | 24px | Section sub-gaps |
| `xl` | 32px | Card padding (wide), pack preview padding |
| `xxl` | 48px | Inter-section gaps |
| `section` | 96px | Hero top padding, major section breaks |

### Grid and Container

- Max page width: `1200px` (CSS var `--page-width`)
- Content column: `600px` (CSS var `--content-width`) — centered editorial areas
- Button max-width: `400px` (CSS var `--button-width`)
- Header height: `6rem` = 96px
- Grid: implicit single-column with max-width constraint; product cards stack in responsive grid

### Whitespace Philosophy

Fadr uses liberal section padding (144px top on homepage splash) to give audio visualizations and product interactions breathing room. Cards use asymmetric padding (16px vertical, 32px horizontal) that echoes DAW track-lane geometry. The inner content column (600px) creates a focused reading area even on wide screens.

## Elevation and Depth

### Levels

| Level | Treatment | Example use |
|-------|-----------|-------------|
| 0 — Base | #141414 background | Page canvas |
| 1 — Surface | #232323, no shadow | Feature cards, pricing panels |
| 2 — Mid | #323232, no shadow | Secondary panels, tooltips background |
| 3 — Overlay | rgba(0,0,0,0.4) semi-transparent | Music pack preview overlays |
| 4 — Tooltip | #6E6E6E bg, 8px radius | Feature info tooltips |

### Shadow Philosophy

Fadr avoids drop shadows entirely. Depth is communicated solely through background-color stepping — darker canvas, lighter surface, mid-tone overlays — an approach consistent with audio software interfaces where real-time waveform rendering demands a clean rendering context. The `shadow` class on tooltips applies a box-shadow that was observed as `none` in computed styles; any shadow effects are applied via CSS classes not captured in base styles.

### Decorative Effects

- **Feature chip rainbow**: color-coded chips create a visual depth effect on the stems tool header, mapping tool types to spectral hues
- **Translucent overlays**: music pack cards use `rgba(0,0,0,0.4)` backdrop to create a glass-panel effect over artwork
- **Hot-pink glow potential**: the #FF0096 accent is positioned for glow/neon CSS effects in motion contexts (toggle switch active state)

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `xs` | 0px | Cards, large panels, nav — completely flat |
| `sm` | 6px | CTA buttons, feature chips, small interactive elements |
| `md` | 8px | Music pack preview overlays, tooltip containers |
| `lg` | 12px | Toggle switch tracks |
| `xl` | 16px | Not used; available for large modal dialogs |
| `pill` | 9999px | Full-pill badges if needed |

CSS vars on site: `--radius: 0.5rem` (8px), `--radius-small: 0.4rem` (~6px).

### Photography and Imagery

- **Album art**: displayed in square crop, full-bleed within pack preview cards at 8px radius
- **Waveform visualizations**: full-width, horizontally oriented, sit on surface-level (#232323) backgrounds
- **Product screenshots**: shown in browser/device chrome mockups against the dark canvas

## Components

### Buttons

**Primary CTA (`button-primary`)**
Background: #F0F0F0, Text: #000000, Radius: 6px, Padding: 16px all sides, Font: Poppins 16px/400. The inverted light button is the primary action on the dark canvas — high contrast without color noise.

**Upload / Ghost (`button-secondary`)**
Background: transparent, Text: #FFFFFF, Radius: 0px, Padding: 16px 32px. Used for "Upload Songs" upload triggers — feels like a large touch zone, not a traditional button.

**Collab Button (small variant)**
Same as primary CTA at smaller context: #F0F0F0 bg, #000000 text, 6.4px radius, 16px padding, Poppins 16px.

### Cards

**Feature Card (`card-base`)**
Background: #232323, Padding: 16px 32px, Radius: 0px. Used for pricing plan feature lists — flat dark panels with no border or shadow.

**Pack Preview Card (`card-pack`)**
Background: rgba(0,0,0,0.4), Padding: 32px, Radius: 8px. Music pack selection panels — semi-transparent glass over album art.

### Feature Chips

Color-coded small chips identifying audio tools. Radius: 6.4px, Padding: 8px, Poppins 12.8px/400, white text on colored background. Each chip color maps to a specific tool type (vocal=pink, stem=red, MIDI=teal, key=ocean-blue, tempo=electric-blue, chord=purple, advanced=violet).

### Navigation

Top nav: transparent background, white text at 20.8px Poppins/400. Nav links: Plus, Siren, Stems, Remix + "Sign Up" CTA button. No border bottom, no blur effect — the dark canvas provides implicit separation.

### Inputs and Forms

Upload input: transparent background, Poppins 16px, no border visible. The upload interaction is handled by a drag-and-drop zone rather than a styled text input. URL/text inputs in upload areas follow the surface-mid (#323232) background pattern.

### Pricing Components

Pricing plans use a two-column layout: Free tier vs Plus tier. Price displayed in large white Unbounded text; denomination suffixes (/mo, /yr) in #FF0096 Poppins weight-700. Toggle switch uses #FF0096 background when active (monthly/yearly billing toggle). Plan feature lists sit inside #232323 surface cards.

### Badges

"NEW" label: #FF0096 text, transparent background, Poppins 12.8px/400, positioned inline with nav items.

## Do's and Don'ts

**Do:**
- Use #141414 as your page background — never pure #000000 (too harsh) or near-white
- Apply Unbounded at weight 400 only for all display sizes — don't use bold variants
- Use #FF0096 only for one emphasis element per screen — pricing highlights, toggle active, or "NEW" badge
- Map feature chip colors consistently to their tool type — the color-coding is part of the information architecture
- Use the inverted light button (#F0F0F0 + black text) as primary CTA on dark canvas — it reads as high-contrast without introducing color
- Keep card edges flat (0px radius) for large panels; reserve 6px radius for small interactive chips and CTA buttons
- Use 16px as your base padding unit — all card and button padding is a multiple of 16px

**Don't:**
- Don't add drop shadows to any element — Fadr is shadow-free; depth comes from color stepping alone
- Don't use Unbounded above weight 400 — it becomes overpowering at heavier weights
- Don't use the hot-pink (#FF0096) as a button background or large fill — it's an accent for small typographic emphasis only
- Don't mix feature chip colors arbitrarily — each hue has a semantic meaning tied to a specific tool
- Don't use white (#FFFFFF) on white surfaces — the canvas is always dark; light text is the default
- Don't apply letter-spacing adjustments to Unbounded — the font reads best at its natural tracking
- Don't stack more than two levels of surface elevation — the system uses base, surface, and mid only

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 768px | Single-column layout; hero font scales down from 70px to ~32px; nav collapses to hamburger |
| Tablet | 768–1024px | Two-column feature grids; pricing plans stack vertically |
| Desktop | 1024px+ | Full layout with 1200px max-width container; side-by-side pricing columns |

### Touch Targets

- Minimum interactive size: 44px × 44px for mobile touch
- CTA buttons: 16px padding all sides ensures adequate tap area
- Feature chips: 8px padding on small text — may need enlargement on mobile

### Collapsing Strategy

- Navigation: links collapse to mobile hamburger menu; "Sign Up" CTA remains visible
- Pricing grid: two-column plan comparison stacks to single column on mobile
- Feature chips: wrap naturally in flex container

### Image Behavior

- Album art: maintains square aspect ratio, crops center; scales within card container
- Waveform visualizations: scale to container width, maintain intrinsic height
- Hero content: center-aligned, constrains to `--content-width` (600px) on wide screens

## Agent Prompt Guide

### Quick Color Reference

- Canvas (background): #141414
- Surface (cards): #232323
- Surface mid: #323232
- Ink (primary text): #FFFFFF
- Body (paragraph text): #CCCCCC
- Muted (secondary text): #6E6E6E
- Hairline (dividers): #363636
- Accent (hot pink): #FF0096
- Primary CTA button: #F0F0F0
- Feature — vocal: #DB547F
- Feature — stem: #E5554E
- Feature — MIDI: #40826D
- Feature — key: #11728C
- Feature — tempo: #130FFF
- Feature — chord: #5E4DB5

### Example Component Prompts

**Hero Section:**
"Create a hero on #141414 background. Headline 70px Unbounded weight 400 white (#FFFFFF), no letter-spacing. Subheadline 16px Poppins weight 400 #CCCCCC. CTA button: #F0F0F0 background, #000000 text, 16px padding all sides, 6px radius, Poppins 16px/400, no border."

**Feature Chip Row:**
"Create a horizontal row of feature chips on #141414. Each chip: 6.4px radius, 8px padding, Poppins 12.8px/400 white text. Colors: vocal=#DB547F, stems=#E5554E, MIDI=#40826D, key=#11728C, tempo=#130FFF, chord=#5E4DB5."

**Pricing Card:**
"Create a pricing card on #232323 surface. No border, no shadow, 0px radius. Header: Poppins 16px/700 white. Price: Unbounded 48px/400 white with /mo suffix in #FF0096 Poppins 16px/700. Feature list items in #CCCCCC Poppins 16px/400. CTA button at bottom: #F0F0F0, black text, 6px radius, 16px padding."

**Music Pack Card:**
"Create a music pack card with rgba(0,0,0,0.4) semi-transparent background, 8px border-radius, 32px padding. Title: Poppins 16px/400 white. Track count in brackets: #CCCCCC. Description: Poppins 14px #CCCCCC. Full-bleed album art behind the translucent layer."

**Navigation Bar:**
"Create a transparent navigation bar (no background) on #141414 page. Nav links: Poppins 20.8px/400 white, no decoration. Logo on left. Links center or right: Plus, Siren, Stems, Remix. Sign Up button on far right: #F0F0F0 background, black text, 6px radius, 16px padding."

### Iteration Guide

1. Start with #141414 as your page background — applied to the html element
2. Load Unbounded and Poppins from Google Fonts — both use variable fallback families in CSS
3. Use weight 400 exclusively for Unbounded headings — the typeface reads best without artificial boldness
4. Apply #FF0096 sparingly — one instance per screen for maximum impact
5. Keep all card and large container borders at 0px radius; use 6px radius only for buttons and chips
6. Avoid all drop shadows — use background-color stepping (#141414 → #232323 → #323232) for depth
7. The primary CTA is always the inverted light button (#F0F0F0) — never a colored button
