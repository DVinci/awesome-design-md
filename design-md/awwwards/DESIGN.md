---
version: alpha
name: Awwwards
description: |
  Awwwards is the web design community's most prestigious award platform, and its design language practices radical editorial restraint. A near-monochromatic palette of charcoal (#222222) on warm off-white (#F8F8F8) creates a neutral stage that lets the extraordinary web work it curates take center stage. Inter Tight — the single typeface — spans from ultra-light 300-weight body copy to massive 600-weight uppercase display headings at 112px, making font weight the primary hierarchy lever. Orange (#FA5D29) and a family of category-specific colors (awards purple, inspire green, learn yellow, jobs blue) add the minimum necessary color to a fundamentally black-and-white world.

colors:
  primary: "#222222"
  primary-active: "#000000"
  canvas: "#F8F8F8"
  surface: "#FFFFFF"
  ink: "#222222"
  body: "#222222"
  muted: "#A7A7A7"
  hairline: "#EDEDED"
  on-dark: "#FFFFFF"
  accent-orange: "#FA5D29"
  accent-purple: "#502BD8"
  accent-green: "#AAEEC4"
  accent-yellow: "#FFF083"

typography:
  display-xl:
    fontFamily: '"Inter Tight", -apple-system, BlinkMacSystemFont, sans-serif'
    fontSize: 112px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0px
  display-lg:
    fontFamily: '"Inter Tight", -apple-system, BlinkMacSystemFont, sans-serif'
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0px
  title-lg:
    fontFamily: '"Inter Tight", -apple-system, BlinkMacSystemFont, sans-serif'
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0px
  title-md:
    fontFamily: '"Inter Tight", -apple-system, BlinkMacSystemFont, sans-serif'
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0px
  body-lg:
    fontFamily: '"Inter Tight", -apple-system, BlinkMacSystemFont, sans-serif'
    fontSize: 15px
    fontWeight: 300
    lineHeight: 1.8
    letterSpacing: 0px
  body-md:
    fontFamily: '"Inter Tight", -apple-system, BlinkMacSystemFont, sans-serif'
    fontSize: 14px
    fontWeight: 300
    lineHeight: 2.0
    letterSpacing: 0px
  body-sm:
    fontFamily: '"Inter Tight", -apple-system, BlinkMacSystemFont, sans-serif'
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  button:
    fontFamily: '"Inter Tight", -apple-system, BlinkMacSystemFont, sans-serif'
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0px
  nav-link:
    fontFamily: '"Inter Tight", -apple-system, BlinkMacSystemFont, sans-serif'
    fontSize: 14px
    fontWeight: 300
    lineHeight: 2.0
    letterSpacing: 0px
  caption:
    fontFamily: '"Inter Tight", -apple-system, BlinkMacSystemFont, sans-serif'
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: 0px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 52px
  section: 80px

rounded:
  xs: 4px
  sm: 8px
  lg: 14px
  pill: 72px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0px 20px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0px 20px"
    border: "none"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0px 24px"
    border: "1px solid {colors.primary}"

  card-base:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"

  pricing-card-featured:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "none"

  badge:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: "0px 4px"

  text-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
    border: "1px solid {colors.hairline}"

  text-input-focused:
    border: "1px solid {colors.primary}"

  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: "none"
---

# Awwwards Design System

## Overview

Awwwards is the web design community's most prestigious award platform, and its design language is editorial restraint as a philosophy. The entire palette reduces to three shades: charcoal (#222222), warm off-white (#F8F8F8), and pure white (#FFFFFF). This near-monochromatic foundation ensures that the exceptional web projects being showcased always dominate visually — the platform itself stays typographically bold but chromatically silent.

Inter Tight works at enormous range across the entire interface: ultra-light weight 300 for body copy and navigation, medium 500 for UI labels, semibold 600 for site titles and hero headings. The display treatment cranks Inter Tight to 112px uppercase, making typographic scale the primary visual statement. Orange (#FA5D29) is the only warm color, reserved for featured awards, error states, and notification badges. A secondary palette of category-specific colors maps to the platform's content taxonomy sections (purple for awards, green for inspiration, yellow for learning, blue for jobs).

Key visual characteristics:
- **Monochromatic foundation** — #222 on #F8F8F8; color is functional, not decorative
- **Inter Tight as the single typeface** — weights 300–800 carry the entire design; no secondary font
- **Weight is the hierarchy lever** — 300 for navigation/metadata, 500 for UI labels, 600 for headings
- **Massive uppercase display type** — 112px Inter Tight for hero sections; no other display font needed
- **Black-only primary buttons** — CTA is always #222222 background; no colored action buttons
- **Flat design without shadows** — elevation through background contrast (canvas vs. surface), never shadows
- **Generous editorial line-height** — 2× body line-height (28px on 14px) creates spacious reading rhythm
- **Category color taxonomy** — orange (connect), purple (awards), green (inspire), yellow (learn), blue (jobs)

Awwwards differentiates from Behance, Dribbble, and Product Hunt by treating the platform UI as a secondary visual element — ultra-refined restraint so that the showcased work is always the most visually interesting thing on the page.

## Colors

### Brand & Primary
- **Primary / Ink** `#222222` — the single brand color; used for buttons, body text, borders, badges, and inverted card backgrounds. Near-black, not pure black.
- **Primary Active** `#000000` — pure black for hover and pressed states on dark interactive elements

### Surface
- **Canvas** `#F8F8F8` — warm off-white page background; all page sections use this as their base
- **Surface** `#FFFFFF` — pure white for cards, modals, search bar inputs, and elevated components
- **Hairline** `#EDEDED` — borders, card edges, input outlines, dividers; barely-there separator

### Text
- **Ink** `#222222` — headings, labels, navigation links, UI text
- **Body** `#222222` — paragraph and descriptive text (same as ink — no separate body shade)
- **Muted** `#A7A7A7` — secondary metadata: scores, timestamps, author names, subdued labels

### Accent & Category Colors
- **Accent Orange** `#FA5D29` — featured award highlights ("SOTD" indicator), error states, notification count badges
- **Accent Purple** `#502BD8` — Awards/W.Awards section backgrounds, tags, and hover tints
- **Accent Green** `#AAEEC4` — Inspire/Creativity section backgrounds and category tags
- **Accent Yellow** `#FFF083` — Learn/Academy section backgrounds and category tags

## Typography

### Font Family
**Inter Tight** — a condensed variable-weight sans-serif. The condensed metrics allow dramatically large display text without horizontal overflow. Load from Google Fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700;800&display=swap');
```

Inter Tight is not a system font but is available in the Google Fonts library. For development substitutes, regular Inter is close but lacks the condensed optical sizing.

### Type Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|--------|-------------|----------------|-----|
| display-xl | 112px | 600 | 1.0 | 0 | Hero headings — viewport-relative, uppercase |
| display-lg | 22px | 600 | 1.2 | 0 | Named section headings (--text-size-large) |
| title-lg | 18px | 600 | 1.4 | 0 | Subsection titles (--text-size-medium) |
| title-md | 15px | 600 | 1.0 | 0 | Site name in listings, card headings |
| body-lg | 15px | 300 | 1.8 | 0 | Lead body copy, feature descriptions |
| body-md | 14px | 300 | 2.0 | 0 | Standard body, footer links |
| body-sm | 11px | 400 | 1.6 | 0 | Scores, metadata, system labels |
| button | 14px | 500 | 1.0 | 0 | Button labels |
| nav-link | 14px | 300 | 2.0 | 0 | Navigation links, footer links |
| caption | 11px | 500 | 1.6 | 0 | Award type labels ("SOTD", "DEV"), badge text |

### Typography Principles
- **Weight is the primary hierarchy tool** — size barely changes (11–22px for UI text); weight jumps from 300 to 600 signal hierarchy
- **Display headings are uppercase and fluid** — the 112px hero text is viewport-relative (`vw`-based); maintain `text-transform: uppercase`
- **Line-height is editorial** — 2× line-height on body (14px text, 28px line-height) creates the signature reading rhythm
- **Letter-spacing is always normal (0)** — Inter Tight's condensed design provides all necessary optical tightness; never add explicit tracking
- **Button height via line-height** — primary buttons have `line-height: 42px` with zero vertical padding; height is set typographically

## Layout

### Spacing System
Base unit: 4px.

| Token | Value | Use |
|-------|-------|-----|
| xs | 4px | Badge padding, tiny gaps |
| sm | 8px | Icon gaps, tight chip padding |
| md | 16px | Default element padding, form field padding (--pad-input) |
| lg | 20px | Grid gutters (--gutter), between-card gaps |
| xl | 24px | Button horizontal padding (--button-pad), card internal padding |
| xxl | 52px | Inner page content padding (--pad-inner) |
| section | 80px | Between major page sections |

### Grid & Container
- **Header height**: 71px (--header-height)
- **Content max-width**: ~1440px with 52px inner padding on each side
- **Card grid**: 3–4 columns on desktop, 2 on tablet, 1 on mobile, 20px gutters
- **Thumbnail aspect ratio**: 16:12 for standard site screenshots; 2:1 for panoramic previews

### Whitespace Philosophy
Awwwards uses whitespace to signal quality. The 2× body line-height and generous section gaps communicate editorial confidence — the page never feels packed. Off-white canvas (#F8F8F8) between cards creates breathing room without introducing visual noise.

## Elevation & Depth

Awwwards does not use box-shadows. Elevation is expressed entirely through background color contrast.

| Level | Treatment | Example |
|-------|-----------|---------|
| 0 — Canvas | `#F8F8F8` | Page background, navigation background |
| 1 — Surface | `#FFFFFF` | Cards, modals, search inputs, elevated panels |
| 2 — Inverted | `#222222` | Featured/selected states, CTA buttons, dark pricing cards |

**Shadow Philosophy:** No drop-shadows or blur effects anywhere on the platform. Card boundaries are defined by `1px solid #EDEDED` borders or by the implicit contrast of a white card on off-white canvas. This completely flat design ensures that screenshots and photography remain the only elements with perceived depth.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| xs | 4px | Badges/tags, thumbnail image corners, small chips |
| sm | 8px | Buttons, form inputs, search bar |
| lg | 14px | Large cards, modals, pricing tier containers |
| pill | 72px | Full-pill promotional buttons, avatar circles |

**Shape Philosophy:** Restrained rounding — just enough to feel modern without being bubbly. Thumbnails get 4px. Buttons and inputs share 8px. Large cards and pricing tiers use 14px (1rem at 14px root font-size). No sharp 0px corners anywhere in the product UI.

### Photography & Imagery
- **Site screenshots**: 16:12 aspect ratio, 4px radius corners, no borders; metadata overlay appears on hover
- **User avatars**: circular, displayed against canvas (#F8F8F8) or surface (#FFFFFF) backgrounds
- **Category imagery**: full-bleed photography with the section's accent color used as tint or overlay

## Components

### Buttons

**Primary** ("Be Pro", "Sign Up") — `#222222` background, white text. Inter Tight 14px weight 500. Height 42px via `line-height: 42px` (no vertical padding). Horizontal padding `0px 20px`. 8px radius. No border. On hover: pure black (`#000000`).

**Secondary / Outline** ("Submit Website", "Follow") — transparent background, `#222222` text, `1px solid #222222` border. Same Inter Tight 14px weight 500. Horizontal padding `0px 24px`. 8px radius. Height 42px via line-height.

**Pill Variant** — same as primary but with 72px radius (--button-rounded-full). Used for premium promotional CTAs.

### Cards

**Site Thumbnail Card** — white (#FFFFFF) background, 14px radius, no shadow, `1px solid #EDEDED` border on hover only. Contains screenshot image (4px radius, 16:12 aspect ratio), site name (15px weight 600), and author/agency (14px weight 300 color #A7A7A7).

**Pricing Card** — Standard: white background, 14px radius, `1px solid #EDEDED` border. Featured tier: `#222222` background, white text, 14px radius, no border — the inverted card signals the recommended plan.

### Inputs & Forms

**Search Bar** — white background, 8px radius, 48px height, magnifier icon on the left. No visible border at rest; `1px solid #EDEDED` on hover. Inter Tight 14px weight 300 placeholder and input text.

**Standard Input** — white background, 8px radius, `1px solid #EDEDED` border, `12px 16px` padding. On focus: `1px solid #222222`. Height 48px (--height-input).

### Navigation

**Top Nav** — `#F8F8F8` background, 71px height. Logo: "W." mark (Inter Tight weight 800). Links: Inter Tight 14px weight 300. Right side: Log in (text link) | Sign Up (text link) | Be Pro (primary button) | Submit Website (outline button). No bottom border or shadow.

**Tab Navigation** — horizontal tabs with 8px radius. Active: `#222222` background, white text. Inactive: transparent, `#222222` text.

### Badges & Award Chips

**Badge** ("New", "SOTD", "DEV") — `#222222` background, white text. Inter Tight 11px weight 500. 4px radius. Padding `0px 4px`.

**Category Chips** — pill-shaped, colored by category accent: orange for Connect, purple for Awards, green for Inspire, yellow for Learn, blue for Jobs.

## Do's and Don'ts

**Do:**
- Use Inter Tight as the only typeface — weights 300–800 carry the entire visual hierarchy
- Make weight the primary signal: 300 for metadata, 500 for UI labels, 600 for headings
- Scale hero headings with viewport units — `font-size: 8vw` produces the ~112px display treatment
- Always uppercase hero display text; leave all other text in natural case
- Use `#222222` as your only CTA button color — no colored action buttons
- Keep the canvas at `#F8F8F8` — the warm off-white is essential to the brand's warmth
- Use `2× line-height` for body text (28px on 14px) to maintain the editorial reading rhythm
- Reserve accent colors strictly for category taxonomy tags and section highlights

**Don't:**
- Add colored (non-black) primary buttons — the black button IS the brand aesthetic
- Use drop-shadows or elevation effects — this is a completely flat design system
- Apply letter-spacing to Inter Tight — the condensed design handles its own optical spacing
- Use accent colors (orange, purple, green, yellow) as backgrounds on cards or buttons
- Mix multiple radius values on the same element category — thumbnails are 4px, buttons 8px, cards 14px
- Use more than 3 font weights on a single page section
- Set explicit `font-size` for display text — use `vw` units so it scales naturally

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 768px | Nav collapses to hamburger, display text ~48px, 1-column grid |
| Tablet | 768–1024px | 2-column card grid, condensed nav, display text ~72px |
| Desktop | 1024–1440px | 3–4 column card grid, full horizontal nav, display text 112px |
| Wide | 1440px+ | Max-container centered, 52px inner padding maintained |

### Touch Targets
- Buttons: 42px height minimum; 44px adjusted on mobile via media query
- Navigation links: minimum 44px tappable area with surrounding padding
- Site cards: entire card is tappable, not just the title text

### Collapsing Strategy
- **Navigation**: full horizontal nav collapses to hamburger + key CTAs (Log in, Sign Up) on mobile
- **Hero display text**: scales from 112px → 72px → 48px using viewport-width units
- **Card grid**: 4-column → 3-column → 2-column → 1-column as width decreases
- **Search bar**: compact icon-only in nav on mobile; full-width pill on focus

### Image Behavior
- Site screenshots maintain 16:12 aspect ratio at all sizes using `aspect-ratio: 16 / 12`
- Images use `object-fit: cover` within fixed aspect-ratio boxes
- Hover metadata overlay transitions from opacity 0 to 1 on the screenshot thumbnail

## Agent Prompt Guide

### Quick Color Reference
- Primary (near-black): #222222
- Primary hover: #000000
- Canvas (background): #F8F8F8
- Surface (cards/inputs): #FFFFFF
- Ink (text): #222222
- Muted text: #A7A7A7
- Hairline (borders): #EDEDED
- Accent orange: #FA5D29
- Accent purple: #502BD8
- Accent green: #AAEEC4

### Example Component Prompts

**Hero Section:**
"Create a hero on #F8F8F8 background. Display headline in Inter Tight, font-size 8vw (approx 112px at 1400px viewport), weight 600, uppercase, line-height 1.0, color #222222. Subtext at 14px weight 300 color #A7A7A7, line-height 2.0. Black CTA button: #222222 background, 8px radius, padding 0px 20px, height 42px via line-height, Inter Tight 14px weight 500, white text, no border."

**Site Thumbnail Card:**
"Create a site listing card on white (#FFFFFF) background, 14px border-radius, 1px solid #EDEDED border. Top: screenshot image with 4px radius and 16:12 aspect-ratio. Below image: site name in Inter Tight 15px weight 600 #222222. Studio name in 14px weight 300 #A7A7A7. No shadow."

**Button Set:**
"Primary button: #222222 background, 8px radius, padding 0px 20px, line-height 42px (sets height), Inter Tight 14px weight 500, white text, no border. Outline button: transparent, 1px solid #222222, same radius, padding 0px 24px, same line-height, Inter Tight 14px weight 500, #222222 text."

**Badge:**
"Award badge: #222222 background, white text, Inter Tight 11px weight 500, 4px border-radius, padding 0px 4px. Label: 'SOTD'."

### Iteration Guide
1. Load Inter Tight from Google Fonts with weights 300, 400, 500, 600, 700, 800
2. Set root `font-size: 14px` — this makes `1rem = 14px`, matching Awwwards's scale
3. Set page background to `#F8F8F8` — not white, not gray; the warm off-white is the brand
4. Jump from weight 300 to 600 for hierarchy — skip 400 and 500 for headings
5. All action buttons use `#222222` background — never colored buttons
6. Set `line-height: 42px` on button elements (no vertical padding) to achieve standard button height
7. Radius: 4px on images, 8px on inputs/buttons, 14px on cards — never mix these
8. Reserve accent colors (orange, purple, green, yellow) only for category taxonomy, not UI elements
