describe('Navigate to PR URL', () => {
    it('Visits the URL specified in the PR title', () => {
      // Retrieve the URL from environment variables
      cy.log('Navigating to: ', Cypress.env('PR_URL'))
      console.log('Navigate to: ', Cypress.env('PR_URL'))
      const prUrl = Cypress.env('PR_URL');
      
      if (prUrl) {
        // Use the URL to navigate
        cy.visit(prUrl);
  
        // You can add more tests here to interact with the page
        cy.title().should('include', 'Pre-Booking Offer');
        cy.contains('h2.text-center', 'Already Accepted').should('be.visible');
      } else {
        cy.log('No URL provided');
      }
    });
  });
  