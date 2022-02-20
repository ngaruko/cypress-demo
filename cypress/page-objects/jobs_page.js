const Page = require('./page');
class JobsPage extends Page {

	/**
		 * define selectors using getter methods
		 */
	get searchBox() { return cy.get('.tm-refine-keywords__search-input > .o-input__body'); }
	get searchButton() { return cy.get('[type="submit"]'); }
	get clearAllButton() { return cy.get('.tm-tags__swipe-reset-button'); }
	get pageTitle() { return cy.get('tm-jobs-search-results > tm-search-header > div > div > tm-search-header-heading > h1'); }
	get resultsTitle() { return cy.get('h3.tm-search-header-result-count__heading.ng-star-inserted'); }
	get saveSearchButton() { return cy.get('.tm-save-search__button-text'); }
	get sortSelector() { return cy.get('.o-select__body'); }
	get viewResultsButton(){return cy.get('.tm-drop-down-tag__dropdown-footer-button');}


	isLoggedIn() {
		this.logoutButton.should('be.visible');
	}
	searchByKeyword(keyword) {
		this.searchBox.type(keyword);
		this.searchButton.click();

		cy.url().should('include', encodeURIComponent(keyword));
	}

	expectedResults(header, keyword) {
		this.pageTitle.should("contain.text", header);


		this.resultsTitle
			.should("contain.text", 'Showing')
			.and('contain.text', keyword ? `results for '${keyword}'` : 'results');
	}

	clearSearch() {
		this.clearAllButton.click({ force: true });
		//this.clearAllButton.should('have.attr', 'disabled');
	}

	saveSearch() {
		this.saveSearchButton.click();
		cy.get('.page-sign').should('be.visible');
	}

	sortBy(criteria) {
		cy.get('select').select(criteria);
		cy.get('select').find('option:selected').should('have.text', ` Sort: ${criteria} `);
	}

	viewResults(){
		this.viewResultsButton.should('contain.text', 'View');
		this.viewResultsButton.click({force: true});
	}

	selectCategory(industry, job) {
		cy.contains(' Category: Jobs ').click({ force: true });
		cy.wait(150);
		cy.contains(industry).click({ force: true });
		cy.wait(150);
		cy.contains(job).click({ force: true });

	}

	selectLocation(region, district) {
		cy.contains(' All Locations ').click({ force: true });
		cy.get('select').eq(0).select(region);
		cy.get('select').eq(1).select(district);

	}

	selectType(type) {
		cy.contains(' Job type: All ').click({ force: true });
		cy.contains(type).click({ force: true });


	}

	selectPay(min, max) {
		cy.contains(' Pay: Any ').click({ force: true });
		cy.get('select').eq(0).select(min);
		cy.get('select').eq(1).select(max);

	}



	refineSearch(filter) {
		this.selectCategory(filter.category.industry, filter.category.job);

		this.selectLocation(filter.location.region, filter.location.district);

		this.selectType(filter.type);

		this.selectPay(filter.pay.min, filter.pay.max);

	}

	open() {
		this.open('a/jobs');
	}
}

module.exports = new JobsPage();