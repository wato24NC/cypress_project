const { verifyUrl } = require('../../support/helpers')
const loginPage = require('../pages/loginPage')


class LoginActions {
    login(username, password, url) {
        if (username) loginPage.usernameField().type(username)
        if (password) loginPage.passwordField().type(password)
        loginPage.loginButton().click()
        verifyUrl(url)
    }

}

module.exports = new LoginActions()
