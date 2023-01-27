/// <reference types="cypress" />
import HomePage from "../pages/home"
import FindOfficer from "../pages/find"


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

context('Verify "FIND A MORTGAGE LOAN OFFICER" page', () => {
  beforeEach(() => {
    cy.HomePage()
    cy.fixture('example').as('testdata')
    HomePage.mainNav1().contains("Personal").trigger('mouseover').click()
    cy.get('.is-expanded > .coh-container >').should('be.visible').contains('Find a Client Advisor').click()
    cy.title().should('be.eq', 'Find a Client Advisor | Arvest Bank')

  })
 
  it('Verify Find a Mortgage Loan officer page is displayed', () => {
    cy.get('#main-content').within(() =>{
      cy.get('h1.coh-heading').contains('Connect With One Of Our Experienced Client Advisors').should('be.visible')
      cy.contains('SEARCH BY LOCATION OR NAME')
      cy.get('[title="Select Location"]').should('be.visible')
      cy.get("[title='Select Advisor']").should('be.visible').contains('Select Advisor')
    })
})

  it('Verify Find a Advisor By Location Search', () => {
    cy.get('[name="field_location_value"]').select('Bartlesville, OK',{force: true})
    cy.contains('h3', "Hannah J. Bode").should('be.visible')
    FindOfficer.privateBankerList().first().within(()=>{
      cy.contains('Vice President, Arvest Bank').should('be.visible')
      cy.contains('(918) 337-4301')
      cy.contains('a','hbode@arvest.com')
      cy.contains('Oklahoma Insurance License # 40087522')
      cy.contains('SCHEDULE AN APPOINTMENT').click()
      cy.title().should('be.eq', "Service")
      cy.go('back')
      cy.title().should('be.eq', 'Find a Client Advisor | Arvest Bank')
    })

  })

  it('Verify Find a Mortgage Loan officer By Name Search', () => {
    cy.get('[title="Select Location"]').should('be.visible')
    cy.get('[name="title"]').select('Andy Goos',{force:true})
    cy.contains('h3', "Andy Goos").should('be.visible')
    FindOfficer.privateBankerList().first().contains('Client Advisor').should('be.visible')
    FindOfficer.privateBankerList().contains('(913) 948-2176')
    FindOfficer.privateBankerList().contains('a','agoos@arvest.com')
    FindOfficer.privateBankerList().contains('Missouri Insurance License # 8226548')
    cy.contains("SCHEDULE AN APPOINTMENT").click()
  })




})
