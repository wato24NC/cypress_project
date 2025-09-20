
import constants from '../fixtures/constants.json'
import user from '../fixtures/users.json'
import loginPage from '../e2e/pages/loginPage'
import employeePage from '../e2e/pages/PIM/addEmployeePage'

// Données utilitaires


export const url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
export const url_dashboard = "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
export const url_employee = "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"
export const url_add_employee = "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee"

export function navigatePage(url) {
    cy.visit(url);
}

export function give(selector) {
    cy.get(selector);
}

export function verifyUrl(expectedUrl) {
    cy.url().should('eq', expectedUrl);
}

export function verifyMessage(messageElement, textMessage) {
    messageElement.should('be.visible').and('contain', textMessage);
}


export function verifyExist(element) {
    element.should('exist').and('be.visible');
}

export function loginAdmin() {
    navigatePage(constants.url)

    loginPage.usernameField().type(user.validUser.username);
    loginPage.passwordField().type(user.validUser.password);

    loginPage.loginButton().click();

    verifyUrl(constants.url_dashboard);
}

export function navigatePim(){
    verifyExist(employeePage.menu())
    employeePage.pimMenu().click()
    verifyUrl(constants.url_employee)
}