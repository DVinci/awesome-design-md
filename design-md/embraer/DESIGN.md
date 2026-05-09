---
version: alpha
name: Embraer
description: |
  Embraer is one of the world's leading aerospace companies, producing commercial, executive,
  and defense aircraft. Its digital identity projects aerospace precision and global ambition —
  a deep navy and electric blue palette commands authority, while the GT America type family
  (light, regular, extended, compressed, and mono variants) delivers editorial clarity across
  every scale from massive hero headlines to compact utility labels. The brand uses zero border
  radius throughout, asserting an industrial, no-nonsense geometry that mirrors the engineered
  surfaces of its aircraft. Dark navy surface panels alternate with crisp white and a cool
  light-grey mid-surface to create rhythmic depth across long-scroll pages.

colors:
  primary: "#100590"
  primary-active: "#005BAF"
  ink: "#1E3137"
  body: "#262626"
  muted: "#5C6C74"
  canvas: "#FFFFFF"
  surface: "#EFF4F7"
  surface-mid: "#DEE9EF"
  surface-dark: "#1E3137"
  hairline: "#A3B5BF"
  on-dark: "#FFFFFF"
  deep-navy: "#0A1A5C"
  accent-light-blue: "#005BAF"
  semantic-error: "#B42328"
  semantic-success: "#2E7D32"

typography:
  display-xl:
    fontFamily: '"GT America Compressed", "GT America", Arial, sans-serif'
    fontSize: 70px
    fontWeight: 500
    lineHeight: 0.86
    letterSpacing: 0
  display-md:
    fontFamily: '"GT America Compressed", "GT America", Arial, sans-serif'
    fontSize: 35px
    fontWeight: 500
    lineHeight: 0.86
    letterSpacing: -0.35px
  title-lg:
    fontFamily: '"GT America Compressed", "GT America", Arial, sans-serif'
    fontSize: 50px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -1px
  title-md:
    fontFamily: '"GT America Mono Regular", "Courier New", monospace'
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 1.6px
  body-lg:
    fontFamily: '"GT America Extended Regular", "GT America", Arial, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.56
    letterSpacing: 0
  body-md:
    fontFamily: '"GTAmerica_reg", "GT America", Arial, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.56
    letterSpacing: 0
  body-sm:
    fontFamily: '"GTAmerica_light", "GT America", Arial, sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  button:
    fontFamily: '"GT America Extended Regular", "GT America", Arial, sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.29
    letterSpacing: 0
  nav-link:
    fontFamily: '"GT America Extended Medium", "GT America", Arial, sans-serif'
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.27
    letterSpacing: 0.32px
  caption:
    fontFamily: '"GT America Mono Regular", "Courier New", monospace'
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.27
    letterSpacing: 0

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 20px
  lg: 32px
  xl: 48px
  xxl: 80px
  section: 112px

rounded:
  none: 0px
  xs: 2px
  sm: 2px
  md: 2px
  lg: 6px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "10px 20px"
    border: "none"
    textTransform: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "10px 20px"

  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "10px 20px"
    border: "1px solid {colors.ink}"

  button-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "10px 44px"
    border: "none"

  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0px 26px 0px 0px"
    border: "none"

  card-base:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl} 0"
    border: "none"

  card-dark:
    backgroundColor: "{colors.surface-dark}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxl} {spacing.xl}"
    border: "none"

  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
    border: "1px solid {colors.hairline}"

  text-input-focused:
    border: "1px solid {colors.primary}"

  top-nav:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    textTransform: "uppercase"

  tab-filter:
    backgroundColor: "{colors.surface-mid}"
    textColor: "{colors.deep-navy}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "15px 20px"
    textTransform: "uppercase"

  tab-filter-active:
    backgroundColor: "{colors.surface-mid}"
    textColor: "{colors.deep-navy}"
    fontWeight: "700"

  footer-base:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    padding: "{spacing.section} 0 0"
---

# Embraer Design System

## Overview

Embraer's digital identity mirrors the brand's core values of precision engineering, aerospace ambition, and Brazilian industrial pride. The visual language is austere and authoritative: a deep electric blue (`#100590`) that commands attention as the primary CTA color, anchored by a sophisticated dark-navy (`#1E3137`) for surfaces and footers. White and a cool light-grey (`#EFF4F7`) provide clean breathing space between content zones, while the dark canvas sections create dramatic tonal shifts that frame imagery and data.

The typography system is built entirely on the GT America type family — a contemporary grotesque with multiple optical variants. Display headlines use GT America Compressed at massive scale (70px) with uppercase rendering, creating an industrial, aviation-spec character. Body copy deploys GT America Light and Regular, while labels and filter tabs use GT America Mono for technical precision. Navigation links use GT America Extended Medium in tiny uppercase — a signature pattern that signals global brand authority. No border radius exists in the design system beyond an occasional 2px micro-chamfer, asserting the brand's sharp-edged, machined aesthetic.

**Key visual characteristics:**
- Deep electric blue (`#100590`) primary, never competing with full-bleed photography
- GT America font family across 5 optical variants: Light, Regular, Extended, Compressed, Mono
- Zero border radius everywhere — flat, machined geometry throughout
- Massive compressed headlines at 70px with 0.86 line-height for maximum impact
- Dark navy (`#1E3137`) footer and CTA-band surfaces creating atmospheric depth
- Uppercase nav links at 11px with 0.32px tracking — precision instrument panel aesthetic
- Cool grey surface (`#EFF4F7`) card zones breaking white monotony
- Strongly horizontal layout rhythm — fullbleed banners alternating with contained content

**Positioning:** Embraer's design communicates global aerospace leadership through controlled restraint. Unlike consumer-friendly rounded-corner design, every choice here projects engineering culture and institutional credibility — closer to BMW or Rolls-Royce than to a SaaS startup.

---

## Colors

### Brand & Accent

| Token | Hex | Use |
|-------|-----|-----|
| `primary` | `#100590` | Primary CTA buttons, active overlays, key brand moments |
| `primary-active` | `#005BAF` | Button hover states, interactive highlights, links |
| `deep-navy` | `#0A1A5C` | Tab filter text on light surfaces, secondary brand accent |
| `accent-light-blue` | `#005BAF` | Link hover, secondary interactive elements |

### Surface

| Token | Hex | Use |
|-------|-----|-----|
| `canvas` | `#FFFFFF` | Default page background, secondary button fill |
| `surface` | `#EFF4F7` | Card zone backgrounds, content dividers |
| `surface-mid` | `#DEE9EF` | Tab/filter bar backgrounds (at 50% opacity on page) |
| `surface-dark` | `#1E3137` | Footer, dark CTA bands, banner overlays |

### Text

| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#1E3137` | Primary headings on light surfaces, secondary button text/border |
| `body` | `#262626` | Paragraph text, readable content |
| `muted` | `#5C6C74` | Secondary text, labels, captions |
| `hairline` | `#A3B5BF` | Border lines, input strokes, separators |
| `on-dark` | `#FFFFFF` | Text on dark surfaces (footer, primary button, dark cards) |

### Semantic

| Token | Hex | Use |
|-------|-----|-----|
| `semantic-error` | `#B42328` | Error states, destructive actions |
| `semantic-success` | `#2E7D32` | Confirmation, positive states |

---

## Typography

### Font Family

**GT America** — a contemporary grotesque type family by Grilli Type. The site employs five distinct optical variants:

- `GTAmerica_light` / GT America Light — body text, navigation utility links
- `GTAmerica_reg` / GT America Regular — paragraph copy
- `"GT America Extended Regular"` — CTA buttons, footer links
- `"GT America Extended Medium"` — top navigation links, labels
- `"GT America Compressed"` — hero display headlines, section titles
- `"GT America Mono Regular"` — section overlines, tab filters, technical labels
- `GTAmerica_Condensed_Reg` — sub-display contexts

GT America is a commercial font by Grilli Type. Use the exact `font-family` values above as the site loads it via custom `@font-face` declarations.

### Hierarchy Table

| Role | Font | Size | Weight | Line Height | Letter Spacing | Transform | Use |
|------|------|------|--------|-------------|----------------|-----------|-----|
| `display-xl` | GT America Compressed | 70px | 500 | 0.86 | 0 | uppercase | Hero headlines |
| `display-md` | GT America Compressed | 35px | 500 | 0.86 | -0.35px | uppercase | Section headers |
| `title-lg` | GT America Compressed | 50px | 400 | 1.2 | -1px | uppercase | Error pages, large titles |
| `title-md` | GT America Mono Regular | 16px | 500 | 1.25 | 1.6px | uppercase | Section overlines |
| `body-lg` | GT America Extended Regular | 16px | 400 | 1.56 | 0 | none | Expanded body, feature text |
| `body-md` | GT America Regular | 16px | 400 | 1.56 | 0 | none | General paragraphs |
| `body-sm` | GT America Light | 14px | 400 | 1.43 | 0 | none | Secondary copy, nav utility |
| `button` | GT America Extended Regular | 14px | 400 | 1.29 | 0 | none | All CTAs and button text |
| `nav-link` | GT America Extended Medium | 11px | 400 | 1.27 | 0.32px | uppercase | Primary navigation links |
| `caption` | GT America Mono Regular | 11px | 400 | 1.27 | 0 | uppercase | Footer category labels, tags |

### Principles

- **Weight strategy**: Light for utility (body, nav utility bar), Regular for content, Extended for CTAs, Compressed for display — each variant occupies a distinct role
- **Uppercase as signal**: Every label, nav link, and section overline is uppercase — it is a brand-wide rule, not accent use
- **Tight display tracking**: Compressed headlines at 0.86 line-height create extreme density that reads as confidence and precision
- **Mono for technical precision**: GT America Mono for filter tabs, overlines, and category labels signals data-driven, engineering-culture content

---

## Layout

### Spacing System

Base unit: 4px. Named scale is multiples of 4 for small values, 8 for mid-range.

| Token | Value | Use |
|-------|-------|-----|
| `xxs` | 4px | Micro gaps, icon padding |
| `xs` | 8px | Tag padding, form element gaps |
| `sm` | 12px | Compact list items |
| `md` | 20px | Button horizontal padding, standard gaps |
| `lg` | 32px | Card internal padding |
| `xl` | 48px | Section content padding |
| `xxl` | 80px | Section vertical padding |
| `section` | 112px | Full section top padding, footer |

### Grid & Container

- Max container: 1280px centered with auto horizontal margins
- Standard grid: 12 columns, 24px gutters
- Full-bleed hero banners: 100vw, no container constraint
- Card grids: 3–4 columns on desktop, collapsing to 1 on mobile
- Content sections: constrained to ~1080px for readability

### Whitespace Philosophy

Embraer uses generous vertical breathing room between content bands. Section padding of 77–112px top creates clear visual chapters in long-scroll pages. Cards within sections use internal 55px bottom padding. The overall effect is unhurried and authoritative — pages are meant to be slowly explored, not quickly scanned.

---

## Elevation & Depth

### Levels Table

| Level | Treatment | Example use |
|-------|-----------|-------------|
| 0 — Flat | No shadow, no border | Default canvas, nav links |
| 1 — Surface | `background: #EFF4F7` | Cards section, content separation |
| 2 — Dark band | `background: #1E3137` | Footer, CTA banners, overlay modules |
| 3 — Primary overlay | `background: #100590` | Active image overlay, primary highlights |
| 4 — Deep navy | `background: #0A1A5C` | Deepest hero backdrop, dramatic moments |

### Shadow Philosophy

Embraer uses **no box shadows** in its design system. Depth is achieved entirely through background color contrast — alternating between white, light grey (`#EFF4F7`), dark navy (`#1E3137`), and black. This matches the brand's industrial, flat-surface aesthetic. The transition between panels creates visual depth without any soft edges.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `none` | 0px | Default for all elements — cards, sections, images |
| `xs` | 2px | Buttons only — the sole use of any radius in the system |
| `sm` | 2px | Same as xs |
| `md` | 2px | Consistent micro-chamfer on interactive elements |
| `lg` | 6px | Bootstrap components (mobile nav toggle only) |
| `pill` | 9999px | Not used in practice — reserved |

The 2px button radius is the **only** border radius in active use. Every card, image, input, and container is perfectly square-cornered. This is a deliberate brand statement — no softening, no friendliness, pure precision.

### Photography & Imagery

- Full-bleed hero photography: 100vw × 70–80vh, object-fit cover
- Aviation imagery always the primary visual hero — aircraft against sky, runway, cockpit
- Dark overlay gradients applied to images to ensure text legibility
- Section images: 16:9 aspect ratio within constrained containers
- No rounded image crops — all images have square corners matching the design system

---

## Components

### Buttons

**Primary Button** (`view` class)
- Background: `#100590` (Embraer Blue)
- Text: `#FFFFFF`, 14px GT America Extended Regular
- Radius: 2px
- Padding: 0px 20px (height controlled by line-height)
- Border: none

**Secondary Button** (`design` class)
- Background: `#FFFFFF`
- Text: `#1E3137`, 14px GT America Extended Regular
- Radius: 2px
- Border: `1px solid #1E3137`

**Dark CTA Button** (`find-more` class)
- Background: `#1E3137`
- Text: `#FFFFFF`, 14px GT America Extended Regular
- Radius: 2px
- Padding: 0px 44px (wider padding for section-level CTAs)

**Ghost/Text Link Button** (`find-more` transparent)
- Background: transparent
- Text: `#1E3137`, 14px GT America Extended Regular
- No border, no radius
- Right padding: 26px (accounts for arrow icon)

### Cards

**Light Card Zone**
- Background: `#EFF4F7`
- No border, no shadow, no radius
- Internal padding: 77px top, 55px bottom
- Used for product grid sections

**Dark Card/Banner**
- Background: `#1E3137`
- No border, no shadow, no radius
- Contains headline + "Saiba mais" link
- Used for section-dividing CTA banners

### Navigation

**Primary Nav** (`.header-link`)
- Background: transparent (overlaid on full-bleed hero)
- Text: `rgb(253, 254, 254)` ≈ `#FDFEFE`, 11px GT America Extended Medium
- Uppercase, 0.32px letter spacing
- Padding: 5px 0px 4px — hairline underline treatment on hover

**Utility Nav** (`.nav-link` top bar)
- Text: `#FDFEFE`, 11px GT America Extended Regular
- No transform, no tracking

### Tab / Filter

**Tab Filter** (`.link` class)
- Background: `rgba(222, 233, 239, 0.5)` = `#DEE9EF` at 50% opacity
- Text: `#0A1A5C` (Deep Blue), 11px GT America Mono Regular, uppercase
- Padding: ~15px 20px
- No radius

**Tab Filter Active**
- Same background, same text color
- Font weight: 700 (bold within Mono)

### Footer

- Background: `#1E3137`
- Top padding: 112px
- Category labels: 11px GT America Mono Regular, uppercase, white
- Link items: 16px GT America Extended Regular, white

---

## Do's and Don'ts

**Do:**
- Use GT America Compressed uppercase for all display headlines — the compressed weight is the brand's most distinctive typographic asset
- Apply `#100590` (Embraer Blue) exclusively for primary CTAs and key brand moments — resist diluting it
- Use full-bleed photography for section heroes with a dark surface panel or gradient overlay for text legibility
- Alternate between white canvas sections and dark navy (`#1E3137`) bands to create rhythmic visual depth
- Keep all buttons and containers at 0–2px border radius — never exceed 2px except for system defaults
- Use GT America Mono for overlines, filter labels, and any technical or categorization text
- Capitalize all nav links, labels, section overlines — uppercase is a system-wide rule, not accent use
- Use generous section padding (77px+) to let aviation imagery breathe

**Don't:**
- Don't mix warm colors or orange/red into the palette — Embraer's palette is strictly cool (blue, grey, navy)
- Don't add drop shadows or `box-shadow` to any element — the design system is intentionally flat
- Don't use rounded cards, rounded images, or any border-radius above 2px on designed components
- Don't use lightweight body fonts (Light/Thin) for CTAs or navigation — reserve Light for body copy only
- Don't use more than two font variants on a single screen region
- Don't apply the primary blue (`#100590`) to large background areas — it is a CTA/accent color only
- Don't use sentence case for navigation items or section labels — uppercase is mandatory
- Don't use playful or decorative imagery — photography must show aerospace products, engineering, or professional environments

---

## Responsive Behavior

### Breakpoints Table

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 576px | Single column, stacked banners, hamburger nav |
| Tablet | 576px–991px | 2-column cards, condensed nav |
| Desktop | 992px–1279px | 3–4 column grids, full nav |
| Wide | 1280px+ | Capped container at 1280px, full-bleed hero continues |

### Touch Targets

- Buttons: minimum 44px height (controlled by padding + 14px font + line-height)
- Nav links: 44px vertical hit area via padding
- Tab filters: ~31px visible height — adequate for desktop, needs care on mobile

### Collapsing Strategy

- Navigation collapses to hamburger at tablet/mobile; the `.navbar-toggler` button becomes visible
- Section CTA banners (3-column product grid) collapse to single stacked vertical layout
- Tab filter system becomes a horizontal scroll container on mobile
- Full-bleed hero images maintain 100vw but reduce height to ~50vh on mobile

### Image Behavior

- Hero images: `object-fit: cover`, full-width, auto height on mobile
- Card images: maintain 16:9 ratio, scale to 100% container width
- No lazy-loading borders or placeholders — images snap in on load

---

## Agent Prompt Guide

### Quick Color Reference

- Primary (Embraer Blue): `#100590`
- Primary hover/active: `#005BAF`
- Canvas (background): `#FFFFFF`
- Ink (dark text): `#1E3137`
- Body text: `#262626`
- Muted text: `#5C6C74`
- Surface (card bg): `#EFF4F7`
- Surface dark (footer/bands): `#1E3137`
- Deep navy (tabs): `#0A1A5C`
- Hairline (borders): `#A3B5BF`
- On dark (inverted text): `#FFFFFF`
- Error: `#B42328`

### Example Component Prompts

**Hero Section:**
"Create a full-bleed hero on a dark navy (`#0A1A5C`) or black background with an aviation photograph as the backdrop. Headline in 70px GT America Compressed, uppercase, white, 0.86 line-height. Subheadline in 16px GT America Mono Regular, uppercase, white, 1.6px letter spacing. Primary CTA: `#100590` background, white text, 2px radius, 10px 20px padding, 14px GT America Extended Regular."

**Card:**
"Create a card zone on `#EFF4F7` background. No border, no shadow, no radius. Top padding 77px, bottom padding 55px. Inside: 16px GT America Mono Regular uppercase overline in `#1E3137` with 1.6px tracking. Main headline 35px GT America Compressed uppercase in `#1E3137`. Body copy 16px GT America Regular, `#262626`. CTA link: `#100590` text, 14px GT America Extended Regular, no underline."

**Button Set:**
"Primary button: `#100590` background, 2px border-radius, 10px 20px padding, 14px GT America Extended Regular, white text, no border. Secondary button: `#FFFFFF` background, `1px solid #1E3137` border, same radius and padding, `#1E3137` text. Dark CTA button: `#1E3137` background, 2px radius, 10px 44px padding, white text."

**Navigation Bar:**
"Horizontal nav bar with transparent background over full-bleed hero image. Logo on left. Navigation links: 11px GT America Extended Medium, uppercase, `#FDFEFE`, 0.32px letter spacing, 5px 0px 4px padding. Utility links on right: 11px GT America Extended Regular, `#FDFEFE`, no transform."

**Footer:**
"Dark footer with `#1E3137` background, 112px top padding. Category labels: 11px GT America Mono Regular, uppercase, white. Link items below each category: 16px GT America Extended Regular, white, no underline."

### Iteration Guide

1. Start with `#FFFFFF` canvas for light sections, alternating with `#EFF4F7` card zones and `#1E3137` dark bands
2. Load GT America from Grilli Type CDN or use `Arial, sans-serif` as a fallback (geometry is similar)
3. Apply uppercase to ALL navigation, labels, overlines, and filter elements — this is a mandatory system rule
4. Use 0px border radius on cards, images, and containers; 2px only on buttons
5. Keep primary blue (`#100590`) exclusively for CTAs — avoid using it as a background on large areas
6. Check contrast: white on `#100590` (primary buttons) passes WCAG AA; white on `#1E3137` (dark surface) passes WCAG AAA
7. Use GT America Compressed for any headline above 24px — the regular weight looks generic at display scale
