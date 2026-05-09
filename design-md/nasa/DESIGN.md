---
version: alpha
name: NASA
description: NASA's design system is a strict government-grade visual language built on the US Web Design System (USWDS), balancing federal accessibility standards with the dramatic visual power of deep-space imagery. The palette is high-contrast near-black and white with NASA Red (#D83933) and NASA Blue (#005EA2) as the only brand colors — clean, authoritative, and designed to let astronomical photography do the storytelling. Typography pairs Inter for bold, impact-driven headings with Public Sans Web for accessible body copy, with DM Mono reserved for metadata labels in dramatic uppercase tracking.

colors:
  canvas: "#FFFFFF"
  surface: "#000000"
  surface-mid: "#1B1B1B"
  surface-dim: "#2E2E32"
  surface-light: "#F6F6F6"
  ink: "#1B1B1B"
  body: "#1B1B1B"
  on-dark: "#FFFFFF"
  muted: "#B9B9BB"
  muted-light: "#565C65"
  hairline: "#565C65"
  hairline-light: "#D1D1D1"
  overlay: "#000000B3"
  primary: "#D83933"
  primary-active: "#AF1708"
  accent-blue: "#005EA2"

typography:
  display-xl:
    fontFamily: 'inter, sans-serif'
    fontSize: 80px
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: 0px

  display-md:
    fontFamily: 'inter, sans-serif'
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: 0px

  title-lg:
    fontFamily: 'inter, sans-serif'
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: 0px

  title-md:
    fontFamily: 'inter, sans-serif'
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: 0px

  body-lg:
    fontFamily: '"Public Sans Web", sans-serif'
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0px

  body-md:
    fontFamily: '"Public Sans Web", sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0px

  body-sm:
    fontFamily: '"Public Sans Web", sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px

  button:
    fontFamily: 'inter, sans-serif'
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0px

  nav-link:
    fontFamily: '"Public Sans Web", sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0px

  label:
    fontFamily: 'dm-mono, monospace'
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 3.5px

  caption:
    fontFamily: '"Public Sans Web", sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px

spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 48px
  xxl: 56px
  section: 80px

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 8px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
    border: "none"

  button-secondary:
    backgroundColor: "{colors.accent-blue}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
    border: "none"

  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
    border: "none"

  card-base:
    backgroundColor: "transparent"
    rounded: "{rounded.none}"
    padding: "0px 24px 0px 0px"
    border: "none"

  text-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
    padding: "8px 8px"
    border: "1px solid {colors.hairline}"

  text-input-focused:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
    padding: "8px 8px"
    border: "1px solid {colors.on-dark}"

  top-nav:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-dark}"
    border: "none"

  label-meta:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0px"
    border: "none"
---

# NASA Design System

## Overview

NASA's visual identity is a high-contrast, government-grade design language that uses the dramatic depth of space as its primary canvas. The UI is built on the US Web Design System (USWDS), inheriting its federal accessibility mandates — AA contrast minimums, mobile-first layouts, and inclusive typography — while extending it with NASA's iconic two-color brand accent system: NASA Red (`#D83933`) for primary CTAs and NASA Blue (`#005EA2`) for secondary actions and search. The page body is technically white, but the dominant visual character is near-black: the top navigation, hero sections, and footer all render on `#000000`, making deep-space photography the true background of the UI.

Typography runs in two distinct voices. Inter handles all headings at bold and extra-bold weights (700–800), scaling dramatically from 80px page titles to 18px sub-headings with 1.0 line-height for maximum impact. Public Sans Web carries all body and navigation text at 400 weight with 1.65 line-height for readability. DM Mono provides a distinctive third voice for metadata labels — read-time tags rendered in 11px uppercase with 3.5px letter-spacing — a signature pattern that communicates editorial credibility and precision.

Key visual characteristics:
- Near-black dominant surfaces (`#000000`, `#1B1B1B`) — space as the visual substrate
- NASA Red (`#D83933`) and NASA Blue (`#005EA2`) — only two brand colors, used exclusively for actions
- Inter at 700–800 weight for heroic, no-margin display headlines
- DM Mono UPPERCASE labels with extreme letter-spacing (3.5px) for metadata/read-time
- Zero border-radius on most elements — flat, authoritative, government-grade aesthetic
- No box-shadows — depth from photography, not UI chrome
- Transparent content cards — imagery bleeds through, text overlays directly
- USWDS grid system (12-column) with federal accessibility standards (WCAG AA)

Differentiator: Where commercial sites use brand colors pervasively, NASA uses near-monochrome with exactly two accent colors as functional signals (red = primary action, blue = navigation/search). The design defers entirely to the content — astronomy photography and space mission data — rather than asserting brand personality through decoration.

## Colors

### Brand & Accent
- **primary** `#D83933` — NASA Red; primary CTA buttons, featured article links, alerts
- **primary-active** `#AF1708` — darker red for hover and active states
- **accent-blue** `#005EA2` — NASA Blue (USWDS primary); search button, secondary actions, hyperlinks

### Surface
- **canvas** `#FFFFFF` — page body background (light content sections)
- **surface** `#000000` — dominant dark surface; navigation bar, hero sections, footer
- **surface-mid** `#1B1B1B` — primary ink and medium-dark content surfaces
- **surface-dim** `#2E2E32` — slightly lighter dark; nested containers, dark cards
- **surface-light** `#F6F6F6` — light section alternates; sidebar backgrounds
- **overlay** `#000000B3` — dark scrim overlay (70% opacity) over hero imagery

### Text
- **ink** `#1B1B1B` — primary text on light (canvas) backgrounds
- **body** `#1B1B1B` — body paragraph text on light backgrounds (same as ink)
- **on-dark** `#FFFFFF` — all text on dark/black surfaces
- **muted** `#B9B9BB` — subdued text on dark backgrounds (body copy in dark sections)
- **muted-light** `#565C65` — subdued text on light backgrounds; nav links, metadata

### Semantic
- **Destructive / Error** `#D83933` — shared with primary red (USWDS semantic-error convention)
- **Success** `#008817` — standard USWDS green (not extracted; follows system convention)
- **Warning** `#E5A000` — standard USWDS gold (not extracted; follows system convention)
- **Hairline** `#565C65` — input borders, separators on dark surfaces
- **Hairline-light** `#D1D1D1` — separators on light surfaces

## Typography

### Font Family
All three fonts are available via Google Fonts or equivalent CDN:

| Family | Stack | Character |
|--------|-------|-----------|
| Inter | `inter, sans-serif` | Bold, impactful headings; loaded as custom font named `inter` |
| Public Sans Web | `"Public Sans Web", sans-serif` | USWDS body and navigation; open-source US government standard |
| DM Mono | `dm-mono, monospace` | Metadata labels; uppercase tracking for read-time and tags |

Load Public Sans: `@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;700&display=swap')`
Load Inter: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap')`
Load DM Mono: `@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@500&display=swap')`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|------|--------|-------------|----------------|-----|
| display-xl | Inter | 80px | 800 | 1.0 | 0px | Page-level hero titles (h1) |
| display-md | Inter | 40px | 700 | 1.05 | 0px | Section-level large headings |
| title-lg | Inter | 22px | 700 | 1.05 | 0px | Content section headings (h3) |
| title-md | Inter | 18px | 700 | 1.05 | 0px | Card and sub-section headings (h2/h4) |
| body-lg | Public Sans Web | 18px | 400 | 1.65 | 0px | Lead and intro paragraphs |
| body-md | Public Sans Web | 16px | 400 | 1.65 | 0px | Default body text |
| body-sm | Public Sans Web | 14px | 400 | 1.5 | 0px | Captions, fine print |
| button | Inter | 18px | 600 | 1.0 | 0px | Button and CTA labels |
| nav-link | Public Sans Web | 14px | 400 | 1.0 | 0px | Navigation item links |
| label | DM Mono | 11px | 500 | 1.0 | 3.5px | UPPERCASE read-time and category tags |
| caption | Public Sans Web | 14px | 400 | 1.5 | 0px | Image captions, metadata |

### Principles
- Headings use Inter at extreme weights (700–800) with tight 1.0 line-height for cinematic impact
- Body uses Public Sans Web exclusively — a neutral, accessible government font
- DM Mono labels always render in `text-transform: uppercase` with `3.5px` letter-spacing — never lowercase
- No letter-spacing on headings or body — tracking is 0 or the extreme 3.5px label value, nothing in between
- Weight palette: 400 (regular), 500 (DM Mono medium), 600 (Inter semibold), 700 (Inter bold), 800 (Inter extrabold)

## Layout

### Spacing System
Base unit: 8px.

| Token | Value | Use |
|-------|-------|-----|
| xs | 8px | Icon gaps, tight element spacing |
| sm | 12px | Button vertical padding, dense list items |
| md | 16px | Nav item padding, standard gaps |
| lg | 24px | Card gutters, form field spacing |
| xl | 48px | Section sub-element separation |
| xxl | 56px | Footer padding |
| section | 80px | Major section vertical padding |

### Grid & Container
- USWDS 12-column grid
- Container max-width: ~1440px with `24px` side padding at all breakpoints
- Grid uses USWDS class names: `grid-col-12`, `desktop:grid-col-4` etc.
- Three-column card layout: `desktop:grid-col-4` per card
- Two-column article layout: `desktop:grid-col-8` content + `grid-col-4` sidebar

### Whitespace Philosophy
NASA favors dense, information-rich layouts with minimal decorative whitespace. The heavy use of full-bleed photography in hero sections creates visual breathing room without empty padding. Content sections pack tightly — card grids use 24px gutters, body sections use 16px vertical rhythm. The section spacing (80px) applies only at major section breaks; within sections, elements are tightly coupled.

## Elevation & Depth

| Level | Treatment | Example Use |
|-------|-----------|-------------|
| 0 | Flat, dark surface `#000000` | Navigation, hero sections, footer |
| 1 | Medium dark `#1B1B1B` | Content cards on dark backgrounds |
| 2 | Slightly lighter dark `#2E2E32` | Nested containers, overlaid panels |
| 3 | Light canvas `#FFFFFF` | Body content sections |
| 4 | Light alternate `#F6F6F6` | Sidebar and secondary sections |
| Overlay | `rgba(0,0,0,0.7)` | Scrim over hero imagery for text legibility |

### Shadow Philosophy
NASA uses **no box-shadows**. The extreme contrast between black surfaces and white text provides all necessary depth. Photography provides dimensional depth — the UI itself is entirely flat. The only "elevation" effect is background-color hierarchy (black → dark → light) and the dramatic typography scale contrast.

Decorative depth comes from:
- Full-bleed photography that extends to viewport edges
- Transparent card backgrounds that let image texture show through
- `rgba(0,0,0,0.7)` text-legibility overlays over hero imagery

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| none | 0px | Default for all elements — headers, cards, containers, inputs |
| xs | 2px | Reserved, rarely used |
| sm | 4px | CTA buttons (NASA Red, NASA Blue), search button |
| md | 8px | Tertiary UI elements if needed |
| pill | 9999px | Not used in primary interface |

The defining shape characteristic: virtually everything is square. Buttons get 4px radius as the only concession to rounding. NASA's government-grade aesthetic rejects decorative rounding — sharp corners communicate precision, authority, and technical seriousness.

### Photography & Imagery
- Full-bleed hero images with no border or border-radius
- Images set in 16:9 or 3:2 aspect ratios for article cards
- Image thumbnails in content cards maintain native aspect ratio with `object-fit: cover`
- Space photography is the primary design element — the UI defers to it
- No circular or shaped image crops; all photography is rectangular

## Components

### Buttons
Three visual tiers, all using Inter at 18px/600:

**Primary (NASA Red):**
- Background: `#D83933`, Text: `#FFFFFF`, Border: none
- Padding: `12px 20px`, Radius: `4px`
- Hover: background shifts to `#AF1708`
- Use: main CTAs, featured article links, alert actions

**Secondary (NASA Blue):**
- Background: `#005EA2`, Text: `#FFFFFF`, Border: none
- Padding: `12px 20px`, Radius: `4px`
- Use: search submit, navigation actions, secondary CTAs

**Ghost (dark context):**
- Background: transparent, Text: `#FFFFFF`, Border: none
- Padding: `12px 24px`, Radius: `0px`
- Use: horizontal nav section links, list-mode link buttons (weight 600)

### Cards
NASA content cards (`hds-content-card`) are transparent containers — no background, no border, no shadow. The background color of the parent section shows through. Cards are distinguished by:
- The full-bleed thumbnail image at top
- The metadata label (DM Mono UPPERCASE + 3.5px tracking)
- The Inter title at 700 weight
- The Public Sans body copy at 400

Default layout: three columns on desktop (`desktop:grid-col-4`), single column on mobile, 24px right gutter between cards.

### Inputs & Forms
- Background: `#000000` (dark, on dark nav)
- Text: `#FFFFFF`
- Border: `1px solid #565C65`
- Radius: `0px` (square)
- Padding: `8px`
- Focus: border changes to `1px solid #FFFFFF`
- The search input pairs with a blue `#005EA2` submit button at `4px` right radius only

### Navigation
- Height: ~68px (16px 24px padding = implied ~36px inner + 32px padding)
- Background: `#000000` — full black
- Logo: NASA meatball left-aligned
- Main nav links: Public Sans Web 14px, `#565C65` muted (not white — they recede intentionally)
- Mobile: hamburger icon, full-screen dark drawer

### Labels & Metadata
DM Mono labels ("4 min read", category names) are the most distinctive component:
- Font: `dm-mono`, 11px, 500 weight
- Color: `#FFFFFF` on dark, `#1B1B1B` on light
- Transform: `text-transform: uppercase`
- Letter-spacing: `3.5px` — dramatically wide
- No background, no border, no padding — raw uppercase text

## Do's and Don'ts

**Do:**
- Use `#000000` as the dominant surface color — NASA UI lives in darkness
- Pair Inter at 700–800 with 1.0 line-height for all display headings — tight, cinematic, no-breathing-room
- Apply DM Mono + uppercase + 3.5px tracking to all metadata labels (read-time, categories)
- Let photography fill sections edge-to-edge with no border-radius or frame
- Restrict color use to exactly: NASA Red (`#D83933`) for primary actions, NASA Blue (`#005EA2`) for secondary actions
- Keep all components flat with `0px` radius as default — only add `4px` for primary action buttons
- Use `#B9B9BB` for body copy on dark backgrounds — not pure white, which feels harsh

**Don't:**
- Don't add box-shadows — NASA's aesthetic is completely flat
- Don't use decorative colors beyond the red/blue brand pair — no purples, oranges, or greens
- Don't round containers, cards, or images — rectangular geometry only
- Don't use letter-spacing on headings or body copy — only `3.5px` on DM Mono labels
- Don't use font weights between 400 and 600 for Inter — use 400 (not used), 600, 700, or 800 only
- Don't use positive padding between cards — use transparent backgrounds that allow section color to show
- Don't place light text on light backgrounds — the system assumes high-contrast dark surfaces for most content

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|-----------|-------|-------------|
| Mobile | < 640px | Single column, collapsed nav, 12px side margins |
| Tablet | 640–1024px | 2-column card grids, expanded typography |
| Desktop | > 1024px | Full 12-column USWDS grid, 3-column cards, expanded nav |

### Touch Targets
- Minimum touch target: 44×44px (USWDS/WCAG requirement)
- Buttons minimum height: 44px to meet federal accessibility standards
- Nav links minimum height: 44px touch area
- All interactive elements meet WCAG 2.1 AA contrast ratios

### Collapsing Strategy
- Navigation collapses to hamburger at mobile viewports
- Three-column card grids become single-column below 640px
- Hero display text (80px) scales down to ~40px on mobile
- Side margins compress to 12px at mobile, 24px at desktop
- Search panel slides down as a full-width overlay on mobile

### Image Behavior
- Hero images fill `100vw` at all breakpoints with `object-fit: cover`
- Article thumbnail aspect ratio: 16:9 (enforced via `aspect-ratio: 16/9`)
- Images never receive border-radius or drop shadows
- `loading="lazy"` on below-fold images per government performance standards

## Agent Prompt Guide

### Quick Color Reference
- Primary (NASA Red): `#D83933`
- Primary active (hover): `#AF1708`
- Accent blue (NASA Blue): `#005EA2`
- Canvas (light sections): `#FFFFFF`
- Surface (dominant dark): `#000000`
- Surface mid (dark cards): `#1B1B1B`
- On-dark text: `#FFFFFF`
- Muted on dark: `#B9B9BB`
- Muted on light / nav links: `#565C65`
- Hairline border: `#565C65`
- Overlay scrim: `rgba(0,0,0,0.7)`

### Example Component Prompts

**Hero Section (Dark):**
"Create a full-bleed dark hero on `#000000` background with a space photograph filling the section. Headline: Inter, 80px, 800 weight, `#FFFFFF`, 1.0 line-height. Subtext: Public Sans Web, 18px, 400 weight, `#B9B9BB`, 1.65 line-height. Red CTA button: `#D83933` background, `#FFFFFF` text, Inter 18px 600 weight, 4px radius, 12px 20px padding."

**Content Card:**
"Create a transparent content card on a dark background. Label: DM Mono, 11px, 500 weight, `#FFFFFF`, uppercase, 3.5px letter-spacing. Title: Inter, 22px, 700 weight, `#FFFFFF`. Body: Public Sans Web, 16px, `#B9B9BB`. No card border, no shadow, no border-radius."

**Navigation Bar:**
"Create a `#000000` navigation bar, 68px height, 24px side padding. NASA meatball SVG logo left-aligned. Nav links: Public Sans Web, 14px, `#565C65`, no underline, 16px padding. CTA 'Try NASA+' right-aligned: `#D83933` background, `#FFFFFF` text, Inter 18px 600, 4px radius, 12px 20px padding."

**Button Set:**
"NASA Red primary: `#D83933` background, `#FFFFFF` text, Inter 18px 600, 4px radius, 12px 20px padding. NASA Blue secondary: `#005EA2` background, same text/font/padding. Ghost: transparent, `#FFFFFF` text, 0px radius, 12px 24px padding."

### Iteration Guide
1. Start with `#000000` as your dominant surface — not dark gray, actual black
2. Load Inter (weights 600, 700, 800) and Public Sans (weight 400) from Google Fonts
3. Load DM Mono (weight 500) for all metadata labels — always uppercase, always 3.5px tracking
4. Use exactly two brand colors: `#D83933` (primary actions) and `#005EA2` (secondary actions)
5. Keep border-radius at 0px on everything except action buttons (4px)
6. Never add box-shadows — depth comes from photography and color contrast only
7. For text on dark: use `#FFFFFF` for headings and titles, `#B9B9BB` for body copy
