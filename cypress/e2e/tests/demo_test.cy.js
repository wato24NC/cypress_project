describe('Mon premier test Cypress avec Allure', () => {

    it('Visite la page d’accueil', () => {
        cy.visit('/');
        cy.contains('Kitchen Sink'); // vérifie que le texte apparaît
    });

});

// npx allure generate allure-results --clean -o allure-report
