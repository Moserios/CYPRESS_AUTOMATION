describe('Usin a dropbox', () => {
    it('Select from dropBox',() =>{
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.get('#preferred-interface').select('Both')
        cy.get('#preferred-interface').should('have.value','Both')

        cy.get('#preferred-interface').select('JavaScript API')
        cy.get('#preferred-interface').should('have.value','JavaScript API')

    })
})