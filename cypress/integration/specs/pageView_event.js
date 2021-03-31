context('Verify PageView Event is Fired', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  
  
  
    beforeEach(() => {
      cy.HomePage()
      cy.contains('Insights').click()
      cy.title().should('eq','Healthcare Industry Insights | Healthcare IT Insights | Change Healthcare')
      cy.url().should('contains','/insights')
      cy.fixture("example.json").as("testdata")
      
      })
    
    it('Verify PageView Event is Fired', () => {
        cy.location('pathname').then(($patht) =>{
            const txt=$patht
            cy.request(txt).its('body').as('respt')
              .should("include","event: 'pageView',")
              .should("include","pageName")
              .should("include","digitalData.push")
        })
    })

    it('Verify EPC Data Attribute', function(){
        cy.visit('/insights/how-apis-promote-healthcare-innovation')
        cy.url().should('contains', '/insights')
      cy.title().should('contains','Change Healthcare')
      cy.wait(1000)
        cy.location('pathname').then(($patht) =>{
          const txt=$patht
          cy.request(txt).its('body').as('respt')
          cy.get('@respt').should("include","event: 'pageView',")
            .should("include","event: 'productInformation',")
            .should('include','productId')
            .should('include','{"productId":"10001919","webNeedsTopicL1"')
       })
          })

})