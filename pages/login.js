export class LoginPage {
    
    constructor(page) {

        this.page = page
        this.username_textbox = page.locator('[data-test="username"]')
        this.password_textbox = page.locator('[data-test="password"]')
        this.login_button = page.locator('[data-test="login-button"]')
    
    }


    async AccessToURL(myURL){

        await this.page.goto(myURL)

    }

    async login(username, password){
        // console.log("Le Username que je vais saisir est : " + username);
        // console.log("Le Password que je vais saisir est : " + password);
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }
}