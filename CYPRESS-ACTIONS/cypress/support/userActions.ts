declare namespace Cypress 
    {
        interface Chainable {
            /**
             * Login user at login page of courses.ultimateqa.com/users/sign_in
             * @param username - takes username or id
             * @param password - takes user password
             */
            login(username: string, password: string): Chainable<Element>

            }

            interface Chainable {
                /**
                 * Fill fields at Feedback page of courses.ultimateqa.com/users/sign_in
                 * @param username - takes username or id
                 * @param email - takes user email
                 * @param subject - takes subject of feedback
                 * @param message - takes message of feedback
                 */
                fillFeedbackForm(
                    username: string, 
                    email: string,
                    subject: string,
                    comment: string): Chainable<Element>
                    }
    }


Cypress.Commands.add('login', (username, password) => {
    cy.get('input[type="email"]').type(username)
    cy.get('input[type="password"]').type(password)
    cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('fillFeedbackForm', (username, email, subject, comment) => {
    cy.get('#name').type(username)
    cy.get('#email').type(email)
    cy.get('#subject').type(subject)
    cy.get('#comment').type(comment)
    cy.get('input[type="submit"]').click()

})


