/// <reference types="cypress" />
import HomePage from "../pages/home"


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

context('Verify Home page', () => {
  beforeEach(() => {
    cy.HomePage()
    cy.fixture('example').then(function(data){
      this.data=data
    })
  
  })
 
  it('Verify Covid19 text', () => {
    HomePage.covid19().should('be.visible')
  })

  it('Verify Utility nav being displayed', () => {
    
    HomePage.utilityNav().should('be.visible')
    HomePage.utilityNav().children().contains('Support').should('be.visible')
  })

  it('Verify onclick Country icon displays other options', () =>{
    HomePage.countryIcon().should('be.visible')
     })

  it('Verify main navigation menu being displayed', () =>{
    HomePage.mainNav().should('be.visible').click()
    HomePage.mainNav().children().contains("Contact").click()
  })

  it('Verify search icon being displayed on the header', () =>{
    HomePage.searchIcon().should('be.visible').click()
    HomePage.mobileSearchField().type('Health')
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
