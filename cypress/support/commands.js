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
import HomePage from "../e2e/pages/home"
import 'cypress-file-upload'
Cypress.Commands.add("HomePage", () => { 
    cy.visit('/')
    cy.title().should('eq','Banking, Investments, Mortgage Loans | Arvest Bank')
    //HomePage.acceptCookie().should('be.visible').click()
 })
Cypress.Commands.add("PrivacyPopUp", () =>{
   cy.get('#onetrust-accept-btn-handler').click()
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
   
})

Cypress.Commands.add("elmExits", () => { 
   cy.get("body").then($body => {
   if ($body.find(HomePage.acceptCookie()).length > 0) {   //evaluates as true
      cy.get('#onetrust-accept-btn-handler').click()
   }
})
})

Cypress.Commands.add("logIntoLeftBar", () => { 
   HomePage.logInIdInputFieldLeftNav().should('have.attr', 'placeholder', 'Enter Your Login ID').type("test@test.com")
   //HomePage.logInButtonLeftNav().should('have.attr', 'value', 'LOG IN').click()
   //cy.go('back')
   //cy.title().should('be.eq', 'Arvest: Personal: Arvest Online Banking: Online Banking')
})

Cypress.Commands.add("askArvestByPickingSuggestion", () => { 
   HomePage.askArvestInput().should('have.attr', 'placeholder','Enter a Question or Keyword').type('checks').wait(4000)
    HomePage.askButton().should('have.attr', 'value','Ask').should('be.visible')
    cy.get('#ui-id-1').children().first().click()
    cy.title().should('be.eq', 'Search Results | Arvest Bank')
})

Cypress.Commands.add("askArvestByClickingAskButton", () => { 
   HomePage.askArvestInput().should('have.attr', 'placeholder','Enter a Question or Keyword').type('checks')
    HomePage.askButton().should('have.attr', 'value','Ask').should('be.visible').click()
    cy.title().should('be.eq', 'Search Results | Arvest Bank')
})
Cypress.Commands.add("personalNavLinks", () => { 
   HomePage.mainNav().children().contains("Personal").trigger('mouseover').click()
    cy.get('.is-expanded > .coh-container > .coh-row > .coh-row-inner').find('ul > li:nth-child(1)').should('have.length',5)
    cy.get('.is-expanded > .coh-container >').should('be.visible').contains('Open an Account')
    cy.get('.is-expanded > .coh-container >').should('be.visible').contains('Start Home Loan Process')
    cy.get('.is-expanded > .coh-container >').should('be.visible').contains('Checking').click()
    cy.title().should('be.eq', 'Explore Checking Account Options & Apply Today | Arvest Bank')
})

Cypress.Commands.add("homeLoanNavLinks", () => { 
   //HomePage.mainNav().children().contains("Home Loans").trigger('mouseover',{force: true}).click({force: true})
    //HomePage.mainNav1().children().contains("Home Loans", {force:true}).trigger('mouseover').click({force:true})
   HomePage.mainNav1().contains("Home Loans").trigger('mouseover').click()
    cy.get('.is-expanded > .coh-container > .coh-row > .coh-row-inner').find('ul > li:nth-child(1)').should('have.length',5)
    cy.get('.is-expanded > .coh-container >').should('be.visible').contains('Buy A Home')
    cy.get('.is-expanded > .coh-container >').should('be.visible').contains('Pre-Qualify')
    cy.get('.is-expanded > .coh-container >').should('be.visible').contains('Find a Loan Officer').click()
    cy.title().should('be.eq', 'Find a Mortgage Loan Officer | Arvest Bank')
})

Cypress.Commands.add("addNode", (node) => { 
   cy.get('.admin-item').within(($form) => {
      cy.contains(node).click()
    })
})

Cypress.Commands.add('deleteNode', () =>{
   cy.get('nav.tabs > .tabs').within(($form) =>{
   cy.contains('Delete').click()
 })
   cy.get('h1').should('contain', 'Are you sure you want to delete the content item').should('be.visible')
   cy.get('#edit-actions').within(($form) =>{
   cy.contains('Delete').click()
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

Cypress.Commands.add('logIn', (user,password) =>{
   cy.request({
    method: 'POST',
    url: '/user/login', 
    form: true,
    body: { 
      name: Cypress.env('cyAdminUser'),
      pass: Cypress.env('cyAdminPassword'),
      form_id: 'user_login_form' 
    }
})
})

Cypress.Commands.add('loginSession', () =>{
   
      cy.visit('/user/login');
      cy.get('#edit-name').type('extahossain@arvest.com');
      cy.get('#edit-pass').type('DrupalTest7$');
      cy.get('#edit-submit').click();
      cy.title().should('include', 'Moderation Dashboard | Arvest Bank')
   })


Cypress.Commands.add('logout', () => {
  return cy.request('/user/logout')
})

Cypress.Commands.add(
  'selectNth',
  { prevSubject: 'element' },
  (subject, pos) => {
    cy.wrap(subject)
      .children('option')
      .eq(pos)
      .then(e => {
        cy.wrap(subject).select(e.val())
      })
  }
)
