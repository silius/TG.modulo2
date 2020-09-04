const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BookPage extends Page {
    /**
     * define selectors using getter methods
     */
    get reservationDataInputs () {return $('.Reservation-content') }
    

    fillEmail (email) { return this.noArticlesLabel }
    fillPhone (phone) { return this.noArticlesLabel }
    fillFirstName (fname) { return this.noArticlesLabel }
    fillLastName (lname) { return this.noArticlesLabel }
    fillNationality (nation) { return this.noArticlesLabel }
    fillGender (gender) { return this.noArticlesLabel }
    fillBirthDate (bdate) { return this.noArticlesLabel }
    fillId (id) { return this.noArticlesLabel }
    fillIdDate (idate) { return this.noArticlesLabel }

    /**
     * overwrite specifc options to adapt it to page object
     */

}

module.exports = new BookPage();