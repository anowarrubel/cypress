/// <reference types="cypress" />
import HomePage from "../pages/home"
import LinkPage from "../pages/links"


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

context('Verify Arvest Sanity tests', () => {
  beforeEach(() => {
    cy.HomePage()
    //cy.PrivacyPopUp()
    cy.fixture('example').then(function(datay){
      this.data=datay
    })

  })
 
  it(' "Career" page is displayed', () => {
    HomePage.topMenuList().children().contains('Careers').should('be.visible').click()
    cy.title().should('be.eq', 'Careers with Arvest & Family of Companies')
  })
  it(' "Verify Federated login', () => {
    cy.visit('/user')
    cy.url().should('include', '/user/login' )
    cy.title().should('be.eq','Log in | Arvest Bank')
    LinkPage.federatedLoginScreen().contains("Username").type('test@test.com')
    LinkPage.federatedLoginScreen().contains("Password").type('test@test.com')
    //LinkPage.federatedLoginScreen().contains('Log in').click()
    //cy.contains('Unrecognized username or password')
    //cy.title().should('be.eq','Log in | Arvest Bank')
    //LinkPage.federatedLoginScreen().contains('Federated login').click()
    //cy.title().should('be.eq', 'Sign in to your account')
  })
  it(' "Blueiq" page is displayed', () => {
    cy.visit('/personal/bank/online/blueiq ')
    cy.title().should('be.eq', 'Online Banking with BlueIQ™ | Arvest Bank')
  })
  it(' "Wealth" page is displayed', () => {
    cy.visit('/wealth ')
    cy.title().should('be.eq', 'Wealth | Arvest Bank')
  })
  it(' "Mortage Programs" page is displayed', () => {
    cy.visit('/personal/borrow/home-loans/mortgage-programs')
    cy.title().should('be.eq', 'Mortgage Loan Programs for Homeowners | Arvest Bank')
    cy.contains('Conventional').click({force:true})
    cy.title().should('be.eq', 'Conventional Mortgage Loans | Arvest Bank')
    cy.contains('Start Application Online').click()
    cy.wait(4000)
    cy.url().should('include','homehub/signup/MORTGAGELENDER@ARVEST.COM')

  })
  it(' "Checking" page is displayed', () => {
    cy.visit('/personal/bank/checking')
    cy.title().should('be.eq', 'Explore Checking Account Options & Apply Today | Arvest Bank')
  })
  it(' "Free Blue Checking" page is displayed', () => {
    cy.visit('/personal/bank/checking/free-blue')
    cy.title().should('be.eq', 'Free Blue™ Checking from Arvest Bank')
  })
  it(' "Basic Blue Checking" page is displayed', () => {
    cy.visit('/personal/bank/checking/basic-blue')
    cy.title().should('be.eq', 'Basic Blue™ Checking from Arvest Bank')
  })
  it(' "MyBlue" page is displayed', () => {
    cy.visit('/personal/bank/checking/myblue')
    cy.title().should('be.eq', 'MyBlue® Checking | Arvest Bank')
    cy.contains('Apply Now').click()
    cy.wait(7000)
    cy.url().should('include','secure.arvest.com/apply')
    //cy.title().should('be.eq', 'Product Selector')
  })
  it(' "Checking Club" page is displayed', () => {
    cy.visit('/personal/bank/checking/club')
    cy.title().should('be.eq', 'Arvest Club Checking from Arvest Bank')
  })
  it(' "Preferred Club" page is displayed', () => {
    cy.visit('/personal/bank/checking/preferred-club')
    cy.title().should('be.eq', 'Preferred Club Checking from Arvest Bank')
  })
  it(' "Bright Solutions Club" page is displayed', () => {
    cy.visit('/personal/bank/checking/bright-solutions')
    cy.title().should('be.eq', 'Arvest Bright Solutions™ Banking | Arvest Bank')
  })
  it(' "Overdraft Coverage" page is displayed', () => {
    cy.visit('/personal/bank/checking/overdraft-coverage-options ')
    cy.title().should('be.eq', 'Overdraft Coverage Options | Arvest Bank')
  })
  it(' "Apply Online" page is displayed', () => {
    cy.visit('/personal/bank/checking')
    LinkPage.checkingLeftNavBar().contains('Apply Online').click({force:true}).wait(1000)
    //cy.title().should('be.eq', 'Product Selector')
  })
  it(' "Order Checks" page is displayed', () => {
    cy.visit('/personal/bank/checking')
    LinkPage.checkingLeftNavBar().contains('Order Checks').click({force: true})
    cy.title().should('be.eq', 'Personal Checks - Order Deluxe Checks')
    cy.go('back')
  })
  it(' "Debit Card Designs" page is displayed', () => {
    cy.visit('/personal/bank/checking')
    LinkPage.checkingLeftNavBar().contains('Debit Card Designs').click({force:true})
    cy.title().should('be.eq', 'Specialty Debit Card Designs | Arvest Bank')
    //cy.get('.edit-field-geolocation-proximity-center-coordinates--5').should('not.exist')
    cy.contains('Coordinates').should('not.exist')
    cy.contains('Latitude').should('not.exist')
    cy.contains('Longitude').should('not.exist')

  })
  
  it(' "Home Loans Hub" page is displayed', () => {
    cy.visit('/personal/borrow/home-loans')
    cy.title().should('be.eq', 'Home Loans with Local Service | Arvest Bank')
  })
  /*i
  it(' "Home Servicing Hub" page is displayed', () => {
    cy.visit('/personal/borrow/home-loans')
    cy.title().should('be.eq', 'Home Loans with Local Service | Arvest Bank')
    LinkPage.checkingLeftNavBar().contains('Home Loan Servicing').click({force:true})

  })
  */
  
  it(' "Documents and Resources" page is displayed', () => {
    HomePage.privacyLinks().find('ul > li:nth-child(4)').contains('Documents & Resources').click()
    cy.title().should('be.eq', 'Documents & Resources | Arvest Bank')
  })
  it('"Contact Us" Page is displayed', () => {
    HomePage.topMenuList().children().contains('Contact').should('be.visible').click()
    cy.title().should('be.eq', 'Contact Arvest Bank | Arvest Bank')
    
  })

    it('"Schedule an appointment" Page is displayed', () => {
    HomePage.topMenuList().children().contains('Contact').should('be.visible').click()
    cy.title().should('be.eq', 'Contact Arvest Bank | Arvest Bank')
    // delete target attribute with invoke for link
    cy.contains('Schedule an appointment').invoke('removeAttr', 'target').click()
    })

     it('"Customer Service Email" Page is displayed', () => {
    HomePage.topMenuList().children().contains('Contact').should('be.visible').click()
    cy.title().should('be.eq', 'Contact Arvest Bank | Arvest Bank')
    cy.contains('Customer Service Email').click()
    cy.title().should('be.eq', 'Email Arvest Bank')
    cy.get('select#edit-subject').select(1, {force: true})
    // delete target attribute with invoke for link
    //cy.get('div>em').should("be.visible")
    //cy.get('#select2-edit-subject-container').should('have.title', 'Online Banking Password Reset or Enrollment')
    })
     it('"Contact Arvest Mortgage Division" Page is displayed', () => {
    HomePage.topMenuList().children().contains('Contact').should('be.visible').click()
    cy.title().should('be.eq', 'Contact Arvest Bank | Arvest Bank')
    LinkPage.leftSideNav().contains('Mortgage').click({force: true})
    cy.title().should('be.eq', 'Contact Arvest Mortgage, Arvest Bank')
    cy.contains("Mortgage Servicing Email").click()
    cy.title().should("be.eq", 'Arvest Bank contact form, email Arvest Mortgage Customer Service')
    //LinkPage.h1PageHeader().should('be.eq', ' Contact Arvest Bank - Mortgage Division ')
    })

  it('"Calculator" page is displayed', () => {
    HomePage.mainNav().children().contains("Personal").trigger('mouseover').click()
    cy.get('.is-expanded > .coh-container >').should('be.visible').contains('Calculators').click()
    cy.title().should('be.eq', 'Financial Calculators | Arvest Bank')
  })
    it('"Mortgage Comparison Calculator" page is displayed', () => {
    HomePage.mainNav().children().contains("Personal").trigger('mouseover').click()
    cy.get('.is-expanded > .coh-container >').should('be.visible').contains('Calculators').click()
    cy.title().should('be.eq', 'Financial Calculators | Arvest Bank')
    cy.contains("Which mortgage is better for me?").click()
    cy.title().should('be.eq', 'Mortgage Comparison Calculator | Arvest Bank')
    })

  it('"Zero" landing page is displayed', () => {
    cy.visit('/zero')
    cy.title().should('be.eq', 'Zero Intro APR for Credit Cards | Arvest Bank')
  })
  it('"Switch" landing page is displayed', () => {
    cy.visit('/switch')
    cy.title().should('be.eq', 'Switch to Arvest | Arvest Bank')
  })
  it('"Home4me" landing page is displayed', () => {
    cy.visit('/home4me')
    cy.title().should('be.eq', 'Home Loans with Home4Me™ | Arvest Bank')
  })
  it('"Education Center" landing page is displayed', () => {
    HomePage.privacyLinks().find('ul > li:nth-child(3)').contains('Education Center').click()
    cy.title().should('be.eq', 'Education Center | Arvest Bank')
  })
  it('"Privacy Opt Out Request form" page is displayed', () => {
    HomePage.privacyLinks().find('ul > li:nth-child(1)').contains('Privacy & Security').click()
    cy.title().should('be.eq', 'Privacy and Security Information from Arvest Bank')
    cy.contains("Opt-Out Request").click({force:true})
    cy.title().should('be.eq', 'Opt-Out Request | Arvest Bank')
  })
     
  it('"Online banking" login page is displayed', ()=>{
      cy.logIntoLeftBar()
     })

  it('Verify "Ask Arvest" feature by picking a option from suggestion', () => {
      cy.askArvestByPickingSuggestion()
    })

  it('Verify "Ask Arvest" feature by clicking on the "Ask" button', () => {
      cy.askArvestByClickingAskButton()
    })


})


