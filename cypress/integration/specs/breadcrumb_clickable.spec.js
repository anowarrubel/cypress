
/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  context('Verify Breadcrumb is clickable', () => {
    
    beforeEach(() => {
      cy.HomePage()
    })

    it('Verify Breadcrumb on About Us page is clickable', () =>{
        cy.get('[data-link-type="about us"]').first().click()
        cy.title().should('eq','About Change Healthcare | Company Overview | Change Healthcare')
        cy.url().should('contains','/about')
        cy.contains('Home').click()
        cy.title().should('eq','Healthcare Technology & Business Solutions Company | Change Healthcare')
        cy.url().should('contains','healthcare')
    })
    it('Verify Breadcrumb on Insighs page is clickable', () =>{
          cy.get('[data-link-type="insights"]').first().click()
          cy.title().should('eq','Healthcare Industry Insights | Healthcare IT Insights | Change Healthcare')
          cy.url().should('contains','/insights')
          //cy.contains('Home').click()
          cy.get('.cmp-breadcrumb__item-link > span').click('topLeft')
          
          cy.title().should('eq','Healthcare Technology & Business Solutions Company | Change Healthcare')
          cy.url().should('contains','healthcare')
    })
    it.only('Verify Breadcrumb on Insighs page is clickable', () =>{
      cy.get('.cmp-header__nav-list-link').contains('Insights').trigger('mouseover')
      cy.get('.cmp-header__nav-dropdown-toggle').first().click({ force: true })
      cy.get('.cmp-header__nav-dropdown-container').should('be.visible')
        .contains('About Us').click()
      cy.url().should('contains','/about')
      cy.get('.cmp-breadcrumb__item-link').should('be.visible')
        .contains('Home').click()
      cy.title().should('eq','Healthcare Industry Insights | Healthcare IT Insights | Change Healthcare')
      cy.url().should('contains','/insights')
      //cy.contains('Home').click()
      cy.get('.cmp-breadcrumb__item-link > span').click('topLeft')
      
      cy.title().should('eq','Healthcare Technology & Business Solutions Company | Change Healthcare')
      cy.url().should('contains','healthcare')
})
     
    })