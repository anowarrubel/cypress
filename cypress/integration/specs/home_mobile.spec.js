/// <reference types="cypress" />
import HomePage from "../pages/home"
//import { config } from "cypress/types/bluebird"


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

context('Verify CHC Home page on iPhone Pro Max 11', () => {
  let data
  beforeEach(() => {
  
    cy.ProMax11()
    cy.HomePage()
    cy.fixture('example').then((search)=>{
      data = search
      //cy.viewport(data.iPhoneProMax11)
    })
    
  })

  it('Verify Covid19 text', () => {
    HomePage.covid19().should('be.visible')
  })

  it('Verify Utility nav being displayed', () => {
    
    HomePage.mobileMenu().should('be.visible').click()
    HomePage.utilityNav().children().contains('Support').should('be.visible').click()
    cy.url().should('include','support')
    cy.contains('Helping you find the answers you need').should('be.visible')
  })

  it('Verify onclick Country icon displays other options', () =>{
    HomePage.mobileMenu().should('be.visible').click()
    HomePage.countryIcon().should('be.visible').click()
    HomePage.mobileCountryList().children().contains("United Kingdom").click()
     })

  it('Verify main navigation menu being displayed', () =>{
    HomePage.mobileMenu().should('be.visible').click()
    HomePage.mainNav().children().contains("About").click()
    cy.url().should('include','about')

  })

  it('Verify search icon being displayed on the header', () =>{
    HomePage.mobileSearchIcon().should('be.visible').click()
    //HomePage.mobileSearchField().should('have.attr','placeholder',"I need help with...")
   // cy.get('.cmp-search-box').click()
    //cy.get('#search-header > div.CoveoSearchbox > div').type("Health")
    //HomePage.mobileSearchField().clear().type(data.searchText)
    //HomePage.mobileSearchFieldIcon().should('be.visible')
  })

  it('Verify Social media icons being displayed', () =>{
    HomePage.socialMedia().should('be.visible')
    HomePage.socialMedia().first().should('have.attr','title','Facebook')
  })

  it('Verify footer link "About Us" being displayed', () =>{
    //cy.get(':nth-child(1) > .cmp-footer__nav-header')
      HomePage.footerLinks().should('include.text',"About Us")
  })

  it('Verify footer link "Careers" being displayed', () =>{
    HomePage.footerLinks().should('include.text',"Careers")

  })
  
  it('Verify footer link "Support" being displayed', () =>{
      HomePage.footerLinks().should('include.text',"Support")
  })

  it('Verify Privacy footer links being displayed', () =>{
    //cy.get('.cmp-footer__bottom-bar').should('be.visible')
    HomePage.privacyFooter().should('be.visible')
    HomePage.privacyFooter().first().should('include.text',"Privacy")
    
  })

  it('Verify copyright text "© 2020 Change Healthcare" being displayed', () =>{
    //cy.get('.cmp-footer__copyright-text')
      HomePage.privacyFooter().should('include.text',"© 2020 Change Healthcare")
     
  })

})