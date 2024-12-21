import HomePage from "../../support/PageObjectTestCase/HomepageTest.cy";

describe('Homepage Navigation Tests', () => {
  const homePage = new HomePage();

  beforeEach(() => {
      homePage.visit();
  });

  it('Validates navigation links in the header', () => {
    cy.get('.nav-link').contains('Home').click();
    cy.url().should('include', 'https://luni-interface-029.vercel.app/');

    cy.get('.nav-link').contains('Shop').click();
    cy.url().should('include', '/shop');

    cy.get('.nav-link').contains('Men').click();
    cy.url().should('include', '/category/men');

    cy.get('.nav-link').contains('Women').click();
    cy.url().should('include', '/category/women');

    cy.get('.nav-link').contains('Kids').click();
    cy.url().should('include', '/category/kids');
  });

  // it('Validates footer links in the Support section', () => {
  //   homePage.validateFooterLinks();
    
  // });

});