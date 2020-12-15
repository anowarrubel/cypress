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
    //cy.AcceptCookie()
    cy.elmExits()
    cy.fixture('example').then(function(datay){
      this.data=datay
    })

  })
 
  it('Verify Covid19 link displayed', () => {
    //HomePage.covid19().should('be.visible')
    HomePage.utilityNav().children().contains('COVID-19').should('be.visible')
  })

  it('Verify Utility nav being displayed', () => {
    
    HomePage.utilityNav().should('be.visible')
    HomePage.utilityNav().children().contains('Support').should('be.visible')
    
  })

  it('Verify onclick Country icon displays other options', () =>{
    HomePage.countryIcon().should('be.visible')
     })

  it('Verify main navigation menu being displayed', () =>{
    HomePage.mainNav().should('be.visible')
    HomePage.mainNav().contains("Contact").should('be.visible').click()
    cy.url().should('include', "/contact")
  })

  it('Verify main navigation menu has Four menu links', () =>{
    HomePage.mainNav().should('be.visible')
    .should('have.length',4)
  })

  it('Verify search icon being displayed on the header', () =>{
    HomePage.searchIcon().should('be.visible').click()
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

  it('Verify  Newsletter  field being displayed', function(){
    HomePage.newsLetter().should('be.visible').type('test@changehealthcare.com').should('have.value','test@changehealthcare.com')
    cy.contains('Subscribe').click()
    cy.title().should('eq', 'Healthcare Technology & Business Solutions Company | Change Healthcare')
    cy.get('.cmp-newsletter-signup__subscribed').should('be.visible')
      .contains('Thank you for signing up!')
    cy.get('.btn-close').click()
    //HomePage.newsLetter().should('not.be.visible')

  })

})
