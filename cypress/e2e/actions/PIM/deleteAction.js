
import { give, verifyExist, verifyMessage, verifyNotExist } from '../../../support/helpers';
import employeePage from '../../pages/PIM/deletePage';
import deleteData from '../../../fixtures/deleteData.json';
import searchEmployee from '../../actions/PIM/searchEmployeeActions';

class EmployeeActions {

    getEmployeeCheck(id, value) {
        verifyNotExist(employeePage.deleteButton())
        verifyNotExist(employeePage.getConfirmDelete())
        if (id === undefined || value === undefined) {
            cy.log("Eroor, Please select at least one user to be able to delete")
            return;
        }
        return cy.get(employeePage.select_list_case_employee).then(($cards) => {
            let found = false;
            $cards.each((index, card) => {
                const empId = Cypress.$(card).find(employeePage.select_list_id).text().trim();
                if (empId === id) {
                    if (value) {
                        cy.wrap(card).find('input[type="checkbox"]').check({ force: true }).should('be.checked');
                    } else {
                        cy.wrap(card).find('button[type="button"]').eq(1).click()
                        verifyExist(employeePage.getConfirmDelete())
                    }
                    
                    found = true;
                }
            });
            if (!found) {
                cy.get(employeePage.select_next_button).last().then(($btn) => {
                    if (!$btn.is(':disabled')) {
                        cy.wrap($btn).click();
                        this.getEmployeeCheck(id);
                    }
                });
            }
        });
    }

    getMultipleEmployeeCheck(ids) {//OK
        if (ids.length === 0) return;
        const id = ids.shift();
        this.getEmployeeCheck(id).then(() => {
            this.getMultipleEmployeeCheck(ids)
        })

    }

    deleteEmployee() {//OK
        verifyExist(employeePage.deleteButton())
        employeePage.deleteButton().click()
        verifyExist(employeePage.getConfirmDelete())
        
    }

    confirmDeleteEmployee(employeeId){//OK
        employeePage.confirmDeleteButton()
        verifyMessage(employeePage.getMessageResult(), deleteData.message)
        if (Array.isArray(employeeId) && employeeId.every(item => typeof item === 'string')) {
            employeeId.forEach((id) => {
                searchEmployee.searchByEmployeeId(id)
                searchEmployee.verifyResult(false)
                cy.wait(500)
            })
        } else {
            searchEmployee.searchByEmployeeId(employeeId)
            searchEmployee.verifyResult(false)
        }
        
    }

    cancelDeleteEmployee(employeeId) {//OK
        employeePage.cancelDeleteButton()
        verifyExist(give(employeePage.select_cancel_case))
        give(employeePage.select_cancel_case).click()
        if (Array.isArray(employeeId) && employeeId.every(item => typeof item === 'string')) {
            employeeId.forEach((id) => {
                searchEmployee.searchByEmployeeId(id)
                searchEmployee.verifyResult(true)
                cy.wait(500)
            })
        } else {
            searchEmployee.searchByEmployeeId(employeeId)
            searchEmployee.verifyResult(true)
        }
        
    }

}

module.exports = new EmployeeActions();
