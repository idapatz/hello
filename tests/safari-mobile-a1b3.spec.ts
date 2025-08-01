import { test, expect } from '@playwright/test';

test.describe('Safari Mobile A1B3 Tests', () => {
  
  test('A1B3 Seite in Safari Mobile anzeigen', async ({ page, browserName }) => {
    // Nur für Safari/Webkit ausführen
    if (browserName !== 'webkit') {
      test.skip();
    }

    // iPhone Viewport setzen
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Zur A1B3 Seite navigieren
    await page.goto('http://localhost:3000/a1b3');
    await page.waitForLoadState('networkidle');
    
    // Screenshot der ganzen Seite
    await page.screenshot({ 
      path: `test-results/safari-mobile-a1b3-full.png`,
      fullPage: true 
    });
    
    // Basis-Check: Seite ist geladen
    await expect(page).toHaveURL(/.*a1b3/);
    
    console.log('✅ A1B3 Seite in Safari Mobile geladen');
  });

  test('A1B3 Innerer Kompass in Safari Mobile', async ({ page, browserName }) => {
    // Nur für Safari/Webkit ausführen
    if (browserName !== 'webkit') {
      test.skip();
    }

    // iPhone Viewport setzen
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Zur A1B3 Seite navigieren
    await page.goto('http://localhost:3000/a1b3');
    await page.waitForLoadState('networkidle');
    
    // Zur Innerer Kompass Sektion scrollen
    await page.getByRole('heading', { name: 'Innerer Kompass' }).scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000); // Animationen abwarten
    
    // Screenshot der Innerer Kompass Sektion
    await page.screenshot({ 
      path: `test-results/safari-mobile-a1b3-innercompass.png`,
      clip: { x: 0, y: 0, width: 375, height: 600 }
    });
    
    // Überprüfen, dass der Titel sichtbar ist
    const title = page.getByRole('heading', { name: 'Innerer Kompass' });
    await expect(title).toBeVisible();
    
    // Ersten Text-Block überprüfen
    const firstText = page.locator('text=Ich glaube an Arbeit, die Sinn stiftet').first();
    await expect(firstText).toBeVisible();
    
    console.log('✅ Innerer Kompass Sektion in Safari Mobile sichtbar');
  });

  test('A1B3 Navigation in Safari Mobile', async ({ page, browserName }) => {
    // Nur für Safari/Webkit ausführen
    if (browserName !== 'webkit') {
      test.skip();
    }

    // iPhone Viewport setzen
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Zur A1B3 Seite navigieren
    await page.goto('http://localhost:3000/a1b3');
    await page.waitForLoadState('networkidle');
    
    // Navigation sollte sichtbar sein
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    
    // Screenshot der Navigation
    await page.screenshot({ 
      path: `test-results/safari-mobile-a1b3-nav.png`,
      clip: { x: 0, y: 0, width: 375, height: 100 }
    });
    
    console.log('✅ Navigation in Safari Mobile funktioniert');
  });

  test('A1B3 Alle Sektionen durchscrollen', async ({ page, browserName }) => {
    // Nur für Safari/Webkit ausführen
    if (browserName !== 'webkit') {
      test.skip();
    }

    // iPhone Viewport setzen
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Zur A1B3 Seite navigieren
    await page.goto('http://localhost:3000/a1b3');
    await page.waitForLoadState('networkidle');
    
    // Durch alle wichtigen Sektionen scrollen
    const sections = [
      'Innerer Kompass',
      'Engagement'
    ];
    
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      
      try {
        // Zur Sektion scrollen
        await page.getByRole('heading', { name: section }).scrollIntoViewIfNeeded();
        await page.waitForTimeout(1500);
        
        // Screenshot der Sektion
        await page.screenshot({ 
          path: `test-results/safari-mobile-a1b3-section-${i}-${section.toLowerCase().replace(' ', '-')}.png`,
          clip: { x: 0, y: 0, width: 375, height: 600 }
        });
        
        console.log(`✅ Sektion "${section}" in Safari Mobile sichtbar`);
      } catch (error) {
        console.log(`⚠️ Sektion "${section}" nicht gefunden`);
      }
    }
    
    // Final screenshot am Ende der Seite
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);
    
    await page.screenshot({ 
      path: `test-results/safari-mobile-a1b3-bottom.png`,
      clip: { x: 0, y: 0, width: 375, height: 600 }
    });
  });
});