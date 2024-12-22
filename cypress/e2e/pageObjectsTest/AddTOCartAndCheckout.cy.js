import AddToCartAndCheckout from "../../support/PageObjectTestCase/AddToCartAndCheckout.cy";


describe('Add to cart and modify cart', () => {
    const productpage = new AddToCartAndCheckout();

    it('should add a product, modify the cart, and proceed to checkout', () => {
        productpage.visit();
        productpage.addToCart();
    });
  
});
