describe('Login with custom command', () => {
    it('Login with short command', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login('Moserios', '1234567890')
            // create a custom logi command with steps in support/commands.js to use this approach
            // ...
            // Cypress.Commands.add('login', (username, userpassword) => { 
            //     cy.clearCookies()
            //     cy.clearLocalStorage()
            //     cy.get('#user_login').type(username)
            //     cy.get('#user_password').type(userpassword)
            //     cy.contains('Sign in').click()
    })
})