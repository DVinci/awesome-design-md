---
version: alpha
name: Etsy
description: |
  Etsy is a global handmade and vintage marketplace with a warm, artisanal visual identity.
  The design system balances a rich serif display typeface (Guardian-EgypTT) for editorial
  moments with a clean, humanist sans-serif (Graphik) for UI. The primary palette leads with
  a vivid orange (#F1641E) CTA against white canvas, accented by a deep denim navy (#232347)
  for navigation surfaces. Generous rounded buttons (24px radius), tactile card shadows,
  and craft-forward photography reinforce the handmade brand promise of "Keep Commerce Human".

colors:
  primary: "#F1641E"
  primary-active: "#CF4018"
  primary-light: "#FAA077"
  primary-tint: "#F8EBE6"
  accent-denim: "#2F466C"
  accent-denim-dark: "#232347"
  accent-denim-light: "#4D6BC6"
  accent-denim-tint: "#D7E6F5"
  accent-beeswax: "#FAA129"
  accent-beeswax-light: "#FDD95C"
  accent-beeswax-tint: "#FDEBD2"
  canvas: "#FFFFFF"
  surface: "#F7F7F7"
  surface-warm: "#F8EBE6"
  ink: "#222222"
  body: "#333333"
  muted: "#595959"
  hairline: "#EAEAEA"
  on-dark: "#FFFFFF"
  semantic-error: "#D32F2F"
  semantic-success: "#228F67"
  semantic-warning: "#A66800"

typography:
  display-xl:
    fontFamily: "\"Guardian-EgypTT\", Charter, \"Charter Bitstream\", Cambria, \"Noto Serif Light\", Georgia, serif"
    fontSize: 32px
    fontWeight: 300
    lineHeight: 1.125
    letterSpacing: 0.5px
  display-md:
    fontFamily: "\"Guardian-EgypTT\", Charter, \"Charter Bitstream\", Cambria, \"Noto Serif Light\", Georgia, serif"
    fontSize: 24px
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: 0.5px
  title-lg:
    fontFamily: "\"Graphik Webfont\", -apple-system, BlinkMacSystemFont, Roboto, \"Droid Sans\", \"Segoe UI\", Helvetica, Arial, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  title-md:
    fontFamily: "\"Graphik Webfont\", -apple-system, BlinkMacSystemFont, Roboto, \"Droid Sans\", \"Segoe UI\", Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  body-lg:
    fontFamily: "\"Graphik Webfont\", -apple-system, BlinkMacSystemFont, Roboto, \"Droid Sans\", \"Segoe UI\", Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "\"Graphik Webfont\", -apple-system, BlinkMacSystemFont, Roboto, \"Droid Sans\", \"Segoe UI\", Helvetica, Arial, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "\"Graphik Webfont\", -apple-system, BlinkMacSystemFont, Roboto, \"Droid Sans\", \"Segoe UI\", Helvetica, Arial, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  button:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Roboto\", \"Droid Sans\", \"Segoe UI\", Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  nav-link:
    fontFamily: "\"Graphik Webfont\", -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "\"Graphik Webfont\", -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
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
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 24px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: "12px 18px"
    border: "none"
    minHeight: "48px"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: "12px 18px"
    border: "none"

  button-primary-disabled:
    backgroundColor: "{colors.primary-light}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: "12px 18px"
    border: "none"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: "12px 18px"
    border: "1px solid {colors.ink}"

  button-secondary-active:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: "12px 18px"
    border: "2px solid {colors.ink}"

  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"
    boxShadow: "0 1px 4px 0 rgba(34,34,34,0.10)"

  card-product:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "0"
    border: "none"
    boxShadow: "none"

  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "9px 12px"
    border: "1px solid {colors.hairline}"
    boxShadow: "0 1px 4px 0 rgba(34,34,34,0.10) inset"

  text-input-focused:
    border: "1px solid {colors.ink}"

  search-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "96px 0 0 96px"
    padding: "9px 12px 9px 18px"
    border: "none"

  badge:
    backgroundColor: "{colors.primary-tint}"
    textColor: "{colors.primary}"
    rounded: "{rounded.xs}"
    padding: "2px 8px"
    typography: "{typography.caption}"

  badge-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.xs}"
    padding: "2px 8px"
    typography: "{typography.caption}"

  top-nav:
    backgroundColor: "{colors.accent-denim-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    border: "none"
    padding: "0"
---

# Etsy Design System

## Overview

Etsy's visual identity is rooted in the warmth and imperfection of handcraft. The design language deliberately mixes a refined serif display typeface (Guardian-EgypTT) — reminiscent of editorial broadsheets — with the utilitarian clarity of Graphik, a humanist sans-serif, creating tension between artisanal and functional. Orange (#F1641E) is the undisputed hero color: appearing on primary CTAs, price labels, and sale badges, it signals value and urgency without aggression. Deep denim navy (#232347) anchors the navigation, creating a strong brand frame that separates marketplace chrome from the warm white canvas below.

The marketplace prioritises discovery and trust. Product photography dominates every page at generous aspect ratios. Cards are intentionally minimal — no heavy shadows or rounded edges on product tiles — letting the photography do the selling. Whitespace is used deliberately: tight within card grids, generous between sections. The button system is one of the most recognisable in e-commerce: fully-rounded (24px) pill-shaped CTAs with bold weight and 48px minimum touch target, making them thumb-friendly across devices. The tag line "Keep Commerce Human" is reflected in every design decision: approachable, warm, and never corporate.

**Key visual characteristics:**
- Two-font system: serif (Guardian-EgypTT) for display, sans-serif (Graphik) for UI
- Vivid orange (#F1641E) primary CTA against white canvas
- Deep denim navy (#232347) navigation surface
- Fully rounded buttons (24px radius, 48px min height, bold weight)
- Product-photography-first layout — cards are frameless tiles
- Warm white canvas (#FFFFFF) with light hairline separators (#EAEAEA)
- Beeswax yellow (#FAA129) for "sale" and promotional accent moments
- Zero elevation on product tiles; subtle inset shadow on form inputs
- 15px/1.5 base body type for comfortable marketplace reading density
- Breadcrumb navigation and article layout use Guardian-EgypTT for editorial feel

**Positioning:** Etsy's design differentiates from Amazon's utilitarian density and Shopify's polished minimalism by leaning into craft aesthetic — the serif headline choice, the orange warmth, and the handmade-feeling approachability make it feel human-scaled rather than corporate.

---

## Colors

### Brand & Accent

| Token | Hex | Use |
|-------|-----|-----|
| `primary` | `#F1641E` | Primary CTA buttons, price labels, sale indicators |
| `primary-active` | `#CF4018` | Button hover/press state |
| `primary-light` | `#FAA077` | Disabled state, soft highlights |
| `primary-tint` | `#F8EBE6` | Badge backgrounds, soft alert areas |
| `accent-denim` | `#2F466C` | Secondary surfaces, brand moments |
| `accent-denim-dark` | `#232347` | Top navigation bar, footer |
| `accent-denim-light` | `#4D6BC6` | Links on dark backgrounds |
| `accent-denim-tint` | `#D7E6F5` | Informational banners |
| `accent-beeswax` | `#FAA129` | Sale/promotion banners |
| `accent-beeswax-light` | `#FDD95C` | Highlight/mark text |
| `accent-beeswax-tint` | `#FDEBD2` | Soft promotional areas |

### Surface

| Token | Hex | Use |
|-------|-----|-----|
| `canvas` | `#FFFFFF` | Page background, card backgrounds |
| `surface` | `#F7F7F7` | Secondary sections, grouped content |
| `surface-warm` | `#F8EBE6` | Promotional section backgrounds |

### Text

| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#222222` | Headings, strong text, interactive labels |
| `body` | `#333333` | Body copy, descriptions |
| `muted` | `#595959` | Secondary text, metadata, timestamps |
| `on-dark` | `#FFFFFF` | Text on dark surfaces and primary buttons |

### Semantic

| Token | Hex | Use |
|-------|-----|-----|
| `semantic-error` | `#D32F2F` | Error states, destructive actions |
| `semantic-success` | `#228F67` | Confirmation, completed states |
| `semantic-warning` | `#A66800` | Caution banners, stock alerts |

---

## Typography

### Font Families

**Guardian-EgypTT** — Proprietary Etsy editorial serif. Used for h1, h2, and major display moments. Available via Etsy's CDN at `/assets/type/Guardian-EgypTT-Light.woff2`. Fallback stack: `Charter, "Charter Bitstream", Cambria, "Noto Serif Light", "Droid Serif", Georgia, serif`.

**Graphik Webfont** — Proprietary Etsy UI sans-serif. Used for all body copy, navigation, buttons, labels. Available via Etsy's CDN at `/assets/type/Graphik-Regular-Web.woff2`. Fallback stack: `-apple-system, BlinkMacSystemFont, Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif`.

Note: Both fonts are proprietary. For third-party implementations, use the fallback stacks. Closest Google Fonts alternatives: **Playfair Display** (weight 300 for Guardian) and **DM Sans** or **Inter** (for Graphik).

### Hierarchy Table

| Role | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|--------|-------------|----------------|-----|
| `display-xl` | 32px | 300 | 1.125 | 0.5px | Page heroes, help center H1 |
| `display-md` | 24px | 300 | 1.2 | 0.5px | Section headers, article titles |
| `title-lg` | 20px | 700 | 1.3 | 0 | Category headings |
| `title-md` | 16px | 700 | 1.25 | 0 | Card titles, section labels |
| `body-lg` | 18px | 400 | 1.5 | 0 | Lead paragraphs, article intro |
| `body-md` | 15px | 400 | 1.5 | 0 | Default body copy, nav items |
| `body-sm` | 13px | 400 | 1.4 | 0 | Metadata, timestamps, captions |
| `button` | 16px | 700 | 1.5 | 0 | All button labels |
| `nav-link` | 15px | 400 | 1.5 | 0 | Navigation links |
| `caption` | 12px | 400 | 1.4 | 0 | Labels, tags, badges |

### Principles

- Guardian-EgypTT always at weight 300 (light) — never bold
- Graphik handles all weight variation from 400 to 700
- Body tracking is always `normal` — no custom letter spacing on body copy
- Slight positive tracking (0.5px) on display serif improves readability at large sizes
- `-webkit-font-smoothing: antialiased` applied globally for clean rendering

---

## Layout

### Spacing System

Base unit: **4px**. All spacing is a multiple of 4px.

| Token | Value | Use |
|-------|-------|-----|
| `xxs` | 4px | Tight icon/text gaps |
| `xs` | 8px | Inline spacing, tag gaps |
| `sm` | 12px | Form field internal padding |
| `md` | 16px | Card inner padding, list item gaps |
| `lg` | 24px | Section sub-gaps, card padding |
| `xl` | 32px | Section divisions |
| `xxl` | 48px | Major section breaks |
| `section` | 80px | Page-level section padding |

### Grid & Container

- Max container width: **1440px** desktop
- Content column max: **1280px** with 24px gutters
- Product grid: 2 cols (mobile) → 3 cols (tablet) → 4–6 cols (desktop)
- Article/help content: single column at 650px max-width
- Gutter: 16px mobile, 24px tablet+

### Whitespace Philosophy

Etsy uses whitespace to separate browsing contexts, not to add luxury. Within a product grid, card spacing is tight (8px gaps) to maximize density. Between page sections (hero, featured shops, categories), breathing room is generous (48–80px). The tension between dense discovery grid and spacious editorial moments is intentional: it creates visual rhythm and prevents overwhelming.

---

## Elevation & Depth

| Level | Treatment | Example use |
|-------|-----------|-------------|
| 0 | No shadow, no border | Product image tiles, icon buttons |
| 1 | `1px solid #EAEAEA` | Section dividers, form containers |
| 2 | `0 1px 4px 0 rgba(34,34,34,0.10)` | Cards, menus, dropdowns |
| 3 | `0 1px 4px 0 rgba(34,34,34,0.10) inset` | Input fields (inset shadow) |
| 4 | `0 8px 24px rgba(34,34,34,0.15)` | Modals, drawers |

### Shadow Philosophy

Etsy uses shadows sparingly. Product image tiles are completely flat — no shadow, no border — to let photography breathe. Functional containers (cards with text content, form inputs, dropdowns) use a subtle `1px rgba` shadow. Modals and overlays use a heavier soft shadow. The denim navy navigation requires no shadow — it separates from the canvas by color contrast alone.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `xs` | 4px | Small badges, table cells |
| `sm` | 6px | Form inputs, small cards |
| `md` | 8px | Content cards, modals |
| `lg` | 12px | Feature cards, panels |
| `xl` | 24px | Primary and secondary buttons |
| `pill` | 9999px | Full-pill tags, search bar |

Note: The search bar uses an asymmetric radius — `96px 0 0 96px` on the input and `0 96px 96px 0` on the search button — creating a single pill-shaped form unit.

### Photography & Imagery

- Product images: square 1:1 aspect ratio preferred; 4:3 for lifestyle photography
- Images fill their container with `object-fit: cover`
- No decorative borders or rounded corners on product tile images
- Photography is warm-toned — warm filters, natural light, handmade context
- Lifestyle images often show hands, craft process, or real home settings

---

## Components

### Buttons

**Primary** — Orange CTA: `background #F1641E`, 24px radius, 12px/18px padding, 16px bold, white text, 48px min-height.

**Primary Active** — `background #CF4018` on hover/press, same geometry.

**Primary Disabled** — `background #FAA077`, same geometry, pointer-events none.

**Secondary (Outline)** — Transparent background, 1px `#222222` border, 24px radius, same padding and font. Used for "Save to wishlist", "Message seller".

**Ghost/Transparent** — No background, no border, text-only interaction. Used within navs and for low-priority actions.

All buttons have `border-radius: 24px`, `min-height: 48px`, `min-width: 48px`, `font-weight: bold`, `font-size: 16px`.

### Cards

**Product Tile** — Frameless: no border, no shadow, no radius on image. Title at 14px/700, price at 14px/400 in `#222222`, shop name at 12px in `#595959`.

**Content Card** — White background, `border: 1px solid #EAEAEA`, `border-radius: 8px`, `padding: 24px`, subtle shadow.

**Featured Shop Card** — White background, `border-radius: 6px`, shop avatar at top, name bold 16px, tag line muted.

### Inputs & Forms

**Text Input** — White background, `border: 1px solid rgba(34,34,34,0.15)`, `border-radius: 6px`, inset shadow, `padding: 9px 12px`, `height: 48px`, 16px/400.

**Focus State** — Border becomes `1px solid #222222`, no shadow change.

**Search Bar** — Pill-shaped dual element: input `border-radius: 96px 0 0 96px`, submit button `border-radius: 0 96px 96px 0`. Both 48px height.

**Checkbox** — Custom styled with `#F1641E` fill when checked.

### Navigation

**Top Navigation** — Dark denim `#232347` background, white text, full width. Contains Etsy wordmark (white), category nav, search bar (white pill), auth actions. 15px body type.

**Category Navigation** — Horizontal scrollable row below primary nav, body text on white.

**Mobile Nav** — Full-screen drawer from left, dark denim background.

### Badges & Tags

**Sale Badge** — `#F1641E` background, white text, 4px radius, "Sale" label.

**Free Shipping Badge** — `#228F67` background, white text, 4px radius.

**Bestseller Badge** — `#FAA129` beeswax background, `#222222` text.

**Tag/Category Pill** — Transparent background, `#222222` border, `border-radius: 9999px`, 12px text.

---

## Do's and Don'ts

**Do:**
- Use Guardian-EgypTT at weight 300 for all display headings — the lightness is intentional and brand-defining
- Apply orange (#F1641E) only to primary CTAs and price/sale indicators — it carries action and value meaning
- Use the full-pill 24px radius on all button variants for consistency
- Maintain 48px min-height on all interactive elements for touch accessibility
- Place product images on completely flat tiles — no shadows or borders on the image itself
- Use denim dark (#232347) exclusively for the top navigation surface — do not use it on page content
- Use Guardian-EgypTT for help center and editorial content; switch to Graphik for marketplace UI

**Don't:**
- Don't use Guardian-EgypTT at weight 400 or 700 — it's a light-only editorial face
- Don't apply orange to backgrounds, large surfaces, or decorative elements — it reads as CTA only
- Don't use border-radius smaller than 24px on buttons — it breaks the rounded pill identity
- Don't add drop shadows to product image tiles — they create visual noise in dense grids
- Don't use beeswax yellow (#FAA129) as a primary CTA — it's reserved for promotional/sale moments
- Don't use Graphik at weights below 400 — the light weight is reserved for Guardian
- Don't use the denim navy on page content areas — it belongs only to chrome/navigation

---

## Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 640px | 1–2 col product grid; hamburger nav; full-width search bar |
| Tablet | 640px–899px | 3 col grid; condensed nav; 8-article popular list |
| Desktop SM | 900px–1023px | 4 col grid; full horizontal nav |
| Desktop | 1024px+ | 4–6 col grid; full nav with hover dropdowns; 65vh min content |
| Wide | 1440px+ | Max container width locked at 1440px |

### Touch Targets

- Minimum 48px × 48px for all interactive elements
- Buttons: `min-height: 48px`, `min-width: 48px`
- Search bar: 48px height
- Navigation items: 44px+ tap area

### Collapsing Strategy

- Navigation collapses from horizontal to hamburger menu at < 640px
- Category bar becomes horizontal scroll strip on mobile
- Product grids: 2 cols mobile → 3 tablet → 4–6 desktop
- Footer collapses from 4-column grid to single accordion on mobile

### Image Behavior

- Product images maintain 1:1 aspect ratio at all breakpoints via `aspect-ratio: 1/1; object-fit: cover`
- Hero/lifestyle images use 16:9 on desktop, 4:3 on tablet, 1:1 on mobile
- Images are not rounded at any breakpoint on product tiles

---

## Agent Prompt Guide

### Quick Color Reference

- Primary CTA: `#F1641E`
- Primary Active: `#CF4018`
- Canvas (background): `#FFFFFF`
- Ink (primary text): `#222222`
- Body text: `#333333`
- Muted text: `#595959`
- Surface (secondary bg): `#F7F7F7`
- Hairline (borders): `#EAEAEA`
- Navigation bg: `#232347`
- Accent yellow (sale): `#FAA129`

### Example Component Prompts

**Hero Section:**
"Create a hero on white (#FFFFFF) background. Headline in Guardian-EgypTT (or Playfair Display), 32px, weight 300, 0.5px letter-spacing, #222222. Sub-headline in Graphik (or Inter), 18px, weight 400, #333333. Primary CTA button: #F1641E background, 24px radius, 12px/18px padding, 16px bold white text."

**Product Card:**
"Create a product tile on white (#FFFFFF). No border, no shadow. Product image 1:1 aspect ratio, fills top. Below image: seller name 12px #595959; product title 14px weight 700 #222222 (2-line max); price 14px #222222; star rating in #FAA129."

**Button Set:**
"Primary button: #F1641E background, 24px border-radius, 12px/18px padding, 16px bold white text, no border. Secondary button: transparent, 1px solid #222222 border, same radius and padding, #222222 text."

**Navigation Bar:**
"Navigation bar: #232347 background, white text. Left: Etsy wordmark. Center: white pill search input (96px left radius) + orange search button (96px right radius, #F1641E). Right: cart, wishlist, account — white icon buttons."

**Sale Badge:**
"Badge: #F1641E background, white text, 4px border-radius, 12px font size, 'Sale' or '20% off'. Positioned absolute top-left of product image tile."

### Iteration Guide

1. Start with white (#FFFFFF) canvas — Etsy's marketplace is light-mode only
2. Load Guardian-EgypTT (or Playfair Display as substitute) for all h1/h2 at weight 300
3. Load Graphik (or Inter/DM Sans as substitute) for all UI text
4. Use #F1641E orange exclusively for CTAs and price labels — guard this color's meaning
5. Make all buttons fully rounded (24px radius, min 48px height)
6. Product grids: no card shadow, no image border — photography is the only visual weight
7. Set top nav to #232347 — the dark frame separates chrome from marketplace canvas
8. Use #FAA129 beeswax only for promotional/sale moments, not for primary actions
