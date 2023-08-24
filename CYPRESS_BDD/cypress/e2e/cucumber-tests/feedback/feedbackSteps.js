import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import FeedbackPage from './feedbackPage'


Given('When I open the feedback page', () => {
    FeedbackPage.visitFeedbackPage()
})


When('I fill the name field {string}', username => {
    FeedbackPage.fillUsername(username)
})


When('I fill the email field {string}', email => {
    FeedbackPage.fillEmail(email)
})


When('I fill the subject field {string}', subject => {
    FeedbackPage.fillSubject(subject)
})


When('I fill the comment field {string}', comment => {
    FeedbackPage.fillComment(comment)
})



When('I click send button', () => {
    FeedbackPage.submitButton()
})


Then('I see confirmation message', () => {
    FeedbackPage.shouldShowMessage()
    // cy.url().should('include', 'http://zero.webappsecurity.com/sendFeedback.html')
    // cy.get('.dropdown__toggle-button').contains('Sergey M')
    
})


Then('I should see an error', () => {
    //cy.wait(3000)
    LoginPage.shouldShowErrorMessage()
    
})