/// <reference types="cypress" />
import HomePage from "../pages/home"
//import { config } from "cypress/types/bluebird"


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

context('Verify Arvest Home page on iPhone Pro Max 11', () => {
  let data
  beforeEach(() => {
  
    cy.ProMax11()
    cy.HomePage()
    cy.fixture('example').as('testdata')
    
  })
  it('Verify Hamburger Menu is displayed on Mobile', () => {
    
    HomePage.mobileBranding().should('be.visible')
    HomePage.mobileBranding().find('[type=button]').should('be.visible')
  

  })
    it('Verify Seven Menu ilinks displayed under Hamburger menu', () => {
      
      HomePage.mobileBranding().should('be.visible')
      HomePage.mobileBranding().find('[type=button]').should('be.visible').click()
      HomePage.mobileMenulinks().should('have.length',7)
      
    })
    it('Verify "Personal" menu link is displayed under Hamburger menu', () => {
      
      HomePage.mobileBranding().should('be.visible')
      HomePage.mobileBranding().find('[type=button]').click()
      HomePage.mobileMenulinks().contains('Personal').should('have.attr', 'aria-expanded', 'false').should('be.visible').click()
      HomePage.mobileMenulinks().contains('Personal').should('have.attr', 'aria-expanded', 'true').should('be.visible')
    })
    it('Verify "Business"  menu link  is displayed under Hamburger menu', () => {
      
      HomePage.mobileBranding().should('be.visible')
      HomePage.mobileBranding().find('[type=button]').click()
      HomePage.mobileMenulinks().contains('Business').should('have.attr', 'aria-expanded', 'false').should('be.visible').click()
      HomePage.mobileMenulinks().contains('Business').should('have.attr', 'aria-expanded', 'true').should('be.visible')
      HomePage.mobileMenulinks().contains('Small Business Deposits').should('be.visible')
      HomePage.mobileMenulinks().contains('Apply for Loan or Line').should('be.visible')
      
    })
     it('Verify "Credit Cards"  menu link  is displayed under Hamburger menu', () => {
      
      HomePage.mobileBranding().should('be.visible')
      HomePage.mobileBranding().find('[type=button]').click()
      cy.get('nav.coh-container.main-menu> ul > li:nth-child(3)>span').should('have.attr', 'aria-expanded', 'false').click()
      //HomePage.mobileMenulinks().select(3).contains('Credit Cards').click()
      //.should('have.attr', 'aria-expanded', 'false').click()
     // HomePage.mobileMenulinks().contains('Credit Cards').should('have.attr', 'aria-expanded', 'true').should('be.visible')
      HomePage.mobileMenulinks().contains('Credit Card Options').should('be.visible')
      HomePage.mobileMenulinks().contains('Log In to Your Personal Account').should('be.visible')
      HomePage.mobileMenulinks().contains('Log In to Your Business Account').should('be.visible')
      
    })
    it('Verify "Home Loans" menu link is displayed under Hamburger menu', () => {
      
      HomePage.mobileBranding().should('be.visible')
      HomePage.mobileBranding().find('[type=button]').click()
      HomePage.mobileMenulinks().contains('Personal').should('be.visible').click()
      HomePage.mobileMenulinks().contains('Bank').should('be.visible')
    })
    it('Verify "Investments & Trusts"  menu link is displayed under Hamburger menu', () => {
      
      HomePage.mobileBranding().should('be.visible')
      HomePage.mobileBranding().find('[type=button]').click()
      HomePage.mobileMenulinks().contains('Personal').should('be.visible').click()
      HomePage.mobileMenulinks().contains('Bank').should('be.visible')
    })
})
