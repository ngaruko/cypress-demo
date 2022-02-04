const Page = require('./page');
class ReportingPage extends Page {

	/**
		 * define selectors using getter methods
		 */


	get customerInput (){ return cy.get('.filter-input.bp3-input').eq(0);}
	get suburbInput (){ return cy.get('.bp3-input-ghost').eq(0);}
	get stateInput (){ return cy.get('.bp3-input-ghost').eq(1);}
	get stageInput (){ return cy.get('.bp3-input-ghost').eq(2);}

	get groupBySelector (){ return cy.get('select').eq(2);}


	filterCustomer(text) {
		this.customerInput.type(text);
		cy.get("td")
  .eq(0)
  .contains(text, { matchCase: false })
  .should('be.visible')
	}

	clearSearch() {
		this.customerInput.clear();
	}
	groupBy(criteria) {
		this.groupBySelector.select(criteria);
		this.groupBySelector.find('option:selected').should('have.text', criteria);
	}

	reload(){
		cy.reload();
		cy.get('.main-content', { timeout: 30000 }).should('be.visible');
	}

}

module.exports = new ReportingPage();