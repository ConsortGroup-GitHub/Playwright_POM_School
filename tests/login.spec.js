import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'

test('Login test', async ({ page }) => {

  const Login = new LoginPage(page)

  await Login.AccessToURL('https://www.saucedemo.com/')
  await Login.login('standard_user', 'secret_sauce')

});

