
import { Loginpage } from "../pageobjects/loginpage"

const loginpage = new Loginpage()

describe ('All login test', () => {

    beforeEach(function(){
        cy.visit('https://www.demoblaze.com/')
    })

    it('Page Object pattern practice', () => {
        
    
        loginpage.clickLogtab()
        loginpage.enterUsername('satishcric')
        loginpage.enterPassword('satish123')
        loginpage.clickLoginbutton()
       // cy.contains('Welcome').click()
    
    })
    
    it('Page Object pattern practice', () => {
        
        loginpage.clickLogtab()
        loginpage.enterUsername('dream11')
        loginpage.enterPassword('skysports')
        loginpage.clickLoginbutton()
       // cy.contains('Welcome').click()

    })
    
})

