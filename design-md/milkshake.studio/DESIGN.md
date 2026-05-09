---
version: alpha
name: Milkshake Studio
description: |
  Milkshake Studio's 2020 Year in Review is a bold, editorial portfolio site that wraps a
  year of work in loud colors and oversized typography. The design pairs a warm cream canvas
  with near-black dark sections, mixing a serif display face (Editorial New) with a grotesque
  UI font (Neue Haas Grotesk Display) and a condensed all-caps display font (House Gothic)
  for fluid, viewport-filling project titles. Accent colors — cobalt blue, deep violet, amber
  orange, and mint green — are used as per-project color fields that change the entire card
  background, making each client showcase its own distinct visual moment.

colors:
  primary: "#BAF2C3"
  primary-active: "#8FDBA0"
  ink: "#000000"
  body: "#F5F1EE"
  muted: "#F9F6F2"
  canvas: "#E4E0DD"
  surface: "#232326"
  surface-light: "#F9F6F2"
  hairline: "#232326"
  on-dark: "#F9F6F2"
  on-canvas: "#232326"
  accent-cobalt: "#0060DD"
  accent-violet: "#20013C"
  accent-amber: "#F7901E"
  accent-mint: "#BAF2C3"
  accent-navy: "#142C74"
  accent-blush: "#FFC0CB4D"
  semantic-error: "#E53935"
  semantic-success: "#BAF2C3"
  semantic-warning: "#F7901E"

typography:
  display-xl:
    fontFamily: '"House Gothic", sans-serif'
    fontSize: 200px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
  display-lg:
    fontFamily: '"Editorial New", serif'
    fontSize: 104px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -3px
  display-md:
    fontFamily: '"Editorial New", serif'
    fontSize: 54px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -1.62px
  display-sm:
    fontFamily: '"Editorial New", serif'
    fontSize: 44px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -1.32px
  stat-number:
    fontFamily: '"Neue World", serif'
    fontSize: 192px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0
  body-lg:
    fontFamily: "neue-haas-grotesk-display, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0
  body-md:
    fontFamily: "neue-haas-grotesk-display, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: 0
  body-sm:
    fontFamily: "neue-haas-grotesk-display, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: "neue-haas-grotesk-display, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: 0
  nav-link:
    fontFamily: "neue-haas-grotesk-display, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: 0
  caption:
    fontFamily: "neue-haas-grotesk-display, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

spacing:
  xxs: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  xxl: 80px
  section: 104px

rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 8px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
    border: "none"
    textTransform: "uppercase"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
    textTransform: "uppercase"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
    border: "1px solid {colors.on-dark}"
    textTransform: "uppercase"

  button-secondary-active:
    backgroundColor: "{colors.on-dark}"
    textColor: "{colors.surface}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
    textTransform: "uppercase"

  link-cta:
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    textTransform: "uppercase"
    border: "none"
    backgroundColor: "transparent"

  card-base:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxl}"
    border: "none"

  card-project:
    backgroundColor: "{colors.accent-cobalt}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxl}"
    border: "none"

  stat-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.stat-number}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxl}"

  top-nav:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    padding: "32px 0"
    border: "none"

  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.hairline}"

  text-input-focused:
    border: "1px solid {colors.accent-cobalt}"
---

# Milkshake Studio Design System

## Overview

Milkshake Studio's 2020 portfolio site is an experiential web document — part editorial magazine,
part design portfolio, built as a scrollable year-in-review. The aesthetic philosophy is unapologetically
loud: oversized serif display headings fill entire viewport widths, statistics become typographic
sculptures at 192px, and each client project commandeers a new color palette (cobalt blue, deep
violet, warm amber) as its context canvas. No borders, no shadows, no rounding — just pure
typography, space, and color contrast.

The design deliberately contrasts a warm cream background (body sections) with near-black dark
sections, creating a rhythmic light/dark cadence as the user scrolls. The combination of Editorial
New (a contemporary Italian-influenced serif), Neue Haas Grotesk Display (the Swiss grotesque
workhorse), House Gothic (a compressed display sans for giant project titles), and Neue World
(a variable display font for statistics) gives the site a multi-personality typographic system
that feels designed rather than templated.

**Key visual characteristics:**
- Warm cream canvas (`#E4E0DD`) alternates with near-black dark surfaces (`#232326`) for rhythm
- Four distinct typefaces each assigned a specific role: zero font mixing within a component
- Universal uppercase text-transform across all display and UI elements
- Project cards use per-client accent color fields (cobalt, violet, amber, navy) as full-bleed backgrounds
- Mint green (`#BAF2C3`) is the only consistent accent color — used for stat labels and highlights
- Zero border-radius on all elements — strictly flat geometry throughout
- No box-shadows or elevation layers — depth is created through color and scale alone
- Fluid House Gothic titles scaled to viewport width, creating different sizes per project
- Blush pink translucent overlay (`rgba(255,192,203,0.3)`) used decoratively in hero sections

**Positioning:** Where most agency portfolios play it safe with neutral grays and tasteful typographic
scales, Milkshake Studio treats the case study itself as the creative brief. The site is as much a
showcase of design ambition as the work within it.

---

## Colors

### Brand & Accent

| Token | Hex | Use |
|---|---|---|
| `primary` | `#BAF2C3` | Mint green stat labels, highlights, primary accent |
| `accent-cobalt` | `#0060DD` | Time Equities project card background |
| `accent-violet` | `#20013C` | Voy Media project card background |
| `accent-amber` | `#F7901E` | Oji Life Lab project card background |
| `accent-navy` | `#142C74` | Crunchtime/Mindbloom project card text |
| `accent-blush` | `#FFC0CB4D` | Hero translucent pink decorative overlay |
| `accent-mint` | `#BAF2C3` | Statistics accent (alias for primary) |

### Surface

| Token | Hex | Use |
|---|---|---|
| `canvas` | `#E4E0DD` | Warm cream page background (body sections) |
| `surface` | `#232326` | Near-black dark section backgrounds |
| `surface-light` | `#F9F6F2` | Lightest off-white, elevated light surfaces |

### Text

| Token | Hex | Use |
|---|---|---|
| `ink` | `#000000` | Pure black — used in body text on light backgrounds |
| `on-dark` | `#F9F6F2` | Warm off-white text on dark surfaces |
| `body` | `#F5F1EE` | Slightly warmer off-white for paragraph text on dark |
| `muted` | `#F9F6F2` | Lightest text variant, secondary information |
| `on-canvas` | `#232326` | Near-black text on cream canvas |

### Semantic

| Token | Hex | Use |
|---|---|---|
| `semantic-success` | `#BAF2C3` | Success — same as mint primary accent |
| `semantic-warning` | `#F7901E` | Warning — same as amber accent |
| `semantic-error` | `#E53935` | Error state |

---

## Typography

### Font Families

| Font | Role | Stack | Source |
|---|---|---|---|
| Editorial New | Display serif | `"Editorial New", serif` | Pangram Pangram Foundry (commercial) |
| House Gothic | Project titles | `"House Gothic", sans-serif` | House Industries (commercial) |
| Neue Haas Grotesk Display | UI / Body | `neue-haas-grotesk-display, sans-serif` | Adobe Fonts (Typekit) |
| Neue World | Statistics display | `"Neue World", serif` | Pangram Pangram Foundry (commercial) |

### Typography Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Text Transform | Font | Use |
|---|---|---|---|---|---|---|---|
| `display-xl` | 200px (fluid) | 400 | 1.0 | 0 | uppercase | House Gothic | Project title cards, fills viewport width |
| `display-lg` | 104px | 400 | 1.0 | -3px | uppercase | Editorial New | Section hero headings (h2) |
| `display-md` | 54px | 400 | 1.15 | -1.62px | uppercase | Editorial New | h1 title, h4 stat labels |
| `display-sm` | 44px | 400 | 1.0 | -1.32px | uppercase | Editorial New | h3 service type labels |
| `stat-number` | 192px | 700 | 1.0 | 0 | — | Neue World | Animated stat numbers |
| `body-lg` | 18px | 400 | 1.65 | 0 | none | Neue Haas Grotesk | Lead paragraphs |
| `body-md` | 16px | 400 | 1.625 | 0 | none | Neue Haas Grotesk | Default body copy |
| `body-sm` | 14px | 400 | 1.5 | 0 | none | Neue Haas Grotesk | Captions, meta labels |
| `button` | 16px | 500 | 1.15 | 0 | uppercase | Neue Haas Grotesk | CTA links and buttons |
| `nav-link` | 16px | 500 | 1.15 | 0 | uppercase | Neue Haas Grotesk | Navigation and case study links |
| `caption` | 14px | 500 | 1.4 | 0 | uppercase | Neue Haas Grotesk | Labels, metadata |

### Typography Principles

- **Uppercase everywhere**: All display text, UI labels, navigation, and headings use `text-transform: uppercase` — this is a strict brand rule
- **Negative tracking on display**: Editorial New headings use negative letter-spacing (-1.32px to -3.12px) proportional to size
- **House Gothic scales fluid**: Project card titles use fluid `font-size` that scales to fill viewport width — do not set a fixed pixel size
- **Four-font system**: Each typeface has exactly one role; mixing them within a single component breaks the system
- **Weight restraint**: Only two weights are used — 400 (regular) for display, 700 (bold) for stat numbers, 500 (medium) for UI
- **Fallbacks**: All commercial fonts need licensed loading; for prototyping, use Georgia as Editorial New substitute and Arial Narrow Bold as House Gothic substitute

---

## Layout

### Spacing System

Base unit: 8px

| Token | Value | Use |
|---|---|---|
| `xxs` | 4px | Icon gaps, tight internal spacing |
| `xs` | 8px | Small gaps between inline elements |
| `sm` | 16px | Button padding, tight component spacing |
| `md` | 24px | Standard component padding |
| `lg` | 32px | Card internal padding, section elements |
| `xl` | 48px | Between components, mid-section gaps |
| `xxl` | 80px | Major section spacing |
| `section` | 104px | Footer padding, hero section spacing |

### Grid & Container

- **Full-bleed sections**: Most sections use 100vw full-bleed backgrounds
- **Content container**: ~1200px max-width centered, with `104px` lateral padding on desktop
- **Project cards**: Stacked full-width vertically with no gutters between
- **Stats grid**: 4–8 column grid with equal-weight cells for stat blocks
- **No sidebar layouts**: Single-column document flow throughout

### Whitespace Philosophy

Whitespace is used dramatically — hero sections have `128px` top padding before the first headline,
stat sections breathe at `100px` vertical padding, and footer uses `100px` bottom padding. The
generosity of spacing is as much a design statement as the typography; cramped layouts would
contradict the editorial confidence of the brand.

---

## Elevation & Depth

### Levels

| Level | Treatment | Example use |
|---|---|---|
| 0 — Flat | No shadow, no border, flat color | All elements — the universal treatment |
| 1 — Color contrast | Section background color change | Light/dark alternation for rhythm |
| 2 — Full-bleed color | Entire card becomes accent color | Project case study cards |
| 3 — Overlay | `rgba(255,192,203,0.3)` translucent layer | Hero blush pink decorative background |

### Shadow Philosophy

Milkshake Studio 2020 uses **zero box-shadows** across the entire site. Depth is achieved exclusively
through:
- Color contrast between warm cream and near-black sections
- Typography scale — enormous display type at 104–200px creates visual weight without elevation
- Full-bleed color blocks — each project card's accent color creates a hard edge depth perception

This is a deliberate modernist choice: the design borrows from Swiss editorial print tradition where
surfaces are flat and hierarchy is expressed through typography and color alone.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `none` | 0px | All elements — universal zero radius |
| `sm` | 2px | Micro-elements if any rounding needed |
| `md` | 4px | Subtle rounding on inline badges |
| `lg` | 8px | Only for external content frames |

All buttons, cards, inputs, project cards, and stat blocks use `border-radius: 0`. This is a
defining characteristic of the brand's flat, print-influenced aesthetic. Round corners would
fundamentally contradict the design voice.

### Photography & Imagery

- **Project screenshots**: Full-bleed within their color card, no border or frame treatment
- **Logo**: SVG, always white on dark or black on light backgrounds
- **Section imagery**: Decorative SVG illustrations used as full-bleed section separators
- **Aspect ratios**: Project images typically 16:9 or 4:3, displayed full-width within card

---

## Components

### Link CTAs (Primary Actions)

There are no traditional button elements on this site. CTA actions are text links with uppercase
styling:

**"CASE STUDY" + "SEE IT LIVE" links:**
- Font: `neue-haas-grotesk-display, sans-serif`, 16px, weight 500
- Text transform: uppercase
- Color: `#F9F6F2` (on dark surfaces) or `#142C74` (on light Crunchtime navy card)
- No background, no border, no border-radius
- Arrow icon appended via pseudo-element

### Project Cards

Each project occupies a full-width card section with a per-client accent color:

| Project | Card Background | Text Color |
|---|---|---|
| Time Equities | `#0060DD` cobalt blue | `#F9F6F2` warm white |
| Voy Media | `#20013C` deep violet | `#F9F6F2` warm white |
| Crunchtime | `#F9F6F2` light surface | `#142C74` navy |
| Mindbloom | `#F9F6F2` light surface | `#142C74` navy |
| Oji Life Lab | `#F7901E` amber orange | `#F9F6F2` warm white |

Each card title uses House Gothic font at fluid viewport-scale size, uppercase, weight 400.

### Stat Blocks (By The Numbers)

- Background: dark surface `#232326`
- Label (h4): Editorial New, 54px, weight 400, uppercase, color `#BAF2C3` mint
- Number: Neue World, 192px, weight 700, color `#BAF2C3` mint
- Layout: CSS grid, 4 columns on desktop, 2 on mobile

### Navigation

- Background: transparent (overlays hero section)
- Logo: linked image
- No nav links in top bar — minimal header
- Footer: dark surface `#232326`, warm white text, social icon links

### Scroll Indicator

- "Scroll to Explore" / "Tap to Explore" text in Neue Haas Grotesk, weight 500, uppercase
- Animated arrow/indicator below hero text
- Disappears after first scroll

---

## Do's and Don'ts

**Do:**
- Apply `text-transform: uppercase` to ALL display headings, navigation, and CTA labels
- Use negative letter-spacing on Editorial New headings — at least -1px per 33px of font size
- Use full-bleed color blocks for project showcases — each client gets their own color field
- Alternate cream and dark sections for scrolling rhythm — never two consecutive same-colored sections
- Use Editorial New at weight 400 only — it is a display face, not a workhorse; never bold it
- Give statistics their own architectural moment — 192px Neue World numbers as design elements
- Apply generous whitespace: minimum 80px between major sections, 104px for hero and footer

**Don't:**
- Don't add border-radius to any element — zero rounding is a strict brand rule
- Don't use box-shadows — elevation is achieved through color contrast, not drop shadows
- Don't mix fonts within a single component — each face has a single assigned role
- Don't use more than one accent color in any single section (pick one per project)
- Don't set House Gothic to a fixed pixel size — it must scale fluid to viewport width
- Don't use Neue World for body text or UI labels — it is a statistics-only display font
- Don't use the mint green (`#BAF2C3`) as a background for dark text — it is a foreground accent only

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Single-column layout, hide `.hide-on-phone` sections, stat grid 2-col |
| Tablet | 768px–1024px | Reduce display font sizes proportionally |
| Desktop | 1024px+ | Full layout, fluid House Gothic titles, 4-col stat grid |

### Touch Targets

- Minimum touch target: 44px × 44px for all interactive links
- "CASE STUDY" and "SEE IT LIVE" links padded to meet minimum

### Collapsing Strategy

- `.hide-on-phone` class is used to hide decorative dark spacer sections on mobile
- Stat grid collapses from 4 columns to 2 columns
- Project card layout remains single-column at all breakpoints (stacked)
- Scroll indicator switches from "Scroll to Explore" to "Tap to Explore" on touch

### Image Behavior

- Project card images are hidden on mobile and shown as full-bleed on desktop
- Logo image scales with viewport, max-width constrained
- Section separator SVGs scale fluid with viewport width

---

## Agent Prompt Guide

### Quick Color Reference

- Canvas (page background): `#E4E0DD` warm cream
- Surface (dark sections): `#232326` near-black
- Ink (text on light): `#000000` pure black
- On-dark (text on dark): `#F9F6F2` warm off-white
- Primary accent: `#BAF2C3` mint green
- Accent cobalt (project card): `#0060DD`
- Accent violet (project card): `#20013C`
- Accent amber (project card): `#F7901E`
- Accent navy (project text): `#142C74`

### Example Component Prompts

**Hero Section:**
"Create a hero on warm cream (`#E4E0DD`) background. Headline in Editorial New, 54px, weight 400,
uppercase, negative letter-spacing -1.62px, color `#232326`. Subheadline in Neue Haas Grotesk
Display, 16px, weight 400, color `#000000`. No button — use a 'Scroll to Explore' text indicator
in Neue Haas Grotesk, 16px, weight 500, uppercase. Add a blush pink overlay at `rgba(255,192,203,0.3)`
for decorative depth. Zero border-radius throughout."

**Project Card:**
"Create a full-width project card on cobalt blue (`#0060DD`) background. Project title in House
Gothic, fluid font-size that fills viewport width, weight 400, uppercase, color `#F9F6F2`. Below
the title: service type in Editorial New 44px, uppercase, -1.32px tracking, color `#F9F6F2`.
CTA links 'CASE STUDY' and 'SEE IT LIVE' in Neue Haas Grotesk, 16px, weight 500, uppercase,
color `#F9F6F2`, no background, no border. Zero border-radius. Padding: 80px top and bottom."

**Stats Section:**
"Create a statistics grid on dark surface (`#232326`) background. Grid: 4 columns, equal width.
Each stat: label in Editorial New 54px, weight 400, uppercase, -1.62px tracking, color `#BAF2C3`
mint; number in Neue World 192px, weight 700, color `#BAF2C3`. Section intro text in Neue Haas
Grotesk 16px, weight 400, color `#F5F1EE`. 100px vertical padding."

**CTA Link (Text Only):**
"CTA link in Neue Haas Grotesk Display, 16px, weight 500, uppercase, color `#F9F6F2`. No background,
no border, no border-radius. Append arrow character. On hover: slight underline or opacity reduction."

**Dark Section:**
"Section with background `#232326`. All body text in Neue Haas Grotesk 16px, weight 400, color
`#F5F1EE`. Section heading in Editorial New 104px, weight 400, uppercase, letter-spacing -3px,
color `#F5F1EE`. Zero border-radius, zero box-shadow, 104px vertical padding."

### Iteration Guide

1. Start with the correct canvas color (`#E4E0DD`) as your page background for light sections
2. Alternate sections between `#E4E0DD` cream and `#232326` dark for scrolling rhythm
3. Apply `text-transform: uppercase` to every heading, label, and CTA without exception
4. Use negative letter-spacing on Editorial New at all sizes — scale it with font size
5. Load Editorial New from Pangram Pangram or use Georgia as a prototype substitute
6. Load Neue Haas Grotesk Display from Adobe Fonts (Typekit) — do not substitute with Helvetica Neue
7. Project cards require a unique accent color per client — never repeat the same hue
8. House Gothic project titles must be fluid-sized to viewport — use `font-size: calc(...)` or `clamp()`
9. No shadows, no rounding — if you add these, the design no longer represents the brand
10. Check contrast: `#F9F6F2` on `#232326` passes WCAG AA; `#BAF2C3` on `#232326` also passes
