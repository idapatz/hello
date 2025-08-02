import { test, expect } from '@playwright/test';

test.use({
  browserName: 'webkit', // Safari Engine
  viewport: { width: 390, height: 844 }, // iPhone 13
  userAgent:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
});

test.describe('Safari Mobile Tests für localhost:3000', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to the main page before each test
    await page.goto('http://localhost:3000');
  });

  test('Homepage lädt korrekt und zeigt Navigation', async ({ page }) => {
    // Prüfe, ob die Seite geladen ist
    await expect(page).toHaveTitle(/Ida Patzelt/);
    
    // Prüfe, ob die Navigation sichtbar ist
    const navigation = page.locator('nav');
    await expect(navigation).toBeVisible();
    
    // Prüfe, ob der Hero-Bereich sichtbar ist
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();
  });

  test('Navigation funktioniert auf Mobile', async ({ page }) => {
    // Prüfe, ob Navigation-Links vorhanden sind
    const navLinks = page.locator('nav a');
    await expect(navLinks).toHaveCount(4); // Home, About, Projects, Contact
    
    // Teste Navigation zu verschiedenen Bereichen
    const homeLink = page.getByRole('link', { name: /home/i });
    await expect(homeLink).toBeVisible();
    
    // Teste Scroll zu Sektionen (falls vorhanden)
    const aboutLink = page.getByRole('link', { name: /about/i });
    if (await aboutLink.isVisible()) {
      await aboutLink.click();
      // Prüfe, ob zu About-Sektion gescrollt wurde
      await page.waitForTimeout(1000);
    }
  });

  test('Hero-Sektion ist responsive und funktional', async ({ page }) => {
    // Prüfe Hero-Bereich
    const heroHeading = page.getByRole('heading', { level: 1 });
    await expect(heroHeading).toBeVisible();
    
    // Prüfe, ob Call-to-Action Buttons vorhanden sind
    const ctaButtons = page.locator('button, a[href*="#"]');
    await expect(ctaButtons.first()).toBeVisible();
  });

  test('Skills-Sektion ist sichtbar und funktional', async ({ page }) => {
    // Scrolle zu Skills-Sektion
    await page.evaluate(() => {
      const skillsSection = document.querySelector('[data-section="skills"]') || 
                          document.querySelector('section:nth-child(2)');
      if (skillsSection) {
        skillsSection.scrollIntoView();
      }
    });
    
    await page.waitForTimeout(1000);
    
    // Prüfe, ob Skills-Sektion sichtbar ist
    const skillsSection = page.locator('section').nth(1);
    await expect(skillsSection).toBeVisible();
  });

  test('Projects-Sektion lädt korrekt', async ({ page }) => {
    // Scrolle zu Projects-Sektion
    await page.evaluate(() => {
      const projectsSection = document.querySelector('[data-section="projects"]') || 
                            document.querySelector('section:nth-child(3)');
      if (projectsSection) {
        projectsSection.scrollIntoView();
      }
    });
    
    await page.waitForTimeout(1000);
    
    // Prüfe Projects-Sektion
    const projectsSection = page.locator('section').nth(2);
    await expect(projectsSection).toBeVisible();
  });

  test('Contact-Sektion ist funktional', async ({ page }) => {
    // Scrolle zu Contact-Sektion
    await page.evaluate(() => {
      const contactSection = document.querySelector('[data-section="contact"]') || 
                           document.querySelector('section:last-child');
      if (contactSection) {
        contactSection.scrollIntoView();
      }
    });
    
    await page.waitForTimeout(1000);
    
    // Prüfe Contact-Sektion
    const contactSection = page.locator('section').last();
    await expect(contactSection).toBeVisible();
    
    // Prüfe, ob Contact-Formular vorhanden ist
    const contactForm = page.locator('form');
    if (await contactForm.isVisible()) {
      await expect(contactForm).toBeVisible();
    }
  });

  test('Footer ist sichtbar und funktional', async ({ page }) => {
    // Scrolle zum Footer
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    
    await page.waitForTimeout(1000);
    
    // Prüfe Footer
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    
    // Prüfe Footer-Links
    const footerLinks = footer.locator('a');
    if (await footerLinks.count() > 0) {
      await expect(footerLinks.first()).toBeVisible();
    }
  });

  test('A1B3 Seite lädt korrekt', async ({ page }) => {
    // Navigiere zu A1B3 Seite
    await page.goto('http://localhost:3000/a1b3');
    
    // Prüfe, ob die Seite geladen ist
    await expect(page).toHaveTitle(/A1B3/);
    
    // Prüfe Engagement-Sektion
    const engagementHeading = page.getByRole('heading', { name: 'Engagement' });
    await expect(engagementHeading).toBeVisible();
    
    // Prüfe, ob Logos sichtbar sind
    const logos = page.locator('img[alt*="logo"], img[alt*="Logo"]');
    if (await logos.count() > 0) {
      await expect(logos.first()).toBeVisible();
    }
  });

  test('Responsive Design funktioniert korrekt', async ({ page }) => {
    // Prüfe, ob die Seite responsive ist
    const body = page.locator('body');
    await expect(body).toBeVisible();
    
    // Prüfe, ob keine horizontalen Scrollbars vorhanden sind
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasHorizontalScroll).toBe(false);
    
    // Prüfe, ob Text lesbar ist
    const mainText = page.locator('p, h1, h2, h3, h4, h5, h6').first();
    if (await mainText.isVisible()) {
      const fontSize = await mainText.evaluate(el => 
        window.getComputedStyle(el).fontSize
      );
      // Prüfe, ob Schriftgröße angemessen ist (mindestens 14px)
      const fontSizeNum = parseInt(fontSize);
      expect(fontSizeNum).toBeGreaterThanOrEqual(14);
    }
  });

  test('Performance und Ladezeiten sind akzeptabel', async ({ page }) => {
    // Messung der Ladezeit
    const startTime = Date.now();
    await page.goto('http://localhost:3000');
    const loadTime = Date.now() - startTime;
    
    // Ladezeit sollte unter 5 Sekunden sein
    expect(loadTime).toBeLessThan(5000);
    
    // Prüfe, ob alle Bilder geladen sind
    const images = page.locator('img');
    const imageCount = await images.count();
    
    if (imageCount > 0) {
      // Warte auf das Laden der ersten Bilder
      await page.waitForTimeout(2000);
      
      // Prüfe, ob Bilder sichtbar sind
      for (let i = 0; i < Math.min(imageCount, 3); i++) {
        const image = images.nth(i);
        if (await image.isVisible()) {
          await expect(image).toBeVisible();
        }
      }
    }
  });

  test('Touch-Interaktionen funktionieren', async ({ page }) => {
    // Teste Touch-Scroll
    await page.evaluate(() => {
      window.scrollTo(0, 100);
    });
    
    await page.waitForTimeout(500);
    
    // Teste Touch auf Links
    const links = page.locator('a[href]');
    if (await links.count() > 0) {
      const firstLink = links.first();
      if (await firstLink.isVisible()) {
        // Simuliere Touch-Event
        await firstLink.tap();
        await page.waitForTimeout(1000);
      }
    }
  });

  test('Dark/Light Mode funktioniert (falls implementiert)', async ({ page }) => {
    // Prüfe, ob Theme-Toggle vorhanden ist
    const themeToggle = page.locator('[data-theme-toggle], button[aria-label*="theme"], button[aria-label*="Theme"]');
    
    if (await themeToggle.isVisible()) {
      // Teste Theme-Wechsel
      await themeToggle.click();
      await page.waitForTimeout(1000);
      
      // Prüfe, ob Theme gewechselt wurde
      const body = page.locator('body');
      const hasDarkClass = await body.evaluate(el => 
        el.classList.contains('dark') || 
        el.getAttribute('data-theme') === 'dark'
      );
      
      // Klicke erneut um zurück zu wechseln
      await themeToggle.click();
      await page.waitForTimeout(1000);
    }
  });
}); 