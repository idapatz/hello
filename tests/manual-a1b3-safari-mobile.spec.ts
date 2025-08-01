import { test, expect } from '@playwright/test';

test.describe('Manual Safari Mobile A1B3 Test', () => {
  test('Safari Mobile A1B3 - Manuelle UI Ansicht', async ({ page, browserName }) => {
    // Nur auf Safari/Webkit ausführen
    if (browserName !== 'webkit') {
      test.skip();
    }

    // iPhone Safari Mobile Viewport (iPhone 8 Größe)
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Direkt zur A1B3 Seite navigieren
    await page.goto('http://localhost:3000/a1b3', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    // Warten auf vollständiges Laden
    await page.waitForTimeout(3000);
    
    // Screenshots aller kritischen Bereiche
    console.log('🔍 Erstelle Screenshots für visuelle Inspektion...');
    
    // 1. NavBar
    await page.screenshot({ 
      path: 'test-results/manual-safari-mobile-navbar.png',
      clip: { x: 0, y: 0, width: 375, height: 100 }
    });
    
    // 2. Hero Section
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    await page.screenshot({ 
      path: 'test-results/manual-safari-mobile-hero.png',
      clip: { x: 0, y: 0, width: 375, height: 667 }
    });
    
    // 3. Skills Section
    await page.evaluate(() => window.scrollTo(0, window.innerHeight * 1.5));
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: 'test-results/manual-safari-mobile-skills.png',
      fullPage: false
    });
    
    // 4. Innerer Kompass Section (KRITISCH)
    const compassSection = page.getByRole('heading', { name: 'Innerer Kompass' });
    await compassSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await page.screenshot({ 
      path: 'test-results/manual-safari-mobile-innercompass.png',
      fullPage: false
    });
    
    // 5. Projects Section
    const projectsSection = page.getByRole('heading', { name: 'Projekte' });
    await projectsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: 'test-results/manual-safari-mobile-projects.png',
      fullPage: false
    });
    
    // 6. Engagement Section (KRITISCH)
    const engagementSection = page.getByRole('heading', { name: 'Engagement' });
    await engagementSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000); // Extra Zeit für Bilder
    await page.screenshot({ 
      path: 'test-results/manual-safari-mobile-engagement.png',
      fullPage: false
    });
    
    // 7. Contact Section
    const contactSection = page.getByRole('heading', { name: 'Kontakt' });
    await contactSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: 'test-results/manual-safari-mobile-contact.png',
      fullPage: false
    });
    
    // 8. Vollständige Seite
    await page.screenshot({ 
      path: 'test-results/manual-safari-mobile-full-page.png',
      fullPage: true
    });
    
    console.log('✅ Alle Screenshots erstellt!');
    console.log('📱 Safari Mobile A1B3 Seite komplett erfasst');
    
    // Kurze Validierung der kritischen Elemente
    await expect(page.locator('nav')).toBeVisible();
    await expect(compassSection).toBeVisible();
    await expect(engagementSection).toBeVisible();
    
    console.log('🎯 Kritische Elemente sind sichtbar!');
    
    // 30 Sekunden warten für manuelle Inspektion in der UI
    await page.waitForTimeout(30000);
  });
});