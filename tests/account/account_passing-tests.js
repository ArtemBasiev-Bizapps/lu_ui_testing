const { getConfig } = require('../../config');
const account = require('../../page-objects/account');


module.exports = {
  '@tags': ['account'],

  afterEach: function(browser, done) {
    browser.end(done);
  },
  after: function(browser){
    browser.end();
  },

  "Registration should pass with filled required fields": function(browser) {
    browser
    .url(getConfig().host+getConfig().registerRelativeUrl)
    .waitForElementPresent('body', getConfig().timeout)
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
    .click(account.btnSubmitRegistartion)
    .waitForElementPresent(account.accountOverViewContainer, getConfig().bigtimeout)
    .assert.urlContains('account/settings');
  },

  "Login should pass with filled required fields": function(browser) {
    browser
    .url(getConfig().host+getConfig().loginRelativeUrl)
    .waitForElementPresent('body', getConfig().timeout)
    .waitForElementPresent(account.loginUserName, getConfig().bigtimeout)
    .clearValue(account.loginUserName)
    .setValue(account.loginUserName, getConfig().testCustomerLoginName)
    .waitForElementPresent(account.loginPassword, getConfig().bigtimeout)
    .clearValue(account.loginPassword)
    .setValue(account.loginPassword, getConfig().testCustomerPassword)
    .waitForElementPresent(account.btnLogin, getConfig().timeout)
    .click(account.btnLogin)
    .waitForElementPresent(account.accountOverViewContainer, getConfig().bigtimeout)
    .assert.urlContains('account/settings');
  }

};
