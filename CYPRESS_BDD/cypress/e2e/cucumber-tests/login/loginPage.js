const URL = 'https://courses.ultimateqa.com/users/sign_in'
//const U_USERNAME = 'moserturbo@gmail.com'
//const U_PASSWORD = 'Moserio1249'

const USERFIELD = 'input[type="email"]'
const PASSWORDFIELD = 'input[type="password"]'
const SUBMITBUTTON = 'button[type="submit"]'
const ERROR_MESSAGE = '.form-error__list-item'



class LoginPage {
    // visit URL
    static visitLoginPage() {
        cy.visit(URL)
    }

    // Fill username
    static fillUsername(name) {
        cy.get(USERFIELD).type(name)
    }

    // Fill password
    static fillPassword(password) {
        cy.get(PASSWORDFIELD).type(password)
    }

    // Click Submit button
    static submitButton() {
        cy.get(SUBMITBUTTON).click()
    }

    // Fill password
    static shouldShowErrorMessage() {
        cy.get(ERROR_MESSAGE).contains('Invalid email or password.')
    }

}

export default LoginPage