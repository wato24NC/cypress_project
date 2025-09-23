const { give } = require("../../../support/helpers")

class EmployeePage {

    //select_list_case_employee = '.oxd-table-body input[type="checkbox"]'
    select_list_case_employee = 'div.oxd-table-card'
    select_list_id = 'div:nth-child(1) > div:nth-child(2) > div:nth-child(1)'
    select_next_button = '.oxd-pagination-page-item--previous-next'
    select_cancel_case = '.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon'
    select_delete_button = ".oxd-button--label-danger"
    select_delete_icon = "div.oxd-table-card:nth-child(1) > div:nth-child(1) > div:nth-child(9) > div:nth-child(1) > button:nth-child(2)"
    
    select_confirm_delete = ".oxd-sheet"
    select_cancel_delete_button = "button.orangehrm-button-margin:nth-child(1)"
    select_confirm_delete_button = "button.orangehrm-button-margin:nth-child(2)"

    select_message_result = "#oxd-toaster_1"

    // getEmployeeCheck(id) {
    //     cy.get(this.select_list_case_employee).then(($cards) => {
    //         let found = false;
    //         $cards.each((index, card) => {
    //             const empId = Cypress.$(card).find(this.select_list_id).text().trim();
    //             if (empId === id) {
    //                 cy.wrap(card).find('input[type="checkbox"]').check({ force: true }).should('be.checked');
    //                 found = true;
    //             }
    //         });
    //         if (!found) {
    //             cy.get(this.select_next_button).last().then(($btn) => {
    //                 if (!$btn.is(':disabled')) {
    //                     cy.wrap($btn).click();
    //                     this.getEmployeeCheck(id);
    //                 }
    //             });
    //         }
    //     });
    // }


    // getEmployeeCheck(id) {
    //     let found = false
    //     cy.get(this.select_list_case_employee).should('exist').each(($card) => {
    //         cy.wrap($card).find(this.select_list_id).then(($idDiv) => {
    //             if ($idDiv.text().trim() == id) {
    //                 cy.wrap($card).find('input[type="checkbox"]').check({ force: true }).should('be.checked');
    //                 found = true
    //             } else {
    //                 cy.log("rien trouvé")
    //             }
    //         })
    //     })
    //     give(this.select_list_id)
    // }

    getEmployeeListCheck(list_employee_id) {
        if (!list_employee_id || list_employee_id.length === 0) {
            cy.log('Aucun employé à cocher');
            return;
        }
        cy.get(this.select_list_case_employee).each(($checkbox) => {
            const empId = $checkbox.val();
            if (list_employee_id.includes(empId)) {
                cy.wrap($checkbox).check({ force: true }).should('be.checked');
                cy.log(`Case cochée pour employé ID: ${empId}`);
            }
            });
    }

    deleteButton(){
        return cy.get(this.select_delete_button)
    }

    deleteIcon() {
        return cy.get(this.select_delete_icon);
    }

    getConfirmDelete() {
        return cy.get(this.select_confirm_delete);
    }

    cancelDeleteButton() {
        return cy.get(this.select_cancel_delete_button).click();
    }

    confirmDeleteButton() {
        return cy.get(this.select_confirm_delete_button).click();
    }

    getMessageResult() {
        return cy.contains(this.select_message_result);
    }

}

module.exports = new EmployeePage();
