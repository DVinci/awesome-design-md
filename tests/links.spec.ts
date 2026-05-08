import { test, expect, type Page } from '@playwright/test';
import { readFileSync } from 'fs';
import { join } from 'path';

// Extract all markdown links from a string
function extractUrls(markdown: string): string[] {
  const urls: string[] = [];
  const linkRe = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
  const bareRe = /(?<![(\[])https?:\/\/[^\s)>\]"]+/g;
  for (const m of markdown.matchAll(linkRe)) urls.push(m[2]);
  for (const m of markdown.matchAll(bareRe)) urls.push(m[0]);
  return [...new Set(urls)];
}

async function checkUrl(page: Page, url: string): Promise<{ url: string; ok: boolean; status: number }> {
  try {
    const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10_000 });
    return { url, ok: (response?.status() ?? 0) < 400, status: response?.status() ?? 0 };
  } catch {
    return { url, ok: false, status: 0 };
  }
}

const readmeMd = readFileSync(join(process.cwd(), 'README.md'), 'utf8');
const contributingMd = readFileSync(join(process.cwd(), 'CONTRIBUTING.md'), 'utf8');

const readmeUrls = extractUrls(readmeMd);
const contributingUrls = extractUrls(contributingMd);

// Skip CI-specific or known-flaky domains
const SKIP_DOMAINS = ['github.com/DVinci', 'localhost', '127.0.0.1'];

function shouldSkip(url: string): boolean {
  return SKIP_DOMAINS.some(d => url.includes(d));
}

test.describe('README.md links', () => {
  for (const url of readmeUrls.filter(u => !shouldSkip(u))) {
    test(`reachable: ${url}`, async ({ page }) => {
      const result = await checkUrl(page, url);
      expect(result.status, `${url} returned ${result.status}`).toBeLessThan(400);
    });
  }
});

test.describe('CONTRIBUTING.md links', () => {
  for (const url of contributingUrls.filter(u => !shouldSkip(u))) {
    test(`reachable: ${url}`, async ({ page }) => {
      const result = await checkUrl(page, url);
      expect(result.status, `${url} returned ${result.status}`).toBeLessThan(400);
    });
  }
});
