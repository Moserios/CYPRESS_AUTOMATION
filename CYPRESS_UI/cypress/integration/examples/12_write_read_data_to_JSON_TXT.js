describe('How to save data to JSON or TXT', () => {
    it('Write to JSON',() =>{
        cy.writeFile('test_12.json', {name: 'Moserios', language: 'JavaScript', seniority: 'Mid-Sen'})
    })
    
    it('Write to TXT',() =>{
        cy.writeFile('test_12.txt', 'Sergey Molchun created this file')
    })
})


describe('How to read data from JSON or TXT', () => {
    it('Read from JSON',() =>{
        cy.readFile('test_12.json').its('name').should('eq', 'Moserios')
    })
    
    it('Read from TXT',() =>{
        cy.readFile('test_12.txt').should('eq', 'Sergey Molchun created this file')
    })
})