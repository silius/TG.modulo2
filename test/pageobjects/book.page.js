const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BookPage extends Page {
    /**
     * define selectors using getter methods
     */
    get reservationDataInputs () {return $('.Reservation-content') }
    get continueBtn () { return $('button=Continue') }
    

    fillEmail (email) { this.reservationDataInputs.$('[name="email"]').setValue(email); }
    fillPhone (phone) { this.reservationDataInputs.$('[name="phone"]').setValue(phone); }
    fillFirstName (fname) { this.reservationDataInputs.$('[name="firstname"]').setValue(fname); }
    fillLastName (lname) { this.reservationDataInputs.$('[name="lastname"]').setValue(lname); }
    fillNationality (nation) { this.reservationDataInputs.$('[name="nationality"]').selectByAttribute('value', nation); }
    fillGender (gender) { this.reservationDataInputs.$('[name="title"]').selectByAttribute('value', gender); }
    fillBirthDate (bdate) { 
        this.reservationDataInputs.$('[name="birthMonth"]').selectByAttribute('value', bdate.split("/")[0]);
        this.reservationDataInputs.$('[name="birthDay"]').setValue(bdate.split("/")[1]);
        this.reservationDataInputs.$('[name="birthYear"]').setValue(bdate.split("/")[2]);
     }
    fillId (id) { this.reservationDataInputs.$('[name="idNumber"]').setValue(id); }
    fillIdDate (idate) { 
        this.reservationDataInputs.$('[name="idExpirationMonth"]').selectByAttribute('value', idate.split("/")[0]);
        this.reservationDataInputs.$('[name="idExpirationDay"]').setValue(idate.split("/")[1]);
        this.reservationDataInputs.$('[name="idExpirationYear"]').setValue(idate.split("/")[2]);
     }

    fillData (persona) {
        this.fillEmail(persona.email);
        this.fillPhone(persona.phone);
        this.fillFirstName(persona.fname);
        this.fillLastName(persona.lname);
        this.fillNationality(persona.nation);
        this.fillGender(persona.gender);
        this.fillBirthDate(persona.bdata);
        this.fillId(persona.id);
        this.fillIdDate(persona.idata);
    }

    clickContinue () { this.continueBtn.click() }

    /**
     * overwrite specifc options to adapt it to page object
     */

}

module.exports = new BookPage();