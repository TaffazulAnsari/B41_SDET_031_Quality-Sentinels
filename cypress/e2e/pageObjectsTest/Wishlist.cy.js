import Wishlist from "../../support/PageObjectTestCase/Wishlist.cy";

describe('Add to Cart and Favorites', () => {
    const wishlist = new Wishlist();

    it('should add a product to the cart and verify the cart items', () => {
        wishlist.visit();
        wishlist.addToFavorites();
    });

    // it('Remove Specific Product from wishlist', () => {
    //     wishlist.visit();
    //     wishlist.removeSpecificProduct();
//}

});
