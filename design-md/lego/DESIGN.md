---
version: alpha
name: LEGO
description: |
  LEGO's design system is a bold, joyful, and highly structured visual identity built on
  a rich proprietary token system (1000+ CSS custom properties). The brand balances
  playfulness with precision — using a single proprietary typeface (Cera Pro), a vibrant
  primary palette of LEGO Red, Yellow, and Blue, and full-pill button geometry throughout.
  Every interactive element is a pill shape (999px radius), while surfaces stay flat and
  card-free with near-zero border-radius. The system is engineered for a global e-commerce
  scale: a comprehensive semantic color hierarchy (content, surface, interactive, support,
  stroke) maps brand primaries to product UI states. LEGO Orange (#F47D20) drives the
  Add-to-Bag CTA; LEGO Blue (#005AD2) anchors account and cart actions. The overall mood
  is energetic, approachable, and unmistakably LEGO.

colors:
  primary: "#005AD2"
  primary-active: "#0045B7"
  primary-pressed: "#011C58"
  accent-red: "#E3000B"
  accent-yellow: "#FFD502"
  accent-orange: "#F47D20"
  accent-orange-active: "#C9692B"
  accent-bright-blue: "#006CB7"
  accent-earth-blue: "#00395D"
  accent-bright-green: "#00AF4D"
  accent-lavender: "#9E76B4"
  accent-bright-pink: "#E3599D"
  canvas: "#FFFFFF"
  surface: "#F7F7F7"
  surface-muted: "#F2F2F2"
  surface-dark: "#141414"
  nav: "#F8F8F8"
  ink: "#141414"
  body: "#2C2C2C"
  muted: "#636363"
  non-essential: "#939393"
  on-dark: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-accent-yellow: "#000000"
  on-accent-orange: "#000000"
  hairline: "#D9D9D9"
  hairline-subtle: "#E5E5E5"
  hairline-strong: "#848484"
  semantic-error: "#DD0000"
  semantic-error-surface: "#FCE8E9"
  semantic-success: "#008439"
  semantic-success-surface: "#DBF1DA"
  semantic-warning: "#F68226"
  semantic-warning-surface: "#FEEBDC"
  semantic-info: "#005AD2"
  semantic-info-surface: "#DBF0FF"
  focus-ring: "#4695F0"
  wishlist: "#D72054"
  insiders: "#861EE3"
  logo-red: "#E3000B"
  logo-yellow: "#FFED00"

typography:
  display-xl:
    fontFamily: '"Cera Pro", sans-serif'
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -1px
  display-md:
    fontFamily: '"Cera Pro", sans-serif'
    fontSize: 35.6px
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: -0.71px
  title-lg:
    fontFamily: '"Cera Pro", sans-serif'
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  title-md:
    fontFamily: '"Cera Pro", sans-serif'
    fontSize: 18.72px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  body-lg:
    fontFamily: '"Cera Pro", sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: '"Cera Pro", sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: '"Cera Pro", sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.583
    letterSpacing: 0
  button:
    fontFamily: '"Cera Pro", sans-serif'
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  nav-link:
    fontFamily: '"Cera Pro", sans-serif'
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: '"Cera Pro", sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.583
    letterSpacing: 0
  price:
    fontFamily: '"Cera Pro", sans-serif'
    fontSize: 14px
    fontWeight: 700
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
  xs: 2px
  sm: 4px
  md: 8px
  lg: 16px
  xl: 32px
  pill: 999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
    border: "2px solid transparent"
    minHeight: "44px"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
    border: "2px solid transparent"

  button-primary-disabled:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.non-essential}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
    border: "2px solid transparent"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
    border: "2px solid rgba(255,255,255,0.85)"

  button-add-to-bag:
    backgroundColor: "{colors.accent-orange}"
    textColor: "{colors.on-accent-orange}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
    border: "2px solid transparent"

  button-add-to-bag-active:
    backgroundColor: "{colors.accent-orange-active}"
    textColor: "{colors.on-accent-orange}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
    border: "2px solid transparent"

  button-ghost-light:
    backgroundColor: "rgba(255,255,255,0.85)"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
    border: "2px solid transparent"

  card-product:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    border: "1px solid {colors.hairline-subtle}"
    boxShadow: "none"

  card-base:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"

  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.hairline-strong}"
    typography: "{typography.body-lg}"

  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    border: "2px solid {colors.focus-ring}"

  top-nav:
    backgroundColor: "{colors.nav}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    borderBottom: "1px solid {colors.hairline}"

  badge-default:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"

  badge-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"

  badge-promo:
    backgroundColor: "{colors.accent-red}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"

  promo-tag:
    backgroundColor: "{colors.accent-yellow}"
    textColor: "{colors.on-accent-yellow}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    padding: "2px 6px"
---

# LEGO Design System

## Overview

LEGO's visual identity is one of the most recognizable in the world — built on a primary
palette of corporate Red (#E3000B), Yellow (#FFED00), and a rich spectrum of LEGO brick
colors. The digital shop at lego.com extends this physical brand DNA into a meticulously
engineered design system with over 1,000 CSS custom properties organized into semantic
layers: core color scales, brand tokens, neutral scales, interactive states, surface
layers, content (text), stroke (border), and support (status) colors.

The UI is energetic but ordered. A single proprietary typeface — Cera Pro — carries all
text from hero display type to micro-labels at consistent weights (400 regular, 500
medium, 700 bold). Every interactive element uses full-pill geometry (border-radius: 999px),
creating a friendly, approachable feel at odds with sharp-cornered competitors. Surfaces
are flat; cards exist as subtle whitespace separators rather than raised panels. The
e-commerce Add to Bag action is always LEGO Orange (#F47D20), while account and checkout
CTAs use LEGO Blue (#005AD2). Hero sections exploit the full LEGO color catalog with
per-theme color coding that matches the physical brick palette.

Key visual characteristics:
- Full-pill buttons (999px) on every CTA — no square corners allowed
- Single typeface system: Cera Pro at 400/500/700 with negative tracking on display sizes
- Dual-CTA color system: Orange (#F47D20) for Add to Bag, Blue (#005AD2) for account/cart
- LEGO logo red (#E3000B) and logo yellow (#FFED00) are reserved for the wordmark only
- Flat surface hierarchy: white canvas → #F7F7F7 surface → #F2F2F2 muted
- Near-zero card elevation — borders and subtle background shifts instead of shadows
- Partner color integration: each licensed theme (Star Wars, Marvel, Harry Potter) gets
  its own palette from the `--ds-color-partner-*` token set
- Negative letter spacing on display headings (-0.7px to -1px) for brand-grade density

The design differentiates from Amazon and other large e-commerce platforms through bold
hero imagery and thematic color-coding, treating the shopping experience as brand
storytelling rather than a neutral transactional interface.

---

## Colors

### Brand & Logo

| Token | Hex | Use |
| ----- | --- | --- |
| `logo-red` | `#E3000B` | LEGO wordmark, critical alerts only |
| `logo-yellow` | `#FFED00` | LEGO wordmark only; do not use as UI fill |
| `accent-yellow` | `#FFD502` | Brand interactive — brand CTA hover, emphasis fills |
| `accent-red` | `#E3000B` | Badge: Sale, New, Exclusive |
| `accent-orange` | `#F47D20` | **Add to Bag** CTA — primary e-commerce action |
| `accent-orange-active` | `#C9692B` | Add to Bag hover/active state |

### Primary Interactive

| Token | Hex | Use |
| ----- | --- | --- |
| `primary` | `#005AD2` | View Bag, Checkout, Sign In CTAs; links |
| `primary-active` | `#0045B7` | Hover state for primary blue buttons |
| `primary-pressed` | `#011C58` | Pressed state for primary blue buttons |
| `accent-bright-blue` | `#006CB7` | Secondary blue — nav highlights, informational |

### Surface

| Token | Hex | Use |
| ----- | --- | --- |
| `canvas` | `#FFFFFF` | Page background, modal backgrounds |
| `nav` | `#F8F8F8` | Top navigation bar background |
| `surface` | `#F7F7F7` | Section backgrounds, feature areas |
| `surface-muted` | `#F2F2F2` | Disabled state backgrounds, secondary cards |
| `surface-dark` | `#141414` | Dark hero sections, full-bleed promo banners |

### Text

| Token | Hex | Use |
| ----- | --- | --- |
| `ink` | `#141414` | Headings, product titles, strong emphasis |
| `body` | `#2C2C2C` | Body paragraphs, UI labels |
| `muted` | `#636363` | Secondary labels, help text |
| `non-essential` | `#939393` | Placeholder text, disabled labels |
| `on-dark` | `#FFFFFF` | Text on dark surface backgrounds |
| `on-primary` | `#FFFFFF` | Text on blue primary buttons |
| `on-accent-yellow` | `#000000` | Text on yellow fills |
| `on-accent-orange` | `#000000` | Text on orange Add to Bag buttons |

### Semantic

| Token | Hex | Use |
| ----- | --- | --- |
| `semantic-error` | `#DD0000` | Destructive actions, form errors |
| `semantic-error-surface` | `#FCE8E9` | Error message backgrounds |
| `semantic-success` | `#008439` | Success states, in-stock indicators |
| `semantic-success-surface` | `#DBF1DA` | Success toast backgrounds |
| `semantic-warning` | `#F68226` | Warning notices |
| `semantic-warning-surface` | `#FEEBDC` | Warning message backgrounds |
| `wishlist` | `#D72054` | Wishlist heart icon fill |
| `insiders` | `#861EE3` | LEGO Insiders loyalty program accent |
| `focus-ring` | `#4695F0` | Keyboard focus outline |

---

## Typography

### Font Family

LEGO uses **Cera Pro** exclusively — a proprietary geometric sans-serif typeface. It is
not available via Google Fonts or Adobe Fonts. For design mockups, suitable substitutes
are:
- **Inter** (closest in x-height and geometric construction)
- **DM Sans** (similar weight distribution)
- **Nunito Sans** (matches the rounded geometric feel)

CSS font stack: `"Cera Pro", sans-serif`

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Use |
| ---- | ---- | ------ | ----------- | -------------- | --- |
| `display-xl` | 48px | 700 | 1.1 | -1px | Hero headlines on banner |
| `display-md` | 35.6px | 700 | 1.35 | -0.71px | Section headlines, category titles |
| `title-lg` | 28px | 700 | 1.3 | 0 | Page section headings |
| `title-md` | 18.72px | 700 | 1.5 | 0 | Product name, card titles |
| `body-lg` | 16px | 400 | 1.5 | 0 | Primary body copy, UI labels |
| `body-md` | 14px | 400 | 1.5 | 0 | Secondary body, product details |
| `body-sm` | 12px | 400 | 1.583 | 0 | Fine print, metadata, badges |
| `button` | 16px | 500 | 1.5 | 0 | All button labels |
| `nav-link` | 16px | 500 | 1.5 | 0 | Navigation items |
| `price` | 14px | 700 | 1.5 | 0 | Product price display |
| `caption` | 12px | 400 | 1.583 | 0 | Image captions, attribution |

### Principles

- Only three weights are used: 400 (regular), 500 (medium), 700 (bold)
- Negative letter-spacing is applied exclusively to display sizes (-0.71px to -1px)
- Body and UI text uses zero letter-spacing (normal)
- All text is sentence case; uppercase is used only for primary navigation labels ("SHOP", "DISCOVER") as brand styling
- Cera Pro renders with slightly more width than Inter; account for this when substituting

---

## Layout

### Spacing System

Base unit: **8px**. The LEGO DS uses a named scale that maps to `--ds-layout-spacing-*` CSS tokens.

| Token | Value | Use |
| ----- | ----- | --- |
| `xxs` | 4px | Icon gaps, tight internal padding |
| `xs` | 8px | Icon-to-label gaps, compact list items |
| `sm` | 12px | Button padding vertical, input padding |
| `md` | 16px | Card padding, form field padding, button padding horizontal |
| `lg` | 24px | Component padding, card inner spacing |
| `xl` | 32px | Card groups, section inner padding |
| `xxl` | 48px | Section gaps, major layout breaks |
| `section` | 80px | Full section vertical padding |

### Grid & Container

| Breakpoint | Container Max Width | Columns |
| ---------- | ------------------- | ------- |
| Mobile (<580px) | 100% | 2 |
| Tablet (580–900px) | 100% | 3–4 |
| Desktop (900–1200px) | 1200px | 4–5 |
| Wide (>1200px) | 1600px | 5–6 |

Product grids use auto-fill responsive CSS Grid with min 160px column width on mobile
scaling to ~240px on desktop. Hero banners are full-bleed (100vw) with overlay text.

### Whitespace Philosophy

LEGO uses generous padding within sections and tight gaps between grid items. Hero
banners are full-bleed with no horizontal margin. Product cards use a compact 16px inner
padding. Section-level vertical spacing is 80px at desktop, collapsing to 40–48px on
mobile. The visual rhythm alternates between full-bleed colored hero sections and
white-background product grids.

---

## Elevation & Depth

| Level | Treatment | Example Use |
| ----- | --------- | ----------- |
| 0 — Flat | No shadow, background-color only | Page canvas, section dividers |
| 1 — Subtle | `border: 1px solid #E5E5E5` | Product cards, input fields |
| 2 — Elevated | `box-shadow: 0 2px 8px rgba(0,0,0,0.10)` | Dropdown menus, mini cart |
| 3 — Overlay | `box-shadow: 0 8px 24px rgba(0,0,0,0.16)` | Modals, full-screen drawers |
| Dark | Full-bleed `#141414` background | Promo hero banners, theme showcases |

LEGO DS defines elevation via two ambient/key shadow tokens:
- Ambient: `rgba(0,0,0,0.10)` (`--ds-color-elevation-color-ambient`)
- Key: `rgba(0,0,0,0.16)` (`--ds-color-elevation-color-key`)

Product cards themselves carry no shadows — depth is achieved through background contrast
(white card on grey surface). Modal dialogs and cart drawers use drop shadows. Dark hero
sections create depth through background color contrast alone.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
| ----- | ----- | --- |
| `xs` | 2px | Tiny tags, micro-badges |
| `sm` | 4px | Standard badges, chip elements |
| `md` | 8px | Cards, input fields, modals |
| `lg` | 16px | Large cards, featured containers |
| `xl` | 32px | Promotional tiles, hero cards |
| `pill` | 999px | **All buttons** — primary, secondary, ghost |

All interactive buttons use `pill` (999px radius) without exception. This is the most
distinctive geometric signature of the LEGO digital brand. Cards and surfaces use `md`
(8px). Square/zero-radius elements appear only in full-bleed hero sections where the
container spans the viewport.

### Photography & Imagery

- Product photography: white background, consistent 1:1 or 4:3 aspect ratio
- Hero banners: full-bleed 16:9 or wider, product photography composited on themed backgrounds
- Theme/IP imagery uses color-matched backgrounds from the partner palette system
- No image border-radius on product photos within cards — images are flush
- Category and theme banners use consistent 2:1 wide-format crops

---

## Components

### Buttons

LEGO has a dual-purpose button system based on the `sk-button` design system class:

**Add to Bag (Orange — Primary E-commerce Action)**
- Background: `#F47D20` (LEGO Orange), Text: `#000000`
- Border-radius: `999px`, Padding: `10px 16px`
- Font: Cera Pro 500, 16px
- Hover: `#C9692B`, Focus ring: `#4695F0` 2px outline

**View Bag / Checkout (Blue — Account Actions)**
- Background: `#005AD2`, Text: `#FFFFFF`
- Border-radius: `999px`, Padding: `10px 16px`
- Font: Cera Pro 500, 16px
- Hover: `#0045B7`

**Ghost (On Dark Hero)**
- Background: `rgba(255,255,255,0.85)`, Text: `#141414`
- Border-radius: `999px`, Padding: `10px 16px`
- Font: Cera Pro 500, 16px

**Secondary (Outline on Dark)**
- Background: transparent, Border: `2px solid rgba(255,255,255,0.85)`, Text: `#FFFFFF`
- Border-radius: `999px`, Padding: `10px 16px`

Minimum touch target height: 44px for all button variants.

### Product Cards

Standard LEGO product tile pattern:
- White background, 8px border-radius
- 1px `#E5E5E5` border
- 16px inner padding
- Product image flush to card edges (no padding on image)
- Below image: product name in `title-md` (Cera Pro 700, 18.72px, ink)
- Price in `price` (Cera Pro 700, 14px)
- Add to Bag button: orange, full-width within card footer

### Input Fields

- Background: `#FFFFFF`, Border: `1px solid #848484`
- Border-radius: 8px, Padding: `12px 16px`
- Font: Cera Pro 400, 16px, color `#141414`
- Placeholder color: `#939393`
- Focus: border upgrades to `2px solid #4695F0` with white inner ring

### Navigation

Top navigation bar:
- Background: `#F8F8F8` (slightly off-white, distinct from canvas)
- Height: ~72px
- Primary nav links: Cera Pro 500, 16px, UPPERCASE, color `#000000`
- Hover: underline in brand red `#E3000B`
- Utility icons (search, cart, account): Cera Pro 500, 12px

### Badges & Tags

- **Sale/Promo**: Red background `#E3000B`, white text, `4px` radius
- **New**: Yellow `#FFD502`, black text, `4px` radius
- **VIP Points**: Blue `#005AD2`, white text, `4px` radius
- **Exclusive**: Dark `#141414`, white text, `4px` radius

---

## Do's and Don'ts

**Do:**
- Use full-pill (999px) radius on every button — this is the strongest brand signal
- Use Cera Pro 700 with negative tracking (-0.71px) on all display headings over 28px
- Use LEGO Orange (#F47D20) exclusively for the Add to Bag / primary commerce action
- Use LEGO Blue (#005AD2) for cart, checkout, and account-related CTAs
- Maintain white (#FFFFFF) or near-white (#F7F7F7) surfaces — the brand lives on a clean canvas
- Use the partner palette tokens for licensed theme pages (Star Wars, Harry Potter, etc.)
- Keep badge shapes at 4px or less — reserve pill shape for buttons only
- Apply the semantic color system for status states (error, success, warning, info)

**Don't:**
- Don't use logo red (#E3000B) or logo yellow (#FFED00) as general UI fill colors — these are reserved for the wordmark
- Don't round cards above 16px — the pill geometry is button-exclusive
- Don't use shadows on product cards — use border + background-contrast for elevation
- Don't mix orange and blue on the same button row — assign each to its distinct CTA role
- Don't use weights outside 400, 500, 700 — Cera Pro's system is three-weight only
- Don't apply uppercase text-transform outside of primary navigation items
- Don't use more than two font sizes in a single card component
- Don't use gradients as button fills — all brand buttons are flat solid colors

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
| ---------- | ----- | ----------- |
| `xs` | < 375px (~23.4375em) | Single column, stacked navigation |
| `sm` | 375px–580px (~36.25em) | 2-column product grid |
| `md` | 580px–900px (~56.25em) | 3-column grid, condensed nav |
| `lg` | 900px–1200px (~75em) | 4-column grid, full nav visible |
| `xl` | > 1200px (~100em) | 5–6 column grid, max container 1600px |

### Touch Targets

- All buttons: minimum 44px height
- Navigation items: minimum 44px height × 44px width
- Carousel prev/next controls: 44px × 44px
- Product card: entire surface is tappable (linked)

### Collapsing Strategy

- Top navigation collapses to hamburger menu below `md` (580px)
- Category mega-menus become bottom-sheet drawers on mobile
- Product grid: 4–5 col → 2–3 col → 2 col as viewport narrows
- Hero banners maintain full-bleed at all breakpoints; text overlay repositions from
  overlay to below-image on mobile
- Carousel navigation arrows hide on mobile (swipe-gesture only)

### Image Behavior

- Product images: `object-fit: contain` on white background
- Hero images: `object-fit: cover`, aspect-ratio 16:9 at desktop → 4:3 at mobile
- Theme category banners: 2:1 wide format maintained at all breakpoints via padding-trick or aspect-ratio
- Images load with `loading="lazy"` on below-fold content

---

## Agent Prompt Guide

### Quick Color Reference
- Primary (View Bag / Checkout): `#005AD2`
- Primary Active: `#0045B7`
- Add to Bag (CTA): `#F47D20`
- Add to Bag Active: `#C9692B`
- Canvas (page background): `#FFFFFF`
- Nav background: `#F8F8F8`
- Surface (section bg): `#F7F7F7`
- Ink (headings): `#141414`
- Body text: `#2C2C2C`
- Muted text: `#636363`
- Hairline (borders): `#D9D9D9`
- Brand Red (logo only): `#E3000B`
- Brand Yellow (logo only): `#FFED00`
- Focus ring: `#4695F0`
- Error: `#DD0000`
- Success: `#008439`

### Example Component Prompts

**Hero Section:**
"Create a hero on dark background (#141414). Headline 48px, Cera Pro (or Inter) 700, -1px tracking, white (#FFFFFF). Subheadline 18px, 400 weight, white. CTA buttons: ghost button (rgba(255,255,255,0.85) background, #141414 text, 999px radius, 10px 16px padding) and outline button (transparent, 2px solid rgba(255,255,255,0.85), white text, same geometry). Both 44px minimum height."

**Product Card:**
"Create a product card on white (#FFFFFF) background. 8px border-radius, 1px solid #E5E5E5 border. Product image 1:1, flush to card top. Below image: 16px padding area. Product name: Cera Pro (Inter) 700, 18.72px, #141414. Price: Cera Pro 700, 14px, #141414. Add to Bag button: full-width, #F47D20 background, #000000 text, 999px radius, 10px 16px padding, Cera Pro 500 16px. Hover: #C9692B."

**Button Set:**
"Primary (Blue): #005AD2 background, 999px radius, 10px 16px padding, Cera Pro (Inter) 500 16px, #FFFFFF text, no border. Hover: #0045B7. Add to Bag (Orange): #F47D20 background, same geometry, #000000 text. Both minimum 44px height."

**Navigation Bar:**
"Navigation on #F8F8F8 background. Logo left. Center nav links: Cera Pro 500 16px UPPERCASE, #000000. Right: search, account, cart icons. Border-bottom: 1px solid #D9D9D9. Height: 72px."

**Badge System:**
"Sale badge: #E3000B background, white text, Cera Pro 400 12px, 4px border-radius, 2px 8px padding. New badge: #FFD502 background, #000000 text, same geometry. VIP badge: #005AD2 background, white text, same geometry."

### Iteration Guide

1. Start with `#FFFFFF` canvas and `#F8F8F8` nav — do not use pure white for the nav bar
2. Use Cera Pro or Inter as fallback — load Inter from Google Fonts if Cera Pro unavailable
3. Apply 700 bold + negative tracking (-0.71px minimum) to all headings above 28px
4. Always use 999px border-radius on buttons — no exceptions for rounded-corner or square buttons
5. Reserve orange (#F47D20) for the primary commerce action only; use blue (#005AD2) for account/cart
6. Keep logo red (#E3000B) and logo yellow (#FFED00) off all UI fills — badge use only acceptable for Sale tags
7. Surface hierarchy: white canvas → #F7F7F7 sections → #F2F2F2 disabled states
8. Minimum button touch target: 44px height
