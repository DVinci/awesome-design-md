---
version: alpha
name: Royal Family
description: |
  The official visual identity of the British Royal Family at royal.uk. A formal,
  heritage-rich design system built on a deep Royal Navy blue (#233580), antique gold
  (#9F8561), and crimson (#803444) palette. Typography pairs the serif display face
  RufinaALT02 for card titles and decorative headlines with Raleway (sans-serif) for
  UI labels, navigation, and body copy. The aesthetic is dignified and restrained —
  flat design with zero border-radius, generous whitespace, and photo-forward
  "infinity card" panels that overlay white serif type on full-bleed imagery. Depth
  is expressed through a single translucent header shadow rather than card elevation.

colors:
  primary: "#233580"
  primary-active: "#182458"
  primary-light: "#2D3F8C"
  primary-lighter: "#4B5995"
  accent-gold: "#9F8561"
  accent-crimson: "#803444"
  accent-crimson-dark: "#5C2531"
  accent-purple: "#5D4375"
  accent-lavender: "#8C91B6"
  accent-teal: "#508A77"
  canvas: "#FFFFFF"
  surface: "#F7F7F7"
  surface-lavender: "#EDEEF5"
  ink: "#161616"
  body: "#2F2F2F"
  muted: "#666666"
  muted-blue: "#5B7084"
  hairline: "#CCCCCC"
  on-dark: "#FFFFFF"

typography:
  display-xl:
    fontFamily: "RufinaALT02-Regular, Georgia, Times, \"Times New Roman\", serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0.5px
  display-md:
    fontFamily: "RufinaALT02-Regular, Georgia, Times, \"Times New Roman\", serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0.5px
  title-lg:
    fontFamily: "RufinaALT02-Regular, Georgia, Times, \"Times New Roman\", serif"
    fontSize: 30px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0.5px
  title-md:
    fontFamily: "Raleway, Arial, sans-serif"
    fontSize: 32px
    fontWeight: 800
    lineHeight: 1.5
    letterSpacing: 0.5px
  body-lg:
    fontFamily: "Raleway, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-md:
    fontFamily: "Raleway, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "Raleway, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: "Raleway, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  nav-link:
    fontFamily: "Raleway, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Raleway, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 4px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 20px
  lg: 25px
  xl: 30px
  xxl: 60px
  section: 80px

rounded:
  none: 0px
  xs: 0px
  sm: 0px
  md: 0px
  lg: 0px
  pill: 0px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
    border: "none"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
    border: "1px solid {colors.primary}"

  button-secondary-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
    border: "1px solid {colors.primary}"

  card-base:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    border: "none"

  card-infinity:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    border: "none"

  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.md}"
    border: "1px solid {colors.primary}"

  text-input-focused:
    border: "2px solid {colors.primary}"

  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: "none"
    boxShadow: "0px 2px 9px 0px #D1CECE80"

  footer:
    backgroundColor: "{colors.surface-lavender}"
    textColor: "{colors.ink}"
    linkColor: "{colors.primary}"
    padding: "{spacing.xl} 0"

  card-label:
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    textTransform: "uppercase"
    letterSpacing: "4px"
---

# Royal Family Design System

## Overview

The official website of the British Royal Family (royal.uk) embodies centuries of institutional heritage through a design language that is simultaneously stately and modern. Deep Royal Navy blue (`#233580`) serves as the primary identity color — evoking authority, tradition, and continuity — while antique gold (`#9F8561`) and crimson (`#803444`) provide ceremonial accent notes drawn directly from heraldic tradition. The overall palette is dark, cool, and restrained, with lavender-tinted surfaces (`#EDEEF5`) replacing warm neutrals for secondary backgrounds.

The typographic system is its defining differentiator: a proprietary serif display face (RufinaALT02, a custom geometric-influenced serif based on historical letterforms) handles all card titles and display headlines, creating an unmistakably formal, aristocratic texture. This is paired with Raleway — a geometric sans-serif — for all interface elements, body copy, and navigation. The result is a clear hierarchy between editorial content (serif, dignified) and functional UI (sans, clean). The site favors flat, zero-radius design throughout, relying on photography and color bands rather than shadows or depth to create visual structure.

**Key visual characteristics:**
- Royal Navy blue primary (#233580) with antique gold (#9F8561) and crimson (#803444) heraldic accents
- Dual font system: RufinaALT02 serif (display/card titles) + Raleway sans-serif (UI/body)
- Absolutely flat design — zero border-radius on every element including inputs, cards, and buttons
- "Infinity card" component: full-bleed photo panels with white serif title overlaid on colored image overlay
- Buttons are always outlined (`border: 1px solid #233580`) — no filled primary button in the editorial CTA context
- Card prefix labels use wide letter-spacing (4px) and uppercase Raleway for category identification
- Footer background uses lavender-grey (`#EDEEF5`) rather than white or dark
- Nav header uses translucent white (`rgba(255,255,255,0.95)`) with a single subtle box-shadow
- Generous whitespace — section margins of 30px, CTA spacing of 60px
- Photography-led content architecture — imagery is the primary visual element, text overlays are restrained

**Positioning:** Unique among government/institutional sites for using a custom proprietary serif display face and a sophisticated dual-font pairing. Competitors (parliament.uk, gov.uk) rely on single-font systems and functional utility design. royal.uk achieves editorial quality closer to a premium heritage magazine than a government information service.

## Colors

### Brand & Accent

| Token | Hex | Use |
| ----- | --- | --- |
| `primary` | `#233580` | Royal Navy blue — primary buttons (filled), links, section titles, borders |
| `primary-active` | `#182458` | Hover/active state for primary blue elements |
| `primary-light` | `#2D3F8C` | Navy blue variant — alternate card overlays |
| `primary-lighter` | `#4B5995` | Purple-blue — lighter accent for dividers |
| `accent-gold` | `#9F8561` | Antique gold — ceremonial accent, decorative borders |
| `accent-crimson` | `#803444` | Royal crimson — semantic error, accent panels |
| `accent-crimson-dark` | `#5C2531` | Deep crimson — active/hover for crimson elements |
| `accent-purple` | `#5D4375` | Heritage purple — rare decorative accent |
| `accent-lavender` | `#8C91B6` | Soft lavender — muted accent, tag backgrounds |
| `accent-teal` | `#508A77` | Royal teal — success semantic, eco/environment sections |

### Surface

| Token | Hex | Use |
| ----- | --- | --- |
| `canvas` | `#FFFFFF` | Default page background, card interiors |
| `surface` | `#F7F7F7` | Subtle off-white — alternate section bands |
| `surface-lavender` | `#EDEEF5` | Footer background, secondary section bands |

### Text

| Token | Hex | Use |
| ----- | --- | --- |
| `ink` | `#161616` | Primary headings on light backgrounds |
| `body` | `#2F2F2F` | Body copy paragraphs |
| `muted` | `#666666` | Subdued text — metadata, captions, secondary labels |
| `muted-blue` | `#5B7084` | Blue-grey — secondary text on colored backgrounds |
| `on-dark` | `#FFFFFF` | Text on navy/crimson/dark photo backgrounds |

### Semantic

| Token | Hex | Use |
| ----- | --- | --- |
| `accent-teal` | `#508A77` | Success — confirmations, positive status |
| `accent-crimson` | `#803444` | Error/destructive actions |
| `accent-gold` | `#9F8561` | Warning — informational callouts |
| `hairline` | `#CCCCCC` | Borders, separators, dividers |

## Typography

### Font Families

**RufinaALT02-Regular** — The proprietary Royal Family display serif. A custom typeface with characteristics of historical lettering — elegant, formal, and aristocratic. Used exclusively for card titles and section-level display headlines. Hosted via the royal.uk CDN; fallbacks: `Georgia, Times, "Times New Roman", serif`.

**Raleway** — A geometric sans-serif available via Google Fonts. Used for all UI elements: navigation, buttons, body copy, labels, and captions. Clean and legible at small sizes, authoritative at large weights. Fallback: `Arial, sans-serif`.

### Typography Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Use |
| ---- | ---- | ---- | ------ | ----------- | -------------- | --- |
| `display-xl` | RufinaALT02 / Georgia | 48px | 400 | 1.2 | 0.5px | Large editorial hero headlines |
| `display-md` | RufinaALT02 / Georgia | 32px | 400 | 1.25 | 0.5px | h2 section headers, card titles on large cards |
| `title-lg` | RufinaALT02 / Georgia | 30px | 400 | 1.2 | 0.5px | Infinity card titles (overlaid on photos) |
| `title-md` | Raleway | 32px | 800 | 1.5 | 0.5px | Section heading labels in UI (bold sans) |
| `body-lg` | Raleway | 18px | 400 | 1.6 | 0 | Lead paragraphs, introductory copy |
| `body-md` | Raleway | 16px | 400 | 1.5 | 0 | Default body text, nav links, footer links |
| `body-sm` | Raleway | 14px | 400 | 1.5 | 0 | Metadata, timestamps, secondary info |
| `button` | Raleway | 16px | 600 | 1.5 | 0 | CTA buttons and interactive links |
| `nav-link` | Raleway | 16px | 400 | 1.5 | 0 | Navigation menu items |
| `caption` | Raleway | 14px | 400 | 1.5 | 4px | Card prefix labels — always UPPERCASE with wide tracking |

### Typography Principles

- **Dual system:** Never mix RufinaALT02 and Raleway at the same hierarchy level — serif is for editorial display, sans is for UI
- **Card prefix labels:** Always uppercase + 4px letter-spacing using `caption` role — this is the brand's signature labeling pattern
- **Section titles:** Use Raleway 32px weight-800, not RufinaALT02 — the Raleway bold is the UI section header
- **Serif is sparse:** RufinaALT02 appears only on infinity card titles and editorial display — never in buttons, nav, or forms
- **No Google Fonts import for RufinaALT02** — this is a proprietary font; use `Georgia` as the display serif substitute in production

## Layout

### Spacing System

Base unit: 4px. The site uses a practical scale derived from observed padding values.

| Token | Value | Use |
| ----- | ----- | --- |
| `xxs` | 4px | Tight internal spacing, icon padding |
| `xs` | 8px | Small gaps, inline spacing |
| `sm` | 12px | Compact element padding |
| `md` | 20px | Button padding, standard element padding |
| `lg` | 25px | Card internal padding, content insets |
| `xl` | 30px | Section top/bottom margins |
| `xxl` | 60px | CTA button sections, larger element gaps |
| `section` | 80px | Major section separators |

### Grid & Container

- **Max container width:** ~1200px centered with auto margins
- **Column system:** CSS Grid with `infinity-grid-section__content` using negative margins (-3px gutters)
- **Card grid:** 4-column grid on desktop (`grid_block--4x2` = 4 wide, 2 tall proportion)
- **Image aspect ratio:** Cards maintain consistent image-heavy proportions (approximately 3:4 portrait for person cards)

### Whitespace Philosophy

The site breathes generously. Section margins are 30px vertical, CTA sections use 60px top margins, and the infinity-grid section title uses 70px bottom margin before the card grid begins. This generous spacing signals institutional gravity — nothing is rushed, every section stands alone with breathing room.

## Elevation & Depth

### Levels

| Level | Treatment | Example |
| ----- | --------- | ------- |
| 0 — Flat | No shadow, no elevation | Cards, footer, all content sections |
| 1 — Float | `box-shadow: 0px 2px 9px 0px rgba(209,206,206,0.5)` | Top navigation bar on scroll |

### Shadow Philosophy

The Royal Family site uses elevation sparingly and symbolically. Only the sticky navigation header receives a shadow — `rgba(209,206,206,0.5) 0px 2px 9px 0px` — a very soft, barely perceptible grey diffuse shadow that lifts the nav above content on scroll. All content below is completely flat. This restraint reflects institutional dignity: the design does not use modern depth tricks (card shadows, floating panels, layered z-index stacks) that would feel casual or commercial.

### Decorative Depth

- **Photo overlays:** Infinity cards achieve depth through full-bleed photography with no explicit overlay layer — text is positioned over the photo and relies on image darkness for legibility
- **Colored card backgrounds:** Cards use solid colored fills (`#666666` for grey person cards) rather than shadows to distinguish themselves from canvas

## Shapes

### Border Radius Scale

| Token | Value | Use |
| ----- | ----- | --- |
| `none` | 0px | All elements — this is a zero-radius design |
| `xs` | 0px | Buttons |
| `sm` | 0px | Inputs, form fields |
| `md` | 0px | Cards, panels |
| `lg` | 0px | Section containers |
| `pill` | 0px | Tags, badges (still flat) |

**No rounding anywhere.** The Royal Family identity is strictly rectilinear — sharp corners on every interactive element, card, input, and badge. This angular geometry reinforces the formal, architectural quality of the brand. Never add `border-radius` to replicate this identity.

### Photography & Imagery

- **Full-bleed card images:** Infinity cards use 100% width/height photography with text overlaid
- **Portrait orientation:** Person cards (The King, The Queen) use portrait-format cropped images
- **No circular crops:** Royal photography is always rectangular — never use `border-radius: 50%` on images
- **High contrast:** Images used at near-full saturation — no desaturation or sepia treatment

## Components

### Buttons

**Primary (Filled)** — Used for search and utility actions:
- Background: `#233580` (navy blue)
- Text: `#FFFFFF`
- Font: Raleway 16px, weight 600
- Padding: 12px 24px
- Border-radius: 0px
- Border: none

**Secondary / CTA (Outlined)** — The dominant editorial CTA pattern ("Find out more"):
- Background: transparent
- Text: `#233580`
- Font: Raleway 16px, weight 600
- Padding: 20px (equal all sides)
- Border: `1px solid #233580`
- Border-radius: 0px

**Secondary Active:**
- Background: `#233580`
- Text: `#FFFFFF`
- All other properties same as secondary

> Note: The outlined button is the primary editorial CTA pattern on this site. Filled buttons appear mainly in the search UI.

### Infinity Cards

The signature component — full-bleed photo panels with overlaid text:
- **Container:** `grid_block` system, transparent bg, 3px transparent border (hover becomes colored)
- **Card inner** (`.infinity-card`): Solid colored background (`#666666` grey for persons, or photo bg)
- **Card prefix label** (`.infinity-card__prefix`): Raleway 14px, uppercase, 4px letter-spacing, white, `padding: 0 0 10px 25px`
- **Card title** (`.infinity-card__title`): RufinaALT02 30px weight-400 0.5px tracking, white, `line-height: 36px`
- **Card content** (`.infinity-card__content`): Raleway 16px, white, `padding: 0 25px`

### Text Inputs

- Background: `#FFFFFF`
- Border: `1px solid #233580`
- Border-radius: 0px
- Padding: 8px 20px
- Font: Raleway 16px

**Focused state:** `border: 2px solid #233580` (border thickens)

### Navigation (Top Bar)

- Background: `rgba(255, 255, 255, 0.95)` — translucent white, frosted glass effect
- Shadow: `rgba(209, 206, 206, 0.5) 0px 2px 9px 0px` — present on scroll
- Link color: `#000000` for primary nav items, `#233580` for active/highlighted
- Font: Raleway 16px weight-400
- Padding: 0px (full-width strip)
- Position: sticky on scroll

### Footer

- Background: `#EDEEF5` (lavender-grey)
- Text: `#000000`
- Links: `#233580` weight-500
- Padding: 20px 0
- Font: Raleway 16px
- No border-top — the lavender-grey color change serves as the visual separator

### Section Titles (Grid Sections)

- Font: Raleway 32px, weight-800 (extra-bold)
- Color: `#233580`
- Letter-spacing: 0.5px
- Margin: 26px top, 70px bottom (generous breathing room above the card grid)

### Card Prefix Labels

Used universally to categorize content before the title:
- Font: Raleway 14px, weight-400, uppercase
- Letter-spacing: 4px
- Color: `#FFFFFF` (on dark/photo cards)
- Padding: `0 0 10px 25px`

## Do's and Don'ts

**Do:**
- Use `RufinaALT02` (or `Georgia` as substitute) exclusively for card titles and editorial display headlines
- Apply wide letter-spacing (4px) to all uppercase category labels — this is the brand's signature labeling pattern
- Keep border-radius at exactly 0px on every element — the flat, rectilinear aesthetic is non-negotiable
- Use the outlined button (`border: 1px solid #233580`, transparent background) for all editorial CTAs
- Pair uppercase Raleway labels with RufinaALT02 titles inside card components — this dual-font pairing is the core component pattern
- Use `#EDEEF5` lavender-grey (not white or dark) for footer and secondary section backgrounds
- Allow photography to dominate card components — text overlays should be minimal and restrained
- Maintain the two-typeface hierarchy strictly — RufinaALT02 for display, Raleway for UI

**Don't:**
- Don't add `border-radius` to any element — even 2px would break the formal angular identity
- Don't use filled blue buttons as the primary CTA for editorial content — the outlined style is correct
- Don't use Raleway for card titles or editorial headlines — that role belongs to RufinaALT02/Georgia
- Don't use bright or highly saturated accent colors beyond the defined palette — the gold and crimson are deliberately muted and antique
- Don't apply card drop-shadows — the zero-elevation flat design is intentional
- Don't use more than 2 typefaces on any single screen
- Don't display card labels in mixed case — they must always be uppercase with wide tracking
- Don't use `rgba` backgrounds for cards or sections (only the nav header uses the translucent white pattern)

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
| ---------- | ----- | ----------- |
| Mobile | < 768px | Single-column card grid; hamburger nav; stacked section layout |
| Tablet | 768–1024px | 2-column card grid; condensed nav; reduced section margins |
| Desktop | 1024px+ | Full 4-column infinity-grid; expanded nav with dropdowns |

### Touch Targets

- Minimum 44px height for all interactive elements
- Nav links padded to full touch target on mobile
- Buttons maintain 44px minimum height at all breakpoints

### Collapsing Strategy

- **Navigation:** Transitions to hamburger menu on mobile; sub-menus become full-screen drawers
- **Card grid:** 4-col → 2-col → 1-col as viewport narrows; card images maintain aspect ratio
- **Section margins:** `margin: 30px 0` reduces to ~16px on mobile; `margin-bottom: 70px` on section titles reduces to ~30px
- **Button padding:** 20px equal-padding buttons reduce to 12px 20px on mobile

### Image Behavior

- Card images are CSS background-images with `background-size: cover; background-position: center`
- Portrait images maintain their proportions — no horizontal stretching
- Minimum image dimensions maintained via min-height on card containers

## Agent Prompt Guide

### Quick Color Reference

- Primary (Royal Navy blue): `#233580`
- Primary active: `#182458`
- Accent gold: `#9F8561`
- Accent crimson: `#803444`
- Canvas (page background): `#FFFFFF`
- Surface (alternate bands): `#F7F7F7`
- Surface lavender (footer): `#EDEEF5`
- Ink (headings): `#161616`
- Body text: `#2F2F2F`
- Muted text: `#666666`
- Hairline (borders): `#CCCCCC`
- On-dark (overlay text): `#FFFFFF`

### Example Component Prompts

**Hero / Infinity Card:**
"Create a full-bleed photo card. Overlay a category label in Raleway 14px, uppercase, white, 4px letter-spacing at the top-left (padding 25px). Below it, the card title in Georgia 30px weight-400, white, 0.5px letter-spacing, line-height 1.2. No border-radius. The card background is the photo itself — no separate overlay layer."

**Section Header:**
"Create a section header with a title in Raleway 32px weight-800 color #233580, letter-spacing 0.5px. Below it, a 4-column grid of infinity cards. At the bottom, an outlined CTA button: transparent background, 1px solid #233580 border, Raleway 16px weight-600 text #233580, padding 20px all sides, 0px border-radius."

**CTA Button (Outlined):**
"Create an outlined button: transparent background, 1px solid #233580 border, text #233580, Raleway 16px weight-600, padding 20px equal all sides, sharp corners (0 border-radius). On hover: fill becomes #233580, text becomes #FFFFFF."

**Navigation Bar:**
"Create a sticky top nav with rgba(255,255,255,0.95) background, box-shadow rgba(209,206,206,0.5) 0px 2px 9px 0px. Left: crown logo. Right: nav links in Raleway 16px weight-400 color #000000. Active links in #233580. No border-bottom — the shadow provides separation."

**Footer:**
"Create a footer on #EDEEF5 lavender-grey background. Navigation links in Raleway 16px weight-500 color #233580. Copyright text in #000000 weight-400. Padding: 20px 0. Columns for nav sections. No border-top."

**Card Label:**
"Add a category prefix label above the card title: Raleway 14px weight-400, uppercase, letter-spacing 4px, color #FFFFFF. This label always appears directly above the serif display title on photo cards."

### Iteration Guide

1. Start with a white (`#FFFFFF`) canvas; use `#EDEEF5` only for footer or alternate section bands
2. Load Raleway from Google Fonts — apply it as the default font-family for all UI
3. Use Georgia or Times New Roman as the display serif substitute for RufinaALT02
4. Set `border-radius: 0` globally — this identity has no rounding anywhere
5. Apply `#233580` as the primary brand color for titles, links, button borders, and input borders
6. For editorial CTAs, always use the outlined button pattern (transparent + border) — never filled blue
7. Use uppercase + 4px letter-spacing for all card category labels (the Raleway caption role)
8. Ensure all card titles use the serif font (Georgia) — never Raleway for card display text
9. Check contrast: `#FFFFFF` on `#233580` passes AA; `#FFFFFF` on `#666666` passes AA; verify all dark overlays
