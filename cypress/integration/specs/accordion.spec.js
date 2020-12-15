
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

    it.skip('Verify Accordion on Career Page', () =>{
      cy.contains('Join Our Team').click()
      cy.url().should('include', '/careers')
      cy.title().should('eq','Working at Change Healthcare')
      cy.contains('Total Rewards').should('be.visible')
      cy.contains('Empowering Your Health').should('have.attr', 'class','cmp-tabs__title cmp-tabs--active')
      cy.contains('Supporting Your Community').click().should('have.attr', 'class','cmp-tabs__title cmp-tabs--active').click()
      cy.contains('Two volunteer days off').should('be.visible')

    })

    it('Verify accordion on Revenue Cycle Management page', () =>{
      
       cy.visit("solutions/revenue-cycle-management")
       cy.url().should('include', '/solutions')
       cy.title().should('eq','Healthcare Revenue Cycle Management Solutions | Change Healthcare')
       cy.contains('Front-End').should('be.visible').should('include.attr','class','cmp-tabs__title cmp-tabs--active').click()
       cy.get(':nth-child(2) > .tab > .cmp-tab > .aem-Grid > :nth-child(2) > .cmp-text > h4')
       cy.contains("Patient access, retail-style shopping, financial clearance, coverage, and price transparency solutions and services").should('be.visible')
       cy.contains('Mid-Cycle').click().should('include.attr','class','cmp-tabs__title cmp-tabs--active')
       cy.contains("Revenue integrity, charge capture, clinical documentation, and coding solutions and services").should('be.visible')
    })
     

    })