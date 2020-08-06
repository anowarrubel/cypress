
/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  context('Verify Search feature on the Header', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.get('#onetrust-accept-btn-handler').should('be.visible')
        .click()
    })

    it('Verify Page title', () =>{
        cy.title().should('equal', 'Healthcare Technology & Business Solutions Company | Change Healthcare')
         
      })
      it('Select 2nd from search suggestions', () =>{
        cy.iframe().find('.CoveoSearchbox').type('Health')
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
    