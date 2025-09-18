const link_login_page = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
const url = 'https://opensource-demo.orangehrmlive.com/'
const select_username_field = "div.oxd-form-row:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)"
const select_password_field = "div.oxd-form-row:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)"
const select_login_button = ".oxd-button"
const select_logo_OrangeHRM = ".orangehrm-login-branding > img:nth-child(1)"
const select_header_login = "h5.oxd-text"
const url_dashboard = "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
const select_error_message = ".oxd-alert-content-text"
const select_error_input_username = "div.oxd-form-row:nth-child(2) > div:nth-child(1) > span:nth-child(3)"
let select_error_input_password = "div.oxd-form-row:nth-child(3) > div:nth-child(1) > span:nth-child(3)"

class LoginPage {
    navigate_login_page(){
        cy.visit(url)
    }
    usernameField() {
        return cy.get(select_username_field)
    }

    passwordField() {
        return cy.get(select_password_field)
    }

    loginButton() {
        return cy.get(select_login_button)
    }

    loginHeader() {
        return cy.get(select_header_login) // Dashboard header
    }

    urlHeader() {
        return url_dashboard // Dashboard header
    }

    errorMessage() {
        return cy.get(select_error_message) // message d'erreur login
    }

    messageUsernamefield() {
        return cy.get(select_error_input_username) // message d'erreur login
    }

    messagePasswordfield() {
        return cy.get(select_error_input_password) // message d'erreur login
    }

    logo() {
        return cy.get(select_logo_OrangeHRM)
    }

}

module.exports = new LoginPage()
