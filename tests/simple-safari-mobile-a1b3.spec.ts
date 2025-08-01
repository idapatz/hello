import { test, expect } from '@playwright/test';

test.describe('Einfacher Safari Mobile A1B3 Test', () => {
  test('A1B3 Seite in Safari Mobile anzeigen', async ({ page, browserName }) => {
    // Nur auf Safari/Webkit ausführen
    if (browserName !== 'webkit') {
      test.skip();
    }

    console.log('🔍 Starte Safari Mobile Test für A1B3...');

    // iPhone Safari Mobile Viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Direkt zur A1B3 Seite - verwende aktuellen Port
    await page.goto('http://localhost:3004/a1b3', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    console.log('✅ Seite geladen auf http://localhost:3004/a1b3');
    
    // Kurz warten für vollständiges Rendering
    await page.waitForTimeout(3000);
    
    // Basis-Validierung dass die Seite geladen ist
    await expect(page).toHaveTitle(/ida patzelt/i);
    
    console.log('📱 Safari Mobile Simulation aktiv (375x667px)');
    console.log('🎯 Jetzt können Sie die Seite manuell in der Playwright UI inspizieren');
    
    // NavBar überprüfen
    const navbar = page.locator('nav');
    await expect(navbar).toBeVisible();
    console.log('✅ NavBar ist sichtbar');
    
    // Innerer Kompass Sektion
    const compassHeading = page.getByRole('heading', { name: 'Innerer Kompass' });
    await compassHeading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(compassHeading).toBeVisible();
    console.log('✅ Innerer Kompass Überschrift ist sichtbar');
    
    // Engagement Sektion
    const engagementHeading = page.getByRole('heading', { name: 'Engagement' });
    await engagementHeading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await expect(engagementHeading).toBeVisible();
    console.log('✅ Engagement Überschrift ist sichtbar');
    
    // Screenshots der kritischen Bereiche
    await page.screenshot({ 
      path: 'test-results/simple-safari-mobile-a1b3-full.png',
      fullPage: true
    });
    
    // NavBar Screenshot
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    await page.screenshot({ 
      path: 'test-results/simple-safari-mobile-navbar.png',
      clip: { x: 0, y: 0, width: 375, height: 100 }
    });
    
    // Innerer Kompass Screenshot
    await compassHeading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: 'test-results/simple-safari-mobile-innercompass.png',
      fullPage: false
    });
    
    // Engagement Screenshot
    await engagementHeading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await page.screenshot({ 
      path: 'test-results/simple-safari-mobile-engagement.png',
      fullPage: false
    });
    
    console.log('📸 Screenshots erstellt:');
    console.log('   - simple-safari-mobile-a1b3-full.png');
    console.log('   - simple-safari-mobile-navbar.png');
    console.log('   - simple-safari-mobile-innercompass.png');
    console.log('   - simple-safari-mobile-engagement.png');
    
    // 60 Sekunden warten für manuelle Inspektion
    console.log('⏱️ Wartet 60 Sekunden für manuelle Inspektion...');
    await page.waitForTimeout(60000);
    
    console.log('✅ Test abgeschlossen!');
  });
});