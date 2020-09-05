const TravelPage = require('../pageobjects/travel.page');
const SearchresultsPage = require('../pageobjects/searchresults.page');

const { hasUncaughtExceptionCaptureCallback } = require('process');
const { assert } = require('console');

describe('Travel application', () => {
    it('should search travel with valid parameters', () => {
        TravelPage.open();
        TravelPage.setOriginAirport("TXL"); //-> Solo selecciona/valida estaciones/aeropuertos!!
        TravelPage.setDestinationAirport("London"); //-> Solo selecciona/valida ciudades!!
        TravelPage.setPassangers(2,3,1);   
        TravelPage.clickSearch();

        expect(browser).toHaveUrl("https://www.kiwi.com/us/search/results/berlin-tegel-berlin-germany/london-united-kingdom?adults=2&children=3&infants=1");
        expect(SearchresultsPage.getResults()).toBeDisplayed();
        //browser.pause(5000);
        
    });


});


