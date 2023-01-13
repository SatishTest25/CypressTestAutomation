import { Loginpage } from "../pageobjects/loginpage"

const loginpage = new Loginpage()
describe ('All login test', () => {

    beforeEach(function(){
        cy.visit(Cypress.config().baseUrl)
    })

    it('verify login functionality with correct credential', () => {
        
    
        loginpage.clickLogtab()
        loginpage.enterUsername(Cypress.config().userId)
        loginpage.enterPassword(Cypress.config().Password)
        loginpage.clickLoginbutton()
    
    })
    
    it('verify login functionality with incorrect credential', () => {
        
        loginpage.clickLogtab()
        loginpage.enterUsername(Cypress.config().userId1)
        loginpage.enterPassword(Cypress.config().Password1)
        loginpage.clickLoginbutton()
       // cy.contains('Welcome').click()

    })

    it('verify login functionality with null credential', () => {
        
        loginpage.clickLogtab()
        loginpage.enterUsername(Cypress.config().userId2)
        loginpage.enterPassword(Cypress.config().Password2)
        loginpage.clickLoginbutton()

    })
    
})

