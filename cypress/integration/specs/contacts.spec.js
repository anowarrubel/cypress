/// <reference types="cypress" />
import HomePage from "../pages/home"

context('Verify Contact forms', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })



  beforeEach(() => {
    cy.HomePage()
    HomePage.mainNav().contains('Contact').click()
    cy.title().should('eq','Contact Us | Change Healthcare')
    cy.url().should('contains','/contact')
    cy.fixture("example.json").as("testdata")
    })


    it('Verify Product Support Portals page', function() {
      cy.get('.cmp-teaser__link').first().click()
      cy.url().should('contains', '/customer-support-portals')
      cy.title().should('contains','| Change Healthcare')
      cy.contains('ON24/7').should('be.visible')
      cy.contains('IW&CS Support Portal').should('be.visible')
      cy.contains('Software & Analytics Customer Hub').should('be.visible')
      cy.contains('Revenue Performance Advisor').should('be.visible')
      cy.contains('Contact Support').should('be.visible')
    })
      
    it('Verify Contact Sales form', function() {
        cy.get('.cmp-grid-container__3col').first().click()
        cy.url().should('contains', '/contact/sales')
        cy.title().should('contains','| Change Healthcare')
        cy.contains('Sales Inquiry Form').should('be.visible')
        cy.get('.eloqua-form-wrapper').contains('Submit').click()
        cy.get('[class=error]').should('be.visible').should('have.length',10)
        cy.get('.elq-form').contains('First Name').type(this.testdata.fname)
        cy.get('.elq-form').contains('Last Name').type(this.testdata.lname)
        cy.get('.elq-form').contains('Business Email:').type(this.testdata.email)
        cy.get('.elq-form').find('#field3').select(this.testdata.JobFunct)
        cy.get('.elq-form').find('#field4').select(this.testdata.JobFunct)
        cy.get('.elq-form').find('#field5').select(this.testdata.solInterest)
        cy.get('.elq-form').find('#field8').type(this.testdata.company)
        cy.get('.elq-form').find('#field9').select(this.testdata.JobFunct)
        cy.get('.elq-form').contains('Business Phone').type(this.testdata.phone)
        cy.get('.elq-form').find('#field15').select(this.testdata.state)
        cy.get('.elq-form').contains('Comments/How can we help?').type(this.testdata.body)
        cy.get('.elq-form').contains('Submit').click()
        cy.get('h1').should('have.text', 'Thank You')
        cy.url().should('include','/contact/sales/thank-you/')
        cy.title().should('include','| Change Healthcare')
      })

      it('Verify Partnership form', function() {
        cy.get('.cmp-teaser__link').last().click()
        cy.url().should('contains', '/contact/partnerships')
        cy.title().should('contains','| Change Healthcare')
        cy.contains('Partner Inquiry Form').should('be.visible')
        cy.get('#fe27678').click()
        //cy.get('.LV_invalid').should('be.visible').should('have.length',10)
        cy.get('.elq-form').contains('First Name').type(this.testdata.fname)
        cy.get('.elq-form').contains('Last Name').type(this.testdata.lname)
        cy.get('.elq-form').contains('Email Address').type(this.testdata.email)
        cy.get('.elq-form').contains('Business Phone').type(this.testdata.phone)
        cy.get('.elq-form').contains('Company').type(this.testdata.company)
        cy.get('.elq-form').find('[name=stateProv]').select(this.testdata.state)
        cy.get('.elq-form').contains('Address 1').type(this.testdata.addr)
        cy.get('.elq-form').find('[name=companyProfile]').select(this.testdata.JobFunct)
        cy.get('#fe27684').select(this.testdata.partnerInterest)
        cy.get('#fe27686').select(this.testdata.JobFunct)
        cy.get('#fe27688').select('Yes')
        cy.get('[value=Submit]').click()
        cy.get('h1').should('have.text', 'Thank You')
        cy.url().should('include','/contact/sales/thank-you')
        cy.title().should('include','| Change Healthcare')
      })


})
