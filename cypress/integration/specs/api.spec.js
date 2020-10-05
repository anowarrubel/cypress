describe('Verify Search Header API is Enabled', () => {
    
    Cypress.config('baseUrl', 'https://www.changehealthcare.com')
    
    it.only('Verify Header Search api', () => {
        cy.request('/content/changehealth/us/en/search.html/_jcr_content/root/main-par.html').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body).to.not.include('start up inprogress')
            expect(response.body).to.not.have.property('start up inprogress')
            //expect(response.body.data).to.have.length(24)
        })
    })

    it.only('Eloqua blind subscription', () => {
        cy.request('/bin/changehealth/elq-contacts?email=test@test.com').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body).to.include('subscribed')
            //expect(response.body.data).to.have.length(24)
        })
    })

    it('POST - create', () => {
        const item = {"name":"test","salary":"123","age":"23"}
        cy.request('POST', '/create', item)
        .its('body')
        .its('data')
       // .should('deep.eq', item)
       .should('include', {name:'test'})
    })

    it('PUT - update', () => {
        const item = {"name":"test1"}
        cy.request({method:'PUT', url:'/update/1', body:item, failOnStatusCode: false}).its('status').should('eq', 401)
    })
})