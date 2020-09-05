const SearchresultsPage = require('../pageobjects/searchresults.page');
const BookPage = require('../pageobjects/book.page');
const SelectFare = require('../pageobjects/selectFare.page')
const CustomizePage = require('../pageobjects/customizeTrip.page')
const PaymentPage = require('../pageobjects/payment.page')

const fs = require('fs');
const path = require('path');

let rawdata = fs.readFileSync(path.join(__dirname, '../data/pasajero.json'));
let pasajero = JSON.parse(rawdata);

const { hasUncaughtExceptionCaptureCallback } = require('process');
const { assert } = require('console');

describe('Travel application', () => {
    it('should book a flight', () => {

        SearchresultsPage.open();
        SearchresultsPage.clickBook();

        BookPage.fillData(pasajero);
        BookPage.clickContinue();

        SelectFare.clickContinueStd();
        SelectFare.clickContinuePlus();

        CustomizePage.clickContinue();

        expect(PaymentPage.validateName(pasajero)).toBeTruthy();
        expect(PaymentPage.validateDateofBirth(pasajero)).toBeVisible();
        expect(PaymentPage.validateID(pasajero)).toBeVisible();
        expect(PaymentPage.validateDateofID(pasajero)).toBeVisible();
        expect(PaymentPage.validateEmail(pasajero)).toBeVisible();
        expect(PaymentPage.validatePhone(pasajero)).toBeVisible();

        expect(browser).toHaveUrlContaining('activeStep=3');
        
    });


});

