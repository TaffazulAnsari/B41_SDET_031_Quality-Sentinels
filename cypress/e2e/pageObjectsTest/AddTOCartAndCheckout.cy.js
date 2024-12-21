import AddToCartAndCheckout from "../../support/PageObjectTestCase/AddToCartAndCheckout.cy";


describe('add to cart', () => {
    const productpage = new AddToCartAndCheckout();

    it('', () => {
        productpage.visit();
        productpage.addToCart();
    });
  
});
