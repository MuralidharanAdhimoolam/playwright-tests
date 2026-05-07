// spec: test-plans/demo-applitools-login.plan.md
// seed: tests/seed.spec.ts

const { test, expect } = require('@playwright/test');

test.describe('Login Page Functional Tests', () => {
  test('Remember Me Checkbox Functionality', async ({ page }) => {
    // 1. Navigate to https://demo.applitools.com/
    await page.goto('https://demo.applitools.com/');

    // 2. Check the 'Remember Me' checkbox.
    await page.getByRole('checkbox', { name: 'Remember Me' }).click();
    await expect(page.getByRole('checkbox', { name: 'Remember Me' })).toBeChecked();

    // 3. Enter valid credentials and click 'Sign in'.
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('demo');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('demo');
    await page.getByRole('link', { name: 'Sign in' }).click();

    // Verify user is redirected to the dashboard
    await expect(page).toHaveURL(/.*app.html/);
    await expect(page.getByRole('link', { name: 'ACME' })).toBeVisible();
  });
});
