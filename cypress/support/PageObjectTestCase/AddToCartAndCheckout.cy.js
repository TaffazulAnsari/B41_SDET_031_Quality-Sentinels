class AddToCartAndCheckout {
    visit() {
        cy.visit('https://luni-interface-029.vercel.app');
    }

    addToCart() {
        cy.get('[class="nav-link"]').contains('Shop').click();

        cy.xpath('(//button[@type="button"])[2]')
            .should('exist')
            .and('be.visible').click();
        cy.go('back');

        cy.get('.controls__container > :nth-child(3)')
            .should('exist')
            .click();

        cy.get('button').contains('Checkout')
            .should('exist')
            //.and('be.visible')
            .click();
            

    }
}

export default AddToCartAndCheckout;
