
import { loginAdmin, navigatePim } from '../../../support/helpers';
import deleteAction from '../../actions/PIM/deleteAction';
import deleteData from '../../../fixtures/deleteData.json';


describe('OrangeHRM - Suppression Employé', () => {

  beforeEach(() => {
    loginAdmin()
    navigatePim()
  });

  it('Try to delete without selecting or pressing the delete icon', () => {//OK
    deleteAction.getEmployeeCheck()
  });

  it('Deletion via employee checkbox', () => {//OK
    deleteAction.getEmployeeCheck(deleteData.employeeId, deleteData.delete.with_case)
    deleteAction.deleteEmployee()
    // deleteAction.confirmDeleteEmployee(deleteData.employeeId)

  });

  it('Deletion via the checkbox of multiple employees', () => {//OK
    deleteAction.getMultipleEmployeeCheck(deleteData.employeeIds, deleteData.delete.with_case)
    deleteAction.deleteEmployee()
    // deleteAction.confirmDeleteEmployee(deleteData.employeeIds)

  });

  it('Delete an employee via the delete icon', () => {//OK
    deleteAction.getEmployeeCheck(deleteData.employeeId, deleteData.delete.with_case)
    deleteAction.cancelDeleteEmployee(deleteData.employeeId)
    // deleteAction.confirmDeleteEmployee(deleteData.employeeId)

  });

  it('Cancel delete an employee via the delete icon', () => {//OK
    deleteAction.getEmployeeCheck(deleteData.employeeId, deleteData.delete.with_case)
    deleteAction.cancelDeleteEmployee(deleteData.employeeId)

  });

  it('Cancel deletion via employee checkbox', () => {//OK
    deleteAction.getEmployeeCheck(deleteData.employeeId, deleteData.delete.with_case)
    deleteAction.deleteEmployee()
    deleteAction.cancelDeleteEmployee(deleteData.employeeId)

  });

  it('Cancel deletion via the checkbox of multiple employees', () => {//OK
    deleteAction.getMultipleEmployeeCheck(deleteData.employeeIds, deleteData.delete.with_case)
    deleteAction.deleteEmployee()
    deleteAction.cancelDeleteEmployee(deleteData.employeeIds)

  });

});
