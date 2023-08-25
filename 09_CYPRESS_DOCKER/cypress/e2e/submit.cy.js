describe('Fill Form test', () =>{

    it('Fill the form', () =>{
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.get('#developer-name').type("Sergey")
        cy.get('#tried-test-cafe').click()

        cy.get('#submit-button').click()
        
        cy.get('#article-header').contains('Thank you, Sergey!')
        cy.url().should('include', 'thank-you.html')
    })
})