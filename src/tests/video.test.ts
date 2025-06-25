// tests/video-recording.spec.ts
import { test, expect } from '@playwright/test';

test('Video capture example', async ({ browser }) => {
  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/',         // Directory to save videos
      size: { width: 1280, height: 720 }, // Optional
    }
  });

  const page = await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('[name="username"]').fill("Admin")
    await page.locator('[name="password"]').fill("admin123")
    await page.locator('//button[@type="submit"]').click()
    await page.waitForTimeout(2000)
});
