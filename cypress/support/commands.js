// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import HomePage from "../integration/pages/home"
Cypress.Commands.add("HomePage", () => { 
    cy.visit('/')
    cy.title().should('eq','Healthcare Technology & Business Solutions Company | Change Healthcare')
    //HomePage.acceptCookie().should('be.visible').click()
 })
//setting viewport for iPhone Pro max 11 
 Cypress.Commands.add("ProMax11", () => { 
    cy.viewport(414,896)
   })

 Cypress.Commands.add('iframe', () => {
   cy.get('.cmp-header__search-toggle').should('be.visible').click()
   cy.get('.coveo-header-iframe-container > iframe').then($iframe => {
       const $body = $iframe.contents().find('body')
       return cy.wrap($body)
     })
})

Cypress.Commands.add("VisitPage", (path,title) => { 
   cy.visit('/')
   cy.title().should('include',title)
   //HomePage.acceptCookie().should('be.visible').click()
})

Cypress.Commands.add("elmExits", () => { 
   cy.get("body").then($body => {
   if ($body.find(HomePage.acceptCookie()).length > 0) {   //evaluates as true
      cy.get('#onetrust-accept-btn-handler').click()
   }
})
})

//
Cypress.Commands.add("AcceptCookie", () => { 
   HomePage.acceptCookie().then(($btn) => {
      //if ($btn.hasClass) {
      if (cy.url().should('eq','https://www.changehealthcare.com/')) {
         $btn.click()
      } else {
        cy.log('Cookie Doesnt exisit')
      }
    })
   })