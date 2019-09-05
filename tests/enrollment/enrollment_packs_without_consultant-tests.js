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
      .pause(getConfig().timeout);
  },
  afterEach: function(browser, done) {
    done();
  },
  after: function(browser){
    browser.end();
  },


  "Enrollment packs shouldn't pass without added pack": function(browser) {
    browser
     .waitForElementPresent(enrollment.btnContinue, getConfig().timeout)
     .click(enrollment.btnContinue)
     .waitForElementPresent(enrollment.btnJoin, getConfig().timeout)
     .click(enrollment.btnJoin)
     .waitForElementPresent(enrollment.btnContinue, getConfig().timeout)
     .click(enrollment.btnContinue)
     .assert.urlContains('packs');
  },

  "Enrollment packs should pass with added pack": function(browser) {
    browser
     .waitForElementPresent(enrollment.btnContinue, getConfig().timeout)
     .click(enrollment.btnContinue)
     .waitForElementPresent(enrollment.btnJoin, getConfig().timeout)
     .click(enrollment.btnJoin)
     .waitForElementPresent(enrollment.btnAddBasicKit, getConfig().timeout)
     .click(enrollment.btnAddBasicKit)
     .waitForElementPresent(enrollment.btnContinue, getConfig().timeout)
     .click(enrollment.btnContinue)
     .pause(getConfig().timeout)
     .assert.urlContains('enrolleeinfo');
  }



};
