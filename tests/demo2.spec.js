import {test,expect} from "@playwright/test"
test('Demo2 Test', async({page}) =>{
await page.goto ('https://demo.applitools.com/')
//await page.pause()
await page.getByRole('textbox', { name: 'Enter your username' }).fill('Raghav')
await page.getByRole ('textbox', { name: 'Enter your password' }).fill('1234')
await page.getByRole('link', { name: 'Sign in' }).click();
await page.getByRole('link', { name: 'ACME' }).isVisible();

})