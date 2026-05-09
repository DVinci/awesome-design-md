---
version: alpha
name: Unreal Engine
description: |
  Unreal Engine's design system is a cinematic dark-canvas toolkit built for the world's most advanced real-time 3D creation platform. Deep near-black backgrounds (#121212) set a stage-like foundation, while a vivid electric blue (#26BBFF) accent drives all primary actions and interactive states. Typography is split across two families: Inter for body and UI, and Inter Tight for display headings — both used with negative letter-spacing at large sizes for a confident, engineered feel. The system is fully dark-mode-native with a layered elevation model (three neutral surface levels) and a rich semantic palette derived from Epic Games' internal design token architecture. Visual personality is dense, precise, and technical — an enterprise creative tool that communicates power without decoration.

colors:
  primary: "#26BBFF"
  primary-active: "#72D3FF"
  primary-press: "#26BBFF"
  ink: "#FFFFFF"
  body: "#FFFFFFA6"
  muted: "#AAAAAE"
  canvas: "#121212"
  surface: "#18181C"
  surface-mid: "#202024"
  surface-high: "#28282C"
  surface-menu: "#303034"
  on-dark: "#FFFFFF"
  on-primary: "#000000"
  hairline: "#FFFFFF26"
  hairline-subtle: "#FFFFFF1A"
  hairline-default: "#FFFFFF59"
  accent-lime: "#A9D34F"
  accent-yellow: "#FFC229"
  accent-cyan: "#43DAC2"
  accent-purple: "#BE3DFF"
  accent-red: "#FF3F56"
  semantic-error: "#FF3F56"
  semantic-error-hover: "#FF8291"
  semantic-success: "#45C761"
  semantic-warning: "#FFC229"
  semantic-info: "#26BBFF"

typography:
  display-xl:
    fontFamily: "\"Inter Tight\", sans-serif"
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.035em
  display-lg:
    fontFamily: "\"Inter Tight\", sans-serif"
    fontSize: 52px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.025em
  display-md:
    fontFamily: "\"Inter Tight\", sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.02em
  title-lg:
    fontFamily: "\"Inter Tight\", sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.015em
  title-md:
    fontFamily: "\"Inter Tight\", sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.01em
  title-sm:
    fontFamily: "\"Inter Tight\", sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.005em
  body-lg:
    fontFamily: "Inter, \"Inter Fallback\", sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, \"Inter Fallback\", sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, \"Inter Fallback\", sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  button:
    fontFamily: "Inter, \"Inter Fallback\", sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0.02em
  nav-link:
    fontFamily: "Inter, \"Inter Fallback\", sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  caption:
    fontFamily: "Inter, \"Inter Fallback\", sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.01em
  code:
    fontFamily: "\"Recursive Mono\", \"Fira Code\", monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
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
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 24px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    border: "none"

  button-primary-disabled:
    backgroundColor: "{colors.surface-menu}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    border: "none"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    border: "1px solid {colors.hairline-default}"

  button-secondary-active:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    border: "1px solid {colors.ink}"

  button-secondary-disabled:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    border: "1px solid {colors.hairline}"

  card-base:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"

  card-elevated:
    backgroundColor: "{colors.surface-mid}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    border: "none"

  badge:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
    border: "1px solid {colors.hairline-default}"

  badge-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
    border: "none"

  text-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
    border: "1px solid {colors.hairline}"

  text-input-focused:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
    border: "2px solid {colors.ink}"

  text-input-disabled:
    backgroundColor: "{colors.surface-menu}"
    textColor: "{colors.muted}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
    border: "1px solid {colors.hairline}"

  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    height: "72px"
    border: "0 0 1px 0 solid {colors.hairline}"
---

# Unreal Engine Design System

## Overview

Unreal Engine is Epic Games' professional-grade real-time 3D creation platform — used in games, film, architecture, automotive design, and live events. Its design system reflects this industrial purpose: every surface is dark, every accent is deliberate, and every pixel communicates precision and power. The UI is built on a layered dark canvas that mirrors the engine's cinematic rendering aesthetic, giving developers and creators an immersive workspace that feels native to the 3D content they produce.

The system is built from a comprehensive internal token architecture (named `--color-fill-*`, `--color-text-*`, `--color-background-*`) that separates primitive palette values from semantic roles. Two font families carry all the visual weight: **Inter Tight** for structural headings (tight tracking, heavy weight, engineered authority) and **Inter** for all body and UI text (neutral, readable, precise). Buttons are compact with sharp-ish 8px radius; interactions favor clarity over decoration. There are no heavy drop shadows — depth is communicated through background-color stepping across six neutral dark tones.

Key visual characteristics:
- **Color**: Near-black canvas (#121212) with electric blue (#26BBFF) as the sole primary CTA accent
- **Typography**: Inter Tight for all headings with negative letter-spacing; Inter for body; Recursive Mono for code
- **Spacing**: 8px base grid, generously padded sections (80px vertical)
- **Elevation**: Three-tier surface system (#18181C / #202024 / #28282C) with no shadows at lower levels
- **Borders**: Translucent white hairlines (rgba(255,255,255,0.15)) for all card and divider edges
- **Semantic accents**: Full palette (lime, cyan, amber, purple, red, etc.) for data visualization and badges
- **Buttons**: Compact 8px×16px padding, 8px border-radius, 14px/500-weight Inter
- **Differentiator**: Unlike game-engine UIs that lean cinematic/fantasy, UE5 goes precision-industrial — dark but methodical, technical but modern

## Colors

### Brand & Accent

| Token | Hex | Use |
|-------|-----|-----|
| `primary` | `#26BBFF` | Primary CTA buttons, links, icons, active states, selection highlight |
| `primary-active` | `#72D3FF` | Hover/active state for primary interactive elements |
| `accent-lime` | `#A9D34F` | Lime accent for tags, feature callouts |
| `accent-yellow` | `#FFC229` | Warning states, marketplace badges |
| `accent-cyan` | `#43DAC2` | Data visualization, secondary highlights |
| `accent-purple` | `#BE3DFF` | Premium features, special callouts |
| `accent-red` | `#FF3F56` | Danger/critical actions |

### Surface

| Token | Hex | Use |
|-------|-----|-----|
| `canvas` | `#121212` | Page background, base layer |
| `surface` | `#18181C` | Cards, panels, elevated content areas |
| `surface-mid` | `#202024` | Second-level cards, dropdowns, tooltips |
| `surface-high` | `#28282C` | Selected states, focused rows |
| `surface-menu` | `#303034` | Navigation menus, popups, modals |

### Text

| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#FFFFFF` | Primary headings, labels, high-contrast text |
| `body` | `#FFFFFFA6` | Body paragraphs, secondary labels (65% opacity white) |
| `muted` | `#AAAAAE` | Placeholder text, disabled labels, metadata |
| `on-dark` | `#FFFFFF` | Text on dark surfaces (same as ink — alias) |
| `on-primary` | `#000000` | Text/icons on primary (#26BBFF) backgrounds |

### Semantic

| Token | Hex | Use |
|-------|-----|-----|
| `semantic-error` | `#FF3F56` | Error borders, destructive action buttons |
| `semantic-error-hover` | `#FF8291` | Error hover states |
| `semantic-success` | `#45C761` | Success icons, confirmation banners |
| `semantic-warning` | `#FFC229` | Warning notices, caution banners |
| `semantic-info` | `#26BBFF` | Informational banners (same as primary) |

## Typography

### Font Families

- **Display**: `"Inter Tight", sans-serif` — condensed geometric grotesque; load via Google Fonts (`Inter+Tight:wght@400;500;700;900`)
- **Body/UI**: `Inter, "Inter Fallback", sans-serif` — neutral grotesque; loaded from self-hosted Epic CDN with `Inter Fallback` web-safe fallback
- **Code**: `"Recursive Mono", "Fira Code", monospace` — variable monospace for code blocks and technical content

### Hierarchy Table

| Role | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|--------|-------------|----------------|-----|
| `display-xl` | 64px | 700 | 1.1 | -0.035em | Hero splash headlines |
| `display-lg` | 52px | 700 | 1.1 | -0.025em | Section hero headings |
| `display-md` | 40px | 700 | 1.2 | -0.020em | Page H1, large section titles |
| `title-lg` | 32px | 700 | 1.2 | -0.015em | H2 feature section heads |
| `title-md` | 24px | 700 | 1.2 | -0.010em | H2 news/blog headings |
| `title-sm` | 20px | 700 | 1.25 | -0.005em | H3 card titles |
| `body-lg` | 18px | 400 | 1.65 | 0 | Lead paragraphs, intro text |
| `body-md` | 16px | 400 | 1.5 | 0 | Default body copy |
| `body-sm` | 14px | 400 | 1.45 | 0 | Secondary body, metadata |
| `button` | 14px | 500 | 1.0 | +0.02em | All button labels |
| `nav-link` | 14px | 500 | 1.4 | 0 | Navigation items |
| `caption` | 12px | 400 | 1.4 | +0.01em | Image captions, footnotes |
| `code` | 14px | 400 | 1.6 | 0 | Code blocks, technical strings |

### Principles

- Display headings always use **Inter Tight** with significant negative tracking; never use Inter Tight at body sizes
- Body text uses **Inter** at weight 400; medium-weight (500) is reserved for buttons and navigation only
- Black weight (900) appears in marketing heroes — use sparingly and only at 40px+
- Button text uses a subtle positive letter-spacing (+0.02em) for legibility at small sizes
- No italic text in the UI system — all styles are upright

## Layout

### Spacing System

Base unit: **8px**. All spacing tokens are multiples of 4px or 8px.

| Token | Value | Use |
|-------|-------|-----|
| `xxs` | 4px | Icon gaps, tiny internal margins |
| `xs` | 8px | Tight inline spacing, icon-to-label gaps |
| `sm` | 12px | Input vertical padding, badge padding |
| `md` | 16px | Component internal padding, card gutters |
| `lg` | 24px | Card padding, section element gaps |
| `xl` | 32px | Between card rows, module internal padding |
| `xxl` | 48px | Between major content blocks |
| `section` | 80px | Between full-width page sections |

### Grid & Container

- Maximum content width: **1280px** (centered with auto margins)
- Fluid grid with 12 columns at desktop, 4 columns at mobile
- Column gutter: 24px at desktop, 16px at tablet/mobile
- Page-edge padding: 24px (mobile), 32px (tablet), 48px+ (desktop)

### Whitespace Philosophy

Unreal Engine's layout is generous and breathable between major sections (80px minimum) but tight within components. Card internal padding is 24px. Sections use full-bleed backgrounds with generous vertical rhythm to separate feature showcases. The dark canvas benefits from negative space — avoid cramming content; let the dark breathe between feature blocks.

## Elevation & Depth

### Levels Table

| Level | Background | Treatment | Example Use |
|-------|-----------|-----------|-------------|
| 0 — Base | `#121212` | No shadow | Page canvas |
| 1 — Low | `#18181C` | No shadow, hairline border | Cards, panels, sidebar |
| 2 — Mid | `#202024` | No shadow | Dropdowns, nested cards, hovered rows |
| 3 — High | `#28282C` | Soft shadow on scroll | Selected items, focus rings |
| 4 — Menu | `#303034` | Layered shadow system | Navigation menus, modals, tooltips |
| 5 — Modal overlay | `rgba(0,0,0,0.65)` | Backdrop blur 50px | Modal backgrounds |

Shadow tokens (used at levels 4–5):
```
--shadow-bottom-sm: 0 1px 1px rgba(0,0,0,0.1), 0 2px 2px rgba(0,0,0,0.1), 0 4px 4px rgba(0,0,0,0.1), 0 6px 8px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.1)
--shadow-bottom-md: 0 2px 1px rgba(0,0,0,0.1), 0 4px 2px rgba(0,0,0,0.1), 0 8px 4px rgba(0,0,0,0.1), 0 16px 8px rgba(0,0,0,0.1), 0 32px 16px rgba(0,0,0,0.1)
```

### Shadow Philosophy

Unreal Engine uses **multiplicative layered shadow** — five shadow layers each at 10% opacity, stacked to simulate realistic light occlusion. Shadows only appear at menu/modal level. Cards and panels use background color stepping instead of shadows. Material effects (backdrop-filter blur) are used for overlay panels and the backdrop scrim. The overall aesthetic is flat-within-layers rather than neumorphic or card-heavy-shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `xs` | 4px | Small badges, chips, small tags |
| `sm` | 6px | Input fields (sometimes) |
| `md` | 8px | Buttons (primary standard), form inputs |
| `lg` | 12px | Cards, panels |
| `xl` | 16px | Large cards, feature blocks |
| `xxl` | 24px | Extra large panels, hero media containers |
| `pill` | 9999px | Step badges, tag pills, avatar chips |

### Photography & Imagery

- Hero images use full-bleed dark overlays with radial gradient vignettes fading to `#121212` at edges
- Game screenshots are displayed at 16:9 ratio, cropped to fill; often with dramatic cinematic contrast
- Developer tool screenshots use 3:2 or 4:3 ratio; no border treatment, slight border-radius (12px) on cards
- Thumbnail cards in news/feed grids: 16:9 with `12px` border-radius top corners only
- Video thumbnails always include a play button overlay; hover shows subtle `0.8` opacity darkening

## Components

### Buttons

Unreal Engine uses compact buttons consistently across the site. All button text is Inter 14px/500 with `+0.02em` letter-spacing.

**Primary button**: Background `#26BBFF`, text `#000000`, radius 8px, padding `8px 16px`. On hover: background `#72D3FF`. No border.

**Secondary/Ghost button**: Transparent background, text `#FFFFFF`, `1px solid rgba(255,255,255,0.59)` border, radius 8px, padding `8px 16px`. On hover: border becomes `1px solid #FFFFFF`.

**Danger button**: Background `#FF3F56`, text `#FFFFFF`, same radius and padding. On hover: background `#FF8291`.

### Cards

Cards use `#18181C` background with `1px solid rgba(255,255,255,0.15)` border and `12px` border-radius. Content padding is `24px`. News/article cards are borderless with image overflow filling the top of the card. Hover state lifts background to `#202024`.

### Navigation

The global nav is implemented as a web component (`<unrealengine-navigation>`) with Shadow DOM. It is 72px tall, fixed at top, with a dark transparent/frosted glass background that becomes solid `#121212` on scroll. Nav links are 14px Inter/500, white. Primary CTA in nav is the standard primary button.

### Badges & Tags

Step indicators use `border-radius: 9999px` (pill shape), 4px×12px padding, 16px text with border `1px solid rgba(255,255,255,0.35)`. Status badges use `4px×12px` padding, pill shape, with color fills from the semantic or accent palette. Text on colored badges uses the inverted `#000000` color.

### Form Inputs

Text inputs use `#18181C` background, `1px solid rgba(255,255,255,0.15)` border, `8px` border-radius, `8px×12px` padding, 14px Inter/400 white text. Focus state: `2px solid #FFFFFF` border (full-contrast white focus ring — no blue). Placeholder text is `rgba(255,255,255,0.35)`.

## Do's and Don'ts

**Do:**
- Use Inter Tight with negative letter-spacing (-0.02em to -0.035em) for all headings 24px and above
- Place primary CTAs exclusively in `#26BBFF` — no other color should read as the main call-to-action
- Use the three-level surface stepping (#18181C → #202024 → #28282C) to communicate depth without shadows
- Maintain a minimum 72px vertical whitespace between major page sections
- Use `rgba(255,255,255,0.15)` hairlines for all card borders — never a solid opaque gray
- Apply pill border-radius (9999px) only for step indicators and count badges; use 8px–12px for all other components
- Load Inter Tight and Inter together via Google Fonts for consistency; use Recursive Mono for all code

**Don't:**
- Don't use any bright accent color other than `#26BBFF` for interactive/CTA states
- Don't apply box-shadows to cards or content panels — use background-color stepping instead
- Don't use Inter Tight at body sizes (below 20px) — switch to Inter for anything under 20px
- Don't use positive letter-spacing on headings — all Inter Tight display text must use negative tracking
- Don't place light-mode or white-background components in the layout — UE5 is fully dark-canvas only
- Don't use more than two neutral surface tones in a single component stack
- Don't apply backdrop-filter blur except for overlay modals and navigation scroll states
- Don't use gradient backgrounds on buttons — the system uses solid fills only in YAML; document gradients separately in prose

## Responsive Behavior

### Breakpoints Table

| Breakpoint | Width | Key Changes |
|-----------|-------|-------------|
| Mobile | < 768px | Single column, nav collapses to hamburger drawer, font scales down by 1 step |
| Tablet | 768px–1024px | 2-column grids, nav partially visible, sections reduce to 48px vertical gap |
| Desktop | 1024px–1280px | Full 3-column grids, complete nav, 80px section gaps |
| Wide | 1280px+ | Content capped at 1280px max-width, centered |

### Touch Targets

All interactive elements maintain a minimum touch target of **44px×44px** on mobile. Buttons that visually appear smaller get invisible padding to meet this threshold. Navigation items expand their click area on touch.

### Collapsing Strategy

- **Navigation**: Hamburger icon at mobile; drawer slides from left with dark `#303034` background
- **Feature grids**: 3-col → 2-col (tablet) → 1-col stacked (mobile)
- **Hero headings**: `display-md` (40px) scales to ~28px on mobile using viewport-relative units or a smaller token step
- **Section padding**: `section` (80px) reduces to `xxl` (48px) on tablet and `xl` (32px) on mobile
- **Cards**: Full-width on mobile with 12px side margins

### Image Behavior

All hero images and background videos fill 100% width with `object-fit: cover`. Feature screenshots maintain 16:9 ratio using `aspect-ratio: 16/9`. On mobile, portrait images crop to 4:3. Lazy loading is applied to all below-fold imagery. Dark vignette overlays (radial gradient to `#121212`) are maintained at all breakpoints.

## Agent Prompt Guide

### Quick Color Reference

- Primary (CTA): `#26BBFF`
- Primary hover: `#72D3FF`
- Canvas (background): `#121212`
- Surface (card): `#18181C`
- Surface elevated: `#202024`
- Ink (headings): `#FFFFFF`
- Body text: `rgba(255,255,255,0.65)` → approximate `#FFFFFFA6`
- Muted (placeholder): `#AAAAAE`
- Hairline (borders): `rgba(255,255,255,0.15)` → approximate `#FFFFFF26`
- Error: `#FF3F56`
- Success: `#45C761`
- Warning: `#FFC229`
- On-primary (text on blue): `#000000`

### Example Component Prompts

**Hero Section:**
"Create a hero on #121212 background with a full-bleed dark image and a radial gradient overlay fading to #121212 at bottom. Headline 40px Inter Tight 700 weight -0.02em tracking white. Subheadline 18px Inter 400 rgba(255,255,255,0.65). Primary CTA button: #26BBFF background, #000000 text, 8px radius, 8px 16px padding, 14px Inter 500, +0.02em tracking. Secondary CTA: transparent background, white text, 1px solid rgba(255,255,255,0.59) border, same radius and padding."

**News/Article Card:**
"Create an article card on #18181C background, 12px border-radius, 1px solid rgba(255,255,255,0.15) border. Top: 16:9 image. Below: category badge in pill shape (4px 12px padding, 1px solid rgba(255,255,255,0.35) border, 12px caption text), then date in 12px Inter #AAAAAE, then headline in 16px Inter Tight 700 white, then 2-line excerpt in 14px Inter rgba(255,255,255,0.65). Hover: background rises to #202024."

**Button Set:**
"Primary button: #26BBFF background, #000000 text, 8px border-radius, 8px 16px padding, 14px Inter 500, +0.02em letter-spacing, no border. Secondary button: transparent background, white text, 1px solid rgba(255,255,255,0.59) border, same radius and padding. On hover, primary goes to #72D3FF; secondary border becomes 1px solid #FFFFFF."

**Feature Card with Badge:**
"Create a dark feature card on #18181C, 12px radius, 24px padding, 1px solid rgba(255,255,255,0.15) border. Top-left badge: 4px 12px padding, 9999px radius, 1px solid rgba(255,255,255,0.35) border, 12px Inter 400 uppercase white text. Heading: 20px Inter Tight 700 -0.005em tracking white. Description: 14px Inter 400 rgba(255,255,255,0.65). CTA link: #26BBFF 14px Inter 500."

**Code Block:**
"Inline code: Recursive Mono 14px #FFFFFF on #18181C background, 4px border-radius, 2px 6px padding. Code block: same font, 16px padding all sides, 8px border-radius, #18181C background, 1px solid rgba(255,255,255,0.15) top border as subtle separator."

### Iteration Guide

1. Start with `#121212` as your page background — everything floats above this deep near-black
2. Load **Inter Tight** (weights 400, 700, 900) and **Inter** (weights 400, 500) via Google Fonts before generating any UI
3. Apply negative letter-spacing to all headings: -0.035em at 64px scaling up to -0.01em at 24px
4. Use `#26BBFF` for one primary CTA per view — do not scatter it as a decorative color
5. Build depth with background-color stepping (#18181C → #202024 → #28282C), not shadows
6. Use `rgba(255,255,255,0.15)` for all subtle borders — avoid solid opaque grays
7. Check all text contrast: white on #121212 passes WCAG AA; rgba(255,255,255,0.65) on #121212 is borderline — use only for secondary/supporting text
8. The system has no light mode — never mix light surfaces into the layout
