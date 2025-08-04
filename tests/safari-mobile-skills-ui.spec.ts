import { test, expect } from '@playwright/test';

test.describe('Safari Mobile Skills UI Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the homepage
    await page.goto('http://localhost:3000');
  });

  test('Skills section cards display correctly on Safari mobile', async ({ page }) => {
    // Set viewport to iPhone 12 Pro dimensions
    await page.setViewportSize({ width: 390, height: 844 });
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Scroll to the Skills section
    const skillsSection = page.locator('#skills');
    await skillsSection.scrollIntoViewIfNeeded();
    
    // Wait a moment for any animations to complete
    await page.waitForTimeout(1000);
    
    // Check that the Skills section is visible
    await expect(skillsSection).toBeVisible();
    
    // Check that the title is visible and properly styled
    const title = skillsSection.locator('h2');
    await expect(title).toBeVisible();
    await expect(title).toHaveText('Skills');
    
    // Check that all skill cards are visible (using h3 titles to find cards)
    const cardTitles = skillsSection.locator('h3');
    await expect(cardTitles).toHaveCount(3);
    
    // Get the parent divs of the h3 titles (which are the cards)
    const skillCards = skillsSection.locator('h3').locator('xpath=..');
    await expect(skillCards).toHaveCount(3);
    
    // Check each individual skill card
    const expectedCategories = [
      "Business-Verständnis",
      "Team & Führung", 
      "Struktur & Umsetzung"
    ];
    
    for (let i = 0; i < expectedCategories.length; i++) {
      const card = skillCards.nth(i);
      await expect(card).toBeVisible();
      
      // Check that the card has proper dimensions
      const boundingBox = await card.boundingBox();
      expect(boundingBox).not.toBeNull();
      expect(boundingBox!.width).toBeGreaterThan(0);
      expect(boundingBox!.height).toBeGreaterThan(0);
      
      // Check that the card title is visible
      const cardTitle = card.locator('h3');
      await expect(cardTitle).toBeVisible();
      await expect(cardTitle).toHaveText(expectedCategories[i]);
    }
  });

  test('Skills section layout is responsive on Safari mobile', async ({ page }) => {
    // Test iPhone 12 Pro viewport size
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForLoadState('networkidle');
    
    const skillsSection = page.locator('#skills');
    await skillsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    
    // Check section is visible
    await expect(skillsSection).toBeVisible();
    
    // Check that all 3 skill cards are visible
    const skillCards = skillsSection.locator('h3').locator('xpath=..');
    await expect(skillCards).toHaveCount(3);
    
    // Check that cards have proper dimensions
    for (let i = 0; i < await skillCards.count(); i++) {
      const card = skillCards.nth(i);
      const boundingBox = await card.boundingBox();
      expect(boundingBox).not.toBeNull();
      expect(boundingBox!.width).toBeGreaterThan(0);
      expect(boundingBox!.height).toBeGreaterThan(0);
    }
  });

  test('Skills section has proper styling and spacing on Safari mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForLoadState('networkidle');
    
    const skillsSection = page.locator('#skills');
    await skillsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    
    // Check that the section has proper background color
    const backgroundColor = await skillsSection.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return style.backgroundColor;
    });
    expect(backgroundColor).toBe('rgb(243, 239, 234)'); // #f3efea
    
    // Check that cards have proper styling
    const skillCards = skillsSection.locator('h3').locator('xpath=..');
    for (let i = 0; i < await skillCards.count(); i++) {
      const card = skillCards.nth(i);
      
      // Check that card has border radius
      const borderRadius = await card.evaluate((el) => {
        const style = window.getComputedStyle(el);
        return style.borderRadius;
      });
      expect(borderRadius).not.toBe('0px');
      
      // Check that card has padding
      const padding = await card.evaluate((el) => {
        const style = window.getComputedStyle(el);
        return style.padding;
      });
      expect(padding).not.toBe('0px');
    }
  });

  test('Skills section content is properly displayed on Safari mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForLoadState('networkidle');
    
    const skillsSection = page.locator('#skills');
    await skillsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    
    // Check that all skill items are visible
    const skillItems = skillsSection.locator('li');
    await expect(skillItems).toHaveCount(9); // 3 cards × 3 items each
    
    // Check that check icons are visible (they are div elements with ::after pseudo-elements)
    const checkIcons = skillsSection.locator('li > div').first();
    await expect(checkIcons).toBeVisible();
    
    // Check specific content in each card
    const expectedSkills = [
      // Business-Verständnis
      "Strategieentwicklung in der Energie- & KI-Branche",
      "Produktentwicklung & MVP-Prozesse", 
      "Controlling, Positionierung, Zielplanung",
      // Team & Führung
      "Teamaufbau (remote & vor Ort)",
      "HR-Prozesse, Mitarbeitergespräche, Kulturformate",
      "Meetingstrukturen & Kommunikation",
      // Struktur & Umsetzung
      "Notion, Pipedrive, Google Workspace",
      "Websiteaufbau, Tool-Landschaft, Kampagnenentwicklung", 
      "Workshops & Weiterbildungen mit Substanz"
    ];
    
    for (let i = 0; i < expectedSkills.length; i++) {
      const skillItem = skillItems.nth(i);
      await expect(skillItem).toBeVisible();
      await expect(skillItem).toContainText(expectedSkills[i]);
    }
  });

  test('Skills section cards have proper hover effects on Safari mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForLoadState('networkidle');
    
    const skillsSection = page.locator('#skills');
    await skillsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    
    // Get the first skill card
    const firstCard = skillsSection.locator('h3').locator('xpath=..').first();
    await expect(firstCard).toBeVisible();
    
    // Get initial transform value
    const initialTransform = await firstCard.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return style.transform;
    });
    
    // Hover over the card
    await firstCard.hover();
    await page.waitForTimeout(500);
    
    // Check that transform has changed (hover effect applied)
    const hoverTransform = await firstCard.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return style.transform;
    });
    
    // The transform should be different after hover (unless it's 'none' initially)
    if (initialTransform !== 'none') {
      expect(hoverTransform).not.toBe(initialTransform);
    }
  });

  test('Skills section grid layout adapts to mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForLoadState('networkidle');
    
    const skillsSection = page.locator('#skills');
    await skillsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    
    // Check that the grid container exists (it's a div with grid display)
    const grid = skillsSection.locator('div').filter({ has: page.locator('h3') }).first();
    await expect(grid).toBeVisible();
    
    // Check grid layout properties
    const gridDisplay = await grid.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return style.display;
    });
    // On mobile, it might be flex or grid, so we check for either
    expect(['grid', 'flex']).toContain(gridDisplay);
    
    // Check that cards are stacked vertically on mobile (single column)
    const skillCards = skillsSection.locator('h3').locator('xpath=..');
    const firstCard = skillCards.first();
    const secondCard = skillCards.nth(1);
    
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