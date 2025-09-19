
const employeePage = require('../../pages/PIM/addEmployeePage')

import constants from '../../../fixtures/constants.json'
import { verifyExist, verifyUrl } from '../../../support/helpers'


class AddEmployeeActions {
    navigateToAddEmployee() {
        verifyExist(employeePage.menu())
        employeePage.pimMenu().click()
        verifyUrl(constants.url_employee)
        verifyExist(employeePage.addEmployeeMenu())
        employeePage.addEmployeeMenu().click()
        verifyExist(employeePage.addForm())
    }

    fillEmployeeDetails(employee) {
        if (employee.firstName) employeePage.firstNameField().type(employee.firstName)
        if (employee.lastName) employeePage.lastNameField().type(employee.lastName)
        if (employee.employeeId) {
        employeePage.employeeIdField().type(employee.employeeId)
        }
        if (employee.photo) employeePage.photoUpload().selectFile(`cypress/fixtures/photo_test/${employee.photo}`)
    }

    enableLoginDetails(employee) {
        employeePage.createLoginToggle()
        if (employee.username) employeePage.usernameField().type(employee.username)
        if (employee.password) {
        employeePage.passwordField().type(employee.password)
        employeePage.confirmPasswordField().type(employee.password)
        }
    }

    save() {
        employeePage.saveButton().click()
    }
    cancel(){
        employeePage.cancelButton().click()
    }
}

module.exports = new AddEmployeeActions()
