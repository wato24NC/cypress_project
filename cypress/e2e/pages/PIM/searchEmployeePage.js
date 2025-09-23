class PimPage {

    employee_name_field = "div.oxd-grid-item:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(2)";
    employee_id_field = "input.oxd-input:nth-child(1)";
    supervisor_field = "div.oxd-grid-item:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(2)";

    job_title_dropdown = "div.oxd-grid-item:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)";
    employment_status_dropdown = "div.oxd-grid-item:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)";
    employee_sub_unit = "div.oxd-grid-item:nth-child(7) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)";
    employee_include_field = "div.oxd-grid-item:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)"

    search_button = "button.oxd-button:nth-child(2)";
    reset_button = ".oxd-button--ghost";

    error_long_name = "span.oxd-text:nth-child(3)"
    error_input_supervisor_name = "span.oxd-text:nth-child(3)"
    result = ".oxd-table-body .oxd-table-card";
    error_message = "#oxd-toaster_1"

    
    employeeName(name) {
        cy.get(this.employee_name_field).clear().type(name);
    }

    employeeId(id) {
        cy.get(this.employee_id_field).clear().type(id);
    }

    employeeSupervisorName(name) {
        cy.get(this.supervisor_field).clear().type(name);
    }

    selectJobTitle(title) {
        cy.get(this.job_title_dropdown).select(title);
    }

    selectEmployeeStatus(status) {
        cy.get(this.employment_status_dropdown).select(status);
    }

    selectEmployeeSubUnit(subUnit) {
        cy.get(this.employee_sub_unit).select(subUnit);
    }

    selectEmployeeInclude(include) {
        cy.get(this.employee_include_field).select(include);
    }

    btnSearch() {
        cy.get(this.search_button).click();
    }

    btnReset() {
        cy.get(this.reset_button).click();
    }

    getErrorLongName() {
        return cy.get(this.error_long_name);
    }

    getErrorSupervisor() {
        return cy.get(this.error_input_supervisor_name);
    }

    getResult() {
        return cy.get(this.result);
    }

    getErrorMessage() {
        return cy.get(this.error_message);
    }
}

export default new PimPage();
