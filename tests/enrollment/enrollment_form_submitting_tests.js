const uuidv1 = require('uuid/v1');
const { getConfig } = require('../../config');
const enrollment = require('../../page-objects/enrollment');


module.exports = {
  '@tags': ['enrollment'],

  beforeEach: function(browser) {   
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
     .clearValue(enrollment.customerFirstName)
     .setValue(enrollment.customerFirstName, 'test')
     .clearValue(enrollment.customerLastName)
     .setValue(enrollment.customerLastName, 'test')
     .clearValue(enrollment.customerPrimaryPhone)
     .setValue(enrollment.customerPrimaryPhone, '666666')
     .clearValue(enrollment.customerEmail)
     .setValue(enrollment.customerEmail, 'test@mail.com')
     .clearValue(enrollment.customerMainAddress)
     .setValue(enrollment.customerMainAddress, 'test')
     .clearValue(enrollment.customerMainAddressCity)
     .setValue(enrollment.customerMainAddressCity, 'test')
     .clearValue(enrollment.customerMainAddressZip)
     .setValue(enrollment.customerMainAddressZip, '11111')
     .clearValue(enrollment.customerLoginName)
     .setValue(enrollment.customerLoginName, Math.random().toString(36).substr(2, 15)+Math.random().toString(36).substr(2, 15))
     .clearValue(enrollment.customerPassword)
     .setValue(enrollment.customerPassword, '1111')
     .clearValue(enrollment.customerConfirmPassword)
     .setValue(enrollment.customerConfirmPassword, '1111')
     .clearValue(enrollment.paymentMethodNameOnCard)
     .setValue(enrollment.paymentMethodNameOnCard, 'test')
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
     .click(enrollment.termsCheckbox)
     .click(enrollment.btnSubmitEnrollment)
     .waitForElementPresent(enrollment.reviewPageSubmit, getConfig().bigtimeout)
     .click(enrollment.reviewPageSubmit)
     .pause(getConfig().bigtimeout)
     .assert.urlContains('enrollment/enrollmentcomplete');
  },

  "Enrollment shouldn't pass with unchecked terms and conditions": function(browser) {
    browser
     .click(enrollment.btnSubmitEnrollment)
     .pause(getConfig().bigtimeout)
     .assert.urlContains('enrolleeinfo');
  },

  "Enrollment should pass with filled required fields and shipping info": function(browser) {
    browser
     .click(enrollment.shippingCheckbox)
     .clearValue(enrollment.shippingAddressFirstName)
     .setValue(enrollment.shippingAddressFirstName, 'test')
     .clearValue(enrollment.shippingAddressLastName)
     .setValue(enrollment.shippingAddressLastName, 'test')
     .clearValue(enrollment.shippingAddressPhone)
     .setValue(enrollment.shippingAddressPhone, '6666666666')
     .clearValue(enrollment.shippingAddressEmail)
     .setValue(enrollment.shippingAddressEmail, 'test@mail.com')
     .clearValue(enrollment.shippingAddress)
     .setValue(enrollment.shippingAddress, 'test')
     .clearValue(enrollment.shippingAddressCity)
     .setValue(enrollment.shippingAddressCity, 'test')
     .clearValue(enrollment.shippingAddressZip)
     .setValue(enrollment.shippingAddressZip, '11111')
     .click(enrollment.termsCheckbox)
     .click(enrollment.btnSubmitEnrollment)
     .waitForElementPresent(enrollment.reviewPageSubmit, getConfig().bigtimeout)
     .click(enrollment.reviewPageSubmit)
     .pause(getConfig().bigtimeout)
     .assert.urlContains('enrollment/enrollmentcomplete');
  },

  "Enrollment should pass with filled required fields and billing info": function(browser) {
    browser
     .click(enrollment.billingCheckbox)
     .clearValue(enrollment.billingAddress)
     .setValue(enrollment.billingAddress, 'test')
     .clearValue(enrollment.billingAddressCity)
     .setValue(enrollment.billingAddressCity, 'test')
     .clearValue(enrollment.billingAddressZip)
     .setValue(enrollment.billingAddressZip, '11111')
     .click(enrollment.termsCheckbox)
     .click(enrollment.btnSubmitEnrollment)
     .waitForElementPresent(enrollment.reviewPageSubmit, getConfig().bigtimeout)
     .click(enrollment.reviewPageSubmit)
     .pause(getConfig().bigtimeout)
     .assert.urlContains('enrollment/enrollmentcomplete');
  }

};
