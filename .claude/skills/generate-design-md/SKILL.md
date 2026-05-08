---
name: generate-design-md
description: Generate a DESIGN.md file for any website by navigating it with Playwright and extracting design tokens. Use when the user says "create a design.md for [url]", "copy the style of [site]", "capture the design of [url]", "add [site] to the collection", "replicate the look of [site]", "design system for [url]", or any variation asking to capture/clone/document a website's visual identity. Always invoke this skill before doing anything else — it fully defines the workflow.
---

# generate-design-md Skill

Given a URL, navigate the website with Playwright, extract design tokens and visual patterns, and write a complete DESIGN.md + README.md to `design-md/<brand>/`.

## Target Format

Always produce the **YAML-frontmatter format** (the structured, machine-readable variant). This is the format used by claude, stripe, linear.app, vercel, notion, and all recent entries. Never produce markdown-only format for new entries.

Structure:
```
---
version: alpha
name: ...
description: ...
colors: ...
typography: ...
spacing: ...
rounded: ...
components: ...
---
# [Brand] Design System
## Overview
...
[9 sections + Agent Prompt Guide]
```

---

## Phase 1 — Parse URL and Derive Brand Name

Extract `<brand>` from the URL the user provided:

| Input | Brand folder name |
| ----- | ----------------- |
| `https://stripe.com` | `stripe` |
| `https://www.airbnb.com/` | `airbnb` |
| `https://linear.app` | `linear.app` |
| `https://mistral.ai` | `mistral.ai` |
| `https://x.ai` | `x.ai` |
| `https://together.ai` | `together.ai` |
| `https://www.notion.so` | `notion` |

Rules:
- Strip `https://`, `http://`, `www.`
- **Keep the TLD** if it's a recognizable part of the brand identity (`.app`, `.ai`, `.io`, `.so` when the brand is known by it)
- **Drop the TLD** for standard `.com`, `.net`, `.org` brands
- Lowercase, hyphenate any spaces
- Use the canonical subdomain-free hostname

Check if `design-md/<brand>/` already exists. If it does, confirm with the user before overwriting.

---

## Phase 2 — Invoke playwright-cli and Navigate

Use the `playwright-cli` skill. Navigate these pages in order, stopping after 5 total or when you have enough data:

1. **Homepage** `<url>/` — always, captures primary palette and hero typography
2. **Pricing** `<url>/pricing` — reveals CTA hierarchy, button variants, card styles
3. **About / Company** `<url>/about` or `<url>/company` — secondary palette, brand voice
4. **Blog / Docs** `<url>/blog` or `<url>/docs` — typography at scale, link styles
5. **Any product/feature page** linked from the homepage nav — component density

For each page:
- Navigate and wait for `networkidle` or `domcontentloaded`
- Run the extraction script (Phase 3)
- Optionally take a screenshot for visual reference (not committed to git)

If a page 404s, skip it and try the next candidate.

---

## Phase 3 — JavaScript Extraction

Run this script via `playwright evaluate` on **each page visited**. Collect all results, then merge/deduplicate before synthesis.

```javascript
(() => {
  // Extract CSS custom properties from :root
  const cssVars = {};
  try {
    for (const sheet of document.styleSheets) {
      try {
        for (const rule of sheet.cssRules || []) {
          if (rule.selectorText === ':root' || rule.selectorText === 'html') {
            for (const prop of rule.style) {
              if (prop.startsWith('--')) {
                cssVars[prop] = rule.style.getPropertyValue(prop).trim();
              }
            }
          }
        }
      } catch (e) { /* CORS-blocked stylesheet — skip */ }
    }
  } catch (e) {}

  // Computed styles from semantic elements
  const PROPS = [
    'color', 'background-color', 'font-family', 'font-size',
    'font-weight', 'line-height', 'letter-spacing', 'border-radius',
    'padding', 'border', 'box-shadow', 'text-transform'
  ];
  const extract = (sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const s = getComputedStyle(el);
    const r = { selector: sel, text: el.innerText?.slice(0, 80) };
    for (const p of PROPS) r[p] = s[p];
    return r;
  };

  // All unique colors rendered on page
  const allColors = new Set();
  document.querySelectorAll('*').forEach(el => {
    const s = getComputedStyle(el);
    const bg = s.backgroundColor;
    const fg = s.color;
    if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') allColors.add(bg);
    if (fg) allColors.add(fg);
  });

  return {
    url: location.href,
    cssVars,
    elements: {
      body:         extract('body'),
      h1:           extract('h1'),
      h2:           extract('h2'),
      h3:           extract('h3'),
      h4:           extract('h4'),
      p:            extract('p'),
      lead:         extract('[class*="lead"], [class*="subtitle"], [class*="hero"] p'),
      btnPrimary:   extract('button[class*="primary"], a[class*="primary"], [class*="btn-primary"], [class*="button--primary"]'),
      btnSecondary: extract('[class*="secondary"][class*="button"], [class*="btn-secondary"], [class*="button--secondary"]'),
      navBar:       extract('nav, header, [role="navigation"]'),
      input:        extract('input[type="text"], input[type="email"], input:not([type="hidden"]):not([type="submit"])'),
      card:         extract('[class*="card"], [class*="Card"], article, [class*="feature"]'),
      badge:        extract('[class*="badge"], [class*="tag"], [class*="chip"], [class*="pill"]'),
      footer:       extract('footer'),
    },
    meta: {
      title:       document.title,
      description: document.querySelector('meta[name="description"]')?.content,
      themeColor:  document.querySelector('meta[name="theme-color"]')?.content,
      ogImage:     document.querySelector('meta[property="og:image"]')?.content,
    },
    colorsOnPage: [...allColors].slice(0, 60),
    fonts: [...new Set(
      [...document.querySelectorAll('*')]
        .map(el => getComputedStyle(el).fontFamily)
        .filter(Boolean)
    )].slice(0, 15),
  };
})()
```

After collecting all page results, note:
- CSS vars that contain color values (`#`, `rgb`, `hsl`) are the highest-confidence tokens
- CSS vars named `--color-*`, `--brand-*`, `--accent-*`, `--primary-*` are named tokens — use their names
- Computed styles are the fallback when no CSS vars exist

---

## Phase 4 — Synthesis Rules

### Converting raw data to DESIGN.md tokens

#### Colors → `colors:` block

**RGB to hex:** Convert `rgb(R, G, B)` → `#RRGGBB`. Use uppercase hex. Round values.

**Semantic naming** — assign these names based on role and frequency:

| Role | Token name |
| ---- | ---------- |
| Default page background | `canvas` |
| Primary CTA button background | `primary` |
| Primary CTA hover/active state | `primary-active` |
| Primary text (headings) | `ink` |
| Body/paragraph text | `body` |
| Secondary/subdued text | `muted` |
| Border, separator lines | `hairline` |
| Dark product surfaces | `surface-dark` |
| Elevated card background | `surface` |
| Error/destructive | `semantic-error` |
| Success | `semantic-success` |
| Warning | `semantic-warning` |

Always include at minimum: `primary`, `primary-active`, `ink`, `body`, `muted`, `canvas`, `surface`, `hairline`.

Add brand-specific accent colors as: `accent-[name]` (e.g., `accent-coral`, `accent-teal`).

Add CSS-var-named tokens verbatim when the CSS var name is already semantic (e.g., `--color-brand-purple` → `brand-purple: "#5B21B6"`).

#### Typography → `typography:` block

Map elements to roles:

| Element | Role name |
| ------- | --------- |
| h1 | `display-xl` |
| h2 | `display-md` |
| h3 | `title-lg` |
| h4 | `title-md` |
| Large paragraph / lead | `body-lg` |
| Default paragraph | `body-md` |
| Small paragraph / caption | `body-sm` |
| Button text | `button` |
| Navigation links | `nav-link` |
| Labels / captions | `caption` |

Each role needs: `fontFamily`, `fontSize` (Npx), `fontWeight` (number), `lineHeight` (decimal), `letterSpacing` (Npx or `0`).

Infer font stack: if `fontFamily` contains a specific name before generic (`"Inter", sans-serif`), use that stack. For brand fonts not in standard stacks, add appropriate fallbacks.

#### Spacing → `spacing:` block

Infer from button padding, card padding, and visible gaps. Normalize to a base-4 or base-8 multiple scale:

```yaml
spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px
```

Adjust values to match observed padding (e.g., if button padding is `10px 20px`, set `sm: 10px`, `md: 20px`).

#### Rounded → `rounded:` block

Extract from button `border-radius`, card `border-radius`, badge `border-radius`:

```yaml
rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px
```

If the site uses no rounding (flat design), use `xs: 0` through `md: 2px`.

#### Components → `components:` block

Always define these at minimum (skip if element not found on site):

```yaml
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"        # or on-primary if contrast demands
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "Xpx Ypx"
    border: "none"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "Xpx Ypx"

  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "Xpx Ypx"
    border: "1px solid {colors.primary}"

  card-base:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
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
    textColor: "{colors.ink}"
    border: "0 0 1px 0 {colors.hairline}"
```

Add `badge`, `badge-primary`, `pricing-card`, `pricing-card-featured` if data exists.

Use `{colors.X}`, `{typography.X}`, `{spacing.X}`, `{rounded.X}` token references — **never hardcode hex values in components**.

---

## Phase 5 — Write the 9 Markdown Sections

After the YAML frontmatter, write these sections. Be specific — use actual hex codes, font names, and pixel values observed from the site, not generic descriptions.

### Section 1: Overview
- 2-paragraph brand voice description
- 6–8 bullet points: key visual characteristics (color mood, type personality, spacing density, elevation approach, photography style, etc.)
- Positioning statement: how the design differentiates from competitors

### Section 2: Colors
Organize as subsections:
- **Brand & Accent** — primary, accent colors with hex + use
- **Surface** — background hierarchy (canvas → surface → surface-dark)
- **Text** — ink → body → muted hierarchy
- **Semantic** — success/warning/error with hex + use

### Section 3: Typography
Subsections:
- **Font Family** — name, fallback stack, CSS import or system font note
- **Hierarchy Table** — `| Role | Size | Weight | Line Height | Letter Spacing | Use |`
- **Principles** — weight strategy, tracking philosophy, font substitute note

### Section 4: Layout
Subsections:
- **Spacing System** — base unit (4px or 8px), named scale table
- **Grid & Container** — max container widths, column counts
- **Whitespace Philosophy** — prose description of section spacing approach

### Section 5: Elevation & Depth
- **Levels Table** — `| Level | Treatment | Example use |`
- **Shadow Philosophy** — how the brand uses (or avoids) shadows
- Any decorative depth effects (gradients, glows, borders)

### Section 6: Shapes
- **Border Radius Scale Table** — `| Token | Value | Use |`
- **Photography & Imagery** — aspect ratios, crop treatment, border treatment

### Section 7: Components
Subsections per category (use only those applicable):
- **Buttons** — primary, secondary, ghost, danger; document padding, radius, typography
- **Cards** — default, featured, pricing; document shadow, radius, padding
- **Inputs & Forms** — text input, select, checkbox; focus states
- **Navigation** — navbar, mobile menu, breadcrumbs
- **Badges & Tags** — pill, rectangular, color variants

### Section 8: Do's and Don'ts
**Do (5–8 items):**
- Brand-specific positive patterns observed (e.g., "Use negative tracking on display headings", "Maintain generous whitespace between sections")

**Don't (5–8 items):**
- Anti-patterns that would break the brand feel (e.g., "Don't use border-radius larger than 12px on cards", "Don't use more than 2 font weights on one screen")

### Section 9: Responsive Behavior
- **Breakpoints Table** — `| Breakpoint | Width | Key Changes |`
- **Touch Targets** — minimum sizes for interactive elements
- **Collapsing Strategy** — how nav, cards, and grids adapt
- **Image Behavior** — fill, contain, aspect-ratio preservation

### Agent Prompt Guide (always append)

```markdown
## Agent Prompt Guide

### Quick Color Reference
- Primary: #XXXXXX
- Canvas (background): #XXXXXX
- Ink (text): #XXXXXX
- Surface: #XXXXXX
- Hairline (borders): #XXXXXX
[all top colors]

### Example Component Prompts

**Hero Section:**
"Create a hero on [canvas color (#hex)] background. Headline [Xpx, weight Y, font, tracking, color]. Subheadline [Xpx, weight Y, color]. CTA button [background, radius, padding, text color, font]."

**Card:**
"Create a [description] card on [background (#hex)]. Rounded [Xpx]. [Border or shadow]. Heading [Xpx, weight, color]. Body copy [Xpx, color]. [Button or CTA details]."

**Button Set:**
"Primary button: [background (#hex)], [radius], [padding], [font, weight, size, color], no border. Secondary button: transparent, [border], same radius and padding, [text color]."

### Iteration Guide
1. Start with the correct canvas color as your page background
2. Use the display font stack exactly — load it via Google Fonts or CDN
3. Apply negative letter-spacing to all display/heading sizes
4. Use token references, never hardcode colors
5. Check contrast: ink on canvas, on-primary on primary
```

---

## Phase 6 — Create Output Files

Create the directory and files:

```
design-md/<brand>/
  DESIGN.md     ← full YAML + 9 sections + Agent Prompt Guide
  README.md     ← 3-line pointer file
```

**README.md content:**

```markdown
# <Brand> Design System

Visual identity and design tokens captured from <URL>.

Drop `DESIGN.md` into your project and tell your AI coding agent to read it before generating UI to replicate <Brand>'s visual language.
```

---

## Quality Checklist

Before writing the files, verify:

- [ ] `colors:` has at minimum 8 tokens including `primary`, `ink`, `canvas`, `surface`, `hairline`, `muted`
- [ ] `typography:` has at minimum 5 roles including display, body, and button
- [ ] `spacing:` has at minimum 5 named steps
- [ ] `rounded:` has at minimum 3 named steps
- [ ] `components:` defines `button-primary`, `button-secondary`, `card-base`
- [ ] All component values use `{token.reference}` syntax — no hardcoded hex
- [ ] Description is 2–3 sentences (not a single fragment)
- [ ] All 9 markdown sections are present
- [ ] Agent Prompt Guide is present
- [ ] Both DESIGN.md and README.md will be created

After writing files, run:

```bash
npm run test:format    # should pass all YAML validation tests for the new file
npm run test:consistency  # should pass required-files check
```

If tests fail, fix the reported issue before declaring the task done.
