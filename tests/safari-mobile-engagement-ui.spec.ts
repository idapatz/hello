import { test, expect } from '@playwright/test';

test.describe('Safari Mobile UI Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the homepage
    await page.goto('http://localhost:3000');
  });

  test('Engagement section images display correctly on Safari mobile', async ({ page }) => {
    // Set viewport to iPhone 12 Pro dimensions
    await page.setViewportSize({ width: 390, height: 844 });
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Scroll to the Engagement section
    const engagementSection = page.locator('#engagement');
    await engagementSection.scrollIntoViewIfNeeded();
    
    // Wait a moment for any animations to complete
    await page.waitForTimeout(1000);
    
    // Check that the Engagement section is visible
    await expect(engagementSection).toBeVisible();
    
    // Check that the title is visible and properly styled
    const title = engagementSection.locator('h2');
    await expect(title).toBeVisible();
    await expect(title).toHaveText('Engagement');
    
    // Check that all logo images are visible
    const logoImages = engagementSection.locator('img');
    await expect(logoImages).toHaveCount(5);
    
    // Check each individual logo
    const expectedLogos = [
      { src: '/akb.png', alt: 'Arbeitskreis Börse' },
      { src: '/finanzfrauen.png', alt: 'Finanzfrauen' },
      { src: '/berater.jpeg', alt: 'Berater e.V.' },
      { src: '/young_founders_network_logo.jpeg', alt: 'Young Founders Network' },
      { src: '/machn_festival_logo.jpeg', alt: 'machn Festival' }
    ];
    
    for (let i = 0; i < expectedLogos.length; i++) {
      const img = logoImages.nth(i);
      await expect(img).toBeVisible();
      await expect(img).toHaveAttribute('src', expectedLogos[i].src);
      await expect(img).toHaveAttribute('alt', expectedLogos[i].alt);
      
      // Check that the image has proper dimensions
      const boundingBox = await img.boundingBox();
      expect(boundingBox).not.toBeNull();
      expect(boundingBox!.width).toBeGreaterThan(0);
      expect(boundingBox!.height).toBeGreaterThan(0);
    }
    
    // Check that logo containers are clickable
    const logoLinks = engagementSection.locator('a');
    await expect(logoLinks).toHaveCount(5);
    
    for (let i = 0; i < logoLinks.count(); i++) {
      const link = logoLinks.nth(i);
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('target', '_blank');
      await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });

  test('Engagement section layout is responsive on Safari mobile', async ({ page }) => {
    // Test different mobile viewport sizes
    const viewports = [
      { width: 375, height: 667 }, // iPhone SE
      { width: 390, height: 844 }, // iPhone 12 Pro
      { width: 414, height: 896 }, // iPhone 11 Pro Max
    ];
    
    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      await page.reload();
      await page.waitForLoadState('networkidle');
      
      const engagementSection = page.locator('#engagement');
      await engagementSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      
      // Check section is visible
      await expect(engagementSection).toBeVisible();
      
      // Check that images are properly contained within viewport
      const logoImages = engagementSection.locator('img');
      for (let i = 0; i < await logoImages.count(); i++) {
        const img = logoImages.nth(i);
        const boundingBox = await img.boundingBox();
        expect(boundingBox).not.toBeNull();
        
        // Image should be within viewport bounds (allowing for some overflow due to scrolling)
        expect(boundingBox!.x).toBeGreaterThanOrEqual(-50); // Allow some negative values due to scrolling
        expect(boundingBox!.y).toBeGreaterThanOrEqual(-200); // Allow for scroll position
        expect(boundingBox!.x + boundingBox!.width).toBeLessThanOrEqual(viewport.width + 50);
      }
    }
  });

  test('Engagement section has proper spacing and alignment on Safari mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForLoadState('networkidle');
    
    const engagementSection = page.locator('#engagement');
    await engagementSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    
    // Check that the section has proper background color
    const backgroundColor = await engagementSection.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return style.backgroundColor;
    });
    expect(backgroundColor).toBe('rgb(243, 239, 234)'); // #f3efea
    
    // Check that logos are properly spaced
    const logoWrappers = engagementSection.locator('a');
    const firstLogo = logoWrappers.first();
    const secondLogo = logoWrappers.nth(1);
    
    if (await firstLogo.count() > 0 && await secondLogo.count() > 0) {
      const firstBox = await firstLogo.boundingBox();
      const secondBox = await secondLogo.boundingBox();
      
      expect(firstBox).not.toBeNull();
      expect(secondBox).not.toBeNull();
      
      // Check vertical spacing between logos
      const verticalSpacing = secondBox!.y - (firstBox!.y + firstBox!.height);
      expect(verticalSpacing).toBeGreaterThan(0);
    }
  });

  test('Engagement section images load without errors on Safari mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    
    // Listen for console errors
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    const engagementSection = page.locator('#engagement');
    await engagementSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000); // Wait for images to load
    
    // Check that no image-related errors occurred
    const imageErrors = consoleErrors.filter(error => 
      error.includes('Failed to load image') || 
      error.includes('img') || 
      error.includes('image')
    );
    
    expect(imageErrors).toHaveLength(0);
    
    // Verify all images loaded successfully
    const logoImages = engagementSection.locator('img');
    for (let i = 0; i < await logoImages.count(); i++) {
      const img = logoImages.nth(i);
      await expect(img).toBeVisible();
      
      // Check that image has loaded (naturalWidth > 0)
      const naturalWidth = await img.evaluate((el) => (el as HTMLImageElement).naturalWidth);
      expect(naturalWidth).toBeGreaterThan(0);
    }
  });
}); 