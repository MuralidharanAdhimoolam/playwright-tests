const {test, expext, expect} = require('@playwright/test')
test('First Test', async ({page}) =>{
    await page.goto("https://google.com")
    await expect(page).toHaveTitle("Google")

})