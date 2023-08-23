describe('Forgotten password test', () =>{
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

        it('Click at sign in button', () =>{
            cy.get('#signin_button').click()
        })

        it('Click at Forgot your password ?', () =>{
            cy.get('a').contains('Forgot your password ?').click()
        })

        it('Enter Email', () =>{
            cy.get('#user_email').type("test@test.com")
        })

        it('Submit button', () =>{
            cy.contains('Send Password').click()
        })
        
})