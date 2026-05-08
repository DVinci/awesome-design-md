import { defineConfig } from '@playwright/test';

const isCI = !!process.env.CI;
const runLinkCheck = !!process.env.LINK_CHECK;

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  reporter: isCI ? 'github' : 'list',

  projects: [
    {
      name: 'format-validation',
      testMatch: ['design-md-format.spec.ts', 'consistency.spec.ts'],
      use: {},
    },
    {
      name: 'link-check',
      testMatch: 'links.spec.ts',
      use: { browserName: 'chromium' },
      grep: runLinkCheck ? undefined : /^$/,
    },
  ],
});
