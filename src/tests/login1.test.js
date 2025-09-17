// tests/login.test.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPageNew');

test('Login test with Page Object Model', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('abc43@gmail.com','Test@123');


});


