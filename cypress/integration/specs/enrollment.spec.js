
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  context('Verify Enrollment form pages being loaded without redirect', () => {
    
    beforeEach(() => {
      cy.HomePage()
      //cy.get('#onetrust-accept-btn-handler').should('be.visible').click()
      cy.get('.link-list__item-link[data-link-type="customer support"]').click()
      
    })

    it('Verify Page title', () =>{
      cy.title().should('eq','Customer Support | Change Healthcare')
      cy.url().should('contains','support')
    })

    it('Verify Medical Claims Enrollment forms Page', () =>{
      
       cy.get('[data-link-type="claims enrollment forms"]').first().click()
       //cy.url().should('contains','enrollment-services')
    })
     
    })
    