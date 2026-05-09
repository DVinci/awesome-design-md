---
version: alpha
name: Prada
description: |
  Prada's digital presence embodies the house's century-old commitment to craftsmanship
  and intellectual rigor through a rigorous monochromatic palette, flat zero-radius geometry,
  and the proprietary GT-America sans-serif paired with the bespoke Prada Typeface. The design
  system relies on absolute restraint — pure black and white surfaces, all-uppercase navigation
  labels, and underline-animated CTAs — communicating luxury through discipline rather than
  decoration.

colors:
  primary: "#000000"
  primary-active: "#191B1C"
  on-primary: "#FFFFFF"
  canvas: "#FFFFFF"
  surface: "#F7F7F7"
  surface-card: "#EBEBED"
  ink: "#000000"
  body: "#191B1C"
  muted: "#4E555A"
  subtle: "#71797F"
  hairline: "#D9DCE0"
  hairline-light: "#EEEEEE"
  on-dark: "#FFFFFF"
  disabled: "#B9B9B9"
  semantic-error: "#E41B1B"
  semantic-error-active: "#AB0015"
  stripbar: "#000000"

typography:
  display-xl:
    fontFamily: "GT-America, sans-serif"
    fontSize: 26px
    fontWeight: 700
    lineHeight: 1.23
    letterSpacing: 0.2px
  display-md:
    fontFamily: "GT-America, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.2px
  title-lg:
    fontFamily: "GT-America, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.375
    letterSpacing: 0px
  title-md:
    fontFamily: "GT-America, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.29
    letterSpacing: 0px
  body-lg:
    fontFamily: "GT-America, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  body-md:
    fontFamily: "GT-America, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0px
  body-sm:
    fontFamily: "GT-America, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  button:
    fontFamily: "GT-America, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.14
    letterSpacing: 0.2px
  nav-link:
    fontFamily: "GT-America, sans-serif"
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1.27
    letterSpacing: 0.2px
  caption:
    fontFamily: "GT-America, sans-serif"
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0px
  label:
    fontFamily: "GT-America, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.17
    letterSpacing: 0.2px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 72px

rounded:
  none: 0px
  xs: 0px
  sm: 0px
  md: 0px
  pill: 100px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "20px 20px"
    border: "none"
    textTransform: "uppercase"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "20px 20px"
    textTransform: "uppercase"

  button-primary-disabled:
    backgroundColor: "{colors.disabled}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "20px 20px"
    textTransform: "uppercase"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0px 0px 4px"
    border: "0px 0px 1px 0px solid {colors.ink}"
    textTransform: "uppercase"

  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0px"
    textDecoration: "underline"
    textUnderlineOffset: "2.25px"

  button-link-light:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0px"
    textDecoration: "underline"

  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"

  card-product:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "0px"
    border: "none"
    imageRatio: "4/5"
    imageBg: "{colors.surface-card}"

  text-input:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "25px 0px"
    border: "0px 0px 1px 0px solid {colors.ink}"

  text-input-focused:
    border: "0px 0px 1px 0px solid {colors.ink}"

  text-input-disabled:
    textColor: "{colors.disabled}"
    border: "0px 0px 1px 0px solid {colors.disabled}"

  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    height: "48px"
    border: "0px 0px 1px 0px solid {colors.hairline-light}"
    typography: "{typography.nav-link}"
    textTransform: "uppercase"

  top-nav-transparent:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: "0px 0px 1px 0px solid {colors.hairline-light}"

  stripbar:
    backgroundColor: "{colors.stripbar}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    padding: "0px {spacing.sm}"

  badge-new:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "2px 4px"
    textTransform: "uppercase"
---

# Prada Design System

## Overview

Prada's digital identity translates the fashion house's archival rigor and intellectual minimalism into a pixel-perfect, disciplined interface language. The palette is emphatically binary — pure black (`#000000`) on white (`#FFFFFF`), with a restrained slate mid-tone (`#4E555A`) for secondary text. There are no gradients, no shadows, no rounded corners. Every element earns its place through proportion and negative space alone, reflecting Miuccia Prada's concept that restraint is the highest form of sophistication.

The typographic system is grounded entirely in GT-America, the Swiss-inspired grotesque that Prada adopted for its digital presence — set at tight sizes with weight-based hierarchy rather than size jumps. Navigation labels are forced uppercase at 11px/700 weight, creating a dense but legible wayfinding ribbon. Product names appear at 12–14px/500, while editorial headings reach 26px/700 on large viewports. A bespoke Prada Typeface (PradaTypeface-TestThree) surfaces only in editorial subtitle contexts, providing brand-owned personality without compromising legibility.

Key visual characteristics:
- Binary black-and-white palette with zero-saturation mid-tones for hierarchy
- Zero border-radius on all interactive elements — buttons, cards, inputs are perfectly rectangular
- All navigation text forced uppercase at 11px with 0.2px tracking
- Underline-animation CTAs (expanding underline from left on hover) replace traditional buttons in editorial contexts
- 48px fixed header with 1px bottom hairline border — minimal footprint for maximum product focus
- Product cards use 4:5 portrait aspect ratio with warm near-white image backgrounds (#EBEBED)
- Strip bar announcements use full-width black band at viewport top
- No box shadows anywhere in the design system — depth expressed only through z-layering
- GT-America loaded as proprietary WOFF2 — not available via Google Fonts

Prada differentiates from competitors (Gucci, Balenciaga, Louis Vuitton) through radical sobriety rather than maximalism — where others use brand-color accents or editorial gradients, Prada holds to black and white with strict typographic control.

## Colors

### Brand & Primary

| Token | Hex | Use |
| ----- | --- | --- |
| `primary` | `#000000` | Primary CTA button fill, key text, all structural black |
| `primary-active` | `#191B1C` | Hover/active state of primary buttons and links |
| `on-primary` | `#FFFFFF` | Text color on black surfaces |
| `stripbar` | `#000000` | Full-width announcement strip at top of page |

### Surface

| Token | Hex | Use |
| ----- | --- | --- |
| `canvas` | `#FFFFFF` | Page background, nav background, card backgrounds |
| `surface` | `#F7F7F7` | Subtle off-white for secondary sections, form areas |
| `surface-card` | `#EBEBED` | Product image placeholder background (4:5 card images) |

### Text

| Token | Hex | Use |
| ----- | --- | --- |
| `ink` | `#000000` | Primary headings, nav labels, all critical text |
| `body` | `#191B1C` | Body paragraphs, secondary text on white |
| `muted` | `#4E555A` | Secondary text, product metadata, wishlist icons |
| `subtle` | `#71797F` | Tertiary hints, disabled label text, annotations |
| `disabled` | `#B9B9B9` | Disabled button fill, disabled input borders and text |

### Semantic

| Token | Hex | Use |
| ----- | --- | --- |
| `semantic-error` | `#E41B1B` | Error messages, form validation, error checkbox fill |
| `semantic-error-active` | `#AB0015` | Hover/active state of error elements |

### Border / Structural

| Token | Hex | Use |
| ----- | --- | --- |
| `hairline` | `#D9DCE0` | Standard dividers, footer section borders |
| `hairline-light` | `#EEEEEE` | Subtle header bottom border, section separators |

## Typography

### Font Families

**GT-America** — The primary and only UI typeface. A geometric grotesque licensed from Grilli Type, used at weights 400 (Regular), 500 (Medium), and 700 (Bold). Loaded as proprietary WOFF2/WOFF/TTF via Prada's CDN — not publicly available on Google Fonts. Fallback: `sans-serif`.

**Prada Typeface (PradaTypeface-TestThree)** — Bespoke display serif used exclusively in editorial `.columns__subtitle` contexts on marketing campaign pages. Not used in product UI. Loaded as proprietary WOFF2.

**Almarai** — Arabic-script typeface for RTL (Arabic) market variants. Used only when `[data-country]` is an Arabic-speaking territory.

### Typography Scale

| Role | Font | Size | Weight | Line Height | Letter Spacing | Use |
| ---- | ---- | ---- | ------ | ----------- | -------------- | --- |
| `display-xl` | GT-America | 26px | 700 | 1.23 | 0.2px | Page-level editorial headings (desktop H1) |
| `display-md` | GT-America | 20px | 700 | 1.2 | 0.2px | Section headings, H1 on mobile, H2 on desktop |
| `title-lg` | GT-America | 16px | 500 | 1.375 | 0px | Mosaic section labels, uppercase category titles |
| `title-md` | GT-America | 14px | 700 | 1.29 | 0px | Card category titles, paragraph emphasis |
| `body-lg` | GT-America | 16px | 400 | 1.5 | 0px | Body text, nav dropdown paragraph text |
| `body-md` | GT-America | 14px | 400 | 1.43 | 0px | Default paragraph, product descriptions |
| `body-sm` | GT-America | 12px | 400 | 1.5 | 0px | Footer links, legal text, secondary metadata |
| `button` | GT-America | 14px | 500 | 1.14 | 0.2px | All CTA button text (always uppercase) |
| `nav-link` | GT-America | 11px | 700 | 1.27 | 0.2px | Top-nav menu items (always uppercase) |
| `caption` | GT-America | 10px | 500 | 1.4 | 0px | Product attribute labels, orientation tags |
| `label` | GT-America | 12px | 700 | 1.17 | 0.2px | Footer section headers, form labels (uppercase) |

### Principles

- **Weight-based hierarchy** — size ranges are narrow (10–26px); hierarchy communicated through 400 → 500 → 700 weight steps
- **Uppercase discipline** — navigation, buttons, category labels, and form section headers are forced uppercase; body text is sentence case
- **Letter-spacing uniformity** — only 0.2px applied; no large tracking values anywhere
- **No italic** — GT-America Standard (not italic variant) used throughout; emphasis via weight only

## Layout

### Spacing System

Base unit: 4px. All spacing values are multiples of 4.

| Token | Value | Use |
| ----- | ----- | --- |
| `xxs` | 4px | Tight gaps between inline elements, icon margins |
| `xs` | 8px | Button icon padding, tight list item gaps |
| `sm` | 12px | Strip bar horizontal padding, compact form elements |
| `md` | 16px | Standard padding, card inner margins |
| `lg` | 24px | Card grid gaps, section sub-spacing |
| `xl` | 32px | Footer section spacing, heading bottom margin |
| `xxl` | 48px | Major section padding, header height |
| `section` | 72px | Top-level page section vertical padding |

### Grid and Container

- **Max container width**: 1366px (primary), 1600px (widescreen), 2560px (ultra-wide)
- **Column system**: 12-column CSS Grid with responsive column spans
- **Gutter**: 20px on desktop, 16px on mobile
- **Content padding**: 20px left/right on desktop, 16px on tablet, 0px on mobile (full-bleed sections)
- **Product grid**: 4 columns on desktop (1024px+), 2 columns on mobile

### Whitespace Philosophy

Prada's layout philosophy prioritizes the void. Product photography occupies large full-bleed modules with minimal surrounding text. Editorial campaign images span the full viewport width. Navigation is vertically compact (48px) to maximize content area. Generous section gaps (72px+) separate editorial modules, creating breathing room that signals luxury positioning.

## Elevation and Depth

### Levels

| Level | Treatment | Example |
| ----- | --------- | ------- |
| 0 — Base | White canvas, no shadow | Page background, footer |
| 1 — Overlay | `rgba(0,0,0,0.4)` scrim | Image hover states |
| 2 — Modal backdrop | `rgba(0,0,0,0.5)` scrim | Drawer overlays, mega-menu backdrop |
| 3 — Drawer | White surface, no shadow, slides in | Mini cart, filter panel, mobile menu |
| 4 — Fixed header | 1px hairline border, `z-index: 10` | Sticky navigation |

### Shadow Philosophy

Prada uses **zero box shadows** across the entire design system. Depth is communicated exclusively through:
- Layered z-index with semi-transparent dark scrims for overlays
- 1px border lines to delineate surfaces
- Image contrast on white backgrounds

This aligns with the house's rejection of decorative surface effects in favour of structural precision.

## Shapes

### Border Radius Scale

| Token | Value | Use |
| ----- | ----- | --- |
| `none` | 0px | All interactive components — buttons, cards, inputs |
| `xs` | 0px | No exception to flat geometry |
| `sm` | 0px | Icons, tags, all UI elements |
| `pill` | 100px | Used only for loading spinner circles (functional, not decorative) |

Prada uses exclusively **flat, rectangular geometry** on all designed surfaces. Zero border-radius is a brand-defining choice — it echoes the rectilinear forms of Saffiano leather goods and architectural Prada store interiors.

### Photography and Imagery

- **Product cards**: 4:5 portrait aspect ratio with `#EBEBED` image placeholder background
- **Campaign / hero**: Full-bleed 16:9 or full-viewport-height landscape orientation
- **Product gallery**: Multi-image scroll within 4:5 frame, snap scrolling on mobile
- **No image borders or shadows** — images sit directly on white or near-white surfaces
- **Image hover**: Dark scrim `rgba(0,0,0,0.5)` applied on hover for interactive mosaic images

## Components

### Buttons

**Primary Button** — Filled black, uppercase text, zero radius:
- Background: `#000000`, Text: `#FFFFFF`
- Typography: 14px/500/0.2px tracking, uppercase
- Padding: `20px 20px`, Height: ~55px minimum
- Border: none, Border-radius: 0px
- Disabled: Background `#B9B9B9`, cursor not-allowed

**Secondary / Outline Button** — Transparent with visible border (used for store locator, filters):
- Background: transparent, Text: `#000000`
- Typography: 12px/500/0.2px tracking, uppercase
- Border: `1px solid #000000`, Border-radius: 0px
- Padding: `0px 0px 4px 0px` (underline-style)

**CTA Link (button-link)** — Animated underline text link, primary editorial CTA:
- Background: transparent, Color: `#000000` (or `#FFFFFF` on dark)
- Typography: 14px/400, lowercase or sentence case
- Decoration: underline with 2.25px offset, expands left-to-right on hover via CSS animation
- No border, no background — pure typographic CTA

**Add to Cart** — Filled primary button at full-width:
- Padding: `8px 22px`, min-width: 200px, Height: 48px
- Border: `1px solid #000000`, Background: `#000000`, Color: `#FFFFFF`
- Border-radius: 0px

### Cards

**Product Card** — Core e-commerce component:
- Background: `#FFFFFF`, Border-radius: 0px, No border, No shadow
- Image: 4:5 ratio (`aspect-ratio: 4/5`), Background: `#EBEBED`, overflow hidden
- Product name: 12px/500, `#000000` (mobile) → 14px/500 (desktop)
- Price: 12px/400, `#000000`; struck-through old price; discount label in `#4E555A`
- Wishlist icon: top-right absolute positioned, `#4E555A`

**Mosaic / Editorial Card** — Full-bleed image with overlaid text:
- Image: full width, variable height
- Text overlay: absolute positioned on image, `#FFFFFF` color with animated CTA
- Optional dark scrim `rgba(0,0,0,0.5)` on hover

**Cross-Category Card** — Square image with label below:
- Image: square or landscape
- Label: 12px/regular, center-aligned below image

### Inputs and Forms

**Text Input** — Line-style underline input:
- Background: transparent, Border: only bottom `1px solid #000000`
- Text: 18px/500 for primary inputs, 14px/400 for secondary
- Padding: `25px 0px` (generous vertical touch target)
- Label: floats above on focus, 12px/400
- Error border: `1px solid #E41B1B`

**Checkbox** — Custom styled, square:
- Unchecked: empty square, 22×22px
- Checked fill: `#000000` with white checkmark icon
- Disabled fill: `#B9B9B9`
- Error fill: `#E41B1B`

### Navigation

**Top Nav / Header** — Fixed, 48px height:
- Background: `#FFFFFF` (with occasional transparent variant on campaign pages, falls back to white on scroll)
- Prada logo: left-aligned
- Nav links: 11px/700, uppercase, `#000000`, hover underline animates in
- Bottom border: `1px solid #EEEEEE`
- Z-index: 10 (overlaid by drawers at z-index 12+)

**Mobile Menu** — Full-screen slide-in panel:
- Background: `#FFFFFF`, full viewport height
- Menu items: 16px/700, uppercase
- Sub-items: 12px/400, sentence case

**Strip Bar** — Promotional announcement:
- Background: `#000000`, Text: `#FFFFFF`, 12px/400
- Fixed top position (above header)
- Disappears on scroll

### Badges and Tags

**NEW badge** — Product card label:
- Background: `#000000`, Text: `#FFFFFF`
- Typography: 10px/500, uppercase
- Geometry: 0px radius

**Category Label** — Uppercase category tag:
- Color: `#4E555A`, Typography: 10px/500, uppercase
- Appears rotated -90° on product card side

## Do's and Don'ts

**Do:**
- Use `#000000` as the primary brand color for all key interactive elements and primary text
- Force ALL navigation labels, button text, form section headers, and category titles to `text-transform: uppercase`
- Apply flat, zero-radius geometry to every interactive element — buttons, cards, form fields, modals
- Use GT-America at 500 (Medium) weight for button labels and product names; 700 for navigation and headings
- Use 0.2px letter-spacing on uppercase text and buttons for legibility at small sizes
- Keep hairline borders at exactly 1px with `#EEEEEE` or `#D9DCE0`
- Use the animated underline CTA (expanding from left on hover) for editorial / campaign link CTAs
- Maintain 4:5 aspect ratio for all product card images

**Don't:**
- Never use border-radius on any design component — Prada's identity is defined by rectangular geometry
- Never use box-shadow or drop-shadow anywhere in the design system
- Never introduce color accents — the palette is binary black/white with neutral grey mid-tones only
- Never use font sizes below 10px or above 26px in UI contexts
- Never use italic type — GT-America Standard only
- Never use colored backgrounds for sections (no brand-color background bands)
- Never mix weight 400 and 700 in the same line of text without the intermediate 500 step
- Never use pill-shaped or fully-rounded buttons — this is fundamentally incompatible with Prada aesthetics

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
| ---------- | ----- | ----------- |
| Mobile | < 768px | Single-column layout; hamburger menu; 2-column product grid; full-bleed images |
| Tablet | 768px–1023px | 2–3 column grid; mega-menu slides in; 3-column product grid begins |
| Desktop | 1024px–1365px | 12-column grid active; full mega-menu dropdown; 4-column product grid |
| Wide | 1366px–1599px | Max container 1366px; consistent layout |
| Ultrawide | 1600px+ | Max container 1600px; generous whitespace flanking content |

### Touch Targets

- All interactive elements minimum 44px tall on mobile (nav icons, buttons)
- Header height fixed at 48px across all breakpoints
- Product card wishlist icon touch target enlarged on mobile

### Collapsing Strategy

- **Navigation**: Horizontal nav links collapse to hamburger (menu icon) with full-screen overlay panel at < 1024px; sub-menus push content left on mobile
- **Product grid**: 4 → 2 columns at mobile breakpoint; card images remain 4:5 throughout
- **Footer**: 12-column footer grid collapses to stacked single-column list at mobile
- **Editorial mosaic**: Multi-column image mosaic stacks vertically on mobile

### Image Behavior

- Hero campaign images: `object-fit: cover`, full-bleed at all breakpoints
- Product card images: `aspect-ratio: 4/5`, overflow-hidden with swipe-scroll for multiple angles on mobile
- All images: no border-radius, no drop shadow, sit directly on background

## Agent Prompt Guide

### Quick Color Reference

- Primary (CTA/buttons): `#000000`
- Primary active: `#191B1C`
- Canvas (page background): `#FFFFFF`
- Ink (primary text): `#000000`
- Body text: `#191B1C`
- Muted (secondary text): `#4E555A`
- Subtle (tertiary text): `#71797F`
- Surface (off-white bg): `#F7F7F7`
- Product card image bg: `#EBEBED`
- Hairline (borders): `#D9DCE0`
- Hairline light (header): `#EEEEEE`
- Disabled: `#B9B9B9`
- Error: `#E41B1B`
- White (on dark): `#FFFFFF`

### Example Component Prompts

**Hero Section:**
"Create a full-bleed hero on white (`#FFFFFF`) background. Campaign image fills full width at 16:9 or full viewport height. Headline in GT-America 26px weight 700, uppercase, `#000000`. Sub-label in GT-America 16px weight 500, uppercase, `#000000`. CTA as animated underline text link in GT-America 14px weight 400, `#FFFFFF` (on dark image overlay) — underline expands left-to-right on hover. No buttons, no background color blocks, no border-radius."

**Product Card:**
"Create a product card on white (`#FFFFFF`). Image placeholder background `#EBEBED`, 4:5 portrait aspect ratio, no border-radius, no border, no shadow. Product name: GT-America 14px weight 500, `#000000`. Price: GT-America 12px weight 400, `#000000`. Wishlist heart icon: top-right absolute, `#4E555A`. No card border. No card shadow."

**Primary Button:**
"Primary button: background `#000000`, text `#FFFFFF`, GT-America 14px weight 500, `text-transform: uppercase`, `letter-spacing: 0.2px`, padding `20px 20px`, border-radius 0, no border."

**Secondary / Link Button:**
"Secondary CTA: transparent background, `#000000` text, GT-America 12px weight 500, uppercase, underline bottom border `1px solid #000000`, border-radius 0, padding `0 0 4px 0`."

**Navigation Bar:**
"Fixed header, height 48px, background `#FFFFFF`, bottom border `1px solid #EEEEEE`. Logo left-aligned. Nav links: GT-America 11px weight 700, uppercase, `letter-spacing: 0.2px`, `#000000`. On hover: underline slides in from left via CSS transition. No background color change on hover."

**Form Input:**
"Line-style text input: transparent background, border only on bottom `1px solid #000000`, border-radius 0, padding `25px 0`. Input text: GT-America 14px weight 400. Floating label: GT-America 12px weight 400, animates upward on focus. Error state: bottom border `1px solid #E41B1B`."

### Iteration Guide

1. Start with pure `#FFFFFF` page canvas — no grey backgrounds except `#F7F7F7` for secondary sections
2. Load GT-America as your primary font — for web use, substitute with Inter or Helvetica Neue as a fallback
3. Set `border-radius: 0` globally on all interactive elements — never allow any rounding
4. Apply `text-transform: uppercase` to all navigation items, button text, category labels, and form section headers
5. Use weight progression 400 → 500 → 700 to create hierarchy — minimize size jumps
6. Add `letter-spacing: 0.2px` to all uppercase text for legibility
7. Never add box-shadow — use 1px borders and z-index layering for depth
8. Check: ink on canvas `#000000` on `#FFFFFF` — always AA+ contrast compliant
