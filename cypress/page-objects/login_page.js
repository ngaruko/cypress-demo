const Page = require('./page');
class LoginPage extends Page {

    login(username = process.env.EMV_USERNAME, password = process.env.EMV_PASSWORD) {

        cy.get("#email").type(username);
        cy.get("#password").type(password);
        cy.get(".login-button").click();
        cy.get('.main-content', { timeout: 30000 }).should('be.visible');
        return this;
    }
}

module.exports = new LoginPage();