import { test, expect, Page } from '@playwright/test';

test('Validate Web Table', async ({ page }: { page: Page }) => {
    await page.goto('https://www.tutorialspoint.com/selenium/practice/webtables.php?')
    const rows = page.locator('//table/tbody/tr');
    const rowCount = await rows.count();
    console.log(`Total row count is: ${rowCount}`);
    

  for (let i = 0; i < rowCount; i++) {
    const firstName = await rows.nth(i).locator('td').nth(0).textContent();
    const lasgtstName = await rows.nth(i).locator('td').nth(1).textContent();
    console.log(`First name value is:  ${firstName} | Last Name value is: ${lasgtstName}`);
    let matchingPosition: number;         

    if(firstName==='Kierra' && lasgtstName==='Gentry'){
        matchingPosition=i;
        console.log(`matching position is: ${matchingPosition}`);
        
        await page.locator(`//table/tbody/tr[${matchingPosition}]/td[7]/a[1]`).click()
        await page.waitForTimeout(1000)
        await page.locator('(//input[@name="age"])[2]').fill('50');
        await page.locator("(//input[@type='submit'])[2]").click()
    }
  }
})
