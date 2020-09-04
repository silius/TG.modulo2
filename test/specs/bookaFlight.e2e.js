const SearchresultsPage = require('../pageobjects/searchresults.page');
const BookPage = require('../pageobjects/book.page');

const { hasUncaughtExceptionCaptureCallback } = require('process');
const { assert } = require('console');

describe('Travel application', () => {
    it('should book a flight', () => {

        SearchresultsPage.open();
        SearchresultsPage.clickBook();
        // expect(SearchresultsPage.getResults()).toBeDisplayed();
        
        browser.pause(5000);
        
    });


});

