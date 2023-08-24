import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'


Given('I open login page', () => {
    LoginPage.visitLoginPage()
    //cy.wait(1000)
})


When('I enter username {string}', username => {
    LoginPage.fillUsername(username)
})


When('I enter user password {string}', password => {
    LoginPage.fillPassword(password)
})


When('I click submit login button', () => {
    LoginPage.submitButton()
    //cy.wait(60000)
})


Then('I should see homepage', () => {
    cy.wait(3000)
    cy.url().should('include', 'https://courses.ultimateqa.com/collections')
    cy.get('.dropdown__toggle-button').contains('Sergey M')
    
})


Then('I should see an error', () => {
    //cy.wait(3000)
    LoginPage.shouldShowErrorMessage()
    
})