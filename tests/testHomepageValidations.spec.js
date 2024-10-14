const { test, expect, chromium } = require('@playwright/test');
const HomePage = require('../pages/homepage');  // Import the HomePage class
const fs = require('fs');
const path = require('path');

test.describe('Telerik Homepage Tests', () => {
  let browser, context, page, homePage;

  test.beforeEach(async () => {
    browser = await chromium.launch();
    context = await browser.newContext(); // Use a new browser context
    page = await context.newPage();
    homePage = new HomePage(page);  // Initialize the HomePage object
  });

  test.afterEach(async () => {
    if (test.info().status === 'failed') {
      const screenshotDir = './error-screenshots';
      if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir);
      }
      const timestamp = new Date().toISOString().replace(/:/g, "-");
      const screenshotPath = path.join(screenshotDir, `test-fail-${timestamp}.png`);
      await page.screenshot({ path: screenshotPath });
      console.log(`Screenshot saved to ${screenshotPath}`);
    }
    await context.close(); // Close the browser context, not the browser itself
    await browser.close();
  });

  test('should load the home page and validate title and URL', async () => {
    await homePage.load();
    const currentUrl = await page.url();
    expect(currentUrl).toBe('https://www.telerik.com/');

    const pageTitle = await page.title();
    expect(pageTitle).toContain('Telerik & Kendo UI');
  });

  test('should accept cookie consent', async () => {
    await homePage.load();
    await homePage.acceptCookieConsent();
    // Optionally validate the absence of the cookie consent button to confirm acceptance
  });

  test('should validate Telerik logo visibility', async () => {
    await homePage.load();
    await homePage.validateTelerikLogo();
  });

  test('should validate demos link visibility', async () => {
    await homePage.load();
    await homePage.validateDemosLink();
  });

  test('should validate services link visibility', async () => {
    await homePage.load();
    await homePage.validateServicesLink();
  });

  test('should validate blogs link visibility', async () => {
    await homePage.load();
    await homePage.validateBlogsLink();
  });

  test('should validate docs and support link visibility', async () => {
    await homePage.load();
    await homePage.validateDocsAndSupportLink();
  });

  test('should validate pricing link visibility', async () => {
    await homePage.load();
    await homePage.validatePricingLink();
  });

  test('should validate search input visibility', async () => {
    await homePage.load();
    await homePage.validateSearchInput();
  });

  test('should validate shopping cart link visibility', async () => {
    await homePage.load();
    await homePage.validateShoppingCartLink();
  });

  test('should validate login link visibility', async () => {
    await homePage.load();
    await homePage.validateLoginLink();
  });

  test('should validate contact us link visibility', async () => {
    await homePage.load();
    await homePage.validateContactUsLink();
  });

  test('should validate free trial link visibility', async () => {
    await homePage.load();
    await homePage.validateFreeTrialLink();
  });

  test('should validate Telerik logo redirection', async () => {
    await homePage.load();
    await homePage.validateTelerikLogoRedirection();
  });

  test('should validate free trial link navigation', async () => {
    await homePage.load();
    await homePage.validateFreeTrialLinkNavigation();
  });

  test('should validate responsive design', async () => {
    await homePage.load();
    await homePage.validateResponsiveDesign();
  });

  test('should validate navigation links', async () => {
    await homePage.load();
    await homePage.validateNavigationLinks();
  });

  test('should validate footer links', async () => {
    await homePage.load();
    await homePage.validateFooterLinks();
  });

  test('should validate cookie consent button disappearance', async () => {
    await homePage.load();
    await homePage.validateCookieConsentButtonDisappears();
  });

  test('should validate page load time', async () => {
    await homePage.validatePageLoadTime();
  });

  test('should validate SEO meta tags', async () => {
    await homePage.load();
    await homePage.validateSeoMetaTags();
  });

});
