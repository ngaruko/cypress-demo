const JobsPage = require('../../page-objects/jobs_page');
describe('Filtering or refining search results', () => {

	describe('Filtering ', () => {
		after(() => JobsPage.clearSearch());
		beforeEach(() => JobsPage.clearSearch());
		it('filter by category', () => {
			JobsPage.selectCategory(' Engineering ', ' Electrical ');
			JobsPage.expectedResults(' Engineering, Electrical jobs  ');
		});

		it('filter by location', () => {

			JobsPage.selectLocation('Auckland', 'Auckland City');
			JobsPage.expectedResults(' Jobs in Auckland City ');

		});

		it('filter by pay', () => {
			JobsPage.selectPay('$100k', '$125k');
			cy.url().should('include', 'salary_min=100000&salary_max=125000');
		});

		it('filter by job type', () => {
			JobsPage.selectType(' Part time ');
			JobsPage.expectedResults(' Part time jobs  ');
		});
	});

	describe('refined search ', () => {
		//start from fresh page
		beforeEach(() => cy.visit("https://www.trademe.co.nz/a/jobs/search"));
		//uses all filters
		it('refine search', () => {

			cy.fixture('filter').then(filter => {
        JobsPage.refineSearch(filter);
      });

			JobsPage.expectedResults(' Full time Engineering, Electrical jobs in Auckland City ');
		});
	});
});
