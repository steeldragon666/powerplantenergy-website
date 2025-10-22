const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const viewports = [
    { name: 'mobile-320', width: 320, height: 568 },
    { name: 'mobile-375', width: 375, height: 667 },
    { name: 'mobile-414', width: 414, height: 896 },
    { name: 'tablet-768', width: 768, height: 1024 },
    { name: 'desktop-1920', width: 1920, height: 1080 },
  ];

  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height }
    });
    const page = await context.newPage();
    
    console.log(`Taking screenshot for ${viewport.name}...`);
    await page.goto('http://localhost:3001');
    await page.waitForLoadState('networkidle');
    
    await page.screenshot({
      path: `test-results/screenshots/homepage-${viewport.name}.png`,
      fullPage: true,
    });
    
    await context.close();
  }

  await browser.close();
  console.log('Screenshots completed!');
})();

