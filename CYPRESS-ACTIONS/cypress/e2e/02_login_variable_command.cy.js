import "../support/commands";
import "../support/userActions";

describe('Check commands from userActions', () => {
    it('Login to ultimateqa.com', () => {
        cy.visitLoginpage()
        cy.wait(2000)

        cy.fixture('loginData').then(({ username, password}) =>{
            cy.login(username, password)
            cy.wait(2000)
        })
        
        
    })

})