describe('Browser actions', () => {
    it('Shoul load correct URL', () => {
        cy.visit('https://books.toscrape.com/index.html'), { timeout: 10000 }
        cy.url().should('include', 'index.html')
        cy.log('Before Reload')
        cy.reload()
        cy.log('After Reload')
    })

    it('Should click on Travel category', () => {
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    })


    it('Should display correct number of books: 11', () => {
        cy.get('.product_pod').its('length').should('eq', 11) // for classes use '.' in front of html name
        
    })

    it('Should click on Poetry category and check Olio book price is 23.88', () => {
        cy.get('a').contains('Poetry').click()
        cy.get('a').contains('Olio').click()
        cy.get('.price_color').contains('£23.88')
    })

})