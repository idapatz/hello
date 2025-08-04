import { test, expect } from '@playwright/test';

test.describe('Safari Mobile Simple Visual Test', () => {
  test('Simple visual inspection of Safari mobile UI', async ({ page }) => {
    // Set viewport to iPhone 12 Pro dimensions
    await page.setViewportSize({ width: 390, height: 844 });
    
    // Navigate to the homepage
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    console.log('🌐 Page loaded successfully');
    console.log('📱 Safari Mobile viewport: 390x844');
    
    // Wait for initial load
    await page.waitForTimeout(3000);
    
    // Take initial screenshot
    await page.screenshot({ 
      path: 'test-results/safari-mobile-initial.png',
      fullPage: true 
    });
    console.log('📸 Initial screenshot saved');
    
    // Scroll down slowly to see all sections
    console.log('⬇️ Scrolling through page...');
    
    // Scroll to Skills section
    await page.evaluate(() => {
      const skillsSection = document.querySelector('#skills');
      if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
    await page.waitForTimeout(3000);
    
    // Take screenshot of Skills section
    await page.screenshot({ 
      path: 'test-results/safari-mobile-skills-section.png',
      fullPage: true 
    });
    console.log('📸 Skills section screenshot saved');
    
    // Scroll to Projects section
    await page.evaluate(() => {
      const projectsSection = document.querySelector('#projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
    await page.waitForTimeout(3000);
    
    // Take screenshot of Projects section
    await page.screenshot({ 
      path: 'test-results/safari-mobile-projects-section.png',
      fullPage: true 
    });
    console.log('📸 Projects section screenshot saved');
    
    // Scroll to Engagement section
    await page.evaluate(() => {
      const engagementSection = document.querySelector('#engagement');
      if (engagementSection) {
        engagementSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
    await page.waitForTimeout(3000);
    
    // Take screenshot of Engagement section
    await page.screenshot({ 
      path: 'test-results/safari-mobile-engagement-section.png',
      fullPage: true 
    });
    console.log('📸 Engagement section screenshot saved');
    
    // Scroll to bottom
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await page.waitForTimeout(2000);
    
    // Take final screenshot
    await page.screenshot({ 
      path: 'test-results/safari-mobile-final.png',
      fullPage: true 
    });
    console.log('📸 Final screenshot saved');
    
    // Scroll back to top
    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(2000);
    
    console.log('✅ Visual test completed!');
    console.log('📁 Screenshots saved in test-results/ folder');
  });

  test('Quick responsive test', async ({ page }) => {
    const viewports = [
      { name: 'iPhone SE', width: 375, height: 667 },
      { name: 'iPhone 12 Pro', width: 390, height: 844 },
      { name: 'iPhone 11 Pro Max', width: 414, height: 896 }
    ];
    
    for (const viewport of viewports) {
      console.log(`📱 Testing ${viewport.name}...`);
      
      await page.setViewportSize(viewport);
      await page.goto('http://localhost:3000');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);
      
      // Take screenshot for this viewport
      await page.screenshot({ 
        path: `test-results/safari-mobile-${viewport.name.replace(' ', '-').toLowerCase()}.png`,
        fullPage: true 
      });
      
      console.log(`  ✅ Screenshot saved for ${viewport.name}`);
      await page.waitForTimeout(1000);
    }
    
    console.log('✅ Responsive test completed!');
  });
}); 