import {test, expect} from '@playwright/test';

test('Open demo automation site and verify', async({page}) =>{
    await page.goto('https://demo.automationtesting.in/');
    await expect(page).toHaveTitle('Index');
    await page.getByRole('button', {name: 'Sign In', exact: true}).click();
    const emailTextbox = await page.getByRole('textbox', {name: 'E mail'});
    await expect(emailTextbox).toBeVisible();
});