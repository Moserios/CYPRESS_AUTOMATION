describe('How to scroll', () => {
    it('Scroll down and up',() =>{
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.wait(1000)
        cy.get('#submit-button').scrollIntoView()
        cy.wait(1000)
        cy.get('header').scrollIntoView()
    })

    
})