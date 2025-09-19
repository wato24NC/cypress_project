
const select_menu = ".oxd-navbar-nav"
const select_pim_menu = "li.oxd-main-menu-item-wrapper:nth-child(2) > a:nth-child(1)"
const select_addEmployee_button = "li.oxd-topbar-body-nav-tab:nth-child(3) > a:nth-child(1)"
const select_add_form = ".oxd-form"
const select_firstname = ".orangehrm-firstname"
const select_lastname = ".orangehrm-lastname"
const select_employeeid = ".oxd-grid-2 > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)"
const select_photo = ".employee-image"

const select_createLoginToggle_button = ".oxd-switch-input"
const select_enable_status = ".--status-grouped-field > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > label:nth-child(1)"
const select_disable_status = ".--status-grouped-field > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > label:nth-child(1)"
const select_username = "div.oxd-form-row:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)"
const select_password = ".user-password-cell > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)"
const select_confirm_password = "div.oxd-form-row:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)"

const select_save_button = "button.oxd-button:nth-child(3)"
const select_cancel_button = "button.oxd-button:nth-child(2)"
const select_success_message = "#oxd-toaster_1"

const select_error_message_firstname = ".--name-grouped-field > div:nth-child(1) > span:nth-child(3)"
const select_error_message_lastname = "div.oxd-input-group:nth-child(3) > span:nth-child(3)"
const select_errorMessage_employeeId = ".oxd-input-group > .oxd-text"
const select_errorMessage_photoUpload = ".orangehrm-employee-image > div:nth-child(1) > span:nth-child(3)"

const select_errorMessage_username = "div.oxd-form-row:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(3)"
const select_errorMessage_password = ".user-password-cell > div:nth-child(2) > span:nth-child(3)"
const select_errorMessage_confirmPassword = "div.oxd-form-row:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(3)"

class AddEmployeePage {
    menu() { return cy.get(select_menu) }
    pimMenu() { return cy.get(select_pim_menu) }
    addEmployeeMenu() { return cy.get(select_addEmployee_button) }
    addForm(){ return cy.get(select_add_form) }

    firstNameField() { return cy.get(select_firstname) }
    lastNameField() { return cy.get(select_lastname) }
    employeeIdField() { return cy.get(select_employeeid).clear()    // return cy.get('label').contains('Employee Id').parent().find('input')
        }
    photoUpload() { return cy.get(select_photo) }

    createLoginToggle() { return cy.get(select_createLoginToggle_button).click({ force: true }) }
    enableAccount() { return cy.get(select_enable_status).should('be.checked') }
    disableAccount() { return cy.get(select_disable_status).click() }
    usernameField() { return cy.get(select_username) }
    passwordField() { return cy.get(select_password) }
    confirmPasswordField() { return cy.get(select_confirm_password) }

    saveButton() { return cy.get(select_save_button) }
    cancelButton() { return cy.get(select_cancel_button) }
    succesMessage() { return cy.get(select_success_message) }

    errorFirstName() { return cy.get(select_error_message_firstname) }
    errorLastName() { return cy.get(select_error_message_lastname) }
    duplicateIdError() { return cy.get(select_errorMessage_employeeId) }
    errorPhoto() { return cy.get(select_errorMessage_photoUpload) }

    errorUsername() { return cy.get(select_errorMessage_username) }
    errorPassword() { return cy.get(select_errorMessage_password) }
    errorConfirmPassword() { return cy.get(select_errorMessage_confirmPassword) }
}
module.exports = new AddEmployeePage()
