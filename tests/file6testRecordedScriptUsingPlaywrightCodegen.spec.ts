import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.getByRole('textbox', { name: 'E mail' }).click();
  await page.getByRole('textbox', { name: 'E mail' }).fill('abc@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('12345');
  await page.getByRole('link', { name: 'Logo missing' }).click();
  await expect(page.getByText('Invalid User Name or PassWord')).toBeVisible();
});