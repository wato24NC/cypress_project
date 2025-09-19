const loginActions = require('../actions/loginActions')
const loginPage = require('../pages/loginPage')

import constants from '../../fixtures/constants.json'
import users from '../../fixtures/users.json'
import { navigatePage, url, url_dashboard, verifyExist, verifyMessage, verifyUrl } from '../../support/helpers'



describe('Login Module Tests', () => {
    
    beforeEach(() => {
        navigatePage(url)
        loginPage.navigate_login_page(url)
    })

    it('TC_LOGIN_01 - Login with valid credentials', () => {
        loginActions.login(users.validUser.username, users.validUser.password, url_dashboard)
    })

    it('TC_LOGIN_02 - Login with incorrect password', () => {
        loginActions.login(users.invalidPassword.username, users.invalidPassword.password, url)
        verifyMessage(loginPage.errorMessage(), constants.login.error_message_login)
    })

    it('TC_LOGIN_03 - Login with incorrect username', () => {
        loginActions.login(users.invalidUser.username, users.invalidUser.password, url)
        verifyMessage(loginPage.errorMessage(), constants.login.error_message_login)
    })

    it('TC_LOGIN-4 - Login with empty fields', () => {
        loginActions.login(users.emptyFields.username, users.emptyFields.password, url)
        verifyMessage(loginPage.errorMessageUsername(), constants.login.error_input)
        verifyMessage(loginPage.errorMessagePassword(), constants.login.error_input)
    })

    it('TC_Login-5 - Checking the login page elements', () => {
        verifyUrl(url)
        verifyExist(loginPage.logo())
        verifyExist(loginPage.usernameField())
        verifyExist(loginPage.passwordField())
        verifyExist(loginPage.loginButton())
    })

})
