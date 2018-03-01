// login.page.js
var Page = require('./page');

var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    username:           { get: function () { return browser.element('[placeholder="Username"]'); } },
    password:           { get: function () { return browser.element('[placeholder="Password"]'); } },
    submitButton:       { get: function () { return browser.element('[type="submit"]'); } },
    pageBody:           { get: function () { return browser.element('.container'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, '#');
    } },

    submit: { value: function() {
        this.submitButton.click();
    } }
});

module.exports = LoginPage;