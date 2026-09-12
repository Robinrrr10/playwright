import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('hfdahlda');
  await page.goto('https://www.google.com/');
});