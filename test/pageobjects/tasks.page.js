/**
 * Tasks PageObject
 * 
 */
var Page = require('./page');

var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    // Elements
    signOutButton:      { get: function () { return browser.element('a*=Sign Out'); } },
    navBar:             { get: function () { return browser.element('#bs-example-navbar-collapse-1'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, '#');
    } }
});

module.exports = LoginPage;