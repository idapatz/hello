import { test, expect } from '@playwright/test';

test.describe('Safari Mobile - Kritische Elemente Sichtbarkeit A1B3', () => {
  test.beforeEach(async ({ page, browserName }) => {
    // Nur auf Safari/Webkit ausführen
    if (browserName !== 'webkit') {
      test.skip();
    }

    // iPhone Safari Mobile Viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3000/a1b3');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000); // Extra Zeit für Safari Mobile
  });

  test('NavBar ist sichtbar und funktional', async ({ page }) => {
    // Logo sichtbar
    const logo = page.locator('nav').getByText('ida patzelt', { exact: false });
    await expect(logo).toBeVisible();
    
    // Logo hat richtige Farbe (nicht transparent)
    const logoColor = await logo.evaluate((el) => {
      return window.getComputedStyle(el).color;
    });
    console.log('Logo Farbe:', logoColor);
    expect(logoColor).not.toBe('rgba(0, 0, 0, 0)'); // Nicht transparent
    
    // NavBar Container sichtbar
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    
    // NavBar hat Hintergrund
    const navBackground = await nav.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });
    console.log('NavBar Hintergrund:', navBackground);
    expect(navBackground).not.toBe('rgba(0, 0, 0, 0)'); // Nicht transparent
    
    // Screenshot der NavBar
    await page.screenshot({ 
      path: `test-results/safari-mobile-navbar-visible.png`,
      clip: { x: 0, y: 0, width: 375, height: 100 }
    });
    
    console.log('✅ NavBar ist auf Safari Mobile sichtbar');
  });

  test('Innerer Kompass Text ist vollständig sichtbar', async ({ page }) => {
    // Zur Innerer Kompass Sektion scrollen
    const compassSection = page.getByRole('heading', { name: 'Innerer Kompass' });
    await compassSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    
    // Titel sichtbar
    await expect(compassSection).toBeVisible();
    
    // Text-Container finden
    const textContent = page.locator('section').filter({ has: compassSection }).locator('div').filter({ hasText: 'Im Business gibt es viele' });
    await expect(textContent).toBeVisible();
    
    // Text Farbe überprüfen
    const textColor = await textContent.evaluate((el) => {
      return window.getComputedStyle(el).color;
    });
    console.log('Text Farbe:', textColor);
    expect(textColor).toContain('68, 103, 95'); // #68675f in RGB
    
    // Opacity überprüfen
    const textOpacity = await textContent.evaluate((el) => {
      return window.getComputedStyle(el).opacity;
    });
    console.log('Text Opacity:', textOpacity);
    expect(parseFloat(textOpacity)).toBeGreaterThan(0.9);
    
    // Spezifischen Text-Inhalt überprüfen
    const specificText = page.getByText('Im Business gibt es viele rationale Entscheidungen');
    await expect(specificText).toBeVisible();
    
    // Screenshot der Innerer Kompass Sektion
    await page.screenshot({ 
      path: `test-results/safari-mobile-innercompass-text-visible.png`,
      fullPage: false
    });
    
    console.log('✅ Innerer Kompass Text ist auf Safari Mobile sichtbar');
  });

  test('Engagement Section - Bilder und Text sind sichtbar', async ({ page }) => {
    // Zur Engagement Sektion scrollen
    const engagementSection = page.getByRole('heading', { name: 'Engagement' });
    await engagementSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000); // Extra Zeit für Bilder
    
    // Titel sichtbar
    await expect(engagementSection).toBeVisible();
    
    // Alle Verein-Logos überprüfen
    const vereinLogos = page.locator('img[alt*="Young Founders"], img[alt*="Machn"], img[alt*="Finanzfrauen"], img[alt*="Arbeitskreis"], img[alt*="Berater"]');
    const logoCount = await vereinLogos.count();
    console.log(`Gefundene Logos: ${logoCount}`);
    
    // Mindestens 3 Logos sollten sichtbar sein
    expect(logoCount).toBeGreaterThanOrEqual(3);
    
    // Jedes Logo einzeln überprüfen
    for (let i = 0; i < logoCount; i++) {
      const logo = vereinLogos.nth(i);
      await expect(logo).toBeVisible();
      
      // Logo-Container überprüfen
      const logoContainer = logo.locator('..');
      const containerDisplay = await logoContainer.evaluate((el) => {
        return window.getComputedStyle(el).display;
      });
      expect(containerDisplay).not.toBe('none');
      
      // Logo Opacity
      const logoOpacity = await logo.evaluate((el) => {
        return window.getComputedStyle(el).opacity;
      });
      expect(parseFloat(logoOpacity)).toBeGreaterThan(0.9);
    }
    
    // Verein-Namen überprüfen
    const vereinNames = page.locator('h3').filter({ hasText: /Young Founders|Machn|Finanzfrauen|Arbeitskreis|Berater/ });
    const nameCount = await vereinNames.count();
    console.log(`Gefundene Verein-Namen: ${nameCount}`);
    
    expect(nameCount).toBeGreaterThanOrEqual(3);
    
    // Namen Sichtbarkeit überprüfen
    for (let i = 0; i < Math.min(nameCount, 3); i++) {
      const name = vereinNames.nth(i);
      await expect(name).toBeVisible();
      
      const nameColor = await name.evaluate((el) => {
        return window.getComputedStyle(el).color;
      });
      expect(nameColor).toContain('68, 103, 95'); // #68675f in RGB
    }
    
    // Screenshot der Engagement Sektion
    await page.screenshot({ 
      path: `test-results/safari-mobile-engagement-images-text-visible.png`,
      fullPage: false
    });
    
    console.log('✅ Engagement Section Bilder und Text sind auf Safari Mobile sichtbar');
  });

  test('Alle kritischen Elemente auf einmal - Vollständige Seite', async ({ page }) => {
    // Full page screenshot für Gesamtübersicht
    await page.screenshot({ 
      path: `test-results/safari-mobile-a1b3-all-critical-elements.png`,
      fullPage: true
    });
    
    // Durch alle kritischen Bereiche scrollen und Screenshots machen
    const criticalSections = [
      { name: 'navbar', element: 'nav', scrollY: 0 },
      { name: 'innercompass', element: 'heading', text: 'Innerer Kompass' },
      { name: 'engagement', element: 'heading', text: 'Engagement' }
    ];
    
    for (const section of criticalSections) {
      if (section.scrollY !== undefined) {
        await page.evaluate((scrollY) => {
          window.scrollTo({ top: scrollY, behavior: 'smooth' });
        }, section.scrollY);
      } else {
        const element = page.getByRole(section.element as any, { name: section.text });
        await element.scrollIntoViewIfNeeded();
      }
      
      await page.waitForTimeout(1000);
      
      // Sektion-spezifischer Screenshot
      await page.screenshot({ 
        path: `test-results/safari-mobile-critical-${section.name}-detailed.png`,
        fullPage: false
      });
    }
    
    console.log('✅ Alle kritischen Elemente Screenshots erstellt');
  });

  test('CSS Hardware Acceleration - Alle kritischen Elemente', async ({ page }) => {
    const criticalElements = [
      { selector: 'nav', name: 'NavBar' },
      { selector: 'section h2', name: 'Section Headings' },
      { selector: 'img[alt*="Young"]', name: 'Engagement Images' }
    ];
    
    for (const element of criticalElements) {
      const el = page.locator(element.selector).first();
      if (await el.count() > 0) {
        await el.scrollIntoViewIfNeeded();
        
        const styles = await el.evaluate((el) => {
          const computed = window.getComputedStyle(el);
          return {
            transform: computed.transform,
            webkitTransform: computed.webkitTransform,
            willChange: computed.willChange,
            backfaceVisibility: computed.backfaceVisibility,
            display: computed.display,
            opacity: computed.opacity,
            visibility: computed.visibility
          };
        });
        
        console.log(`${element.name} CSS:`, styles);
        
        // Sichtbarkeit überprüfen
        expect(styles.display).not.toBe('none');
        expect(styles.visibility).not.toBe('hidden');
        expect(parseFloat(styles.opacity)).toBeGreaterThan(0.9);
        
        // Hardware Acceleration überprüfen
        const hasHardwareAcceleration = 
          styles.transform.includes('matrix3d') || 
          styles.transform.includes('translateZ') ||
          styles.webkitTransform.includes('matrix3d') ||
          styles.webkitTransform.includes('translateZ');
        
        if (!hasHardwareAcceleration && styles.transform !== 'none') {
          console.warn(`⚠️ ${element.name} hat möglicherweise keine Hardware-Beschleunigung`);
        }
      }
    }
    
    console.log('✅ Hardware Acceleration überprüft');
  });
});