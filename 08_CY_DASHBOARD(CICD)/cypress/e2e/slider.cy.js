describe('Select slider', () =>{

    it('Select Java Api from dropDown', () =>{
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.get('#tried-test-cafe').click()
        cy.contains('5').click()
        // cy.get('#preferred-interface').should('have.value',"JavaScript API")
    })
})