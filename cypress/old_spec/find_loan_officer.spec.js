/// <reference types="cypress" />
import HomePage from "../pages/home"


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

context('Verify "FIND A MORTGAGE LOAN OFFICER" page', () => {
  beforeEach(() => {
    cy.HomePage()
    cy.fixture('example').as('testdata')
    HomePage.mainNav1().contains("Home Loans").trigger('mouseover').click()
    cy.get('.is-expanded > .coh-container >').should('be.visible').contains('Find a Loan Officer').click()
    cy.title().should('be.eq', 'Find a Mortgage Loan Officer | Arvest Bank')

  })
 
  it('Verify Find a Mortgage Loan officer page is displayed', () => {
    cy.get('h1').contains(' Find a Mortgage Loan Officer ').should('be.visible')
    cy.contains('SEARCH YOUR LOCATION OR SEARCH BY NAME').should('be.visible')
    cy.contains("[role='textbox']", 'Select Location').should('be.visible')
    cy.contains("[role='textbox']", 'Select Loan Officer').should('be.visible')
  })

  it('Verify Find a Mortgage Loan officer By Location Search', () => {
    cy.get('[name="field_location_value"]').select('Internet Lender',{force:true})
    cy.contains('h3', "Alex Simpson").should('be.visible')
    cy.get('.coh-column.coh-visible-ps.coh-col-ps-12.coh-visible-xl.coh-col-xl-7').contains('Mortgage Loan Officer').should('be.visible')
    cy.get('.coh-column.coh-visible-ps.coh-col-ps-12.coh-visible-xl.coh-col-xl-7').contains('Internet Lender').should('be.visible')
    cy.get('.coh-column.coh-visible-ps.coh-col-ps-12.coh-visible-xl.coh-col-xl-7').contains('(918) 382-2638')
    cy.get('.coh-column.coh-visible-ps.coh-col-ps-12.coh-visible-xl.coh-col-xl-7').contains('a','asimpson1@arvest.com')
    cy.get('.coh-column.coh-visible-ps.coh-col-ps-12.coh-visible-xl.coh-col-xl-7').find('.coh-inline-element').contains('NMLS# 803613')
    cy.contains("Visit Alex's Web Page for More Information").click()
    cy.title().should('be.eq', "Apply for a mortgage online | Arvest Home Loans - asimpson1")
    cy.go('back')
    cy.title().should('be.eq', 'Find a Mortgage Loan Officer | Arvest Bank')
    cy.contains('a','BEGIN ONLINE APPLICATION').should('be.visible')

  })

  it('Verify Find a Mortgage Loan officer By Name Search', () => {
    cy.get('[name="field_location_value"]').should('be.visible')
    cy.get('[name="title"]').select('Alex Simpson',{force:true})
    cy.contains('h3', "Alex Simpson").should('be.visible')
    cy.get('.coh-column.coh-visible-ps.coh-col-ps-12.coh-visible-xl.coh-col-xl-7').contains('Mortgage Loan Officer').should('be.visible')
    cy.get('.coh-column.coh-visible-ps.coh-col-ps-12.coh-visible-xl.coh-col-xl-7').contains('Internet Lender').should('be.visible')
    cy.get('.coh-column.coh-visible-ps.coh-col-ps-12.coh-visible-xl.coh-col-xl-7').contains('(918) 382-2638')
    cy.get('.coh-column.coh-visible-ps.coh-col-ps-12.coh-visible-xl.coh-col-xl-7').contains('a','asimpson1@arvest.com')
    cy.get('.coh-column.coh-visible-ps.coh-col-ps-12.coh-visible-xl.coh-col-xl-7').find('.coh-inline-element').contains('NMLS# 803613')
    cy.contains("Visit Alex's Web Page for More Information").click()
    cy.title().should('be.eq', "Apply for a mortgage online | Arvest Home Loans - asimpson1")
    cy.go('back')
    cy.title().should('be.eq', 'Find a Mortgage Loan Officer | Arvest Bank')
    cy.contains('a','BEGIN ONLINE APPLICATION').should('be.visible')
  })




})
