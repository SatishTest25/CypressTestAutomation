it('Assertion Test', () => {

    cy.visit('https://example.cypress.io')
    cy.contains('get').click()

    cy.get('#query-btn')
    .should('contain','Button')
    .and('have.class','btn-primary')
    .and('be.visible')
    .and('be.enabled')




  })