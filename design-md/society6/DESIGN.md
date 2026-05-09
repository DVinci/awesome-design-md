---
version: alpha
name: Society6
description: |
  Society6 is an artist-marketplace platform for print-on-demand home decor, wall art,
  and lifestyle products. Its design language pairs a warm parchment canvas with bold
  flat-black typography and zero-radius primary CTAs, creating an editorial, gallery-like
  feeling that keeps artist content centre-stage. The dual-font system — Essonnes serif for
  display text and Greycliff CF sans-serif for UI — reinforces the platform's positioning
  between art gallery and accessible consumer e-commerce.

colors:
  primary: "#000000"
  primary-active: "#211D1C"
  canvas: "#FBFAF6"
  surface: "#F2ECE4"
  surface-secondary: "#F4F4F4"
  ink: "#000000"
  body: "#2C2C2C"
  muted: "#5C5C5C"
  subtle: "#696969"
  on-dark: "#FFFFFF"
  hairline: "#EAEAEA"
  input-bg: "#FFFFFF"
  semantic-error: "#E62020"
  semantic-success: "#468054"
  semantic-warning: "#FF8A1F"

typography:
  display-xl:
    fontFamily: "essonnes-headline, Arial, sans-serif"
    fontSize: 72px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0px
  display-md:
    fontFamily: "essonnes-headline, Arial, sans-serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: 0px
  title-lg:
    fontFamily: "essonnes-headline, Arial, sans-serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: 0px
  title-md:
    fontFamily: "essonnes-headline, Arial, sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0px
  title-sm:
    fontFamily: "essonnes-headline, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0px
  body-lg:
    fontFamily: "greycliff-cf, Arial, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: 0px
  body-md:
    fontFamily: "greycliff-cf, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  body-sm:
    fontFamily: "greycliff-cf, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.08px
  button:
    fontFamily: "greycliff-cf, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0.36px
  button-sm:
    fontFamily: "greycliff-cf, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.5px
  nav-link:
    fontFamily: "greycliff-cf, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  caption:
    fontFamily: "greycliff-cf, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px
  price:
    fontFamily: "greycliff-cf, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.08px

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
  sm: 4px
  md: 8px
  pill: 100px
  circle: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "8px 15px"
    border: "none"
    textTransform: "uppercase"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "8px 15px"
    textTransform: "uppercase"

  button-primary-disabled:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "8px 15px"
    textTransform: "uppercase"

  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "8px 15px"
    border: "1px solid {colors.ink}"
    textTransform: "uppercase"

  button-secondary-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "8px 15px"
    border: "1px solid {colors.ink}"
    textTransform: "uppercase"

  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "8px 15px"
    border: "1px solid {colors.ink}"
    textTransform: "uppercase"

  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"

  card-product:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "0px"
    border: "none"

  text-input:
    backgroundColor: "{colors.input-bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 40px"
    border: "1px solid {colors.ink}"
    typography: "{typography.body-md}"

  text-input-focused:
    backgroundColor: "{colors.input-bg}"
    border: "1px solid {colors.primary}"

  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    border: "none"

  price-tag:
    textColor: "{colors.ink}"
    typography: "{typography.price}"

  filter-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.none}"
    padding: "0px"
    textTransform: "uppercase"
---

# Society6 Design System

## Overview

Society6 is an artist-powered marketplace whose visual identity acts as a deliberate canvas — allowing artwork to lead while structural design elements recede. The palette is built around warm parchment tones (`#FBFAF6`, `#F2ECE4`) that evoke natural paper and gallery walls rather than the cold whites of typical e-commerce. This warmth extends to every surface layer, creating a cohesive, tactile feel across all pages.

The typography system pairs Essonnes (a contemporary serif with editorial poise) for display and headline sizes with Greycliff CF (a geometric humanist sans-serif) for all interface text. This dual-font pairing creates a deliberate tension: the serif signals cultural value and artistry; the sans-serif grounds interactions in clarity and readability. All call-to-action text is set in uppercase at tracked weight-700, creating confident directional energy.

Key visual characteristics:
- Warm parchment canvas (`#FBFAF6`) and sand surface (`#F2ECE4`) — never pure white
- Dual-font system: Essonnes serif for editorial display, Greycliff CF sans-serif for UI
- Primary buttons are flat-edged (`border-radius: 0`) with pure black fill — confident and graphic
- Secondary/ghost buttons use full pill radius (`100px`) — a deliberate contrast to primaries
- Zero box-shadow design — no elevation by colour, purely by surface layering
- Uppercase typography on all CTAs and labels — reinforcing a catalog/editorial cadence
- Product imagery is always the hero — layouts use generous white/warm space to spotlight artwork
- Navigation is minimal and transparent — avoiding competition with product photography

Society6 differentiates from generic e-commerce platforms by treating the interface as a gallery backdrop, prioritizing artist attribution and artwork display density over promotional noise.

## Colors

### Brand & Accent

| Token | Hex | Use |
|-------|-----|-----|
| `primary` | `#000000` | Primary CTA buttons, active states, strong UI accents |
| `primary-active` | `#211D1C` | Hover/pressed state for primary buttons |
| `ink` | `#000000` | All headings, primary body text, icon fills |

### Surface

| Token | Hex | Use |
|-------|-----|-----|
| `canvas` | `#FBFAF6` | Default page background — warm off-white parchment |
| `surface` | `#F2ECE4` | Section backgrounds, product card backgrounds — warm sand |
| `surface-secondary` | `#F4F4F4` | Neutral alternate surface for utility areas |
| `input-bg` | `#FFFFFF` | Form input backgrounds — only true white used |

### Text

| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#000000` | Primary headings and strong text |
| `body` | `#2C2C2C` | Default paragraph text |
| `muted` | `#5C5C5C` | Secondary labels, helper text |
| `subtle` | `#696969` | Tertiary text, placeholders |
| `on-dark` | `#FFFFFF` | Text on black/dark backgrounds |

### Semantic

| Token | Hex | Use |
|-------|-----|-----|
| `semantic-error` | `#E62020` | Error states, destructive actions |
| `semantic-success` | `#468054` | Success confirmations, availability indicators |
| `semantic-warning` | `#FF8A1F` | Warning states, sale/promotional callouts |

## Typography

### Font Families

**Essonnes Headline** (`essonnes-headline, Arial, sans-serif`) — Adobe Fonts / Typekit commercial serif. Used for all display headings (h1–h4) on editorial and marketing pages. Its high contrast stroke makes artwork introductions feel curatorial.

**Essonnes Display** (`essonnes-display, Arial, "Helvetica Neue", Helvetica, sans-serif`) — Display weight variant of Essonnes, used for the largest hero type.

**Greycliff CF** (`greycliff-cf, Arial, sans-serif`) — Adobe Fonts / Typekit geometric sans-serif. Used for all UI text, body copy, buttons, navigation, captions, and prices. Fallback: `Arial, sans-serif`.

**GTStandard-M** (`GTStandard-M, sans-serif`) — Appears in select UI contexts. Fallback: `sans-serif`.

### Type Scale

| Role | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|--------|-------------|----------------|-----|
| `display-xl` | 72px | 400 | 1.0 | 0px | Hero/section headings, murals callouts |
| `display-md` | 48px | 400 | 1.1 | 0px | Large section titles |
| `title-lg` | 32px | 400 | 1.1 | 0px | Sub-section headings (about page) |
| `title-md` | 24px | 400 | 1.2 | 0px | Product detail h1 |
| `title-sm` | 18px | 400 | 1.2 | 0px | Sidebar titles, drawer headings |
| `body-lg` | 20px | 400 | 1.38 | 0px | Lead/featured paragraph text |
| `body-md` | 18px | 400 | 1.6 | 0px | Default paragraph, nav links |
| `body-sm` | 16px | 400 | 1.5 | 0.08px | Prices, descriptions, fine print |
| `button` | 18px | 700 | 1.6 | 0.36px | Primary/secondary CTA text (uppercase) |
| `button-sm` | 14px | 700 | 1.2 | 0.5px | Compact CTAs, filter labels (uppercase) |
| `nav-link` | 18px | 400 | 1.6 | 0px | Primary navigation items |
| `caption` | 14px | 400 | 1.4 | 0px | Image captions, metadata labels |
| `price` | 16px | 400 | 1.5 | 0.08px | Product price display |

### Principles

- Essonnes is used purely for aesthetic hierarchy — never for small interface text
- Greycliff CF carries all functional UI communication
- All CTA text (buttons, shop links) is uppercase with tracked weight-700 — never sentence case
- The serif-sans combination is load-bearing — never substitute with a single-font system
- Letter spacing on buttons (`0.36px`) creates openness without feeling overly spaced

## Layout

### Spacing System

Base unit: **8px**. All spacing values are multiples of 4px or 8px.

| Token | Value | Use |
|-------|-------|-----|
| `xxs` | 4px | Inline micro-gaps, icon gutters |
| `xs` | 8px | Input padding helpers, tight list spacing |
| `sm` | 12px | Small button padding-y, compact card padding |
| `md` | 16px | Standard element padding, nav gaps |
| `lg` | 24px | Card padding, section sub-groups |
| `xl` | 32px | Section inset padding, component margins |
| `xxl` | 48px | Between-component breathing room |
| `section` | 80px | Full page section separation |

### Grid and Container

- **Normal page width**: `120rem` (1920px equivalent) — wide layout for product grids
- **Narrow content width**: `36rem` (576px) — focused text/editorial content
- **Normal content width**: `42rem` (672px) — comfortable prose reading
- **Wide content width**: `37.5rem` (600px) — mixed-width editorial blocks
- **Sidebar width**: `37.5rem` (600px) — filter/drawer panels
- Product grids: 4–5 columns on desktop, 2 columns on tablet, 1–2 on mobile

### Whitespace Philosophy

Society6 uses generous negative space as a deliberate curatorial tool. Products are never crowded — each needs visual breathing room to feel gallery-worthy. Section heights are defined as small (`15rem`), medium (`25rem`), and large (`35rem`) named constants, providing predictable rhythm across editorial layouts.

## Elevation and Depth

Society6 uses a flat design approach with **no box shadows**. Depth is communicated entirely through background colour layering.

| Level | Treatment | Example Use |
|-------|-----------|-------------|
| 0 — Ground | `#FBFAF6` canvas | Default page background |
| 1 — Raised | `#F2ECE4` warm sand | Section backgrounds, product areas |
| 2 — Secondary | `#F4F4F4` neutral | Utility surfaces, form areas |
| 3 — White | `#FFFFFF` pure white | Input fields, modal overlays |
| 4 — Inverted | `#000000` black | Primary CTAs, drawers, overlays |

Hover interactions use scale transform (`1.03`) and `y: -4px` lift animation rather than shadow — creating motion-based elevation feedback with a `0.25s ease-out` transition. This maintains the flat visual aesthetic while providing interactive depth cues.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `none` | 0px | Primary buttons, cards, product tiles — flat geometry is signature |
| `sm` | 4px | Small utility elements |
| `md` | 8px | Minor UI components |
| `pill` | 100px | Secondary/ghost buttons — deliberate contrast to primary CTAs |
| `circle` | 9999px | Icon buttons, circular UI elements |

The intentional contrast between **zero-radius primary buttons** and **pill secondary buttons** is a defining visual signature. This duality is not accidental — it creates a bold/soft tension that reflects the brand's artist community ethos (expressive contrast).

### Photography and Imagery

- Product artwork is displayed with zero border radius — never clipped into rounded containers
- Images take full-bleed treatment in hero sections (no margins, no padding)
- Product tiles use a consistent portrait or square aspect ratio in grids
- Hover interaction applies subtle scale zoom (`1.015` subtle, `1.03` standard) — revealing image edges
- Artist attribution photos are displayed in natural proportions without harsh cropping

## Components

### Buttons

**Primary Button** — flat-edged (`border-radius: 0`), pure black fill, white text, uppercase weight-700, `8px 15px` padding. Used for all major conversions: "Shop All", "View All", "Sign In".

**Secondary/Ghost Button** — full-pill radius (`100px`), canvas background, black `1px` border, same uppercase typography. Used for secondary actions, navigation shortcuts.

The two button styles are never interchanged — primary = flat black, secondary = pill outline.

**Filter Label** — no background, uppercase weight-700, 14px, `0.36px` tracking. Text-only interactive element for product filtering.

### Cards

**Product Card** — zero radius, no border, no shadow, `#F2ECE4` warm sand background. Product title in Greycliff CF 20px/400, price in 16px/400. Hover applies `scale(1.03)` transform.

**Category Card** — full-bleed image with overlay text, black fill CTA button at bottom. Used for "Shop Art & Wall Decor"-style category navigation.

### Inputs and Forms

**Search Input** — pill-shaped (`100px` radius), `1px solid #000000` border, white background, Greycliff CF 18px, `12px 64px 12px 40px` padding (accommodates icon). Focus state maintains black border.

**Select / Size Picker** — no border, transparent background, weight-600 at 16px. Acts as text-only interaction rather than a styled form element.

### Navigation

**Top Navigation** — transparent background on canvas, Greycliff CF 18px/400. No bottom border. Category items expand on hover with mega-menu panels.

**Mobile Menu** — slides from left, `37.5rem` sidebar width, black background drawer with white text (inverted). Close button uses pill shape with black fill.

### Breadcrumbs

Plain text navigation, Greycliff CF 18px/400, `#000000` ink color, slash-separated. No decorative treatment.

## Do's and Don'ts

**Do:**
- Use the warm parchment canvas (`#FBFAF6`) as the default page background — never pure white
- Apply flat-edge (`border-radius: 0`) to primary buttons — this is a signature design element
- Set all CTA text in uppercase with `font-weight: 700` and `letter-spacing: 0.36px`
- Use Essonnes headline exclusively for display type (h1–h4 in editorial/marketing contexts)
- Maintain generous whitespace between product sections to give artwork breathing room
- Keep product card backgrounds in the warm sand (`#F2ECE4`) rather than white
- Use hover scale transforms (`1.03`) instead of shadows for interactive depth feedback
- Contrast primary flat-black buttons with pill-radius secondary buttons on the same surface

**Don't:**
- Don't use rounded corners (`border-radius > 0`) on primary buttons — it destroys the flat signature
- Don't use pure white (`#FFFFFF`) for page backgrounds — always use the warm parchment tone
- Don't mix Essonnes with another display serif — the system is Essonnes + Greycliff only
- Don't use box-shadows or drop-shadows — elevation is communicated through background layering
- Don't use sentence case for button text — always uppercase
- Don't crowd product tiles — the layout's value is its editorial spaciousness
- Don't change the pill/flat button duality — each shape carries semantic meaning
- Don't use accent colors that compete with artwork — the product image palette IS the color

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 768px | Single-column product grid; hamburger menu replaces nav; full-bleed hero images |
| Tablet | 768px–1024px | 2-column product grid; condensed navigation; reduced section height constants |
| Desktop | 1024px–1440px | 4-column product grid; full mega-menu navigation; standard section heights |
| Wide | > 1440px | 5-column product grid; `120rem` normal page width maintained |

### Touch Targets

- All interactive buttons: minimum `44px × 44px` tap target
- Navigation items: minimum `48px` height
- Product card touch area: full card surface area is tappable

### Collapsing Strategy

- Navigation collapses to slide-out drawer on mobile (sidebar width: `37.5rem`)
- Product grids collapse 4-col → 2-col → 1-col (portrait orientation)
- Hero text scales down: `72px` display reduces to approximately `36–48px` on mobile
- Filter controls collapse into a bottom sheet or accordion panel on mobile

### Image Behavior

- Product images use `object-fit: cover` to maintain grid density at all breakpoints
- Hero images are full-bleed with `object-position: center` cropping
- Hover zoom effects (`scale: 1.015–1.03`) are disabled on touch devices
- Images maintain their natural aspect ratio within product grid cells (no forced square crop)

## Agent Prompt Guide

### Quick Color Reference

- Primary (button bg, strong accents): `#000000`
- Primary Active: `#211D1C`
- Canvas (page background): `#FBFAF6`
- Surface (section/card background): `#F2ECE4`
- Ink (headings, primary text): `#000000`
- Body (paragraph text): `#2C2C2C`
- Muted (secondary text): `#5C5C5C`
- On-dark (text on black): `#FFFFFF`
- Hairline (borders): `#EAEAEA`
- Input background: `#FFFFFF`
- Error: `#E62020`
- Success: `#468054`
- Warning: `#FF8A1F`

### Example Component Prompts

**Hero Section:**
"Create a full-width hero on `#FBFAF6` warm parchment background. Headline in Essonnes Headline (essonnes-headline, Arial, sans-serif) at 72px, weight 400, line-height 1.0, `#000000`. Subheadline in Greycliff CF (greycliff-cf, Arial, sans-serif) at 18px, weight 400, line-height 1.6, `#2C2C2C`. CTA button: `#000000` background, `border-radius: 0`, `8px 15px` padding, white text, Greycliff CF 18px weight 700, uppercase, `letter-spacing: 0.36px`."

**Product Grid Card:**
"Create a product card on `#F2ECE4` warm sand background, `border-radius: 0`, no border, no shadow. Product image full-width at top, zero radius. Below image: product title in Greycliff CF 20px weight 400 `#000000`, artist name in 14px `#5C5C5C`, price in 16px `#000000` `letter-spacing: 0.08px`. Hover: `transform: scale(1.03)`, `transition: 0.25s ease-out`."

**Button Set:**
"Primary button: `#000000` background, `border-radius: 0`, `8px 15px` padding, Greycliff CF 18px weight 700 white uppercase `letter-spacing: 0.36px`, no border. Secondary button: `#FBFAF6` background, `border-radius: 100px`, same padding, `1px solid #000000` border, black text, same font settings."

**Search Input:**
"Search field on `#FBFAF6` canvas. Input: `#FFFFFF` white background, `border-radius: 100px`, `1px solid #000000` border, `12px 40px` padding, Greycliff CF 18px weight 400. Icon positioned left inside input."

### Iteration Guide

1. Start with `#FBFAF6` as page background — never use `#FFFFFF` as the canvas
2. Load Essonnes (essonnes-headline) and Greycliff CF via Adobe Fonts / Typekit for heading+body
3. Make primary CTA buttons flat-edge (`border-radius: 0`) with `#000000` fill — this is load-bearing
4. Use `#F2ECE4` for section backgrounds and product card containers
5. Set all button text to uppercase weight-700 with `letter-spacing: 0.36px`
6. Apply hover scale transform `1.03` on product cards instead of shadows
7. Contrast primary (flat black) with secondary (pill outline) — never use same radius for both
8. Check that no pure white appears in page backgrounds or card backgrounds
