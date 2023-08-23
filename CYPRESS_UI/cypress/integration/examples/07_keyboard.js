describe('Keyboard press simulations', () => {
    it('Press a button in searchbox',() =>{
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#searchTerm').clear().type('some text {enter}') //{enter} - command simalater pressing Enter button at the keyboard
    })
})