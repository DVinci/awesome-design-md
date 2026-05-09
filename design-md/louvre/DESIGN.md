---
version: alpha
name: Louvre
description: |
  The Musée du Louvre's official digital identity fuses classical gravitas with modern
  minimalism. A jet-black canvas anchors a tightly controlled palette of white text,
  an institutional teal accent, and warm ochre image placeholders drawn from centuries
  of art. The custom LouvreSerif typeface — a proprietary uppercase serif — signals
  cultural authority on display headings and exhibition card titles, while Montserrat
  handles all uppercase label work and navigation, and Roboto serves long-form reading.
  Full-pill buttons, flat zero-radius cards, and generous 80px section spacing create
  a gallery-like sense of open, curated space.

colors:
  primary: "#008573"
  primary-active: "#006E5E"
  ink: "#FFFFFF"
  body: "#FFFFFF"
  muted: "#707070"
  canvas: "#000000"
  surface: "#F6F6F6"
  surface-dark: "#1A1A1A"
  on-dark: "#FFFFFF"
  on-light: "#000000"
  hairline: "#333333"
  hairline-light: "#C6C6C6"
  accent-ochre: "#483112"
  accent-teal: "#008573"

typography:
  display-xl:
    fontFamily: "LouvreSerif, Georgia, \"Times New Roman\", serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.17
    letterSpacing: 0
  display-md:
    fontFamily: "LouvreSerif, Georgia, \"Times New Roman\", serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  title-lg:
    fontFamily: "Roboto, \"Open Sans\", Arial, Helvetica, sans-serif"
    fontSize: 30px
    fontWeight: 400
    lineHeight: 1.37
    letterSpacing: 0
  title-md:
    fontFamily: "Montserrat, Verdana, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 1.6px
  body-lg:
    fontFamily: "Roboto, \"Open Sans\", Arial, Helvetica, sans-serif"
    fontSize: 18px
    fontWeight: 300
    lineHeight: 1.61
    letterSpacing: 0
  body-md:
    fontFamily: "Roboto, \"Open Sans\", Arial, Helvetica, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.57
    letterSpacing: 0
  body-sm:
    fontFamily: "Roboto, \"Open Sans\", Arial, Helvetica, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: "Roboto, \"Open Sans\", Arial, Helvetica, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.56
    letterSpacing: 0
  nav-link:
    fontFamily: "Montserrat, Verdana, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.57
    letterSpacing: 1.2px
  caption:
    fontFamily: "Montserrat, Verdana, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.57
    letterSpacing: 1.3px

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
  none: 0px
  xs: 4px
  sm: 8px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
    border: "none"

  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
    border: "1px solid {colors.hairline}"

  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
    border: "1px solid {colors.on-dark}"

  card-base:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-light}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    border: "none"
    boxShadow: "none"

  card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
    padding: "{spacing.section} 0px"
    border: "none"

  text-input:
    backgroundColor: "transparent"
    textColor: "{colors.on-light}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.none}"
    padding: "0px"
    border: "0px"

  text-input-focused:
    border: "0 0 2px 0 {colors.primary}"

  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    border: "none"
    padding: "20px 0px"

  exhibition-card:
    backgroundColor: "transparent"
    textColor: "{colors.on-light}"
    typography: "{typography.display-md}"
    rounded: "{rounded.none}"
    padding: "0px"
    border: "none"

  section-label:
    fontFamily: "{typography.caption}"
    textTransform: "uppercase"
    letterSpacing: "1.6px"
    textColor: "{colors.on-light}"
---

# Louvre Design System

## Overview

The Louvre's digital identity is a study in institutional restraint — the world's most-visited museum translates its physical grandeur into a digital language of jet-black backgrounds, pure white text, and a single teal accent that signals bookable action. The aesthetic is deliberately gallery-like: generous empty space, carefully controlled typography, and no decorative clutter that might compete with the masterworks being showcased.

The three-font system tells the whole story. LouvreSerif — a custom proprietary uppercase serif — appears only for display-level headings and exhibition card titles, lending each piece of content the weight of an institution with 800 years of history. Montserrat handles all labels and navigation as condensed uppercase geometric text with wide letter-spacing. Roboto handles everything else with clean utilitarian efficiency. Together they create a precise hierarchy: serif for prestige, geometric sans for wayfinding, humanist sans for reading.

Key visual characteristics:
- Jet-black (`#000000`) canvas with white text — pure, timeless contrast throughout the navigation and hero areas
- Institutional teal (`#008573`) used exclusively for ticketing and primary CTAs — the only accent colour on a monochrome site
- Custom `LouvreSerif` proprietary typeface for display headings and exhibition card titles — uppercase, weight 400, no letter-spacing
- Montserrat at weight 600 with 1.2–1.6px letter-spacing for all uppercase labels, section titles, and navigation items
- Full-pill buttons (`border-radius: 9999px`) — the only curved form element on an otherwise flat, zero-radius site
- Section-level whitespace of 80px vertical padding — mimicking the breathing room of physical gallery halls
- Two surface modes: smoke-white (`#F6F6F6`) for light content sections, coal-black (`#1A1A1A`) for dark feature sections
- Image-first card design with no visible borders, shadows, or rounded corners — artwork bleeds edge-to-edge

Differentiation: Unlike competitor museum sites that use warm beige or gold heritage palettes, the Louvre opts for stark monochrome, positioning it closer to a contemporary art institution than a classical one. The only warmth comes from the art itself.

---

## Colors

### Brand & Accent
| Token | Hex | Use |
| ----- | --- | --- |
| `primary` | `#008573` | Ticket/booking CTA buttons, primary call to action |
| `primary-active` | `#006E5E` | Hover and pressed state of primary buttons |
| `accent-teal` | `#008573` | Same as primary; confirms teal is the sole brand accent |
| `accent-ochre` | `#483112` | Warm image placeholder behind artworks before load |

### Surface
| Token | Hex | Use |
| ----- | --- | --- |
| `canvas` | `#000000` | Page background, top nav, footer |
| `surface-dark` | `#1A1A1A` | Dark-themed content sections (e.g., editorial highlights blocks) |
| `surface` | `#F6F6F6` | Light-mode content sections ("smoke-white" class) |

### Text
| Token | Hex | Use |
| ----- | --- | --- |
| `ink` / `on-dark` | `#FFFFFF` | All text on black or dark surfaces |
| `on-light` | `#000000` | All text on white or light surfaces |
| `muted` | `#707070` | Secondary/subdued body text on light backgrounds |

### Borders & Separators
| Token | Hex | Use |
| ----- | --- | --- |
| `hairline` | `#333333` | Button borders on dark surfaces (Online Boutique button) |
| `hairline-light` | `#C6C6C6` | Dividers and separators on light surfaces |

### Semantic
The site has no dedicated semantic color palette on observed pages. Error and form validation states inherit from Roboto body text in context. Teal (`#008573`) serves informational/confirmation semantics through its exclusive use on the primary booking CTA.

---

## Typography

### Font Families
| Family | Role | Notes |
| ------ | ---- | ----- |
| LouvreSerif | Display headings, exhibition card titles | Proprietary custom typeface; not publicly available. Fallback: `Georgia, "Times New Roman", serif` |
| Montserrat | Labels, section headings, navigation | Google Fonts — load via CDN. Use weight 600 only with uppercase + tracking |
| Roboto | Body copy, buttons, captions, UI text | Google Fonts — use weights 300, 400, 500 |

### Hierarchy Table
| Role | Font | Size | Weight | Line Height | Letter Spacing | Text Transform | Use |
| ---- | ---- | ---- | ------ | ----------- | -------------- | -------------- | --- |
| `display-xl` | LouvreSerif | 48px | 400 | 1.17 | 0 | UPPERCASE | Homepage hero section titles, HIGHLIGHTS heading |
| `display-md` | LouvreSerif | 24px | 400 | 1.33 | 0 | UPPERCASE | Exhibition card titles, artwork names |
| `title-lg` | Roboto | 30px | 400 | 1.37 | 0 | none | Section subheadings, opening hours, ticket prices |
| `title-md` | Montserrat | 18px | 600 | 1.33 | 1.6px | UPPERCASE | Section headings (HOURS & ADMISSION, MAP & DIRECTIONS) |
| `body-lg` | Roboto | 18px | 300 | 1.61 | 0 | none | Hero subtitle/strapline |
| `body-md` | Roboto | 14px | 400 | 1.57 | 0 | none | Body copy, footer links, card descriptions |
| `button` | Roboto | 16px | 500 | 1.56 | 0 | none | CTA button labels |
| `nav-link` | Montserrat | 14px | 600 | 1.57 | 1.2px | UPPERCASE | Desktop primary navigation items |
| `caption` | Montserrat | 14px | 600 | 1.57 | 1.3px | UPPERCASE | Footer column headers, table headers |

### Principles
- **LouvreSerif is always uppercase** — never use it in mixed case; the typeface is only licensed for institutional display contexts
- **Montserrat tracking is non-negotiable** — always pair weight 600 with `letter-spacing: 1.2–1.6px` and `text-transform: uppercase`; loose tracking at small sizes is a core brand signal
- **Roboto weight hierarchy** — weight 300 for straplines, 400 for reading, 500 for interactive labels; never use 700 in body context
- **No display sizing below 24px for LouvreSerif** — below this point, fall back to Montserrat or Roboto for readability

---

## Layout

### Spacing System
Base unit: 8px

| Token | Value | Use |
| ----- | ----- | --- |
| `xxs` | 4px | Icon gaps, fine micro-spacing |
| `xs` | 8px | Inline element gaps, small button padding |
| `sm` | 12px | Compact button padding (nav ticket button) |
| `md` | 16px | Card internal padding, nav item padding |
| `lg` | 24px | Component-level gaps, card padding |
| `xl` | 32px | Primary button horizontal padding |
| `xxl` | 48px | Content block internal spacing |
| `section` | 80px | Vertical section padding — the dominant rhythm unit |

### Grid & Container
- **Max container width:** approximately 1280px with auto side margins
- **Homepage grid:** 3-column exhibition card grid with equal-width image-first cards
- **Content pages:** 2-column split-screen layout (text left, imagery right) for information sections
- **Navigation:** Full-width black bar, logo centered-left, links centered, CTAs right-aligned

### Whitespace Philosophy
The Louvre site treats whitespace as a gallery wall. Each section breathes with 80px of vertical padding — the digital equivalent of the distance between hung paintings. Cards have no internal padding beyond their image ratio, keeping artwork at maximum size. Section labels appear above content with generous clearance. The constraint is deliberate: where most sites compete with decoration, the Louvre lets content command attention.

---

## Elevation & Depth

| Level | Treatment | Example use |
| ----- | --------- | ----------- |
| 0 — Flat | No shadow, no border | Exhibition cards, body sections, image containers |
| 1 — Outlined | `1px solid #333333` border | Online Boutique nav button on dark background |
| 2 — Overlay | Dark overlay `rgba(0,0,0,0.24)` over imagery | Image cards with hover text overlay |
| 3 — Modal/overlay | Full-screen cookie consent panel on `rgb(255,255,255)` background | Cookie consent |

### Shadow Philosophy
The Louvre uses zero box-shadows anywhere in the design. Depth is communicated through background color contrast alone — the shift from `#000000` canvas to `#1A1A1A` dark surface to `#F6F6F6` light surface creates a three-level depth hierarchy without any shadow. This reinforces the flat, architectural quality of the design.

---

## Shapes

### Border Radius Scale
| Token | Value | Use |
| ----- | ----- | --- |
| `none` | 0px | Cards, images, sections, containers, inputs — everything structural |
| `xs` | 4px | Dropdown/popover list items (language selector) |
| `pill` | 9999px | All buttons — the single expressive rounded element in the system |

The contrast between zero-radius everywhere and full-pill on buttons is a deliberate choice. It makes buttons unmistakably interactive against a sea of rectilinear layout geometry.

### Photography & Imagery
- **Aspect ratios:** Exhibition cards use approximately 65.79% padding-bottom ratio (~19:12.5, close to 3:2 landscape) for consistent grid layout
- **Image treatment:** Full-bleed within container, no border, no shadow, no rounding
- **Placeholder color:** Warm ochre `#483112` used as image background before load — drawn from typical artwork pigment palette
- **Alt text and captions:** Appear below or overlaid on images in Roboto 14px weight 400

---

## Components

### Buttons
The button system is one of the most expressive parts of the Louvre's otherwise restrained design.

**Primary (Teal — Book a ticket)**
- Background: `#008573`, Text: `#FFFFFF`
- Font: Roboto 16px weight 500
- Padding: `12px 32px`, Radius: `9999px`
- Border: none
- Used exclusively for ticketing and primary booking actions

**Secondary (Dark outline — Online Boutique)**
- Background: `#000000`, Text: `#FFFFFF`
- Padding: `8px 16px`, Radius: `~38px` (pill)
- Border: `1px solid #333333`
- Used for secondary commerce actions in the navigation

**Ghost/Inverted (White — Newsletter signup)**
- Background: `#FFFFFF`, Text: `#000000`
- Padding: `12px 32px`, Radius: pill
- Border: none
- Used on dark sections where the teal button would clash

### Cards

**Exhibition / Homepage Cards**
- Fully transparent background — content sits directly on section background
- Zero border-radius, zero border, zero shadow
- Image fills top portion at 65.79% aspect ratio (3:2 landscape)
- Title: LouvreSerif 24px weight 400, UPPERCASE, `#000000` on light sections
- No explicit card padding — grid gap provides spacing

**Content Sections (Dual-surface)**
- Light sections: `#F6F6F6` background, 80px vertical padding, black text
- Dark sections: `#1A1A1A` background, 80px vertical padding, white text
- Section title uses Montserrat 18px/600/uppercase/1.6px tracking

### Navigation
**Desktop Top Nav**
- Background: `#000000` (matches body canvas)
- Logo: SVG wordmark, white, left-aligned
- Nav items: Montserrat 14px, weight 600, UPPERCASE, 1.2px tracking, white text
- Utility buttons: Boutique (dark pill outline) + Tickets (teal pill) on the right
- Language switcher: Roboto 16px in a popover dropdown

**Sub-navigation (expanded)**
- Expands from nav item on hover with `#000000` full-width dropdown
- Links: Roboto 16px weight 500, white on black

### Inputs & Forms
- Search input: Roboto 18px weight 300, transparent background, no visible border
- Newsletter email input: styled as minimal underline input
- No custom checkbox or select styling visible on observed pages

### Section Labels
- Montserrat 18px, weight 600, letter-spacing 1.6px, UPPERCASE
- `#000000` on light sections, `#FFFFFF` on dark sections
- Appear as standalone eyebrow labels above Roboto content headings

---

## Do's and Don'ts

**Do:**
- Use `LouvreSerif` in UPPERCASE only — lowercase LouvreSerif breaks the brand voice
- Apply Montserrat with `letter-spacing: 1.2–1.6px` and `font-weight: 600` — the tracking is mandatory at any size
- Use the full-pill button shape (`border-radius: 9999px`) for all interactive button elements
- Keep section backgrounds to the three-tier palette: `#000000`, `#1A1A1A`, `#F6F6F6`
- Use `#008573` teal exclusively for booking/ticketing actions — do not apply it to decorative elements
- Maintain 80px section vertical padding to preserve the gallery-like breathing room
- Allow artwork photography to bleed edge-to-edge with no border or rounding treatment

**Don't:**
- Don't add box-shadows — the Louvre design is entirely shadowless; depth comes from surface contrast alone
- Don't use warm beige, gold, or heritage-palette colors as backgrounds — the design is intentionally cold and contemporary
- Don't use LouvreSerif below 24px — it is a display typeface and loses legibility at small sizes
- Don't mix border-radius styles — keep all containers and cards at 0px, reserve pills only for buttons
- Don't use Montserrat for body copy — it is exclusively for uppercase labels, section titles, and navigation
- Don't use more than two font families on a single component — the three-font system requires strict compartmentalization
- Don't use `rgba` overlays on light surfaces — dark overlays are only appropriate on photography

---

## Responsive Behavior

| Breakpoint | Width | Key Changes |
| ---------- | ----- | ----------- |
| Mobile | < 768px | Single-column card layout; hamburger menu replaces desktop nav; hero text scales to ~28px |
| Tablet | 768–1024px | 2-column card grid; condensed nav with abbreviated labels |
| Desktop | 1024px+ | 3-column card grid; full horizontal nav with Boutique + Tickets CTAs |
| Wide | 1280px+ | Container locks at max-width; side margins grow to center content |

### Touch Targets
- Minimum interactive target size: 44×44px (nav buttons, language switcher)
- Ticket/Boutique pill buttons: minimum 36px height — adequate but tight on mobile
- Navigation links maintain 20px vertical padding for comfortable tap zone

### Collapsing Strategy
- Desktop navigation collapses to a hamburger icon on mobile
- Three-column exhibition card grid collapses to single column with full-width image ratio preserved
- Split-screen (text/image) layouts stack vertically — text above, image below
- Section label tracking reduces slightly (1.2px → 1.0px implied) at mobile widths

### Image Behavior
- Images maintain their aspect-ratio container (65.79% padding-bottom) — always 3:2 landscape regardless of viewport
- Images are `object-fit: cover` within their fixed-ratio wrapper
- No lazy-load placeholder visible beyond the ochre background-color fallback

---

## Agent Prompt Guide

### Quick Color Reference
- Primary (teal): `#008573`
- Canvas (background): `#000000`
- Surface (light sections): `#F6F6F6`
- Surface dark (dark sections): `#1A1A1A`
- Ink / On-dark text: `#FFFFFF`
- On-light text: `#000000`
- Muted text: `#707070`
- Hairline (dark borders): `#333333`
- Hairline light: `#C6C6C6`
- Accent ochre: `#483112`

### Example Component Prompts

**Hero Section:**
"Create a hero on a black (`#000000`) background. Section eyebrow label: Montserrat 18px, weight 600, uppercase, letter-spacing 1.6px, white. Hero display heading: LouvreSerif (fallback Georgia serif) 48px, weight 400, uppercase, white, line-height 1.17. Subtitle: Roboto 30px, weight 300, white, line-height 1.37. CTA button: background `#008573`, pill radius 9999px, padding `12px 32px`, Roboto 16px weight 500, white text, no border."

**Exhibition Card:**
"Create an exhibition card on a white or `#F6F6F6` background. No border, no shadow, no border-radius. Image fills top at a 3:2 aspect ratio (use padding-bottom: 65.79% technique), full bleed, object-fit cover, background `#483112` as placeholder. Card title below image: LouvreSerif (Georgia serif fallback) 24px, weight 400, uppercase, black `#000000`. Category label above title: Montserrat 12px, weight 600, uppercase, letter-spacing 1.3px, muted `#707070`."

**Navigation Bar:**
"Create a full-width black (`#000000`) navigation bar. Logo left. Center nav items: Montserrat 14px, weight 600, uppercase, letter-spacing 1.2px, white. Right side: two pill buttons. Boutique button: background black, `1px solid #333333` border, Roboto 14px weight 500 white text, padding `8px 16px`, pill radius. Tickets button: background `#008573`, no border, same padding and radius, white text."

**Section with Label:**
"Create a light content section on `#F6F6F6` background with 80px vertical padding. Section label: Montserrat 18px, weight 600, uppercase, letter-spacing 1.6px, black. Section subtitle: Roboto 30px, weight 400, black. Body copy: Roboto 14px, weight 400, black, line-height 1.57."

**Dark Editorial Section:**
"Create a dark editorial section on `#1A1A1A` background with 80px vertical padding. Section label: Montserrat 18px, weight 600, uppercase, letter-spacing 1.6px, white. Content: Roboto 14px, weight 400, white, line-height 1.57. Button: white background, black text, pill radius, padding `12px 32px`."

### Iteration Guide
1. Start with `#000000` as your page canvas; never use off-black or very dark grey as a substitute
2. Load LouvreSerif fallback stack (`Georgia, "Times New Roman", serif`) — the custom font is proprietary; the serif fallback preserves the spirit
3. Apply Montserrat via Google Fonts (weight 600 only); always pair with `text-transform: uppercase` and the correct letter-spacing
4. Reserve `#008573` teal exclusively for CTAs that lead to ticketing or booking — no decorative use
5. Use full-pill radius (`border-radius: 9999px`) only on buttons — everything else must be `border-radius: 0`
6. Maintain 80px section padding — the generous whitespace is as important as the typography
7. Let images bleed edge-to-edge within their containers with zero border treatment
