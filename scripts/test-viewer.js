'use strict';
// Run: node scripts/test-viewer.js
// Tests every brand in the viewer at http://localhost:4242/viewer/

const { chromium } = require('@playwright/test');
const brands = require('../viewer/brands-index.json');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const errors = [];

  // Collect console errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push({ type: 'console', brand: currentBrand, message: msg.text() });
    }
  });
  page.on('pageerror', err => {
    errors.push({ type: 'pageerror', brand: currentBrand, message: err.message });
  });

  let currentBrand = '(init)';

  await page.goto('http://localhost:4242/viewer/');
  await page.waitForLoadState('networkidle');

  const results = [];

  for (const brand of brands) {
    currentBrand = brand.slug;
    const consoleErrorsBefore = errors.length;

    // Select the brand
    await page.selectOption('#brand-select', brand.slug);

    // Wait for hero to be populated
    try {
      await page.waitForFunction(
        () => {
          const hero = document.getElementById('brand-hero');
          return hero && hero.innerHTML.trim().length > 0;
        },
        { timeout: 5000 }
      );
    } catch {
      results.push({ slug: brand.slug, status: 'TIMEOUT', detail: 'Hero never rendered' });
      continue;
    }

    // Check for error state
    const heroText = await page.$eval('#brand-hero', el => el.innerText.trim());
    const isError = heroText.toLowerCase().includes('error') || heroText.startsWith('Error');

    // Check each section has content (not placeholder)
    const sections = ['colors', 'typography', 'buttons', 'badges', 'forms', 'cards', 'panels', 'datatable', 'navigation', 'spacing'];
    const emptyOrPlaceholder = [];
    for (const id of sections) {
      const text = await page.$eval(`#${id}`, el => el.innerText.trim()).catch(() => '');
      if (!text || text.toLowerCase().includes('coming in next task') || text.toLowerCase().includes('no ')) {
        // Only flag sections that are completely empty or have the old placeholder
        const html = await page.$eval(`#${id}`, el => el.innerHTML).catch(() => '');
        if (html.includes('Coming in next task')) {
          emptyOrPlaceholder.push(id);
        }
      }
    }

    const newConsoleErrors = errors.slice(consoleErrorsBefore).filter(e => e.brand === brand.slug);

    if (isError) {
      results.push({ slug: brand.slug, status: 'ERROR', detail: heroText.slice(0, 200) });
    } else if (emptyOrPlaceholder.length > 0) {
      results.push({ slug: brand.slug, status: 'PLACEHOLDER', detail: `Sections with placeholder: ${emptyOrPlaceholder.join(', ')}` });
    } else if (newConsoleErrors.length > 0) {
      results.push({ slug: brand.slug, status: 'CONSOLE_ERROR', detail: newConsoleErrors.map(e => e.message).join(' | ').slice(0, 200) });
    } else {
      results.push({ slug: brand.slug, status: 'OK', detail: '' });
    }
  }

  await browser.close();

  // Report
  const ok = results.filter(r => r.status === 'OK');
  const failed = results.filter(r => r.status !== 'OK');

  console.log(`\n=== Viewer Test Results ===`);
  console.log(`OK: ${ok.length}/${brands.length}`);
  console.log(`Issues: ${failed.length}\n`);

  for (const r of failed) {
    console.log(`[${r.status}] ${r.slug}`);
    if (r.detail) console.log(`        ${r.detail}`);
  }

  if (failed.length === 0) console.log('All brands rendered without errors!');
})();
