const uuidv1 = require('uuid/v1');
const { getConfig } = require('../../config');
const enrollment = require('../../page-objects/enrollment');

module.exports = {
  '@tags': ['enrollment', 'enrollment-validation'],
  before: function(browser) {
    browser
      .url(getConfig().host+"/corporate/enrollment")
      .waitForElementPresent('body', getConfig().timeout)
      .click(enrollment.packsPageLink)
      .waitForElementPresent(enrollment.btnContinue, getConfig().timeout)
      .click(enrollment.btnContinue)
      .waitForElementPresent(enrollment.btnJoin, getConfig().timeout)
      .click(enrollment.btnJoin)
      .waitForElementPresent(enrollment.btnAddBasicKit, getConfig().timeout)
      .click(enrollment.btnAddBasicKit)
      .waitForElementPresent(enrollment.btnContinue, getConfig().timeout)
      .click(enrollment.btnContinue)
  },

  beforeEach: function(browser) {
    browser
     .waitForElementPresent(enrollment.shippingCheckbox, getConfig().timeout)
     .element('id', enrollment.shippingCheckboxId, (response) => {
        browser.elementIdSelected(response.value.ELEMENT, (result) => {
         if(result.value == true) {
            browser.click(enrollment.shippingCheckbox);
        };
       });
     });
  },

  after: function(browser){
    browser.end();
  },

  "Shipping Address First Name field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.shippingAddressFirstName, getConfig().timeout)
     .clearValue(enrollment.shippingAddressFirstName)
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanShippingFirstName, undefined, undefined)
     .assert.visible(enrollment.shippingFirstNameError);
  },

  "Shipping Address First Name field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(enrollment.shippingAddressFirstName, getConfig().timeout)
     .clearValue(enrollment.shippingAddressFirstName)
     .setValue(enrollment.shippingAddressFirstName, 'test')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanShippingFirstName, undefined, undefined)
     .assert.elementNotPresent(enrollment.shippingFirstNameError)
  },

  "Shipping Address Last Name field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.shippingAddressLastName, getConfig().timeout)
     .clearValue(enrollment.shippingAddressLastName)
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanShippingLastName, undefined, undefined)
     .assert.visible(enrollment.shippingLastNameError);
  },

  "Shipping Address Last Name field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(enrollment.shippingAddressLastName, getConfig().timeout)
     .clearValue(enrollment.shippingAddressLastName)
     .setValue(enrollment.shippingAddressLastName, 'test')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanShippingLastName, undefined, undefined)
     .assert.elementNotPresent(enrollment.shippingLastNameError);
  },

  "Shipping Address Email field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.shippingAddressEmail, getConfig().timeout)
     .clearValue(enrollment.shippingAddressEmail)
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanShippingEmail, undefined, undefined)
     .assert.visible(enrollment.shippingEmailError);
  },

  "Shipping Address Email field incorrect validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.shippingAddressEmail, getConfig().timeout)
     .clearValue(enrollment.shippingAddressEmail)
     .setValue(enrollment.shippingAddressEmail, 'test')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanShippingEmail, undefined, undefined)
     .assert.visible(enrollment.shippingEmailError);
  },

  "Shipping Address Email field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(enrollment.shippingAddressEmail, getConfig().timeout)
     .clearValue(enrollment.shippingAddressEmail)
     .setValue(enrollment.shippingAddressEmail, 'test@mail.com')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanShippingEmail, undefined, undefined)
     .assert.elementNotPresent(enrollment.shippingEmailError);
  },

  "Shipping Address Phone field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.shippingAddressPhone, getConfig().timeout)
     .clearValue(enrollment.shippingAddressPhone)
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanShippingPhone, undefined, undefined)
     .assert.visible(enrollment.shippingPhoneError);
  },

  "Shipping Address Phone field incorrect validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.shippingAddressPhone, getConfig().timeout)
     .clearValue(enrollment.shippingAddressPhone)
     .setValue(enrollment.shippingAddressPhone, '123456789012')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanShippingPhone, undefined, undefined)
     .assert.visible(enrollment.shippingPhoneError);
  },

  "Shipping Address Phone field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(enrollment.shippingAddressPhone, getConfig().timeout)
     .clearValue(enrollment.shippingAddressPhone)
     .setValue(enrollment.shippingAddressPhone, '1234567890')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanShippingPhone, undefined, undefined)
     .assert.elementNotPresent(enrollment.shippingPhoneError);
  },

  "Shipping Address field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.shippingAddress, getConfig().timeout)
     .clearValue(enrollment.shippingAddress)
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanShippingAddress, undefined, undefined)
     .assert.visible(enrollment.shippingAddressError);
  },

  "Shipping Address field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(enrollment.shippingAddress, getConfig().timeout)
     .clearValue(enrollment.shippingAddress)
     .setValue(enrollment.shippingAddress, 'test')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanShippingAddress, undefined, undefined)
     .assert.elementNotPresent(enrollment.shippingAddressError);
  },

  "Shipping Address City field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.shippingAddressCity, getConfig().timeout)
     .clearValue(enrollment.shippingAddressCity)
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanShippingCity, undefined, undefined)
     .assert.visible(enrollment.shippingCityError);
  },

  "Shipping Address City field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(enrollment.shippingAddressCity, getConfig().timeout)
     .clearValue(enrollment.shippingAddressCity)
     .setValue(enrollment.shippingAddressCity, 'test')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanShippingCity, undefined, undefined)
     .assert.elementNotPresent(enrollment.shippingCityError);
  },

  "Shipping Address Zipcode field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.shippingAddressZip, getConfig().timeout)
     .clearValue(enrollment.shippingAddressZip)
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanShippingZip, undefined, undefined)
     .assert.visible(enrollment.shippingZipError);
  },

  "Shipping Address Zipcode field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(enrollment.shippingAddressZip, getConfig().timeout)
     .clearValue(enrollment.shippingAddressZip)
     .setValue(enrollment.shippingAddressZip, '11111')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanShippingZip, undefined, undefined)
     .assert.elementNotPresent(enrollment.shippingZipError);
  },

  "Shipping Address State field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(enrollment.shippingAddressStateOption, getConfig().timeout)
     .click(enrollment.shippingAddressStateOption)
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanShippingAddressState, undefined, undefined)
     .assert.elementNotPresent(enrollment.shippingAddressStateError);
  }

};
