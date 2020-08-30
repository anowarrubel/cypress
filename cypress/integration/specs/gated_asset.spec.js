/// <reference types="cypress" />
import HomePage from "../pages/home"

context('Verify Gated Asset page', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })



  beforeEach(() => {
    cy.HomePage()
    cy.AcceptCookie()
    cy.contains('Insights').click()
    cy.title().should('eq','Healthcare Industry Insights | Healthcare IT Insights | Change Healthcare')
    cy.url().should('contains','/insights')
    cy.fixture("example.json").as("testdata")
    cy.contains('Watch Video').first().click()
    cy.url().should('contains', '/insights')
    cy.title().should('contains','Change Healthcare')
    cy.wait(5000)
    
    })



      it('Verify Gated form being displayed', () => {
        cy.get('.cmp-asset-embed__modal-inner-contents').should('be.visible')
      })

      it('Verify Go Back link being displayed', () => {
        
        cy.get('.cmp-asset-embed__modal-inner-contents').should('be.visible')
          .contains('Go Back >>').should('be.visible').click()
        cy.url().should('contains', '/insights')
      })
 
      it('Verify Error message being displayed for required fields', () => {
        cy.get('.cmp-asset-embed__modal-inner-contents').should('be.visible')
          .contains('Submit').click()
        cy.get('#field0-error').should('be.visible').should('have.text','This field is required.')
        cy.get('#field1-error').should('be.visible').should('have.text','This field is required.')
        cy.get('#field2-error').should('be.visible').should('have.text','This field is required.')
        cy.get('#field4-error').should('be.visible').should('have.text','This field is required.')
        cy.get('#field5-error').should('be.visible').should('have.text','This field is required.')
        cy.get('#field8-error').should('be.visible').should('have.text','This field is required.')
      })

      it('Verify Gated asset being displayed on successful form Submission', function() {
      cy.get('.cmp-asset-embed__modal-inner-contents').should('be.visible')
      cy.get('#field0').type(this.testdata.fname).should('have.value',this.testdata.fname)
      cy.get('#field1').type(this.testdata.lname).should('have.value',this.testdata.lname)
      cy.get("[name='emailAddress']").first().type(this.testdata.email).should('have.value',this.testdata.email)
      cy.get("[name='company']").type(this.testdata.company).should('have.value',this.testdata.company)
      cy.get("[name='organizationType1']").select(this.testdata.orgtype).should('have.value', this.testdata.orgtype)
      cy.get("[name='stateProv']").select(this.testdata.state).should('have.value',this.testdata.state)
      cy.get('span > input').click()
      cy.server()
      cy.route('POST', '/e/f2').as('post')
      cy.get('.submit-button').click()
      cy.get('.cmp-article-header__title').should('be.visible')
      cy.wait('@post').its('status').should('eq', 200)
      cy.get('@post').should((xhr) =>{
        expect(xhr.requestBody).to.include('elqFormName=ContactUsFormGatedAsset')
        expect(xhr.requestBody).to.include('firstName=Test&lastName=Test&emailAddress=test%40changehealthcare.com')
        expect(xhr.requestBody).to.include(this.testdata.fname)
        expect(xhr.requestBody).to.include('company=Change+Healthcare&organizationType1=Software+Vendor')
        expect(xhr.requestBody).to.include('stateProv=IL&SFDC_Instance_Id=BPS')
        expect(xhr.requestBody).to.include(this.testdata.state)
        expect(xhr.requestBody).to.include('subscribe=on')
        expect(xhr.requestHeaders).to.have.property('Content-Type')

      })
      cy.get('.cmp-asset-embed__modal-inner-contents').should('not.be.visible')
    })

    it('Verify EPC Data Attribute', function(){
      cy.location('pathname').then(($patht) =>{
        const txt=$patht
        cy.request(txt).its('body').as('respt')
        cy.get('@respt').should('include','<div data-epc="true" data-key="SFDC_Instance_Id" data-value="BPS"></div>')
          .should('include','<div data-epc="true" data-key="SFDC_Instance_Id" data-value="BPS"></div>')
          .should('include', 'cmp-eloqua-form-wrapper')
          .should('include','<div data-epc="true" data-key="productid" data-value=')
          .should('include', '<div data-epc="true" data-key="HighLevelMarketSegment" data-value="Providers"></div>')
          .should('include', '<div data-epc="true" data-key="WebSolutionArea" data-value="Revenue Cycle Management"></div>')
          .should('include','<div data-epc="true" data-key="ModuleName" data-value="Patient Access Center Services"></div>')
          .should('include','<div data-epc="true" data-key="MarketingSubSegment"></div>')
     })
        })
        
    })


