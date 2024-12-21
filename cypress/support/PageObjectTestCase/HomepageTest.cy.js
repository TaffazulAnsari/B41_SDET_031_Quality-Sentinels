class HomePage {
  visit() {
      cy.visit('https://luni-interface-029.vercel.app/');
  }

  clickNavigationLink(linkText) {
      cy.get('header nav').contains(linkText).click();
  }

  validateNavigationLink(linkText, expectedUrl) {
      this.clickNavigationLink(linkText);
      cy.url().should('include', expectedUrl);
  }


  

  // validateFooterLinks () {
  //   cy.get('.chakra-stack').contains('Who we are').click();
  //   //cy.url().should('include', '/Who we are');  
  //   cy.go('back');

  //   cy.get('.chakra-stack').contains('Join our team').click();
  //   //cy.url().should('include', '/Who we are');  
  //   cy.go('back');

  //   cy.get('.chakra-stack').contains('Help').click();
  //   //cy.url().should('include', '/Who we are');  
  //   cy.go('back');

  // }

}
export default HomePage;


    

   


//     cy.contains('Join our team').click();
// cy.url().should('include', '/join-our-team');


    //cy.get('.footer-class').contains('Join our team').click();


    
    //cy.contains('Join our team').should('be.visible').click();

    //cy.url().should('include', '/join-our-team'); 
    //cy.go('back');

  //   cy.get('.chakra-stack').contains('Terms & Conditions').click();
  //   //cy.url().should('include', '/terms-conditions');
  //   cy.go('back');

  //   cy.get('.chakra-stack').contains('We respect our Policy').click();
  //   //cy.url().should('include', '/policy');  
  //   cy.go('back');

  //   cy.get('.chakra-stack').contains('Fee & Payments').click();
  //   //cy.url().should('include', '/fee-payments'); 
  //   cy.go('back');

  //   cy.get('.chakra-stack').contains('Returns & Refunds').click();
  //   //cy.url().should('include', '/returns-refunds'); 
  //   cy.go('back');

  //   cy.get('.chakra-stack').contains('Promotion Tem & conditions').click();
  //   //cy.url().should('include', '/promotion-terms'); 
  //   cy.go('back');

  //   cy.get('.chakra-stack').contains('Track your order').click();
  //   //cy.url().should('include', '/track-order'); 
  //   cy.go('back');

  //   cy.get('.chakra-stack').contains('Frequently asked questions').click();
  //   //cy.url().should('include', '/faq');  
  //   cy.go('back');

  //   cy.get('.chakra-stack').contains('Returns').click();
  //   //cy.url().should('include', '/returns'); 
  //   cy.go('back');

  //   cy.get('.chakra-stack').contains('Cancellation').click();
  //   //cy.url().should('include', '/cancellation');  
  //   cy.go('back');

  //   cy.get('.chakra-stack').contains('Payments').click();
  //   //cy.url().should('include', '/payments');  
  //   cy.go('back');

  //   cy.get('.chakra-stack').contains('Customer Care').click();
  //   //cy.url().should('include', '/customer-care'); 
  //   cy.go('back');

  //   cy.get('.chakra-stack').contains('How do I Redeem My coupon').click();
  //   //cy.url().should('include', '/redeem-coupon');
  //   cy.go('back');

  //   cy.get('.chakra-stack').contains('Men').click();
  //   //cy.url().should('include', '/shop/men'); 
  //   cy.go('back');

  //   cy.get('.chakra-stack').contains('Women').click();
  //   //cy.url().should('include', '/shop/women');
  //   cy.go('back');

  //   cy.get('.chakra-stack').contains('Kids').click();
  //   //cy.url().should('include', '/shop/kids'); 
  //   cy.go('back');

  //   cy.get('.chakra-stack').contains('Press').click();
  //   //cy.url().should('include', '/press');  
  //   cy.go('back');

  //   cy.get('.chakra-stack').contains('Download your apps').click();
  //   //cy.url().should('include', '/download-apps'); 
  //   cy.go('back');

  
  //   cy.get('.chakra-stack').contains('Facebook').click();
  //   //cy.url().should('include', 'facebook.com');
  //   cy.go('back');

  //   cy.get('.chakra-stack').contains('Instagram StyleMart-Life').click();
  //   //cy.url().should('include', 'instagram.com');
  //   cy.go('back');

  //   cy.get('.chakra-stack').contains('Instagram StyleMart-LUXE').click();
  //   //cy.url().should('include', 'instagram.com');
  //   cy.go('back');

  //   cy.get('.chakra-stack').contains('Twitter').click();
  //   //cy.url().should('include', 'twitter.com');
  //   cy.go('back');

  //   cy.get('.chakra-stack').contains('Pinterest').click();
  //   //cy.url().should('include', 'pinterest.com');
  //   cy.go('back');

  //   cy.get('.chakra-stack').contains('Terms of use').click();
  //   //cy.url().should('include', '/terms-of-use'); 
  //   cy.go('back');

  //   cy.get('.chakra-stack').contains('Privacy Policy').click();
  //   //cy.url().should('include', '/privacy-policy'); 
  //   cy.go('back');

  //   cy.get('.chakra-stack').contains('Cookie Notice').click();
  //   //cy.url().should('include', '/cookie-notice');  
  //   cy.go('back');
    
  
