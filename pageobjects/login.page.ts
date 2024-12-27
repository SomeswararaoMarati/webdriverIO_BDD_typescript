import { BasePage } from './base.page';

export class LoginPage extends BasePage {
    public usernameInput = '#username';
    public passwordInput = '#password'
    public loginButton = '//button[@type="submit"]'
    public homePageHeader = '#flash'
    public logoutButton = '//i[text()=" Logout"]/parent::a'



    async login(username: string, password: string): Promise<void> {
        await this.typeText(this.usernameInput, username)
        await this.typeText(this.passwordInput, password)
        await this.clickElement(this.loginButton)
    }

    async getHomePageHeader():Promise<string>{
        return this.getElementText(this.homePageHeader)
    }

    async logoutFromApp(){
        await this.clickElement(this.logoutButton)
    }

}