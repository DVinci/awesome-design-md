---
version: alpha
name: The White House
description: The White House's design system projects institutional authority through a monumental, editorial aesthetic built on deep navy surfaces, three distinct typefaces, and an unwavering refusal of border-radius. Instrument Serif carries the weight of history in every headline, Instrument Sans handles all UI copy with clean restraint, and Nord — an ultra-light uppercase-only display font — stamps category labels and hero monument text with unmistakable governmental gravitas.

colors:
  primary: "#141F4D"
  primary-active: "#0D132D"
  ink: "#151A30"
  body: "#293340"
  muted: "#8A8A8A"
  canvas: "#FFFFFF"
  surface: "#F3F3F3"
  surface-warm: "#E8E6E0"
  surface-dark: "#0D132D"
  surface-navy: "#151A30"
  hairline: "#D9DEE8"
  accent-red: "#B50000"
  accent-amber: "#FFBD00"
  semantic-error: "#B50000"

typography:
  display:
    fontFamily: "\"Instrument Serif\", serif"
    fontSize: 96px
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: 3.64px
  display-xl:
    fontFamily: "\"Instrument Serif\", serif"
    fontSize: 77px
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: 1.2px
  display-md:
    fontFamily: "\"Instrument Serif\", serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: 0.76px
  title-lg:
    fontFamily: "\"Instrument Serif\", serif"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: 0.56px
  title-md:
    fontFamily: "\"Instrument Serif\", serif"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: 0.48px
  title-sm:
    fontFamily: "\"Instrument Serif\", serif"
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: 0.4px
  body-lg:
    fontFamily: "\"Instrument Sans\", sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.2px
  body-md:
    fontFamily: "\"Instrument Sans\", sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.2px
  body-sm:
    fontFamily: "\"Instrument Sans\", sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  label:
    fontFamily: "Nord, serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: 2px
  label-lg:
    fontFamily: "Nord, serif"
    fontSize: 14px
    fontWeight: 200
    lineHeight: 1.2
    letterSpacing: 3.5px
  ui-label:
    fontFamily: "\"Instrument Sans\", sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: 0.84px
  button:
    fontFamily: "Nord, serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: 1.8px
  nav-link:
    fontFamily: "\"Instrument Sans\", sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.2px

spacing:
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
  lg: 8px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "22px 30px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "22px 30px"
    border: "none"

  button-secondary:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.body}"
    typography: "{typography.ui-label}"
    rounded: "{rounded.pill}"
    padding: "15px"
    border: "none"

  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"

  card-article:
    backgroundColor: "transparent"
    rounded: "{rounded.none}"
    padding: "{spacing.lg} 0"
    border: "none"

  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "5px 10px"
    border: "1px solid {colors.hairline}"

  text-input-focused:
    border: "1px solid {colors.primary}"

  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: "0 0 1px 0 {colors.hairline}"

  top-nav-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.canvas}"
    border: "none"
---

# The White House Design System

## Overview

The White House digital identity is the rarest kind of institutional design — one that must simultaneously project 250 years of continuity, real-time executive authority, and modern digital accessibility. The system achieves this through three deliberate typographic layers: Instrument Serif (an elegant modern serif for editorial authority), Instrument Sans (a clean geometric sans for all interface and body copy), and Nord (an extreme-tracking ultra-light uppercase font used only for category labels and monumental hero text). Together they create a visual language that reads as part newspaper of record, part government archive, part modern tech.

The color system is navy-forward and austere. Deep navy (`#0D132D`, `#151A30`) dominates hero and topper backgrounds, creating the felt weight of official proclamation. White canvases and light-gray sections handle content in high contrast. Accent colors — brand red (`#B50000`) and amber (`#FFBD00`) — appear sparingly as semantic signals. No border-radius is applied to interactive elements; every button and input is rectangular, reinforcing the precision and firmness expected from a federal institution.

**Key visual characteristics:**
- Three fonts: Instrument Serif (headings), Instrument Sans (body/UI), Nord (labels/monument text)
- Nord's extreme tracking (2–3.5px letter-spacing) and ultra-light weight (200–300) make it unmistakable
- Rectangular buttons and inputs — zero border-radius across all interactive elements
- Deep navy hero toppers create a dramatic dark-to-light page transition
- All heading sizes use Instrument Serif weight 400 — editorial authority through letterform, not weight
- H6 and UI labels use Instrument Sans 600 with uppercase tracking, bridging the two sans/serif worlds
- Light surface hierarchy: `#FFFFFF` → `#F3F3F3` → `#E8E6E0` (warm stone) for progressive depth
- No decorative shadows; all depth from background contrast and hairline borders

**Positioning:** Where NYT uses sharp black-and-white print discipline, the White House chooses a monumental dark-navy gravitas. Where government sites typically feel bureaucratic, this one achieves stately — closer to the visual language of presidential libraries and museum brands.

---

## Colors

### Brand & Navy

| Token | Hex | Use |
|-------|-----|-----|
| `primary` | `#141F4D` | CTA button backgrounds, active filter states |
| `primary-active` | `#0D132D` | Hover/active state for primary navy button |
| `accent-red` | `#B50000` | Brand red, emphasis, semantic error |
| `accent-amber` | `#FFBD00` | Amber accent for callouts and highlights |

### Surface

| Token | Hex | Use |
|-------|-----|-----|
| `canvas` | `#FFFFFF` | Default page background |
| `surface` | `#F3F3F3` | Alternate light-gray sections |
| `surface-warm` | `#E8E6E0` | Warm stone sections, archival feel |
| `surface-dark` | `#0D132D` | Hero toppers, dark section backgrounds |
| `surface-navy` | `#151A30` | Secondary dark cards and nav in immersive mode |

### Text

| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#151A30` | Primary heading text on light surfaces (navy-blue) |
| `body` | `#293340` | Body copy, nav links, standard UI text (charcoal) |
| `muted` | `#8A8A8A` | Secondary text, captions, meta information |

### Contextual

| Token | Hex | Use |
|-------|-----|-----|
| `hairline` | `#D9DEE8` | Borders, dividers, inactive filter pill backgrounds |

### Semantic

| Token | Hex | Use |
|-------|-----|-----|
| `semantic-error` | `#B50000` | Error states, destructive actions |

---

## Typography

### Font Families

**Instrument Serif** — A refined modern serif by Google Fonts used exclusively for all editorial headings (H1–H5). Loaded at weight 400 only. Its fine strokes and elegant letterforms evoke presidential stationery and broadsheet mastheads. `font-family: "Instrument Serif", serif`.

**Instrument Sans** — A geometric sans-serif for all UI copy: body text, navigation, labels, and button labels of the secondary variety. Loaded at 400, and 600. Pairs with Instrument Serif to create a dual-register typographic system. `font-family: "Instrument Sans", sans-serif`.

**Nord** — A proprietary or rare ultra-light serif/display font used exclusively for uppercase category labels, filter buttons, and monumental hero text. Characterized by extreme letter-spacing (1.8–3.5px) and ultra-light weight (200–400). Never used for body text. `font-family: Nord, serif`.

### Hierarchy Table

| Role | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|--------|-------------|----------------|-----|
| `display` | 96px | 400 | 1.18 | 3.64px | Monument hero text (uppercase) |
| `display-xl` | 77px | 400 | 1.08 | 1.2px | Primary page H1, hero headings |
| `display-md` | 48px | 400 | 1.18 | 0.76px | Section H2 headings |
| `title-lg` | 36px | 400 | 1.18 | 0.56px | Feature section H3 |
| `title-md` | 28px | 400 | 1.18 | 0.48px | Card headings H4 |
| `title-sm` | 22px | 400 | 1.18 | 0.4px | Sub-section H5 |
| `body-lg` | 20px | 400 | 1.6 | 0.2px | Lead paragraphs, introductions |
| `body-md` | 18px | 400 | 1.6 | 0.2px | Default body copy |
| `body-sm` | 14px | 400 | 1.6 | 0px | Captions, secondary copy |
| `label` | 12px | 400 | 1.18 | 2px | Nord: article category labels (uppercase) |
| `label-lg` | 14px | 200 | 1.2 | 3.5px | Nord: hero section category labels (uppercase) |
| `ui-label` | 14px | 600 | 1.18 | 0.84px | Instrument Sans: H6-style UI labels (uppercase) |
| `button` | 12px | 400 | 1.18 | 1.8px | Nord: CTA button labels (uppercase) |
| `nav-link` | 14px | 400 | 1.6 | 0.2px | Navigation link text |

### Principles

- Instrument Serif uses only weight 400 across all heading sizes — authority is expressed through size and letter-spacing, never through bold weight
- The letter-spacing increases as font size decreases for Instrument Serif headings (1.2px at H1, 0.76px at H2, etc.)
- Nord is never mixed with Instrument Serif — Nord is for labels, Instrument Serif is for editorial content
- H6/UI labels are the only uppercase Instrument Sans usage — marks the boundary between editorial and informational layers
- All text is set in `text-transform: uppercase` only for Nord and H6 roles; Instrument Serif headings are mixed-case

---

## Layout

### Spacing System

Base unit: 8px

| Token | Value | Use |
|-------|-------|-----|
| `xs` | 8px | Tight icon and element padding |
| `sm` | 12px | Nav button padding, dense form spacing |
| `md` | 16px | Standard horizontal padding |
| `lg` | 24px | Card internal padding, paragraph gap |
| `xl` | 32px | Section sub-block spacing |
| `xxl` | 48px | Page section padding |
| `section` | 80px | Major section vertical padding |

### Grid & Container

- Content width: `min(100%, 782px)` — narrow editorial column (CSS var: `--wh--style--global--content-size`)
- Wide content: `min(100%, 1200px)` — full-width sections (CSS var: `--wh--style--global--wide-size`)
- Hero/topper: full-bleed, no max-width
- News grid: 3-column article cards on desktop
- Priorities grid: full-width feature blocks stacked vertically

### Whitespace Philosophy

The White House site uses the narrow content width aggressively — 782px maximum for body content creates the feel of a broadsheet column rather than a wide digital grid. Sections breathe with 80px vertical padding. The narrow measure increases reading authority and focus, appropriate for an official proclamation context.

---

## Elevation & Depth

### Levels

| Level | Treatment | Example Use |
|-------|-----------|-------------|
| 0 — Flat | No shadow, no border | Article cards on white, priorities tiles |
| 1 — Hairline | `1px solid #D9DEE8` | Form inputs, content cards on gray surfaces |
| 2 — Surface shift | Background shifts `#FFFFFF` → `#F3F3F3` → `#E8E6E0` | Alternating page sections |
| 3 — Dark immersion | Full-bleed `#0D132D` navy section | Hero toppers, newsletter signup, priorities section headers |

### Shadow Philosophy

The White House design uses no CSS shadows anywhere. All visual hierarchy is conveyed through background color transitions — the dramatic shift from deep navy hero (`#0D132D`) to white content body is the primary depth signal. This choice communicates the permanence and stability of federal authority: shadows suggest hovering uncertainty, while flat surfaces suggest grounded solidity.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `none` | 0px | All buttons, inputs, cards, images — the default |
| `sm` | 4px | Rare contextual use (e.g., small badge/chip) |
| `lg` | 8px | Modal containers if needed |
| `pill` | 9999px | Filter/category pill selectors only |

The system's signature shape constraint is `none` — rectangular across every interactive element. This is the sharpest possible signal of governmental precision and formality. The only exception is the category filter pill (`9999px`) on archive/news pages.

### Photography & Imagery

- Presidential photography: full-bleed, high-contrast, often displayed with dark navy overlay for text legibility
- Official portrait photos: aspect ratio 4:3, no border-radius, sharp-cropped
- Hero topper images: full-width with gradient overlay (`linear-gradient(0deg, #0D132D 24%, #0B1B33 100%)`)
- Document/policy images: displayed at natural aspect ratio with hairline border

---

## Components

### Buttons

**Primary (Navy CTA):**
Background `#141F4D` (navy-accent), white text, no border-radius, padding `22px 30px`, Nord 12px weight 400, letter-spacing 1.8px, uppercase. The rectangular navy block is the signature government-authority button style.

**Primary Active/Hover:**
Background shifts to `#0D132D` (deep-navy), same shape and typography. No animation — state change is immediate.

**Secondary (Filter Pill):**
Background `#D9DEE8` (pale-gray), charcoal text `#293340`, `border-radius: 9999px`, padding `15px`, Instrument Sans 14px weight 600, letter-spacing 0.84px, uppercase. Used for news category filters and tag selectors.

**Close/Icon Button:**
Transparent background, `border-radius: 100%` (circular), `1px solid rgba(138,138,138,0.3)` border, padding `8px`. Used for modal dismissal and search close.

### Cards

**Article Card:**
Transparent background, no border, no border-radius, padding `24px 0`. Article category label in Nord 12px uppercase above headline in Instrument Serif. No shadow.

**Content Card:**
White background, `1px solid #D9DEE8` border, no border-radius, padding `24px`. Used for structured content blocks.

### Inputs & Forms

Text/search input: white background, no border-radius, padding `5px 10px`, `1px solid #D9DEE8` border, Instrument Sans 16px 400, text `#151A30`, letter-spacing 0.4px.
Focused: `1px solid #141F4D` border.
Newsletter signup uses same input style within a dark navy (`#0D132D`) section.

### Navigation

Top nav defaults to white (`#FFFFFF`) background with charcoal text. In "immersive" mode (hero pages), nav transitions to transparent then to deep navy (`#0D132D`) background with white text. Header height: 50px. Nav links: Instrument Sans 14px 400.

### Badges & Labels

Nord category label: 12px, weight 400, letter-spacing 1.8–2px, uppercase, no background. Used above article headlines to indicate content type ("NEWS", "EXECUTIVE ORDER", "STATEMENT").

---

## Do's and Don'ts

**Do:**
- Use Nord exclusively for uppercase category labels and filter buttons — it's the brand's most distinctive visual signature
- Apply `border-radius: 0px` to all buttons and inputs — rectangularity is non-negotiable
- Use Instrument Serif for headings and Nord for labels — never swap them
- Apply the narrow `782px` content column for all editorial text — it creates the broadsheet authority feel
- Use full-bleed deep navy (`#0D132D`) for hero toppers and feature section headers
- Set all Instrument Serif headings at weight 400 — authority comes from size and letter-spacing, not bold
- Increase letter-spacing slightly as heading size decreases (Instrument Serif tracking rule)

**Don't:**
- Don't use border-radius on buttons or inputs — the rectangular shape is a core brand signal
- Don't use Nord at body sizes — it's designed for display use at 12–14px minimum with heavy letter-spacing
- Don't use Instrument Sans for headings above body-lg — those roles belong to Instrument Serif
- Don't use drop shadows anywhere in the layout — depth comes from background contrast only
- Don't apply `text-transform: uppercase` to Instrument Serif headings — only Nord and Instrument Sans h6/buttons go uppercase
- Don't use more than three font families on one page — Instrument Serif + Instrument Sans + Nord is the complete system
- Don't use accent-red (`#B50000`) as a decorative color — it carries semantic weight and should signal urgency or error

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 768px | Single-column layout, hamburger nav, full-width buttons, reduced hero font sizes |
| Tablet | 768–1024px | 2-column news grid, condensed nav, reduced hero display sizes |
| Desktop | > 1024px | 3-column news grid, full nav visible, hero topper at full 77px H1 |

### Touch Targets

- Primary nav button: 50px height (full header height = touch target)
- CTA buttons: minimum height 44px (22px top + 22px bottom padding on 12px font)
- Filter pills: minimum 44px touch target (15px padding × 2 + 14px font)
- Close button: 40px minimum (circular, 8px padding on 24px icon)

### Collapsing Strategy

- News grid: 3-column → 2-column → 1-column as viewport narrows
- Hero topper: full-bleed at all sizes; text size scales via clamp() (responsive fluid type)
- Navigation: full horizontal → hamburger at mobile; CTA button maintained in collapsed state
- Content column: `min(100%, 782px)` naturally becomes full-width below ~830px with side gutters

### Image Behavior

- Hero images: full-bleed at any width with dark overlay gradient
- Article card thumbnails: 16:9 aspect ratio, object-fit cover, no border-radius
- Portrait photos: 4:3 aspect ratio, scale with container

---

## Agent Prompt Guide

### Quick Color Reference
- Primary (Navy CTA): `#141F4D`
- Primary Active: `#0D132D`
- Canvas (background): `#FFFFFF`
- Surface (light): `#F3F3F3`
- Surface Warm: `#E8E6E0`
- Surface Dark (hero): `#0D132D`
- Ink (headings): `#151A30`
- Body text: `#293340`
- Muted text: `#8A8A8A`
- Hairline (borders): `#D9DEE8`
- Accent Red: `#B50000`
- Accent Amber: `#FFBD00`

### Example Component Prompts

**Hero Topper:**
"Create a full-bleed hero section on `#0D132D` deep navy background. Category label: Nord 14px weight 200, `#FFFFFF`, letter-spacing 3.5px, uppercase. Headline: Instrument Serif 77px weight 400, `#FFFFFF`, line-height 1.08, letter-spacing 1.2px. No border-radius on any element. Use `linear-gradient(0deg, #0D132D 24%, #0B1B33 100%)` as section background gradient."

**Article Card:**
"Create an article card with transparent background, no border, no border-radius, `24px 0` padding. Above the headline: Nord 12px weight 400, `#151A30`, letter-spacing 2px, uppercase (e.g., 'NEWS'). Headline: Instrument Serif 28px weight 400, `#293340`, line-height 1.18, letter-spacing 0.48px. No shadow."

**CTA Button:**
"Primary button: `#141F4D` background, `#FFFFFF` text, no border-radius, padding `22px 30px`, font: Nord 12px weight 400, letter-spacing 1.8px, uppercase, no border."

**Filter Pill:**
"Category filter: `#D9DEE8` background, `#293340` text, `border-radius: 9999px`, padding `15px`, Instrument Sans 14px weight 600, letter-spacing 0.84px, uppercase, no border. Active state: `#141F4D` background, `#FFFFFF` text, no border-radius, padding `22px 30px`, Nord 12px, letter-spacing 1.8px."

**Newsletter Section (Dark):**
"Create a signup section on `#0D132D` background. Label: Nord 13px weight 400, `#FFFFFF`, letter-spacing 2.8px, uppercase. Input: white background, no border-radius, padding `5px 10px`, `1px solid #D9DEE8` border, Instrument Sans 16px 400."

### Iteration Guide
1. Start with `#FFFFFF` for content pages; `#0D132D` for hero toppers and feature sections
2. Load Instrument Serif (400), Instrument Sans (400, 600), and Nord from Google Fonts or self-hosted
3. Apply `border-radius: 0px` to ALL interactive elements — rectangularity is mandatory
4. Use Nord only at uppercase small sizes (12–14px) with heavy letter-spacing (2–3.5px)
5. Use Instrument Serif only for headings (H1–H5); never for body text
6. Keep body content in the narrow `min(100%, 782px)` column — resist the urge to go wide
7. Check contrast: white on `#0D132D`, `#293340` on `#FFFFFF` — both are WCAG AA compliant
