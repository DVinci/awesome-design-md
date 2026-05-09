---
version: alpha
name: Netflix
description: |
  Netflix's design language is a dark-canvas, content-first system built to make
  entertainment content the hero. The brand is anchored by a bold cinematic red
  (#E50914) against absolute black, using Netflix Sans — a proprietary humanist
  sans-serif — for all type. The aesthetic is immersive and high-contrast: deep
  dark surfaces, full-bleed imagery, minimal chrome, and sharp square-to-slightly-
  rounded corners. CTAs are confident and direct — the iconic red "Get Started"
  button dominates every hero. Elevation is handled through surface-stepping (black
  to dark grey) rather than box shadows, preserving the cinematic feel.

colors:
  primary: "#E50914"
  primary-active: "#B20710"
  canvas: "#000000"
  surface: "#2D2D2D"
  surface-mid: "#232323"
  surface-raised: "#161616"
  ink: "#FFFFFF"
  body: "#FFFFFF"
  muted: "#FFFFFFB3"
  muted-dim: "#FFFFFF80"
  hairline: "#FFFFFF1A"
  on-dark: "#FFFFFF"
  secondary-button: "#80808066"
  body-light: "#221F1F"

typography:
  display-xl:
    fontFamily: '"Netflix Sans", "Helvetica Neue", "Segoe UI", Roboto, Ubuntu, sans-serif'
    fontSize: 56px
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: 0
  display-md:
    fontFamily: '"Netflix Sans", "Helvetica Neue", "Segoe UI", Roboto, Ubuntu, sans-serif'
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.33
    letterSpacing: 0
  title-lg:
    fontFamily: '"Netflix Sans", "Helvetica Neue", "Segoe UI", Roboto, Ubuntu, sans-serif'
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  title-md:
    fontFamily: '"Netflix Sans", "Helvetica Neue", "Segoe UI", Roboto, Ubuntu, sans-serif'
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  body-lg:
    fontFamily: '"Netflix Sans", "Helvetica Neue", "Segoe UI", Roboto, Ubuntu, sans-serif'
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: '"Netflix Sans", "Helvetica Neue", "Segoe UI", Roboto, Ubuntu, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: '"Netflix Sans", "Helvetica Neue", "Segoe UI", Roboto, Ubuntu, sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: '"Netflix Sans", "Helvetica Neue", "Segoe UI", Roboto, Ubuntu, sans-serif'
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  button-sm:
    fontFamily: '"Netflix Sans", "Helvetica Neue", "Segoe UI", Roboto, Ubuntu, sans-serif'
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.14px
  nav-link:
    fontFamily: '"Netflix Sans", "Helvetica Neue", "Segoe UI", Roboto, Ubuntu, sans-serif'
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: '"Netflix Sans", "Helvetica Neue", "Segoe UI", Roboto, Ubuntu, sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
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
  xs: 2px
  sm: 4px
  md: 8px
  lg: 12px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    border: "none"

  button-primary-disabled:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    border: "none"
    opacity: "0.5"

  button-secondary:
    backgroundColor: "{colors.secondary-button}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "6px 16px"
    border: "none"

  button-nav:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.sm}"
    padding: "4px 16px"
    border: "none"

  card-base:
    backgroundColor: "{colors.surface-mid}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    border: "none"

  card-content:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xs}"
    padding: "{spacing.md}"
    border: "none"

  text-input:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
    padding: "24px 16px 8px"
    border: "none"

  text-input-focused:
    border: "1px solid {colors.ink}"
    backgroundColor: "transparent"

  accordion-item:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.xs}"
    padding: "0 24px"
    border: "none"

  top-nav:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    padding: "0"

  badge:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: "2px 6px"
---

# Netflix Design System

## Overview

Netflix operates the world's most-recognized streaming brand — and its design system reflects a singular focus: make content unmissable. The visual language is built on pure black canvases that recede completely, allowing vibrant poster art and cinematic imagery to fill the frame. Netflix Sans, a proprietary humanist sans-serif commissioned specifically for the brand, provides a confident, legible typographic voice from 56px hero headlines down to 12px UI labels — all at the same level of polish.

The system deliberately limits decorative elements. There are no gradients in the UI chrome, no heavy shadows, and no excessive rounding. What exists instead is a disciplined dark-surface hierarchy: black (#000000) for the page canvas, dark grey (#232323) for interactive pill elements and buttons, slightly lighter grey (#2D2D2D) for accordions and layered panels. The one moment of color explosion is intentional and unmissable — the signature red (#E50914) used exclusively for primary CTAs and the Netflix logo wordmark. Everything else fades to black so the content can shine.

**Key visual characteristics:**
- Pure black (#000000) canvas — absolute dark, no warmth or cool tint
- Signature red (#E50914) reserved entirely for primary CTAs and the logo — never decorative
- Netflix Sans: proprietary humanist sans-serif, used at weights 400–900
- Dark surface hierarchy: #000000 → #232323 → #2D2D2D — no white surfaces in the core UI
- Sharp to minimal rounding: 4px on buttons, 2px on badges — not rounded, not sharp
- Content-first layout: full-bleed hero images with gradient overlays, not hard-edged panels
- FAQ/accordion: dark charcoal (#2D2D2D) expanding panels, no border dividers
- Typography scale: 56px/900 hero → 24px/500 section titles → 16px/400 body — clear weight jumps

The brand differentiates from competitors (Disney+, Prime Video, HBO Max) through its refusal to use brand color decoratively — red appears only where action is required, making every CTA impossible to miss. The darkness of the canvas is also more extreme than competitors, who tend toward dark-blue or dark-grey; Netflix uses pure black.

---

## Colors

### Brand & Accent

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#E50914` | Netflix red — primary CTA buttons, logo wordmark, active indicators |
| `primary-active` | `#B20710` | Hover/active state for red buttons (darkened ~20%) |

### Surface (Dark Hierarchy)

| Token | Hex | Usage |
|-------|-----|-------|
| `canvas` | `#000000` | Page background — absolute black, always |
| `surface-raised` | `#161616` | Slight elevation above canvas (overlays, modals at 70% opacity: `#161616B3`) |
| `surface-mid` | `#232323` | Pill/tag buttons, numbered list containers |
| `surface` | `#2D2D2D` | FAQ accordion items, layered content panels |

### Text

| Token | Hex | Usage |
|-------|-----|-------|
| `ink` / `on-dark` | `#FFFFFF` | All primary text on dark canvas — headings, body, CTAs |
| `muted` | `#FFFFFFB3` | Secondary text, footer links, captions (70% white) |
| `muted-dim` | `#FFFFFF80` | Tertiary text, disabled states (50% white) |
| `hairline` | `#FFFFFF1A` | Subtle separators, borders on dark (10% white) |
| `body-light` | `#221F1F` | Body text on rare light surfaces (help center articles) |

### Semantic

| Token | Hex | Usage |
|-------|-----|-------|
| `secondary-button` | `#80808066` | "Learn More" ghost button bg (grey at 40% opacity) |

Netflix does not use conventional semantic success/warning/error colors in its primary marketing UI — the help center inherits browser defaults for links only.

---

## Typography

### Font Family

**Netflix Sans** is a proprietary typeface commissioned from Dalton Maag in 2018. It is not available publicly. The font stack falls back through:

```
"Netflix Sans", "Helvetica Neue", "Segoe UI", Roboto, Ubuntu, sans-serif
```

Netflix Sans is loaded via Netflix's CDN and is not accessible via Google Fonts or Adobe Fonts. For faithful reproductions, **Inter** or **Poppins** are the closest open-source alternatives in terms of humanist geometry and weight range.

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|--------|-------------|----------------|-----|
| `display-xl` | 56px | 900 | 1.25 | 0 | Hero headline ("Unlimited movies, TV shows") |
| `display-md` | 24px | 500 | 1.33 | 0 | Section titles, "Trending Now" |
| `title-lg` | 24px | 400 | 1.33 | 0 | FAQ accordion headings |
| `title-md` | 18px | 700 | 1.5 | 0 | Help center article h3 |
| `body-lg` | 20px | 500 | 1.4 | 0 | Lead paragraph, subheadline under hero |
| `body-md` | 16px | 400 | 1.5 | 0 | Standard body, nav links |
| `body-sm` | 14px | 400 | 1.5 | 0 | Footer links, captions, labels |
| `button` | 24px | 500 | 1.25 | 0 | Primary CTA ("Get Started") |
| `button-sm` | 14px | 500 | 1.5 | 0.14px | Nav buttons ("Sign In") |
| `nav-link` | 14px | 500 | 1.5 | 0 | Navigation links |
| `caption` | 12px | 400 | 1.5 | 0 | Metadata, small labels |

### Principles

- **Weight extremes at scale:** The 900-weight `display-xl` is Netflix's most distinctive typographic choice — ultra-black headers that command attention before the eye reaches the red button
- **No tracking adjustments:** Unlike many premium brands, Netflix uses `letter-spacing: normal` at all sizes — the font metrics of Netflix Sans make tracking unnecessary
- **Single family throughout:** Netflix Sans covers all typographic roles — no secondary/serif pairing exists in the product UI
- **Font substitute note:** When Netflix Sans is unavailable, use Inter at equivalent weights. Poppins is a viable alternative for the slightly geometric character; avoid Helvetica Neue alone as it lacks the warmth of Netflix Sans

---

## Layout

### Spacing System

Base unit: **8px**

| Token | Value | Use |
|-------|-------|-----|
| `xxs` | 4px | Internal badge padding, icon gaps |
| `xs` | 8px | Small element gaps, tight padding |
| `sm` | 12px | Button secondary padding (vertical) |
| `md` | 16px | Standard padding, input horizontal |
| `lg` | 24px | Section inner padding, accordion horizontal padding |
| `xl` | 32px | Card padding, component gaps |
| `xxl` | 48px | Vertical rhythm between subsections |
| `section` | 80px | Full section vertical padding |

### Grid & Container

- **Max container width:** 1100px (marketing homepage), 960px (help center)
- **Column system:** 12-column grid, no gutters enforced — content stacks or uses flex internally
- **Hero:** Full viewport width (100vw), vertically centered, with full-bleed background image
- **Content rows:** Full-width dark bands (`100vw`) that break the 12-column expectation — each "feature" section uses the full viewport width with centered text
- **FAQ section:** Single column, full-width accordion within a max-width container

### Whitespace Philosophy

Netflix uses extreme vertical rhythm to give content space to breathe, in keeping with how theatrical trailers use silence. Between the hero and the first feature section, there is typically 0 gap — sections abut with color transitions. Within sections, generous 80px top/bottom padding creates a magazine-editorial cadence. The spacing is asymmetrical by design: left/right gutters shrink at tablet, vertical rhythm stays fixed.

---

## Elevation & Depth

### Levels

| Level | Treatment | Example Use |
|-------|-----------|-------------|
| 0 — Canvas | `#000000` — absolute black | Page background, hero overlay |
| 1 — Raised overlay | `#161616` at 70% opacity | Modal backdrops, nav scroll state |
| 2 — Surface-mid | `#232323` solid | Numbered content pills, small card items |
| 3 — Surface | `#2D2D2D` solid | FAQ accordion panels, content cards |
| 4 — Primary | `#E50914` solid | CTAs only — the highest visual weight |

### Shadow Philosophy

Netflix uses **no box-shadows** in its primary UI. Depth is communicated entirely through background-color stepping on the dark scale. The one exception is a faint `rgba(0, 0, 0, 0.2) 0px 0px 18px` shadow used on cookie consent overlays — not a product UI pattern.

### Gradient Overlays

Full-bleed hero images use a complex eased gradient to fade into the black canvas at the edges:

```
linear-gradient(rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)
```

Row-level accent gradients use a red-tinted radial gradient: `rgb(111, 24, 29)` at 50% center, fading to transparent. These are background-image effects, not token-driven surfaces.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `xs` | 2px | Badges, tags, small interactive elements |
| `sm` | 4px | Buttons (primary, secondary, nav), input containers |
| `md` | 8px | Content cards, numbered list containers |
| `lg` | 12px | Modal dialogs, large overlay panels |
| `pill` | 9999px | Language selector, cookie consent pill controls |

The dominant rounding is **4px (sm)** — Netflix is not a rounded-corner brand. The UI feels structural and cinematic rather than soft or friendly.

### Photography & Imagery

- **Aspect ratios:** 16:9 (landscape content thumbnails), 2:3 (portrait movie posters), 1:1 (profile avatars)
- **Crop treatment:** Object-fit cover with center-focus; title treatment overlaid as text (not baked in)
- **Border treatment:** None — content images are flush with their containers, no inset borders
- **Hero image:** Full-bleed, 100vw × ~100vh, with heavy gradient overlay darkening edges and bottom
- **Hover state:** Content cards scale (transform: scale) on hover in browse mode — this is the primary elevation indicator in the logged-in product

---

## Components

### Buttons

**Primary — Get Started (`button-primary`)**
- Background: `#E50914`, Text: `#FFFFFF`, Font: Netflix Sans 24px/500
- Radius: 4px, Padding: 12px 24px, Border: none
- Hover: background darkens to `#B20710`

**Secondary — Learn More (`button-secondary`)**
- Background: `rgba(128,128,128,0.4)` (semi-transparent grey), Text: `#FFFFFF`, Font: Netflix Sans 16px/500
- Radius: 4px, Padding: 6px 16px, Border: none
- Used when a softer CTA is needed alongside the red primary button

**Nav — Sign In (`button-nav`)**
- Background: `#E50914`, Text: `#FFFFFF`, Font: Netflix Sans 14px/500, Letter-spacing: 0.14px
- Radius: 4px, Padding: 4px 16px, Border: none
- Note: Netflix uses red for the Sign In button too — it is semantically secondary but visually red

### Cards

**Content Card (`card-content`)**
- Background: `#2D2D2D`, Radius: 2px, Padding: 16px, Border: none
- Text: `#FFFFFF` / 16px / weight 400
- No shadow — depth from dark surface stepping

**Feature Card (`card-base`)**
- Background: `#232323`, Radius: 8px, Padding: 24px, Border: none

### Inputs & Forms

**Email Input**
- Background: transparent (sits on dark background), Text: `#FFFFFF`
- Padding: 24px 16px 8px (floating label pattern — top padding reserves space for label)
- Border: none (border is on the wrapper div, not the input)
- Radius: 0px — the input container handles radius at 4px
- Focus: no ring visible — visual feedback is on the label transition

### Navigation

**Top Nav**
- Background: transparent (gradient overlay on hero), scrolled state transitions to `rgba(22,22,22,0.7)`
- Text: `#FFFFFF`, Font: Netflix Sans 16px/400
- Sign In button: red (`#E50914`) right-aligned

### FAQ Accordion

- Background: `#2D2D2D` per item
- Text: `#FFFFFF`, Font: Netflix Sans 24px/400
- Padding: 0 24px (horizontal only — vertical padding is on inner wrapper)
- Icon: "+" / "×" in white, right-aligned
- No border between items — gaps only

---

## Do's and Don'ts

**Do:**
- Use `#000000` as the page canvas — no dark-grey or near-black approximations; the purity matters
- Reserve `#E50914` exclusively for primary CTAs and the logo — every use of red signals "act now"
- Use Netflix Sans at weight 900 for hero headlines — the ultra-black weight is the typographic identity
- Keep button text at 24px/500 for primary CTAs — the large text size is intentional and should not be reduced for "cleaner" designs
- Use full-bleed imagery with gradient overlays rather than constrained image containers
- Step through the dark surface hierarchy (`#000000` → `#232323` → `#2D2D2D`) for visual layering instead of using shadows
- Use `rgba(128,128,128,0.4)` for secondary buttons overlaid on dark imagery — translucency is intentional

**Don't:**
- Don't use `#E50914` for decorative elements (borders, backgrounds, icons) — it must remain exclusively a CTA signal
- Don't add border-radius larger than 8px on cards or buttons — Netflix is not a pill/round design system
- Don't use white or light backgrounds in the core UI — the dark canvas is the brand
- Don't use multiple font weights on the same text block — Netflix Sans reads best at single-weight per component
- Don't use conventional box-shadows — use background-color stepping for depth
- Don't apply letter-spacing to Netflix Sans — the font's own metrics are calibrated and negative tracking breaks it
- Don't use serif type anywhere — Netflix Sans handles all typographic roles; avoid introducing secondary typefaces

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 768px | Hero headline drops to ~32px; single-column layout; nav collapses to logo + Sign In only |
| Tablet | 768px – 1024px | Two-column feature sections; hero text reduced; accordion full-width |
| Desktop | 1024px – 1440px | Three-column content rows; max 1100px container; full hero |
| Wide | > 1440px | Content centered at 1100px max; side gutters fill with canvas black |

### Touch Targets

- Minimum touch target: 44px × 44px for all buttons and links
- Primary CTA ("Get Started"): naturally meets this at 12px padding × 24px font
- Nav links: minimum 44px height enforced via padding

### Collapsing Strategy

- **Navigation:** Mobile shows only the Netflix logo (wordmark) and Sign In button; language selector collapses to icon
- **Feature rows:** Two-column image+text splits stack to single column on mobile (image above text)
- **Hero:** Headline text truncates to ~3 lines with smaller size; email CTA form stacks button below input
- **Content rows (browse):** Horizontal scroll on mobile — same row layout, swipe to navigate

### Image Behavior

- All poster art: `object-fit: cover`, no visible border treatment
- Hero: full-bleed `background-image` with `background-size: cover`, `background-position: center`
- Content thumbnails: 16:9 forced aspect ratio via padding-bottom trick or `aspect-ratio: 16/9`
- Responsive: images scale down proportionally; no separate mobile image crops in the marketing UI

---

## Agent Prompt Guide

### Quick Color Reference

- Primary (Netflix Red): `#E50914`
- Primary Active (hover): `#B20710`
- Canvas (background): `#000000`
- Surface (cards/panels): `#2D2D2D`
- Surface-mid (pill elements): `#232323`
- Ink (primary text): `#FFFFFF`
- Muted (secondary text): `#FFFFFFB3` (70% white)
- Muted-dim (tertiary text): `#FFFFFF80` (50% white)
- Hairline (borders): `#FFFFFF1A` (10% white)
- Secondary button bg: `#80808066` (grey at 40%)

### Example Component Prompts

**Hero Section:**
"Create a hero on `#000000` background with a full-bleed background image and gradient overlay `linear-gradient(rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)`. Headline: Netflix Sans (or Inter) 56px, weight 900, color `#FFFFFF`, line-height 1.25. Subheadline: 20px, weight 500, color `#FFFFFF`. Paragraph: 20px, weight 500. CTA button: background `#E50914`, radius 4px, padding 12px 24px, text `#FFFFFF` 24px weight 500, no border. Email input below: transparent background, white text, padding 24px 16px 8px."

**FAQ Accordion:**
"Create a FAQ section on `#000000` background. Each accordion item: background `#2D2D2D`, text `#FFFFFF`, Netflix Sans 24px weight 400, horizontal padding 24px. '+' icon right-aligned in white. No borders between items, 8px gap between items."

**Content Card:**
"Create a content thumbnail card on `#232323` background. Radius 2px. No border or shadow. Title `#FFFFFF` 16px weight 500. Subtitle `#FFFFFFB3` 14px weight 400. Hover: slight scale transform (1.05)."

**Button Set:**
"Primary button: background `#E50914`, radius 4px, padding 12px 24px, Netflix Sans 24px weight 500 color `#FFFFFF`, no border. Secondary button: background `rgba(128,128,128,0.4)`, same radius and padding, text `#FFFFFF` 16px weight 500, no border."

**Navigation Bar:**
"Top navigation: transparent background (transitions to `rgba(22,22,22,0.7)` on scroll). Netflix logo wordmark left-aligned in `#E50914`. Language selector center. Sign In button right: background `#E50914`, radius 4px, padding 4px 16px, white text 14px weight 500."

### Iteration Guide

1. Start with `#000000` as the page background — never substitute dark-grey; the pure black is identity-critical
2. Load Netflix Sans via Netflix CDN if available; otherwise substitute Inter from Google Fonts with equivalent weights (400, 500, 700, 900)
3. Apply weight 900 to all display/hero headlines — this is the most distinctive typographic signal
4. Use `#E50914` only on primary CTA buttons and the logo — do not apply it to any decorative element
5. Build depth through surface color stepping (`#000000` → `#232323` → `#2D2D2D`), not box-shadows
6. Keep border-radius at 4px for all buttons — resist the urge to round further
7. Check contrast: white (`#FFFFFF`) on `#E50914` achieves 4.0:1 (AA for large text), white on `#000000` achieves 21:1
