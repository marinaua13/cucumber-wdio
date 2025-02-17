import { $ } from '@wdio/globals';

class LoginPage {
    get usernameInput() { return $('#user-name'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('#login-button'); }
    get errorMessage() { return $('.error-message-container'); }

    async open() {
        await browser.url('https://www.saucedemo.com/');
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.getText();
    }
}

export default new LoginPage();
