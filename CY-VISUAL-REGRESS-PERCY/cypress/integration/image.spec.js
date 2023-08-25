//const pages = ['https://example.com/']

//const sizes = ['iphone-6', 'ipad-2', [1280, 720]]

describe('Visual regression', () =>{
            it(`Should match the page`, () =>{
                cy.visit('https://example.com/')
                cy.matchImageSnapshot()
        })
    })



// describe('Visual regression', () =>{
//     sizes.forEach(size => {
//         pages.forEach(page => {
//             it(`Should match ${page} in resolution ${size}`, () =>{
//                 let currentTime = new Date(Date.UTC(2020, 1, 1)).getDate()  //fixing problem with changin Date-time during testing
//                 cy.setReolution(size)
//                 cy.visit(page)
//                 cy.matchImageSnapshot()
//         })
//     })

//     })
// })