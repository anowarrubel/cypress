class Link_Page{

    acceptCookie(){
       return cy.get('#onetrust-accept-btn-handler')
    } 
    federatedLoginScreen(){
       return cy.get('.user-login-form')
    } 
     checkingLeftNavBar(){
       return cy.get('#block-sidebar-menu-main-navigation>ul>li>a')
    }
    //contact/banking/email-bank
    emailCustomerService(){
       return cy.get('#edit-subject')
    }  

    //contact
    leftSideNav(){
       return cy.get('.sidebar-menu >nav')
    }  
    ///contact/mortgage/email-amc
    h1PageHeader(){
      return cy.get('coh-heading')
    }
}
const LinkPage=new Link_Page()
export default LinkPage
