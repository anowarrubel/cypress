/// <reference types="cypress" />
/// <reference types='cypress-tags' />
import HomePage from "../pages/home"


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

context('Verify Home page', () => {
  beforeEach(() => {
    cy.HomePage()
    //cy.PrivacyPopUp()
    cy.fixture('example').as('testdata')

  })
 
  it('Verify Top Menu section is displayed', () => {
    HomePage.topMenuList().should('be.visible')
  })
  it('Verify Top Menu section has Four links', () => {
    HomePage.topMenuList().children().should('have.length',4)
  })
  it('Verify Rates link is displayed on Top Menu', () => {
    HomePage.topMenuList().children().contains('Rates').should('be.visible')
  })
  it('Verify About link is displayed on Top Menu', () => {
    HomePage.topMenuList().children().contains('About').should('be.visible')
  })
  it('Verify Contact link is displayed on Top Menu', () => {
    HomePage.topMenuList().children().contains('Contact').should('be.visible')
  })
  it('Verify Careers link is displayed on Top Menu', () => {
    HomePage.topMenuList().children().contains('Careers').should('be.visible').click()
    cy.title().should('be.eq', 'Careers with Arvest & Family of Companies')
  })
  it('Verify Ask Everest field is displayed on Top Menu', () => {
    HomePage.askArvest().children().contains('Ask Arvest').should('be.visible')
  })   
  it('Verify "Enter a Question or Keyword" place holder text displayed on Top Menu', () => {
    HomePage.askArvestInput().should('have.attr', 'placeholder','Enter a Question or Keyword')
  })
  it('Verify "ASK" button is displayed on Top Menu', () => {
    HomePage.askButton().should('have.attr', 'value','Ask').should('be.visible')
  })

  it('Verify "Arvest" logo is displayed on Top left corner', () => {
    HomePage.arvestLogo().children().should('have.attr', 'href','/').should('be.visible')
  })

  it('Verify ATM & Branch locations label being displayed', () => {
    HomePage.atmBranchLabel().contains('Atm & Branch Locations').should('be.visible')
  })

  it('Verify ATM & Branch field being displayed', () => {
    HomePage.atmBranchField().should('have.attr', 'placeholder','City, State or Zip')
  })

   it('Verify "Go" button is displayed for ATM branch', () => {
    HomePage.atmBranchButton().should('have.attr', 'value','Go').should('be.visible')
  })
   it('Verify Main Nav is displayed', () => {
    HomePage.mainNav().should('be.visible')
  })
   it('Verify Personal is displayed in Main Nav', () => {
    HomePage.mainNav().children().contains("Personal").trigger('mouseover').click()
    
  })
   it('Verify Business is displayed in Main Nav', () => {
    HomePage.mainNav().children().contains("Business")
  })
   it('Verify Personal is displayed in Main Nav', () => {
    HomePage.mainNav().children().contains("Credit Cards")
  })
   it('Verify Credit Cards is displayed in Main Nav', () => {
    HomePage.mainNav().children().contains("Home Loans")
  })
   it('Verify Investments & Trusts is displayed in Main Nav', () => {
    HomePage.mainNav().children().contains("Investments & Trusts")
  })
   it('Verify Log In To link displayed on Main Nav', () => {
    HomePage.logInTo_Main_Nav().contains("LOG IN TO...")
  })
  /*it('Verify "My Accounts" section displayed on the left Nav bar', () => {
    HomePage.myAccounts().contains("My Accounts")
  })*/
    
    it('Verify "Enter your Login Id" section is displayed', ()=>{
      HomePage.logInId().should("be.visible")
    })
    it('Verify "Enter your Login Id" Placeholder text is displayed', ()=>{
      HomePage.logInIdInputFieldLeftNav().should('have.attr', 'placeholder', 'Enter Your Login ID')
    })
    it('Verify "LOG IN" button is displayed', ()=>{
      HomePage.logInButtonLeftNav().should('have.attr', 'value', 'LOG IN')
    })
    it('Glide is displayed', ()=>{
      HomePage.glideHome().should('be.visible')
    })

    it(' 1st slider is displayed in the Glide', ()=>{
      HomePage.glideHome().contains('CD Rate Special')
    })

    it(' 2nd slider is displayed in the Glide', ()=>{
      HomePage.glideHome().contains('Equipment Loans')
    })
    
    it(' 3rd slider is displayed in the Glide', ()=>{
      HomePage.glideHome().contains('Purchasing Card')
    })
    it(' 4th slider is displayed in the Glide', ()=>{
      HomePage.glideHome().contains('Consumer Loans')
    })

    it(' "Social Media" section is displayed in the footer', ()=>{
      HomePage.socialMedia().should('is.visible')
    })


    it(' "Share" icon is displayed first in Social Media Section', ()=>{
      HomePage.socialMedia().find('ul > li:nth-child(1)').children().should('have.attr', 'data-icon', 'social').click()
    })

     it(' "Facebook" icon is displayed 2nd in Social Media Section', ()=>{
      HomePage.socialMedia().find('ul > li:nth-child(2)').children().should('have.attr', 'data-icon', 'facebook').click()
    })
     it(' "Twitter" icon is displayed 3rd in Social Media Section', ()=>{
      HomePage.socialMedia().find('ul > li:nth-child(3)').children().should('have.attr', 'data-icon', 'twitter').click()
    })
     it(' "Instagrm" icon is displayed 4th in Social Media Section', ()=>{
      HomePage.socialMedia().find('ul > li:nth-child(4)').children().should('have.attr', 'data-icon', 'instagram').click()
    })
     it(' "Youtube" icon is displayed 5th in Social Media Section', ()=>{
      HomePage.socialMedia().find('ul > li:nth-child(5)').children().should('have.attr', 'data-icon', 'youtube').click()
    })

     it(' "Privacy & Security" link is displayed on the footer', ()=>{
      HomePage.privacyLinks().find('ul > li:nth-child(1)').contains('Privacy & Security')
    })
     it(' "Available Properties" link is displayed on the footer', ()=>{
      HomePage.privacyLinks().find('ul > li:nth-child(2)').contains('Available Properties')
    })
     it(' "Education Center" link is displayed on the footer', ()=>{
      HomePage.privacyLinks().find('ul > li:nth-child(3)').contains('Education Center')
    })
     it(' "Documents & Resources" link is displayed on the footer', ()=>{
      HomePage.privacyLinks().find('ul > li:nth-child(4)').contains('Documents & Resources')
    })
     it(' "Site Map" link is displayed on the footer', ()=>{
      HomePage.privacyLinks().find('ul > li:nth-child(5)').contains('Site Map').click()
      cy.title().should('eq','Sitemap | Arvest Bank')

    })
     
})


