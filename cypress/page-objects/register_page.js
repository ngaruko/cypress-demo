const Page = require('./page');
class RegisterPage extends Page {

    attemptToRegister(username , password) {
        cy.get("#LoginDetails_EmailAddressTextBox").type(username);
        cy.get("#LoginDetails_PasswordTextBox").type(password);
        cy.get('#LoginDetails_ConfirmPasswordTextBox').type(password);
        cy.get("#SubmitButton").click();
        return this;
    }
    getErrorMessage(){
        return cy.contains('Please enter a username for your account.');
    }

    open() {
        this.open('register');
    }
}

module.exports = new RegisterPage();