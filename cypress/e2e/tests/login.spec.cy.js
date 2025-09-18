const loginActions = require('../actions/loginActions')
const loginPage = require('../pages/loginPage')
// import url_dashboard from '../fixtures/constants.json'
let constants

describe('Login Module Tests', () => {
    
    beforeEach(() => {
        
        cy.fixture('constants').then((data) => {
        constants = data
    })
        loginPage.navigate_login_page()
    })

    it('TC_LOGIN_01 - Login avec identifiants valides', () => {
        cy.fixture('users').then((data) => {
        loginActions.login(data.validUser.username, data.validUser.password)
        loginActions.verify_url(loginPage.urlHeader())
        })
    })

    it('TC_LOGIN_02 - Mot de passe incorrect', () => {
        cy.fixture('users').then((data) => {
        loginActions.login(data.invalidPassword.username, data.invalidPassword.password)
        loginActions.verify_message(loginPage.errorMessage(), constants.error_message)
        })
    })

    it('TC_LOGIN_03 - Nom d’utilisateur incorrect', () => {
        cy.fixture('users').then((data) => {
        loginActions.login(data.invalidUser.username, data.invalidUser.password)
        loginActions.verify_message(loginPage.errorMessage(), constants.error_message)
        })
    })

    it.only('TC_LOGIN-4 - Champs vides', () => {
        cy.fixture('users').then((data) => {
        loginActions.login(data.emptyFields.username, data.emptyFields.password)
        loginActions.verify_message(loginPage.messageUsernamefield(), constants.error_input)
        loginActions.verify_message(loginPage.messagePasswordfield(), constants.error_input)
        })
    })

    it('TC_Login-5 - Vérification des éléments de la page de connexion', () => {
        loginActions.verify_exist(loginPage.logo())
        loginActions.verify_exist(loginPage.usernameField())
        loginActions.verify_exist(loginPage.passwordField())
        loginActions.verify_exist(loginPage.loginButton())
    })

})
