/**
 * viewer.js — Design.md Viewer core logic
 *
 * Served from repo root: npx serve . -l 4242
 * Then open: http://localhost:4242/viewer/
 */

// ── Stale-fetch guard ──────────────────────────────────────────────────────
let loadSeq = 0;

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
  const seq = ++loadSeq;
  try {
    const res = await fetch(`../design-md/${slug}/DESIGN.md`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    if (seq !== loadSeq) return; // stale — a newer load started
    const tokens = parseFrontmatter(text);
    const resolved = resolveTokens(tokens);
    applyTheme(resolved);
    render(resolved);
  } catch (err) {
    if (seq !== loadSeq) return; // stale
    console.error(`[viewer] Failed to load brand "${slug}":`, err);
    const hero = document.getElementById('brand-hero');
    hero.innerHTML = `<div class="hero-empty"><strong>Error loading "${escapeHtml(slug)}"</strong>${escapeHtml(err.message)}</div>`;
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
      css += `  --color-${cssName(name)}: ${cssValue(value)};\n`;
    }
  }

  // typography → --font-{role}-{property}
  if (tokens.typography && typeof tokens.typography === 'object') {
    for (const [role, props] of Object.entries(tokens.typography)) {
      if (typeof props !== 'object' || props === null) continue;
      const r = cssName(role);
      if (props.fontFamily)     css += `  --font-${r}-family: ${cssValue(props.fontFamily)};\n`;
      if (props.fontSize)       css += `  --font-${r}-size: ${cssValue(props.fontSize)};\n`;
      if (props.fontWeight)     css += `  --font-${r}-weight: ${cssValue(props.fontWeight)};\n`;
      if (props.lineHeight)     css += `  --font-${r}-line-height: ${cssValue(props.lineHeight)};\n`;
      if (props.letterSpacing)  css += `  --font-${r}-letter-spacing: ${cssValue(props.letterSpacing)};\n`;
    }
  }

  // spacing → --spacing-{scale}
  if (tokens.spacing && typeof tokens.spacing === 'object') {
    for (const [scale, value] of Object.entries(tokens.spacing)) {
      css += `  --spacing-${cssName(scale)}: ${cssValue(value)};\n`;
    }
  }

  // rounded → --rounded-{scale}
  if (tokens.rounded && typeof tokens.rounded === 'object') {
    for (const [scale, value] of Object.entries(tokens.rounded)) {
      css += `  --rounded-${cssName(scale)}: ${cssValue(value)};\n`;
    }
  }

  css += '}\n\n';

  // Dark mode overrides — swap canvas/ink/body/surface to dark-mode equivalents
  const c = tokens.colors ?? {};
  const darkCanvas    = c['canvas']      ?? null;
  const darkSurface   = c['surface']     ?? c['surface-mid'] ?? c['surface-1'] ?? null;
  const darkInk       = c['ink']         ?? c['on-dark']     ?? null;
  const darkBody      = c['on-dark']     ?? c['body']        ?? null;

  // Always emit body.dark block when we have dark-surface tokens so the
  // component demos actually use dark backgrounds in dark mode.
  if (darkCanvas || darkSurface || darkInk || darkBody) {
    css += 'body.dark {\n';
    if (darkCanvas)  css += `  --color-canvas: ${cssValue(darkCanvas)};\n`;
    if (darkSurface) css += `  --color-surface: ${cssValue(darkSurface)};\n`;
    if (darkInk)     css += `  --color-ink: ${cssValue(darkInk)};\n`;
    if (darkBody)    css += `  --color-body: ${cssValue(darkBody)};\n`;
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

/** Strip characters that could break out of a CSS property value */
function cssValue(v) {
  return String(v).replace(/[{};<>]/g, '');
}

// ── render ─────────────────────────────────────────────────────────────────
export function render(tokens) {
  renderHero(tokens);

  const sections = {
    colors:     { label: 'Colors',     fn: renderColors },
    typography: { label: 'Typography', fn: renderTypography },
    buttons:    { label: 'Buttons',    fn: renderButtons },
    badges:     { label: 'Badges',     fn: renderBadges },
    forms:      { label: 'Forms',      fn: renderForms },
    cards:      { label: 'Cards',      fn: renderCards },
    panels:     { label: 'Panels',     fn: renderPanels },
    datatable:  { label: 'Data Table', fn: renderDataTable },
    navigation: { label: 'Navigation', fn: renderNavigation },
    spacing:    { label: 'Spacing',    fn: renderSpacing },
  };

  for (const [id, { label, fn }] of Object.entries(sections)) {
    const section = document.getElementById(id);
    if (!section) continue;

    let inner = section.querySelector('.section-inner');
    if (!inner) {
      inner = document.createElement('div');
      inner.className = 'section-inner';
      section.appendChild(inner);
    }

    inner.innerHTML = `<h2>${label}</h2>` + fn(tokens);
  }
}

// ── resolveOrEmpty ─────────────────────────────────────────────────────────
/** Return value if it looks resolved, or '' if it still contains {…} refs */
function resolveOrEmpty(val) {
  if (val == null) return '';
  const s = String(val);
  return s.includes('{') ? '' : s;
}

// ── renderColors ───────────────────────────────────────────────────────────
function renderColors(tokens) {
  const colors = tokens.colors;
  if (!colors || typeof colors !== 'object' || !Object.keys(colors).length) {
    return '<p class="placeholder">No colors defined.</p>';
  }

  const swatches = Object.entries(colors).map(([name, value]) => {
    const safeVal  = resolveOrEmpty(value) || '#cccccc';
    const safeName = escapeHtml(name);
    const safeHex  = escapeHtml(safeVal);
    return `
      <div class="swatch-item" onclick="navigator.clipboard.writeText('${safeHex}').then(()=>{const t=this.querySelector('.swatch-tooltip');t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1200)})" title="Click to copy ${safeHex}">
        <div class="swatch-box" style="background:${safeHex}"></div>
        <span class="swatch-name">${safeName}</span>
        <span class="swatch-hex">${safeHex}</span>
        <span class="swatch-tooltip">Copied!</span>
      </div>`;
  }).join('');

  return `
    <style>
      .swatch-grid { display:flex; flex-wrap:wrap; gap:12px; }
      .swatch-item { position:relative; display:flex; flex-direction:column; align-items:center; gap:6px; cursor:pointer; width:96px; }
      .swatch-box  { width:80px; height:56px; border-radius:var(--rounded-md,8px); border:1px solid rgba(128,128,128,0.15); transition:transform 0.1s; }
      .swatch-item:hover .swatch-box { transform:scale(1.06); }
      .swatch-name { font-size:11px; font-weight:600; color:var(--ui-text); text-align:center; word-break:break-all; }
      .swatch-hex  { font-size:10px; color:var(--ui-text-muted); font-family:monospace; }
      .swatch-tooltip { position:absolute; top:-28px; left:50%; transform:translateX(-50%); background:#333; color:#fff; font-size:10px; padding:2px 8px; border-radius:4px; opacity:0; pointer-events:none; transition:opacity 0.2s; white-space:nowrap; }
      .swatch-tooltip.show { opacity:1; }
    </style>
    <div class="swatch-grid">${swatches}</div>`;
}

// ── renderTypography ───────────────────────────────────────────────────────
function renderTypography(tokens) {
  const typo = tokens.typography;
  if (!typo || typeof typo !== 'object' || !Object.keys(typo).length) {
    return '<p class="placeholder">No typography defined.</p>';
  }

  const rows = Object.entries(typo).map(([role, props]) => {
    if (!props || typeof props !== 'object') return '';
    const family  = resolveOrEmpty(props.fontFamily)    || 'inherit';
    const size     = resolveOrEmpty(props.fontSize)      || '16px';
    const weight   = resolveOrEmpty(props.fontWeight)    || '400';
    const lh       = resolveOrEmpty(props.lineHeight)    || '1.5';
    const ls       = resolveOrEmpty(props.letterSpacing) || '0';

    const meta = [size, weight, lh !== '1.5' ? `lh ${lh}` : '', ls !== '0' ? ls : ''].filter(Boolean).join(' · ');
    const inlineStyle = `font-family:${cssValue(family)};font-size:${cssValue(size)};font-weight:${cssValue(weight)};line-height:${cssValue(lh)};letter-spacing:${cssValue(ls)};`;

    return `
      <tr class="typo-row">
        <td class="typo-role">${escapeHtml(role)}</td>
        <td class="typo-sample" style="${inlineStyle}">The quick brown fox jumps over the lazy dog</td>
        <td class="typo-meta">${escapeHtml(meta)}</td>
      </tr>`;
  }).join('');

  return `
    <style>
      .typo-table { width:100%; border-collapse:collapse; }
      .typo-row + .typo-row td { border-top:1px solid var(--ui-border); }
      .typo-role { width:130px; vertical-align:top; padding:14px 8px 14px 0; font-size:11px; font-weight:600; color:var(--ui-text-muted); font-family:monospace; white-space:nowrap; }
      .typo-sample { padding:14px 16px; color:var(--ui-heading,var(--ui-text)); overflow:hidden; text-overflow:ellipsis; max-width:420px; }
      .typo-meta { width:160px; vertical-align:top; padding:14px 0 14px 8px; font-size:11px; color:var(--ui-text-muted); font-family:monospace; white-space:nowrap; text-align:right; }
    </style>
    <table class="typo-table"><tbody>${rows}</tbody></table>`;
}

// ── renderButtons ──────────────────────────────────────────────────────────
function renderButtons(tokens) {
  const comps = tokens.components ?? {};
  const entries = Object.entries(comps).filter(([k]) => k.startsWith('button-'));

  if (!entries.length) {
    return '<p class="placeholder">No button-* components defined.</p>';
  }

  const buttons = entries.map(([key, comp]) => {
    if (!comp || typeof comp !== 'object') return '';
    const bg     = resolveOrEmpty(comp.backgroundColor) || resolveOrEmpty(comp.background) || 'var(--color-primary,#6366f1)';
    const fg     = resolveOrEmpty(comp.textColor)       || resolveOrEmpty(comp.color)      || '#ffffff';
    const radius = resolveOrEmpty(comp.rounded)         || resolveOrEmpty(comp.borderRadius)|| '6px';
    const pad    = resolveOrEmpty(comp.padding)                                             || '8px 16px';
    const border = resolveOrEmpty(comp.border)          || 'none';
    const fontSize = resolveOrEmpty(comp.fontSize)      || '14px';

    const style = `background:${cssValue(bg)};color:${cssValue(fg)};border-radius:${cssValue(radius)};padding:${cssValue(pad)};border:${cssValue(border)};font-size:${cssValue(fontSize)};font-family:inherit;cursor:pointer;`;
    return `
      <div class="btn-demo-item">
        <button style="${style}">${escapeHtml(key)}</button>
        <span class="btn-demo-label">${escapeHtml(key)}</span>
      </div>`;
  }).join('');

  return `
    <style>
      .btn-demo-row { display:flex; flex-wrap:wrap; gap:20px; align-items:flex-end; }
      .btn-demo-item { display:flex; flex-direction:column; align-items:center; gap:8px; }
      .btn-demo-label { font-size:10px; color:var(--ui-text-muted); font-family:monospace; }
    </style>
    <div class="btn-demo-row">${buttons}</div>`;
}

// ── renderBadges ───────────────────────────────────────────────────────────
function renderBadges(tokens) {
  const comps   = tokens.components ?? {};
  const prefixes = ['badge-', 'chip-', 'label-', 'pill-', 'tag-'];
  const entries  = Object.entries(comps).filter(([k]) => prefixes.some(p => k.startsWith(p)));

  if (!entries.length) {
    return '<p class="placeholder">No badge-*, chip-*, label-*, pill-*, or tag-* components defined.</p>';
  }

  const badges = entries.map(([key, comp]) => {
    if (!comp || typeof comp !== 'object') return '';
    const bg     = resolveOrEmpty(comp.backgroundColor) || resolveOrEmpty(comp.background) || 'var(--ui-border)';
    const fg     = resolveOrEmpty(comp.textColor)       || resolveOrEmpty(comp.color)      || 'var(--ui-text)';
    const radius = resolveOrEmpty(comp.rounded)         || resolveOrEmpty(comp.borderRadius)|| '4px';
    const pad    = resolveOrEmpty(comp.padding)                                             || '2px 8px';
    const border = resolveOrEmpty(comp.border)          || 'none';
    const fontSize = resolveOrEmpty(comp.fontSize)      || '12px';

    const style = `background:${cssValue(bg)};color:${cssValue(fg)};border-radius:${cssValue(radius)};padding:${cssValue(pad)};border:${cssValue(border)};font-size:${cssValue(fontSize)};display:inline-block;font-family:inherit;`;
    return `
      <div class="badge-demo-item">
        <span style="${style}">${escapeHtml(key)}</span>
        <span class="badge-demo-label">${escapeHtml(key)}</span>
      </div>`;
  }).join('');

  return `
    <style>
      .badge-demo-row { display:flex; flex-wrap:wrap; gap:20px; align-items:flex-end; }
      .badge-demo-item { display:flex; flex-direction:column; align-items:center; gap:8px; }
      .badge-demo-label { font-size:10px; color:var(--ui-text-muted); font-family:monospace; }
    </style>
    <div class="badge-demo-row">${badges}</div>`;
}

// ── renderForms ────────────────────────────────────────────────────────────
function renderForms(tokens) {
  const comps = tokens.components ?? {};
  const colors = tokens.colors    ?? {};

  const inputDef      = comps['text-input']          ?? {};
  const inputFocused  = comps['text-input-focused']  ?? {};
  const btnPrimary    = comps['button-primary']       ?? {};
  const errorColor    = resolveOrEmpty(colors['error']) || resolveOrEmpty(colors['warning-red']) || '#ff453a';

  const defBg  = resolveOrEmpty(inputDef.backgroundColor)    || 'var(--ui-bg)';
  const defFg  = resolveOrEmpty(inputDef.textColor)          || 'var(--ui-text)';
  const defRad = resolveOrEmpty(inputDef.rounded)            || '6px';
  const defPad = resolveOrEmpty(inputDef.padding)            || '8px 12px';

  const focusBg     = resolveOrEmpty(inputFocused.backgroundColor) || defBg;
  const focusBorder = resolveOrEmpty(colors['primary'])             || 'var(--color-primary,#6366f1)';

  const btnBg  = resolveOrEmpty(btnPrimary.backgroundColor) || 'var(--color-primary,#6366f1)';
  const btnFg  = resolveOrEmpty(btnPrimary.textColor)       || '#ffffff';
  const btnRad = resolveOrEmpty(btnPrimary.rounded)         || '6px';
  const btnPad = resolveOrEmpty(btnPrimary.padding)         || '8px 16px';

  const baseInputStyle    = `background:${cssValue(defBg)};color:${cssValue(defFg)};border-radius:${cssValue(defRad)};padding:${cssValue(defPad)};border:1px solid var(--ui-border);font-family:inherit;font-size:14px;width:100%;box-sizing:border-box;`;
  const focusedInputStyle = `background:${cssValue(focusBg)};color:${cssValue(defFg)};border-radius:${cssValue(defRad)};padding:${cssValue(defPad)};border:2px solid ${cssValue(focusBorder)};font-family:inherit;font-size:14px;width:100%;box-sizing:border-box;outline:none;`;
  const errorInputStyle   = `background:${cssValue(defBg)};color:${cssValue(defFg)};border-radius:${cssValue(defRad)};padding:${cssValue(defPad)};border:2px solid ${cssValue(errorColor)};font-family:inherit;font-size:14px;width:100%;box-sizing:border-box;`;
  const btnStyle          = `background:${cssValue(btnBg)};color:${cssValue(btnFg)};border-radius:${cssValue(btnRad)};padding:${cssValue(btnPad)};border:none;font-family:inherit;font-size:14px;font-weight:600;cursor:pointer;`;

  return `
    <style>
      .form-demo { max-width:480px; display:flex; flex-direction:column; gap:18px; }
      .form-field { display:flex; flex-direction:column; gap:5px; }
      .form-label { font-size:12px; font-weight:600; color:var(--ui-text-muted); }
      .form-error-msg { font-size:11px; color:${cssValue(errorColor)}; }
      .form-row { display:flex; align-items:center; gap:8px; font-size:14px; color:var(--ui-text); }
      .form-row input[type=checkbox], .form-row input[type=radio] { width:16px; height:16px; accent-color:${cssValue(focusBorder)}; }
    </style>
    <div class="form-demo">
      <div class="form-field">
        <label class="form-label">Text input (default)</label>
        <input type="text" style="${baseInputStyle}" placeholder="Enter value…" />
      </div>
      <div class="form-field">
        <label class="form-label">Text input (focused)</label>
        <input type="text" style="${focusedInputStyle}" value="Focused state" />
      </div>
      <div class="form-field">
        <label class="form-label">Text input (error)</label>
        <input type="text" style="${errorInputStyle}" value="Invalid entry" />
        <span class="form-error-msg">This field is required.</span>
      </div>
      <div class="form-field">
        <label class="form-label">Textarea</label>
        <textarea style="${baseInputStyle} resize:vertical;height:80px;" placeholder="Write something…"></textarea>
      </div>
      <div class="form-field">
        <label class="form-label">Select dropdown</label>
        <select style="${baseInputStyle}">
          <option>Option A</option>
          <option>Option B</option>
          <option>Option C</option>
        </select>
      </div>
      <div class="form-field">
        <label class="form-label">Checkboxes</label>
        <div class="form-row"><input type="checkbox" checked /> Checked option</div>
        <div class="form-row"><input type="checkbox" /> Unchecked option</div>
      </div>
      <div class="form-field">
        <label class="form-label">Radio buttons</label>
        <div class="form-row"><input type="radio" name="r1" checked /> Option one</div>
        <div class="form-row"><input type="radio" name="r1" /> Option two</div>
      </div>
      <div>
        <button style="${btnStyle}">Submit</button>
      </div>
    </div>`;
}

// ── renderCards ────────────────────────────────────────────────────────────
function renderCards(tokens) {
  const comps  = tokens.components ?? {};
  const colors = tokens.colors     ?? {};
  const rounded = tokens.rounded   ?? {};

  // Find best card component token
  const cardComp = comps['product-card'] ?? comps['feature-card']
    ?? Object.entries(comps).find(([k]) => k.startsWith('card-') || k.endsWith('-card'))?.[1]
    ?? null;

  const primary  = resolveOrEmpty(colors['primary'])   || 'var(--color-primary,#6366f1)';
  const cardBg   = cardComp ? (resolveOrEmpty(cardComp.backgroundColor) || 'var(--ui-card)') : 'var(--ui-card)';
  const cardFg   = cardComp ? (resolveOrEmpty(cardComp.textColor)       || 'var(--ui-text)') : 'var(--ui-text)';
  const cardRad  = cardComp ? (resolveOrEmpty(cardComp.rounded) || resolveOrEmpty(rounded['lg']) || '12px') : (resolveOrEmpty(rounded['lg']) || '12px');
  const cardPad  = cardComp ? (resolveOrEmpty(cardComp.padding) || '20px') : '20px';

  const btnBg  = resolveOrEmpty((comps['button-primary'] ?? {}).backgroundColor) || primary;
  const btnFg  = resolveOrEmpty((comps['button-primary'] ?? {}).textColor)       || '#ffffff';
  const btnRad = resolveOrEmpty((comps['button-primary'] ?? {}).rounded)         || '6px';

  const cardStyle   = `background:${cssValue(cardBg)};color:${cssValue(cardFg)};border-radius:${cssValue(cardRad)};border:1px solid var(--ui-border);overflow:hidden;`;
  const btnStyle    = `background:${cssValue(btnBg)};color:${cssValue(btnFg)};border-radius:${cssValue(btnRad)};padding:6px 14px;border:none;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;`;
  const imgGradient = `linear-gradient(135deg, ${cssValue(primary)}44 0%, ${cssValue(primary)} 100%)`;

  const mockCards = [
    { tag: 'Featured', title: 'Design System Viewer', desc: 'Explore brand tokens, typography, color palettes, and components in one place.' },
    { tag: 'New', title: 'Token Resolution', desc: 'Dynamic {colors.primary} references resolve to live values from the frontmatter.' },
    { tag: 'Component', title: 'Dark Mode Support', desc: 'Surface and ink tokens adapt automatically when dark mode is toggled on.' },
  ];

  const cardEls = mockCards.map(({ tag, title, desc }) => `
    <div style="${cardStyle}">
      <div style="height:140px;background:${imgGradient};display:flex;align-items:center;justify-content:center;font-size:32px;color:rgba(255,255,255,0.5);">◈</div>
      <div style="padding:${cssValue(cardPad)}">
        <div style="font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${cssValue(primary)};margin-bottom:8px;">${escapeHtml(tag)}</div>
        <div style="font-size:16px;font-weight:600;margin-bottom:8px;color:var(--ui-heading,${cssValue(cardFg)});">${escapeHtml(title)}</div>
        <div style="font-size:13px;color:var(--ui-text-muted);line-height:1.5;margin-bottom:16px;">${escapeHtml(desc)}</div>
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <span style="font-size:15px;font-weight:700;color:${cssValue(primary)};">Free</span>
          <button style="${btnStyle}">View</button>
        </div>
      </div>
    </div>`).join('');

  return `
    <style>
      .cards-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
      @media(max-width:800px){ .cards-grid{ grid-template-columns:1fr 1fr; } }
      @media(max-width:520px){ .cards-grid{ grid-template-columns:1fr; } }
    </style>
    <div class="cards-grid">${cardEls}</div>`;
}

// ── renderPanels ───────────────────────────────────────────────────────────
function renderPanels(tokens) {
  const c = tokens.colors ?? {};

  const panels = [
    {
      type: 'info',
      icon: 'ℹ',
      title: 'Informational',
      body: 'This message provides context or guidance. No action required.',
      color: resolveOrEmpty(c['primary']) || resolveOrEmpty(c['accent-blue']) || '#3b82f6',
      bgAlpha: 0.08,
    },
    {
      type: 'success',
      icon: '✓',
      title: 'Success',
      body: 'Your changes have been saved. Everything looks great.',
      color: resolveOrEmpty(c['success']) || resolveOrEmpty(c['semantic-success']) || '#34c759',
      bgAlpha: 0.08,
    },
    {
      type: 'warning',
      icon: '⚠',
      title: 'Warning',
      body: 'Review this before proceeding. Some fields require attention.',
      color: resolveOrEmpty(c['warning']) || resolveOrEmpty(c['semantic-warning']) || '#ff9f0a',
      bgAlpha: 0.08,
    },
    {
      type: 'error',
      icon: '✕',
      title: 'Error',
      body: 'Something went wrong. Please check your input and try again.',
      color: resolveOrEmpty(c['error']) || resolveOrEmpty(c['warning-red']) || resolveOrEmpty(c['danger']) || '#ff453a',
      bgAlpha: 0.1,
    },
  ];

  const panelEls = panels.map(({ icon, title, body, color }) => {
    // Build a semi-transparent background using hex color where possible
    const bg = color.startsWith('#') && color.length === 7
      ? color + Math.round(0.1 * 255).toString(16).padStart(2, '0')
      : `rgba(128,128,128,0.08)`;
    const borderColor = color.startsWith('#') ? color + '55' : 'rgba(128,128,128,0.2)';

    return `
      <div style="display:flex;gap:14px;padding:16px 18px;border-radius:var(--rounded-md,8px);border:1px solid ${escapeHtml(borderColor)};background:${escapeHtml(bg)};margin-bottom:12px;">
        <span style="font-size:20px;color:${escapeHtml(color)};flex-shrink:0;line-height:1.4;">${icon}</span>
        <div>
          <div style="font-size:14px;font-weight:700;color:${escapeHtml(color)};margin-bottom:4px;">${escapeHtml(title)}</div>
          <div style="font-size:13px;color:var(--ui-text);line-height:1.5;">${escapeHtml(body)}</div>
        </div>
      </div>`;
  }).join('');

  return `<div class="panels-stack">${panelEls}</div>`;
}

// ── renderDataTable ────────────────────────────────────────────────────────
function renderDataTable(tokens) {
  const comps   = tokens.components ?? {};
  const colors  = tokens.colors    ?? {};

  const primary  = resolveOrEmpty(colors['primary']) || 'var(--color-primary,#6366f1)';
  const inputDef = comps['text-input'] ?? {};
  const defBg    = resolveOrEmpty(inputDef.backgroundColor) || 'var(--ui-bg)';
  const defFg    = resolveOrEmpty(inputDef.textColor)       || 'var(--ui-text)';
  const defRad   = resolveOrEmpty(inputDef.rounded)         || '6px';
  const defPad   = resolveOrEmpty(inputDef.padding)         || '8px 12px';

  const searchStyle = `background:${cssValue(defBg)};color:${cssValue(defFg)};border-radius:${cssValue(defRad)};padding:${cssValue(defPad)};border:1px solid var(--ui-border);font-family:inherit;font-size:13px;width:260px;`;

  const statusColors = {
    Active:   resolveOrEmpty(colors['success']) || resolveOrEmpty(colors['semantic-success']) || '#34c759',
    Draft:    resolveOrEmpty(colors['warning']) || '#ff9f0a',
    Archived: 'var(--ui-text-muted)',
  };

  const brandName = escapeHtml(tokens.name ?? 'Brand');
  const primaryHex = resolveOrEmpty(colors['primary']) || '#6366f1';

  const rows = [
    { name: brandName,   type: 'Marketing', color: primaryHex,  components: '12', status: 'Active' },
    { name: 'Acme Corp', type: 'SaaS',      color: '#10b981',    components: '8',  status: 'Active' },
    { name: 'Axiom',     type: 'Analytics', color: '#f59e0b',    components: '5',  status: 'Draft' },
    { name: 'Prism',     type: 'Fintech',   color: '#8b5cf6',    components: '3',  status: 'Draft' },
    { name: 'Legacy UI', type: 'Enterprise',color: '#6b7280',    components: '21', status: 'Archived' },
  ];

  const tableRows = rows.map((row, i) => {
    const sc = statusColors[row.status] || 'var(--ui-text-muted)';
    const scBg = sc.startsWith('#') ? sc + '22' : 'rgba(128,128,128,0.1)';
    return `
      <tr class="dt-row" style="${i % 2 === 1 ? 'background:rgba(128,128,128,0.04);' : ''}">
        <td>${escapeHtml(row.name)}</td>
        <td>${escapeHtml(row.type)}</td>
        <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="width:14px;height:14px;border-radius:50%;background:${escapeHtml(row.color)};display:inline-block;"></span>${escapeHtml(row.color)}</span></td>
        <td>${escapeHtml(row.components)}</td>
        <td><span style="display:inline-block;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:600;background:${escapeHtml(scBg)};color:${escapeHtml(sc)};">${escapeHtml(row.status)}</span></td>
        <td><a href="#" style="color:${cssValue(primary)};text-decoration:none;font-size:12px;" onclick="return false;">Edit</a> · <a href="#" style="color:var(--ui-text-muted);text-decoration:none;font-size:12px;" onclick="return false;">View</a></td>
      </tr>`;
  }).join('');

  return `
    <style>
      .dt-wrap { overflow-x:auto; }
      .dt-search-row { margin-bottom:14px; }
      .dt-table { width:100%; border-collapse:collapse; font-size:13px; }
      .dt-table th { text-align:left; padding:8px 12px; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:var(--ui-text-muted); border-bottom:2px solid var(--ui-border); }
      .dt-row td { padding:10px 12px; border-bottom:1px solid var(--ui-border); color:var(--ui-text); vertical-align:middle; }
      .dt-row:hover td { background:rgba(128,128,128,0.05); }
    </style>
    <div class="dt-wrap">
      <div class="dt-search-row">
        <input type="text" style="${searchStyle}" placeholder="Search design systems…" />
      </div>
      <table class="dt-table">
        <thead><tr><th>Name</th><th>Type</th><th>Color</th><th>Components</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>${tableRows}</tbody>
      </table>
    </div>`;
}

// ── renderNavigation ───────────────────────────────────────────────────────
function renderNavigation(tokens) {
  const comps  = tokens.components ?? {};
  const colors = tokens.colors    ?? {};

  // Find best nav component
  const navComp = comps['primary-nav'] ?? comps['top-nav'] ?? comps['global-nav']
    ?? comps['nav'] ?? comps['header'] ?? null;

  const btnComp  = comps['button-primary'] ?? {};
  const primary  = resolveOrEmpty(colors['primary']) || 'var(--color-primary,#6366f1)';

  const navBg    = navComp ? (resolveOrEmpty(navComp.backgroundColor) || 'var(--ui-sidebar)') : 'var(--ui-sidebar)';
  const navFg    = navComp ? (resolveOrEmpty(navComp.textColor)       || 'var(--ui-text)')    : 'var(--ui-text)';
  const navH     = navComp ? (resolveOrEmpty(navComp.height)          || '56px')              : '56px';
  const navPad   = navComp ? (resolveOrEmpty(navComp.padding)         || '0 24px')            : '0 24px';

  const btnBg   = resolveOrEmpty(btnComp.backgroundColor) || primary;
  const btnFg   = resolveOrEmpty(btnComp.textColor)       || '#ffffff';
  const btnRad  = resolveOrEmpty(btnComp.rounded)         || '6px';

  const navStyle = `background:${cssValue(navBg)};color:${cssValue(navFg)};height:${cssValue(navH)};padding:${cssValue(navPad)};display:flex;align-items:center;justify-content:space-between;border-radius:var(--rounded-md,8px);border:1px solid var(--ui-border);`;
  const linkStyle = `font-size:14px;color:${cssValue(navFg)};text-decoration:none;padding:6px 10px;border-radius:4px;opacity:0.85;`;
  const ctaStyle = `background:${cssValue(btnBg)};color:${cssValue(btnFg)};border-radius:${cssValue(btnRad)};padding:7px 16px;border:none;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;`;

  const brandName = escapeHtml(tokens.name ?? 'Brand');
  const navLinks  = ['Product', 'Docs', 'Pricing', 'Blog', 'Company'].map(l =>
    `<a href="#" style="${linkStyle}" onclick="return false;">${escapeHtml(l)}</a>`
  ).join('');

  return `
    <div class="nav-demo-frame">
      <div style="${navStyle}">
        <div style="display:flex;align-items:center;gap:24px;">
          <span style="font-weight:700;font-size:15px;letter-spacing:-0.02em;color:${cssValue(navFg)};">${brandName}</span>
          <nav style="display:flex;gap:2px;">${navLinks}</nav>
        </div>
        <button style="${ctaStyle}">Get started</button>
      </div>
    </div>`;
}

// ── renderSpacing ──────────────────────────────────────────────────────────
function renderSpacing(tokens) {
  const spacing = tokens.spacing;
  if (!spacing || typeof spacing !== 'object' || !Object.keys(spacing).length) {
    return '<p class="placeholder">No spacing defined.</p>';
  }

  const primary = resolveOrEmpty((tokens.colors ?? {})['primary']) || 'var(--color-primary,#6366f1)';

  // Find max raw px value for width scaling
  const values = Object.values(spacing).map(v => {
    const n = parseFloat(String(v));
    return isNaN(n) ? 0 : n;
  });
  const maxPx = Math.max(...values, 1);

  const rows = Object.entries(spacing).map(([scale, value]) => {
    const raw  = resolveOrEmpty(value) || '0';
    const n    = parseFloat(raw);
    const pct  = isNaN(n) ? 0 : Math.min((n / maxPx) * 100, 100);

    return `
      <div class="spacing-row">
        <span class="spacing-label">${escapeHtml(scale)}</span>
        <div class="spacing-bar-track">
          <div class="spacing-bar-fill" style="width:${pct.toFixed(1)}%;background:${cssValue(primary)};"></div>
        </div>
        <span class="spacing-value">${escapeHtml(raw)}</span>
      </div>`;
  }).join('');

  return `
    <style>
      .spacing-list { display:flex; flex-direction:column; gap:10px; max-width:600px; }
      .spacing-row { display:flex; align-items:center; gap:12px; }
      .spacing-label { width:50px; font-size:12px; font-weight:600; font-family:monospace; color:var(--ui-text-muted); text-align:right; }
      .spacing-bar-track { flex:1; height:10px; background:var(--ui-border); border-radius:5px; overflow:hidden; }
      .spacing-bar-fill { height:100%; border-radius:5px; transition:width 0.3s; }
      .spacing-value { width:50px; font-size:12px; font-family:monospace; color:var(--ui-text); }
    </style>
    <div class="spacing-list">${rows}</div>`;
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
