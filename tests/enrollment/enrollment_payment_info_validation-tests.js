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


  "Name on Card field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.paymentMethodNameOnCard, getConfig().timeout)
     .clearValue(enrollment.paymentMethodNameOnCard)
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanNameOnCard, undefined, undefined)
     .assert.visible(enrollment.NameOnCardError);
  },

  "Name on Card field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(enrollment.paymentMethodNameOnCard, getConfig().timeout)
     .clearValue(enrollment.paymentMethodNameOnCard)
     .setValue(enrollment.paymentMethodNameOnCard, 'test')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanNameOnCard, undefined, undefined)
     .assert.elementNotPresent(enrollment.NameOnCardError);
  },

  "Card Number field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.paymentMethodCardNumber, getConfig().timeout)
     .clearValue(enrollment.paymentMethodCardNumber)
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanCardNumber, undefined, undefined)
     .assert.visible(enrollment.cardNumberError);
  },

  "Card Number field incorrect validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(enrollment.paymentMethodCardNumber, getConfig().timeout)
     .clearValue(enrollment.paymentMethodCardNumber)
     .setValue(enrollment.paymentMethodCardNumber, '96969696969696969696')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanCardNumber, undefined, undefined)
     .assert.visible(enrollment.cardNumberError);
  },

  "Card Number field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(enrollment.paymentMethodCardNumber, getConfig().timeout)
     .clearValue(enrollment.paymentMethodCardNumber)
     .setValue(enrollment.paymentMethodCardNumber, '96969696969696')
     .click(enrollment.btnSubmitEnrollment)
     .moveToElement(enrollment.spanCardNumber, undefined, undefined)
     .assert.elementNotPresent(enrollment.cardNumberError);
  },



};
