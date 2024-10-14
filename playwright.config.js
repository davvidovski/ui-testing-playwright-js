module.exports = {
    workers: 3, // Run 3 tests in parallel
    timeout: 30000, // Global timeout for each test
    retries: 0, // Retry tests once if they fail
    use: {
      headless: true, // Run tests in non-headless mode (use true for CI)
      launchOptions: {
        slowMo: 50, // Slow down execution for debugging
      },
      contextOptions: {
        // Add specific context settings, like accepting cookies, etc.
      },
      viewport: { width: 1920, height: 1080 }, // Default browser viewport size
    },
    projects: [
      {
        name: 'chromium',
        use: { browserName: 'chromium' }, // Test in Chromium browser
      },
    ],
  };
  