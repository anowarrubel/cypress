/// <reference types="cypress" />
import HomePage from "../pages/home"

context('Verify Gated Asset page', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })



  beforeEach(() => {
    cy.HomePage()
    cy.contains('Insights').click()
    cy.title().should('eq','Healthcare Industry Insights | Healthcare IT Insights | Change Healthcare')
    cy.url().should('contains','/insights')
    cy.fixture("example.json").as("testdata")
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

      it.only('Verify Gated asset being displayed on successful form Submission', function() {
      
      cy.contains('Watch Video').first().click()
      cy.url().should('contains', '/insights')
      cy.title().should('contains','Change Healthcare')
      cy.wait(5000)
      cy.get('.cmp-asset-embed__modal-inner-contents').should('be.visible')
      cy.get('#field0').type(this.testdata.fname).should('have.value',this.testdata.fname)
      cy.get('#field1').type(this.testdata.lname).should('have.value',this.testdata.lname)
      cy.get("[name='emailAddress']").first().type(this.testdata.email).should('have.value',this.testdata.email)
      cy.get("[name='company']").type(this.testdata.company).should('have.value',this.testdata.company)
      cy.get("[name='organizationType1']").select(this.testdata.orgtype).should('have.value', this.testdata.orgtype)
      cy.get("[name='stateProv']").select(this.testdata.state).should('have.value',this.testdata.state)
      cy.get('.submit-button').click()
      cy.get('.cmp-article-header__title').should('be.visible')

    })


})
