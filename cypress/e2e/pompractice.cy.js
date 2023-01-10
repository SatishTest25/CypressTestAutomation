import { Loginpage } from "./Pages/loginpage"
import { Contactpage } from "./Pages/contactpage"
import { Homepage } from "./Pages/homepage"
import { Cartpage } from "./Pages/cartpage"


const loginpage = new Loginpage()
const contactpage = new Contactpage()
const homepage = new Homepage()
const cartpage = new Cartpage()


it('Page Object pattern practice', () => {
    cy.visit('https://www.demoblaze.com/')

    loginpage.clkLogtab()
    loginpage.enterUsername('satishcric')
    loginpage.enterPassword('satish123')
    loginpage.clickLoginbtn()

    contactpage.clkContacttab()
    contactpage.enterRecemail('abc0@gmail.com')
    contactpage.enterRecname('abc')
    contactpage.enterMessage('XYZ is going to recieve product')
    contactpage.clickSendmsg()

    homepage.clkHometab()
    homepage.enterShoppinglist()

    cartpage.clkCarttab()
    cartpage.clkPlaceorder()
    

  })
