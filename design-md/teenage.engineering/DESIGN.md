---
version: alpha
name: teenage engineering
description: |
  Teenage engineering is a Swedish electronics company known for designing
  distinctive, precision-engineered synthesizers, samplers, and audio tools.
  Their visual identity is radically minimal — flat zero-radius geometry,
  proprietary font families, fluid typography scaled to viewport width,
  and dark surfaces that shift from pure black on the homepage to warm
  off-white on product pages. Color is used sparingly: the brand palette
  anchors in black and grey with an orange accent (#F05A24) that appears
  only in high-signal moments like mobile cart and search CTAs.

colors:
  primary: "#F05A24"
  primary-active: "#CC4B1C"
  ink: "#0F0E12"
  body: "#000000"
  muted: "#767676"
  on-dark: "#E5E5E5"
  canvas: "#F5F5F5"
  canvas-black: "#000000"
  surface: "#FFFFFF"
  surface-dark: "#0F0E12"
  surface-mid: "#272727"
  hairline: "#E5E5E5"
  hairline-dark: "#B2B2B2"
  accent-blue: "#0071BB"
  accent-green: "#006837"
  accent-orange: "#F05A24"
  accent-red: "#B81D13"
  accent-yellow: "#FAB413"
  semantic-error: "#C0262C"
  semantic-success: "#006837"

typography:
  display-xl:
    fontFamily: "\"te-40\", \"Unicode\", sans-serif"
    fontSize: 94px
    fontWeight: 300
    lineHeight: 1.04
    letterSpacing: 0
  display-md:
    fontFamily: "\"te-40\", \"Unicode\", sans-serif"
    fontSize: 71px
    fontWeight: 300
    lineHeight: 1.04
    letterSpacing: 0
  title-lg:
    fontFamily: "\"te-40\", \"Unicode\", sans-serif"
    fontSize: 47px
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: 0
  title-md:
    fontFamily: "\"te-20\", \"Unicode\", sans-serif"
    fontSize: 42px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  body-lg:
    fontFamily: "\"te-20\", \"Unicode\", sans-serif"
    fontSize: 34px
    fontWeight: 300
    lineHeight: 1.15
    letterSpacing: 0
  body-md:
    fontFamily: "\"te-20\", \"Unicode\", sans-serif"
    fontSize: 21px
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "\"te-20\", \"Unicode\", sans-serif"
    fontSize: 17px
    fontWeight: 100
    lineHeight: 1.15
    letterSpacing: 0
  button:
    fontFamily: "\"te-20\", \"Unicode\", sans-serif"
    fontSize: 21px
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: 0
  nav-link:
    fontFamily: "\"te-20\", \"Unicode\", sans-serif"
    fontSize: 21px
    fontWeight: 100
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "\"te-20\", \"Unicode\", sans-serif"
    fontSize: 17px
    fontWeight: 100
    lineHeight: 1.15
    letterSpacing: 0

spacing:
  xxs: 4px
  xs: 13px
  sm: 26px
  md: 39px
  lg: 59px
  xl: 118px
  xxl: 176px
  section: 235px

rounded:
  none: 0px
  sm: 2px
  md: 9px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "13px 35px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "13px 35px"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.body}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "13px 35px"
    border: "1px solid {colors.body}"

  button-secondary-active:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.body}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "13px 35px"

  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0px"
    border: "none"

  button-ghost-disabled:
    backgroundColor: "transparent"
    textColor: "{colors.hairline-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0px"

  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm}"
    border: "none"

  card-dark:
    backgroundColor: "{colors.surface-dark}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm}"
    border: "none"

  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.hairline}"

  text-input-focused:
    border: "1px solid {colors.ink}"

  text-input-disabled:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.hairline-dark}"
    border: "1px solid {colors.hairline}"

  top-nav:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    border: "none"

  top-nav-light:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    border: "none"

  footer:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    padding: "{spacing.sm} {spacing.md}"
---

# teenage engineering Design System

## Overview

Teenage engineering's visual language is defined by radical restraint: pure black backgrounds, near-monochromatic palettes, proprietary ultra-thin typefaces, and an absolute rejection of border-radius. Every design decision communicates precision engineering — the same obsessive attention to material and form that defines their physical products is encoded into their digital surfaces. The result is a site that feels more like a product datasheet than a web store, with product photography doing all the heavy lifting while the surrounding interface disappears into minimal scaffolding.

The brand's relationship with color is deliberately scarce. Pages shift between pure black hero environments and warm off-white product surfaces. A vivid orange (#F05A24) appears only in functional signal moments — the mobile cart icon and search interaction — never as decoration. Secondary semantic colors (blue, green, red, yellow) are used in functional UI states only. This scarcity gives every orange pixel enormous weight, directing attention with surgical precision.

Key visual characteristics:
- Pure black (`#000000`) homepage canvas contrasted with warm off-white (`#F5F5F5`) product pages
- Proprietary `te-20` (text) and `te-40` (display) font families — ultra-light weight 100–300, never bold in display roles
- Fluid typography scaled to viewport width — all sizes are viewport-relative, not fixed px
- Zero border-radius everywhere — flat geometry with no softening whatsoever
- Orange `#F05A24` accent used exclusively for functional CTAs and interactive state signals
- Generous whitespace and breathing room — sections separated by large viewport-relative gaps
- Full-bleed product photography as primary visual element; no decorative graphics
- Lowercase-only typographic voice — all UI copy rendered in lowercase
- Typography weight range: 100 (ultra-thin) to 300 (light) for body; 700 only for isolated display uses

The brand differentiates from audio competitors (Korg, Roland, Native Instruments) by refusing category conventions: no warm wood textures, no retro color palettes, no playful badges. It aligns more closely with Swiss industrial design or Braun minimalism than with typical music hardware aesthetics.

---

## Colors

### Brand & Accent

| Token | Hex | Use |
| ----- | --- | --- |
| `primary` | `#F05A24` | Mobile CTA, search activation, sale badge |
| `primary-active` | `#CC4B1C` | Hover/pressed state on orange elements |
| `accent-blue` | `#0071BB` | Informational links, status indicators |
| `accent-green` | `#006837` | Available / success states |
| `accent-red` | `#B81D13` | Error messaging, destructive actions |
| `accent-yellow` | `#FAB413` | Warning states |

### Surface

| Token | Hex | Use |
| ----- | --- | --- |
| `canvas` | `#F5F5F5` | Product page background, store background |
| `canvas-black` | `#000000` | Homepage canvas, hero sections |
| `surface` | `#FFFFFF` | Elevated content panels |
| `surface-dark` | `#0F0E12` | Footer background, video player UI |
| `surface-mid` | `#272727` | Mid-dark content boxes, instrument visualizations |

### Text

| Token | Hex | Use |
| ----- | --- | --- |
| `ink` | `#0F0E12` | Primary text on light surfaces |
| `body` | `#000000` | Default body text on product pages |
| `muted` | `#767676` | Secondary text, metadata, labels |
| `on-dark` | `#E5E5E5` | Text on dark canvas and footer |
| `hairline-dark` | `#B2B2B2` | Borders on dark surfaces, disabled state text |

### Semantic

| Token | Hex | Use |
| ----- | --- | --- |
| `semantic-error` | `#C0262C` | Form validation errors |
| `semantic-success` | `#006837` | Stock available, confirmation |

---

## Typography

### Font Families

Teenage engineering uses two proprietary typefaces not available via public CDN:

- **te-20** — the primary text font. Ultra-light to light weights (100, 300). Used for all navigation, body copy, product names, prices, and UI labels. Lowercase typographic voice.
- **te-40** — the display / editorial font. Light weight (300). Used for large hero headlines and product taglines. Same optical style as te-20 but optimized for large sizes.
- **TechnoType** — secondary display face referenced in font stack but rarely seen in rendered UI. May appear in specific product-themed layouts.

Fallback stack for all: `"Unicode", sans-serif`

Since these fonts are not publicly distributable, agents generating UI should substitute:
- **te-20 equivalent**: "DM Sans" weight 300, or "Inter" weight 300
- **te-40 equivalent**: "DM Sans" weight 200, or "Inter" weight 200 (for large display use)

### Typography Hierarchy

| Role | Family | Size | Weight | Line Height | Letter Spacing | Use |
| ---- | ------ | ---- | ------ | ----------- | -------------- | --- |
| `display-xl` | te-40 | 94px | 300 | 1.04 | 0 | Hero superlatives, product launch headlines |
| `display-md` | te-40 | 71px | 300 | 1.04 | 0 | Section headlines, editorial callouts |
| `title-lg` | te-40 | 47px | 300 | 1.10 | 0 | Product names at hero scale, feature headers |
| `title-md` | te-20 | 42px | 700 | 1.50 | 0 | Category headers (rare bold usage) |
| `body-lg` | te-20 | 34px | 300 | 1.15 | 0 | Subheadlines, product subtitles |
| `body-md` | te-20 | 21px | 300 | 1.50 | 0 | Default body text, navigation links |
| `body-sm` | te-20 | 17px | 100 | 1.15 | 0 | Small captions, footer text, paragraph text |
| `button` | te-20 | 21px | 300 | 1.50 | 0 | Button labels, CTAs |
| `nav-link` | te-20 | 21px | 100 | 1.50 | 0 | Navigation anchors |
| `caption` | te-20 | 17px | 100 | 1.15 | 0 | Tags, metadata, product spec labels |

### Typography Principles

- **Ultra-light default**: font-weight 100 is the default for links and small text. Weight 300 is "regular" here.
- **No tracking**: letter-spacing is always `normal` / 0. The typeface has built-in optical spacing.
- **Fluid sizing**: all font sizes are defined as viewport-relative fractions (e.g., `calc(0.0367 * 100vw)` for ~47px at 1280px width). The px values above are at 1280px viewport.
- **Lowercase voice**: all product copy, nav items, CTA labels are lowercase. Never use sentence case or title case.
- **Minimal weight range**: only weights 100, 300, and 700 appear. 400, 500, 600 are never used.

---

## Layout

### Spacing System

Base unit: **13px** (approximately 1% of the 1280px design reference width). All spacing values derive from viewport-relative calculations.

| Token | Value | Use |
| ----- | ----- | --- |
| `xxs` | 4px | Tight internal gaps, icon margins |
| `xs` | 13px | Compact item spacing (≈1vw) |
| `sm` | 26px | Element padding, compact section gaps (≈2vw) |
| `md` | 39px | Default section padding, button horizontal padding (≈3vw) |
| `lg` | 59px | Section vertical padding, card gutters (≈4.6vw) |
| `xl` | 118px | Large section breaks (≈9.2vw) |
| `xxl` | 176px | Major section separators |
| `section` | 235px | Full-section whitespace gaps |

### Grid & Container

- No fixed max-width container — content is full-bleed by default
- Product pages use a reference design width of 980px scaled to viewport
- Navigation is full-width with proportional padding
- Product tiles use a fluid multi-column grid that collapses gracefully
- Footer uses column layout at approximately 21.9% width columns

### Whitespace Philosophy

Teenage engineering uses whitespace as a design element. Sections breathe with large proportional gaps — typically 9–18vw between major page sections. The absence of decorative elements means spacing must do heavy lifting in conveying structure. Product photography fills available space completely with no padding.

---

## Elevation & Depth

### Levels

| Level | Treatment | Example use |
| ----- | --------- | ----------- |
| 0 | Flat, no shadow, no border | Product photography containers |
| 1 | `background: #F5F5F5` elevation by color only | Store product tiles |
| 2 | `background: #FFFFFF` on grey canvas | Form panels, checkout fields |
| 3 | `background: #0F0E12` (dark surface) | Footer, video overlay UI |
| 4 | Modal overlay at `rgba(0,0,0,0.8)` | Lightbox, dialog backdrops |

### Shadow Philosophy

Teenage engineering uses **zero box-shadows**. Elevation is communicated entirely through background color contrast — lighter on dark, darker on light. This is an absolute brand constraint. No `drop-shadow`, `box-shadow`, or `filter: drop-shadow()` effects appear anywhere on the site.

Depth is created through:
- Full-bleed photography that extends to viewport edges
- Dark surface backgrounds (`#0F0E12`) contrasting with light content
- Generous whitespace creating visual layering without shadows

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
| ----- | ----- | --- |
| `none` | 0px | All primary UI elements — buttons, cards, inputs, tiles |
| `sm` | 2px | Video.js player controls only (third-party) |
| `md` | 9px | Video.js play button (third-party) |
| `pill` | 9999px | Rounded pill variant (rare; e.g., `--round` CSS var) |

Teenage engineering's design is entirely flat. **Zero border-radius is the rule**, not the exception. The `pill` token exists in the CSS custom property system (`--round: 9999px`) but is used only in specific badge or overlay contexts.

### Photography & Imagery

- **Full-bleed** product shots that span the entire viewport width
- **No border treatments** — images are flush with container edges
- **White or off-white product backgrounds** that blend into `#F5F5F5` canvas
- **Dark context shots** where product is shown on black background matching the homepage
- **Aspect ratios** are fluid and set by the image content — no fixed crop enforced
- **No rounded image frames** — ever

---

## Components

### Buttons

Teenage engineering buttons are minimal to an extreme. Most interactive actions use plain text links with no background. The only solid-background button observed is a newsletter subscription CTA.

**Button — Primary (Newsletter/CTA)**
- Background: `#B2B2B2` (grey, not orange — TE reserves orange for mobile contexts)
- Text color: `#0F0E12`
- Font: te-20, 35px, weight 300
- Radius: 0px (completely flat)
- Padding: 13px 35px
- Border: none

**Button — Ghost / Text Link**
- Background: transparent
- Text color: `#E5E5E5` on dark, `#000000` on light
- Font: te-20, 21px, weight 100–300
- No underline by default
- No border

**Add to Cart**
- Rendered as text-only link with no background or border
- Color: `#000000` on light backgrounds
- Font: te-20, 21px, weight 300

**Mobile Cart CTA**
- Orange `#F05A24` background
- Text: `#0F0E12`
- Flat, no radius

### Cards / Product Tiles

- Background: transparent or `#F5F5F5` canvas color
- No border, no shadow, no radius
- Product name in te-20 17px weight 300
- Price in te-20 17px weight 300
- Image fills the tile area completely

### Inputs & Forms

- Background: `#F5F5F5`
- Border: thin solid `#E5E5E5` (approximately 1px)
- Border-radius: flat (0px)
- Font: te-20 at `--fs-20` (47px at 1280px — very large)
- Placeholder color: `#7F7F7F`
- Focus state: border shifts to `#000000`
- Disabled: background `#E5E5E5`, text `#B2B2B2`
- Padding: `--field-padding` ≈ 35px (proportional)

### Navigation

- Full-width top bar with transparent background
- Text: te-20, 21px, weight 100, color `#E5E5E5` (on dark homepage) or `#0F0E12` (on light pages)
- No separator line by default
- Nav items are plain text anchors with no padding decorations
- Logo: "teenage engineering" wordmark rendered in the same te-20 font at nav size

### Footer

- Background: `#0F0E12` (near-black)
- Text: `#E5E5E5`
- Font: te-20, 21px, weight 300
- Padding: ≈29px 59px (proportional to viewport)
- Country selector rendered as plain links

---

## Do's and Don'ts

### Do

- Use lowercase for all UI copy, navigation labels, button text, and product names
- Respect the flat geometry — zero border-radius on all containers, buttons, and inputs
- Use the te-20 / te-40 proprietary font families (or their closest public substitutes: DM Sans or Inter at weight 200–300)
- Let whitespace breathe — use proportional spacing (`xxl`, `section`) between content sections
- Use orange (`#F05A24`) only for high-signal functional moments: cart, search activation, sale indicators
- Display product photography full-bleed to the viewport edge with no padding or frame
- Keep font weights in the 100–300 range for all display text — bold (700) is reserved for categorical labels only
- Use `#E5E5E5` for text on all dark backgrounds to maintain the brand's soft contrast ratio

### Don't

- Never add border-radius to buttons, cards, inputs, or containers (flat geometry is an absolute constraint)
- Never use box-shadow or drop-shadow effects of any kind
- Never use sentence case or title case — TE's voice is always lowercase
- Never use font-weight 400, 500, or 600 — the weight spectrum is 100, 300, and 700 only
- Never center-align body text — all copy is left-aligned
- Never use orange as a decorative color — it signals action only
- Never use more than two type sizes on a single content block
- Don't use fixed px font sizes — sizes are viewport-relative; use `clamp()` or `vw` units in real implementations

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
| ---------- | ----- | ----------- |
| Mobile | < 768px | Single column, stacked navigation, enlarged touch targets (48px min), orange cart/search CTAs appear |
| Tablet | 768–1024px | Two-column product grid, collapsing nav |
| Desktop | 1024px+ | Full multi-column layout, proportional fluid type |
| Wide | 1440px+ | Maximum density; fluid scale continues upward |

### Touch Targets

- Minimum click area: 48px (`--btn-min-click-area: 48px`)
- Achieved via `.a11y-clickarea` utility class that extends the target area without changing visual size

### Collapsing Strategy

- Navigation collapses to a hamburger menu on mobile with a full-screen overlay
- Product grids shift from 4-column → 2-column → 1-column
- Typography scales down proportionally (viewport-relative units handle this automatically)
- Footer column layout stacks vertically on mobile

### Image Behavior

- Product images are always full-width of their container
- No aspect ratio locking — images fill available space
- Images bleed to viewport edges on all breakpoints
- No lazy-load skeleton states visible in brand UI (images load directly)

---

## Agent Prompt Guide

### Quick Color Reference

- Primary orange (CTA): `#F05A24`
- Canvas (light): `#F5F5F5`
- Canvas (dark): `#000000`
- Ink (dark text): `#0F0E12`
- On-dark text: `#E5E5E5`
- Surface dark (footer): `#0F0E12`
- Muted text: `#767676`
- Hairline border: `#E5E5E5`
- Mid-dark surface: `#272727`
- Accent grey (newsletter button): `#B2B2B2`

### Example Component Prompts

**Hero Section (dark canvas):**
"Create a hero on pure black (`#000000`) background. Headline in te-20 or DM Sans at 47–94px, weight 300, color `#E5E5E5`, lowercase. Subheadline at 21px weight 100, color `#E5E5E5`. No border-radius. No shadows. Let the product image fill the full viewport width with no frame or padding."

**Product Store Tile:**
"Create a product tile on `#F5F5F5` background, no border, no shadow, no radius. Product image fills the top of the tile. Product name in te-20 (or DM Sans) 17px weight 300, color `#000000`, lowercase. Price in same style. Add-to-cart as plain text link in weight 300."

**Newsletter Button:**
"Primary button: background `#B2B2B2`, text `#0F0E12`, font te-20 (or DM Sans) 21px weight 300, padding 13px 35px, border-radius 0, no border, no shadow. Label in lowercase: 'join our newsletter'."

**Navigation Bar:**
"Full-width transparent nav. Logo wordmark 'teenage engineering' in te-20 21px weight 100 color `#E5E5E5`. Nav links: te-20 21px weight 100 `#E5E5E5`, no underline, no padding decoration. No separator line."

**Dark Footer:**
"Footer background `#0F0E12`. Text `#E5E5E5` in te-20 21px weight 300. Padding 29px 59px. Country selector as plain text links. No dividing lines, no shadows."

**Form Input (large TE style):**
"Text input: background `#F5F5F5`, border `1px solid #E5E5E5`, border-radius 0, padding 35px, font te-20 47px weight 300, placeholder color `#7F7F7F`. Focus: border `1px solid #000000`. No outline ring."

### Iteration Guide

1. Start with the correct canvas: dark pages use `#000000`, product/store pages use `#F5F5F5`
2. Apply the te-20 font stack — use DM Sans weight 200–300 as a substitute if needed
3. Set border-radius to 0 on all elements — no exceptions for this brand
4. Remove all box-shadows — depth comes from background color alone
5. Write all UI copy in lowercase — the brand voice is consistently uncapitalized
6. Use orange (`#F05A24`) only for interactive signal elements, never decorative use
7. Make typography fluid: use `clamp(17px, 1.8vw, 21px)` style expressions for body, scale display proportionally
8. Ensure minimum 48px touch targets by extending clickable area without changing visual size
