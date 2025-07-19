import test, { Page } from "playwright/test";

test.only('Lauching google aplication', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   // await page.locator('//input[@name="username"]').fill('ganesh')
    await page.locator('//h5[text()="Login"]/following-sibling::div[@class="orangehrm-login-form"]/child::form/div[1]/div/div/input[@name="username"]').fill('ganesh')
    await page.waitForTimeout(2000)
})

