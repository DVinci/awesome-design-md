---
version: alpha
name: Blender
description: |
  Blender is the free and open source 3D creation suite. Its design system reflects a
  dark-first creative-tool aesthetic — deep charcoal canvases, electric blue gradient
  CTAs, and a single Inter typeface used at extreme weight contrast (800 for display,
  400 for body). The palette balances a near-black dark background with a white navbar,
  bright accent colors for feature categories (cyan, purple, green, red, yellow), and
  a restrained warm orange as the brand theme color. Generous spacing and minimal
  border-radius signal confidence in functionality over decoration.

colors:
  primary: "#6183FF"
  primary-active: "#4A6AFF"
  accent-blue: "#00A8FF"
  accent-cyan: "#46EBC2"
  accent-orange: "#ED8F31"
  accent-purple: "#8861FF"
  canvas: "#292D32"
  canvas-dark: "#1C1E22"
  surface: "#2C323A"
  surface-elevated: "#30353B"
  surface-light: "#F2F2F3"
  navbar: "#FFFFFF"
  ink: "#FFFFFF"
  body: "#4C4D52"
  muted: "#737E8C"
  nav-link: "#8D8E96"
  on-dark: "#FFFFFF"
  hairline: "#D2D6DA"
  hairline-dark: "#40474F"
  semantic-success: "#6BB125"
  semantic-warning: "#E4A511"
  semantic-error: "#EE5353"
  feature-render: "#00AAFF"
  feature-geonodes: "#46F5C0"
  feature-assets: "#FF0066"
  feature-modeling: "#7AEB3D"
  feature-gpencil: "#6B1FA8"
  feature-vse: "#FAEE3E"
  feature-core: "#E05656"
  feature-paint: "#CE85FF"

typography:
  display-xl:
    fontFamily: "\"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif"
    fontSize: 72px
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: 0
  display-md:
    fontFamily: "\"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif"
    fontSize: 56px
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: 0
  title-lg:
    fontFamily: "\"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.14
    letterSpacing: 0
  title-md:
    fontFamily: "\"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif"
    fontSize: 21px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 0
  body-lg:
    fontFamily: "\"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.17
    letterSpacing: 0
  body-md:
    fontFamily: "\"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.56
    letterSpacing: 0
  body-sm:
    fontFamily: "\"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.56
    letterSpacing: 0
  button:
    fontFamily: "\"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.56
    letterSpacing: 0
  nav-link:
    fontFamily: "\"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.56
    letterSpacing: 0
  caption:
    fontFamily: "\"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif"
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
  section: 96px

rounded:
  xs: 4px
  sm: 6px
  md: 10px
  lg: 12px
  xl: 19px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "4px 48px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "4px 48px"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "4px 24px"
    border: "1px solid {colors.primary}"

  button-secondary-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "4px 24px"

  button-donate:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.sm}"
    padding: "4px 16px"
    border: "none"

  card-base:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    border: "none"

  card-dark:
    backgroundColor: "{colors.canvas-dark}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    border: "none"

  text-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
    border: "1px solid {colors.hairline-dark}"

  text-input-focused:
    border: "2px solid {colors.accent-blue}"

  top-nav:
    backgroundColor: "{colors.navbar}"
    textColor: "{colors.nav-link}"
    border: "0 0 1px 0 {colors.hairline}"

  navbar-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    border: "none"

  badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    rounded: "{rounded.xs}"
    padding: "2px 8px"

  badge-feature:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.xs}"
    padding: "2px 8px"
---

# Blender Design System

## Overview

Blender's visual identity is built for creators — it inhabits the dark-canvas territory of professional creative software while simultaneously projecting the openness and accessibility of a community-driven project. The page background is a deep desaturated charcoal (#292D32), while the white navigation bar creates a clean, tool-neutral top rail that doesn't compete with the rendered imagery below. This duality — dark canvas for the hero and content areas, white rail for navigation — mirrors how Blender itself works: a dark interface for the viewport, controls in lighter panels.

The type system is emphatically single-font: Inter at weight 800 for large display text (creating stark visual drama) and weight 400 for body, with weight 500 reserved for interactive elements. The accent system is deliberately multi-colored — each major feature area (Rendering, Geometry Nodes, Grease Pencil, VSE, Modeling) has its own hue, referencing the colored module icons inside the application. The primary CTA gradient (blue-to-cyan, #6183FF → #47AAF5) is the most prominent interactive color, used consistently for download and donate buttons.

**Key visual characteristics:**
- Dark-canvas-first layout with pure white navbar creating intentional surface contrast
- Inter typeface at extreme weight range: 800 display, 500 button, 400 body, 300 light
- Multi-hue feature palette — each Blender module has its own dedicated accent color
- Primary CTA uses a diagonal blue gradient (not a flat color)
- Border-radius is intentionally restrained: 6px on buttons, 10–12px on cards
- Generous whitespace in section breaks; tight spacing within components
- Hero sections use full-bleed imagery with text overlaid on the dark background
- Footer typography is subdued — muted gray on transparent background

**Differentiator:** Unlike commercial creative-tool marketing (Adobe, Maxon) which uses high-gloss gradients and animation-heavy pages, Blender's design leans editorial — heavy type weight, minimal decoration, and imagery-first presentation signal creative authority without vendor lock-in messaging.

---

## Colors

### Brand & Accent

| Token | Hex | Use |
|---|---|---|
| `primary` | `#6183FF` | CTA buttons, gradient start |
| `primary-active` | `#4A6AFF` | Hover/active state for CTA |
| `accent-blue` | `#00A8FF` | Links, focus rings, tab highlights |
| `accent-cyan` | `#46EBC2` | Hero highlights, callouts |
| `accent-orange` | `#ED8F31` | Brand meta theme color, store accents |
| `accent-purple` | `#8861FF` | Release notes, secondary CTAs |

### Feature Module Colors

Each Blender module has a dedicated accent — match these when building feature-specific UI:

| Token | Hex | Module |
|---|---|---|
| `feature-render` | `#00AAFF` | Rendering / Cycles / EEVEE |
| `feature-geonodes` | `#46F5C0` | Geometry Nodes |
| `feature-assets` | `#FF0066` | Asset Library |
| `feature-modeling` | `#7AEB3D` | Modeling tools |
| `feature-gpencil` | `#6B1FA8` | Grease Pencil |
| `feature-vse` | `#FAEE3E` | Video Sequence Editor |
| `feature-core` | `#E05656` | Core / Development Fund |
| `feature-paint` | `#CE85FF` | Painting tools |

### Surface

| Token | Hex | Use |
|---|---|---|
| `canvas` | `#292D32` | Default page background (dark mode dominant) |
| `canvas-dark` | `#1C1E22` | Deepest dark surface — video headers, splash |
| `surface` | `#2C323A` | Card, panel backgrounds on dark canvas |
| `surface-elevated` | `#30353B` | Slightly lifted cards |
| `surface-light` | `#F2F2F3` | Light-mode content sections |
| `navbar` | `#FFFFFF` | Top navigation bar background |

### Text

| Token | Hex | Use |
|---|---|---|
| `ink` | `#FFFFFF` | Headings on dark backgrounds |
| `body` | `#4C4D52` | Body text (appears on light sections) |
| `muted` | `#737E8C` | Footer copy, subdued labels |
| `nav-link` | `#8D8E96` | Navigation link color |
| `on-dark` | `#FFFFFF` | Text on primary buttons and dark backgrounds |

### Semantic

| Token | Hex | Use |
|---|---|---|
| `semantic-success` | `#6BB125` | Success states |
| `semantic-warning` | `#E4A511` | Warning states |
| `semantic-error` | `#EE5353` | Error/danger states |

---

## Typography

### Font Family

Blender uses **Inter** exclusively — a variable-weight sans-serif loaded from Google Fonts. The font stack provides comprehensive system fallbacks:

```
"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Oxygen, Ubuntu, Cantarell, "Open Sans", Arial, sans-serif
```

A separate monospace stack is used for code:
```
ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Source Code Pro", monospace
```

### Hierarchy Table

| Role | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `display-xl` | 72px | 800 | 1.0 | 0 | Hero headlines (desktop) |
| `display-md` | 56px | 800 | 1.0 | 0 | Page H1, subpage heroes |
| `title-lg` | 28px | 600 | 1.14 | 0 | Section headings (H2) |
| `title-md` | 21px | 600 | 1.33 | 0 | Card headings, H3 |
| `body-lg` | 24px | 400 | 1.17 | 0 | Hero subheading / lead |
| `body-md` | 18px | 400 | 1.56 | 0 | Default body paragraph |
| `body-sm` | 14px | 400 | 1.56 | 0 | Navigation, captions, footer |
| `button` | 18px | 500 | 1.56 | 0 | CTA and action buttons |
| `nav-link` | 14px | 400 | 1.56 | 0 | Top-nav and secondary nav items |
| `caption` | 12px | 400 | 1.5 | 0 | Tags, labels, timestamps |

### Principles

- **Weight strategy:** Three key weights — 800 (title/display), 500 (interactive), 400 (reading). Weight 300 (light) is available but rare.
- **Tracking philosophy:** No letter-spacing adjustment; Inter's default spacing is used at all sizes.
- **Variable font:** Blender uses Inter with `font-variation-settings: "wght" 500` on buttons for fine-grained weight control via the variable font axis.
- **No decorative serifs or display fonts** — this is a utility-first type system that pairs with complex 3D imagery without competing.

---

## Layout

### Spacing System

Base unit: **8px**. The CSS custom property `--spacer: 1.6rem` (= 16px at root 10px) defines the scale.

| Token | Value | CSS Var | Use |
|---|---|---|---|
| `xxs` | 4px | `--spacer-1` | Micro gaps, icon padding |
| `xs` | 8px | `--spacer-2` | Input padding, tight gaps |
| `sm` | 12px | — | Secondary button padding |
| `md` | 16px | `--spacer-3` | Default padding, nav |
| `lg` | 24px | `--spacer-4` | Card padding, section rhythm |
| `xl` | 32px | — | Group separators |
| `xxl` | 48px | `--spacer-5` | Large section gaps |
| `section` | 96px | `--spacer-6` | Page section vertical rhythm |

### Grid & Container

- **Max container width:** `1170px` (CSS var `--container-width: 117.0rem`)
- **Gutters:** 16px (mobile), 32px (desktop)
- **Column system:** 12-column grid (Bootstrap-derived)
- **Breakpoints:**
  - `sm`: 900px (tablet)
  - `md`: 980px
  - `lg`: 1220px
  - `xl`: 1380px
  - `xxl`: 1680px

### Whitespace Philosophy

Blender sections breathe generously — full-width hero blocks with 96px+ top and bottom padding create cinematic vertical rhythm between content zones. Inside sections, cards are densely packed but separated by 24px gutters. The constraint: horizontal padding on the container is always `--spacer-md` (16px) at small viewports, expanding to align within the 1170px max-width container on desktop.

---

## Elevation & Depth

### Levels

| Level | Treatment | Example use |
|---|---|---|
| Ground | `#292D32` canvas, no shadow | Page background |
| Surface | `#2C323A` with no border | Cards, side panels |
| Elevated | Card shadow: `hsla(210,8%,62%,.2) 0 8px 24px` | Hovered feature cards |
| Float | `rgba(0,0,0,.4) 0 12px 50px` | Modals, dropdowns |
| Navbar | `rgba(0,0,0,.05) 0 1px 2px 0` | Sticky nav bar |

### Shadow Philosophy

Blender uses shadow sparingly. Most elevation is created through **color difference** (dark surface on darker canvas) rather than soft shadows. The navbar uses a minimal 1px diffuse shadow. Card hover states reveal a medium blue-tinted shadow (`hsla(210,8%,62%,.2)`). No inner shadows or drop-shadows on text.

### Decorative Depth Effects

- **Hero backgrounds:** Full-bleed 3D renders provide depth intrinsically
- **Button gradient:** The `btn-accent` class uses `linear-gradient(350deg, #6183FF, #47AAF5)` creating a subtle diagonal depth cue
- **Feature section highlights:** Bright hue splashes (cyan, purple, green) on dark background create depth via luminance contrast

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `xs` | 4px | Small tags, inline badges |
| `sm` | 6px | Buttons, nav links with bg, inputs |
| `md` | 10px | Small cards, panels |
| `lg` | 12px | Standard cards, feature blocks |
| `xl` | 19px | Large rounded containers |
| `pill` | 9999px | Pill badges, fully rounded chips |

CSS vars:
- `--border-radius: .6rem` (= 9.6px, used for buttons)
- `--border-radius-lg: 1.2rem` (= 19.2px, used for large cards)

### Photography & Imagery

- **Aspect ratios:** Widescreen 16:9 for hero and news thumbnails; square for feature icons
- **Crop treatment:** Full-bleed with content overlaid on dark overlay gradient; no white borders
- **Thumbnail format:** WebP, typically 480×270px for news cards
- **3D renders:** Used as full-page backgrounds in hero sections; never cropped with tight borders

---

## Components

### Buttons

**Primary (accent gradient):**
```
Background: linear-gradient(350deg, #6183FF, #47AAF5)
Text: #FFFFFF, weight 500, 18px Inter
Padding: 4px 48px
Radius: 6px (--border-radius)
Border: none
Shadow: .2rem .4rem 1.6rem rgba(0,82,255,.549)
Hover: background shifts to lighter gradient variant
Active: scale(0.95) transform + color shift
```

**Secondary (outlined):**
```
Background: transparent
Text: {colors.primary}
Border: 1px solid {colors.primary}
Same radius and padding as primary
```

**Standard/Ghost:**
```
Background: #EAEDF0 (--btn-color-bg)
Text: #677A8E (--btn-color)
Padding: 4px 16px
Radius: 6px
Border: none
```

**Donate/Nav CTA:** Same as primary accent gradient, smaller text (14px), padding: `4px 16px`

### Cards

**Dark content card:**
- Background: `#2C323A`
- Radius: 12px
- No border, no shadow by default
- Hover: elevates with `hsla(210,8%,62%,.2) 0 8px 24px`

**Light content card (in light sections):**
- Background: `#FAFAFA` or `#FFFFFF`
- Radius: 12px
- Border: optional 1px `#D2D6DA`
- Shadow: `0 2px 4px rgba(0,0,0,.05)`

**Feature icon card:**
- Dark background with colored icon (using feature-\* color tokens)
- Icon size: 78px
- Radius: 12px

### Inputs & Forms

**Text input (standard):**
```
Background: #2C323A (on dark canvas) or #EAEDF0 (on light)
Text: #FFFFFF
Border: 1px solid #40474F
Radius: 6px
Padding: 8px 16px
```

**Focus state:**
```
Border: 2px solid #00A8FF
Outline: none
Box-shadow: 0 0 0 .2rem rgba(0, 168, 255, .25)
```

### Navigation

**Primary (white) navbar:**
- Background: `#FFFFFF`
- Link color: `#8D8E96`
- Link hover: `#00A8FF` (accent)
- Font: 14px Inter regular
- Padding: 0 16px
- Shadow: `rgba(0,0,0,.05) 0 1px 2px 0`

**Secondary (dark) navbar:**
- Background: `#292D32`
- Link color: `#D2D6DA`
- Active link: `#FFFFFF`
- Separator: `#40474F`

### Badges & Tags

- Background: `#2C323A` on dark, `#F2F2F3` on light
- Text: `#737E8C`
- Radius: 4px
- Padding: 2px 8px
- Feature badges use dedicated feature-\* color tokens as background

---

## Do's and Don'ts

**Do:**
- Use `#292D32` as the default page canvas — Blender is dark-first
- Apply Inter weight 800 for hero headings — the high-weight display is a signature
- Use the blue gradient (`#6183FF → #47AAF5`) for primary CTA buttons
- Match feature-specific accent colors to the correct Blender module (Cycles=blue, GeoNodes=cyan)
- Maintain the white navbar as a clean, tool-neutral separator from the dark hero
- Keep border-radius at 6px for interactive elements, 12px for containers
- Use full-bleed 3D renders for hero backgrounds with text overlaid
- Preserve Inter variable-font weight 500 on all buttons via `font-variation-settings`

**Don't:**
- Don't use flat orange (#ED8F31) as a primary button color — it's the brand theme color but not the CTA color
- Don't apply rounded corners larger than 12px on cards — it breaks the precise, tool-like aesthetic
- Don't use serif or display fonts — Inter is the only typeface in the system
- Don't use pure black `#000000` as a canvas — always use `#292D32` or `#1C1E22`
- Don't lighten the canvas on dark sections — the darkness is intentional, not a contrast issue
- Don't mix more than 2 feature module accent colors on one screen — the palette is meant to be modular
- Don't add heavy box-shadows — elevation is expressed through color contrast, not shadow depth
- Don't hardcode gradient stops — always reference `{colors.primary}` and `{colors.accent-blue}`

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|---|---|---|
| `xs` | 0–899px | Single column, full-width hero, stacked nav |
| `sm` | 900px+ | Two-column layouts unlock, nav expands |
| `md` | 980px+ | Side-by-side feature sections appear |
| `lg` | 1220px+ | 3-column grids, wider hero text |
| `xl` | 1380px+ | Full 1170px container visible |
| `xxl` | 1680px+ | Ultra-wide layout adjustments |

### Touch Targets

- Minimum button height: `calc(--spacer * 2)` = 32px
- Navbar items: min 44px height for mobile
- Feature nav items on mobile: full-width touch target

### Collapsing Strategy

- **Navigation:** Desktop horizontal nav collapses to hamburger menu at <900px; secondary dark nav hides below that threshold
- **Cards:** Feature grids go from 3–4 columns (desktop) → 2 columns (tablet) → 1 column (mobile)
- **Hero text:** Display size 72px on desktop → 40–48px on mobile; H1 never smaller than 28px
- **CTA buttons:** Full-width on mobile (padding collapses, width expands to fill container)

### Image Behavior

- Hero images: `object-fit: cover` on full-bleed containers; aspect ratio preserved
- News thumbnails: 16:9 ratio maintained with `aspect-ratio: 16/9`
- Feature screenshots: `max-width: 100%` with `height: auto`
- No fixed-height image containers — always ratio-based

---

## Agent Prompt Guide

### Quick Color Reference

- Primary (CTA gradient start): #6183FF
- Primary (CTA gradient end): #47AAF5
- Canvas (dark background): #292D32
- Canvas (deep dark): #1C1E22
- Surface (cards on dark canvas): #2C323A
- Ink (headings on dark): #FFFFFF
- Body text (on light sections): #4C4D52
- Muted text / footer: #737E8C
- Navbar background: #FFFFFF
- Nav link text: #8D8E96
- Hairline / borders: #D2D6DA
- Accent blue / links: #00A8FF
- Accent cyan: #46EBC2
- Accent orange (brand theme): #ED8F31
- Accent purple: #8861FF
- Success: #6BB125
- Warning: #E4A511
- Error: #EE5353

### Example Component Prompts

**Hero Section:**
"Create a hero section on #292D32 background with a full-bleed 3D render image behind the content. Headline: 72px Inter weight 800, #FFFFFF, line-height 1.0. Subheadline: 24px Inter weight 400, #FFFFFF, below headline. CTA button: linear-gradient(350deg, #6183FF, #47AAF5) background, #FFFFFF text, weight 500, 18px, padding 4px 48px, border-radius 6px, no border, shadow rgba(0,82,255,.549) 0.2rem 0.4rem 1.6rem."

**Feature Card:**
"Create a feature card on #2C323A background, border-radius 12px, no border. Icon 78px using the feature module's accent color. Heading: 21px Inter weight 600, #FFFFFF. Body copy: 18px weight 400, #737E8C. Hover: add shadow hsla(210,8%,62%,.2) 0 8px 24px."

**Navigation Bar:**
"Create a sticky navbar with #FFFFFF background and rgba(0,0,0,.05) 0 1px 2px 0 bottom shadow. Logo on the left. Nav links: 14px Inter weight 400, #8D8E96, hovering #00A8FF. Donate button on the right: linear-gradient(350deg, #6183FF, #47AAF5), #FFFFFF text, 14px weight 500, padding 4px 16px, border-radius 6px."

**Download Card (dark):**
"Create a download card on #1C1E22 background, border-radius 12px. Title: 28px Inter weight 600, #FFFFFF. Version badge: 14px weight 500, #8861FF on #30353B, radius 4px. Download button: linear-gradient(350deg, #6183FF, #47AAF5), #FFFFFF, 18px weight 500, padding 4px 48px, radius 6px."

**Button Set:**
"Primary button: linear-gradient(350deg, #6183FF, #47AAF5) background, no border, 6px radius, padding 4px 48px, #FFFFFF text, 18px Inter weight 500. Secondary button: transparent background, 1px solid #6183FF border, same radius and padding, #6183FF text. Ghost button: #EAEDF0 background, #677A8E text, 14px, padding 4px 16px, same radius."

### Iteration Guide

1. Start with `#292D32` as the page background — Blender is dark-first; light sections are insets, not the default
2. Load Inter from Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;800&display=swap`
3. Use weight 800 for display headings — the extreme weight is a key brand signature
4. CTA buttons use a blue gradient, not a flat color — `linear-gradient(350deg, #6183FF, #47AAF5)`
5. When building feature-specific pages, apply the corresponding feature-\* accent color for icons and highlights
6. Keep border-radius at 6px (buttons) and 12px (cards) — don't round corners beyond these values
7. Maintain the white navbar as the only fully white surface — dark canvas everywhere else
8. Check contrast: white ink (#FFFFFF) on canvas (#292D32) is always safe; body text (#4C4D52) appears only on light (#F2F2F3+) sections
