describe('Login wih fixtures data', () => {
    it('Login to website using fixtures data', () =>{
        cy.visit('http://zero.webappsecurity.com/login.html')

        cy.fixture('user').then(user =>{
            const username = user.username                     // Note: yo uhave to specify valiables values in fixtures/user.json to use them here!
            const userpassword = user.userpassword


            cy.get('#user_login').type(username)                  
    
            cy.get('#user_password').type(userpassword)
   
            cy.contains('Sign in').click()
            
            cy.get('.alert-error').contains('Login and/or password are wrong.')    



        })

    })
    
})