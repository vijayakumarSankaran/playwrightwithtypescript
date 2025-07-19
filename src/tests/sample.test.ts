import test, { Page } from "playwright/test";

test.only('Lauching google aplication', async ({ page }: { page: Page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('[name="username"]').fill("Admin")
    await page.locator('[name="password"]').fill("admin123")
    await page.locator('//button[@type="submit"]').click()
    await page.getByRole('link', { name: 'My Info' }).click();
    await page.waitForTimeout(2000)
    await page.locator('div').filter({ hasText: /^Date of BirthGenderMaleFemale$/ }).locator('i').click();
    await page.getByRole('textbox', { name: 'yyyy-mm-dd' }).nth(1).click();
    await page.locator('div').filter({ hasText: /^Date of BirthGenderMaleFemale$/ }).locator('i').click();
    await page.getByRole('listitem').filter({ hasText: 'October' }).locator('i').click();
    await page.getByText('May').click();
    await page.locator('div').filter({ hasText: /^2023$/ }).click();
    await page.getByText('2025', { exact: true }).click();
    await page.getByText('20', { exact: true }).click();
    console.log('welcome on board.....');
    
})

