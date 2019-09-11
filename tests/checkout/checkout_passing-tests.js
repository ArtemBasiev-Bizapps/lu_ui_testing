const { getConfig } = require('../../config');
const checkout = require('../../page-objects/checkout');
const methods = {
    fillBillingAddress: function(browser) {
        browser    
        .waitForElementPresent(checkout.billingAddress, getConfig().timeout)
        .pause(getConfig().timeout)
        .clearValue(checkout.billingAddress)
        .setValue(checkout.billingAddress, "test")
        .waitForElementPresent(checkout.billingAddressCity, getConfig().timeout)
        .clearValue(checkout.billingAddressCity)
        .setValue(checkout.billingAddressCity, "test")
        .waitForElementPresent(checkout.billingAddressZip, getConfig().timeout)
        .clearValue(checkout.billingAddressZip)
        .setValue(checkout.billingAddressZip, "11111")
    },
    fillDeliveryInfo: function(browser) {
        browser    
        .waitForElementPresent(checkout.tabDelivery, getConfig().timeout)
        .click(checkout.tabDelivery)
        .waitForElementPresent(checkout.deliveryAddressFirstName, getConfig().timeout)
        .clearValue(checkout.deliveryAddressFirstName)
        .setValue(checkout.deliveryAddressFirstName, "test")
        .waitForElementPresent(checkout.deliveryAddressLastName, getConfig().timeout)
        .clearValue(checkout.deliveryAddressLastName)
        .setValue(checkout.deliveryAddressLastName, "test")
        .waitForElementPresent(checkout.deliveryAddressEmail, getConfig().timeout)
        .clearValue(checkout.deliveryAddressEmail)
        .setValue(checkout.deliveryAddressEmail, "test@mail.com")
        .waitForElementPresent(checkout.deliveryAddressPhone, getConfig().timeout)
        .clearValue(checkout.deliveryAddressPhone)
        .setValue(checkout.deliveryAddressPhone, "9999999999")
        .waitForElementPresent(checkout.deliveryAddress, getConfig().timeout)
        .clearValue(checkout.deliveryAddress)
        .setValue(checkout.deliveryAddress, "test")
        .waitForElementPresent(checkout.deliveryAddressCity, getConfig().timeout)
        .clearValue(checkout.deliveryAddressCity)
        .setValue(checkout.deliveryAddressCity, "test")
        .waitForElementPresent(checkout.deliveryAddressZip, getConfig().timeout)
        .clearValue(checkout.deliveryAddressZip)
        .setValue(checkout.deliveryAddressZip, "11111")
        .waitForElementPresent(checkout.btnUseDeliveryAddress, getConfig().timeout)
        .click(checkout.btnUseDeliveryAddress);
    },
    fillPickUpInfo: function(browser) {
        browser    
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
        .click(checkout.btnPickUp);
    },
    fillPaymentMethodInfo: function(browser) {
        browser 
        .pause(getConfig().timeout)
        .waitForElementPresent(checkout.nameOnCard, getConfig().timeout)
        .clearValue(checkout.nameOnCard)
        .setValue(checkout.nameOnCard, "11111")
        .waitForElementPresent(checkout.cardNumber, getConfig().timeout)
        .clearValue(checkout.cardNumber)
        .setValue(checkout.cardNumber, getConfig().testCardNumber);   
    },
    signIn: function(browser) {
      browser 
      .waitForElementPresent(checkout.loginName, getConfig().timeout)
      .clearValue(checkout.loginName)
      .setValue(checkout.loginName, getConfig().testCustomerLoginName)
      .waitForElementPresent(checkout.password, getConfig().timeout)
      .clearValue(checkout.password)
      .setValue(checkout.password, getConfig().testCustomerPassword)
      .waitForElementPresent(checkout.btnLogin, getConfig().timeout)
      .click(checkout.btnLogin);
  },
  moveToCart: function(browser) {
    browser 
    .pause(getConfig().bigtimeout)
    .click(checkout.linkCart)
    .waitForElementPresent(checkout.btnCheckout, getConfig().timeout)
    .click(checkout.btnCheckout);
 }
}


module.exports = {
  '@tags': ['checkout'],

  beforeEach: function(browser) {
    browser
    .url(getConfig().productUrl)
    .waitForElementPresent('body', getConfig().timeout)
  },

  
  afterEach: function(browser, done) {
    browser.end(done);
  },



  "Checkout as a guest with delivery and billing address should pass": function(browser) {
    browser
     .click(checkout.btnAddToCart);
     
     methods.moveToCart(browser);

    browser
     .waitForElementPresent(checkout.btnCheckoutAsGuest, getConfig().timeout)
     .click(checkout.btnCheckoutAsGuest);

     methods.fillDeliveryInfo(browser);
     methods.fillPaymentMethodInfo(browser);

     browser
     .waitForElementPresent(checkout.billingAddressCheckbox, getConfig().timeout)
     .click(checkout.billingAddressCheckbox);

     methods.fillBillingAddress(browser);

     browser
     .waitForElementPresent(checkout.btnNewCardSubmit, getConfig().timeout)
     .click(checkout.btnNewCardSubmit)
     .waitForElementPresent(checkout.btnPlaceOrder, getConfig().bigtimeout)
     .click(checkout.btnPlaceOrder)
     .pause(getConfig().bigtimeout)
     .assert.urlContains('store/thank-you');
  },

  "Checkout as a guest with delivery and without billing address should pass": function(browser) {
    browser
     .click(checkout.btnAddToCart);

     methods.moveToCart(browser);
    
    browser
     .waitForElementPresent(checkout.btnCheckoutAsGuest, getConfig().timeout)
     .click(checkout.btnCheckoutAsGuest);

     methods.fillDeliveryInfo(browser);
     methods.fillPaymentMethodInfo(browser);

     browser
     .waitForElementPresent(checkout.btnNewCardSubmit, getConfig().timeout)
     .click(checkout.btnNewCardSubmit)
     .waitForElementPresent(checkout.btnPlaceOrder, getConfig().bigtimeout)
     .click(checkout.btnPlaceOrder)
     .pause(getConfig().bigtimeout)
     .assert.urlContains('store/thank-you');
  },

  "Checkout as a guest with picking up and billing address should pass": function(browser) {
    browser
     .click(checkout.btnAddToCart);

     methods.moveToCart(browser);
    
    browser
     .waitForElementPresent(checkout.btnCheckoutAsGuest, getConfig().timeout)
     .click(checkout.btnCheckoutAsGuest);

     methods.fillPickUpInfo(browser);
     methods.fillPaymentMethodInfo(browser);
     methods.fillBillingAddress(browser);

     browser
     .waitForElementPresent(checkout.btnNewCardSubmit, getConfig().timeout)
     .click(checkout.btnNewCardSubmit)
     .waitForElementPresent(checkout.btnPlaceOrder, getConfig().bigtimeout)
     .click(checkout.btnPlaceOrder)
     .pause(getConfig().bigtimeout)
     .assert.urlContains('store/thank-you');
  },

  "Checkout with account with delivery and billing address should pass": function(browser) {
    browser
     .click(checkout.btnAddToCart);

     methods.moveToCart(browser);
     methods.signIn(browser);
     methods.fillDeliveryInfo(browser);
     methods.fillPaymentMethodInfo(browser);

     browser
     .waitForElementPresent(checkout.billingAddressCheckbox, getConfig().timeout)
     .click(checkout.billingAddressCheckbox)

     methods.fillBillingAddress(browser);

     browser
     .waitForElementPresent(checkout.btnNewCardSubmit, getConfig().timeout)
     .click(checkout.btnNewCardSubmit)
     .waitForElementPresent(checkout.btnPlaceOrder, getConfig().bigtimeout)
     .click(checkout.btnPlaceOrder)
     .pause(getConfig().bigtimeout)
     .assert.urlContains('store/thank-you');
  },

  "Checkout with account with delivery and without billing address should pass": function(browser) {
    browser
     .click(checkout.btnAddToCart);

    methods.moveToCart(browser); 
    methods.signIn(browser);
    methods.fillDeliveryInfo(browser);
    methods.fillPaymentMethodInfo(browser);

    browser
     .waitForElementPresent(checkout.btnNewCardSubmit, getConfig().timeout)
     .click(checkout.btnNewCardSubmit)
     .waitForElementPresent(checkout.btnPlaceOrder, getConfig().bigtimeout)
     .click(checkout.btnPlaceOrder)
     .pause(getConfig().bigtimeout)
     .assert.urlContains('store/thank-you');
  },

  "Checkout with account with picking up and billing address should pass": function(browser) {
    browser
     .click(checkout.btnAddToCart);

    methods.moveToCart(browser);
    methods.signIn(browser);
    methods.fillPickUpInfo(browser);
    methods.fillPaymentMethodInfo(browser);
    methods.fillBillingAddress(browser);

    browser
     .waitForElementPresent(checkout.btnNewCardSubmit, getConfig().timeout)
     .click(checkout.btnNewCardSubmit)
     .waitForElementPresent(checkout.btnPlaceOrder, getConfig().bigtimeout)
     .click(checkout.btnPlaceOrder)
     .pause(getConfig().bigtimeout)
     .assert.urlContains('store/thank-you');
  },

  "Checkout AutoOrder with delivery and billing address should pass": function(browser) {
    browser
     .click(checkout.btnSubscribe);

     methods.moveToCart(browser);
     methods.signIn(browser);
     methods.fillDeliveryInfo(browser);
     browser
     .waitForElementPresent(checkout.btnContinueAutoOrder, getConfig().bigtimeout)
     .click(checkout.btnContinueAutoOrder)
     methods.fillPaymentMethodInfo(browser);

     browser
     .waitForElementPresent(checkout.billingAddressCheckbox, getConfig().timeout)
     .click(checkout.billingAddressCheckbox)

     methods.fillBillingAddress(browser);

     browser
     .waitForElementPresent(checkout.btnNewCardSubmit, getConfig().timeout)
     .click(checkout.btnNewCardSubmit)
     .waitForElementPresent(checkout.btnPlaceOrder, getConfig().bigtimeout)
     .click(checkout.btnPlaceOrder)
     .pause(getConfig().bigtimeout)
     .assert.urlContains('store/thank-you');
  },

  "Checkout AutoOrder with delivery and without billing address should pass": function(browser) {
    browser
     .click(checkout.btnSubscribe);

    methods.moveToCart(browser); 
    methods.signIn(browser);
    methods.fillDeliveryInfo(browser);

    browser
     .waitForElementPresent(checkout.btnContinueAutoOrder, getConfig().bigtimeout)
     .click(checkout.btnContinueAutoOrder)

    methods.fillPaymentMethodInfo(browser);

    browser
     .waitForElementPresent(checkout.btnNewCardSubmit, getConfig().timeout)
     .click(checkout.btnNewCardSubmit)
     .waitForElementPresent(checkout.btnPlaceOrder, getConfig().bigtimeout)
     .click(checkout.btnPlaceOrder)
     .pause(getConfig().bigtimeout)
     .assert.urlContains('store/thank-you');
  },

  "Checkout with account with picking up and billing address should pass": function(browser) {
    browser
    .click(checkout.btnSubscribe);

    methods.moveToCart(browser);
    methods.signIn(browser);
    methods.fillPickUpInfo(browser);

    browser
     .waitForElementPresent(checkout.btnContinueAutoOrder, getConfig().bigtimeout)
     .click(checkout.btnContinueAutoOrder)

    methods.fillPaymentMethodInfo(browser);
    methods.fillBillingAddress(browser);

    browser
     .waitForElementPresent(checkout.btnNewCardSubmit, getConfig().timeout)
     .click(checkout.btnNewCardSubmit)
     .waitForElementPresent(checkout.btnPlaceOrder, getConfig().bigtimeout)
     .click(checkout.btnPlaceOrder)
     .pause(getConfig().bigtimeout)
     .assert.urlContains('store/thank-you');
  }


};
