---
version: alpha
name: Versailles
description: |
  The official digital identity of the Château de Versailles — a UNESCO World Heritage
  palace and gardens outside Paris. The design system fuses Baroque grandeur with
  restrained contemporary editorial typography. Apollon, a custom display typeface,
  renders headings in deliberate lowercase to project quiet authority rather than
  overt formality. Graphik provides a clean, neutral body voice, while Crimson Text
  adds a scholarly serif warmth for lead paragraphs. The signature Versailles gold
  (#BA9E66) anchors every call-to-action against a warm parchment canvas, creating
  a visual language that is simultaneously historic and modern.

colors:
  primary: "#BA9E66"
  primary-active: "#A08A52"
  ink: "#333333"
  body: "#333333"
  muted: "#666666"
  muted-secondary: "#757575"
  canvas: "#F1EFEA"
  canvas-white: "#FFFFFF"
  surface: "#F1F1F1"
  surface-light: "#F0F0F0"
  surface-dark: "#171717"
  on-dark: "#FFFFFF"
  hairline: "#D8D8D8"
  hairline-medium: "#F0F0F0"
  dark-header: "#0F0F0F"
  overlay: "#000000F2"
  ink-deep: "#000000"
  semantic-success: "#00AA00"

typography:
  display-xl:
    fontFamily: "Apollon, Arial, sans-serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  display-md:
    fontFamily: "Apollon, Arial, sans-serif"
    fontSize: 30px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  title-lg:
    fontFamily: "Apollon, Arial, sans-serif"
    fontSize: 26px
    fontWeight: 400
    lineHeight: 1.615
    letterSpacing: 0
  title-md:
    fontFamily: "Apollon, Arial, sans-serif"
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.363
    letterSpacing: 0
  title-sm:
    fontFamily: "Apollon, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.222
    letterSpacing: 0
  body-lg:
    fontFamily: "\"Crimson Text\", serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "Graphik, serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  body-sm:
    fontFamily: "Graphik, serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.429
    letterSpacing: 0
  button:
    fontFamily: "Graphik, serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  nav-link:
    fontFamily: "Apollon, Arial, sans-serif"
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.227
    letterSpacing: 0
  caption:
    fontFamily: "Graphik, serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.429
    letterSpacing: 0

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  section: 48px
  hero: 80px

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 4px
  lg: 8px
  xl: 12px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "20px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "20px"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "20px"
    border: "1px solid {colors.primary}"

  button-secondary-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "20px"

  card-base:
    backgroundColor: "{colors.canvas-white}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
    boxShadow: "none"

  card-featured:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
    border: "none"

  text-input:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
    padding: "10px 0px"
    border: "0px"

  text-input-focused:
    border: "0px 0px 2px 0px {colors.primary}"

  top-nav:
    backgroundColor: "{colors.dark-header}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    padding: "0px 30px"
    border: "none"

  top-nav-home:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"

  hero-section:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"

  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: "{spacing.section}"
---

# Versailles Design System

## Overview

The Château de Versailles communicates royal heritage through a design vocabulary of studied restraint. Every typographic choice carries symbolic weight: the Apollon display face renders headings in deliberate lowercase — an inversion of aristocratic convention that signals cultural confidence rather than ceremony. The Versailles gold (#BA9E66) is not a bright accent but a burnished, aged hue evoking candlelight on gilded ironwork, applied exclusively to calls-to-action and decorative dividers.

The spatial philosophy borrows from the palace's own architecture: vast, symmetrical, and uncluttered. Full-bleed hero photography of the gardens and palace interiors forms the primary visual content, with typography layered on dark overlays. Interior pages transition to a warm parchment canvas (#F1EFEA), reinforcing the feeling of turning pages in an illuminated manuscript. The system is flat — no shadows, no rounded corners — reflecting the formal geometry of French Baroque garden design.

Key visual characteristics:
- Custom display typeface (Apollon) paired with Graphik sans and Crimson Text serif — three-font typographic system
- Versailles gold #BA9E66 as the sole accent/CTA color; never used for body text
- Deliberate lowercase treatment on all display headings (h1–h4) via CSS `text-transform: lowercase`
- Zero border-radius throughout — completely flat, angular geometry
- Full-bleed photography with dark overlays as primary visual layer
- Warm cream canvas (#F1EFEA) on content pages; near-black (#0F0F0F) on navigation and hero overlays
- No box shadows anywhere — depth is created through color planes, not elevation
- Generous 20px padding on CTAs; 30px horizontal padding on the navigation bar

Positioning: Where luxury travel competitors use gold as a decorative flourish, Versailles uses it with the precision of a royal seal — one color, one purpose, immediately legible. The system differentiates from other museum/heritage sites by committing fully to a bespoke type identity rather than relying on system fonts.

---

## Colors

### Brand & Accent

| Token | Hex | Use |
|-------|-----|-----|
| `primary` | `#BA9E66` | CTA button backgrounds, decorative gold accents, active link color |
| `primary-active` | `#A08A52` | Button hover/pressed state — darkened gold |
| `ink-deep` | `#000000` | Text on gold CTA buttons — maximum contrast |

### Surface

| Token | Hex | Use |
|-------|-----|-----|
| `canvas` | `#F1EFEA` | Warm parchment — default page background on content pages |
| `canvas-white` | `#FFFFFF` | Pure white card and modal backgrounds |
| `surface` | `#F1F1F1` | Light grey surface — alternate section backgrounds |
| `surface-light` | `#F0F0F0` | Subtle separator band, zebra-stripe sections |
| `surface-dark` | `#171717` | Dark hero background, overlay backdrop |
| `dark-header` | `#0F0F0F` | Navigation header on interior pages |
| `overlay` | `#000000F2` | Full-screen mobile menu overlay (95% opaque) |

### Text

| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#333333` | Primary body text, headings on light backgrounds |
| `body` | `#333333` | Default paragraph text — same as ink |
| `muted` | `#666666` | Crimson Text lead paragraphs, secondary body copy |
| `muted-secondary` | `#757575` | Caption text, metadata, timestamps |
| `on-dark` | `#FFFFFF` | All text on dark surfaces — hero headlines, nav on dark header |

### Semantic

| Token | Hex | Use |
|-------|-----|-----|
| `semantic-success` | `#00AA00` | Form validation success states |
| `hairline` | `#D8D8D8` | Card borders, horizontal rules, dividers |
| `hairline-medium` | `#F0F0F0` | Subtle section separators on light backgrounds |

---

## Typography

### Font Family

The Versailles site uses a deliberate three-font system:

- **Apollon** — Proprietary display serif with classical proportions. Used exclusively for all headings (h1–h4). Falls back to Arial, sans-serif. Not available via CDN; approximate with Playfair Display at 400 weight for prototyping.
- **Graphik** — A geometric grotesque by Commercial Type. Used for all body copy, navigation prose, buttons, and UI labels. Falls back to a generic serif stack (the site defines `Graphik, serif`). Approximate with Inter or DM Sans.
- **Crimson Text** — An open-source text serif by Sebastian Kosch (available on Google Fonts). Used for editorial lead paragraphs at 24px in `#666666`. Provides scholarly warmth between Apollon headings and Graphik body text.

### Hierarchy Table

| Role | Font | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|------|--------|-------------|----------------|-----|
| `display-xl` | Apollon | 64px | 400 | 1.25 | 0 | Hero h1, page banner titles |
| `display-md` | Apollon | 30px | 400 | 1.25 | 0 | Section headings (h3) |
| `title-lg` | Apollon | 26px | 400 | 1.62 | 0 | Content h2 within articles |
| `title-md` | Apollon | 22px | 400 | 1.36 | 0 | Nav links, sub-section titles |
| `title-sm` | Apollon | 18px | 400 | 1.22 | 0 | Card headings (h4) |
| `body-lg` | Crimson Text | 24px | 400 | 1.5 | 0 | Editorial lead/intro paragraphs |
| `body-md` | Graphik | 16px | 400 | 1.25 | 0 | Body text, UI labels, nav prose |
| `body-sm` | Graphik | 14px | 400 | 1.43 | 0 | Captions, secondary info |
| `button` | Graphik | 16px | 400 | 1.25 | 0 | CTA button labels |
| `nav-link` | Apollon | 22px | 400 | 1.23 | 0 | Primary navigation items |
| `caption` | Graphik | 14px | 400 | 1.43 | 0 | Image captions, metadata |

### Principles

- **All headings are lowercase** — `text-transform: lowercase` is applied globally to all Apollon heading elements. This is a deliberate brand decision; never override it to uppercase or title case.
- **Single weight strategy** — the entire system uses weight 400 only. Hierarchy is achieved purely through size and font-family contrast (Apollon vs. Graphik vs. Crimson Text), never through bold.
- **Serif as accent, not default** — Crimson Text appears only for editorial lead-in paragraphs in the Discover/History sections, signaling "this is important narrative content."
- **Google Fonts fallback**: `@import url('https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap')` — Apollon and Graphik require commercial licenses; use Playfair Display + Inter for prototyping.

---

## Layout

### Spacing System

Base unit: **4px**. Named scale aligned to common padding values observed in the UI.

| Token | Value | Use |
|-------|-------|-----|
| `xxs` | 4px | Micro gaps, icon spacing |
| `xs` | 8px | Compact list item padding |
| `sm` | 12px | Tight internal padding |
| `md` | 16px | Default container padding |
| `lg` | 20px | Button padding, card inner padding |
| `xl` | 24px | Section sub-element spacing |
| `xxl` | 32px | Between-card gap |
| `section` | 48px | Between-section vertical rhythm |
| `hero` | 80px | Hero section vertical padding |

### Grid & Container

- **Navigation**: horizontal padding `30px` on each side
- **Content sections**: full-width at mobile; constrained to ~1200px max at desktop with auto margins
- **Hero images**: 100vw full-bleed, no container constraints
- **Card grid**: 3-column on desktop, 1-column stacked on mobile with standard 16–24px gutter

### Whitespace Philosophy

The system uses generous breathing room inspired by the palace's formal axes. Hero sections typically fill the full viewport height with photography. Content sections below alternate between the parchment canvas and white backgrounds to create visual rhythm without borders or shadows. Vertical spacing between sections is never less than `48px`; between major page-level sections it reaches `80px` or more.

---

## Elevation & Depth

| Level | Treatment | Example Use |
|-------|-----------|-------------|
| 0 — Flat | No shadow, no border | Default cards, buttons, content blocks |
| 1 — Color plane | Different background color (e.g., `#F1EFEA` vs `#FFFFFF`) | Section alternation, footer |
| 2 — Overlay | `rgba(0,0,0,0.70–0.95)` over photography | Hero text legibility, mobile menu |
| 3 — Dark surface | `#0F0F0F` or `#171717` solid background | Navigation header, dark hero |

### Shadow Philosophy

The Versailles system uses **zero box shadows**. This is a firm brand rule — the flat, geometric French Baroque sensibility extends to the digital UI. Depth is communicated entirely through color planes (light cream → white → dark near-black) and photographic overlay opacity. There are no `box-shadow` values in the entire design system.

### Decorative Depth Effects

- Full-bleed hero photography acts as the primary atmospheric layer
- Dark gradient overlays (`rgba(0,0,0,0.3–0.75)`) soften image-to-text contrast
- The gold `#BA9E66` divider line appears as a horizontal rule between some sections, acting as a visual anchor

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `none` | 0px | Buttons (all variants), cards, inputs, nav elements |
| `xs` | 2px | Negligible, effectively unused |
| `sm` | 4px | Very minor rounding if needed in future extensions |
| `md` | 4px | Reserved |
| `lg` | 8px | Any third-party UI widgets |
| `xl` | 12px | Reserved for alerts or toasts |

The entire Versailles design system uses **0px border-radius** on all primary interactive and structural elements. Buttons are rectangular, cards are rectangular, inputs are borderless. This is consistent across all pages.

### Photography & Imagery

- **Aspect ratios**: Hero images fill full viewport width and typically 90–100vh. Card thumbnails maintain a consistent approximately 4:3 or 3:2 landscape crop.
- **Crop treatment**: Photography is center-cropped, focusing on architectural symmetry — fountains, garden axes, palace facades.
- **Border treatment**: No image borders, no rounded corners on images. Full-bleed is the norm.
- **Overlay**: Dark semi-transparent overlays (30–75% opacity) are applied over hero images to ensure white text legibility. The cream canvas `rgba(241,239,234,0.8)` appears as a semi-transparent card background over imagery.

---

## Components

### Buttons

**Primary CTA**: Gold background `#BA9E66`, black text `#000000`, 0px radius, 20px padding all sides.
- The arrow `→` character is appended directly to button text (e.g., "Support Versailles →") — a Versailles-specific typographic convention.
- No border. On hover, background darkens to `#A08A52`.

**Secondary CTA**: Transparent background, 1px solid gold border, gold text, same 20px padding, 0px radius.

**Ghost/text link**: Gold-colored text only with no border or background. Used inline.

All buttons use Graphik 16px weight 400. There is no bold variant.

### Cards

**Content card**: White background `#FFFFFF`, 0px radius, 1px `#D8D8D8` border, 24px padding. Heading in Apollon lowercase. Body in Graphik 16px `#333333`.

**Feature card (on parchment)**: Warm cream `#F1EFEA` background, no border, 24px padding. Often used for "choosin your ticket" type sections with Apollon h3 at 30px.

**Image-overlay card**: Full-bleed photography with semi-transparent cream overlay `rgba(241,239,234,0.8)`. Title in Apollon lowercase. Used for estate navigation cards.

### Navigation

**Desktop header (interior pages)**: `#0F0F0F` background, white text, Apollon 22px for primary nav items, 30px horizontal padding. Flat — no border or shadow on the bar itself.

**Desktop header (homepage)**: Transparent over the hero image, white text — creates a seamless immersive entry.

**Mobile menu**: Full-screen overlay `rgba(0,0,0,0.95)`, white text, displayed as a drawer. Activated by a hamburger icon labeled "Menu burger (EN)".

**Skip link**: Accessible skip-to-main-content link present at top of DOM.

### Footer

Parchment `#F1EFEA` background, `#333333` text, Graphik 16px. Organized in columns with a "practical information" header in Apollon lowercase. Contains opening hours, access info, and social links.

### Inputs & Forms

Input fields are minimalist — transparent background, no border frame, white text (on dark), 10px top/bottom padding. The newsletter signup form appears with a Crimson Text h2 at 22px. No visible border-radius, no box-shadow.

---

## Do's and Don'ts

**Do:**
- Render all headings (h1–h4 in Apollon) in lowercase — this is a non-negotiable brand rule
- Use `#BA9E66` gold exclusively for CTAs and decorative gold elements; never for body text or backgrounds
- Use full-bleed photography as the primary visual storytelling medium
- Apply dark overlays (30–75% opacity) over photography before placing light text
- Maintain the three-font system: Apollon for headings, Graphik for UI, Crimson Text for editorial leads
- Use 0px border-radius on all interactive elements — buttons, cards, inputs
- Append the `→` arrow character to CTA button text labels, without a space before the arrow
- Allow generous whitespace (min 48px) between content sections

**Don't:**
- Never use title case, sentence case, or uppercase on any Apollon heading — always `text-transform: lowercase`
- Never add box-shadows anywhere in the UI — depth is achieved through color planes only
- Never apply the gold `#BA9E66` as a text color for body copy — it is a background/accent color only (except for inline links in specific contexts)
- Never use border-radius larger than 0px on buttons or cards
- Never combine bold weight with Apollon — the system uses weight 400 throughout
- Never place dark text directly on photography without a semi-transparent overlay
- Never use more than three font families in a single interface
- Don't mix the warm parchment canvas with a pure cold-grey background — stick to the warm palette family

---

## Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 768px | Single-column layout; hamburger nav with full-screen overlay; hero h1 reduces to ~36–40px; card grids stack vertically |
| Tablet | 768px–1024px | 2-column card grids; nav remains hamburger; hero at full width |
| Desktop | > 1024px | 3-column card grids; full horizontal navigation bar visible; hero at 100vw |

### Touch Targets

- CTA buttons: 20px padding all sides — minimum 56px touch height on mobile
- Navigation items: large Apollon text at 22px with generous line spacing
- Footer links: 16px Graphik with normal line height — may need additional padding boost on mobile

### Collapsing Strategy

- **Navigation**: Collapses immediately to hamburger icon + "Menu burger (EN)" label at mobile widths. Triggered overlay is full-screen, not a slide-in drawer.
- **Card grids**: 3-column → 2-column → 1-column as viewport narrows. No breakpoint for 2-column on mobile; always single-column.
- **Hero typography**: Display XL (64px) scales down proportionally; maintain lowercase transformation at all sizes.
- **Footer**: Multi-column grid collapses to single column, stacking information groups vertically.

### Image Behavior

- Hero images: `object-fit: cover`, full viewport width, maintain aspect ratio at all sizes
- Card thumbnails: `object-fit: cover` within fixed-height containers; center crop preserved
- No lazy-loading artifacts that break the immersive feel — images load at `domcontentloaded`

---

## Agent Prompt Guide

### Quick Color Reference

- Primary (Versailles gold): `#BA9E66`
- Primary active: `#A08A52`
- Canvas (parchment background): `#F1EFEA`
- Canvas white: `#FFFFFF`
- Surface dark (hero/nav): `#0F0F0F` to `#171717`
- Ink (body text): `#333333`
- Muted text: `#666666`
- On-dark text: `#FFFFFF`
- Hairline (borders): `#D8D8D8`
- Gold CTA text: `#000000`

### Example Component Prompts

**Hero Section:**
"Create a hero section with a full-bleed landscape photograph of a palace or formal garden. Apply a semi-transparent dark overlay (rgba(0,0,0,0.6)) over the image. Place a headline in Apollon (or Playfair Display as fallback), 64px, weight 400, lowercase only, color #FFFFFF, centered. Below it, a gold CTA button #BA9E66 with black text, 0px border-radius, 20px padding, Graphik 16px, reading 'Plan your visit →'."

**Card:**
"Create a content card on a white (#FFFFFF) background. 0px border-radius. 1px solid #D8D8D8 border. 24px padding. Card heading in Apollon (or Playfair Display), 22px, weight 400, lowercase, color #333333. Body copy in Graphik (or Inter), 16px, weight 400, color #333333, line-height 1.25. Bottom CTA: transparent background, 1px solid #BA9E66 border, color #BA9E66, 20px padding, 0px radius."

**Button Set:**
"Primary button: background #BA9E66, 0px border-radius, 20px padding all sides, Graphik/Inter 16px weight 400 color #000000, no border, append → to label. Secondary button: transparent background, 1px solid #BA9E66 border, 0px radius, same padding, text color #BA9E66."

**Navigation Bar:**
"Create a navigation bar with background #0F0F0F (near-black). 30px horizontal padding. Brand logo left-aligned. Nav items right: Apollon (or Playfair Display) 22px weight 400 color #FFFFFF, lowercase. No border, no shadow, no border-radius."

**Editorial Lead:**
"Use Crimson Text (Google Fonts), 24px, weight 400, color #666666, line-height 1.5, for introductory/lead paragraphs that precede body copy. This creates a three-tier typographic hierarchy: Apollon heading → Crimson Text lead → Graphik body."

### Iteration Guide

1. Start with `#F1EFEA` (warm parchment) as your page background — never cold grey
2. Load three fonts: Apollon/Playfair Display for headings, Graphik/Inter for UI, Crimson Text for editorial leads
3. Apply `text-transform: lowercase` to every heading element — this is the defining brand rule
4. Use `#BA9E66` only for CTA buttons and decorative gold dividers — not for text or backgrounds
5. Set border-radius to 0 on all buttons, cards, and inputs
6. Never add box-shadows — use color plane contrast for depth
7. Layer white text over dark overlays on photography; never place dark text directly on images
8. Check contrast: `#FFFFFF` on `#0F0F0F` (nav) — 19.6:1 passing AAA; `#000000` on `#BA9E66` (button) — 5.2:1 passing AA
