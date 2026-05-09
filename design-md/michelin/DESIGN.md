---
version: alpha
name: Michelin Guide
description: |
  The MICHELIN Guide design system captures one of the world's most authoritative culinary institutions.
  A clean, editorial aesthetic anchored by Michelin Red (#BA0B2F) against crisp white canvas, with
  typographically refined Figtree typeface replacing the historic Helvetica Neue. The system balances
  prestige with approachability — structured card layouts, minimal rounding, and restrained use of the
  brand red as a signal of quality, reservation actions, and key ratings. Photography of food and
  destinations takes center stage, with generous whitespace and a warm off-white surface palette
  evoking paper stock and print heritage.

colors:
  primary: "#BA0B2F"
  primary-active: "#96091F"
  ink: "#191919"
  body: "#222222"
  muted: "#4D4D4D"
  muted-light: "#757575"
  canvas: "#FFFFFF"
  surface: "#F9F8F7"
  surface-alt: "#F7F7F7"
  hairline: "#BBBBBB"
  hairline-light: "#A1A1A1"
  on-dark: "#FFFFFF"
  overlay: "#000000E6"
  link: "#0073B7"
  semantic-error: "#BA0B2F"
  semantic-success: "#28A745"
  accent-gray: "#D8D8D8"

typography:
  display-xl:
    fontFamily: "\"Figtree Medium\", \"Helvetica Neue Medium\", sans-serif"
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  display-md:
    fontFamily: "\"Figtree Medium\", \"Helvetica Neue Medium\", sans-serif"
    fontSize: 27px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  title-lg:
    fontFamily: "\"Figtree SemiBold\", \"Helvetica Neue Medium\", sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0
  title-md:
    fontFamily: "\"Figtree Medium\", \"Helvetica Neue Medium\", sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  body-lg:
    fontFamily: "\"Figtree Regular\", \"Helvetica Neue Light\", sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "\"Figtree Regular\", \"Helvetica Neue Light\", sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "\"Figtree Regular\", \"Helvetica Neue Light\", sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.29
    letterSpacing: 0
  button:
    fontFamily: "\"Figtree Regular\", \"Helvetica Neue Light\", sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  nav-link:
    fontFamily: "\"Figtree Regular\", \"Helvetica Neue Light\", sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "\"Figtree Regular\", \"Helvetica Neue Light\", sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.29
    letterSpacing: 0
  label-upper:
    fontFamily: "\"Figtree Medium\", \"Helvetica Neue Medium\", sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
    textTransform: uppercase

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
  xs: 3px
  sm: 4px
  md: 8px
  lg: 12px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "19px 24px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "19px 24px"
    border: "none"

  button-primary-disabled:
    backgroundColor: "{colors.accent-gray}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "19px 24px"
    border: "none"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "6px 10px"
    border: "1px solid {colors.hairline-light}"

  button-secondary-active:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "6px 10px"
    border: "1px solid {colors.hairline-light}"

  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.body}"
    typography: "{typography.button}"
    rounded: "0px"
    padding: "6px 0px"
    border: "none"

  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xs}"
    padding: "{spacing.md}"
    border: "none"
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 8px 0px"

  card-base-focused:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xs}"
    padding: "{spacing.md}"
    border: "none"
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 0px 12px 0px"

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
    border: "0 0 1px 0 solid {colors.hairline}"

  badge:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xxs} {spacing.xs}"
    border: "none"

  badge-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xxs} {spacing.xs}"
    border: "none"

  label-uppercase:
    textColor: "{colors.ink}"
    typography: "{typography.label-upper}"
    backgroundColor: "transparent"
---

# Michelin Guide Design System

## Overview

The MICHELIN Guide's visual identity is rooted in century-old editorial prestige — the red-covered inspector's guide that defined fine dining culture worldwide. Digitally, this translates into a clean, photography-forward interface where Michelin Red (#BA0B2F) is used sparingly but powerfully as the primary action signal, mirroring how a Michelin star is rare and prestigious. The overall palette is deliberately restrained: near-black ink on white canvas with warm off-white surface treatments evoking premium paper stock.

Typography shifts from the historic Helvetica Neue to Figtree — a geometric sans-serif with warmth and legibility. The font is deployed in four named weights (Regular, Medium, SemiBold, Bold) rather than numeric weights, signalling bespoke brand font management. Section headings use uppercase letter-spacing to create print-editorial hierarchy, while card titles and restaurant names render in SemiBold at 20px for authority. The design system values density-through-clarity: restaurant listing cards pack cuisine type, location, price tier, and Michelin distinctions into a compact 3px-rounded card with a subtle box shadow — no background color needed, just the shadow lift.

**Key visual characteristics:**

- Michelin Red (#BA0B2F) reserved exclusively for primary CTAs (Search, Book) and error/rating states — never decorative fill
- Figtree font family in four named faces — Regular, Medium, SemiBold, Bold — with Helvetica Neue as first system fallback
- Near-zero rounding on cards (3–4px) and restrained 8px radius on primary buttons — premium restraint, not tech-startup pill softness
- White canvas (#FFFFFF) with warm off-white surface (#F9F8F7) for footer/section breaks — a nod to paper and print stock
- Section headings in uppercase Figtree Medium at 14px — small-caps editorial style
- Imagery-first layout: restaurant and hotel cards are 60% photography, 40% metadata
- Box-shadow card lift instead of borders — subtle depth without harsh lines
- No dark mode; entirely light-surface brand consistent with print heritage

**Positioning:** Where most travel platforms compete on color vibrancy, Michelin competes on restraint and authority. The design system communicates that the star rating system needs no visual embellishment — quality speaks for itself.

---

## Colors

### Brand & Accent

| Token | Hex | Use |
| --- | --- | --- |
| `primary` | `#BA0B2F` | Primary CTA buttons, active nav indicators, error text |
| `primary-active` | `#96091F` | Hover/active state for red buttons |
| `link` | `#0073B7` | Inline text links, external references |

### Surface

| Token | Hex | Use |
| --- | --- | --- |
| `canvas` | `#FFFFFF` | Page background, card backgrounds, nav |
| `surface` | `#F9F8F7` | Footer, section breaks, form backgrounds |
| `surface-alt` | `#F7F7F7` | Alternate row tints, secondary panels |
| `accent-gray` | `#D8D8D8` | Disabled state backgrounds, cancel buttons |
| `overlay` | `#000000E6` | Modal and overlay backgrounds (90% black) |

### Text

| Token | Hex | Use |
| --- | --- | --- |
| `ink` | `#191919` | Primary headings, restaurant names, section titles |
| `body` | `#222222` | Body copy, nav links, search CTAs |
| `muted` | `#4D4D4D` | Footer text, secondary descriptions |
| `muted-light` | `#757575` | Captions, price indicators, metadata |
| `on-dark` | `#FFFFFF` | Text on red buttons, text on dark overlays |

### Semantic

| Token | Hex | Use |
| --- | --- | --- |
| `semantic-error` | `#BA0B2F` | Form validation errors (shares primary red) |
| `semantic-success` | `#28A745` | Success states (Bootstrap-inherited) |

---

## Typography

### Font Family

**Primary:** Figtree (Regular 400, Medium 500, SemiBold 600, Bold 700)

Michelin deploys Figtree as a custom-named font with four faces loaded as named font families: `"Figtree Regular"`, `"Figtree Medium"`, `"Figtree Italic"`, `"Figtree SemiBold"`. The fallback stack is `"Helvetica Neue Light"` / `"Helvetica Neue Medium"`, then `sans-serif`. This mirrors the brand's historical Helvetica Neue usage before Figtree adoption.

Figtree is available on Google Fonts: `@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap')`

### Hierarchy Table

| Role | Size | Weight | Line Height | Letter Spacing | Use |
| --- | --- | --- | --- | --- | --- |
| `display-xl` | 40px | 500 | 1.2 | 0 | Editorial section titles, feature headlines |
| `display-md` | 27px | 500 | 1.4 | 0 | Hero headlines on dark overlays |
| `title-lg` | 20px | 600 | 1.2 | 0 | Restaurant/hotel card names |
| `title-md` | 16px | 500 | 1.25 | 0 | H4 headings, feature titles |
| `body-lg` | 18px | 400 | 1.5 | 0 | Default body copy, nav links, card metadata |
| `body-md` | 16px | 400 | 1.5 | 0 | Search inputs, form fields |
| `body-sm` | 14px | 400 | 1.29 | 0 | Captions, login/register links |
| `button` | 18px | 400 | 1.5 | 0 | All CTA button labels |
| `nav-link` | 18px | 400 | 1.5 | 0 | Top navigation items |
| `caption` | 14px | 400 | 1.29 | 0 | Card subtitles, metadata |
| `label-upper` | 14px | 500 | 1.0 | 0 | Section labels (UPPERCASE) |

### Principles

- **Weight discipline:** Only 4 named weights in use — Regular (body), Medium (headings/UI), SemiBold (card titles), Bold (rare emphasis)
- **No negative tracking:** Unlike many editorial brands, Michelin uses `letter-spacing: normal` throughout — Figtree's own optical spacing is trusted
- **Uppercase labels:** Section names ("Restaurants", "Hotels") render in uppercase Figtree Medium 14px — a nod to print magazine section headers
- **Fallback substitution:** If Figtree is unavailable, `Helvetica Neue Light` provides near-identical weight visual match

---

## Layout

### Spacing System

Base unit: **8px**

| Token | Value | Use |
| --- | --- | --- |
| `xxs` | 4px | Tight internal padding, icon gaps |
| `xs` | 8px | Button padding (vertical for small), gap between badge items |
| `sm` | 12px | Form field padding, compact card internals |
| `md` | 16px | Standard card padding, horizontal nav spacing |
| `lg` | 24px | Section padding, card group gaps |
| `xl` | 32px | Heading margin-top (h2 top padding observed at 32px) |
| `xxl` | 48px | Section vertical dividers |
| `section` | 80px | Full-width section breathing room |

### Grid & Container

- Max container width: **1200px** (Bootstrap xl breakpoint)
- 12-column Bootstrap grid
- Card grids: 3 columns desktop, 2 columns tablet, 1 column mobile
- Search bar: full-width with grid columns for each field + CTA button

### Whitespace Philosophy

Michelin uses whitespace as a prestige signal. Sections breathe at 80px vertical intervals on desktop. Restaurant listings use 24px gaps between cards. The top navigation has no border-bottom in default state — the white header sits flat against white canvas, with separation only implied by content below. Footer gets the warm `#F9F8F7` surface to gently signal section end.

---

## Elevation & Depth

### Levels

| Level | Treatment | Example use |
| --- | --- | --- |
| 0 — Flat | No shadow, no border | Page canvas, section backgrounds, top nav |
| 1 — Raised | `box-shadow: rgba(0,0,0,0.2) 0px 0px 8px 0px` | Restaurant/hotel listing cards |
| 2 — Hover | `box-shadow: rgba(0,0,0,0.35) 0px 0px 12px 0px` | Card hover state |
| 3 — Modal | Background overlay `#000000E6` (90% opacity) | Modal dialogs, dropdown panels |

### Shadow Philosophy

Michelin uses a single radial blur shadow (`0px 0px 8px`) rather than directional shadows — this creates a floating effect that looks natural against white backgrounds. No hard drop shadows, no colored shadows, no inset shadows. Cards hover above the page rather than appearing pressed into it.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
| --- | --- | --- |
| `xs` | 3px | Restaurant cards, image thumbnails |
| `sm` | 4px | Secondary/outline buttons, carousel nav buttons |
| `md` | 8px | Primary CTA buttons, modal dialogs, active nav tabs |
| `lg` | 12px | Large modals, overlay panels |
| `pill` | 9999px | Tags with full-pill shape (if used) |

The brand intentionally avoids large-radius "friendly" shapes. The 3px card radius is almost imperceptible — the card silhouette is essentially rectangular, reinforcing the print-editorial sensibility.

### Photography & Imagery

- **Aspect ratio:** Restaurant card images are approximately **3:2 landscape** or **16:9** for feature slots
- **Full-bleed hero:** Homepage hero is full-viewport-width with text overlay on dark gradient
- **Card images:** Left-aligned or top-aligned within cards; images are never cropped to circles or unusual shapes
- **Overlay treatment:** Dark gradient overlay `rgba(0,0,0,0.9)` used on hero images for text legibility
- **Alt text:** All food/destination photography features literal description, consistent with SEO-forward approach

---

## Components

### Buttons

**Primary (Search/Book):**
- Background: `#BA0B2F` (Michelin Red)
- Text: `#FFFFFF`, Figtree Regular 18px
- Radius: 8px
- Padding: 19px vertical, 24px horizontal
- No border
- Hover: `#96091F` (darkened red)

**Secondary (Outline):**
- Background: transparent
- Text: `#4D4D4D` or `#191919`
- Border: `1px solid #A1A1A1`
- Radius: 4px
- Padding: 6px 10px
- Used for carousel navigation, filter chips

**Ghost (Text link style):**
- Background: transparent
- Text: `#333333`, no underline at rest
- No border, no radius
- Padding: 6px 0px
- Used for Login/Register in top nav

**Action / Save:**
- Background: `#000000`
- Text: `#FFFFFF`
- Radius: 8px
- Padding: 4px 22px
- Inline with Cancel (gray) for form confirm/dismiss pairs

### Cards

**Restaurant/Hotel Card:**
- Background: `#FFFFFF`
- Radius: 3px
- Box shadow: `rgba(0,0,0,0.2) 0px 0px 8px 0px`
- No explicit border
- Structure: Image (top 60%) → Title (Figtree SemiBold 20px) → Location + Cuisine + Price tier (Figtree Regular 14px)
- Michelin star/distinction icons appear as SVG above the title

**Feature Article Card:**
- Similar structure to restaurant card but wider and landscape-oriented
- Title uses `display-xl` (40px) on large editorial cards

### Inputs & Forms

**Search Input:**
- Background: transparent within search bar container
- Border: none at component level; search bar wrapper provides visual boundary
- Text: `#262627` (Figtree Medium 16px)
- Placeholder: rgba muted tone
- Submit: Icon-only (search glass) — no visible text field border

**Dropdown / Counter:**
- Background: `#FFFFFF`
- Border: `1px solid #A1A1A1`, radius 4px
- Increment/decrement buttons: bordered outline 4px radius

### Navigation

**Top Navigation:**
- Background: `#FFFFFF` (transparent until scroll on some pages)
- Links: Figtree Regular 18px, `#191919`
- Active section: Red accent tab/underline treatment
- Burger menu on mobile
- Login/Register: 14px ghost links in header right

**Section Nav (Restaurants/Hotels tabs):**
- Active tab pill: `#BA0B2F` background, white text, 8px radius
- Inactive: transparent background, dark text

### Badges & Tags

**Star/Distinction Icons:**
- Michelin stars, Bib Gourmand, and Green Star rendered as SVG icons (not CSS-styled badges)
- Positioned above restaurant card title
- Critical brand elements — never replace with text labels

**Category Label:**
- Uppercase Figtree Medium 14px
- `#191919` text on transparent background
- No background pill or badge — purely typographic

---

## Do's and Don'ts

**Do:**
- Use `#BA0B2F` Michelin Red exclusively for primary CTAs and error states — its rarity is what gives it authority
- Use Figtree Regular (400) for body copy and Figtree Medium (500) for headings — maintain the weight contrast
- Apply uppercase letter-spacing to section label headings (14px, uppercase) for print-editorial hierarchy
- Lead every listing card with food or destination photography — the image is the primary draw
- Use the 3px card radius — it reads as almost flat, reinforcing paper and print quality
- Maintain generous vertical whitespace (80px) between editorial sections
- Use `#F9F8F7` for footer and surface breaks — the warm off-white reads as premium paper stock

**Don't:**
- Don't use Michelin Red for decorative fills, hover states on non-CTA elements, or large background areas
- Don't increase card border-radius beyond 8px — it softens the brand into generic "app" aesthetics
- Don't use more than 2 font weights on a single card component
- Don't use colored text links inside body copy except for `#0073B7` blue — Michelin red links would create false urgency
- Don't apply dark mode — the brand is light-only, tied to the white paper/print legacy of the physical guide
- Don't use decorative illustrations — photography only; the Guide is a documentary format, not illustrated
- Don't shrink primary CTA buttons below 19px vertical padding — the tap target must feel confident and premium

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
| --- | --- | --- |
| Mobile (xs) | 0–575px | Single column, full-width search bar, hamburger nav |
| Tablet (sm) | 576–767px | 2-column card grid, condensed nav |
| Tablet (md) | 768–991px | 2-column card grid, full nav visible |
| Desktop (lg) | 992–1199px | 3-column card grid, full search bar |
| Wide (xl) | 1200px+ | Max container 1200px, 3-column grid, full editorial layout |

### Touch Targets

- Primary CTA buttons: minimum 44px height (19px padding top/bottom + 18px font = ~56px total)
- Nav items: minimum 44px touch height
- Card elements: full-card tap area (not just title)

### Collapsing Strategy

- **Nav:** Full horizontal nav collapses to hamburger icon at <768px; Login/Register move into hamburger drawer
- **Search bar:** Full multi-field bar (destination + cuisine/dates + guest count + Search button) stacks vertically on mobile; CTA button becomes full-width
- **Card grid:** 3→2→1 column at xl→md→xs; images remain top-aligned in all breakpoints
- **Section labels:** Remain uppercase at all sizes; font-size does not scale down

### Image Behavior

- Hero images: full-width at all breakpoints, aspect-ratio preserved via CSS background-size: cover
- Card images: fixed aspect ratio container (approx 3:2), `object-fit: cover` within container
- Images never stretch beyond their natural ratio; container clips excess

---

## Agent Prompt Guide

### Quick Color Reference

- Primary (Michelin Red): `#BA0B2F`
- Primary Active: `#96091F`
- Canvas (background): `#FFFFFF`
- Surface (footer/sections): `#F9F8F7`
- Ink (headings): `#191919`
- Body (copy): `#222222`
- Muted (secondary text): `#4D4D4D`
- Muted Light (captions): `#757575`
- Hairline (borders): `#BBBBBB`
- On-Dark (text on red): `#FFFFFF`
- Link: `#0073B7`

### Example Component Prompts

**Hero Section:**
"Create a full-width hero on a high-quality restaurant photography background with a dark overlay rgba(0,0,0,0.9). Center-aligned headline in Figtree Medium 27px, white (#FFFFFF), line-height 1.4. Subheadline 18px Figtree Regular white. Below, a full-width search bar on white (#FFFFFF) background: destination input + cuisine dropdown + Search CTA button in #BA0B2F, 8px radius, 19px 24px padding, white text 18px Figtree Regular."

**Restaurant Card:**
"Create a restaurant listing card on white (#FFFFFF) with 3px border-radius and box-shadow rgba(0,0,0,0.2) 0px 0px 8px 0px. Top 60%: restaurant photograph (3:2 ratio, object-fit cover). Bottom: Michelin star SVG icon, then restaurant name in Figtree SemiBold 20px #191919, then location + cuisine + price tier in Figtree Regular 14px #757575. No border. Card is approximately 340px wide."

**Button Set:**
"Primary button: background #BA0B2F, border-radius 8px, padding 19px 24px, font Figtree Regular 18px white, no border. Hover state: background #96091F. Secondary button: transparent background, 1px solid #A1A1A1 border, border-radius 4px, padding 6px 10px, text #4D4D4D Figtree Regular 18px. Ghost link: transparent, no border, no radius, padding 6px 0px, text #333333 14px."

**Section Header:**
"Section label: uppercase Figtree Medium 14px #191919 on white background, tracking normal. Below, h2 editorial headline in Figtree Medium 40px #191919, line-height 1.2. No background color for the label — purely typographic hierarchy on white canvas."

### Iteration Guide

1. Start with white (`#FFFFFF`) canvas — Michelin is a light-only brand
2. Use Figtree from Google Fonts: `@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap')`
3. Reserve `#BA0B2F` exclusively for primary action buttons — its rarity signals quality
4. Apply uppercase styling to section labels (14px Figtree Medium `text-transform: uppercase`) — no letter-spacing needed
5. Use `rgba(0,0,0,0.2) 0px 0px 8px 0px` for card elevation — never hard borders on cards
6. Keep border-radius at 3–4px for cards, 8px for buttons — resist the temptation to go rounder
7. Lead with photography — every section needs a visual anchor; text-only sections are rare
8. Use `#F9F8F7` for footer and surface breaks to introduce warmth without leaving the neutral palette
