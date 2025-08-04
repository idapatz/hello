import { test, expect } from '@playwright/test';

test.describe('Safari Mobile Projects UI Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the homepage
    await page.goto('http://localhost:3000');
  });

  test('Projects section cards display correctly on Safari mobile', async ({ page }) => {
    // Set viewport to iPhone 12 Pro dimensions
    await page.setViewportSize({ width: 390, height: 844 });
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Scroll to the Projects section
    const projectsSection = page.locator('#projects');
    await projectsSection.scrollIntoViewIfNeeded();
    
    // Wait a moment for any animations to complete
    await page.waitForTimeout(1000);
    
    // Check that the Projects section is visible
    await expect(projectsSection).toBeVisible();
    
    // Check that the title is visible and properly styled
    const title = projectsSection.locator('h2');
    await expect(title).toBeVisible();
    await expect(title).toHaveText('Projekte');
    
    // Check that all project cards are visible (using h3 titles to find cards)
    const projectTitles = projectsSection.locator('h3');
    await expect(projectTitles).toHaveCount(4);
    
    // Get the parent divs of the h3 titles (which are the cards)
    const projectCards = projectsSection.locator('h3').locator('xpath=..');
    await expect(projectCards).toHaveCount(4);
    
    // Check each individual project card
    const expectedProjects = [
      "Automatisierung weitergedacht",
      "Mit Klarheit wachsen", 
      "Von der Idee zur Organisation",
      "Sichtbar werden"
    ];
    
    for (let i = 0; i < expectedProjects.length; i++) {
      const card = projectCards.nth(i);
      await expect(card).toBeVisible();
      
      // Check that the card has proper dimensions
      const boundingBox = await card.boundingBox();
      expect(boundingBox).not.toBeNull();
      expect(boundingBox!.width).toBeGreaterThan(0);
      expect(boundingBox!.height).toBeGreaterThan(0);
    }
  });

  test('Projects section layout is responsive on Safari mobile', async ({ page }) => {
    // Test iPhone 12 Pro viewport size
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForLoadState('networkidle');
    
    const projectsSection = page.locator('#projects');
    await projectsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    
    // Check section is visible
    await expect(projectsSection).toBeVisible();
    
    // Check that all 4 project cards are visible
    const projectCards = projectsSection.locator('h3').locator('xpath=..');
    await expect(projectCards).toHaveCount(4);
    
    // Check that cards have proper dimensions
    for (let i = 0; i < await projectCards.count(); i++) {
      const card = projectCards.nth(i);
      const boundingBox = await card.boundingBox();
      expect(boundingBox).not.toBeNull();
      expect(boundingBox!.width).toBeGreaterThan(0);
      expect(boundingBox!.height).toBeGreaterThan(0);
    }
  });

  test('Projects section has proper styling and spacing on Safari mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForLoadState('networkidle');
    
    const projectsSection = page.locator('#projects');
    await projectsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    
    // Check that the section has proper background color
    const backgroundColor = await projectsSection.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return style.backgroundColor;
    });
    expect(backgroundColor).toBe('rgb(243, 239, 234)'); // #f3efea
    
    // Check that cards are visible and have content
    const projectCards = projectsSection.locator('h3').locator('xpath=..');
    await expect(projectCards).toHaveCount(4);
    
    for (let i = 0; i < await projectCards.count(); i++) {
      const card = projectCards.nth(i);
      await expect(card).toBeVisible();
    }
  });

  test('Projects section content is properly displayed on Safari mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForLoadState('networkidle');
    
    const projectsSection = page.locator('#projects');
    await projectsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    
    // Check that project titles are visible
    const projectTitles = projectsSection.locator('h3');
    await expect(projectTitles).toHaveCount(4);
    
    // Check specific project content
    const expectedProjectTitles = [
      "Entwicklung einer beruflichen Weiterbildung zum Thema Automatisierung",
      "Strategischer Aufbau & operative Ausrichtung eines KI-Tech-Unternehmens",
      "Aufbau eines Beratungsunternehmens im Energiesektor",
      "Auftritt & Positionierung eines neuen Beratungsnetzwerks"
    ];
    
    for (let i = 0; i < expectedProjectTitles.length; i++) {
      const title = projectTitles.nth(i);
      await expect(title).toBeVisible();
      await expect(title).toContainText(expectedProjectTitles[i]);
    }
    
    // Check that company links are present
    const companyLinks = projectsSection.locator('a');
    await expect(companyLinks).toHaveCount(4);
    
    for (let i = 0; i < await companyLinks.count(); i++) {
      const link = companyLinks.nth(i);
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('target', '_blank');
      await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });

  test('Projects section cards have proper hover effects on Safari mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForLoadState('networkidle');
    
    const projectsSection = page.locator('#projects');
    await projectsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    
    // Get the first project card
    const firstCard = projectsSection.locator('h3').locator('xpath=..').first();
    await expect(firstCard).toBeVisible();
    
    // Check that the card is interactive (has hover styles)
    const hasHoverStyles = await firstCard.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return style.transition !== 'none' && style.transition !== '';
    });
    
    expect(hasHoverStyles).toBe(true);
  });

  test('Projects section grid layout adapts to mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForLoadState('networkidle');
    
    const projectsSection = page.locator('#projects');
    await projectsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    
    // Check that the grid container exists
    const grid = projectsSection.locator('div').filter({ has: page.locator('h3') }).first();
    await expect(grid).toBeVisible();
    
    // Check grid layout properties
    const gridDisplay = await grid.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return style.display;
    });
    // On mobile, it might be flex or grid, so we check for either
    expect(['grid', 'flex']).toContain(gridDisplay);
    
    // Check that cards are stacked vertically on mobile (single column)
    const projectCards = projectsSection.locator('h3').locator('xpath=..');
    const firstCard = projectCards.first();
    const secondCard = projectCards.nth(1);
    
    if (await firstCard.count() > 0 && await secondCard.count() > 0) {
      const firstBox = await firstCard.boundingBox();
      const secondBox = await secondCard.boundingBox();
      
      expect(firstBox).not.toBeNull();
      expect(secondBox).not.toBeNull();
      
      // On mobile, cards should be stacked vertically (second card below first)
      expect(secondBox!.y).toBeGreaterThan(firstBox!.y);
    }
  });
}); 