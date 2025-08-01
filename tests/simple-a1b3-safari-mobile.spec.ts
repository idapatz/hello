import { test, expect } from '@playwright/test';

test.describe('Simple A1B3 Safari Mobile UI Test', () => {
  
  test('Zeige A1B3 Seite in Safari Mobile', async ({ page, browserName }) => {
    // Nur auf Safari/Webkit ausführen
    if (browserName !== 'webkit') {
      test.skip();
    }

    // iPhone Viewport setzen (Safari Mobile)
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Zur A1B3 Seite navigieren
    await page.goto('http://localhost:3000/a1b3');
    await page.waitForLoadState('networkidle');
    
    // Etwas warten damit alles geladen ist
    await page.waitForTimeout(2000);
    
    // Screenshot machen
    await page.screenshot({ 
      path: `test-results/a1b3-safari-mobile-ui.png`,
      fullPage: true 
    });
    
    // Basis-Check dass die Seite geladen ist
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    
    console.log('A1B3 Seite in Safari Mobile geladen - siehe Screenshot!');
  });

  test('A1B3 Safari Mobile - Langsam durch Seite scrollen', async ({ page, browserName }) => {
    if (browserName !== 'webkit') {
      test.skip();
    }

    // iPhone Viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3000/a1b3');
    await page.waitForLoadState('networkidle');
    
    // Langsam durch die Seite scrollen um alles zu sehen
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(1000);
    
    // Hero Section Screenshot
    await page.screenshot({ 
      path: `test-results/a1b3-safari-mobile-hero.png`,
      fullPage: false 
    });
    
    // Zu Skills scrollen
    await page.evaluate(() => window.scrollTo(0, window.innerHeight * 2));
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: `test-results/a1b3-safari-mobile-skills.png`,
      fullPage: false 
    });
    
    // Zu Innerer Kompass scrollen
    await page.evaluate(() => window.scrollTo(0, window.innerHeight * 3));
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: `test-results/a1b3-safari-mobile-innercompass.png`,
      fullPage: false 
    });
    
    // Zu Projects scrollen
    await page.evaluate(() => window.scrollTo(0, window.innerHeight * 4));
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: `test-results/a1b3-safari-mobile-projects.png`,
      fullPage: false 
    });
    
    // Zu Engagement scrollen
    await page.evaluate(() => window.scrollTo(0, window.innerHeight * 5));
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: `test-results/a1b3-safari-mobile-engagement.png`,
      fullPage: false 
    });
    
    console.log('A1B3 Safari Mobile - Alle Sektionen Screenshots erstellt!');
  });

  test('A1B3 Safari Mobile - Interaktiv durchklicken', async ({ page, browserName }) => {
    if (browserName !== 'webkit') {
      test.skip();
    }

    // iPhone Viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3000/a1b3');
    await page.waitForLoadState('networkidle');
    
    // Navigation testen (falls mobile menu vorhanden)
    const mobileMenuButton = page.locator('button').first();
    if (await mobileMenuButton.isVisible()) {
      await mobileMenuButton.click();
      await page.waitForTimeout(500);
      await page.screenshot({ 
        path: `test-results/a1b3-safari-mobile-menu.png`
      });
      
      // Menu wieder schließen
      await mobileMenuButton.click();
      await page.waitForTimeout(500);
    }
    
    // Zu verschiedenen Sektionen navigieren und dabei Screenshots machen
    const sections = ['Skills', 'Projects', 'Engagement'];
    
    for (let i = 0; i < sections.length; i++) {
      // Smooth scroll zu Sektion
      await page.evaluate((index) => {
        window.scrollTo({
          top: window.innerHeight * (index + 2),
          behavior: 'smooth'
        });
      }, i);
      
      await page.waitForTimeout(1500);
      
      await page.screenshot({ 
        path: `test-results/a1b3-safari-mobile-section-${i}.png`
      });
    }
    
    console.log('A1B3 Safari Mobile - Interaktive Navigation abgeschlossen!');
  });
});