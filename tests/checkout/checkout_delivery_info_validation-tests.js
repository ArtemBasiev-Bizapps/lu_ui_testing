const { getConfig } = require('../../config');
const checkout = require('../../page-objects/checkout');

module.exports = {
  '@tags': ['checkout', 'checkout-validation'],

  before: function(browser) {
    browser
    .url(getConfig().host+getConfig().productRelativeUrl)
    .waitForElementPresent('body', getConfig().timeout)
    .click(checkout.btnAddToCart)
    .pause(getConfig().timeout)
    .waitForElementNotPresent(checkout.toastContainer, getConfig().bigtimeout)
    .pause(getConfig().timeout)
    .click(checkout.linkCart)
    .waitForElementPresent(checkout.btnCheckout, getConfig().timeout)
    .click(checkout.btnCheckout)
    .waitForElementPresent(checkout.btnCheckoutAsGuest, getConfig().timeout)
    .click(checkout.btnCheckoutAsGuest)
    .waitForElementPresent(checkout.tabDelivery, getConfig().timeout)
    .click(checkout.tabDelivery)
  },

  after: function(browser){
    browser.end();
  },

  "Delivery Address First Name field validation message should be hidden": function(browser) {
    browser
    .waitForElementPresent(checkout.deliveryAddressFirstName, getConfig().timeout)
    .clearValue(checkout.deliveryAddressFirstName)
    .setValue(checkout.deliveryAddressFirstName, "test")
    .waitForElementPresent(checkout.btnUseDeliveryAddress, getConfig().timeout)
    .click(checkout.btnUseDeliveryAddress)
    .moveToElement(checkout.spanDeliveryAddressFirstName, undefined, undefined)
    .assert.elementNotPresent(checkout.deliveryAddressFirstNameError);
  },

  "Delivery Address First Name field required validation message should be visible": function(browser) {
    browser
    .waitForElementPresent(checkout.deliveryAddressFirstName, getConfig().timeout)
    .clearValue(checkout.deliveryAddressFirstName)
    .waitForElementPresent(checkout.btnUseDeliveryAddress, getConfig().timeout)
    .click(checkout.btnUseDeliveryAddress)
    .moveToElement(checkout.spanDeliveryAddressFirstName, undefined, undefined)
    .assert.visible(checkout.deliveryAddressFirstNameError);
  },

  "Delivery Address Last Name field validation message should be hidden": function(browser) {
    browser
    .waitForElementPresent(checkout.deliveryAddressLastName, getConfig().timeout)
    .clearValue(checkout.deliveryAddressLastName)
    .setValue(checkout.deliveryAddressLastName, "test")
    .waitForElementPresent(checkout.btnUseDeliveryAddress, getConfig().timeout)
    .click(checkout.btnUseDeliveryAddress)
    .moveToElement(checkout.spanDeliveryAddressLastName, undefined, undefined)
    .assert.elementNotPresent(checkout.deliveryAddressLastNameError);
  },

  "Delivery Address Last Name field required validation message should be visible": function(browser) {
    browser
    .waitForElementPresent(checkout.deliveryAddressLastName, getConfig().timeout)
    .clearValue(checkout.deliveryAddressLastName)
    .waitForElementPresent(checkout.btnUseDeliveryAddress, getConfig().timeout)
    .click(checkout.btnUseDeliveryAddress)
    .moveToElement(checkout.spanDeliveryAddressLastName, undefined, undefined)
    .assert.visible(checkout.deliveryAddressLastNameError);
  },

  "Delivery Address Email field validation message should be hidden": function(browser) {
    browser
    .waitForElementPresent(checkout.deliveryAddressEmail, getConfig().timeout)
    .clearValue(checkout.deliveryAddressEmail)
    .setValue(checkout.deliveryAddressEmail, "test@mail.com")
    .waitForElementPresent(checkout.btnUseDeliveryAddress, getConfig().timeout)
    .click(checkout.btnUseDeliveryAddress)
    .moveToElement(checkout.spanDeliveryAddressEmail, undefined, undefined)
    .assert.elementNotPresent(checkout.deliveryAddressEmailError);
  },

  "Delivery Address Email field required validation message should be visible": function(browser) {
    browser
    .waitForElementPresent(checkout.deliveryAddressEmail, getConfig().timeout)
    .clearValue(checkout.deliveryAddressEmail)
    .waitForElementPresent(checkout.btnUseDeliveryAddress, getConfig().timeout)
    .click(checkout.btnUseDeliveryAddress)
    .moveToElement(checkout.spanDeliveryAddressEmail, undefined, undefined)
    .assert.visible(checkout.deliveryAddressEmailError);
  },

  "Delivery Address Email field incorrect validation message should be visible": function(browser) {
    browser
    .waitForElementPresent(checkout.deliveryAddressEmail, getConfig().timeout)
    .clearValue(checkout.deliveryAddressEmail)
    .setValue(checkout.deliveryAddressEmail, "test")
    .waitForElementPresent(checkout.btnUseDeliveryAddress, getConfig().timeout)
    .click(checkout.btnUseDeliveryAddress)
    .moveToElement(checkout.spanDeliveryAddressEmail, undefined, undefined)
    .assert.visible(checkout.deliveryAddressEmailError);
  },

  "Delivery Address Phone field validation message should be hidden": function(browser) {
    browser
    .waitForElementPresent(checkout.deliveryAddressPhone, getConfig().timeout)
    .clearValue(checkout.deliveryAddressPhone)
    .setValue(checkout.deliveryAddressPhone, "9999999999")
    .waitForElementPresent(checkout.btnUseDeliveryAddress, getConfig().timeout)
    .click(checkout.btnUseDeliveryAddress)
    .moveToElement(checkout.spanDeliveryAddressPhone, undefined, undefined)
    .assert.elementNotPresent(checkout.deliveryAddressPhoneError);
  },

  "Delivery Address Phone field required validation message should be visible": function(browser) {
    browser
    .waitForElementPresent(checkout.deliveryAddressPhone, getConfig().timeout)
    .clearValue(checkout.deliveryAddressPhone)
    .waitForElementPresent(checkout.btnUseDeliveryAddress, getConfig().timeout)
    .click(checkout.btnUseDeliveryAddress)
    .moveToElement(checkout.spanDeliveryAddressPhone, undefined, undefined)
    .assert.visible(checkout.deliveryAddressPhoneError);
  },

  "Delivery Address Phone field incorrect validation message should be visible": function(browser) {
    browser
    .waitForElementPresent(checkout.deliveryAddressPhone, getConfig().timeout)
    .clearValue(checkout.deliveryAddressPhone)
    .setValue(checkout.deliveryAddressPhone, "9999")
    .waitForElementPresent(checkout.btnUseDeliveryAddress, getConfig().timeout)
    .click(checkout.btnUseDeliveryAddress)
    .moveToElement(checkout.spanDeliveryAddressPhone, undefined, undefined)
    .assert.visible(checkout.deliveryAddressPhoneError);
  },

  "Delivery Address field validation message should be hidden": function(browser) {
    browser
    .waitForElementPresent(checkout.deliveryAddress, getConfig().timeout)
    .clearValue(checkout.deliveryAddress)
    .setValue(checkout.deliveryAddress, "test")
    .waitForElementPresent(checkout.btnUseDeliveryAddress, getConfig().timeout)
    .click(checkout.btnUseDeliveryAddress)
    .moveToElement(checkout.spanDeliveryAddress, undefined, undefined)
    .assert.elementNotPresent(checkout.deliveryAddressError);
  },

  "Delivery Address field required validation message should be visible": function(browser) {
    browser
    .waitForElementPresent(checkout.deliveryAddress, getConfig().timeout)
    .clearValue(checkout.deliveryAddress)
    .waitForElementPresent(checkout.btnUseDeliveryAddress, getConfig().timeout)
    .click(checkout.btnUseDeliveryAddress)
    .moveToElement(checkout.spanDeliveryAddress, undefined, undefined)
    .assert.visible(checkout.deliveryAddressError);
  },

  "Delivery Address City field validation message should be hidden": function(browser) {
    browser
    .waitForElementPresent(checkout.deliveryAddressCity, getConfig().timeout)
    .clearValue(checkout.deliveryAddressCity)
    .setValue(checkout.deliveryAddressCity, "test")
    .waitForElementPresent(checkout.btnUseDeliveryAddress, getConfig().timeout)
    .click(checkout.btnUseDeliveryAddress)
    .moveToElement(checkout.spanDeliveryAddressCity, undefined, undefined)
    .assert.elementNotPresent(checkout.deliveryAddressCityError);
  },

  "Delivery Address City field required validation message should be visible": function(browser) {
    browser
    .waitForElementPresent(checkout.deliveryAddressCity, getConfig().timeout)
    .clearValue(checkout.deliveryAddressCity)
    .waitForElementPresent(checkout.btnUseDeliveryAddress, getConfig().timeout)
    .click(checkout.btnUseDeliveryAddress)
    .moveToElement(checkout.spanDeliveryAddressCity, undefined, undefined)
    .assert.visible(checkout.deliveryAddressCityError);
  },

  "Delivery Address Zip field validation message should be hidden": function(browser) {
    browser
    .waitForElementPresent(checkout.deliveryAddressZip, getConfig().timeout)
    .clearValue(checkout.deliveryAddressZip)
    .setValue(checkout.deliveryAddressZip, "11111")
    .waitForElementPresent(checkout.btnUseDeliveryAddress, getConfig().timeout)
    .click(checkout.btnUseDeliveryAddress)
    .moveToElement(checkout.spanDeliveryAddressZip, undefined, undefined)
    .assert.elementNotPresent(checkout.deliveryAddressZipError);
  },

  "Delivery Address Zip field required validation message should be visible": function(browser) {
    browser
    .waitForElementPresent(checkout.deliveryAddressZip, getConfig().timeout)
    .clearValue(checkout.deliveryAddressZip)
    .waitForElementPresent(checkout.btnUseDeliveryAddress, getConfig().timeout)
    .click(checkout.btnUseDeliveryAddress)
    .moveToElement(checkout.spanDeliveryAddressZip, undefined, undefined)
    .assert.visible(checkout.deliveryAddressZipError);
  },


};
