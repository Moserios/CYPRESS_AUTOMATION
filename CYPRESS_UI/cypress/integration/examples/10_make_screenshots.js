describe('Make a screenshot', () => {
    it('Full page screenshot',() =>{
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.screenshot({capture: 'fullPage'})
    })

    it('Single element screenshot',() =>{
        cy.get('header').screenshot()
        cy.get('h1').screenshot()
        
    })
})