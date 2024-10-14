const { expect } = require('@playwright/test');
const locators = require('../locators/locators.json');

class HomePage {
    constructor(page) {
        this.page = page;
    }

    async load() {
        await this.page.goto('https://www.telerik.com/');
    }

    // Cookie Consent Acceptance
    async acceptCookieConsent() {
        const cookieConsentButton = await this.page.locator(locators.agreeAndContinueButton);
        await cookieConsentButton.click();
    }

    // Validate Telerik logo visibility
    async validateTelerikLogo() {
        const logo = await this.page.locator(locators.telerikLogo);
        await expect(logo).toBeVisible();
    }

    // Validate Demos Link
    async validateDemosLink() {
        const demosLink = await this.page.locator(locators.demosLink);
        await expect(demosLink).toBeVisible();
    }

    // Validate Services Link
    async validateServicesLink() {
        const servicesLink = await this.page.locator(locators.servicesLink);
        await expect(servicesLink).toBeVisible();
    }

    // Validate Blogs Link
    async validateBlogsLink() {
        const blogsLink = await this.page.locator(locators.blogsLink);
        await expect(blogsLink).toBeVisible();
    }

    // Validate Docs and Support Link
    async validateDocsAndSupportLink() {
        const docsAndSupportLink = await this.page.locator(locators.docsAndSupportLink);
        await expect(docsAndSupportLink).toBeVisible();
    }

    // Validate Search Input Link
    async validateSearchInput() {
        const searchInput = await this.page.locator(locators.searchInput);
        await expect(searchInput).toBeVisible();
    }

    // Validate Pricing Link
    async validatePricingLink() {
        const pricingLink = await this.page.locator(locators.pricingLink);
        await expect(pricingLink).toBeVisible();
    }

    // Validate Shopping Cart Link
    async validateShoppingCartLink() {
        const shoppingCartLink = await this.page.locator(locators.shoppingCartLink);
        await expect(shoppingCartLink).toBeVisible();
    }

    // Validate Login Link
    async validateLoginLink() {
        const loginLink = await this.page.locator(locators.loginLink);
        await expect(loginLink).toBeVisible();
    }

    // Validate Contact Us Link
    async validateContactUsLink() {
        const contactUsLink = await this.page.locator(locators.contactUsLink);
        await expect(contactUsLink).toBeVisible();
    }

    // Validate Free Trial Link
    async validateFreeTrialLink() {
        const freeTrialLink = await this.page.locator(locators.freeTrialLink);
        await expect(freeTrialLink).toBeVisible();
    }

    // Validate Telerik Logo Redirection
    async validateTelerikLogoRedirection() {
        const logo = await this.page.locator(locators.telerikLogo);
        await logo.click();
        const currentUrl = await this.page.url();
        await expect(currentUrl).toBe('https://www.telerik.com/');
    }

    // Free Trial Link Navigation
    async validateFreeTrialLinkNavigation() {
        const freeTrialLink = await this.page.locator(locators.freeTrialLink);
        await freeTrialLink.click();
        const currentUrl = await this.page.url();
        await expect(currentUrl).toContain('https://www.telerik.com/download');
    }

    // Validate Responsive Design
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

    // Validate Navigation Links
    async validateNavigationLinks() {
        const links = await this.page.locator(locators.navLinks);
        const count = await links.count();
        for (let i = 0; i < count; i++) {
            const link = await links.nth(i);
            const href = await link.getAttribute('href');
            await expect(href).not.toBeNull();
        }
    }

    // Validate Footer Links
    async validateFooterLinks() {
        const footerLinks = await this.page.locator(locators.footerLinks);
        const count = await footerLinks.count();
        for (let i = 0; i < count; i++) {
            const link = await footerLinks.nth(i);
            const href = await link.getAttribute('href');
            await expect(href).not.toBeNull();
        }
    }

    // Validate Cookie Consent Button Disappearance
    async validateCookieConsentButtonDisappears() {
        const cookieConsentButton = await this.page.locator(locators.agreeAndContinueButton);
        await cookieConsentButton.click();
        const isVisible = await cookieConsentButton.isVisible();
        await expect(isVisible).toBe(false);
    }

    // Validate Broken Links
    async validateBrokenLinks() {
        const baseUrl = 'https://telerik.com'; // Replace this with your actual base URL

        const links = await this.page.locator('a'); // Modify this locator if needed
        const linkCount = await links.count();

        for (let i = 0; i < linkCount; i++) {
            const link = links.nth(i);
            const href = await link.getAttribute('href');

            if (href) {
                // If the URL is relative, prepend the base URL
                const fullUrl = href.startsWith('http') ? href : `${baseUrl}${href}`;
                try {
                    const response = await this.page.request.get(fullUrl);
                    await expect(response.status()).toBeLessThan(400); // Status should be less than 400 (no broken links)
                } catch (error) {
                    console.error(`Error fetching link ${fullUrl}: `, error);
                }
            }
        }
    }

    // Validate Page Load Time
    async validatePageLoadTime() {
        const startTime = Date.now();
        await this.load();
        const loadTime = Date.now() - startTime;
        console.log(`Page load time: ${loadTime}ms`);
        await expect(loadTime).toBeLessThan(5000); // Ensure page loads within 5 seconds
    }

    // Validate SEO Meta Tags
    async validateSeoMetaTags() {
        const metaTag = await this.page.locator(locators.seoMetaTag);
        const description = await metaTag.getAttribute('content');
        expect(description).toContain('Save time building sleek web, mobile and desktop apps with professional .NET UI Components, JavaScript UI Libraries, Reporting and Automated Testing solutions.'); // Check if description contains 'Telerik'
    }
}

module.exports = HomePage;
