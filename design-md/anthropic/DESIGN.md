---
version: alpha
name: Anthropic
description: Anthropic's design language is warm and editorial — ivory parchment backgrounds, a bespoke serif/sans/mono type trio, and an earth-toned accent palette rooted in muted claystones and sage greens. The system conveys intellectual depth and approachability simultaneously, using generous fluid typography, sweeping section whitespace, and a deliberately restrained dark-on-ivory primary palette. No shadows anywhere — depth is expressed entirely through background-color hierarchy and hairline borders.

colors:
  canvas: "#faf9f5"
  surface: "#f0eee6"
  surface-alt: "#e8e6dc"
  surface-dark: "#141413"
  ink: "#141413"
  ink-secondary: "#3d3d3a"
  muted: "#5e5d59"
  agate: "#b0aea5"
  cloud-light: "#d1cfc5"
  hairline: "#1414131A"
  hairline-strong: "#14141333"
  primary: "#141413"
  primary-active: "#3d3d3a"
  on-primary: "#faf9f5"
  accent: "#c6613f"
  accent-clay: "#d97757"
  accent-olive: "#788c5d"
  accent-oat: "#e3dacc"
  accent-cactus: "#bcd1ca"
  accent-sky: "#6a9bcc"
  accent-heather: "#cbcadb"
  accent-fig: "#c46686"
  accent-coral: "#ebcece"
  accent-manilla: "#ebdbbc"
  accent-kraft: "#d4a27f"
  white: "#ffffff"

typography:
  display-hero:
    fontFamily: '"Anthropic Serif", Georgia, serif'
    fontSize: 96px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -2px

  display-xl:
    fontFamily: '"Anthropic Sans", Arial, sans-serif'
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0px

  display-md:
    fontFamily: '"Anthropic Sans", Arial, sans-serif'
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0px

  title-lg:
    fontFamily: '"Anthropic Sans", Arial, sans-serif'
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0px

  body-lg:
    fontFamily: '"Anthropic Serif", Georgia, serif'
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px

  body-md:
    fontFamily: '"Anthropic Serif", Georgia, serif'
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px

  body-sm:
    fontFamily: '"Anthropic Serif", Georgia, serif'
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px

  detail:
    fontFamily: '"Anthropic Sans", Arial, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px

  caption:
    fontFamily: '"Anthropic Sans", Arial, sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px

  button:
    fontFamily: '"Anthropic Serif", Georgia, serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: -0.16px

  nav-link:
    fontFamily: '"Anthropic Sans", Arial, sans-serif'
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px

  mono:
    fontFamily: '"Anthropic Mono", "Courier New", monospace'
    fontSize: 18px
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
  section-sm: 64px
  section: 96px
  section-lg: 160px

rounded:
  xs: 4px
  sm: 8px
  lg: 16px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    border: "1px solid {colors.primary}"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    border: "1px solid {colors.primary-active}"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    border: "1px solid {colors.ink}"

  button-secondary-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    border: "1px solid {colors.primary}"

  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    border: "1px solid {colors.hairline}"

  button-tertiary-active:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    border: "1px solid {colors.ink}"

  card-base:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"

  card-surface:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg}"
    border: "none"

  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    border: "1px solid {colors.hairline}"

  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    border: "1px solid {colors.ink}"

  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: "none"

  top-nav-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-primary}"
    border: "none"

  badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.detail}"
    rounded: "{rounded.xs}"
    padding: "4px 8px"
    border: "none"
---

# Anthropic Design System

## Overview

Anthropic's visual identity is anchored in warmth and intellectual restraint. The canvas is "ivory" — a warm off-white (`#faf9f5`) that recalls parchment rather than clinical white — establishing a literary, considered aesthetic distinct from the cold grays of most tech companies. Type is set in a bespoke trio: Anthropic Serif for body and editorial hero text, Anthropic Sans for headings and UI detail, and Anthropic Mono for code, each conveying precision without sterility.

The palette is dominated by earthy neutrals — warm slates, soft ivories, cloud grays — punctuated by a curated collection of named accent swatches (clay, coral, olive, cactus, fig, heather, sky, manilla, kraft) used for full-bleed section backgrounds and editorial illustration. The system avoids shadows and complex elevation in favor of flat surfaces distinguished by subtle hairline borders and background-color shifts. Section spacing is extremely generous, using fluid `clamp()` values that scale from 64px to 160px — giving the brand an unhurried, magazine-like editorial rhythm.

Key visual characteristics:
- Warm ivory canvas (`#faf9f5`) — editorial parchment, never cold white or neutral gray
- Bespoke proprietary type trio: Anthropic Serif + Anthropic Sans + Anthropic Mono
- Fluid typography via `clamp()` — sizes scale smoothly between mobile and desktop
- Zero box-shadows — elevation expressed entirely through background-color hierarchy
- 11 named earth-tone accent swatches (clay, coral, olive, cactus, fig, heather, sky…) as section backgrounds
- Extremely generous vertical section spacing (96–160px) for a slow, considered reading experience
- Dark-on-ivory primary scheme; fully inverted (ivory-on-dark `#141413`) for footer and dark feature sections
- Hairline borders at 10% opacity (`#1414131A`) — structural but barely visible

Differentiator: Where competitors use cool grays and vivid primary colors, Anthropic leans into warm naturals and serif typography to signal thoughtfulness and longevity — a design language that communicates we are building for centuries, not quarters.

## Colors

### Brand & Accent
- **primary** `#141413` — dark warm slate; CTA button background on light backgrounds
- **accent** `#c6613f` — warm terracotta; link highlights and inline accents
- **accent-clay** `#d97757` — warm burnt orange; full-bleed editorial sections
- **accent-olive** `#788c5d` — muted sage green; editorial accent sections
- **accent-oat** `#e3dacc` — warm cream; subtle accent background
- **accent-cactus** `#bcd1ca` — cool sage teal; calm editorial sections
- **accent-sky** `#6a9bcc` — dusty blue; editorial feature backgrounds
- **accent-heather** `#cbcadb` — muted lavender; soft editorial sections
- **accent-fig** `#c46686` — dusty rose/mauve; editorial accents
- **accent-coral** `#ebcece` — pale blush; light accent backgrounds
- **accent-manilla** `#ebdbbc` — warm manila; editorial warmth
- **accent-kraft** `#d4a27f` — warm kraft brown; editorial warmth

### Surface
- **canvas** `#faf9f5` — primary page background; warm ivory parchment
- **surface** `#f0eee6` — secondary backgrounds; cards, alt-sections
- **surface-alt** `#e8e6dc` — tertiary surface; hover states, deeper alternates
- **surface-dark** `#141413` — dark sections; footer, dark feature blocks, hero dark variants
- **white** `#ffffff` — elevated cards on ivory background; modal surfaces

### Text
- **ink** `#141413` — primary text; headings and body copy on light backgrounds
- **ink-secondary** `#3d3d3a` — button hover background; secondary dark surfaces
- **muted** `#5e5d59` — secondary text; captions, metadata, subdued labels
- **agate** `#b0aea5` — tertiary text; timestamps, placeholders, deemphasized content
- **cloud-light** `#d1cfc5` — quaternary; very faint labels, disabled states

### Semantic
Anthropic's marketing site avoids prominent semantic colors. Error/success states in product interfaces use standard system conventions. No brand-defined semantic palette exists at the marketing layer.

## Typography

### Font Family
Anthropic uses a proprietary type trio — these fonts are not publicly distributed. Use these fallback stacks for prototyping:

| Family | Stack | Character |
|--------|-------|-----------|
| Anthropic Serif | `"Anthropic Serif", Georgia, serif` | Editorial warmth; body, hero display |
| Anthropic Sans | `"Anthropic Sans", Arial, sans-serif` | Precision; headings, detail, UI labels |
| Anthropic Mono | `"Anthropic Mono", "Courier New", monospace` | Code, terminal, technical content |

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|------|--------|------------|----------------|-----|
| display-hero | Anthropic Serif | 96px | 400 | 1.05 | -2px | Large editorial serif heroes |
| display-xl | Anthropic Sans | 64px | 700 | 1.1 | 0px | Primary page headlines |
| display-md | Anthropic Sans | 32px | 600 | 1.2 | 0px | Section headings |
| title-lg | Anthropic Sans | 24px | 600 | 1.3 | 0px | Card and component titles |
| body-lg | Anthropic Serif | 24px | 400 | 1.4 | 0px | Hero lead text, intro paragraphs |
| body-md | Anthropic Serif | 20px | 400 | 1.4 | 0px | Default body text |
| body-sm | Anthropic Serif | 18px | 400 | 1.5 | 0px | Secondary body, article text |
| detail | Anthropic Sans | 16px | 400 | 1.4 | 0px | Labels, UI detail text |
| caption | Anthropic Sans | 12px | 400 | 1.4 | 0px | Footer, metadata, fine print |
| button | Anthropic Serif | 16px | 400 | 1.25 | -0.16px | Button labels |
| nav-link | Anthropic Sans | 15px | 400 | 1.4 | 0px | Navigation links |
| mono | Anthropic Mono | 18px | 400 | 1.5 | 0px | Code blocks |

### Principles
- Body copy uses Anthropic Serif — editorial warmth signals deliberation and permanence
- Headings alternate between Serif (editorial/hero sections) and Sans (product sections, lists)
- All font sizes use fluid `clamp()` scaling — no abrupt breakpoint jumps
- Weight palette: 400 (regular), 500 (medium), 600 (semibold), 700 (bold) only
- Letter spacing is 0 or very slightly negative — positive tracking is never used
- Display-hero uses the serif for emotional impact; display-xl uses sans for clarity

## Layout

### Spacing System
Base unit: 4px. Practical component grid: 8px.

| Token | Value | Use |
|-------|-------|-----|
| xxs | 4px | Icon padding, tightest gaps |
| xs | 8px | Button vertical padding, tight item gaps |
| sm | 12px | Dense list spacing, form field inner gaps |
| md | 16px | Standard element separation |
| lg | 24px | Card padding, form field vertical gaps |
| xl | 32px | Component group spacing |
| xxl | 48px | Section sub-element separation |
| section-sm | 64px | Small section padding (mobile baseline) |
| section | 96px | Standard section vertical padding |
| section-lg | 160px | Hero and major section vertical padding |

### Grid & Container
- Max content width: 89.5rem (~1432px) (`--site--width`)
- Column count: 12 columns
- Site margin: `clamp(2rem → 5rem)` — fluid responsive side margins
- Column gutter: `clamp(1.75rem → 2rem)` between columns
- Small container: 8-column centered (for editorial long-form text)
- Full-bleed sections use `container--full: calc(100% - 4rem)`

### Whitespace Philosophy
Section spacing is exceptionally generous — clamp values scale from 64px mobile to 160px desktop for major sections. Individual components are spaced tightly within sections, but sections themselves breathe heavily. This creates an unhurried magazine-like reading cadence where the reader can absorb each idea before encountering the next.

## Elevation & Depth

| Level | Treatment | Example Use |
|-------|-----------|-------------|
| 0 | Flat canvas `#faf9f5` | Default page background |
| 1 | Surface `#f0eee6` + hairline border | Section alternates, cards |
| 2 | White `#ffffff` on ivory | Floating cards, elevated panels |
| 3 | Dark `#141413` | Footer, dark hero sections, feature dark blocks |
| Accent | Named swatch backgrounds | Editorial content sections (clay, cactus, heather…) |

### Shadow Philosophy
Anthropic uses **no box-shadows** anywhere on the public-facing site. Depth and hierarchy are communicated purely through background-color elevation (ivory → ivory-medium → white → dark) and hairline borders at 10% opacity. Nothing "pops" — every element is considered and calm.

Decorative depth is expressed through:
- Section background-color transitions (ivory → named swatch → dark → ivory)
- Hairline borders at 10% opacity (`#1414131A`)
- Typography scale contrast — very large display text over restrained body creates visual depth without shadow

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| xs | 4px | Subtle rounding; small tags, inputs at mobile |
| sm | 8px | Buttons, inputs, cards — the primary component radius |
| lg | 16px | Large containers, featured panels |
| pill | 9999px | Fully rounded badge pills |

Most UI components use `sm` (8px). The brand avoids very large radii — nothing exceeds 16px in the component system. Cards and buttons share the same 8px radius, creating visual unity across interaction surfaces.

### Photography & Imagery
- Feature images use warm, desaturated tones harmonizing with the ivory palette
- Team and portrait photography appears in square or slightly rounded crops
- Illustrated diagrams and data visualizations use the brand accent swatches for colorization
- Images typically bleed to container edges; no circular crops in editorial contexts
- No image box-shadows or decorative borders

## Components

### Buttons
Three button tiers, all using 8px radius and Anthropic Serif at 16px/400 weight:

**Primary (dark on light):**
- Background: `#141413`, Text: `#faf9f5`, Border: `1px solid #141413`
- Padding: `8px 16px` (standard) or `8px 12px 8px 24px` (with trailing icon)
- Hover: background shifts to `#3d3d3a`

**Secondary (outline):**
- Background: transparent, Text: `#141413`, Border: `1px solid #141413`
- Hover: fills to `#141413` with `#faf9f5` text

**Tertiary (hairline):**
- Background: transparent, Text: `#141413`, Border: `1px solid #1414131A`
- Hover: border darkens to full ink

**Inverted (on dark sections):**
- Primary inverted: `#faf9f5` background, `#141413` text, `1px solid #faf9f5` border
- Secondary inverted: transparent background, `1px solid #faf9f5` border, `#faf9f5` text

### Cards
- Default: white (`#ffffff`) background, `1px solid #1414131A` border, 8px radius, 24px padding, no shadow
- Surface variant: `#f0eee6` background, no border, 8px radius, 24px padding
- Editorial sections: border-free, distinguished only by full-bleed background color (a named swatch)

### Inputs & Forms
- Background: canvas (`#faf9f5`)
- Border: `1px solid #1414131A` (hairline, 10% opacity)
- Radius: 8px, Padding: `8px 16px`
- Focus state: border darkens to `1px solid #141413`
- Font: Anthropic Sans, 16px, 400 weight

### Navigation
- Height: 68px (`--nav--height: 4.25rem`)
- Background: transparent initially, transitions to canvas on scroll
- Nav links: Anthropic Sans, 15px, 400 weight, ink color
- Logo: left-aligned; CTA ("Try Claude") right-aligned as primary button
- Mobile: hamburger icon with full-screen drawer menu, 400ms open/close transition

### Badges & Tags
- Category labels ("Research", "Announcements") render as plain Anthropic Sans detail text above card titles — no filled pill, no border
- No filled badge components on primary marketing surfaces
- If a pill badge is needed: `#f0eee6` background, 4px radius, 4px 8px padding, `#141413` text

## Do's and Don'ts

**Do:**
- Use the ivory canvas (`#faf9f5`) — never white (`#ffffff`) — as the default page background
- Apply generous section spacing (96px+) to let content breathe at an editorial rhythm
- Mix Anthropic Serif for editorial/hero contexts and Anthropic Sans for product/UI contexts
- Use named earth-tone swatches (clay, coral, olive, cactus) as full-bleed section backgrounds for visual variety
- Keep all interactive components at 8px radius — neither square nor pill
- Express dark theme by flipping to `#141413` surface with `#faf9f5` text — never use gray mid-tones
- Use hairline borders at 10% opacity (`#1414131A`) for structural separation

**Don't:**
- Don't use box-shadows anywhere — Anthropic design is entirely flat
- Don't use cold neutral grays — always use warm slates (`#141413`, `#3d3d3a`, `#5e5d59`)
- Don't use white (`#ffffff`) as the page background — always warm ivory
- Don't apply positive letter-spacing — tracking is always 0 or slightly negative
- Don't use font weights outside 400/500/600/700
- Don't use border-radius greater than 16px on any component
- Don't use bright semantic colors (vivid red, green, yellow) on primary surfaces
- Don't add decorative flourishes — the brand restraint is intentional and meaningful

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|-----------|-------|-------------|
| Mobile | < 768px | Single column, section padding 64px, collapsed nav, reduced font sizes |
| Tablet | 768–1024px | 2-column layouts, section padding 96px, medium typography |
| Desktop | > 1024px | Full 12-column grid, section padding 96–160px, full expanded nav |

All font sizes use `clamp()` — typography scales fluidly with no hard breakpoint jumps.

### Touch Targets
- Minimum touch target: 44×44px for all interactive elements
- Nav hamburger button: 44×44px tap area
- Form inputs: minimum 44px height on mobile

### Collapsing Strategy
- Navigation collapses to hamburger icon at mobile; full-screen drawer opens at 400ms
- Multi-column card grids reduce to single column on mobile
- Display typography (display-xl, display-hero) scales down via `clamp()` — no wrapping or truncation strategies needed
- Side margins compress from 80px (desktop) to 32px (mobile) via fluid `clamp()`

### Image Behavior
- Images fill their container width at all breakpoints
- Aspect ratios preserved via `aspect-ratio` CSS, not fixed heights
- Full-bleed section images extend to viewport edges with no side padding

## Agent Prompt Guide

### Quick Color Reference
- Primary / Ink: `#141413`
- Primary active (hover): `#3d3d3a`
- Canvas (page background): `#faf9f5`
- Surface (card / alt-section): `#f0eee6`
- Surface-alt (deeper alt): `#e8e6dc`
- Footer / dark sections: `#141413`
- On-primary (text on dark): `#faf9f5`
- Muted text: `#5e5d59`
- Agate (tertiary text): `#b0aea5`
- Hairline border: `#1414131A` (10% opacity slate)
- Accent terracotta: `#c6613f`
- Accent-clay: `#d97757`
- Accent-oat: `#e3dacc`
- Accent-cactus: `#bcd1ca`
- Accent-sky: `#6a9bcc`
- Accent-heather: `#cbcadb`
- Accent-coral: `#ebcece`

### Example Component Prompts

**Hero Section (Sans headline):**
"Create a hero on ivory (#faf9f5) background. Headline: 'Anthropic Sans', 64px, 700 weight, #141413, 1.1 line-height, 0px letter-spacing. Lead text: 'Anthropic Serif', 24px, 400 weight, #141413, 1.4 line-height. Primary CTA: #141413 background, #faf9f5 text, 8px radius, 8px 16px padding, 1px solid #141413 border, no shadow."

**Editorial Hero Section (Serif display):**
"Create a dark section (#141413 background). Large serif headline: 'Anthropic Serif', 96px, 400 weight, #faf9f5, 1.05 line-height, -2px letter-spacing. Body text: 'Anthropic Serif', 20px, 400 weight, #faf9f5, 1.4 line-height. Secondary CTA: transparent background, 1px solid #faf9f5 border, #faf9f5 text, 8px radius, 8px 16px padding."

**Card:**
"Create a card on white (#ffffff) background, 8px radius, no shadow, 1px solid #1414131A border, 24px padding. Category label: 'Anthropic Sans', 16px, 400 weight, #5e5d59. Title: 'Anthropic Sans', 24px, 600 weight, #141413. Body: 'Anthropic Serif', 18px, 400 weight, #141413, 1.5 line-height."

**Button Set:**
"Primary button: #141413 background, 8px radius, 8px 16px padding, 'Anthropic Serif' 16px 400 weight, #faf9f5 text, 1px solid #141413 border, no shadow. Secondary button: transparent background, 1px solid #141413 border, same radius/padding, #141413 text. Hover on primary: background to #3d3d3a."

**Accent Section:**
"Full-width clay section (#d97757 background, 96px vertical padding). Headline: 'Anthropic Sans', 32px, 600 weight, #141413. Body: 'Anthropic Serif', 20px, 400 weight, #141413. Primary button on dark accent: #141413 background (sufficient contrast), #faf9f5 text."

### Iteration Guide
1. Start with canvas (`#faf9f5`) as page background — never white or gray
2. Use Georgia as body font fallback for Anthropic Serif; Arial for Anthropic Sans
3. Implement `clamp()` for all font sizes to ensure fluid responsive scaling
4. Never add box-shadows — use background-color elevation (`canvas → surface → white → dark`) instead
5. Keep section vertical padding at 96px minimum on desktop
6. For dark sections, invert: dark bg (`#141413`) + ivory text (`#faf9f5`)
7. Add named earth-tone swatches as full-bleed section backgrounds for editorial variety
8. Use hairline borders at exactly 10% opacity (`#1414131A`) — not gray, not solid
