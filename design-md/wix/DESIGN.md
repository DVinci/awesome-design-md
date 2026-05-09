---
version: alpha
name: Wix
description: |
  Wix is a cloud-based website builder platform with a bold, accessible visual identity built
  around its proprietary Madefor typeface family. The design system pairs a vibrant electric
  blue primary with deep navy accents and generous whitespace, projecting creative confidence
  and democratized web creation. Pill-shaped CTAs, rounded cards, and a clean white canvas
  define a friendly yet professional aesthetic that appeals to small businesses, creators,
  and developers alike.

colors:
  primary: "#166AEA"
  primary-active: "#2C34AF"
  brand-navy: "#101585"
  ink: "#1C1D21"
  body: "#5E5E5E"
  muted: "#868AA5"
  canvas: "#FFFFFF"
  surface: "#F6F7FD"
  surface-card: "#C7D1FF"
  surface-dark: "#000624"
  hairline: "#DFE5EB"
  hairline-mid: "#B9B9BD"
  on-dark: "#FFFFFF"
  accent-teal: "#00524E"
  accent-green: "#DFF994"
  accent-yellow: "#FDF4A1"
  accent-lavender: "#E2D8FF"
  semantic-error: "#D13030"
  semantic-success: "#0D7A4E"
  semantic-warning: "#FAA85E"

typography:
  display-xl:
    fontFamily: "\"Madefor Display\", \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 73px
    fontWeight: 400
    lineHeight: 0.85
    letterSpacing: -2.2px

  display-md:
    fontFamily: "\"Madefor Display\", \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 43px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.43px

  title-lg:
    fontFamily: "\"Madefor Display\", \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 19px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0

  title-md:
    fontFamily: "\"Madefor Display\", \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0

  body-lg:
    fontFamily: "\"Madefor Text\", Madefor, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0

  body-md:
    fontFamily: "\"Madefor Text\", Madefor, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

  body-sm:
    fontFamily: "\"Madefor Text\", Madefor, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

  button:
    fontFamily: "\"Madefor Display\", \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

  nav-link:
    fontFamily: "\"Madefor Display\", \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

  caption:
    fontFamily: "\"Madefor Text\", Madefor, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 13px
    fontWeight: 400
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
  xs: 4px
  sm: 9px
  md: 12px
  lg: 27px
  xl: 42px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: "8px 30px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: "8px 30px"

  button-primary-disabled:
    backgroundColor: "{colors.hairline-mid}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: "8px 30px"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: "8px 30px"
    border: "1px solid {colors.primary}"

  button-secondary-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary-active}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: "8px 30px"
    border: "1px solid {colors.primary-active}"

  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"

  card-accent:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    border: "none"

  pricing-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"

  pricing-card-featured:
    backgroundColor: "{colors.surface-dark}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "none"
    textColor: "{colors.on-dark}"

  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
    padding: "3px 12px"
    border: "1px solid {colors.ink}"

  text-input-focused:
    border: "1px solid {colors.primary}"

  text-input-disabled:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    border: "1px solid {colors.hairline}"

  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: "0 0 1px 0 {colors.hairline}"

  badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "2px 10px"
---

# Wix Design System

## Overview

Wix's visual identity is built around the principle of creative empowerment — anyone should be able to build a professional website regardless of technical skill. The design language communicates this through a vibrant, electric blue primary color (`#166AEA`), ample whitespace, and the proprietary Madefor type family which projects warmth and modernity. The system balances approachability for beginners with enough sophistication to appeal to professional designers and developers.

The overall aesthetic is clean and editorial. Large, tightly-spaced display headlines with negative letter-tracking create strong visual hierarchy. Pill-shaped and large-radius buttons soften the interface and feel welcoming. The color palette moves from pure white canvases through subtle blue-tinted surfaces to deep navy dark surfaces, creating a coherent progression that works equally well in marketing contexts and functional UI. Wix's design differentiates from competitors like Squarespace (which trends toward minimalism and serif typography) by being more energetic, colorful, and approachable — it signals ease-of-use without sacrificing polish.

**Key visual characteristics:**
- Electric blue primary (`#166AEA`) — high contrast, energetic, immediately identifies the brand
- Proprietary Madefor type family (Display + Text variants) with tight line-height on hero headings
- Pill-shaped CTAs (42px border-radius) and rounded cards (27px) signal friendliness
- White canvas with subtle `#F6F7FD` tinted surfaces for section differentiation
- Deep navy dark surfaces (`#000624`) used for high-impact contrast sections
- Generous section spacing (80px) between content blocks creates breathing room
- Colorful accent palette (green, yellow, lavender, teal) for product category chips and feature highlights
- Light-blue card surface (`#C7D1FF`) used as a signature element for featured/highlighted cards

## Colors

### Brand & Accent

| Token | Hex | Use |
|-------|-----|-----|
| `primary` | `#166AEA` | Primary CTA buttons, links, active state highlights |
| `primary-active` | `#2C34AF` | Button hover/pressed states, interactive element active |
| `brand-navy` | `#101585` | Pricing page headings, deep brand accent on light backgrounds |
| `accent-teal` | `#00524E` | Dark variant CTA buttons (plan-specific), success-adjacent use |
| `accent-green` | `#DFF994` | Feature highlight chips, success indicators, fresh energy |
| `accent-yellow` | `#FDF4A1` | Warm highlight backgrounds, illustration accents |
| `accent-lavender` | `#E2D8FF` | Feature cards, soft category highlights |

### Surface

| Token | Hex | Use |
|-------|-----|-----|
| `canvas` | `#FFFFFF` | Default page background, card backgrounds |
| `surface` | `#F6F7FD` | Alternate section backgrounds, subtle differentiators |
| `surface-card` | `#C7D1FF` | Highlighted/accent card backgrounds (featured pricing tiers) |
| `surface-dark` | `#000624` | Dark hero sections, contrast marketing blocks |

### Text

| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#1C1D21` | Primary headings, high-emphasis text |
| `body` | `#5E5E5E` | Paragraph text, secondary content |
| `muted` | `#868AA5` | Captions, helper text, disabled labels |
| `on-dark` | `#FFFFFF` | All text on dark surfaces and colored buttons |

### Semantic

| Token | Hex | Use |
|-------|-----|-----|
| `semantic-error` | `#D13030` | Form validation errors, destructive actions |
| `semantic-success` | `#0D7A4E` | Completion states, positive confirmations |
| `semantic-warning` | `#FAA85E` | Warning states, caution indicators |

## Typography

### Font Family

Wix uses its **proprietary Madefor** typeface family in two variants:
- **Madefor Display** — for headings, navigation, and button labels. A clean geometric sans-serif with subtle humanist qualities.
- **Madefor Text** — for body copy, captions, and UI labels. Optimized for readability at smaller sizes.

Both variants share the same character DNA but are optimized for their respective size ranges. The fonts are served from Wix's own CDN and loaded via `@font-face` rules. For environments where Madefor is unavailable, use `"Helvetica Neue", Helvetica, Arial, sans-serif` as fallback — the fallback should maintain the proportional feeling of the design.

### Hierarchy Table

| Role | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|--------|-------------|----------------|-----|
| `display-xl` | 73px | 400 | 0.85 | -2.2px | Hero headline, primary page statement |
| `display-md` | 43px | 400 | 1.1 | -0.43px | Section headlines, feature titles |
| `title-lg` | 19px | 500 | 1.0 | 0 | Feature card headings, subsection titles |
| `title-md` | 36px | 400 | 1.33 | 0 | Page titles at secondary hierarchy |
| `body-lg` | 18px | 400 | 1.6 | 0 | Lead text, hero subheadlines |
| `body-md` | 16px | 400 | 1.5 | 0 | Standard paragraph text |
| `body-sm` | 14px | 400 | 1.5 | 0 | Supporting text, links, metadata |
| `button` | 16px | 400 | 1.5 | 0 | All button labels |
| `nav-link` | 16px | 400 | 1.5 | 0 | Top navigation items |
| `caption` | 13px | 400 | 1.5 | 0 | Captions, labels, fine print |

### Principles

- **Weight restraint**: Wix uses primarily weight 400 for all display sizes, relying on size contrast rather than boldness for hierarchy. Weight 500 appears in title-level elements and medium-bold UI text.
- **Negative tracking**: Display headlines use aggressive negative letter-spacing (-2.2px at 73px) for a tightly-set editorial quality. This tightness is the primary way Wix signals premium and confidence.
- **Fallback**: Use `"Helvetica Neue", Helvetica, Arial, sans-serif` — this was Wix's historical font before Madefor and remains the closest available system substitute.

## Layout

### Spacing System

Base unit: **8px**. All spacing values are multiples of 4px minimum, with the primary scale following 8px increments for components and 16px+ for layout.

| Token | Value | Use |
|-------|-------|-----|
| `xxs` | 4px | Icon gap, inline label spacing |
| `xs` | 8px | Component internal tight spacing |
| `sm` | 12px | Button vertical padding, form field inner spacing |
| `md` | 16px | Standard component padding, list item gaps |
| `lg` | 24px | Card internal padding, section element spacing |
| `xl` | 32px | Large card padding, prominent component gaps |
| `xxl` | 48px | Sub-section separation within a content block |
| `section` | 80px | Full section vertical padding |

### Grid & Container

| Context | Max Width | Columns | Gutter |
|---------|-----------|---------|--------|
| Marketing page | 1200px | 12 | 24px |
| Content page | 980px | 12 | 24px |
| Narrow article | 720px | 8 | 24px |
| Mobile | 100% | 4 | 16px |

### Whitespace Philosophy

Wix uses whitespace as a primary design element — not just padding between elements but as an active visual statement that content deserves room to breathe. Hero sections occupy full viewport height. Between major content sections, 80px vertical padding is standard. This generous spacing is what separates the marketing site's premium feel from more information-dense competitors. Cards and feature blocks maintain internal padding of at least 24px, giving content room regardless of the component's overall size.

## Elevation & Depth

### Levels Table

| Level | Treatment | Example use |
|-------|-----------|-------------|
| 0 — Flat | No shadow, 1px border `#DFE5EB` | Default cards, inputs, separators |
| 1 — Raised | `0 2px 8px rgba(0,0,0,0.08)` | Hovered cards, dropdown menus |
| 2 — Float | `0 4px 20px rgba(0,0,0,0.12)` | Modals, tooltips, active panels |
| 3 — Overlay | Dark scrim `rgba(0,0,0,0.5)` | Full-screen overlays, drawers |

### Shadow Philosophy

Wix favors **border-defined separation** over shadows for its primary UI. Cards use a 1px `#DFE5EB` border rather than drop shadows to maintain the flat, clean editorial feel. Shadows appear contextually on hover states and overlapping panels to indicate interactivity. The dark canvas sections (`#000624`) achieve depth through color contrast rather than shadow — stacking pure white text on near-black backgrounds creates a vivid sense of layering without any blur or shadow artifacts.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `xs` | 4px | Subtle rounding, input boxes, badges on dark |
| `sm` | 9px | Feature cards, pricing plan card accents |
| `md` | 12px | Standard cards, modal dialogs |
| `lg` | 27px | Large featured cards, plan selection cards |
| `xl` | 42px | Primary and secondary CTA buttons |
| `pill` | 9999px | Tag chips, badge pills, plan tier buttons |

Wix's defining shape signature is the **pill-shaped button** (42px radius at 16px font size). This is used consistently across all primary CTAs on the marketing site. Secondary action buttons share the same radius. Only functional UI elements (inputs, small badges) use lower radius values.

### Photography & Imagery

- **Product screenshots**: Full-bleed within rounded containers (12–27px radius), often presented with subtle perspective transforms to imply depth
- **Aspect ratios**: 16:9 for feature screenshots, 1:1 for user avatars, 3:2 for template thumbnails
- **Treatment**: Images are typically shown without additional border treatment; the surrounding card provides the border context
- **Color photography**: Real user websites shown as colorful, diverse — reflecting the breadth of Wix's template library

## Components

### Buttons

**Primary** — The signature Wix CTA. Blue pill with white text.
- Background: `#166AEA`, Text: `#FFFFFF`
- Border-radius: 42px, Padding: `8px 30px`
- Font: Madefor Display 16px/400
- No border, no shadow

**Primary Active/Hover** — Darker navy transition.
- Background: `#2C34AF` on hover

**Secondary** — Outlined pill with blue border.
- Background: transparent, Border: `1px solid #166AEA`, Text: `#166AEA`
- Same radius and padding as primary

**Dark CTA** — Used inside dark hero sections.
- Background: `#FFFFFF`, Text: `#000000`
- Same pill radius (42px), Padding: `8px 30px`

**Plan CTA (pricing page)** — Pill buttons with plan-specific brand colors.
- Navy: `#101585`, Teal: `#00524E` — pill radius (99px), small size

### Cards

**Default card** — White background, light border.
- Background: `#FFFFFF`, Border: `1px solid #DFE5EB`
- Border-radius: 12px, Padding: 24px

**Accent card** — Light blue background for featured content.
- Background: `#C7D1FF`, No border
- Border-radius: 27px, Padding: 24px

**Pricing card** — Clean plan selection card.
- Background: `#FFFFFF`, Border: `1px solid #DFE5EB`
- Border-radius: 27px, Padding: 32px

**Featured pricing card** — Dark, high-emphasis plan.
- Background: `#000624`, No border
- Border-radius: 27px, Padding: 32px, Text: `#FFFFFF`

### Inputs & Forms

**Text Input (default)**
- Background: `#FFFFFF`, Border: `1px solid #1C1D21`
- Border-radius: 4px, Padding: `3px 12px`, Font: 16px

**Text Input (focused)**
- Border: `1px solid #166AEA` (primary blue focus ring)

**Email capture (hero)**
- Inline form with input + pill button; input border-radius matches button
- The email input in the hero hero uses a flat/square approach before the rounded button

### Navigation

**Top Nav (desktop)**
- Background: `#FFFFFF` (transparent on scroll)
- Links: Madefor Display 16px, `#000000`, padding `0 12px`
- CTA button: `#166AEA` pill, `#FFFFFF` text, always visible
- No bottom border at rest; subtle shadow on scroll

**Mobile Nav**
- Hamburger menu collapses to full-width drawer
- Touch target minimum: 44px height

### Badges & Tags

**Default badge/tag**
- Pill shape (9999px radius), Madefor Text 13px
- Background: `#F6F7FD`, Text: `#5E5E5E`
- Padding: `2px 10px`

**Category chip (accent)**
- Colorful backgrounds using accent palette (green `#DFF994`, lavender `#E2D8FF`, yellow `#FDF4A1`)
- Used to categorize website template categories and features

## Do's and Don'ts

**Do:**
- Use the Madefor Display font for all headings, buttons, and navigation — it is the most distinctive brand identifier
- Apply negative letter-spacing (-2.2px) to display-xl headlines to achieve the tight, editorial look
- Use pill-shaped buttons (42px radius) for all primary and secondary CTAs to maintain brand consistency
- Layer the surface palette from `#FFFFFF` → `#F6F7FD` → `#C7D1FF` → `#000624` for meaningful section differentiation
- Give sections at least 80px of vertical padding — cramped layouts break the brand's spacious identity
- Use the electric blue (`#166AEA`) exclusively as the primary CTA color; don't dilute it with other colored buttons
- Pair colorful accent chip backgrounds with `#000000` or `#1C1D21` text for accessibility

**Don't:**
- Don't use border-radius smaller than 27px on large marketing cards — lower values break the rounded, friendly feel
- Don't use font weights above 500 for the Madefor family in marketing contexts — the brand relies on scale, not boldness, for hierarchy
- Don't place primary blue (`#166AEA`) buttons on dark navy (`#000624`) backgrounds without testing contrast — use white buttons on dark surfaces instead
- Don't use more than 3 accent colors on a single page section — the palette is expressive but not meant to be exhaustive
- Don't add heavy drop shadows to flat cards — Wix uses border separation, not elevation shadows, for its UI
- Don't use the serif fallback Times New Roman — always ensure Madefor or Helvetica Neue loads correctly
- Don't center-align body paragraphs at lengths over 2 lines — Wix uses left-aligned body text throughout

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 768px | Single column, nav collapses to hamburger, hero type scales down |
| Tablet | 768–1024px | 2-column cards, side-by-side features, nav may show partial items |
| Desktop | 1024–1440px | Full grid, full nav, hero at 73px display type |
| Wide | > 1440px | Max container width 1200px, rest is margin |

### Touch Targets

- Minimum button height: 44px
- Minimum tap target: 44×44px for all interactive elements
- Nav items on mobile: full-width, 48px height minimum

### Collapsing Strategy

- **Navigation**: Collapses to hamburger at < 768px, slides in a full-width drawer from the right
- **Hero**: Display type scales from 73px → 48px → 36px across desktop → tablet → mobile
- **Cards**: 3-column feature grids collapse to 2-column at tablet, 1-column at mobile
- **Pricing cards**: Side-by-side at desktop, stacked vertically at mobile; featured card stays on top

### Image Behavior

- Product screenshots maintain aspect-ratio using `object-fit: contain` within fixed containers
- Template thumbnails use `object-fit: cover` with 3:2 aspect ratio locked at all breakpoints
- Hero background images scale with `background-size: cover` centered on the subject

---

## Agent Prompt Guide

### Quick Color Reference

- Primary (blue CTA): `#166AEA`
- Primary Active: `#2C34AF`
- Brand Navy: `#101585`
- Canvas (background): `#FFFFFF`
- Surface (alt bg): `#F6F7FD`
- Surface Card (accent): `#C7D1FF`
- Surface Dark: `#000624`
- Ink (headings): `#1C1D21`
- Body text: `#5E5E5E`
- Muted text: `#868AA5`
- Hairline (borders): `#DFE5EB`
- On Dark (text on dark): `#FFFFFF`
- Accent Green: `#DFF994`
- Accent Yellow: `#FDF4A1`
- Accent Lavender: `#E2D8FF`
- Accent Teal: `#00524E`

### Example Component Prompts

**Hero Section:**
"Create a hero on white (`#FFFFFF`) background. Headline in Madefor Display, 73px, weight 400, line-height 0.85, letter-spacing -2.2px, color `#1C1D21`. Subheadline in Madefor Text, 18px, weight 400, color `#5E5E5E`. CTA button: background `#166AEA`, 42px border-radius, padding 8px 30px, Madefor Display 16px white text, no border. Below hero: alternate background section using `#F6F7FD`."

**Feature Card:**
"Create a feature card on white (`#FFFFFF`). 12px border-radius. 1px border `#DFE5EB`. 24px padding. Feature title: Madefor Display 19px, weight 500, color `#1C1D21`. Body: Madefor Text 16px, weight 400, color `#5E5E5E`, line-height 1.5."

**Accent Card (highlighted):**
"Create a card on light blue (`#C7D1FF`) background. 27px border-radius. No border. 24px padding. Headline Madefor Display 19px weight 500 color `#1C1D21`."

**Pricing Card Set:**
"Standard plan card: white background, 1px border `#DFE5EB`, 27px radius, 32px padding. Plan name: Madefor Display, 19px, color `#101585`. Price: Madefor Display, 43px, color `#1C1D21`. CTA: `#166AEA` pill button (9999px radius), 16px Madefor Display, white text. Featured plan card: `#000624` background, 27px radius, 32px padding, all text white `#FFFFFF`."

**Navigation Bar:**
"White (`#FFFFFF`) top nav, no border at rest. Logo left-aligned. Nav links: Madefor Display 16px, weight 400, color `#000000`, horizontal padding 12px. Right: 'Get Started' pill button — `#166AEA` background, 42px radius, padding 8px 30px, Madefor Display 16px white."

**Button Set:**
"Primary button: `#166AEA` background, 42px border-radius, 8px 30px padding, Madefor Display 16px weight 400 white text, no border. Secondary button: transparent background, 1px solid `#166AEA` border, same radius and padding, blue `#166AEA` text."

**Category Chip Row:**
"A horizontal row of pill-shaped chips (9999px radius, 2px 10px padding). Use accent colors for backgrounds: `#DFF994` (green), `#E2D8FF` (lavender), `#FDF4A1` (yellow). Text: Madefor Text 13px, color `#1C1D21`."

### Iteration Guide

1. Start with the white (`#FFFFFF`) canvas — Wix's marketing pages are always light-mode first
2. Load Madefor Display and Madefor Text from Wix's CDN or substitute Helvetica Neue — the proprietary font is the strongest brand signal
3. Apply negative letter-spacing (-2.2px) to all display-xl headlines — this tight tracking is visually distinctive
4. Use 42px border-radius consistently on all CTA buttons — pill shape is the Wix button signature
5. Alternate section backgrounds between `#FFFFFF` and `#F6F7FD` for rhythm without color noise
6. Reserve `#000624` for high-impact contrast sections (max 1 per page)
7. Check contrast on all colored surfaces — blue on white meets WCAG AA, white on `#166AEA` meets WCAG AA
8. Use the accent color palette (`#DFF994`, `#E2D8FF`, `#FDF4A1`) for category chips only, not for backgrounds of major sections
