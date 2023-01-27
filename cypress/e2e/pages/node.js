class Node_Page {

	associate_contact_officeNumber(){
		return cy.get('#edit-field-office-number-0-value')
	}
	associate_contact_email(){
		return cy.get('#edit-field-email-0-value')
	}
	associate_tags_associateType(){
		return cy.get('#edit-field-associate-type')
	}
	associate_info(){
		return cy.get('#edit-group-info > .claro-details__summary')
	}
	associate_info_jobTitle(){
		return cy.get('#edit-field-job-title-0-value')
	}
	associate_nmls(){
		return cy.get('#edit-field-nmls-number-0-value')
	}
	associate_desgination(){
		return cy.get('#edit-field-designation-0-target-id')
	}
	associate_bio(){
		return cy.get('#cke_edit-body-0-value')
	}
	associate_legacy_image(){
		return cy.get('#edit-field-associate-image-0-upload')
	}

}
const NodePage=new Node_Page()
export default NodePage
