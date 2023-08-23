class BasePage {
    static loadHomePage(){
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }

    static wait(number){
        cy.wait(number)
    }
}

class HomePage extends BasePage {
    static scrollToBottom(){
        cy.get('#submit-button').scrollIntoView()
    }
    static scrollToTop(){
        cy.get('header').scrollIntoView()
    }
}

describe('Abstraction with classes', () => {
    before(function(){               //runs ones before all it in describe
        HomePage.loadHomePage() 
    })

    after(function(){               //runs ones after all it in describe
        cy.clearCookies()
    })

    beforeEach(function(){               //runs every time before each it in describe
        cy.log('test finished')
    })

    afterEach(function(){               //runs every time after each it in describe
        cy.clearLocalStorage()
    })

    it.skip('Should be SKIPPED! Scroll down and up at the page',() =>{

       HomePage.scrollToBottom()
       HomePage.wait(2000)
       HomePage.scrollToTop()
       HomePage.wait(2000)
    })

    it.only('This will RUN Scroll down and up at the page',() =>{

        HomePage.scrollToBottom()
        HomePage.wait(2000)
        HomePage.scrollToTop()
        HomePage.wait(2000)
     })

     it('This will be skipped also Scroll down and up at the page',() =>{

        HomePage.scrollToBottom()
        HomePage.wait(2000)
        HomePage.scrollToTop()
        HomePage.wait(2000)
     })
})

