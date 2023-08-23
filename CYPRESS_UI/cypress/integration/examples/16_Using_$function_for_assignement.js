describe('Cypress.$ function', () =>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Use JQuery element in the current window', () =>{
        const signInButton = Cypress.$('#signin_button')
        signInButton.trigger('click')
    })
})