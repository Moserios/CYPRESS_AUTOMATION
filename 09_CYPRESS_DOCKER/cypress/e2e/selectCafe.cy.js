describe('Select Internet caffe', () =>{

    it('Select Java Api from dropDown', () =>{
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.get('#preferred-interface').select("JavaScript API")
        cy.get('#preferred-interface').should('have.value',"JavaScript API")
    })
})