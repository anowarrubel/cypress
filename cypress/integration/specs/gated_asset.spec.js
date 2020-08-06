/// <reference types="cypress" />
import HomePage from "../pages/home"



Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

context('Verify Gated Asset page', () => {
  beforeEach(() => {
    cy.HomePage()
    cy.contains('Insights').click()
    cy.title().should('eq','Healthcare Industry Insights | Healthcare IT Insights | Change Healthcare')
    cy.url().should('contains','/insights')
    cy.fixture('example').then(function(data){
      this.data=data
    })
  
  })

  it('Verify Gated form being displayed', () => {
    cy.contains('Watch Video').first().click()
    cy.url().should('contains', '/insights')
    cy.title().should('contains','Change Healthcare')
    cy.wait(5000)
    cy.get('.cmp-asset-embed__modal-inner-contents').should('be.visible')
  })

  it('Verify Go Back link being displayed', () => {
    cy.contains('Watch Video').first().click()
    cy.url().should('contains', '/insights')
    cy.title().should('contains','Change Healthcare')
    cy.wait(5000)
    cy.get('.cmp-asset-embed__modal-inner-contents').should('be.visible')
    .contains('Go Back >>').should('be.visible').click()
    cy.url().should('contains', '/insights')
  })
 
  it('Verify Error message being displayed for required fields', () => {
    cy.contains('Watch Video').first().click()
    cy.url().should('contains', '/insights')
    cy.title().should('contains','Change Healthcare')
    cy.wait(5000)
    cy.get('.cmp-asset-embed__modal-inner-contents').should('be.visible')
    .contains('Submit').click()
    cy.get('#field0-error').should('be.visible').should('have.text','This field is required.')
    cy.get('#field1-error').should('be.visible').should('have.text','This field is required.')
    cy.get('#field2-error').should('be.visible').should('have.text','This field is required.')
    cy.get('#field4-error').should('be.visible').should('have.text','This field is required.')
    cy.get('#field5-error').should('be.visible').should('have.text','This field is required.')
    cy.get('#field8-error').should('be.visible').should('have.text','This field is required.')
  })

  it('Verify Gated asset being displayed on successful form Submission', () => {
    
    cy.contains('Watch Video').first().click()
    cy.url().should('contains', '/insights')
    cy.title().should('contains','Change Healthcare')
    cy.wait(5000)
    cy.get('.cmp-asset-embed__modal-inner-contents').should('be.visible')
    .contains("First Name").type('Test')
    cy.get('#field1').type('Last Name')
    cy.get("[name='emailAddress']").type('anowar.hossain@bounteous.com')
    cy.get("[name='company']").type('Bounteous')
    cy.get("[name='organizationType1']").select('Software Vendor')
    cy.get("[name='stateProv']").select('IL')
    cy.get('.submit-button').click()
    cy.get('.cmp-article-header__title').should('be.visible')

  })


})
