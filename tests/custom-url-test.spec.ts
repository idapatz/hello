import { test, expect } from '@playwright/test';

test.describe('Custom URL Tests', () => {
  // Hier können Sie JEDE beliebige URL eingeben!
  
  test('Teste Hauptseite localhost:3000/', async ({ page, browserName }) => {
    await page.goto('/');  // ← HIER URL ÄNDERN
    await page.waitForLoadState('networkidle');
    
    await page.screenshot({ 
      path: `test-results/custom-home-${browserName}.png`,
      fullPage: true 
    });
  });

  test('Teste A1B3 Seite localhost:3000/a1b3', async ({ page, browserName }) => {
    await page.goto('/a1b3');  // ← HIER URL ÄNDERN  
    await page.waitForLoadState('networkidle');
    
    await page.screenshot({ 
      path: `test-results/custom-a1b3-${browserName}.png`,
      fullPage: true 
    });
  });

  test('Teste Datenschutz localhost:3000/datenschutz', async ({ page, browserName }) => {
    await page.goto('/datenschutz');  // ← HIER URL ÄNDERN
    await page.waitForLoadState('networkidle');
    
    await page.screenshot({ 
      path: `test-results/custom-datenschutz-${browserName}.png`,
      fullPage: true 
    });
  });

  test('Teste Impressum localhost:3000/impressum', async ({ page, browserName }) => {
    await page.goto('/impressum');  // ← HIER URL ÄNDERN
    await page.waitForLoadState('networkidle');
    
    await page.screenshot({ 
      path: `test-results/custom-impressum-${browserName}.png`,
      fullPage: true 
    });
  });

  // Safari iPhone spezifisch
  test('Teste A1B3 auf Safari iPhone', async ({ page, browserName }) => {
    if (browserName !== 'webkit') {
      test.skip();
    }
    
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/a1b3');  // ← HIER URL ÄNDERN
    await page.waitForLoadState('networkidle');
    
    await page.screenshot({ 
      path: `test-results/custom-a1b3-safari-iphone.png`,
      fullPage: true 
    });
  });
});