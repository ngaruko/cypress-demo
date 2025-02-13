const JobsPage = require('../../page-objects/jobs_page');
describe.skip('Sorting search results', () => {

	it('sort by salary', () => {
		JobsPage.searchByKeyword('Testing');
		const criterias = ['Highest salary', 'Lowest salary'];
		for(const criteria of criterias){
		JobsPage.sortBy(criteria);
		cy.url().should('include',`sort_order=${criteria.split(" ").join("").toLowerCase()}`);
		}
	});

	it('sort by Latest jobs', () => {

		JobsPage.sortBy('Latest jobs');
		cy.url().should('include','sort_order=expirydesc');

	});

	it('sort by featured jobs', () => {
		JobsPage.sortBy('Featured jobs');
		cy.url().should('include','sort_order=default');
	});

	it('sort by best match', () => {
		JobsPage.sortBy('Best match');
	});
});
