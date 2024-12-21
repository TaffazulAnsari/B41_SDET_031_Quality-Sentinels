// ***********************************************************
// This example support/e2e.js is processed and
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
import './commands'


Cypress.on('uncaught:exception', (err, runnable) => {
    //Check if the error message contains the specific text related to React internals
    if(err.message.includes('__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED')) {
      //Log the error for debugging purposes
      console.error(err);
      //Return false to prevent Cypress from failing the test
      return false;
    }
  });


  