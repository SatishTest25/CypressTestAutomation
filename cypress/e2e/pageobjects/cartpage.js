export class Cartpage
{

    Customername_tab = '#name'
    Customercountry_tab = '#country'
    Customercity_tab = '#city'
    Customercard_tab = '#card'
    Customermonth_tab = '#month'
    Customeryear_tab = '#year'

clkCarttab(){
    cy.wait(2000)
    cy.xpath('//*[@id="navbarExample"]/ul/li[4]/a').click()

}

clkPlaceorder(){
    cy.contains('Place Order').click()
    cy.wait(2000)
    cy.get(this.Customername_tab).type('Satish')
    cy.wait(2000)
    cy.get(this.Customercountry_tab).type('India')
    cy.wait(2000)
    cy.get(this.Customercity_tab).type('Pune')
    cy.wait(2000)
    cy.get(this.Customercard_tab).type('1234-1234-0987-0987')
    cy.wait(2000)
    cy.get(this.Customermonth_tab).type('June')
    cy.wait(2000)
    cy.get(this.Customeryear_tab).type('2023')
    cy.wait(2000)
    cy.wait(2000)
    cy.xpath('//*[@id="orderModal"]/div/div/div[3]/button[2]').click()

}

}
