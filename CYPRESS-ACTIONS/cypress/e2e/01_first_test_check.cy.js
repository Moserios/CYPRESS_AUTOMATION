import "../support/commands";

describe('First test to check everything is working', () => {
    it('visit Example.com', () => {
        cy.visit('https://example.com/')
        cy.wait(2000);
    })

    it('visitAQAHomepage', () => {
        cy.visitAQAHomepage()
        cy.wait(2000);
    })

    it('visitAutomationspage', () => {
        cy.visitAutomationspage()
        cy.wait(2000);
    })

    it('visitBankHomepage', () => {
        cy.visitBankHomepage()
        cy.wait(2000);
    })

    it('visitLoginpage', () => {
        cy.visitLoginpage()
        cy.wait(2000);
    })
})