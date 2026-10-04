import * as XLSX from "xlsx";
import { test, expect } from "@playwright/test";
import path from "path";

test("Read data from Excel using xlsx", async ({ page }) => {
    console.log('actual dir: ', __dirname);
    
  // Load workbook
    const filePath = path.resolve(__dirname, "../testdata/test.xlsx");

  const workbook = XLSX.readFile(filePath);

  const sheetName = workbook.SheetNames[0]; // first sheet
  const worksheet = workbook.Sheets[sheetName]; // make sure first sheet

  // Convert sheet to JSON
  const data: any[] = XLSX.utils.sheet_to_json(worksheet);

  console.log("Excel Data:", data);

  // Example: use data in test
  for (const row of data) {
    console.log(row.name);
    console.log(row.email);

    
    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html");
    await page.fill('[name="first_name"]', row.name);
    await page.fill('[name="last_name"]', row.email);
    //await page.waitForTimeout(2000)
    // await page.click("#loginBtn");

    // Assert something
   // await expect(page).toHaveURL(/dashboard/);
  }
});
