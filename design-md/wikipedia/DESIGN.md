---
version: alpha
name: Wikipedia
description: |
  Wikipedia's design language is utilitarian and deeply readable — the Codex design system
  built by the Wikimedia Foundation prioritizes content legibility above all else. A cool
  near-white canvas (#F8F9FA) supports dense encyclopedic text in a humanist sans-serif
  with a Linux Libertine serif reserved exclusively for article headings. The signature
  Wikipedia blue (#3366CC) anchors all interactive elements: links, tabs, and navigation
  actions. Minimal elevation, flat surfaces, and hairline borders define sections without
  visual noise, reflecting decades of community-driven, accessibility-first web design.

colors:
  primary: "#3366CC"
  primary-active: "#2A55B5"
  ink: "#101418"
  body: "#202122"
  muted: "#54595D"
  secondary-text: "#404244"
  canvas: "#F8F9FA"
  surface: "#FFFFFF"
  surface-alt: "#F6F6F6"
  hairline: "#A2A9B1"
  hairline-input: "#72777D"
  accent-red: "#BF3C2C"
  accent-green: "#008855"
  accent-visited: "#6B4BA1"
  section-teal: "#CEF2E0"
  section-blue: "#CEE0F2"
  section-purple: "#DDCEF2"

typography:
  display-xl:
    fontFamily: '"Linux Libertine", Georgia, Times, "Source Serif 4", serif'
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: 0px

  display-md:
    fontFamily: 'sans-serif'
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: 0px

  title-lg:
    fontFamily: 'sans-serif'
    fontSize: 19px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0px

  title-md:
    fontFamily: 'sans-serif'
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0px

  body-lg:
    fontFamily: 'sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: 0px

  body-md:
    fontFamily: 'sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px

  body-sm:
    fontFamily: 'sans-serif'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px

  button:
    fontFamily: 'sans-serif'
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0px

  nav-link:
    fontFamily: 'sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px

  caption:
    fontFamily: 'sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px

  code:
    fontFamily: 'monospace, monospace'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
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
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  pill: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "6px 12px"
    border: "1px solid {colors.primary}"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.surface}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "6px 12px"
    border: "1px solid {colors.primary-active}"

  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "6px 12px"
    border: "1px solid {colors.primary}"

  button-secondary-active:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary-active}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "6px 12px"
    border: "1px solid {colors.primary-active}"

  button-disabled:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.hairline}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "6px 12px"
    border: "1px solid {colors.hairline}"

  card-base:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xs}"
    padding: "{spacing.md}"
    border: "1px solid {colors.hairline}"
    boxShadow: "none"

  text-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: "4px 8px"
    border: "1px solid {colors.hairline-input}"

  text-input-focused:
    border: "1px solid {colors.primary}"
    boxShadow: "0 0 0 1px {colors.primary}"

  text-input-disabled:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    border: "1px solid {colors.hairline}"

  top-nav:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    typography: "{typography.nav-link}"
    border: "1px solid {colors.hairline}"
    height: "66px"
    padding: "8px 44px"

  sidebar-menu:
    backgroundColor: "transparent"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    padding: "{spacing.xxs} 0"

  article-link:
    textColor: "{colors.primary}"
    textDecoration: "none"

  article-link-visited:
    textColor: "{colors.accent-visited}"

  category-box:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    rounded: "{rounded.xs}"
    padding: "5px"
    border: "1px solid {colors.hairline}"

  infobox:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    border: "1px solid {colors.hairline}"
    padding: "{spacing.xs}"
    float: "right"
---

# Wikipedia Design System

## Overview

Wikipedia is among the most visited websites on Earth, and its design philosophy reflects that universal mandate: every visual decision prioritizes readability, accessibility, and content-over-chrome. Built on the **Codex** design system maintained by the Wikimedia Foundation, Wikipedia's interface is deliberately neutral — it gets out of the way so the knowledge it contains can speak. The near-white canvas (#F8F9FA), dense typographic hierarchy in system-font sans-serif, and the unmistakable Wikipedia blue (#3366CC) for all interactive elements form one of the most recognized visual identities in technology.

The design language is the product of collective consensus across thousands of contributors and decades of iteration. Flat surfaces dominate — no box shadows, no gradients, no decoration. Elevation is expressed purely through hairline borders (#A2A9B1) and subtle background color shifts. The result is a system that feels simultaneously timeless and sparse: encyclopedic in the truest sense, structurally rigorous but never stylistically assertive.

**Key characteristics:**
- Flat, borderless surfaces — depth via hairline borders and background tints only
- Wikipedia blue (#3366CC) anchors all hyperlinks, tabs, and interactive elements
- Linux Libertine serif exclusively for article H1 titles; all other text uses system sans-serif
- Dense information architecture with 208px fixed sidebar, clear content column, and footer
- Section headers (H2) carry section-specific tinted backgrounds on the Main Page
- Color-coded content sections: teal for featured articles, blue for portals, purple for selected content
- Link states are critical: unvisited blue, visited purple-gray, external links with icon
- Accessibility-first contrast ratios throughout; minimum 4.5:1 on all body text

**Differentiator from modern editorial brands:** Wikipedia refuses decorative typography, hero images, or branding exercises. Every pixel is justified by utility. This is what the open internet looked like before design systems — and it still works, globally, for everyone.

---

## Colors

### Brand & Interactive

| Token | Hex | Use |
|-------|-----|-----|
| `primary` | `#3366CC` | All hyperlinks, active tabs, focus rings, button fills |
| `primary-active` | `#2A55B5` | Hover/pressed state for primary buttons and links |
| `accent-visited` | `#6B4BA1` | Visited hyperlink color — distinct purple-gray |
| `accent-red` | `#BF3C2C` | Error states, deletion notices, warning banners |
| `accent-green` | `#008855` | Positive diff markers, article quality indicators |

### Surface & Canvas

| Token | Hex | Use |
|-------|-----|-----|
| `canvas` | `#F8F9FA` | Default page background (the distinctive "Wikipedia gray") |
| `surface` | `#FFFFFF` | Header, navigation bar, search input, infobox backgrounds |
| `surface-alt` | `#F6F6F6` | Slightly darker surface for bordered table cells |
| `section-teal` | `#CEF2E0` | Main Page "Featured Article" section header background |
| `section-blue` | `#CEE0F2` | Main Page portal section header backgrounds |
| `section-purple` | `#DDCEF2` | Main Page selected articles section backgrounds |

### Text

| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#101418` | H1 article titles (slightly darker near-black) |
| `body` | `#202122` | All body text, labels, UI text — the primary content color |
| `secondary-text` | `#404244` | Secondary labels, image captions, sidebar navigation |
| `muted` | `#54595D` | Footer text, meta information, last-edited timestamps |

### Borders & Dividers

| Token | Hex | Use |
|-------|-----|-----|
| `hairline` | `#A2A9B1` | Table borders, category boxes, section separators |
| `hairline-input` | `#72777D` | Search input border, form field borders |

---

## Typography

### Font Families

**System sans-serif** — `sans-serif` resolves to the operating system's default: Helvetica Neue on macOS, Segoe UI on Windows, Roboto on Android/Chrome. Wikipedia intentionally uses the system stack for maximum legibility and zero font-loading overhead. For UI reconstruction, use `"Helvetica Neue", Arial, sans-serif` as a reliable cross-platform equivalent.

**Linux Libertine** — `"Linux Libertine", Georgia, Times, "Source Serif 4", serif` is used exclusively for article H1 headings. It is an open-source humanist serif that gives Wikipedia articles their distinctive scholarly character. Load from `https://en.wikipedia.org/w/load.php?modules=ext.uls.fonts.LinuxLibertine&only=styles` or substitute Georgia for faithful fallback.

**Monospace** — `monospace, monospace` for code snippets, `<pre>` blocks, and template source. The double `monospace` declaration is a known browser normalization technique.

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|--------|-------------|----------------|-----|
| `display-xl` | 28px | 400 | 1.375 | 0 | H1 article title (Linux Libertine) |
| `display-md` | 22px | 700 | 1.375 | 0 | H2 major section headings |
| `title-lg` | 19px | 700 | 1.6 | 0 | H3 sub-section headings |
| `title-md` | 16px | 700 | 1.6 | 0 | H4 nested sub-section headings |
| `body-lg` | 16px | 400 | 1.625 | 0 | Article body paragraphs |
| `body-md` | 14px | 400 | 1.6 | 0 | UI labels, sidebar text, table cells |
| `body-sm` | 13px | 400 | 1.5 | 0 | Captions, footnote references |
| `button` | 14px | 700 | 1.6 | 0 | Button labels, tab labels |
| `nav-link` | 14px | 400 | 1.6 | 0 | Sidebar navigation links |
| `caption` | 12px | 400 | 1.5 | 0 | Image captions, small metadata |
| `code` | 14px | 400 | 1.6 | 0 | Inline code, pre blocks |

### Principles

- **Zero letter-spacing** across all roles — Wikipedia's typography relies on natural character spacing with no tracking adjustments
- **Weight binary** — only 400 (regular) and 700 (bold); no intermediate weights anywhere in the UI
- **Serif only at the title** — H1 in Linux Libertine, all other headings and body in sans-serif; mixing further would undermine the encyclopedic aesthetic
- **Line height generosity** — 1.625 on body text enables scanning of dense reference content without fatigue
- **No italic display** — italic is reserved for species names, foreign terms, and emphasis within article prose, never for UI elements

---

## Layout

### Spacing System

Base unit: **4px** (xxs). All spacing steps are multiples of 4px.

| Token | Value | Use |
|-------|-------|-----|
| `xxs` | 4px | Tight internal padding, icon-to-text gaps |
| `xs` | 8px | Search input internal padding, small cell padding |
| `sm` | 12px | Footer vertical padding, button padding |
| `md` | 16px | Standard card/section internal padding |
| `lg` | 24px | Section separators, content block gaps |
| `xl` | 32px | Major content section margins |
| `xxl` | 48px | Page-level vertical rhythm between content types |
| `section` | 80px | Reserved for major layout sections |

### Grid & Container

Wikipedia uses a **flexible column layout** rather than a strict grid:
- **Sidebar column**: 208px fixed width (left-aligned TOC / navigation)
- **Content column**: fluid, fills remaining space up to ~960px comfortable reading width
- **Max content width**: ~960px for article text; wider for portal pages
- **Header height**: 66px fixed
- **Sidebar left padding**: 44px from page edge (desktop)
- On mobile, the sidebar collapses to a hamburger menu and the content column takes full width

### Whitespace Philosophy

Wikipedia uses conservative whitespace — enough to separate content sections clearly, but never so much that it wastes screen real estate on reference material users are scanning. Section headings use a bottom border (`1px solid #A2A9B1`) rather than margin alone. The reading experience is dense but structured: no hero sections, no marketing breathing room. Every pixel of vertical space earns its keep.

---

## Elevation & Depth

### Levels

| Level | Treatment | Example Use |
|-------|-----------|-------------|
| 0 — Flat | No shadow, border or background change | Sidebar navigation, article body |
| 1 — Hairline | `1px solid #A2A9B1` border | Tables, infoboxes, category boxes |
| 2 — Surface lift | `background: #FFFFFF` on `#F8F9FA` canvas | Navigation header, search box |
| 3 — Focus ring | `box-shadow: 0 0 0 2px #3366CC` | Focused inputs, focused buttons |

### Shadow Philosophy

Wikipedia uses **zero box-shadows** on any content surface. There are no cards that float, no dropdowns with elevation, no modal overlays with blur. This is a deliberate choice: shadows add rendering cost, visual noise, and complexity that distracts from content. Separation between UI regions is achieved entirely through background color contrast and hairline borders.

The one exception is the focus ring on interactive elements — a `2px solid #3366CC` outline or equivalent box-shadow ring communicates keyboard focus state without decorative intent.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `xs` | 2px | Search inputs, buttons, most interactive elements |
| `sm` | 4px | Tab indicators, minor UI elements |
| `md` | 6px | Larger button variants (less common) |
| `lg` | 8px | Rare UI surfaces; not standard Wikipedia use |
| `pill` | 9999px | Not used in Wikipedia's standard UI |

Wikipedia is nearly completely **flat-cornered**. The 2px radius on inputs and buttons is the maximum you'll encounter in standard article and navigation UI. Wikipedia never uses pill-shaped buttons or rounded cards — such shapes would feel out of place with the encyclopedic aesthetic.

### Photography & Imagery

- Images in articles float right (or left) within a `<div class="thumb">` with a `1px solid #A2A9B1` border and a light gray caption area below
- Image aspect ratios are preserved; no cropping to fixed ratios
- Thumbnail widths default to 220px; user-adjustable via preferences
- No hero images or full-bleed photography in the interface itself — imagery is editorial, embedded in article text
- File description pages use a simple light-gray background with the image centered

---

## Components

### Search Bar

Wikipedia's search is the central interactive element. The Codex-powered search widget sits in the top navigation bar:

- **Input**: `background: #FFFFFF`, `border: 1px solid #72777D`, `border-radius: 2px 0 0 2px`, `padding: 4px 8px 4px 34px` (left padding reserves space for the magnifying-glass icon)
- **Search button**: Adjacent, `border-radius: 0 2px 2px 0`, `background: #FFFFFF`, `border: 1px solid #72777D`, icon-only at default size
- **Focus state**: `border-color: #3366CC`, `box-shadow: 0 0 0 1px #3366CC`
- **Autocomplete dropdown**: `background: #FFFFFF`, `border: 1px solid #A2A9B1`, borderless list items with hover `background: #F8F9FA`
- **Font**: `sans-serif` 14px / regular

### Buttons

Wikipedia uses the Codex button component system:

**Primary button** — Used for submit actions, create account, save edits:
- `background: #3366CC`, `color: #FFFFFF`, `border: 1px solid #3366CC`
- `border-radius: 2px`, `padding: 6px 12px`, `font-size: 14px`, `font-weight: 700`
- Hover: `background: #2A55B5`

**Secondary / neutral button** — Used for cancel, secondary actions:
- `background: #FFFFFF`, `color: #202122`, `border: 1px solid #A2A9B1`
- Same radius, padding, and font as primary

**Destructive button** — Used for delete, revert:
- `background: #FFFFFF`, `color: #BF3C2C`, `border: 1px solid #BF3C2C`

### Navigation Header (top-nav)

- Full-width, `height: 66px`, `background: #FFFFFF`
- `border-bottom: 1px solid #A2A9B1` separates it from the page canvas
- Left: Wikipedia logo (wordmark + globe), hamburger menu trigger on mobile
- Right: Search bar (expands), language icon, Create account, Log in
- Font: `sans-serif` 14px / 400

### Sidebar Navigation

- Fixed `208px` wide on desktop, absolutely positioned left of content
- Background transparent on `#F8F9FA` canvas
- Sections divided by bold `14px / 700` headings
- Navigation links: `sans-serif` 14px / 400 / `color: #3366CC`
- No bullets, no padding-left — list items are flush with section heading
- On article pages, the Table of Contents occupies this sidebar column

### Article Content

- **H1** (article title): `"Linux Libertine", Georgia, serif` / 28px / 400 / line-height 1.375
- **H2** (section): `sans-serif` / 22px / 700, with `border-bottom: 1px solid #A2A9B1`
- **H3** (sub-section): `sans-serif` / 19px / 700, no border
- **H4**: `sans-serif` / 16px / 700
- **Body paragraph**: `sans-serif` / 16px / 400 / line-height 1.625 / `color: #202122`
- **Hyperlinks**: `color: #3366CC`, no underline by default, underline on hover
- **Visited links**: `color: #6B4BA1`

### Infobox / Wikitable

- Float right, `border: 1px solid #A2A9B1`
- `background: #FFFFFF` for header rows (often with category-specific tint)
- Cell padding: `xs` (8px)
- Font: `sans-serif` 14px / 400
- Caption text: bold, centered, 14px

### Category Box

- Appears at article bottom: `background: #F8F9FA`, `border: 1px solid #A2A9B1`
- Internal padding 5px
- Font: `sans-serif` 14px / 400
- "Categories:" label is bold

---

## Do's and Don'ts

**Do:**
- Use `#3366CC` for all interactive links and primary button fills — it's the single Wikipedia brand color
- Use `"Linux Libertine", Georgia, Times, "Source Serif 4", serif` for article-level H1 only; all other UI uses sans-serif
- Apply `1px solid #A2A9B1` hairline borders to separate content sections, tables, and boxes
- Keep button `border-radius` at 2px; use `6px 12px` padding for standard button targets
- Use the `#F8F9FA` canvas as your base page background — the pure white (#FFFFFF) is reserved for interactive surfaces like the nav bar and inputs
- Maintain line-height of 1.625 on body text to preserve the encyclopedia readability standard
- Mark visited links with `#6B4BA1` — this is critical accessibility context for reference readers

**Don't:**
- Don't use gradients, box-shadows, or decorative backgrounds anywhere on content surfaces
- Don't use Linux Libertine (or any serif) outside of the article H1 — mixing serif into navigation or body copy breaks the interface/article distinction
- Don't round buttons or inputs beyond 2–4px; pill-shaped or rounded-lg components look out-of-place
- Don't use font-weight values other than 400 and 700 — no medium (500), semibold (600), or light (300)
- Don't introduce additional accent colors — the teal/blue/purple section tints are data-carrying (article type), not decorative
- Don't add whitespace padding to sections that would push content "below the fold" — density is a Wikipedia virtue
- Don't use large display typography with tight letter-spacing — Wikipedia headings use 0 tracking, no negative tracking
- Don't place imagery outside of article context without the bordered `thumb` treatment

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 720px | Sidebar hidden → hamburger menu; full-width content column; stacked article tools |
| Tablet | 720–1000px | Sidebar collapses to icon-only rail or overlay drawer |
| Desktop | 1000–1200px | Standard sidebar (208px) + content column layout |
| Wide | > 1200px | Content column centers with auto margins; sidebar remains 208px |

### Touch Targets

- Minimum tap target: 44px × 44px for all interactive elements
- Navigation items in the mobile sidebar: `padding: 12px 16px` minimum
- Search input: full-width on mobile, minimum height 44px
- Buttons: minimum height 40px

### Collapsing Strategy

- **Navigation sidebar**: Completely hidden on mobile; accessible via hamburger icon that opens an overlay drawer at full viewport height with `background: #FFFFFF`
- **Table of Contents**: Collapses to a sticky floating button on mobile; article TOC hidden by default on narrow viewports
- **Infoboxes**: Float right on desktop; stack to full-width at top of article content on mobile
- **Tables / wikitables**: Become horizontally scrollable within their container; `overflow-x: auto`

### Image Behavior

- All `<img>` elements within article content preserve original aspect ratio
- Thumbnails scale down but never enlarge beyond their source dimensions
- Full-bleed images do not exist in Wikipedia's standard UI
- Image captions always remain visible below their associated image

---

## Agent Prompt Guide

### Quick Color Reference
- Primary (link/button): `#3366CC`
- Primary active/hover: `#2A55B5`
- Canvas (page background): `#F8F9FA`
- Surface (nav/inputs): `#FFFFFF`
- Ink (heading text): `#101418`
- Body text: `#202122`
- Muted text: `#54595D`
- Hairline (borders): `#A2A9B1`
- Input border: `#72777D`
- Visited links: `#6B4BA1`
- Error/destructive: `#BF3C2C`
- Success/positive: `#008855`

### Example Component Prompts

**Article Page Layout:**
"Create a Wikipedia-style article page on `#F8F9FA` background. Fixed top header 66px tall with `#FFFFFF` background and `1px solid #A2A9B1` bottom border. Left sidebar 208px wide with section navigation in `sans-serif` 14px / `#3366CC` links. Content column fluid. Article H1 in `Linux Libertine, Georgia, serif` 28px / 400 / `#101418`. Body paragraphs in `sans-serif` 16px / 400 / 1.625 line-height / `#202122`. All internal links `#3366CC`, visited `#6B4BA1`."

**Search Bar:**
"Create a Wikipedia search widget with `#FFFFFF` background, `1px solid #72777D` border, `border-radius: 2px`, `padding: 4px 8px 4px 34px`. Placeholder text in `sans-serif` 14px / `#54595D`. Focus state: `border-color: #3366CC`, `box-shadow: 0 0 0 1px #3366CC`. Adjacent search button: same border, `border-radius: 0 2px 2px 0`, search icon in `#404244`."

**Primary Button:**
"Create a Wikipedia primary button: `background: #3366CC`, `color: #FFFFFF`, `border: 1px solid #3366CC`, `border-radius: 2px`, `padding: 6px 12px`, `font: 700 14px sans-serif`. Hover state: `background: #2A55B5`. Secondary button variant: `background: #FFFFFF`, `color: #202122`, `border: 1px solid #A2A9B1`, same padding and radius."

**Infobox / Info Card:**
"Create a Wikipedia-style infobox that floats right: `background: #FFFFFF`, `border: 1px solid #A2A9B1`, no border-radius, no box-shadow. Header row with category-specific tint (e.g., `#CEE0F2` for blue). Cell padding 8px. Text in `sans-serif` 14px / 400 / `#202122`. Caption bold 14px centered."

**Section Heading:**
"Wikipedia H2 section heading: `sans-serif` 22px / 700 / `#101418`, with `border-bottom: 1px solid #A2A9B1` at full width, `margin-bottom: 8px`. No background color, no padding. Immediately followed by body text at 16px / 400 / 1.625 / `#202122`."

### Iteration Guide
1. Start with `#F8F9FA` as page canvas and `#FFFFFF` for header and interactive surfaces
2. Set `#3366CC` as your single primary/interactive color — do not introduce additional brand colors
3. Use `"Linux Libertine", Georgia, Times, serif` for the article title H1 only; switch to `sans-serif` for everything else
4. Apply `1px solid #A2A9B1` to all element borders — tables, infoboxes, category boxes, the header
5. Avoid all shadows, gradients, and decorative radius — flat is correct for this design system
6. Weight is binary: 400 for content, 700 for headings and labels — no other values
7. Mark visited state: this is a core UX expectation for an encyclopedia
