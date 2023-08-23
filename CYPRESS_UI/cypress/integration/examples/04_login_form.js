describe('Login Form', () => {
    it('Should change current date-time', () => {
        const date = new Date(2023, 10, 15).getTime()
        cy.clock(date)                   
        cy.log(date)                   
    })


    it('Shoul load correct URL', () => {
        cy.visit('http://zero.webappsecurity.com/login.html'), { timeout: 10000 } //http://zero.webappsecurity.com/
        cy.url().should('include', 'login.html')
        cy.clearCookies({ log: true})                                       // clear Cookies
        cy.clearLocalStorage('your item', { log: true})                     //clear local storage
        cy.title().should('include', 'Zero - Log in')
    })

    it('Should fill username', () => {
        cy.get('#user_login').as('username')                   // use '#' for searching by ID >> assign alias to a selector
        cy.get('@username').clear()     
        cy.get('@username').type('Moser'), {delay: 500}
    })


    it('Should fill password', () => {
        cy.get('#user_password').as('userpassword')             // use '#' for searching by ID >> used aliases to make it easier to maintain
        cy.get('@userpassword').clear()                        
        cy.get('@userpassword').type('1234567890'), {delay: 500}
    })
    

    it('Mark the checkbox', () => {
        cy.get('input[type="checkbox"]').click()
      //  cy.wait(5000)                             //add wait
    })


    it('Click Submit button', () => {
        cy.contains('Sign in').click()
    })

    it('Should show the error', () => {
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
       // cy.get('.alert-error').contains('Login and/or password are wrong.')
    })




})