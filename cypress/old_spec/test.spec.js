/// <reference types="cypress" />
import HomePage from "../pages/home"
import LinkPage from "../pages/links"


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

context('Verify Arvest Sanity tests', () => {
  beforeEach(() => {
   cy.fixture('example').as('testdata')
   cy.loginSession()
  })

  it('logs in via ui', function(){
    cy.visit('/user/node');
 
    cy.title().should('include', 'Moderation Dashboard | Arvest Bank')
  });

  it('logs in vi API and Log Out via UI', function(){
    cy.visit('/user/node');
    cy.title().should('include', 'Moderation Dashboard | Arvest Bank')
  })

  })