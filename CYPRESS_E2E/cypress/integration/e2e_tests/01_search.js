describe('Searchbox test', () =>{
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

        it('Type into searchbox and submit', () =>{
            cy.get('#searchTerm').type('account {enter}')
        })

        it('Should show result page', () =>{
            cy.get('h2').contains('Search Results')
        })
})