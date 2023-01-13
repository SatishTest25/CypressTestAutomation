import { Loginpage } from "../pageobjects/loginpage"
import { Contactpage } from "../pageobjects/contactpage"
import { Homepage } from "../pageobjects/homepage"
import { Cartpage } from "../pageobjects/cartpage"


const loginpage = new Loginpage()
const contactpage = new Contactpage()
const homepage = new Homepage()
const cartpage = new Cartpage()


it('Overall Cypress automation run', () => {
    cy.visit('https://www.demoblaze.com/')

    loginpage.clickLogtab()
    loginpage.enterUsername('satishcric')
    loginpage.enterPassword('satish123')
    loginpage.clickLoginbutton()

    contactpage.clickContacttab()
    contactpage.enterReceiveremail('abc0@gmail.com')
    contactpage.enterReceivername('abc')
    contactpage.enterMessage('XYZ is going to recieve product')
    contactpage.clickSendmessage()

    homepage.clickHometab()
    homepage.enterShoppinglist()

    cartpage.clickCarttab()
    cartpage.clickPlaceorder()
    

  })
