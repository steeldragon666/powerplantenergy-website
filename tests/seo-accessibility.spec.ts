import { test, expect } from '@playwright/test';

test.describe('SEO and Accessibility Tests', () => {
  test('should have proper meta tags', async ({ page }) => {
    await page.goto('/');
    
    // Check title
    await expect(page).toHaveTitle(/Power Plant Energy/);
    
    // Check meta description
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toBeTruthy();
    expect(description?.length).toBeGreaterThan(50);
    
    // Check viewport meta tag
    const viewport = await page.locator('meta[name="viewport"]').getAttribute('content');
    expect(viewport).toContain('width=device-width');
    
    // Check theme-color meta tag
    const themeColor = await page.locator('meta[name="theme-color"]').getAttribute('content');
    expect(themeColor).toBeTruthy();
  });

  test('should have Open Graph tags', async ({ page }) => {
    await page.goto('/');
    
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    const ogDescription = await page.locator('meta[property="og:description"]').getAttribute('content');
    const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
    const ogUrl = await page.locator('meta[property="og:url"]').getAttribute('content');
    
    expect(ogTitle).toBeTruthy();
    expect(ogDescription).toBeTruthy();
    expect(ogImage).toBeTruthy();
    expect(ogUrl).toBeTruthy();
  });

  test('should have Twitter Card tags', async ({ page }) => {
    await page.goto('/');
    
    const twitterCard = await page.locator('meta[property="twitter:card"]').getAttribute('content');
    const twitterTitle = await page.locator('meta[property="twitter:title"]').getAttribute('content');
    const twitterDescription = await page.locator('meta[property="twitter:description"]').getAttribute('content');
    
    expect(twitterCard).toBeTruthy();
    expect(twitterTitle).toBeTruthy();
    expect(twitterDescription).toBeTruthy();
  });

  test('should have structured data (JSON-LD)', async ({ page }) => {
    await page.goto('/');
    
    const jsonLdScripts = await page.locator('script[type="application/ld+json"]').count();
    expect(jsonLdScripts).toBeGreaterThan(0);
    
    // Check if JSON-LD is valid
    const jsonLdContent = await page.locator('script[type="application/ld+json"]').first().textContent();
    expect(() => JSON.parse(jsonLdContent || '')).not.toThrow();
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    
    // Check for h1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBeGreaterThanOrEqual(1);
    
    // H1 should be visible
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
  });

  test('should have accessible navigation', async ({ page }) => {
    await page.goto('/');
    
    // Check for navigation landmarks
    const nav = page.locator('nav');
    await expect(nav.first()).toBeVisible();
    
    // Check if links are keyboard accessible
    const firstLink = page.getByRole('link').first();
    await firstLink.focus();
    await expect(firstLink).toBeFocused();
  });

  test('should have alt text for images', async ({ page }) => {
    await page.goto('/');
    
    // Get all images
    const images = page.locator('img');
    const count = await images.count();
    
    // Check each image has alt attribute
    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      expect(alt).not.toBeNull(); // Alt attribute should exist (can be empty for decorative images)
    }
  });

  test('should have proper ARIA labels for interactive elements', async ({ page }) => {
    await page.goto('/');
    
    // Check mobile menu button
    const menuButton = page.getByLabel('Toggle menu');
    await expect(menuButton).toBeVisible();
    
    const ariaExpanded = await menuButton.getAttribute('aria-expanded');
    expect(ariaExpanded).toBeTruthy();
  });

  test('should have canonical URL', async ({ page }) => {
    await page.goto('/');
    
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBeTruthy();
    expect(canonical).toContain('powerplantenergy.com.au');
  });

  test('should load without console errors', async ({ page }) => {
    const errors: string[] = [];
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Filter out known third-party errors if any
    const criticalErrors = errors.filter(error => 
      !error.includes('favicon') && 
      !error.includes('third-party')
    );
    
    expect(criticalErrors.length).toBe(0);
  });
});

