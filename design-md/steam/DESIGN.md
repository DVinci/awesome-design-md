---
version: alpha
name: Steam
description: Steam is Valve's digital game distribution platform — a dense, image-forward dark interface built around game artwork as the primary visual element. The design language is unapologetically utilitarian — deep blue-dark backgrounds layered in a distinctive tonal stack, a nearly flat geometry, and a signature two-color system (Steam Blue and Discount Lime) that communicates commerce at a glance. Typography stays compact and functional, yielding maximum screen space to game capsule art.

colors:
  # Brand
  primary: "#66C0F4"
  primary-active: "#1A9FFF"
  accent-lime: "#BEEE11"
  accent-green-bg: "#4C6B22"

  # Surface stack (dark layer cake — lightest to darkest)
  canvas: "#1B2838"
  surface: "#283846"
  surface-soft: "#344654"
  surface-mid: "#3D4450"
  surface-dark: "#171D25"
  surface-darkest: "#171A21"
  surface-input: "#32404B"

  # Text
  ink: "#FFFFFF"
  body: "#C6D4DF"
  muted: "#8F98A0"
  on-dark-muted: "#ACB2B8"

  # Borders
  hairline: "#2A475E"
  hairline-subtle: "#FFFFFF1A"
  hairline-input: "#FFFFFF24"

  # Semantic
  semantic-success: "#90BA3C"
  semantic-positive-review: "#66C0F4"
  semantic-mixed-review: "#B9A074"
  semantic-negative-review: "#C62B2B"
  semantic-free: "#4FA1D4"

typography:
  display-xl:
    fontFamily: '"Motiva Sans", Arial, Helvetica, sans-serif'
    fontSize: 26px
    fontWeight: 400
    lineHeight: 1.23
    letterSpacing: 0px

  display-md:
    fontFamily: '"Motiva Sans", Arial, Helvetica, sans-serif'
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px

  title-lg:
    fontFamily: '"Motiva Sans", Arial, Helvetica, sans-serif'
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px

  title-md:
    fontFamily: '"Motiva Sans", Arial, Helvetica, sans-serif'
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px

  body-lg:
    fontFamily: '"Motiva Sans", Arial, Helvetica, sans-serif'
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px

  body-md:
    fontFamily: '"Motiva Sans", Arial, Helvetica, sans-serif'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px

  body-sm:
    fontFamily: 'Arial, Helvetica, sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px

  button:
    fontFamily: '"Motiva Sans", Arial, Helvetica, sans-serif'
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0px

  nav-link:
    fontFamily: '"Motiva Sans", Arial, Helvetica, sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.42px
    textTransform: uppercase

  caption:
    fontFamily: 'Arial, Helvetica, sans-serif'
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px

  discount-badge:
    fontFamily: '"Motiva Sans", Arial, Helvetica, sans-serif'
    fontSize: 26px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0px

  tag:
    fontFamily: 'Arial, Helvetica, sans-serif'
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0px

spacing:
  xs: 4px
  sm: 8px
  md: 10px
  lg: 16px
  xl: 20px
  xxl: 32px
  section: 48px

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 8px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "linear-gradient(to bottom, #4FB3EA, #1984C5)"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "10px 16px"
    border: "none"

  button-primary-active:
    backgroundColor: "linear-gradient(to bottom, #3DA3D8, #1470A8)"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "10px 16px"
    border: "none"

  button-green:
    backgroundColor: "linear-gradient(to bottom, #75BB21, #4C8A14)"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "10px 16px"
    border: "none"

  button-green-active:
    backgroundColor: "linear-gradient(to bottom, #5EA318, #3D7010)"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "10px 16px"
    border: "none"

  button-secondary:
    backgroundColor: "rgba(103, 193, 245, 0.1)"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "10px 16px"
    border: "1px solid rgba(103, 193, 245, 0.3)"

  discount-badge:
    backgroundColor: "{colors.accent-green-bg}"
    textColor: "{colors.accent-lime}"
    typography: "{typography.discount-badge}"
    rounded: "{rounded.none}"
    padding: "4px 8px"
    border: "none"

  tag:
    backgroundColor: "rgba(103, 193, 245, 0.2)"
    textColor: "{colors.primary}"
    typography: "{typography.tag}"
    rounded: "{rounded.xs}"
    padding: "0px 7px"
    border: "none"

  tag-free:
    backgroundColor: "rgba(79, 161, 212, 0.2)"
    textColor: "{colors.semantic-free}"
    typography: "{typography.tag}"
    rounded: "{rounded.xs}"
    padding: "0px 7px"
    border: "none"

  card-base:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xs}"
    border: "1px solid {colors.hairline}"
    shadow: "none"

  card-panel:
    backgroundColor: "{colors.surface-soft}"
    rounded: "{rounded.xs}"
    padding: "{spacing.lg} {spacing.lg} {spacing.xl}"
    border: "none"
    shadow: "none"

  text-input:
    backgroundColor: "{colors.surface-input}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: "0px {spacing.md}"
    border: "1px solid {colors.hairline-input}"

  text-input-focused:
    border: "1px solid {colors.primary}"

  top-nav:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.body}"
    typography: "{typography.nav-link}"
    padding: "0px {spacing.lg}"
    border: "none"
---

# Steam Design System

## Overview

Steam's interface is built around a single governing principle: game artwork is the hero, everything else serves discovery. The store operates as a dense visual catalog — rows of capsule images, tightly packed metadata, and transactional elements that stay out of the way. The color palette is a deliberate stack of deep blue-tinted darks (`#171A21` → `#1B2838` → `#283846`) that evoke night-time gaming sessions and let vibrant cover art pop without competition.

The typography system is deliberately functional, not expressive — Arial does the heavy lifting at small sizes, Motiva Sans (Valve's proprietary font) handles featured headings and marketing copy. Text sizes run small and dense, trusting that Steam's audience is comfortable scanning information-rich interfaces. Two colors carry all commercial weight: Steam Blue (`#66C0F4`) signals interactivity and positive sentiment, while Discount Lime (`#BEEE11`) on dark green screams sale from across the page.

**Key characteristics:**
- Deep blue-dark tonal stack — not pure black, a warm navy system with five distinct surface levels
- Image-first layout: game capsule art occupies 60–80% of most page widths
- Near-flat geometry: border-radius capped at 2–4px; boxy, industrial feel
- Dual-font hierarchy: Motiva Sans for featured content, Arial for compact metadata
- Steam Blue as the single brand accent for links, review scores, and interactive elements
- Signature discount badge: dark green + lime green, zero rounding, maximum contrast
- Translucent blue (`rgba(103, 193, 245, 0.2)`) for tags and secondary interactive states
- Uppercase nav links with wide letter-spacing — the only typographic flair in an otherwise minimal system

---

## Colors

### Brand & Accent

| Token | Hex | Use |
| ----- | --- | --- |
| `primary` | `#66C0F4` | Links, review score labels, interactive text, timestamps |
| `primary-active` | `#1A9FFF` | Hover/focus state for primary interactions |
| `accent-lime` | `#BEEE11` | Discount percentage text — high contrast on green bg |
| `accent-green-bg` | `#4C6B22` | Discount badge background — signals sale immediately |

### Surface (Dark Layer Stack)

From deepest to most elevated:

| Token | Hex | Use |
| ----- | --- | --- |
| `surface-darkest` | `#171A21` | Outer chrome, OS-level framing, sale pages |
| `surface-dark` | `#171D25` | Global navigation header |
| `canvas` | `#1B2838` | Main store page background — the canonical Steam color |
| `surface` | `#283846` | Panels, featured sections, elevated content areas |
| `surface-soft` | `#344654` | Cards, modal inners, slightly lifted panels |
| `surface-mid` | `#3D4450` | Tab bars, secondary containers |
| `surface-input` | `#32404B` | Search and text input backgrounds |

### Text

| Token | Hex | Use |
| ----- | --- | --- |
| `ink` | `#FFFFFF` | Game titles, primary headings, button labels |
| `body` | `#C6D4DF` | Default body text — blue-grey, not pure white |
| `muted` | `#8F98A0` | Secondary descriptions, metadata, timestamps |
| `on-dark-muted` | `#ACB2B8` | Text on the darkest surfaces |

### Borders

| Token | Value | Use |
| ----- | ----- | --- |
| `hairline` | `#2A475E` | Section dividers, card borders |
| `hairline-subtle` | `rgba(255,255,255,0.1)` | Subtle separators on dark surfaces |
| `hairline-input` | `rgba(255,255,255,0.14)` | Input field border |

### Semantic

| Token | Hex | Use |
| ----- | --- | --- |
| `semantic-success` | `#90BA3C` | Positive review badge background |
| `semantic-positive-review` | `#66C0F4` | "Overwhelmingly/Very Positive" review label |
| `semantic-mixed-review` | `#B9A074` | "Mixed" review label |
| `semantic-negative-review` | `#C62B2B` | "Mostly/Very Negative" review label |
| `semantic-free` | `#4FA1D4` | "Free to Play" tag color |

---

## Typography

### Font Family

**Motiva Sans** is Valve's proprietary typeface, used for featured headings and marketing copy. It is not publicly available — substitute with **Rajdhani**, **Barlow**, or **Source Sans Pro** for prototyping. The fallback `Arial, Helvetica, sans-serif` is widely used throughout the interface for compact metadata.

```css
/* Heading font */
font-family: "Motiva Sans", Arial, Helvetica, sans-serif;

/* Compact metadata font */
font-family: Arial, Helvetica, sans-serif;
```

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Use |
| ---- | ---- | ------ | ----------- | -------------- | --- |
| `display-xl` | 26px | 400 | 1.23 | 0 | Game title (app hub page) |
| `display-md` | 20px | 400 | 1.4 | 0 | Section headings, queue titles |
| `title-lg` | 18px | 400 | 1.4 | 0 | Sub-section headers |
| `title-md` | 15px | 400 | 1.4 | 0 | Panel titles |
| `body-lg` | 15px | 400 | 1.5 | 0 | Descriptions, sign-in prompts |
| `body-md` | 13px | 400 | 1.5 | 0 | Default content text |
| `body-sm` | 12px | 400 | 1.4 | 0 | Dense metadata (Arial) |
| `nav-link` | 14px | 400 | 1.4 | 0.42px | Uppercase nav items |
| `button` | 15px | 400 | 1.33 | 0 | Button labels |
| `caption` | 11px | 400 | 1.6 | 0 | Tags, badges, small labels |
| `discount-badge` | 26px | 500 | 1.2 | 0 | Discount percentage number |
| `tag` | 11px | 400 | 1.7 | 0 | Genre tags, feature tags |

### Principles

- **Weight restraint**: Weight 400 dominates everywhere. Weight 500 appears only in the discount badge. No bold headlines — the design earns hierarchy through size and color, not weight.
- **Uppercase sparingly**: Only nav links use uppercase + letter-spacing; all content text remains sentence case.
- **Font substitution**: In absence of Motiva Sans, Rajdhani (Google Fonts) matches the condensed, slightly industrial character. Barlow is a looser second choice.

---

## Layout

### Spacing System

Base unit: **4px**. Steam favors tight, information-dense layouts with minimal breathing room.

| Token | Value | Use |
| ----- | ----- | --- |
| `xs` | 4px | Icon gaps, tight list item padding |
| `sm` | 8px | Badge padding, small element gaps |
| `md` | 10px | Input horizontal padding, compact padding |
| `lg` | 16px | Standard card padding, nav horizontal padding |
| `xl` | 20px | Panel bottom padding, section internal gaps |
| `xxl` | 32px | Between feature sections |
| `section` | 48px | Major page section separation |

### Grid & Container

- **Max container width**: 940px (legacy store) / 1440px (new React UI)
- **Featured main capsule**: 616×353px (16:9 aspect ratio)
- **Small capsule art**: 184×69px (used in list rows)
- **Tab item**: 292×136px thumbnail
- **Store capsule hero**: 460×215px
- 12-column implicit grid; most content uses a 2:1 split (main feature + sidebar)

### Whitespace Philosophy

Steam uses minimal whitespace by design. Content is packed densely to maximize visible inventory. Section gaps are tighter than any editorial site — the goal is to show more games, not create breathing room. The exception is the full-page featured game hero banner, which uses full bleed art as its own whitespace.

---

## Elevation & Depth

| Level | Treatment | Example use |
| ----- | --------- | ----------- |
| 0 | `canvas` (#1B2838) flat | Page background |
| 1 | `surface` (#283846) solid fill | Featured section panels |
| 2 | `surface-soft` (#344654) fill + 1px hairline border | Cards, tab panels |
| 3 | Radial gradient overlay (`rgba(24, 37, 53, 0.85)`) | Hover overlays on capsule art |
| 4 | Dark scrim (`rgba(0,0,0,0.6)`) | Video player overlays, modal backdrops |

**Shadow philosophy:** Steam uses almost no CSS `box-shadow`. Elevation is achieved entirely through background color tiers — each layer is a darker or lighter shade of blue-dark. This creates depth through contrast, not light simulation. The one exception is the radial gradient hover overlay on game capsules, which reveals pricing/metadata on hover.

**Gradient patterns in use:**
- Panel gradient: `linear-gradient(rgb(64,70,85) 0%, rgb(38,42,50) 100%)` — grey-teal gradient for containers
- Capsule hover: `radial-gradient(at center, rgba(24,37,53,0.2) 0%, rgba(24,37,53,0.85) 70%)` — center-clear scrim

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
| ----- | ----- | --- |
| `none` | 0px | Discount badges, nav items, most block elements |
| `xs` | 2px | Tags, buttons, inputs, small cards — the default rounding |
| `sm` | 4px | Purchase boxes, larger panels |
| `md` | 8px | Modals, large overlay panels |
| `pill` | 9999px | Rarely used — circular avatar indicators |

**Design note:** Steam is one of the most flat-geometry interfaces in consumer software. Most elements use 0px or 2px rounding. This "boxy" industrial aesthetic reinforces the platform's gaming/hardware culture.

### Photography & Imagery

- Game **capsule art** is the primary design asset — every game supplies official Valve-formatted artwork
- Capsule aspect ratios: 460×215 (hero), 292×136 (tab), 184×69 (list row), 231×87 (search)
- Art always fills containers with `object-fit: cover`; never letterboxed
- Screenshots displayed in 16:9 ratio in sliders
- Developer/publisher logos displayed at fixed sizes on light or dark surfaces as provided

---

## Components

### Buttons

**Primary (Blue) — Install Steam / main CTA:**
- Background: `linear-gradient(to bottom, #4FB3EA, #1984C5)`
- Text: `#FFFFFF`, 15px Motiva Sans
- Border-radius: 2px, padding: 10px 16px
- Hover: gradient brightens to `(#3DA3D8, #1470A8)`

**Primary (Green) — Add to Cart / Buy Now:**
- Background: `linear-gradient(to bottom, #75BB21, #4C8A14)`
- Text: `#FFFFFF`, 15px Motiva Sans
- Border-radius: 2px, padding: 10px 16px
- This is the most commercially important button on the store

**Secondary / Ghost:**
- Background: `rgba(103, 193, 245, 0.1)`
- Border: `1px solid rgba(103, 193, 245, 0.3)`
- Text: `#66C0F4`
- Border-radius: 2px

### Cards

**Store capsule (game card):**
- No background fill — the capsule image IS the card
- Hover: radial gradient scrim reveals title + price overlay
- The overlay container: `#1B2838` at 90% opacity for text legibility

**Panel card:**
- Background: `#344654`, border-radius: 2px
- Padding: 16px 16px 20px
- No shadow — elevation via background contrast only

### Inputs & Search

- Background: `#32404B`
- Border: `1px solid rgba(255,255,255,0.14)` at rest; `rgba(255,255,255,0.4)` on focus
- Border-radius: 2px 0 0 2px (left side of search bar, right has button)
- Text: `#FFFFFF`, placeholder: `#8F98A0`

### Navigation

- Full-width dark header: `#171D25` background
- Nav links: Motiva Sans 14px, uppercase, letter-spacing 0.42px, color `#C6D4DF`
- Active/hover: color shifts to `#FFFFFF`
- Height: ~52px

### Badges & Tags

**Genre/feature tag:**
- Background: `rgba(103, 193, 245, 0.2)`, color: `#67C1F5`
- Font: Arial 11px, padding: 0 7px, border-radius: 2px

**Discount badge (signature element):**
- Background: `#4C6B22` (dark olive green)
- Text: `#BEEE11` (electric lime), 26px / weight 500
- Padding: 4px 8px, **zero border-radius** — intentionally boxy
- This badge is immediately recognizable as Steam across the gaming ecosystem

**Review score badge:**
- Text only, color-coded: `#66C0F4` (positive), `#B9A074` (mixed), `#C62B2B` (negative)
- No background — relies on color alone for sentiment signaling

---

## Do's and Don'ts

### Do
- Use game artwork as the primary visual element — let it carry the page
- Apply the tonal surface stack in order (`canvas` → `surface` → `surface-soft`) to create depth without shadows
- Use `#66C0F4` (Steam Blue) exclusively for interactive/link elements and positive review scores — it's a loaded color with user expectation
- Keep border-radius at 0–2px for commercial/transactional elements (buttons, discount badges, tags)
- Use the discount badge exactly as designed — dark green + lime, boxy — it's a brand icon
- Use uppercase letter-spaced text only for navigation; keep all content in sentence case
- Stack information densely — Steam users are comfortable with data-rich layouts

### Don't
- Don't use pure black (`#000000`) as a background — always use a blue-dark from the surface stack
- Don't add `box-shadow` to cards or panels — Steam uses background color tiers for elevation, not shadows
- Don't round the discount badge corners — its boxy shape is intentional and iconic
- Don't use Motiva Sans for body text at sizes below 13px — fall back to Arial for legibility at small sizes
- Don't use white (#FFFFFF) for body text — use `#C6D4DF` for the characteristic blue-tinted tone
- Don't use more than two accent colors per UI view — Steam Blue and Lime Green are the system, additional accents create noise
- Don't make layouts airy — Steam's density is a feature, not a bug

---

## Responsive Behavior

| Breakpoint | Width | Key Changes |
| ---------- | ----- | ----------- |
| Desktop | 1024px+ | Full 2-column layout (feature + sidebar), multi-row capsule grids |
| Tablet | 768–1023px | Single column, capsule grid reflows to 2 columns |
| Mobile | < 768px | Stack layout, capsule art fills full width, nav collapses to hamburger |

**Touch targets:** Minimum 44×44px for all interactive elements. Tags use 19px line-height + padding to meet this threshold.

**Collapsing strategy:**
- The right-sidebar (friends activity, recommended tags) collapses entirely below 768px
- Featured hero capsule switches from 616px to full-width
- Multi-row game grids: 4-col → 2-col → 1-col at breakpoints
- Tab navigation collapses to a scrollable horizontal strip

**Image behavior:** Game capsule art always maintains aspect ratio with `object-fit: cover`. Images never stretch or letterbox — art is cropped to fill.

---

## Agent Prompt Guide

### Quick Color Reference
- Canvas (main bg): `#1B2838`
- Nav background: `#171D25`
- Deepest dark: `#171A21`
- Elevated panel: `#283846`
- Primary text: `#FFFFFF`
- Body text: `#C6D4DF`
- Muted text: `#8F98A0`
- Steam Blue (interactive): `#66C0F4`
- Discount badge bg: `#4C6B22`
- Discount lime text: `#BEEE11`
- Hairline border: `#2A475E`

### Example Component Prompts

**Hero / Feature Section:**
"Create a full-width hero on `#1B2838` background. Game title at 26px Motiva Sans weight 400 color `#FFFFFF`. Genre tags (`rgba(103,193,245,0.2)` background, `#67C1F5` text, 11px Arial, 2px radius, 0 7px padding). Green CTA button: `linear-gradient(to bottom, #75BB21, #4C8A14)`, 2px radius, 10px 16px padding, white text 15px Motiva Sans. Price below button: 15px `#C6D4DF`."

**Game Store Card:**
"Create a game capsule card on `#283846`. Image fills top (460×215 aspect). Hover state: radial gradient scrim `rgba(24,37,53,0.85)` from edges, center clear. Discount badge bottom-left: `#4C6B22` background, `#BEEE11` text 26px weight 500, 0px radius, 4px 8px padding. Sale price below: `#BEEE11` 15px. Original price strikethrough: `#8F98A0` 12px."

**Navigation Bar:**
"Full-width nav on `#171D25`. Logo left. Links: Motiva Sans 14px uppercase letter-spacing 0.42px color `#C6D4DF`, hover `#FFFFFF`. Right side: 'Install Steam' blue gradient button and 'sign in' text link in `#66C0F4`. Height 52px. No border-bottom — color contrast alone separates it from page."

### Iteration Guide
1. Start with `#1B2838` as page background — not black, not grey, the specific Steam blue-dark
2. Use the tonal stack for depth: headers at `#171D25`, featured panels at `#283846`, cards at `#344654`
3. Reserve `#66C0F4` Steam Blue strictly for interactive/clickable elements and positive review scores
4. The green CTA button (`#75BB21` → `#4C8A14` gradient) signals "buy/acquire" — use it only for primary purchase actions
5. Discount badges must be exactly `#4C6B22` + `#BEEE11`, zero border-radius — this is a recognized Steam brand pattern
