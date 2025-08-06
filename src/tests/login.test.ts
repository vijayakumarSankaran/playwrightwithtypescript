import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/LoginPAge'
import * as dotenv from 'dotenv' 
dotenv.config();

test.only('launch google', async ({ page }) => {
    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login')
// const password =process.env.password;
// const confirmpassword=process.env.confirmpassword;
// console.log(password);
// console.log(confirmpassword);

//   if (!password || !confirmpassword) {
//         throw new Error('Email or Password is not set in the .env file');
//     }

// await page.locator("(//input[@type='text'])[2]").fill('TestFirstname')
// await page.locator("(//input[@type='text'])[3]").fill('Lastname')
// await page.locator("//input[@type='email']").fill('test@gmail.com')
// await page.locator("(//input[@type='tel'])").fill('9000000000')


    const obj = new LoginPage(page);
    await obj.login('abc43@gmail.com','Test@123')


//  await page.locator("(//input[@type='password'])[1]").fill(password)
//  await page.locator("(//input[@type='password'])[2]").fill(confirmpassword)
// await page.locator("(//input[@type='radio'])[3]").click();
// await page.locator("(//input[@type='checkbox'])").click();

await page.waitForTimeout(5000)
//await page.locator("(//input[@type='submit'])").click();
const timestamp=Date.now()
await page.screenshot ({path: `screenshots/RegisterPage1-${timestamp}.png`})




//const timestamp=Date.now()
   //await page.screenshot ({path: `screenshots/page-${timestamp}.png`})
})