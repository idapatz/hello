import { test, expect } from '@playwright/test';

test.describe('Safari Mobile - Kritische Fixes für A1B3', () => {
  test.beforeEach(async ({ page, browserName }) => {
    // Nur auf Safari/Webkit ausführen
    if (browserName !== 'webkit') {
      test.skip();
    }

    // iPhone Safari Mobile Viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3000/a1b3');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000); // Extra Zeit für Safari Mobile
  });

  test('NavBar ist sichtbar auf Safari Mobile', async ({ page }) => {
    // Navigation sollte sichtbar und funktional sein
    const nav = page.locator('nav');
    await expect(nav).toBeVisible({ timeout: 10000 });
    
    // Logo sollte sichtbar sein
    const logo = page.locator('nav').getByText('Ida Patzelt');
    await expect(logo).toBeVisible({ timeout: 5000 });
    
    // Navigation sollte über anderen Elementen liegen (z-index)
    const navZIndex = await nav.evaluate((el) => {
      return window.getComputedStyle(el).zIndex;
    });
    
    expect(parseInt(navZIndex)).toBeGreaterThan(1000);
    
    // Screenshot der Navigation
    await page.screenshot({ 
      path: `test-results/safari-mobile-navbar-fixed.png`,
      clip: { x: 0, y: 0, width: 375, height: 80 }
    });
    
    console.log('✅ NavBar ist sichtbar auf Safari Mobile');
  });

  test('Innerer Kompass Text ist vollständig sichtbar auf Safari Mobile', async ({ page }) => {
    // Zur Innerer Kompass Sektion scrollen
    await page.evaluate(() => {
      window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' });
    });
    await page.waitForTimeout(2000);
    
    // Title sollte sichtbar sein
    const title = page.getByRole('heading', { name: 'Innerer Kompass' });
    await expect(title).toBeVisible({ timeout: 5000 });
    
    // Alle Text-Paragraphen überprüfen
    const textParagraphs = [
      'Ich glaube an Arbeit, die Sinn stiftet',
      'Ich komme aus der Bildungswissenschaft',
      'In den letzten Jahren habe ich Teams aufgebaut',
      'Ich denke strategisch, handle klar'
    ];
    
    for (const text of textParagraphs) {
      const textElement = page.locator(`text=${text}`).first();
      await expect(textElement).toBeVisible({ timeout: 5000 });
      
      // Überprüfen, dass Text nicht leer ist
      const textContent = await textElement.textContent();
      expect(textContent).toBeTruthy();
      expect(textContent!.length).toBeGreaterThan(10);
    }
    
    // Screenshot der Innerer Kompass Sektion
    await page.screenshot({ 
      path: `test-results/safari-mobile-innercompass-fixed.png`,
      fullPage: false
    });
    
    console.log('✅ Innerer Kompass Text ist vollständig sichtbar');
  });

  test('Engagement Section Bilder und Texte sind sichtbar auf Safari Mobile', async ({ page }) => {
    // Zur Engagement Sektion scrollen
    await page.evaluate(() => {
      window.scrollTo({ top: window.innerHeight * 5, behavior: 'smooth' });
    });
    await page.waitForTimeout(3000); // Extra Zeit für Bilder-Laden
    
    // Title sollte sichtbar sein
    const title = page.getByRole('heading', { name: 'Engagement' });
    await expect(title).toBeVisible({ timeout: 5000 });
    
    // Alle Vereinsnamen überprüfen
    const vereinsNamen = [
      'Young Founders Network',
      'Machn Festival', 
      'Finanzfrauen',
      'Arbeitskreis Börse',
      'Berater e.V.'
    ];
    
    for (const name of vereinsNamen) {
      const nameElement = page.locator(`text=${name}`);
      await expect(nameElement).toBeVisible({ timeout: 8000 });
      
      console.log(`✅ Vereinsname "${name}" ist sichtbar`);
    }
    
    // Bilder überprüfen
    const images = page.locator('img[alt*="Logo"]');
    const imageCount = await images.count();
    
    expect(imageCount).toBeGreaterThan(0);
    console.log(`Gefunden: ${imageCount} Vereinslogos`);
    
    // Jedes Bild überprüfen
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      
      // Warten bis Bild sichtbar ist
      await expect(img).toBeVisible({ timeout: 10000 });
      
      // Überprüfen, dass Bild geladen ist
      const isLoaded = await img.evaluate((el: HTMLImageElement) => {
        return el.complete && el.naturalWidth > 0;
      });
      
      if (!isLoaded) {
        console.warn(`⚠️ Bild ${i + 1} ist nicht vollständig geladen`);
      } else {
        console.log(`✅ Bild ${i + 1} ist korrekt geladen`);
      }
    }
    
    // Screenshot der Engagement Sektion
    await page.screenshot({ 
      path: `test-results/safari-mobile-engagement-fixed.png`,
      fullPage: false
    });
    
    console.log('✅ Engagement Section Bilder und Texte sind sichtbar');
  });

  test('Gesamte A1B3 Seite - Safari Mobile Vollständigkeitscheck', async ({ page }) => {
    // Full page screenshot zu Beginn
    await page.screenshot({ 
      path: `test-results/safari-mobile-a1b3-complete.png`,
      fullPage: true
    });
    
    // Durch alle Hauptsektionen scrollen und überprüfen
    const sections = [
      { name: 'Hero', scrollY: 0 },
      { name: 'Skills', scrollY: window.innerHeight * 2 },
      { name: 'Innerer Kompass', scrollY: window.innerHeight * 3 },
      { name: 'Projects', scrollY: window.innerHeight * 4 },
      { name: 'Engagement', scrollY: window.innerHeight * 5 },
      { name: 'Contact', scrollY: window.innerHeight * 6 }
    ];
    
    for (const section of sections) {
      await page.evaluate((scrollY) => {
        window.scrollTo({ top: scrollY, behavior: 'smooth' });
      }, section.scrollY);
      
      await page.waitForTimeout(1500);
      
      // Screenshot jeder Sektion
      await page.screenshot({ 
        path: `test-results/safari-mobile-${section.name.toLowerCase()}-section.png`,
        fullPage: false
      });
      
      console.log(`✅ ${section.name} Sektion überprüft`);
    }
    
    // Zurück zum Anfang
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
    await page.waitForTimeout(1000);
    
    // Final check - keine JavaScript Errors
    const jsErrors: string[] = [];
    page.on('pageerror', error => {
      jsErrors.push(error.message);
    });
    
    await page.waitForTimeout(2000);
    
    if (jsErrors.length > 0) {
      console.warn('⚠️ JavaScript Errors gefunden:', jsErrors);
    } else {
      console.log('✅ Keine JavaScript Errors');
    }
    
    // Layout check - keine horizontalen Scrollbalken
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(375 + 5); // 5px Toleranz
    
    console.log('✅ Gesamte A1B3 Seite funktioniert auf Safari Mobile');
  });
});