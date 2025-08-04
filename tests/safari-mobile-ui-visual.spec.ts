import { test, expect } from '@playwright/test';

test.describe('Safari Mobile Visual UI Tests', () => {
  test('Visual test of Safari mobile UI - slow motion for inspection', async ({ page }) => {
    // Set viewport to iPhone 12 Pro dimensions
    await page.setViewportSize({ width: 390, height: 844 });
    
    // Navigate to the homepage
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    console.log('🌐 Page loaded successfully');
    await page.waitForTimeout(2000); // Wait for initial load
    
    // Test Hero Section
    console.log('📱 Testing Hero Section...');
    const heroSection = page.locator('#hero');
    await heroSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000); // Long pause to inspect
    
    // Test Skills Section
    console.log('🎯 Testing Skills Section...');
    const skillsSection = page.locator('#skills');
    await skillsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000); // Long pause to inspect
    
    // Check Skills cards
    const skillCards = skillsSection.locator('h3').locator('xpath=..');
    const skillCount = await skillCards.count();
    console.log(`✅ Found ${skillCount} skill cards`);
    
    // Hover over first skill card to see effects
    const firstSkillCard = skillCards.first();
    await firstSkillCard.hover();
    await page.waitForTimeout(2000);
    console.log('🎨 Hovered over first skill card');
    
    // Test Projects Section
    console.log('📋 Testing Projects Section...');
    const projectsSection = page.locator('#projects');
    await projectsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000); // Long pause to inspect
    
    // Check Projects cards
    const projectCards = projectsSection.locator('h3').locator('xpath=..');
    const projectCount = await projectCards.count();
    console.log(`✅ Found ${projectCount} project cards`);
    
    // Hover over first project card to see effects
    const firstProjectCard = projectCards.first();
    await firstProjectCard.hover();
    await page.waitForTimeout(2000);
    console.log('🎨 Hovered over first project card');
    
    // Test Engagement Section
    console.log('🤝 Testing Engagement Section...');
    const engagementSection = page.locator('#engagement');
    await engagementSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000); // Long pause to inspect
    
    // Check Engagement logos
    const logoImages = engagementSection.locator('img');
    const logoCount = await logoImages.count();
    console.log(`✅ Found ${logoCount} engagement logos`);
    
    // Test Work Timeline Section
    console.log('⏰ Testing Work Timeline Section...');
    const timelineSection = page.locator('#timeline');
    await timelineSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000); // Long pause to inspect
    
    // Test Contact Section
    console.log('📞 Testing Contact Section...');
    const contactSection = page.locator('#contact');
    await contactSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000); // Long pause to inspect
    
    // Scroll back to top
    console.log('⬆️ Scrolling back to top...');
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(2000);
    
    // Final visual check
    console.log('🔍 Final visual inspection...');
    await page.waitForTimeout(5000); // Long final pause
    
    console.log('✅ Visual test completed successfully!');
    
    // Take a screenshot for reference
    await page.screenshot({ 
      path: 'test-results/safari-mobile-visual-test.png',
      fullPage: true 
    });
    console.log('📸 Screenshot saved as safari-mobile-visual-test.png');
  });

  test('Interactive test - click and hover elements', async ({ page }) => {
    // Set viewport to iPhone 12 Pro dimensions
    await page.setViewportSize({ width: 390, height: 844 });
    
    // Navigate to the homepage
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    console.log('🎮 Starting interactive test...');
    await page.waitForTimeout(2000);
    
    // Test navigation links
    console.log('🧭 Testing navigation...');
    const navLinks = page.locator('nav a');
    const navCount = await navLinks.count();
    console.log(`Found ${navCount} navigation links`);
    
    // Hover over each navigation link
    for (let i = 0; i < Math.min(navCount, 3); i++) {
      const link = navLinks.nth(i);
      await link.hover();
      await page.waitForTimeout(1000);
      console.log(`Hovered over nav link ${i + 1}`);
    }
    
    // Test Skills section interaction
    console.log('🎯 Testing Skills interaction...');
    const skillsSection = page.locator('#skills');
    await skillsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    
    const skillCards = skillsSection.locator('h3').locator('xpath=..');
    for (let i = 0; i < Math.min(await skillCards.count(), 2); i++) {
      const card = skillCards.nth(i);
      await card.hover();
      await page.waitForTimeout(1500);
      console.log(`Hovered over skill card ${i + 1}`);
    }
    
    // Test Projects section interaction
    console.log('📋 Testing Projects interaction...');
    const projectsSection = page.locator('#projects');
    await projectsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    
    const projectCards = projectsSection.locator('h3').locator('xpath=..');
    for (let i = 0; i < Math.min(await projectCards.count(), 2); i++) {
      const card = projectCards.nth(i);
      await card.hover();
      await page.waitForTimeout(1500);
      console.log(`Hovered over project card ${i + 1}`);
    }
    
    // Test Engagement section interaction
    console.log('🤝 Testing Engagement interaction...');
    const engagementSection = page.locator('#engagement');
    await engagementSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    
    const logoLinks = engagementSection.locator('a');
    for (let i = 0; i < Math.min(await logoLinks.count(), 3); i++) {
      const link = logoLinks.nth(i);
      await link.hover();
      await page.waitForTimeout(1000);
      console.log(`Hovered over engagement logo ${i + 1}`);
    }
    
    console.log('✅ Interactive test completed!');
    
    // Take final screenshot
    await page.screenshot({ 
      path: 'test-results/safari-mobile-interactive-test.png',
      fullPage: true 
    });
    console.log('📸 Interactive test screenshot saved');
  });

  test('Responsive test - different mobile sizes', async ({ page }) => {
    const viewports = [
      { name: 'iPhone SE', width: 375, height: 667 },
      { name: 'iPhone 12 Pro', width: 390, height: 844 },
      { name: 'iPhone 11 Pro Max', width: 414, height: 896 }
    ];
    
    for (const viewport of viewports) {
      console.log(`📱 Testing ${viewport.name} (${viewport.width}x${viewport.height})...`);
      
      await page.setViewportSize(viewport);
      await page.goto('http://localhost:3000');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);
      
      // Scroll through all sections
      const sections = ['#hero', '#skills', '#projects', '#engagement', '#timeline', '#contact'];
      
      for (const sectionId of sections) {
        const section = page.locator(sectionId);
        if (await section.count() > 0) {
          await section.scrollIntoViewIfNeeded();
          await page.waitForTimeout(1500);
          console.log(`  ✅ ${sectionId} visible on ${viewport.name}`);
        }
      }
      
      // Take screenshot for this viewport
      await page.screenshot({ 
        path: `test-results/safari-mobile-${viewport.name.replace(' ', '-').toLowerCase()}.png`,
        fullPage: true 
      });
      
      await page.waitForTimeout(1000);
    }
    
    console.log('✅ Responsive test completed for all viewport sizes!');
  });
}); 