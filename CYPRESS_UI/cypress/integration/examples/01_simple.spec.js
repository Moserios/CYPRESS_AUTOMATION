describe('Browser actions', () => {
    it('Shoul load correct URL', () => {
        cy.visit('https://example.com/'), { timeout: 10000 }
    })

    it('Should check correct url', () => {
        cy.url().should('include', 'example.com')
    })



})

