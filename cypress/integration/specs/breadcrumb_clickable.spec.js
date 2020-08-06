
/// <reference types="cypress" />
import HomePage from "../pages/home"
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
      HomePage.mainNav().contains('About').click()
        cy.title().should('eq','About Change Healthcare | Company Overview | Change Healthcare')
        cy.url().should('contains','/about')
        cy.contains('Home').click()
        cy.title().should('eq','Healthcare Technology & Business Solutions Company | Change Healthcare')
        cy.url().should('contains','healthcare')
    })
    it('Verify Breadcrumb on Insights page is clickable', () =>{
      HomePage.mainNav().contains('Insights').click()
          cy.title().should('eq','Healthcare Industry Insights | Healthcare IT Insights | Change Healthcare')
          cy.url().should('contains','/insights')
          cy.get('.cmp-breadcrumb__list').children().eq(1).should('not.have.attr','href')
          cy.get('.cmp-breadcrumb__list').children().contains('Home').should('have.attr','href')
          cy.get('.cmp-breadcrumb__list').contains('Home').click()          
          cy.title().should('eq','Healthcare Technology & Business Solutions Company | Change Healthcare')
          cy.url().should('contains','healthcare')
    })
    it('Verify Breadcrumb on Solution page is clickable', () =>{
      
      HomePage.mainNav().contains('Solutions').trigger('mouseover')
      cy.get('.cmp-header__nav-dropdown-toggle').eq(2).click({ force: true })
      cy.get(':nth-child(2) > .cmp-header__nav-dropdown-container > .cmp-header__nav-dropdown').contains('Reduce Costs').click()
      cy.url().should('contains','/solutions')
      cy.get('.cmp-breadcrumb__list').children().contains('Reduce Costs').should('not.have.attr','href')
      cy.get('.cmp-breadcrumb__list').children().contains('Home').should('have.attr','href')
      cy.get('.cmp-breadcrumb__list').contains('Home').click()  
      cy.title().should('eq','Healthcare Technology & Business Solutions Company | Change Healthcare')
    
})

it('Verify Breadcrumb on Contact page is clickable', () =>{
  
  //mainNav.contains('Contact').trigger('mouseover')

  //cy.get('.cmp-header__nav-list-link').contains('Solutions').trigger('mouseover')
  HomePage.mainNav().contains('Contact').click()
    cy.url().should('contains','/contact')
  cy.get('.cmp-breadcrumb__list').children().contains('Contact Us').should('not.have.attr','href')
  cy.get('.cmp-breadcrumb__list').children().contains('Home').should('have.attr','href')
  cy.get('.cmp-breadcrumb__list').contains('Home').click()  
  cy.title().should('eq','Healthcare Technology & Business Solutions Company | Change Healthcare')

})
     
    })