class Wishlist {
    visit() {
        cy.visit('https://luni-interface-029.vercel.app');
    }

    addToFavorites() {
        cy.get('[class="nav-link"]').contains('Women').click();
        cy.xpath('(//button[@type="button"])[1]').click();
        cy.xpath('(//button[@type="button"])[3]').click();
        //cy.get('.controls__container > :nth-child(2)').click();
        cy.get('.controls__container > :nth-child(2)')
            .should('exist')
            .click();   
            cy.url().should('include', '/wishlist');     
    }
    //  removeSpecificProduct(){
    //     cy.url().should('include', '/wishlist'); 
    //  }
    //     cy.get('.wishlist__item').contains(productName)
    //     .parents('.wishlist__item') // Navigate to the parent container
    //         .find('[data-testid="HighlightOffIcon"]') 
    //         .should('exist')
    //         .click();

    //         cy.get('.wishlist__item').should('not.contain', productName);  
    // }
}

export default Wishlist;
