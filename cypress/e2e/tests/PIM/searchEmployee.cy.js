
import { loginAdmin, navigatePim, verifyExist, verifyMessage } from "../../../support/helpers";

import searchActions from "../../actions/PIM/searchEmployeeActions";
import searchPage from "../../pages/PIM/searchEmployeePage";
import data from "../../../fixtures/PIM.json";

describe("OrangeHRM - PIM - Search Employee", () => {
    beforeEach(() => {
        loginAdmin();
        navigatePim();

    });

    it("TC_PIM_SRCH_01 - Search without criteria or press Reset (show all)", () => {
        searchPage.btnReset()
        searchActions.verifyResult(true)

    });

    it("TC_PIM_SRCH_02 - Search by valid Employee ID", () => {
        searchActions.searchByEmployeeId(data.search.validEmployeeId)
        searchActions.verifyResult(true)

    });

    it("TC_PIM_SRCH_03 - Search by valid full name", () => {
        searchActions.searchByEmployeeName(data.search.validEmployeeName)
        searchActions.verifyResult(true)

    });

    it("TC_PIM_SRCH_04 - Search by Valid Partial Name", () => {
        searchActions.searchByEmployeeName(data.search.partialEmployeeName)
        searchActions.verifyResult(true)

    });

    it("TC_PIM_SRCH_05 - Search by Job Title", () => {
        searchActions.searchByJobTitle(data.search.jobTitle)
        searchActions.verifyResult(true)

    });

    it("TC_PIM_SRCH_06 - Search by Employment Status", () => {
        searchActions.searchByEmployeeByStatus(data.search.employmentStatus)
        searchActions.verifyResult(true)

    });

    it("TC_PIM_SRCH_07 - Search by Supervisor name", () => {
        searchActions.searchBySupervisor(data.search.supervisorName)
        searchActions.verifyResult(true)

    });

    it("TC_PIM_SRCH_08 - Search by subunit", () => {
        searchActions.searchBySubUnit(data.search.sub_unit)
        searchActions.verifyResult(true)

    });

    it("TC_PIM_SRCH_09 - Search by include", () => {
        searchActions.searchByInclude(data.search.withInclude)
        searchActions.verifyResult(true)

    });

    it("TC_PIM_SRCH_10 - Combined search ( EX: Name + Job Title + id + nameSupervisor and include)", () => {
        searchActions.search(data.search.combination)
        searchActions.verifyResult(true)

    });


    it("TC_PIM_SRCH_11 - Search with non-existent ID", () => {
        searchActions.searchByEmployeeId(data.search.invalidEmployeeId)
        searchPage.btnSearch()
        verifyExist(searchPage.getErrorMessage())
        verifyMessage(searchPage.getErrorMessage(), data.message.error_result)
        searchActions.verifyResult(false)

    });

    it("TC_PIM_SRCH_12 - Search by non-existent name", () => {
        searchActions.searchByEmployeeName(data.search.invalidEmployeeName)
        searchPage.btnSearch()
        verifyExist(searchPage.getErrorMessage())
        verifyMessage(searchPage.getErrorMessage(), data.message.error_result)
        searchActions.verifyResult(false)

    });

    it("TC_PIM_SRCH_13 - Search with invalid ID", () => {
        searchActions.searchByEmployeeId(data.search.inexistEmployeeId)
        searchPage.btnSearch()
        verifyExist(searchPage.getErrorMessage())
        verifyMessage(searchPage.getErrorMessage(), data.message.error_id_exist)

    });

    it("TC_PIM_SRCH_14 - Search by Name too long (> 150 characters)", () => {
        searchActions.searchByEmployeeName(data.search.invalidEmployeeName.repeat(40))
        searchPage.btnSearch()
        verifyMessage(searchPage.getErrorLongName(), data.message.error_long_name)

    });

    it("TC_PIM_SRCH_15 - Search with incorrect supervisor name", () => {
        searchActions.searchBySupervisor(data.search.invalidSupervisorName)
        searchPage.btnSearch()
        verifyMessage(searchPage.getErrorSupervisor(), data.message.error_input_supervisor)

    });

    it("TC_PIM_SRCH_16 - Invalid combined search", () => {
        searchActions.search(data.search.invalidCombination)
        searchActions.verifyResult(false)

    });

});
