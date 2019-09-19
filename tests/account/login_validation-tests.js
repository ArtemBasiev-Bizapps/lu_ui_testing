const { getConfig } = require('../../config');
const account = require('../../page-objects/account');

module.exports = {
  '@tags': ['account', 'account-validation'],
  before: function(browser) {
    browser
    .url(getConfig().host+getConfig().loginRelativeUrl)
    .waitForElementPresent('body', getConfig().timeout)
  },

  after: function(browser){
    browser.end();
  },


  "User Name field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(account.loginUserName, getConfig().timeout)
     .clearValue(account.loginUserName)
     .setValue(account.loginUserName, 'test')
     .click(account.btnLogin)
     .moveToElement(account.spanLoginUserName, undefined, undefined)
     .assert.elementNotPresent(account.loginUserNameError);
  },

  "User Name field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(account.loginUserName, getConfig().timeout)
     .clearValue(account.loginUserName)
     .click(account.btnLogin)
     .moveToElement(account.spanLoginUserName, undefined, undefined)
     .assert.visible(account.loginUserNameError);
  },

  "Password field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(account.loginPassword, getConfig().timeout)
     .clearValue(account.loginPassword)
     .setValue(account.loginPassword, 'test')
     .click(account.btnLogin)
     .moveToElement(account.spanLoginPassword, undefined, undefined)
     .assert.elementNotPresent(account.loginPasswordError);
  },
  
  "Password field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(account.loginPassword, getConfig().timeout)
     .clearValue(account.loginPassword)
     .click(account.btnLogin)
     .moveToElement(account.spanLoginPassword, undefined, undefined)
     .assert.visible(account.loginPasswordError);
  }
 

};