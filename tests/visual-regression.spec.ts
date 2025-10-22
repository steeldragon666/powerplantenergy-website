import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  const viewports = [
    { name: 'mobile-small', width: 320, height: 568 },
    { name: 'mobile-medium', width: 375, height: 667 },
    { name: 'mobile-large', width: 414, height: 896 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1920, height: 1080 },
  ];

  for (const viewport of viewports) {
    test(`should render homepage correctly on ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      
      // Take screenshot
      await page.screenshot({
        path: `test-results/screenshots/homepage-${viewport.name}.png`,
        fullPage: true,
      });
      
      // Basic visibility checks
      await expect(page.locator('header')).toBeVisible();
      await expect(page.locator('footer')).toBeVisible();
    });
  }

  test('should capture mobile menu states', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Closed state
    await page.screenshot({
      path: 'test-results/screenshots/mobile-menu-closed.png',
    });
    
    // Open state
    await page.getByLabel('Toggle menu').click();
    await page.screenshot({
      path: 'test-results/screenshots/mobile-menu-open.png',
    });
  });

  test('should test responsive breakpoints', async ({ page }) => {
    const breakpoints = [320, 375, 640, 768, 1024, 1280, 1536, 1920];
    
    for (const width of breakpoints) {
      await page.setViewportSize({ width, height: 1080 });
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      
      // Check for horizontal overflow
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      
      expect(hasHorizontalScroll).toBe(false);
      
      // Take screenshot
      await page.screenshot({
        path: `test-results/screenshots/breakpoint-${width}px.png`,
      });
    }
  });
});

