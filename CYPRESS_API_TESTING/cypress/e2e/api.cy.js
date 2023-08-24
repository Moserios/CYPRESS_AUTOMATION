/// <reference types="cypress" />

describe('REST API testing with Cypress',() =>{
    
    it('API - first request passes', () =>{
        cy.request('/users/2').then((response) => {
            cy.log(JSON.stringify(response.body.data.email))
            cy.log(JSON.stringify(response.headers))
            cy.log(JSON.stringify(response.body))
            cy.log(JSON.stringify(response))
        })
    })


    it('API - validate headers', () =>{
        cy.request('/users/2').as('user')
            cy.get('@user')
                .its('headers')
                .its('content-type')
                .should('include', 'application/json')

            cy.get('@user')
                .its('headers')
                .its('connection')
                .should('include', 'keep-alive')
        })


    it('API - validate status code 200 (positive scenario)', () =>{
        cy.request('/users/2').as('existingUser')
            cy.get('@existingUser').its('status').should('equal', 200)
        })

//request to not existing URL and making test not fail on wrong status code
    it('API - validate status code 404 (negative scenario)', () =>{
        cy.request({ 
            url: '/users/non-exist', 
            failOnStatusCode: false})
            .as('notExistingUser') 

        cy.get('@notExistingUser').its('status').should('equal', 404)                         
        })


    it('API - GET request', () =>{
        cy.request({url: '/users/2', method: 'GET'}).as('user')
        cy.get('@user').then((res) =>{
            cy.log(JSON.stringify(res.body))
            expect(res.body.data.id).equal(2)
            expect(res.body.data.email).equal('janet.weaver@reqres.in')
            expect(res.body.data.last_name).not.to.contain('something not expected')

            // applying values to variables and then make assertion
            const userID = res.body.data.id
            expect(userID).to.equal(2)
        })

    })       

    it('API - POST request', () =>{
        cy.request({
            url: '/login', 
            method: 'POST', 
            body: { email: 'eve.holt@reqres.in', password: 'cityslicka' },
        }).as('loginRequest')

        cy.get('@loginRequest').its('status').should('equal',200)
        cy.get('@loginRequest').then(res => {
            expect(res.body.token).to.equal('QpwL5tke4Pnpja7X4')
        })
    })  


    it('API - POST request - error', () =>{
        cy.request({
            url: '/login', 
            method: 'POST', 
            failOnStatusCode: false,
            body: { email: 'eve.holt@reqres.in'},
        }).as('loginRequest')

        cy.get('@loginRequest').its('status').should('equal', 400)
        cy.get('@loginRequest').then(res => {
            expect(res.body.error).to.equal('Missing password')
        })
    })  


    it('API - PUT request', () =>{
        cy.request({
            url: '/users/2', 
            method: 'PUT', 
            body: { name: 'Moser', job: 'Automation tester' },
      //      auth: { Bearer: 'my-token'},            // token could be obtained during any CY request (usually GET)
        }).as('putRequest')

        cy.get('@putRequest').its('status').should('equal',200)
        cy.get('@putRequest').then(response => {
            cy.log(JSON.stringify(response.body))
            expect(response.body.name).to.equal('Moser')
            expect(response.body.job).to.equal('Automation tester')
        })
    })  


    
    it('API - DELETE request', () =>{
        cy.request({
            url: '/users/2', 
            method: 'DELETE', 
        }).as('deleteUser')

        cy.get('@deleteUser').its('status').should('equal',204)
        
    }) 

})