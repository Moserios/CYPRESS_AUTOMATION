const URL = 'http://zero.webappsecurity.com/feedback.html'

const USERFIELD = '#name'
const EMAILFIELD = '#email'
const SUBJECTFIELD = '#subject'
const COMMENTFIELD = '#comment'
const SUBMITBUTTON = 'input[type="submit"]'
const CONFIRMATION_MESSAGE = '.offset3'


class FeedbackPage {
    // visit URL
    static visitFeedbackPage() {
        cy.visit(URL)
    }

    // Fill username
    static fillUsername(name) {
        cy.get(USERFIELD).type(name)
    }

    // Fill email
    static fillEmail(email) {
        cy.get(EMAILFIELD).type(email)
    }

    // Fill subject
    static fillSubject(subject) {
        cy.get(SUBJECTFIELD).type(subject)
    }

    // Fill comment
    static fillComment(subject) {
        cy.get(COMMENTFIELD).type(subject)
    }        

    // Click Submit button
    static submitButton() {
        cy.get(SUBMITBUTTON).click()
    }

    // Show Confirmation message
    static shouldShowMessage() {
        cy.get(CONFIRMATION_MESSAGE).contains('Thank you for your comments')
    }

}

export default FeedbackPage