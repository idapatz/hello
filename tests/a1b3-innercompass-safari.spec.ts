import { test, expect } from '@playwright/test';

test.describe('A1B3 InnerCompass Safari Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/a1b3');
    await page.waitForLoadState('networkidle');
  });

  test('A1B3 InnerCompass Texte sind sichtbar auf Safari', async ({ page, browserName }) => {
    // Nur auf Webkit (Safari) ausführen
    if (browserName !== 'webkit') {
      test.skip();
    }

    // Zur InnerCompass Sektion scrollen (spezifisch die Überschrift)
    await page.getByRole('heading', { name: 'Innerer Kompass' }).scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000); // Animationen abwarten

    // Überprüfen, dass der Titel sichtbar ist
    const title = page.getByRole('heading', { name: 'Innerer Kompass' });
    await expect(title).toBeVisible();

    // A1B3 spezifische Texte überprüfen
    const a1b3TextBlocks = [
      'Ich glaube an Arbeit, die Sinn stiftet',
      'An Unternehmen, die Menschen dienen, nicht umgekehrt', // Unterschied zur normalen Version
      'Ich komme aus der Bildungswissenschaft',
      'arbeite an der Schnittstelle von Strategie, Kommunikation und Technologie und liebe es', // A1B3 Version
      'In den letzten Jahren habe ich Teams aufgebaut',
      'wie Veränderung gelingt: mit Klarheit', // A1B3 Version hat Doppelpunkt
      'Ich denke strategisch, handle klar'
    ];

    for (const text of a1b3TextBlocks) {
      const textElement = page.locator(`text=${text}`).first();
      await expect(textElement).toBeVisible({ timeout: 5000 });
      
      // Überprüfen, dass Text nicht leer ist
      const textContent = await textElement.textContent();
      expect(textContent).toBeTruthy();
      expect(textContent!.length).toBeGreaterThan(5);
    }

    // Überprüfen, dass unterstrichene Texte sichtbar sind
    const underlinedTexts = ['Sinn', 'Verbindung', 'Technologie', 'Potenzial', 'Prozesse', 'Haltung', 'Wirkung'];
    
    for (const text of underlinedTexts) {
      const underlinedElement = page.locator(`text=${text}`).first();
      await expect(underlinedElement).toBeVisible();
    }

    // Screenshot für visuellen Vergleich
    await page.screenshot({ 
      path: `test-results/a1b3-inner-compass-safari.png`,
      fullPage: false 
    });
  });

  test('A1B3 InnerCompass Font-Rendering auf Safari iPhone', async ({ page, browserName }) => {
    if (browserName !== 'webkit') {
      test.skip();
    }

    // iPhone Viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    await page.waitForLoadState('networkidle');

    // Zur InnerCompass scrollen
    await page.getByRole('heading', { name: 'Innerer Kompass' }).scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);

    // Überprüfen, dass Texte auf iPhone sichtbar sind
    const title = page.getByRole('heading', { name: 'Innerer Kompass' });
    await expect(title).toBeVisible();

    // Ersten Paragraph überprüfen
    const firstParagraph = page.locator('text=Ich glaube an Arbeit').first();
    await expect(firstParagraph).toBeVisible();

    // Font-Styles überprüfen
    const textStyles = await firstParagraph.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        fontFamily: computed.fontFamily,
        fontSize: computed.fontSize,
        color: computed.color,
        opacity: computed.opacity,
        display: computed.display
      };
    });

    expect(textStyles.fontFamily).toContain('Raleway');
    expect(parseFloat(textStyles.opacity)).toBeGreaterThan(0.9);
    expect(textStyles.display).not.toBe('none');

    console.log('A1B3 Font-Styles auf Safari iPhone:', textStyles);

    // Screenshot für iPhone Safari
    await page.screenshot({ 
      path: `test-results/a1b3-inner-compass-safari-iphone.png`,
      fullPage: false 
    });
  });

  test('A1B3 UnderlinedText funktioniert auf Safari', async ({ page, browserName }) => {
    if (browserName !== 'webkit') {
      test.skip();
    }

    await page.getByRole('heading', { name: 'Innerer Kompass' }).scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    // Unterstrichene Wörter finden und überprüfen
    const underlinedWords = ['Sinn', 'Verbindung', 'Technologie'];
    
    for (const word of underlinedWords) {
      const wordElement = page.locator(`text=${word}`).first();
      await expect(wordElement).toBeVisible();

      // Hover-Effekt testen (falls möglich)
      await wordElement.hover();
      await page.waitForTimeout(300);

      // Überprüfen, dass Element reagiert
      const styles = await wordElement.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return {
          position: computed.position,
          display: computed.display
        };
      });

      expect(styles.display).not.toBe('none');
    }
  });

  test('A1B3 Layout keine horizontalen Scrollbalken', async ({ page, browserName }) => {
    if (browserName !== 'webkit') {
      test.skip();
    }

    // Desktop
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.reload();
    await page.waitForLoadState('networkidle');

    let bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(1200 + 10);

    // Tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.reload();
    await page.waitForLoadState('networkidle');

    bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(768 + 10);

    // iPhone
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    await page.waitForLoadState('networkidle');

    bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(375 + 5);
  });

  test('A1B3 Vergleich zur normalen InnerCompass', async ({ page, browserName }) => {
    if (browserName !== 'webkit') {
      test.skip();
    }

    // A1B3 Version testen
    await page.goto('/a1b3');
    await page.waitForLoadState('networkidle');
    await page.getByRole('heading', { name: 'Innerer Kompass' }).scrollIntoViewIfNeeded();

    // A1B3 spezifischen Text überprüfen
    const a1b3SpecificText = page.locator('text=An Unternehmen, die Menschen dienen, nicht umgekehrt');
    await expect(a1b3SpecificText).toBeVisible();

    // Screenshot A1B3 Version
    await page.screenshot({ 
      path: `test-results/a1b3-inner-compass-content.png`,
      clip: { x: 0, y: 400, width: 1200, height: 600 }
    });

    // Zur normalen Version navigieren
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.getByRole('heading', { name: 'Innerer Kompass' }).scrollIntoViewIfNeeded();

    // Normal version spezifischen Text überprüfen
    const normalSpecificText = page.locator('text=An Unternehmen, die Menschen dienen – nicht umgekehrt');
    await expect(normalSpecificText).toBeVisible();

    // Screenshot normale Version
    await page.screenshot({ 
      path: `test-results/normal-inner-compass-content.png`,
      clip: { x: 0, y: 400, width: 1200, height: 600 }
    });

    console.log('A1B3 und normale InnerCompass Versionen erfolgreich getestet');
  });
});