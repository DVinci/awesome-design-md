---
version: alpha
name: Versace
description: |
  Versace embodies Italian luxury fashion rooted in maximalism, mythology, and architectural precision.
  The visual identity is built on a stark black-and-white canvas with zero ornamentation beyond typographic contrast —
  two typefaces (Baskervville serif and Engravers Gothic sans-serif) carry the entire brand expression.
  Flat geometry, generous negative space, and obsessive letter-spacing discipline create an aura of
  uncompromising opulence without decoration.

colors:
  primary: "#000000"
  primary-active: "#212121"
  ink: "#0A0A0A"
  body: "#212121"
  muted: "#767676"
  canvas: "#FEFEFE"
  surface: "#FFFFFF"
  surface-alt: "#F5F5F5"
  surface-dark: "#000000"
  on-dark: "#FFFFFF"
  hairline: "#E0E0E0"
  hairline-dark: "#D6D6D6"
  input-border: "#E0E0E0"
  semantic-error: "#BF2D2D"
  semantic-muted-text: "#696969"

typography:
  display-xl:
    fontFamily: "Baskervville, \"Times New Roman\", Times, serif"
    fontSize: 26px
    fontWeight: 625
    lineHeight: 1.15
    letterSpacing: 2.6px
  display-md:
    fontFamily: "Baskervville, \"Times New Roman\", Times, serif"
    fontSize: 21px
    fontWeight: 625
    lineHeight: 1.28
    letterSpacing: 0.6px
  title-lg:
    fontFamily: "\"Engravers Gothic\", Helvetica, Arial, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.16
    letterSpacing: 2.6px
  title-md:
    fontFamily: "Baskervville, \"Times New Roman\", Times, serif"
    fontSize: 13px
    fontWeight: 625
    lineHeight: 1.23
    letterSpacing: 0.32px
  body-lg:
    fontFamily: "Baskervville, \"Times New Roman\", Times, serif"
    fontSize: 13px
    fontWeight: 575
    lineHeight: 1.55
    letterSpacing: 0.12px
  body-md:
    fontFamily: "Baskervville, \"Times New Roman\", Times, serif"
    fontSize: 13px
    fontWeight: 525
    lineHeight: 1.55
    letterSpacing: 0.12px
  body-sm:
    fontFamily: "Baskervville, \"Times New Roman\", Times, serif"
    fontSize: 11px
    fontWeight: 525
    lineHeight: 1.45
    letterSpacing: 0.32px
  button:
    fontFamily: "\"Engravers Gothic\", Arial, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 1.8px
  nav-link:
    fontFamily: "Baskervville, \"Times New Roman\", Times, serif"
    fontSize: 13px
    fontWeight: 625
    lineHeight: 1.2
    letterSpacing: 0.32px
  caption:
    fontFamily: "\"Engravers Gothic\", Arial, sans-serif"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 1.8px

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
  xs: 0px
  sm: 0px
  md: 0px
  lg: 0px
  pill: 0px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "8px 24px"
    border: "1px solid {colors.primary}"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "8px 24px"
    border: "1px solid {colors.primary-active}"

  button-primary-disabled:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "8px 24px"
    border: "1px solid {colors.hairline}"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "8px 24px"
    border: "1px solid {colors.ink}"

  button-secondary-active:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "8px 24px"
    border: "1px solid {colors.ink}"

  card-base:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xs}"
    padding: "0px"
    border: "none"

  product-tile:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: "0px 0px 4px"
    border: "none"

  text-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: "12px 8px"
    border: "1px solid {colors.input-border}"

  text-input-focused:
    border: "1px solid {colors.ink}"

  text-input-disabled:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.muted}"
    border: "1px solid {colors.hairline}"

  top-nav:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    border: "none"

  footer:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"

  badge:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.xs}"
    padding: "5px 0px 6px"
    border: "none"
---

# Versace Design System

## Overview

Versace's digital identity channels the Maison's founding philosophy of luxurious audacity and classical Italian craftsmanship into a resolutely minimal digital grammar. The site is anchored by two typefaces — Baskervville (a contemporary serif echoing the brand's heritage in classical proportion) and Engravers Gothic (an all-caps grotesque reserved for labels, categories, and CTAs) — creating a visual hierarchy that reads as both archaic and intensely modern. The color system is absolute: black and white, with the barest infrastructure of grays to serve functional roles.

Every element leans into restraint to amplify impact. Buttons carry no radius, shadows are absent, and spacing is wide and deliberate. The brand identity is expressed entirely through typographic texture — variable-weight Baskervville delivering warmth in body copy, Engravers Gothic imposing authority in uppercase labels. Photography provides all the visual richness; the interface steps aside to let product imagery command the page.

**Key visual characteristics:**
- Pure flat geometry — zero border-radius on every interactive element
- Dual-typeface system: Baskervville (serif) for editorial content, Engravers Gothic (grotesque) for CTA and labels
- Absolute monochrome palette — near-black `#0A0A0A` ink on `#FEFEFE` canvas, no color accents
- Generous letter-spacing on Engravers Gothic (1.8px on CTAs, 2.6px on section labels) for luxury authority
- Universal uppercase text-transform on buttons and navigation categories
- No box-shadows or elevation — depth comes solely from photography and negative space
- Variable font weights on Baskervville (525 body, 575 semibold, 625 medium-bold) for tonal variation without font switching
- Full-bleed hero imagery with white or black text overlay — no translucent panels

**Positioning:** Versace's UI stands apart from luxury peers through its complete absence of decorative elements. Where Gucci uses maximalist patterns and Louis Vuitton uses warm browns, Versace commits to pure black-white contrast — making every pixel count and letting the product photography speak at full volume.

---

## Colors

### Brand and Accent

| Token | Hex | Use |
|-------|-----|-----|
| `primary` | `#000000` | CTA button fill, primary interactive elements |
| `primary-active` | `#212121` | Hover and active states for black CTAs |
| `ink` | `#0A0A0A` | Primary heading and body text |
| `surface-dark` | `#000000` | Dark hero overlays, inverted sections |

Versace uses no chromatic accent color. The brand's iconic gold (Medusa gold) does not appear in web UI tokens — it is reserved for physical brand applications (logo embossing, hardware). The digital interface is deliberately achromatic.

### Surface

| Token | Hex | Use |
|-------|-----|-----|
| `canvas` | `#FEFEFE` | Default page background |
| `surface` | `#FFFFFF` | Cards, footer, product tiles |
| `surface-alt` | `#F5F5F5` | Secondary backgrounds, input disabled states |

### Text

| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#0A0A0A` | Primary headings and body text |
| `body` | `#212121` | Default paragraph text, input text |
| `muted` | `#767676` | Secondary text, placeholder, disabled labels |
| `semantic-muted-text` | `#696969` | Privacy/legal copy, tertiary information |
| `on-dark` | `#FFFFFF` | Text on dark/black surfaces |

### Semantic

| Token | Hex | Use |
|-------|-----|-----|
| `semantic-error` | `#BF2D2D` | Form validation errors, error states |
| `hairline` | `#E0E0E0` | Input borders, dividers, separator lines |
| `hairline-dark` | `#D6D6D6` | Slightly darker dividers |

---

## Typography

### Font Families

**Baskervville** — A serif typeface with classical proportions, loaded via Google Fonts (`family=Baskervville`). Used for all editorial copy, headings, product names, navigation, and body text. Supports variable weight rendering (525, 575, 625) for tonal hierarchy within a single family.

**Engravers Gothic** — A geometric grotesque with strong vertical strokes. Loaded as a web font. Reserved for section labels, CTA buttons, footer headings, and category navigation — always uppercase with wide letter-spacing. Creates contrast with the warmth of Baskervville.

**Fallback stack:** `"Times New Roman", Times, serif` for Baskervville; `Helvetica, Arial, sans-serif` for Engravers Gothic.

### Hierarchy Table

| Role | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|--------|-------------|----------------|-----|
| `display-xl` | 26px | 625 | 1.15 | 2.6px | Hero section H1, campaign titles |
| `display-md` | 21px | 625 | 1.28 | 0.6px | Section headings H2 |
| `title-lg` | 13px | 500 | 1.16 | 2.6px | Section category labels (Engravers Gothic) |
| `title-md` | 13px | 625 | 1.23 | 0.32px | Sub-headings, bag titles |
| `body-lg` | 13px | 575 | 1.55 | 0.12px | Featured/lead copy, product names |
| `body-md` | 13px | 525 | 1.55 | 0.12px | Default body copy, descriptions |
| `body-sm` | 11px | 525 | 1.45 | 0.32px | Utility nav, secondary captions |
| `button` | 13px | 400 | 1.25 | 1.8px | All CTA and button labels (Engravers Gothic) |
| `nav-link` | 13px | 625 | 1.20 | 0.32px | Primary nav category links |
| `caption` | 11px | 400 | 1.40 | 1.8px | Footnotes, image captions (Engravers Gothic) |

### Typographic Principles

- **Weight as voice:** Baskervville's variable weight range (525–625) replaces color as the hierarchy signal. Heavier weight = more emphasis, not a different color.
- **Tracking as luxury signal:** Engravers Gothic always carries wide letter-spacing (1.8px minimum, 2.6px for section labels). Compressed tracking on this font would break the brand voice.
- **Uppercase discipline:** `text-transform: uppercase` is applied universally to Engravers Gothic — never to Baskervville. Mixing conventions destroys the font pairing's tension.
- **Display scale:** H1 at 26px is relatively restrained for luxury fashion; the drama comes from typography in the photography, not the UI chrome.
- **No italic styles used in UI** — italics appear only in editorial photography contexts.

---

## Layout

### Spacing System

Base unit: 8px. All spacing tokens are multiples of 4px.

| Token | Value | Use |
|-------|-------|-----|
| `xxs` | 4px | Micro spacing, inline icon gaps |
| `xs` | 8px | Tight spacing, button icon padding |
| `sm` | 12px | Input padding, compact element gaps |
| `md` | 16px | Standard element spacing |
| `lg` | 24px | Button padding horizontal, card internal spacing |
| `xl` | 32px | Section internal padding |
| `xxl` | 48px | Large component gaps |
| `section` | 80px | Inter-section vertical rhythm |

### Grid and Container

- Max container width: ~1300px (CSS var `--breakpoint-xlarge: 1300px`)
- Standard grid: 4-column mobile, 8-column tablet, 4-column product grid on desktop (luxury products need breathing room)
- Product listing: 4-up grid on desktop (1300px+), 3-up at 1025px, 2-up at 768px, 1-up on mobile
- Hero images: full-bleed 100vw, no max-width constraint

### Whitespace Philosophy

Versace pages breathe. Product category pages dedicate at least 80px of vertical space between editorial hero sections and the product grid. Navigation links are generously spaced. Negative space is not waste — it is the primary luxury signal. Crowding any component is a brand violation.

---

## Elevation and Depth

### Levels

| Level | Treatment | Example use |
|-------|-----------|-------------|
| 0 — Flat | No shadow, no border | Product tiles, body sections |
| 1 — Border | `1px solid #E0E0E0` hairline only | Input fields, subtle card separation |
| 2 — Surface | White background against canvas | Footer, modal backgrounds |
| 3 — Overlay | `rgba(0,0,0,0.3)` scrim | Cookie overlay backdrop |

### Shadow Philosophy

Versace uses **no box-shadow anywhere** in its UI. Depth is never simulated with shadows. Instead, depth is achieved through:
- Photography contrast (dark images on white backgrounds)
- Color contrast (black buttons on white surface)
- Typography weight contrast
- Hairline borders where absolute separation is required

Any shadow introduced to a Versace component would feel decorative and undermine the house's austere aesthetic.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `xs` | 0px | All interactive elements |
| `sm` | 0px | All cards and containers |
| `md` | 0px | All inputs |
| `lg` | 0px | All overlays and modals |
| `pill` | 0px | N/A — no pill shapes used |

**All elements are flat-cornered.** A single component with rounded corners would immediately break Versace's geometric discipline. The one exception is a very slight 2.5px radius on search inputs (system-level default, not brand-applied).

### Photography and Imagery

- **Aspect ratios:** Product tiles use portrait 3:4 or 2:3. Editorial heroes are free-crop, often extreme panoramic or full-portrait.
- **Treatment:** Full-bleed, no decorative borders, no rounded corners on images.
- **Overlay text:** Headline text placed directly on imagery using white or black depending on image tone — no scrim or translucent panel.
- **Product imagery:** Aspirational studio shots on clean white or black backgrounds; flat lay and on-model alternates.

---

## Components

### Buttons

**Primary Button** — Black fill, white text, zero radius, uppercase Engravers Gothic with 1.8px tracking.
- Background: `#000000`
- Text: `#FFFFFF`
- Font: Engravers Gothic, 13px, weight 400, uppercase, 1.8px letter-spacing
- Padding: `8px 24px`
- Border: `1px solid #000000`
- Radius: `0px`
- Hover: background shifts to `#212121`

**Secondary / Ghost Button** — Transparent fill, black border, black text. Same typography as primary.
- Background: `transparent`
- Text: `#0A0A0A`
- Border: `1px solid #0A0A0A`
- Padding: `8px 24px`
- Radius: `0px`

**Text Link CTA** — "View All" and "Discover" patterns appear as plain links — no border, no fill, Baskervville 13px weight 575, very subtle `0.12px` tracking. Underline on hover.

### Cards

**Product Tile** — The primary card component. Zero padding, zero radius, no border, no shadow. Consists of:
- Full-width portrait image (3:4 ratio)
- Product name: Baskervville 13px, weight 525, `#0A0A0A`
- Price: Baskervville 13px, weight 575, `#0A0A0A`
- No card container — tiles are purely content-stacked on transparent background

**Editorial Card** — Full-bleed imagery with Engravers Gothic section label and Baskervville title overlaid. No card border or background.

### Inputs and Forms

**Text / Email Input**
- Background: `#FFFFFF`
- Border: `1px solid #E0E0E0`
- Focused border: `1px solid #0A0A0A`
- Padding: `12px 8px`
- Font: Baskervville 13px, weight 525
- Radius: `0px`

**Newsletter Input** — Same as text input but wider, with adjacent submit arrow icon (no visible button label).

### Navigation

**Top Navigation** — Transparent background over page content. Links in Baskervville 13px, weight 625, `#000000`. Category labels (NEW IN, WOMEN, MEN, ACCESSORIES) in uppercase, weight 625, 0.32px tracking.

**Sub-navigation / Dropdown** — White background, Baskervville 13px body links, Engravers Gothic uppercase section headers within dropdowns.

**Utility Bar** (above main nav) — Baskervville 11px, weight 525, `#212121`. Contains Sign-In, Boutiques, editorial links.

### Badges and Tags

Category filter tags use Baskervville with weight 575, no background, no border. Effectively plain text filters. Engravers Gothic is used for section labels ("stories", "highlights") with `2.6px` letter-spacing and uppercase transform.

---

## Do's and Don'ts

**Do:**
- Use Baskervville for all editorial copy, product names, headings, and navigation
- Apply Engravers Gothic exclusively to CTA buttons, section labels, and footer headings — always uppercase
- Maintain `1.8px` minimum letter-spacing on all Engravers Gothic text; `2.6px` for section headers
- Use `0px` border-radius on every interactive element including buttons, inputs, and modals
- Let photography carry visual richness — keep UI chrome minimal and quiet
- Use variable font weights (525/575/625) within Baskervville for hierarchy instead of changing typefaces
- Apply `text-transform: uppercase` to Engravers Gothic and never to Baskervville
- Keep section padding at `80px` vertical minimum — Versace pages breathe

**Don't:**
- Don't use any accent color — no gold, no red, no blue in the UI layer (even though the brand has iconic gold)
- Don't add border-radius to any element — even 2px would violate the flat geometry
- Don't mix font roles: Baskervville on buttons or Engravers Gothic on body copy breaks the brand voice
- Don't use box-shadows or drop-shadows on any component
- Don't use italic Baskervville in UI contexts — italics are editorial-photography-only
- Don't compress letter-spacing on Engravers Gothic below `1.8px`
- Don't use lowercase text-transform on category labels or buttons
- Don't crowd components — maintain at least `24px` between interactive elements

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| `xxs` | 320px | Mobile baseline |
| `sm` | 544px | Small mobile |
| `md` | 768px | Tablet — 2-column product grid |
| `lg` | 1025px | Desktop — 3–4 column product grid |
| `xl` | 1200px | Wide desktop |
| `xlarge` | 1300px | Max content container width |
| `xxl` | 1920px | Full-width hero imagery |

### Touch Targets

- Minimum 44×44px for all interactive elements on mobile
- Navigation items: full-width tap targets on mobile
- Product tiles: full-tile tap area (image + text)

### Collapsing Strategy

- Navigation collapses to hamburger icon at tablet (768px) — sub-navigation becomes full-screen mobile drawer
- Product grid: 4-up (1300px+) → 3-up (1025px) → 2-up (768px) → 1-up (mobile)
- Hero typography scales down: H1 drops from 26px to approximately 18px on mobile
- Section spacing reduces from `80px` to `40px` on mobile

### Image Behavior

- Hero images: `width: 100vw`, `object-fit: cover`, no max-width constraint
- Product tile images: fixed aspect ratio `3:4`, `object-fit: cover`
- Images never receive border or border-radius regardless of viewport

---

## Agent Prompt Guide

### Quick Color Reference

- Primary (CTA): `#000000`
- Canvas (background): `#FEFEFE`
- Ink (text): `#0A0A0A`
- Surface (cards/footer): `#FFFFFF`
- Surface Alt: `#F5F5F5`
- Muted text: `#767676`
- Hairline (borders): `#E0E0E0`
- On dark: `#FFFFFF`
- Error: `#BF2D2D`

### Example Component Prompts

**Hero Section:**
"Create a full-bleed hero on a black (`#000000`) background with a full-width portrait photograph. Headline in Baskervville 26px, weight 625, white `#FFFFFF`, uppercase, 2.6px letter-spacing. CTA button below: black fill `#000000`, white text `#FFFFFF`, Engravers Gothic 13px uppercase 1.8px letter-spacing, `8px 24px` padding, zero border-radius, `1px solid #000000` border."

**Product Tile:**
"Create a product tile on a white `#FFFFFF` background. Full-width portrait image (3:4 ratio), zero radius, no border. Below: product name in Baskervville 13px weight 525 `#0A0A0A` with 0.12px letter-spacing. Price in Baskervville 13px weight 575 `#0A0A0A`. No card container — content stacked on transparent background with `4px` bottom padding."

**Button Set:**
"Primary button: black `#000000` background, white `#FFFFFF` text, Engravers Gothic 13px weight 400 uppercase 1.8px letter-spacing, `8px 24px` padding, zero border-radius, `1px solid #000000` border. Secondary button: transparent background, `1px solid #0A0A0A` border, same font and padding as primary, text `#0A0A0A`."

**Navigation Bar:**
"Transparent top navigation. Brand logo centered (SVG, black). Left: category links (WOMEN, MEN, ACCESSORIES) in Baskervville 13px weight 625 uppercase 0.32px letter-spacing `#000000`. Right: utility icons (search, bag, account) as icon-only buttons. No background, no shadow, no border."

**Section Label:**
"Section category label in Engravers Gothic 13px weight 500 uppercase `#000000` 2.6px letter-spacing, followed by Baskervville heading in 21px weight 625 `#0A0A0A` 0.6px letter-spacing. Generous `80px` padding above the section."

### Iteration Guide

1. Start with `#FEFEFE` canvas — almost white, not pure white
2. Load Baskervville from Google Fonts (`family=Baskervville&display=swap`) and use variable weights (525, 575, 625) for hierarchy
3. Load Engravers Gothic for buttons and labels — always uppercase, always wide letter-spacing
4. Apply `border-radius: 0` globally — zero exceptions
5. No shadows anywhere — rely on borders and color contrast
6. Let photography fill all hero and editorial zones — the interface is purely functional chrome around it
7. Test that all Engravers Gothic text has at least `1.8px` letter-spacing before shipping
