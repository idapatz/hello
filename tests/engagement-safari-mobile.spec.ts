import { test, expect } from '@playwright/test';

test.use({
  browserName: 'webkit', // Safari Engine
  viewport: { width: 390, height: 844 }, // iPhone 13
  userAgent:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
});

test('Engagement-Sektion sichtbar auf Mobile Safari bei /a1b3', async ({ page }) => {
  await page.goto('http://localhost:3000/a1b3');

  // Prüfe, ob die Überschrift "Engagement" sichtbar ist
  const heading = page.getByRole('heading', { name: 'Engagement' });
  await expect(heading).toBeVisible();

  // Prüfe, ob z. B. das Logo vom Machn Festival sichtbar ist
  const machnImage = page.locator('img[alt="Machn Festival"]'); // Passe den alt-Text ggf. an
  await expect(machnImage).toBeVisible();
}); 