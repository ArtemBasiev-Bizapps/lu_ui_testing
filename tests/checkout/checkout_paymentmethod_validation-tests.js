const { getConfig } = require('../../config');
const checkout = require('../../page-objects/checkout');

module.exports = {
  '@tags': ['checkout', 'checkout-validation'],

  before: function(browser) {
    browser
    .url(getConfig().host+getConfig().productRelativeUrl)
    .waitForElementPresent('body', getConfig().timeout)
    .click(checkout.btnAddToCart)
    .pause(getConfig().bigtimeout)
    .click(checkout.linkCart)
    .waitForElementPresent(checkout.btnCheckout, getConfig().timeout)
    .click(checkout.btnCheckout)
    .waitForElementPresent(checkout.btnCheckoutAsGuest, getConfig().timeout)
    .click(checkout.btnCheckoutAsGuest)
    .waitForElementPresent(checkout.tabPickUp, getConfig().timeout)
    .click(checkout.tabPickUp)
    .waitForElementPresent(checkout.pickUpFirstName, getConfig().timeout)
    .clearValue(checkout.pickUpFirstName)
    .setValue(checkout.pickUpFirstName, "test")
    .waitForElementPresent(checkout.pickUpLastName, getConfig().timeout)
    .clearValue(checkout.pickUpLastName)
    .setValue(checkout.pickUpLastName, "test")
    .waitForElementPresent(checkout.pickUpEmail, getConfig().timeout)
    .clearValue(checkout.pickUpEmail)
    .setValue(checkout.pickUpEmail, "test@mail.com")
    .waitForElementPresent(checkout.btnPickUp, getConfig().timeout)
    .click(checkout.btnPickUp)
  },

  after: function(browser){
    browser.end();
  },

  "Name On Card field validation message should be hidden": function(browser) {
    browser
    .waitForElementPresent(checkout.nameOnCard, getConfig().bigtimeout)
    .clearValue(checkout.nameOnCard)
    .setValue(checkout.nameOnCard, "test")
    .waitForElementPresent(checkout.btnNewCardSubmit, getConfig().timeout)
    .click(checkout.btnNewCardSubmit)
    .moveToElement(checkout.spanNameOnCard, undefined, undefined)
    .assert.elementNotPresent(checkout.nameOnCardError);
  },

  "Name On Card field required validation message should be visible": function(browser) {
    browser
    .waitForElementPresent(checkout.nameOnCard, getConfig().bigtimeout)
    .clearValue(checkout.nameOnCard)
    .waitForElementPresent(checkout.btnNewCardSubmit, getConfig().timeout)
    .click(checkout.btnNewCardSubmit)
    .moveToElement(checkout.spanNameOnCard, undefined, undefined)
    .waitForElementPresent(checkout.nameOnCardError, getConfig().timeout)
    .assert.visible(checkout.nameOnCardError);
  },

  "Card Number field validation message should be hidden": function(browser) {
    browser
    .waitForElementPresent(checkout.cardNumber, getConfig().bigtimeout)
    .clearValue(checkout.cardNumber)
    .setValue(checkout.cardNumber, getConfig().testCardNumber)
    .waitForElementPresent(checkout.btnNewCardSubmit, getConfig().timeout)
    .click(checkout.btnNewCardSubmit)
    .moveToElement(checkout.spanCardNumber, undefined, undefined)
    .assert.elementNotPresent(checkout.cardNumberError);
  },

  "Card Number field required validation message should be visible": function(browser) {
    browser
    .waitForElementPresent(checkout.cardNumber, getConfig().bigtimeout)
    .clearValue(checkout.cardNumber)
    .waitForElementPresent(checkout.btnNewCardSubmit, getConfig().timeout)
    .click(checkout.btnNewCardSubmit)
    .moveToElement(checkout.spanCardNumber, undefined, undefined)
    .waitForElementPresent(checkout.cardNumberError, getConfig().timeout)
    .assert.visible(checkout.cardNumberError);
  },

  "Card Number field incorrect validation message should be visible": function(browser) {
    browser
    .waitForElementPresent(checkout.cardNumber, getConfig().bigtimeout)
    .clearValue(checkout.cardNumber)
    .setValue(checkout.cardNumber, "111")
    .waitForElementPresent(checkout.btnNewCardSubmit, getConfig().timeout)
    .click(checkout.btnNewCardSubmit)
    .moveToElement(checkout.spanCardNumber, undefined, undefined)
    .waitForElementPresent(checkout.cardNumberError, getConfig().timeout)
    .assert.visible(checkout.cardNumberError);
  },

  "Billing Address field validation message should be hidden": function(browser) {
    browser
    .waitForElementPresent(checkout.billingAddress, getConfig().bigtimeout)
    .clearValue(checkout.billingAddress)
    .setValue(checkout.billingAddress, "test")
    .waitForElementPresent(checkout.btnNewCardSubmit, getConfig().timeout)
    .click(checkout.btnNewCardSubmit)
    .moveToElement(checkout.spanBillingAddress, undefined, undefined)
    .assert.elementNotPresent(checkout.billingAddressError);
  },

  "Billing Address field required validation message should be visible": function(browser) {
    browser
    .waitForElementPresent(checkout.billingAddress, getConfig().bigtimeout)
    .clearValue(checkout.billingAddress)
    .waitForElementPresent(checkout.btnNewCardSubmit, getConfig().timeout)
    .click(checkout.btnNewCardSubmit)
    .moveToElement(checkout.spanBillingAddress, undefined, undefined)
    .waitForElementPresent(checkout.billingAddressError, getConfig().timeout)
    .assert.visible(checkout.billingAddressError);
  },

  "Billing Address City field validation message should be hidden": function(browser) {
    browser
    .waitForElementPresent(checkout.billingAddressCity, getConfig().bigtimeout)
    .clearValue(checkout.billingAddressCity)
    .setValue(checkout.billingAddressCity, "test")
    .waitForElementPresent(checkout.btnNewCardSubmit, getConfig().timeout)
    .click(checkout.btnNewCardSubmit)
    .moveToElement(checkout.spanBillingAddressCity, undefined, undefined)
    .assert.elementNotPresent(checkout.billingAddressCityError);
  },

  "Billing Address City field required validation message should be visible": function(browser) {
    browser
    .waitForElementPresent(checkout.billingAddressCity, getConfig().bigtimeout)
    .clearValue(checkout.billingAddressCity)
    .waitForElementPresent(checkout.btnNewCardSubmit, getConfig().timeout)
    .click(checkout.btnNewCardSubmit)
    .moveToElement(checkout.spanBillingAddressCity, undefined, undefined)
    .waitForElementPresent(checkout.billingAddressCityError, getConfig().timeout)
    .assert.visible(checkout.billingAddressCityError);
  },

  "Billing Address Zip field validation message should be hidden": function(browser) {
    browser
    .waitForElementPresent(checkout.billingAddressZip, getConfig().bigtimeout)
    .clearValue(checkout.billingAddressZip)
    .setValue(checkout.billingAddressZip, "11111")
    .waitForElementPresent(checkout.btnNewCardSubmit, getConfig().timeout)
    .click(checkout.btnNewCardSubmit)
    .moveToElement(checkout.spanBillingAddressZip, undefined, undefined)
    .assert.elementNotPresent(checkout.billingAddressZipError);
  },

  "Billing Address Zip field required validation message should be visible": function(browser) {
    browser
    .waitForElementPresent(checkout.billingAddressZip, getConfig().bigtimeout)
    .clearValue(checkout.billingAddressZip)
    .waitForElementPresent(checkout.btnNewCardSubmit, getConfig().timeout)
    .click(checkout.btnNewCardSubmit)
    .moveToElement(checkout.spanBillingAddressZip, undefined, undefined)
    .waitForElementPresent(checkout.billingAddressZipError, getConfig().timeout)
    .assert.visible(checkout.billingAddressZipError);
  }


};
