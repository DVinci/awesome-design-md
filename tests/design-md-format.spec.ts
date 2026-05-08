import { test, expect } from '@playwright/test';
import { readFileSync } from 'fs';
import { globSync } from 'glob';
import yaml from 'js-yaml';

const HEX_RE = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
const PX_RE = /^\d+(\.\d+)?px$/;
const TOKEN_REF_RE = /\{([^}]+)\}/g;

interface DesignMdFile {
  hasFrontmatter: boolean;
  frontmatter?: Record<string, unknown>;
  body: string;
}

function parseDesignMd(filePath: string): DesignMdFile {
  const content = readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n');
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { hasFrontmatter: false, body: content };
  const frontmatter = yaml.load(match[1]) as Record<string, unknown>;
  const body = content.slice(match[0].length);
  return { hasFrontmatter: true, frontmatter, body };
}

function flattenTokenKeys(obj: unknown, prefix = ''): string[] {
  if (typeof obj !== 'object' || obj === null) return [];
  return Object.entries(obj as Record<string, unknown>).flatMap(([k, v]) => {
    const key = prefix ? `${prefix}.${k}` : k;
    return typeof v === 'object' && v !== null && !Array.isArray(v)
      ? flattenTokenKeys(v, key)
      : [key];
  });
}

const designMdFiles = globSync('design-md/*/DESIGN.md', { cwd: process.cwd() });

// Separate files by format type
const yamlFiles = designMdFiles.filter(f => {
  const content = readFileSync(f, 'utf8').replace(/\r\n/g, '\n');
  return content.startsWith('---\n');
});

const markdownOnlyFiles = designMdFiles.filter(f => {
  const content = readFileSync(f, 'utf8').replace(/\r\n/g, '\n');
  return !content.startsWith('---\n');
});

test(`DESIGN.md format coverage: ${yamlFiles.length} YAML-frontmatter, ${markdownOnlyFiles.length} markdown-only`, () => {
  // Informational test — always passes, shows format distribution
  expect(designMdFiles.length).toBeGreaterThan(0);
});

// Validate only files with YAML frontmatter
for (const filePath of yamlFiles) {
  const brand = filePath.split(/[/\\]/)[1];

  test(`[${brand}] frontmatter parses without error`, () => {
    expect(() => parseDesignMd(filePath)).not.toThrow();
  });

  test(`[${brand}] required fields present`, () => {
    const { frontmatter } = parseDesignMd(filePath);
    expect(frontmatter).toHaveProperty('version');
    expect(frontmatter).toHaveProperty('name');
    expect(frontmatter).toHaveProperty('description');
    expect(frontmatter).toHaveProperty('colors');
    expect(frontmatter).toHaveProperty('typography');
  });

  test(`[${brand}] description is non-empty`, () => {
    const { frontmatter } = parseDesignMd(filePath);
    expect(typeof frontmatter!.description).toBe('string');
    expect((frontmatter!.description as string).length).toBeGreaterThan(20);
  });

  test(`[${brand}] color values are valid hex`, () => {
    const { frontmatter } = parseDesignMd(filePath);
    const colors = frontmatter!.colors as Record<string, unknown>;
    if (!colors) return;
    for (const [name, value] of Object.entries(colors)) {
      expect(typeof value, `color "${name}" should be a string`).toBe('string');
      expect(value as string, `color "${name}" has invalid hex value`).toMatch(HEX_RE);
    }
  });

  test(`[${brand}] typography entries have required properties`, () => {
    const { frontmatter } = parseDesignMd(filePath);
    const typography = frontmatter!.typography as Record<string, Record<string, unknown>>;
    if (!typography) return;
    for (const [role, spec] of Object.entries(typography)) {
      expect(spec, `typography "${role}" should be an object`).toBeTruthy();
      expect(spec, `typography "${role}" missing fontFamily`).toHaveProperty('fontFamily');
      expect(spec, `typography "${role}" missing fontWeight`).toHaveProperty('fontWeight');
    }
  });

  test(`[${brand}] spacing values follow Npx pattern`, () => {
    const { frontmatter } = parseDesignMd(filePath);
    const spacing = frontmatter!.spacing as Record<string, unknown> | undefined;
    if (!spacing) return;
    for (const [scale, value] of Object.entries(spacing)) {
      if (typeof value === 'string') {
        expect(value, `spacing "${scale}" should match Npx pattern`).toMatch(PX_RE);
      }
    }
  });

  test(`[${brand}] rounded values follow Npx pattern`, () => {
    const { frontmatter } = parseDesignMd(filePath);
    const rounded = frontmatter!.rounded as Record<string, unknown> | undefined;
    if (!rounded) return;
    for (const [scale, value] of Object.entries(rounded)) {
      if (typeof value === 'string' && value !== 'none' && value !== 'full') {
        expect(value, `rounded "${scale}" should match Npx pattern`).toMatch(PX_RE);
      }
    }
  });

  test(`[${brand}] component token references resolve`, () => {
    const { frontmatter } = parseDesignMd(filePath);
    const components = frontmatter!.components as Record<string, unknown> | undefined;
    if (!components) return;
    const allKeys = flattenTokenKeys(frontmatter);
    const componentStr = JSON.stringify(components);
    const refs = [...componentStr.matchAll(TOKEN_REF_RE)].map(m => m[1]);
    for (const ref of refs) {
      expect(allKeys, `token reference "{${ref}}" does not resolve`).toContain(ref);
    }
  });
}
