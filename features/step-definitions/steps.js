import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from 'chai';
import loginPage from '../pageobjects/login.page.js';

Given('User is located on the main page of saucedemo website', async () => {
    await loginPage.open();
});

When('User clicks the "Login" button', async () => {
    await loginPage.clickLogin();
});

Then('User should see "Epic sadface: Username is required" error message', async () => {
    const expectedMessage = "Epic sadface: Username is required";
    const actualText = await loginPage.getErrorMessage();
    console.log("Actual error message:", actualText);
    expect(actualText).to.equal(expectedMessage);
});
