'use strict';

const { globSync } = require('glob');
const { readFileSync, mkdirSync, writeFileSync } = require('fs');
const { join } = require('path');
const yaml = require('js-yaml');

/**
 * Parses YAML frontmatter from file content.
 * Returns { frontmatter, body } or null if no frontmatter block is found.
 */
function parseFrontmatter(content) {
  const normalised = content.replace(/\r\n/g, '\n');
  const match = normalised.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  return { raw: match[1], body: normalised.slice(match[0].length) };
}

/**
 * Extracts a `name:` value from raw frontmatter text as a fallback
 * when yaml.load() fails on the full block.
 */
function extractNameFromRaw(rawFrontmatter) {
  const m = rawFrontmatter.match(/^name:\s*(.+)$/m);
  return m ? m[1].trim() : null;
}

/**
 * Extracts a `description:` block from raw frontmatter text as a fallback.
 * Handles both inline ("description: text") and block-scalar ("description: |\n  ...") forms.
 */
function extractDescriptionFromRaw(rawFrontmatter) {
  // Block scalar: description: |\n  line1\n  line2\n(next-key or end)
  const blockMatch = rawFrontmatter.match(/^description:\s*[|>][-+]?\n((?:[ \t]+.*\n?)*)/m);
  if (blockMatch) {
    return blockMatch[1]
      .split('\n')
      .map(l => l.replace(/^[ \t]{2}/, ''))
      .join(' ')
      .trim();
  }
  // Inline: description: some text
  const inlineMatch = rawFrontmatter.match(/^description:\s*(.+)$/m);
  return inlineMatch ? inlineMatch[1].trim() : '';
}

/**
 * Derives a display name from a markdown-only file.
 * Looks for a heading like "# Design System Inspired by <Name>" or
 * falls back to title-casing the slug.
 */
function nameFromMarkdown(content, slug) {
  const m = content.match(/^#\s+(?:Design System Inspired by\s+)?(.+)$/m);
  if (m) return m[1].trim();
  return slug
    .replace(/[-_.]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

const files = globSync('design-md/*/DESIGN.md', { cwd: process.cwd() });

const entries = [];

for (const filePath of files) {
  // Derive slug from folder name: design-md/<slug>/DESIGN.md
  const slug = filePath.replace(/\\/g, '/').split('/')[1];
  const path = filePath.replace(/\\/g, '/');

  let content;
  try {
    content = readFileSync(filePath, 'utf8');
  } catch (err) {
    console.warn(`Warning: could not read ${filePath}: ${err.message}`);
    continue;
  }

  const fmResult = parseFrontmatter(content);

  let name;
  let rawDescription = '';

  if (!fmResult) {
    // Markdown-only file: normalise CRLF before any regex work
    const normalised = content.replace(/\r\n/g, '\n');
    name = nameFromMarkdown(normalised, slug);
    // Use first non-heading paragraph as description
    const firstPara = normalised.replace(/^#[^\n]*\n+/, '').match(/^[^#\n][^\n]*/m);
    rawDescription = firstPara ? firstPara[0].trim() : '';
  } else {
    // Try full YAML parse first
    let frontmatter = null;
    try {
      frontmatter = yaml.load(fmResult.raw);
    } catch (err) {
      console.warn(`Warning: YAML parse error in ${filePath}: ${err.message.split('\n')[0]}`);
    }

    if (frontmatter && typeof frontmatter.name === 'string') {
      name = frontmatter.name;
      rawDescription = typeof frontmatter.description === 'string' ? frontmatter.description : '';
    } else {
      // Fallback: extract name and description from raw text
      name = extractNameFromRaw(fmResult.raw) || nameFromMarkdown(content, slug);
      rawDescription = extractDescriptionFromRaw(fmResult.raw);
    }
  }

  // Strip curly-brace token references (e.g. {colors.brand-yellow}) before truncation
  rawDescription = rawDescription.replace(/\{[^}]+\}/g, '').trim();

  // Normalise description: collapse whitespace, truncate to 200 chars
  const description = rawDescription.replace(/\s+/g, ' ').trim().slice(0, 200);

  entries.push({ name, slug, description, path });
}

// Sort alphabetically by name (case-insensitive)
entries.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

// Ensure viewer/ directory exists
const outputDir = join(process.cwd(), 'viewer');
mkdirSync(outputDir, { recursive: true });

const outputPath = join(outputDir, 'brands-index.json');
writeFileSync(outputPath, JSON.stringify(entries, null, 2) + '\n', 'utf8');

console.log(`Generated ${outputPath} with ${entries.length} entries.`);
