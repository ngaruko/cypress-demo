const reportingPage = require('../../page-objects/reporting-page');

const expectGroups = (groups,number) => {
	cy.get('tr td:nth-child(2)')
		.should('have.length', number)
		.then(($els) => {
			return (
				Cypress.$.makeArray($els)
					.map((el) => el.innerText)
			);
		})
		.should('deep.equal', groups);
};

describe('group by tests', () => {

	it('group by State', () => {
	    reportingPage.groupBy('State');
	    expectGroups(['undefined', 'SA', 'WA', 'ACT', 'TAS', 'VIC', 'NSW', 'NT'], 8);
	});

	it('group by Installation Type',  () => {
	     reportingPage.groupBy('Installation Type');
			expectGroups(['undefined', 'Battery Only', 'Solar Only', 'Solar with Battery'], 4);
	});

});
