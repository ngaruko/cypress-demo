// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
//import './commands'

// Alternatively you can use CommonJS syntax:
 require('./commands');


 //Global hooks
 before(() => {
  // cy.visit("https://www.trademe.co.nz/a/jobs/search");
  cy.log('Testing ---123')
  cy.log('Going to: ', Cypress.env('PR_URL'))
});

after(() => {
  cy.log('Done with testing...');
});
