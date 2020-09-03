const TravelPage = require('../pageobjects/travel.page');
const SearchresultsPage = require('../pageobjects/searchresults.page');
//const DashboardPage = require('../pageobjects/dashboard.page');

const { hasUncaughtExceptionCaptureCallback } = require('process');
const { assert } = require('console');

describe('Travel application', () => {
    it('should search travel with valid parameters', () => {
        TravelPage.open();
        TravelPage.setOriginAirport("TXL"); //-> Solo selecciona/valida estaciones/aeropuertos!!
        TravelPage.setDestinationAirport("London"); //-> Solo selecciona/valida ciudades!!
        TravelPage.setPassangers(2,3,1);   
        TravelPage.clickSearch();

        // SearchresultsPage.open(); //-> opens url with no results
        SearchresultsPage.getResults();
        expect(browser).toHaveUrl("https://www.kiwi.com/us/search/results/berlin-tegel-berlin-germany/london-united-kingdom?adults=2&children=3&infants=1&multicity_transport=aircraft&transport=aircraft")
        expect(SearchresultsPage.getResults()).toBeDisplayed();
        //browser.pause(5000);
        
    });

    // it ('It should open the other tab', () => {
    //     DashboardPage.getGlobalFeedTap().click();
    //     expect(DashboardPage.getGlobalFeedTap()).toHaveClass('active', {message: "Not active tab"});
    //     expect(DashboardPage.getGlobalFeedTap()).toHaveProperty('ng-click');
    // });


});


