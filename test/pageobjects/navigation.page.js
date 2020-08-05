const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class NavigationPage extends Page {
    /**
     * define selectors using getter methods
     */
    get conduitLabel () { return $('a.navbar-brand.ng-binding') }
    get signInLink () { return $('*=Sign in') }
    get signUpLinks () { return $('*=up') }

    goToSignIn () {
        this.signInLink.click();
    }

    getCounduitText() {
        return this.conduitLabel.getText();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        
        return super.open("#/login");
    }
}

module.exports = new NavigationPage();