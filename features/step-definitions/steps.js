import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from 'chai';
import loginPage from '../pageobjects/login.page.js';

const errorMessage = "Epic sadface: Username is required";

Given('User is located on the main page of saucedemo website', async () => {
    await loginPage.open();
});

When('User clicks the "Login" button', async () => {
    await loginPage.login();
});

Then(`User should see "${errorMessage}" error message`, async () => {
    const actualMessage = await loginPage.getErrorMessageText();
    console.log("Actual error message:", actualMessage);
    expect(actualMessage).to.equal(errorMessage);
});
