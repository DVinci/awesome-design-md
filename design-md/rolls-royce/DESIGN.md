---
version: alpha
name: Rolls-Royce Motor Cars
description: |
  Rolls-Royce Motor Cars embodies the pinnacle of British luxury automotive design. The visual
  identity is built on cinematic darkness — deep obsidian backgrounds, pure white typography,
  and the regal Black Badge purple — conveying timeless opulence without ostentation. Every
  element is stripped to its essential form: a single typeface (Riviera Nights), extreme
  letter-spacing on all-caps headings, and pill-shaped CTAs that float weightlessly against
  full-bleed imagery. The design language is immersive, editorial, and deliberately unhurried.

colors:
  primary: "#6D30A7"
  primary-active: "#5A2589"
  canvas: "#151515"
  surface: "#222222"
  surface-dark: "#281432"
  surface-deeper: "#1B0D2E"
  ink: "#FFFFFF"
  body: "#DBDBDB"
  muted: "#888888"
  hairline: "#3B3B3B"
  on-dark: "#FFFFFF"
  on-primary: "#FFFFFF"
  overlay: "#00000080"
  semantic-error: "#F94564"

typography:
  display-xl:
    fontFamily: "\"Riviera Nights\", Helvetica, Arial, -apple-system, sans-serif"
    fontSize: 70px
    fontWeight: 300
    lineHeight: 1.14
    letterSpacing: 15.4px
  display-md:
    fontFamily: "\"Riviera Nights\", Helvetica, Arial, -apple-system, sans-serif"
    fontSize: 38px
    fontWeight: 500
    lineHeight: 1.34
    letterSpacing: 14px
  display-sm:
    fontFamily: "\"Riviera Nights\", Helvetica, Arial, -apple-system, sans-serif"
    fontSize: 34px
    fontWeight: 300
    lineHeight: 1.29
    letterSpacing: 2.5px
  title-lg:
    fontFamily: "\"Riviera Nights\", Helvetica, Arial, -apple-system, sans-serif"
    fontSize: 23px
    fontWeight: 500
    lineHeight: 1.61
    letterSpacing: 10.35px
  title-md:
    fontFamily: "\"Riviera Nights\", Helvetica, Arial, -apple-system, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 2.5px
  title-sm:
    fontFamily: "\"Riviera Nights\", Helvetica, Arial, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.63
    letterSpacing: 2.5px
  body-lg:
    fontFamily: "\"Riviera Nights\", Helvetica, Arial, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: 0.5px
  body-md:
    fontFamily: "\"Riviera Nights\", Helvetica, Arial, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 300
    lineHeight: 2.0
    letterSpacing: 0.5px
  body-sm:
    fontFamily: "\"Riviera Nights\", Helvetica, Arial, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 2.0
    letterSpacing: 2px
  button:
    fontFamily: "\"Riviera Nights\", Helvetica, Arial, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.5px
  nav-link:
    fontFamily: "\"Riviera Nights\", Helvetica, Arial, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 2px
  caption:
    fontFamily: "\"Riviera Nights\", Helvetica, Arial, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 2.0
    letterSpacing: 2px

spacing:
  xxs: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  xxl: 80px
  section: 120px

rounded:
  none: 0px
  sm: 4px
  pill: 30px

components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
    border: "none"
    textTransform: "uppercase"

  button-primary-active:
    backgroundColor: "{colors.body}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"

  button-primary-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
    border: "none"
    textTransform: "uppercase"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
    border: "none"
    textTransform: "uppercase"

  button-secondary-active:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "12px 16px"

  card-base:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
    border: "none"
    boxShadow: "none"

  text-input:
    backgroundColor: "{colors.surface-deeper}"
    textColor: "{colors.ink}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.none}"
    padding: "16px 0px 0px 16px"
    border: "none"
    borderBottom: "2px solid {colors.muted}"

  text-input-focused:
    borderBottom: "2px solid {colors.ink}"

  top-nav:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    borderBottom: "none"

  footer:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    padding: "{spacing.xl} {spacing.md}"
---

# Rolls-Royce Motor Cars Design System

## Overview

Rolls-Royce Motor Cars presents the world's most prestigious automotive brand through an immersive,
cinematic digital experience. The visual language is monolithic and unhurried — full-viewport
video heroes, all-uppercase typography with extreme letter-spacing, and a near-total absence of
decorative embellishment. Darkness is the default canvas: obsidian black (`#151515`) grounds
every surface, with the brand's regal deep purple surfacing as a contextual accent for Black
Badge content.

The design differentiates itself from all competitors by refusing to compete on conventional
luxury signals such as gold or serif editorial fonts. Instead, Rolls-Royce asserts supremacy
through restraint: a single proprietary sans-serif face (Riviera Nights) at feather-light weight
300, pure white text, and pill-shaped CTAs that resolve to a whisper against full-bleed
photography. The experience makes the visitor wait — and feel that waiting is a privilege.

**Key visual characteristics:**
- Single typeface — Riviera Nights — used exclusively throughout at weights 300, 400, and 500
- All headings rendered uppercase with extreme positive tracking (2.5px–15.4px)
- Cinematic full-viewport video and photography as the primary design element
- Near-black `#151515` canvas with pure white `#FFFFFF` as the only text color
- Black Badge purple `#6D30A7` used sparingly as the premium accent for the darkest sub-brand
- Deep purple surface `#281432` reserved for forms and modal overlays on the darkest sections
- Pill-radius (30px) on all CTA buttons — the only rounded element in an otherwise flat system
- Zero border-radius on all containers, cards, and inputs — absolute geometric austerity

## Colors

### Brand and Accent
| Token | Hex | Use |
|-------|-----|-----|
| `primary` | `#6D30A7` | Black Badge CTA buttons, accent fills on dark sections |
| `primary-active` | `#5A2589` | Hover/active state for purple CTAs |
| `on-primary` | `#FFFFFF` | Text on purple CTA buttons |

### Surface
| Token | Hex | Use |
|-------|-----|-----|
| `canvas` | `#151515` | Primary page background, near-black body |
| `surface` | `#222222` | Article tiles background, footer background |
| `surface-dark` | `#281432` | Deep purple overlay sections, theme-color meta |
| `surface-deeper` | `#1B0D2E` | Form/input field backgrounds within dark modals |
| `hairline` | `#3B3B3B` | Footer divider rule, section separators |

### Text
| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#FFFFFF` | All headings and body on dark canvas |
| `on-dark` | `#FFFFFF` | Text on dark and purple surfaces |
| `body` | `#DBDBDB` | Slightly subdued body text on mid-dark surfaces |
| `muted` | `#888888` | Captions, placeholders, secondary labels |
| `overlay` | `#00000080` | Video overlay scrim for text legibility |

### Semantic
| Token | Hex | Use |
|-------|-----|-----|
| `semantic-error` | `#F94564` | Form validation errors |

## Typography

### Font Family
Rolls-Royce uses a single proprietary typeface, **Riviera Nights**, across the entire site.
There is no serif or display alternative — the brand's authority comes entirely from spacing and
weight contrast within one family. The fallback stack `Helvetica, Arial, -apple-system, sans-serif`
maintains legibility if the font fails to load.

Riviera Nights is not publicly available on Google Fonts or Adobe Fonts. For brand-consistent
implementation, use a licensed copy or substitute with a high-quality geometric sans-serif such
as Neue Haas Grotesk or Aktiv Grotesk at similar weights.

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|--------|-------------|----------------|-----|
| `display-xl` | 70px | 300 | 1.14 | 15.4px | Full-viewport model name headlines |
| `display-md` | 38px | 500 | 1.34 | 14px | Hero subheadlines, Coachbuild series names |
| `display-sm` | 34px | 300 | 1.29 | 2.5px | Modal headings, form section titles |
| `title-lg` | 23px | 500 | 1.61 | 10.35px | Collection labels, section eyebrows |
| `title-md` | 20px | 400 | 1.5 | 2.5px | Section sub-headings, "Explore Further" |
| `title-sm` | 16px | 400 | 1.63 | 2.5px | Card titles, panel headings |
| `body-lg` | 16px | 300 | 1.5 | 0.5px | Hero lead paragraphs, primary body copy |
| `body-md` | 14px | 300 | 2.0 | 0.5px | Article and editorial body text |
| `body-sm` | 12px | 400 | 2.0 | 2px | Footer links, utility labels |
| `button` | 16px | 400 | 1.5 | 0.5px | CTA button text |
| `nav-link` | 12px | 400 | 1.5 | 2px | Top navigation, footer navigation |
| `caption` | 12px | 400 | 2.0 | 2px | Metadata, timestamps |

### Principles
- All headings and CTAs are rendered in `uppercase` via `text-transform`
- Letter-spacing is the primary differentiator — display headings use extreme tracking (up to 15.4px) to convey grandeur
- Body copy uses a modest 0.5px tracking for quiet legibility without visual noise
- Only three weights are used: 300 (light), 400 (regular), 500 (medium) — never bold or black
- Navigation and utility text use 2px tracking to signal hierarchy without increasing size

## Layout

### Spacing System
Base unit: **8px**. All spacing values are multiples of 8px.

| Token | Value | Use |
|-------|-------|-----|
| `xxs` | 4px | Icon-to-text gaps, micro-adjustments |
| `xs` | 8px | Internal element gaps |
| `sm` | 16px | Button padding, form field padding |
| `md` | 24px | Card padding, panel padding |
| `lg` | 32px | Section element margins |
| `xl` | 48px | Footer padding, component vertical gaps |
| `xxl` | 80px | Section top/bottom padding |
| `section` | 120px | Full section vertical rhythm |

### Grid and Container
- Full-width viewport sections are the primary layout pattern
- Maximum content container: approximately 1440px centered
- 12-column AEM grid underlying all page layouts
- Card grids use 3-column layouts at desktop, collapsing to 1 at mobile
- Horizontal padding on containers: 24px at mobile, 48px at tablet, 80px at desktop

### Whitespace Philosophy
Rolls-Royce uses whitespace as a statement of exclusivity. Sections breathe with 80–120px
of vertical padding. The hierarchy is: fullscreen hero → contained editorial section →
fullscreen feature → repeat. The deliberate pace prevents scanning — visitors are expected
to experience, not browse.

## Elevation and Depth

| Level | Treatment | Example Use |
|-------|-----------|-------------|
| Level 0 | Flat dark canvas, no shadow | Page background, transparent navbars |
| Level 1 | Semi-transparent overlay `rgba(0,0,0,0.5)` | Video scrim for text legibility |
| Level 2 | Full overlay `rgba(0,0,0,0.8)` | Modal/lightbox backgrounds |
| Level 3 | Deep purple surface `#281432` | Form panels, information request modals |
| Level 4 | Full-bleed video/photography | Hero layers — the highest visual weight |

**Shadow Philosophy:** No `box-shadow` values appear anywhere on the site. Depth is created
entirely through dark surfaces stacked against darker surfaces and full-bleed photography. The
absence of shadows is deliberate — it reflects the brand's rejection of skeuomorphism and
its embrace of pure two-dimensional luxury.

## Shapes

### Border Radius Scale
| Token | Value | Use |
|-------|-------|-----|
| `none` | 0px | All containers, cards, inputs, sections |
| `sm` | 4px | Not actively used; available for micro-components |
| `pill` | 30px | All CTA buttons — the only rounded element |

The Rolls-Royce design uses an extreme binary approach to rounding: everything is either
perfectly sharp (0px) or a full pill (30px). There is no intermediate radius. This strict
duality between angular containers and pill buttons is a signature brand pattern.

### Photography and Imagery
- Full-viewport aspect ratios for hero sections (100vh or 100vw × 56.25vw)
- `object-fit: cover` preserves cinematic framing across breakpoints
- Photography is always full-bleed with no visible borders, frames, or drop shadows
- Dark scrim overlays (`rgba(0,0,0,0.46)` to `rgba(0,0,0,0.8)`) ensure text legibility
- Video autoplay (muted) is the dominant hero treatment — the site is a motion-first experience

## Components

### Buttons
**Primary (on dark hero):** White pill button on dark imagery
- Background: `#FFFFFF`, Text: `#151515`
- Radius: 30px, Padding: ~12px 32px
- Font: Riviera Nights 16px/400, uppercase, 0.5px tracking
- Used for: primary hero discovery CTAs ("DISCOVER MORE", "DISCOVER NOW")

**Primary (Black Badge variant):** Purple pill button
- Background: `#6D30A7`, Text: `#FFFFFF`
- Same geometry as primary
- Used exclusively in Black Badge and Coachbuild sections

**Secondary / Ghost:** Text-only with no border or background
- Background: transparent, Text: `#151515` or `#FFFFFF` (context-dependent)
- Radius: 0px (sharp), Padding: 12px 16px
- No border — relies on text contrast alone for affordance
- Used for: "CONFIGURE YOURS", "MAKE AN ENQUIRY", "VIEW IN DETAIL"

**Footer / Utility links:** Transparent, uppercase text
- Font: 12px/400, 2px letter-spacing, uppercase
- No decoration — just spaced uppercase text as interactive elements

### Cards
Article tiles use a flat card approach:
- Background: transparent (relies on parent section color)
- No border, no shadow, no radius — pure image + text
- Image top, heading + body text below with 24px–40px bottom padding
- Grid collapses from 3 columns → 1 column on mobile

### Forms and Inputs
Input fields within the dark form panels:
- Background: `#1B0D2E` (deepest purple surface)
- Text: `#FFFFFF`
- No full border — only a 2px bottom border in `#676776` (muted)
- On focus: bottom border becomes `#FFFFFF`
- Padding: 16px at top and left
- Font-size: 16px (prevents iOS zoom)

### Navigation
- Global header: transparent overlay on hero video/image
- Logo and menu links in white on all hero sections
- "MENU" button opens full-screen navigation overlay
- Footer navigation: uppercase 12px text, 2px letter-spacing, on `#222222` background
- Divider rule: `#3B3B3B` 1px hairline

## Do's and Don'ts

### Do
- Use Riviera Nights exclusively — do not mix with any other typeface
- Render all headings and CTAs in `uppercase` with positive letter-spacing
- Use full-viewport imagery or video as the page's primary visual element
- Apply 0px border-radius to all containers, cards, panels, and inputs
- Reserve the pill radius (30px) exclusively for CTA buttons
- Use the deep purple palette (`#281432`, `#1B0D2E`) only for form panels and Black Badge sections
- Maintain generous section padding (80–120px vertical) to preserve the unhurried pacing
- Use overlays (`rgba(0,0,0,0.5)` to `rgba(0,0,0,0.8)`) on imagery to ensure text legibility

### Don't
- Don't use bold (700+) or thin (100–200) font weights — only 300, 400, and 500
- Don't use border-radius values between 1px and 29px — the system is binary: 0 or pill
- Don't add `box-shadow` to any element — depth is created through surface layering only
- Don't use gold, beige, or traditional luxury colour cues — the brand is not classical, it is cinematic
- Don't use decorative dividers, ornaments, or flourishes — restraint is the signal of quality
- Don't place text directly on photography without a scrim overlay
- Don't use body text heavier than weight 400 — lightness conveys confidence
- Don't reduce letter-spacing on headings — extreme tracking is non-negotiable for display sizes

## Responsive Behavior

### Breakpoints
| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 768px | Single-column layout; hero text scales down; pill CTAs remain full-width |
| Tablet | 768–1024px | 2-column grids; nav transitions to hamburger menu |
| Desktop | 1024px+ | Full 3-column article grid; full hero viewport |
| Wide | 1440px+ | Content maxes at container width; hero video always full-bleed |

### Touch Targets
- CTA buttons: minimum 44px height (pill shape naturally achieves this)
- Navigation links: minimum 44px touch target via padding
- Footer links: 32px height with 8px gap minimum

### Collapsing Strategy
- Top navigation collapses to full-screen overlay menu ("MENU" hamburger) on all viewports
- Article tile carousels switch from grid to horizontal swipeable carousel on mobile
- Hero typography scales proportionally: 70px desktop → approximately 32–40px mobile
- Display heading letter-spacing compresses on mobile to prevent text overflow

### Image Behavior
- All images use `object-fit: cover` with explicit aspect ratio containers
- Heroes maintain 100vh height regardless of viewport width
- Thumbnails use fixed aspect ratios (16:9 or 3:2 for article tiles)
- Video autoplay is preserved on desktop; mobile falls back to poster image

## Agent Prompt Guide

### Quick Color Reference
- Canvas (background): `#151515`
- Ink (primary text): `#FFFFFF`
- Primary CTA (hero): `#FFFFFF` (white pill on dark)
- Primary CTA (Black Badge): `#6D30A7`
- Surface: `#222222`
- Surface dark (Purple): `#281432`
- Hairline: `#3B3B3B`
- Muted text: `#888888`

### Example Component Prompts

**Hero Section:**
"Create a full-viewport hero on `#151515` background with a full-bleed video/image and
`rgba(0,0,0,0.5)` scrim overlay. Headline in Riviera Nights 70px, weight 300, uppercase,
15.4px letter-spacing, color `#FFFFFF`. Subheadline 20px, weight 400, 2.5px tracking.
CTA pill button: `#FFFFFF` background, `#151515` text, 30px radius, 12px 32px padding,
Riviera Nights 16px/400, uppercase."

**Black Badge Card:**
"Create a feature card on `#281432` deep purple background, no border radius. Heading
Riviera Nights 34px/300, uppercase, 2.5px tracking, `#FFFFFF`. Body 14px/300, `#DBDBDB`,
0.5px tracking. CTA pill button `#6D30A7` background, `#FFFFFF` text, 30px radius,
12px 32px padding."

**Button Set:**
"Primary button: `#FFFFFF` background, `#151515` text, 30px radius, 12px 32px padding,
Riviera Nights 16px/400, uppercase, 0.5px tracking, no border.
Secondary button: transparent background, no border, `#FFFFFF` text (on dark) or `#151515`
(on light), 0px radius, 12px 16px padding, same font."

**Article Tile:**
"Create a content tile with full-width top image at 16:9 ratio. Below: heading Riviera Nights
16px/400, uppercase, 2.5px tracking, `#FFFFFF`. Body 14px/300, 2.0 line height, `#DBDBDB`.
No border, no shadow, no radius. 40px bottom padding."

**Form Panel:**
"Dark form on `#281432` background. Heading Riviera Nights 34px/300, uppercase, 2.5px
tracking, `#FFFFFF`. Input fields: `#1B0D2E` background, `#FFFFFF` text, no full border,
only 2px bottom border `#676776`, 16px padding. On focus: border becomes `#FFFFFF`."

### Iteration Guide
1. Start with `#151515` as the page background — never use pure black `#000000`
2. Load Riviera Nights via licensed font or substitute Neue Haas Grotesk / Aktiv Grotesk
3. Apply `text-transform: uppercase` and positive `letter-spacing` to ALL headings and CTAs
4. Use 0px border-radius on every container — reserve 30px exclusively for pill CTAs
5. Add dark scrim overlays to all images before placing text on top
6. Keep body text weight at 300 — weight hierarchy is managed through size and tracking alone
7. Use the purple palette (`#6D30A7`, `#281432`) only for Black Badge and Bespoke/Coachbuild sections
8. Check contrast: `#FFFFFF` ink on `#151515` canvas passes WCAG AA easily
