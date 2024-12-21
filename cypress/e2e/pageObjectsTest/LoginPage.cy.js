import LoginPage from "../../support/PageObjectTestCase/LoginPage.cy";

describe('Login Tests', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        cy.visit('https://luni-interface-029.vercel.app/account/login');
    });

    it('Validates successful login', () => {
        cy.get('.email__input').type('taffazul@gmail.com');

        cy.get('.password__input').type('password123'); 

        cy.get('.login__button').click(); 

    });
});