import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByLabel('Login').click();
  await page.getByLabel('Login').press('CapsLock');
  await page.getByLabel('Login').fill('LUN');
  await page.getByLabel('Login').press('CapsLock');
  await page.getByLabel('Login').fill('LUnak59');
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('andres');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('baron');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('Qa220423.');
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('Qa220423.');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByText('Registration is successful').click();
});