describe('Verify Do not Call form being submtited', () => {
    
    //Cypress.config('baseUrl', 'https://www.arvest.com')
    


    it('POST - Do not call', () => {
        const endpoint='/about/privacy-and-security/privacy-policy/do-not-call'
        const item = {"first_name":"test",
            "last_name":"123",
            "city":"New York",
            "state":"New york",
            "zip": "11230",
            "Phone": "3126906024",
            "account_number":"12345"
        }

        cy.request('POST', endpoint, item)
        .its('body')
        //.should('deep.eq', 'Latest News and Videos')
            //expect(response.body).to.include('Your Do-Not-Call request has been received.')


        cy.request('POST', endpoint, item).then((response)=>{
            expect(response).to.have.property('status', 200)
            //expect(response.body).to.include('Your Do-Not-Call request has been received.')
        })
    })

})