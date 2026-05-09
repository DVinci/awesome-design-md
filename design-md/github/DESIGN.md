---
version: alpha
name: GitHub
description: |
  GitHub's Primer design system pairs a deep near-black canvas (#0D1117) with a
  proprietary variable font — Mona Sans — and a single vivid-green primary CTA
  (#1F883D). The homepage reads like an extension of the product UI: the same dark
  surface, the same green commit button, the same hairline borders. Light mode
  appears on product and pricing pages (white canvas, #1F2328 ink), where the same
  Primer token set flips to its light-theme values. Typography leans on Mona Sans's
  variable weight axis — fractional weights like 440, 460, 480 are used in marketing
  display headings to create soft, editorial weight transitions impossible with
  static fonts. Green means "go": it signals commits, sign-ups, and primary actions
  throughout the system.

colors:
  # Primary
  primary: "#1F883D"
  primary-active: "#197935"
  primary-hover: "#1C8139"
  on-primary: "#FFFFFF"

  # Accent / link
  accent: "#0969DA"
  accent-dark: "#1F6FEB"
  accent-muted: "#DDF4FF"

  # Canvas (light mode)
  canvas: "#FFFFFF"
  canvas-muted: "#F6F8FA"
  canvas-subtle: "#EFF2F5"

  # Canvas (dark mode)
  canvas-dark: "#0D1117"
  surface-dark: "#151B23"
  surface-dark-elevated: "#161B22"

  # Text (light)
  ink: "#1F2328"
  body: "#59636E"
  muted: "#818B98"

  # Text (dark)
  on-dark: "#F0F6FC"
  on-dark-muted: "#B7BDC8"

  # Borders
  hairline: "#D1D9E0"
  hairline-dark: "#3D444D"
  hairline-strong: "#818B98"

  # Semantic
  semantic-success: "#1A7F37"
  semantic-success-bg: "#DAFBE1"
  semantic-error: "#CF222E"
  semantic-error-bg: "#FFEBE9"
  semantic-warning: "#9A6700"
  semantic-warning-bg: "#FFF8C5"
  semantic-done: "#8250DF"
  semantic-done-bg: "#FBEFFF"

typography:
  display-xl:
    fontFamily: '"Mona Sans VF", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif'
    fontSize: 56px
    fontWeight: 440
    lineHeight: 1.1
    letterSpacing: -0.5px

  display-lg:
    fontFamily: '"Mona Sans VF", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif'
    fontSize: 40px
    fontWeight: 460
    lineHeight: 1.2
    letterSpacing: -0.3px

  display-md:
    fontFamily: '"Mona Sans VF", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif'
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0

  title-lg:
    fontFamily: '"Mona Sans VF", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif'
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0

  title-md:
    fontFamily: '"Mona Sans VF", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif'
    fontSize: 22px
    fontWeight: 480
    lineHeight: 1.4
    letterSpacing: 0

  body-lg:
    fontFamily: '"Mona Sans VF", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

  body-md:
    fontFamily: '"Mona Sans VF", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

  body-sm:
    fontFamily: '"Mona Sans VF", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

  button:
    fontFamily: '"Mona Sans VF", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif'
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0

  nav-link:
    fontFamily: '"Mona Sans VF", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

  caption:
    fontFamily: '"Mona Sans VF", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif'
    fontSize: 12px
    fontWeight: 500
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
  xs: 3px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "5px 16px"
    border: "1px solid rgba(31,35,40,0.15)"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "5px 16px"

  button-secondary:
    backgroundColor: "{colors.canvas-muted}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "5px 16px"
    border: "1px solid {colors.hairline}"

  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "5px 16px"
    border: "1px solid {colors.accent}"

  card-base:
    backgroundColor: "{colors.canvas-muted}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
    border: "1px solid {colors.hairline}"

  card-dark:
    backgroundColor: "{colors.surface-dark}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
    border: "1px solid {colors.hairline-dark}"

  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "5px 12px"
    border: "1px solid {colors.hairline}"

  text-input-focused:
    border: "1px solid {colors.accent}"

  badge-success:
    backgroundColor: "transparent"
    textColor: "{colors.semantic-success}"
    rounded: "{rounded.pill}"
    padding: "4px 8px"
    border: "1px solid {colors.semantic-success}"

  badge-accent:
    backgroundColor: "{colors.accent-muted}"
    textColor: "{colors.accent}"
    rounded: "{rounded.pill}"
    padding: "4px 8px"
    border: "none"

  top-nav:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    border: "none"

  pricing-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"

  pricing-card-featured:
    backgroundColor: "{colors.canvas-dark}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline-dark}"
---

# GitHub Design System

## Overview

GitHub's Primer design system is one of the most extensively documented open-source design systems in the industry, powering the world's largest code hosting platform and its public-facing marketing. The visual language communicates a single principle: building software should feel as natural as writing. Green means "go" — it's the color of diffs, commits, and approvals, and every primary call-to-action inherits this semantic meaning. The dark canvas (`#0D1117`) that blankets the homepage is not a trend choice; it's continuity with the product itself, where most developers work in dark mode all day.

Primer's most distinctive typographic choice is Mona Sans VF, a variable font commissioned by GitHub that enables fractional weight values (440, 460, 480) unavailable in static typefaces. Marketing headlines use these transitional weights to create a soft, editorial feel — different from the bolder 600-weight headings used in the UI. The system operates at two modes simultaneously: a dark marketing surface for emotional impact, and a light product surface for readability at scale. Both share the same Primer token names but swap their resolved values.

**Key characteristics:**
- Deep-dark marketing canvas `#0D1117` mirrors the product dark-mode UI
- Mona Sans VF — proprietary variable font with fractional weight axis
- Green-as-primary: `#1F883D` light / `#238636` dark — semantic "go" color
- Accent blue `#0969DA` / `#1F6FEB` for links and informational CTAs
- `6px` border radius on buttons, cards, and inputs — subtly rounded but never pill
- Thin `1px` borders throughout; no heavy shadows — border defines depth, not shadow
- Token-first: GitHub Primer is CSS-custom-property driven; every value is a semantic token

## Colors

### Brand & Accent
- **Primary green** `#1F883D` — the "go" color; all commit and sign-up CTAs; hover `#1C8139`, active `#197935`
- **Primary green dark** `#238636` — dark-mode variant; hover `#29903B`
- **Accent blue** `#0969DA` / dark `#1F6FEB` — links, informational CTAs, focus rings
- **Accent muted** `#DDF4FF` — tinted background behind blue text callouts

### Surface
- **canvas** `#FFFFFF` — default light page background
- **canvas-muted** `#F6F8FA` — secondary background, code blocks, sidebar areas
- **canvas-subtle** `#EFF2F5` — tertiary tint, disabled states
- **canvas-dark** `#0D1117` — dark mode default; homepage, product dark theme
- **surface-dark** `#151B23` — elevated surface in dark mode (sidebars, drawers)
- **surface-dark-elevated** `#161B22` — cards and panels on dark canvas

### Text
- **ink** `#1F2328` — primary heading and body text on light canvas
- **body** `#59636E` — secondary body copy, descriptions
- **muted** `#818B98` — placeholder, disabled, and de-emphasized text
- **on-dark** `#F0F6FC` — primary text on dark canvas
- **on-dark-muted** `#B7BDC8` — secondary text in dark mode

### Semantic
- **Success** `#1A7F37` / bg `#DAFBE1` — merged PRs, passing checks
- **Error** `#CF222E` / bg `#FFEBE9` — failed checks, destructive actions
- **Warning** `#9A6700` / bg `#FFF8C5` — attention notices
- **Done/Purple** `#8250DF` / bg `#FBEFFF` — closed issues, completed sprints

## Typography

### Font Family
**Mona Sans VF** — GitHub's proprietary variable sans-serif. Load via CDN: `https://github.githubassets.com/assets/mona-sans.woff2` (self-hosted only; for public projects, use the fallback stack). Fallback stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif`.

### Hierarchy Table

| Role | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| display-xl | 56px | 440 | 1.1 | −0.5px | Page hero headlines |
| display-lg | 40px | 460 | 1.2 | −0.3px | Section headers, marketing |
| display-md | 32px | 600 | 1.5 | 0 | Standard H1, dialogs |
| title-lg | 24px | 600 | 1.5 | 0 | H2, card titles |
| title-md | 22px | 480 | 1.4 | 0 | Feature section H2 |
| body-lg | 16px | 400 | 1.5 | 0 | Lead paragraphs |
| body-md | 14px | 400 | 1.5 | 0 | Default body copy |
| body-sm | 12px | 400 | 1.5 | 0 | Captions, metadata |
| button | 14px | 500 | 1.43 | 0 | All button text |
| nav-link | 16px | 400 | 1.5 | 0 | Top navigation links |
| caption | 12px | 500 | 1.5 | 0 | Labels, timestamps |

### Principles
The variable weight axis is the key typographic differentiator. Display headings use 440–460 (lighter than bold, heavier than regular) for a confident but approachable tone. UI headings jump to 600 for clarity at small sizes. Never use weights below 400 or above 600. Avoid letter-spacing adjustments on body text — Mona Sans is optically tuned.

## Layout

### Spacing System
Base unit: `4px`. All spacing values are multiples of 4.

| Token | Value | Use |
|---|---|---|
| xxs | 4px | Badge padding, tight gaps |
| xs | 8px | Icon margins, dense list items |
| sm | 12px | Input padding, inline gaps |
| md | 16px | Card padding, section gaps |
| lg | 24px | Panel padding, between cards |
| xl | 32px | Section padding, generous gaps |
| xxl | 48px | Large section breaks |
| section | 80px | Page section vertical rhythm |

### Grid & Container
- Max container: `1280px` with `16px` side padding on mobile, `32px` on desktop
- 12-column grid with `24px` gutters on desktop, `16px` on mobile
- Marketing pages use full-width sections with centered content up to `1200px`

### Whitespace Philosophy
GitHub gives generous breathing room between sections (80px+) on marketing pages. Product UI is dense by design — the spacing scale compresses in the dashboard. Never use less than `8px` between interactive elements.

## Elevation & Depth

| Level | Treatment | Example use |
|---|---|---|
| 0 | No shadow, hairline border `1px solid #D1D9E0` | Cards, inputs, default surfaces |
| 1 | `0 1px 0 rgba(31,35,40,0.04)` | Buttons, popovers |
| 2 | `0 3px 6px rgba(140,149,159,0.15)` | Dropdowns, menus |
| 3 | `0 8px 24px rgba(140,149,159,0.2)` | Modals, dialogs |

### Shadow Philosophy
Primer is shadow-minimalist. Borders define containment; shadows only appear on overlays and popovers. On the dark canvas, shadows are invisible against the background — only border color creates depth. Never use colored shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| xs | 3px | Inline code snippets, small chips |
| sm | 6px | Buttons, inputs, cards, form controls |
| md | 8px | Larger panels, dropdowns |
| lg | 12px | Modals, overlay panels |
| xl | 16px | Large promotional cards |
| pill | 9999px | Labels, tags, badges, counter chips |

### Photography & Imagery
GitHub uses full-bleed product screenshots as the primary imagery type — actual UI mockups positioned at angles or in device frames. Marketing photos are minimal; when they appear they are dark-tinted to maintain the dark canvas mood. All images use `object-fit: cover` with `aspect-ratio: 16/9` or `4/3`.

## Components

### Buttons
- **Primary**: green `#1F883D`, `6px` radius, `5px 16px` padding, Mona Sans 14px/500, white text, thin border `1px solid rgba(31,35,40,0.15)` for shadow definition
- **Secondary (default)**: `#F6F8FA` bg, `#1F2328` text, same radius/padding, `1px solid #D1D9E0`
- **Outline**: transparent bg, `#0969DA` text, `1px solid #0969DA` border — for informational CTAs
- **Danger**: `#CF222E` bg, white text — destructive actions only
- Button text is always 14px weight 500 — never bold, never uppercase

### Cards
- **Default card**: `#F6F8FA` bg, `6px` radius, `16px` padding, `1px solid #D1D9E0`
- **Dark card**: `#151B23` bg, same radius, `1px solid #3D444D`
- **Pricing card**: `24px` padding, `6px` radius; featured tier uses `#0D1117` bg with gradient border effect
- No card shadows — borders only

### Inputs & Forms
- Text input: `#FFFFFF` bg, `6px` radius, `5px 12px` padding, `1px solid #D1D9E0`
- Focus ring: `1px solid #0969DA` + `3px` blue glow `rgba(9,105,218,0.3)`
- Error state: `1px solid #CF222E` + red glow
- Checkbox/radio: Mona Sans label 14px/400; `#0969DA` fill when checked

### Navigation
- Top nav on dark canvas: transparent bg, white text; collapses to hamburger at mobile
- Sticky behavior: nav gains `rgba(13,17,23,0.95)` backdrop at scroll
- Dropdown menus: `#161B22` bg, `1px solid #3D444D`, `6px` radius, `6px 8px` item padding

### Badges & Labels
- **Success label**: transparent bg, `#1A7F37` text, `1px solid #1A7F37`, `9999px` radius, `4px 8px` padding
- **Accent label**: `#DDF4FF` bg, `#0969DA` text, no border, pill shape
- **Neutral label**: `#818B98` border and text, transparent bg
- Repository language dots: colored `10px` circles with semantic language colors

## Do's and Don'ts

**Do:**
- Use green (`#1F883D`) exclusively for primary commit-style actions — sign up, submit, create
- Apply fractional weights (440–480) to display headings when using Mona Sans VF
- Use `6px` radius consistently across all interactive elements for visual cohesion
- Keep border `1px` throughout — never use 2px+ borders as decoration
- Maintain dark canvas continuity when building surfaces that blend with the product UI
- Use Primer's semantic token names (`--bgColor-default`, `--fgColor-muted`) in CSS so theming is automatic
- Show code in `#161B22` panels with syntax highlighting — this is central to GitHub's identity

**Don't:**
- Don't use blue as a primary action color — blue is reserved for links and informational CTAs
- Don't use border-radius above `12px` on cards or panels — GitHub is functional, not bubbly
- Don't apply shadows to cards in dark mode — they're invisible and create visual noise
- Don't use Mona Sans at weight 300 or below — it reads as weak in the system
- Don't use more than two font weights on a single component
- Don't use uppercase text — GitHub never shouts
- Don't use accent-muted (`#DDF4FF`) as a surface background for dark-theme pages

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|---|---|---|
| mobile | < 544px | Single column, hamburger nav, full-width buttons |
| tablet | 544–1012px | 2-column grids, condensed nav |
| desktop | > 1012px | Full nav, multi-column layouts, sidebar visible |
| wide | > 1280px | Content constrained to 1280px max-width |

### Touch Targets
Minimum 44×44px for all interactive elements on mobile. Buttons keep `5px 16px` padding minimum; row items expand to full-width tap targets.

### Collapsing Strategy
- Top nav collapses to hamburger at `< 1012px`; drawer slides in from left
- Pricing cards stack vertically; featured card appears first in mobile order
- Code panels collapse to horizontally scrollable on narrow viewports
- Repository grids go from 3-column → 2-column → 1-column

### Image Behavior
Product screenshots maintain `aspect-ratio: 16/9`; on mobile they scroll horizontally within a container rather than resizing below readability.

---

## Agent Prompt Guide

### Quick Color Reference
- Primary (green): #1F883D / dark mode: #238636
- Canvas (light): #FFFFFF
- Canvas (dark): #0D1117
- Ink (text): #1F2328
- On-dark text: #F0F6FC
- Surface (light): #F6F8FA
- Surface (dark): #151B23
- Hairline (light): #D1D9E0
- Hairline (dark): #3D444D
- Accent blue: #0969DA / dark: #1F6FEB
- Muted text: #818B98 / dark: #B7BDC8
- Error: #CF222E
- Success: #1A7F37

### Example Component Prompts

**Hero Section (dark canvas):**
"Create a hero on #0D1117 background. Headline 56px, weight 440, Mona Sans VF, line-height 1.1, color #F0F6FC. Subheadline 20px, weight 400, color #B7BDC8. CTA button: #1F883D background, #FFFFFF text, 6px radius, 5px 16px padding, Mona Sans 14px weight 500."

**Card (light mode):**
"Create a card on #F6F8FA background. 6px radius. 1px solid #D1D9E0 border. No shadow. Heading 16px, weight 600, #1F2328. Body copy 14px, weight 400, #59636E. Footer action: link text #0969DA, 14px."

**Button Set:**
"Primary button: #1F883D background, 6px radius, 5px 16px padding, Mona Sans 14px weight 500 #FFFFFF text, 1px solid rgba(31,35,40,0.15) border. Secondary button: #F6F8FA background, 1px solid #D1D9E0 border, same radius and padding, #1F2328 text."

**Repository Label / Badge:**
"Pill badge: transparent background, #1A7F37 text, 1px solid #1A7F37 border, 9999px radius, 4px 8px padding, Mona Sans 12px weight 500."

### Iteration Guide
1. Start with `#0D1117` for marketing/hero sections or `#FFFFFF` for product/utility pages
2. Load Mona Sans VF from GitHub's CDN or substitute with Inter as the closest open alternative
3. Use weight 440–480 for display headings over 32px; use weight 600 for UI headings
4. Green is semantic — only use `#1F883D` for actions that create, submit, or commit
5. All borders are `1px` — use `#D1D9E0` on light surfaces, `#3D444D` on dark
6. Check contrast: on-dark (`#F0F6FC`) on `#0D1117` = 13.6:1; ink (`#1F2328`) on white = 16.7:1
