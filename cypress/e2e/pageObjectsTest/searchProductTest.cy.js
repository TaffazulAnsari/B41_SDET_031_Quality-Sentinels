import SearchPage from "../../support/PageObjectTestCase/SearchPage.cy";
describe('Search Product Tests', () => {
    const searchPage = new SearchPage();

    beforeEach(() => {
        searchPage.visit();
    });

    it('Should search for a specific product', () => {
        const productName = 'NIKE';

        searchPage.searchProduct(productName);
    });
});
