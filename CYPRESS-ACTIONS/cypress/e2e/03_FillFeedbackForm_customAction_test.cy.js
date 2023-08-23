import "../support/userActions";

describe('FeedBack form test', () => {
    it('Fill the feedback form in bank', () => {
        cy.visitFeedbackPage()
        cy.wait(2000)
        cy.fillFeedbackForm("sergey","moser@email.com","test message","test comment for test message")
        cy.wait(2000)
    })

    it('Fill the feedback form in bank with fixtures', () => {
        cy.visitFeedbackPage()
        cy.waitForSeconds(2)
        cy.fixture('feedbackForm').then(({ name, email, subject, comment}) =>{
            cy.fillFeedbackForm(name, email, subject, comment)
            cy.waitForSeconds(2)
        })
    })

})