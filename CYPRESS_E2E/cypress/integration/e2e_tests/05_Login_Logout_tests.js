describe('Login/Logout app tests', () =>{
    beforeEach(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
        cy.url().should('include', 'login.html')
    })

    it('Try login with invalid data', () =>{
        cy.get('#user_login').type('Test')
        cy.get('#user_password').type('test123')
        cy.get('.btn-primary').click()
        cy.get('.alert-error').should('contain', 'Login and/or password are wrong.')
    })

    it('Try login with valid data', () =>{
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd
        
        cy.get('#user_login').type(username)
        cy.get('#user_password').type(password)
        // cy.get('.btn-primary').click()  
        })

        // cy.get('ul.nav-tabs').should('be.visible')           // SSL certificate expired, impossible to connect to the site

    })

    // it('Try logout', () =>{
    //     cy.get('#name').type('Test User')
    //     cy.get('#email').type('test_email@test-mail.io')
    //     cy.get('#subject').type('Test feedback subject')     
    //     cy.get('#comment').type('Test feedback comment text')

    // })
})