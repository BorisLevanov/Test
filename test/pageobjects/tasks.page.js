// login.page.js
var Page = require('./page');

var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    // Elements
    signOutButton:      { get: function () { return browser.element('a*=Sign Out'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, '#');
    } }
});

module.exports = LoginPage;