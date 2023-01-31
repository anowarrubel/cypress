class Home_Page{

    topMenuList(){
        return cy.get('#block-topmenu > .menu')
    }
    askArvest(){
        return cy.get('.coh-style-ask-arvest-search-bar')
    }
    askArvestInput(){
        return cy.get('#edit-search')
    }
    askButton(){
        return cy.get('#edit-submit-database-search')
    }
    arvestLogo(){
        return cy.get('#block-arvestbank-theme-branding')
    }
    atmBranchLabel(){
        return cy.get('.branch-locator-label')
    }
    atmBranchField(){
        return cy.get('#block-branchlocatorform > :nth-child(1) > form > .js-form-item > .form-text')
    }
     atmBranchButton(){
        return cy.get('form > .webform-submit-input > .button')
    }
    mainNav(){
        return cy.get('.coh-style-header-navigation')
    }
     mainNav1(){
        return cy.get('.coh-link.coh-ce-354de6be')
    }
    logInTo_Main_Nav(){
        return cy.get('.top-select > .select2 > .selection > .select2-selection')
    }
    myAccounts(){
        return cy.get('#edit-myaccounts--2 > h2')
    }
    logInTo_SideBar(){
        return cy.get('#select2-external-login--login-select-non-prod-container')
    }
    logInId(){
        return cy.get('#external-login--sidebar-container')
    }
    logInIdInputFieldLeftNav(){
        return cy.get('#edit-arvest-online-banking-username--2')
    }
     logInButtonLeftNav(){
        return cy.get('#edit-actions-submit--2')
    }
     glideHome(){
        //return cy.get('.left-block-padding.glide__bullets')
        return cy.get('.glide__bullets.only-show-on-desktop')
    }
    socialMedia(){
        return cy.get('.coh-row-inner > .coh-social-media-menu')
    }
    privacyLinks(){
        return cy.get('.coh-ce-cpt_site_footer_menu-ed9919b9')
    }
    mobileBranding(){
        return cy.get('.site-branding')
    }
    mobileMenulinks(){
        return cy.get('nav.coh-container.main-menu> ul > li')
    } 
}
const HomePage=new Home_Page()
export default HomePage