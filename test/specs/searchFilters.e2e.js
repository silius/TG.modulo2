const SearchresultsPage = require('../pageobjects/searchresults.page');

const { hasUncaughtExceptionCaptureCallback } = require('process');
const { assert } = require('console');

describe('Travel application', () => {
    it('should apply travel type filters', () => {

        SearchresultsPage.open();
        //expect(SearchresultsPage.getResults()).toBeDisplayed();
        //browser.pause(5000);
        
    });


});


