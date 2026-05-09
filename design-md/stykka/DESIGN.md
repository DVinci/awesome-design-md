---
version: alpha
name: Stykka
description: |
  Stykka is a Danish design company building circular, lifetime kitchens. The visual identity is
  radically minimal — pure black and white, a single typeface (Inter) with tight negative tracking,
  and zero decorative chrome. The hero experience uses a full-black canvas with white typography;
  all other pages snap to white. Ghost-style CTA buttons with a fine 8px radius reinforce the
  honest-materials brand philosophy: nothing superfluous, nothing hidden.

colors:
  primary: "#000000"
  primary-active: "#1A1A1A"
  canvas: "#FFFFFF"
  surface: "#F5F5F5"
  surface-dark: "#000000"
  ink: "#000000"
  body: "#000000"
  muted: "#8F8F8F"
  subtle: "#A6A6A6"
  on-dark: "#FFFFFF"
  hairline: "#E5E5E5"
  divider: "#B8B8B8"

typography:
  display-xl:
    fontFamily: "\"Inter Variable\", Inter, sans-serif"
    fontSize: 46px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -1.85px

  display-md:
    fontFamily: "\"Inter Variable\", Inter, sans-serif"
    fontSize: 30px
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -1.25px

  title-lg:
    fontFamily: "\"Inter Variable\", Inter, sans-serif"
    fontSize: 25px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -1.25px

  title-md:
    fontFamily: "\"Inter Variable\", Inter, sans-serif"
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.5px

  body-lg:
    fontFamily: "\"Inter Variable\", Inter, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -0.6px

  body-md:
    fontFamily: "Inter, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: -0.5px

  body-sm:
    fontFamily: "Inter, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0

  button:
    fontFamily: "\"Inter Variable\", Inter, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -0.5px

  nav-link:
    fontFamily: "\"Inter Variable\", Inter, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.5px

  caption:
    fontFamily: "\"Azeret Mono\", monospace"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.18px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 36px
  xxl: 48px
  section: 80px
  footer: 40px

rounded:
  sm: 4px
  md: 8px
  lg: 12px
  pill: 40px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "10px 36px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "10px 36px"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "10px 36px"
    border: "1px solid {colors.on-dark}"

  button-secondary-light:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "10px 36px"
    border: "1px solid {colors.primary}"

  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"

  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.hairline}"

  text-input-focused:
    border: "1px solid {colors.primary}"

  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    border: "0 0 1px 0 solid {colors.hairline}"

  top-nav-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"

  hero-section:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
---

# Stykka Design System

## Overview

Stykka presents one of the most disciplined visual systems in the home-goods space: a pure binary palette of black and white, a single typeface family applied with surgical consistency, and negative letter-spacing as the primary brand differentiator. There are no gradients, no drop shadows, no decorative accents — just the material honesty the brand preaches in its kitchen products expressed pixel-perfectly in its interface. The dark hero canvas against an otherwise all-white site creates a powerful threshold moment that mirrors Stykka's narrative of contrast: old kitchen culture versus circular design.

The Framer-powered site uses Inter Variable across all typographic roles, from the tightly tracked 46px headlines to the 14px body copy. The monospaced Azeret Mono appears only as a scrolling-arrow accent in the hero, an architectural detail that signals craft without shouting. Ghost-style buttons — transparent background, 8px radius, 10px×36px padding — are the sole interactive primitive. The design system scales cleanly from editorial brand storytelling to functional product configuration with no visual mode changes.

### Key Visual Characteristics

- **Binary palette**: pure `#000000` and `#FFFFFF` with no mid-tones used as brand colors
- **Negative tracking**: all display sizes use -1.25px to -1.85px letter-spacing — the clearest fingerprint of the Stykka type system
- **Ghost buttons only**: CTAs are transparent with an outline stroke, never filled with a brand color
- **Single typeface**: Inter Variable handles display, body, nav, and button — zero font switching
- **Hero / content duality**: black canvas hero section transitions to a white-surface editorial layout
- **Zero elevation**: no box-shadows, no card depth — separation achieved purely through whitespace and hairline borders
- **Monospace accent sparingly**: Azeret Mono used only for decorative directional cues (arrow glyphs)
- **Tight line-heights**: display text uses 1.0 line-height, body uses 1.25 — compressed and editorial

### Positioning

Stykka's design language reads as a Nordic premium editorial brand — closer to a fashion house or architecture firm than a kitchen retailer. It differentiates from IKEA's primary-color approachability and from bespoke kitchen brands' ornate luxury by occupying a confident minimalism that communicates: quality, permanence, restraint.

---

## Colors

### Brand & Accent

| Token | Hex | Use |
|-------|-----|-----|
| `primary` | `#000000` | Primary ink, button fill on light surfaces |
| `primary-active` | `#1A1A1A` | Hover state for filled black buttons |
| `on-dark` | `#FFFFFF` | Text and ghost button strokes on dark canvas |

### Surface

| Token | Hex | Use |
|-------|-----|-----|
| `canvas` | `#FFFFFF` | Page background on all non-hero sections |
| `surface` | `#F5F5F5` | Subtle alternate section backgrounds |
| `surface-dark` | `#000000` | Hero section, full-bleed dark panels |

### Text

| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#000000` | All headings and body copy on white canvas |
| `body` | `#000000` | Paragraph text on light backgrounds |
| `muted` | `#8F8F8F` | Footer labels, secondary metadata |
| `subtle` | `#A6A6A6` | Pull-quote / subheading contrast text |
| `divider` | `#B8B8B8` | Section dividers and horizontal rules |

### Semantic

| Token | Hex | Use |
|-------|-----|-----|
| `hairline` | `#E5E5E5` | Card borders, input borders, separator lines |

No explicit success/warning/error states are defined in the public-facing marketing site. Use standard accessible green `#22C55E` / amber `#F59E0B` / red `#EF4444` if semantic states are required in product UI.

---

## Typography

### Font Family

**Inter Variable** — a variable font served via Framer's CDN. The site loads three variants: `Inter` (standard), `Inter Variable`, and `Azeret Mono`. For external projects, load via Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Azeret+Mono&display=swap" rel="stylesheet">
```

Fallback stack: `"Inter Variable", Inter, -apple-system, BlinkMacSystemFont, sans-serif`

### Hierarchy Table

| Role | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|--------|-------------|----------------|-----|
| `display-xl` | 46px | 500 | 1.0 | -1.85px | Hero headline, primary page title |
| `display-md` | 30px | 500 | 1.05 | -1.25px | Section headings |
| `title-lg` | 25px | 500 | 1.0 | -1.25px | Pull-quote subheadings, large callouts |
| `title-md` | 22px | 500 | 1.1 | -0.5px | Tertiary headings, featured metadata |
| `body-lg` | 16px | 500 | 1.0 | -0.6px | Emphasized body, footer brand tagline |
| `body-md` | 14px | 400 | 1.25 | -0.5px | Standard paragraph copy |
| `body-sm` | 12px | 400 | 1.4 | 0 | Footer labels, fine print |
| `button` | 14px | 500 | 1.0 | -0.5px | All CTA button text |
| `nav-link` | 14px | 500 | 1.25 | -0.5px | Navigation links |
| `caption` | 18px | 400 | 1.0 | -0.18px | Azeret Mono accent glyphs, arrows |

### Principles

- **Weight economy**: only two weights in use — 400 (regular) for body, 500 (medium) for everything structural. No bold, no light.
- **Negative tracking always**: every typographic role except `body-sm` uses negative letter-spacing. This compression is non-negotiable for Stykka brand fidelity.
- **Line-height compression**: headlines use 1.0 (type-size equals line-height), body uses 1.25 — tighter than most systems.
- **No italic**: the site uses no italic or oblique treatments anywhere.

---

## Layout

### Spacing System

Base unit: **4px**. All spacing tokens are multiples of 4px.

| Token | Value | Use |
|-------|-------|-----|
| `xxs` | 4px | Micro gaps, inline element spacing |
| `xs` | 8px | Tight element spacing, icon margins |
| `sm` | 12px | Button vertical padding |
| `md` | 16px | Default inner padding |
| `lg` | 24px | Card internal padding, content gaps |
| `xl` | 36px | Button horizontal padding |
| `xxl` | 48px | Section sub-spacing |
| `section` | 80px | Between major page sections |
| `footer` | 40px | Footer outer padding (all sides) |

### Grid & Container

- Maximum content width: approximately **1200px** centered
- Navigation bar: full-width with `40px` horizontal padding
- Hero section: full-viewport-width, no max-width constraint on imagery
- Content columns: single column for body copy, 2-column grid for feature pairs

### Whitespace Philosophy

Stykka uses whitespace aggressively as a brand signal — generous vertical breathing room between sections reinforces the "less is more" product philosophy. Sections breathe at 80px apart. The homepage scrolls through distinct chapters separated by whitespace rather than visual dividers. Padding is never symmetric — horizontal often exceeds vertical in section containers.

---

## Elevation & Depth

### Levels

| Level | Treatment | Example Use |
|-------|-----------|-------------|
| 0 — Flat | No shadow, no border | Hero section, full-bleed panels |
| 1 — Hairline | `1px solid #E5E5E5` border only | Cards, form inputs |
| 2 — Dark canvas | Full `#000000` background section | Hero, testimonial marquee |

### Shadow Philosophy

**Zero elevation** — Stykka uses no `box-shadow` anywhere on the site. Depth is created entirely through background color contrast (white section vs. black section) and whitespace. This is a deliberate design statement aligned with the brand's material honesty philosophy: surfaces are flat because real wood is flat.

### Decorative Depth

The sole depth effect is the full-bleed dark hero section which uses a full-screen video or image overlay. No gradients, glows, or blur effects are present.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `sm` | 4px | Minor UI element rounding |
| `md` | 8px | CTA buttons ("Start building", "Contact Stykka") |
| `lg` | 12px | Larger card or modal containers |
| `pill` | 40px | Carousel navigation dots/controls |

The dominant shape language is **sharp to slightly rounded** — the 8px radius on buttons is the maximum curvature for interactive elements. Most layout containers use `0px` radius. The site leans flat and architectural.

### Photography & Imagery

- Aspect ratios: landscape panoramic (approx. 16:9 and wider) for hero; portrait near-square for product details
- Treatment: photography bleeds full-width, zero border radius on hero images
- Style: natural light, warm tones, real-wood textures, Scandinavian interior settings
- No image borders or frames — imagery is always edge-to-edge

---

## Components

### Buttons

Stykka uses **ghost-style buttons exclusively** — the brand has no filled primary color CTA. On dark backgrounds (hero), the ghost button uses white stroke and white text. On light backgrounds, a dark stroke and dark text variant is used.

**Ghost button (dark surface — primary CTA):**
- Background: `transparent` (rendered as `rgba(255, 255, 255, 0)`)
- Border: `1px solid #FFFFFF` (implied — no explicit border computed, uses outline via Framer)
- Text: `#FFFFFF`, Inter Variable 14px/500/-0.5px
- Padding: `10px 36px`
- Border radius: `8px`
- Examples: "Start building", "Contact Stykka"

**Ghost button (light surface):**
- Same dimensions as dark variant
- Border: `1px solid #000000`
- Text: `#000000`

**No filled / colored buttons exist** in the brand's public interface.

### Navigation

The top navigation is transparent/white with black text. On the hero section, nav links are rendered in white. Nav links use Inter Variable 14px / weight 500 / -0.5px tracking. The mobile nav uses a collapsed menu trigger. Language selector ("English / Danish") is inline in the nav.

- Nav height: approximately 56px
- Sticky on scroll: yes (Framer-controlled)
- Logo: wordmark-only "Stykka" — not an icon mark

### Cards (Journal / Product)

Journal cards use the white canvas with hairline borders:
- Background: `#FFFFFF`
- Border: `1px solid #E5E5E5`
- Border radius: `8px`
- Padding: `24px`
- No box-shadow
- Heading: Inter 22px / 500 / -0.5px
- Body: Inter 14px / 400 / -0.5px / `#000000`

### Forms & Inputs

The "Start building" configurator uses native select elements with browser-default styling, indicating forms are functional/utilitarian. When styling custom inputs to match the brand:
- Border: `1px solid #E5E5E5`
- Focused border: `1px solid #000000`
- Border radius: `4px`
- Padding: `12px 16px`
- Font: Inter 14px / 400

---

## Do's and Don'ts

### Do

- Use negative letter-spacing on **all** display and heading text (minimum -0.5px, up to -1.85px for largest sizes)
- Keep the canvas pure white (`#FFFFFF`) and hero sections pure black (`#000000`) — no off-white, no charcoal
- Use Inter or Inter Variable exclusively — do not introduce secondary display or serif fonts
- Use ghost-style buttons (transparent + border) rather than filled color buttons
- Give headings a line-height of exactly 1.0 at display sizes — no extra leading
- Maintain generous vertical spacing (80px+) between major page sections
- Use weight 500 for everything structural (headings, nav, buttons) and 400 for body prose only

### Don't

- Don't add `box-shadow` to any element — the brand uses zero elevation
- Don't introduce accent colors (no blue, green, red, yellow) in brand contexts — the palette is strictly monochrome
- Don't use font-weight 700 (bold) — Stykka's hierarchy is expressed through size and tracking, not boldness
- Don't round containers above `12px` — the brand shape language is flat and architectural
- Don't use positive letter-spacing (tracking wider than normal) on any text — all roles tighten, none open
- Don't use italic or oblique type — the brand uses no italic treatment anywhere
- Don't fill buttons with color backgrounds — ghost/outline only

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 768px | Nav collapses to hamburger; hero headline reduces to ~28px; horizontal padding reduces to 20px |
| Tablet | 768–1024px | Two-column layout switches to single-column; button groups stack |
| Desktop | 1024px+ | Full layout with panoramic hero images, multi-column feature grids |

### Touch Targets

All CTA links use `10px 36px` padding at 14px font size, resulting in a minimum 34px tap height. For touch compliance, minimum button height should be 44px on mobile — add `min-height: 44px` in mobile overrides.

### Collapsing Strategy

- Navigation: hamburger menu on mobile; the Framer nav uses built-in responsive variants
- Hero: headline font size reduces proportionally; hero video/image maintains full viewport width
- Content sections: single-column stacking; generous vertical padding preserved even at small sizes
- Feature grids: 2-col → 1-col; cards maintain full width

### Image Behavior

- Hero images: `width: 100%; object-fit: cover` — fills full viewport
- Product imagery: aspect-ratio locked (16:9 landscape or 3:4 portrait depending on context)
- No `border-radius` on any imagery — edges remain sharp

---

## Agent Prompt Guide

### Quick Color Reference

- Primary (ink/black): `#000000`
- Canvas (background): `#FFFFFF`
- Surface dark (hero): `#000000`
- On-dark text: `#FFFFFF`
- Muted text: `#8F8F8F`
- Subtle text: `#A6A6A6`
- Hairline (borders): `#E5E5E5`
- Divider: `#B8B8B8`

### Example Component Prompts

**Hero Section:**
"Create a full-viewport hero section on `#000000` background. Headline in Inter Variable, 46px, weight 500, line-height 1.0, letter-spacing -1.85px, color `#FFFFFF`. Subheadline 30px, weight 500, -1.25px tracking, `#FFFFFF`. Ghost CTA button: transparent background, `1px solid #FFFFFF` border, 8px border-radius, 10px 36px padding, Inter Variable 14px/500/-0.5px, white text."

**Content Section:**
"Create a white `#FFFFFF` section with 80px vertical padding. Section heading Inter Variable 30px, weight 500, letter-spacing -1.25px, line-height 1.05, color `#000000`. Body copy Inter 14px, weight 400, letter-spacing -0.5px, line-height 1.25, color `#000000`. No shadows, no decorative elements."

**Card:**
"Create a journal/product card on `#FFFFFF` background. Border: `1px solid #E5E5E5`, border-radius 8px, no shadow. Padding 24px. Heading Inter 22px/500/-0.5px/`#000000`. Body copy Inter 14px/400/-0.5px/`#000000`."

**Button Set:**
"Ghost button on dark: transparent background, `1px solid #FFFFFF` border, 8px radius, 10px 36px padding, Inter Variable 14px/500/-0.5px, `#FFFFFF` text. Ghost button on light: same geometry, `1px solid #000000` border, `#000000` text."

**Navigation:**
"Top nav bar, `#FFFFFF` background, `1px solid #E5E5E5` bottom border. Nav links: Inter Variable 14px, weight 500, letter-spacing -0.5px, color `#000000`. Logo wordmark left-aligned. CTA ghost button right-aligned."

### Iteration Guide

1. Start with `#FFFFFF` canvas for all non-hero sections; use `#000000` only for the hero/marquee
2. Load Inter Variable from Google Fonts — `wght@400;500` is sufficient for all roles
3. Apply negative letter-spacing to every text element — start at -0.5px and increase for larger sizes
4. Use weight 500 for any structural text; 400 only for body prose
5. Buttons are always ghost (transparent + border) — never filled with a color background
6. Maintain 80px minimum vertical gap between page sections
7. Never add box-shadow anywhere — use hairline borders `#E5E5E5` for card separation
8. Line-height at display sizes must be 1.0 — not 1.2 or 1.5
