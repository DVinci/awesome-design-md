---
version: alpha
name: Bonjour Paris
description: |
  Bonjour Paris is a Parisian creative agency specializing in branding, content, and digital experiences.
  Their design language is built on a single proprietary typeface (PP Mori), a restrained monochromatic
  palette punctuated by a signature amber-yellow, and a flat zero-radius geometry that communicates
  refined Parisian precision. Copious negative letter-spacing and a fluid responsive type scale give
  every screen a high-fashion editorial quality.

colors:
  primary: "#FFA400"
  primary-active: "#E09200"
  ink: "#000000"
  body: "#202020"
  muted: "#BBBBBB"
  canvas: "#F5F5F5"
  surface: "#FFFFFF"
  surface-dark: "#111111"
  hairline: "#202020"
  on-dark: "#FFFFFF"
  accent-grey1: "#606060"
  accent-grey3: "#DBDBDB"
  accent-black-60: "#12121299"

typography:
  display-xl:
    fontFamily: '"PP Mori", sans-serif'
    fontSize: 120px
    fontWeight: 400
    lineHeight: 1.125
    letterSpacing: -3.6px
  display-md:
    fontFamily: '"PP Mori", sans-serif'
    fontSize: 30px
    fontWeight: 400
    lineHeight: 1.333
    letterSpacing: -0.9px
  title-lg:
    fontFamily: '"PP Mori", sans-serif'
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -1.2px
  title-md:
    fontFamily: '"PP Mori", sans-serif'
    fontSize: 35px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -1.05px
  body-lg:
    fontFamily: '"PP Mori", sans-serif'
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: -0.6px
  body-md:
    fontFamily: '"PP Mori", sans-serif'
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.333
    letterSpacing: -0.15px
  body-sm:
    fontFamily: '"PP Mori", sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.429
    letterSpacing: -0.15px
  button:
    fontFamily: '"PP Mori", sans-serif'
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  nav-link:
    fontFamily: '"PP Mori", sans-serif'
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.333
    letterSpacing: -0.15px
  caption:
    fontFamily: '"PP Mori", sans-serif'
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.333
    letterSpacing: -0.15px

spacing:
  xxs: 10px
  xs: 20px
  sm: 30px
  md: 40px
  lg: 60px
  xl: 80px
  xxl: 100px
  section: 120px

rounded:
  none: 0px
  xs: 2px
  sm: 5px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0px"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0px"
    border: "none"
    decoration: "underline-animated"

  button-secondary-light:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0px"
    border: "none"
    decoration: "underline-animated-white"

  card-base:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm}"
    border: "none"

  card-work:
    backgroundColor: "transparent"
    rounded: "{rounded.none}"
    padding: "0px"
    border: "none"

  text-input:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
    padding: "0px 0px 20px"
    border: "0 0 1px 0 {colors.hairline}"

  text-input-focused:
    border: "0 0 1px 0 {colors.primary}"

  top-nav:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "0px 20px 0px 30px"
    mixBlendMode: "difference"

  filter-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.none}"
    padding: "0px"

  filter-button-inactive:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.display-md}"
    rounded: "{rounded.none}"
    padding: "0px"

  dropdown-menu:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "15px 20px"

  footer-section:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    padding: "{spacing.sm}"
---

# Bonjour Paris Design System

## Overview

Bonjour Paris is a Parisian creative agency that coined the concept of "Beautility" — beauty in service of utility. Their design language is a masterclass in editorial restraint: a single typeface (PP Mori) across every scale, a near-monochromatic palette with one high-voltage accent (amber-yellow `#FFA400`), and an absolute rejection of border-radius. The site feels like a luxury fashion lookbook translated to the web.

The type system is the star — negative letter-tracking at every level, from -3.6px on the 120px display headline down to -0.15px on 14px body copy. Navigation uses `mix-blend-mode: difference` so the header text inverts itself against any background it floats over, eliminating the need for a separate dark-mode nav. Interaction is expressed through animated underlines (a `::after` pseudo-element wiping in on hover) rather than color fills or radius changes.

### Key Visual Characteristics

- **Single typeface system**: PP Mori exclusively across all weights and sizes — no secondary font ever
- **Amber-yellow accent**: `#FFA400` appears as the primary brand CTA color (page backgrounds, highlight states)
- **Zero border-radius**: flat geometry throughout — buttons, inputs, cards, dropdowns all use `0px` rounding
- **Animated underline CTAs**: `.btn` class adds a sliding `::after` underline rather than filled backgrounds
- **Mix-blend-difference nav**: the fixed header inverts its text against any background, white on dark, black on light
- **Extreme negative tracking**: display text uses -3% letter-spacing (-3.6px at 120px), body uses -1% (-0.15px at 15px)
- **Photography-first layout**: works grid is pure image tiles with minimal text overlay — content drives the UI
- **Dual-canvas system**: light `#F5F5F5` for content pages, near-black `#111111` for footer and dark hero sections

### Competitive Differentiation

Where most creative agencies use layered color systems and decorative type pairings, Bonjour Paris imposes extreme constraint — one font, one accent, zero decoration. The sophistication comes entirely from proportion, spacing, and motion. This is the Parisian editorial tradition applied to web: edit until only the essential remains.

---

## Colors

### Brand & Accent

| Token | Hex | Use |
| ----- | --- | --- |
| `primary` | `#FFA400` | Brand yellow — page hero backgrounds, CTA highlight states |
| `primary-active` | `#E09200` | Darkened yellow for hover/active CTA states |
| `accent-grey1` | `#606060` | Mid-tone grey for secondary labels and metadata |
| `accent-grey3` | `#DBDBDB` | Light grey for dividers, ghost elements |
| `accent-black-60` | `#12121299` | Semi-transparent black overlay on imagery |

### Surface

| Token | Hex | Use |
| ----- | --- | --- |
| `canvas` | `#F5F5F5` | Primary page background (grey-4) |
| `surface` | `#FFFFFF` | Mobile menu, cookie notices, elevated panels |
| `surface-dark` | `#111111` | Footer, dark hero sections, newsletter input area |

### Text

| Token | Hex | Use |
| ----- | --- | --- |
| `ink` | `#000000` | Primary text, headings, active nav links |
| `body` | `#202020` | Dark-grey — dividers, secondary text on dark |
| `muted` | `#BBBBBB` | Inactive filter buttons, secondary metadata |
| `on-dark` | `#FFFFFF` | All text on dark (`surface-dark`) backgrounds |

### Semantic

Bonjour Paris does not use semantic error/success/warning colors — the site is portfolio-only with no form validation UI beyond newsletter sign-up. Use standard accessible equivalents if needed: success `#22C55E`, error `#EF4444`, warning `#F59E0B`.

---

## Typography

### Font Family

**PP Mori** — a geometric grotesque with humanist warmth by Pangram Pangram Foundry. Used exclusively across all sizes and weights on the site. Load via the Pangram Pangram CDN or substitute with `Plus Jakarta Sans` (closest free alternative) or `Inter` as fallback.

```css
font-family: "PP Mori", "Plus Jakarta Sans", sans-serif;
```

### Hierarchy Table

| Role | Size | Weight | Line Height | Letter Spacing | Use |
| ---- | ---- | ------ | ----------- | -------------- | --- |
| `display-xl` | 120px | 400 | 1.125 (135px) | -3.6px | Hero display headline (desktop only) |
| `title-lg` | 40px | 400 | 1.0 (40px) | -1.2px | Mobile h1, date ranges, large counters |
| `title-md` | 35px | 400 | 1.0 (35px) | -1.05px | Mobile nav open state, section headers |
| `display-md` | 30px | 400 | 1.333 (40px) | -0.9px | Desktop body-lg, filter buttons, lead paragraphs |
| `body-lg` | 20px | 400 | 1.4 (28px) | -0.6px | Mobile lead paragraphs, about page body |
| `body-md` | 15px | 400 | 1.333 (20px) | -0.15px | Default body, footer, nav (desktop) |
| `body-sm` | 14px | 400 | 1.429 (20px) | -0.15px | Mobile body, small labels |
| `button` | 20px | 400 | 1.4 (28px) | 0 | `.btn` CTA links (Sign up, En savoir plus) |
| `nav-link` | 15px | 600 | 1.333 (20px) | -0.15px | Header navigation items |
| `caption` | 15px | 400 | 1.333 (20px) | -0.15px | Metadata, counts, language toggle |

### Principles

- **Weight restraint**: only two weights in use — `400` (regular) and `600` (semibold) for nav links. No bold, no light.
- **Negative tracking at all scales**: letter-spacing is always negative or zero; never positive. The -3% tracking rule at display size is a core brand signal.
- **PP Mori substitute**: use `Plus Jakarta Sans` from Google Fonts for mockups. Set `letter-spacing: -0.03em` on headings explicitly.
- **Responsive type**: body-lg is `20px` on mobile, `30px` on desktop — a 50% jump driven by Tailwind responsive breakpoints.
- **Uppercase**: only the language toggle (`FR`) uses `text-transform: uppercase`. All other text is natural case.

---

## Layout

### Spacing System

Base unit: **10px** — the site uses a custom Tailwind scale with 10px increments.

| Token | Value | Tailwind class | Use |
| ----- | ----- | -------------- | --- |
| `xxs` | 10px | `gap-3xs`, `px-3xs` | Tight element groupings, superscript gaps |
| `xs` | 20px | `px-2xs`, `gap-2xs` | Inner card padding, close element spacing |
| `sm` | 30px | `px-xs`, `gap-xs` | Standard section padding-x, column gaps |
| `md` | 40px | `py-s`, `gap-s` | Section vertical padding, work grid gaps |
| `lg` | 60px | `py-md`, `gap-md` | Large section vertical padding |
| `xl` | 80px | `py-lg` | Hero vertical padding |
| `xxl` | 100px | `pt-xl` | Top padding for hero sections |
| `section` | 120px | `pt-2xl` | Page-top offset for fixed nav sections |

### Grid & Container

- **Mobile nav height**: 90px (`pt-mobile-nav`)
- **Desktop nav height**: defined by content, padding `0px 20px 0px 30px`
- **Works grid**: masonry-style image tiles with `gap-xs` (30px), spanning full viewport width
- **Content containers**: `px-xs` (30px) mobile, `px-sm` (50px) desktop
- **About page layout**: centered single-column, `px-xs` on mobile

### Whitespace Philosophy

Bonjour Paris uses whitespace as a primary visual element. Section padding of 60–120px creates deliberate breathing room between content blocks. The works grid lets imagery fill edge to edge with only a 30px gutter. The homepage hero is nearly all whitespace — a single date range string `(2026 - 2016)` floating in a `#F5F5F5` field. Empty space is not absence of design; it is the design.

---

## Elevation & Depth

### Levels Table

| Level | Treatment | Example use |
| ----- | --------- | ----------- |
| 0 — Flat | No shadow, no border, transparent bg | All content elements, cards, filter buttons |
| 1 — Surface | White background, no shadow | Mobile menu drawer, cookie notice panel |
| 2 — Dark | `#111111` background | Footer, newsletter section, dark hero |
| Overlay | `rgba(18,18,18,0.6)` | Image hover overlays on work items |

### Shadow Philosophy

**No box-shadows anywhere on the site.** Depth is achieved entirely through background color contrast — light canvas (`#F5F5F5`) vs. dark footer (`#111111`), image tiles vs. surrounding white space. The zero-shadow discipline is as intentional as the zero-radius policy.

### Decorative Depth Effects

- **Mix-blend-mode navigation**: the header uses `mix-blend-mode: difference` to auto-invert between black and white depending on the content beneath — sophisticated depth signaling through color inversion rather than shadow.
- **Amber-yellow hero backgrounds**: full-page `#FFA400` sections create visual depth through color temperature contrast with the grey canvas.
- **Animated underlines**: `.btn::after` pseudo-element creates an expanding underline stroke on hover — motion as depth signal.

---

## Shapes

### Border Radius Scale Table

| Token | Value | Use |
| ----- | ----- | --- |
| `none` | 0px | All primary components — buttons, inputs, cards, nav |
| `xs` | 2px | Cookie notice toggle indicator (minor softening) |
| `sm` | 5px | Category dropdown menu only |

### Photography & Imagery

- **Aspect ratio**: work thumbnails use calculated aspect ratios based on viewport — desktop: `calc(20vw + 180px)` height, mobile: `calc(((100vw - 60px) * 11/37) + 273px)` height
- **Crop treatment**: images fill their containers edge-to-edge with `object-fit: cover`
- **Border treatment**: no border, no radius — images bleed to the edge of their container
- **Dark overlay**: work items receive a `rgba(18,18,18,0.5)` hover overlay for readability of overlaid text
- **Full-bleed sections**: hero images and video backgrounds span 100vw with no containing gutters

---

## Components

### Buttons

Bonjour Paris does not use traditional filled button components. CTAs are implemented as `.btn` anchor elements — plain text with an animated underline strike via `::after` pseudo-element.

**`.btn` (text link with animated underline):**
- Font: `PP Mori`, 20px, weight 400, line-height 28px
- No background, no border, no radius
- `::after`: 1px solid underline in `#111111` (or `#FFFFFF` on dark surfaces), animates in on hover via `@keyframes btn`
- Dark variant: `.btn:where(.dark, .dark *) ::after` uses white underline

**`.btn-light` (white text variant):**
- Same as `.btn` but text is `rgb(255, 255, 255)` and underline is white
- Used in footer and dark-surface sections

**Categories dropdown button:**
- Background: `rgba(255,255,255,0.9)`, rounded `5px`, padding `15px 20px`
- Text: 15px, weight 400, `#000000`
- This is the one exception to the zero-radius rule

### Cards

Work items are not cards in the traditional sense — they are image tiles.

**Work tile:**
- Full-bleed image with no border, no shadow, no radius
- Text overlay (project title, category) appears on hover with `rgba(18,18,18,0.5)` background
- Layout: `relative flex flex-col items-end` with padding `{spacing.xl} {spacing.sm} {spacing.sm}`

**About page sections:**
- Pure typography blocks centered on `#F5F5F5` canvas
- No card chrome — whitespace defines the "card" shape

### Inputs & Forms

**Newsletter input:**
- Background: `#111111` (surface-dark)
- Text: `#FFFFFF` (on-dark), 30px, PP Mori
- Border: `border-bottom: 1px solid #202020` (dark-grey hairline)
- Padding: `0 0 20px` (bottom-only)
- Radius: `0px`
- Placeholder: white text

**Focus state:** border-bottom color transitions to `#FFA400` (primary) on focus

### Navigation

**Desktop header:**
- Fixed, full-width, `z-50`
- No background (transparent), uses `mix-blend-mode: difference`
- Padding: `0px 20px 0px 30px`
- Logo: left-aligned SVG mark
- Nav links: right-aligned, weight 600, 15px, gap-xs
- Language toggle: uppercase, weight 600

**Mobile nav:**
- Hamburger icon triggers full-screen white drawer (`#FFFFFF` background)
- Links display at 35px/35px, weight 400, -1.05px tracking
- Drawer slides in from right, `translate-x-full` → `translate-x-0`

**Active link state:** `font-weight: 600` maintained; on works page, nav text renders white via mix-blend on dark image backgrounds

### Badges & Tags

The filter system on the works page functions as a tag/filter interface:

**Filter button (active):**
- Text: `#000000` (ink), 30px, weight 400
- No background, no border, no radius
- Appears inline with a count superscript in 15px

**Filter button (inactive):**
- Text: `#BBBBBB` (muted), 30px, weight 400
- Hover: transitions to `#000000`

---

## Do's and Don'ts

### Do

- **Use PP Mori exclusively** — the single-font discipline is a core brand pillar; every typographic element should use it
- **Apply negative letter-spacing at all text sizes** — minimum -0.03em on display, -0.01em on body
- **Let photography dominate** — images should bleed edge-to-edge; resist the urge to add card chrome around work thumbnails
- **Use the amber yellow sparingly** — `#FFA400` works best as a full-bleed hero background color or highlight, not scattered UI tints
- **Maintain flat geometry** — all components use `border-radius: 0`; only the category dropdown gets `5px` (a single exception)
- **Express interaction through underline animation** — hover states are revealed by the sliding `::after` underline, not by background color changes
- **Use `mix-blend-mode: difference` for nav** — this preserves the transparent header aesthetic across both light and dark page sections

### Don't

- **Don't pair PP Mori with any other typeface** — no serifs, no slab, no other grotesque alongside it
- **Don't use positive letter-spacing** — even at small sizes, tracking should be negative or zero
- **Don't add box-shadows** — the design achieves depth through color contrast alone; shadows feel out of brand
- **Don't round button corners** — filled rounded buttons are foreign to this design language
- **Don't use semantic status colors frivolously** — the palette has no inherent error/success system; use sparingly and only where required
- **Don't place text over imagery without the dark overlay** — use `rgba(18,18,18,0.5)` scrim for any text-over-image treatment
- **Don't add decorative elements** — no illustrations, icons, or ornaments beyond the logo and essential UI controls

---

## Responsive Behavior

### Breakpoints Table

| Breakpoint | Width | Key Changes |
| ---------- | ----- | ----------- |
| Mobile | < 768px | Single-column layout, reduced type scale, hamburger nav |
| Tablet/Desktop | ≥ 768px (`md:`) | Two-plus column grids, full type scale, desktop nav links |

### Touch Targets

- Minimum touch target: 44px height for all nav links (achieved via `py-4` = 16px top/bottom padding on 15px text, plus link area)
- Filter buttons: full-width tap targets via block display
- Mobile nav links: 35px font size ensures generous touch area

### Collapsing Strategy

- **Navigation**: hamburger icon replaces desktop nav links below 768px; full-screen white overlay drawer
- **Works grid**: fluid grid collapses from multi-column (desktop) to single-column (mobile) at 768px breakpoint
- **Typography**: display-xl (120px) only exists at desktop — mobile uses title-lg (40px) for hero-scale text
- **Padding**: horizontal padding reduces from `px-sm` (50px) to `px-xs` (30px) on mobile; vertical from `py-lg` (80px) to `py-md` (60px)
- **Section spacing**: `pt-mobile-nav` (90px) replaces desktop equivalent for fixed nav offset

### Image Behavior

- Work thumbnails: `object-fit: cover` within calculated-height containers
- Desktop thumbnail height: `calc(20vw + 180px)` — scales fluidly with viewport
- Mobile thumbnail height: `calc(((100vw - 60px) * 11/37) + 273px)` — preserves portrait proportion
- Hero images: 100vw × 100vh, `object-fit: cover`, no letterboxing

---

## Agent Prompt Guide

### Quick Color Reference

- Primary (amber yellow): `#FFA400`
- Primary active: `#E09200`
- Canvas (background): `#F5F5F5`
- Surface (elevated): `#FFFFFF`
- Surface dark (footer): `#111111`
- Ink (headings): `#000000`
- Body text: `#202020`
- Muted (inactive): `#BBBBBB`
- On-dark (light text): `#FFFFFF`
- Hairline (dividers): `#202020`

### Example Component Prompts

**Hero Section:**
"Create a hero section on `#F5F5F5` background. Single line of text: `(2026 - 2016)` at 40px mobile / 120px desktop, PP Mori weight 400, letter-spacing -0.03em, color `#000000`. No button, no decoration — whitespace is the design. On desktop, allow the text to dominate a full viewport-height field."

**Work Grid Tile:**
"Create a portfolio image tile with no border, no border-radius, no shadow. Image fills the container with `object-fit: cover`. On hover, apply `rgba(18,18,18,0.5)` overlay. Overlay text: project title 15px PP Mori `#FFFFFF`, category tag 15px PP Mori `#BBBBBB`. Padding inside overlay: 30px."

**Button Set:**
"Primary CTA: text link using PP Mori 20px weight 400 color `#000000`. No background, no border, no radius. On hover, animate a 1px `#111111` underline sliding in from left using `::after` pseudo-element. For dark surfaces, same pattern but text and underline in `#FFFFFF`."

**Newsletter Footer:**
"Dark section `#111111` background. Input field: full-width, no border except 1px bottom in `#202020`, background `#111111`, text white `#FFFFFF`, 30px PP Mori, padding-bottom 20px. Submit CTA: `.btn-light` pattern — white text, animated white underline. Divider lines: 1px `#202020` between sections."

**Navigation Header:**
"Fixed header, transparent background, `mix-blend-mode: difference`. Logo SVG left. Right: text links `Works`, `Index`, `About`, `Partners`, `FR` — 15px PP Mori weight 600, letter-spacing -0.15px, color white (inverts against background via blend mode). No underline, no hover background."

### Iteration Guide

1. Start with `#F5F5F5` as your page background — it is the canvas, not white
2. Load PP Mori via Pangram Pangram CDN or substitute `Plus Jakarta Sans` from Google Fonts
3. Apply `-0.03em` letter-spacing to all display text, `-0.01em` to all body text
4. Use zero border-radius on every component — even dropdowns should feel architectural, not soft
5. Never fill button backgrounds — use the animated underline pattern for all CTAs
6. `#FFA400` yellow is a hero background color, not a button fill — use it for full-bleed accent sections
7. Check contrast: `#000000` on `#F5F5F5` passes WCAG AA; `#FFFFFF` on `#111111` passes WCAG AAA
