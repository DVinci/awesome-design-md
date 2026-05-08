---
version: alpha
name: Xbox
description: Xbox's digital interface is a cinematic dark-mode experience built around impact typography, electric green, and game artwork as the primary visual medium. SegoeProBlack headlines with tight negative letter-spacing dominate product pages, while the signature Xbox Green (#107C10) and Neon Lime (#9BF00B) punctuate calls-to-action against near-black surfaces. A sharp, near-zero-radius geometry reinforces the platform's identity throughout — angular, powerful, and unapologetically gaming-first.

colors:
  # Brand
  primary: "#107C10"
  primary-active: "#007738"
  on-primary: "#FFFFFF"
  accent-lime: "#9BF00B"
  accent-yellow: "#FFD800"
  link: "#0078D4"

  # Dark surfaces (primary brand experience)
  canvas: "#000000"
  surface: "#201F24"
  surface-mid: "#171717"
  surface-raised: "#2F2F2F"

  # Light surfaces (catalog & utility pages)
  canvas-light: "#FFFFFF"
  surface-light: "#F2F2F2"
  surface-light-raised: "#EBEBEB"

  # Text — dark mode
  ink: "#FFFFFF"
  body: "#D2D2D2"
  muted: "#999999"

  # Text — light mode
  ink-light: "#000000"
  muted-light: "#616161"

  # Borders
  hairline: "#2F2F2F"
  hairline-light: "#D8DADF"
  hairline-input: "#000000B3"

  # Semantic
  semantic-success: "#107C10"
  semantic-warning: "#FFB900"
  semantic-error: "#DC3545"

typography:
  display-xl:
    fontFamily: 'SegoeProBlack, "Segoe UI", SegoeUI, Helvetica, Arial, sans-serif'
    fontSize: 62px
    fontWeight: 700
    lineHeight: 0.97
    letterSpacing: -0.62px

  display-lg:
    fontFamily: 'SegoeProBlack, "Segoe UI", SegoeUI, Helvetica, Arial, sans-serif'
    fontSize: 46px
    fontWeight: 700
    lineHeight: 1.22
    letterSpacing: -0.46px

  display-md:
    fontFamily: '"Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: 30px
    fontWeight: 700
    lineHeight: 1.13
    letterSpacing: -0.3px

  title-lg:
    fontFamily: '"Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.29
    letterSpacing: 0px

  title-md:
    fontFamily: '"Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.17
    letterSpacing: 0px

  body-lg:
    fontFamily: '"Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0px

  body-md:
    fontFamily: '"Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px

  body-sm:
    fontFamily: '"Segoe UI", SegoeUI, Arial, sans-serif'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.23
    letterSpacing: 0px

  button:
    fontFamily: '"Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.43
    letterSpacing: 0px

  nav-link:
    fontFamily: '"Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px

  caption:
    fontFamily: '"Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px

  badge:
    fontFamily: '"Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.975px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px

rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 8px
  xl: 12px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    border: "none"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    border: "1px solid {colors.ink}"

  button-secondary-light:
    backgroundColor: "transparent"
    textColor: "{colors.ink-light}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    border: "1px solid {colors.hairline-light}"

  card-base:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    border: "none"
    shadow: "none"

  card-game:
    backgroundColor: "{colors.surface-mid}"
    rounded: "{rounded.none}"
    padding: "0px"
    border: "none"
    shadow: "0px 1px 2px 0px rgba(0,0,0,0.11), 0px 3px 7px 0px rgba(0,0,0,0.13)"

  text-input:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink-light}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "7px 10px"
    border: "1px solid {colors.hairline-input}"

  text-input-focused:
    border: "1px solid {colors.primary}"

  badge-new:
    backgroundColor: "{colors.accent-yellow}"
    textColor: "{colors.ink-light}"
    typography: "{typography.badge}"
    rounded: "{rounded.none}"
    padding: "0px 7px"
    border: "none"

  top-nav:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink-light}"
    typography: "{typography.nav-link}"
    padding: "0px 64px"
    border: "none"
---

# Xbox Design System

## Overview

Xbox's website is built as a cinematic showcase, not a utility. Product pages open with near-fullscreen dark hero sections — SegoeProBlack letterforms so tight they almost touch, white text glowing against `#000000` or `#171717` backgrounds, key specs punctuated by the signature Xbox Green (`#107C10`). The overall feel is a magazine spread at gaming resolution: high-contrast, impactful, fast to scan. Two clearly distinct sub-surfaces exist — the dark brand experience on game and console pages, and a lighter catalog mode for the games browse and support sections.

The design language inherits Microsoft's Fluent Design thinking but pushes it toward entertainment: flat geometry (0–4px radius everywhere), no decorative shadows beyond game card lift, and a colour system that uses black as a prestige signal rather than a default fallback. Xbox Green is the single interactive anchor — it appears on every primary CTA and checklist icon. The neon Neon Lime (`#9BF00B`) is used sparingly for Game Pass promotional accent and never for interactive elements directly.

**Key characteristics:**
- Dual-mode surfaces: dark (`#000000` / `#201F24`) for brand/product, light (`#FFFFFF` / `#F2F2F2`) for catalog/utility
- Two-font system: SegoeProBlack for impact product display, Segoe UI for all UI and body
- Tight negative letter-spacing on all display text (`-0.01em` convention)
- Sharp geometry — `border-radius: 0px` on game tiles and inputs, 4px on buttons
- Xbox Green (`#107C10`) as the sole CTA colour; Neon Lime (`#9BF00B`) for Game Pass marketing only
- `#FFD800` rectangular badges (0px radius) with all-caps tight tracking for "NEW UPDATE" labels
- Game card art bleeds to all edges — no padding, no rounding, image IS the component
- Nav sits on white even on dark-mode pages, acting as a persistent light-mode anchor

---

## Colors

### Brand & Accent
| Token | Hex | Use |
| ----- | --- | --- |
| `primary` | `#107C10` | All primary CTA buttons, checklist icons, active states |
| `primary-active` | `#007738` | Button hover/pressed (from CSS var `--colorBrandBackgroundHover`) |
| `on-primary` | `#FFFFFF` | Text/icons on Xbox Green backgrounds |
| `accent-lime` | `#9BF00B` | Game Pass neon accent, promotional highlights — not for interactive elements |
| `accent-yellow` | `#FFD800` | "NEW UPDATE" and alert badges (from CSS var `--pd-hero-alert-bg`) |
| `link` | `#0078D4` | Hyperlinks in light-mode contexts (Fluent UI blue) |

### Dark Surfaces (primary brand experience)
| Token | Hex | Use |
| ----- | --- | --- |
| `canvas` | `#000000` | Primary dark brand canvas — hero sections, full-page product backgrounds |
| `surface` | `#201F24` | Elevated dark surface — Game Pass card sections |
| `surface-mid` | `#171717` | Mid-dark hero backgrounds (CSS var `--pd-hero-bg`) |
| `surface-raised` | `#2F2F2F` | Raised dark panels, tooltips on dark backgrounds |

### Light Surfaces (catalog & utility)
| Token | Hex | Use |
| ----- | --- | --- |
| `canvas-light` | `#FFFFFF` | Light-mode page backgrounds, nav background |
| `surface-light` | `#F2F2F2` | Footer, subtle section dividers on light pages |
| `surface-light-raised` | `#EBEBEB` | Hovered list items, light card surfaces |

### Text
| Token | Hex | Use |
| ----- | --- | --- |
| `ink` | `#FFFFFF` | Primary text on dark surfaces |
| `body` | `#D2D2D2` | Secondary/body text on dark (CSS var `--info`) |
| `muted` | `#999999` | Muted/metadata text on dark |
| `ink-light` | `#000000` | Primary text on light surfaces |
| `muted-light` | `#616161` | Muted text on light (footer, secondary labels) |

### Borders & Semantic
| Token | Hex | Use |
| ----- | --- | --- |
| `hairline` | `#2F2F2F` | Borders on dark surfaces (CSS var `--gray-dark`) |
| `hairline-light` | `#D8DADF` | Borders on light surfaces |
| `hairline-input` | `#000000B3` | Input field border — `rgba(0,0,0,0.7)` as 8-digit hex |
| `semantic-success` | `#107C10` | Success states (shares with primary) |
| `semantic-warning` | `#FFB900` | Warning (CSS var `--warning`) |
| `semantic-error` | `#DC3545` | Error/destructive (CSS var `--danger`) |

---

## Typography

### Font Families
**SegoeProBlack** — Microsoft's proprietary ultra-heavy display font. Used exclusively for product hero titles and console names. Not available via CDN; substitute with `"Segoe UI"` at weight 900, or `"Arial Black"` for web-safe fallback. Stack: `SegoeProBlack, "Segoe UI", SegoeUI, Helvetica, Arial, sans-serif`.

**Segoe UI** — Microsoft's primary UI typeface, system font on Windows. Stack: `"Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif`. Available via Windows system font or approximate with `Inter` or `system-ui` on non-Windows platforms.

### Hierarchy Table
| Role | Size | Weight | Line Height | Letter Spacing | Use |
| ---- | ---- | ------ | ----------- | -------------- | --- |
| `display-xl` | 62px | 700 | 0.97 | -0.62px | Console/product hero (h1 on dark hero) |
| `display-lg` | 46px | 700 | 1.22 | -0.46px | Large promotional block headings |
| `display-md` | 30px | 700 | 1.13 | -0.3px | Section promo headings (h2 on hero) |
| `title-lg` | 28px | 600 | 1.29 | 0 | Standard section titles (h3) |
| `title-md` | 24px | 700 | 1.17 | 0 | Card/feature titles |
| `body-lg` | 20px | 400 | 1.2 | 0 | Lead/subtitle text, hero subheadlines |
| `body-md` | 16px | 400 | 1.5 | 0 | Default body copy, nav items |
| `body-sm` | 13px | 400 | 1.23 | 0 | Fine print, cookie notices |
| `button` | 14px | 600 | 1.43 | 0 | All button labels |
| `nav-link` | 16px | 400 | 1.5 | 0 | Top navigation links |
| `caption` | 11px | 400 | 1.5 | 0 | Footer links, metadata |
| `badge` | 13px | 700 | 1.4 | 0.975px | "NEW UPDATE" badge labels — always uppercase |

### Principles
- **Negative tracking is mandatory for all display sizes** — from -0.62px at 62px down to -0.3px at 30px. Never use zero tracking on SegoeProBlack text.
- **Weight cliff:** body is 400, UI labels and buttons jump directly to 600/700. No 500 weight used.
- **SegoeProBlack is for game/product identity only** — never use it for UI elements, navigation, or body copy.
- **Windows substitution:** On non-Windows systems, Segoe UI degrades to Helvetica Neue/Arial. For closest match on web, load `Inter` or use `system-ui`.

---

## Layout

### Spacing System
Base unit: **8px**. A 4px micro-unit (`xs`) handles tight icon gaps.

| Token | Value | Use |
| ----- | ----- | --- |
| `xs` | 4px | Icon-to-label gaps, badge insets |
| `sm` | 8px | List item spacing, tight padding |
| `md` | 16px | Default component padding, form field gaps |
| `lg` | 24px | Card padding, button horizontal inset |
| `xl` | 32px | Section-level internal padding |
| `xxl` | 48px | Large block spacing, game pass feature card padding |
| `section` | 80px | Full section vertical rhythm |

### Grid & Container
- **Breakpoints** (custom): xs 0px, sm 540px, md 860px, lg 1084px, xl 1400px
- **Max container:** 1400px at xl — wider than Bootstrap defaults, accommodating game box art grids
- **Nav padding:** 0px 64px at desktop — expansive horizontal breathing room
- **Game grids:** typically 4–6 columns desktop, 2 columns tablet, 1–2 mobile
- **Hero sections:** 100vw width, 60–100vh height with full-bleed game/product photography

### Whitespace Philosophy
Xbox uses aggressive section separation — heroes eat the full viewport before any UI appears below. Between content sections, 80px vertical rhythm. Within sections, content areas often have minimal internal padding to let cover art fill its container. The result feels like a high-production game trailer, not a product page.

---

## Elevation & Depth

| Level | Treatment | Example use |
| ----- | --------- | ----------- |
| Flat | No shadow, background colour only | Hero sections, dark content panels |
| Card lift | `box-shadow: 0px 1px 2px rgba(0,0,0,.11), 0px 3px 7px rgba(0,0,0,.13)` | Game tiles on light catalog page |
| Video overlay | Semi-opaque dark panel (`rgba(0,0,0,.6)`) | Video play button on hero imagery |

### Shadow Philosophy
Shadows are nearly absent. The primary depth tool is dramatic background colour contrast — pure black hero panels against a white nav, dark `#201F24` surfaces against deeper `#000000` areas. Game cards on the light browse page get a soft two-layer shadow for lift. Product hero sections have no shadow — the contrast of dark-on-dark creates its own depth through proximity and scale.

---

## Shapes

### Border Radius Scale
| Token | Value | Use |
| ----- | ----- | --- |
| `none` | 0px | Game tiles, search inputs, badge labels — the dominant radius |
| `sm` | 2px | Micro-rounding on select/dropdown elements |
| `md` | 4px | CTA buttons, Fluent UI interactive controls |
| `lg` | 8px | Larger cards and modal overlays |
| `xl` | 12px | Promotional feature panels |
| `pill` | 9999px | Rare — some filter chips and toggle switches |

### Photography & Imagery
- **Game box art:** 2:3 portrait ratio (standard game case proportion), 0px border-radius, bleeds edge-to-edge in tile
- **Hero photography:** 16:9 or wider, full viewport width, `object-fit: cover`, dark scrim for text legibility
- **Console photography:** centered subject on dark background, no crop — product photography standard
- **Game Pass art:** vivid, often neon-tinged library artwork — high-saturation images are intentional brand contrast

---

## Components

### Buttons
All buttons use Segoe UI 14px/600, 4px border-radius, 12px 24px padding.

**Primary** — `#107C10` fill, white text. The sole CTA colour across the entire site.
**Primary active** — `#007738` on hover/press (CSS var confirmed).
**Secondary (dark context)** — transparent fill, white text, 1px white border. Used on dark hero sections alongside primary.
**Secondary (light context)** — transparent fill, `#000000` text, 1px `#D8DADF` border. Used on catalog/utility pages.

### Cards
**Card-base** — `#201F24` background, 4px radius, no border, no shadow. Dark-mode default for feature and info cards.

**Card-game** — dark background (`#171717`), 0px radius, game art bleeds edge-to-edge, two-layer soft shadow for lift on light backgrounds. Text metadata displayed below the art thumbnail.

### Inputs & Forms
**Text input** — white background, 0px radius (sharp square), 1px `rgba(0,0,0,0.7)` border, 7px 10px padding, Segoe UI 16px/400. Fully sharp — no rounding anywhere.
**Focused state** — border changes to 1px solid `#107C10`.

### Navigation
**Top nav** — white background, full-width, 0px 64px horizontal padding. Persists as light on dark-mode pages — creates deliberate contrast. Nav items: Segoe UI 16px/400, `#000000`, no underline.

### Badges & Tags
**Badge-new** — `#FFD800` background, `#000000` text, 0px radius (rectangular block), Segoe UI 13px/700, 0.975px letter-spacing (all-caps), 0px 7px padding. Placed over game tiles to announce "NEW UPDATE" or "NEW GAME".

---

## Do's and Don'ts

**Do:**
- Use SegoeProBlack with tight negative letter-spacing (`-0.01em` ratio) for all hero product titles
- Keep game tile art at 0px radius — no rounding on game imagery under any circumstance
- Use `#107C10` exclusively for interactive/primary CTA elements; reserve `#9BF00B` for Game Pass promotional contexts only
- Apply a dark video/photo overlay (`rgba(0,0,0,0.6)`) before placing white text on hero imagery
- Let photography fill its container completely — Xbox design is image-first, padding-last
- Match button radius to context: 4px for standard, 0px for badge/label elements
- Use `#FFD800` rectangular badges only for time-sensitive labels ("NEW", "SALE") — not for taxonomy

**Don't:**
- Don't round game tile images — 0px radius on all game box art is non-negotiable
- Don't use SegoeProBlack for body copy, UI labels, or anything below 24px
- Don't add box-shadows to hero sections or dark-surface cards
- Don't use `#9BF00B` as a button or interactive colour — it's a marketing accent only
- Don't mix light-mode and dark-mode text colours in the same section context
- Don't use the letter-spacing from badge (0.975px) on anything except badge/tag labels
- Don't use `#FFB900` or `#DC3545` outside of their semantic warning/error roles

---

## Responsive Behavior

### Breakpoints
| Breakpoint | Width | Key Changes |
| ---------- | ----- | ----------- |
| xs (mobile) | 0–539px | 1-column layout, hamburger nav, hero height 50vh |
| sm | 540–859px | 2-column game grids, nav still collapsed |
| md (tablet) | 860–1083px | Full desktop nav visible, 3-column game grids |
| lg | 1084–1399px | 4-column game grids, full nav with hover menus |
| xl (wide) | 1400px+ | Container caps at 1400px, centred |

### Touch Targets
- All buttons: minimum 44px tall (12px 24px padding on 14px/1.43 line-height ≈ 40px — hero CTAs use larger padding)
- Nav links: full-height nav row as touch target
- Game tiles: tap area is the full tile image

### Collapsing Strategy
- **Navigation:** hamburger below md (860px); full horizontal nav at md+
- **Hero sections:** maintain full-bleed at all sizes; SegoeProBlack headline scales down from 62px to 36px on mobile
- **Game grids:** 4-column → 3-column → 2-column → 1-column as breakpoints descend
- **Dark/light mode:** dark product pages remain dark on mobile; catalog pages remain light

### Image Behavior
- Game tiles: `object-fit: cover`, `aspect-ratio: 2/3`, 0px radius at all sizes
- Hero images: `object-fit: cover`, 100vw width, height adjusts from 100vh (desktop) to 50vh (mobile)
- Console product photography: `object-fit: contain` on dark background, centered

---

## Agent Prompt Guide

### Quick Color Reference
- Primary (Xbox Green): `#107C10`
- Primary active: `#007738`
- Canvas (dark): `#000000`
- Surface (dark elevated): `#201F24`
- Surface mid (game hero): `#171717`
- Ink (dark mode text): `#FFFFFF`
- Body text (dark): `#D2D2D2`
- Canvas light: `#FFFFFF`
- Accent Lime (Game Pass): `#9BF00B`
- Badge Yellow: `#FFD800`

### Example Component Prompts

**Dark Hero Section:**
"Create a full-bleed hero on `#000000` background with a high-contrast game or product photograph as a background layer (dark scrim `rgba(0,0,0,0.5)`). Headline: SegoeProBlack 62px, weight 700, white, line-height 0.97, letter-spacing -0.62px. Subheadline: Segoe UI 20px, weight 400, `#D2D2D2`. CTA button: `#107C10` background, border-radius 4px, 12px 24px padding, Segoe UI 14px/600 white."

**Game Tile Card:**
"Create a game tile: 2:3 aspect ratio, 0px border-radius, game artwork fills full container (`object-fit: cover`). On hover, lift with `box-shadow: 0px 1px 2px rgba(0,0,0,.11), 0px 3px 7px rgba(0,0,0,.13)`. Below art: game title Segoe UI 14px/600 `#000000`, subtitle `#616161`. Optional badge: `#FFD800` rectangle, 0px radius, Segoe UI 13px/700, 0.975px tracking, all-caps, black text."

**Button Set (dark context):**
"Primary button: `#107C10` background, border-radius 4px, 12px 24px padding, Segoe UI 14px/600 white, no border. Secondary button: transparent, 1px solid white border, same radius and padding, white text. Both buttons square-cornered — 4px maximum."

### Iteration Guide
1. Start with `#000000` canvas for product/game pages; `#FFFFFF` only for catalog/browse
2. Load Segoe UI as system font on Windows; substitute `Inter` or `system-ui` on other platforms
3. Apply negative letter-spacing to all SegoeProBlack text — it looks wrong without it
4. Keep all game imagery at exactly 0px border-radius — rounding breaks the brand identity
5. Use `#107C10` for every interactive element; never use `#9BF00B` as a clickable colour
