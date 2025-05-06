// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=({// or we can create a constant config variable and export it to use across the project
  testDir: './tests',
  timeout:40000,//explicit
  
  reporter:'html',
  use: {
   browserName:'chromium'
  },

  
});

module.exports=config