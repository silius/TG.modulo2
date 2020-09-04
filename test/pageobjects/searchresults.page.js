const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a SearchResults page
 */
class SearchresultsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get resultsView () { return $('.resultsView') }
    get transportFilters () { return $('[data-test="HashtagHeader-transport"]') }
    
    getResults () { return this.resultsView.$('[data-test="WatchdogAndSortingWrapper"]') }    
    getNoResults () { return this.resultsView.$('[class*=NoResultsstyled]') }
    
    filterCheckBus () { this.transportFilters.$('span=Bus').click() }
    filterCheckTrain () { this.transportFilters.$('span=Train').click() }
    filterCheckFlight () { this.transportFilters.$('span=Flight').click() }

    filterbyBus () {
        this.filterCheckTrain();
        this.filterCheckFlight();
    }

     open () {  return super.open("us/search/results/berlin-tegel-berlin-germany/london-united-kingdom/2020-10-01_2020-10-31/2020-10-01_2020-10-31") }

}

module.exports = new SearchresultsPage();
