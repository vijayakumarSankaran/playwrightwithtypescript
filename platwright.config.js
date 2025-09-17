import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    video: 'retain-on-failure', // or 'on' to always record
  },
   reporter: [['allure-playwright']],

});
 
