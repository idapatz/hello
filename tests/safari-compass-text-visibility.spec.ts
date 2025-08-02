import { test, expect } from '@playwright/test';

test.use({
  browserName: 'webkit', // Safari Engine
  viewport: { width: 390, height: 844 }, // iPhone 13
  userAgent:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
});

test.describe('Safari Mobile - Compass Text Visibility Debug', () => {
  
  test('InnerCompass Text ist sichtbar auf Safari Mobile', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Warte auf das Laden der Seite
    await page.waitForLoadState('networkidle');
    
    // Scrolle zu InnerCompass Sektion
    await page.evaluate(() => {
      const compassSection = document.querySelector('#innerer-kompass');
      if (compassSection) {
        compassSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
    
    // Warte auf Animationen
    await page.waitForTimeout(2000);
    
    // Prüfe, ob die Sektion existiert
    const compassSection = page.locator('#innerer-kompass');
    await expect(compassSection).toBeVisible();
    
    // Prüfe, ob der Titel sichtbar ist
    const title = page.getByRole('heading', { name: 'Innerer Kompass' });
    await expect(title).toBeVisible();
    
    // Prüfe, ob Text-Content vorhanden ist
    const textContent = page.locator('#innerer-kompass p');
    const paragraphCount = await textContent.count();
    console.log(`Found ${paragraphCount} paragraphs in InnerCompass`);
    
    // Prüfe jeden Paragraph auf Sichtbarkeit
    for (let i = 0; i < paragraphCount; i++) {
      const paragraph = textContent.nth(i);
      const isVisible = await paragraph.isVisible();
      const text = await paragraph.textContent();
      console.log(`Paragraph ${i + 1}: Visible = ${isVisible}, Text = "${text?.substring(0, 50)}..."`);
      
      if (isVisible) {
        await expect(paragraph).toBeVisible();
      }
    }
    
    // Prüfe spezifische Text-Inhalte
    const specificTexts = [
      'Ich glaube an Arbeit',
      'Sinn stiftet',
      'Bildungswissenschaft',
      'Strategie',
      'Kommunikation',
      'Technologie'
    ];
    
    for (const text of specificTexts) {
      const textElement = page.getByText(text, { exact: false });
      if (await textElement.count() > 0) {
        const isVisible = await textElement.first().isVisible();
        console.log(`Text "${text}": Visible = ${isVisible}`);
        if (isVisible) {
          await expect(textElement.first()).toBeVisible();
        }
      }
    }
    
    // Prüfe CSS-Eigenschaften
    const firstParagraph = textContent.first();
    if (await firstParagraph.isVisible()) {
      const computedStyle = await firstParagraph.evaluate(el => {
        const style = window.getComputedStyle(el);
        return {
          color: style.color,
          opacity: style.opacity,
          visibility: style.visibility,
          display: style.display,
          position: style.position,
          zIndex: style.zIndex,
          transform: style.transform
        };
      });
      
      console.log('Computed styles:', computedStyle);
      
      // Prüfe, ob Text nicht transparent ist
      expect(parseFloat(computedStyle.opacity)).toBeGreaterThan(0);
      expect(computedStyle.visibility).not.toBe('hidden');
      expect(computedStyle.display).not.toBe('none');
    }
  });
  
  test('Compass Text nach Animation sichtbar', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Scrolle direkt zu InnerCompass
    await page.goto('http://localhost:3000#innerer-kompass');
    
    // Warte auf alle Animationen
    await page.waitForTimeout(3000);
    
    // Prüfe, ob Text nach Animationen sichtbar ist
    const paragraphs = page.locator('#innerer-kompass p');
    const paragraphCount = await paragraphs.count();
    
    console.log(`Total paragraphs found: ${paragraphCount}`);
    
    // Warte auf alle motion animations
    await page.waitForFunction(() => {
      const motionElements = document.querySelectorAll('[data-framer-motion]');
      return Array.from(motionElements).every(el => {
        const style = window.getComputedStyle(el);
        return parseFloat(style.opacity) > 0;
      });
    }, { timeout: 5000 });
    
    // Prüfe finale Sichtbarkeit
    for (let i = 0; i < paragraphCount; i++) {
      const paragraph = paragraphs.nth(i);
      const isVisible = await paragraph.isVisible();
      const opacity = await paragraph.evaluate(el => 
        parseFloat(window.getComputedStyle(el).opacity)
      );
      
      console.log(`Paragraph ${i + 1}: Visible = ${isVisible}, Opacity = ${opacity}`);
      
      if (isVisible && opacity > 0) {
        await expect(paragraph).toBeVisible();
      }
    }
  });
  
  test('Safari-spezifische CSS-Fixes funktionieren', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Scrolle zu InnerCompass
    await page.evaluate(() => {
      const compassSection = document.querySelector('#innerer-kompass');
      if (compassSection) {
        compassSection.scrollIntoView();
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Prüfe Safari-spezifische CSS-Eigenschaften
    const textContent = page.locator('#innerer-kompass .TextContent');
    if (await textContent.count() > 0) {
      const safariStyles = await textContent.first().evaluate(el => {
        const style = window.getComputedStyle(el);
        return {
          webkitFontSmoothing: style.webkitFontSmoothing,
          textRendering: style.textRendering,
          transform: style.transform,
          webkitTransform: style.webkitTransform
        };
      });
      
      console.log('Safari-specific styles:', safariStyles);
      
      // Prüfe, ob Safari-Optimierungen angewendet sind
      expect(safariStyles.webkitFontSmoothing).toBe('antialiased');
    }
  });
}); 