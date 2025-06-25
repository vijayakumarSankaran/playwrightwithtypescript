import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPAge';
import * as dotenv from 'dotenv';

 dotenv.config();

test('Valid Login Test', async ({ page }: { page: Page }) => {
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    console.log('email is: ', email);
    console.log('password is: ', password);

    if (!email || !password) {
        throw new Error('Email or Password is not set in the .env file');
    }

    const loginPage = new LoginPage(page);
   
    // WebDriver driver = new ChromeDriver();
    // driver.get("https://tutorialsninja.com/demo/index.php?route=account/login")

    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
    await loginPage.login('Test', 'Test@123');
   //await loginPage.login(email,password);
    await page.waitForTimeout(2000);
    console.log('Login successfully...');
    
   //await loginPage.login(email, password);

    // //await loginPage.login(email, password);
//       await page.waitForTimeout(2000);
//     await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/account');
//    await expect(page).toHaveTitle('My Account');
//   expect(await loginPage.isLoginButtonVisible()).toBe(false); 


});



