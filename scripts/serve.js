'use strict';
// Wrapper around `npx serve` that strips ANSI codes and emits a clean
// "Accepting connections" line so VS Code's problemMatcher fires reliably.
const { spawn } = require('child_process');

const proc = spawn('npx', ['serve', '.', '-l', '4242'], {
  env: { ...process.env, NO_COLOR: '1', FORCE_COLOR: '0' },
  stdio: ['ignore', 'pipe', 'pipe'],
});

const strip = s => s.replace(/\x1b\[[0-9;]*m/g, '');

let signaled = false;
function maybeSignal(text) {
  if (!signaled && /4242|Accepting|Serving/i.test(text)) {
    signaled = true;
    process.stdout.write('Accepting connections at http://localhost:4242\n');
  }
}

proc.stdout.on('data', d => {
  const text = strip(d.toString());
  process.stdout.write(text);
  maybeSignal(text);
});

proc.stderr.on('data', d => {
  const text = strip(d.toString());
  process.stderr.write(text);
  maybeSignal(text);
});

proc.on('exit', code => process.exit(code ?? 0));
