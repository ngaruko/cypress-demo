const reportingPage = require('../../page-objects/reporting-page');
describe('filter by customer name', () => {
    beforeEach(() => reportingPage.clearSearch());
    after(() => reportingPage.clearSearch());

    it('filter by first name', () => {
        reportingPage.filterCustomer('Fred');
    });

    it('filter by last name', () => {
        reportingPage.filterCustomer('peterson');
    });

    it('filter by random string - fuzzy', () => {
        reportingPage.filterCustomer('peter');
    });

});