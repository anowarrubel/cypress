import HomePage from "../pages/home"

context('Verify Eloqua forms', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })



  beforeEach(() => {
    cy.HomePage()
    cy.AcceptCookie()
    cy.fixture("example.json").as("testdata")
    })

  it('Verify Contact Sales form', function() {
      HomePage.mainNav().contains('Contact').click()
      cy.title().should('eq','Contact Us | Change Healthcare')
      cy.url().should('contains','/contact')
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
        cy.url().should('include','/contact/sales/thank-you')
        cy.title().should('include','| Change Healthcare')
      })

      it('Verify Partnership form copyOfPartnerContactForm-1574091979616', function() {
        HomePage.mainNav().contains('Contact').click()
      cy.title().should('eq','Contact Us | Change Healthcare')
      cy.url().should('contains','/contact')
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
        cy.server()
        cy.route('POST', '/e/f2').as('post')
        cy.get('[value=Submit]').click()
        cy.get('h1').should('have.text', 'Thank You')
        cy.url().should('include','/contact/sales/thank-you')
        cy.title().should('include','| Change Healthcare')
        cy.wait('@post').its('status').should('eq', 200)
        cy.get('@post').should((xhr) =>{
        expect(xhr.requestBody).to.include('elqFormName=copyOfPartnerContactForm-1574091979616')
      })
      })

      it('Verify Gated Asset form ContactUsFormGatedAsset', function(){
        cy.visit('/insights/managing-costs-patient-access-during-crisis')
        cy.url().should('contains', '/insights')
        cy.wait(7000)
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
        expect(xhr.requestBody).to.include('firstName=Test&lastName=Test&emailAddress=test%40test.com')
        expect(xhr.requestBody).to.include(this.testdata.fname)
        expect(xhr.requestBody).to.include('company=Change+Healthcare&organizationType1=Software+Vendor')
        expect(xhr.requestBody).to.include('stateProv=IL&SFDC_Instance_Id=BPS')
        expect(xhr.requestBody).to.include(this.testdata.state)
        expect(xhr.requestBody).to.include('subscribe=on')
        expect(xhr.requestHeaders).to.have.property('Content-Type')

      })
      cy.get('.cmp-asset-embed__modal-inner-contents').should('not.be.visible')
      })

       it('Verify Product form ContactUsFormProduct', function(){
        cy.visit('/solutions/revenue-cycle-management/patient-access-financial-clearance/clearance-estimator-patient-direct')
        cy.url().should('contains', '/solutions')
        cy.get('.eloqua-form-wrapper').should('be.visible')
        cy.get('#field0').type(this.testdata.fname).should('have.value',this.testdata.fname)
        cy.get('#field1').type(this.testdata.lname).should('have.value',this.testdata.lname)
        cy.get('#field11').type(this.testdata.phone).should('have.value',this.testdata.phone)
        cy.get('#field13').type(this.testdata.body).should('have.value',this.testdata.body)
        cy.get("[name='emailAddress']").first().type(this.testdata.email).should('have.value',this.testdata.email)
        cy.get("[name='company']").type(this.testdata.company).should('have.value',this.testdata.company)
        cy.get("[name='organizationType1']").select(this.testdata.orgtype).should('have.value', this.testdata.orgtype)
        cy.get("[name='stateProv']").select(this.testdata.state).should('have.value',this.testdata.state)
        cy.get('#field7').select(this.testdata.JobFunct).should('have.value',this.testdata.JobFunct)
        cy.get('#field3').select(this.testdata.JobFunct).should('have.value',this.testdata.JobFunct)
      cy.get('#field4').select(this.testdata.JobFunct).should('have.value',this.testdata.JobFunct)
      cy.server()
      cy.route('POST', '/e/f2').as('post')
      cy.get('.submit-button').click()
      cy.get('h1').should('be.visible')
      cy.wait('@post').its('status').should('eq', 200)
      cy.get('@post').should((xhr) =>{
        expect(xhr.requestBody).to.include('elqFormName=ContactUsFormProduct')
        expect(xhr.requestBody).to.include('firstName=Test&lastName=Test&emailAddress=test%40test.com')
        expect(xhr.requestBody).to.include(this.testdata.fname)
        expect(xhr.requestBody).to.include('company=Change+Healthcare&organizationType1=Other')
        expect(xhr.requestBody).to.include('stateProv=IL')
        expect(xhr.requestBody).to.include(this.testdata.state)
        expect(xhr.requestBody).to.not.include('subscribe=on')
        expect(xhr.requestHeaders).to.have.property('Content-Type')

      })
      
      })

    it('Verify Hub page 2010_PA_PP_InfoGatedAsset-Contact_MKTG', function(){
        cy.visit('https://info.changehealthcare.com/payment-solutions-payers/contact')
        cy.url().should('contains', '/contact')
        cy.get('.eloqua-form-wrapper').should('be.visible')
        cy.get('[name="firstName"]').type(this.testdata.fname).should('have.value',this.testdata.fname)
        cy.get('[name="lastName"]').type(this.testdata.lname).should('have.value',this.testdata.lname)
        cy.get('[name="company"]').type(this.testdata.company).should('have.value',this.testdata.company)
        cy.get('[name="title"]').type(this.testdata.JobFunct).should('have.value',this.testdata.JobFunct)
        cy.get('[name="busPhone"]').type(this.testdata.phone).should('have.value',this.testdata.phone)
        cy.get("[name='emailAddress']").first().type(this.testdata.email).should('have.value',this.testdata.email)
        
        cy.get("[name='companyType']").select(this.testdata.orgtype).should('have.value', this.testdata.orgtype)
        cy.get("[name='stateProv']").select(this.testdata.state).should('have.value',this.testdata.state)

        cy.get("[name='jobRole1']").select(this.testdata.JobFunct).should('have.value',this.testdata.JobFunct)
        cy.get("[name='jobLevel1']").select(this.testdata.JobFunct).should('have.value',this.testdata.JobFunct)
        cy.get("[name='optin']").check().should('be.checked')
      cy.server()
      cy.route('POST', '/e/f2').as('post')
      cy.get("[value='Submit']").click()
      cy.get('h1').should('be.visible')
      cy.wait('@post').its('status').should('eq', 200)
      cy.get('@post').should((xhr) =>{
        expect(xhr.requestBody).to.include('elqFormName=2010_PA_PP_InfoGatedAsset-Contact_MKTG')
        expect(xhr.requestBody).to.include('emailAddress=test%40test.com')
        expect(xhr.requestBody).to.include(this.testdata.fname)
        expect(xhr.requestBody).to.include(this.testdata.state)
        expect(xhr.requestBody).to.not.include('ooptin=on')
        expect(xhr.requestHeaders).to.have.property('Content-Type')

      })
      
      })
  })

