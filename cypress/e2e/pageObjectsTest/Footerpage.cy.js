import FooterPage from '../../support/PageObjectTestCase/FooterPage.cy';

describe('Footer Tests for Luni Interface Website', () => {
  const footerPage = new FooterPage();

  beforeEach(() => {
    footerPage.visit();
  });

  it('Validates footer links in the Support section', () => {
    footerPage.validateFooterLinks();
  });

  it('should validate language and country options in the footer', () => {
    footerPage.validateLanguageAndCountryOptions();
  });

  it('should validate copyright information', () => {
    footerPage.validateCopyright();
  });
});
