import { test, expect } from '@playwright/test';

test.describe('Mobile Viewport and Safari Mobile Fixes', () => {
  const mobileViewports = [
    { name: 'iPhone 12', width: 390, height: 844 },
    { name: 'iPhone SE', width: 375, height: 667 },
    { name: 'iPad', width: 768, height: 1024 },
  ];

  mobileViewports.forEach(({ name, width, height }) => {
    test(`${name} - Viewport height units work correctly`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      // Check hero section uses full viewport height properly
      const heroSection = page.locator('section').first();
      await expect(heroSection).toBeVisible();
      
      const heroBox = await heroSection.boundingBox();
      expect(heroBox).toBeTruthy();
      
      // Hero should take up most of the viewport height
      // Allow some tolerance for different browser implementations
      const minExpectedHeight = height * 0.85; // 85% of viewport
      expect(heroBox!.height).toBeGreaterThan(minExpectedHeight);
    });

    test(`${name} - Navigation mobile menu works`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      if (width <= 768) {
        // Mobile view - check for hamburger menu
        const menuButton = page.locator('button').filter({ hasText: /menu|≡|☰/ }).or(
          page.locator('[aria-label*="menu"]')
        ).or(
          page.locator('button').last() // Fallback to last button which might be menu
        );

        if (await menuButton.count() > 0) {
          await menuButton.first().click();
          
          // Mobile menu should open and be full height
          const mobileMenu = page.locator('ul').last();
          await expect(mobileMenu).toBeVisible();
          
          const menuBox = await mobileMenu.boundingBox();
          expect(menuBox).toBeTruthy();
          
          // Menu should use the full viewport height (with our CSS custom property fix)
          expect(menuBox!.height).toBeGreaterThan(height * 0.9);
        }
      }
    });

    test(`${name} - Content spacing is appropriate`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      // Check that content has reasonable padding/spacing
      const mainContent = page.locator('main');
      await expect(mainContent).toBeVisible();
      
      const contentBox = await mainContent.boundingBox();
      expect(contentBox).toBeTruthy();
      
      // Content should not be full width (should have some padding)
      expect(contentBox!.width).toBeLessThan(width * 0.95);
      expect(contentBox!.width).toBeGreaterThan(width * 0.7);
    });

    test(`${name} - Typography scales appropriately`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      const mainHeading = page.locator('h1');
      await expect(mainHeading).toBeVisible();
      
      const headingStyles = await mainHeading.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return {
          fontSize: parseFloat(computed.fontSize),
          lineHeight: computed.lineHeight,
        };
      });
      
      // Font size should scale with viewport
      if (width <= 480) {
        // Mobile: smaller text
        expect(headingStyles.fontSize).toBeLessThan(50);
        expect(headingStyles.fontSize).toBeGreaterThan(20);
      } else if (width <= 768) {
        // Tablet: medium text
        expect(headingStyles.fontSize).toBeLessThan(70);
        expect(headingStyles.fontSize).toBeGreaterThan(30);
      } else {
        // Desktop: larger text but not excessive
        expect(headingStyles.fontSize).toBeLessThan(100);
        expect(headingStyles.fontSize).toBeGreaterThan(40);
      }
    });
  });

  test('Safari Mobile specific - Aspect ratio fallback works', async ({ page, browserName }) => {
    // Only run on webkit (Safari)
    if (browserName !== 'webkit') {
      test.skip();
    }

    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Find image containers that should use aspect-ratio
    const imageContainers = page.locator('div').filter({ 
      has: page.locator('img') 
    });

    if (await imageContainers.count() > 0) {
      const firstContainer = imageContainers.first();
      const containerBox = await firstContainer.boundingBox();
      
      if (containerBox) {
        // Check if container has reasonable aspect ratio (should be roughly square)
        const aspectRatio = containerBox.width / containerBox.height;
        expect(aspectRatio).toBeGreaterThan(0.8);
        expect(aspectRatio).toBeLessThan(1.2);
      }
    }
  });

  test('Safari Mobile - CSS Grid compatibility', async ({ page, browserName }) => {
    // Only run on webkit (Safari)
    if (browserName !== 'webkit') {
      test.skip();
    }

    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check that grid layouts work correctly
    const gridContainers = await page.evaluate(() => {
      const elements = Array.from(document.querySelectorAll('*'));
      return elements.filter(el => {
        const styles = window.getComputedStyle(el);
        return styles.display === 'grid';
      }).length;
    });

    // Should have at least one grid container (the hero section)
    expect(gridContainers).toBeGreaterThan(0);

    // Check that hero section content is properly arranged
    const heroContent = page.locator('h1');
    await expect(heroContent).toBeVisible();
    
    const contentBox = await heroContent.boundingBox();
    expect(contentBox).toBeTruthy();
    expect(contentBox!.width).toBeGreaterThan(0);
    expect(contentBox!.height).toBeGreaterThan(0);
  });

  test('Cross-device visual consistency', async ({ page }) => {
    const testViewports = [
      { width: 375, height: 667 },  // iPhone SE
      { width: 768, height: 1024 }, // iPad
    ];

    for (const viewport of testViewports) {
      await page.setViewportSize(viewport);
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      // Take screenshot for manual comparison
      await page.screenshot({ 
        path: `test-results/mobile-${viewport.width}x${viewport.height}.png`,
        fullPage: false 
      });

      // Basic layout checks
      await expect(page.locator('nav')).toBeVisible();
      await expect(page.locator('main')).toBeVisible();
      
      // Check no horizontal overflow
      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      expect(bodyWidth).toBeLessThanOrEqual(viewport.width + 5); // Small tolerance
    }
  });
});