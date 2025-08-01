import { test, expect } from '@playwright/test';

test.describe('Safari Layout Fixes', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for fonts to load
    await page.waitForLoadState('networkidle');
  });

  test('Hero section has correct grid layout in all browsers', async ({ page }) => {
    // Check that hero section is visible and has correct layout
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();
    
    // Check that both grid columns are present and visible
    const imageColumn = page.locator('div').filter({ hasText: /^\s*$/ }).first();
    const contentColumn = page.locator('h1').locator('..');
    
    await expect(imageColumn).toBeVisible();
    await expect(contentColumn).toBeVisible();
    
    // Check that content is not cut off
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    
    // Verify the heading text is fully visible
    const headingBox = await heading.boundingBox();
    expect(headingBox).toBeTruthy();
    expect(headingBox!.width).toBeGreaterThan(0);
    expect(headingBox!.height).toBeGreaterThan(0);
  });

  test('Navigation backdrop filter works across browsers', async ({ page }) => {
    const navigation = page.locator('nav');
    await expect(navigation).toBeVisible();
    
    // Check that navigation has some form of background/backdrop
    const navStyles = await navigation.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        background: computed.background,
        backdropFilter: computed.backdropFilter,
        backgroundColor: computed.backgroundColor,
      };
    });
    
    // Either backdrop-filter is applied OR fallback background is solid enough
    const hasBackdrop = navStyles.backdropFilter && navStyles.backdropFilter !== 'none';
    const hasSolidBackground = navStyles.backgroundColor && 
      !navStyles.backgroundColor.includes('rgba(249, 255, 251, 0.08)');
    
    expect(hasBackdrop || hasSolidBackground).toBeTruthy();
  });

  test('Viewport height units work correctly', async ({ page }) => {
    // Check hero section height
    const heroSection = page.locator('section').first();
    const heroBox = await heroSection.boundingBox();
    
    expect(heroBox).toBeTruthy();
    
    // Hero should take significant portion of viewport
    const viewportSize = page.viewportSize();
    expect(heroBox!.height).toBeGreaterThan(viewportSize!.height * 0.8);
  });

  test('Text sizing is reasonable across browsers', async ({ page }) => {
    // Check that main heading isn't too large
    const mainHeading = page.locator('h1');
    await expect(mainHeading).toBeVisible();
    
    const headingStyles = await mainHeading.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        fontSize: computed.fontSize,
        lineHeight: computed.lineHeight,
      };
    });
    
    // Font size should be reasonable (converted to pixels)
    const fontSizePx = parseFloat(headingStyles.fontSize);
    expect(fontSizePx).toBeLessThan(100); // Max 100px to prevent massive text
    expect(fontSizePx).toBeGreaterThan(24); // Min 24px for readability
  });

  test('Section spacing is consistent', async ({ page }) => {
    // Check that sections have proper spacing
    const sections = page.locator('section');
    const sectionCount = await sections.count();
    
    expect(sectionCount).toBeGreaterThan(1);
    
    // Check first few sections have reasonable spacing
    for (let i = 0; i < Math.min(3, sectionCount); i++) {
      const section = sections.nth(i);
      const sectionBox = await section.boundingBox();
      
      expect(sectionBox).toBeTruthy();
      expect(sectionBox!.width).toBeGreaterThan(0);
      expect(sectionBox!.height).toBeGreaterThan(0);
    }
  });

  test('Images load and display correctly', async ({ page }) => {
    // Wait for images to load
    await page.waitForLoadState('networkidle');
    
    // Check for any images in the hero section
    const images = page.locator('img');
    const imageCount = await images.count();
    
    if (imageCount > 0) {
      // Check first image loads correctly
      const firstImage = images.first();
      await expect(firstImage).toBeVisible();
      
      // Check image has reasonable dimensions
      const imageBox = await firstImage.boundingBox();
      expect(imageBox).toBeTruthy();
      expect(imageBox!.width).toBeGreaterThan(50);
      expect(imageBox!.height).toBeGreaterThan(50);
    }
  });

  test('Mobile Safari specific tests', async ({ page, browserName }) => {
    // Only run on webkit (Safari) and mobile viewports
    if (browserName !== 'webkit') {
      test.skip();
    }
    
    // Check that mobile navigation works
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone size
    
    // Mobile menu should be accessible
    const mobileMenuButton = page.locator('[aria-label*="menu"], [aria-label*="Menu"], button').first();
    
    if (await mobileMenuButton.isVisible()) {
      await mobileMenuButton.click();
      
      // Menu should open
      const menu = page.locator('ul, nav ul, [role="menu"]');
      await expect(menu.first()).toBeVisible();
    }
  });

  test('Cross-browser consistency check', async ({ page, browserName }) => {
    // Take screenshot for visual comparison
    await page.screenshot({ 
      path: `test-results/hero-${browserName}.png`,
      fullPage: false 
    });
    
    // Check basic layout elements are present
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    
    // No console errors related to CSS
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error' && msg.text().includes('CSS')) {
        consoleErrors.push(msg.text());
      }
    });
    
    // Reload page to catch any CSS errors
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    // Should have no CSS-related console errors
    expect(consoleErrors.length).toBe(0);
  });
});