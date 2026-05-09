import { test, expect } from '@playwright/test';

test('Assertion test', async ({ page }) => {
  await page.goto ('https://kitchen.applitools.com/')
  //await expect(page.locator('text=The Kitchen')).toHaveCount(1);
  await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible({ timeout: 15000 });
  await page.pause()
  await page.$('heading', { name: 'The Kitchen' })
});