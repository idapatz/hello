import { test, expect } from '@playwright/test';

test.describe('A1B3 Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Direkt zur /a1b3 Route navigieren
    await page.goto('/a1b3');
    await page.waitForLoadState('networkidle');
  });

  test('A1B3 Page loads correctly in all browsers', async ({ page, browserName }) => {
    // Überprüfen, dass die Seite geladen ist
    await expect(page).toHaveURL(/.*a1b3/);
    
    // Screenshot für visuellen Vergleich
    await page.screenshot({ 
      path: `test-results/a1b3-${browserName}.png`,
      fullPage: true 
    });
    
    // Basis-Layout-Tests
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    
    console.log(`A1B3 page tested in ${browserName}`);
  });

  test('A1B3 Page - Safari specific rendering', async ({ page, browserName }) => {
    // Nur auf Safari/Webkit ausführen
    if (browserName !== 'webkit') {
      test.skip();
    }

    // Detaillierte Safari-Tests für A1B3
    await page.waitForTimeout(2000); // Sicherstellen dass alles geladen ist
    
    // Überprüfen, dass keine Elemente abgeschnitten sind
    const viewportSize = page.viewportSize();
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    
    expect(bodyWidth).toBeLessThanOrEqual(viewportSize!.width + 10); // 10px Toleranz
    
    // Screenshot speziell für Safari
    await page.screenshot({ 
      path: `test-results/a1b3-safari-detailed.png`,
      fullPage: true 
    });
  });

  test('A1B3 Page - Mobile Safari (iPhone)', async ({ page, browserName }) => {
    // Nur auf Safari/Webkit ausführen
    if (browserName !== 'webkit') {
      test.skip();
    }

    // iPhone Viewport setzen
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    // Mobile Layout überprüfen
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(375 + 5); // 5px Toleranz für iPhone
    
    // Screenshot für mobile Safari
    await page.screenshot({ 
      path: `test-results/a1b3-safari-iphone.png`,
      fullPage: true 
    });
  });

  test('A1B3 Page - Interactive elements work', async ({ page }) => {
    // Navigation testen
    const navLinks = page.locator('nav a');
    const linkCount = await navLinks.count();
    
    if (linkCount > 0) {
      // Ersten Link finden und klicken (falls vorhanden)
      const firstLink = navLinks.first();
      if (await firstLink.isVisible()) {
        await firstLink.click();
        await page.waitForLoadState('networkidle');
        
        // Zurück zur A1B3 Seite
        await page.goBack();
        await page.waitForLoadState('networkidle');
      }
    }
    
    // Überprüfen, dass wir zurück auf A1B3 sind
    await expect(page).toHaveURL(/.*a1b3/);
  });

  test('A1B3 Page - Performance and loading', async ({ page }) => {
    // Performance-Metriken sammeln
    const startTime = Date.now();
    
    await page.reload();
    await page.waitForLoadState('domcontentloaded');
    
    const loadTime = Date.now() - startTime;
    console.log(`A1B3 page load time: ${loadTime}ms`);
    
    // Sollte unter 5 Sekunden laden
    expect(loadTime).toBeLessThan(5000);
    
    // Überprüfen, dass wichtige Ressourcen geladen sind
    await page.waitForLoadState('networkidle');
    
    // JavaScript-Errors prüfen
    const jsErrors: string[] = [];
    page.on('pageerror', error => {
      jsErrors.push(error.message);
    });
    
    await page.waitForTimeout(2000);
    expect(jsErrors.length).toBe(0);
  });

  test('A1B3 Page - Cross-browser visual comparison', async ({ page, browserName }) => {
    // Screenshots für alle Browser erstellen
    await page.screenshot({ 
      path: `test-results/a1b3-comparison-${browserName}.png`,
      fullPage: false,
      clip: { x: 0, y: 0, width: 1200, height: 800 } // Standardgröße für Vergleich
    });
    
    // Basis-Elemente auf Sichtbarkeit prüfen
    const essentialElements = ['nav', 'main', 'body'];
    
    for (const element of essentialElements) {
      await expect(page.locator(element)).toBeVisible();
    }
    
    console.log(`A1B3 cross-browser test completed for ${browserName}`);
  });
});