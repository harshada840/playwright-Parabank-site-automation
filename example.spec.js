// @ts-check
import { test, expect } from '@playwright/test';

test('Verify user can successfully transfer funds between accounts', async ({ page }) => {

  // Navigate to login page
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.waitForTimeout(2000);

  // Enter username
  await page.fill('input[name="username"]', 'username');
  await page.waitForTimeout(1000);

  // Enter password
  await page.fill('input[name="password"]', 'password');
  await page.waitForTimeout(1000);

  // Click login
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForTimeout(3000);

  // Verify login success
  await expect(page.getByText('Accounts Overview')).toBeVisible();
  await page.waitForTimeout(2000);

  // Navigate to Transfer Funds
  await page.getByRole('link', { name: 'Transfer Funds' }).click();
  await page.waitForTimeout(2000);

  // Enter transfer amount
  await page.fill('#amount', '100');
  await page.waitForTimeout(1000);

  // Select accounts
  await page.selectOption('#fromAccountId', { index: 0 });
  await page.waitForTimeout(1000);

  await page.selectOption('#toAccountId', { index: 1 });
  await page.waitForTimeout(1000);

  // Click transfer
  await page.getByRole('button', { name: 'Transfer' }).click();
  await page.waitForTimeout(3000);

  // Verify transfer success
  await expect(page.getByText('Transfer Complete')).toBeVisible();
  await page.waitForTimeout(2000);

  // Logout
  await page.getByRole('link', { name: 'Log Out' }).click();
  await page.waitForTimeout(2000);

});