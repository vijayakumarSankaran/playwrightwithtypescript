import { expect, test} from '@playwright/test';
test.only('Validation of selecting multiple dynamic items from a dropdown using array', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')

const allDropDownOptions = page.locator('#multi-select option')
const data = await allDropDownOptions.allTextContents()
console.log(data)

const pickOption = page.locator('#multi-select')
await pickOption.selectOption({ index: 4 }) 

await page.waitForTimeout(10000)

await page.locator('//button[text()="First Selected"]').click({ force: true })

await page.waitForTimeout(1000) 

const actualOption = page.locator('//span[@class="genderbutton"]') 
const actualOptionValue = await actualOption.innerText()  
console.log('actualOptionValue is :', actualOptionValue)

//expect(actualOptionValue).toContain('Ohio')

  
    } )