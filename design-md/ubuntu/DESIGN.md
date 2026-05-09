---
version: alpha
name: Ubuntu
description: |
  Ubuntu's design system reflects the open-source spirit of its Linux heritage — bold,
  functional, and community-driven. The iconic Ubuntu Orange (#E95420) anchors a palette
  that pairs warm dark surfaces with crisp white content areas, powered by the purpose-built
  Ubuntu variable font. The Vanilla design framework (Canonical's open-source CSS library)
  defines flat, zero-radius components with sharp green CTAs and a structured typographic
  scale ranging from ultra-light display headings to medium-weight body text. Enterprise
  credibility meets approachable open-source warmth.

colors:
  primary: "#0E8420"
  primary-active: "#008013"
  accent-orange: "#E95420"
  accent-blue: "#0066CC"
  accent-blue-muted: "#6699CC"
  ink: "#111111"
  body: "#000000"
  muted: "#808080"
  hairline: "#D9D9D9"
  canvas: "#FFFFFF"
  canvas-warm: "#F3F3F3"
  surface: "#262626"
  surface-dark: "#111111"
  surface-footer: "#2D2D2D"
  on-dark: "#FFFFFF"
  input-bg: "#EAEAEA"
  semantic-success: "#0E8420"
  semantic-error: "#C7162B"
  semantic-warning: "#F99B11"

typography:
  display-xl:
    fontFamily: '"Ubuntu variable", Ubuntu, -apple-system, "Segoe UI", Roboto, Oxygen, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
    fontSize: 80px
    fontWeight: 100
    lineHeight: 1.1
    letterSpacing: 0
  display-md:
    fontFamily: '"Ubuntu variable", Ubuntu, -apple-system, "Segoe UI", Roboto, Oxygen, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
    fontSize: 40px
    fontWeight: 550
    lineHeight: 1.2
    letterSpacing: 0
  display-light:
    fontFamily: '"Ubuntu variable", Ubuntu, -apple-system, "Segoe UI", Roboto, Oxygen, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
    fontSize: 40px
    fontWeight: 180
    lineHeight: 1.2
    letterSpacing: 0
  title-lg:
    fontFamily: '"Ubuntu variable", Ubuntu, -apple-system, "Segoe UI", Roboto, Oxygen, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
    fontSize: 24px
    fontWeight: 275
    lineHeight: 1.33
    letterSpacing: 0
  title-md:
    fontFamily: '"Ubuntu variable", Ubuntu, -apple-system, "Segoe UI", Roboto, Oxygen, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
    fontSize: 16px
    fontWeight: 550
    lineHeight: 1.5
    letterSpacing: 0.8px
  body-lg:
    fontFamily: '"Ubuntu variable", Ubuntu, -apple-system, "Segoe UI", Roboto, Oxygen, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: '"Ubuntu variable", Ubuntu, -apple-system, "Segoe UI", Roboto, Oxygen, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: '"Ubuntu variable", Ubuntu, -apple-system, "Segoe UI", Roboto, Oxygen, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  button:
    fontFamily: '"Ubuntu variable", Ubuntu, -apple-system, "Segoe UI", Roboto, Oxygen, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  nav-link:
    fontFamily: '"Ubuntu variable", Ubuntu, -apple-system, "Segoe UI", Roboto, Oxygen, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: '"Ubuntu variable", Ubuntu, -apple-system, "Segoe UI", Roboto, Oxygen, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
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
  none: 0px
  xs: 2px
  sm: 4px
  md: 8px
  lg: 12px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "4.5px 16px"
    border: "1px solid {colors.primary}"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "4.5px 16px"
    border: "1px solid {colors.primary-active}"

  button-primary-disabled:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "4.5px 16px"
    border: "1px solid {colors.muted}"

  button-secondary:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.body}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "4.5px 16px"
    border: "1px solid {colors.muted}"

  button-secondary-active:
    backgroundColor: "{colors.input-bg}"
    textColor: "{colors.body}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "4.5px 16px"
    border: "1px solid {colors.body}"

  card-base:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    border: "none"
    boxShadow: "0px 1px 1px rgba(0,0,0,0.15), 0px 2px 2px rgba(0,0,0,0.15), 0px 0px 3px rgba(0,0,0,0.2)"

  card-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"

  text-input:
    backgroundColor: "{colors.input-bg}"
    textColor: "{colors.body}"
    rounded: "{rounded.none}"
    padding: "4.5px 16px"
    border: "none"

  text-input-focused:
    backgroundColor: "{colors.input-bg}"
    textColor: "{colors.body}"
    rounded: "{rounded.none}"
    padding: "4.5px 16px"
    border: "1px solid {colors.accent-blue}"

  text-input-disabled:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.muted}"
    rounded: "{rounded.none}"
    padding: "4.5px 16px"
    border: "none"

  top-nav:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    border: "none"
    padding: "0px"

  badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "2px 8px"
    border: "1px solid {colors.hairline}"
---

# Ubuntu Design System

## Overview

Ubuntu's visual identity is defined by the Vanilla design framework — Canonical's open-source CSS library that powers ubuntu.com and all Canonical product sites. The design language is deliberately functional and content-first: flat components with zero border radius, a dual-mode color system (crisp white light pages, deep charcoal dark pages), and the Ubuntu variable font used across every typographic role.

The palette is anchored by Ubuntu Orange (#E95420), the brand's most recognizable visual signature, appearing in the logo and accent moments. Green (#0E8420) drives all primary calls to action, signaling "go" and download actions. Dark surfaces (#262626, #111111) create a premium, technical atmosphere on landing and hero sections, while light pages (#FFFFFF, #F3F3F3) carry editorial and documentation content. The design system communicates enterprise trust — built for CTOs, developers, and IT decision-makers — while remaining approachable to the global open-source community.

Key visual characteristics:
- Zero border radius on all components — sharp, no-nonsense corners across buttons, cards, inputs, and modals
- Ubuntu variable font used as both display (ultra-light weight 100 at 80px) and UI (medium weight 550) — one face, extreme range
- Dual-mode layout: dark hero/homepage (#262626 body) contrasts with light content pages (#FFFFFF or #F3F3F3)
- Ubuntu Orange (#E95420) reserved for brand identity, logo, and accent highlights — not used for interactive CTAs
- Green (#0E8420) is the exclusive primary action color — download buttons, contact CTAs, form submits
- Deep navy nav (#111111) and charcoal footer (#2D2D2D) frame all pages consistently
- Generous section spacing (80px vertical padding) with compact component internals (4.5px/16px button padding)
- Box shadows used sparingly on cards: three-layer subtle shadow for depth without decoration

---

## Colors

### Brand & Accent

| Token | Hex | Use |
|-------|-----|-----|
| `accent-orange` | `#E95420` | Ubuntu logo, brand identity, decorative accents, hover highlights |
| `accent-blue` | `#0066CC` | Hyperlinks, informational elements, secondary interactive states |
| `accent-blue-muted` | `#6699CC` | Link hover states on dark surfaces, subdued link variants |
| `primary` | `#0E8420` | Primary CTA buttons (download, contact, submit) |
| `primary-active` | `#008013` | Pressed/hover state of primary buttons |

### Surface

| Token | Hex | Use |
|-------|-----|-----|
| `canvas` | `#FFFFFF` | Default light page background (about, blog, docs) |
| `canvas-warm` | `#F3F3F3` | Warm grey page background (download, pricing pages) |
| `input-bg` | `#EAEAEA` | Form inputs, select elements |
| `surface` | `#262626` | Dark card backgrounds, hero sections |
| `surface-dark` | `#111111` | Primary navigation bar |
| `surface-footer` | `#2D2D2D` | Global footer background |
| `on-dark` | `#FFFFFF` | Text and icons on all dark surfaces |

### Text

| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#111111` | Primary headings on light backgrounds |
| `body` | `#000000` | Body copy on light pages |
| `muted` | `#808080` | Subdued text, placeholders, disabled states |
| `hairline` | `#D9D9D9` | Borders, dividers, separator lines |

### Semantic

| Token | Hex | Use |
|-------|-----|-----|
| `semantic-success` | `#0E8420` | Success states, confirmation messages |
| `semantic-error` | `#C7162B` | Error states, validation failures |
| `semantic-warning` | `#F99B11` | Warning notices, caution banners |

---

## Typography

### Font Family

**Ubuntu variable** — a humanist sans-serif typeface purpose-built for the Ubuntu project by Dalton Maag. It is a variable font supporting a continuous weight axis from ultra-light (100) to medium (550), eliminating the need for multiple font files.

CSS font stack:
```
"Ubuntu variable", Ubuntu, -apple-system, "Segoe UI", Roboto, Oxygen, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif
```

Load via Google Fonts:
```
https://fonts.googleapis.com/css2?family=Ubuntu:wght@100;300;400;500&display=swap
```

### Hierarchy Table

| Role | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|--------|-------------|----------------|-----|
| `display-xl` | 80px | 100 | 1.1 | 0 | Hero display headlines (about, landing pages) |
| `display-md` | 40px | 550 | 1.2 | 0 | Section headings, page titles |
| `display-light` | 40px | 180 | 1.2 | 0 | Subtitle pairs beneath bold headings |
| `title-lg` | 24px | 275 | 1.33 | 0 | Card headings, blog post titles |
| `title-md` | 16px | 550 | 1.5 | 0.8px | Small section headers, nav footer labels |
| `body-lg` | 18px | 400 | 1.5 | 0 | Lead paragraphs, feature descriptions |
| `body-md` | 16px | 400 | 1.5 | 0 | Default body copy |
| `body-sm` | 14px | 400 | 1.43 | 0 | Captions, metadata, fine print |
| `button` | 16px | 400 | 1.5 | 0 | All button labels |
| `nav-link` | 16px | 400 | 1.5 | 0 | Navigation items |
| `caption` | 12px | 400 | 1.5 | 0 | Tags, badges, timestamps |

### Principles

- **Weight as expression**: Ubuntu variable font spans from ultra-thin (100) for editorial displays to medium (550) for emphasis — use the full range deliberately
- **Paired heading strategy**: Large headings frequently pair a bold weight (`display-md` 550) with a thin complement (`display-light` 180) on the next line, creating visual contrast within a single typeface
- **No tracking adjustments**: Letter spacing is 0 across all roles except `title-md` (0.8px) which uses slight positive tracking for small-cap-like structure
- **System font fallback**: `-apple-system`, `Segoe UI`, `Roboto` provide near-identical rendering when the Ubuntu font cannot be loaded

---

## Layout

### Spacing System

Base unit: 8px. All spacing values are multiples of 4px for sub-unit precision.

| Token | Value | Use |
|-------|-------|-----|
| `xxs` | 4px | Tight internal padding, icon gaps |
| `xs` | 8px | Element gaps, compact padding |
| `sm` | 12px | Small component internal spacing |
| `md` | 16px | Standard padding (buttons, inputs, cards) |
| `lg` | 24px | Card padding, section gutters |
| `xl` | 32px | Large component spacing |
| `xxl` | 48px | Section internal padding |
| `section` | 80px | Major section vertical padding |

### Grid & Container

- Max container width: 1280px
- Gutter: 24px (desktop), 16px (mobile)
- Column grid: 12 columns (desktop), 6 columns (tablet), 4 columns (mobile)
- Wide sections use full-bleed backgrounds with a centered inner container

### Whitespace Philosophy

Ubuntu's layout is notably generous — 80px section padding creates strong visual breaks between content blocks. Hero sections on dark backgrounds breathe with minimal internal decoration. Content pages use tight card grids where whitespace comes from consistent margins rather than component-level padding variation. The flat, borderless approach to sections means whitespace does all the separation work.

---

## Elevation and Depth

### Levels

| Level | Treatment | Example Use |
|-------|-----------|-------------|
| 0 — Flat | No shadow, no border | Nav bar, hero, footer, page backgrounds |
| 1 — Hairline | `1px solid #D9D9D9` | Cards on light backgrounds, input fields (light variant) |
| 2 — Raised | `0 1px 1px rgba(0,0,0,0.15), 0 2px 2px rgba(0,0,0,0.15), 0 0 3px rgba(0,0,0,0.2)` | Blog cards on dark surfaces |
| 3 — Modal | External shadow + overlay backdrop | Dialogs, drawers |

### Shadow Philosophy

Ubuntu's Vanilla framework uses shadows minimally and only on cards rendered on dark backgrounds. Light-page cards use only a thin border (`1px solid #D9D9D9`) instead of elevation. This restraint keeps the design feeling flat and technical rather than skeuomorphic. Decorative depth on dark hero sections comes from layered dark backgrounds (`#262626` on `#111111`) rather than shadows.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `none` | 0px | All interactive components — buttons, cards, inputs, badges |
| `xs` | 2px | Minor rounding (rarely used) |
| `sm` | 4px | Code blocks, tag elements (Vanilla docs context) |
| `md` | 8px | Reserved for partner/third-party components |
| `lg` | 12px | Not used in core Ubuntu.com UI |
| `pill` | 9999px | Full-pill status labels, if applicable |

Ubuntu.com uses **zero border radius** on all primary components (buttons, inputs, cards, modals, navigation). This is a defining characteristic of the Vanilla design framework — sharp corners communicate enterprise precision and technical confidence.

### Photography & Imagery

- Product screenshots and terminal windows use sharp corners, no rounding
- Hero imagery is typically full-bleed with dark gradient overlays on dark-background sections
- Person/community photography uses portrait 3:2 crops in card grids
- Technical diagrams and architecture illustrations use clean line art on transparent or dark backgrounds
- The Ubuntu Orange is used sparingly in photography treatment and illustration

---

## Components

### Buttons

**Primary (`p-button--positive`):** Green background (#0E8420), white text, 0px border-radius, `4.5px 16px` padding, 1px solid green border. Used for download, contact, and primary action CTAs.

**Base (`p-button`):** Warm grey (#F3F3F3) background, black text, 0px radius, `4.5px 16px` padding, `1px solid #707070` border. Used for secondary actions like "Download datasheet", "Learn more".

**Hover states:** Primary darkens to `#008013`. Base darkens background slightly to `#EAEAEA`.

**Ghost/Link variant:** No background, text matches link color `#0066CC`, underline on hover.

### Cards

**Dark card (blog, homepage):** Background `#262626`, 0px radius, no border, three-layer box-shadow for lift. Text: white. Typically contains category badge, h3 title (24px/275), byline.

**Light card:** Background `#FFFFFF`, 0px radius, `1px solid #D9D9D9` border. Used on light-background pages.

**Horizontal card:** Used in resource listings — image left, content right, 50/50 split at desktop.

### Inputs and Forms

**Text input:** Background `#EAEAEA`, black text, 0px radius, `4.5px 16px` padding, no visible border at rest. Focus state adds `1px solid #0066CC`.

**Select:** Same treatment as text input. Custom arrow indicator, no OS default styling.

**Checkbox/Radio:** Square checkboxes (0px radius), filled green (#0E8420) when selected.

**Form labels:** 16px, weight 400, black, above the input.

### Navigation

**Top navigation:** Full-width `#111111` background, white text, 0px radius. Ubuntu logo left, nav items center/right. "Download Ubuntu" appears as a distinct text item, not a button shape. Mobile: hamburger menu with full-screen drawer.

**Blog sub-nav:** `#262626` background, white text — scoped navigation within the blog section.

**Footer:** `#2D2D2D` background, white text, 64px top/bottom padding. Multi-column grid of product and service links organized by product category (Ubuntu, OpenStack, Ceph, etc.). Legal row with smaller caption text.

### Badges and Tags

Category labels on blog cards: uppercase 12px text, slight letter spacing, no background in default state. Status labels can use small rectangular shapes with `1px solid` borders on dark surfaces.

---

## Do's and Don'ts

**Do:**
- Use Ubuntu Orange (#E95420) exclusively for brand marks and decorative accents — never as a button color
- Apply zero border radius on all interactive components — buttons, inputs, cards must have sharp corners
- Use the Ubuntu variable font's weight range expressively — pair ultra-light (100) display with medium (550) emphasis
- Alternate surface colors between sections (dark hero → light content → dark CTA strip) to create visual rhythm
- Use the three-layer card shadow only on dark-background surfaces; use a 1px border on light backgrounds
- Maintain the 80px section vertical padding to preserve generous breathing room between content blocks
- Use green (#0E8420) only for primary positive actions (download, submit, contact)

**Don't:**
- Don't add border radius to buttons, cards, or inputs — any rounding breaks the Vanilla framework aesthetic
- Don't use the Ubuntu Orange for primary CTAs or hover states — it is a brand color, not an interaction color
- Don't mix display font weights arbitrarily — stick to the paired heading strategy (bold + thin on adjacent lines)
- Don't use shadows on light-background cards — use the 1px border treatment instead
- Don't apply letter-spacing tracking to display headings — the Ubuntu font's natural spacing should be preserved
- Don't use more than two background colors in a single section — the design uses flat, full-bleed color blocks
- Don't use custom fonts alongside Ubuntu — the font stack is self-contained and comprehensive

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 620px | Single column, hamburger nav, stacked hero |
| Tablet | 620px – 1036px | 2-column grids, nav condensed |
| Desktop | 1036px+ | Full multi-column layouts, horizontal nav |
| Wide | 1280px+ | Max-width container centered, full gutter |

### Touch Targets

- Minimum interactive area: 44×44px
- Buttons use `4.5px 16px` padding — achieve touch size through min-height constraints
- Nav items expand to full-width tap targets on mobile

### Collapsing Strategy

- Navigation collapses to hamburger icon at mobile breakpoint; opens a full-height side drawer with white background on dark nav
- Card grids shift from 3-column → 2-column → 1-column
- Hero sections stack vertically: text above, image/illustration below
- Footer multi-column grid collapses to single scrollable column

### Image Behavior

- Hero images: `object-fit: cover` with dark gradient overlay for text legibility
- Card images: fixed aspect ratio (16:9 or 3:2), `object-fit: cover`, no rounding
- Product screenshots: `max-width: 100%`, maintain native aspect ratio, no rounding
- Icons: SVG, typically 16×16px or 24×24px, colored with current text color or explicit brand colors

---

## Agent Prompt Guide

### Quick Color Reference

- Primary (green CTA): `#0E8420`
- Primary active: `#008013`
- Accent Orange (brand only): `#E95420`
- Link blue: `#0066CC`
- Canvas (light): `#FFFFFF`
- Canvas warm (grey pages): `#F3F3F3`
- Surface (dark cards): `#262626`
- Nav bar: `#111111`
- Footer: `#2D2D2D`
- Ink (headings): `#111111`
- Body text: `#000000`
- Muted: `#808080`
- Hairline border: `#D9D9D9`
- On dark text: `#FFFFFF`

### Example Component Prompts

**Hero Section (dark):**
"Create a hero section on #262626 background. Headline 40px, weight 550, Ubuntu font, white (#FFFFFF). Subtitle 40px, weight 180, white. CTA button: #0E8420 background, white text, 0px border-radius, padding 4.5px 16px, 1px solid #0E8420 border, 16px Ubuntu font."

**Blog Card (dark surface):**
"Create a blog card on #262626 background, 0px border-radius. Box shadow: 0 1px 1px rgba(0,0,0,0.15), 0 2px 2px rgba(0,0,0,0.15), 0 0 3px rgba(0,0,0,0.2). Category label: 12px white uppercase. Title: 24px, weight 275, white. Byline: 16px, weight 400, #808080."

**Download Page Layout:**
"Create a light page on #F3F3F3 background. H1: 40px, weight 550, black (#000000). H2: 40px, weight 180, black. Primary button: #0E8420, white text, 0px radius, 4.5px 16px padding. Secondary/neutral button: #F3F3F3 background, black text, 1px solid #707070 border, same padding."

**Navigation Bar:**
"Full-width nav bar, #111111 background, 0px radius. Logo text left: Ubuntu variable font, white, 16px. Nav links: 16px, weight 400, white. Download Ubuntu as plain text link, right-aligned. No border, no shadow."

**Form Input:**
"Input field: #EAEAEA background, 0px border-radius, black text, 16px Ubuntu font, padding 4.5px 16px, no border at rest. On focus: add 1px solid #0066CC border. Label above: 16px, weight 400, black."

### Iteration Guide

1. Start with the correct surface for your context — `#FFFFFF` for docs/editorial, `#F3F3F3` for product/pricing, `#262626` for hero/blog
2. Load the Ubuntu font from Google Fonts — use the variable font for best fidelity across all weights
3. Apply 0px border-radius everywhere — any rounding is immediately off-brand
4. Use green (#0E8420) only for positive actions (download, contact, submit) — never for decorative or informational elements
5. Keep Ubuntu Orange (#E95420) for brand marks only — logo, illustrations, decorative rule lines
6. Match typography weight pairs: bold heading (550) + light subheading (180) is the signature Ubuntu.com pattern
7. Check dark surface text contrast — on #262626, use white (#FFFFFF) at all times; avoid grey text on dark
