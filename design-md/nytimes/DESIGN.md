---
version: alpha
name: The New York Times
description: The New York Times design system is a rigorous editorial identity built around four proprietary typefaces — nyt-karnak, nyt-cheltenham, nyt-imperial, and nyt-franklin — that recreate the authority and warmth of a printed broadsheet on screen. The color palette is a disciplined grayscale hierarchy of seven named steps from ink-black (#121212) to white, with a curated set of semantic signal colors (breaking red, developing orange, editorial blue, highlight yellow) reserved strictly for editorial classification. No gradients, no decorative elements — the typography does all the work.

colors:
  canvas: "#FFFFFF"
  surface: "#F8F8F8"
  surface-alt: "#EBEBEB"
  surface-inverse: "#121212"
  ink: "#121212"
  body: "#363636"
  muted: "#5A5A5A"
  subtle: "#727272"
  faint: "#8B8B8B"
  hairline: "#DFDFDF"
  hairline-mid: "#C7C7C7"
  primary: "#121212"
  primary-active: "#363636"
  on-primary: "#FFFFFF"
  overlay: "#12121294"
  signal-accent: "#2671DC"
  signal-breaking: "#D0021B"
  signal-developing: "#E54B0A"
  signal-editorial: "#326891"
  signal-highlight: "#FEFAD1"
  signal-positive: "#267C30"
  signal-negative: "#A80913"

typography:
  display-xl:
    fontFamily: 'nyt-karnak, georgia, "times new roman", times, serif'
    fontSize: 44px
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: 0px

  display-md:
    fontFamily: 'nyt-cheltenham, cheltenham-fallback-georgia, georgia, "times new roman", serif'
    fontSize: 26px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: 0px

  title-lg:
    fontFamily: 'nyt-cheltenham, cheltenham-fallback-georgia, georgia, "times new roman", serif'
    fontSize: 23px
    fontWeight: 700
    lineHeight: 1.17
    letterSpacing: 0px

  title-md:
    fontFamily: 'nyt-cheltenham, cheltenham-fallback-georgia, georgia, "times new roman", serif'
    fontSize: 23px
    fontWeight: 400
    lineHeight: 1.09
    letterSpacing: 0px

  title-sm:
    fontFamily: 'nyt-cheltenham, cheltenham-fallback-georgia, georgia, "times new roman", serif'
    fontSize: 16px
    fontWeight: 200
    lineHeight: 1.1
    letterSpacing: 0px

  body-lg:
    fontFamily: 'nyt-imperial, georgia, "times new roman", times, serif'
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.1px

  body-md:
    fontFamily: 'nyt-imperial, georgia, "times new roman", times, serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.36
    letterSpacing: 0.1px

  byline:
    fontFamily: 'nyt-franklin, helvetica, arial, sans-serif'
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.09
    letterSpacing: 0px

  label:
    fontFamily: 'nyt-franklin, helvetica, arial, sans-serif'
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.82
    letterSpacing: 0.44px

  nav-link:
    fontFamily: 'nyt-franklin, helvetica, arial, sans-serif'
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0.22px

  button:
    fontFamily: 'nyt-franklin, helvetica, arial, sans-serif'
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0px

  caption:
    fontFamily: 'nyt-franklin, helvetica, arial, sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px

spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 60px
  section: 80px

rounded:
  none: 0px
  xs: 3px
  sm: 6px
  md: 12px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "8px 16px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "8px 16px"
    border: "none"

  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "8px 16px"
    border: "1px solid {colors.ink}"

  card-base:
    backgroundColor: "transparent"
    rounded: "{rounded.none}"
    padding: "0px"
    border: "none"

  card-featured:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"

  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
    padding: "8px 12px"
    border: "1px solid {colors.hairline-mid}"

  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
    padding: "8px 12px"
    border: "1px solid {colors.ink}"

  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.hairline}"

  badge-breaking:
    backgroundColor: "{colors.signal-breaking}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "2px 6px"
    border: "none"

  byline-text:
    backgroundColor: "transparent"
    textColor: "{colors.subtle}"
    typography: "{typography.byline}"
    rounded: "{rounded.none}"
    padding: "0px"
    border: "none"
---

# The New York Times Design System

## Overview

The New York Times design language is a digital translation of the world's most recognized newspaper broadsheet. Every visual decision — the ink-black-on-white palette, the deep serif hierarchy, the obsessive typographic restraint — descends directly from 170 years of print journalism tradition. Four custom typefaces do all the heavy lifting: nyt-karnak sets monumental section titles at 900 weight; nyt-cheltenham carries article headlines in weights as light as 200 (hairline) to as bold as 700; nyt-imperial provides the workhorse body and summary text; and nyt-franklin is the sans-serif for all UI chrome, bylines, and navigation. There is no brand color — the Times uses black as its primary action color.

The color system is a pure grayscale with five named content levels (primary through quintary) and five named stroke levels, creating a highly structured information hierarchy without any chromatic accent. The one exception is a set of seven semantic signal colors used exclusively for editorial classification: "Breaking" red for urgent news, "Developing" orange for evolving stories, "Editorial" blue-slate for opinion and analysis, and a pale yellow highlight. These signal colors are never decorative — they carry specific journalistic meaning. The result is a design that communicates authority through restraint, density, and typographic sophistication rather than visual spectacle.

Key visual characteristics:
- Pure white canvas (`#FFFFFF`) — the digital equivalent of newsprint
- Seven-step grayscale content hierarchy from `#121212` to `#8B8B8B`
- Four proprietary serif/sans fonts: karnak (display), cheltenham (headlines), imperial (body), franklin (UI)
- Article headlines set in cheltenham at weights as light as 200 — elegant, editorial refinement
- Zero decorative elements — no gradients, no rounded containers, no shadows on content
- Uppercase nyt-franklin for bylines and section labels with 0.44px letter-spacing
- Seven semantic signal colors for editorial classification only (never decoration)
- `#DFDFDF` hairline dividers as the primary layout tool — rules separate, not whitespace

Differentiator: The NYT is one of the only major web properties that uses type weight variation (200 vs. 700 cheltenham) as its primary visual hierarchy tool, instead of size or color. A "lighter" headline signals a fresher, less-developed story; a heavier headline signals a lead or featured piece — purely typographic editorial judgment.

## Colors

### Core Grayscale (Content)
The NYT color system is named with editorial roles, not generic names:

- **ink / primary** `#121212` — deepest black; primary text, borders, primary buttons
- **body** `#363636` — secondary text; body copy in inverse contexts
- **muted** `#5A5A5A` — tertiary text; article summaries, subheadings
- **subtle** `#727272` — quaternary text; bylines, timestamps, captions
- **faint** `#8B8B8B` — quintary text; tags, very subdued metadata

### Surface Hierarchy
- **canvas** `#FFFFFF` — primary page background
- **surface** `#F8F8F8` — secondary background; sidebar sections, alternate rows
- **surface-alt** `#EBEBEB` — tertiary background; hover states, selected items
- **surface-inverse** `#121212` — dark surfaces; inverse cards, dark headers
- **on-primary** `#FFFFFF` — text on dark/inverse surfaces

### Stroke / Dividers
- **hairline** `#DFDFDF` — primary divider; column rules, card borders, nav bottom border
- **hairline-mid** `#C7C7C7` — medium divider; input borders, section separators

### Signal Colors (Editorial Classification Only)
- **signal-accent** `#2671DC` — interactive accent blue; links, active states
- **signal-breaking** `#D0021B` — "BREAKING" label; urgent live news
- **signal-developing** `#E54B0A` — "DEVELOPING" label; evolving stories
- **signal-editorial** `#326891` — opinion and analysis sections
- **signal-highlight** `#FEFAD1` — text highlight; search match, callout background
- **signal-positive** `#267C30` — positive signal; market data, success states
- **signal-negative** `#A80913` — negative signal; market data, destructive actions

### Overlay
- **overlay** `#12121294` — modal scrim; 58% opacity ink-black

## Typography

### Font Families
All four fonts are proprietary NYT typefaces, not publicly available. Use these fallback stacks for prototyping:

| NYT Font | Stack | Character | Use |
|----------|-------|-----------|-----|
| nyt-karnak | `nyt-karnak, georgia, serif` | Monumental slab serif, extreme weight | Section page titles |
| nyt-cheltenham | `nyt-cheltenham, georgia, serif` | Classic editorial serif, wide weight range | Article headlines |
| nyt-imperial | `nyt-imperial, georgia, serif` | Reading-optimized text serif | Article body, summaries |
| nyt-franklin | `nyt-franklin, helvetica, arial, sans-serif` | Clean humanist sans | Nav, bylines, labels, UI |

No Google Fonts equivalent exists. Georgia is the closest public approximation for the serif trio; Helvetica or Arial for franklin.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|------|--------|-------------|----------------|-----|
| display-xl | nyt-karnak | 44px | 900 | 1.05 | 0px | Section titles ("Arts", "U.S.") |
| display-md | nyt-cheltenham | 26px | 500 | 1.10 | 0px | Featured article headlines |
| title-lg | nyt-cheltenham | 23px | 700 | 1.17 | 0px | Bold/lead article headlines |
| title-md | nyt-cheltenham | 23px | 400 | 1.09 | 0px | Standard article headlines |
| title-sm | nyt-cheltenham | 16px | 200 | 1.10 | 0px | Small/tertiary headlines |
| body-lg | nyt-imperial | 15px | 500 | 1.40 | 0.1px | Article summaries, lead copy |
| body-md | nyt-imperial | 14px | 400 | 1.36 | 0.1px | Article body text, summaries |
| byline | nyt-franklin | 11px | 500 | 1.09 | 0px | Author names (UPPERCASE) |
| label | nyt-franklin | 11px | 500 | 1.82 | 0.44px | Section labels (UPPERCASE) |
| nav-link | nyt-franklin | 11px | 700 | 1.00 | 0.22px | Navigation links (UPPERCASE) |
| button | nyt-franklin | 14px | 700 | 1.00 | 0px | Subscribe, action buttons |
| caption | nyt-franklin | 12px | 400 | 1.40 | 0px | Image captions, fine print |

### Principles
- The headline weight variation in cheltenham is editorial judgment: 200 = breaking news not yet developed; 400 = standard article; 500 = featured piece; 700 = lead story
- Bylines, section labels, and nav links always render in `text-transform: uppercase` — a direct print journalism convention
- Letter-spacing on nyt-franklin labels (0.44px) and nav (0.22px) mirrors the tracked capitals of print section headers
- nyt-imperial body text uses `0.1px` positive tracking to improve screen readability of the compact serif
- Body paragraph text renders at very small sizes (14–15px) reflecting the high information density of newspaper layouts

## Layout

### Spacing System
Base unit: 8px.

| Token | Value | Use |
|-------|-------|-----|
| xs | 8px | Nav button padding, icon gaps |
| sm | 12px | Input padding, tight element spacing |
| md | 16px | Card inner padding, standard gaps |
| lg | 24px | Column gutters, section element spacing |
| xl | 40px | Section sub-group separation |
| xxl | 60px | Major content block padding |
| section | 80px | Page-level section padding |

### Grid & Container
- Max content width: ~1270px with ~38px side padding at desktop
- Primary layout: 6-column asymmetric grid (main well + sidebar)
- Article feed: 3–4 columns on desktop, 1 column on mobile
- Nav side padding: `38px` at desktop, compressed at mobile
- Footer side padding: `38px` matching nav

### Whitespace Philosophy
The NYT uses **dividers instead of whitespace** as the primary layout tool — hairline rules (`#DFDFDF`) separate columns, sections, and articles. The page is dense by newspaper convention: sections pack many headlines per screenful, minimizing empty space. Vertical rhythm is established by consistent rule spacing rather than generous padding. The effect is a purposefully packed information environment that communicates volume and coverage breadth.

## Elevation & Depth

| Level | Treatment | Example Use |
|-------|-----------|-------------|
| 0 | Canvas `#FFFFFF` + hairline rules | Article feed, main content |
| 1 | Surface `#F8F8F8` | Sidebar background, alternate sections |
| 2 | Surface-alt `#EBEBEB` | Hover states, selected article highlight |
| 3 | Inverse `#121212` | Dark headers, breaking news banners |
| Signal | Signal color backgrounds | Breaking/developing news labels |

### Shadow Philosophy
The New York Times uses **no box-shadows** anywhere. Structure is provided entirely by hairline borders (`1px solid #DFDFDF`) — the digital equivalent of column rules in print. This gives the layout an authoritative flatness that reinforces the newspaper aesthetic. No card "floating," no elevation hierarchy through shadows.

The only visual layering effect is the `rgba(18,18,18,0.58)` overlay used for modal backgrounds — pure darkness, no diffusion.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| none | 0px | Default for all content elements — articles, cards, images, inputs |
| xs | 3px | Subscribe and action buttons |
| sm | 6px | Secondary UI elements (tags with bg) |
| md | 12px | Tertiary UI only (rarely used) |
| pill | 9999px | Not used in primary interface |

The NYT defaults to `0px` radius on virtually everything. This is a deliberate nod to the hard-cornered pages of print journalism. Only interactive buttons receive the minimal 3px rounding.

### Photography & Imagery
- All photography is rectangular, no border-radius, no border, no shadow
- Lead article image: fills container width, typically 16:9 or 3:2 aspect ratio
- Thumbnail images in article feeds: fixed-size rectangular crops, `object-fit: cover`
- Photography is the primary visual interest — the UI steps back to display it cleanly
- No decorative image treatments — no circles, no polaroid frames, no overlapping layouts

## Components

### Buttons
Two primary button types, both using nyt-franklin at 14px/700:

**Primary (Subscribe / Black):**
- Background: `#121212`, Text: `#FFFFFF`, Border: none
- Padding: `8px 16px`, Radius: `3px`
- Hover: background shifts to `#363636`
- Use: Subscribe CTA, primary account actions

**Secondary (Outline):**
- Background: `#FFFFFF`, Text: `#121212`, Border: `1px solid #121212`
- Padding: `8px 16px`, Radius: `3px`
- Use: "Log In", secondary navigation actions

### Cards
NYT content cards are **transparent with no border** — the article feed is a flat list separated by `#DFDFDF` hairline rules, not cards. The "card" is the typography and image, not a container.

Featured story cards may receive a `#FFFFFF` background with `1px solid #DFDFDF` border and `24px` inner padding — but this is applied to sections, not individual article elements.

### Inputs & Forms
- Background: `#FFFFFF`
- Border: `1px solid #C7C7C7`
- Radius: `3px` (minimal)
- Padding: `8px 12px`
- Focus: border changes to `1px solid #121212`
- Font: nyt-franklin, 14px, 400 weight

### Navigation
- Background: `#FFFFFF` — always light, never inverts
- Bottom border: `1px solid #DFDFDF`
- Nav links: nyt-franklin, 11px, 700 weight, UPPERCASE, 0.22px letter-spacing
- The NYT masthead uses custom typography for the "The New York Times" logotype
- Section nav scrolls horizontally on mobile; expands in a full-screen panel on some breakpoints

### Bylines & Labels
Bylines are one of the NYT's most distinctive typographic elements:
- Font: nyt-franklin, 11px, 500 weight, `text-transform: uppercase`
- Color: `#727272` (subtle) — intentionally subdued to not compete with the headline
- Format: "BY JANE SMITH AND JOHN DOE" — by-prefix included

Section labels (e.g., "TOP STORIES", "NEWSLETTERS"):
- Font: nyt-franklin, 11px, 500 weight, UPPERCASE
- Letter-spacing: 0.44px — tracking matches print section headers
- Color: `#5A5A5A`

Signal labels (e.g., "BREAKING", "DEVELOPING"):
- Font: nyt-franklin, 11px, 500 weight, UPPERCASE
- Background: signal color (`#D0021B` for breaking)
- Text: `#FFFFFF`, padding: `2px 6px`, no radius

## Do's and Don'ts

**Do:**
- Use nyt-cheltenham weight variation (200 → 400 → 700) to signal story importance — lighter = newer/softer, heavier = lead/urgent
- Separate content with `#DFDFDF` hairline rules — this is the primary layout tool, not whitespace
- Keep bylines and section labels in `text-transform: uppercase` with nyt-franklin
- Use `#727272` (subtle) for bylines — they should not compete with headlines
- Restrict color to the grayscale system and the seven signal tokens — no other colors
- Set article summaries in nyt-imperial with `0.1px` letter-spacing at 14–15px
- Keep buttons at exactly `3px` radius — the minimal concession to modernity

**Don't:**
- Don't use gradients, background patterns, or decorative color fills
- Don't use box-shadows on any element — hairline borders only
- Don't apply border-radius to containers, images, or article cards
- Don't use nyt-karnak for anything other than section/page titles (it's too heavy at small sizes)
- Don't add letter-spacing to nyt-cheltenham headlines — they render without tracking
- Don't use signal colors (breaking red, developing orange) for anything except editorial classification
- Don't use font weights other than 200/400/500/700 for cheltenham — other weights break the editorial system
- Don't use color to express information hierarchy — use font weight and size instead

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|-----------|-------|-------------|
| Mobile | < 600px | Single column, compressed nav, 12px side margins |
| Tablet | 600–1024px | 2-column article feed, medium side margins |
| Desktop | > 1024px | Full multi-column grid, 38px side margins, expanded nav |

### Touch Targets
- Minimum touch target: 44px height for all interactive elements
- Nav links: 44px tap area (8px top/bottom padding + 28px line height)
- Buttons: minimum 36px height with explicit padding to reach 44px on mobile

### Collapsing Strategy
- Navigation section tabs collapse into a horizontal scroll at mobile
- Multi-column article feeds become single column below 600px
- Display-xl headlines (44px) scale down to ~28px on mobile
- Side padding compresses from 38px (desktop) to 12px (mobile)
- The NYT masthead ("The New York Times") remains full-width at all breakpoints — never truncated

### Image Behavior
- Article lead images: `width: 100%` at all breakpoints, 16:9 aspect ratio maintained
- Thumbnail images in feeds: fixed aspect ratio, `object-fit: cover`
- Images never receive border-radius or shadow treatments
- On mobile, images stack above headlines (desktop: headline may appear above image)

## Agent Prompt Guide

### Quick Color Reference
- Ink / Primary: `#121212`
- Primary active (hover): `#363636`
- On-primary (text on dark): `#FFFFFF`
- Canvas (background): `#FFFFFF`
- Surface (secondary bg): `#F8F8F8`
- Surface-alt (tertiary bg): `#EBEBEB`
- Muted text: `#5A5A5A`
- Subtle text (bylines): `#727272`
- Hairline (dividers): `#DFDFDF`
- Signal-breaking (red): `#D0021B`
- Signal-developing (orange): `#E54B0A`
- Signal-editorial (blue-slate): `#326891`
- Signal-accent (interactive blue): `#2671DC`
- Signal-highlight (yellow): `#FEFAD1`

### Example Component Prompts

**Article Feed Section:**
"Create a news feed on `#FFFFFF` background. Section label: nyt-franklin, 11px, 500 weight, uppercase, `#5A5A5A`, 0.44px letter-spacing. Separate articles with `1px solid #DFDFDF` horizontal rules. Headline: nyt-cheltenham (use Georgia), 23px, 400 weight, `#121212`, 1.09 line-height. Summary: nyt-imperial (use Georgia), 14px, 400 weight, `#5A5A5A`, 1.36 line-height. Byline: nyt-franklin, 11px, 500 weight, uppercase, `#727272`."

**Section Title Header:**
"Create a section page header. Title: nyt-karnak (use Georgia), 44px, 900 weight, `#121212`, 1.05 line-height. Bottom border: `1px solid #DFDFDF`. Padding below title: 24px. Background: white."

**Breaking News Label:**
"Create a breaking news badge: `#D0021B` background, `#FFFFFF` text, nyt-franklin 11px 500 weight uppercase, `2px 6px` padding, `0px` border-radius."

**Subscribe Button:**
"Create a subscribe button: `#121212` background, `#FFFFFF` text, nyt-franklin 14px 700 weight, `3px` border-radius, `8px 16px` padding, no border, no shadow. Hover: `#363636` background."

**Article Card:**
"Create a transparent article card (no background, no border, no shadow). 16:9 thumbnail image at top, no border-radius. Section label: nyt-franklin 11px 500 uppercase `#5A5A5A`. Headline: Georgia 23px 700 `#121212` 1.17 line-height. Summary: Georgia 14px 400 `#5A5A5A`. Byline: nyt-franklin 11px 500 uppercase `#727272`. Separate from next card with `1px solid #DFDFDF` bottom rule."

### Iteration Guide
1. Start with `#FFFFFF` canvas — the NYT is a white-paper publication
2. Use `1px solid #DFDFDF` hairline rules to structure layout — not padding or whitespace
3. Use Georgia as your serif fallback for all three NYT serif fonts (karnak, cheltenham, imperial)
4. Keep bylines, section labels, nav links in `text-transform: uppercase` with nyt-franklin
5. Signal colors are editorial: only use breaking red/developing orange for news classification
6. Use cheltenham weight to signal story importance: 200 (newest/softest) → 400 (standard) → 700 (lead)
7. Never add box-shadows — the entire layout is flat, structure comes from type and rules alone
