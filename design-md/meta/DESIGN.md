---
version: alpha
name: Meta
description: |
  Meta's design system powers a product-commerce and brand experience spanning AI glasses,
  VR headsets, apps, and company storytelling. The system centers on a stark white canvas
  with full-bleed photographic hero sections overlaid by the proprietary Optimistic type
  family — Optimistic VF for product pages and Optimistic Display Medium for editorial/brand
  contexts. A cobalt blue (#0457CB) anchors all interactive affordances, paired with
  pill-shaped buttons (border-radius 100px) and a tight two-tone text hierarchy between
  deep ink (#0A1317) and Facebook-lineage link blue (#385898). Sections alternate between
  white canvas and dark photo canvases, creating high-contrast cinematic product reveals
  without relying on elevated surfaces or drop shadows.

colors:
  primary: "#0457CB"
  primary-active: "#0342A0"
  primary-soft: "#0064E0"
  on-primary: "#FFFFFF"
  canvas: "#FFFFFF"
  surface: "#F1F4F7"
  surface-mid: "#F0F0F0"
  surface-dark: "#0A1317"
  on-dark: "#FFFFFF"
  ink: "#0A1317"
  body: "#1C1E21"
  body-alt: "#1C2B33"
  muted: "#5D6C7B"
  muted-2: "#647685"
  link: "#385898"
  hairline: "#DADDE1"
  hairline-mid: "#CCD3DB"
  hero-glass: "#F1F4F7"

typography:
  display-xl:
    fontFamily: '"Optimistic VF", Montserrat, Helvetica, Arial, "Noto Sans", sans-serif'
    fontSize: 64px
    fontWeight: 500
    lineHeight: 1.156
    letterSpacing: 0px
  display-md:
    fontFamily: '"Optimistic VF", Montserrat, Helvetica, Arial, "Noto Sans", sans-serif'
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.167
    letterSpacing: 0px
  display-editorial:
    fontFamily: '"Optimistic Display Medium", Helvetica, Arial, sans-serif'
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0.576px
  title-lg:
    fontFamily: '"Optimistic VF", Montserrat, Helvetica, Arial, "Noto Sans", sans-serif'
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0px
  body-lg:
    fontFamily: '"Optimistic VF", Montserrat, Helvetica, Arial, "Noto Sans", sans-serif'
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.444
    letterSpacing: 0px
  body-md:
    fontFamily: '"Optimistic VF", Montserrat, Helvetica, Arial, "Noto Sans", sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.16px
  body-sm:
    fontFamily: 'Helvetica, Arial, sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.429
    letterSpacing: -0.14px
  caption:
    fontFamily: 'Helvetica, Arial, sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.34
    letterSpacing: 0px
  button:
    fontFamily: 'Helvetica, Arial, sans-serif'
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.34
    letterSpacing: 0px
  nav-link:
    fontFamily: 'Helvetica, Arial, sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.34
    letterSpacing: 0px

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
  xs: 4px
  sm: 8px
  md: 12px
  lg: 24px
  pill: 100px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 30px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 30px"
    border: "none"

  button-primary-sm:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "10px 22px"
    border: "none"

  button-secondary:
    backgroundColor: "{colors.hero-glass}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 30px"
    border: "2px solid transparent"

  button-secondary-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 30px"
    border: "2px solid transparent"

  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.link}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.lg}"
    padding: "4px 12px"
    border: "none"

  card-base:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"

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
    typography: "{typography.nav-link}"
    border: "0 0 1px 0 {colors.hairline}"
    padding: "0 {spacing.lg}"
---

# Meta Design System

## Overview

Meta's visual identity bridges consumer hardware commerce, immersive technology, and corporate brand storytelling within a single design system. The homepage and product pages deploy full-bleed photographic hero sections with white overlay text, while interior and editorial pages shift to white canvas with deep charcoal typography. The result is a cinematic, high-contrast aesthetic that prioritizes product photography as the central visual element.

The system is characterized by strong typographic restraint — only two fonts (Optimistic VF for UI/product, Optimistic Display Medium for editorial) with a weight range of 400–700, and a reliance on size contrast rather than weight variation to establish hierarchy. Interactive affordances are exclusively pill-shaped (100px radius), reinforcing a soft, approachable, and modern brand voice even across technical product categories.

Key visual characteristics:
- Proprietary typeface: Optimistic VF and Optimistic Display Medium (not publicly available — use Montserrat as the closest alternative)
- Cobalt primary action color (#0457CB) consistent across all product surfaces
- Pill-shaped buttons (100px radius) are the signature interactive element — never use square buttons
- Full-bleed photographic hero sections alternate with white canvas sections for rhythm
- Typography-first layout: headings at 48–64px dominate hero sections; body stays at 16–18px
- No drop shadows or elevation on cards — depth via photography and section color alternation
- Nav links use a subtle pill hover treatment (24px radius) with Facebook-heritage link blue
- Dark hero sections use a frosted-glass button variant (semi-opaque light surface) over photography

Meta differentiates from competitors like Apple (warmer, serif-accented, more premium) and Google (more colorful, rounder) by maintaining a bold, technology-forward aesthetic that is less precious and more commercially direct.

---

## Colors

### Brand & Accent

| Token | Hex | Use |
|-------|-----|-----|
| `primary` | #0457CB | CTA buttons, interactive elements, star ratings, links on dark surfaces |
| `primary-active` | #0342A0 | Hover/active state for primary buttons |
| `primary-soft` | #0064E0 | Alternate in-context link blue (lighter variant) |
| `link` | #385898 | Navigation links, body links (Facebook-heritage blue) |

### Surface

| Token | Hex | Use |
|-------|-----|-----|
| `canvas` | #FFFFFF | Default page background, top-nav background |
| `surface` | #F1F4F7 | Section backgrounds, frosted glass buttons, input fields |
| `surface-mid` | #F0F0F0 | Dividers, subtle alternating rows |
| `surface-dark` | #0A1317 | Dark hero sections, cinematic product reveals |

### Text

| Token | Hex | Use |
|-------|-----|-----|
| `ink` | #0A1317 | Primary headings on white canvas, darkest text |
| `body` | #1C1E21 | Default paragraph text, nav items |
| `body-alt` | #1C2B33 | Body text on About/editorial pages (slight warm-dark tint) |
| `muted` | #5D6C7B | Secondary text, metadata, footnotes |
| `muted-2` | #647685 | Tertiary text, helper text |
| `on-dark` | #FFFFFF | All text on dark hero sections and surface-dark backgrounds |

### Borders & Dividers

| Token | Hex | Use |
|-------|-----|-----|
| `hairline` | #DADDE1 | Default borders, card edges, input outlines |
| `hairline-mid` | #CCD3DB | Slightly heavier dividers, table rows |

---

## Typography

### Font Families

**Optimistic VF** — Meta's proprietary variable font, used for all product/commerce UI. Not publicly available. Use `Montserrat` as a fallback.

**Optimistic Display Medium** — A display-optimized cut of the Optimistic family, used for editorial and brand sections (About, blog). Slightly wider letterforms, positive tracking at large sizes.

Full stack:
```css
/* Product/UI */
font-family: "Optimistic VF", Montserrat, Helvetica, Arial, "Noto Sans", sans-serif;

/* Editorial/Brand */
font-family: "Optimistic Display Medium", Helvetica, Arial, sans-serif;

/* Navigation/Utility */
font-family: Helvetica, Arial, sans-serif;
```

### Hierarchy Table

| Role | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|--------|-------------|----------------|-----|
| `display-xl` | 64px | 500 | 1.156 | 0 | Hero H1 ("This is Meta Quest") |
| `display-md` | 48px | 500 | 1.167 | 0 | Section H2 headings on product pages |
| `display-editorial` | 48px | 400 | 1.2 | +0.576px | H2 on About/editorial pages |
| `title-lg` | 24px | 700 | 1.25 | 0 | Product names, card titles |
| `body-lg` | 18px | 400 | 1.444 | 0 | Hero subheadlines, lead paragraphs |
| `body-md` | 16px | 400 | 1.5 | -0.16px | Default body text |
| `body-sm` | 14px | 400 | 1.429 | -0.14px | App store listings, metadata |
| `caption` | 12px | 400 | 1.34 | 0 | Footer text, nav items, auxiliary labels |
| `button` | 14px | 700 | 1.34 | 0 | Button labels |
| `nav-link` | 12px | 400 | 1.34 | 0 | Navigation anchor links |

### Principles

Meta's type strategy is **size-led, not weight-led** — hierarchy is established primarily through size contrast (64px vs 12px) rather than extreme weight variation. Display headings use medium weight (500) rather than bold or black. Body text remains at 400 weight throughout.

The proprietary Optimistic family conveys approachability without warmth — it is technically neutral, with slightly humanist features that avoid both the coldness of geometric sans-serifs and the premium opacity of a brand like Apple's.

When Optimistic VF is unavailable, Montserrat at matching weights (400, 500, 700) is the nearest open-source equivalent.

---

## Layout

### Spacing System

Base unit: 4px. Named scale follows a doubling progression from `xs` onward.

| Token | Value | Use |
|-------|-------|-----|
| `xxs` | 4px | Micro gaps, icon margins |
| `xs` | 8px | Tight component padding, badge padding |
| `sm` | 12px | Nav pill padding (vertical), input padding |
| `md` | 16px | Default component padding, grid gutter |
| `lg` | 24px | Card padding, section row gaps |
| `xl` | 32px | Large component spacing |
| `xxl` | 48px | Between-section spacing on desktop |
| `section` | 80px | Major section vertical padding |

### Grid and Container

- **Max container width**: ~1280px on desktop
- **Nav**: full-width, fixed-height ~56px, max-width 1440px
- **Hero sections**: full-bleed (100vw), no container constraints
- **Content sections**: centered, 80px horizontal padding on desktop, 24px on mobile
- **Product grid**: 3–4 columns on desktop, 2 on tablet, 1 on mobile

### Whitespace Philosophy

Meta uses dramatic whitespace within sections but compresses section boundaries — hero sections butt directly against the next section with no visual gap. This creates a "reveal" effect as users scroll through alternating light and dark sections. Within sections, generous padding (48–80px vertical) gives photography room to breathe.

---

## Elevation and Depth

Meta's design system uses **no drop shadows** on cards or UI surfaces. Depth is created entirely through:

| Level | Treatment | Example use |
|-------|-----------|-------------|
| 0 | Flat, same surface color | Default card on canvas |
| 1 | Section color alternation (white ↔ dark) | Hero vs content sections |
| 2 | Photography fill | Product reveal heroes |
| 3 | Frosted glass overlay (rgba surface at 70% opacity) | Secondary button on dark hero |
| 4 | Full-bleed video/image background | Launch/cinematic product sections |

There are no `box-shadow` values in use — the brand achieves visual hierarchy entirely through color contrast, section alternation, and photographic composition.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `xs` | 4px | Subtle rounding on small utility elements |
| `sm` | 8px | Input fields, small cards |
| `md` | 12px | Standard cards, modals |
| `lg` | 24px | Nav link pill hover treatment |
| `pill` | 100px | All primary and secondary CTA buttons — the signature shape |

### Photography and Imagery

Meta uses high-production photography of hardware products against clean environmental backdrops. Key characteristics:
- Products shown at 3/4 angle or straight-on with subtle environmental depth
- Dark-canvas hero sections feature products with strong contrast against near-black backgrounds
- Lifestyle shots (people wearing AI glasses, playing VR) are full-bleed and cinematic
- No image rounded corners on hero sections — all edges are flush to the viewport
- Product card images are square or 4:3 ratio on white/light surfaces

---

## Components

### Buttons

Meta's button system is built entirely around the **pill shape** (border-radius 100px). All primary and secondary action buttons use this shape — it is the single most recognizable element of the Meta commerce UI.

**Primary (large):**
- Background: `#0457CB`
- Text: `#FFFFFF`, 14px, weight 700
- Padding: `14px 30px`
- Border-radius: `100px`
- No border, no shadow

**Primary (small):**
- Same as large but padding: `10px 22px`

**Secondary (frosted-glass, used on dark hero sections):**
- Background: `rgba(241, 244, 247, 0.698)` — a frosted light surface at ~70% opacity
- Text: `#0A1317`
- Padding: `14px 30px`
- Border: `2px solid rgba(255, 255, 255, 0.1)`
- Border-radius: `100px`
- Used exclusively when the button sits over a dark photographic background

**Nav links (pill hover):**
- Background: transparent (default), `rgba(255, 255, 255, 0)` on light nav
- Text: `#385898` (link blue)
- Border-radius: `24px`
- Padding: `4px 12px`
- No border

### Cards

Cards on Meta follow a flat, borderless approach on dark sections and a light-bordered approach on white canvas:

**Product card (white canvas):**
- Background: `#FFFFFF`
- Border: `1px solid #DADDE1`
- Border-radius: 12px
- Padding: 16–24px
- No shadow

**Feature tile (dark section):**
- Background: none — sits directly on the dark photographic section
- Text: `#FFFFFF`
- Typography: Optimistic VF, typically 24–32px headings

### Inputs and Forms

**Email subscribe input (footer):**
- Background: `#FFFFFF`
- Border: `1px solid #DADDE1`
- Text: `#0A1317`
- Font: Optimistic VF, 16px, letter-spacing -0.16px
- Border-radius: 8px
- Padding: `12px 16px`

**Focused state:**
- Border: `1px solid #0457CB`

### Navigation

- **Top nav**: White canvas background, fixed 56px height
- **Nav links**: Helvetica/Arial 12px, `#385898`, pill hover at 24px radius
- **Mobile**: Hamburger menu, full-screen overlay
- **Locale switcher**: Country code label with 24px-radius pill button, positioned right of nav

---

## Do's and Don'ts

**Do:**
- Use Optimistic VF (or Montserrat as fallback) for all product and commerce UI
- Use pill-shaped buttons (100px border-radius) for all primary and secondary CTAs — this is the signature affordance
- Use `#0457CB` as the sole interactive blue for all action elements
- Let photography do the heavy lifting — keep UI chrome minimal and text overlays restrained
- Alternate between white canvas and dark sections (black or near-black photo backgrounds) to create scroll rhythm
- Use `#385898` for navigation and inline links — never use the primary blue for text links
- Set display headings at 48–64px with medium weight (500) rather than bold for a sophisticated feel
- Apply positive letter-spacing (+0.576px) to editorial headings (Optimistic Display Medium) and negative tracking (-0.14 to -0.16px) to UI body text

**Don't:**
- Don't use border-radius smaller than 24px on buttons — the pill shape is non-negotiable in the Meta system
- Don't use drop shadows or elevation on cards — depth is achieved through contrast, not shadow
- Don't apply more than two font weights on a single page view (use 400 and 500 for text, 700 only for button labels)
- Don't use serif typefaces — Meta's system is entirely sans-serif
- Don't place primary blue (#0457CB) text on a white background for navigation — use link blue (#385898) instead
- Don't use rounded corners on hero images — hero photography is always full-bleed with no radius
- Don't introduce additional accent colors — the palette is deliberately restrained (cobalt + black + white)
- Don't underline links in the nav or product UI — use color alone for link identification

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 768px | Single-column layout, hamburger nav, full-width buttons |
| Tablet | 768–1024px | 2-column product grid, condensed nav |
| Desktop | 1024–1280px | 3-column grid, full horizontal nav |
| Wide | > 1280px | 4-column grid, max-width container centered |

### Touch Targets

- Buttons: minimum 44px height (pill shape ensures this at 10–14px vertical padding)
- Nav links: minimum 32px tap target (8px padding + 16px line-height = 24px, supplemented by invisible hit-area expansion)
- All interactive elements have 2px focus-ring using `#0457CB`

### Collapsing Strategy

- **Nav**: Collapses to hamburger icon at tablet breakpoint; full-screen modal overlay for menu items
- **Hero headlines**: Scale from 64px desktop → 40px tablet → 32px mobile
- **Product grid**: 4 columns → 2 columns → 1 column
- **Section padding**: `section` (80px) → `xxl` (48px) → `xl` (32px) on mobile

### Image Behavior

- Hero images: always `object-fit: cover`, full viewport width, aspect ratio ~16:9 on desktop, 4:3 on mobile
- Product card images: `object-fit: contain` on white backgrounds
- No lazy-load shimmer placeholders visible — images are preloaded for flagship products

---

## Agent Prompt Guide

### Quick Color Reference

- Primary (CTA): #0457CB
- Canvas (background): #FFFFFF
- Surface (section alt): #F1F4F7
- Surface dark (hero): #0A1317
- Ink (headings): #0A1317
- Body text: #1C1E21
- Muted text: #5D6C7B
- Nav link blue: #385898
- Hairline (borders): #DADDE1
- On-dark text: #FFFFFF

### Example Component Prompts

**Hero Section (dark, cinematic):**
"Create a full-bleed hero on a near-black background (#0A1317) with a large photographic product image. Headline: 'Optimistic VF' or Montserrat, 64px, weight 500, white (#FFFFFF), line-height 1.156. Subheadline: 18px, weight 400, white, line-height 1.444. Two pill-shaped buttons side by side: primary with blue (#0457CB) background, white text, 100px radius, 14px 30px padding; secondary with frosted (#F1F4F7 at 70% opacity) background, dark ink text (#0A1317), same radius and padding."

**Product Card:**
"Create a product card on white (#FFFFFF) background. Border: 1px solid #DADDE1. Rounded: 12px. No shadow. Product image top, square or 4:3 ratio. Product name: 24px, weight 700, #0A1317. Price: 18px, weight 400, #1C1E21. CTA link in #0457CB, 14px."

**Hero Section (white canvas):**
"Section on white (#FFFFFF) background. Large heading: 48px, weight 500, Montserrat, #0A1317, line-height 1.167. Body: 18px, weight 400, #1C1E21, line-height 1.444. Blue pill button (#0457CB), white text (#FFFFFF), 100px border-radius, 14px 30px padding."

**Navigation Bar:**
"White (#FFFFFF) nav bar, 56px height. Logo left-aligned. Nav links: Helvetica, 12px, weight 400, #385898, 24px border-radius pill shape on hover, 4px 12px padding. Right-aligned: locale selector pill + blue primary CTA button."

**Button Set:**
"Primary button: #0457CB background, #FFFFFF text, 100px border-radius, 14px 30px padding, Helvetica 14px bold, no border, no shadow. Secondary (on dark): rgba(241,244,247,0.698) background, #0A1317 text, same radius and padding, 2px solid rgba(255,255,255,0.1) border."

### Iteration Guide

1. Start with white canvas (#FFFFFF) as the default page background
2. Load Montserrat from Google Fonts as the Optimistic VF substitute: weights 400, 500, 700
3. Apply medium weight (500) to all display headings — avoid heavy/bold (700) except for button labels
4. Use the pill (100px radius) on every button — this is the brand's single most identifiable UI element
5. Alternate white and near-black (#0A1317) sections to create scroll rhythm; keep each section full-bleed
6. Restrict interactive blue to #0457CB for CTAs and #385898 for text links — never mix them
7. Check contrast: #FFFFFF on #0457CB passes WCAG AA; #0A1317 on #FFFFFF passes WCAG AAA
