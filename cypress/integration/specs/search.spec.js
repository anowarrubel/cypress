
/// <reference types="cypress" />

context('Verify Search feature on the Header', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

    beforeEach(() => {
      cy.visit('/')
      cy.get('#onetrust-accept-btn-handler').should('be.visible').click()
      cy.fixture("example.json").as("testdata")
      })

    it('Verify Page title', () =>{
        cy.title().should('equal', 'Healthcare Technology & Business Solutions Company | Change Healthcare')
         
    })

    it('Select 2nd from search suggestions', function() {
        cy.iframe().find('.CoveoSearchbox').type(this.testdata.searchText)
        .find('#magic-box-suggestion-1').click()
        //.find('.coveo-search-button').click()
        
    })

    

    it('Search for "Health', () =>{
  
        cy.get('.cmp-header__search-toggle').should('be.visible').click()
        cy.get('.coveo-header-iframe-container > iframe').then($iframe => {
            const $body = $iframe.contents().find('body')
            cy.wrap($body)
              .find('.CoveoSearchbox').type('Health')
              .find('.coveo-search-button').click()
            })
    }) 

  })
    