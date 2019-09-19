const { getConfig } = require('../../config');
const account = require('../../page-objects/account');

module.exports = {
  '@tags': ['account', 'account-validation'],
  before: function(browser) {
    browser
    .url(getConfig().host+getConfig().registerRelativeUrl)
    .waitForElementPresent('body', getConfig().timeout)
  },

  after: function(browser){
    browser.end();
  },


  "First Name field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(account.regCustomerFirstName, getConfig().timeout)
     .clearValue(account.regCustomerFirstName)
     .setValue(account.regCustomerFirstName, 'test')
     .click(account.btnSubmitRegistartion)
     .moveToElement(account.spanRegCustomerFirstName, undefined, undefined)
     .assert.elementNotPresent(account.regCustomerFirstNameError);
  },

  "First Name field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(account.regCustomerFirstName, getConfig().timeout)
     .clearValue(account.regCustomerFirstName)
     .click(account.btnSubmitRegistartion)
     .moveToElement(account.spanRegCustomerFirstName, undefined, undefined)
     .assert.visible(account.regCustomerFirstNameError);
  },

  "Last Name field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(account.regCustomerLastName, getConfig().timeout)
     .clearValue(account.regCustomerLastName)
     .setValue(account.regCustomerLastName, 'test')
     .click(account.btnSubmitRegistartion)
     .moveToElement(account.spanRegCustomerLastName, undefined, undefined)
     .assert.elementNotPresent(account.regCustomerLastNameError);
  },

  "Last Name field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(account.regCustomerLastName, getConfig().timeout)
     .clearValue(account.regCustomerLastName)
     .click(account.btnSubmitRegistartion)
     .moveToElement(account.spanRegCustomerLastName, undefined, undefined)
     .assert.visible(account.regCustomerLastNameError);
  },

  "Email field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(account.regCustomerEmail, getConfig().timeout)
     .clearValue(account.regCustomerEmail)
     .setValue(account.regCustomerEmail, 'test@mail.com')
     .click(account.btnSubmitRegistartion)
     .moveToElement(account.spanRegCustomerEmail, undefined, undefined)
     .assert.elementNotPresent(account.regCustomerEmailError);
  },

  "Email field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(account.regCustomerEmail, getConfig().timeout)
     .clearValue(account.regCustomerEmail)
     .click(account.btnSubmitRegistartion)
     .moveToElement(account.spanRegCustomerEmail, undefined, undefined)
     .assert.visible(account.regCustomerEmailError);
  },

  "Email field incorrect validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(account.regCustomerEmail, getConfig().timeout)
     .clearValue(account.regCustomerEmail)
     .setValue(account.regCustomerEmail, 'test')
     .click(account.btnSubmitRegistartion)
     .moveToElement(account.spanRegCustomerEmail, undefined, undefined)
     .assert.visible(account.regCustomerEmailError);
  },

  
  "User Name field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(account.regCustomerLoginName, getConfig().timeout)
     .clearValue(account.regCustomerLoginName)
     .setValue(account.regCustomerLoginName, Math.random().toString(36).substr(2, 15)+Math.random().toString(36).substr(2, 15))
     .click(account.btnSubmitRegistartion)
     .moveToElement(account.spanRegCustomerLoginName, undefined, undefined)
     .assert.elementNotPresent(account.regCustomerLoginNameError);
  },

  "User Name field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(account.regCustomerLoginName, getConfig().timeout)
     .clearValue(account.regCustomerLoginName)
     .click(account.btnSubmitRegistartion)
     .moveToElement(account.spanRegCustomerLoginName, undefined, undefined)
     .assert.visible(account.regCustomerLoginNameError);
  },

  "User Name field incorrect validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(account.regCustomerLoginName, getConfig().timeout)
     .clearValue(account.regCustomerLoginName)
     .setValue(account.regCustomerLoginName, '--')
     .click(account.btnSubmitRegistartion)
     .moveToElement(account.spanRegCustomerLoginName, undefined, undefined)
     .assert.visible(account.regCustomerLoginNameError);
  },

  "Password field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(account.regCustomerPassword, getConfig().timeout)
     .clearValue(account.regCustomerPassword)
     .setValue(account.regCustomerPassword, "111")
     .click(account.btnSubmitRegistartion)
     .moveToElement(account.spanRegCustomerPassword, undefined, undefined)
     .assert.elementNotPresent(account.regCustomerPasswordError);
  },

  "Password field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(account.regCustomerPassword, getConfig().timeout)
     .clearValue(account.regCustomerPassword)
     .click(account.btnSubmitRegistartion)
     .moveToElement(account.spanRegCustomerPassword, undefined, undefined)
     .assert.visible(account.regCustomerPasswordError);
  },

  "ConfirmPassword field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(account.regCustomerPassword, getConfig().timeout)
     .clearValue(account.regCustomerPassword)
     .setValue(account.regCustomerPassword, "111")
     .waitForElementPresent(account.regCustomerConfirmPassword, getConfig().timeout)
     .clearValue(account.regCustomerConfirmPassword)
     .setValue(account.regCustomerConfirmPassword, "111")
     .click(account.btnSubmitRegistartion)
     .moveToElement(account.spanRegCustomerConfirmPassword, undefined, undefined)
     .assert.elementNotPresent(account.regCustomerConfirmPasswordError);
  },

  "ConfirmPassword field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(account.regCustomerConfirmPassword, getConfig().timeout)
     .clearValue(account.regCustomerConfirmPassword)
     .click(account.btnSubmitRegistartion)
     .moveToElement(account.spanRegCustomerConfirmPassword, undefined, undefined)
     .assert.visible(account.regCustomerConfirmPasswordError);
  },

  "ConfirmPassword field mismached validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(account.regCustomerPassword, getConfig().timeout)
     .clearValue(account.regCustomerPassword)
     .setValue(account.regCustomerPassword, "111")
     .waitForElementPresent(account.regCustomerConfirmPassword, getConfig().timeout)
     .clearValue(account.regCustomerConfirmPassword)
     .setValue(account.regCustomerConfirmPassword, "222")
     .click(account.btnSubmitRegistartion)
     .moveToElement(account.spanRegCustomerConfirmPassword, undefined, undefined)
     .assert.visible(account.regCustomerConfirmPasswordError);
  }

};