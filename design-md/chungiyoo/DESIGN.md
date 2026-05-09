---
version: alpha
name: ChungiYoo
description: |
  ChungiYoo is the personal portfolio of Chung-Yun Yoo, a Germany-based Art Director,
  Graphic Designer, and Illustrator. The design language is warm, expressive, and
  editorial — anchored by a biscuit-toned canvas, custom serif display type (Voyage),
  and a curated palette of soft pinks, muted blues, and punchy vermillion red accents.
  Typography is large, confident, and often playful, blending serif display headlines
  with clean sans-style body text for a modern illustration-portfolio aesthetic.

colors:
  primary: "#D73234"
  primary-active: "#B52020"
  canvas: "#F3EEE8"
  surface: "#E3DACD"
  surface-warm: "#D1CBC4"
  surface-light: "#F6BAC6"
  ink: "#000000"
  body: "#000000"
  muted: "#00000080"
  hairline: "#D1CBC4"
  on-dark: "#F3EEE8"
  accent-pink: "#F8C1CA"
  accent-blue: "#88B2C4"
  accent-blue-light: "#A0C0CD"
  accent-yellow: "#FFE699"
  white: "#FFFFFF"

typography:
  display-xl:
    fontFamily: "Voyage-Bold, Georgia, serif"
    fontSize: 215px
    fontWeight: 700
    lineHeight: 0.73
    letterSpacing: 0
  display-lg:
    fontFamily: "Voyage-Regular, Georgia, serif"
    fontSize: 135px
    fontWeight: 300
    lineHeight: 0.80
    letterSpacing: 0
  display-md:
    fontFamily: "Voyage-Regular, Georgia, serif"
    fontSize: 121px
    fontWeight: 300
    lineHeight: 1.10
    letterSpacing: 0
  display-sm:
    fontFamily: "Voyage-Regular, Georgia, serif"
    fontSize: 75px
    fontWeight: 300
    lineHeight: 0.75
    letterSpacing: 0
  title-lg:
    fontFamily: "Staff-Regular, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 51px
    fontWeight: 400
    lineHeight: 1.10
    letterSpacing: 0
  title-md:
    fontFamily: "Staff-Regular, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.20
    letterSpacing: 0
  body-lg:
    fontFamily: "Staff-Medium, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body-md:
    fontFamily: "Staff-Regular, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  body-sm:
    fontFamily: "Staff-Light, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 14px
    fontWeight: 300
    lineHeight: 1.50
    letterSpacing: 0
  button:
    fontFamily: "Staff-Regular, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.00
    letterSpacing: 0
  nav-link:
    fontFamily: "Staff-Regular, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.00
    letterSpacing: 0
  caption:
    fontFamily: "Staff-Regular, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.20
    letterSpacing: 0
  label-uppercase:
    fontFamily: "Staff-Medium, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.00
    letterSpacing: 0

spacing:
  xxs: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  xxl: 80px
  section: 160px

rounded:
  none: 0px
  sm: 4px
  md: 12px
  lg: 20px
  xl: 32px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
    border: "none"
    textTransform: "uppercase"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "12px 24px"

  button-primary-disabled:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "12px 24px"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
    border: "1px solid {colors.ink}"

  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0"
    border: "none"
    textTransform: "uppercase"

  card-base:
    backgroundColor: "transparent"
    rounded: "{rounded.lg}"
    overflow: "hidden"
    border: "none"

  card-project:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    border: "none"

  top-nav:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    position: "fixed"
    padding: "{spacing.sm}"
    border: "none"

  top-nav-scrolled:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    position: "fixed"
    padding: "{spacing.sm}"

  hamburger:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ink}"
    width: "24px"

  footer-base:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"

  link-accent:
    textColor: "{colors.primary}"
    textTransform: "uppercase"
    typography: "{typography.button}"
---

# ChungiYoo Design System

## Overview

ChungiYoo is the portfolio of Chung-Yun Yoo, a Germany-based Art Director, Graphic Designer, and Illustrator. The visual identity is warm, editorial, and gallery-like — built around a signature biscuit-toned background (`#F3EEE8`), sweeping serif display type in the Voyage font family, and a curated pastel-plus-vermillion palette. The site deliberately avoids conventional UI chrome: no visible navigation bar background, no boxed cards, no shadows. Instead, depth comes from large-scale imagery, generous whitespace, and color-coded typographic hierarchy.

The design reflects the creator's own illustration style — playful, bold, colorful — while maintaining editorial restraint in layout and spacing. It successfully bridges the gap between personal expression and professional portfolio credibility, making it feel like a magazine spread rather than a typical portfolio site.

Key visual characteristics:
- Warm cream canvas (`#F3EEE8`) as the universal background, creating a paper-like tactility
- Display typography (Voyage) used at extreme scale — 121px to 215px — for hero and section headers
- Three-color accent system: soft pink (`#F8C1CA`), muted steel blue (`#88B2C4`), and punchy vermillion red (`#D73234`)
- Flat, shadowless UI — no elevation or depth effects; depth is achieved through scale contrast alone
- Custom font stack: `Voyage` (serif display), `Staff` (sans body in Regular/Light/Medium weights), `KobeWeb` (Japanese script)
- No visible borders on interactive elements — hover/active states use color shifts and scale transforms
- Portfolio imagery displayed at `border-radius: 20px` with smooth overflow clipping
- Minimal navigation: transparent fixed header with a hamburger menu revealing full-screen overlay
- Generous section padding (160px) creates breathing room between content blocks
- Uppercase text used selectively for labels, client names, and secondary CTAs

The design positions ChungiYoo as an expressive, artist-led identity distinct from sterile grid-based portfolios, reinforcing the brand value of visual storytelling and bold creative vision.

---

## Colors

### Brand & Accent

| Token | Hex | Use |
|-------|-----|-----|
| `primary` | `#D73234` | CTA links, client names, brand wordmark "& you", accent text |
| `primary-active` | `#B52020` | Hover/pressed states on red elements |
| `accent-pink` | `#F8C1CA` | Hero display headings (About), large decorative type |
| `accent-blue` | `#88B2C4` | Section subheadings, secondary headline color |
| `accent-blue-light` | `#A0C0CD` | Lighter blue tints on background cards |
| `accent-yellow` | `#FFE699` | Project card background accents, decorative areas |

### Surface

| Token | Hex | Use |
|-------|-----|-----|
| `canvas` | `#F3EEE8` | Universal page background — warm biscuit/parchment tone |
| `surface` | `#E3DACD` | Slightly darker warm gray for subtle content separation |
| `surface-warm` | `#D1CBC4` | Darker warm gray — borders, hairlines, card backgrounds |
| `surface-light` | `#F6BAC6` | Light pink surface variant for accent areas |
| `white` | `#FFFFFF` | Occasional overlaid content, modal overlays |

### Text

| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#000000` | All primary text, headings, nav links, body copy |
| `body` | `#000000` | Default paragraph text |
| `muted` | `#00000080` | Decorative punctuation characters, ornamental glyphs |

### Semantic

| Token | Hex | Use |
|-------|-----|-----|
| `primary` | `#D73234` | Also serves as error/alert color in this flat system |

---

## Typography

### Font Families

- **Voyage** — Custom serif display font (Regular weight 300, Bold weight 700). Used exclusively for large display headings, hero text, footer headlines. Loaded as a custom web font. Fallback: `Georgia, serif`.
- **Staff** — Custom sans-serif body font in three weights: Light (300), Regular (400), Medium (500). Used for all body copy, navigation, labels, captions. Fallback: `'Helvetica Neue', Arial, sans-serif`.
- **KobeWeb** — Japanese script web font, used sparingly for Japanese text content. Fallback: system CJK stack.

### Hierarchy Table

| Role | Font | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|------|--------|-------------|----------------|-----|
| `display-xl` | Voyage-Bold | 215px | 700 | 0.73 | 0 | Hero display — works page mega headline |
| `display-lg` | Voyage-Regular | 135px | 300 | 0.80 | 0 | Footer hero "Say a simple" |
| `display-md` | Voyage-Regular | 121px | 300 | 1.10 | 0 | Homepage hero "Welcome to the" |
| `display-sm` | Voyage-Regular | 75px | 300 | 0.75 | 0 | About page h1 "Hi! I'm Chungi" |
| `title-lg` | Staff-Regular | 51px | 400 | 1.10 | 0 | Section titles, name displays |
| `title-md` | Staff-Regular | 36px | 400 | 1.20 | 0 | Secondary titles |
| `body-lg` | Staff-Medium | 24px | 400 | 1.40 | 0 | Intro paragraph / about descriptor |
| `body-md` | Staff-Regular | 16px | 400 | 1.50 | 0 | Standard body copy, nav links, footer |
| `body-sm` | Staff-Light | 14px | 300 | 1.50 | 0 | Captions, metadata |
| `button` | Staff-Regular | 16px | 400 | 1.00 | 0 | CTA labels ("CONTACT ME", "HIT ME UP !") |
| `nav-link` | Staff-Regular | 16px | 400 | 1.00 | 0 | Navigation items |
| `caption` | Staff-Regular | 14px | 400 | 1.20 | 0 | Slide counters ("1/5"), metadata |
| `label-uppercase` | Staff-Medium | 16px | 400 | 1.00 | 0 | Category labels, client names (uppercase) |

### Principles

- **Scale contrast is the hierarchy** — display sizes jump dramatically (16px body → 121px+ display), creating a bold editorial rhythm. No subtle size increments.
- **Weight strategy** — Voyage uses Light (300) for elegance at large scale, Bold (700) only for maximum impact. Staff uses Regular for almost everything, reserving Medium for labels/emphasized copy.
- **Tracking** — letter-spacing is consistently `normal` (0) across all roles; the font metrics handle spacing intrinsically.
- **Uppercase** — used selectively as a semantic marker (client names, nav section labels, CTA text), not as a decorative default.
- **Line height at display sizes** — sub-1.0 line heights (0.73–0.80) at large scale create tight, poster-like stacking. Body text uses standard 1.5.
- **Font loading** — Voyage and Staff are custom web fonts hosted with the site. KobeWeb is for Japanese-language content. If substituting, use Georgia as the closest web-safe Voyage equivalent.

---

## Layout

### Spacing System

Base unit: 8px. Named scale:

| Token | Value | Use |
|-------|-------|-----|
| `xxs` | 4px | Micro gaps, fine-tuning |
| `xs` | 8px | Tight spacing, inline elements |
| `sm` | 16px | Default nav padding, small gutters |
| `md` | 24px | Standard element padding |
| `lg` | 32px | Card padding, comfortable content spacing |
| `xl` | 48px | Section internal padding |
| `xxl` | 80px | Large section gaps |
| `section` | 160px | Full section vertical padding — the signature breathing room |

### Grid and Container

- **Max width** — No explicit container cap observed; content fills the viewport width with responsive margins (Bootstrap 4/5 grid used internally — `.container`, `.row`, `.col-*`)
- **Breakpoints** — `xs: 0`, `sm: 576px`, `md: 812px`, `lg: 992px`, `xl: 1200px`, `xlg: 1500px`
- **Column count** — 12-column Bootstrap grid; hero sections typically full-width
- **Project cards** — Displayed as scrolling carousel (horizontal scroll) at desktop, stacked vertically at mobile

### Whitespace Philosophy

ChungiYoo treats whitespace as a primary design element. Section padding of 160px creates a slow, contemplative scroll rhythm that mirrors the pacing of a physical art book. Large typography anchors sections while generous negative space lets imagery breathe. The lack of visible card boxes, borders, or separators means the canvas color itself becomes the unifying field.

---

## Elevation and Depth

### Levels Table

| Level | Treatment | Example use |
|-------|-----------|-------------|
| 0 | No shadow, flat | All standard content — body, cards, nav |
| 1 | Transparent overlay `rgba(222, 222, 222, 0.75)` | Scroll-triggered overlay effects |
| 2 | `rgba(0, 0, 0, 0.5)` dark tint | Decorative punctuation, ornamental characters |

### Shadow Philosophy

ChungiYoo uses **zero shadows** throughout. Depth is created entirely through:
- **Scale contrast** — massive type next to small type creates foreground/background perception
- **Color layering** — pink, blue, and yellow accent patches appear in front of the warm canvas
- **Image masking** — portfolio images use `overflow: hidden` with `border-radius: 20px` to create clean containment
- **Z-axis through typography** — display type at 200px+ visually "presses forward" from the page surface

No `box-shadow`, no `drop-shadow`, no gradient overlays on interactive elements.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `none` | 0px | Navigation, body text areas, buttons, most UI |
| `sm` | 4px | Minor rounding, form inputs if present |
| `md` | 12px | Internal accent elements |
| `lg` | 20px | Portfolio/project card image containers (primary use) |
| `xl` | 32px | Large image frames, full-bleed blocks |
| `pill` | 9999px | Reserved for badges or pill elements if introduced |

The design uses a **binary rounding strategy**: most UI is completely flat (0px), while image containers use 20px to create a soft, editorial-gallery feel. There is no middle ground — this creates strong visual contrast between UI elements and creative assets.

### Photography and Imagery

- **Aspect ratios** — Project cards appear to use roughly 3:4 or 4:3 portrait orientations for illustration previews
- **Crop treatment** — Images are clipped to `border-radius: 20px` containers with `overflow: hidden`
- **Fill mode** — `object-fit: cover` (inferred from full-bleed image display)
- **Border** — No border on images; the radius alone defines the frame

---

## Components

### Buttons

**Ghost / CTA Link (primary pattern):**
- Text-only, no background, no border
- Font: Staff-Regular, 16px, uppercase for secondary CTAs ("CONTACT ME", "HIT ME UP !")
- Color: `#000000` default, `#D73234` for accent CTAs
- Padding: `0` (pure text link pattern)
- Hover: color shift / underline (animated)

**No traditional button components** (filled, rounded) are used on the site — all CTAs are either text links or anchor elements styled as bold typographic elements.

### Project Cards

- Container: transparent background, no border
- Image container: `border-radius: 20px`, `overflow: hidden`
- Label: Staff-Regular, 16.8px, `#000000`, positioned below image
- Hover: scale transform on image (inferred from portfolio pattern)
- Padding: `0` on the card wrapper itself; `32px` on info section

### Navigation

- **Top nav** — Fixed position, transparent background (no fill until scroll), `padding: 16px`
- **Logo** — Brand mark link in top-left, transparent background, 16px padding
- **Mobile menu** — Hamburger button (two horizontal lines in `#000000`), `24px` width; opens full-screen overlay navigation
- **Menu items** — Staff-Regular, 16px, `#000000`, uppercase text-transform
- **Social links** — Behance (B), Instagram icon links in footer, displayed vertically with animated letter-split effect

### Footer

- Background: transparent (inherits canvas `#F3EEE8`)
- Headline: Voyage-Regular, ~135px, `#000000` — "Say a simple / Hello!"
- CTA: "CONTACT ME" in Staff-Regular, 16px, `#000000`
- Social icons: red (`#D73234`) animated letter strings for BEHANCE, INSTAGRAM
- Brand tagline: "chungi & you" in Voyage-Regular, red accent

---

## Do's and Don'ts

**Do:**
- Use Voyage font at extreme scale (75px+) for all primary display headings — the large scale is intentional
- Maintain the warm canvas (`#F3EEE8`) as the universal page background; never substitute with pure white for body pages
- Apply the red accent (`#D73234`) sparingly — only for brand identity text, client links, and single focal CTAs
- Use `border-radius: 20px` consistently on all portfolio image containers
- Let whitespace do the work — section padding of 160px is a feature, not excess
- Use uppercase for label-style text (category names, client names, secondary CTAs)
- Keep navigation transparent by default; only add background on scroll or overlay states
- Apply the pastel accents (pink, blue, yellow) as typographic color, not background fills

**Don't:**
- Don't add `box-shadow` to any element — the design is intentionally flat
- Don't use border-radius larger than 20px on image containers, or apply rounding to buttons/nav
- Don't use white (`#FFFFFF`) as the page background — the warm biscuit tone is fundamental to the brand feel
- Don't use Voyage at body text sizes (below 48px) — it loses its impact and becomes hard to read
- Don't introduce more than 3 accent colors on a single screen — pink, blue, and red are the maximum simultaneous palette
- Don't add visible borders to the navigation bar — the transparent-to-canvas transition must be seamless
- Don't use font-weight 700 (bold) in Staff — only Voyage Bold is used for extreme display impact
- Don't use letter-spacing modifications — all fonts are set at `normal` tracking intentionally

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| xs | 0px | Mobile baseline — single column, stacked layout |
| sm | 576px | Minor layout adjustments |
| md | 812px | Two-column where applicable; nav transitions; typography scale shifts |
| lg | 992px | Full desktop layout activated |
| xl | 1200px | Wide breakpoint for large displays |
| xlg | 1500px | Extra-wide screens |

### Touch Targets

- All navigation links: minimum 44px height (nav padding 16px + 16px line height)
- Hamburger menu button: 24px icon within adequate touch target area
- Project card links: full card area is tappable

### Collapsing Strategy

- **Navigation** — Desktop: transparent fixed header with text links. Mobile: hamburger menu triggers full-screen overlay with large navigation links
- **Typography** — Display sizes scale down significantly at mobile breakpoints. Homepage h2 drops from 121px (desktop) to approximately 48–64px at mobile
- **Project cards** — Desktop: horizontal scrolling carousel showing multiple cards. Mobile: single card vertical stack, swipe navigation
- **Grid** — Bootstrap 4/5 grid collapses from multi-column to single column at `md` breakpoint (812px)
- **Section padding** — `section` padding (160px) is reduced at mobile via Bootstrap's `py-4 py-md-6` pattern (approx 32px → 160px)

### Image Behavior

- Portfolio images maintain aspect ratio within their `border-radius: 20px` clipped containers
- Images use `overflow: hidden` for reliable clip at all viewport sizes
- `object-fit: cover` assumed for full-bleed card imagery

---

## Agent Prompt Guide

### Quick Color Reference

- Primary / CTA red: `#D73234`
- Canvas (page background): `#F3EEE8`
- Ink (all text): `#000000`
- Muted / ornamental: `#00000080`
- Surface (warm gray): `#E3DACD`
- Hairline / borders: `#D1CBC4`
- Accent pink: `#F8C1CA`
- Accent blue: `#88B2C4`
- Accent yellow: `#FFE699`
- White: `#FFFFFF`
- Red active: `#B52020`

### Example Component Prompts

**Hero Section:**
"Create a full-viewport hero on `#F3EEE8` background. Main headline in Voyage-Regular 121px, weight 300, line-height 1.1, color `#000000`. Secondary display word in Voyage-Bold 215px, weight 700, line-height 0.73, color `#F8C1CA`. No background elements, no shadows. Generous vertical padding of 160px top and bottom."

**About Intro Card:**
"Create an about section on `#F3EEE8`. Name headline 'Hi! I'm Chungi,' in Voyage-Regular 75px, color `#F8C1CA`. Tagline in Staff-Medium 24px, `#000000`, uppercase, padding-right 128px. Bracket ornaments in Staff-Light 87px, color `rgba(0,0,0,0.5)`. No card border, no shadow."

**Project Card:**
"Create a portfolio card on transparent background. Image container: `border-radius: 20px`, `overflow: hidden`, no border, no shadow. Image fills container with `object-fit: cover`. Card label below in Staff-Regular 16.8px, `#000000`. No padding on card wrapper."

**Footer CTA:**
"Create a footer on `#F3EEE8` background. Large headline 'Say a simple / Hello!' in Voyage-Regular 135px, weight 300, line-height 0.80, `#000000`. CTA link 'CONTACT ME' in Staff-Regular 16px, `#000000`. Brand mark 'chungi & you' in Voyage-Regular, `#D73234`. Social links (BEHANCE, INSTAGRAM) in Staff-Regular 16px, `#D73234`, uppercase, vertical letter-split display."

**Navigation:**
"Fixed transparent header, no background color. Logo link left-aligned, 16px padding. Hamburger menu right-aligned — two horizontal lines in `#000000`, 24px width. Nav links in Staff-Regular 16px, `#000000`. No nav border, no background fill."

**Button / CTA Link:**
"Primary CTA: text-only link in Staff-Regular 16px, `#D73234`, uppercase, no background, no border, no radius. Secondary CTA: Staff-Regular 16px, `#000000`, uppercase. Neither use box model button styling — they are pure typographic CTAs."

### Iteration Guide

1. Start with `#F3EEE8` as the page background — it is the single most important brand signal
2. Load Voyage (Regular and Bold) and Staff (Light, Regular, Medium) as custom web fonts — system serif/sans substitutes will degrade the brand significantly
3. Use extreme type size contrasts — display at 100px+ paired with body at 16px, no intermediate sizes
4. Apply the red accent (`#D73234`) only once or twice per screen for maximum visual impact
5. Avoid all shadows, borders, and elevation — the design is intentionally flat
6. Use `border-radius: 20px` on image containers only — never on text or navigation elements
7. Respect section padding of 160px — it is a deliberate pacing decision, not wasted space
8. Test color accessibility: `#000000` on `#F3EEE8` passes WCAG AA; accent colors are decorative, not functional contrast pairs
