
/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  context('Verify Enrollment form pages being loaded without redirect', () => {
    
    beforeEach(() => {
      cy.viewport(1366, 720) 
      cy.visit('/')
      cy.get('#onetrust-accept-btn-handler').should('be.visible')
        .click()
      cy.get('.link-list__item-link[data-link-type="customer support"]').click()
      
    })

    it('Verify Page title', () =>{
      cy.title().should('eq','Customer Support | Support')
      cy.url().should('contains','support')
    })

    it.only('Verify Medical Claims Enrollment forms Page', () =>{
        cy.visit("https://support.changehealthcare.com/customer-resources/enrollment-services/medical-hospital-claims-enrollment-forms")
       // cy.url().should('contains','enrollment-services')
       // cy.get('[data-link-type="claims enrollment forms"]').first().click()
       // cy.title().should('eq','Medical amp; Hospital Claims Enrollment Forms | Support')
       // cy.url().should('contains','enrollment-services')
    })
     
    })
    