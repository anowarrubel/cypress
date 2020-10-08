
/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  context('Verify Accordions', () => {
    
    beforeEach(() => {
      cy.HomePage()
      //cy.AcceptCookie()
    })

    it.only('Verify Accordion on Career Page', () =>{
      cy.contains('Join Our Team').click()
      cy.url().should('include', '/careers')
      cy.title().should('eq','Healthcare Technology Jobs | Careers | Change Healthcare')
      cy.contains('Total Rewards').should('be.visible')
      cy.contains('Empowering Your Health').should('have.attr', 'class','cmp-tabs__title cmp-tabs--active')
      cy.contains('Supporting Your Community').click().should('have.attr', 'class','cmp-tabs__title cmp-tabs--active').click()
      cy.contains('Two volunteer days off').should('be.visible')

    })

    it('Verify accordion on Payment accuracy page', () =>{
      
       cy.contains('Solutions').click()
       //cy.url().should('contains','enrollment-services')
    })
     
    })