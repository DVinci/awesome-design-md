---
version: alpha
name: Pioneer Brazil
description: |
  Pioneer Brazil (pioneer.com.br) is the Brazilian arm of Pioneer Electronics — a global leader
  in automotive sound and multimedia technology. The visual identity pairs Helvetica headlines in
  all-caps with a stark black-and-white hero canvas, punctuated by a deep crimson brand red
  (#B91440) that appears in section headers, links, and accent elements. The design language is
  clean, technical, and performance-oriented: minimal decoration, generous use of photography,
  wide full-bleed image banners, and uppercase typography that projects authority and precision.

colors:
  primary: "#B91440"
  primary-active: "#8C0F2E"
  accent-crimson: "#CC3366"
  ink: "#000000"
  body: "#333333"
  muted: "#69727D"
  canvas: "#FFFFFF"
  surface: "#F5F5F5"
  surface-dark: "#262626"
  hairline: "#E3E3E3"
  input-border: "#E1E5EB"
  on-dark: "#FFFFFF"
  social-instagram: "#262626"
  social-youtube: "#CD201F"

typography:
  display-xl:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: 40px
    fontWeight: 300
    lineHeight: 1.0
    letterSpacing: 0
  display-md:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: 32px
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: 0
  title-lg:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0
  title-md:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0
  body-lg:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-md:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  button:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0.5px
  nav-link:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif"
    fontSize: 14px
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0

spacing:
  xxs: 4px
  xs: 8px
  sm: 13px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px

rounded:
  xs: 0px
  sm: 3px
  md: 4px
  lg: 8px
  xl: 24px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    border: "none"
    textTransform: "uppercase"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    border: "1px solid {colors.primary}"
    textTransform: "uppercase"

  button-secondary-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"

  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"

  card-product:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"
    textColor: "{colors.body}"

  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
    border: "1px solid {colors.input-border}"
    fontSize: "11px"

  text-input-focused:
    border: "1px solid {colors.primary}"

  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    borderBottom: "1px solid {colors.hairline}"
    padding: "13px 8px"
    typography: "{typography.nav-link}"

  badge:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.muted}"
    rounded: "{rounded.xs}"
    padding: "4px 8px"
    typography: "{typography.body-sm}"
---

# Pioneer Brazil Design System

## Overview

Pioneer Brazil's design system is built around the authority and heritage of an 87-year-old Japanese electronics brand translated for a Brazilian market. The visual language is stark and technical: full-bleed hero banners with white Helvetica headlines set in all-caps and light weight (300), thin borders, and a dominant white canvas that lets product photography do the heavy lifting. The brand red (#B91440) appears selectively but purposefully — in section subheadings, link accents, and navigation anchor elements — creating a visual hierarchy that signals precision engineering without relying on decorative flourishes.

The UI layer (navigation, forms, body text) is set in a system-ui stack for maximum rendering performance and cross-platform legibility, while all display and heading text uses Helvetica — a deliberate choice that reinforces the brand's European-Japanese design roots. Typography scales from thin 300-weight all-caps hero text down to 300-weight navigation links and 400-weight body copy, relying entirely on weight and size contrast rather than tracking or color variation to create hierarchy. Card content is padded generously (32px), navigation links have balanced 13px vertical padding, and section breaks use wide breathing room (80px).

### Key Visual Characteristics

- **Color palette**: Primarily black, white, and deep red — high contrast, minimal chroma
- **Typography**: Helvetica for all display/heading text; system-ui for all UI and body copy
- **Text treatment**: All-caps uppercase on hero headings (h1, h3, h4), sentence-case on product listings
- **Spacing density**: Generous — 32px card padding, 80px section breaks, 24px block gaps
- **Elevation**: Flat design — no drop shadows on main surfaces; borders and spacing define structure
- **Photography**: Full-bleed, dark-background product photography in hero banners; clean white-background product images in listings
- **Red usage**: Crimson (#B91440) is used sparingly: section titles, links, SAC/support headings
- **Border radius**: Nearly flat — 0px on hero and nav elements, 3px on form inputs, 24px only on card containers

### Positioning

Pioneer Brazil's design differentiates from consumer electronics competitors (Samsung, LG, Sony) by leaning into precision and heritage rather than glossy color gradients. The flat, typographically-driven aesthetic reads as professional installer-grade rather than mass-market retail — closer to a high-end audio brand like Bose than a consumer electronics chain.

---

## Colors

### Brand & Accent

| Token | Hex | Use |
|-------|-----|-----|
| `primary` | `#B91440` | Primary brand red — SAC section headings, active link states, brand accents |
| `primary-active` | `#8C0F2E` | Hover/pressed state for primary elements |
| `accent-crimson` | `#CC3366` | Secondary link color — "skip to content" links and accessibility anchors |

### Surface

| Token | Hex | Use |
|-------|-----|-----|
| `canvas` | `#FFFFFF` | Default page background, card backgrounds, input backgrounds |
| `surface` | `#F5F5F5` | Secondary surface for alternating sections |
| `surface-dark` | `#262626` | Dark surface for social media icon badges |
| `on-dark` | `#FFFFFF` | Text/icon color on dark surfaces and dark hero banners |

### Text

| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#000000` | Pure black for primary headings on white and link-hover states |
| `body` | `#333333` | Default body text, navigation text, footer text |
| `muted` | `#69727D` | Secondary text — social icon labels, captions, metadata |

### Border

| Token | Hex | Use |
|-------|-----|-----|
| `hairline` | `#E3E3E3` | Section dividers, card borders, structural separators |
| `input-border` | `#E1E5EB` | Form input borders at rest state |

---

## Typography

### Font Families

**Display / Headings:** Helvetica, Arial, sans-serif
- Used for all h1–h4 elements, section banners, and product category labels
- No web font loading — relies on system Helvetica / Arial fallback
- All hero text set in uppercase with font-weight 300 for a clean, engineered aesthetic

**Body / UI:** -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif
- Full system-ui stack for optimal performance and platform-native rendering
- Used for navigation, body copy, footer text, and form elements

### Hierarchy Table

| Role | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|--------|-------------|----------------|-----|
| `display-xl` | 40px | 300 | 1.0 | 0 | Hero section h1 headings, uppercase |
| `display-md` | 32px | 300 | 1.1 | 0 | Banner sub-headings |
| `title-lg` | 28px | 600 | 1.2 | 0 | Section titles (e.g., "SAC Pioneer") |
| `title-md` | 24px | 400 | 1.3 | 0 | Large paragraph text, phone numbers |
| `body-lg` | 18px | 400 | 1.6 | 0 | Lead body text |
| `body-md` | 16px | 400 | 1.5 | 0 | Default body copy, nav, footer |
| `body-sm` | 14px | 400 | 1.4 | 0 | Captions, metadata, small labels |
| `button` | 14px | 600 | 1.0 | 0.5px | CTA button text |
| `nav-link` | 14px | 300 | 1.5 | 0 | Navigation links |
| `caption` | 12px | 400 | 1.4 | 0 | Copyright, fine print |

### Typography Principles

- **Weight strategy**: Two-weight system — 300 (light) for display/nav, 600 (semibold) for section titles and buttons
- **Uppercase lock**: Hero headings (h1, h3, h4) use `text-transform: uppercase` — never set these in mixed or lowercase
- **Tracking**: Minimal letter-spacing overall; 0.5px on button text only
- **Fallback note**: Helvetica is not loaded via web font; relies on the system Helvetica/Arial font. On Windows, Arial renders. Ensure adequate line-height (1.0 minimum at large sizes) to prevent clipping on light-weight text

---

## Layout

### Spacing System

Base unit: **8px** (with a 13px variant for nav padding matching the site's actual computed values)

| Token | Value | Use |
|-------|-------|-----|
| `xxs` | 4px | Tight element gaps, icon margins |
| `xs` | 8px | Compact padding, form input padding |
| `sm` | 13px | Navigation link vertical padding |
| `md` | 16px | Default component padding, block gaps |
| `lg` | 24px | Card internal gaps, block-level spacing |
| `xl` | 32px | Card padding, generous section padding |
| `xxl` | 48px | Large section breaks |
| `section` | 80px | Full-page section vertical spacing |

### Grid and Container

- **Max content width**: 800px (WordPress `--wp--style--global--content-size`)
- **Max wide width**: 1200px (WordPress `--wp--style--global--wide-size`)
- **Block gap**: 24px (`--wp--style--block-gap`)
- **Hero banners**: Full-width, no max-width constraint
- **Column count**: 2–4 columns on product listing pages (implicit WordPress grid)

### Whitespace Philosophy

Pioneer Brazil uses generous whitespace to separate product categories and editorial sections. Hero banners are full-bleed with no internal padding constraints. Content sections have 80px vertical breathing room between them. Navigation is compact and functional with only 13px vertical padding on links. The overall effect is spacious and premium despite being a content-heavy product catalogue.

---

## Elevation and Depth

### Levels

| Level | Treatment | Example Use |
|-------|-----------|-------------|
| 0 — Flat | No shadow, no border | Hero banners, full-bleed sections |
| 1 — Bordered | `1px solid #E3E3E3` | Product cards, form inputs at rest |
| 2 — Input focus | `1px solid #B91440` | Form input focused state |
| 3 — Overlay | `rgba(0,0,0,0.5)` | Lightbox or modal overlays |

### Shadow Philosophy

Pioneer Brazil uses no box-shadows anywhere in its UI. Elevation is conveyed through bordered containers and background color contrast rather than drop shadows. This creates a flat, technical aesthetic consistent with the precision-audio brand identity. Dark hero sections create implicit depth through color contrast rather than physical shadow.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `xs` | 0px | Hero banners, navigation, social badges — completely flat |
| `sm` | 3px | Form inputs — very subtle rounding |
| `md` | 4px | Small UI chips, tags |
| `lg` | 8px | Secondary cards |
| `xl` | 24px | Main card containers |
| `pill` | 9999px | Fully rounded badges/pills (reserved) |

### Photography and Imagery

- **Hero banners**: Full-bleed, 16:9 to 3:1 aspect ratio, dark-background with white overlay text
- **Product images**: White background, centered subject, square or 4:3 crop
- **Category icons**: High-contrast imagery on dark backgrounds with white label overlays
- **Border treatment**: No rounded corners on hero images; product images are flat-edge
- **Slider/Carousel**: Swiper.js is used (`--swiper-theme-color: #007aff` is a library default — not a brand color)

---

## Components

### Buttons

**Primary Button**
- Background: `#B91440`
- Text: `#FFFFFF`, 14px, weight 600, uppercase, letter-spacing 0.5px
- Padding: 12px 24px
- Border radius: 3px
- Border: none
- Hover: background darkens to `#8C0F2E`

**Secondary / Ghost Button**
- Background: transparent
- Border: `1px solid #B91440`
- Text: `#B91440`, 14px, weight 600, uppercase
- Padding: 12px 24px
- Border radius: 3px

### Cards

**Product Card**
- Background: `#FFFFFF`
- Border: `1px solid #E3E3E3`
- Border radius: 3–4px (flat presentation)
- Padding: 24px
- Product image fills top area; title + metadata below

**Feature Card (large)**
- Background: `#FFFFFF`
- Border: `1px solid #E3E3E3`
- Border radius: 24px
- Padding: 32px

### Inputs and Forms

**Text Input (rest)**
- Background: `#FFFFFF`
- Border: `1px solid #E1E5EB`
- Border radius: 3px
- Padding: 8px
- Font: system-ui, 11px (compact search input size)
- Color: `#000000`

**Text Input (focused)**
- Border: `1px solid #B91440`

### Navigation

**Top Navigation**
- Background: transparent (overlays page content at top)
- Text: `#333333`, 14px, weight 300
- Padding: 13px 8px (top-level) / 13px 20px (dropdown items)
- No border-bottom visible in extraction (transparent background flows into hero)
- Search input included in nav

**Dropdown Items**
- Font: 16px, weight 300
- Padding: 13px 20px
- Color: `#000000`
- No background or border

### Social Media Badges

- Instagram: `#262626` background, `#69727D` text/icon
- Facebook: `#3B5998` background, `#69727D` text/icon
- YouTube: `#CD201F` background, `#69727D` text/icon
- TikTok: `#69727D` background (solid)
- Font: 20px, weight 400
- Border radius: 0px (square badges)

---

## Do's and Don'ts

### Do

- **Use Helvetica for all display text** — headings h1–h4 must use `font-family: Helvetica, Arial, sans-serif`
- **Set hero headings in uppercase** — `text-transform: uppercase` is part of the brand voice for h1, h3, h4
- **Use font-weight 300 for hero text** — the thin-weight headline is a signature of the Pioneer Brazil aesthetic
- **Apply the brand red sparingly** — `#B91440` should accent, not dominate; use it for section titles, links, and focused input borders
- **Use full-bleed hero banners** — section covers should span 100% viewport width with no side padding
- **Maintain flat surfaces** — no box-shadows on cards or navigation elements; use 1px borders instead
- **Keep card padding generous** — minimum 24px, ideally 32px for feature cards

### Don't

- **Don't use Helvetica for body copy** — system-ui stack provides better legibility at 14–16px; Helvetica is for display only
- **Don't round hero images or navigation** — border-radius on these elements would break the brand's flat, technical aesthetic
- **Don't use more than 2 font weights** — weight 300 (display/nav) and weight 600 (titles/buttons) are the only two in active use
- **Don't use the primary red as a background for large surfaces** — it is an accent color only; large red blocks would overwhelm the brand palette
- **Don't add drop shadows** — the entire site uses zero box-shadow; adding shadows introduces visual noise inconsistent with the brand
- **Don't center-align hero text** — Pioneer Brazil uses left-aligned hero text; centered text does not match the editorial layout
- **Don't use more than 40px as the maximum heading size on desktop** — the brand intentionally avoids oversized type; hero h1 is exactly 40px

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 768px | Single-column layout; nav collapses to hamburger; hero text reduces to ~28px; product grid goes 1-column |
| Tablet | 768px–1024px | 2-column product grid; nav may show top-level only; hero padding increases |
| Desktop | 1024px+ | Full navigation with dropdowns; 3–4 column product grid; full hero banners at 40px headings |

### Touch Targets

- Navigation links: minimum 44px height (13px padding top + 13px padding bottom + 16px font line = ~44px)
- Buttons: minimum 40px height
- Search input: minimum 36px height
- Social media badges: icon area minimum 44x44px

### Collapsing Strategy

- **Navigation**: Horizontal nav collapses to hamburger icon on mobile; dropdown reveals product categories
- **Product grid**: 4-column → 2-column → 1-column as viewport narrows
- **Hero banners**: Full-bleed maintained at all sizes; font size scales from 40px → 28px on mobile
- **Card layout**: Single-column on mobile with full-width cards

### Image Behavior

- Hero banners: `object-fit: cover` at 100% width; aspect ratio adjusts for mobile (taller crop)
- Product images: `object-fit: contain` within fixed aspect-ratio container
- Category images: Full-width within grid column with overlay text

---

## Agent Prompt Guide

### Quick Color Reference

- Primary (brand red): `#B91440`
- Primary active: `#8C0F2E`
- Canvas (background): `#FFFFFF`
- Ink (black): `#000000`
- Body text: `#333333`
- Muted text: `#69727D`
- Surface light: `#F5F5F5`
- Surface dark: `#262626`
- Hairline (borders): `#E3E3E3`
- On-dark text: `#FFFFFF`

### Example Component Prompts

**Hero Section:**
"Create a full-bleed hero section on a dark photographic background. White (`#FFFFFF`) headline: Helvetica, 40px, weight 300, `text-transform: uppercase`, line-height 1.0. Secondary tagline: Helvetica, 19px, weight 300, white. No drop shadow. No border radius on the image container."

**Product Card:**
"Create a product card on white (`#FFFFFF`) background. Border: `1px solid #E3E3E3`. No border-radius (or max 4px). Top: product image (4:3, white background, `object-fit: contain`). Below: product name in Helvetica 16px weight 400 color `#333333`. Model number in 12px weight 400 color `#69727D`. No shadow."

**Navigation Bar:**
"Create a horizontal nav bar, transparent background. Links: system-ui 14px weight 300 `#333333`, padding 13px 8px. On hover: color changes to `#B91440`. Dropdown items: 16px weight 300 `#000000`, padding 13px 20px. Pioneer logo on the left. Search icon on the right."

**Button Set:**
"Primary button: `#B91440` background, `#FFFFFF` text, Helvetica 14px weight 600 uppercase letter-spacing 0.5px, 12px 24px padding, border-radius 3px, no border. Secondary button: transparent background, `1px solid #B91440` border, `#B91440` text, same typography and padding."

**Section Heading:**
"Section title: Helvetica 28px weight 600 `#B91440`, no text-transform (sentence case). Body text below: system-ui 16px weight 400 `#333333` line-height 1.5. Section vertical padding: 80px top and bottom."

### Iteration Guide

1. Start with `#FFFFFF` canvas; apply `#B91440` only as accent on section titles and interactive elements
2. Load Helvetica from system fonts — no CDN required; ensure `font-family: Helvetica, Arial, sans-serif` for all h1–h4
3. Set all hero headings with `text-transform: uppercase` and `font-weight: 300`
4. Use `#333333` as default body text (not pure black `#000000`)
5. Apply `1px solid #E3E3E3` borders instead of box-shadows for elevation
6. Keep button border-radius at 3px maximum for main CTAs
7. Check: hero text must be white (`#FFFFFF`) on dark-background hero sections
