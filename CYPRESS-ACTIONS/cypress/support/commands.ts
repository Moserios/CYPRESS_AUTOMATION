/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

declare namespace Cypress 
    {
        interface Chainable {
            /**
             * Navigate to bank test website: www.zero.webappsecurity.com
             */
            visitBankHomepage(): Chainable<Element>

            /**
             * Navigate to website with automation testing resourses: zero.webappsecurity.com/feedback.html
             */
            visitFeedbackPage(): Chainable<Element>

            /**
             * Navigate to website with login page: www.courses.ultimateqa.com/users/sign_in
             */
            visitLoginpage(): Chainable<Element>

            /**
             * Navigate to website with a lot of test automation pages for practice: www.ultimateqa.com/automation
             */
            visitAutomationpage(): Chainable<Element>

            /**
             * How much seconds execution should wait (seconds, not miliseconds!!!)
             * @param - seconds
             */
            waitForSeconds(seconds: number): Chainable<Element>
            }
    }


Cypress.Commands.add('visitBankHomepage', () => {
    cy.visit('http://zero.webappsecurity.com/')
})

Cypress.Commands.add('visitFeedbackPage', () => {
    cy.visit('http://zero.webappsecurity.com/feedback.html')
})


Cypress.Commands.add('visitLoginpage', () => {
    cy.visit('https://courses.ultimateqa.com/users/sign_in')
})

Cypress.Commands.add('visitAutomationpage', () => {
    cy.visit('https://ultimateqa.com/automation/')
})

Cypress.Commands.add('waitForSeconds', (seconds) => {
    cy.wait(seconds * 1000)
})



