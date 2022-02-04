const reportingPage = require('../../page-objects/reporting-page');

const expectSorted = (items, desc) => {
	const unsortedItems = items.map((index, html) => Cypress.$(html).text()).get();
	const sortedItems = unsortedItems.slice().sort();
	if(desc){sortedItems.reverse()} //desc order
	expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
}

describe('Order by customer name', () => {
 before(() => reportingPage.groupBy('All'))
	it('ascending  and desc order ', () => {
		cy.get('th').eq(0).click();
		cy.get('td.emv-table__td.name').then((names) => {
			expectSorted(names);
		});
	});
});




