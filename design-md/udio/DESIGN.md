---
version: alpha
name: Udio
description: |
  Udio is an AI music creation platform with a bold, dark-first visual identity
  built around a pure black canvas, a signature magenta-pink brand accent, and
  a proprietary display typeface (InnovatorFont). The aesthetic fuses the intimacy
  of a music streaming app with the creative energy of a generative AI tool — deep
  dark surfaces, vivid neon accent hues (magenta, purple, electric green, sky blue),
  and a full-pill CTA geometry that signals accessibility and forward momentum.

colors:
  primary: "#E30B5D"
  primary-active: "#C00A4E"
  canvas: "#000000"
  surface: "#151515"
  surface-raised: "#1F1F1F"
  surface-panel: "#101010"
  ink: "#F9F9F9"
  body: "#F9F9F9"
  muted: "#808080"
  hairline: "#27272A"
  on-dark: "#F9F9F9"
  accent-purple: "#A770EF"
  accent-blue: "#5AB1FF"
  accent-green: "#8EFF0B"
  accent-gold: "#FFB56A"
  semantic-error: "#EE4444"
  semantic-success: "#71F2DC"

typography:
  display-xl:
    fontFamily: "InnovatorFont, 'InnovatorFont Fallback', Inter, sans-serif"
    fontSize: 60px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0.48px
  display-md:
    fontFamily: "InnovatorFont, 'InnovatorFont Fallback', Inter, sans-serif"
    fontSize: 30px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0.48px
  title-lg:
    fontFamily: "InnovatorFont, 'InnovatorFont Fallback', Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.48px
  title-md:
    fontFamily: "InnovatorFont, 'InnovatorFont Fallback', Inter, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.14
    letterSpacing: 0.48px
  body-lg:
    fontFamily: "InnovatorFont, 'InnovatorFont Fallback', Inter, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.48px
  body-md:
    fontFamily: "InnovatorFont, 'InnovatorFont Fallback', Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.48px
  body-sm:
    fontFamily: "InnovatorFont, 'InnovatorFont Fallback', Inter, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0.48px
  button:
    fontFamily: "InnovatorFont, 'InnovatorFont Fallback', Inter, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.48px
  nav-link:
    fontFamily: "InnovatorFont, 'InnovatorFont Fallback', Inter, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.48px
  caption:
    fontFamily: "InnovatorFont, 'InnovatorFont Fallback', Inter, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0.48px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 40px
  section: 80px

rounded:
  sm: 6px
  md: 8px
  lg: 24px
  xl: 32px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"

  button-primary-disabled:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    border: "1px solid {colors.hairline}"

  button-ghost:
    backgroundColor: "#FFFFFF0D"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    border: "1px solid #FFFFFF1A"

  button-hero:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "24px 40px"
    border: "none"

  card-base:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline}"

  card-pricing:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline}"

  text-input:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.hairline}"

  text-input-focused:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.primary}"

  top-nav:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    border: "none"

  badge:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.body}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
    typography: "{typography.caption}"
---

# Udio Design System

## Overview

Udio occupies the intersection of streaming culture and generative AI — its design system is built on the conviction that making music should feel as intimate as listening to it. The visual language wraps a pure black canvas in layers of elevated dark surfaces, punctuated by a single, unmistakable magenta-pink brand accent (`#E30B5D`) that signals creation, action, and identity. Secondary accent hues — electric purple, neon green, sky blue — echo the spectral diversity of music genres without competing with the primary signal.

The typographic system is anchored by InnovatorFont, a proprietary display typeface with a humanist geometry and consistent weight-400 rendering at display sizes, which gives headlines an approachable warmth rather than aggressive tech-industry futurism. The full-pill button geometry (border-radius: 9999px) and generous internal padding reinforce accessibility, making every CTA feel inviting rather than demanding. Spacing is rooted in an 8px base unit with generous section breaks, reflecting the breathing room a music experience demands between moments of engagement.

**Key visual characteristics:**
- Pure black (`#000000`) canvas with a tiered dark surface hierarchy (`#101010` → `#151515` → `#1F1F1F`)
- Signature magenta-pink primary accent (`#E30B5D`) used exclusively for primary CTAs and brand moments
- Proprietary InnovatorFont at weight 400 for display — creates warmth at large sizes without decorative serifs
- Full-pill button geometry (`border-radius: 9999px`) on primary CTAs; 6px radius on utility buttons
- Neon secondary palette: purple `#A770EF`, electric green `#8EFF0B`, sky blue `#5AB1FF`, gold `#FFB56A`
- Consistent `letter-spacing: 0.48px` applied across all type sizes — an unusual positive tracking for a dark-canvas product
- Dark mode only — no light mode; the `dark` class is always present on the HTML element
- Tailwind CSS utility system with a rich set of custom CSS variables in `--session-*` and `--brand-*` namespaces

**Differentiator:** Udio avoids the cold, sterile aesthetic common among AI tools. The warm magenta, the curved pill geometry, and the humanist display font position it as a creative companion rather than a technical instrument, competing more with Spotify's warmth than with Midjourney's austerity.

---

## Colors

### Brand & Accent

| Token | Hex | Use |
| --- | --- | --- |
| `primary` | `#E30B5D` | Primary CTAs ("Sign Up", "Start Creating"), brand highlights, checkbox fill |
| `primary-active` | `#C00A4E` | Hover and pressed state on primary buttons |
| `accent-purple` | `#A770EF` | Generating state indicator, creative feature accents |
| `accent-blue` | `#5AB1FF` | Information, secondary feature highlights |
| `accent-green` | `#8EFF0B` | Brand green accent, success in creation context |
| `accent-gold` | `#FFB56A` | Session accent, warm highlight in editor surfaces |

### Surface

| Token | Hex | Use |
| --- | --- | --- |
| `canvas` | `#000000` | Page background — pure black |
| `surface` | `#151515` | Pricing cards, content containers (--session-background) |
| `surface-raised` | `#1F1F1F` | Create/editor panel background |
| `surface-panel` | `#101010` | Deepest panel surface (--session-panel) |

### Text

| Token | Hex | Use |
| --- | --- | --- |
| `ink` | `#F9F9F9` | Primary text, headings on dark surfaces |
| `body` | `#F9F9F9` | Body text (same as ink on dark canvas) |
| `muted` | `#808080` | Secondary copy, placeholder text, subdued labels |
| `on-dark` | `#F9F9F9` | Text placed on any dark surface — same value as ink |

### Semantic

| Token | Hex | Use |
| --- | --- | --- |
| `hairline` | `#27272A` | Borders, dividers, button outlines |
| `semantic-error` | `#EE4444` | Error states, destructive actions |
| `semantic-success` | `#71F2DC` | Success states (--success-foreground in session context) |

---

## Typography

### Font Family

**InnovatorFont** is Udio's proprietary display typeface, loaded as a web font with an Inter fallback. It has a humanist geometry with consistent weight-400 rendering at large sizes. Inter serves as the UI fallback and is also the primary typeface on Udio's blog/CMS subdomain.

- Display: `InnovatorFont, 'InnovatorFont Fallback', Inter, sans-serif`
- UI/Body fallback: `Inter, ui-sans-serif, system-ui, -apple-system, sans-serif`

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Use |
| --- | --- | --- | --- | --- | --- |
| `display-xl` | 60px | 400 | 1.0 | 0.48px | Hero headline ("Make your music") |
| `display-md` | 30px | 400 | 1.2 | 0.48px | Section headlines ("Create your life's soundtrack") |
| `title-lg` | 16px | 400 | 1.5 | 0.48px | Card titles, sub-section headings |
| `title-md` | 14px | 500 | 1.14 | 0.48px | Small headings, track/song titles |
| `body-lg` | 20px | 400 | 1.4 | 0.48px | Hero sub-copy ("Create any song. Just imagine it.") |
| `body-md` | 16px | 400 | 1.5 | 0.48px | General UI text, footer links |
| `body-sm` | 12px | 400 | 1.33 | 0.48px | Captions, secondary metadata |
| `button` | 14px | 500 | 1.5 | 0.48px | All button labels |
| `nav-link` | 14px | 500 | 1.5 | 0.48px | Navigation items |
| `caption` | 12px | 400 | 1.33 | 0.48px | Image captions, timestamps, micro-labels |

### Principles

- **Weight restraint:** InnovatorFont is used at weight 400 for all display sizes and 500 for interactive elements (buttons, nav). There is no bold weight in the UI — the display font's character achieves visual authority through size alone.
- **Positive tracking:** Every size uses `letter-spacing: 0.48px` — an intentional design decision that slightly opens up text on the dark canvas, improving legibility without resorting to increased font size.
- **Font substitute:** If InnovatorFont is unavailable, Inter at weight 400 (display) and 500 (buttons) is the designated fallback.

---

## Layout

### Spacing System

Base unit: **8px**

| Token | Value | Use |
| --- | --- | --- |
| `xxs` | 4px | Micro gaps, icon padding |
| `xs` | 8px | Compact button padding, icon-to-label gap |
| `sm` | 12px | Input internal padding |
| `md` | 16px | Standard button padding, list item gap |
| `lg` | 24px | Card content gaps, section sub-padding |
| `xl` | 32px | Column gaps, modal padding |
| `xxl` | 40px | Card padding (pricing cards use 40px / p-8 in Tailwind) |
| `section` | 80px | Footer padding, major section breaks |

### Grid & Container

- **Homepage hero:** Full-viewport width, no container constraint
- **Pricing page:** Responsive card grid — single column on mobile, 3 columns on desktop (`md:max-w-md` per card)
- **Max container width:** ~1280px (inferred from `px-20` Tailwind utility on footer = 80px horizontal padding)
- **Footer:** `padding: 40px 80px` — fixed horizontal gutter

### Whitespace Philosophy

Udio uses generous vertical breathing room between hero sections and content blocks. The music creation interface demands visual calm between interactive moments — overcrowding would undermine the creative focus. On the homepage, section transitions are full-bleed with large top/bottom margins, letting each "act" of the landing page feel like its own stage.

---

## Elevation & Depth

| Level | Treatment | Example Use |
| --- | --- | --- |
| 0 — Canvas | `#000000` pure black | Page background |
| 1 — Panel | `#101010` (--session-panel) | Deep editor panels, sidebars |
| 2 — Surface | `#151515` (--session-background) | Pricing cards, content containers |
| 3 — Raised | `#1F1F1F` (--create-background) | Create/prompt panels, input areas |
| 4 — Overlay | `rgba(0,0,0,0.3)` + `backdrop-blur` | Modal overlays, glassmorphism layers |

**Shadow philosophy:** Udio avoids CSS box-shadows in favor of background-color stepping for elevation. Depth is communicated through background luminance differences between surface layers, not cast shadows. The exception is glassmorphism effects (`backdrop-blur-3xl`) used on modal overlays and hero backgrounds.

**Decorative depth:** The homepage uses a full-screen video background with a `rgba(0,0,0,0.3) backdrop-blur-3xl` overlay. Secondary brand-colored glows (`rgba(167, 112, 239, 0.2)` purple) appear in album art backgrounds, echoing the spectral music visualization aesthetic.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
| --- | --- | --- |
| `sm` | 6px | Utility buttons (Sign In, nav buttons), dropdown menus |
| `md` | 8px | Text inputs, checkboxes, modal corners |
| `lg` | 24px | Pricing cards, large content containers |
| `xl` | 32px | Large feature modules (if used) |
| `pill` | 9999px | Primary CTA buttons ("Sign Up", "Start Creating", "Subscribe") |

**Dual geometry:** Udio intentionally uses two radii for buttons. Small utility/ghost buttons use `6px` (sharp and functional); primary brand CTAs use full-pill `9999px` (inviting, music-player-inspired). This two-tier approach maps directly to action hierarchy — pill = primary intent, corner-rounded = secondary utility.

### Photography & Imagery

- **Album art:** Square aspect ratio (1:1), displayed in circular or rounded-square containers with subtle glow effects matching the art's dominant color
- **Video backgrounds:** Full-viewport, auto-playing, with dark overlay for text legibility
- **AI-generated album art:** Displayed in card grids with consistent aspect ratios; no border treatment, relying on dark surface backgrounds for framing

---

## Components

### Buttons

| Variant | Background | Text | Radius | Padding | Use |
| --- | --- | --- | --- | --- | --- |
| Primary (nav) | `#E30B5D` | `#F9F9F9` | 6px | 8px 16px | "Sign Up" in navigation |
| Primary (hero) | `#E30B5D` | `#F9F9F9` | 9999px | 24px 40px | "Start Creating" hero CTA |
| Primary (plan) | `#F9F9F9` | `#17171B` | 9999px | 0 32px | "Subscribe to Standard/Pro" |
| Ghost | `rgba(255,255,255,0.05)` | `#FFFFFF` | 6px | 8px 16px | "Sign In" navigation |
| Outline dark | `#272727` | `#FFFFFF` | 9999px | 0 32px | "Sign up" free plan, credit purchase |

**Note:** The "Subscribe" plan buttons use a white background (`#F9F9F9`) with dark text — an inversion of the standard pattern, used specifically in the pricing context to achieve high contrast on dark card surfaces.

### Cards

**Pricing card:** Background `#151515`, border-radius `24px`, padding `40px`, 1px ring border using `--ring-graphite` class. No box-shadow — elevation communicated by background step. Three tiers: Free, Standard, Pro — all share the same card style, differentiated only by content.

### Inputs & Forms

The main song creation interface uses a prompt input (text area style) on a `#1F1F1F` (`--create-background`) surface. Form elements within settings use standard dark-mode inputs with `border: 1px solid #27272A` and `background: #1F1F1F`.

- **Focus state:** Border changes to `#E30B5D` (brand accent) on focus
- **Placeholder text:** `#808080` (muted)
- **Border radius:** 8px on inputs, 6px on selects

### Navigation

The top navigation is a fixed-position transparent bar that overlays the hero content. On scroll, it remains transparent (no background appears). It contains:
- Udio wordmark (left)
- "Start a Free Trial" text link (center-right)
- "Sign In" ghost button with `rgba(255,255,255,0.05)` background
- "Sign Up" primary button with `#E30B5D` background

### Badges & Tags

Song genre and style tags use the `hairline` border with a dark surface background. Music creation mode indicators (Remix, Inpaint, Style) use named colors from the CSS var system: remix = `#FFF100` (yellow), style = `#FF69B4` (pink), inpaint = `#2289DF` (blue).

---

## Do's and Don'ts

**Do:**
- Use `#E30B5D` magenta as the sole primary CTA color — it is the brand's strongest signal
- Apply full-pill radius (`9999px`) to all primary action buttons; reserve `6px` for utility/ghost buttons
- Maintain the dark surface hierarchy: `#000000` → `#101010` → `#151515` → `#1F1F1F` — never jump more than two levels
- Use InnovatorFont at weight 400 for headlines; weight 500 for interactive labels
- Apply `letter-spacing: 0.48px` consistently across all text sizes
- Let album art imagery provide color variation — the chrome should remain dark and neutral
- Use backdrop-blur overlays for modals and overlapping UI panels
- Pair primary magenta CTAs with enough dark surface space — they need room to breathe

**Don't:**
- Don't use light or white backgrounds anywhere — Udio is dark-canvas only; a light surface reads as broken/unstyled
- Don't apply box-shadows for elevation — use background-color stepping instead
- Don't mix the pill and corner-rounded button geometries on the same visual level
- Don't use InnovatorFont below 12px — the humanist geometry loses clarity at small sizes
- Don't add additional font weights beyond 400/500 — the system is intentionally weight-restrained
- Don't use the accent colors (purple, green, blue, gold) as button backgrounds — they are for decorative accents and status indicators only
- Don't set `letter-spacing` to zero or negative — the positive tracking is a brand characteristic, not a default
- Don't remove the semi-transparent overlay from video hero backgrounds — text legibility depends on it

---

## Responsive Behavior

| Breakpoint | Width | Key Changes |
| --- | --- | --- |
| Mobile | < 768px | Single-column pricing cards, hamburger nav, reduced hero padding |
| Tablet | 768px – 1024px | Two-column card grids, expanded nav |
| Desktop | > 1024px | Three-column pricing cards, full horizontal footer, max-width containers |

**Touch targets:** All interactive buttons have minimum 40px height. The pill geometry naturally produces sufficient touch target size with internal padding.

**Collapsing strategy:**
- Navigation collapses to a minimal wordmark + primary CTA only on mobile; Sign In/Sign Up collapse into a mobile menu
- Pricing cards stack vertically on mobile (`max-w-[90%]`), expand to side-by-side on tablet, and present as a three-column grid on desktop
- The hero section maintains full-viewport height across all breakpoints, with responsive font scaling

**Image behavior:**
- Album art: Maintains 1:1 aspect ratio across all breakpoints, scales by container width
- Video hero: `object-fit: cover`, full-viewport, no letterboxing
- Card images: `width: 100%` within their parent container

---

## Agent Prompt Guide

### Quick Color Reference

- Primary (brand magenta): `#E30B5D`
- Primary active: `#C00A4E`
- Canvas (background): `#000000`
- Surface (cards): `#151515`
- Surface raised (panels): `#1F1F1F`
- Ink (headings/text): `#F9F9F9`
- Muted (secondary text): `#808080`
- Hairline (borders): `#27272A`
- Accent purple: `#A770EF`
- Accent blue: `#5AB1FF`
- Accent green: `#8EFF0B`
- Accent gold: `#FFB56A`
- Semantic error: `#EE4444`
- Semantic success: `#71F2DC`

### Example Component Prompts

**Hero Section:**
"Create a hero on pure black (`#000000`) background with a full-viewport video overlay at `rgba(0,0,0,0.3)`. Headline 60px, weight 400, InnovatorFont, letter-spacing 0.48px, color `#F9F9F9`. Sub-copy 20px, weight 400, color `#808080`. Primary CTA: magenta `#E30B5D` background, full-pill border-radius 9999px, padding 24px 40px, text `#F9F9F9`, 14px weight 500."

**Pricing Card:**
"Create a pricing card on `#151515` background. Border-radius 24px. 1px border `#27272A`. Padding 40px. Tier title 16px weight 400 color `#F9F9F9`. Description 14px weight 400 color `#808080`. Price: large display, weight 600, color `#F9F9F9`. Subscribe button: `#F9F9F9` background, `#17171B` text, border-radius 9999px, padding 0 32px, height 40px, no border."

**Navigation Bar:**
"Create a fixed transparent nav bar (no background) at top of page. Left: Udio wordmark in InnovatorFont 16px weight 600 `#F9F9F9`. Right: 'Sign In' ghost button — `rgba(255,255,255,0.05)` bg, 1px border `rgba(255,255,255,0.1)`, border-radius 6px, padding 8px 16px, text `#FFFFFF`. 'Sign Up' primary — `#E30B5D` bg, no border, same geometry, text `#FFFFFF`."

**Music Creation Input:**
"Create a prompt input on `#1F1F1F` background. Border-radius 8px. Border 1px `#27272A`. Padding 12px 16px. Text 14px weight 400 `#F9F9F9`. Placeholder `#808080`. On focus: border color changes to `#E30B5D`. Submit button inside: magenta `#E30B5D` circle icon button."

**Button Set:**
"Primary button: `#E30B5D` background, border-radius 9999px, padding 8px 16px, font 14px weight 500 InnovatorFont, text `#F9F9F9`, no border. Ghost button: `rgba(255,255,255,0.05)` background, 1px border `rgba(255,255,255,0.1)`, border-radius 6px, same padding and font, text `#FFFFFF`."

### Iteration Guide

1. Always start with `#000000` as the page background — do not substitute dark gray
2. Load InnovatorFont via Udio's CDN or substitute Inter at matching weights (400 body, 500 interactive)
3. Apply `letter-spacing: 0.48px` to every text element — it is a system-wide constant, not a per-size decision
4. Use the two-radius button system: pill (`9999px`) for primary brand actions, `6px` for utility/ghost buttons
5. Build dark surfaces by stepping up from canvas: `#000000` → `#151515` → `#1F1F1F` — never use a background lighter than `#272727` in the main UI
6. Reserve `#E30B5D` exclusively for primary CTAs and brand moments — do not use it for text links, decorative lines, or status badges
7. Check contrast: `#F9F9F9` on `#000000` passes WCAG AA; `#808080` on `#000000` fails AA for body text — use muted color only for decorative or large text
