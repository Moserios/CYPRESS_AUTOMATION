describe('Feedback application test', () =>{
    before(function() {
        cy.visit('http://zero.webappsecurity.com/feedback.html')
    })

    it('Should load the feedback form', () =>{
        cy.contains('Feedback')
        cy.url().should('include', 'feedback.html')
    })

    it('Fill the feedback form', () =>{
        cy.get('#name').type('Test User')
        cy.get('#email').type('test_email@test-mail.io')
        cy.get('#subject').type('Test feedback subject')     
        cy.get('#comment').type('Test feedback comment text')

    })

    it('Submit the feedback form', () =>{
        cy.get('.btn-primary').click()
    })

    it('Display the feedback message', () =>{
        cy.get('#feedback-title').contains('Feedback')
        cy.url().should('include', 'sendFeedback.html')
        cy.contains('Thank you for your comments, Test User. They will be reviewed by our Customer Service staff and given the full attention that they deserve.')
    })

})