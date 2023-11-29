import { test } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('Login test', async ({ page }) => {

  const Login = new LoginPage(page)

  await Login.Given_I_Access_to_my_website('https://www.saucedemo.com/')
  await Login.login('standard_user', 'secret_sauce')

});