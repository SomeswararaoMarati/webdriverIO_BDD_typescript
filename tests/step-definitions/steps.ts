import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import { LoginPage } from '../../pageobjects/login.page';

const loginPage = new LoginPage(); 
const data = (global as any).envData ; 



Given('Open Application', async () =>{
    await loginPage.open(data.url)
})

When('Login to Application with valid credentials', async () =>{
    await loginPage.login(data.username,data.password)
    expect(await loginPage.getHomePageHeader()).toEqual('You logged into a secure area!')
})

When('Login to Application with credentials {string} and {string}', async (username:string,password:string) =>{
    await loginPage.login(username,password)
    expect(await loginPage.getHomePageHeader()).toEqual('You logged into a secure area!')
})

When('Logout from Application', async () =>{
    await loginPage.logoutFromApp();
})





