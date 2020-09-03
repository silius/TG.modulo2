const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a Search Travel page
 */
class TravelPage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchInput () { return $$('[data-test="SearchField-input"') }
    get valuesDisplayed () { return $$('[data-test="PlacePickerInputPlace"]') }
    get originForm () { return $('[data-test="SearchPlaceField-origin"]') }
    get originModal () { return $('[data-test="PlacepickerModalOpened-origin"]') }
    get destinationForm () { return $('[data-test="SearchPlaceField-destination"]') }
    get destinationModal () { return $('[data-test="PlacepickerModalOpened-destination"]') }

    get passengersField () { return $('[data-test="PassengersField"]') }
    get passengersPopOver () { return $('[data-test="PassengersPopover"]') }

    get searchButton () { return $('[data-test="LandingSearchButton"]') }

    getOriginAirport () {
        return this.searchInput[0].getText();
    }

    setOriginAirport (origen) {
        this.originForm.$('[data-test="PlacePickerInput-origin"]').click();
        this.searchInput[0].setValue(origen);
        // this.originModal.$('[role="button"]').click();     
        this.originModal.$('div[data-test="PlacePickerRow-station"]').click();
    }

    setDestinationAirport (destino) {
        // this.destinationForm.$$('div')[1].$('div').click();
        this.searchInput[1].setValue(destino);
        //this.destinationModal.$('div').$('div').$('div').$('div').$('div').click();  
        this.destinationModal.$('div[data-test="PlacePickerRow-city"]').click(); 
    }

    setPassangers (adults = 1, children = 0, infants = 0) {
        this.expandPassangers();
        var i;
        for (i = 1; i < adults; i++) { this.passengersPopOver.$('[data-test="PassengersRow-adults"]').$('[aria-label="increment"]').click(); }
        for (i = 0; i < children; i++) { this.passengersPopOver.$('[data-test="PassengersRow-children"]').$('[aria-label="increment"]').click(); }
        for (i = 0; i < infants; i++) { this.passengersPopOver.$('[data-test="PassengersRow-infants"]').$('[aria-label="increment"]').click(); }
        this.passengersPopOver.$('div=Done').click();
        
    }

    expandPassangers () {
        this.passengersField.click();
    }

    clickSearch () {
        this.searchButton.click();
    }

    debug () {
        // console.log(`Debug line: ${this.fromValue[0].getHTML()}`);
    }


    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {  return super.open("us/") }
}

module.exports = new TravelPage();