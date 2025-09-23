import { loginAdmin, navigatePim } from '../../../support/helpers';
import employeeActions from '../../actions/PIM/updateEmployeeActions';
import employeePage from '../../pages/PIM/updateEmployeePage';
import testData from '../fixtures/testData.json';
// import employee from '../../../fixtures/update.json';

describe('PIM - Modification Employé', () => {
    beforeEach(() => {
        loginAdmin();
        navigatePim();
    });

    it('TC1 - Modifier infos personnelles', () => {
        employeePage.getViewEmployee()
        employeeActions.updatePersonalDetails()
        employeePage.saveBtn1()
        // employeeActions.searchAndEditEmployee(testData.employee.firstName);
        // employeeActions.updatePersonalDetails(
        // testData.employee.updatedFirstName,
        // testData.employee.updatedLastName
        // );
    });

    it('TC2 - Modifier infos de job', () => {
        employeeActions.searchAndEditEmployee(testData.employee.firstName);
        employeeActions.updateJobDetails(testData.employee.updatedJobTitle);
        
    });

    it('TC3 - Modifier infos de contact', () => {
        employeeActions.searchAndEditEmployee(testData.employee.firstName);
        employeeActions.updateContactDetails(
        testData.employee.updatedAddress,
        testData.employee.updatedPhone,
        testData.employee.email
        );
    });

    it('TC4 - Ajouter une pièce jointe', () => {
        employeeActions.searchAndEditEmployee(testData.employee.firstName);
        employeeActions.addAttachment(testData.employee.attachment);
    });

    it('TC5 - Modifier infos d’urgence', () => {
        employeeActions.searchAndEditEmployee(testData.employee.firstName);
        employeeActions.updateEmergencyContact(
        testData.employee.emergencyContact.updatedName,
        testData.employee.emergencyContact.updatedPhone
        );
    });

    it('TC6 - Cas négatif - Champ obligatoire vide', () => {
        employeeActions.searchAndEditEmployee(testData.employee.firstName);
        cy.get('input[name="firstName"]').clear();
        cy.get('button[type="submit"]').contains('Save').click();
        cy.contains('Required').should('be.visible');
    });

    it('TC7 - Cas négatif - Email invalide', () => {
        employeeActions.searchAndEditEmployee(testData.employee.firstName);
        employeeActions.updateContactDetails(
        testData.employee.updatedAddress,
        testData.employee.updatedPhone,
        testData.employee.invalidEmail
        );
        cy.contains('Invalid').should('be.visible');
    });
});