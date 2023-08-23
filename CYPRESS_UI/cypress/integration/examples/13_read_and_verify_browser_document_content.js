describe('How to read nad verify browser document content', () => {
    it('Check content Type',() =>{
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.wait(2000)
        cy.document().its('contentType').should('eq', 'text/html')
    })
    
    it('Check property charset',() =>{
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8') //check 2 properties in 1 assert
    })
})

