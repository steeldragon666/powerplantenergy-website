import { test, expect } from '@playwright/test';

test.describe('Mobile Responsiveness Tests', () => {
  test('should display mobile menu on small screens', async ({ page }) => {
    await page.goto('/');
    
    // Check if mobile menu button is visible
    const menuButton = page.getByLabel('Toggle menu');
    await expect(menuButton).toBeVisible();
    
    // Click to open menu
    await menuButton.click();
    
    // Check if navigation items are visible
    await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
  });

  test('should have properly sized touch targets', async ({ page }) => {
    await page.goto('/');
    
    // Check mobile menu button size (minimum 44x44px)
    const menuButton = page.getByLabel('Toggle menu');
    const box = await menuButton.boundingBox();
    
    expect(box?.width).toBeGreaterThanOrEqual(44);
    expect(box?.height).toBeGreaterThanOrEqual(44);
  });

  test('should display hero section with responsive text', async ({ page }) => {
    await page.goto('/');
    
    // Check if hero section is visible
    const heroHeading = page.getByRole('heading', { name: /Power Plant Energy/i });
    await expect(heroHeading).toBeVisible();
    
    // Check if text is not overflowing
    const box = await heroHeading.boundingBox();
    expect(box?.width).toBeLessThanOrEqual(page.viewportSize()?.width || 0);
  });

  test('should not have horizontal scroll', async ({ page }) => {
    await page.goto('/');
    
    // Check for horizontal scroll
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1); // +1 for rounding
  });

  test('should navigate through all pages on mobile', async ({ page }) => {
    await page.goto('/');
    
    const pages = [
      'Sustainable Fuels',
      'Critical Minerals',
      'Defence Energy',
      'Technology',
      'Projects',
      'Insights',
      'Contact'
    ];
    
    for (const pageName of pages) {
      // Open mobile menu
      await page.getByLabel('Toggle menu').click();
      
      // Click on the page link
      await page.getByRole('link', { name: pageName }).click();
      
      // Wait for navigation
      await page.waitForLoadState('networkidle');
      
      // Check if page loaded successfully
      expect(page.url()).toContain(pageName.toLowerCase().replace(' ', '-'));
    }
  });

  test('should display footer correctly on mobile', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Check if footer is visible
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    
    // Check if footer links have proper touch targets
    const footerLinks = footer.locator('a');
    const count = await footerLinks.count();
    
    for (let i = 0; i < count; i++) {
      const link = footerLinks.nth(i);
      const box = await link.boundingBox();
      if (box) {
        expect(box.height).toBeGreaterThanOrEqual(44);
      }
    }
  });
});

