describe('Browser actions', () => {
    it('Shoul load correct URL', () => {
        cy.visit('https://example.com/'), { timeout: 10000 }
    })

    it('Should check correct url', () => {
        cy.url().should('include', 'example.com')
    })

    it('Should wait 3 seconds (implicit wait)', () => {
        cy.wait(3000)
    })

    it('Should pause the execution until click resume button', () => {
        cy.pause()
    })

    it('Should check for element on the page', () => {
        cy.get('h1').should('be.visible')
    })

})

