const expect = cy.expect;
describe('Check that all category listings are have links to right path', () => {
	//could pull out reusable functions if we are doing this on other pages
	//or put this in the page object
	const getLinks = (index => cy.get(`li.tm-category-suggestions__list-item:nth-child(${index}) > a:nth-child(1)`));
	it('check all links to job categories', () => {
		cy.get('.tm-category-suggestions__list').children()
			.then(categories => {
				for (let n = 1; n < categories.length; n++) {
					getLinks(n).invoke('text')
						.then(text => {
							//format display text to look like href text
							text = text.split('(')[0].trim().replace(/ & /g, '-').replace(/, /g, '-').replace(/ /g, '-').toLowerCase();
							getLinks(n)
								.should('have.attr', 'href').and('include', `a/jobs/${text}`);
						});
				}
			});

	});

	it('check all links with cards', () => {

		//same code as above - with modifications of display vs href texts
		//selector : .tm-promoted-listing-card__link

	});

	it('check other  interesting links', () => {

		//header links; to job profile, career guide and salary guide
		//could be more granular and look at href contents
		//same with footer links
		cy.get('a.header__area-sub-nav-links-link').each(page => {
			//page.should('have.attr', 'href').and('include', `a/jobs/`)
			cy.request(page.prop('href'));
		});

		//wath list and fav
		cy.get('a.tm-shell-main-nav__member-options-link').each(page => {
			cy.request(page.prop('href'));
		});
	});

	it('check all links that footer job related links', () => {
		for (var i = 1; i < 5; i++) {
			cy.get(`ul.tm-footer-vertical-links__section:nth-child(2) > li:nth-child(${i}) > a:nth-child(1)`)
				.then(page => cy.request(page.prop('href')));
		}
	});

	it.skip('check all links that need human authentication/capcha', () => {
		cy.contains('Contact Us')//this was returning 403 for sometime???
			.then(page => {
				cy.request({
					url: page.prop('href'),
					failOnStatusCode: false
				}).should((response) => {
					expect(response.status).to.eq(403);
				});
			});
	});
});



