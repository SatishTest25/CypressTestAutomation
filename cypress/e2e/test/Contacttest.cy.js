import { Contactpage } from "../pageobjects/contactpage"

const contactpage = new Contactpage()
describe ('All Contact test', () => {

    beforeEach(function(){
        cy.visit(Cypress.config().baseUrl)
    })

    it('Adding Contact detail with valid input', () => {

      contactpage.clickContacttab()
      contactpage.enterReceiveremail(Cypress.config().receiverMail1)
      cy.wait(1000)
      contactpage.enterReceivername(Cypress.config().receiverName1)
      contactpage.enterMessage(Cypress.config().Message1)
      contactpage.clickSendmessage()

   })

   it('Adding Contact detail with null input', () => {

    contactpage.clickContacttab()
    contactpage.enterReceiveremail(Cypress.config().receiverMail2)
    cy.wait(1000)
    contactpage.enterReceivername(Cypress.config().receiverName2)
    contactpage.enterMessage(Cypress.config().Message2)
    contactpage.clickSendmessage()

  })
})