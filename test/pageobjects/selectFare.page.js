const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a SearchResults page
 */
class SelectFare extends Page {
    /**
     * define selectors using getter methods
     */
    get standardFareBTN () { return $('button[data-test="fareTypesStandardButton"]') }
    get continuePlusBTN () { return $('button[data-test="servicePackagesPlusButton"]') }  

    clickContinueStd () { this.standardFareBTN.click() }
    clickContinuePlus () { this.continuePlusBTN.click() }

}

module.exports = new SelectFare();
