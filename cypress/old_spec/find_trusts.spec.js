/// <reference types="cypress" />
import HomePage from "../pages/home"
import FindOfficer from "../pages/find"


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

context('Verify "FIND Trust & Estate Planning Professional" page', () => {
  beforeEach(() => {
    cy.HomePage()
    cy.fixture('example').as('testdata')
    HomePage.mainNav1().contains("Investments & Trusts").trigger('mouseover').click()
    cy.get('.is-expanded > .coh-container >').should('be.visible').contains('Find a Trust & Estate Planning Professional').click()
    cy.title().should('be.eq', 'Find a Trust and Estate Professional | Arvest Bank')

  })
 
  it('Verify Find a Trust & Estate page is displayed', () => {
    cy.get('h1').contains(' Find a Trust and Estate Planning Professional ').should('be.visible')
    cy.contains('SEARCH YOUR LOCATION OR NAME').should('be.visible')
    cy.get('[title="Select Location"]').should('be.visible')
    cy.get('[title="Select Name..."]').should('be.visible')
    //cy.contains('h2',"SIMPLIFY YOUR LIFE WITH ONE PHONE CALL").should('be.visible')
  })

  it('Verify Find a Trust & Estate advisor By Location Search', () => {
    //FindOfficer.location().select('Little Rock, AR')
    cy.get("[name='field_location_value']").select('Alma, AR', {force:true})
    cy.contains('h3', "Kevin Lacewell CFP® CTFA").should('be.visible')
    //Verify content
    FindOfficer.privateBankerList().first().within(()=>{
      cy.contains('Vice President, Arvest Bank').should('be.visible')
      cy.contains('(479) 221-8797')
      cy.contains('a','klacewell@arvest.com')
      cy.contains('Arkansas Insurance License # 3521806')
    })
    

  })

it('Verify Find a Trust Officer By Name Search', () => {
    cy.get('[title="Select Location"]').should('be.visible')
    cy.get("[name='title']").select('Bert Kell',{force:true})
    cy.contains('h3', "Bert Kell").should('be.visible')
    FindOfficer.privateBankerList().first().within(()=>{
      cy.contains('Senior Vice President, Arvest Bank').should('be.visible')
      cy.contains('(479)621-1868')
      cy.contains('a','hkell@arvest.com')
    })
    
  })
})
