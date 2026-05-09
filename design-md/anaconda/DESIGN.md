---
version: alpha
name: Anaconda
description: Anaconda's design system projects technical authority through a clean, developer-first aesthetic anchored by a vivid Anaconda Green primary against white and near-black surfaces. Poppins headlines deliver warmth and approachability while Inter handles all UI and body copy with crisp precision, creating a brand that feels both scientific and accessible.

colors:
  primary: "#08CA4A"
  primary-active: "#0CCB4A"
  accent-purple: "#6D5BF6"
  ink: "#2C2C2C"
  body: "#4A4C51"
  muted: "#60636A"
  canvas: "#FFFFFF"
  surface: "#F7F8F9"
  surface-dark: "#33373D"
  surface-darker: "#1F2124"
  hairline: "#C9CDD5"
  green-tint: "#E6FAED"
  green-tint-text: "#023E18"
  semantic-success: "#08CA4A"
  semantic-error: "#D0021B"

typography:
  display-xl:
    fontFamily: "Poppins, Georgia, serif"
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0px
  display-md:
    fontFamily: "Poppins, Georgia, serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 0px
  title-lg:
    fontFamily: "Poppins, Georgia, serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0px
  title-md:
    fontFamily: "Poppins, Georgia, serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: 0px
  title-sm:
    fontFamily: "Inter, Verdana, sans-serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0px
  body-lg:
    fontFamily: "Inter, Verdana, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  body-md:
    fontFamily: "Inter, Verdana, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  body-sm:
    fontFamily: "Inter, Verdana, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0px
  button:
    fontFamily: "Inter, Verdana, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.43
    letterSpacing: 0px
  nav-link:
    fontFamily: "Inter, Verdana, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0px
  caption:
    fontFamily: "Inter, Verdana, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 1px

spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 80px
  section: 96px

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "10px 16px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "10px 16px"
    border: "none"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "10px 16px"
    border: "1px solid {colors.hairline}"

  button-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    border: "1px solid {colors.hairline}"

  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"

  card-pricing:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "40px 80px 96px"
    border: "1px solid {colors.hairline}"

  card-dark:
    backgroundColor: "{colors.surface-dark}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "none"

  badge-green:
    backgroundColor: "{colors.green-tint}"
    textColor: "{colors.green-tint-text}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
    border: "none"

  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.hairline}"

  text-input-focused:
    border: "1px solid {colors.primary}"

  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    border: "0 0 1px 0 {colors.hairline}"
---

# Anaconda Design System

## Overview

Anaconda's visual language is built for the data science and AI developer — technical, confident, and modern without sacrificing warmth. The design pairs Poppins, a rounded geometric sans-serif, for expressive marketing headlines with Inter for all interface copy and body text, creating a clear hierarchy between aspirational messaging and functional UI. A signature vivid green (`#08CA4A`) anchors every CTA and interactive element, functioning as both a brand signal and an actionable affordance.

The system uses a deliberate light/dark surface duality: most marketing pages open on white (`#FFFFFF`) with generous whitespace before transitioning to dark sections (`#33373D`, `#1F2124`) that showcase technical depth and product screenshots. Purple (`#6D5BF6`) appears as a secondary accent for AI/intelligence-themed content, distinguishing Anaconda's AI tooling from its core data platform. The design avoids excessive rounding and decorative shadow, signaling engineering rigor over consumer polish.

**Key visual characteristics:**
- Vivid Anaconda Green (`#08CA4A`) as the singular CTA color across all surfaces
- Poppins for display/marketing headlines; Inter for all UI, body, and data copy
- White-to-dark section transitions create cinematic visual rhythm
- Purple accent (`#6D5BF6`) reserved for AI/ML product features
- 4px border-radius system — functional geometry, not consumer-friendly curves
- Green tint palette (`#E6FAED`) for success states, callouts, and green-on-green badges
- Nearly shadowless — separation achieved through background color contrast and 1px hairline borders
- Dense-but-breathable pricing cards with extra-large bottom padding (96px) create scanning room

**Positioning:** Where GitHub feels like a social network for code and Snowflake feels like enterprise finance, Anaconda feels like a scientific lab — precise, principled, and optimistic about the power of data science.

---

## Colors

### Brand & Accent

| Token | Hex | Use |
|-------|-----|-----|
| `primary` | `#08CA4A` | Primary CTA buttons, interactive green highlights, success states |
| `primary-active` | `#0CCB4A` | Nav CTA, hover state for primary green |
| `accent-purple` | `#6D5BF6` | AI/ML feature highlights, secondary visual accent |

### Surface

| Token | Hex | Use |
|-------|-----|-----|
| `canvas` | `#FFFFFF` | Default page background, card backgrounds |
| `surface` | `#F7F8F9` | Alternate section backgrounds, input backgrounds |
| `surface-dark` | `#33373D` | Dark section backgrounds, dark cards |
| `surface-darker` | `#1F2124` | Deeper dark sections, footer, hero dark variants |

### Text

| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#2C2C2C` | Headings, high-contrast text |
| `body` | `#4A4C51` | Body copy, nav links, default UI text |
| `muted` | `#60636A` | Secondary text, captions, placeholder text |

### Contextual

| Token | Hex | Use |
|-------|-----|-----|
| `hairline` | `#C9CDD5` | Borders, dividers, outline button borders |
| `green-tint` | `#E6FAED` | Badge/callout background on green-themed content |
| `green-tint-text` | `#023E18` | Text on green-tint backgrounds (WCAG compliant) |

### Semantic

| Token | Hex | Use |
|-------|-----|-----|
| `semantic-success` | `#08CA4A` | Success states (same as primary — green carries both roles) |
| `semantic-error` | `#D0021B` | Error states, destructive actions |

---

## Typography

### Font Families

**Poppins** — Geometric rounded sans-serif used exclusively for marketing display and section headlines. Available via Google Fonts (`font-family: 'Poppins', sans-serif`). Pairs warmth with structure; the rounded letterforms contrast with Inter's more mechanical precision. Loaded at weights 600 and 700.

**Inter** — Variable sans-serif for all UI copy, body text, nav links, and button labels. System-available via `font-family: 'Inter', Verdana, sans-serif`. Optimized for screen rendering at small sizes; used at 400, 600, and 700 weights.

### Hierarchy Table

| Role | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|--------|-------------|----------------|-----|
| `display-xl` | 64px | 700 | 1.25 | 0px | Hero headlines, landing page H1 |
| `display-md` | 48px | 600 | 1.33 | 0px | Section headlines, H2 |
| `title-lg` | 32px | 700 | 1.25 | 0px | Feature section titles |
| `title-md` | 24px | 700 | 1.33 | 0px | Card titles, callout headers |
| `title-sm` | 18px | 700 | 1.4 | 0px | Sub-section labels, sidebar headers |
| `body-lg` | 18px | 400 | 1.6 | 0px | Hero subheadlines, intro paragraphs |
| `body-md` | 16px | 400 | 1.5 | 0px | Default body copy, pricing descriptions |
| `body-sm` | 14px | 400 | 1.43 | 0px | Secondary body copy, table content |
| `button` | 14px | 600 | 1.43 | 0px | Button labels, nav CTA |
| `nav-link` | 16px | 600 | 1.5 | 0px | Navigation links, outline buttons |
| `caption` | 14px | 400 | 1.0 | 1px | Labels, badges, tag text |

### Principles

- Poppins is reserved strictly for headlines and never used for UI elements or body copy
- Inter weight 600 is the interface weight — used for buttons, nav links, and emphasis
- Letter-spacing is neutral (0px) for most roles; only `caption` uses 1px tracking for labeling
- No italics anywhere in the main visual system; emphasis relies entirely on weight
- On dark surfaces, body text uses `#FFFFFF` or `#C9CDD5` (hairline) rather than the dark-mode body color

---

## Layout

### Spacing System

Base unit: 8px

| Token | Value | Use |
|-------|-------|-----|
| `xs` | 8px | Icon padding, tight gaps |
| `sm` | 12px | Button vertical padding, dense component spacing |
| `md` | 16px | Button horizontal padding, form field padding |
| `lg` | 24px | Card internal padding, paragraph gap |
| `xl` | 40px | Section sub-block padding, card padding |
| `xxl` | 80px | Section padding top/bottom |
| `section` | 96px | Generous section gaps, pricing card bottom padding |

### Grid & Container

- Max container: 1200px centered
- Typical section padding: `80px 0` (desktop)
- Pricing grid: 4-column equal-width cards (mobile: 1-column stack)
- Feature grid: 3-column (mobile: 1-column)
- Hero layout: full-width with text-left, visual-right split (50/50)

### Whitespace Philosophy

Anaconda uses generous vertical section spacing (80–96px) to create clear reading chapters between marketing sections. Within sections, content is tighter (16–24px gaps). The effect is a page that feels spacious at a macro level but information-dense at the section level — appropriate for a developer tool audience that reads rather than skims.

---

## Elevation & Depth

### Levels

| Level | Treatment | Example Use |
|-------|-----------|-------------|
| 0 — Flat | No shadow; background color separation | Default cards on white canvas |
| 1 — Hairline | `1px solid #C9CDD5` border | Outline buttons, pricing cards, form inputs |
| 2 — Surface shift | Background shifts to `#F7F8F9` or `#33373D` | Alternating dark sections, feature callouts |
| 3 — Tinted | `#E6FAED` green-tint background | Success badges, featured plan highlight |

### Shadow Philosophy

Anaconda uses no drop shadows. All elevation is communicated through background color contrast — a white card on a gray surface, or a dark card on a darker surface. This shadowless approach reinforces the system's engineering precision and avoids the decorative look of consumer SaaS products. The 1px `#C9CDD5` border serves as the sole separation affordance when surface colors match.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `none` | 0px | Nav active state pill (rectangular), dividers |
| `sm` | 4px | Buttons, inputs, small badges, cards |
| `md` | 8px | Medium cards, dropdowns |
| `lg` | 12px | Large feature cards, modals |
| `xl` | 16px | Large marketing callout blocks |
| `pill` | 9999px | Chip/tag variants if needed |

The system defaults to `4px` — enough to read as "modern" without looking rounded or playful. All buttons and inputs share this single radius.

### Photography & Imagery

- Product screenshots at native aspect ratios; no forced crop
- Dark-mode product screenshots displayed on dark surfaces (`#1F2124`) for natural framing
- Illustration style: clean technical diagrams with green and purple accent colors
- Partner/customer logos displayed in grayscale on white or dark surfaces
- No border-radius applied to product screenshots (full-bleed or contained with 8px radius at most)

---

## Components

### Buttons

**Primary (Green CTA):**
Background `#08CA4A`, text `#2C2C2C`, `border-radius: 4px`, padding `10px 16px`, Inter 14px 600, no border.

**Primary Active/Hover:**
Background `#0CCB4A` (slightly brighter), same text and shape. Transition is immediate, no scale transform.

**Secondary (Ghost on dark):**
Transparent background, white text `#FFFFFF`, `1px solid #C9CDD5`, `border-radius: 4px`, padding `10px 16px`, Inter 14px 600. Used exclusively on dark section backgrounds.

**Outline (on light):**
White background `#FFFFFF`, text `#4A4C51`, `1px solid #C9CDD5`, `border-radius: 4px`, padding `12px 24px`, Inter 16px 600. Larger padding variant for pricing card CTAs.

**Nav Active Pill:**
Dark background `#3F444B`, white text, no border, rectangular (`border-radius: 0px`), padding `10px 20px`. Indicates the active navigation section.

### Cards

**Default Card:**
White background, `border-radius: 12px`, padding `40px`, `1px solid #C9CDD5` border, no shadow.

**Pricing Card:**
White background, `border-radius: 12px`, asymmetric padding `40px 80px 96px` (extra bottom space creates visual breathing room below feature lists), `1px solid #C9CDD5` border.

**Dark Card:**
`#33373D` background, `border-radius: 12px`, padding `40px`, no border.

**Green Tint Callout:**
`#E6FAED` background, `border-radius: 8px`, text color `#023E18`, used for success states and featured plan highlights.

### Inputs & Forms

Text input: white background, `1px solid #C9CDD5`, `border-radius: 4px`, padding `12px 16px`, Inter 16px 400, text `#2C2C2C`.
Focused: `1px solid #08CA4A` border.
Placeholder: `#60636A`.

### Navigation

Sticky top nav with white background and 1px bottom hairline border. Logo left, nav links center/right, green CTA button (`Get Demo`, `#0CCB4A` bg) rightmost. Active section shown with dark rectangular pill (no border-radius). Mobile: hamburger collapse.

### Badges & Tags

Green badge: `#E6FAED` background, `#023E18` text, `border-radius: 4px`, `4px 10px` padding, Inter 14px 400, 1px letter-spacing. Used for plan tier labels and feature callouts.

---

## Do's and Don'ts

**Do:**
- Use `#08CA4A` as the single primary CTA color — every page should have exactly one green action
- Pair Poppins (headings) with Inter (body) — never mix Poppins at body sizes
- Use white-to-dark section transitions to create page rhythm and visual interest
- Apply the 4px border-radius consistently across all interactive elements (buttons, inputs, cards)
- Use the green-tint palette (`#E6FAED` / `#023E18`) for success states and featured plan callouts
- Give sections generous top/bottom padding (80px+) to create clear reading chapters
- Use `#6D5BF6` purple exclusively for AI/ML product differentiation — not as a general accent

**Don't:**
- Don't use shadow effects — all depth comes from background color contrast and hairline borders
- Don't use Poppins below 24px — it loses its character and reads as generic at small sizes
- Don't mix CTA colors — the green button should be the only non-outline button on any given screen
- Don't apply `border-radius` larger than 12px to cards — the system reads as engineering-precise, not consumer-friendly
- Don't use the purple accent for non-AI content — it carries a specific semantic meaning in the brand
- Don't crop product screenshots — show them at native ratio on matching surface backgrounds
- Don't use inline color overrides that compete with the primary green — every green element should feel intentional

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 768px | Single-column layout, stacked nav (hamburger), full-width buttons |
| Tablet | 768–1024px | 2-column grids, condensed nav links, reduced hero font sizes |
| Desktop | > 1024px | Full 3–4 column grids, expanded nav, hero split layouts |

### Touch Targets

- Minimum button height: 40px (10px padding × 2 + 20px line-height)
- Nav links: 44px touch area minimum
- Mobile CTA buttons: full-width (`width: 100%`)

### Collapsing Strategy

- Pricing cards collapse from 4-column to 1-column (mobile stacks vertically)
- Feature grids collapse from 3-column to 1-column
- Hero section switches from 50/50 split to stacked (text above, visual below) on mobile
- Navigation collapses to hamburger; CTA green button remains visible in collapsed state

### Image Behavior

- Product screenshots scale with container, maintaining aspect ratio (`object-fit: contain`)
- Dark-surface screenshots use matching dark container backgrounds (`#1F2124`)
- Hero imagery typically right-aligned on desktop, stacks below headline on mobile

---

## Agent Prompt Guide

### Quick Color Reference
- Primary (Anaconda Green): `#08CA4A`
- Primary Active: `#0CCB4A`
- Accent Purple: `#6D5BF6`
- Canvas (background): `#FFFFFF`
- Surface (alternate): `#F7F8F9`
- Surface Dark: `#33373D`
- Surface Darker: `#1F2124`
- Ink (headings): `#2C2C2C`
- Body text: `#4A4C51`
- Muted text: `#60636A`
- Hairline (borders): `#C9CDD5`
- Green Tint surface: `#E6FAED`
- Green Tint text: `#023E18`

### Example Component Prompts

**Hero Section:**
"Create a hero on white (`#FFFFFF`) background. Headline: Poppins 64px bold 700, color `#2C2C2C`, line-height 1.25. Subheadline: Inter 18px regular 400, color `#4A4C51`, line-height 1.6. Primary CTA: `#08CA4A` background, `#2C2C2C` text, Inter 14px 600, `border-radius: 4px`, `padding: 10px 16px`, no border. Layout: 50% text left, 50% product screenshot right."

**Pricing Card:**
"Create a pricing plan card on white (`#FFFFFF`) background. `border-radius: 12px`. `border: 1px solid #C9CDD5`. Padding: `40px 80px 96px`. Plan name: Poppins 24px 700 `#2C2C2C`. Price: Poppins 48px 600 `#2C2C2C`. Description: Inter 16px 400 `#4A4C51`. CTA button: white background, `#4A4C51` text, `1px solid #C9CDD5` border, `border-radius: 4px`, `padding: 12px 24px`, Inter 16px 600."

**Button Set:**
"Primary button: `#08CA4A` background, `#2C2C2C` text, `border-radius: 4px`, `padding: 10px 16px`, Inter 14px 600, no border. Secondary (ghost, on dark): transparent background, `#FFFFFF` text, `1px solid #C9CDD5` border, same radius and padding. Outline (on light): `#FFFFFF` background, `#4A4C51` text, `1px solid #C9CDD5` border, `border-radius: 4px`, `padding: 12px 24px`, Inter 16px 600."

**Dark Section:**
"Create a content section on `#33373D` background. Section headline: Poppins 48px 600 white `#FFFFFF`. Body text: Inter 16px 400 `#C9CDD5`. CTA: transparent button with `1px solid #C9CDD5` border, white text, `border-radius: 4px`, `padding: 10px 16px`."

### Iteration Guide
1. Start with `#FFFFFF` canvas for marketing sections; use `#33373D` or `#1F2124` for dark cinematic sections
2. Load Poppins (600, 700) and Inter (400, 600, 700) from Google Fonts
3. Use `#08CA4A` for exactly one primary CTA per screen — never use it decoratively
4. Apply `border-radius: 4px` consistently to all interactive elements (buttons, inputs, small cards)
5. Use `border-radius: 12px` for content cards
6. Separate sections by background color contrast — never with shadow
7. Reserve `#6D5BF6` purple only for AI/ML product areas
