import cypress from 'cypress'
import { addMatchImageSnaphotCommand } from 'cypress-image-snapshot/command'

addMatchImageSnaphotCommand({
    failureTreshold: 0.00,
    failureTresholdType: "percent",
    customDiffConfig: { treshold: 0.0 },
    capture: "vireport"
})

Cypress.Commands.add("setResolution", size => {
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
    }   else {
            cy.viewport(size)
    }
})