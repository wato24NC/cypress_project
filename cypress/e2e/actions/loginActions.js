const loginPage = require('../pages/loginPage')


class LoginActions {
    login(username, password) {
        if (username) loginPage.usernameField().type(username)
        if (password) loginPage.passwordField().type(password)
        loginPage.loginButton().click()
    }
    verify_exist(element){
        element.should('be.visible')
    }
    verify_url(url){
        cy.url().should('eq', url)
    }
    verify_message(message,textMessage){
        message.should('exist').and("contain", textMessage)
    }


}

module.exports = new LoginActions()
