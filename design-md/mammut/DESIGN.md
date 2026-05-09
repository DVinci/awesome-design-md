---
version: alpha
name: Mammut
description: |
  Mammut is a Swiss outdoor performance brand founded in 1862, known for
  mountaineering gear, climbing equipment, and alpine apparel. The design system
  is stark and utilitarian — pure black-and-white with a bold Mammut Red accent
  and a neon lime highlight, built around a custom grotesque typeface (AGNext)
  with tight negative tracking and all-caps display headlines. Components are
  flat with zero decorative radius, conveying precision, durability, and
  mountain-tested ruggedness.

colors:
  primary: "#ED001B"
  primary-active: "#DB3A00"
  accent-lime: "#DFFF54"
  ink: "#000000"
  body: "#000000"
  muted: "#676767"
  muted-light: "#999999"
  canvas: "#FFFFFF"
  surface: "#F0F0F0"
  surface-alt: "#F2F2F2"
  hairline: "#CDCDCD"
  divider: "#E1E1E1"
  on-dark: "#FFFFFF"
  on-primary: "#FFFFFF"

typography:
  display-xl:
    fontFamily: "\"AGNext\", \"Helvetica\", \"Arial\", -apple-system, sans-serif"
    fontSize: 80px
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: -2.4px
  display-md:
    fontFamily: "\"AGNext\", \"Helvetica\", \"Arial\", -apple-system, sans-serif"
    fontSize: 60px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: -1.2px
  title-lg:
    fontFamily: "\"AGNext\", \"Helvetica\", \"Arial\", -apple-system, sans-serif"
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.8px
  title-md:
    fontFamily: "\"AGNext\", \"Helvetica\", \"Arial\", -apple-system, sans-serif"
    fontSize: 30px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -0.6px
  body-lg:
    fontFamily: "\"AGNext\", \"Helvetica\", \"Arial\", -apple-system, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.2px
  body-md:
    fontFamily: "\"AGNext\", \"Helvetica\", \"Arial\", -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.18px
  body-sm:
    fontFamily: "\"AGNext\", \"Helvetica\", \"Arial\", -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
  nav-link:
    fontFamily: "\"AGNext\", \"Helvetica\", \"Arial\", -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.18px
  button:
    fontFamily: "\"AGNext\", \"Helvetica\", \"Arial\", -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.18px
  caption:
    fontFamily: "\"BaselGroteskMonoBook\", \"Courier New\", monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0.56px

spacing:
  xxs: 4px
  xs: 7px
  sm: 10px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px

rounded:
  none: 0px
  xs: 2px
  pill: 100px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "20px 45px"
    border: "none"
    textTransform: "uppercase"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "20px 45px"
    border: "none"
    textTransform: "uppercase"

  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "20px 45px"
    border: "1px solid {colors.hairline}"
    textTransform: "uppercase"

  button-secondary-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "20px 45px"
    border: "1px solid {colors.ink}"
    textTransform: "uppercase"

  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: "0px 16px"
    border: "1px solid {colors.on-dark}"
    textTransform: "uppercase"

  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
    border: "none"
    boxShadow: "none"

  card-featured:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    border: "none"

  product-label:
    backgroundColor: "{colors.accent-lime}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxs} {spacing.xs}"
    border: "none"

  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.hairline}"

  text-input-focused:
    border: "1px solid {colors.ink}"

  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    border: "none"

  top-nav-dark:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    border: "none"
---

# Mammut Design System

## Overview

Mammut's visual identity channels the raw, elemental power of the mountain — stripped to the essentials, nothing superfluous. The palette is almost entirely monochromatic: pure black on white or white on black, with Mammut Red (`#ED001B`) deployed as a singular brand signal and neon lime (`#DFFF54`) as a high-visibility accent. All-caps display headlines in AGNext with aggressive negative tracking (-2.4px at 80px) create a bold, alpine editorial voice reminiscent of technical specification sheets and safety gear labeling.

Typography is dual-stack: AGNext (custom grotesque) handles all headings and body copy with tight leading, while BaselGroteskMonoBook appears exclusively in CTA micro-labels and category tags — its monospaced rhythm adding a technical, gear-catalog precision. Components are architecturally flat: zero decorative border-radius on cards, zero shadow, zero ornamentation. Only buttons break the rule — pill shapes for primary CTAs contrast against the rigid grid to signal interactivity. The effect is simultaneously Swiss-modernist and mountain-hard: purposeful, legible at altitude, and built to outlast the conditions.

**Key visual characteristics:**
- Monochromatic base — 99% black and white, with red and lime used sparingly for maximum impact
- AGNext display type at 80px+ with -2.4px letter spacing and all-caps creates extreme typographic hierarchy
- Flat design system: zero border-radius on all content elements, no drop shadows, no gradients
- Dual font personality: grotesque (AGNext) for communication, monospace (BaselGroteskMonoBook) for technical labels
- Mammut Red (`#ED001B`) used only for hero backgrounds and critical brand moments — never for body text
- Neon lime (`#DFFF54`) as a vivid badge/label accent — signals "active" or "new" in navigation
- Full-bleed photography with text overlaid directly on images, white or black depending on backdrop
- Generous section whitespace (80px+) with compressed typographic leading — spacious yet impactful

**Positioning:** Mammut sits between premium alpine performance (Arc'teryx, Patagonia) and technical climbing heritage. The design leans harder into monochromatic Bauhaus severity than Arc'teryx's refined softness, signaling technical credibility and Swiss precision over lifestyle aspiration.

---

## Colors

### Brand & Accent

| Token | Hex | Use |
|-------|-----|-----|
| `primary` | `#ED001B` | Hero section backgrounds, brand moments, critical highlights |
| `primary-active` | `#DB3A00` | Hover/active state on primary surfaces — dark orange shift |
| `accent-lime` | `#DFFF54` | Navigation badges, active-state labels, high-visibility tags |

### Surface

| Token | Hex | Use |
|-------|-----|-----|
| `canvas` | `#FFFFFF` | Default page background, card backgrounds |
| `surface` | `#F0F0F0` | Section backgrounds, subtle alternating rows |
| `surface-alt` | `#F2F2F2` | Footer background, secondary surface layer |

### Text

| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#000000` | All primary text, headings on white |
| `body` | `#000000` | Default body paragraphs |
| `muted` | `#676767` | Secondary descriptions, subdued captions |
| `muted-light` | `#999999` | Disabled states, placeholder text |
| `on-dark` | `#FFFFFF` | Text and icons on dark/red/image backgrounds |
| `on-primary` | `#FFFFFF` | Text on red primary backgrounds |

### Structural

| Token | Hex | Use |
|-------|-----|-----|
| `hairline` | `#CDCDCD` | Button borders, form borders, separators |
| `divider` | `#E1E1E1` | Horizontal rule dividers, table lines |

### Semantic

- **Error/Danger**: `#ED001B` — same as brand primary; Mammut uses red universally for critical signals
- **Warning**: `#DB3A00` — dark orange, contextual alerts
- **Success**: not formally defined in the system; use `#000000` ink with checkmark iconography

---

## Typography

### Font Families

**AGNext** — Custom grotesque sans-serif, Mammut's primary typeface. Designed for the brand; not available via Google Fonts. Fallback to `"Helvetica Neue", Helvetica, Arial, sans-serif`.

**BaselGroteskMonoBook** — Custom monospace grotesque. Used exclusively for CTA labels, category tags, and technical micro-copy. Fallback to `"Courier New", monospace`.

Both fonts are loaded as Next.js font variables (`__AGNext`, `__BaselGroteskMonoBook`) via `@next/font`.

### Hierarchy Table

| Role | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|--------|-------------|----------------|-----|
| `display-xl` | 80px | 700 | 0.90 | -2.4px | Hero headlines, campaign statements |
| `display-md` | 60px | 700 | 0.95 | -1.2px | Section hero headlines, H2 |
| `title-lg` | 40px | 400 | 1.05 | -0.8px | Sub-section headings, page titles |
| `title-md` | 30px | 500 | 1.00 | -0.6px | Social/hashtag display, card headings |
| `body-lg` | 20px | 400 | 1.20 | -0.2px | Navigation menu label, lead text |
| `body-md` | 18px | 400 | 1.20 | -0.18px | Default paragraphs, button labels |
| `body-sm` | 16px | 400 | 1.00 | 0 | Navigation items, list text, footer |
| `nav-link` | 18px | 400 | 1.00 | -0.18px | Top navigation links |
| `button` | 18px | 400 | 1.00 | -0.18px | Pill CTA buttons, uppercase |
| `caption` | 14px | 400 | 1.00 | +0.56px | Mono CTA tags, category labels, tracking up |

### Typography Principles

- Display sizes always render uppercase (`text-transform: uppercase`) — this is non-negotiable for brand consistency
- Negative tracking at all sizes except `caption` (mono labels) which uses positive tracking (+0.56px)
- Weight strategy: only 700 for display headers; 400 for everything else — no 500/600 in body text
- Never mix AGNext and BaselGroteskMonoBook in the same text element
- For environments without AGNext, use `Helvetica Neue` with letter-spacing increased by 0.3px to compensate for the tighter inherent fit

---

## Layout

### Spacing System

Base unit: **8px**. All spacing is multiples of 4px.

| Token | Value | Use |
|-------|-------|-----|
| `xxs` | 4px | Icon gap, inline micro-spacing |
| `xs` | 7px | Badge inner padding (vertical) |
| `sm` | 10px | Small component internal padding |
| `md` | 16px | Standard component padding, grid gutter |
| `lg` | 24px | Card padding, section sub-gaps |
| `xl` | 32px | Between-component spacing |
| `xxl` | 48px | Large block gaps, between major sections |
| `section` | 80px | Full-page section vertical rhythm |

### Grid and Container

- **Max container width**: 1440px on desktop, fluid within
- **Column count**: 12-column grid; product grids use 4-column on desktop, 2-column on tablet, 1-column mobile
- **Gutter**: 16px (`md`)
- **Page margin**: 16–24px on mobile, 40px on tablet, 80px+ on desktop (content-width-responsive)
- **Hero sections**: full viewport width and height, edge-to-edge with no padding

### Whitespace Philosophy

Mammut uses aggressive macro whitespace between page sections (80px+) while compressing micro whitespace within typographic elements — headlines have leading tighter than 1.0. This creates breathing room around images and product shots, while headlines feel dense and impactful. Category and product listing pages reduce whitespace to maximize density.

---

## Elevation and Depth

### Levels

| Level | Treatment | Example Use |
|-------|-----------|-------------|
| 0 — Flat | No shadow, no border | Product cards, content blocks |
| 1 — Surface | `background: #F0F0F0` | Footer, alternate section bg |
| 2 — Overlay | `background: rgba(0,0,0,0.2)` | Category slider overlay links |
| 3 — Image overlay | `background: rgba(0,0,0,0.75)` | Image caption overlays |
| 4 — Hero dark | Full `#000000` or `#ED001B` block | Hero sections, campaign banners |

### Shadow Philosophy

Mammut uses **no drop shadows** anywhere in the design system. Depth is achieved purely through:
- Solid color blocks (red or black) layered over white
- Semi-transparent overlays on photography (`rgba(0,0,0,0.2–0.75)`)
- Color contrast between surface tiers (white → light gray → dark)

No `box-shadow`, no `text-shadow`, no blur effects. The mountain is defined by its edges, not its shadows.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `none` | 0px | All cards, containers, badges, image frames |
| `xs` | 2px | ButtonBox mono CTA tags, micro UI elements |
| `pill` | 100px | Primary and secondary pill buttons |

The design system is fundamentally **flat** — all content containers, product cards, badges, and image frames use zero border radius. The pill shape is reserved exclusively for interactive CTA buttons to signal clickability. This binary approach (flat vs. pill) is distinctive and intentional.

### Photography and Imagery

- **Aspect ratios**: Variable; hero images fill viewport, product shots use portrait ratio (~3:4)
- **Crop treatment**: Edge-to-edge, no border, no shadow
- **Overlay text**: White text directly on images, using AGNext at display sizes
- **Image borders**: None — images bleed to container edges
- **Color treatment**: High contrast photography; often single-subject on dramatic alpine backdrops

---

## Components

### Buttons

**Pill Primary** (`button-primary`)
- Background: `#ED001B` (Mammut Red)
- Text: `#FFFFFF`, AGNext 18px, uppercase, letter-spacing -0.18px
- Padding: 20px 45px
- Border-radius: 100px (pill)
- No border

**Pill Secondary** (`button-secondary`)
- Background: `#FFFFFF`
- Text: `#000000`, same typography
- Border: 1px solid `#CDCDCD`
- Same padding and radius as primary

**ButtonBox Ghost Tag** (`button-ghost`)
- Background: `rgba(255,255,255,0.1)` (translucent on dark backgrounds)
- Text: `#FFFFFF`, BaselGroteskMonoBook 14px, letter-spacing +0.56px, uppercase
- Border-radius: 2px
- Border: 1px solid `#FFFFFF`
- Padding: 0 16px (vertically centered via flex)
- Used as overlaid CTA tags on hero imagery

### Cards

**Product Card** (`card-base`)
- Background: `#FFFFFF`
- No border, no shadow, no radius
- Padding: 16px
- Product name: AGNext 16px, weight 400, `#000000`
- Hover state: image zoom (CSS transform)

**Category Slider Item**
- Background: `rgba(0,0,0,0.2)` — semi-transparent dark overlay on image
- No radius, no border
- Text: `#000000`, 16px

### Inputs and Forms

**Text Input** (`text-input`)
- Background: `#FFFFFF`
- Text: `#000000`
- Border: 1px solid `#CDCDCD`
- No border-radius (flat)
- Focus border: 1px solid `#000000`

### Navigation

**Top Navigation** (`top-nav`)
- Background: `#FFFFFF` (transparent when over hero imagery)
- Text: `#000000`, AGNext 18px
- No border-bottom
- Hamburger menu toggle — mobile below 1024px

**Navigation Badge / Label**
- Background: `#DFFF54` (neon lime)
- Text: `#000000`, AGNext 22px
- Padding: 4px 7px
- No radius (flat)
- Used to highlight "active" category in hamburger nav

### Badges and Tags

**Category Tag** (mono ButtonBox)
- BaselGroteskMonoBook 14px, uppercase, letter-spacing +0.56px
- Background: `rgba(255,255,255,0.1)` on dark; `transparent` on light
- Border: 1px solid current text color
- Border-radius: 2px
- Padding: 0 16px

---

## Do's and Don'ts

### Do

- Use uppercase for all display and headline text — it is a core Mammut brand signal
- Apply tight negative letter-spacing to all headings: -2.4px at 80px, scaling proportionally
- Use Mammut Red (`#ED001B`) as full-bleed section backgrounds for maximum brand impact
- Maintain the flat zero-radius aesthetic on all containers, cards, and badges
- Use BaselGroteskMonoBook with positive tracking (+0.56px) for mono CTA labels and technical text
- Use neon lime (`#DFFF54`) sparingly — only for active nav states and high-priority tags
- Let photography be full-bleed and edge-to-edge; never add rounded corners or drop shadows to images
- Preserve section breathing room — use 80px vertical gaps between major content blocks

### Don't

- Don't use border-radius larger than 2px on any content element (only pill buttons get 100px)
- Don't use box-shadow or drop-shadow on any element in the system
- Don't use red for body text — `#ED001B` is exclusively a background/display-level color
- Don't mix the two typefaces in the same text block
- Don't use font-weight 500 or 600 in body copy — stick to 400 (body) and 700 (bold display)
- Don't use the neon lime as a text color — it only works as a background
- Don't use lowercase for display or button text — Mammut always goes all-caps at these roles
- Don't add decorative gradients — all backgrounds are flat solid colors or photography

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 768px | Single column, full-width images, hamburger nav |
| Tablet | 768px – 1024px | 2-column product grid, compressed nav |
| Desktop | 1024px+ | 4-column product grid, full horizontal nav |
| Wide | 1440px+ | Max-width container centered, larger section padding |

### Touch Targets

- Minimum touch target: 44px height for all interactive elements
- Navigation hamburger: custom larger hit area
- Product card: full card is tappable
- Pill buttons: min-height 60px (20px top + 20px bottom padding + 18px line)

### Collapsing Strategy

- Navigation collapses to hamburger menu below 1024px
- Product grid: 4-col → 2-col → 1-col
- Hero headlines scale down: 80px → 56px → 36px on mobile
- Section padding: 80px → 48px → 24px on mobile

### Image Behavior

- All images use `object-fit: cover` within fixed-aspect containers
- Hero images fill full viewport width and height
- Product images maintain portrait aspect ratio (~3:4)
- No lazy-loading artifacts — images are loaded eagerly for hero sections

---

## Agent Prompt Guide

### Quick Color Reference

- Primary Red: `#ED001B`
- Primary Active: `#DB3A00`
- Accent Lime: `#DFFF54`
- Canvas (background): `#FFFFFF`
- Surface (alternate bg): `#F0F0F0`
- Footer surface: `#F2F2F2`
- Ink (primary text): `#000000`
- Muted text: `#676767`
- Muted light: `#999999`
- Hairline (borders): `#CDCDCD`
- On dark (inverted text): `#FFFFFF`

### Example Component Prompts

**Hero Section:**
"Create a full-viewport hero on a Mammut Red (`#ED001B`) background. Headline in AGNext (fallback: Helvetica Neue), 80px, weight 700, all-caps, letter-spacing -2.4px, color `#FFFFFF`, line-height 0.9. Sub-headline 60px, same treatment. CTA button: pill shape (border-radius 100px), white background (`#FFFFFF`), black text (`#000000`), 18px AGNext uppercase, padding 20px 45px."

**Product Card:**
"Create a flat product card on white (`#FFFFFF`). No border-radius, no shadow. Product image fills the top 75% of card (portrait 3:4 ratio). Product name below: AGNext 16px, weight 400, black. Price: AGNext 16px, weight 400, black. Card padding: 16px. On hover, image scales to 1.05."

**Ghost CTA Tag:**
"Create a text tag using BaselGroteskMonoBook (fallback: Courier New), 14px, all-caps, letter-spacing +0.56px, color `#FFFFFF`. Container: 2px border-radius, border 1px solid `#FFFFFF`, background `rgba(255,255,255,0.1)`, padding 0 16px. Use overlaid on dark image sections."

**Navigation Bar:**
"Navigation bar: white background, no bottom border. Left: Mammut logo. Right: links in AGNext 18px, `#000000`, letter-spacing -0.18px. On mobile: replace right links with hamburger icon button. Active nav item gets a neon lime (`#DFFF54`) flat badge (4px 7px padding, no radius) around the category name."

**Footer:**
"Footer on `#F2F2F2` background. Four-column link grid on desktop (2-col mobile). Heading: AGNext 16px, `#000000`, weight 500. Links: AGNext 16px, `#000000`, weight 400. Copyright: AGNext 14px, `#676767`. Full-width, no shadow, no border-top."

### Iteration Guide

1. Start with `#FFFFFF` as your page background and `#000000` as default text
2. Load AGNext via your font system — if unavailable, use `Helvetica Neue` with letter-spacing adjusted by +0.3px
3. Apply `text-transform: uppercase` and tight negative letter-spacing to all display and headline elements
4. Use `#ED001B` as a full-bleed background for hero sections — never as inline text color
5. Keep all cards and containers at 0px border-radius; only pill buttons get 100px
6. Use BaselGroteskMonoBook with +0.56px tracking for any mono-style CTA tags
7. Never add box-shadow to any element — use color blocks for depth
8. Verify contrast: `#000000` on `#FFFFFF` (21:1), `#FFFFFF` on `#ED001B` (4.5:1+)
