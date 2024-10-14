# UI Testing with Playwright and POM Structure

This repository contains UI tests using [Playwright](https://playwright.dev/) with a Page Object Model (POM) structure. The tests are written in JavaScript and leverage Playwright's capabilities for web automation.

## Project Overview

- **Project Name**: `ui-testing-playwright-js`
- **Version**: `1.0.0`
- **Description**: This project automates UI tests using Playwright with a Page Object Model (POM) structure, making tests more reusable and maintainable.

## Requirements

Ensure that you have the following installed:

- Node.js (version 16 or above)
- npm (Node Package Manager)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ui-testing-playwright-js.git
cd ui-testing-playwright-js

### 2. Install Dependencies
Run the following command to install all required dependencies:

```bash
npm install

### 3. Install PLaywright browsers

```bash
npx playwright install
 
## Running Tests

To run the Playwright tests, use the following command:

```bash
npm run test

## Viewing Test Results

Once tests have run, Playwright will generate test results. You can view detailed results, including screenshots and traces, if configured.

## Generating Test Reports

To generate HTML reports after running your tests, you can enable the reporter in your playwright.config.js file:

```javascript
reporters: [['html']],

You can view the report after running tests:

```bash
npx playwright show-report

## Project Structure

```bash
.
├── pages/                # Page Object Models (POM)
│   ├── homepage.js       # Home page actions and locators
│   └── ...
├── tests/                # Test files
│   ├── testHomepage.spec.js   # Example test file for the homepage
│   └── ...
├── locators/               
│   ├── locators.json     # JSON file containing locators for different page elements
├── playwright.config.js  # Playwright configuration
├── package.json          # Project configuration and dependencies
└── README.md             # Project documentation

##Configuration

You can configure the following in the playwright.config.js file:

- Browsers: Run tests on different browsers (Chromium, Firefox, WebKit).
- Headless Mode: Toggle headless mode for faster test runs.
- Parallel Tests: Configure the number of parallel workers.
- Retries: Configure retries for failed tests.
- Timeouts: Set global or per-test timeouts.

## Continuous Integration (CI)

You can integrate the tests with CI/CD pipelines using platforms like GitHub Actions. A sample configuration is provided in .github/workflows/playwright.yml.

## Dependencies

- Playwright: ^1.20.0
- @playwright/test: ^1.48.0