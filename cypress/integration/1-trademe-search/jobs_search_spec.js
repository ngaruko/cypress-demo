const JobsPage = require('../../page-objects/jobs_page');
describe.skip('Searching roles by keyword', () => {
    afterEach(() => JobsPage.clearSearch());
    beforeEach(() => JobsPage.clearSearch());
    it('Search by random keyword', () => {
        JobsPage.searchByKeyword('Testing');
        JobsPage.expectedResults('Jobs', 'Testing');
    });

    it('Search Job function', () => {
        JobsPage.searchByKeyword('Test Engineer');
        JobsPage.expectedResults('Jobs', 'Test Engineer');
    });

    it('Search by role and region', () => {
        JobsPage.searchByKeyword('Test engineer in wellington');
        JobsPage.expectedResults('Jobs in Wellington', 'Test engineer');
    });

    it('search per combination', () => {
        JobsPage.searchByKeyword('engineer in construction in manawatu');
        JobsPage.expectedResults('Jobs in Manawatu', 'engineer in construction');
    });
});