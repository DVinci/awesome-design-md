---
version: alpha
name: Adobe
description: |
  Adobe's design system combines a clean, confident sans-serif identity with a restrained
  light-surface palette anchored by Adobe Red and Creative Cloud Blue. The system prioritizes
  legibility and creative inspiration — generous whitespace, a strict type scale rooted in the
  proprietary Adobe Clean typeface, and a primary CTA blue (#3B63FB) that contrasts boldly
  against near-white surfaces. Adobe Red (#EB1000) is reserved exclusively for brand marks,
  hyperlinks on editorial pages, and the global navigation logo. The overall aesthetic is
  professional yet approachable, designed to serve both creative professionals and enterprise
  buyers across Photoshop, Acrobat, Firefly, and the full Creative Cloud suite.

colors:
  primary: "#3B63FB"
  primary-active: "#274DEA"
  primary-down: "#095ABA"
  brand-red: "#EB1000"
  link: "#274DEA"
  link-dark: "#3B63FB"
  ink: "#2C2C2C"
  body: "#2C2C2C"
  muted: "#505050"
  muted-secondary: "#707070"
  nav-text: "#292929"
  canvas: "#FFFFFF"
  surface: "#F8F8F8"
  surface-popup: "#F3F3F3"
  surface-footer: "#FAFAFA"
  surface-dark: "#101010"
  on-dark: "#FFFFFF"
  hairline: "#EAEAEA"
  hairline-menu: "#E1E1E1"
  hairline-secondary: "#DADADA"
  semantic-error: "#EB1000"
  semantic-info: "#5C5CE0"
  semantic-focus: "#378EF0"

typography:
  display-xl:
    fontFamily: "'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif"
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  display-md:
    fontFamily: "'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  title-lg:
    fontFamily: "'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  title-md:
    fontFamily: "'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  title-sm:
    fontFamily: "'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  body-lg:
    fontFamily: "'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-xs:
    fontFamily: "'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: "'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif"
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0
  button-lg:
    fontFamily: "'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif"
    fontSize: 19px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0
  nav-link:
    fontFamily: "'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  detail:
    fontFamily: "'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  code:
    fontFamily: "'Roboto Mono', menlo, consolas, 'Liberation Mono', monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

spacing:
  xxs: 8px
  xs: 16px
  sm: 24px
  md: 32px
  lg: 40px
  xl: 48px
  xxl: 56px
  section: 80px
  section-xl: 104px

rounded:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 20px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "7px 18px 8px"
    border: "2px solid {colors.primary}"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "7px 18px 8px"
    border: "2px solid {colors.primary-active}"

  button-primary-disabled:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "7px 18px 8px"
    border: "none"

  button-primary-lg:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.lg}"
    padding: "10px 24px 8px"
    border: "2px solid {colors.primary}"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.nav-text}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "6px 16px 8px"
    border: "2px solid {colors.hairline-secondary}"

  button-secondary-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.nav-text}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "6px 16px 8px"
    border: "2px solid {colors.nav-text}"

  button-outline-dark:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: "7px 18px 8px"
    border: "2px solid {colors.on-dark}"

  card-base:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
    border: "1px solid {colors.hairline}"
    boxShadow: "none"

  card-featured:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
    border: "1px solid {colors.hairline-menu}"
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)"

  top-nav:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.nav-text}"
    height: "63px"
    border: "0 0 1px 0 {colors.hairline}"

  top-nav-popup:
    backgroundColor: "{colors.surface-popup}"
    textColor: "{colors.nav-text}"
    border: "1px solid {colors.hairline-menu}"

  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
    padding: "8px 12px"
    border: "1px solid {colors.hairline-secondary}"

  text-input-focused:
    border: "2px solid {colors.primary}"
    outline: "none"

  badge-detail:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.detail}"
    textTransform: "uppercase"
    letterSpacing: "0.5px"

  footer:
    backgroundColor: "{colors.surface-footer}"
    textColor: "{colors.ink}"
    typography: "{typography.body-xs}"
    padding: "20px 0"
---

# Adobe Design System

## Overview

Adobe's visual identity is built for creative confidence — a system that communicates professional
power without visual noise. The foundation is clean white surfaces, a precise typographic hierarchy
in Adobe Clean (the company's proprietary typeface), and a restrained two-color action palette:
Creative Cloud Blue (`#3B63FB`) drives all primary CTAs and interactive affordances, while Adobe
Red (`#EB1000`) functions as the brand signature reserved for the logo, editorial links, and
category accents. The system avoids decorative shadows and uses border-radius sparingly — buttons
carry a soft `16px` pill-lite radius, cards stay nearly flat at `8px`, and the overall geometry
signals precision over playfulness.

Typography is single-family throughout (Adobe Clean), with weight (400 vs. 700) and size doing all
the hierarchy work. The spacing system follows an 8px base unit with a named scale (`xxs` through
`section-xl: 104px`) that produces consistently generous whitespace — Adobe's pages breathe. The
result is a design system that serves a vast product portfolio (Photoshop, Acrobat, Firefly, Express,
Premiere, and 20+ more apps) while maintaining a singular, premium creative-tools brand voice.

Key visual characteristics:
- Single proprietary typeface (Adobe Clean) across all UI — weight and size carry all hierarchy
- Creative Cloud Blue (#3B63FB) as the universal primary CTA; Adobe Red (#EB1000) for brand marks only
- Near-white canvas (#FFFFFF) with light gray surface layers (#F8F8F8, #F3F3F3)
- Soft pill-lite button radius (16–20px) — not full pill, not sharp — distinctively Adobe
- Zero decorative shadows on cards; elevation achieved through background-color stepping
- Dark mode sections use true near-black (#101010) with full-white (#FFFFFF) text
- Uppercase detail labels with bold weight as a consistent section-entry affordance
- Generous section-level spacing (80–104px) making each product category feel distinct
- 12-column grid with 83.4% container width and responsive fluid sizing

Adobe's design differentiates from competitors like Canva (playful, colorful) and Microsoft (formal,
dense) by pairing enterprise-grade utility with a creative-professional aesthetic: restrained palette,
confident white space, and a proprietary type system that signals craft without decoration.

---

## Colors

### Brand & Accent

| Token | Hex | Use |
|-------|-----|-----|
| `primary` | `#3B63FB` | Primary CTA buttons, interactive focus rings, Creative Cloud Blue |
| `primary-active` | `#274DEA` | Hover state on primary buttons and links |
| `primary-down` | `#095ABA` | Pressed/active state for primary actions |
| `brand-red` | `#EB1000` | Adobe logo, editorial hyperlinks on dark backgrounds, brand signature |
| `link` | `#274DEA` | Body text hyperlinks on light backgrounds |
| `link-dark` | `#3B63FB` | Hyperlinks on dark/colored backgrounds |
| `semantic-info` | `#5C5CE0` | Info-level accent (Sensei AI, internal product features) |
| `semantic-focus` | `#378EF0` | Focus ring color for accessibility |

### Surface

| Token | Hex | Use |
|-------|-----|-----|
| `canvas` | `#FFFFFF` | Default page background |
| `surface` | `#F8F8F8` | Global navigation bar, section alternates, input backgrounds |
| `surface-popup` | `#F3F3F3` | Mega-menu dropdowns, tooltip panels |
| `surface-footer` | `#FAFAFA` | Footer background |
| `surface-dark` | `#101010` | Dark hero sections, promotional banners |
| `on-dark` | `#FFFFFF` | Text and icon color on dark backgrounds |

### Text

| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#2C2C2C` | Primary headings and body text |
| `body` | `#2C2C2C` | Paragraph and default UI text |
| `nav-text` | `#292929` | Navigation links and menu text |
| `muted` | `#505050` | Secondary descriptions, nav link descriptions |
| `muted-secondary` | `#707070` | Breadcrumbs, metadata, timestamps |

### Hairlines & Borders

| Token | Hex | Use |
|-------|-----|-----|
| `hairline` | `#EAEAEA` | General dividers and card borders |
| `hairline-menu` | `#E1E1E1` | Mega-menu separators |
| `hairline-secondary` | `#DADADA` | Secondary button borders |

### Semantic

| Token | Hex | Use |
|-------|-----|-----|
| `semantic-error` | `#EB1000` | Error states (shares Adobe Red) |
| `semantic-info` | `#5C5CE0` | Informational accent |
| `semantic-focus` | `#378EF0` | Keyboard focus ring |

---

## Typography

### Font Family

**Adobe Clean** is Adobe's proprietary humanist sans-serif, not publicly available via Google Fonts
or CDN. Use the CSS font-face stack: `'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif`.
When Adobe Clean is unavailable (third-party projects), Trebuchet MS is the intended fallback —
or substitute with **Inter** or **Source Sans 3** (also an Adobe open-source typeface).

**Roboto Mono** is used for code blocks: `'Roboto Mono', menlo, consolas, 'Liberation Mono', monospace`.

### Hierarchy Table

| Role | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|--------|-------------|----------------|-----|
| `display-xl` | 44px | 700 | 1.25 | 0 | Page-level hero H1 |
| `display-md` | 36px | 700 | 1.25 | 0 | Section headers, H2 on pricing/about |
| `title-lg` | 28px | 700 | 1.25 | 0 | Feature section titles |
| `title-md` | 24px | 700 | 1.25 | 0 | Card headers, H3 in body sections |
| `title-sm` | 20px | 700 | 1.25 | 0 | Sub-section titles |
| `body-lg` | 20px | 400 | 1.5 | 0 | Lead paragraphs |
| `body-md` | 18px | 400 | 1.5 | 0 | Default body text |
| `body-sm` | 16px | 400 | 1.5 | 0 | Secondary body, card descriptions |
| `body-xs` | 14px | 400 | 1.5 | 0 | Nav links, footer text |
| `caption` | 12px | 400 | 1.5 | 0 | Legal copy, metadata |
| `button` | 15px | 700 | 1.0 | 0 | Navigation CTA buttons |
| `button-lg` | 19px | 700 | 1.0 | 0 | Hero section CTAs |
| `nav-link` | 14px | 400 | 1.5 | 0 | Global nav link items |
| `detail` | 12px | 700 | 1.25 | 0 | Uppercase detail labels (section entry) |
| `code` | 14px | 400 | 1.5 | 0 | Code samples, fixed-width content |

### Principles

- **Single-family discipline**: Adobe Clean handles all UI roles — no decorative serifs or display
  fonts are introduced even on marketing pages
- **Weight as hierarchy**: 700 for all headings and CTAs; 400 for all body and nav links; no 300 or
  500 weights in the primary content hierarchy
- **Uppercase detail labels**: Section entry labels (e.g., "LIMITED-TIME OFFER") use uppercase + 700
  weight detail type to mark content zones — never use more than 16px for this treatment
- **No negative letter-spacing**: Adobe Clean is designed without tracking adjustments; always
  use `letter-spacing: normal` (0) across all sizes

---

## Layout

### Spacing System

Base unit: **8px**. All spacing values are multiples of 8px.

| Token | Value | Typical Use |
|-------|-------|-------------|
| `xxs` | 8px | Icon padding, tight list gaps |
| `xs` | 16px | Inline element gaps, card internal spacing |
| `sm` | 24px | Component padding, input padding |
| `md` | 32px | Card padding, section column gaps |
| `lg` | 40px | Larger card padding |
| `xl` | 48px | Tight section spacing |
| `xxl` | 56px | Medium section spacing |
| `section` | 80px | Standard section vertical padding |
| `section-xl` | 104px | Hero section / maximum whitespace |

### Grid & Container

- **Container width**: 83.4% of viewport (fluid, not fixed pixel)
- **12-column grid** with equal columns
- **Max nav width**: 1440px
- **Min nav breakpoint for mega-menu**: 1200px
- Sections use `margin: auto` with percentage-based gutters for responsive scaling

### Whitespace Philosophy

Adobe pages use section-level whitespace (80–104px vertical padding) to create clear cognitive
separations between product categories. Each section feels like its own editorial unit. Within
sections, content uses a 32–40px grid gap. This generous breathing room signals premium quality
and helps users navigate a vast product portfolio without feeling overwhelmed.

---

## Elevation & Depth

### Levels Table

| Level | Treatment | Example Use |
|-------|-----------|-------------|
| 0 — Flat | `background: #FFFFFF`, no shadow | Default page canvas |
| 1 — Raised | `background: #F8F8F8` | Navigation bar, featured product rows |
| 2 — Float | `background: #F3F3F3` | Mega-menu popups, dropdown panels |
| 3 — Footer | `background: #FAFAFA` | Footer, low-emphasis surfaces |
| 4 — Dark | `background: #101010` | Promotional hero banners, dark-mode callouts |
| 5 — Overlay | `background: rgba(50,50,50,0.8)` | Modal overlays, lightbox backdrops |

### Shadow Philosophy

Adobe uses **zero decorative box-shadows** on standard cards and content components. Elevation
is communicated entirely through background-color stepping (white → #F8F8F8 → #F3F3F3).
Shadows appear only on modal dialogs (`0 4px 16px rgba(0,0,0,0.1)`) and are intentionally
subtle — never dramatic. This approach keeps pages feeling light and scan-friendly.

Decorative depth is achieved through full-bleed dark sections (`#101010` background) placed
within a primarily white page — the contrast creates visual rhythm without CSS shadows.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `xs` | 4px | Utility icons, small tags |
| `sm` | 8px | Cards, input fields |
| `md` | 16px | Standard buttons (feds-cta) |
| `lg` | 20px | Large hero CTA buttons (button-xl, button-l) |
| `pill` | 9999px | Full pill shapes (badges, tags only) |

Adobe avoids full-pill buttons on primary CTAs — the 16–20px radius reads as "soft square"
rather than pill, which is a deliberate brand differentiation. Cards and content tiles use
`8px` radius for subtle warmth without departing from the professional register.

### Photography & Imagery

- Product UI screenshots are shown in contained frames with `8px` radius and light drop shadow
- Hero imagery is full-bleed with no radius treatment
- Product icons follow consistent sizing: `24px` (xs), `32px` (s), `40px` (m), `56px` (l), `64px` (xl), `80px` (xxl)
- Aspect ratios: `1/1` (square), `4/3` (standard), `16/9` (wide), `9/16` (tall mobile)

---

## Components

### Buttons

**Primary Button (feds-cta--primary)**
Background `#3B63FB`, white text, `16px` border-radius, `7px 18px 8px` padding, 700 weight, 15px.
Border: `2px solid #3B63FB` (matches background — no visible border on light canvas).
On hover: background transitions to `#274DEA`.

**Primary Button Large (con-button blue button-xl)**
Background `#3B63FB`, white text, `25px` radius (near-pill for heroes), `10px 24px 8px` padding, 700 weight, 19px.
Used in main page hero sections only.

**Secondary Button (feds-cta--secondary / outline)**
Transparent background, `#292929` text, `2px solid #DADADA` border, same radius as primary.
On dark backgrounds: white text, `2px solid #FFFFFF` border.

**Ghost / Outline Dark**
Transparent, white text, `2px solid #FFFFFF`, `20px` radius. Used on dark promotional banners.

### Cards

**Content Card**
Background `#F8F8F8`, no shadow, `8px` radius, `32px` padding, `1px solid #EAEAEA` border.
Used for product feature listing.

**Pricing / Featured Card**
Background `#FFFFFF` on `#F8F8F8` page surface, `8px` radius, subtle `0 4px 16px rgba(0,0,0,0.1)` shadow,
`1px solid #E1E1E1` border. Creates lift relative to the surface below.

### Navigation

**Global Nav (feds)**
Height `63px`, background `#F8F8F8`, max-width `1440px`. Nav links: 14px/400/`#292929`,
`6px 32px` padding per link. Top CTA button `feds-cta--primary` is right-aligned.

**Mega-menu Popup**
Background `#F3F3F3`, `1px solid #E1E1E1` border. Product links at 14px/400.
Product descriptions appear below link titles at `#505050`.

### Forms / Inputs

Text inputs: `8px` radius, `1px solid #DADADA` border, `8px 12px` padding, `18px/400` text.
Focus state: `2px solid #3B63FB`, `outline: none`.

### Detail Labels

Uppercase `12px/700` labels in `#505050` used as section entry markers (e.g., "LIMITED-TIME OFFER",
"FEATURED PRODUCTS"). Always rendered above H2 headings to frame the content context.

---

## Do's and Don'ts

**Do:**
- Use Adobe Clean (or Inter/Source Sans 3) as the sole typeface — Adobe never mixes in a second
  display or decorative font on marketing pages
- Apply `#3B63FB` exclusively for interactive CTAs and primary actions — this blue owns "action"
- Use `#EB1000` (Adobe Red) only for brand logo marks and editorial hyperlinks — not for buttons
- Set section vertical padding to at least 80px to maintain the premium breathing-room aesthetic
- Use uppercase + bold (700 weight) `detail` type as a section-entry label above H2 headings
- Keep cards flat (no shadow) on light pages; reserve subtle shadow only for elevated/modal content
- Ensure all nav CTAs use the same 16px radius as nav-bar primary buttons for visual consistency

**Don't:**
- Don't use full-pill (9999px) radius on primary or secondary CTA buttons — Adobe uses 16–20px soft radius
- Don't apply Adobe Red (`#EB1000`) to CTA buttons or backgrounds — it conflicts with the primary blue action system
- Don't introduce letter-spacing on headings — Adobe Clean is designed without tracking adjustments
- Don't use more than two background layers in the same scroll section (e.g., white card on gray surface on white page is fine; adding a third nested layer creates visual noise)
- Don't use font weights between 400 and 700 (no 500, no 600) — Adobe's binary weight system is intentional
- Don't apply box-shadow to standard content cards — use background-color differentiation instead
- Don't reduce section whitespace below 48px between major content zones — density breaks the premium feel

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 768px | Single column, hamburger nav, stacked hero, full-width buttons |
| Tablet | 768px – 1199px | 2-column grid, condensed nav links, reduced section padding |
| Desktop | 1200px+ | Mega-menu enabled, 12-column grid, full hero layout |
| Wide | 1440px+ | Nav capped at 1440px max-width; content stays fluid |

### Touch Targets

Minimum interactive target: 44px × 44px. Nav links use `padding: 6px 32px` which produces
an adequate click/tap area. Primary buttons have explicit height of 32px minimum but touch
targets are padded to 44px via surrounding whitespace.

### Collapsing Strategy

- **Navigation**: Collapses at <1200px to a hamburger toggle. The mega-menu becomes a full-height
  drawer with accordion-style category expansion.
- **Hero section**: Single-column stacked layout below 768px. CTA buttons expand to full-width.
- **Product cards**: 4-column grid → 2-column → 1-column. Minimum card width prevents premature
  wrapping.
- **Pricing cards**: 4-up → 2-up → 1-up with scroll-snap for mobile pricing exploration.

### Image Behavior

- Hero images: `object-fit: cover`, full bleed, aspect ratio preserved via intrinsic size
- Product UI screenshots: `max-width: 100%`, `8px` radius maintained at all sizes
- Icons: Fixed sizes from the icon scale — do not scale icons with `vw` units

---

## Agent Prompt Guide

### Quick Color Reference

- Primary (CTA blue): `#3B63FB`
- Primary hover: `#274DEA`
- Brand red (logo/links only): `#EB1000`
- Canvas (background): `#FFFFFF`
- Surface (nav/sections): `#F8F8F8`
- Surface popup: `#F3F3F3`
- Ink (headings/body): `#2C2C2C`
- Muted text: `#505050`
- Hairline (borders): `#EAEAEA`
- Dark canvas: `#101010`
- On-dark text: `#FFFFFF`

### Example Component Prompts

**Hero Section:**
"Create a hero on white (#FFFFFF) background. Headline 44px, weight 700, 'Adobe Clean' sans-serif, color #2C2C2C. Subheadline 20px, weight 400, color #505050. CTA button background #3B63FB, radius 20px, padding 10px 24px, white text, weight 700, 19px, border 2px solid #3B63FB."

**Dark Promotional Banner:**
"Create a full-width dark section on #101010 background. Headline 36px, weight 700, white (#FFFFFF). Body copy 18px, weight 400, #F8F8F8. Primary CTA: #3B63FB background, 20px radius, 10px 24px padding, white text. Secondary/outline CTA: transparent background, 2px solid white border, white text, same radius and padding."

**Product Card:**
"Create a product card on #F8F8F8 background. Radius 8px, no box-shadow, 1px solid #EAEAEA border, 32px padding. Product name 18px, weight 700, #2C2C2C. Description 16px, weight 400, #505050. CTA link color #274DEA, weight 700."

**Button Set:**
"Primary button: #3B63FB background, 16px radius, 7px 18px 8px padding, white text (#FFFFFF), weight 700, 15px 'Adobe Clean', 2px solid #3B63FB border. Secondary button: transparent background, 2px solid #DADADA border, #292929 text, same radius and padding."

**Global Navigation:**
"Navigation bar: #F8F8F8 background, 63px height, full width. Logo on left. Nav links: 14px, weight 400, #292929, 6px 32px padding each. Right side: Sign-in link + primary CTA button (#3B63FB, 16px radius, 7px 14px padding, white text)."

**Detail Label + Heading:**
"Section entry: uppercase label 12px, weight 700, #505050 (e.g., 'LIMITED-TIME OFFER'). Below it: heading 44px, weight 700, #2C2C2C. Below heading: body 18px, weight 400, #505050. Bottom: CTA button #3B63FB."

### Iteration Guide

1. Start with `#FFFFFF` canvas and `#F8F8F8` for nav and alternate section backgrounds
2. Load Adobe Clean via `@font-face` with `adobe-clean` source if on Adobe CDN, else fall back to Inter or Source Sans 3
3. Apply single-family typographic hierarchy — only vary font-size and font-weight, never font-family
4. Use `#3B63FB` exclusively for interactive actions; keep `#EB1000` off CTAs entirely
5. Set section padding to minimum 80px top/bottom; hero sections 104px
6. Use 16px radius on standard buttons, 20–25px for large hero CTAs — never full pill
7. Validate contrast: `#2C2C2C` on `#FFFFFF` (passes AA+), `#FFFFFF` on `#3B63FB` (passes AA+)
8. For dark sections, switch to `#101010` background and white text — maintain the same typography scale
