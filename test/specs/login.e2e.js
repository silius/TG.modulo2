const NavigationPage = require('../pageobjects/navigation.page');
const LoginPage = require('../pageobjects/login.page');
//const SecurePage = require('..\pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        NavigationPage.open();
        NavigationPage.goToSignIn();
        console.log(NavigationPage.getCounduitText());
        browser.pause();
    });
});


