
import pimPage from "../../pages/PIM/searchEmployeePage";

class SearchActions {

    search(data) {
        if (data.name) { pimPage.employeeName(data.name) }
        if (data.id) { pimPage.employeeId(data.id) }
        if (data.supervisor) { pimPage.employeeSupervisorName(data.supervisor) }
        if (data.jobTitle) { pimPage.selectJobTitle(data.jobTitle) }
        if (data.status) { pimPage.selectEmployeeStatus(data.status) }
        if (data.subUnit) { pimPage.selectEmployeeSubUnit(data.subUnit) }
        if (data.include) { pimPage.selectEmployeeInclude(data.include) }
        pimPage.btnSearch();
    }

    searchByEmployeeName(name) {
        pimPage.employeeName(name)
        pimPage.btnSearch();
    }

    searchByEmployeeData(action, data) {
        action(data)
        pimPage.btnSearch();
    }

    searchByEmployeeId(id) {
        pimPage.employeeId(id);
        pimPage.btnSearch();
    }

    searchBySupervisor(name) {
        pimPage.employeeSupervisorName(name);
        pimPage.btnSearch();
    }

    searchByJobTitle(title) {
        pimPage.selectJobTitle(title);
        pimPage.btnSearch();
    }

    searchByEmployeeByStatus(status) {
        pimPage.selectEmployeeStatus(status);
        pimPage.btnSearch();
    }



    searchBySubUnit(subUnit) {
        pimPage.selectEmployeeSubUnit(subUnit);
        pimPage.btnSearch();
    }

    searchByInclude(include) {
        pimPage.selectEmployeeInclude(include);
        pimPage.btnSearch();
    }

    verifyResult(value) {

        if (value) {
            pimPage.getResult().should('have.length.greaterThan', 0);
        } else {
            pimPage.getResult().should('not.exist');
        }
    }


}

export default new SearchActions();
