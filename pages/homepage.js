const { expect } = require('@playwright/test');
const locators = require('../locators/homepageLocators.json');

class HomePage {
    constructor(page) {
        this.page = page;
    }

    // Navigate to the Telerik homepage
    async load() {
        await this.page.goto('https://www.telerik.com/');
    }

    // Accept the cookie consent by clicking the button
    async acceptCookieConsent() {
        const cookieConsentButton = await this.page.locator(locators.agreeAndContinueButton);
        await cookieConsentButton.click();
    }

    // Validate the visibility of the Telerik logo
    async validateTelerikLogo() {
        const logo = await this.page.locator(locators.telerikLogo);
        await expect(logo).toBeVisible();
    }

    // Validate the visibility of the "Demos" link
    async validateDemosLink() {
        const demosLink = await this.page.locator(locators.demosLink);
        await expect(demosLink).toBeVisible();
    }

    // Validate the visibility of the "Services" link
    async validateServicesLink() {
        const servicesLink = await this.page.locator(locators.servicesLink);
        await expect(servicesLink).toBeVisible();
    }

    // Validate the visibility of the "Blogs" link
    async validateBlogsLink() {
        const blogsLink = await this.page.locator(locators.blogsLink);
        await expect(blogsLink).toBeVisible();
    }

    // Validate the visibility of the "Docs and Support" link
    async validateDocsAndSupportLink() {
        const docsAndSupportLink = await this.page.locator(locators.docsAndSupportLink);
        await expect(docsAndSupportLink).toBeVisible();
    }

    // Validate the visibility of the search input field
    async validateSearchInput() {
        const searchInput = await this.page.locator(locators.searchInput);
        await expect(searchInput).toBeVisible();
    }

    // Validate the visibility of the "Pricing" link
    async validatePricingLink() {
        const pricingLink = await this.page.locator(locators.pricingLink);
        await expect(pricingLink).toBeVisible();
    }

    // Validate the visibility of the "Shopping Cart" link
    async validateShoppingCartLink() {
        const shoppingCartLink = await this.page.locator(locators.shoppingCartLink);
        await expect(shoppingCartLink).toBeVisible();
    }

    // Validate the visibility of the "Login" link
    async validateLoginLink() {
        const loginLink = await this.page.locator(locators.loginLink);
        await expect(loginLink).toBeVisible();
    }

    // Validate the visibility of the "Contact Us" link
    async validateContactUsLink() {
        const contactUsLink = await this.page.locator(locators.contactUsLink);
        await expect(contactUsLink).toBeVisible();
    }

    // Validate the visibility of the "Free Trial" link
    async validateFreeTrialLink() {
        const freeTrialLink = await this.page.locator(locators.freeTrialLink);
        await expect(freeTrialLink).toBeVisible();
    }

    // Validate that clicking the Telerik logo redirects to the homepage
    async validateTelerikLogoRedirection() {
        const logo = await this.page.locator(locators.telerikLogo);
        await logo.click();
        const currentUrl = await this.page.url();
        await expect(currentUrl).toBe('https://www.telerik.com/');
    }

    // Validate that clicking the "Free Trial" link navigates to the correct page
    async validateFreeTrialLinkNavigation() {
        const freeTrialLink = await this.page.locator(locators.freeTrialLink);
        await freeTrialLink.click();
        const currentUrl = await this.page.url();
        await expect(currentUrl).toContain('https://www.telerik.com/download');
    }

    // Validate the responsiveness of the page for different viewport sizes (Desktop, Tablet, Mobile)
    async validateResponsiveDesign() {
        const viewports = [
            { width: 1280, height: 1024 },  // Desktop
            { width: 768, height: 1024 },   // Tablet
            { width: 375, height: 667 },    // Mobile
        ];
        for (const viewport of viewports) {
            await this.page.setViewportSize(viewport);
            await this.page.reload();
            const isResponsive = await this.page.locator('body').isVisible();
            await expect(isResponsive).toBe(true);
        }
    }

    // Validate that each navigation link has a valid 'href' attribute
    async validateNavigationLinks() {
        const links = await this.page.locator(locators.navLinks);
        const count = await links.count();
        for (let i = 0; i < count; i++) {
            const link = await links.nth(i);
            const href = await link.getAttribute('href');
            await expect(href).not.toBeNull();
        }
    }

    // Validate that each footer link has a valid 'href' attribute
    async validateFooterLinks() {
        const footerLinks = await this.page.locator(locators.footerLinks);
        const count = await footerLinks.count();
        for (let i = 0; i < count; i++) {
            const link = await footerLinks.nth(i);
            const href = await link.getAttribute('href');
            await expect(href).not.toBeNull();
        }
    }

    // Validate that the cookie consent button disappears after it is clicked
    async validateCookieConsentButtonDisappears() {
        const cookieConsentButton = await this.page.locator(locators.agreeAndContinueButton);

        await cookieConsentButton.click();
        await this.page.waitForTimeout(500);  // Wait for 500ms
        await cookieConsentButton.waitFor({ state: 'hidden', timeout: 3000 });  // Wait for up to 3 seconds
        const isVisible = await cookieConsentButton.isVisible();

        await expect(isVisible).toBe(false);  // The button should now be hidden
    }

    // Validate that the page loads within a specified time (5 seconds)
    async validatePageLoadTime() {
        const startTime = Date.now();
        await this.load();
        const loadTime = Date.now() - startTime;
        console.log(`Page load time: ${loadTime}ms`);
        await expect(loadTime).toBeLessThan(5000); // Ensure page loads within 5 seconds
    }

    // Validate the presence of SEO meta tags on the page
    async validateSeoMetaTags() {
        const metaTag = await this.page.locator(locators.seoMetaTag);
        const description = await metaTag.getAttribute('content');
        expect(description).toContain('Save time building sleek web, mobile and desktop apps with professional .NET UI Components, JavaScript UI Libraries, Reporting and Automated Testing solutions.'); // Check if description contains 'Telerik'
    }
}

module.exports = HomePage;
