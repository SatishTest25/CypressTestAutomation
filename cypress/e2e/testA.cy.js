/// <reference types= "cypress"/>

it('google search', () => {
    cy.visit('https://google.com')
    cy.get('.gLFyf', {timeout:5000}).type('cricbuzz{Enter} ')
    //cy.contains('Google Search').click()
 
    cy.wait(2000)
    cy.contains('Videos').click()
 })