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

  })

  afterEach(() => {
    cy.logout()
  })

  it('logs in via ui', function(){
    cy.visit('/user/login');
    cy.get('#edit-name').type(Cypress.env('cyAdminUser'));
    cy.get('#edit-pass').type(Cypress.env('cyAdminPassword'));
    cy.get('#edit-submit').click();
    cy.title().should('include', 'Moderation Dashboard | Arvest Bank')
  });

  it('logs in vi API and Log Out via UI', function(){
    cy.logIn(Cypress.env('cyAdminUser'), Cypress.env('cyAdminPassword'));
    cy.visit('/')
    cy.contains('Rebuild Cache').should('be.visible')
    cy.logout()
    cy.visit('/')
    cy.title().should('include','Banking, Investments, Mortgage Loans | Arvest Bank')
  })

  })