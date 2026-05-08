---
version: alpha
name: UNESCO
description: UNESCO's website embodies institutional clarity at global scale — a clean, light-mode design anchored by a single brand blue and Inter typography that prioritises legibility and trust over visual novelty. The design language is modern and welcoming, using generous pill-shaped interactive elements, full-bleed hero photography with white text overlays, and a disciplined 8-colour palette that signals authority without intimidation.

colors:
  # Brand
  primary: "#0077D4"
  primary-active: "#005FAA"
  on-primary: "#FFFFFF"
  accent-coral: "#D8552C"

  # Surface
  canvas: "#FFFFFF"
  surface: "#F1F4F6"
  surface-dark: "#212121"

  # Text
  ink: "#212121"
  muted: "#7F888F"

  # Borders & Semantic
  hairline: "#D5DADD"
  semantic-error: "#D8552C"

typography:
  display-xl:
    fontFamily: '"Inter", sans-serif'
    fontSize: 60px
    fontWeight: 800
    lineHeight: 1.17
    letterSpacing: 0px

  display-md:
    fontFamily: '"Inter", sans-serif'
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.17
    letterSpacing: 0px

  title-lg:
    fontFamily: '"Inter", sans-serif'
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.17
    letterSpacing: 0px

  title-md:
    fontFamily: '"Inter", sans-serif'
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 0px

  body-lg:
    fontFamily: '"Inter", sans-serif'
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.56
    letterSpacing: 0px

  body-md:
    fontFamily: '"Inter", sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px

  body-sm:
    fontFamily: '"Inter", sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px

  button:
    fontFamily: '"Inter", sans-serif'
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: 0px

  nav-link:
    fontFamily: '"Inter", sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px

  caption:
    fontFamily: '"Inter", sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 16px
  xl: 24px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
    border: "none"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
    border: "1px solid {colors.primary}"

  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
    border: "1px solid {colors.hairline}"

  card-base:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "0px"
    border: "none"
    shadow: "none"

  card-featured:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.hairline}"
    shadow: "none"

  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xl}"
    padding: "8px 24px"
    border: "1px solid {colors.hairline}"

  text-input-focused:
    border: "1px solid {colors.primary}"

  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    padding: "32px 56px 24px"
    border: "none"

  badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.lg}"
    padding: "4px 12px"
    border: "none"
---

# UNESCO Design System

## Overview

UNESCO's website is built around institutional clarity and global accessibility. The design operates as a content-first publishing platform — full-bleed hero images carry the emotional weight of the mission while the underlying interface stays deliberately restrained. A white canvas, a single brand blue, and Inter's clean geometry create a system that reads as authoritative and welcoming simultaneously, whether viewed by a policy-maker in Geneva or a teacher in Nairobi.

The visual language avoids ornamentation entirely. There are no gradients, no decorative shadows, and no complex colour hierarchies — just five carefully chosen greys and one brand blue. Pill-shaped buttons and inputs signal approachability against the otherwise institutional grid. Photography is the only decoration: full-viewport heroes with dark scrim overlays, article thumbnails at consistent aspect ratios, and portrait photography for leadership profiles. The result positions UNESCO apart from both polished tech platforms and stiff government sites.

**Key characteristics:**
- Single-font system — Inter at every size and weight, no display/body split
- 8-colour palette: white canvas, one brand blue, one coral accent, three neutrals, one border
- Pill-shaped CTAs and inputs (32px+ radius) softening the institutional character
- Full-bleed hero photography with dark overlay + white headline — consistent across all section pages
- Flat elevation — no shadows, no gradients, depth through background colour shifts (`#FFFFFF` → `#F1F4F6`)
- Generous section spacing (80px) giving editorial content room to breathe
- Bootstrap 5 grid under the hood; breakpoints at 576/768/992/1200/1400px

---

## Colors

### Brand & Accent
| Token | Hex | Use |
| ----- | --- | --- |
| `primary` | `#0077D4` | Buttons, links, interactive highlights, focus rings |
| `primary-active` | `#005FAA` | Button hover/pressed state |
| `on-primary` | `#FFFFFF` | Text/icons on primary blue backgrounds |
| `accent-coral` | `#D8552C` | Highlighted CTAs, urgent callouts, error states |

### Surface
| Token | Hex | Use |
| ----- | --- | --- |
| `canvas` | `#FFFFFF` | Page background, card interiors |
| `surface` | `#F1F4F6` | Card backgrounds, footer, alternating section fills |
| `surface-dark` | `#212121` | Dark hero overlays, dark-section text areas |

### Text
| Token | Hex | Use |
| ----- | --- | --- |
| `ink` | `#212121` | All body text, headings on white/light backgrounds |
| `muted` | `#7F888F` | Secondary text, metadata, timestamps, helper text |

### Borders & Semantic
| Token | Hex | Use |
| ----- | --- | --- |
| `hairline` | `#D5DADD` | Input borders, card dividers, subtle separators |
| `semantic-error` | `#D8552C` | Form validation errors (shared with accent-coral) |

---

## Typography

### Font Family
**Inter** — a clean, humanist sans-serif designed for screen legibility. Available via Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap`. No separate display font — Inter is used at every level from 12px captions to 60px hero headlines.

### Hierarchy Table
| Role | Size | Weight | Line Height | Letter Spacing | Use |
| ---- | ---- | ------ | ----------- | -------------- | --- |
| `display-xl` | 60px | 800 | 1.17 | 0 | Hero page titles (h1) |
| `display-md` | 36px | 600 | 1.17 | 0 | Section headings (h2) |
| `title-lg` | 28px | 600 | 1.17 | 0 | Subsection headings (h3) |
| `title-md` | 24px | 600 | 1.33 | 0 | Card headings, feature titles |
| `body-lg` | 18px | 400 | 1.56 | 0 | Lead paragraphs, introductory text |
| `body-md` | 16px | 400 | 1.4 | 0 | Default body copy, nav labels |
| `body-sm` | 14px | 400 | 1.4 | 0 | Captions, secondary info, inputs |
| `button` | 14px | 600 | 1.6 | 0 | All button labels |
| `nav-link` | 16px | 400 | 1.4 | 0 | Top navigation and footer links |
| `caption` | 12px | 400 | 1.5 | 0 | Metadata labels, image captions, badges |

### Principles
- **Single weight axis:** 400 (body), 600 (headings and UI labels), 800 (hero display only). Never use 300 or 700.
- **No letter-spacing adjustments** — Inter's spacing is left at normal at all sizes.
- **Line height tightens with size:** 1.17 for large display, 1.4 for body — follows the standard editorial tightening convention.
- **Substitute:** If Inter is unavailable, `system-ui, -apple-system, sans-serif` closely matches the rendered rhythm.

---

## Layout

### Spacing System
Base unit: **8px**. All spacing is a multiple of 8 except `xs` (4px) which handles tight insets.

| Token | Value | Use |
| ----- | ----- | --- |
| `xs` | 4px | Icon-to-text gap, tight badge insets |
| `sm` | 8px | Compact padding, list gaps |
| `md` | 16px | Default inset padding, form field gaps |
| `lg` | 24px | Card padding, button horizontal padding |
| `xl` | 32px | Section-level vertical padding, nav top padding |
| `xxl` | 48px | Large section separators |
| `section` | 80px | Full section vertical spacing between major page sections |

### Grid & Container
- **Breakpoints** (Bootstrap 5): xs 0px, sm 576px, md 768px, lg 992px, xl 1200px, xxl 1400px
- **Max container width:** 1400px at xxl breakpoint; fluid below
- **Nav horizontal padding:** 56px at desktop — wider than typical Bootstrap containers, giving the header an airy feel
- **Content columns:** 12-column grid; feature cards typically span 4 (3-up) or 6 (2-up) columns

### Whitespace Philosophy
UNESCO's layout breathes — 80px between major sections gives editorial content room to land. Within sections, 48px separates content groups. Cards have zero internal padding in their container (the image bleeds edge-to-edge) with text content padded at 24px. This creates a magazine-like feel where image and text have distinct territories.

---

## Elevation & Depth

| Level | Treatment | Example use |
| ----- | --------- | ----------- |
| Flat | No shadow, background colour only | Cards (`#F1F4F6`), footer, surface alternates |
| Raised | 1px solid `#D5DADD` border | Featured cards, input fields, modals |
| Overlay | Dark scrim over photography | Hero sections — image + `rgba(0,0,0,0.45)` |

### Shadow Philosophy
UNESCO uses **no box-shadows**. Depth is communicated entirely through background colour contrast: white cards on a white page have a hairline border; cards on a grey (`#F1F4F6`) background float without borders. The absence of shadows reinforces the flat, institutional clarity of the brand.

---

## Shapes

### Border Radius Scale
| Token | Value | Use |
| ----- | ----- | --- |
| `none` | 0px | Full-bleed images, hero sections, footer |
| `sm` | 4px | Subtle rounding on small UI elements |
| `md` | 8px | Cards, content blocks, modals |
| `lg` | 16px | Badge/chip components |
| `xl` | 24px | Search input, pill-adjacent form fields |
| `pill` | 9999px | All CTA buttons, primary search button |

### Photography & Imagery
- **Hero images:** full viewport width, 50–60vh height with a dark scrim overlay; 16:9 or wider aspect ratio
- **Article thumbnails:** 16:9 aspect ratio, `border-radius: 8px`, images fill their container (`object-fit: cover`)
- **Portrait photography:** 1:1 aspect ratio for leadership/speaker profiles, `border-radius: 50%`
- **Colour photography:** vivid, high-saturation images — blue skies, warm skin tones — in deliberate contrast to the site's restrained neutrals

---

## Components

### Buttons
All buttons use Inter 14px/600, pill shape (`border-radius: 9999px`), and consistent 14px 24px padding.

**Primary** — `#0077D4` fill, white text. Used for the primary CTA on any page section.
**Primary active** — `#005FAA` fill on hover/press.
**Secondary** — transparent fill, `#0077D4` text, 1px `#0077D4` border. Used for secondary CTAs alongside primary.
**Ghost** — transparent fill, `#212121` text, 1px `#D5DADD` border. Used for neutral/cancel actions.

### Cards
**Card-base** — `#F1F4F6` background, 8px radius, no border, no shadow. Image bleeds edge-to-edge at the top, text content below with 24px side padding. This is the dominant card pattern across the site.

**Card-featured** — white background, 1px `#D5DADD` border, 8px radius. Used for highlighted or editorially promoted content.

### Inputs & Forms
**Search input** — white background, 1px `#D5DADD` border, 24px border-radius (near-pill), 8px 24px padding. Search icon inset on the left (40px left padding on input). Font: Inter 14px/400.
**Focused state** — border changes to 1px solid `#0077D4`.

### Navigation
**Top nav** — white background, full-width. Padding: 32px 56px 24px at desktop. Two tiers: a small utility bar (Member States Portal, language switcher) above the main nav (Who we are, What we do, Where we work, etc.). Nav links: Inter 16px/400, `#212121`, no underline.

### Badges & Tags
**Badge** — `#F1F4F6` background, `#212121` text, 16px border-radius, Inter 12px/400, 4px 12px padding. Used for topic/category labels on article cards.

---

## Do's and Don'ts

**Do:**
- Use Inter at exactly 800 weight for all h1 hero text — the boldness is essential to readability over photography
- Keep the pill shape (`border-radius: 9999px`) on ALL buttons and search inputs — this is a signature pattern
- Use `#F1F4F6` as alternating section backgrounds to create rhythm without adding visual noise
- Let photography do the decorative work — keep surrounding UI flat and neutral
- Apply a dark scrim (`rgba(0,0,0,0.45)`) over hero images before placing white text
- Use `#0077D4` exclusively for interactive elements — links, buttons, focus rings — never as a decorative colour
- Respect the 80px section spacing; cutting it creates the wrong institutional density

**Don't:**
- Don't add shadows — not to buttons, cards, or modals. The design is deliberately flat.
- Don't use more than three font weights (400, 600, 800) or mix in italic styles
- Don't round cards beyond 8px — the `md` radius is the maximum for content containers
- Don't use `#D8552C` (coral) as a general accent — it signals urgency/error; reserve it for alerts and error states
- Don't centre-align body text — UNESCO uses left-aligned editorial content throughout
- Don't use coloured backgrounds behind text blocks except `#F1F4F6` and dark hero overlays
- Don't truncate headings with ellipsis on desktop — the layout is designed for full editorial titles

---

## Responsive Behavior

### Breakpoints
| Breakpoint | Width | Key Changes |
| ---------- | ----- | ----------- |
| xs (mobile) | 0–575px | Single column, nav collapses to hamburger, hero height 40vh |
| sm | 576–767px | Single column with wider gutters |
| md (tablet) | 768–991px | 2-column card grids, nav still collapsed |
| lg | 992–1199px | Full desktop nav visible, 3-column card grids |
| xl | 1200–1399px | Max content width increases, nav padding 56px |
| xxl (wide) | 1400px+ | Container caps at 1400px, centred on wider viewports |

### Touch Targets
- Minimum touch target: 44×44px on mobile
- Nav hamburger icon: 48×48px
- Buttons retain 14px 24px padding (approximately 48px tall) — meets touch targets at the pill shape

### Collapsing Strategy
- **Navigation:** hamburger menu on mobile and tablet (<992px); full horizontal nav on desktop
- **Card grids:** 1-up on mobile, 2-up on tablet (md), 3-up on desktop (lg+)
- **Hero:** full-bleed image maintained at all sizes; headline reduces from 60px to approximately 36px on mobile; h1 font-weight stays at 800
- **Nav padding:** reduces from 32px 56px at desktop to 16px on mobile

### Image Behavior
- All article thumbnails: `object-fit: cover`, `aspect-ratio: 16/9`
- Hero images: `object-fit: cover`, full viewport width at all sizes
- Portrait photos: `object-fit: cover`, `aspect-ratio: 1/1`, `border-radius: 50%`

---

## Agent Prompt Guide

### Quick Color Reference
- Primary (UNESCO Blue): `#0077D4`
- Primary active: `#005FAA`
- Canvas (background): `#FFFFFF`
- Surface (card bg): `#F1F4F6`
- Ink (text): `#212121`
- Muted (secondary text): `#7F888F`
- Hairline (borders): `#D5DADD`
- Accent coral: `#D8552C`

### Example Component Prompts

**Hero Section:**
"Create a full-bleed hero on a high-quality photo background with a `rgba(0,0,0,0.45)` dark overlay. Headline: Inter 60px, weight 800, white (`#FFFFFF`), line-height 1.17. Subheadline: Inter 18px, weight 400, white, line-height 1.56. CTA button: `#0077D4` background, `border-radius: 9999px`, `14px 24px` padding, Inter 14px/600 white text."

**Article Card:**
"Create a content card on `#F1F4F6` background, `border-radius: 8px`, no shadow. Top: 16:9 image fills card width, `border-radius: 8px 8px 0 0`. Below: 24px side padding. Category badge: `#F1F4F6` bg, `#212121` text, Inter 12px/400, `border-radius: 16px`, `4px 12px` padding. Headline: Inter 24px/600, `#212121`. Body: Inter 16px/400, `#7F888F`."

**Button Set:**
"Primary button: `#0077D4` background, `border-radius: 9999px`, `14px 24px` padding, Inter 14px/600 white text, no border. Secondary button: transparent background, 1px solid `#0077D4` border, same radius and padding, `#0077D4` text. Ghost button: transparent, 1px solid `#D5DADD` border, same radius and padding, `#212121` text."

### Iteration Guide
1. Start with `#FFFFFF` canvas — UNESCO is a light-mode-only design
2. Load Inter from Google Fonts: `wght@400;600;800` — three weights only
3. Keep all interactive elements pill-shaped (`border-radius: 9999px`) — this is the signature detail
4. Never add shadows — use background colour contrast (`#FFFFFF` vs `#F1F4F6`) for depth
5. Use `#0077D4` exclusively for interactive affordances; `#D8552C` only for urgency/error
