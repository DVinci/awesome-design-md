---
version: alpha
name: Amazon
description: |
  Amazon's design language is a dense, utility-first retail system built around transactional
  clarity and trust. The palette centers on a signature Amazon orange-yellow for CTAs, a dark
  navy header, and a pure white canvas — optimized for maximum product legibility and fast
  purchase decisions. Typography is set in Amazon Ember (a humanist sans-serif) with Arial
  fallback, keeping body text tight at 14px for information density. Elevation is nearly flat;
  depth comes from background color shifts between dark navy navigation layers and light content
  surfaces. The design prioritizes conversion: every UI decision serves discoverability, price
  visibility, and frictionless checkout.

colors:
  primary: "#FFD814"
  primary-active: "#F0C14B"
  accent-orange: "#FFA41C"
  accent-amber: "#FEBD69"
  ink: "#0F1111"
  body: "#0F1111"
  muted: "#565959"
  subdued: "#888C8C"
  canvas: "#FFFFFF"
  surface: "#F0F2F2"
  surface-subtle: "#FAFAFA"
  surface-dark: "#232F3E"
  nav-dark: "#131921"
  on-dark: "#FFFFFF"
  link: "#2162A1"
  hairline: "#888C8C"
  semantic-success: "#0B7B3C"
  semantic-error: "#CC0C39"
  semantic-warning: "#FFA41C"
  deal-red: "#CC0C39"
  price-red: "#C10015"

typography:
  display-xl:
    fontFamily: "\"Amazon Ember\", Arial, sans-serif"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.29
    letterSpacing: 0
  display-md:
    fontFamily: "\"Amazon Ember\", Arial, sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  title-lg:
    fontFamily: "\"Amazon Ember\", Arial, sans-serif"
    fontSize: 21px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  title-md:
    fontFamily: "\"Amazon Ember\", Arial, sans-serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: 0
  body-lg:
    fontFamily: "\"Amazon Ember\", Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "\"Amazon Ember\", Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  body-sm:
    fontFamily: "\"Amazon Ember\", Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  button:
    fontFamily: "\"Amazon Ember\", Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  nav-link:
    fontFamily: "\"Amazon Ember\", Arial, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0
  caption:
    fontFamily: "\"Amazon Ember\", Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  price-display:
    fontFamily: "\"Amazon Ember\", Arial, sans-serif"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0

spacing:
  xxs: 4px
  xs: 8px
  sm: 10px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px

rounded:
  xs: 4px
  sm: 8px
  md: 8px
  lg: 12px
  pill: 100px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "5px 11px"
    border: "1px solid {colors.primary}"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "5px 11px"
    border: "1px solid {colors.primary-active}"

  button-primary-disabled:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "5px 11px"
    border: "1px solid {colors.hairline}"

  button-secondary:
    backgroundColor: "{colors.accent-orange}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "5px 11px"
    border: "1px solid {colors.accent-orange}"

  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "5px 11px"
    border: "1px solid {colors.hairline}"

  button-ghost-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "5px 11px"
    border: "1px solid {colors.nav-dark}"

  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xs}"
    padding: "{spacing.md}"
    border: "1px solid {colors.hairline}"

  card-product:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xs}"
    padding: "{spacing.sm}"
    border: "none"
    boxShadow: "none"

  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "7px 10px"
    border: "1px solid {colors.hairline}"

  text-input-focused:
    border: "1px solid {colors.accent-amber}"
    boxShadow: "0 0 0 3px rgba(254, 189, 105, 0.5)"

  top-nav:
    backgroundColor: "{colors.nav-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    border: "none"

  sub-nav:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    border: "none"

  badge-deal:
    backgroundColor: "{colors.deal-red}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: "2px 6px"

  badge-savings:
    textColor: "{colors.deal-red}"
    typography: "{typography.body-md}"

  price-tag:
    textColor: "{colors.ink}"
    typography: "{typography.price-display}"

  price-tag-strikethrough:
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"

  search-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
    border: "1px solid {colors.accent-amber}"

  search-submit:
    backgroundColor: "{colors.accent-amber}"
    textColor: "{colors.ink}"
    rounded: "0 4px 4px 0"
    padding: "0 10px"
---

# Amazon Design System

## Overview

Amazon's visual design is an industrial-strength retail system — engineered for maximum throughput, not aesthetic delight. The brand operates at global scale across every product category imaginable, so the design language prioritizes clarity, trust signals, and conversion over visual minimalism. Every element earns its place by serving the purchase flow.

The palette is immediately recognizable: a nearly-black navy header (`#131921`) anchors the top of every page, the famous Amazon yellow-orange (`#FFD814`) marks every primary action, and an expansive white canvas gives products the spotlight. Typography is dense and practical — Amazon Ember at 14px for most UI copy, scaling up only for prices and product titles. Shadows are nearly absent; hierarchy is communicated through background color shifts between dark navbars, white content areas, and light-grey surface zones.

Key visual characteristics:
- **Signature CTAs**: Yellow `#FFD814` "Add to Cart" and orange `#FFA41C` "Buy Now" — pill-radius buttons on white product cards create instant visual hierarchy
- **Dual-dark navigation**: Two-tier header (near-black `#131921` belt + navy `#232F3E` category row) creates a strong anchor over white content
- **Amazon Ember typeface**: Humanist sans-serif with Arial fallback; consistent weight (400) everywhere except headings and nav labels (700)
- **Price-first hierarchy**: 28px price display (`#0F1111`) with fractional superscript is the largest recurring text on product pages
- **Deal red for urgency**: `#CC0C39` signals discounts and limited-time deals; `#C10015` for price-drop links
- **Link blue (`#2162A1`)**: All navigational links, review counts, and brand stores use a consistent subdued blue — never the same orange as CTAs
- **Surface layering**: White canvas → `#F0F2F2` filter panels / search boxes → `#FAFAFA` secondary nav → `#232F3E` category nav → `#131921` header
- **Utility-first spacing**: Tight 4–10px micro-spacing dominates; section-level spacing appears mostly in footer and category landing pages

Amazon differentiates from competitors like Walmart (blue-dominant, bolder type) and Target (red-centric, more editorial) through its restrained color use outside of CTAs, information density, and universal trust signals (Prime badge, review stars, delivery dates).

---

## Colors

### Brand & CTA

| Token | Hex | Use |
|-------|-----|-----|
| `primary` | `#FFD814` | "Add to Cart" button background — the most important click target |
| `primary-active` | `#F0C14B` | Add to Cart hover/pressed state |
| `accent-orange` | `#FFA41C` | "Buy Now" button — secondary purchase CTA |
| `accent-amber` | `#FEBD69` | Search submit button, input focus ring accent |
| `link` | `#2162A1` | All hyperlinks, review counts, brand store names |

### Surface & Navigation

| Token | Hex | Use |
|-------|-----|-----|
| `canvas` | `#FFFFFF` | Main page background, product cards, all content areas |
| `surface` | `#F0F2F2` | Filter sidebar, search bar wrapper, secondary panels |
| `surface-subtle` | `#FAFAFA` | Sub-navigation background beneath main nav |
| `surface-dark` | `#232F3E` | Category navigation row, footer background |
| `nav-dark` | `#131921` | Top navigation belt (logo, search, cart, account) |
| `on-dark` | `#FFFFFF` | Text and icons on all dark nav/footer surfaces |

### Text

| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#0F1111` | Headings, product titles, price display, body copy |
| `body` | `#0F1111` | Standard body text (same as ink on white canvas) |
| `muted` | `#565959` | Strikethrough/was-prices, secondary descriptions |
| `subdued` | `#888C8C` | Borders, dividers, meta information |

### Semantic

| Token | Hex | Use |
|-------|-----|-----|
| `semantic-success` | `#0B7B3C` | "In Stock" availability text |
| `semantic-error` | `#CC0C39` | Out-of-stock, deal percentage badges |
| `semantic-warning` | `#FFA41C` | Low-stock warnings (shares orange CTA) |
| `deal-red` | `#CC0C39` | "Limited time deal" badges, savings percentages |
| `price-red` | `#C10015` | Price-drop comparison links |

---

## Typography

### Font Family

Amazon uses **Amazon Ember** — a proprietary humanist sans-serif commissioned by Amazon in 2015. It is available through Amazon's CDN for Kindle and Alexa apps but falls back gracefully to `Arial, sans-serif` on the web. The web stack is: `"Amazon Ember", Arial, sans-serif`.

For projects without Amazon Ember, Arial is the correct fallback — not Helvetica. The two are designed to be visually compatible at the weights Amazon uses (400 regular, 700 bold).

### Hierarchy Table

| Role | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|--------|-------------|----------------|-----|
| `display-xl` | 28px | 400 | 1.29 | 0 | Price display, hero product names |
| `display-md` | 24px | 400 | 1.33 | 0 | Product title (H1 on PDP) |
| `title-lg` | 21px | 700 | 1.30 | 0 | Section headers on homepage carousels |
| `title-md` | 18px | 700 | 1.33 | 0 | Category headers, sub-section titles |
| `body-lg` | 16px | 400 | 1.50 | 0 | Footer column headers, feature callouts |
| `body-md` | 14px | 400 | 1.43 | 0 | Nav links, button labels, primary body copy |
| `body-sm` | 12px | 400 | 1.33 | 0 | Captions, badge text, review star counts |
| `button` | 14px | 400 | 1.43 | 0 | All button labels (Add to Cart, Buy Now) |
| `nav-link` | 12px | 700 | 1.00 | 0 | Sub-navigation category links |
| `caption` | 12px | 400 | 1.33 | 0 | Delivery messages, badge labels |
| `price-display` | 28px | 400 | 1.00 | 0 | Current price (large format on PDP) |

### Principles

- **Weight is binary**: Amazon uses weight 400 for nearly all UI text — including buttons — and 700 only for headings and nav labels. Never use 500, 600, or 300 except in special deal contexts (savings percentage uses 300 for de-emphasis).
- **No letter-spacing modification**: Amazon Ember is set at normal tracking everywhere on the web. Avoid tight or loose tracking.
- **Size tells the hierarchy story**: Rather than varied weights, Amazon uses size jumps to signal importance: 28px price > 24px title > 21px section header > 14px body.
- **Font substitute note**: If Amazon Ember is unavailable, use `Arial, sans-serif` — not a geometric sans. Amazon Ember is a humanist design closest to Arial in feel, not to Futura or Gill Sans.

---

## Layout

### Spacing System

Base unit: **4px**. Most spacing is in 4px increments, with named steps for common uses.

| Token | Value | Use |
|-------|-------|-----|
| `xxs` | 4px | Icon padding, micro-gaps between inline elements |
| `xs` | 8px | Badge internal padding, inline spacing |
| `sm` | 10px | Button vertical padding, input padding, card inner spacing |
| `md` | 16px | Card padding, section-internal spacing |
| `lg` | 24px | Card margins, grid gaps |
| `xl` | 32px | Section separators within a page |
| `xxl` | 48px | Major section breaks (homepage widget spacing) |
| `section` | 80px | Top-level page section padding (landing pages, about) |

### Grid & Container

- **Max container width**: 1500px (Amazon uses a fluid grid that maxes out around 1500px for widescreen monitors)
- **Homepage widgets**: Full-bleed with inner content constrained to 1200–1500px
- **Product detail page**: Left column 55% (images), right column 35% (buy box), sidebar 10% (ads)
- **Search results**: 3–4 columns at 1024px+, 2 columns at 768–1024px, 1 column below 768px
- **Nav belt**: Full-width, sticky; height 60px at desktop

### Whitespace Philosophy

Amazon deliberately minimizes whitespace to maximize information density. Homepage widgets are packed tightly with 8–16px between cards. Section breaks use color background changes rather than large margins. The footer reverses to dark (`#232F3E`) to signal page end without needing significant vertical padding.

---

## Elevation & Depth

### Levels Table

| Level | Treatment | Example use |
|-------|-----------|-------------|
| 0 — Flat | No shadow, same background as canvas | Product cards on homepage |
| 1 — Hairline | `1px solid #888C8C` border | Dropdown menus, form inputs, ghost buttons |
| 2 — Raised | `rgba(15, 17, 17, 0.5) 0px 0px 14px 0px` | Modal/dialog, navigation dropdown overlay |
| 3 — Nav modal | Strong drop shadow on flyout nav | Account/list dropdown panel |

### Shadow Philosophy

Amazon's elevation system is nearly flat. Product cards have no shadow — they rely on the white-on-white contrast established by a hairline border. Shadows appear only for overlaying elements (dropdowns, modals). This keeps the visual weight on products, not the UI chrome.

Any decorative depth is achieved through background-color banding: dark navy nav → white content → light grey panels → dark footer. There are no gradient backgrounds on the main content canvas.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `xs` | 4px | Search bar wrapper, category dropdown, search input right edge |
| `sm` | 8px | Form inputs, dropdown selectors, ghost buttons, color swatches |
| `md` | 8px | Filter chips, quantity selector dropdown |
| `lg` | 12px | Larger card overlays (promotional banners) |
| `pill` | 100px | Primary and secondary CTA buttons (Add to Cart, Buy Now) — Amazon's most distinctive shape |

### Photography & Imagery

- **Product images**: Square crop, white background (`#FFFFFF`), no border — pure merchandise photography
- **Carousel banners**: Full-bleed landscape images, typically 16:5 aspect ratio at desktop
- **Brand store images**: Editorial lifestyle photography in 16:9 or 3:2 format
- **Category icons**: Simple flat icons at 24×24px to 48×48px, on white or `#F0F2F2` backgrounds
- **Prime badge**: Blue/white SVG badge, always inline — never resized below 18px height

---

## Components

### Buttons

**Primary — "Add to Cart":**
- Background: `#FFD814` | Text: `#0F1111` | Radius: `100px` (full pill)
- Padding: `5px 11px` | Font: Amazon Ember 14px/400 | Border: `1px solid #FFD814`
- Hover/Active: `#F0C14B` background

**Secondary — "Buy Now":**
- Background: `#FFA41C` | Text: `#0F1111` | Radius: `100px` (full pill)
- Padding: `5px 11px` | Font: Amazon Ember 14px/400 | Border: `1px solid #FFA41C`

**Ghost/Outline:**
- Background: `#FFFFFF` | Text: `#0F1111` | Radius: `8px`
- Padding: `5px 11px` | Border: `1px solid #888C8C`
- Used for: quantity selectors, color variant toggles

**Selected/Active Variant Toggle:**
- Background: `#2162A1` | Text: `#0F1111` | Radius: `8px` | Border: `1px solid #2162A1`
- Used for: selected color swatches and configuration options on PDP

### Cards

**Product card (homepage/search results):**
- Background: `#FFFFFF` | Radius: `0–4px` | Padding: `10px`
- No shadow; relies on image as visual anchor
- Contains: product image (white bg), title (14px, `#0F1111`), price (variable sizes), star rating, badge

**Category card (nav widget):**
- Background: `#FFFFFF` | Rounded: `4px` | Padding: `16px`
- 2×2 or 2×4 image grid of sub-categories with label beneath

### Inputs & Forms

**Search bar:**
- Container: `#FFFFFF` fill, `1px solid #FEBD69` border, `4px` left radius
- Input text: 15px Arial, `#111111`
- Submit button: `#FEBD69` background, dark ink icon, `0 4px 4px 0` radius (right side only)
- Focus state: amber border glow

**Dropdown selector:**
- Background: `#FFFFFF` | Border: `1px solid #888C8C` | Radius: `8px`
- Font: Amazon Ember 14px/400

### Navigation

**Top Nav Belt (`#131921`):**
- Height: 60px | Logo left-aligned | Search bar center (full-width grow) | Account, Lists, Cart right
- All text: `#0F1111` (ink) with white appearing on dark in some states

**Category Sub-Nav (`#232F3E`):**
- Height: ~40px | Horizontal scrollable category links | Font: Amazon Ember 12px/700
- Link color: `#FFFFFF` on dark background

**Secondary Sub-Nav (`#FAFAFA`):**
- Triggered by page context (e.g., Amazon Devices page); 12px bold links in `#333333`

### Badges & Tags

**Deal badge ("Limited time deal"):**
- Background: `#CC0C39` | Text: `#FFFFFF` | Font: 12px | Radius: `4px` | Padding: `2px 6px`

**Savings percentage (−20%):**
- Text color: `#CC0C39` | Font: Amazon Ember 24px/300 | No background

**In-stock text:**
- Text color: `#0B7B3C` | Font: 18px/400 — prominent placement above buy box

---

## Do's and Don'ts

### Do
- Use `#FFD814` exclusively for the most important single CTA on any given view — it signals "buy" and should never be diluted by using it for secondary actions
- Use pill radius (`100px`) only for primary/secondary purchase CTAs; use `8px` for all other interactive elements
- Layer backgrounds (white → light grey → dark navy) to create hierarchy without shadows
- Set body text at 14px Amazon Ember 400 — the tight density is intentional and expected by Amazon users
- Use `#2162A1` link blue for all navigational text links and review counts — never use the orange for links
- Display prices in the 28px `price-display` style with a separate smaller fraction — Amazon's pricing UI is a recognized trust pattern
- Use `#CC0C39` sparingly for deal urgency signals only — it's reserved for discounts and limited-time offers

### Don't
- Don't use gradients on buttons or navigation — Amazon's CTA colors are flat solids
- Don't increase font weight beyond 700 or use weights like 500/600 — Amazon Ember is used at 400 or 700 only
- Don't add large margins or generous whitespace between product cards — information density is a core Amazon value
- Don't use rounded corners larger than `8px` on anything except CTA buttons (which use `100px`)
- Don't mix the yellow CTA and the orange CTA — yellow = add to cart, orange = buy now; never swap or combine them as equivalent actions
- Don't use decorative shadows on product cards — the flat white surface is intentional
- Don't render prices without the dollar-sign superscript and fraction pattern — it breaks the trusted pricing visual language

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 768px | Single-column layout; hamburger nav; search bar becomes full-width top bar; product grid 1–2 col |
| Tablet | 768–1024px | 2–3 column product grid; condensed nav; buy box stacks below images |
| Desktop | 1024–1500px | Full dual-nav; 3–4 column search results; side-by-side PDP layout |
| Wide | 1500px+ | Container caps at ~1500px; horizontal padding increases; nav belt remains full-bleed |

### Touch Targets

- All primary CTAs (Add to Cart, Buy Now): minimum 44×44px hit area
- Nav links in top belt: 44px height
- Cart, account icons: 44px touch target with visual size smaller
- Star rating links: padded to minimum 32px height

### Collapsing Strategy

- **Navigation**: Top belt collapses to hamburger + search bar at mobile; category sub-nav becomes slide-out drawer
- **Product grid**: 4 columns → 2 columns → 1 column; card aspect ratio maintained
- **PDP layout**: Images stack above buy box at tablet/mobile; "Add to Cart" button becomes full-width sticky bar at bottom of viewport on mobile
- **Search bar**: Full-width at all breakpoints; dropdown category selector collapses to icon at smallest widths

### Image Behavior

- Product images: `object-fit: contain` on white background; square at all sizes
- Carousel banners: `object-fit: cover`; aspect ratio compressed on mobile (from 16:5 to ~16:9)
- Category grid images: Fixed aspect ratio (1:1 or 4:3); never cropped, always white-bg merchandise shots

---

## Agent Prompt Guide

### Quick Color Reference

- Primary CTA (Add to Cart): `#FFD814`
- Secondary CTA (Buy Now): `#FFA41C`
- Search accent (amber): `#FEBD69`
- Link blue: `#2162A1`
- Canvas (background): `#FFFFFF`
- Ink (text): `#0F1111`
- Muted text: `#565959`
- Border/hairline: `#888C8C`
- Surface (panels): `#F0F2F2`
- Nav belt (header): `#131921`
- Category nav + footer: `#232F3E`
- On-dark text: `#FFFFFF`
- In-stock green: `#0B7B3C`
- Deal red: `#CC0C39`

### Example Component Prompts

**Product Card:**
"Create a product card on white (`#FFFFFF`) background with no shadow and `4px` border-radius. Product image is square with white background, fills top 60% of card. Below: product title in Amazon Ember 14px/400 `#0F1111`, max 2 lines. Star rating row with orange stars and blue review count `#2162A1` 12px. Price in 28px `#0F1111` with smaller fraction. 'Add to Cart' pill button (`#FFD814`, `100px` radius, 14px `#0F1111` text). Padding: `10px`."

**Hero Banner:**
"Create a full-bleed banner on `#131921` background. Left side: headline in Amazon Ember 28px/400 `#FFFFFF`, subhead 16px `#FEBD69`. 'Shop now' link in `#FEBD69` underlined. Right side: product image on transparent or dark background. Banner height 240px desktop, 150px mobile."

**Top Navigation:**
"Create an Amazon-style top nav on `#131921` background. Left: Amazon logo (white). Center: search bar with `#FFFFFF` fill, `#FEBD69` border, left `4px` radius. Right half of search bar: `#FEBD69` background search button with dark magnifier icon, right `4px` radius. Right: Account & Lists text stack, Cart with counter — all in `#0F1111` on `#131921` (note: the text appears dark because this area has a lighter overlay in some states). Nav height 60px."

**Add to Cart Button:**
"Primary button: `#FFD814` background, `100px` radius, `5px 11px` padding, Amazon Ember 14px weight 400, `#0F1111` text, `1px solid #FFD814` border, no shadow. Hover: `#F0C14B` background. Full-width on mobile."

**Buy Now Button:**
"Secondary button: `#FFA41C` background, `100px` radius, `5px 11px` padding, Amazon Ember 14px weight 400, `#0F1111` text, `1px solid #FFA41C` border, no shadow."

**Price Display:**
"Price: dollar sign superscript in 13px + whole number in 28px + decimal fraction superscript in 13px — all in `#0F1111` Amazon Ember weight 400. Strikethrough price: `#565959` 12px with line-through. Savings percentage: `#CC0C39` 24px weight 300."

### Iteration Guide

1. Start with `#FFFFFF` canvas and set body font to `"Amazon Ember", Arial, sans-serif` at 14px/400
2. Build the `#131921` nav belt first — it anchors the Amazon visual identity immediately
3. Use `#FFD814` for exactly one primary action per view; `#FFA41C` for the secondary purchase CTA
4. Apply `100px` border-radius only to CTA buttons — all other elements use `4–8px`
5. Keep product cards flat (no shadow) — rely on image contrast and hairline borders for separation
6. Set prices in the nested size pattern: 13px symbol + 28px whole + 13px fraction
7. Use `#2162A1` for any text that navigates or filters — never orange for links
8. Check contrast: `#0F1111` on `#FFD814` is WCAG AA compliant; `#0F1111` on `#FFA41C` is also compliant
