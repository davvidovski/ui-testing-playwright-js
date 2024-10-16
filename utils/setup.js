const { chromium } = require('playwright');

// Function to create and configure a browser driver for Playwright
async function createDriver() {
    // Launch a new Chromium browser instance in headless mode (invisible browser)
    const browser = await chromium.launch({
        headless: true,  // Run in headless mode for faster execution (set to false for visual testing)
        args: [
            '--no-sandbox',  // Disable the sandbox for running the browser in environments like CI
            '--disable-dev-shm-usage',  // Disable shared memory for better stability in resource-constrained environments
            '--disable-gpu',  // Disable GPU usage (often not needed in headless mode)
            '--start-maximized',  // Start the browser in maximized mode for consistent window size
        ],
    });

    // Create a new browser context (isolated environment, like a separate user session)
    const context = await browser.newContext();

    // Open a new page (tab) within the context
    const page = await context.newPage();

    // Return the page object, which can be used for performing actions and assertions in tests
    return page;
}

// Export the createDriver function for use in other test files
module.exports = { createDriver };
