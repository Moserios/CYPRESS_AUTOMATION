describe('Navigation bar test', () =>{
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

        it('Click online banking', () =>{
            cy.contains('Online Banking').click()
            cy.url().should('include', 'online-banking.html')
            cy.get('h1').should('be.visible')
        })

        it('Click feedback', () =>{
            cy.contains('Feedback').click()
            cy.url().should('include', 'feedback.html')
            cy.get('h3').should('be.visible')
        })

        it('Click home', () =>{
            cy.get('.brand').click()
            cy.url().should('include', 'index.html')
        })

})
        
