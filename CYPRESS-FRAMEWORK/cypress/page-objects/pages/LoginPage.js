import BasePage from '../BasePage'

export default class LoginPage extends BasePage{
    static login(user_name, user_password){
        cy.login(user_name, user_password)
    }

    static clickForgotPassword(){
        cy.contains('Forgot your password ?').click()
    }


    static displayErrorMessage(){
        cy.contains('Login and/or password are wrong.')
    }
}