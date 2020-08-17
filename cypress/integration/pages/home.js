class Home_Page{

    acceptCookie(){
       return cy.get('#onetrust-accept-btn-handler')

    } 
    covid19(){
        return cy.get('.emergency-message-text > a')
    }
    utilityNav(){
        return cy.get('#nav-1686514900 > ul')
    }
    countryIcon(){
        return cy.get('.fas.fa-globe-americas')
    }
    mainNav(){
        //return cy.get('.cmp-header__nav-list')
        return cy.get('.cmp-header__nav-list-link')
    }
    searchIcon(){
        return cy.get('.cmp-header__search-toggle')
    }
    socialMedia(){
        return cy.get('.cmp-social-links__item-link')
    }
    footerLinks(){
        return cy.get('.cmp-footer__nav')
    }
    privacyFooter(){
        return cy.get('.cmp-footer__bottom-bar')
    }

    newsLetter(){
        return cy.get('.cmp-newsletter-signup__input > input')
    }

    mobileMenu(){
        return cy.get('.cmp-header__nav-open > .fas')
    }
    mobileMainNav(){
        return cy.get('.cmp-header__nav')
    }
    mobileSearchIcon(){
        return cy.get('.cmp-header__search-open > .fa-search')
    }
    mobileSearchField(){
        //return cy.get('#search-box')
        //return cy.get('.coveo-header-iframe-container > iframe').first()
        //return cy.get('.#search-header > div.CoveoSearchbox > div > div.magic-box-input > input[type=text]')
        return cy.get('.coveo-header-iframe-container > iframe')
    }
    mobileSearchFieldIcon(){
        return cy.get('.cmp-search-box__form > .fas')
    }
    mobileCountryList(){
        return cy.get('.cmp-languagenavigation__group')
    }
    



}
const HomePage=new Home_Page()
export default HomePage