const JobsPage = require('../../page-objects/jobs_page');
describe.skip('Sorting search results', () => {
//TODO: just check that links are clickable
	// Test for  registered logged in user


	it('save search', () => {
		//JobsPage.saveSearch();
	});

	it('add to watchlist', () => {
		//JobsPage.addToWahtchlist();
	});

	it('access watchlist', () => {
		//JobsPage.goToWatchlist();
	});

	it('access favorites', () => {
		//either logged in ornot
	//	JobsPage.goToFavorites();
	});
	it('listJob', () => {
		//either logged in ornot
		//JobsPage.listJob();
	});

	it('show recent search', () => {
		//IF logged in
		//JobsPage.viewRecent();
	});

	it('apply for jobs', () => {
		//IF logged in
		//JobsPage.applyForJob();
	});

	it('create a job profile', () => {
		//IF logged in
		//JobsPage.createJobProfile();
	});

	it('see similar job', () => {
		//IF logged in
		//JobsPage.viewSimilarJob(false);
	});

	it('see my info', () => {
		//IF logged in
		//JobsPage.goToMyTradeMe(); //shoud be on the generic page.
	});

});
