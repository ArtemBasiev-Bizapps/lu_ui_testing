const { getConfig } = require('../../config');
const enrollment = require('../../page-objects/enrollment');
const methods = {
  fillShippingAddressInfo: function(browser) {
    browser
    .waitForElementPresent(enrollment.shippingCheckbox, getConfig().bigtimeout)
    .click(enrollment.shippingCheckbox)
    .waitForElementPresent(enrollment.shippingAddressFirstName, getConfig().timeout)
    .waitForElementVisible(enrollment.shippingAddressFirstName, getConfig().timeout)
    .clearValue(enrollment.shippingAddressFirstName)
    .setValue(enrollment.shippingAddressFirstName, 'test')
    .waitForElementPresent(enrollment.shippingAddressLastName, getConfig().timeout)
    .clearValue(enrollment.shippingAddressLastName)
    .setValue(enrollment.shippingAddressLastName, 'test')
    .waitForElementPresent(enrollment.shippingAddressPhone, getConfig().timeout)
    .clearValue(enrollment.shippingAddressPhone)
    .setValue(enrollment.shippingAddressPhone, '6666666666')
    .waitForElementPresent(enrollment.shippingAddressEmail, getConfig().timeout)
    .clearValue(enrollment.shippingAddressEmail)
    .setValue(enrollment.shippingAddressEmail, 'test@mail.com')
    .waitForElementPresent(enrollment.shippingAddress, getConfig().timeout)
    .clearValue(enrollment.shippingAddress)
    .setValue(enrollment.shippingAddress, 'test')
    .waitForElementPresent(enrollment.shippingAddressCity, getConfig().timeout)
    .clearValue(enrollment.shippingAddressCity)
    .setValue(enrollment.shippingAddressCity, 'test')
    .waitForElementPresent(enrollment.shippingAddressZip, getConfig().timeout)
    .clearValue(enrollment.shippingAddressZip)
    .setValue(enrollment.shippingAddressZip, '11111');
  },
  fillBillingAddressInfo: function(browser){
    browser     
    .waitForElementPresent(enrollment.billingCheckbox, getConfig().bigtimeout)
    .click(enrollment.billingCheckbox)
    .waitForElementPresent(enrollment.billingAddress, getConfig().timeout)
    .waitForElementVisible(enrollment.billingAddress, getConfig().timeout)
    .clearValue(enrollment.billingAddress)
    .setValue(enrollment.billingAddress, 'test')
    .waitForElementPresent(enrollment.billingAddressCity, getConfig().timeout)
    .clearValue(enrollment.billingAddressCity)
    .setValue(enrollment.billingAddressCity, 'test')
    .waitForElementPresent(enrollment.billingAddressZip, getConfig().timeout)
    .clearValue(enrollment.billingAddressZip)
    .setValue(enrollment.billingAddressZip, '11111');
  }
}

module.exports = {
  '@tags': ['enrollment'],

  beforeEach: function(browser) {   
    browser
     .url(getConfig().host+getConfig().enrollmentRelativeUrl)
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
     .waitForElementPresent(enrollment.customerFirstName, getConfig().timeout)
     .clearValue(enrollment.customerFirstName)
     .setValue(enrollment.customerFirstName, 'test')
     .waitForElementPresent(enrollment.customerLastName, getConfig().timeout)
     .clearValue(enrollment.customerLastName)
     .setValue(enrollment.customerLastName, 'test')
     .waitForElementPresent(enrollment.customerPrimaryPhone, getConfig().timeout)
     .clearValue(enrollment.customerPrimaryPhone)
     .setValue(enrollment.customerPrimaryPhone, '666666')
     .waitForElementPresent(enrollment.customerEmail, getConfig().timeout)
     .clearValue(enrollment.customerEmail)
     .setValue(enrollment.customerEmail, 'test@mail.com')
     .waitForElementPresent(enrollment.customerMainAddress, getConfig().timeout)
     .clearValue(enrollment.customerMainAddress)
     .setValue(enrollment.customerMainAddress, 'test')
     .waitForElementPresent(enrollment.customerMainAddressCity, getConfig().timeout)
     .clearValue(enrollment.customerMainAddressCity)
     .setValue(enrollment.customerMainAddressCity, 'test')
     .waitForElementPresent(enrollment.customerMainAddressZip, getConfig().timeout)
     .clearValue(enrollment.customerMainAddressZip)
     .setValue(enrollment.customerMainAddressZip, '11111')
     .waitForElementPresent(enrollment.customerLoginName, getConfig().timeout)
     .clearValue(enrollment.customerLoginName)
     .setValue(enrollment.customerLoginName, Math.random().toString(36).substr(2, 15)+Math.random().toString(36).substr(2, 15))
     .waitForElementPresent(enrollment.customerPassword, getConfig().timeout)
     .clearValue(enrollment.customerPassword)
     .setValue(enrollment.customerPassword, '1111')
     .waitForElementPresent(enrollment.customerConfirmPassword, getConfig().timeout)
     .clearValue(enrollment.customerConfirmPassword)
     .setValue(enrollment.customerConfirmPassword, '1111')
     .waitForElementPresent(enrollment.paymentMethodNameOnCard, getConfig().timeout)
     .clearValue(enrollment.paymentMethodNameOnCard)
     .setValue(enrollment.paymentMethodNameOnCard, 'test')
     .waitForElementPresent(enrollment.paymentMethodCardNumber, getConfig().timeout)
     .clearValue(enrollment.paymentMethodCardNumber)
     .setValue(enrollment.paymentMethodCardNumber, getConfig().testCardNumber);
  },

  afterEach: function(browser, done) {
    done();
  },
  after: function(browser){
    browser.end();
  },

  "Enrollment should pass with filled required fields": function(browser) {
    browser
     .waitForElementPresent(enrollment.termsCheckbox, getConfig().timeout)
     .click(enrollment.termsCheckbox)
     .waitForElementPresent(enrollment.btnSubmitEnrollment, getConfig().timeout)
     .click(enrollment.btnSubmitEnrollment)
     .waitForElementPresent(enrollment.reviewPageSubmit, getConfig().bigtimeout)
     .click(enrollment.reviewPageSubmit)
     .waitForElementPresent(enrollment.btnPrintInvoice, getConfig().bigtimeout)
     .assert.urlContains('enrollment/enrollmentcomplete');
  },

  "Enrollment shouldn't pass with unchecked terms and conditions": function(browser) {
    browser
     .waitForElementPresent(enrollment.btnSubmitEnrollment, getConfig().timeout)
     .click(enrollment.btnSubmitEnrollment)
     .pause(getConfig().timeout)
     .assert.urlContains('enrolleeinfo');
  },

  "Enrollment should pass with filled required fields and shipping info": function(browser) {
    
    methods.fillShippingAddressInfo(browser);

    browser
     .waitForElementPresent(enrollment.termsCheckbox, getConfig().timeout)
     .click(enrollment.termsCheckbox)
     .waitForElementPresent(enrollment.btnSubmitEnrollment, getConfig().timeout)
     .click(enrollment.btnSubmitEnrollment)
     .waitForElementPresent(enrollment.reviewPageSubmit, getConfig().bigtimeout)
     .click(enrollment.reviewPageSubmit)
     .waitForElementPresent(enrollment.btnPrintInvoice, getConfig().bigtimeout)
     .assert.urlContains('enrollment/enrollmentcomplete');
  },

  "Enrollment should pass with filled required fields and billing info": function(browser) {
    
    methods.fillBillingAddressInfo(browser);
    
    browser
     .waitForElementPresent(enrollment.termsCheckbox, getConfig().timeout)
     .click(enrollment.termsCheckbox)
     .waitForElementPresent(enrollment.btnSubmitEnrollment, getConfig().timeout)
     .click(enrollment.btnSubmitEnrollment)
     .waitForElementPresent(enrollment.reviewPageSubmit, getConfig().bigtimeout)
     .click(enrollment.reviewPageSubmit)
     .waitForElementPresent(enrollment.btnPrintInvoice, getConfig().bigtimeout)
     .assert.urlContains('enrollment/enrollmentcomplete');
  },

  "Enrollment should pass with filled required fields when user changed shipping method": function(browser) {
    browser
     .waitForElementPresent(enrollment.termsCheckbox, getConfig().timeout)
     .click(enrollment.termsCheckbox)
     .waitForElementPresent(enrollment.btnSubmitEnrollment, getConfig().timeout)
     .click(enrollment.btnSubmitEnrollment)
     .waitForElementPresent(enrollment.radioPickup, getConfig().bigtimeout)
     .click(enrollment.radioPickup)
     .waitForElementPresent(enrollment.reviewPageSubmit, getConfig().bigtimeout)
     .click(enrollment.reviewPageSubmit)
     .waitForElementPresent(enrollment.btnPrintInvoice, getConfig().bigtimeout)
     .assert.urlContains('enrollment/enrollmentcomplete');
  },

  "Enrollment should pass with filled required fields when user add new product": function(browser) {
    browser
     .waitForElementPresent(enrollment.termsCheckbox, getConfig().timeout)
     .click(enrollment.termsCheckbox)
     .waitForElementPresent(enrollment.btnSubmitEnrollment, getConfig().timeout)
     .click(enrollment.btnSubmitEnrollment)
     .waitForElementPresent(enrollment.btnChangePropucts, getConfig().bigtimeout)
     .click(enrollment.btnChangePropucts)
     .waitForElementPresent(enrollment.btnIncreaseProductCount, getConfig().bigtimeout)
     .click(enrollment.btnIncreaseProductCount)
     .waitForElementPresent(enrollment.btnOrderItemsContinue, getConfig().timeout)
     .click(enrollment.btnOrderItemsContinue)
     .waitForElementPresent(enrollment.reviewPageSubmit, getConfig().bigtimeout)
     .click(enrollment.reviewPageSubmit)
     .waitForElementPresent(enrollment.btnPrintInvoice, getConfig().bigtimeout)
     .assert.urlContains('enrollment/enrollmentcomplete');
  },

  "Enrollment should pass with filled required fields when user changed pack": function(browser) {
    browser
     .waitForElementPresent(enrollment.termsCheckbox, getConfig().timeout)
     .click(enrollment.termsCheckbox)
     .waitForElementPresent(enrollment.btnSubmitEnrollment, getConfig().timeout)
     .click(enrollment.btnSubmitEnrollment)
     .waitForElementPresent(enrollment.btnChangePropucts, getConfig().bigtimeout)
     .click(enrollment.btnChangePropucts)
     .waitForElementPresent(enrollment.btnToPacks, getConfig().bigtimeout)
     .click(enrollment.btnToPacks)
     .waitForElementPresent(enrollment.btnAddUltimateKit, getConfig().bigtimeout)
     .click(enrollment.btnAddUltimateKit)
     .waitForElementPresent(enrollment.btnContinue, getConfig().bigtimeout)
     .click(enrollment.btnContinue)
     .waitForElementPresent(enrollment.reviewPageSubmit, getConfig().bigtimeout)
     .click(enrollment.reviewPageSubmit)
     .waitForElementPresent(enrollment.btnPrintInvoice, getConfig().bigtimeout)
     .assert.urlContains('enrollment/enrollmentcomplete');
  },

  "Enrollment should pass with filled required fields when user changed shipping address": function(browser) {
    browser
     .waitForElementPresent(enrollment.termsCheckbox, getConfig().timeout)
     .click(enrollment.termsCheckbox)
     .waitForElementPresent(enrollment.btnSubmitEnrollment, getConfig().timeout)
     .click(enrollment.btnSubmitEnrollment)
     .waitForElementPresent(enrollment.btnChangeShippingAddress, getConfig().bigtimeout)
     .click(enrollment.btnChangeShippingAddress);

     methods.fillShippingAddressInfo(browser);

     browser
     .clearValue(enrollment.customerPassword)
     .setValue(enrollment.customerPassword, '1111')
     .clearValue(enrollment.customerConfirmPassword)
     .setValue(enrollment.customerConfirmPassword, '1111')
     .clearValue(enrollment.paymentMethodCardNumber)
     .setValue(enrollment.paymentMethodCardNumber, getConfig().testCardNumber)
     .click(enrollment.termsCheckbox)
     .click(enrollment.btnSubmitEnrollment)
     .waitForElementPresent(enrollment.reviewPageSubmit, getConfig().bigtimeout)
     .click(enrollment.reviewPageSubmit)
     .waitForElementPresent(enrollment.btnPrintInvoice, getConfig().bigtimeout)
     .assert.urlContains('enrollment/enrollmentcomplete');
  },

  "Enrollment should pass with filled required fields when user changed billing address": function(browser) {
    browser
     .waitForElementPresent(enrollment.termsCheckbox, getConfig().timeout)
     .click(enrollment.termsCheckbox)
     .waitForElementPresent(enrollment.btnSubmitEnrollment, getConfig().timeout)
     .click(enrollment.btnSubmitEnrollment)
     .waitForElementPresent(enrollment.btnChangePaymentMethod, getConfig().bigtimeout)
     .click(enrollment.btnChangePaymentMethod);

     methods.fillBillingAddressInfo(browser);

     browser
     .clearValue(enrollment.customerPassword)
     .setValue(enrollment.customerPassword, '1111')
     .clearValue(enrollment.customerConfirmPassword)
     .setValue(enrollment.customerConfirmPassword, '1111')
     .clearValue(enrollment.paymentMethodCardNumber)
     .setValue(enrollment.paymentMethodCardNumber, getConfig().testCardNumber)
     .click(enrollment.termsCheckbox)
     .click(enrollment.btnSubmitEnrollment)
     .waitForElementPresent(enrollment.reviewPageSubmit, getConfig().bigtimeout)
     .click(enrollment.reviewPageSubmit)
     .waitForElementPresent(enrollment.btnPrintInvoice, getConfig().bigtimeout)
     .assert.urlContains('enrollment/enrollmentcomplete');
  },

};
