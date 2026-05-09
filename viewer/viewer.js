/**
 * viewer.js — Design.md Viewer core logic
 *
 * Served from repo root: npx serve . -l 4242
 * Then open: http://localhost:4242/viewer/
 */

// ── Intersection Observer for active nav links ─────────────────────────────
const sectionIds = [
  'colors', 'typography', 'buttons', 'badges',
  'forms', 'cards', 'panels', 'datatable', 'navigation', 'spacing',
];

let sectionObserver = null;

function setupSectionObserver() {
  if (sectionObserver) sectionObserver.disconnect();

  sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const link = document.querySelector(`#section-nav a[href="#${entry.target.id}"]`);
        if (link) {
          link.classList.toggle('active', entry.isIntersecting);
        }
      }
    },
    { root: document.getElementById('main'), threshold: 0.25 },
  );

  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (el) sectionObserver.observe(el);
  }
}

// ── init ───────────────────────────────────────────────────────────────────
export async function init() {
  // Populate brand dropdown
  try {
    const res = await fetch('./brands-index.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const brands = await res.json();
    populateBrandSelect(brands);
  } catch (err) {
    console.warn('[viewer] Could not load brands-index.json:', err.message);
  }

  // Wire event listeners
  const brandSelect = /** @type {HTMLSelectElement} */ (document.getElementById('brand-select'));
  const pasteBtn    = document.getElementById('paste-btn');
  const darkToggle  = document.getElementById('dark-toggle');
  const fileInput   = /** @type {HTMLInputElement} */ (document.getElementById('file-input'));

  brandSelect.addEventListener('change', () => {
    if (brandSelect.value) loadBrand(brandSelect.value);
  });

  pasteBtn.addEventListener('click', openPasteModal);

  darkToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    darkToggle.textContent = isDark ? 'Light mode' : 'Dark mode';
  });

  document.getElementById('paste-submit').addEventListener('click', () => {
    const text = /** @type {HTMLTextAreaElement} */ (document.getElementById('paste-input')).value.trim();
    if (text) {
      handlePaste(text);
      closePasteModal();
    }
  });

  document.getElementById('paste-cancel').addEventListener('click', closePasteModal);

  // Close modal on backdrop click
  document.getElementById('paste-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closePasteModal();
  });

  fileInput.addEventListener('change', () => {
    const file = fileInput.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = /** @type {string} */ (e.target.result);
      handlePaste(text);
      closePasteModal();
    };
    reader.readAsText(file);
  });

  // Keyboard: Escape closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePasteModal();
  });

  setupSectionObserver();
}

// ── populateBrandSelect ────────────────────────────────────────────────────
function populateBrandSelect(brands) {
  const select = document.getElementById('brand-select');
  // Clear any existing options except placeholder
  while (select.options.length > 1) select.remove(1);

  for (const brand of brands) {
    const opt = document.createElement('option');
    opt.value = brand.slug;
    opt.textContent = brand.name;
    select.appendChild(opt);
  }
}

// ── loadBrand ──────────────────────────────────────────────────────────────
export async function loadBrand(slug) {
  try {
    const res = await fetch(`../design-md/${slug}/DESIGN.md`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    const tokens = parseFrontmatter(text);
    const resolved = resolveTokens(tokens);
    applyTheme(resolved);
    render(resolved);
  } catch (err) {
    console.error(`[viewer] Failed to load brand "${slug}":`, err);
    const hero = document.getElementById('brand-hero');
    hero.innerHTML = `<div class="hero-empty"><strong>Error loading "${slug}"</strong>${err.message}</div>`;
  }
}

// ── parseFrontmatter ───────────────────────────────────────────────────────
export function parseFrontmatter(text) {
  // Find the YAML block between the first and second --- fences
  const start = text.indexOf('---');
  if (start === -1) throw new Error('No frontmatter found (missing opening ---)');

  const end = text.indexOf('---', start + 3);
  if (end === -1) throw new Error('No frontmatter found (missing closing ---)');

  const yaml = text.slice(start + 3, end).trim();
  const parsed = window.jsyaml.load(yaml);
  if (!parsed || typeof parsed !== 'object') throw new Error('Frontmatter parsed to non-object');
  return parsed;
}

// ── resolveTokens ──────────────────────────────────────────────────────────
export function resolveTokens(tokens) {
  // Deep-clone
  const resolved = JSON.parse(JSON.stringify(tokens));

  if (!resolved.components || typeof resolved.components !== 'object') return resolved;

  // Walk every string value in components and replace {section.key} references
  for (const compName of Object.keys(resolved.components)) {
    const comp = resolved.components[compName];
    if (typeof comp !== 'object' || comp === null) continue;

    for (const prop of Object.keys(comp)) {
      const val = comp[prop];
      if (typeof val !== 'string') continue;

      // Replace all {section.key} occurrences in one pass
      comp[prop] = val.replace(/\{([^}]+)\}/g, (match, ref) => {
        const dot = ref.indexOf('.');
        if (dot === -1) return match; // no section.key form — leave as-is
        const section = ref.slice(0, dot);
        const key = ref.slice(dot + 1);

        const sectionObj = tokens[section];
        if (!sectionObj || typeof sectionObj !== 'object') return match;

        // Typography values are objects — stringify meaningfully
        if (typeof sectionObj[key] === 'object' && sectionObj[key] !== null) {
          const typo = sectionObj[key];
          return typo.fontFamily ?? match;
        }

        return sectionObj[key] !== undefined ? String(sectionObj[key]) : match;
      });
    }
  }

  return resolved;
}

// ── applyTheme ─────────────────────────────────────────────────────────────
export function applyTheme(tokens) {
  let css = ':root {\n';

  // colors → --color-{name}
  if (tokens.colors && typeof tokens.colors === 'object') {
    for (const [name, value] of Object.entries(tokens.colors)) {
      css += `  --color-${name}: ${value};\n`;
    }
  }

  // typography → --font-{role}-{property}
  if (tokens.typography && typeof tokens.typography === 'object') {
    for (const [role, props] of Object.entries(tokens.typography)) {
      if (typeof props !== 'object' || props === null) continue;
      const r = cssName(role);
      if (props.fontFamily)     css += `  --font-${r}-family: ${props.fontFamily};\n`;
      if (props.fontSize)       css += `  --font-${r}-size: ${props.fontSize};\n`;
      if (props.fontWeight)     css += `  --font-${r}-weight: ${props.fontWeight};\n`;
      if (props.lineHeight)     css += `  --font-${r}-line-height: ${props.lineHeight};\n`;
      if (props.letterSpacing)  css += `  --font-${r}-letter-spacing: ${props.letterSpacing};\n`;
    }
  }

  // spacing → --spacing-{scale}
  if (tokens.spacing && typeof tokens.spacing === 'object') {
    for (const [scale, value] of Object.entries(tokens.spacing)) {
      css += `  --spacing-${cssName(scale)}: ${value};\n`;
    }
  }

  // rounded → --rounded-{scale}
  if (tokens.rounded && typeof tokens.rounded === 'object') {
    for (const [scale, value] of Object.entries(tokens.rounded)) {
      css += `  --rounded-${cssName(scale)}: ${value};\n`;
    }
  }

  css += '}\n\n';

  // Dark mode overrides — swap canvas/ink/body to dark-mode equivalents
  const c = tokens.colors ?? {};
  const darkCanvas = c['surface']  ?? c['canvas']  ?? null;
  const darkInk    = c['on-dark']  ?? c['ink']     ?? null;
  const darkBody   = c['on-dark']  ?? c['body']    ?? null;

  if (darkCanvas || darkInk || darkBody) {
    css += 'body.dark {\n';
    if (darkCanvas && c['surface'])  css += `  --color-canvas: ${darkCanvas};\n`;
    if (darkInk    && c['on-dark'])  css += `  --color-ink: ${darkInk};\n`;
    if (darkBody   && c['on-dark'])  css += `  --color-body: ${darkBody};\n`;
    css += '}\n';
  }

  // Inject or update <style id="theme-vars">
  let styleEl = document.getElementById('theme-vars');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'theme-vars';
    document.head.appendChild(styleEl);
  }
  styleEl.textContent = css;
}

/** Convert a token key to a CSS-safe name (pass through hyphens, lower-case) */
function cssName(key) {
  return String(key).toLowerCase().replace(/[^a-z0-9-]/g, '-');
}

// ── render ─────────────────────────────────────────────────────────────────
export function render(tokens) {
  renderHero(tokens);

  // Update section headings and add placeholder content
  const sectionLabels = {
    colors:     'Colors',
    typography: 'Typography',
    buttons:    'Buttons',
    badges:     'Badges',
    forms:      'Forms',
    cards:      'Cards',
    panels:     'Panels',
    datatable:  'Data Table',
    navigation: 'Navigation',
    spacing:    'Spacing',
  };

  for (const [id, label] of Object.entries(sectionLabels)) {
    const section = document.getElementById(id);
    if (!section) continue;

    let inner = section.querySelector('.section-inner');
    if (!inner) {
      inner = document.createElement('div');
      inner.className = 'section-inner';
      section.appendChild(inner);
    }

    inner.innerHTML = `
      <h2>${label}</h2>
      <p class="placeholder">Coming in next task</p>
    `;
  }
}

// ── renderHero ─────────────────────────────────────────────────────────────
export function renderHero(tokens) {
  const hero = document.getElementById('brand-hero');
  const name        = tokens.name        ?? 'Unknown Brand';
  const description = tokens.description ?? '';
  const version     = tokens.version     ?? '';

  hero.innerHTML = `
    ${version ? `<span class="hero-version">${escapeHtml(version)}</span>` : ''}
    <h1>${escapeHtml(name)}</h1>
    ${description ? `<p>${escapeHtml(description)}</p>` : ''}
  `;
}

// ── handlePaste ────────────────────────────────────────────────────────────
export function handlePaste(text) {
  try {
    const tokens   = parseFrontmatter(text);
    const resolved = resolveTokens(tokens);
    applyTheme(resolved);
    render(resolved);

    // Reset brand select to placeholder so the user knows this is a custom paste
    const select = /** @type {HTMLSelectElement} */ (document.getElementById('brand-select'));
    select.value = '';
  } catch (err) {
    console.error('[viewer] handlePaste error:', err);
    const hero = document.getElementById('brand-hero');
    hero.innerHTML = `<div class="hero-empty"><strong>Parse error</strong>${escapeHtml(err.message)}</div>`;
  }
}

// ── Modal helpers ──────────────────────────────────────────────────────────
export function openPasteModal() {
  document.getElementById('paste-modal').classList.remove('hidden');
  document.getElementById('paste-input').focus();
}

export function closePasteModal() {
  document.getElementById('paste-modal').classList.add('hidden');
}

// ── Utility ────────────────────────────────────────────────────────────────
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── Bootstrap ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);
