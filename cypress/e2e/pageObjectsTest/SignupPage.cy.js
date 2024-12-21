import SignUpPage from "../../support/PageObjectTestCase/SignupPage.cy";

describe('Sign Up Tests', () => {
    const signUpPage = new SignUpPage();

    beforeEach(() => {
        signUpPage.visit();
    });

    it('Validates successful sign-up', () => {
        signUpPage.enterFirstName('Taffazul');
        signUpPage.enterLastName('Ansari');
        signUpPage.enterEmail('Taffazulansari@gmail.com');
        signUpPage.enterPassword('Taffazul123');
        signUpPage.clickCreateAccountButton();
    });
    it('Validates the presence and functionality of the "Login" link', () => {
        cy.get('.register__login__account').should('contain.text', 'Already have account?');

        cy.get('.register__login__account a').should('have.attr', 'href', '/account/login').and('contain.text', 'Login').click();
        cy.url().should('include', '/account/login');
        });

});
