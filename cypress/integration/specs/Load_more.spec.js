
/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  context('Verify on click of "Load More" more teasers displayed ', () => {
    
    beforeEach(() => {
      cy.HomePage()
      cy.AcceptCookie()
    })

    it('Verify "Load More" feature on Insight Page', () =>{
      cy.contains('Insight').click()
      cy.url().should('include','/insigh')
      cy.title().should('eq', 'Healthcare Industry Insights | Healthcare IT Insights | Change Healthcare')
      cy.get('.cmp-article-list__posts').last().children().should('have.length',6)
      cy.contains('Load More').click()
      cy.get('.cmp-article-list__posts').last().children().should('have.length',12)

    })

    it('Verify "Load More" feature on Newsroom Page', () =>{
      cy.get(".cmp-header__nav-dropdown").first().invoke('show')
      cy.contains('Newsroom').click({force: true})
      cy.url().should('include','newsroom')
      cy.title().should('eq', 'Recent News & Press Releases | Press Room | Change Healthcare')
      cy.contains('In The News').click()
      cy.url().should('include', '/in-the-news')
      cy.contains('Change Healthcare In The News').should('be.visible')
      cy.get('.cmp-article-list__posts').children().should('have.length',12)
      cy.contains('Load More').click()
      cy.get('.cmp-article-list__posts').children().should('have.length',18)
    })

    it('Verify "Load More" feature on Newsroom Page', () =>{
      cy.get(".cmp-header__nav-dropdown").first().invoke('show')
      cy.contains('Newsroom').click({force: true})
      cy.url().should('include','newsroom')
      cy.title().should('eq', 'Recent News & Press Releases | Press Room | Change Healthcare')
      cy.contains('In The News').click()
      cy.url().should('include', '/in-the-news')
      cy.contains('Change Healthcare In The News').should('be.visible')
      cy.get('.cmp-article-list__posts').children().should('have.length',12)
      cy.contains('Load More').click()
      cy.get('.cmp-article-list__posts').children().should('have.length',18)
    })

    it('Verify "Load More" feature on Podcasts Page', () =>{
      cy.get(".cmp-header__nav-dropdown").first().invoke('show')
      cy.contains('Newsroom').click({force: true})
      cy.url().should('include','newsroom')
      cy.title().should('eq', 'Recent News & Press Releases | Press Room | Change Healthcare')
      cy.contains('Podcasts').click()
      cy.url().should('include', '/insights/podcasts').should('not.include', '/content')
      cy.contains('The Change Healthcare Podcast').should('be.visible')
      cy.get('.cmp-article-list__posts').eq(1).children().should('have.length',9)
      cy.contains('Load More').click()
      cy.get('.cmp-article-list__posts').eq(1).children().should('have.length',15)
    })
     
    })