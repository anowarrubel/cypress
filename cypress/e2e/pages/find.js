class Find_Officer {

	//used to store page objects for find advisor, find loan officer, anything with find pages!

	location(){
		return cy.get("#edit-location--2")
	}
	associate(){
		return cy.get('#edit-associate--2')
	}
	privateBankerList(){
		return cy.get('.coh-column.coh-visible-xl.coh-col-xl-9')
	}

}
const FindOfficer=new Find_Officer()
export default FindOfficer
