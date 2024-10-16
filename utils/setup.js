const { chromium } = require('playwright');

async function createDriver() {
    const browser = await chromium.launch({
        headless: true,  // Headless mode (set to false if you want to see the browser)
        args: [
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
            '--start-maximized',
        ],
    });

    const context = await browser.newContext();
    const page = await context.newPage();
    return page;  // Return page object to be used in tests
}

module.exports = { createDriver };
