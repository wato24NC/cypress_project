
const addEmployee = require('../../actions/PIM/addEmployeeActions')
const employeePage = require('../../pages/PIM/addEmployeePage')

import { loginAdmin, url_add_employee, url_employee, verifyExist, verifyUrl } from '../../../support/helpers'
import employee from '../../../fixtures/employees.json'

describe('PIM - Add Employee Tests', () => {
    
    beforeEach(() => {
        loginAdmin()
        addEmployee.navigateToAddEmployee()
    })
    it('TC_LOGIN_01 - Cancel adding a new employee', () => {
        addEmployee.fillEmployeeDetails(employee.validEmployee)
        addEmployee.cancel()
        verifyUrl(url_employee)

    })

    it('TC_PIM_ADD_02 - Add an employee and create their login account with an invalid password', () => {
        addEmployee.fillEmployeeDetails(employee.weakPassword)
        addEmployee.enableLoginDetails(employee.weakPassword)
        verifyExist(employeePage.errorPassword())

    })

    it('Add an employee and create their login account with an invalid username', () => {
        addEmployee.fillEmployeeDetails(employee.invalidUsername)
        addEmployee.enableLoginDetails(employee.invalidUsername)
        verifyExist(employeePage.errorUsername())

    })

    it('TC_PIM_ADD_03 - Add an employee without a first name', () => {
        addEmployee.fillEmployeeDetails(employee.missingFirstName)
        addEmployee.save()
        verifyExist(employeePage.errorFirstName())

    })

    it('TC_PIM_ADD_04 - Add an employee without a last name', () => {
        addEmployee.fillEmployeeDetails(employee.missingLastName)
        addEmployee.save()
        verifyExist(employeePage.errorLastName())

    })

    it('TC_PIM_ADD_05 - Add an employee with an existing Employee ID', () => {
        addEmployee.fillEmployeeDetails(employee.duplicateId)
        verifyExist(employeePage.duplicateIdError())

    })

    it('TC_PIM_ADD_06 - Add with empty entry', () => {
        addEmployee.save()
        verifyExist(employeePage.errorFirstName())
        verifyExist(employeePage.errorLastName())
        verifyUrl(url_add_employee)
    })

    it('TC_PIM_ADD_07 - Add employee with invalid profile picture upload ', () => {
        addEmployee.fillEmployeeDetails(employee.withInvalidPhoto)
        verifyExist(employeePage.errorPhoto())

    })

    it('TC_PIM_ADD_06 - Add an employee with a valid profile picture upload', () => {
        addEmployee.fillEmployeeDetails(employee.withPhoto)
        addEmployee.save()
        verifyUrl(url_employee)

    })

    it('TC_PIM_ADD_08 - Add an employee and create their login account', () => {
        addEmployee.fillEmployeeDetails(employee.withLogin)
        addEmployee.enableLoginDetails(employee.withLogin)
        addEmployee.save()
        verifyUrl(url_employee)

    })

    it('TC_PIM_ADD_09 - Add an employee without an Employee ID', () => {
        addEmployee.fillEmployeeDetails(employee.missingEmployeeId)
        addEmployee.save()
        verifyUrl(url_employee)

    })

    it('TC_PIM_ADD_10 - Add an employee with all valid fields', () => {
        addEmployee.fillEmployeeDetails(employee.validEmployee)
        addEmployee.enableLoginDetails(employee.validEmployee)
        addEmployee.save()
        verifyUrl(url_employee)

    })

    it('TC_PIM_ADD_10 - Add an employee with an existing login account ', () => {
        addEmployee.fillEmployeeDetails(employee.duplicateUser)
        addEmployee.enableLoginDetails(employee.duplicateUser)
        verifyExist(employeePage.errorUsername())

    })

    it('TC_PIM_ADD_10 - Add an employee and create their disabled login account', () => {
        addEmployee.fillEmployeeDetails(employee.disableAccountUser)
        
        addEmployee.enableLoginDetails(employee.disableAccountUser)
        employeePage.disableAccount()
        addEmployee.save()
        verifyExist(employeePage.succesMessage())

    })

})
