const Page = require('./page');
class LoginPage extends Page {

    login(username = process.env.TM_USER, password = process.env.TM_PASS) {

        cy.get(".email-input.form-control").type(username);
        cy.get(".password-input.form-control").type(password);
        cy.get(".tg-btn.tg-btn-primary.form-group__login-button").click();
        return this;
    }
}

module.exports = new LoginPage();