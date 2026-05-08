# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repository Is

A curated collection of DESIGN.md files extracted from real, popular websites — inspired by [Google Stitch's DESIGN.md concept](https://stitch.withgoogle.com/docs/design-md/overview/). These files encode a brand's visual language in a machine-readable format so AI agents can generate pixel-perfect, branded UI.

This is a **content repository** — markdown and YAML only, with a Node.js test layer for validation.

## Repository Structure

```
design-md/<brand-name>/
  DESIGN.md          # Machine-readable design system (required)
  README.md          # Link to getdesign.md preview (required)
  preview.html       # Light mode visual catalog (optional)
  preview-dark.html  # Dark mode visual catalog (optional)
```

## DESIGN.md File Format

Each file follows this structure:

```yaml
---
version: alpha
name: <Brand>
description: <Visual identity summary>

colors:
  <semantic-name>: "<hex-value>"

typography:
  <role>:
    fontFamily: "<font-stack>"
    fontSize: <px>px
    fontWeight: <number>
    lineHeight: <decimal>
    letterSpacing: <px>px

spacing:
  <scale>: <px>px

rounded:
  <scale>: <px>px

components:
  <component-name>:
    <property>: "<token-reference>"
---

# Markdown documentation sections
```

Followed by markdown sections: Visual Theme, Colors, Typography, Components, Layout, Depth/Elevation, Do's/Don'ts, Responsive Behavior, and Agent Prompt Guide.

### Token Reference Syntax

Properties within `components:` reference tokens using curly-brace syntax:
- `{colors.primary}`, `{typography.button}`, `{spacing.md}`

### Key Conventions

- **Color layers**: Brand/Accent → Surface (canvas, cards, dark modes) → Text (ink, body, muted) → Semantic (success, warning, error)
- **Typography hierarchy**: Display (serif/large) → Titles → Body → Captions/Code
- **Spacing**: Always base-unit multiples (4px or 8px) with named scales: `xxs xs sm md lg xl xxl`
- **Component variants**: Suffixed with `-active`, `-disabled`, `-focused`
- **Responsive breakpoints**: mobile < 768px, tablet 768–1024px, desktop 1024px+

## Contribution Rules

From [CONTRIBUTING.md](CONTRIBUTING.md):

- **Open an issue before submitting a PR** — new entries require prior approval
- **No new DESIGN.md submissions** — the collection is curated; only improvements to existing files are accepted
- Focus on: fixing inaccurate colors, missing tokens, or weak descriptions by comparing against the live site
- Update `preview.html` / `preview-dark.html` if changes affect displayed tokens
- Include before/after rationale in the PR

## How to Improve an Existing DESIGN.md

1. Visit the live site and inspect actual CSS/design tokens
2. Compare against the existing `design-md/<brand>/DESIGN.md`
3. Fix specific values (hex codes, font sizes, spacing units)
4. Update preview files if visual tokens changed
5. Reference the live site as evidence in the PR description

## Development Commands

```bash
npm test                  # Run all tests (format + consistency)
npm run test:format       # Validate DESIGN.md frontmatter + token structure
npm run test:consistency  # Cross-file checks (required files, naming, README links)
npm run test:links        # External URL reachability (requires LINK_CHECK=true in CI)
npm run test:ui           # Playwright visual debug mode
```

## Branch Workflow

| Branch | Purpose |
| -------- | --------- |
| `main` | Protected. Merged from `develop` via PR only. |
| `develop` | Default PR target. All feature work lands here first. |
| `feature/<name>` | Branch from `develop` for new work. |
| `hotfix/<name>` | Branch from `main` for urgent fixes; merge to both `main` and `develop`. |

## GitHub Actions

| Workflow | Trigger | What it does |
| ---------- | --------- | -------------- |
| `validate-design-md.yml` | PR touching `design-md/**` | Runs format + consistency tests |
| `link-check.yml` | Weekly (Mon 9am UTC) | Checks all external URLs for HTTP 200 |
| `pr-labeler.yml` | Every PR | Auto-applies labels by changed path |
| `sync-upstream.yml` | Daily (7am UTC) | Merges `VoltAgent/awesome-design-md:main` → local `main` |

## Skills

**generate-design-md** — When asked to create a design.md, copy the style of a site, capture a site's design, replicate a site's visual identity, or add a site to the collection, read `.claude/skills/generate-design-md/SKILL.md` and follow it exactly before doing anything else.

## Syncing from Upstream Manually

```bash
git remote add upstream https://github.com/VoltAgent/awesome-design-md.git  # first time only
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```
