const Page = require('./page');

const username = Cypress.env('username');
const password = Cypress.env('password');
class LoginPage extends Page {

    login(user = username, pass = password) {

        cy.get("#email").type(user);
        cy.get("#password").type(pass);
        cy.get(".login-button").click();
        cy.get('.main-content', { timeout: 30000 }).should('be.visible');
        return this;
    }
}

module.exports = new LoginPage();