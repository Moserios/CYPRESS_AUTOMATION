import { defineStep } from 'cypress-cucumber-preprocessor/steps'



defineStep('I want to wait {int} seconds', time => {
    cy.wait(time*1000)
})