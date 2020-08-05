const NavigationPage = require('../pageobjects/navigation.page');
const LoginPage = require('../pageobjects/login.page');
const DashboardPage = require('../pageobjects/dashboard.page');

const { hasUncaughtExceptionCaptureCallback } = require('process');
//const SecurePage = require('..\pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        NavigationPage.open();
        NavigationPage.goToSignIn();
        console.log(NavigationPage.getCounduitText());
        browser.pause(3000);
        LoginPage.login('demo@null.net', 'password11');
        expect(browser).toHaveUrl('https://demo.realworld.io/#/');
        DashboardPage.noArticlesLabel
        expect(DashboardPage.getNoArticlesLabel()).toBeDisplayed();

        
    });

    it ('Should be active by default: your feed', () => {
        expect(DashboardPage.getYourFeedTap()).toHaveAttribute('class', 'nav-link active'); 
    });

    it ('It should open the other tab', () => {
        DashboardPage.getGlobalFeedTap().click();
        expect(DashboardPage.getGlobalFeedTap()).toHaveClass('active', {message: "Not active tab"});

    });


});


