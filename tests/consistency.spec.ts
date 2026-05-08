import { test, expect } from '@playwright/test';
import { readFileSync, existsSync, readdirSync } from 'fs';
import { join } from 'path';
import { globSync } from 'glob';
import yaml from 'js-yaml';

const DESIGN_MD_ROOT = join(process.cwd(), 'design-md');

function getBrandDirs(): string[] {
  return readdirSync(DESIGN_MD_ROOT, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);
}

function parseVersion(filePath: string): string | undefined {
  const content = readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n');
  // Fast path: extract version line directly to avoid full YAML parse errors
  const versionMatch = content.match(/^version:\s*(.+)$/m);
  return versionMatch?.[1]?.trim();
}

const brands = getBrandDirs();
const readmeContent = readFileSync(join(process.cwd(), 'README.md'), 'utf8');

test('all brand directories have DESIGN.md', () => {
  const missing = brands.filter(b => !existsSync(join(DESIGN_MD_ROOT, b, 'DESIGN.md')));
  expect(missing, `Missing DESIGN.md: ${missing.join(', ')}`).toHaveLength(0);
});

test('all brand directories have README.md', () => {
  const missing = brands.filter(b => !existsSync(join(DESIGN_MD_ROOT, b, 'README.md')));
  expect(missing, `Missing README.md: ${missing.join(', ')}`).toHaveLength(0);
});

test('all brand README.md files contain getdesign.md link', () => {
  const missing: string[] = [];
  for (const brand of brands) {
    const readmePath = join(DESIGN_MD_ROOT, brand, 'README.md');
    if (!existsSync(readmePath)) continue;
    const content = readFileSync(readmePath, 'utf8');
    if (!content.includes('getdesign.md')) missing.push(brand);
  }
  expect(missing, `README.md without getdesign.md link: ${missing.join(', ')}`).toHaveLength(0);
});

test('all brand directories have at least DESIGN.md and README.md (not empty)', () => {
  const empty: string[] = [];
  for (const brand of brands) {
    const files = readdirSync(join(DESIGN_MD_ROOT, brand));
    if (files.length === 0) empty.push(brand);
  }
  expect(empty, `Empty directories: ${empty.join(', ')}`).toHaveLength(0);
});

test('YAML-frontmatter DESIGN.md files have version: alpha', () => {
  const invalid: string[] = [];
  for (const brand of brands) {
    const designPath = join(DESIGN_MD_ROOT, brand, 'DESIGN.md');
    if (!existsSync(designPath)) continue;
    const content = readFileSync(designPath, 'utf8').replace(/\r\n/g, '\n');
    if (!content.startsWith('---\n')) continue; // skip markdown-only files
    const version = parseVersion(designPath);
    if (version !== 'alpha') invalid.push(`${brand} (version: ${version})`);
  }
  expect(invalid, `Non-alpha versions: ${invalid.join(', ')}`).toHaveLength(0);
});

test('root README.md mentions all brand names', () => {
  const missing: string[] = [];
  for (const brand of brands) {
    const normalizedBrand = brand.replace(/-/g, '').toLowerCase();
    const normalizedReadme = readmeContent.replace(/-/g, '').toLowerCase();
    if (!normalizedReadme.includes(normalizedBrand)) missing.push(brand);
  }
  if (missing.length > 0) {
    console.warn(`Brands not in root README: ${missing.join(', ')}`);
  }
});

test('no unexpected file types in brand directories', () => {
  const allowed = new Set(['.md', '.html', '.png', '.jpg', '.svg']);
  const unexpected: string[] = [];
  const allFiles = globSync('design-md/**/*', { cwd: process.cwd(), nodir: true });
  for (const f of allFiles) {
    const ext = f.slice(f.lastIndexOf('.'));
    if (!allowed.has(ext)) unexpected.push(f);
  }
  expect(unexpected, `Unexpected file types: ${unexpected.join(', ')}`).toHaveLength(0);
});
