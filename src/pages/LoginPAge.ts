import { Page } from 'playwright';

export class LoginPage {
  private page: Page;
  private usernameInput: string = '#input-email';
  private passwordInput: string = '#input-password';
  private loginButton: string = 'input[value="Login"]';

  constructor(page: Page) {
    this.page = page;
  }

  async enterUsername(username: string) {
    await this.page.fill(this.usernameInput, username);
  }

  async enterPassword(password: string) {
    await this.page.fill(this.passwordInput, password);
  }

  async clickLoginButton() {
    await this.page.click(this.loginButton);
  }

  // A method to perform the login actions
  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  // You can also add assertions or page checks
  async isLoginButtonVisible(): Promise<boolean> {
    return await this.page.isVisible(this.loginButton);
  }
}
