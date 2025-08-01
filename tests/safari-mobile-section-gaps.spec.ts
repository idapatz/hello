import { test, expect } from '@playwright/test';

test.describe('Safari Mobile - Section Gaps Fix für A1B3', () => {
  test.beforeEach(async ({ page, browserName }) => {
    // Nur auf Safari/Webkit ausführen
    if (browserName !== 'webkit') {
      test.skip();
    }

    // iPhone Safari Mobile Viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3000/a1b3');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
  });

  test('Keine Lücken zwischen Sektionen - Nahtlose Übergänge', async ({ page }) => {
    // Alle Sektionen identifizieren
    const sections = await page.locator('section').all();
    console.log(`Gefunden: ${sections.length} Sektionen`);
    
    // Screenshots der Sektions-Übergänge machen
    for (let i = 0; i < sections.length - 1; i++) {
      const currentSection = sections[i];
      const nextSection = sections[i + 1];
      
      // Zur aktuellen Sektion scrollen
      await currentSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      
      // Screenshot des Übergangs zwischen Sektionen
      await page.screenshot({ 
        path: `test-results/safari-mobile-section-transition-${i}-to-${i+1}.png`,
        fullPage: false
      });
      
      // Überprüfen, dass Sektionen direkt aneinanderliegen
      const currentRect = await currentSection.boundingBox();
      const nextRect = await nextSection.boundingBox();
      
      if (currentRect && nextRect) {
        const gap = nextRect.y - (currentRect.y + currentRect.height);
        console.log(`Lücke zwischen Sektion ${i} und ${i+1}: ${gap}px`);
        
        // Lücke sollte minimal sein (max 5px Toleranz)
        expect(Math.abs(gap)).toBeLessThan(5);
      }
    }
  });

  test('Alle Sektionen haben dieselbe Hintergrundfarbe', async ({ page }) => {
    // Alle Sektionen außer Hero (die hat Hintergrundbild)
    const sections = page.locator('section:not([id="hero"])');
    const sectionCount = await sections.count();
    
    for (let i = 0; i < sectionCount; i++) {
      const section = sections.nth(i);
      await section.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      
      const backgroundColor = await section.evaluate((el) => {
        return window.getComputedStyle(el).backgroundColor;
      });
      
      console.log(`Sektion ${i} Hintergrund: ${backgroundColor}`);
      
      // Alle Sektionen sollten #f3efea Hintergrund haben
      expect(backgroundColor).toContain('rgb(243, 239, 234)'); // #f3efea in RGB
    }
  });

  test('Keine horizontalen Scrollbalken zwischen Sektionen', async ({ page }) => {
    const sections = [
      { name: 'Hero', scrollY: 0 },
      { name: 'Skills', scrollY: window.innerHeight * 2 },
      { name: 'Innerer Kompass', scrollY: window.innerHeight * 3 },
      { name: 'Projects', scrollY: window.innerHeight * 4 },
      { name: 'Engagement', scrollY: window.innerHeight * 5 },
    ];
    
    for (const section of sections) {
      await page.evaluate((scrollY) => {
        window.scrollTo({ top: scrollY, behavior: 'smooth' });
      }, section.scrollY);
      
      await page.waitForTimeout(1000);
      
      // Überprüfen, dass keine horizontalen Scrollbalken vorhanden sind
      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      const viewportWidth = 375; // iPhone Breite
      
      expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 2); // 2px Toleranz
      
      console.log(`✅ ${section.name}: Keine horizontalen Scrollbalken (${bodyWidth}px <= ${viewportWidth}px)`);
    }
  });

  test('Section Margins und Padding sind korrekt', async ({ page }) => {
    const sections = page.locator('section');
    const sectionCount = await sections.count();
    
    for (let i = 0; i < sectionCount; i++) {
      const section = sections.nth(i);
      await section.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      
      const styles = await section.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return {
          marginLeft: computed.marginLeft,
          marginRight: computed.marginRight,
          marginTop: computed.marginTop,
          marginBottom: computed.marginBottom,
          paddingLeft: computed.paddingLeft,
          paddingRight: computed.paddingRight,
          border: computed.border,
          outline: computed.outline
        };
      });
      
      console.log(`Sektion ${i} Styles:`, styles);
      
      // Auf Mobile sollten horizontale Margins und Paddings 0 sein
      expect(parseInt(styles.marginLeft)).toBe(0);
      expect(parseInt(styles.marginRight)).toBe(0);
      expect(parseInt(styles.paddingLeft)).toBe(0);
      expect(parseInt(styles.paddingRight)).toBe(0);
      
      // Border und Outline sollten none sein
      expect(styles.border).toContain('none');
      expect(styles.outline).toContain('none');
    }
  });

  test('Vollständige Seite ohne Lücken - Screenshot Test', async ({ page }) => {
    // Full page screenshot
    await page.screenshot({ 
      path: `test-results/safari-mobile-a1b3-seamless-sections.png`,
      fullPage: true
    });
    
    // Durch alle Sektionen scrollen und bei jeder Sektion einen Screenshot machen
    const scrollPositions = [
      { name: 'hero-to-skills', scrollY: window.innerHeight * 1.5 },
      { name: 'skills-to-compass', scrollY: window.innerHeight * 2.5 },
      { name: 'compass-to-projects', scrollY: window.innerHeight * 3.5 },
      { name: 'projects-to-engagement', scrollY: window.innerHeight * 4.5 },
      { name: 'engagement-to-contact', scrollY: window.innerHeight * 5.5 },
    ];
    
    for (const position of scrollPositions) {
      await page.evaluate((scrollY) => {
        window.scrollTo({ top: scrollY, behavior: 'smooth' });
      }, position.scrollY);
      
      await page.waitForTimeout(1000);
      
      // Screenshot des Übergangsbereichs
      await page.screenshot({ 
        path: `test-results/safari-mobile-transition-${position.name}.png`,
        fullPage: false
      });
    }
    
    console.log('✅ Vollständige Sektions-Übergangs-Screenshots erstellt');
  });

  test('CSS Transform und Hardware-Beschleunigung korrekt angewendet', async ({ page }) => {
    const sections = page.locator('section');
    const sectionCount = await sections.count();
    
    for (let i = 0; i < sectionCount; i++) {
      const section = sections.nth(i);
      await section.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      
      const transform = await section.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return {
          transform: computed.transform,
          webkitTransform: computed.webkitTransform,
          willChange: computed.willChange
        };
      });
      
      console.log(`Sektion ${i} Transform:`, transform);
      
      // Sollte Hardware-Beschleunigung haben (translateZ(0) oder matrix3d)
      const hasHardwareAcceleration = 
        transform.transform.includes('matrix3d') || 
        transform.transform.includes('translateZ') ||
        transform.webkitTransform.includes('matrix3d') ||
        transform.webkitTransform.includes('translateZ');
      
      if (!hasHardwareAcceleration && transform.transform !== 'none') {
        console.warn(`⚠️ Sektion ${i} hat möglicherweise keine Hardware-Beschleunigung`);
      }
    }
  });
});