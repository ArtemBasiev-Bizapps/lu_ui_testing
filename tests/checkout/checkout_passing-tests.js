const { getConfig } = require('../../config');
const checkout = require('../../page-objects/checkout');
const account = require('../../page-objects/account');
const methods = {
    fillBillingAddress: function(browser) {
        browser    
        .waitForElementPresent(checkout.billingAddress, getConfig().bigtimeout)
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
        .waitForElementPresent(checkout.tabDelivery, getConfig().bigtimeout)
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
        .waitForElementPresent(checkout.tabPickUp, getConfig().bigtimeout)
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
        .waitForElementPresent(checkout.nameOnCard, getConfig().bigtimeout)
        .clearValue(checkout.nameOnCard)
        .setValue(checkout.nameOnCard, "11111")
        .waitForElementPresent(checkout.cardNumber, getConfig().timeout)
        .clearValue(checkout.cardNumber)
        .setValue(checkout.cardNumber, getConfig().testCardNumber);   
    },
    signIn: function(browser) {
      browser 
      .waitForElementPresent(checkout.loginName, getConfig().bigtimeout)
      .clearValue(checkout.loginName)
      .setValue(checkout.loginName, getConfig().testCustomerLoginName)
      .waitForElementPresent(checkout.password, getConfig().timeout)
      .clearValue(checkout.password)
      .setValue(checkout.password, getConfig().testCustomerPassword)
      .waitForElementPresent(checkout.btnLogin, getConfig().timeout)
      .click(checkout.btnLogin);
  },
  createAccount: function(browser) {
    browser 
    .waitForElementPresent(account.regCustomerFirstName, getConfig().bigtimeout)
    .clearValue(account.regCustomerFirstName)
    .setValue(account.regCustomerFirstName, "test")
    .waitForElementPresent(account.regCustomerLastName, getConfig().bigtimeout)
    .clearValue(account.regCustomerLastName)
    .setValue(account.regCustomerLastName, "test")
    .waitForElementPresent(account.regCustomerEmail, getConfig().bigtimeout)
    .clearValue(account.regCustomerEmail)
    .setValue(account.regCustomerEmail, "test@mail.com")
    .waitForElementPresent(account.regCustomerLoginName, getConfig().bigtimeout)
    .clearValue(account.regCustomerLoginName)
    .setValue(account.regCustomerLoginName, Math.random().toString(36).substr(2, 15)+Math.random().toString(36).substr(2, 15))
    .waitForElementPresent(account.regCustomerPassword, getConfig().bigtimeout)
    .clearValue(account.regCustomerPassword)
    .setValue(account.regCustomerPassword, "111")
    .waitForElementPresent(account.regCustomerConfirmPassword, getConfig().bigtimeout)
    .clearValue(account.regCustomerConfirmPassword)
    .setValue(account.regCustomerConfirmPassword, "111")
    .waitForElementPresent(account.btnSubmitRegistartion, getConfig().timeout)
    .click(account.btnSubmitRegistartion);
},
  moveToCart: function(browser) {
    browser 
    .pause(getConfig().timeout)
    .waitForElementNotPresent(checkout.toastContainer, getConfig().bigtimeout)
    .pause(getConfig().timeout)
    .click(checkout.linkCart)
    .waitForElementPresent(checkout.btnCheckout, getConfig().timeout)
    .click(checkout.btnCheckout);
 }
}


module.exports = {
  '@tags': ['checkout'],

  beforeEach: function(browser) {
    browser
    .url(getConfig().host+getConfig().productRelativeUrl)
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
     .waitForElementPresent(checkout.linkOrders, getConfig().bigtimeout)
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
     .waitForElementPresent(checkout.linkOrders, getConfig().bigtimeout)
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
     .waitForElementPresent(checkout.linkOrders, getConfig().bigtimeout)
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
     .waitForElementPresent(checkout.linkOrders, getConfig().bigtimeout)
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
     .waitForElementPresent(checkout.linkOrders, getConfig().bigtimeout)
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
     .waitForElementPresent(checkout.linkOrders, getConfig().bigtimeout)
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
     .waitForElementPresent(checkout.linkOrders, getConfig().bigtimeout)
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
     .waitForElementPresent(checkout.linkOrders, getConfig().bigtimeout)
     .assert.urlContains('store/thank-you');
  },

  "Checkout AutoOrder with picking up and billing address should pass": function(browser) {
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
     .waitForElementPresent(checkout.linkOrders, getConfig().bigtimeout)
     .assert.urlContains('store/thank-you');
  },

  "Checkout as a guest with picking up and billing address should pass when user increased product count": function(browser) {
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
     .waitForElementPresent(checkout.btnChangeProduct, getConfig().bigtimeout)
     .click(checkout.btnChangeProduct)
     .waitForElementPresent(checkout.btnIncreaseProductCount, getConfig().bigtimeout)
     .click(checkout.btnIncreaseProductCount)
     .waitForElementPresent(checkout.btnCheckout, getConfig().timeout)
     .click(checkout.btnCheckout)
     .waitForElementPresent(checkout.btnPlaceOrder, getConfig().bigtimeout)
     .click(checkout.btnPlaceOrder)
     .waitForElementPresent(checkout.linkOrders, getConfig().bigtimeout)
     .assert.urlContains('store/thank-you');
  },

  "Checkout as a guest with picking up and billing address should pass when user changed pickup for delivery": function(browser) {
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
     .waitForElementPresent(checkout.btnChangeShippingAddress, getConfig().bigtimeout)
     .click(checkout.btnChangeShippingAddress);

     methods.fillDeliveryInfo(browser);

     browser
     .waitForElementPresent(checkout.btnPlaceOrder, getConfig().bigtimeout)
     .click(checkout.btnPlaceOrder)
     .waitForElementPresent(checkout.linkOrders, getConfig().bigtimeout)
     .assert.urlContains('store/thank-you');
  },

  "Checkout as a guest with delivery and without billing address should pass when user changed delivery for pickup": function(browser) {
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
     .waitForElementPresent(checkout.btnChangeShippingAddress, getConfig().bigtimeout)
     .click(checkout.btnChangeShippingAddress);

     methods.fillPickUpInfo(browser);

     browser
     .waitForElementPresent(checkout.btnPlaceOrder, getConfig().bigtimeout)
     .click(checkout.btnPlaceOrder)
     .waitForElementPresent(checkout.linkOrders, getConfig().bigtimeout)
     .assert.urlContains('store/thank-you');
  },

  "Checkout with account with delivery and with own primary card should pass": function(browser) {
    browser
     .click(checkout.btnAddToCart);

    methods.moveToCart(browser); 
    methods.signIn(browser);
    methods.fillDeliveryInfo(browser);

    browser
     .waitForElementPresent(checkout.btnUsePrimaryCard, getConfig().bigtimeout)
     .click(checkout.btnUsePrimaryCard)
     .waitForElementPresent(checkout.btnPlaceOrder, getConfig().bigtimeout)
     .click(checkout.btnPlaceOrder)
     .waitForElementPresent(checkout.linkOrders, getConfig().bigtimeout)
     .assert.urlContains('store/thank-you');
  },

  "Checkout with account with delivery and without billing address should pass when user changed credit card": function(browser) {
    browser
     .click(checkout.btnAddToCart);

    methods.moveToCart(browser); 
    methods.signIn(browser);
    methods.fillDeliveryInfo(browser);
    methods.fillPaymentMethodInfo(browser);

    browser
     .waitForElementPresent(checkout.btnNewCardSubmit, getConfig().timeout)
     .click(checkout.btnNewCardSubmit)
     .waitForElementPresent(checkout.btnChangePaymentMethod, getConfig().bigtimeout)
     .click(checkout.btnChangePaymentMethod)
     .waitForElementPresent(checkout.btnUsePrimaryCard, getConfig().bigtimeout)
     .click(checkout.btnUsePrimaryCard)
     .waitForElementPresent(checkout.btnPlaceOrder, getConfig().bigtimeout)
     .click(checkout.btnPlaceOrder)
     .waitForElementPresent(checkout.linkOrders, getConfig().bigtimeout)
     .assert.urlContains('store/thank-you');
  },

  "Checkout as a guest with delivery and without billing address should pass when user changed shipping method": function(browser) {
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
     .waitForElementPresent(checkout.radioLocalPickup, getConfig().bigtimeout)
     .click(checkout.radioLocalPickup)
     .waitForElementPresent(checkout.btnPlaceOrder, getConfig().bigtimeout)
     .click(checkout.btnPlaceOrder)
     .waitForElementPresent(checkout.linkOrders, getConfig().bigtimeout)
     .assert.urlContains('store/thank-you');
  },

  "Checkout with new account with pickup and without billing address should pass": function(browser) {
    browser
     .click(checkout.btnAddToCart);

     methods.moveToCart(browser);
    
    browser
     .waitForElementPresent(account.btnCreateAccount, getConfig().timeout)
     .click(account.btnCreateAccount);

     methods.createAccount(browser);
     methods.fillDeliveryInfo(browser);
     methods.fillPaymentMethodInfo(browser);

     browser
     .waitForElementPresent(checkout.btnNewCardSubmit, getConfig().timeout)
     .click(checkout.btnNewCardSubmit)
     .waitForElementPresent(checkout.btnPlaceOrder, getConfig().bigtimeout)
     .click(checkout.btnPlaceOrder)
     .waitForElementPresent(checkout.linkOrders, getConfig().bigtimeout)
     .assert.urlContains('store/thank-you');
  },




};
