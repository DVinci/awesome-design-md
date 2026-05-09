---
version: alpha
name: Videobolt
description: |
  Videobolt is a browser-based video creation platform with a clean, content-forward design system
  built on a proprietary Sinter variable font family. The palette pairs a crisp white canvas with a
  vibrant teal primary (#00D2DC), deep navy ink (#02040E), and vivid brand accents (electric blue,
  hot pink, amber) used to distinguish subscription tiers. Generous section spacing, pill-shaped
  hero CTAs, and soft box-shadow cards create an approachable, production-quality feel suited to
  creative professionals and casual video makers alike.

colors:
  primary: "#00D2DC"
  primary-active: "#00BAC3"
  primary-hover: "#00E1EB"
  ink: "#02040E"
  body: "#2A314F"
  muted: "#7F86A3"
  canvas: "#FFFFFF"
  surface: "#FAFBFC"
  hairline: "#EDEEF3"
  hairline-strong: "#DDDFE8"
  accent-blue: "#033EFF"
  accent-blue-hover: "#2255FF"
  accent-pink: "#EC00C2"
  accent-green: "#00C415"
  accent-amber: "#FFA40D"
  semantic-success: "#95D315"
  semantic-warning: "#F9A06E"
  semantic-error: "#FF4A4E"
  overlay: "#FFFFFF80"

typography:
  display-xl:
    fontFamily: '"Sinter Black", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.17
    letterSpacing: 0
  display-md:
    fontFamily: '"Sinter Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  title-lg:
    fontFamily: '"Sinter Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  title-md:
    fontFamily: '"Sinter Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  body-lg:
    fontFamily: '"Sinter Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: '"Sinter Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.78
    letterSpacing: 0
  body-sm:
    fontFamily: '"Sinter Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  nav-link:
    fontFamily: '"Sinter Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0
  button:
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Arial, sans-serif'
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  button-cta:
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Arial, sans-serif'
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  caption:
    fontFamily: '"Sinter Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
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
  section: 64px
  hero: 96px

rounded:
  xs: 2px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 50px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "10px 32px"
    border: "1px solid rgba(255,255,255,0.15)"
    boxShadow: "0px 4px 15px rgba(0,0,0,0.1)"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "10px 32px"
    border: "1px solid rgba(255,255,255,0.15)"

  button-primary-focused:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "10px 32px"
    border: "1px solid rgba(255,255,255,0.3)"

  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "10px 32px"
    border: "1px solid {colors.hairline}"

  button-secondary-active:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "10px 32px"
    border: "1px solid {colors.primary}"

  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "8px 32px"
    border: "none"

  button-ghost-active:
    backgroundColor: "transparent"
    textColor: "{colors.accent-blue}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "8px 32px"
    border: "none"

  button-cta-hero:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.button-cta}"
    rounded: "{rounded.pill}"
    padding: "32px 64px"
    border: "1px solid rgba(255,255,255,0.15)"

  button-cta-hero-disabled:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.muted}"
    typography: "{typography.button-cta}"
    rounded: "{rounded.pill}"
    padding: "32px 64px"
    border: "none"

  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"
    boxShadow: "0px 0px 64px rgba(42,49,79,0.08)"

  card-template:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0"
    border: "none"
    overflow: "hidden"

  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "10px 16px"
    border: "1px solid {colors.hairline-strong}"

  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "10px 16px"
    border: "1px solid {colors.primary}"

  text-input-disabled:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "10px 16px"
    border: "1px solid {colors.hairline}"

  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    border: "0 0 1px 0 solid {colors.hairline}"
    backdropFilter: "none"

  top-nav-scrolled:
    backgroundColor: "rgba(255,255,255,0.9)"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    backdropFilter: "blur(8px)"

  badge-tier-lite:
    backgroundColor: "{colors.accent-green}"
    textColor: "{colors.canvas}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"

  badge-tier-pro:
    backgroundColor: "{colors.accent-pink}"
    textColor: "{colors.canvas}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"

  badge-tier-business:
    backgroundColor: "{colors.accent-amber}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
---

# Videobolt Design System

## Overview

Videobolt's visual identity is built for creative confidence — a platform where non-designers can produce cinematic-quality video without friction. The design language pairs a clean white canvas with bold, energetic teal CTAs and a proprietary Sinter font family that delivers editorial weight and warmth across headings. The overall palette is restrained: ink, body text, muted grays, and one vivid accent color per context, with plan-tier hues (green, pink, amber) reserved for pricing signals.

The interface balances open, generous whitespace in marketing sections with dense, video-first grid layouts in the template browser. Shadow-soft cards, a consistent 4px base border-radius, and pill-shaped hero buttons create an approachable but polished feel that positions Videobolt as a premium tool without the cold minimalism of prosumer apps. Typography is the chief differentiator: Sinter Black headings carry strong brand identity while the system-UI stack in interactive elements keeps buttons and nav crisp and performant at any size.

**Key visual characteristics:**
- Teal `#00D2DC` is the single CTA anchor — appears in buttons, active borders, player controls, and link hover states
- Proprietary "Sinter" font family: Black/Bold for headings, Medium for nav/labels, Regular for body copy
- White canvas with `#FAFBFC` surface used for footer and sidebar backgrounds
- 4px global button border-radius (`--button-border-radius`) with 50px pill for hero CTAs
- Soft box-shadow `0 0 64px rgba(42,49,79,0.08)` as the single elevation style (no hard shadows)
- Three tier-indicator accent colors: Lite green `#00C415`, Pro pink `#EC00C2`, Business amber `#FFA40D`
- Nav uses system-UI fonts at 14px/500 weight; headings use Sinter at 48px/700 weight
- Full-bleed video thumbnails on dark card backgrounds serve as primary content showcase

**Positioning:** Videobolt occupies the midpoint between Canva (mass market) and Adobe Premiere (pro) — more cinematic and template-driven than Canva, but accessible enough that no video editing experience is required.

---

## Colors

### Brand & Accent

| Token | Hex | Use |
| --- | --- | --- |
| `primary` | `#00D2DC` | CTA buttons, player controls, active states, link hovers |
| `primary-active` | `#00BAC3` | Button pressed state, darken 5% |
| `primary-hover` | `#00E1EB` | Button hover state, lighten 3% |
| `accent-blue` | `#033EFF` | Hyperlinks, link color, focus rings |
| `accent-blue-hover` | `#2255FF` | Link hover state |
| `accent-pink` | `#EC00C2` | Pro tier indicator, plan badge |
| `accent-green` | `#00C415` | Lite tier indicator, success states |
| `accent-amber` | `#FFA40D` | Business tier indicator, warning signals |

### Surface

| Token | Hex | Use |
| --- | --- | --- |
| `canvas` | `#FFFFFF` | Page background, card backgrounds, input backgrounds |
| `surface` | `#FAFBFC` | Footer, sidebar, secondary backgrounds |
| `hairline` | `#EDEEF3` | Border on cards, nav dividers, dropdown separators |
| `hairline-strong` | `#DDDFE8` | Input borders, stronger dividers |

### Text

| Token | Hex | Use |
| --- | --- | --- |
| `ink` | `#02040E` | Primary headings, high-contrast UI text, buttons |
| `body` | `#2A314F` | Body paragraphs, descriptions, secondary headings |
| `muted` | `#7F86A3` | Captions, placeholder text, disabled states |

### Semantic

| Token | Hex | Use |
| --- | --- | --- |
| `semantic-success` | `#95D315` | Success toasts, checkmarks, completion states |
| `semantic-warning` | `#F9A06E` | Warning notices, rate-limit alerts |
| `semantic-error` | `#FF4A4E` | Form validation errors, destructive actions |

---

## Typography

### Font Family

**Sinter** — Videobolt's proprietary typeface loaded as separate weight/style files:
- `Sinter Black` — display headings (H1), hero titles
- `Sinter Bold` — section headings (H2, H3), pricing headlines
- `Sinter Medium` — navigation links, labels, feature callouts
- `Sinter Regular` — body copy, subtitles, descriptions

The system-UI fallback stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Arial, sans-serif`) is used for all interactive UI elements (buttons, inputs, nav items where Sinter Medium is not loaded).

**Note for agents:** Sinter is a proprietary font not available on Google Fonts or CDN. Use `"Inter"` as the closest available substitute, with `font-weight: 900` for Black, `700` for Bold, `500` for Medium, `400` for Regular.

### Hierarchy Table

| Role | Size | Weight | Line Height | Letter Spacing | Use |
| --- | --- | --- | --- | --- | --- |
| `display-xl` | 48px | 700 | 1.17 | 0 | Hero headline (H1) |
| `display-md` | 36px | 700 | 1.25 | 0 | Section hero title |
| `title-lg` | 24px | 700 | 1.5 | 0 | Section headings (H2) |
| `title-md` | 20px | 700 | 1.4 | 0 | Card headings (H3) |
| `body-lg` | 24px | 400 | 1.5 | 0 | Hero subtitle, lead paragraph |
| `body-md` | 18px | 400 | 1.78 | 0 | Standard body copy |
| `body-sm` | 14px | 400 | 1.43 | 0 | Captions, metadata, input text |
| `nav-link` | 14px | 500 | 1.43 | 0 | Navigation items |
| `button` | 16px | 500 | 1.25 | 0 | Standard button labels |
| `button-cta` | 20px | 500 | 1.2 | 0 | Hero CTA buttons |
| `caption` | 12px | 400 | 1.5 | 0 | Badges, tier labels, footnotes |

### Principles

- **Weight through face names:** Sinter uses named faces (Black, Bold, Medium, Regular) rather than numeric weights — all computed as `font-weight: 400` by the browser but visually distinct
- **No letter-spacing adjustment:** Tracking is left at `normal`/`0` across all roles — no negative tracking even on large display sizes
- **Line height is generous on body:** 1.78 (32px at 18px) for readability in long-form descriptions
- **Scale jumps are large:** From 14px nav to 48px display — no intermediate decorative sizes used

---

## Layout

### Spacing System

Base unit: **8px** (with a 4px micro step for tight internal spacing).

| Token | Value | Use |
| --- | --- | --- |
| `xxs` | 4px | Icon gaps, tight badge padding |
| `xs` | 8px | Template card gaps, filter pill margin |
| `sm` | 12px | List item padding, nav sub-item spacing |
| `md` | 16px | Card internal padding step, inline gaps |
| `lg` | 24px | Card padding, column gaps |
| `xl` | 32px | Section internal spacing, button vertical rhythm |
| `xxl` | 48px | Footer padding, large card padding |
| `section` | 64px | Block-to-block vertical padding |
| `hero` | 96px | Header height, page-top padding |

### Grid & Container

- **Max container width:** 1440px (`--page-max-width`)
- **Page padding:** `0 48px` inline (collapses to `0 24px` on mobile)
- **Template grid:** 3-column at desktop (1440px+), 2-column at 1440px and below, 1-column on mobile
- **Section layout:** Full-width blocks with centered content container up to 1440px

### Whitespace Philosophy

Videobolt uses block-level breathing room — each content section (`vb_Block`) receives `64px` top/bottom padding by default, expanding to hero proportions for primary CTAs. Within sections, the grid is dense (template thumbnails tile tightly at `gap: 0`), but text and interactive elements maintain generous margins. The `--block-block: 64px` CSS variable drives the vertical rhythm system.

---

## Elevation & Depth

### Levels Table

| Level | Treatment | Example use |
| --- | --- | --- |
| 0 — Flat | No shadow, hairline border | Cards on canvas, input fields |
| 1 — Raised | `0px 0px 64px rgba(42,49,79,0.08)` (`--soft-shadow`) | Dropdown menus, modal panels |
| 2 — Editor | `0px 40px 24px rgba(42,49,79,0.08)` (`--editor-shadow`) | Editor workspace panels |
| 3 — Overlay | Semi-transparent white `rgba(255,255,255,0.8)` with `blur(32px)` | Loading overlays, modal backdrops |

### Shadow Philosophy

Videobolt uses a single, very diffuse shadow style (`--soft-shadow`) throughout the product — spread wide (`0 0 64px`), low opacity (`0.08`), and tinted with the body-text navy (`42,49,79`) rather than pure black. This creates depth without harshness and reads as a "glow" rather than a drop shadow. No colored glows or hard-edge shadows appear. The editor workspace uses a directional variant with the same tint.

**Button depth:** `.vb_button.type-regular` uses a radial-gradient background (`radial-gradient(75% 100% at 80% 0, ...)`) with lighten/darken variants of the teal primary to simulate surface sheen. This is a CSS-only lighting effect, not a box-shadow.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
| --- | --- | --- |
| `xs` | 2px | Very tight UI elements |
| `sm` | 4px | Buttons (`--button-border-radius`), inputs, tooltips, badges |
| `md` | 8px | Dropdown menus, modal panels, feature cards |
| `lg` | 12px | Larger panels, feature blocks |
| `xl` | 16px | Not widely used |
| `pill` | 50px | Hero CTAs (`.CallToAction.subtype-round`), search input-button combo |

### Photography & Imagery

- **Template thumbnails:** 16:9 landscape aspect ratio, full-bleed on dark (`#02040E`) card backgrounds, no border-radius on the video frame itself
- **Hero videos:** Full-width, autoplay looping video on white background with subtle parallax
- **OG/social image:** Branded dark card `https://videobolt.net/public/meta/general.jpg`
- **Photography style:** Motion-forward, cinematic stills from rendered video templates; no lifestyle photography

---

## Components

### Buttons

Videobolt uses a custom `vb_button` component system with four visual types plus size variants:

**type-regular (Primary CTA):**
- Background: `radial-gradient(75% 100% at 80% 0, #00E5F5 0%, #00C8D7 100%)` based on `--button-background-color` (#00D2DC)
- Border: `1px solid rgba(255,255,255,0.15)` with hover at `rgba(255,255,255,0.3)`
- Box-shadow: `0px 4px 15px rgba(0,0,0,0.1)`
- Border-radius: `4px`, padding: `10px 32px`, font 16px/500
- Active: darkened gradient `--darken__5__` to `--darken__10__button-background-color`

**type-border (Secondary):**
- Background: `#FFFFFF`, border: `1px solid #EDEEF3`
- Hover border-color: `#00D2DC` (primary), text turns teal
- Border-radius: `4px`, padding: `10px 32px`

**type-clear (Ghost/Link):**
- Background: `transparent`, border: `transparent`
- Text: `--text-color` (#02040E), hover: `#00D2DC`
- Active: `--link-color` (#033EFF)
- Padding: `8px 32px`

**CallToAction hero pill (type-big subtype-round):**
- Border-radius: `50px`, padding: `32px 64px`, font-size: `20px`
- Same teal type-regular gradient background
- Used as the primary page conversion CTA

### Cards

**Content/Feature Card:**
- Background: `#FFFFFF`, border-radius: `8px`, padding: `24px`
- Border: `1px solid #EDEEF3`
- Shadow: `0px 0px 64px rgba(42,49,79,0.08)` (`--soft-shadow`)

**Template Thumbnail Card:**
- Background: `#02040E` (ink — dark video canvas)
- Border-radius: `8px` or `0` on the video frame, no border
- Video fills entire card, text overlay on hover

### Inputs & Forms

**Text input:**
- Background: `#FFFFFF`, border: `1px solid #DDDFE8` (`--input-border-color`)
- Border-radius: `4px`, padding: `10px 16px`, font-size: `14px`/weight `500`
- Focus: border-color transitions to `#00D2DC` (primary)
- Attached search button uses `border-radius: 0 4px 4px 0` (right half only)

### Navigation

**Top nav (`.vb_header`):**
- Background: `#FFFFFF` (transparent until scroll, then `rgba(255,255,255,0.9)`)
- Height: `96px` (`--header-height`)
- Nav links: `Sinter Medium`, 14px, `#02040E`
- Padding: `0 48px` desktop, `0 24px` mobile

**Mobile sidebar:**
- Appears at `max-width: 767px`
- Full-height slide-in drawer

### Badges & Tags

- Plan tier badges use accent colors: Lite `#00C415`, Pro `#EC00C2`, Business `#FFA40D`
- Border-radius: `4px`, padding: `2px 4px` to `2px 8px`
- Font: `Sinter Bold` uppercase, 12px

---

## Do's and Don'ts

**Do:**
- Use `#00D2DC` teal as the single primary CTA color — one button per viewport that calls the user to action
- Apply `50px` border-radius on hero-level CTAs and `4px` on all other interactive elements — never mix pill and square on the same visual level
- Use Sinter Black at `48px` for page-level headings; Sinter Bold at `24px` for section headings
- Keep body text in `#2A314F` (body) rather than `#02040E` (ink) for paragraph-length content — the navy softens long-form reading
- Use `rgba(42,49,79,0.08)` shadow with `64px` blur radius for any elevated panel or card
- Apply plan-tier accent colors only for pricing, plan labels, and plan-specific feature indicators
- Use the `--background-hover-color` (`hsl(0,0%,105%)`) on hover for very subtle button/card hover states
- Load Sinter fonts via `@font-face` before rendering headings — fallback to Inter 900/700/500/400

**Don't:**
- Don't use the accent colors (pink, green, amber) as general-purpose accents — they are reserved for plan tier signaling
- Don't apply `border-radius` larger than `8px` on cards or panels — `50px` is exclusive to hero CTA buttons
- Don't use box-shadow with color tints other than the `rgba(42,49,79,...)` navy — no colored glows or red/teal shadows
- Don't set `letter-spacing` on Sinter headings — the typeface is designed without tracking adjustments
- Don't use dark/inverted color schemes — Videobolt is a light-only product with no dark mode
- Don't apply the radial-gradient button style in flat code — use the solid `#00D2DC` token and note the gradient as a visual enhancement
- Don't mix Sinter weights by numeric `font-weight` — use the named face files (Sinter Black, Bold, Medium, Regular)

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
| --- | --- | --- |
| Mobile | `< 768px` | Single-column layouts; sidebar nav replaces top nav; hero titles reduce; padding collapses from 48px to 24px; hero CTA padding reduces |
| Tablet | `768px – 1024px` | 2-column template grid; nav may partially collapse |
| Desktop | `1024px – 1440px` | 2-column template grid (≤ 1440px) |
| Wide | `> 1440px` | 3-column template grid; full 1440px max container |

### Touch Targets

- Minimum button height: `40px` (`min-height: 40px` on `.vb_button > .inner`)
- Hero CTA padding (`32px 64px`) creates naturally large touch targets (≈ 80px+ height)
- Nav links: `12px` padding minimum

### Collapsing Strategy

- **Navigation:** Desktop horizontal nav collapses to hamburger icon + sidebar drawer at `< 768px`
- **Template grid:** 3-col → 2-col at 1440px, 2-col → 1-col at 767px
- **Hero section:** Full-height video hero maintains aspect ratio on mobile; text left-aligns
- **Hero CTA:** Pill CTAs stack vertically on mobile; font-size may reduce from 20px to 18px
- **Tags/filter cloud:** Hides completely on mobile to save vertical space (`display: none` at 767px)

### Image Behavior

- Template thumbnails: `object-fit: cover` maintaining 16:9 ratio
- Background videos: `object-fit: cover`, positioned center, autoplay/muted/loop
- Logos and brand marks: Fixed-size SVG, scale with `em` units

---

## Agent Prompt Guide

### Quick Color Reference

- Primary (CTA): `#00D2DC`
- Primary active: `#00BAC3`
- Canvas (background): `#FFFFFF`
- Surface (footer/sidebar): `#FAFBFC`
- Ink (headings): `#02040E`
- Body (paragraphs): `#2A314F`
- Muted (captions): `#7F86A3`
- Hairline (borders): `#EDEEF3`
- Accent blue (links): `#033EFF`
- Accent pink (Pro): `#EC00C2`
- Accent green (Lite): `#00C415`
- Accent amber (Business): `#FFA40D`
- Error: `#FF4A4E`

### Example Component Prompts

**Hero Section:**
"Create a hero on white (#FFFFFF) background. Headline 48px, weight 900 (Sinter Black/Inter Black), color #02040E, line-height 1.17. Subtitle 24px, weight 400, color #2A314F, line-height 1.5. Primary CTA button: background #00D2DC, border-radius 50px, padding 32px 64px, font 20px/500 color #02040E, subtle box-shadow rgba(0,0,0,0.1). No secondary CTA in the hero."

**Template Card:**
"Create a video template card on dark (#02040E) background. Border-radius 8px, no border. Full-bleed video/image placeholder fills the card. On hover, show a semi-transparent overlay with a teal play button (#00D2DC) centered. Card dimensions 16:9 ratio."

**Pricing Card:**
"Create a pricing card on white (#FFFFFF) background. Border-radius 8px, border 1px solid #EDEEF3, box-shadow 0 0 64px rgba(42,49,79,0.08). Plan name badge: Sinter Bold uppercase 12px. Price: 36px/700, color #02040E. Feature list: 14px/400, color #2A314F. CTA button: full-width, background #00D2DC, border-radius 4px, padding 10px 32px, font 16px/500. Featured card: highlight border 2px solid #00D2DC."

**Button Set:**
"Primary button: background #00D2DC, border-radius 4px, padding 10px 32px, font 16px/500 color #02040E, border 1px solid rgba(255,255,255,0.15), box-shadow 0 4px 15px rgba(0,0,0,0.1). Secondary button: background white, border 1px solid #EDEEF3, same radius and padding, text #02040E — hover changes border to #00D2DC and text to #00D2DC. Ghost button: transparent background, no border, text #02040E — hover text #00D2DC."

**Navigation Bar:**
"Top nav: background #FFFFFF (rgba(255,255,255,0.9) when scrolled), height 96px, padding 0 48px. Logo left-aligned. Nav links: font 14px/500 Sinter Medium (or Inter 500), color #02040E. Right side: Login button (white bg, 4px radius, border #EDEEF3) and Sign Up button (teal bg #00D2DC, 4px radius). Divider line bottom 1px solid #EDEEF3."

### Iteration Guide

1. Start with `#FFFFFF` as your page background; use `#FAFBFC` only for footer and secondary surface areas
2. Load Sinter font files in order: Black → Bold → Medium → Regular; substitute Inter 900/700/500/400 if unavailable
3. Use `#00D2DC` for exactly one CTA per hero section — do not repeat teal on secondary actions
4. Buttons always use `4px` border-radius globally; reserve `50px` pill exclusively for hero-level calls to action
5. Apply the soft shadow (`0 0 64px rgba(42,49,79,0.08)`) to any elevated element (dropdowns, modals, cards)
6. Keep paragraph text at `#2A314F` (body), not `#02040E` (ink) — the ink color is for headings and interactive labels
7. Accent colors (pink/green/amber) must be paired with plan names only — do not use them as decorative palette elements
8. Video/template content should always appear on `#02040E` dark card backgrounds to maximize contrast with the light page
