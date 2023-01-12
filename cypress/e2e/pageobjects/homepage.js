export class Homepage
{

    clickHometab(){
        cy.wait(2000)
        cy.xpath('//*[@id="navbarExample"]/ul/li[1]/a').click()
    } 

    enterShoppinglist()
    {
        cy.contains('Laptops').click()
        cy.wait(2000)
        cy.contains('Sony vaio i5').click()
        cy.wait(2000)
        cy.contains('Add to cart').click()
        cy.wait(2000)
        cy.xpath('//*[@id="navbarExample"]/ul/li[1]/a').click()
        cy.contains('Laptops').click()
        cy.wait(2000)
        cy.contains('MacBook air').click()
        cy.wait(2000)
        cy.contains('Add to cart').click()

    }


}