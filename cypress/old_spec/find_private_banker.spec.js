/// <reference types="cypress" />
import HomePage from "../pages/home"
import FindOfficer from "../pages/find"


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

context('Verify "FIND Private Banker" page', () => {
  beforeEach(() => {
    cy.HomePage()
    cy.fixture('example').as('testdata')
    HomePage.mainNav1().contains("Personal").trigger('mouseover').click()
    cy.get('.is-expanded > .coh-container >').should('be.visible').contains('Private Banking').click()
    cy.title().should('be.eq', 'Private Banking | Arvest Bank')

  })
 
  it('Verify Find a Privae Banker page is displayed', () => {
    cy.get('h1').contains(' Private Banking ').should('be.visible')
    cy.contains('SELECT YOUR LOCATION').should('be.visible')
    FindOfficer.location().should('be.visible')
    cy.contains('h2',"SIMPLIFY YOUR LIFE WITH ONE PHONE CALL").should('be.visible')
  })

  it('Verify Find a Advisor By Location Search', () => {
    //FindOfficer.location().select('Little Rock, AR')
    cy.get('#edit-location--2').select('Little Rock, AR',{force:true})
    //cy.get('#edit-submit-private-banker-block--2').click()
    cy.get('.coh-blockquote').scrollIntoView()
    cy.contains('h3', "Alicia Dewees").should('be.visible')
    FindOfficer.privateBankerList().first().contains('Vice President / Private Banking Advisor').should('be.visible')
    FindOfficer.privateBankerList().contains('(501) 513-4577')
    FindOfficer.privateBankerList().contains('a','adewees@arvest.com')
    FindOfficer.privateBankerList().contains('69256')
  })
})
