---
version: alpha
name: Pexels
description: |
  Pexels is a free stock photography and video platform with a clean, photography-first
  design system. The visual identity is built around a near-black primary palette with
  a teal-green brand accent, generous whitespace, and Canva Sans as the sole typeface.
  The interface recedes behind the imagery — muted chrome, minimal borders, and a
  masonry grid that lets photos dominate every screen.

colors:
  primary: "#191919"
  primary-active: "#000000"
  accent-teal: "#05A081"
  accent-teal-light: "#54CA84"
  canvas: "#FFFFFF"
  surface: "#F7F7F7"
  surface-dark: "#232A34"
  ink: "#000000"
  body: "#191919"
  muted: "#393939"
  muted-light: "#4A4A4A"
  subtle: "#747474"
  hairline: "#A8A8A8"
  on-dark: "#FFFFFF"
  on-primary: "#FFFFFF"
  semantic-success: "#05A081"
  semantic-warning: "#F5A623"
  semantic-error: "#E5484D"

typography:
  display-xl:
    fontFamily: '"Canva Sans", "Helvetica Neue", Roboto, -apple-system, BlinkMacSystemFont, sans-serif'
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -2px
  display-md:
    fontFamily: '"Canva Sans", "Helvetica Neue", Roboto, -apple-system, BlinkMacSystemFont, sans-serif'
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -1px
  title-lg:
    fontFamily: '"Canva Sans", "Helvetica Neue", Roboto, -apple-system, BlinkMacSystemFont, sans-serif'
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: -1.5px
  title-md:
    fontFamily: '"Canva Sans", "Helvetica Neue", Roboto, -apple-system, BlinkMacSystemFont, sans-serif'
    fontSize: 23px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: -0.345px
  body-lg:
    fontFamily: '"Canva Sans", "Helvetica Neue", Roboto, -apple-system, BlinkMacSystemFont, sans-serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: -0.5px
  body-md:
    fontFamily: '"Canva Sans", "Helvetica Neue", Roboto, -apple-system, BlinkMacSystemFont, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.5px
  body-sm:
    fontFamily: '"Canva Sans", "Helvetica Neue", Roboto, -apple-system, BlinkMacSystemFont, sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  button:
    fontFamily: '"Canva Sans", "Helvetica Neue", Roboto, -apple-system, BlinkMacSystemFont, sans-serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.5px
  nav-link:
    fontFamily: '"Canva Sans", "Helvetica Neue", Roboto, -apple-system, BlinkMacSystemFont, sans-serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: -0.5px
  caption:
    fontFamily: '"Canva Sans", "Helvetica Neue", Roboto, -apple-system, BlinkMacSystemFont, sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 30px
  section: 48px

rounded:
  xs: 2px
  sm: 6px
  md: 12px
  lg: 20px
  xl: 25px
  pill: 1000px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    border: "1px solid {colors.primary}"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    border: "1px solid {colors.primary-active}"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    border: "1px solid {colors.hairline}"

  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.body}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: "12px 16px"
    border: "none"

  button-pill:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
    border: "none"

  tab-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.pill}"
    padding: "8px 20px"
    border: "none"

  tab-inactive:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.pill}"
    padding: "8px 20px"
    border: "none"

  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "none"

  card-photo:
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: "0"
    border: "none"

  text-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
    border: "none"

  text-input-focused:
    border: "1px solid {colors.primary}"

  badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
    border: "none"

  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    padding: "0 {spacing.xxl}"
    border: "none"
---

# Pexels Design System

## Overview

Pexels operates on a principle of radical visual restraint — the design system exists to frame and present photographs, not to compete with them. Every chrome element is either near-black or near-white, and the only chromatic accent (a teal-green) is reserved for interactive confirmations and brand moments. The result is an interface that feels invisible when browsing and decisive when acting.

The typographic palette is monofont (Canva Sans only), with heavy negative letter-spacing on display sizes that compresses headings into tight, editorial blocks. Navigation and body copy share the same weight (400) at 17px, maintaining a flat information hierarchy that lets imagery carry the visual weight.

Key visual characteristics:
- Near-black primary (#191919) used for CTAs, active tabs, and the navbar call-to-action buttons
- Teal-green accent (#05A081) reserved for interactive links, accept states, and brand confirmation moments
- Masonry photo grid is the dominant layout pattern — the entire homepage is organized around it
- Canva Sans typeface with aggressive negative tracking (-2px at display, -0.5px at body) throughout
- 12px border-radius is the standard button radius; 20px for content cards; 1000px for pill-shaped tabs
- Surface (#F7F7F7) used only for the search bar container, keeping all other chrome on white canvas
- Photography overlays use semi-transparent black (#00000080) scrim for text legibility on images
- Dark navy (#232A34) appears as the mobile theme-color and dark mode surface

The brand differentiates from Getty and Shutterstock through its open, community-driven ethos reflected in design: generous whitespace, a two-action nav (Join / Upload), and a challenge system surfaced on the homepage.

## Colors

### Brand & Accent

| Token | Hex | Use |
| ----- | --- | --- |
| `primary` | `#191919` | CTA buttons, active tab indicator, Upload/Join buttons |
| `accent-teal` | `#05A081` | Interactive links, brand success states, cookie accept highlight |
| `accent-teal-light` | `#54CA84` | "Accept All" button hover/active, prominent confirmation CTAs |

### Surface

| Token | Hex | Use |
| ----- | --- | --- |
| `canvas` | `#FFFFFF` | Page background, navbar background |
| `surface` | `#F7F7F7` | Search bar container, input field backgrounds |
| `surface-dark` | `#232A34` | Dark mode surface, mobile theme-color, footer background |

### Text

| Token | Hex | Use |
| ----- | --- | --- |
| `ink` | `#000000` | H1 display headings, primary text on white canvas |
| `body` | `#191919` | Navigation links, standard body copy |
| `muted` | `#393939` | H3 headings, inactive tab labels |
| `muted-light` | `#4A4A4A` | H2 subheadings, secondary content |
| `subtle` | `#747474` | Captions, metadata, helper text |
| `on-dark` | `#FFFFFF` | Text on primary buttons, text on dark surfaces |
| `on-primary` | `#FFFFFF` | Text rendered on `#191919` primary backgrounds |
| `hairline` | `#A8A8A8` | Borders, dividers, inactive input borders |

### Semantic

| Token | Hex | Use |
| ----- | --- | --- |
| `semantic-success` | `#05A081` | Success states (matches accent-teal) |
| `semantic-warning` | `#F5A623` | Warning indicators |
| `semantic-error` | `#E5484D` | Error states, destructive actions |

## Typography

### Font Family

Pexels uses a single font family, **Canva Sans**, which is Canva's proprietary sans-serif. As it is not available via public CDNs, use `"Helvetica Neue", Roboto, -apple-system, BlinkMacSystemFont, sans-serif` as the full fallback stack.

```css
font-family: "Canva Sans", "Helvetica Neue", Roboto, -apple-system, BlinkMacSystemFont, sans-serif;
```

### Hierarchy Table

| Role | Size | Weight | Line Height | Letter Spacing | Use |
| ---- | ---- | ------ | ----------- | -------------- | --- |
| `display-xl` | 48px | 700 | 1.1 | -2px | H1 hero headlines |
| `display-md` | 32px | 700 | 1.15 | -1px | Section display headings |
| `title-lg` | 24px | 700 | 1.3 | -1.5px | Card headings, H4 |
| `title-md` | 23px | 700 | 1.4 | -0.345px | H3 sidebar/modal headings |
| `body-lg` | 17px | 400 | 1.6 | -0.5px | Navigation, button labels, lead copy |
| `body-md` | 16px | 400 | 1.5 | -0.5px | Standard paragraph text |
| `body-sm` | 14px | 400 | 1.4 | 0 | Footer, metadata, nav utility links |
| `button` | 17px | 400 | 1.0 | -0.5px | All button labels |
| `nav-link` | 17px | 400 | 1.6 | -0.5px | Navbar links (Explore, License) |
| `caption` | 14px | 400 | 1.4 | 0 | Image captions, tags |

### Principles

- Single weight strategy: 400 for all body/UI, 700 reserved exclusively for headings
- Negative letter-spacing is mandatory on all display and heading sizes — the brand identity depends on this compression
- No italic styles are used in the primary UI
- Font substitute note: Canva Sans is proprietary. Helvetica Neue is the closest match for character width and neutrality

## Layout

### Spacing System

Base unit is 4px. Named scale aligns to a relaxed 4px/8px grid.

| Token | Value | Use |
| ----- | ----- | --- |
| `xxs` | 4px | Tight icon padding, inline gaps |
| `xs` | 8px | Small tag padding, icon margins |
| `sm` | 12px | Input vertical padding, compact card padding |
| `md` | 16px | Standard block margin, paragraph separation |
| `lg` | 20px | Button padding (horizontal), nav item padding |
| `xl` | 24px | Card padding, section-internal gaps |
| `xxl` | 30px | Navbar horizontal padding |
| `section` | 48px | Section-to-section vertical gap |

### Grid & Container

- Max container width: ~1280px (inferred from nav padding patterns)
- Photo grid: masonry layout with responsive column count (3–4 columns on desktop, 2 on tablet, 1 on mobile)
- Search bar: full-width within a centered container (~680px max width)
- Nav: full-width with 30px horizontal padding on both sides

### Whitespace Philosophy

Pexels uses section-level whitespace (48px+) generously between content zones, but is tight within component boundaries — especially on buttons (padding follows content) and cards (the photo itself is the padding). The homepage is structured as alternating full-bleed photo grids and concise text blocks with minimal decorative separation.

## Elevation & Depth

### Levels

| Level | Treatment | Example Use |
| ----- | --------- | ----------- |
| 0 — Flat | No shadow, hairline border or none | Navbar, page backgrounds |
| 1 — Card | No shadow, radius 20px clip | Photo grid cards, challenge cards |
| 2 — Overlay | Semi-transparent black scrim (#00000080) | Text over hero photographs, photo overlays |
| 3 — Modal | White background, drop shadow | Cookie consent dialog, auth modals |

### Shadow Philosophy

Pexels is essentially shadowless. Depth is created through photography contrast and border-radius clipping, not box-shadows. The only true shadow usage is on modal/dialog overlays. The cookie banner uses a soft drop-shadow to separate from page content.

## Shapes

### Border Radius Scale

| Token | Value | Use |
| ----- | ----- | --- |
| `xs` | 2px | Micro elements, toggles |
| `sm` | 6px | Small badges, input corners on mobile |
| `md` | 12px | Primary/secondary/ghost buttons — the default radius |
| `lg` | 20px | Photo cards, challenge cards, featured content cards |
| `xl` | 25px | Ghost nav buttons, large interactive areas |
| `pill` | 1000px | Tab indicators, filter pills, rounded full buttons |

### Photography & Imagery

- Masonry grid with no gap or 2px gap between photos — images touch or near-touch
- Photos are always cropped to fill their container (object-fit: cover)
- Aspect ratios vary — masonry respects original proportions
- Challenge/feature cards are portrait orientation (~3:4) with 20px border-radius clip
- No border frames on photography; rounding is the only treatment applied

## Components

### Buttons

**Primary Button** — Near-black fill, white text, 12px radius, 12px 20px padding.
The standard action button (Upload, Join). Uses `#191919` background with `1px solid #191919` border.

**Ghost Button** — Transparent background, near-black text, 25px radius, 12px 16px padding.
Used for nav items (Explore, License). No border. Larger radius makes it feel pill-adjacent.

**Pill Tab** — Black fill (active) or transparent (inactive), 1000px radius, 8px 20px padding.
Used for content type filters (Photos, Videos, Leaderboard). Active state is solid black, inactive is transparent with muted text.

**Search Bar Dropdown Button** — White background, black text, 12px radius, 12px 11px 12px 16px padding.
Used for the "Photos" content-type selector within the search bar.

### Search Bar

Full-width container with `#F7F7F7` background and 12px radius. Contains:
- A content-type dropdown pill on the left (Photos/Videos selector)
- An input field (transparent background, 17px Canva Sans)
- A search icon button on the right (transparent, 12px radius)

### Cards

**Photo Card** — Zero-radius image tile in masonry grid. No border, no shadow. Hover state reveals creator credit overlay with black scrim.

**Challenge Card** — 20px border-radius, portrait orientation, photo fill with text overlay. Displays countdown timer, title, and a "Join" CTA. White text on photograph.

### Navigation

Transparent/white background with 30px horizontal padding. Contains:
- Logo (left)
- Navigation links: Explore, License (center-left, 17px Canva Sans, #191919)
- Auth CTAs: Upload button (`#191919` solid), Join button (`#191919` solid), both 12px radius

### Badges & Tags

Pill-shaped (`border-radius: 50px`) with 6px padding. Transparent or surface background. Used for category labels and metadata. 14px Canva Sans, #000000 text.

## Do's and Don'ts

**Do:**
- Use aggressive negative letter-spacing (-2px) on all H1 display text — it is core to the brand compression
- Keep button radius at 12px for standard actions; use 1000px only for filter tabs/pills
- Let photography dominate — keep chrome minimal, muted, and colorless where possible
- Use `#F7F7F7` (surface) only for input container backgrounds; keep all other UI on white canvas
- Reserve the teal-green (`#05A081`) exclusively for interactive/confirmation moments — it signals action
- Apply a semi-transparent black scrim (#00000080) when placing any text over photography
- Use weight 700 only for headings; keep all UI labels, buttons, and body text at weight 400

**Don't:**
- Don't use shadows on buttons or cards — the brand is flat and photography provides all depth
- Don't mix multiple font families — Canva Sans (or its fallback stack) is the only typeface
- Don't use the teal-green for decorative purposes — it is a functional signal, not a brand splash
- Don't apply borders to photo grids — images should be borderless within their clipped radius
- Don't use letter-spacing of 0 or positive values on headings — tracking must always be negative
- Don't place dark-colored backgrounds behind content sections; only the surface color (#F7F7F7) is permitted for component backgrounds on light mode
- Don't use more than two typographic weights on any single screen
- Don't add border-radius larger than 20px to content cards (photo tiles, feature cards)

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
| ---------- | ----- | ----------- |
| Mobile | < 768px | Single-column masonry, H1 drops to ~36px, nav collapses to hamburger, search bar full-width |
| Tablet | 768–1024px | 2-column masonry, H1 at 42px, nav shows text links |
| Desktop | 1024px+ | 3–4 column masonry, H1 at 48px, full nav with Upload/Join CTAs |

### Touch Targets

Minimum interactive element height: 44px (buttons have `min-height` set via line-height + padding). Tab pills use 8px vertical padding with 17px font, yielding ~33px — ensure touch targets are padded on mobile.

### Collapsing Strategy

- **Navigation:** Logo + hamburger on mobile; full link set + CTAs on desktop
- **Photo Grid:** Masonry reduces column count from 4→2→1 across breakpoints
- **Search Bar:** Stays full-width at all breakpoints; content-type selector may hide on smallest screens
- **Challenge Cards:** Horizontal row of portrait cards collapses to horizontal scroll on mobile

### Image Behavior

- Photos always `object-fit: cover` within their grid cells
- Masonry preserves natural image aspect ratios — no forced crop on grid layout
- Challenge cards use portrait-locked containers (~240px × 320px) regardless of viewport

## Agent Prompt Guide

### Quick Color Reference

- Primary (CTA button background): #191919
- Canvas (page background): #FFFFFF
- Surface (input background): #F7F7F7
- Ink (H1 text): #000000
- Body text: #191919
- Muted text: #393939
- Subtle/caption text: #747474
- Hairline (borders): #A8A8A8
- Accent teal (interactive): #05A081
- Accent teal light (confirm): #54CA84
- On-primary (button text): #FFFFFF
- Dark surface (dark mode/mobile): #232A34

### Example Component Prompts

**Hero Section:**
"Create a hero on white (#FFFFFF) background. Headline 48px, weight 700, Helvetica Neue (Canva Sans fallback), letter-spacing -2px, color #000000. Subtext 17px, weight 400, color #191919, letter-spacing -0.5px. Search bar below: #F7F7F7 background, 12px radius, full width up to 680px, contains a content-type pill selector and search input. Below search, show pill tabs (Photos, Videos) — active tab: #191919 background, white text, 1000px radius; inactive: transparent, #393939 text."

**Photo Card:**
"Create a photo card with 20px border radius, no border, no shadow. Fill with photography (object-fit: cover). On hover, overlay a semi-transparent black scrim (#00000080) with creator name in 14px white Helvetica Neue at bottom-left with 16px padding."

**Button Set:**
"Primary button: #191919 background, 12px border-radius, 12px 20px padding, 17px Helvetica Neue weight 400, letter-spacing -0.5px, white text, 1px solid #191919 border. Ghost nav button: transparent background, same font/size, 25px border-radius, 12px 16px padding, #191919 text, no border."

**Search Pill Tab:**
"Active filter tab: #000000 background, white text, 17px Helvetica Neue weight 400, letter-spacing -0.5px, 1000px border-radius, 8px 20px padding. Inactive: transparent background, #393939 text, same font and radius."

**Navigation:**
"White navbar, 30px horizontal padding, no border or shadow. Left: logo. Center-left: text links 'Explore' and 'License' in 17px Helvetica Neue weight 400 #191919. Right: 'Upload' and 'Join' buttons both #191919 fill, white text, 12px radius, 12px 20px padding."

### Iteration Guide

1. Start with white (#FFFFFF) canvas — no off-white, no tinted backgrounds on the page body
2. Load Helvetica Neue or Roboto as the Canva Sans substitute — character width is the critical match
3. Apply -2px letter-spacing to all H1/display text — never omit this, it defines the brand feel
4. Keep all buttons at weight 400 — Pexels never uses bold or semibold on CTAs
5. Use teal-green (#05A081) sparingly — it should appear only once on screen at most (interactive confirmation)
6. The photo grid is the brand — prioritize masonry layout with true aspect-ratio preservation
7. Check contrast: white (#FFFFFF) on primary (#191919) passes AA; teal on white passes AA
