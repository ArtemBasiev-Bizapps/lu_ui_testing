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
  after: function(browser){
    browser.end();
  },


  "First Name field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.customerFirstName, getConfig().timeout)
     .clearValue(enrollment.customerFirstName)
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanCustomerFirstName, undefined, undefined)
     .assert.visible(enrollment.customerFirstNameError);
  },

  "First Name field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(enrollment.customerFirstName, getConfig().timeout)
     .clearValue(enrollment.customerFirstName)
     .setValue(enrollment.customerFirstName, 'test')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanCustomerFirstName, undefined, undefined)
     .assert.elementNotPresent(enrollment.customerFirstNameError);
  },

  "Last Name field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.customerLastName, getConfig().timeout)
     .clearValue(enrollment.customerLastName)
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanCustomerLastName, undefined, undefined)
     .assert.visible(enrollment.customerLastNameError);
  },

  "Last Name field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(enrollment.customerLastName, getConfig().timeout)
     .clearValue(enrollment.customerLastName)
     .setValue(enrollment.customerLastName, 'test')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanCustomerLastName, undefined, undefined)
     .assert.elementNotPresent(enrollment.customerLastNameError);
  },

  "Home Phone field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.customerPrimaryPhone, getConfig().timeout)
     .clearValue(enrollment.customerPrimaryPhone)
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanCustomerPrimaryPhone, undefined, undefined)
     .assert.visible(enrollment.customerPrimaryPhoneError);
  },

  "Home Phone field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(enrollment.customerPrimaryPhone, getConfig().timeout)
     .clearValue(enrollment.customerPrimaryPhone)
     .setValue(enrollment.customerPrimaryPhone, '123456789')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanCustomerPrimaryPhone, undefined, undefined)
     .assert.elementNotPresent(enrollment.customerPrimaryPhoneError);
  },

  "Email field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.customerEmail, getConfig().timeout)
     .clearValue(enrollment.customerEmail)
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanCustomerEmail, undefined, undefined)
     .assert.visible(enrollment.customerEmailError);
  },

  "Email field incorrect validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.customerEmail, getConfig().timeout)
     .clearValue(enrollment.customerEmail)
     .setValue(enrollment.customerEmail, 'test')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanCustomerEmail, undefined, undefined)
     .assert.visible(enrollment.customerEmailError);
  },

  "Email field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(enrollment.customerEmail, getConfig().timeout)
     .clearValue(enrollment.customerEmail)
     .setValue(enrollment.customerEmail, 'test@mail.com')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanCustomerEmail, undefined, undefined)
     .assert.elementNotPresent(enrollment.customerEmailError);
  },

  "Street Address field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.customerMainAddress, getConfig().timeout)
     .clearValue(enrollment.customerMainAddress)
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanCustomerMainAddress, undefined, undefined)
     .assert.visible(enrollment.customerMainAddressError);
  },

  "Street Address field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(enrollment.customerMainAddress, getConfig().timeout)
     .clearValue(enrollment.customerMainAddress)
     .setValue(enrollment.customerMainAddress, 'test')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanCustomerMainAddress, undefined, undefined)
     .assert.elementNotPresent(enrollment.customerMainAddressError);
  },

  "City field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.customerMainAddressCity, getConfig().timeout)
     .clearValue(enrollment.customerMainAddressCity)
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanMainAddressCity, undefined, undefined)
     .assert.visible(enrollment.mainAddressCityError);
  },

  "City field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(enrollment.customerMainAddressCity, getConfig().timeout)
     .clearValue(enrollment.customerMainAddressCity)
     .setValue(enrollment.customerMainAddressCity, 'test')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanMainAddressCity, undefined, undefined)
     .assert.elementNotPresent(enrollment.mainAddressCityError);
  },

  "Zipcode field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.customerMainAddressZip, getConfig().timeout)
     .clearValue(enrollment.customerMainAddressZip)
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanMainAddressZip, undefined, undefined)
     .assert.visible(enrollment.mainAddressZipError);
  },

  "Zipcode field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(enrollment.customerMainAddressZip, getConfig().timeout)
     .clearValue(enrollment.customerMainAddressZip)
     .setValue(enrollment.customerMainAddressZip, '11111')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanMainAddressZip, undefined, undefined)
     .assert.elementNotPresent(enrollment.mainAddressZipError);
  },

  "State field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(enrollment.mainAddressStateOption, getConfig().timeout)
     .click(enrollment.mainAddressStateOption)
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanMainAddressState, undefined, undefined)
     .assert.elementNotPresent(enrollment.mainAddressStateError);
  },

  "Username field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.customerLoginName, getConfig().timeout)
     .clearValue(enrollment.customerLoginName)
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanCustomerLoginName, undefined, undefined)
     .assert.visible(enrollment.customerLoginNameError);
  },

  "Username field incorrect validation message should be visible": function(browser) {
    browser
    .waitForElementPresent(enrollment.customerLoginName, getConfig().timeout)
    .clearValue(enrollment.customerLoginName)
    .setValue(enrollment.customerLoginName, '---')
    .click(enrollment.btnSubmitEnrollment)
    .moveToElement(enrollment.spanCustomerLoginName, undefined, undefined)
    .assert.visible(enrollment.customerLoginNameError)
    .saveScreenshot('./reports/%ID%.png'.replace('%ID%', uuidv1()));
  },

  "Username field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(enrollment.customerLoginName, getConfig().timeout)
     .clearValue(enrollment.customerLoginName)
     .setValue(enrollment.customerLoginName, Math.random().toString(36).substr(2, 15)+Math.random().toString(36).substr(2, 15))
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanCustomerLoginName, undefined, undefined)
     .assert.elementNotPresent(enrollment.customerLoginNameError);
  },

  "Password field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.customerPassword, getConfig().timeout)
     .clearValue(enrollment.customerPassword)
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanCustomerPassword, undefined, undefined)
     .assert.visible(enrollment.customerPasswordError);
  },

  "Password field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(enrollment.customerPassword, getConfig().timeout)
     .clearValue(enrollment.customerPassword)
     .setValue(enrollment.customerPassword, 'test')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanCustomerPassword, undefined, undefined)
     .assert.elementNotPresent(enrollment.customerPasswordError);
  },

  "Confirm password field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.customerConfirmPassword, getConfig().timeout)
     .clearValue(enrollment.customerConfirmPassword)
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanCustomerConfirmPassword, undefined, undefined)
     .assert.visible(enrollment.customerConfirmPasswordError);
  },

  "Confirm password field matching validation message should be visible": function(browser) {
    browser
    .waitForElementPresent(enrollment.customerPassword, getConfig().timeout)
    .clearValue(enrollment.customerPassword)
    .setValue(enrollment.customerPassword, '111')
    .waitForElementPresent(enrollment.customerConfirmPassword, getConfig().timeout)
    .clearValue(enrollment.customerConfirmPassword)
    .setValue(enrollment.customerConfirmPassword, '222')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanCustomerConfirmPassword, undefined, undefined)
     .assert.visible(enrollment.customerConfirmPasswordError);
  },

  "Confirm password field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(enrollment.customerPassword, getConfig().timeout)
     .clearValue(enrollment.customerPassword)
     .setValue(enrollment.customerPassword, '111')
     .waitForElementPresent(enrollment.customerConfirmPassword, getConfig().timeout)
     .clearValue(enrollment.customerConfirmPassword)
     .setValue(enrollment.customerConfirmPassword, '111')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanCustomerConfirmPassword, undefined, undefined)
     .assert.elementNotPresent(enrollment.customerConfirmPasswordError);
  }

};
