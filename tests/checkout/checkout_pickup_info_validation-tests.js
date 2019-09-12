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
  },

  after: function(browser){
    browser.end();
  },

  "PickUp First Name field validation message should be hidden": function(browser) {
    browser
    .waitForElementPresent(checkout.pickUpFirstName, getConfig().timeout)
    .clearValue(checkout.pickUpFirstName)
    .setValue(checkout.pickUpFirstName, "test")
    .waitForElementPresent(checkout.btnPickUp, getConfig().timeout)
    .click(checkout.btnPickUp)
    .moveToElement(checkout.spanPickUpFirstName, undefined, undefined)
    .assert.elementNotPresent(checkout.pickUpFirstNameError);
  },

  "PickUp First Name field required validation message should be visible": function(browser) {
    browser
    .waitForElementPresent(checkout.pickUpFirstName, getConfig().timeout)
    .clearValue(checkout.pickUpFirstName)
    .waitForElementPresent(checkout.btnPickUp, getConfig().timeout)
    .click(checkout.btnPickUp)
    .moveToElement(checkout.spanPickUpFirstName, undefined, undefined)
    .assert.visible(checkout.pickUpFirstNameError);
  },

  "PickUp Last Name field validation message should be hidden": function(browser) {
    browser
    .waitForElementPresent(checkout.pickUpLastName, getConfig().timeout)
    .clearValue(checkout.pickUpLastName)
    .setValue(checkout.pickUpLastName, "test")
    .waitForElementPresent(checkout.btnPickUp, getConfig().timeout)
    .click(checkout.btnPickUp)
    .moveToElement(checkout.spanPickUpLastName, undefined, undefined)
    .assert.elementNotPresent(checkout.pickUpLastNameError);
  },

  "PickUp Last Name field required validation message should be visible": function(browser) {
    browser
    .waitForElementPresent(checkout.pickUpLastName, getConfig().timeout)
    .clearValue(checkout.pickUpLastName)
    .waitForElementPresent(checkout.btnPickUp, getConfig().timeout)
    .click(checkout.btnPickUp)
    .moveToElement(checkout.spanPickUpLastName, undefined, undefined)
    .assert.visible(checkout.pickUpLastNameError);
  },

  "PickUp Email field validation message should be hidden": function(browser) {
    browser
    .waitForElementPresent(checkout.pickUpEmail, getConfig().timeout)
    .clearValue(checkout.pickUpEmail)
    .setValue(checkout.pickUpEmail, "test@mail.com")
    .waitForElementPresent(checkout.btnPickUp, getConfig().timeout)
    .click(checkout.btnPickUp)
    .moveToElement(checkout.spanPickUpEmail, undefined, undefined)
    .assert.elementNotPresent(checkout.pickUpEmailError);
  },

  "PickUp Email field required validation message should be visible": function(browser) {
    browser
    .waitForElementPresent(checkout.pickUpEmail, getConfig().timeout)
    .clearValue(checkout.pickUpEmail)
    .waitForElementPresent(checkout.btnPickUp, getConfig().timeout)
    .click(checkout.btnPickUp)
    .moveToElement(checkout.spanPickUpEmail, undefined, undefined)
    .assert.visible(checkout.pickUpEmailError);
  },

  "PickUp Email field incorrect validation message should be visible": function(browser) {
    browser
    .waitForElementPresent(checkout.pickUpEmail, getConfig().timeout)
    .clearValue(checkout.pickUpEmail)
    .setValue(checkout.pickUpEmail, "test")
    .waitForElementPresent(checkout.btnPickUp, getConfig().timeout)
    .click(checkout.btnPickUp)
    .moveToElement(checkout.spanPickUpEmail, undefined, undefined)
    .assert.visible(checkout.pickUpEmailError);
  }


};
