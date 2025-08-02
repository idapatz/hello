import { test, expect } from '@playwright/test';

test.describe('Safari Mobile UI Visual Test', () => {
  test('Safari Mobile UI Overview', async ({ page }) => {
    // Navigate to the local development server
    await page.goto('http://localhost:3000');
    
    // Set viewport to iPhone 12 Pro size (Safari Mobile)
    await page.setViewportSize({ width: 390, height: 844 });
    
    // Wait for the page to load completely
    await page.waitForLoadState('networkidle');
    
    // Take a screenshot of the entire page for visual inspection
    await page.screenshot({ 
      path: 'test-results/safari-mobile-full-page.png',
      fullPage: true 
    });
    
    // Check if main sections are visible
    await expect(page.locator('main')).toBeVisible();
    
    // Check if Hero section is visible
    await expect(page.locator('section:has-text("Hero")')).toBeVisible();
    
    // Check if Skills section is visible
    await expect(page.locator('section:has-text("Skills")')).toBeVisible();
    
    // Check if Inner Compass section is visible
    await expect(page.locator('section:has-text("Inner Compass")')).toBeVisible();
    
    // Check if Projects section is visible
    await expect(page.locator('section:has-text("Projekte")')).toBeVisible();
    
    // Check if Engagement section is visible
    await expect(page.locator('section:has-text("Engagement")')).toBeVisible();
    
    // Check if Contact section is visible
    await expect(page.locator('section:has-text("Kontakt")')).toBeVisible();
    
    // Take screenshot of Engagement section specifically
    const engagementSection = page.locator('#engagement');
    if (await engagementSection.isVisible()) {
      await engagementSection.screenshot({ 
        path: 'test-results/safari-mobile-engagement-section.png' 
      });
    }
    
    // Scroll through the page to capture all sections
    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });
    
    // Wait a moment for any animations
    await page.waitForTimeout(1000);
    
    // Take another screenshot after scrolling
    await page.screenshot({ 
      path: 'test-results/safari-mobile-scrolled.png',
      fullPage: true 
    });
    
    // Basic accessibility check
    await expect(page).toHaveTitle(/./); // Page has a title
    
    // Check for any console errors
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    // Wait a bit more to catch any late errors
    await page.waitForTimeout(2000);
    
    // Log any console errors for debugging
    if (consoleErrors.length > 0) {
      console.log('Console errors found:', consoleErrors);
    }
  });
}); 