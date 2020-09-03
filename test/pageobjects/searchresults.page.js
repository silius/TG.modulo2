const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a SearchResults page
 */
class SearchresultsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get resultsView () { return $('.resultsView') }
    
    getResults () {
        return this.resultsView.$('[data-test="WatchdogAndSortingWrapper"]');
        //const noresult = this.resultsView.$('[class*=NoResultsstyled]');
    }

    

    // open () {  return super.open("us/search/results/berlin-tegel-berlin-germany/london-united-kingdom?adults=2&airlinesList=AV&children=3&infants=1&multicity_transport=aircraft&selectedAirlinesExclude=false&transport=aircraft") }

}

module.exports = new SearchresultsPage();
