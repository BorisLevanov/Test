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
    tasksTable:           { get: function () { return browser.element('tbody'); } },

    signOutButton:      { get: function () { return browser.element('a*=Sign Out'); } },
    navBar:             { get: function () { return browser.element('#bs-example-navbar-collapse-1'); } },
    dateField:          { get: function () { return browser.element('input[type="date"]'); } },
    hoursField:         { get: function () { return browser.element('input[placeholder="For how long?"]'); } },
    notesField:         { get: function () { return browser.element('textarea[placeholder="Notes"]'); } },
    saveTaskButton:     { get: function () { return browser.element('.btn-primary'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, '#');
    } }
});

module.exports = LoginPage;