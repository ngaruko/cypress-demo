module.exports = class Page {

	get loginButton() { return cy.get('div.logged-out__actions a.logged-out__log-in'); }
	get registerButton() { return cy.get('a.logged-out__register'); }
	get logoutButton() { return cy.get('div.logged-in__actions a.logged-in__log-out'); }

    open(path) {
        return cy.visit(`/${path}`);
    }
};