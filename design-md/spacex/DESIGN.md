---
version: alpha
name: SpaceX
description: |
  SpaceX is a pure black, full-bleed cinematic design system built around immersive video
  backgrounds and a single proprietary sans-serif — D-DIN. Every surface is pitch black,
  every element of text is an off-white luminous frost, and all interactive elements use
  frosted-glass ghost treatments. The brand radiates engineering precision — uppercase
  tracking, razor-thin borders, zero decorative ornamentation — and sweeping full-viewport
  imagery that lets the hardware speak for itself.

colors:
  canvas: "#000000"
  surface: "#F0F0FA1A"
  surface-nav: "#252628CC"
  primary: "#F0F0FA"
  primary-active: "#FFFFFF"
  ink: "#F0F0FA"
  body: "#F0F0FA"
  muted: "#F0F0FA99"
  hairline: "#F0F0FA59"
  on-dark: "#F0F0FA"
  ghost-button-bg: "#00000080"
  ghost-button-border: "#F0F0FA59"
  swiper-control: "#F0F0FA1A"

typography:
  display-xl:
    fontFamily: "D-DIN-Bold, Arial, Verdana, sans-serif"
    fontSize: 100px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: -1px
  display-md:
    fontFamily: "D-DIN-Bold, Arial, Verdana, sans-serif"
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 1.2px
  title-lg:
    fontFamily: "D-DIN-Bold, Arial, Verdana, sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0.96px
  title-md:
    fontFamily: "D-DIN-Bold, Arial, Verdana, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.4px
  body-md:
    fontFamily: "D-DIN, Arial, Verdana, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.32px
  body-sm:
    fontFamily: "D-DIN, Arial, Verdana, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.28px
  nav-link:
    fontFamily: "D-DIN, Arial, Verdana, sans-serif"
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 1.17px
  button:
    fontFamily: "D-DIN, Arial, Verdana, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  caption:
    fontFamily: "D-DIN, Arial, Verdana, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 2.0
    letterSpacing: 0.28px

spacing:
  xs: 6px
  sm: 10px
  md: 18px
  lg: 20px
  xl: 32px
  xxl: 48px
  section: 80px

rounded:
  none: 0px
  sm: 4px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.ghost-button-bg}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0px 20px"
    border: "1px solid {colors.ghost-button-border}"

  button-primary-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary-active}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0px 20px"
    border: "1px solid {colors.hairline}"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0px 20px"
    border: "1px solid {colors.hairline}"

  card-base:
    backgroundColor: "transparent"
    rounded: "{rounded.none}"
    padding: "20px 10px 20px 6px"
    border: "none"

  swiper-control:
    backgroundColor: "{colors.swiper-control}"
    rounded: "{rounded.pill}"
    padding: "18px"
    border: "none"

  top-nav:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    border: "none"

  top-nav-scrolled:
    backgroundColor: "{colors.surface-nav}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    border: "none"
---

# SpaceX Design System

## Overview

SpaceX's visual identity is defined by the void: an absolute black canvas that recedes to
infinity behind full-bleed cinematic video and photography. Text and interactive elements
float over darkness in luminous off-white — a warm frost white (`#F0F0FA`) rather than
pure white — giving a slightly human warmth to what would otherwise feel purely mechanical.
The only typeface is the proprietary D-DIN family, rendered exclusively in uppercase with
deliberate positive tracking on nav and captions, and negative tracking on hero headings,
which reinforces a sense of immense scale.

Interactivity is handled entirely through ghost/frosted-glass patterns: buttons are
semitransparent dark fills with thin frost-white borders, never opaque. Navigation links
carry no backgrounds and no underlines — only spacing and uppercase weight signal
clickability. The absence of color accent, rounded corners, gradients, or decorative
illustration is intentional: SpaceX lets its vehicles and missions be the sole source of
visual drama.

Key visual characteristics:

- Pure black canvas (`#000000`) with zero surface elevation — a true void
- Single frost-white text color (`#F0F0FA`) across all roles; hierarchy via size and weight only
- Proprietary D-DIN / D-DIN-Bold typeface; all text uppercase; negative tracking on large display
- Ghost button treatment — semitransparent black fill + frost-white hairline border, 4px radius
- Zero decorative elements — no gradients, no illustrations, no color accents
- Full-bleed video and photography as the primary design medium
- Minimal border-radius vocabulary — 0px flat, 4px button, pill for swiper controls only
- Navigation is transparent overlaid on video; becomes a dark glass panel on scroll

Positioning: Where competitors like Boeing or Northrop Grumman use bold patriotic palettes
and institutional iconography, SpaceX strips away all signalling and lets the engineering
achievements speak. The design communicates confidence that borders on minimalist arrogance.

## Colors

### Brand and Accent

SpaceX carries no traditional brand accent color. The chromatic vocabulary is strict
monochrome: deep black and luminous frost white.

- **Ink / On-dark white** `#F0F0FA` — all text, icon strokes, and UI labels; the only
  foreground color used site-wide; a warm off-white with a blue-violet tint that mimics starlight
- **Pure white hover** `#FFFFFF` — active/hover state, providing a subtle brightness lift

### Surface

SpaceX uses opacity-based surface layers rather than distinct surface colors, creating a
glass-layer aesthetic:

- **Canvas** `#000000` — the absolute base; all pages and video overlays sit on this
- **Surface** `#F0F0FA1A` — 10% frost-white overlay; used for swiper controls and subtle interactive fills
- **Nav overlay** `#252628CC` — 80% opaque near-black charcoal; the nav panel when scrolled

### Text

- **Ink** `#F0F0FA` — headings, CTA labels, nav items at full opacity
- **Body** `#F0F0FA` — paragraph copy; same as ink (dark canvas makes opacity reduction unnecessary)
- **Muted** `#F0F0FA99` — 60% frost white; used for secondary nav labels and subdued annotations

### Semantic

SpaceX does not define semantic error/success/warning states in the public UI. For projects
extending this system, recommended values:

- **Success** `#34C759` — standard system green
- **Warning** `#FF9F0A` — standard amber
- **Error** `#FF3B30` — standard system red

## Typography

### Font Family

SpaceX uses the proprietary **D-DIN** family (Deutsche Industrie Norm, condensed variant),
a geometric condensed sans-serif. D-DIN is not publicly available via Google Fonts or CDN;
it is licensed and embedded as a web font by SpaceX. For open-source substitution, use
**Barlow Condensed** or **Oswald** — both share the condensed geometric structure.

- **D-DIN** — regular weight (400); used for body copy, nav links (weight override to 700), buttons
- **D-DIN-Bold** — bold variant; used for all h1/h2/h3 headings; renders at weight 700

Fallback stack: `D-DIN, Arial, Verdana, sans-serif`

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Use |
| --- | --- | --- | --- | --- | --- |
| `display-xl` | 100px | 700 | 0.95 | -1px | Hero page titles (STARSHIP, UPDATES) |
| `display-md` | 60px | 700 | 1.2 | +1.2px | Section headlines (TEST LIKE YOU FLY) |
| `title-lg` | 48px | 700 | 1.0 | +0.96px | Page titles (MAKING HUMANITY MULTIPLANETARY) |
| `title-md` | 20px | 700 | 1.2 | +0.4px | Article and card titles (ORBITAL DATA CENTERS) |
| `body-md` | 16px | 400 | 1.5 | +0.32px | Default paragraph copy |
| `body-sm` | 14px | 400 | 1.5 | +0.28px | Secondary paragraphs, captions |
| `nav-link` | 13px | 700 | 1.5 | +1.17px | Navigation menu items |
| `button` | 16px | 400 | 1.5 | 0 | CTA button labels |
| `caption` | 14px | 400 | 2.0 | +0.28px | Location labels, footer metadata |

### Principles

- All text is **uppercase** — every element from h1 to nav links uses `text-transform: uppercase`
- **Negative tracking on display sizes** — -1px on `display-xl` creates monumental scale compression
- **Positive tracking on small sizes** — +1.17px on nav-link improves legibility at small condensed sizes
- D-DIN substitute: Barlow Condensed 400/700 from Google Fonts is the closest open-source match

## Layout

### Spacing System

Base unit: 2px (SpaceX uses tighter increments than standard 4px or 8px grids to match
the condensed typographic rhythm). Named scale:

| Token | Value | Typical Use |
| --- | --- | --- |
| `xs` | 6px | Icon gaps, tight internal padding |
| `sm` | 10px | Card inner padding top/bottom |
| `md` | 18px | Standard comfortable padding |
| `lg` | 20px | Card container outer padding |
| `xl` | 32px | Section sub-spacing |
| `xxl` | 48px | Between major content blocks |
| `section` | 80px | Between full-width page sections |

### Grid and Container

- Full-viewport width by default — SpaceX uses 100vw sections, not a constrained max-width container
- Content within sections uses internal padding (typically 20px on mobile, 40–80px on desktop)
- Video and imagery fill the entire viewport; text is overlaid centered or left-aligned
- Card grids use CSS Grid with auto-fill columns — typically 3–4 per row on desktop, 1 on mobile

### Whitespace Philosophy

SpaceX employs generous vertical whitespace between sections — each thematic block is a
full-viewport-height panel. This creates a silent, contemplative pace that matches the
subject matter. Horizontal rhythm is tight within cards and nav, reflecting the condensed
typographic character.

## Elevation and Depth

### Levels

| Level | Treatment | Example Use |
| --- | --- | --- |
| 0 — Void | `#000000` solid black | Page canvas, video background overlay |
| 1 — Glass | `rgba(0,0,0,0.5)` + frost border | Primary ghost CTA buttons |
| 2 — Frost surface | `rgba(240,240,250,0.1)` | Swiper carousel controls |
| 3 — Nav overlay | `rgba(37,38,40,0.8)` | Navigation panel on scroll |

### Shadow Philosophy

SpaceX uses no box shadows. Depth is created entirely through opacity-based layering and
video brightness. This reinforces the void aesthetic — shadows would introduce a spatial
reference that contradicts the infinite-depth photography.

### Decorative Depth Effects

Video vignetting via CSS gradient overlay creates center-bright, edge-dark framing for
hero sections — not part of the component system but present in the live site CSS.

## Shapes

### Border Radius Scale

| Token | Value | Use |
| --- | --- | --- |
| `none` | 0px | All cards, inputs, headings — the dominant shape |
| `sm` | 4px | Ghost CTA buttons only |
| `pill` | 9999px | Carousel swiper navigation controls |

SpaceX is a fundamentally flat, sharp-cornered design system. The single exception
is the 4px softening on CTA buttons, which provides just enough tactility to signal
interactivity without departing from the angular industrial aesthetic.

### Photography and Imagery

- **Aspect ratio** — full-viewport (16:9 and wider) for hero; 3:2 or 16:9 for card thumbnails
- **Treatment** — high-contrast, desaturated or color-graded rocket and mission photography
- **Text overlay** — white text directly on dark imagery; no semi-opaque scrim needed because
  imagery is already dark-grade processed
- **Video** — autoplay, muted, looping background video is the primary medium on the homepage

## Components

### Buttons

SpaceX uses a single button archetype: the ghost CTA. There are no filled solid-color
buttons; every interactive call-to-action is a frosted-glass ghost.

Ghost Primary (e.g., "WATCH NOW"):

- Background: `rgba(0,0,0,0.5)` — 50% opaque black
- Border: `1px solid rgba(240,240,250,0.35)` — 35% frost white hairline
- Text: `#F0F0FA` — full frost white, uppercase
- Font: D-DIN, 16px, weight 400, uppercase
- Border radius: 4px
- Padding: `0px 20px`

Ghost Primary Active/Hover:

- Background: `rgba(240,240,250,0.1)` — slight frost lift
- Border: same hairline, slightly brighter on hover

### Cards

Update and article cards on the Updates page are borderless, flat containers:

- Background: transparent (sits on black canvas)
- Border: none
- Border radius: 0px
- Padding: `20px 10px 20px 6px`
- Heading: D-DIN-Bold, 20px, uppercase, `#F0F0FA`
- Body: D-DIN, 16px, `#F0F0FA`

### Navigation

Transparent overlay (default):

- Background: transparent — video visible beneath
- Text: `rgba(240,240,250,0.9)` — 90% frost white
- Font: D-DIN, 13px, weight 700, uppercase, letter-spacing 1.17px
- No visible border or separator

Scrolled state:

- Background: `rgba(37,38,40,0.8)` — dark charcoal glass
- Same text treatment

### Carousel Controls

Circular pill buttons for the updates swiper:

- Background: `rgba(240,240,250,0.1)` frost
- Border radius: 32px (pill)
- Padding: 18px square touch target
- No border, no text

## Do's and Don'ts

### Do

- Use uppercase on every text element — this is the single most defining SpaceX typographic rule
- Apply negative letter-spacing (-1px) to all 100px hero headings for monumental scale
- Keep the canvas pitch black and resist adding any tinted surfaces or background colors
- Use ghost/frosted-glass button style exclusively — never fill a button with an opaque solid color
- Keep border-radius at 0px for all surfaces, cards, and inputs; 4px only for CTA buttons
- Layer text directly over dark photography without scrim — SpaceX photos are pre-graded dark
- Use generous full-viewport section heights to give content cinematic breathing room
- Apply `text-transform: uppercase` globally via CSS — do not rely on typing in all-caps

### Don't

- Don't introduce any color accent (blue, red, orange, green) — the palette is strict monochrome
- Don't use border-radius larger than 4px on any component except the pill carousel control
- Don't add box shadows — depth is achieved only via opacity layering and video luminance
- Don't use more than two typeface roles (D-DIN and D-DIN-Bold) — introduce no third fonts
- Don't use mixed-case text in headings or navigation — SpaceX identity requires all-uppercase
- Don't use filled opaque buttons — always use the ghost treatment with frost-white hairline border
- Don't use white (`#FFFFFF`) as the primary text color — use the slightly warm frost `#F0F0FA`
- Don't add decorative illustration, iconography packs, or gradient fills to any surface

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
| --- | --- | --- |
| Mobile | < 768px | Single-column layout; nav collapses to hamburger; hero type scales to ~48px |
| Tablet | 768px–1024px | 2-column card grid; nav items condensed |
| Desktop | 1024px–1440px | 3–4 column card grid; full nav bar visible |
| Wide | > 1440px | Max content ~1440px; sections remain full-bleed video |

### Touch Targets

- Minimum interactive area: 44x44px (nav items rely on padding to meet this threshold)
- Swiper controls: 18px padding creates adequate touch area around the control icon

### Collapsing Strategy

- **Navigation** — hamburger icon on mobile; full horizontal nav on desktop
- **Hero sections** — scale font from 100px (desktop) to ~60px (tablet) to ~40px (mobile) using `clamp()`
- **Cards** — single column on mobile; 2 columns on tablet; 3–4 on desktop via CSS Grid auto-fill

### Image Behavior

- Full-bleed video and images use `object-fit: cover` to fill their container at all breakpoints
- Videos maintain 16:9 aspect ratio; on narrow viewports height is clamped and video crops horizontally
- Card images preserve 16:9 or 3:2 aspect ratio via the CSS `aspect-ratio` property

## Agent Prompt Guide

### Quick Color Reference

- Canvas (background): #000000
- Ink (primary text): #F0F0FA
- Muted text: #F0F0FA99 (60% opacity)
- Hairline / ghost border: #F0F0FA59 (35% opacity)
- Ghost button fill: #00000080 (50% opacity black)
- Surface frost: #F0F0FA1A (10% opacity)
- Nav overlay scrolled: #252628CC (80% opacity charcoal)
- Active / hover white: #FFFFFF

### Example Component Prompts

**Hero Section:**
"Create a hero on a pure black (#000000) background with a full-bleed background video or image. Headline in D-DIN-Bold (or Barlow Condensed Bold), 100px, uppercase, letter-spacing -1px, color #F0F0FA, line-height 0.95. Subheadline in D-DIN, 16px, color #F0F0FA, letter-spacing 0.32px. CTA button: background rgba(0,0,0,0.5), 1px solid rgba(240,240,250,0.35) border, 4px border-radius, text #F0F0FA, uppercase."

**Updates Card:**
"Create an article card on transparent background over black (#000000) canvas. No border, no border-radius. Thumbnail image at 16:9 aspect ratio. Below: title in D-DIN-Bold, 20px, uppercase, color #F0F0FA, letter-spacing 0.4px. Body in D-DIN, 16px, color #F0F0FA, line-height 1.5. Padding 20px 10px."

**Navigation Bar:**
"Create a nav bar with transparent background overlaid on video. SpaceX logo SVG left-aligned. Nav links: D-DIN, 13px, weight 700, uppercase, letter-spacing 1.17px, color rgba(240,240,250,0.9), no underline, no background. On scroll, switch nav background to rgba(37,38,40,0.8)."

**Button Set:**
"Ghost primary button: background rgba(0,0,0,0.5), 1px solid rgba(240,240,250,0.35) border, 4px border-radius, 0px 20px padding, D-DIN 16px weight 400 uppercase color #F0F0FA. Ghost secondary: transparent background, same border, same text. No solid filled buttons."

### Iteration Guide

1. Start with `background-color: #000000` on `body` — the canvas must be pitch black
2. Apply `font-family: 'D-DIN', Arial, Verdana, sans-serif` globally or substitute with Barlow Condensed from Google Fonts
3. Apply `text-transform: uppercase` globally to all headings and nav elements — this is non-negotiable
4. Use negative letter-spacing only on sizes 60px and above; use positive tracking on sizes 16px and below
5. Never add box-shadow to any element — rely on opacity layering for depth cues
6. Test on dark background: all ghost buttons must be visible but not prominent on the black canvas
7. Check that no element uses a color other than black and frost-white (#F0F0FA) — remove any that do
