
class UpdateEmployeePage {

    select_view_employee = "div.oxd-table-card:nth-child(1) > div:nth-child(1) > div:nth-child(9) > div:nth-child(1) > button:nth-child(1)"
    select_input_first_name = ".orangehrm-firstname"
    select_input_last_name = ".orangehrm-lastname"
    select_input_middle_name = ".orangehrm-middlename"

    select_input_employeeId = "div.oxd-form-row:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)"
    select_input_other_id = "div.oxd-form-row:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)"
    select_input_driver_license_number = "div.oxd-form-row:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)"
    select_licencse_expiry_data = "div.oxd-form-row:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)"
    select_marital_status = "div.oxd-form-row:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"
    select_nationality = "div.oxd-form-row:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"
    select_birth_date = "div.oxd-form-row:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)"
    select_gender_male = ".--gender-grouped-field > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > label:nth-child(1) > input:nth-child(1)"
    select_gender_female =  ".--gender-grouped-field > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > label:nth-child(1)"

    select_save_1 = "button.oxd-button--secondary:nth-child(2)"

    select_blood_type = "div.orangehrm-card-container:nth-child(2) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)"
    select_test_field = "div.orangehrm-card-container:nth-child(2) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)"
    select_save_button_2 = "button.oxd-button:nth-child(1)"

    select_add_attachement = ".oxd-button--text"
    select_file = ".orangehrm-attachment > div:nth-child(2) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)"
    select_comment = '.oxd-textarea'

    select_cancel_button = ".oxd-button--ghost"
    select_save_button_3 = ".oxd-button--ghost"
    select_error_message_cancel = "#oxd-toaster_1"

    searchEmployee(name) {
        cy.get('input[placeholder="Type for hints..."]').clear().type(name);
        cy.get('button[type="submit"]').click();
    }
    getViewEmployee(){
        return cy.get(this.select_view_employee).click()
    }
    firstNameField(data){
        return cy.get(this.select_input_first_name).clear().type(data);
    }
    middleNameField(data){
        return cy.get(this.select_input_middle_name).clear().type(data);
    }
    lastNameField(data){
        return cy.get(this.select_input_last_name).clear().type(data);
    }
    employeeIdField(data){
        return cy.get(this.select_input_employeeId).clear().type(data);
    }
    otherIdField(data){
        return cy.get(this.select_input_other_id).clear().type(data);
    }
    driverLicenseNumberField(data){
        return cy.get(this.select_input_driver_license_number).clear().type(data);
    }
    licenseExpiryDate(data){
        return cy.get(this.select_licencse_expiry_data).clear().type(data)
    }
    getNationality(data){
        return cy.get(this.select_nationality).clear().select(data)
    }
    maritalStatus(data){
        return cy.get(this.select_marital_status).clear().select(data)
    }
    birthDate(data){
        return cy.get(this.select_birth_date).clear().type(data)
    }
    getGender(value){
        if (value == "male") {
            return cy.get(this.select_gender_male).click()
        } else {
            return cy.get(this.select_gender_female).click()
        }
    }
    
    saveBtn1(){
        return cy.get(this.select_save_1).click()
    }
    saveBtn2(){
        return cy.get(this.select_save_button_2).click()
    }
    saveBtn3(){
        return cy.get(this.select_save_button_3).click()
    }
    cancelBtn(){
        return cy.get(this.select_cancel_button).click()
    }
    addAttachement(){
        return cy.get(this.select_add_attachement).click()
    }
    getFile(){
        return cy.get(this.select_file)
    }
    getComment(data){
        return cy.get(this.select_comment).clear().type(data)
    }

    // clickEdit() {
    //     cy.get('.oxd-table-row').first().find('.oxd-icon-button').click();
    // }

    // // Personal Details
    // editFirstName(name) {
    //     cy.get('input[name="firstName"]').clear().type(name);
    // }
    // editLastName(name) {
    //     cy.get('input[name="lastName"]').clear().type(name);
    // }
    // savePersonalDetails() {
    //     cy.get('button[type="submit"]').contains('Save').click();
    // }

    // // Job Details
    // openJobTab() {
    //     cy.contains('Job').click();
    // }
    // selectJobTitle(title) {
    //     cy.get('div[role="listbox"]').first().click();
    //     cy.contains(title).click();
    // }
    // saveJob() {
    //     cy.get('button[type="submit"]').contains('Save').click();
    // }

    // // Contact Details
    // openContactTab() {
    //     cy.contains('Contact Details').click();
    // }
    // editAddress(address) {
    //     cy.get('input[name="street1"]').clear().type(address);
    // }
    // editPhone(phone) {
    //     cy.get('input[name="mobile"]').clear().type(phone);
    // }
    // editEmail(email) {
    //     cy.get('input[name="workEmail"]').clear().type(email);
    // }
    // saveContact() {
    //     cy.get('button[type="submit"]').contains('Save').click();
    // }

    // // Emergency Contacts
    // openEmergencyTab() {
    //     cy.contains('Emergency Contacts').click();
    // }
    // editEmergencyName(name) {
    //     cy.get('input[name="name"]').clear().type(name);
    // }
    // editEmergencyPhone(phone) {
    //     cy.get('input[name="mobile"]').clear().type(phone);
    // }
    // saveEmergency() {
    //     cy.get('button[type="submit"]').contains('Save').click();
    // }

    // // Attachments
    // openAttachmentsTab() {
    //     cy.contains('Attachments').click();
    // }
    // uploadAttachment(filePath) {
    //     cy.get('input[type="file"]').selectFile(filePath);
    // }
    // saveAttachment() {
    //     cy.get('button[type="submit"]').contains('Save').click();
    // }
}

export default new UpdateEmployeePage();