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
     .waitForElementPresent(enrollment.billingCheckbox, getConfig().timeout)
     .element('id', enrollment.billingCheckboxId, (response) => {
        browser.elementIdSelected(response.value.ELEMENT, (result) => {
         if(result.value == true) {
            browser.click(enrollment.billingCheckbox);
         };
        });
     })
  },

  after: function(browser){
    browser.end();
  },



  "Billing Address field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.billingAddress, getConfig().timeout)
     .clearValue(enrollment.billingAddress)
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanBillingAddress, undefined, undefined)
     .assert.visible(enrollment.billingAddressError);
  },

  "Billing Address field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(enrollment.billingAddress, getConfig().timeout)
     .clearValue(enrollment.billingAddress)
     .setValue(enrollment.billingAddress, 'test')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanBillingAddress, undefined, undefined)
     .assert.elementNotPresent(enrollment.billingAddressError);
  },

  "Billing Address City field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.billingAddressCity, getConfig().timeout)
     .clearValue(enrollment.billingAddressCity)
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanBillingAddressCity, undefined, undefined)
     .assert.visible(enrollment.billingAddressCityError);
  },

  "Billing Address City field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(enrollment.billingAddressCity, getConfig().timeout)
     .clearValue(enrollment.billingAddressCity)
     .setValue(enrollment.billingAddressCity, 'test')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanBillingAddressCity, undefined, undefined)
     .assert.elementNotPresent(enrollment.billingAddressCityError);
  },

  "Billing Address Zipcode field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.billingAddressZip, getConfig().timeout)
     .clearValue(enrollment.billingAddressZip)
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanBillingAddressZip, undefined, undefined)
     .assert.visible(enrollment.billingAddressZipError);
  },

  "Billing Address Zipcode field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(enrollment.billingAddressZip, getConfig().timeout)
     .clearValue(enrollment.billingAddressZip)
     .setValue(enrollment.billingAddressZip, '11111')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanBillingAddressZip, undefined, undefined)
     .assert.elementNotPresent(enrollment.billingAddressZipError);
  },

  "Billing Address State field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(enrollment.billingAddressStateOption, getConfig().timeout)
     .click(enrollment.billingAddressStateOption)
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanBillingAddressState, undefined, undefined)
     .assert.elementNotPresent(enrollment.billingAddressStateError);
  },

};
