const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a SearchResults page
 */
class PaymentPage extends Page {
    /**
     * define selectors using getter methods
     */
    get reservationSummary () { return $('div[data-test="ReservationSummary"]') }  

    validateName (name) { 
        const title = name.gender.replace(/^\w/, (c) => c.toUpperCase());
        const fullName = `${title} ${name.fname} ${name.lname}`;
        var nome = this.reservationSummary.$(`span=${fullName}`).getText();
        return nome === fullName;
     }

     validateDateofBirth (dato) { return this.reservationSummary.$(`time=${dato.bdata}`) }
     validateID (dato) { return this.reservationSummary.$(`p=${dato.id}`) }
     validateDateofID (dato) { return this.reservationSummary.$(`time=${dato.idata}`) }
     validateEmail (dato) { return this.reservationSummary.$(`div=${dato.email}`) }
     validatePhone (dato) { return this.reservationSummary.$(`div*=${dato.phone}`) }



}

module.exports = new PaymentPage();
