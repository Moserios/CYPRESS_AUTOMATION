describe('How to use Xpath in Cypress', () => {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Click on the element using xpath', () => {
        cy.xpath('//*[@id="signin_button"]').should('be.visible')
        cy.xpath('//*[@id="signin_button"]').click()
    })

    it('Should display login form', () => {
        cy.xpath('//form').should('have.length', 1)
    })
})