const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a SearchResults page
 */
class CustomizePage extends Page {
    /**
     * define selectors using getter methods
     */
    get continueBTN () { return $('button[data-test="StepControls-AdditionalService-next"]') }  

    clickContinue () { this.continueBTN.click() }

}

module.exports = new CustomizePage();
