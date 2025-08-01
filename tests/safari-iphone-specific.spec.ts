import { test, expect } from '@playwright/test';

test.describe('Safari iPhone Spezifische Probleme', () => {
  test.beforeEach(async ({ page }) => {
    // iPhone viewport setzen
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Innerer Kompass Texte sind sichtbar auf Safari iPhone', async ({ page, browserName }) => {
    // Nur auf Webkit (Safari) ausführen
    if (browserName !== 'webkit') {
      test.skip();
    }

    // Zur InnerCompass Sektion scrollen
    await page.locator('text=Innerer Kompass').scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000); // Animationen abwarten

    // Überprüfen, dass der Titel sichtbar ist
    const title = page.locator('text=Innerer Kompass');
    await expect(title).toBeVisible();

    // Überprüfen, dass die Haupttexte sichtbar sind
    const textBlocks = [
      'Ich glaube an Arbeit, die Sinn stiftet',
      'Ich komme aus der Bildungswissenschaft',
      'In den letzten Jahren habe ich Teams aufgebaut',
      'Ich denke strategisch, handle klar'
    ];

    for (const text of textBlocks) {
      const textElement = page.locator(`text=${text}`).first();
      await expect(textElement).toBeVisible({ timeout: 5000 });
      
      // Überprüfen, dass Text nicht leer ist
      const textContent = await textElement.textContent();
      expect(textContent).toBeTruthy();
      expect(textContent!.length).toBeGreaterThan(10);
    }

    // Überprüfen, dass unterstrichene Texte sichtbar sind
    const underlinedTexts = ['Sinn', 'Verbindung', 'Technologie', 'Potenzial', 'Wirkung'];
    
    for (const text of underlinedTexts) {
      const underlinedElement = page.locator(`text=${text}`).first();
      await expect(underlinedElement).toBeVisible();
    }

    // Screenshot für visuellen Vergleich
    await page.screenshot({ 
      path: `test-results/inner-compass-safari-iphone.png`,
      fullPage: false 
    });
  });

  test('Vereine/Engagement Bilder laden korrekt auf Safari iPhone', async ({ page, browserName }) => {
    // Nur auf Webkit (Safari) ausführen
    if (browserName !== 'webkit') {
      test.skip();
    }

    // Zur Engagement Sektion scrollen
    await page.locator('text=Engagement').scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000); // Zeit für Bilder-Laden

    // Überprüfen, dass der Titel sichtbar ist
    const title = page.locator('text=Engagement');
    await expect(title).toBeVisible();

    // Alle Vereinslogos finden
    const logoImages = page.locator('img[alt*="Logo"]');
    const logoCount = await logoImages.count();
    
    expect(logoCount).toBeGreaterThan(0);
    console.log(`Found ${logoCount} logo images`);

    // Überprüfen, dass jedes Bild geladen ist
    for (let i = 0; i < logoCount; i++) {
      const img = logoImages.nth(i);
      
      // Warten bis Bild sichtbar ist
      await expect(img).toBeVisible({ timeout: 10000 });
      
      // Überprüfen, dass Bild geladen ist (naturalWidth > 0)
      const isLoaded = await img.evaluate((el: HTMLImageElement) => {
        return el.complete && el.naturalWidth > 0;
      });
      
      expect(isLoaded).toBeTruthy();
      
      // Überprüfen, dass Bild vernünftige Dimensionen hat
      const boundingBox = await img.boundingBox();
      expect(boundingBox).toBeTruthy();
      expect(boundingBox!.width).toBeGreaterThan(50);
      expect(boundingBox!.height).toBeGreaterThan(50);
    }

    // Vereinsnamen überprüfen
    const vereinsNamen = [
      'Young Founders Network',
      'Machn Festival', 
      'Finanzfrauen',
      'Arbeitskreis Börse',
      'Berater e.V.'
    ];

    for (const name of vereinsNamen) {
      const nameElement = page.locator(`text=${name}`);
      await expect(nameElement).toBeVisible();
    }

    // Screenshot für visuellen Vergleich
    await page.screenshot({ 
      path: `test-results/engagement-safari-iphone.png`,
      fullPage: false 
    });
  });

  test('Font-Rendering funktioniert korrekt auf Safari iPhone', async ({ page, browserName }) => {
    if (browserName !== 'webkit') {
      test.skip();
    }

    // Überprüfen verschiedener Text-Elemente
    const textElements = [
      { selector: 'h1', description: 'Main heading' },
      { selector: 'h2', description: 'Section headings' },
      { selector: 'p', description: 'Paragraphs' },
      { selector: 'h3', description: 'Card titles' }
    ];

    for (const element of textElements) {
      const elements = page.locator(element.selector);
      const count = await elements.count();
      
      if (count > 0) {
        const firstElement = elements.first();
        await expect(firstElement).toBeVisible();
        
        // Überprüfen, dass Text gerendert wird
        const styles = await firstElement.evaluate((el) => {
          const computed = window.getComputedStyle(el);
          return {
            fontFamily: computed.fontFamily,
            fontSize: computed.fontSize,
            color: computed.color,
            opacity: computed.opacity
          };
        });
        
        expect(styles.fontFamily).toBeTruthy();
        expect(styles.fontSize).toBeTruthy();
        expect(parseFloat(styles.opacity)).toBeGreaterThan(0);
        
        console.log(`${element.description}: Font: ${styles.fontFamily}, Size: ${styles.fontSize}`);
      }
    }
  });

  test('Flex-Layout funktioniert korrekt auf Safari iPhone', async ({ page, browserName }) => {
    if (browserName !== 'webkit') {
      test.skip();
    }

    // Zur Engagement Sektion
    await page.locator('text=Engagement').scrollIntoViewIfNeeded();
    
    // Überprüfen, dass das Flex-Grid funktioniert
    const vereinGrid = page.locator('div').filter({ hasText: 'Young Founders Network' }).locator('..').locator('..');
    
    // Sollte keine horizontale Scrollleiste geben
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = 375; // iPhone Breite
    
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 5); // 5px Toleranz
    
    // Alle Karten sollten sichtbar sein und nicht überlappen
    const cards = page.locator('div').filter({ hasText: /Young Founders Network|Machn Festival|Finanzfrauen|Arbeitskreis Börse|Berater e\.V\./ });
    const cardCount = await cards.count();
    
    expect(cardCount).toBe(5);
    
    for (let i = 0; i < cardCount; i++) {
      const card = cards.nth(i);
      await expect(card).toBeVisible();
      
      const box = await card.boundingBox();
      expect(box).toBeTruthy();
      expect(box!.width).toBeGreaterThan(0);
      expect(box!.height).toBeGreaterThan(0);
    }
  });

  test('Keine JavaScript Errors auf Safari iPhone', async ({ page, browserName }) => {
    if (browserName !== 'webkit') {
      test.skip();
    }

    const consoleErrors: string[] = [];
    const jsErrors: string[] = [];

    // Console errors abfangen
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // JavaScript errors abfangen
    page.on('pageerror', error => {
      jsErrors.push(error.message);
    });

    // Seite neu laden und durch alle Sektionen scrollen
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    // Durch alle Sektionen scrollen
    const sections = ['Innerer Kompass', 'Engagement'];
    for (const section of sections) {
      await page.locator(`text=${section}`).scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
    }

    // Sollte keine kritischen Fehler geben
    const criticalErrors = consoleErrors.filter(error => 
      !error.includes('favicon') && 
      !error.includes('404') &&
      !error.includes('network')
    );
    
    console.log('Console errors:', criticalErrors);
    console.log('JS errors:', jsErrors);
    
    expect(criticalErrors.length).toBe(0);
    expect(jsErrors.length).toBe(0);
  });
});