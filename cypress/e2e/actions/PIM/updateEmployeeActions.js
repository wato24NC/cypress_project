import employeePage from '../../pages/PIM/updateEmployeePage';
import employee from '../../../fixtures/update.json';

class EmployeeActions {
    searchAndEditEmployee(name) {
        employeePage.searchEmployee(name);
        employeePage.clickEdit();
    }

    updatePersonalDetails() {
        const details = employee.personnal_details;

        const fieldMapping = {
            firstName: employeePage.firstNameField,
            middleName: employeePage.middleNameField,
            lastName: employeePage.lastNameField,
            id: employeePage.employeeIdField,
            other_id: employeePage.otherIdField,
            driver_license_number: employeePage.driverLicenseNumberField,
            license_expiry_date: employeePage.licenseExpiryDate,
            nationality: employeePage.getNationality,
            marital_status: employeePage.maritalStatus,
            date_birth: employeePage.birthDate,
            gender: employeePage.getGender,
        };

        Object.entries(fieldMapping).forEach(([key, action]) => {
            if (details[key]) {
                action(details[key]);
            }
        });
    }


    // updateJobDetails(jobTitle) {
    //     employeePage.openJobTab();
    //     employeePage.selectJobTitle(jobTitle);
    //     employeePage.saveJob();
    // }

    // updateContactDetails(address, phone, email) {
    //     employeePage.openContactTab();
    //     employeePage.editAddress(address);
    //     employeePage.editPhone(phone);
    //     employeePage.editEmail(email);
    //     employeePage.saveContact();
    // }

    // updateEmergencyContact(name, phone) {
    //     employeePage.openEmergencyTab();
    //     employeePage.editEmergencyName(name);
    //     employeePage.editEmergencyPhone(phone);
    //     employeePage.saveEmergency();
    // }

    addAttachment() {
        employeePage.addAttachement();
        employeePage.getFile().selectFile(`cypress/fixtures/photo_test/${employee.file[1]}`);
        employeePage.getComment(employee.comment)

    }
}

export default new EmployeeActions();