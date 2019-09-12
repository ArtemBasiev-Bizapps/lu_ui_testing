const { getConfig } = require('../../config');
const home = require('../../page-objects/home');

module.exports = {
  '@tags': ['home', 'home-validation'],
  before: function(browser) {
    browser
      .url(getConfig().host+getConfig().contactUsRelativeUrl)
      .waitForElementPresent('body', getConfig().timeout);
  },
  after: function(browser){
    browser.end();
  },


  "Contactus Name field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(home.contactUsName, getConfig().timeout)
     .clearValue(home.contactUsName)
     .setValue(home.contactUsName, "test")
     .click(home.btnSubmitContactUs)
     .moveToElement(home.spanContactUsName, undefined, undefined)
     .assert.elementNotPresent(home.contactUsNameError);
  },

  "Contactus Name field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(home.contactUsName, getConfig().timeout)
     .clearValue(home.contactUsName)
     .click(home.btnSubmitContactUs)
     .moveToElement(home.spanContactUsName, undefined, undefined)
     .assert.visible(home.contactUsNameError);
  },

  "Contactus Phone field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(home.contactUsPhone, getConfig().timeout)
     .clearValue(home.contactUsPhone)
     .setValue(home.contactUsPhone, "1111111111")
     .click(home.btnSubmitContactUs)
     .moveToElement(home.spanContactUsPhone, undefined, undefined)
     .assert.elementNotPresent(home.contactUsPhoneError);
  },

  "Contactus Phone field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(home.contactUsPhone, getConfig().timeout)
     .clearValue(home.contactUsPhone)
     .click(home.btnSubmitContactUs)
     .moveToElement(home.spanContactUsPhone, undefined, undefined)
     .assert.visible(home.contactUsPhoneError);
  },

  "Contactus Phone field incorrect validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(home.contactUsPhone, getConfig().timeout)
     .clearValue(home.contactUsPhone)
     .setValue(home.contactUsPhone, "111")
     .click(home.btnSubmitContactUs)
     .moveToElement(home.spanContactUsPhone, undefined, undefined)
     .assert.visible(home.contactUsPhoneError);
  },

  "Contactus Email field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(home.contactUsEmail, getConfig().timeout)
     .clearValue(home.contactUsEmail)
     .setValue(home.contactUsEmail, "test@mail.com")
     .click(home.btnSubmitContactUs)
     .moveToElement(home.spanContactUsEmail, undefined, undefined)
     .assert.elementNotPresent(home.contactUsEmailError);
  },

  "Contactus Email field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(home.contactUsEmail, getConfig().timeout)
     .clearValue(home.contactUsEmail)
     .click(home.btnSubmitContactUs)
     .moveToElement(home.spanContactUsEmail, undefined, undefined)
     .assert.visible(home.contactUsEmailError);
  },

  "Contactus Email field incorrect validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(home.contactUsEmail, getConfig().timeout)
     .clearValue(home.contactUsEmail)
     .setValue(home.contactUsEmail, "test")
     .click(home.btnSubmitContactUs)
     .moveToElement(home.spanContactUsEmail, undefined, undefined)
     .assert.visible(home.contactUsEmailError);
  },

  "Contactus Notes field validation message should be hidden": function(browser) {
    browser
     .waitForElementPresent(home.contactUsNotes, getConfig().timeout)
     .clearValue(home.contactUsNotes)
     .setValue(home.contactUsNotes, "test")
     .click(home.btnSubmitContactUs)
     .moveToElement(home.spanContactUsNotes, undefined, undefined)
     .assert.elementNotPresent(home.contactUsNotesError);
  },

  "Contactus Notes field required validation message should be visible": function(browser) {
    browser
     .waitForElementPresent(home.contactUsNotes, getConfig().timeout)
     .clearValue(home.contactUsNotes)
     .click(home.btnSubmitContactUs)
     .moveToElement(home.spanContactUsNotes, undefined, undefined)
     .assert.visible(home.contactUsNotesError);
  }

};
