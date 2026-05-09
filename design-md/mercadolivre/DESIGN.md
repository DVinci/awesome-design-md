---
version: alpha
name: Mercado Livre
description: |
  Mercado Livre (Mercado Libre) is Latin America's largest e-commerce marketplace,
  operating in Brazil and across 18 countries. The design system is built around a
  signature cadmium yellow brand bar, a clean white card grid, and a functional blue
  CTA system — optimised for high-density product browsing at every screen size.
  Proxima Nova at light-to-regular weights keeps the interface fast and legible, while
  semantic green (free shipping) and orange (promotions) accents reinforce commercial
  hierarchy. The overall aesthetic is marketplace-practical: efficient, high-trust,
  and unmistakably yellow.

colors:
  primary: "#FFE600"
  primary-active: "#F0D800"
  accent-blue: "#3483FA"
  accent-blue-active: "#2968C8"
  accent-green: "#00A650"
  accent-orange: "#FF7733"
  canvas: "#E7E7E7"
  surface: "#FFFFFF"
  surface-alt: "#F5F5F5"
  surface-green-tint: "#E6F7EF"
  ink: "#333333"
  body: "#333333"
  muted: "#666666"
  subtle: "#999999"
  hairline: "#DDDDDD"
  hairline-dark: "#C0C0C0"
  semantic-success: "#00A650"
  semantic-warning: "#FF7733"
  semantic-error: "#F23D4F"
  on-primary: "#333333"
  on-blue: "#FFFFFF"
  on-dark: "#FFFFFF"

typography:
  display-xl:
    fontFamily: '"Proxima Nova", -apple-system, "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif'
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0
  display-md:
    fontFamily: '"Proxima Nova", -apple-system, "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif'
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  title-lg:
    fontFamily: '"Proxima Nova", -apple-system, "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif'
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  title-md:
    fontFamily: '"Proxima Nova", -apple-system, "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif'
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: 0
  body-lg:
    fontFamily: '"Proxima Nova", -apple-system, "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif'
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.35
    letterSpacing: 0
  body-md:
    fontFamily: '"Proxima Nova", -apple-system, "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  body-sm:
    fontFamily: '"Proxima Nova", -apple-system, "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  button:
    fontFamily: '"Proxima Nova", -apple-system, "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif'
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0
  nav-link:
    fontFamily: '"Proxima Nova", -apple-system, "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
  caption:
    fontFamily: '"Proxima Nova", -apple-system, "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
  badge:
    fontFamily: '"Proxima Nova", -apple-system, "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif'
    fontSize: 8px
    fontWeight: 600
    lineHeight: 1.0
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
  md: 6px
  lg: 8px
  xl: 12px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "10px 20px"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.accent-blue}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
    border: "1px solid {colors.accent-blue}"

  button-secondary-active:
    backgroundColor: "{colors.surface-green-tint}"
    textColor: "{colors.accent-blue-active}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
    border: "1px solid {colors.accent-blue-active}"

  button-blue:
    backgroundColor: "{colors.accent-blue}"
    textColor: "{colors.on-blue}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
    border: "none"

  button-blue-active:
    backgroundColor: "{colors.accent-blue-active}"
    textColor: "{colors.on-blue}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "10px 20px"

  card-base:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    border: "1px solid {colors.hairline}"
    boxShadow: "0 1px 2px rgba(0,0,0,0.12)"

  card-product:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "0"
    border: "none"
    boxShadow: "0 1px 2px rgba(0,0,0,0.12)"

  text-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
    padding: "10px 15px"
    border: "1px solid transparent"
    boxShadow: "0 1px 2px rgba(0,0,0,0.2)"

  text-input-focused:
    border: "1px solid {colors.accent-blue}"
    boxShadow: "0 1px 4px rgba(52,131,250,0.2)"

  top-nav:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    border: "none"
    boxShadow: "0 1px 2px rgba(0,0,0,0.12)"

  badge-free-shipping:
    backgroundColor: "{colors.accent-green}"
    textColor: "{colors.on-blue}"
    typography: "{typography.badge}"
    rounded: "{rounded.lg}"
    padding: "1px 3px"
    textTransform: "uppercase"

  badge-discount:
    backgroundColor: "{colors.semantic-error}"
    textColor: "{colors.on-blue}"
    typography: "{typography.badge}"
    rounded: "{rounded.xs}"
    padding: "2px 4px"

  badge-promotion:
    backgroundColor: "{colors.accent-orange}"
    textColor: "{colors.on-blue}"
    typography: "{typography.badge}"
    rounded: "{rounded.xs}"
    padding: "2px 4px"
---

# Mercado Livre Design System

## Overview

Mercado Livre is the dominant e-commerce platform across Latin America, and its design language reflects decades of trust-building with millions of buyers and sellers. The visual system is anchored by cadmium yellow — one of the most recognisable brand colours in the region — paired with functional blue CTAs and a neutral grey canvas that lets product imagery and price information stand out. This is not a design system about beauty; it is a design system about clarity, speed, and commercial confidence.

The typography stack is built entirely on Proxima Nova, a humanist geometric sans-serif that balances approachability with information density. Font weights skew light-to-regular for body content and step up to semibold only for headings and interactive labels — a deliberate choice that keeps pages scannable when dozens of product cards are on screen simultaneously. Compared to competitors like Amazon (which relies on a custom typeface and darker palettes) or Shopify storefronts, Mercado Livre's UI feels more open and sun-lit, leaning heavily into white card surfaces and generous inner padding.

Key visual characteristics:
- Signature cadmium yellow (#FFE600) navbar anchors every page with unmistakable brand presence
- White product cards with 6px radius and subtle 1px drop-shadow float on a light grey (#E7E7E7) canvas
- Blue (#3483FA) is the sole interactive CTA colour — reserved for links, buy buttons, and focus states
- Semantic green (#00A650) exclusively signals free shipping and success states
- Orange (#FF7733) marks promotions and time-limited deals
- Proxima Nova light weight (300) used for body text and prices — visual lightness supports dense information layouts
- Border radius is minimal (2–8px) — no pill buttons; the aesthetic is rectangular and functional
- Card shadows are almost imperceptible (1px, 12% opacity) — depth is suggested rather than imposed

## Colors

### Brand & Accent

| Token | Hex | Use |
| --- | --- | --- |
| `primary` | `#FFE600` | Navbar background, brand bar, key highlight |
| `primary-active` | `#F0D800` | Navbar hover, pressed yellow elements |
| `accent-blue` | `#3483FA` | Links, CTA buttons, focus outlines |
| `accent-blue-active` | `#2968C8` | Button hover/pressed state |
| `accent-green` | `#00A650` | Free shipping badges, success states |
| `accent-orange` | `#FF7733` | Promotional banners, deal highlights |

### Surface

| Token | Hex | Use |
| --- | --- | --- |
| `canvas` | `#E7E7E7` | Page background between cards |
| `surface` | `#FFFFFF` | Product cards, panels, search bar |
| `surface-alt` | `#F5F5F5` | Sidebar, secondary sections |
| `surface-green-tint` | `#E6F7EF` | Free shipping info panels |

### Text

| Token | Hex | Use |
| --- | --- | --- |
| `ink` | `#333333` | Headings, product titles, primary text |
| `body` | `#333333` | Default body text (same as ink) |
| `muted` | `#666666` | Secondary labels, filter text |
| `subtle` | `#999999` | Footer, tertiary metadata |

### Semantic

| Token | Hex | Use |
| --- | --- | --- |
| `semantic-success` | `#00A650` | Free shipping confirmation, order success |
| `semantic-warning` | `#FF7733` | Promotional urgency, low stock alerts |
| `semantic-error` | `#F23D4F` | Errors, out-of-stock, price-drop badges |

## Typography

### Font Family

**Proxima Nova** is Mercado Livre's primary typeface — a geometric humanist sans with excellent legibility at small sizes, available as a commercial web font loaded from their CDN. Fallback stack: `-apple-system, "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif`.

Mercado Livre does not publish a Google Fonts-compatible substitute. For prototyping, **Nunito** or **Raleway** provides the closest geometric-humanist feel.

### Hierarchy Table

| Role | Size | Weight | Line Height | Letter Spacing | Use |
| --- | --- | --- | --- | --- | --- |
| `display-xl` | 28px | 600 | 1.2 | 0 | Page/section H1 headings |
| `display-md` | 24px | 400 | 1.25 | 0 | Category headings, filter panels |
| `title-lg` | 20px | 600 | 1.25 | 0 | Subcategory titles, search results H1 |
| `title-md` | 18px | 600 | 1.15 | 0 | Card group headings |
| `body-lg` | 16px | 300 | 1.35 | 0 | Product card body, prices |
| `body-md` | 14px | 400 | 1.4 | 0 | Body copy, promotional text |
| `body-sm` | 12px | 400 | 1.25 | 0 | Disclaimers, tooltip text |
| `button` | 14px | 600 | 1.0 | 0 | CTA and action labels |
| `nav-link` | 13px | 400 | 1.0 | 0 | Header navigation items |
| `caption` | 12px | 400 | 1.0 | 0 | Image captions, metadata |
| `badge` | 8px | 600 | 1.0 | 0 | GRÁTIS/FREE badge labels |

### Principles

- Use weight 300 for product prices and card body to create visual lightness in dense grids
- Weight 600 is reserved for headings and interactive labels — do not mix more than two weights on a single card
- No letter-spacing is applied — Proxima Nova's built-in spacing is sufficient at all sizes
- Scale sizes are modest; this is a utility-first type system, not an editorial hierarchy

## Layout

### Spacing System

Base unit: **8px**. All spacing values are multiples.

| Token | Value | Use |
| --- | --- | --- |
| `xxs` | 4px | Icon inner margin, badge padding |
| `xs` | 8px | List item separation, tight groups |
| `sm` | 12px | Compact button padding vertical |
| `md` | 16px | Card inner padding, standard gap |
| `lg` | 24px | Section sub-group separation |
| `xl` | 32px | Panel separation |
| `xxl` | 48px | Major section breaks |
| `section` | 80px | Top-level page section spacing |

### Grid & Container

- Max content width: **1200px** on desktop
- Search results grid: 4–5 columns at 1200px, 2 columns at tablet, 1 column at mobile
- Card gutters: **16px** horizontal, **16px** vertical
- Sidebar filter panel: fixed **220px** width on desktop
- Navbar: full-width, 56px tall on desktop, 48px on mobile

### Whitespace Philosophy

Mercado Livre uses whitespace functionally, not decoratively. The grey canvas (`#E7E7E7`) acts as the gutter between white cards — creating a tile-grid feel similar to physical market stalls. Section headings (H1/H2) receive a 24px bottom margin before the product grid begins. Footer sections are dense with 13px text and minimal padding, reflecting the low-priority status of that zone.

## Elevation & Depth

| Level | Treatment | Example Use |
| --- | --- | --- |
| 0 — Flat | No shadow, no border | Body canvas, section labels |
| 1 — Card | `0 1px 2px rgba(0,0,0,0.12)` | Product cards, search results |
| 2 — Raised | `0 1px 4px rgba(0,0,0,0.20)` | Dropdowns, autocomplete panel |
| 3 — Overlay | `0 4px 12px rgba(0,0,0,0.20)` | Modal dialogs, bottom drawers |
| Nav | `0 1px 2px rgba(0,0,0,0.12)` | Sticky header after scroll |

### Shadow Philosophy

Shadows are deliberately subtle — product photography provides the visual weight. Elevation is used only to distinguish interactive layers (cards, dropdowns) from the static canvas. No coloured or inset shadows appear in the production UI.

## Shapes

### Border Radius Scale

| Token | Value | Use |
| --- | --- | --- |
| `xs` | 2px | Search bar, text inputs |
| `sm` | 4px | Small buttons, tooltips |
| `md` | 6px | Product cards |
| `lg` | 8px | Shipping/free badges, chip filters |
| `xl` | 12px | Modals, bottom sheets |
| `pill` | 9999px | Not used in production UI |

Mercado Livre's design is intentionally rectangular. Pills and large radius values are absent — using them would break the functional, marketplace aesthetic.

### Photography & Imagery

- Product images are displayed in **1:1 square aspect ratio** within cards
- Images fill their container with `object-fit: contain` on white backgrounds
- No border-radius is applied to product images inside cards
- Hero banners use a **3:1 landscape** ratio on desktop, collapsing to **2:1** on mobile
- Seller profile thumbnails use **circle crop** (50% radius)

## Components

### Buttons

**Primary (Yellow)**
- Background: `#FFE600` | Text: `#333333` | Radius: 6px | Padding: `10px 20px`
- Semibold 14px Proxima Nova
- Used sparingly — seller-facing actions and top-level CTAs
- Hover: `#F0D800`

**Blue CTA (default buyer action)**
- Background: `#3483FA` | Text: `#FFFFFF` | Radius: 6px | Padding: `10px 20px`
- Semibold 14px Proxima Nova
- This is the de-facto "Add to cart" and "Buy now" button — it dominates the product page
- Hover: `#2968C8`

**Ghost / Text link**
- Background: `transparent` | Text: `#3483FA` | No border
- 14px, regular weight
- Used for secondary actions like "See all", "View more"

### Cards

**Product Card**
- Background: `#FFFFFF` | Radius: 6px | Shadow: `0 1px 2px rgba(0,0,0,0.12)`
- No border
- Padding: `16px` internal
- Contains: product image (square), title (2-line clamp, 16px light), price (large semibold), shipping badge

**Filter Panel**
- Background: `#FFFFFF` | Border-right: `1px solid #DDDDDD`
- Left sidebar, 220px wide
- Section headers in semibold 16px, options in 14px regular

### Inputs & Forms

**Search Bar**
- Background: `#FFFFFF` | Radius: 2px | Shadow: `0 1px 2px rgba(0,0,0,0.20)`
- Padding: `10px 15px` | Border: `1px solid transparent`
- Font: 16px Proxima Nova regular
- Focus: border becomes `1px solid #3483FA` with soft blue glow

**Filter Checkboxes**
- Custom styled squares at 16px with `#3483FA` check colour
- Label: 14px regular, `#333333`

### Navigation

**Header / Navbar**
- Background: `#FFE600` | Height: 56px desktop, 48px mobile
- Logo left-aligned | Search bar centre | Account/cart icons right
- Shadow: `0 1px 2px rgba(0,0,0,0.12)`
- Category nav strip directly below: `#FFFFFF` background, 13px links in `#3483FA`

**Breadcrumbs**
- Font: 12px regular | Colour: `#3483FA` for links, `#666666` for current page
- Separator: `>` character in `#999999`

### Badges & Tags

**Free Shipping Badge (GRÁTIS)**
- Background: `#00A650` | Text: `#FFFFFF` | 8px bold uppercase
- Radius: 8px | Padding: `1px 3px`

**Discount Badge**
- Background: `#F23D4F` | Text: `#FFFFFF` | 8px bold
- Radius: 2px | Padding: `2px 4px`

**Promotional Tag**
- Background: `#FF7733` | Text: `#FFFFFF` | 8px bold
- Radius: 2px | Padding: `2px 4px`

## Do's and Don'ts

### Do

- Use `#FFE600` exclusively as the header background — it is the brand's single strongest identifier
- Use `#3483FA` for all interactive CTAs (buy, add to cart, links) — this is the universal buyer signal
- Use `#00A650` only for free shipping and logistical success states — its meaning is fixed in user memory
- Apply weight 300 to prices and product body copy to maintain visual lightness in dense grids
- Keep card radius at 6px — the marketplace aesthetic demands rectangular, not rounded, surfaces
- Use the grey canvas (`#E7E7E7`) as the gutter between cards, not white — it creates the tile-market feel
- Maintain 16px padding inside all product cards for consistency across grid breakpoints

### Don't

- Do not use `#FFE600` for buttons or text backgrounds — it reads as navigation, not action
- Do not apply radius larger than 8px to any card or button — avoid the "soft app" look
- Do not use more than two font weights on a single card component
- Do not render prices in bold or black — Proxima Nova light on white at large size is the established pattern
- Do not use coloured shadows (yellow glow, blue glow) — shadows are always neutral black at low opacity
- Do not place white text directly on the yellow navbar without contrast verification
- Do not use more than three accent colours on a single page section — yellow + blue + one semantic colour per context

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
| --- | --- | --- |
| Mobile | < 768px | Single-column product grid, collapsed hamburger nav, stacked filters as bottom drawer |
| Tablet | 768px–1024px | 2-column product grid, simplified sidebar, condensed navbar |
| Desktop | 1024px–1200px | 4-column grid, full sidebar, expanded navbar with category strip |
| Wide | > 1200px | Content max-width capped at 1200px, centred on canvas |

### Touch Targets

- Minimum button height: 44px on mobile
- Product cards: full card is tappable
- Filter checkboxes: touch target expanded to 44x44px via padding
- Navbar icons: 44x44px minimum

### Collapsing Strategy

- Search bar remains full-width on all breakpoints — it is the primary interaction surface
- Category navigation strip collapses into a horizontal scroll on tablet and a hamburger submenu on mobile
- Sidebar filters convert to a bottom drawer modal on mobile with "Filtrar" trigger button
- Product grid reduces from 4 → 2 → 1 columns as viewport narrows

### Image Behavior

- Product images maintain 1:1 aspect ratio at all breakpoints via `padding-top: 100%` trick
- Hero banners switch from 3:1 desktop to a stacked title + image layout on mobile
- Images are lazy-loaded below the fold with a grey placeholder background

## Agent Prompt Guide

### Quick Color Reference

- Primary yellow (navbar): `#FFE600`
- Blue CTA (buy/links): `#3483FA`
- Blue active: `#2968C8`
- Canvas background: `#E7E7E7`
- Card surface: `#FFFFFF`
- Ink (headings): `#333333`
- Muted text: `#666666`
- Hairline border: `#DDDDDD`
- Free shipping green: `#00A650`
- Promo orange: `#FF7733`
- Error red: `#F23D4F`

### Example Component Prompts

**Hero / Banner Section:**
"Create a marketplace hero banner on a light grey (#E7E7E7) canvas. Yellow (#FFE600) top bar 56px tall containing a centred white search input (radius 2px, shadow `0 1px 2px rgba(0,0,0,0.2)`). Below: white (#FFFFFF) promotional banner card at 3:1 ratio with 6px radius. Headline in Proxima Nova 28px semibold #333333. Subheading in 14px light #666666."

**Product Card:**
"Create a product card on white (#FFFFFF) background. Radius 6px, shadow `0 1px 2px rgba(0,0,0,0.12)`. Square product image at top (1:1). Title: 2 lines max, 14px Proxima Nova light #333333. Price: 20px semibold #333333 with fraction in 12px. Green badge (#00A650) for free shipping: 8px bold uppercase, radius 8px. Blue CTA button (#3483FA) at bottom: 14px semibold white, radius 6px, padding `10px 20px`."

**Buy Now Button:**
"Primary CTA button: background #3483FA, text #FFFFFF, Proxima Nova 14px semibold, border-radius 6px, padding `10px 20px`, no border. Hover state background #2968C8. Full-width on mobile."

**Search Bar:**
"Search bar on yellow (#FFE600) navbar. White (#FFFFFF) rounded input (radius 2px), 16px Proxima Nova regular, padding `10px 15px 10px 15px`, shadow `0 1px 2px rgba(0,0,0,0.2)`. Right-aligned blue (#3483FA) search icon button."

**Filter Sidebar:**
"White (#FFFFFF) sidebar panel 220px wide, separated from content area by #E7E7E7 canvas gap. Section heading: 16px Proxima Nova semibold #333333. Filter options: 14px regular #333333, custom checkbox with #3483FA check colour. Hover row: #F5F5F5 background."

### Iteration Guide

1. Start with the grey canvas (`#E7E7E7`) as the page background — not white
2. Place white product cards on the grey canvas with 6px radius and `0 1px 2px rgba(0,0,0,0.12)` shadow
3. Use `#3483FA` for all interactive elements — links, buttons, focus rings — never yellow for actions
4. Apply Proxima Nova weight 300 for prices and product details; 600 for headings and button labels
5. Add `#00A650` badges only for logistical signals (free shipping, delivery confirmed)
6. Keep the yellow navbar at the very top; never repeat yellow elsewhere on the page
7. Check that white text on `#3483FA` meets WCAG AA contrast (it passes at 4.6:1)
